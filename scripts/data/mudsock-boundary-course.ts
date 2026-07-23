// Authored "Mudsock: How a Rivalry Marks a Boundary" — a cited, high-school-and-up SITE course on
// Learn.WitUS (Culture & History). It is COURSE 4 of the Indianapolis cluster planned in
// plans/39-indianapolis-pilot-cluster.md, and it runs the same six-beat site template as course 1
// (Indiana Avenue): Then, Built, Powers, Now, Next, Write.
//
// WHY THIS COURSE EXISTS, in one sentence: course 1 is a district that was cleared, and this is the
// ground that grew, and they are two ends of one metropolitan story rather than two unrelated places.
//
// Prerequisites named in the text: `green-book-how-to-read-a-route` (the METHOD) and
// `indiana-avenue-a-district-and-what-replaced-it` (the counterweight this course answers).
//
// Sourcing discipline (the load-bearing part of this file):
//   * Every teaching lesson carries APA 7 in-line citations and a `## Sources` bibliography.
//   * Election results are taken from Hamilton County's own published results system, not from
//     news summaries: the November 2012 Fishers public questions and the May 2016 Hamilton
//     Southeastern referendum are transcribed from secure2.hamiltoncounty.in.gov.
//   * Census counts come from STATS Indiana / the Indiana Business Research Center and from the
//     decennial table. Where two publishers of the SAME census disagree by a few dozen people,
//     lesson 2 gives both numbers with their owners rather than picking one.
//   * NO INVENTED STATISTIC, PERSON, QUOTATION, ADDRESS, OR FIGURE.
//
// WHAT WAS VERIFIED AND WHAT WAS CUT, per plan 39 §4's instruction to treat the Mudsock items as
// leads rather than facts:
//   * VERIFIED: the Mudsock nickname and its swampy-soil explanation (Encyclopedia of Indianapolis);
//     the 1881 Battle of Mudsock, WITH a live disagreement about the death toll that lesson 1 keeps
//     rather than smooths; the two schools (Fishers High School and Hamilton Southeastern High
//     School) and that the trophy is an all-varsity-sports points award created by the Clark family;
//     Hamilton County's decennial census counts; the Fishers incorporation votes; the Geist and
//     southeast annexations; the 1959 School Reorganization Act; the property tax caps; the school
//     referendum history including the one pending in November 2026.
//   * CUT OR FLAGGED: the "horses wore socks of mud" retelling is presented as a local retelling,
//     not as an etymology, because no primary source for it was found. The founding YEAR of
//     Hamilton Southeastern Schools (reported as 1964) and the closing of the original Fishers High
//     School (reported as 1969) are flagged in lesson 3 as encyclopedic secondary claims whose
//     primary record, the county reorganization plan and the school board minutes, has not been
//     read into this course. No "county growth figure" is asserted beyond the published census.
//   * THE PROPOSED SPINE IS WEAKENED ON PURPOSE, exactly as course 1 weakened its own. Lesson 12
//     tests "the rivalry marks a boundary" and finds that the Mudsock line is an ATTENDANCE
//     boundary inside one district in one city, not a jurisdictional line. The claim that survives
//     is better: four different boundaries cross this ground and none of them is the one you can
//     feel at a football game.
//
// FAIRNESS RULE, stated because it is a research instruction and not a courtesy: this is a place
// people live. The subject is instruments and incentives, not blame. Where the record contains
// something hard about the county (the 1925 Klan trial in the Noblesville courthouse, the 1970
// Black population count) it is reported; where the record contains something admirable (the Quaker
// founding of Westfield and its Underground Railroad stations) that is reported too, from the same
// encyclopedia, in the same lesson.
//
// House rule: NO em-dashes or en-dashes in prose. Verbatim cited titles inside a `## Sources` block
// are the only place a dash survives.

import type { AuthoredCourse } from "./authored-course";

