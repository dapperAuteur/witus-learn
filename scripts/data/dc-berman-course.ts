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
    "A cited, high-school-and-up site course on Southwest Washington, DC, and Berman v. Parker (1954), the Supreme Court decision that made clearing land as \"blighted\" constitutionally safe across the whole country. The pilot course in this series found that a blight designation and land assembly, not the highway, actually cleared Indiana Avenue in Indianapolis. This is the course where that tool was authorised. Its prerequisites, The Green Book: How to Read a Route and Indiana Avenue: A District and What Replaced It, teach a method and apply it to one corridor; this course reads the opinion that licensed the method, quotes its operative language accurately, and is honest about what it did and did not hold, including that the plaintiff was a department store owner rather than a displaced resident. You will walk Southwest DC before clearance and read the surveys the Court relied on, see the modernist superblocks that replaced a working neighborhood, learn the instruments beat by beat, trace the holding forward to Kelo and back to Indiana Avenue while testing that link against a chronology, meet the freeway revolt that is one of the few victories in this series, learn why the people whose homes were cleared could not vote for the Congress that governed them, look up a real DC parcel, and write grounded nonfiction about one block. A 360 tour of the waterfront is planned and will be added to the Now section when it is captured.",
  lessons: [
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 1 · Then  (beat 1: US and state/local history)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "dc-what-it-was",
      title: "1 · Southwest: what it was, and who it was for",
      section: "Section 1 · Then",
      body: `**Start with the two prerequisites.** This course assumes you have finished *The Green Book: How to Read a Route*, which taught a method, and *Indiana Avenue: A District and What Replaced It*, which applied that method to one corridor and found something specific. On Indiana Avenue the popular story blamed the interstate, but the verifiable record showed the buildings went to a **blight designation** and to land assembly, not to the highway. **This course is where that blight tool was made constitutionally safe for the entire country.** The place is Southwest Washington, and the document is *Berman v. Parker*, decided in 1954.

**The place.** Southwest is the smallest of Washington's four quadrants, a low, flat wedge of land between the U.S. Capitol and the confluence of the Potomac and the Anacostia rivers. It began as a working river port and grew into a densely built, mixed neighborhood of row houses and alley dwellings. By the middle of the twentieth century it was one of the most crowded parts of the city and one of the poorest, and it was **majority Black: 69 percent of Southwest's residents were African American in 1950** (WTTW, n.d.).

**Who lived there, precisely.** Not one community but several sharing a few hundred acres. African American families, many descended from people who had come to the capital during and after slavery; Jewish and other immigrant merchants along the commercial streets; and a working-class population that historian and travel writer alike described as poor but rooted. **The writer James Baldwin later gave the national name for what happened to places like it, calling urban renewal "Negro removal"** (WTTW, n.d.). Hold that phrase for Section 3, where you will see the legal machinery that produced it.

**What it held.** A functioning neighborhood: churches, corner groceries, taverns, fraternal halls, a fish market on the Maine Avenue waterfront that predates the clearance and still operates, and the row-house streets and named alley communities where people actually lived. It was not a monument district. **It was a place where roughly 23,000 people lived their whole lives**, which is exactly why beat 1 asks you to establish what was there before anyone called it a problem (Boundary Stones, 2022).

**A warning about the word you are about to meet.** In Section 3 the government's own documents call this neighborhood **blighted** and **substandard**, and they back the words with a housing survey. Those surveys are real and the conditions they measured were real: crowding, outside toilets, houses without baths. **But a measured condition is not the same as a verdict about the people who lived in it**, and the reformers who photographed Southwest's alleys had been calling them a threat for fifty years before the bulldozers arrived. Read the surveys as evidence, and read the language around the surveys as an argument.

**A warning about tone, which is a research instruction and not a courtesy.** The residents of Southwest have living descendants, and a 1966 study you will meet in lesson 3 followed the scattered families by name. Do not write about Southwest as a vanished golden age, and do not write about it as a slum that deserved what it got. **Write about what people built, name it where the record names it, and keep every framing choice checkable against a source**, which is the standard the first two courses set and the one this course holds.

## Sources
- Boundary Stones (WETA). (2022, July 21). *The cost of urban renewal in Southwest DC*. https://boundarystones.weta.org/2022/07/21/cost-urban-renewal-southwest-dc
- WTTW. (n.d.). *Southwest Washington, DC*. https://www.wttw.com/ten/towns/southwest-washington-dc
- Berman v. Parker, 348 U.S. 26 (1954). https://www.law.cornell.edu/supremecourt/text/348/26`,
    },
    {
      slug: "dc-the-surveys",
      title: "2 · What the surveys said, and how to read one",
      section: "Section 1 · Then",
      body: `Before a government clears a neighborhood it measures it, and the measurement becomes the justification. **This lesson reads the measurement the way the method course taught you to read a Green Book listing: for what it counts, what it leaves out, and what its silences mean.**

**The alley-dwelling tradition.** Washington had a distinctive housing form, the **alley dwelling**: small houses built in the interiors of city blocks, behind the street-facing row houses, reached through narrow passages. Many were occupied by African American families and, earlier, by immigrants. For half a century, reformers, from the Progressive Era housing surveys through the federally chartered Alley Dwelling Authority of the 1930s, had defined the alleys as unhealthy and dangerous. **The reform tradition and the clearance tradition are the same tradition at two dates**, and Southwest is where it reached its conclusion (AAG, n.d.; WTTW, n.d.).

**The conditions were real.** In the early twentieth century Southwest was a densely populated working-class neighborhood lined with alley dwellings **where half the houses lacked indoor plumbing** (WTTW, n.d.). That is a genuine deprivation and this course does not minimize it. The families who lived without a private toilet or a bath were not living in a myth.

**Now read the survey that the Supreme Court itself would recite.** When the clearance of Southwest was challenged, the opinion in *Berman v. Parker* set out the physical findings for the area, and the numbers are worth reading exactly because a court treated them as the fact base for demolishing a neighborhood. The opinion reports that in the area **64.3 percent of the dwellings were beyond repair, 18.4 percent needed major repairs, and only 17.3 percent were satisfactory**; and that **57.8 percent had outside toilets, 60.3 percent had no baths, 29.3 percent lacked electricity, 82.2 percent had no wash basins or laundry tubs, and 83.8 percent lacked central heating** (Berman v. Parker, 1954).

**Three things a careful reader does with that block of numbers.**

**1. Notice what it measures, which is fabric.** Every figure is about the building: its roof, its plumbing, its wiring. **Not one figure is about the residents, the businesses, the churches, or whether the community worked.** A survey that counts only fabric can only ever recommend replacing fabric. This is the same limit you met in the Indiana Avenue course: a survey form measures buildings and needs other records for everything else.

**2. Ask where the conditions came from.** A neighborhood does not lack central heating and indoor plumbing by accident. It lacks them after decades in which owners did not invest, banks did not lend, and the city did not require or fund improvements, much of it along the color line the first two courses documented. **The condition and its cause can be the same policy at two different dates**, and then the condition is used to justify clearing the people who suffered it. That circularity is the single most important idea in this course, and Section 3 names the instrument that runs on it.

**3. Keep the survey and the verdict apart.** The survey says the buildings were in poor repair. It does not say the neighborhood should be demolished and its people dispersed. **That second step is a decision, made by a body, under a statute, and it is the subject of Section 3.** The numbers do not make the decision. People make the decision and cite the numbers.

**What the survey cannot tell you, and where to go instead.** It cannot tell you who owned the buildings, who the landlords were, how many residents were tenants versus owners, or where the people went. **For where they went, a real study exists**, and lesson 3 reads it.

## Sources
- AAG. (n.d.). *Stories of change hidden in Washington, D.C.'s alleys*. American Association of Geographers. https://www.aag.org/stories-of-change-hidden-in-washington-d-c-s-alleys/
- Berman v. Parker, 348 U.S. 26 (1954). https://www.law.cornell.edu/supremecourt/text/348/26
- WTTW. (n.d.). *Southwest Washington, DC*. https://www.wttw.com/ten/towns/southwest-washington-dc`,
      recallContent: [
        {
          prompt: "Where is Southwest, geographically, and what was it originally?",
          answer: "The smallest of Washington's four quadrants, a low flat wedge between the U.S. Capitol and the confluence of the Potomac and Anacostia rivers. It began as a working river port and grew into a dense mixed neighborhood of row houses and alley dwellings.",
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
      slug: "dc-people-and-institutions",
      title: "3 · The community, and where it went",
      section: "Section 1 · Then",
      body: `A neighborhood is people and institutions, not a housing-condition table. This lesson records what Southwest held, and then reads the one study that followed the residents out.

**What was there.** A complete working community on a few hundred acres: churches and synagogues, corner stores and taverns, fraternal lodges, the Maine Avenue fish market on the waterfront, and the dense residential streets and named alley communities where families had lived for generations (Boundary Stones, 2022; WTTW, n.d.). The clearance that Section 2 measured would eventually level, by the most cited estimate, **99 percent of the buildings across about 560 acres, displacing roughly 23,000 residents and about 1,500 businesses** (Boundary Stones, 2022).

**Read those numbers carefully, because they are compiled figures and you should carry their owner.** The 23,000 residents, 1,500 businesses, and 560 acres are the figures repeated across the local histories of Southwest, and Boundary Stones, the public-history project of the DC public television and radio station WETA, is a good place to anchor them (Boundary Stones, 2022). **They are not a single published census tabulation**, and different accounts round the residents to "more than 20,000" or count families rather than people. When you use a number, name where you got it and say what it counts, which is the discipline the Indiana Avenue course built around the contested 17,000 figure there.

**Now the study, which is the part most retellings skip.** In 1966 **Daniel Thursz** published *Where Are They Now? A Study of the Impact of Relocation on Former Residents of Southwest Washington*, for the Health and Welfare Council of the National Capital Area. It followed families who had been displaced. Its findings are specific and they resist an easy story (Thursz, 1966).

- **The community was scattered.** Thursz described residents dispersed "as leaves on a windy autumn day," not resettled together but broken apart across the city (Thursz, 1966, as described in Boundary Stones, 2022; The Southwester, 2024).
- **Housing quality rose and household finances fell.** Many families did move into physically better housing, but **57 percent reported paying more for it than they had paid in Southwest**, with most of those paying at least 20 dollars more a month and some more than 40 (Thursz, 1966, as reported in The Southwester, 2024).
- **Employment worsened.** The share of household heads not working **rose from 52 percent before displacement to 62 percent after**, in part because people now lived farther from where they worked (Thursz, 1966, as reported in The Southwester, 2024).
- **Where they went mattered.** Displaced residents did not generally move to wealthy, well-served neighborhoods; they moved to areas that would themselves face increasing segregation and disinvestment (The Southwester, 2024).

**Why this study is the honest heart of beat 1.** Urban renewal was sold as slum clearance for the benefit of slum residents. Thursz measured the residents afterward and found better plumbing bought at the price of higher rent, worse employment, and a shattered community. **That is not a golden-age lament and it is not a defense of the clearance; it is a measured outcome with an author and a date**, which is the only kind of claim this course lets you make.

**Credit what was built, not only what was lost.** Southwest was a neighborhood people made, with congregations, businesses, and civic life that predated the planners and, in the case of the fish market, outlived them. **A course that inventories only loss is an incomplete report**, and the assignment in Section 6 will hold you to crediting what people built here.

## Sources
- Boundary Stones (WETA). (2022, July 21). *The cost of urban renewal in Southwest DC*. https://boundarystones.weta.org/2022/07/21/cost-urban-renewal-southwest-dc
- The Southwester. (2024, April 13). *Where are they now? A 1966 study on outcomes for Southwest's displaced residents*. https://thesouthwester.com/2024/04/13/where-are-they-now-a-1966-study-on-outcomes-for-southwests-displaced-residents/
- Thursz, D. (1966). *Where are they now? A study of the impact of relocation on former residents of southwest Washington, who were served in an HWC demonstration project*. Health and Welfare Council of the National Capital Area.
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
          answer: "A neighborhood lacks plumbing and heating after decades of withheld investment, refused lending, and unenforced standards, much of it along the color line. The condition is then used to justify clearing the people who suffered it. The condition and its cause are the same policy at two dates.",
        },
        {
          prompt: "Does a housing survey, by itself, decide that a neighbourhood should be demolished?",
          answer: "No. The survey reports the condition of the buildings. Demolishing the neighborhood and dispersing its people is a separate decision made by a body under a statute, which is the subject of Section 3. People make the decision and cite the numbers.",
        },
      ],
    },
    {
      slug: "dc-quiz-then",
      title: "4 · Quiz: the neighborhood",
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
              "It is the smallest quadrant, a low wedge between the Capitol and the river confluence",
              "It is the largest quadrant, lying north of the Capitol out to the Maryland line",
              "It is a Maryland suburb across the Anacostia, annexed to the city after the Civil War",
              "It is the federal Mall itself, the open green spine running west of the Capitol",
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
            explanation: "James Baldwin gave the national name for what urban renewal did to Black neighborhoods.",
            sourceLessonSlug: "dc-what-it-was",
          },
          {
            prompt: "What is an alley dwelling?",
            options: [
              "A luxury apartment fronting a main avenue, built for the district's wealthiest tenants",
              "A federal office block raised along the cleared Southwest waterfront in the 1960s",
              "A houseboat moored at the Maine Avenue wharf, rented as seasonal riverfront housing",
              "A small house inside a city block, behind the row houses, up a narrow passage",
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
              "The residents' incomes and how much rent each household paid",
              "The building fabric: its plumbing, wiring and state of repair",
              "The rate of neighborhood crime recorded by the police",
              "The number of local businesses and church congregations",
            ],
            correctIndex: 1,
            explanation: "The survey counts only fabric, so it can only ever recommend replacing fabric. It measures nothing about the community.",
            sourceLessonSlug: "dc-the-surveys",
          },
          {
            prompt: "What is the \"circularity\" this course identifies in blight measurement?",
            options: [
              "The same block is surveyed twice and the two counts are averaged together",
              "The redevelopment plan is drawn as a ring of blocks around a central plaza",
              "Decades of withheld lending cause the conditions later cited to justify clearance",
              "One displaced family is accidentally counted more than once in the totals",
            ],
            correctIndex: 2,
            explanation: "The condition and its cause can be the same policy at two dates, which is the most important idea in the course.",
            sourceLessonSlug: "dc-the-surveys",
          },
          {
            prompt: "Does a housing survey, by itself, decide that a neighbourhood should be demolished?",
            options: [
              "Yes, the survey findings are the demolition order themselves",
              "Only when more than half the surveyed buildings are beyond repair",
              "Only a federal court may order a survey and the clearance that follows",
              "No, demolition is a separate decision a body makes under a statute",
            ],
            correctIndex: 3,
            explanation: "People make the decision and cite the numbers. The survey is evidence, not a verdict.",
            sourceLessonSlug: "dc-the-surveys",
          },
          {
            prompt: "By the most cited estimate, roughly how much of Southwest was cleared, and how many residents were displaced?",
            options: [
              "About 99 percent of buildings on roughly 560 acres, about 23,000 residents",
              "About half the buildings on some 200 acres, roughly 5,000 residents",
              "A single block near the waterfront, about 200 displaced residents",
              "The whole quadrant and much of Southeast, about 100,000 residents",
            ],
            correctIndex: 0,
            explanation: "About 99 percent of buildings on roughly 560 acres, with about 23,000 residents and 1,500 businesses displaced. These are compiled figures, so carry their owner.",
            sourceLessonSlug: "dc-people-and-institutions",
          },
          {
            prompt: "How should you treat the \"23,000 residents, 1,500 businesses, 560 acres\" figures?",
            options: [
              "As one exact tabulation taken straight from the 1950 federal census count",
              "As compiled figures from local histories: name the source and what each counts",
              "As invented figures with no source at all, which cannot honestly be used",
              "As a single federal survey published with one clearly stated method",
            ],
            correctIndex: 1,
            explanation: "Different accounts round the residents or count families rather than people. Carry the owner of the number, as the Indiana Avenue course did with its contested figure.",
            sourceLessonSlug: "dc-people-and-institutions",
          },
          {
            prompt: "What did Daniel Thursz's 1966 study set out to measure?",
            options: [
              "The architectural quality of the new modernist superblocks",
              "The construction cost of the Southeast-Southwest Freeway",
              "What happened to Southwest's residents after they were displaced",
              "The number of federal employees working in the cleared area",
            ],
            correctIndex: 2,
            explanation: "Where Are They Now? followed displaced families, published by the Health and Welfare Council of the National Capital Area.",
            sourceLessonSlug: "dc-people-and-institutions",
          },
          {
            prompt: "What did Thursz find about housing cost after displacement?",
            options: [
              "Nearly everyone paid less rent in their new homes than before",
              "Rents stayed the same because the new housing was rent-controlled",
              "The city covered all housing costs for the displaced families",
              "57 percent paid more than in Southwest, most at least 20 dollars more",
            ],
            correctIndex: 3,
            explanation: "Housing quality often rose, but at a higher price, which is the uncomfortable finding renewal's promise did not account for.",
            sourceLessonSlug: "dc-people-and-institutions",
          },
          {
            prompt: "What happened to employment among displaced household heads, according to Thursz?",
            options: [
              "The share not working rose from 52 to 62 percent, partly from farther commutes",
              "It improved sharply as steady new jobs opened near the rebuilt superblocks",
              "It was unaffected, since most household heads kept their old jobs",
              "Nearly every displaced household head found steady federal work",
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
              "To make the neighborhood's history read as cheerful and uplifting",
              "Because the cleared buildings were nationally famous landmarks",
              "Because a report of only loss is incomplete: the churches predated the planners",
              "Because the redevelopment planners themselves requested the credit be given",
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
      title: "5 · The plan that replaced a neighborhood",
      section: "Section 2 · Built",
      body: `Beat 2 asks why the new place looks the way it does. In Southwest the answer starts not with a building but with a **plan**, and with the fact that two very different plans competed to shape the same cleared ground.

**Clearance and design were separate acts by separate bodies.** The clearing was done under the District of Columbia Redevelopment Act of 1945, by the Redevelopment Land Agency working with the National Capital Planning Commission, which Section 3 covers in detail. **What went up afterward was a design question**, and in the early 1950s Southwest became a national showcase for a specific idea about cities.

**Two plans, and the difference is the lesson.**
- An early plan associated with the architect **Chloethiel Woodard Smith** proposed, in 1952, a scheme that treated the waterfront and the residential blocks with a designer's care (Docomomo US, n.d.).
- A competing plan came in 1954 from the developer **William Zeckendorf** and his firm's architect **I. M. Pei**, which reorganised the area around large blocks, a central commercial spine, and a monumental plaza leading from the Mall to the water (Docomomo US, n.d.).

The eventual redevelopment drew on both, and the built result is the physical argument of a whole era of American planning: **replace a fine-grained neighborhood of small lots and many owners with a coarse-grained landscape of large blocks and few owners.** That is not a matter of taste. It is a matter of who can afford to build at that scale, which is a civics question wearing an architecture costume.

**The governing idea: the superblock.** The plans dissolved the old street grid into **superblocks**, large parcels in which through-traffic is pushed to the edges and the interior is given to buildings, parking, and landscaped courts. Smith's waterfront scheme, for example, divided the area south of M Street into east and west superblocks, reserved the riverbank for parks, and linked the district to the Mall (Docomomo US, n.d.; HillRag, 2017). **A superblock is a decision about the street, and the street is the most democratic thing a city owns**, because anyone may walk it. Replacing a public grid with private courts changes who controls the space between buildings.

**Why this typology, and why then.** The postwar planning consensus held that the old neighborhood was the disease and a cleared, rebuilt, rationally zoned district was the cure. **It was not enough, in that view, to repair bad buildings; the whole area had to be redesigned.** You will see the Supreme Court adopt exactly this reasoning, almost in these words, in lesson 9. Hold the thought: **the shape of these superblocks is the physical form of a legal holding you are about to read.**

**One caution before the next lesson.** It is tempting to judge the new Southwest as good or bad architecture and stop there. Resist that. **The question beat 2 actually asks is what a building type does**, not whether it is handsome. A superblock of towers set in landscaped courts can be genuinely well designed and still have replaced a neighborhood whose residents were not asked whether they wanted to leave. Both of those are true, and lesson 6 holds them together.

## Sources
- Docomomo US. (n.d.). *The Southwest urban renewal area in Washington, D.C.* https://docomomo-us.org/news/the-southwest-urban-renewal-area-in-washington-d-c
- HillRag. (2017, April 18). *Harbour Square: A modernist jewel of Southwest DC celebrates its 50th anniversary*. https://www.hillrag.com/2017/04/18/harbour-square-modernist-jewel-southwest-dc-celebrates-50th-anniversary/
- Berman v. Parker, 348 U.S. 26 (1954). https://www.law.cornell.edu/supremecourt/text/348/26`,
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
          answer: "Because renewal was sold as slum clearance for the benefit of slum residents, and Thursz measured the residents afterward: better plumbing bought at the price of higher rent, worse employment, and a scattered community. It is a measured outcome with an author and a date, not a lament or a defense.",
        },
        {
          prompt: "What did Thursz say happened to the community as a whole?",
          answer: "It was scattered \"as leaves on a windy autumn day,\" not resettled together but broken apart across the city, with residents generally moving to areas that would face increasing segregation and disinvestment.",
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

**Two names to hold, because they recur.** **Chloethiel Woodard Smith** designed both Capitol Park and Harbour Square and was one of the most significant women in American modernist practice (The Cultural Landscape Foundation, n.d.). **I. M. Pei**, through the Zeckendorf plan, shaped the commercial and civic heart of the district. **A cleared neighborhood became a portfolio for major architects.** That is a real cultural fact about Southwest, and it is also the reason the district is so often written about from the top down, as a design achievement, rather than from the ground up, as a removal.

**The landscape is not decoration; it is the point.** In these superblocks the ground between the buildings, the lawns, the courts, the plantings by figures like Dan Kiley, does the work the street used to do. **The private landscaped court is what replaced the public alley and the public sidewalk**, and that substitution is the deepest thing beat 2 has to teach here: the new Southwest is beautiful in exactly the places the old Southwest was public.

**A discipline about praise.** You are allowed to find these buildings excellent. Preservationists do: several have local landmark status, which lesson 7 examines. **But architectural quality is evidence about the buildings, not about the decision that cleared the site.** The Indiana Avenue course made the same move about the Walker Building: a landmark is evidence about itself, and what the clearance did is a separate question with separate evidence. Keep the two ledgers apart and you can tell the whole truth about Southwest without flattening either half of it.

## Sources
- Docomomo US. (n.d.). *The Southwest urban renewal area in Washington, D.C.* https://docomomo-us.org/news/the-southwest-urban-renewal-area-in-washington-d-c
- HillRag. (2017, April 18). *Harbour Square: A modernist jewel of Southwest DC celebrates its 50th anniversary*. https://www.hillrag.com/2017/04/18/harbour-square-modernist-jewel-southwest-dc-celebrates-50th-anniversary/
- The Cultural Landscape Foundation. (n.d.). *Chloethiel Woodard Smith*. https://www.tclf.org/chloethiel-woodard-smith`,
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
          answer: "The view that the old neighborhood itself was the disease and only a cleared, rebuilt, rationally zoned district was the cure. The Supreme Court adopts almost the same reasoning in lesson 9.",
        },
      ],
    },
    {
      slug: "dc-built-what-survived",
      title: "7 · What survived, and what preservation chose to save",
      section: "Section 2 · Built",
      body: `Almost nothing of the old Southwest stands. What does survive is worth reading closely, because **the handful of buildings that were spared tell you what mid-century preservation valued, and it is not what you might hope.**

**The survivors, from the record.** When Harbour Square was built between 1964 and 1966, the design incorporated several eighteenth-century buildings rather than demolishing them: **Wheat Row**, four attached brick houses at 1315, 1317, 1319, and 1321 Fourth Street S.W., built about 1794 and believed to be the first row houses in Washington; and the **Lewis House** and **Barney House**. With their inclusion, Harbour Square became **Washington's earliest example of incorporating historic landmark buildings into a larger new development** (DC Historic Sites, n.d.; Wheat Row, n.d.). Nearby, the **Thomas Law House**, built between 1794 and 1796, was likewise among the very few buildings spared (Thomas Law House, n.d.).

**Now read who built the survivors, because it is the sharp point of this lesson.** Wheat Row was put up around 1794 by the **Greenleaf Syndicate**, the land speculators, including Robert Morris, a financier of the American Revolution, who at one point owned a third of the saleable land in the new capital (Wheat Row, n.d.). These are **Federal-era houses of the founding gentry**. The Thomas Law House takes its name from a man who married a granddaughter of Martha Washington. **The buildings preserved out of a majority-Black working neighborhood were the oldest and most genteel structures in it, the ones connected to the city's white founders**, and they were saved by being folded into a modernist superblock as objects of design.

**Compare that honestly with the Indiana Avenue course.** On Indiana Avenue the one structure that survived and was landmarked was the **Walker Building**, built by a Black-owned company, a monument to the community that made the district. In Southwest the structures that survived were **not** built by the displaced community; they predated it and belonged to the founders' era. **Both cities preserved something and cleared a living neighborhood around it, but they preserved opposite things**, and the difference tells you that preservation saves what a given era decides is worth saving, which is itself a decision worth examining.

**What designation does, and what it does not.** As the Indiana Avenue course established, the levels of historic recognition are not equal in power.

| Designation | Who lists it | What it does | What it does NOT do |
|---|---|---|---|
| **National Register of Historic Places** | The Keeper of the National Register, on a nomination | Recognition; triggers federal review when federal money or a permit is involved; opens some tax credits | It does not stop a private owner from demolishing the building |
| **DC historic landmark or district** | The DC Historic Preservation Review Board under DC law | This is the level that regulates: it reviews exterior changes and demolition through a permit process | Only as strong as the local law and the board enforcing it |

**The timing rule, again.** The clearance of Southwest ran through the 1950s and 1960s. **The District's own historic-preservation law dates from 1978**, after the neighborhood was gone. As in Indianapolis, **preservation arrived too late to protect what was cleared and in time only to protect what replaced it**, which is why several of the modernist superblocks now carry landmark status while the neighborhood they replaced has none. That is not a coincidence. It is the ordinary sequence in American cities, and beat 3 is about the instruments that ran while preservation law did not yet exist.

## Sources
- DC Historic Sites (DC Preservation League). (n.d.). *Harbour Square*. https://historicsites.dcpreservation.org/items/show/731
- Thomas Law House. (n.d.). In *Wikipedia*. https://en.wikipedia.org/wiki/Thomas_Law_House
- Wheat Row. (n.d.). In *Wikipedia*. https://en.wikipedia.org/wiki/Wheat_Row`,
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
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 3 · Powers  (beat 3: civics, planning, law, politics. THE LOAD-BEARING SECTION)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "dc-powers-blight",
      title: "8 · Instrument one: the statute and the designation",
      section: "Section 3 · Powers",
      body: `**This is the section the whole course exists for.** Everything before it establishes what was here and what replaced it. This section teaches the tools, because, as the Indiana Avenue course put it, **a building does not disappear; it is removed by somebody with an instrument.** In Southwest the first instrument is a federal statute, and it is the reason this city, not Indianapolis, is where the series stops to read the law.

**An instrument, in this course's sense, is a specific legal power, exercised by a specific body, under a specific statute, leaving a specific document.** That last clause is what makes history researchable: if a power was used, a record exists and it has a name.

**Instrument one is designation under a statute.** In 1945 Congress passed the **District of Columbia Redevelopment Act of 1945** (60 Stat. 790, approved August 2, 1946). It established the purpose of urban renewal in the capital and created the **Redevelopment Land Agency (RLA)**, the body empowered to acquire land (District of Columbia Redevelopment Act of 1945; Docomomo US, n.d.).

**Why Congress and not a city council.** Here is the fact that makes DC different from every other city in this series, and you will meet its full weight in lesson 13. **The District of Columbia had no home rule.** In 1945 Washington had no elected mayor and no elected council; **Congress legislated for the city directly.** So the statute that authorised clearing Southwest was passed by a national legislature in which the people of Southwest had no vote at all. Hold that; it is not a detail.

**How the statute ran.** The Act authorised the RLA to acquire land in accordance with a comprehensive plan prepared by the **National Capital Planning Commission (NCPC)**, for "the redevelopment of blighted territory... and the prevention, reduction, or elimination of blighting factors or causes of blight" (District of Columbia Redevelopment Act of 1945). The NCPC and RLA surveyed the city for "slum or blighted areas," and **Southwest was the first area designated. By the end of 1952 the first official urban renewal plan for Southwest, designated "Area B," had been approved** (Docomomo US, n.d.).

**Now the transferable part, which is the same lesson the Indiana Avenue course taught about the word "blighted."**
1. **"Blighted" is a legal conclusion, not a description.** A body reaches it, on a record, against criteria written into a statute. Once reached, it unlocks powers that do not otherwise exist: acquisition, clearance, and resale to a redeveloper.
2. **The criteria are about physical condition**, and physical condition follows from decades of refused lending and withheld investment, which is the circularity lesson 2 established. **The finding and its cause can be the same policy at two dates.**
3. **A designation is public.** There is a plan, a boundary, a commission, and a record. **All of it can be requested.**

**What makes Southwest the pivot of this whole series.** In Indianapolis the blight tool was used, but its constitutional validity was never fought all the way up. In Washington it was, because a property owner in Area B sued, arguing that taking his land violated the Fifth Amendment. **That lawsuit is the next lesson, and its answer is the reason the blight designation became safe to use in every city in the country.**

## Sources
- District of Columbia Redevelopment Act of 1945, 60 Stat. 790 (1946). https://www.law.cornell.edu/topn/district_of_columbia_redevelopment_act_of_1945
- Berman v. Parker, 348 U.S. 26 (1954). https://www.law.cornell.edu/supremecourt/text/348/26
- Docomomo US. (n.d.). *The Southwest urban renewal area in Washington, D.C.* https://docomomo-us.org/news/the-southwest-urban-renewal-area-in-washington-d-c`,
      recallContent: [
        {
          prompt: "Which eighteenth-century buildings were spared and folded into Harbour Square?",
          answer: "Wheat Row (four attached houses at 1315 to 1321 Fourth Street S.W., built about 1794 and believed the first row houses in Washington), plus the Lewis House and Barney House. The nearby Thomas Law House was also spared.",
        },
        {
          prompt: "Who originally built Wheat Row, and why does that matter to this lesson?",
          answer: "The Greenleaf Syndicate, land speculators including Robert Morris, around 1794. It matters because the buildings preserved from a majority-Black working neighborhood were the oldest, most genteel structures, tied to the city's white founders, not anything the displaced community built.",
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
          answer: "DC's preservation law dates from 1978, after Southwest was cleared. So preservation arrived too late to protect what was cleared and in time only to protect what replaced it, which is why the modernist superblocks can carry landmark status while the old neighborhood has none.",
        },
      ],
    },
    {
      slug: "dc-powers-berman",
      title: "9 · Instrument two: Berman v. Parker, read closely",
      section: "Section 3 · Powers",
      body: `**Read the opinion, not a summary of it.** *Berman v. Parker*, 348 U.S. 26, was decided on **November 22, 1954**, by a unanimous Court, in an opinion by Justice **William O. Douglas**. It is the single most important document in this entire course, and its exact words are worth more than any paraphrase.

**Who actually sued, which almost every retelling gets wrong.** The plaintiff was not a displaced family. The opinion states: **"Appellants own property in Area B at 712 Fourth Street, S.W. It is not used as a dwelling or place of habitation. A department store is located on it"** (Berman v. Parker, 1954). The challenger was the owner of a going commercial business, and his argument was pointed: **my property is not a slum, so you may not take it to cure a slum.** Keep that in view. **The case that made it constitutional to clear homes as blighted was won against a store owner whose building was not blighted.**

**The Court's answer, in its own language.** Douglas swept the objection aside with a definition of public purpose so broad that it governed American takings for the next half-century.

- On what counts as a public purpose: **"The concept of the public welfare is broad and inclusive... The values it represents are spiritual as well as physical, aesthetic as well as monetary. It is within the power of the legislature to determine that the community should be beautiful as well as healthy, spacious as well as clean, well-balanced as well as carefully patrolled"** (Berman v. Parker, 1954).
- On beauty as a legitimate public end: **"If those who govern the District of Columbia decide that the Nation's Capital should be beautiful as well as sanitary, there is nothing in the Fifth Amendment that stands in the way"** (Berman v. Parker, 1954).
- On the role of the courts: the Court said that **"when the legislature has spoken, the public interest has been declared in terms well-nigh conclusive"** and that **the legislature, not the judiciary, is "the main guardian of the public needs to be served by social legislation"** (Berman v. Parker, 1954).

**Why the store owner lost, which is the actual holding.** The Court held that redevelopment may treat an area as a **whole**. It reasoned that community redevelopment programs **"need not, by force of the Constitution, be on a piecemeal basis,"** so an owner cannot defeat an area-wide plan by pointing to his own individual lot (Berman v. Parker, 1954). And it held that the government may then convey the cleared land to a private redeveloper, because **"the public end may be as well or better served through an agency of private enterprise than through a department of government"** (Berman v. Parker, 1954). Read those two moves together and you have the entire machine: **the whole area may be taken as a unit, and it may be handed to a private developer afterward.**

**Now say honestly what the case did NOT hold.**
1. **It did not hold that 712 Fourth Street was a slum.** It held that it did not need to be, so long as it sat inside an area designated for redevelopment as a whole.
2. **It did not decide what anyone should be paid.** Compensation is a separate question, litigated case by case.
3. **It did not rule on whether the plan was wise.** The Court expressly said, in the same opinion, that it does not sit to judge whether a particular project is desirable.
4. **It was not brought by the people it most affected.** The 23,000 displaced residents of Southwest were not the plaintiffs. **The named party was a business, and the decision that authorised removing a neighborhood turned on a store.**

**What the beauty language really licensed.** The line about the capital being "beautiful as well as sanitary" is often quoted as an inspiring defense of civic design. Read in place, it does harder work: **it says a government may take your property because the area could look and function better, not only because your building is unsafe.** That is the doctrine that made "blight" elastic, and lesson 11 follows it forward to the day it reached ordinary, well-kept homes.

## Sources
- Berman v. Parker, 348 U.S. 26 (1954). https://www.law.cornell.edu/supremecourt/text/348/26
- U.S. Const. amend. V.
- District of Columbia Redevelopment Act of 1945, 60 Stat. 790 (1946). https://www.law.cornell.edu/topn/district_of_columbia_redevelopment_act_of_1945`,
      recallContent: [
        {
          prompt: "Define an 'instrument' as this course uses the word.",
          answer: "A specific legal power, exercised by a specific body, under a specific statute, leaving a specific document. The last part is what makes it researchable.",
        },
        {
          prompt: "What statute authorised clearing Southwest, and what body did it create?",
          answer: "The District of Columbia Redevelopment Act of 1945 (60 Stat. 790, approved August 2, 1946), which created the Redevelopment Land Agency to acquire land under a comprehensive plan prepared by the National Capital Planning Commission.",
        },
        {
          prompt: "Why was the statute passed by Congress rather than a city council?",
          answer: "Because the District had no home rule: in 1945 Washington had no elected mayor or council, and Congress legislated for the city directly. The people of Southwest had no vote in the legislature that authorised clearing their neighborhood.",
        },
        {
          prompt: "When was Southwest's Area B plan approved, and what was its status among DC renewal areas?",
          answer: "By the end of 1952. Southwest was the first area designated for renewal in the District.",
        },
        {
          prompt: "Why is Southwest the pivot of this whole series rather than just another cleared district?",
          answer: "Because a property owner in Area B sued, arguing the taking violated the Fifth Amendment, and the case went to the Supreme Court. Its answer made the blight-designation tool constitutionally safe to use in every city in the country.",
        },
      ],
    },
    {
      slug: "dc-powers-eminent-domain",
      title: "10 · Instrument three: eminent domain, and who ends up with the land",
      section: "Section 3 · Powers",
      body: `The designation makes land takeable and *Berman* made the designation safe. **Eminent domain is the power that does the taking.**

**What it is.** The government's authority to take private property for public use on payment of just compensation. The constitutional text is the last clause of the **Fifth Amendment**: "nor shall private property be taken for public use, without just compensation." The Fourteenth Amendment applies the requirement to the states, though in the District the Fifth applies directly because the District is federal ground.

**Three things learners usually have wrong, and Berman settled two of them.**

**1. The owner does not have to agree.** The dispute in a condemnation case is normally about **price**, not about whether the taking happens. Refusing an offer sends the matter to a court that sets the number; it does not stop the project.

**2. The taker is usually not who ends up with the land.** Under a redevelopment statute a public body acquires and clears, then conveys the cleared land to a **private developer**. Before *Berman*, it was genuinely arguable that handing condemned land to a private company was not a "public use" at all. **Berman closed that argument**: the Court said the public end may be served as well through private enterprise, so the government could take Southwest and give it to the developers who built the superblocks in Section 2 (Berman v. Parker, 1954). **The design of urban renewal, public taking followed by private rebuilding, is not an abuse of the doctrine. Berman made it the doctrine.**

**3. It leaves a paper trail.** Offers, appraisals, condemnation filings, and settlements are court and agency records. **This is the most checkable instrument in the section**, which is why lesson 18 has you look up a real parcel.

**The honest asymmetry, which Berman did not touch.** *Berman* resolved whether the taking was lawful. It said nothing about whether the compensation made anyone whole, and the Thursz study in lesson 3 is the answer it left blank: **owners were paid for buildings, but tenants, who were most of Southwest, owned no building to be paid for**, and the relocation they received did not preserve the community or hold their housing costs down. **A lawful taking with just compensation for the owner can still shatter a neighborhood of renters**, and that gap between "the owner was paid" and "the residents were made whole" is where the human cost of this instrument actually sits.

**A note on comparison across time.** Relocation standards for federally funded projects were later raised by the **Uniform Relocation Assistance and Real Property Acquisition Policies Act of 1970**. Most of the Southwest clearance predates it. **When you compare a 1950s taking to a 1970s one, you are comparing two legal regimes**, and saying so is part of getting the history right, exactly as the Indiana Avenue course insisted.

## Sources
- Berman v. Parker, 348 U.S. 26 (1954). https://www.law.cornell.edu/supremecourt/text/348/26
- U.S. Const. amend. V.
- Uniform Relocation Assistance and Real Property Acquisition Policies Act of 1970, 42 U.S.C. § 4601 et seq. https://www.govinfo.gov/app/collection/uscode
- Thursz, D. (1966). *Where are they now? A study of the impact of relocation on former residents of southwest Washington*. Health and Welfare Council of the National Capital Area.`,
      recallContent: [
        {
          prompt: "Who was the plaintiff in Berman v. Parker, and what was his property?",
          answer: "Not a displaced resident. The appellants owned property at 712 Fourth Street, S.W., in Area B, which was not a dwelling; a department store stood on it. Their argument was that a non-slum property could not be taken to cure a slum.",
        },
        {
          prompt: "Quote the Court's core statement about the scope of public welfare.",
          answer: "\"The concept of the public welfare is broad and inclusive... The values it represents are spiritual as well as physical, aesthetic as well as monetary,\" and it is within the legislature's power to decide the community should be beautiful as well as healthy.",
        },
        {
          prompt: "What did the Court say about beauty and the Fifth Amendment?",
          answer: "\"If those who govern the District of Columbia decide that the Nation's Capital should be beautiful as well as sanitary, there is nothing in the Fifth Amendment that stands in the way.\"",
        },
        {
          prompt: "What was the actual holding that made the store owner lose?",
          answer: "That redevelopment may treat an area as a whole and need not proceed piecemeal, so an owner cannot defeat an area-wide plan by pointing to his own lot; and that the cleared land may be conveyed to a private redeveloper, because the public end may be as well served through private enterprise.",
        },
        {
          prompt: "Name two things Berman did NOT hold.",
          answer: "It did not hold that 712 Fourth Street was itself a slum; it did not decide what anyone should be paid; and it did not rule on whether the plan was wise. It was also not brought by the displaced residents, but by a business.",
        },
      ],
    },
    {
      slug: "dc-powers-travels",
      title: "11 · How the holding traveled, and testing the link to Indiana Avenue",
      section: "Section 3 · Powers",
      body: `*Berman* was a District of Columbia case about one cleared quadrant. **Its importance is that it did not stay there.** This lesson follows the holding forward to other cities and then back to Indiana Avenue, and it applies the same test the pilot course used on its own argument: **line up the dates and see whether the proposed cause comes before its effect.**

**Forward: three stops on the road from Berman.**
- **Hawaii Housing Authority v. Midkiff, 467 U.S. 229 (1984).** A unanimous Court upheld Hawaii's law forcing large landowners to sell to their tenants, relying on *Berman* for the proposition that the public-use requirement is satisfied whenever the taking is "rationally related to a conceivable public purpose" (Kelo v. New London, 2005, discussing Midkiff and Berman).
- **Poletown, 1981.** The Michigan Supreme Court let Detroit condemn an entire working neighborhood for a General Motors plant, in the deferential spirit *Berman* had established. It was a state case, and Michigan later overruled it in 2004, but for two decades it was a model other cities studied.
- **Kelo v. City of New London, 545 U.S. 469 (2005).** This is the destination. The Court, citing *Berman* and *Midkiff*, allowed New London to condemn **well-maintained, non-blighted homes** for a private economic-development plan. **The tool that started as slum clearance in Southwest had traveled all the way to taking sound houses for economic growth.** Justice O'Connor's dissent warned that under this logic "nothing is to prevent the State from replacing any Motel 6 with a Ritz-Carlton," and public backlash led many states to amend their eminent-domain laws (Kelo v. New London, 2005).

**That is the honest measure of Berman's reach.** It did not merely bless one clearance. **It set the standard of deference that made "public use" almost impossible to lose on**, and fifty years later that standard reached ordinary homeowners in Connecticut.

**Now back to Indiana Avenue, and here the course weakens its own most attractive claim, on purpose.** It is tempting to say: *Berman* (1954) authorised the blight tool, and Indianapolis then used that tool on Indiana Avenue, so Washington is where Indiana Avenue's clearance was licensed. **Test it against the chronology.**

| Date | Event |
|---|---|
| 1945 | Indiana General Assembly identifies Pat Ward's Bottom (near Indiana Avenue) as blighted |
| 1948 | Demolition begins there |
| 1952 | Southwest DC "Area B" plan approved |
| **November 22, 1954** | **Berman v. Parker decided** |
| 1954, 1956 | Further Indianapolis blight designations; IU Medical Center expansion |
| 1958 | The joint IU and Purdue campus plan proposed |

**The verdict, stated plainly. The link is real but it is a constitutional backstop, not a cause, and this course reports the weaker, true version.**

**Where the simple claim fails.** **Berman did not cause Indiana Avenue's clearance.** Indiana had its **own** state blight statute in 1945 and had already begun demolishing homes near the Avenue in 1948, six years before *Berman* was decided. **A cause cannot postdate the effects that were already under way.** Indianapolis was not waiting for Washington's permission.

**Where the claim holds, in its accurate form.** *Berman* resolved, for the whole country, the **constitutional** question that a challenger anywhere might have raised: does taking non-blighted property inside a designated area, and handing it to a private developer, violate the Fifth Amendment? After November 1954 the answer was settled: **no.** So the tool Indianapolis was already using could no longer be struck down on public-use grounds, in Indiana or anywhere else. **Berman did not start the machine. It guaranteed the machine could not be stopped by that particular argument.** That is a smaller claim than "Washington licensed Indiana Avenue," it is defensible, and it is the one this course makes.

**The method, which outlasts every fact here.** Build the chronology before the argument. A weaker claim that survives a date check beats a stronger claim that fails one. And when your favorite thesis partly breaks, **report the break**: that is the finding, not a failure, and it is exactly what the Indiana Avenue course did to its own proposed spine.

## Sources
- Berman v. Parker, 348 U.S. 26 (1954). https://www.law.cornell.edu/supremecourt/text/348/26
- Kelo v. City of New London, 545 U.S. 469 (2005). https://www.law.cornell.edu/supremecourt/text/04-108
- Hawaii Housing Authority v. Midkiff, 467 U.S. 229 (1984). https://www.law.cornell.edu/supremecourt/text/467/229`,
      recallContent: [
        {
          prompt: "What does the Fifth Amendment require when property is taken?",
          answer: "That private property not be taken for public use without just compensation. In the District the Fifth applies directly because the District is federal ground.",
        },
        {
          prompt: "In a condemnation case, what is normally in dispute?",
          answer: "The price, not whether the taking happens. Refusing an offer leads to a court setting compensation rather than stopping the project.",
        },
        {
          prompt: "How did Berman change the rule about conveying condemned land to a private developer?",
          answer: "Before Berman it was arguable that handing condemned land to a private company was not a public use. Berman said the public end may be served as well through private enterprise, so public taking followed by private rebuilding became the doctrine of urban renewal, not an abuse of it.",
        },
        {
          prompt: "What did Berman NOT touch, and how does the Thursz study fill that blank?",
          answer: "Berman decided the taking was lawful, not whether compensation made anyone whole. Thursz showed owners were paid for buildings but tenants, who were most of Southwest, owned nothing to be paid for, and their relocation did not preserve the community or hold housing costs down.",
        },
        {
          prompt: "Why does comparing a 1950s taking to a 1970s one require care?",
          answer: "Because the Uniform Relocation Act of 1970 later raised relocation standards for federally funded projects, and most of the Southwest clearance predates it. The two takings happened under different legal regimes.",
        },
      ],
    },
    {
      slug: "dc-powers-freeway-revolt",
      title: "12 · Instrument four: the highway, and the revolt that stopped it",
      section: "Section 3 · Powers",
      body: `The fourth instrument is the one the Indiana Avenue course examined at length: the **alignment decision**, the choice of where to run an urban interstate. In Washington it produced both a clearance and, unusually for this series, a **victory**.

**First, the clearance.** The Southwest renewal did not only build superblocks. It also built a **freeway**. The Southeast and Southwest Freeway was driven through the cleared quadrant, and it is counted among the outcomes of the Southwest project along with the relocation of Maine Avenue and the waterfront parks (Docomomo US, n.d.). **So in Southwest the highway and the renewal were the same operation.** The freeway that carries commuters over the old neighborhood today is part of what replaced it. **Do not file DC under "the city that beat the highways" without this asterisk**: Southwest itself did not beat them.

**Then, the plan for the rest of the city.** In the 1950s and 1960s planners proposed a complete freeway network threaded through the District, including the **North Central Freeway**, the **Northeast Freeway**, and the **Three Sisters Bridge** across the Potomac. As documented in the Indiana Avenue course through Deborah Archer's study, urban interstates were repeatedly routed through Black neighborhoods, and these DC routes ran toward predominantly Black communities including Takoma and Brookland (Archer, 2020; Federal Highway Administration, n.d.).

**Then, the revolt, which is the rare win.** A grassroots coalition, the **Emergency Committee on the Transportation Crisis (ECTC)**, fought the freeways through the 1960s and early 1970s. **Reginald Booker** chaired it and **Sammie Abbott** served as its strategist and spokesman (Federal Highway Administration, n.d.; Boundary Stones, 2018). Abbott's poster gave the movement, and this whole series, its sharpest phrase: **"White men's roads through black men's homes"** (Archer, 2020; Boundary Stones, 2018). The coalition combined direct action, including a sit-in at the Three Sisters Bridge construction site, with lawsuits and studies, and it promoted rail transit as the alternative.

**What the revolt actually won, stated exactly.**
- **The Three Sisters Bridge was defeated**, and most of the planned inner-city freeway network was never built (Boundary Stones, 2018).
- The money and political energy shifted toward the **Metro** rail system, which the coalition had championed as the alternative.
- The fight helped move national transportation policy away from an inflexible insistence on urban freeways (Federal Highway Administration, n.d.).

**Now hold the victory honestly, because that is the discipline of this series.** The revolt saved Brookland, Takoma, Shaw, and other neighborhoods from the roads that were still on the drawing board. **It did not save Southwest, because Southwest's freeway was built first, in the same operation that cleared the quadrant.** DC is genuinely a rare victory in this catalog, alongside places like Chicano Park in San Diego, and the victory came for the neighborhoods whose fight came late enough to win. **A win that arrives after your own block is gone is still a win for the next block, and both halves of that sentence are true.**

## Sources
- Archer, D. N. (2020). "White men's roads through Black men's homes": Advancing racial equity through highway reconstruction. *Vanderbilt Law Review, 73*(5). https://scholarship.law.vanderbilt.edu/vlr/vol73/iss5/1/
- Boundary Stones (WETA). (2018, November 7). *No bridge for Three Sisters*. https://boundarystones.weta.org/2018/11/07/no-bridge-three-sisters
- Docomomo US. (n.d.). *The Southwest urban renewal area in Washington, D.C.* https://docomomo-us.org/news/the-southwest-urban-renewal-area-in-washington-d-c
- Federal Highway Administration. (n.d.). *The D.C. freeway revolt and the coming of Metro*. https://www.fhwa.dot.gov/highwayhistory/dcrevolt/`,
      recallContent: [
        {
          prompt: "Name the three cases the Berman holding travelled through, and what each allowed.",
          answer: "Midkiff (1984) upheld Hawaii forcing landowners to sell to tenants; Poletown (1981, Michigan) let Detroit condemn a neighborhood for a GM plant; and Kelo (2005) allowed New London to take well-maintained, non-blighted homes for private economic development.",
        },
        {
          prompt: "What was the significance of Kelo relative to Berman's origin?",
          answer: "The tool that began as slum clearance in Southwest had traveled to taking sound, non-blighted houses for economic growth. Kelo cited Berman and Midkiff, and O'Connor's dissent warned the logic could replace any modest use with a fancier one.",
        },
        {
          prompt: "Why does the simple claim that Berman caused Indiana Avenue's clearance fail?",
          answer: "Because Indiana had its own 1945 state blight statute and had begun demolishing homes near the Avenue in 1948, six years before Berman was decided in November 1954. A cause cannot postdate effects already under way.",
        },
        {
          prompt: "State the accurate, weaker version of the link between Berman and Indiana Avenue.",
          answer: "Berman did not start the clearance; it resolved the constitutional public-use question nationwide, so the blight tool Indianapolis was already using could not be struck down on Fifth Amendment grounds. It guaranteed the machine could not be stopped by that argument.",
        },
        {
          prompt: "What is the method lesson from testing this link?",
          answer: "Build the chronology before the argument; a weaker claim that survives a date check beats a stronger one that fails it; and when a favorite thesis partly breaks, report the break, because that is the finding, not a failure.",
        },
      ],
    },
    {
      slug: "dc-powers-home-rule",
      title: "13 · Instrument five: who was allowed to vote on any of it",
      section: "Section 3 · Powers",
      body: `The first four instruments take buildings and route roads. The fifth is quieter and, in Washington, it is the one no other city in this series can teach: **it is the question of who held the vote while all of this was done.**

**The fact, stated first.** Through the entire period of the Southwest clearance, **the residents of Washington could not vote for the government that governed them.**
- They had **no elected mayor or city council**; Congress legislated for the District directly, which is why the 1945 Redevelopment Act in lesson 8 is a federal statute.
- Until 1961 they could not even vote for **President**. The **Twenty-third Amendment**, ratified in 1961, gave District residents presidential electors for the first time, and they first voted for President in 1964 (U.S. Const. amend. XXIII).
- They had **no vote in Congress**, the very body writing their laws.

**Read that against Section 3's other instruments.** The blight designation, the eminent-domain takings, the freeway alignment, and the redevelopment plan were all approved by, or under statutes passed by, a Congress in which **the 23,000 people of Southwest had not one representative who owed them a vote.** In every other city in this series the residents could at least, in principle, vote out the mayor or council who cleared them. **In Washington they could not, and that is not a footnote to the clearance; it is a condition of it.**

**What changed, and how little.** The **District of Columbia Home Rule Act**, passed by Congress and signed December 24, 1973, and approved by District voters in 1974, restored an elected mayor and council (District of Columbia Home Rule Act, 1973; Smithsonian Magazine, 2023). But it was home rule with a leash:
- **Congress kept the power to review and overturn the District's local laws**, and to intervene in its budget.
- **District residents still have no voting representation in Congress.** Since 1971 they have had a single **nonvoting delegate** in the House (Congress.gov, n.d.).

**Why this belongs in a course about a demolished neighborhood.** Beat 5, next section, asks who governs this ground today, and the honest answer for Washington has a permanent asterisk that Indianapolis does not: **the ground is governed, in the last instance, by a Congress the governed cannot vote for.** The Zoning Commission you will meet in lesson 17 still, by law, seats federal members. **The instrument here is not a bulldozer. It is the franchise, or its absence**, and it is the deepest reason Southwest could be cleared so completely with so little a resident could do about it.

**A caution about causation, kept in the spirit of lesson 11.** Do not overclaim. **Cities with full voting rights cleared Black neighborhoods too**, as the Indiana Avenue course documented in a city whose residents could vote. The absence of the franchise did not, by itself, cause the Southwest clearance, and asserting that it did would be exactly the kind of tidy, unproven spine this series is built to resist. **What is true, and checkable, is narrower and still damning: the people of Southwest bore a clearance authorised by a legislature they had no vote in, and they had no ballot with which to answer it.** That is the claim the record supports.

## Sources
- District of Columbia Home Rule Act, Pub. L. No. 93-198, 87 Stat. 774 (1973). https://dccouncil.gov/dc-home-rule/
- U.S. Const. amend. XXIII.
- Congress.gov. (n.d.). *Governing the District of Columbia: Overview and timeline*. https://www.congress.gov/crs-product/IF12577
- Smithsonian Magazine. (2023). *How the 1973 D.C. Home Rule Act enabled the nation's capital to govern itself, with congressional oversight*. https://www.smithsonianmag.com/history/how-the-1973-dc-home-rule-act-enabled-the-nations-capital-to-govern-itself-with-congressional-oversight-180987180/`,
      recallContent: [
        {
          prompt: "Why should DC not be filed simply as \"the city that beat the highways\"?",
          answer: "Because the Southeast and Southwest Freeway was built through the cleared Southwest quadrant as part of the renewal itself. Southwest did not beat the highway; its freeway and its clearance were the same operation.",
        },
        {
          prompt: "What was the ECTC, and who led it?",
          answer: "The Emergency Committee on the Transportation Crisis, a grassroots coalition that fought DC's freeway plans in the 1960s and 1970s. Reginald Booker chaired it and Sammie Abbott was its strategist and spokesman.",
        },
        {
          prompt: "What phrase did Sammie Abbott's poster give the movement?",
          answer: "\"White men's roads through black men's homes,\" which is also the title of Deborah Archer's later study of highways and racial equity.",
        },
        {
          prompt: "What did the freeway revolt actually win?",
          answer: "It defeated the Three Sisters Bridge and most of the planned inner-city freeway network, shifted resources toward the Metro rail system, and helped move national transportation policy away from insisting on urban freeways.",
        },
        {
          prompt: "How should the victory be held honestly?",
          answer: "The revolt saved Brookland, Takoma, Shaw and others from roads still being planned, but it did not save Southwest, whose freeway was already built. A win that arrives after your own block is gone is still a win for the next block.",
        },
      ],
    },
    {
      slug: "dc-quiz-powers",
      title: "14 · Quiz: who decided, and what the Court said",
      section: "Section 3 · Powers",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        shuffleOptions: true,
        questions: [
          {
            prompt: "This course defines an 'instrument' as:",
            options: [
              "A physical tool such as a bulldozer or wrecking crane used in demolition work",
              "A specific legal power used by a body under a statute, leaving a document",
              "Any broad historical cause, such as an economic trend or a migration wave",
              "A newspaper account describing a clearance decision after it happened later",
            ],
            correctIndex: 1,
            explanation: "The last clause is what makes it researchable: if a power was used, a named record exists.",
            sourceLessonSlug: "dc-powers-blight",
          },
          {
            prompt: "Which statute authorised clearing Southwest, and what body did it create?",
            options: [
              "The Home Rule Act of 1973, which created the elected Council of the District of Columbia",
              "The Federal-Aid Highway Act of 1956, which launched the Interstate Highway System",
              "The District of Columbia Redevelopment Act of 1945, which created the Redevelopment Land Agency",
              "The Twenty-third Amendment of 1961, which gave the District presidential electors",
            ],
            correctIndex: 2,
            explanation: "The 1945 Act (60 Stat. 790) created the RLA, which acquired land under a plan by the National Capital Planning Commission.",
            sourceLessonSlug: "dc-powers-blight",
          },
          {
            prompt: "Why was the statute that cleared Southwest passed by Congress, not a city council?",
            options: [
              "Because the District had no home rule; Congress legislated for it directly",
              "Because the redevelopment project crossed into neighboring Maryland",
              "Because the elected city council studied the plan but refused to act",
              "Because the President personally ordered the neighborhood cleared",
            ],
            correctIndex: 0,
            explanation: "Washington had no elected mayor or council in 1945, so the people of Southwest had no vote in the legislature that authorised the clearance.",
            sourceLessonSlug: "dc-powers-blight",
          },
          {
            prompt: "Who was the plaintiff in Berman v. Parker?",
            options: [
              "A family displaced from one of the neighborhood's alley dwellings",
              "The Redevelopment Land Agency, the body that acquired the land",
              "A tenants' union representing the renters across Area B",
              "The owner of a department store at 712 Fourth Street S.W., not a dwelling",
            ],
            correctIndex: 3,
            explanation: "The challenger owned a going business, not a slum, and argued a non-slum property could not be taken to cure a slum. The case that authorised clearing homes turned on a store.",
            sourceLessonSlug: "dc-powers-berman",
          },
          {
            prompt: "Which phrase is from the Berman opinion?",
            options: [
              "\"The concept of the public welfare is broad and inclusive\"",
              "\"Separate but equal has no place in public education\"",
              "\"The power to tax involves the power to destroy\"",
              "\"The right of the people to be secure in their houses\"",
            ],
            correctIndex: 0,
            explanation: "Justice Douglas wrote that public welfare is broad and inclusive, its values spiritual as well as physical, aesthetic as well as monetary.",
            sourceLessonSlug: "dc-powers-berman",
          },
          {
            prompt: "What was the actual holding that made the store owner lose?",
            options: [
              "That his department store building had itself been proven a slum in the housing survey",
              "That an area may be taken as a whole, so an owner cannot defeat the plan with his own lot",
              "That department stores anywhere enjoy no constitutional protection from any taking",
              "That the Fifth Amendment's public-use limit simply does not apply within the District",
            ],
            correctIndex: 1,
            explanation: "The Court also held the cleared land could be conveyed to a private developer, since the public end may be served as well through private enterprise.",
            sourceLessonSlug: "dc-powers-berman",
          },
          {
            prompt: "Which of these did Berman NOT decide?",
            options: [
              "That the area could be taken as a whole",
              "That cleared land could go to a private redeveloper",
              "How much any owner should be paid, or whether the plan was wise",
              "That the legislature's judgment of public interest is well-nigh conclusive",
            ],
            correctIndex: 2,
            explanation: "Compensation is litigated case by case, and the Court said it does not sit to judge whether a particular project is desirable.",
            sourceLessonSlug: "dc-powers-berman",
          },
          {
            prompt: "In a typical eminent-domain proceeding, what is normally in dispute?",
            options: [
              "Whether the taking will happen",
              "The identity of the owner",
              "Whether the statute is constitutional",
              "The price",
            ],
            correctIndex: 3,
            explanation: "Refusing an offer sends the matter to a court that sets compensation; it does not stop the project.",
            sourceLessonSlug: "dc-powers-eminent-domain",
          },
          {
            prompt: "How did Berman change the rule about giving condemned land to a private developer?",
            options: [
              "It held the public end may be served through private enterprise, so the handoff was lawful",
              "It banned the practice of ever handing condemned land to a private developer at all",
              "It required a fresh vote of Congress before each transfer of land to a developer",
              "It left the question of private redevelopment entirely to each of the individual states",
            ],
            correctIndex: 0,
            explanation: "Before Berman it was arguable this was not a public use. After Berman it was the design of urban renewal.",
            sourceLessonSlug: "dc-powers-eminent-domain",
          },
          {
            prompt: "The Thursz study fills a blank Berman left. What blank?",
            options: [
              "Whether the taking of Southwest was lawful at all under the Fifth Amendment",
              "Whether compensation made residents whole, especially tenants who owned no building",
              "Who designed the modernist superblocks that later replaced the neighborhood",
              "When the Southeast-Southwest Freeway through the quadrant was finally opened",
            ],
            correctIndex: 1,
            explanation: "Berman decided lawfulness. Thursz measured outcomes: owners were paid for buildings, but most of Southwest were renters, and relocation raised their costs and scattered them.",
            sourceLessonSlug: "dc-powers-eminent-domain",
          },
          {
            prompt: "Where did the Berman standard eventually travel, in Kelo v. New London (2005)?",
            options: [
              "It was overruled entirely, ending all federal deference on the public-use test",
              "It was limited to the District of Columbia and was never applied elsewhere",
              "It allowed taking well-kept, non-blighted homes for private economic development",
              "It applied only to vacant farmland taken for building a new public highway",
            ],
            correctIndex: 2,
            explanation: "Kelo cited Berman and Midkiff; the tool that began as slum clearance had reached sound houses taken for economic growth. O'Connor dissented.",
            sourceLessonSlug: "dc-powers-travels",
          },
          {
            prompt: "Why does the claim that Berman \"caused\" Indiana Avenue's clearance fail the chronology test?",
            options: [
              "Because Indiana Avenue was in fact never actually cleared or demolished at all",
              "Because Berman was not decided until 1970, many years after that clearance",
              "Because Indianapolis lies wholly outside the reach of federal constitutional law",
              "Because Indiana's own 1945 blight statute and 1948 demolition predate Berman in 1954",
            ],
            correctIndex: 3,
            explanation: "A cause cannot postdate effects already under way. The accurate, weaker claim is that Berman made the tool Indianapolis was already using safe from a Fifth Amendment challenge.",
            sourceLessonSlug: "dc-powers-travels",
          },
          {
            prompt: "Why should DC not be filed simply as the city that beat the highways?",
            options: [
              "Because the Southeast and Southwest Freeway ran through the cleared quadrant",
              "Because no urban freeways were ever seriously proposed for the District",
              "Because the freeway revolt failed completely and every planned road was built",
              "Because the Metro rail system the coalition wanted was never built at all",
            ],
            correctIndex: 0,
            explanation: "Southwest's freeway and its clearance were the same operation. The revolt saved other neighborhoods, not Southwest.",
            sourceLessonSlug: "dc-powers-freeway-revolt",
          },
          {
            prompt: "What did the Emergency Committee on the Transportation Crisis achieve?",
            options: [
              "It built the North Central Freeway straight through Brookland and Takoma homes",
              "It defeated the Three Sisters Bridge and most inner-city freeways, boosting Metro",
              "It repealed the Home Rule Act and restored full congressional control of DC",
              "It designed the modernist superblocks that rose across the cleared ground",
            ],
            correctIndex: 1,
            explanation: "Reginald Booker chaired it and Sammie Abbott, whose poster read \"white men's roads through black men's homes,\" was its spokesman.",
            sourceLessonSlug: "dc-powers-freeway-revolt",
          },
          {
            prompt: "What is the honest, checkable claim about the franchise and the Southwest clearance?",
            options: [
              "The lack of the local vote single-handedly caused the entire Southwest clearance",
              "District residents effectively controlled the very Congress that governed them",
              "Southwest bore a clearance by a legislature it had no vote in and no ballot to answer",
              "The clearance itself restored full voting rights to all of the District's residents",
            ],
            correctIndex: 2,
            explanation: "Overclaiming that the lack of a vote caused the clearance would fail, since cities whose residents could vote cleared Black neighborhoods too. The narrower claim is checkable and still damning.",
            sourceLessonSlug: "dc-powers-home-rule",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 4 · Now  (beat 4: observation and evidence)
    //
    // The 360 tour of the Southwest waterfront does not have a Wanderlearn embed URL yet, and a
    // tour URL is authoritative external data that must never be guessed
    // (plans/future/04-wanderlearn-360-boundary.md). So this lesson ships as `virtual_tour` with
    // NO contentUrl: the player renders the "no media yet" notice above the body, and the body is
    // the observation brief the learner uses when the tour lands. Drop the URL in and re-seed.
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "dc-now-tour",
      title: "15 · Now: walk the waterfront (360 tour, forthcoming)",
      section: "Section 4 · Now",
      lessonType: "virtual_tour",
      body: `**The 360 tour for this lesson is forthcoming.** It is not here yet, and the notice above this text is telling you the truth rather than reporting a fault. This course was written before the tour was captured, on purpose: the site template treats beat 4 as a drop-in, so a course is complete and teachable without it and the tour is added later without restructuring anything.

**Read this lesson now anyway.** It is your observation brief. Beat 4 asks one question, "what is actually there today", and the difference between a tourist looking at Southwest and a researcher looking at Southwest is entirely a matter of knowing what to look for before you arrive. **Work through this list now, then run it against the tour when it lands.**

## What to look for, in order

**1. Read the grain of the streets.** Section 2 taught the difference between a fine grain of small lots and many owners and a coarse grain of superblocks and few owners. **Look for the seam where one becomes the other.** In much of Southwest the through-streets give way to large blocks with buildings set back behind lawns and internal courts. **Every place the old grid does not continue is a place a superblock replaced it**, and that is a decision with a date.

**2. Find the survivors, and notice they do not match.** Wheat Row and the Thomas Law House are Federal-era brick houses from the 1790s, folded into or standing beside modernist superblocks. **When you find them, ask the lesson 7 question out loud: why did these survive when a whole neighborhood did not?** The answer is on the plaque and in the date, and it is not flattering to the idea that preservation saves what matters most.

**3. Look up, and look for the freeway.** The Southeast and Southwest Freeway runs through the quadrant. **Where the tour shows an overpass, an embankment, a wall, or a street that stops at the edge of the roadway, note it.** Lesson 12 established that in Southwest the highway was part of the clearance, not a separate later insult. A street that ends at the freeway is right-of-way, and right-of-way is on a map you can request.

**4. Walk the water, and ask who it is for now.** The Southwest waterfront has been rebuilt again in this century as The Wharf, a large private development you will study in lesson 17. **Look at how you reach the water: through a public promenade, or between private buildings, or past a security desk.** The most important civic question about a waterfront is whether an ordinary person can stand at its edge without buying anything, and a tour can show you the answer.

**5. Count the markers and read who wrote them.** Historical markers are a public record with an author, a date, and a sponsor. **Note the sponsor's name every time.** A marker tells you what a community and an agency agreed to say in public, in a particular year, about a neighborhood most of whose residents were removed.

**6. Look for what is being built right now.** Construction fencing, a zoning notice, a public-hearing sign, a leasing banner. **Every one of those is a live document with a case number**, and Section 5 teaches you how to look them up in the District's own records.

**7. Look at who is on the street.** This is a working part of the city, with residents, workers, and visitors. **Describe them as they would describe themselves, or do not describe them.** A 360 tour is a photograph of strangers in a public place, and the ethics of writing about it are the ethics of writing about neighbors.

## What the tour cannot show you

- **It cannot show you a date.** Every change you notice happened at a time, and the tour has no clock. Beat 3 gave you the dates; beat 5 gives you the record.
- **It cannot show you an owner.** A building's occupant is not its owner, and neither is on the facade. The parcel record has it.
- **It cannot show you the neighborhood that was here.** You cannot photograph a demolished alley community. **Almost everything this course is about is, by definition, not in the tour**, which is the truest thing beat 4 can teach about a place cleared this completely.

**Write down your five most confident observations before the tour arrives, based on this brief and on the map lesson that follows. Then check them.** Being wrong on the record about a place you had not yet seen is a better teacher than being right about one you had.

## Sources
- Docomomo US. (n.d.). *The Southwest urban renewal area in Washington, D.C.* https://docomomo-us.org/news/the-southwest-urban-renewal-area-in-washington-d-c
- Boundary Stones (WETA). (2022, July 21). *The cost of urban renewal in Southwest DC*. https://boundarystones.weta.org/2022/07/21/cost-urban-renewal-southwest-dc
- Wheat Row. (n.d.). In *Wikipedia*. https://en.wikipedia.org/wiki/Wheat_Row`,
      recallContent: [
        {
          prompt: "Why is this lesson published before its 360 tour exists?",
          answer: "Because the site template treats beat 4 as a drop-in: a course is complete and teachable with the other five beats, and the tour is added later without restructuring anything. The body is the observation brief in the meantime.",
        },
        {
          prompt: "What does a change in the grain of the streets tell you to look for?",
          answer: "The seam where a fine grid of small lots gives way to coarse superblocks set behind lawns and courts. Every place the old grid does not continue is a place a superblock replaced it, which is a dated decision.",
        },
        {
          prompt: "What is the most important civic question to ask at the rebuilt waterfront?",
          answer: "Whether an ordinary person can stand at the water's edge without buying anything: reach it through a public promenade, or only between private buildings or past a security desk. A tour can show the answer.",
        },
        {
          prompt: "What is the truest thing beat 4 can teach about a place cleared this completely?",
          answer: "That almost everything the course is about is, by definition, not in the tour. You cannot photograph a demolished alley community, so the absence is the evidence.",
        },
      ],
    },
    {
      slug: "dc-map",
      title: "16 · Map: one opinion, and the cities it reached",
      section: "Section 4 · Now",
      body: `**Read this before you touch the map, because the map's limits are a lesson in themselves.**

**This platform's lesson map draws the whole world.** A marker is a fixed-size dot on a world projection, which means two points need to be roughly two degrees apart, on the order of 200 kilometres, before they separate visually. **A cleared quadrant is far smaller than one dot.** So this map cannot show you Southwest block by block, and pretending otherwise would be a worse lesson than admitting it.

**That limitation is the most useful thing on this page.** The right map for a parcel question is not a world map. It is the District's own geographic information system and the Office of Tax and Revenue's real-property tools, which lesson 18 puts you to work in. **Choosing the right scale of map for your question is a research skill.**

**So this map does the job it can do well.** It marks Southwest, and then it marks the places the *Berman* holding reached, because the argument of this course is that a single opinion decided in one small quadrant traveled across the country.

**Blue: Southwest Washington itself**, plotted at an approximate point on the cleared ground.

**Amber: four places the instrument was used or authorised.** Indiana Avenue is the sibling course, where the blight tool did the work; New London and Detroit are where the *Berman* standard of deference traveled in *Kelo* and *Poletown*; Overtown is a clearance-and-highway district of the kind the Indiana Avenue map already taught you to read. **These are here to show that Southwest is not a local misfortune but the origin point of a national doctrine.**

**Green: two archives.** The federal record of *Berman*, the National Register, and the Historic American Buildings Survey documentation of Southwest all live in the federal collections in Washington; the District's own Redevelopment Land Agency photographs and the freeway-revolt records live in the DC Public Library's People's Archive. **Knowing where a record physically lives is part of knowing that it exists.**

**Coordinates on this map are approximate points, not surveyed locations.** Do not use them to find an address. Use them to see the shape of the pattern, and use the District's parcel tools when you need a lot.

**What this map cannot show, and neither could the Indiana Avenue map.** It cannot show absence. Every marker exists because something was recorded. **How many districts were cleared under the doctrine this opinion blessed, and never written up, is a question this course cannot answer and will not guess at.**

## Sources
- Berman v. Parker, 348 U.S. 26 (1954). https://www.law.cornell.edu/supremecourt/text/348/26
- Kelo v. City of New London, 545 U.S. 469 (2005). https://www.law.cornell.edu/supremecourt/text/04-108
- Boundary Stones (WETA). (2022, July 21). *The cost of urban renewal in Southwest DC*. https://boundarystones.weta.org/2022/07/21/cost-urban-renewal-southwest-dc`,
      mapContent: {
        markers: [
          {
            id: "dc-southwest",
            lat: 38.878,
            lng: -77.021,
            title: "Southwest Washington, D.C.",
            color: "#1d4ed8",
            description:
              "The subject of this course. A majority-Black working quadrant, 69 percent African American in 1950, cleared under the District of Columbia Redevelopment Act of 1945: by the most cited estimate about 99 percent of buildings on roughly 560 acres, displacing about 23,000 residents and 1,500 businesses. The clearance was upheld in Berman v. Parker (1954), the decision that made blight-designation clearance constitutionally safe across the country. What replaced it: modernist superblocks, a freeway, and, in this century, The Wharf. What survived: a handful of 1790s houses folded into Harbour Square, and the Maine Avenue fish market.",
          },
          {
            id: "dc-indiana-avenue",
            lat: 39.7745,
            lng: -86.1665,
            title: "Indiana Avenue, Indianapolis, Indiana",
            color: "#b45309",
            description:
              "The prerequisite course, and the reason this one exists. The blight designation and land assembly, not the highway, cleared Indiana Avenue. Berman did not cause that clearance (Indiana's 1945 statute and 1948 demolition predate the 1954 decision), but it settled the constitutional question that made the tool Indianapolis was already using safe from a Fifth Amendment challenge anywhere.",
          },
          {
            id: "dc-new-london",
            lat: 41.348,
            lng: -72.093,
            title: "Fort Trumbull, New London, Connecticut",
            color: "#b45309",
            description:
              "Where the Berman standard arrived in 2005. In Kelo v. City of New London the Court, citing Berman and Midkiff, allowed the taking of well-maintained, non-blighted homes for a private economic-development plan. The tool that began as slum clearance in Southwest had reached sound houses taken for growth. The public backlash led many states to amend their eminent-domain laws.",
          },
          {
            id: "dc-poletown",
            lat: 42.377,
            lng: -83.049,
            title: "Poletown, Detroit, Michigan",
            color: "#b45309",
            description:
              "In 1981 the Michigan Supreme Court let Detroit condemn an entire working neighborhood for a General Motors plant, in the deferential spirit Berman had established. Michigan later overruled the decision in 2004, but for two decades it was a model other cities studied. A state application of the doctrine this course traces from Southwest.",
          },
          {
            id: "dc-overtown",
            lat: 25.7877,
            lng: -80.198,
            title: "Overtown, Miami, Florida",
            color: "#b45309",
            description:
              "The district once known as the Harlem of the South, cut by Interstate 95 in a clearance-and-highway operation like the ones both prerequisite courses taught. It is here to place Southwest in the national pattern of Black districts cleared under the renewal and highway instruments, not as an isolated case.",
          },
          {
            id: "dc-federal-archives",
            lat: 38.8893,
            lng: -77.023,
            title: "Federal records, Washington, D.C.",
            color: "#15803d",
            description:
              "Where the reported opinion in Berman, the National Register nominations, and the Historic American Buildings Survey documentation of the Southwest urban renewal area are kept. Every quotation from the opinion in Section 3 can be checked against the U.S. Reports held here.",
          },
          {
            id: "dc-peoples-archive",
            lat: 38.9007,
            lng: -77.025,
            title: "The People's Archive, DC Public Library",
            color: "#15803d",
            description:
              "Where the District's own memory of this story lives: the Redevelopment Land Agency photograph collection recording Southwest before and during clearance, and the records of the Emergency Committee on the Transportation Crisis that fought the freeways. A local archive holds what the federal record does not.",
          },
        ],
      },
      recallContent: [
        {
          prompt: "Why is this course's map national rather than block by block?",
          answer: "Because the lesson map draws the whole world, so points need roughly two degrees of separation to be distinguishable, and a cleared quadrant is far smaller than one dot. For a parcel question the right tools are the District's own GIS and real-property records.",
        },
        {
          prompt: "What do the amber markers on this map have in common?",
          answer: "They are places the Berman holding reached: Indiana Avenue where the blight tool did the work, New London and Detroit where the deference standard traveled in Kelo and Poletown, and Overtown as part of the national clearance-and-highway pattern. Southwest is the origin point of a national doctrine.",
        },
        {
          prompt: "What do the two green markers represent, and why include them?",
          answer: "The federal records (the Berman opinion, National Register, and HABS documentation) and the DC Public Library People's Archive (the RLA photographs and the freeway-revolt records). Knowing where a record physically lives is part of knowing it exists.",
        },
        {
          prompt: "What can this map, like the Indiana Avenue map, not show?",
          answer: "Absence. Every marker exists because something was recorded. How many districts were cleared under this doctrine and never written up is a question the course cannot answer and will not guess at.",
        },
      ],
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 5 · Next  (beat 5: live civics. who governs this ground now, and a real parcel)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "dc-next-adopted-plan",
      title: "17 · Who governs this ground now",
      section: "Section 5 · Next",
      body: `Beat 5 turns a history course into a civics course. **Every site has a present legal status and a plan being written for it right now**, and finding those is a research skill. In Washington the answer carries the same asterisk Section 3 established, and it is a live one.

**Start with the four questions, in this order.** They work for any American parcel.
1. **What does the comprehensive plan say this land should become?**
2. **What does the zoning permit today?**
3. **Is there an area-specific plan or a live development, and who approved it?**
4. **Who is the decision-making body, when does it meet, and is the agenda public?**

**Question 1: the comprehensive plan.** The District has a **Comprehensive Plan**, maintained by the **DC Office of Planning** and adopted by the **Council of the District of Columbia**, with its federal elements written by the **National Capital Planning Commission** (NCPC). **A comprehensive plan is not zoning.** It is the policy statement that rezonings are judged against, which is why a zoning hearing so often turns into an argument about what the plan says.

**Question 2: zoning, and here is the DC-specific twist that ties directly to Section 3.** Zoning in the District is set by the **Zoning Commission**, and its membership is not what you would expect of a self-governing city. **The Zoning Commission has five members: three District residents appointed by the Mayor and confirmed by the Council, and two federal officials, the Architect of the Capitol and the Director of the National Park Service, or their representatives** (DC Office of Zoning, n.d.). **Read that against lesson 13.** The body that decides what may be built on this ground still, by law, seats two members whom no District voter chose and no District official appoints. The federal hand that cleared Southwest without a local vote has never fully left the zoning of it. The District's nonvoting delegate has introduced legislation to remove the federal members; as of the most recent action it had not become law, which makes it a live civics question and not a settled one (Norton, n.d.).

**Question 3: what is actually happening on the ground.** The Southwest waterfront has been redeveloped again in this century as **The Wharf**, by the developer partnership **Hoffman-Madison Waterfront**, selected by the District in 2006. Its first phase opened in **October 2017** and its second phase in **October 2022** (Hoffman-Madison Waterfront, 2017; The Wharf, n.d.). **Notice the shape of the story: public land assembled by a redevelopment agency, conveyed to a private developer, rebuilt at large scale.** That is the *Berman* pattern from lesson 10 running again, in the same quadrant, seventy years later, this time for a waterfront of restaurants and hotels rather than modernist housing. **Whether that is renewal or displacement in a new key is exactly the kind of question beat 5 wants you to ask with the records open, not to answer from a slogan.**

**Question 4: who decides, and where you stand.** For a Southwest parcel the bodies are the **Zoning Commission** (zoning and large planned-unit developments), the **Office of Planning** (the comprehensive plan and long-range planning), and, at the neighborhood scale, the **Advisory Neighborhood Commission**. Southwest sits in **Ward 6**, and its ANC, **6D**, is made up of elected local commissioners whose single-member districts cover a few blocks each. **An ANC's recommendations are advisory, but agencies must give them great weight, and its meetings are the cheapest civic act there is**, which is where a resident's leverage is highest and the cost of showing up is lowest.

**The honest limits of this lesson.** Plans are amended, developers change, and contracts are extended. **Every date and body above has a source and a date attached, and you should re-check all of them before you rely on any of them.** That instruction is not a disclaimer. It is the method, and in a city whose zoning still answers partly to Congress, it is also a reminder that "who governs this ground" has a longer answer here than almost anywhere else in the country.

## Sources
- DC Office of Zoning. (n.d.). *About the Zoning Commission*. https://dcoz.dc.gov/page/about-zoning-commission
- Hoffman-Madison Waterfront. (2017, October). *Hoffman-Madison Waterfront opens The Wharf to the public on October 12*. https://www.prnewswire.com/news-releases/hoffman-madison-waterfront-opens-the-wharf-to-the-public-on-october-12-300535489.html
- Norton, E. H. (n.d.). *DC Zoning Commission Home Rule Act* [legislation]. Office of Congresswoman Eleanor Holmes Norton. https://norton.house.gov/
- The Wharf. (n.d.). In *Wikipedia*. https://en.wikipedia.org/wiki/The_Wharf_(Washington,_D.C.)`,
      recallContent: [
        {
          prompt: "During the Southwest clearance, what representation did Washington residents have?",
          answer: "Almost none. They had no elected mayor or city council, no vote in Congress which legislated for the District directly, and until the Twenty-third Amendment in 1961 they could not even vote for President.",
        },
        {
          prompt: "What did the Twenty-third Amendment do, and when did DC residents first use it?",
          answer: "Ratified in 1961, it gave District residents presidential electors for the first time, and they first voted for President in 1964.",
        },
        {
          prompt: "What did the 1973 Home Rule Act grant, and what did Congress keep?",
          answer: "It restored an elected mayor and council, approved by DC voters in 1974. Congress kept the power to review and overturn the District's local laws and to intervene in its budget, and DC still has no voting representation in Congress, only a nonvoting House delegate since 1971.",
        },
        {
          prompt: "Why does the franchise belong in a course about a demolished neighbourhood?",
          answer: "Because beat 5 asks who governs this ground, and for Washington the answer has a permanent asterisk: the ground is governed in the last instance by a Congress the governed cannot vote for, and the Zoning Commission still seats federal members by law.",
        },
        {
          prompt: "What is the honest, checkable claim about the franchise and the clearance, and what would be overclaiming?",
          answer: "Checkable: the people of Southwest bore a clearance authorised by a legislature they had no vote in and had no ballot to answer it with. Overclaiming: that the lack of the franchise caused the clearance, since cities whose residents could vote cleared Black neighborhoods too.",
        },
      ],
    },
    {
      slug: "dc-next-exercise-parcel",
      title: "18 · Practice: look up a real DC parcel",
      section: "Section 5 · Next",
      lessonType: "exercise",
      body: `**This drill is the whole of beat 5 in miniature, and you should do it with the real tools open in another tab.** Everything below is free and public.

**The two tools.**
- **The DC Office of Tax and Revenue real property database**: https://otr.cfo.dc.gov/page/real-property-tax-database-search . Search by address or by the parcel identifier and read the owner of record, the assessed value, the use code, and the lot size.
- **The District's real-property mapping application**, reached through the same Office of Tax and Revenue GIS pages, which lets you view a parcel with its boundaries and turn on administrative layers such as Wards and Advisory Neighborhood Commissions.

**A DC-specific thing to learn first, because it is the local version of the Indiana Avenue "carry the city" trap.** The District does not identify a parcel by a single lot number. It uses **Square, Suffix, and Lot**, written **SSL**: the "Square" is the historic city block from the L'Enfant plan, and the "Lot" is the parcel within it. **A DC address without its SSL is only half-located**, exactly as a Green Book listing without its city was only half-located. Learn to read the SSL and you can find any parcel in the District.

**Your target: Arena Stage, a public theatre in Southwest Washington.** It is a safe address to practice on: it is a public arts institution, its location is published by the organization that occupies it, and you are not exposing anybody's home. **Do not guess its street number.** Part of the exercise is finding it.

**Work through these, then answer the questions below.**
1. Find **Arena Stage in Southwest Washington** and read off its street address from the institution's own listing, then locate it in the District's real-property map.
2. Read off the parcel's **Square, Suffix, and Lot (SSL)**. Write it down exactly.
3. Open the property record and find the **owner of record**, the **assessed value**, and the **use code**. Compare the owner of record to the name of the organization that operates the building. **They may not match, and if they do not, that is normal and it is a finding.**
4. Turn on administrative layers and note which **Ward**, which **Advisory Neighborhood Commission**, and which **ANC single-member district** the parcel sits in. **Section 3 explained why, in this city, the body above all of them still seats federal members.**
5. Walk the map a block in each direction and count how many neighboring parcels are **institutionally or federally owned**. Southwest holds a great deal of both.

**The habits this builds, which transfer to any American jurisdiction.** Every jurisdiction has an assessor or a tax office and most have a GIS. **The names of the tools change and the four facts do not: the parcel identifier, the owner of record, the assessed value, and which overlapping jurisdictions the parcel sits in.** Learn to find those four and you can research any address in the country.

**One rule you do not get to break.** **Do not run this drill on somebody's home and publish the result.** A parcel record is public, and a current occupant's name attached to their address in a piece of writing is a different thing from a public record sitting in a database. Practice on institutional, commercial, and public addresses. This is the same rule the method course applied to tourist homes and the Indiana Avenue course applied to residential parcels.

## Sources
- DC Office of Tax and Revenue. (n.d.). *Real property tax database search*. https://otr.cfo.dc.gov/page/real-property-tax-database-search
- DC Office of Tax and Revenue. (n.d.). *Real property geographic information systems (GIS) program*. https://otr.cfo.dc.gov/page/real-property-geographic-information-systems-gis-program
- DC Office of Zoning. (n.d.). *About the Zoning Commission*. https://dcoz.dc.gov/page/about-zoning-commission`,
      exercise: {
        instructions:
          "Type the missing term, name, number, body or year, then check. Close answers (spelling, capitalization) count as 'close', not wrong.",
        items: [
          {
            prompt: "The District identifies a parcel not by a single lot number but by Square, Suffix, and ___.",
            answer: "Lot",
            accept: ["lot", "ssl", "square suffix and lot"],
            explanation: "SSL: the Square is the historic city block from the L'Enfant plan, and the Lot is the parcel within it. A DC address without its SSL is only half-located.",
          },
          {
            prompt: "The DC office that publishes a public property record for a parcel is the Office of Tax and ___.",
            answer: "Revenue",
            accept: ["revenue", "otr", "office of tax and revenue"],
            explanation: "The OTR real property database is searchable by address or SSL for owner, assessed value and use code.",
          },
          {
            prompt: "The four facts to pull for any parcel are the parcel identifier, the owner of record, the assessed value, and which overlapping ___ it sits in.",
            answer: "jurisdictions",
            accept: ["jurisdiction", "boundaries", "districts"],
            explanation: "In DC that means the Ward, the Advisory Neighborhood Commission, and the ANC single-member district, three shapes over the same ground.",
          },
          {
            prompt: "The public institution you practise on in this drill is ___ Stage, a theatre in Southwest.",
            answer: "Arena",
            accept: ["arena", "arena stage"],
            explanation: "A public arts institution whose location is published by the organization itself, so no one's home is exposed.",
          },
          {
            prompt: "The plan a rezoning petition is judged against is the ___ Plan.",
            answer: "Comprehensive",
            accept: ["comprehensive", "comprehensive plan", "general", "master"],
            explanation: "The DC Comprehensive Plan, maintained by the Office of Planning and adopted by the Council, with federal elements written by the National Capital Planning Commission.",
          },
          {
            prompt: "The body that adopts DC's zoning and has two federal members is the ___ Commission.",
            answer: "Zoning",
            accept: ["zoning", "zoning commission"],
            explanation: "Three mayoral appointees plus the Architect of the Capitol and the Director of the National Park Service.",
          },
          {
            prompt: "The two federal officials on the Zoning Commission are the Architect of the Capitol and the Director of the National ___ Service.",
            answer: "Park",
            accept: ["park", "national park service", "nps"],
            explanation: "Their seats are why the body that governs what is built in Southwest still answers partly to the federal government.",
          },
          {
            prompt: "At the neighbourhood scale, Southwest is governed by Advisory Neighborhood Commission 6___.",
            answer: "D",
            accept: ["d", "6d", "6-d"],
            explanation: "ANC 6D covers Southwest, in Ward 6. Its recommendations are advisory but agencies must give them great weight.",
          },
          {
            prompt: "The statute under which Southwest was cleared was the District of Columbia ___ Act of 1945.",
            answer: "Redevelopment",
            accept: ["redevelopment", "redevelopment act"],
            explanation: "60 Stat. 790, which created the Redevelopment Land Agency and empowered it to acquire blighted land.",
          },
          {
            prompt: "The legal conclusion a redevelopment body must reach before it may acquire and clear an area is that the area is ___.",
            answer: "blighted",
            accept: ["blight", "blighted", "substandard"],
            explanation: "A legal conclusion reached on a record against statutory criteria, not a description. Start there when you research a demolition.",
          },
          {
            prompt: "The 1954 Supreme Court case that upheld the Southwest clearance was Berman v. ___.",
            answer: "Parker",
            accept: ["parker", "berman v parker"],
            explanation: "348 U.S. 26 (1954), decided unanimously, which made blight-designation clearance constitutionally safe nationwide.",
          },
          {
            prompt: "The plaintiff in Berman owned a ___ store, not a dwelling, at 712 Fourth Street S.W.",
            answer: "department",
            accept: ["department", "department store"],
            explanation: "The case that authorised clearing homes was won against a going business whose property was not itself a slum.",
          },
          {
            prompt: "The amendment guaranteeing just compensation for a taking is the ___ Amendment.",
            answer: "Fifth",
            accept: ["5th", "5", "five"],
            explanation: "In the District the Fifth Amendment applies directly, because the District is federal ground.",
          },
          {
            prompt: "The 1973 Act that restored an elected DC mayor and council, with Congress keeping a veto, is the ___ Rule Act.",
            answer: "Home",
            accept: ["home", "home rule", "home rule act"],
            explanation: "Signed December 1973 and approved by DC voters in 1974. DC still has no voting representation in Congress.",
          },
          {
            prompt: "The 2017-and-2022 private redevelopment of the Southwest waterfront is called The ___.",
            answer: "Wharf",
            accept: ["wharf", "the wharf"],
            explanation: "By Hoffman-Madison Waterfront: public land assembled and conveyed to a private developer, the Berman pattern running again.",
          },
        ],
      },
    },
    {
      slug: "dc-quiz-next",
      title: "19 · Quiz: finding the live record",
      section: "Section 5 · Next",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Why is this course's map national rather than block by block?",
            options: [
              "Because the exact map coordinates of Southwest were never properly surveyed",
              "The world-scale map needs two degrees between points; a quadrant is under one dot",
              "Because detailed block maps of the whole District are all under copyright",
              "Because the course deliberately avoids showing any maps of Washington",
            ],
            correctIndex: 1,
            explanation: "Matching the scale of the map to the question is the skill. For a parcel you use the District's own GIS and real-property tools.",
            sourceLessonSlug: "dc-map",
          },
          {
            prompt: "What do the amber markers on the map have in common?",
            options: [
              "They are the four largest cities in the entire United States",
              "They each once had a listing in the Negro Motorist Green Book",
              "They are places the Berman holding reached or was applied",
              "They were chosen at random from across the national map",
            ],
            correctIndex: 2,
            explanation: "Indiana Avenue, New London, Detroit and Overtown show Southwest as the origin point of a national doctrine, not a local misfortune.",
            sourceLessonSlug: "dc-map",
          },
          {
            prompt: "In the District, how is a parcel identified?",
            options: [
              "By Square, Suffix, and Lot (SSL)",
              "By a single nationwide parcel number",
              "By its ZIP code",
              "By the owner's name only",
            ],
            correctIndex: 0,
            explanation: "The Square is the historic city block; the Lot is the parcel within it. An address without its SSL is only half-located, the DC version of \"carry the city.\"",
            sourceLessonSlug: "dc-next-exercise-parcel",
          },
          {
            prompt: "Which four facts should you pull for any parcel in any jurisdiction?",
            options: [
              "The paint color, the roof age, the total square footage, and the full street name",
              "The architect, the contractor, the original build cost, and the current tenant",
              "Only the zoning code and the current use that applies to the parcel",
              "The parcel identifier, the owner of record, the assessed value, and the jurisdictions",
            ],
            correctIndex: 3,
            explanation: "The names of the tools change from place to place; those four facts do not.",
            sourceLessonSlug: "dc-next-exercise-parcel",
          },
          {
            prompt: "What is unusual about the DC Zoning Commission's membership?",
            options: [
              "It seats two federal members, the Architect of the Capitol and the Park Service director",
              "Every single one of its members is elected directly by District of Columbia voters",
              "All of its five members are appointed by the President of the United States alone",
              "It has no members who actually reside within the District of Columbia today",
            ],
            correctIndex: 0,
            explanation: "The body that decides what may be built in Southwest still seats members no District voter chose, echoing the absent franchise of Section 3.",
            sourceLessonSlug: "dc-next-adopted-plan",
          },
          {
            prompt: "How does The Wharf redevelopment repeat the Berman pattern?",
            options: [
              "It faithfully restored the demolished alley dwellings on their original old sites",
              "Public land assembled by an agency and conveyed to a private developer at large scale",
              "It was designed and built entirely by the federal government itself",
              "It required a binding citywide referendum before any of the construction began",
            ],
            correctIndex: 1,
            explanation: "Public taking followed by private rebuilding, the design Berman blessed, running again in the same quadrant with phases opening in 2017 and 2022.",
            sourceLessonSlug: "dc-next-adopted-plan",
          },
          {
            prompt: "A comprehensive plan differs from zoning because:",
            options: [
              "It legally binds every single one of the District's property owners right away",
              "It covers only the federally owned land within the whole District",
              "It is the policy rezonings are judged against, while zoning is the enforceable rule",
              "It is written by the private developer who actually proposes the given project",
            ],
            correctIndex: 2,
            explanation: "That is why a zoning hearing so often becomes an argument about what the comprehensive plan says.",
            sourceLessonSlug: "dc-next-adopted-plan",
          },
          {
            prompt: "At the neighbourhood scale, which body governs Southwest, and what is the weight of its recommendations?",
            options: [
              "The Zoning Commission entirely alone, whose word on any parcel is always final",
              "The U.S. Congress, which votes directly on each and every individual parcel",
              "The National Park Service, which owns all of the land across Southwest",
              "Advisory Neighborhood Commission 6D, advisory but which agencies must weigh heavily",
            ],
            correctIndex: 3,
            explanation: "Southwest is in Ward 6; ANC 6D's meetings are the cheapest civic act there is and where a resident's leverage is highest.",
            sourceLessonSlug: "dc-next-adopted-plan",
          },
          {
            prompt: "Why does this course tell you to practise parcel lookups on institutional or public addresses?",
            options: [
              "Because tying a current occupant's name to their address differs from a public record",
              "Because residential parcel records are kept entirely secret from all of the public",
              "Because private homes have no parcel identifier of any kind at all in the database",
              "Because county assessors always refuse any request about a residence",
            ],
            correctIndex: 0,
            explanation: "The same rule the method course applied to tourist homes: a house someone lives in is somebody's home first.",
            sourceLessonSlug: "dc-next-exercise-parcel",
          },
          {
            prompt: "Which level of designation normally regulates whether a building can be demolished?",
            options: [
              "Listing as a National Historic Landmark by the U.S. Secretary of the Interior",
              "A local historic landmark under the District's own preservation law and review board",
              "Being entered on the National Register of Historic Places by the Keeper",
              "A listing on the state register of historic places maintained by the state",
            ],
            correctIndex: 1,
            explanation: "Federal listing is recognition plus review leverage on federally funded or permitted work. The local law is what requires a permit before demolition.",
            sourceLessonSlug: "dc-built-what-survived",
          },
          {
            prompt: "When you find the street grid replaced by superblocks set behind lawns, what have you found?",
            options: [
              "A natural landscape feature of the old riverbank that predates the entire city grid",
              "A large federal park that stood on exactly this ground long before the clearance",
              "A place where a superblock replaced the old fine-grained neighborhood, a dated decision",
              "Nothing checkable, since old street patterns leave behind no dated record",
            ],
            correctIndex: 2,
            explanation: "Every place the old grid does not continue is a place a superblock replaced it, and the change has a date and a record.",
            sourceLessonSlug: "dc-now-tour",
          },
          {
            prompt: "What is the most important civic question to ask at the rebuilt waterfront?",
            options: [
              "Which of the waterfront's many new restaurants serves the very best food",
              "How tall the tallest of the new waterfront buildings actually stands",
              "What year the wooden piers along the wharf were last repainted",
              "Whether an ordinary person can reach the water's edge without buying anything",
            ],
            correctIndex: 3,
            explanation: "Whether the public can reach the water freely is the deepest civic fact about a waterfront, and a tour can show the answer.",
            sourceLessonSlug: "dc-now-tour",
          },
          {
            prompt: "Why does this course publish a virtual_tour lesson before the tour URL exists?",
            options: [
              "Because beat 4 is a drop-in: the course is complete without it, the body is the brief",
              "Because the planned 360 tour of the Southwest waterfront was canceled",
              "Because the platform strictly requires a placeholder lesson to occupy this slot",
              "Because the planned 360 tour will never actually be added to this whole course",
            ],
            correctIndex: 0,
            explanation: "A tour embed URL is authoritative external data and is never guessed, so the lesson ships with the notice and the brief and the URL drops in on a re-seed.",
            sourceLessonSlug: "dc-now-tour",
          },
          {
            prompt: "What does the map lesson say about its markers being approximate points?",
            options: [
              "The whole map is unreliable and should simply be ignored by the reader",
              "Do not use them to find an address; use them for the pattern, parcel tools for a lot",
              "The scattered marker coordinates should all be averaged into one single point",
              "The markers are fictional inventions placed on the map for illustration",
            ],
            correctIndex: 1,
            explanation: "Approximate points at world scale are fine for a pattern and useless for a lot line. Match the tool to the question.",
            sourceLessonSlug: "dc-map",
          },
          {
            prompt: "Why should you re-check every date and body given in the \"who governs this ground\" lesson?",
            options: [
              "Because the dates and bodies the lesson gives you are all probably wrong already",
              "Because the underlying sources for the lesson are all kept secret from the public",
              "Because plans are amended, developers change, and DC zoning still answers to Congress",
              "Because the parcels themselves physically move over time on the map",
            ],
            correctIndex: 2,
            explanation: "Re-checking is the method, not a disclaimer, and DC's federal oversight makes \"who governs this ground\" an unusually long answer.",
            sourceLessonSlug: "dc-next-adopted-plan",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 6 · Write  (beat 6: ELA and creative nonfiction, grounded in the place)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "dc-write-assignment",
      title: "20 · Your assignment: write one address",
      section: "Section 6 · Write",
      lessonType: "assignment",
      body: `Beat 6 asks a question no other beat can: **what can only be said about this place?** Answering it is a writing problem, and this assignment is a real one.

## The assignment
Write **900 to 1,300 words** of creative nonfiction about **one block, one building, or one address** in or near Southwest Washington. Every factual sentence must be checkable against a source you name. **The form is literary; the standard of evidence is the one Section 3 used on a Supreme Court opinion.**

## Step 1 · Choose one address, and choose small
Pick from the survivors in lesson 7 (Wheat Row, the Thomas Law House), from the *Berman* record (the department store at 712 Fourth Street S.W.), from the Southwest waterfront and The Wharf, or from a parcel you found in lesson 18. **Smaller is better.** "Southwest" is not a subject, it is a topic. **712 Fourth Street S.W., where a department store owner took the clearance of a neighborhood to the Supreme Court and lost, is a subject.**

If you do not live in Washington and cannot visit, that is not a disqualification. **It is a constraint you disclose in the piece**, and it changes what you can honestly claim.

## Step 2 · Build the four-column chronology before you write a sentence
Lesson 11 weakened a good argument with a table. Build your own, with these columns: **date, event, instrument, source**. If the instrument column is empty for an event, you have a story and not yet a decision. **The table is the outline.**

## Step 3 · Decide what kind of piece this is
Pick one and commit, because mixing them is what makes place writing mushy.
- **A biography of a building.** Its plan, its uses, its owners, its end or its survival.
- **A history of a decision.** One designation, one taking, one opinion, one vote, followed to the document.
- **A report on a present.** What is there now, who uses it, what the current plan proposes, what a public meeting or an ANC 6D agenda actually said.
- **A piece about the record itself.** What you could and could not find, and what the gap means.

**The fourth is the hardest and often the best**, and it is the only one that can be written honestly with thin sources.

## Step 4 · Write it, under these craft rules
1. **Lead with a specific.** A street number, a percentage from the survey, a date on a document. Not a mood.
2. **Name the instrument every time you name a loss.** "The neighborhood was cleared" is weak. "The Redevelopment Land Agency acquired it under the 1945 Act, and Berman v. Parker held the taking lawful" is strong, if you can source it.
3. **Give a figure its owner.** Not "23,000 people were displaced" but "the local histories compiled by WETA's Boundary Stones put displacement from the Southwest renewal at about 23,000 residents."
4. **Attribute an argument as an argument.** James Baldwin called urban renewal "Negro removal" (WTTW, n.d.). **You may quote and engage that. You may not launder it into your own narration as though it were a finding.** The distinction between a documented chronology and an interpretive frame is the most important thing in this section.
5. **Quote the opinion exactly, or not at all.** If you use *Berman*, use its real words. Douglas wrote that public welfare is "broad and inclusive." **Do not improve the quotation, and do not attribute to the Court a holding it did not reach**, which lesson 9 spelled out.
6. **Use the present tense for the present.** Southwest is a working part of a living city with a rebuilt waterfront and a live planning process, not a ruin. Write it that way.
7. **One paragraph, minimum, on what you could not establish.** Required, not optional.

## Rules you do not get to break
1. **No invented detail.** Not a date, a name, a quotation, a street number, or a statistic. **If a source does not say it, you do not write it.** This includes atmospheric invention: you do not know what the alley smelled like.
2. **No composite or imagined characters.** Real, cited people only. The record gives you A'Lelia Walker's counterpart here in the founders whose houses survived, the department-store owner who sued, and the scattered families Daniel Thursz counted. **That is more than enough material.**
3. **No invented dialogue**, including "he might have said."
4. **Living communities describe themselves.** Southwest has residents and descendants now. Use the names and terms the people who live and work there use, and say where you got them.
5. **No ruin porn, and no lost golden age.** A neighborhood that lacked indoor plumbing was not a paradise, and its clearance was not a natural death or a simple rescue. **Both of those framings flatter the writer and cheat the subject.** The Thursz study is your guard against both.
6. **Credit what was built.** The congregations, the businesses, the fish market that outlived the bulldozers, the freeway revolt that saved other neighborhoods. **A piece that only inventories loss is an incomplete report.**
7. **Private homes are private.** Do not publish a current resident's name with their address, do not photograph into windows, and do not knock uninvited. Wheat Row is somebody's home today.
8. **Say what you did to a number.** If you adjusted a 1950s dollar figure for inflation, say so and say how.

## What good looks like
A short, checkable piece in which every sentence is either something you read in a named source or something you clearly mark as unresolved, and in which the prose is still good. **Those two standards do not conflict.** A store owner who lost at the Supreme Court and gave his name to the case that cleared a neighborhood he did not live in; a 1790s row house saved because it was old while the living blocks around it were not; a survey of percentages a court read aloud before a bulldozer moved: **none of that needs decorating.**

## Sources
- Berman v. Parker, 348 U.S. 26 (1954). https://www.law.cornell.edu/supremecourt/text/348/26
- Boundary Stones (WETA). (2022, July 21). *The cost of urban renewal in Southwest DC*. https://boundarystones.weta.org/2022/07/21/cost-urban-renewal-southwest-dc
- Thursz, D. (1966). *Where are they now? A study of the impact of relocation on former residents of southwest Washington*. Health and Welfare Council of the National Capital Area.
- WTTW. (n.d.). *Southwest Washington, DC*. https://www.wttw.com/ten/towns/southwest-washington-dc`,
      recallContent: [
        {
          prompt: "What is the difference between a topic and a subject in this assignment?",
          answer: "\"Southwest\" is a topic. \"712 Fourth Street S.W., where a department store owner took the clearance to the Supreme Court and lost\" is a subject. Smaller is better.",
        },
        {
          prompt: "What are the four columns of the chronology you build before writing, and what does an empty instrument column mean?",
          answer: "Date, event, instrument, source. An empty instrument column means you have a story rather than a documented decision.",
        },
        {
          prompt: "How must you handle James Baldwin's \"Negro removal\" framing?",
          answer: "Quote it and engage it as an argument with an author. Do not launder it into your own narration as though it were a documented finding.",
        },
        {
          prompt: "What are the two rules about quoting Berman v. Parker?",
          answer: "Use its real words exactly, and do not attribute to the Court a holding it did not reach. Lesson 9 spelled out what it did and did not hold.",
        },
        {
          prompt: "Why does the assignment ban both ruin porn and the lost-golden-age frame, and what guards against both?",
          answer: "Because a neighborhood without indoor plumbing was not a paradise, and its clearance was not a natural death or a simple rescue. Both framings flatter the writer and cheat the subject. The Thursz study, which measured real outcomes, is the guard.",
        },
      ],
    },
    {
      slug: "dc-what-comes-next",
      title: "21 · What this course set up, and what it left out",
      section: "Section 6 · Write",
      body: `You have now run the six-beat site template a second time, on the place where the central instrument of the whole series was made constitutionally safe. **If the Indiana Avenue course taught you the method, this course showed you the document behind it.**

| Beat | What you did here | What you can now do anywhere |
|---|---|---|
| **1. Then** | Read Southwest from a 1950 census share, a survey of percentages, and a 1966 relocation study | Establish what a place was, and what happened to its people, from named sources |
| **2. Built** | Read superblock typology and asked what preservation chose to save | Tell what a building type does, and read a survivor as evidence about the era that spared it |
| **3. Powers** | Read a Supreme Court opinion in its own words and traced its holding across the country | Read the law itself, quote it exactly, and say what it did and did not hold |
| **4. Now** | Built an observation brief for a place mostly no longer there | Look at a cleared site with questions instead of nostalgia |
| **5. Next** | Found the plan, the commission, the parcel, and the federal members still on the zoning board | Participate in a live decision, and spot when a city does not fully govern itself |
| **6. Write** | Wrote grounded nonfiction under an evidence standard | Publish something the next researcher can build on |

**What you can do that you could not do before.**
- Read the actual opinion behind a doctrine, rather than a summary of it, and quote it accurately.
- Separate what a case held from what it is popularly said to have held. **Berman held that an area may be taken as a whole and conveyed to a private developer. It did not hold that any particular building was a slum**, and it was brought by a store owner, not a displaced family.
- Test a cross-city link against a chronology and report the weaker, true version. **Berman did not cause Indiana Avenue's clearance; it backstopped the tool nationwide.**
- Recognize the *Berman* pattern, public taking then private rebuilding, when it runs again, as it does at The Wharf.
- Ask who holds the vote over a piece of ground, and notice when the answer is "not the people who live on it."

**What this course deliberately did not cover, and why.**
- **The full history of DC statehood and representation.** It appears here only where it touches the clearance and the zoning. **The franchise is a course of its own**, and this one used only the part the ground required.
- **A named, documented individual displaced family.** The Indiana Avenue course could follow the Temple family through a condemnation record. For Southwest this course used the Thursz cohort in aggregate rather than inventing or overclaiming a single household, because **a real aggregate study beats a decorated individual story you cannot fully source.**
- **A judgment on whether Southwest should have been renewed.** The course establishes what was done, under which instrument, on what record, and by a legislature the residents could not vote for. **The judgment is the learner's, and it should be made on the documents.**
- **A corridor-level displacement total presented as exact.** The circulating figures are compiled, and this course carries their owner rather than laundering them into a single hard number.

**The unopened sources, which are the next real work.** The Redevelopment Land Agency's project files and its photograph collection in the DC Public Library People's Archive. The National Capital Planning Commission's Southwest plan documents. The Historic American Buildings Survey documentation of the renewal area. The full trial record behind *Berman*, and the Emergency Committee on the Transportation Crisis papers. **None of those has been read into this course.** They are public or requestable, and they are where an original contribution would start.

**Where this sits in the series, and where it points.** This is the courthouse of the route-course cluster. From here the planned metro courses each take up a different stage in the life of the same instruments: **Pittsburgh**, where the postwar renewal playbook was written; **Philadelphia**, where a university assembled land through a redevelopment authority exactly as on Indiana Avenue; **Baltimore**, where the whole chain from racial zoning to an unfinished highway sits in one city; and **Seattle**, where a later Supreme Court turned back a district trying to integrate voluntarily. **You now hold the opinion that licensed the tool. The rest of the series is what people did with it.**

## Sources
- Berman v. Parker, 348 U.S. 26 (1954). https://www.law.cornell.edu/supremecourt/text/348/26
- Boundary Stones (WETA). (2022, July 21). *The cost of urban renewal in Southwest DC*. https://boundarystones.weta.org/2022/07/21/cost-urban-renewal-southwest-dc
- Thursz, D. (1966). *Where are they now? A study of the impact of relocation on former residents of southwest Washington*. Health and Welfare Council of the National Capital Area.`,
      recallContent: [
        {
          prompt: "What are the four questions to ask about any parcel's future, in order?",
          answer: "What the comprehensive plan says it should become; what the zoning permits today; whether there is an area plan or live development and who approved it; and who decides, when they meet, and whether the agenda is public.",
        },
        {
          prompt: "What is unusual about the membership of the DC Zoning Commission, and why does it matter to this course?",
          answer: "It has five members: three District residents appointed by the Mayor and confirmed by the Council, and two federal officials, the Architect of the Capitol and the Director of the National Park Service. The body that decides what may be built still seats members no District voter chose, echoing the absent franchise of Section 3.",
        },
        {
          prompt: "How does The Wharf redevelopment repeat the Berman pattern?",
          answer: "Public land assembled by a redevelopment agency and conveyed to a private developer (Hoffman-Madison Waterfront), rebuilt at large scale, with phases opening in 2017 and 2022. It is the public-taking-then-private-rebuilding design Berman blessed, running again in the same quadrant seventy years later.",
        },
        {
          prompt: "At the neighbourhood scale, what body governs Southwest, and how much power does it have?",
          answer: "The Advisory Neighborhood Commission; Southwest is in Ward 6 and ANC 6D. Its recommendations are advisory, but agencies must give them great weight, and its public meetings are where a resident's leverage is highest and cost lowest.",
        },
        {
          prompt: "Why does this lesson tell you to re-check every date and body it gives?",
          answer: "Because plans are amended, developers change, and contracts are extended, and in a city whose zoning still answers partly to Congress the answer to who governs this ground keeps moving. Re-checking is the method, not a disclaimer.",
        },
      ],
    },
    // <<< APPEND NEXT SECTION ABOVE THIS LINE >>>
  ],
};
