// Authored "Baltimore: The Whole Chain" (slug `baltimore-the-whole-chain`) — a cited,
// high-school-and-up SITE course on Learn.WitUS (Culture & History), and the metro-spine course
// for Baltimore planned in plans/41-metro-paths.md section 3b. It runs the six-beat site template
// end to end, one beat per section: Then, Built, Powers, Now, Next, Write.
//
// Prerequisites named in the prose: `green-book-how-to-read-a-route` teaches the METHOD (read a
// listing, chain a route, research an address forward) and `indiana-avenue-a-district-and-what-
// replaced-it` teaches the six-beat template and the idea of an INSTRUMENT (a legal power, a body,
// a statute, a document). This course applies both to one city.
//
// The argument, and why Baltimore is uniquely useful: Baltimore lets you show every link in one
// chain WITHOUT LEAVING TOWN. Racial zoning (the 1910 ordinance, widely described as the first in
// the United States), then restrictive covenants, then redlining (Baltimore is a canonical HOLC map
// city), then the "Highway to Nowhere" driven partway through Rosemont and Franklin-Mulberry and
// then abandoned. These were successive tools aimed at the same end, and the point of the course is
// the SEQUENCE. Section 3 (Powers) is the load-bearing section.
//
// Sourcing discipline (the load-bearing part of this file), and where the chain proved LESS TIDY
// than the headline, which is taught rather than smoothed:
//   * Every teaching lesson carries APA 7 in-line citations and a `## Sources` bibliography.
//   * THE ZONING LINK is real but was never one clean law. It was a chain of at least four
//     ordinances (1910, twice in 1911, and 1913), each struck by state courts on drafting or
//     vested-property grounds (State v. Gurry, 1913) before Buchanan v. Warley (1917) ended the
//     whole class federally. Lesson 8 teaches the chain-of-four, not a single statute.
//   * THE SEQUENCE OVERLAPS. The Roland Park Company's Guilford covenant is 1913, four years BEFORE
//     Buchanan, so covenants ran PARALLEL to zoning rather than strictly after it. Lesson 12 makes
//     the overlap the finding: the chain is a lineage of PURPOSE, not a clean baton pass.
//   * THE REDLINING CAUSAL CLAIM IS DISPUTED. The popular account (the HOLC map redlined Baltimore)
//     is contested by scholars: HOLC's own lending went into red areas, the maps were confidential,
//     and the FHA Underwriting Manual did more of the private-market work, though later work finds
//     the map boundaries did carry SOME independent effect. Lesson 10 teaches the map as canonical
//     EVIDENCE of the mindset while refusing the tidy causal story, and leans on the FHA manual's
//     own verbatim words as the better-documented instrument.
//   * NO INVENTED STATISTIC, PERSON, QUOTATION, ADDRESS, OR LISTING. The highway's displacement
//     figures (about 971 homes, 62 businesses, one school, roughly 19 to 20 blocks, about 1,500
//     residents) are given WITH their owner and date (1973 Baltimore Evening Sun reporting) and are
//     never averaged or presented as a corridor-level survey.
//   * Baltimore's people are credited for what they built (the Royal Theatre, the Arch Social Club,
//     the Afro-American, the marble steps kept clean under confinement), not only mourned for what
//     was taken. The corridor is a live cultural district with a light-rail line and a highway-
//     removal grant in motion right now, which is what beat 5 sends learners to.
//
// House rule: NO em-dashes or en-dashes in prose. Verbatim cited titles, page ranges and reference
// numbers inside a `## Sources` block are the only place a dash survives, and those use hyphens.

import type { AuthoredCourse } from "./authored-course";

