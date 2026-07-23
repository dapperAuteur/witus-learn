// Authored "Indiana Avenue: A District and What Replaced It" — a cited, high-school-and-up SITE
// course on Learn.WitUS (Culture & History), and the PILOT of the route-course series planned in
// plans/37-green-book-route-courses.md and plans/39-indianapolis-pilot-cluster.md. It is course 1
// of the Indianapolis cluster and the first course to run the six-beat site template end to end,
// one beat per section: Then, Built, Powers, Now, Next, Write.
//
// Prerequisite: `green-book-how-to-read-a-route` teaches the METHOD (read a listing, chain a
// route, research an address forward). This course APPLIES that method to one place.
//
// Sourcing discipline (the load-bearing part of this file):
//   * Every teaching lesson carries APA 7 in-line citations and a `## Sources` bibliography.
//   * The Green Book listings for Indiana Avenue are NOT asserted from memory. They are read from
//     Table 6 of the National Register multiple property documentation form "Green Book Sites in
//     Indiana, 1936-1967" (Borland & Linebarger, 2025), prepared by Gray & Pape for the Indiana
//     DNR Division of Historic Preservation and Archaeology, whose own research was done against
//     the NYPL digitized editions. Business names, street numbers and year ranges are transcribed
//     from that table, not reconstructed.
//   * NO INVENTED STATISTIC, PERSON, QUOTATION, ADDRESS, OR LISTING. Where a figure is contested
//     the course gives the competing numbers WITH who produced them and what each counted
//     (Lockefield's unit count, the 17,000 displaced figure's scope).
//   * THE SPINE IS WEAKENED ON PURPOSE. plans/39 proposed the 1970 Unigov consolidation as the
//     single decision linking the district, the schools and the suburbs. The sources support the
//     schools-and-suburbs half completely and the district half NOT AT ALL: every documented
//     instrument that took the Avenue's buildings (the 1945 blight law, the 1954 and 1956 blight
//     declarations, the 1958 campus plan, the 1957 freeway announcement, IU's 1964 to 1966 parcel
//     purchases) predates Unigov. Lesson 13 states this plainly and teaches chronology as the test
//     that broke the argument. Reporting a thinner spine is the finding, not a failure.
//   * The Avenue's people are credited for what they built (Walker, Ransom, the Flanner House
//     self-help houses, the musicians, the Recorder), not only mourned for what was taken. No
//     ruin-porn and no "lost golden age": the corridor is a live cultural district with a city
//     planning process running on it right now, which is what beat 5 sends the learner to read.
//
// House rule: NO em-dashes or en-dashes in prose. Verbatim cited titles and page ranges inside a
// `## Sources` block are the only place a dash survives.

import type { AuthoredCourse } from "./authored-course";

