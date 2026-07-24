// Authored "The Green Book: How to Read a Route" — a cited, high-school-and-up method course on
// Learn.WitUS (Culture & History), and PHASE 1, COURSE 1 of the route-courses series planned in
// plans/37-green-book-route-courses.md. It is deliberately a METHOD course, not a site tour: the
// learner should finish able to open a digitized edition, read a listing, chain listings into a
// route, read a gap as evidence, and research what happened to an address afterwards. Every later
// site course in the series assumes this one.
//
// Sourcing discipline (the load-bearing part of this file):
//   * Every teaching lesson carries APA 7 in-line citations and a `## Sources` bibliography.
//   * NOTHING here is asserted from memory. The primary-source claims (the 1940 category
//     vocabulary, the 1940 "does not imply recommended" disclaimer, the 1956 star legend, the
//     one-listing New Mexico section, the Route 66 city chain, the Tulsa Greenwood entries) were
//     read directly out of the digitized 1940 and 1956 editions held by the Schomburg Center at
//     the New York Public Library. Secondary framing comes from the National Park Service's Green
//     Book historic context and its National Register property list, the NYPL research guide,
//     Title II of the Civil Rights Act read from the statute, and the National Archives.
//   * NO INVENTED STATISTIC, PERSON, QUOTATION, ADDRESS, OR LISTING. Where a number is contested,
//     the course gives the competing figures WITH who produced them and what each counted:
//     "at least half closed within 10 years" (NPS), "less than 20 percent extant" (Reut, via NPS),
//     and "approximately 30% remain standing in 2014" for Route 66 communities (NPS). The course
//     teaches that these disagree because they count different things, and says plainly that no
//     complete national survey exists.
//   * A live, teachable disagreement is kept rather than smoothed: NPS dates the Latimore Tourist
//     Home's Green Book appearance to the 1949 edition, Friends of the Latimore Tourist Home say
//     1939, and the 1940 edition carries it. The course shows the learner the disagreement and
//     sends them to the digitized editions.
//   * No fabricated composite characters. Real, cited people only (Victor and Alma Green, Novera
//     Dashiell, Eugene and Cora Wilson Latimore, James A. Jackson, Langley Waller).
//
// House rule: NO em-dashes or en-dashes in prose. The listing separator printed in the book is a
// dash; where a listing is reproduced verbatim it sits in a markdown blockquote, which the
// em-dash checker recognises as quoted material.

import type { AuthoredCourse } from "./authored-course";