export const BALTIMORE_CHAIN_COURSE: AuthoredCourse = {
  title: "Baltimore: The Whole Chain",
  description:
    "A cited, high-school-and-up site course on one American city that holds every link of the housing-segregation chain within its own limits: racial zoning, restrictive covenants, redlining, and a highway driven through the middle of a Black neighbourhood and then abandoned. Baltimore is uniquely useful because you do not have to leave town to see the whole sequence. Its two prerequisites, The Green Book: How to Read a Route and Indiana Avenue: A District and What Replaced It, teach the method and the idea of an instrument, a specific legal power exercised by a specific body under a specific statute leaving a specific document. This course lines up four such instruments as one lineage aimed at one end, and then does the harder thing: it tests whether the sequence is really as clean as it sounds. It is not. The ordinance was a chain of four laws, not one. The covenants ran alongside the zoning rather than after it. The redlining map's direct causal role is disputed by the historians who have read the lending records. Teaching that untidiness is the point, because a chain you can check is worth more than a story you cannot. You will read the ordinance, the covenant language, the map and the highway plan, walk the unfinished trench as an unusually legible absence, find the plan being written for that ground right now, look up a real Baltimore parcel in the state's own records, and write a piece of grounded nonfiction about one block. A 360 tour of the corridor is planned and will be added to the Now section when it is captured.",
  lessons: [
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 1 · Then  (beat 1: US and state/local history. who lived where, and why)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "bc-neighbourhoods",
      title: "1 · Old West Baltimore: who lived where, and why",
      section: "Section 1 · Then",
      body: `**Start with the two prerequisites.** This course assumes you have finished *The Green Book: How to Read a Route*, which taught a method, and *Indiana Avenue: A District and What Replaced It*, which taught the six-beat template and one idea above all: an **instrument** is a specific legal power, exercised by a specific body, under a specific statute, leaving a specific document. Indiana Avenue traced five instruments in one corridor. **Baltimore is the course where you can watch four of them line up as a single chain, and never leave the city to do it.**

**The place.** The historic centre of Black Baltimore is a cluster of west-side neighbourhoods usually grouped as **Old West Baltimore**: Upton, Harlem Park, Sandtown-Winchester, Druid Heights, Marble Hill, and the blocks around **Pennsylvania Avenue** and **Druid Hill Avenue**. It was, for the first half of the twentieth century, one of the largest and most established Black communities on the east coast, and a National Register historic district records it as such (Maryland Historical Trust, n.d.).

**Why the community was concentrated there is the whole point of this course.** A district does not become overwhelmingly one race by accident. Black Baltimoreans were **confined** to specific blocks, first by custom, then by law, then by contract, then by the mortgage market, and the density and vitality of Old West Baltimore is the direct product of that confinement. The neighbourhood was crowded because its edges were held shut. **Hold that sentence. Everything in Section 3 is the machinery behind it.**

**Who lived there, precisely.** Two things were true at once, and a course that keeps only one is lying.
1. **A confined community.** People who could not buy, rent, or borrow where they wished, packed into an ageing housing stock that the same city would later measure as substandard and use that measurement as a reason to clear it. You saw this circularity in the Indiana Avenue blight lesson. Baltimore built the circle earlier and more explicitly than almost anywhere.
2. **A complete and accomplished society.** The same blocks produced **Thurgood Marshall**, who grew up on Division Street in Old West Baltimore before he argued *Brown v. Board of Education* and joined the Supreme Court; the composer and pianist **Eubie Blake**; and the singer **Billie Holiday**, who spent much of her childhood in Baltimore. The Black weekly the **Baltimore Afro-American**, founded in 1892 by **John H. Murphy Sr.**, grew into one of the most widely circulated Black newspapers in the country from offices in this part of the city (Maryland Center for History and Culture, n.d.).

**The Druid Hill Avenue and McCulloh Street corridor** held the community's professional and civic elite, and it is where this course's first instrument was triggered. In the summer of 1910 a Black lawyer named **W. Ashbie Hawkins** bought a house at **1834 McCulloh Street** and arranged for his law partner **George W. F. McMechen**, a graduate of Yale Law School, to live in it. The block was white. **The white neighbours did not move; they organised, and they went to City Hall.** What they got is instrument one, and Section 3 reads the ordinance itself. For now, notice only this: the address that set off the nation's first residential segregation law was a Black professional's house on a good street. **The instruments in this course were aimed most sharply at Black success, not Black poverty.**

**A warning about tone, which is a research instruction and not a courtesy.** The people who built Old West Baltimore have living descendants, and their neighbourhood organisations are active right now. Do not write about this place as a vanished golden age. Write about what people built, name them where the record names them, and keep the vanishing for the parts you can document. **Every framing choice in this course is checkable against a source, and so should yours be.**

## Sources
- Maryland Center for History and Culture. (n.d.). *Baltimore's pursuit of fair housing: A brief history*. https://www.mdhistory.org/baltimores-pursuit-of-fair-housing-a-brief-history/
- Maryland Historical Trust. (n.d.). *Old West Baltimore Historic District*. Maryland Inventory of Historic Properties. https://mht.maryland.gov/
- Power, G. (1983). Apartheid Baltimore style: The residential segregation ordinances of 1910-1913. *Maryland Law Review, 42*(2), 289-329. https://digitalcommons.law.umaryland.edu/mlr/vol42/iss2/4/`,
      recallContent: [
        {
          prompt: "What is Old West Baltimore, and why was the Black community concentrated there?",
          answer: "A cluster of west-side neighbourhoods (Upton, Harlem Park, Sandtown-Winchester, Druid Heights, Marble Hill and the Pennsylvania and Druid Hill Avenue blocks) that formed the historic centre of Black Baltimore. It was concentrated because Black Baltimoreans were confined there by custom, law, contract and the mortgage market. The density is the product of the confinement.",
        },
        {
          prompt: "Name three people who came out of Old West Baltimore.",
          answer: "Thurgood Marshall, who grew up on Division Street before arguing Brown v. Board and joining the Supreme Court; the composer Eubie Blake; and the singer Billie Holiday, who spent much of her childhood in Baltimore. The Baltimore Afro-American newspaper also grew up there.",
        },
        {
          prompt: "What happened at 1834 McCulloh Street in the summer of 1910?",
          answer: "The Black lawyer W. Ashbie Hawkins bought the house and had his law partner George W. F. McMechen, a Yale Law graduate, move into it on a white block. The white neighbours organised and pushed City Hall to pass a segregation ordinance. The trigger was a Black professional on a good street.",
        },
        {
          prompt: "Which two prerequisite courses does this one build on, and what does each teach?",
          answer: "The Green Book: How to Read a Route teaches the method. Indiana Avenue: A District and What Replaced It teaches the six-beat site template and the idea of an instrument: a legal power, a body, a statute, a document.",
        },
      ],
    },
    {
      slug: "bc-pennsylvania-avenue",
      title: "2 · Pennsylvania Avenue, and the circuit the Green Book served",
      section: "Section 1 · Then",
      body: `Now apply the method course. You are going to read one street as a Green Book corridor, and notice what the reading proves and what it does not.

**The street.** **Pennsylvania Avenue**, running northwest through Upton, was the commercial and entertainment spine of Black Baltimore, so central that people called it simply "The Avenue," the same nickname Indianapolis gave Indiana Avenue. In 2019 the state of Maryland designated the area around it as **Maryland's first Black Arts District** (Visit Baltimore, n.d.). That designation is a present-day civic act with a date and a sponsor, exactly the kind of public record the method course taught you to read.

**Why a corridor like this existed is the same reason Indiana Avenue existed.** A segregated city refused Black customers at its downtown theatres, hotels and lunch counters, so Black Baltimore built its own, in a district where it could not be turned away. That is why the Green Book, the travel guide at the centre of your first course, listed businesses here: a Black traveller arriving in Baltimore needed to know which hotels and restaurants would take them, and The Avenue is where many of the answers were.

**Three anchors on the street, each leaving a different kind of record.**

**The Royal Theatre, 1329 Pennsylvania Avenue.** It opened in 1922 as the Black-owned **Douglass Theatre** and became the Royal, the Baltimore stop on the circuit of major Black theatres that also included the Apollo in Harlem, the Howard in Washington, the Regal in Chicago and the Earle in Philadelphia (Baltimore Magazine, n.d.). Performers documented on its stage include Louis Armstrong, Ella Fitzgerald, Cab Calloway and many others. **The city demolished the Royal in 1971**, during the same wave of urban renewal that took Black theatres in other cities, and today a monument marks the site (Visit Baltimore, n.d.). A theatre that hosted the top of American music for half a century is now a plaque, which is the shape of this whole course in one building.

**The Arch Social Club, 2426 Pennsylvania Avenue.** Founded in 1905, it is described as one of the oldest continuously operating Black social clubs in the United States, and it is still there, still on The Avenue (Visit Baltimore, n.d.). **A surviving institution is a different kind of evidence than a monument**, and knowing which one you are looking at is the single most useful thing you can carry into the Now tour.

**The Avenue's Black-owned lodging.** The corridor's Black-owned hotels are the businesses a travel guide most cared about, because lodging was the category the Green Book kept longest. This is the link back to your method course: **a Black traveller's Baltimore ran through these blocks because most of the rest of the city was closed to them.**

**What this corridor does not prove, and the trap to avoid.** Naming the famous venues is not the same as reading the Green Book. If you want to make a Green Book claim about Baltimore, **read it out of a digitized edition and carry the city with the street**, exactly as the method course insisted when it caught you putting a French Lick hotel on Indianapolis's Indiana Avenue. Baltimore has more than one "Avenue," and Pennsylvania Avenue runs through several cities in the United States. **A listing is only located when you carry the city.** Do not assert a street number and a year from memory. Look it up.

## Sources
- Baltimore Magazine. (n.d.). *Baltimore's iconic Royal Theatre hosted some of the greatest talent in American musical history*. https://www.baltimoremagazine.com/section/artsentertainment/the-royal-theatre-pennsylvania-avenue-100-years-american-music-history/
- New York Public Library. (n.d.). *Green Book research guide*. https://libguides.nypl.org/greenbook
- Visit Baltimore. (n.d.). *A tour of Pennsylvania Avenue Black Arts & Entertainment District*. https://baltimore.org/neighborhoods/a-tour-of-pennsylvania-avenue-black-arts-entertainment-district/`,
      recallContent: [
        {
          prompt: "What was Pennsylvania Avenue to Black Baltimore, and what did Maryland designate it in 2019?",
          answer: "The commercial and entertainment spine of Black Baltimore, known as The Avenue. In 2019 Maryland designated the area around it as the state's first Black Arts District.",
        },
        {
          prompt: "What was the Royal Theatre, and what happened to it?",
          answer: "It opened in 1922 as the Black-owned Douglass Theatre at 1329 Pennsylvania Avenue and became the Baltimore stop on the circuit of major Black theatres (with the Apollo, Howard, Regal and Earle). The city demolished it in 1971 and a monument now marks the site.",
        },
        {
          prompt: "Why does the Arch Social Club count as a different kind of evidence than the Royal Theatre?",
          answer: "The Arch Social Club, founded in 1905 at 2426 Pennsylvania Avenue, is a surviving institution still operating on The Avenue. A survivor is different evidence than a monument, which marks an absence.",
        },
        {
          prompt: "What is the trap when making a Green Book claim about Baltimore?",
          answer: "Asserting a street number and year from memory. You read it out of a digitized edition and carry the city with the street, because more than one American city has a Pennsylvania Avenue and Baltimore has more than one Avenue.",
        },
      ],
    },
    {
      slug: "bc-who-built",
      title: "3 · What the community built for itself",
      section: "Section 1 · Then",
      body: `A district is not only shops and stages. Under confinement, Black Baltimore built a full set of institutions, because the white city would not provide them, and those institutions are the part of the record most retellings skip.

**The press.** The **Baltimore Afro-American**, founded in **1892** by **John H. Murphy Sr.**, a formerly enslaved man, grew into one of the most influential Black newspapers in the country and is still publishing today, one of the longest-running Black family-owned newspapers in the United States (Maryland Center for History and Culture, n.d.). **A newspaper is an archive.** When Section 5 sends you looking for what a community said about a decision at the time it was made, the Afro-American is the first place to look for Black Baltimore, the way the *Indianapolis Recorder* was for Indianapolis.

**The professions and the fight.** Old West Baltimore was a base for the legal and civic campaign against segregation, not only a target of it. **W. Ashbie Hawkins**, the lawyer whose McCulloh Street purchase triggered the 1910 ordinance, spent years fighting the ordinances in court, and Section 3 shows one of those cases winning. The Baltimore branch of the **NAACP** became one of the most active in the country. **Credit the resistance as carefully as you document the instruments.** People here did not simply have things done to them. They organised, they litigated, and on the zoning ordinance they eventually won.

**Health, worship and mutual aid.** Because white hospitals refused or segregated Black patients, Black Baltimore supported its own medical institutions and training for Black nurses and doctors. Because the neighbourhood was dense and church-centred, its large congregations on and around Druid Hill Avenue were civic institutions as much as religious ones, providing meeting halls, mutual-aid networks and the organising base for everything above. **The domestic and the institutional overlap here**, exactly as the Indiana Avenue typology lesson warned: an ordinary rowhouse could hold a doctor's office, a rooming operation run by a widow, or a meeting that planned a lawsuit.

**Why this lesson comes before Section 3, and not after.** It would be easy to build a course that is only a catalogue of instruments, a tour of harm. **That course would be both incomplete and inaccurate**, because it would miss half of what the record contains. The people confined to Old West Baltimore built a press that outlasted the ordinance, a legal campaign that beat the ordinance, and a cultural corridor that shaped American music. **When you reach the Write assignment, this is the material that keeps your piece from being ruin porn.** A block is not only what was taken from it. It is also what the people on it made.

## Sources
- Maryland Center for History and Culture. (n.d.). *Baltimore's pursuit of fair housing: A brief history*. https://www.mdhistory.org/baltimores-pursuit-of-fair-housing-a-brief-history/
- Maryland Historical Trust. (n.d.). *Old West Baltimore Historic District*. Maryland Inventory of Historic Properties. https://mht.maryland.gov/
- Power, G. (1983). Apartheid Baltimore style: The residential segregation ordinances of 1910-1913. *Maryland Law Review, 42*(2), 289-329. https://digitalcommons.law.umaryland.edu/mlr/vol42/iss2/4/`,
      recallContent: [
        {
          prompt: "What is the Baltimore Afro-American, and why does it matter to a researcher?",
          answer: "A Black weekly founded in 1892 by John H. Murphy Sr., a formerly enslaved man, that became one of the most influential Black newspapers in the country and still publishes. It is an archive of what Black Baltimore said about decisions at the time they were made.",
        },
        {
          prompt: "How was Old West Baltimore a base of resistance, not only a target?",
          answer: "W. Ashbie Hawkins and others fought the segregation ordinances in court and won cases against them, and the Baltimore NAACP branch became one of the most active in the country. People organised and litigated rather than only having things done to them.",
        },
        {
          prompt: "Why does this course put 'what the community built' before the instruments in Section 3?",
          answer: "Because a course that is only a catalogue of harm is both incomplete and inaccurate. The people confined here built a lasting press, a winning legal campaign and a cultural corridor, and that material keeps a Write piece from becoming ruin porn.",
        },
      ],
    },
    {
      slug: "bc-quiz-then",
      title: "4 · Quiz: the district",
      section: "Section 1 · Then",
      quiz: {
        passingScore: 70,
        // 15-question bank served 8 at a time with shuffled options, so a retake is a different
        // quiz rather than the same list (the repo standard, src/lib/quiz.ts).
        questionsPerAttempt: 8,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Old West Baltimore became a dense, concentrated Black community mainly because:",
            options: [
              "Black Baltimoreans preferred to live close together",
              "It was confined by custom, then law, then contract, then the mortgage market",
              "The land there was the cheapest in the city",
              "The city built public housing there first",
            ],
            correctIndex: 1,
            explanation: "The density is the product of confinement. The edges of the district were held shut, which is the machinery Section 3 traces.",
            sourceLessonSlug: "bc-neighbourhoods",
          },
          {
            prompt: "Which of these people grew up in Old West Baltimore?",
            options: ["Frederick Douglass", "Thurgood Marshall", "W. E. B. Du Bois", "Booker T. Washington"],
            correctIndex: 1,
            explanation: "Thurgood Marshall grew up on Division Street before arguing Brown v. Board of Education and joining the Supreme Court. Eubie Blake and Billie Holiday also came out of Black Baltimore.",
            sourceLessonSlug: "bc-neighbourhoods",
          },
          {
            prompt: "What happened at 1834 McCulloh Street in the summer of 1910?",
            options: [
              "The city opened its first Black public school",
              "A Black lawyer bought the house and had his law partner move onto a white block, and the neighbours pushed City Hall for a segregation law",
              "A restrictive covenant was signed",
              "The HOLC drew its first red line",
            ],
            correctIndex: 1,
            explanation: "W. Ashbie Hawkins bought the house for his law partner George W. F. McMechen. The trigger for the nation's first residential segregation ordinance was a Black professional on a good street.",
            sourceLessonSlug: "bc-neighbourhoods",
          },
          {
            prompt: "The chapter argues the segregation instruments in this course were aimed most sharply at:",
            options: ["Black poverty", "Black success", "recent migrants only", "renters rather than owners"],
            correctIndex: 1,
            explanation: "The 1910 ordinance was triggered by a Black lawyer buying a house on a good block, not by poverty. The tools targeted Black advancement.",
            sourceLessonSlug: "bc-neighbourhoods",
          },
          {
            prompt: "What was Pennsylvania Avenue to Black Baltimore?",
            options: [
              "A minor residential street",
              "The commercial and entertainment spine, known as The Avenue",
              "The site of the HOLC office",
              "A suburb built after the Second World War",
            ],
            correctIndex: 1,
            explanation: "It was the spine of Black Baltimore, nicknamed The Avenue, and in 2019 Maryland designated the area around it as the state's first Black Arts District.",
            sourceLessonSlug: "bc-pennsylvania-avenue",
          },
          {
            prompt: "The Royal Theatre at 1329 Pennsylvania Avenue was part of a circuit that also included the:",
            options: [
              "Ryman and the Grand Ole Opry",
              "Apollo, Howard, Regal and Earle",
              "Fox and the Orpheum",
              "Cotton Club and the Savoy only",
            ],
            correctIndex: 1,
            explanation: "The Royal was the Baltimore stop on the circuit of major Black theatres with the Apollo (Harlem), Howard (Washington), Regal (Chicago) and Earle (Philadelphia). The city demolished it in 1971.",
            sourceLessonSlug: "bc-pennsylvania-avenue",
          },
          {
            prompt: "Why is the Arch Social Club a different kind of evidence than the Royal Theatre monument?",
            options: [
              "It is older than the country",
              "It is a surviving institution still operating on The Avenue, where the monument marks an absence",
              "It was never a real club",
              "It is located in a different city",
            ],
            correctIndex: 1,
            explanation: "Founded in 1905, the Arch Social Club is one of the oldest continuously operating Black social clubs in the country and is still on Pennsylvania Avenue. A survivor is different evidence than a monument.",
            sourceLessonSlug: "bc-pennsylvania-avenue",
          },
          {
            prompt: "The method-course trap the chapter warns about for Baltimore Green Book claims is:",
            options: [
              "Trusting the digitized editions",
              "Asserting a street number and year from memory instead of reading the edition and carrying the city",
              "Using the 1956 edition",
              "Citing the New York Public Library",
            ],
            correctIndex: 1,
            explanation: "More than one American city has a Pennsylvania Avenue, and Baltimore has more than one Avenue. A listing is only located when you carry the city with the street.",
            sourceLessonSlug: "bc-pennsylvania-avenue",
          },
          {
            prompt: "The Baltimore Afro-American newspaper was founded in 1892 by:",
            options: [
              "W. Ashbie Hawkins",
              "John H. Murphy Sr., a formerly enslaved man",
              "The Roland Park Company",
              "The Home Owners' Loan Corporation",
            ],
            correctIndex: 1,
            explanation: "It grew into one of the most influential Black newspapers in the country and still publishes. A newspaper is an archive of what a community said at the time.",
            sourceLessonSlug: "bc-who-built",
          },
          {
            prompt: "Why does this course put 'what the community built' before the instruments section?",
            options: [
              "To pad the course",
              "Because a course that is only a catalogue of harm is both incomplete and inaccurate",
              "Because the instruments are unimportant",
              "Because the buildings all survive",
            ],
            correctIndex: 1,
            explanation: "The people confined to Old West Baltimore built a lasting press, a winning legal campaign and a cultural corridor. Leaving that out would misrepresent the record.",
            sourceLessonSlug: "bc-who-built",
          },
          {
            prompt: "W. Ashbie Hawkins is significant in this course because he:",
            options: [
              "Designed the HOLC map",
              "Both triggered the 1910 ordinance by a house purchase and then fought the ordinances in court",
              "Was the mayor who signed the ordinance",
              "Built Pennsylvania Avenue's theatres",
            ],
            correctIndex: 1,
            explanation: "His McCulloh Street purchase set off the law, and he spent years litigating against the ordinances, winning at least one case. Resistance is part of the record.",
            sourceLessonSlug: "bc-who-built",
          },
          {
            prompt: "Which neighbourhoods are grouped as Old West Baltimore?",
            options: [
              "Fells Point, Canton and Federal Hill",
              "Upton, Harlem Park, Sandtown-Winchester, Druid Heights and Marble Hill",
              "Roland Park, Guilford and Homeland",
              "Rosemont and Edmondson Village only",
            ],
            correctIndex: 1,
            explanation: "These west-side neighbourhoods around Pennsylvania and Druid Hill Avenues formed the historic centre of Black Baltimore. Roland Park and Guilford are the covenant suburbs of Section 3.",
            sourceLessonSlug: "bc-neighbourhoods",
          },
          {
            prompt: "The Druid Hill Avenue and McCulloh Street corridor within Old West Baltimore held:",
            options: [
              "The city's factories",
              "The community's professional and civic elite",
              "The HOLC and FHA offices",
              "The highway right-of-way",
            ],
            correctIndex: 1,
            explanation: "It was the good street of Black Baltimore, which is exactly why a Black lawyer buying a house there triggered the 1910 ordinance.",
            sourceLessonSlug: "bc-neighbourhoods",
          },
          {
            prompt: "Both things were true of Old West Baltimore at once. They were:",
            options: [
              "A wealthy district and an empty one",
              "A confined community and a complete, accomplished society",
              "A new suburb and an old slum",
              "A white district and a Black one",
            ],
            correctIndex: 1,
            explanation: "It was confined by the instruments and it produced a press, a legal campaign and major American musicians. A course that keeps only one half is lying.",
            sourceLessonSlug: "bc-neighbourhoods",
          },
          {
            prompt: "Because white hospitals refused or segregated Black patients, Black Baltimore:",
            options: [
              "Sent all patients out of state",
              "Supported its own medical institutions and training for Black nurses and doctors",
              "Had no medical care at all",
              "Relied only on the city health department",
            ],
            correctIndex: 1,
            explanation: "The institutions Black Baltimore built for itself, including medical ones, are the part of the record most retellings skip.",
            sourceLessonSlug: "bc-who-built",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 2 · Built  (beat 2: architecture and building typology. the rowhouse city)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "bc-built-rowhouse",
      title: "5 · The rowhouse city",
      section: "Section 2 · Built",
      body: `Beat 2 of the site template asks: **why does it look like that?** In Baltimore the answer is the rowhouse, and reading the rowhouse tells you more about the community than any single monument.

**The form.** Baltimore is, more than almost any American city, a city of **rowhouses**: long unbroken blocks of attached brick houses, most of them two or three stories, one or two rooms deep, sharing side walls with their neighbours. The type filled the city between the 1790s and the 1930s because it was cheap to build in quantity, efficient to heat, and it put homeownership within reach of working people (Hayward & Belfoure, 2001).

**Two details you can read on the street, and what each encodes.**

**The marble steps.** Baltimore rowhouses are famous for white marble stoops, kept scrubbed. That maintenance is not decoration. **It is a public statement of care and respectability made by people the wider city refused to respect**, and it is one of the clearest surviving pieces of evidence that a confined community took pride in its ground. When you write, do not read a clean stoop as quaint. Read it as a message.

**Formstone.** Beginning in the late 1930s, many Baltimore rowhouses were clad in **Formstone**, a moulded cement facing that imitates rough-cut stone. It was patented in 1937 by Albert Knight, and the filmmaker John Waters, a Baltimorean, called it "the polyester of brick" (Baltimore Heritage, n.d.). Formstone is a marker of a working-class, mid-century, often immigrant and Black rowhouse Baltimore, and preservationists now argue over whether removing it to expose the original brick erases that history. **That argument is a Section 2 lesson in itself: the "original" surface is a choice about which past to keep.**

**The alley house, which is the part that carries the segregation story.** Behind the main streets, on narrow interior alleys, Baltimore built much smaller two-story houses, often one room per floor. **These alley houses were the cheapest housing in the city, and they were disproportionately where the poorest residents, including many Black families, were pushed.** A single block could therefore hold a hierarchy: substantial houses facing the avenue, and cramped alley houses behind them. **The built form encodes the confinement.** When the city later measured Old West Baltimore as overcrowded and substandard, the alley houses were a large part of what it was measuring, and, as in Indianapolis, the measurement of a condition the city itself had produced became the justification for clearing it.

**The transferable skill.** You can read a rowhouse block the way the Indiana Avenue typology lesson read a survey form. Count the stories. Look for the alley behind the street. Notice the marble and the Formstone. **Each is a piece of evidence about who was meant to live here and how much room they were given**, and none of it requires a single document to start reading. The documents come in the next lesson, because the rowhouse hides an instrument inside the ground it stands on.

## Sources
- Baltimore Heritage. (n.d.). *Formstone*. https://baltimoreheritage.org/
- Hayward, M., & Belfoure, C. (2001). *The Baltimore rowhouse*. Princeton Architectural Press.
- Maryland Historical Trust. (n.d.). *Old West Baltimore Historic District*. Maryland Inventory of Historic Properties. https://mht.maryland.gov/`,
      recallContent: [
        {
          prompt: "Why did the rowhouse fill Baltimore between the 1790s and the 1930s?",
          answer: "It was cheap to build in quantity, efficient to heat, and it put homeownership within reach of working people. Baltimore is more a rowhouse city than almost any other in the country.",
        },
        {
          prompt: "What does a scrubbed white marble stoop encode?",
          answer: "A public statement of care and respectability made by people the wider city refused to respect. It is evidence that a confined community took pride in its ground, not a quaint decoration.",
        },
        {
          prompt: "What is Formstone, and why do preservationists argue about it?",
          answer: "A moulded cement facing imitating stone, patented in 1937 and applied to many rowhouses; John Waters called it the polyester of brick. Removing it to expose original brick can erase a working-class, mid-century Black and immigrant history, so the original surface is a choice about which past to keep.",
        },
        {
          prompt: "How does the alley house carry the segregation story?",
          answer: "Alley houses on narrow interior alleys were the cheapest housing in the city and disproportionately where the poorest residents, including many Black families, were pushed. A block could hold a hierarchy, and the overcrowding the city later measured and used to justify clearance was partly the alley houses it had allowed.",
        },
      ],
    },
    {
      slug: "bc-built-ground-rent",
      title: "6 · Ground rent: the lease under the house",
      section: "Section 2 · Built",
      body: `Here is the instrument hidden inside the rowhouse, and it is one of the reasons Baltimore is such a good city to learn on: a legal and financial arrangement written into the ground under a very large share of its houses.

**What ground rent is.** In Baltimore, thousands of homeowners own their house but not the land beneath it. The land is held on a **ground lease**, a 99-year lease renewable forever, and the homeowner pays an annual **ground rent** to whoever owns the ground (Maryland People's Law Library, n.d.). The system came to Maryland from English practice in the colonial period and was still being written into new rowhouse developments in the early twentieth century.

**Why it existed, in the developers' own terms.** Separating the land from the house **cut the purchase price**, because the buyer did not have to buy the lot outright. Developers presented ground rent as a way to keep homeownership affordable for working-class buyers, and it did put a great many families into houses. Estimates of the number of Baltimore properties carrying a ground rent have run as high as roughly 100,000 or more (*The Baltimore Sun*, 2006). **That scale is why this counts as a Built lesson: the tenure system is nearly as characteristic of the city as the marble steps.**

**Why it also became a hazard.** A ground rent is income to the ground owner and a lien on the homeowner. Historically, if the small annual rent went unpaid, the ground owner could begin a legal process, called **ejectment**, to take back the house, and a 2006 *Baltimore Sun* investigation documented cases where homeowners lost houses worth far more than the tiny debt (*The Baltimore Sun*, 2006). **Maryland reformed the system in 2007**, requiring ground rents to be registered and changing the remedy so that a missed ground rent could produce a lien but no longer a forfeiture of the home (Maryland People's Law Library, n.d.). Read that sequence carefully: **a tool sold as a path into ownership carried, for a century, a mechanism that could end ownership over a debt of a few dollars a year.**

**The point for this course.** Ground rent is not itself a racial instrument, and this lesson does not claim it was invented to segregate. **That restraint is the lesson.** What ground rent shows you is that **the ground under a Baltimore house already carries a stack of legal claims before anyone reaches Section 3**: a lease, a rent, a lien, a remedy. When the instruments of Section 3 arrive, the zoning line, the covenant, the mortgage grade, the highway taking, they do not act on empty land. They act on ground that is already a dense legal object. **A researcher who can read a ground lease can read the deed restrictions and the covenants in the next section, because they live in the same records.** The skill transfers directly.

## Sources
- Maryland People's Law Library. (n.d.). *Understanding ground rent in Maryland*. https://www.peoples-law.org/understanding-ground-rent-maryland
- *The Baltimore Sun*. (2006, December 10). *On shaky ground*. https://www.baltimoresun.com/business/real-estate/bal-groundrent1-12102006-story.html
- Hayward, M., & Belfoure, C. (2001). *The Baltimore rowhouse*. Princeton Architectural Press.`,
      recallContent: [
        {
          prompt: "What is a Baltimore ground rent?",
          answer: "An arrangement where the homeowner owns the house but not the land, which is held on a 99-year lease renewable forever, and pays an annual ground rent to the owner of the ground. It came from English colonial practice.",
        },
        {
          prompt: "Why did developers use ground rent, and how common is it?",
          answer: "Separating land from house cut the purchase price and was presented as a way to make homeownership affordable to working-class buyers. As many as roughly 100,000 or more Baltimore properties have carried a ground rent.",
        },
        {
          prompt: "Why did ground rent become a hazard, and what changed in 2007?",
          answer: "If the small annual rent went unpaid, the ground owner could use ejectment to take the whole house, and a 2006 Baltimore Sun investigation found homeowners losing houses over tiny debts. Maryland reformed the system in 2007 so a missed ground rent produces a lien but not a forfeiture.",
        },
        {
          prompt: "What is the point of teaching ground rent before Section 3, given it was not a racial instrument?",
          answer: "It shows that the ground under a Baltimore house already carries a stack of legal claims before segregation instruments arrive. The zoning line, covenant, mortgage grade and highway taking act on ground that is already a dense legal object, and the record-reading skill transfers.",
        },
      ],
    },
    {
      slug: "bc-built-what-encodes",
      title: "7 · What the built form encodes, and what a designation does",
      section: "Section 2 · Built",
      body: `Pull the two Built lessons together, then learn what protects a building and what does not, because Section 5 turns that into a live question.

**The block as a document.** By now you can read a Baltimore block as evidence. The **rowhouse** type tells you the city was built for working people at scale. The **alley house** behind the street tells you there was a hierarchy inside the district, and that the poorest, many of them Black, were given the least room. The **marble steps** tell you the residents refused to be read as their conditions. The **ground rent** tells you the land was a layered legal object before any segregation instrument touched it. **None of that needs a plaque. It is all readable on the street, which is exactly what beat 4 will ask you to do.**

**What survives, and why it is uneven.** As in Indianapolis, what stands today survived for particular reasons, and the reasons are the lesson. Some of Old West Baltimore is protected inside a **National Register historic district**; individual landmarks like the Arch Social Club still operate; and the Royal Theatre is a monument on a cleared site. **Survival on this ground correlates with organisation, ownership and timing, not with importance.** The Royal Theatre was one of the most important buildings on The Avenue and it is gone, because it was in the path of urban renewal and designation arrived too late. That pattern, that the most significant thing is often the thing that did not survive, is why beat 4 tells you to read absence as carefully as presence.

**Now the part everyone gets wrong: what a historic designation actually does.**

| Designation | Who lists it | What it does | What it does NOT do |
|---|---|---|---|
| **National Register of Historic Places** | The Keeper of the National Register, on a state nomination | Recognition; triggers federal review when there is federal money or a federal permit; opens some tax credits | **It does not stop a private owner from demolishing the building.** |
| **Local Baltimore City landmark or historic district** | The Commission for Historical and Architectural Preservation (CHAP), under city ordinance | This is the one that usually **regulates**: it reviews exterior changes and can require review before demolition | Only as strong as the ordinance and the commission enforcing it |

**The rule to carry out of Section 2:** federal listing is mostly recognition plus leverage when federal money is involved, and **local designation, in Baltimore that means CHAP, is where a demolition can actually be slowed or stopped.** That distinction is the same one Indiana Avenue taught, and it matters here because Section 5 asks you to find out, for a real Baltimore parcel, whether it sits inside a CHAP-regulated area at all.

**And the timing rule, which is the whole shape of this course.** The instruments in Section 3 did their work between 1910 and the 1970s. Most of the preservation protections came later. **Preservation law arrived after the clearance**, which is the ordinary pattern in American cities and the reason beat 3 is about instruments rather than about regret.

## Sources
- Baltimore City Commission for Historical and Architectural Preservation. (n.d.). *About CHAP and local designation*. https://chap.baltimorecity.gov/
- Maryland Historical Trust. (n.d.). *Old West Baltimore Historic District*. Maryland Inventory of Historic Properties. https://mht.maryland.gov/
- National Park Service. (n.d.). *National Register of Historic Places: Frequently asked questions*. https://www.nps.gov/subjects/nationalregister/faqs.htm`,
      recallContent: [
        {
          prompt: "Read a Baltimore block as a document. What do the rowhouse, the alley house, the marble steps and the ground rent each tell you?",
          answer: "The rowhouse: the city was built for working people at scale. The alley house: a hierarchy inside the district, with the poorest, many Black, given the least room. The marble steps: residents refused to be read as their conditions. The ground rent: the land was a layered legal object before any segregation instrument touched it.",
        },
        {
          prompt: "What does survival on this ground correlate with?",
          answer: "Organisation, ownership and timing, not importance. The Royal Theatre was one of the most important buildings on The Avenue and it is gone, because designation arrived too late.",
        },
        {
          prompt: "Does National Register listing stop a private owner from demolishing a building, and what does in Baltimore?",
          answer: "No. Federal listing is recognition plus review leverage when federal money or a permit is involved, plus some tax credits. Local designation by Baltimore's Commission for Historical and Architectural Preservation (CHAP) is what can slow or stop a demolition.",
        },
        {
          prompt: "State the timing rule that shapes the whole course.",
          answer: "The instruments did their work between 1910 and the 1970s, and most preservation protections came later. Preservation law arrived after the clearance, which is why beat 3 is about instruments rather than regret.",
        },
      ],
    },
    // <<< APPEND NEXT SECTION ABOVE THIS LINE >>>
  ],
};
