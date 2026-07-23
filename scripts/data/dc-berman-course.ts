// Authored "Washington, DC: Where the Instrument Was Blessed" — a cited, high-school-and-up SITE
// course on Learn.WitUS (Culture & History), and a metro-spine course in the route-course series
// planned in plans/37-green-book-route-courses.md and plans/41-metro-paths.md §3b. It runs the
// six-beat site template one beat per section: Then, Built, Powers, Now, Next, Write.
//
// The reason this course exists: the pilot course (indiana-avenue-a-district-and-what-replaced-it)
// found that a BLIGHT DESIGNATION and land assembly, not the highway, actually cleared Indiana
// Avenue. Berman v. Parker, 348 U.S. 26 (1954), arose from Southwest DC and is the decision that
// made clearing land as "blighted" constitutionally safe nationwide. This course is where that
// tool was authorised: a learner who took course 1 can now read the opinion that licensed it.
//
// Prerequisites named in lesson 1: `green-book-how-to-read-a-route` (the METHOD) and
// `indiana-avenue-a-district-and-what-replaced-it` (the tool applied to one corridor).
//
// Sourcing discipline (the load-bearing part of this file):
//   * Every teaching lesson carries APA 7 in-line citations and a `## Sources` bibliography.
//   * THE OPINION ITSELF IS READ, not summarised from memory. The operative language in Section 3
//     is transcribed from the reported opinion (Berman v. Parker, 348 U.S. 26), including the
//     housing-survey percentages the Court recited, the "public welfare is broad and inclusive"
//     passage, the "beautiful as well as sanitary" line, and the holding that a whole area may be
//     taken as a unit rather than lot by lot. The course states honestly what the case did and did
//     NOT hold, and that the plaintiff was a department-store owner at 712 Fourth Street S.W., not
//     a displaced resident.
//   * NO INVENTED STATISTIC, PERSON, QUOTATION, ADDRESS, OR LISTING. Where accounts disagree the
//     course gives the competing figures with who produced them (the displacement counts, the
//     freeway that WAS built versus the ones the revolt stopped).
//   * THE CROSS-CITY LINK IS WEAKENED ON PURPOSE. Lesson 11 traces the instrument from Berman to
//     Indiana Avenue and reports, against a chronology, that Berman did not CAUSE the Avenue's
//     clearance: Indiana had its own 1945 blight statute and had begun clearing in 1948, both
//     before Berman was decided in November 1954. What Berman did was resolve the constitutional
//     question nationwide, so the tool Indiana was already using could not be struck down on
//     Fifth Amendment public-use grounds. Reporting the thinner, defensible link is the finding.
//   * The people of Southwest are credited for the community they built and are not framed as a
//     lost golden age; their descendants and the scattered residents Daniel Thursz followed in 1966
//     are living. No ruin-porn.
//
// House rule: NO em-dashes or en-dashes in prose. Verbatim cited titles and page ranges inside a
// `## Sources` block are the only place a dash survives.
//
// Registration is CENTRAL (scripts/seed-courses.ts) and is intentionally NOT touched here.

import type { AuthoredCourse } from "./authored-course";