export const GREEN_BOOK_READ_A_ROUTE_COURSE: AuthoredCourse = {
  title: "The Green Book: How to Read a Route",
  description:
    "A cited, high-school-and-up method course on The Negro Motorist Green Book, the annual travel guide Victor H. Green published from 1936 to 1966 so Black American motorists could find lodging, food, fuel, and repair without being turned away or endangered. This is not a tour of famous places. It teaches you to DO something: to open a digitized edition at the Schomburg Center, read a listing down to its abbreviations and its silences, chain listings into an actual route across a state line, read a gap in the listings as evidence rather than as a hole, map the cities the book leaned on, and research what happened to an address after the Civil Rights Act of 1964, after urban renewal, and after the interstates. It closes with a research assignment you carry out yourself on a real address. Prerequisite for every site course in the route series.",
  lessons: [
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 1 · What the book was
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "gbr-what-it-was",
      title: "1 · What the Green Book was, and who made it",
      section: "Section 1 · What the book was",
      body: `**The Green Book was a working tool, not a souvenir.** It was an annual directory of businesses that would serve Black travelers, published for thirty years, and it existed because a Black family driving across the United States could not assume that any given hotel, lunch counter, or filling station would take their money.

**Who made it.** Victor Hugo Green was born in Manhattan on November 9, 1892, grew up in Hackensack, New Jersey, and began carrying mail for the U.S. Post Office in Bergen County in 1913. In September 1917 he married Alma S. Duke of Richmond, Virginia, who had come north as part of the Great Migration, and the couple settled in Harlem. He served in the Army in the First World War, returned to the postal route, and in 1936 published the first edition of the guide that carried his name (National Park Service, n.d.-b). He kept the mail job the entire time the guide was growing, and did not retire from the Post Office until 1952, after thirty-nine years of service (Green, 1956).

**Alma Green was not a footnote.** She worked on the project from the start, was credited as editor and publisher from 1959, and ran the whole operation after Victor's death in 1960. The Greens published it until 1962; the final two editions, for 1964 to 1965 and 1966 to 1967, were produced by the former newspaper writer Langley Waller (National Park Service, n.d.-a).

**How he got the listings, which is the part that explains everything else.** Green was a postman with a national network of other postmen. He asked fellow postal employees to solicit listings and advertising from Black-owned businesses along their own delivery routes, and he asked readers to send in places they had used. As the guide grew he commissioned agents to gather new listings and check existing ones (National Park Service, n.d.-a, n.d.-b). Hold onto this: **the book is a record of who someone told Green about**, not a survey of everything that existed. Section 3 turns that single fact into a reading skill.

**How it spread.** Green sold copies by mail order and through the listed businesses themselves, and he had one advantage none of the rival guides had. James A. Jackson, a Black marketing executive at Esso, arranged for Esso stations nationwide to sell the Green Book. Esso was unusual among the large oil companies in franchising stations to Black owners and in serving Black customers at nearly all of its stations, so the endorsement carried real weight (National Park Service, n.d.-a). Copies also moved through Black churches and the Urban League (National Park Service, n.d.-b).

**Scale.** By 1962 the guide's circulation was over two million nationwide, and across its lifetime it carried entries for more than ten thousand businesses (National Park Service, n.d.-a).

**It was not the only one.** At least six other Black travel guides were published during the Green Book's run, including Hackley and Harrison's Hotel and Apartment Guide for Colored Travelers, which came first in 1930 and lasted a year, and Travelguide, published from 1947 to 1963 under the motto "Vacation and Recreation Without Humiliation" (National Park Service, n.d.-a). The Green Book outlasted them all, which is why it is the one we can read a route from.

## Sources
- Green, V. H. (Ed.). (1956). *The Negro travelers' Green book: 1956*. Victor H. Green & Co. Schomburg Center for Research in Black Culture, The New York Public Library. https://digitalcollections.nypl.org/collections/the-green-book
- National Park Service. (n.d.-a). *The Green Book: An historic context*. https://www.nps.gov/articles/000/the-green-book-an-historic-context.htm
- National Park Service. (n.d.-b). *Green Book properties listed in the National Register of Historic Places*. https://www.nps.gov/articles/green-book-properties-listed-in-the-national-register-of-historic-places.htm`,
    },
    {
      slug: "gbr-editions-and-titles",
      title: "2 · The book kept changing, and the changes are evidence",
      section: "Section 1 · What the book was",
      body: `A researcher's instinct is to treat "the Green Book" as one object. It was not. Thirty editions came out under three different titles, covering different territory, listing different kinds of business. **Every one of those changes tells you something about the country in that year**, which means the edition you pick is itself a research decision.

**The territory grew.**
- **1936.** A local guide for metropolitan New York. The first two editions leaned heavily on Harlem businesses (National Park Service, n.d.-a).
- **1937.** Demand was high enough that Green made it national (New York Public Library, n.d.).
- **1942 to 1945.** Wartime rationing forced a hiatus of about four years (National Park Service, n.d.-a).
- **1946.** It came back with a redesign. This is the first edition with a cover illustration, and the first appearance of the line that ended up on every later cover: "Carry your Green Book with you, you may need it" (National Park Service, n.d.-a).
- **1947.** Coverage of the United States and Alaska. **1949.** Bermuda, Mexico, and Canada added. **1952.** Renamed *The Negro Travelers' Green Book*. By the 1963 to 1964 edition it carried listings in thirty African countries (Green, 1956; National Park Service, n.d.-a).

**The categories shrank.** This is the change that matters most for reading a listing. Through the 1940s the book listed hotels, tourist homes, restaurants, taverns, night clubs, beauty parlors, barber shops, service stations, garages, drug stores, tailors, taxicabs, road houses, and liquor stores. Beginning with the **1956** edition it dropped most of that and listed lodging and restaurants almost exclusively (Green, 1940; Green, 1956; National Park Service, n.d.-a). If you search a 1958 edition for a barber shop and find nothing, you have learned about the 1956 editorial change, not about barbers.

**The tone changed too.** In 1947 the guide printed a list of 106 Black colleges. In 1961 the assistant editor Novera Dashiell wrote approvingly about the sit-in movement. The 1963 to 1964 edition ran an article on page 2 called "Your Rights, Briefly Speaking," a state-by-state summary of civil rights laws. The final edition, 1966 to 1967, told readers about the Civil Rights Act of 1964 (National Park Service, n.d.-a). A guide that began by helping people avoid trouble ended by telling them what they were owed.

**The publisher's own words are worth reading closely.** From the introduction to the 1949 edition:

> There will be a day sometime in the near future when this guide will not have to be published. That is when we as a race will have equal opportunities and privileges in the United States. It will be a great day for us to suspend this publication for then we can go wherever we please, and without embarrassment.

That sentence is not decoration. It is the publisher telling you that the book was designed to become unnecessary, which is the frame for the last section of this course (New York Public Library, n.d.).

## Sources
- Green, V. H. (Ed.). (1940). *The Negro motorist Green book: 1940*. Victor H. Green. Schomburg Center for Research in Black Culture, The New York Public Library. https://digitalcollections.nypl.org/collections/the-green-book
- Green, V. H. (Ed.). (1956). *The Negro travelers' Green book: 1956*. Victor H. Green & Co. Schomburg Center for Research in Black Culture, The New York Public Library. https://digitalcollections.nypl.org/collections/the-green-book
- National Park Service. (n.d.-a). *The Green Book: An historic context*. https://www.nps.gov/articles/000/the-green-book-an-historic-context.htm
- New York Public Library. (n.d.). *Green Book research guide*. https://libguides.nypl.org/greenbook`,
      recallContent: [
        {
          prompt: "Who published the first Green Book, in what year, and what was his day job?",
          answer: "Victor Hugo Green, in 1936. He was a letter carrier for the U.S. Post Office, and stayed one until he retired in 1952 after 39 years.",
        },
        {
          prompt: "How did Green actually collect his listings?",
          answer: "Through a network of fellow postal employees who solicited listings along their delivery routes, plus reader submissions and, later, paid agents. So the book records what someone reported to him, not everything that existed.",
        },
        {
          prompt: "Who ran the Green Book after Victor Green died in 1960?",
          answer: "His wife Alma Green, credited as editor and publisher from 1959, ran it until 1962. The last two editions were published by Langley Waller.",
        },
        {
          prompt: "Which oil company sold the Green Book at its stations nationwide, and who arranged it?",
          answer: "Esso. James A. Jackson, a Black marketing executive at the company, arranged it. Esso also franchised stations to Black owners.",
        },
      ],
    },
    {
      slug: "gbr-quiz-what-it-was",
      title: "3 · Quiz: what the book was",
      section: "Section 1 · What the book was",
      quiz: {
        passingScore: 70,
        // 15-question bank served 8 at a time with shuffled options, so a retake is a
        // different quiz rather than the same list (the repo standard, src/lib/quiz.ts).
        questionsPerAttempt: 8,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Who published the first edition of the Green Book, and in what year?",
            options: ["Alma Duke Green, in 1930", "Victor Hugo Green, in 1936", "Langley Waller, in 1936", "James A. Jackson, in 1939"],
            correctIndex: 1,
            explanation: "Victor Hugo Green published the first edition in 1936 while working as a letter carrier in New York.",
            sourceLessonSlug: "gbr-what-it-was",
          },
          {
            prompt: "What was Victor Green's job while he built the guide?",
            options: ["Newspaper editor", "Hotel owner", "Letter carrier for the U.S. Post Office", "Oil company executive"],
            correctIndex: 2,
            explanation: "He carried mail from 1913 and did not retire until 1952, after thirty-nine years of service.",
            sourceLessonSlug: "gbr-what-it-was",
          },
          {
            prompt: "How did Green primarily gather listings in the early years?",
            options: [
              "By buying a commercial hotel database",
              "Through a network of fellow postal employees who solicited listings along their routes, plus reader submissions",
              "From federal census records",
              "By visiting every city himself",
            ],
            correctIndex: 1,
            explanation: "Other postmen solicited listings and advertising along their delivery routes, and readers wrote in with places they had used.",
            sourceLessonSlug: "gbr-what-it-was",
          },
          {
            prompt: "Because of how listings were gathered, the Green Book is best understood as a record of:",
            options: [
              "Every business in America that served Black customers",
              "Only businesses owned by Black people",
              "What someone reported to Green, which is not the same as everything that existed",
              "Government-inspected establishments",
            ],
            correctIndex: 2,
            explanation: "It is a reported directory, not a survey. That distinction drives every reading skill in this course.",
            sourceLessonSlug: "gbr-what-it-was",
          },
          {
            prompt: "Who ran the Green Book after Victor Green's death in 1960?",
            options: ["Novera Dashiell", "Alma Green", "Langley Waller immediately", "The National Park Service"],
            correctIndex: 1,
            explanation: "Alma Green, credited as editor and publisher from 1959, took over completely and ran it until 1962.",
            sourceLessonSlug: "gbr-what-it-was",
          },
          {
            prompt: "Which oil company sold the Green Book at its stations nationwide?",
            options: ["Shell", "Texaco", "Esso", "Gulf"],
            correctIndex: 2,
            explanation: "James A. Jackson, a Black marketing executive at Esso, arranged nationwide distribution through Esso stations.",
            sourceLessonSlug: "gbr-what-it-was",
          },
          {
            prompt: "By 1962, the Green Book's circulation was approximately:",
            options: ["Two thousand", "Twenty thousand", "Two hundred thousand", "Over two million"],
            correctIndex: 3,
            explanation: "The National Park Service puts nationwide circulation at over two million by 1962.",
            sourceLessonSlug: "gbr-what-it-was",
          },
          {
            prompt: "Across its lifetime, the Green Book carried entries for roughly how many businesses?",
            options: ["More than 1,000", "More than 10,000", "More than 100,000", "Exactly 5,280"],
            correctIndex: 1,
            explanation: "Over its thirty years the guide contained entries for more than ten thousand businesses.",
            sourceLessonSlug: "gbr-what-it-was",
          },
          {
            prompt: "The 1936 edition covered which area?",
            options: ["The entire United States", "Metropolitan New York", "The South only", "The West Coast"],
            correctIndex: 1,
            explanation: "It began as a local New York guide, with the first two editions leaning heavily on Harlem businesses, and went national in 1937.",
            sourceLessonSlug: "gbr-editions-and-titles",
          },
          {
            prompt: "Why is there a roughly four-year gap in editions in the early 1940s?",
            options: [
              "Green was ill",
              "Wartime rationing forced a hiatus during the Second World War",
              "The book was banned",
              "There were no listings left",
            ],
            correctIndex: 1,
            explanation: "Rationing of supplies during the Second World War forced a hiatus of about four years; the guide returned in 1946.",
            sourceLessonSlug: "gbr-editions-and-titles",
          },
          {
            prompt: "Which change first appears on the 1946 cover?",
            options: [
              "The price",
              "A cover illustration and the line 'Carry your Green Book with you, you may need it'",
              "A map of Route 66",
              "The Esso logo",
            ],
            correctIndex: 1,
            explanation: "1946 brought the first illustrated cover and the well-known tag line, both of which stayed.",
            sourceLessonSlug: "gbr-editions-and-titles",
          },
          {
            prompt: "Beginning with the 1956 edition, the categories of business listed:",
            options: [
              "Expanded to include schools and churches",
              "Narrowed to lodging and restaurants almost exclusively",
              "Stayed exactly the same as in 1940",
              "Dropped hotels",
            ],
            correctIndex: 1,
            explanation: "The 1956 edition dropped gas stations, drug stores, tailors, hair salons and liquor stores, focusing on lodging and restaurants.",
            sourceLessonSlug: "gbr-editions-and-titles",
          },
          {
            prompt: "You search a 1958 edition for beauty parlors in a city and find none. The best interpretation is:",
            options: [
              "There were no Black beauty parlors in that city in 1958",
              "The 1956 editorial change removed that category from the guide",
              "The city was a sundown town",
              "The page is missing",
            ],
            correctIndex: 1,
            explanation: "After 1956 the guide stopped carrying that category, so its absence is about the book, not about the city.",
            sourceLessonSlug: "gbr-editions-and-titles",
          },
          {
            prompt: "In what year was the guide renamed The Negro Travelers' Green Book?",
            options: ["1946", "1949", "1952", "1964"],
            correctIndex: 2,
            explanation: "The 1952 edition carried the new title, reflecting travel beyond the automobile and beyond U.S. borders.",
            sourceLessonSlug: "gbr-editions-and-titles",
          },
          {
            prompt: "What did Victor Green write in the 1949 introduction about the guide's future?",
            options: [
              "That it would be published forever",
              "That he hoped to sell it to a larger publisher",
              "That there would come a day when it would not have to be published, once Black Americans had equal opportunities",
              "That readers should stop sending in listings",
            ],
            correctIndex: 2,
            explanation: "Green said suspending publication would be a great day, because it would mean people could go wherever they pleased without embarrassment.",
            sourceLessonSlug: "gbr-editions-and-titles",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 2 · Why it existed
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "gbr-the-risk-of-the-road",
      title: "4 · What 'we can't stop here' actually meant",
      section: "Section 2 · Why it existed",
      body: `To read the book correctly you have to understand the problem it solved, and the problem was not inconvenience.

**The car was freedom and exposure at the same time.** A Black family in an automobile could skip the segregated railroad car and the segregated bus entirely, travel on their own schedule, and carry their own food. Gretchen Sorin's *Driving While Black* (2020) argues that this is exactly why the automobile mattered so much in Black American life: driving was a way of resisting the daily humiliations of segregated public transportation. But the car also put the family on unfamiliar roads, at night, in towns that had never seen them, dependent on strangers for fuel and a bed.

**The extreme case had a name.** Sundown towns were communities that excluded Black residents and visitors, often enforcing it after dark by ordinance, by sign, by police practice, or by threat. Sociologist James W. Loewen set out to study them expecting to find perhaps fifty across the country. He documented more than 440 in Illinois alone and thousands nationwide, and he found that they were far more common outside the South than most people assume (Loewen, 2005). The National Park Service names the real and immediate danger of being stranded in one as one extreme of what Green Book motorists were trying to avoid (National Park Service, n.d.-a).

**Most days were not the extreme case, and that matters too.** Far more common than physical danger was refusal, and the deliberate humiliation attached to it: being told there was no room, being sent to a back door, being served but not seated. The Green Book's own 1956 foreword puts the ordinary version plainly:

> The White traveler has had no difficulty in getting accommodations, but with the Negro it has been different. He, before the advent of a Negro travel guide, had to depend on word of mouth, and many times accommodations were not available.

Word of mouth was the alternative, and word of mouth does not scale to a two-thousand-mile drive (Green, 1956).

**The book was a tool for spending money on purpose.** Candacy Taylor, whose *Overground Railroad* (2020) is the most thorough history of the guide, has argued that Green Book sites "reshape the story of black mobility and tell a story that is not all about struggle" (as cited in National Park Service, n.d.-a). The guide arrived inside an existing tradition of Black economic organizing, including the "Don't Buy Where You Can't Work" boycotts of the 1930s. Choosing where to stop was a decision with money attached, and both the traveler and the business owner knew it (National Park Service, n.d.-a).

Read the guide as a safety document and you will get the history half right. Read it as a safety document **and** a business directory built by a community pooling its buying power, and you will get the listings right too.

## Sources
- Green, V. H. (Ed.). (1956). *The Negro travelers' Green book: 1956*. Victor H. Green & Co. Schomburg Center for Research in Black Culture, The New York Public Library. https://digitalcollections.nypl.org/collections/the-green-book
- Loewen, J. W. (2005). *Sundown towns: A hidden dimension of American racism*. The New Press.
- National Park Service. (n.d.-a). *The Green Book: An historic context*. https://www.nps.gov/articles/000/the-green-book-an-historic-context.htm
- Sorin, G. S. (2020). *Driving while Black: African American travel and the road to civil rights*. Liveright.
- Taylor, C. (2020). *Overground railroad: The Green Book and the roots of Black travel in America*. Abrams Press.`,
      recallContent: [
        {
          prompt: "In 1936 the Green Book covered what area, and when did it go national?",
          answer: "Metropolitan New York only, with the first two editions leaning on Harlem businesses. It went national in 1937.",
        },
        {
          prompt: "Why is there a gap in the editions in the early 1940s?",
          answer: "Wartime rationing forced a hiatus of about four years, roughly 1942 to 1945. The guide returned with a redesigned 1946 edition.",
        },
        {
          prompt: "What changed about the categories in the 1956 edition, and why does that matter to a researcher?",
          answer: "It stopped listing service stations, drug stores, tailors, hair salons, liquor stores and more, and narrowed to lodging and restaurants. So an empty barber-shop search in a late edition reflects an editorial decision, not the absence of barbers.",
        },
        {
          prompt: "What did Victor Green say in 1949 that he wanted for the book?",
          answer: "That there would be a day in the near future when the guide would not have to be published, because Black Americans would have equal opportunities and could go wherever they pleased without embarrassment.",
        },
      ],
    },
    {
      slug: "gbr-what-the-book-solved",
      title: "5 · The six needs of a day on the road",
      section: "Section 2 · Why it existed",
      body: `Here is the practical way to think about the guide. A day of driving generates a fixed set of needs, and segregation could block any one of them. Line the needs up against the categories the book printed and the whole structure snaps into focus.

| The need | What the 1940 book listed for it |
| --- | --- |
| Sleep | Hotels, tourist homes, road houses |
| Food | Restaurants, taverns |
| Fuel | Service stations |
| Breakdown | Garages, automotives |
| Grooming and health | Beauty parlors, barber shops, drug stores, tailors |
| Evening | Night clubs, taverns |

Every one of those headings appears in the 1940 edition (Green, 1940). A guide that lists your barber is not a guide to surviving a trip. It is a guide to living a normal life while away from home, which was the point.

**The tourist home is the category to understand first.** A tourist home was a private residence with a room to rent. During the Depression, renting a room was a way for households of every race to earn income, but for Black travelers a tourist home often answered a need no hotel could, because in a great many towns there was no hotel that would take them. Most were owned or operated by married or widowed women, and running one meant a measure of economic independence for the woman who did it. The Green Book listed more than fourteen hundred tourist homes across its run. In Nebraska, and in Michigan outside Detroit, tourist homes made up about ninety percent of all Green Book sites (National Park Service, n.d.-a).

**Hair was infrastructure.** Beauty salon listings frequently outnumbered lodging and food listings in a given Green Book city. Salons doubled as gathering places, and during the civil rights years some salon workers drove clients to register to vote or accepted NAACP mail on their behalf, since having it delivered at home carried risk. Candacy Taylor's summary is exact: "As the automobile industry lifted black men out of poverty and into the middle class, the hair industry did the same for black women" (as cited in National Park Service, n.d.-a).

**Institutions counted as infrastructure too.** The guide listed forty-seven YWCAs, which offered safe lodging for women travelers, and in 1947 it printed a list of 106 Black colleges (National Park Service, n.d.-a).

**Why this matters for reading.** When you open a city's section, do not just look for the hotel. Look at **which needs are covered and which are not**. A city with four tourist homes and no service station tells a different story than a city with a service station, a garage, and no bed. You are reading a supply chain for a day of ordinary life.

## Sources
- Green, V. H. (Ed.). (1940). *The Negro motorist Green book: 1940*. Victor H. Green. Schomburg Center for Research in Black Culture, The New York Public Library. https://digitalcollections.nypl.org/collections/the-green-book
- National Park Service. (n.d.-a). *The Green Book: An historic context*. https://www.nps.gov/articles/000/the-green-book-an-historic-context.htm
- Taylor, C. (2020). *Overground railroad: The Green Book and the roots of Black travel in America*. Abrams Press.`,
      recallContent: [
        {
          prompt: "Why did the automobile matter so much in Black American life, according to Sorin (2020)?",
          answer: "Driving let families avoid the segregated railroad car and bus and travel on their own terms, so the car became a tool of resistance as well as transport.",
        },
        {
          prompt: "What is a sundown town, and roughly how many did Loewen document?",
          answer: "A community that excluded Black residents and visitors, often enforced after dark. Loewen expected about fifty nationwide and instead documented more than 440 in Illinois alone and thousands across the country, most outside the South.",
        },
        {
          prompt: "What was the alternative to the Green Book, in the guide's own words?",
          answer: "Word of mouth. The 1956 foreword says the Black traveler had to depend on it before a Negro travel guide existed, and often accommodations were simply not available.",
        },
      ],
    },
    {
      slug: "gbr-quiz-why",
      title: "6 · Quiz: why the book existed",
      section: "Section 2 · Why it existed",
      quiz: {
        passingScore: 70,
        // 15-question bank served 8 at a time with shuffled options, so a retake is a
        // different quiz rather than the same list (the repo standard, src/lib/quiz.ts).
        questionsPerAttempt: 8,
        shuffleOptions: true,
        questions: [
          {
            prompt: "According to Sorin (2020), why did the automobile matter so much to Black American families?",
            options: [
              "It was cheaper than the train",
              "It let them avoid the segregated railroad car and bus and travel on their own terms, making driving a form of resistance",
              "Cars were exempt from segregation laws",
              "It was the only legal way to cross state lines",
            ],
            correctIndex: 1,
            explanation: "Driving While Black argues the car was a way of resisting the daily humiliations of segregated public transportation.",
            sourceLessonSlug: "gbr-the-risk-of-the-road",
          },
          {
            prompt: "A sundown town was:",
            options: [
              "A town with an early curfew for everyone",
              "A community that excluded Black residents and visitors, often enforced after dark",
              "A resort open only in the evening",
              "A town listed in the Green Book for night driving",
            ],
            correctIndex: 1,
            explanation: "Exclusion was enforced by ordinance, sign, police practice, or threat, and being stranded in one was a real danger.",
            sourceLessonSlug: "gbr-the-risk-of-the-road",
          },
          {
            prompt: "What did Loewen (2005) find when he counted sundown towns?",
            options: [
              "Fewer than he expected, about twenty nationwide",
              "More than 440 in Illinois alone and thousands nationwide, most outside the South",
              "That they existed only in the Deep South",
              "That the concept could not be documented",
            ],
            correctIndex: 1,
            explanation: "He set out expecting roughly fifty nationwide and instead documented far more, concentrated outside the traditional South.",
            sourceLessonSlug: "gbr-the-risk-of-the-road",
          },
          {
            prompt: "What did Black travelers rely on before a printed travel guide existed, according to the 1956 foreword?",
            options: ["Government directories", "Word of mouth", "Railroad timetables", "Chamber of Commerce listings"],
            correctIndex: 1,
            explanation: "The foreword says the traveler had to depend on word of mouth, and many times accommodations were not available.",
            sourceLessonSlug: "gbr-the-risk-of-the-road",
          },
          {
            prompt: "Besides safety, the Green Book functioned as:",
            options: [
              "A government census",
              "A business directory that pooled a community's buying power",
              "A membership card",
              "A legal defense manual",
            ],
            correctIndex: 1,
            explanation: "Choosing where to stop directed money to Black-owned and non-discriminating businesses, inside a tradition that included the 'Don't Buy Where You Can't Work' boycotts.",
            sourceLessonSlug: "gbr-the-risk-of-the-road",
          },
          {
            prompt: "Which need did the 1940 book's 'service stations' category answer?",
            options: ["Sleep", "Food", "Fuel", "Grooming"],
            correctIndex: 2,
            explanation: "Service stations covered fuel; garages covered breakdowns; hotels and tourist homes covered sleep.",
            sourceLessonSlug: "gbr-what-the-book-solved",
          },
          {
            prompt: "A tourist home was:",
            options: [
              "A small hotel chain",
              "A private residence with a room to rent",
              "A campground",
              "A boarding school",
            ],
            correctIndex: 1,
            explanation: "Private homes rented rooms to travelers, which in many towns was the only lodging available to Black families.",
            sourceLessonSlug: "gbr-what-the-book-solved",
          },
          {
            prompt: "Who typically owned or operated tourist homes?",
            options: ["Railroad companies", "Married or widowed women", "Municipal governments", "Oil companies"],
            correctIndex: 1,
            explanation: "Most were run by married or widowed women, and operating one meant a measure of economic independence.",
            sourceLessonSlug: "gbr-what-the-book-solved",
          },
          {
            prompt: "About how many tourist homes did the Green Book list over its lifetime?",
            options: ["About 140", "More than 1,400", "About 14,000", "Exactly 47"],
            correctIndex: 1,
            explanation: "The National Park Service puts the figure at more than fourteen hundred tourist homes across the guide's run.",
            sourceLessonSlug: "gbr-what-the-book-solved",
          },
          {
            prompt: "In Nebraska, and in Michigan outside Detroit, tourist homes made up about what share of Green Book sites?",
            options: ["10 percent", "50 percent", "90 percent", "5 percent"],
            correctIndex: 2,
            explanation: "About ninety percent, which tells you those states had almost no hotel option for Black travelers.",
            sourceLessonSlug: "gbr-what-the-book-solved",
          },
          {
            prompt: "In many Green Book cities, which category frequently outnumbered lodging and food listings?",
            options: ["Garages", "Hair salons", "Night clubs", "Tailors"],
            correctIndex: 1,
            explanation: "Salon listings often outnumbered lodging and food, reflecting how central the hair industry was to Black economic life.",
            sourceLessonSlug: "gbr-what-the-book-solved",
          },
          {
            prompt: "How did some salons contribute directly to the civil rights movement?",
            options: [
              "By refusing white customers",
              "By driving clients to register to vote and accepting NAACP mail on their behalf",
              "By printing the Green Book",
              "By operating as courts",
            ],
            correctIndex: 1,
            explanation: "Salon staff drove clients to voting booths and let NAACP literature be delivered to the salon rather than to clients' homes, which carried risk.",
            sourceLessonSlug: "gbr-what-the-book-solved",
          },
          {
            prompt: "How many YWCAs did the Green Book list?",
            options: ["Seven", "Forty-seven", "Four hundred seven", "None"],
            correctIndex: 1,
            explanation: "Forty-seven, offering safe lodging and community for women travelers.",
            sourceLessonSlug: "gbr-what-the-book-solved",
          },
          {
            prompt: "A city section shows four tourist homes and no service station. The best reading is:",
            options: [
              "The city had no cars",
              "You can sleep there but should arrive with fuel, because the guide records no place to buy it",
              "The city was a sundown town",
              "The listings are fabricated",
            ],
            correctIndex: 1,
            explanation: "Reading a city section means asking which of the day's needs the guide covers and which it leaves you to solve yourself.",
            sourceLessonSlug: "gbr-what-the-book-solved",
          },
          {
            prompt: "The best one-sentence description of what the guide's category list shows is:",
            options: [
              "A survival kit for emergencies only",
              "The supply chain for an ordinary day of life away from home",
              "A list of tourist attractions",
              "A directory of churches",
            ],
            correctIndex: 1,
            explanation: "Barbers, tailors, and drug stores are not survival items. Their presence shows the guide was about living normally, not merely getting through.",
            sourceLessonSlug: "gbr-what-the-book-solved",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 3 · How to read a listing
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "gbr-anatomy-of-a-listing",
      title: "7 · The anatomy of a listing",
      section: "Section 3 · How to read a listing",
      body: `Open any 1940s edition and the page looks like dense small type. It is not. It is a **four-level hierarchy**, and once you see it you can read any page in the book.

**Level 1: the state**, set as a large heading, in the book's own order (roughly alphabetical, with New York City broken out separately).
**Level 2: the city or town**, set as a smaller heading under the state.
**Level 3: the category**, set as a heading under the city: HOTELS, TOURIST HOMES, RESTAURANTS, TAVERNS, and the rest.
**Level 4: the entry itself**, a business name, a dash, and an address.

Here is a real section, reproduced as printed in the 1940 edition:

> RUSSELLVILLE
> TOURIST HOMES
> Mrs. M. Jackson—Herman St.
> Mrs. E. Latimore—318 S. Houston Ave.

Four short lines. Now read what is actually in them.

**"Mrs." is data.** The honorific plus initials is the standard form for a tourist home run by a woman, which is the majority pattern in this category. It also means the entry is usually the woman's **home**, not a commercial building, which matters enormously when you go looking for it later.

**An address without a number is normal.** "Herman St." with no house number is not sloppiness; small-town listings frequently give the street only, or a corner ("Cor. 5th and Main"), or a landmark, or a post-office box. That is what the informant reported. Treat a numberless address as a research lead, not a location.

**The category heading is the only thing telling you what kind of place it is.** The entry itself often will not say. "Mrs. E. Latimore" is a tourist home because it sits under TOURIST HOMES, and for no other reason. Lose the heading and you lose the meaning, which is a real risk when you are working from a cropped image or a transcription.

**Now follow that one entry outward, because it shows you what the method can do.** The Latimore Tourist Home in Russellville, Arkansas was run by Eugene Latimore and his wife Cora Wilson Latimore, took in railroad workers and travelers passing through, stayed in business into the 1970s, and was listed on the National Register of Historic Places in 2012 at 318 South Houston Avenue, reference number 11001049 (National Park Service, n.d.-c). Friends of the Latimore Tourist Home report that Russellville had two Green Book listings, that the Latimore was the only one between Little Rock and Fort Smith from 1948 to 1964, and that the other home, Mrs. M. Jackson's on Herman Street, no longer stands (Friends of the Latimore Tourist Home, n.d.). Two lines of small type, one surviving house, one gone.

**And here is your first real disagreement.** The National Park Service says the Latimore was listed in the 1949 Green Book. Friends of the Latimore Tourist Home say it first appeared in 1939. It is in the 1940 edition, which you can open yourself (Green, 1940). None of these sources is lying; they are pointing at different editions, and nobody has said "first" with a citation. **Sources disagreeing about a date is normal, and the digitized editions are how you settle it.** Do not repeat any of the three claims without checking. Go look.

## Sources
- Friends of the Latimore Tourist Home. (n.d.). *What is the Green Book?* https://www.latimoretouristhome.org/what-is-the-green-book
- Green, V. H. (Ed.). (1940). *The Negro motorist Green book: 1940*. Victor H. Green. Schomburg Center for Research in Black Culture, The New York Public Library. https://digitalcollections.nypl.org/collections/the-green-book
- National Park Service. (n.d.-c). *Latimore Tourist Home*. https://www.nps.gov/places/latimore-tourist-home.htm`,
      recallContent: [
        {
          prompt: "What is a tourist home, and who typically ran one?",
          answer: "A private residence with a room to rent, offering lodging where no hotel would take Black travelers. Most were owned or operated by married or widowed women, which also gave them a measure of economic independence.",
        },
        {
          prompt: "Roughly how many tourist homes did the Green Book list across its run, and where did they dominate?",
          answer: "More than fourteen hundred. In Nebraska, and in Michigan outside Detroit, they made up about ninety percent of all Green Book sites.",
        },
        {
          prompt: "Why were hair salons so heavily represented in Green Book cities?",
          answer: "They were gathering places and a route to economic independence for Black women, and salon listings often outnumbered lodging and food listings in a city. Some also served the civil rights movement directly, driving clients to register or receiving NAACP mail.",
        },
        {
          prompt: "When you open a city's section, what should you look at besides the hotel?",
          answer: "Which of the six needs are covered and which are missing. Beds without fuel, or fuel without beds, tells you what kind of stop that city could actually be.",
        },
      ],
    },
    {
      slug: "gbr-what-a-listing-does-not-say",
      title: "8 · What a listing does not say",
      section: "Section 3 · How to read a listing",
      body: `Most mistakes made with the Green Book come from reading into a listing something the listing never claimed. The guide is unusually honest about its own limits, and the limits changed over time.

**In 1940, a listing was not a recommendation. The book said so.** From the front matter of the 1940 edition:

> We have given you a selection of listings that you might chose from, under no circumstances do these listings imply that the place is recommended.

That is the publisher, in print, telling you the entry means "this place will serve you," not "this place is good" (Green, 1940).

**By 1956 there was a star, and only the star meant recommended.** The 1956 foreword carries this legend:

> *Denotes The Negro Travelers' Green Book recommended Hotel, Motels, Tourist Homes, etc. (Omission of * does not necessarily mean inferior accommodations.)

So in a starred edition you have three states, not two: starred, listed without a star, and absent. The parenthesis matters. Green is explicitly warning you not to read "no star" as "bad" (Green, 1956).

**Some entries are advertisements.** Businesses could pay for display space, and display entries appear in larger or bolder type, sometimes with an illustration and a line of copy. **Prominence on the page is a purchase, not a ranking.** When you count listings, decide in advance whether you are counting entries, or column inches, and say which you did.

**Absence is the biggest trap.** A town with no listing might be a town where no business would serve Black travelers. It might equally be a town nobody reported. Green said this himself in the 1949 introduction:

> There are thousands of first class business places that we don't know about and can't list, which would be glad to serve the traveler, but it is hard to secure listings of these places since we can't secure enough agents to send us the information.

The publisher is telling you directly that the gaps in his book are partly a gap in his reporting network (New York Public Library, n.d.). Section 4 turns this into a procedure.

**The physical object introduces its own errors.** You will usually be reading a scan, and often a machine transcription of a scan. House numbers are the first thing to corrupt: a 3 becomes an 8, a fraction marker disappears, "Grenwood" appears where "Greenwood" was set. **Never publish a street number you have only seen in machine-read text.** Look at the page image, and confirm against a second source such as a city directory, a Sanborn fire insurance map, a census enumeration, or a National Register nomination.

**A short discipline to adopt now.** For any claim you make from a listing, be able to answer three questions: which **edition**, which **page**, and whether you read it in the **image** or in a transcription. If you cannot answer all three, you are not ready to publish the claim.

## Sources
- Green, V. H. (Ed.). (1940). *The Negro motorist Green book: 1940*. Victor H. Green. Schomburg Center for Research in Black Culture, The New York Public Library. https://digitalcollections.nypl.org/collections/the-green-book
- Green, V. H. (Ed.). (1956). *The Negro travelers' Green book: 1956*. Victor H. Green & Co. Schomburg Center for Research in Black Culture, The New York Public Library. https://digitalcollections.nypl.org/collections/the-green-book
- New York Public Library. (n.d.). *Green Book research guide*. https://libguides.nypl.org/greenbook`,
      recallContent: [
        {
          prompt: "Name the four levels of the Green Book's listing hierarchy, outermost first.",
          answer: "State, then city or town, then category (HOTELS, TOURIST HOMES, and so on), then the entry itself: a name, a dash, and an address.",
        },
        {
          prompt: "Why does the category heading matter so much when you are working from a cropped image or a transcription?",
          answer: "The entry usually does not say what kind of place it is. It is a tourist home only because it sits under the TOURIST HOMES heading. Lose the heading and you lose the meaning.",
        },
        {
          prompt: "What does a listing that reads 'Mrs. M. Jackson, Herman St.' tell you, and what does it not tell you?",
          answer: "It tells you a woman ran it and it was probably her home, on Herman Street. It does not tell you the house number, so the address is a research lead rather than a location.",
        },
        {
          prompt: "Three sources give three different first-listing years for the Latimore Tourist Home. What do you do?",
          answer: "Treat it as an open question and settle it in the digitized editions yourself. NPS says 1949, the Friends group says 1939, and it appears in the 1940 edition. Do not repeat any of the three without checking.",
        },
      ],
    },
    {
      slug: "gbr-reading-density",
      title: "9 · Reading density: what a thick section and a thin one mean",
      section: "Section 3 · How to read a listing",
      body: `Count the listings in a city and you have a number. Interpreting that number is the actual skill.

**Where the guide is thickest.** The highest-volume listings were in cities with large Black populations: New York, Detroit, Chicago, and Los Angeles (National Park Service, n.d.-b). That is unsurprising, and it is also the least useful part of the book, because a Black traveler arriving in Harlem or Bronzeville in 1940 had options with or without a guide.

**Where the guide was most valuable.** The National Park Service makes the point precisely: the book's use "was more valuable to travelers crossing smaller towns in rural areas across the South and out West" (National Park Service, n.d.-b). One tourist home on a two-hundred-mile stretch is worth more to a driver than forty listings in a city they were not going to have trouble in. **Density and usefulness run in opposite directions.** Keep that in mind whenever a map of Green Book sites makes the coasts glow and the middle look empty.

**Four things a thick section can mean.**
1. A large Black population with an established business district.
2. A city where Green's reporting network was strong, often because a postal-employee contact or a Black newspaper was active there.
3. A city with heavy Black travel through it: a rail hub, a convention city, a resort.
4. A city whose businesses bought advertising, which put them in front of the editor.

**Four things a thin section can mean.**
1. Few businesses that would serve Black travelers.
2. Few Black residents in the area, so few businesses of any kind serving them.
3. **No informant.** Nobody sent listings in from that county, which Green admitted was common.
4. An editorial cut, most importantly the 1956 category change (see lesson 2).

**The test that separates them.** Take your thin section and ask what an independent source says about the same place in the same decade. Census population by race, a city directory's classified pages, a Black newspaper published in the region, a state historic preservation office's Green Book survey. If independent sources show a Black business district and the guide shows nothing, you have probably found a reporting gap. If independent sources also show nothing, the thinness is probably real.

**A worked comparison, from one edition.** In the 1940 edition, Tulsa carries entries under hotels, tourist homes, restaurants, beauty parlors, a barber shop, taverns, service stations, garages, and drug stores, with a striking number of them on North Greenwood Avenue. New Mexico, in the same edition, has exactly one entry in the entire state: a single tourist home in Deming (Green, 1940). Those two facts are on the same shelf, in the same book, and they mean completely different things: one is a dense district being reported thoroughly, and the other is a whole state where the guide could offer a driver almost nothing.

**And Tulsa carries a further weight.** North Greenwood Avenue is the spine of the Greenwood district, burned in the 1921 Tulsa race massacre. In 1940 the Green Book lists Greenwood addresses across nine categories. Whatever else that page is, it is documentary evidence of what was rebuilt (Green, 1940). This course does not attempt to tell the story of the massacre, which deserves its own course and its own sources; it simply notes that a listing can be evidence of survival.

## Sources
- Green, V. H. (Ed.). (1940). *The Negro motorist Green book: 1940*. Victor H. Green. Schomburg Center for Research in Black Culture, The New York Public Library. https://digitalcollections.nypl.org/collections/the-green-book
- National Park Service. (n.d.-b). *Green Book properties listed in the National Register of Historic Places*. https://www.nps.gov/articles/green-book-properties-listed-in-the-national-register-of-historic-places.htm`,
      recallContent: [
        {
          prompt: "What did the 1940 edition say a listing means?",
          answer: "That it is a selection to choose from, and that under no circumstances do the listings imply the place is recommended. A listing meant 'will serve you', not 'is good'.",
        },
        {
          prompt: "What are the three states an establishment can be in, in a starred edition like 1956?",
          answer: "Starred (recommended), listed without a star, and absent. The book explicitly warns that no star does not necessarily mean inferior.",
        },
        {
          prompt: "Why is a large, bold, illustrated entry not evidence that the business was better?",
          answer: "Display space was paid advertising. Prominence on the page is a purchase, not a ranking.",
        },
        {
          prompt: "Green himself gave a reason that places were missing from his book. What was it?",
          answer: "That thousands of first-class places would gladly have served travelers but he could not secure enough agents to send in the information. The gaps are partly gaps in his reporting network.",
        },
        {
          prompt: "Which three questions must you be able to answer before publishing a claim taken from a listing?",
          answer: "Which edition, which page, and whether you read it in the page image or in a machine transcription.",
        },
      ],
    },
    {
      slug: "gbr-quiz-listing",
      title: "10 · Quiz: reading a listing",
      section: "Section 3 · How to read a listing",
      quiz: {
        passingScore: 70,
        // 15-question bank served 8 at a time with shuffled options, so a retake is a
        // different quiz rather than the same list (the repo standard, src/lib/quiz.ts).
        questionsPerAttempt: 8,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What are the four levels of the Green Book's listing hierarchy, outermost first?",
            options: [
              "Category, state, city, entry",
              "State, city or town, category, entry",
              "Entry, address, city, state",
              "Region, highway, city, business",
            ],
            correctIndex: 1,
            explanation: "State heading, then city, then category heading, then the entry with a name, a dash, and an address.",
            sourceLessonSlug: "gbr-anatomy-of-a-listing",
          },
          {
            prompt: "In a 1940s edition, what tells you an entry is a tourist home rather than a restaurant?",
            options: [
              "The word 'home' in the name",
              "The category heading it sits under",
              "The presence of a house number",
              "The 'Mrs.' honorific",
            ],
            correctIndex: 1,
            explanation: "The entry itself rarely says. Only the category heading assigns the meaning, which is why cropped images are dangerous.",
            sourceLessonSlug: "gbr-anatomy-of-a-listing",
          },
          {
            prompt: "A listing reading 'Mrs. M. Jackson, Herman St.' with no house number means:",
            options: [
              "The entry is a fabrication",
              "The informant reported only the street, so the address is a research lead, not a location",
              "The building had no address",
              "The business was closed",
            ],
            correctIndex: 1,
            explanation: "Street-only, corner, landmark, and post-office-box addresses are all normal in small-town listings.",
            sourceLessonSlug: "gbr-anatomy-of-a-listing",
          },
          {
            prompt: "The Latimore Tourist Home in Russellville, Arkansas is significant partly because:",
            options: [
              "It was the largest hotel in Arkansas",
              "It is on the National Register of Historic Places, at 318 South Houston Avenue",
              "It appears only in the final edition",
              "It was owned by Victor Green",
            ],
            correctIndex: 1,
            explanation: "It was listed on the National Register in 2012, reference number 11001049, and was run by Eugene and Cora Wilson Latimore.",
            sourceLessonSlug: "gbr-anatomy-of-a-listing",
          },
          {
            prompt: "Three sources give three different years for the Latimore's first Green Book appearance. The right response is to:",
            options: [
              "Pick the government source and move on",
              "Average them",
              "Treat it as unsettled and check the digitized editions yourself",
              "Leave the date out of any research forever",
            ],
            correctIndex: 2,
            explanation: "NPS says 1949, the Friends group says 1939, and it is in the 1940 edition. The editions are online, so the disagreement is testable.",
            sourceLessonSlug: "gbr-anatomy-of-a-listing",
          },
          {
            prompt: "What did the 1940 edition say about whether a listing was a recommendation?",
            options: [
              "That every listing was personally inspected",
              "That under no circumstances do the listings imply the place is recommended",
              "That listings were ranked by quality",
              "It said nothing about the question",
            ],
            correctIndex: 1,
            explanation: "The front matter states it plainly. A 1940 listing meant 'will serve you', not 'is good'.",
            sourceLessonSlug: "gbr-what-a-listing-does-not-say",
          },
          {
            prompt: "In the 1956 edition, what does an asterisk next to an entry mean?",
            options: [
              "The business paid for advertising",
              "The business is recommended by the guide",
              "The business is Black-owned",
              "The business closed that year",
            ],
            correctIndex: 1,
            explanation: "The legend reads that the star denotes a recommended hotel, motel, tourist home and so on.",
            sourceLessonSlug: "gbr-what-a-listing-does-not-say",
          },
          {
            prompt: "In a starred edition, what does the ABSENCE of a star mean?",
            options: [
              "The accommodations were inferior",
              "Not necessarily anything about quality, as the guide explicitly warns",
              "The business was white-owned",
              "The listing was free",
            ],
            correctIndex: 1,
            explanation: "The legend adds the parenthesis 'Omission of * does not necessarily mean inferior accommodations.'",
            sourceLessonSlug: "gbr-what-a-listing-does-not-say",
          },
          {
            prompt: "A business appears in large bold type with an illustration. What can you conclude?",
            options: [
              "It was the best in town",
              "It bought display advertising space",
              "The editor stayed there",
              "It was government approved",
            ],
            correctIndex: 1,
            explanation: "Prominence on the page is a purchase, not a ranking, which is why you must say whether you counted entries or column inches.",
            sourceLessonSlug: "gbr-what-a-listing-does-not-say",
          },
          {
            prompt: "Green's own 1949 introduction explains missing listings by saying:",
            options: [
              "That the missing places refused to serve Black travelers",
              "That he could not secure enough agents to send in information about thousands of places that would gladly have served travelers",
              "That he ran out of pages",
              "That readers stopped writing to him",
            ],
            correctIndex: 1,
            explanation: "The publisher tells you directly that the gaps are partly gaps in his reporting network.",
            sourceLessonSlug: "gbr-what-a-listing-does-not-say",
          },
          {
            prompt: "Which rule about street numbers does this course insist on?",
            options: [
              "Always round to the nearest hundred",
              "Never publish a house number you have only seen in machine-read text",
              "Ignore house numbers entirely",
              "Trust transcriptions over images",
            ],
            correctIndex: 1,
            explanation: "Digits corrupt first in scanned text. Check the page image and a second source such as a city directory, a Sanborn map, or a National Register nomination.",
            sourceLessonSlug: "gbr-what-a-listing-does-not-say",
          },
          {
            prompt: "Where were the Green Book's highest-volume listings?",
            options: [
              "Small towns in the rural West",
              "New York, Detroit, Chicago, and Los Angeles",
              "Along the Canadian border",
              "In Bermuda and Mexico",
            ],
            correctIndex: 1,
            explanation: "Cities with large Black populations carried the most listings, per the National Park Service.",
            sourceLessonSlug: "gbr-reading-density",
          },
          {
            prompt: "Where was the guide MOST valuable to a traveler?",
            options: [
              "In the cities with the most listings",
              "Crossing smaller towns in rural areas across the South and out West",
              "In Harlem",
              "On ocean crossings",
            ],
            correctIndex: 1,
            explanation: "Density and usefulness run in opposite directions: one listing on a long empty stretch outweighs forty in a city with obvious options.",
            sourceLessonSlug: "gbr-reading-density",
          },
          {
            prompt: "Independent sources show a Black business district in a town, but the guide lists nothing there. The most likely explanation is:",
            options: [
              "The town was a sundown town",
              "A reporting gap: nobody sent listings in from that area",
              "The businesses were all closed that year",
              "The page was censored",
            ],
            correctIndex: 1,
            explanation: "Corroboration elsewhere plus silence in the guide points at the reporting network, which Green said was his limiting factor.",
            sourceLessonSlug: "gbr-reading-density",
          },
          {
            prompt: "In the 1940 edition, how many entries does the entire state of New Mexico have?",
            options: ["None", "One", "Twelve", "Forty"],
            correctIndex: 1,
            explanation: "One: a single tourist home in Deming. Tulsa in the same edition carries entries across nine categories.",
            sourceLessonSlug: "gbr-reading-density",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 4 · How to trace a route
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "gbr-trace-a-route",
      title: "11 · Chaining listings into a route",
      section: "Section 4 · How to trace a route",
      body: `This is the core skill of the course. A route reconstruction is not a list of places. It is an argument about what a specific driver could have done on a specific road in a specific year, built from listings and checkable by anyone.

**The procedure, in six steps.**
1. **Fix the year and the edition.** "In the Green Book" is not a claim. "In the 1940 edition" is.
2. **Fix the road as it ran that year**, using a period road map or a state highway department map. Highways were realigned constantly, so a 1940 road is not always today's road.
3. **Pull the state sections the road crosses**, in road order rather than alphabetical order.
4. **Keep only the cities that sit on or near the corridor.** This is a judgment call, so write down your rule (for example, "on the mapped alignment, or within about ten miles of it") and apply it consistently.
5. **Note what each stop covers**: bed, food, fuel, repair.
6. **Mark the gaps, and treat each one as a question, not a conclusion.** Lesson 12 is about the gaps.

**A worked example: Chicago to Los Angeles on U.S. 66, using the 1940 edition.** Route 66 ran from Chicago to Los Angeles across eight states, and it is the most heavily mythologised road in the country (National Park Service, n.d.-d). Here is what the 1940 Green Book actually gave a Black driver on it, state by state, keeping only cities on or near the corridor (Green, 1940).

| State | Cities on or near U.S. 66 with 1940 listings |
| --- | --- |
| Illinois | Chicago (many categories), Springfield |
| Missouri | St. Louis, Lebanon, Springfield, Carthage, Joplin |
| Oklahoma | Tulsa, Oklahoma City |
| Texas | Amarillo (one hotel, one restaurant) |
| New Mexico | none on the corridor |
| Arizona | none on the corridor |
| California | San Bernardino, Pasadena, Los Angeles |

Read the table twice. The eastern two thirds is a workable chain: you can plan a day's drive between listed stops from Chicago all the way to Amarillo. Then the chain stops.

**The 1940 edition's entire New Mexico section is one tourist home, in Deming.** Deming sits in the far south of the state, nowhere near U.S. 66. The Arizona section lists Nogales, Phoenix, and Tucson, all of them in the southern half of the state, and none of them on U.S. 66 either (Green, 1940). So a Black family leaving Amarillo in 1940 heading west on the Mother Road had, by this book, **no listed stop of any kind until San Bernardino, California**.

**What that leaves a driver.** They could drive it in one push, taking turns at the wheel and sleeping in the car, which is exactly why the food-and-bedding preparation described in accounts of the era was standard practice. They could take their chances asking at unlisted places. Or they could leave U.S. 66 entirely and run the southern highways through Tucson and Deming, where the book did have something, adding distance and time to reach the same coast. **The geography of the listings, not the geography of the land, is what forced the detour.**

**Two warnings before you publish a route.** First, do not state a mileage or a drive time unless you have measured it on a period map; distances on realigned highways are easy to get wrong. Second, the absence of a listing does not prove a driver could not stop. It proves the guide could not help them decide. Those are different claims, and only the second one is yours to make.

## Sources
- Green, V. H. (Ed.). (1940). *The Negro motorist Green book: 1940*. Victor H. Green. Schomburg Center for Research in Black Culture, The New York Public Library. https://digitalcollections.nypl.org/collections/the-green-book
- National Park Service. (n.d.-d). *Route 66 and the historic Negro Motorist Green Book*. https://www.nps.gov/articles/000/route-66-and-the-historic-negro-motorist-green-book.htm`,
      recallContent: [
        {
          prompt: "Which cities had the highest-volume Green Book listings, and where was the book actually most valuable?",
          answer: "The highest volume was in New York, Detroit, Chicago, and Los Angeles. It was most valuable to travelers crossing smaller towns in rural areas across the South and the West, where a single listing could be the only option.",
        },
        {
          prompt: "Give two reasons a city section might be thin that have nothing to do with how many businesses served Black travelers.",
          answer: "Nobody in that area sent listings in to Green, or the category you are looking for was cut editorially, most importantly in the 1956 narrowing to lodging and restaurants.",
        },
        {
          prompt: "How do you test whether a thin section is a real absence or a reporting gap?",
          answer: "Check independent sources for the same place and decade: census population by race, city directories, Black newspapers in the region, and state historic preservation office surveys. Business district in the other sources plus nothing in the guide means a reporting gap.",
        },
        {
          prompt: "What does the 1940 New Mexico section contain, and why is it a useful contrast with Tulsa?",
          answer: "One entry in the whole state, a tourist home in Deming. Tulsa in the same edition has entries across nine categories, many on North Greenwood Avenue. Same book, same year, opposite meanings.",
        },
      ],
    },
    {
      slug: "gbr-the-gap-and-the-detour",
      title: "12 · Reading a gap as evidence",
      section: "Section 4 · How to trace a route",
      body: `A gap in the listings is the most interesting thing on the page and the easiest thing to get wrong. Here is how to handle one honestly.

**Three explanations, always.** For any stretch of road with no listings, at least three explanations are live:
1. **Refusal.** Businesses along that stretch would not serve Black travelers.
2. **Absence.** There were very few businesses of any kind, or very few Black residents to sustain Black-serving ones.
3. **Silence.** Businesses existed and would have served travelers, but nobody reported them to Green.

They are not mutually exclusive, and a long gap usually contains all three at different points.

**How to test each one.**
- **For refusal**, look for a positive record: a documented sundown town in that county, a state or local ordinance, a newspaper account, a lawsuit, an oral history collected by a state historic preservation office. Loewen's work established both the scale of sundown towns and the method for documenting an individual one (Loewen, 2005).
- **For absence**, look at census population by race for the counties involved, and at the county's total number of hotels or restaurants in any directory.
- **For silence**, look for the same place in a **different** edition and in a **different** guide. If a town shows up in the 1948 edition but not 1940, the 1940 gap was probably reporting. If it shows up in Travelguide or Grayson's but never in the Green Book, that is a reporting gap you can almost name.

**Check the other edition first, always.** It is the cheapest test and it resolves a surprising share of gaps. The editions are digitised and free at the Schomburg Center's collection (New York Public Library, n.d.).

**The opposite of a gap is worth studying too.** In the 1940 edition, Tulsa's entries cluster on and around North Greenwood Avenue, across hotels, tourist homes, restaurants, beauty parlors, a barber shop, taverns, service stations, garages, and a drug store (Green, 1940). North Greenwood is the spine of the Greenwood district, and that page is a list of addresses on a street in a district that had been burned in 1921. Read as evidence, a dense listing is a record of rebuilding, and it is as much a finding as an empty state is.

**How to write a gap up without overclaiming.** Compare these two sentences.

> Black travelers could not stop anywhere in New Mexico or Arizona on Route 66 in 1940.

> The 1940 edition of the Green Book lists no establishment on the U.S. 66 corridor in New Mexico or Arizona. Its only New Mexico entry is a tourist home in Deming, far to the south of the route, and its Arizona entries are in Nogales, Phoenix, and Tucson, also off the corridor.

The first sentence is a claim about the world that you have not proved. The second is a claim about the book that you have. **Write the second one.** If you later find a period newspaper advertisement for a Black-serving motel in Flagstaff, the second sentence is still true and the first would have been wrong.

## Sources
- Green, V. H. (Ed.). (1940). *The Negro motorist Green book: 1940*. Victor H. Green. Schomburg Center for Research in Black Culture, The New York Public Library. https://digitalcollections.nypl.org/collections/the-green-book
- Loewen, J. W. (2005). *Sundown towns: A hidden dimension of American racism*. The New Press.
- New York Public Library. (n.d.). *Green Book research guide*. https://libguides.nypl.org/greenbook`,
      recallContent: [
        {
          prompt: "What are the first two steps of a route reconstruction, and why are they first?",
          answer: "Fix the year and edition, then fix the road as it ran that year using a period map. 'In the Green Book' is not a claim, and highways were realigned constantly, so today's road is not always the 1940 road.",
        },
        {
          prompt: "In the 1940 edition, where does the chain of Route 66 stops break, and for how far?",
          answer: "It breaks after Amarillo, Texas. There is no listed stop on the corridor in New Mexico or Arizona, so the next listing going west is San Bernardino, California.",
        },
        {
          prompt: "Why is the 1940 New Mexico listing in Deming no help to a Route 66 driver?",
          answer: "Deming is in the far south of the state, on the southern highways, nowhere near U.S. 66. A listing exists, but not on the road the driver is on.",
        },
        {
          prompt: "What is the difference between 'a driver could not stop there' and 'the guide could not help them decide'?",
          answer: "Only the second is supported by an absent listing. The book's silence is evidence about the book's coverage, not proof that every business on that stretch refused service.",
        },
      ],
    },
    {
      slug: "gbr-quiz-route",
      title: "13 · Quiz: tracing a route",
      section: "Section 4 · How to trace a route",
      quiz: {
        passingScore: 70,
        // 15-question bank served 8 at a time with shuffled options, so a retake is a
        // different quiz rather than the same list (the repo standard, src/lib/quiz.ts).
        questionsPerAttempt: 8,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is the first step in reconstructing a route from the Green Book?",
            options: [
              "Draw the map",
              "Fix the year and the specific edition",
              "Count the tourist homes",
              "Find the nearest National Register property",
            ],
            correctIndex: 1,
            explanation: "'In the Green Book' is not a claim; 'in the 1940 edition' is. Everything downstream depends on which book you opened.",
            sourceLessonSlug: "gbr-trace-a-route",
          },
          {
            prompt: "Why must you fix the road using a PERIOD map rather than a current one?",
            options: [
              "Current maps are copyrighted",
              "Highways were realigned constantly, so the road in your year may not follow today's route",
              "Period maps are more accurate about distance",
              "Current maps omit small towns",
            ],
            correctIndex: 1,
            explanation: "Alignments moved. Using today's road can put a listing on or off your corridor incorrectly.",
            sourceLessonSlug: "gbr-trace-a-route",
          },
          {
            prompt: "Why should you write down your inclusion rule (for example 'within about ten miles of the alignment')?",
            options: [
              "It is required by law",
              "Because deciding which cities count is a judgment call, and a stated rule applied consistently is checkable",
              "To make the list shorter",
              "Because the Green Book used that rule",
            ],
            correctIndex: 1,
            explanation: "Step 4 is the subjective step. Naming your rule turns a judgment into something another researcher can audit.",
            sourceLessonSlug: "gbr-trace-a-route",
          },
          {
            prompt: "In the 1940 edition, which Missouri cities on or near U.S. 66 carry listings?",
            options: [
              "Kansas City and Columbia only",
              "St. Louis, Lebanon, Springfield, Carthage, and Joplin",
              "None",
              "Only St. Louis",
            ],
            correctIndex: 1,
            explanation: "Those five sit on or near the corridor, giving a workable chain of stops across the state.",
            sourceLessonSlug: "gbr-trace-a-route",
          },
          {
            prompt: "Going west on U.S. 66 in 1940, what is the last state with a listed corridor stop before the chain breaks?",
            options: ["Oklahoma", "Texas", "New Mexico", "Arizona"],
            correctIndex: 1,
            explanation: "Amarillo, Texas is the last corridor listing. New Mexico and Arizona have none on the route.",
            sourceLessonSlug: "gbr-trace-a-route",
          },
          {
            prompt: "What does Amarillo's 1940 section contain?",
            options: ["Nine categories of business", "One hotel and one restaurant", "Only a garage", "Nothing"],
            correctIndex: 1,
            explanation: "A single hotel and a single restaurant, which is a thin but real stop.",
            sourceLessonSlug: "gbr-trace-a-route",
          },
          {
            prompt: "Where is the next listed stop going west after Amarillo in the 1940 edition?",
            options: ["Albuquerque, New Mexico", "Flagstaff, Arizona", "San Bernardino, California", "Deming, New Mexico"],
            correctIndex: 2,
            explanation: "The California corridor listings begin at San Bernardino; New Mexico and Arizona offer nothing on U.S. 66.",
            sourceLessonSlug: "gbr-trace-a-route",
          },
          {
            prompt: "Why does the single 1940 New Mexico listing not help a Route 66 driver?",
            options: [
              "It was a paid advertisement",
              "Deming is in the far south of the state, off the U.S. 66 corridor",
              "It closed before 1940",
              "It only served white customers",
            ],
            correctIndex: 1,
            explanation: "A listing that is not on your road is not a stop on your route, which is the whole point of chaining by corridor.",
            sourceLessonSlug: "gbr-trace-a-route",
          },
          {
            prompt: "Which of these is NOT one of the three live explanations for a gap in listings?",
            options: ["Refusal", "Absence", "Silence in the reporting network", "Deliberate censorship by the federal government"],
            correctIndex: 3,
            explanation: "The three testable explanations are refusal, absence, and silence. Nothing in the record supports federal censorship of the guide.",
            sourceLessonSlug: "gbr-the-gap-and-the-detour",
          },
          {
            prompt: "What is the cheapest first test of a suspected gap?",
            options: [
              "Visit the site",
              "Check a different edition, and a different travel guide",
              "File a records request",
              "Interview a descendant",
            ],
            correctIndex: 1,
            explanation: "The editions are digitised and free, and a town present in one year but absent in another usually indicates a reporting gap.",
            sourceLessonSlug: "gbr-the-gap-and-the-detour",
          },
          {
            prompt: "To evidence the 'refusal' explanation for a stretch of road, you need:",
            options: [
              "The silence in the listings itself",
              "A positive record such as a documented sundown town, an ordinance, a newspaper account, a lawsuit, or an oral history",
              "A modern interview",
              "A photograph of the road",
            ],
            correctIndex: 1,
            explanation: "Silence cannot evidence refusal. Only an affirmative document can.",
            sourceLessonSlug: "gbr-the-gap-and-the-detour",
          },
          {
            prompt: "Which statement is defensible from the 1940 edition alone?",
            options: [
              "Black travelers could not stop anywhere in Arizona on Route 66 in 1940",
              "The 1940 edition lists no establishment on the U.S. 66 corridor in Arizona",
              "Every business on Arizona's Route 66 refused Black customers",
              "Arizona had no Black residents in 1940",
            ],
            correctIndex: 1,
            explanation: "Claims about the book are supported by the book. Claims about the world need other evidence.",
            sourceLessonSlug: "gbr-the-gap-and-the-detour",
          },
          {
            prompt: "The dense 1940 Tulsa listings on and around North Greenwood Avenue can be read as:",
            options: [
              "Evidence that the 1921 massacre never happened",
              "Documentary evidence of what was rebuilt in the Greenwood district",
              "Proof that Tulsa was not segregated",
              "A printing error",
            ],
            correctIndex: 1,
            explanation: "Nine categories of business on and around Greenwood in 1940 record a district that had been burned in 1921 and rebuilt.",
            sourceLessonSlug: "gbr-the-gap-and-the-detour",
          },
          {
            prompt: "Why should you avoid stating a mileage for a gap unless you have measured it?",
            options: [
              "Mileages are classified",
              "Distances on realigned highways are easy to get wrong, and an unmeasured figure is a guess",
              "The Green Book never used miles",
              "Mileage is irrelevant to history",
            ],
            correctIndex: 1,
            explanation: "Measure on a period map or do not state a number. An invented distance discredits an otherwise solid route reconstruction.",
            sourceLessonSlug: "gbr-trace-a-route",
          },
          {
            prompt: "Three explanations for a gap are live at once on a long stretch. What follows?",
            options: [
              "You must pick one",
              "The gap is meaningless",
              "Different segments of the same gap may have different explanations, and your write-up should say so",
              "You should discard the route",
            ],
            correctIndex: 2,
            explanation: "They are not mutually exclusive. A long gap usually contains refusal, absence, and reporting silence at different points along it.",
            sourceLessonSlug: "gbr-the-gap-and-the-detour",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 5 · The map
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "gbr-map",
      title: "14 · Map: cities the Green Book leaned on",
      section: "Section 5 · The map",
      body: `Click any marker for its detail. **This map is a sample, not the book.** More than ten thousand businesses were listed across thirty years, and no map of twenty-two points can represent that. What this map can do is show you three different kinds of evidence side by side, so you can practise telling them apart.

**Blue markers: the highest-volume cities.** New York, Detroit, Chicago, and Los Angeles carried the most listings, because they had the largest Black populations (National Park Service, n.d.-b). Remember lesson 9: these are the places the guide mattered least, because a traveler arriving there had options anyway.

**Green markers: individual Green Book properties on the National Register of Historic Places.** The National Park Service has identified twenty individually listed National Register properties as Green Book sites, plus more inside historic district nominations (National Park Service, n.d.-b). Each green marker below is a city with at least one of them. Notice the shape of this set: a beauty parlor and a barber shop in Columbia, South Carolina; a guest house in a Maine beach town; a hotel in Rochester, Minnesota that served Black patients at the clinic; a mountain resort in Colorado. This is not a map of the South.

**Amber markers: route evidence from the 1940 edition.** Tulsa, Amarillo, Deming, and San Bernardino are the four points that make lesson 11 concrete. Amarillo is the last listed U.S. 66 stop going west; San Bernardino is the next one; Deming is the whole of New Mexico that year and it is nowhere near the road.

**Coordinates on this map are approximate city centres, taken from OpenStreetMap's gazetteer**, not the coordinates of individual buildings. Do not use them to find an address. Use them to see the shape of the evidence.

**What the map cannot show you.** It cannot show absence, because a marker only exists where something was recorded. Every empty stretch on this map is a question from lesson 12, not an answer.

## Sources
- Green, V. H. (Ed.). (1940). *The Negro motorist Green book: 1940*. Victor H. Green. Schomburg Center for Research in Black Culture, The New York Public Library. https://digitalcollections.nypl.org/collections/the-green-book
- National Park Service. (n.d.-b). *Green Book properties listed in the National Register of Historic Places*. https://www.nps.gov/articles/green-book-properties-listed-in-the-national-register-of-historic-places.htm
- OpenStreetMap contributors. (n.d.). *Nominatim gazetteer*. https://nominatim.openstreetmap.org/`,
      mapContent: {
        markers: [
          {
            id: "gbr-harlem",
            lat: 40.8079,
            lng: -73.9455,
            title: "Harlem, New York",
            color: "#1d4ed8",
            description:
              "Where the guide was made. The first two editions leaned heavily on Harlem businesses, and the 1940 masthead gives Green's office at 938 St. Nicholas Avenue, the 1956 masthead at 200 West 135th Street. The Hotel Theresa and the Apollo Theater are both National Register properties identified as Green Book sites.",
          },
          {
            id: "gbr-chicago",
            lat: 41.8756,
            lng: -87.6244,
            title: "Chicago, Illinois",
            color: "#1d4ed8",
            description:
              "One of the four highest-volume Green Book cities, and the eastern end of U.S. 66. The 1940 edition lists Chicago under hotels, tourist homes, restaurants, garages, service stations, drug stores, taverns, beauty parlors, and barber shops.",
          },
          {
            id: "gbr-detroit",
            lat: 42.3316,
            lng: -83.0466,
            title: "Detroit, Michigan",
            color: "#1d4ed8",
            description:
              "A highest-volume city. Worth pairing with the rest of Michigan: outside Detroit, about ninety percent of the state's Green Book sites were tourist homes, meaning private houses rather than hotels.",
          },
          {
            id: "gbr-los-angeles",
            lat: 34.0537,
            lng: -118.2428,
            title: "Los Angeles, California",
            color: "#1d4ed8",
            description:
              "A highest-volume city and the western end of U.S. 66. In the 1940 edition the Los Angeles section runs to hotels, tourist homes, service stations, taverns, beauty parlors, and a liquor store.",
          },
          {
            id: "gbr-tulsa",
            lat: 36.1563,
            lng: -95.9928,
            title: "Tulsa, Oklahoma",
            color: "#b45309",
            description:
              "1940 route evidence, and the counter-example to a gap. Tulsa's entries run across nine categories, many of them on and around North Greenwood Avenue, the spine of the district burned in the 1921 Tulsa race massacre. A dense listing can be a record of rebuilding.",
          },
          {
            id: "gbr-amarillo",
            lat: 35.2073,
            lng: -101.8371,
            title: "Amarillo, Texas",
            color: "#b45309",
            description:
              "1940 route evidence. One hotel and one restaurant, and the last stop the guide offers on the U.S. 66 corridor heading west. After Amarillo the chain breaks for two entire states.",
          },
          {
            id: "gbr-deming",
            lat: 32.2627,
            lng: -107.7582,
            title: "Deming, New Mexico",
            color: "#b45309",
            description:
              "1940 route evidence. A single tourist home, and the whole of New Mexico's section that year. Deming sits on the southern highways, far off U.S. 66, so the state's one listing was of no use to a driver on the Mother Road.",
          },
          {
            id: "gbr-san-bernardino",
            lat: 34.1082,
            lng: -117.2895,
            title: "San Bernardino, California",
            color: "#b45309",
            description:
              "1940 route evidence. Two tourist homes, and the first listed U.S. 66 stop after the New Mexico and Arizona gap. The distance between this marker and Amarillo is the shape of the problem.",
          },
          {
            id: "gbr-birmingham",
            lat: 33.5207,
            lng: -86.8024,
            title: "Birmingham, Alabama",
            color: "#15803d",
            description:
              "The A. G. Gaston Motel, built by the entrepreneur Arthur George Gaston, is a National Register Green Book property. It appears in the 1956 edition's Alabama section, and it later served the Birmingham campaign against segregated public accommodations.",
          },
          {
            id: "gbr-memphis",
            lat: 35.146,
            lng: -90.0518,
            title: "Memphis, Tennessee",
            color: "#15803d",
            description:
              "The Lorraine Motel, a National Register Green Book property, was one of few Black-owned establishments in the city offering accommodation to African American travelers. It is nationally known as the site of Dr. Martin Luther King Jr.'s assassination in 1968.",
          },
          {
            id: "gbr-denver",
            lat: 39.7392,
            lng: -104.9849,
            title: "Denver, Colorado",
            color: "#15803d",
            description:
              "The Rossonian, in Five Points, was among the most important African American jazz venues between St. Louis and Los Angeles from the late 1930s to the early 1960s, and is a National Register Green Book property.",
          },
          {
            id: "gbr-pinecliffe",
            lat: 39.9319,
            lng: -105.4283,
            title: "Pinecliffe, Colorado",
            color: "#15803d",
            description:
              "Winks Panorama, a historic African American mountain resort used between 1925 and 1965. Proof that the guide covered leisure and not only necessity: Green also listed golf courses, country clubs, and parks.",
          },
          {
            id: "gbr-cincinnati",
            lat: 39.1013,
            lng: -84.5127,
            title: "Cincinnati, Ohio",
            color: "#15803d",
            description:
              "The Manse Hotel and Annex, a National Register Green Book property, became a destination for African American travelers visiting the city because segregation closed other accommodation to them.",
          },
          {
            id: "gbr-columbia-sc",
            lat: 34.0008,
            lng: -81.0352,
            title: "Columbia, South Carolina",
            color: "#15803d",
            description:
              "The densest cluster of National Register Green Book properties in one city: the Harriet M. Cornwell Tourist Home, Holman's Barber Shop, Ruth's Beauty Parlor, Leevy's Funeral Home, and Allen University. A reminder that the guide covered grooming, mourning, and study, not just beds.",
          },
          {
            id: "gbr-florence-sc",
            lat: 34.1984,
            lng: -79.7672,
            title: "Florence, South Carolina",
            color: "#15803d",
            description:
              "The Ebony Guest House, in the North Florence neighborhood, is the only known surviving property in Florence that served as an African American tourist home.",
          },
          {
            id: "gbr-russellville",
            lat: 35.2784,
            lng: -93.1338,
            title: "Russellville, Arkansas",
            color: "#15803d",
            description:
              "The Latimore Tourist Home, 318 South Houston Avenue, run by Eugene and Cora Wilson Latimore. National Register reference number 11001049, listed in 2012. The worked example in lesson 7: two lines of small type in the 1940 edition, one surviving house.",
          },
          {
            id: "gbr-austin",
            lat: 30.2711,
            lng: -97.7437,
            title: "Austin, Texas",
            color: "#15803d",
            description:
              "The Limerick-Frazier House. From the 1930s to the early 1960s Professor Frazier and Mrs. Laura Allman Frazier ran their home as lodging for African American students and travelers excluded from white-owned hotels.",
          },
          {
            id: "gbr-las-vegas",
            lat: 36.1674,
            lng: -115.1484,
            title: "Las Vegas, Nevada",
            color: "#15803d",
            description:
              "Harrison's Guest House, which lodged wartime laborers and Black entertainers performing at nearby casinos and resorts. It is the only known surviving example of its type in the city from the Green Book.",
          },
          {
            id: "gbr-old-orchard-beach",
            lat: 43.5076,
            lng: -70.3562,
            title: "Old Orchard Beach, Maine",
            color: "#15803d",
            description:
              "Cummings' Guest House, beach-town lodging that catered to African American tourists. One of several such places in Maine reached first by word of mouth and then through guides like the Green Book.",
          },
          {
            id: "gbr-rochester-mn",
            lat: 44.0234,
            lng: -92.463,
            title: "Rochester, Minnesota",
            color: "#15803d",
            description:
              "The Avalon Hotel became the only hotel in Rochester available to Black patients at the clinic, a role it filled for several decades. Medical travel is a category of journey the guide quietly served.",
          },
          {
            id: "gbr-humboldt",
            lat: 35.8198,
            lng: -88.9159,
            title: "Humboldt, Tennessee",
            color: "#15803d",
            description:
              "The Booker T. Motel, a National Register Green Book property and a place for African American travelers to gather over a meal as well as to sleep.",
          },
          {
            id: "gbr-atlantic-city",
            lat: 39.3643,
            lng: -74.4229,
            title: "Atlantic City, New Jersey",
            color: "#15803d",
            description:
              "The Liberty Hotel, built in 1928 in the Northside neighborhood, accommodated African American tourists during the resort's heyday. The 1956 edition ran a Green Book travel contest whose first prize was a week at the Liberty.",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 6 · What happened next
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "gbr-1964-and-the-end",
      title: "15 · 1964, and why the book stopped",
      section: "Section 6 · What happened next",
      body: `The Green Book ended because it worked, and because the law finally caught up with what it had been working around. That is the short version. The long version is more interesting, and the statute repays reading directly.

**Title II of the Civil Rights Act of 1964 is the provision that mattered.** In its own words, at 42 U.S.C. § 2000a(a):

> All persons shall be entitled to the full and equal enjoyment of the goods, services, facilities, privileges, advantages, and accommodations of any place of public accommodation, as defined in this section, without discrimination on the ground of race, color, religion, or national origin.

Subsection (b) then defines a place of public accommodation, and the list reads like the Green Book's table of contents: **any inn, hotel, motel or other establishment providing lodging to transient guests; any restaurant, cafeteria, lunchroom, lunch counter, soda fountain or other facility principally engaged in selling food for consumption on the premises; any gasoline station; and any motion picture house, theater, concert hall, sports arena or stadium** (Civil Rights Act of 1964, 42 U.S.C. § 2000a).

**Now read the exception, because it is the most Green Book sentence in American law.** The lodging clause covers every inn, hotel and motel **other than** an establishment "located within a building which contains not more than five rooms for rent or hire and which is actually occupied by the proprietor of such establishment as his residence" (42 U.S.C. § 2000a(b)(1)). That is a description of a tourist home. The category the guide relied on most heavily in the places it was most needed is precisely the category Congress left outside the statute.

**The last edition told readers the news, and it was already reckoning with the cost.** The 1966 to 1967 edition described the Act as "a new bill of rights for everyone, regardless of race, creed, or color" and told readers that every hotel, restaurant, theater or other facility catering to the general public must now do exactly that. The same edition began carrying white-owned luxury hotels and clothing stores that had previously been closed to Black customers (National Park Service, n.d.-a).

**And that is where the guide's business model ended.** Desegregation expanded choice for Black travelers and expanded the customer base for white-owned businesses at the same time. It drew business away from many of the Black-owned establishments the guide had been built on (National Park Service, n.d.-a). The Green Book stopped after the 1966 to 1967 edition.

**Hold two things at once.** Green wanted this. He said so in 1949, in print, seventeen years before it happened. And it cost the businesses in his book real money. Both are true, and the honest version of this history refuses to drop either half.

## Sources
- Civil Rights Act of 1964, 42 U.S.C. § 2000a. https://www.justice.gov/crt/title-ii-civil-rights-act-public-accommodations
- National Park Service. (n.d.-a). *The Green Book: An historic context*. https://www.nps.gov/articles/000/the-green-book-an-historic-context.htm
- New York Public Library. (n.d.). *Green Book research guide*. https://libguides.nypl.org/greenbook`,
      recallContent: [
        {
          prompt: "Name the three live explanations for a gap in the listings.",
          answer: "Refusal (businesses would not serve Black travelers), absence (few businesses or few Black residents), and silence (businesses existed but nobody reported them to Green). A long gap usually contains all three at different points.",
        },
        {
          prompt: "What is the cheapest test for a suspected gap, and why?",
          answer: "Check a different edition, and a different guide. The editions are digitised and free at the Schomburg Center, and a town appearing in 1948 but not 1940 points at reporting rather than refusal.",
        },
        {
          prompt: "How would you evidence the 'refusal' explanation for a specific stretch of road?",
          answer: "With a positive record, not with the silence itself: a documented sundown town in that county, a local ordinance, a newspaper account, a lawsuit, or an oral history from a state preservation survey.",
        },
        {
          prompt: "Rewrite 'Black travelers could not stop anywhere in Arizona on Route 66 in 1940' as a defensible claim.",
          answer: "The 1940 edition lists no establishment on the U.S. 66 corridor in Arizona; its Arizona entries are in Nogales, Phoenix, and Tucson, all off the corridor. That is a claim about the book, which is what the evidence supports.",
        },
      ],
    },
    {
      slug: "gbr-why-the-places-are-gone",
      title: "16 · Why so many of the places are gone",
      section: "Section 6 · What happened next",
      body: `Go looking for Green Book addresses today and you will find that a great many of them are parking lots, highway embankments, or nothing at all. The reasons are documented, and the numbers are contested. Both facts matter.

**Reason one: the market shifted after 1964**, as lesson 15 described. The National Park Service states plainly that "at least half of the Black-owned businesses in the Green Book were closed within 10 years" (National Park Service, n.d.-a).

**Reason two: governments took the land.** The Park Service names eminent domain used for urban renewal and freeway projects as a compounding cause, and states that majority-Black neighborhoods across the country, "containing unknown numbers of Green Book businesses, were razed in the name of 'progress'" (National Park Service, n.d.-a). Note the phrase **unknown numbers**. A federal agency writing about its own subject declines to put a figure on it, and you should follow that example.

**Reason three: the roads moved.** The Federal-Aid Highway Act of 1956, signed on June 29, 1956, authorised the National System of Interstate and Defense Highways, roughly 41,000 miles of new highway and the largest public works project in the country's history to that point (National Archives, n.d.). Where the new interstate went **through** a Black commercial district, businesses were taken outright. Where it went **around** one, the customers left with the traffic. The Park Service describes formerly thriving urban areas left as "mere shells" after the new freeways bypassed them (National Park Service, n.d.-a). The detailed case studies belong to a later course in this series; the point here is that a missing building often has a decision behind it, and decisions leave records.

**Now the numbers, and why they disagree.** Three figures circulate, and they are not versions of the same measurement.

| Figure | Who says it | What it counts |
| --- | --- | --- |
| At least half closed within 10 years | National Park Service | Black-owned Green Book **businesses**, closing, in the decade after 1964 |
| Less than 20 percent still extant | Architectural historian Jennifer Reut, an expert participant with the National Trust for Historic Preservation, as reported by NPS | Green Book **sites** nationally, still standing today, described as an estimate |
| Approximately 30 percent still standing in 2014 | National Park Service, from 2014 research | Green Book sites in **Route 66 communities** only, standing as of 2014 |

Sources: National Park Service (n.d.-a, n.d.-b, n.d.-d).

**A business closing and a building being demolished are different events**, ten years is not "today", and Route 66 communities are not the nation. The figures are not in conflict; they answer three different questions. **There is no complete national survey of Green Book sites.** The Park Service says of the National Register set only that "twenty individual listed properties in the National Register of Historic Places have been identified as being in the Green Book," and that fewer sites have been documented, maintained, or preserved than have been identified (National Park Service, n.d.-b).

**So the rule for your own work.** If you want to say what share of Green Book sites survive, **quote a figure with its owner, its date, and its scope attached**, or say that the survival rate is contested and no complete national survey exists. Do not average the three. Do not estimate your own. This is the exact place where a well-researched project turns into a plausible-sounding fabrication.

## Sources
- National Archives. (n.d.). *National Interstate and Defense Highways Act (1956)*. https://www.archives.gov/milestone-documents/national-interstate-and-defense-highways-act
- National Park Service. (n.d.-a). *The Green Book: An historic context*. https://www.nps.gov/articles/000/the-green-book-an-historic-context.htm
- National Park Service. (n.d.-b). *Green Book properties listed in the National Register of Historic Places*. https://www.nps.gov/articles/green-book-properties-listed-in-the-national-register-of-historic-places.htm
- National Park Service. (n.d.-d). *Route 66 and the historic Negro Motorist Green Book*. https://www.nps.gov/articles/000/route-66-and-the-historic-negro-motorist-green-book.htm`,
      recallContent: [
        {
          prompt: "Which part of the Civil Rights Act of 1964 ended legal segregation in hotels and restaurants, and what does it say?",
          answer: "Title II, at 42 U.S.C. section 2000a. It entitles all persons to full and equal enjoyment of any place of public accommodation without discrimination on the ground of race, color, religion, or national origin.",
        },
        {
          prompt: "Which lodging places did Title II NOT cover, and why is that ironic here?",
          answer: "Buildings with not more than five rooms for rent that the proprietor actually occupies as a residence. That is a description of a tourist home, the category the Green Book leaned on hardest where hotels would not serve Black travelers.",
        },
        {
          prompt: "Why did desegregation hurt many of the businesses listed in the Green Book?",
          answer: "It expanded choice for Black travelers and expanded the customer base for white-owned businesses at the same time, drawing business away from the Black-owned establishments the guide was built on.",
        },
        {
          prompt: "What two things does an honest account of 1964 have to hold at once?",
          answer: "That Victor Green had wanted the guide to become unnecessary and said so in print in 1949, and that the change cost the businesses in his book real money.",
        },
      ],
    },
    {
      slug: "gbr-quiz-after",
      title: "17 · Quiz: 1964 and afterwards",
      section: "Section 6 · What happened next",
      quiz: {
        passingScore: 70,
        // 15-question bank served 8 at a time with shuffled options, so a retake is a
        // different quiz rather than the same list (the repo standard, src/lib/quiz.ts).
        questionsPerAttempt: 8,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Which title of the Civil Rights Act of 1964 covers public accommodations?",
            options: ["Title I", "Title II", "Title VI", "Title VII"],
            correctIndex: 1,
            explanation: "Title II, codified at 42 U.S.C. section 2000a, is the public accommodations provision.",
            sourceLessonSlug: "gbr-1964-and-the-end",
          },
          {
            prompt: "Which of these is explicitly named as a place of public accommodation in the statute?",
            options: ["A private club", "Any gasoline station", "A church", "A private residence"],
            correctIndex: 1,
            explanation: "Subsection (b) names inns, hotels and motels, restaurants and lunch counters, gasoline stations, and theaters and stadiums.",
            sourceLessonSlug: "gbr-1964-and-the-end",
          },
          {
            prompt: "Which lodging establishments did Title II exempt?",
            options: [
              "All motels built after 1960",
              "Buildings with not more than five rooms for rent that the proprietor actually occupies as a residence",
              "All establishments in the South",
              "Any business with fewer than twenty employees",
            ],
            correctIndex: 1,
            explanation: "The five-room owner-occupied exemption in section 2000a(b)(1) describes precisely what a tourist home was.",
            sourceLessonSlug: "gbr-1964-and-the-end",
          },
          {
            prompt: "Why is that exemption significant for Green Book history specifically?",
            options: [
              "Because tourist homes were the guide's most heavily used lodging category where hotels would not serve Black travelers",
              "Because it applied only to hotels in cities",
              "Because it made the Green Book illegal",
              "Because it required the guide to keep publishing",
            ],
            correctIndex: 0,
            explanation: "The category the guide leaned on hardest is the category Congress left outside the statute.",
            sourceLessonSlug: "gbr-1964-and-the-end",
          },
          {
            prompt: "How did the final 1966 to 1967 edition describe the Civil Rights Act?",
            options: [
              "As a threat to Black business",
              "As a new bill of rights for everyone, regardless of race, creed, or color",
              "As unlikely to be enforced",
              "It did not mention it",
            ],
            correctIndex: 1,
            explanation: "The final edition told readers that every hotel, restaurant, theater or other facility catering to the general public must now do exactly that.",
            sourceLessonSlug: "gbr-1964-and-the-end",
          },
          {
            prompt: "What effect did desegregation have on many Black-owned businesses in the guide?",
            options: [
              "It doubled their business",
              "It drew business away from them as choice expanded for Black travelers and white-owned businesses gained customers",
              "It had no effect",
              "It forced them to relocate",
            ],
            correctIndex: 1,
            explanation: "Expanded access cut both ways, which the guide's own final edition was already noticing.",
            sourceLessonSlug: "gbr-1964-and-the-end",
          },
          {
            prompt: "The National Park Service states that at least half of the Green Book's Black-owned businesses:",
            options: [
              "Were demolished by 1970",
              "Were closed within 10 years",
              "Moved to the suburbs",
              "Were bought by chains",
            ],
            correctIndex: 1,
            explanation: "That figure counts business closures in the decade after 1964, not demolitions.",
            sourceLessonSlug: "gbr-why-the-places-are-gone",
          },
          {
            prompt: "What does NPS say about the number of Green Book businesses in neighborhoods razed for urban renewal and freeways?",
            options: [
              "About 4,000",
              "Exactly half",
              "That the numbers are unknown",
              "None were affected",
            ],
            correctIndex: 2,
            explanation: "The agency writes 'unknown numbers' rather than estimating, which is the standard this course asks you to follow.",
            sourceLessonSlug: "gbr-why-the-places-are-gone",
          },
          {
            prompt: "The Federal-Aid Highway Act of 1956 authorised roughly how many miles of interstate highway?",
            options: ["4,100", "41,000", "410,000", "1,000"],
            correctIndex: 1,
            explanation: "About 41,000 miles under the National System of Interstate and Defense Highways, signed June 29, 1956.",
            sourceLessonSlug: "gbr-why-the-places-are-gone",
          },
          {
            prompt: "A new interstate that BYPASSED a Black commercial district rather than cutting through it:",
            options: [
              "Had no economic effect",
              "Took the traffic and therefore the customers away, leaving formerly thriving areas as shells",
              "Always increased property values",
              "Was required to compensate every business",
            ],
            correctIndex: 1,
            explanation: "Being routed around was its own kind of taking, which is why 'through' and 'around' both belong in the story.",
            sourceLessonSlug: "gbr-why-the-places-are-gone",
          },
          {
            prompt: "The 'less than 20 percent still extant' estimate is attributed to:",
            options: [
              "The Census Bureau",
              "Architectural historian Jennifer Reut, an expert participant with the National Trust for Historic Preservation, as reported by NPS",
              "Victor Green",
              "The Schomburg Center",
            ],
            correctIndex: 1,
            explanation: "It is an attributed estimate about sites still standing nationally, reported on the NPS National Register page.",
            sourceLessonSlug: "gbr-why-the-places-are-gone",
          },
          {
            prompt: "The 'approximately 30 percent still standing in 2014' figure applies to:",
            options: [
              "All Green Book sites nationally",
              "Green Book sites in Route 66 communities only",
              "Tourist homes only",
              "Sites in the South only",
            ],
            correctIndex: 1,
            explanation: "It comes from 2014 research into Green Book sites in Route 66 communities, so its scope is a single corridor.",
            sourceLessonSlug: "gbr-why-the-places-are-gone",
          },
          {
            prompt: "Why do the three survival figures differ?",
            options: [
              "One of them is wrong",
              "They count different units, over different periods, across different geographic scopes",
              "They were produced by biased sources",
              "They are rounded differently",
            ],
            correctIndex: 1,
            explanation: "Businesses closing is not buildings standing, ten years is not today, and Route 66 is not the nation.",
            sourceLessonSlug: "gbr-why-the-places-are-gone",
          },
          {
            prompt: "How many individually listed National Register properties has NPS identified as Green Book sites?",
            options: ["Two", "Twenty", "Two hundred", "Two thousand"],
            correctIndex: 1,
            explanation: "Twenty individual listed properties, plus additional Green Book sites inside historic district nominations.",
            sourceLessonSlug: "gbr-why-the-places-are-gone",
          },
          {
            prompt: "You are writing up a project and want to state what share of Green Book sites survive. What should you do?",
            options: [
              "Average the published figures",
              "Estimate from the sites you personally checked",
              "Quote a figure with its owner, date and scope attached, or say the rate is contested and no complete national survey exists",
              "Use the highest figure, to be generous",
            ],
            correctIndex: 2,
            explanation: "This is the exact point where careful research turns into plausible-sounding fabrication. Attribute or abstain.",
            sourceLessonSlug: "gbr-why-the-places-are-gone",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 7 · Your turn
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "gbr-exercise-read-a-page",
      title: "18 · Practice: the vocabulary of the method",
      section: "Section 7 · Your turn",
      body: `A drill across the whole course before you do the real assignment. Fill each blank with the term, name, number, or year, then check. Spelling and capitalization are forgiving; if you are close, you will be told so.`,
      exercise: {
        instructions: "Type the missing term, name, number, or year, then check. Close answers (spelling, capitalization) count as 'close', not wrong.",
        items: [
          {
            prompt: "The Green Book was first published in ___ by Victor H. Green.",
            answer: "1936",
            accept: ["36"],
            explanation: "A local guide for metropolitan New York in 1936, national from 1937.",
          },
          {
            prompt: "Green's day job, which supplied the network that gathered his listings, was ___ ___ (two words).",
            answer: "letter carrier",
            accept: ["postal carrier", "mail carrier", "postman", "letter-carrier"],
            explanation: "Fellow postal employees solicited listings along their own delivery routes.",
          },
          {
            prompt: "A private residence with a room to rent, the category most often run by women, is a ___ ___ (two words).",
            answer: "tourist home",
            accept: ["tourist homes", "tourist-home"],
            explanation: "More than fourteen hundred were listed over the guide's run.",
          },
          {
            prompt: "The oil company whose stations sold the Green Book nationwide was ___.",
            answer: "Esso",
            accept: ["esso", "standard oil"],
            explanation: "James A. Jackson, a Black marketing executive at Esso, arranged the distribution.",
          },
          {
            prompt: "Beginning with the ___ edition, the guide dropped most categories and listed lodging and restaurants almost exclusively.",
            answer: "1956",
            accept: ["56"],
            explanation: "So a missing barber shop in a late edition is an editorial decision, not evidence about barbers.",
          },
          {
            prompt: "In the 1956 edition, the symbol denoting a recommended establishment is an ___ (the * character's name).",
            answer: "asterisk",
            accept: ["star", "*"],
            explanation: "And the legend warns that omission of the star does not necessarily mean inferior accommodations.",
          },
          {
            prompt: "The four levels of a listing are state, city, ___, and entry.",
            answer: "category",
            accept: ["category heading", "business category"],
            explanation: "The category heading is the only thing that tells you what kind of place an entry is.",
          },
          {
            prompt: "In the 1940 edition, the state of New Mexico has exactly ___ entry.",
            answer: "one",
            accept: ["1", "a single", "one entry"],
            explanation: "A single tourist home in Deming, far off the U.S. 66 corridor.",
          },
          {
            prompt: "Going west on U.S. 66 in the 1940 edition, the last listed corridor stop is ___, Texas.",
            answer: "Amarillo",
            accept: ["amarillo"],
            explanation: "One hotel and one restaurant, then no corridor listing until San Bernardino, California.",
          },
          {
            prompt: "The three live explanations for a gap in the listings are refusal, absence, and ___.",
            answer: "silence",
            accept: ["reporting silence", "reporting gap", "no informant"],
            explanation: "Green himself said he could not secure enough agents to report the places that existed.",
          },
          {
            prompt: "Communities that excluded Black residents and visitors, often enforced after dark, are called ___ towns.",
            answer: "sundown",
            accept: ["sundown towns", "sun-down"],
            explanation: "Loewen documented more than 440 in Illinois alone and thousands nationwide, most outside the South.",
          },
          {
            prompt: "The Green Book's Tulsa listings cluster on and around North ___ Avenue, the district burned in 1921.",
            answer: "Greenwood",
            accept: ["greenwood"],
            explanation: "The 1940 listings across nine categories are documentary evidence of what was rebuilt.",
          },
          {
            prompt: "Title ___ of the Civil Rights Act of 1964 covers public accommodations.",
            answer: "II",
            accept: ["2", "two", "title ii", "title 2"],
            explanation: "Codified at 42 U.S.C. section 2000a, it names inns, restaurants, gasoline stations, and theaters.",
          },
          {
            prompt: "Title II exempted lodging in buildings with not more than ___ rooms for rent that the proprietor occupies as a residence.",
            answer: "five",
            accept: ["5"],
            explanation: "That is a description of a tourist home, the category the guide relied on most.",
          },
          {
            prompt: "The last Green Book edition covered the years 1966 to ___.",
            answer: "1967",
            accept: ["67"],
            explanation: "Published by Langley Waller, it told readers about the Civil Rights Act of 1964.",
          },
          {
            prompt: "The library holding the digitized editions is the ___ Center for Research in Black Culture at the New York Public Library.",
            answer: "Schomburg",
            accept: ["schomburg"],
            explanation: "Its digital collection is where every claim in this course about the editions can be checked.",
          },
        ],
      },
    },
    {
      slug: "gbr-assignment-find-a-listing",
      title: "19 · Your assignment: find a listing, then find the address today",
      section: "Section 7 · Your turn",
      body: `This is the point of the course. You are going to take one entry out of a digitized Green Book and find out what stands at that address now. Everything you need is free and online.

## The assignment
Choose **one listing** from a digitized edition, establish where it was, establish what is there now, and write a report of about 600 to 900 words that a stranger could check line by line.

## Step 1 · Choose your listing
Open the Green Book collection at the Schomburg Center, New York Public Library (New York Public Library, n.d.). Pick a **town you have a reason to care about**: where you live, where a relative lived, somewhere on a road trip you have taken. Then pick one entry.

**Choose well.** A hotel with a distinctive name is easier than "Mrs. J. Smith". A listing with a full street number is easier than a street-only one. If you want the harder version, take the street-only one and treat finding it as the project.

Record, before you go any further: **edition year, page number, state, city, category heading, and the entry exactly as printed**. Note whether you read it in the page image or in a transcription (lesson 8).

## Step 2 · Establish that the place existed, independently
One listing is one report from one informant. Corroborate it with at least one source that is not the Green Book:
- a **city directory** for that town and decade, which usually lists residents and businesses by name and by street;
- **Sanborn fire insurance maps**, which show building footprints, materials, and uses;
- the **census** for that address or street;
- a **Black newspaper** published in or near that city;
- your **state historic preservation office**, several of which have published Green Book surveys (National Park Service, n.d.-b);
- **National Register nominations**, which are long, footnoted, and public.

If you cannot corroborate it, that is a finding. Say so in the report rather than filling the hole.

## Step 3 · Establish where the address is today
Street numbering changes. Streets are renamed. Cities annex and renumber. Do not assume the modern address is the historical one. Check:
- whether the street still exists under that name;
- whether the numbering was changed (city directories from either side of a renumbering will show it);
- the **county or city parcel record** for the current lot, which will give you a parcel number and often a build year.

## Step 4 · Find out what is there now
Use current aerial and street imagery, the parcel record, and if you can, go and look. Then answer, in this order:
1. **Is the building still standing?**
2. If not, **what is on the lot?** A newer building, a parking lot, a highway, a vacant lot, a park.
3. **When did the change happen, and is there a record of the decision?** Demolition permits, urban renewal project files, highway right-of-way maps, city council or redevelopment authority minutes, and newspaper coverage are all public or requestable. **This is the most valuable part of the assignment.** An empty lot with a documented decision behind it teaches more than a preserved building does.

## Step 5 · Write it up
Use these headings.
- **The listing.** Edition, page, and the entry as printed.
- **The place.** What it was, who ran it if you can establish that, and what your corroborating sources say.
- **The address today.** What stands there, with the parcel record cited.
- **What happened in between.** The decision trail, if you found one.
- **What I could not establish.** Required, not optional.
- **Sources.** APA 7, every source you actually used.

## Rules you do not get to break
1. **No invented detail.** Not a date, not a name, not a quotation, not a street number. If a source does not say it, you do not write it.
2. **Say which edition, and how you read it.** Image or transcription (lesson 8).
3. **Do not state a survival rate.** Not for your town, not for the country. See lesson 16.
4. **Do not turn a person into a character.** The women behind "Mrs. E. Latimore" were real, and the record is thin. Write what the record supports and leave the rest alone.
5. **Living communities describe themselves.** If the neighbourhood is still there, use the name and terms the people who live there use, and say where you got them.
6. **Private homes are private.** A tourist home was somebody's house, and today it is probably still somebody's house. Photograph from the public sidewalk, do not publish the current occupants' names, and do not knock unless you have been invited.
7. **Buildings move.** The Latimore Tourist Home is the reminder: the National Park Service's page for it, last updated in 2021, records plans to move the building to a nearby park (National Park Service, n.d.-c). Whether, when, and where it moved is exactly the kind of thing you verify rather than assume, so check the current status before you write that it stands at 318 South Houston Avenue.

## What good looks like
A short, checkable report in which every sentence is either something you read in a source you name, or something you clearly mark as unresolved. That is a harder and better piece of work than a colourful narrative, and it is the only kind that the next researcher can build on.

## Sources
- National Park Service. (n.d.-b). *Green Book properties listed in the National Register of Historic Places*. https://www.nps.gov/articles/green-book-properties-listed-in-the-national-register-of-historic-places.htm
- National Park Service. (n.d.-c). *Latimore Tourist Home*. https://www.nps.gov/places/latimore-tourist-home.htm
- New York Public Library. (n.d.). *Green Book research guide*. https://libguides.nypl.org/greenbook`,
      recallContent: [
        {
          prompt: "Name the three documented reasons Green Book places disappeared.",
          answer: "The market shifted after the Civil Rights Act of 1964, governments took land through eminent domain for urban renewal and freeway projects, and the new interstates either cut through districts or bypassed them and took the traffic away.",
        },
        {
          prompt: "Three survival figures circulate. Why do they not contradict each other?",
          answer: "They count different things: businesses closing within ten years of 1964, sites still extant nationally today as an estimate, and sites still standing in Route 66 communities as of 2014. Different units, different dates, different scopes.",
        },
        {
          prompt: "What does the National Park Service say about the number of Green Book businesses in razed neighborhoods?",
          answer: "That the numbers are unknown. A federal agency writing about its own subject declines to put a figure on it, which is the standard to follow.",
        },
        {
          prompt: "What is the rule for stating a survival rate in your own work?",
          answer: "Quote a figure with its owner, its date and its scope attached, or say the rate is contested and no complete national survey exists. Never average the published figures and never estimate your own.",
        },
      ],
    },
    {
      slug: "gbr-what-comes-next",
      title: "20 · What this course set up, and what it left out",
      section: "Section 7 · Your turn",
      body: `You now have a method: read an edition, read a listing, read a gap, chain a route, and research an address forward to today. Every course that follows in this series uses it.

**What you can do that you could not do before.**
- Name the edition and the page for any claim you make about the guide.
- Tell the difference between a claim about the book and a claim about the world, and write only the one your evidence supports.
- Recognise that density and usefulness run in opposite directions, so a heat map of listings is not a map of where the guide mattered.
- Treat a gap as a question with three testable answers rather than as a conclusion.
- Follow one address from a page of small type to a parcel record and, where the record allows, to the decision that changed it.

**What this course deliberately did not cover, and why.**
- **Sundown towns** got one lesson and a definition. They deserve a course, built from Loewen's method rather than from a list of names, because naming a town as a sundown town is a documentation claim with consequences for people living there now.
- **The 1921 Tulsa race massacre** appears here only as context for why a page of 1940 Greenwood addresses is remarkable. It is not this course's story to tell in passing.
- **Individual sites** are named here only where the National Park Service has documented them. The site courses that follow will go deep on a few places, with local sources, rather than shallow on many.
- **How a place gets decided.** Parcels, zoning, comprehensive plans, assessments, public minutes, and historic designation are their own body of knowledge, and step 4 of your assignment only opened the door on them. That is the next foundational course in this series, and it is what will let you answer "who decided this" rather than only "what happened here".
- **Any national survival statistic**, for the reason lesson 16 gave: no complete survey exists, and this course will not manufacture one.

**One last thing about the book itself.** Victor Green wrote in 1949 that he hoped the guide would one day be unnecessary. It became unnecessary, and it also became a record: of ten thousand businesses, of the women who rented out a room, of the streets a family could actually stop on. The listings survived the buildings. That is why reading them carefully is worth doing properly.

## Sources
- Loewen, J. W. (2005). *Sundown towns: A hidden dimension of American racism*. The New Press.
- National Park Service. (n.d.-b). *Green Book properties listed in the National Register of Historic Places*. https://www.nps.gov/articles/green-book-properties-listed-in-the-national-register-of-historic-places.htm
- New York Public Library. (n.d.). *Green Book research guide*. https://libguides.nypl.org/greenbook`,
      recallContent: [
        {
          prompt: "Before you leave the digitized page, what five things do you record about your chosen listing?",
          answer: "Edition year, page number, state, city, category heading, and the entry exactly as printed, plus whether you read the image or a transcription.",
        },
        {
          prompt: "Name three sources that can corroborate a listing independently of the Green Book.",
          answer: "City directories, Sanborn fire insurance maps, the census, a Black newspaper from the region, a state historic preservation office survey, or a National Register nomination.",
        },
        {
          prompt: "Which step of the assignment is the most valuable, and why?",
          answer: "Finding the decision trail behind the change: demolition permits, urban renewal files, right-of-way maps, council minutes, newspaper coverage. An empty lot with a documented decision behind it teaches more than a preserved building does.",
        },
        {
          prompt: "Why can you not assume the modern address matches the historical one?",
          answer: "Streets get renamed, cities annex and renumber, and numbering schemes change. Check the street name, the numbering, and the parcel record before claiming a location.",
        },
        {
          prompt: "What is the rule about a tourist home you locate today?",
          answer: "It was somebody's house and probably still is. Photograph from the public sidewalk, do not publish the current occupants' names, and do not knock unless invited.",
        },
      ],
    },
    // <<< APPEND NEXT SECTION ABOVE THIS LINE >>>
  ],
};
