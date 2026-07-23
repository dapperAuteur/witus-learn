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
    // <<< APPEND NEXT SECTION ABOVE THIS LINE >>>
  ],
};
