import type { AuthoredCourse } from "./authored-course";

// CONST-01 · Basic Safety. A PRIVATE STUDY companion for BAM while he takes the Construction
// Training course at John Boner Neighborhood Centers in Indianapolis. Assumed slug:
// "construction-basic-safety". Registered price 0, priceType "free", visibility "private"
// (INSERT-ONLY), with a publishHoldReason. It is never published and never sold.
//
// THE SOURCING RULE, which is the whole design of this file:
// BAM owns the NCCER/Pearson Core textbook and the Applied Construction Math workbook. Both are
// all-rights-reserved, and files under scripts/data/ are TRACKED IN GIT, so "private" is a property
// of the app and not of this text. Nothing here paraphrases, summarises or reproduces those books.
// Instead this course teaches construction safety FROM THE FEDERAL REGULATION, which is public
// domain and is the actual subject: 29 CFR Part 1926, Safety and Health Regulations for
// Construction. A textbook is a summary of the regulation. Teaching from the regulation is teaching
// from the source, and it is what a jobsite is inspected against.
//
// Each lesson states which NCCER Core module it supports (all of them support 00101, Basic Safety /
// Construction Site Safety Orientation) so BAM can line the reading up with class, and cites the
// section number so he can read the law itself rather than anybody's account of it.
//
// FETCH-OR-DO-NOT-CITE. Every CFR section, statute, penalty amount and statistic in this file was
// retrieved on 2026-09-09 and read in full during authoring:
//   * 29 CFR 1926 subparts A, C, D, E, K, L and M, and 29 CFR 1910.1200 and 1904.39, via the eCFR
//     versioner API (title-29, 2026-09-01 snapshot) at ecfr.gov.
//   * osha.gov/data/commonstats, /top10citedstandards, /stop-falls, /training/outreach,
//     /laws-regs/oshact/section_5, /laws-regs/oshact/section_11, /workers, /penalties,
//     /training/outreach/construction/focus-four, /stateplans/in.
// Nothing is cited that was not retrieved. Where a number could not be retrieved (the construction
// fatality counts for three of the four Focus Four hazards), the lesson SAYS SO and omits the
// number rather than reaching for a plausible one. A wrong regulatory citation is exactly what a
// reader will check, and on this subject a wrong one can get somebody hurt.
//
// WHAT THIS FILE MUST NEVER IMPLY, stated once here and again in lesson 1: that reading it
// satisfies OSHA 10 or OSHA 30, earns an NCCER credential, or substitutes for the John Boner
// program. It is study support for a course somebody else teaches, and the regulation, not this
// course, is authoritative.
//
// House style, matching deaf-america-course.ts: `section` on every lesson; flush-left single-line
// `:::reveal q ||| a`; a `## Vocabulary` block of 3-6 terms; APA 7 `## Sources`; a quiz per teaching
// section serving 5; a final serving 10, last in the array; passingScore 80; shuffleOptions true;
// `explanation` + `sourceLessonSlug` on every question. Correct options are written SHORT and
// distractors long and specifically wrong, most of them reusing a real subpart letter or section
// number, so answering requires knowing which rule is which rather than which option is longest.
export const CONSTRUCTION_SAFETY_COURSE: AuthoredCourse = {
  title: "Basic Construction Safety: What 29 CFR 1926 Actually Says",
  description:
    "Private study notes, written to sit alongside NCCER Core module 00101, Basic Safety (Construction Site Safety Orientation), for someone taking a construction training course taught by somebody else. It teaches the subject from the federal regulation rather than from a textbook, because the regulation is the source: 29 CFR Part 1926 is what a jobsite is inspected against, it is public domain, and every rule in here carries the section number so you can go and read the law instead of taking anyone's word for it. Coverage follows the regulation's own shape. Subpart C sets out what an employer owes every worker. Subpart M covers falls, which OSHA's own fall prevention campaign records as the leading cause of death in construction: 389 fatal falls to a lower level out of 1,034 construction deaths in 2024. Subpart E covers personal protective equipment and who pays for it. Subpart L covers scaffolds and Subpart K covers electrical work, and the hazard communication standard at 1910.1200 covers the chemicals in the containers nobody reads. Along the way it covers what OSHA's Focus Four are, what a citation costs an employer, and the rights the statute gives a worker who reports a hazard. Reading this does not satisfy OSHA 10 or OSHA 30, does not earn an NCCER credential, and does not substitute for a taught course. The regulation is authoritative and this is one person's notes on it.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1 — What this is, and where the rules come from
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "what-this-course-is",
      title: "1 · What this is, and what it is not",
      section: "Section 1 · What this is, and where the rules come from",
      body: `**Supports NCCER Core module 00101, Basic Safety (Construction Site Safety Orientation).**

These are study notes. They exist to sit alongside a construction training course taught by somebody else, at John Boner Neighborhood Centers in Indianapolis, and to make the reading for module 00101 stick. Read that sentence as a limit, not as modesty, because four things follow from it.

**This does not earn anything.** It is not OSHA 10 and it is not OSHA 30. Those are classes in OSHA's Outreach Training Program, delivered by OSHA-authorized trainers, and OSHA says of them in plain words on its own page that the program "is a voluntary program and does not meet the training requirements for any OSHA standards" and that "None of the courses within the Outreach Training Program is considered a certification." If an employer or a union asks for a 10-hour card, only a class from an authorized trainer produces one. This is not an NCCER credential either. NCCER is an accrediting body, credentials come from its accredited providers, and no set of notes can substitute for the program that issues them.

**The regulation is authoritative, and this is not.** Every rule below carries a section number. When the note and the regulation disagree, the regulation wins, and the section number is there so the disagreement can be settled in about a minute. Read the section rather than trusting the summary, especially before doing anything on a site.

**It describes duties, it does not issue instructions.** Construction safety is a subject where being approximately right can put somebody in a hospital. So where a rule sets a number, the number is quoted with its citation. Where a rule requires a judgment on site, the note says who the regulation puts that judgment on, which is usually a competent person or a qualified person, and stops there. A written note is not a jobsite authority and cannot see the site.

**How to read a citation, because the whole course depends on it.** In 29 CFR 1926.501(b)(1), the 29 is the title of the Code of Federal Regulations that holds labor rules, 1926 is the part that holds construction, 501 is the section, and (b)(1) is the paragraph inside it. Sections are grouped into lettered subparts: C is general provisions, E is personal protective equipment, K is electrical, L is scaffolds, M is fall protection. A citation is an address, and the whole part is free to read at ecfr.gov.

**What this course does not cover.** Part 1926 is very large. These notes cover subparts C, E, K, L and M and the hazard communication standard. Excavations and trenching (Subpart P), cranes (Subpart CC), ladders and stairways (Subpart X), welding (Subpart J) and confined spaces (Subpart AA) are all real, all deadly and all out of scope here. Their absence is a boundary of the notes, not a statement about the hazard.

:::reveal Does finishing this course produce an OSHA 10 card, an OSHA 30 card, or an NCCER credential? ||| No. OSHA 10 and OSHA 30 are Outreach Training Program classes taught by OSHA-authorized trainers, and OSHA states that the program is voluntary, does not meet the training requirements for any OSHA standard, and is not a certification. NCCER credentials come from its accredited providers.

:::reveal In the citation 29 CFR 1926.501(b)(1), what is each piece? ||| 29 is the CFR title covering labor, 1926 is the part covering construction, 501 is the section, and (b)(1) is the paragraph within that section.

:::reveal When these notes and the regulation disagree, which one governs? ||| The regulation. The notes carry section numbers precisely so the reader can check them, and the reader should.

## Vocabulary
- **29 CFR Part 1926**: the federal Safety and Health Regulations for Construction, the body of rules a construction jobsite is inspected against.
- **Subpart**: a lettered grouping of sections inside a part, such as Subpart M for fall protection or Subpart E for personal protective equipment.
- **Outreach Training Program**: OSHA's voluntary 10-hour and 30-hour awareness classes, which OSHA states are not certifications and do not satisfy any standard's training requirement.
- **Accrediting body**: an organisation that authorises other providers to deliver and credential a curriculum, which is what NCCER is and what a set of private notes cannot be.
- **eCFR**: the Electronic Code of Federal Regulations at ecfr.gov, the continuously updated official text of the regulation.

## Sources
Occupational Safety and Health Administration. (n.d.). *Outreach Training Program*. U.S. Department of Labor. Retrieved September 9, 2026, from https://www.osha.gov/training/outreach

Safety and Health Regulations for Construction, 29 C.F.R. pt. 1926 (2026). https://www.ecfr.gov/current/title-29/part-1926`,
    },
    {
      slug: "the-act-the-part-and-indiana",
      title: "2 · The Act, the Part, and Indiana",
      section: "Section 1 · What this is, and where the rules come from",
      body: `**Supports NCCER Core module 00101, Basic Safety (Construction Site Safety Orientation).**

Part 1926 does not float free. It is written under a statute, and the statute says something short and very broad that survives every gap in the detailed rules.

**Section 5 of the Occupational Safety and Health Act, at 29 U.S.C. 654.** Subsection 5(a)(1), which everyone calls the general duty clause, says each employer "shall furnish to each of his employees employment and a place of employment which are free from recognized hazards that are causing or are likely to cause death or serious physical harm to his employees." Subsection 5(a)(2) says the employer shall comply with the standards issued under the Act. Subsection 5(b) puts a duty on the worker too: each employee "shall comply with occupational safety and health standards and all rules, regulations, and orders issued pursuant to this Act which are applicable to his own actions and conduct." Note the asymmetry that matters in practice. The employer duty is to furnish the place; the employee duty is limited to his own actions and conduct.

**Why the general duty clause exists.** No list of standards can name every hazard. When a hazard is recognized and serious and no specific standard reaches it, 5(a)(1) still does. When a specific standard does reach it, that standard governs: 1926.20(d)(1) says a standard specifically applicable to a condition or practice prevails over a different general standard that might otherwise apply.

**Five definitions from 1926.32 that decide who may do what.** A **competent person**, at 1926.32(f), is one capable of identifying existing and predictable hazards in the surroundings or working conditions and who "has authorization to take prompt corrective measures to eliminate them." Both halves are required: spotting it is not enough without the authority to stop it. A **qualified person**, at 1926.32(m), is one who by a recognized degree, certificate or professional standing, or by extensive knowledge, training and experience, has successfully demonstrated the ability to resolve problems relating to the work. An **authorized person**, at 1926.32(d), is simply someone the employer approved or assigned for a specific duty or location. And two words that look like style and are not: 1926.32(q) says **shall** means mandatory, 1926.32(r) says **should** means recommended.

**Where the part applies.** 1926.20(c) extends the standards to workplaces in the states, the District of Columbia, Puerto Rico, the Virgin Islands, American Samoa, Guam, the Northern Mariana Islands, Wake Island, Outer Continental Shelf lands and Johnston Island.

**Indiana is a State Plan state, which changes the name on the door.** Enforcement in Indiana is done by the Indiana Occupational Safety and Health Administration, IOSHA, part of the Indiana Department of Labor, whose main office is in Indianapolis. OSHA's own state plan page records that the plan covers all private sector workplaces with limited exceptions, that IOSHA "adopts all OSHA standards and regulations except it has a unique excavations standard," and that it runs a separate Construction Safety Division. Federal OSHA keeps enforcement of the anti-retaliation provision, Section 11(c), for the private sector, and IOSHA investigates retaliation under an analogous state provision. Appeals from safety orders and proposed penalties go to the Board of Safety Review, an independent board inside the state department.

:::reveal What are the two halves of the definition of a competent person at 1926.32(f)? ||| Capable of identifying existing and predictable hazards in the surroundings or working conditions, and having authorization to take prompt corrective measures to eliminate them. Recognising the hazard without the authority to fix it does not meet the definition.

:::reveal What does the general duty clause require, and where is it? ||| Section 5(a)(1) of the Occupational Safety and Health Act, at 29 U.S.C. 654, requires each employer to furnish employment and a place of employment free from recognized hazards that are causing or are likely to cause death or serious physical harm.

:::reveal Which OSHA standards does Indiana's state plan adopt? ||| All of them, except that Indiana has its own unique excavations standard, per OSHA's Indiana state plan page.

## Vocabulary
- **General duty clause**: Section 5(a)(1) of the Occupational Safety and Health Act, the catch-all requiring a workplace free from recognized serious hazards where no specific standard reaches.
- **Competent person**: someone who can identify existing and predictable hazards and who is authorized to take prompt corrective measures, defined at 1926.32(f).
- **Qualified person**: someone whose degree, certificate, professional standing or extensive experience has demonstrated an ability to resolve problems relating to the work, defined at 1926.32(m).
- **State Plan**: a state-run occupational safety and health programme, such as Indiana's IOSHA, operating standards at least as effective as federal OSHA's.
- **Shall and should**: mandatory and recommended, defined that way at 1926.32(q) and 1926.32(r), so the two words are never interchangeable in the text.

## Sources
Occupational Safety and Health Act of 1970, 29 U.S.C. § 654 (2026). https://www.osha.gov/laws-regs/oshact/section_5

Occupational Safety and Health Administration. (n.d.). *Indiana State Plan*. U.S. Department of Labor. Retrieved September 9, 2026, from https://www.osha.gov/stateplans/in

Safety and Health Regulations for Construction, 29 C.F.R. §§ 1926.20, 1926.32 (2026). https://www.ecfr.gov/current/title-29/part-1926/section-1926.32`,
    },
    {
      slug: "section-1-quiz",
      title: "Section 1 quiz · What this is, and where the rules come from",
      section: "Section 1 · What this is, and where the rules come from",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What does finishing this course produce?",
            options: [
              "Nothing; it is private study support",
              "An OSHA 10-hour card, provided the reader also completes the final assessment",
              "An NCCER Core module 00101 completion record that a provider can enter into the registry",
              "A certificate of fall protection training satisfying 29 CFR 1926.503(b)",
            ],
            correctIndex: 0,
            explanation:
              "It supports a course taught by somebody else. Cards come from OSHA-authorized Outreach trainers and NCCER credentials come from accredited providers.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "In 29 CFR 1926.501(b)(1), what does the number 1926 identify?",
            options: [
              "The part covering construction",
              "The section within the subpart that sets the duty to have fall protection",
              "The title of the Code of Federal Regulations that holds all labor rules",
              "The year the Occupational Safety and Health Act was passed by Congress",
            ],
            correctIndex: 0,
            explanation:
              "29 is the title, 1926 the part, 501 the section, and (b)(1) the paragraph. The Act was passed in 1970.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "OSHA says of its own Outreach Training Program that it does what?",
            options: [
              "Does not meet any standard's training requirement",
              "Satisfies the training requirements of the construction standards it covers in class",
              "Certifies the holder as competent to inspect scaffolds under 29 CFR 1926.451(f)(3)",
              "Replaces employer-provided training wherever a state has adopted it by statute",
            ],
            correctIndex: 0,
            explanation:
              "OSHA's page states the program is voluntary, does not meet the training requirements for any OSHA standards, and is not a certification.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "Which subpart of Part 1926 covers fall protection?",
            options: [
              "Subpart M",
              "Subpart E, which also sets the criteria for head and eye protection",
              "Subpart L, which sets capacity and access rules for supported scaffolds",
              "Subpart K, which covers wiring design and safety-related work practices",
            ],
            correctIndex: 0,
            explanation:
              "Subpart M holds 1926.500 through 1926.503. E is personal protective equipment, L is scaffolds, K is electrical.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "Which of these subjects is explicitly outside the scope of these notes?",
            options: [
              "Excavations and trenching",
              "The duty to provide fall protection at six feet on an unprotected edge",
              "Who pays for personal protective equipment under 29 CFR 1926.95(d)",
              "The ground-fault protection options an employer may choose between on a site",
            ],
            correctIndex: 0,
            explanation:
              "Subpart P for excavations, Subpart CC for cranes, Subpart X for ladders, Subpart J for welding and Subpart AA for confined spaces are named as out of scope.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "Where is the general duty clause found?",
            options: [
              "Section 5(a)(1) of the OSH Act",
              "Section 11(c) of the OSH Act, which also sets the deadline for retaliation complaints",
              "29 CFR 1926.20(b)(1), which requires the employer to initiate and maintain programs",
              "29 CFR 1926.21(b)(2), which requires the employer to instruct each employee",
            ],
            correctIndex: 0,
            explanation:
              "It sits at 29 U.S.C. 654. Section 11(c) is the anti-retaliation provision, and the two 1926 sections named are regulatory duties issued under the Act.",
            sourceLessonSlug: "the-act-the-part-and-indiana",
          },
          {
            prompt: "What does the general duty clause require an employer to furnish?",
            options: [
              "A workplace free from recognized serious hazards",
              "Written proof that every hazard on the site has been evaluated by a qualified person",
              "A safety program reviewed and approved by the Secretary of Labor before work begins",
              "Personal protective equipment adequate for any hazard a reasonable employer could foresee",
            ],
            correctIndex: 0,
            explanation:
              "The text is employment and a place of employment free from recognized hazards that are causing or are likely to cause death or serious physical harm.",
            sourceLessonSlug: "the-act-the-part-and-indiana",
          },
          {
            prompt: "Section 5(b) of the Act puts what duty on the employee?",
            options: [
              "Comply with standards applicable to his own conduct",
              "Report any hazard he observes to the Secretary of Labor within eight hours of noticing it",
              "Ensure that co-workers within his crew are wearing the protective equipment required",
              "Refuse any assignment for which he has not received documented training",
            ],
            correctIndex: 0,
            explanation:
              "The statutory text limits the employee duty to standards, rules, regulations and orders applicable to his own actions and conduct.",
            sourceLessonSlug: "the-act-the-part-and-indiana",
          },
          {
            prompt: "A competent person under 1926.32(f) must be able to identify hazards and also have what?",
            options: [
              "Authorization to take prompt corrective measures",
              "A recognized degree, certificate or professional standing in the relevant trade",
              "At least one year of documented supervisory experience on a comparable jobsite",
              "Written designation filed with the OSHA Area Office nearest the site of the work",
            ],
            correctIndex: 0,
            explanation:
              "A degree or professional standing belongs to the definition of a qualified person at 1926.32(m). The competent person's second half is the authority to eliminate the hazard.",
            sourceLessonSlug: "the-act-the-part-and-indiana",
          },
          {
            prompt: "Which definition at 1926.32 turns on a recognized degree, certificate or professional standing?",
            options: [
              "Qualified person",
              "Competent person, who must also be authorized to take prompt corrective measures",
              "Authorized person, who is approved or assigned for a specific duty or location",
              "Designated person, which the section defines by cross-reference to another paragraph",
            ],
            correctIndex: 0,
            explanation:
              "1926.32(m) defines qualified by degree, certificate, professional standing or extensive knowledge, training and experience demonstrated in practice.",
            sourceLessonSlug: "the-act-the-part-and-indiana",
          },
          {
            prompt: "In Part 1926, the word shall means what?",
            options: [
              "Mandatory",
              "Recommended, unless a competent person on site determines otherwise for that operation",
              "Required only where the employer has more than ten employees at the worksite",
              "Advisory language carried over from the consensus standards the part incorporates",
            ],
            correctIndex: 0,
            explanation:
              "1926.32(q) defines shall as mandatory and 1926.32(r) defines should as recommended, so the two are never interchangeable in the text.",
            sourceLessonSlug: "the-act-the-part-and-indiana",
          },
          {
            prompt: "Under 1926.20(d)(1), what happens when a specific standard and a general standard both seem to apply?",
            options: [
              "The specific standard prevails",
              "The employer may follow whichever of the two imposes the lower cost of compliance",
              "The general standard prevails, because it was written to cover the widest set of conditions",
              "Both apply in full, and a violation of either is cited separately for each employee exposed",
            ],
            correctIndex: 0,
            explanation:
              "A standard specifically applicable to a condition, practice, means, method, operation or process prevails over a different general standard.",
            sourceLessonSlug: "the-act-the-part-and-indiana",
          },
          {
            prompt: "Who enforces occupational safety standards at a private construction site in Indiana?",
            options: [
              "IOSHA, the state plan",
              "Federal OSHA's Indianapolis Area Office, because construction crosses state lines",
              "The Indiana Board of Safety Review, which inspects sites and issues the citations",
              "The Wage and Hour Division of the U.S. Department of Labor, under Reorganization Plan 14",
            ],
            correctIndex: 0,
            explanation:
              "Indiana runs a state plan through the Indiana Department of Labor. The Board of Safety Review hears petitions for review rather than conducting inspections.",
            sourceLessonSlug: "the-act-the-part-and-indiana",
          },
          {
            prompt: "How does Indiana's adoption of the federal standards differ from a straight copy?",
            options: [
              "It has a unique excavations standard",
              "It omits Subpart M and substitutes a state fall protection rule with a ten-foot trigger",
              "It applies only to employers with more than ten employees at a single worksite",
              "It adopts the construction standards but not the hazard communication standard",
            ],
            correctIndex: 0,
            explanation:
              "OSHA's Indiana state plan page says IOSHA adopts all OSHA standards and regulations except that it has a unique excavations standard.",
            sourceLessonSlug: "the-act-the-part-and-indiana",
          },
          {
            prompt: "Which body hears a petition for review of an Indiana safety order or proposed penalty?",
            options: [
              "The Board of Safety Review",
              "The Occupational Safety and Health Review Commission in Washington, D.C.",
              "The IOSHA Construction Safety Division that conducted the underlying inspection",
              "The federal district court for the district in which the worksite is located",
            ],
            correctIndex: 0,
            explanation:
              "It is an independent board inside the Indiana Department of Labor, and IOSHA management also holds informal conferences to try to resolve cases.",
            sourceLessonSlug: "the-act-the-part-and-indiana",
          },
          {
            prompt: "Which anti-retaliation provision does federal OSHA keep in the private sector even in a state plan state?",
            options: [
              "Section 11(c)",
              "Section 5(b), which sets out the employee's own compliance duty",
              "Section 107 of the Contract Work Hours and Safety Standards Act",
              "29 CFR 1926.35, which requires an employee emergency action plan",
            ],
            correctIndex: 0,
            explanation:
              "OSHA's Indiana page says federal OSHA retains 11(c) enforcement for the private sector while IOSHA investigates under an analogous state provision.",
            sourceLessonSlug: "the-act-the-part-and-indiana",
          },
          {
            prompt: "Why do these notes teach from the regulation rather than from a textbook?",
            options: [
              "The regulation is the source and is public domain",
              "Textbooks omit the section numbers, which makes their content impossible to verify",
              "The regulation is written at a lower reading level than a commercial trade textbook",
              "Publishers licence their construction titles only to accredited training providers",
            ],
            correctIndex: 0,
            explanation:
              "A textbook is a summary of the regulation, and the regulation is what a jobsite is inspected against.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "Which NCCER Core module do these lessons support?",
            options: [
              "00101, Basic Safety",
              "00102, Introduction to Construction Math, which covers fractions and tape measures",
              "00107, Basic Communication Skills, which is the module on jobsite communication",
              "00100, Build Your Future in Construction, the elective that opens the Core sequence",
            ],
            correctIndex: 0,
            explanation:
              "Its full title is Basic Safety (Construction Site Safety Orientation). Every lesson here states the same module at the top.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "What is the official continuously updated text of the regulation called?",
            options: [
              "The eCFR",
              "The Federal Register, which publishes the amended text of each standard as it is adopted",
              "The OSHA Field Operations Manual, which compiles the standards for compliance officers",
              "The Code of Federal Regulations annual print edition, revised each July for title 29",
            ],
            correctIndex: 0,
            explanation:
              "The Electronic Code of Federal Regulations at ecfr.gov carries the current text. The Federal Register publishes changes rather than the standing rule.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "What is an authorized person under 1926.32(d)?",
            options: [
              "Someone the employer assigned to a specific duty or location",
              "Someone who has demonstrated the ability to resolve problems relating to the work",
              "Someone able to identify predictable hazards and empowered to correct them promptly",
              "Someone holding a certificate from a nationally recognized testing laboratory",
            ],
            correctIndex: 0,
            explanation:
              "It is the lightest of the three roles. The second describes a qualified person and the third a competent person.",
            sourceLessonSlug: "the-act-the-part-and-indiana",
          },
          {
            prompt: "Which subpart of Part 1926 holds the general safety and health provisions?",
            options: [
              "Subpart C",
              "Subpart A, which contains the purpose and scope statements for the part as a whole",
              "Subpart D, which covers occupational health and environmental controls",
              "Subpart E, which covers personal protective and life saving equipment",
            ],
            correctIndex: 0,
            explanation:
              "Subpart C runs from 1926.20 to 1926.35 and holds the accident prevention responsibilities, the training duty and the definitions at 1926.32.",
            sourceLessonSlug: "the-act-the-part-and-indiana",
          },
          {
            prompt: "Why does this course say a note cannot be a jobsite authority?",
            options: [
              "It cannot see the site",
              "Written guidance is inadmissible in an enforcement proceeding brought by the Secretary",
              "Only a person holding an OSHA 30 card may direct work on a construction site",
              "Any written procedure must be approved by an Area Office before a crew may follow it",
            ],
            correctIndex: 0,
            explanation:
              "Where the regulation requires a judgment on site it assigns it to a competent or qualified person, and the notes say so and stop there.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "Which letter identifies the subpart covering electrical work in construction?",
            options: [
              "K",
              "L, which covers scaffold capacity, access, use and fall protection",
              "M, which covers the duty to have fall protection and the criteria for the systems",
              "E, which covers head, eye, face, hearing and respiratory protection",
            ],
            correctIndex: 0,
            explanation:
              "Subpart K runs 1926.400 to 1926.449 and covers installation requirements, safety-related work practices and definitions.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "What does OSHA's Outreach Training Program 30-hour class target?",
            options: [
              "Supervisors and workers with safety responsibility",
              "Apprentices in their first year, as a prerequisite for entry to a registered programme",
              "Compliance officers preparing to conduct inspections under a state plan",
              "Employers seeking exemption from programmed inspections for a twelve-month period",
            ],
            correctIndex: 0,
            explanation:
              "OSHA describes the 10-hour class as awareness training for workers and the 30-hour as more appropriate for supervisors or workers with some safety responsibility.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "Under 1926.20(c), where do the Part 1926 standards apply?",
            options: [
              "The states and the listed territories",
              "Only to work performed under a federal or federally assisted construction contract",
              "Only in states that have not adopted an approved occupational safety and health plan",
              "To all employment in the United States, including maritime and agricultural work",
            ],
            correctIndex: 0,
            explanation:
              "The paragraph lists the states, D.C., Puerto Rico, the Virgin Islands, American Samoa, Guam, the Northern Mariana Islands, Wake Island, Outer Continental Shelf lands and Johnston Island.",
            sourceLessonSlug: "the-act-the-part-and-indiana",
          },
          {
            prompt: "Which of these is a paragraph rather than a section?",
            options: [
              "(b)(1)",
              "1926.501, which sets the duty to have fall protection on a construction site",
              "1926.32, which supplies the definitions applying across the whole of the part",
              "Subpart M, which groups the fall protection sections together within the part",
            ],
            correctIndex: 0,
            explanation:
              "The lettered and numbered pieces in parentheses after the section number are paragraphs. Subpart M is a grouping, not a section.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "Why can no list of standards make the general duty clause unnecessary?",
            options: [
              "No list can name every hazard",
              "The clause sets a higher penalty tier than any specific standard can support",
              "Standards expire five years after adoption unless the Secretary renews them",
              "State plans are permitted to omit individual standards but not the statutory clause",
            ],
            correctIndex: 0,
            explanation:
              "Where a recognized serious hazard is not reached by a specific standard, 5(a)(1) still reaches it. Where a specific standard does reach it, that standard governs.",
            sourceLessonSlug: "the-act-the-part-and-indiana",
          },
          {
            prompt: "Which division of IOSHA inspects construction sites in Indiana?",
            options: [
              "The Construction Safety Division",
              "The Industrial Compliance Division, which covers all places of employment in the state",
              "The Whistleblower Protection Unit, which also handles complaint-driven site visits",
              "The On-Site Consultation Program, which conducts unannounced compliance inspections",
            ],
            correctIndex: 0,
            explanation:
              "OSHA's Indiana page distinguishes the Industrial Compliance Division, which covers workplaces other than those the Construction Safety Division handles.",
            sourceLessonSlug: "the-act-the-part-and-indiana",
          },
          {
            prompt: "What is the practical reason these notes print a section number beside every rule?",
            options: [
              "So the reader can check the rule against the regulation",
              "Because OSHA requires derivative training materials to reproduce the citation in full",
              "Because a citation number is needed to file a complaint about that hazard",
              "So the notes can be submitted as evidence of training under 1926.21(b)(2)",
            ],
            correctIndex: 0,
            explanation:
              "The regulation is authoritative and the notes are not, so the citation is what makes the disagreement settleable in about a minute.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "Which body issues NCCER credentials?",
            options: [
              "NCCER's accredited providers",
              "OSHA, through the same trainer network that issues Outreach Training cards",
              "The Indiana Department of Labor, for programmes taught inside the state",
              "Any employer that documents completion of the corresponding Core module",
            ],
            correctIndex: 0,
            explanation:
              "NCCER is an accrediting body, so its credentials come from the providers it accredits, which is why no set of private notes can substitute for one.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "Which of these is NOT one of the subparts these notes cover?",
            options: [
              "Subpart P",
              "Subpart C, the general safety and health provisions that open the substantive part",
              "Subpart L, which covers scaffold capacity, platform construction and access",
              "Subpart K, which covers ground-fault protection and safety-related work practices",
            ],
            correctIndex: 0,
            explanation:
              "Subpart P covers excavations and is named as out of scope along with cranes, ladders, welding and confined spaces.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "What is the statutory citation for the general duty clause?",
            options: [
              "29 U.S.C. 654",
              "29 U.S.C. 660(c), the provision protecting a worker who complains from retaliation",
              "29 CFR 1926.20, the accident prevention responsibilities placed on the employer",
              "40 U.S.C. 3701, the Contract Work Hours and Safety Standards Act authority",
            ],
            correctIndex: 0,
            explanation:
              "29 U.S.C. 660(c) is Section 11(c). 40 U.S.C. 3701 appears in the authority note for the subparts but is not the general duty clause.",
            sourceLessonSlug: "the-act-the-part-and-indiana",
          },
          {
            prompt: "How do these notes handle a rule that requires a judgment on site?",
            options: [
              "They name who the regulation assigns it to and stop",
              "They supply a decision procedure the reader can apply without further training",
              "They omit the rule entirely, because a written note cannot convey site judgment",
              "They reproduce the relevant appendix so the reader can work the calculation directly",
            ],
            correctIndex: 0,
            explanation:
              "Usually that person is a competent person or a qualified person, and the note points there rather than pretending to see the site.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "Which pairing of subpart letter to subject is correct?",
            options: [
              "E is personal protective equipment",
              "M is scaffolds, covering capacity, platform construction and scaffold access",
              "K is fall protection, covering guardrails, safety nets and personal fall arrest",
              "C is electrical, covering ground-fault protection and lockout and tagging",
            ],
            correctIndex: 0,
            explanation:
              "M is fall protection, L is scaffolds, K is electrical and C is the general safety and health provisions.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "What does OSHA's Indiana state plan page say about coverage of federal employers?",
            options: [
              "The plan does not cover them",
              "The plan covers them on the same terms as private sector construction employers",
              "The plan covers them only for construction work performed on state-owned land",
              "The plan covers them but sets no monetary penalties for their violations",
            ],
            correctIndex: 0,
            explanation:
              "The page says the plan applies to private sector and to state and local government employers, and not to federal government employers including the Postal Service.",
            sourceLessonSlug: "the-act-the-part-and-indiana",
          },
          {
            prompt: "Why is the asymmetry between Section 5(a) and Section 5(b) worth noticing?",
            options: [
              "The employer duty covers the place; the worker duty covers his own conduct",
              "The employer duty is advisory while the worker duty is enforceable by citation",
              "The worker duty covers the whole crew, so a foreman is liable for a crew member's lapse",
              "The employer duty applies only where a specific standard has already been adopted",
            ],
            correctIndex: 0,
            explanation:
              "5(a)(1) and 5(a)(2) place the duty to furnish and to comply on the employer, and 5(b) limits the employee duty to standards applicable to his own actions and conduct.",
            sourceLessonSlug: "the-act-the-part-and-indiana",
          },
          {
            prompt: "Which word in the regulation signals that a provision is merely recommended?",
            options: [
              "Should",
              "Shall, when the paragraph also contains a feasibility exception for the employer",
              "May, which 1926.32 defines as leaving the choice to a competent person on site",
              "Suitable, which 1926.32(s) defines as fitting the purpose or circumstance",
            ],
            correctIndex: 0,
            explanation:
              "1926.32(r) defines should as recommended, against 1926.32(q) which defines shall as mandatory. Suitable is defined but is not a mandatory-or-not signal.",
            sourceLessonSlug: "the-act-the-part-and-indiana",
          },
          {
            prompt: "What does the phrase state plan mean in this context?",
            options: [
              "A state-run programme enforcing its own approved standards",
              "A written safety programme an employer files with the state before starting a project",
              "A federal enforcement schedule assigning inspection targets to each state each year",
              "An agreement letting a state waive federal standards for small construction employers",
            ],
            correctIndex: 0,
            explanation:
              "State plans must operate standards at least as effective as federal OSHA's, and Indiana's is run by IOSHA inside the Indiana Department of Labor.",
            sourceLessonSlug: "the-act-the-part-and-indiana",
          },
          {
            prompt: "Where can the whole of Part 1926 be read at no cost?",
            options: [
              "ecfr.gov",
              "Only through a subscription legal research service that licenses the annotated text",
              "In the printed Code of Federal Regulations held by an OSHA Area Office",
              "Through an accredited NCCER provider, which supplies it with the Core textbook",
            ],
            correctIndex: 0,
            explanation:
              "The Electronic Code of Federal Regulations publishes the current official text of the part for free.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "What is the full title of the NCCER Core module these notes support?",
            options: [
              "Basic Safety (Construction Site Safety Orientation)",
              "Basic Safety and Health Awareness for the Construction Trades",
              "Construction Site Safety and Hazard Recognition Orientation",
              "Introduction to Occupational Safety on the Construction Jobsite",
            ],
            correctIndex: 0,
            explanation:
              "That is the title as it appears on NCCER's own public Core craft catalog listing for module 00101.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "Which subpart covers scaffolds?",
            options: [
              "Subpart L",
              "Subpart M, which sets the six-foot trigger for unprotected sides and edges",
              "Subpart D, which covers occupational health and environmental controls",
              "Subpart X, which covers stairways and ladders on a construction site",
            ],
            correctIndex: 0,
            explanation:
              "Subpart L runs 1926.450 to 1926.454. Subpart X covers ladders and is out of scope for these notes.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "What follows from the fact that these notes support a course taught by somebody else?",
            options: [
              "They add to that course and cannot replace it",
              "They may be treated as the syllabus for the taught course once both cover a module",
              "They carry the same weight as the instructor's own materials for assessment purposes",
              "They excuse the reader from the attendance requirement for the module they cover",
            ],
            correctIndex: 0,
            explanation:
              "They are study support. The taught programme, and the regulation behind it, are the things that count.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "Under 1926.32, which term describes someone who has been approved or assigned by the employer to be at a specific location?",
            options: [
              "Authorized person",
              "Competent person, defined by hazard recognition plus the authority to correct",
              "Qualified person, defined by degree, certificate or demonstrated professional standing",
              "Employee, defined as any laborer or mechanic regardless of contractual relationship",
            ],
            correctIndex: 0,
            explanation:
              "1926.32(d) defines it, and 1926.32(i) says designated person means the same thing.",
            sourceLessonSlug: "the-act-the-part-and-indiana",
          },
          {
            prompt: "In these notes, what does the phrase fetch or do not cite mean in practice?",
            options: [
              "Nothing is cited that was not actually retrieved",
              "Every citation is checked against a secondary summary before it is printed",
              "Citations are given only for statutes, never for agency web pages or statistics",
              "A citation may be estimated where the section number follows an obvious pattern",
            ],
            correctIndex: 0,
            explanation:
              "A regulatory citation is exactly what a reader will check, so an unretrieved one is worse than an omission.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "What is the relationship between the Occupational Safety and Health Act and Part 1926?",
            options: [
              "The part is a set of standards issued under the Act",
              "The part is a state regulation adopted by reference into the federal statute",
              "The part restates the Act's text section by section for the construction industry",
              "The part predates the Act and was carried forward without change by Congress",
            ],
            correctIndex: 0,
            explanation:
              "Section 5(a)(2) requires compliance with standards issued under the Act, and Part 1926 is where the construction standards live.",
            sourceLessonSlug: "the-act-the-part-and-indiana",
          },
          {
            prompt: "Why is a citation described in these notes as an address?",
            options: [
              "It locates a paragraph inside a numbered hierarchy",
              "It records which OSHA Area Office has jurisdiction over the worksite in question",
              "It shows where an inspector must post the notice of a proposed penalty on site",
              "It names the mailing address to which a petition for review must be delivered",
            ],
            correctIndex: 0,
            explanation:
              "Title, part, section and paragraph narrow the reader down to the exact sentence that carries the rule.",
            sourceLessonSlug: "what-this-course-is",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2 — What the employer owes you, and what you can do about it
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "subpart-c-employer-duties",
      title: "3 · What Subpart C makes the employer do",
      section: "Section 2 · What the employer owes you, and what you can do about it",
      body: `**Supports NCCER Core module 00101, Basic Safety (Construction Site Safety Orientation).**

Subpart C is short and it is the spine. Almost every specific rule later in the part is one of these duties made concrete.

**The accident prevention responsibilities, at 1926.20(b).** Paragraph (b)(1) makes it the employer's responsibility to initiate and maintain whatever programs are necessary to comply with the part. Paragraph (b)(2) says those programs "shall provide for frequent and regular inspections of the job sites, materials, and equipment to be made by competent persons designated by the employers." Paragraph (b)(3) prohibits using any machinery, tool, material or equipment that does not comply with the part, and requires that it either be identified as unsafe by tagging or by locking the controls to render them inoperable, or be physically removed from its place of operation. Paragraph (b)(4) says the employer shall permit only employees qualified by training or experience to operate equipment and machinery.

**Duties are owed to each employee separately, at 1926.20(f).** This paragraph is easy to skim past and it is the one with teeth. For personal protective equipment and for training, the standard "impose a separate compliance duty with respect to each employee covered by the requirement," and "each failure to provide PPE to an employee may be considered a separate violation." Ten unprotected workers is not one problem; it can be ten.

**Training, at 1926.21(b).** Paragraph (b)(2) is the general one: the employer shall instruct each employee in the recognition and avoidance of unsafe conditions and in the regulations applicable to that work environment. Paragraph (b)(3) adds instruction for employees who handle poisons, caustics and other harmful substances, covering safe handling, potential hazards, personal hygiene and the protective measures required. Paragraph (b)(4) covers harmful plants and animals, including first aid procedures. Paragraph (b)(5) covers flammable liquids, gases and toxic materials.

**Housekeeping, at 1926.25.** Form and scrap lumber with protruding nails, and all other debris, shall be kept cleared from work areas, passageways and stairs. Combustible scrap and debris shall be removed at regular intervals. Containers shall be provided for collection and separation of waste, and containers for garbage and other oily, flammable or hazardous waste shall be equipped with covers. Housekeeping looks like tidiness and is in fact the cheapest control for two of OSHA's four leading construction killers.

**First aid and medical attention, at 1926.23 and 1926.50.** The employer must ensure medical personnel are available for advice, and must make provisions for prompt medical attention before the project starts. Where no infirmary, clinic, hospital or physician is reasonably accessible in time and distance, 1926.50(c) requires a person holding a valid first aid certificate to be available at the worksite. First aid supplies must be easily accessible, and 1926.50(d)(2) requires the kit to be checked before it goes out on each job and at least weekly on the job. One modern detail worth knowing: 1926.50(f)(2) requires that in areas where a 911 call does not automatically supply the caller's latitude and longitude, the employer must post the worksite's coordinates, or other location information that communicates effectively where the site is.

**Emergency action plans, at 1926.35(b).** Where a standard requires one it must be written and must cover escape procedures and route assignments, procedures for employees who stay to operate critical operations, procedures to account for all employees after evacuation, rescue and medical duties, the preferred means of reporting an emergency, and who to contact for further explanation. An employer with ten or fewer employees may communicate the plan orally instead of maintaining it in writing.

:::reveal Under 1926.20(b)(3), what are the two permitted ways to deal with a tool that does not comply with the part? ||| Identify it as unsafe by tagging it or by locking its controls so it cannot be operated, or physically remove it from its place of operation.

:::reveal Why does 1926.20(f) matter to an employer's exposure? ||| Because the PPE and training standards impose a separate compliance duty for each employee covered, so each failure to provide or to train may be counted as a separate violation.

:::reveal What does 1926.50(f)(2) require where a 911 call will not automatically give the dispatcher the caller's location? ||| The employer must post at the worksite either the latitude and longitude of the site, or other location information that effectively tells employees where the site is.

## Vocabulary
- **Accident prevention responsibilities**: the duties at 1926.20(b) to run compliance programs, inspect frequently through competent persons, remove non-complying equipment and restrict operation to qualified employees.
- **Separate compliance duty**: the rule at 1926.20(f) that PPE and training obligations run to each employee individually, so each failure may be a separate violation.
- **Housekeeping**: the 1926.25 duty to clear debris and protruding nails from work areas, passageways and stairs, and to provide covered containers for hazardous waste.
- **Emergency action plan**: the written plan required by 1926.35 covering escape, accounting for employees, rescue duties and reporting, communicable orally only by employers with ten or fewer employees.
- **Reasonably accessible**: the 1926.50(c) test, in time and distance, that decides whether a first-aid-certified person must be present at the worksite.

## Sources
Safety and Health Regulations for Construction, 29 C.F.R. §§ 1926.20, 1926.21, 1926.25, 1926.35 (2026). https://www.ecfr.gov/current/title-29/part-1926/subpart-C

Safety and Health Regulations for Construction, 29 C.F.R. § 1926.50 (2026). https://www.ecfr.gov/current/title-29/part-1926/section-1926.50`,
    },
    {
      slug: "rights-reporting-and-penalties",
      title: "4 · Your rights, the reporting clock, and what a citation costs",
      section: "Section 2 · What the employer owes you, and what you can do about it",
      body: `**Supports NCCER Core module 00101, Basic Safety (Construction Site Safety Orientation).**

The regulation is not self-enforcing. OSHA's own numbers page records roughly 1,850 inspectors between federal OSHA and its state partners, responsible for about 130 million workers at more than 8 million worksites, which the agency itself describes as about one compliance officer for every 70,000 workers. Federal OSHA ran 34,696 inspections in fiscal 2024. So most of the time the person who notices a hazard is the person standing next to it.

**What the statute gives that person.** OSHA's worker rights page lists the right to receive safety and health training in a language you understand, to work on machines that are safe, to refuse to work in a situation in which you would be exposed to a hazard, to receive required safety equipment such as gloves or a harness and lifeline for falls, to be protected from toxic chemicals, to request an OSHA inspection and speak to the inspector, to report an injury or illness and get copies of your medical records, to review records of work-related injuries and illnesses, and to see the results of tests taken to find workplace hazards. A safety and health complaint can be filed confidentially.

**Retaliation, and a deadline that is easy to miss.** Section 11(c) of the Act says no person shall discharge or in any manner discriminate against an employee because the employee filed a complaint, instituted a proceeding, testified, or exercised any right afforded by the Act. The remedy is real: a district court may order reinstatement with back pay. The catch is the clock. The statute says an employee who believes he has been discriminated against "may, within thirty days after such violation occurs, file a complaint with the Secretary." Thirty days from the retaliation, not from the underlying hazard.

**When the employer must call OSHA, at 1904.39.** A work-related fatality must be reported within eight hours of the death. An in-patient hospitalization, an amputation, or the loss of an eye must be reported within twenty-four hours. Reporting is by telephone or in person to the nearest Area Office, by telephone to 1-800-321-OSHA (1-800-321-6742), or through the reporting application on OSHA's website. If the Area Office is closed, a message on an answering machine, a fax or an email does not count.

**What a citation costs, as of the amounts OSHA published for violations assessed after January 15, 2026.** A serious violation, an other-than-serious violation, and a posting violation each carry a maximum of $16,550 per violation. Failure to abate carries a maximum of $16,550 per day beyond the abatement date. A willful or repeated violation carries a maximum of $165,514 per violation. These amounts are adjusted annually for inflation, so the figure to quote is always the one on OSHA's penalties page at the time.

**What gets cited most.** For fiscal year 2025, running from October 1, 2024 to September 30, 2025, OSHA's most frequently cited standard was fall protection general requirements at 29 CFR 1926.501. Hazard communication at 1910.1200 was second, ladders at 1926.1053 third, control of hazardous energy at 1910.147 fourth, respiratory protection at 1910.134 fifth, scaffolding at 1926.451 sixth, fall protection training at 1926.503 seventh, powered industrial trucks at 1910.178 eighth, eye and face protection at 1926.102 ninth, and machine guarding at 1910.212 tenth. Five of the ten are construction standards, and two of those five are falls.

**The scale of the harm.** OSHA reports 5,283 fatal work injuries across all industries in 2023, a rate of 3.5 per 100,000 full-time equivalent workers, and notes that worker deaths in America have fallen from about 38 a day in 1970 to 15 a day in 2023.

:::reveal How long does an employee have to file a Section 11(c) retaliation complaint, and from when? ||| Thirty days, measured from when the retaliation occurred rather than from the underlying safety complaint.

:::reveal What are the two reporting clocks in 1904.39, and what triggers each? ||| Eight hours for a work-related fatality, and twenty-four hours for an in-patient hospitalization, an amputation, or the loss of an eye.

:::reveal Which standard was OSHA's most frequently cited in fiscal year 2025? ||| Fall protection, general requirements, at 29 CFR 1926.501.

## Vocabulary
- **Section 11(c)**: the Act's anti-retaliation provision, at 29 U.S.C. 660(c), with a thirty-day window to complain and reinstatement with back pay among its remedies.
- **Failure to abate**: a penalty category assessed per day beyond the date by which a cited condition was required to be corrected.
- **Willful or repeated violation**: the highest penalty tier, ten times the serious maximum in the amounts published for 2026.
- **Abatement date**: the date a citation sets for correcting the violation, after which each further day can carry its own penalty.
- **In-patient hospitalization**: an admission that starts the twenty-four hour reporting clock under 1904.39, alongside amputation and loss of an eye.

## Sources
Occupational Safety and Health Act of 1970, 29 U.S.C. § 660(c) (2026). https://www.osha.gov/laws-regs/oshact/section_11

Occupational Safety and Health Administration. (n.d.). *OSHA penalties*. U.S. Department of Labor. Retrieved September 9, 2026, from https://www.osha.gov/penalties

Occupational Safety and Health Administration. (n.d.). *Commonly used statistics*. U.S. Department of Labor. Retrieved September 9, 2026, from https://www.osha.gov/data/commonstats

Recording and Reporting Occupational Injuries and Illnesses, 29 C.F.R. § 1904.39 (2026). https://www.ecfr.gov/current/title-29/part-1904/section-1904.39`,
    },
    {
      slug: "section-2-quiz",
      title: "Section 2 quiz · Employer duties, worker rights, and enforcement",
      section: "Section 2 · What the employer owes you, and what you can do about it",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Under 1926.20(b)(2), who must make the frequent and regular jobsite inspections?",
            options: [
              "Competent persons designated by the employer",
              "A qualified person holding a recognized degree or professional standing in the trade",
              "An OSHA compliance officer, at intervals set by the Area Office for the project",
              "Any authorized person the employer has assigned to that area of the worksite",
            ],
            correctIndex: 0,
            explanation:
              "The paragraph names competent persons designated by the employers, which is the definition at 1926.32(f) requiring authority to correct as well as ability to spot.",
            sourceLessonSlug: "subpart-c-employer-duties",
          },
          {
            prompt: "What must happen to a tool that does not comply with Part 1926?",
            options: [
              "It is tagged or locked out, or physically removed",
              "It is repaired before the end of the shift and logged in the employer's equipment record",
              "It is reported to the Area Office within twenty-four hours of the defect being found",
              "It may stay in service if only employees qualified by training or experience use it",
            ],
            correctIndex: 0,
            explanation:
              "1926.20(b)(3) prohibits its use and requires it either be identified as unsafe by tagging or locking the controls, or removed from its place of operation.",
            sourceLessonSlug: "subpart-c-employer-duties",
          },
          {
            prompt: "Under 1926.20(b)(4), who may the employer permit to operate equipment and machinery?",
            options: [
              "Only employees qualified by training or experience",
              "Only employees who hold a certification from a nationally recognized testing laboratory",
              "Any employee who has been instructed under 1926.21(b)(2) in hazard recognition",
              "Any employee, provided a competent person inspects the equipment before each shift",
            ],
            correctIndex: 0,
            explanation:
              "The paragraph is short and absolute, and it sits alongside the general instruction duty rather than being satisfied by it.",
            sourceLessonSlug: "subpart-c-employer-duties",
          },
          {
            prompt: "What does 1926.20(f) say about PPE and training duties?",
            options: [
              "They are owed separately to each employee",
              "They apply only where a specific standard elsewhere in the part names the equipment",
              "They may be satisfied by a single site-wide program document kept at the jobsite office",
              "They are suspended where a competent person judges the exposure to be brief",
            ],
            correctIndex: 0,
            explanation:
              "Each failure to provide PPE to an employee, and each failure to train an employee, may be considered a separate violation.",
            sourceLessonSlug: "subpart-c-employer-duties",
          },
          {
            prompt: "Which section carries the general duty to instruct each employee in hazard recognition and avoidance?",
            options: [
              "1926.21(b)(2)",
              "1926.20(b)(1), which requires the employer to initiate and maintain compliance programs",
              "1926.35(e), which requires the employer to review the emergency action plan with employees",
              "1926.503(a), which requires a training program for employees exposed to fall hazards",
            ],
            correctIndex: 0,
            explanation:
              "1926.503 is the fall-specific supplement to it, and 1926.20(b)(1) is about programs rather than about instructing individuals.",
            sourceLessonSlug: "subpart-c-employer-duties",
          },
          {
            prompt: "1926.21(b)(3) requires extra instruction for employees who handle what?",
            options: [
              "Poisons, caustics and other harmful substances",
              "Powered hand tools whose guards can be removed for a particular cut or operation",
              "Suspended loads and rigging hardware attached to a crane or a material hoist",
              "Portable ladders and stepladders used to reach an elevated work surface",
            ],
            correctIndex: 0,
            explanation:
              "The instruction must cover safe handling and use, the potential hazards, personal hygiene and the personal protective measures required.",
            sourceLessonSlug: "subpart-c-employer-duties",
          },
          {
            prompt: "What does 1926.25(a) require to be kept clear of work areas, passageways and stairs?",
            options: [
              "Scrap lumber with protruding nails and other debris",
              "Any material not scheduled for installation within the next forty-eight hours",
              "Extension cords and welding leads, which must be routed overhead instead",
              "Combustible liquids in containers larger than five gallons in capacity",
            ],
            correctIndex: 0,
            explanation:
              "The paragraph names form and scrap lumber with protruding nails and all other debris, in and around buildings or other structures.",
            sourceLessonSlug: "subpart-c-employer-duties",
          },
          {
            prompt: "Which waste containers must be equipped with covers under 1926.25(c)?",
            options: [
              "Those for garbage and oily, flammable or hazardous waste",
              "All containers on site, without exception, once the structure is enclosed",
              "Only those holding materials classified as hazardous under 1910.1200",
              "Only those stored within fifty feet of an occupied structure or a means of egress",
            ],
            correctIndex: 0,
            explanation:
              "The paragraph names garbage and other oily, flammable or hazardous wastes such as caustics, acids and harmful dusts.",
            sourceLessonSlug: "subpart-c-employer-duties",
          },
          {
            prompt: "When does 1926.50(c) require a person with a valid first aid certificate at the worksite?",
            options: [
              "When no clinic or physician is reasonably accessible",
              "On every construction site with more than ten employees working at one time",
              "Whenever work is performed more than six feet above a lower level",
              "Only where the employer has chosen not to maintain a written emergency action plan",
            ],
            correctIndex: 0,
            explanation:
              "The test in the paragraph is reasonable accessibility in terms of time and distance to an infirmary, clinic, hospital or physician.",
            sourceLessonSlug: "subpart-c-employer-duties",
          },
          {
            prompt: "How often must a first aid kit be checked under 1926.50(d)(2)?",
            options: [
              "Before each job and at least weekly on the job",
              "Monthly, and additionally after any incident in which supplies were used",
              "Before each shift, by the same competent person who inspects the equipment",
              "Annually, with the inspection recorded and kept available at the jobsite",
            ],
            correctIndex: 0,
            explanation:
              "The kit must also sit in a weatherproof container with individual sealed packages for each type of item.",
            sourceLessonSlug: "subpart-c-employer-duties",
          },
          {
            prompt: "What does 1926.50(f)(2) require where 911 will not automatically give the dispatcher the caller's location?",
            options: [
              "Posting the site's coordinates or equivalent location information",
              "Keeping a landline telephone at the jobsite office throughout the working day",
              "Naming a competent person whose duty is to meet and direct the ambulance",
              "Filing the worksite address with the nearest OSHA Area Office before work begins",
            ],
            correctIndex: 0,
            explanation:
              "The employer must post the latitude and longitude of the worksite, or other location-identification information that communicates effectively to employees.",
            sourceLessonSlug: "subpart-c-employer-duties",
          },
          {
            prompt: "Which of these is a required element of an emergency action plan under 1926.35(b)?",
            options: [
              "Procedures to account for all employees after evacuation",
              "A signed acknowledgement from each employee that the plan has been read",
              "A map showing the location of every energized circuit within the structure",
              "The name of the physician who will attend the site in the event of an injury",
            ],
            correctIndex: 0,
            explanation:
              "The listed elements also include escape procedures and route assignments, duties for those who stay to operate critical operations, rescue and medical duties, the preferred means of reporting, and who to contact.",
            sourceLessonSlug: "subpart-c-employer-duties",
          },
          {
            prompt: "Which employers may communicate the emergency action plan orally rather than in writing?",
            options: [
              "Those with ten or fewer employees",
              "Those whose project will last fewer than thirty calendar days from first mobilisation",
              "Those working on a site where no hazardous chemicals are present at any time",
              "Those who have designated a competent person to brief each new arrival on site",
            ],
            correctIndex: 0,
            explanation:
              "1926.35(e)(3) makes that the single exception, and otherwise the written plan must be kept at the workplace and made available for employee review.",
            sourceLessonSlug: "subpart-c-employer-duties",
          },
          {
            prompt: "Roughly what inspector-to-worker ratio does OSHA report for itself and its state partners?",
            options: [
              "About one compliance officer per 70,000 workers",
              "About one compliance officer per 7,000 workers, which OSHA calls broadly adequate",
              "About one compliance officer per 700,000 workers in the construction industry alone",
              "About one compliance officer per 70,000 worksites rather than per worker",
            ],
            correctIndex: 0,
            explanation:
              "OSHA's own statistics page gives approximately 1,850 inspectors, 130 million workers and more than 8 million worksites.",
            sourceLessonSlug: "rights-reporting-and-penalties",
          },
          {
            prompt: "Which of these appears on OSHA's own list of worker rights?",
            options: [
              "The right to refuse work exposing you to a hazard",
              "The right to be paid for time spent attending safety training outside working hours",
              "The right to select the competent person who will inspect your work area",
              "The right to a copy of every citation issued to your employer in the past five years",
            ],
            correctIndex: 0,
            explanation:
              "The list also includes training in a language you understand, requesting an inspection and speaking to the inspector, and reviewing records of work-related injuries and illnesses.",
            sourceLessonSlug: "rights-reporting-and-penalties",
          },
          {
            prompt: "Under OSHA's worker rights page, in what language must safety training be provided?",
            options: [
              "One the worker understands",
              "English, with a written translation supplied on request within thirty days",
              "The language named in the employer's written hazard communication program",
              "Any language in which the standard's own text has been officially published",
            ],
            correctIndex: 0,
            explanation:
              "The right is stated as receiving workplace safety and health training in a language you understand.",
            sourceLessonSlug: "rights-reporting-and-penalties",
          },
          {
            prompt: "What is the deadline for filing a Section 11(c) retaliation complaint?",
            options: [
              "Thirty days after the retaliation",
              "Thirty days after the safety complaint that provoked the retaliation was filed",
              "Six months after the retaliation, matching the general limitations period for citations",
              "Within the same fiscal year in which the retaliation occurred",
            ],
            correctIndex: 0,
            explanation:
              "The statute measures the window from the violation, meaning the retaliatory act, which is why a worker who waits to see whether things settle down can lose the remedy.",
            sourceLessonSlug: "rights-reporting-and-penalties",
          },
          {
            prompt: "What relief can a court order under Section 11(c)?",
            options: [
              "Reinstatement with back pay",
              "A civil penalty paid directly to the employee, capped at the serious violation maximum",
              "An order requiring the employer to abate the hazard the employee complained about",
              "Criminal sanctions against the supervisor who carried out the retaliation",
            ],
            correctIndex: 0,
            explanation:
              "The statute lets the district court restrain violations and order all appropriate relief including rehiring or reinstatement to the former position with back pay.",
            sourceLessonSlug: "rights-reporting-and-penalties",
          },
          {
            prompt: "How soon must an employer report a work-related fatality to OSHA?",
            options: [
              "Within eight hours",
              "Within twenty-four hours, the same clock that applies to an amputation",
              "Within seventy-two hours, or sooner if the Area Office requests it",
              "By the end of the next business day following the death",
            ],
            correctIndex: 0,
            explanation:
              "1904.39(a)(1) sets eight hours for a fatality, and (a)(2) sets twenty-four hours for hospitalization, amputation or loss of an eye.",
            sourceLessonSlug: "rights-reporting-and-penalties",
          },
          {
            prompt: "Which events start the twenty-four hour reporting clock under 1904.39?",
            options: [
              "Hospitalization, amputation, or loss of an eye",
              "Any injury requiring treatment beyond first aid, whether or not the worker is admitted",
              "Any fall from a height greater than six feet, regardless of the resulting injury",
              "Any incident that damages equipment or property valued above a set threshold",
            ],
            correctIndex: 0,
            explanation:
              "The trigger is an in-patient hospitalization of one or more employees, an amputation, or the loss of an eye resulting from a work-related incident.",
            sourceLessonSlug: "rights-reporting-and-penalties",
          },
          {
            prompt: "If the OSHA Area Office is closed, how may an employer make a required report?",
            options: [
              "By the 800 number or the online reporting application",
              "By leaving a message on the Area Office answering machine and calling back next day",
              "By faxing the Area Office and retaining the transmission receipt as proof",
              "By emailing the Area Director, provided the email is sent within the reporting window",
            ],
            correctIndex: 0,
            explanation:
              "1904.39(b)(1) rules out the answering machine, the fax and the email, leaving the toll-free number and the web application.",
            sourceLessonSlug: "rights-reporting-and-penalties",
          },
          {
            prompt: "What is the maximum penalty for a serious violation assessed after January 15, 2026?",
            options: [
              "$16,550 per violation",
              "$165,514 per violation, the same maximum that applies to a willful violation",
              "$16,550 per day for each day beyond the abatement date set in the citation",
              "$13,653 per violation, the amount that applied before the annual inflation adjustment",
            ],
            correctIndex: 0,
            explanation:
              "OSHA's penalties page sets $16,550 for serious, other-than-serious and posting violations, and $165,514 for willful or repeated.",
            sourceLessonSlug: "rights-reporting-and-penalties",
          },
          {
            prompt: "Which penalty category is assessed per day rather than per violation?",
            options: [
              "Failure to abate",
              "Willful, where the employer knew of the requirement and disregarded it deliberately",
              "Repeated, where a substantially similar violation was cited within the lookback period",
              "Other-than-serious, where the condition would not cause death or serious physical harm",
            ],
            correctIndex: 0,
            explanation:
              "Failure to abate is $16,550 per day beyond the abatement date, so the exposure grows for as long as the condition stands.",
            sourceLessonSlug: "rights-reporting-and-penalties",
          },
          {
            prompt: "Why do these notes say the penalty figures must always be re-checked?",
            options: [
              "They are adjusted annually for inflation",
              "They vary by state plan, and Indiana sets its own maximums independently",
              "They are set case by case by the Area Director rather than published in advance",
              "They apply only to construction and are recalculated whenever the part is amended",
            ],
            correctIndex: 0,
            explanation:
              "OSHA publishes the current maximums with the date they take effect, which is why the lesson quotes both the amounts and the January 15, 2026 effective date.",
            sourceLessonSlug: "rights-reporting-and-penalties",
          },
          {
            prompt: "Which standard topped OSHA's most frequently cited list for fiscal year 2025?",
            options: [
              "1926.501, fall protection general requirements",
              "1910.1200, hazard communication, which is the most cited across all industries",
              "1926.451, scaffolding, which is the most cited of the construction standards",
              "1910.147, control of hazardous energy, which covers lockout and tagout",
            ],
            correctIndex: 0,
            explanation:
              "Hazard communication was second, ladders third, control of hazardous energy fourth, and scaffolding sixth.",
            sourceLessonSlug: "rights-reporting-and-penalties",
          },
          {
            prompt: "How many of OSHA's ten most cited standards for fiscal year 2025 were construction standards?",
            options: [
              "Five",
              "Two, both of them in Subpart M of the construction part",
              "Eight, with the remaining two drawn from the general industry part",
              "Ten, because the list is compiled separately for each industry sector",
            ],
            correctIndex: 0,
            explanation:
              "Fall protection general requirements, ladders, scaffolding, fall protection training and eye and face protection are the five, and two of those five concern falls.",
            sourceLessonSlug: "rights-reporting-and-penalties",
          },
          {
            prompt: "Which construction standard appeared on the fiscal 2025 top ten list for training rather than for a physical condition?",
            options: [
              "1926.503, fall protection training",
              "1926.21, safety training and education, the general instruction duty in Subpart C",
              "1926.454, the scaffold training requirements for users and for erectors",
              "1910.1200(h), the hazard communication employee information and training paragraph",
            ],
            correctIndex: 0,
            explanation:
              "1926.503 was seventh on the list, which means employers are cited for the training gap itself and not only for the missing guardrail.",
            sourceLessonSlug: "rights-reporting-and-penalties",
          },
          {
            prompt: "How many fatal work injuries does OSHA report for 2023 across all industries?",
            options: [
              "5,283",
              "1,034, which is the figure for construction fatalities in that year",
              "34,696, which is the count of federal inspections rather than of deaths",
              "389, which is the count of fatal falls to a lower level in construction",
            ],
            correctIndex: 0,
            explanation:
              "The rate given alongside it is 3.5 fatalities per 100,000 full-time equivalent workers. The other figures belong to different measures.",
            sourceLessonSlug: "rights-reporting-and-penalties",
          },
          {
            prompt: "How has the daily worker death toll in America changed since 1970, per OSHA?",
            options: [
              "From about 38 a day to 15 a day in 2023",
              "From about 15 a day to 38 a day, as the workforce and its exposures grew",
              "From about 38 a day to 3.5 a day, matching the current rate per 100,000 workers",
              "It has been roughly flat, with the improvement showing only in the injury rate",
            ],
            correctIndex: 0,
            explanation:
              "OSHA pairs it with a fall in injuries and illnesses from 10.9 incidents per 100 workers in 1972 to 2.4 per 100 in 2023.",
            sourceLessonSlug: "rights-reporting-and-penalties",
          },
          {
            prompt: "What is the practical consequence of the inspector-to-worker ratio for a worker on a site?",
            options: [
              "Most hazards are noticed first by the person standing next to them",
              "Inspections are scheduled in advance, so a site knows when to bring itself into compliance",
              "Only sites with a prior citation history receive a visit in any given year",
              "The standards are enforced primarily through insurance audits rather than by OSHA",
            ],
            correctIndex: 0,
            explanation:
              "That is why the rights list, the complaint route and the retaliation protection matter as much as the standards themselves.",
            sourceLessonSlug: "rights-reporting-and-penalties",
          },
          {
            prompt: "Can a safety and health complaint to OSHA be filed confidentially?",
            options: [
              "Yes",
              "No, because the employer must be given the complainant's name to respond",
              "Only where the complaint concerns an imminent danger to life or limb",
              "Only if it is filed by a union representative on the worker's behalf",
            ],
            correctIndex: 0,
            explanation:
              "OSHA's worker page describes filing a confidential complaint and asking the agency to inspect, and suggests telling the employer first where that is possible.",
            sourceLessonSlug: "rights-reporting-and-penalties",
          },
          {
            prompt: "Which record does OSHA's rights list say a worker may review?",
            options: [
              "Records of work-related injuries and illnesses",
              "The employer's abatement correspondence with the Area Office after a citation",
              "The insurance loss runs the employer files for its workers compensation policy",
              "The competent person's daily inspection notes for every area of the site",
            ],
            correctIndex: 0,
            explanation:
              "The same list also gives the right to see the results of tests taken to find workplace hazards and to get copies of your own medical records.",
            sourceLessonSlug: "rights-reporting-and-penalties",
          },
          {
            prompt: "What number does 1904.39 give for reporting by telephone?",
            options: [
              "1-800-321-OSHA",
              "1-800-475-6742, the line for filing a whistleblower complaint",
              "911, which forwards fatality reports to the nearest Area Office automatically",
              "The Area Director's direct line, which each employer receives at first inspection",
            ],
            correctIndex: 0,
            explanation:
              "The section prints it as 1-800-321-OSHA, which is 1-800-321-6742, alongside reporting in person to the nearest Area Office or through the web application.",
            sourceLessonSlug: "rights-reporting-and-penalties",
          },
          {
            prompt: "What is the relationship between 1926.23 and Subpart D?",
            options: [
              "1926.23 states the duty and Subpart D holds the specifics",
              "1926.23 replaced the Subpart D first aid provisions when the part was reorganised",
              "1926.23 applies to federal contracts and Subpart D applies to all other work",
              "They set competing requirements, and the employer may comply with either one",
            ],
            correctIndex: 0,
            explanation:
              "1926.23 requires first aid services and medical care to be available and points to Subpart D, where 1926.50 sets the detailed requirements.",
            sourceLessonSlug: "subpart-c-employer-duties",
          },
          {
            prompt: "Why do these notes call housekeeping a cheap control rather than tidiness?",
            options: [
              "It removes causes of two of the four leading construction killers",
              "It is the only Subpart C duty that carries no monetary penalty when neglected",
              "It is the one duty the standard assigns to employees rather than to the employer",
              "It reduces the number of competent person inspections the site must run each shift",
            ],
            correctIndex: 0,
            explanation:
              "Debris and protruding nails feed slips, trips and falls and struck-by injuries, and clearing them costs almost nothing compared with the systems that catch a falling worker.",
            sourceLessonSlug: "subpart-c-employer-duties",
          },
          {
            prompt: "Which section requires the employer to develop and maintain a fire protection and prevention program?",
            options: [
              "1926.24",
              "1926.25, which covers housekeeping and the removal of combustible scrap and debris",
              "1926.35, which requires the written employee emergency action plan",
              "1926.34, which requires free and unobstructed means of egress and exit marking",
            ],
            correctIndex: 0,
            explanation:
              "1926.24 covers the program throughout all phases of construction, repair, alteration or demolition, and points to Subpart F for the equipment.",
            sourceLessonSlug: "subpart-c-employer-duties",
          },
          {
            prompt: "What does 1926.34 require of exits in a building or structure under construction?",
            options: [
              "Free and unobstructed egress, with exits marked by visible signs",
              "A minimum of two exits from every floor once the structure exceeds three storeys",
              "Illuminated exit signage powered by a circuit independent of the temporary supply",
              "A competent person stationed at each exit during any operation involving hot work",
            ],
            correctIndex: 0,
            explanation:
              "The section also bars locks or fastenings that prevent free escape from inside, and requires means of egress to be continually maintained free of obstructions.",
            sourceLessonSlug: "subpart-c-employer-duties",
          },
          {
            prompt: "Which paragraph of 1926.21 covers instruction about flammable liquids, gases and toxic materials?",
            options: [
              "(b)(5)",
              "(b)(2), the general duty to instruct in the recognition and avoidance of unsafe conditions",
              "(b)(4), which covers job site areas where harmful plants or animals are present",
              "(a), which directs the Secretary to establish and supervise education programs",
            ],
            correctIndex: 0,
            explanation:
              "It also points the employee to the specific requirements in subparts D and F and other applicable subparts of the part.",
            sourceLessonSlug: "subpart-c-employer-duties",
          },
          {
            prompt: "What does 1926.21(b)(4) require where harmful plants or animals are present?",
            options: [
              "Instruction on the hazards, avoidance, and first aid",
              "Removal of the hazard before employees are allowed to work in the affected area",
              "Provision of respiratory protection meeting the requirements of 1910.134",
              "A written site-specific plan reviewed by a qualified person before work begins",
            ],
            correctIndex: 0,
            explanation:
              "The paragraph requires exposed employees to be instructed on the potential hazards, how to avoid injury, and the first aid procedures to be used.",
            sourceLessonSlug: "subpart-c-employer-duties",
          },
          {
            prompt: "Under 1926.20(b)(1), whose responsibility is it to initiate and maintain compliance programs?",
            options: [
              "The employer's",
              "The competent person's, since that role carries authority to correct hazards",
              "The general contractor's alone, on any site with more than one subcontractor",
              "The Secretary of Labor's, who supervises education and training programs under the Act",
            ],
            correctIndex: 0,
            explanation:
              "The Secretary's role in 1926.21(a) is to establish and supervise education and training programs, which is a different duty.",
            sourceLessonSlug: "subpart-c-employer-duties",
          },
          {
            prompt: "How many federal inspections does OSHA report for fiscal year 2024?",
            options: [
              "34,696",
              "5,283, which is the count of fatal work injuries rather than of inspections",
              "1,850, which is the approximate number of inspectors rather than inspections",
              "8 million, matching the number of worksites within the agency's jurisdiction",
            ],
            correctIndex: 0,
            explanation:
              "Each of the other figures appears on the same OSHA statistics page but measures something else.",
            sourceLessonSlug: "rights-reporting-and-penalties",
          },
          {
            prompt: "What is the maximum penalty for a repeated violation under the 2026 amounts?",
            options: [
              "$165,514 per violation",
              "$16,550 per violation, the same as a serious violation of the same standard",
              "$16,550 per day beyond the abatement date named in the original citation",
              "Ten percent of the employer's annual contract value on the project inspected",
            ],
            correctIndex: 0,
            explanation:
              "Willful and repeated share the same maximum, ten times the serious maximum in the published table.",
            sourceLessonSlug: "rights-reporting-and-penalties",
          },
          {
            prompt: "Which of these is a posting violation penalty under the published table?",
            options: [
              "$16,550 per violation",
              "$165,514 per violation, because failing to post denies notice to every worker on site",
              "No monetary penalty, since posting is an administrative rather than a safety requirement",
              "$16,550 per day, because the failure continues for as long as the notice is missing",
            ],
            correctIndex: 0,
            explanation:
              "Posting requirements sit in the same row as serious and other-than-serious violations at the same maximum.",
            sourceLessonSlug: "rights-reporting-and-penalties",
          },
          {
            prompt: "What is a competent person expected to do that an authorized person is not?",
            options: [
              "Take prompt corrective measures to eliminate hazards",
              "Hold a recognized degree or certificate in the trade being inspected",
              "Sign the written certification record for each employee trained on the site",
              "Report directly to the employer rather than to a foreman or superintendent",
            ],
            correctIndex: 0,
            explanation:
              "1926.32(f) requires both hazard recognition and the authorization to correct, which is what makes the role load-bearing in 1926.20(b)(2).",
            sourceLessonSlug: "subpart-c-employer-duties",
          },
          {
            prompt: "What does 1926.26 require of construction areas, aisles, stairs and storage areas where work is in progress?",
            options: [
              "Lighting, natural or artificial",
              "Signage identifying the competent person responsible for that area of the site",
              "Separation from occupied areas by a physical barrier at least 42 inches high",
              "Daily inspection and a written record kept available at the jobsite for review",
            ],
            correctIndex: 0,
            explanation:
              "The minimum illumination levels themselves are set in Subpart D, at 1926.56, rather than in the Subpart C section that states the duty.",
            sourceLessonSlug: "subpart-c-employer-duties",
          },
          {
            prompt: "What does 1926.28(a) make the employer responsible for?",
            options: [
              "Requiring the wearing of appropriate protective equipment",
              "Selecting equipment that meets the consensus standards listed in 1926.6",
              "Paying for all protective equipment used to comply with the part",
              "Certifying annually that each employee's equipment has been electrically tested",
            ],
            correctIndex: 0,
            explanation:
              "1926.28(a) is the duty to require its use in operations with exposure to hazardous conditions, and it points to Subpart E for selection, use and maintenance.",
            sourceLessonSlug: "subpart-c-employer-duties",
          },
          {
            prompt: "Why does the lesson describe Subpart C as the spine of the part?",
            options: [
              "Later specific rules are these duties made concrete",
              "It is the longest subpart and contains more sections than any other in the part",
              "It is the only subpart that applies to every construction employer without exception",
              "It was the first subpart adopted, and the rest were added by later rulemakings",
            ],
            correctIndex: 0,
            explanation:
              "Inspect, train, remove what does not comply, restrict operation to the qualified, and keep the place clean: the specific subparts apply those to particular hazards.",
            sourceLessonSlug: "subpart-c-employer-duties",
          },
          {
            prompt: "Which section of Part 1926 makes access to employee exposure and medical records identical to a general industry rule?",
            options: [
              "1926.33",
              "1926.35, which adopts the general industry emergency action plan requirements",
              "1926.50, which adopts the general industry medical services requirements",
              "1926.20, which extends the general industry compliance duties to construction",
            ],
            correctIndex: 0,
            explanation:
              "1926.33 states that the requirements applicable to construction are identical to those at 1910.1020.",
            sourceLessonSlug: "subpart-c-employer-duties",
          },
          {
            prompt: "What is the significance of the phrase separate violation in 1926.20(f)?",
            options: [
              "Exposure of several workers can be cited several times",
              "Each subpart of the part is cited independently of the others in one inspection",
              "A violation found on a second visit is automatically treated as a repeated violation",
              "Training and equipment failures must be cited under different sections of the Act",
            ],
            correctIndex: 0,
            explanation:
              "The duty runs to each employee covered by the requirement, so the count of unprotected workers can become the count of violations.",
            sourceLessonSlug: "subpart-c-employer-duties",
          },
          {
            prompt: "Which right listed by OSHA lets a worker take part in an inspection rather than just trigger one?",
            options: [
              "The right to speak to the inspector",
              "The right to select which areas of the site the inspector will examine first",
              "The right to receive a copy of the inspector's notes at the close of the visit",
              "The right to require that the inspection take place outside working hours",
            ],
            correctIndex: 0,
            explanation:
              "The list pairs requesting an OSHA inspection with speaking to the inspector, which is what makes the request more than a form.",
            sourceLessonSlug: "rights-reporting-and-penalties",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3 — The Focus Four, and the duty to protect from falls
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-focus-four",
      title: "5 · The Focus Four, and the one number that is published",
      section: "Section 3 · The Focus Four, and the duty to protect from falls",
      body: `**Supports NCCER Core module 00101, Basic Safety (Construction Site Safety Orientation).**

OSHA groups construction's deadliest hazards into four, and it publishes a training packet organised around exactly those four. They are **falls**, **caught-in or -between**, **struck-by**, and **electrocution**. The grouping is OSHA's own, not an industry convention, and each of the four has an instructor guide and student materials on OSHA's Construction Focus Four Training page.

**The published number, and the three that are not published there.** OSHA's Fall Prevention Campaign page states flatly that falls are the leading cause of death in construction, and gives one figure: "In 2024, there were 389 fatal falls to a lower level out of 1,034 construction fatalities (BLS data)." That is more than a third of every construction death in the year, from one hazard. OSHA does not publish the corresponding annual counts for struck-by, caught-in or between, and electrocution on the same page, and this course did not retrieve them anywhere else, so it does not print numbers for the other three. Their order of magnitude relative to falls is not asserted here. If a figure is needed, the underlying source is the Bureau of Labor Statistics Census of Fatal Occupational Injuries.

**Which part of the regulation answers each hazard.** Falls are Subpart M, and also Subpart L for scaffolds and Subpart X for ladders. Struck-by runs through the falling-object provisions: 1926.501(c) requires a hard hat plus toeboards, screens, guardrails, a canopy or a barricade wherever employees are exposed to falling objects, 1926.451(h) does the same for scaffolds, and 1926.100 sets the head protection criteria. Caught-in or between is the hazard behind Subpart P for excavations, which is out of scope for these notes, and behind 1926.20(b)(3), which requires equipment that does not comply to be tagged, locked out or removed. Electrocution is Subpart K, especially 1926.404(b)(1) on ground-fault protection and 1926.416 on working near energized circuits.

**The campaign, and its three steps.** Since 2012 OSHA has run the Fall Prevention Campaign with the National Institute for Occupational Safety and Health and the National Occupational Research Agenda Construction Sector. Its structure is worth borrowing because it maps onto the regulation. **Plan ahead** to get the job done safely: decide how the job will be done, what tasks are involved, and what safety equipment each task needs, and include that equipment when estimating the cost of the job. **Provide the right equipment**: OSHA's page notes that workers six feet or more above lower levels are at risk of serious injury or death, and that the employer must supply the right ladders, scaffolds and gear, with a harness for each worker who needs to tie off, fitted and regularly inspected. **Train everyone** to use the equipment safely, and to recognise hazards on the job.

**Why the four are worth memorising even though the regulation does not use the phrase.** The Focus Four is a teaching frame, not a legal category, and no citation is ever issued under it. Its value is as a checklist for looking at an unfamiliar site: what could I fall from, what could fall on me, what could close on me, and what could energise. Four questions is short enough to actually ask.

:::reveal Name OSHA's four Focus Four hazards. ||| Falls, caught-in or between, struck-by, and electrocution.

:::reveal What single Focus Four statistic does this course print, and why only one? ||| That in 2024 there were 389 fatal falls to a lower level out of 1,034 construction fatalities, from OSHA's Fall Prevention Campaign page. The corresponding annual counts for the other three hazards were not published there and were not retrieved elsewhere, so no number is given for them.

:::reveal What are the three steps of OSHA's Fall Prevention Campaign? ||| Plan ahead to get the job done safely, provide the right equipment, and train everyone to use it safely.

## Vocabulary
- **Focus Four**: OSHA's teaching grouping of construction's deadliest hazards into falls, caught-in or between, struck-by and electrocution, used for training rather than for citation.
- **Fatal fall to a lower level**: the Bureau of Labor Statistics category behind the figure of 389 construction deaths in 2024.
- **Census of Fatal Occupational Injuries**: the Bureau of Labor Statistics programme that produces the underlying fatality counts OSHA cites.
- **Falling-object protection**: the requirement, at 1926.501(c) generally and 1926.451(h) on scaffolds, to combine a hard hat with toeboards, screens, guardrails, canopies or barricades.
- **National Safety Stand-Down**: the annual event promoted through the Fall Prevention Campaign, which OSHA runs with NIOSH and the NORA Construction Sector.

## Sources
Occupational Safety and Health Administration. (n.d.). *Construction Focus Four Training*. U.S. Department of Labor. Retrieved September 9, 2026, from https://www.osha.gov/training/outreach/construction/focus-four

Occupational Safety and Health Administration. (n.d.). *OSHA's Fall Prevention Campaign*. U.S. Department of Labor. Retrieved September 9, 2026, from https://www.osha.gov/stop-falls`,
    },
    {
      slug: "subpart-m-the-duty",
      title: "6 · Subpart M: when fall protection is required",
      section: "Section 3 · The Focus Four, and the duty to protect from falls",
      body: `**Supports NCCER Core module 00101, Basic Safety (Construction Site Safety Orientation).**

1926.501 is titled "Duty to have fall protection," and the title is the point. It says when protection is required and what kinds are acceptable in each situation. The criteria the systems themselves must meet are a separate section, 1926.502, covered in the next lesson.

**The number to remember is six feet, and the general case is 1926.501(b)(1).** Each employee on a walking or working surface with an unprotected side or edge which is six feet or more above a lower level shall be protected by guardrail systems, safety net systems, or personal fall arrest systems. Paragraph (b)(15) sweeps up anything not otherwise addressed at the same six feet with the same three choices. Before any of that, 1926.501(a)(2) requires the employer to determine that the surface has the strength and structural integrity to support employees safely, and to allow work only on surfaces that do.

**The situations that get their own rule, and how they differ.**
- **Leading edges**, (b)(2)(i): the same three systems at six feet, with a narrow exception if the employer can demonstrate that using them is infeasible or creates a greater hazard, in which case a written fall protection plan under 1926.502(k) is required. The note in the regulation is unusually blunt: there is a presumption that at least one of the listed systems is feasible, and the burden of proving otherwise is on the employer.
- **Hoist areas**, (b)(3): guardrails or personal fall arrest, and if guardrails are removed for hoisting and an employee must lean out through the opening, that employee must be in a personal fall arrest system.
- **Holes**, (b)(4): skylights count as holes. Fall arrest, covers or guardrails against falling through at more than six feet; covers against stepping into or through; covers against objects falling through.
- **Formwork and reinforcing steel**, (b)(5): fall arrest, nets, or a positioning device system.
- **Ramps, runways and other walkways**, (b)(6): guardrail systems.
- **Excavations**, (b)(7): guardrails, fences or barricades at the edge of an excavation six feet or more deep where it is not readily seen because of plant growth or another visual barrier, and covers among the options for wells, pits and shafts.
- **Dangerous equipment**, (b)(8): the only paragraph that bites below six feet. An employee less than six feet above dangerous equipment must be protected by guardrails or by equipment guards, and at six feet or more the usual systems apply.
- **Overhand bricklaying**, (b)(9): the three systems, or work inside a controlled access zone. Reaching more than ten inches below the level of the surface you are standing on ends that option and requires a guardrail, net or fall arrest system. A note adds that bricklaying performed on scaffolds is regulated by Subpart L instead.
- **Low-slope roofs**, (b)(10): the three systems, or a warning line combined with guardrails, nets, fall arrest or a safety monitoring system. On roofs fifty feet or less in width a safety monitoring system alone is permitted.
- **Steep roofs**, (b)(11): guardrails with toeboards, nets, or fall arrest. The toeboards are the difference.
- **Residential construction**, (b)(13): the three systems, with the same infeasibility exception and the same presumption against it.
- **Wall openings**, (b)(14): protection is required where the outside bottom edge is six feet or more above a lower level and the inside bottom edge is less than thirty-nine inches above the working surface.

**Falling objects, at 1926.501(c).** Where an employee is exposed to falling objects the employer shall have each employee wear a hard hat, and shall additionally erect toeboards, screens or guardrails, or erect a canopy and keep objects far enough from the edge, or barricade the area and keep people out of it. The hard hat is never the whole answer in this paragraph.

:::reveal At what height does 1926.501(b)(1) require fall protection on an unprotected side or edge, and what three systems satisfy it? ||| Six feet or more above a lower level, satisfied by a guardrail system, a safety net system, or a personal fall arrest system.

:::reveal What must an employer show before using a fall protection plan instead of a system on a leading edge? ||| That using guardrails, nets or personal fall arrest is infeasible or creates a greater hazard. The regulation states a presumption that at least one system is feasible and puts the burden of proof on the employer.

:::reveal What makes a wall opening one that 1926.501(b)(14) covers? ||| The outside bottom edge of the opening is six feet or more above a lower level and the inside bottom edge is less than thirty-nine inches above the walking or working surface.

## Vocabulary
- **Unprotected side or edge**: a side or edge of a walking or working surface with no guardrail, wall or equivalent, which triggers the six-foot rule at 1926.501(b)(1).
- **Leading edge**: the advancing edge of a floor, roof or formwork under construction, which carries its own paragraph and its own narrow infeasibility exception.
- **Fall protection plan**: the written alternative permitted only under 1926.502(k), and only where the employer has demonstrated that the listed systems are infeasible or create a greater hazard.
- **Safety monitoring system**: a person assigned to watch and warn, permitted alone only in the low-slope roofing case on roofs fifty feet or less in width.
- **Positioning device system**: an option specific to formwork and reinforcing steel work, distinct from a fall arrest system.

## Sources
Safety and Health Regulations for Construction, 29 C.F.R. § 1926.501 (2026). https://www.ecfr.gov/current/title-29/part-1926/section-1926.501`,
    },
    {
      slug: "section-3-quiz",
      title: "Section 3 quiz · The Focus Four and the duty to protect from falls",
      section: "Section 3 · The Focus Four, and the duty to protect from falls",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Which four hazards make up OSHA's Focus Four?",
            options: [
              "Falls, caught-in or between, struck-by, electrocution",
              "Falls, chemical exposure, heat illness, and repetitive strain from manual handling",
              "Falls, fire, confined space entry, and crane and rigging failure on the jobsite",
              "Trenching collapse, silica dust, noise-induced hearing loss, and struck-by",
            ],
            correctIndex: 0,
            explanation:
              "OSHA publishes an instructor guide and student materials for each of those four on its Construction Focus Four Training page.",
            sourceLessonSlug: "the-focus-four",
          },
          {
            prompt: "How many fatal falls to a lower level does OSHA report in construction for 2024?",
            options: [
              "389",
              "1,034, which is the count of all construction fatalities in that year",
              "5,283, which is the count of fatal work injuries across all industries",
              "34,696, which is the count of federal OSHA inspections in fiscal 2024",
            ],
            correctIndex: 0,
            explanation:
              "OSHA's fall prevention campaign gives 389 fatal falls to a lower level out of 1,034 construction fatalities, attributing the data to BLS.",
            sourceLessonSlug: "the-focus-four",
          },
          {
            prompt: "Roughly what share of 2024 construction deaths were fatal falls to a lower level?",
            options: [
              "More than a third",
              "About one in ten, which is why OSHA groups falls with three other hazards",
              "About two thirds, making falls more deadly than all other causes combined",
              "Just under half, once falls on the same level are counted alongside them",
            ],
            correctIndex: 0,
            explanation:
              "389 out of 1,034 is a little over 37 percent, which is what makes falls the leading cause of death in construction.",
            sourceLessonSlug: "the-focus-four",
          },
          {
            prompt: "Why does this course print no fatality count for struck-by, caught-in or between, and electrocution?",
            options: [
              "Those figures were not retrieved from a published source",
              "Those three hazards are not tracked separately by any federal statistical programme",
              "OSHA suppresses them because the categories overlap too much to report",
              "They are published only in the Focus Four instructor guides, which are not public",
            ],
            correctIndex: 0,
            explanation:
              "OSHA's fall prevention page publishes only the falls figure, and the course does not print a number it did not retrieve.",
            sourceLessonSlug: "the-focus-four",
          },
          {
            prompt: "Which federal programme produces the underlying construction fatality counts OSHA cites?",
            options: [
              "The BLS Census of Fatal Occupational Injuries",
              "OSHA's own Integrated Management Information System of inspection records",
              "The NIOSH Fatality Assessment and Control Evaluation programme",
              "The Census Bureau's annual survey of construction employers and payrolls",
            ],
            correctIndex: 0,
            explanation:
              "The fall prevention campaign page attributes its figures to BLS data, and the CFOI is the programme that produces them.",
            sourceLessonSlug: "the-focus-four",
          },
          {
            prompt: "Which subpart is the main answer to the electrocution hazard?",
            options: [
              "Subpart K",
              "Subpart E, through the criteria it sets for rubber insulating gloves and sleeves",
              "Subpart M, because contact with power lines most often follows a fall from height",
              "Subpart C, through the general accident prevention responsibilities at 1926.20",
            ],
            correctIndex: 0,
            explanation:
              "Subpart K covers ground-fault protection at 1926.404(b)(1) and work near energized circuits at 1926.416, though Subpart E does set the criteria for electrical protective equipment.",
            sourceLessonSlug: "the-focus-four",
          },
          {
            prompt: "Which paragraph requires a hard hat plus a second measure where employees are exposed to falling objects?",
            options: [
              "1926.501(c)",
              "1926.100(a), which requires protective helmets where head injury is possible",
              "1926.451(h), which covers falling object protection specifically on scaffolds",
              "1926.502(c), which sets the criteria a safety net system must meet",
            ],
            correctIndex: 0,
            explanation:
              "1926.451(h) is the scaffold equivalent and 1926.100 sets the helmet criteria, but 1926.501(c) is the general falling-object duty in Subpart M.",
            sourceLessonSlug: "the-focus-four",
          },
          {
            prompt: "What are the three steps of OSHA's Fall Prevention Campaign?",
            options: [
              "Plan, provide, train",
              "Inspect, correct, document, in that order before each shift begins on site",
              "Assess, abate, appeal, matching the stages of an enforcement action",
              "Recognise, avoid, report, drawn from the training duty at 1926.21(b)(2)",
            ],
            correctIndex: 0,
            explanation:
              "Plan ahead to get the job done safely, provide the right equipment, and train everyone to use it safely.",
            sourceLessonSlug: "the-focus-four",
          },
          {
            prompt: "Who does OSHA run the Fall Prevention Campaign with?",
            options: [
              "NIOSH and the NORA Construction Sector",
              "The Bureau of Labor Statistics and the Census Bureau",
              "NCCER and the Associated General Contractors of America",
              "The state plan agencies, which administer the campaign within their own states",
            ],
            correctIndex: 0,
            explanation:
              "The partnership with the National Institute for Occupational Safety and Health and the National Occupational Research Agenda Construction Sector dates from 2012.",
            sourceLessonSlug: "the-focus-four",
          },
          {
            prompt: "Is a citation ever issued under the Focus Four?",
            options: [
              "No, it is a teaching frame",
              "Yes, as a general duty clause citation when more than one of the four is present",
              "Yes, under 1926.21(b)(2), which requires instruction in the four hazards",
              "Only in states operating their own plan, which may adopt it as a standard",
            ],
            correctIndex: 0,
            explanation:
              "Citations name a section of the regulation. The Focus Four is how OSHA organises training and how a worker can organise a look at an unfamiliar site.",
            sourceLessonSlug: "the-focus-four",
          },
          {
            prompt: "What is the title of 29 CFR 1926.501?",
            options: [
              "Duty to have fall protection",
              "Fall protection systems criteria and practices, covering guardrails and arrest systems",
              "Training requirements, covering the competent person who must deliver the training",
              "Scope, application, and definitions applicable to this subpart",
            ],
            correctIndex: 0,
            explanation:
              "The criteria are 1926.502, the training requirements are 1926.503, and the scope and definitions are 1926.500.",
            sourceLessonSlug: "subpart-m-the-duty",
          },
          {
            prompt: "At what height does the general rule at 1926.501(b)(1) apply?",
            options: [
              "Six feet or more above a lower level",
              "Ten feet or more, matching the scaffold trigger in Subpart L",
              "Four feet or more, matching the general industry walking-working surfaces rule",
              "Twenty-five feet or more, the height at which 1926.105 requires safety nets",
            ],
            correctIndex: 0,
            explanation:
              "Ten feet is the scaffold trigger at 1926.451(g)(1) and twenty-five feet appears in the older 1926.105 safety net section, which is why the numbers get confused.",
            sourceLessonSlug: "subpart-m-the-duty",
          },
          {
            prompt: "Which three systems satisfy the general unprotected-edge rule?",
            options: [
              "Guardrails, safety nets, personal fall arrest",
              "Guardrails, warning lines, and a safety monitoring system assigned to that area",
              "Safety nets, positioning device systems, and a written fall protection plan",
              "Personal fall arrest, body belts, and controlled access zones marked with control lines",
            ],
            correctIndex: 0,
            explanation:
              "Warning lines and safety monitoring appear only in the low-slope roofing paragraph, and body belts have not been acceptable in a fall arrest system since January 1, 1998.",
            sourceLessonSlug: "subpart-m-the-duty",
          },
          {
            prompt: "What does 1926.501(a)(2) require before employees work on a surface at all?",
            options: [
              "The employer determines it has the strength to support them",
              "A qualified person certifies the load rating in writing and files it at the jobsite",
              "A competent person inspects it at the start of every shift and records the result",
              "The surface is tested with a load equal to twice the maximum intended load",
            ],
            correctIndex: 0,
            explanation:
              "Employees may work on those surfaces only when they have the requisite strength and structural integrity.",
            sourceLessonSlug: "subpart-m-the-duty",
          },
          {
            prompt: "Under 1926.501(b)(2), who bears the burden when a fall protection plan is used on a leading edge?",
            options: [
              "The employer",
              "The competent person who signed the plan on behalf of the crew",
              "The compliance officer, who must show that a system was in fact feasible",
              "Nobody; the plan is an equal alternative that requires no justification",
            ],
            correctIndex: 0,
            explanation:
              "The regulation states a presumption that at least one listed system is feasible and will not create a greater hazard, so the employer must establish otherwise.",
            sourceLessonSlug: "subpart-m-the-duty",
          },
          {
            prompt: "Which paragraph authorises a written fall protection plan as an alternative?",
            options: [
              "1926.502(k)",
              "1926.501(b)(15), the sweep-up paragraph for surfaces not otherwise addressed",
              "1926.503(b), which requires a written certification record of training",
              "1926.500(a)(2), which sets out where the subpart does not apply",
            ],
            correctIndex: 0,
            explanation:
              "The duty section points to 1926.502(k) for the plan's contents, which is why the exception cannot be improvised on site.",
            sourceLessonSlug: "subpart-m-the-duty",
          },
          {
            prompt: "In a hoist area where guardrails have been removed and a worker must lean out through the opening, what is required?",
            options: [
              "A personal fall arrest system",
              "A safety monitoring system, with the monitor stationed at the opening",
              "A safety net installed within thirty feet below the opening",
              "A controlled access zone marked by a control line six feet from the edge",
            ],
            correctIndex: 0,
            explanation:
              "1926.501(b)(3) allows guardrails or fall arrest generally, but names fall arrest specifically for the worker who leans through or out over the edge.",
            sourceLessonSlug: "subpart-m-the-duty",
          },
          {
            prompt: "Under 1926.501(b)(4), how are skylights treated?",
            options: [
              "As holes",
              "As unprotected edges, requiring guardrails on all four sides",
              "As wall openings, using the thirty-nine inch inside-edge test",
              "As dangerous equipment, requiring guards rather than fall protection",
            ],
            correctIndex: 0,
            explanation:
              "The paragraph names skylights explicitly within holes, which is why a cover is required against stepping through as well as against falling through.",
            sourceLessonSlug: "subpart-m-the-duty",
          },
          {
            prompt: "What three protections does 1926.501(b)(4) require covers or systems against?",
            options: [
              "Falling through, stepping through, and objects falling through",
              "Falling through, tripping on the cover, and the cover being displaced by wind",
              "Falling through, chemical exposure below the hole, and electrical contact",
              "Falling through, and nothing else; the other two are recommendations only",
            ],
            correctIndex: 0,
            explanation:
              "Sub-paragraphs (i), (ii) and (iii) address employees falling through, tripping in or stepping into or through, and objects falling through.",
            sourceLessonSlug: "subpart-m-the-duty",
          },
          {
            prompt: "Which option is unique to formwork and reinforcing steel work under 1926.501(b)(5)?",
            options: [
              "Positioning device systems",
              "Safety monitoring systems, because the work is done in a confined footprint",
              "Warning line systems set back six feet from the edge of the formwork",
              "Controlled access zones, entered only by employees engaged in the work",
            ],
            correctIndex: 0,
            explanation:
              "The paragraph lists personal fall arrest systems, safety net systems, or positioning device systems for employees on the face of formwork or reinforcing steel.",
            sourceLessonSlug: "subpart-m-the-duty",
          },
          {
            prompt: "What does 1926.501(b)(6) require on ramps, runways and other walkways?",
            options: [
              "Guardrail systems",
              "Personal fall arrest systems anchored above the point of operation",
              "Safety nets installed no more than thirty feet below the walkway",
              "Toeboards, with a guardrail only where the drop exceeds ten feet",
            ],
            correctIndex: 0,
            explanation:
              "This paragraph names only guardrails, which distinguishes it from the general rule that offers three systems.",
            sourceLessonSlug: "subpart-m-the-duty",
          },
          {
            prompt: "When does 1926.501(b)(7) require protection at the edge of an excavation?",
            options: [
              "At six feet deep where the excavation is not readily seen",
              "At four feet deep, matching the general industry requirement for a means of egress",
              "At any depth where a competent person has classified the soil as Type C",
              "At twenty feet deep, the depth at which a registered engineer must design the system",
            ],
            correctIndex: 0,
            explanation:
              "The trigger is six feet or more in depth where plant growth or another visual barrier makes the excavation hard to see, with wells, pits and shafts covered separately.",
            sourceLessonSlug: "subpart-m-the-duty",
          },
          {
            prompt: "On what roofs does 1926.501(b)(10) permit a safety monitoring system alone?",
            options: [
              "Low-slope roofs fifty feet or less in width",
              "Any low-slope roof, provided the monitor has no other duties while monitoring",
              "Steep roofs where guardrails would obstruct the work being performed",
              "Any roof where the employer has filed a written fall protection plan",
            ],
            correctIndex: 0,
            explanation:
              "Otherwise the paragraph requires a warning line combined with guardrails, nets, fall arrest or a monitoring system, or one of the three standard systems.",
            sourceLessonSlug: "subpart-m-the-duty",
          },
          {
            prompt: "What does 1926.501(b)(11) add for steep roofs that the low-slope paragraph does not?",
            options: [
              "Toeboards on the guardrail system",
              "A requirement that a competent person monitor the crew continuously",
              "A prohibition on any work when the roof surface is wet or frosted",
              "A doubled anchorage strength requirement for personal fall arrest systems",
            ],
            correctIndex: 0,
            explanation:
              "The steep roof options are guardrail systems with toeboards, safety net systems, or personal fall arrest systems.",
            sourceLessonSlug: "subpart-m-the-duty",
          },
          {
            prompt: "Which measurement decides whether a wall opening needs fall protection?",
            options: [
              "Inside bottom edge less than thirty-nine inches above the surface",
              "Outside bottom edge less than thirty-nine inches above the lower level below it",
              "Opening width greater than nineteen inches at its narrowest point",
              "Opening area greater than thirty-six square inches, matching the net mesh limit",
            ],
            correctIndex: 0,
            explanation:
              "Both tests must be met: the outside bottom edge six feet or more above a lower level, and the inside bottom edge less than thirty-nine inches above the walking or working surface.",
            sourceLessonSlug: "subpart-m-the-duty",
          },
          {
            prompt: "Under 1926.501(c), is a hard hat by itself enough where employees are exposed to falling objects?",
            options: [
              "No, a second measure is always required",
              "Yes, provided the helmet meets one of the ANSI Z89.1 editions listed in 1926.100",
              "Yes, where a competent person judges the exposure to be brief and intermittent",
              "No, but only on scaffolds, where 1926.451(h) applies instead",
            ],
            correctIndex: 0,
            explanation:
              "The employer must have each employee wear a hard hat AND implement toeboards, screens or guardrails, or a canopy, or a barricade.",
            sourceLessonSlug: "subpart-m-the-duty",
          },
          {
            prompt: "Which paragraph catches walking and working surfaces not addressed anywhere else in 1926.501(b)?",
            options: [
              "(b)(15)",
              "(b)(1), the unprotected sides and edges paragraph that opens the subsection",
              "(a)(1), which states that all fall protection must conform to 1926.502",
              "(c), the falling object protection paragraph that closes the section",
            ],
            correctIndex: 0,
            explanation:
              "It applies the same six-foot trigger and the same three systems to anything (b)(1) through (b)(14) did not name.",
            sourceLessonSlug: "subpart-m-the-duty",
          },
          {
            prompt: "How does the lesson describe the division of labour between 1926.501 and 1926.502?",
            options: [
              "501 says when protection is required, 502 says what it must meet",
              "501 applies to residential work and 502 applies to commercial work",
              "501 sets employer duties and 502 sets the corresponding employee duties",
              "501 states the general rule and 502 lists the exceptions to it",
            ],
            correctIndex: 0,
            explanation:
              "1926.501(a)(1) says all fall protection required by the section shall conform to the criteria in 1926.502.",
            sourceLessonSlug: "subpart-m-the-duty",
          },
          {
            prompt: "Which hazard does Subpart P principally address?",
            options: [
              "Caught-in or between, in excavations",
              "Struck-by, from vehicles and equipment moving on the site",
              "Electrocution, from contact with underground power lines while digging",
              "Falls, from the edge of an unguarded excavation more than six feet deep",
            ],
            correctIndex: 0,
            explanation:
              "Subpart P is out of scope for these notes, but it is the subpart behind the caught-in or between hazard in trenching work.",
            sourceLessonSlug: "the-focus-four",
          },
          {
            prompt: "What does the lesson suggest the Focus Four is actually good for?",
            options: [
              "Four questions to ask on an unfamiliar site",
              "A legal defence where a specific standard does not name the hazard encountered",
              "A framework for classifying citations by severity during an inspection",
              "A ranking of hazards by cost, so the employer can prioritise its spending",
            ],
            correctIndex: 0,
            explanation:
              "What could I fall from, what could fall on me, what could close on me, what could energise: short enough to actually ask.",
            sourceLessonSlug: "the-focus-four",
          },
          {
            prompt: "Which section of Subpart C supports the caught-in or between hazard by requiring non-complying equipment be taken out of use?",
            options: [
              "1926.20(b)(3)",
              "1926.21(b)(2), the duty to instruct each employee in hazard recognition",
              "1926.25(a), the duty to clear debris from work areas and passageways",
              "1926.28(a), the duty to require appropriate protective equipment",
            ],
            correctIndex: 0,
            explanation:
              "It requires tagging or locking the controls to render the equipment inoperable, or physically removing it from its place of operation.",
            sourceLessonSlug: "the-focus-four",
          },
          {
            prompt: "According to OSHA's campaign page, when should safety equipment enter the planning of a job?",
            options: [
              "When the cost of the job is being estimated",
              "After the schedule is fixed, so the equipment matches the sequence of the work",
              "At the pre-shift briefing on the first day work at height begins",
              "Only once a competent person has walked the site and identified the hazards",
            ],
            correctIndex: 0,
            explanation:
              "OSHA says employers should include safety equipment when estimating the cost and plan to have the necessary equipment and tools available at the site.",
            sourceLessonSlug: "the-focus-four",
          },
          {
            prompt: "What does OSHA's campaign say about a harness used for roof work?",
            options: [
              "Provide one per worker, make sure it fits, and inspect it regularly",
              "One harness per anchor point is sufficient where workers rotate through the task",
              "A body belt may be substituted where the free fall distance is under six feet",
              "Fit is a matter for the worker, since equipment is adjusted individually on site",
            ],
            correctIndex: 0,
            explanation:
              "The page says to provide a harness for each worker who needs to tie off to the anchor, make sure the personal fall arrest system fits, and inspect it regularly for safe use.",
            sourceLessonSlug: "the-focus-four",
          },
          {
            prompt: "Which two subparts other than M does the lesson tie to the falls hazard?",
            options: [
              "L for scaffolds and X for ladders",
              "K for electrical and P for excavations, since both involve work at grade level",
              "E for protective equipment and C for the general accident prevention duties",
              "D for occupational health and F for fire protection and prevention",
            ],
            correctIndex: 0,
            explanation:
              "OSHA's own campaign describes falls from ladders, scaffolds and roofs, which is why the ladder and scaffold subparts matter alongside Subpart M.",
            sourceLessonSlug: "the-focus-four",
          },
          {
            prompt: "Which of these is a Focus Four hazard rather than a subject of one of the five subparts these notes cover?",
            options: [
              "Struck-by",
              "Fall protection, which Subpart M covers in three substantive sections",
              "Scaffolds, which Subpart L covers including capacity, access and use",
              "Personal protective equipment, which Subpart E covers by body part",
            ],
            correctIndex: 0,
            explanation:
              "Struck-by is a hazard category rather than a subpart, addressed through falling-object provisions in several places in the regulation.",
            sourceLessonSlug: "the-focus-four",
          },
          {
            prompt: "What did OSHA's fall prevention page call these deaths?",
            options: [
              "Preventable",
              "Unavoidable in high-rise construction without a redesign of the work sequence",
              "Declining steadily, which is why the campaign is winding down",
              "Concentrated among employers with fewer than ten employees on site",
            ],
            correctIndex: 0,
            explanation:
              "The page states that falls are the leading cause of death in construction, gives the 2024 figures, and then says these deaths are preventable.",
            sourceLessonSlug: "the-focus-four",
          },
          {
            prompt: "Which is the correct pairing of a fall protection situation to its required system?",
            options: [
              "Ramps and walkways, guardrail systems",
              "Steep roofs, safety monitoring systems used alone without a warning line",
              "Hoist areas, safety net systems installed thirty feet below the opening",
              "Formwork, warning line systems set back six feet from the face",
            ],
            correctIndex: 0,
            explanation:
              "Steep roofs require guardrails with toeboards, nets or fall arrest; hoist areas require guardrails or fall arrest; formwork requires fall arrest, nets or a positioning device system.",
            sourceLessonSlug: "subpart-m-the-duty",
          },
          {
            prompt: "In the residential construction paragraph at 1926.501(b)(13), what happens if the employer claims infeasibility?",
            options: [
              "It must implement a fall protection plan meeting 1926.502(k)",
              "It may proceed with a safety monitoring system in place of any other system",
              "It must notify the Area Office before beginning the affected work",
              "It may reduce the requirement to work above ten feet rather than six feet",
            ],
            correctIndex: 0,
            explanation:
              "Residential construction carries the same infeasibility exception, the same written plan requirement, and the same presumption against it as leading edge work.",
            sourceLessonSlug: "subpart-m-the-duty",
          },
          {
            prompt: "Which fall protection system does 1926.501 never list as an option?",
            options: [
              "A body belt worn as fall arrest",
              "A guardrail system installed along the unprotected side or edge",
              "A safety net system installed beneath the working surface",
              "A personal fall arrest system anchored independently of the platform",
            ],
            correctIndex: 0,
            explanation:
              "1926.502(d) says body belts have not been acceptable as part of a personal fall arrest system since January 1, 1998, though a body belt may still be used in a positioning device system.",
            sourceLessonSlug: "subpart-m-the-duty",
          },
          {
            prompt: "What does the phrase walking or working surface mean in Subpart M?",
            options: [
              "Any surface, horizontal or vertical, on which an employee works or walks",
              "A finished floor slab, excluding formwork and temporary decking",
              "A platform erected specifically for access, such as a scaffold or a ramp",
              "Any surface more than six feet above a lower level, by definition",
            ],
            correctIndex: 0,
            explanation:
              "1926.501(b)(1) says horizontal and vertical surface explicitly, which is why formwork, reinforcing steel and roofs all fall inside the subpart.",
            sourceLessonSlug: "subpart-m-the-duty",
          },
          {
            prompt: "Why is the Fall Prevention Campaign's structure described as mapping onto the regulation?",
            options: [
              "Its three steps track planning, equipment, and training duties",
              "Its three steps are quoted verbatim from 1926.503(a)(2) of the training standard",
              "Its three steps replace the requirements of 1926.501 for residential employers",
              "Its three steps are the abatement sequence an inspector applies after a citation",
            ],
            correctIndex: 0,
            explanation:
              "Plan corresponds to the duty to determine what protection the work needs, provide to 1926.502's system criteria, and train to 1926.503.",
            sourceLessonSlug: "the-focus-four",
          },
          {
            prompt: "What is a controlled access zone permitted for under 1926.501(b)(9)?",
            options: [
              "Overhand bricklaying and related work",
              "Low-slope roofing work carried out without a warning line system",
              "Leading edge work where guardrails have been demonstrated to be infeasible",
              "Any work on a walking or working surface between six and ten feet high",
            ],
            correctIndex: 0,
            explanation:
              "That paragraph lets an employee performing overhand bricklaying work in a controlled access zone as an alternative to the three systems.",
            sourceLessonSlug: "subpart-m-the-duty",
          },
          {
            prompt: "Under the overhand bricklaying paragraph, what triggers protection regardless of the controlled access zone?",
            options: [
              "Reaching more than ten inches below the working surface",
              "Working within six feet of an unprotected edge for any part of the shift",
              "Handling any unit heavier than fifty pounds while standing at the edge",
              "Working at a height greater than ten feet above the lower level",
            ],
            correctIndex: 0,
            explanation:
              "1926.501(b)(9)(ii) requires a guardrail system, safety net system or personal fall arrest system for an employee reaching more than ten inches below the surface.",
            sourceLessonSlug: "subpart-m-the-duty",
          },
          {
            prompt: "How does the regulation treat bricklaying performed on a scaffold?",
            options: [
              "Subpart L regulates it",
              "Subpart M regulates it, using the controlled access zone provisions",
              "Both subparts apply in full and the stricter requirement controls",
              "Neither applies, because the work is governed by the masonry standard",
            ],
            correctIndex: 0,
            explanation:
              "A note in 1926.501(b)(9) says bricklaying operations performed on scaffolds are regulated by Subpart L.",
            sourceLessonSlug: "subpart-m-the-duty",
          },
          {
            prompt: "What is the practical reason six feet is the number worth memorising first?",
            options: [
              "It is the trigger in the general rule and most specific paragraphs",
              "It is the maximum free fall distance a personal fall arrest system may allow",
              "It is the interval at which wire rope top rails must be flagged",
              "It is the height above which a hard hat becomes mandatory on site",
            ],
            correctIndex: 0,
            explanation:
              "Six feet is also the maximum free fall under 1926.502(d)(16)(iii) and the flagging interval under 1926.502(b)(9), which is exactly why the trigger is the one to fix first.",
            sourceLessonSlug: "subpart-m-the-duty",
          },
          {
            prompt: "Which situation in 1926.501(b) is addressed by guardrails, fences or barricades rather than by the usual three systems?",
            options: [
              "The edge of an excavation obscured by plant growth",
              "The face of formwork where reinforcing steel is being placed",
              "A hoist area from which guardrails have been temporarily removed",
              "A steep roof with unprotected sides more than six feet above a lower level",
            ],
            correctIndex: 0,
            explanation:
              "1926.501(b)(7)(i) names guardrail systems, fences or barricades for that case, with covers added for wells, pits and shafts.",
            sourceLessonSlug: "subpart-m-the-duty",
          },
          {
            prompt: "Which is true of dangerous equipment under 1926.501(b)(8)?",
            options: [
              "Protection is required even below six feet",
              "Protection is required only at six feet or more, like every other paragraph",
              "Equipment guards may never substitute for a guardrail system",
              "The paragraph applies only to equipment powered by an internal combustion engine",
            ],
            correctIndex: 0,
            explanation:
              "An employee less than six feet above dangerous equipment must be protected by guardrails or by equipment guards, and at six feet or more the usual systems apply.",
            sourceLessonSlug: "subpart-m-the-duty",
          },
          {
            prompt: "Which paragraph of 1926.501(b) applies below the six-foot trigger?",
            options: [
              "(b)(8), dangerous equipment",
              "(b)(1), unprotected sides and edges, where any drop at all counts",
              "(b)(14), wall openings, because of the thirty-nine inch inside-edge test",
              "(b)(4), holes, because a cover is required whatever the depth below",
            ],
            correctIndex: 0,
            explanation:
              "Holes do require covers against stepping through at any height, but the paragraph that names a sub-six-foot fall hazard is the dangerous equipment one.",
            sourceLessonSlug: "subpart-m-the-duty",
          },
          {
            prompt: "Which hazard does OSHA's Focus Four grouping address through Subpart L and Subpart X as well as Subpart M?",
            options: [
              "Falls",
              "Electrocution, since scaffolds and ladders are commonly metal",
              "Caught-in or between, since scaffold frames close on hands during erection",
              "Struck-by, since tools are most often dropped from ladders and scaffolds",
            ],
            correctIndex: 0,
            explanation:
              "OSHA's own campaign describes falls from ladders, scaffolds and roofs, which is why the scaffold and ladder subparts sit alongside the fall protection one.",
            sourceLessonSlug: "the-focus-four",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 4 — The systems that catch you, and the gear you wear
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "subpart-m-the-systems",
      title: "7 · Subpart M: what the systems must actually do",
      section: "Section 4 · The systems that catch you, and the gear you wear",
      body: `**Supports NCCER Core module 00101, Basic Safety (Construction Site Safety Orientation).**

1926.502 is where the numbers live. A system that is present but does not meet these criteria is not fall protection, and 1926.502(a)(2) requires the employer to provide and install the system before the employee begins the work that made it necessary.

**Guardrail systems, at 1926.502(b).** The top edge of the top rail sits at forty-two inches plus or minus three inches above the walking or working level, so thirty-nine to forty-five inches. A midrail, screen, mesh or equivalent goes between the top rail and the surface wherever there is no wall or parapet at least twenty-one inches high, with a midrail installed midway and intermediate members no more than nineteen inches apart. The top rail must withstand at least two hundred pounds applied within two inches of the top edge in any outward or downward direction, and when that load is applied downward the top edge must not deflect below thirty-nine inches. Midrails and equivalent members must withstand at least one hundred fifty pounds. Steel banding and plastic banding shall not be used as top rails or midrails. Wire rope used as a top rail must be flagged at intervals of no more than six feet with high-visibility material. Where a guardrail protects a hole used as a ladderway, it needs a gate or an offset so a person cannot walk straight into the hole.

**Safety net systems, at 1926.502(c).** Nets go as close as practicable under the working surface and in no case more than thirty feet below it. How far the net must extend outward depends on the drop: eight feet for a fall of up to five feet, ten feet for more than five and up to ten, thirteen feet for more than ten. A net must be drop-tested at the jobsite after installation, whenever relocated, after major repair, and at six-month intervals if left in place, using a four hundred pound bag of sand thirty inches in diameter. Mesh openings may not exceed thirty-six square inches nor be longer than six inches on any side. Nets are inspected at least once a week, and anything that falls into a net comes out before the next shift.

**Personal fall arrest systems, at 1926.502(d).** Body belts have not been acceptable as part of a fall arrest system since January 1, 1998, though a body belt remains acceptable in a positioning device system, and only locking snaphooks have been acceptable since the same date. D-rings and snaphooks need a minimum tensile strength of five thousand pounds. Lanyards and vertical lifelines need a minimum breaking strength of five thousand pounds, and each employee on a vertical lifeline gets a separate lifeline. Anchorages for fall arrest must be independent of any anchorage supporting a platform and capable of supporting at least five thousand pounds per employee attached, unless the system is designed and used under the supervision of a qualified person with a safety factor of at least two. When it stops a fall the system must limit the arresting force on the employee to eighteen hundred pounds with a body harness, rig so that the employee neither free falls more than six feet nor contacts a lower level, and limit deceleration distance to three and a half feet.

**Training, at 1926.503.** The employer provides a program for each employee who might be exposed to fall hazards, and the training must be given by a competent person qualified in eight named areas, including the nature of fall hazards in the work area, correct procedures for erecting, maintaining, disassembling and inspecting the systems, the use of each type of system, and the standards in the subpart. Compliance is verified by a written certification record carrying the employee's name or identity, the dates of training, and the signature of whoever conducted it or of the employer. Retraining is required when workplace changes make previous training obsolete, when the equipment changes, or when an employee's knowledge or use shows the training did not take.

:::reveal What load must a guardrail top rail withstand, and what may it not do under a downward load? ||| At least two hundred pounds applied within two inches of the top edge in any outward or downward direction, and under that downward load the top edge must not deflect to less than thirty-nine inches above the walking or working level.

:::reveal What are the four limits a personal fall arrest system must meet when it stops a fall? ||| Arresting force no more than eighteen hundred pounds with a body harness, free fall no more than six feet, no contact with a lower level, and deceleration distance no more than three and a half feet.

:::reveal What must a fall protection training certification record contain? ||| The name or other identity of the employee trained, the dates of the training, and the signature of the person who conducted it or of the employer.

## Vocabulary
- **Personal fall arrest system**: the harness, connectors, lanyard or lifeline and anchorage that stop a fall in progress, governed by 1926.502(d).
- **Anchorage**: the point a fall arrest system attaches to, which must be independent of any platform support and rated at five thousand pounds per attached employee unless designed by a qualified person.
- **Deceleration distance**: the additional vertical distance a falling employee travels while the system brings the fall to a stop, capped at three and a half feet.
- **Drop test**: the four hundred pound sand bag test that qualifies a safety net installation, repeated at six-month intervals when the net stays in place.
- **Certification record**: the written proof of fall protection training required by 1926.503(b), naming the employee, the dates and the trainer.

## Sources
Safety and Health Regulations for Construction, 29 C.F.R. §§ 1926.502, 1926.503 (2026). https://www.ecfr.gov/current/title-29/part-1926/subpart-M`,
    },
    {
      slug: "subpart-e-ppe",
      title: "8 · Subpart E: protective equipment, and who pays for it",
      section: "Section 4 · The systems that catch you, and the gear you wear",
      body: `**Supports NCCER Core module 00101, Basic Safety (Construction Site Safety Orientation).**

Subpart E is the last line of defence, which is why it is listed last in the hierarchy of controls and why so much of it is about who provides the equipment rather than about the equipment itself. The duty to require its use sits back in Subpart C, at 1926.28(a): the employer is responsible for requiring appropriate protective equipment in all operations where there is exposure to hazardous conditions.

**The general criteria, at 1926.95.** Protective equipment for eyes, face, head and extremities, protective clothing, respiratory devices and protective shields shall be provided, used and maintained in a sanitary and reliable condition wherever hazards make it necessary. Where an employee provides his own, the employer is still responsible for assuring its adequacy, maintenance and sanitation. Paragraph (c) requires the employer to ensure all PPE is of safe design and construction for the work, and "is selected to ensure that it properly fits each affected employee." Fit is a compliance requirement, not a comfort preference. The subpart then works down the body: 1926.96 covers safety-toe footwear, 1926.97 covers electrical protective equipment such as rubber insulating gloves and blankets, and 1926.106 covers work over or near water.

**Who pays, at 1926.95(d).** The default is that PPE used to comply with the part is provided by the employer at no cost to employees. The exceptions are narrow and worth knowing exactly, because they are where most arguments happen. The employer need not pay for non-specialty safety-toe protective footwear, including steel-toe shoes or boots, or for non-specialty prescription safety eyewear, provided the employer permits those items to be worn off the jobsite. It need not pay for everyday clothing such as long-sleeve shirts, long pants, street shoes and normal work boots, nor for ordinary clothing, skin creams or items used solely for protection from weather, including winter coats, gloves, parkas, rubber boots, ordinary sunglasses and sunscreen. The employer must pay for replacement PPE except where the employee lost it or intentionally damaged it, and it may not require an employee to provide or pay for his own PPE outside those exceptions.

**Head, at 1926.100.** Protective helmets are required where there is a possible danger of head injury from impact, from falling or flying objects, or from electrical shock and burns. The employer must provide head protection meeting ANSI Z89.1-2009, Z89.1-2003 or Z89.1-1997, and for employees exposed to high-voltage electric shock and burns the helmet must also meet Section 9.7, Electrical Insulation, of one of those standards.

**Eyes and face, at 1926.102.** Appropriate protection is required against flying particles, molten metal, liquid chemicals, acids or caustic liquids, chemical gases or vapors, and potentially injurious light radiation. Eye protection must provide side protection where there is a hazard from flying objects, and detachable side shields are acceptable. A worker who wears prescription lenses must be given protection that incorporates the prescription or that can be worn over the lenses without disturbing either. Devices must meet ANSI/ISEA Z87.1-2010, Z87.1-2003 or Z87.1-1989 (R-1998). For welding, Table E-1 in the section is the guide to filter lens shade numbers, and denser shades than listed may be used.

**Hearing, at 1926.101.** Where it is not feasible to reduce noise levels or exposure durations to those in Table D-2 of 1926.52, ear protective devices shall be provided and used. Devices inserted in the ear must be fitted or determined individually by competent persons, and the section says in one flat sentence that plain cotton is not an acceptable protective device.

**Respiratory, at 1926.103.** The section is a pointer: the requirements applicable to construction are identical to those at 1910.134. That is a substantial standard in its own right, covering programme, selection, fit testing and medical evaluation, and it sat fifth on OSHA's most-cited list for fiscal 2025.

:::reveal Which two categories of PPE may an employer decline to pay for, and on what condition? ||| Non-specialty safety-toe protective footwear and non-specialty prescription safety eyewear, provided the employer permits those items to be worn off the jobsite.

:::reveal What does 1926.95(c)(2) require about the selection of protective equipment? ||| That it is selected to ensure it properly fits each affected employee, which makes fit a compliance requirement rather than a preference.

:::reveal What does 1926.101 say about plain cotton as hearing protection? ||| That it is not an acceptable protective device.

## Vocabulary
- **Non-specialty safety-toe footwear**: ordinary steel-toe shoes or boots, one of the two narrow exceptions to the employer-pays rule, conditional on being allowed off site.
- **Side protection**: the shielding required on eye protection where flying objects are a hazard, satisfiable with detachable clip-on or slide-on side shields.
- **Consensus standard**: an external specification such as ANSI Z89.1 or ANSI/ISEA Z87.1 that the regulation incorporates by reference at 1926.6.
- **Table D-2**: the permissible noise exposures table in 1926.52 that decides when hearing protection becomes mandatory.
- **Hierarchy of controls**: the ordering that puts elimination, substitution, engineering controls and administrative controls ahead of personal protective equipment, which is why Subpart E is a last line rather than a first one.

## Sources
Safety and Health Regulations for Construction, 29 C.F.R. §§ 1926.95, 1926.100, 1926.101, 1926.102, 1926.103 (2026). https://www.ecfr.gov/current/title-29/part-1926/subpart-E

Safety and Health Regulations for Construction, 29 C.F.R. § 1926.28 (2026). https://www.ecfr.gov/current/title-29/part-1926/section-1926.28`,
    },
    {
      slug: "section-4-quiz",
      title: "Section 4 quiz · Fall protection systems and personal protective equipment",
      section: "Section 4 · The systems that catch you, and the gear you wear",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "How high must the top edge of a guardrail top rail sit under 1926.502(b)(1)?",
            options: [
              "Forty-two inches, plus or minus three",
              "Thirty-eight to forty-five inches, matching the scaffold guardrail range",
              "Thirty-six inches minimum, with no maximum where conditions warrant",
              "Thirty-nine inches exactly, measured from the top of the decking",
            ],
            correctIndex: 0,
            explanation:
              "Thirty-eight to forty-five inches is the scaffold range at 1926.451(g)(4)(ii). Thirty-nine inches is the deflection floor for a Subpart M guardrail, not its installed height.",
            sourceLessonSlug: "subpart-m-the-systems",
          },
          {
            prompt: "What force must a Subpart M guardrail top rail withstand?",
            options: [
              "At least two hundred pounds",
              "At least one hundred fifty pounds, the same as the midrail requirement",
              "At least one hundred pounds, applied in a downward direction only",
              "At least five thousand pounds, matching the anchorage requirement for fall arrest",
            ],
            correctIndex: 0,
            explanation:
              "One hundred fifty pounds is the midrail requirement, and five thousand pounds is the fall arrest anchorage figure.",
            sourceLessonSlug: "subpart-m-the-systems",
          },
          {
            prompt: "Under a downward two hundred pound load, how far may a guardrail top edge deflect?",
            options: [
              "Not below thirty-nine inches",
              "Not more than three inches from its installed height at any point",
              "Not below twenty-one inches, the parapet height that removes the midrail requirement",
              "Any distance, provided the rail does not fail structurally under the load",
            ],
            correctIndex: 0,
            explanation:
              "That is 1926.502(b)(4), and components built in accordance with appendix B to the subpart are deemed to meet it.",
            sourceLessonSlug: "subpart-m-the-systems",
          },
          {
            prompt: "When does 1926.502(b)(2) require a midrail or equivalent?",
            options: [
              "Where there is no wall or parapet at least twenty-one inches high",
              "Wherever the guardrail is installed on a surface more than ten feet above a lower level",
              "Only on ramps, runways and other walkways, where guardrails are the sole option",
              "Whenever the top rail is set at the maximum permitted height of forty-five inches",
            ],
            correctIndex: 0,
            explanation:
              "Screens, mesh, intermediate vertical members or equivalent structural members satisfy it, and intermediate members must be no more than nineteen inches apart.",
            sourceLessonSlug: "subpart-m-the-systems",
          },
          {
            prompt: "What does 1926.502(b)(8) prohibit as a top rail or midrail?",
            options: [
              "Steel banding and plastic banding",
              "Wire rope, unless it is flagged every six feet with high-visibility material",
              "Manila rope, which cannot meet the two hundred pound strength requirement",
              "Any member less than one quarter inch in nominal diameter or thickness",
            ],
            correctIndex: 0,
            explanation:
              "Wire rope is allowed if flagged, manila rope is allowed if inspected frequently enough to keep meeting the strength requirement, and the quarter inch minimum is a separate rule.",
            sourceLessonSlug: "subpart-m-the-systems",
          },
          {
            prompt: "At what interval must wire rope used as a top rail be flagged?",
            options: [
              "Not more than every six feet",
              "Not more than every ten feet, matching the scaffold fall protection trigger",
              "Not more than every nineteen inches, matching the intermediate member spacing",
              "At each terminal post only, since the ends are where the hazard lies",
            ],
            correctIndex: 0,
            explanation:
              "1926.502(b)(9) requires high-visibility material at intervals of no more than six feet so the rail can be seen.",
            sourceLessonSlug: "subpart-m-the-systems",
          },
          {
            prompt: "How far below the working surface may a safety net be installed?",
            options: [
              "No more than thirty feet",
              "No more than twenty-five feet, the figure that appears in 1926.105",
              "No more than six feet, matching the maximum free fall for a fall arrest system",
              "Any distance, provided the net is drop-tested after installation",
            ],
            correctIndex: 0,
            explanation:
              "1926.502(c)(1) sets thirty feet, and the net must also be installed as close as practicable under the surface with sufficient clearance beneath it.",
            sourceLessonSlug: "subpart-m-the-systems",
          },
          {
            prompt: "What does the safety net drop test use?",
            options: [
              "A four hundred pound bag of sand",
              "A two hundred pound weight applied to the net's border rope",
              "A five thousand pound static load held for three minutes",
              "A one hundred fifty pound sandbag dropped from the highest working level",
            ],
            correctIndex: 0,
            explanation:
              "The bag is thirty inches in diameter, plus or minus two, and is dropped from the highest walking or working surface at which employees are exposed.",
            sourceLessonSlug: "subpart-m-the-systems",
          },
          {
            prompt: "How often must a net left in one place be re-drop-tested?",
            options: [
              "At six-month intervals",
              "At three-month intervals, matching the assured equipment grounding test interval",
              "Once a week, the same interval at which it must be inspected for wear",
              "Only after a major repair or after the net has arrested a fall",
            ],
            correctIndex: 0,
            explanation:
              "Testing is also required after initial installation, whenever the net is relocated, and after major repair, with weekly inspections in between.",
            sourceLessonSlug: "subpart-m-the-systems",
          },
          {
            prompt: "How far must a safety net extend outward for a fall of more than ten feet?",
            options: [
              "Thirteen feet",
              "Eight feet, the distance required for a fall of up to five feet",
              "Ten feet, the distance required for a fall of more than five and up to ten feet",
              "Thirty feet, matching the maximum distance the net may sit below the surface",
            ],
            correctIndex: 0,
            explanation:
              "The table in 1926.502(c)(2) runs eight feet, ten feet and thirteen feet as the vertical distance increases.",
            sourceLessonSlug: "subpart-m-the-systems",
          },
          {
            prompt: "Since what date have body belts been unacceptable as part of a personal fall arrest system?",
            options: [
              "January 1, 1998",
              "January 1, 2000, the date that also changed scaffold guardrail heights",
              "September 2, 1997, the date the scaffold erector provisions took effect",
              "February 13, 2008, the date the employer payment rule for PPE took effect",
            ],
            correctIndex: 0,
            explanation:
              "The same date made locking snaphooks the only acceptable type. A body belt may still be used in a positioning device system.",
            sourceLessonSlug: "subpart-m-the-systems",
          },
          {
            prompt: "What minimum tensile strength must D-rings and snaphooks have?",
            options: [
              "Five thousand pounds",
              "Three thousand six hundred pounds, which is the proof-test load rather than the rating",
              "Eighteen hundred pounds, matching the maximum arresting force with a harness",
              "Five thousand four hundred pounds, the figure in the older 1926.104 lifeline rule",
            ],
            correctIndex: 0,
            explanation:
              "Three thousand six hundred pounds is the proof test they must survive without permanent deformation, which is a different number from the rating.",
            sourceLessonSlug: "subpart-m-the-systems",
          },
          {
            prompt: "What must a fall arrest anchorage be capable of supporting?",
            options: [
              "At least five thousand pounds per employee attached",
              "At least four times the maximum intended load, matching the scaffold capacity rule",
              "At least two hundred pounds, the same as a guardrail top rail",
              "At least ten thousand pounds regardless of how many employees are attached",
            ],
            correctIndex: 0,
            explanation:
              "The alternative is a system designed, installed and used under the supervision of a qualified person with a safety factor of at least two.",
            sourceLessonSlug: "subpart-m-the-systems",
          },
          {
            prompt: "What is the maximum arresting force permitted on an employee wearing a body harness?",
            options: [
              "Eighteen hundred pounds",
              "Nine hundred pounds, which is the limit that applied when body belts were permitted",
              "Five thousand pounds, matching the minimum anchorage strength",
              "Three and a half times the employee's body weight at the moment of arrest",
            ],
            correctIndex: 0,
            explanation:
              "Nine hundred pounds is the body belt figure, which the standard retains only because positioning device systems still use belts.",
            sourceLessonSlug: "subpart-m-the-systems",
          },
          {
            prompt: "What is the maximum deceleration distance a personal fall arrest system may allow?",
            options: [
              "Three and a half feet",
              "Six feet, the same as the maximum free fall distance the system may permit",
              "Two feet, the distance a self-retracting lifeline must limit free fall to",
              "Thirty inches, matching the diameter of the safety net drop test bag",
            ],
            correctIndex: 0,
            explanation:
              "Six feet is the free fall limit, and two feet is the threshold that changes the required tensile load for a self-retracting lifeline.",
            sourceLessonSlug: "subpart-m-the-systems",
          },
          {
            prompt: "How many employees may be attached to one vertical lifeline as a general rule?",
            options: [
              "One",
              "Two, provided the lifeline has a breaking strength of ten thousand pounds",
              "Any number, provided a qualified person supervises the installation",
              "Two, provided both are wearing body harnesses rather than body belts",
            ],
            correctIndex: 0,
            explanation:
              "The narrow elevator shaft exception in 1926.502(d)(10)(ii) allows two on a ten thousand pound lifeline atop a guardrailed false car, which is exactly why the general rule is worth stating.",
            sourceLessonSlug: "subpart-m-the-systems",
          },
          {
            prompt: "Who must deliver fall protection training under 1926.503(a)(2)?",
            options: [
              "A competent person qualified in the listed areas",
              "A qualified person holding a degree or professional standing in safety engineering",
              "An OSHA-authorized Outreach trainer delivering the 10-hour construction class",
              "Any authorized person the employer has designated for the training duty",
            ],
            correctIndex: 0,
            explanation:
              "The eight areas include the nature of fall hazards, erecting and inspecting the systems, the use of each system type, and the standards in the subpart.",
            sourceLessonSlug: "subpart-m-the-systems",
          },
          {
            prompt: "What must the fall protection training certification record contain?",
            options: [
              "Employee identity, training dates, and a signature",
              "The employee's test score and the name of the standard each question covered",
              "A photograph of the employee wearing the equipment during the practical portion",
              "The employer's federal identification number and the site's OSHA establishment code",
            ],
            correctIndex: 0,
            explanation:
              "The signature may be that of the person who conducted the training or of the employer, and the latest certification must be maintained.",
            sourceLessonSlug: "subpart-m-the-systems",
          },
          {
            prompt: "Which of these triggers retraining under 1926.503(c)?",
            options: [
              "Changes in the fall protection equipment being used",
              "The passage of twelve months since the last training session was delivered",
              "A change in the employee's job title within the same employer",
              "Any citation issued to the employer under Subpart M, regardless of the crew involved",
            ],
            correctIndex: 0,
            explanation:
              "The listed triggers are workplace changes that render previous training obsolete, equipment changes, and inadequacies in the employee's knowledge or use.",
            sourceLessonSlug: "subpart-m-the-systems",
          },
          {
            prompt: "When must a required fall protection system be in place under 1926.502(a)(2)?",
            options: [
              "Before the employee begins the work that made it necessary",
              "Within one working shift of the exposure being identified by a competent person",
              "Before the end of the day on which the hazard was first created",
              "At the same time as the work, since the system is often built as the work proceeds",
            ],
            correctIndex: 0,
            explanation:
              "The employer must provide and install all required systems, and comply with the subpart's other requirements, before the work begins.",
            sourceLessonSlug: "subpart-m-the-systems",
          },
          {
            prompt: "Which section makes the employer responsible for requiring the wearing of protective equipment?",
            options: [
              "1926.28(a)",
              "1926.95(a), which sets the criteria the equipment itself must meet",
              "1926.100(a), which covers head protection specifically",
              "1926.20(f)(1), which makes the PPE duty run to each employee separately",
            ],
            correctIndex: 0,
            explanation:
              "1926.28 sits in Subpart C and points to Subpart E for the use, selection and maintenance rules.",
            sourceLessonSlug: "subpart-e-ppe",
          },
          {
            prompt: "Who is responsible for the adequacy of PPE an employee owns and brings to work?",
            options: [
              "The employer",
              "The employee, who chose the equipment and knows its condition",
              "The manufacturer, through the certification marked on the equipment",
              "Nobody, because the standard covers only equipment the employer supplies",
            ],
            correctIndex: 0,
            explanation:
              "1926.95(b) makes the employer responsible for assuring its adequacy, including proper maintenance and sanitation.",
            sourceLessonSlug: "subpart-e-ppe",
          },
          {
            prompt: "What does 1926.95(c) require about the selection of PPE?",
            options: [
              "Safe design for the work and proper fit for each affected employee",
              "Selection from a list of models approved by a nationally recognized testing laboratory",
              "Selection by a competent person and documentation of that selection at the jobsite",
              "Selection of the highest protection class available for the hazard in question",
            ],
            correctIndex: 0,
            explanation:
              "Fit is written into the standard, so equipment that protects in principle but does not fit the worker does not comply.",
            sourceLessonSlug: "subpart-e-ppe",
          },
          {
            prompt: "Who pays for personal protective equipment used to comply with Part 1926?",
            options: [
              "The employer, at no cost to employees",
              "The employer and the employee, split according to the employer's written policy",
              "The employee, with reimbursement once ninety days of employment have passed",
              "The general contractor, on behalf of every subcontractor working on the site",
            ],
            correctIndex: 0,
            explanation:
              "1926.95(d)(1) sets the default, and paragraphs (d)(2) through (d)(6) carve out the narrow exceptions.",
            sourceLessonSlug: "subpart-e-ppe",
          },
          {
            prompt: "On what condition may an employer decline to pay for non-specialty safety-toe boots?",
            options: [
              "It permits them to be worn off the jobsite",
              "It supplies metatarsal guards to every employee in the same trade",
              "It gives the employee at least thirty days' notice before the requirement takes effect",
              "The boots cost less than the employer's published per-employee equipment allowance",
            ],
            correctIndex: 0,
            explanation:
              "The same condition attaches to non-specialty prescription safety eyewear, and both exceptions turn on the item being usable away from work.",
            sourceLessonSlug: "subpart-e-ppe",
          },
          {
            prompt: "Which of these is the employer NOT required to pay for under 1926.95(d)(4)?",
            options: [
              "Sunscreen and ordinary sunglasses",
              "A face shield required for grinding operations on the site",
              "Rubber insulating gloves required for work near energized parts",
              "A body harness required for roof work at the leading edge",
            ],
            correctIndex: 0,
            explanation:
              "Items used solely for protection from weather, along with everyday clothing and normal work boots, sit outside the payment rule.",
            sourceLessonSlug: "subpart-e-ppe",
          },
          {
            prompt: "When is an employer excused from paying for replacement PPE?",
            options: [
              "When the employee lost it or intentionally damaged it",
              "When the equipment has reached the end of its manufacturer-stated service life",
              "When the employee has already received two replacements in the same year",
              "When the damage occurred outside the jobsite, whatever the cause",
            ],
            correctIndex: 0,
            explanation:
              "1926.95(d)(5) is otherwise unqualified: the employer pays for replacement PPE.",
            sourceLessonSlug: "subpart-e-ppe",
          },
          {
            prompt: "Under 1926.100(a), what three dangers make head protection necessary?",
            options: [
              "Impact, falling or flying objects, and electrical shock and burns",
              "Impact, noise above the Table D-2 limits, and radiant energy from welding",
              "Falling objects, chemical splash, and heat stress in enclosed spaces",
              "Impact, entanglement in rotating machinery, and confined space entry",
            ],
            correctIndex: 0,
            explanation:
              "The electrical element is why 1926.100(b)(2) adds the Section 9.7 electrical insulation requirement for high-voltage exposure.",
            sourceLessonSlug: "subpart-e-ppe",
          },
          {
            prompt: "Which consensus standard family does 1926.100 name for head protection?",
            options: [
              "ANSI Z89.1",
              "ANSI/ISEA Z87.1, which is the eye and face protection standard",
              "ANSI Z41.1, which is the safety-toe footwear standard cited at 1926.96",
              "ASTM D120, which is the rubber insulating glove specification",
            ],
            correctIndex: 0,
            explanation:
              "The section accepts the 2009, 2003 and 1997 editions, all incorporated by reference at 1926.6.",
            sourceLessonSlug: "subpart-e-ppe",
          },
          {
            prompt: "What extra requirement applies to head protection for employees exposed to high-voltage shock and burns?",
            options: [
              "It must meet Section 9.7 of the consensus standard",
              "It must be replaced after any contact with an energized conductor",
              "It must be tested annually and the results recorded at the jobsite",
              "It must be worn with rubber insulating sleeves meeting ASTM D1051",
            ],
            correctIndex: 0,
            explanation:
              "Section 9.7 is the Electrical Insulation section of the ANSI Z89.1 editions the standard accepts.",
            sourceLessonSlug: "subpart-e-ppe",
          },
          {
            prompt: "When does 1926.102(a)(2) require eye protection to provide side protection?",
            options: [
              "Where there is a hazard from flying objects",
              "Where welding or cutting is performed anywhere within fifty feet",
              "Where the employee also wears prescription lenses under the protection",
              "In every operation, since side protection is a design requirement of Z87.1",
            ],
            correctIndex: 0,
            explanation:
              "Detachable side protectors such as clip-on or slide-on side shields are acceptable if they meet the section's requirements.",
            sourceLessonSlug: "subpart-e-ppe",
          },
          {
            prompt: "What does 1926.102(a)(3) require for a worker who wears prescription lenses?",
            options: [
              "Protection incorporating the prescription, or wearable over it",
              "A medical evaluation before the worker may be assigned to eye-hazard work",
              "Replacement of the prescription lenses with impact-rated plano lenses",
              "A written waiver signed by the worker acknowledging the additional risk",
            ],
            correctIndex: 0,
            explanation:
              "Wearing it over the prescription lenses is permitted only where it does not disturb the position of either the prescription or the protective lenses.",
            sourceLessonSlug: "subpart-e-ppe",
          },
          {
            prompt: "Where does 1926.102 send the reader for welding filter lens shade numbers?",
            options: [
              "Table E-1 in the section",
              "Table D-2 in 1926.52, which lists permissible exposures",
              "Appendix C to Subpart M, which covers personal fall arrest systems",
              "ANSI Z89.1 Section 9.7, which covers electrical insulation",
            ],
            correctIndex: 0,
            explanation:
              "The table is a guide, and the section says shades more dense than those listed may be used to suit the individual's needs.",
            sourceLessonSlug: "subpart-e-ppe",
          },
          {
            prompt: "What triggers the requirement for hearing protection under 1926.101(a)?",
            options: [
              "Infeasibility of reducing noise to the Table D-2 levels",
              "Any operation involving powered hand tools for more than four hours in a shift",
              "A written request from an employee working in a high-noise area",
              "Any measured exposure above eighty-five decibels, whatever its duration",
            ],
            correctIndex: 0,
            explanation:
              "Table D-2, Permissible Noise Exposures, sits in 1926.52 and pairs sound levels with allowable durations.",
            sourceLessonSlug: "subpart-e-ppe",
          },
          {
            prompt: "Who must fit ear protective devices that are inserted in the ear?",
            options: [
              "Competent persons, individually for each wearer",
              "A licensed audiologist, before the employee is assigned to a noise-exposed area",
              "The manufacturer, through sizing marked on the device packaging",
              "The employee, since only the wearer can judge the seal",
            ],
            correctIndex: 0,
            explanation:
              "1926.101(b) requires them to be fitted or determined individually by competent persons.",
            sourceLessonSlug: "subpart-e-ppe",
          },
          {
            prompt: "Which respiratory protection standard applies to construction work?",
            options: [
              "1910.134",
              "1926.103, which sets its own construction-specific programme requirements",
              "1910.1200, which covers hazardous chemicals a respirator may protect against",
              "1926.55, which sets exposure limits for gases, vapors, fumes, dusts and mists",
            ],
            correctIndex: 0,
            explanation:
              "1926.103 is a pointer stating that the requirements applicable to construction are identical to those at 1910.134.",
            sourceLessonSlug: "subpart-e-ppe",
          },
          {
            prompt: "Why does the lesson call Subpart E a last line of defence?",
            options: [
              "It sits below elimination and engineering controls in the hierarchy",
              "It applies only after a hazard has already caused an injury on the site",
              "It is enforced only where a specific standard elsewhere in the part fails to apply",
              "It was the last subpart added to the construction part by rulemaking",
            ],
            correctIndex: 0,
            explanation:
              "Personal protective equipment protects the person rather than removing the hazard, which is why so much of the subpart is about provision and fit.",
            sourceLessonSlug: "subpart-e-ppe",
          },
          {
            prompt: "May an employer require an employee to buy his own required PPE?",
            options: [
              "No, except for the narrow categories the standard names",
              "Yes, provided the employer reimburses the cost within one pay period",
              "Yes, where the employee has already damaged two sets of employer-supplied equipment",
              "Yes, for any item that can also be worn away from the jobsite",
            ],
            correctIndex: 0,
            explanation:
              "1926.95(d)(6) says the employer shall not require an employee to provide or pay for his own PPE unless it falls in the exceptions at (d)(2) through (d)(5).",
            sourceLessonSlug: "subpart-e-ppe",
          },
          {
            prompt: "Which of these is a fall arrest requirement rather than a guardrail requirement?",
            options: [
              "Anchorage capable of five thousand pounds per employee",
              "A top edge held between thirty-nine and forty-five inches above the surface",
              "Intermediate members spaced no more than nineteen inches apart",
              "A one hundred fifty pound load capacity for midrails and equivalent members",
            ],
            correctIndex: 0,
            explanation:
              "The other three are all criteria for a guardrail system under 1926.502(b).",
            sourceLessonSlug: "subpart-m-the-systems",
          },
          {
            prompt: "What must be done with tools and debris that fall into a safety net?",
            options: [
              "Removed as soon as possible and before the next shift",
              "Left in place until the net's next scheduled drop test",
              "Removed only if they weigh more than the net's rated mesh capacity",
              "Photographed and logged, then removed at the end of the project",
            ],
            correctIndex: 0,
            explanation:
              "1926.502(c)(6) requires removal as soon as possible and at least before the next work shift.",
            sourceLessonSlug: "subpart-m-the-systems",
          },
          {
            prompt: "How often must safety nets be inspected for wear and damage?",
            options: [
              "At least once a week",
              "Before each work shift, by a competent person designated by the employer",
              "At six-month intervals, at the same time as the drop test",
              "Only after an occurrence that could affect the net's integrity",
            ],
            correctIndex: 0,
            explanation:
              "Weekly inspection is the baseline, and inspection after any occurrence that could affect integrity is an addition to it rather than a substitute.",
            sourceLessonSlug: "subpart-m-the-systems",
          },
          {
            prompt: "What is required where a guardrail system protects a hole used as a ladderway?",
            options: [
              "A gate, or an offset so a person cannot walk into the hole",
              "A cover that can be closed whenever the ladderway is not in use",
              "A personal fall arrest system for anyone within six feet of the opening",
              "A warning line placed six feet back from the edge of the opening",
            ],
            correctIndex: 0,
            explanation:
              "1926.502(b)(13) states it in exactly those terms for holes used as points of access.",
            sourceLessonSlug: "subpart-m-the-systems",
          },
          {
            prompt: "Which minimum breaking strength applies to lanyards and vertical lifelines?",
            options: [
              "Five thousand pounds",
              "Three thousand pounds, which applies to certain self-retracting lifelines",
              "Five thousand four hundred pounds, the figure for lifelines in 1926.104(b)",
              "Ten thousand pounds, the figure for a shared elevator shaft lifeline",
            ],
            correctIndex: 0,
            explanation:
              "Three thousand pounds applies to self-retracting devices that limit free fall to two feet or less, and ten thousand is the shared-lifeline exception.",
            sourceLessonSlug: "subpart-m-the-systems",
          },
          {
            prompt: "What is the maximum free fall a personal fall arrest system may permit?",
            options: [
              "Six feet, and never contact with a lower level",
              "Six feet, or more where a qualified person has designed the system",
              "Three and a half feet, matching the deceleration distance limit",
              "Two feet, unless a self-retracting lifeline is used",
            ],
            correctIndex: 0,
            explanation:
              "The requirement has two halves: no free fall beyond six feet, and no contact with any lower level whatever the distance.",
            sourceLessonSlug: "subpart-m-the-systems",
          },
          {
            prompt: "Which PPE item does 1926.96 address?",
            options: [
              "Safety-toe footwear",
              "Rubber insulating gloves, sleeves, blankets and line hose",
              "Eye protection against potentially injurious light radiation",
              "Life jackets and buoyant work vests for work over water",
            ],
            correctIndex: 0,
            explanation:
              "1926.97 covers electrical protective equipment, 1926.102 covers eye and face, and 1926.106 covers working over or near water.",
            sourceLessonSlug: "subpart-e-ppe",
          },
          {
            prompt: "Where did respiratory protection rank on OSHA's most cited list for fiscal 2025?",
            options: [
              "Fifth",
              "First, ahead of fall protection general requirements",
              "Second, behind fall protection general requirements",
              "Tenth, behind machine guarding in general industry",
            ],
            correctIndex: 0,
            explanation:
              "Fall protection general requirements was first, hazard communication second, and machine guarding tenth.",
            sourceLessonSlug: "subpart-e-ppe",
          },
          {
            prompt: "What does 1926.95(a) require about the condition PPE is kept in?",
            options: [
              "Sanitary and reliable",
              "Inspected and tagged by a competent person before each day's use",
              "Stored in a weatherproof container between shifts, like a first aid kit",
              "Replaced on a fixed schedule set by the manufacturer's service life rating",
            ],
            correctIndex: 0,
            explanation:
              "The provision covers eyes, face, head and extremities, protective clothing, respiratory devices, and protective shields and barriers.",
            sourceLessonSlug: "subpart-e-ppe",
          },
          {
            prompt: "Which requirement belongs to a safety net system rather than to a guardrail system?",
            options: [
              "A mesh opening no larger than thirty-six square inches",
              "Intermediate members spaced no more than nineteen inches apart",
              "A top edge held at forty-two inches plus or minus three inches",
              "A one hundred fifty pound load capacity for midrails and equivalent members",
            ],
            correctIndex: 0,
            explanation:
              "1926.502(c)(7) also caps the opening at six inches on any side. The other three are all criteria for a guardrail system under 1926.502(b).",
            sourceLessonSlug: "subpart-m-the-systems",
          },
          {
            prompt: "What is a positioning device system permitted to use that a fall arrest system is not?",
            options: [
              "A body belt",
              "A snaphook that is not of the locking type",
              "An anchorage shared with a suspended work platform",
              "A lanyard with a breaking strength below five thousand pounds",
            ],
            correctIndex: 0,
            explanation:
              "The note in 1926.502(d) says the use of a body belt in a positioning device system remains acceptable and is regulated by paragraph (e).",
            sourceLessonSlug: "subpart-m-the-systems",
          },
          {
            prompt: "How long may a safety net mesh opening be on any one side?",
            options: [
              "No longer than six inches",
              "No longer than nineteen inches, matching the guardrail intermediate member spacing",
              "No longer than thirty inches, matching the diameter of the drop test bag",
              "No longer than eighteen inches, matching the minimum scaffold platform width",
            ],
            correctIndex: 0,
            explanation:
              "The opening may also not exceed thirty-six square inches in area, and all mesh crossings must be secured to stop the opening enlarging.",
            sourceLessonSlug: "subpart-m-the-systems",
          },
          {
            prompt: "What does the lesson say a system that is present but off-specification amounts to?",
            options: [
              "Not fall protection",
              "Partial compliance, treated as an other-than-serious violation",
              "Acceptable interim protection until the correct system arrives on site",
              "A matter for the competent person's judgement rather than for the standard",
            ],
            correctIndex: 0,
            explanation:
              "1926.501(a)(1) says all fall protection required by the section shall conform to the criteria in 1926.502, which is what makes the numbers load-bearing.",
            sourceLessonSlug: "subpart-m-the-systems",
          },
          {
            prompt: "Which section of Subpart E covers rubber insulating gloves and blankets?",
            options: [
              "1926.97",
              "1926.96, which covers safety-toe protective footwear",
              "1926.100, which covers protective helmets and their consensus standards",
              "1926.106, which covers working over or near water",
            ],
            correctIndex: 0,
            explanation:
              "The subpart works down the body, and electrical protective equipment has its own section separate from head, eye, hearing and foot protection.",
            sourceLessonSlug: "subpart-e-ppe",
          },
          {
            prompt: "In which situation may a body belt still be used?",
            options: [
              "In a positioning device system",
              "In a personal fall arrest system where free fall is limited to two feet",
              "In a personal fall arrest system on a suspended scaffold",
              "In any system where a qualified person supervises the installation",
            ],
            correctIndex: 0,
            explanation:
              "Body belts stopped being acceptable in a fall arrest system on January 1, 1998, and positioning device systems are regulated separately at 1926.502(e).",
            sourceLessonSlug: "subpart-m-the-systems",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 5 — Scaffolds, electricity, and chemicals
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "subpart-l-scaffolds",
      title: "9 · Subpart L: scaffolds",
      section: "Section 5 · Scaffolds, electricity, and chemicals",
      body: `**Supports NCCER Core module 00101, Basic Safety (Construction Site Safety Orientation).**

Scaffolding was sixth on OSHA's most frequently cited list for fiscal 2025, and Subpart L is where its rules live. One caution before the numbers: 1926.451 says in its first line that it does not apply to aerial lifts, whose criteria are set out exclusively in 1926.453.

**Capacity, at 1926.451(a).** Each scaffold and scaffold component must support its own weight and at least four times the maximum intended load applied to it. Suspension ropes and their connecting hardware on non-adjustable suspension scaffolds must support at least six times the maximum intended load. Scaffolds must be designed by a qualified person and constructed and loaded in accordance with that design.

**Platforms, at 1926.451(b).** Each platform on a working level must be fully planked or decked between the front uprights and the guardrail supports, with the space between adjacent units and between the platform and the uprights no more than one inch. Platforms and walkways must be at least eighteen inches wide, with named exceptions at twelve inches for ladder jack, top plate bracket, roof bracket and pump jack scaffolds.

**Foundations and stability, at 1926.451(c).** A supported scaffold whose height to base width ratio exceeds four to one must be restrained from tipping by guying, tying or bracing. Poles, legs, posts, frames and uprights must bear on base plates and mud sills or another adequate firm foundation, and footings must be level, sound, rigid and capable of carrying the loaded scaffold without settling. Unstable objects must not be used to support scaffolds or platform units, and must not be used as working platforms. Front-end loaders and forklifts must not support scaffold platforms unless designed for it, and a forklift may not move horizontally while an attached platform is occupied.

**Access and use, at 1926.451(e) and (f).** Where a platform is more than two feet above or below a point of access, a ladder, stair tower, ramp, walkway or equivalent must be provided, and crossbraces shall not be used as a means of access. Scaffolds must not be loaded beyond their maximum intended loads or rated capacities, shore and lean-to scaffolds are prohibited outright, and a competent person must inspect the scaffold and its components for visible defects before each work shift and after any occurrence that could affect structural integrity. A part damaged or weakened below the capacity requirement must be immediately repaired, replaced, braced to meet it, or removed from service until repaired.

**Fall protection, at 1926.451(g), and the number that catches people out.** On a scaffold the trigger is more than **ten** feet above a lower level, not the six feet of Subpart M. What satisfies it depends on the scaffold: a boatswains' chair, catenary, float, needle beam or ladder jack scaffold requires a personal fall arrest system, and a single-point or two-point adjustable suspension scaffold requires both a personal fall arrest system and a guardrail system. Scaffold guardrail heights differ from Subpart M as well: the top edge is installed between thirty-eight and forty-five inches on supported scaffolds manufactured or placed in service after January 1, 2000, and between thirty-six and forty-five inches on earlier ones and on suspended scaffolds requiring both systems. Top rail capacity is two hundred pounds generally and one hundred pounds on single-point and two-point adjustable suspension scaffolds. Crossbracing counts as a midrail only when the crossing point sits between twenty and thirty inches above the platform, and as a top rail only when it sits between thirty-eight and forty-eight inches.

**Falling objects and training, at 1926.451(h) and 1926.454.** Hard hats plus toeboards, screens, guardrails, debris nets, catch platforms or canopies. Training splits in two: employees who work on a scaffold are trained by a person qualified in the subject matter, and employees who erect, disassemble, move, operate, repair, maintain or inspect one are trained by a competent person.

:::reveal What is the fall protection trigger height on a scaffold, and how does it differ from Subpart M? ||| More than ten feet above a lower level under 1926.451(g)(1), where the Subpart M general rule at 1926.501(b)(1) is six feet.

:::reveal What load must a scaffold and each of its components support? ||| Its own weight plus at least four times the maximum intended load, with suspension ropes on non-adjustable suspension scaffolds rated at six times.

:::reveal Why may crossbraces never be used to climb a scaffold? ||| 1926.451(e)(1) forbids it. Where a platform is more than two feet above or below a point of access, a ladder, stair tower, ramp, walkway or equivalent must be provided instead.

## Vocabulary
- **Maximum intended load**: the total weight of employees, equipment, tools and materials a scaffold is designed to carry, which the capacity multipliers are applied to.
- **Supported scaffold**: a platform carried on rigid legs, posts, frames or uprights bearing on a foundation, as opposed to one suspended by ropes.
- **Mud sill**: the bearing member placed under a base plate to spread load onto ground that would otherwise settle.
- **Height to base width ratio**: the stability measure that, above four to one, requires guying, tying or bracing to prevent tipping.
- **Aerial lift**: vehicle-mounted elevating and rotating work platforms, excluded from 1926.451 and governed exclusively by 1926.453.

## Sources
Safety and Health Regulations for Construction, 29 C.F.R. §§ 1926.451, 1926.454 (2026). https://www.ecfr.gov/current/title-29/part-1926/subpart-L`,
    },
    {
      slug: "subpart-k-electrical",
      title: "10 · Subpart K: electricity on a jobsite",
      section: "Section 5 · Scaffolds, electricity, and chemicals",
      body: `**Supports NCCER Core module 00101, Basic Safety (Construction Site Safety Orientation).**

Electrocution is one of OSHA's Focus Four, and Subpart K is the answer to it. 1926.400 divides the subpart into four: installation safety requirements at 1926.402 through 1926.408, safety-related work practices at 1926.416 and 1926.417, maintenance and environmental considerations at 1926.431 and 1926.432, and special equipment at 1926.441, with definitions at 1926.449.

**Ground-fault protection, at 1926.404(b)(1), and it is a choice of two.** The employer shall use either ground fault circuit interrupters or an assured equipment grounding conductor program to protect employees on construction sites. The GFCI route: all 120-volt, single-phase, 15- and 20-ampere receptacle outlets that are not part of the permanent wiring of the building and that are in use by employees must have approved ground-fault circuit interrupters for personnel protection. There is one narrow exception, for receptacles on a two-wire single-phase portable or vehicle-mounted generator rated not more than 5kW where the generator's circuit conductors are insulated from the frame and all other grounded surfaces.

**The other route, and why it is more work.** An assured equipment grounding conductor program must cover all cord sets, all receptacles that are not part of the structure, and all cord- and plug-connected equipment available for use. It must be written and available at the jobsite for inspection and copying. The employer must designate one or more competent persons to implement it. Every cord set, attachment cap, plug, receptacle and connected item must be visually inspected before each day's use for external defects such as deformed or missing pins or insulation damage, and anything found damaged or defective may not be used until it is repaired. Equipment grounding conductors must be tested for continuity, and each receptacle and plug tested for correct attachment of the grounding conductor. Those tests must be done before first use, after any repair, after any incident that could have caused damage such as a cord being run over, and at intervals not exceeding three months, or six months for fixed receptacles not exposed to damage. Results must be recorded by logs, color coding or another effective means.

**Working near energized circuits, at 1926.416.** No employer shall permit an employee to work in such proximity to any part of an electric power circuit that the employee could contact it in the course of work, unless the employee is protected by deenergizing and grounding the circuit or by guarding it effectively with insulation or other means. Where the exact location of underground power lines is unknown, employees using jackhammers, bars or other hand tools that may contact a line must be provided with insulated protective gloves. Before work begins the employer must ascertain, by inquiry, direct observation or instruments, whether any energized circuit, exposed or concealed, is located so that the work could bring a person, tool or machine into contact with it, must post and maintain warning signs where such a circuit exists, and must advise employees of the location, the hazards and the protective measures.

**The everyday paragraphs of 1926.416 that get cited.** Working spaces, walkways and similar locations must be kept clear of cords. Worn or frayed electric cords or cables shall not be used. Extension cords shall not be fastened with staples, hung from nails, or suspended by wire. When fuses are installed or removed with a terminal energized, tools insulated for the voltage must be used.

**Lockout and tagging, at 1926.417.** Controls that are to be deactivated during work on energized or deenergized equipment shall be tagged. Deenergized equipment and circuits shall be rendered inoperative and shall have tags attached at all points where they can be energized. Tags must plainly identify the equipment or circuits being worked on.

:::reveal What are the two options an employer may choose between under 1926.404(b)(1)? ||| Ground fault circuit interrupters on the covered receptacles, or an assured equipment grounding conductor program meeting the listed minimum requirements.

:::reveal Which receptacles must have GFCIs if the employer takes the GFCI route? ||| All 120-volt, single-phase, 15- and 20-ampere receptacle outlets that are not part of the permanent wiring of the building or structure and that are in use by employees.

:::reveal What three things must an employer do under 1926.416(a)(3) before work begins near a possible energized circuit? ||| Ascertain by inquiry, direct observation or instruments whether such a circuit is located where the work could contact it; post and maintain proper warning signs; and advise employees of the location, the hazards and the protective measures to be taken.

## Vocabulary
- **Ground-fault circuit interrupter**: a device that opens the circuit when current leaks to ground, required on the covered temporary receptacles unless the employer runs the alternative program.
- **Assured equipment grounding conductor program**: the written alternative to GFCIs, built on daily visual inspection, continuity and terminal testing, three-month intervals and recorded results.
- **Deenergize and ground**: the primary protection required by 1926.416(a)(1) before an employee works within contact distance of a power circuit.
- **Effective guarding**: the alternative to deenergizing, achieved by insulation or other means that prevent contact.
- **Tagging**: the 1926.417 requirement that deactivated controls and deenergized circuits carry tags at every point where they could be re-energized.

## Sources
Safety and Health Regulations for Construction, 29 C.F.R. §§ 1926.400, 1926.404, 1926.416, 1926.417 (2026). https://www.ecfr.gov/current/title-29/part-1926/subpart-K`,
    },
    {
      slug: "hazard-communication",
      title: "11 · Hazard communication: the label and the data sheet",
      section: "Section 5 · Scaffolds, electricity, and chemicals",
      body: `**Supports NCCER Core module 00101, Basic Safety (Construction Site Safety Orientation).**

Hazard communication was second on OSHA's most frequently cited list for fiscal 2025, behind only fall protection. In construction it arrives through a pointer: 1926.59 says the requirements applicable to construction work are identical to those at 1910.1200, so the general industry standard is the one to read.

**What the standard is for, at 1910.1200(a)(1).** It exists to ensure the hazards of all chemicals produced or imported are classified, and that information about those classified hazards is transmitted to employers and employees. Its requirements are intended to be consistent with the United Nations Globally Harmonized System of Classification and Labelling of Chemicals, primarily Revision 7. The transmission happens through three things: labels, safety data sheets, and training.

**The label, at 1910.1200(f)(1).** A container of hazardous chemicals leaving a workplace must carry six pieces of information: a product identifier, a signal word, hazard statements, pictograms, precautionary statements, and the name, United States address and United States telephone number of the manufacturer, importer or other responsible party. Paragraph (f)(3) requires that the signal word, the hazard statements and the pictograms be located together on the label, so the severity, the hazard and the symbol can be read in one glance.

**Two signal words and only two.** The standard defines a signal word as a word indicating the relative level of severity, and says the ones used are "danger" and "warning." Danger is for the more severe hazards and warning for the less severe. There is no third word, so a container with neither is telling you something about whether it was labelled properly.

**The safety data sheet, at 1910.1200(g).** Chemical manufacturers and importers obtain or develop an SDS for each hazardous chemical they produce or import, and employers must have one in the workplace for each hazardous chemical they use. The sheet has sixteen numbered sections that must appear in a fixed order: 1 Identification, 2 Hazard identification, 3 Composition, 4 First-aid measures, 5 Fire-fighting measures, 6 Accidental release measures, 7 Handling and storage, 8 Exposure controls and personal protection, 9 Physical and chemical properties, 10 Stability and reactivity, 11 Toxicological information, 12 Ecological information, 13 Disposal considerations, 14 Transport information, 15 Regulatory information, and 16 Other information including the date of preparation or last revision. The fixed order is the useful part: whatever the chemical, first aid is always section 4 and the required protective equipment is always section 8. A note in the standard records that OSHA will not enforce the information requirements in sections 12 through 15, which fall outside its jurisdiction.

**Training, at 1910.1200(h).** Employees must be given effective information and training on hazardous chemicals in their work area at the time of initial assignment, and whenever a new chemical hazard they have not been trained on is introduced. They must be informed of the requirements of the standard, of any operations in their area where hazardous chemicals are present, and of the location and availability of the written hazard communication program, the chemical list and the data sheets. The training itself must cover how to detect the presence or release of a chemical, the physical and health hazards involved, the measures employees can take to protect themselves, and the details of the employer's program including how to read a label and how the data sheet is organised.

:::reveal Which six elements must appear on the label of a shipped container of hazardous chemicals? ||| Product identifier, signal word, hazard statements, pictograms, precautionary statements, and the name, United States address and United States telephone number of the manufacturer, importer or other responsible party.

:::reveal What are the two signal words the standard uses, and what distinguishes them? ||| Danger and warning. Danger marks the more severe hazards and warning the less severe.

:::reveal Which numbered SDS sections carry first aid and required protective equipment? ||| Section 4 is first-aid measures and section 8 is exposure controls and personal protection, and the order is fixed for every chemical.

## Vocabulary
- **Safety data sheet**: the sixteen-section document, in fixed order, that an employer must hold for every hazardous chemical it uses.
- **Signal word**: danger or warning, the two words the standard permits to indicate relative severity on a label.
- **Pictogram**: the symbol on a label, which must be located together with the signal word and the hazard statements.
- **Globally Harmonized System**: the United Nations classification and labelling scheme, primarily Revision 7, that the standard is written to be consistent with.
- **Written hazard communication program**: the employer's own document, whose location and availability employees must be told about along with the chemical list and the data sheets.

## Sources
Hazard Communication, 29 C.F.R. § 1910.1200 (2026). https://www.ecfr.gov/current/title-29/part-1910/section-1910.1200

Safety and Health Regulations for Construction, 29 C.F.R. § 1926.59 (2026). https://www.ecfr.gov/current/title-29/part-1926/section-1926.59`,
    },
    {
      slug: "section-5-quiz",
      title: "Section 5 quiz · Scaffolds, electricity, and chemicals",
      section: "Section 5 · Scaffolds, electricity, and chemicals",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What must a scaffold and each of its components be capable of supporting?",
            options: [
              "Its own weight plus four times the maximum intended load",
              "Its own weight plus six times the maximum intended load applied to any single bay",
              "Twice the maximum intended load, with a safety factor of two applied by a qualified person",
              "The maximum intended load only, since the design already carries a safety margin",
            ],
            correctIndex: 0,
            explanation:
              "Six times is the multiplier for suspension ropes on non-adjustable suspension scaffolds, and a safety factor of two appears in the fall arrest anchorage rule.",
            sourceLessonSlug: "subpart-l-scaffolds",
          },
          {
            prompt: "What multiplier applies to suspension ropes on non-adjustable suspension scaffolds?",
            options: [
              "Six times the maximum intended load",
              "Four times, the same multiplier that applies to the scaffold as a whole",
              "Ten times, because rope is the single point of failure in a suspended system",
              "Two times, provided a qualified person supervises the installation",
            ],
            correctIndex: 0,
            explanation:
              "1926.451(a)(3) sets six times for the rope and its connecting hardware, against four times for the scaffold generally.",
            sourceLessonSlug: "subpart-l-scaffolds",
          },
          {
            prompt: "Who must design a scaffold under 1926.451(a)(6)?",
            options: [
              "A qualified person",
              "A competent person designated by the employer for that jobsite",
              "A registered professional engineer licensed in the state of the work",
              "The manufacturer, whose published drawings must be kept at the jobsite",
            ],
            correctIndex: 0,
            explanation:
              "The scaffold must also be constructed and loaded in accordance with that design, and non-mandatory appendix A gives criteria that will comply.",
            sourceLessonSlug: "subpart-l-scaffolds",
          },
          {
            prompt: "How wide must a scaffold platform or walkway generally be?",
            options: [
              "At least eighteen inches",
              "At least twelve inches, which is the width required for every bracket scaffold",
              "At least twenty-four inches wherever materials are stored on the platform",
              "At least nineteen inches, matching the guardrail intermediate member spacing",
            ],
            correctIndex: 0,
            explanation:
              "Twelve inches is the named exception for ladder jack, top plate bracket, roof bracket and pump jack scaffolds.",
            sourceLessonSlug: "subpart-l-scaffolds",
          },
          {
            prompt: "How large may the gap be between adjacent platform units, or between the platform and the uprights?",
            options: [
              "No more than one inch",
              "No more than nine and a half inches in every case",
              "No more than nineteen inches, matching the guardrail opening limit",
              "Any size, provided a guardrail is installed along the open side",
            ],
            correctIndex: 0,
            explanation:
              "Nine and a half inches is the maximum only where the employer demonstrates a wider space is necessary, for instance to fit around uprights with side brackets.",
            sourceLessonSlug: "subpart-l-scaffolds",
          },
          {
            prompt: "Above what height to base width ratio must a supported scaffold be restrained from tipping?",
            options: [
              "Four to one",
              "Two to one, the point at which a scaffold becomes top-heavy in most configurations",
              "Six to one, matching the suspension rope safety multiplier",
              "Ten to one, matching the scaffold fall protection trigger height",
            ],
            correctIndex: 0,
            explanation:
              "Restraint is by guying, tying, bracing or equivalent means at the locations and intervals the paragraph specifies.",
            sourceLessonSlug: "subpart-l-scaffolds",
          },
          {
            prompt: "What must supported scaffold legs, posts and uprights bear on?",
            options: [
              "Base plates and mud sills or another adequate firm foundation",
              "Any level surface capable of carrying the unloaded weight of the scaffold",
              "Concrete footings poured to a depth specified by a qualified person",
              "Timber blocking sized to the manufacturer's recommendation for the frame type",
            ],
            correctIndex: 0,
            explanation:
              "Footings must be level, sound, rigid and capable of supporting the loaded scaffold without settling or displacement.",
            sourceLessonSlug: "subpart-l-scaffolds",
          },
          {
            prompt: "What does 1926.451(c)(2) say about unstable objects?",
            options: [
              "They may not support scaffolds or be used as working platforms",
              "They may support a scaffold if a competent person inspects them before each shift",
              "They may be used as working platforms below ten feet above a lower level",
              "They may be used where the maximum intended load is under five hundred pounds",
            ],
            correctIndex: 0,
            explanation:
              "The paragraph states both prohibitions separately, alongside the limits on front-end loaders and forklifts.",
            sourceLessonSlug: "subpart-l-scaffolds",
          },
          {
            prompt: "When may a forklift support a scaffold platform?",
            options: [
              "When the whole platform is attached to the fork and is not moved horizontally while occupied",
              "When a competent person is stationed at the controls throughout the operation",
              "When the platform carries no more than one employee at a time",
              "Never, under any circumstances contemplated by the subpart",
            ],
            correctIndex: 0,
            explanation:
              "Front-end loaders and similar equipment are barred unless specifically designed by the manufacturer for that use.",
            sourceLessonSlug: "subpart-l-scaffolds",
          },
          {
            prompt: "At what height difference does 1926.451(e)(1) require a proper means of access to a scaffold platform?",
            options: [
              "More than two feet above or below the point of access",
              "More than six feet, matching the Subpart M fall protection trigger",
              "More than ten feet, matching the scaffold fall protection trigger",
              "Any height, since a ladder is always required regardless of the difference",
            ],
            correctIndex: 0,
            explanation:
              "Portable, hook-on and attachable ladders, stair towers, stairway-type ladders, ramps, walkways or integral prefabricated access all satisfy it.",
            sourceLessonSlug: "subpart-l-scaffolds",
          },
          {
            prompt: "May crossbraces be used to climb onto a scaffold platform?",
            options: [
              "No, never",
              "Yes, where the platform is less than ten feet above a lower level",
              "Yes, where the employee is wearing a personal fall arrest system",
              "Yes, where a competent person has inspected the braces before the shift",
            ],
            correctIndex: 0,
            explanation:
              "1926.451(e)(1) says crossbraces shall not be used as a means of access, with no exception attached.",
            sourceLessonSlug: "subpart-l-scaffolds",
          },
          {
            prompt: "Which scaffolds does 1926.451(f)(2) prohibit outright?",
            options: [
              "Shore and lean-to scaffolds",
              "Ladder jack scaffolds, because their platforms may be only twelve inches wide",
              "Single-point adjustable suspension scaffolds, unless a qualified person designs them",
              "Pump jack scaffolds, unless they are tied to the structure every twenty feet",
            ],
            correctIndex: 0,
            explanation:
              "The others named are permitted forms with their own requirements elsewhere in the subpart.",
            sourceLessonSlug: "subpart-l-scaffolds",
          },
          {
            prompt: "Who inspects a scaffold for visible defects, and when?",
            options: [
              "A competent person, before each work shift",
              "A qualified person, once a week and after any change in configuration",
              "Any authorized employee, at the start of each working day",
              "The manufacturer's representative, at intervals not exceeding three months",
            ],
            correctIndex: 0,
            explanation:
              "1926.451(f)(3) also requires inspection after any occurrence that could affect the scaffold's structural integrity.",
            sourceLessonSlug: "subpart-l-scaffolds",
          },
          {
            prompt: "At what height does a scaffold require fall protection?",
            options: [
              "More than ten feet above a lower level",
              "More than six feet, the same trigger as the Subpart M general rule",
              "More than four feet, matching the general industry walking surface rule",
              "More than twenty-five feet, the trigger in the older safety net section",
            ],
            correctIndex: 0,
            explanation:
              "The ten-foot scaffold trigger and the six-foot Subpart M trigger are the two most confusable numbers in the whole part.",
            sourceLessonSlug: "subpart-l-scaffolds",
          },
          {
            prompt: "Which scaffold type requires BOTH a personal fall arrest system and a guardrail system?",
            options: [
              "A single-point or two-point adjustable suspension scaffold",
              "A supported frame scaffold more than twenty feet high",
              "A ladder jack scaffold, because its platform is narrow",
              "A crawling board, which also requires a grabline beside it",
            ],
            correctIndex: 0,
            explanation:
              "A ladder jack scaffold requires a personal fall arrest system, and a crawling board requires arrest, a guardrail or a grabline.",
            sourceLessonSlug: "subpart-l-scaffolds",
          },
          {
            prompt: "What guardrail top edge height applies to a supported scaffold placed in service after January 1, 2000?",
            options: [
              "Between thirty-eight and forty-five inches",
              "Between thirty-six and forty-five inches, the range for earlier scaffolds",
              "Forty-two inches plus or minus three, the Subpart M guardrail height",
              "Between twenty and thirty inches, the range for crossbracing used as a midrail",
            ],
            correctIndex: 0,
            explanation:
              "Thirty-six to forty-five inches applies to scaffolds placed in service before that date and to suspended scaffolds requiring both systems.",
            sourceLessonSlug: "subpart-l-scaffolds",
          },
          {
            prompt: "What top rail capacity applies to a guardrail on a two-point adjustable suspension scaffold?",
            options: [
              "One hundred pounds",
              "Two hundred pounds, the capacity required on all other scaffolds",
              "Seventy-five pounds, which is the midrail figure for that class of system",
              "One hundred fifty pounds, matching the Subpart M midrail requirement",
            ],
            correctIndex: 0,
            explanation:
              "Two hundred pounds is the general scaffold figure, and the midrail requirement follows the top rail at seventy-five or one hundred fifty pounds respectively.",
            sourceLessonSlug: "subpart-l-scaffolds",
          },
          {
            prompt: "When may crossbracing serve as a midrail?",
            options: [
              "When the crossing point is between twenty and thirty inches above the platform",
              "When the crossing point is between thirty-eight and forty-eight inches above the platform",
              "Whenever the scaffold also carries a compliant top rail",
              "Never; crossbracing is a structural member and not a guardrail component",
            ],
            correctIndex: 0,
            explanation:
              "Thirty-eight to forty-eight inches is the range that lets crossbracing serve as a top rail instead, and the end points at each upright must be no more than forty-eight inches apart.",
            sourceLessonSlug: "subpart-l-scaffolds",
          },
          {
            prompt: "Under 1926.451(h)(1), what does a worker on a scaffold get in addition to a hard hat?",
            options: [
              "Toeboards, screens, guardrails, debris nets, catch platforms or canopies",
              "A personal fall arrest system anchored to a structural member of the scaffold",
              "A warning line placed six feet back from the edge of the working level",
              "Nothing further, because the hard hat is the falling-object protection",
            ],
            correctIndex: 0,
            explanation:
              "Where objects are too large or heavy to be contained or deflected, the employer must instead keep them away from the edge and secure them.",
            sourceLessonSlug: "subpart-l-scaffolds",
          },
          {
            prompt: "Who trains an employee who merely works on a scaffold, under 1926.454(a)?",
            options: [
              "A person qualified in the subject matter",
              "A competent person, the same person who trains erectors and dismantlers",
              "An OSHA-authorized Outreach trainer delivering the construction curriculum",
              "The scaffold manufacturer, through its published assembly instructions",
            ],
            correctIndex: 0,
            explanation:
              "1926.454(b) requires a competent person for employees who erect, disassemble, move, operate, repair, maintain or inspect a scaffold.",
            sourceLessonSlug: "subpart-l-scaffolds",
          },
          {
            prompt: "Which topic does 1926.454(a) require in training for scaffold users?",
            options: [
              "The maximum intended load and load-carrying capacities of the scaffolds used",
              "The design calculations underlying the manufacturer's rated capacity",
              "The procedure for filing a complaint with the nearest OSHA Area Office",
              "The inspection interval for the rubber insulating gloves used on the scaffold",
            ],
            correctIndex: 0,
            explanation:
              "The list also covers electrical, fall and falling object hazards, the correct procedures for dealing with them, and the proper use of the scaffold and handling of materials.",
            sourceLessonSlug: "subpart-l-scaffolds",
          },
          {
            prompt: "Which equipment does 1926.451 explicitly not apply to?",
            options: [
              "Aerial lifts",
              "Suspension scaffolds, which are covered by their own section entirely",
              "Pump jack scaffolds, whose criteria appear only in appendix A",
              "Mobile scaffolds, which are governed by the general industry standard",
            ],
            correctIndex: 0,
            explanation:
              "The section's opening line says the criteria for aerial lifts are set out exclusively in 1926.453.",
            sourceLessonSlug: "subpart-l-scaffolds",
          },
          {
            prompt: "Where did scaffolding rank on OSHA's most cited standards for fiscal 2025?",
            options: [
              "Sixth",
              "First, ahead of fall protection general requirements",
              "Third, behind hazard communication and ladders",
              "Tenth, behind machine guarding in general industry",
            ],
            correctIndex: 0,
            explanation:
              "Fall protection general requirements was first and machine guarding tenth, with scaffolding at 1926.451 in sixth place.",
            sourceLessonSlug: "subpart-l-scaffolds",
          },
          {
            prompt: "What must a working-level scaffold platform be between the front uprights and the guardrail supports?",
            options: [
              "Fully planked or decked",
              "Covered with a slip-resistant surface rated for the trade being performed",
              "Marked with the maximum intended load in a visible location",
              "Separated from the uprights by a gap of at least one inch for drainage",
            ],
            correctIndex: 0,
            explanation:
              "The exception is for platforms used solely as walkways or solely by employees erecting or dismantling the scaffold.",
            sourceLessonSlug: "subpart-l-scaffolds",
          },
          {
            prompt: "How does 1926.400 divide Subpart K?",
            options: [
              "Installation requirements, work practices, maintenance, and special equipment",
              "General industry rules, construction rules, maritime rules, and definitions",
              "Low voltage, medium voltage, high voltage, and transmission and distribution",
              "Employer duties, employee duties, training duties, and recordkeeping duties",
            ],
            correctIndex: 0,
            explanation:
              "Installation is 1926.402 to 1926.408, work practices are 1926.416 and 1926.417, maintenance is 1926.431 and 1926.432, and special equipment is 1926.441, with definitions at 1926.449.",
            sourceLessonSlug: "subpart-k-electrical",
          },
          {
            prompt: "What choice does 1926.404(b)(1)(i) give the employer?",
            options: [
              "Ground fault circuit interrupters or an assured equipment grounding conductor program",
              "Ground fault circuit interrupters or double-insulated tools throughout the site",
              "An assured equipment grounding conductor program or a written lockout procedure",
              "Deenergizing the temporary supply or guarding it with insulation",
            ],
            correctIndex: 0,
            explanation:
              "Both routes are in addition to any other requirements for equipment grounding conductors, not instead of them.",
            sourceLessonSlug: "subpart-k-electrical",
          },
          {
            prompt: "Which receptacles must have GFCIs where the employer takes that route?",
            options: [
              "120-volt, single-phase, 15- and 20-ampere outlets not part of the permanent wiring",
              "Every receptacle on the site, including those in the building's permanent wiring",
              "Only receptacles serving tools rated above fifteen amperes",
              "Only receptacles located outdoors or in damp or wet locations",
            ],
            correctIndex: 0,
            explanation:
              "The paragraph adds that they must be in use by employees, and carves out small generator receptacles meeting the stated conditions.",
            sourceLessonSlug: "subpart-k-electrical",
          },
          {
            prompt: "Which generators are excepted from the GFCI requirement?",
            options: [
              "Two-wire single-phase portable or vehicle-mounted generators rated not more than 5kW",
              "Any generator whose output is used solely for lighting rather than for tools",
              "Any generator operated by a competent person designated by the employer",
              "Diesel generators of any rating, because their frames are bonded at the factory",
            ],
            correctIndex: 0,
            explanation:
              "The exception also requires the generator's circuit conductors to be insulated from the frame and all other grounded surfaces.",
            sourceLessonSlug: "subpart-k-electrical",
          },
          {
            prompt: "What must an assured equipment grounding conductor program be, under 1926.404(b)(1)(iii)(A)?",
            options: [
              "Written and available at the jobsite for inspection and copying",
              "Approved in advance by the Area Office having jurisdiction over the site",
              "Reviewed annually by a registered professional engineer",
              "Communicated orally to each employee at the start of the project",
            ],
            correctIndex: 0,
            explanation:
              "It must be available to the Assistant Secretary and to any affected employee, which is what makes it inspectable.",
            sourceLessonSlug: "subpart-k-electrical",
          },
          {
            prompt: "Who must the employer designate to implement an assured equipment grounding conductor program?",
            options: [
              "One or more competent persons",
              "A qualified person holding an electrical licence in the state of the work",
              "A registered electrician employed directly by the general contractor",
              "The site superintendent, who signs the test log at the end of each month",
            ],
            correctIndex: 0,
            explanation:
              "The paragraph cross-references the competent person definition at 1926.32(f), so the designee needs authority to correct as well as the ability to spot.",
            sourceLessonSlug: "subpart-k-electrical",
          },
          {
            prompt: "How often must cord sets and plugs be visually inspected under the assured grounding program?",
            options: [
              "Before each day's use",
              "Before each work shift, by the same competent person who inspects scaffolds",
              "At intervals not exceeding three months, alongside the continuity test",
              "Once a week, matching the safety net inspection interval",
            ],
            correctIndex: 0,
            explanation:
              "The inspection looks for external defects such as deformed or missing pins or insulation damage, and for indications of possible internal damage.",
            sourceLessonSlug: "subpart-k-electrical",
          },
          {
            prompt: "What is the maximum interval between required tests under the assured grounding program?",
            options: [
              "Three months, or six for fixed receptacles not exposed to damage",
              "Six months for all equipment, matching the safety net drop test interval",
              "Twelve months, matching the retest interval for rubber insulating blankets",
              "Thirty days, because temporary wiring degrades faster than permanent wiring",
            ],
            correctIndex: 0,
            explanation:
              "Tests are also required before first use, after any repair, and after any incident that could have caused damage, such as a cord being run over.",
            sourceLessonSlug: "subpart-k-electrical",
          },
          {
            prompt: "What two tests does the assured grounding program require?",
            options: [
              "Continuity of the grounding conductor, and correct terminal attachment",
              "Insulation resistance, and a dielectric withstand test at twice the rated voltage",
              "Polarity, and a load test at the equipment's full rated current",
              "Ground resistance to earth, and a ground fault trip time measurement",
            ],
            correctIndex: 0,
            explanation:
              "All equipment grounding conductors must be electrically continuous, and each receptacle and attachment cap or plug must have the grounding conductor on its proper terminal.",
            sourceLessonSlug: "subpart-k-electrical",
          },
          {
            prompt: "How may the results of assured grounding program tests be recorded?",
            options: [
              "By logs, color coding, or another effective means",
              "Only in a bound logbook signed by the competent person after each test",
              "By an entry in the employer's OSHA 300 log for that establishment",
              "By a tag attached to each item, replaced after every test",
            ],
            correctIndex: 0,
            explanation:
              "The record must identify each item that passed and the last date or interval tested, and be available at the jobsite for inspection.",
            sourceLessonSlug: "subpart-k-electrical",
          },
          {
            prompt: "Under 1926.416(a)(1), how may an employee be protected when working within possible contact of a power circuit?",
            options: [
              "By deenergizing and grounding it, or by effective guarding",
              "By wearing rubber insulating gloves of the class matching the circuit voltage",
              "By keeping a distance set by a competent person for that voltage",
              "By working only under the direct supervision of a qualified person",
            ],
            correctIndex: 0,
            explanation:
              "Guarding must be by insulation or other means, and the paragraph frames both options as protection against electric shock rather than as risk reduction.",
            sourceLessonSlug: "subpart-k-electrical",
          },
          {
            prompt: "What does 1926.416(a)(2) require where the exact location of underground power lines is unknown?",
            options: [
              "Insulated protective gloves for employees using hand tools that may contact a line",
              "A permit issued by the utility before any excavation may begin",
              "Location of the lines by a qualified person using instruments before work starts",
              "Suspension of all work until the utility has marked the lines on the surface",
            ],
            correctIndex: 0,
            explanation:
              "The paragraph names jackhammers, bars and other hand tools that may contact a line.",
            sourceLessonSlug: "subpart-k-electrical",
          },
          {
            prompt: "Under 1926.416(a)(3), what must the employer do before work begins?",
            options: [
              "Ascertain whether an energized circuit is in the way, post signs, and advise employees",
              "Obtain written confirmation from the utility that the supply has been isolated",
              "Have a qualified person prepare a single-line diagram of the temporary supply",
              "Deenergize the entire site supply until the work in question is complete",
            ],
            correctIndex: 0,
            explanation:
              "Ascertaining may be by inquiry, direct observation or instruments, and covers circuits that are concealed as well as exposed.",
            sourceLessonSlug: "subpart-k-electrical",
          },
          {
            prompt: "What does 1926.416(e)(2) prohibit for extension cords?",
            options: [
              "Fastening with staples, hanging from nails, or suspending by wire",
              "Running them across any walkway used by employees on the site",
              "Connecting more than two of them together in a single run",
              "Using them outdoors unless they are rated for wet locations",
            ],
            correctIndex: 0,
            explanation:
              "The preceding paragraph separately bars the use of worn or frayed cords or cables.",
            sourceLessonSlug: "subpart-k-electrical",
          },
          {
            prompt: "What does 1926.416(b)(2) require of working spaces and walkways?",
            options: [
              "They must be kept clear of cords",
              "They must be illuminated to the levels set in Subpart D at all times",
              "They must be at least eighteen inches wide, matching the scaffold platform rule",
              "They must be guarded by barriers wherever energized parts are exposed nearby",
            ],
            correctIndex: 0,
            explanation:
              "The barrier requirement in (b)(1) is a separate rule about not using electrical equipment workspace as a passageway when energized parts are exposed.",
            sourceLessonSlug: "subpart-k-electrical",
          },
          {
            prompt: "What does 1926.417 require of deenergized equipment and circuits?",
            options: [
              "They are rendered inoperative and tagged at every point they can be energized",
              "They are locked with a padlock whose only key is held by the employee working on them",
              "They are tested for absence of voltage by a qualified person every thirty minutes",
              "They are grounded at the source and left ungrounded at the point of work",
            ],
            correctIndex: 0,
            explanation:
              "The section also requires controls that are to be deactivated to be tagged, and tags to plainly identify the equipment or circuits being worked on.",
            sourceLessonSlug: "subpart-k-electrical",
          },
          {
            prompt: "What does 1926.416(d) require when a fuse is installed or removed with a terminal energized?",
            options: [
              "Tools insulated for the voltage",
              "A second employee standing by to open the circuit if contact occurs",
              "Rubber insulating gloves of Class 2 or higher, whatever the voltage",
              "Prior written authorisation from the site's competent person",
            ],
            correctIndex: 0,
            explanation:
              "The paragraph is short and specific, and applies when one or both terminals are energized.",
            sourceLessonSlug: "subpart-k-electrical",
          },
          {
            prompt: "Which two sections of Subpart K hold the safety-related work practices?",
            options: [
              "1926.416 and 1926.417",
              "1926.404 and 1926.405, which cover wiring design and wiring methods",
              "1926.431 and 1926.432, which cover maintenance and environmental deterioration",
              "1926.441 and 1926.449, which cover batteries and definitions",
            ],
            correctIndex: 0,
            explanation:
              "1926.400(b) says so, and adds that they cover accidental contact with energized lines above or below ground passing through or near the jobsite.",
            sourceLessonSlug: "subpart-k-electrical",
          },
          {
            prompt: "Which section makes the hazard communication standard applicable to construction work?",
            options: [
              "1926.59",
              "1926.55, which sets limits for gases, vapors, fumes, dusts and mists",
              "1926.21(b)(3), which requires instruction for employees handling harmful substances",
              "1926.33, which covers access to employee exposure and medical records",
            ],
            correctIndex: 0,
            explanation:
              "1926.59 states that the requirements applicable to construction work are identical to those at 1910.1200.",
            sourceLessonSlug: "hazard-communication",
          },
          {
            prompt: "Which international system is the hazard communication standard written to be consistent with?",
            options: [
              "The Globally Harmonized System, primarily Revision 7",
              "The International Labour Organization chemicals convention of 1990",
              "The European REACH registration and authorisation framework",
              "The Department of Transportation hazardous materials classification scheme",
            ],
            correctIndex: 0,
            explanation:
              "The purpose paragraph names the United Nations Globally Harmonized System of Classification and Labeling of Chemicals and the revision it follows.",
            sourceLessonSlug: "hazard-communication",
          },
          {
            prompt: "How many pieces of information must appear on the label of a shipped container?",
            options: [
              "Six",
              "Four, since pictograms and signal words are optional under Revision 7",
              "Sixteen, matching the number of sections on a safety data sheet",
              "Three, being the product identifier, the hazard statement and the supplier name",
            ],
            correctIndex: 0,
            explanation:
              "Product identifier, signal word, hazard statements, pictograms, precautionary statements, and the responsible party's name, United States address and telephone number.",
            sourceLessonSlug: "hazard-communication",
          },
          {
            prompt: "Which three label elements must be located together?",
            options: [
              "Signal word, hazard statements, and pictograms",
              "Product identifier, precautionary statements, and supplier contact details",
              "Pictograms, precautionary statements, and the date of manufacture",
              "Signal word, product identifier, and the responsible party's telephone number",
            ],
            correctIndex: 0,
            explanation:
              "1910.1200(f)(3) groups exactly those three, so severity, hazard and symbol can be read in one glance.",
            sourceLessonSlug: "hazard-communication",
          },
          {
            prompt: "What are the two signal words the standard permits?",
            options: [
              "Danger and warning",
              "Danger and caution, following the older labelling conventions",
              "Warning, caution and notice, in descending order of severity",
              "Toxic and corrosive, matching the two most severe hazard classes",
            ],
            correctIndex: 0,
            explanation:
              "The definition says danger is used for the more severe hazards and warning for the less severe, and names no third word.",
            sourceLessonSlug: "hazard-communication",
          },
          {
            prompt: "Which signal word marks the more severe hazards?",
            options: [
              "Danger",
              "Warning, because it instructs the reader to take precautions before handling",
              "Both equally, since severity is conveyed by the pictogram rather than the word",
              "Neither; severity is expressed only in the hazard statements",
            ],
            correctIndex: 0,
            explanation:
              "The definition of signal word states the ordering directly, which is why the word is the fastest thing to read on a label.",
            sourceLessonSlug: "hazard-communication",
          },
          {
            prompt: "How many numbered sections does a safety data sheet have?",
            options: [
              "Sixteen",
              "Six, matching the number of elements required on a label",
              "Twelve, with sections thirteen through sixteen optional in the United States",
              "Eight, with the remainder folded into the manufacturer's own appendices",
            ],
            correctIndex: 0,
            explanation:
              "They must appear in the order the standard lists, which is what makes a data sheet navigable without reading it end to end.",
            sourceLessonSlug: "hazard-communication",
          },
          {
            prompt: "Which SDS section carries first-aid measures?",
            options: [
              "Section 4",
              "Section 2, which identifies the hazards the chemical presents",
              "Section 8, which covers exposure controls and personal protection",
              "Section 11, which carries the toxicological information",
            ],
            correctIndex: 0,
            explanation:
              "The fixed order is the point: first aid is always section 4 whatever the chemical.",
            sourceLessonSlug: "hazard-communication",
          },
          {
            prompt: "Which SDS section names the protective equipment needed?",
            options: [
              "Section 8",
              "Section 7, which covers handling and storage of the chemical",
              "Section 5, which covers fire-fighting measures for the chemical",
              "Section 16, which carries other information and the revision date",
            ],
            correctIndex: 0,
            explanation:
              "Section 8 is titled Exposure controls and personal protection, and sits at the same number for every chemical.",
            sourceLessonSlug: "hazard-communication",
          },
          {
            prompt: "Which SDS sections does OSHA say it will not enforce?",
            options: [
              "Sections 12 through 15",
              "Sections 1 through 3, which duplicate information already on the label",
              "Section 16 alone, which carries only the revision date",
              "None; every section is enforceable against the preparer",
            ],
            correctIndex: 0,
            explanation:
              "A note to the paragraph says those areas are not under OSHA's jurisdiction, though the headings must still appear in order to be consistent with the GHS.",
            sourceLessonSlug: "hazard-communication",
          },
          {
            prompt: "Which safety data sheets must an employer have in the workplace?",
            options: [
              "One for each hazardous chemical it uses",
              "One for each chemical stored on site in a quantity above one gallon",
              "One for each chemical the employer manufactures or imports itself",
              "A single consolidated sheet covering all chemicals used on the project",
            ],
            correctIndex: 0,
            explanation:
              "Manufacturers and importers obtain or develop the sheets, and employers must hold one for each hazardous chemical they use.",
            sourceLessonSlug: "hazard-communication",
          },
          {
            prompt: "When must hazard communication training be given, under 1910.1200(h)(1)?",
            options: [
              "At initial assignment and when a new chemical hazard is introduced",
              "Annually, and additionally whenever a data sheet is revised by its preparer",
              "Within thirty days of hire, and every three years thereafter",
              "Only where the employer's own hazard assessment identifies an exposure above a limit",
            ],
            correctIndex: 0,
            explanation:
              "Training may cover categories of hazards rather than individual chemicals, but chemical-specific information must always be available through labels and data sheets.",
            sourceLessonSlug: "hazard-communication",
          },
          {
            prompt: "Which of these must employees be informed of under 1910.1200(h)(2)?",
            options: [
              "Where the written program and the data sheets are kept",
              "The purchase price and supplier of each hazardous chemical on site",
              "The identity of the competent person who classified each chemical",
              "The date each container on site was opened and first used",
            ],
            correctIndex: 0,
            explanation:
              "The information duty covers the requirements of the standard, the operations in the work area where hazardous chemicals are present, and the location and availability of the program, the chemical list and the sheets.",
            sourceLessonSlug: "hazard-communication",
          },
          {
            prompt: "Which of these is part of the required hazard communication training content?",
            options: [
              "Methods for detecting the presence or release of a chemical",
              "The chemical's molecular structure and its principal industrial uses",
              "The regulatory history of the standard and its major amendments",
              "The procedure for filing a whistleblower complaint about chemical exposure",
            ],
            correctIndex: 0,
            explanation:
              "The list also covers the physical and health hazards, the protective measures available, and the details of the employer's program including how to read a label and a data sheet.",
            sourceLessonSlug: "hazard-communication",
          },
          {
            prompt: "Where did hazard communication rank on OSHA's most cited list for fiscal 2025?",
            options: [
              "Second",
              "First, ahead of fall protection general requirements",
              "Sixth, behind scaffolding in construction",
              "It did not appear, because it is a general industry standard",
            ],
            correctIndex: 0,
            explanation:
              "It sat behind only fall protection general requirements at 1926.501, and it reaches construction through 1926.59.",
            sourceLessonSlug: "hazard-communication",
          },
          {
            prompt: "What three mechanisms does the hazard communication standard use to transmit information?",
            options: [
              "Labels, safety data sheets, and training",
              "Labels, exposure monitoring, and medical surveillance",
              "Pictograms, respirator fit testing, and posted warning signs",
              "Signal words, engineering controls, and personal protective equipment",
            ],
            correctIndex: 0,
            explanation:
              "The purpose paragraph names comprehensive hazard communication programs including container labeling and other forms of warning, safety data sheets and employee training.",
            sourceLessonSlug: "hazard-communication",
          },
          {
            prompt: "Which SDS section carries the date of preparation or last revision?",
            options: [
              "Section 16",
              "Section 1, which identifies the product and the supplier",
              "Section 15, which carries the regulatory information",
              "Section 3, which gives the composition and information on ingredients",
            ],
            correctIndex: 0,
            explanation:
              "Section 16 is titled Other information, including date of preparation or last revision.",
            sourceLessonSlug: "hazard-communication",
          },
          {
            prompt: "Which of these is a scaffold rule rather than an electrical rule?",
            options: [
              "Guying or bracing above a four to one height to base width ratio",
              "Testing equipment grounding conductors at intervals not exceeding three months",
              "Providing insulated protective gloves where underground line locations are unknown",
              "Tagging deenergized circuits at every point they can be energized",
            ],
            correctIndex: 0,
            explanation:
              "The other three come from 1926.404(b)(1)(iii), 1926.416(a)(2) and 1926.417 respectively.",
            sourceLessonSlug: "subpart-l-scaffolds",
          },
          {
            prompt: "Why does this lesson call the fixed order of the sixteen SDS sections the useful part?",
            options: [
              "The same information sits at the same number for every chemical",
              "It allows OSHA to enforce every section equally against the preparer",
              "It makes the sheet shorter than the older material safety data sheet format",
              "It lets an employer keep one sheet for a group of similar chemicals",
            ],
            correctIndex: 0,
            explanation:
              "First aid is always section 4 and required protective equipment is always section 8, which is what makes a data sheet usable in a hurry.",
            sourceLessonSlug: "hazard-communication",
          },
          {
            prompt: "Which number is the scaffold guardrail top rail capacity on most scaffolds?",
            options: [
              "Two hundred pounds",
              "One hundred pounds, which applies to every suspension scaffold guardrail",
              "One hundred fifty pounds, which is the midrail figure in Subpart M",
              "Four times the maximum intended load, matching the scaffold capacity rule",
            ],
            correctIndex: 0,
            explanation:
              "One hundred pounds applies only to guardrails on single-point and two-point adjustable suspension scaffolds.",
            sourceLessonSlug: "subpart-l-scaffolds",
          },
          {
            prompt: "What does the assured equipment grounding conductor program cover?",
            options: [
              "Cord sets, non-permanent receptacles, and cord- and plug-connected equipment",
              "The permanent wiring of the structure once it has been energized",
              "Only the tools issued directly by the employer to its own employees",
              "Only equipment used outdoors or in damp and wet locations",
            ],
            correctIndex: 0,
            explanation:
              "It covers everything of that kind available for use or used by employees, with a narrow carve-out for fixed cord sets and receptacles not exposed to damage.",
            sourceLessonSlug: "subpart-k-electrical",
          },
          {
            prompt: "What happens to equipment found damaged during the daily visual inspection?",
            options: [
              "It may not be used until repaired",
              "It may be used for the remainder of the shift and repaired overnight",
              "It must be reported to the Area Office within twenty-four hours",
              "It must be retested at three-month intervals rather than removed",
            ],
            correctIndex: 0,
            explanation:
              "The employer also may not make available or permit the use of any equipment that has not met the program's requirements.",
            sourceLessonSlug: "subpart-k-electrical",
          },
          {
            prompt: "Which of the Focus Four does Subpart K principally address?",
            options: [
              "Electrocution",
              "Struck-by, through the requirements for guarding energized parts",
              "Caught-in or between, through the lockout and tagging provisions",
              "Falls, through the rules on working near overhead power lines",
            ],
            correctIndex: 0,
            explanation:
              "1926.404(b)(1) on ground-fault protection and 1926.416 on work near energized circuits are the core of the answer to that hazard.",
            sourceLessonSlug: "subpart-k-electrical",
          },
          {
            prompt: "Which pairing of trigger height to subpart is correct?",
            options: [
              "Ten feet, Subpart L",
              "Ten feet, Subpart M, for work on an unprotected side or edge",
              "Six feet, Subpart L, for work on any supported scaffold platform",
              "Two feet, Subpart M, for the point at which access equipment is required",
            ],
            correctIndex: 0,
            explanation:
              "Six feet is the Subpart M trigger and two feet is the scaffold access threshold in 1926.451(e)(1), not a fall protection trigger.",
            sourceLessonSlug: "subpart-l-scaffolds",
          },
          {
            prompt: "What must an employer do with a scaffold part damaged so that its strength falls below the capacity requirement?",
            options: [
              "Repair, replace, brace, or remove it from service",
              "Reduce the posted maximum intended load until the part can be replaced",
              "Restrict access to authorized persons until the next scheduled inspection",
              "Report the defect to the manufacturer before the scaffold may be used again",
            ],
            correctIndex: 0,
            explanation:
              "1926.451(f)(4) requires immediate repair, replacement, bracing to meet the capacity provisions, or removal from service until repaired.",
            sourceLessonSlug: "subpart-l-scaffolds",
          },
          {
            prompt: "Which employees does 1926.454(b) require a competent person to train?",
            options: [
              "Those erecting, dismantling, moving, operating, repairing, maintaining or inspecting a scaffold",
              "Every employee who sets foot on a scaffold at any point in the project",
              "Only those who inspect scaffolds before each work shift",
              "Only those who work on suspension scaffolds requiring both fall protection systems",
            ],
            correctIndex: 0,
            explanation:
              "Employees who merely work on a scaffold are trained under 1926.454(a) by a person qualified in the subject matter.",
            sourceLessonSlug: "subpart-l-scaffolds",
          },
          {
            prompt: "Under 1926.454(c), when is scaffold retraining required?",
            options: [
              "When worksite or equipment changes present an untrained hazard, or proficiency has lapsed",
              "Every twelve months, regardless of whether anything has changed",
              "Whenever the employer changes scaffold suppliers",
              "Only after an accident involving a scaffold at that worksite",
            ],
            correctIndex: 0,
            explanation:
              "The three listed situations are changes at the worksite, changes in the type of scaffold or protection used, and inadequacies in the employee's work.",
            sourceLessonSlug: "subpart-l-scaffolds",
          },
          {
            prompt: "Which of these is required in addition to a hard hat on a scaffold?",
            options: [
              "Toeboards, screens, or an equivalent falling-object measure",
              "A personal fall arrest system, on every scaffold whatever its height",
              "Eye protection meeting ANSI/ISEA Z87.1, on every scaffold platform",
              "A guardrail on the side facing the wall being worked on",
            ],
            correctIndex: 0,
            explanation:
              "1926.451(h)(1) pairs the hard hat with toeboards, screens, guardrails, debris nets, catch platforms or canopies, and the wall side is the one place a guardrail is not required in overhand bricklaying.",
            sourceLessonSlug: "subpart-l-scaffolds",
          },
          {
            prompt: "Which section of Subpart K covers batteries and battery charging?",
            options: [
              "1926.441",
              "1926.431, which covers maintenance of electrical equipment",
              "1926.432, which covers environmental deterioration of equipment",
              "1926.449, which supplies the definitions for the subpart",
            ],
            correctIndex: 0,
            explanation:
              "1926.400(d) lists it as the safety requirements for special equipment division of the subpart.",
            sourceLessonSlug: "subpart-k-electrical",
          },
          {
            prompt: "What is a precautionary statement on a label?",
            options: [
              "One of the six required label elements",
              "The optional supplier note describing recommended storage temperature",
              "The sentence naming the GHS revision the classification follows",
              "The transport information carried over from the Department of Transportation marking",
            ],
            correctIndex: 0,
            explanation:
              "It sits alongside the product identifier, signal word, hazard statements, pictograms and responsible party details.",
            sourceLessonSlug: "hazard-communication",
          },
          {
            prompt: "Who obtains or develops a safety data sheet in the first place?",
            options: [
              "Chemical manufacturers and importers",
              "The employer who uses the chemical on the jobsite",
              "The distributor who sells the chemical to the employer",
              "OSHA, which publishes a sheet for each classified chemical",
            ],
            correctIndex: 0,
            explanation:
              "Employers must then have a sheet in the workplace for each hazardous chemical they use, and distributors must pass sheets along.",
            sourceLessonSlug: "hazard-communication",
          },
          {
            prompt: "What must happen to a cord set found damaged during the daily inspection?",
            options: [
              "It may not be used until it is repaired",
              "It may finish the shift if a competent person tapes the damaged section",
              "It must be retested for continuity and returned to service the same day",
              "It must be reported to the Assistant Secretary within twenty-four hours",
            ],
            correctIndex: 0,
            explanation:
              "The employer must also not make available or permit the use of any equipment that has not met the program's requirements.",
            sourceLessonSlug: "subpart-k-electrical",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // FINAL ASSESSMENT — last in the lessons array, pools 45 and serves 10
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "construction-basic-safety-final",
      title: "Final assessment · Basic construction safety",
      section: "Final assessment",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 10,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is the fall protection trigger height on an unprotected side or edge under Subpart M?",
            options: [
              "Six feet",
              "Ten feet, which is the trigger that applies on a scaffold platform",
              "Four feet, which is the general industry walking-working surface trigger",
              "Twenty-five feet, which appears in the older safety net section at 1926.105",
            ],
            correctIndex: 0,
            explanation:
              "1926.501(b)(1) and the sweep-up paragraph (b)(15) both use six feet, which is the single most useful number in the part.",
            sourceLessonSlug: "subpart-m-the-duty",
          },
          {
            prompt: "What is the fall protection trigger height on a scaffold?",
            options: [
              "More than ten feet",
              "More than six feet, matching the Subpart M general rule",
              "More than two feet, the height at which access equipment becomes required",
              "More than four feet, matching the general industry rule for platforms",
            ],
            correctIndex: 0,
            explanation:
              "1926.451(g)(1) sets ten feet, and the two-foot figure in 1926.451(e)(1) is about access rather than about falling.",
            sourceLessonSlug: "subpart-l-scaffolds",
          },
          {
            prompt: "Does completing this course satisfy OSHA 10, OSHA 30, or an NCCER credential?",
            options: [
              "No, none of them",
              "It satisfies OSHA 10 but not OSHA 30 or an NCCER credential",
              "It satisfies the NCCER Core 00101 requirement but not the OSHA cards",
              "It satisfies all three where a state plan has adopted the Outreach programme",
            ],
            correctIndex: 0,
            explanation:
              "OSHA says its Outreach Training Program is voluntary, meets no standard's training requirement and is not a certification, and NCCER credentials come from accredited providers.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "Which document governs when these notes and the regulation disagree?",
            options: [
              "The regulation",
              "Whichever states the stricter requirement for the work in question",
              "The notes, since they reflect the most recent retrieval of the text",
              "The employer's own written safety program for that jobsite",
            ],
            correctIndex: 0,
            explanation:
              "That is why every rule in the course carries its section number.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "What does the general duty clause require?",
            options: [
              "A workplace free from recognized serious hazards",
              "Compliance with every consensus standard the regulation incorporates by reference",
              "A written accident prevention program filed with the Secretary before work begins",
              "Training for each employee in the recognition and avoidance of unsafe conditions",
            ],
            correctIndex: 0,
            explanation:
              "Section 5(a)(1) at 29 U.S.C. 654. The training duty is 1926.21(b)(2), a regulation issued under the Act rather than the statute itself.",
            sourceLessonSlug: "the-act-the-part-and-indiana",
          },
          {
            prompt: "What must a competent person be able to do that a merely knowledgeable person cannot?",
            options: [
              "Take prompt corrective measures to eliminate hazards",
              "Certify a scaffold design and sign the calculations supporting it",
              "Issue a citation for the condition to the responsible subcontractor",
              "Deliver the OSHA 10-hour class to employees on the site",
            ],
            correctIndex: 0,
            explanation:
              "The authority half of the definition at 1926.32(f) is what makes the role load-bearing in the inspection duty at 1926.20(b)(2).",
            sourceLessonSlug: "the-act-the-part-and-indiana",
          },
          {
            prompt: "Who enforces the standards at a private construction site in Indianapolis?",
            options: [
              "IOSHA",
              "Federal OSHA's regional office, because Indiana has no approved state plan",
              "The Indiana Board of Safety Review, which conducts inspections and issues orders",
              "The city of Indianapolis, through its building code enforcement division",
            ],
            correctIndex: 0,
            explanation:
              "IOSHA sits inside the Indiana Department of Labor, with its main office in Indianapolis and a separate Construction Safety Division.",
            sourceLessonSlug: "the-act-the-part-and-indiana",
          },
          {
            prompt: "Under 1926.20(b)(3), what happens to a tool that does not comply with the part?",
            options: [
              "It is tagged or locked out, or physically removed",
              "It is used only by employees qualified by training or experience",
              "It is repaired within twenty-four hours and returned to service",
              "It is reported to the competent person and left in place until the next inspection",
            ],
            correctIndex: 0,
            explanation:
              "Its use is prohibited, and the two named remedies are identification as unsafe by tagging or locking the controls, or removal from its place of operation.",
            sourceLessonSlug: "subpart-c-employer-duties",
          },
          {
            prompt: "Why can one violation of a PPE requirement become several citations?",
            options: [
              "The duty is owed to each employee separately",
              "Each subpart of the part is cited independently in a single inspection",
              "The employer is cited once for the hazard and once for failing to train",
              "State plans issue their own citation alongside the federal one",
            ],
            correctIndex: 0,
            explanation:
              "1926.20(f) makes the PPE and training standards impose a separate compliance duty for each employee covered.",
            sourceLessonSlug: "subpart-c-employer-duties",
          },
          {
            prompt: "How long does a worker have to file a Section 11(c) retaliation complaint?",
            options: [
              "Thirty days after the retaliation",
              "Eight hours after the retaliation, matching the fatality reporting clock",
              "Six months after the underlying safety complaint was filed",
              "Until the citation arising from the complaint has been finally resolved",
            ],
            correctIndex: 0,
            explanation:
              "The window runs from the retaliatory act rather than from the safety complaint, which is what makes it easy to miss.",
            sourceLessonSlug: "rights-reporting-and-penalties",
          },
          {
            prompt: "Within how long must an employer report a work-related fatality to OSHA?",
            options: [
              "Eight hours",
              "Twenty-four hours, the same clock that covers an amputation",
              "Seventy-two hours, or by the end of the next business day",
              "Immediately, meaning before the site is disturbed in any way",
            ],
            correctIndex: 0,
            explanation:
              "1904.39 sets eight hours for a fatality and twenty-four for an in-patient hospitalization, an amputation, or the loss of an eye.",
            sourceLessonSlug: "rights-reporting-and-penalties",
          },
          {
            prompt: "What is the maximum penalty for a willful violation under the amounts effective after January 15, 2026?",
            options: [
              "$165,514 per violation",
              "$16,550 per violation, the same as a serious violation",
              "$16,550 per day beyond the abatement date named in the citation",
              "There is no published maximum; willful penalties are set case by case",
            ],
            correctIndex: 0,
            explanation:
              "Willful and repeated share that maximum, ten times the serious figure, and the amounts are adjusted annually for inflation.",
            sourceLessonSlug: "rights-reporting-and-penalties",
          },
          {
            prompt: "Which standard was OSHA's most frequently cited in fiscal year 2025?",
            options: [
              "1926.501",
              "1910.1200, hazard communication, which was second on the list",
              "1926.451, scaffolding, which was sixth on the list",
              "1926.1053, ladders, which was third on the list",
            ],
            correctIndex: 0,
            explanation:
              "Fall protection general requirements has held the top position, and fall protection training at 1926.503 was seventh on the same list.",
            sourceLessonSlug: "rights-reporting-and-penalties",
          },
          {
            prompt: "Name OSHA's Focus Four.",
            options: [
              "Falls, caught-in or between, struck-by, electrocution",
              "Falls, heat, noise, and chemical exposure on the jobsite",
              "Falls, trenching, cranes, and confined space entry",
              "Struck-by, electrocution, silica dust, and manual handling injuries",
            ],
            correctIndex: 0,
            explanation:
              "OSHA publishes an instructor guide and student materials for each of those four on its Construction Focus Four Training page.",
            sourceLessonSlug: "the-focus-four",
          },
          {
            prompt: "How many fatal falls to a lower level does OSHA report for construction in 2024?",
            options: [
              "389 out of 1,034 construction fatalities",
              "1,034 out of 5,283 fatalities across all industries",
              "5,283, which is the all-industry fatal work injury total for 2023",
              "15 a day, which is the current all-industry average",
            ],
            correctIndex: 0,
            explanation:
              "That is a little over a third of construction deaths in the year, from one hazard, which is why OSHA calls falls the leading cause of death in construction.",
            sourceLessonSlug: "the-focus-four",
          },
          {
            prompt: "Why does this course omit fatality counts for three of the Focus Four?",
            options: [
              "Those numbers were not retrieved from a published source",
              "Those three hazards cause too few deaths for OSHA to publish a count",
              "OSHA merges them into a single struck-by category in its statistics",
              "The counts change too frequently to be worth including in a course",
            ],
            correctIndex: 0,
            explanation:
              "The course states the gap in the lesson rather than reaching for a plausible number, and names the BLS Census of Fatal Occupational Injuries as the underlying source.",
            sourceLessonSlug: "the-focus-four",
          },
          {
            prompt: "What are the three steps of OSHA's Fall Prevention Campaign?",
            options: [
              "Plan, provide, train",
              "Recognise, report, remove, applied in that order to any hazard found",
              "Assess, abate, appeal, matching the stages of an enforcement action",
              "Inspect, certify, record, matching the duties of a competent person",
            ],
            correctIndex: 0,
            explanation:
              "The campaign has run since 2012 with NIOSH and the NORA Construction Sector.",
            sourceLessonSlug: "the-focus-four",
          },
          {
            prompt: "What three systems satisfy the general rule at 1926.501(b)(1)?",
            options: [
              "Guardrails, safety nets, personal fall arrest",
              "Guardrails, warning lines, safety monitoring systems",
              "Safety nets, controlled access zones, body belts",
              "Personal fall arrest, positioning device systems, fall protection plans",
            ],
            correctIndex: 0,
            explanation:
              "Warning lines and monitoring appear only in the low-slope roofing paragraph, and a fall protection plan is available only where the employer proves infeasibility.",
            sourceLessonSlug: "subpart-m-the-duty",
          },
          {
            prompt: "How are skylights treated under 1926.501(b)(4)?",
            options: [
              "As holes",
              "As unprotected edges requiring guardrails on all sides",
              "As wall openings, using the thirty-nine inch inside-edge test",
              "As dangerous equipment requiring equipment guards",
            ],
            correctIndex: 0,
            explanation:
              "The paragraph names skylights within holes, and requires protection against falling through, stepping through, and objects falling through.",
            sourceLessonSlug: "subpart-m-the-duty",
          },
          {
            prompt: "Where may a safety monitoring system be used alone?",
            options: [
              "On low-slope roofs fifty feet or less in width",
              "On any roof, where a competent person is the designated monitor",
              "On steep roofs, where guardrails would obstruct the work",
              "At a leading edge, where the employer has filed a fall protection plan",
            ],
            correctIndex: 0,
            explanation:
              "1926.501(b)(10) otherwise requires a warning line combined with another system, or one of the three standard systems.",
            sourceLessonSlug: "subpart-m-the-duty",
          },
          {
            prompt: "How high must a Subpart M guardrail top rail be installed?",
            options: [
              "Forty-two inches, plus or minus three",
              "Thirty-eight to forty-five inches, the range for a modern supported scaffold",
              "Thirty-six to forty-five inches, the range for an older supported scaffold",
              "Thirty-nine inches exactly, the height below which it may not deflect",
            ],
            correctIndex: 0,
            explanation:
              "The scaffold ranges belong to 1926.451(g)(4)(ii), and thirty-nine inches is the deflection floor rather than an installed height.",
            sourceLessonSlug: "subpart-m-the-systems",
          },
          {
            prompt: "What load must a Subpart M guardrail top rail withstand?",
            options: [
              "Two hundred pounds",
              "One hundred fifty pounds, which is the midrail requirement",
              "One hundred pounds, which applies to certain suspension scaffold guardrails",
              "Five thousand pounds, which is the fall arrest anchorage requirement",
            ],
            correctIndex: 0,
            explanation:
              "It is applied within two inches of the top edge in any outward or downward direction, at any point along the top edge.",
            sourceLessonSlug: "subpart-m-the-systems",
          },
          {
            prompt: "What must a personal fall arrest anchorage support?",
            options: [
              "At least five thousand pounds per employee attached",
              "At least four times the maximum intended load applied to it",
              "At least eighteen hundred pounds, the maximum arresting force with a harness",
              "At least three thousand six hundred pounds, the snaphook proof-test load",
            ],
            correctIndex: 0,
            explanation:
              "The alternative is a system designed and used under the supervision of a qualified person with a safety factor of at least two.",
            sourceLessonSlug: "subpart-m-the-systems",
          },
          {
            prompt: "What is the maximum arresting force on an employee in a body harness?",
            options: [
              "Eighteen hundred pounds",
              "Nine hundred pounds, the limit that applies with a body belt",
              "Five thousand pounds, matching the minimum anchorage strength",
              "Three and a half times the free fall distance in feet",
            ],
            correctIndex: 0,
            explanation:
              "The system must also prevent free fall beyond six feet, prevent contact with a lower level, and limit deceleration distance to three and a half feet.",
            sourceLessonSlug: "subpart-m-the-systems",
          },
          {
            prompt: "Since January 1, 1998, what has been unacceptable in a personal fall arrest system?",
            options: [
              "A body belt",
              "A body harness, which was superseded by full-body suspension equipment",
              "A self-retracting lifeline that limits free fall to two feet or less",
              "A vertical lifeline used by a single employee",
            ],
            correctIndex: 0,
            explanation:
              "The same date made locking snaphooks the only acceptable type, and a body belt is still permitted in a positioning device system.",
            sourceLessonSlug: "subpart-m-the-systems",
          },
          {
            prompt: "Who must deliver fall protection training under 1926.503?",
            options: [
              "A competent person qualified in the listed areas",
              "A qualified person holding a professional safety credential",
              "An OSHA-authorized Outreach trainer delivering a 10-hour class",
              "The employer, personally, since the certification carries the employer's signature",
            ],
            correctIndex: 0,
            explanation:
              "The certification record may carry the signature of the trainer or of the employer, but the training itself must come from a competent person.",
            sourceLessonSlug: "subpart-m-the-systems",
          },
          {
            prompt: "Who pays for personal protective equipment used to comply with Part 1926?",
            options: [
              "The employer, at no cost to employees",
              "The employee, for anything that can also be worn away from work",
              "The employer and the employee, in the proportion the employer sets",
              "The general contractor, on behalf of every employer on the site",
            ],
            correctIndex: 0,
            explanation:
              "The exceptions are narrow: non-specialty safety-toe footwear and non-specialty prescription safety eyewear permitted off site, everyday clothing, and weather items.",
            sourceLessonSlug: "subpart-e-ppe",
          },
          {
            prompt: "Which PPE requirement in 1926.95(c) is easy to overlook?",
            options: [
              "It must fit each affected employee",
              "It must be replaced at the manufacturer's stated service interval",
              "It must be inspected and tagged before each day's use",
              "It must carry a marking identifying the consensus standard it meets",
            ],
            correctIndex: 0,
            explanation:
              "Fit is written into the standard alongside safe design and construction, so equipment that protects in principle but does not fit does not comply.",
            sourceLessonSlug: "subpart-e-ppe",
          },
          {
            prompt: "What does 1926.101 say about plain cotton as hearing protection?",
            options: [
              "It is not acceptable",
              "It is acceptable where noise exposure is below the Table D-2 limits",
              "It is acceptable if fitted individually by a competent person",
              "It is acceptable as a temporary measure for exposures under one hour",
            ],
            correctIndex: 0,
            explanation:
              "The section says so in one flat sentence, and separately requires inserted devices to be fitted or determined individually by competent persons.",
            sourceLessonSlug: "subpart-e-ppe",
          },
          {
            prompt: "Which standard applies to respiratory protection in construction?",
            options: [
              "1910.134",
              "1926.103, which contains the construction-specific programme requirements",
              "1926.55, which sets exposure limits for dusts, fumes and mists",
              "1910.1200, since respirator selection follows the safety data sheet",
            ],
            correctIndex: 0,
            explanation:
              "1926.103 is a pointer: the requirements applicable to construction work are identical to those at 1910.134.",
            sourceLessonSlug: "subpart-e-ppe",
          },
          {
            prompt: "What capacity must a scaffold and its components have?",
            options: [
              "Own weight plus four times the maximum intended load",
              "Own weight plus six times the maximum intended load",
              "Twice the maximum intended load, verified by a competent person",
              "Five thousand pounds per employee on the platform",
            ],
            correctIndex: 0,
            explanation:
              "Six times applies to suspension ropes on non-adjustable suspension scaffolds, and five thousand pounds per employee is the fall arrest anchorage figure.",
            sourceLessonSlug: "subpart-l-scaffolds",
          },
          {
            prompt: "May crossbraces be used as a means of access to a scaffold?",
            options: [
              "No",
              "Yes, on scaffolds less than ten feet above a lower level",
              "Yes, where the employee is protected by a personal fall arrest system",
              "Yes, where the crossing point sits between twenty and thirty inches above the platform",
            ],
            correctIndex: 0,
            explanation:
              "The twenty to thirty inch range is when crossbracing may serve as a midrail, which is a different question from climbing on it.",
            sourceLessonSlug: "subpart-l-scaffolds",
          },
          {
            prompt: "Who inspects a scaffold before each work shift?",
            options: [
              "A competent person",
              "A qualified person who has also approved the scaffold's design",
              "Any employee assigned to work on the scaffold that shift",
              "The employer's safety director, who signs the inspection record",
            ],
            correctIndex: 0,
            explanation:
              "1926.451(f)(3) also requires inspection after any occurrence that could affect the scaffold's structural integrity.",
            sourceLessonSlug: "subpart-l-scaffolds",
          },
          {
            prompt: "Above what height to base width ratio must a supported scaffold be guyed, tied or braced?",
            options: [
              "Four to one",
              "Two to one, at which point the scaffold becomes unstable in most configurations",
              "Six to one, matching the suspension rope multiplier",
              "Ten to one, matching the scaffold fall protection trigger",
            ],
            correctIndex: 0,
            explanation:
              "The paragraph then sets the vertical and horizontal intervals at which the guys, ties or braces must be repeated.",
            sourceLessonSlug: "subpart-l-scaffolds",
          },
          {
            prompt: "What choice does the ground-fault protection rule give an employer?",
            options: [
              "GFCIs, or an assured equipment grounding conductor program",
              "GFCIs, or double-insulated tools throughout the site",
              "GFCIs, or deenergizing the temporary supply outside working hours",
              "An assured equipment grounding conductor program, or a written lockout procedure",
            ],
            correctIndex: 0,
            explanation:
              "1926.404(b)(1)(i) frames it as either-or, with both routes in addition to the ordinary equipment grounding conductor requirements.",
            sourceLessonSlug: "subpart-k-electrical",
          },
          {
            prompt: "Which receptacles need GFCIs where the employer takes that route?",
            options: [
              "120-volt, single-phase, 15- and 20-ampere outlets outside the permanent wiring",
              "All receptacles on the site, including the building's permanent wiring",
              "Only receptacles located outdoors or in wet locations",
              "Only receptacles feeding equipment rated above twenty amperes",
            ],
            correctIndex: 0,
            explanation:
              "They must also be in use by employees, with a narrow exception for small portable or vehicle-mounted generators meeting the stated conditions.",
            sourceLessonSlug: "subpart-k-electrical",
          },
          {
            prompt: "How often must equipment grounding conductor tests be repeated under the assured grounding program?",
            options: [
              "At intervals not exceeding three months",
              "At intervals not exceeding twelve months for all equipment",
              "Before each day's use, alongside the visual inspection",
              "Only after a repair or an incident that could have caused damage",
            ],
            correctIndex: 0,
            explanation:
              "Fixed cord sets and receptacles not exposed to damage go to six months, and tests are also required before first use, after repair and after a suspect incident.",
            sourceLessonSlug: "subpart-k-electrical",
          },
          {
            prompt: "Under 1926.416(a)(1), what protects an employee working within contact distance of a power circuit?",
            options: [
              "Deenergizing and grounding it, or effective guarding",
              "Rubber insulating gloves rated for the circuit's voltage class",
              "A clearance distance determined by a competent person on site",
              "A warning sign posted at the approach to the energized part",
            ],
            correctIndex: 0,
            explanation:
              "Signs, gloves and prior investigation are all required by other paragraphs of the same section, but the paragraph on proximity names those two protections.",
            sourceLessonSlug: "subpart-k-electrical",
          },
          {
            prompt: "What does 1926.416 prohibit for extension cords?",
            options: [
              "Fastening with staples, hanging from nails, or suspending by wire",
              "Use outdoors unless the cord is rated for wet locations",
              "Connection of more than two cords in a single run",
              "Use with any tool drawing more than fifteen amperes",
            ],
            correctIndex: 0,
            explanation:
              "The same section separately bars worn or frayed cords and requires walkways to be kept clear of cords.",
            sourceLessonSlug: "subpart-k-electrical",
          },
          {
            prompt: "Which section brings the hazard communication standard into construction?",
            options: [
              "1926.59",
              "1926.21(b)(3), the duty to instruct employees who handle harmful substances",
              "1926.55, which sets limits for gases, vapors, fumes, dusts and mists",
              "1926.20(f), which makes training duties run to each employee separately",
            ],
            correctIndex: 0,
            explanation:
              "It states that the requirements applicable to construction work are identical to those at 1910.1200.",
            sourceLessonSlug: "hazard-communication",
          },
          {
            prompt: "What are the two signal words on a hazard communication label?",
            options: [
              "Danger and warning",
              "Danger and caution, from the older labelling conventions",
              "Warning and notice, in descending order of severity",
              "Hazard and precaution, matching the two kinds of statement required",
            ],
            correctIndex: 0,
            explanation:
              "Danger marks the more severe hazards and warning the less severe, and the standard names no third word.",
            sourceLessonSlug: "hazard-communication",
          },
          {
            prompt: "How many numbered sections does a safety data sheet carry, and in what order?",
            options: [
              "Sixteen, in a fixed order",
              "Sixteen, in whatever order the preparer finds clearest for that chemical",
              "Twelve, with four optional sections appended where relevant",
              "Six, matching the number of elements required on the label",
            ],
            correctIndex: 0,
            explanation:
              "The fixed order is what makes the sheet usable: first aid is always section 4 and required protective equipment is always section 8.",
            sourceLessonSlug: "hazard-communication",
          },
          {
            prompt: "When must hazard communication training be provided?",
            options: [
              "At initial assignment and when a new chemical hazard is introduced",
              "Annually, and whenever a safety data sheet is revised by its preparer",
              "Only where exposure monitoring shows a level above a permissible limit",
              "Within thirty days of hire, then every three years",
            ],
            correctIndex: 0,
            explanation:
              "Training may be organised by category of hazard, but chemical-specific information must always be available through labels and data sheets.",
            sourceLessonSlug: "hazard-communication",
          },
          {
            prompt: "Which of these numbers belongs to safety nets rather than to fall arrest?",
            options: [
              "A four hundred pound drop test bag",
              "An eighteen hundred pound maximum arresting force",
              "A five thousand pound anchorage capacity per employee",
              "A three and a half foot deceleration distance limit",
            ],
            correctIndex: 0,
            explanation:
              "The bag is thirty inches in diameter and is dropped from the highest working surface at which employees are exposed.",
            sourceLessonSlug: "subpart-m-the-systems",
          },
          {
            prompt: "What must an employer do before an employee begins work that requires fall protection?",
            options: [
              "Provide and install the required system",
              "Record the exposure in the site's daily inspection log",
              "Obtain the employee's written acknowledgement of the hazard",
              "Notify the state plan office that work at height is beginning",
            ],
            correctIndex: 0,
            explanation:
              "1926.502(a)(2) requires the systems to be in place, and the subpart's other requirements met, before the work that necessitates them starts.",
            sourceLessonSlug: "subpart-m-the-systems",
          },
          {
            prompt: "Which subject is deliberately out of scope in these notes?",
            options: [
              "Excavations and trenching",
              "Scaffold capacity and access requirements",
              "The duty to have fall protection at six feet",
              "Ground-fault protection on temporary receptacles",
            ],
            correctIndex: 0,
            explanation:
              "Excavations, cranes, ladders, welding and confined spaces are all named as boundaries of the notes rather than as unimportant hazards.",
            sourceLessonSlug: "what-this-course-is",
          },
        ],
      },
    },
  ],
};