export const INDIANA_AVENUE_COURSE: AuthoredCourse = {
  title: "Indiana Avenue: A District and What Replaced It",
  description:
    "A cited, high-school-and-up site course on Indiana Avenue in Indianapolis: the Black business and cultural corridor that held the Madam C.J. Walker Building, a jazz scene with national reach, and dozens of Green Book listed businesses, and the documented decisions that removed most of it. This is the PILOT of the route-course series, and it applies a method rather than telling a story. The prerequisite course, The Green Book: How to Read a Route, teaches you to read a listing, chain a route, and research an address forward; this course takes that method to one nine-block corridor and asks the harder question: who decided, under which instrument, on what record. You will learn the actual tools of the decision (the blight designation, eminent domain, the highway alignment, a university assembling land, and the redrawing of a city's boundary in the 1970 Unigov consolidation), test a proposed historical argument against a chronology and watch part of it fail, look up a real parcel in Marion County's own records, find the plan currently being written for this ground, and write a piece of grounded nonfiction about it. A 360 tour of the corridor is planned and will be added to the Now section when it is captured.",
  lessons: [
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 1 · Then  (beat 1: US and state/local history)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "ia-what-it-was",
      title: "1 · The Avenue: what it was, and who it was for",
      section: "Section 1 · Then",
      body: `**Start with the prerequisite.** This course assumes you have finished *The Green Book: How to Read a Route*. That course taught a method: open a digitized edition, read a listing down to its abbreviations and its silences, chain listings into a route, read a gap as evidence, and research an address forward to what stands there now. **This course applies that method to one place**, and then goes one step further than the method course could: it asks who decided what happened to the place, and shows you where that decision is written down.

**The place.** Indiana Avenue is one of four diagonal streets on Alexander Ralston's 1821 plat of Indianapolis, running northwest out of the Mile Square from the corner of Illinois and Ohio streets. Over the second half of the nineteenth century and the first decades of the twentieth it became the commercial and social centre of Black Indianapolis. By 1880 the census recorded 115 of the Avenue's residents as Black or "mulatto." **By 1920, 77 percent of the Avenue's residents were identified as Black** (Encyclopedia of Indianapolis, n.d.-a).

**What it held.** A 1916 study counted, within eight blocks, "33 restaurants, 33 saloons, 26 grocery stores, 17 barbers/hair stylists, 16 tailors and clothing retailers, 14 cobblers, 13 dry goods stores, as well as drugstores, pawnbrokers, pool halls, funeral parlors, and offices of lawyers, physicians, dentists, and real estate agents" (Thornbrough, as cited in Borland & Linebarger, 2025, pp. 14-15). Read that list slowly. It is not a strip of nightclubs. It is a complete local economy: you could eat, get your shoes fixed, buy a suit, see a doctor, hire a lawyer, bury a relative, and borrow money, without leaving the corridor and without being refused service.

**Why that mattered is the whole point.** The historic context prepared for the Indiana Department of Natural Resources puts the reason plainly: by building businesses inside their own neighbourhoods, Black Americans "were able to exist without facing the near constant humiliation, disrespect, and animosity they regularly encountered in the world at large" (Borland & Linebarger, 2025, p. 27). A district like this is not only culture. It is infrastructure for ordinary dignity.

**Who it was for, precisely.** Two audiences at once, and the difference matters when you read the record.
1. **Residents.** The people who lived in the surrounding blocks, including Ransom Place immediately to the north and the Lockefield Gardens apartments that opened in February 1938 (Encyclopedia of Indianapolis, n.d.-b, n.d.-c).
2. **Travelers.** Black motorists passing through, and Black performers working a circuit. Section 1's next lesson reads that second audience directly out of the Green Book.

**The Avenue was also a place white Indianapolis came to.** The DNR context notes that the Avenue's theatres, vaudeville houses and dance halls "often attracted both Black and white customers" (Borland & Linebarger, 2025, p. 27). Hold onto that: a segregated city still had a corridor its white residents chose to visit, which is a fact about the Avenue's pull rather than about the city's fairness.

**A warning about tone, which is a research instruction and not a courtesy.** The people who built this district have living descendants, and their neighbourhood organisations are active right now. Do not write about the Avenue as a vanished golden age. Write about what people built, name them where the record names them, and keep the vanishing for the parts you can document. **Every framing choice in this course is checkable against a source, and so should yours be.**

## Sources
- Borland, A., & Linebarger, E. (2025). *Green Book sites in Indiana, 1936-1967* [National Register of Historic Places multiple property documentation form]. Gray & Pape, Inc., for the Indiana Department of Natural Resources, Division of Historic Preservation and Archaeology. https://www.in.gov/dnr/historic-preservation/files/hp-Green-Book-Sites-in-Indiana.pdf
- Encyclopedia of Indianapolis. (n.d.-a). *Indiana Avenue*. https://indyencyclopedia.org/indiana-avenue/
- Encyclopedia of Indianapolis. (n.d.-b). *Ransom Place*. https://indyencyclopedia.org/ransom-place/
- Encyclopedia of Indianapolis. (n.d.-c). *Lockefield Gardens*. https://indyencyclopedia.org/lockefield-gardens/`,
      recallContent: [
        {
          prompt: "What is Indiana Avenue, geographically, and how old is the street?",
          answer: "One of four diagonal streets on Alexander Ralston's 1821 plat of Indianapolis, running northwest out of the Mile Square from Illinois and Ohio streets.",
        },
        {
          prompt: "What did a 1916 study find within eight blocks of the Avenue?",
          answer: "33 restaurants, 33 saloons, 26 grocery stores, 17 barbers and hair stylists, 16 tailors and clothing retailers, 14 cobblers, 13 dry goods stores, plus drugstores, pawnbrokers, pool halls, funeral parlors, and the offices of lawyers, physicians, dentists and real estate agents.",
        },
        {
          prompt: "Why is that list of businesses evidence of something more than commerce?",
          answer: "It is a complete local economy. A resident could meet every ordinary need inside the corridor without risking being refused service, which the DNR historic context describes as existing without the constant humiliation encountered in the world at large.",
        },
        {
          prompt: "Which prerequisite course does this one build on, and what does it teach?",
          answer: "The Green Book: How to Read a Route. It teaches the method: read an edition and a listing, read a gap as evidence, chain listings into a route, and research an address forward to today.",
        },
      ],
    },
    {
      slug: "ia-green-book-listings",
      title: "2 · Reading the Avenue out of the Green Book",
      section: "Section 1 · Then",
      body: `Now apply the method. You are going to read one street out of a travel guide, and then notice what the reading does and does not prove.

**Where these listings come from.** The Indiana Department of Natural Resources compiled every Indiana entry that appeared in any edition of the Green Book, ran a desktop survey to find which buildings still stand, then used a National Park Service Underrepresented Communities grant to hire consultants to field-check the surviving sites and write a National Register multiple property documentation form. **There were 197 Indiana entries in total, across 21 communities** (Borland & Linebarger, 2025, pp. 104-105). The table below is transcribed from that form. The form's own research was done against the digitized editions held by the New York Public Library, so you can check any line of it yourself.

**Indiana Avenue entries, as printed in the documentation form.**

| Business | Address | Green Book years | Category |
|---|---|---|---|
| Mayes Café | 503 Indiana Avenue | 1939-1941; 1946-1955 | Tavern |
| Hambric Café | 510 Indiana Avenue | 1939-1941; 1946-1947 | Tavern |
| Lasley's | 510 Indiana Avenue | 1940-1941; 1946-1958 | Restaurant |
| Panama | 306 Indiana Avenue | 1946-1955 | Tavern |
| Stormy Weather | 319 Indiana Avenue | 1946-1951 | Restaurant |
| A.B.'s | 413 Indiana Avenue | 1946-1949 | Restaurant |
| Hawaii | 406 Indiana Avenue | 1946-1959 | Hotel |
| Marquis | 406 Indiana Avenue | 1953-1954 | Hotel |
| Log Cabin | 524 Indiana Avenue | 1946-1958 | Restaurant |
| Yee Sen | 545 Indiana Avenue | 1946-1949 | Chinese restaurant |
| Stephens & Childs | 527 Indiana Avenue | 1946-1951 | Beauty parlor |
| Ethical | 642 Indiana Avenue | 1946-1951 | Drug store |
| Ethical | 628 Indiana Avenue | 1952-1955 | Drug store |
| Blue Eagle | 648 Indiana Avenue | 1946-1962 | Tavern and restaurant |
| Blue Eagle Inn | 648 Indiana Avenue | 1950-1955 | Night club |
| Blue Eagle | 701 Indiana Avenue | 1963-1967 | Restaurant |
| Midway | 736 Indiana Avenue | 1946-1952 | Tavern |
| Sunset | 875 Indiana Avenue | 1946-1955 | Tavern |
| Green's | Indiana and California Avenue / 709 Indiana Avenue | 1946-1948 | Restaurant |
| Anderson | Indiana Avenue (no number printed) | 1946-1947 | Hotel |
| Dick Shaw's | 451 Indiana Avenue | 1950-1953 | Tavern |
| Avenue Liquor | 402 Indiana Avenue | 1950-1955 | Liquor store |
| 799 Liquor Store | 799 Indiana Avenue | 1950-1955 | Liquor store |
| Down Beat | 1005 Indiana Avenue | 1950-1955 | Tavern |
| Downbeat | 977 Indiana Avenue | 1954-1955 | Tavern |
| Perkins | 793 Indiana Avenue | 1950-1967 | Restaurant |
| Andrew Perkins | 793 Indiana Avenue | 1951-1954 | Tavern |
| Terry's | 233 Indiana Avenue | 1951-1954 | Beauty parlor |
| Mary Childs | 721 Indiana Avenue | 1951-1955 | Beauty parlor |
| Westmorland | 701 Indiana Avenue | 1961 | Restaurant |
| Ritz | Senate and Indiana | 1946-1955 | Tavern |

(Borland & Linebarger, 2025, pp. 108-110.)

**Five things a careful reader gets out of that table, in order of how much they are worth.**

**1. Street numbers give you a length.** The entries run from 233 to 1005 Indiana Avenue. That is the listed span, and it is roughly the nine-block corridor the Encyclopedia of Indianapolis describes (Encyclopedia of Indianapolis, n.d.-a). You now have a testable geography rather than a vibe.

**2. Categories reproduce the 1956 editorial change you already know.** Notice that the beauty parlors, drug stores, liquor stores and taverns almost all stop at 1955. That is not the Avenue emptying out in 1956. It is the Green Book itself narrowing to lodging and restaurants beginning with the 1956 edition, exactly as the method course taught. **The one Avenue business that runs the whole way to 1967 is Perkins Restaurant at 793.** A restaurant is in a category the guide kept.

**3. The same address changes hands, and the same name changes address.** 406 Indiana Avenue is the Hawaii hotel from 1946 to 1959 and also the Marquis hotel in 1953 and 1954. Blue Eagle is at 648 through 1962 and at 701 from 1963. Ethical drug store moves from 642 to 628 in 1952. **Those are ordinary business facts, and they are also a research warning:** a listing pins a name to a number in a year, not forever.

**4. One entry has no street number at all.** The Anderson hotel is printed as "Indiana Avenue" with nothing else. If you wanted to find that building you would have to work from city directories and Sanborn maps, which is precisely the harder version of the assignment in the method course.

**5. There is a trap in this dataset, and you should fall into it once.** The same documentation form lists the **Thurman hotel at 222 Indiana Avenue, 1939-1941 and 1946-1952, in French Lick, Indiana** (Borland & Linebarger, 2025, p. 111). French Lick is about 100 miles south of Indianapolis and has its own Indiana Avenue. A search on street name alone would put that hotel on this corridor. **Always carry the city.**

**What this table does not prove.** It does not prove that these were the only Black-owned businesses on the Avenue, or the best ones, or even that all of them were Black-owned. The Green Book recorded what someone reported to Victor Green's network, which the method course established as the guide's defining limit. The 1916 count of more than 180 businesses in eight blocks sits beside about 30 Avenue listings across thirty years of the guide. **The gap between those two numbers is the guide's coverage, not the Avenue's inventory.**

## Sources
- Borland, A., & Linebarger, E. (2025). *Green Book sites in Indiana, 1936-1967* [National Register of Historic Places multiple property documentation form]. Gray & Pape, Inc., for the Indiana Department of Natural Resources, Division of Historic Preservation and Archaeology. https://www.in.gov/dnr/historic-preservation/files/hp-Green-Book-Sites-in-Indiana.pdf
- Encyclopedia of Indianapolis. (n.d.-a). *Indiana Avenue*. https://indyencyclopedia.org/indiana-avenue/
- Indiana Department of Natural Resources, Division of Historic Preservation and Archaeology. (n.d.). *Mapping the Green Book in Indiana*. https://www.in.gov/dnr/historic-preservation/public-outreach/green-book
- New York Public Library. (n.d.). *Green Book research guide*. https://libguides.nypl.org/greenbook`,
      recallContent: [
        {
          prompt: "How many Green Book entries did Indiana have in total, across how many communities, and who compiled the list?",
          answer: "197 entries across 21 communities, compiled by the Indiana DNR Division of Historic Preservation and Archaeology and documented by Gray & Pape in the 2025 National Register multiple property form.",
        },
        {
          prompt: "What span of street numbers do the Indiana Avenue listings cover, and why is that useful?",
          answer: "233 to 1005 Indiana Avenue. It gives you a testable length for the district rather than an impression, and it matches the roughly nine-block corridor described elsewhere.",
        },
        {
          prompt: "Why do most Indiana Avenue beauty parlors, drug stores and liquor stores stop appearing after 1955?",
          answer: "Because the 1956 edition narrowed the guide to lodging and restaurants almost exclusively. It is an editorial change in the book, not a change on the street.",
        },
        {
          prompt: "Which single Indiana Avenue business is listed continuously from 1950 to 1967, and why did it survive the category cut?",
          answer: "Perkins Restaurant at 793 Indiana Avenue. Restaurants were one of the two categories the guide kept after 1956.",
        },
        {
          prompt: "There is a Thurman hotel at 222 Indiana Avenue in the Indiana Green Book data. Why must you not put it on this corridor?",
          answer: "It is in French Lick, about 100 miles south, which has its own Indiana Avenue. A listing is only located when you carry the city as well as the street.",
        },
      ],
    },
    {
      slug: "ia-music-and-institutions",
      title: "3 · The music, and the institutions around it",
      section: "Section 1 · Then",
      body: `A corridor is not only shops. Three other things sat on or beside this one, and each of them leaves a different kind of record.

**The music.** The Encyclopedia of Indianapolis dates the golden age of Indianapolis jazz to **1945 to 1965**, the period when local musicians reached national and international recognition. Documented Avenue and near-Avenue venues include the **Cotton Club, Sunset Terrace, George's Bar, Henri's, the Red Keg, the Red Rooster, the Ritz Lounge, the Sky Club, the Trianon Ballroom, and the Walker Casino** (Encyclopedia of Indianapolis, n.d.-d). Musicians documented in the same entry include **Wes Montgomery, J.J. Johnson, Freddie Hubbard and James Spaulding**, with the Montgomery Brothers performing at Henri's Cafe Lounge in the 1950s.

Two of those venue names should look familiar. **Sunset Terrace opened in December 1937 and staged its last shows in April 1966** (Encyclopedia of Indianapolis, n.d.-a), and there is a **Sunset tavern at 875 Indiana Avenue in the Green Book from 1946 to 1955** (Borland & Linebarger, 2025, p. 109). Do not weld those two records together without checking. A shared word in a name is a lead, not an identification. **Confirming that they are the same establishment is exactly the corroboration step the method course put in step 2 of its assignment**, and a city directory is where you would do it.

**The scene declined for reasons the entry names.** The Encyclopedia attributes the decline that began in the mid-1960s to "the dispersal of the Black population, the death of the jam session as a learning place and proving ground, the loss through attrition of many of the mentors and master players, and the demise of Indiana Avenue as a focal point of jazz and Black culture, including the closing of most of the traditional jazz venues" (Encyclopedia of Indianapolis, n.d.-d). Notice the shape of that sentence. **It names a cause (dispersal), a mechanism (no more jam sessions to learn in), and an effect (the venues closed).** Section 3 asks who caused the dispersal.

**The housing.** **Lockefield Gardens opened in February 1938**: 748 units in 24 buildings, two to four stories, on 22 acres, built by the federal Public Works Administration at a cost of about 3 million dollars (Encyclopedia of Indianapolis, n.d.-c). It was among the first federal public housing projects in the United States, and the Encyclopedia describes all three of Indianapolis's early projects as sources of community pride when they opened (Borland & Linebarger, 2025, p. 27).

**Here is a live disagreement to keep rather than smooth.** The Encyclopedia of Indianapolis gives Lockefield **748 units**. SAVI, the data service run by the Polis Center, refers to the **798 units** of Lockefield in its analysis of the neighbourhood's population change (SAVI, n.d.). Fifty units is not a rounding error. **Neither source is obviously wrong and this course does not pick one.** When you write about Lockefield, give the number you used and say where you got it, which is the only honest move available.

**The school.** **Crispus Attucks High School opened in 1927 as the only high school for Black students in a segregated Indianapolis.** The state NAACP chapter had fought its creation, fearing that a separate school would guarantee inferior facilities and coursework, and the DNR context notes that the school nevertheless "became and remains a source of Black excellence and pride" (Borland & Linebarger, 2025, p. 28). **Both halves of that sentence are true at once, and a course that drops either half is lying by omission.** Attucks gets its own course in this series; here it is a neighbour and a landmark.

**The self-help housing, which is the part most retellings skip.** When the Indianapolis Redevelopment Commission cleared the neighbourhood behind Crispus Attucks known as Pat Ward's Bottom, the Black social service agency **Flanner House** offered displaced residents a route back to ownership: **300 dollars down and roughly 1,200 hours of labour to earn equity in a house**. The programme drew national attention and let some families stay in the area (Encyclopedia of Indianapolis, n.d.-e). Section 3 covers the clearance. Put the response in your notes now, because **the record of what people built in reply is as documented as the record of what was taken**, and it is routinely left out.

## Sources
- Borland, A., & Linebarger, E. (2025). *Green Book sites in Indiana, 1936-1967* [National Register of Historic Places multiple property documentation form]. Gray & Pape, Inc., for the Indiana Department of Natural Resources, Division of Historic Preservation and Archaeology. https://www.in.gov/dnr/historic-preservation/files/hp-Green-Book-Sites-in-Indiana.pdf
- Encyclopedia of Indianapolis. (n.d.-a). *Indiana Avenue*. https://indyencyclopedia.org/indiana-avenue/
- Encyclopedia of Indianapolis. (n.d.-c). *Lockefield Gardens*. https://indyencyclopedia.org/lockefield-gardens/
- Encyclopedia of Indianapolis. (n.d.-d). *Jazz*. https://indyencyclopedia.org/jazz/
- Encyclopedia of Indianapolis. (n.d.-e). *Midtown*. https://indyencyclopedia.org/midtown/
- SAVI, The Polis Center. (n.d.). *Changes in Indy's historic Black neighborhoods*. https://savi.org/changes-in-indys-historic-black-neighborhoods/`,
      recallContent: [
        {
          prompt: "What years does the Encyclopedia of Indianapolis give as the golden age of Indianapolis jazz, and name three documented Avenue venues.",
          answer: "1945 to 1965. Documented venues include the Cotton Club, Sunset Terrace, George's Bar, Henri's, the Red Keg, the Red Rooster, the Ritz Lounge, the Sky Club, the Trianon Ballroom and the Walker Casino.",
        },
        {
          prompt: "There is a Sunset Terrace club and a Sunset tavern at 875 Indiana Avenue in the Green Book. Why should you not treat those as the same entry?",
          answer: "A shared word in a name is a lead, not an identification. You would corroborate it in a city directory before writing that they are one establishment.",
        },
        {
          prompt: "Give Lockefield Gardens' opening date and the two competing unit counts, with who gives each.",
          answer: "Opened February 1938. The Encyclopedia of Indianapolis gives 748 units in 24 buildings on 22 acres; SAVI refers to 798 units. Report the number you used and its source rather than picking one silently.",
        },
        {
          prompt: "What did the state NAACP think about creating Crispus Attucks High School, and how does the DNR context describe the school?",
          answer: "The state chapter fought its creation, fearing a segregated school would mean inferior facilities and coursework. The same source says it became and remains a source of Black excellence and pride. Both are true.",
        },
        {
          prompt: "What did Flanner House offer residents displaced from Pat Ward's Bottom?",
          answer: "A path to home ownership: about 300 dollars down and roughly 1,200 hours of labour to earn equity in a house. It drew national attention and let some families remain in the area.",
        },
      ],
    },
    {
      slug: "ia-quiz-then",
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
            prompt: "Indiana Avenue first appears on which document, and in what year?",
            options: [
              "The 1945 Indiana redevelopment act",
              "Alexander Ralston's 1821 plat of Indianapolis",
              "The 1916 business survey",
              "The 1938 Lockefield Gardens plans",
            ],
            correctIndex: 1,
            explanation: "It is one of four diagonal streets on Ralston's 1821 plat, running northwest out of the Mile Square.",
            sourceLessonSlug: "ia-what-it-was",
          },
          {
            prompt: "By 1920, what share of Indiana Avenue's residents were identified as Black?",
            options: ["24 percent", "51 percent", "77 percent", "95 percent"],
            correctIndex: 2,
            explanation: "The Encyclopedia of Indianapolis records 77 percent by 1920, up from 115 residents counted as Black or mulatto in 1880.",
            sourceLessonSlug: "ia-what-it-was",
          },
          {
            prompt: "The 1916 study of eight blocks of the Avenue is significant mainly because it shows:",
            options: [
              "That the Avenue was primarily a nightlife strip",
              "A complete local economy, from groceries and cobblers to lawyers, doctors and funeral parlors",
              "That most businesses were owned by people who lived elsewhere",
              "That the Avenue was in decline by 1916",
            ],
            correctIndex: 1,
            explanation: "The list runs from restaurants and grocery stores to tailors, cobblers, drugstores, pawnbrokers and professional offices. That is infrastructure, not entertainment.",
            sourceLessonSlug: "ia-what-it-was",
          },
          {
            prompt: "How many Green Book entries did Indiana have in total across all editions?",
            options: ["47", "197", "1,097", "More than 10,000"],
            correctIndex: 1,
            explanation: "The Indiana DNR compiled 197 entries across 21 communities; the 10,000 figure is the Green Book's nationwide total.",
            sourceLessonSlug: "ia-green-book-listings",
          },
          {
            prompt: "Who compiled and field-checked the Indiana Green Book site list, and under what funding?",
            options: [
              "The New York Public Library, under a private grant",
              "The Indiana DNR Division of Historic Preservation and Archaeology, with a National Park Service Underrepresented Communities grant, documented by Gray & Pape",
              "Indiana University, under a state appropriation",
              "The city of Indianapolis, under a federal transportation grant",
            ],
            correctIndex: 1,
            explanation: "The DNR compiled the entries and ran a desktop survey, then used an NPS Underrepresented Communities grant to hire Gray & Pape to field-check sites and write the multiple property documentation form.",
            sourceLessonSlug: "ia-green-book-listings",
          },
          {
            prompt: "The Indiana Avenue Green Book entries run between which street numbers?",
            options: ["1 to 99", "100 to 400", "233 to 1005", "1400 to 2200"],
            correctIndex: 2,
            explanation: "233 to 1005 Indiana Avenue, which gives you a testable length for the listed district rather than an impression.",
            sourceLessonSlug: "ia-green-book-listings",
          },
          {
            prompt: "Most Avenue beauty parlors, drug stores and liquor stores disappear from the guide after 1955. The correct reading is:",
            options: [
              "Those businesses all closed in 1956",
              "The 1956 edition narrowed the guide to lodging and restaurants almost exclusively",
              "The Avenue was demolished in 1956",
              "The publisher lost the Indiana listings",
            ],
            correctIndex: 1,
            explanation: "It is an editorial change in the book, not an event on the street. This is the same reading skill the method course taught.",
            sourceLessonSlug: "ia-green-book-listings",
          },
          {
            prompt: "Which Indiana Avenue business is listed continuously from 1950 through 1967?",
            options: ["Blue Eagle at 648", "Perkins Restaurant at 793", "Down Beat at 1005", "The Hawaii hotel at 406"],
            correctIndex: 1,
            explanation: "Perkins Restaurant at 793 Indiana Avenue. Restaurants were one of the two categories the guide kept after the 1956 cut.",
            sourceLessonSlug: "ia-green-book-listings",
          },
          {
            prompt: "The Thurman hotel at 222 Indiana Avenue, listed 1939-1941 and 1946-1952, is a trap because:",
            options: [
              "It never existed",
              "It is in French Lick, Indiana, about 100 miles south, which has its own Indiana Avenue",
              "The years are wrong",
              "It was a tourist home, not a hotel",
            ],
            correctIndex: 1,
            explanation: "Searching on street name alone would place it on the Indianapolis corridor. Always carry the city with the street.",
            sourceLessonSlug: "ia-green-book-listings",
          },
          {
            prompt: "About 30 Avenue businesses appear in the Green Book across thirty years, while a 1916 study counted more than 180 in eight blocks. The gap measures:",
            options: [
              "How many businesses failed",
              "The guide's coverage, not the Avenue's inventory",
              "An error in the 1916 study",
              "The number of white-owned businesses",
            ],
            correctIndex: 1,
            explanation: "The Green Book recorded what someone reported to Victor Green's network. It was never a survey of everything that existed.",
            sourceLessonSlug: "ia-green-book-listings",
          },
          {
            prompt: "What period does the Encyclopedia of Indianapolis give as the golden age of Indianapolis jazz?",
            options: ["1920 to 1935", "1936 to 1944", "1945 to 1965", "1966 to 1980"],
            correctIndex: 2,
            explanation: "1945 to 1965, the years when Indianapolis musicians reached national and international recognition.",
            sourceLessonSlug: "ia-music-and-institutions",
          },
          {
            prompt: "Which causes does the Encyclopedia name for the decline of the Avenue's jazz scene?",
            options: [
              "Changing musical taste alone",
              "Dispersal of the Black population, the end of the jam session as a training ground, attrition among mentors, and the closing of the venues",
              "A city ordinance banning live music",
              "The arrival of recorded music",
            ],
            correctIndex: 1,
            explanation: "The entry names dispersal, the death of the jam session, attrition of mentors and master players, and the demise of the Avenue as a focal point.",
            sourceLessonSlug: "ia-music-and-institutions",
          },
          {
            prompt: "Lockefield Gardens opened in February 1938. What federal agency built it?",
            options: [
              "The Federal Housing Administration",
              "The Public Works Administration",
              "The Bureau of Public Roads",
              "The Department of Housing and Urban Development",
            ],
            correctIndex: 1,
            explanation: "The PWA built it: 24 buildings on 22 acres at a cost of about 3 million dollars.",
            sourceLessonSlug: "ia-music-and-institutions",
          },
          {
            prompt: "Two sources give Lockefield Gardens different unit counts. What does this course do about it?",
            options: [
              "Averages them",
              "Uses the larger figure because it is more impressive",
              "Gives both figures with their owners and refuses to pick",
              "Omits the unit count entirely",
            ],
            correctIndex: 2,
            explanation: "The Encyclopedia of Indianapolis says 748 units; SAVI refers to 798. Fifty units is not a rounding error, so the course reports both and names the sources.",
            sourceLessonSlug: "ia-music-and-institutions",
          },
          {
            prompt: "What did Flanner House offer residents displaced by the clearance of Pat Ward's Bottom?",
            options: [
              "Cash relocation payments only",
              "Roughly 300 dollars down plus about 1,200 hours of labour to earn equity in a house",
              "Free rental units downtown",
              "Nothing; the agency opposed the clearance and left",
            ],
            correctIndex: 1,
            explanation: "The Flanner House self-help home programme drew national attention and allowed some displaced families to stay in the area.",
            sourceLessonSlug: "ia-music-and-institutions",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 2 · Built  (beat 2: architecture and building typology)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "ia-built-typology",
      title: "5 · What kind of buildings this was",
      section: "Section 2 · Built",
      body: `Beat 2 of the site template asks: **why does it look like that?** For a commercial corridor the answer starts with typology, which is the study of what kind of building a building is, before you get to style.

**The National Register form is a typology document, and reading one is a transferable skill.** The Indiana Green Book form sorts every listed business into three categories by primary use, and then into subtypes taken from the Green Book's own category headings (Borland & Linebarger, 2025, p. 52).

| Category | Subtypes | Where they sat |
|---|---|---|
| **Domestic** | Tourist homes, beauty parlors in private homes, barber shops in private homes | Inside Black residential neighbourhoods |
| **Commercial** | Hotels, motels, restaurants, drive-ins, taverns, night clubs, liquor stores, drug stores, garages, service stations, dry cleaners, tailors, barber shops and beauty parlors in commercial buildings | On corridors like this one |
| **District** | A group of associated resources evaluated together | Where enough survives to read as a whole |

**Why the domestic category matters more than it looks.** A tourist home was a single-family house or duplex where a room was rented overnight, and the form is explicit that its proprietors were frequently married or widowed Black women, for whom the income meant a measure of independence. It also notes that these houses "served as spaces to foster social networks that were essential to the advancement of civil rights" (Borland & Linebarger, 2025, pp. 52-53). **Architecturally they are ordinary. That is the point.** A building type that reads as unremarkable on a survey form can be doing extraordinary civic work, which is why a typology that only counts monuments will miss most of a district.

**The Avenue's own stock, from the record.** The **Indiana Avenue Historic District**, listed on the National Register on **June 12, 1987**, reference number 87000912, covers about **3 acres** and comprises **eleven historic buildings** in the 500 block, built between roughly **1869 and 1935**, with Italianate examples among them (National Register listing, as described in Encyclopedia of Indianapolis, n.d.-a, and the NRHP record).

Read those numbers next to lesson 1's numbers and you have this course in one line. **A corridor that held more than 180 businesses in eight blocks in 1916 is represented on the National Register by 3 acres and eleven buildings.**

**A survey form tells you what survived, in a specific and limited sense.** The Indiana form says that of the seventeen Green Book business subtypes it defines, "resources survive in Indiana for ten of the subtypes," and it addresses all seventeen anyway in case previously unknown sites turn up later (Borland & Linebarger, 2025, p. 52). Two consequences follow, and both are research instructions.
1. **A subtype with no surviving Indiana example is not a subtype that did not exist here.** The form illustrates the restaurant and night club subtypes with **period advertisements** rather than photographs of buildings, which tells you something about what the field survey found and nothing about what once stood.
2. **"Extant" means the building is standing.** It does not mean the business is open, the use is unchanged, the interior survives, or the community is intact. A survey form measures fabric. **You will need other records for everything else**, which is what Section 5 sends you to find.

## Sources
- Borland, A., & Linebarger, E. (2025). *Green Book sites in Indiana, 1936-1967* [National Register of Historic Places multiple property documentation form]. Gray & Pape, Inc., for the Indiana Department of Natural Resources, Division of Historic Preservation and Archaeology. https://www.in.gov/dnr/historic-preservation/files/hp-Green-Book-Sites-in-Indiana.pdf
- Encyclopedia of Indianapolis. (n.d.-a). *Indiana Avenue*. https://indyencyclopedia.org/indiana-avenue/
- National Park Service. (n.d.). *National Register of Historic Places*. https://www.nps.gov/subjects/nationalregister/index.htm`,
      recallContent: [
        {
          prompt: "What three categories does the Indiana Green Book documentation form sort businesses into, and on what basis?",
          answer: "Domestic, commercial and district, sorted by primary use, then into subtypes taken from the Green Book's own category headings.",
        },
        {
          prompt: "Why does a typology that only counts monuments miss most of a district?",
          answer: "Because the domestic subtypes, especially tourist homes run by Black women, are architecturally ordinary houses that were doing significant civic and social work. Ordinary fabric can carry extraordinary history.",
        },
        {
          prompt: "Give the Indiana Avenue Historic District's listing date, size and building count.",
          answer: "Listed on the National Register June 12, 1987, reference number 87000912. About 3 acres, eleven historic buildings in the 500 block, built roughly 1869 to 1935.",
        },
        {
          prompt: "What does 'extant' mean on a survey form, and what does it NOT mean?",
          answer: "It means the building is standing. It does not mean the business is open, the use is unchanged, the interior survives, or the community is intact. A survey measures fabric only.",
        },
      ],
    },
    {
      slug: "ia-built-walker",
      title: "6 · The Walker Building: the one that survived",
      section: "Section 2 · Built",
      body: `One building on this corridor is a National Historic Landmark, and understanding why is a lesson in both architecture and leverage.

**What it is.** The Madam C. J. Walker Building stands at **617 Indiana Avenue**, on the triangular lot where the Avenue meets what is now Dr. Martin Luther King Jr. Street. It is a **four-story flatiron building**, brick with terra cotta trim, designed by the Indianapolis architectural firm **Rubush and Hunter**, with exterior sculptural detail by **Alexander Sangernebo**. It **opened in December 1927** (Encyclopedia of Indianapolis, n.d.-f).

**Why the shape.** A flatiron plan is a response to a site, not a style choice: a diagonal street cutting a rectangular grid leaves triangular lots, and a building that fills one is triangular. **Indiana Avenue's diagonal, drawn on Ralston's 1821 plat, is the reason this building has the plan it has.** The 1821 survey decision is still visible in the massing of a 1927 building. That is beat 2 working exactly as intended: the geometry of a plat becomes the shape of a room.

**Who built it.** Madam C. J. Walker acquired the triangular parcel after 1916 and died in 1919, eight years before the building opened. Construction was carried through by her daughter **A'Lelia Walker** and the Walker company's general manager and attorney **Freeman B. Ransom** (Encyclopedia of Indianapolis, n.d.-f). Ransom is the same man the Ransom Place neighbourhood is named for (Encyclopedia of Indianapolis, n.d.-b). **A Black-owned manufacturing company financed a monumental commercial building on its own corridor, and completed it after its founder's death.** That is a construction fact and it is also an answer to the question of who built Indiana Avenue.

**What was inside.** The Encyclopedia calls it "a city within a city": the Walker manufacturing plant and corporate offices, a pharmacy, a beauty salon, a barbershop, a cosmetology school, a restaurant, medical offices, a ballroom, and a **1,500-seat theatre** whose interior carried Egyptian, Moorish and West African inspired woodcarving (Encyclopedia of Indianapolis, n.d.-f). **A single building reproducing an entire district's programme is what a district under segregation produces.** The reasons the Avenue held a complete economy are the reasons this building held one.

**Designation history, which is the leverage.**
- **Indiana Register of Historic Places: 1979**
- **National Register of Historic Places: 1980** (reference number 80000062)
- **National Historic Landmark: 1991**
- Theatre reopened after restoration in **October 1988**, funded in part by the Lilly Endowment and the U.S. Department of Commerce
- A renovation of about **15.3 million dollars** ran from **2018 to 2021**
- Renamed the **Madam Walker Legacy Center** in 2018 (Encyclopedia of Indianapolis, n.d.-f)

**Read that list against the chronology you are about to learn.** The building was designated in 1979, 1980 and 1991. Section 3 covers decisions taken in 1945, 1948, 1954, 1956, 1958, and 1964 through 1966. **Designation arrived after the decisions that mattered most.** That timing is the single most useful thing in this lesson, and Section 5 turns it into a live question about the buildings still standing today.

**One caution about the survivor.** It is tempting to treat the Walker Building as proof that the Avenue endures. Be careful. **A landmark is evidence about itself.** What the surrounding blocks look like is a separate question with separate evidence, which is what beat 4 and the map are for.

## Sources
- Encyclopedia of Indianapolis. (n.d.-b). *Ransom Place*. https://indyencyclopedia.org/ransom-place/
- Encyclopedia of Indianapolis. (n.d.-f). *Madam Walker Legacy Center*. https://indyencyclopedia.org/madam-walker-legacy-center/
- National Park Service. (n.d.). *National Historic Landmarks program*. https://www.nps.gov/subjects/nationalhistoriclandmarks/index.htm`,
      recallContent: [
        {
          prompt: "Where is the Walker Building, and what is its plan and date?",
          answer: "617 Indiana Avenue, at the Avenue and Dr. Martin Luther King Jr. Street. A four-story flatiron building by Rubush and Hunter with sculpture by Alexander Sangernebo, opened December 1927.",
        },
        {
          prompt: "Why is the building triangular, and what does that tell you about beat 2?",
          answer: "Indiana Avenue is a diagonal from Ralston's 1821 plat cutting a rectangular grid, which leaves triangular lots. A 1821 survey decision determines the shape of a 1927 building.",
        },
        {
          prompt: "Who finished the building, and when did Madam C. J. Walker die?",
          answer: "She died in 1919, eight years before the December 1927 opening. Her daughter A'Lelia Walker and the company's general manager and attorney Freeman B. Ransom carried the construction through.",
        },
        {
          prompt: "Name the building's three designations and their years.",
          answer: "Indiana Register of Historic Places 1979, National Register of Historic Places 1980, National Historic Landmark 1991.",
        },
        {
          prompt: "What is the most useful thing about the designation dates?",
          answer: "They all come after the decisions that removed most of the corridor, which ran from 1945 through the 1960s. Designation arrived late, which is why Section 5 asks about the buildings still standing today.",
        },
      ],
    },
    {
      slug: "ia-built-what-survives",
      title: "7 · What survives, and what a designation actually does",
      section: "Section 2 · Built",
      body: `Three fragments of the historic fabric are documented as standing. Each survived for a different reason, and the reasons are the lesson.

**1. The Walker Building, 617 Indiana Avenue.** A National Historic Landmark since 1991, restored twice, in continuous cultural use as the Madam Walker Legacy Center (Encyclopedia of Indianapolis, n.d.-f). It survived because it was monumental, because it was owned by an institution that fought for it, and because money was raised.

**2. Ransom Place.** A six-block residential neighbourhood immediately north of the Avenue, running roughly from 10th Street to St. Clair Street and from Paca Street to Dr. Martin Luther King Jr. Street, developed in the 1880s and 1890s alongside the Avenue's growth. **Listed on the National Register in 1992**, named for Freeman B. Ransom. After listing, the neighbourhood saw historic houses repaired and new houses built on vacant lots (Encyclopedia of Indianapolis, n.d.-b). It survived because it was residential, because it was organised, and because the listing arrived while there was still something to list.

**3. Seven Lockefield Gardens buildings.** In 1980 a redevelopment agreement was reached and the seven remaining original buildings were designated a local Indianapolis historic district that same year, then rehabilitated. **All but those seven of the original 24 buildings were demolished in 1983.** The site was redeveloped with 11 new buildings holding 493 total units, of which **199 are inside the historic structures** (Encyclopedia of Indianapolis, n.d.-c). It survived partially, and only after a fight.

**The Lockefield chronology is worth reading closely, because it is not a simple story.** The Encyclopedia records residents voting in 1971 to approve a renovation plan, an exodus beginning in May 1973, and a ruling by federal judge **S. Hugh Dillin** that rehabilitating Lockefield for an exclusively or overwhelmingly Black residency would illegally reproduce school segregation. By 1977 the city resolved to raze it, and in July 1983 all but seven buildings came down (Encyclopedia of Indianapolis, n.d.-a, n.d.-c). **A desegregation ruling is part of why a Black public housing project was not rehabilitated for its own residents.** That is an uncomfortable finding and it is in the record. Do not simplify it in either direction.

**Now the part everyone gets wrong: what designation actually does.**

| Designation | Who lists it | What it does | What it does NOT do |
|---|---|---|---|
| **National Register of Historic Places** | The Keeper of the National Register, on a state nomination | Recognition; triggers federal review when there is federal money or a federal permit; opens some tax credits | **It does not stop a private owner from demolishing the building.** |
| **National Historic Landmark** | The Secretary of the Interior | The highest federal recognition, with a higher significance bar | Still not, by itself, a demolition veto for a private owner |
| **Local historic district or landmark** | A local commission under local ordinance | This is the one that usually **regulates**: certificates of appropriateness, review of exterior changes and demolition | Only as strong as the local ordinance and the commission enforcing it |

**The rule to carry out of Section 2:** federal listing is mostly recognition plus leverage when federal money is involved, and **local designation is where a demolition can actually be stopped.** That is why the 1980 local designation of the seven Lockefield buildings matters more to their survival than any federal listing would have.

**And the timing rule.** Ransom Place was listed in 1992. The Indiana Avenue Historic District was listed in 1987. The Walker Building's federal listing came in 1980. **The decisions that emptied the corridor were taken between 1945 and the late 1960s.** Preservation law arrived after the clearance, which is the ordinary pattern in American cities and the reason beat 3 is about instruments rather than about regret.

## Sources
- Encyclopedia of Indianapolis. (n.d.-a). *Indiana Avenue*. https://indyencyclopedia.org/indiana-avenue/
- Encyclopedia of Indianapolis. (n.d.-b). *Ransom Place*. https://indyencyclopedia.org/ransom-place/
- Encyclopedia of Indianapolis. (n.d.-c). *Lockefield Gardens*. https://indyencyclopedia.org/lockefield-gardens/
- Encyclopedia of Indianapolis. (n.d.-f). *Madam Walker Legacy Center*. https://indyencyclopedia.org/madam-walker-legacy-center/
- National Park Service. (n.d.). *National Register of Historic Places: Frequently asked questions*. https://www.nps.gov/subjects/nationalregister/faqs.htm`,
      recallContent: [
        {
          prompt: "Name the three documented surviving fragments of the historic fabric, and one reason each survived.",
          answer: "The Walker Building (monumental, institutionally owned, money raised); Ransom Place (residential, organised, listed in 1992 while there was still something to list); and seven Lockefield Gardens buildings (locally designated in 1980, rehabilitated, the other 17 demolished in 1983).",
        },
        {
          prompt: "What is the uncomfortable finding in the Lockefield demolition chronology?",
          answer: "Judge S. Hugh Dillin ruled that rehabilitating Lockefield for an exclusively or overwhelmingly Black residency would illegally reproduce school segregation, so a desegregation ruling is part of why the project was not rehabilitated for its own residents.",
        },
        {
          prompt: "Does National Register listing stop a private owner from demolishing a building?",
          answer: "No. Federal listing is recognition plus review leverage when federal money or a federal permit is involved, plus some tax credits. Local designation under a local ordinance is the one that normally regulates demolition.",
        },
        {
          prompt: "Which designation actually protected the seven surviving Lockefield buildings?",
          answer: "The local Indianapolis historic district designation made in 1980, at the time of the redevelopment agreement.",
        },
      ],
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 3 · Powers  (beat 3: civics, planning, taxes, politics. THE LOAD-BEARING SECTION)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "ia-powers-blight",
      title: "8 · Instrument one: the blight designation",
      section: "Section 3 · Powers",
      body: `**This is the section the whole course exists for.** Everything before it establishes what was here. Everything after it asks what happens next. This section teaches the tools, because **a building does not disappear, it is removed by somebody with an instrument.** Learn the instruments and you can read any American city.

**An instrument, in this sense, is a specific legal power exercised by a specific body under a specific statute, leaving a specific document.** That last clause is the one that turns history into research: if a power was exercised, a record exists, and the record has a name.

**Instrument one is designation.** Before a government can clear an area, it usually has to declare the area to be something. In Indiana the word was **blighted**, and the machinery was set up by the **Indiana General Assembly in 1945**.

**How it ran here.** The neighbourhood behind Crispus Attucks High School was known as **Pat Ward's Bottom**, a Black community of small, tightly packed houses. It was **identified as blighted by the Indiana General Assembly in 1945**, and the **Indianapolis Redevelopment Commission** chose it for its first slum clearance project. **Demolition of homes began there in 1948** (Encyclopedia of Indianapolis, n.d.-e).

**Then it ran again, and larger.** In **1956**, Indiana University's Medical Center expansion prompted the **Indianapolis Redevelopment Commission to declare almost 38 acres of neighbourhoods blighted and substandard** (Paschall, 2020, citing the commission's action; the same 1956 figure appears in local reporting on the Avenue). The Encyclopedia of Indianapolis separately records properties designated as blighted in **1954 and 1956** in this area (Encyclopedia of Indianapolis, n.d.-a).

**Now look at what the word does, because this is the transferable part.**

1. **"Blighted" is a legal conclusion, not a description.** It is reached by a body, on a record, using criteria written into a statute. Once reached, it unlocks powers that do not otherwise exist: acquisition, clearance, resale to a redeveloper.
2. **The criteria are usually about physical condition**, things like age, overcrowding, plumbing, fire risk. **Those criteria correlate strongly with where a city has refused to lend, insure, or invest.** A neighbourhood denied mortgage capital for thirty years will measure as deteriorated, and then the measurement becomes the justification. **The finding and the cause can be the same policy at two different dates.**
3. **A designation is appealable and it is public.** Somebody voted. There are minutes. There is a boundary map with a legal description. **All of it is a public record you can request.**

**The research move.** If you want to know why a block is gone, do not start with the demolition. **Start with the designation**, because the designation is dated, bounded, and minuted, and everything else follows from it. Ask: who declared it, under what statute, on what date, with what boundary, on what evidence, and who was in the room.

**What this course will not claim.** It will not tell you that every blight designation in Indianapolis was made in bad faith, because that is a claim about intent and this course has not read the commission's minutes. **It will tell you that the power existed, that it was used on this ground in 1948 and again in the 1950s, and that the record is public and has not been read into this course.** That is an honest place to stop, and it is also an invitation: the minutes are the best unopened source in this story.

## Sources
- Encyclopedia of Indianapolis. (n.d.-a). *Indiana Avenue*. https://indyencyclopedia.org/indiana-avenue/
- Encyclopedia of Indianapolis. (n.d.-e). *Midtown*. https://indyencyclopedia.org/midtown/
- Paschall, W. (2020). *Indiana Avenue: The ethnic cleansing of Black Indianapolis*. New America. https://www.newamerica.org/indianapolis/blog/indiana-avenue-ethnic-cleansing-black-indianapolis/
- Rothstein, R. (2017). *The color of law: A forgotten history of how our government segregated America*. Liveright.`,
      recallContent: [
        {
          prompt: "Define an 'instrument' as this course uses the word.",
          answer: "A specific legal power, exercised by a specific body, under a specific statute, leaving a specific document. The last part is what makes it researchable.",
        },
        {
          prompt: "What was Pat Ward's Bottom, and what happened to it?",
          answer: "A Black neighbourhood of small tightly packed houses behind Crispus Attucks High School. Identified as blighted by the Indiana General Assembly in 1945, chosen by the Indianapolis Redevelopment Commission for its first slum clearance, with demolition beginning in 1948.",
        },
        {
          prompt: "Why is 'blighted' a legal conclusion rather than a description?",
          answer: "It is reached by a body, on a record, against statutory criteria, and it unlocks powers of acquisition, clearance and resale that do not otherwise exist.",
        },
        {
          prompt: "What is the circularity problem with physical blight criteria?",
          answer: "The criteria measure deterioration, and deterioration follows from decades of refused mortgage credit, insurance and investment. The finding and its cause can be the same policy at two dates.",
        },
        {
          prompt: "If you want to know why a block is gone, where do you start, and why?",
          answer: "With the designation, not the demolition. A designation is dated, bounded, minuted and public, and the clearance follows from it.",
        },
      ],
    },
    {
      slug: "ia-powers-eminent-domain",
      title: "9 · Instrument two: eminent domain, and who is allowed to use it",
      section: "Section 3 · Powers",
      body: `Designation unlocks the power. **Eminent domain is the power.**

**What it is.** The government's authority to take private property for a public use, on payment of just compensation. In the United States the constitutional text is the last clause of the **Fifth Amendment**: "nor shall private property be taken for public use, without just compensation." The Fourteenth Amendment applies the requirement to the states.

**Three things a learner usually has wrong about it.**

**1. The owner does not have to agree.** The dispute in a condemnation case is normally about **price**, not about whether the taking happens. A property owner who refuses an offer is not blocking the project; they are usually heading toward a court that will set the number.

**2. The taker is often not the party that ends up with the land.** Under redevelopment statutes, a public body acquires and clears, and then conveys the cleared land to a private or institutional developer. **That is the design of urban renewal, not an abuse of it**, and it is the reason "public use" became a contested phrase in American law.

**3. It leaves a paper trail with your name on it.** Offers, appraisals, condemnation filings, court judgments and settlement amounts are civil court records. **This is the most checkable instrument in the whole section.**

**A documented case on this ground.** Reporting by Mirror Indy and Open Campus followed the **Temple family**, whose house stood at **550 Minerva Street** along with three rental properties. Indiana University's initial offer in **1965** was **23,000 dollars**. Governor **Edgar Whitcomb** granted permission for eminent domain against the family in **December 1972** and again in **January 1976**. The matter settled in **June 1979** at **50,000 dollars**. The land became **University Tower**, a residence hall for about 600 students (Mirror Indy & Open Campus, 2024).

**Do not read that as a happy ending because the number went up.** Read the **dates**. The first offer is 1965 and the settlement is 1979. **A family held out for fourteen years against an institution with a state government willing to sign.** The asymmetry of time and money is the substance of the story, and it is documented rather than inferred.

**Two limits on this lesson that you must keep.**
- **One case is one case.** The Temple settlement tells you what happened to the Temples. It does not establish an average, a pattern, or a rate. Do not turn it into a statistic.
- **The 1965 dollar figure is not comparable to a 1979 one** without adjusting for inflation, and this course does not do that adjustment for you. **If you use the numbers, say what you did to them.**

**Federal relocation law changed midway through this story, and the date matters.** The **Uniform Relocation Assistance and Real Property Acquisition Policies Act of 1970** set relocation assistance and acquisition standards for federally funded projects. **Most of the clearance discussed in this course predates it.** When you compare a 1950s taking to a 1980s one, you are comparing two different legal regimes, and saying so is part of getting the history right.

## Sources
- Mirror Indy, & Open Campus. (2024, October 1). *Indy's lost Black neighborhood: How IUPUI displaced thousands*. https://mirrorindy.org/iupui-black-wall-street-indianapolis-displacement-indiana-avenue/
- U.S. Const. amend. V.
- Uniform Relocation Assistance and Real Property Acquisition Policies Act of 1970, 42 U.S.C. § 4601 et seq. https://www.govinfo.gov/app/collection/uscode
- Archer, D. N. (2020). "White men's roads through Black men's homes": Advancing racial equity through highway reconstruction. *Vanderbilt Law Review, 73*(5). https://scholarship.law.vanderbilt.edu/vlr/vol73/iss5/1/`,
      recallContent: [
        {
          prompt: "What does the Fifth Amendment require when property is taken?",
          answer: "Private property shall not be taken for public use without just compensation. The Fourteenth Amendment applies the requirement to the states.",
        },
        {
          prompt: "In a condemnation case, what is normally in dispute?",
          answer: "The price, not whether the taking happens. Refusing an offer usually leads to a court setting the number rather than stopping the project.",
        },
        {
          prompt: "Give the documented Temple family timeline and figures.",
          answer: "House at 550 Minerva Street plus three rentals. IU's initial offer 23,000 dollars in 1965; Governor Whitcomb granted eminent domain permission in December 1972 and January 1976; settled June 1979 at 50,000 dollars. The site became University Tower.",
        },
        {
          prompt: "Why should you not turn the Temple settlement into a statistic?",
          answer: "One case is one case. It documents what happened to one family and establishes no average, pattern or rate. The 1965 and 1979 dollar figures are also not comparable without an inflation adjustment you would have to state.",
        },
        {
          prompt: "Why does the 1970 Uniform Relocation Act matter to this chronology?",
          answer: "It set relocation assistance and acquisition standards for federally funded projects, and most of the clearance in this course predates it. A 1950s taking and a 1980s taking happened under different legal regimes.",
        },
      ],
    },
    {
      slug: "ia-powers-alignment",
      title: "10 · Instrument three: the alignment decision",
      section: "Section 3 · Powers",
      body: `An interstate highway is not weather. **Somebody drew the line.** The choice of route is called the **alignment decision**, and it is an instrument like any other.

**How the American interstate system worked, in the terms that matter here.** The **Federal-Aid Highway Act of 1956** created the National System of Interstate and Defense Highways and funded it at roughly 90 percent federal money against 10 percent state money. **The alignment inside a city was proposed by the state highway department, in negotiation with local officials, and approved federally.** Two consequences follow, and you need both:
1. **The overwhelming majority of the money was federal, so the incentive to build was enormous** and the local cost of building was small.
2. **The line itself was largely a state and local choice.** Blaming "the federal government" for a specific route skips the people who actually drew it.

**Why routes went where they did.** Deborah N. Archer's study of highway construction and racial equity documents both patterns: highways were run through Black neighbourhoods, displacing households and destroying homes, churches, schools and businesses, and in other places the highway itself was used as a barrier to separate white and Black communities (Archer, 2020). **Cheap land, low political resistance, and land already designated blighted are the three things that made a route attractive**, and all three describe segregated Black districts by design.

**Indianapolis, with the dates that are documented.**
- **1957.** The state announced it would plan freeways connecting downtown Indianapolis to the outer belt system, the road that became I-465 (Historic Indianapolis, n.d.).
- **Early 1960s.** The state began purchasing homes and commercial buildings in the highway right of way (Historic Indianapolis, n.d.).
- **Late 1960s to early 1970s.** I-65 and I-70 were built through the city. Historic Indianapolis dates the I-65 work to **1968 to 1971** (Historic Indianapolis, n.d.).
- **1975.** The **inner loop**, the roughly 4.5-mile downtown ring formed by I-65 and I-70, opened (WRTV, n.d.; Indianapolis Monthly, 2020).
- Neighbourhoods named in reporting as cut by the two interstates include the Southside, Fountain Square, Fletcher Place, Martindale-Brightwood, the Old Northside, St. Joseph, and **Ransom Place** (WRTV, n.d.; Historic Indianapolis, n.d.).

**The figure everyone quotes, handled properly.** You will see "17,000 residents displaced and 8,000 buildings demolished" attached to Indianapolis interstate construction. **WRTV attributes that figure to an Indianapolis Star article of October 15, 1976** (WRTV, n.d.). Three cautions before you use it:
1. **It is city-wide**, covering roughly 31 miles of interstate inside I-465 including the inner loop. **It is not an Indiana Avenue figure.**
2. **It is a contemporaneous newspaper figure**, not a published survey with a stated method. That does not make it wrong. It makes it a figure with an owner and a date, which is how you should cite it.
3. **This course has not seen the underlying count.** Neither, probably, have most of the people repeating it. **Attribute it, do not adopt it.**

**One local measurement that is method-transparent.** Census data for the tract closest to I-70 on the Southside shows population falling from **4,225 residents in 1960 to 1,661 in 1970** (WRTV, n.d.). That is a decennial census count for a defined tract, so you know exactly what it measures. **A smaller, well-defined number beats a large, unsourced one every time.**

**Now the hard part, and the reason this lesson is here.** The popular account of Indiana Avenue says the interstate destroyed it. **That is not what the sources this course could verify actually say.** The Encyclopedia of Indianapolis entry on Indiana Avenue does not name highway construction among the causes of the Avenue's loss at all; it names the 1958 campus plan, the blight designations, Indiana University's parcel purchases, and the Lockefield demolition (Encyclopedia of Indianapolis, n.d.-a). **The interstate is documented as taking neighbourhoods around the Avenue, including Ransom Place, and as changing the district's setting. The Avenue's own commercial fabric is documented as going to designation and to campus assembly.** The next lesson takes the campus, and lesson 13 tests the whole argument.

## Sources
- Archer, D. N. (2020). "White men's roads through Black men's homes": Advancing racial equity through highway reconstruction. *Vanderbilt Law Review, 73*(5). https://scholarship.law.vanderbilt.edu/vlr/vol73/iss5/1/
- Encyclopedia of Indianapolis. (n.d.-a). *Indiana Avenue*. https://indyencyclopedia.org/indiana-avenue/
- Historic Indianapolis. (n.d.). *Flats lost: I-65 construction*. https://historicindianapolis.com/flats-lost-i-65-construction/
- Indianapolis Monthly. (2020). *Fruits of the loop: An unsung milestone in Indy's downtown development*. https://www.indianapolismonthly.com/arts-and-culture/circle-city/i-65-i-70-inner-loop-anniversary/
- WRTV Indianapolis. (n.d.). *"Under the highway": How interstates divided Indianapolis neighborhoods and displaced 17,000 people*. https://www.wrtv.com/news/local-news/indianapolis/under-the-highway-how-interstates-divided-indianapolis-neighborhoods-and-displaced-17-000-people`,
      recallContent: [
        {
          prompt: "What is an alignment decision, and who made it for an urban interstate?",
          answer: "The choice of route. It was proposed by the state highway department in negotiation with local officials, and approved federally, under the Federal-Aid Highway Act of 1956 which funded roughly 90 percent federal to 10 percent state.",
        },
        {
          prompt: "What three qualities made a route attractive to a highway planner, and why did that fall on Black districts?",
          answer: "Cheap land, low political resistance, and land already designated blighted. Segregated Black districts had all three, by the design of earlier policy.",
        },
        {
          prompt: "Where does the '17,000 displaced, 8,000 buildings' figure come from, and what are its three limits?",
          answer: "WRTV attributes it to an Indianapolis Star article of October 15, 1976. It is city-wide rather than Avenue-specific, it is a contemporaneous newspaper figure with no published method, and this course has not seen the underlying count. Attribute it, do not adopt it.",
        },
        {
          prompt: "Give the census example and say why it is better evidence than the 17,000 figure.",
          answer: "The tract closest to I-70 on the Southside fell from 4,225 residents in 1960 to 1,661 in 1970. It is a decennial census count for a defined tract, so you know exactly what it measures.",
        },
        {
          prompt: "What does the popular account say destroyed Indiana Avenue, and what do the verifiable sources say?",
          answer: "The popular account says the interstate did. The Encyclopedia of Indianapolis entry on Indiana Avenue does not name highways among the causes at all; it names the 1958 campus plan, blight designations, IU's parcel purchases and the Lockefield demolition. The interstate is documented as taking surrounding neighbourhoods including Ransom Place.",
        },
      ],
    },
    {
      slug: "ia-powers-campus",
      title: "11 · Instrument four: a university as a land assembler",
      section: "Section 3 · Powers",
      body: `The instrument that the record most strongly ties to the Avenue's own blocks is a university acquiring land.

**The plan.** In **1958**, the Encyclopedia of Indianapolis records, "Indianapolis' most ambitious postwar urban development plan proposed the creation of a joint undergraduate campus of the state's two largest universities, Indiana and Purdue, neighboring the Indiana University School of Medicine campus" (Encyclopedia of Indianapolis, n.d.-a). That campus became **IUPUI**, Indiana University Purdue University Indianapolis.

**The acquisitions, with the record's own dates.**
- **1954 and 1956.** Properties in the area designated blighted (Encyclopedia of Indianapolis, n.d.-a). **1956** is also the year IU's Medical Center expansion prompted the Redevelopment Commission to declare almost 38 acres blighted and substandard (Paschall, 2020).
- **March 1962.** Indiana University formed **Hoosier Realty Corporation**, a nonprofit real estate entity that went on to acquire **more than 2,000 houses and lots** (Mirror Indy & Open Campus, 2024).
- **June 1965.** The **IU Board of Trustees** passed a resolution to expand campus boundaries, including by eminent domain (Mirror Indy & Open Campus, 2024).
- **October 1965.** "The University's first purchase of property on Indiana Avenue may have been in October 1965, when IU purchased Ruth McArthur's home at 802-810 Indiana Avenue" (Encyclopedia of Indianapolis, n.d.-a). **Note the hedge in the source: "may have been."** Keep it when you repeat it.
- **July 1964 to August 1966.** "The University purchased 401 parcels" (Encyclopedia of Indianapolis, n.d.-a).
- **February 1968.** The first building site was fully acquired, bounded by Michigan, Blake, New York, and Agnes streets (Mirror Indy & Open Campus, 2024).
- **1960s to 1980s.** Around **300 acres** assembled in total (Mirror Indy & Open Campus, 2024).

**Why a nonprofit realty corporation, and not the university's own name on the deeds?** Because **land assembly gets more expensive the moment the seller knows who is buying and why.** A buyer that appears to be an ordinary private company pays ordinary prices. This is a standard technique, it is legal, and **it is also the single most useful thing in this lesson**, because it tells you that the deed records will not always say what you expect. **Follow the corporate entity, not the institution's name.**

**Now put the two instruments in the right order.** A blight designation makes land acquirable and clearable. A university with a state charter, a nonprofit acquisition vehicle, a trustees' resolution, and a governor willing to authorise condemnation can then assemble it. **Designation plus assembly is the mechanism.** The highway is a separate instrument operating on the surrounding neighbourhoods over an overlapping period.

**What is on that ground now.** Reporting describes the area around the Avenue today as "sprawling lawns, concrete plazas and gargantuan buildings" for the university, with a few historical markers (Mirror Indy & Open Campus, 2024). And the institution itself has changed again: **on July 1, 2024, IUPUI was realigned into two separate campuses, IU Indianapolis and Purdue University in Indianapolis**, following a definitive agreement signed by both boards of trustees on **June 14, 2023** (Indiana University Indianapolis, n.d.). **The entity that assembled the land no longer exists under that name**, which is exactly the kind of fact that breaks a naive records search and which you now know to expect.

**A note on fairness that is also a note on accuracy.** Nothing here says a public university should not have built a campus in Indianapolis, and this course does not have the record to argue that question either way. What the record does establish is **which ground was chosen, under which designation, using which acquisition vehicle, on which dates, and who lived there first.** Those are the facts. The judgment is the learner's, and it should be made on the documents.

## Sources
- Encyclopedia of Indianapolis. (n.d.-a). *Indiana Avenue*. https://indyencyclopedia.org/indiana-avenue/
- Indiana University Indianapolis. (n.d.). *About the transition from IUPUI to IU Indianapolis*. https://indianapolis.iu.edu/about/iupui-transition/
- Mirror Indy, & Open Campus. (2024, October 1). *Indy's lost Black neighborhood: How IUPUI displaced thousands*. https://mirrorindy.org/iupui-black-wall-street-indianapolis-displacement-indiana-avenue/
- Paschall, W. (2020). *Indiana Avenue: The ethnic cleansing of Black Indianapolis*. New America. https://www.newamerica.org/indianapolis/blog/indiana-avenue-ethnic-cleansing-black-indianapolis/`,
      recallContent: [
        {
          prompt: "What did the 1958 plan propose, and what did it become?",
          answer: "A joint undergraduate campus of Indiana University and Purdue University next to the IU School of Medicine campus. It became IUPUI.",
        },
        {
          prompt: "What was Hoosier Realty Corporation, when was it formed, and what did it acquire?",
          answer: "A nonprofit real estate entity formed by Indiana University in March 1962. It acquired more than 2,000 houses and lots.",
        },
        {
          prompt: "Why would an institution buy land through a separate corporation?",
          answer: "Because prices rise once sellers know who is buying and why. It is legal and standard, and it means the deed records will not always carry the institution's name. Follow the entity, not the institution.",
        },
        {
          prompt: "Give three dated acquisition facts from the record.",
          answer: "IU purchased 401 parcels between July 1964 and August 1966; the trustees resolved in June 1965 to expand the boundaries including by eminent domain; the first Indiana Avenue purchase may have been Ruth McArthur's home at 802-810 Indiana Avenue in October 1965. About 300 acres were assembled from the 1960s to the 1980s.",
        },
        {
          prompt: "What happened to IUPUI on July 1, 2024, and why does it matter to a researcher?",
          answer: "It was realigned into IU Indianapolis and Purdue University in Indianapolis, after a definitive agreement signed June 14, 2023. The entity that assembled the land no longer exists under that name, which breaks a naive records search.",
        },
      ],
    },
    {
      slug: "ia-powers-unigov",
      title: "12 · Instrument five: redrawing the jurisdiction",
      section: "Section 3 · Powers",
      body: `The four instruments so far take buildings. The fifth takes something less visible and more durable: **it changes who gets a vote on the ground.**

**What happened.** The Indiana General Assembly **approved the Unigov bill in 1969**, and **Indianapolis and Marion County were officially consolidated on January 1, 1970**, creating the Consolidated City of Indianapolis. It was driven by Mayor **Richard Lugar** and Marion County Republican chairman **Keith Bulen**, with State Senator Borst sponsoring the legislation. Unigov consolidated 31 city departments and 11 agencies into six new executive departments (Wachter, 2014).

**The procedural fact that does the most work.** Unigov "stands out as the only major post-war consolidation to be accomplished without a voter referendum" (Wachter, 2014). Nashville and Jacksonville, the other two large postwar consolidations, went to their voters. **Indianapolis did not.** A referendum was discussed by the mayor's task force and was overwhelmingly opposed (Wachter, 2014).

**How the statute picked its target without naming it.** The legislation applied to **any Indiana city with a population of 250,000 or more**. In 1969 that meant exactly one city. **The threshold has since been raised to 600,000**, which prevents other Indiana cities from doing the same thing (Wachter, 2014). **A population threshold is a way of writing a law for one place while appearing to write a general rule**, and once you have seen the technique you will see it everywhere.

**What was left out, which is the part that matters.**
- **The school districts.** Not consolidated.
- **Incorporated cities and towns over 5,000 people**, leaving **Beech Grove, Lawrence, Southport and Speedway** independent (Wachter, 2014).
- **The nine townships**, which continue as separate governments and are the territorial basis for eight of the county's eleven school districts (Encyclopedia of Indianapolis, n.d.-g).
- Several municipal corporations, and the county court system.
- The law also **barred annexation into neighbouring counties**, a restriction needed to get the votes (Wachter, 2014).

**Fifty separate and overlapping governmental units remain within Marion County, with more than 61 taxing districts** (Wachter, 2014). Consolidation is a word that does far less than it sounds like.

**Why the schools were left out, in the participants' own words.** Mayor Lugar said the 162-page bill would die in the General Assembly if schools were included, and acknowledged that "a good number of people really wanted to keep at least their particular school segregated" (Chalkbeat Indiana, 2016). The Reverend **Landrum Shields**, the school board's president, said: "to have included schools in Unigov would have raised the spectre of racial integration...and would have meant instant death for the plan. We cooperated with the Mayor by not killing Unigov" (Owen & Willbern, as cited in Wachter, 2014, p. 98). **The exclusion was not an oversight. It was the price of passage, stated at the time by the people who paid it.**

**The numbers on both sides of that boundary in 1969.** Township school districts were about **2.6 percent Black**. Indianapolis Public Schools enrolled **more than one third Black students** (Chalkbeat Indiana, 2016).

**What consolidation did to the electorate.** "Consolidation immediately decreased the proportion of African Americans in Indianapolis rather significantly, from **27 percent of the old city to only 17 percent of the consolidated city**. The share of African American residents would not recover to pre-Unigov proportions until the 2010 census" (Owen & Willbern, as cited in Wachter, 2014, p. 180). Ebony magazine, naming Indianapolis one of the ten best American cities for Black residents in 1978, noted in the same article that "Black political power has been substantially diluted by a new regional government" (Ebony, 1978, as cited in Wachter, 2014). **Both of those things were said by the same source in the same year**, and a course that quotes only one of them is choosing a story over a record.

**And what a court found about it.** The Justice Department sued the Indianapolis Board of School Commissioners on **May 31, 1968**. On **August 18, 1971**, Judge **S. Hugh Dillin** found that the district had continued to operate a de jure segregated system, noting that **90 percent of 360 school boundary changes since 1954 had supported racial segregation**. A later ruling found that **Unigov fostered segregation by expanding the city limits to take in the predominantly white townships while leaving the school district boundaries where they were.** Dillin did not invalidate Unigov. **In 1981 the busing of 5,600 Black students to schools in Perry, Wayne, Franklin, Decatur, Lawrence and Warren townships began**, phased out from 1998 and ending as scheduled in **2016** (Encyclopedia of Indianapolis, n.d.-h; Wachter, 2014; *United States v. Board of School Commissioners*, 1974).

**The instrument, stated plainly.** Where the first four instruments change what is on the ground, **a boundary decision changes the electorate that governs the ground.** It is slower, quieter, cheaper, and it lasts longer than any demolition. If you learn one thing from Section 3, learn to look for it.

## Sources
- Chalkbeat Indiana. (2016, August 3). *How racial bias helped turn Indianapolis into one city with 11 school districts*. https://www.chalkbeat.org/indiana/2016/8/3/21098810/how-racial-bias-helped-turn-indianapolis-into-one-city-with-11-school-districts/
- Encyclopedia of Indianapolis. (n.d.-g). *Structure of Unigov*. https://indyencyclopedia.org/structure-of-unigov/
- Encyclopedia of Indianapolis. (n.d.-h). *School desegregation*. https://indyencyclopedia.org/school-desegregation/
- United States v. Board of School Commissioners of the City of Indianapolis, 503 F.2d 68 (7th Cir. 1974). http://openjurist.org/503/f2d/68/united-states-v-board-of-school-commissioners-of-city-of-indianapolis-indiana
- Wachter, J. (2014, May). *40 years after Unigov: Indianapolis and Marion County's experience with consolidated government*. The Abell Foundation. https://abell.org/wp-content/uploads/2022/02/ec-unigov514.pdf`,
      recallContent: [
        {
          prompt: "When was Unigov passed and when did it take effect, and what is procedurally unusual about it?",
          answer: "Passed by the Indiana General Assembly in 1969, effective January 1, 1970. It is the only major postwar city-county consolidation accomplished without a voter referendum.",
        },
        {
          prompt: "How did the Unigov statute target one city without naming it?",
          answer: "It applied to any Indiana city of 250,000 or more, which in 1969 meant only Indianapolis. The threshold was later raised to 600,000 to stop other cities doing the same.",
        },
        {
          prompt: "List what Unigov left out.",
          answer: "The school districts; incorporated cities and towns over 5,000, leaving Beech Grove, Lawrence, Southport and Speedway independent; the nine townships; several municipal corporations; and the county courts. Fifty overlapping governmental units and more than 61 taxing districts remain.",
        },
        {
          prompt: "In the participants' own words, why were schools excluded?",
          answer: "Lugar said the bill would die if schools were included and acknowledged that many people wanted to keep their particular school segregated. Board president Landrum Shields said including schools would have raised the spectre of racial integration and meant instant death for the plan.",
        },
        {
          prompt: "What did consolidation do to the Black share of the city's population, and what did a court later find about Unigov?",
          answer: "It fell immediately from 27 percent of the old city to 17 percent of the consolidated city, not recovering until the 2010 census. Judge Dillin later found that Unigov fostered segregation by expanding the city limits into white townships while leaving school district boundaries unchanged, though he did not invalidate the law.",
        },
      ],
    },
    {
      slug: "ia-powers-test-the-spine",
      title: "13 · Testing an argument against a chronology",
      section: "Section 3 · Powers",
      body: `Here is an argument that sounds excellent. **This lesson takes it apart, because that is what you are supposed to do to an argument that sounds excellent.**

**The argument, as it was proposed.** Indianapolis offers a single, dated, city-scale decision that ties the Black cultural district, the schools, the suburbs and the tax base together: **the 1970 Unigov consolidation.** If it holds, a learner can stand on Indiana Avenue, then in a suburban township, and see two ends of one decision.

**The test is chronology, and it is the cheapest test in history.** Line the dates up and ask whether the proposed cause comes before its proposed effects.

| Date | Event |
|---|---|
| 1945 | Indiana General Assembly identifies Pat Ward's Bottom as blighted |
| 1948 | Demolition begins there |
| 1954, 1956 | Properties in the area designated blighted; the Redevelopment Commission declares almost 38 acres blighted for the IU Medical Center |
| 1957 | The state announces downtown freeway planning |
| 1958 | The joint IU and Purdue campus plan is proposed |
| March 1962 | IU forms Hoosier Realty Corporation |
| July 1964 to August 1966 | IU purchases 401 parcels |
| June 1965 | IU trustees resolve to expand the campus, including by eminent domain |
| October 1965 | Possible first IU purchase on Indiana Avenue itself |
| 1968 to 1971 | I-65 construction |
| **January 1, 1970** | **Unigov takes effect** |
| 1971 to 1983 | Lockefield exodus, decision to raze, demolition |

**The verdict, stated plainly. The spine is thinner than proposed, and this course reports that as a result rather than hiding it.**

**Where the argument fails.** **Unigov cannot be the cause of what happened to Indiana Avenue's buildings.** Every documented instrument that took them was already running, and most of the clearance decisions were already made, before Unigov took effect. **A cause cannot postdate its effect.** Any account that says Unigov destroyed Indiana Avenue is wrong on the dates, and you can check that in five minutes with the table above.

**Where the argument holds completely.** **Unigov links the schools and the suburbs, and it does so on the record.** The exclusion of school districts was deliberate, was explained at the time by the mayor and the school board president, and was later found by a federal judge to have fostered segregation. The excluded cities and townships are named in the statute's design. **That half needs no softening at all.**

**Where the argument holds in a weaker and more interesting form.** Unigov is not what happened **to** the Avenue. It is what happened **around** it, immediately afterwards, and it governs what happens **next**. From January 1, 1970, decisions about this ground, its zoning, its comprehensive plan, its redevelopment and its budget, are made by a government elected by a county-wide electorate in which the Black share had just fallen from 27 percent to 17 percent (Wachter, 2014). **The district was cleared under one electorate and has been planned, ever since, under another.** That is a real and defensible claim, it is smaller than the one proposed, and it is the one this course makes.

**Three lessons about method, which outlast every fact in this course.**
1. **Build the chronology before you build the argument.** A table of dates costs an hour and kills bad theses cheaply.
2. **A weakened claim that survives is worth more than a strong claim that does not.** "Unigov changed who governs this ground" is checkable. "Unigov destroyed the Avenue" is not, and it is false.
3. **Report the weakening.** If you tested a thesis and it partly failed, that is a finding and it belongs in your write-up. **Suppressing it is the actual error**, not having had the idea in the first place.

**What is still open, and would settle it.** The minutes and project files of the Indianapolis Redevelopment Commission, the Indiana University Board of Trustees minutes from 1962 to 1968, the state highway department's right-of-way maps for the I-65 alignment, and the Indianapolis Recorder's coverage across the whole period. **None of those has been read into this course.** They are public or requestable, and they are the next real work on this question.

## Sources
- Encyclopedia of Indianapolis. (n.d.-a). *Indiana Avenue*. https://indyencyclopedia.org/indiana-avenue/
- Encyclopedia of Indianapolis. (n.d.-e). *Midtown*. https://indyencyclopedia.org/midtown/
- Historic Indianapolis. (n.d.). *Flats lost: I-65 construction*. https://historicindianapolis.com/flats-lost-i-65-construction/
- Mirror Indy, & Open Campus. (2024, October 1). *Indy's lost Black neighborhood: How IUPUI displaced thousands*. https://mirrorindy.org/iupui-black-wall-street-indianapolis-displacement-indiana-avenue/
- Wachter, J. (2014, May). *40 years after Unigov: Indianapolis and Marion County's experience with consolidated government*. The Abell Foundation. https://abell.org/wp-content/uploads/2022/02/ec-unigov514.pdf`,
      recallContent: [
        {
          prompt: "What was the proposed spine for this course cluster, and what is the verdict?",
          answer: "That the 1970 Unigov consolidation is one decision tying the district, the schools and the suburbs together. Verdict: the spine is thinner than proposed. It holds for schools and suburbs and fails for the district's buildings.",
        },
        {
          prompt: "Why can Unigov not be the cause of the Avenue's demolition?",
          answer: "Because it took effect on January 1, 1970, and the blight designations, campus plan, freeway announcement and IU's parcel purchases all predate it. A cause cannot postdate its effect.",
        },
        {
          prompt: "State the weaker claim that survives the chronology test.",
          answer: "Unigov did not clear the Avenue; it changed who governs the ground afterwards. The district was cleared under one electorate and has been planned ever since under another, in which the Black share fell immediately from 27 to 17 percent.",
        },
        {
          prompt: "Name the three method lessons from this test.",
          answer: "Build the chronology before the argument; a weakened claim that survives beats a strong claim that does not; and report the weakening, because suppressing it is the actual error.",
        },
        {
          prompt: "Which records would settle the open questions, and have they been read into this course?",
          answer: "The Redevelopment Commission minutes and project files, IU trustee minutes 1962 to 1968, the state highway right-of-way maps for I-65, and the Indianapolis Recorder's coverage. None of them has been read here. They are public or requestable.",
        },
      ],
    },
    {
      slug: "ia-quiz-powers",
      title: "14 · Quiz: who decided",
      section: "Section 3 · Powers",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        shuffleOptions: true,
        questions: [
          {
            prompt: "This course defines an 'instrument' as:",
            options: [
              "Any historical cause",
              "A specific legal power, exercised by a specific body, under a specific statute, leaving a specific document",
              "A tool used in construction",
              "A newspaper account of a decision",
            ],
            correctIndex: 1,
            explanation: "The last clause is what makes history researchable: if a power was exercised, a named record exists.",
            sourceLessonSlug: "ia-powers-blight",
          },
          {
            prompt: "Which body chose Pat Ward's Bottom for the city's first slum clearance, and when did demolition begin?",
            options: [
              "The Metropolitan Development Commission, 1970",
              "The Indianapolis Redevelopment Commission, with demolition beginning in 1948",
              "The Indiana Department of Highways, 1957",
              "The IU Board of Trustees, 1965",
            ],
            correctIndex: 1,
            explanation: "The General Assembly identified it as blighted in 1945; the Redevelopment Commission chose it, and homes came down starting in 1948.",
            sourceLessonSlug: "ia-powers-blight",
          },
          {
            prompt: "Why is a blight designation described as a legal conclusion rather than a description?",
            options: [
              "Because it is written by lawyers",
              "Because a body reaches it on a record against statutory criteria, and it unlocks acquisition and clearance powers",
              "Because it can never be challenged",
              "Because it only applies to vacant land",
            ],
            correctIndex: 1,
            explanation: "The designation is the hinge: before it, the powers do not exist; after it, they do.",
            sourceLessonSlug: "ia-powers-blight",
          },
          {
            prompt: "The circularity problem in physical blight criteria is that:",
            options: [
              "The criteria are too strict",
              "Deterioration measured by the criteria is produced by the same policies of refused credit and investment that preceded it",
              "The criteria change every year",
              "Only old buildings can qualify",
            ],
            correctIndex: 1,
            explanation: "A neighbourhood denied mortgage capital for decades measures as deteriorated, and the measurement then justifies clearance.",
            sourceLessonSlug: "ia-powers-blight",
          },
          {
            prompt: "In a typical eminent domain proceeding, what is normally in dispute?",
            options: [
              "Whether the taking will happen",
              "The price",
              "The identity of the owner",
              "Whether the statute is constitutional",
            ],
            correctIndex: 1,
            explanation: "The owner's refusal usually leads to a court setting compensation, not to the project stopping.",
            sourceLessonSlug: "ia-powers-eminent-domain",
          },
          {
            prompt: "In the documented Temple family case, what were the first offer and the final settlement, and how far apart in time?",
            options: [
              "23,000 dollars in 1965 and 50,000 dollars in June 1979, fourteen years apart",
              "50,000 dollars in 1962 and 75,000 dollars in 1968",
              "10,000 dollars in 1970 and 12,000 dollars in 1972",
              "The case was never settled",
            ],
            correctIndex: 0,
            explanation: "Governor Whitcomb authorised eminent domain against the family in December 1972 and again in January 1976. The site became University Tower.",
            sourceLessonSlug: "ia-powers-eminent-domain",
          },
          {
            prompt: "Why should the Temple settlement NOT be turned into a statistic?",
            options: [
              "Because the family asked for privacy",
              "Because one case establishes no average, pattern or rate, and the 1965 and 1979 dollar amounts are not comparable without a stated inflation adjustment",
              "Because the figures are disputed",
              "Because eminent domain was not used",
            ],
            correctIndex: 1,
            explanation: "One documented case is evidence about that case. Generalising from it manufactures a rate nobody measured.",
            sourceLessonSlug: "ia-powers-eminent-domain",
          },
          {
            prompt: "Under the Federal-Aid Highway Act of 1956, who chose an interstate's route through a city?",
            options: [
              "Congress, by statute for each city",
              "The state highway department, in negotiation with local officials, subject to federal approval",
              "The Bureau of the Census",
              "The affected neighbourhoods, by referendum",
            ],
            correctIndex: 1,
            explanation: "Roughly 90 percent of the money was federal, but the line itself was largely a state and local choice, which is why the alignment decision has identifiable authors.",
            sourceLessonSlug: "ia-powers-alignment",
          },
          {
            prompt: "The figure '17,000 residents displaced and 8,000 buildings demolished' should be used how?",
            options: [
              "As the Indiana Avenue displacement total",
              "Attributed to its owner and date (an Indianapolis Star article of October 15, 1976, per WRTV) and understood as a city-wide figure",
              "Averaged with other published estimates",
              "Not mentioned at all",
            ],
            correctIndex: 1,
            explanation: "It covers roughly 31 miles of interstate inside I-465, not one corridor, and it is a contemporaneous newspaper figure with no published method.",
            sourceLessonSlug: "ia-powers-alignment",
          },
          {
            prompt: "The Encyclopedia of Indianapolis entry on Indiana Avenue names which causes of the Avenue's loss?",
            options: [
              "Interstate highway construction only",
              "The 1958 joint campus plan, blight designations, Indiana University's parcel purchases, and the Lockefield demolition",
              "Population loss and changing taste",
              "A single 1970 consolidation law",
            ],
            correctIndex: 1,
            explanation: "That entry does not name highway construction among the Avenue's causes at all, which is why this course separates the corridor's fabric from the surrounding neighbourhoods.",
            sourceLessonSlug: "ia-powers-alignment",
          },
          {
            prompt: "What was Hoosier Realty Corporation, and why was it used?",
            options: [
              "A city agency that condemned property",
              "A nonprofit real estate entity Indiana University formed in March 1962, which acquired more than 2,000 houses and lots; buying under a separate name keeps prices from rising",
              "A private developer that opposed the campus",
              "The state highway department's land arm",
            ],
            correctIndex: 1,
            explanation: "Land assembly gets more expensive once sellers know the buyer and the plan, so the deed records will not always carry the institution's name.",
            sourceLessonSlug: "ia-powers-campus",
          },
          {
            prompt: "How many parcels did Indiana University purchase between July 1964 and August 1966?",
            options: ["41", "401", "2,000", "300"],
            correctIndex: 1,
            explanation: "401 parcels in that 25-month window, per the Encyclopedia of Indianapolis. About 300 acres were assembled overall from the 1960s to the 1980s.",
            sourceLessonSlug: "ia-powers-campus",
          },
          {
            prompt: "Unigov was approved in 1969 and took effect January 1, 1970. What is procedurally unusual about it?",
            options: [
              "It passed by a two-thirds referendum",
              "It is the only major postwar city-county consolidation accomplished without a voter referendum",
              "It was imposed by a federal court",
              "It required approval from every township",
            ],
            correctIndex: 1,
            explanation: "Nashville and Jacksonville went to their voters. Indianapolis did not; a referendum was discussed by the mayor's task force and overwhelmingly opposed.",
            sourceLessonSlug: "ia-powers-unigov",
          },
          {
            prompt: "What did Unigov leave OUT of the consolidation?",
            options: [
              "Nothing; it merged all local government",
              "School districts, incorporated cities and towns over 5,000 (Beech Grove, Lawrence, Southport, Speedway), the nine townships, several municipal corporations, and the county courts",
              "Only the police and fire departments",
              "Only the school districts",
            ],
            correctIndex: 1,
            explanation: "Fifty separate governmental units and more than 61 taxing districts remain in Marion County.",
            sourceLessonSlug: "ia-powers-unigov",
          },
          {
            prompt: "Testing the proposed Unigov spine against the chronology shows that:",
            options: [
              "Unigov caused the demolition of Indiana Avenue",
              "Unigov cannot have caused the Avenue's clearance, because the blight designations, campus plan, freeway announcement and parcel purchases all predate January 1, 1970",
              "The chronology is unknowable",
              "The Avenue was cleared entirely after 1970",
            ],
            correctIndex: 1,
            explanation: "The surviving, weaker claim is that Unigov changed who governs the ground afterwards, with the Black share of the city falling from 27 to 17 percent.",
            sourceLessonSlug: "ia-powers-test-the-spine",
          },
        ],
      },
    },
    // <<< APPEND NEXT SECTION ABOVE THIS LINE >>>
  ],
};
