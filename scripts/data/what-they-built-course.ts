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
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 3 · Five districts  (each on its own terms, with its own firms and numbers)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "wtb-durham",
      title: "7 · Durham: Parrish Street and Hayti",
      section: "Section 3 · Five districts",
      body: `Durham gets taught first because it has the best documentation, and because the best of that documentation is a primary source you can read in ten minutes.

## The four blocks and the neighbourhood

Two distinct places, routinely confused, and you should keep them apart.
- **Parrish Street**, four blocks in downtown Durham, was the **financial and office district**: insurance, banking, professional offices.
- **Hayti**, immediately south, was the **residential, retail, religious and cultural district** (North Carolina Department of Natural and Cultural Resources, 2023).

**Parrish Street held the balance sheets. Hayti held the people.** Any account that merges them will get the urban renewal history wrong, because the two were taken by different processes.

## What was on Parrish Street

**North Carolina Mutual.** The founding date is contested and you should carry both versions. **NCpedia records the company as incorporated on February 28, 1899 as the North Carolina Mutual and Provident Association**, while the company and many accounts date the founding to a meeting in **1898** (NCpedia, n.d.-a). **Give the date with its source and say which event you mean: the meeting or the incorporation.**

Three men carried it, known collectively as **the Triumvirate**: **John Merrick**, president; **Aaron M. Moore**, medical director and treasurer; and **Charles C. Spaulding**, general manager (NCpedia, n.d.-a). Merrick was a barber. Moore was a physician. **That combination matters and lesson 13 explains why.**

**Mechanics and Farmers Bank**, chartered by the North Carolina General Assembly on **February 25, 1907** and opened **August 1, 1908**. Its charter members included **Richard Fitzgerald, John Merrick, Aaron M. Moore, William G. Pearson, J. C. Scarborough, Charles C. Spaulding, J. A. Dodson and Stanford L. Warren** (NCpedia, n.d.-b). **Read that list against the insurance company's officers and you will see the overlap immediately.** Same men, second institution. That is not nepotism, it is **how a small capital base gets used twice**.

## Now read the primary source, because it is extraordinary

In January 1912 **W. E. B. Du Bois** published *The Upbuilding of Black Durham* in *The World's Work*. Here is what he counted.

| What Du Bois counted | Figure |
|---|---|
| Grocery stores | 15 |
| Barber shops | 8 |
| Meat and fish dealers | 7 |
| Drug stores | 2 |
| Shoe store, haberdashery, undertaking establishment | 1 each |
| Manufacturing establishments (mattresses, hosiery, brick, iron, dressed lumber) | 5 |
| Professional men | "a couple of dozen" |
| School teachers | 20 |
| Churches | 20 |

(Du Bois, 1912.)

**And the finances, which are the part almost nobody quotes.**
- **Mechanics and Farmers Bank:** "It has a paid-in capital of $11,000 and it has $17,000 deposited by 500 different persons" (Du Bois, 1912).
- **North Carolina Mutual and Provident Association:** "The company's business has increased from less than a thousand dollars in 1899 to an income of a quarter of a million in 1910. It has 200,000 members, has paid a half million dollars in benefits, and owns its office buildings in three cities" (Du Bois, 1912).
- **The brick yard**, run by **R. B. Fitzgerald**, could turn out **30,000 bricks a day**; the **hosiery mill**, managed by **C. C. Amey**, ran **thirteen knitting and ribbing machines at seventy dollars apiece** with a capacity of **sixty dozen men's socks a day** (Du Bois, 1912).

**Stop on the bank line, because it is the most instructive number in this course.** **17,000 dollars deposited by 500 different persons is an average of 34 dollars a person.** That is not a rich man's bank. **It is five hundred people of modest means, pooling.** The paid-in capital of 11,000 dollars is the shareholders' own money at risk. **Those two figures together are the entire economics of Section 4 in one sentence.**

## Du Bois's explanation, which is an argument and must be labelled as one

Du Bois credits three founders: "a minister with college training, a physician with professional training, and a barber who saved his money" (Du Bois, 1912). But he says the greatest factor was something else: **the disposition of ordinary white Durham to leave Black enterprise alone**, which he renders as "Hands off" and "give them a chance," and he credits the influence of Trinity College in making white Durham willing to see black Durham rise (Du Bois, 1912).

**Treat that as an interpretive frame with an author and a date, not as a finding.** It is Du Bois in 1912, writing for a white national magazine, making a case. **You may quote it and engage it. You may not launder it into your own narration as though it were established.** This is exactly the distinction the Indiana Avenue course drew about a different essay, and it is the most important habit in this whole series.

## What happened to Hayti, in the register this course uses

The **Durham Freeway**, originally the East-West Expressway and now **North Carolina Highway 147**, opened in parts from **1962** and moved slowly into the late 1960s. **By the end of the freeway and urban renewal project, 4,057 households and 502 businesses had been demolished** (Facing South, 2020).

**Read 502 as an inventory, which is how this course uses it.** It is a count of Black Durham business at the moment of taking, produced by the agency that took it. **The size of what was built is legible in the size of the record of its removal**, and both facts belong in the same paragraph without either one softening the other.

## And the present tense, because two of these institutions are still in the news

- **North Carolina Mutual.** After more than a century, **liquidation was ordered by the courts on October 11, 2022**, with liabilities exceeding assets by at least **78 million dollars** (Wikipedia contributors, 2026, as summarised from the North Carolina Department of Insurance proceedings). **Verify this one against the North Carolina Department of Insurance's own filings before you publish it.**
- **Mechanics and Farmers Bank** survived the Great Depression without closing and is still trading. On **July 22, 2026**, **Optus Financial Corporation and M&F Bancorp announced a merger** that the parties say would create the largest African American owned financial institution in the United States: roughly **1.27 billion dollars in total assets** as of **March 31, 2026**, **ten locations across North and South Carolina**, a deal valued at about **105 million dollars**, with **James Sills** of M&F to lead the combined bank and closing expected in the **fourth quarter of 2026**, subject to shareholder and regulatory approval (Banking Dive, 2026; WIS-TV, 2026).

**That is a live transaction, not a settled fact.** A merger that has been announced is a proposal with conditions on it. **Say "announced" and "expected to close", and check whether it did.**

## Sources
- Banking Dive. (2026, July 22). *Black-owned banks Optus, M&F to merge*. https://www.bankingdive.com/news/optus-mf-carolina-black-owned-banks-merge-105-million-mdi-cdfi/826017/
- Du Bois, W. E. B. (1912, January). The upbuilding of black Durham: The success of the Negroes and their value to a tolerant and helpful Southern city. *The World's Work, 23*, 334-338. https://docsouth.unc.edu/nc/dubois/dubois.html
- Facing South. (2020, June 10). *The bitter history behind the highways occupied by protesters*. https://www.facingsouth.org/2020/06/bitter-history-behind-highways-occupied-protesters
- NCpedia. (n.d.-a). *North Carolina Mutual Life Insurance Company*. https://www.ncpedia.org/north-carolina-mutual-life-insuranc
- NCpedia. (n.d.-b). *Mechanics and Farmers Bank*. https://www.ncpedia.org/mechanics-and-farmers-bank
- North Carolina Department of Natural and Cultural Resources. (2023, December 20). *Black Wall Street (G-116)*. https://www.dncr.nc.gov/blog/2023/12/20/black-wall-street-g-116
- WIS-TV. (2026, July 23). *Optus Bank, M&F Bank announce merger that would create nation's largest Black-owned bank*. https://www.wistv.com/2026/07/23/optus-bank-mf-bank-announce-merger-that-would-create-nations-largest-black-owned-bank/`,
      recallContent: [
        {
          prompt: "Why should you read a Black newspaper's advertisements before its articles when researching a firm?",
          answer: "The articles tell you what the editor thought was important. The advertisements tell you who had money to spend on being seen, which is a better proxy for what was actually operating on the street. A canvasser may miss a firm; an advertiser paid.",
        },
        {
          prompt: "What does the Chicago Defender's two-thirds out-of-town sales figure prove about the business?",
          answer: "That it was not a local paper but a national distribution business run out of one district, with Pullman porters carrying bundles on the trains as the supply chain.",
        },
        {
          prompt: "When an owner's newspaper covers the owner's bank, how do you read it?",
          answer: "As useful for facts the owner had no reason to falsify, and unusable for judgments. It is a reading instruction, not a criticism.",
        },
        {
          prompt: "What may you conclude from a firm buying a display advertisement, and what may you not?",
          answer: "You may conclude the firm existed and had cash for advertising. You may not conclude it was successful or that it was Black owned.",
        },
      ],
    },
    {
      slug: "wtb-richmond",
      title: "8 · Richmond: Jackson Ward and the Order of St. Luke",
      section: "Section 3 · Five districts",
      body: `Richmond is where the fraternal order model reached its most complete form, and it is where the best documented single act of capital formation in this course happened.

## The district

**Jackson Ward** was listed on the National Register of Historic Places on **July 30, 1976** and designated a **National Historic Landmark on June 2, 1978**, with three boundary expansions since, most recently in **2008** (Virginia Department of Historic Resources, n.d.). The Virginia Department of Historic Resources describes it as holding "one of the nation's most thriving Black business communities," with "fraternal organizations, banks, insurance companies, and other institutions, all founded and run by Blacks," and notes the district's three-bay, side-passage town houses and **the state's richest display of ornamental ironwork** in its locally manufactured cast-iron porches (Virginia Department of Historic Resources, n.d.).

**Note the architectural detail and do not skip past it.** Cast-iron porches were **manufactured locally**, which means foundries, patterns, moulders and a delivery trade. **Ornament is evidence of a supply chain.**

## The first bank, and the disagreement you must carry

**The Savings Bank of the Grand Fountain of the United Order of True Reformers was chartered on March 2, 1888 by the Virginia General Assembly and opened for business on April 3, 1889** (Encyclopedia Virginia, n.d.-a).

**Encyclopedia Virginia calls it "the first black-owned, black-operated financial institution to be chartered in the United States" and the second to begin operations** (Encyclopedia Virginia, n.d.-a). The reason for that careful two-part phrasing is that **the Capital Savings Bank of Washington, D.C. opened on October 17, 1888**, five months before the True Reformers bank opened its doors, although it was chartered later.

**So which was first?** **Both, depending on what you are measuring**, and the honest sentence names the measure: **first chartered** is one bank, **first to open** is the other. **This is not a technicality. It is the difference between a legal fact and an operational fact**, and Section 1 warned you that these get confused.

## Maggie Lena Walker, and the most checkable act of capital formation in this course

**Maggie Lena Walker** was born in Richmond on **July 15, 1864** and died **December 15, 1934**. She joined the Independent Order of St. Luke in **1881**, established its juvenile branch in **1895**, and was elected **Right Worthy Grand Secretary in 1899**, a post she held until her death (Encyclopedia Virginia, n.d.-b).

**She took over an order facing bankruptcy.** Over roughly 25 years, the order reached about **100,000 members across 24 states**, collected nearly **3.5 million dollars**, and built reserves of about **100,000 dollars** (Encyclopedia Virginia, n.d.-b).

**On August 20, 1901 she announced the plan: a bank, a newspaper and a department store.** Then she executed it.

| The plan | What she built | Dates |
|---|---|---|
| A newspaper | The *St. Luke Herald* | Began operating 1902 |
| A bank | The Saint Luke Penny Savings Bank | Chartered July 28, 1903; opened November 1903 |
| A department store | The Saint Luke Emporium | Opened April 1905; closed 1911 |

(Encyclopedia Virginia, n.d.-b.)

**Walker was the first Black woman to charter a bank in the United States** and served as its president until **1929** (Library of Congress, n.d.). Some accounts add that the bank took in more than **9,000 dollars in deposits on its first day**; carry that figure with its source rather than as common knowledge.

## The store that closed, which is the most honest paragraph in this course

**The Saint Luke Emporium opened in April 1905 and closed in 1911, and Encyclopedia Virginia gives two causes at once: organised opposition from white retailers, and reluctance among Black consumers to shop there** (Encyclopedia Virginia, n.d.-b).

**Both halves. Write both halves.** A course that reports only the white retailers' campaign is telling a comfortable story about an external enemy. A course that reports only the consumer reluctance is telling an uglier and equally incomplete one. **The record says both, and a six-year run that ended for two reasons at once is exactly the kind of fact this course exists to teach properly.**

## What happened to the bank, and the second disagreement

The bank merged with other Richmond Black banks to form the **Consolidated Bank and Trust Company**. **Encyclopedia Virginia dates the merger to 1930 and describes it as a merger with two other banks** (Encyclopedia Virginia, n.d.-b). **Other accounts describe a two-stage process: St. Luke merged with Second Street Savings in late 1929, and Commercial Bank and Trust folded into the consolidated entity about two years later.**

**Neither version is obviously wrong and this course does not pick one.** When you write about it, say which version you used and where you got it.

Consolidated was, at the time of its purchase in **2005**, the oldest continuously African American operated bank in the United States (Encyclopedia Virginia, n.d.-b).

## And the district itself

**In the late 1950s the Richmond-Petersburg Turnpike, now Interstate 95, was built through Jackson Ward.** That is the taking, it is documented, and it belongs on the calendar in lesson 17 next to the 1888 charter and the 1903 bank. **It does not cancel them and they do not cancel it.**

## Sources
- Encyclopedia Virginia. (n.d.-a). *Grand Fountain of the United Order of True Reformers*. https://encyclopediavirginia.org/entries/grand-fountain-of-the-united-order-of-true-reformers/
- Encyclopedia Virginia. (n.d.-b). *Maggie Lena Walker (1864-1934)*. https://encyclopediavirginia.org/entries/walker-maggie-lena-1864-1934/
- Library of Congress. (n.d.). *Maggie L. Walker, first Black woman to charter a bank* [Research guide]. https://guides.loc.gov/this-month-in-business-history/november/maggie-l-walker-first-black-woman-to-charter-a-bank
- National Park Service. (n.d.). *Maggie L. Walker National Historic Site*. https://www.nps.gov/mawa/index.htm
- Virginia Department of Historic Resources. (n.d.). *Jackson Ward Historic District (127-0237)*. https://www.dhr.virginia.gov/historic-registers/127-0237/`,
      recallContent: [
        {
          prompt: "What were the two distinct districts in Durham, and why must you keep them apart?",
          answer: "Parrish Street, four downtown blocks of insurance, banking and professional offices, and Hayti immediately south, the residential, retail, religious and cultural district. They were taken by different processes, so merging them gets the urban renewal history wrong.",
        },
        {
          prompt: "Quote or paraphrase Du Bois's 1912 figures for Mechanics and Farmers Bank, and say what they show.",
          answer: "A paid-in capital of 11,000 dollars and 17,000 dollars deposited by 500 different persons. That is an average of 34 dollars a person, so it is not a rich man's bank but five hundred people of modest means pooling.",
        },
        {
          prompt: "Who were Durham's Triumvirate, and what did each do?",
          answer: "John Merrick, a barber, president; Aaron M. Moore, a physician, medical director and treasurer; and Charles C. Spaulding, general manager.",
        },
        {
          prompt: "How should Du Bois's explanation for Durham's success be handled?",
          answer: "As an interpretive frame with an author and a date, not as a finding. He credits three founders and then credits ordinary white Durham for leaving Black enterprise alone. Quote it and engage it; do not launder it into your own narration.",
        },
        {
          prompt: "What is the current status of the two Durham institutions in this lesson?",
          answer: "North Carolina Mutual's liquidation was ordered on October 11, 2022. Mechanics and Farmers Bank is still trading, and on July 22, 2026 its holding company announced a merger with Optus Financial expected to close in the fourth quarter of 2026, subject to approvals.",
        },
      ],
    },
    {
      slug: "wtb-atlanta",
      title: "9 · Atlanta: Sweet Auburn",
      section: "Section 3 · Five districts",
      body: `Auburn Avenue is the district with the best single sentence attached to it and the most interesting founding transaction.

## The name and the claim

**"Sweet Auburn" was coined by John Wesley Dobbs**, a civic leader and the neighbourhood's unofficial mayor, to mark the avenue's standing as a national centre of African American commerce (New Georgia Encyclopedia, n.d.-a).

**In 1956, *Fortune* magazine described Auburn Avenue as "the richest Negro street in the world"** (New Georgia Encyclopedia, n.d.-a). **That is a quotation from a business magazine, in a year, and it is a claim about relative wealth that nobody has ever rigorously tested.** Use it the way you would use any trade-press superlative: **as evidence of reputation, not of measured wealth.** Attribute it every time.

## The founding transaction, which is worth studying on its own

**Alonzo Franklin Herndon** was born **June 26, 1858** in Walton County, Georgia and was emancipated at the age of seven in **1865**. He opened his first barbershop in Jonesboro around **1878**, arrived in Atlanta in early **1883**, and by **1904** owned three Atlanta shops, the Peachtree Street one fitted with crystal chandeliers and gold fixtures (New Georgia Encyclopedia, n.d.-b).

**Then, in 1905, he bought a failing mutual aid association.** The New Georgia Encyclopedia is precise about the circumstance: **the state of Georgia had raised capital requirements for such businesses**, which is what put the association in trouble and what made it available (New Georgia Encyclopedia, n.d.-b). Herndon incorporated it as the **Atlanta Mutual Insurance Association with assets of 5,000 dollars**.

**Read that as a business school case and it is remarkable.** A regulatory change destroys a category of small mutual aid associations. **A barber with cash buys one of the casualties and runs it as a real insurance company.** He is not a beneficiary of the rule and he is not a victim of it. **He is the person who was liquid at the moment the rule bit**, and that is a repeatable observation about how ownership changes hands under regulation.

**By 1922 the association's assets had grown to over 400,000 dollars**, and in that year it was reorganised as the **Atlanta Life Insurance Company**, achieving **legal reserve status**, one of just five Black-owned insurance companies then to hold it (New Georgia Encyclopedia, n.d.-b).

**Legal reserve status is the technical heart of this lesson.** A legal reserve company must hold assets calculated against its future obligations, on terms a state regulator enforces. **It is expensive, it is a barrier to entry, and it is a certificate of solvency.** Only five Black-owned insurers had cleared it by 1922. **That number is small because the barrier is high, not because ambition was scarce**, and Section 4 works the point properly.

**Herndon also owned real estate: over 100 houses, a large commercial block on Auburn Avenue and an estate in Tavares, Florida, with his real estate assessed at nearly 325,000 dollars at his death on July 21, 1927.** His only child, **Norris**, succeeded him as chief executive (New Georgia Encyclopedia, n.d.-b).

## The three-legged stool

Historian **Gary Pomerantz** called Atlanta's Black finance sector a "three-legged stool," and the New Georgia Encyclopedia names the legs: **Atlanta Life**, founded by Herndon in **1905**; **Standard Life**, formed by **Heman Perry**; and **Citizens Trust Bank**, which extended credit to Black homeowners and entrepreneurs (New Georgia Encyclopedia, n.d.-a).

**Standard Life's date is disputed.** The New Georgia Encyclopedia gives **1911**; other accounts give **1913** and describe it as the first Black-owned legal reserve insurance company in Atlanta. **Carry both.**

**Citizens Trust Bank opened on Auburn Avenue on August 16, 1921**, founded by **Heman E. Perry, James A. Robinson, Thomas J. Ferguson, W. H. King and Henry Dugas**, a group known as the Fervent Five (Georgia Historical Society, n.d.). **By 1922 Perry's group of enterprises, including Standard Life, Citizens Trust and the Service Company, held 22 million dollars in insurance and 2 million dollars in assets.**

## The press and the rest of layer 4

The ***Atlanta Daily World*** was founded as the *Atlanta World* by **W. A. Scott II on August 5, 1928** and became a daily in **1932**, with offices on Auburn Avenue (New Georgia Encyclopedia, n.d.-c). **Ebenezer Baptist Church** and **Big Bethel African Methodist Episcopal Church** anchored the religious layer, and the **NAACP, the Odd Fellows, the Masons and the National Urban League** all kept offices on the avenue (New Georgia Encyclopedia, n.d.-a). Entertainment ran through the **Royal Peacock**, formerly the Top Hat Club (New Georgia Encyclopedia, n.d.-a).

**Notice that the fraternal orders kept OFFICES here rather than owning the whole district**, which is a real difference from Richmond. **The same five institutions, arranged differently.** That is what it looks like when a pattern is real rather than copied.

## Designation and the highway

**Auburn Avenue was designated a national historic landmark district in 1976**, covering about **19 acres**, and **the Downtown Connector highway bisected the street**, contributing to its decline after the civil rights era (New Georgia Encyclopedia, n.d.-a).

**Nineteen acres.** Hold that number against the avenue that *Fortune* called the richest Negro street in the world twenty years earlier. **The designated district and the working district are not the same size**, and Section 1 told you to ask who drew the line and when.

## Sources
- Georgia Historical Society. (n.d.). *Citizens Trust Bank* [Historical marker]. https://www.georgiahistory.com/ghmi_marker_updated/citizens-trust-bank/
- New Georgia Encyclopedia. (n.d.-a). *Auburn Avenue (Sweet Auburn)*. https://www.georgiaencyclopedia.org/articles/counties-cities-neighborhoods/auburn-avenue-sweet-auburn/
- New Georgia Encyclopedia. (n.d.-b). *Alonzo Herndon (1858-1927)*. https://www.georgiaencyclopedia.org/articles/business-economy/alonzo-herndon-1858-1927/
- New Georgia Encyclopedia. (n.d.-c). *Atlanta Daily World*. https://www.georgiaencyclopedia.org/articles/arts-culture/atlanta-daily-world/`,
      recallContent: [
        {
          prompt: "Which Richmond bank was chartered first, and which opened first?",
          answer: "The Savings Bank of the Grand Fountain of the United Order of True Reformers was chartered first, on March 2, 1888, and opened April 3, 1889. The Capital Savings Bank of Washington, D.C. opened first, on October 17, 1888. First chartered and first to open are different measures.",
        },
        {
          prompt: "What three things did Maggie Lena Walker build after her August 20, 1901 announcement, and what happened to each?",
          answer: "The St. Luke Herald newspaper, from 1902. The Saint Luke Penny Savings Bank, chartered July 28, 1903 and opened that November, which merged into Consolidated Bank and Trust around 1929 to 1930. The Saint Luke Emporium, opened April 1905 and closed 1911.",
        },
        {
          prompt: "Why did the Saint Luke Emporium close, and why must both causes be reported?",
          answer: "Organised opposition from white retailers and reluctance among Black consumers to shop there. Reporting only the first tells a comfortable story about an external enemy; reporting only the second tells an uglier and equally incomplete one. The record says both.",
        },
        {
          prompt: "Jackson Ward's cast-iron porches are described as the richest display of ornamental ironwork in Virginia. What does that prove about the local economy?",
          answer: "That the ironwork was manufactured locally, which implies foundries, patterns, moulders and a delivery trade. Ornament is evidence of a supply chain.",
        },
        {
          prompt: "What are the two competing accounts of the Consolidated Bank and Trust merger?",
          answer: "Encyclopedia Virginia dates it to 1930 as a merger of three banks. Other accounts describe two stages: St. Luke merging with Second Street Savings in late 1929, with Commercial Bank and Trust folding in about two years later. The course reports both.",
        },
      ],
    },
    {
      slug: "wtb-tulsa",
      title: "10 · Tulsa: Greenwood",
      section: "Section 3 · Five districts",
      body: `Greenwood is the district everybody has heard of, which is exactly why it is the hardest one to teach honestly. **Almost everything you already know about it came to you attached to what happened in 1921.** This lesson does what the course promised: **it reads Greenwood as an economy first**, from the directory, and it names the year 1921 in its proper place rather than as a frame around everything.

## The city Greenwood grew inside

Tulsa was small and then it was not. **Its population ran 1,390 in 1900, 18,182 in 1910 and 72,075 in 1920**, and by 1920 the city hosted **over 400 petroleum companies** (Oklahoma Historical Society, n.d.). **The Greenwood District held about 11,000 residents in 1920** (Oklahoma Historical Society, n.d.).

**That is an oil boom town, and a boom town is a specific economic environment**: wages are high, labour is short, housing is scarce, and money moves. **Greenwood was not built in a quiet place. It was built inside one of the fastest growing local economies in the country**, which is part of why it grew as fast as it did.

**The legal environment was equally specific.** Oklahoma's first legislative action upon statehood, **Senate Bill One**, formalised segregation between African Americans and whites throughout the state (Oklahoma Historical Society, n.d.). **Both facts at once: a boom, and a statute.**

## The founder, and the land transaction

**O. W. Gurley** came to Oklahoma during the **1889 Land Run**, moved to Tulsa in **1906**, and **purchased 40 acres along the Frisco railroad tracks in north Tulsa**, where he built a rooming house and other structures (Oklahoma Historical Society, n.d.). He sold to Black buyers.

**Forty acres, bought and subdivided, is the origin of the district**, and it is the plainest example in this course of the fifth capital strategy in Section 4: **when you cannot borrow to build, buy the land and sell it to people who cannot buy land anywhere else.**

## The 1921 directory, read as an economy

The Tulsa City-County Library's Black Wall Street exhibit publishes a breakdown of Greenwood in **1921**. **Read it as layers, the way lesson 2 taught you.**

| Layer | Count | Detail |
|---|---|---|
| **Businesses** | **108** | 41 grocery and meat markets, 30 restaurants, 11 boarding and rooming houses, 9 billiard halls, 5 hotels |
| **Professionals** | **33** | 15 physicians and surgeons, 6 real estate, loan and insurance agents, 4 pharmacists, 3 lawyers, 2 dentists |
| **Skilled crafts** | **24** | 10 tailors, 5 building contractors and painters, 4 shoemakers |
| **Service workers** | **26** | 12 barbers, 6 shoe shiners, 5 clothes cleaning shops |

(Tulsa City-County Library, n.d.)

**Three observations a careful reader gets from that table.**

**1. Forty-one grocery and meat markets for about 11,000 people is a high density.** That is layer 1 saturated. **A resident could buy food without leaving.**

**2. Six real estate, loan and insurance agents is the layer 4 signal.** Not a bank on this list, but **agents**: people writing insurance and arranging loans. **That is a district connected to outside capital markets through intermediaries**, which is a different structure from Durham's, where the capital institutions were locally chartered and locally owned.

**3. Fifteen physicians and surgeons is a lot for 11,000 people.** Doctors go where they can be paid. **Fifteen of them is a statement about disposable income.**

## The name, and why it needs a hedge

**"Black Wall Street" is usually attributed to Booker T. Washington**, who is said to have called Greenwood "the Negro Wall Street of America" during a visit. **The Oklahoma Historical Society hedges: "Booker T. Washington may have given Greenwood its nickname"** (Oklahoma Historical Society, n.d.), and the Tulsa City-County Library attributes the account to the author and educator **Eddie Faye Gates** (Tulsa City-County Library, n.d.).

**When two institutional sources hedge, you hedge.** Write "is often attributed to" and cite the hedge. **Do not write "Booker T. Washington named it" as though it were established**, because the sources closest to the material decline to say so.

**And note that Durham has a competing origin story for the same phrase.** North Carolina accounts date the Durham nickname to the district's national reputation, and some date the phrase itself to the **1950s** (NCpedia, n.d.-c). **Two cities, one phrase, contested attribution in both. That is a finding, and it is more interesting than either origin story.**

## 1921, named plainly and in one place

On May 31 and June 1, 1921, a white mob destroyed the district. **This course is not the course that teaches that event**, and it will not summarise it in a paragraph, because a paragraph would be an insult to the scholarship. **The Oklahoma Commission to Study the Tulsa Race Riot of 1921 was authorised by the state legislature in 1997 and submitted its report on February 28, 2001.** Read the report.

**Two business facts from the aftermath belong in this course, because they are about capital.**

1. **Tulsans filed roughly 1,400 lawsuits for over 4 million dollars in property loss**, and between **June 14, 1921 and June 6, 1922** filed riot-related claims against the city for over **1.8 million dollars**. **The city commission disallowed most of them** (Justice for Greenwood, n.d.; Tulsa Reparations Coalition, n.d.).
2. **Most insurance policies carried a riot clause excluding losses from riot and civil commotion, and insurers refused to pay** (Justice for Greenwood, n.d.).

**Read the second one as an insurance lesson, because that is what it is.** A riot exclusion is standard commercial language. **The clause was not written for Greenwood, and it destroyed Greenwood's ability to recapitalise anyway.** That is how ordinary contract terms produce extraordinary outcomes when applied to a group that ordinary institutions have already sorted out, and it is a better lesson than any amount of adjectives.

## And then it was rebuilt, which is a fact and not a consolation

**By 1942 Greenwood held 242 Black-owned and Black-operated business establishments** (Philadelphia Tribune, n.d.). That is **more than the 108 counted in 1921**.

**Say what that does and does not mean.** It means people rebuilt a district, without meaningful insurance payment or city compensation, and made it larger than before. **It does not mean the loss was made good.** The rule from lesson 1 applies at full force here: **242 in 1942 does not offset anything at all about 1921.** It is a separate fact about a later decade, and it is a real achievement that deserves to be stated as one.

**In the late 1960s, highway construction and urban renewal took much of what had been rebuilt** (Smithsonian Magazine, 2021). **That is the third thing on the same calendar.**

## Sources
- Justice for Greenwood. (n.d.). *Denial of insurance claims*. https://www.justiceforgreenwood.org/denial-of-insurance-claims/
- NCpedia. (n.d.-c). *Black Wall Street, Durham, North Carolina*. https://www.ncpedia.org/black-wall-street-durham-north-carolina
- Oklahoma Historical Society. (n.d.). *Tulsa and Black Wall Street*. https://www.okhistory.org/learn/trm1
- Philadelphia Tribune. (n.d.). *Greenwood rebuilt: Why then did it collapse?* https://www.phillytrib.com/special_sections/black_history/greenwood-rebuilt-why-then-did-it-collapse/article_fdc3ff8d-485b-5871-ab5a-3da41208794e.html
- Smithsonian Magazine. (2021). *Decades after the Tulsa race massacre, urban renewal sparked Black Wall Street's second destruction*. https://www.smithsonianmag.com/history/black-wall-streets-second-destruction-180977871/
- Tulsa City-County Library. (n.d.). *Black Wall Street*. https://www.tulsalibrary.org/black-wall-street
- Tulsa Reparations Coalition. (n.d.). *Riot property loss*. https://tulsareparations.z19.web.core.windows.net/Property.htm`,
      recallContent: [
        {
          prompt: "What was the founding transaction of Atlanta Life, and why is it worth studying?",
          answer: "In 1905 Alonzo Herndon bought a failing mutual aid association that Georgia's raised capital requirements had put in trouble, and incorporated it as the Atlanta Mutual Insurance Association with assets of 5,000 dollars. He was the person who was liquid at the moment the rule bit.",
        },
        {
          prompt: "What is legal reserve status and why does it matter that only five Black-owned insurers held it by 1922?",
          answer: "A legal reserve company must hold assets calculated against future obligations on terms a state regulator enforces. It is expensive, a barrier to entry, and a certificate of solvency. Five is small because the barrier is high, not because ambition was scarce.",
        },
        {
          prompt: "How should the 1956 Fortune quotation about Auburn Avenue be used?",
          answer: "As evidence of reputation, not of measured wealth. It is a trade-press superlative from a named magazine in a named year, and it should be attributed every time.",
        },
        {
          prompt: "Name the three legs of Atlanta's three-legged stool of Black finance, and the date dispute in one of them.",
          answer: "Atlanta Life, founded by Herndon in 1905; Standard Life, formed by Heman Perry, dated 1911 by the New Georgia Encyclopedia and 1913 by other accounts; and Citizens Trust Bank, opened August 16, 1921.",
        },
        {
          prompt: "Auburn Avenue's national historic landmark district covers about 19 acres. What should that prompt you to ask?",
          answer: "Who drew the line, and when. The designated district and the working district are not the same size, and the designation came in 1976, after the Downtown Connector bisected the street.",
        },
      ],
    },
    {
      slug: "wtb-chicago",
      title: "11 · Chicago: Bronzeville and the Black Metropolis",
      section: "Section 3 · Five districts",
      body: `Chicago is the largest of the five and the one where the capital institutions grew biggest, failed hardest, and left the most standing.

## The demand side, which is where a Northern district differs from a Southern one

**Chicago's Black population ran 323 in 1850, 955 in 1860, 3,691 in 1870, 30,050 in 1900 and 109,548 in 1920, with 148 percent growth in the single decade from 1910 to 1920** (National Park Service, n.d.). By 1930 it stood at **233,903**.

**Read those numbers as a business would.** A district whose customer base grows 148 percent in ten years has a demand problem and a supply problem at once: **enough new customers to support any number of new firms, and nowhere legal to put them.** The National Park Service describes the Black Belt as a narrow strip **from Van Buren Street to Thirty-ninth Street, nearly five miles long**, hemmed by rail yards and industrial property on the west (National Park Service, n.d.).

**A rapidly growing population inside a fixed boundary is the single most profitable and most exploitative condition in real estate**, and it is why real estate men, rather than merchants, became the biggest figures in this district. **That is a structural observation, not a character judgment.**

## Jesse Binga

**Jesse Binga founded Chicago's first Black-owned bank in 1908**, which the National Park Service places at **3633 South State Street** and other accounts place at the southeast corner of State and 36th (National Park Service, n.d.). **It began as a private bank and obtained a state charter in 1921**, becoming the **Binga State Bank**. He also built the **Binga Arcade** later in the 1920s.

**On July 31, 1930, Illinois bank auditors closed the Binga State Bank**, alleging insolvency and accounting irregularities; by that July the bank had suspended lending. Binga was later charged with embezzlement.

## Anthony Overton

**Anthony Overton commissioned the Overton Hygienic Building in 1922 at 3619 to 3627 South State Street**, described by the National Park Service as intended as "a monument to Negro thrift and industry" (National Park Service, n.d.). **He ran a cosmetics manufacturer, a bank, an insurance company and a newspaper**, several of them from that building.

**The Douglass National Bank** operated out of it and **claimed about 64,000 depositors residing in 30 states** and to be the largest Black-owned bank in America (National Park Service, n.d.). **Note the word "claimed", which is the source's own word.**

**Three disagreements about Douglass National, and you should carry all three.**
1. **Founding year: 1922 or 1923**, depending on the account.
2. **Whether it was the first or the second nationally chartered Black-owned bank.** Some sources say first; BlackPast describes it as the second.
3. **Its end.** Accounts place its closure in **1932**, alongside Overton's **Victory Life Insurance Company**.

**What is NOT in dispute and is the point:** **a national charter is a federal instrument, and holding one put a Black-owned bank inside the national banking system rather than only a state one.** That is a structural fact worth more than the first-or-second argument.

## Supreme Life, the one that lasted

**Frank L. Gillespie incorporated the Liberty Life Insurance Company in Chicago in 1919.** It moved in **1921** into the second floor of a building at **3501 South Dr. Martin Luther King Jr. Drive** designed by architect **Albert Anis** and originally built for the Roosevelt State Bank, and **bought the whole building in 1924**. In **1929** it merged with **Supreme Life and Northeastern Life** to form the **Supreme Life Insurance Company of America**, and it was **one of the few major Black Metropolis businesses to survive the Great Depression** (City of Chicago, n.d.).

**In 1950 the company modernised the building by covering its original classical facade with porcelain-metal panels** (City of Chicago, n.d.).

**That last sentence is a small gift to a careful reader.** A firm that spends money re-skinning its headquarters in the fashionable material of its decade is a firm **behaving like every other mid-century American corporation**. **That is what "it survived" actually looks like on a building**, and it is a better piece of evidence than any adjective.

## What is designated, and it is a lot

**On September 9, 1998 the City of Chicago designated nine properties as the Black Metropolis-Bronzeville District:** the **Overton Hygienic Building**, the **Chicago Bee Building**, the **Wabash Avenue YMCA**, the **Chicago Defender Building**, **Unity Hall**, the **Eighth Regiment Armory**, the **Sunset Cafe**, the **Victory Monument** and the **Supreme Life Building** (City of Chicago, n.d.). **Eight buildings and one monument had been nominated to the National Register in the mid-1980s** as, in the National Park Service's words, among the most significant landmarks of Black urban history in the United States (National Park Service, n.d.).

**The Wabash Avenue YMCA opened in 1914 with support from Julius Rosenwald of Sears** (National Park Service, n.d.). **That is outside philanthropy inside the capital chain**, and it is worth noticing that it appears here and not in the Southern districts in this course.

## What happened to the rest

**Urban renewal in the 1950s and 1960s demolished significant blocks for public housing and for the Illinois Institute of Technology campus** (National Park Service, n.d.).

**Set that beside the Indiana Avenue course's finding about a university assembling land in Indianapolis and you have two cities, two universities and the same instrument.** This course does not teach that instrument. It teaches the thing the instrument was applied to. **Both courses are describing one calendar.**

## Sources
- City of Chicago. (n.d.). *Supreme Life Building* [Chicago landmark record]. https://webapps1.chicago.gov/landmarksweb/web/landmarkdetails.htm?lanId=1431
- Drake, S. C., & Cayton, H. R. (1945). *Black metropolis: A study of Negro life in a Northern city*. Harcourt, Brace.
- National Park Service. (n.d.). *Chicago's Black metropolis: Understanding history through a historic place* [Teaching with Historic Places]. https://www.nps.gov/articles/chicago-s-black-metropolis-understanding-history-through-a-historic-place-teaching-with-historic-places.htm`,
      recallContent: [
        {
          prompt: "Give the 1921 Greenwood counts by layer.",
          answer: "108 businesses including 41 grocery and meat markets, 30 restaurants, 11 boarding and rooming houses, 9 billiard halls and 5 hotels; 33 professionals including 15 physicians and surgeons; 24 skilled craftspeople; and 26 service workers.",
        },
        {
          prompt: "Why must the attribution of 'Black Wall Street' to Booker T. Washington be hedged?",
          answer: "The Oklahoma Historical Society writes that he 'may have' given Greenwood the nickname, and the Tulsa City-County Library attributes the account to the author and educator Eddie Faye Gates. Durham has a competing origin story for the same phrase, with some accounts dating it to the 1950s.",
        },
        {
          prompt: "What did the riot clause in Greenwood property insurance policies do, and why is it an insurance lesson?",
          answer: "It excluded losses from riot and civil commotion, so insurers refused to pay. The clause was standard commercial language, not written for Greenwood, and it destroyed the district's ability to recapitalise anyway.",
        },
        {
          prompt: "Greenwood held 242 Black-owned businesses by 1942. State what that does and does not mean.",
          answer: "It means people rebuilt the district without meaningful insurance payment or city compensation and made it larger than before, which is a real achievement. It does not offset anything at all about 1921. It is a separate fact about a later decade.",
        },
        {
          prompt: "What was O. W. Gurley's founding transaction, and which capital strategy does it illustrate?",
          answer: "He moved to Tulsa in 1906 and bought 40 acres along the Frisco tracks, then sold to Black buyers. When you cannot borrow to build, buy the land and sell it to people who cannot buy land anywhere else.",
        },
      ],
    },
    {
      slug: "wtb-quiz-districts",
      title: "12 · Quiz: the five districts",
      section: "Section 3 · Five districts",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Parrish Street and Hayti in Durham should be kept apart because:",
            options: [
              "One was in Durham County and the other was not",
              "Parrish Street was Black owned and Hayti was not",
              "They were designated as historic districts in different decades, by different agencies, under different criteria",
              "Parrish Street was the financial and office district; Hayti was the residential, retail and cultural one",
            ],
            correctIndex: 3,
            explanation: "They were taken by different processes, so merging them gets the urban renewal history wrong.",
            sourceLessonSlug: "wtb-durham",
          },
          {
            prompt: "Du Bois reported Mechanics and Farmers Bank holding $17,000 deposited by 500 different persons. The point of that figure is:",
            options: [
              "The bank was undercapitalised and about to fail",
              "An average of about 34 dollars a person, so it was people of modest means pooling",
              "The deposits were mostly from outside Durham",
              "Five hundred was an unusually large number of depositors for a Southern bank of that period",
            ],
            correctIndex: 1,
            explanation: "Alongside a paid-in capital of 11,000 dollars, that is the entire economics of Section 4 in one line.",
            sourceLessonSlug: "wtb-durham",
          },
          {
            prompt: "Durham's Triumvirate were John Merrick, Aaron M. Moore and Charles C. Spaulding. Merrick's trade was:",
            options: ["Physician", "Barber", "Lawyer", "Undertaker and funeral director"],
            correctIndex: 1,
            explanation: "Merrick was a barber and president; Moore was a physician, medical director and treasurer; Spaulding was general manager.",
            sourceLessonSlug: "wtb-durham",
          },
          {
            prompt: "The correct handling of Du Bois's explanation for Durham's success is to:",
            options: [
              "Repeat it as the established cause",
              "Ignore it, since Du Bois was not an economist",
              "Treat it as an interpretive frame with an author and a date, quote it, and engage it",
              "Replace it with a modern scholarly explanation without mentioning that Du Bois said anything",
            ],
            correctIndex: 2,
            explanation: "He credits three founders and then credits ordinary white Durham for leaving Black enterprise alone. That is a case being made in 1912, not a finding.",
            sourceLessonSlug: "wtb-durham",
          },
          {
            prompt: "The True Reformers bank was chartered March 2, 1888 and opened April 3, 1889; Capital Savings Bank of Washington, D.C. opened October 17, 1888. Which was the first Black-owned bank?",
            options: [
              "True Reformers, because a charter is what creates a bank",
              "Capital Savings, because opening is what makes a bank real",
              "Both, depending on whether you measure chartering or opening",
              "Neither claim can be checked because the records of both institutions were destroyed",
            ],
            correctIndex: 2,
            explanation: "First chartered and first to open are different measures, and the honest sentence names which one it means.",
            sourceLessonSlug: "wtb-richmond",
          },
          {
            prompt: "On August 20, 1901 Maggie Lena Walker announced she would build:",
            options: [
              "A hospital, a school and a library",
              "A bank, a newspaper and a department store",
              "A bank, a hotel and an insurance company",
              "A newspaper, a printing plant and a chain of neighbourhood grocery stores",
            ],
            correctIndex: 1,
            explanation: "She built all three: the St. Luke Herald from 1902, the Saint Luke Penny Savings Bank chartered July 28, 1903, and the Saint Luke Emporium from April 1905.",
            sourceLessonSlug: "wtb-richmond",
          },
          {
            prompt: "Encyclopedia Virginia gives two causes for the Saint Luke Emporium closing in 1911. They are:",
            options: [
              "A fire and an uninsured loss",
              "The 1907 financial panic and a rent increase",
              "Organised white retailer opposition, and Black consumer reluctance to shop there",
              "Competition from a larger department store that opened two blocks away in 1909 and undercut its prices",
            ],
            correctIndex: 2,
            explanation: "Both halves belong in the account. Reporting only one tells an incomplete story in either direction.",
            sourceLessonSlug: "wtb-richmond",
          },
          {
            prompt: "Alonzo Herndon was able to buy the mutual aid association that became Atlanta Life in 1905 because:",
            options: [
              "Georgia had raised capital requirements for such businesses, which put it in trouble",
              "Its founder had died without an heir",
              "He won a lawsuit against its directors",
              "The state insurance commissioner ordered it sold to a Black owner as a condition of its licence",
            ],
            correctIndex: 0,
            explanation: "He was the person who was liquid at the moment the rule bit. He incorporated it with assets of 5,000 dollars, grown to over 400,000 by 1922.",
            sourceLessonSlug: "wtb-atlanta",
          },
          {
            prompt: "Legal reserve status, which Atlanta Life gained in 1922, means:",
            options: [
              "The company was legally required to reserve seats on its board for policyholders",
              "The company was exempt from state insurance regulation",
              "The company had reserved the legal right to refuse claims from outside its home state",
              "Assets held against future obligations, enforced by a state regulator",
            ],
            correctIndex: 3,
            explanation: "It is expensive, it is a barrier to entry and it is a certificate of solvency. Only five Black-owned insurers held it by 1922.",
            sourceLessonSlug: "wtb-atlanta",
          },
          {
            prompt: "Fortune magazine called Auburn Avenue 'the richest Negro street in the world' in 1956. This should be used as evidence of:",
            options: [
              "Reputation",
              "Measured wealth",
              "Per capita income on the avenue",
              "The total assessed value of property inside the district boundary",
            ],
            correctIndex: 0,
            explanation: "It is a trade-press superlative from a named magazine in a named year, and nobody has rigorously tested the comparison. Attribute it every time.",
            sourceLessonSlug: "wtb-atlanta",
          },
          {
            prompt: "In the 1921 Greenwood breakdown, the entry that most clearly signals layer 4 is:",
            options: [
              "41 grocery and meat markets",
              "6 real estate, loan and insurance agents",
              "5 hotels",
              "15 physicians and surgeons practising in the district",
            ],
            correctIndex: 1,
            explanation: "Agents writing insurance and arranging loans mean a district connected to outside capital markets through intermediaries, a different structure from Durham's locally chartered institutions.",
            sourceLessonSlug: "wtb-tulsa",
          },
          {
            prompt: "Why does this course hedge the attribution of 'Black Wall Street' to Booker T. Washington?",
            options: [
              "Because the Oklahoma Historical Society itself writes that he 'may have' given Greenwood the nickname",
              "Because Washington never visited Oklahoma",
              "Because the phrase is offensive",
              "Because the phrase does not appear in any printed source published before the year 2000, according to the library",
            ],
            correctIndex: 0,
            explanation: "The Tulsa City-County Library attributes the account to the educator Eddie Faye Gates, and Durham has a competing origin story for the same phrase.",
            sourceLessonSlug: "wtb-tulsa",
          },
          {
            prompt: "Greenwood property owners were largely unable to recover their 1921 losses because:",
            options: [
              "They had no insurance at all",
              "Oklahoma had no insurance regulator",
              "The federal government assumed responsibility for the claims and then declined to process any of them",
              "Most policies carried a riot clause excluding riot and civil commotion, so insurers refused to pay",
            ],
            correctIndex: 3,
            explanation: "A riot exclusion is standard commercial language. It was not written for Greenwood and it destroyed Greenwood's ability to recapitalise anyway.",
            sourceLessonSlug: "wtb-tulsa",
          },
          {
            prompt: "Greenwood held 242 Black-owned business establishments by 1942, more than in 1921. The correct reading is:",
            options: [
              "The rebuilding shows the loss was eventually made good",
              "The 1921 figures must have been undercounted",
              "A separate achievement in a later decade, which offsets nothing about 1921",
              "The district recovered because the city eventually paid the disallowed claims",
            ],
            correctIndex: 2,
            explanation: "People rebuilt without meaningful insurance payment or city compensation and made the district larger. That is a real achievement and it is not a consolation.",
            sourceLessonSlug: "wtb-tulsa",
          },
          {
            prompt: "Chicago's Black population grew 148 percent between 1910 and 1920 inside a narrow strip about five miles long. The business consequence was:",
            options: [
              "Rapidly growing demand inside a fixed boundary, which made real estate the dominant business",
              "A shortage of customers",
              "An oversupply of housing",
              "A collapse in rents, as landlords competed for a limited number of newly arriving tenants each year",
            ],
            correctIndex: 0,
            explanation: "That condition is the most profitable and most exploitative in real estate, and it is why real estate men rather than merchants became the biggest figures in the district.",
            sourceLessonSlug: "wtb-chicago",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 4 · The money question  (capital formation under exclusion: the actual economics)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "wtb-money-problem",
      title: "13 · The money question, stated properly",
      section: "Section 4 · The money question",
      body: `This is the centre of the course. **If you take one thing away from all twenty-two lessons, take this one**, because it is a real economics problem, it was solved, and almost nobody is taught how.

## State the problem the way a banker would

**You want to open a grocery store.** You need money to buy the first stock, the fixtures and three months of rent before revenue arrives. **That money has to come from somewhere, and there are only ever five somewheres:**

1. **Your own savings.**
2. **Your family and friends.**
3. **A retained profit from another business you already own.**
4. **A loan.**
5. **Investors who buy a share of the business.**

**Options 4 and 5 both require an institution that will lend to you or invest in you.** Take those away and you are left with 1, 2 and 3, all of which depend on somebody in your circle already having capital. **That is the definition of a poverty trap, and it is a machine rather than a misfortune.**

**Now add the constraint these districts actually faced.** Banks would not lend. Insurers would not write policies, or wrote them at higher prices. Wholesale suppliers would not extend trade credit. **And the properties you might have pledged as collateral sat in neighbourhoods whose values the lending industry had already decided to discount.** Each one of those is a separate closed door, and closing any one of them is enough to stop most businesses from starting.

**So how did more than a hundred banks, several substantial insurance companies and thousands of firms come into existence anyway?**

## The answer, in one sentence

**They built the institution BEFORE they needed the loan.**

That is the whole trick, and it is worth staring at, because it inverts the order everybody assumes. **The usual sequence is: have a business idea, then go to the bank.** The sequence in this course is: **organise a society, collect small regular payments from a large number of people, accumulate a reserve, get the reserve chartered and regulated, and then lend it to yourselves.**

**Read the Durham founders again with that sequence in mind.** Du Bois names them as "a minister with college training, a physician with professional training, and a barber who saved his money" (Du Bois, 1912). **Read the roles rather than the men.**
- **The minister** has a congregation, which is a member list and a reputation.
- **The physician** has professional standing, which is what a regulator and a policyholder both need to see, and he understands mortality, which is literally what life insurance prices.
- **The barber** has cash, because a barbershop is a daily-receipts business with almost no inventory.

**That is not a coincidence and it is not a charming anecdote. It is a correctly assembled founding team for an insurance company under exclusion:** distribution, credibility and working capital. **The same three roles recur across these districts.**

## The five strategies, named

Section 4 works each of these. Learn the list now.

| # | Strategy | What it converts | Example in this course |
|---|---|---|---|
| **1** | **Mutual aid and fraternal dues** | Many small payments into one pool | True Reformers; Independent Order of St. Luke |
| **2** | **Industrial insurance** | A pool into regulated, investable reserves | North Carolina Mutual; Atlanta Life |
| **3** | **The chartered bank** | Reserves and deposits into loans | Mechanics and Farmers; St. Luke Penny Savings; Citizens Trust |
| **4** | **The building and loan** | Members' monthly subscriptions into houses | Berean, Philadelphia; Durham's building and loan association |
| **5** | **Direct land purchase** | Cash into subdividable ground | O. W. Gurley's 40 acres; Herndon's 100-plus houses |

## And the honest counterweight, which belongs here rather than buried at the end

**These strategies worked, and they had structural limits that no amount of effort could overcome.** Naming those limits is not pessimism, it is the second half of the economics.

- **A neighbourhood bank carries concentrated risk.** Its depositors work for the same employers, own property in the same market, and are hit by the same shocks at the same time. **Diversification is the one thing a segregated bank cannot buy.**
- **Deposits leak.** Money deposited in a district gets spent outside it, at firms that bank elsewhere. Mehrsa Baradaran's *The Color of Money* argues that this makes the multiplier work against a segregated community rather than for it (Baradaran, 2017). **That is an argument by a named scholar and you should engage it as one.**
- **Regulatory thresholds are expensive.** Only five Black-owned insurers held legal reserve status by 1922 (New Georgia Encyclopedia, n.d.-b). **A capital requirement is neutral on its face and brutal in effect on anyone starting from zero.**
- **The customer is not captive in the way people assume.** The Saint Luke Emporium closed in 1911 partly because Black consumers did not shop there (Encyclopedia Virginia, n.d.-b). **A shared identity is not a business model.**

**Hold both halves.** The strategies were ingenious and they were operating against a structure that was designed, whether by intention or by accumulation, to stop exactly what they were doing. **Neither sentence softens the other. That is the rule, applied to economics.**

## Sources
- Baradaran, M. (2017). *The color of money: Black banks and the racial wealth gap*. Belknap Press of Harvard University Press.
- Du Bois, W. E. B. (1912, January). The upbuilding of black Durham: The success of the Negroes and their value to a tolerant and helpful Southern city. *The World's Work, 23*, 334-338. https://docsouth.unc.edu/nc/dubois/dubois.html
- Encyclopedia Virginia. (n.d.-b). *Maggie Lena Walker (1864-1934)*. https://encyclopediavirginia.org/entries/walker-maggie-lena-1864-1934/
- New Georgia Encyclopedia. (n.d.-b). *Alonzo Herndon (1858-1927)*. https://www.georgiaencyclopedia.org/articles/business-economy/alonzo-herndon-1858-1927/
- Walker, J. E. K. (2009). *The history of Black business in America: Capitalism, race, entrepreneurship* (2nd ed.). University of North Carolina Press.`,
      recallContent: [
        {
          prompt: "What did Chicago's 148 percent Black population growth from 1910 to 1920, inside a five-mile strip, do to the local business structure?",
          answer: "It created rapidly growing demand inside a fixed boundary, which made real estate rather than merchandising the dominant business, and made real estate men the district's biggest figures.",
        },
        {
          prompt: "What happened to Jesse Binga's bank and to Anthony Overton's, and when?",
          answer: "Illinois bank auditors closed the Binga State Bank on July 31, 1930. Douglass National Bank and Overton's Victory Life Insurance Company closed around 1932.",
        },
        {
          prompt: "Which Bronzeville firm survived the Depression, and what small architectural fact shows what surviving looked like?",
          answer: "Supreme Life, formed in 1929 from the merger of Liberty Life, Supreme Life and Northeastern Life. In 1950 it covered its building's classical facade with porcelain-metal panels, which is a firm behaving like any other mid-century American corporation.",
        },
        {
          prompt: "Name four of the nine properties in the Black Metropolis-Bronzeville District designated on September 9, 1998.",
          answer: "Any four of: the Overton Hygienic Building, the Chicago Bee Building, the Wabash Avenue YMCA, the Chicago Defender Building, Unity Hall, the Eighth Regiment Armory, the Sunset Cafe, the Victory Monument, and the Supreme Life Building.",
        },
      ],
    },
    {
      slug: "wtb-industrial-insurance",
      title: "14 · Industrial insurance, the machine that made the capital",
      section: "Section 4 · The money question",
      body: `Every large Black-owned financial institution in this course either was an insurance company or was founded by one. **That is not a coincidence about preference. It is a fact about how insurance works**, and once you see the mechanism you cannot unsee it.

## What industrial insurance actually was

**Industrial insurance** is a small life policy, usually enough to cover a funeral, sold to wage earners, **with premiums collected weekly or monthly in person by an agent who walks a route**. It was not invented by these companies. It was the standard product for working-class Americans of every background in this period.

**Now look at what it does mechanically.**

| Step | What happens | Why it matters |
|---|---|---|
| 1 | An agent collects small premiums, in cash, every week, from hundreds of households | **Distribution.** The agent network is the company's real asset |
| 2 | Most policyholders do not die this year | **Float.** The company holds money it does not yet owe |
| 3 | Regulators require reserves against future claims | **Compulsory saving, at company scale** |
| 4 | Reserves must be invested somewhere | **The company becomes an investor** |
| 5 | The company invests in what it knows: property and mortgages in its own market | **Capital returns to the district** |

**Step 5 is the answer to the whole money question.** An insurance company is a legally mandated pool of long-term capital, and **a company whose reserves are large enough will end up in the mortgage business whether it intends to or not.** So the question "how do you finance a district when banks will not lend?" has an answer that is almost funny in its directness: **you become the institution that has to invest.**

## The growth curve, in real numbers

**North Carolina Mutual.** Du Bois, writing in 1912, reports the company's business increasing "from less than a thousand dollars in 1899 to an income of a quarter of a million in 1910," with **200,000 members**, **half a million dollars paid in benefits**, and **office buildings owned in three cities** (Du Bois, 1912).

**Read the last clause.** By 1912 the company already owned real estate in three cities. **That is step 5, eleven years in.**

Later figures from the same company: **by 1945 it was worth 14 million dollars with a 1 million dollar surplus, and in 1971 it became the first Black-managed company to reach 1 billion dollars of insurance in force** (NCpedia, n.d.-a).

**Atlanta Life.** Assets of **5,000 dollars** in 1905, over **400,000 dollars** by 1922 (New Georgia Encyclopedia, n.d.-b).

**Heman Perry's Atlanta group**, including Standard Life, Citizens Trust and the Service Company, held **22 million dollars in insurance and 2 million dollars in assets by 1922** (New Georgia Encyclopedia, n.d.-a).

**The Independent Order of St. Luke**, running the same mechanism as a fraternal order rather than a stock company: **about 100,000 members in 24 states, nearly 3.5 million dollars collected and 100,000 dollars of reserves over roughly 25 years** (Encyclopedia Virginia, n.d.-b).

**The Grand Fountain of the United Order of True Reformers**: certificates at **1 dollar 50 cents**, paying **100 dollars** and later **50 dollars**, with **more than one million dollars paid in death benefits by the early 1900s** (Encyclopedia Virginia, n.d.-a).

## Two things this teaches that no other subject teaches as well

**1. Why the founders were who they were.** An insurance company needs someone who understands mortality, someone people trust, and someone with cash. **Doctors, ministers and cash-business owners are the three roles**, and you now know why the Durham triumvirate looked the way it did.

**2. Why the agent matters more than the executive.** The whole system runs on somebody walking a route and collecting a nickel. **A company with a thousand agents has a thousand relationships and a thousand collection points**, and that network is far harder to replicate than the capital is. **When you research one of these firms, look for the agent count and the agency territory before you look at the assets.**

## And the limit, stated in the same voice

**Industrial insurance is expensive per dollar of coverage**, because collecting weekly in person costs money and small policies do not spread fixed costs. **This was a criticism of the product across the entire industry, for all customers, not a criticism of these companies**, and it is why the product eventually disappeared. **You should know that before you write about it, because a reader who knows it and finds it missing from your account will stop trusting you.**

**And the strategy has a documented endpoint.** North Carolina Mutual, the largest and longest running of them, **had its liquidation ordered by the courts on October 11, 2022**, with liabilities exceeding assets by at least **78 million dollars**. **Check that against the North Carolina Department of Insurance's own filings before you publish it**, because a receivership is a legal proceeding with a public docket and you should cite the docket rather than a summary.

**A 123-year run ending in liquidation is one sentence, and "the largest Black-owned business in the United States for most of the twentieth century" is another. Both are true. Neither edits the other.**

## Sources
- Du Bois, W. E. B. (1912, January). The upbuilding of black Durham: The success of the Negroes and their value to a tolerant and helpful Southern city. *The World's Work, 23*, 334-338. https://docsouth.unc.edu/nc/dubois/dubois.html
- Encyclopedia Virginia. (n.d.-a). *Grand Fountain of the United Order of True Reformers*. https://encyclopediavirginia.org/entries/grand-fountain-of-the-united-order-of-true-reformers/
- Encyclopedia Virginia. (n.d.-b). *Maggie Lena Walker (1864-1934)*. https://encyclopediavirginia.org/entries/walker-maggie-lena-1864-1934/
- NCpedia. (n.d.-a). *North Carolina Mutual Life Insurance Company*. https://www.ncpedia.org/north-carolina-mutual-life-insuranc
- New Georgia Encyclopedia. (n.d.-a). *Auburn Avenue (Sweet Auburn)*. https://www.georgiaencyclopedia.org/articles/counties-cities-neighborhoods/auburn-avenue-sweet-auburn/
- New Georgia Encyclopedia. (n.d.-b). *Alonzo Herndon (1858-1927)*. https://www.georgiaencyclopedia.org/articles/business-economy/alonzo-herndon-1858-1927/
- Weare, W. B. (1993). *Black business in the New South: A social history of the North Carolina Mutual Life Insurance Company*. University of North Carolina Press.`,
      recallContent: [
        {
          prompt: "State the money problem and the one-sentence answer this course gives.",
          answer: "Capital comes from savings, family, retained profit, a loan or investors, and the last two require an institution that will lend to or invest in you. The answer: they built the institution before they needed the loan.",
        },
        {
          prompt: "Read Du Bois's three Durham founders as roles rather than men. What does each supply?",
          answer: "The minister supplies a congregation, which is a member list and a reputation. The physician supplies professional standing and an understanding of mortality. The barber supplies cash, because a barbershop is a daily-receipts business with almost no inventory. Distribution, credibility and working capital.",
        },
        {
          prompt: "Name the five capital strategies in this section.",
          answer: "Mutual aid and fraternal dues; industrial insurance; the chartered bank; the building and loan association; and direct land purchase.",
        },
        {
          prompt: "Name three structural limits these strategies could not overcome.",
          answer: "Any three of: a neighbourhood bank cannot diversify its risk; deposits leak out of the district, which Baradaran argues turns the multiplier against a segregated community; regulatory capital thresholds are brutal for anyone starting from zero; and a shared identity is not a business model, as the Saint Luke Emporium showed.",
        },
      ],
    },
    {
      slug: "wtb-building-and-loan",
      title: "15 · The building and loan, and the bank",
      section: "Section 4 · The money question",
      body: `Two institutions, routinely lumped together, doing genuinely different jobs. **Get the difference right and the housing history of every one of these districts becomes legible.**

## The building and loan association

**A building and loan is a club for buying houses.** Members subscribe to shares and pay a fixed amount every month. The pooled money is lent out so that a member can buy or build a house, and that member then repays into the same pool. When everyone's shares are paid up, the association can wind up.

**Three features make it the right instrument for an excluded community.**

1. **It creates its own capital.** No outside depositor is needed, because members' monthly payments are the funding.
2. **It underwrites on knowledge, not on paper.** Members know whether you pay your debts, which substitutes for the credit files and appraisals a bank would use, and which is precisely what an excluded borrower cannot supply.
3. **The collateral problem is smaller.** The association lends against a house it will happily take back and re-lend on inside its own community, so a lender's discount on neighbourhood property matters less.

**A worked example.** The **Berean Building and Loan Association** was founded in **1888** at the Berean Presbyterian Church in Philadelphia by the **Reverend Matthew Anderson**. **By 1909 it managed more than 150,000 dollars of stock on behalf of 700 members**, it helped **more than 300 families** buy homes, it had an integrated board, and it came through the Depression (Presbyterian Historical Society, n.d.).

**Look at the pattern in that sentence and match it to lesson 5.** A **church** produces a **building and loan**, which produces **home ownership**, which produces **collateral**, which produces **the ability to borrow for a business**. **That is the capital chain running its full length in one Philadelphia congregation.**

**And this was not exotic.** Du Bois's 1912 Durham list includes "a building and loan association" as one of the town's Black financial institutions alongside the bank and three insurance companies (Du Bois, 1912), and his 1907 Atlanta University study documents institutions of the same kind, including the North Baltimore Permanent Building and Loan Association (Du Bois, 1907). **Assume every district in this course had one and go looking for it. You will usually find it in the church records.**

## The bank

A bank is a different animal in three specific ways, and each difference has a consequence.

| | Building and loan | Bank |
|---|---|---|
| **Funding** | Members' monthly share payments | Deposits from the general public |
| **Purpose** | Housing, mostly | Commerce, payments, credit of all kinds |
| **Withdrawal** | Slow and rule bound | On demand |
| **Regulator** | Lighter, often state level | State or federal, with capital rules |
| **Risk** | Members' patience | **A run** |

**That last row is the whole difference.** A building and loan whose members are frightened has a difficult meeting. **A bank whose depositors are frightened has a queue outside the door**, and a bank that cannot pay the queue is closed by an examiner that afternoon. **Binga State Bank was closed by Illinois auditors on July 31, 1930.** The **True Reformers bank closed on October 20, 1910** after an embezzlement and a set of defaulted unsecured loans (Encyclopedia Virginia, n.d.-a).

**Do not read those two closures as a moral about Black banking.** Read them as what they are: **two of the ordinary ways banks fail everywhere**, one a liquidity and solvency failure in the worst banking year in American history, the other an internal fraud. **The interesting question is not why some failed. It is why the base was so small that each failure removed such a large share of it.**

## The national picture, and how to check it yourself

The figure you will see quoted everywhere is that **134 Black-owned banks were organised between 1888 and 1934**, a count that traces back to **Abram L. Harris's 1936 study *The Negro as Capitalist***. **Cite Harris, not the blog that repeated him**, and note that a count of banks organised is not a count of banks operating at any one moment.

**For the present, do not take a number from a secondary source at all.** **The FDIC publishes a quarterly list of Minority Depository Institutions with an ownership category for each**, and that list is the authority (Federal Deposit Insurance Corporation, n.d.). **Download the current quarter and count it yourself.** Any number you read in an article is a snapshot of the quarter its author downloaded, and this sector consolidates: **the July 2026 announcement that Optus Financial and M&F Bancorp intend to merge would, if it closes, reduce the count by one and produce the largest institution in the category** (Banking Dive, 2026).

**That is the correct way to handle a live external value**, and it generalises well beyond this course: **read it from the authority, date your reading, and never assert a number you have not personally checked.**

## Sources
- Banking Dive. (2026, July 22). *Black-owned banks Optus, M&F to merge*. https://www.bankingdive.com/news/optus-mf-carolina-black-owned-banks-merge-105-million-mdi-cdfi/826017/
- Du Bois, W. E. B. (Ed.). (1907). *Economic co-operation among Negro Americans*. Atlanta University Press. https://docsouth.unc.edu/church/dubois07/dubois.html
- Du Bois, W. E. B. (1912, January). The upbuilding of black Durham: The success of the Negroes and their value to a tolerant and helpful Southern city. *The World's Work, 23*, 334-338. https://docsouth.unc.edu/nc/dubois/dubois.html
- Encyclopedia Virginia. (n.d.-a). *Grand Fountain of the United Order of True Reformers*. https://encyclopediavirginia.org/entries/grand-fountain-of-the-united-order-of-true-reformers/
- Federal Deposit Insurance Corporation. (n.d.). *Minority depository institutions list*. https://www.fdic.gov/minority-depository-institutions-program/minority-depository-institutions-list
- Harris, A. L. (1936). *The Negro as capitalist: A study of banking and business among American Negroes*. American Academy of Political and Social Science.
- Presbyterian Historical Society. (n.d.). *The whole gospel for the whole community: The legacy of Matthew Anderson*. https://pcusa.org/news-storytelling/blogs/historical-society-blog/whole-gospel-whole-community-legacy-matthew-anderson`,
      recallContent: [
        {
          prompt: "Describe the five-step mechanism by which an insurance company becomes a source of capital for a district.",
          answer: "Agents collect small premiums weekly from many households; most policyholders do not die this year, so the company holds float; regulators require reserves against future claims; reserves must be invested; and the company invests in the market it knows, which is property and mortgages in its own district.",
        },
        {
          prompt: "Give North Carolina Mutual's growth figures as Du Bois reported them in 1912.",
          answer: "Business increased from less than a thousand dollars in 1899 to an income of a quarter of a million in 1910, with 200,000 members, half a million dollars paid in benefits, and office buildings owned in three cities.",
        },
        {
          prompt: "When researching one of these insurance firms, what should you look for before the asset total?",
          answer: "The agent count and the agency territory. The whole system runs on somebody walking a route and collecting a nickel, and that network is harder to replicate than the capital.",
        },
        {
          prompt: "What is the honest criticism of industrial insurance as a product, and whose criticism was it?",
          answer: "It was expensive per dollar of coverage, because collecting weekly in person costs money and small policies do not spread fixed costs. That was a criticism of the product across the entire industry, for all customers, and it is why the product eventually disappeared.",
        },
        {
          prompt: "How should North Carolina Mutual's October 11, 2022 liquidation be reported?",
          answer: "As one sentence beside another. A 123-year run ending in liquidation, and the largest Black-owned business in the United States for most of the twentieth century. Both true, neither editing the other. Cite the Department of Insurance docket rather than a summary.",
        },
      ],
    },
    {
      slug: "wtb-what-fails-checking",
      title: "16 · Four claims about this history, and which ones survive",
      section: "Section 4 · The money question",
      body: `This lesson is a workshop. **Four claims you will meet constantly, run through the checking process, with the verdict stated.** Two survive with conditions, one survives only as an attributed opinion, and one does not survive at all.

## Claim 1: "A dollar circulated 19 times inside Greenwood before leaving." VERDICT: CUT

**You will see this everywhere.** You will also see 36 times, and 100 times, and "19 to 36", and "36 to 100", depending on which retelling you land on.

**Run the check.**
- **Who says it?** Popular articles, business blogs and some educational material.
- **What is the citation?** Overwhelmingly "historians estimate", "reports suggest", or nothing at all.
- **Is there a primary source?** **No primary source is offered by any of the popular versions.**
- **Do the versions agree?** **They differ by a factor of five.** A figure quoted as 19 in one place and 100 in another is not a measurement, it is a rumour with a number attached.
- **Is it even measurable?** Money velocity within a neighbourhood is extraordinarily hard to measure in a modern economy with electronic payments. **In 1921, with cash, no serious method existed.**

**Verdict: cut it. Do not soften it to "some sources say." Do not use it with a hedge.** A number with no source, no method and a fivefold spread should not appear in your writing at all.

**And notice what you lose by cutting it, which is nothing.** The 1921 directory gives you 108 businesses, 33 professionals, 24 craftspeople and 26 service workers in a district of about 11,000 people (Tulsa City-County Library, n.d.; Oklahoma Historical Society, n.d.). **Those are real numbers from a real record, and they make the same point better.** **A verifiable fact always beats an impressive one.**

## Claim 2: "Booker T. Washington called Greenwood the Negro Wall Street of America." VERDICT: ATTRIBUTE THE HEDGE

**Run the check.**
- **The Oklahoma Historical Society writes "Booker T. Washington may have given Greenwood its nickname"** (Oklahoma Historical Society, n.d.). **A state historical society hedging in print is a strong signal.**
- **The Tulsa City-County Library attributes the account to the author and educator Eddie Faye Gates** (Tulsa City-County Library, n.d.). **That gives the claim a named source, which is progress, and it is still an attribution rather than a document.**
- **Durham has a competing origin story for the same phrase**, and some North Carolina accounts date the nickname to the **1950s** (NCpedia, n.d.-c).

**Verdict: write "is often attributed to" and cite the hedge.** Never write "Washington named it" flatly. **And treat the competing Durham claim as the more interesting finding**, because a phrase claimed by two cities tells you something about how these districts saw themselves that a settled etymology would not.

## Claim 3: "Auburn Avenue was the richest Negro street in the world." VERDICT: TRUE AS A QUOTATION, NOT AS A MEASUREMENT

**Run the check.**
- **Who said it?** *Fortune* magazine, in **1956** (New Georgia Encyclopedia, n.d.-a).
- **Is the quotation real?** Yes, and the New Georgia Encyclopedia carries it.
- **Is the underlying claim measured?** **No.** There is no ranking of streets by wealth, and no method is given.

**Verdict: quote it, attribute it to *Fortune* and to 1956, and never restate it in your own voice as a fact about relative wealth.** The sentence "Fortune called Auburn Avenue the richest Negro street in the world in 1956" is entirely defensible. The sentence "Auburn Avenue was the richest Negro street in the world" is not.

**This distinction, between a claim about a document and a claim about the world, is the single most transferable skill in this series.**

## Claim 4: "Black business districts were destroyed by highways and urban renewal." VERDICT: TRUE IN SPECIFIC CASES, WITH SPECIFIC DOCUMENTS, AND NOT A GENERAL LAW

**Run the check.**
- **Durham:** documented. **The freeway and urban renewal project ended with 4,057 households and 502 businesses demolished** (Facing South, 2020).
- **Richmond:** documented. **The Richmond-Petersburg Turnpike, now Interstate 95, was built through Jackson Ward in the late 1950s.**
- **Atlanta:** documented. **The Downtown Connector bisected Auburn Avenue** (New Georgia Encyclopedia, n.d.-a).
- **Tulsa:** documented. **Highway construction and urban renewal in the late 1960s took much of the rebuilt district** (Smithsonian Magazine, 2021).
- **Chicago:** documented, with a different instrument. **Urban renewal in the 1950s and 1960s demolished blocks for public housing and for the Illinois Institute of Technology campus** (National Park Service, n.d.).

**Verdict: the claim holds in each case, and you must still cite each case separately.** Five documented instances is not a law, it is five documented instances. **And note that the instruments differ**: a turnpike, a connector, a freeway, an urban renewal area and a university land assembly are five different legal mechanisms with five different decision-making bodies and five different sets of minutes.

**This course does not teach those instruments.** The route series does, and the Indiana Avenue course teaches them one at a time with the statute attached. **If the mechanism is what you want, that is where it is.**

## The checking routine, extracted

Use this on any claim, in any subject.

1. **Who says it, by name?**
2. **What is their source, and is it primary?**
3. **Do independent versions of the claim agree on the number?**
4. **Is the thing being claimed measurable at all, by any method available at the time?**
5. **Is this a claim about a document or a claim about the world?**
6. **If it fails, cut it, and say in your notes that you cut it and why.**

**Step 6 is the one people skip.** A research file that records what you rejected is worth more than one that records only what you kept, **because the next researcher will meet the same bad claim and you can save them the afternoon.**

## Sources
- Facing South. (2020, June 10). *The bitter history behind the highways occupied by protesters*. https://www.facingsouth.org/2020/06/bitter-history-behind-highways-occupied-protesters
- National Park Service. (n.d.). *Chicago's Black metropolis: Understanding history through a historic place* [Teaching with Historic Places]. https://www.nps.gov/articles/chicago-s-black-metropolis-understanding-history-through-a-historic-place-teaching-with-historic-places.htm
- NCpedia. (n.d.-c). *Black Wall Street, Durham, North Carolina*. https://www.ncpedia.org/black-wall-street-durham-north-carolina
- New Georgia Encyclopedia. (n.d.-a). *Auburn Avenue (Sweet Auburn)*. https://www.georgiaencyclopedia.org/articles/counties-cities-neighborhoods/auburn-avenue-sweet-auburn/
- Oklahoma Historical Society. (n.d.). *Tulsa and Black Wall Street*. https://www.okhistory.org/learn/trm1
- Smithsonian Magazine. (2021). *Decades after the Tulsa race massacre, urban renewal sparked Black Wall Street's second destruction*. https://www.smithsonianmag.com/history/black-wall-streets-second-destruction-180977871/
- Tulsa City-County Library. (n.d.). *Black Wall Street*. https://www.tulsalibrary.org/black-wall-street`,
      recallContent: [
        {
          prompt: "What is a building and loan association, and what are its three advantages for an excluded community?",
          answer: "A club for buying houses: members subscribe to shares, pay monthly, and the pool lends so members can buy or build. It creates its own capital, it underwrites on members' knowledge of each other rather than on credit files, and its collateral problem is smaller because it can take a house back and re-lend inside the community.",
        },
        {
          prompt: "Give the Berean Building and Loan Association's figures.",
          answer: "Founded 1888 at Berean Presbyterian Church in Philadelphia by the Reverend Matthew Anderson. By 1909 it managed more than 150,000 dollars of stock for 700 members, and it helped more than 300 families buy homes.",
        },
        {
          prompt: "State the single most important difference between a building and loan and a bank.",
          answer: "Withdrawal. A building and loan's members withdraw slowly under rules; a bank's depositors withdraw on demand, so a bank faces a run and can be closed by an examiner the same afternoon.",
        },
        {
          prompt: "Where does the figure of 134 Black-owned banks organised between 1888 and 1934 come from, and what is its limit?",
          answer: "Abram L. Harris's 1936 study The Negro as Capitalist. Cite Harris rather than the article that repeated him, and note that banks organised is not the same as banks operating at any one moment.",
        },
        {
          prompt: "How should you establish how many Black-owned banks exist today?",
          answer: "Download the current quarter's Minority Depository Institutions list from the FDIC and count it yourself. Any number in an article is a snapshot of the quarter its author downloaded, and the sector consolidates.",
        },
      ],
    },
    // <<< APPEND NEXT SECTION ABOVE THIS LINE >>>
  ],
};