// ══════════════════════════════════════════════════════════════════════════════════════════════
// AUTHORING REPORT, 2026-09-09. Everything below is provenance for the next person to touch this
// file, including a list of what could NOT be confirmed. Read it before editing any number.
// ══════════════════════════════════════════════════════════════════════════════════════════════
//
// SLUG ASSUMED: "construction-basic-safety". The final assessment's lesson slug
// ("construction-basic-safety-final") follows it, so if the registered slug differs, rename that
// lesson slug to match and nothing else changes. Registration is owned by scripts/seed-courses.ts
// and was NOT touched by this pass; per plans/84 it needs price 0, priceType "free", visibility
// "private" (INSERT-ONLY), an honest publishHoldReason, and a BACKLOG line in the standards guard.
//
// SHAPE: 17 lessons. 11 teaching lessons in 5 sections, 5 section quizzes, 1 final placed LAST.
// 313 questions total. Section pools sit exactly on the density target of round(words/35), clamped
// 40 to 100: section 1 pools 46 on 1,609 words, section 2 pools 50 on 1,761, section 3 pools 47 on
// 1,631, section 4 pools 51 on 1,795, section 5 pools 73 on 2,538. The final pools 46 and serves 10.
// Section quizzes serve 5, every quiz passes at 80 and shuffles, every question carries an
// explanation and a sourceLessonSlug, and every teaching lesson is assessed inside its own section.
// 33 reveal cards, 3 per teaching lesson.
//
// ─────────────────────────────────────────────────────────────────────────────────────────────
// WHAT WAS FETCHED AND READ, and therefore what may be cited. Nothing else is.
// ─────────────────────────────────────────────────────────────────────────────────────────────
// From the eCFR versioner API (title-29, 2026-09-01 snapshot, ecfr.gov), read in full:
//   * Subpart A (1926.1 to 1926.16) and Subpart C: 1926.20 (incl. (b)(1) to (b)(4), (c), (d)(1),
//     (f)(1) and (f)(2)), 1926.21(b)(2) to (b)(5), 1926.23, 1926.24, 1926.25, 1926.26, 1926.28,
//     1926.32 (definitions (d), (f), (m), (q), (r)), 1926.33, 1926.34, 1926.35.
//   * Subpart D: 1926.50 (incl. (c), (d)(2), (f)(2) latitude/longitude), 1926.52 Table D-2 (named,
//     not reproduced), 1926.59 (HazCom pointer to 1910.1200).
//   * Subpart E: 1926.95 (incl. (b), (c)(2) fit, (d)(1) to (d)(6) payment), 1926.96, 1926.97,
//     1926.100 (ANSI Z89.1-2009/2003/1997, Section 9.7), 1926.101, 1926.102 (ANSI/ISEA Z87.1-2010,
//     Z87.1-2003, Z87.1-1989 (R-1998); Table E-1 named, not reproduced), 1926.103, 1926.104,
//     1926.105, 1926.106, 1926.107.
//   * Subpart K: 1926.400, 1926.404(b)(1)(i) to (iii) in full, 1926.416, 1926.417, 1926.441.
//   * Subpart L: 1926.451(a), (b), (c), (e), (f), (g), (h); 1926.453 (aerial lift carve-out);
//     1926.454(a), (b), (c).
//   * Subpart M: 1926.500, 1926.501(a) to (c) in full, 1926.502(a) to (d), 1926.503.
//   * 29 CFR 1910.1200: (a)(1) GHS Rev 7, the signal word definition, (f)(1) to (f)(3), (g)(1) to
//     (g)(2) and its Note 2, (h)(1) to (h)(3).
//   * 29 CFR 1904.39(a) and (b).
// Section URLs printed in the lesson Sources blocks were individually confirmed to return HTTP 200.
//
// From osha.gov (browser user agent; the WebFetch tool receives 403 from this host, curl does not):
//   * /data/commonstats: 5,283 fatal work injuries in 2023 (3.5 per 100,000 FTE); about 38 worker
//     deaths a day in 1970 falling to 15 a day in 2023; approximately 1,850 inspectors, 130 million
//     workers, more than 8 million worksites, about one compliance officer per 70,000 workers;
//     FY2024 total federal inspections 34,696.
//   * /top10citedstandards: the FY2025 list (Oct 1 2024 to Sept 30 2025) in rank order: 1926.501,
//     1910.1200, 1926.1053, 1910.147, 1910.134, 1926.451, 1926.503, 1910.178, 1926.102, 1910.212.
//   * /stop-falls: "In 2024, there were 389 fatal falls to a lower level out of 1,034 construction
//     fatalities (BLS data)"; the campaign's PLAN / PROVIDE / TRAIN structure; the NIOSH and NORA
//     Construction Sector partnership since 2012.
//   * /training/outreach/construction/focus-four: the four hazard names (Falls, Caught-In or
//     -Between, Struck-By, Electrocution).
//   * /training/outreach: "this is a voluntary program and does not meet the training requirements
//     for any OSHA standards" and "None of the courses within the Outreach Training Program is
//     considered a certification"; the 10-hour and 30-hour audiences.
//   * /penalties: amounts for violations assessed after Jan. 15, 2026. Serious, Other-Than-Serious
//     and Posting $16,550 per violation; Failure to Abate $16,550 per day beyond the abatement date;
//     Willful or Repeated $165,514 per violation.
//   * /laws-regs/oshact/section_5: 5(a)(1), 5(a)(2) and 5(b), quoted from the page's own text.
//   * /laws-regs/oshact/section_11: 11(c)(1) and the thirty-day filing window in 11(c)(2).
//   * /workers: the "Know Your Rights" list, used as the source for the rights enumerated in
//     lesson 4, and the confidential-complaint statement.
//   * /stateplans/in: IOSHA sits in the Indiana Department of Labor with its main office in
//     Indianapolis; the plan covers private sector workplaces with limited exceptions and state and
//     local government but not federal employers; "IOSHA adopts all OSHA standards and regulations
//     except it has a unique excavations standard"; a separate Construction Safety Division; federal
//     OSHA retains 11(c) enforcement in the private sector; the Board of Safety Review hears
//     petitions.
//
// The one arithmetic derivation in the course: 389 of 1,034 is described as "more than a third".
// That is computed from the two fetched numbers, not quoted.
//
// ─────────────────────────────────────────────────────────────────────────────────────────────
// WHAT COULD NOT BE VERIFIED, and what was done instead
// ─────────────────────────────────────────────────────────────────────────────────────────────
//  1. Construction fatality counts for struck-by, caught-in or between, and electrocution. OSHA's
//     fall prevention page publishes only the falls figure, and no other retrieved page carried the
//     other three. ACTION: lesson 5 states the gap in the lesson body, prints no number for those
//     three, and names the BLS Census of Fatal Occupational Injuries as the underlying source. A
//     quiz question tests the gap itself so it cannot quietly become a claim later.
//  2. The contents of NCCER Core module 00101 beyond its public title. Deliberately not consulted:
//     the module title comes from NCCER's public craft catalog listing recorded in plans/84, and the
//     textbook BAM owns was not opened for this file. The course therefore says which module each
//     lesson SUPPORTS and never claims to mirror the module's own sequence or content.
//  3. Whether the John Boner Neighborhood Centers programme teaches NCCER Core 6th edition, or
//     which modules it delivers. Not claimed anywhere in the course.
//  4. Indiana's unique excavations standard, its text and its number. OSHA's state plan page says it
//     exists but does not reproduce it. The course reports only OSHA's own sentence. Excavations are
//     out of scope for the notes in any case.
//  5. Current-year construction fatality totals later than 2024 and all-industry totals later than
//     2023. Not claimed; the years are printed alongside every figure.
//
// ─────────────────────────────────────────────────────────────────────────────────────────────
// PROPOSED RESEARCH CHECKS for src/lib/research-checks.ts (that file is owned by another pass, so
// they are written out here rather than filed). Each is a hedge that exists in the lessons today.
// ─────────────────────────────────────────────────────────────────────────────────────────────
//  A. "Construction fatality counts for the other three Focus Four hazards." What the course claims:
//     lesson 5 says OSHA publishes the falls figure and that this course could not retrieve counts
//     for struck-by, caught-in or between, or electrocution. What would settle it: the BLS Census of
//     Fatal Occupational Injuries table of construction fatal injuries by event or exposure for
//     2024, at bls.gov. Close it by adding the three counts with the table cited, or by confirming
//     BLS does not publish them at that cut.
//  B. "OSHA penalty maximums are inflation-adjusted every January." What the course claims: the
//     amounts effective after Jan. 15, 2026 ($16,550 / $16,550 per day / $165,514). What would
//     settle it: osha.gov/penalties after the next annual adjustment. This is a recurring check, not
//     a one-time one, and lesson 4 tells the reader the figure to quote is always the current one.
//  C. "Indiana's unique excavations standard." What the course claims: only that OSHA's Indiana
//     state plan page says IOSHA adopts all OSHA standards except a unique excavations standard.
//     What would settle it: the Indiana Administrative Code provision itself, via the Indiana
//     Department of Labor. Worth closing before any CONST course covers Subpart P.
//  D. "Whether the John Boner Construction Training course follows NCCER Core." What the course
//     claims: nothing, deliberately. What would settle it: the programme's own syllabus. Closing it
//     would let CONST-02 and later modules line up against what BAM is actually taught rather than
//     against the public NCCER catalog.
//
// ─────────────────────────────────────────────────────────────────────────────────────────────
// EDITING RULES SPECIFIC TO THIS FILE
// ─────────────────────────────────────────────────────────────────────────────────────────────
//  * Never add a CFR section, a statistic or a penalty amount that has not been fetched in the same
//     pass that adds it. On this subject a wrong citation is not a typo, it is a hazard.
//  * Never soften the lesson 1 disclaimers. They are the reason this file can exist at all.
//  * The two most confusable numbers in the course are deliberate and load-bearing: SIX feet is the
//    Subpart M trigger at 1926.501(b)(1) and TEN feet is the scaffold trigger at 1926.451(g)(1).
//    Several distractors depend on the reader knowing which is which. Do not "fix" one to match the
//    other.
//  * Quiz edits follow the repo rule: edit option TEXT in place, never reorder options, never move
//    correctIndex, never edit a prompt (questionKey hashes the prompt and a reword resets history).