export const DC_BERMAN_COURSE: AuthoredCourse = {
  title: "Washington, DC: Where the Instrument Was Blessed",
  description:
    "A cited, high-school-and-up site course on Southwest Washington, DC, and Berman v. Parker (1954), the Supreme Court decision that made clearing land as \"blighted\" constitutionally safe across the whole country. The pilot course in this series found that a blight designation and land assembly, not the highway, actually cleared Indiana Avenue in Indianapolis. This is the course where that tool was authorised. Its prerequisites, The Green Book: How to Read a Route and Indiana Avenue: A District and What Replaced It, teach a method and apply it to one corridor; this course reads the opinion that licensed the method, quotes its operative language accurately, and is honest about what it did and did not hold, including that the plaintiff was a department store owner rather than a displaced resident. You will walk Southwest DC before clearance and read the surveys the Court relied on, see the modernist superblocks that replaced a working neighbourhood, learn the instruments beat by beat, trace the holding forward to Kelo and back to Indiana Avenue while testing that link against a chronology, meet the freeway revolt that is one of the few victories in this series, learn why the people whose homes were cleared could not vote for the Congress that governed them, look up a real DC parcel, and write grounded nonfiction about one block. A 360 tour of the waterfront is planned and will be added to the Now section when it is captured.",
  lessons: [
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 1 · Then  (beat 1: US and state/local history)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "dc-what-it-was",
      title: "1 · Southwest: what it was, and who it was for",
      section: "Section 1 · Then",
      body: `**Start with the two prerequisites.** This course assumes you have finished *The Green Book: How to Read a Route*, which taught a method, and *Indiana Avenue: A District and What Replaced It*, which applied that method to one corridor and found something specific. On Indiana Avenue the popular story blamed the interstate, but the verifiable record showed the buildings went to a **blight designation** and to land assembly, not to the highway. **This course is where that blight tool was made constitutionally safe for the entire country.** The place is Southwest Washington, and the document is *Berman v. Parker*, decided in 1954.

**The place.** Southwest is the smallest of Washington's four quadrants, a low, flat wedge of land between the U.S. Capitol and the confluence of the Potomac and the Anacostia rivers. It began as a working river port and grew into a densely built, mixed neighbourhood of row houses and alley dwellings. By the middle of the twentieth century it was one of the most crowded parts of the city and one of the poorest, and it was **majority Black: 69 percent of Southwest's residents were African American in 1950** (WTTW, n.d.).

**Who lived there, precisely.** Not one community but several sharing a few hundred acres. African American families, many descended from people who had come to the capital during and after slavery; Jewish and other immigrant merchants along the commercial streets; and a working-class population that historian and travel writer alike described as poor but rooted. **The writer James Baldwin later gave the national name for what happened to places like it, calling urban renewal "Negro removal"** (WTTW, n.d.). Hold that phrase for Section 3, where you will see the legal machinery that produced it.

**What it held.** A functioning neighbourhood: churches, corner groceries, taverns, fraternal halls, a fish market on the Maine Avenue waterfront that predates the clearance and still operates, and the row-house streets and named alley communities where people actually lived. It was not a monument district. **It was a place where roughly 23,000 people lived their whole lives**, which is exactly why beat 1 asks you to establish what was there before anyone called it a problem (Boundary Stones, 2022).

**A warning about the word you are about to meet.** In Section 3 the government's own documents call this neighbourhood **blighted** and **substandard**, and they back the words with a housing survey. Those surveys are real and the conditions they measured were real: crowding, outside toilets, houses without baths. **But a measured condition is not the same as a verdict about the people who lived in it**, and the reformers who photographed Southwest's alleys had been calling them a threat for fifty years before the bulldozers arrived. Read the surveys as evidence, and read the language around the surveys as an argument.

**A warning about tone, which is a research instruction and not a courtesy.** The residents of Southwest have living descendants, and a 1966 study you will meet in lesson 3 followed the scattered families by name. Do not write about Southwest as a vanished golden age, and do not write about it as a slum that deserved what it got. **Write about what people built, name it where the record names it, and keep every framing choice checkable against a source**, which is the standard the first two courses set and the one this course holds.

## Sources
- Boundary Stones (WETA). (2022, July 21). *The cost of urban renewal in Southwest DC*. https://boundarystones.weta.org/2022/07/21/cost-urban-renewal-southwest-dc
- WTTW. (n.d.). *Southwest Washington, DC*. https://www.wttw.com/ten/towns/southwest-washington-dc
- Berman v. Parker, 348 U.S. 26 (1954). https://www.law.cornell.edu/supremecourt/text/348/26`,
      recallContent: [
        {
          prompt: "Where is Southwest, geographically, and what was it originally?",
          answer: "The smallest of Washington's four quadrants, a low flat wedge between the U.S. Capitol and the confluence of the Potomac and Anacostia rivers. It began as a working river port and grew into a dense mixed neighbourhood of row houses and alley dwellings.",
        },
        {
          prompt: "What was the racial composition of Southwest in 1950, and roughly how many people lived there?",
          answer: "African Americans were 69 percent of residents in 1950, and roughly 23,000 people lived in the area that was later cleared.",
        },
        {
          prompt: "What phrase did James Baldwin give for what happened to neighbourhoods like Southwest?",
          answer: "\"Negro removal,\" his national name for urban renewal.",
        },
        {
          prompt: "Why does this course tell you to separate a measured housing condition from the language around it?",
          answer: "Because the surveys measured real crowding and real plumbing shortages, but a measured condition is not a verdict on the people, and reformers had called the alleys a threat for fifty years before clearance. Read the surveys as evidence and the language as argument.",
        },
        {
          prompt: "Which two courses are prerequisites to this one, and what did each establish?",
          answer: "The Green Book: How to Read a Route taught the method. Indiana Avenue: A District and What Replaced It applied it and found the buildings went to a blight designation and land assembly, not the highway. This course reads the opinion that made that blight tool constitutionally safe.",
        },
      ],
    },
    {
      slug: "dc-the-surveys",
      title: "2 · What the surveys said, and how to read one",
      section: "Section 1 · Then",
      body: `Before a government clears a neighbourhood it measures it, and the measurement becomes the justification. **This lesson reads the measurement the way the method course taught you to read a Green Book listing: for what it counts, what it leaves out, and what its silences mean.**

**The alley-dwelling tradition.** Washington had a distinctive housing form, the **alley dwelling**: small houses built in the interiors of city blocks, behind the street-facing row houses, reached through narrow passages. Many were occupied by African American families and, earlier, by immigrants. For half a century, reformers, from the Progressive Era housing surveys through the federally chartered Alley Dwelling Authority of the 1930s, had defined the alleys as unhealthy and dangerous. **The reform tradition and the clearance tradition are the same tradition at two dates**, and Southwest is where it reached its conclusion (AAG, n.d.; WTTW, n.d.).

**The conditions were real.** In the early twentieth century Southwest was a densely populated working-class neighbourhood lined with alley dwellings **where half the houses lacked indoor plumbing** (WTTW, n.d.). That is a genuine deprivation and this course does not minimise it. The families who lived without a private toilet or a bath were not living in a myth.

**Now read the survey that the Supreme Court itself would recite.** When the clearance of Southwest was challenged, the opinion in *Berman v. Parker* set out the physical findings for the area, and the numbers are worth reading exactly because a court treated them as the fact base for demolishing a neighbourhood. The opinion reports that in the area **64.3 percent of the dwellings were beyond repair, 18.4 percent needed major repairs, and only 17.3 percent were satisfactory**; and that **57.8 percent had outside toilets, 60.3 percent had no baths, 29.3 percent lacked electricity, 82.2 percent had no wash basins or laundry tubs, and 83.8 percent lacked central heating** (Berman v. Parker, 1954).

**Three things a careful reader does with that block of numbers.**

**1. Notice what it measures, which is fabric.** Every figure is about the building: its roof, its plumbing, its wiring. **Not one figure is about the residents, the businesses, the churches, or whether the community worked.** A survey that counts only fabric can only ever recommend replacing fabric. This is the same limit you met in the Indiana Avenue course: a survey form measures buildings and needs other records for everything else.

**2. Ask where the conditions came from.** A neighbourhood does not lack central heating and indoor plumbing by accident. It lacks them after decades in which owners did not invest, banks did not lend, and the city did not require or fund improvements, much of it along the colour line the first two courses documented. **The condition and its cause can be the same policy at two different dates**, and then the condition is used to justify clearing the people who suffered it. That circularity is the single most important idea in this course, and Section 3 names the instrument that runs on it.

**3. Keep the survey and the verdict apart.** The survey says the buildings were in poor repair. It does not say the neighbourhood should be demolished and its people dispersed. **That second step is a decision, made by a body, under a statute, and it is the subject of Section 3.** The numbers do not make the decision. People make the decision and cite the numbers.

**What the survey cannot tell you, and where to go instead.** It cannot tell you who owned the buildings, who the landlords were, how many residents were tenants versus owners, or where the people went. **For where they went, a real study exists**, and lesson 3 reads it.

## Sources
- AAG. (n.d.). *Stories of change hidden in Washington, D.C.'s alleys*. American Association of Geographers. https://www.aag.org/stories-of-change-hidden-in-washington-d-c-s-alleys/
- Berman v. Parker, 348 U.S. 26 (1954). https://www.law.cornell.edu/supremecourt/text/348/26
- WTTW. (n.d.). *Southwest Washington, DC*. https://www.wttw.com/ten/towns/southwest-washington-dc`,
      recallContent: [
        {
          prompt: "What was an alley dwelling in Washington, and who tended to live in them?",
          answer: "A small house built in the interior of a city block, behind the street-facing row houses and reached through a narrow passage. Many were occupied by African American families and, earlier, immigrants.",
        },
        {
          prompt: "Give the survey figures the Berman opinion recited for the housing in the area.",
          answer: "64.3 percent of dwellings beyond repair, 18.4 percent needing major repairs, 17.3 percent satisfactory; 57.8 percent with outside toilets, 60.3 percent with no baths, 29.3 percent lacking electricity, 82.2 percent with no wash basins or laundry tubs, 83.8 percent lacking central heating.",
        },
        {
          prompt: "What is the one thing every figure in that survey measures, and what does none of them measure?",
          answer: "Every figure measures the building fabric: roof, plumbing, wiring. None measures the residents, the businesses, the churches, or whether the community worked.",
        },
        {
          prompt: "State the circularity at the centre of this course.",
          answer: "A neighbourhood lacks plumbing and heating after decades of withheld investment, refused lending, and unenforced standards, much of it along the colour line. The condition is then used to justify clearing the people who suffered it. The condition and its cause are the same policy at two dates.",
        },
        {
          prompt: "Does a housing survey, by itself, decide that a neighbourhood should be demolished?",
          answer: "No. The survey reports the condition of the buildings. Demolishing the neighbourhood and dispersing its people is a separate decision made by a body under a statute, which is the subject of Section 3. People make the decision and cite the numbers.",
        },
      ],
    },
    {
      slug: "dc-people-and-institutions",
      title: "3 · The community, and where it went",
      section: "Section 1 · Then",
      body: `A neighbourhood is people and institutions, not a housing-condition table. This lesson records what Southwest held, and then reads the one study that followed the residents out.

**What was there.** A complete working community on a few hundred acres: churches and synagogues, corner stores and taverns, fraternal lodges, the Maine Avenue fish market on the waterfront, and the dense residential streets and named alley communities where families had lived for generations (Boundary Stones, 2022; WTTW, n.d.). The clearance that Section 2 measured would eventually level, by the most cited estimate, **99 percent of the buildings across about 560 acres, displacing roughly 23,000 residents and about 1,500 businesses** (Boundary Stones, 2022).

**Read those numbers carefully, because they are compiled figures and you should carry their owner.** The 23,000 residents, 1,500 businesses, and 560 acres are the figures repeated across the local histories of Southwest, and Boundary Stones, the public-history project of the DC public television and radio station WETA, is a good place to anchor them (Boundary Stones, 2022). **They are not a single published census tabulation**, and different accounts round the residents to "more than 20,000" or count families rather than people. When you use a number, name where you got it and say what it counts, which is the discipline the Indiana Avenue course built around the contested 17,000 figure there.

**Now the study, which is the part most retellings skip.** In 1966 **Daniel Thursz** published *Where Are They Now? A Study of the Impact of Relocation on Former Residents of Southwest Washington*, for the Health and Welfare Council of the National Capital Area. It followed families who had been displaced. Its findings are specific and they resist an easy story (Thursz, 1966).

- **The community was scattered.** Thursz described residents dispersed "as leaves on a windy autumn day," not resettled together but broken apart across the city (Thursz, 1966, as described in Boundary Stones, 2022; The Southwester, 2024).
- **Housing quality rose and household finances fell.** Many families did move into physically better housing, but **57 percent reported paying more for it than they had paid in Southwest**, with most of those paying at least 20 dollars more a month and some more than 40 (Thursz, 1966, as reported in The Southwester, 2024).
- **Employment worsened.** The share of household heads not working **rose from 52 percent before displacement to 62 percent after**, in part because people now lived farther from where they worked (Thursz, 1966, as reported in The Southwester, 2024).
- **Where they went mattered.** Displaced residents did not generally move to wealthy, well-served neighbourhoods; they moved to areas that would themselves face increasing segregation and disinvestment (The Southwester, 2024).

**Why this study is the honest heart of beat 1.** Urban renewal was sold as slum clearance for the benefit of slum residents. Thursz measured the residents afterward and found better plumbing bought at the price of higher rent, worse employment, and a shattered community. **That is not a golden-age lament and it is not a defence of the clearance; it is a measured outcome with an author and a date**, which is the only kind of claim this course lets you make.

**Credit what was built, not only what was lost.** Southwest was a neighbourhood people made, with congregations, businesses, and civic life that predated the planners and, in the case of the fish market, outlived them. **A course that inventories only loss is an incomplete report**, and the assignment in Section 6 will hold you to crediting what people built here.

## Sources
- Boundary Stones (WETA). (2022, July 21). *The cost of urban renewal in Southwest DC*. https://boundarystones.weta.org/2022/07/21/cost-urban-renewal-southwest-dc
- The Southwester. (2024, April 13). *Where are they now? A 1966 study on outcomes for Southwest's displaced residents*. https://thesouthwester.com/2024/04/13/where-are-they-now-a-1966-study-on-outcomes-for-southwests-displaced-residents/
- Thursz, D. (1966). *Where are they now? A study of the impact of relocation on former residents of southwest Washington, who were served in an HWC demonstration project*. Health and Welfare Council of the National Capital Area.
- WTTW. (n.d.). *Southwest Washington, DC*. https://www.wttw.com/ten/towns/southwest-washington-dc`,
      recallContent: [
        {
          prompt: "What are the most cited figures for the scale of the Southwest clearance, and how should you treat them?",
          answer: "About 99 percent of buildings on roughly 560 acres, displacing about 23,000 residents and 1,500 businesses. They are compiled figures repeated across local histories, not a single census tabulation, so name the source and say what each counts.",
        },
        {
          prompt: "What was Daniel Thursz's 1966 study, and who published it?",
          answer: "Where Are They Now? A study of the impact of relocation on former residents of Southwest Washington, published by the Health and Welfare Council of the National Capital Area. It followed displaced families.",
        },
        {
          prompt: "Summarise Thursz's findings on housing cost and employment.",
          answer: "Housing quality generally rose, but 57 percent of surveyed residents paid more than in Southwest, most at least 20 dollars a month more. The share of household heads not working rose from 52 percent before to 62 percent after, partly because they lived farther from work.",
        },
        {
          prompt: "Why is the Thursz study the honest heart of beat 1?",
          answer: "Because renewal was sold as slum clearance for the benefit of slum residents, and Thursz measured the residents afterward: better plumbing bought at the price of higher rent, worse employment, and a scattered community. It is a measured outcome with an author and a date, not a lament or a defence.",
        },
        {
          prompt: "What did Thursz say happened to the community as a whole?",
          answer: "It was scattered \"as leaves on a windy autumn day,\" not resettled together but broken apart across the city, with residents generally moving to areas that would face increasing segregation and disinvestment.",
        },
      ],
    },
    {
      slug: "dc-quiz-then",
      title: "4 · Quiz: the neighbourhood",
      section: "Section 1 · Then",
      quiz: {
        passingScore: 70,
        // 15-question bank served 8 at a time with shuffled options, so a retake is a different
        // quiz rather than the same list (the repo standard, src/lib/quiz.ts).
        questionsPerAttempt: 8,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Where is Southwest in relation to the rest of Washington?",
            options: [
              "It is the smallest quadrant, a low wedge between the Capitol and the Potomac and Anacostia rivers",
              "It is the largest quadrant, north of the Capitol",
              "It is a suburb in Maryland",
              "It is the federal Mall itself",
            ],
            correctIndex: 0,
            explanation: "Southwest is the smallest of the city's four quadrants, a flat wedge of land at the river confluence, which began as a working port.",
            sourceLessonSlug: "dc-what-it-was",
          },
          {
            prompt: "What share of Southwest's residents were African American in 1950?",
            options: ["17 percent", "69 percent", "43 percent", "91 percent"],
            correctIndex: 1,
            explanation: "69 percent in 1950, which is why James Baldwin's phrase \"Negro removal\" attached to what followed.",
            sourceLessonSlug: "dc-what-it-was",
          },
          {
            prompt: "The phrase \"Negro removal,\" applied to urban renewal, is associated with which writer?",
            options: ["Langston Hughes", "Ralph Ellison", "James Baldwin", "Zora Neale Hurston"],
            correctIndex: 2,
            explanation: "James Baldwin gave the national name for what urban renewal did to Black neighbourhoods.",
            sourceLessonSlug: "dc-what-it-was",
          },
          {
            prompt: "What is an alley dwelling?",
            options: [
              "A luxury apartment on a main avenue",
              "A federal office building",
              "A houseboat on the waterfront",
              "A house built inside a city block, behind the street-facing row houses and reached through a narrow passage",
            ],
            correctIndex: 3,
            explanation: "Alley dwellings were a distinctive Washington form, often occupied by African American families, and reformers had defined them as a problem for half a century.",
            sourceLessonSlug: "dc-the-surveys",
          },
          {
            prompt: "According to the survey recited in Berman v. Parker, what share of dwellings in the area were reported \"beyond repair\"?",
            options: ["64.3 percent", "17.3 percent", "29.3 percent", "57.8 percent"],
            correctIndex: 0,
            explanation: "64.3 percent beyond repair, with only 17.3 percent satisfactory. The Court treated these figures as the fact base for clearance.",
            sourceLessonSlug: "dc-the-surveys",
          },
          {
            prompt: "Every figure in the Berman housing survey measures the same kind of thing. What is it?",
            options: [
              "The residents' incomes",
              "The building fabric, such as plumbing, wiring and repair",
              "Neighbourhood crime",
              "The count of local businesses",
            ],
            correctIndex: 1,
            explanation: "The survey counts only fabric, so it can only ever recommend replacing fabric. It measures nothing about the community.",
            sourceLessonSlug: "dc-the-surveys",
          },
          {
            prompt: "What is the \"circularity\" this course identifies in blight measurement?",
            options: [
              "Surveys are taken twice",
              "The buildings are round",
              "The poor conditions follow from decades of withheld investment and lending, and are then used to justify clearing the people who suffered them",
              "One family is counted more than once",
            ],
            correctIndex: 2,
            explanation: "The condition and its cause can be the same policy at two dates, which is the most important idea in the course.",
            sourceLessonSlug: "dc-the-surveys",
          },
          {
            prompt: "Does a housing survey, by itself, decide that a neighbourhood should be demolished?",
            options: [
              "Yes, the survey is the decision",
              "Only if over half the buildings fail",
              "Only a court may order a survey",
              "No, demolition is a separate decision made by a body under a statute, which cites the survey",
            ],
            correctIndex: 3,
            explanation: "People make the decision and cite the numbers. The survey is evidence, not a verdict.",
            sourceLessonSlug: "dc-the-surveys",
          },
          {
            prompt: "By the most cited estimate, roughly how much of Southwest was cleared, and how many residents were displaced?",
            options: [
              "About 99 percent of buildings on roughly 560 acres, displacing about 23,000 residents",
              "About half the buildings, roughly 5,000 residents",
              "A single block, about 200 residents",
              "The whole quadrant, about 100,000 residents",
            ],
            correctIndex: 0,
            explanation: "About 99 percent of buildings on roughly 560 acres, with about 23,000 residents and 1,500 businesses displaced. These are compiled figures, so carry their owner.",
            sourceLessonSlug: "dc-people-and-institutions",
          },
          {
            prompt: "How should you treat the \"23,000 residents, 1,500 businesses, 560 acres\" figures?",
            options: [
              "As an exact single census count",
              "As compiled figures repeated across local histories: name the source and say what each counts",
              "As invented and unusable",
              "As a federal survey with a stated method",
            ],
            correctIndex: 1,
            explanation: "Different accounts round the residents or count families rather than people. Carry the owner of the number, as the Indiana Avenue course did with its contested figure.",
            sourceLessonSlug: "dc-people-and-institutions",
          },
          {
            prompt: "What did Daniel Thursz's 1966 study set out to measure?",
            options: [
              "The architectural quality of the new buildings",
              "The cost of the freeway",
              "What happened to the residents of Southwest after they were displaced",
              "The number of federal employees in the area",
            ],
            correctIndex: 2,
            explanation: "Where Are They Now? followed displaced families, published by the Health and Welfare Council of the National Capital Area.",
            sourceLessonSlug: "dc-people-and-institutions",
          },
          {
            prompt: "What did Thursz find about housing cost after displacement?",
            options: [
              "Everyone paid less",
              "Rents were unchanged",
              "The city paid all housing costs",
              "57 percent paid more than they had in Southwest, most at least 20 dollars a month more",
            ],
            correctIndex: 3,
            explanation: "Housing quality often rose, but at a higher price, which is the uncomfortable finding renewal's promise did not account for.",
            sourceLessonSlug: "dc-people-and-institutions",
          },
          {
            prompt: "What happened to employment among displaced household heads, according to Thursz?",
            options: [
              "The share not working rose from 52 percent to 62 percent, partly because people lived farther from work",
              "It improved sharply",
              "It was unaffected",
              "Everyone found federal jobs",
            ],
            correctIndex: 0,
            explanation: "Displacement moved people away from where they worked, and employment outcomes worsened.",
            sourceLessonSlug: "dc-people-and-institutions",
          },
          {
            prompt: "Which pre-clearance Southwest institution outlived the renewal and still operates on the waterfront?",
            options: [
              "Lockefield Gardens",
              "The Maine Avenue fish market",
              "The Walker Theatre",
              "The original Arena Stage tent",
            ],
            correctIndex: 1,
            explanation: "The Maine Avenue fish market predates the clearance and continues, a rare thread of continuity on the waterfront.",
            sourceLessonSlug: "dc-people-and-institutions",
          },
          {
            prompt: "Why does this course insist you credit what Southwest's residents built, not only what was lost?",
            options: [
              "To make the history cheerful",
              "Because the buildings were famous",
              "Because a report that inventories only loss is incomplete, and the community's churches, businesses and civic life predated the planners",
              "Because the planners asked for it",
            ],
            correctIndex: 2,
            explanation: "Crediting what people built is a research standard, the same one the Indiana Avenue course applied. It is not a courtesy.",
            sourceLessonSlug: "dc-people-and-institutions",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 2 · Built  (beat 2: architecture and building typology)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "dc-built-plan",
      title: "5 · The plan that replaced a neighbourhood",
      section: "Section 2 · Built",
      body: `Beat 2 asks why the new place looks the way it does. In Southwest the answer starts not with a building but with a **plan**, and with the fact that two very different plans competed to shape the same cleared ground.

**Clearance and design were separate acts by separate bodies.** The clearing was done under the District of Columbia Redevelopment Act of 1945, by the Redevelopment Land Agency working with the National Capital Planning Commission, which Section 3 covers in detail. **What went up afterward was a design question**, and in the early 1950s Southwest became a national showcase for a specific idea about cities.

**Two plans, and the difference is the lesson.**
- An early plan associated with the architect **Chloethiel Woodard Smith** proposed, in 1952, a scheme that treated the waterfront and the residential blocks with a designer's care (Docomomo US, n.d.).
- A competing plan came in 1954 from the developer **William Zeckendorf** and his firm's architect **I. M. Pei**, which reorganised the area around large blocks, a central commercial spine, and a monumental plaza leading from the Mall to the water (Docomomo US, n.d.).

The eventual redevelopment drew on both, and the built result is the physical argument of a whole era of American planning: **replace a fine-grained neighbourhood of small lots and many owners with a coarse-grained landscape of large blocks and few owners.** That is not a matter of taste. It is a matter of who can afford to build at that scale, which is a civics question wearing an architecture costume.

**The governing idea: the superblock.** The plans dissolved the old street grid into **superblocks**, large parcels in which through-traffic is pushed to the edges and the interior is given to buildings, parking, and landscaped courts. Smith's waterfront scheme, for example, divided the area south of M Street into east and west superblocks, reserved the riverbank for parks, and linked the district to the Mall (Docomomo US, n.d.; HillRag, 2017). **A superblock is a decision about the street, and the street is the most democratic thing a city owns**, because anyone may walk it. Replacing a public grid with private courts changes who controls the space between buildings.

**Why this typology, and why then.** The postwar planning consensus held that the old neighbourhood was the disease and a cleared, rebuilt, rationally zoned district was the cure. **It was not enough, in that view, to repair bad buildings; the whole area had to be redesigned.** You will see the Supreme Court adopt exactly this reasoning, almost in these words, in lesson 9. Hold the thought: **the shape of these superblocks is the physical form of a legal holding you are about to read.**

**One caution before the next lesson.** It is tempting to judge the new Southwest as good or bad architecture and stop there. Resist that. **The question beat 2 actually asks is what a building type does**, not whether it is handsome. A superblock of towers set in landscaped courts can be genuinely well designed and still have replaced a neighbourhood whose residents were not asked whether they wanted to leave. Both of those are true, and lesson 6 holds them together.

## Sources
- Docomomo US. (n.d.). *The Southwest urban renewal area in Washington, D.C.* https://docomomo-us.org/news/the-southwest-urban-renewal-area-in-washington-d-c
- HillRag. (2017, April 18). *Harbour Square: A modernist jewel of Southwest DC celebrates its 50th anniversary*. https://www.hillrag.com/2017/04/18/harbour-square-modernist-jewel-southwest-dc-celebrates-50th-anniversary/
- Berman v. Parker, 348 U.S. 26 (1954). https://www.law.cornell.edu/supremecourt/text/348/26`,
      recallContent: [
        {
          prompt: "In Southwest, were clearance and new design done by the same act and body?",
          answer: "No. Clearance ran under the District of Columbia Redevelopment Act of 1945 through the Redevelopment Land Agency and the National Capital Planning Commission. What was built afterward was a separate design question, decided through competing plans.",
        },
        {
          prompt: "Name the two competing plans for Southwest and their rough dates.",
          answer: "An early plan by the architect Chloethiel Woodard Smith around 1952, and a competing 1954 plan by the developer William Zeckendorf with the architect I. M. Pei.",
        },
        {
          prompt: "What is a superblock, and why does this course call it a civics decision?",
          answer: "A large parcel that pushes through-traffic to its edges and gives the interior to buildings, parking and landscaped courts. It replaces a public street grid, the most democratic thing a city owns, with private courts, changing who controls the space between buildings.",
        },
        {
          prompt: "What did replacing small lots with superblocks mean for who could build?",
          answer: "Only parties who could afford to build at large scale, which is few owners rather than many. The coarse grain is a matter of who can afford it, a civics question in an architecture costume.",
        },
        {
          prompt: "What postwar idea justified redesigning the whole area rather than repairing buildings, and where do you meet it again?",
          answer: "The view that the old neighbourhood itself was the disease and only a cleared, rebuilt, rationally zoned district was the cure. The Supreme Court adopts almost the same reasoning in lesson 9.",
        },
      ],
    },
    {
      slug: "dc-built-superblocks",
      title: "6 · The superblocks as built",
      section: "Section 2 · Built",
      body: `Here is what actually went up, with architects and dates, because beat 2 is only teachable from the specific building. **These are among the most complete modernist residential ensembles in the United States, and every one of them stands on cleared ground.** Both facts belong in the same sentence.

**The typology, stated once so it carries across all of them.** The Southwest developments mix **high-rise apartment slabs raised on pilotis**, the columns that lift a building off the ground, **with clustered low row houses**, arranged inside superblocks threaded by pedestrian paths and courts rather than by the old streets (Docomomo US, n.d.). Learn that sentence and you can read any of these projects on sight.

| Development | Architect | Built | What it is |
|---|---|---|---|
| **Capitol Park** | Chloethiel Woodard Smith | 1957 to 1963 | The first completed superblock: apartment slabs and row houses in open landscaped grounds |
| **River Park** | Charles Goodman | 1960 to 1963 | A cooperative of towers and row houses |
| **Tiber Island** | Keyes, Lethbridge and Condon | 1961 to 1965 | Four towers and surrounding town houses around a central plaza |
| **Harbour Square** | Chloethiel Woodard Smith | 1960 to 1966 | The fourth superblock, apartments and town houses, with landscape by Dan Kiley |
| **Chalk House West** | Morris Lapidus, Harle and Liebman | 1962 to 1966 | Apartments in the modern idiom |
| **Waterside Park** | Sasaki, Walker and Associates (landscape) | 1968 to 1972 | Later waterfront residential with designed public landscape |

(Docomomo US, n.d.; HillRag, 2017.)

**Two names to hold, because they recur.** **Chloethiel Woodard Smith** designed both Capitol Park and Harbour Square and was one of the most significant women in American modernist practice (The Cultural Landscape Foundation, n.d.). **I. M. Pei**, through the Zeckendorf plan, shaped the commercial and civic heart of the district. **A cleared neighbourhood became a portfolio for major architects.** That is a real cultural fact about Southwest, and it is also the reason the district is so often written about from the top down, as a design achievement, rather than from the ground up, as a removal.

**The landscape is not decoration; it is the point.** In these superblocks the ground between the buildings, the lawns, the courts, the plantings by figures like Dan Kiley, does the work the street used to do. **The private landscaped court is what replaced the public alley and the public sidewalk**, and that substitution is the deepest thing beat 2 has to teach here: the new Southwest is beautiful in exactly the places the old Southwest was public.

**A discipline about praise.** You are allowed to find these buildings excellent. Preservationists do: several have local landmark status, which lesson 7 examines. **But architectural quality is evidence about the buildings, not about the decision that cleared the site.** The Indiana Avenue course made the same move about the Walker Building: a landmark is evidence about itself, and what the clearance did is a separate question with separate evidence. Keep the two ledgers apart and you can tell the whole truth about Southwest without flattening either half of it.

## Sources
- Docomomo US. (n.d.). *The Southwest urban renewal area in Washington, D.C.* https://docomomo-us.org/news/the-southwest-urban-renewal-area-in-washington-d-c
- HillRag. (2017, April 18). *Harbour Square: A modernist jewel of Southwest DC celebrates its 50th anniversary*. https://www.hillrag.com/2017/04/18/harbour-square-modernist-jewel-southwest-dc-celebrates-50th-anniversary/
- The Cultural Landscape Foundation. (n.d.). *Chloethiel Woodard Smith*. https://www.tclf.org/chloethiel-woodard-smith`,
      recallContent: [
        {
          prompt: "State the shared typology of the Southwest superblocks in one sentence.",
          answer: "High-rise apartment slabs raised on pilotis mixed with clustered low row houses, arranged inside superblocks threaded by pedestrian paths and courts rather than by the old streets.",
        },
        {
          prompt: "Which was the first completed superblock, who designed it, and when?",
          answer: "Capitol Park, designed by Chloethiel Woodard Smith, built from 1957 to 1963.",
        },
        {
          prompt: "Name two projects by Chloethiel Woodard Smith in Southwest.",
          answer: "Capitol Park and Harbour Square.",
        },
        {
          prompt: "Why does this course say the landscape between the buildings is the point, not decoration?",
          answer: "Because in these superblocks the lawns, courts and plantings do the work the street used to do. The private landscaped court is what replaced the public alley and sidewalk, so the new Southwest is designed in exactly the places the old Southwest was public.",
        },
        {
          prompt: "How should architectural quality and the clearance decision be kept apart?",
          answer: "Architectural quality is evidence about the buildings; the clearance is a separate question with separate evidence. A landmark is evidence about itself, so keep the two ledgers apart to tell the whole truth.",
        },
      ],
    },
    {
      slug: "dc-built-what-survived",
      title: "7 · What survived, and what preservation chose to save",
      section: "Section 2 · Built",
      body: `Almost nothing of the old Southwest stands. What does survive is worth reading closely, because **the handful of buildings that were spared tell you what mid-century preservation valued, and it is not what you might hope.**

**The survivors, from the record.** When Harbour Square was built between 1964 and 1966, the design incorporated several eighteenth-century buildings rather than demolishing them: **Wheat Row**, four attached brick houses at 1315, 1317, 1319, and 1321 Fourth Street S.W., built about 1794 and believed to be the first row houses in Washington; and the **Lewis House** and **Barney House**. With their inclusion, Harbour Square became **Washington's earliest example of incorporating historic landmark buildings into a larger new development** (DC Historic Sites, n.d.; Wheat Row, n.d.). Nearby, the **Thomas Law House**, built between 1794 and 1796, was likewise among the very few buildings spared (Thomas Law House, n.d.).

**Now read who built the survivors, because it is the sharp point of this lesson.** Wheat Row was put up around 1794 by the **Greenleaf Syndicate**, the land speculators, including Robert Morris, a financier of the American Revolution, who at one point owned a third of the saleable land in the new capital (Wheat Row, n.d.). These are **Federal-era houses of the founding gentry**. The Thomas Law House takes its name from a man who married a granddaughter of Martha Washington. **The buildings preserved out of a majority-Black working neighbourhood were the oldest and most genteel structures in it, the ones connected to the city's white founders**, and they were saved by being folded into a modernist superblock as objects of design.

**Compare that honestly with the Indiana Avenue course.** On Indiana Avenue the one structure that survived and was landmarked was the **Walker Building**, built by a Black-owned company, a monument to the community that made the district. In Southwest the structures that survived were **not** built by the displaced community; they predated it and belonged to the founders' era. **Both cities preserved something and cleared a living neighbourhood around it, but they preserved opposite things**, and the difference tells you that preservation saves what a given era decides is worth saving, which is itself a decision worth examining.

**What designation does, and what it does not.** As the Indiana Avenue course established, the levels of historic recognition are not equal in power.

| Designation | Who lists it | What it does | What it does NOT do |
|---|---|---|---|
| **National Register of Historic Places** | The Keeper of the National Register, on a nomination | Recognition; triggers federal review when federal money or a permit is involved; opens some tax credits | It does not stop a private owner from demolishing the building |
| **DC historic landmark or district** | The DC Historic Preservation Review Board under DC law | This is the level that regulates: it reviews exterior changes and demolition through a permit process | Only as strong as the local law and the board enforcing it |

**The timing rule, again.** The clearance of Southwest ran through the 1950s and 1960s. **The District's own historic-preservation law dates from 1978**, after the neighbourhood was gone. As in Indianapolis, **preservation arrived too late to protect what was cleared and in time only to protect what replaced it**, which is why several of the modernist superblocks now carry landmark status while the neighbourhood they replaced has none. That is not a coincidence. It is the ordinary sequence in American cities, and beat 3 is about the instruments that ran while preservation law did not yet exist.

## Sources
- DC Historic Sites (DC Preservation League). (n.d.). *Harbour Square*. https://historicsites.dcpreservation.org/items/show/731
- Thomas Law House. (n.d.). In *Wikipedia*. https://en.wikipedia.org/wiki/Thomas_Law_House
- Wheat Row. (n.d.). In *Wikipedia*. https://en.wikipedia.org/wiki/Wheat_Row`,
      recallContent: [
        {
          prompt: "Which eighteenth-century buildings were spared and folded into Harbour Square?",
          answer: "Wheat Row (four attached houses at 1315 to 1321 Fourth Street S.W., built about 1794 and believed the first row houses in Washington), plus the Lewis House and Barney House. The nearby Thomas Law House was also spared.",
        },
        {
          prompt: "Who originally built Wheat Row, and why does that matter to this lesson?",
          answer: "The Greenleaf Syndicate, land speculators including Robert Morris, around 1794. It matters because the buildings preserved from a majority-Black working neighbourhood were the oldest, most genteel structures, tied to the city's white founders, not anything the displaced community built.",
        },
        {
          prompt: "How does what survived in Southwest differ from what survived on Indiana Avenue?",
          answer: "On Indiana Avenue the survivor was the Walker Building, built by a Black-owned company as a monument to the community. In Southwest the survivors predated the displaced community and belonged to the founders' era. Both cities preserved something, but opposite things.",
        },
        {
          prompt: "Which level of designation actually regulates demolition, federal or local?",
          answer: "Local. National Register listing is recognition plus review leverage on federally funded or permitted work. A DC historic landmark or district, under DC's preservation law and review board, is what regulates exterior changes and demolition.",
        },
        {
          prompt: "When did DC's historic-preservation law take effect relative to the clearance, and what follows?",
          answer: "DC's preservation law dates from 1978, after Southwest was cleared. So preservation arrived too late to protect what was cleared and in time only to protect what replaced it, which is why the modernist superblocks can carry landmark status while the old neighbourhood has none.",
        },
      ],
    },
    // <<< APPEND NEXT SECTION ABOVE THIS LINE >>>
  ],
};
