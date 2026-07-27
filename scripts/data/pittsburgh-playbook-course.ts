// Authored "Pittsburgh: Where the Playbook Was Written" — a cited, high-school-and-up METRO-SPINE
// site course on Learn.WitUS (Culture & History). It is a sibling of the Indianapolis pilot
// (`indiana-avenue-course.ts`) and runs the same six-beat site template end to end, one beat per
// section: Then, Built, Powers, Now, Next, Write. See plans/37-green-book-route-courses.md §1 (the
// template) and plans/41-metro-paths.md §3b (the five-city expansion; Pittsburgh is city 1).
//
// Prerequisites this course names: `green-book-how-to-read-a-route` (the METHOD: read a listing,
// chain a route, research an address forward) and `indiana-avenue-a-district-and-what-replaced-it`
// (the six-beat template applied to one corridor, and the five instruments of clearance). This
// course applies the same method to Pittsburgh's Hill District, and adds one argument the
// Indianapolis course could not make about itself: it asks where the instruments came from.
//
// The argument (and its honest limits — the load-bearing part of this file):
//   * The Lower Hill District was cleared in the 1950s for the Civic Arena, displacing a large,
//     majority-Black neighbourhood (the Hill District of August Wilson's plays).
//   * The postwar "Pittsburgh Renaissance" was widely treated as a national MODEL of public-private
//     urban redevelopment. Roy Lubove's history of it is described as the analysis of elite-driven
//     renewal that "became the classic model for all such redevelopment projects."
//   * BUT the thesis is WEAKENED ON PURPOSE in lesson 12. "Other cities copied Pittsburgh" is
//     sourceable as "Pittsburgh was celebrated as the model," and is NOT sourceable, in what this
//     course could verify, as a documented city-to-city chain of copying (including to Indianapolis).
//     The instruments spread largely through state redevelopment laws and the federal Housing Act
//     of 1949, not only through Pittsburgh's example. The course states this plainly and keeps the
//     weaker, defensible claim: Pittsburgh assembled and showcased the public-private machine early
//     and visibly, so it is one of the reference cases, not the sole origin every later city copied.
//   * FIGURES VARY AND THE COURSE TEACHES THE DISAGREEMENT. The Lower Hill counts differ by source
//     and by what is counted: acreage (about 95), buildings (about 1,300), businesses (over 400, or
//     413), families (1,500 or 1,600), people (more than 8,000). One circulating source says
//     "thirteen thousand structures," which is a transcription slip for 1,300; the course flags it.
//   * A RARE DOUBLE ABSENCE: the Civic Arena that replaced the neighbourhood was itself demolished
//     between September 2011 and March 2012. The ground has been cleared twice.
//   * NO INVENTED STATISTIC, PERSON, QUOTATION, OR ADDRESS. The Hill's people are credited for what
//     they built (the Pittsburgh Courier, the Crawford Grill, Bethel AME, the jazz that fed bebop,
//     August Wilson), not only mourned for what was taken. The Hill is a living neighbourhood with a
//     planning process running on it right now, which is what beat 5 sends the learner to read.
//
// House rule: NO em-dashes or en-dashes in prose. Hyphens in compound words and URLs are fine.

import type { AuthoredCourse } from "./authored-course";

