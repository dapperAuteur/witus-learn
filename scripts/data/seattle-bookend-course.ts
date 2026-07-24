// Authored "Seattle: The Modern Bookend" - a cited, high-school-and-up SITE course on Learn.WitUS
// (Culture & History). It runs the same six-beat site template as the shipped cluster (Indiana
// Avenue, course 1, and The Gym and the Color Line, course 2), one beat per section: Then, Built,
// Powers, Now, Next, Write.
//
// Prerequisites named in the description:
//   * `green-book-how-to-read-a-route` - the METHOD (read a listing, chain a route, research an
//     address forward).
//   * `the-gym-and-the-color-line` - the sibling course, which reads Milliken v. Bradley through
//     Indianapolis (the district line, and what a court could COMPEL). This course is its BOOKEND:
//     the modern end of the same argument, Parents Involved v. Seattle (2007), and what a district
//     could voluntarily CHOOSE.
//
// THE ARGUMENT (the load-bearing frame of the whole file):
//   Parents Involved in Community Schools v. Seattle School District No. 1, 551 U.S. 701 (2007),
//   set against Milliken v. Bradley, 418 U.S. 717 (1974), frames one argument across thirty-three
//   years: MILLIKEN LIMITED WHAT A COURT COULD COMPEL (a cross-district desegregation remedy needs
//   proof of an interdistrict violation); PARENTS INVOLVED LIMITED WHAT A DISTRICT COULD CHOOSE TO
//   DO VOLUNTARILY (Seattle, never segregated by law and never under a court order, used race in
//   assignment and was stopped). Both opinions are read directly and quoted from the operative
//   language, including the plurality/concurrence split in Parents Involved, which matters and is
//   routinely flattened.
//
// Sourcing discipline (the load-bearing part of this file):
//   * Every teaching lesson carries APA 7 in-line citations and a `## Sources` bibliography.
//   * Section 3 is built on the PRIMARY OPINIONS. Milliken's operative language is transcribed from
//     the opinion text (418 U.S. 717, at 744-745). Parents Involved's operative language is
//     transcribed from Chief Justice Roberts's opinion and Justice Kennedy's controlling
//     concurrence (551 U.S. 701).
//   * TWO POPULAR CLAIMS ARE CORRECTED AGAINST THE SOURCE, in the text: (a) the "stop discriminating
//     on the basis of race" line is a PLURALITY line (Part IV, four Justices), not the holding of
//     the Court; (b) Parents Involved did NOT hold that a district may never consider race. Five
//     Justices, through Kennedy, held that avoiding racial isolation and pursuing diversity are
//     compelling interests a district may pursue by race-conscious means short of assigning each
//     student a racial classification. Lesson 12 reports both corrections.
//   * ONE THING WAS CUT AND REPORTED: this course does NOT reproduce a specific Seattle deed's
//     covenant text verbatim, because no single deed's exact wording could be pinned to a citable
//     source in the authoring pass. It describes the documented exclusionary formulas, attributes
//     them, and sends the learner to the UW covenants archive to read actual deeds. Reporting the
//     gap is the finding, not a failure.
//   * The Central District's demographic change is given with its CONTESTED causes kept apart:
//     covenants and redlining (earlier policy) and post-1990 gentrification and displacement (a
//     market process) are DIFFERENT claims, and the course does not collapse them.
//   * The Bainbridge Island removal is handled with accountability, not adventure: named people,
//     dated orders, a memorial that the community built and maintains, described as they describe it.
//   * NO INVENTED STATISTIC, QUOTATION, CHARACTER OR ADDRESS. Communities here are living and
//     self-documenting; they are described as they describe themselves.
//
// House rule: NO em-dashes or en-dashes in prose. ASCII hyphens in ranges are fine. Verbatim
// quotations inside `>` blockquotes and cited titles in `## Sources` are the only places a dash
// survives.

import type { AuthoredCourse } from "./authored-course";

