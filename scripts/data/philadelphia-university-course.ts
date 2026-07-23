// Authored "Philadelphia: The University and the Block" - a cited, high-school-and-up SITE course
// on Learn.WitUS (Culture & History), and the second METRO-SPINE course after the Indianapolis
// pilot cluster (plans/37, plans/39, plans/41 3b). It runs the same six-beat site template one beat
// per section: Then, Built, Powers, Now, Next, Write.
//
// Prerequisites named in the prose:
//   * `green-book-how-to-read-a-route` teaches the METHOD (read a record, chain a route, research
//     an address forward, give a figure its owner).
//   * `indiana-avenue-a-district-and-what-replaced-it` established the INSTRUMENT this course
//     confirms at a second campus: a university assembling land through a redevelopment authority.
//
// THE ARGUMENT (plans/41 3b): the Black Bottom clearance in West Philadelphia for university
// expansion is Indiana Avenue's closest twin anywhere. Course 1's research found that on Indiana
// Avenue a university acquiring land through a redevelopment authority, not the highway, actually
// did the work. Philadelphia shows the same instrument at another campus, and with the highway
// absent it isolates the variable. The course draws the comparison EXPLICITLY and is PRECISE about
// what is parallel (university + surrogate nonprofit + a redevelopment authority using a 1945 state
// blight statute) and what is merely similar (a residential neighbourhood versus a commercial
// corridor; a multi-institution coalition versus a single-university shell; federal urban-renewal
// grants versus separate highway funds; a defense-research controversy Indianapolis did not have).
//
// Sourcing discipline (the load-bearing part of this file):
//   * Every teaching lesson carries APA 7 in-line citations and a `## Sources` bibliography.
//   * The displacement figures are NOT asserted from memory. They are read from the West
//     Philadelphia Collaborative History project (John L. Puckett, University of Pennsylvania
//     Graduate School of Education), the Penn University Archives Science Center exhibit, and the
//     Encyclopedia of Greater Philadelphia (Rutgers). The counts DISAGREE, and the course teaches
//     the disagreement rather than picking: 666 (Penn's official UCSC figure), 550 to 700 (a
//     re-examination of the RDA census), just over half of 2,653 (the Science Center plus its
//     affiliated high school), 2,653 (all of Unit 3), and "as high as 10,000" (the whole Black
//     Bottom over the whole renewal). Each figure is given its owner and its scope.
//   * The neighbourhood's name and boundaries are taught as CONTESTED: "Black Bottom" was the
//     residents' own term for a lived neighbourhood with remembered, fuzzy edges, while Unit 3 was
//     a precisely bounded legal redevelopment area. Those two boundaries are not the same thing.
//   * THE MOVE BOMBING OF 13 MAY 1985 is covered briefly and with maximum care, as a SEPARATE and
//     later municipal decision in a DIFFERENT West Philadelphia neighbourhood (Cobbs Creek), not as
//     part of the university-expansion story. Because survivors, neighbours and relatives are living
//     and children died, the lesson states the documented count, frames the tone as accountability,
//     and POINTS THE LEARNER TO THE OFFICIAL COMMISSION REPORT (Philadelphia Special Investigation
//     Commission, 6 March 1986) rather than paraphrasing the deaths loosely or naming victims from
//     second-hand lists.
//   * NO INVENTED STATISTIC, QUOTATION, CHARACTER, OR ADDRESS. Where a value is owned by an external
//     system (a parcel record, a plan), the course sends the learner to the authoritative tool
//     (Atlas, the Office of Property Assessment, the City Planning Commission) rather than asserting it.
//
// House rule: NO em-dashes or en-dashes in prose. Verbatim cited titles and page ranges inside a
// `## Sources` block are the only place a dash survives. Run `pnpm check:em-dashes` before commit.

import type { AuthoredCourse } from "./authored-course";