export const MUDSOCK_BOUNDARY_COURSE: AuthoredCourse = {
  title: "Mudsock: How a Rivalry Marks a Boundary",
  description:
    "A cited, high-school-and-up site course on Fishers and Hamilton County, Indiana, built around one civic question: how does a suburb form, and who pays for what. This is the counterweight to Indiana Avenue: A District and What Replaced It. That course follows a Black business corridor that was cleared; this one follows the ground that grew, twenty miles northeast, over the same decades, under a different set of legal instruments. You will learn where the name Mudsock comes from and what a nickname is and is not evidence of, read a county's growth out of the decennial census instead of out of a slogan, look at the subdivision and the campus high school as building types with assumptions built into them, and then spend the longest section of the course on the instruments themselves: incorporation, annexation and the remonstrance waiver almost nobody reads, the school district line drawn under Indiana's 1959 School Reorganization Act, and the property tax caps that decide when a wealthy district still has to ask its voters for money. You will test the claim in this course's own title against the record and watch part of it fail, look up a real parcel and a real taxing district in Indiana's public finance database, find the school referendum currently on the November 2026 ballot, and write a piece of grounded nonfiction about one street or one boundary. A virtual tour of the Mudsock rivalry and its ground is planned and will be added to the Now section when its embed URL exists.",
  lessons: [
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 1 · Then  (beat 1: US and state/local history)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "ms-what-it-was",
      title: "1 · Mudsock: a nickname, a crossroads, and what a name proves",
      section: "Section 1 · Then",
      body: `**Start with the two prerequisites, because this course is the second half of an argument.**

*The Green Book: How to Read a Route* taught the method: read a listing, read a gap as evidence, chain a route, research an address forward. *Indiana Avenue: A District and What Replaced It* applied that method to nine blocks of Indianapolis and asked who decided, under which instrument, on what record. It found that the Avenue's buildings went to blight designation, university land assembly and eminent domain, and it found that the 1970 Unigov consolidation did **not** cause that clearance, because a cause cannot postdate its effect.

**This course goes twenty miles northeast and asks the opposite question.** Not what removed a place, but what built one. Same metropolitan area, same decades, same state legislature, different instruments. **Course 1 is the ground that was cleared. This is the ground that grew.** Neither makes sense alone.

**The place.** Fishers, Indiana, sits in the southeast corner of Hamilton County, immediately north of Marion County and the Indianapolis city limits. Its origin is a railroad. "The pioneer period ended with the construction of the Peru and Indianapolis Railroad in 1851" (Encyclopedia of Indianapolis, n.d.-c), and where that line crossed Big Branch Creek a settlement called **New Brittain** was established. **Salathiel Fisher purchased the land adjacent to the railroad track and established the town of Fisher's Switch in 1872.** Fisher died in 1873, leaving his son Henry to develop it (Encyclopedia of Indianapolis, n.d.-a). The names moved around for decades: Fishers Station, Fishers Switch, and finally, when the post office dropped "switch," Fishers.

**And underneath all of those official names, a nickname.** The Encyclopedia of Indianapolis puts the reason in one clause: "Because of the swampy nature of the soil, the community acquired the nickname of 'Mudsock'" (Encyclopedia of Indianapolis, n.d.-a).

**Now do the thing this course is actually teaching, which is to treat a name as a lead rather than a fact.**

**1. A nickname has no author and no date.** "Mudsock" was never on a plat, a post office register, or an incorporation ordinance. It is a thing people called a place. That makes it real and it makes it unciteable in the way a deed is citeable. **The swampy-soil explanation above has a source. The more colourful retelling you will hear locally, that horses came out of the mud with brown socks on their legs, is a retelling, and this course has not found a primary source for it.** Repeat the first. Attribute the second as a story people tell.

**2. The name was not unique to this place.** Local reporting notes that other Indiana communities, including Dundee in Madison County, were also called Mudsock. **A place nickname is a common noun before it is a proper one.** If you search records on the name alone you will collect the wrong county, which is exactly the mistake course 1 warned about when it found a Green Book hotel on an "Indiana Avenue" a hundred miles from Indianapolis. **Always carry the county.**

**3. The name got famous for a specific and violent reason.** In 1881 a feud between two saloons across the street from one another produced a brawl that national newspapers called the **Battle of Mudsock**. And here the record disagrees with itself, which is the most useful thing about it.

| Source | Killed | Injured | Other detail |
|---|---|---|---|
| Encyclopedia of Indianapolis (n.d.-a) | 1 | 32 | Two buildings burnt; year given as 1881, no date |
| WRTV (n.d.) | 1 | more than 30 | Began Saturday, ended Sunday; one saloon burned, the other closed |
| The Reporter (2018) | 2 | 30 | Dates it to November 19, 1881; names the saloon keepers |

**Do not average those.** Report the range, name who published each figure, and notice that only the two local outlets give a calendar date at all. **The county's own encyclopedia gives a year and stops**, which tells you something about how confident an encyclopedia is willing to be. If you want to settle it, the settling documents are the 1881 newspapers themselves and the Hamilton County court records, and **neither has been read into this course.**

**4. And here is what the name is doing today, which is the reason this course is called what it is.** The Fishers police department's own historian describes 1881 Fishers as "a lawless town," with the railroad bringing "a lot of drifters, which along with whiskey consumption, may have helped contribute to the fight" (WRTV, n.d.). More than a century later that name came back as the title of a high school rivalry, an annual all sports competition between the two public high schools inside the city. **A place that had almost no people for a century adopted, as the emblem of its modern identity, the nickname it earned when it was a muddy railroad stop with two bars.** That is not a criticism. It is a fact about how communities build identity out of the oldest thing they can find, and **Section 3 asks whether the boundary that rivalry appears to mark is the boundary that actually governs anyone.**

**The tone rule for this whole course, which is a research instruction.** Fishers and Hamilton County are places roughly four hundred thousand people live in right now. This course is about **instruments and incentives**, not about blame. Every criticism in it is aimed at a law, a formula, or a procedure, all of which are public and none of which is a person. **Write about the suburb the way course 1 asked you to write about the Avenue: from the documents, without a villain, and without a fairy tale.**

## Sources
- Encyclopedia of Indianapolis. (n.d.-a). *Fishers*. https://indyencyclopedia.org/fishers/
- Encyclopedia of Indianapolis. (n.d.-c). *Hamilton County*. https://indyencyclopedia.org/hamilton-county/
- The Reporter. (2018, October 31). *Battle of Mudsock coming up Sept. 8*. https://readthereporter.com/battle-of-mudsock-coming-up-sept-8/
- WRTV Indianapolis. (n.d.). *The "Battle of Mudsock": Fishers' hidden history*. https://www.wrtv.com/news/local-news/hamilton-county/fishers/the-real-battle-of-mudsock-the-history-of-fishers-you-didn-t-know-about`,
      recallContent: [
        {
          prompt: "How did the settlement that became Fishers begin, and in what year?",
          answer: "As a railroad stop. The Peru and Indianapolis Railroad arrived in 1851; Salathiel Fisher bought the land next to the track and established Fisher's Switch in 1872. He died in 1873 and his son Henry developed it.",
        },
        {
          prompt: "What explanation does the Encyclopedia of Indianapolis give for the nickname Mudsock, and what should you do with the more colourful local retelling?",
          answer: "It attributes the nickname to the swampy nature of the soil. The story about horses wearing socks of mud is a local retelling with no primary source found for this course, so attribute it as a story rather than repeating it as an etymology.",
        },
        {
          prompt: "Why is a place nickname a research hazard?",
          answer: "It has no author and no date, it was never recorded on a plat or ordinance, and it was not unique. Other Indiana communities including Dundee in Madison County were also called Mudsock, so searching on the name alone collects the wrong county.",
        },
        {
          prompt: "How many people died in the 1881 Battle of Mudsock?",
          answer: "The sources disagree. The Encyclopedia of Indianapolis and WRTV say one; The Reporter says two. Injury counts range from 30 to 32. Report the range with its owners rather than averaging, and note that only the local outlets give a calendar date.",
        },
        {
          prompt: "What is the tone rule for this course, and why is it a research instruction?",
          answer: "The subject is instruments and incentives, not blame. Every criticism is aimed at a law, a formula or a procedure, all of which are public and none of which is a person. Four hundred thousand people live here now.",
        },
      ],
    },
    {
      slug: "ms-the-county-that-grew",
      title: "2 · Reading a county's growth out of the census",
      section: "Section 1 · Then",
      body: `Everyone knows Hamilton County grew. **Almost nobody can tell you when, by how much, or from what baseline**, and the difference between those two states is one table.

**Hamilton County, decennial census.**

| Year | Population | Change |
|---|---|---|
| 1950 | 28,491 | |
| 1960 | 40,132 | +40.9 percent |
| 1970 | 54,532 | +35.9 percent |
| 1980 | 82,027 | +50.4 percent |
| 1990 | 108,936 | +32.8 percent |
| 2000 | 182,763 | +67.8 percent |
| 2010 | 274,555 | +50.2 percent |
| 2020 | 347,490 | +26.6 percent |

(STATS Indiana, n.d.) The 2025 estimate for the county is **387,036**, an 11.4 percent increase over the 2020 count against 2.8 percent statewide, and the projection for 2030 is **417,426** (STATS Indiana, n.d.).

**Fishers itself, decennial census.**

| Year | Population |
|---|---|
| 1880 | 138 |
| 1950 | 219 |
| 1960 | 344 |
| 1970 | 628 |
| 1980 | 2,008 |
| 1990 | 7,508 |
| 2000 | 37,835 |
| 2010 | 76,794 |
| 2020 | 98,977 |

The Encyclopedia of Indianapolis independently records the town at "only 344" in 1960 and reaching "2,000" by 1980, growing past 3,000 in the mid-1980s "following the Sunblest Farms development," and gives the 2020 census as **98,977**, the second largest city in Hamilton County (Encyclopedia of Indianapolis, n.d.-a).

**Four things a careful reader gets out of those two tables, in order of how much they are worth.**

**1. The growth starts in the 1950s, not the 1990s.** Forty percent in the 1950s, thirty six percent in the 1960s. **That matters enormously for the argument this course is testing**, because the Unigov consolidation that reshaped Indianapolis did not take effect until January 1, 1970. **Whatever Unigov did, it did not start this.** Lesson 12 comes back to that.

**2. Growth is not destiny, and this county has the receipt.** After the 1887 discovery of a natural gas field in northeast Indiana and the boom that followed, "the county lost 20 percent of its population between 1900 and 1920" (Encyclopedia of Indianapolis, n.d.-c). **A place that grows can shrink**, and a course that treats suburban growth as a law of nature has not looked at 1920.

**3. The roads are in the table even though they are not in the table.** The Encyclopedia names the mechanism plainly: "The 1950s saw the beginning of the suburban boom," with SR 37, I-69 and I-465 "making commuting much easier and opening the county to suburbanization from Marion County," and Fishers as "the gateway to the I-69 corridor northeast of the city" (Encyclopedia of Indianapolis, n.d.-c). **Course 1 taught you that an interstate alignment is a decision with authors.** The same instrument that ran a highway through Ransom Place ran a highway to this county. **One line on a map does two things at once, and both of them are in the record.**

**4. Two publishers of the same census disagree, and you should keep the disagreement.** The decennial table above gives Hamilton County **182,763** in 2000, **274,555** in 2010 and **347,490** in 2020. Other published summaries of the same censuses give **182,740**, **274,569** and **347,467**. The gaps are 23, 14 and 23 people. **Neither set is obviously wrong and this course does not pick one.** Say which you used and where you got it. The honest note is that a difference of twenty people does not touch any argument here, and **saying so out loud is better than quietly rounding.**

**Now the part of the county's record that a growth table cannot show, and that a fair course does not skip.**

**Hamilton County's history is not one thing.** The Encyclopedia of Indianapolis records that **Westfield was platted on May 6, 1834 by Asa Bales and fellow North Carolina Quakers Ambrose Osborne and Simon Moon**, named after the Westfield Friends Monthly Meeting, "a Quaker antislavery group in North Carolina," and that "the town was planned as an important home station on the Underground Railroad with many families of the Religious Society of Friends and the Wesleyan Methodist Church supporting the cause." Westfield incorporated as a town in **1849** and as a city on **January 1, 2008** (Encyclopedia of Indianapolis, n.d.-b).

**And the same entry gives the other half.** "The Black population in the county and Westfield peaked in 1880 and steadily declined from 1900-1970, with there being only 272 African Americans out of 54,532 residents in the county in 1970" (Encyclopedia of Indianapolis, n.d.-b). **Read those two paragraphs together and do not resolve them.** A county with documented Underground Railroad stations had 272 Black residents in 1970. Both facts are in one encyclopedia entry, and any account that uses only one of them is choosing a story over a record.

**One more entry in the county's ledger, and it is in the courthouse.** In 1925 the murder trial of **D. C. Stephenson**, Grand Dragon of the Indiana Ku Klux Klan, was moved from Indianapolis to **Noblesville**, the Hamilton County seat, on a change of venue sought by prosecutors who doubted an Indianapolis jury. The trial ran from **October 28 to November 14, 1925**, and Stephenson was convicted and sentenced to life (Encyclopedia.com, n.d.). **A change of venue is a legal instrument like any other**, and this one put the most consequential Klan prosecution in American history in a Hamilton County courtroom. It is part of the county's record because it happened there, not because of anything it says about anyone living there now.

**What none of this tells you.** It does not tell you why people moved. Census counts are outcomes, not motives. **Anyone who tells you the single reason a suburb grew is selling you something**, and Section 3 will show you at least four instruments operating at once.

## Sources
- Encyclopedia of Indianapolis. (n.d.-a). *Fishers*. https://indyencyclopedia.org/fishers/
- Encyclopedia of Indianapolis. (n.d.-b). *Westfield*. https://indyencyclopedia.org/westfield/
- Encyclopedia of Indianapolis. (n.d.-c). *Hamilton County*. https://indyencyclopedia.org/hamilton-county/
- Encyclopedia.com. (n.d.). *D.C. Stephenson trial: 1925*. https://www.encyclopedia.com/law/law-magazines/dc-stephenson-trial-1925
- STATS Indiana. (n.d.). *Hamilton County, Indiana profile*. Indiana Business Research Center, Kelley School of Business, Indiana University. https://www.stats.indiana.edu/profiles/profiles.asp?scope_choice=a&county_changer=18057
- U.S. Census Bureau. (n.d.). *Decennial census*. https://www.census.gov/programs-surveys/decennial-census.html`,
      recallContent: [
        {
          prompt: "In which decade does Hamilton County's rapid growth actually begin, and why does that matter to this course's argument?",
          answer: "The 1950s: the county grew 40.9 percent from 1950 to 1960 and 35.9 percent from 1960 to 1970. It matters because Unigov did not take effect until January 1, 1970, so Unigov cannot have started the growth.",
        },
        {
          prompt: "What does the 1900 to 1920 period prove about suburban growth?",
          answer: "That growth is not a law of nature. After the natural gas boom ended, Hamilton County lost 20 percent of its population between 1900 and 1920.",
        },
        {
          prompt: "Two publishers give slightly different counts for the same censuses. What does this course do?",
          answer: "Reports both, names the owner of each, and says the gap of about twenty people touches no argument here. It does not average them or silently pick one.",
        },
        {
          prompt: "Give the two facts about Westfield that must be held together.",
          answer: "Westfield was platted in 1834 by North Carolina Quakers and planned as an important home station on the Underground Railroad. The same encyclopedia entry records only 272 African Americans among the county's 54,532 residents in 1970.",
        },
        {
          prompt: "What happened in the Noblesville courthouse in 1925, and how did it get there?",
          answer: "The murder trial of D. C. Stephenson, Grand Dragon of the Indiana Klan, ran there from October 28 to November 14, 1925, after prosecutors obtained a change of venue out of Indianapolis. He was convicted and sentenced to life.",
        },
      ],
    },
    {
      slug: "ms-the-two-schools",
      title: "3 · Two high schools in one city, and why the rivalry has a name",
      section: "Section 1 · Then",
      body: `The Mudsock rivalry is between **Fishers High School** and **Hamilton Southeastern High School**. Both are public. Both are in the City of Fishers. **Both are in the same school district.** Hold that last sentence, because it is the hinge of the whole course.

**The sequence, as the available sources report it.**

- There was an **original Fishers High School**, "located at Lantern Road and 116th Street, where the current Fishers Elementary School stands."
- **Hamilton Southeastern Schools was formed to consolidate the schools of the southeastern portion of rural Hamilton County**, and Hamilton Southeastern High School dates its founding to **1964**.
- The original Fishers High School "was demolished in 1969 after the opening of Hamilton Southeastern High School."
- For roughly forty years, **Hamilton Southeastern High School was the district's only high school.**
- The building that is now Fishers High School **opened in 2003 as a freshman campus** for the district's ninth graders. In the fall of **2006** it became the district's second high school, Fishers High School, and in **2007** a second wing let it hold grades 9 through 12.
- Enrollment, most recently reported: Fishers High School **3,664 students** in 2023-24; the district **21,299 students** in 2023-24.

**Now the flag, and it is a real one.** Every claim in that list comes from **encyclopedic secondary sources**, not from the county's school reorganization plan, the school board's minutes, or a district history. Those primary records exist. **This course has not read them.** The two dates most worth checking are the 1964 founding of the district and the 1969 closure of the original high school, which are five years apart and could easily describe a district that formed in one building and moved to another. **Report them as reported, and say who reported them.** That instruction is the same one course 1 gave about a source that said Indiana University's first Avenue purchase "may have been" in October 1965: **keep the hedge when you repeat the claim.**

**The trophy, which is better documented than the district's founding.** The Mudsock award is an all sports competition, not a single game. Hamilton Southeastern's athletics department describes it this way: "Each time the Tigers and Royals compete, one point is on the line," with the trophy going to whichever school takes more points across the varsity season, and it credits the trophy's creation to a family: "A huge thank you goes to Dub and Jeanie Clark and their family, whose generosity created the Mudsock Trophy" (Hamilton Southeastern High School Athletics, 2025). That article describes the competition as being in its **eighteenth year** in September 2025, which puts the first Mudsock competition in the **2007-08 school year**, the first year Fishers High School held all four grades.

**The football game is the one everybody names**, and local coverage describes it selling out and drawing "nearly 8,000 people," which for context is more than twice the enrollment of either school (Towne Post Network, n.d.).

**So here is the shape of the thing, stated precisely, because the imprecise version is the one everyone repeats.**

**What the Mudsock line separates:** two attendance areas inside **one** school corporation, inside **one** city, inside **one** township pair, inside **one** county.

**What it does not separate:** two towns, two tax bases, two school boards, two sets of property tax rates, or two ballots. **Nothing that a government does differently on one side than the other runs along that line.**

**Which raises the question this course exists to answer.** If the boundary you can feel at a football game is not a boundary that governs anybody, **then where are the boundaries that do?** There are at least four of them crossing this ground, they are all different shapes, and **not one of them is visible from a stadium**. Section 3 is about finding them.

**One thing worth saying plainly before you go on.** A rivalry between two schools in one town is a genuinely good thing that a community built for itself, and 8,000 people at a high school football game is a community doing something right. **The argument in this course is not that the rivalry is fake. It is that the rivalry is the most visible line on this ground and the least consequential**, and that the gap between visibility and consequence is exactly where civic power hides.

## Sources
- Fishers High School Athletics. (n.d.). *Athletics*. https://fisherstigersathletics.com/
- Hamilton Southeastern High School Athletics. (2025, September). *What is Mudsock Week?* https://hseathletics.com/Article/79013
- Hamilton Southeastern Schools. (n.d.). *Schools*. https://www.hseschools.org/schools
- Towne Post Network. (n.d.). *Some history behind the annual Mudsock game*. https://townepost.com/indiana/geist/mudsock-game-history/`,
      recallContent: [
        {
          prompt: "Which two schools contest the Mudsock rivalry, and what do they have in common that most people miss?",
          answer: "Fishers High School and Hamilton Southeastern High School. They are both public, both in the City of Fishers, and both in the same school district, Hamilton Southeastern Schools.",
        },
        {
          prompt: "Sketch the sequence from the original Fishers High School to two high schools.",
          answer: "An original Fishers High School stood at Lantern Road and 116th Street; the district consolidated as Hamilton Southeastern with a high school founded in 1964; the original school was demolished in 1969; HSE was the only high school for about forty years; the 2003 freshman campus became Fishers High School in 2006 and held grades 9 to 12 from 2007.",
        },
        {
          prompt: "What is the flag on that sequence, and what is the instruction?",
          answer: "Every claim in it comes from encyclopedic secondary sources. The county reorganization plan, the school board minutes and a district history have not been read into this course. Report the claims as reported, name who reported them, and keep the hedge.",
        },
        {
          prompt: "How is the Mudsock trophy actually won, and when did the competition start?",
          answer: "It is an all varsity sports points competition: each Tigers versus Royals contest is worth one point, and the school with more points takes the trophy. Hamilton Southeastern's athletics department described it as being in its eighteenth year in September 2025, which places the first competition in 2007-08.",
        },
        {
          prompt: "State precisely what the Mudsock line does and does not separate.",
          answer: "It separates two attendance areas inside one school corporation, one city, one township pair and one county. It does not separate two towns, two tax bases, two school boards, two tax rates or two ballots. Nothing a government does differently runs along it.",
        },
      ],
    },
    {
      slug: "ms-quiz-then",
      title: "4 · Quiz: the place and the name",
      section: "Section 1 · Then",
      quiz: {
        passingScore: 70,
        // 15-question bank served 8 at a time with shuffled options, so a retake is a different
        // quiz rather than the same list (the repo standard, src/lib/quiz.ts).
        questionsPerAttempt: 8,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What brought the settlement that became Fishers into existence, and when?",
            options: [
              "The Peru and Indianapolis Railroad, which reached the area in 1851",
              "The natural gas boom of 1887",
              "Interstate 69, built in the 1960s",
              "Geist Reservoir, completed in 1943",
            ],
            correctIndex: 0,
            explanation: "The railroad came first. Salathiel Fisher bought land beside the track and established Fisher's Switch in 1872; he died in 1873 and his son Henry developed it.",
            sourceLessonSlug: "ms-what-it-was",
          },
          {
            prompt: "What explanation for the nickname Mudsock is actually sourced in this course?",
            options: [
              "That horses emerged from the mud looking as though they wore brown socks",
              "That it was the name of a saloon",
              "The swampy nature of the soil, per the Encyclopedia of Indianapolis",
              "That a railroad conductor coined it in 1851",
            ],
            correctIndex: 2,
            explanation: "The horses retelling is a local story with no primary source found for this course. Attribute it as a story rather than repeating it as an etymology.",
            sourceLessonSlug: "ms-what-it-was",
          },
          {
            prompt: "Why is a place nickname a research hazard rather than a research finding?",
            options: [
              "Nicknames are always invented by newspapers",
              "It has no author or date, was never on an official record, and was not unique to this place, so a name-only search collects the wrong county",
              "Nicknames cannot be cited at all",
              "Because it changed every decade",
            ],
            correctIndex: 1,
            explanation: "Other Indiana communities, including Dundee in Madison County, were also called Mudsock. Always carry the county, exactly as course 1 said to carry the city.",
            sourceLessonSlug: "ms-what-it-was",
          },
          {
            prompt: "The sources on the 1881 Battle of Mudsock disagree. How does this course handle it?",
            options: [
              "It uses the highest figure because it is more dramatic",
              "It omits the event",
              "It averages the reported casualty counts",
              "It reports the range with each figure's owner and notes that only the local outlets give a calendar date",
            ],
            correctIndex: 3,
            explanation: "The Encyclopedia of Indianapolis and WRTV say one killed; The Reporter says two. Injury counts run 30 to 32. The underlying 1881 newspapers and court records have not been read here.",
            sourceLessonSlug: "ms-what-it-was",
          },
          {
            prompt: "In which decade did Hamilton County's rapid growth begin?",
            options: ["The 1990s", "The 1950s", "The 1980s", "The 2000s"],
            correctIndex: 1,
            explanation: "The county grew 40.9 percent from 1950 to 1960 and 35.9 percent from 1960 to 1970, well before Unigov took effect on January 1, 1970.",
            sourceLessonSlug: "ms-the-county-that-grew",
          },
          {
            prompt: "What does Hamilton County's population between 1900 and 1920 demonstrate?",
            options: [
              "That census counts before 1930 are unreliable",
              "That the county has always grown",
              "That growth is not inevitable: the county lost 20 percent of its population after the natural gas boom ended",
              "That the county's boundaries changed",
            ],
            correctIndex: 2,
            explanation: "A place that grows can shrink. A course that treats suburban growth as a law of nature has not looked at 1920.",
            sourceLessonSlug: "ms-the-county-that-grew",
          },
          {
            prompt: "Hamilton County's population in the 2020 census was about:",
            options: ["98,977", "182,763", "347,490", "387,036"],
            correctIndex: 2,
            explanation: "347,490 in the decennial table. 98,977 is the City of Fishers, 182,763 is the county in 2000, and 387,036 is the 2025 estimate.",
            sourceLessonSlug: "ms-the-county-that-grew",
          },
          {
            prompt: "Two publishers give Hamilton County's 2020 count as 347,490 and 347,467. What should you do?",
            options: [
              "Use whichever is larger",
              "Report both with their owners, say which you used, and note the gap touches no argument here",
              "Refuse to cite either",
              "Average them to 347,478",
            ],
            correctIndex: 1,
            explanation: "A difference of twenty three people changes nothing in this course, and saying so out loud is better than quietly rounding.",
            sourceLessonSlug: "ms-the-county-that-grew",
          },
          {
            prompt: "Which pair of facts about Westfield does this course insist on holding together?",
            options: [
              "It was platted by North Carolina Quakers and planned as an Underground Railroad home station, and the county had only 272 African American residents out of 54,532 in 1970",
              "It was founded in 1834 and became a city in 2008",
              "It has a large sports complex and a growing population",
              "It was named for a monthly meeting and incorporated in 1849",
            ],
            correctIndex: 0,
            explanation: "Both come from the same Encyclopedia of Indianapolis entry. Using only one of them chooses a story over a record.",
            sourceLessonSlug: "ms-the-county-that-grew",
          },
          {
            prompt: "Why was the 1925 D. C. Stephenson murder trial held in Noblesville?",
            options: [
              "Because prosecutors obtained a change of venue out of Indianapolis",
              "Because the crime occurred in Hamilton County",
              "Because the Indiana Supreme Court ordered it",
              "Because Noblesville had the largest courtroom in the state",
            ],
            correctIndex: 0,
            explanation: "A change of venue is a legal instrument like any other. The trial ran October 28 to November 14, 1925, and Stephenson was convicted and sentenced to life.",
            sourceLessonSlug: "ms-the-county-that-grew",
          },
          {
            prompt: "Fishers High School and Hamilton Southeastern High School are:",
            options: [
              "In two different school districts in the same county",
              "In two different cities in the same district",
              "One public and one private school in the same city",
              "Both public schools in the same city and the same school district",
            ],
            correctIndex: 3,
            explanation: "This is the hinge of the whole course. The line between them is an attendance boundary, not a jurisdictional one.",
            sourceLessonSlug: "ms-the-two-schools",
          },
          {
            prompt: "How did Fishers High School come to exist as the district's second high school?",
            options: [
              "The building opened in 2003 as a freshman campus, became Fishers High School in 2006, and held grades 9 to 12 from 2007",
              "It was built new in 2007 on a greenfield site",
              "It was the original Fishers High School, reopened",
              "It was transferred from Noblesville schools in 2010",
            ],
            correctIndex: 0,
            explanation: "Hamilton Southeastern High School had been the district's only high school for roughly forty years before that.",
            sourceLessonSlug: "ms-the-two-schools",
          },
          {
            prompt: "What flag does this course put on the dates for the district's founding and the original Fishers High School's closure?",
            options: [
              "That the dates are certainly wrong",
              "That they come from encyclopedic secondary sources, and the county reorganization plan and school board minutes have not been read into this course",
              "That they are disputed by the district",
              "That no source gives them at all",
            ],
            correctIndex: 1,
            explanation: "The reported dates are 1964 for the district's high school and 1969 for the original school's demolition. Report them as reported and keep the hedge.",
            sourceLessonSlug: "ms-the-two-schools",
          },
          {
            prompt: "How is the Mudsock trophy won?",
            options: [
              "By winning the annual football game",
              "By a vote of the two athletic directors",
              "By the school with the higher combined enrollment",
              "By accumulating the most points across varsity sports, one point per Tigers versus Royals contest",
            ],
            correctIndex: 3,
            explanation: "Hamilton Southeastern's athletics department credits the trophy's creation to Dub and Jeanie Clark and their family, and described the competition as being in its eighteenth year in September 2025.",
            sourceLessonSlug: "ms-the-two-schools",
          },
          {
            prompt: "The central claim this course will test is that:",
            options: [
              "The Mudsock rivalry is fake",
              "Hamilton County grew because of Unigov",
              "The boundary you can feel at a football game is the most visible line on this ground and the least consequential",
              "High school sports should not be publicly funded",
            ],
            correctIndex: 2,
            explanation: "The gap between visibility and consequence is exactly where civic power hides, which is why Section 3 goes looking for the boundaries that do govern.",
            sourceLessonSlug: "ms-the-two-schools",
          },
        ],
      },
    },
    // <<< APPEND NEXT SECTION ABOVE THIS LINE >>>
  ],
};
