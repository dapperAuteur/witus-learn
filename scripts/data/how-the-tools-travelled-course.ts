// Authored "How the Tools Travelled" (slug `how-the-tools-travelled`) — the CAPSTONE course of the
// Learn.WitUS route series (Culture & History, high school and up). It is the product of
// plans/42-cross-city-connections.md recommendation 2: "a 'how the tools travelled' capstone,
// sitting above the whole route series, built entirely on the federal instruments and the strongest
// source-and-use lines. This is the course that turns a pile of city courses into a curriculum with
// a thesis."
//
// This is NOT a six-beat site course. It has no single place. Its structure is an argument:
//   1. What counts as a connection (plan 42's taxonomy, taught directly, plus a four-part test)
//   2. The federal upstream (Housing Acts of 1949 and 1954, the FHA Underwriting Manual, the
//      Federal-Aid Highway Act of 1956, including the Defense Highways point)
//   3. Source to use, worked (Berman v. Parker, then the Indiana Avenue chronology that weakens it)
//   4. The other strong lines, each tested rather than asserted (Milliken, Buchanan, Pittsburgh,
//      and the person-to-place category that this course could not close)
//   5. The federal footprint as its own thread (Fort Harrison: landowner and employer, not funder)
//   6. What this does NOT prove, plus a drill and an assignment testing one connection of the
//      learner's own
//
// Prerequisites named in lesson 1: `green-book-how-to-read-a-route` (the METHOD), plus at least two
// city courses, of which `indiana-avenue-a-district-and-what-replaced-it` and
// `dc-where-the-instrument-was-blessed` are named because they are the two ends of the flagship
// connection this course works in full.
//
// Sourcing discipline (the load-bearing part of this file), and the claims this course DOWNGRADED:
//   * Plan 42's HARD RULE governs every lesson: a shared pattern is a RHYME; a documented line (a
//     citation, a copied plan, a named person, a funding stream) is a CONNECTION. Where only a
//     pattern exists the course says "rhyme", not "link", in those words.
//   * BERMAN -> INDIANA AVENUE is taught as the model source-and-use pair AND then weakened against
//     a chronology, exactly as the DC course did to itself: Indiana's own blight statute is 1945 and
//     demolition near the Avenue began in 1948, both before Berman was decided in November 1954, so
//     Berman BACKSTOPPED the tool nationally rather than causing that clearance.
//   * PITTSBURGH'S "MODEL" CLAIM is represented exactly as the Pittsburgh course left it: TRUE as to
//     emulation (Neumann documents more than seventy delegations), FALSE as to a copy-chain, because
//     the federal Housing Act of 1949 and parallel state laws did that work. This course does NOT
//     re-inflate a claim a sibling course weakened.
//   * BUCHANAN v. WARLEY -> BALTIMORE survives as source-and-use (a Louisville case that made
//     Baltimore's ordinances unenforceable). The popular "zoning was pushed into covenants" SEQUENCE
//     is downgraded to a lineage of PURPOSE, because Baltimore's Guilford covenant is 1913, four
//     years BEFORE Buchanan, which the Baltimore course established.
//   * MILLIKEN -> INDIANAPOLIS survives as source-and-use, because the Seventh Circuit applied
//     Milliken by name in 1974. MILLIKEN <-> PARENTS INVOLVED is taught as a DOCTRINE PAIR, not a
//     causal line, because this course did not verify a citation chain between them.
//   * PERSON -> PLACE is the category plan 42 wanted most and the one this course could not close.
//     Harland Bartholomew is worked as the candidate and FAILS the date test for Southwest DC (the
//     Area B plan was approved by the end of 1952; he was appointed to chair the National Capital
//     Planning Commission in 1953). The surviving claim is narrower and is stated as such, and the
//     unopened Cornell collection is named as the next real work.
//   * NO INVENTED STATISTIC, PERSON, QUOTATION, CHARACTER OR ADDRESS. Statutory and judicial
//     language is quoted from the reported instruments; figures carry their owner.
//
// House rule: NO em-dashes or en-dashes in prose. Hyphens in compound words, page ranges and URLs
// are fine.
//
// Registration is CENTRAL (scripts/seed-courses.ts) and is intentionally NOT touched here.

import type { AuthoredCourse } from "./authored-course";

