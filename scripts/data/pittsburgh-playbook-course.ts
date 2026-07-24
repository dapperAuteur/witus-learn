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
              "Entirely Black, homogeneous and closed to outside communities",
              "Majority white, with only a very small and shrinking Black minority",
              "Evenly split between two single groups and no others",
              "Majority Black and genuinely mixed, with Italian and Eastern European Jewish communities and others",
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
              "A document, not a full inventory; the true number of Black-owned businesses was far larger",
              "The number of jazz clubs on the Hill specifically",
            ],
            correctIndex: 2,
            explanation: "Coverage is not inventory. The Green Book recorded what was reported to its network, never everything that existed.",
            sourceLessonSlug: "pgh-green-book-and-courier",
          },
          {
            prompt: "What was the Pittsburgh Courier?",
            options: [
              "A Hill District newspaper, founded 1907, that became the country's largest Black newspaper under Robert Lee Vann",
              "The official printed bulletin of the Pittsburgh city government and its planning commission",
              "A jazz record label operating out of the Crawford Grill in the 1930s and 1940s",
              "A short-lived neighbourhood flyer that folded within a few years",
            ],
            correctIndex: 0,
            explanation: "Its national reach ran down the migration routes this series studies, so the Hill both received travelers and told others where to travel.",
            sourceLessonSlug: "pgh-green-book-and-courier",
          },
          {
            prompt: "Why does the Pittsburgh Courier matter specifically to a route and migration course?",
            options: [
              "Because it printed the Green Book each year",
              "Because it owned and operated the Crawford Grill",
              "Because it was written entirely in a Pittsburgh dialect",
              "Because it was one of the engines of the Great Migration's northward pull",
            ],
            correctIndex: 3,
            explanation: "A neighbourhood that produces the country's leading Black newspaper is a capital, not a backwater with good music.",
            sourceLessonSlug: "pgh-green-book-and-courier",
          },
          {
            prompt: "When searching for a Hill District business name, why must you carry the city and state?",
            options: [
              "Because the Green Book deliberately omitted all street numbers and cross streets",
              "Because 'Hill District' is a common place name and a name-only search collects other cities",
              "Because Pennsylvania sealed its historical records to researchers",
              "Because the Courier changed the business names between editions",
            ],
            correctIndex: 1,
            explanation: "It is the same trap as the Thurman hotel in French Lick from the Indiana Avenue course. Always carry Pittsburgh, Pennsylvania, Allegheny County.",
            sourceLessonSlug: "pgh-green-book-and-courier",
          },
          {
            prompt: "Who founded the Crawford Grill in 1930?",
            options: [
              "The publisher and editor Robert Lee Vann",
              "The financier Richard King Mellon, of the Allegheny Conference",
              "William 'Gus' Greenlee, who ran the numbers game and owned the Pittsburgh Crawfords",
              "The father of the playwright August Wilson",
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
              "Because its Lower Hill building still stands unchanged today",
              "Because it was never actually located in the Lower Hill",
              "Because it kept no records of its congregation",
              "Because a congregation outlives its building, so the displaced remain a living, named body that has sought reparations",
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
              "Only a set of entertainment venues",
              "A set of buildings that the Civic Arena later preserved",
              "A stage, a sanctuary and a printing press: a culture, a faith and a voice",
              "Institutions that all depended on city government funding",
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
              "Because the neighbourhood no longer exists at all",
              "Because all of its historical records were destroyed",
              "Because its descendants have all left Pittsburgh for the surrounding suburbs",
              "Because it is a living neighbourhood with active residents, churches, a CDC and a planning process running now",
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
          prompt: "What does this lesson deliberately NOT yet tell you?",
          answer: "Who decided, and under what legal power. That is Section 3. 'The neighbourhood was cleared' is a description, not an instrument.",
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
          prompt: "What is the difference between 'the Hill District' and 'the Lower Hill', and why does it matter?",
          answer: "The Lower Hill is the roughly 95 acres closest to downtown that were cleared. The Middle and Upper Hill were not cleared the same way and remain a living neighbourhood. Saying 'the Hill was destroyed' is wrong on the geography and unfair to the people who still live there.",
        },
        {
          prompt: "What is the August Wilson House, and why is it evidence of survival rather than loss?",
          answer: "August Wilson's restored childhood home at 1727 Bedford Avenue in the Middle Hill, now a nonprofit arts centre run by the Daisy Wilson Artist Community. Nine of his ten Century Cycle plays are set in the Hill. A house that runs programmes today is the neighbourhood still speaking for itself.",
        },
        {
          prompt: "Does National Register listing stop an owner from demolishing a building?",
          answer: "No. Federal listing is recognition plus review leverage when federal money or a permit is involved, plus some tax credits. Local designation under a city ordinance is what normally regulates demolition, and only when a commission enforces it.",
        },
        {
          prompt: "What happened when preservationists tried to save the Civic Arena itself around 2010?",
          answer: "It failed. The reviewing bodies declined to grant it historic status and the courts declined to stop the demolition. The designation tool that could not save the neighbourhood could not save the building that replaced it either.",
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
              "Any historical cause of a neighbourhood's decline",
              "A newspaper account of a public decision",
              "A specific legal power, exercised by a specific body, under a specific statute, leaving a specific document",
              "A tool used to demolish a building",
            ],
            correctIndex: 2,
            explanation: "The last clause is what makes history researchable: if a power was exercised, a named record exists.",
            sourceLessonSlug: "pgh-powers-law-and-authority",
          },
          {
            prompt: "What did the Pennsylvania Urban Redevelopment Law of 1945 do?",
            options: [
              "It authorised municipalities to create Redevelopment Authorities that could designate blighted areas, acquire and clear them, and contract with redevelopers",
              "It built the Civic Arena directly",
              "It merged Pittsburgh with surrounding Allegheny County",
              "It banned racial covenants in Pittsburgh housing",
            ],
            correctIndex: 0,
            explanation: "The law creates a new legal body with powers no ordinary city department has: to designate, acquire, clear and convey.",
            sourceLessonSlug: "pgh-powers-law-and-authority",
          },
          {
            prompt: "How does the URA describe its own place in redevelopment history, and how should you repeat it?",
            options: [
              "As the first redevelopment authority in the world",
              "As the first redevelopment authority in the United States",
              "As having no claim to being early at all",
              "As 'one of the first redevelopment authorities in Pennsylvania,' which is the version to repeat rather than inflate",
            ],
            correctIndex: 3,
            explanation: "When you repeat an institution's claim about itself, repeat the version it actually makes. The URA says 'one of the first in Pennsylvania.'",
            sourceLessonSlug: "pgh-powers-law-and-authority",
          },
          {
            prompt: "The Allegheny Conference on Community Development was:",
            options: [
              "A federal agency created by the Housing Act of 1949",
              "An organisation of Pittsburgh business leaders formed in 1944, around Richard King Mellon, that worked with city hall to direct redevelopment",
              "A neighbourhood group from the Hill District",
              "The URA's in-house demolition contractor",
            ],
            correctIndex: 1,
            explanation: "Business elites plus elected officials, pulling together, is the public-private machine this section takes apart.",
            sourceLessonSlug: "pgh-powers-law-and-authority",
          },
          {
            prompt: "In September 1955, what happened to the Lower Hill?",
            options: [
              "The Civic Arena opened to the public",
              "The neighbourhood was added to the National Register of Historic Places",
              "The federal government approved the Lower Hill redevelopment plan, slating about 95 acres for clearance, and clearance began",
              "The Allegheny Conference was first formed",
            ],
            correctIndex: 2,
            explanation: "The designation and federal approval are the hinge; the clearance follows from them.",
            sourceLessonSlug: "pgh-powers-designation",
          },
          {
            prompt: "Why is 'blighted' called a legal conclusion rather than a description?",
            options: [
              "A body reaches it on a record against statutory criteria, and it unlocks acquisition and clearance powers that do not otherwise exist",
              "Because only lawyers are allowed to use the word",
              "Because it can never be appealed or challenged",
              "Because it applies only to empty land with no buildings",
            ],
            correctIndex: 0,
            explanation: "Before the designation the powers do not exist; after it, they do. That is why you start research at the designation.",
            sourceLessonSlug: "pgh-powers-designation",
          },
          {
            prompt: "The varying Lower Hill counts (about 1,300 buildings, 413 businesses, 1,600 families, over 8,000 people) should be handled how?",
            options: [
              "Pick the largest figure in every category",
              "Average all the published figures together into one number",
              "Ignore them because they disagree",
              "Carry the source with each number, because sources count different things, and suspect a stray zero when a figure is ten times its neighbours",
            ],
            correctIndex: 3,
            explanation: "'Thirteen thousand buildings' is a transcription slip for 1,300. Attribute figures; do not adopt or blend them.",
            sourceLessonSlug: "pgh-powers-designation",
          },
          {
            prompt: "What did Berman v. Parker (1954) establish?",
            options: [
              "That urban renewal was unconstitutional",
              "That a government may condemn property for urban renewal even where a building is not itself run down and the cleared land goes to private redevelopers",
              "That only the federal government could use eminent domain",
              "That Pittsburgh could annex Allegheny County",
            ],
            correctIndex: 1,
            explanation: "Berman is the legal ground the national urban-renewal program stood on, decided the year before the Lower Hill plan was approved.",
            sourceLessonSlug: "pgh-powers-eminent-domain-partnership",
          },
          {
            prompt: "The three-part mechanism this course says you can find in any renewal-era city is:",
            options: [
              "Designation, condemnation, and a public-private partnership that directs and finances redevelopment",
              "A referendum, a bond issue, and a groundbreaking ceremony",
              "A highway, a stadium, and a parking garage",
              "A census, a zoning map, and a tax abatement",
            ],
            correctIndex: 0,
            explanation: "Designation makes land clearable, eminent domain acquires it, and the partnership supplies direction and the redeveloper the land is conveyed to.",
            sourceLessonSlug: "pgh-powers-eminent-domain-partnership",
          },
          {
            prompt: "What individual record does this course honestly admit it has NOT read into itself?",
            options: [
              "The date the Civic Arena opened",
              "An individual Lower Hill condemnation file with one household's dated offers and settlement, of the kind the Indiana Avenue course had for the Temple family",
              "The acreage of the Lower Hill",
              "The name of the Pittsburgh Courier",
            ],
            correctIndex: 1,
            explanation: "Those files exist in Allegheny County's records and the URA's project files. Reporting the gap is more accurate than borrowing a number.",
            sourceLessonSlug: "pgh-powers-eminent-domain-partnership",
          },
          {
            prompt: "Historian Tracy Neumann documents that in the 1950s and 1960s Pittsburgh was visited by:",
            options: [
              "A single delegation from Washington, D.C.",
              "No outside delegations at all",
              "Only delegations from within Pennsylvania",
              "More than seventy national and international delegations who hoped to replicate the Renaissance",
            ],
            correctIndex: 3,
            explanation: "Visitors came from Dayton, Detroit, Canada, Australia, Brazil, Belgium, Germany and Scotland. Pittsburgh as a studied model is documented, not guessed.",
            sourceLessonSlug: "pgh-powers-export-of-model",
          },
          {
            prompt: "What did those delegations actually come to Pittsburgh to replicate?",
            options: [
              "A manual for clearing a Black neighbourhood, block by block",
              "The public-private partnership and the downtown clean-up: smoke control, flood control and Gateway Center",
              "The design of the Civic Arena's retractable roof",
              "The Pittsburgh Courier's newspaper business model",
            ],
            correctIndex: 1,
            explanation: "A delegation admiring Gateway Center and the smoke ordinance is not a city carrying home a clearance manual. Keep the two apart.",
            sourceLessonSlug: "pgh-powers-export-of-model",
          },
          {
            prompt: "What actually spread the clearance instruments across the country, rather than cities copying Pittsburgh?",
            options: [
              "A private consulting firm based in Pittsburgh",
              "The Pittsburgh Courier's national circulation",
              "The federal Housing Act of 1949 and parallel state redevelopment laws, upheld for every city by Berman v. Parker",
              "The Allegheny Conference's membership dues",
            ],
            correctIndex: 2,
            explanation: "Pittsburgh's own Lower Hill clearance rode the same Title I federal money as everyone else. The kit was national.",
            sourceLessonSlug: "pgh-powers-export-of-model",
          },
          {
            prompt: "Testing the 'other cities copied Pittsburgh' thesis against the chronology shows that:",
            options: [
              "It fails as a copy-chain, because Indianapolis and Washington ran their own machinery on the same 1940s timeline, and what Pittsburgh exported was a partnership reputation, not a clearance manual",
              "Pittsburgh single-handedly caused every later clearance",
              "No American city ever cleared a Black neighbourhood",
              "The chronology is unknowable, so the thesis cannot be tested",
            ],
            correctIndex: 0,
            explanation: "The surviving, weaker claim is that Pittsburgh was an early, emulated model of the partnership, one prominent reference case rather than the sole origin.",
            sourceLessonSlug: "pgh-powers-test-the-playbook",
          },
          {
            prompt: "The 'rare double absence' at the heart of this course is:",
            options: [
              "That two different neighbourhoods were cleared on the same day",
              "That both the Pittsburgh Courier and the Crawford Grill closed in the same year",
              "That the Lower Hill appears in neither the Green Book nor the census",
              "That the neighbourhood was cleared in 1955 for the Civic Arena, and the arena itself was then demolished between September 2011 and March 2012",
            ],
            correctIndex: 3,
            explanation: "The ground at the edge of downtown has been cleared twice in one lifetime, and it is a redevelopment site again today.",
            sourceLessonSlug: "pgh-powers-test-the-playbook",
          },
        ],
      },
    },
    // <<< APPEND NEXT SECTION ABOVE THIS LINE >>>
  ],
};
