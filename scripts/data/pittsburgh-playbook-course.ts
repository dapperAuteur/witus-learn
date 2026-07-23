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
    // <<< APPEND NEXT SECTION ABOVE THIS LINE >>>
  ],
};