export const HOW_THE_TOOLS_TRAVELLED_COURSE: AuthoredCourse = {
  title: "How the Tools Travelled",
  description:
    "The capstone of the route series, and the course that turns a shelf of city courses into a curriculum with a thesis. Each city course in this series documented a decision: a blight designation in Indianapolis, a Supreme Court opinion out of Southwest Washington, a school district line in Detroit and Indianapolis, a racial zoning ordinance in Baltimore, a public-private partnership in Pittsburgh, a closed Army post in Lawrence, Indiana. Told separately they look like local misfortunes. They were not. They were a shared toolkit, largely federal, applied locally, and this course teaches the transmission rather than the tools. You will start with a taxonomy of connection, ranked from source and use at the strongest to thematic rhyme at the weakest, and with the rule that governs the rest of the course: a shared pattern is a rhyme, and only a documented line, a citation, a copied plan, a named person or a funding stream, is a connection. Then you will read the federal upstream in its own words: the Housing Acts of 1949 and 1954, the Federal Housing Administration's Underwriting Manual, and the Federal-Aid Highway Act of 1956, which was formally the National System of Interstate and Defense Highways and is the bridge between the war material and the city material. Then you will work the flagship connection all the way through, Berman v. Parker out of Southwest Washington, and watch it fail the chronology test in its strong form and survive in a weaker and truer one. Then you will test three more lines and one whole category the course could not close, without re-inflating a single claim a sibling course weakened. Fort Harrison shows the same federal upstream acting through a different mechanism, as landowner and employer rather than funder. The course ends where an honest one has to end, with what none of this proves, and with a drill and an assignment that make you test a connection of your own. Prerequisites: The Green Book: How to Read a Route, plus at least two city courses, of which Indiana Avenue: A District and What Replaced It and Washington, DC: Where the Instrument Was Blessed are the two ends of the connection worked here.",
  lessons: [
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 1 · The Test  (what counts as a connection, before a single edge is drawn)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "htt-eleven-cities-or-one-toolkit",
      title: "1 · Eleven cities, or one toolkit?",
      section: "Section 1 · The Test",
      body: `**You are here because you have finished some of the city courses, and they have started to rhyme.** A district is measured and called blighted. A body acquires it under a statute. The ground is cleared and handed to somebody else to rebuild. A road or a boundary line arrives and does the rest. **Different city, different decade, same shape.** This course is about that shape, and about the one question the city courses could not ask about themselves.

**What this course assumes you have.** You have finished *The Green Book: How to Read a Route*, which taught the method: open a digitized edition, read a listing, chain listings into a route, research an address forward. And you have finished **at least two** city courses. Two of them are named here because this course works the connection between them in full: *Indiana Avenue: A District and What Replaced It*, the pilot, and *Washington, DC: Where the Instrument Was Blessed*, the courthouse. **If you have taken others, better. Baltimore, Pittsburgh, Seattle, Philadelphia and Fort Harrison all appear in Sections 4 and 5 and you will get more out of them if you have already read them.**

**The argument, stated as plainly as it can be stated.** The decisions those courses documented were **not** a set of separate local accidents that happen to resemble each other. They were **a shared toolkit, largely federal, applied locally.** The same handful of statutes paid for them, the same manual shaped the mortgage market they ran inside, and one Supreme Court opinion out of a cleared quadrant in Washington made the central tool constitutionally safe in every state at once. **You already know the instruments. This course teaches the transmission.**

**Why that sentence is dangerous, and why Sections 1 exists before Section 2.** A thesis that tidy is exactly the kind of thesis this series has spent twelve courses breaking. The Indiana Avenue course found the highway was not what cleared the Avenue. The Pittsburgh course found that "other cities copied Pittsburgh" does not survive a date table. The Baltimore course found its own chain was four ordinances rather than one, and that the covenants ran beside the zoning rather than after it. **Every course in this series has weakened its own headline in public.** A capstone that assembled those courses into one confident story would undo all of it.

**So this course draws no connection until it has taught you how to refuse one.** Lesson 2 gives you a taxonomy with six kinds of link ranked by how defensible they are. Lesson 3 gives you a four-question test. Only then does Section 2 open the statutes, and only then does Section 3 work a connection end to end. **The test comes first on purpose, and you will use it on this course's own claims.**

**What this course is not.** It is not a site course. **It has no single place**, so it does not run the six-beat template of Then, Built, Powers, Now, Next and Write, and it has no 360 tour, because there is nothing to stand in. Its structure is an argument instead of a walk. Where it needs a place, it borrows one from the course that already did that ground properly, and it says which course.

**One promise about the ending.** Section 6 is titled "what this does not prove," and it is not a modesty ritual. **A tool being available is not the same as a tool being chosen**, correlation across cities is cheap, and parallel invention is real and common. **If you finish this course better at saying "that is a rhyme, not a link," it has worked**, even about the connections this course itself is fondest of.

## Sources
- Berman v. Parker, 348 U.S. 26 (1954). https://www.law.cornell.edu/supremecourt/text/348/26
- Housing Act of 1949, Pub. L. No. 81-171, 63 Stat. 413 (1949). https://www.govinfo.gov/content/pkg/STATUTE-63/pdf/STATUTE-63-Pg413.pdf
- Federal-Aid Highway Act of 1956, Pub. L. No. 84-627, 70 Stat. 374 (1956). https://www.govinfo.gov/content/pkg/STATUTE-70/pdf/STATUTE-70-Pg374.pdf`,
    },
    {
      slug: "htt-taxonomy",
      title: "2 · Six kinds of connection, ranked",
      section: "Section 1 · The Test",
      body: `**Not all links are equal, and treating them as equal is how a good argument turns into a bad one.** This lesson gives you the taxonomy the rest of the course runs on. Learn the six categories and the rule under them, and you can grade any claim of transmission you meet, in this catalogue or anywhere else.

## The six kinds, strongest first

| Rank | Kind | What it means | What proves it |
|---|---|---|---|
| **1** | **Source to use** | A court, a legislature or an agency in one place authorises a tool; another place applies it | The authorising document, and the tool in use elsewhere with dates that run the right way |
| **2** | **Model to copy** | A place runs a programme that others deliberately imitate | Evidence of the imitating, not only of the admiring: a plan, a delegation with a report, a borrowed provision |
| **3** | **Doctrine pair** | Two decisions from two places that bound one question from opposite ends | Both opinions, read for what each actually holds |
| **4** | **Person to place** | One named individual carries a practice between places | The person documented in both places, with dates, and the practice documented in their hands |
| **5** | **Instrument lineage** | The same tool evolving across places over time | Each stage sourced, and the handover between stages sourced, which is the hard part |
| **6** | **Thematic rhyme** | Two places that merely resemble each other | Nothing. It is a resemblance, and it is not a connection |

## The rule that governs everything after this

**A shared pattern is a rhyme. A documented line is a connection.** A documented line means one of four things you can put your finger on: **a citation, a copied plan, a named person, or a funding stream.** If you have none of those and you still want to say two places are linked, **you have a rhyme, and the honest word is "rhyme."**

**Say it out loud, because the vocabulary does real work.** "Indiana Avenue and the Hill District rhyme" is a true sentence and a useful one. "Pittsburgh's clearance caused Indiana Avenue's" is a different sentence, it is a claim of transmission, and it needs one of those four things behind it. **The two sentences cost the same to write and are not worth the same.**

## What each category is actually good for

**Source to use is the strongest because it has a document at both ends.** The authorising instrument exists on paper and the applying decision exists on paper. The only thing that can break it is chronology, and chronology is cheap to check, which is why lesson 3 checks it first.

**Model to copy is where most confident storytelling goes wrong.** Being admired is not being copied, and the gap between them is enormous. The Pittsburgh course found more than seventy delegations came to study that city's postwar renewal (Neumann, 2016), which is documented and real, and it still found that "other cities copied Pittsburgh's clearance" did not survive a date table. **Admiration is evidence of reputation. Copying needs evidence of a copy.**

**A doctrine pair is honest but modest.** Two opinions can frame a question from both sides without either causing the other. *Milliken v. Bradley* (1974) limited what a **court could compel** across a district line, and *Parents Involved* (2007) limited what a **district could voluntarily choose** to do about race in assignment (*Milliken v. Bradley*, 1974; *Parents Involved*, 2007). Reading them together teaches the shape of one argument across thirty-three years. **It does not, by itself, make either case the cause of the other**, and Section 4 keeps that distinction.

**Person to place is the most concrete link there is, and the rarest.** One named human being who worked in two cities is worth more to a reader than any amount of structural argument, because a person can be looked up. **It also has the highest failure rate**, because career facts are easy to find and dates are unforgiving. Lesson 14 works a real candidate and reports where it breaks.

**Instrument lineage is where careful people still get caught.** Zoning to covenants to redlining to highways sounds like a relay race. The Baltimore course, which can show all four inside one city, found the baton pass did not happen on schedule: Guilford's covenant is **1913**, four years **before** *Buchanan v. Warley* ended racial zoning in 1917, so the covenant did not wait for the ordinance to fail (Buchanan v. Warley, 1917). **A lineage of purpose is real. A tidy sequence in time is usually not.**

**Thematic rhyme is not a defect.** It is a category, and naming things correctly is the entire point of having categories. A rhyme is a good reason to go looking for a line. **It is not a substitute for finding one.**

## The one move this course will not make

**It will not dress a rhyme as causation to make a section land harder.** Every edge drawn from here on gets a rank from this table and a verdict from the test in lesson 3, in writing, including the edges this course likes best.

## Sources
- Buchanan v. Warley, 245 U.S. 60 (1917). https://supreme.justia.com/cases/federal/us/245/60/
- Milliken v. Bradley, 418 U.S. 717 (1974). https://www.law.cornell.edu/supremecourt/text/418/717
- Neumann, T. (2016, February 1). *The "spiritual capital" of the Rust Belt: Pittsburgh and the postindustrial transformation of North Atlantic cities*. Global Urban History. https://globalurbanhistory.com/2016/02/01/the-spiritual-capital-of-the-rust-belt-pittsburgh-and-the-postindustrial-transformation-of-north-atlantic-cities/
- Parents Involved in Community Schools v. Seattle School District No. 1, 551 U.S. 701 (2007). https://www.law.cornell.edu/supremecourt/text/551/701`,
      recallContent: [
        {
          prompt: "State this course's argument in one sentence.",
          answer: "The decisions the city courses documented were not separate local accidents that resemble each other, but a shared toolkit, largely federal, applied locally. The learner already knows the instruments; this course teaches the transmission.",
        },
        {
          prompt: "Which courses does this one assume you have finished, and why are two named specifically?",
          answer: "The Green Book: How to Read a Route, which taught the method, plus at least two city courses. Indiana Avenue and Washington, DC are named because they are the two ends of the connection this course works in full.",
        },
        {
          prompt: "Why does the taxonomy come before any connection is drawn?",
          answer: "Because a thesis this tidy is exactly what the series has spent twelve courses breaking, and a capstone that assembled them into one confident story would undo that. The test comes first so it can be used on this course's own claims.",
        },
        {
          prompt: "Why is this not a six-beat site course?",
          answer: "Because it has no single place. There is nothing to stand in, so there is no Then, Built, Powers, Now, Next and Write and no 360 tour. Its structure is an argument instead of a walk, and where it needs a place it borrows one from the course that did that ground properly.",
        },
        {
          prompt: "What would count as this course having worked, according to lesson 1?",
          answer: "If you finish better at saying \"that is a rhyme, not a link,\" including about the connections this course itself is fondest of.",
        },
      ],
    },
    {
      slug: "htt-the-test",
      title: "3 · The test: four questions before you draw an edge",
      section: "Section 1 · The Test",
      body: `The taxonomy tells you what **kind** of claim you are making. **This lesson tells you whether you are allowed to make it.** Four questions, in this order, because the cheap ones come first and kill most bad claims before you have spent a day on them.

## Question 1. Chronology. Does the cause come before the effect?

**This is the cheapest test in history and it kills more theses than anything else.** Build a table with two columns, date and event, and put both places in it. If the proposed cause is later than the effects it is supposed to have produced, **you are done, and the answer is no.**

**It is cheap because you usually already have the dates.** It takes an hour, and an hour spent here saves you from publishing something a reader can break in a minute.

**The Pittsburgh course ran exactly this test on its own title** and found Indianapolis identifying a neighbourhood as blighted in 1945 and demolishing it in 1948, on the same timeline as Pittsburgh's rather than after it. **Parallel adoption, not a copy-chain.** Section 3 runs the same test on this course's flagship claim, with the same result.

## Question 2. Mechanism. By what physical route would the influence have travelled?

A cause needs a channel. **Name it.** For a claim about cities, the plausible channels are short and countable:
- **Money.** A federal grant programme, a matching formula, a trust fund.
- **Law.** A binding opinion, a statute, a regulation, a model code adopted by reference.
- **Paper.** A published plan, a manual, a report, a professional journal.
- **People.** A planner, an official, a consultant, a delegation that went home and wrote something.

**If you cannot name the channel, you do not have a mechanism, and without a mechanism you have a resemblance.** Notice how much work this question does: it is the question that turns "Pittsburgh was famous" into "and how, exactly, would that fame have reached the Indianapolis Redevelopment Commission?"

## Question 3. Document. Where is the paper?

**A citation, a copied plan, a named person, or a funding stream.** One of those four, and you have to be able to say where it is. Not "there must be records"; **which records, held by whom.**

**This is where a claim becomes checkable by somebody other than you**, which is the whole point of citing anything. The strongest form is a document at both ends: the authorising instrument in place A, and place B's own record showing it in use, with a date.

## Question 4. Alternative cause. What else would produce the same result?

**The last question is the one people skip, and it is the one that matters most for this series.** If a shared federal statute funded both places, then both places doing the same thing is exactly what you would expect **whether or not** either had ever heard of the other. **A common upstream is the alternative explanation for almost every city-to-city resemblance in this catalogue**, which is why Section 2 reads that upstream before Section 3 draws a single line between two cities.

**Two other alternatives to keep in view.**
- **Parallel invention.** Two places facing the same problem with the same legal materials in the same decade will often reach the same answer independently. That is not transmission. **It is convergence**, and it is extremely common in American law, where fifty legislatures work in parallel on the same national problem.
- **Common professional training.** Planners read the same journals and were taught the same doctrines. A shared idea can travel through a profession without either city knowing the other exists.

## Reading the verdict

| Passes | Verdict | What you may write |
|---|---|---|
| All four | **Connection** | Name the kind from lesson 2 and state it plainly |
| 2, 3, 4 but not 1 | **Not a cause** | Say what the later thing actually did do, which is often "made the earlier thing safe" |
| 1, 2 and 4 but not 3 | **Lead, not a finding** | Say it is unverified and name the record that would settle it |
| 1 and 3 but not 4 | **Confounded** | Report the common upstream as the better explanation |
| Chronology only | **Rhyme** | Use the word "rhyme" and stop |

**One habit that outlasts every fact in this course.** When a claim fails a test, **report the failure in the write-up.** The failure is a finding. Every course in this series has published one, and the catalogue is more trustworthy because of it, not less.

## Sources
- Berman v. Parker, 348 U.S. 26 (1954). https://www.law.cornell.edu/supremecourt/text/348/26
- Housing Act of 1949, Pub. L. No. 81-171, 63 Stat. 413 (1949). https://www.govinfo.gov/content/pkg/STATUTE-63/pdf/STATUTE-63-Pg413.pdf
- Neumann, T. (2016, February 1). *The "spiritual capital" of the Rust Belt: Pittsburgh and the postindustrial transformation of North Atlantic cities*. Global Urban History. https://globalurbanhistory.com/2016/02/01/the-spiritual-capital-of-the-rust-belt-pittsburgh-and-the-postindustrial-transformation-of-north-atlantic-cities/`,
      recallContent: [
        {
          prompt: "Name the six kinds of connection in order, strongest first.",
          answer: "Source to use; model to copy; doctrine pair; person to place; instrument lineage; thematic rhyme.",
        },
        {
          prompt: "State the hard rule in the form the course uses.",
          answer: "A shared pattern is a rhyme; a documented line is a connection. A documented line means a citation, a copied plan, a named person, or a funding stream.",
        },
        {
          prompt: "Why is model-to-copy the category where confident storytelling goes wrong?",
          answer: "Because being admired is not being copied. More than seventy delegations came to study Pittsburgh's renewal, which is documented, and \"other cities copied Pittsburgh's clearance\" still failed a date table. Admiration is evidence of reputation; copying needs evidence of a copy.",
        },
        {
          prompt: "What did the Baltimore course find that complicates the idea of instrument lineage?",
          answer: "That the baton pass did not happen on schedule. Guilford's restrictive covenant dates from 1913, four years before Buchanan v. Warley ended racial zoning in 1917, so the covenant did not wait for the ordinance to fail. A lineage of purpose is real; a tidy sequence in time usually is not.",
        },
        {
          prompt: "Is a thematic rhyme a defect?",
          answer: "No. It is a category, and naming things correctly is the point of having categories. A rhyme is a good reason to go looking for a line, but it is not a substitute for finding one.",
        },
      ],
    },
    {
      slug: "htt-quiz-the-test",
      title: "4 · Quiz: the taxonomy and the test",
      section: "Section 1 · The Test",
      quiz: {
        passingScore: 70,
        // 15-question bank served 8 at a time with shuffled options, so a retake is a different
        // quiz rather than the same list (the repo standard, src/lib/quiz.ts).
        questionsPerAttempt: 8,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What does this course say the city courses actually documented, taken together?",
            options: [
              "A shared toolkit, largely federal, applied locally",
              "A set of unrelated local accidents that happen to look alike because American cities all look alike",
              "One conspiracy directed from a single office in Washington throughout the postwar decades",
              "A story about architecture that has very little to do with law, money or statutes",
            ],
            correctIndex: 0,
            explanation: "The learner already knows the instruments from the city courses. This course teaches the transmission: the same statutes paid for them and one opinion made the central tool safe nationwide.",
            sourceLessonSlug: "htt-eleven-cities-or-one-toolkit",
          },
          {
            prompt: "Why does this course teach the taxonomy and the test before drawing any connection?",
            options: [
              "Because the statutes are too long to read at the start of a course and need warming up to",
              "Because the test has to work on this course's own claims, not only on other people's",
              "Because learners are expected to disagree with the argument and need practice arguing",
              "Because the connections themselves are all rhymes and none of them survive any scrutiny at all",
            ],
            correctIndex: 1,
            explanation: "Every course in the series weakened its own headline in public. A capstone that assembled them into one confident story would undo that work.",
            sourceLessonSlug: "htt-eleven-cities-or-one-toolkit",
          },
          {
            prompt: "Why is this not a six-beat site course?",
            options: [
              "Because the six-beat template was retired after the pilot and replaced with a newer one",
              "Because it is aimed at a different age group than the other courses in the series are",
              "It has no single place, so there is nothing to stand in and no tour to capture",
              "Because a capstone is not allowed to reuse structures used by the courses beneath it",
            ],
            correctIndex: 2,
            explanation: "Its structure is an argument instead of a walk. Where it needs a place, it borrows one from the course that did that ground properly and says which course.",
            sourceLessonSlug: "htt-eleven-cities-or-one-toolkit",
          },
          {
            prompt: "Which is the STRONGEST kind of connection in this course's taxonomy?",
            options: [
              "Thematic rhyme, because resemblance across many places is the most widely observed pattern",
              "Instrument lineage, because it covers the longest span of time and the most instruments",
              "Model to copy, because a programme that others imitate leaves the largest documentary trail",
              "Source to use",
            ],
            correctIndex: 3,
            explanation: "Source to use has a document at both ends: the authorising instrument in one place and the tool in use in another. The only thing that can break it is chronology.",
            sourceLessonSlug: "htt-taxonomy",
          },
          {
            prompt: "Which is the WEAKEST kind of connection in the taxonomy?",
            options: [
              "Thematic rhyme",
              "Person to place, because individual careers are difficult to reconstruct from public records",
              "Doctrine pair, because judicial opinions rarely explain the reasoning behind a holding",
              "Model to copy, because delegations of visiting officials seldom leave any usable record",
            ],
            correctIndex: 0,
            explanation: "A rhyme is a resemblance. It is a category worth naming and a good reason to go looking for a line, but it is not itself a connection.",
            sourceLessonSlug: "htt-taxonomy",
          },
          {
            prompt: "State the hard rule that governs the whole course.",
            options: [
              "Any resemblance between two cities counts as a link if both cities took federal money in the same decade",
              "A shared pattern is a rhyme; a documented line is a connection",
              "A connection is established once two independent secondary sources describe the same resemblance",
              "Nothing counts as a connection unless a court has expressly said so in a published opinion",
            ],
            correctIndex: 1,
            explanation: "A documented line means one of four things you can put your finger on: a citation, a copied plan, a named person, or a funding stream.",
            sourceLessonSlug: "htt-taxonomy",
          },
          {
            prompt: "Which four things count as a documented line?",
            options: [
              "A photograph, a newspaper story, a memoir and a plaque erected by a local historical society",
              "A resemblance, a shared decade, a shared building type and a shared racial demographic pattern",
              "A citation, a copied plan, a named person, or a funding stream",
              "A statute, a map, an oral history interview and an architectural drawing of the replacement building",
            ],
            correctIndex: 2,
            explanation: "If you have none of those four and still want to say two places are linked, you have a rhyme, and the honest word is \"rhyme.\"",
            sourceLessonSlug: "htt-taxonomy",
          },
          {
            prompt: "What is the difference between admiration and copying, in the model-to-copy category?",
            options: [
              "Admiration is evidence of reputation; copying needs evidence of a copy",
              "There is no practical difference, because a city that is admired is by definition being imitated",
              "Admiration is documented in newspapers while copying is documented only in private correspondence",
              "Copying is what happens between neighbouring cities, and admiration is what happens across long distances",
            ],
            correctIndex: 0,
            explanation: "More than seventy delegations came to study Pittsburgh's renewal, which is documented and real, and \"other cities copied Pittsburgh's clearance\" still failed a date table.",
            sourceLessonSlug: "htt-taxonomy",
          },
          {
            prompt: "Milliken v. Bradley and Parents Involved are treated in this course as which kind of connection?",
            options: [
              "Source to use, because the earlier case is the direct legal authority for the later one",
              "A doctrine pair",
              "Instrument lineage, since the school district line evolved steadily between the two decisions",
              "Person to place, because several of the same lawyers appear on both sides of the two cases",
            ],
            correctIndex: 1,
            explanation: "Milliken limited what a court could compel across a district line; Parents Involved limited what a district could voluntarily choose. Reading them together frames one argument without making either the cause of the other.",
            sourceLessonSlug: "htt-taxonomy",
          },
          {
            prompt: "Which question does the test ask FIRST, and why?",
            options: [
              "Document, because a claim without paper behind it is not worth spending any further time on",
              "Alternative cause, because a common federal upstream explains most resemblances in this catalogue",
              "Mechanism, because naming the channel is what turns a resemblance into an argument",
              "Chronology, because it is the cheapest test and it kills more theses than anything else",
            ],
            correctIndex: 3,
            explanation: "Build a two-column table of date and event covering both places. If the proposed cause is later than the effects, you are done and the answer is no.",
            sourceLessonSlug: "htt-the-test",
          },
          {
            prompt: "The mechanism question asks you to name the channel. Which four channels does the lesson list?",
            options: [
              "Money, law, paper and people",
              "Rail, road, river and telegraph, the four ways information moved between American cities",
              "Federal, state, county and municipal, the four levels at which a decision can be taken",
              "Newspapers, universities, professional associations and political parties, the four institutions that spread ideas",
            ],
            correctIndex: 0,
            explanation: "If you cannot name the channel you do not have a mechanism, and without a mechanism you have a resemblance.",
            sourceLessonSlug: "htt-the-test",
          },
          {
            prompt: "What is the fourth question of the test, the one people skip?",
            options: [
              "Whether the two places are close enough together for officials to have travelled between them easily",
              "Whether the sources you are relying on are primary rather than secondary documents",
              "Alternative cause: what else would produce the same result",
              "Whether the outcome in the second city was worse than the outcome in the first city was",
            ],
            correctIndex: 2,
            explanation: "A common federal upstream is the alternative explanation for nearly every city-to-city resemblance in this catalogue, which is why Section 2 reads that upstream first.",
            sourceLessonSlug: "htt-the-test",
          },
          {
            prompt: "What is parallel invention, and why does it matter here?",
            options: [
              "Two places facing the same problem with the same legal materials reaching the same answer independently",
              "One legislature deliberately copying another legislature's statute word for word during the same legislative session",
              "A single planner producing two nearly identical plans for two different clients in the same year",
              "The practice of filing the same patent in more than one jurisdiction to protect an invention broadly",
            ],
            correctIndex: 0,
            explanation: "It is convergence, not transmission, and it is common in American law, where fifty legislatures work in parallel on the same national problem.",
            sourceLessonSlug: "htt-the-test",
          },
          {
            prompt: "A claim passes mechanism, document and alternative cause but FAILS chronology. What may you write?",
            options: [
              "That the connection holds, since three of the four tests were passed and that is a clear majority",
              "That the later thing did not cause the earlier one, and then what it actually did do",
              "That the dates in the surviving records must be unreliable and should be set aside for now",
              "Nothing at all, because a claim that fails any part of the test cannot be discussed in public",
            ],
            correctIndex: 1,
            explanation: "The honest answer is often that the later instrument made the earlier practice safe rather than starting it, which is exactly the verdict Section 3 reaches.",
            sourceLessonSlug: "htt-the-test",
          },
          {
            prompt: "What should you do when a claim of yours fails one of the four tests?",
            options: [
              "Set it aside quietly and build the write-up around the claims that did survive the testing",
              "Look for a secondary source that states the claim anyway and cite that source instead",
              "Report the failure in the write-up, because the failure is a finding",
              "Rewrite the claim as a question so that the reader is left to decide the matter for themselves",
            ],
            correctIndex: 2,
            explanation: "Every course in this series has published one, and the catalogue is more trustworthy because of it, not less.",
            sourceLessonSlug: "htt-the-test",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 2 · The Federal Upstream  (the spine: the statutes and the manual, read directly)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "htt-act-1949",
      title: "5 · The Housing Act of 1949: the money that paid for the clearance",
      section: "Section 2 · The Federal Upstream",
      body: `**Section 1 told you not to draw a line without a mechanism. This section is the mechanism.** Before you can grade any claim that one city influenced another, you have to know what both cities were being offered from above, because **a shared offer explains a shared behaviour without either city ever hearing of the other.** That is the fourth question of the test, and this whole section is the answer to it.

**The instrument.** The **Housing Act of 1949**, Public Law 81-171, **63 Stat. 413**, approved **July 15, 1949**. **Title I** is the one this series keeps running into: it is captioned slum clearance and community development and redevelopment, and it created the national money for what everybody would soon call urban renewal (Housing Act of 1949).

## Read the declaration of policy, because both halves of the century are in one sentence

The Act opens with a **declaration of national housing policy**, now codified at 42 U.S.C. § 1441:

> "The Congress hereby declares that the general welfare and security of the Nation and the health and living standards of its people require housing production and related community development sufficient to remedy the serious housing shortage, the elimination of substandard and other inadequate housing through the clearance of slums and blighted areas, and the realization as soon as feasible of the goal of a decent home and a suitable living environment for every American family, thus contributing to the development and redevelopment of communities and to the advancement of the growth, wealth, and security of the Nation." (Housing Act of 1949; 42 U.S.C. § 1441.)

**Take that sentence apart slowly, because it is the most quoted line in American housing law and it is usually quoted in halves.**

1. **"A decent home and a suitable living environment for every American family."** This is the promise, and it is a genuine one. It is the sentence housing advocates have cited for seventy-five years, and it is why the 1949 Act is remembered by some people as a landmark of the welfare state.
2. **"The elimination of substandard and other inadequate housing through the clearance of slums and blighted areas."** This is the method, and the operative word is **"through."** The statute does not treat clearance as a regrettable side effect of the goal. **Clearance is written into the goal as the way it will be reached.**
3. **The two halves are one sentence.** No reader has to choose between the generous reading and the destructive one. **The Act said both things at once, in one breath, and both things happened.**

**This is why the word "blighted" appears in every Powers section in this series.** It is not local jargon that eleven cities happened to invent. **It is the term of art in the federal statute the money came from.**

## The mechanism, in the order it ran

| Step | Who does it | What it produces |
|---|---|---|
| **1. Designate** | A local public agency, under state law, finds an area slum or blighted | A designation, a boundary, and a record |
| **2. Acquire** | The same agency buys or condemns the land inside the boundary | Offers, appraisals, condemnation filings |
| **3. Clear** | Buildings come down | Demolition contracts |
| **4. Write down** | The cleared land is sold to a redeveloper for **less** than the agency paid | A disposition agreement |
| **5. Reimburse** | The federal government pays most of the loss | A capital-grant contract |

**Step 4 is the one to understand, because it is the whole invention.** Cleared inner-city land generally could not be sold for what it cost to assemble and clear. **The gap between those two numbers is the "net project cost,"** and the federal capital grant covered up to **two thirds** of it, with the locality supplying local grants-in-aid worth at least **one third** of aggregate net project costs (Housing Act of 1949).

**Now say what that meant to a city council.** For every three dollars of loss on the deal, **the city found one and Washington found two.** No city in this series had to invent that arrangement, argue for it, or borrow it from a neighbour. **It was a standing federal offer, open in every state at once, from 1949.**

## What this does to your grading of claims

**This is the single most useful fact in the course for testing a connection**, and it cuts against most of the exciting ones.

- **It is a funding stream**, which lesson 2 listed as one of the four things that make a documented line. So a city taking Title I money is connected to the federal programme by a document. **That connection is easy and real.**
- **It is also the alternative cause.** If two cities cleared two Black districts within a few years of each other, **the shared federal cheque is a complete explanation of the timing**, and you need something more to argue that either city influenced the other. **The Pittsburgh course reached exactly this conclusion about its own headline.**

**The transferable habit.** When two places do the same thing at the same time, **look for the shared cheque before you look for the shared idea.** Money leaves better records than influence does, and it is usually the true answer.

## The half of this Act that this series talks about less

**The 1949 Act had two halves.** Title I paid for clearance. **Title III authorised a large public housing programme, on the order of 810,000 units over six years.** How many of those units were actually built, how quickly, and how well they matched what clearance removed, is a real historical question with a literature behind it, and **this course has not answered it** (von Hoffman, 2000). **Naming the other half is not a defence of the Act. It is a refusal to describe a statute by only the part that fits the argument.**

## Sources
- Housing Act of 1949, Pub. L. No. 81-171, 63 Stat. 413 (1949). https://www.govinfo.gov/content/pkg/STATUTE-63/pdf/STATUTE-63-Pg413.pdf
- 42 U.S.C. § 1441 (Congressional declaration of national housing policy). https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title42-section1441&num=0&edition=prelim
- von Hoffman, A. (2000). A study in contradictions: The origins and legacy of the Housing Act of 1949. *Housing Policy Debate, 11*(2), 299-326. https://www.tandfonline.com/doi/abs/10.1080/10511482.2000.9521370`,
      recallContent: [
        {
          prompt: "Name the four questions of the test, in order.",
          answer: "Chronology (does the cause come before the effect), mechanism (by what route would influence have travelled), document (where is the paper), and alternative cause (what else would produce the same result).",
        },
        {
          prompt: "Which four channels can a mechanism run through?",
          answer: "Money (a grant programme, a matching formula, a trust fund), law (an opinion, a statute, a regulation, a model code), paper (a plan, a manual, a report, a journal), and people (a planner, an official, a consultant, a delegation).",
        },
        {
          prompt: "If a claim passes mechanism, document and alternative cause but fails chronology, what may you write?",
          answer: "That the later thing did not cause the earlier one, and then what it actually did do. Often the honest answer is that the later instrument made the earlier practice safe rather than starting it.",
        },
        {
          prompt: "Why is a common upstream the alternative explanation for most city-to-city resemblances here?",
          answer: "Because if a shared federal statute funded both places, both places doing the same thing is exactly what you would expect whether or not either had heard of the other. Parallel invention and common professional training work the same way.",
        },
        {
          prompt: "What should you do when your own claim fails a test?",
          answer: "Report the failure in the write-up, because the failure is a finding. Every course in this series has published one, and the catalogue is more trustworthy for it.",
        },
      ],
    },
    {
      slug: "htt-act-1954",
      title: "6 · The Housing Act of 1954: the year the word changed",
      section: "Section 2 · The Federal Upstream",
      body: `Five years later Congress rewrote the programme, and the rewrite matters for two reasons: **it changed what the money could be spent on, and it changed what the thing was called.** Both changes travelled to every city in this series.

**The instrument.** The **Housing Act of 1954**, Public Law 83-560, **68 Stat. 590**, approved **August 2, 1954** (Housing Act of 1954).

**Hold that date next to one you already know.** *Berman v. Parker* was decided on **November 22, 1954** (Berman v. Parker, 1954). **The statute that rebuilt the programme and the opinion that made the programme constitutionally safe are three and a half months apart in the same year.** 1954 is the hinge of this entire series, and Section 3 is about the second half of it.

## Change one: the name

The 1949 programme was **urban redevelopment**: find a slum, clear it, rebuild. The 1954 Act reoriented federal intervention away from that narrower clearance-and-public-housing mandate toward a broader strategy, **urban renewal**, which added **rehabilitation and conservation** of existing neighbourhoods to demolition, and which leaned harder on **private** redevelopers to do the building (Housing Act of 1954).

**A change of name is not cosmetic when the name is in a statute.** After 1954 the local agency in almost every city in this series is an **urban renewal** agency, applying for **urban renewal** funds, under an **urban renewal** plan. **When you find that vocabulary in a local record, you have found a federal programme, and you can date the document from the word alone.** That is a small, genuinely useful research skill.

## Change two: the workable program

The 1954 Act attached a condition. To receive federal urban renewal aid, a locality had to submit and maintain a **"workable program"** for community improvement, a package of local commitments that typically had to include such things as a comprehensive community plan for land use and public improvements, a zoning ordinance and map, subdivision regulations, and housing-code enforcement (Housing Act of 1954; Rhyne, 1960).

**Read what that condition actually does, because it is the cleanest example of transmission in the whole course.** Washington did not order any city to adopt a zoning ordinance. **It made federal money conditional on having one.** A city that wanted the grant produced the plan, the map, the code and the enforcement machinery, and produced them to a federal specification.

**That is a mechanism with a name.** It is **money, converted into law, at a distance.** If you are hunting for how a practice spread across hundreds of American cities in the same decade without any city copying any other, **the conditional grant is very often the answer**, and it leaves an application file behind in each city that took it.

## Change three: the insurance

The Act also put the **Federal Housing Administration** to work inside renewal areas. **Section 220** provided FHA mortgage insurance for housing built or rehabilitated in urban renewal areas, and **Section 221** provided insurance aimed at housing for families displaced by government action (Housing Act of 1954).

**Notice the shape of that.** The same federal agency whose underwriting rules helped make those neighbourhoods unlendable in the first place, which is lesson 7, was now insuring the mortgages on what replaced them. **Both facts are about the same agency, and a course that reports only one of them is reporting half an instrument.**

## What this lesson is NOT claiming

**It is not claiming that the 1954 Act caused any particular clearance.** Indianapolis had been demolishing near Indiana Avenue since 1948, six years earlier, under Indiana's own 1945 machinery. **The 1954 Act reshaped and re-funded a programme that was already running.** What it gives you is a mechanism and a vocabulary, and lesson 3 warned you to keep those separate from causation.

## Sources
- Housing Act of 1954, Pub. L. No. 83-560, 68 Stat. 590 (1954).
- Berman v. Parker, 348 U.S. 26 (1954). https://www.law.cornell.edu/supremecourt/text/348/26
- Rhyne, C. S. (1960). The workable program: A challenge for community improvement. *Law and Contemporary Problems, 25*(4), 685-704. https://scholarship.law.duke.edu/lcp/vol25/iss4/
- von Hoffman, A. (2000). A study in contradictions: The origins and legacy of the Housing Act of 1949. *Housing Policy Debate, 11*(2), 299-326. https://www.tandfonline.com/doi/abs/10.1080/10511482.2000.9521370`,
      recallContent: [
        {
          prompt: "Give the citation and date of the Housing Act of 1949, and what Title I did.",
          answer: "Public Law 81-171, 63 Stat. 413, approved July 15, 1949. Title I created the national money for slum clearance and urban redevelopment, the programme everyone soon called urban renewal.",
        },
        {
          prompt: "What is the operative word in the 1949 declaration of policy, and why?",
          answer: "\"Through.\" The statute promises a decent home and a suitable living environment for every American family, and it names the elimination of substandard housing \"through the clearance of slums and blighted areas.\" Clearance is written into the goal as the way it will be reached.",
        },
        {
          prompt: "Explain the write-down, and who paid for it.",
          answer: "Cleared land was sold to a redeveloper for less than the agency paid to assemble and clear it. The gap is the net project cost, and the federal capital grant covered up to two thirds of it, with the locality supplying local grants-in-aid worth at least one third of aggregate net project costs.",
        },
        {
          prompt: "Why does the 1949 Act cut against exciting city-to-city claims?",
          answer: "Because it is the alternative cause. If two cities cleared two districts within a few years of each other, a standing federal offer open in every state explains the timing completely, and you need something more to argue that either influenced the other.",
        },
        {
          prompt: "What was the other half of the 1949 Act, and what does this course say about it?",
          answer: "Title III authorised a large public housing programme, on the order of 810,000 units over six years. How many were built, how fast, and how well they matched what clearance removed is a real question this course has not answered. Naming the other half is a refusal to describe a statute by only the part that fits the argument.",
        },
      ],
    },
    {
      slug: "htt-fha-manual",
      title: "7 · The manual: the instrument you can quote",
      section: "Section 2 · The Federal Upstream",
      body: `The two statutes paid for the clearance. **This lesson is about the document that helped produce the conditions the clearance was justified by**, and it is the best-behaved piece of evidence in the entire series, because it says what it means in federal print.

**The instrument.** The **Federal Housing Administration Underwriting Manual**, the rulebook FHA valuators applied when deciding whether a mortgage was insurable. Because the FHA insured an enormous share of the private mortgage market, **its rules shaped where private capital would and would not go**, nationwide, at once.

## Its own words

The 1938 manual states plainly:

- **"If a neighborhood is to retain stability, it is necessary that properties shall continue to be occupied by the same social and racial classes"** (Federal Housing Administration, 1938, section 937).
- It lists among the **"adverse influences"** a valuator must guard against the **"infiltration of business and industrial uses, lower class occupancy, and inharmonious racial groups"** (Federal Housing Administration, 1938, section 937).
- And it recommends that deed restrictions include **"prohibition of the occupancy of properties except by the race for which they are intended"** (Federal Housing Administration, 1938, section 980).

**Read the third one twice.** The federal government's own underwriting manual **recommended the racial covenant** that private developers were already writing into deeds. **That is not an inference about federal attitudes. It is the federal instrument endorsing the private one, in writing, in a document with a section number.**

## Why this course leans on the manual and is careful with the map

**The famous object in this story is the other one:** the Home Owners' Loan Corporation "Residential Security" maps of the late 1930s, with their green, blue, yellow and red neighbourhoods. They are vivid, they are online, and their written area descriptions name race directly.

**The Baltimore course, which had to teach both, found the tidy causal story about the maps is disputed.** Scholars who read the lending records point out that the maps were largely confidential internal documents and that HOLC itself lent inside the red areas, which is not what a simple redlining account predicts (Hillier, 2003). **Later quantitative work does find the graded boundaries carried some independent long-run effect** (Aaronson et al., 2021). So the map is real evidence with real downstream correlation, and it is **not** a proven single cause.

**The manual has no such problem.** It is not confidential, it is not disputed, and it does not require an inference. **The rule for the rest of your research life is the one Baltimore stated: when you have a vivid instrument whose causal role is contested and a duller instrument whose words are undisputed, build the argument on the words. A picture persuades; a quotation proves.**

## What the manual explains that nothing else in this course does

**Go back to the surveys the Berman opinion recited**: 64.3 percent of dwellings beyond repair, 60.3 percent with no baths, 83.8 percent lacking central heating (Berman v. Parker, 1954). **Those measurements were real.** The DC course's central idea is that **the condition and its cause can be the same policy at two different dates**: a neighbourhood is starved of mortgage capital for a generation, its housing decays, and the decay is then the legal basis for clearing the people who lived through it.

**The manual is the paper trail for the first half of that circle.** It is the federal document instructing that capital should avoid exactly the neighbourhoods that Title I money would later be spent clearing. **Both instruments are federal, they run twenty years apart, and they point at the same blocks.**

**Be precise about what that is and is not.** It is a documented, quotable federal policy of racial underwriting, and it is a genuine common upstream. **It is not a proof that any specific parcel in any specific city was denied a specific loan**, which would need that city's lending records, and no such record has been read into this course.

## Sources
- Aaronson, D., Hartley, D., & Mazumder, B. (2021). The effects of the 1930s HOLC "redlining" maps. *American Economic Journal: Economic Policy, 13*(4), 355-392. https://www.aeaweb.org/articles?id=10.1257/pol.20190414
- Berman v. Parker, 348 U.S. 26 (1954). https://www.law.cornell.edu/supremecourt/text/348/26
- Federal Housing Administration. (1938). *Underwriting manual: Underwriting and valuation procedure under Title II of the National Housing Act*. U.S. Government Printing Office.
- Hillier, A. E. (2003). Redlining and the Home Owners' Loan Corporation. *Journal of Urban History, 29*(4), 394-420. https://doi.org/10.1177/0096144203029004002
- Nelson, R. K., Winling, L., Marciano, R., Connolly, N. D. B., et al. (n.d.). *Mapping inequality: Redlining in New Deal America*. Digital Scholarship Lab, University of Richmond. https://dsl.richmond.edu/panorama/redlining/`,
      recallContent: [
        {
          prompt: "Give the citation and date of the Housing Act of 1954, and why the date matters.",
          answer: "Public Law 83-560, 68 Stat. 590, approved August 2, 1954. Berman v. Parker was decided on November 22, 1954, so the statute that rebuilt the programme and the opinion that made it constitutionally safe are three and a half months apart in the same year.",
        },
        {
          prompt: "What changed about the name in 1954, and why is that useful to a researcher?",
          answer: "Urban redevelopment became urban renewal, adding rehabilitation and conservation to demolition and leaning harder on private redevelopers. After 1954 the vocabulary in a local record tells you that you have found a federal programme, and you can date the document from the word alone.",
        },
        {
          prompt: "What was the workable program, and what kind of mechanism is it?",
          answer: "A package of local commitments a city had to submit and maintain to receive urban renewal aid, typically including a comprehensive plan, a zoning ordinance and map, subdivision regulations and housing-code enforcement. It is money converted into law at a distance: the conditional grant.",
        },
        {
          prompt: "What did Sections 220 and 221 of the 1954 Act do, and what is the irony in them?",
          answer: "Section 220 provided FHA mortgage insurance for housing built or rehabilitated in urban renewal areas, and Section 221 aimed insurance at housing for families displaced by government action. The same agency whose underwriting rules helped make those neighbourhoods unlendable was now insuring the mortgages on what replaced them.",
        },
        {
          prompt: "What is lesson 6 careful NOT to claim?",
          answer: "That the 1954 Act caused any particular clearance. Indianapolis had been demolishing near Indiana Avenue since 1948 under Indiana's own 1945 machinery. The Act reshaped and re-funded a programme already running, and a mechanism is not the same thing as a cause.",
        },
      ],
    },
    {
      slug: "htt-highway-1956",
      title: "8 · The Federal-Aid Highway Act of 1956, and the word \"Defense\"",
      section: "Section 2 · The Federal Upstream",
      body: `The last piece of the upstream is the one every city course in this series has to handle carefully, because it is the instrument the popular story most often over-credits. **The Indiana Avenue course found the highway was not what cleared the Avenue.** So read this lesson for what the Act actually did, which is enormous, and not for what it is usually blamed for.

## The instrument, and its full name

The **Federal-Aid Highway Act of 1956**, Public Law 84-627, **70 Stat. 374**, signed **June 29, 1956**. The Act **changed the system's name to the "National System of Interstate and Defense Highways,"** set the **federal share of project cost at 90 percent**, and **increased the proposed length of the system to 41,000 miles**. **Title II of the Act, the Highway Revenue Act of 1956, created the Highway Trust Fund** as a dedicated source of money for it (Federal Highway Administration, n.d.-a; Federal-Aid Highway Act of 1956).

## The Defense point, which is the bridge to the war material

**The word "Defense" in that name is not decoration, and it did not start in 1956.** The **Federal-Aid Highway Act of 1944** had already called for the designation of a **National System of Interstate Highways**, up to **40,000 miles**, described in the Act's own terms as

> "so located, as to connect by routes, direct as practical, the principal metropolitan areas, cities, and industrial centers, to serve the National Defense" (Federal Highway Administration, n.d.-a).

And when the first routes were selected, the process was not purely civilian: on **August 2, 1947**, Commissioner MacDonald and Federal Works Administrator Philip B. Fleming announced the selection of the first **37,700 miles**, routes proposed by the state highway agencies and **reviewed by the Department of Defense** (Federal Highway Administration, n.d.-a).

**This is the documented hinge between two halves of this catalogue.** The war courses in this series describe a country organised for national defence; the city courses describe neighbourhoods cut by roads. **The Interstate system is where those two subjects are the same subject**, and you do not have to infer it from atmosphere: the defence rationale is in the 1944 Act's language, in the 1947 review by the Defense Department, and in the 1956 name.

**Now hold it honestly, which is the discipline of this whole course.** The defence rationale is **real and documented**. It is also **not** a proof that any particular route was chosen for defence reasons, and there are famous folk claims about the system (that a fixed fraction of it had to be straight enough to land aircraft, for example) that this course has not verified and therefore does not repeat. **Cite the name and the statute. Do not decorate them.**

## What the 1956 Act actually did to cities, and what it did not

**What it did: it changed the price.** Under a **90 percent federal share**, a state or city choosing an urban Interstate alignment was spending roughly **ten cents on the dollar** of the construction cost. **A dedicated trust fund meant the money did not have to be fought for annually.** If you want a single sentence for why so much urban highway got built so fast after 1956, it is that one, and it is a funding stream, which lesson 2 counts as a documented line.

**What it did not do: choose anybody's route.** **Alignments were proposed by state highway agencies**, and in **September 1955** the Bureau of Public Roads published *General Location of National System of Interstate Highways Including All Additional Routes at Urban Areas*, known as **"the Yellow Book" for the colour of its cover**, containing maps showing where the urban Interstates would go (Federal Highway Administration, n.d.-b). **So the routes existed on paper before the money did.** Nothing in the 1956 statute names a neighbourhood in Indianapolis, Baltimore or Washington.

**That distinction is the entire reason this lesson exists.** The Act is a **funding and framework instrument**. The **alignment decision** is a separate instrument, taken locally and at the state level, and the city courses in this series are where you go to read one.

## The pattern in the alignments, and how to state it

Deborah Archer's study of highways and racial equity documents that urban interstates were **repeatedly routed through Black neighbourhoods**, and takes its title from the placard carried in the Washington freeway revolt, "white men's roads through black men's homes" (Archer, 2020). **That pattern is documented and it is not in dispute here.**

**But say it in the right order, or you will have made a claim you cannot carry.**
- **Sourceable:** a federal Act made urban highway construction cheap for states, a federal publication mapped urban routes in 1955, and the alignments that were then chosen fell disproportionately on Black neighbourhoods across many cities (Archer, 2020; Federal Highway Administration, n.d.-a, n.d.-b).
- **Not sourced here:** that the 1956 statute directed, required or contemplated that outcome. **The Act's text does not do that**, and a claim about intent needs the records of the bodies that actually drew the lines.

**The method, which is the same one you met in lesson 3.** A common upstream that made a choice cheap is not the same as the choice. **Name the upstream, then go find who chose.**

## Sources
- Archer, D. N. (2020). "White men's roads through Black men's homes": Advancing racial equity through highway reconstruction. *Vanderbilt Law Review, 73*(5). https://scholarship.law.vanderbilt.edu/vlr/vol73/iss5/1/
- Federal-Aid Highway Act of 1956, Pub. L. No. 84-627, 70 Stat. 374 (1956). https://www.govinfo.gov/content/pkg/STATUTE-70/pdf/STATUTE-70-Pg374.pdf
- Federal Highway Administration. (n.d.-a). *Interstate system: Design*. U.S. Department of Transportation. https://www.fhwa.dot.gov/programadmin/interstate.cfm
- Federal Highway Administration. (n.d.-b). *Designating the urban Interstates*. U.S. Department of Transportation. https://highways.dot.gov/highway-history/interstate-system/designating-urban-interstates`,
      recallContent: [
        {
          prompt: "Quote the FHA Underwriting Manual's rule about neighbourhood stability.",
          answer: "\"If a neighborhood is to retain stability, it is necessary that properties shall continue to be occupied by the same social and racial classes\" (Federal Housing Administration, 1938, section 937).",
        },
        {
          prompt: "What did the manual recommend that deed restrictions include, and why is that a documented rather than an inferred link?",
          answer: "\"Prohibition of the occupancy of properties except by the race for which they are intended\" (section 980). It is documented because the federal instrument endorses the private racial covenant in writing, in a document with a section number, rather than leaving it to inference.",
        },
        {
          prompt: "Why does this course lean on the manual rather than the HOLC map?",
          answer: "Because the map's tidy causal story is disputed: the maps were largely confidential and HOLC lent inside the red areas, though later work finds the boundaries carried some independent long-run effect. The manual is not confidential, not disputed, and needs no inference. A picture persuades; a quotation proves.",
        },
        {
          prompt: "How does the manual explain the survey figures Berman recited?",
          answer: "It is the paper trail for the first half of the circle. Federal policy instructed capital to avoid the very neighbourhoods Title I money would later clear, so a neighbourhood starved of mortgage capital decayed, and the decay became the legal basis for clearing the people who lived through it.",
        },
        {
          prompt: "What does the manual NOT prove?",
          answer: "That any specific parcel in any specific city was denied a specific loan. That would need that city's lending records, and none has been read into this course.",
        },
      ],
    },
    {
      slug: "htt-quiz-upstream",
      title: "9 · Quiz: the federal upstream",
      section: "Section 2 · The Federal Upstream",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Give the citation and date of the Housing Act of 1949.",
            options: [
              "Public Law 83-560, 68 Stat. 590, approved on the second day of August in the year 1954",
              "Public Law 84-627, 70 Stat. 374, signed on the twenty-ninth day of June in the year 1956",
              "Public Law 81-171, 63 Stat. 413, approved July 15, 1949",
              "Public Law 93-198, 87 Stat. 774, signed on the twenty-fourth day of December in 1973",
            ],
            correctIndex: 2,
            explanation: "Title I of that Act created the national money for slum clearance and urban redevelopment, the programme soon called urban renewal.",
            sourceLessonSlug: "htt-act-1949",
          },
          {
            prompt: "In the 1949 declaration of national housing policy, what is the operative word this course points to?",
            options: [
              "\"Through,\" because clearance is written into the goal as the way it will be reached",
              "\"Decent,\" because the standard of a decent home was never defined anywhere in the statute itself",
              "\"Feasible,\" because it gave every locality an unlimited amount of time to reach the stated goal",
              "\"Welfare,\" because it placed the whole programme under the general welfare clause of the Constitution",
            ],
            correctIndex: 0,
            explanation: "The Act promises a decent home and a suitable living environment, and names elimination of substandard housing \"through the clearance of slums and blighted areas.\" Both halves are one sentence.",
            sourceLessonSlug: "htt-act-1949",
          },
          {
            prompt: "What is the \"write-down\" in a Title I project?",
            options: [
              "A reduction in the assessed value of nearby parcels once the clearance work has been completed",
              "The written record a redevelopment commission must keep of each demolition it carries out",
              "A discount on federal income tax offered to the private developer who purchased the cleared site",
              "Cleared land sold to a redeveloper for less than the agency paid to assemble and clear it",
            ],
            correctIndex: 3,
            explanation: "The gap between those two numbers is the net project cost, and the federal capital grant covered up to two thirds of it.",
            sourceLessonSlug: "htt-act-1949",
          },
          {
            prompt: "How was the net project cost split between Washington and the locality?",
            options: [
              "Up to two thirds federal, with local grants-in-aid worth at least one third",
              "Evenly, half and half, with the state government contributing whatever remained after the split",
              "Entirely federal, since a local agency could not lawfully contribute to a federal grant programme",
              "Ninety percent federal and ten percent local, the same formula the highway programme later used",
            ],
            correctIndex: 0,
            explanation: "For every three dollars of loss on the deal the city found one and Washington found two, as a standing offer open in every state from 1949.",
            sourceLessonSlug: "htt-act-1949",
          },
          {
            prompt: "Why does the 1949 Act make many exciting city-to-city claims harder to sustain?",
            options: [
              "Because the Act expressly forbade one locality from consulting another locality's redevelopment plan",
              "It is the alternative cause: a standing federal offer explains simultaneous clearances",
              "Because the records generated by Title I projects were sealed for fifty years after each project closed",
              "Because most cities in this series declined the federal money and paid for clearance out of local funds",
            ],
            correctIndex: 1,
            explanation: "When two places do the same thing at the same time, look for the shared cheque before you look for the shared idea.",
            sourceLessonSlug: "htt-act-1949",
          },
          {
            prompt: "What did the Housing Act of 1954 change about the name of the programme?",
            options: [
              "Urban redevelopment became urban renewal, adding rehabilitation and conservation to demolition",
              "Slum clearance became blight elimination, which is why the word blight enters the local records after 1954",
              "Public housing became assisted housing, which is the vocabulary every later federal statute uses",
              "Community development became community improvement, a change of wording with no legal consequence at all",
            ],
            correctIndex: 0,
            explanation: "It also leaned harder on private redevelopers. When you find that vocabulary in a local record you have found a federal programme, and you can date the document from the word.",
            sourceLessonSlug: "htt-act-1954",
          },
          {
            prompt: "What was the \"workable program\" required by the 1954 Act?",
            options: [
              "A schedule setting out the order in which a city would demolish the buildings inside a project area",
              "A federal review of every local condemnation filing before the taking could proceed to a court",
              "A package of local commitments: a plan, a zoning ordinance and map, and code enforcement",
              "An agreement between two or more neighbouring cities to coordinate their renewal programmes regionally",
            ],
            correctIndex: 2,
            explanation: "It is money converted into law at a distance. A city that wanted the grant produced the plan, the map, the code and the enforcement machinery, to a federal specification.",
            sourceLessonSlug: "htt-act-1954",
          },
          {
            prompt: "Why are the dates August 2, 1954 and November 22, 1954 taught together?",
            options: [
              "They are the dates on which Congress and the Court respectively considered the District of Columbia's budget",
              "The Housing Act of 1954 and Berman v. Parker are three and a half months apart in the same year",
              "They mark the beginning and the end of the first full federal fiscal year of the renewal programme",
              "They are the dates the Indianapolis Redevelopment Commission designated two separate blighted areas",
            ],
            correctIndex: 1,
            explanation: "The statute that rebuilt the programme and the opinion that made it constitutionally safe fall in the same year. 1954 is the hinge of the series.",
            sourceLessonSlug: "htt-act-1954",
          },
          {
            prompt: "What did Sections 220 and 221 of the Housing Act of 1954 do?",
            options: [
              "Provided FHA mortgage insurance in renewal areas, and for families displaced by government action",
              "Created two new federal agencies to administer the clearance and the rehousing halves of the programme",
              "Set the maximum percentage of a project area that could be devoted to non-residential redevelopment uses",
              "Required each locality to prove that displaced families had been rehoused before any grant was paid out",
            ],
            correctIndex: 0,
            explanation: "The same agency whose underwriting rules helped make those neighbourhoods unlendable was now insuring the mortgages on what replaced them.",
            sourceLessonSlug: "htt-act-1954",
          },
          {
            prompt: "Which sentence is from the FHA Underwriting Manual?",
            options: [
              "\"The concept of the public welfare is broad and inclusive, and the values it represents are spiritual as well as physical, aesthetic as well as monetary\"",
              "\"If a neighborhood is to retain stability, it is necessary that properties shall continue to be occupied by the same social and racial classes\"",
              "\"No single tradition in public education is more deeply rooted than local control over the operation of schools\"",
              "\"So located, as to connect by routes, direct as practical, the principal metropolitan areas, cities, and industrial centers\"",
            ],
            correctIndex: 1,
            explanation: "Section 937 of the 1938 manual. The other three come from Berman, Milliken and the Federal-Aid Highway Act of 1944 respectively.",
            sourceLessonSlug: "htt-fha-manual",
          },
          {
            prompt: "Why does this course build its redlining argument on the manual rather than on the HOLC maps?",
            options: [
              "Because the maps were destroyed and the manual is the only surviving document from that programme",
              "Because the manual was published in every major newspaper while the maps were never made public at all",
              "The manual's words are undisputed, while the maps' direct causal role is contested by scholars",
              "Because the maps covered only a handful of cities and none of the cities studied in this course series",
            ],
            correctIndex: 2,
            explanation: "The maps were largely confidential and HOLC lent inside red areas, though later work finds the boundaries carried some independent effect. A picture persuades; a quotation proves.",
            sourceLessonSlug: "htt-fha-manual",
          },
          {
            prompt: "What does the manual explain about the housing survey figures the Berman opinion recited?",
            options: [
              "It is the paper trail for the first half of the circle: capital was steered away from those blocks",
              "It shows that the surveys were taken by valuators employed directly by the Federal Housing Administration",
              "It proves that the specific buildings measured in the Southwest survey had been refused mortgages by name",
              "It establishes that the survey categories were written by Congress rather than by the local housing agency",
            ],
            correctIndex: 0,
            explanation: "A neighbourhood starved of mortgage capital decayed, and the decay became the legal basis for clearing the people who lived through it. The condition and its cause are the same policy at two dates.",
            sourceLessonSlug: "htt-fha-manual",
          },
          {
            prompt: "What did the Federal-Aid Highway Act of 1956 change about the system's name and its funding?",
            options: [
              "It renamed it the Eisenhower System and moved all funding from the states to the federal government",
              "It renamed it the National Defense Highway Network and set the federal share of each project's cost at one half",
              "It kept the 1944 name and created a trust fund financed entirely by state motor fuel tax revenues",
              "It renamed it the National System of Interstate and Defense Highways and set the federal share at 90 percent",
            ],
            correctIndex: 3,
            explanation: "It also raised the proposed length to 41,000 miles, and Title II, the Highway Revenue Act of 1956, created the Highway Trust Fund.",
            sourceLessonSlug: "htt-highway-1956",
          },
          {
            prompt: "Where does the defence rationale for the Interstate system first appear in the record?",
            options: [
              "In the 1944 Act, which described routes located to serve the National Defense",
              "In the 1956 Act alone, since no earlier highway legislation mentioned national defence in any form",
              "In a 1961 executive order issued after the system was already substantially under construction nationally",
              "In the Yellow Book of 1955, which was prepared jointly by the Bureau of Public Roads and the Army",
            ],
            correctIndex: 0,
            explanation: "The 1944 Act called for a National System of Interstate Highways of up to 40,000 miles, and the first 37,700 miles selected in 1947 were reviewed by the Department of Defense.",
            sourceLessonSlug: "htt-highway-1956",
          },
          {
            prompt: "What did the 1956 Act NOT do?",
            options: [
              "Create a dedicated trust fund as a continuing source of money for the Interstate System's construction",
              "Choose any city's route, since alignments were proposed by state highway agencies",
              "Change the federal share of project cost for construction on the Interstate System to ninety percent",
              "Raise the proposed total length of the Interstate System from 40,000 miles to 41,000 miles nationwide",
            ],
            correctIndex: 1,
            explanation: "The Yellow Book had already mapped urban routes in September 1955. The Act is a funding and framework instrument; the alignment decision is separate, and the city courses are where you read one.",
            sourceLessonSlug: "htt-highway-1956",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 3 · Source to Use, Worked  (Berman, and then the chronology that weakens the edge)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "htt-berman-the-source",
      title: "10 · The source: what Berman v. Parker authorised",
      section: "Section 3 · Source to Use, Worked",
      body: `**Source to use is the strongest kind of connection, and this section works one all the way through, both to show you how it is done and to show you what it looks like when a favourite edge partly breaks.** This lesson is the source end. The next lesson is the test.

**The instrument.** *Berman v. Parker*, **348 U.S. 26**, decided **November 22, 1954**, by a **unanimous** Court, in an opinion by Justice **William O. Douglas**. It came out of the clearance of Southwest Washington under the District of Columbia Redevelopment Act of 1945, and the prerequisite DC course reads it lesson by lesson (Berman v. Parker, 1954).

**Who sued, because it decides what the case is about.** Not a displaced family. The opinion records that the appellants owned property in Area B at 712 Fourth Street, S.W., which was not a dwelling: a department store stood on it (Berman v. Parker, 1954). **Their argument was that a property which is not a slum may not be taken to cure a slum.**

## What the opinion authorised, in three moves

**Move one: the public purpose is as broad as the legislature says it is.**

> "The concept of the public welfare is broad and inclusive... The values it represents are spiritual as well as physical, aesthetic as well as monetary. It is within the power of the legislature to determine that the community should be beautiful as well as healthy, spacious as well as clean, well-balanced as well as carefully patrolled." (Berman v. Parker, 1954.)

**Move two: the area may be taken as a whole.** The Court held that community redevelopment programmes **"need not, by force of the Constitution, be on a piecemeal basis,"** so an owner cannot defeat an area-wide plan by pointing at his own lot (Berman v. Parker, 1954).

**Move three: the cleared land may go to a private company.** The Court held that **"the public end may be as well or better served through an agency of private enterprise than through a department of government"** (Berman v. Parker, 1954).

**Read those three together and you have the machine the whole route series keeps meeting.** Designate an area. Take all of it, including the parts that are fine. Hand it to a developer. **Before November 1954 the third move was genuinely arguable. After it, it was the design of the programme rather than an abuse of it.**

## Why this is a source node and not just a local ruling

**A source node is a place where a tool is made available to other places.** *Berman* qualifies on the plainest evidence there is: **later courts cite it.**

| Later decision | What it allowed | Relation to Berman |
|---|---|---|
| **Poletown**, Michigan Supreme Court, 1981 | Detroit condemning an entire working neighbourhood for a General Motors plant | A state application in the deferential spirit Berman established; Michigan overruled it in 2004 |
| **Hawaii Housing Authority v. Midkiff**, 467 U.S. 229 (1984) | Hawaii compelling large landowners to sell to their tenants | Relied on Berman for a public-use test satisfied by any rational relation to a conceivable public purpose |
| **Kelo v. City of New London**, 545 U.S. 469 (2005) | New London taking well-maintained, non-blighted homes for a private economic-development plan | Cited Berman and Midkiff; the tool that began as slum clearance reached sound houses |

**Notice what makes those three edges strong, and remember it.** **They are citations.** A later court naming an earlier case is the cleanest documented line that exists: it is a piece of paper in which the receiving place says, in its own words, where it got the tool. **You do not have to infer transmission when a judge writes it down.**

**So the strongest single edge running out of Washington in this whole catalogue is not the one you would expect.** It is not DC to Indianapolis, the pairing this series was built around. **It is DC to New London**, because *Kelo* cites *Berman* by name and the Indianapolis record, as far as this course has read it, does not.

**Hold that thought for exactly one lesson.** The next one takes the DC-to-Indianapolis edge, which is the reason both those courses exist, and runs the four-question test on it in public.

## Sources
- Berman v. Parker, 348 U.S. 26 (1954). https://www.law.cornell.edu/supremecourt/text/348/26
- Hawaii Housing Authority v. Midkiff, 467 U.S. 229 (1984). https://www.law.cornell.edu/supremecourt/text/467/229
- Kelo v. City of New London, 545 U.S. 469 (2005). https://www.law.cornell.edu/supremecourt/text/04-108
- District of Columbia Redevelopment Act of 1945, 60 Stat. 790 (1946). https://www.law.cornell.edu/topn/district_of_columbia_redevelopment_act_of_1945`,
      recallContent: [
        {
          prompt: "Give the 1956 Act's citation, its date, the federal share it set, and what Title II created.",
          answer: "Public Law 84-627, 70 Stat. 374, signed June 29, 1956. It set the federal share of project cost at 90 percent and raised the system to 41,000 miles. Title II, the Highway Revenue Act of 1956, created the Highway Trust Fund.",
        },
        {
          prompt: "Where does the defence rationale for the Interstate system first appear, and how?",
          answer: "In the Federal-Aid Highway Act of 1944, which called for a National System of Interstate Highways of up to 40,000 miles so located as to connect the principal metropolitan areas, cities and industrial centers \"to serve the National Defense.\" The first 37,700 miles, announced in 1947, were reviewed by the Department of Defense.",
        },
        {
          prompt: "What was the Yellow Book, and what does its date prove?",
          answer: "General Location of National System of Interstate Highways Including All Additional Routes at Urban Areas, published in September 1955, with maps showing where the urban Interstates would run. It proves the routes existed on paper before the 1956 money did.",
        },
        {
          prompt: "State the sourceable version and the unsourced version of the highway claim.",
          answer: "Sourceable: a federal Act made urban highway construction cheap, a federal publication mapped urban routes in 1955, and the alignments chosen fell disproportionately on Black neighbourhoods across many cities. Not sourced here: that the 1956 statute directed or contemplated that outcome. Its text does not, and intent needs the records of the bodies that drew the lines.",
        },
        {
          prompt: "Why does a 90 percent federal share matter to a city's choice?",
          answer: "Because a state or city choosing an urban Interstate alignment was spending roughly ten cents on the dollar of construction cost, and a dedicated trust fund meant the money did not have to be fought for annually.",
        },
      ],
    },
    {
      slug: "htt-berman-tested",
      title: "11 · The test, run in public: Berman and Indiana Avenue",
      section: "Section 3 · Source to Use, Worked",
      body: `**Here is the claim this whole series was arranged around, stated at its most attractive:** Washington authorised the blight-clearance instrument in *Berman v. Parker*, and Indianapolis used it on Indiana Avenue. **Source and use. The model edge.**

**Now run the four questions on it, in order, and do not flinch at the answer.**

## Question 1. Chronology

| Date | Event | Place |
|---|---|---|
| **1945** | Indiana General Assembly identifies Pat Ward's Bottom, near Indiana Avenue, as blighted | Indianapolis |
| 1945 | District of Columbia Redevelopment Act; Redevelopment Land Agency created | Washington |
| **1948** | **Demolition of homes begins at Pat Ward's Bottom** | Indianapolis |
| 1949 | Housing Act of 1949, Title I | Federal |
| 1952 | Southwest "Area B" renewal plan approved | Washington |
| August 2, 1954 | Housing Act of 1954 | Federal |
| **November 22, 1954** | ***Berman v. Parker* decided** | Washington |
| 1954, 1956 | Further Indianapolis blight designations; medical centre expansion | Indianapolis |
| 1958 | The joint university campus plan proposed | Indianapolis |

**The strong claim fails here, and it fails badly.** Indiana had its **own** blight machinery in **1945** and was demolishing homes near the Avenue in **1948**, **six years before** *Berman* was decided (Encyclopedia of Indianapolis, n.d.; Berman v. Parker, 1954). **A cause cannot postdate effects that were already under way.** Indianapolis was not waiting for Washington's permission, because Indianapolis already had Indiana's.

## Question 2. Mechanism

**This one passes.** The channel is **law**: a Supreme Court decision changes what arguments can be made against a practice everywhere, immediately, without anybody travelling anywhere. That is a real and well-understood route of transmission.

## Question 3. Document

**Partly.** The opinion exists and can be quoted exactly, which is one end. **The other end is missing from this course:** no document has been read here in which an Indianapolis body cites *Berman*. **The Indianapolis Redevelopment Commission's minutes are public and have not been read into this series**, which the pilot course said plainly about itself. **Until somebody reads them, the receiving end of this edge is an assumption.**

## Question 4. Alternative cause

**And here the edge nearly disappears.** Two better explanations are sitting in plain view.
- **Indiana's own 1945 statute** authorised the designation, and it is a state instrument that owes nothing to *Berman*.
- **Title I money** from 1949 paid for the kind of project the Avenue's clearance became, and it was available to every city in the country at once.

**Between them, Indiana Avenue's clearance is fully accounted for without Washington's opinion.**

## The verdict, and it is not "no connection"

**Berman did not cause Indiana Avenue's clearance. It insured it.**

Here is the accurate claim, and it is smaller and better than the one we started with. **Before November 1954 an owner anywhere could argue that taking non-blighted property inside a designated area, and handing it to a private developer, violated the constitutional public-use requirement.** After *Berman* that argument was gone. **The tool Indianapolis was already using could no longer be beaten with it.**

**So re-classify the edge rather than deleting it.** It is still **source to use**. What changes is **what was used**. The use is not the clearance, which was already running. **The use is the legal security of the clearance**, and that is a real thing that a court gave to every redevelopment agency in the country on one day in November 1954.

## The three sentences worth carrying out of this course

1. **An instrument that arrives after a practice is not its cause. It is its insurance.** That sentence will save you from a large fraction of the bad transmission claims you will meet.
2. **The most famous edge in a catalogue is often the one most loosely stated**, precisely because everyone already believes it and nobody re-tests it.
3. **A weakened claim that survives is worth more than a strong claim that does not**, and reporting the weakening is what makes the rest of your work believable.

**One comparison to close on.** The DC-to-New London edge from lesson 10 passes all four questions, because *Kelo* cites *Berman* in writing. The DC-to-Indianapolis edge, the one this series is built around, **passes three and fails one, and needs a trip to the Indianapolis Redevelopment Commission's minutes to close the third.** **The edge everybody cares about is weaker than the edge nobody mentions.** That is normal, it is worth saying out loud, and it is why you run the test on the claims you like best rather than only on the ones you doubt.

## Sources
- Berman v. Parker, 348 U.S. 26 (1954). https://www.law.cornell.edu/supremecourt/text/348/26
- Encyclopedia of Indianapolis. (n.d.). *Midtown*. https://indyencyclopedia.org/midtown/
- Housing Act of 1949, Pub. L. No. 81-171, 63 Stat. 413 (1949). https://www.govinfo.gov/content/pkg/STATUTE-63/pdf/STATUTE-63-Pg413.pdf
- Kelo v. City of New London, 545 U.S. 469 (2005). https://www.law.cornell.edu/supremecourt/text/04-108`,
      recallContent: [
        {
          prompt: "Who was the plaintiff in Berman v. Parker, and what was his argument?",
          answer: "Not a displaced family. The appellants owned property at 712 Fourth Street, S.W., in Area B, which was not a dwelling; a department store stood on it. Their argument was that a property which is not a slum may not be taken to cure a slum.",
        },
        {
          prompt: "Name the three moves the Berman opinion made.",
          answer: "The public purpose is as broad as the legislature says it is; the area may be taken as a whole, because redevelopment need not be piecemeal; and the cleared land may be conveyed to a private company, because the public end may be as well or better served through private enterprise.",
        },
        {
          prompt: "What makes the edges from Berman to Poletown, Midkiff and Kelo strong?",
          answer: "They are citations. A later court naming an earlier case is the cleanest documented line there is: the receiving place says in its own words where it got the tool, so transmission does not have to be inferred.",
        },
        {
          prompt: "Which single edge running out of Washington is the strongest in this catalogue, and why is that surprising?",
          answer: "Washington to New London, because Kelo cites Berman by name. It is surprising because the pairing the series was built around is Washington to Indianapolis, and the Indianapolis record, as far as this course has read it, contains no such citation.",
        },
        {
          prompt: "What did Kelo allow, and what does it show about the tool's travel?",
          answer: "It allowed New London to take well-maintained, non-blighted homes for a private economic-development plan, citing Berman and Midkiff. The tool that began as slum clearance had reached sound houses taken for growth.",
        },
      ],
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 4 · The Other Strong Lines  (each TESTED, and one whole category left open)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "htt-milliken-line",
      title: "12 · Detroit: a boundary case that two other courses hang on",
      section: "Section 4 · The Other Strong Lines",
      body: `Section 3 worked one edge. **This section works three more and one whole category, and every one of them gets a verdict in writing.** Start with the case that turned a line on a map into a wall.

**The instrument.** *Milliken v. Bradley*, **418 U.S. 717**, decided **July 25, 1974**. A district court had found Detroit's schools unlawfully segregated with the State of Michigan implicated, concluded that a remedy confined to Detroit could not work, and ordered a metropolitan plan covering **Detroit plus 53 of the 85 outlying suburban school districts** (*Milliken v. Bradley*, 1974).

**The Supreme Court's threshold, in its own words:**

> "Before the boundaries of separate and autonomous school districts may be set aside by consolidating the separate units for remedial purposes or by imposing a cross-district remedy, it must first be shown that there has been a constitutional violation within one district that produces a significant segregative effect in another district." (*Milliken v. Bradley*, 1974, pp. 744-745.)

**And the escape clause, which is the part that matters most here:**

> "Thus an interdistrict remedy might be in order where the racially discriminatory acts of one or more school districts caused racial segregation in an adjacent district, **or where district lines have been deliberately drawn on the basis of race**." (*Milliken v. Bradley*, 1974, p. 745.)

## Edge A. Detroit to Indianapolis: the cleanest connection in this course

**The claim:** the Detroit decision governed what happened to the Indianapolis school desegregation case.

| Question | Result |
|---|---|
| **1. Chronology** | **Passes.** Milliken is decided July 25, 1974; the Seventh Circuit applies it in August 1974 |
| **2. Mechanism** | **Passes.** Law, and the most binding kind: a lower federal court must follow the Supreme Court |
| **3. Document** | **Passes, in writing.** The Seventh Circuit opinion names Milliken and reverses in accordance with it |
| **4. Alternative cause** | **Passes.** There is no alternative: a court of appeals applying a two-week-old Supreme Court decision is not a coincidence |

The Seventh Circuit's own sentence does the work:

> "In accordance with *Milliken v. Bradley*, we reverse the district court's findings, conclusions, orders and rulings insofar as they pertain to a metropolitan remedy beyond the Uni-Gov boundaries; insofar as they pertain to a remedy within the boundaries of Uni-Gov, we vacate those rulings and remand for further proceedings consistent with that decision." (*United States v. Board of School Commissioners of the City of Indianapolis*, 1974, p. 84.)

**Verdict: source to use, all four questions passed.** This is the strongest edge in the course, stronger even than Berman to Kelo, because the receiving court both names the source and changes its own judgment on the same page.

**And the interesting half, which the gym course established.** Indianapolis then went through **Milliken's own escape clause**. Because the 1969 Unigov statute had extended the city's boundaries without extending the school district's, the plaintiffs had the one thing Milliken demands: **a decision, on the record, about the line itself.** An inter-district remedy inside Uni-Gov survived, and buses ran from 1981 to 2016. **Indianapolis is one of a small number of American metropolitan areas where a cross-district remedy survived Milliken and was actually carried out**, alongside New Castle County, Delaware and Jefferson County, Kentucky. **The general rule is Milliken; Indianapolis is the exception, and it is an exception only because a legislature wrote the evidence down.**

## Edge B. Detroit and Seattle: a pair, not a line

**The claim, as it is usually put:** *Milliken* and *Parents Involved in Community Schools v. Seattle School District No. 1* (2007) are the two ends of one argument.

**That is true, and it is a different kind of truth.** *Milliken* limits what a **court may compel** across a district line. *Parents Involved* limits what a **district may voluntarily choose** to do with race in student assignment, in a district the opinion records had **"never operated legally separate schools for students of different races, nor has it ever been subject to court-ordered desegregation"** (*Parents Involved*, 2007). **Compulsion at one end, choice at the other, thirty-three years apart.**

**Now grade it honestly.** Reading the two together is genuinely illuminating and the Seattle course is built on it. **But this course did not verify a citation chain from one to the other**, and it will not assert one it has not read. So the classification is **doctrine pair**, rank 3, not source to use.

**Say the difference out loud, because it is the point of the whole section.** **The gym course and the Seattle course both hang on Milliken, and only one of them hangs on it by a documented line.** Indianapolis is bound to Detroit by a citation in a federal opinion. Seattle is related to Detroit by a shared question. **Both relationships are worth teaching. They are not the same relationship, and using one word for both would be the exact error lesson 2 was written to prevent.**

## Sources
- Milliken v. Bradley, 418 U.S. 717 (1974). https://www.law.cornell.edu/supremecourt/text/418/717
- Parents Involved in Community Schools v. Seattle School District No. 1, 551 U.S. 701 (2007). https://www.law.cornell.edu/supremecourt/text/551/701
- United States v. Board of School Commissioners of the City of Indianapolis, 503 F.2d 68 (7th Cir. 1974). https://www.courtlistener.com/opinion/321692/united-states-of-america-donny-brurell-buckley-intervening-v-board-of/`,
      recallContent: [
        {
          prompt: "Why does the Berman-to-Indiana-Avenue edge fail the chronology test?",
          answer: "Because Indiana's own blight machinery dates from 1945 and demolition of homes near the Avenue began in 1948, six years before Berman was decided in November 1954. A cause cannot postdate effects already under way.",
        },
        {
          prompt: "What is missing at the receiving end of that edge?",
          answer: "A document. No record has been read in this series in which an Indianapolis body cites Berman. The Indianapolis Redevelopment Commission's minutes are public and unread, so the receiving end is currently an assumption.",
        },
        {
          prompt: "What are the two alternative causes that nearly account for Indiana Avenue's clearance without Berman?",
          answer: "Indiana's own 1945 blight statute, which owes nothing to Berman, and Title I money from the Housing Act of 1949, which was available to every city in the country at once.",
        },
        {
          prompt: "State the verdict and the reclassified edge.",
          answer: "Berman did not cause the clearance; it insured it. The edge stays source-to-use, but what was used is not the clearance, which was already running. What travelled is the legal security of the clearance: after November 1954 the tool could no longer be beaten on public-use grounds.",
        },
        {
          prompt: "Give the sentence about instruments that arrive late.",
          answer: "An instrument that arrives after a practice is not its cause; it is its insurance.",
        },
      ],
    },
    {
      slug: "htt-buchanan-line",
      title: "13 · Louisville: one case, one surviving edge, one downgraded lineage",
      section: "Section 4 · The Other Strong Lines",
      body: `This lesson contains **two claims about the same 1917 case**. One passes the test cleanly. **The other is the most popular story in American housing history and it does not survive contact with Baltimore's dates.**

**The instrument.** *Buchanan v. Warley*, **245 U.S. 60 (1917)**. The Supreme Court struck down **Louisville's** racial zoning ordinance, holding that it violated the Fourteenth Amendment because it interfered with an owner's right to sell property (Buchanan v. Warley, 1917).

## Edge A. Louisville to Baltimore: survives

**The claim:** a Louisville case ended Baltimore's racial zoning.

**What Baltimore had.** Not one ordinance but **a chain of four**, in **1910**, twice in **1911**, and **1913**, each struck by state courts on drafting or vested-property grounds, including *State v. Gurry* in 1913. **The 1910 ordinance is widely described as the first residential racial segregation law in the United States**, and the Baltimore course establishes that it was triggered by a Black lawyer buying a house on a white block.

**What Buchanan did to it.** *Buchanan* ended the whole class of laws nationally, and **Baltimore's ordinances died with it, not by repeal but by becoming unenforceable.**

| Question | Result |
|---|---|
| **1. Chronology** | Passes. The ordinances run 1910 to 1913; Buchanan is 1917 |
| **2. Mechanism** | Passes. Law: a Fourteenth Amendment holding binds every state |
| **3. Document** | Passes. The opinion, and the ordinances ceasing to be enforceable |
| **4. Alternative cause** | Passes. Nothing else ends a class of state and municipal laws nationwide |

**Verdict: source to use.** One city's lawsuit disabled another city's statute book. **Louisville and Baltimore are a pair, and neither city's story is complete without the other**, which is what plan 42 predicted before either course was written.

## Edge B. The lineage claim: downgraded, and here is why

**The claim, in its familiar form:** *Buchanan* struck down explicit racial zoning, so the same goal was **pushed** into private restrictive covenants, and then into administrative redlining. **Zoning, then covenants, then redlining, then highways.** A relay race with four legs.

**It is a wonderful story. Run question 1 on it.**

| Date | Event |
|---|---|
| 1910 to 1913 | Baltimore's four racial zoning ordinances |
| **1913** | **The Roland Park Company writes a racial covenant into Guilford deeds** |
| **1917** | ***Buchanan v. Warley* ends racial zoning** |
| 1938 | The FHA Underwriting Manual recommends the racial deed restriction |
| 1948 | *Shelley v. Kraemer* makes covenants judicially unenforceable |

**Guilford's covenant is 1913. Buchanan is 1917.** **The covenant is four years earlier than the decision it is supposed to be a response to.** The Baltimore course found this in its own primary material and reported it: **"first zoning, then covenants" is wrong on the dates.**

**And the real mechanism turns out to be more interesting than the myth.** The covenant did not appear **because** zoning had been struck down federally. It appeared **while** the zoning was failing repeatedly **in state court**. A deed restriction gave the same result permanently, with no council vote to lose and no judge to lose in front of. **The private instrument was adopted as insurance against the public one's fragility, before the public one was finally killed.**

**Verdict: not an instrument lineage in the baton-pass sense. A lineage of purpose.** Four instruments aimed at one end, **overlapping in time rather than succeeding one another**, some public and some private, some local and some federal. **That is a weaker-sounding claim and a truer one, and it is the one the sibling course made, so this course carries it forward unchanged.**

**The transferable rule, and it is short.** **When a lineage story requires a clean handover, check whether the next instrument was already running.** In American housing it usually was.

## Sources
- Buchanan v. Warley, 245 U.S. 60 (1917). https://supreme.justia.com/cases/federal/us/245/60/
- Federal Housing Administration. (1938). *Underwriting manual: Underwriting and valuation procedure under Title II of the National Housing Act*. U.S. Government Printing Office.
- Shelley v. Kraemer, 334 U.S. 1 (1948). https://www.law.cornell.edu/supremecourt/text/334/1
- Maryland Historical Trust. (n.d.). *Old West Baltimore historic district*. https://mht.maryland.gov/`,
      recallContent: [
        {
          prompt: "Why is Detroit to Indianapolis the cleanest edge in this course?",
          answer: "Because it passes all four questions and the document is explicit: Milliken was decided July 25, 1974, and in August 1974 the Seventh Circuit reversed the metropolitan remedy beyond Uni-Gov \"in accordance with Milliken v. Bradley,\" naming the source and changing its own judgment on the same page.",
        },
        {
          prompt: "What is Milliken's escape clause, and how did Indianapolis fit through it?",
          answer: "An inter-district remedy might be in order where district lines have been deliberately drawn on the basis of race. The 1969 Unigov statute extended the city's boundaries without extending the school district's, so the plaintiffs had a decision on the record about the line itself, and a remedy inside Uni-Gov survived.",
        },
        {
          prompt: "How is the Milliken and Parents Involved relationship classified, and why not higher?",
          answer: "As a doctrine pair, rank 3. Milliken limits what a court may compel across a district line; Parents Involved limits what a district may voluntarily choose. This course did not verify a citation chain between them and will not assert one it has not read.",
        },
        {
          prompt: "State the difference between how the gym course and the Seattle course hang on Milliken.",
          answer: "Indianapolis is bound to Detroit by a citation in a federal opinion, a documented line. Seattle is related to Detroit by a shared question, a doctrine pair. Both are worth teaching, and using one word for both would be the error the taxonomy exists to prevent.",
        },
        {
          prompt: "What does the Parents Involved opinion record about Seattle's history?",
          answer: "That the district \"has never operated legally separate schools for students of different races, nor has it ever been subject to court-ordered desegregation.\" That fact is what makes it a case about voluntary choice rather than compulsion.",
        },
      ],
    },
    {
      slug: "htt-pittsburgh-model-line",
      title: "14 · Pittsburgh: true as to emulation, false as to a copy-chain",
      section: "Section 4 · The Other Strong Lines",
      body: `**Model to copy is rank 2 in the taxonomy, and this catalogue has exactly one serious candidate for it.** The Pittsburgh course tested that candidate on itself and published the result. **This lesson carries that result forward without improving it, which is the harder discipline and the reason this course can be trusted about anything else.**

## What is documented, and it is a lot

**Pittsburgh was early.** The **Allegheny Conference on Community Development** formed in **1944**, the **Pennsylvania Urban Redevelopment Law** passed in **1945**, the **Urban Redevelopment Authority** of Pittsburgh was incorporated on **November 18, 1946**, and **Gateway Center was underway by the start of the 1950s**, all **before** the federal Housing Act of 1949 created the national programme (Neumann, 2016; Urban Redevelopment Authority of Pittsburgh, n.d.).

**Pittsburgh was studied.** The historian Tracy Neumann documents that **"in the 1950s and 1960s, more than seventy national and international delegations of urban policy tourists who hoped to replicate the Renaissance arrived in Pittsburgh,"** including visitors from Dayton and Detroit and officials from Canada, Australia, Brazil, Belgium, Germany and Scotland, and concludes that Pittsburgh's postwar renewal programme **"made it a popular model for other aging industrial cities in the 1950s and 1960s"** (Neumann, 2016).

**So "Pittsburgh was celebrated and visited as a model" is not a guess. It is documented, by a named historian, with a number attached.**

## Now run the test on the bigger claim

**The bigger claim:** other cities copied Pittsburgh, and that copying is what emptied Black districts across the country.

**Question 1, chronology.** Indianapolis identified Pat Ward's Bottom as blighted in **1945** and began demolishing in **1948**, on the same timeline as Pittsburgh's rather than after it. Washington's enabling statute is **1945**, the same year as Pennsylvania's. **These are parallel state adoptions, not a chain with Pittsburgh at the head of it.**

**Question 2, mechanism.** The delegations are a real channel: people, and the reports they took home. **But look at what they came for.** Neumann's own sentence says they came to see **"how Democratic mayors and Republican businessmen had worked together to scrub clean the streets and skies of the dirty, polluted, and flood-prone city"** (Neumann, 2016). **They came for the partnership and the clean-up: smoke control, flood control, Gateway Center.**

**Question 3, document.** Admiration is documented. **A copied plan in another city's file is not**, in anything this course or its sibling could verify. **A delegation admiring Gateway Center is not a city carrying home a manual for clearing a Black neighbourhood.**

**Question 4, alternative cause.** And here is the finishing blow, and it is Section 2 of this course. **The Housing Act of 1949 funded the clearance instruments nationally and Berman upheld them nationally in 1954.** Cities did not need Pittsburgh's example. **They needed federal money and their own state law, and they had both.**

## The verdict, in the sibling course's own words

**True as to emulation. False as to a copy-chain.**

Pittsburgh **assembled and showcased the public-private redevelopment machine early and visibly, and was genuinely emulated as a model of that partnership.** It is one of the prominent early reference cases for elite business power and elected government running a city's rebuilding together. **The playbook written in Pittsburgh is the partnership playbook**, not a step-by-step manual every later city followed to empty its Black district.

**What travelled city to city was a reputation. What travelled to every city at once was a federal programme.**

## Why this lesson is a test of the capstone rather than of Pittsburgh

**A capstone has a structural temptation.** It is assembling other people's courses into one argument, and the strong version of every claim makes a better argument. **The strong version of this one would say the playbook was written in Pittsburgh and copied everywhere, which is a superb sentence and is not true.**

**A sibling course weakened this claim in public. The capstone's job is to carry the weakened version forward.** If a summary is allowed to restore strength that the detailed work removed, **then every weakening any course in this series performed is temporary, and the whole citation discipline is decorative.**

## Sources
- Berman v. Parker, 348 U.S. 26 (1954). https://www.law.cornell.edu/supremecourt/text/348/26
- Heinz History Center. (n.d.). *Crossroads of the world: How urban renewal changed the Hill*. Senator John Heinz History Center. https://www.heinzhistorycenter.org/blog/crossroads-of-the-world-how-urban-renewal-changed-the-hill/
- Housing Act of 1949, Pub. L. No. 81-171, 63 Stat. 413 (1949). https://www.govinfo.gov/content/pkg/STATUTE-63/pdf/STATUTE-63-Pg413.pdf
- Neumann, T. (2016, February 1). *The "spiritual capital" of the Rust Belt: Pittsburgh and the postindustrial transformation of North Atlantic cities*. Global Urban History. https://globalurbanhistory.com/2016/02/01/the-spiritual-capital-of-the-rust-belt-pittsburgh-and-the-postindustrial-transformation-of-north-atlantic-cities/
- Urban Redevelopment Authority of Pittsburgh. (n.d.). *History of the Urban Redevelopment Authority of Pittsburgh (URA)*. https://www.ura.org/pages/history-of-the-urban-redevelopment-authority-of-pittsburgh-ura`,
      recallContent: [
        {
          prompt: "What did Buchanan v. Warley hold, and what did it do to Baltimore?",
          answer: "That Louisville's racial zoning ordinance violated the Fourteenth Amendment because it interfered with an owner's right to sell property. It ended the whole class of laws nationally, and Baltimore's four ordinances died with it, not by repeal but by becoming unenforceable.",
        },
        {
          prompt: "Why does the familiar zoning-then-covenants sequence fail?",
          answer: "Because the Roland Park Company wrote its racial covenant into Guilford deeds in 1913, four years before Buchanan was decided in 1917. The covenant is earlier than the decision it is supposed to be a response to.",
        },
        {
          prompt: "What was the covenant actually a response to, and what does that make the chain?",
          answer: "To the zoning ordinances failing repeatedly in state court. A deed restriction gave the same result permanently with no council vote to lose. That makes it a lineage of purpose, four overlapping instruments aimed at one end, rather than a baton pass.",
        },
        {
          prompt: "State the transferable rule from this lesson.",
          answer: "When a lineage story requires a clean handover, check whether the next instrument was already running. In American housing it usually was.",
        },
        {
          prompt: "How is the Louisville-to-Baltimore edge classified, and why does plan 42 matter here?",
          answer: "Source to use, passing all four questions: one city's lawsuit disabled another city's statute book. Plan 42 predicted that Louisville and Baltimore would be a pair before either course was written.",
        },
      ],
    },
    {
      slug: "htt-person-to-place",
      title: "15 · Person to place: the category this course could not close",
      section: "Section 4 · The Other Strong Lines",
      body: `**Rank 4 in the taxonomy is the one a reader wants most.** Structures are abstract; a person has a name, a career and a set of dates, and a reader can look all of it up. Plan 42 called person-carried links "the most concrete connection a learner can hold" and told this series to hunt for them. **This lesson reports the hunt, including that it did not succeed.**

## The standard this category demands

**Two documents, not one.** You need the individual documented **in both places, with dates**, and you need the **practice documented in their hands**. A career summary is not enough. **"He worked in city A and later in city B" tells you he moved. It does not tell you anything moved with him.**

## The candidate: Harland Bartholomew

**Why he is the obvious place to look.** Bartholomew is often called the dean of American comprehensive city planning. The Cultural Landscape Foundation records that he **"worked on more than 6,000 projects during his prodigious career, producing 500 plans for cities, counties, regions, and states,"** and that **"in 1953 President Dwight Eisenhower appointed Bartholomew as chairman of the National Capital Planning Commission in Washington, D.C."** (The Cultural Landscape Foundation, n.d.).

**Read that second fact against the DC course.** The National Capital Planning Commission is the body that prepared the comprehensive plan the Redevelopment Land Agency acquired land under. **The same man chaired the federal planning body for the capital while his firm sold comprehensive plans to cities across the country.** If a person carried practice between these places, he is the candidate.

**And his firm's reach is documented.** Cornell University Library holds the **Harland Bartholomew and Associates planning reports, 1944-1990** (collection 6400, 6.4 cubic feet), documenting planning work across **twenty states plus the District of Columbia, including Indiana and Kentucky** (Division of Rare and Manuscript Collections, n.d.). The firm prepared, for example, *A Report Upon Comprehensive Plan: A Part of the Louisville-Jefferson County Comprehensive Plan* for the Louisville and Jefferson County Planning and Zoning Commission in **1957** (Harland Bartholomew & Associates, 1957).

## Now run the test, on the edge you most want to draw

**The tempting claim:** Bartholomew carried renewal practice from his firm's client cities into the clearance of Southwest Washington.

**Question 1, chronology. It fails, and it fails on a date this series already knows.** The DC course established that **the first official urban renewal plan for Southwest, Area B, had been approved by the end of 1952.** **Bartholomew was appointed to chair the National Capital Planning Commission in 1953.** **He cannot be the author of the plan that cleared Southwest, because the plan was approved before he arrived.**

**That is the whole edge, gone, on one date.** Notice how quickly it went, and notice that nothing about his career was wrong. **Everything in the biography checked out. The link still failed.** That is the ordinary experience of this category and the reason it is rank 4 rather than rank 1.

## What survives, stated narrowly

**This much is documented and worth teaching.** For seven years one man chaired the federal planning commission for the national capital while running a firm that wrote comprehensive plans for hundreds of American jurisdictions, across at least twenty states. **That is a real channel through which planning practice moved**, and it is exactly the sort of thing lesson 3 means by the "paper" and "people" mechanisms.

**What it is not.** It is **not** evidence that Bartholomew caused any clearance in this catalogue, and this course does not say he did. **A channel is a road. It is not proof that a particular vehicle drove down it.**

## The honest finding, and it is the most useful thing in this lesson

**This course did not find a documented individual who carried a specific clearance decision from one city in this series to another.** Not a planner, not a commissioner, not a consultant. **It looked, and it is reporting an absence.**

**An absence is a finding when you can say where you looked and where you did not.** So: **the Harland Bartholomew and Associates planning reports at Cornell have not been read into this course**, and they cover Indiana and Kentucky among twenty states. Neither have the project files of the redevelopment agencies in any of these cities, nor the membership rolls and conference programmes of the professional planning bodies whose meetings these officials attended. **Any of those could close this category, and one afternoon in the right box could do it.**

**One last warning, because this is where careful people get careless.** **A famous name is the most seductive evidence there is**, because the career is easy to verify and the causation is not, and a reader will accept the second because you demonstrated the first. **Verify the biography, and then test the link separately.** They are two different jobs.

## Sources
- Division of Rare and Manuscript Collections. (n.d.). *Guide to the Harland Bartholomew and Associates planning reports, 1944-1990* (Collection 6400). Cornell University Library. http://rmc.library.cornell.edu/EAD/htmldocs/RMM06400.html
- Harland Bartholomew & Associates. (1957). *A report upon comprehensive plan: A part of the Louisville-Jefferson County comprehensive plan*. Louisville and Jefferson County Planning and Zoning Commission.
- The Cultural Landscape Foundation. (n.d.). *Harland Bartholomew*. https://www.tclf.org/pioneer/harland-bartholomew
- Docomomo US. (n.d.). *The Southwest urban renewal area in Washington, D.C.* https://docomomo-us.org/news/the-southwest-urban-renewal-area-in-washington-d-c`,
      recallContent: [
        {
          prompt: "What about the Pittsburgh model claim is documented, and by whom?",
          answer: "That Pittsburgh was early (Allegheny Conference 1944, Pennsylvania law 1945, URA incorporated November 18 1946, Gateway Center by the early 1950s, all before the 1949 federal Act) and that it was studied: Tracy Neumann documents more than seventy national and international delegations arriving to replicate the Renaissance.",
        },
        {
          prompt: "What did those delegations actually come to replicate?",
          answer: "The public-private partnership and the downtown clean-up: how Democratic mayors and Republican businessmen worked together, plus smoke control, flood control and Gateway Center. Not a manual for clearing a Black neighbourhood.",
        },
        {
          prompt: "State the verdict on the Pittsburgh model claim.",
          answer: "True as to emulation, false as to a copy-chain. Pittsburgh assembled and showcased the public-private machine early and visibly and was genuinely emulated as a model of that partnership. The playbook written there is the partnership playbook. What travelled city to city was a reputation; what travelled to every city at once was a federal programme.",
        },
        {
          prompt: "Why is this lesson described as a test of the capstone rather than of Pittsburgh?",
          answer: "Because a capstone is tempted to restore the strong version of every claim, since the strong version makes a better argument. If a summary may restore strength the detailed work removed, then every weakening in the series is temporary and the citation discipline is decorative.",
        },
        {
          prompt: "Which two things did Pittsburgh's cities not need, according to question 4?",
          answer: "They did not need Pittsburgh's example. They needed federal money from the Housing Act of 1949 and their own state redevelopment law, and they had both, with Berman upholding the takings nationally in 1954.",
        },
      ],
    },
    {
      slug: "htt-quiz-lines",
      title: "16 · Quiz: the lines, tested",
      section: "Section 4 · The Other Strong Lines",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Which three later decisions cite Berman, making those edges documented lines?",
            options: [
              "Shelley v. Kraemer, Buchanan v. Warley and Milliken v. Bradley, the three great property decisions of the century",
              "Poletown, Hawaii Housing Authority v. Midkiff and Kelo v. City of New London",
              "Brown v. Board of Education, Parents Involved and United States v. Board of School Commissioners of Indianapolis",
              "Washington v. Seattle School District No. 1, Evans v. Buchanan and Sheff v. O'Neill, the desegregation remedy cases",
            ],
            correctIndex: 1,
            explanation: "A later court naming an earlier case is the cleanest documented line there is: the receiving place says in writing where it got the tool.",
            sourceLessonSlug: "htt-berman-the-source",
          },
          {
            prompt: "Which of Berman's three moves had been genuinely arguable before November 1954?",
            options: [
              "That the legislature rather than the judiciary is the main guardian of the public needs served by social legislation",
              "That a housing survey may be used as evidence about the physical condition of buildings in an area",
              "That cleared land could be conveyed to a private company and still count as a public use",
              "That the government may exercise eminent domain at all within the boundaries of the District of Columbia",
            ],
            correctIndex: 2,
            explanation: "The Court held the public end may be as well or better served through an agency of private enterprise. After Berman, public taking followed by private rebuilding was the design of the programme rather than an abuse of it.",
            sourceLessonSlug: "htt-berman-the-source",
          },
          {
            prompt: "Why does the DC-to-Indiana-Avenue edge fail the chronology test?",
            options: [
              "Because Berman was decided in 1970, long after all the Indianapolis clearance work had been completed",
              "Because Indiana Avenue was cleared by a highway alignment rather than by any blight designation at all",
              "Because the Housing Act of 1949 postdates the Indianapolis demolition and therefore cannot have funded it",
              "Indiana's blight machinery is 1945 and demolition began in 1948, before the November 1954 decision",
            ],
            correctIndex: 3,
            explanation: "A cause cannot postdate effects already under way. Indianapolis was not waiting for Washington's permission, because it already had Indiana's.",
            sourceLessonSlug: "htt-berman-tested",
          },
          {
            prompt: "What is the accurate, reclassified version of the Berman-to-Indianapolis edge?",
            options: [
              "Berman insured the clearance rather than causing it, and what travelled was legal security",
              "There is no relationship of any kind between the two, and the two courses should not be taught together",
              "Berman was decided because of what had already happened in Indianapolis during the preceding decade",
              "Indianapolis officials attended the argument in Berman and returned home to begin the clearance work",
            ],
            correctIndex: 0,
            explanation: "The edge stays source to use. What changes is what was used: not the clearance, which was already running, but the fact that after November 1954 the tool could not be beaten on public-use grounds.",
            sourceLessonSlug: "htt-berman-tested",
          },
          {
            prompt: "Which sentence does this course offer about instruments that arrive after a practice?",
            options: [
              "An instrument that arrives late has no legal significance for anything that happened before it",
              "An instrument that arrives after a practice is not its cause; it is its insurance",
              "An instrument that arrives after a practice should be treated as evidence of an earlier unwritten rule",
              "An instrument that arrives after a practice always indicates that the practice had become controversial",
            ],
            correctIndex: 1,
            explanation: "That sentence will save you from a large fraction of the bad transmission claims you will meet.",
            sourceLessonSlug: "htt-berman-tested",
          },
          {
            prompt: "What makes Detroit to Indianapolis the strongest edge in this course?",
            options: [
              "The two cities are close enough that officials and lawyers moved between them frequently in that era",
              "Both cities were governed by consolidated metropolitan arrangements adopted within a few years of each other",
              "The Seventh Circuit named Milliken and changed its own judgment in accordance with it, weeks after it was decided",
              "Indiana and Michigan adopted nearly identical school district boundary statutes during the same legislative session",
            ],
            correctIndex: 2,
            explanation: "Milliken was decided July 25, 1974, and the court of appeals applied it in August 1974. The receiving court both names the source and changes its judgment on the same page.",
            sourceLessonSlug: "htt-milliken-line",
          },
          {
            prompt: "What is Milliken's escape clause?",
            options: [
              "That a district may be excused from a remedy if it can show that compliance would impose an unreasonable financial burden on its own taxpayers",
              "That an inter-district remedy might be in order where district lines have been deliberately drawn on the basis of race",
              "That a state may substitute its own remedy for a federal one whenever its constitution provides a broader right",
              "That a court may order consolidation of school districts once a violation has continued for more than ten years",
            ],
            correctIndex: 1,
            explanation: "Indianapolis fitted through it because the 1969 Unigov statute extended the city's boundaries without extending the school district's, leaving a decision about the line itself on the record.",
            sourceLessonSlug: "htt-milliken-line",
          },
          {
            prompt: "How does this course classify the relationship between Milliken and Parents Involved?",
            options: [
              "A doctrine pair, not a source-to-use line",
              "A source-to-use line, because the later decision expressly adopts the reasoning of the earlier one",
              "An instrument lineage, because the school district boundary evolved into a different tool between them",
              "A model-to-copy relationship, because Seattle deliberately imitated the arrangements that Detroit had used",
            ],
            correctIndex: 0,
            explanation: "Milliken limits what a court may compel; Parents Involved limits what a district may voluntarily choose. This course did not verify a citation chain between them and will not assert one it has not read.",
            sourceLessonSlug: "htt-milliken-line",
          },
          {
            prompt: "What did Buchanan v. Warley do to Baltimore's racial zoning ordinances?",
            options: [
              "It ordered Baltimore to repeal them within a fixed period and to compensate the owners they had affected",
              "It upheld them, on the ground that a municipality may regulate the use of land within its own boundaries",
              "It left them untouched, because the decision applied only to the Commonwealth of Kentucky and its cities",
              "They became unenforceable rather than repealed, because it ended the whole class of laws",
            ],
            correctIndex: 3,
            explanation: "Baltimore had a chain of four ordinances, in 1910, twice in 1911 and 1913. A Louisville lawsuit disabled another city's statute book, which is source to use.",
            sourceLessonSlug: "htt-buchanan-line",
          },
          {
            prompt: "Why does the sequence \"first zoning, then covenants\" fail?",
            options: [
              "Because Guilford's racial covenant is 1913, four years before Buchanan was decided in 1917",
              "Because covenants were never used in Baltimore, only in the surrounding counties of the state of Maryland",
              "Because the Supreme Court expressly held in 1917 that covenants could not be substituted for zoning laws",
              "Because racial zoning ordinances remained fully enforceable in Baltimore until the Fair Housing Act of 1968",
            ],
            correctIndex: 0,
            explanation: "The covenant is earlier than the decision it is supposed to be a response to. The Baltimore course found this in its own material and reported it.",
            sourceLessonSlug: "htt-buchanan-line",
          },
          {
            prompt: "What was the racial covenant actually a response to, and what does the chain become?",
            options: [
              "To the Fair Housing Act, and the chain becomes a story about private evasion of a federal statute",
              "To the FHA Underwriting Manual, and the chain becomes a purely federal instrument lineage over time",
              "To the zoning ordinances failing in state court, and the chain becomes a lineage of purpose",
              "To the arrival of the Home Owners' Loan Corporation maps, and the chain becomes a lending-market story",
            ],
            correctIndex: 2,
            explanation: "A deed restriction gave the same result permanently, with no council vote to lose. Four instruments aimed at one end, overlapping in time rather than succeeding one another.",
            sourceLessonSlug: "htt-buchanan-line",
          },
          {
            prompt: "State the verdict on the claim that other cities copied Pittsburgh.",
            options: [
              "True in every respect, because more than seventy delegations came to Pittsburgh to study the Renaissance",
              "False in every respect, because no evidence exists that Pittsburgh's programme was noticed elsewhere",
              "Unresolvable, because the records that would settle it were destroyed when the Civic Arena was demolished",
              "True as to emulation, false as to a copy-chain",
            ],
            correctIndex: 3,
            explanation: "Pittsburgh was genuinely emulated as a model of the public-private partnership. The clearance instruments spread through the 1949 Act and parallel state laws instead.",
            sourceLessonSlug: "htt-pittsburgh-model-line",
          },
          {
            prompt: "Why is the Pittsburgh lesson described as a test of the capstone rather than of Pittsburgh?",
            options: [
              "Because a summary that may restore strength the detailed work removed makes the whole discipline decorative",
              "Because Pittsburgh is the only city in the series whose course was written after this capstone was planned",
              "Because the capstone had to choose between two sibling courses that reached incompatible conclusions",
              "Because the Pittsburgh course was the last of the twelve and therefore had the least time to check its claims",
            ],
            correctIndex: 0,
            explanation: "The strong version of the claim makes a better argument and is not true. A sibling course weakened it in public, and the capstone's job is to carry the weakened version forward.",
            sourceLessonSlug: "htt-pittsburgh-model-line",
          },
          {
            prompt: "Why does the Harland Bartholomew person-to-place edge fail?",
            options: [
              "Because no records survive of the firm's work and its client list cannot now be reconstructed at all",
              "Because he never held any federal position and his practice was confined entirely to the state of Missouri",
              "Southwest's Area B plan was approved by the end of 1952, and he was appointed to chair the NCPC in 1953",
              "Because the National Capital Planning Commission had no role in the clearance of Southwest Washington",
            ],
            correctIndex: 2,
            explanation: "He cannot be the author of the plan that cleared Southwest, because the plan was approved before he arrived. Everything in the biography checked out and the link still failed.",
            sourceLessonSlug: "htt-person-to-place",
          },
          {
            prompt: "What is the honest finding of the person-to-place lesson?",
            options: [
              "That person-carried links are impossible to establish and the category should be dropped from the taxonomy",
              "That every planner of the era worked in several of these cities, so the category is too crowded to be useful",
              "That the category is fully closed by Bartholomew's chairmanship of the National Capital Planning Commission",
              "That no documented individual was found carrying a specific clearance decision between these cities",
            ],
            correctIndex: 3,
            explanation: "An absence is a finding when you can say where you looked and where you did not. The Bartholomew firm's reports at Cornell, covering twenty states including Indiana and Kentucky, have not been read.",
            sourceLessonSlug: "htt-person-to-place",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 5 · The Federal Footprint  (the same upstream acting as OWNER, not as funder)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "htt-federal-footprint",
      title: "17 · Fort Harrison: the same upstream, a different mechanism",
      section: "Section 5 · The Federal Footprint",
      body: `Everything so far has shown the federal government in four postures: **funder** of clearance under Title I, **lawmaker** in the Housing and Highway Acts, **rule-writer** in the Underwriting Manual, and **court** in *Berman*, *Milliken* and *Buchanan*. **This lesson adds the fifth, and it is the one people forget: landowner and employer.**

**The site is Fort Benjamin Harrison** in Lawrence, Marion County, Indiana, and the prerequisite Fort Harrison course reads it in full. **Here it is used for one purpose: to show the same upstream working through a completely different set of instruments on the same kind of local ground.**

## Instrument one: another sovereign, and no tax bill

**The constitutional basis.** Article I, Section 8, Clause 17 gives Congress power to exercise authority **"over all Places purchased by the Consent of the Legislature of the State in which the Same shall be, for the Erection of Forts, Magazines, Arsenals, dock-Yards, and other needful Buildings"** (U.S. Const. art. I, § 8, cl. 17). **That is the Enclave Clause.**

**One caution the sibling course insists on and this one repeats.** **Not every federal property is an exclusive-jurisdiction enclave.** Jurisdiction can be exclusive, concurrent, partial or merely proprietary, depending on what the state ceded and what the United States accepted at acquisition. **Neither course has read this post's jurisdictional history, and neither asserts one.**

**The taxation half is simple and enormous.** A state may not tax an instrumentality of the federal government, a principle running back to *McCulloch v. Maryland* (1819). **Federal property does not appear on a county's tax rolls.** The U.S. Department of Education puts the consequence in one sentence when explaining why a school aid programme exists: **"Because federally owned property does not generate taxes, the revenue for the school district is dramatically reduced, but the school district is required to educate the same number of students as before the Federal property was acquired"** (U.S. Department of Education, n.d.).

**Now the arithmetic.** By **1982** the post had over **10,000 civilian and military personnel** and was the **fifth largest employer in Indianapolis**; in the early 1990s it was **the largest employer in Lawrence** with nearly 10,000 employees (Hankins, 2020; Encyclopedia of Indianapolis, n.d.). **The largest employer in the city contributed nothing to the property tax base while generating demand for roads, housing and schools.**

## Instrument two: what a community gets instead of taxes

**Impact Aid**, in Title VII of the Elementary and Secondary Education Act, has two limbs that get confused constantly. **Section 7003** pays for the cost of educating federally connected children. **Section 7002** compensates for the **lost tax base itself**, and only where the federal government acquired the property **since 1938** (U.S. Department of Education, n.d.).

**Read the 1938 cut-off against this post's dates.** The land was bought around **1903 to 1908**. **Whether the district serving it ever qualified under Section 7002 is a question neither course answered, and you should not assume either way.** The applications are filed annually and are public.

## Instruments three and four: closing, and conveying

**Closing.** The **Defense Base Closure and Realignment Act of 1990** built a procedure specifically to defeat the politics of base closure: an independent commission reviews the Secretary of Defense's list against published criteria, sends **one package** to the President, and Congress may reject it **only in its entirety.** **There is no vote on any individual base**, so there is no vote to trade. **When you meet a policy problem where everybody agrees something must be cut and nobody will cut theirs, look for a mechanism that removes the item-by-item vote.**

**Conveying.** Federal surplus property does not simply go on the market. Under the **Federal Property and Administrative Services Act of 1949**, the government must consider **public benefit conveyances**, including for park and natural-resource purposes. In **August 1992** the National Park Service supported a public benefit conveyance here, determining that the land was not suitable as a national park and that preservation should be accomplished by state or local government. In **1995** the Army transferred **1,700 of the roughly 2,500 acres** to the Indiana Department of Natural Resources under an **interim lease** carrying covenants against deforestation, mining, erosion and pollution (Hankins, 2020; National Park Service, n.d.). The remaining ground went to the **Fort Harrison Reuse Authority**, established in 1995 under **Indiana Code 36-7-30**, whose property sits in a **special taxing district** that, unlike an ordinary increment district, is **indefinite** (Fort Harrison Reuse Authority, n.d.; Ind. Code § 36-7-30).

**Ground that paid no property tax for ninety years came back inside a purpose-built taxing instrument.** The tax base did not simply return. **It returned wearing a new legal shape, written by a state legislature.**

## Now grade this against the taxonomy, because that is what this course is for

**Claim A: the Federal Property and Administrative Services Act of 1949 and the Housing Act of 1949 are connected because they are the same year.** **Verdict: rhyme.** Two statutes in one busy postwar Congress is a shared moment, not a documented line between them. **Nothing in this course shows one referring to the other.** It is a genuinely interesting coincidence and it is still a coincidence until somebody produces the paper.

**Claim B: Fort Harrison connects to Indiana Avenue because both are federal decisions imposed on people with no vote in them.** **Verdict: rhyme, and a sharp one.** The DC course made exactly this observation about Southwest, whose residents had no vote in the Congress that authorised their clearance, and it warned against overclaiming, because cities whose residents could vote cleared Black neighbourhoods too. **A shared structural feature across three sites is a pattern worth naming, and it is not transmission.**

**Claim C: the same federal government acted on Lawrence and on Indianapolis, through different instruments.** **Verdict: true, documented, and not a city-to-city connection at all.**

## The distinction this lesson exists to teach

**There are two directions of connection, and this course has been quietly about the difference the whole time.**

- **A horizontal connection runs city to city.** Louisville to Baltimore. Detroit to Indianapolis. Washington to New London. **These are the rare ones, and every one that survived the test in Section 4 survived because a court wrote a citation.**
- **A vertical connection runs from the upstream to a place.** Title I money to a redevelopment commission. The Underwriting Manual to a valuator. BRAC to a township. **These are everywhere, and they are the true shape of this catalogue.**

**Here is the payoff of the whole course.** **Most of what looks like city-to-city transmission is two vertical lines from the same source, seen edge-on.** Two cities that both took Title I money and both cleared a Black district are not connected to each other. **They are each connected to Washington**, and the resemblance between them is the shadow that casts.

**Fort Harrison is the cleanest possible demonstration**, because it shares no instrument with Indiana Avenue at all. Different statute, different agency, different mechanism, no clearance, no blight designation. **And it is still the same government, doing something decisive to the same county, under law, with local consequences and no local vote.** When two sites that share **nothing** horizontally still look related, **you have found the upstream.**

## One reversal worth keeping

**On Indiana Avenue, historic designation arrived after the decisions that emptied the corridor.** At Fort Harrison the order flips: **the base was listed for closure in 1991, the National Register nomination was prepared in 1993, and the districts were listed in 1995.** **Closure produced the listing.** Preservation follows the decision either way; **only the direction of the following changes.**

## Sources
- Defense Base Closure and Realignment Act of 1990, Pub. L. No. 101-510, tit. XXIX, 104 Stat. 1808. https://www.govinfo.gov/app/collection/uscode
- Encyclopedia of Indianapolis. (n.d.). *Lawrence*. https://indyencyclopedia.org/lawrence/
- Fort Harrison Reuse Authority. (n.d.). *About*. https://www.fhra.org/about/
- Hankins, M. B. (2020). *Fort Benjamin Harrison: From military base to Indiana state park* [Master's thesis, Indiana University]. IUPUI ScholarWorks. https://scholarworks.iupui.edu/bitstream/handle/1805/22736/Hankins_Final_Masters%20Thesis_Fort_Ben.pdf
- Ind. Code § 36-7-30 (Reuse of federal military bases). https://law.justia.com/codes/indiana/title-36/article-7/chapter-30/
- McCulloch v. Maryland, 17 U.S. (4 Wheat.) 316 (1819).
- National Park Service. (n.d.). *Reuse of closed military bases (BRAC)*. https://www.nps.gov/orgs/1508/base-realignment-and-closure.htm
- U.S. Const. art. I, § 8, cl. 17.
- U.S. Department of Education. (n.d.). *Impact Aid Section 7002: Payments for federal property*. https://www.ed.gov/grants-and-programs/formula-grants/impact-aid/impact-aid-section-7002--payments-for-federal-property`,
      recallContent: [
        {
          prompt: "What two documents does the person-to-place category demand?",
          answer: "The individual documented in both places with dates, and the practice documented in their hands. A career summary is not enough: \"he worked in city A and later in city B\" tells you he moved, not that anything moved with him.",
        },
        {
          prompt: "What is documented about Harland Bartholomew?",
          answer: "That he produced some 500 plans for cities, counties, regions and states across more than 6,000 projects, and that in 1953 President Eisenhower appointed him chairman of the National Capital Planning Commission. His firm's reports at Cornell cover twenty states plus the District of Columbia, including Indiana and Kentucky.",
        },
        {
          prompt: "Which date kills the Bartholomew edge to Southwest DC?",
          answer: "The Area B renewal plan for Southwest was approved by the end of 1952, and he was appointed to chair the National Capital Planning Commission in 1953. He cannot be the author of a plan approved before he arrived.",
        },
        {
          prompt: "What survives of the Bartholomew claim, stated narrowly?",
          answer: "That for seven years one man chaired the federal planning commission for the national capital while running a firm writing comprehensive plans for hundreds of jurisdictions across at least twenty states. That is a real channel through which planning practice moved, and a channel is a road, not proof that a particular vehicle drove down it.",
        },
        {
          prompt: "What is the warning about famous names?",
          answer: "A famous name is the most seductive evidence there is, because the career is easy to verify and the causation is not, and a reader will accept the second because you demonstrated the first. Verify the biography, then test the link separately. They are two different jobs.",
        },
      ],
    },
    {
      slug: "htt-map",
      title: "18 · Map: the graph, drawn once",
      section: "Section 5 · The Federal Footprint",
      body: `**Plan 42 asked for this map in one sentence: the connections are a graph, not a list.** This lesson draws it, and the drawing itself makes an argument you can see faster than you can read it.

**Read the limits first, because they are part of the lesson.** This platform's lesson map draws the whole world, so two points need roughly two degrees of separation, on the order of 200 kilometres, before they look like two points. **A cleared district is far smaller than one dot.** So nothing here is a site map. **For a parcel, use the jurisdiction's own assessor and geographic information system**, as the city courses taught you to.

## How to read it

**Purple, at the Capitol: the upstream.** One marker stands for the whole of Section 2: the Housing Acts of 1949 and 1954, the FHA Underwriting Manual, the Federal-Aid Highway Act of 1956, and the Court that decided *Berman*.

**Blue: source nodes.** Places where a tool was authorised or, in Pittsburgh's case, claimed to have been. **Pittsburgh is drawn in the same colour as the others and it does not have the same standing**, which lesson 14 explained and this map cannot show, so read the description before you believe the colour.

**Amber: use nodes.** Places where a tool was applied.

**Green: the federal footprint, and an unopened archive.** Fort Benjamin Harrison, where the upstream owned the ground rather than funding it, and the Cornell collection that could close the person-to-place category.

## The lines, and what a line means here

**A dashed line on this map is a documented edge and nothing else is drawn.** Every line below survived all four questions in a lesson of this course.

**Teal, horizontal, city to city. There are only three, and that is the finding.**
- **Louisville to Baltimore**, because *Buchanan* ended a class of ordinances and Baltimore's died with it.
- **Detroit to Indianapolis**, because the Seventh Circuit named *Milliken* and reversed in accordance with it.
- **Washington to New London and to Honolulu**, because *Kelo* and *Midkiff* cite *Berman* in writing.

**Purple, vertical, upstream to place.** Title I money, the Underwriting Manual, the highway match and the base-closure statute reached every marker on this map, and six of those lines are drawn so you can see the shape.

**Now look at the picture and say what it is.** **It is a star, not a web.** The dense part of this graph is not the cities talking to each other. **It is one hub reaching all of them.** Every horizontal line on this map exists because a judge wrote a citation, and there are three of them. **Everything else that looks like a link between two cities is two spokes of the same wheel, seen from the side.**

## What this map cannot show, and will not pretend to

- **It cannot show a rhyme**, and it deliberately does not try. Indiana Avenue and the Hill District rhyme powerfully and there is no line between them, because none is documented. **The absence of a line is a claim, and it is the claim this course spent six sections earning.**
- **It cannot show absence.** Every marker exists because something was recorded. **How many districts were cleared under these instruments and never written up is a question this course cannot answer and will not guess at.**
- **Coordinates here are approximate points, not surveyed locations.** Do not use them to find an address.

## Sources
- Berman v. Parker, 348 U.S. 26 (1954). https://www.law.cornell.edu/supremecourt/text/348/26
- Buchanan v. Warley, 245 U.S. 60 (1917). https://supreme.justia.com/cases/federal/us/245/60/
- Kelo v. City of New London, 545 U.S. 469 (2005). https://www.law.cornell.edu/supremecourt/text/04-108
- Milliken v. Bradley, 418 U.S. 717 (1974). https://www.law.cornell.edu/supremecourt/text/418/717
- United States v. Board of School Commissioners of the City of Indianapolis, 503 F.2d 68 (7th Cir. 1974). https://www.courtlistener.com/opinion/321692/united-states-of-america-donny-brurell-buckley-intervening-v-board-of/`,
      mapContent: {
        markers: [
          {
            id: "htt-upstream",
            lat: 38.8899,
            lng: -77.0091,
            title: "The federal upstream, Washington, D.C.",
            color: "#7e22ce",
            description:
              "One marker for the whole of Section 2. The Housing Act of 1949 (63 Stat. 413) created the national money for clearance and paid up to two thirds of net project cost. The Housing Act of 1954 (68 Stat. 590) renamed the programme urban renewal and made aid conditional on a workable program. The FHA Underwriting Manual set the terms on which private mortgage capital would and would not enter a neighbourhood. The Federal-Aid Highway Act of 1956 renamed the system the National System of Interstate and Defense Highways, set the federal share at 90 percent and created the Highway Trust Fund. And the Court that decided Berman v. Parker sat here. Nearly every resemblance between the other markers on this map runs through this one.",
          },
          {
            id: "htt-southwest-dc",
            lat: 38.878,
            lng: -77.021,
            title: "Southwest Washington, D.C.: the source of Berman",
            color: "#1d4ed8",
            description:
              "Where the blight-clearance instrument was made constitutionally safe. Berman v. Parker, 348 U.S. 26, decided 22 November 1954 by a unanimous Court, held that a redevelopment area may be taken as a whole rather than piecemeal and that the cleared land may be conveyed to a private developer. The plaintiff owned a department store at 712 Fourth Street S.W., not a home. Prerequisite course: Washington, DC: Where the Instrument Was Blessed.",
          },
          {
            id: "htt-detroit",
            lat: 42.3314,
            lng: -83.0458,
            title: "Detroit, Michigan: the source of Milliken",
            color: "#1d4ed8",
            description:
              "Milliken v. Bradley, 418 U.S. 717, decided 25 July 1974, held that before school district boundaries may be set aside for a cross-district remedy it must be shown that a violation in one district produced a significant segregative effect in another. Its own escape clause, for lines deliberately drawn on the basis of race, is the door Indianapolis went through. This is the source node with the cleanest documented use in the whole catalogue.",
          },
          {
            id: "htt-louisville",
            lat: 38.2527,
            lng: -85.7585,
            title: "Louisville, Kentucky: the source of Buchanan",
            color: "#1d4ed8",
            description:
              "Buchanan v. Warley, 245 U.S. 60 (1917), struck down Louisville's racial zoning ordinance under the Fourteenth Amendment because it interfered with an owner's right to sell property, and ended the whole class of laws nationally. Plan 42 predicted that Louisville and Baltimore would be a pair before either course existed, and the edge survived the test. Harland Bartholomew's firm also wrote the 1957 Louisville-Jefferson County comprehensive plan, which is where the person-to-place hunt in lesson 15 starts.",
          },
          {
            id: "htt-pittsburgh",
            lat: 40.4419,
            lng: -79.9846,
            title: "Lower Hill District, Pittsburgh: the contested model node",
            color: "#1d4ed8",
            description:
              "Read the description before you believe the colour. Pittsburgh assembled the public-private redevelopment machine early (Allegheny Conference 1944, Pennsylvania law 1945, URA incorporated November 1946) and more than seventy delegations came to study the Renaissance. But the sibling course found that what they came for was the partnership and the downtown clean-up, and that the clearance instruments spread through the federal Housing Act of 1949 and parallel state laws instead. True as to emulation, false as to a copy-chain. No line is drawn from this marker.",
          },
          {
            id: "htt-indiana-avenue",
            lat: 39.7745,
            lng: -86.1665,
            title: "Indiana Avenue, Indianapolis, Indiana",
            color: "#b45309",
            description:
              "The pilot course's corridor, and the use node this series was built around. A blight designation and land assembly, not the highway, emptied it. Indiana's own blight machinery dates from 1945 and demolition near the Avenue began in 1948, so Berman did not cause the clearance; it removed the constitutional argument against it in November 1954. The one line drawn to this marker comes from Detroit, because the Seventh Circuit applied Milliken here by name in August 1974.",
          },
          {
            id: "htt-baltimore",
            lat: 39.293,
            lng: -76.645,
            title: "Old West Baltimore and the Highway to Nowhere",
            color: "#b45309",
            description:
              "The city that holds every link of the chain inside its own limits: four racial zoning ordinances between 1910 and 1913, restrictive covenants from 1913, a canonical redlining map, and an expressway driven partway through West Baltimore and abandoned. The line from Louisville is real: Buchanan made these ordinances unenforceable. The line people expect, from zoning to covenants, is not drawn, because Guilford's covenant is four years older than Buchanan.",
          },
          {
            id: "htt-seattle",
            lat: 47.6069,
            lng: -122.3009,
            title: "Central District, Seattle, Washington",
            color: "#b45309",
            description:
              "The other end of a doctrine pair, and deliberately not joined to Detroit by a line. Parents Involved in Community Schools v. Seattle School District No. 1 (2007) limited what a district may voluntarily choose to do with race in assignment, in a district the opinion records had never operated legally separate schools nor been subject to court-ordered desegregation. Milliken limits compulsion; this limits choice. Reading them together is illuminating, and this course did not verify a citation chain, so no edge is drawn.",
          },
          {
            id: "htt-new-london",
            lat: 41.348,
            lng: -72.093,
            title: "Fort Trumbull, New London, Connecticut",
            color: "#b45309",
            description:
              "Where the Berman standard arrived in 2005. Kelo v. City of New London allowed the taking of well-maintained, non-blighted homes for a private economic-development plan, citing Berman and Midkiff. This is the cleanest documented edge running out of Washington in the whole catalogue, and it is cleaner than the DC-to-Indianapolis edge the series was built around, because the receiving court wrote the citation down.",
          },
          {
            id: "htt-honolulu",
            lat: 21.3069,
            lng: -157.8583,
            title: "Honolulu, Hawaii",
            color: "#b45309",
            description:
              "Hawaii Housing Authority v. Midkiff, 467 U.S. 229 (1984), upheld a state law compelling large landowners to sell to their tenants, relying on Berman for a public-use requirement satisfied whenever a taking is rationally related to a conceivable public purpose. A second citation edge out of Southwest Washington, and a reminder that the instrument travelled to uses very unlike slum clearance.",
          },
          {
            id: "htt-philadelphia",
            lat: 39.956,
            lng: -75.1935,
            title: "Black Bottom and University City, Philadelphia, Pennsylvania",
            color: "#b45309",
            description:
              "A use node where a university assembled land through a redevelopment authority, the same three-part mechanism of designation, condemnation and conveyance the Section 2 statutes paid for. No horizontal line is drawn to this marker. That is the point of the map: the connection is vertical, to the upstream, not sideways to another city.",
          },
          {
            id: "htt-fort-harrison",
            lat: 39.8598,
            lng: -86.0169,
            title: "Fort Benjamin Harrison, Lawrence, Marion County, Indiana",
            color: "#15803d",
            description:
              "The same upstream acting as landowner and employer rather than funder. Roughly 2,400 acres off the tax rolls under the Enclave Clause and McCulloch v. Maryland, the largest employer in Lawrence, closed by a commission designed so that no member of Congress could vote on any individual base, and conveyed under the Federal Property and Administrative Services Act of 1949 into a state park and a reuse authority with an indefinite special taxing district. It shares no instrument with Indiana Avenue and is still the same government acting on the same county.",
          },
          {
            id: "htt-cornell-archive",
            lat: 42.4475,
            lng: -76.4844,
            title: "Harland Bartholomew and Associates reports, Cornell University Library",
            color: "#15803d",
            description:
              "The unopened box. Collection 6400, 6.4 cubic feet of planning reports from 1944 to 1990, documenting the firm's work across twenty states plus the District of Columbia, including Indiana and Kentucky. It has not been read into this course. The person-to-place category in the taxonomy is open, and this is the nearest place a researcher could go to close it.",
          },
        ],
        lines: [
          {
            id: "htt-edge-louisville-baltimore",
            color: "#0f766e",
            title: "Buchanan v. Warley (1917): Louisville to Baltimore",
            description: "Source to use. A Louisville case ended the class of racial zoning ordinances nationally, and Baltimore's four ordinances became unenforceable rather than repealed.",
            coords: [
              [38.2527, -85.7585],
              [39.293, -76.645],
            ],
          },
          {
            id: "htt-edge-detroit-indianapolis",
            color: "#0f766e",
            title: "Milliken v. Bradley (1974): Detroit to Indianapolis",
            description: "Source to use, and the strongest edge in the course. The Seventh Circuit named Milliken and reversed the metropolitan remedy beyond Uni-Gov in accordance with it, weeks after it was decided.",
            coords: [
              [42.3314, -83.0458],
              [39.7745, -86.1665],
            ],
          },
          {
            id: "htt-edge-dc-new-london",
            color: "#0f766e",
            title: "Berman v. Parker (1954): Southwest Washington to New London",
            description: "Source to use. Kelo v. City of New London cited Berman and Midkiff in allowing the taking of well-maintained, non-blighted homes for a private economic-development plan.",
            coords: [
              [38.878, -77.021],
              [41.348, -72.093],
            ],
          },
          {
            id: "htt-edge-dc-honolulu",
            color: "#0f766e",
            title: "Berman v. Parker (1954): Southwest Washington to Honolulu",
            description: "Source to use. Hawaii Housing Authority v. Midkiff relied on Berman for a public-use requirement satisfied by any rational relation to a conceivable public purpose.",
            coords: [
              [38.878, -77.021],
              [21.3069, -157.8583],
            ],
          },
          {
            id: "htt-vertical-indianapolis",
            color: "#7e22ce",
            title: "The upstream to Indianapolis",
            description: "Title I money from 1949, the FHA Underwriting Manual before it, and the highway match after it. A vertical line, and the reason Indianapolis needed no city's example.",
            coords: [
              [38.8899, -77.0091],
              [39.7745, -86.1665],
            ],
          },
          {
            id: "htt-vertical-pittsburgh",
            color: "#7e22ce",
            title: "The upstream to Pittsburgh",
            description: "The Lower Hill clearance rode Title I federal grants like everyone else's, which is why the sibling course concluded that what spread nationally was federal rather than Pittsburgh's example.",
            coords: [
              [38.8899, -77.0091],
              [40.4419, -79.9846],
            ],
          },
          {
            id: "htt-vertical-baltimore",
            color: "#7e22ce",
            title: "The upstream to Baltimore",
            description: "The FHA Underwriting Manual's racial underwriting rules, Title I renewal money, and the highway programme that paid for the trench through West Baltimore.",
            coords: [
              [38.8899, -77.0091],
              [39.293, -76.645],
            ],
          },
          {
            id: "htt-vertical-seattle",
            color: "#7e22ce",
            title: "The upstream to Seattle",
            description: "Federal underwriting rules that endorsed the racial covenant, and the federal courts that later bounded what a school district could compel and what it could choose.",
            coords: [
              [38.8899, -77.0091],
              [47.6069, -122.3009],
            ],
          },
          {
            id: "htt-vertical-philadelphia",
            color: "#7e22ce",
            title: "The upstream to Philadelphia",
            description: "Designation, condemnation and conveyance to a redeveloper, the three-part mechanism Title I paid two thirds of and Berman made constitutionally safe.",
            coords: [
              [38.8899, -77.0091],
              [39.956, -75.1935],
            ],
          },
          {
            id: "htt-vertical-fort-harrison",
            color: "#7e22ce",
            title: "The upstream to Fort Harrison",
            description: "A different set of instruments entirely: the Enclave Clause, the tax exemption, base closure under the 1990 Act, and conveyance under the Federal Property and Administrative Services Act of 1949.",
            coords: [
              [38.8899, -77.0091],
              [39.8598, -86.0169],
            ],
          },
        ],
      },
      recallContent: [
        {
          prompt: "Name the fifth federal posture this course adds, and the four that came before it.",
          answer: "Landowner and employer. The earlier four are funder of clearance under Title I, lawmaker in the Housing and Highway Acts, rule-writer in the Underwriting Manual, and court in Berman, Milliken and Buchanan.",
        },
        {
          prompt: "State the Enclave Clause and the caution that goes with it.",
          answer: "Article I, Section 8, Clause 17 lets Congress exercise authority over places purchased with a state legislature's consent for forts, magazines, arsenals, dockyards and other needful buildings. The caution is that not every federal property is an exclusive-jurisdiction enclave: jurisdiction may be exclusive, concurrent, partial or proprietary, and neither course has read this post's jurisdictional history.",
        },
        {
          prompt: "Why is base closure structured so that Congress may only reject the whole package?",
          answer: "Because a member cannot trade a vote to save one installation when there is no vote on any individual base. Ordinary legislation cannot close bases, since any bill naming one attracts an amendment removing it.",
        },
        {
          prompt: "Give the verdicts on the three claims tested in this lesson.",
          answer: "That the two 1949 statutes are connected by their shared year: rhyme. That Fort Harrison and Indiana Avenue are connected because both were federal decisions imposed on people with no vote in them: rhyme, and a sharp one. That the same federal government acted on Lawrence and on Indianapolis through different instruments: true, documented, and not a city-to-city connection at all.",
        },
        {
          prompt: "State the difference between a horizontal and a vertical connection, and the payoff.",
          answer: "A horizontal connection runs city to city and is rare; each one that survived did so because a court wrote a citation. A vertical connection runs from the upstream to a place and is everywhere. The payoff: most of what looks like city-to-city transmission is two vertical lines from the same source, seen edge-on.",
        },
      ],
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 6 · What This Does Not Prove  (the limits, a drill, and the learner's own test)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "htt-limits",
      title: "19 · What this does not prove",
      section: "Section 6 · What This Does Not Prove",
      body: `**A course that argues one thing for five sections owes its last section to the argument's limits.** This is not a modesty ritual. **Each of the three limits below is a specific way the thesis of this course can be used to say something false**, and you will meet all three in print.

## Limit one: a common cause produces correlation, and correlation is not transmission

**Section 5 gave you the shape: the graph is a star.** Now take the consequence seriously. **When one hub reaches many places, those places will resemble each other**, and every pair of them will show a correlation. **None of those correlations is evidence that either place influenced the other.**

**This cuts both ways and the second way is easy to miss.** It is a reason to doubt city-to-city claims, **and** it is a reason to be careful about the upstream claim itself. **"Both cities took federal money and both cleared a Black district" does not by itself establish that the federal money caused the clearance in either city.** It establishes that the money was there. **Question 4 has to be asked about your own favourite explanation, not only about the ones you are trying to knock down.**

## Limit two: parallel invention is real, common, and boring

**Fifty legislatures work on the same national problem at the same time, in the same professional and legal culture, and reach the same answer.** That is not transmission. It is convergence, and American federalism produces it constantly.

**The clearest example is sitting inside this course and it has not been resolved.** **Indiana's blight statute is 1945. Pennsylvania's Urban Redevelopment Law is 1945. The District of Columbia Redevelopment Act is 1945.** Three enabling statutes, three jurisdictions, one year, four years before the federal money arrived.

**That is a striking pattern and this course does not know what it is.** It could be a model act circulating through a professional body, which would be a documented line. It could be three legislatures responding to the same postwar housing crisis independently, which would be convergence. **This course did not read the legislative histories, so it calls the 1945 cluster a rhyme, flags it as the most interesting unresolved question it found, and stops.** **State redevelopment law is a whole layer of this story that a capstone built on federal instruments has treated lightly, and saying so is part of the finding.**

## Limit three, and it is the one with a conscience attached: available is not chosen

**Title I money was available to every city in the United States.** Not every city cleared a Black district. Cities that did clear cleared different areas, on different schedules, and stopped at different points. **The federal government made a tool cheap and legal. Somebody in each place picked it up, pointed it, and signed.**

**Say the danger plainly.** A structural explanation can become a way of not naming anybody. "The federal instruments did it" is true as far as it goes, and if it is the whole sentence, **then no redevelopment commissioner, no mayor, no highway engineer and no valuator ever decided anything.** **A history in which the structure acts and no person does is not a more sophisticated history. It is an alibi**, and it is one the records themselves refuse, because the records are full of named people voting on dated motions.

**The correct move is both, in this order.** **Name the upstream, because it is real and it explains the timing and the shape.** **Then go and find who chose**, because the minutes exist and they have names in them. **The city courses in this series are the second half of that sentence, and this capstone is only the first.**

## What this course specifically does not establish

**Written out, so that nobody has to guess.**
1. **No intent.** Nothing here shows what any redevelopment commission, highway department or zoning board meant to do. **Intent needs the minutes, and no commission's minutes have been read into this series.**
2. **No alignment claim.** The 1956 Act did not direct any route through any neighbourhood; its text does not do that, and the alignment decisions were made elsewhere.
3. **No causal claim from Berman to any clearance.** Only to the legal security of clearance, from November 1954 onward.
4. **No copy-chain out of Pittsburgh.** Emulation of a partnership, yes. A clearance manual travelling city to city, no.
5. **No person-carried link.** The category is open and the archive that might close it is named on the map.
6. **No accounting of how much.** This course cannot tell you what share of any city's outcome is federal, what share is state, and what share is local. **It can tell you the instruments existed and which edges are documented. Proportions would need quantitative work nobody here has done.**

## The opposite error, which is also available

**Refusing every claim is not rigour.** A reader who finishes this course saying "you can never show anything connects" has learned the wrong lesson as thoroughly as one who finishes saying "it was all one plan."

**Three horizontal edges survived every test in this course, and they are not small.** A Louisville lawsuit voided Baltimore's statute book. A Detroit opinion redirected an Indianapolis case within weeks. A Washington opinion reached New London and Honolulu in the reported words of the courts that got there. **Those are proven, they are citable, and the vertical lines from the upstream are proven too.**

**The standard is not "nothing counts." It is "say which kind, and show the paper."**

## Now go and use it

**The next two lessons are the point of the course.** One is a drill on the vocabulary and the dates. The other asks you to take **one connection of your own**, something you believe about two places, and run it through the taxonomy and the four questions in writing. **Pick one you like. That is the whole exercise.**

## Sources
- Berman v. Parker, 348 U.S. 26 (1954). https://www.law.cornell.edu/supremecourt/text/348/26
- District of Columbia Redevelopment Act of 1945, 60 Stat. 790 (1946). https://www.law.cornell.edu/topn/district_of_columbia_redevelopment_act_of_1945
- Housing Act of 1949, Pub. L. No. 81-171, 63 Stat. 413 (1949). https://www.govinfo.gov/content/pkg/STATUTE-63/pdf/STATUTE-63-Pg413.pdf
- Neumann, T. (2016, February 1). *The "spiritual capital" of the Rust Belt: Pittsburgh and the postindustrial transformation of North Atlantic cities*. Global Urban History. https://globalurbanhistory.com/2016/02/01/the-spiritual-capital-of-the-rust-belt-pittsburgh-and-the-postindustrial-transformation-of-north-atlantic-cities/
- Urban Redevelopment Authority of Pittsburgh. (n.d.). *History of the Urban Redevelopment Authority of Pittsburgh (URA)*. https://www.ura.org/pages/history-of-the-urban-redevelopment-authority-of-pittsburgh-ura`,
      recallContent: [
        {
          prompt: "What do the colours on this course's map mean?",
          answer: "Purple at the Capitol is the federal upstream. Blue is a source node, a place where a tool was authorised, with Pittsburgh drawn in blue but described as contested. Amber is a use node. Green is the federal footprint at Fort Harrison and the unopened Bartholomew archive at Cornell.",
        },
        {
          prompt: "What does a dashed line on the map mean, and how many horizontal ones are there?",
          answer: "A documented edge that survived all four questions. There are three horizontal city-to-city relationships drawn: Louisville to Baltimore, Detroit to Indianapolis, and Washington to New London and Honolulu.",
        },
        {
          prompt: "What shape is the graph, and what follows from it?",
          answer: "A star, not a web. The dense part is one hub reaching all the cities, not the cities talking to each other. Everything else that looks like a link between two cities is two spokes of the same wheel, seen from the side.",
        },
        {
          prompt: "Why is the absence of a line between Indiana Avenue and the Hill District deliberate?",
          answer: "Because they rhyme powerfully and no line between them is documented. The absence of a line is itself a claim, and it is the claim the course spent six sections earning.",
        },
        {
          prompt: "Why is Seattle not joined to Detroit on the map?",
          answer: "Because Milliken and Parents Involved are a doctrine pair rather than a documented line. Milliken limits compulsion and Parents Involved limits choice, and this course did not verify a citation chain between them.",
        },
      ],
    },
    {
      slug: "htt-exercise-grade-a-claim",
      title: "20 · Practice: grade the claim",
      section: "Section 6 · What This Does Not Prove",
      lessonType: "exercise",
      body: `**This drill is the vocabulary and the dates, typed rather than recognised.** Type the missing word, name, number or year and check. The next lesson is where you use them on something of your own.

**One reminder before you start.** Every answer below is either a category from lesson 2, a question from lesson 3, or a fact from a statute, a manual or an opinion this course quoted. **If an answer surprises you, go back to the lesson it came from rather than accepting it here**, because being able to type the word is not the same as being able to defend it.

## Sources
- Berman v. Parker, 348 U.S. 26 (1954). https://www.law.cornell.edu/supremecourt/text/348/26
- Federal Housing Administration. (1938). *Underwriting manual: Underwriting and valuation procedure under Title II of the National Housing Act*. U.S. Government Printing Office.
- Federal-Aid Highway Act of 1956, Pub. L. No. 84-627, 70 Stat. 374 (1956). https://www.govinfo.gov/content/pkg/STATUTE-70/pdf/STATUTE-70-Pg374.pdf
- Housing Act of 1949, Pub. L. No. 81-171, 63 Stat. 413 (1949). https://www.govinfo.gov/content/pkg/STATUTE-63/pdf/STATUTE-63-Pg413.pdf
- Milliken v. Bradley, 418 U.S. 717 (1974). https://www.law.cornell.edu/supremecourt/text/418/717`,
      exercise: {
        instructions:
          "Type the missing term, name, number or year, then check. Close answers (spelling, capitalization) count as 'close', not wrong.",
        items: [
          {
            prompt: "The strongest kind of connection in the taxonomy is source to ___.",
            answer: "use",
            accept: ["use", "source to use", "application"],
            explanation: "One place authorises a tool and another applies it. It has a document at both ends, which is why only chronology can break it.",
          },
          {
            prompt: "The weakest kind, and the honest word when only a pattern exists, is a thematic ___.",
            answer: "rhyme",
            accept: ["rhyme", "thematic rhyme", "resemblance"],
            explanation: "A shared pattern is a rhyme; a documented line is a connection. Say the word rather than dressing the resemblance up.",
          },
          {
            prompt: "A documented line means one of four things: a citation, a copied plan, a named person, or a funding ___.",
            answer: "stream",
            accept: ["stream", "funding stream", "source"],
            explanation: "If you have none of the four, you have a rhyme, however strong the resemblance feels.",
          },
          {
            prompt: "The first and cheapest question of the test is ___.",
            answer: "chronology",
            accept: ["chronology", "the chronology", "dates", "timing"],
            explanation: "Build a two-column table of date and event covering both places. A cause cannot postdate the effects it is supposed to have produced.",
          },
          {
            prompt: "The fourth question, the one people skip, asks what ___ cause would produce the same result.",
            answer: "alternative",
            accept: ["alternative", "other", "alternate"],
            explanation: "A common federal upstream is the alternative explanation for nearly every city-to-city resemblance in this catalogue.",
          },
          {
            prompt: "The federal statute that created the national money for slum clearance is the Housing Act of ___.",
            answer: "1949",
            accept: ["1949", "49"],
            explanation: "Public Law 81-171, 63 Stat. 413, approved July 15, 1949. Title I is the one this series keeps meeting.",
          },
          {
            prompt: "Under Title I the federal capital grant covered up to ___ thirds of the net project cost.",
            answer: "two",
            accept: ["two", "2", "two-thirds", "two thirds"],
            explanation: "The locality supplied local grants-in-aid worth at least one third of aggregate net project costs. For every three dollars of loss, the city found one and Washington found two.",
          },
          {
            prompt: "The Housing Act of 1954 renamed the programme urban ___.",
            answer: "renewal",
            accept: ["renewal", "urban renewal"],
            explanation: "It added rehabilitation and conservation to demolition and leaned harder on private redevelopers. The vocabulary in a local record dates the document.",
          },
          {
            prompt: "To get 1954 aid a locality had to submit and maintain a ___ program for community improvement.",
            answer: "workable",
            accept: ["workable", "workable program", "workable programme"],
            explanation: "A comprehensive plan, a zoning ordinance and map, subdivision regulations and code enforcement, produced to a federal specification. Money converted into law at a distance.",
          },
          {
            prompt: "The FHA rulebook whose words this course prefers to the redlining maps is the Underwriting ___.",
            answer: "Manual",
            accept: ["manual", "underwriting manual"],
            explanation: "It is not confidential and not disputed. A picture persuades; a quotation proves.",
          },
          {
            prompt: "The 1956 highway statute renamed the system the National System of Interstate and ___ Highways.",
            answer: "Defense",
            accept: ["defense", "defence"],
            explanation: "The defence rationale runs back to the 1944 Act's own language and to the Department of Defense review of the first 37,700 miles announced in 1947.",
          },
          {
            prompt: "The 1956 Act set the federal share of project cost at ___ percent.",
            answer: "90",
            accept: ["90", "ninety", "90%"],
            explanation: "A city choosing an urban Interstate alignment was spending roughly ten cents on the dollar, and Title II created the Highway Trust Fund so the money did not have to be fought for annually.",
          },
          {
            prompt: "The 1954 opinion that made blight-designation clearance constitutionally safe is Berman v. ___.",
            answer: "Parker",
            accept: ["parker", "berman v parker"],
            explanation: "348 U.S. 26, decided November 22, 1954, unanimously. It held an area may be taken as a whole and conveyed to a private developer.",
          },
          {
            prompt: "Berman did not cause Indiana Avenue's clearance. In this course's phrase, it ___ it.",
            answer: "insured",
            accept: ["insured", "backstopped", "insured it"],
            explanation: "Indiana's blight machinery is 1945 and demolition began in 1948. An instrument that arrives after a practice is not its cause; it is its insurance.",
          },
          {
            prompt: "The 1974 decision that turned a school district boundary into a wall is Milliken v. ___.",
            answer: "Bradley",
            accept: ["bradley", "milliken v bradley"],
            explanation: "418 U.S. 717, decided July 25, 1974. Its escape clause, for lines deliberately drawn on the basis of race, is the door Indianapolis went through.",
          },
        ],
      },
    },
    {
      slug: "htt-assignment-test-a-connection",
      title: "21 · Your assignment: test one connection of your own",
      section: "Section 6 · What This Does Not Prove",
      lessonType: "assignment",
      body: `**Every other course in this series ends by asking you to write about a place. This one ends by asking you to write about a claim.**

## The assignment

Take **one proposed connection between two places** that you believe, or want to believe, and **test it in writing against the taxonomy in lesson 2 and the four questions in lesson 3.** **800 to 1,200 words.** Every factual sentence must be checkable against a source you name. **You must reach a verdict, and you must publish it even if it is not the one you wanted.**

**Do not use a connection this course already worked.** Berman to Indiana Avenue, Milliken to Indianapolis, Buchanan to Baltimore, Pittsburgh to anywhere, and Bartholomew to Southwest are all spent. **Find your own.**

## Step 1 · Choose a claim, and choose one you have some feeling about

**Good hunting grounds, none of which this course has verified for you.**
- **Your own town.** Did it have an urban renewal agency? What did it clear, when, and under which state statute? **Then ask where the practice came from, and test whatever answer you find.**
- **A claim you have read.** Any sentence of the form "city A pioneered this and city B copied it." **Those sentences are everywhere and most of them have never been tested by the person repeating them.**
- **A person.** Any planner, commissioner, consultant or judge who appears in two of these stories. **Person to place is the open category, and the most concrete win available.**
- **A statute.** Did your state's redevelopment law arrive in 1945, like Indiana's, Pennsylvania's and the District's? **If it did, you have walked straight into this course's biggest unresolved question, and the legislative history is public.**
- **An international claim.** The transmission of segregation and clearance practice between countries is real and heavily written about. **It is also the easiest place to overclaim**, so if you go there, hold the standard higher, not lower.

**One rule about choosing.** **Pick a claim you would be sorry to lose.** Testing something you are indifferent to teaches you nothing about the discipline, because the discipline is entirely about what you do when the answer disappoints you.

## Step 2 · Classify it before you test it

**Write one sentence: "This is a claim of ___," using a category from lesson 2.** Source to use, model to copy, doctrine pair, person to place, instrument lineage, or thematic rhyme.

**If you cannot decide which category it is, that is itself a finding**, and it usually means the claim is vaguer than it sounded. **Sharpen the claim until it fits one box, then test the sharpened version.**

## Step 3 · Build the chronology before you write a sentence of prose

**Three columns: date, event, source.** Both places in one table, in date order. **This is the outline of the piece, and it is where most claims die.**

## Step 4 · Run all four questions, in writing, in order

**Give each one its own short section with a heading, and answer it plainly.**
1. **Chronology.** Does the proposed cause precede its effects?
2. **Mechanism.** Which channel: money, law, paper, or people? **Name it or admit you cannot.**
3. **Document.** A citation, a copied plan, a named person or a funding stream. **Say which record, held by whom, and whether you actually read it.**
4. **Alternative cause.** What else explains this? **A shared upstream, parallel invention, or common professional training. Take the best alternative seriously and say why it does or does not beat your claim.**

## Step 5 · Publish a verdict table

**End with the same table lesson 3 gave you: which questions passed, which failed, and what you are therefore allowed to write.** **One row per question, one verdict line underneath.**

## Rules you do not get to break

1. **No invented detail.** Not a date, a name, a quotation, a figure or an address. **If a source does not say it, you do not write it.**
2. **No invented or composite people.** Real, cited individuals only.
3. **Give every figure its owner.** Not "displacement was 23,000" but "the local histories compiled by WETA's Boundary Stones put displacement from the Southwest renewal at about 23,000 residents."
4. **Quote instruments exactly or not at all.** Statutes, manuals and opinions have real words. **Do not improve them, and do not attribute to a court a holding it did not reach.**
5. **Use the word "rhyme" when it applies.** If the claim fails, say "this is a rhyme, not a link," in those words. **The vocabulary is the deliverable.**
6. **Report the failure.** If your claim broke, the write-up says so, in the same voice it would have used to announce a success.
7. **Name the record you did not read.** Every piece in this series ends by saying where the next researcher should go. **One paragraph, minimum, on what would settle the question and where it is held.**
8. **Do not publish a private individual's name with their address**, whatever the record says. The parcel record is public; your write-up is a different act.

## What good looks like

**A short, checkable piece in which a real claim is taken seriously, tested in the open, and given a verdict that the reader can check line by line.** The best version of this assignment is usually **a claim that failed**, because a failed test that is honestly reported tells the next reader something nobody had written down.

**The model is in this course.** Section 3 took the most attractive connection in the whole series, the one both prerequisite courses exist to support, ran four questions on it, and reported that it fails one. **That piece of writing is more useful than a confident version would have been, and it is more useful precisely because it disappointed its author.**

## Sources
- Berman v. Parker, 348 U.S. 26 (1954). https://www.law.cornell.edu/supremecourt/text/348/26
- Housing Act of 1949, Pub. L. No. 81-171, 63 Stat. 413 (1949). https://www.govinfo.gov/content/pkg/STATUTE-63/pdf/STATUTE-63-Pg413.pdf
- Milliken v. Bradley, 418 U.S. 717 (1974). https://www.law.cornell.edu/supremecourt/text/418/717
- Division of Rare and Manuscript Collections. (n.d.). *Guide to the Harland Bartholomew and Associates planning reports, 1944-1990* (Collection 6400). Cornell University Library. http://rmc.library.cornell.edu/EAD/htmldocs/RMM06400.html`,
      recallContent: [
        {
          prompt: "Why is a common cause a problem for city-to-city claims, and for the upstream claim too?",
          answer: "Because one hub reaching many places makes those places resemble each other, so every pair shows a correlation that is not evidence either influenced the other. The same caution applies to the upstream claim: both cities taking federal money and both clearing a district establishes that the money was there, not that it caused either clearance.",
        },
        {
          prompt: "What is the 1945 cluster, and what does this course call it?",
          answer: "Indiana's blight statute, Pennsylvania's Urban Redevelopment Law and the District of Columbia Redevelopment Act are all 1945, four years before the federal money. It could be a circulating model act or three independent responses to the same crisis. This course did not read the legislative histories, so it calls the cluster a rhyme and flags it as the most interesting unresolved question it found.",
        },
        {
          prompt: "State the third limit and the danger attached to it.",
          answer: "Available is not chosen. Title I money was open to every city and not every city cleared a Black district. The danger is that a structural explanation becomes a way of not naming anybody: a history in which the structure acts and no person does is an alibi, and the records refuse it, because they are full of named people voting on dated motions.",
        },
        {
          prompt: "Name three things this course specifically does not establish.",
          answer: "Any body's intent, since no commission's minutes have been read; that the 1956 Act directed any route through any neighbourhood; that Berman caused any clearance rather than securing it; a copy-chain out of Pittsburgh; any person-carried link; and what share of any city's outcome is federal, state or local.",
        },
        {
          prompt: "What is the opposite error, and what is the standard?",
          answer: "Refusing every claim is not rigour. Three horizontal edges survived every test, and the vertical lines are proven too. The standard is not \"nothing counts\" but \"say which kind, and show the paper.\"",
        },
      ],
    },
    {
      slug: "htt-what-comes-next",
      title: "22 · What survived, what was downgraded, and what is still open",
      section: "Section 6 · What This Does Not Prove",
      body: `**You now have the thing the individual city courses could not give you: a method for saying how they are related, and a vocabulary for saying when they are not.**

## The verdicts, in one table

| Proposed connection | Kind | Verdict |
|---|---|---|
| Berman to Indiana Avenue | Source to use | **Weakened.** Fails chronology. Berman insured the clearance rather than causing it |
| Berman to New London and Honolulu | Source to use | **Survives.** Kelo and Midkiff cite Berman in writing |
| Milliken to Indianapolis | Source to use | **Survives, strongest in the course.** The Seventh Circuit named it and reversed in accordance with it |
| Milliken to Parents Involved | Doctrine pair | **Holds as a pair.** No citation chain verified, so no causal line is drawn |
| Buchanan to Baltimore's ordinances | Source to use | **Survives.** A Louisville case made a Baltimore statute book unenforceable |
| Zoning to covenants to redlining | Instrument lineage | **Downgraded.** Guilford's covenant is 1913, four years before Buchanan. A lineage of purpose, not a baton pass |
| Pittsburgh to other cities | Model to copy | **Split.** True as to emulation of the partnership, false as to a copy-chain of clearance |
| Bartholomew to Southwest DC | Person to place | **Fails.** The Area B plan was approved in 1952; he arrived in 1953 |
| The three 1945 statutes | Unresolved | **Rhyme, flagged.** Could be a model act or convergence. Legislative histories unread |
| Fort Harrison to Indiana Avenue | Thematic rhyme | **Rhyme, and useful.** Same government, different instruments, no shared tool |
| The upstream to every city | Vertical | **Survives everywhere.** Funding streams and binding law, documented |

**Read the shape of that column.** **One of the eight proposed horizontal connections survived intact in the form it was first stated.** That is the honest yield of a careful capstone, and it is a better result than eleven confident arrows would have been.

## What you can do now that you could not before

- **Grade a transmission claim in about an hour**, using a two-column date table and four questions, and know which of the six categories you are in.
- **Say "rhyme" out loud** about a resemblance you find moving, without feeling that you have given anything up.
- **Read a federal statute for its mechanism** rather than its rhetoric: who pays, on what condition, to whom, and what document it leaves.
- **Spot a conditional grant**, which is the most common way an American practice spreads without anybody copying anybody.
- **Tell a vertical connection from a horizontal one**, which is the single most useful distinction in this course and the one most often collapsed in public writing.
- **Report your own weakened claim in the same voice you would have used for a strong one.**

## What this course deliberately did not cover

- **State redevelopment law**, which is a whole layer between the federal statutes and the local decision. **Three of these statutes are the same year and this course could not say why.** It is the largest gap here.
- **The global lines.** The transmission of segregation and clearance practice between countries is real, documented and demanding, and it belongs to its own course rather than to a paragraph in this one.
- **Quantities.** No share, proportion or attribution of outcome. **The instruments are named; the arithmetic is not attempted.**
- **Intent.** No commission's minutes were read, so no claim about what anybody meant.
- **The other Green Book cities.** Chicago, New Haven, St. Louis, Miami, New Orleans, Durham, Saint Paul and others appear as leads and not as courses. **Each would need the same treatment the twelve got.**

## The unopened sources, which are the next real work

**Named so that somebody can go.**
- **The Harland Bartholomew and Associates planning reports**, Cornell University Library, collection 6400, covering twenty states plus the District of Columbia, including Indiana and Kentucky. **The person-to-place category could close here.**
- **The Indianapolis Redevelopment Commission's minutes**, which would show whether any Indianapolis body ever cited *Berman*, and would close the one open question in Section 3.
- **The legislative histories of the 1945 statutes** in Indiana, Pennsylvania and the District, which would tell you whether the cluster is a model act or convergence.
- **Local urban renewal application files**, held in city and state archives, which contain the workable program each city submitted. **A workable program is a federal specification filled in by a named local official, which makes it one of the most direct pieces of transmission evidence anyone could read.**
- **The Urban Redevelopment Authority of Pittsburgh's Lower Hill project files** and the Allegheny Conference records, which the Pittsburgh course also left unopened.

**None of these has been read into this course.** They are public or requestable, and any one of them would let a reader move a verdict in the table above.

## Where this sits, and what it asks of you

**This is the last course in the route series and the only one with no ground under it.** The others put you on a corridor, in a trench, beside a district line or on a closed post. **This one puts you in front of a claim.**

**The series began by teaching you to read a Green Book listing and follow one address forward. It ends by teaching you to read a sentence of causation and ask it for its papers.** **Those are the same skill at two scales**, and the second one is the more dangerous, because a claim about transmission is a claim about who is responsible.

**So carry the vocabulary, and carry the caution with it. Name the upstream. Then go and find who chose.**

## Sources
- Berman v. Parker, 348 U.S. 26 (1954). https://www.law.cornell.edu/supremecourt/text/348/26
- Buchanan v. Warley, 245 U.S. 60 (1917). https://supreme.justia.com/cases/federal/us/245/60/
- Division of Rare and Manuscript Collections. (n.d.). *Guide to the Harland Bartholomew and Associates planning reports, 1944-1990* (Collection 6400). Cornell University Library. http://rmc.library.cornell.edu/EAD/htmldocs/RMM06400.html
- Housing Act of 1949, Pub. L. No. 81-171, 63 Stat. 413 (1949). https://www.govinfo.gov/content/pkg/STATUTE-63/pdf/STATUTE-63-Pg413.pdf
- Milliken v. Bradley, 418 U.S. 717 (1974). https://www.law.cornell.edu/supremecourt/text/418/717`,
      recallContent: [
        {
          prompt: "What does the assignment ask you to produce, and how long?",
          answer: "A test in writing of one proposed connection between two places, 800 to 1,200 words, against the taxonomy and the four questions, ending in a published verdict even if it is not the one you wanted.",
        },
        {
          prompt: "Why does the assignment say to pick a claim you would be sorry to lose?",
          answer: "Because testing something you are indifferent to teaches nothing about the discipline, which is entirely about what you do when the answer disappoints you.",
        },
        {
          prompt: "What must you do before testing a claim, and what does difficulty there tell you?",
          answer: "Classify it: write one sentence naming which of the six categories it is. If you cannot decide, the claim is vaguer than it sounded, and you should sharpen it until it fits one box and then test the sharpened version.",
        },
        {
          prompt: "What are the three columns of the chronology table, and why build it first?",
          answer: "Date, event, source, with both places in one table in date order. It is the outline of the piece, and it is where most claims die.",
        },
        {
          prompt: "Name three of the rules the assignment does not let you break.",
          answer: "No invented detail; no invented or composite people; give every figure its owner; quote instruments exactly or not at all; use the word rhyme when it applies; report the failure in the same voice you would announce a success; name the record you did not read; and do not publish a private individual's name with their address.",
        },
      ],
    },
    // <<< APPEND NEXT SECTION ABOVE THIS LINE >>>
  ],
};