export const PHILADELPHIA_UNIVERSITY_COURSE: AuthoredCourse = {
  title: "Philadelphia: The University and the Block",
  description:
    "A cited, high-school-and-up site course on the Black Bottom in West Philadelphia: the working-class Black neighbourhood that was certified as blighted and cleared in the 1960s so that a consortium of universities led by the University of Pennsylvania could build the University City Science Center, the nation's first urban research park. This is the second metro-spine course after the Indianapolis pilot, and it exists to test one argument: that the Black Bottom is Indiana Avenue's closest twin anywhere, because the instrument that did the work at both campuses is the same, a university assembling land through a public redevelopment authority under a 1945 state blight statute. The prerequisite courses teach the method and the model: The Green Book: How to Read a Route teaches you to read a record and research an address forward, and Indiana Avenue: A District and What Replaced It found that a university plus a redevelopment authority, not the highway, cleared that corridor. This course draws the comparison explicitly and stays precise about what is parallel and what is merely similar. You will learn the certification instrument under Pennsylvania's Urban Redevelopment Law, eminent domain and federal urban-renewal financing, and the West Philadelphia Corporation as the university's land-assembly surrogate; you will handle, with care and by way of the official commission report, a second and very different West Philadelphia decision, the MOVE bombing of 1985; you will look up a real parcel in the city's own Atlas, find the live civics of Penn's payments to the schools, and write a piece of grounded nonfiction. A 360 tour of the corridor is planned and will be added to the Now section when it is captured.",
  lessons: [
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 1 · Then  (beat 1: US and state/local history)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "pa-then-black-bottom",
      title: "1 · The Black Bottom: what it was, and whose word that is",
      section: "Section 1 · Then",
      body: `**Start with the two courses behind this one.** This course assumes you have finished *The Green Book: How to Read a Route*, which taught a method: read a record down to its silences, chain a route, read a gap as evidence, research an address forward, and give every figure its owner. It also assumes *Indiana Avenue: A District and What Replaced It*, which took that method to one corridor and found something specific. **On Indiana Avenue the popular story blamed the interstate, but the record blamed a university assembling land through a redevelopment authority.** This course goes to a second campus to ask whether that instrument travels. It does, and West Philadelphia is where you can see it most clearly, because here there is no highway to argue about.

**The place.** The **Black Bottom** was a predominantly working-class and working-poor African American neighbourhood in West Philadelphia, a mix of homes and small commerce spread across the blocks north and south of Market Street west of the University of Pennsylvania (Puckett, n.d.-a). It is the ground under what is now called University City.

**Whose word "Black Bottom" is, and why that matters.** The name was the residents' own term for their neighbourhood, not a label a planner stamped on a map (Puckett, n.d.-a). That distinction is a research instruction. **A neighbourhood people name for themselves and a redevelopment area a government draws are two different objects**, and this course keeps them apart on purpose: Section 3 shows that the legal boundary was precise to the block, while the remembered Black Bottom had edges that former residents still describe differently from one another. When you read that "the Black Bottom was cleared," ask immediately: cleared as the residents drew it, or as the Redevelopment Authority certified it? They are not the same shape.

**Who lived there, from the census the clearance itself produced.** In the blocks the Science Center would take, a 1960 count found that **non-white households occupied 333 of 429 dwelling units, about 77.6 percent** (University of Pennsylvania University Archives, n.d.). Hold that number next to Indiana Avenue's, where 77 percent of residents were identified as Black by 1920 (Encyclopedia of Indianapolis, n.d.). **Two Black neighbourhoods, two cities, the same order of magnitude, forty years apart.** That is the first sign you are looking at a pattern rather than a coincidence.

**What the neighbourhood was to the people in it.** The community advocate Walter Palmer, who grew up there, described a place where residents felt safe enough to "walk on the street 2 o'clock, 3 o'clock in the morning" (Palmer, as quoted in Puckett, n.d.-a). Read that the way *Indiana Avenue* taught you to read a business list: not as nostalgia, but as evidence of a functioning social fabric. A place where people know each other well enough to be out at three in the morning is infrastructure for ordinary safety, and it does not show up on a survey form that measures plumbing and building age.

**One difference from Indiana Avenue, stated now so you do not blur it later.** Indiana Avenue was primarily a **commercial and cultural corridor**, a business street with Green Book listings and a jazz scene. The Black Bottom was primarily a **residential neighbourhood**. That difference changes what was lost and how it is counted: on the Avenue you count businesses and listings, and here you count households and renters. **The instrument is the twin. The thing it acted on is a cousin, not a twin**, and Section 3 will hold that line carefully.

**A warning about tone, which is a research instruction.** The people of the Black Bottom have living descendants who organise today as the Black Bottom Tribe and who are still asking the city for a marker (Bond, 2023). Do not write about this neighbourhood as a vanished golden age, and do not write about it as a slum that needed clearing. **Write what people built, name them where the record names them, and keep the vanishing for the parts you can document.** Every framing choice in this course is checkable against a source, and so should yours be.

## Sources
- Bond, M. (2023, June 8). *Black Bottom Tribe fights for a sign of their lost community in West Philly*. WHYY. https://whyy.org/articles/as-building-boom-continues-in-west-philly-black-bottom-tribe-fights-for-a-sign-of-the-community-they-lost/
- Encyclopedia of Indianapolis. (n.d.). *Indiana Avenue*. https://indyencyclopedia.org/indiana-avenue/
- Puckett, J. L. (n.d.-a). *The University City Science Center and the Black Bottom*. West Philadelphia Collaborative History, University of Pennsylvania Graduate School of Education. https://collaborativehistory.gse.upenn.edu/stories/university-city-science-center-and-black-bottom
- University of Pennsylvania University Archives. (n.d.). *History of the University City Science Center: Approval process, displacement, protests, and PR disaster, 1965-1971*. https://archives.upenn.edu/exhibits/penn-history/science-center/part-3/`,
      recallContent: [
        {
          prompt: "What was the Black Bottom, and where was it?",
          answer: "A predominantly working-class and working-poor African American neighbourhood in West Philadelphia, a mix of homes and small commerce north and south of Market Street west of the University of Pennsylvania. It is the ground under what is now University City.",
        },
        {
          prompt: "Why does it matter that 'Black Bottom' was the residents' own word?",
          answer: "Because a neighbourhood people name for themselves and a redevelopment area a government draws are two different objects with two different boundaries. The remembered Black Bottom had fuzzy edges; the legal Unit 3 was precise to the block. Keeping them apart is the research discipline.",
        },
        {
          prompt: "What did the 1960 census of the future Science Center blocks find, and what Indianapolis figure does it echo?",
          answer: "Non-white households occupied 333 of 429 dwelling units, about 77.6 percent. It echoes Indiana Avenue being about 77 percent Black by 1920: two Black neighbourhoods, same order of magnitude, forty years apart.",
        },
        {
          prompt: "What is the key difference between the Black Bottom and Indiana Avenue, and what does it change?",
          answer: "Indiana Avenue was primarily a commercial and cultural corridor; the Black Bottom was primarily a residential neighbourhood. It changes what was lost and how it is counted: businesses and listings on the Avenue, households and renters here. The instrument is the twin; the thing it acted on is a cousin.",
        },
      ],
    },
    {
      slug: "pa-then-reading-the-record",
      title: "2 · Reading the neighbourhood, and the disagreement in the numbers",
      section: "Section 1 · Then",
      body: `Now apply the method. You are going to read one neighbourhood out of the records its own clearance produced, and then notice that the records do not agree with each other. **The disagreement is not a problem to solve. It is the lesson.**

**Where the numbers come from.** Federal urban renewal required a survey. To take an area, the Redevelopment Authority had to document who and what was in it, so the clearest census of the Black Bottom is the one the Authority compiled in order to clear it (University of Pennsylvania University Archives, n.d.). That is a recurring irony of this kind of history: **the best record of a neighbourhood is often the paperwork of its removal**, which is exactly why *The Green Book* course told you to research an address forward through the documents of the people who acted on it.

**The one number almost everyone agrees on.** The redevelopment zone that took the neighbourhood was called **University Redevelopment Area Unit 3**, and **2,653 people are known to have been displaced from it, roughly 78 percent of them African American, for the most part renters** (Puckett, n.d.-b). That figure has an owner, a scope, and a source, which is the standard this course holds every figure to.

**Now watch the same event produce five different numbers, and learn to sort them.** Ask, of each, one question: **what exactly is being counted, and over what area?**

| Figure | Who gives it | What it counts |
|---|---|---|
| about 666 | The University of Pennsylvania, officially | People displaced by the **Science Center building itself** |
| 550 to 700 | A re-examination of the RDA census | The same Science-Center-only displacement, checked |
| just over half of 2,653 | Puckett, reading the RDA data | The **Science Center plus its affiliated University City High School** |
| 2,653 | The RDA record | Everyone displaced from **all of Unit 3** |
| "as high as 10,000" | An outer estimate in circulation | The **whole Black Bottom** across the whole renewal era |

(University of Pennsylvania University Archives, n.d.; Puckett, n.d.-a, n.d.-b.)

**Those numbers are not in conflict. They are answers to different questions.** 666 and 2,653 differ by a factor of four not because someone lied but because one counts a single project and the other counts an entire redevelopment area. **The 10,000 figure is the loosest**, an outer bound for the whole neighbourhood over a longer span, and it is the one to handle most carefully, exactly the way *Indiana Avenue* handled the "17,000 displaced" newspaper figure: attribute it, state its scope, and do not adopt it as if it were a survey. **This course does not pick a single "Black Bottom displacement number," because there is no single question that all five are answering.**

**A boundary is contested the same way a count is.** The Redevelopment Authority's Unit 3 had a legal boundary precise to the block, which Section 3 gives exactly. The residents' Black Bottom did not. As one community history puts it, the boundaries "were never fixed and different people have different memories," with the neighbourhood generally remembered as running west from around 32nd or 33rd Street (The Black Bottom, n.d.). **When you write about where the Black Bottom was, say whose boundary you mean**, the government's or the neighbourhood's, because a reader cannot tell which one you are using unless you tell them.

**What the record does not settle.** It does not tell you what every family thought, where each one went, or what the corner felt like on an ordinary evening. Palmer's memory of a safe street is one person's testimony, cited as testimony. **A displacement count is a fact about a document; a neighbourhood is a fact about people**, and the gap between those two things is the space every later section of this course works in.

## Sources
- Puckett, J. L. (n.d.-a). *The University City Science Center and the Black Bottom*. West Philadelphia Collaborative History, University of Pennsylvania Graduate School of Education. https://collaborativehistory.gse.upenn.edu/stories/university-city-science-center-and-black-bottom
- Puckett, J. L. (n.d.-b). *Collateral damage in Unit 3*. West Philadelphia Collaborative History, University of Pennsylvania Graduate School of Education. https://collaborativehistory.gse.upenn.edu/stories/collateral-damage-unit-3
- The Black Bottom. (n.d.). *History*. https://theblackbottom.wordpress.com/communities/blackbottom/history/
- University of Pennsylvania University Archives. (n.d.). *History of the University City Science Center: Approval process, displacement, protests, and PR disaster, 1965-1971*. https://archives.upenn.edu/exhibits/penn-history/science-center/part-3/`,
      recallContent: [
        {
          prompt: "Why is the clearest census of the Black Bottom the one the Redevelopment Authority made?",
          answer: "Because federal urban renewal required a survey before an area could be taken, so the best record of the neighbourhood is the paperwork of its removal. That is why the method course said to research an address forward through the documents of the people who acted on it.",
        },
        {
          prompt: "What is the one displacement figure with a clear owner and scope, and what does it cover?",
          answer: "2,653 people known to have been displaced from University Redevelopment Area Unit 3, roughly 78 percent African American and mostly renters.",
        },
        {
          prompt: "Why do the figures 666 and 2,653 differ by roughly a factor of four?",
          answer: "They answer different questions. About 666 is Penn's official count for the Science Center building alone; 2,653 is everyone displaced from all of Unit 3. They are not in conflict; they count different areas.",
        },
        {
          prompt: "How should you handle the 'as high as 10,000' figure?",
          answer: "As the loosest, an outer bound for the whole Black Bottom over the whole renewal era. Attribute it, state its scope, and do not adopt it as if it were a survey, the same way the Indiana Avenue course handled the 17,000 figure.",
        },
        {
          prompt: "When you say where the Black Bottom was, what must you specify?",
          answer: "Whose boundary you mean. The Redevelopment Authority's Unit 3 had a legal boundary precise to the block; the residents' remembered neighbourhood did not. A reader cannot tell which you are using unless you say.",
        },
      ],
    },
    {
      slug: "pa-quiz-then",
      title: "3 · Quiz: the neighbourhood",
      section: "Section 1 · Then",
      quiz: {
        passingScore: 70,
        // 15-question bank served 8 at a time with shuffled options, so a retake is a different
        // quiz rather than the same list (the repo standard, src/lib/quiz.ts).
        questionsPerAttempt: 8,
        shuffleOptions: true,
        questions: [
          {
            prompt: "The Black Bottom was, primarily:",
            options: [
              "A commercial and jazz corridor like Indiana Avenue",
              "A university-owned research park",
              "A working-class and working-poor African American residential neighbourhood in West Philadelphia",
              "A public housing project",
            ],
            correctIndex: 2,
            explanation: "It was a residential neighbourhood, a mix of homes and small commerce, which is the key difference from Indiana Avenue's business corridor.",
            sourceLessonSlug: "pa-then-black-bottom",
          },
          {
            prompt: "Why does the course insist 'Black Bottom' was the residents' own word?",
            options: [
              "Because a neighbourhood people name for themselves and a redevelopment area a government draws are two different objects with two different boundaries",
              "Because the name was invented by the Redevelopment Authority",
              "Because it proves the neighbourhood was small",
              "Because the name appears on the 1960 census form",
            ],
            correctIndex: 0,
            explanation: "The remembered Black Bottom had fuzzy edges; the legal Unit 3 was precise to the block. Keeping them apart is the research discipline.",
            sourceLessonSlug: "pa-then-black-bottom",
          },
          {
            prompt: "In 1960, in the blocks the Science Center would take, non-white households occupied about what share of dwelling units?",
            options: ["About 25 percent", "About 50 percent", "About 90 percent", "About 78 percent (333 of 429 units)"],
            correctIndex: 3,
            explanation: "333 of 429 dwelling units, about 77.6 percent, a figure of the same order as Indiana Avenue being about 77 percent Black by 1920.",
            sourceLessonSlug: "pa-then-black-bottom",
          },
          {
            prompt: "Walter Palmer's memory that residents felt safe enough to walk the street at 2 or 3 in the morning is used in this course as:",
            options: [
              "Proof that crime did not exist",
              "Cited testimony that a functioning social fabric existed, of a kind a survey form cannot measure",
              "A reason the clearance was justified",
              "An invented detail for atmosphere",
            ],
            correctIndex: 1,
            explanation: "It is read as evidence of ordinary safety and community, cited as one person's testimony, not as nostalgia.",
            sourceLessonSlug: "pa-then-black-bottom",
          },
          {
            prompt: "How many people are known to have been displaced from University Redevelopment Area Unit 3?",
            options: ["666", "2,653", "10,000", "429"],
            correctIndex: 1,
            explanation: "2,653 people, roughly 78 percent African American and mostly renters. That figure has a clear owner and scope.",
            sourceLessonSlug: "pa-then-reading-the-record",
          },
          {
            prompt: "The University of Pennsylvania's official figure of about 666 displaced counts:",
            options: [
              "Everyone in the Black Bottom",
              "People displaced by the Science Center building itself",
              "People displaced by the whole of Unit 3",
              "Only renters",
            ],
            correctIndex: 1,
            explanation: "666 is Penn's official count for the Science Center alone; 2,653 is all of Unit 3. They count different areas, which is why they differ by roughly a factor of four.",
            sourceLessonSlug: "pa-then-reading-the-record",
          },
          {
            prompt: "The course refuses to pick a single 'Black Bottom displacement number' because:",
            options: [
              "The records were destroyed",
              "The five circulating figures answer different questions over different areas, so there is no one question they all answer",
              "The number is a state secret",
              "Nobody counted",
            ],
            correctIndex: 1,
            explanation: "666, 550 to 700, half of 2,653, 2,653, and 'as high as 10,000' each count a different thing over a different scope. Teaching that is the point.",
            sourceLessonSlug: "pa-then-reading-the-record",
          },
          {
            prompt: "How should the 'as high as 10,000' figure be handled?",
            options: [
              "Adopted as the neighbourhood total",
              "Averaged with the 2,653 figure",
              "Attributed, scoped as an outer bound for the whole Black Bottom over the whole era, and not adopted as a survey",
              "Ignored entirely",
            ],
            correctIndex: 2,
            explanation: "It is the loosest figure, handled the way the Indiana Avenue course handled the 17,000 newspaper figure: attribute it and state its scope.",
            sourceLessonSlug: "pa-then-reading-the-record",
          },
          {
            prompt: "Why is the clearest census of the Black Bottom the one the Redevelopment Authority produced?",
            options: [
              "Because the Authority was a research institution",
              "Because federal urban renewal required a survey before an area could be taken, so the best record is the paperwork of the removal",
              "Because residents refused to be counted otherwise",
              "Because the university funded a study",
            ],
            correctIndex: 1,
            explanation: "A recurring irony: the best record of a neighbourhood is often the documentation of its clearance.",
            sourceLessonSlug: "pa-then-reading-the-record",
          },
          {
            prompt: "The residents' Black Bottom boundaries, according to a community history, were:",
            options: [
              "Fixed by ordinance",
              "Never fixed, remembered differently by different people, generally running west from around 32nd or 33rd Street",
              "Identical to the Unit 3 legal boundary",
              "Unknown to anyone",
            ],
            correctIndex: 1,
            explanation: "A remembered neighbourhood has fuzzy edges; the legal redevelopment area did not. When you write where it was, say whose boundary you mean.",
            sourceLessonSlug: "pa-then-reading-the-record",
          },
          {
            prompt: "Which two courses does this one build on, and what does each contribute?",
            options: [
              "Two civics courses about voting",
              "The Green Book (the method: read a record, research an address forward) and Indiana Avenue (the model: a university plus a redevelopment authority cleared that corridor)",
              "Two courses about jazz",
              "A course on architecture and a course on taxes",
            ],
            correctIndex: 1,
            explanation: "The Green Book teaches how to read; Indiana Avenue found the instrument this course confirms at a second campus.",
            sourceLessonSlug: "pa-then-black-bottom",
          },
          {
            prompt: "Why can Philadelphia show the university-plus-authority instrument 'most clearly'?",
            options: [
              "Because Penn kept better records than Indiana University",
              "Because here there is no highway to argue about, so the clearance isolates the university-and-authority variable",
              "Because the Black Bottom was larger",
              "Because Philadelphia had no blight law",
            ],
            correctIndex: 1,
            explanation: "Indiana Avenue had an interstate nearby that the popular story blamed. West Philadelphia's clearance was not a highway project, which isolates the instrument.",
            sourceLessonSlug: "pa-then-black-bottom",
          },
          {
            prompt: "A displacement count and a neighbourhood are, in this course's phrasing:",
            options: [
              "The same thing",
              "A fact about a document and a fact about people, respectively, with a gap between them the course works in",
              "Both facts about people",
              "Both facts about documents",
            ],
            correctIndex: 1,
            explanation: "A count is a fact about a document; a neighbourhood is a fact about people. Later sections work in the gap between them.",
            sourceLessonSlug: "pa-then-reading-the-record",
          },
          {
            prompt: "The community that descended from the Black Bottom organises today as:",
            options: ["The Society Hill Civic Association", "The Black Bottom Tribe, still asking the city for a marker", "The West Philadelphia Corporation", "The MOVE organization"],
            correctIndex: 1,
            explanation: "A living-community signal: descendants are active now, which is why the course bans the 'vanished golden age' frame.",
            sourceLessonSlug: "pa-then-black-bottom",
          },
          {
            prompt: "The redevelopment zone that took the neighbourhood was officially named:",
            options: [
              "The Black Bottom Redevelopment District",
              "University Redevelopment Area Unit 3",
              "The University City Science Center Zone",
              "The Powelton Renewal Tract",
            ],
            correctIndex: 1,
            explanation: "Unit 3 is the legal object with the precise boundary; the Black Bottom is the remembered neighbourhood. The course keeps the two apart.",
            sourceLessonSlug: "pa-then-reading-the-record",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 2 · Built  (beat 2: architecture and the campus as an expansion instrument)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "pa-built-university-city",
      title: "4 · University City: a name is an instrument",
      section: "Section 2 · Built",
      body: `Beat 2 of the site template asks: **why does it look like that?** For West Philadelphia the answer starts before any building, with a name, because here the naming came first and the buildings were built to make the name true.

**The catalyst, and a caution about it.** In April 1958 a Korean doctoral student, In-Ho Oh, was robbed and killed near the Penn campus. The universities and hospitals of the area used the shock of that crime to organise, and in **1959 they founded the West Philadelphia Corporation** (Puckett, n.d.-a). **Notice the shape of that sentence and be careful with it.** A real crime became the public reason for an institutional land programme. This course does not claim the founders were insincere about safety, and it does not let "it started with a murder" stand in for the decades of acquisition that followed. Both facts are true at once, and Section 3 is about the second one.

**The name.** The corporation and its partners promoted the label **"University City"** for the district, and the University City Science Center took the district's new name into its own (Puckett, n.d.-a; Tomek, n.d.). A place called the Black Bottom is a neighbourhood with residents. A place called University City is a campus with an institution. **Renaming is the first move of an expansion, because it changes what kind of thing the ground is understood to be**, and a learner who watched *Indiana Avenue* rename the Avenue's neighbourhoods "Midtown" already knows to treat a new district name as evidence rather than as geography.

**What was built, as a building type.** The **University City Science Center**, incorporated in the fall of **1963**, was the nation's first and largest urban research park (Tomek, n.d.; Puckett, n.d.-a). A research park is a specific typology: laboratory and office buildings, set on superblocks, oriented to institutions and to parking rather than to a street of front doors. Its architecture is the opposite of the Black Bottom's rowhouse fabric, and that opposition is the point. **A rowhouse block is addressed to the sidewalk; a research campus is addressed to the institution.** You can read the change of power in the change of built form without knowing a single date.

**A controversy Indianapolis did not have, and it belongs in beat 2 because it is about what the buildings were for.** When Penn students occupied College Hall in February 1969, they were protesting two things at once: the displacement of the Black Bottom, and **classified war research** connected to the Science Center (University of Pennsylvania University Archives, n.d.). Keep those two grievances distinct and cited, because they are different claims. But note the pairing, because *plans/37* flagged exactly this hinge: the postwar campus and the postwar defense complex were often the same institutions, and a building can be an instrument of expansion at home and of research for a war abroad at the same time. **Indianapolis's campus was a campus. Philadelphia's research park carried a second argument on its back**, and honest history keeps both.

**The transferable skill of this lesson.** Before you ask who cleared a neighbourhood, ask **what the replacement was built to be**, because the building type tells you who the ground was re-addressed to. A rowhouse serves a household. A research park serves an institution and, here, in part a defense contract. **The typology is the motive, made visible.**

## Sources
- Puckett, J. L. (n.d.-a). *The University City Science Center and the Black Bottom*. West Philadelphia Collaborative History, University of Pennsylvania Graduate School of Education. https://collaborativehistory.gse.upenn.edu/stories/university-city-science-center-and-black-bottom
- Tomek, B. C. (n.d.). *University City Science Center*. Encyclopedia of Greater Philadelphia, Rutgers University. https://philadelphiaencyclopedia.org/essays/university-city-science-center/
- University of Pennsylvania University Archives. (n.d.). *History of the University City Science Center: Approval process, displacement, protests, and PR disaster, 1965-1971*. https://archives.upenn.edu/exhibits/penn-history/science-center/part-3/`,
      recallContent: [
        {
          prompt: "What was the West Philadelphia Corporation, and what event preceded its founding?",
          answer: "A corporation founded in 1959 by the area's universities and hospitals to coordinate land and redevelopment. Its founding followed the 1958 robbery and killing of Korean doctoral student In-Ho Oh, which the institutions used to organise.",
        },
        {
          prompt: "Why does the course treat the renaming of the district as evidence?",
          answer: "Because renaming the Black Bottom as University City changes what kind of thing the ground is understood to be, from a neighbourhood with residents to a campus with an institution. A new district name is the first move of an expansion.",
        },
        {
          prompt: "What kind of building type is a research park, and how does it differ from the Black Bottom's fabric?",
          answer: "Laboratory and office buildings on superblocks, oriented to institutions and parking. A rowhouse block is addressed to the sidewalk and serves a household; a research campus is addressed to the institution. The change of built form shows the change of power.",
        },
        {
          prompt: "What two distinct grievances did the 1969 College Hall sit-in protest, and why keep them separate?",
          answer: "The displacement of the Black Bottom and classified war research connected to the Science Center. They are different claims and must be cited separately, but the pairing shows that the postwar campus and the postwar defense complex were often the same institutions.",
        },
      ],
    },
    {
      slug: "pa-built-what-replaced-it",
      title: "5 · What replaced it, and Society Hill as the control case",
      section: "Section 2 · Built",
      body: `A clearance is a substitution: something stood, and something else stands now. Beat 2 finishes by reading the replacement, and then by comparing it to a second Philadelphia clearance that used the **same authority** to the **opposite end**. That comparison is the closest thing this course has to a controlled experiment.

**What replaced the Black Bottom.** By the end of **1967** the Market Street corridor had been leveled for the Science Center and for **University City High School** (Puckett, n.d.-b). The Science Center rose on the blocks between roughly 34th and 38th Streets on Market, and it kept growing for decades into the research campus that stands there now (Tomek, n.d.). Where 429 dwelling units had held families, by 1970 only 15 dwelling units remained in the Science Center area (University of Pennsylvania University Archives, n.d.). **That is the substitution in one line: a neighbourhood of homes became a campus of laboratories.**

**Now the control case, and it is what makes West Philadelphia teach so well.** In the same years, the **same** Redevelopment Authority ran a renewal project a few miles east in **Society Hill**, and it did almost the reverse. Instead of clearing the old fabric, the Authority acquired hundreds of dilapidated historic rowhouses and sold them cheaply to buyers who agreed to restore them to strict standards, working with a newly created Historical Commission (Encyclopedia of Greater Philadelphia, n.d.-a). **The buildings in Society Hill were largely saved. The people mostly were not.** The neighbourhood went from well below the poverty line to one of the city's most affluent, and most of the existing lower-income residents and businesses were displaced anyway (Encyclopedia of Greater Philadelphia, n.d.-a).

**Put the two projects side by side, because the pair is the lesson.**

| | Black Bottom / Unit 3 | Society Hill |
|---|---|---|
| Same Redevelopment Authority | Yes | Yes |
| Same era (late 1950s to 1960s) | Yes | Yes |
| The buildings | Cleared | Largely preserved |
| The residents | Displaced | Largely displaced |
| The result | A research campus | An affluent historic district |

**Read the bottom two rows together.** Preservation and clearance are opposite treatments of the buildings, and they produced the **same** treatment of the people. **That is the finding, and it is uncomfortable in a useful way**: the variable that determined whether a neighbourhood was razed or restored was not "is the fabric worth saving," it was what the ground was wanted for and who was wanted on it. Society Hill's rowhouses were wanted, so they were kept; its poorer residents were not, so they went. The Black Bottom's rowhouses were not wanted, so they were cleared; its residents were not wanted either. **Displacement was the constant. The building's fate was the variable.** A course that only studied clearance would have missed that, which is why the control case matters.

**What this does to a naive preservation story.** It is tempting to conclude that the Black Bottom's tragedy was that no one designated its buildings in time, the way *Indiana Avenue* showed designation arriving after the clearance. Society Hill complicates that. **Designation and preservation are tools, and a tool serves whoever holds it.** Section 3 is about who held the tools here.

## Sources
- Encyclopedia of Greater Philadelphia. (n.d.-a). *Society Hill*. Rutgers University. https://philadelphiaencyclopedia.org/essays/society-hill/
- Puckett, J. L. (n.d.-b). *Collateral damage in Unit 3*. West Philadelphia Collaborative History, University of Pennsylvania Graduate School of Education. https://collaborativehistory.gse.upenn.edu/stories/collateral-damage-unit-3
- Tomek, B. C. (n.d.). *University City Science Center*. Encyclopedia of Greater Philadelphia, Rutgers University. https://philadelphiaencyclopedia.org/essays/university-city-science-center/
- University of Pennsylvania University Archives. (n.d.). *History of the University City Science Center: Approval process, displacement, protests, and PR disaster, 1965-1971*. https://archives.upenn.edu/exhibits/penn-history/science-center/part-3/`,
      recallContent: [
        {
          prompt: "State the Black Bottom substitution in one line, with the numbers.",
          answer: "A neighbourhood of homes became a campus of laboratories: the Market corridor was leveled by the end of 1967 for the Science Center and University City High School, and where 429 dwelling units had stood, only 15 remained in the Science Center area by 1970.",
        },
        {
          prompt: "Why is Society Hill the course's control case?",
          answer: "Because the same Redevelopment Authority ran it in the same era but preserved the buildings instead of clearing them, while still displacing most of the poorer residents. Comparing it to the Black Bottom isolates what actually varied.",
        },
        {
          prompt: "What was constant across the Black Bottom and Society Hill, and what varied?",
          answer: "Displacement of the residents was the constant. The fate of the buildings was the variable: cleared in the Black Bottom, preserved in Society Hill. The variable was what the ground was wanted for and who was wanted on it, not whether the fabric was worth saving.",
        },
        {
          prompt: "What does Society Hill do to the idea that the Black Bottom's problem was simply late designation?",
          answer: "It complicates it. Designation and preservation are tools that serve whoever holds them. Society Hill was preserved and its poorer residents still went, so the missing variable is who held the tools and what they wanted, not the timing of designation alone.",
        },
      ],
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 3 · Powers  (beat 3: civics, planning, politics. THE LOAD-BEARING SECTION)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "pa-powers-certification",
      title: "6 · Instrument one: certification under a 1945 law",
      section: "Section 3 · Powers",
      body: `**This is the section the whole course exists for.** Everything before it establishes what was here and what replaced it. This section teaches the tools, because **a building does not disappear, it is removed by somebody with an instrument.** Learn the instruments and you can read any American city, and you can test the claim that Philadelphia is Indiana Avenue's twin against the actual machinery.

**An instrument is a specific legal power, exercised by a specific body, under a specific statute, leaving a specific document.** *Indiana Avenue* taught that definition. This course reuses it, because the definition is the reason history is researchable: if a power was exercised, a named record exists.

**Instrument one is certification, and here is the first precise parallel.** Before a government can clear an area it usually has to declare the area to be something. In Indiana the word was **blighted** and the machinery was set up by a **1945** state law. In Pennsylvania the word is also **blighted** and the machinery was set up by the **Pennsylvania Urban Redevelopment Law, enacted May 24, 1945** (Commonwealth of Pennsylvania, 1945; Philadelphia City Planning Commission, n.d.-a). **Two states, two blight statutes, the same year.** That is not a coincidence you have to argue for. It is the postwar federal urban-renewal framework landing in two state legislatures at once, and it is the strongest single piece of evidence that Indianapolis and Philadelphia were running the same program rather than resembling each other.

**How the Pennsylvania version works, step by step, because the steps are the leverage.** The law does not let a city simply bulldoze. It sets a sequence:
1. The **Philadelphia City Planning Commission certifies** that a specific area is **blighted**, meaning it finds the area meets one or more statutory criteria (Philadelphia City Planning Commission, n.d.-a).
2. A **Redevelopment Area Plan** is prepared for the certified area.
3. The **Redevelopment Authority** carries out the plan: acquisition, clearance, and resale to a redeveloper.

**Notice who certifies.** In Pennsylvania the **planning commission**, not the redevelopment authority, makes the blight finding. That split matters, because it means the finding and the clearing are done by two different bodies, each with its own public record. **Two bodies means two paper trails to request.**

**What the statutory criteria actually are, because they are the circularity you met on Indiana Avenue.** The Pennsylvania law lists conditions such as unsafe, unsanitary, inadequate or overcrowded dwellings, inadequate planning, excessive land coverage, lack of light and air, defective design, faulty street or lot layout, and "land uses which are economically or socially undesirable" (Commonwealth of Pennsylvania, 1945). Read that last clause twice. **"Economically or socially undesirable" is not a measurement of a building.** It is a judgment about a use, and a judgment about a use in a segregated city is rarely innocent of who is doing the using. The physical criteria, meanwhile, measure deterioration, and deterioration follows decades of refused mortgage credit and investment, so here too **the finding and its cause can be the same policy at two different dates.**

**A detail that hands a citizen real leverage today.** A Pennsylvania blight certification **expires after 20 years unless renewed** (Philadelphia City Planning Commission, n.d.-a). That means certification is not permanent, it is dated and re-datable, which makes it exactly the kind of record you can look up, check the age of, and comment on. Section 5 uses this.

**What this course will not claim.** It will not tell you the Black Bottom certification was made in bad faith, because that is a claim about intent and this course has not read the Planning Commission's certification file for Unit 3. **It will tell you that the instrument existed, that Pennsylvania built it in 1945 exactly as Indiana did, that a planning commission had to certify blight before the Authority could act, and that the file is a public record this course has not opened.** That is an honest place to stop, and it is the same honest stop *Indiana Avenue* made about the Indianapolis commission minutes.

## Sources
- Commonwealth of Pennsylvania. (1945). *Urban Redevelopment Law, Act of May 24, 1945, P.L. 991, No. 385*. Pennsylvania General Assembly. https://www.legis.state.pa.us/WU01/LI/LI/US/HTM/1945/0/0385..HTM
- Philadelphia City Planning Commission. (n.d.-a). *Blight certifications and the redevelopment process*. City of Philadelphia. https://www.phila.gov/departments/philadelphia-city-planning-commission/plans-and-reports/blight-certifications-and-the-redevelopment-process/
- Puckett, J. L. (n.d.-b). *Collateral damage in Unit 3*. West Philadelphia Collaborative History, University of Pennsylvania Graduate School of Education. https://collaborativehistory.gse.upenn.edu/stories/collateral-damage-unit-3`,
      recallContent: [
        {
          prompt: "What is the precise 1945 parallel between Indiana and Pennsylvania?",
          answer: "Both states set up their blight-clearance machinery in 1945: Indiana's blight law and the Pennsylvania Urban Redevelopment Law, enacted May 24, 1945. Two states, two blight statutes, the same year, which is the postwar federal urban-renewal framework landing in both legislatures.",
        },
        {
          prompt: "In Pennsylvania, which body certifies blight, and why does that split matter?",
          answer: "The City Planning Commission certifies blight, not the Redevelopment Authority. The finding and the clearing are done by two different bodies, so there are two separate public paper trails to request.",
        },
        {
          prompt: "Which statutory blight criterion is a judgment rather than a measurement, and why is that a problem?",
          answer: "'Land uses which are economically or socially undesirable.' It judges a use rather than measuring a building, and in a segregated city a judgment about a use is rarely innocent of who is using it. The physical criteria are also circular, since deterioration follows decades of refused credit.",
        },
        {
          prompt: "What happens to a Pennsylvania blight certification after 20 years, and why does it matter to a citizen?",
          answer: "It expires unless renewed. Certification is dated and re-datable rather than permanent, which makes it a public record you can look up, check the age of, and comment on.",
        },
        {
          prompt: "What does this course refuse to claim about the Black Bottom certification?",
          answer: "That it was made in bad faith, because that is a claim about intent and the course has not read the Planning Commission's certification file for Unit 3. It claims only that the instrument existed and was used, and that the file is a public record it has not opened.",
        },
      ],
    },
    {
      slug: "pa-powers-eminent-domain",
      title: "7 · Instrument two: eminent domain and federal money",
      section: "Section 3 · Powers",
      body: `Certification unlocks the power. **Eminent domain is the power, and federal money is the fuel.**

**What eminent domain is.** The government's authority to take private property for a public use on payment of just compensation, required by the last clause of the **Fifth Amendment** and applied to the states through the Fourteenth. *Indiana Avenue* taught three things a learner usually has wrong about it, and all three hold here: the owner does not have to agree, the dispute is normally about price rather than about whether the taking happens, and it leaves a paper trail with names on it.

**How it ran in Unit 3.** The Redevelopment Authority **condemned the Unit 3 properties in 1966 and demolished the blocks in 1967 and 1968** (Puckett, n.d.-a). The acquisition was not instantaneous, and the record shows the friction: by **March 1967 only 43 percent of Unit 3 property owners had accepted the Authority's prices**, and demolition of the vacant, already-acquired properties began in August 1967 (University of Pennsylvania University Archives, n.d.). **A majority of owners had not yet agreed when clearance began.** That is the asymmetry *Indiana Avenue* found in the Temple family's fourteen-year holdout, visible here as a percentage: the project moves whether or not the owners are ready.

**Now the fuel, which is where Philadelphia differs from Indianapolis in an important and precise way.** The Science Center clearance was **federally financed urban renewal**. The federal housing agency approved a grant of about **13 million dollars on April 30, 1966** and disbursed a capital grant of about **12 million dollars that December** (University of Pennsylvania University Archives, n.d.). Roughly two thirds of those federal urban-renewal funds went to buying real estate (University of Pennsylvania University Archives, n.d.). **Hold this against Indiana Avenue.** There, the federal money that mattered most flowed through the **highway** program, and the Avenue's own blocks went largely to campus assembly and local blight. Here, there is no highway: the federal money flows straight through the **urban-renewal grant** to the Redevelopment Authority that cleared the land for the university's research park. **Same federal era, different federal channel.** Naming the channel correctly is the difference between saying "the government did it" and being able to say which program, which grant, and which date.

**Why the taker is not the party that keeps the land.** Under redevelopment law a public authority acquires and clears, then conveys the cleared land to a redeveloper. Here the redeveloper the Authority designated for Unit 3 was the **University City Science Center** itself (Tomek, n.d.). **That is the design of urban renewal, not an abuse of it**, and it is the reason "public use" became a contested phrase in American law: the public body does the taking, and a private or institutional developer ends up with the ground. A learner who can hold that sequence in mind, take, clear, convey, will never again be confused about how a public power produces a private campus.

**Two limits to keep.** First, **the 1966 dollar figures are not comparable to today's** without an inflation adjustment this course does not perform for you; if you use them, say what you did to them. Second, **federal relocation standards changed in 1970**, with the Uniform Relocation Act, and much of this clearance predates it, so a taking here and a taking a decade later happened under different rules. Both cautions are the same ones *Indiana Avenue* insisted on, and they are the marks of getting the history right rather than merely vivid.

## Sources
- Puckett, J. L. (n.d.-a). *The University City Science Center and the Black Bottom*. West Philadelphia Collaborative History, University of Pennsylvania Graduate School of Education. https://collaborativehistory.gse.upenn.edu/stories/university-city-science-center-and-black-bottom
- Tomek, B. C. (n.d.). *University City Science Center*. Encyclopedia of Greater Philadelphia, Rutgers University. https://philadelphiaencyclopedia.org/essays/university-city-science-center/
- U.S. Const. amend. V.
- Uniform Relocation Assistance and Real Property Acquisition Policies Act of 1970, 42 U.S.C. § 4601 et seq. https://www.govinfo.gov/app/collection/uscode
- University of Pennsylvania University Archives. (n.d.). *History of the University City Science Center: Approval process, displacement, protests, and PR disaster, 1965-1971*. https://archives.upenn.edu/exhibits/penn-history/science-center/part-3/`,
      recallContent: [
        {
          prompt: "When did the Redevelopment Authority condemn and demolish the Unit 3 properties, and what does the March 1967 figure show?",
          answer: "Condemned in 1966, demolished in 1967 and 1968. By March 1967 only 43 percent of owners had accepted the Authority's prices, so a majority had not agreed when clearance began. The project moves whether or not owners are ready.",
        },
        {
          prompt: "How did federal money reach the Black Bottom clearance, and how does that differ from Indiana Avenue?",
          answer: "Through a federal urban-renewal grant of about 13 million dollars (1966) to the Redevelopment Authority, roughly two thirds spent on real estate. On Indiana Avenue the decisive federal money flowed through the highway program instead. Same federal era, different federal channel; here there is no highway.",
        },
        {
          prompt: "Trace the sequence by which a public power produces a private campus.",
          answer: "Take, clear, convey: a public authority condemns and clears the land, then conveys it to a redeveloper. In Unit 3 the designated redeveloper was the University City Science Center itself. That is the design of urban renewal, and it is why 'public use' became contested.",
        },
        {
          prompt: "What two limits does the lesson insist on when using the numbers?",
          answer: "The 1966 dollar figures are not comparable to today's without a stated inflation adjustment, and federal relocation standards changed with the 1970 Uniform Relocation Act, so takings before and after happened under different rules.",
        },
      ],
    },
    {
      slug: "pa-powers-university-assembler",
      title: "8 · Instrument three: the university's surrogate",
      section: "Section 3 · Powers",
      body: `The instrument that ties this course to *Indiana Avenue* most tightly is a university acquiring and directing land through an entity that is not quite the university.

**On Indiana Avenue, the surrogate was Hoosier Realty Corporation**, a nonprofit that Indiana University formed in 1962 and that went on to acquire more than 2,000 houses and lots. The lesson there was: land assembly gets more expensive the moment the seller knows who is buying and why, so an institution buys through a separate name, and the deed records do not always say what you expect. **Follow the entity, not the institution.**

**In West Philadelphia, the surrogate is the West Philadelphia Corporation.** Founded in 1959, it was a coalition **funded and run primarily by the University of Pennsylvania**, with Drexel Institute of Technology, the Philadelphia College of Pharmacy and Science, Presbyterian Hospital, and an osteopathic medical school as junior partners (Puckett, n.d.-a). It controlled the Unit 3 redevelopment and acted, in one historian's words, as Penn's surrogate to ensure the neighbourhood's "attractiveness, stability, and vitality" (Puckett, n.d.-b). And the residents saw exactly what it was: one, Felton Newman, told a hearing that **"the West Philadelphia Corporation is a front for the University of Pennsylvania"** (Newman, as quoted in University of Pennsylvania University Archives, n.d.). **A citizen named the instrument correctly, at the time, on the record.**

**Here is where precision earns its keep, because the two surrogates are parallel but not identical.** Do not flatten them.

| | Hoosier Realty Corporation (Indianapolis) | West Philadelphia Corporation (Philadelphia) |
|---|---|---|
| Formed by | Indiana University alone | A coalition, Penn dominant, with junior partners |
| Founded | 1962 | 1959 |
| Original stated purpose | A land-acquisition vehicle | Neighbourhood safety and stability after a 1958 killing, then land |
| Relationship to the campus | The university's own shell | A multi-institution consortium the university funded and ran |

**The parallel is real: in both cities a university did its neighbourhood land work through a nonprofit intermediary rather than only in its own name.** The difference is real too: Hoosier Realty was a single university's dedicated shell, while the West Philadelphia Corporation was a consortium with a broader founding mission that became a land programme. **If you say "Penn used a shell company exactly like Indiana University did," you have overclaimed.** The honest sentence is: both universities worked through a surrogate nonprofit, and the surrogates differed in structure and origin. That sentence is more useful precisely because it is more careful.

**Put the three instruments in order and the mechanism is complete.** The Planning Commission **certifies** blight. The Redevelopment Authority **condemns, clears, and conveys** with federal money. A university, working through a **surrogate nonprofit**, is the coalition partner and eventual beneficiary of the ground. **Certification plus condemnation plus a university surrogate is the machine**, and it is the same machine *Indiana Avenue* reverse-engineered, running here without a highway anywhere in the diagram.

**A note on fairness that is also a note on accuracy.** Nothing here says a university should not have expanded in Philadelphia, and this course does not have the record to argue that question either way. What the record establishes is **which ground was chosen, under which certification, using which acquisition machinery, through which surrogate, and who lived there first.** Those are the facts. The judgment is the learner's, made on the documents.

## Sources
- Puckett, J. L. (n.d.-a). *The University City Science Center and the Black Bottom*. West Philadelphia Collaborative History, University of Pennsylvania Graduate School of Education. https://collaborativehistory.gse.upenn.edu/stories/university-city-science-center-and-black-bottom
- Puckett, J. L. (n.d.-b). *Collateral damage in Unit 3*. West Philadelphia Collaborative History, University of Pennsylvania Graduate School of Education. https://collaborativehistory.gse.upenn.edu/stories/collateral-damage-unit-3
- University of Pennsylvania University Archives. (n.d.). *History of the University City Science Center: Approval process, displacement, protests, and PR disaster, 1965-1971*. https://archives.upenn.edu/exhibits/penn-history/science-center/part-3/`,
      recallContent: [
        {
          prompt: "What was the West Philadelphia Corporation, and how did a resident describe it at the time?",
          answer: "A coalition founded in 1959, funded and run primarily by the University of Pennsylvania with junior institutional partners, which controlled the Unit 3 redevelopment as Penn's surrogate. Resident Felton Newman told a hearing it was 'a front for the University of Pennsylvania.'",
        },
        {
          prompt: "How is the West Philadelphia Corporation parallel to Hoosier Realty Corporation, and how does it differ?",
          answer: "Parallel: both let a university do neighbourhood land work through a nonprofit intermediary rather than only in its own name. Different: Hoosier Realty was Indiana University's own single-university shell formed as a land vehicle, while the West Philadelphia Corporation was a multi-institution consortium Penn funded and ran, founded first for safety after a 1958 killing.",
        },
        {
          prompt: "What is the overclaim to avoid, and the careful sentence to use instead?",
          answer: "Overclaim: 'Penn used a shell company exactly like Indiana University did.' Careful: both universities worked through a surrogate nonprofit, and the surrogates differed in structure and origin.",
        },
        {
          prompt: "State the complete machine in one line, and what is notably absent from it.",
          answer: "Certification of blight by the Planning Commission, plus condemnation, clearance and conveyance by the Redevelopment Authority with federal money, plus a university working through a surrogate nonprofit. Notably absent: any highway.",
        },
      ],
    },
    {
      slug: "pa-powers-the-twin",
      title: "9 · Testing the twin: parallel, similar, and different",
      section: "Section 3 · Powers",
      body: `The plan behind this course proposed that the Black Bottom is **Indiana Avenue's closest twin anywhere** (plans/41). *Indiana Avenue* taught you to take a good argument apart before you trust it, so take this one apart. The right test is not "does it feel similar." It is: **sort every claim into parallel, merely similar, or different, and cite each one.**

**What is genuinely parallel, and this is the strong column.**
1. **A university drove the clearing of a Black neighbourhood.** Indiana University in Indianapolis; the University of Pennsylvania in Philadelphia. Documented in both (Encyclopedia of Indianapolis, n.d.; Puckett, n.d.-a).
2. **The land was worked through a surrogate nonprofit tied to the university.** Hoosier Realty Corporation; the West Philadelphia Corporation (previous lesson).
3. **A public redevelopment body used blight and eminent domain to acquire and clear.** The Indianapolis Redevelopment Commission; the Redevelopment Authority of the City of Philadelphia (Puckett, n.d.-a).
4. **The enabling blight statute was passed by the state legislature in 1945 in both states.** Indiana's blight law; the Pennsylvania Urban Redevelopment Law of May 24, 1945 (Commonwealth of Pennsylvania, 1945). **This is the single most exact parallel in the two courses.**

**What is merely similar, meaning it rhymes but is not the same object.**
1. **The thing cleared.** Indiana Avenue was a commercial and cultural corridor; the Black Bottom was a residential neighbourhood. Both were Black districts about 77 percent Black in their census snapshots, but one is counted in businesses and the other in households.
2. **The surrogate's structure.** A single-university shell versus a multi-institution consortium (previous lesson).
3. **The demographic snapshot.** About 77 percent Black on the Avenue by 1920; about 78 percent of Unit 3's displaced were African American. Close, but measured differently, at different dates, of different populations. **Similar is not identical, and a careful writer says which.**

**What is genuinely different, and naming it is what keeps the twin claim honest.**
1. **No highway.** On Indiana Avenue the interstate was a real instrument acting on the surrounding neighbourhoods, and the popular story wrongly promoted it to chief cause. In West Philadelphia there is no highway in the clearance at all. **This is why Philadelphia is the cleaner case: it isolates the university-and-authority instrument with no highway to confuse the reader.**
2. **The federal channel.** Highway funds in the Indianapolis story; an urban-renewal grant to the Redevelopment Authority here (lesson 7).
3. **A defense-research controversy.** Philadelphia's research park carried a classified-research grievance that the 1969 sit-in protested; Indianapolis's campus did not (lesson 4).
4. **The certifying body.** In Pennsylvania the Planning Commission certifies blight and the Authority clears; the split of those two roles is a Pennsylvania particular.

**Now the verdict, stated plainly.** **The twin claim holds, and it holds most strongly at the level of the instrument.** The machine, a university plus a surrogate plus a redevelopment authority plus a 1945 state blight statute, is the same machine in both cities, and Philadelphia runs it without the highway that muddied Indianapolis. **The twin claim overreaches only if you let "twin" mean "identical."** The neighbourhoods differ, the surrogates differ, the federal channels differ, and one city has a war-research overlay the other lacks. **A twin is not a clone.** The honest headline is the one the plan actually needs: *the instrument that cleared Indiana Avenue is confirmed at a second campus, in a form clean enough to prove the pattern was a program.*

**The method lesson, which outlasts both cities.** When someone offers you a compelling parallel, do not accept it or reject it whole. **Build the three columns, parallel, similar, different, and make them cite.** A parallel that survives that sorting is worth stating with confidence. A parallel that dissolves into "merely similar" in every row was a vibe. This one has a full strong column, so it survives.

## Sources
- Commonwealth of Pennsylvania. (1945). *Urban Redevelopment Law, Act of May 24, 1945, P.L. 991, No. 385*. Pennsylvania General Assembly. https://www.legis.state.pa.us/WU01/LI/LI/US/HTM/1945/0/0385..HTM
- Encyclopedia of Indianapolis. (n.d.). *Indiana Avenue*. https://indyencyclopedia.org/indiana-avenue/
- Puckett, J. L. (n.d.-a). *The University City Science Center and the Black Bottom*. West Philadelphia Collaborative History, University of Pennsylvania Graduate School of Education. https://collaborativehistory.gse.upenn.edu/stories/university-city-science-center-and-black-bottom`,
      recallContent: [
        {
          prompt: "Name the four genuinely parallel features of Indianapolis and Philadelphia.",
          answer: "A university drove the clearing of a Black neighbourhood; the land was worked through a surrogate nonprofit tied to the university; a public redevelopment body used blight and eminent domain; and both states passed their enabling blight statute in 1945. The 1945 statutes are the most exact parallel.",
        },
        {
          prompt: "Give two features that are 'merely similar' rather than parallel.",
          answer: "The thing cleared (a commercial corridor versus a residential neighbourhood) and the surrogate's structure (a single-university shell versus a multi-institution consortium). Also the demographic snapshots, close but measured differently at different dates.",
        },
        {
          prompt: "What is genuinely different, and why does the absence of a highway make Philadelphia the cleaner case?",
          answer: "No highway in the clearance, a different federal channel (an urban-renewal grant rather than highway funds), a defense-research controversy, and a Planning Commission that certifies while the Authority clears. With no highway to blame, Philadelphia isolates the university-and-authority instrument and proves the pattern was a program.",
        },
        {
          prompt: "State the verdict on the twin claim.",
          answer: "It holds, most strongly at the level of the instrument, which is the same machine in both cities. It overreaches only if 'twin' is taken to mean 'identical': the neighbourhoods, surrogates and federal channels differ, and one city has a war-research overlay. A twin is not a clone.",
        },
        {
          prompt: "What is the durable method lesson for handling a compelling parallel?",
          answer: "Do not accept or reject it whole. Build three cited columns, parallel, similar, different. A parallel with a full strong column survives; one that dissolves into 'merely similar' in every row was a vibe.",
        },
      ],
    },
    {
      slug: "pa-powers-move",
      title: "10 · A different instrument: the MOVE bombing, 1985",
      section: "Section 3 · Powers",
      body: `West Philadelphia holds a second decision that people often place beside the Black Bottom because it is the same city, the same part of town, and the same broad injustice. **This lesson exists to teach you not to do that carelessly.** The MOVE bombing is a real, documented, and grievous municipal decision, and it is **not** part of the university-expansion story. Handling it correctly is itself the lesson of this section: **precision about what belongs to which decision.**

**What is documented, stated plainly and once.** On **13 May 1985**, after an armed standoff, **Philadelphia police dropped an explosive device from a helicopter onto the roof of the house at 6221 Osage Avenue**, the headquarters of the Black liberation and back-to-nature group MOVE, in the **Cobbs Creek** neighbourhood of West Philadelphia. The device started a fire that the authorities allowed to burn. **Eleven people died, six adults and five children. More than 60 homes were destroyed and more than 250 people were left homeless** (Tomek, n.d.-b). Those are the facts, and they are enough. This lesson will not dramatise them further.

**Why it has an official record, which is what makes it teachable at all.** The mayor convened the **Philadelphia Special Investigation Commission**, known as the MOVE Commission, which held weeks of televised hearings and **issued its report on 6 March 1986**. The commission concluded that dropping a bomb on an occupied rowhouse was "unconscionable" and that the tactics were "grossly negligent" (Tomek, n.d.-b). **Because there is a commission report, this is documentable rather than only remembered**, which is the standard this whole course holds. **Read the report.** This lesson deliberately does not paraphrase the deaths of children from second-hand accounts or reproduce victim lists that vary between sources; the commission's own report, and the archival scholarship built on it, are where a learner should go, and this course points you there rather than standing between you and it.

**Now the two disciplines this lesson is really teaching.**

**First: keep the decisions distinct.** Sort the two West Philadelphia events the way lesson 9 sorted the two cities.

| | Black Bottom clearance | MOVE bombing |
|---|---|---|
| When | 1960s | 1985 |
| Where | University City / Unit 3 | Cobbs Creek, about four miles west |
| Instrument | Blight certification, eminent domain, urban renewal | Municipal police power in an armed confrontation |
| Body | Planning Commission and Redevelopment Authority | The police department and city administration |
| Beneficiary | A university research park | None; it was destruction, not development |
| The record | RDA and Planning Commission files | The MOVE Commission report, 1986 |

**They share a city and a race of the victims and nothing about the instrument.** One is land assembly for an institution. The other is lethal force in a standoff. **Collapsing them into "West Philadelphia did terrible things to Black people" is true as a sentiment and useless as history**, because it hides the two entirely different mechanisms a citizen would have to confront to prevent a repeat of either. The whole point of the Powers section is that mechanisms differ and each leaves its own record.

**Second: tone is accountability, not spectacle.** The children who died on Osage Avenue have surviving relatives and neighbours who are alive now. There is no lesson in the flames. The lesson is in the sentence the commission wrote, "unconscionable," and in the fact that a city produced an official finding against itself. **Write about this, if you write about it at all, as an accountability record: who decided, what body reviewed it, what the review concluded, and what changed or did not.** That is the same instrument-and-record discipline as the rest of the section, applied to a case where the stakes are human lives rather than city blocks.

**Why it is in this course at all.** Because a metro-spine course claims to teach you to read a whole city's decisions, and a reader who has only the Black Bottom might reach for the bombing as "more of the same." It is not more of the same. **It is a different power, in a different neighbourhood, with a different record, and knowing that is knowing the city.**

## Sources
- Philadelphia Special Investigation Commission. (1986, March 6). *Report of the Philadelphia Special Investigation Commission (MOVE Commission)*.
- Tomek, B. C. (n.d.-b). *MOVE*. Encyclopedia of Greater Philadelphia, Rutgers University. https://philadelphiaencyclopedia.org/essays/move/`,
      recallContent: [
        {
          prompt: "State the documented facts of 13 May 1985, once and plainly.",
          answer: "Philadelphia police dropped an explosive device from a helicopter onto the roof of 6221 Osage Avenue, the MOVE headquarters, in the Cobbs Creek neighbourhood. The resulting fire was allowed to burn. Eleven people died, six adults and five children; more than 60 homes were destroyed and more than 250 people left homeless.",
        },
        {
          prompt: "What official record exists, and what did it conclude?",
          answer: "The Philadelphia Special Investigation Commission (the MOVE Commission) issued its report on 6 March 1986, concluding that dropping a bomb on an occupied rowhouse was 'unconscionable' and the tactics 'grossly negligent.' Because there is a report, the event is documentable rather than only remembered.",
        },
        {
          prompt: "Why must the MOVE bombing not be collapsed into the Black Bottom story?",
          answer: "They share a city and the race of the victims and nothing about the instrument. The Black Bottom was land assembly for a university via blight certification and eminent domain; the bombing was lethal municipal police power in an armed standoff, four miles west, in 1985. Collapsing them hides the two different mechanisms a citizen would confront.",
        },
        {
          prompt: "What tone does this lesson require, and why does it point to the commission report rather than paraphrase?",
          answer: "Accountability, not spectacle: who decided, what body reviewed it, what it concluded. Survivors and relatives are living and children died, so the lesson gives the documented count and directs the learner to the official report rather than dramatising the deaths or reproducing varying victim lists.",
        },
      ],
    },
    {
      slug: "pa-quiz-powers",
      title: "11 · Quiz: who decided",
      section: "Section 3 · Powers",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        shuffleOptions: true,
        questions: [
          {
            prompt: "This course defines an 'instrument' as:",
            options: [
              "Any historical cause of a change",
              "A specific legal power, exercised by a specific body, under a specific statute, leaving a specific document",
              "A newspaper account of a decision",
              "A tool used in construction",
            ],
            correctIndex: 1,
            explanation: "The last clause is what makes history researchable: if a power was exercised, a named record exists.",
            sourceLessonSlug: "pa-powers-certification",
          },
          {
            prompt: "What is the most exact parallel between the Indiana and Pennsylvania clearances?",
            options: [
              "Both cities had the same mayor",
              "Both universities were named Indiana",
              "Both used the same highway",
              "Both states passed their enabling blight statute in 1945",
            ],
            correctIndex: 3,
            explanation: "Indiana's blight law and the Pennsylvania Urban Redevelopment Law of May 24, 1945, are the postwar federal urban-renewal framework landing in two legislatures at once.",
            sourceLessonSlug: "pa-powers-certification",
          },
          {
            prompt: "In Pennsylvania, which body certifies an area as blighted?",
            options: [
              "The City Planning Commission",
              "The Redevelopment Authority",
              "The university",
              "The state legislature, case by case",
            ],
            correctIndex: 0,
            explanation: "The Planning Commission certifies blight; the Redevelopment Authority then clears. The split means two separate public paper trails.",
            sourceLessonSlug: "pa-powers-certification",
          },
          {
            prompt: "Which statutory blight criterion is a judgment about a use rather than a measurement of a building?",
            options: [
              "Overcrowded dwellings",
              "Lack of light and air",
              "Land uses which are economically or socially undesirable",
              "Faulty street or lot layout",
            ],
            correctIndex: 2,
            explanation: "In a segregated city a judgment about a use is rarely innocent of who is using it. The physical criteria are separately circular, since deterioration follows refused credit.",
            sourceLessonSlug: "pa-powers-certification",
          },
          {
            prompt: "By March 1967, what share of Unit 3 property owners had accepted the Redevelopment Authority's prices?",
            options: ["43 percent", "78 percent", "100 percent", "None"],
            correctIndex: 0,
            explanation: "A majority had not agreed when clearance began, which shows the project moves whether or not owners are ready.",
            sourceLessonSlug: "pa-powers-eminent-domain",
          },
          {
            prompt: "How did federal money reach the Black Bottom clearance, and how does that differ from Indiana Avenue?",
            options: [
              "Through the highway program, exactly as in Indianapolis",
              "Through a federal urban-renewal grant to the Redevelopment Authority; on Indiana Avenue the decisive federal money flowed through the highway program instead",
              "It received no federal money",
              "Through a direct grant to the university",
            ],
            correctIndex: 1,
            explanation: "Same federal era, different federal channel. West Philadelphia's clearance had no highway; the grant went to the Authority that cleared land for the research park.",
            sourceLessonSlug: "pa-powers-eminent-domain",
          },
          {
            prompt: "The sequence by which a public power produces a private campus is:",
            options: [
              "Convey, then take, then clear",
              "Take, clear, convey: the authority condemns and clears, then conveys the land to a redeveloper (here, the Science Center)",
              "The university condemns the land directly",
              "The state clears the land and keeps it",
            ],
            correctIndex: 1,
            explanation: "That design, a public body taking and a private developer receiving, is why 'public use' became a contested phrase in American law.",
            sourceLessonSlug: "pa-powers-eminent-domain",
          },
          {
            prompt: "What was the West Philadelphia Corporation, in a resident's words at the time?",
            options: [
              "'A front for the University of Pennsylvania,' per Felton Newman",
              "A neighbourhood improvement club with no university ties",
              "A federal agency",
              "A tenants' union",
            ],
            correctIndex: 0,
            explanation: "The coalition was funded and run primarily by Penn and controlled Unit 3 as its surrogate. A citizen named the instrument correctly, on the record.",
            sourceLessonSlug: "pa-powers-university-assembler",
          },
          {
            prompt: "How does the West Philadelphia Corporation differ from Hoosier Realty Corporation?",
            options: [
              "It was identical, a single-university shell",
              "It was a federal agency, not a nonprofit",
              "It was a multi-institution consortium Penn funded and ran, founded first for neighbourhood safety, whereas Hoosier Realty was Indiana University's own dedicated land vehicle",
              "It never acquired any land",
            ],
            correctIndex: 2,
            explanation: "Parallel instrument, different structure and origin. Saying 'Penn used a shell exactly like Indiana University' overclaims.",
            sourceLessonSlug: "pa-powers-university-assembler",
          },
          {
            prompt: "The 'twin' claim between the Black Bottom and Indiana Avenue holds most strongly at the level of:",
            options: [
              "The neighbourhoods, which were identical",
              "The instrument: the same university-plus-surrogate-plus-authority machine under a 1945 blight statute",
              "The federal funding channel, which was the same",
              "The surrogate structure, which was the same",
            ],
            correctIndex: 1,
            explanation: "A twin is not a clone. The instrument is the same; the neighbourhoods, surrogates and federal channels differ, and Philadelphia adds a war-research overlay.",
            sourceLessonSlug: "pa-powers-the-twin",
          },
          {
            prompt: "Why is Philadelphia called the 'cleaner' case for proving the instrument?",
            options: [
              "Because Penn kept tidier records",
              "Because the Black Bottom was smaller",
              "Because there is no highway in the clearance, so it isolates the university-and-authority instrument with nothing to confuse the reader",
              "Because no one was displaced",
            ],
            correctIndex: 2,
            explanation: "On Indiana Avenue the interstate muddied the story; West Philadelphia's clearance was not a highway project, which isolates the variable.",
            sourceLessonSlug: "pa-powers-the-twin",
          },
          {
            prompt: "The durable method for handling a compelling historical parallel is to:",
            options: [
              "Accept it if it feels right",
              "Reject it unless it is identical in every respect",
              "Sort every claim into parallel, merely similar, or different, and cite each",
              "Average the two cases together",
            ],
            correctIndex: 2,
            explanation: "A parallel with a full strong column survives; one that dissolves into 'merely similar' in every row was a vibe.",
            sourceLessonSlug: "pa-powers-the-twin",
          },
          {
            prompt: "The MOVE bombing of 13 May 1985 must not be collapsed into the Black Bottom story because:",
            options: [
              "It happened in a different city",
              "It was not documented",
              "It shares a city and the race of the victims but nothing about the instrument: it was lethal police power in a standoff, in Cobbs Creek, in 1985, not land assembly for a university",
              "It caused no harm",
            ],
            correctIndex: 2,
            explanation: "Collapsing them hides the two entirely different mechanisms a citizen would have to confront. Mechanisms differ, and each leaves its own record.",
            sourceLessonSlug: "pa-powers-move",
          },
          {
            prompt: "What official record documents the MOVE bombing, and what did it conclude?",
            options: [
              "A university dissertation, which found no fault",
              "The Philadelphia Special Investigation Commission report of 6 March 1986, which called dropping a bomb on an occupied rowhouse 'unconscionable' and the tactics 'grossly negligent'",
              "A police internal memo, never released",
              "There is no official record",
            ],
            correctIndex: 1,
            explanation: "Because there is a commission report, the event is documentable rather than only remembered, and the course points learners to the report itself.",
            sourceLessonSlug: "pa-powers-move",
          },
          {
            prompt: "What tone does the course require for the MOVE bombing?",
            options: [
              "Vivid, cinematic retelling",
              "Accountability: who decided, what body reviewed it, what it concluded, told with restraint because survivors and relatives are living and children died",
              "Neutrality that avoids naming any wrongdoing",
              "Celebration of the investigation",
            ],
            correctIndex: 1,
            explanation: "There is no lesson in the flames; the lesson is that a city produced an official finding against itself. Tone is accountability, not spectacle.",
            sourceLessonSlug: "pa-powers-move",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 4 · Now  (beat 4: observation and evidence)
    //
    // The 360 tour for this corridor has not been captured yet, and a Wanderlearn tour embed URL is
    // authoritative external data that must never be guessed (plans/future/04-wanderlearn-360-
    // boundary.md). So this lesson ships as `virtual_tour` with NO contentUrl: the player renders
    // the "no media yet" notice above the body, and the body is the observation brief the learner
    // uses when the tour lands. Drop the URL in and re-seed. Copies the ia-now-tour pattern.
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "pa-now-tour",
      title: "12 · Now: walk University City (360 tour, forthcoming)",
      section: "Section 4 · Now",
      lessonType: "virtual_tour",
      body: `**The 360 tour for this lesson is forthcoming.** It is not here yet, and the notice above this text is telling you the truth rather than reporting a fault. This course was written before the tour was captured, on purpose: the site template this series uses treats beat 4 as a drop-in, so a course is complete and teachable without it and the tour is added later without restructuring anything.

**Read this lesson now anyway.** It is your observation brief. Beat 4 asks one question, "what is actually there today," and the difference between a tourist looking at a campus and a researcher looking at a campus is entirely a matter of knowing what to look for before you arrive. **Work through this list now, then run it against the tour when it lands.**

## What to look for, in order

**1. Read the building type first, before any plaque.** You learned in Section 2 that a research park is addressed to the institution and a rowhouse to the sidewalk. **Walk the Market Street blocks between roughly 34th and 38th and ask of each frontage: does this face the street with front doors, or does it face a plaza, a lobby, or a parking structure?** The answer tells you what kind of ground you are standing on more reliably than any sign.

**2. Find the seam.** Somewhere the research-park fabric meets surviving older rowhouse blocks, north toward Powelton or at the western edge near 40th. **That seam is the edge of the clearance, and it has a date.** Note where it runs, because it is the line between what was taken and what was not.

**3. Count what faces the university and what faces away.** *Indiana Avenue* taught you that a gap where a historic building should be has four meaningful answers: a newer building, a surface lot, a lawn or plaza, or a road. **Run that same inventory here.** Each is a different decision with a different record behind it.

**4. Look for the name, not just the buildings.** Signage, banners, and building names will say "University City" and "Science Center." **The renaming you studied in Section 2 is still doing work on every sign.** Note where the word "University City" appears and whether any marker anywhere says "Black Bottom." As of recent reporting, descendants were still asking the city for exactly such a sign.

**5. Read who is on the street.** This is a working district of students, researchers, workers, and residents of the surrounding blocks. **Describe people as they would describe themselves, or do not describe them.** A 360 tour is a photograph of strangers in a public place, and the ethics of writing about it are the ethics of writing about neighbours.

**6. Look for what is being built right now.** Construction fencing, a zoning notice, a leasing banner, a public-meeting sign. **Every one of those is a live document with a case number**, and Section 5 teaches you how to look them up in the city's own Atlas.

## What the tour cannot show you

- **It cannot show you a date.** Every change you notice happened at a time, and the tour has no clock. Beat 3 gave you the dates; beat 5 gives you the record.
- **It cannot show you an owner.** A building's occupant is not its owner, and neither is on the facade. The parcel record has it.
- **It cannot show you absence.** You cannot photograph a demolished rowhouse or the family that lived in it. **Everything the tour does not contain is a question for Section 5, not an answer.**

**Write down your five most confident observations before the tour arrives, based on this brief and on the map lesson that follows. Then check them.** Being wrong on the record about a place you had not yet seen is a better teacher than being right about one you had.

## Sources
- Bond, M. (2023, June 8). *Black Bottom Tribe fights for a sign of their lost community in West Philly*. WHYY. https://whyy.org/articles/as-building-boom-continues-in-west-philly-black-bottom-tribe-fights-for-a-sign-of-the-community-they-lost/
- Puckett, J. L. (n.d.-a). *The University City Science Center and the Black Bottom*. West Philadelphia Collaborative History, University of Pennsylvania Graduate School of Education. https://collaborativehistory.gse.upenn.edu/stories/university-city-science-center-and-black-bottom`,
      recallContent: [
        {
          prompt: "Why is this lesson published before its 360 tour exists?",
          answer: "Because the site template treats beat 4 as a drop-in: a course is complete and teachable with the other five beats, and the tour is added later without restructuring anything. The body is the observation brief in the meantime.",
        },
        {
          prompt: "What is 'the seam,' and why does it matter?",
          answer: "The line where the research-park fabric meets surviving older rowhouse blocks. It is the edge of the clearance, it has a date, and it marks what was taken versus what was not.",
        },
        {
          prompt: "What are the four meaningful answers when you find a gap where a historic building should be?",
          answer: "A newer building, a surface lot, a lawn or plaza, or a road. Each is a different decision with a different record behind it.",
        },
        {
          prompt: "Name three things a 360 tour cannot show you.",
          answer: "A date, an owner, and absence. You cannot photograph a demolished rowhouse or the family that lived in it, so everything missing from the tour is a question for the records rather than an answer.",
        },
      ],
    },
    {
      slug: "pa-map",
      title: "13 · Map: one clearance, and the campuses that ran it",
      section: "Section 4 · Now",
      body: `**Read this before you touch the map, because the map's limits are a lesson in themselves.**

**This platform's lesson map draws the whole world.** A marker is a fixed-size dot on a world projection, which means two points need to be roughly two degrees apart, on the order of 200 kilometres, before they separate visually. **The Black Bottom and the MOVE site are about four miles apart, and this map cannot separate them.** So this map cannot show you West Philadelphia block by block, and pretending otherwise would be a worse lesson than admitting it. That the two Philadelphia decisions collapse into one dot is, itself, the visual form of the warning lesson 10 gave you: they are close together and they are not the same thing.

**The right map for a parcel question is not a world map.** It is **Atlas**, the City of Philadelphia's official property map at atlas.phila.gov, where you can enter an address and read parcel boundaries, ownership, assessment, zoning, and permits (City of Philadelphia, n.d.-a). **Choosing the right scale of map for your question is a research skill**, and Section 5 puts you to work in Atlas directly.

**So this map does the job it can do well.** It places the Black Bottom clearance in the pattern of institutional land-taking it belongs to, and it marks where the records live.

**Blue: the Black Bottom / University City**, plotted at an approximate point on the Market Street corridor. Its detail carries the before and after in one paragraph.

**Violet: the MOVE bombing site in Cobbs Creek**, plotted at an approximate point on the residential block, deliberately not at an exact house number, because people live there now. It is a **different** West Philadelphia decision, and it has its own color so you never file it under the clearance.

**Amber: four campuses where a university or institution drove neighbourhood clearance or conflict.** These are here to stop you reading Philadelphia as a local misfortune. **A university assembling land through a redevelopment authority was a national program, not a Penn peculiarity**, and these markers are leads to verify in each city's own records, not findings this course has proven.

**Green: two record repositories.** The City of Philadelphia's own files, where the blight certification and Redevelopment Authority records for Unit 3 live, and the Penn University Archives, which hold the Science Center's planning papers. **Knowing where a record physically lives is part of knowing that it exists.**

**Coordinates on this map are approximate points, not surveyed building locations.** Do not use them to find an address. Use them to see the shape of the pattern, and use Atlas or the Office of Property Assessment when you need a parcel.

**What this map cannot show, and neither could the last one.** It cannot show absence, and it cannot show intent. Every marker exists because something was recorded. **The amber cities are the ones written about, which is a fact about scholarship as well as about universities.** How many campus clearances are not on this map is a question this course cannot answer and will not guess at.

## Sources
- City of Philadelphia. (n.d.-a). *Atlas*. https://atlas.phila.gov/
- Puckett, J. L. (n.d.-a). *The University City Science Center and the Black Bottom*. West Philadelphia Collaborative History, University of Pennsylvania Graduate School of Education. https://collaborativehistory.gse.upenn.edu/stories/university-city-science-center-and-black-bottom
- Tomek, B. C. (n.d.-b). *MOVE*. Encyclopedia of Greater Philadelphia, Rutgers University. https://philadelphiaencyclopedia.org/essays/move/`,
      mapContent: {
        markers: [
          {
            id: "pa-black-bottom",
            lat: 39.956,
            lng: -75.1935,
            title: "Black Bottom / University City, Philadelphia, Pennsylvania",
            color: "#1d4ed8",
            description:
              "The subject of this course. A working-class, predominantly African American neighbourhood in West Philadelphia, about 78 percent non-white in the 1960 census of the future Science Center blocks. Certified as blighted and cleared as University Redevelopment Area Unit 3: the Redevelopment Authority condemned the properties in 1966 and demolished them in 1967 and 1968, with about 2,653 people known to have been displaced from Unit 3 and roughly 78 percent of them African American. The land became the University City Science Center, the nation's first urban research park, developed by a coalition led by the University of Pennsylvania through the West Philadelphia Corporation.",
          },
          {
            id: "pa-move",
            lat: 39.9583,
            lng: -75.2447,
            title: "Cobbs Creek (MOVE bombing site, 1985), Philadelphia, Pennsylvania",
            color: "#6d28d9",
            description:
              "A DIFFERENT West Philadelphia decision, plotted at an approximate point on the block rather than at a house number because the block is residential today. On 13 May 1985 Philadelphia police dropped an explosive from a helicopter onto a rowhouse on the 6200 block of Osage Avenue; the fire was allowed to burn, eleven people died including five children, and more than 60 homes were destroyed. The Philadelphia Special Investigation Commission called it 'unconscionable' in its 1986 report. This is municipal police power in a standoff, not university land assembly. Its own color keeps it from being filed under the Black Bottom clearance.",
          },
          {
            id: "pa-indiana-avenue",
            lat: 39.7745,
            lng: -86.1665,
            title: "Indiana Avenue, Indianapolis, Indiana",
            color: "#b45309",
            description:
              "The twin, and the prerequisite course. Indiana University assembled land through Hoosier Realty Corporation while the Indianapolis Redevelopment Commission used blight and eminent domain, under a 1945 Indiana blight law. The same instrument as West Philadelphia, running with an interstate nearby that muddied the popular story. Philadelphia is the cleaner case because it has no highway.",
          },
          {
            id: "pa-lower-hill",
            lat: 40.4432,
            lng: -79.9857,
            title: "Lower Hill District, Pittsburgh, Pennsylvania",
            color: "#b45309",
            description:
              "Same state, same 1945 Urban Redevelopment Law. The Lower Hill was cleared for the Civic Arena in one of the most-cited urban-renewal displacements in the country, and the postwar 'Pittsburgh Renaissance' was the template other cities copied. A lead to verify: Pittsburgh is where much of the playbook Philadelphia and Indianapolis used was first run.",
          },
          {
            id: "pa-hyde-park",
            lat: 41.7897,
            lng: -87.5997,
            title: "Hyde Park, Chicago, Illinois",
            color: "#b45309",
            description:
              "The University of Chicago's role in the Hyde Park-Kenwood urban renewal of the 1950s and 1960s is the other canonical case of a university steering a redevelopment authority. A lead to verify in Chicago's own records, and a reminder that the West Philadelphia machine was a national program, not a Penn peculiarity.",
          },
          {
            id: "pa-morningside",
            lat: 40.8075,
            lng: -73.9626,
            title: "Morningside Heights, New York, New York",
            color: "#b45309",
            description:
              "Columbia University's planned gymnasium in Morningside Park set off the 1968 campus and community protests, a case of institutional expansion into a Black neighbourhood's shared ground. Not identical to a redevelopment-authority clearance, which is the point of sorting parallel from merely similar; included as a lead so the pattern is not read as unique to Penn.",
          },
          {
            id: "pa-city-records",
            lat: 39.9526,
            lng: -75.1652,
            title: "City of Philadelphia records (Planning Commission and Redevelopment Authority)",
            color: "#15803d",
            description:
              "Where the instruments left their documents. The City Planning Commission certifies blight and the Redevelopment Authority acquires and clears, both under the 1945 Urban Redevelopment Law, and both keep public files. The blight certification and redevelopment records for Unit 3 are municipal records you can request. The MOVE Commission's 1986 report is a City of Philadelphia record as well.",
          },
          {
            id: "pa-penn-archives",
            lat: 39.9522,
            lng: -75.1932,
            title: "University of Pennsylvania University Archives, Philadelphia, Pennsylvania",
            color: "#15803d",
            description:
              "Holds the Science Center planning papers and the university's own account of the 1959 to 1971 redevelopment, and hosts the West Philadelphia Collaborative History project. This marker sits almost on top of the Black Bottom marker, which the map cannot separate at world scale, a fitting reminder that the archive of a clearance often sits on the ground it cleared.",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 5 · Next  (beat 5: live civics. current agreements, PILOTs, and a real parcel)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "pa-next-pilots",
      title: "14 · The live question: what does the university owe the block?",
      section: "Section 5 · Next",
      body: `Beat 5 turns a history course into a civics course. **Every site has a present legal status and a live argument running over it right now**, and finding those is a research skill rather than an opinion. On Indiana Avenue the live question was an unadopted area plan. In West Philadelphia the live question is money: **what a tax-exempt university owes the city whose ground it expanded onto.**

**Start with the four questions, in this order.** They work for any American parcel.
1. **What does the comprehensive plan say this land should become?**
2. **What does the zoning permit today?**
3. **What is the live civic argument over this ground?**
4. **Who decides, when do they meet, and is the record public?**

**Question 1: the comprehensive plan.** Philadelphia's comprehensive plan is **Philadelphia2035**, adopted by the **Philadelphia City Planning Commission** in 2011, with a Citywide Vision and 18 District Plans. University City falls under the **University/Southwest District Plan** (Philadelphia City Planning Commission, n.d.-b). **A comprehensive plan is not zoning.** It is the policy statement that rezonings are judged against, which is why a rezoning hearing so often becomes an argument about what the plan says.

**Question 2: zoning.** Zoning in Philadelphia is administered through the Department of Planning and Development, and you can read any parcel's zoning in Atlas (City of Philadelphia, n.d.-a). **A comprehensive plan says what should be; zoning says what may be built today.** Learn to check both, because they often disagree, and the disagreement is where development fights happen.

**Question 3: the live argument, and this is where West Philadelphia is loud right now.** The University of Pennsylvania, as a nonprofit, **pays no property tax** on a real-estate portfolio valued in the billions (Hechinger Report, 2020). For years, students, faculty, teachers and activists have pressed Penn to pay **PILOTs, payments in lieu of taxes**, voluntary contributions that many universities in other cities make to the local government in place of the property taxes they are exempt from. In **November 2020**, Penn announced it would give the **School District of Philadelphia 100 million dollars over ten years, about 10 million dollars a year**, directed at environmental remediation such as asbestos and lead in school buildings (Hechinger Report, 2020; WHYY, 2020).

**Now read the argument on both sides, because beat 5 is about the argument, not about who is right.**
- **Penn's contribution is real money and the largest private gift in the School District's history** (WHYY, 2020).
- **Critics call it a donation, not a PILOT**, because it is time-limited, directed by the giver, and far below what property tax on the portfolio would yield. Some have called for Penn to pay about 40 percent of its notional tax bill, which they estimate near 40 million dollars a year, roughly four times what Penn pledged (Hechinger Report, 2020).

**Why this is the right beat-5 question for this course specifically.** Section 3 established that a university expanded onto a cleared Black neighbourhood using public instruments and federal money. **The PILOT fight is the present-tense continuation of the same relationship**: an institution that grew by public means, now exempt from the tax that funds the schools of the city it grew in. You do not have to decide the fight to see that it is the same relationship at a later date, which is exactly the move *Indiana Avenue* made when it showed the district was cleared under one electorate and governed since under another.

**Question 4: who decides, and when.** The **City Planning Commission** adopts the comprehensive plan and its district plans; **City Council** legislates zoning and approves major redevelopment; the PILOT question is a matter of negotiation and public pressure rather than a single vote. All of these meet in public and keep public records. **A live argument means the meetings are still happening**, which is where a citizen has leverage.

**The honest limits of this lesson.** Dollar figures, pledges and plans change, and every number above has a source and a date attached. **Re-check all of them before you rely on any of them.** That instruction is not a disclaimer, it is the method.

## Sources
- City of Philadelphia. (n.d.-a). *Atlas*. https://atlas.phila.gov/
- Hechinger Report. (2020, December 9). *Activists question whether wealthy universities should be exempt from property taxes*. https://hechingerreport.org/activists-question-whether-wealthy-universities-should-be-exempt-from-property-taxes/
- Philadelphia City Planning Commission. (n.d.-b). *The comprehensive plan (Philadelphia2035)*. City of Philadelphia. https://www.phila.gov/programs/the-comprehensive-plan/
- WHYY. (2020, November 20). *The story behind Penn's $100 million pledge to Philly schools*. https://whyy.org/episodes/the-story-behind-penns-100-million-pledge-to-philly-schools/`,
      recallContent: [
        {
          prompt: "What are the four questions to ask about any parcel's future, in order?",
          answer: "What does the comprehensive plan say it should become; what does the zoning permit today; what is the live civic argument over this ground; and who decides, when do they meet, and is the record public.",
        },
        {
          prompt: "What is Philadelphia's comprehensive plan, who adopts it, and which district covers University City?",
          answer: "Philadelphia2035, adopted by the Philadelphia City Planning Commission in 2011, with a Citywide Vision and 18 District Plans. University City falls under the University/Southwest District Plan. A comprehensive plan is policy, not enforceable zoning.",
        },
        {
          prompt: "What is a PILOT, and what did Penn pledge in November 2020?",
          answer: "A payment in lieu of taxes: a voluntary contribution a tax-exempt institution makes in place of property tax. In November 2020 Penn pledged the School District of Philadelphia 100 million dollars over ten years, about 10 million a year, for environmental remediation such as asbestos and lead.",
        },
        {
          prompt: "Summarise the two sides of the PILOT argument.",
          answer: "Penn's pledge is real money and the largest private gift in the district's history. Critics call it a donation, not a PILOT, because it is time-limited, giver-directed, and far below the roughly 40 million a year some estimate a fair share would be, about four times the pledge.",
        },
        {
          prompt: "Why is the PILOT fight the right beat-5 question for this course?",
          answer: "Because it is the present-tense continuation of the same relationship Section 3 established: a university that grew onto a cleared Black neighbourhood by public means and federal money is now exempt from the tax that funds the city's schools. Same relationship, later date.",
        },
      ],
    },
    {
      slug: "pa-next-exercise-parcel",
      title: "15 · Practice: look up a real parcel",
      section: "Section 5 · Next",
      lessonType: "exercise",
      body: `**This drill is the whole of beat 5 in miniature, and you should do it with the real tools open in another tab.** Everything below is free and public.

**The two tools.**
- **Atlas**, the City of Philadelphia's official property map: https://atlas.phila.gov/ . Enter an address and read parcel boundaries, ownership, the Office of Property Assessment value, zoning, deeds, and permits, all in one place (City of Philadelphia, n.d.-a).
- **The Office of Property Assessment (OPA) property search**: https://property.phila.gov/ . Search by address or OPA account number and read the public assessment record (City of Philadelphia, n.d.-b).

**Your target: 3401 Market Street, Philadelphia**, the University City Science Center building that a City Council ordinance granted to the Science Center on January 12, 1965 (University of Pennsylvania University Archives, n.d.). It is a documented, institution-occupied address on the cleared Unit 3 ground, which makes it a safe place to practise: it is a public-facing building, its address is in the public record, and you are not exposing anyone's home.

**Work through these, then answer the questions below.**
1. Find **3401 Market Street** in Atlas and look at the parcel outline and its footprint. Compare it in your mind to a rowhouse lot: **an institutional parcel and a rowhouse lot are different sizes, and that difference is the clearance made visible.**
2. Read off the **OPA account number**. Write it down exactly.
3. Find the **owner of record**, the **assessed value**, and, if shown, the building's **use or category**.
4. Compare the **owner of record** to the organisation that operates the building. **They may not match, and if they do not, that is normal and it is a finding**, exactly as the surrogate-nonprofit lesson predicted.
5. In Atlas, read the parcel's **zoning**, then ask whether that zoning matches what the University/Southwest District Plan says the area should be. **A plan and a zoning code that disagree is where a development fight lives.**
6. Walk the parcel a block in each direction along Market Street and count how many neighbouring parcels are **institutionally owned**. That count is the footprint of the campus that replaced the neighbourhood.

**The habits this builds, which transfer to any American city.** The names of the tools change from city to city and the facts do not: **parcel or account number, owner of record, assessed value, and the zoning versus the plan.** Learn to find those four and you can research any address in the country. Philadelphia calls its map Atlas and its assessor the OPA; Indianapolis called them MapIndy and the Marion County Assessor. Same four facts.

**One rule you do not get to break.** **Do not run this drill on somebody's home and publish the result.** A parcel record is public, and a current occupant's name attached to their address in a piece of writing is a different thing from a public record sitting in a city database. Practise on institutional and commercial addresses. This is the same rule *The Green Book* applied to tourist homes and *Indiana Avenue* applied to parcels, and it is the same restraint the MOVE lesson used in refusing to pin an exact house on the map.

## Sources
- City of Philadelphia. (n.d.-a). *Atlas*. https://atlas.phila.gov/
- City of Philadelphia. (n.d.-b). *Property search (Office of Property Assessment)*. https://property.phila.gov/
- University of Pennsylvania University Archives. (n.d.). *History of the University City Science Center: Approval process, displacement, protests, and PR disaster, 1965-1971*. https://archives.upenn.edu/exhibits/penn-history/science-center/part-3/`,
      exercise: {
        instructions:
          "Type the missing term, name, number, body or year, then check. Close answers (spelling, capitalization) count as 'close', not wrong.",
        items: [
          {
            prompt: "The City of Philadelphia's official property map, where you read parcels, ownership, zoning and permits, is called ___.",
            answer: "Atlas",
            accept: ["atlas", "phila atlas", "atlas.phila.gov"],
            explanation: "At atlas.phila.gov. Enter an address to read parcel boundaries, ownership, assessment, zoning, deeds and permits.",
          },
          {
            prompt: "The Philadelphia office that publishes a parcel's public assessment record is the Office of ___ ___ (abbreviated OPA).",
            answer: "Property Assessment",
            accept: ["property assessment", "opa"],
            explanation: "The OPA property search at property.phila.gov is searchable by address or OPA account number.",
          },
          {
            prompt: "The four facts to pull for any parcel are parcel or account number, owner of record, assessed value, and the ___ versus the plan.",
            answer: "zoning",
            accept: ["zoning code", "zoning designation"],
            explanation: "A comprehensive plan says what should be; zoning says what may be built today. Where they disagree is where development fights live.",
          },
          {
            prompt: "The safe practice address in this drill is ___ Market Street, a Science Center building on cleared Unit 3 ground.",
            answer: "3401",
            accept: ["3401 market street", "3401 market"],
            explanation: "A City Council ordinance granted the Science Center the building at 3401 Market Street on January 12, 1965. A documented, institution-occupied, public address.",
          },
          {
            prompt: "In Pennsylvania, the body that must certify an area as blighted before the Redevelopment Authority can act is the City ___ Commission.",
            answer: "Planning",
            accept: ["planning", "city planning"],
            explanation: "The Philadelphia City Planning Commission certifies blight; the Redevelopment Authority then acquires and clears. Two bodies, two paper trails.",
          },
          {
            prompt: "The Pennsylvania statute that created the certification-and-clearance machinery was enacted in the year ___.",
            answer: "1945",
            accept: ["1945", "45"],
            explanation: "The Pennsylvania Urban Redevelopment Law, Act of May 24, 1945, the same year Indiana passed its blight law. The most exact parallel between the two courses.",
          },
          {
            prompt: "The coalition, funded and run primarily by Penn, that controlled the Unit 3 redevelopment was the ___ ___ Corporation.",
            answer: "West Philadelphia",
            accept: ["west philadelphia", "west philly"],
            explanation: "Founded in 1959; a resident called it 'a front for the University of Pennsylvania.' The parallel to Indianapolis's Hoosier Realty Corporation, though a consortium rather than a single-university shell.",
          },
          {
            prompt: "About ___ people are known to have been displaced from University Redevelopment Area Unit 3.",
            answer: "2,653",
            accept: ["2653", "2,653"],
            explanation: "Roughly 78 percent of them African American and mostly renters. Penn's official figure for the Science Center building alone was about 666; the numbers count different areas.",
          },
          {
            prompt: "Philadelphia's comprehensive plan, adopted in 2011, is called Philadelphia ___.",
            answer: "2035",
            accept: ["2035", "philadelphia2035", "phila2035"],
            explanation: "Adopted by the City Planning Commission, with a Citywide Vision and 18 District Plans. University City sits in the University/Southwest District Plan.",
          },
          {
            prompt: "A voluntary payment a tax-exempt university makes to a city in place of property tax is called a ___ (an acronym).",
            answer: "PILOT",
            accept: ["pilot", "pilots", "payment in lieu of taxes"],
            explanation: "Penn pledged 100 million dollars over ten years to the School District in 2020; critics call it a donation rather than a true PILOT.",
          },
          {
            prompt: "The 1985 police action that this course keeps separate from the university-expansion story is the ___ bombing.",
            answer: "MOVE",
            accept: ["move"],
            explanation: "A different instrument (police power) in a different neighbourhood (Cobbs Creek), documented by the 1986 Special Investigation Commission report. Not part of the Black Bottom clearance.",
          },
          {
            prompt: "The constitutional amendment requiring just compensation for a taking is the ___ Amendment.",
            answer: "Fifth",
            accept: ["5th", "5", "five"],
            explanation: "Applied to the states through the Fourteenth Amendment. The Redevelopment Authority condemned the Unit 3 properties in 1966.",
          },
          {
            prompt: "The land the Redevelopment Authority cleared in Unit 3 was conveyed to a redeveloper, which was the University City ___ Center.",
            answer: "Science",
            accept: ["science", "science center"],
            explanation: "Take, clear, convey: a public authority acquires and clears, then conveys to a redeveloper. Here that redeveloper was the Science Center itself.",
          },
          {
            prompt: "The MOVE Commission concluded that dropping a bomb on an occupied rowhouse was ___ (one word it used).",
            answer: "unconscionable",
            accept: ["unconscionable", "grossly negligent"],
            explanation: "The Philadelphia Special Investigation Commission report of 6 March 1986. Because there is a report, the event is documentable rather than only remembered.",
          },
          {
            prompt: "A Pennsylvania blight certification expires after ___ years unless renewed.",
            answer: "20",
            accept: ["twenty", "20 years"],
            explanation: "Certification is dated and re-datable, not permanent, which makes it a public record a citizen can look up, check the age of, and comment on.",
          },
        ],
      },
    },
    {
      slug: "pa-quiz-next",
      title: "16 · Quiz: finding the live record",
      section: "Section 5 · Next",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Why is this course's map lesson city-to-city rather than block by block?",
            options: [
              "Because the Black Bottom's coordinates are unknown",
              "Because block-level maps are copyrighted",
              "Because Philadelphia forbids mapping",
              "Because the lesson map draws the whole world, so points need roughly two degrees of separation, and the Black Bottom and the MOVE site are only about four miles apart",
            ],
            correctIndex: 3,
            explanation: "That the two Philadelphia decisions collapse into one dot is the visual form of the warning that they are close together and not the same thing.",
            sourceLessonSlug: "pa-map",
          },
          {
            prompt: "What is Atlas?",
            options: [
              "A private real-estate listing site",
              "The City of Philadelphia's official property map, showing parcels, ownership, assessment, zoning and permits",
              "A historical atlas of 1960s Philadelphia",
              "A transit app",
            ],
            correctIndex: 1,
            explanation: "At atlas.phila.gov. For a parcel question it is the right-scale map, unlike the world map in the lesson.",
            sourceLessonSlug: "pa-next-exercise-parcel",
          },
          {
            prompt: "Which four facts should you pull for any parcel in any American city?",
            options: [
              "Architect, contractor, original cost, and current tenant",
              "Square footage, paint colour, roof age, and street name",
              "Parcel or account number, owner of record, assessed value, and the zoning versus the plan",
              "Zoning code only",
            ],
            correctIndex: 2,
            explanation: "The tool names change from city to city; those four facts do not. Philadelphia calls its tools Atlas and the OPA, as Indianapolis called them MapIndy and the Assessor.",
            sourceLessonSlug: "pa-next-exercise-parcel",
          },
          {
            prompt: "Why is 3401 Market Street a safe address to practise a parcel lookup on?",
            options: [
              "It is a documented, institution-occupied public building on the cleared Unit 3 ground, so no one's home is exposed",
              "It is a private residence",
              "It has no owner",
              "It is outside Philadelphia",
            ],
            correctIndex: 0,
            explanation: "A City Council ordinance granted the Science Center that building in 1965. The rule: practise on institutional and commercial addresses, never someone's home.",
            sourceLessonSlug: "pa-next-exercise-parcel",
          },
          {
            prompt: "What is Philadelphia's comprehensive plan, and how does it relate to zoning?",
            options: [
              "Philadelphia2035; it is the policy statement that rezonings are judged against, while zoning is the enforceable rule about what may be built today",
              "Philadelphia2035; it is legally binding on every owner immediately",
              "The zoning code itself",
              "A federal plan for the city",
            ],
            correctIndex: 0,
            explanation: "Adopted by the City Planning Commission in 2011, with a Citywide Vision and 18 District Plans. Where a plan and a zoning code disagree is where development fights live.",
            sourceLessonSlug: "pa-next-pilots",
          },
          {
            prompt: "What did Penn pledge to the School District of Philadelphia in November 2020?",
            options: [
              "Full property taxes on its entire portfolio",
              "100 million dollars over ten years, about 10 million a year, for environmental remediation such as asbestos and lead",
              "40 million dollars a year in PILOTs",
              "Nothing",
            ],
            correctIndex: 1,
            explanation: "Critics call it a donation rather than a true PILOT because it is time-limited, giver-directed, and below what property tax on the portfolio would yield.",
            sourceLessonSlug: "pa-next-pilots",
          },
          {
            prompt: "Why is the PILOT fight the right beat-5 question for this course?",
            options: [
              "Because Penn is the largest employer in the city",
              "Because it has nothing to do with the history",
              "Because it is the present-tense continuation of the same relationship: a university that grew onto a cleared Black neighbourhood by public means is now exempt from the tax that funds the city's schools",
              "Because it will end the property tax entirely",
            ],
            correctIndex: 2,
            explanation: "You do not have to decide the fight to see it is the same relationship at a later date, the move Indiana Avenue made about electorates.",
            sourceLessonSlug: "pa-next-pilots",
          },
          {
            prompt: "When the owner of record of a parcel does not match the organisation operating the building, that is:",
            options: [
              "An error in Atlas",
              "Illegal",
              "Impossible",
              "Normal, and a finding, exactly as the surrogate-nonprofit lesson predicted",
            ],
            correctIndex: 3,
            explanation: "Follow the entity, not the institution's name. Land is often held through a surrogate, which is why deed records do not always say what you expect.",
            sourceLessonSlug: "pa-next-exercise-parcel",
          },
          {
            prompt: "In Pennsylvania, the split of roles in the blight process is that:",
            options: [
              "The Redevelopment Authority both certifies blight and clears",
              "The City Planning Commission certifies blight and the Redevelopment Authority acquires and clears",
              "The university certifies blight",
              "The state legislature certifies each area",
            ],
            correctIndex: 1,
            explanation: "Two bodies, two public paper trails. The certification is also dated and expires after 20 years unless renewed.",
            sourceLessonSlug: "pa-powers-certification",
          },
          {
            prompt: "The Black Bottom clearance and the MOVE bombing share:",
            options: [
              "The same instrument and the same body",
              "A city and the race of the victims, but not the instrument, the body, the neighbourhood, or the decade",
              "The same year",
              "The same beneficiary",
            ],
            correctIndex: 1,
            explanation: "One is land assembly by a redevelopment authority in the 1960s; the other is lethal police power in a 1985 standoff in Cobbs Creek. Different mechanisms, different records.",
            sourceLessonSlug: "pa-powers-move",
          },
          {
            prompt: "Why does the map plot the MOVE site at an approximate point rather than an exact house number?",
            options: [
              "Because the address is unknown",
              "Because the block is residential today and people live there now, so the course does not pin the exact house",
              "Because the map cannot hold precise coordinates",
              "Because the event is disputed",
            ],
            correctIndex: 1,
            explanation: "The same restraint as refusing to publish a current resident's name with their address: accountability, not exposure.",
            sourceLessonSlug: "pa-map",
          },
          {
            prompt: "Why do the amber markers show four other campuses?",
            options: [
              "To pad the map",
              "Because they are the four largest US universities",
              "To show that a university steering a redevelopment authority was a national program, not a Penn peculiarity, offered as leads to verify",
              "Because each has a Green Book listing",
            ],
            correctIndex: 2,
            explanation: "Indianapolis, Pittsburgh, Chicago's Hyde Park and Columbia's Morningside Heights are leads in each city's own records, not findings this course has proven.",
            sourceLessonSlug: "pa-map",
          },
          {
            prompt: "Why does this course publish a virtual_tour lesson before the tour URL exists?",
            options: [
              "Because the tour was cancelled",
              "Because the platform requires a placeholder",
              "Because the tour is optional and will never be added",
              "Because beat 4 is a drop-in: a site course is complete and teachable with the other five beats, and the body serves as the observation brief meanwhile",
            ],
            correctIndex: 3,
            explanation: "A tour embed URL is authoritative external data and is never guessed, so the lesson ships with the notice and the brief and the URL drops in on a re-seed.",
            sourceLessonSlug: "pa-now-tour",
          },
          {
            prompt: "What is 'the seam' the observation brief tells you to find on the corridor?",
            options: [
              "A street renamed after a donor",
              "The line where the research-park fabric meets surviving older rowhouse blocks, which is the dated edge of the clearance",
              "The border between two ZIP codes",
              "A crack in the pavement",
            ],
            correctIndex: 1,
            explanation: "The seam marks what was taken versus what was not, and it has a date you can research.",
            sourceLessonSlug: "pa-now-tour",
          },
          {
            prompt: "The instruction to re-check every date and dollar figure in the live-civics lesson is:",
            options: [
              "A disclaimer to avoid liability",
              "The method: plans, pledges and figures change, and each has a source and date attached for exactly that reason",
              "A sign the sources are unreliable",
              "Optional",
            ],
            correctIndex: 1,
            explanation: "Beat 5 is live civics, so its facts have shelf lives. Re-checking is the skill, not a caveat.",
            sourceLessonSlug: "pa-next-pilots",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 6 · Write  (beat 6: ELA and creative nonfiction, grounded in the place)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "pa-write-assignment",
      title: "17 · Your assignment: write one block",
      section: "Section 6 · Write",
      lessonType: "assignment",
      body: `Beat 6 asks a question no other beat can: **what can only be said about this place?** Answering it is a writing problem, and this assignment is a real one.

## The assignment
Write **900 to 1,300 words** of creative nonfiction about **one block, one building, or one address** in the Black Bottom / University City, or about **the comparison itself** between West Philadelphia and Indiana Avenue. Every factual sentence must be checkable against a source you name. **The form is literary; the standard of evidence is the one Section 3 used.**

## Step 1 · Choose one thing, and choose small
Pick a single parcel from your Atlas lookup in lesson 15, a single building such as the Science Center at 3401 Market, a single institution such as the West Philadelphia Corporation, or the single comparative claim that the Black Bottom is Indiana Avenue's twin. **Smaller is better.** "West Philadelphia" is not a subject, it is a topic. "3401 Market Street, granted to the Science Center by a 1965 ordinance, standing on ground that held 429 dwelling units in 1960" is a subject.

If you do not live in Philadelphia and cannot visit, that is not a disqualification. **It is a constraint you disclose in the piece**, and it changes what you can honestly claim.

## Step 2 · Build the four-column chronology before you write a sentence
*Indiana Avenue* killed a good argument with a table, and this course sorted a twin claim with three columns. Build your own, with these columns: **date, event, instrument, source.** If the instrument column is empty for an event, you have a story and not yet a documented decision. **The table is the outline.**

## Step 3 · Decide what kind of piece this is
Pick one and commit, because mixing them is what makes place writing mushy.
- **A biography of a building.** Its type, its uses, its owners, what stood on its ground before it.
- **A history of a decision.** One certification, one condemnation, one conveyance, followed to the document.
- **A comparison.** The twin claim, sorted honestly into parallel, similar and different, the way lesson 9 did it.
- **A report on a present.** The PILOT fight, a zoning notice, a public meeting, the missing Black Bottom marker.
- **A piece about the record itself.** What you could and could not find, which of the five displacement figures you used and why, and what the gap means.

**The last is the hardest and often the best**, and it is the only one that can be written honestly with thin sources.

## Step 4 · Write it, under these craft rules
1. **Lead with a specific.** A street number, a statute date, a census count. Not a mood.
2. **Name the instrument every time you name a loss.** "The block was cleared" is weak. "The Planning Commission certified it blighted and the Redevelopment Authority condemned it in 1966" is strong, if you can source it.
3. **Give a figure its owner and its scope.** Not "thousands were displaced" but "2,653 people were known to have been displaced from Unit 3, roughly 78 percent African American." And name which of the five figures you chose.
4. **Attribute a frame as a frame.** If you use a charged phrase, mark it as an argument with an author, not as a finding you narrate. The distinction between a documented chronology and an interpretive frame is the most important thing in this section.
5. **Sort a comparison; do not assert one.** If you compare Philadelphia to Indianapolis, use the three columns. "Closest twin anywhere" is a claim you earn row by row, not a headline you borrow.
6. **Use the present tense for the present.** University City is a working district with a live PILOT argument, not a ruin. Write it that way.
7. **One paragraph, minimum, on what you could not establish.** Required, not optional.

## Rules you do not get to break
1. **No invented detail.** Not a date, a name, a quotation, a street number, or a statistic. **If a source does not say it, you do not write it.** This includes atmospheric invention: you do not know what the block smelled like in 1962.
2. **No composite or imagined characters.** Real, cited people only. Walter Palmer's testimony, Felton Newman's line at the hearing, the institutions named in the record: that is more than enough material.
3. **No invented dialogue**, including "she might have said."
4. **Living communities describe themselves.** Use the names and terms the people who lived and work there use, and say where you got them. The Black Bottom Tribe is organising now.
5. **Handle MOVE only with the report open, or not at all.** If your piece touches the 1985 bombing, work from the Special Investigation Commission report, keep the tone accountability rather than spectacle, and do not reproduce victim details from second-hand lists. If you cannot meet that standard within your scope, point the reader to the report and move on. **This is not optional; it is the condition of writing about it.**
6. **No ruin porn, and no lost golden age.** A neighbourhood that a university and a redevelopment authority cleared was not a paradise, and its removal was not a natural death. Both framings flatter the writer and cheat the subject.
7. **Credit what was built and who resisted.** The safe streets Palmer described, the residents who named the West Philadelphia Corporation correctly at the hearings, the students who sat in at College Hall, the descendants asking for a marker. A piece that only inventories loss is an incomplete report.
8. **Private homes are private.** Do not publish a current resident's name with their address, and do not pin the MOVE block to a house.
9. **Say what you did to a number.** If you adjusted a 1966 dollar figure for inflation, say so and say how.

## What good looks like
A short, checkable piece in which every sentence is either something you read in a named source or something you clearly mark as unresolved, and in which the prose is still good. **Those two standards do not conflict.** Two states passing a blight law in the same year, a resident telling a hearing the corporation was a front, a neighbourhood of 429 households becoming a campus with 15: **none of that needs decorating.**

## Sources
- Puckett, J. L. (n.d.-a). *The University City Science Center and the Black Bottom*. West Philadelphia Collaborative History, University of Pennsylvania Graduate School of Education. https://collaborativehistory.gse.upenn.edu/stories/university-city-science-center-and-black-bottom
- Puckett, J. L. (n.d.-b). *Collateral damage in Unit 3*. West Philadelphia Collaborative History, University of Pennsylvania Graduate School of Education. https://collaborativehistory.gse.upenn.edu/stories/collateral-damage-unit-3
- Tomek, B. C. (n.d.-b). *MOVE*. Encyclopedia of Greater Philadelphia, Rutgers University. https://philadelphiaencyclopedia.org/essays/move/`,
      recallContent: [
        {
          prompt: "What is the difference between a topic and a subject in this assignment?",
          answer: "'West Philadelphia' is a topic. '3401 Market Street, granted to the Science Center by a 1965 ordinance, on ground that held 429 dwelling units in 1960' is a subject. Smaller is better.",
        },
        {
          prompt: "What are the four columns of the chronology you build before writing, and what does an empty instrument column mean?",
          answer: "Date, event, instrument, source. An empty instrument column means you have a story rather than a documented decision.",
        },
        {
          prompt: "How must you handle a comparison such as 'closest twin anywhere'?",
          answer: "Sort it row by row into parallel, similar and different, the way lesson 9 did. It is a claim you earn, not a headline you borrow.",
        },
        {
          prompt: "What is the condition for writing about the MOVE bombing at all?",
          answer: "Work from the Special Investigation Commission report, keep the tone accountability rather than spectacle, do not reproduce second-hand victim details, and if you cannot meet that standard within scope, point the reader to the report and move on.",
        },
        {
          prompt: "Which paragraph is required in every submission?",
          answer: "At least one paragraph on what you could not establish, including which of the five displacement figures you used and why.",
        },
      ],
    },
    {
      slug: "pa-what-comes-next",
      title: "18 · What this course proved, and what it left out",
      section: "Section 6 · Write",
      body: `You have now run the six-beat site template a second time, on a second city, and used it to test a claim rather than only to tell a story. **That is the point of a second course: the template proved it travels, and the comparison proved the instrument travels.**

| Beat | What you did here | What it confirmed about the method |
|---|---|---|
| **1. Then** | Read a neighbourhood out of the census of its own clearance, and sorted five displacement figures | A count is a fact about a document; teach the disagreement rather than picking |
| **2. Built** | Read the research-park typology and the Society Hill control case | The building's fate was the variable; displacement was the constant |
| **3. Powers** | Learned certification, eminent domain and the university surrogate, and sorted the twin | The same 1945-statute machine ran in both cities; a twin is not a clone |
| **4. Now** | Built an observation brief and a map that admits its own limits | Match the tool to the question; the world map cannot see a corridor |
| **5. Next** | Found the plan, the parcel, and the live PILOT fight | The history's relationship continues in the present tense |
| **6. Write** | Wrote grounded nonfiction under an evidence standard | Publish something the next researcher can build on |

**What you can do that you could not before.**
- Confirm an instrument at a second site, and state precisely how the second case is parallel, merely similar, and different.
- Recognise that two states passing a blight law in the same year is evidence of a shared federal program, not a coincidence.
- Hold a control case (Society Hill) next to a clearance and see which variable actually moved.
- Keep two decisions in one city distinct (the Black Bottom clearance and the MOVE bombing) instead of collapsing them into a mood.
- Read a present-day fight (PILOTs) as the continuation of a documented past relationship.

**What this course deliberately did not do, and why.**
- **It did not read the Unit 3 blight certification file.** Section 3 says so in the text. The Planning Commission's certification and the Redevelopment Authority's Unit 3 project files are public records this course names and does not open. **That is the next real work**, exactly as the Indianapolis commission minutes were for course 1.
- **It did not pick a single Black Bottom displacement number.** The five figures count different things over different scopes, and manufacturing one number from them would invent a statistic.
- **It did not tell the full MOVE story.** It gave the documented count, the tone, and the report, and stopped, because survivors and relatives are living and the report is the honest source.
- **It did not settle the PILOT argument.** Beat 5 finds the live question; it does not decide it for the learner.
- **It did not prove the four amber cities.** Pittsburgh, Chicago's Hyde Park, Columbia's Morningside Heights and Indianapolis are leads to verify in each city's own records, and only Indianapolis has been worked end to end, in course 1.

**The unopened sources, which are the next real work.** The Philadelphia City Planning Commission's blight certification for Unit 3. The Redevelopment Authority's Unit 3 project files. The University of Pennsylvania trustees' minutes across the redevelopment years. The West Philadelphia Corporation's own records. **All public or requestable, and none read into this course.** If you want to make an original contribution rather than restate one, that is the list.

**One last thing about the place.** The people of the Black Bottom built a neighbourhood safe enough to walk at three in the morning, and a university built a research park on top of it using a certification, a condemnation, a federal grant, and a surrogate corporation a resident correctly called a front. **Most of the rowhouses are gone. The record of who lived in them, who took them, and under which instrument is not**, and it is sitting in a census, a set of hearings, a state statute, a planning file, and a city property database, waiting for somebody to read it properly. **That is the whole method, and it is why this course exists, and why it points at a second city to prove the first was not alone.**

## Sources
- Commonwealth of Pennsylvania. (1945). *Urban Redevelopment Law, Act of May 24, 1945, P.L. 991, No. 385*. Pennsylvania General Assembly. https://www.legis.state.pa.us/WU01/LI/LI/US/HTM/1945/0/0385..HTM
- Puckett, J. L. (n.d.-a). *The University City Science Center and the Black Bottom*. West Philadelphia Collaborative History, University of Pennsylvania Graduate School of Education. https://collaborativehistory.gse.upenn.edu/stories/university-city-science-center-and-black-bottom
- Puckett, J. L. (n.d.-b). *Collateral damage in Unit 3*. West Philadelphia Collaborative History, University of Pennsylvania Graduate School of Education. https://collaborativehistory.gse.upenn.edu/stories/collateral-damage-unit-3
- Tomek, B. C. (n.d.-b). *MOVE*. Encyclopedia of Greater Philadelphia, Rutgers University. https://philadelphiaencyclopedia.org/essays/move/`,
      recallContent: [
        {
          prompt: "What is the point of this being a second course rather than the first?",
          answer: "It uses the template to test a claim rather than only tell a story. The template proved it travels to a second city, and the comparison proved the instrument travels: the same university-plus-surrogate-plus-authority machine under a 1945 blight statute.",
        },
        {
          prompt: "Why is 'two states passing a blight law in the same year' treated as evidence rather than coincidence?",
          answer: "Because it is the postwar federal urban-renewal framework landing in two state legislatures at once. Indiana and Pennsylvania both passed their enabling blight statutes in 1945, which is the strongest single sign the two cities ran the same program.",
        },
        {
          prompt: "Why does the course refuse to give a single Black Bottom displacement number?",
          answer: "Because the five circulating figures count different things over different scopes, from the Science Center alone to the whole neighbourhood, and manufacturing one number from them would invent a statistic.",
        },
        {
          prompt: "Name the unopened sources that would advance this story.",
          answer: "The City Planning Commission's Unit 3 blight certification, the Redevelopment Authority's Unit 3 project files, the University of Pennsylvania trustees' minutes from the redevelopment years, and the West Philadelphia Corporation's own records. All public or requestable, none read into this course.",
        },
      ],
    },
    // <<< APPEND NEXT SECTION ABOVE THIS LINE >>>
  ],
};
