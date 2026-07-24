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
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 3 · Powers  (beat 3, the load-bearing section: who decided, under what statute,
    // on what record. Four instruments taken as one lineage, each VERIFIED rather than assumed.)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "bc-powers-zoning",
      title: "8 · The first instrument: racial zoning, and the chain of four",
      section: "Section 3 · Powers",
      body: `Beat 3 asks the question the whole course is built around: **who decided what happened to this ground, under what power, leaving what record?** Baltimore's answer begins with the instrument Section 1 promised you, and the first thing to do with a famous instrument is check whether the famous version is the true one. **It is not, and the way it is wrong is the lesson.**

**The headline.** In 1910 Baltimore passed what is **widely described as the first residential racial segregation ordinance in the United States** (Power, 1983). That sentence is true, and it is also a compression of a much messier seven-year fight, so hold the headline lightly until you have read the record under it.

**The trigger, which you already met.** The ordinance was a direct response to the McCulloh Street purchase in Section 1: a Black lawyer moved his Yale-educated law partner onto a white block, the white neighbours organised, and the City Council answered with a law. **The instrument was aimed at a Black professional buying a good house, not at anyone's poverty.**

**What the ordinance actually said.** The original measure, Ordinance No. 610, barred any Black resident from moving onto a block where most residents were white, and any white resident from moving onto a block where most residents were Black, and it reached churches and schools as well as homes (Power, 1983). It did not desegregate anything or create anything. **It froze the colour of a block as of the day it passed**, and made moving across that line a criminal act.

**Now the part the headline hides: it was not one law, it was four.** The ordinances of 1910 to 1913 are a **chain**, because the courts kept striking them and the Council kept redrafting (Power, 1983; Baltimore Heritage, n.d.).
1. **Ordinance No. 610, signed in December 1910.** Struck down as defectively drafted.
2. **A second ordinance, April 1911.** Also found badly drawn.
3. **A third ordinance, May 15, 1911**, retitled as a measure "for preserving peace, preventing conflict and ill feeling between the white and colored races."
4. **A fourth ordinance, in 1913**, redrafted after a court loss described below.

**A worked example of verifying, not assuming.** Popular retellings disagree about the exact date of the first ordinance and even about which mayor signed it, and at least one heritage source attributes the December 1910 signing to a mayor who did not take office until 1911. **When accounts disagree, you go to the scholarship that read the primary records.** Power's law-review reconstruction is that authority, and it credits the signing to **Mayor J. Barry Mahool**, a Progressive reformer remembered for backing women's suffrage and "social justice" (Power, 1983). **The man who signed the nation's first residential segregation law was a self-described reformer.** That irony is Power's whole point, and you only reach it by checking the record instead of the summary.

**Where the chain was broken, twice.** The instrument failed in court, and the two cases are worth naming because they are the record.
- **State v. Gurry (1913).** W. Ashbie Hawkins, the same lawyer whose house purchase triggered the ordinance, defended the Reverend John H. Gurry, whose congregation had taken a building on a block the police called white. The Maryland Court of Appeals voided the ordinance as applied, on the ground that it stripped an owner of **vested property rights** the person had held before the block was declared segregated (Power, 1983). The city's fourth ordinance was an attempt to answer exactly this defect.
- **Buchanan v. Warley (1917).** This one is not even a Baltimore case. The United States Supreme Court struck down **Louisville's** version, holding that a racial zoning ordinance violated the Fourteenth Amendment because it interfered with an owner's right to sell property (Buchanan v. Warley, 1917). **That decision ended the whole class of laws nationally**, and Baltimore's ordinances died with it, not by repeal but by becoming unenforceable.

**What to carry forward.** The zoning link is real, it is first, and it is Baltimore's. **And it was never one clean statute standing for decades.** It was four laws in three years, each struck, finally ended by a case from another state, all inside seven years. A course that told you "Baltimore, 1910, the first racial zoning law" and stopped would be accurate in the headline and false in the substance. **The next instrument exists precisely because this one kept breaking.**

## Sources
- Baltimore Heritage. (n.d.). *1885-1929: Segregation and the Fourteenth Amendment*. Baltimore's Civil Rights Heritage. https://baltimoreheritage.github.io/civil-rights-heritage/1885-1929/
- Buchanan v. Warley, 245 U.S. 60 (1917). https://supreme.justia.com/cases/federal/us/245/60/
- Maryland Center for History and Culture. (n.d.). *Baltimore's pursuit of fair housing: A brief history*. https://www.mdhistory.org/baltimores-pursuit-of-fair-housing-a-brief-history/
- Power, G. (1983). Apartheid Baltimore style: The residential segregation ordinances of 1910-1913. *Maryland Law Review, 42*(2), 289-329. https://digitalcommons.law.umaryland.edu/mlr/vol42/iss2/4/`,
      recallContent: [
        {
          prompt: "What is the headline claim about Baltimore's 1910 ordinance, and why must it be held lightly?",
          answer: "That it was the first residential racial segregation ordinance in the United States. It is true, but it compresses a seven-year fight into one date: the ordinance was actually a chain of four laws, each struck and redrafted, not one clean statute.",
        },
        {
          prompt: "What did the original Ordinance No. 610 actually do?",
          answer: "It barred a Black resident from moving onto a majority-white block and a white resident from moving onto a majority-Black block, reaching churches and schools too. It did not create anything; it froze each block's colour as of the day it passed and criminalised crossing that line.",
        },
        {
          prompt: "Who signed the first ordinance, and why is that a lesson in verifying?",
          answer: "Mayor J. Barry Mahool, a Progressive reformer who backed women's suffrage and social justice, per Power's reading of the primary records. Popular accounts disagree on the date and even the mayor, so you go to the scholarship that read the record rather than to the summary.",
        },
        {
          prompt: "How were the ordinances finally stopped?",
          answer: "State v. Gurry (1913) voided one as applied because it stripped owners of vested property rights, and Buchanan v. Warley (1917), a Louisville case, had the Supreme Court end racial zoning nationally under the Fourteenth Amendment. Baltimore's ordinances became unenforceable rather than being repealed.",
        },
      ],
    },
    {
      slug: "bc-powers-covenants",
      title: "9 · The second instrument: when the private contract took over",
      section: "Section 3 · Powers",
      body: `The first instrument kept breaking in court. **The second instrument was built to be unbreakable, because it was not a law at all.** It was a private contract written into the deed, and following how and when it appeared teaches you more about the chain than any single date.

**What a racial covenant is.** A **restrictive covenant** is a promise attached to the land itself: a clause in the deed under which the owner agrees that the property will never be sold to or occupied by members of a named group. Because it rides in the deed, it binds every future owner, and it lives in exactly the same land records as the ground rent you read in Section 2. **The skill transfers directly: if you can read a ground lease, you can read a covenant.**

**Baltimore's canonical example, and its careful timing.** The **Roland Park Company**, developer of the affluent north-side suburbs, is the case study. Its general manager **Edward H. Bouton** considered a racial deed restriction as early as **1893**, and the company's own attorneys advised against it, warning it was probably unconstitutional and that it would affect "a whole race of people, who are in Maryland numbered in the thousands" (*The Baltimore Sun*, 2015). **The company waited about twenty years.** When it opened its **Guilford** development in **1913**, it began writing the racial covenant into the deeds. Filed under a clause headed "Nuisances," the Guilford restriction provided that no part of the tract could be "occupied by any Negro or person of Negro extraction," with an exception carved out for Black domestic servants of white households (*The Baltimore Sun*, 2015; Maryland Center for History and Culture, n.d.). The company used the same device in Homeland and Original Northwood, and developers across the country copied it.

**Now test the tidy story, because this is where the sequence stops being tidy.** The clean version of this course says: first zoning, **then** covenants. Line up the dates and it does not hold.
- Guilford's covenant is **1913**, the same year as the fourth zoning ordinance, and **four years before** Buchanan v. Warley ended the ordinances in 1917.
- So the covenants did not wait for the zoning to be exhausted. **They ran in parallel.**
- And the reason they appeared when they did is the finding: the Roland Park Company reached for a private, permanent instrument **because the public one was proving fragile** in court. When the ordinance kept getting struck, the deed restriction offered the same result with no city council and no judge to lose in front of. **The lineage is one of purpose, not a clean baton pass in time.**

**Who this instrument aimed at, which rhymes with the last one.** The ordinance was triggered by a Black lawyer buying a good house. The covenant was written to keep Black families out of the **best new suburbs** in the region. **Both instruments were aimed at Black success**, at the family with the means to buy on a nice block or in a new development, not at anyone's poverty. That is a pattern worth naming every time you see it.

**How this instrument ended, and how it did not.** In **Shelley v. Kraemer (1948)**, the Supreme Court held that a court could not **enforce** a racial covenant, because using state power to do so would itself violate the Fourteenth Amendment (Shelley v. Kraemer, 1948). Read that holding precisely, because it is narrower than people remember: **the covenants were not erased.** They remained written in the deeds; courts simply could no longer be used to enforce them. Many Baltimore deeds still carry the dead language today, which is why Maryland later created a process for a homeowner to strike it. **An instrument can be disabled and still leave its fingerprints in the record**, and a researcher who knows that will go looking for the clause rather than assuming it was cleaned up.

## Sources
- Maryland Center for History and Culture. (n.d.). *Baltimore's pursuit of fair housing: A brief history*. https://www.mdhistory.org/baltimores-pursuit-of-fair-housing-a-brief-history/
- Shelley v. Kraemer, 334 U.S. 1 (1948). https://supreme.justia.com/cases/federal/us/334/1/
- *The Baltimore Sun*. (2015, March 27). *1893 letter details racially restrictive covenants in city neighborhoods*. https://www.baltimoresun.com/2015/03/27/1893-letter-details-racially-restrictive-covenants-in-city-neighborhoods/`,
      recallContent: [
        {
          prompt: "What is a racial restrictive covenant, and why is it in the same records as ground rent?",
          answer: "A promise written into the deed that the property will never be sold to or occupied by a named group; because it rides in the deed it binds every later owner. It lives in the land records, the same place as the ground lease, so the record-reading skill from Section 2 transfers directly.",
        },
        {
          prompt: "What did the Roland Park Company do in 1893 versus 1913, and why does the timing matter?",
          answer: "In 1893 its attorneys advised against a racial covenant as probably unconstitutional. About twenty years later, when Guilford opened in 1913, it began writing the covenant into deeds. The 1913 date is the same year as the fourth zoning ordinance and four years before Buchanan, so covenants ran parallel to zoning, not after it.",
        },
        {
          prompt: "Why did the private covenant appear when the zoning ordinance was still in force?",
          answer: "Because the public instrument was fragile: the ordinance kept being struck in court. A deed restriction gave the same result permanently, with no council vote or judge to lose in front of. The chain is a lineage of purpose, not a clean sequence in time.",
        },
        {
          prompt: "What exactly did Shelley v. Kraemer (1948) do to covenants, and what did it not do?",
          answer: "It held that courts could not enforce racial covenants, because state enforcement would violate the Fourteenth Amendment. It did not erase them: the language stayed in the deeds and simply became unenforceable, which is why many Baltimore deeds still carry the dead clause.",
        },
      ],
    },
    {
      slug: "bc-powers-redlining",
      title: "10 · The third instrument: the map, the manual, and the disputed link",
      section: "Section 3 · Powers",
      body: `The third instrument is the one everybody has heard of and the one this course is most careful about, because **the popular story is stronger than the evidence for it, and the honest version is more useful anyway.**

**The famous object.** In **1937** the federal **Home Owners' Loan Corporation (HOLC)** produced a "Residential Security Map" of Baltimore, grading neighbourhoods from **A (green, "best")** through **B (blue)** and **C (yellow)** down to **D (red, "hazardous")** (Nelson et al., n.d.). Baltimore is a canonical map city: the covenant suburbs of the last lesson, Roland Park, Guilford and Homeland, are green and blue, and the confined neighbourhoods of Old West Baltimore are yellow and red. The written "area descriptions" behind the colours name race directly, treating the presence of Black residents as a lending hazard (Nelson et al., n.d.). **This is why the map is such powerful teaching evidence: the government wrote its mindset down and coloured it in.**

**Now the disputed part, which most retellings skip.** The tidy claim is: **the HOLC map redlined Baltimore and caused its decline.** Scholars who read the lending records dispute the direct causal step (Hillier, 2003). Three findings sit against the tidy story:
1. **The HOLC maps were largely confidential.** They were internal federal documents, not circulars handed to every corner bank, so a simple "lenders used this map to deny loans" story is hard to support (Hillier, 2003).
2. **HOLC's own lending went into red areas.** The agency that drew the red actually made refinancing loans inside it, which is not what a pure redlining account predicts (Hillier, 2003).
3. **The private-market damage is better traced to a different federal body**, the Federal Housing Administration, discussed below.

**But do not overcorrect into "the map did nothing."** Later quantitative work comparing the graded boundaries finds they carried **some independent, long-run effect** on segregation and disinvestment, even after accounting for what neighbourhoods were like beforehand (Aaronson et al., 2021). **So the map is real evidence with real downstream correlation.** What it is not is a proven single cause. Teach it as the clearest surviving picture of official attitude, and as a boundary that mattered, without claiming it single-handedly emptied West Baltimore.

**The instrument whose own words settle the question: the FHA manual.** If the HOLC map is a picture, the **Federal Housing Administration Underwriting Manual** is a confession, and it is the better-documented instrument because it tells you in federal print exactly what it required. The FHA insured a huge share of the private mortgage market, so its rules shaped where capital flowed nationwide. Its 1938 manual states plainly:
- "If a neighborhood is to retain stability, it is necessary that properties shall continue to be occupied by the same social and racial classes" (Federal Housing Administration, 1938, section 937).
- It lists among the "adverse influences" a valuator must guard against the "infiltration of business and industrial uses, lower class occupancy, and inharmonious racial groups" (Federal Housing Administration, 1938, section 937).
- And it recommends that deed restrictions include "prohibition of the occupancy of properties except by the race for which they are intended" (Federal Housing Administration, 1938, section 980).

**Read that last line against the last lesson.** The federal government's underwriting manual **recommended the very racial covenants** the Roland Park Company was writing. The instruments are not four separate stories; here the federal instrument endorses the private one in writing. **That is a documented link, not an inferred one**, which is exactly why this course leans on the manual's words rather than on the map's popular reputation.

**The method, stated once so it outlasts the facts.** When you have a vivid instrument whose causal role is disputed (the map) and a duller instrument whose words are undisputed (the manual), **build your argument on the words.** A picture persuades; a quotation proves. **Prefer the instrument you can quote.**

## Sources
- Aaronson, D., Hartley, D., & Mazumder, B. (2021). The effects of the 1930s HOLC "redlining" maps. *American Economic Journal: Economic Policy, 13*(4), 355-392. https://www.aeaweb.org/articles?id=10.1257/pol.20190414
- Federal Housing Administration. (1938). *Underwriting manual: Underwriting and valuation procedure under Title II of the National Housing Act*. U.S. Government Printing Office.
- Hillier, A. E. (2003). Redlining and the Home Owners' Loan Corporation. *Journal of Urban History, 29*(4), 394-420. https://doi.org/10.1177/0096144203029004002
- Nelson, R. K., Winling, L., Marciano, R., Connolly, N. D. B., et al. (n.d.). *Mapping inequality: Redlining in New Deal America*. Digital Scholarship Lab, University of Richmond. https://dsl.richmond.edu/panorama/redlining/
- Rothstein, R. (2017). *The color of law: A forgotten history of how our government segregated America*. Liveright.`,
      recallContent: [
        {
          prompt: "What was the 1937 HOLC map of Baltimore, and why is it strong teaching evidence?",
          answer: "A federal Residential Security Map grading neighbourhoods A (green) to D (red), with the covenant suburbs green and blue and Old West Baltimore yellow and red. Its written area descriptions name race as a lending hazard, so it is the government's own mindset written down and coloured in.",
        },
        {
          prompt: "Why do scholars dispute the tidy claim that the HOLC map caused Baltimore's decline?",
          answer: "Because the maps were largely confidential internal documents rather than circulars to lenders, and HOLC's own lending went into red areas. Later work does find the boundaries carried some independent long-run effect, so the map is real evidence with real correlation, but not a proven single cause.",
        },
        {
          prompt: "Why does this course lean on the FHA Underwriting Manual rather than the map?",
          answer: "Because the manual is a documented federal instrument whose own words are undisputed. It required properties to stay occupied by the same racial classes, listed inharmonious racial groups as an adverse influence, and recommended deed restrictions prohibiting occupancy except by the intended race, endorsing the private covenants in writing.",
        },
        {
          prompt: "State the method lesson about a disputed instrument versus a documented one.",
          answer: "When a vivid instrument's causal role is disputed and a duller instrument's words are undisputed, build the argument on the words. A picture persuades; a quotation proves. Prefer the instrument you can quote.",
        },
      ],
    },
    {
      slug: "bc-powers-highway",
      title: "11 · The fourth instrument: the highway that was left unfinished",
      section: "Section 3 · Powers",
      body: `The fourth instrument is the one you can still stand in, and it is why Baltimore is the best single city for this course. **The zoning was struck by courts. The covenants were disabled by Shelley. The highway was actually built, and then abandoned halfway, so it is the one link in the chain that is still physically open.**

**What was built.** In the late 1960s and early 1970s the city cut a **1.4-mile** sunken expressway, the **Franklin-Mulberry** section of **US 40**, through West Baltimore, in the neighbourhoods around **Rosemont, Harlem Park and Franklin Square** (Congress for the New Urbanism, n.d.; Baltimore City Department of Transportation, 2022). It was meant to be one leg of a downtown expressway system linking Interstate 70 to the harbour. **That system was never finished.** Organised community and environmental opposition stopped the larger plan, and the leg that was built simply ends, carrying local traffic into a trench and back out. The nickname is the finding: the **"Highway to Nowhere."**

**The human cost, with its owner and its uncertainty attached.** The commonly reported demolition and displacement figures for the corridor are **about 971 homes, 62 businesses, and one school**, with roughly **1,500 residents** displaced (Baltimore City Department of Transportation, 2022; Congress for the New Urbanism, n.d.). **Handle these numbers the way Section 1 handled the Green Book listings: give them their owner and do not smooth them.** Two honest cautions:
- **The block count varies by source.** Some accounts describe roughly **twenty** demolished blocks; others count about **fourteen** contiguous blocks. The difference is not an error to resolve by averaging; it is what happens when different tellings count the demolition footprint versus the built corridor length. **Report the range and its cause.**
- **These are demolition and displacement counts, not a survey of everything the corridor was.** They tell you how much was cleared. They do not tell you what was lost in a fuller sense, and no such census has been read into this course.

**Why this instrument is different from the other three.** The ordinance and the covenants were tools that aimed at Black neighbourhoods and, in law, failed: struck down and disabled. The highway is the tool that **succeeded at the clearance and then failed at its own stated purpose.** It displaced 1,500 people to build a road that was supposed to carry traffic downtown, and it never carried that traffic, because the rest of the road was never built. **A cleared neighbourhood and no working highway to show for it** is a specific kind of harm, and it is the reason the trench reads today as an unusually legible absence. You will look straight at it in Section 4.

**The instrument's authors, so you can name them.** A highway is not a natural feature. Its route was chosen by transportation officials and adopted through a planning and right-of-way process, and that process left records: alignment studies, right-of-way maps, condemnation filings. **When you can name the body that chose the line, the highway stops being a disaster that happened and becomes a decision that somebody made**, which is the whole posture of beat 3. Those right-of-way maps are public, and they are on the list of sources this course has not yet fully read.

**Why the chain ends here, and why beat 5 begins here.** Four instruments, one city, one purpose, and the last of them is still an open trench with an active plan being written for it right now. **That is the rare gift of Baltimore: the final link is not a monument or a memory, it is a hole in the ground with a live civic proceeding attached.** Section 5 sends you into that proceeding.

## Sources
- Baltimore City Department of Transportation. (2022, October 21). *Giving back what was taken: The West Baltimore United Project seeks to heal 50 years of infrastructure damage*. https://transportation.baltimorecity.gov/news/press-releases/2022-10-21-giving-back-what-was-taken-west-baltimore-united-project-seeks-heal
- Congress for the New Urbanism. (n.d.). *Baltimore: US 40 Expressway*. Highways to Boulevards. https://www.cnu.org/highways-boulevards/campaign-cities/baltimore-us-40
- Rothstein, R. (2017). *The color of law: A forgotten history of how our government segregated America*. Liveright.`,
      recallContent: [
        {
          prompt: "What is the Highway to Nowhere, and why was it left unfinished?",
          answer: "A 1.4-mile sunken section of US 40 (Franklin-Mulberry) cut through West Baltimore around Rosemont, Harlem Park and Franklin Square in the late 1960s and early 1970s. It was meant to link Interstate 70 to the harbour, but community and environmental opposition stopped the larger system, so the built leg just ends in a trench.",
        },
        {
          prompt: "What are the reported displacement figures, and how should you handle them?",
          answer: "About 971 homes, 62 businesses and one school demolished, and roughly 1,500 residents displaced. Give them their owner, note that the block count varies (about fourteen contiguous blocks versus about twenty demolished) because sources count different things, and remember they are demolition counts, not a full survey of what was lost.",
        },
        {
          prompt: "How is the highway instrument different from the zoning and covenant instruments?",
          answer: "The ordinance and covenants aimed at Black neighbourhoods and then failed in law, struck down and disabled. The highway succeeded at the clearance and then failed at its own purpose: it displaced 1,500 people for a road that never carried the downtown traffic, because the rest of it was never built.",
        },
        {
          prompt: "What turns the highway from a disaster that happened into a decision someone made?",
          answer: "Naming the body that chose the route. The alignment was selected by transportation officials through a planning and right-of-way process that left alignment studies, right-of-way maps and condemnation filings, which are public records this course has not yet fully read.",
        },
      ],
    },
    {
      slug: "bc-powers-test-the-chain",
      title: "12 · Testing the chain against the chronology",
      section: "Section 3 · Powers",
      body: `Here is the argument this whole course rests on, stated at its strongest. **This lesson tests it, because the thing you are proudest of is the thing you should test hardest.**

**The argument, as proposed.** Baltimore lets you see one clean sequence without leaving town: racial zoning first, **then** restrictive covenants, **then** redlining, **then** the highway, each instrument handing off to the next like a baton, all aimed at one end. If it holds, a learner can walk four blocks and watch a fifty-year machine run in order.

**The test is a chronology, and it is the cheapest test there is.** Line the dates up and ask whether the story survives them.

| Date | Event | Instrument |
|---|---|---|
| December 1910 | Ordinance No. 610 signed by Mayor Mahool | Zoning |
| April 1911 | Second ordinance (first redraft) | Zoning |
| May 1911 | Third ordinance | Zoning |
| 1913 | Roland Park Company writes the racial covenant as Guilford opens | Covenant |
| June 1913 | State v. Gurry voids the ordinance on vested-property grounds | Zoning struck |
| 1913 | Fourth ordinance, redrafted to answer Gurry | Zoning |
| 1917 | Buchanan v. Warley ends racial zoning nationally | Zoning struck |
| 1934, 1938 | FHA created; Underwriting Manual codifies racial underwriting | Redlining |
| 1937 | HOLC Residential Security Map of Baltimore | Redlining |
| 1948 | Shelley v. Kraemer makes covenants unenforceable | Covenant disabled |
| late 1960s to mid 1970s | Highway to Nowhere built through West Baltimore | Highway |

**The verdict, stated plainly. The chain holds as a lineage of purpose and fails as a clean baton pass in time, and this course reports the failure as a result rather than hiding it.**

**Where the argument holds, and needs no softening.** These were **successive tools aimed at one end**, every one traceable to a named body, a date and a document, and every one present in a single city. Zoning gave way to a private contract when the courts closed it. Federal underwriting and a graded map governed where mortgage capital went. A highway cleared what remained. **That much is the record, and it is a real and defensible claim.** Baltimore genuinely does hold the whole toolkit inside its own limits, which no other city in this series does as completely.

**Where the argument fails, and this is the interesting part.**
1. **Zoning and covenants overlap; they do not sequence.** Guilford's covenant is **1913**, contemporaneous with the ordinances and four years before Buchanan. The covenant did not wait for zoning to be spent. It appeared **because** zoning was failing in court. "First zoning, then covenants" is wrong on the dates.
2. **The redlining link is causally disputed.** The map is evidence of the mindset and the FHA manual is the documented instrument, but "the red map caused the decline" is contested, and this course refuses to assert it. **A disputed link stated as a fact would poison the whole chain.**
3. **There is no single hand.** A city council, a private development company, a federal corporation, the FHA, and a state highway department each used a different power across sixty years. Calling it "the chain" is a useful shorthand for a shared purpose, but it must not smuggle in a single planner who does not exist in the record. **The purpose was shared. The authorship was plural.**

**Three lessons about method, which outlast every fact in this course.**
1. **Build the chronology before you build the argument.** A table of dates costs an hour and it caught the overlap that the tidy story hides.
2. **A weakened claim that survives is worth more than a strong claim that does not.** "Four instruments, one purpose, one city" survives the dates. "A clean four-step sequence run by one hand" does not.
3. **Report the weakening.** You tested the course's own thesis and part of it did not hold. **That is a finding, and it belongs in the course**, because a chain you can check is worth more than a story you cannot.

**What is still open, and would settle it.** The Baltimore City Council's ordinance files and the mayor's papers for 1910 to 1913; the Roland Park Company's corporate records and its full covenant geography; the HOLC area-description sheets for Baltimore, digitized in Mapping Inequality but not read line by line here; and the Maryland State Roads Commission right-of-way maps for the Franklin-Mulberry corridor. **None of those has been fully read into this course.** They are public or requestable, and they are the next real work on this question.

## Sources
- Aaronson, D., Hartley, D., & Mazumder, B. (2021). The effects of the 1930s HOLC "redlining" maps. *American Economic Journal: Economic Policy, 13*(4), 355-392. https://www.aeaweb.org/articles?id=10.1257/pol.20190414
- Hillier, A. E. (2003). Redlining and the Home Owners' Loan Corporation. *Journal of Urban History, 29*(4), 394-420. https://doi.org/10.1177/0096144203029004002
- Nelson, R. K., Winling, L., Marciano, R., Connolly, N. D. B., et al. (n.d.). *Mapping inequality: Redlining in New Deal America*. Digital Scholarship Lab, University of Richmond. https://dsl.richmond.edu/panorama/redlining/
- Power, G. (1983). Apartheid Baltimore style: The residential segregation ordinances of 1910-1913. *Maryland Law Review, 42*(2), 289-329. https://digitalcommons.law.umaryland.edu/mlr/vol42/iss2/4/
- *The Baltimore Sun*. (2015, March 27). *1893 letter details racially restrictive covenants in city neighborhoods*. https://www.baltimoresun.com/2015/03/27/1893-letter-details-racially-restrictive-covenants-in-city-neighborhoods/`,
      recallContent: [
        {
          prompt: "State the argument this course rests on, and the one-line verdict of the chronology test.",
          answer: "That Baltimore shows one clean sequence, zoning then covenants then redlining then the highway, each handing off to the next toward one end. Verdict: the chain holds as a lineage of purpose and fails as a clean baton pass in time.",
        },
        {
          prompt: "Give the strongest way the chain fails the chronology test.",
          answer: "Zoning and covenants overlap rather than sequence. Guilford's covenant is 1913, contemporaneous with the ordinances and four years before Buchanan, and it appeared because the zoning was failing in court, not after it was spent. 'First zoning, then covenants' is wrong on the dates.",
        },
        {
          prompt: "Why does the course refuse to say 'the red map caused the decline' or 'one hand ran the chain'?",
          answer: "Because the redlining causal link is disputed, and stating a disputed link as fact would poison the chain. And because a council, a private company, a federal corporation, the FHA and a state highway department each used a different power over sixty years: the purpose was shared, but the authorship was plural.",
        },
        {
          prompt: "Name the three method lessons from testing the chain.",
          answer: "Build the chronology before the argument; a weakened claim that survives beats a strong claim that does not; and report the weakening, because a chain you can check is worth more than a story you cannot.",
        },
      ],
    },
    {
      slug: "bc-quiz-powers",
      title: "13 · Quiz: the four instruments",
      section: "Section 3 · Powers",
      quiz: {
        passingScore: 70,
        // 15-question bank served 8 at a time with shuffled options, so a retake is a different quiz.
        questionsPerAttempt: 8,
        shuffleOptions: true,
        questions: [
          {
            prompt: "The claim that Baltimore's 1910 ordinance was 'the first residential racial segregation law in the US' is best described as:",
            options: [
              "A myth with no basis",
              "A claim about a single statute that stood for decades",
              "True, but a compression of a chain of four ordinances passed and struck between 1910 and 1913",
              "A claim invented by later historians",
            ],
            correctIndex: 2,
            explanation: "The headline is accurate but hides a seven-year fight: four laws in three years, each struck and redrafted, ended by a case from another state.",
            sourceLessonSlug: "bc-powers-zoning",
          },
          {
            prompt: "Who signed the original December 1910 ordinance, according to the scholarship that read the primary records?",
            options: [
              "Mayor J. Barry Mahool, a Progressive reformer",
              "A mayor who did not take office until 1911",
              "The Roland Park Company",
              "The Home Owners' Loan Corporation",
            ],
            correctIndex: 0,
            explanation: "Power credits the signing to Mahool, remembered for backing women's suffrage and social justice. Popular accounts disagree on date and mayor, which is why you go to the record.",
            sourceLessonSlug: "bc-powers-zoning",
          },
          {
            prompt: "How did the racial zoning ordinances finally end?",
            options: [
              "Baltimore's City Council repealed them",
              "A referendum overturned them",
              "They were never enforced in the first place",
              "Buchanan v. Warley (1917), a Louisville case, had the Supreme Court end racial zoning nationally, and Baltimore's died with it",
            ],
            correctIndex: 3,
            explanation: "State v. Gurry (1913) voided one on vested-property grounds; Buchanan ended the whole class under the Fourteenth Amendment, so Baltimore's became unenforceable rather than repealed.",
            sourceLessonSlug: "bc-powers-zoning",
          },
          {
            prompt: "A racial restrictive covenant differs from a zoning ordinance because it is:",
            options: [
              "A federal law",
              "A private promise written into the deed that binds every future owner",
              "A tax on the property",
              "A map grading the neighbourhood",
            ],
            correctIndex: 1,
            explanation: "It rides in the deed, so it lives in the same land records as the ground rent from Section 2, and the record-reading skill transfers.",
            sourceLessonSlug: "bc-powers-covenants",
          },
          {
            prompt: "Why does the 1913 date of the Guilford covenant matter to the chain argument?",
            options: [
              "It is the same year as the fourth zoning ordinance and four years before Buchanan, so covenants ran parallel to zoning rather than after it",
              "It proves covenants came long after zoning ended",
              "It shows the covenant was illegal",
              "It has nothing to do with the ordinances",
            ],
            correctIndex: 0,
            explanation: "The Roland Park Company reached for a permanent private instrument because the public one was failing in court. The lineage is one of purpose, not a clean sequence in time.",
            sourceLessonSlug: "bc-powers-covenants",
          },
          {
            prompt: "What did Shelley v. Kraemer (1948) actually do to racial covenants?",
            options: [
              "It erased the covenant language from all deeds",
              "It made writing new covenants a crime",
              "It held that courts could not enforce them, while the dead language stayed in the deeds",
              "It upheld them as constitutional",
            ],
            correctIndex: 2,
            explanation: "State enforcement would violate the Fourteenth Amendment, so covenants became unenforceable but not erased. Many Baltimore deeds still carry the clause, which is why researchers go looking for it.",
            sourceLessonSlug: "bc-powers-covenants",
          },
          {
            prompt: "The 1937 HOLC 'Residential Security Map' of Baltimore is best taught as:",
            options: [
              "The single proven cause of West Baltimore's decline",
              "The clearest surviving picture of official attitude and a boundary that mattered, but not a proven sole cause",
              "A private real estate advertisement",
              "A map with no racial content",
            ],
            correctIndex: 1,
            explanation: "Its area descriptions name race as a hazard, and later work finds the boundaries had some independent effect, but the direct causal story is disputed.",
            sourceLessonSlug: "bc-powers-redlining",
          },
          {
            prompt: "Which findings make scholars dispute the tidy 'the HOLC map redlined Baltimore' story?",
            options: [
              "The map was never actually drawn",
              "The map only covered white neighbourhoods",
              "Baltimore had no HOLC map at all",
              "The maps were largely confidential, and HOLC's own lending went into red areas",
            ],
            correctIndex: 3,
            explanation: "A simple 'lenders used this map to deny loans' account is hard to support when the maps were internal and the agency lent inside the red. The FHA is the better-documented private-market instrument.",
            sourceLessonSlug: "bc-powers-redlining",
          },
          {
            prompt: "Why does this course lean on the FHA Underwriting Manual rather than the HOLC map?",
            options: [
              "Because the manual's own words are undisputed: it required racial stability and recommended deed restrictions prohibiting occupancy except by the intended race",
              "Because the manual is more colourful",
              "Because the map does not exist",
              "Because the FHA had no influence on lending",
            ],
            correctIndex: 0,
            explanation: "The manual endorsed the private covenants in writing. A picture persuades; a quotation proves. Prefer the instrument you can quote.",
            sourceLessonSlug: "bc-powers-redlining",
          },
          {
            prompt: "The Highway to Nowhere is the 'unusually legible absence' of this course because it:",
            options: [
              "Was never built at all",
              "Is a fully working interstate today",
              "Was built and then abandoned halfway, so it is the one link in the chain still physically open",
              "Was demolished after completion",
            ],
            correctIndex: 2,
            explanation: "The zoning was struck and the covenants disabled, but the highway trench is still there, an open cut with a live civic proceeding attached.",
            sourceLessonSlug: "bc-powers-highway",
          },
          {
            prompt: "How should the highway's displacement figures be handled?",
            options: [
              "Averaged into a single round number",
              "Given their owner, with the varying block count reported rather than smoothed, and understood as demolition counts not a full survey",
              "Presented as a corridor-level census of everything lost",
              "Dropped, because they are unknowable",
            ],
            correctIndex: 1,
            explanation: "About 971 homes, 62 businesses, one school and roughly 1,500 residents. The block count runs from about fourteen to about twenty because sources count different things.",
            sourceLessonSlug: "bc-powers-highway",
          },
          {
            prompt: "What makes the highway a decision rather than a disaster that simply happened?",
            options: [
              "Nothing; highways are natural features",
              "It appeared overnight with no planning",
              "The weather determined its route",
              "Its route was chosen by transportation officials through a process that left alignment studies, right-of-way maps and condemnation filings",
            ],
            correctIndex: 3,
            explanation: "Naming the body that chose the line is the whole posture of beat 3, and those right-of-way maps are public records this course has not yet fully read.",
            sourceLessonSlug: "bc-powers-highway",
          },
          {
            prompt: "The one-line verdict of testing the chain against the chronology is:",
            options: [
              "The chain holds as a lineage of purpose and fails as a clean baton pass in time",
              "The chain is entirely false",
              "The chain is a flawless four-step sequence",
              "The chronology cannot be built",
            ],
            correctIndex: 0,
            explanation: "Successive tools aimed at one end in one city is defensible; a clean four-step sequence run by one hand is not.",
            sourceLessonSlug: "bc-powers-test-the-chain",
          },
          {
            prompt: "Why does the course insist there was no single hand behind the chain?",
            options: [
              "Because the instruments were imaginary",
              "Because only one body was ever involved",
              "Because a city council, a private company, a federal corporation, the FHA and a state highway department each used a different power across sixty years",
              "Because nobody made any decisions",
            ],
            correctIndex: 2,
            explanation: "The purpose was shared, but the authorship was plural. 'The chain' must not smuggle in a single planner the record does not show.",
            sourceLessonSlug: "bc-powers-test-the-chain",
          },
          {
            prompt: "The method lesson 'a weakened claim that survives beats a strong claim that does not' means, here:",
            options: [
              "Always make the boldest possible claim",
              "'Four instruments, one purpose, one city' survives the dates, while 'a clean sequence run by one hand' does not, so you keep the first",
              "Never test your own thesis",
              "Suppress any finding that weakens your argument",
            ],
            correctIndex: 1,
            explanation: "Report the weakening rather than hiding it. A chain you can check is worth more than a story you cannot.",
            sourceLessonSlug: "bc-powers-test-the-chain",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 4 · Now  (beat 4: observation and evidence)
    //
    // The 360 tour of the Franklin-Mulberry trench has not been captured yet, and a Wanderlearn
    // embed URL is authoritative external data that must never be guessed
    // (plans/future/04-wanderlearn-360-boundary.md). So this lesson ships as `virtual_tour` with NO
    // contentUrl: the player renders the "no media yet" notice above the body, and the body is the
    // observation brief the learner uses when the tour lands. Drop the URL in and re-seed.
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "bc-now-tour",
      title: "14 · Now: stand in the trench (360 tour, forthcoming)",
      section: "Section 4 · Now",
      lessonType: "virtual_tour",
      body: `**The 360 tour for this lesson is forthcoming.** It is not here yet, and the notice above this text is telling you the truth rather than reporting a fault. This course was written before the tour was captured, on purpose: the site template treats beat 4 as a drop-in, so the course is complete and teachable without it, and the tour is added later without restructuring anything.

**Read this lesson now anyway.** It is your observation brief. Beat 4 asks one question, "what is actually there today", and the difference between a tourist looking at a street and a researcher looking at a street is entirely a matter of knowing what to look for before you arrive. The subject of this tour is unusual, and it is the reason Baltimore closes this series: **the fourth instrument in this city is not a monument or a cleared lot, it is an open trench you can stand beside.** The Franklin-Mulberry section of US 40, the "Highway to Nowhere," is a 1.4-mile sunken road that was built and then abandoned, and an abandoned public work is the most legible absence in the whole chain.

## What to look for, in order

**1. Look down into the trench first.** The road is a sunken expressway, roughly 300 feet across, carrying six lanes that mostly end where the never-built downtown system was supposed to begin (WYPR, 2023). **Ask the beat-3 question of it: who chose this line, and where does it stop?** A road that stops is right-of-way, and right-of-way is on a map you can request.

**2. Read the two walls of the cut as an edge.** On each side of the trench the city resumes as rowhouse blocks in Rosemont, Harlem Park and Franklin Square. **The trench is a seam, and a seam has two dates**: when the houses on each side were built, and when the ground between them was taken. You met both in Section 3.

**3. Count the rowhouses, and find the marble and the Formstone.** You can now read a Baltimore block as a document (Section 2). Look for the scrubbed marble stoops, the Formstone facing, and the narrow interior alleys behind the street. **Each is evidence about who was meant to live here and how much room they were given**, and none of it needs a plaque to start reading.

**4. Find where the corridor meets Pennsylvania Avenue.** Somewhere north of the trench the fabric changes toward The Avenue, with the Arch Social Club still operating and the Royal Theatre surviving only as a monument (Section 1). **A survivor and a monument are different kinds of evidence**, and knowing which one you are looking at is the single most useful thing you can carry.

**5. Look for what is being built right now.** Construction fencing, a public hearing sign, a rendering of a "cap" over the road, a leasing banner, a rail survey stake. **Every one of those is a live document with a case number**, and Section 5 teaches you how to look them up. Baltimore is the rare corridor where beat 4 and beat 5 overlap in the same field of view: the harm and its repair are being built on the same ground.

**6. Count the markers and plaques, and read who wrote them.** A historical marker is a public record with an author, a date and a sponsor. **A marker tells you what a community and an agency agreed to say in public, in a particular year.** Note the sponsor's name every time.

**7. Look at who is on the street.** This is a working district with residents, students, workers and visitors. **Describe them as they would describe themselves, or do not describe them.** A 360 tour is a photograph of strangers in a public place, and the ethics of writing about it are the ethics of writing about neighbours.

## What the tour cannot show you

- **It cannot show you a date.** Every change you notice happened at a time, and the tour has no clock. Beat 3 gave you the dates; beat 5 gives you the record.
- **It cannot show you an owner.** A building's occupant is not its owner, and neither is on the facade. The parcel record has it.
- **It cannot show you an intention.** An empty trench is not evidence about anyone's motives. It is evidence that a road was built and a road was stopped.
- **It cannot show you what stood here.** You cannot photograph 971 demolished homes. **Everything the trench does not contain is a question for Section 5, not an answer.**

**Write down your five most confident observations before the tour arrives, based on this brief and on the map that follows. Then check them.** Being wrong on the record about a place you had not yet seen is a better teacher than being right about one you had.

## Sources
- Baltimore City Department of Transportation. (2022, October 21). *Giving back what was taken: The West Baltimore United Project seeks to heal 50 years of infrastructure damage*. https://transportation.baltimorecity.gov/news/press-releases/2022-10-21-giving-back-what-was-taken-west-baltimore-united-project-seeks-heal
- Congress for the New Urbanism. (n.d.). *Baltimore: US 40 Expressway*. Highways to Boulevards. https://www.cnu.org/highways-boulevards/campaign-cities/baltimore-us-40
- WYPR. (2023, September 28). *Maryland releases three potential Red Line routes, each with rail and bus options*. https://www.wypr.org/the-baltimore-banner/2023-09-28/maryland-releases-three-potential-red-line-routes-each-with-rail-and-bus-options`,
    },
    {
      slug: "bc-now-map",
      title: "15 · Map: one trench, and the pattern it belongs to",
      section: "Section 4 · Now",
      body: `**Read this before you touch the map, because the map's limits are a lesson in themselves.**

**This platform's lesson map draws the whole world.** A marker is a fixed-size dot on a world projection, so two points need to be roughly two degrees apart, on the order of 200 kilometres, before they separate visually. **A 1.4-mile trench is far smaller than one dot**, and Annapolis, plotted below, sits so close to Baltimore that the two markers may merge. So this map cannot show you Franklin-Mulberry block by block, and pretending otherwise would be a worse lesson than admitting it.

**That limitation is the most useful thing on this page.** The right map for a Baltimore parcel question is not a world map. It is the state's **Real Property Data Search**, run by the Maryland State Department of Assessments and Taxation, where you enter an address, an owner name or an account number and read the parcel record (Maryland State Department of Assessments and Taxation, n.d.), and the **Baltimore City GIS** maintained by the Department of Planning, where you can see parcel boundaries and city layers (Baltimore City Department of Planning, n.d.-b). **Choosing the right scale of map for your question is a research skill**, and Section 5 puts you to work in those tools directly.

**So this map does the job it can do well.** It places the Highway to Nowhere in the national pattern it belongs to, and it marks the archives where the underlying records live.

**Blue: the Franklin-Mulberry Highway to Nowhere**, plotted at an approximate point on the West Baltimore corridor.

**Amber: four other American Black districts** cut by a highway. In cities across the country, highway construction displaced Black households and destroyed homes, churches, schools and businesses, and in some places a road was used deliberately as a barrier between white and Black neighbourhoods (Archer, 2020; Rothstein, 2017). **These four are here to stop you reading Baltimore as a local misfortune.** It is a local instance of a national method, and Baltimore's own case even carries the same two nicknames, "Black Wall Street" and "the Harlem of the South," that recur across these places.

**Green: two archives.** The Maryland State Archives in Annapolis holds land records, plats and state papers, the same class of record where the ground rents of Section 2 and the covenants of Section 3 physically live. The Digital Scholarship Lab at the University of Richmond hosts Mapping Inequality, where the 1937 HOLC "Residential Security Map" of Baltimore from Section 3 is digitized (Nelson et al., n.d.). **Knowing where a record physically lives is part of knowing that it exists.**

**Coordinates on this map are approximate points, not surveyed locations.** Do not use them to find an address. Use them to see the shape of the pattern, and use the state and city tools when you need a parcel.

**What this map cannot show, and neither could a world map of anything.** It cannot show absence. Every marker exists because something was recorded, and the four amber cities are the ones that have been written about, which is a fact about scholarship as well as about highways. **How many Black districts were cut by roads and never studied is a question this course cannot answer and will not guess at.**

## Sources
- Archer, D. N. (2020). "White men's roads through Black men's homes": Advancing racial equity through highway reconstruction. *Vanderbilt Law Review, 73*(5). https://scholarship.law.vanderbilt.edu/vlr/vol73/iss5/1/
- Baltimore City Department of Planning. (n.d.-b). *GIS and mapping*. https://planning.baltimorecity.gov/maps-data/gis
- Maryland State Department of Assessments and Taxation. (n.d.). *Real property data search*. https://sdat.dat.maryland.gov/RealProperty/
- Nelson, R. K., Winling, L., Marciano, R., Connolly, N. D. B., et al. (n.d.). *Mapping inequality: Redlining in New Deal America*. Digital Scholarship Lab, University of Richmond. https://dsl.richmond.edu/panorama/redlining/
- Rothstein, R. (2017). *The color of law: A forgotten history of how our government segregated America*. Liveright.`,
      mapContent: {
        markers: [
          {
            id: "bc-franklin-mulberry",
            lat: 39.293,
            lng: -76.645,
            title: "Highway to Nowhere (Franklin-Mulberry, US 40), West Baltimore",
            color: "#1d4ed8",
            description:
              "The subject of this course, plotted at an approximate point. A 1.4-mile sunken section of US 40 cut through Rosemont, Harlem Park and Franklin Square in the late 1960s and early 1970s and then abandoned when community and environmental opposition stopped the larger downtown expressway system. The commonly reported clearance is about 971 homes, 62 businesses and one school, with roughly 1,500 residents displaced (see lesson 11 for how to handle those figures and why the block count varies). It is the one link in Baltimore's chain that is still physically open, and it now has an active reconnection project attached, which Section 5 sends you into.",
          },
          {
            id: "bc-rondo",
            lat: 44.948,
            lng: -93.127,
            title: "Rondo, Saint Paul, Minnesota",
            color: "#b45309",
            description:
              "Interstate 94 was routed through Rondo, Saint Paul's Black centre. It is the most cited American case of a highway taking a Black neighbourhood, and the community's own reconnection campaign is active today. Same instrument as lesson 11, a different city.",
          },
          {
            id: "bc-overtown",
            lat: 25.788,
            lng: -80.198,
            title: "Overtown, Miami, Florida",
            color: "#b45309",
            description:
              "Interstate 95 was built through Overtown, the district known then as the Harlem of the South. Rothstein uses Overtown as a worked example of highway displacement at scale. Read its population figures the way lesson 11 taught you to read the 1,500 figure: with an owner, a date and a scope.",
          },
          {
            id: "bc-treme",
            lat: 29.97,
            lng: -90.07,
            title: "Tremé and Claiborne Avenue, New Orleans, Louisiana",
            color: "#b45309",
            description:
              "The Interstate 10 Claiborne Expressway was built over Claiborne Avenue, the Black commercial spine of Tremé, in the late 1960s. Claiborne is the standard example of a highway built on a business street, the closest structural parallel to a corridor built through a commercial district.",
          },
          {
            id: "bc-hayti",
            lat: 35.994,
            lng: -78.899,
            title: "Hayti, Durham, North Carolina",
            color: "#b45309",
            description:
              "The Durham Freeway (NC 147) was cut through Hayti, a self-sufficient Black district often called a Black Wall Street, in the late 1960s and early 1970s under urban renewal. It pairs the highway instrument of lesson 11 with the blight-and-clearance instrument you saw in the Indiana Avenue prerequisite.",
          },
          {
            id: "bc-md-archives",
            lat: 38.978,
            lng: -76.492,
            title: "Maryland State Archives, Annapolis, Maryland",
            color: "#15803d",
            description:
              "Just south of Baltimore, so close on a world map that it may merge with the blue marker. It holds land records, plats and state papers: the class of record where the ground leases of Section 2 and the racial covenants of Section 3 physically live, and where the ordinance files behind lesson 8 can be requested.",
          },
          {
            id: "bc-mapping-inequality",
            lat: 37.577,
            lng: -77.54,
            title: "Mapping Inequality, University of Richmond, Virginia",
            color: "#15803d",
            description:
              "The Digital Scholarship Lab hosts Mapping Inequality, where the 1937 HOLC Residential Security Map of Baltimore from lesson 10 is digitized with its area descriptions. It is where you can read, in the government's own words, the racial grading the popular redlining story compresses.",
          },
        ],
      },
    },
    // <<< APPEND NEXT SECTION ABOVE THIS LINE >>>
  ],
};
