// Authored "What They Built: Black Business Districts" — a cited, high-school-and-up course on
// Learn.WitUS (Culture & History), and the FIRST course of the POSITIVE TRACK planned in
// plans/44-parallel-history-and-timelines.md Part 1.
//
// Prerequisite: `green-book-how-to-read-a-route` teaches the METHOD (read a listing, chain a
// route, research an address forward). This course applies that reading discipline to a different
// class of record: business records, charters, insurance filings, city directories and
// designation nominations.
//
// WHY THIS COURSE EXISTS (the structural argument, from plans/44)
// --------------------------------------------------------------
// The route series now runs to fourteen courses about clearance, exclusion and boundary-drawing.
// Each is sourced and each refuses to flatten its subject. But the SHAPE OF THE CATALOGUE could
// still leave a learner concluding that this history is only things done to people. That is false.
// The fix is structural rather than tonal: a course that teaches WHAT WAS BUILT, on its own terms,
// as achievement, using the firms' own records.
//
// THE DESIGN RULE, which is the ethical spine of the file
// ------------------------------------------------------
// NEVER USE A POSITIVE TO SOFTEN A NEGATIVE. "Greenwood prospered" is not a counterweight to
// "Greenwood was destroyed", and a course that implies it is doing apologetics. The correct claim
// is narrower and stronger: BOTH WERE HAPPENING, AT THE SAME TIME, IN THE SAME COUNTRY, OFTEN TO
// THE SAME PEOPLE. Teach co-occurrence. Do not editorialise it into balance, uplift, or a moral
// about resilience. Lesson 1 states this rule to the learner in plain language, before any
// content, so they know what they are and are not being shown. Lesson 17 is the payoff.
//
// Sourcing discipline (the load-bearing part of this file):
//   * Every teaching lesson carries APA 7 in-line citations and a `## Sources` bibliography.
//   * PRIMARY WHERE POSSIBLE. Du Bois's 1912 World's Work essay on Durham is quoted from the
//     DocSouth transcription and supplies the course's best numbers: fifteen grocery stores,
//     $11,000 paid-in bank capital, $17,000 deposited by 500 persons. Institutional secondary
//     sources (NCpedia, New Georgia Encyclopedia, Encyclopedia Virginia, the Oklahoma Historical
//     Society, the Tulsa City-County Library, Virginia DHR, the National Park Service, the City of
//     Chicago landmarks record, the NC Department of Natural and Cultural Resources marker essay)
//     carry the rest.
//   * NO INVENTED STATISTIC, PERSON, QUOTATION, ADDRESS OR FIRM. Where accounts disagree the
//     course gives the competing values WITH their owners: NC Mutual's 1898 vs 1899 founding, the
//     Consolidated merger's 1929 vs 1930 date, Standard Life's 1911 vs 1913, Douglass National's
//     1922 vs 1923 and first vs second national charter, and the origin of "Black Wall Street".
//   * CLAIMS THAT DID NOT SURVIVE CHECKING WERE CUT AND THE CUT IS TAUGHT. Lesson 16 works the
//     Greenwood dollar-circulation figure (19, 36 or 100 times, depending on the retelling, with
//     no primary source behind any of them) as a worked example of a claim to refuse.
//   * These communities and their descendants are living and self-documenting. Register is
//     RESPECT AND SPECIFICITY: no triumphalism, no tragedy framing, no "resilience" moral.
//
// House rule: NO em-dashes or en-dashes in prose. Verbatim cited titles inside a `## Sources`
// block are the only place a dash survives.

import type { AuthoredCourse } from "./authored-course";