export const PITTSBURGH_PLAYBOOK_COURSE: AuthoredCourse = {
  title: "Pittsburgh: Where the Playbook Was Written",
  description:
    "A cited, high-school-and-up site course on Pittsburgh's Hill District: the majority-Black neighbourhood that Harlem Renaissance poet Claude McKay called the Crossroads of the World, home of the Pittsburgh Courier and the Crawford Grill and the Hill District of August Wilson's ten-play cycle, and the Lower Hill of it that was declared blighted and cleared in the 1950s for the Civic Arena. This is a sibling of the Indiana Avenue course, and it goes one step further: Indianapolis did not invent the instruments that emptied Indiana Avenue, and neither did Pittsburgh, but Pittsburgh assembled and showcased the public-private redevelopment machine early and visibly enough that the postwar Pittsburgh Renaissance became a national reference case. This course applies the prerequisite Green Book method to one neighbourhood, teaches the actual tools of the decision (the state redevelopment law, the blight designation, eminent domain, the public-private partnership, and the export of the model), tests the course's own headline claim against the record and reports where it weakens, looks at the arena as architecture and at the rare double absence left when that arena was itself demolished around 2011 to 2012, sends the learner to Allegheny County's own parcel records and to Pittsburgh's unfinished comprehensive plan, and ends in an August Wilson writing assignment. A 360 tour of the Lower Hill is planned and will be added to the Now section when it is captured.",
  lessons: [
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 1 · Then  (beat 1: US and state/local history)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "pgh-what-it-was",
      title: "1 · The Hill: what it was, and who it was for",
      section: "Section 1 · Then",
      body: `**Start with the two prerequisites.** This course assumes you have finished *The Green Book: How to Read a Route*, which taught a method (open a digitized edition, read a listing, chain listings into a route, research an address forward), and *Indiana Avenue: A District and What Replaced It*, which ran a six-beat template on one Black corridor and named five instruments of clearance. **This course applies the same method to a Pittsburgh neighbourhood, and then asks a question Indianapolis could not ask about itself: where did the instruments come from?**

**The place.** The Hill District rises just east of downtown Pittsburgh, above the point where the Allegheny and Monongahela rivers meet to form the Ohio. Over the first half of the twentieth century it became the commercial, cultural and spiritual centre of Black Pittsburgh, and a destination of the Great Migration you studied in the migration courses. The neighbourhood's Black population grew rapidly across those decades as migrants arrived from the rural South and immigrants arrived from abroad (Heinz History Center, n.d.-a).

**Who it was for, precisely, and this matters when you read the record.** The Hill was majority Black and also genuinely mixed. Alongside its Black majority it held Italian and Eastern European Jewish communities and others, with their own businesses, congregations and institutions layered into the same blocks (Heinz History Center, n.d.-a). A course that describes the Hill as only one community, in either direction, is describing something narrower than what stood there.

**What it was called.** During the Hill's heyday, roughly the 1930s through the 1950s, the Harlem Renaissance poet **Claude McKay called it "the Crossroads of the World"** (Heinz History Center, n.d.-a). Hold onto that phrase. It is a claim about reach: a neighbourhood in a mid-sized industrial city that saw itself as a node in a national and international Black network, not as an isolated local scene. The next lesson reads that reach directly, out of a travel guide and a newspaper.

**What it produced.** The Hill was a jazz foundry. The clubs along and around Wylie Avenue drew touring national artists and, more importantly for the argument of this course, **grew their own**: the neighbourhood is one of the documented cradles of the music that became bebop (Heinz History Center, n.d.-b). Lesson 3 credits the institutions by name, because **crediting what a place built is not decoration here. It is the correction to a way of telling this story that only inventories what was lost.**

**Why a district like this existed at all.** For the same reason Indiana Avenue existed. Under segregation, a Black neighbourhood that held its own businesses, papers, doctors, churches and stages was infrastructure for ordinary dignity: a place to meet every need without risking refusal in the world outside it. **The Hill was culture, and it was also a working local economy, and the second fact is the one urban renewal measured and moved against.**

**A warning about tone, which is a research instruction and not a courtesy.** The Hill District is a living neighbourhood. Its residents, its churches, its community development corporation and August Wilson's own restored childhood home are active right now. **Do not write about the Hill as a vanished golden age.** Write what people built, name them where the record names them, keep the vanishing for the parts you can document, and remember that a planning process is running on this ground today. Every framing choice in this course is checkable against a source, and so should yours be.

**Where this course is going.** Indianapolis showed you a corridor and five instruments. Pittsburgh shows you the same family of instruments, plus one thing Indianapolis could not: a city that ran the machine so early and so publicly that outsiders called its downtown rebuild a national model. **The title of this course is a claim, and lesson 12 tests it and weakens it. Read the whole way to that lesson before you decide what you think.**

## Sources
- Heinz History Center. (n.d.-a). *Crossroads of the world: How urban renewal changed the Hill*. Senator John Heinz History Center. https://www.heinzhistorycenter.org/blog/crossroads-of-the-world-how-urban-renewal-changed-the-hill/
- Heinz History Center. (n.d.-b). *Western Pennsylvania history: The Crawford Grill*. Senator John Heinz History Center. https://www.heinzhistorycenter.org/blog/western-pennsylvania-history-the-crawford-grill/`,
    },
    {
      slug: "pgh-green-book-and-courier",
      title: "2 · Reading the Hill out of the Green Book, and out of its own newspaper",
      section: "Section 1 · Then",
      body: `Now apply the method. You are going to read one neighbourhood out of two kinds of record, and then notice what each record does and does not prove.

**Record one: the Green Book.** The prerequisite method course taught you that *The Negro Motorist Green Book* listed businesses that would serve Black travelers, edition by edition, and that a listing pins a name to an address in a year rather than forever. Pittsburgh's Hill District appears in it. **The Heinz History Center reports that more than 30 Black-owned Hill District businesses were listed in the Green Book, and that only one of those buildings still stands today** (Heinz History Center, n.d.-a; Urban Redevelopment Authority of Pittsburgh, n.d.).

Read that second clause slowly, because it is the whole course in one sentence. **More than thirty listed businesses; one surviving building.** In the Indiana Avenue course the gap you measured was between the Green Book's coverage and the district's true inventory. Here there is a second gap on top of it, between what was listed and what still physically stands, and that second gap is what beats 2 and 3 explain.

**A method reminder you do not get to skip.** "More than 30 Green Book businesses" is a claim about a document. It is not a count of every Black-owned business on the Hill, which was far larger, and it is not evidence that only one business survived, only that one building did. **A building can stand while its business is gone, and a business can have thrived while never appearing in the guide at all.** Carry both cautions.

**Record two: the neighbourhood's own newspaper, which is the stronger record.** The Hill District was home to the **Pittsburgh Courier**, founded in 1907. Under the editor and publisher **Robert Lee Vann**, who took the paper over around 1910, the Courier grew into what is widely described as the largest and most influential Black newspaper in the United States, reaching a national circulation in the hundreds of thousands with editions and staff in cities across the country (BlackPast, n.d.).

**Why the Courier matters to a route course specifically.** The migration courses taught that the Black press pulled people north. The Courier was one of the engines of that pull: a Hill District institution whose reach ran down the very migration routes this series studies. **So the Hill is not only a place people traveled to. It is a place that told other people where to travel, and printed the argument for going.** A neighbourhood that produces the country's leading Black newspaper is not a backwater with good music. It is a capital.

**What reading these two records together gets you.**
1. **A listing is a lead, and a masthead is a fact.** The Green Book tells you a business existed in a year. The Courier, published continuously from the Hill for decades, is a dated, page-numbered institutional record you can read against microfilm.
2. **Coverage is not inventory.** Thirty-plus Green Book businesses sit inside a neighbourhood that produced a national newspaper. The distance between those two facts is the Green Book's coverage limit, exactly as it was on Indiana Avenue.
3. **Survival is not the same as significance.** One Green Book building stands. The Courier's influence, the Crawford Grill's role in bebop, and August Wilson's plays all outlived the buildings. **Beat 2 measures fabric; this lesson measures reach; do not confuse the two.**

**The trap, and you should fall into it once.** "Hill District" is a common American place name. Search a business name without the city and the state and you will collect entries from other Hills in other cities, exactly as an Indiana Avenue search collected a hotel in French Lick. **Always carry the city and the state.** Pittsburgh, Pennsylvania, Allegheny County. Write it down every time.

## Sources
- BlackPast. (n.d.). *Pittsburgh Courier (1907- )*. https://www.blackpast.org/african-american-history/pittsburgh-courier-1907/
- Heinz History Center. (n.d.-a). *Crossroads of the world: How urban renewal changed the Hill*. Senator John Heinz History Center. https://www.heinzhistorycenter.org/blog/crossroads-of-the-world-how-urban-renewal-changed-the-hill/
- Urban Redevelopment Authority of Pittsburgh. (n.d.). *Lower Hill*. https://www.ura.org/pages/lower-hill`,
      recallContent: [
        {
          prompt: "Which two prerequisite courses does this one build on, and what does each teach?",
          answer: "The Green Book: How to Read a Route (the method: read a listing, chain a route, research an address forward) and Indiana Avenue: A District and What Replaced It (the six-beat site template and five instruments of clearance).",
        },
        {
          prompt: "Where is the Hill District, and what nickname did Claude McKay give it?",
          answer: "Just east of downtown Pittsburgh, above the confluence of the Allegheny and Monongahela rivers. The Harlem Renaissance poet Claude McKay called it the Crossroads of the World during its 1930s to 1950s heyday.",
        },
        {
          prompt: "Why is it wrong to describe the Hill as only one community?",
          answer: "It was majority Black and also genuinely mixed, holding Italian and Eastern European Jewish communities and others in the same blocks, each with its own businesses and institutions.",
        },
        {
          prompt: "What is the one extra question this course asks that the Indiana Avenue course could not ask about itself?",
          answer: "Where the instruments of clearance came from. Pittsburgh ran the public-private redevelopment machine early and publicly enough that its downtown rebuild was called a national model, which is the claim lesson 12 tests.",
        },
      ],
    },
    {
      slug: "pgh-what-it-built",
      title: "3 · What the Hill built, named",
      section: "Section 1 · Then",
      body: `Three institutions stood on this ground, each leaving a different kind of record, and naming them is the correction to a story usually told only as loss.

**The Crawford Grill.** The Grill was the epicentre of jazz in the Hill District from the 1930s through the 1950s. It was founded in 1930 by **William "Gus" Greenlee**, a Hill District figure who ran the numbers game and who also owned the **Pittsburgh Crawfords**, one of the great teams of Negro League baseball (Heinz History Center, n.d.-b). The Grill drew national artists to its stage, and the jam sessions in the Hill are credited among the settings where the style that became **bebop** took shape (Heinz History Center, n.d.-b). Musicians who came up in or played the Hill include the Pittsburgh-raised singer **Billy Eckstine** and the Hill District native tenor saxophonist **Stanley Turrentine** (Heinz History Center, n.d.-b).

Notice what that one paragraph contains: a baseball team, a music that changed American culture, and an economy, all owned and run by Black Pittsburghers. **A club is not only nightlife. In a segregated city it is a stage a community controls**, and control is the thing urban renewal took.

**Bethel African Methodist Episcopal Church.** Bethel AME, whose Lower Hill building dated to 1908, was one of the anchor institutions of the neighbourhood the Civic Arena replaced (Hill District Digital History, n.d.). A church is a particular kind of evidence, because a congregation survives the loss of its building: **Bethel AME is a living body that lost its home to the clearance, and its congregation has publicly sought reparations for what was taken** (Heinz History Center, n.d.-a). Keep that fact for beat 5. The descendants of the displaced are not a historical abstraction. They are named parties in a present argument.

**The Pittsburgh Courier**, from lesson 2, is the third, and it is the one whose reach was national. Together the three make the point: **the Hill built a stage, a sanctuary and a printing press, which is to say it built a culture, a faith and a voice.** None of the three needed the arena that replaced part of the neighbourhood, and none of them was preserved by it.

**Here is a live disagreement to keep rather than smooth.** You will read Pittsburgh described both as a jazz capital whose importance is routinely overlooked and as a city whose Hill District scene was second to none. **Claims of "the greatest" or "the birthplace" are arguments, not measurements**, and this course does not rank cities. What it asserts is narrower and checkable: the Crawford Grill was a documented centre of the Hill's jazz life, national figures played it, and local figures came out of the neighbourhood. Where a source reaches for a superlative, quote the source and let the superlative belong to it.

**Why this lesson exists before the clearance lessons.** Because the order matters. If you learn what was taken before you learn what was built, you will write an elegy. **Learn what was built first, and you will write a report about a functioning place that a set of decisions dismantled**, which is both more accurate and harder to wave away. Section 2 begins the dismantling. Hold these three names through it.

## Sources
- BlackPast. (n.d.). *Pittsburgh Courier (1907- )*. https://www.blackpast.org/african-american-history/pittsburgh-courier-1907/
- Heinz History Center. (n.d.-a). *Crossroads of the world: How urban renewal changed the Hill*. Senator John Heinz History Center. https://www.heinzhistorycenter.org/blog/crossroads-of-the-world-how-urban-renewal-changed-the-hill/
- Heinz History Center. (n.d.-b). *Western Pennsylvania history: The Crawford Grill*. Senator John Heinz History Center. https://www.heinzhistorycenter.org/blog/western-pennsylvania-history-the-crawford-grill/
- Hill District Digital History. (n.d.). *The Civic Arena: A mid-twentieth century transformation of the Hill District*. https://hillhistory.org/items/show/75`,
      recallContent: [
        {
          prompt: "How many Hill District businesses were listed in the Green Book, and how many of those buildings survive?",
          answer: "The Heinz History Center reports more than 30 Black-owned Hill District businesses were listed in the Green Book, and only one of those buildings still stands today.",
        },
        {
          prompt: "Why is 'more than 30 Green Book businesses, one surviving building' a two-gap statement?",
          answer: "There is a gap between what the Green Book listed and the district's true inventory, and a second gap on top of it between what was listed and what still physically stands.",
        },
        {
          prompt: "What was the Pittsburgh Courier, and why does it matter to a route course?",
          answer: "A Hill District newspaper founded in 1907 that under Robert Lee Vann became the largest and most influential Black newspaper in the country. It was one of the engines that pulled Great Migration travelers north, so the Hill both received travelers and told others where to travel.",
        },
        {
          prompt: "What is the difference between measuring fabric and measuring reach here?",
          answer: "Fabric is the buildings that still stand, which beat 2 measures. Reach is influence: the Courier, the Crawford Grill's role in bebop and August Wilson's plays all outlived the buildings. A survey of fabric misses reach entirely.",
        },
      ],
    },
    {
      slug: "pgh-quiz-then",
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
            prompt: "Where does the Hill District sit relative to downtown Pittsburgh?",
            options: [
              "On an island in the middle of the Ohio River",
              "West of the Golden Triangle, across the Monongahela",
              "Just east of downtown, above the confluence of the Allegheny and Monongahela rivers",
              "Fifteen miles out, in a separate incorporated township beyond the city line",
            ],
            correctIndex: 2,
            explanation: "The Hill rises just east of downtown, above the point where the Allegheny and Monongahela meet to form the Ohio.",
            sourceLessonSlug: "pgh-what-it-was",
          },
          {
            prompt: "Who called the Hill District 'the Crossroads of the World,' and when?",
            options: [
              "The Harlem Renaissance poet Claude McKay, during the Hill's heyday",
              "Mayor David Lawrence, in a speech dedicating the new Civic Arena downtown",
              "The Urban Redevelopment Authority, in its official Lower Hill planning report",
              "The playwright August Wilson, in the opening monologue of one of his plays",
            ],
            correctIndex: 0,
            explanation: "The phrase is a claim about the Hill's reach as a node in a national and international Black network.",
            sourceLessonSlug: "pgh-what-it-was",
          },
          {
            prompt: "The Hill District's population in its heyday is best described as:",
            options: [
              "Entirely Black and homogeneous, closed to every other community",
              "Majority white, with only a small and shrinking Black minority",
              "Split evenly between Black and Italian residents, and no others",
              "Majority Black and genuinely mixed, with Italian and Jewish groups",
            ],
            correctIndex: 3,
            explanation: "Describing the Hill as only one community, in either direction, describes something narrower than what stood there.",
            sourceLessonSlug: "pgh-what-it-was",
          },
          {
            prompt: "How many Hill District businesses were listed in the Green Book, and how many of those buildings survive today?",
            options: [
              "Exactly 30 listed, and all of them still stand today",
              "More than 30 listed, and only one building still stands",
              "Over 400 listed, and about half of them still stand today",
              "None were ever listed in any edition of the guide",
            ],
            correctIndex: 1,
            explanation: "The Heinz History Center reports more than 30 listed businesses and one surviving building, which is a two-gap statement about coverage and about survival.",
            sourceLessonSlug: "pgh-green-book-and-courier",
          },
          {
            prompt: "'More than 30 Green Book businesses' is a claim about what?",
            options: [
              "Every Black-owned business that ever operated on the Hill",
              "The number of Hill District buildings that survive today",
              "A record, not an inventory; the true count was far larger",
              "The number of jazz and music clubs on the Hill alone",
            ],
            correctIndex: 2,
            explanation: "Coverage is not inventory. The Green Book recorded what was reported to its network, never everything that existed.",
            sourceLessonSlug: "pgh-green-book-and-courier",
          },
          {
            prompt: "What was the Pittsburgh Courier?",
            options: [
              "A Hill District paper of 1907, later the country's largest Black weekly",
              "The official printed bulletin of the Pittsburgh city planning commission",
              "A jazz record label operating out of the Crawford Grill in the 1930s",
              "A short-lived neighbourhood flyer that folded after just a few years",
            ],
            correctIndex: 0,
            explanation: "Its national reach ran down the migration routes this series studies, so the Hill both received travelers and told others where to travel.",
            sourceLessonSlug: "pgh-green-book-and-courier",
          },
          {
            prompt: "Why does the Pittsburgh Courier matter specifically to a route and migration course?",
            options: [
              "Because it printed and distributed the Green Book each year",
              "Because it owned and operated the Crawford Grill nightclub",
              "Because it was written entirely in a local Pittsburgh dialect",
              "Because it helped drive the Great Migration's northward pull",
            ],
            correctIndex: 3,
            explanation: "A neighbourhood that produces the country's leading Black newspaper is a capital, not a backwater with good music.",
            sourceLessonSlug: "pgh-green-book-and-courier",
          },
          {
            prompt: "When searching for a Hill District business name, why must you carry the city and state?",
            options: [
              "Because the Green Book deliberately omitted all street numbers and cross streets",
              "Because 'Hill District' is a common name and searching it finds other cities",
              "Because Pennsylvania sealed its old historical records to all researchers",
              "Because the Courier kept changing the business names between its editions",
            ],
            correctIndex: 1,
            explanation: "It is the same trap as the Thurman hotel in French Lick from the Indiana Avenue course. Always carry Pittsburgh, Pennsylvania, Allegheny County.",
            sourceLessonSlug: "pgh-green-book-and-courier",
          },
          {
            prompt: "Who founded the Crawford Grill in 1930?",
            options: [
              "The Pittsburgh Courier publisher and editor Robert Lee Vann",
              "The financier Richard King Mellon, head of the Allegheny Conference",
              "William 'Gus' Greenlee, who ran numbers and owned the Crawfords",
              "The father of the Hill District playwright August Wilson himself",
            ],
            correctIndex: 2,
            explanation: "A single figure connected a jazz club, a Negro League baseball team and a neighbourhood economy, all Black-owned.",
            sourceLessonSlug: "pgh-what-it-built",
          },
          {
            prompt: "The Hill District's jam sessions are credited among the settings where which musical style took shape?",
            options: ["Bebop", "Ragtime", "Disco", "Delta blues"],
            correctIndex: 0,
            explanation: "The Crawford Grill and the Hill's jazz life are documented among the cradles of bebop.",
            sourceLessonSlug: "pgh-what-it-built",
          },
          {
            prompt: "Why is Bethel AME Church a distinctive kind of evidence?",
            options: [
              "Because its original Lower Hill building still stands unchanged today",
              "Because it was never actually located anywhere in the Lower Hill",
              "Because it kept no written records of its own congregation at all",
              "Because a congregation outlives its building, still seeking reparations",
            ],
            correctIndex: 3,
            explanation: "The descendants of the displaced are named parties in a present argument, which is why the church matters for beat 5.",
            sourceLessonSlug: "pgh-what-it-built",
          },
          {
            prompt: "Why does this course credit what the Hill built before describing what was taken?",
            options: [
              "To make the course longer",
              "Because learning what was built first produces a report, not an elegy",
              "Because the losses to the neighbourhood are entirely undocumented",
              "Because all of the neighbourhood's original buildings still survive",
            ],
            correctIndex: 1,
            explanation: "Order matters. Loss-first writing becomes elegy; built-first writing stays accurate and is harder to wave away.",
            sourceLessonSlug: "pgh-what-it-built",
          },
          {
            prompt: "The three named institutions in lesson 3 (Crawford Grill, Bethel AME, Pittsburgh Courier) together show that the Hill built:",
            options: [
              "Only a set of paid commercial entertainment venues and clubs",
              "A set of old buildings that the Civic Arena later preserved",
              "A stage, a sanctuary and a press: a culture, a faith and a voice",
              "Institutions that all depended on city government tax funding",
            ],
            correctIndex: 2,
            explanation: "None of the three needed the arena that replaced part of the neighbourhood, and none was preserved by it.",
            sourceLessonSlug: "pgh-what-it-built",
          },
          {
            prompt: "The title 'Pittsburgh: Where the Playbook Was Written' is, in this course:",
            options: [
              "A claim the course tests and then weakens in lesson 12",
              "A settled fact, stated plainly at the very start of the course",
              "A direct quotation taken from the poet Claude McKay",
              "The official name of Pittsburgh's current comprehensive plan",
            ],
            correctIndex: 0,
            explanation: "The course asks the learner to read all the way to the test lesson before deciding what the title can honestly claim.",
            sourceLessonSlug: "pgh-what-it-was",
          },
          {
            prompt: "Why should you not write about the Hill District as a 'vanished golden age'?",
            options: [
              "Because the entire neighbourhood no longer exists in any form whatsoever",
              "Because every one of its historical records was long ago destroyed by fire",
              "Because its descendants have all left Pittsburgh for the surrounding suburbs",
              "Because it is a living neighbourhood with residents, churches and a live plan",
            ],
            correctIndex: 3,
            explanation: "Keep the vanishing for the parts you can document, and remember a planning process is on this ground today.",
            sourceLessonSlug: "pgh-what-it-was",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 2 · Built  (beat 2: architecture and building typology)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "pgh-built-what-replaced",
      title: "5 · What replaced the neighbourhood",
      section: "Section 2 · Built",
      body: `Beat 2 of the site template asks one question: why does it look like that? For the Lower Hill the honest first answer is unusual. **Most of it looks like nothing, because most of what was promised for it was never built.**

**The plan that justified the clearance.** When about 95 acres of the Lower Hill were cleared beginning in 1955, the ground was not being emptied for an arena alone. The published redevelopment plan called for a cultural centre: an opera house, a playhouse, an art gallery, an upscale hotel and new apartment buildings, a showpiece for a modernised downtown. The clearance was carried on roughly 17 million dollars in federal grants (The Field, 2021). **A public benefit on that scale is what a taking of 95 acres is supposed to buy.**

**What actually stood there a decade later.** By 1966, the cleared 95 acres held a new public auditorium that became the Civic Arena, one apartment building, and one apartment and hotel complex. **The opera house, the playhouse and the art gallery were never built.** Large portions of the land were never developed at all and became surface parking (The Field, 2021; Urban Redevelopment Authority of Pittsburgh, n.d.).

Put those two paragraphs side by side, because the distance between them is the lesson. **A neighbourhood of about 1,300 buildings was removed to build a cultural centre, and what replaced it was one arena and a great deal of parking.** The benefit that justified the taking was substantially not delivered, and much of the ground simply sat.

**The land-use move has a name, and naming it is the transferable skill.** A dense, fine-grained fabric, roughly 1,300 buildings and more than 400 businesses interleaved with homes, churches and clubs on an ordinary street grid, was replaced by a few enormous single-use parcels: one domed building surrounded by asphalt, with the old streets erased under it. Turning many small lots and through-streets into a few very large parcels is called **superblocking**, and it is the signature land-use move of postwar urban renewal. Once you can name it, you will recognise it in any renewal-era city.

**Why the parking lots are evidence, and of what.** A parking lot is not evidence about anybody's motive. It is evidence that there is no building. But on the Lower Hill the surface lots are also evidence about the plan: they are the physical footprint of promises made to justify a clearance and then not kept. **When beat 5 sends you to the redevelopment happening on this ground right now, those same lots are the thing being fought over**, which is why a land-use fact from 1966 is still a live civic fact in your lifetime.

**A caution before Section 3.** Nothing in this lesson yet tells you who decided any of it, or under what power. "The neighbourhood was cleared" is a description, not an instrument. **Section 3 names the bodies and the statutes.** For now, hold the shape of the change: from a working neighbourhood to a single building and a field of parking, on ground where a cultural centre was promised.

## Sources
- The Field. (2021, January 26). *Reviving the Hill, one of the oldest residential neighborhoods in the Steel City*. American Society of Landscape Architects. https://thefield.asla.org/2021/01/26/reviving-the-hill-one-of-the-oldest-residential-neighborhoods-in-the-steel-city/
- Urban Redevelopment Authority of Pittsburgh. (n.d.). *Lower Hill*. https://www.ura.org/pages/lower-hill`,
      recallContent: [
        {
          prompt: "Who founded the Crawford Grill, and what else did he own?",
          answer: "William Gus Greenlee, in 1930. He ran the numbers game and owned the Pittsburgh Crawfords, a leading Negro League baseball team.",
        },
        {
          prompt: "Why is a club described here as more than nightlife?",
          answer: "In a segregated city it was a stage a Black community owned and controlled, and control was what urban renewal took. The Hill's jam sessions are also credited among the settings where bebop took shape.",
        },
        {
          prompt: "What kind of evidence is Bethel AME Church, and why does it matter for beat 5?",
          answer: "A congregation outlives its building. Bethel AME lost its 1908 Lower Hill building to the clearance and its congregation has publicly sought reparations, so the displaced are named parties in a present argument, not a historical abstraction.",
        },
        {
          prompt: "How should you handle a source that calls Pittsburgh 'the greatest' jazz city?",
          answer: "Treat superlatives as arguments, not measurements. Quote the source and let the claim belong to it. The checkable facts are narrower: the Crawford Grill was a documented centre of the Hill's jazz life.",
        },
      ],
    },
    {
      slug: "pgh-built-the-arena",
      title: "6 · The arena as architecture: the dome that replaced the blocks",
      section: "Section 2 · Built",
      body: `One building stood on the cleared ground, and for a while it was one of the most photographed structures in America. Reading it is a lesson in treating architecture as an argument.

**What it was.** The **Civic Arena** opened on **September 17, 1961**, a public auditorium designed by the Pittsburgh firm **Mitchell and Ritchey** at a cost of about **22 million dollars** (Civic Arena, n.d.). Its defining feature was a **stainless-steel dome about 415 feet across**, built as a **retractable roof**: the dome was divided into eight sections, six of which could fold back under the other two, opening the building to the sky in about two and a half minutes. It was the **first retractable roof of its kind in the world**, carried on a single cantilevered arch and clad in nearly 3,000 tons of Pittsburgh steel (Civic Arena, n.d.; Hill District Digital History, n.d.).

**Read the building as a statement, because it was built as one.** A gleaming steel dome that opens to the sky, made of local steel, set on ground cleared of an old neighbourhood, is a civic argument in physical form: **the future, engineered and singular, standing where the past was removed.** The Pittsburgh steel is not incidental. A steel city built a monument out of the thing it made, and set it down on the Hill.

**Who it was for, and who it was not for.** The arena was built to anchor the promised cultural centre, and from 1967 it became the home of the Pittsburgh Penguins hockey team (Civic Arena, n.d.). Notice the audience. **The neighbourhood that was removed was largely Black and working-class; the arena that replaced it served a regional, ticket-buying, largely suburban public.** That is not a hidden fact requiring interpretation. It is the ordinary logic of the superblock from the last lesson, stated in who walked through the doors.

**The retractable roof, and a caution about superlatives.** The roof was a genuine engineering landmark, and it was also, in practice, opened only rarely, because opening it during events created problems the building never fully solved (Civic Arena, n.d.). **A first is not the same as a success, and this course does not rank buildings.** What is checkable is narrower: it was the first retractable roof of its kind, it was an engineering achievement, and it was used far less than its design promised. Where a source reaches for "marvel," quote the source and let the marvel belong to it (Heinz History Center, n.d.-a).

**The nickname, and why it matters.** Pittsburghers called the domed building **the Igloo**, and it was renamed **Mellon Arena** in 1999 when a financial company bought the naming rights (Civic Arena, n.d.). Keep the Mellon name in view. The next lessons will show you that the Mellon fortune sits near the centre of the machine that cleared the Hill in the first place, so a naming-rights deal in 1999 is a small echo of a much larger fact from the 1940s.

**What beat 2 gets you here.** In the Indiana Avenue course, beat 2 found a surviving flatiron building whose triangular shape preserved an 1821 street plan. Here beat 2 finds the opposite: **a single building that erased a street plan**, and whose own architecture announced that erasure as progress. Both are beat 2 working correctly. The building is the evidence, whether it survived or replaced.

## Sources
- Civic Arena (Pittsburgh). (n.d.). In *Wikipedia*. Retrieved July 2026, from https://en.wikipedia.org/wiki/Civic_Arena_(Pittsburgh)
- Heinz History Center. (n.d.-a). *Crossroads of the world: How urban renewal changed the Hill*. Senator John Heinz History Center. https://www.heinzhistorycenter.org/blog/crossroads-of-the-world-how-urban-renewal-changed-the-hill/
- Hill District Digital History. (n.d.). *The Civic Arena: A mid-twentieth century transformation of the Hill District*. https://hillhistory.org/items/show/75`,
      recallContent: [
        {
          prompt: "What did the published plan for the cleared Lower Hill call for, and how much of it was built?",
          answer: "A cultural centre with an opera house, playhouse, art gallery, upscale hotel and apartments. By 1966 only the Civic Arena, one apartment building and one apartment and hotel complex stood; the opera house, playhouse and art gallery were never built, and much of the land became surface parking.",
        },
        {
          prompt: "What is superblocking?",
          answer: "The land-use move of replacing many small lots and through-streets with a few very large single-use parcels, erasing the old street grid. It is the signature move of postwar urban renewal.",
        },
        {
          prompt: "Why are the Lower Hill's surface parking lots evidence about the plan, not just about the present?",
          answer: "They are the physical footprint of the cultural centre that was promised to justify the clearance and then largely not built, and they are the same ground being redeveloped now.",
        },
        {
          prompt: "What does the 'what replaced the neighbourhood' lesson deliberately NOT yet tell you?",
          answer: "Who decided, and under what legal power. That is Section 3. 'The neighbourhood was cleared' is a description, not an instrument.",
        },
      ],
    },
    {
      slug: "pgh-built-what-survives",
      title: "7 · What survived: the Hill above the arena",
      section: "Section 2 · Built",
      body: `The Lower Hill was cleared, but the Hill District did not end at the arena's edge. This lesson is about what stands, and about the limits of the tool that is supposed to protect it.

**The distinction most retellings blur.** "The Hill District" and "the Lower Hill" are not the same thing. The clearance took the **Lower Hill**, the roughly 95 acres closest to downtown. The **Middle Hill and Upper Hill**, further up the slope, were not cleared in the same way and remain a living residential neighbourhood today (Heinz History Center, n.d.-a; Urban Redevelopment Authority of Pittsburgh, n.d.). **A course that says "the Hill was destroyed" is wrong on the geography and unfair to the people who still live there.** What was destroyed was the Lower Hill. What survived is most of the neighbourhood, changed by the loss of its downtown edge.

**What survived, named, because naming it is the correction to a loss-only story.**

**1. The people and their institutions.** The playwright **August Wilson** was born in the Hill in 1945 and lived the first years of his life in a two-room apartment at **1727 Bedford Avenue** in the Middle Hill. **Nine of the ten plays in his American Century Cycle are set in the Hill District**, which is to say the neighbourhood became the setting for one of the central bodies of work in American theatre (August Wilson House, n.d.). That childhood home has been restored as the **August Wilson House**, a nonprofit arts centre run by the Daisy Wilson Artist Community, named for Wilson's mother (August Wilson House, n.d.). A restored house that runs programmes today is not a relic. It is the neighbourhood still speaking for itself.

**2. The one Green Book building.** Section 1 established that more than 30 Hill District businesses were listed in the Green Book and that only one of those buildings still stands (Heinz History Center, n.d.-a). That single survivor is the fabric equivalent of the Walker Building on Indiana Avenue: **a lone survivor is evidence about itself, not proof that the district endures.**

**3. Bethel AME's congregation.** From lesson 3: Bethel AME lost its Lower Hill building to the clearance, but the congregation is a living body that has publicly sought reparations (Heinz History Center, n.d.-a). A congregation outlives its building.

**Now the part everyone gets wrong: what a historic designation actually does.**

| Designation | Who lists it | What it does | What it does NOT do |
|---|---|---|---|
| **National Register of Historic Places** | The Keeper of the National Register, on a state nomination | Recognition; triggers federal review when there is federal money or a federal permit; opens some tax credits | **It does not stop a private or public owner from demolishing the building.** |
| **National Historic Landmark** | The Secretary of the Interior | The highest federal recognition, a higher significance bar | Still not, by itself, a demolition veto |
| **Local historic district or landmark** | A local commission under a city ordinance | This is the one that usually **regulates**: certificates, review of exterior changes and demolition | Only as strong as the ordinance and the commission enforcing it |

**The rule to carry out of Section 2:** federal listing is mostly recognition plus leverage when federal money is involved, and **local designation is where a demolition can actually be stopped**, and only then when a commission is willing to stop it.

**A preview that Section 3 will need.** When the Civic Arena itself faced demolition around 2010, a campaign tried to save it by seeking historic status, and it failed: the reviewing bodies declined to list it, and the courts declined to stop the demolition (Civic Arena, n.d.). Hold that. **The designation tool that could not save the neighbourhood also could not save the building that replaced it.** Section 3 turns the arena's own removal into the rare double absence this course was built around.

## Sources
- August Wilson House. (n.d.). *Project overview*. Daisy Wilson Artist Community. https://augustwilsonhouse.org/project-overview.html
- Civic Arena (Pittsburgh). (n.d.). In *Wikipedia*. Retrieved July 2026, from https://en.wikipedia.org/wiki/Civic_Arena_(Pittsburgh)
- Heinz History Center. (n.d.-a). *Crossroads of the world: How urban renewal changed the Hill*. Senator John Heinz History Center. https://www.heinzhistorycenter.org/blog/crossroads-of-the-world-how-urban-renewal-changed-the-hill/
- Urban Redevelopment Authority of Pittsburgh. (n.d.). *Lower Hill*. https://www.ura.org/pages/lower-hill`,
      recallContent: [
        {
          prompt: "Give the Civic Arena's opening date, architect, cost and defining feature.",
          answer: "Opened September 17, 1961; designed by the Pittsburgh firm Mitchell and Ritchey; about 22 million dollars; a stainless-steel dome about 415 feet across with the first retractable roof of its kind in the world, clad in nearly 3,000 tons of Pittsburgh steel.",
        },
        {
          prompt: "How does this course read the arena 'as a statement'?",
          answer: "A gleaming, engineered, singular steel dome that opens to the sky, set on ground cleared of an old neighbourhood, argues that the future replaced the past as progress. A steel city built a monument from its own product on the Hill.",
        },
        {
          prompt: "How should you handle a source that calls the arena a 'marvel'?",
          answer: "Treat the superlative as the source's claim, not a measurement. The checkable facts are narrower: first retractable roof of its kind, an engineering achievement, and opened only rarely in practice.",
        },
        {
          prompt: "What is the contrast with beat 2 in the Indiana Avenue course?",
          answer: "There beat 2 found a surviving flatiron whose shape preserved an 1821 street plan; here beat 2 finds a single building that erased a street plan and announced the erasure as progress. Both are beat 2 done correctly.",
        },
      ],
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 3 · Powers  (beat 3: the instruments. the load-bearing section of this course)
    //
    // This section carries the argument the whole course was built to make. Where the Indiana
    // Avenue course named five instruments and stopped, this one adds a sixth kind of claim: the
    // EXPORT of the model. Lesson 11 states the "playbook" thesis in its strongest sourceable form,
    // and lesson 12 tests it against a chronology and a mechanism and WEAKENS it on purpose, then
    // closes on the rare double absence (the arena that replaced the neighbourhood was itself
    // demolished, September 2011 to March 2012). The verdict is reported, not hidden.
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "pgh-powers-law-and-authority",
      title: "8 · Instrument one: the law, and the authority it creates",
      section: "Section 3 · Powers",
      body: `**This is the section the whole course exists for.** Everything before it establishes what the Hill was and what replaced it. Everything after it asks what happens next. This section teaches the tools, because **a neighbourhood does not vanish, it is removed by somebody with an instrument.** Learn the instruments and you can read any American city.

**An instrument, in this course, is a specific legal power, exercised by a specific body, under a specific statute, leaving a specific document.** That last clause is what turns history into research: if a power was exercised, a record exists, and the record has a name. This is the same definition the Indiana Avenue course used, and it is the same all the way down.

**Instrument one is the enabling law, and the authority it brings into being.** Before a government can clear an area, somebody has to write the power into law and create a body to hold it. **Pittsburgh's distinctive contribution is that it wrote that law and built that body early, and visibly, and this is the seed of the claim in this course's title.**

**The law.** The **Pennsylvania Urban Redevelopment Law**, the Act of May 24, 1945, authorised municipalities to create public bodies called **Redevelopment Authorities** to eliminate areas found to be "blighted" and to plan and contract with private, corporate or governmental redevelopers to rebuild them (Urban Redevelopment Authority of Pittsburgh, n.d.-a). Read what that sentence does: **it creates a new kind of legal person with powers no ordinary city department has, to designate, acquire, clear, and hand cleared land to a developer.**

**The body.** The **Urban Redevelopment Authority of Pittsburgh (URA)** was incorporated on **November 18, 1946**, described by the URA itself as "one of the first redevelopment authorities in Pennsylvania" (Urban Redevelopment Authority of Pittsburgh, n.d.-a). **Note the exact claim, and do not inflate it.** The URA's own history says "one of the first in Pennsylvania," not "the first in the nation." When you repeat an institution's claim about itself, repeat the version the institution actually makes.

**The partnership that ran it.** The URA did not operate alone. The **Allegheny Conference on Community Development**, an organisation of Pittsburgh business leaders formed in **1944** and associated above all with the financier **Richard King Mellon**, worked with city hall under Mayor **David L. Lawrence**, who was elected in **1945**, to direct the city's postwar rebuilding (Neumann, 2016). Business elites and elected officials, pulling together: **that pairing is the machine, and lesson 10 takes it apart.**

**The first thing the machine built.** The URA's first major project was **Gateway Center**, described by the URA as "the first privately financed downtown redevelopment project in the United States" (Urban Redevelopment Authority of Pittsburgh, n.d.-a). Hold onto Gateway Center. It is downtown, not the Hill, and it is the project outsiders came to admire. **The Lower Hill was the same machine's second and larger job, and almost nobody came to admire that.**

**The transferable skill, stated plainly.** Every clearance in America has an enabling law and an authority. When you research one, find two things first:
1. **The statute:** its year and its name. In Indiana it was the General Assembly's blight machinery from 1945. In Pennsylvania it was the Urban Redevelopment Law of 1945. **Two states, the same year, which is a clue lesson 12 will need.**
2. **The authority:** its name and its incorporation date. In Indianapolis it was the Redevelopment Commission. In Pittsburgh it was the URA, incorporated November 18, 1946. **A body that can be named can be researched: it kept minutes, it holds project files, and both are public.**

**One honest note to carry into the rest of the section.** Pittsburgh assembled this apparatus **before** the federal government built the national urban-renewal program, the **Housing Act of 1949**, which the next lessons will show was the machine that actually spread clearance across the country. **That earliness is real, and it is the strongest fact behind this course's title. It is also not the same as "every other city copied Pittsburgh," and keeping those two apart is the work of lesson 12.**

## Sources
- Neumann, T. (2016, February 1). *The "spiritual capital" of the Rust Belt: Pittsburgh and the postindustrial transformation of North Atlantic cities*. Global Urban History. https://globalurbanhistory.com/2016/02/01/the-spiritual-capital-of-the-rust-belt-pittsburgh-and-the-postindustrial-transformation-of-north-atlantic-cities/
- Urban Redevelopment Authority of Pittsburgh. (n.d.-a). *History of the Urban Redevelopment Authority of Pittsburgh (URA)*. https://www.ura.org/pages/history-of-the-urban-redevelopment-authority-of-pittsburgh-ura`,
      recallContent: [
        {
          prompt: "What is the difference between 'the Hill District' and 'the Lower Hill', and why does saying 'the Hill was destroyed' get it wrong?",
          answer: "The Lower Hill is the roughly 95 acres closest to downtown that were cleared. The Middle and Upper Hill were not cleared the same way and remain a living neighbourhood, so 'the Hill was destroyed' is wrong on the geography and unfair to the people who still live there.",
        },
        {
          prompt: "What is the August Wilson House, and why is it evidence of survival rather than loss?",
          answer: "August Wilson's restored childhood home at 1727 Bedford Avenue in the Middle Hill, now a nonprofit arts centre run by the Daisy Wilson Artist Community. Nine of his ten Century Cycle plays are set in the Hill. A house that runs programmes today is the neighbourhood still speaking for itself.",
        },
        {
          prompt: "Does listing a building on the National Register stop its owner from demolishing it?",
          answer: "No. Federal listing is recognition plus review leverage when federal money or a permit is involved, plus some tax credits. Local designation under a city ordinance is what normally regulates demolition, and only when a commission enforces it.",
        },
        {
          prompt: "What happened when preservationists tried to save the Civic Arena itself around 2010?",
          answer: "It failed. The reviewing bodies declined to grant it historic status and the courts declined to stop the demolition. The designation tool that could not save the neighbourhood could not save the building that replaced it either.",
        },
      ],
    },
    {
      slug: "pgh-powers-designation",
      title: "9 · Instrument two: the blight designation and the redevelopment area",
      section: "Section 3 · Powers",
      body: `The law from lesson 8 gives the URA a power it cannot use until it says a magic word. **Instrument two is the designation, and the word is "blighted."**

**How it ran on the Lower Hill.** In the early 1950s the Lower Hill was studied for urban renewal, and as part of the City of Pittsburgh's renewal effort the neighbourhood was **declared blighted** and drawn into a **redevelopment area**. In **September 1955**, the federal government approved the Lower Hill redevelopment plan, slating roughly **95 acres** of homes and businesses for clearance, and **clearance began in 1955** (Heinz History Center, n.d.-a; Urban Redevelopment Authority of Pittsburgh, n.d.-b). A city councilman of the period described the area as "one of the most outstanding examples in Pittsburgh of neighborhood deterioration" (Heinz History Center, n.d.-a).

**Read that quotation as evidence about the speaker, not about the Hill.** The people in lessons 1 through 3 built a jazz foundry, the country's leading Black newspaper and a set of anchor churches on this ground. **"Neighborhood deterioration" is the language a designation needs in order to work.** It is the sound an instrument makes when it is being justified.

**Now the two things about the word that transfer to any city.**

1. **"Blighted" is a legal conclusion, not a description.** A body reaches it, on a record, against criteria written into a statute. Once reached, it unlocks powers that do not otherwise exist: acquisition, clearance, and resale to a redeveloper. **Before the designation the powers do not exist; after it, they do.** That is why the designation, and not the demolition, is where you start.
2. **The criteria are usually physical**, things like building age, overcrowding, plumbing and fire risk, **and those measures correlate strongly with where a city has refused to lend, insure or invest.** A neighbourhood denied mortgage capital for decades will measure as deteriorated, and the measurement then becomes the justification. **The finding and its cause can be the same policy at two different dates.** This is the identical circularity the Indiana Avenue course found; it is not a Pittsburgh peculiarity, it is how the instrument works everywhere.

**A disagreement this course teaches instead of smoothing.** The Lower Hill counts vary by source and by what is being counted, and an honest course reports the range rather than picking the roundest number:

| What is counted | Figure you will see |
|---|---|
| Acreage cleared | about 95 acres |
| Buildings | about 1,300 |
| Businesses | over 400, or specifically 413 |
| Families | 1,500 or 1,600 |
| People displaced | more than 8,000 |

The Heinz History Center gives "over 8,000 residents were displaced, as well as over 400 businesses" (Heinz History Center, n.d.-a). A landscape-architecture account gives "1,300 buildings, 413 businesses, and 1,600 families (more than 8,000 people)" (The Field, 2021). **These do not contradict each other; they count different things.** Carry the source with the number every time, the way the Indiana Avenue course made you attribute the 17,000 figure rather than adopt it.

**And a specific caution about magnitude.** You will sometimes see the buildings figure rendered as "thirteen thousand." That is an order of magnitude too high, a transcription slip for one thousand three hundred. **When a number is roughly ten times its neighbours, suspect a stray zero and go back to the source.** A decimal or a comma in the wrong place is the most common error in repeated statistics, and catching it is a research skill.

**The research move, unchanged from Indianapolis.** If you want to know why a block on the Lower Hill is gone, **do not start with the demolition. Start with the designation**, because the designation is dated, bounded and minuted, and the clearance follows from it. Ask who declared it, under what statute, on what date, with what boundary, and on what evidence.

## Sources
- Heinz History Center. (n.d.-a). *Crossroads of the world: How urban renewal changed the Hill*. Senator John Heinz History Center. https://www.heinzhistorycenter.org/blog/crossroads-of-the-world-how-urban-renewal-changed-the-hill/
- The Field. (2021, January 26). *Reviving the Hill, one of the oldest residential neighborhoods in the Steel City*. American Society of Landscape Architects. https://thefield.asla.org/2021/01/26/reviving-the-hill-one-of-the-oldest-residential-neighborhoods-in-the-steel-city/
- Urban Redevelopment Authority of Pittsburgh. (n.d.-b). *Lower Hill*. https://www.ura.org/pages/lower-hill`,
      recallContent: [
        {
          prompt: "What was the Pennsylvania Urban Redevelopment Law of 1945, and what did it create?",
          answer: "The Act of May 24, 1945, which authorised municipalities to create Redevelopment Authorities: public bodies that could designate blighted areas, acquire and clear them, and contract with private or governmental redevelopers to rebuild.",
        },
        {
          prompt: "When was the URA incorporated, and how should you state its 'first' claim?",
          answer: "November 18, 1946. The URA calls itself 'one of the first redevelopment authorities in Pennsylvania,' not the first in the nation. Repeat the version the institution actually makes; do not inflate it.",
        },
        {
          prompt: "What was Gateway Center, and why keep it separate from the Lower Hill?",
          answer: "The URA's first major project, which it calls the first privately financed downtown redevelopment project in the United States. It is downtown and it is what outsiders came to admire. The Lower Hill was the same machine's second and larger job, which almost nobody came to admire.",
        },
        {
          prompt: "What was the Allegheny Conference on Community Development, and who anchored it?",
          answer: "An organisation of Pittsburgh business leaders formed in 1944, associated above all with the financier Richard King Mellon, which worked with Mayor David L. Lawrence to direct the city's postwar rebuilding. Business elites plus elected officials is the machine.",
        },
      ],
    },
    {
      slug: "pgh-powers-eminent-domain-partnership",
      title: "10 · Instrument three: eminent domain, and the public-private machine",
      section: "Section 3 · Powers",
      body: `Designation unlocks the power. **The power itself is eminent domain, and the thing that makes it run on this scale is a partnership.**

**What eminent domain is.** The government's authority to take private property for a public use, on payment of just compensation. The constitutional text is the last clause of the **Fifth Amendment**: "nor shall private property be taken for public use, without just compensation." The Fourteenth Amendment applies the requirement to the states. Three things a learner usually has wrong about it, unchanged from the Indiana Avenue course:

1. **The owner does not have to agree.** The dispute in a condemnation case is normally about **price**, not about whether the taking happens.
2. **The taker is often not the party that ends up with the land.** Under a redevelopment statute a public authority acquires and clears, and then **conveys the cleared land to a private or institutional redeveloper.** That is the design of urban renewal, not an abuse of it, and it is why "public use" became a contested phrase in American law.
3. **It leaves a paper trail.** Appraisals, condemnation filings, court judgments and settlement amounts are public records.

**The design was tested and upheld while the Lower Hill was being planned.** In **Berman v. Parker** (1954), a unanimous Supreme Court upheld the District of Columbia's power to condemn property for urban renewal even where a particular building was not itself run down, and even though the cleared land would be handed to private redevelopers. Justice Douglas wrote that the concept of the public welfare is broad. **Berman is the legal ground the whole national program stood on**, and it was decided the year before the federal government approved the Lower Hill plan (*Berman v. Parker*, 1954).

**Now the part that is specific to Pittsburgh: the public-private partnership as an instrument.** The URA held the legal powers, but the direction came from the pairing named in lesson 8: the **Allegheny Conference on Community Development**, the organisation of business leaders around **Richard King Mellon**, working with Mayor **David L. Lawrence** and city hall. The historian Roy Lubove's study of this arrangement is described by its publisher as "a pioneering analysis of elite driven, post-World War II urban renewal" (University of Pittsburgh Press, n.d.). **"Elite driven" is the operative phrase.** A small number of the city's most powerful private citizens and its highest elected officials, deciding together which ground the machine would run on. That is the machine, and Gateway Center was its first run and the Lower Hill its second.

**Put the instruments in order, because order is the transferable part.** A **designation** (lesson 9) makes land acquirable and clearable. **Eminent domain** is the power that acquires it. A **public-private partnership** supplies the direction, the financing and the redeveloper the cleared land is conveyed to. **Designation plus condemnation plus partnership is the mechanism**, and once you can name the three you can read the same move in any renewal-era city.

**An honest limit, and this course keeps it in view.** The Indiana Avenue course could follow one named family, the Temples, through a documented condemnation with dated offers and a final settlement. **This course has not read an individual Lower Hill condemnation file into itself.** What the record here establishes is the mechanism, the acreage, the designation and the counts, not a single household's dollar figures. **The individual acquisition files exist**, in Allegheny County's records and in the URA's own project files, **and they are the next real work on this question.** Reporting that gap is more accurate than borrowing a number from somewhere and hoping.

**One thing the machine did not fully get.** As talk of clearance moved up the slope toward the Middle Hill, residents organised and **held the line at the corner of Crawford Street and Centre Avenue**, the place now marked as **Freedom Corner** (Hill District Digital History, n.d.-b). **The instrument met an organised neighbourhood and stopped**, which is why the Middle and Upper Hill survived and why beat 5 has somewhere to send you. Keep Freedom Corner for Section 5.

## Sources
- Berman v. Parker, 348 U.S. 26 (1954). https://supreme.justia.com/cases/federal/us/348/26/
- Hill District Digital History. (n.d.-b). *Freedom Corner: A rallying point for Pittsburgh activism*. https://hillhistory.org/items/show/7
- U.S. Const. amend. V.
- University of Pittsburgh Press. (n.d.). *Twentieth-century Pittsburgh, volume one: Government, business, and environmental change* [Book description]. https://upittpress.org/books/9780822955511/`,
      recallContent: [
        {
          prompt: "How did the Lower Hill's blight designation actually run, with dates and acreage?",
          answer: "The Lower Hill was declared blighted and drawn into a redevelopment area; the federal government approved the plan in September 1955, slating about 95 acres for clearance, and clearance began in 1955. A councilman called it one of the most outstanding examples of neighborhood deterioration.",
        },
        {
          prompt: "Why is 'blighted' a legal conclusion rather than a description?",
          answer: "A body reaches it on a record against statutory criteria, and it unlocks acquisition, clearance and resale powers that do not otherwise exist. Before the designation the powers do not exist; after it, they do.",
        },
        {
          prompt: "How should you handle the varying Lower Hill counts, and the 'thirteen thousand buildings' figure?",
          answer: "Carry the source with the number, because sources count different things: about 95 acres, about 1,300 buildings, 400-plus or 413 businesses, 1,500 or 1,600 families, more than 8,000 people. 'Thirteen thousand' is a stray-zero slip for 1,300; when a number is ten times its neighbours, suspect a transcription error.",
        },
        {
          prompt: "If you want to know why a Lower Hill block is gone, where do you start, and why?",
          answer: "With the designation, not the demolition, because the designation is dated, bounded, minuted and public, and the clearance follows from it.",
        },
      ],
    },
    {
      slug: "pgh-powers-export-of-model",
      title: "11 · Instrument four: the export of the model",
      section: "Section 3 · Powers",
      body: `Here is the claim in this course's title, stated as strongly as the record honestly allows. **Then the next lesson tests it.**

**The strong version of the thesis.** Pittsburgh did not just clear a neighbourhood. It assembled the whole public-private redevelopment machine **early**, before the federal government built the national program, and it became a place other cities studied. Both halves of that are sourceable.

**Half one: Pittsburgh was early.** The Allegheny Conference formed in **1944**, the Pennsylvania Urban Redevelopment Law passed in **1945**, the URA was incorporated in **1946**, and Gateway Center was underway by the start of the 1950s, **all before the federal Housing Act of 1949** created the national urban-renewal program (Neumann, 2016; Urban Redevelopment Authority of Pittsburgh, n.d.-a).

**Half two: Pittsburgh was studied.** The historian Tracy Neumann documents that "in the 1950s and 1960s, more than seventy national and international delegations of urban policy tourists who hoped to replicate the Renaissance arrived in Pittsburgh," with visitors "from Dayton and Detroit" and officials "from Canada, Australia, Brazil, Belgium, Germany, and Scotland," and concludes that "Pittsburgh's postwar urban renewal program made it a popular model for other aging industrial cities in the 1950s and 1960s" (Neumann, 2016). Lubove's history of it is described by its publisher as the "classic model" analysis of elite-driven renewal (University of Pittsburgh Press, n.d.). **So "Pittsburgh was celebrated and visited as a model" is not a guess. It is documented, by a named historian, with a number attached.**

**Now begin complicating it, because the strong version hides a substitution.** Look closely at what the seventy delegations came to **replicate**. Neumann's own sentence tells you: they came to see "how Democratic mayors and Republican businessmen had worked together to scrub clean the streets and skies of the dirty, polluted, and flood-prone city" (Neumann, 2016). **They came for the partnership and the clean-up: smoke control, flood control, and Gateway Center.** That is the reputational package. **A delegation admiring Gateway Center and the smoke-control ordinance is not the same as a city carrying home a manual for clearing a Black neighbourhood**, and the record this course could verify does not show the second thing travelling.

**What actually spread the clearance instruments across the country was federal, not Pittsburgh.** The **Housing Act of 1949** funded slum clearance and urban redevelopment nationally, and the Heinz History Center notes that "Pittsburgh leaders took advantage of the 1949 American Housing Act which provided federal funds to urban renewal projects that cleared out 'slums'" (Heinz History Center, n.d.-a). **Pittsburgh took advantage of the same federal money as everyone else.** Its own Lower Hill clearance rode Title I federal grants, the way Indianapolis and Washington and San Francisco and Detroit did. **The instruments were a national kit, funded federally and authorised by parallel state laws, and upheld for the whole country by Berman v. Parker in 1954.**

**Hold the two facts side by side, because keeping them apart is the entire skill of this lesson.**
- **Pittsburgh assembled and showcased the public-private partnership early and visibly, and was genuinely emulated as a model of that partnership.** True, and documented.
- **The specific instruments that emptied Black districts, including Indiana Avenue, spread mainly through the federal Housing Act of 1949 and parallel state redevelopment laws, not through cities copying Pittsburgh's clearance.** Also true, and it is the half a triumphant "Pittsburgh wrote the playbook" story leaves out.

**So what does the title claim, honestly?** It claims that the **partnership playbook**, the arrangement of elite business power and elected government running redevelopment together, was written early and prominently in Pittsburgh. **That is defensible.** It does **not** claim that every later city learned to clear its Black neighbourhood by copying Pittsburgh, because that is not in the record. **Lesson 12 lines the dates up and shows you exactly where the strong claim breaks.**

## Sources
- Heinz History Center. (n.d.-a). *Crossroads of the world: How urban renewal changed the Hill*. Senator John Heinz History Center. https://www.heinzhistorycenter.org/blog/crossroads-of-the-world-how-urban-renewal-changed-the-hill/
- Neumann, T. (2016, February 1). *The "spiritual capital" of the Rust Belt: Pittsburgh and the postindustrial transformation of North Atlantic cities*. Global Urban History. https://globalurbanhistory.com/2016/02/01/the-spiritual-capital-of-the-rust-belt-pittsburgh-and-the-postindustrial-transformation-of-north-atlantic-cities/
- University of Pittsburgh Press. (n.d.). *Twentieth-century Pittsburgh, volume one: Government, business, and environmental change* [Book description]. https://upittpress.org/books/9780822955511/
- Urban Redevelopment Authority of Pittsburgh. (n.d.-a). *History of the Urban Redevelopment Authority of Pittsburgh (URA)*. https://www.ura.org/pages/history-of-the-urban-redevelopment-authority-of-pittsburgh-ura`,
      recallContent: [
        {
          prompt: "What does the Fifth Amendment require, and what is normally in dispute in a condemnation case?",
          answer: "That private property not be taken for public use without just compensation, applied to the states by the Fourteenth Amendment. The dispute is normally about the price, not about whether the taking happens.",
        },
        {
          prompt: "What did Berman v. Parker (1954) establish, and why does it matter to the Lower Hill?",
          answer: "A unanimous Supreme Court upheld condemning property for urban renewal even where a building was not itself run down and even though cleared land went to private redevelopers. It is the legal ground the national program stood on, decided the year before the Lower Hill plan was approved.",
        },
        {
          prompt: "Name the three-part mechanism this course says you can find in any renewal-era city.",
          answer: "Designation makes land acquirable and clearable; eminent domain acquires it; a public-private partnership supplies direction, financing and the redeveloper the cleared land is conveyed to. Designation plus condemnation plus partnership.",
        },
        {
          prompt: "What individual record does this course honestly admit it has NOT read, and where does it live?",
          answer: "An individual Lower Hill condemnation file with one household's dated offers and settlement, the way the Indiana Avenue course followed the Temple family. Those files exist in Allegheny County's records and the URA's own project files, and they are the next real work.",
        },
      ],
    },
    {
      slug: "pgh-powers-test-the-playbook",
      title: "12 · Testing the playbook against a chronology, and a double absence",
      section: "Section 3 · Powers",
      body: `The title of this course is an argument, and a good argument invites its own test. **This lesson lines the dates up and asks whether "other cities copied Pittsburgh" survives them. It mostly does not, and this course reports that as a result rather than hiding it.**

**The argument, as proposed.** "Pittsburgh: Where the Playbook Was Written" implies a chain: Pittsburgh invented the redevelopment machine, other cities copied it, and that copying is what emptied Black districts like Indiana Avenue across the country.

**The test is chronology and mechanism, the cheapest test in history.** Line the dates up and ask whether the proposed cause comes before its proposed effects, and whether a mechanism actually connects them.

| Date | Event |
|---|---|
| 1944 | Allegheny Conference on Community Development formed in Pittsburgh |
| 1945 | Pennsylvania Urban Redevelopment Law; District of Columbia Redevelopment Act; David Lawrence elected Pittsburgh mayor |
| 1945 | Indiana General Assembly identifies Pat Ward's Bottom, Indianapolis, as blighted (from the prerequisite course) |
| November 18, 1946 | URA of Pittsburgh incorporated |
| 1948 | Demolition begins at Pat Ward's Bottom, Indianapolis |
| 1949 | Federal Housing Act creates the national urban-renewal program (Title I) |
| early 1950s | Gateway Center underway in downtown Pittsburgh |
| 1954 | Berman v. Parker upholds urban-renewal takings nationally |
| September 1955 | Federal government approves the Lower Hill plan; Pittsburgh clearance begins |
| September 17, 1961 | Civic Arena opens on the cleared Lower Hill |
| September 2011 to March 2012 | The Civic Arena is demolished |

**The verdict, stated plainly. The strong claim fails, and a weaker one survives.**

**Where the argument fails, and why.**
1. **The timing does not run downhill from Pittsburgh.** Indianapolis identified Pat Ward's Bottom as blighted in **1945** and began demolishing it in **1948**, using its own state's machinery, on the same timeline as Pittsburgh's, not after it. Washington's enabling law is the **same year** as Pennsylvania's, 1945. **These are parallel state adoptions, not a copy-chain with Pittsburgh at the head of it.** A cause cannot run to an effect that was already happening beside it.
2. **The mechanism that actually spread is federal.** The instrument kit, blight designation, condemnation, conveyance to a redeveloper, was funded by the **Housing Act of 1949** and upheld for every city by **Berman v. Parker** in 1954. Cities did not need Pittsburgh's example to run it; they needed the federal money and their own state law, and they had both. **What travelled city to city was not a clearance manual. It was a reputation.**
3. **What Pittsburgh actually exported was the partnership, not the clearance.** The documented thing outsiders came to replicate was the public-private partnership and the downtown clean-up, smoke control, flood control, Gateway Center (Neumann, 2016). **A course that lets "seventy delegations came to admire Gateway Center" become "seventy cities copied Pittsburgh's clearance of the Hill" has swapped one claim for a bigger one it cannot support.**

**Where the argument holds, in a smaller and defensible form.** Pittsburgh **assembled and showcased the public-private redevelopment machine early and visibly, and was genuinely emulated as a model of that partnership.** It is one of the prominent early reference cases for the arrangement of elite business power and elected government running a city's rebuilding together. **That is a real claim, it is smaller than the one the title implies at first read, and it is the one this course makes.** The "playbook" that was written here is the partnership playbook, not a step-by-step manual every later city followed to empty its Black district.

**Three method lessons, which outlast every fact in this course.**
1. **Build the chronology before you build the argument.** A table of dates costs an hour and kills a bad thesis cheaply. It is what turned "Pittsburgh wrote the playbook" into "Pittsburgh wrote the partnership playbook, and the clearance spread federally."
2. **A weakened claim that survives is worth more than a strong claim that does not.** "Pittsburgh was an early, emulated model of the partnership" is checkable. "Every city copied Pittsburgh's clearance" is not, and it is largely false.
3. **Report the weakening.** If you tested a thesis and it partly failed, that is a finding and it belongs in your write-up. **Suppressing it is the actual error**, and this lesson exists to model doing the opposite.

**Now the closing image, and it is the one this course was built around: a rare double absence.** The Civic Arena that replaced the neighbourhood was itself demolished. **Demolition began on September 26, 2011 and was completed on March 31, 2012** (Civic Arena, n.d.). Read the two clearances together. First a working, majority-Black neighbourhood of about 1,300 buildings was removed for a showpiece. Then, roughly half a century later, the showpiece was removed too. **The ground at the edge of downtown Pittsburgh has been cleared twice in one lifetime**, and today it is a redevelopment site once more, which is exactly where beat 5 sends you next. The city that wrote the partnership playbook watched its own monument to that playbook erased, and the argument over what belongs on the ground began again.

**What is still open, and would settle the remaining questions.** The URA's Lower Hill project files, the Allegheny Conference records held in Pittsburgh's archives, and the individual condemnation files in Allegheny County. **None of those has been read into this course.** They are public or requestable, and they are the difference between restating this story and adding to it.

## Sources
- Civic Arena (Pittsburgh). (n.d.). In *Wikipedia*. Retrieved July 2026, from https://en.wikipedia.org/wiki/Civic_Arena_(Pittsburgh)
- Heinz History Center. (n.d.-a). *Crossroads of the world: How urban renewal changed the Hill*. Senator John Heinz History Center. https://www.heinzhistorycenter.org/blog/crossroads-of-the-world-how-urban-renewal-changed-the-hill/
- Neumann, T. (2016, February 1). *The "spiritual capital" of the Rust Belt: Pittsburgh and the postindustrial transformation of North Atlantic cities*. Global Urban History. https://globalurbanhistory.com/2016/02/01/the-spiritual-capital-of-the-rust-belt-pittsburgh-and-the-postindustrial-transformation-of-north-atlantic-cities/`,
      recallContent: [
        {
          prompt: "State the strong form of this course's title thesis, and the two halves of it that are actually documented.",
          answer: "The strong form: Pittsburgh invented the redevelopment machine and other cities copied it, which is what emptied Black districts nationally. The two documented halves are narrower: Pittsburgh assembled the machine early (Allegheny Conference 1944, PA law 1945, URA 1946), and Pittsburgh was studied by more than seventy delegations who came to replicate the Renaissance.",
        },
        {
          prompt: "What did the seventy delegations actually come to Pittsburgh to replicate?",
          answer: "The public-private partnership and the downtown clean-up: how Democratic mayors and Republican businessmen worked together, smoke control, flood control and Gateway Center. That is not the same as a manual for clearing a Black neighbourhood.",
        },
        {
          prompt: "If cities did not need Pittsburgh's example to run urban renewal, what did they need, and what upheld it?",
          answer: "Federal money from the Housing Act of 1949 and their own state redevelopment law, both of which they had. Berman v. Parker (1954) upheld the takings for every city. What travelled city to city was a reputation, not a clearance manual.",
        },
        {
          prompt: "State the surviving, weaker claim the course actually makes.",
          answer: "Pittsburgh assembled and showcased the public-private redevelopment partnership early and visibly, and was genuinely emulated as a model of that partnership, so it is one of the prominent early reference cases, not the sole origin every later city copied. The playbook written here is the partnership playbook.",
        },
        {
          prompt: "What is the 'rare double absence,' with dates?",
          answer: "The neighbourhood was cleared in 1955 for the Civic Arena, and the arena itself was then demolished, from September 26, 2011 to March 31, 2012. The ground at the edge of downtown has been cleared twice in one lifetime.",
        },
      ],
    },
    {
      slug: "pgh-quiz-powers",
      title: "13 · Quiz: who decided, and did the playbook travel",
      section: "Section 3 · Powers",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        shuffleOptions: true,
        questions: [
          {
            prompt: "This course defines an 'instrument' as:",
            options: [
              "Any broad historical cause that gradually contributed to a neighbourhood's long decline",
              "A journalist's account of a public decision, usually written well after it was made",
              "A named legal power a named body wields under a named statute, leaving a named record",
              "A heavy machine such as a wrecking ball or bulldozer, brought in to demolish a building",
            ],
            correctIndex: 2,
            explanation: "The last clause is what makes history researchable: if a power was exercised, a named record exists.",
            sourceLessonSlug: "pgh-powers-law-and-authority",
          },
          {
            prompt: "What did the Pennsylvania Urban Redevelopment Law of 1945 do?",
            options: [
              "It let cities charter Redevelopment Authorities to designate, acquire, clear and convey land",
              "It appropriated the specific public funds that later paid to build the Civic Arena downtown",
              "It merged the City of Pittsburgh with the surrounding county of Allegheny into one government",
              "It outlawed the racial covenants that had kept Black families out of many city neighbourhoods",
            ],
            correctIndex: 0,
            explanation: "The law creates a new legal body with powers no ordinary city department has: to designate, acquire, clear and convey.",
            sourceLessonSlug: "pgh-powers-law-and-authority",
          },
          {
            prompt: "How does the URA describe its own place in redevelopment history, and how should you repeat it?",
            options: [
              "As the single earliest redevelopment authority to be founded anywhere in the world",
              "As the first redevelopment authority ever established in the entire United States",
              "As a body with no genuine claim to having been early in any respect at all",
              "As 'one of the first redevelopment authorities in Pennsylvania,' the version to repeat",
            ],
            correctIndex: 3,
            explanation: "When you repeat an institution's claim about itself, repeat the version it actually makes. The URA says 'one of the first in Pennsylvania.'",
            sourceLessonSlug: "pgh-powers-law-and-authority",
          },
          {
            prompt: "The Allegheny Conference on Community Development was:",
            options: [
              "A federal agency that the Housing Act of 1949 created to run urban renewal",
              "A body of Pittsburgh business leaders formed in 1944 around Richard King Mellon",
              "A grassroots residents' association based in the Hill District neighbourhood itself",
              "The in-house demolition and site-clearing contractor employed directly by the URA",
            ],
            correctIndex: 1,
            explanation: "Business elites plus elected officials, pulling together, is the public-private machine this section takes apart.",
            sourceLessonSlug: "pgh-powers-law-and-authority",
          },
          {
            prompt: "In September 1955, what happened to the Lower Hill?",
            options: [
              "The Civic Arena first opened its doors to the ticket-buying hockey and concert public",
              "The whole Lower Hill was formally added to the National Register of Historic Places",
              "The federal government approved the Lower Hill plan, slating 95 acres for clearance",
              "The Allegheny Conference on Community Development was convened and first formed",
            ],
            correctIndex: 2,
            explanation: "The designation and federal approval are the hinge; the clearance follows from them.",
            sourceLessonSlug: "pgh-powers-designation",
          },
          {
            prompt: "Why is 'blighted' called a legal conclusion rather than a description?",
            options: [
              "A body reaches it on a record against statutory criteria, unlocking clearance powers",
              "Because only licensed attorneys are permitted to use the word in official documents",
              "Because once it is entered it can never afterward be appealed or challenged in court",
              "Because it can only ever apply to vacant land that holds no standing buildings at all",
            ],
            correctIndex: 0,
            explanation: "Before the designation the powers do not exist; after it, they do. That is why you start research at the designation.",
            sourceLessonSlug: "pgh-powers-designation",
          },
          {
            prompt: "The varying Lower Hill counts (about 1,300 buildings, 413 businesses, 1,600 families, over 8,000 people) should be handled how?",
            options: [
              "Always pick the single largest published figure available in each category",
              "Average every published figure together into one blended composite number",
              "Ignore all of the counts entirely, because the sources disagree with each other",
              "Carry the source with each number, and suspect a stray zero on outliers",
            ],
            correctIndex: 3,
            explanation: "'Thirteen thousand buildings' is a transcription slip for 1,300. Attribute figures; do not adopt or blend them.",
            sourceLessonSlug: "pgh-powers-designation",
          },
          {
            prompt: "What did Berman v. Parker (1954) establish?",
            options: [
              "That urban renewal and all of its property takings were entirely unconstitutional across the nation",
              "That a government may condemn property for renewal and convey it to private redevelopers",
              "That only the federal government, never a state or city, could ever use eminent domain",
              "That the City of Pittsburgh was legally entitled to annex all of Allegheny County",
            ],
            correctIndex: 1,
            explanation: "Berman is the legal ground the national urban-renewal program stood on, decided the year before the Lower Hill plan was approved.",
            sourceLessonSlug: "pgh-powers-eminent-domain-partnership",
          },
          {
            prompt: "The three-part mechanism this course says you can find in any renewal-era city is:",
            options: [
              "Designation, condemnation, and a public-private partnership that directs and finances it",
              "A public referendum, a large municipal bond issue, and a ceremonial public groundbreaking",
              "A new highway, a sports stadium, and a multi-storey structured parking garage",
              "A decennial census, a revised zoning map, and a negotiated property tax abatement",
            ],
            correctIndex: 0,
            explanation: "Designation makes land clearable, eminent domain acquires it, and the partnership supplies direction and the redeveloper the land is conveyed to.",
            sourceLessonSlug: "pgh-powers-eminent-domain-partnership",
          },
          {
            prompt: "What individual record does this course honestly admit it has NOT read into itself?",
            options: [
              "The calendar date on which the Civic Arena first opened to the public",
              "An individual Lower Hill condemnation file with one household's offers and settlement",
              "The total acreage of the Lower Hill that was designated and then fully cleared",
              "The founding year, the long-time editor, and the complete name of the Pittsburgh Courier",
            ],
            correctIndex: 1,
            explanation: "Those files exist in Allegheny County's records and the URA's project files. Reporting the gap is more accurate than borrowing a number.",
            sourceLessonSlug: "pgh-powers-eminent-domain-partnership",
          },
          {
            prompt: "Historian Tracy Neumann documents that in the 1950s and 1960s Pittsburgh was visited by:",
            options: [
              "A single visiting delegation that travelled up from Washington, D.C.",
              "No outside delegations whatsoever ever came to look at the city at all",
              "Only a few delegations from other cities within Pennsylvania itself",
              "More than seventy national and international delegations of policy tourists",
            ],
            correctIndex: 3,
            explanation: "Visitors came from Dayton, Detroit, Canada, Australia, Brazil, Belgium, Germany and Scotland. Pittsburgh as a studied model is documented, not guessed.",
            sourceLessonSlug: "pgh-powers-export-of-model",
          },
          {
            prompt: "What did those delegations actually come to Pittsburgh to replicate?",
            options: [
              "A detailed step-by-step manual explaining how to clear an entire Black neighbourhood block by block",
              "The public-private partnership and the downtown clean-up: smoke, floods, Gateway Center",
              "The specific engineering design of the Civic Arena's famous retractable roof",
              "The Pittsburgh Courier's national newspaper circulation and its business model",
            ],
            correctIndex: 1,
            explanation: "A delegation admiring Gateway Center and the smoke ordinance is not a city carrying home a clearance manual. Keep the two apart.",
            sourceLessonSlug: "pgh-powers-export-of-model",
          },
          {
            prompt: "What actually spread the clearance instruments across the country, rather than cities copying Pittsburgh?",
            options: [
              "A private urban-renewal consulting firm, headquartered in Pittsburgh, that other cities hired",
              "The wide national circulation of the Pittsburgh Courier newspaper",
              "The federal Housing Act of 1949 and parallel state laws, upheld by Berman v. Parker",
              "The annual membership dues collected by the Allegheny Conference",
            ],
            correctIndex: 2,
            explanation: "Pittsburgh's own Lower Hill clearance rode the same Title I federal money as everyone else. The kit was national.",
            sourceLessonSlug: "pgh-powers-export-of-model",
          },
          {
            prompt: "Testing the 'other cities copied Pittsburgh' thesis against the chronology shows that:",
            options: [
              "It fails as a copy-chain: other cities ran their own machinery on the same 1940s timeline",
              "Pittsburgh single-handedly caused every later urban clearance that happened in the country",
              "No American city other than Pittsburgh ever cleared a Black neighbourhood",
              "The chronology is simply unknowable, so the thesis cannot be tested at all",
            ],
            correctIndex: 0,
            explanation: "The surviving, weaker claim is that Pittsburgh was an early, emulated model of the partnership, one prominent reference case rather than the sole origin.",
            sourceLessonSlug: "pgh-powers-test-the-playbook",
          },
          {
            prompt: "The 'rare double absence' at the heart of this course is:",
            options: [
              "That two entirely different neighbourhoods happened to be cleared on the very same day",
              "That both the Pittsburgh Courier and the Crawford Grill shut down in the same single year",
              "That the Lower Hill appears in neither the Green Book nor the federal census",
              "That the 1955 clearance was followed by the arena's own demolition in 2011 to 2012",
            ],
            correctIndex: 3,
            explanation: "The ground at the edge of downtown has been cleared twice in one lifetime, and it is a redevelopment site again today.",
            sourceLessonSlug: "pgh-powers-test-the-playbook",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 4 · Now  (beat 4: observation and evidence)
    //
    // The 360 tour of the Lower Hill has been PLANNED but not captured, and its Wanderlearn embed
    // URL does not exist yet. A tour URL is authoritative external data that must never be guessed
    // (plans/future/04-wanderlearn-360-boundary.md), so this lesson ships as `virtual_tour` with NO
    // contentUrl: the player renders the "no media yet" notice above the body, and the body is the
    // observation brief the learner uses when the tour lands. Drop the URL in and re-seed. Per the
    // recall-placement convention this tour lesson carries NO recallContent (recall belongs on
    // teaching lessons only).
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "pgh-now-tour",
      title: "14 · Now: walk the Hill (360 tour, forthcoming)",
      section: "Section 4 · Now",
      lessonType: "virtual_tour",
      body: `**The 360 tour for this lesson is forthcoming.** It is not here yet, and the notice above this text is telling you the truth rather than reporting a fault. This course was written before the tour was captured, on purpose: the site template treats beat 4 as a drop-in, so the course is complete and teachable without it, and the tour is added later without restructuring anything.

**Read this lesson now anyway.** It is your observation brief. Beat 4 asks one question, "what is actually there today," and the difference between a tourist looking at a street and a researcher looking at a street is entirely a matter of knowing what to look for before you arrive. **Work through this list now, then run it against the tour when it lands.**

## What to look for, in order

**1. Find the cleared ground, and read what is on it now.** The Lower Hill is the roughly 95 acres closest to downtown. On it today you will find the **FNB Financial Center**, a new tower that opened in February 2025 on part of the former Civic Arena site, and, around it, **open redevelopment land and surface parking** where the arena and its lots stood (Urban Redevelopment Authority of Pittsburgh, n.d.-b). **Ask of every stretch: is this a new building, an old survivor, cleared ground waiting, or a parking lot? Each one is a different decision**, and on this ground each is a different chapter of the double absence from lesson 12.

**2. Stand at Freedom Corner and look both ways.** At the intersection of **Crawford Street and Centre Avenue** is Freedom Corner, the monument marking the line where residents stopped the clearance from moving further up the slope (Hill District Digital History, n.d.-b). **Look downhill toward downtown: that is the Lower Hill that was taken. Look uphill: that is the Middle and Upper Hill that organised and survived.** One corner holds both halves of this course. Note which direction the new construction faces.

**3. Look for the boundary between what was cleared and what stands.** Somewhere the fabric changes from redevelopment parcels and a new tower back to street-fronting rowhouses, churches and small commercial buildings. **That boundary is not natural. It is the edge of the 1955 redevelopment area**, and it has a legal description on a map you can request.

**4. Find the one Green Book building.** Section 1 established that more than 30 Hill District businesses were listed in the Green Book and that only one of those buildings still stands (Heinz History Center, n.d.-a). **A lone survivor is evidence about itself, not proof the district endures.** When the tour lets you see it, look at what is on either side of it, because a survivor in a block reads differently than a survivor alone.

**5. Count the markers, monuments and plaques, and read who sponsored them.** Freedom Corner, the August Wilson House, historical markers along Centre Avenue: each is a public statement with an author, a date and a sponsor. **A marker tells you what a community and an agency agreed to say in public, in a particular year.** Note the sponsor every time.

**6. Look for what is being built right now.** Construction fencing, a rezoning sign, a public-meeting notice, a leasing banner on the new tower. **Every one of those is a live document with a case number**, and Section 5 teaches you how to look them up. On this ground the redevelopment is not history; it is this year's news.

**7. Look at who is on the street.** This is a living neighbourhood with residents, workers, worshippers and visitors, and a community development corporation that speaks for it. **Describe the people as they would describe themselves, or do not describe them.** A 360 tour is a photograph of strangers in a public place, and the ethics of writing about it are the ethics of writing about neighbours. The Hill District documents itself; read what it says about itself before you say anything about it.

## What the tour cannot show you

- **It cannot show you a date.** Every change you notice happened at a time, and the tour has no clock. Beat 3 gave you the dates; beat 5 gives you the record.
- **It cannot show you an owner.** A building's occupant is not its owner, and neither is printed on the facade. The parcel record has it.
- **It cannot show you an intention.** A parking lot is not evidence about anyone's motives. It is evidence that there is no building.
- **It cannot show you a double absence.** You cannot photograph the neighbourhood that was cleared in 1955, and you cannot photograph the arena that was cleared in 2011. **Both removals are invisible in a present-day image**, which is exactly why this course spent Section 3 on the record instead of the view. Everything the tour does not contain is a question for Section 5, not an answer.

**Write down your five most confident observations before the tour arrives, based on this brief and the map lesson that follows. Then check them.** Being wrong on the record about a place you had not yet seen is a better teacher than being right about one you had.

## Sources
- Heinz History Center. (n.d.-a). *Crossroads of the world: How urban renewal changed the Hill*. Senator John Heinz History Center. https://www.heinzhistorycenter.org/blog/crossroads-of-the-world-how-urban-renewal-changed-the-hill/
- Hill District Digital History. (n.d.-b). *Freedom Corner: A rallying point for Pittsburgh activism*. https://hillhistory.org/items/show/7
- Urban Redevelopment Authority of Pittsburgh. (n.d.-b). *Lower Hill*. https://www.ura.org/pages/lower-hill`,
    },
    {
      slug: "pgh-map",
      title: "15 · Map: one hill, and the pattern it belongs to",
      section: "Section 4 · Now",
      body: `**Read this before you touch the map, because the map's limits are a lesson in themselves.**

**This platform's lesson map draws the whole world.** A marker is a fixed-size dot on a world projection, which means two points need to be roughly two degrees apart, on the order of 200 kilometres, before they separate visually. **A 95-acre neighbourhood is far smaller than one dot.** So this map cannot show you the Lower Hill block by block, and pretending otherwise would be a worse lesson than admitting it.

**That limitation is the most useful thing on this page.** The right map for a parcel question is not a world map. It is the **Allegheny County GIS Viewer** and the county's **Real Estate Portal**, where you can enter an address or a parcel number and see parcel boundaries, ownership, assessed values and aerial imagery (Allegheny County, n.d.-a; Allegheny County, n.d.-b). **Choosing the right scale of map for your question is a research skill**, and Section 5 puts you to work in the county tools directly.

**So this map does the job it can do well.** It places the Lower Hill in the national pattern it belongs to, and it marks two archives where the underlying records live.

**Blue: the Lower Hill itself**, plotted at an approximate point on the cleared ground. Its detail carries the double absence in one paragraph.

**Amber: four other American Black districts** cleared by the same instrument kit, the redevelopment authority plus blight designation plus federal Housing Act of 1949 money. Urban renewal razed Black neighbourhoods in cities across the country, and studies of the program find Black districts were far more likely than white ones to be chosen for clearance (Rothstein, 2017). **These four are here to stop you reading Pittsburgh as a local misfortune. It is a local instance of a national program.** Note that one of them, Indiana Avenue, is the subject of this course's sibling, so you can walk the same six beats there.

**Green: two archives.** The Heinz History Center's Detre Library and Archives and the University of Pittsburgh's archives hold the URA, Allegheny Conference and Renaissance records this course leans on. **Both are places, and knowing where a record physically lives is part of knowing that it exists.**

**Coordinates on this map are approximate points, not surveyed locations.** Do not use them to find an address. Use them to see the shape of the pattern, and use the Allegheny County tools when you need a parcel.

**What this map cannot show, and neither could a closer one.** It cannot show absence. Every marker exists because something was recorded and written about. **The four amber cities are the ones that have been documented, which is a fact about scholarship as well as about clearance.** How many districts are not on this map is a question this course cannot answer and will not guess at.

## Sources
- Allegheny County. (n.d.-a). *Allegheny County GIS viewer*. https://experience.arcgis.com/experience/68f5e4ae2f5b47b78cefcdf019e154bd
- Allegheny County. (n.d.-b). *Real estate portal*. https://realestate.alleghenycounty.us/
- Neumann, T. (2016, February 1). *The "spiritual capital" of the Rust Belt: Pittsburgh and the postindustrial transformation of North Atlantic cities*. Global Urban History. https://globalurbanhistory.com/2016/02/01/the-spiritual-capital-of-the-rust-belt-pittsburgh-and-the-postindustrial-transformation-of-north-atlantic-cities/
- Rothstein, R. (2017). *The color of law: A forgotten history of how our government segregated America*. Liveright.`,
      mapContent: {
        markers: [
          {
            id: "pgh-lower-hill",
            lat: 40.4419,
            lng: -79.9846,
            title: "Lower Hill District, Pittsburgh, Pennsylvania",
            color: "#1d4ed8",
            description:
              "The subject of this course. The roughly 95 acres of the Hill District closest to downtown, majority Black and genuinely mixed, cleared beginning in 1955 under the Urban Redevelopment Authority: about 1,300 buildings, over 400 businesses and more than 8,000 people removed for a promised cultural centre that was mostly never built. What replaced it was the Civic Arena and a great deal of parking. The arena itself was demolished between September 2011 and March 2012, a rare double absence. Today the ground holds the new FNB Financial Center and an active redevelopment site.",
          },
          {
            id: "pgh-indiana-avenue",
            lat: 39.7745,
            lng: -86.1665,
            title: "Indiana Avenue, Indianapolis, Indiana",
            color: "#b45309",
            description:
              "The subject of this course's sibling. The Black commercial and cultural centre of Indianapolis, emptied between 1948 and the 1980s by blight designation and university land assembly. Indianapolis identified its first clearance area as blighted in 1945 and began demolishing it in 1948, on the same 1940s timeline as Pittsburgh and under its own state's machinery. That parallel is the evidence lesson 12 uses to weaken the claim that later cities simply copied Pittsburgh.",
          },
          {
            id: "pgh-southwest-dc",
            lat: 38.879,
            lng: -77.017,
            title: "Southwest Washington, D.C.",
            color: "#b45309",
            description:
              "A largely Black Southwest neighbourhood cleared beginning in 1954 under the District of Columbia Redevelopment Act of 1945, the same year Pennsylvania passed its own redevelopment law. The clearance gave rise to Berman v. Parker (1954), the unanimous Supreme Court decision that upheld condemning property for urban renewal and became the legal ground the whole national program stood on, including the Lower Hill.",
          },
          {
            id: "pgh-fillmore",
            lat: 37.784,
            lng: -122.433,
            title: "Fillmore / Western Addition, San Francisco, California",
            color: "#b45309",
            description:
              "A Black cultural district and jazz centre once called the Harlem of the West, cleared over two decades by the San Francisco Redevelopment Agency. Reporting on the project describes thousands of households displaced and hundreds of businesses closed. Same instrument kit as Pittsburgh, a redevelopment authority using blight designation and federal urban-renewal money, on the opposite coast.",
          },
          {
            id: "pgh-black-bottom",
            lat: 42.343,
            lng: -83.037,
            title: "Black Bottom / Paradise Valley, Detroit, Michigan",
            color: "#b45309",
            description:
              "A Black neighbourhood and business district, home to a jazz scene that drew Duke Ellington and Ella Fitzgerald, razed for urban renewal beginning in the late 1940s and replaced by the Chrysler Freeway and Lafayette Park, a Mies van der Rohe development billed as a model neighbourhood. Detroit began its clearance authority work in 1946, the same year the URA was incorporated.",
          },
          {
            id: "pgh-heinz-archives",
            lat: 40.4468,
            lng: -79.993,
            title: "Detre Library & Archives, Heinz History Center, Pittsburgh",
            color: "#15803d",
            description:
              "Where much of the record this course leans on physically lives, including materials on the Hill District and Pittsburgh's postwar redevelopment. The Heinz History Center's Crossroads of the World work is the source for several figures in Sections 1 and 3. Knowing where a record lives is part of knowing it exists.",
          },
          {
            id: "pgh-pitt-archives",
            lat: 40.4428,
            lng: -79.954,
            title: "University of Pittsburgh Archives & Special Collections, Oakland",
            color: "#15803d",
            description:
              "Where the Allegheny Conference and Renaissance-era records and much of Historic Pittsburgh's digitized collection are held. The URA project files, the Allegheny Conference papers and the individual condemnation records named as unopened sources in Section 3 are the kind of material that lives in archives like this one. They are the next real work on this story.",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 5 · Next  (beat 5: live civics. the current redevelopment, and a real parcel)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "pgh-next-live-civics",
      title: "16 · What is the current plan for this ground?",
      section: "Section 5 · Next",
      body: `Beat 5 is the beat that turns a history course into a civics course. **The cleared ground of the Lower Hill is not a memorial. It is an active redevelopment site with a plan being written for it right now**, and finding the plan, the body and the agreement is a research skill rather than an opinion. On this ground beat 5 is unusually live, because the future of the twice-cleared land is being re-decided in the years you are reading this.

**Start with the four questions, in this order. They work for any American parcel.**
1. **What does the current plan say this land should become?**
2. **What is actually being built, and by whom?**
3. **Is there a community benefits agreement, and what did the community demand?**
4. **Who is the decision-making body, and is the process public?**

**Question 1: the current plan, and its status is the most instructive part.** The cleared Lower Hill is the site of the **Lower Hill redevelopment**, a roughly 28-acre project. For 18 years, development rights to the site were held by **Pittsburgh Arena Real Estate Redevelopment (PAR)**, a subsidiary of the **Pittsburgh Penguins** (Urban Redevelopment Authority of Pittsburgh, n.d.-b). **Then, in October 2025, PAR's development rights expired and reverted to the two public owners of the land, the Urban Redevelopment Authority and the Sports & Exhibition Authority of Pittsburgh and Allegheny County (SEA), leaving about 21 acres of developable land whose future the authorities are now re-evaluating through a public process** (Urban Redevelopment Authority of Pittsburgh, n.d.-b). Read that carefully. **The honest answer to "what is the plan" is that the plan is being re-decided right now**, which is the finding that gives a citizen the most leverage, because a decision still open is a decision you can speak into.

**Question 2: what is actually being built.** The first major building on the cleared ground is the **FNB Financial Center**, a mixed-use office tower that opened in **February 2025** on Block G-1, the first commercial development on the former Civic Arena site (Urban Redevelopment Authority of Pittsburgh, n.d.-b). **So the ground now holds one new tower, an active redevelopment site, and the same public authorities that cleared it seventy years ago.** The double absence from lesson 12 is not settled history; it is a construction site.

**Question 3: the community benefits agreement, and here is where Section 3 connects to today.** In **2014**, the Hill District community reached a **Community Collaboration and Implementation Plan (CCIP)**, a benefits agreement whose priorities include affordable housing, investment in the Greater Hill, arts and cultural preservation, job access, investment in youth and families, and participation for minority-owned and women-owned businesses (Urban Redevelopment Authority of Pittsburgh, n.d.-b). **The CCIP is the direct descendant of Freedom Corner.** In 1969 the community held a physical line at Crawford and Centre against further clearance (Hill District Digital History, n.d.-b); in 2014 it negotiated a written agreement over what redevelopment owes the neighbourhood. **The instrument the community built is not a demolition. It is a demand with signatures on it**, and it is as much a part of this ground's record as any URA resolution.

**A caution about the numbers you will see, because the authoritative-values rule applies to good news too.** The project's developers and partners publish specific figures for jobs created and dollars invested in the Greater Hill. **Those are the developer's own reported figures, and you should attribute them to the developer and re-check them against an independent source before you repeat them**, exactly as lesson 10 told you to attribute a displacement figure to its owner. A number that flatters the party that published it is not more reliable than one that does not.

**Question 4: who decides, and is it public.** The land is owned by the **URA** and the **SEA**, both public authorities with boards that meet in public. With PAR's rights expired and the remaining acreage back in public hands, **the decisions about what the ground becomes are being made in meetings you can attend and agendas you can read.** A public meeting is the cheapest civic act there is, and on this ground it is happening now.

**The honest limits of this lesson.** Development rights change hands, agreements get amended, and the status above was current as of the most recent public reporting and will move. **Every date and body named here has a source attached, and you should re-check all of them before you rely on any of them.** That instruction is not a disclaimer. It is the method, and on a site being re-decided in real time it is the whole method.

## Sources
- Hill District Digital History. (n.d.-b). *Freedom Corner: A rallying point for Pittsburgh activism*. https://hillhistory.org/items/show/7
- Urban Redevelopment Authority of Pittsburgh. (n.d.-b). *Lower Hill*. https://www.ura.org/pages/lower-hill`,
      recallContent: [
        {
          prompt: "State the strong 'playbook' thesis and the weaker claim that survives the chronology test.",
          answer: "Strong: Pittsburgh invented the redevelopment machine and other cities copied it, which is what emptied Black districts nationally. Surviving: Pittsburgh assembled and showcased the public-private partnership early and visibly and was genuinely emulated as a model of that partnership, one prominent early reference case rather than the sole origin.",
        },
        {
          prompt: "Why does the 'other cities copied Pittsburgh' chain fail against the dates?",
          answer: "Indianapolis and Washington ran their own state machinery on the same 1940s timeline, not downstream of Pittsburgh; Washington's enabling law is the same year, 1945. The clearance instruments spread through the federal Housing Act of 1949 and state laws, upheld by Berman v. Parker. What travelled was a partnership reputation, not a clearance manual.",
        },
        {
          prompt: "What is the 'rare double absence,' with dates?",
          answer: "The Lower Hill was cleared in 1955 for the Civic Arena, and the arena itself was demolished between September 26, 2011 and March 31, 2012. The ground at the edge of downtown has been cleared twice in one lifetime.",
        },
        {
          prompt: "Name the three method lessons from the thesis test.",
          answer: "Build the chronology before the argument; a weakened claim that survives beats a strong claim that does not; and report the weakening, because suppressing it is the actual error.",
        },
      ],
    },
    {
      slug: "pgh-next-exercise-parcel",
      title: "17 · Practice: look up a real parcel",
      section: "Section 5 · Next",
      lessonType: "exercise",
      body: `**This drill is the whole of beat 5 in miniature, and you should do it with the real tools open in another tab.** Everything below is free and public.

**The two tools, both official and county-run.**
- The **Allegheny County Real Estate Portal**: https://realestate.alleghenycounty.us/ . Search by address, owner name or parcel number and read the owner of record, assessed value, building information and sale history.
- The **Allegheny County GIS Viewer**: https://experience.arcgis.com/experience/68f5e4ae2f5b47b78cefcdf019e154bd . Enter an address or parcel and see parcel boundaries, aerial imagery and the political and municipal boundaries the parcel sits inside.

**Your target: the August Wilson House, 1727 Bedford Avenue, Pittsburgh.** It is a safe address to practise on: it is a public nonprofit arts centre, its address is published by the institution that runs it, it was added to the National Register of Historic Places on April 30, 2013, and you are not exposing anybody's home. It also sits in the Middle Hill, the part of the neighbourhood that survived, which makes it a useful contrast to the cleared Lower Hill.

**Work through these, then answer the questions below.**
1. Find **1727 Bedford Avenue** in the Real Estate Portal and read off the **parcel identification number**. Write it down exactly, including punctuation.
2. Find the **owner of record**, the **year built** if the record gives one, and the **assessed value**.
3. Compare the **owner of record** to the **Daisy Wilson Artist Community**, the nonprofit that operates the house. **They may not match, and if they do not, that is normal and it is a finding**, because a building's operator and its titled owner are two different facts.
4. In the GIS Viewer, look at the **parcel outline and the aerial image**. Is this a small residential lot on a street grid, unlike the large cleared parcels of the Lower Hill? Compare it to lesson 5's account of superblocking.
5. Turn on municipal and political boundaries and note which **city, council district and school district** the parcel is in. Lesson 8 explained why an enabling law and an authority sit above all of those.
6. Now, if you want the double absence directly, search the **FNB Financial Center on the former Civic Arena site** and read that parcel too. **Compare its assessed value and its lot size to the August Wilson House's.** One number is the ground that was cleared; the other is the ground that survived.

**The habits this builds, which transfer to any American county.** Every county has an assessor or its equivalent and most have a GIS. **The names of the tools change and the four facts do not: parcel number, owner of record, assessed value, and which overlapping jurisdictions the parcel sits in.** Learn to find those four and you can research any address in the country.

**One rule you do not get to break.** **Do not run this drill on somebody's home and publish the result.** A parcel record is public, and a current occupant's name attached to their address in a piece of writing is a different thing from a public record sitting in a county database. Practise on institutional and commercial addresses. This is the same rule the method course applied to tourist homes.

## Sources
- Allegheny County. (n.d.-a). *Allegheny County GIS viewer*. https://experience.arcgis.com/experience/68f5e4ae2f5b47b78cefcdf019e154bd
- Allegheny County. (n.d.-b). *Real estate portal*. https://realestate.alleghenycounty.us/
- August Wilson House. (n.d.). *Project overview*. Daisy Wilson Artist Community. https://augustwilsonhouse.org/project-overview.html`,
      exercise: {
        instructions:
          "Type the missing term, name, number, body or year, then check. Close answers (spelling, capitalization) count as 'close', not wrong.",
        items: [
          {
            prompt: "The official county tool for reading a parcel's owner of record and assessed value is the Allegheny County Real Estate ___.",
            answer: "Portal",
            accept: ["real estate portal", "portal"],
            explanation: "At realestate.alleghenycounty.us. Search by address, owner name or parcel number.",
          },
          {
            prompt: "The official tool for seeing parcel boundaries and municipal boundaries on a map is the Allegheny County ___ Viewer.",
            answer: "GIS",
            accept: ["gis", "g.i.s."],
            explanation: "GIS stands for geographic information system. It shows the parcel outline, aerial imagery and overlapping jurisdictions.",
          },
          {
            prompt: "The four facts to pull for any parcel are parcel number, owner of record, assessed value, and which overlapping ___ it sits in.",
            answer: "jurisdictions",
            accept: ["jurisdiction", "boundaries", "districts"],
            explanation: "City, council district and school district are different shapes over the same ground.",
          },
          {
            prompt: "The safe public building you practise on in this drill is the ___ ___ House at 1727 Bedford Avenue.",
            answer: "August Wilson",
            accept: ["august wilson", "august wilson house"],
            explanation: "A nonprofit arts centre, on the National Register since April 30, 2013, in the Middle Hill that survived.",
          },
          {
            prompt: "The nonprofit that operates the house, whose name may not match the titled owner of record, is the Daisy Wilson ___ Community.",
            answer: "Artist",
            accept: ["artist", "artists"],
            explanation: "Operator and titled owner are two different facts. A mismatch is normal and it is a finding.",
          },
          {
            prompt: "The redevelopment authority that holds the legal powers to designate, clear and convey Lower Hill land is the ___ (three-letter abbreviation).",
            answer: "URA",
            accept: ["u.r.a.", "urban redevelopment authority"],
            explanation: "The Urban Redevelopment Authority of Pittsburgh, incorporated November 18, 1946.",
          },
          {
            prompt: "The public authority that co-owns the Lower Hill land with the URA is the Sports & ___ Authority (SEA).",
            answer: "Exhibition",
            accept: ["exhibition", "sports and exhibition authority"],
            explanation: "The Sports & Exhibition Authority of Pittsburgh and Allegheny County. PAR's development rights reverted to the URA and the SEA in October 2025.",
          },
          {
            prompt: "The subsidiary of the Pittsburgh Penguins that held development rights to the 28-acre site for 18 years was ___ (three-letter abbreviation).",
            answer: "PAR",
            accept: ["p.a.r.", "pittsburgh arena real estate redevelopment"],
            explanation: "Pittsburgh Arena Real Estate Redevelopment. Its rights expired and reverted to the public owners in October 2025.",
          },
          {
            prompt: "The 2014 Hill District community benefits agreement is the Community Collaboration and ___ Plan (CCIP).",
            answer: "Implementation",
            accept: ["implementation"],
            explanation: "Its priorities include affordable housing, investment in the Greater Hill, arts preservation, job access and MBE participation.",
          },
          {
            prompt: "The monument at Crawford and Centre marking the line where residents stopped the clearance is ___ Corner.",
            answer: "Freedom",
            accept: ["freedom", "freedom corner"],
            explanation: "The direct ancestor of the CCIP: in 1969 a physical line, in 2014 a written agreement.",
          },
          {
            prompt: "The federal law that funded slum clearance nationally, which Pittsburgh 'took advantage of,' was the Housing Act of ___.",
            answer: "1949",
            accept: ["49"],
            explanation: "Title I of the 1949 Act, not a Pittsburgh copy-chain, is what spread the clearance instruments across the country.",
          },
          {
            prompt: "The 1954 Supreme Court case that upheld condemning property for urban renewal was Berman v. ___.",
            answer: "Parker",
            accept: ["parker"],
            explanation: "It became the legal ground the whole national program stood on, decided the year before the Lower Hill plan was approved.",
          },
          {
            prompt: "The legal conclusion the URA must reach before it can acquire and clear an area is that the area is ___.",
            answer: "blighted",
            accept: ["blight", "blighted and substandard", "substandard"],
            explanation: "Reached on a record against statutory criteria under the Pennsylvania Urban Redevelopment Law of 1945.",
          },
          {
            prompt: "The constitutional amendment requiring just compensation for a taking is the ___ Amendment.",
            answer: "Fifth",
            accept: ["5th", "5", "five"],
            explanation: "Applied to the states through the Fourteenth Amendment.",
          },
          {
            prompt: "The first major building on the cleared ground, opened in February 2025, is the ___ Financial Center.",
            answer: "FNB",
            accept: ["f.n.b.", "fnb"],
            explanation: "On Block G-1, the first commercial development on the former Civic Arena site.",
          },
        ],
      },
    },
    {
      slug: "pgh-quiz-next",
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
              "Because the exact geographic coordinates of the Lower Hill are simply not known to the platform's software",
              "Because the world map needs points two degrees apart, and a 95-acre neighbourhood is smaller than a dot",
              "Because all block-level maps of the city of Pittsburgh are under copyright",
              "Because the course deliberately avoids showing any maps of Pennsylvania",
            ],
            correctIndex: 1,
            explanation: "Choosing the right scale of map for the question is the actual skill. For a parcel question the right map is the county GIS viewer.",
            sourceLessonSlug: "pgh-map",
          },
          {
            prompt: "The four amber districts on the map (Indiana Avenue, Southwest DC, the Fillmore, Black Bottom) are placed there to show that:",
            options: [
              "Because Pittsburgh's own clearance happened to be the single largest of any anywhere in the country",
              "Because only four other American cities ever made any use of urban renewal at all",
              "Because the Hill District was cleared later in time than any of the other four",
              "Because the Lower Hill was a local instance of a national program, not a local misfortune",
            ],
            correctIndex: 3,
            explanation: "The same instrument kit, a redevelopment authority plus blight designation plus federal money, ran in cities across the country.",
            sourceLessonSlug: "pgh-map",
          },
          {
            prompt: "As of the most recent reporting, what is the status of the Lower Hill redevelopment?",
            options: [
              "PAR's rights expired in October 2025 and reverted to the URA and SEA, leaving 21 acres re-decided",
              "The entire 28-acre site has already been completely built out with new office towers, housing and shops",
              "The cleared land was handed back to the descendants of the families who were displaced",
              "The old Civic Arena was rebuilt on exactly the same footprint it stood on before",
            ],
            correctIndex: 0,
            explanation: "A plan being re-decided right now is the finding that gives a citizen the most leverage, because an open decision can be spoken into.",
            sourceLessonSlug: "pgh-next-live-civics",
          },
          {
            prompt: "What is the first major building constructed on the cleared Lower Hill ground?",
            options: [
              "A faithfully rebuilt version of the original Crawford Grill jazz club",
              "A brand-new national headquarters building for the Pittsburgh Courier",
              "The FNB Financial Center, a mixed-use tower opened in February 2025 on the arena site",
              "A large replacement sanctuary specially built for the displaced Bethel AME congregation",
            ],
            correctIndex: 2,
            explanation: "The double absence is not settled history; the twice-cleared ground is an active construction site.",
            sourceLessonSlug: "pgh-next-live-civics",
          },
          {
            prompt: "What is the 2014 Community Collaboration and Implementation Plan (CCIP)?",
            options: [
              "A detailed URA schedule setting out the planned future demolition of the Middle and Upper Hill",
              "A Hill District benefits agreement covering housing, arts, jobs and MBE participation",
              "The original redevelopment plan that was drawn up for the Lower Hill back in 1955",
              "A federal grant application submitted for money to fund the redevelopment",
            ],
            correctIndex: 1,
            explanation: "The CCIP is a demand with signatures on it, the written descendant of Freedom Corner's physical line.",
            sourceLessonSlug: "pgh-next-live-civics",
          },
          {
            prompt: "The CCIP is described as the 'direct descendant of Freedom Corner' because:",
            options: [
              "Because the two of them were designed by the very same city architect",
              "Because both of them were funded entirely by the Pittsburgh Penguins",
              "Because both of them sit on the exact same single parcel of city land",
              "Because a line held at Crawford and Centre in 1969 became a 2014 agreement",
            ],
            correctIndex: 3,
            explanation: "The instrument the community built is a demand, not a demolition, and it is part of the ground's record.",
            sourceLessonSlug: "pgh-next-live-civics",
          },
          {
            prompt: "How should you treat the jobs-and-dollars figures the redevelopment's own developers publish?",
            options: [
              "Attribute them to the developer and re-check them against an independent source first",
              "Adopt them directly, because cheerful good-news numbers never really need any checking",
              "Ignore every figure that anyone publishes about the project entirely",
              "Assume from the outset that all of them are deliberately and knowingly false",
            ],
            correctIndex: 0,
            explanation: "The authoritative-values rule applies to good news too. A number that flatters the party that published it is not more reliable than one that does not.",
            sourceLessonSlug: "pgh-next-live-civics",
          },
          {
            prompt: "What are the two official Allegheny County tools this course sends you to for a parcel?",
            options: [
              "A private real-estate listing website and a public transit trip-planning app",
              "A printed historical atlas from the archives and an old telephone directory",
              "The Allegheny County Real Estate Portal and the Allegheny County GIS Viewer",
              "The URA's official website and the Pittsburgh Penguins' official team website",
            ],
            correctIndex: 2,
            explanation: "The Portal gives owner of record and assessed value; the GIS Viewer gives the parcel outline and the overlapping jurisdictions.",
            sourceLessonSlug: "pgh-next-exercise-parcel",
          },
          {
            prompt: "The four facts to pull for any parcel, in any American county, are:",
            options: [
              "Square footage, exterior paint colour, roof type and total window count",
              "Parcel number, owner of record, assessed value, and overlapping jurisdictions",
              "The original architect, the builder, the first tenant and the very last tenant",
              "The current zoning, the mortgage holder, the insurer and the utility provider",
            ],
            correctIndex: 1,
            explanation: "The names of the tools change from county to county; those four facts do not.",
            sourceLessonSlug: "pgh-next-exercise-parcel",
          },
          {
            prompt: "Why is the August Wilson House a safe and useful parcel to practise on?",
            options: [
              "Because it is a private family home whose owner has agreed to be studied",
              "Because the property has no owner of record listed anywhere at all",
              "Because it sits right on the cleared ground of the Lower Hill itself",
              "Because it is a public nonprofit arts centre with a published address",
            ],
            correctIndex: 3,
            explanation: "You are not exposing anybody's home, and it contrasts the surviving Middle Hill with the cleared Lower Hill.",
            sourceLessonSlug: "pgh-next-exercise-parcel",
          },
          {
            prompt: "If the parcel's owner of record does not match the Daisy Wilson Artist Community that runs the house, that is:",
            options: [
              "Normal, and a finding: a building's operator and its titled owner are two different facts",
              "Conclusive proof that the county's official public record for the parcel must simply be wrong",
              "A perfectly good reason to stop the research on that parcel right there",
              "Clear evidence of some kind of deliberate fraud by the operating nonprofit",
            ],
            correctIndex: 0,
            explanation: "Operator and titled owner are distinct; noting the gap is exactly the kind of fact a parcel search is for.",
            sourceLessonSlug: "pgh-next-exercise-parcel",
          },
          {
            prompt: "In this course's beat 5, 'the plan is being re-decided right now' is treated as:",
            options: [
              "A frustrating dead end that makes any further citizen research effectively impossible to carry out",
              "A perfectly clear reason to give up on researching the parcel altogether",
              "The finding that gives a citizen the most leverage, since an open decision can be spoken into",
              "A quiet sign that the whole redevelopment project has already been cancelled",
            ],
            correctIndex: 2,
            explanation: "A public meeting is the cheapest civic act there is, and on this ground it is happening now.",
            sourceLessonSlug: "pgh-next-live-civics",
          },
          {
            prompt: "Who owns the Lower Hill redevelopment land now that PAR's rights have expired?",
            options: [
              "The Pittsburgh Penguins hockey organisation, owning the whole site outright and entirely on its own",
              "Two public authorities, the URA and the SEA, each with boards that meet in public",
              "The United States federal government, through one of its national housing agencies",
              "A private consortium of developers with no real public accountability at all",
            ],
            correctIndex: 1,
            explanation: "Public ownership means the decisions are made in meetings you can attend and agendas you can read.",
            sourceLessonSlug: "pgh-next-live-civics",
          },
          {
            prompt: "What does a parcel's assessed value on the county Real Estate Portal let you compare?",
            options: [
              "The overall architectural quality, style and beauty of the whole building",
              "The total number of individual people who have ever visited the property",
              "The private political opinions and affiliations of the current owner",
              "One parcel of ground against another, the cleared Hill against what survived",
            ],
            correctIndex: 3,
            explanation: "Comparing the FNB Financial Center parcel to the August Wilson House parcel puts the double absence and the survival side by side in numbers.",
            sourceLessonSlug: "pgh-next-exercise-parcel",
          },
          {
            prompt: "The instruction to 're-check every date and body before you rely on it' is described in this course as:",
            options: [
              "The method itself, not a disclaimer, especially on a site being re-decided in real time",
              "A purely optional courtesy that a careful researcher may freely skip whenever pressed for time",
              "A strict legal requirement that is formally imposed on researchers by the county",
              "A perfectly good reason not to bother writing about the contested site at all",
            ],
            correctIndex: 0,
            explanation: "Development rights change hands and agreements get amended, so verification is the work, not a footnote to it.",
            sourceLessonSlug: "pgh-next-live-civics",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 6 · Write  (beat 6: ELA and creative nonfiction, grounded in the place)
    //
    // The assignment ships as `lessonType: "assignment"` and, per the recall-placement convention,
    // carries NO recallContent (recall lives on teaching lessons). The closing lesson is a teaching
    // lesson and recalls the prior teaching lesson (16), skipping the assignment and the quizzes.
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "pgh-write-assignment",
      title: "19 · Your assignment: write one block",
      section: "Section 6 · Write",
      lessonType: "assignment",
      body: `Beat 6 asks a question no other beat can: **what can only be said about this place?** Answering it is a writing problem, and this assignment is a real one.

## The assignment
Write **900 to 1,300 words** of creative nonfiction about **one block, one building, or one address** on or near the Hill District. Every factual sentence must be checkable against a source you name. **The form is literary; the standard of evidence is the one Section 3 used.**

## August Wilson is a legitimate way in, with one hard rule
The Hill produced the playwright **August Wilson**, who set nine of the ten plays in his American Century Cycle in the neighbourhood (August Wilson House, n.d.). Writing your way into this ground through Wilson is not only allowed, it is one of the best routes, because he mapped the Hill's streets, jobs, boarding houses and music into literature more completely than any archive did. **But here is the rule you do not get to break: Wilson wrote plays, and a play is art, not a deed.** You may write about what Wilson made of a place. You may not quote a line of his dialogue as though it were a historical record of a real address, and you may not borrow one of his characters and set them down in your nonfiction as a real person. **Cite the record for the record, and cite Wilson for Wilson.** Keeping those two apart is the whole discipline of this section.

## Step 1 · Choose one address, and choose small
Pick from the institutions named in lesson 3 (the Crawford Grill, Bethel AME, the Pittsburgh Courier), or the surviving fabric in lesson 7 (the August Wilson House, the one Green Book building), or a parcel you found in lesson 17. **Smaller is better.** "The Hill" is not a subject, it is a topic. **The August Wilson House at 1727 Bedford Avenue, or the corner of Crawford and Centre where the clearance stopped, is a subject.**

If you do not live in Pittsburgh and cannot visit, that is not a disqualification. **It is a constraint you disclose in the piece**, and it changes what you can honestly claim.

## Step 2 · Build the four-column chronology before you write a sentence
Lesson 12 killed a strong argument with a table. Build your own, with these columns: **date, event, instrument, source.** If the instrument column is empty for an event, you have a story and not yet a decision. **The table is the outline.**

## Step 3 · Decide what kind of piece this is
Pick one and commit, because mixing them is what makes place writing mushy.
- **A biography of a building.** Its plan, its uses, its owners, its end or its survival.
- **A history of a decision.** One designation, one taking, one plan, one reversion, followed to the document.
- **A report on a present.** What is there now, who uses it, what the current redevelopment proposes, what a public meeting sounded like.
- **A piece about the record itself.** What you could and could not find, and what the gap means. **This is the hardest and often the best**, and it is the only one that can be written honestly with thin sources.

## Step 4 · Write it, under these craft rules
1. **Lead with a specific.** A street number, a date on a document, a figure with its source. Not a mood.
2. **Name the instrument every time you name a loss.** "The block was cleared" is weak. "The URA designated it blighted, and clearance followed under the 1949 Act" is strong, if you can source it.
3. **Give a figure its owner.** Not "8,000 people were displaced" but "the Heinz History Center reports more than 8,000 residents were displaced." When counts disagree, say so.
4. **Attribute an argument as an argument.** The claim that Pittsburgh "wrote the playbook" is exactly the kind of frame you engage rather than launder. **You tested it in lesson 12; write what survived, not the slogan.** The distinction between a documented chronology and an interpretive frame is the most important thing in this section.
5. **Use the present tense for the present.** The Hill is a living neighbourhood with a community development corporation and a redevelopment underway, not a ruin. Write it that way.
6. **One paragraph, minimum, on what you could not establish.** Required, not optional.

## Rules you do not get to break
1. **No invented detail.** Not a date, a name, a quotation, a street number, or a statistic. **If a source does not say it, you do not write it.** This includes atmospheric invention: you do not know what the room smelled like or what the music sounded like on a particular night.
2. **No composite or imagined characters, and no fictional ones on loan.** Real, cited people only. Gus Greenlee, Robert Lee Vann, the congregation of Bethel AME and August Wilson himself are real and documented. **His character Troy Maxson is not, and does not belong in your nonfiction.**
3. **No invented dialogue**, including "he might have said."
4. **Living communities describe themselves.** Use the names and terms the people who live and work on the Hill use, and say where you got them. The Hill District documents itself; **Freedom Corner, the Hill CDC and the August Wilson House are the neighbourhood's own voice, and you should read it before you write over it.**
5. **No ruin porn, and no lost golden age.** A district that ran a complete economy under segregation, produced the country's leading Black newspaper and fed the birth of bebop was not a paradise, and its clearance was not a natural death. **Both of those framings flatter the writer and cheat the subject.**
6. **Credit what was built.** The Courier, the Crawford Grill, the Pittsburgh Crawfords, Bethel AME, the musicians who came up in the jam sessions, and the residents who held the line at Freedom Corner. **A piece that only inventories loss is an incomplete report.**
7. **Private homes are private.** Do not publish a current resident's name with their address, do not photograph into windows, and do not knock uninvited. Practise on institutional and commercial addresses.
8. **Say what you did to a number.** If you adjusted for inflation, say so and say how.

## What good looks like
A short, checkable piece in which every sentence is either something you read in a named source or something you clearly mark as unresolved, and in which the prose is still good. **Those two standards do not conflict.** A neighbourhood cleared for a cultural centre that was mostly never built, an arena demolished half a century after it replaced homes, a community that stopped the bulldozers at one corner and then wrote its demands into an agreement decades later: **none of that needs decorating.**

## Sources
- August Wilson House. (n.d.). *Project overview*. Daisy Wilson Artist Community. https://augustwilsonhouse.org/project-overview.html
- Heinz History Center. (n.d.-a). *Crossroads of the world: How urban renewal changed the Hill*. Senator John Heinz History Center. https://www.heinzhistorycenter.org/blog/crossroads-of-the-world-how-urban-renewal-changed-the-hill/
- Hill District Digital History. (n.d.-b). *Freedom Corner: A rallying point for Pittsburgh activism*. https://hillhistory.org/items/show/7`,
    },
    {
      slug: "pgh-what-comes-next",
      title: "20 · What this course set up, and what it left out",
      section: "Section 6 · Write",
      body: `You have now run the six-beat site template a second time, on a second real place. **That template is the product of this series, more than any single neighbourhood's material is.**

| Beat | What you did here | What you can now do anywhere |
|---|---|---|
| **1. Then** | Read the Hill out of the Green Book and the Pittsburgh Courier | Establish what a place was, from institutional sources rather than memory |
| **2. Built** | Read a superblock and a domed arena, then a double absence | Tell what replaced a fabric, and read a building as an argument |
| **3. Powers** | Named the law, the authority, the designation, eminent domain and the partnership, then tested the export of the model | Ask "who decided, under what statute, on what record," and test a thesis against a chronology |
| **4. Now** | Built an observation brief before seeing the place | Look at a street with questions instead of impressions |
| **5. Next** | Found the redevelopment, the owners, the benefits agreement and the parcel | Participate in a live decision rather than commenting on a finished one |
| **6. Write** | Wrote grounded nonfiction under an evidence standard | Publish something the next researcher can build on |

**What this course added that the Indiana Avenue course could not.** Indianapolis showed you five instruments and stopped. Pittsburgh let you ask where the instruments came from, and the answer turned out to be more honest and more interesting than the title's first promise. **The playbook that was written in Pittsburgh is the public-private partnership, assembled early and shown off to more than seventy visiting delegations. The clearance itself spread through the federal Housing Act of 1949 and parallel state laws, upheld for every city by Berman v. Parker.** You did not take the course's own headline on faith. You tested it, weakened it, and kept the part that survived. **That is the transferable skill, and it matters more than any fact in this file.**

**What you can do that you could not do before.**
- Name the enabling law and the authority behind a clearance, not just the clearance.
- Test a city's proudest story about itself against a table of dates, and report the result when the story loses.
- Tell a claim about a document from a claim about the world. **"Pittsburgh was visited by seventy delegations who admired its partnership" is the first. "Seventy cities copied Pittsburgh's clearance of the Hill" is the second, and it is not supported.**
- Find the four facts about any parcel in any American county.
- Recognise that ground being re-decided right now is where a citizen has the most leverage.

**What this course deliberately did not cover, and why.**
- **The wider Pittsburgh Renaissance.** Gateway Center, the smoke-control and flood-control programs, and the Point State Park development are the projects the delegations actually came to see. **They are the other half of the URA's story and they get their own treatment**, because a course that folded them in would lose the Hill in the celebration, which is exactly the substitution lesson 12 warned against.
- **The Negro League and the numbers economy.** Gus Greenlee, the Pittsburgh Crawfords and the money that funded the Crawford Grill are named here only as far as they touch the corridor. Each is a course of its own.
- **August Wilson's plays as literature.** The Century Cycle is referenced here as evidence that the Hill became a setting for major American art, not read as drama. **The plays are their own study**, and this course was careful not to treat them as a historical record of real addresses.
- **The individual condemnations.** No single displaced household's dated offers and settlement have been read into this course, unlike the Temple family in the Indiana Avenue course. **Section 3 says so in the text**, which is a better outcome than an invented case.

**The unopened sources, which are the next real work.** The URA's Lower Hill project files. The Allegheny Conference on Community Development records. The individual condemnation and acquisition files in Allegheny County. The Pittsburgh Courier's own run, readable on microfilm, which covered the clearance of its own neighbourhood as it happened. **All public or requestable, and none of them read into this course.** If you want to make an original contribution to this story rather than restate it, that is the list, and the Courier is the place to start, because the paper watched the machine come for the Hill and wrote it down.

**One last thing about the place.** The people who built the Hill District built a jazz foundry, the country's leading Black newspaper, a Negro League ball club and a set of anchor churches, inside a country that would not serve them, and they did it well enough that a Harlem Renaissance poet called their neighbourhood the Crossroads of the World. The Lower Hill of it was cleared for a cultural centre that was mostly never built, and the arena that replaced it is gone too. **But the neighbourhood did not end at the arena's edge, the record of who built the Hill is not gone, and the people who held the line at Freedom Corner are still holding it, now in writing.** That record is sitting in a travel guide, a newspaper run, a redevelopment file, a parcel database and a community's own archive, waiting for somebody to read it properly. **That is the whole method, and it is why this course exists.**

## Sources
- August Wilson House. (n.d.). *Project overview*. Daisy Wilson Artist Community. https://augustwilsonhouse.org/project-overview.html
- Heinz History Center. (n.d.-a). *Crossroads of the world: How urban renewal changed the Hill*. Senator John Heinz History Center. https://www.heinzhistorycenter.org/blog/crossroads-of-the-world-how-urban-renewal-changed-the-hill/
- Neumann, T. (2016, February 1). *The "spiritual capital" of the Rust Belt: Pittsburgh and the postindustrial transformation of North Atlantic cities*. Global Urban History. https://globalurbanhistory.com/2016/02/01/the-spiritual-capital-of-the-rust-belt-pittsburgh-and-the-postindustrial-transformation-of-north-atlantic-cities/`,
      recallContent: [
        {
          prompt: "What are the four questions to ask about any parcel's future, in order?",
          answer: "What does the current plan say this land should become; what is actually being built and by whom; is there a community benefits agreement and what did the community demand; and who is the decision-making body, and is the process public.",
        },
        {
          prompt: "What is the current status of the Lower Hill redevelopment, and why is 'being re-decided' good news for a citizen?",
          answer: "PAR, the Penguins subsidiary, held development rights for 18 years; they expired in October 2025 and reverted to the URA and SEA, leaving about 21 acres being re-evaluated through a public process. A decision still open is one a citizen can speak into at a public meeting.",
        },
        {
          prompt: "What is the 2014 CCIP, and how does it connect to Freedom Corner?",
          answer: "The Community Collaboration and Implementation Plan, a Hill District benefits agreement covering affordable housing, Greater Hill investment, arts preservation, job access and MBE participation. It is the written descendant of Freedom Corner: in 1969 a physical line against clearance, in 2014 a signed agreement over what redevelopment owes the neighbourhood.",
        },
        {
          prompt: "How should you treat the jobs-and-dollars figures the redevelopment's developers publish?",
          answer: "Attribute them to the developer and re-check them against an independent source before repeating them. The authoritative-values rule applies to good news too; a flattering number is not more reliable than any other.",
        },
      ],
    },
    // <<< APPEND NEXT SECTION ABOVE THIS LINE >>>
  ],
};
