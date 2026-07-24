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
    // <<< APPEND NEXT SECTION ABOVE THIS LINE >>>
  ],
};