export const WHAT_THEY_BUILT_COURSE: AuthoredCourse = {
  title: "What They Built: Black Business Districts",
  description:
    "A cited, high-school-and-up course on Black business districts as economies rather than as backdrops to their own destruction: Parrish Street and Hayti in Durham, Jackson Ward in Richmond, Sweet Auburn in Atlanta, Greenwood in Tulsa, and Bronzeville in Chicago. You will read them the way you would read any local economy, out of business records, charters, insurance filings, city directories and National Register nominations: which firms existed, what they sold, who capitalised them, and what the numbers do and do not support. The centre of the course is the question nobody teaches, which is an economics question and not a sentimental one: how do you finance a business district when banks will not lend to you? The answer runs through fraternal orders, industrial insurance, building and loan associations and a generation of chartered banks, and it is documented down to the dollar in places. The course also states its own rule out loud and holds to it: a positive is never used to soften a negative. What was built and what was taken were happening at the same time, in the same country, often to the same people, and this course teaches the co-occurrence without editorialising it into balance. Prerequisite: The Green Book: How to Read a Route.",
  lessons: [
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 1 · Read a district  (what a business district IS, and where its numbers live)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "wtb-the-rule",
      title: "1 · What this course is for, and the rule it runs on",
      section: "Section 1 · Read a district",
      body: `**Start with the prerequisite.** This course assumes you have finished *The Green Book: How to Read a Route*. That course taught a method: open a digitized edition, read a listing down to its abbreviations and its silences, chain listings into a route, read a gap as evidence, and research an address forward to what stands there now. **This course keeps the discipline and changes the record.** Instead of a travel guide you will read charters, insurance filings, city directories, business surveys and National Register nominations, and you will ask an economist's question about a place rather than a traveller's.

**What this course is about.** Black business districts, taught as economies. Not as scenery, not as a prologue to their own removal, and not as a mood. Which firms existed. What they sold. Who put up the money. What the books say. Where the record is thin and where it is unusually good.

**Why the course exists, stated plainly.** There is a shelf of careful courses about clearance, exclusion, redlining, condemnation and highway alignment. Every one of them is sourced. But a shelf has a shape, and a learner who reads six of those in a row could reasonably come away believing that this history **is** the history of things done to people. **That is false, and the correction is not a cheerful sentence added to the end of a hard lesson.** The correction is a whole course that teaches the other thing on its own terms, with its own evidence, at the same standard. This is that course.

## The rule this course runs on

**Never use a positive to soften a negative.**

Read that again, because it governs every page that follows and it is the reason this course can be trusted.

**"Greenwood prospered" is not a counterweight to "Greenwood was destroyed."** A course that puts those two sentences in the same paragraph with a "but" between them is not teaching history. It is doing apologetics, and it is insulting to the people whose property was burned.

**The correct claim is narrower and much stronger: both were happening, at the same time, in the same country, often to the same people.** That is called **co-occurrence**, and it is a claim about a calendar. It is not a claim about balance, and it does not net out. Nothing in the achievement column subtracts anything from the harm column. They are not the same column.

**So here is what you are and are not being shown.**

| You ARE being shown | You are NOT being shown |
|---|---|
| What was built, with the records that prove it | An argument that what was built makes up for what was taken |
| Firms, charters, capital, premiums, deposits, buildings | A moral about resilience, or a story about spirit |
| Where the record disagrees with itself | A tidy narrative that hides the disagreement |
| The calendar, so you can see two things running at once | A ledger where the columns cancel |

**One more thing this course refuses to do.** It will not write about these districts as vanished golden ages. Several of them are functioning neighbourhoods with residents, business associations and planning processes running right now, and one of the institutions in this course is in the middle of a corporate transaction this quarter. **The past tense is a research choice, not a default**, and this course uses the present tense whenever the present is what is true.

## The two questions you will be able to answer

1. **How do you read a business district out of a record?** Which records, in what order, and what each one can and cannot prove.
2. **How do you capitalise a business district when banks will not lend to you?** This is the least taught and most interesting part of the whole subject, it is a genuine economics problem, and people solved it. Section 4 is nothing but that.

**A note on register, which is a research instruction and not a courtesy.** The people in this course have living descendants, and the institutions in it have successors that publish their own histories. Describe them the way they describe themselves. **No triumphalism and no tragedy framing.** The register is respect and specificity: a name, a date, a figure, and where you got it.

## Sources
- Du Bois, W. E. B. (1912, January). The upbuilding of black Durham: The success of the Negroes and their value to a tolerant and helpful Southern city. *The World's Work, 23*, 334-338. https://docsouth.unc.edu/nc/dubois/dubois.html
- Walker, J. E. K. (2009). *The history of Black business in America: Capitalism, race, entrepreneurship* (2nd ed.). University of North Carolina Press.
- Baradaran, M. (2017). *The color of money: Black banks and the racial wealth gap*. Belknap Press of Harvard University Press.`,
    },
    {
      slug: "wtb-what-a-district-is",
      title: "2 · What a business district is, and how to read one",
      section: "Section 1 · Read a district",
      body: `Before you read five of them, get the definition right, because the popular definition is wrong in a way that will cost you.

**The popular definition is a picture: a busy street, awnings, a theatre, a crowd.** That is a photograph of a district, not a description of one. Photographs are evidence of a moment. **A district is a claim about a system**, and systems are proved with lists.

**The working definition this course uses.** A business district is a bounded piece of ground on which enough firms operate that a resident can meet ordinary needs inside it. The test is not glamour. **The test is completeness.**

**Here is the test applied, using the single best primary source in this course.** In January 1912 W. E. B. Du Bois published an essay on Black Durham in *The World's Work*. He does not describe a mood. He counts.

> There are, for instance, among the colored people of the town fifteen grocery stores, eight barber shops, seven meat and fish dealers, two drug stores, a shoe store, a haberdashery, and an undertaking establishment. (Du Bois, 1912)

Read that list the way an economist would. **Groceries and meat and fish are daily needs. Barbers are weekly. A drug store is episodic and requires a licensed pharmacist. A shoe store and a haberdashery are discretionary, which means somebody in the district had money left over after necessities.** And the undertaking establishment is the tell that closes the argument: **a district that can bury its own dead is not a shopping street, it is a complete civic economy.**

Du Bois then adds the layer above retail: "black Durham has in addition to this developed five manufacturing establishments which turn out mattresses, hosiery, brick, iron articles, and dressed lumber" (Du Bois, 1912). **That is a district that makes things and not only sells them**, which is a different and rarer claim.

**The four layers to look for in any district.** Use this as a checklist and you will never again mistake a photograph for an economy.

| Layer | What it looks like | Why it matters |
|---|---|---|
| **1. Daily retail** | Groceries, meat, bread, coal | Proves residents can live inside the boundary |
| **2. Services and trades** | Barbers, tailors, cobblers, cleaners, garages | Proves recurring local income, not one-time spending |
| **3. Professions** | Doctors, dentists, pharmacists, lawyers, undertakers | Proves licensure, training and a client base that can pay fees |
| **4. Capital and institutions** | Banks, insurers, building and loans, press, churches, orders | Proves the district can FINANCE itself, which is the whole ballgame |

**Layer 4 is the one this course is really about**, and it is the layer that popular retellings drop. A district with layers 1 to 3 and no layer 4 is a shopping strip that depends entirely on outside credit. **A district with layer 4 is an economy.**

**Now the hard part, which is what these districts were up against.** Every one of the five districts in this course existed because of exclusion and in spite of it, at the same time. Segregation created a captive local market, which is a business advantage, and it simultaneously cut that market off from wholesale credit, insurance, wholesale suppliers, white customers and the professional networks that ordinary firms use. **Both effects are real and they run in opposite directions.** Any account that gives you only one of them is selling you something.

**Two errors to avoid from here on, both of which are common in published writing about these places.**

1. **The catalogue error.** Listing famous names (a theatre, a hotel, a bandleader) and calling that a district. Fame is not distribution. **A district is proved by the boring firms**, the cobblers and the coal dealers, because those are the ones that prove people lived their whole lives inside the boundary.
2. **The eulogy error.** Writing about the district only in the past tense, in an elegiac register, as though its ending were the point of its existence. **A firm that traded for forty years is a forty-year fact.** How it ended is a separate fact with separate evidence.

**One caution about the word district itself.** It has a legal meaning as well as a common one. When you read "Jackson Ward Historic District" or "Black Metropolis-Bronzeville District" you are reading a **designated boundary drawn by a preservation agency in a specific year**, not the boundary the community used. Section 6 works that distinction properly. For now: **when you see the word, ask who drew the line and in what year.**

## Sources
- Du Bois, W. E. B. (1912, January). The upbuilding of black Durham: The success of the Negroes and their value to a tolerant and helpful Southern city. *The World's Work, 23*, 334-338. https://docsouth.unc.edu/nc/dubois/dubois.html
- Walker, J. E. K. (2009). *The history of Black business in America: Capitalism, race, entrepreneurship* (2nd ed.). University of North Carolina Press.
- Drake, S. C., & Cayton, H. R. (1945). *Black metropolis: A study of Negro life in a Northern city*. Harcourt, Brace.`,
      recallContent: [
        {
          prompt: "State this course's governing rule in one sentence.",
          answer: "Never use a positive to soften a negative. What was built is not a counterweight to what was taken; the claim is only that both were happening at the same time, in the same country, often to the same people.",
        },
        {
          prompt: "What is the difference between co-occurrence and balance?",
          answer: "Co-occurrence is a claim about a calendar: two things ran at once. Balance implies the columns cancel. They do not. Nothing in the achievement column subtracts from the harm column.",
        },
        {
          prompt: "Which prerequisite course does this one build on, and what carries over from it?",
          answer: "The Green Book: How to Read a Route. The reading discipline carries over: read the record down to its abbreviations and its silences, read a gap as evidence, and research forward to now. The record changes from a travel guide to business records.",
        },
        {
          prompt: "Name the two questions this course promises you will be able to answer.",
          answer: "How to read a business district out of a record, and how to capitalise a business district when banks will not lend to you.",
        },
      ],
    },
    {
      slug: "wtb-the-records",
      title: "3 · Where the numbers come from",
      section: "Section 1 · Read a district",
      body: `You cannot count a district you cannot find. This lesson is the record list, in the order a working researcher uses it, with what each source can and cannot prove.

**1. The city directory.** Published annually, organised by name and often by street and by trade. Directories are how most of the business counts you will meet in this course were produced. The Tulsa City-County Library's Greenwood exhibit, for example, publishes a 1921 breakdown down to **41 grocery and meat markets, 30 restaurants, 11 boarding and rooming houses, 9 billiard halls and 5 hotels** (Tulsa City-County Library, n.d.).
- **Proves:** a firm was listed at an address in a year.
- **Does not prove:** that the firm was Black owned, that it was still open, or that every firm was listed. Directories were compiled by canvassers and by subscription, and coverage was uneven.

**2. The charter.** A bank or an insurance company is created by an act or a filing with a named authority on a named date. These are the hardest dates in this whole subject because a legislature or a corporations office wrote them down. Mechanics and Farmers Bank in Durham was **chartered by the North Carolina General Assembly on February 25, 1907 and began operations on August 1, 1908** (NCpedia, n.d.-b). The Savings Bank of the Grand Fountain in Richmond was **chartered March 2, 1888 by the Virginia General Assembly and opened April 3, 1889** (Encyclopedia Virginia, n.d.-a).
- **Proves:** a legal entity existed, from a date, under a named authority.
- **Does not prove:** that it opened, traded, or succeeded. **A charter date and an opening date are different facts and they are routinely confused.** Watch for it.

**3. Insurance filings and annual statements.** Insurers report premiums, reserves and assets to a state insurance department. This is why the insurance companies in this course have better numbers attached to them than the restaurants do.
- **Proves:** money, at a date, in a regulated format.
- **Does not prove:** anything about the firms the insurer's investments financed, unless you read the investment schedules.

**4. Contemporary published studies.** Du Bois's 1912 essay on Durham is one. Booker T. Washington's *Durham, North Carolina, a City of Negro Enterprises*, published in *The Independent* on **March 30, 1911** after a 1910 visit, is another (North Carolina Department of Natural and Cultural Resources, 2023).
- **Proves:** what an identified author counted or was told, in a year.
- **Does not prove:** a neutral survey. **Both of those essays are arguments.** Du Bois's is explicitly an argument about why Durham worked, and you will meet that argument in lesson 7.

**5. The National Register nomination.** When a district is nominated for listing, somebody writes a document with a boundary, a period of significance, a count of contributing buildings and a bibliography. **These are the most useful single documents in American local history and almost nobody reads them.**
- **Proves:** what a preservation professional could document about surviving fabric at the time of nomination.
- **Does not prove:** what existed. **A nomination measures survival, which is a different variable.**

**6. The acquisition and demolition roll.** When a redevelopment agency or a highway department takes a district, it must identify and pay for what it takes. So it counts. Durham's freeway and urban renewal project ended with **4,057 households and 502 businesses demolished** (Facing South, 2020).
- **Proves:** how much there was, at the moment of taking, because the agency had a legal reason to be accurate.
- **This is the uncomfortable one, and it needs saying plainly.** **A clearance record is often the most complete inventory that survives of what was built.** That is a fact about record keeping, and noticing it is not the same as approving of it. The number 502 is a census of Black Durham business, produced by the process that ended it.

**7. The firm's own record.** Company histories, annual reports, press releases and, for anything still trading, regulatory filings. In July 2026 the holding companies of two Black-owned banks announced a merger in a press release with a deal value, an asset total and a closing quarter in it (Banking Dive, 2026). **A press release is a primary source about what a company chose to say on a date.**

## The one habit that separates good work from bad

**Give every figure an owner, a date and a scope.** Not "Greenwood had 108 businesses" but "**the Tulsa City-County Library's exhibit, drawing on 1921 directory data, counts 108 Black-owned businesses in Greenwood, alongside 33 professionals, 24 skilled craftspeople and 26 service workers**" (Tulsa City-County Library, n.d.). The second version is longer and it is the only one you can defend.

**And when two sources disagree, keep both.** You will do this repeatedly in this course, starting in the next section, because the record genuinely disagrees with itself about founding years, first-ness claims and merger dates. **Reporting the disagreement is the finding. Picking one silently is the error.**

## Sources
- Banking Dive. (2026, July 22). *Black-owned banks Optus, M&F to merge*. https://www.bankingdive.com/news/optus-mf-carolina-black-owned-banks-merge-105-million-mdi-cdfi/826017/
- Du Bois, W. E. B. (1912, January). The upbuilding of black Durham: The success of the Negroes and their value to a tolerant and helpful Southern city. *The World's Work, 23*, 334-338. https://docsouth.unc.edu/nc/dubois/dubois.html
- Encyclopedia Virginia. (n.d.-a). *Grand Fountain of the United Order of True Reformers*. https://encyclopediavirginia.org/entries/grand-fountain-of-the-united-order-of-true-reformers/
- Facing South. (2020, June 10). *The bitter history behind the highways occupied by protesters*. https://www.facingsouth.org/2020/06/bitter-history-behind-highways-occupied-protesters
- NCpedia. (n.d.-b). *Mechanics and Farmers Bank*. https://www.ncpedia.org/mechanics-and-farmers-bank
- North Carolina Department of Natural and Cultural Resources. (2023, December 20). *Black Wall Street (G-116)*. https://www.dncr.nc.gov/blog/2023/12/20/black-wall-street-g-116
- Tulsa City-County Library. (n.d.). *Black Wall Street*. https://www.tulsalibrary.org/black-wall-street`,
      recallContent: [
        {
          prompt: "What is the test for whether a place is a business district, and why is it not glamour?",
          answer: "Completeness. Enough firms operate inside the boundary that a resident can meet ordinary needs there. A photograph proves a moment; a list proves a system.",
        },
        {
          prompt: "Name the four layers of a district, and say which one this course is really about.",
          answer: "Daily retail, services and trades, professions, and capital and institutions. Layer four, capital and institutions, is the one this course is about and the one popular retellings drop.",
        },
        {
          prompt: "Why does Du Bois's mention of an undertaking establishment close the argument about Durham?",
          answer: "A district that can bury its own dead is not a shopping street. It is a complete civic economy, covering the last need a resident has.",
        },
        {
          prompt: "What are the catalogue error and the eulogy error?",
          answer: "The catalogue error is listing famous names and calling that a district; the boring firms prove it instead. The eulogy error is writing only in the past tense, in an elegiac register, as though the ending were the point.",
        },
        {
          prompt: "When you read the word 'district' in a designation name, what should you immediately ask?",
          answer: "Who drew the line, and in what year. A designated boundary is a preservation agency's decision, not the boundary the community used.",
        },
      ],
    },
    {
      slug: "wtb-quiz-reading",
      title: "4 · Quiz: reading a district",
      section: "Section 1 · Read a district",
      quiz: {
        passingScore: 70,
        // 15-question bank served 8 at a time with shuffled options, so a retake is a different
        // quiz rather than the same list (the repo standard, src/lib/quiz.ts).
        questionsPerAttempt: 8,
        shuffleOptions: true,
        questions: [
          {
            prompt: "This course's governing rule is:",
            options: [
              "Balance every hard fact with an encouraging one so learners are not discouraged by the material",
              "Always end a lesson on an achievement",
              "Never use a positive to soften a negative",
              "Report only the achievements and leave the harm to other courses",
            ],
            correctIndex: 2,
            explanation: "A positive is never a counterweight to a negative. The claim the course makes is co-occurrence, not balance.",
            sourceLessonSlug: "wtb-the-rule",
          },
          {
            prompt: "Co-occurrence, as this course uses the word, is a claim about:",
            options: [
              "Whether the good in a period outweighed the bad in that period",
              "An average across the whole period under study",
              "A moral",
              "A calendar",
            ],
            correctIndex: 3,
            explanation: "Two things ran at the same time. That is all the claim says, and it does not net out.",
            sourceLessonSlug: "wtb-the-rule",
          },
          {
            prompt: "Why is the shape of a course catalogue a problem the plan calls structural rather than tonal?",
            options: [
              "Because course descriptions and catalogue blurbs are written by marketing staff rather than by the people who author the lessons",
              "Because a learner who takes six clearance courses in a row could conclude this history is only things done to people",
              "Because catalogues are sorted alphabetically",
              "Because tone is subjective",
            ],
            correctIndex: 1,
            explanation: "No cheerful sentence inside those courses fixes it. The fix is a whole course that teaches what was built on its own terms, at the same evidence standard.",
            sourceLessonSlug: "wtb-the-rule",
          },
          {
            prompt: "The test for whether a place is a business district is:",
            options: [
              "Fame",
              "Completeness",
              "The number of theatres and nightclubs it contained at its documented peak",
              "Whether enough photographs of it survive in a public archive to reconstruct the street",
            ],
            correctIndex: 1,
            explanation: "Enough firms operate inside the boundary that a resident can meet ordinary needs there. A photograph proves a moment; a list proves a system.",
            sourceLessonSlug: "wtb-what-a-district-is",
          },
          {
            prompt: "In Du Bois's 1912 count of Black Durham, which single item most strongly proves a complete civic economy?",
            options: [
              "The eight barber shops",
              "The haberdashery",
              "The undertaking establishment",
              "The fifteen grocery stores that served the surrounding residential blocks",
            ],
            correctIndex: 2,
            explanation: "A district that can bury its own dead covers the last need a resident has. That is an economy, not a shopping street.",
            sourceLessonSlug: "wtb-what-a-district-is",
          },
          {
            prompt: "Which of the four layers of a district does this course say popular retellings usually drop?",
            options: [
              "Layer 4, capital and institutions",
              "Layer 1, daily retail",
              "Layer 2, services and trades",
              "Layer 3, the licensed professions such as medicine, dentistry and law",
            ],
            correctIndex: 0,
            explanation: "Banks, insurers, building and loans, press, churches and orders are what let a district finance itself, and they are the layer usually left out.",
            sourceLessonSlug: "wtb-what-a-district-is",
          },
          {
            prompt: "Segregation's two effects on these districts ran in opposite directions. They were:",
            options: [
              "Higher rents and lower wages",
              "A captive local market, and being cut off from credit, insurance and suppliers",
              "Rising property values inside the boundary and falling values immediately outside it, which pushed firms to relocate",
              "Better transport links and worse schooling",
            ],
            correctIndex: 1,
            explanation: "One effect is a business advantage and the other is a structural handicap. An account that gives you only one is selling you something.",
            sourceLessonSlug: "wtb-what-a-district-is",
          },
          {
            prompt: "The catalogue error is:",
            options: [
              "Listing famous names and calling that a district",
              "Miscounting the entries in a city directory",
              "Using a bibliography that is out of date",
              "Failing to alphabetise a list of firms before publishing it",
            ],
            correctIndex: 0,
            explanation: "Fame is not distribution. The boring firms, the cobblers and coal dealers, are what prove people lived their whole lives inside the boundary.",
            sourceLessonSlug: "wtb-what-a-district-is",
          },
          {
            prompt: "A city directory listing proves that:",
            options: [
              "A firm was listed at an address in a year",
              "A firm was Black owned",
              "Every firm on the street was captured by the canvasser that year",
              "The firm was still trading at the end of the year covered by the directory",
            ],
            correctIndex: 0,
            explanation: "Directories were compiled by canvassers and by subscription, so coverage was uneven and ownership was rarely stated.",
            sourceLessonSlug: "wtb-the-records",
          },
          {
            prompt: "Mechanics and Farmers Bank was chartered on February 25, 1907 and began operations on August 1, 1908. The lesson is:",
            options: [
              "One of the two dates must be wrong",
              "A charter date and an opening date are different facts, routinely confused",
              "Banks in this period always opened the year after they were chartered",
              "The North Carolina General Assembly took more than a year to process the bank's paperwork that session",
            ],
            correctIndex: 1,
            explanation: "A charter proves a legal entity exists from a date. It does not prove the institution opened, traded or succeeded.",
            sourceLessonSlug: "wtb-the-records",
          },
          {
            prompt: "A National Register nomination is an excellent source, but it measures:",
            options: [
              "Survival",
              "Ownership",
              "The total number of firms that ever traded in the district",
              "How important the district was during its documented period of significance",
            ],
            correctIndex: 0,
            explanation: "It documents fabric that was still standing when the nomination was written, which is a different variable from what existed.",
            sourceLessonSlug: "wtb-the-records",
          },
          {
            prompt: "Durham's freeway and urban renewal project ended with 4,057 households and 502 businesses demolished. Why does this course put that figure in a lesson about SOURCES?",
            options: [
              "To show that highways were destructive",
              "Because a clearance record is often the most complete surviving inventory of what was built",
              "Because the number is disputed",
              "Because demolition permits and right of way maps are easier to find online than early city directories are",
            ],
            correctIndex: 1,
            explanation: "The agency had a legal reason to count accurately, so 502 is a census of Black Durham business produced by the process that ended it. Noticing that is not approving of it.",
            sourceLessonSlug: "wtb-the-records",
          },
          {
            prompt: "The habit this course says separates good work from bad is:",
            options: [
              "Round every figure to the nearest hundred",
              "Prefer the highest available figure, since undercounting is the more common error",
              "Give every figure an owner, a date and a scope",
              "Cite only primary sources and discard everything else",
            ],
            correctIndex: 2,
            explanation: "Not 'Greenwood had 108 businesses' but who counted it, from what, in which year, and covering what.",
            sourceLessonSlug: "wtb-the-records",
          },
          {
            prompt: "When two good sources disagree about a date, this course's instruction is to:",
            options: [
              "Use the earlier date",
              "Leave the date out of your writing entirely, since an unresolvable disagreement cannot be reported responsibly",
              "Use whichever date the institution itself publishes on its website today",
              "Keep both, with their owners, because reporting the disagreement is the finding",
            ],
            correctIndex: 3,
            explanation: "Picking one silently is the error. You will do this repeatedly from the next section on.",
            sourceLessonSlug: "wtb-the-records",
          },
          {
            prompt: "Booker T. Washington's essay on Durham and Du Bois's essay on Durham are best described as:",
            options: [
              "Neutral surveys",
              "Census reports",
              "Reports commissioned by the North Carolina General Assembly and printed at state expense",
              "Arguments by identified authors, published on known dates",
            ],
            correctIndex: 3,
            explanation: "Washington published in The Independent on March 30, 1911; Du Bois in The World's Work in January 1912. Both are making a case, and Du Bois's case is examined in lesson 7.",
            sourceLessonSlug: "wtb-the-records",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 2 · The institutions  (layer 4: what actually holds a district up)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "wtb-five-institutions",
      title: "5 · The five institutions every one of these districts had",
      section: "Section 2 · The institutions",
      body: `Look at the five districts in this course side by side and the same five institutions appear in every one of them. Not the same firms. **The same five kinds of institution**, which is a much more interesting fact, because it means people in cities that had little contact with each other independently built the same structure.

**Here they are, in the order they usually appeared.**

| # | Institution | What it actually does | Why a district cannot skip it |
|---|---|---|---|
| **1** | **The church** | Congregation, property, credit standing, meeting space | Owns real estate early, and vouches for people |
| **2** | **The fraternal order or mutual aid society** | Collects dues, pays sickness and death benefits | Turns many small payments into one pool of capital |
| **3** | **The insurance company** | Sells small policies, holds reserves, invests them | Legally required to accumulate assets, which is capital |
| **4** | **The bank or building and loan** | Takes deposits, makes loans, clears payments | Lends where nobody else will |
| **5** | **The newspaper** | Sells advertising, carries the district's own account | Makes local trade legible, and creates a public record |

**Read the "why" column again as a sequence and you have the whole argument of this course.** A church gathers people. An order turns them into a pool. An insurer turns the pool into regulated assets. A bank turns assets into loans. A newspaper turns loans into visible businesses. **That is a capital chain, and it was built from the bottom up because the top was closed.** Section 4 works it in detail.

## 2. The fraternal order, which is the one modern readers underrate most

**A fraternal benefit order is a business.** Members pay small regular dues. When a member is sick, the order pays a benefit. When a member dies, the order pays for the funeral. Between those payments the order holds money, and money held is money that can be invested.

**Read one order's balance sheet.** The Grand Fountain of the United Order of True Reformers was founded in Richmond on **January 11, 1881** by **William Washington Browne**, a formerly enslaved man, Union Army veteran, teacher and Methodist minister. By **1892 it had 765 chapters and more than 40,000 members**, and by the early 1900s it had branches in **24 states**. Members bought death-benefit certificates for **1 dollar 50 cents**, which initially paid heirs **100 dollars** and later **50 dollars**. By the early 1900s the order had **paid out more than one million dollars in death benefits** (Encyclopedia Virginia, n.d.-a).

**Now look at what that order owned**, because this is the part that turns a benefit society into an economy: **a 50-room hotel; retail stores selling groceries, farm implements and goods its own members manufactured; three farms; fourteen meeting halls; an office building at 604 to 608 North Second Street in Richmond, built in 1891; a newspaper, the *Reformer*; a 634-acre old folks home established in 1898; and a five-storey building in Washington, D.C., completed in 1902** (Encyclopedia Virginia, n.d.-a).

**That is vertical integration**, and it is the single most efficient answer to exclusion in this entire course. If white landlords will not rent you a hall, own the hall. If white newspapers will not carry your advertising, own the paper. **Every one of those assets is also collateral**, which matters enormously in Section 4.

## The other order you need to know, because it did the same thing with a different balance

The **Independent Order of St. Luke** was, when **Maggie Lena Walker** was elected its Right Worthy Grand Secretary in **1899**, facing bankruptcy. She held the post until her death in **1934**. **Over roughly 25 years of her leadership the order grew to about 100,000 members across 24 states, collected nearly 3.5 million dollars, and built reserves of about 100,000 dollars** (Encyclopedia Virginia, n.d.-b).

**On August 20, 1901, Walker stood up and announced what she intended to build: a bank, a newspaper and a department store** (Encyclopedia Virginia, n.d.-b). She then built all three. Lesson 8 follows each one, including the one that closed.

## 1, 3, 4 and 5, briefly, because each gets its own treatment later

- **The church.** Congregations bought land early, often before individual members could. A church that owns its building has a balance sheet and a credit history, and its trustees are usually the same men who later sign a bank charter. **Watch for the overlap of names between a church board and a bank board. It is almost always there.**
- **The insurance company.** Section 4 is largely about this. The short version: **an insurer is legally obliged to hold reserves against future claims, and reserves are investable capital.** That legal obligation is the machine.
- **The bank or building and loan.** The distinguishing question is not size, it is **who the lender answers to**. Lesson 15 separates them properly.
- **The newspaper.** Lesson 6.

## The honest caveat, and it belongs here rather than at the end

**Two of the institutions named in this lesson failed.** The True Reformers bank **closed on October 20, 1910** after its cashier embezzled more than **50,000 dollars** and several businesses defaulted on large unsecured loans, and the order could not pay claims; the order itself formally ceased operations in **1934** (Encyclopedia Virginia, n.d.-a).

**Report that in the same voice you report the 765 chapters.** Not as a moral, not as a twist, and above all not as the point of the story. **A 29-year run that reached 40,000 members in 24 states and built a hotel, three farms and fourteen halls is a real achievement, and it ended in an embezzlement and a bank failure. Both sentences are true and neither one edits the other.** That is the discipline this whole course is trying to teach you, applied to a case where the failure is internal rather than imposed, which is the harder case.

## Sources
- Encyclopedia Virginia. (n.d.-a). *Grand Fountain of the United Order of True Reformers*. https://encyclopediavirginia.org/entries/grand-fountain-of-the-united-order-of-true-reformers/
- Encyclopedia Virginia. (n.d.-b). *Maggie Lena Walker (1864-1934)*. https://encyclopediavirginia.org/entries/walker-maggie-lena-1864-1934/
- Du Bois, W. E. B. (Ed.). (1907). *Economic co-operation among Negro Americans*. Atlanta University Press. https://docsouth.unc.edu/church/dubois07/dubois.html
- Walker, J. E. K. (2009). *The history of Black business in America: Capitalism, race, entrepreneurship* (2nd ed.). University of North Carolina Press.`,
      recallContent: [
        {
          prompt: "Name three of the seven record types this course uses, and one thing each cannot prove.",
          answer: "Any three of: city directory (cannot prove ownership or completeness); charter (cannot prove the institution opened or traded); insurance filing (says nothing about the firms financed unless you read the investment schedules); contemporary study (is an argument, not a neutral survey); National Register nomination (measures survival, not existence); clearance roll (a taking record); the firm's own filings (what a company chose to say on a date).",
        },
        {
          prompt: "Why is a clearance or demolition roll often the best inventory of a district that survives?",
          answer: "Because the agency had a legal obligation to identify and pay for what it took, so it counted accurately. Durham's project ended with 4,057 households and 502 businesses demolished, and 502 is therefore a census of Black Durham business.",
        },
        {
          prompt: "What is the difference between a charter date and an opening date, using Mechanics and Farmers Bank?",
          answer: "The bank was chartered by the North Carolina General Assembly on February 25, 1907 and began operations on August 1, 1908. A charter proves a legal entity exists; it does not prove the institution opened or traded.",
        },
        {
          prompt: "What must accompany every figure you publish?",
          answer: "An owner, a date and a scope. Who counted it, from what, in which year, and covering what.",
        },
      ],
    },
    {
      slug: "wtb-press-and-orders",
      title: "6 · The newspaper as a business, not a mirror",
      section: "Section 2 · The institutions",
      body: `The Black press is usually taught as a voice. It was also **a firm with a payroll, a printing plant, a distribution network, an advertising rate card and a circulation figure**, and reading it that way tells you things the voice framing cannot.

**Start with why a district needs a paper at all.** Advertising is how a business tells strangers it exists. If the daily papers will not sell you display advertising, or will only run your notice in a segregated column, then **your firm is invisible to everyone outside your own block**. A district newspaper fixes that, and it does it as a commercial transaction rather than a favour.

**So a Black newspaper's advertising pages are a business directory that somebody paid to be in**, which makes them a different and in some ways better source than a city directory. **A canvasser may miss you. An advertiser paid.**

## The four papers in this course, with their numbers

**The *Chicago Defender*.** Founded in **1905** by **Robert S. Abbott**. Its circulation reached about **50,000 by 1916**, **125,000 by 1918**, and **more than 200,000 by the early 1920s**, with roughly **two thirds of sales outside Chicago** (Hauad, n.d.). It was housed at **3435 South Indiana Avenue from 1920 to 1960** (National Park Service, n.d.).

**Read that two-thirds figure carefully, because it is the most important number in this lesson.** A Chicago paper selling most of its copies outside Chicago is not a local paper. **It is a national distribution business run out of one district**, and its distribution channel was the railroad: Pullman porters carried bundles on the trains and dropped them where they stopped (Hauad, n.d.). **That is a supply chain, built out of the jobs Black men could actually get**, and it is a better example of business ingenuity than most of what gets called ingenuity.

**The *Atlanta Daily World*.** Founded as the *Atlanta World* by **W. A. Scott II on August 5, 1928**, it became the *Atlanta Daily World* in **1932**, one of the first Black daily newspapers in the country. Its offices were on **Auburn Avenue** (New Georgia Encyclopedia, n.d.-c).

**The *Chicago Bee*.** Founded by **Anthony Overton**, a manufacturer and banker, and housed in a building he put up on South State Street. **Note what that means: the same man owned the cosmetics factory, the bank, the insurance company and the newspaper that advertised them.** Sources differ on the *Bee*'s founding year, giving **1925** in some accounts and **1929** in the National Park Service's (National Park Service, n.d.). **Give the year with its source.**

**The *Reformer*.** The Grand Fountain of the United Order of True Reformers published it, bimonthly in **1893** and weekly by **1900 with a circulation of 8,000** (Encyclopedia Virginia, n.d.-a). **An order publishing its own newspaper is the clearest possible statement that the order considered itself an economy and not a club.**

## What a newspaper proves, and what it does not

| The paper says | You may conclude | You may NOT conclude |
|---|---|---|
| A firm bought a display advertisement | The firm existed and had cash for advertising | That it was successful, or Black owned |
| Circulation figures | What the publisher claimed, for advertisers | Actual readership, which was usually higher, since copies were shared |
| Editorial support for a business | The paper's editorial position | Independence, if the owner also owned the business |

**That last row is not a criticism, it is a reading instruction.** Overton's paper covering Overton's bank is exactly as reliable as any owner-covered-by-owner arrangement, which is to say: useful for facts the owner had no reason to falsify, and unusable for judgments. **The Green Book method course taught you the same skill on a different document.**

## The church and the order, in one paragraph each, because they are the other two publishers

**The church.** Denominational publishing houses printed hymnals, Sunday school material and periodicals, and Du Bois's 1907 Atlanta University study catalogues church "publications" alongside land values and assets when it measures denominations (Du Bois, 1907). **A denomination with a printing house is a manufacturer.**

**The fraternal order.** Beyond the *Reformer*, orders printed ritual books, certificates and membership records. **Those certificates are financial instruments**, and where they survive they are among the most under-used business records in American history.

## Your working habit from this lesson

When you research any firm in any of these districts, **go to the local Black newspaper first and read the advertisements, not the articles.** The articles tell you what the editor thought was important. **The advertisements tell you who had money to spend on being seen**, which is a much better proxy for what was actually operating on the street.

## Sources
- Du Bois, W. E. B. (Ed.). (1907). *Economic co-operation among Negro Americans*. Atlanta University Press. https://docsouth.unc.edu/church/dubois07/dubois.html
- Encyclopedia Virginia. (n.d.-a). *Grand Fountain of the United Order of True Reformers*. https://encyclopediavirginia.org/entries/grand-fountain-of-the-united-order-of-true-reformers/
- Hauad, V. (n.d.). *Robert S. Abbott and the Chicago Defender: Powerhouse of the Black press*. The Ohio State University. https://cpb-us-w2.wpmucdn.com/u.osu.edu/dist/1/3078/files/2012/06/Veronica-Hauad1.pdf
- National Park Service. (n.d.). *Chicago's Black metropolis: Understanding history through a historic place* [Teaching with Historic Places]. https://www.nps.gov/articles/chicago-s-black-metropolis-understanding-history-through-a-historic-place-teaching-with-historic-places.htm
- New Georgia Encyclopedia. (n.d.-c). *Atlanta Daily World*. https://www.georgiaencyclopedia.org/articles/arts-culture/atlanta-daily-world/`,
      recallContent: [
        {
          prompt: "Name the five institutions that appear in every district in this course, in the order they usually appeared.",
          answer: "The church, the fraternal order or mutual aid society, the insurance company, the bank or building and loan, and the newspaper.",
        },
        {
          prompt: "Describe the capital chain those five institutions form.",
          answer: "A church gathers people. An order turns them into a pool of dues. An insurer turns the pool into regulated reserves, which are assets. A bank turns assets into loans. A newspaper turns loans into visible businesses.",
        },
        {
          prompt: "What did the Grand Fountain of the United Order of True Reformers own besides its bank?",
          answer: "A 50-room hotel, retail stores, three farms, fourteen meeting halls, an office building on North Second Street in Richmond built in 1891, the Reformer newspaper, a 634-acre old folks home from 1898, and a five-storey building in Washington, D.C., completed in 1902.",
        },
        {
          prompt: "What three things did Maggie Lena Walker announce on August 20, 1901, and did she build them?",
          answer: "A bank, a newspaper and a department store. She built all three. The department store closed in 1911.",
        },
        {
          prompt: "How should the True Reformers bank failure of October 20, 1910 be reported?",
          answer: "In the same voice as the 765 chapters and 40,000 members. A 29-year run that built a hotel, three farms and fourteen halls is a real achievement, and it ended in an embezzlement of more than 50,000 dollars and defaulted unsecured loans. Both are true and neither edits the other.",
        },
      ],
    },
    // <<< APPEND NEXT SECTION ABOVE THIS LINE >>>
  ],
};