export const SEATTLE_BOOKEND_COURSE: AuthoredCourse = {
  title: "Seattle: The Modern Bookend",
  description:
    "A cited, high-school-and-up site course on Seattle: who could live where, the neighborhoods that racial restriction built, and the two Supreme Court opinions that bracket a single argument thirty-three years apart. The building block is a boundary you cannot photograph. You will read Seattle out of a rare searchable primary archive, the University of Washington's Racial Restrictive Covenants Project, which has documented tens of thousands of deeds that once barred nonwhite families from most of the city. You will sit with the Central District, the corridor where a constrained Black Seattle built a full community, and with Bainbridge Island, the place the first forced removal of Japanese Americans began in 1942, now marked by a memorial the community keeps. Then you will read two opinions directly. Milliken v. Bradley (1974) stopped a court-ordered desegregation remedy at the school district line: it limited what a court could compel. Parents Involved in Community Schools v. Seattle School District No. 1 (2007) stopped a district that had never been segregated by law from using race in school assignment: it limited what a district could choose to do voluntarily. You will quote the operative language of both, including the plurality and concurrence split in Parents Involved that decides what the case actually held, correct what it is popularly said to have held, look up a real covenant or parcel in the public records, learn how Seattle assigns students today, and write one grounded, checkable piece. Prerequisites: The Green Book: How to Read a Route (the method) and The Gym and the Color Line (the district-line course this one bookends). A 360 tour of the ground is planned and will be added to the Now section when it is captured.",
  lessons: [
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 1 · Then  (beat 1: US and state/local history)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "sea-then-who-could-live-where",
      title: "1 · Who could live where, and the paper that decided it",
      section: "Section 1 · Then",
      body: `**Where this course sits.** You have finished *The Green Book: How to Read a Route*, which taught the method, and *The Gym and the Color Line*, which took that method to a school district line and read *Milliken v. Bradley* through Indianapolis. That course showed what a court could and could not compel across a boundary. **This course is its bookend.** It goes to Seattle, and to the other end of the same argument: what a district was later told it could not voluntarily choose to do. The two opinions are thirty-three years apart, and Section 3 reads them together.

**Start with the question the whole first section answers: in Seattle, who could live where, and who decided?** The answer is not folklore and it is not lost. It is written down, in property deeds, and a great deal of it has been transcribed into a searchable archive you can open yourself. That archive is why Seattle is worth a course.

**The instrument, named now so the rest of the section has a word for it.** A **racially restrictive covenant** is a clause written into a property deed that bars the sale, rental, or occupancy of the property by people outside a named race. It runs with the land, meaning it binds later owners, not only the one who signed it. In the Seattle region these clauses spread with the residential building boom of the 1920s and kept being written into the 1940s (Gregory, n.d.; Seattle Civil Rights and Labor History Project, n.d.).

**What the covenants did, plainly.** They did not segregate by keeping a record of who was refused. They segregated in advance, by making whole neighborhoods legally closed to nonwhite buyers before anyone applied. The University of Washington's Racial Restrictive Covenants Project describes deeds that restricted occupancy to the "white" or "Caucasian" race, and deeds that named the excluded groups directly, barring people of African, Asian, and in some deeds Jewish descent (Gregory, n.d.). **This course does not reproduce a single deed's exact wording, because it could not pin one specific deed's text to a citable source while authoring. Lesson 2 sends you to the archive to read the actual deeds**, which is the honest version of the move.

**Where that pushed people.** With most of the city closed by covenant and, from the 1930s, marked as risky by federal mortgage maps, Seattle's Black residents were concentrated into a narrow set of neighborhoods, above all the **Central District** east of downtown. In the 1960s and 1970s, by several accounts, a large majority of Seattle's Black population lived in the Central District (KUOW, 2016; BlackPast, n.d.). Section 2 reads that neighborhood as built evidence. Hold the number loosely for now and tight later: **a concentration that severe is not a preference, it is a consequence, and the consequence has a paper trail.**

**Two audiences for this history, and the difference matters.**
1. **The excluded**, who were told by a deed where they could not buy, and who built a community in the ground that was left to them.
2. **The included**, who inherited property whose value had been guaranteed, in part, by keeping other people out. **A covenant is a promise made to one buyer at the expense of another**, and both halves are in the same document.

**A warning about tone, which is a research instruction and not a courtesy.** The neighborhoods in this course are living, and their community organizations are active right now. Do not write about Seattle's Black or Japanese American history as a vanished golden age or as a simple tragedy. **Write what people built, name them where the record names them, and keep the vanishing for the parts you can document.** Every framing choice in this course is checkable against a source, and so should yours be.

## Sources
- BlackPast. (n.d.). *Gentrification, integration or displacement?: The Seattle story*. https://www.blackpast.org/african-american-history/gentrification-integration-or-displacement-seattle-story/
- Gregory, J. (n.d.). *Racial restrictive covenants project*. University of Washington. https://depts.washington.edu/covenants/
- KUOW. (2016). *Race matters: Understanding how the Central Area was gentrified*. https://www.kuow.org/stories/race-matters-understanding-how-the-central-area-was-gentrified
- Seattle Civil Rights and Labor History Project. (n.d.). *Racial restrictive covenants*. University of Washington. https://depts.washington.edu/civilr/covenants.htm`,
    },
    {
      slug: "sea-then-covenants-archive",
      title: "2 · Reading Seattle out of the covenants archive",
      section: "Section 1 · Then",
      body: `Now apply the method. You are going to read a city out of its property records, and then notice what the reading does and does not prove.

**Where these records come from, and why this archive is unusual.** Most histories of housing discrimination ask you to trust a summary. Seattle has something rarer: a **searchable archive of the primary documents themselves.** The **Racial Restrictive Covenants Project**, based at the University of Washington and led by historian **James Gregory**, with **Larry Cebula** at Eastern Washington University, has combed county property records to find deeds carrying racial restrictions and has put images of many of them online (Gregory, n.d.).

**The scale, from the project's own reporting.** The project reports locating racist deed provisions on **more than 80,000 properties** across Washington State, found by examining **more than 7 million property records**, with the help of over a thousand volunteers. **King County, which contains Seattle, alone accounts for more than 37,000 restricted properties** (Gregory, n.d.). Read those numbers slowly. This was not a handful of gated enclaves. It was the default setting for new residential development across much of the region.

**Why the archive exists in law, not just in scholarship.** In **2021 the Washington Legislature passed House Bill 1335**, which charged the project with identifying neighborhoods covered by racist deed provisions statewide, and which created a process for a current owner to have the language struck from their own title (Gregory, n.d.). **A research project became a state mandate**, which is itself a civics fact: the state decided that mapping the restriction was a public duty. Section 5 puts you into the removal process directly.

**What a careful reader gets out of this archive, in order of how much it is worth.**

**1. It gives you a geography of exclusion, block by block.** The database is arranged by region, beginning with Seattle neighborhoods, then the Eastside suburbs, north and south King County, and the islands (Gregory, n.d.). You can see which neighborhoods were blanketed with covenants and which were not. **That is a testable map, not an impression.** Many of the covenanted areas are north-end and outlying neighborhoods, the same areas from which Black families were effectively barred.

**2. It shows you the language, so you do not have to take anyone's word for it.** The deeds restrict occupancy to the "white" or "Caucasian" race, and some name excluded groups directly (Gregory, n.d.). **You read the clause, then you read who signed it and recorded it.** A covenant is a public record with a date and a recording number.

**3. It shows you the reach beyond Black exclusion.** Washington covenants barred not only Black residents but also Asian and, in some deeds, Jewish residents (Gregory, n.d.). **A single instrument aimed at several communities at once** is a fact you will need when Section 1 turns, in the next lesson, to the removal of Japanese Americans. The paper that excluded and the policy that removed are different instruments against overlapping communities.

**What this archive does NOT prove, and the limit is the lesson.**
- **A covenant is a restriction, not a census.** A deed barring nonwhite occupancy tells you the neighborhood was closed. It does not tell you who lived one street over, or how the rule was enforced in any single case. For that you need directories, censuses, and court records.
- **Absence of a covenant is not proof of openness.** Exclusion also ran through lending, real estate steering, and violence, none of which leaves a covenant. **The 80,000 properties are the documented floor, not the ceiling** of how the region was closed.
- **A struck covenant is not an undone history.** *Shelley v. Kraemer* made these clauses judicially unenforceable in 1948, which Section 3 covers, but the language stayed in the deeds and the segregation it built stayed on the ground.

**The research move.** When you want to know why a Seattle neighborhood looks the way it does, **do not start with today's prices. Start with the deed.** The deed is dated, recorded, and public, and much of it is already scanned and searchable. Everything downstream, the demographics, the schools, the disputes of Section 3, is easier to read once you have seen the original restriction.

## Sources
- Gregory, J. (n.d.). *Racial restrictive covenants project*. University of Washington. https://depts.washington.edu/covenants/
- Seattle Civil Rights and Labor History Project. (n.d.). *Racial restrictive covenants*. University of Washington. https://depts.washington.edu/civilr/covenants.htm
- Substitute House Bill 1335, 67th Leg., Reg. Sess. (Wash. 2021). https://depts.washington.edu/covenants/shb1335.shtml`,
      recallContent: [
        {
          prompt: "What is a racially restrictive covenant, and what does it mean that it 'runs with the land'?",
          answer: "A clause in a property deed barring sale, rental, or occupancy by people outside a named race. Running with the land means it binds later owners, not only the person who signed it, so it segregates a neighborhood in advance.",
        },
        {
          prompt: "How did covenants segregate differently from a refusal at the point of sale?",
          answer: "They segregated in advance. Whole neighborhoods were made legally closed to nonwhite buyers before anyone applied, rather than keeping a record of individuals turned away.",
        },
        {
          prompt: "Where were Seattle's Black residents concentrated, and why does the course say the concentration is a consequence rather than a preference?",
          answer: "In the Central District, east of downtown. Most of the city was closed by covenant and, from the 1930s, marked risky by federal mortgage maps, so the concentration follows from restriction and has a paper trail.",
        },
        {
          prompt: "Why does this course refuse to reproduce one specific Seattle deed's covenant wording verbatim?",
          answer: "Because it could not pin one specific deed's exact text to a citable source while authoring. It describes the documented exclusionary formulas, attributes them, and sends the learner to the UW covenants archive to read actual deeds. Reporting the gap is the honest move.",
        },
      ],
    },
    {
      slug: "sea-then-removal",
      title: "3 · Bainbridge Island, 1942: the first removal",
      section: "Section 1 · Then",
      body: `**This lesson is one to handle with care, and the care is a method, not a mood.** A covenant closed a neighborhood. What happened on Bainbridge Island was different in kind: a government did not bar people from moving in, it forced people out of their own homes. Name the people, date the orders, and describe the memorial as the community that built it describes it.

**What happened, and when.** Bainbridge Island sits in Puget Sound, a short ferry ride west of Seattle. After the attack on Pearl Harbor, President Franklin Roosevelt signed **Executive Order 9066 on February 19, 1942**, authorizing the military to designate areas from which any persons could be excluded (Exec. Order No. 9066, 1942). The first exclusion order issued under it, **Civilian Exclusion Order No. 1**, targeted Bainbridge Island, because of its proximity to the naval facilities across the water (Densho, n.d.; HistoryLink, n.d.-a).

**The count, given precisely, with the distinction kept.** On **March 30, 1942**, with six days' notice, **227 Japanese Americans were removed from Bainbridge Island by soldiers and put on a ferry**, then sent by train to the **Manzanar** site in California (HistoryLink, n.d.-a). The island's total Japanese American population at the time was about **276**; those who were away for study, work, or military service were not permitted to return (HistoryLink, n.d.-a). **227 removed that day, out of about 276 residents. Keep both numbers and keep the difference between them**, because the gap is people who lost their homes without being on the ferry.

**Who they were, so the removal is not abstract.** The island's Japanese American families were largely farmers, many of them strawberry growers, whose land and crops were part of the island's economy. **They were the first community in the country incarcerated under Executive Order 9066** (HistoryLink, n.d.-a; Densho, n.d.). Most were United States citizens by birth. Removal was not charged to any act any of them had committed, and no such act was ever alleged: it was applied to a community by ancestry.

**The memorial, described as its keepers describe it.** The **Bainbridge Island Japanese American Exclusion Memorial** stands at Pritchard Park, near the site of the ferry dock where the removal began. Its guiding phrase is **"Nidoto Nai Yoni," which the community translates as "Let it not happen again"** (Bainbridge Island Japanese American Community, n.d.). The heart of it is a long wooden wall carrying **the names and ages of the island's Japanese American residents of 1942** (Bainbridge Island Japanese American Community, n.d.). The memorial is administered as part of **Minidoka National Historic Site** within the National Park System (National Park Service, n.d.). **A wall of names with ages on it is a design decision.** It refuses the abstraction of a total and insists on a person for every line, which is exactly the discipline this course asks of your own writing.

**Why this belongs in a course about covenants and schools.** Two reasons, and both are about instruments.
1. **Different instrument, overlapping targets.** The covenant excluded by ancestry through private deeds. The removal excluded by ancestry through a federal military order. **The community harmed overlaps, and the mechanism is entirely different**, which is precisely why you name the instrument every time rather than reaching for a single word like "racism" that hides the machinery.
2. **The record is public and the community is self-documenting.** The names are on a wall the community built. The exclusion orders are federal records. **You are never working from memory here**, and neither should your writing be.

**A rule for writing about this, which Section 6 will hold you to.** Do not treat the removal as an adventure, a drama, or a backdrop for someone's growth. **It was an accountability failure by a government against its own citizens**, later acknowledged as such when the United States formally apologized and paid redress under the Civil Liberties Act of 1988. Write it with the names, the dates, and the numbers, and let those carry the weight.

## Sources
- Bainbridge Island Japanese American Community. (n.d.). *Exclusion memorial*. https://bijac.org/exclusion-memorial/
- Densho. (n.d.). *Photo essay: Exclusion Order No. 1, Bainbridge Island*. https://densho.org/catalyst/photo-essay-bainbridge-island/
- Exec. Order No. 9066, 7 Fed. Reg. 1407 (Feb. 19, 1942). https://www.archives.gov/milestone-documents/executive-order-9066
- HistoryLink. (n.d.-a). *Bainbridge Island's Japanese American residents, first to be incarcerated under Executive Order 9066, are removed from their homes on March 30, 1942*. https://www.historylink.org/File/8277
- National Park Service. (n.d.). *Bainbridge Island Japanese American Exclusion Memorial, Minidoka National Historic Site*. https://www.nps.gov/miin/index.htm`,
      recallContent: [
        {
          prompt: "Who runs the Racial Restrictive Covenants Project, and what makes it an unusual kind of source?",
          answer: "Historian James Gregory at the University of Washington, with Larry Cebula at Eastern Washington University. It is a searchable archive of the primary documents, the deeds themselves, rather than a summary you have to trust.",
        },
        {
          prompt: "Give the scale figures the project reports for Washington and for King County.",
          answer: "More than 80,000 restricted properties statewide, found by examining more than 7 million property records; King County, which contains Seattle, alone accounts for more than 37,000 restricted properties.",
        },
        {
          prompt: "What did Washington House Bill 1335 (2021) do?",
          answer: "It charged the project with identifying neighborhoods covered by racist deed provisions statewide and created a process for a current owner to have the covenant language struck from their own property title.",
        },
        {
          prompt: "Name two things the covenants archive does NOT prove.",
          answer: "It is a restriction, not a census, so it does not tell you who lived where or how a rule was enforced in a given case; and the absence of a covenant is not proof of openness, because lending, steering, and violence excluded people without leaving a covenant. The documented properties are a floor, not a ceiling.",
        },
      ],
    },
    {
      slug: "sea-then-quiz",
      title: "4 · Quiz: who could live where",
      section: "Section 1 · Then",
      quiz: {
        passingScore: 70,
        // 15-question bank served 8 at a time with shuffled options (the repo standard), so a
        // retake is a different quiz and no answer is reachable by a fixed screen slot.
        questionsPerAttempt: 8,
        shuffleOptions: true,
        questions: [
          {
            prompt: "A racially restrictive covenant is best described as:",
            options: [
              "A city zoning ordinance",
              "A federal mortgage program",
              "A clause in a property deed barring sale, rental, or occupancy by people outside a named race, which binds later owners",
              "A rule set by a neighborhood association after a sale",
            ],
            correctIndex: 2,
            explanation: "Because it runs with the land, it binds later owners and segregates a neighborhood in advance rather than at the point of an individual sale.",
            sourceLessonSlug: "sea-then-who-could-live-where",
          },
          {
            prompt: "Which prerequisite course does this one bookend, and on what point?",
            options: [
              "The Gym and the Color Line, on the school district line and what a court could compel under Milliken",
              "The Green Book, on how to read a listing",
              "A course on Seattle architecture",
              "A course on the Civil Liberties Act of 1988",
            ],
            correctIndex: 0,
            explanation: "The gym course read Milliken through Indianapolis; this course takes the modern end of the same argument, Parents Involved v. Seattle, on what a district could voluntarily choose.",
            sourceLessonSlug: "sea-then-who-could-live-where",
          },
          {
            prompt: "The University of Washington's Racial Restrictive Covenants Project reports locating racist deed provisions on roughly how many Washington properties?",
            options: ["About 500", "About 5,000", "About 800", "More than 80,000, examined across more than 7 million property records"],
            correctIndex: 3,
            explanation: "King County, which contains Seattle, alone accounts for more than 37,000 of them. This was the default for much new residential development, not a handful of enclaves.",
            sourceLessonSlug: "sea-then-covenants-archive",
          },
          {
            prompt: "What did Washington House Bill 1335 (2021) do?",
            options: [
              "Banned the sale of homes with old covenants",
              "Charged the covenants project with mapping racist deed provisions statewide and created a process for an owner to strike the language from their own title",
              "Made covenants enforceable again",
              "Required schools to teach the covenants",
            ],
            correctIndex: 1,
            explanation: "A research project became a state mandate: the state treated mapping the restriction as a public duty.",
            sourceLessonSlug: "sea-then-covenants-archive",
          },
          {
            prompt: "Why does the course say the concentration of Black Seattle in the Central District is a consequence rather than a preference?",
            options: [
              "Because residents said so in a survey",
              "Because the Central District had the best housing",
              "Because most of the city was closed by covenant and, from the 1930s, marked risky by federal mortgage maps, so the concentration follows from restriction and has a paper trail",
              "Because the schools there were better",
            ],
            correctIndex: 2,
            explanation: "A concentration that severe traces to documented restriction across the rest of the city, not to choice.",
            sourceLessonSlug: "sea-then-who-could-live-where",
          },
          {
            prompt: "Beyond Black residents, Washington covenants also barred:",
            options: [
              "Asian and, in some deeds, Jewish residents",
              "Only Catholic residents",
              "Renters of any race",
              "Only noncitizens",
            ],
            correctIndex: 0,
            explanation: "A single instrument aimed at several communities at once, which matters when Section 1 turns to the removal of Japanese Americans.",
            sourceLessonSlug: "sea-then-covenants-archive",
          },
          {
            prompt: "Which executive order authorized the exclusion, and when was it signed?",
            options: [
              "Executive Order 8802, signed 1941",
              "Executive Order 9066, signed February 19, 1942",
              "Executive Order 9981, signed 1948",
              "The Civil Liberties Act, signed 1988",
            ],
            correctIndex: 1,
            explanation: "Civilian Exclusion Order No. 1, the first issued under it, targeted Bainbridge Island because of its proximity to naval facilities.",
            sourceLessonSlug: "sea-then-removal",
          },
          {
            prompt: "On March 30, 1942, how many Japanese Americans were removed from Bainbridge Island, and how many lived there in total?",
            options: [
              "About 1,000 removed, out of 1,200",
              "50 removed, out of 60",
              "227 removed by ferry, out of a total island Japanese American population of about 276",
              "276 removed, out of 276",
            ],
            correctIndex: 2,
            explanation: "The gap between 227 and 276 is people who were away for study, work, or military service and were not allowed to return.",
            sourceLessonSlug: "sea-then-removal",
          },
          {
            prompt: "Where were the Bainbridge Islanders first taken?",
            options: [
              "Minidoka, Idaho",
              "Tule Lake, California",
              "Manzanar, California",
              "They were released within a week",
            ],
            correctIndex: 2,
            explanation: "They were ferried out and sent by train to the Manzanar site in California, the first community in the country incarcerated under Executive Order 9066.",
            sourceLessonSlug: "sea-then-removal",
          },
          {
            prompt: "The Bainbridge memorial's guiding phrase 'Nidoto Nai Yoni' is translated by the community as:",
            options: ["Never forget", "Let it not happen again", "We are still here", "Home at last"],
            correctIndex: 1,
            explanation: "Its heart is a long wooden wall carrying the names and ages of the island's 1942 Japanese American residents, a design that insists on a person for every line.",
            sourceLessonSlug: "sea-then-removal",
          },
          {
            prompt: "The covenants archive is unusual as a historical source because:",
            options: [
              "It is a searchable archive of the primary documents, the deeds themselves, rather than a summary you must trust",
              "It is the only record of Seattle housing",
              "It was written by the covenant signers",
              "It is not available to the public",
            ],
            correctIndex: 0,
            explanation: "You read the clause, then who signed and recorded it. A covenant is a public record with a date and a recording number.",
            sourceLessonSlug: "sea-then-covenants-archive",
          },
          {
            prompt: "What does the course say about a covenant being struck from a deed?",
            options: [
              "It restores the neighborhood's original population",
              "It never happened",
              "It was automatic after 1948",
              "A struck covenant is not an undone history: Shelley v. Kraemer made the clauses unenforceable in 1948, but the language stayed and the segregation it built stayed",
            ],
            correctIndex: 3,
            explanation: "Enforceability and effect are different things, a distinction Section 3 develops.",
            sourceLessonSlug: "sea-then-covenants-archive",
          },
          {
            prompt: "Why does the course insist on naming the instrument rather than using a single word like 'racism'?",
            options: [
              "Because the covenant and the 1942 removal hit overlapping communities through entirely different machinery, so naming the instrument keeps the mechanism visible",
              "Because 'racism' is inaccurate",
              "Because the word is banned in the archive",
              "Because covenants were not about race",
            ],
            correctIndex: 0,
            explanation: "A private deed and a federal military order are different instruments; the single word hides which one did the work.",
            sourceLessonSlug: "sea-then-removal",
          },
          {
            prompt: "Which best states what the covenants archive does NOT prove?",
            options: [
              "That covenants existed",
              "That covenants named excluded groups",
              "Who lived on any given street, or how a rule was enforced in a given case, since it is a restriction and not a census, and its 80,000 properties are a floor not a ceiling",
              "That King County had covenants",
            ],
            correctIndex: 2,
            explanation: "Lending, steering, and violence also excluded people without leaving a covenant, so the documented count understates the closure.",
            sourceLessonSlug: "sea-then-covenants-archive",
          },
          {
            prompt: "Most of Bainbridge Island's Japanese American families made their living as:",
            options: [
              "Farmers, many of them strawberry growers",
              "Shipyard workers",
              "Fishermen only",
              "Downtown Seattle merchants",
            ],
            correctIndex: 0,
            explanation: "Most were United States citizens by birth, and no act by any of them was alleged; the removal was applied by ancestry.",
            sourceLessonSlug: "sea-then-removal",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 2 · Built  (beat 2: neighborhoods and what the built form encodes)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "sea-built-central-district",
      title: "5 · The Central District: what a closed city built",
      section: "Section 2 · Built",
      body: `Beat 2 of the site template asks **why does it look like that?** For a neighborhood the answer starts before style, with the question of who was allowed to be there and what they built inside the limit.

**The shape of the constraint.** By the 1920s, covenants and, later, federal mortgage maps had made most of Seattle closed to Black buyers. The **Central District**, sometimes called the Central Area, is the roughly square set of neighborhoods east of downtown and south of Capitol Hill where Seattle's Black community concentrated. In the middle decades of the twentieth century, by several accounts, a large majority of the city's Black residents lived there (KUOW, 2016; BlackPast, n.d.). **Read that as a floor plan.** A community pressed into a small area builds density into that area, because it has nowhere else to build.

**What a constrained community built, and the point is that it is a full community, not a strip.** The Central District held Black churches that doubled as organizing halls, Black-owned businesses, a jazz and rhythm-and-blues scene along **Jackson Street** that produced nationally known musicians, mutual aid and civil rights organizations, and the everyday institutions of a place people lived their whole lives in (Seattle Civil Rights and Labor History Project, n.d.; BlackPast, n.d.). **This is the same finding the Indiana Avenue course reached about a different city:** a district built under exclusion is not entertainment, it is infrastructure for ordinary life, assembled because the wider city refused to provide it.

**The built form encodes the constraint, if you know how to read it.**
- **Churches larger than a small congregation would build**, because the church was also the meeting hall, the relief agency, and the political base.
- **Commercial buildings mixing uses**, because a community that could not spread out stacked functions instead.
- **A dense residential fabric**, because the covenant belt around it left no room to expand outward.

**Capitol Hill, and the belt of exclusion, read from the other side.** Just north and west, neighborhoods like Capitol Hill and much of the north end carried the covenants of Lesson 2. **The Central District's density and the north end's exclusivity are the same fact seen from two sides.** One neighborhood is crowded because the others are closed. When you look at a Seattle map of where covenants were thickest and lay it over a map of where Black Seattle lived, the two are near mirror images, and that is not a coincidence, it is a mechanism (Gregory, n.d.).

**What the built form does not tell you, and Section 5 will.** A building's current use is not its original use, and a facade does not carry a deed. **The church that is now condominiums, the club that is now a chain store: those are changes with dates and owners**, and beat 4 sends you to look while beat 5 sends you to the records. Lesson 6 takes the single hardest question in this section, which is what happened to the Central District's population, and insists that you keep the competing explanations apart.

## Sources
- BlackPast. (n.d.). *Gentrification, integration or displacement?: The Seattle story*. https://www.blackpast.org/african-american-history/gentrification-integration-or-displacement-seattle-story/
- Gregory, J. (n.d.). *Racial restrictive covenants project*. University of Washington. https://depts.washington.edu/covenants/
- KUOW. (2016). *Race matters: Understanding how the Central Area was gentrified*. https://www.kuow.org/stories/race-matters-understanding-how-the-central-area-was-gentrified
- Seattle Civil Rights and Labor History Project. (n.d.). *Seattle's Central District*. University of Washington. https://depts.washington.edu/civilr/`,
      recallContent: [
        {
          prompt: "What order authorized the removal, and what was the first exclusion order issued under it?",
          answer: "Executive Order 9066, signed February 19, 1942, authorized the military to designate exclusion areas. Civilian Exclusion Order No. 1, the first issued under it, targeted Bainbridge Island because of its proximity to naval facilities.",
        },
        {
          prompt: "Give the two Bainbridge numbers and the distinction between them.",
          answer: "On March 30, 1942, 227 Japanese Americans were removed and ferried out, then sent to Manzanar. The island's total Japanese American population was about 276; those away for study, work, or service were not allowed to return. The gap is people who lost their homes without being on the ferry.",
        },
        {
          prompt: "Describe the memorial as its keepers describe it.",
          answer: "The Bainbridge Island Japanese American Exclusion Memorial at Pritchard Park, near the ferry site, guided by 'Nidoto Nai Yoni,' translated as 'Let it not happen again.' Its heart is a long wooden wall carrying the names and ages of the island's 1942 Japanese American residents. It is administered as part of Minidoka National Historic Site.",
        },
        {
          prompt: "Why does the course insist on naming the instrument rather than using a single word like 'racism'?",
          answer: "Because the covenant and the removal targeted overlapping communities through entirely different machinery, a private deed versus a federal military order. Naming the instrument keeps the mechanism visible instead of hiding it behind one word.",
        },
      ],
    },
    {
      slug: "sea-built-demographic-change",
      title: "6 · What happened to the Central District, and keeping the causes apart",
      section: "Section 2 · Built",
      body: `**This is the lesson where you must be most careful, because it is the part of the story most often told with the machinery hidden.** The Central District changed from a majority-Black neighborhood to a small-minority-Black one within living memory. What caused that change is contested, and the contest is not decoration. **Two of the leading explanations are different claims, with different dates and different mechanisms, and collapsing them into one is the error.**

**The change, in figures given with their owners.** In the 1960s and 1970s, by several accounts, something like **78 to 90 percent of Seattle's Black population lived in the Central District**, and its census tracts ran from roughly **40 to 90 percent Black in 1970** (KUOW, 2016; BlackPast, n.d.). By **2020, those same tracts were on the order of 7 to 17 percent Black**, and the neighborhood's Black share had fallen below ten percent in parts (BlackPast, n.d.; KUOW, 2016). **Treat those as reported ranges from journalism and public history, not as surveyed constants**, and cite them the way this course cites them, with the outlet attached. The direction is not in dispute. The precise figures depend on which tract and which year, which is exactly why you carry the source.

**Now the causes, kept deliberately apart.**

**Claim A: earlier policy.** Covenants closed the rest of the city; federal mortgage maps from the 1930s marked the Central District and similar areas as risky, discouraging investment; and disinvestment held property values down for decades (KUOW, 2016; Systemic Justice Project, n.d.). **This claim is about the middle of the century, and its mechanism is exclusion and disinvestment.** It explains why the neighborhood was Black and poor in property value in the first place.

**Claim B: later gentrification and displacement.** Beginning in the 1990s, the same historically depressed property values rose sharply, taxes and rents climbed, and long-time residents and businesses left or were priced out (KUOW, 2016; Systemic Justice Project, n.d.). **This claim is about the end of the century onward, and its mechanism is a rising market acting on a neighborhood that earlier policy had made cheap.**

**Why these are different claims, and why the distinction is the lesson.**
1. **They have different dates.** Claim A is a mid-century story of closure. Claim B is a turn-of-the-century story of a market. **A sentence that blames "gentrification" for the whole arc gets the first half wrong**, and a sentence that blames only "redlining" gets the second half wrong.
2. **They have different actors.** Claim A names governments and lenders and covenant signers. Claim B names buyers, developers, and a tax and price structure. **Different people are responsible in each**, which is precisely why you do not merge them.
3. **They are causally linked without being the same.** The honest reading is that the two connect: earlier policy produced the depressed values that later made the neighborhood attractive to capital (Systemic Justice Project, n.d.). **That is a sequence, not a synonym.** "Policy made it cheap, then the market took it" is a defensible sentence. "Gentrification segregated the Central District" is not.

**What this course will not do.** It will not hand you a single villain, because the record does not support one, and it will not tell you the two claims are interchangeable, because they are not. **It will tell you that the neighborhood was made by exclusion and remade by a market, in that order, and that the two are connected and distinct.** When you write about a changing neighborhood, name which claim you are making, attach a date, and cite the figure. That is the whole discipline.

**One more caution, carried from the models.** The Central District is a living neighborhood with residents and organizations today, including people working to keep and reclaim Black institutions there. **Do not write it as a neighborhood that ended.** It changed, the change is documented, and the community narrating that change is still there to be quoted.

## Sources
- BlackPast. (n.d.). *Gentrification, integration or displacement?: The Seattle story*. https://www.blackpast.org/african-american-history/gentrification-integration-or-displacement-seattle-story/
- KUOW. (2016). *Race matters: Understanding how the Central Area was gentrified*. https://www.kuow.org/stories/race-matters-understanding-how-the-central-area-was-gentrified
- Systemic Justice Project, Harvard Law School. (n.d.). *Redlining and disinvestment: A case study on racial segregation and gentrification throughout Seattle's Central District*. https://systemicjustice.org/article/redlining-and-disinvestment-a-case-study-on-racial-segregation-and-gentrification-throughout-seattles-central-district/`,
      recallContent: [
        {
          prompt: "Where is the Central District, and what does the course mean by reading it as a floor plan?",
          answer: "The neighborhoods east of downtown and south of Capitol Hill, where a large majority of Seattle's Black residents lived in the mid twentieth century. Read as a floor plan, a community pressed into a small area builds density into it because it has nowhere else to build.",
        },
        {
          prompt: "Why does the course call the Central District infrastructure rather than entertainment?",
          answer: "Because a district built under exclusion held churches doubling as organizing halls, Black-owned businesses, a Jackson Street music scene, and mutual aid and civil rights organizations, assembled because the wider city refused to provide them. It is the same finding as the Indiana Avenue course.",
        },
        {
          prompt: "How are the Central District's density and the north end's exclusivity the same fact from two sides?",
          answer: "One neighborhood is crowded because the others are closed. A map of where covenants were thickest laid over a map of where Black Seattle lived shows near mirror images, which is a mechanism, not a coincidence.",
        },
        {
          prompt: "Name two ways the built form encodes the constraint.",
          answer: "Churches larger than a small congregation would build because the church was also the meeting hall and political base; and a dense residential fabric because the covenant belt left no room to expand outward.",
        },
      ],
    },
    {
      slug: "sea-built-memorial",
      title: "7 · The memorial as built form, and what a designation does",
      section: "Section 2 · Built",
      body: `Section 1 gave you the removal as an event. Beat 2 asks you to read the thing built afterward, because **a memorial is a building type with a job, and the job is legible in the form.**

**Return to Bainbridge, now as architecture.** The **Bainbridge Island Japanese American Exclusion Memorial** sits at Pritchard Park on Eagle Harbor, at the ground where the ferry left on March 30, 1942 (Bainbridge Island Japanese American Community, n.d.). **Siting is the first design decision, and this one is exact.** The memorial is not in a civic plaza or a cemetery. It is at the place the removal physically happened, which makes the ground itself part of the evidence. A memorial you can only reach by standing where the ferry docked is arguing that place matters, which is the same argument this whole course makes.

**The form, and what it refuses.** The centerpiece is a long curving wall, built in wood, carrying **the names and ages of the island's Japanese American residents of 1942** (Bainbridge Island Japanese American Community, n.d.). Two design choices do the work.
1. **Names and ages, not a total.** A number would let a visitor round the loss into a statistic. A wall of names with ages beside them puts a child's age next to a name and refuses that rounding. **The form encodes the ethic: a person per line.**
2. **Wood, not stone.** Wood weathers and must be maintained, which means the memorial requires the ongoing care of the living community to persist. **A memorial that must be tended is a different civic object than one carved to outlast everyone.** It is a commitment renewed, not a monument left behind.

**Designation, and what it actually does, carried from the sibling courses.** The memorial is administered as part of **Minidoka National Historic Site** within the National Park System (National Park Service, n.d.). Federal recognition of this kind does real work: it brings the site into the national park framework, its interpretation, and its funding and protection. **But keep the distinction the Indiana Avenue and gym courses both taught:** federal recognition is recognition plus stewardship and leverage. It is not, by itself, a local zoning control, and the everyday protection of any American place still runs through local ordinance and the community that shows up. **Ask of any commemorated site: who lists it, who funds it, and who keeps it, because those are three different answers.**

**Why a memorial belongs in beat 2 and not beat 1.** Beat 1 is what happened. Beat 2 is what got built and what the building encodes. **The removal is history; the memorial is a built argument about that history, made by the people it happened to.** Reading it as architecture, siting, material, and form, is how you tell a commemoration that does careful work from one that decorates a loss. This one does careful work, and it tells you so in wood and names.

**A bridge to Section 3.** Everything in Sections 1 and 2 has been about who could live where and what got built in the limits. Section 3 turns to the instruments: the covenant as a legal object, the school assignment plans Seattle adopted and had struck, and the two Supreme Court opinions that bracket the argument. **You now know the ground. Next you learn the powers that shaped it.**

## Sources
- Bainbridge Island Japanese American Community. (n.d.). *Exclusion memorial*. https://bijac.org/exclusion-memorial/
- Densho. (n.d.). *Photo essay: Exclusion Order No. 1, Bainbridge Island*. https://densho.org/catalyst/photo-essay-bainbridge-island/
- National Park Service. (n.d.). *Bainbridge Island Japanese American Exclusion Memorial, Minidoka National Historic Site*. https://www.nps.gov/miin/index.htm`,
      recallContent: [
        {
          prompt: "Give the Central District's Black-share change with the discipline the course requires.",
          answer: "In the 1960s and 1970s, by several accounts, roughly 78 to 90 percent of Seattle's Black population lived there and its tracts ran about 40 to 90 percent Black in 1970; by 2020 those tracts were on the order of 7 to 17 percent Black. Report them as journalism and public-history ranges with the outlet attached, not as surveyed constants.",
        },
        {
          prompt: "State Claim A and Claim B, with their different dates and mechanisms.",
          answer: "Claim A, earlier policy: covenants and 1930s mortgage maps and decades of disinvestment made the neighborhood Black and depressed in value, a mid-century story of exclusion. Claim B, later gentrification and displacement: from the 1990s, rising values, taxes, and rents priced out long-time residents, a turn-of-the-century story of a market.",
        },
        {
          prompt: "Why must the two claims be kept apart rather than merged?",
          answer: "They have different dates and different responsible actors. Blaming gentrification for the whole arc gets the mid-century wrong; blaming only redlining gets the recent decades wrong. They are causally linked, earlier policy made the neighborhood cheap and the market later took it, which is a sequence, not a synonym.",
        },
        {
          prompt: "What is the defensible one-sentence version, and the indefensible one?",
          answer: "Defensible: policy made it cheap, then the market took it. Indefensible: gentrification segregated the Central District. Name which claim you are making, attach a date, and cite the figure.",
        },
      ],
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 3 · Powers  (beat 3: THE LOAD-BEARING SECTION)
    //   covenants (instrument) -> the school assignment plans -> Milliken and Parents Involved
    //   read together. Operative language quoted directly from the opinions.
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "sea-powers-covenant-instrument",
      title: "8 · Instrument one: the covenant, and Shelley v. Kraemer",
      section: "Section 3 · Powers",
      body: `**This is the section the whole course exists for.** Sections 1 and 2 established what was here and what got built. This section teaches the tools, because **a city's segregation is not weather. It is a set of instruments, each exercised by a specific body, under a specific rule, leaving a specific document.** Learn the instruments and you can read any American city, which is the transferable skill this cluster is built to teach.

**Instrument one is the covenant, now examined as a legal object.** You met it in Section 1 as a clause in a deed. Here is what made it powerful and what finally limited it.

**What gave it force.** A covenant was a private contract, but it was enforceable in court. If a covenanted property was sold to a barred buyer, a neighbor could sue to void the sale, and courts would enforce the restriction. **That judicial enforcement is the whole ballgame.** A private prejudice becomes a public instrument the moment a court will back it with the power of the state.

**The case that changed it: *Shelley v. Kraemer* (1948).** A Black family, the Shelleys, bought a home in St. Louis subject to a covenant; neighbors sued to block them. The Supreme Court held, unanimously, that **judicial enforcement of a racially restrictive covenant is state action that violates the Equal Protection Clause of the Fourteenth Amendment** (*Shelley v. Kraemer*, 1948). The covenants themselves, as private agreements, were not made illegal. **What became unconstitutional was a court enforcing one.**

**Read the limit of that holding precisely, because it is the point.** *Shelley* did three things and did not do a fourth.
1. It made covenants **judicially unenforceable**. A court could no longer void a sale to enforce one.
2. It did **not** strike the language out of existing deeds. The clauses stayed in the records, which is why the covenants project can still read them today.
3. It did **not** bar private discrimination by other means: an owner could still refuse to sell, a lender could still refuse to lend, an agent could still steer. **Enforcement by a court was closed; the rest of the machinery kept running.**
4. It did **not** undo the segregation the covenants had already built. **A neighborhood closed for thirty years does not reopen because the closing clause lost its teeth.**

**The modern coda, which is a live civics fact.** Because the language stayed in the deeds, Washington's **House Bill 1335 (2021)** created a process for a current owner to have a covenant formally struck from their own title, and the King County Recorder's Office runs that process (King County, n.d.; Substitute House Bill 1335, 2021). **Seventy-three years separate the clause becoming unenforceable from a clean way to remove it from your own deed**, and the removal is still voluntary and owner-by-owner. Section 5 has you walk that process.

**The research move, unchanged from the sibling courses.** If you want to know why a Seattle neighborhood is shaped the way it is, do not start with today. **Start with the instrument: the deed, its covenant, its date, its recording number, and the case law that did and did not limit it.** The instrument is dated and public. Everything downstream is easier to read once you have it.

**What this course will not claim.** It will not tell you that a covenant on a given block explains every later fact about that block, because that is a claim about causation this course has not traced parcel by parcel. **It will tell you that the instrument existed, that it was enforceable until 1948, that it was made unenforceable but not erased, and that the record is public.** That is an honest place to stand, and it is the ground the next lesson builds on when it turns from housing to schools.

## Sources
- King County. (n.d.). *Restrictive covenants*. https://kingcounty.gov/en/dept/executive-services/certificates-permits-licenses/records-licensing/recorders-office/restrictive-covenants
- Shelley v. Kraemer, 334 U.S. 1 (1948). https://www.law.cornell.edu/supremecourt/text/334/1
- Substitute House Bill 1335, 67th Leg., Reg. Sess. (Wash. 2021). https://depts.washington.edu/covenants/shb1335.shtml
- U.S. Const. amend. XIV.`,
      recallContent: [
        {
          prompt: "Why is the memorial's siting at Pritchard Park a design decision?",
          answer: "It stands at the exact ground where the ferry left on March 30, 1942, not in a civic plaza or cemetery. Placing it where the removal physically happened makes the ground part of the evidence and argues that place matters.",
        },
        {
          prompt: "What do the two central design choices, names-and-ages and wood, encode?",
          answer: "Names and ages rather than a total refuse the rounding of loss into a statistic, one person per line. Wood, which weathers and must be maintained, makes the memorial a commitment the living community renews rather than a monument left behind.",
        },
        {
          prompt: "What does federal designation as part of Minidoka National Historic Site do, and not do?",
          answer: "It brings the site into the national park framework with its interpretation, funding, and stewardship. It is recognition plus leverage, not by itself a local zoning control; everyday protection of any place still runs through local ordinance and the community that maintains it.",
        },
        {
          prompt: "Why does the memorial belong in beat 2 rather than beat 1?",
          answer: "Beat 1 is what happened; beat 2 is what got built and what the built form encodes. The removal is history; the memorial is a built argument about that history made by the people it happened to, read through siting, material, and form.",
        },
      ],
    },
    {
      slug: "sea-powers-school-plans",
      title: "9 · Instrument two: the school assignment plan",
      section: "Section 3 · Powers",
      body: `**A covenant decides who lives on a block. A school assignment plan decides which school a child on that block attends.** When housing is segregated, neighborhood-based school assignment reproduces the housing pattern automatically. Seattle spent decades trying to break that link voluntarily, and the story of those attempts is the setup for the two opinions that follow.

**The starting condition.** Because covenants and lending had concentrated Black Seattle in the Central District, its neighborhood schools were heavily Black while much of the rest of the city's were heavily white. **No court had ordered this and no law required it by the mid century; the housing map produced it.** That distinction, segregation without a current legal command, is exactly the distinction the 2007 opinion turns on, so fix it now.

**The Seattle Plan (1978), and a claim handled with attribution.** In the late 1970s the Seattle School Board adopted a desegregation plan using mandatory reassignment and busing, and **district-wide busing began in September 1978** (HistoryLink, n.d.-b). Seattle is often described as **the first large American city to desegregate its schools voluntarily, without a court order compelling it** (HistoryLink, n.d.-c). **Attribute that superlative rather than adopting it flat:** write "HistoryLink and others describe Seattle as the first big city to do this voluntarily," and you have said something checkable. The plan drew a broad civic coalition and also drew opposition, which produced the next instrument.

**Initiative 350 (1978) and *Washington v. Seattle School District No. 1* (1982).** Opponents of busing passed a statewide ballot measure, **Initiative 350**, to prohibit school boards from assigning students away from their neighborhood schools for desegregation. Seattle challenged it, and in **1982 the Supreme Court struck Initiative 350 down**, holding that it unconstitutionally restructured the political process to burden racial minorities, who now had to go to the state rather than their local board to win integrative policies (*Washington v. Seattle School District No. 1*, 1982). **Hold this ruling, because it is the hinge of the whole section.** In 1982 the Supreme Court protected Seattle's voluntary choice to integrate from a state ban. **Twenty-five years later, a differently composed Court limited that same voluntary choice.** The reversal of direction is the story.

**The shift to choice, and the racial tiebreaker (1990s to 2000s).** Mandatory busing was unpopular and was phased out. Seattle replaced it with an **open-choice** plan: students could apply to any high school, and when a school was oversubscribed the district used a series of tiebreakers to fill it. One of those was a **racial tiebreaker**: at a school whose racial balance was far from the district's overall balance, the tiebreaker favored whichever applicant would move the school toward balance (*Parents Involved*, 2007). The district classified students as **"white" or "nonwhite"** for this purpose (*Parents Involved*, 2007). **That single binary classification is the fact the 2007 case is fought over.**

**Initiative 200 (1998), the state-law backdrop.** In 1998 Washington voters passed **Initiative 200**, which barred the state and its subdivisions from granting "preferential treatment" on the basis of race in public education, employment, and contracting (Ballotpedia, n.d.). **A race-conscious school tiebreaker sits in obvious tension with a state ban on racial preference**, and that tension is part of the legal weather around the federal case, even though the federal case was decided on the Fourteenth Amendment, not on Initiative 200.

**Line the instruments up before Section 3's climax.**
- The **covenant** segregated the housing.
- **Neighborhood assignment** turned segregated housing into segregated schools.
- The **Seattle Plan** tried to break that link by busing.
- **Initiative 350** tried to ban the busing; the Court protected the busing in 1982.
- The **racial tiebreaker** tried to break the link a gentler way, by choice plus a classification.
- And in 2007 the Court limited the tiebreaker. **The next two lessons read the two opinions, 1974 and 2007, that set the outer limits on all of it.**

## Sources
- Ballotpedia. (n.d.). *Washington Initiative 200, Affirmative Action Initiative (1998)*. https://ballotpedia.org/Washington_Initiative_200,_Affirmative_Action_Initiative_(1998)
- HistoryLink. (n.d.-b). *District-wide busing of students for racial balance begins in Seattle on September 29, 1978*. https://www.historylink.org/File/3351
- HistoryLink. (n.d.-c). *Busing in Seattle: A well-intentioned failure*. https://www.historylink.org/File/3939
- Parents Involved in Community Schools v. Seattle School District No. 1, 551 U.S. 701 (2007). https://www.law.cornell.edu/supremecourt/text/551/701
- Washington v. Seattle School District No. 1, 458 U.S. 457 (1982). https://www.law.cornell.edu/supremecourt/text/458/457`,
      recallContent: [
        {
          prompt: "What gave a racially restrictive covenant its force before 1948?",
          answer: "Judicial enforcement. A covenant was a private contract, but a court would enforce it, voiding a sale to a barred buyer, which turned a private prejudice into a public instrument backed by the state.",
        },
        {
          prompt: "What exactly did Shelley v. Kraemer (1948) hold?",
          answer: "That judicial enforcement of a racially restrictive covenant is state action violating the Equal Protection Clause of the Fourteenth Amendment. The covenants as private agreements were not made illegal; what became unconstitutional was a court enforcing one.",
        },
        {
          prompt: "Name two things Shelley did NOT do.",
          answer: "It did not strike the language from existing deeds, so the clauses remain readable today; it did not bar private discrimination by refusal, lending, or steering; and it did not undo the segregation the covenants had already built.",
        },
        {
          prompt: "What did Washington HB 1335 (2021) add, and why was it needed decades after Shelley?",
          answer: "Because Shelley left the language in the deeds, HB 1335 created a process, run through the King County Recorder's Office, for a current owner to have a covenant formally struck from their own title. Removal is still voluntary and owner-by-owner.",
        },
      ],
    },
    {
      slug: "sea-powers-milliken",
      title: "10 · Milliken v. Bradley (1974): what a court could compel",
      section: "Section 3 · Powers",
      body: `**On July 25, 1974, the Supreme Court decided a Detroit case, 5 to 4, and set the outer limit on what a court can order to undo school segregation.** The sibling course, *The Gym and the Color Line*, read this case through Indianapolis. This course reads it as the first of two bookends, because you cannot see what Seattle's 2007 case did without it.

## The facts, briefly and without embellishment

Detroit's public schools were found by a district court to be unlawfully segregated, with the State of Michigan implicated. The court concluded a remedy confined to Detroit could not work and ordered a metropolitan plan reaching **Detroit plus 53 of the 85 surrounding suburban school districts** (*Milliken v. Bradley*, 1974). **Hold that structure:** one heavily Black central district, a ring of separate heavily white districts, and a judge who concludes the ring is why a fix inside the center cannot succeed.

## What the Court held, in its own words

> "Before the boundaries of separate and autonomous school districts may be set aside by consolidating the separate units for remedial purposes or by imposing a cross-district remedy, it must first be shown that there has been a constitutional violation within one district that produces a significant segregative effect in another district." (*Milliken v. Bradley*, 1974, pp. 744-745.)

> "Thus an interdistrict remedy might be in order where the racially discriminatory acts of one or more school districts caused racial segregation in an adjacent district, or where district lines have been deliberately drawn on the basis of race." (*Milliken v. Bradley*, 1974, p. 745.)

And the reason the Court gave for the rule:

> "No single tradition in public education is more deeply rooted than local control over the operation of schools." (*Milliken v. Bradley*, 1974, p. 741.)

## What that does, stated without spin

**Before Milliken**, a federal court that found unlawful segregation in a city could, in principle, reach across district lines to fix it. **After Milliken**, it cannot, unless the plaintiffs prove something specific: that the segregation crossed the line **because someone made it cross**, by a discriminatory act in one or more districts, or by drawing the district line itself on the basis of race. **The district boundary becomes the default wall of the remedy**, defended by a value the Court names, local control of schools.

**Say what this instrument is, precisely.** Milliken is a limit on **compulsion**. It governs what a **court** may **order** over the objection of districts that did not themselves discriminate. It does not tell a district what it may or may not do on its own. **That is the whole reason it is only half of this section.** A limit on what a court can force leaves entirely open the question of what a willing district may voluntarily choose, and that open question is where Seattle's 2007 case lives.

**The through-line to remember.** In *Milliken*, the barrier to integration was that a court could not compel it across a line. The Detroit metropolitan plan was struck down, and cross-district remedies became rare. **Now watch the direction reverse.** The next lesson is a case where a district was not being ordered to do anything. It wanted, on its own, to keep its schools integrated, and the question was whether it was allowed to.

## Sources
- Milliken v. Bradley, 418 U.S. 717 (1974). https://www.law.cornell.edu/supremecourt/text/418/717
- U.S. Const. amend. XIV.`,
      recallContent: [
        {
          prompt: "Why did neighborhood-based assignment produce segregated Seattle schools without any current legal command?",
          answer: "Because covenants and lending had concentrated Black Seattle in the Central District, its neighborhood schools were heavily Black while others were heavily white. The housing map produced the school pattern; no court order or law required it. That distinction is what the 2007 case turns on.",
        },
        {
          prompt: "What was the Seattle Plan, and how should its 'first big city' claim be handled?",
          answer: "A late-1970s desegregation plan using mandatory reassignment and busing, with district-wide busing beginning September 1978. Attribute the claim that Seattle was the first large city to desegregate voluntarily to HistoryLink and others rather than adopting it flat.",
        },
        {
          prompt: "What did Initiative 350 try to do, and what did the Supreme Court do in 1982?",
          answer: "Initiative 350 (1978) tried to bar school boards from assigning students away from neighborhood schools for desegregation. In Washington v. Seattle School District No. 1 (1982), the Court struck it down as unconstitutionally restructuring the political process to burden racial minorities. In 1982 the Court protected Seattle's voluntary integration.",
        },
        {
          prompt: "How did the racial tiebreaker work, and what classification did it use?",
          answer: "Under open choice, when a high school was oversubscribed the district used tiebreakers; the racial tiebreaker favored whichever applicant would move a far-from-balance school toward the district's overall balance. It classified students as white or nonwhite, the binary the 2007 case is fought over.",
        },
      ],
    },
    {
      slug: "sea-powers-parents-involved",
      title: "11 · Parents Involved (2007): what a district could choose",
      section: "Section 3 · Powers",
      body: `**On June 28, 2007, the Supreme Court decided a Seattle case, 5 to 4, and set the outer limit on what a school district may voluntarily do with race in assignment.** This is the modern bookend. Read it slowly, because what it held and what it is said to have held are not the same, and the difference lives in a split between the opinions that is routinely flattened.

## The facts that make Seattle different from Milliken

**Seattle had never been segregated by law and was under no court order.** In the Court's own words:

> "The Seattle school district ... has never operated legally separate schools for students of different races, nor has it ever been subject to court-ordered desegregation." (*Parents Involved*, 2007, Part I.)

**Sit with that, because it flips the Milliken frame.** Milliken was about a court trying to compel an unwilling metropolitan area. Seattle was a willing district, ordered by no one, using a racial tiebreaker of its own choice to keep oversubscribed high schools from tipping far from the district's overall white-to-nonwhite balance (*Parents Involved*, 2007). The parents who sued were not seeking integration; they objected that their children had been classified by race and assigned accordingly. **The question was not "can a court compel this" but "may a district choose this."**

## What five Justices agreed on

A majority of five, including Justice Kennedy, held that **these specific plans were unconstitutional.** The plans assigned individual students using a racial classification, and the Court held that this use of race did not survive strict scrutiny as the districts had designed it: it was not narrowly tailored to the interests offered (*Parents Involved*, 2007). **That much is the holding of the Court, and it is real: Seattle's tiebreaker, as built, fell.**

## The line everyone quotes, and who actually joined it

The most quoted sentence in the case is Chief Justice Roberts's:

> "The way to stop discrimination on the basis of race is to stop discriminating on the basis of race." (*Parents Involved*, 2007, Part IV, plurality.)

**Read the tag on that quotation.** It is in Part IV, which **only four Justices joined**: Roberts, Scalia, Thomas, and Alito. **It is a plurality line, not the holding of the Court.** Attributing it to "the Supreme Court" as the rule of the case is the single most common error made about *Parents Involved*, and you now know not to make it. The fifth vote did not sign it, and the fifth vote is the one that controls.

## Justice Kennedy's controlling concurrence, which is the actual holding

Kennedy agreed the Seattle and Louisville plans failed, but he wrote separately to reject the plurality's broader position, and because his was the narrowest ground for the judgment, **his opinion controls what the case stands for.** He was explicit:

> "The plurality opinion is too dismissive of the legitimate interest government has in ensuring all people have equal opportunity regardless of their race." (*Parents Involved*, 2007, Kennedy, J., concurring.)

> "A compelling interest exists in avoiding racial isolation, an interest that a school district, in its discretion and expertise, may choose to pursue." (*Parents Involved*, 2007, Kennedy, J., concurring.)

And he listed race-conscious tools a district may use **without** classifying individual students by race:

> "strategic site selection of new schools; drawing attendance zones with general recognition of the demographics of neighborhoods; allocating resources for special programs; recruiting students and faculty in a targeted fashion; and tracking enrollments, performance, and other statistics by race." (*Parents Involved*, 2007, Kennedy, J., concurring.)

His objection to Seattle's plan was narrow and specific: **not that race may never be considered, but that assigning each child a personal racial label is the wrong tool.**

> "Assigning to each student a personal designation according to a crude system of individual racial classifications is quite a different matter; and the legal analysis changes accordingly." (*Parents Involved*, 2007, Kennedy, J., concurring.)

## What the case actually holds, in one careful paragraph

*Parents Involved* struck down Seattle's and Louisville's specific plans because they assigned individual students by a racial classification that was not narrowly tailored. **It did not hold that a district may never consider race.** Through Kennedy's controlling concurrence, five Justices left standing the propositions that **avoiding racial isolation and achieving diversity are compelling interests a district may pursue**, and that a district may pursue them by race-conscious means that stop short of labeling each student. **The plurality would have gone further; it did not command a majority, so it did not become the law.** Lesson 12 sets this beside Milliken and reads the two as one argument.

## Sources
- Parents Involved in Community Schools v. Seattle School District No. 1, 551 U.S. 701 (2007). https://www.law.cornell.edu/supremecourt/text/551/701
- U.S. Const. amend. XIV.`,
      recallContent: [
        {
          prompt: "What did the district court order in the Detroit case, and what did the Supreme Court do?",
          answer: "It ordered a metropolitan desegregation plan reaching Detroit plus 53 of the 85 surrounding suburban districts. On July 25, 1974, the Supreme Court, 5 to 4, held that remedy impermissible.",
        },
        {
          prompt: "State Milliken's threshold for a cross-district remedy.",
          answer: "Before the boundaries of separate, autonomous districts may be set aside, it must first be shown that a constitutional violation within one district produces a significant segregative effect in another, for example where discriminatory acts caused segregation in an adjacent district or where district lines were deliberately drawn on the basis of race.",
        },
        {
          prompt: "What kind of limit is Milliken, precisely?",
          answer: "A limit on compulsion. It governs what a court may order over the objection of districts that did not themselves discriminate. It does not tell a willing district what it may do on its own, which is why it is only half of this section.",
        },
        {
          prompt: "What is the reason the Court gave for the rule, and what value does it protect?",
          answer: "That no single tradition in public education is more deeply rooted than local control over the operation of schools. The district boundary becomes the default wall of the remedy, defended by local control.",
        },
      ],
    },
    {
      slug: "sea-powers-bookend",
      title: "12 · The two opinions read together, across thirty-three years",
      section: "Section 3 · Powers",
      body: `**Course 2 killed an argument with a chronology. This lesson builds an argument with a pair of cases, and then tests the popular version of each and cuts what does not survive.** That is the same discipline, aimed at a claim instead of a date table.

**The argument, stated plainly.** *Milliken v. Bradley* (1974) and *Parents Involved* (2007) are one argument thirty-three years apart. **Milliken limited what a court could compel. Parents Involved limited what a district could choose to do voluntarily.** Set them side by side and they close on integration from two directions: the courts' power to force it was capped in 1974 at the district line, and a district's own freedom to pursue it was capped in 2007 at individual racial classification.

| | *Milliken v. Bradley* (1974) | *Parents Involved* (2007) |
|---|---|---|
| **Who was acting** | A federal court, ordering a remedy | A school district, choosing a policy |
| **The posture** | Compulsion, over unwilling suburbs | Voluntary, by a willing district |
| **Segregation's source** | Found de jure violation in Detroit | None: Seattle never segregated by law, never under court order |
| **What was limited** | What a court may **compel** across district lines | What a district may voluntarily **choose** to do with race |
| **The wall it built** | The district boundary caps the remedy | Individual racial classification caps the method |
| **The vote** | 5 to 4 | 5 to 4 |

**Why the pairing is a real argument and not a slogan.** The two cases are not about the same legal question, and honesty requires saying so: Milliken is a **remedies** case about the reach of a court's order, and Parents Involved is an **equal protection** case about a district's own use of race. **They do not cite each other as controlling.** What links them is not doctrine but effect and direction: **across a generation, the room for both compelled and voluntary school integration narrowed, once from the court's side and once from the district's side.** That is a defensible historical claim about outcomes. It is not a claim that one case dictated the other, and you should not inflate it into one.

## Now test the popular version of each, and cut what fails

**Popular claim about Milliken: "the Supreme Court banned busing."** **Fails as stated.** Milliken did not ban busing; courts kept ordering busing within districts for years. It barred a **cross-district** remedy absent an interdistrict violation. The surviving, accurate claim is narrower: **Milliken made metropolitan, cross-boundary remedies rare by requiring proof that the line itself carried the violation.**

**Popular claim about Parents Involved: "the Supreme Court ruled that schools can never consider race."** **Fails as stated, and this is the one the course most wants you to get right.** Five Justices, through Kennedy, held the opposite in part: **avoiding racial isolation and pursuing diversity are compelling interests a district may pursue**, by race-conscious means short of labeling each student. What the Court actually struck was the specific method, **assigning individual students by a white-or-nonwhite classification that was not narrowly tailored.** The sweeping "stop discriminating" line is a **plurality** of four, not the holding. The surviving, accurate claim: **Parents Involved barred these individual-classification assignment plans while leaving districts room to pursue integration by other race-conscious means.**

## The Seattle-specific twist that makes this the sharpest bookend

**Seattle was on the winning side once and the losing side once, for doing versions of the same thing.** In 1982, in *Washington v. Seattle School District No. 1*, the Court **protected** Seattle's voluntary choice to integrate against a state ban. In 2007, the Court **limited** Seattle's voluntary choice to integrate. **Same district, same underlying goal, opposite results, twenty-five years apart.** That is not hypocrisy in the record; it is a changed Court and a changed doctrine, and tracing it is exactly the work this course teaches: find the case, find the year, find the holding, and read the actual language rather than the headline.

## Three method lessons, which outlast every fact here

1. **A pairing is an argument about effect, not a claim of doctrine.** Say which kind you are making. "These two cases narrowed integration from two sides" is history; "Milliken caused Parents Involved" is false.
2. **Read the split, not the slogan.** A plurality line quoted as the Court's holding is the most common way *Parents Involved* is misreported. The controlling opinion is the narrowest one that reaches the judgment.
3. **Cut the claim that fails the source and report the cut.** "Banned busing" and "schools can never consider race" both fail against the opinions. Reporting that they fail is the finding, not a hedge.

## What is still open, and would deepen this

The full dissents in both cases, quoted from the United States Reports rather than from a summary. The record of Seattle's own school board debates over the tiebreaker. The Louisville companion case, *Meredith v. Jefferson County*, decided with *Parents Involved*, which reached a district that **had** once been under a desegregation order, a different fact pattern worth its own reading. **None of those has been read into this course.** They are public, and they are the next real work.

## Sources
- Milliken v. Bradley, 418 U.S. 717 (1974). https://www.law.cornell.edu/supremecourt/text/418/717
- Parents Involved in Community Schools v. Seattle School District No. 1, 551 U.S. 701 (2007). https://www.law.cornell.edu/supremecourt/text/551/701
- Washington v. Seattle School District No. 1, 458 U.S. 457 (1982). https://www.law.cornell.edu/supremecourt/text/458/457`,
      recallContent: [
        {
          prompt: "What fact about Seattle makes the 2007 case the opposite frame from Milliken?",
          answer: "Seattle had never operated legally separate schools and had never been under court-ordered desegregation. It was a willing district using a racial tiebreaker of its own choice, so the question was not whether a court could compel integration but whether a district could choose it.",
        },
        {
          prompt: "What did the five-Justice majority actually hold?",
          answer: "That Seattle's and Louisville's specific plans were unconstitutional because they assigned individual students by a racial classification that, as designed, was not narrowly tailored to the interests offered. The tiebreaker, as built, fell.",
        },
        {
          prompt: "Who joined the 'stop discriminating on the basis of race' line, and why does it matter?",
          answer: "Only four Justices, Roberts, Scalia, Thomas, and Alito, joined Part IV. It is a plurality line, not the holding of the Court. Attributing it to 'the Supreme Court' as the rule of the case is the most common error about Parents Involved, because the controlling fifth vote did not sign it.",
        },
        {
          prompt: "What did Kennedy's controlling concurrence preserve?",
          answer: "That avoiding racial isolation and achieving diversity are compelling interests a district may pursue, and that a district may use race-conscious means, such as site selection, drawing attendance zones by neighborhood demographics, allocating resources, recruiting, and tracking by race, that stop short of assigning each student an individual racial label.",
        },
        {
          prompt: "State the careful one-paragraph holding.",
          answer: "The case struck the two specific plans for assigning individual students by a racial classification that was not narrowly tailored. It did not hold that a district may never consider race; through Kennedy, five Justices left standing diversity and avoiding racial isolation as compelling interests pursued by non-individual-classification means. The broader plurality view did not command a majority and did not become law.",
        },
      ],
    },
    {
      slug: "sea-powers-quiz",
      title: "13 · Quiz: the instruments and the opinions",
      section: "Section 3 · Powers",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What gave a racially restrictive covenant its force before 1948?",
            options: [
              "A city permit",
              "Judicial enforcement: courts would void a sale to a barred buyer, backing a private contract with the power of the state",
              "A federal registration",
              "A vote of the neighborhood",
            ],
            correctIndex: 1,
            explanation: "A private prejudice became a public instrument the moment a court would enforce it.",
            sourceLessonSlug: "sea-powers-covenant-instrument",
          },
          {
            prompt: "Shelley v. Kraemer (1948) held that:",
            options: [
              "Covenants were now illegal to write",
              "Covenants had to be removed from all deeds",
              "Covenants did not exist",
              "Judicial enforcement of a racially restrictive covenant is state action violating the Fourteenth Amendment's Equal Protection Clause",
            ],
            correctIndex: 3,
            explanation: "The covenants as private agreements were not banned; what became unconstitutional was a court enforcing one.",
            sourceLessonSlug: "sea-powers-covenant-instrument",
          },
          {
            prompt: "Which of these did Shelley v. Kraemer NOT do?",
            options: [
              "Strike the covenant language out of existing deeds and undo the segregation already built",
              "Make covenants judicially unenforceable",
              "Rest on the Equal Protection Clause",
              "Leave private refusals to sell untouched",
            ],
            correctIndex: 0,
            explanation: "The language stayed in the records, which is why the covenants project can still read it, and the segregation already built stayed on the ground.",
            sourceLessonSlug: "sea-powers-covenant-instrument",
          },
          {
            prompt: "Why did neighborhood-based school assignment reproduce Seattle's housing segregation?",
            options: [
              "Because a court ordered it",
              "Because a state law required segregated schools",
              "Because covenants and lending had concentrated Black Seattle in the Central District, so assigning children to neighborhood schools mapped the housing pattern onto the schools",
              "Because the IHSAA barred Black schools",
            ],
            correctIndex: 2,
            explanation: "Segregation without a current legal command is exactly the condition the 2007 case turns on.",
            sourceLessonSlug: "sea-powers-school-plans",
          },
          {
            prompt: "In Washington v. Seattle School District No. 1 (1982), the Supreme Court:",
            options: [
              "Upheld Initiative 350's ban on busing",
              "Struck down Initiative 350, protecting Seattle's voluntary desegregation from a state ban, because the measure restructured the political process to burden racial minorities",
              "Ordered Seattle to bus students",
              "Ended the Seattle Plan",
            ],
            correctIndex: 1,
            explanation: "In 1982 the Court protected the very kind of voluntary choice that a differently composed Court would limit in 2007.",
            sourceLessonSlug: "sea-powers-school-plans",
          },
          {
            prompt: "How did Seattle's racial tiebreaker classify students, and when did it apply?",
            options: [
              "By income, at every school",
              "By test score, for magnet schools",
              "By home address only",
              "As white or nonwhite, used to fill an oversubscribed high school toward the district's overall balance",
            ],
            correctIndex: 3,
            explanation: "That single binary classification of each student is the fact Parents Involved is fought over.",
            sourceLessonSlug: "sea-powers-school-plans",
          },
          {
            prompt: "What did the district court order in Milliken v. Bradley, and what did the Supreme Court do?",
            options: [
              "It ordered a metropolitan plan reaching Detroit plus 53 suburban districts; the Court, 5 to 4, held that cross-district remedy impermissible absent an interdistrict violation",
              "It ordered Detroit to close; the Court affirmed",
              "It ordered vouchers; the Court reversed",
              "It ordered nothing; the Court dismissed",
            ],
            correctIndex: 0,
            explanation: "The district boundary became the default wall of the remedy, defended by local control of schools.",
            sourceLessonSlug: "sea-powers-milliken",
          },
          {
            prompt: "What kind of limit is Milliken, precisely?",
            options: [
              "A limit on what a district may voluntarily choose",
              "A limit on compulsion: what a court may order over the objection of districts that did not themselves discriminate",
              "A ban on all busing",
              "A rule about school funding",
            ],
            correctIndex: 1,
            explanation: "Because it limits only compulsion, it leaves open what a willing district may choose, which is where the Seattle case lives.",
            sourceLessonSlug: "sea-powers-milliken",
          },
          {
            prompt: "What made Seattle's situation in Parents Involved the reverse of Milliken's?",
            options: [
              "Seattle had more students",
              "Seattle had never operated legally separate schools and was under no court order; it was a willing district choosing a race-conscious tiebreaker, so the issue was choice, not compulsion",
              "Seattle was in a different circuit",
              "Seattle had no covenants",
            ],
            correctIndex: 1,
            explanation: "Milliken was a court trying to compel unwilling suburbs; Seattle was a willing district acting on its own.",
            sourceLessonSlug: "sea-powers-parents-involved",
          },
          {
            prompt: "The line 'The way to stop discrimination on the basis of race is to stop discriminating on the basis of race' is:",
            options: [
              "The holding of the Court",
              "From Justice Kennedy's concurrence",
              "A plurality line joined by only four Justices (Roberts, Scalia, Thomas, Alito), not the holding of the Court",
              "From the dissent",
            ],
            correctIndex: 2,
            explanation: "Attributing it to 'the Supreme Court' as the rule of the case is the most common error about Parents Involved.",
            sourceLessonSlug: "sea-powers-parents-involved",
          },
          {
            prompt: "Why does Justice Kennedy's concurrence control what Parents Involved stands for?",
            options: [
              "Because he wrote the longest opinion",
              "Because he was Chief Justice",
              "Because he dissented",
              "Because his was the narrowest ground reaching the judgment, and he rejected the plurality's broader position while agreeing the specific plans failed",
            ],
            correctIndex: 3,
            explanation: "The controlling opinion in a split decision is the narrowest one necessary to the judgment.",
            sourceLessonSlug: "sea-powers-parents-involved",
          },
          {
            prompt: "What did five Justices, through Kennedy, leave standing in Parents Involved?",
            options: [
              "That avoiding racial isolation and achieving diversity are compelling interests a district may pursue, by race-conscious means short of labeling each student",
              "That race may never be considered in any way",
              "That busing is required",
              "That covenants are enforceable",
            ],
            correctIndex: 0,
            explanation: "Kennedy listed permissible tools like site selection, attendance-zone drawing, resource allocation, recruiting, and tracking by race.",
            sourceLessonSlug: "sea-powers-parents-involved",
          },
          {
            prompt: "Which statement about the Milliken and Parents Involved pairing is accurate?",
            options: [
              "Milliken caused Parents Involved as binding precedent",
              "They are the same kind of case",
              "It is a claim about effect and direction, not doctrine: a remedies case and an equal-protection case that together narrowed school integration from two sides, once from the court and once from the district",
              "They were decided the same year",
            ],
            correctIndex: 2,
            explanation: "They do not cite each other as controlling; what links them is outcome and direction across thirty-three years.",
            sourceLessonSlug: "sea-powers-bookend",
          },
          {
            prompt: "The corrected, accurate version of 'the Supreme Court banned busing' in Milliken is:",
            options: [
              "It banned all busing nationwide",
              "It made cross-district remedies rare by requiring proof of an interdistrict violation, while busing within a district kept being ordered",
              "It required busing everywhere",
              "It said nothing about remedies",
            ],
            correctIndex: 1,
            explanation: "The popular version fails against the opinion; the narrower claim survives.",
            sourceLessonSlug: "sea-powers-bookend",
          },
          {
            prompt: "What is the Seattle-specific twist across 1982 and 2007?",
            options: [
              "Seattle changed states",
              "The Court protected Seattle's voluntary integration from a state ban in 1982 and limited Seattle's voluntary integration in 2007: same district and goal, opposite results, from a changed Court and doctrine",
              "Seattle never desegregated",
              "The 2007 case overruled Milliken",
            ],
            correctIndex: 1,
            explanation: "Tracing that reversal, case by case and year by year, is exactly the research the course teaches.",
            sourceLessonSlug: "sea-powers-bookend",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 4 · Now  (beat 4: observation and evidence)
    //
    // The 360 tour has not been captured yet, and a tour embed URL is authoritative external data
    // that must never be guessed (plans/future/04-wanderlearn-360-boundary.md). So this lesson ships
    // as `virtual_tour` with NO contentUrl: the player renders the "no media yet" notice above the
    // body, and the body is the observation brief the learner uses when the tour lands.
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "sea-now-tour",
      title: "14 · Now: walk the ground (360 tour, forthcoming)",
      section: "Section 4 · Now",
      lessonType: "virtual_tour",
      body: `**The 360 tour for this lesson is forthcoming.** It is not here yet, and the notice above this text is telling you the truth rather than reporting a fault. This course was written before the tour was captured, on purpose: the site template treats beat 4 as a drop-in, so a course is complete and teachable without it, and the tour is added later without restructuring anything.

**Read this lesson now anyway.** It is your observation brief. Beat 4 asks one question, "what is actually there today," and the difference between a tourist looking at a street and a researcher looking at a street is entirely a matter of knowing what to look for before you arrive. **Work through this list now, then run it against the tour when it lands.**

## What to look for, in order

**1. Look for the boundary you cannot see.** The single most important object in this course is invisible in every frame of any tour: the line that once separated a covenanted block from an open one, and the line that assigns a child to one school and not another. **You cannot photograph a covenant or a school attendance boundary.** So look for its traces: an abrupt change in housing age or style, a street that reads as an edge, a difference in tree cover or lot size. **Where the built fabric changes suddenly, ask whether a line runs there**, and take that question to the records in Section 5.

**2. In the Central District, separate the layers by age.** You are looking at a neighborhood made by exclusion and remade by a market. Old churches and small commercial buildings are the first layer; new townhomes and apartment blocks are the second. **Count them against each other.** A block that is mostly new construction is Claim B from Lesson 6 made visible; a surviving church or clubhouse is Claim A. **The tour is a cross-section of two dated processes, and your job is to date what you see.**

**3. Find what a community kept, not only what it lost.** Look for the institutions still operating: a church still holding services, a Black-owned business, a mural, a community center, a historical marker. **A district that changed is not a district that vanished**, and a brief that only inventories loss is an incomplete report. Note who put up any marker and in what year.

**4. At Bainbridge, read the memorial as Lesson 7 taught.** If the tour reaches Pritchard Park, look at the siting first (it is at the ferry ground), then the wall (names and ages, in wood), then the setting. **Do not photograph it as scenery.** It is a built argument, and the observation to record is how the form carries the argument.

**5. Read the plaques, and read who wrote them.** A marker is a public record with an author, a date, and a sponsor. **A marker tells you what a community and an agency agreed to say in public, in a particular year.** Note the sponsor's name every time; it is a fact about the present, not only the past.

**6. Look for what is being built or decided right now.** Construction fencing, a rezoning notice, a leasing banner, a public-hearing sign. **Every one of those is a live document with a case number**, and Section 5 teaches you to look them up.

**7. Look at who is on the ground, and describe them as they describe themselves.** These are working, living neighborhoods with residents, students, workers, and visitors. **A 360 tour is a photograph of strangers in a public place, and the ethics of writing about it are the ethics of writing about neighbors.**

## What the tour cannot show you

- **It cannot show you a line.** Covenants and attendance boundaries have no physical existence. They live in records, and that is why Sections 5 and 6 exist.
- **It cannot show you a date.** Every change you notice happened at a time, and the tour has no clock. Beat 3 gave you the dates; beat 5 gives you the record.
- **It cannot show you an owner.** A building's occupant is not its owner, and neither is on the facade. The parcel record has it.
- **It cannot show you absence.** You cannot photograph a family that was removed or a business that was priced out. **Everything the tour does not contain is a question for Section 5, not an answer.**

**Write down your five most confident observations before the tour arrives, based on this brief and the map that follows. Then check them.** Being wrong on the record about a place you had not yet seen is a better teacher than being right about one you had.

## Sources
- Bainbridge Island Japanese American Community. (n.d.). *Exclusion memorial*. https://bijac.org/exclusion-memorial/
- Gregory, J. (n.d.). *Racial restrictive covenants project*. University of Washington. https://depts.washington.edu/covenants/
- KUOW. (2016). *Race matters: Understanding how the Central Area was gentrified*. https://www.kuow.org/stories/race-matters-understanding-how-the-central-area-was-gentrified`,
      recallContent: [
        {
          prompt: "Why is this lesson published before its 360 tour exists?",
          answer: "Because the site template treats beat 4 as a drop-in: a course is complete and teachable with the other five beats, and the tour is added later without restructuring anything. The body is the observation brief in the meantime.",
        },
        {
          prompt: "What is the single most important object in this course, and why can't the tour show it?",
          answer: "The line, both the covenant boundary and the school attendance boundary. Neither has a physical existence, so you look for traces like sudden changes in housing age or an edge-like street, and take the question to the records.",
        },
        {
          prompt: "In the Central District, how do you read the two dated processes on the ground?",
          answer: "Old churches and small commercial buildings are Claim A, the neighborhood exclusion built; new townhomes and apartment blocks are Claim B, the later market. Count them against each other and date what you see.",
        },
        {
          prompt: "Name three things a 360 tour cannot show you.",
          answer: "A line, a date, an owner, and absence. You cannot photograph a covenant, a removed family, or a priced-out business, so everything missing from the tour is a question for the records rather than an answer.",
        },
      ],
    },
    {
      slug: "sea-map",
      title: "15 · Map: one city, and the argument it belongs to",
      section: "Section 4 · Now",
      body: `**Read this before you touch the map, because the map's limits are a lesson in themselves.**

**This platform's lesson map draws the whole world.** A marker is a fixed-size dot on a world projection, so two points need to be a couple of degrees apart, on the order of a couple hundred kilometers, before they separate visually. **A neighborhood is smaller than one dot, and a covenant boundary or a school attendance line is far smaller than that.** So this map cannot show you the Central District block by block, and pretending otherwise would be a worse lesson than admitting it.

**That limitation is the most useful thing on this page.** The right map for a covenant is the **UW covenants database**, arranged by neighborhood. The right map for a parcel is **King County's Parcel Viewer**. The right map for a school assignment is a **Seattle Public Schools attendance-area map**. **Choosing the right scale of map for your question is a research skill**, and Section 5 puts you into those tools directly.

**So this map does the job it can do well.** It places Seattle in the argument it belongs to, and it marks the ground and the archive.

**Blue: Seattle's Central District**, the subject, plotted at an approximate point. Its detail carries the arc in a paragraph.

**Amber: the two courtrooms that bracket the argument.** Detroit is *Milliken* (1974), the limit on what a court could compel. Louisville is the *Meredith* companion case decided with *Parents Involved* (2007). **They are here to stop you reading Seattle as a local story.** It is a local instance of a national argument about race and schooling.

**Violet: the removal, and where it led.** Bainbridge Island, where the first removal began and the memorial now stands, and Manzanar in California, where the islanders were first taken. **A memorial and the place of confinement are two ends of one order**, and the map is honest only if it shows both.

**Green: the archive.** The University of Washington, home of the Racial Restrictive Covenants Project, where the deeds behind Sections 1 and 2 are transcribed and searchable. **Knowing where a record physically lives is part of knowing it exists.**

**Coordinates on this map are approximate points, not surveyed locations.** Do not use them to find an address. Use them to see the shape of the argument, and use the covenants database, the Parcel Viewer, or the attendance-area maps when you need a boundary.

**What this map cannot show, and neither could the tour.** It cannot show a line and it cannot show absence. Every marker exists because something was recorded. **The two courtroom cities are the ones this course happened to pair; how many other cities belong on this map is a question the course will not guess at.**

## Sources
- Gregory, J. (n.d.). *Racial restrictive covenants project*. University of Washington. https://depts.washington.edu/covenants/
- Milliken v. Bradley, 418 U.S. 717 (1974). https://www.law.cornell.edu/supremecourt/text/418/717
- National Park Service. (n.d.). *Bainbridge Island Japanese American Exclusion Memorial, Minidoka National Historic Site*. https://www.nps.gov/miin/index.htm
- Parents Involved in Community Schools v. Seattle School District No. 1, 551 U.S. 701 (2007). https://www.law.cornell.edu/supremecourt/text/551/701`,
      mapContent: {
        markers: [
          {
            id: "sea-central-district",
            lat: 47.6069,
            lng: -122.3009,
            title: "Central District, Seattle, Washington",
            color: "#1d4ed8",
            description:
              "The subject of this course. With most of Seattle closed by racially restrictive covenants and, from the 1930s, marked risky by federal mortgage maps, the Central District became the center of Black Seattle, holding by several accounts a large majority of the city's Black residents in the mid twentieth century. It built churches, businesses, and a Jackson Street music scene inside the limit. Its Black share then fell from roughly 40 to 90 percent Black tracts in 1970 to about 7 to 17 percent by 2020, a change the course keeps split between earlier policy and later gentrification. Its schools, segregated by the housing map, were the ground of Seattle's voluntary desegregation and the 2007 tiebreaker case.",
          },
          {
            id: "sea-detroit",
            lat: 42.3314,
            lng: -83.0458,
            title: "Detroit, Michigan: Milliken v. Bradley (1974)",
            color: "#b45309",
            description:
              "The limit on what a court could compel. A district court found Detroit's schools unlawfully segregated and ordered a metropolitan remedy reaching Detroit plus 53 of 85 suburban districts. On July 25, 1974, the Supreme Court, 5 to 4, held that before district boundaries may be crossed for a remedy, it must first be shown that a violation in one district produced a significant segregative effect in another. Milliken made cross-boundary remedies rare and is the first bookend of this course's argument.",
          },
          {
            id: "sea-louisville",
            lat: 38.2527,
            lng: -85.7585,
            title: "Louisville, Kentucky: Meredith v. Jefferson County (2007)",
            color: "#b45309",
            description:
              "The companion case decided with Parents Involved on June 28, 2007. Jefferson County, unlike Seattle, had once been under a court desegregation order, a different fact pattern the course flags as worth its own reading. The two consolidated cases struck down student-assignment plans that classified individual students by race, while Justice Kennedy's controlling concurrence preserved diversity and avoiding racial isolation as compelling interests a district may pursue by other race-conscious means.",
          },
          {
            id: "sea-bainbridge",
            lat: 47.6219,
            lng: -122.5106,
            title: "Bainbridge Island Japanese American Exclusion Memorial, Washington",
            color: "#6d28d9",
            description:
              "Where the first forced removal of Japanese Americans under Executive Order 9066 began. On March 30, 1942, 227 of the island's roughly 276 Japanese American residents were removed by ferry under Civilian Exclusion Order No. 1. The memorial at Pritchard Park stands on the ferry ground, guided by 'Nidoto Nai Yoni,' 'Let it not happen again,' with a wooden wall carrying the names and ages of the 1942 residents. It is administered as part of Minidoka National Historic Site.",
          },
          {
            id: "sea-manzanar",
            lat: 36.7281,
            lng: -118.1542,
            title: "Manzanar, California",
            color: "#6d28d9",
            description:
              "Where the Bainbridge Islanders were first taken, the first community in the country incarcerated under Executive Order 9066. A memorial at the ferry dock and a confinement site in the California desert are two ends of one order, and the map is honest only if it shows both. Most Bainbridge families were later transferred to Minidoka in Idaho.",
          },
          {
            id: "sea-uw-archive",
            lat: 47.6553,
            lng: -122.3035,
            title: "University of Washington: Racial Restrictive Covenants Project",
            color: "#15803d",
            description:
              "Where the deeds behind Sections 1 and 2 are transcribed and searchable. Led by historian James Gregory, the project reports locating racist deed provisions on more than 80,000 Washington properties, examined across more than 7 million property records, with King County alone over 37,000. Washington's 2021 House Bill 1335 turned the mapping into a state mandate and created a process to strike the language from a deed. Knowing where a record lives is part of knowing it exists.",
          },
        ],
      },
      recallContent: [
        {
          prompt: "Why is this course's map national rather than block by block?",
          answer: "The lesson map draws the whole world, so points need roughly a couple of degrees of separation to be distinguishable, and a neighborhood, let alone a covenant or attendance line, is far smaller than one dot. Choosing the right scale of map for the question is the skill.",
        },
        {
          prompt: "For a covenant, a parcel, and a school assignment, what is the right map for each?",
          answer: "For a covenant, the UW covenants database arranged by neighborhood; for a parcel, King County's Parcel Viewer; for a school assignment, a Seattle Public Schools attendance-area map.",
        },
        {
          prompt: "Why does the map mark both Bainbridge and Manzanar?",
          answer: "A memorial at the ferry ground and the confinement site in California are two ends of one order. The map is honest only if it shows both, rather than commemorating the departure and hiding the destination.",
        },
      ],
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 5 · Next  (beat 5: live civics. how assignment works now, and a real record)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "sea-next-assignment-today",
      title: "16 · How Seattle assigns students now, and the four questions",
      section: "Section 5 · Next",
      body: `Beat 5 is the beat that turns a history course into a civics course. **Every place has a present legal status and a live process running on it right now**, and finding those is a research skill rather than an opinion. For Seattle the live questions are two: how a child is assigned to a school today, and how a covenant comes off a deed today.

**Start with the four questions, in this order. They work for any American district.**
1. **How is a student assigned to a school by default?**
2. **What choice, if any, sits on top of the default?**
3. **What decides a contested seat when a school is full?**
4. **Who draws the boundaries, when do they meet, and is it public?**

**Question 1: the default.** Seattle Public Schools assigns most students to an **attendance-area school based on the address of the student's primary residence** (Seattle Public Schools, n.d.-a). **Read what that means against this whole course.** After the racial tiebreaker fell in 2007, Seattle returned to a fundamentally **address-based** assignment system. **When housing is segregated, address-based assignment reproduces the housing pattern**, which is the exact link Sections 3 opened with. The instrument that decides a child's school is, once again, largely the map of who lives where.

**Question 2: the choice on top.** Students may apply through **Open Enrollment** to a school other than their attendance-area school, and the district runs **option schools** that anyone may apply to (Seattle Public Schools, n.d.-a). **Choice is real but bounded:** it operates on top of the address default, and it is limited by capacity.

**Question 3: the contested seat.** When more students want a school than it has seats, the district fills it by **tiebreakers**. Seattle's current tiebreakers include factors like whether a sibling already attends and how far the student lives from the school (Seattle Public Schools, n.d.-b). **Notice what is not on that list: the race of the individual student.** That is *Parents Involved* (2007), still operating on this district today. **The 2007 opinion is not a historical artifact here; it is the reason a tiebreaker list reads the way it does in the current enrollment guide.** This is the sharpest possible demonstration that Section 3 is live civics, not old law.

**Question 4: who draws the lines.** Attendance-area boundaries are set by the **Seattle School Board** through its enrollment-planning process, in public meetings with published materials (Seattle Public Schools, n.d.-a). **A boundary change is a school decision made in a room you can sit in.** When enrollment shifts or a school opens or closes, boundaries are redrawn, and each redraw decides which children go where. **That is the attendance-zone instrument the gym course taught, still running, in Seattle, in public, now.**

**The second live process: getting a covenant off a deed.** Because *Shelley* left covenant language in the deeds, Washington's **HB 1335 (2021)** lets a current owner file to have the language struck from their own title, and the **King County Recorder's Office** publishes how (King County, n.d.; Substitute House Bill 1335, 2021). **This is a live administrative process with a form and a fee**, and it is the housing-side twin of the school-side questions above. The next lesson has you walk both.

**The honest limits of this lesson.** Assignment plans, tiebreaker lists, and boundary maps change, sometimes yearly, and enrollment policy is revised often. **Every fact above has a source and a date attached, and you should re-check all of them before you rely on any of them.** That instruction is not a disclaimer. It is the method.

## Sources
- King County. (n.d.). *Restrictive covenants*. https://kingcounty.gov/en/dept/executive-services/certificates-permits-licenses/records-licensing/recorders-office/restrictive-covenants
- Parents Involved in Community Schools v. Seattle School District No. 1, 551 U.S. 701 (2007). https://www.law.cornell.edu/supremecourt/text/551/701
- Seattle Public Schools. (n.d.-a). *Student assignment plan*. https://www.seattleschools.org/departments/enrollment-planning/student-assignment-plan/
- Seattle Public Schools. (n.d.-b). *School assignment, waitlists, and tiebreakers*. https://www.seattleschools.org/enroll/find-your-school/school-assignment/
- Substitute House Bill 1335, 67th Leg., Reg. Sess. (Wash. 2021). https://depts.washington.edu/covenants/shb1335.shtml`,
      recallContent: [
        {
          prompt: "State the pairing in one sentence, and say what kind of claim it is.",
          answer: "Milliken limited what a court could compel across district lines, and Parents Involved limited what a district could voluntarily choose to do with race, so across thirty-three years integration was narrowed from two directions. It is a claim about effect and direction, not a claim that one case dictated the other.",
        },
        {
          prompt: "Correct the popular claim that Milliken 'banned busing.'",
          answer: "It did not. Courts kept ordering busing within districts. Milliken barred a cross-district remedy absent an interdistrict violation, making metropolitan, cross-boundary remedies rare by requiring proof the line itself carried the violation.",
        },
        {
          prompt: "Correct the popular claim that Parents Involved held schools can never consider race.",
          answer: "Five Justices, through Kennedy, held that avoiding racial isolation and pursuing diversity are compelling interests a district may pursue by race-conscious means short of labeling each student. The Court struck the specific method of assigning individual students by a white-or-nonwhite classification that was not narrowly tailored. The sweeping line is a plurality of four, not the holding.",
        },
        {
          prompt: "What is the Seattle-specific twist that makes this the sharpest bookend?",
          answer: "In 1982, Washington v. Seattle School District No. 1 protected Seattle's voluntary choice to integrate from a state ban; in 2007, Parents Involved limited Seattle's voluntary choice to integrate. Same district, same goal, opposite results, twenty-five years apart, from a changed Court and doctrine.",
        },
      ],
    },
    {
      slug: "sea-next-exercise",
      title: "17 · Practice: look up a real covenant or parcel",
      section: "Section 5 · Next",
      lessonType: "exercise",
      body: `**This drill is the whole of beat 5 in miniature, and you should do it with the real tools open in another tab.** Everything below is free and public.

**The tools.**
- **The UW Racial Restrictive Covenants Project database**: https://depts.washington.edu/covenants/ . Browse by region, starting with Seattle neighborhoods, to see scanned deeds and the neighborhoods they cover.
- **The King County Recorder's Office restrictive-covenants page**: search "King County restrictive covenants" or start at https://kingcounty.gov/en/dept/executive-services/certificates-permits-licenses/records-licensing/recorders-office/restrictive-covenants . It explains how HB 1335 lets an owner strike covenant language from a deed.
- **King County's Parcel Viewer**: search "King County Parcel Viewer" (confirm the current URL from the county's own site rather than trusting a guess). Enter an address or parcel number to read parcel boundaries and public assessment data.
- **A Seattle Public Schools attendance-area map**: https://www.seattleschools.org/departments/enrollment-planning/student-assignment-plan/ . Find which attendance area an address falls in.

**Your safe targets, and the ethics rule that picks them.** Practice on **historical covenant records and on public or institutional parcels**, never on a current resident's home published with their name. A recorded covenant is a public historical document; a scanned 1940s deed in the UW database is safe to read and quote. A current family's address tied to their name in your writing is a different act. **This is the same rule the method course applied to tourist homes.**

**Work through these, then answer the questions below.**
1. In the **covenants database**, open a **Seattle neighborhood** section and find one **scanned deed** with a racial restriction. Read the clause. **Which group or groups does it exclude, and what year was it recorded?**
2. Note the **neighborhood**. Compare it to Lesson 5's point that the covenant belt and the Central District are near mirror images. **Is your deed in a historically covenanted area or in the area people were pushed into?**
3. On the **King County Recorder's** page, read the **HB 1335 process**: what does a current owner file to have the language struck, and does striking it remove the restriction's history or only its place on the active title?
4. In the **Parcel Viewer**, look up a **public or institutional parcel** (a school, a library, a park). Read its **parcel number** and any public assessment data. **Do not look up and publish a private home.**
5. On the **attendance-area map**, pick any address and find its **assigned school**. Then ask the beat-5 question: **if that address is in a historically segregated area, what does address-based assignment do to the school's makeup?**
6. Put it together: **for one Seattle block, name the covenant era, the neighborhood's role, and the school it now feeds.** That triple is this whole course applied to one place.

**The habits this builds, which transfer to any American county.** Every county has a recorder and most have a parcel GIS and a school-boundary map. **The names of the tools change and the questions do not: what restricted this land, who owns it, and which school it feeds.** Learn to find those three and you can read any address in the country.

## Sources
- Gregory, J. (n.d.). *Racial restrictive covenants project*. University of Washington. https://depts.washington.edu/covenants/
- King County. (n.d.). *Restrictive covenants*. https://kingcounty.gov/en/dept/executive-services/certificates-permits-licenses/records-licensing/recorders-office/restrictive-covenants
- Seattle Public Schools. (n.d.-a). *Student assignment plan*. https://www.seattleschools.org/departments/enrollment-planning/student-assignment-plan/`,
      exercise: {
        instructions:
          "Type the missing term, name, number, body, or year, then check. Close answers (spelling, capitalization) count as 'close', not wrong.",
        items: [
          {
            prompt: "The searchable archive of scanned deeds with racial restrictions is the UW Racial Restrictive ___ Project.",
            answer: "Covenants",
            accept: ["covenant", "covenants project", "racial restrictive covenants"],
            explanation: "Led by historian James Gregory; browse it by region, starting with Seattle neighborhoods.",
          },
          {
            prompt: "The county office that records deeds and runs the covenant-removal process is the King County ___.",
            answer: "Recorder",
            accept: ["recorder's office", "recorders office", "recorder office", "records and licensing"],
            explanation: "Under HB 1335 it publishes how a current owner strikes covenant language from a title.",
          },
          {
            prompt: "The 1948 Supreme Court case that made covenants judicially unenforceable was Shelley v. ___.",
            answer: "Kraemer",
            accept: ["kramer"],
            explanation: "It held that a court enforcing a racial covenant is state action violating the Fourteenth Amendment. The language stayed in the deeds.",
          },
          {
            prompt: "The Washington law (2021) that lets an owner strike covenant language from a deed is House Bill ___.",
            answer: "1335",
            accept: ["hb 1335", "shb 1335"],
            explanation: "It also charged the UW project with mapping racist deed provisions statewide.",
          },
          {
            prompt: "Seattle assigns most students to a school based on the ___ of their primary residence.",
            answer: "address",
            accept: ["location", "home address", "residence"],
            explanation: "When housing is segregated, address-based assignment reproduces the housing pattern, the link Section 3 opened with.",
          },
          {
            prompt: "The individual student's ___ is NOT among Seattle's current school tiebreakers, because of the 2007 ruling.",
            answer: "race",
            accept: ["racial classification", "racial category"],
            explanation: "Parents Involved (2007) is why the current tiebreaker list reads the way it does, sibling and distance, not race.",
          },
          {
            prompt: "The 2007 Supreme Court case limiting Seattle's use of race in assignment is Parents Involved in Community Schools v. Seattle School District No. ___.",
            answer: "1",
            accept: ["one", "no. 1", "number 1"],
            explanation: "Decided June 28, 2007, 5 to 4.",
            hint: "It is the lowest possible district number.",
          },
          {
            prompt: "The controlling opinion in Parents Involved, which preserved diversity and avoiding racial isolation as compelling interests, was written by Justice ___.",
            answer: "Kennedy",
            accept: ["anthony kennedy", "justice kennedy"],
            explanation: "His was the narrowest ground reaching the judgment, so it controls what the case stands for.",
          },
          {
            prompt: "The 1974 case that limited what a court could compel across school district lines was ___ v. Bradley.",
            answer: "Milliken",
            accept: ["milikin", "millikin"],
            explanation: "It required proof of an interdistrict violation before a cross-district remedy, making metropolitan remedies rare.",
          },
          {
            prompt: "In 1942, the first forced removal of Japanese Americans under Executive Order 9066 began on ___ Island.",
            answer: "Bainbridge",
            accept: ["bainbridge island"],
            explanation: "227 of about 276 residents were removed on March 30, 1942, under Civilian Exclusion Order No. 1.",
          },
          {
            prompt: "The Bainbridge memorial's guiding phrase, 'Nidoto Nai Yoni,' is translated as 'Let it not happen ___.'",
            answer: "again",
            accept: ["again."],
            explanation: "Its wooden wall carries the names and ages of the island's 1942 Japanese American residents.",
          },
          {
            prompt: "The Central District's change is kept as two claims: earlier policy (covenants and redlining) and later ___.",
            answer: "gentrification",
            accept: ["gentrification and displacement", "displacement"],
            explanation: "Different dates, different actors, causally linked but not the same. Policy made it cheap, then the market took it.",
          },
          {
            prompt: "In Washington v. Seattle School District No. 1 (1982), the Court struck down Initiative ___, which had tried to ban busing.",
            answer: "350",
            accept: ["i-350", "initiative 350"],
            explanation: "In 1982 the Court protected Seattle's voluntary integration; in 2007 it limited it.",
          },
          {
            prompt: "When practicing parcel lookups, use public or institutional addresses, never a current resident's ___.",
            answer: "home",
            accept: ["house", "residence", "private home"],
            explanation: "A scanned historical deed is a public document; a living family's name tied to their address in your writing is a different act.",
          },
          {
            prompt: "The three transferable questions for any American address are: what restricted this land, who owns it, and which ___ it feeds.",
            answer: "school",
            accept: ["school it feeds", "attendance area", "district"],
            explanation: "Every county has a recorder, a parcel GIS, and a school-boundary map; the tools change and the questions do not.",
          },
        ],
      },
    },
    {
      slug: "sea-next-quiz",
      title: "18 · Quiz: finding the live record",
      section: "Section 5 · Next",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Why is this course's map lesson national rather than block by block?",
            options: [
              "Because Seattle's coordinates are unknown",
              "Because block-level maps are copyrighted",
              "Because the course avoids maps of Seattle",
              "Because the lesson map draws the whole world, so points need a couple of degrees to separate, and a neighborhood or a covenant line is far smaller than one dot",
            ],
            correctIndex: 3,
            explanation: "Choosing the right scale of map for the question is the skill; for a covenant it is the UW database, for a parcel the Parcel Viewer.",
            sourceLessonSlug: "sea-map",
          },
          {
            prompt: "What is the UW Racial Restrictive Covenants Project database?",
            options: [
              "A real-estate listing site",
              "A searchable archive of scanned deeds with racial restrictions, arranged by region starting with Seattle neighborhoods",
              "A transit map",
              "A private genealogy service",
            ],
            correctIndex: 1,
            explanation: "You read the clause, then who signed and recorded it. A covenant is a public record with a date and recording number.",
            sourceLessonSlug: "sea-next-exercise",
          },
          {
            prompt: "How does Seattle assign most students to a school today?",
            options: [
              "By a racial tiebreaker",
              "By lottery only",
              "By an attendance-area school based on the address of the student's primary residence",
              "By test score",
            ],
            correctIndex: 2,
            explanation: "When housing is segregated, address-based assignment reproduces the housing pattern, the link Section 3 opened with.",
            sourceLessonSlug: "sea-next-assignment-today",
          },
          {
            prompt: "Which factor is NOT among Seattle's current school tiebreakers, and why?",
            options: [
              "The race of the individual student, because Parents Involved (2007) is still operating on the district",
              "Whether a sibling attends",
              "Distance from the school",
              "Available capacity",
            ],
            correctIndex: 0,
            explanation: "The current tiebreaker list reads the way it does because of the 2007 opinion; Section 3 is live civics, not old law.",
            sourceLessonSlug: "sea-next-assignment-today",
          },
          {
            prompt: "Under Washington's HB 1335, how does a racial covenant come off a deed today?",
            options: [
              "It is removed automatically for every property",
              "It cannot be removed",
              "A court orders it citywide",
              "A current owner files with the King County Recorder's Office to strike the language from their own title",
            ],
            correctIndex: 3,
            explanation: "Removal is voluntary and owner-by-owner, seventy-three years after Shelley made the clauses merely unenforceable.",
            sourceLessonSlug: "sea-next-assignment-today",
          },
          {
            prompt: "Who draws Seattle's school attendance-area boundaries, and how?",
            options: [
              "The governor, by order",
              "The Seattle School Board, through its enrollment-planning process in public meetings",
              "The Supreme Court",
              "The King County Recorder",
            ],
            correctIndex: 1,
            explanation: "A boundary change is a school decision made in a room you can sit in, the attendance-zone instrument still running.",
            sourceLessonSlug: "sea-next-assignment-today",
          },
          {
            prompt: "Why does this course tell you to practice parcel lookups on public or institutional addresses?",
            options: [
              "Because residential records are secret",
              "Because homes have no parcel numbers",
              "Because a scanned historical deed is a public document, while publishing a current resident's name tied to their home address is a different act",
              "Because the Recorder refuses residential requests",
            ],
            correctIndex: 2,
            explanation: "It is the same ethics rule the method course applied to tourist homes.",
            sourceLessonSlug: "sea-next-exercise",
          },
          {
            prompt: "When you find a scanned covenanted deed in a Seattle neighborhood, what two facts should you read off first?",
            options: [
              "The current owner and the sale price",
              "Which group or groups it excludes, and the year it was recorded",
              "The paint color and roof age",
              "The school district and the ZIP code",
            ],
            correctIndex: 1,
            explanation: "Then compare the neighborhood to the point that the covenant belt and the Central District are near mirror images.",
            sourceLessonSlug: "sea-next-exercise",
          },
          {
            prompt: "The three transferable questions for any American address are:",
            options: [
              "Square footage, style, and price",
              "Architect, builder, and year",
              "Zoning, height, and setback",
              "What restricted this land, who owns it, and which school it feeds",
            ],
            correctIndex: 3,
            explanation: "The names of the tools change from county to county; those three questions do not.",
            sourceLessonSlug: "sea-next-exercise",
          },
          {
            prompt: "What is the single most important object in this course, and where does it live?",
            options: [
              "The Space Needle, downtown",
              "A line, the covenant boundary and the school attendance boundary, which has no physical existence and lives only in records",
              "The ferry, on Puget Sound",
              "A statue, in a park",
            ],
            correctIndex: 1,
            explanation: "You cannot photograph a covenant or an attendance line, which is the argument for reading records instead of only looking.",
            sourceLessonSlug: "sea-now-tour",
          },
          {
            prompt: "In the Central District, how does the observation brief say to read the two dated processes on the ground?",
            options: [
              "By counting cars",
              "By old churches and small commercial buildings as the earlier layer and new townhomes and apartments as the market layer, then dating what you see",
              "By measuring street width",
              "By the number of trees",
            ],
            correctIndex: 1,
            explanation: "A surviving church is Claim A; a block of new construction is Claim B made visible.",
            sourceLessonSlug: "sea-now-tour",
          },
          {
            prompt: "Why does the map mark both Bainbridge Island and Manzanar?",
            options: [
              "To fill space",
              "Because they are the two largest islands",
              "Because a memorial at the ferry ground and the confinement site are two ends of one order, and the map is honest only if it shows both",
              "Because both had covenants",
            ],
            correctIndex: 2,
            explanation: "Commemorating the departure while hiding the destination would be a dishonest map.",
            sourceLessonSlug: "sea-map",
          },
          {
            prompt: "Why does this course publish a virtual_tour lesson before the tour URL exists?",
            options: [
              "Because the tour was cancelled",
              "Because the platform requires a placeholder",
              "Because the tour is optional and will never be added",
              "Because beat 4 is a drop-in: the course is complete with the other five beats, and the body serves as the observation brief until the tour lands",
            ],
            correctIndex: 3,
            explanation: "A tour embed URL is authoritative external data and is never guessed, so the lesson ships with the notice and the brief, and the URL drops in on a re-seed.",
            sourceLessonSlug: "sea-now-tour",
          },
          {
            prompt: "The Louisville marker on the map, Meredith v. Jefferson County, differs from Seattle because:",
            options: [
              "Louisville had no schools",
              "Jefferson County had once been under a court desegregation order, unlike Seattle, a different fact pattern worth its own reading",
              "It was decided in a different year",
              "It upheld the racial tiebreaker",
            ],
            correctIndex: 1,
            explanation: "It was the companion case decided with Parents Involved on June 28, 2007.",
            sourceLessonSlug: "sea-map",
          },
          {
            prompt: "What does the course say you should do with every date and figure in the 'assignment today' lesson?",
            options: [
              "Memorize them permanently",
              "Ignore them",
              "Assume they never change",
              "Re-check all of them against the source before relying on them, because assignment plans and boundaries change often",
            ],
            correctIndex: 3,
            explanation: "That instruction is not a disclaimer; it is the method.",
            sourceLessonSlug: "sea-next-assignment-today",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 6 · Write  (beat 6: ELA and creative nonfiction, grounded in the place)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "sea-write-assignment",
      title: "19 · Your assignment: write one line",
      section: "Section 6 · Write",
      lessonType: "assignment",
      body: `Beat 6 asks a question no other beat can: **what can only be said about this place?** Answering it is a writing problem, and this assignment is a real one.

## The assignment
Write **900 to 1,300 words** of creative nonfiction about **one line**: one covenant, one deed, one school attendance boundary, one exclusion order, or the ground on one side of one of those lines. Every factual sentence must be checkable against a source you name. **The form is literary; the standard of evidence is the one Section 3 used.**

## Step 1 · Choose one line, and choose small
Pick from a scanned deed you found in the covenants database, a Central District block from Lesson 5, the Bainbridge memorial from Lesson 7, or a school attendance boundary from Lesson 16. **Smaller is better.** "Segregation in Seattle" is not a subject, it is a topic. **One covenanted deed recorded in a named neighborhood in a named year is a subject.**

If you do not live in Seattle and cannot visit, that is not a disqualification. **It is a constraint you disclose in the piece**, and it changes what you can honestly claim.

## Step 2 · Build the four-column table before you write a sentence
Section 3 read two opinions by their operative language. Build your own table with these columns: **date, event, instrument, source**. If the instrument column is empty for an event, you have a story and not yet a documented decision. **The table is the outline.**

## Step 3 · Decide what kind of piece this is
Pick one and commit, because mixing them is what makes place writing mushy.
- **A biography of a deed.** One covenant: its language, its neighborhood, its year, whether it has been struck under HB 1335.
- **A history of a decision.** One case, one order, one boundary, followed to the document. Milliken or Parents Involved read from the opinion, not the headline.
- **A report on a present.** What is on one block now, who uses it, which school it feeds, what a school board or recorder's process looks like today.
- **A piece about the record itself.** What you could and could not find, and what the gap means.

**The fourth is the hardest and often the best**, and it is the only one that can be written honestly with thin sources.

## Step 4 · Write it, under these craft rules
1. **Lead with a specific.** A recording number, a covenant clause, a date on an order, an attendance boundary. Not a mood.
2. **Name the instrument every time you name a harm.** "The neighborhood was closed" is weak. "A covenant recorded in 1928 barred nonwhite occupancy, and courts enforced it until 1948" is strong, if you can source it.
3. **Give a figure its owner.** Not "the Central District went from mostly Black to barely Black" but "KUOW reports the tracts fell from roughly 40 to 90 percent Black in 1970 to about 7 to 17 percent by 2020."
4. **Read the split, not the slogan.** If you cite *Parents Involved*, say what the majority held and what Kennedy's controlling concurrence preserved, and mark the "stop discriminating" line as a plurality of four. **Quoting a plurality line as the Court's holding is the error this whole course exists to prevent.**
5. **Keep the causes apart.** If you write the Central District's change, name whether you mean earlier policy or later gentrification, with a date. Do not merge them.
6. **One paragraph, minimum, on what you could not establish.** Required, not optional.

## Rules you do not get to break
1. **No invented detail.** Not a date, a name, a quotation, an address, or a statistic. **If a source does not say it, you do not write it.** This includes atmospheric invention: you do not know what the room smelled like.
2. **No composite or imagined characters.** Real, cited people only. The covenants database gives you real signers and recording dates; the Bainbridge memorial gives you real names and ages; the opinions give you named Justices and quoted language. **That is more than enough material.**
3. **No invented dialogue**, including "she might have said."
4. **Living communities describe themselves.** Use the names and terms the people who live and work in the Central District and on Bainbridge use, and say where you got them. **These are somebody's neighborhoods today.**
5. **The removal is not an adventure.** Write it with the names, the dates, and the numbers, and let those carry the weight. No drama borrowed from a family's worst week.
6. **No ruin porn, and no lost golden age.** A community that built a full life under exclusion was not a paradise, and its change was not a natural death. **Both framings flatter the writer and cheat the subject.**
7. **Credit what was built.** The churches and businesses of the Central District, the farms of Bainbridge, the memorial the community keeps, the district that chose to integrate. **A piece that only inventories loss is an incomplete report.**
8. **Private homes are private.** Do not publish a current resident's name with their address, do not photograph into windows, and do not knock uninvited.

## What good looks like
A short, checkable piece in which every sentence is either something you read in a named source or something you clearly mark as unresolved, and in which the prose is still good. **Those two standards do not conflict.** A covenant that barred a family in 1928 and stayed in the deed until an owner struck it in 2022, a wall of names and ages at a ferry dock, a Supreme Court holding that says less than its most famous sentence: **none of that needs decorating.**

## Sources
- Gregory, J. (n.d.). *Racial restrictive covenants project*. University of Washington. https://depts.washington.edu/covenants/
- KUOW. (2016). *Race matters: Understanding how the Central Area was gentrified*. https://www.kuow.org/stories/race-matters-understanding-how-the-central-area-was-gentrified
- Parents Involved in Community Schools v. Seattle School District No. 1, 551 U.S. 701 (2007). https://www.law.cornell.edu/supremecourt/text/551/701
- Substitute House Bill 1335, 67th Leg., Reg. Sess. (Wash. 2021). https://depts.washington.edu/covenants/shb1335.shtml`,
      recallContent: [
        {
          prompt: "What is the difference between a topic and a subject in this assignment?",
          answer: "'Segregation in Seattle' is a topic. 'One covenanted deed recorded in a named neighborhood in a named year' is a subject. Smaller is better.",
        },
        {
          prompt: "What are the four columns of the table you build before writing, and what does an empty instrument column mean?",
          answer: "Date, event, instrument, source. An empty instrument column means you have a story rather than a documented decision.",
        },
        {
          prompt: "How must you handle a citation of Parents Involved in your piece?",
          answer: "Say what the majority held and what Kennedy's controlling concurrence preserved, and mark the 'stop discriminating on the basis of race' line as a plurality of four, not the holding. Quoting a plurality line as the Court's holding is the error the course exists to prevent.",
        },
        {
          prompt: "Why does the assignment ban both ruin porn and the 'lost golden age' frame, and require crediting what was built?",
          answer: "Because a community that built a full life under exclusion was not a paradise and its change was not a natural death; both framings flatter the writer and cheat the subject. A piece that only inventories loss is an incomplete report, so it must credit what people built.",
        },
        {
          prompt: "Which paragraph is required in every submission?",
          answer: "At least one paragraph on what you could not establish.",
        },
      ],
    },
    {
      slug: "sea-what-comes-next",
      title: "20 · What this course set up, and what it left out",
      section: "Section 6 · Write",
      body: `You have now run the six-beat site template on a fourth place, and read the modern bookend of an argument the gym course opened. **That template is the product of this course, more than the Seattle material is.**

| Beat | What you did here | What you can now do anywhere |
|---|---|---|
| **1. Then** | Read a city out of a covenant archive and a federal exclusion order | Establish who could live where from primary records, not memory |
| **2. Built** | Read a constrained neighborhood, a contested change, and a memorial | Tell what a built form encodes, and keep competing causes apart |
| **3. Powers** | Traced the covenant, the assignment plan, and two opinions to their operative language | Ask "who acted, under what rule, and what did the source actually say" |
| **4. Now** | Built an observation brief before seeing the place | Look at a street with questions instead of impressions |
| **5. Next** | Found how a district assigns students and how a covenant comes off a deed today | Participate in a live decision instead of commenting on a finished one |
| **6. Write** | Wrote grounded nonfiction under an evidence standard | Publish something the next researcher can build on |

**What you can do that you could not do before.**
- Read a covenant as an instrument, and know that *Shelley* made it unenforceable without erasing it or the segregation it built.
- Distinguish what a court may **compel** (Milliken) from what a district may **choose** (Parents Involved), and read the two as one narrowing argument across thirty-three years.
- **Read the split, not the slogan:** name a plurality line as a plurality line, and find the controlling concurrence that decides what a case holds.
- Keep the Central District's exclusion and its gentrification as two dated, distinct, connected claims.
- Find, for any American address, what restricted the land, who owns it, and which school it feeds.

**What this course deliberately did not cover, and why.**
- **The full dissents in Milliken and Parents Involved.** They are quoted everywhere, and they are worth reading, but the sources read for this course did not carry them in full, and a quotation you have not seen in the document you read is a quotation you do not have. **Read them from the United States Reports and quote them with a page number yourself.**
- **The Louisville companion case, *Meredith v. Jefferson County*.** It reached a district that had once been under a desegregation order, a different fact pattern that deserves its own reading rather than a footnote here.
- **A single number for how many Central District families were displaced.** No such survey has been read into this course, and the reported demographic ranges count different tracts in different years. **Manufacturing a corridor-level total from them would invent a statistic.**
- **The exact verbatim text of any one Seattle covenant.** Section 1 says so plainly: the course describes the documented formulas and sends you to the archive to read a real deed, rather than assert a specific clause it could not pin to a source. **Reporting that gap is the finding.**
- **Initiative 200's full legal afterlife**, and the later attempts to change it, which are their own civics story about the state-law backdrop to a federal case.

**The unopened sources, which are the next real work.** The Seattle School Board's own minutes on the tiebreaker. The King County property records behind any single covenanted block. The Densho oral-history archive of the removal, in the words of the people it happened to. The full opinions in both cases, read cover to cover. **All public or requestable, and none of them read here in full.** If you want to make an original contribution rather than restate one, that is the list.

**One last thing about the place.** Seattle built a wall of names to remember a removal, transcribed tens of thousands of deeds to document an exclusion, and left in its own school-enrollment guide the fingerprint of a Supreme Court case. **The record of who was kept out, and who built anyway, and what the law finally said, is not lost.** It is sitting in a covenant database, a memorial wall, a court reporter, and an enrollment page, waiting for somebody to read it properly. **That is the whole method, and it is why this course exists.**

## Sources
- Gregory, J. (n.d.). *Racial restrictive covenants project*. University of Washington. https://depts.washington.edu/covenants/
- Milliken v. Bradley, 418 U.S. 717 (1974). https://www.law.cornell.edu/supremecourt/text/418/717
- Parents Involved in Community Schools v. Seattle School District No. 1, 551 U.S. 701 (2007). https://www.law.cornell.edu/supremecourt/text/551/701
- Densho. (n.d.). *Photo essay: Exclusion Order No. 1, Bainbridge Island*. https://densho.org/catalyst/photo-essay-bainbridge-island/`,
      recallContent: [
        {
          prompt: "What are the four questions to ask about any district's assignment, in order?",
          answer: "How is a student assigned by default; what choice sits on top; what decides a contested seat when a school is full; and who draws the boundaries, when do they meet, and is it public.",
        },
        {
          prompt: "How does Seattle assign most students now, and why does that matter given this course?",
          answer: "By attendance-area school based on the address of the primary residence. When housing is segregated, address-based assignment reproduces the housing pattern, which is the link Section 3 opened with. After the 2007 tiebreaker fell, assignment is again largely the map of who lives where.",
        },
        {
          prompt: "What is NOT among Seattle's current tiebreakers, and why is that significant?",
          answer: "The race of the individual student. That absence is Parents Involved (2007) still operating on the district: the 2007 opinion is why the current tiebreaker list reads the way it does, which shows Section 3 is live civics, not old law.",
        },
        {
          prompt: "What is the housing-side live process, and who runs it?",
          answer: "Removing a racial covenant from a deed under Washington's HB 1335 (2021), a live administrative process with a form and fee, published and handled by the King County Recorder's Office.",
        },
      ],
    },
    // <<< APPEND NEXT SECTION ABOVE THIS LINE >>>
  ],
};
