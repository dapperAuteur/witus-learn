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
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 2 · Built  (beat 2: architecture, building typology, and what a form assumes)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "ms-built-subdivision",
      title: "5 · The subdivision: the unit a suburb is actually made of",
      section: "Section 2 · Built",
      body: `Beat 2 asks: **why does it look like that?** Course 1 answered that question for a commercial corridor by starting with typology, the study of what kind of building a building is before you get to style. **Do the same here and you get a surprise: the basic unit of a suburb is not a building at all. It is a drawing.**

**The instrument is the subdivision plat.** A plat is a surveyed drawing, recorded with the county, that cuts one parcel into many and dedicates the streets, easements and common areas. **Until it is recorded, none of those lots legally exist.** Everything that follows, the houses, the addresses, the mail routes, the school bus stops, is downstream of a document filed with a recorder.

**So the first research move in a suburb is the same as the first research move on Indiana Avenue: find the document, not the building.** Course 1 said start with the blight designation rather than the demolition. **Here, start with the plat rather than the house.** It is dated, it names the developer, it shows the original lot lines, and it is public.

**What a plat carries with it, and what it does not.**

| On the plat | Not on the plat, but recorded alongside it |
|---|---|
| Lot lines and lot numbers | The covenants, conditions and restrictions |
| Street layout and right of way widths | Utility service agreements |
| Drainage and utility easements | Any waiver of the right to remonstrate against annexation |
| Common areas and their ownership | Homeowners association bylaws |

**That last item in the right column is the one to remember.** It looks like paperwork. **Section 3 shows it deciding the political future of 710 households**, and it is signed decades before anyone in those households learns what it does.

**The form itself, read as a type.** Fishers grew past 3,000 residents in the mid-1980s "following the Sunblest Farms development" (Encyclopedia of Indianapolis, n.d.-a). That is the pattern: a farm, a plat, a name that keeps the farm in it, and a street network of a very particular shape. **Three features of that shape are worth naming, because each one is a decision that somebody could have made differently.**

**1. The hierarchy of streets.** Arterial, collector, local, cul de sac. Traffic is funnelled from small streets into progressively bigger ones. **The consequence is that adjacent subdivisions often do not connect to each other**, so a trip between two houses a quarter mile apart can run a mile and a half out to the arterial and back. **That is not an accident of terrain. It is a street standard**, adopted by a local body, in a written ordinance you can read.

**2. Separation of uses.** Houses here, shops there, schools somewhere else, each on its own zoning classification. **This is the default in American zoning and it is a choice**, and it is the direct opposite of the corridor course 1 described, where a 1916 survey found 33 restaurants, 26 grocery stores, 14 cobblers, and the offices of lawyers and doctors inside eight blocks. **One place put everything within walking distance because its residents had no alternative. The other put nothing within walking distance because its residents had cars.** Both forms answer the same question, which is what a household needs and how it gets there.

**3. The lot, the setback and the frontage.** Minimum lot width, minimum front setback, minimum square footage. These numbers live in a zoning ordinance. **Change one number and you change what can be built, who can afford it, and how many households fit on an acre.** A minimum lot size is a price floor with a survey attached.

**Now the national context, because none of this was invented in Hamilton County.** Richard Rothstein's account of government produced segregation documents how federal underwriting practice, subdivision covenants and public policy shaped who could buy into new suburban development across the twentieth century (Rothstein, 2017). **Course 1 used the same book to explain why a neighbourhood measured as blighted.** It is the same book because it is the same system seen from the other end: **the policies that made one place uninsurable made another place financeable**, and both effects are documented in the same literature.

**What that does and does not license you to say.** It licenses you to say that American suburban development happened inside a national policy framework with documented racial effects. **It does not license you to assert anything about the covenants on any specific Hamilton County subdivision that you have not read.** Recorded covenants are public documents held by the county recorder. **If you want to make a claim about one, go read it.** That is a real research assignment and this course is not going to do it for you or pretend it has.

**One thing the suburban form gets right, said plainly.** The subdivision is a machine for producing a large number of individually owned, financeable, roughly equivalent houses very quickly. **That is a genuine achievement**, and it is why the form spread. The interesting question is never whether it works. It is **who it works for, at what density, and who pays for the pipes.** The pipes are lesson 7 and lesson 9.

## Sources
- Encyclopedia of Indianapolis. (n.d.-a). *Fishers*. https://indyencyclopedia.org/fishers/
- Encyclopedia of Indianapolis. (n.d.-c). *Hamilton County*. https://indyencyclopedia.org/hamilton-county/
- Hamilton County, Indiana. (n.d.). *Property records*. https://secure2.hamiltoncounty.in.gov/PropertyReports/
- Rothstein, R. (2017). *The color of law: A forgotten history of how our government segregated America*. Liveright.`,
      recallContent: [
        {
          prompt: "What is the basic unit of a suburb, and why is it not a building?",
          answer: "The recorded subdivision plat: a surveyed drawing that cuts one parcel into many and dedicates streets and easements. Until it is recorded the lots do not legally exist, so every house is downstream of a document.",
        },
        {
          prompt: "Name the item recorded alongside a plat that this course says decides a political future.",
          answer: "A waiver of the right to remonstrate against annexation. It looks like paperwork and it is signed decades before anyone learns what it does.",
        },
        {
          prompt: "Why can two houses a quarter mile apart require a mile and a half of driving?",
          answer: "Because of the street hierarchy: arterial, collector, local, cul de sac. Adjacent subdivisions often do not connect, which is a written street standard adopted by a local body, not a fact of terrain.",
        },
        {
          prompt: "Contrast the Indiana Avenue corridor's answer to 'what does a household need' with the subdivision's answer.",
          answer: "The Avenue put a complete economy inside eight blocks because its residents could be refused service elsewhere. The subdivision separates uses and puts almost nothing within walking distance because its residents have cars. Both forms answer the same question.",
        },
        {
          prompt: "What does Rothstein's work license you to say, and what does it not?",
          answer: "It licenses saying American suburban development happened inside a national policy framework with documented racial effects. It does not license asserting anything about the covenants on a specific Hamilton County subdivision you have not read. Those are public county records.",
        },
      ],
    },
    {
      slug: "ms-built-campus",
      title: "6 · The campus high school, and what its acreage assumes",
      section: "Section 2 · Built",
      body: `The most consequential building in a suburb is usually the high school, and its most consequential feature is not the building. **It is the land under it.**

**Start with the number that drives everything.** For most of the twentieth century American school planning ran on a site size formula built into state guidance and professional standards: **a minimum acreage plus an additional acre for every hundred students of ultimate enrollment.** Ten acres plus one per hundred is the version most often quoted for an elementary school, with substantially larger base figures for a high school. The formula is written into state facility guidance in many places; **the standards were not written with compact development in mind**, which is precisely the critique.

**Do the arithmetic on a real enrollment and the consequence appears immediately.** Fishers High School reported **3,664 students** in 2023-24. Under a formula of that shape, a school of that size needs a site measured in tens of acres before you add a stadium, practice fields, tennis courts and parking for a student body that mostly drives. **A site that large is not available in a built up area at a price a school board will pay.** So it gets bought at the edge, where land is cheap, which is where the next subdivision is going anyway.

**The US Environmental Protection Agency's smart growth programme states the downstream effect plainly**: "As new development often occurs around key destinations, such as schools, decisions about where schools will be located are likely to impact an area's future land use, transportation patterns, and infrastructure investments," and "School location can affect how far students, parents, teachers, and staff have to travel to and from school" (U.S. Environmental Protection Agency, n.d.).

**Read that as an instrument, in the sense course 1 defined.** A school siting standard is a rule, adopted by a body, that produces a predictable result: **large peripheral campuses reachable mainly by car.** Nobody in that chain voted for sprawl. **They voted for an acreage standard**, which is how most land use outcomes actually happen.

**Now the second consequence, and it is the one this course is named after.** A district that can afford large sites and large buildings tends to build **a small number of very large high schools** rather than a large number of small ones. Hamilton Southeastern Schools reported **21,299 students** across the district in 2023-24, in a structure of thirteen elementary schools, four intermediate schools, four junior high schools and **two high schools**.

**Two.** Which means that when the district finally outgrew one high school in 2006, the result was not a town versus town rivalry. It was **a rivalry between two halves of one community**, which had to be given a name, and the name available was the town's oldest nickname. **The Mudsock trophy is a direct product of a school siting economics that produced exactly two campuses**, and if the same enrollment had been housed in six schools of 3,500 the rivalry would not exist in this form.

**Compare the two building types in this cluster, side by side, because this is beat 2 doing its actual job.**

| | Indiana Avenue, course 1 | Fishers campus, this course |
|---|---|---|
| **Geometry it obeys** | A diagonal on Ralston's 1821 plat, which produced triangular lots and a flatiron building | The rectangular section line grid of the federal land survey, which produces square parcels and mile roads |
| **Relationship to the street** | Buildings meet the sidewalk; the entrance is on the street | Buildings sit back behind lawns and parking; the entrance faces a lot |
| **How you arrive** | On foot, from the surrounding blocks | By car or bus, from an arterial |
| **What one building holds** | A "city within a city": manufacturing, pharmacy, salon, school, restaurant, theatre | One use, at large scale, on a large site |
| **What the form assumes about the household** | That it cannot rely on being served elsewhere | That it owns at least one vehicle |

**Neither column is a verdict.** Both are descriptions of what a form takes for granted. **The reason to put them next to each other is that the same state, the same decades and in several cases the same public bodies produced both**, and a learner who can read one can read the other.

**One live detail, cited carefully.** The Mudsock basketball game has in recent years been played at the **Fishers Event Center**, a venue the city opened, rather than in either school's gymnasium (Hamilton Southeastern High School Athletics, 2024). **That is a beat 2 fact and a beat 3 fact at once.** A municipal arena hosting an intra district high school game tells you the city has capital projects of a scale a school gym cannot match, **and capital projects are financed by instruments Section 3 is about to teach you.**

## Sources
- American Planning Association. (n.d.). *School site selection* (PAS Report 175). https://www.planning.org/pas/reports/report175.htm
- Hamilton Southeastern High School Athletics. (2024). *Mudsock basketball at the Fishers Event Center*. https://hseathletics.com/Article/46745
- Hamilton Southeastern Schools. (n.d.). *Schools*. https://www.hseschools.org/schools
- U.S. Environmental Protection Agency. (n.d.). *Smart growth and school siting*. https://www.epa.gov/smartgrowth/smart-growth-and-school-siting`,
      recallContent: [
        {
          prompt: "What is the school site size formula that drove twentieth century American school siting?",
          answer: "A minimum acreage plus an additional acre for every hundred students of ultimate enrollment. Ten acres plus one per hundred is the commonly quoted elementary version, with larger base figures for high schools.",
        },
        {
          prompt: "Why does an acreage standard produce peripheral campuses?",
          answer: "A site that large is not available in a built up area at a price a school board will pay, so it is bought at the edge where land is cheap. Nobody voted for sprawl; they voted for an acreage standard.",
        },
        {
          prompt: "How does school siting economics explain the existence of the Mudsock rivalry?",
          answer: "A district that can afford large sites builds a small number of very large high schools. Hamilton Southeastern houses about 21,299 students in two high schools, so outgrowing one school in 2006 produced a rivalry between two halves of one community rather than between two towns.",
        },
        {
          prompt: "Give two of the ways the Indiana Avenue building type and the Fishers campus type differ in what they assume.",
          answer: "The Avenue obeys a 1821 diagonal and meets the sidewalk, and assumes a household that cannot rely on being served elsewhere. The campus obeys the rectangular section line grid, sits back behind lawns and parking, and assumes a household with a vehicle.",
        },
        {
          prompt: "Why is the Mudsock basketball game at the Fishers Event Center both a beat 2 and a beat 3 fact?",
          answer: "It shows the city has capital projects at a scale a school gymnasium cannot match, and capital projects are financed by the instruments Section 3 teaches.",
        },
      ],
    },
    {
      slug: "ms-built-reservoir",
      title: "7 · Geist: infrastructure for one city, built in another county",
      section: "Section 2 · Built",
      body: `Before the subdivisions, before the campuses, one piece of built infrastructure changed this ground permanently. **It was not built by anyone who lived here, and it was not built for anyone who lived here.**

**The facts, from the record.** The **Indianapolis Water Company** built it "because the White River could not continue to meet the growing city's water demands." **In 1941 the company built a dam across Fall Creek**, and the reservoir "began supplying Indianapolis with water in 1943." It covers **1,900 acres**, stores **6.9 billion gallons**, and lies across "northern Marion, southeastern Hamilton, and northwestern Hancock counties." The dam "covered 535 acres of woodland and 45 homesteads including the small village of Germantown" and "backed up water for 7.5 miles." It is named for **Clarence H. Geist**, president of the Indianapolis Water Company from 1913 to 1938 (Encyclopedia of Indianapolis, n.d.-d).

**Stop on the two numbers in the middle of that paragraph, because they are the ones nobody repeats.** **535 acres of woodland. 45 homesteads. One village, Germantown.** Removed by a private utility, to supply a city twenty miles away, in the years around 1941.

**Now put that next to course 1 without collapsing the two.** Both stories contain households removed so that a larger project could proceed. **They are not the same story and this course will not pretend they are.** The instruments differ, the scale differs, the record differs, and above all this course has not read who owned those 45 homesteads, what they were paid, or whether they had any legal recourse. **What is the same is the shape of the question**: who decided, under what authority, on whose land, for whose benefit, and where is that written down. **That question travels. That is the entire point of the six-beat template.**

**What the reservoir did next, which is a lesson in delay.** Nothing, for decades. Then:
- **1970.** Shorewood, the development arm, "was made an independent, private corporation."
- **1980.** Shorewood "finally began construction of its first two housing developments, Beamreach and Masthead."
- **Early 2000s.** "There were around 2,200 up-scale homes lining the reservoir's banks."
- **January 2, 2010.** Fishers annexed the area.
- **2011.** Citizens Energy Group acquired the water utility (Encyclopedia of Indianapolis, n.d.-d).

**Read that timeline as a built environment argument.** A public water supply project created, as a by product, **twelve miles of high value shoreline in a county with no city on it.** Forty years later that shoreline was some of the most valuable residential property in Indiana, and it was **unincorporated**, meaning it paid no municipal tax to any city and received county services. **Lesson 9 is about what happened when a city noticed.**

**One caution, stated because it is the kind of claim that gets manufactured.** This course does **not** assert that the Indianapolis Water Company built Geist Reservoir in order to create suburban lakefront property. There is no evidence of that here, the stated purpose was drinking water for a growing city, and the housing came four decades later under a separate corporate entity. **What the record supports is a consequence, not an intention.** Course 1 made exactly this distinction about blight designations, and it is the single most abused distinction in local history writing: **you can document what a decision produced without claiming to know why it was made.**

**And the transferable observation.** Large public infrastructure creates land value somewhere, and **the somewhere is rarely where the cost was borne.** A reservoir, a highway interchange, a transit stop, a university campus: each one raises the value of nearby land and lowers it elsewhere, and **almost none of that value flows back to whoever paid for the infrastructure.** That sentence is the whole of urban public finance in one line, and Section 3 turns it into instruments.

## Sources
- Encyclopedia of Indianapolis. (n.d.-a). *Fishers*. https://indyencyclopedia.org/fishers/
- Encyclopedia of Indianapolis. (n.d.-d). *Geist Reservoir*. https://indyencyclopedia.org/geist-reservoir/
- Citizens Energy Group. (n.d.). *About us*. https://www.citizensenergygroup.com/About
- Rothstein, R. (2017). *The color of law: A forgotten history of how our government segregated America*. Liveright.`,
      recallContent: [
        {
          prompt: "Who built Geist Reservoir, when, and why?",
          answer: "The Indianapolis Water Company. It dammed Fall Creek in 1941 and the reservoir began supplying Indianapolis with water in 1943, because the White River could not meet the growing city's demand.",
        },
        {
          prompt: "What was removed to make the reservoir?",
          answer: "535 acres of woodland and 45 homesteads, including the small village of Germantown. The water backed up 7.5 miles.",
        },
        {
          prompt: "How does this course compare Geist to Indiana Avenue, and what does it refuse to do?",
          answer: "It notes that both contain households removed so a larger project could proceed, and refuses to call them the same story. The instruments, scale and record differ, and this course has not read who owned the 45 homesteads or what they were paid. What travels is the shape of the question.",
        },
        {
          prompt: "Trace the reservoir's shoreline from 1943 to 2010.",
          answer: "Nothing for decades; Shorewood became an independent private corporation in 1970; first housing developments Beamreach and Masthead in 1980; around 2,200 upscale homes by the early 2000s; annexed by Fishers on January 2, 2010; Citizens Energy Group acquired the utility in 2011.",
        },
        {
          prompt: "What does this course refuse to claim about the reservoir's purpose, and why does the distinction matter?",
          answer: "It refuses to claim the reservoir was built to create lakefront property. The stated purpose was drinking water and the housing came four decades later under a separate entity. The record supports a consequence, not an intention, and confusing the two is the most abused move in local history writing.",
        },
      ],
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 3 · Powers  (beat 3: civics, planning, taxes, politics. THE LOAD-BEARING SECTION)
    //
    // Course 1 taught five instruments that TAKE ground: designation, eminent domain, alignment,
    // institutional land assembly, and jurisdictional consolidation. This section teaches the four
    // that MAKE a suburb: incorporation, annexation, school district formation, and the tax base.
    // Lesson 12 tests this course's own title against the record, the way ia-powers-test-the-spine
    // tested plan 39's proposed spine, and reports where it fails.
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "ms-powers-incorporation",
      title: "8 · Instrument one: incorporation, and choosing your own government",
      section: "Section 3 · Powers",
      body: `**This is the section the whole course exists for.** Everything before it establishes what is here. Everything after it asks what happens next. **Course 1 defined an instrument as a specific legal power, exercised by a specific body, under a specific statute, leaving a specific document.** That definition holds exactly. Only the powers change.

**Instrument one is incorporation: the act by which a piece of ground acquires its own municipal government.** Before incorporation, land in Indiana is governed by the county and the township. After it, there is a municipal corporation with a council, a budget, a tax levy, ordinances, a police department and a ballot of its own.

**Fishers incorporated as a town in 1891** (Encyclopedia of Indianapolis, n.d.-a). It stayed a town for 123 years, and by 2012 it was, in the words of a contemporaneous account, "the state's largest community with a 'town' form of government," with roughly 80,000 residents (Indianapolis Business Journal, 2012).

**Then the residents were asked to choose their own form of government, on a ballot, and the ballot is the lesson.**

**Two separate public questions appeared in November 2012**, and the Indianapolis Business Journal printed both:
1. **"Shall the Town of Fishers and Fall Creek Township reorganize as a single political subdivision?"**
2. **"Shall the Town of Fishers change into a city?"**

**Three possible outcomes, from two yes or no questions.** The Journal spelled out the logic, and it is worth reading twice:
- **No to both:** Fishers stays a town, with seven council members and a professional town manager.
- **Yes to the first:** Fishers reorganizes "as a city in combination with Fall Creek Township," with **nine at large council members who elect a mayor from among themselves and hire a city manager.** This held whether or not the second question passed.
- **No to the first and yes to the second:** Fishers becomes a **second class city**, with "six district councilors, three at large councilors and an elected mayor" (Indianapolis Business Journal, 2012).

**Two organised campaigns.** "Reorganize Fishers" backed the merger with Fall Creek Township, arguing it would "eliminate a layer of government and save the city $1 million per year," and held an Indiana Chamber of Commerce endorsement. "City Yes" backed the second class city, arguing that an "elected mayor and district councilors would provide independence along with checks and balances" (Indianapolis Business Journal, 2012).

**The results, from Hamilton County's own published election summary.**

| Question | Yes | No | Total |
|---|---|---|---|
| Fishers and Fall Creek reorganization | **14,097 (37.51 percent)** | **23,483 (62.49 percent)** | 37,580 |
| Fishers change into a city | **20,052 (55.36 percent)** | **16,169 (44.64 percent)** | 36,221 |

(Hamilton County, Indiana, 2012.)

**So: reorganization rejected, city approved.** **Fishers incorporated as a second class city on January 1, 2015** (Encyclopedia of Indianapolis, n.d.-a). For comparison, **Westfield incorporated as a city on January 1, 2008** (Encyclopedia of Indianapolis, n.d.-b).

**Four things worth taking out of that vote, in order of how transferable they are.**

**1. Ballot structure is a form of power.** A voter who wanted an elected mayor had to vote **no** on one question and **yes** on another. **A voter who voted yes to both got the opposite of an elected mayor.** Nobody wrote that ballot to deceive anyone; it is a faithful rendering of two separate statutory processes that happened to run at once. **But the design determined outcomes**, and noticing ballot design is a civic skill you should practise on every referendum you ever see, including the one lesson 16 puts in front of you.

**2. Turnout differed between the two questions on the same ballot.** 37,580 votes on the first, 36,221 on the second. **1,359 people who voted on one did not vote on the other.** That is a small, checkable, entirely ordinary fact, and it is the kind of fact you will only ever find in the official returns rather than in coverage of them. **Go to the returns.**

**3. Consolidation offered, consolidation refused.** The rejected question would have merged the town with its township into a single political subdivision. **The voters said no by nearly two to one.**

**4. And that is the comparison this whole cluster is built to let you make.** Course 1 taught that Unigov, the consolidation of Indianapolis and Marion County, "stands out as the only major post-war consolidation to be accomplished without a voter referendum," and that a referendum was discussed by the mayor's task force and overwhelmingly opposed (Wachter, 2014). **Same state. Forty three years apart. In 1969 a consolidation was enacted with no vote at all. In 2012 a much smaller consolidation was put to a vote and defeated 62 to 38.** Neither fact judges the other. **Put them side by side and you have learned something about how Indiana does local government structure that no single case could teach you.**

## Sources
- Encyclopedia of Indianapolis. (n.d.-a). *Fishers*. https://indyencyclopedia.org/fishers/
- Encyclopedia of Indianapolis. (n.d.-b). *Westfield*. https://indyencyclopedia.org/westfield/
- Hamilton County, Indiana. (2012). *2012 general election results summary*. https://secure2.hamiltoncounty.in.gov/Elections/2012G/results/ElectionSummary.htm
- Indianapolis Business Journal. (2012, October 27). *City or town? Confusing ballot to determine fate of Fishers*. https://www.ibj.com/articles/37291-city-or-town-confusing-ballot-to-determine-fate-of-fishers
- Wachter, J. (2014, May). *40 years after Unigov: Indianapolis and Marion County's experience with consolidated government*. The Abell Foundation. https://abell.org/wp-content/uploads/2022/02/ec-unigov514.pdf`,
      recallContent: [
        {
          prompt: "What does incorporation change about a piece of ground?",
          answer: "Before it, land is governed by the county and township. After it there is a municipal corporation with a council, a budget, a tax levy, ordinances, a police department and a ballot of its own.",
        },
        {
          prompt: "State the two 2012 Fishers ballot questions and the three possible outcomes.",
          answer: "Whether Fishers and Fall Creek Township should reorganize as a single political subdivision, and whether the Town of Fishers should change into a city. No to both meant staying a town; yes to the first meant a reorganized city with nine at large councillors, a mayor chosen from among them and a hired city manager; no to the first and yes to the second meant a second class city with six district councillors, three at large and an elected mayor.",
        },
        {
          prompt: "Give the official results of both questions.",
          answer: "Reorganization: 14,097 yes (37.51 percent) to 23,483 no (62.49 percent). City: 20,052 yes (55.36 percent) to 16,169 no (44.64 percent). Fishers incorporated as a second class city on January 1, 2015.",
        },
        {
          prompt: "What does the vote-count difference between the two questions tell you, and where can you only find it?",
          answer: "37,580 votes were cast on the first question and 36,221 on the second, so 1,359 people voted on one and not the other. You will only find that in the official returns, not in coverage of them.",
        },
        {
          prompt: "What is the comparison this lesson sets up with course 1?",
          answer: "Unigov was the only major postwar consolidation accomplished without a voter referendum, in 1969. In 2012 a much smaller consolidation of a town and its township was put to Indiana voters and defeated 62 to 38. Same state, forty three years apart.",
        },
      ],
    },
    {
      slug: "ms-powers-annexation",
      title: "9 · Instrument two: annexation, and the waiver almost nobody reads",
      section: "Section 3 · Powers",
      body: `Incorporation creates a municipal boundary. **Annexation moves it.** And in Indiana the story of how it moves is the story of a signature collected decades earlier.

**The statutory frame.** Indiana's annexation law does not use the words voluntary and involuntary, but practitioners do, and they map onto three sections of the code:

| Practitioner term | Code section | What it requires |
|---|---|---|
| **Voluntary** | IC 36-4-3-5 | Initiated by property owners, with consent of 51 percent of owners **or** owners of 75 percent of the assessed value in the territory |
| **Super voluntary** | IC 36-4-3-5.1 | Initiated by property owners with 100 percent consent |
| **Municipal, commonly called involuntary** | IC 36-4-3-3 | Initiated by a city or town council by ordinance. It "may or may not be contested by the property owners" |

(Indiana Association of Cities and Towns, 2015.)

**Read that source's interest before you read its facts.** That table comes from a memo written by the **Indiana Association of Cities and Towns**, the lobbying association for Indiana municipalities, prepared for legislators during a fight over annexation law. It is a "misconceptions and facts" document, which is to say **advocacy**. Its statutory citations are checkable and useful; its framing ("Involuntary is a misnomer") is an argument, and it should be attributed as one. **Reading a source's interest is not cynicism. It is the same move as noticing who paid for a consultant's report**, and course 1's beat 5 lesson had you do it to a city planning contract.

**Remonstrance is the defence, and the thresholds changed in 2015.** Under **Senate Enrolled Act 330 (2015)**, effective July 1, 2015, remonstrating landowners get a two tier test: **at 51 percent opposition they can obtain a court hearing, and at 65 percent the annexation process ends.** Previously 65 percent was needed merely to get into court. The act also required that signatures on a remonstrance petition be **dated after the ordinance is adopted**, and created an exception where "the municipality declares the annexation is for economic development," which took effect at the end of 2016 (The Indiana Lawyer, 2015).

**Now the part that matters more than all of the above, and that hardly anybody knows: the remonstrance waiver.**

**A remonstrance waiver is a recorded document in which a landowner gives up, in advance and permanently, the right to object to a future annexation.** It is signed at the moment a property connects to municipal utilities, most often sewer. **The city extends a pipe; the owner signs away a political right; the document is recorded against the parcel and runs with the land.** The buyer three owners later inherits it, usually without knowing.

**Lesson 5 told you a waiver gets recorded alongside a plat. Here is what that costs.**

**Case one: Geist, 2007 to 2010.** In January 2007 the Town of Fishers proposed annexing the unincorporated area around Geist Reservoir, roughly **2,200 homes**. Residents organised as the **Geist United Opposition**, collected **1,700 signatures** and litigated. A threshold question reached **Judge Steven Nation of the Hamilton Superior Court**: the Geist interveners had filed petitions to incorporate as East Geist and West Geist, and argued that their filings came first. Nation held that Fishers "took the 'first step' towards its annexation of the disputed area when its Town Council introduced and conducted a first reading" of the annexation ordinance, applying a "first instituted" rule traced to *Taylor v. City of Ft. Wayne*, 47 Ind. 274 (1874). Fishers' counsel described the holding as meaning "a simple meeting with an ordinance introduction" (The Indiana Lawyer, 2007). **On December 31, 2008 a judge ruled Fishers could annex the area; on January 20, 2009 the opponents announced they would not appeal**, ending a four year fight. **The annexation took effect January 2, 2010** and the area was first taxed in 2011 (Encyclopedia of Indianapolis, n.d.-d).

**Case two: the southeast annexation, 2024 to 2026, and this one is the teaching case.**

- **The territory.** **994 acres** in the southeast corner of Hamilton County, "east of Florida Road and South of 113th street," extending east to the Hancock and Madison county lines and southeast to East 101st Street and Flat Fork Creek Park, "comprised mostly of housing subdivisions" (The Reporter, 2024).
- **The numbers.** **960 parcels**, between **2,500 and 3,000** existing residents, and roughly **400 million dollars** of assessed value added to the city (Indianapolis Business Journal, 2024).
- **The waivers.** **710 of the 960 parcels, about 74 percent, had recorded remonstrance waivers**, described as documents that "prohibit landowners from challenging an annexation in exchange for city services, such as sewer connection" (Indianapolis Business Journal, 2024).
- **The cost to a household.** A property with 300,000 dollars of assessed value would pay about **341 dollars more a year**; one at 2.5 million dollars would pay about **1,752 dollars** (Indianapolis Business Journal, 2024).
- **What the household gets.** Stormwater management, road repair and snow removal, and Fishers police patrol in place of primarily Hamilton County Sheriff's Office coverage. The city says it already provides fire and sanitary service there. Residents also gain the right to vote in municipal elections and discounts at city parks (Indianapolis Business Journal, 2024; The Reporter, 2024).
- **The timeline.** Letters to residents June 2024; public information meetings July and August 2024; ordinance introduction and fiscal plan adoption September 2024; public hearing October 2024; council approval expected December 2024; remonstrance period December 2024 to May 2025; effective June 2025 (Indianapolis Business Journal, 2024). **The city announced completion of the annexation on June 5, 2025**, adding about 3,000 residents and making Fishers the fourth largest city in Indiana (Current Publishing, 2025). **The city planned the annexation to be effective January 1, 2026, with taxes first payable January 1, 2027** (The Reporter, 2024).

**Those last two bullets do not obviously agree, and you should not smooth them.** One source describes the ordinance taking effect in June 2025 and another describes the annexation being effective January 1, 2026 for tax purposes. **Both can be true of the same annexation**, because an ordinance's effective date, the date services transfer, and the assessment date that governs the first tax bill are three different dates in Indiana practice. **This course has not read the ordinance, so it reports both published dates with their owners and does not reconcile them.** The document that settles it is the adopted annexation ordinance itself, which is public.

**Do the arithmetic on the waivers, because it is the whole lesson.** SEA 330 says 65 percent opposition ends an annexation. **74 percent of the parcels had already, permanently and in writing, given up the right to be counted in that percentage.** Nobody in 2024 did anything improper. **The outcome was decided at the moment the sewer went in.**

**Two voices from the record, kept because they disagree.** Mayor **Scott Fadness** called it "a large annexation by a lot of measures" and a "significant addition to the community." Resident **Diana Callahan** said, "We already get a lot of the services Fishers offers…so I don't really expect much to change." **Tonya Davis, president of the Fortville Town Council in neighbouring Hancock County, said of her own town's interest in the area: "We got shut down pretty fast…we're not going to get the chance to do that"** (Indianapolis Business Journal, 2024). **A city annexing is also a city pre-empting**, and the second effect is invisible unless somebody from the next town says so out loud.

**Three things about annexation that a learner usually has wrong.**

**1. It is not a taking.** Nobody loses their home, and no compensation is owed, because nothing is transferred. **What changes is which government taxes you, which police answer your call, and which ballot you get.** The municipal association makes this point in its own interest and it is nonetheless correct: "Annexation is not a taking (like eminent domain)" (Indiana Association of Cities and Towns, 2015).

**2. The tax increase is real and it is the point.** A household gains services and pays a municipal levy it did not pay before. **Both halves are true and the argument is about the exchange rate**, which is exactly what a fiscal plan is required to spell out.

**3. Contiguity drives geometry.** Annexed territory must touch the existing municipal boundary, which is why annexation maps are often strange shapes, and why a city that wants a distant parcel must take everything in between. **A weird boundary on a map is usually a legal requirement rather than a whim.**

## Sources
- Current Publishing. (2025, June 5). *Southeast annexation completed, making Fishers 4th largest Hoosier city*. https://youarecurrent.com/2025/06/05/southeast-annexation-completed-making-fishers-4th-largest-hoosier-city/
- Encyclopedia of Indianapolis. (n.d.-d). *Geist Reservoir*. https://indyencyclopedia.org/geist-reservoir/
- Indiana Association of Cities and Towns. (2015, January 6). *Annexation overview and memo on annexation in other states*. https://aimindiana.org/wp-content/uploads/2016/12/annexation-facts-january-2015.pdf
- Indianapolis Business Journal. (2024, August 2). *Fishers looks to annex 994 acres, add up to 3,000 residents*. https://www.ibj.com/articles/fishers-looks-to-annex-994-acres-add-up-to-3000-residents
- The Indiana Lawyer. (2007). *Judge rules Fishers can annex Geist*. https://www.theindianalawyer.com/articles/22875-judge-rules-fishers-can-annex-geist
- The Indiana Lawyer. (2015). *Annexation law gives landowners more clout*. https://www.theindianalawyer.com/articles/37452-annexation-law-gives-landowners-more-clout
- The Reporter. (2024). *Fishers wants to annex 994 acres of Hamilton County*. https://readthereporter.com/fishers-wants-to-annex-994-acres-of-hamilton-county/`,
      recallContent: [
        {
          prompt: "Name Indiana's three annexation routes and their code sections.",
          answer: "Voluntary, IC 36-4-3-5, needing 51 percent of owners or 75 percent of assessed value; super voluntary, IC 36-4-3-5.1, needing 100 percent; and municipal or so-called involuntary annexation, IC 36-4-3-3, initiated by a council ordinance.",
        },
        {
          prompt: "What did Senate Enrolled Act 330 of 2015 change about remonstrance?",
          answer: "It created a two tier test: 51 percent opposition gets a court hearing and 65 percent ends the annexation. Before that, 65 percent was needed merely to get into court. It also required signatures to be dated after the ordinance is adopted and created an economic development exception.",
        },
        {
          prompt: "What is a remonstrance waiver, and when is it signed?",
          answer: "A recorded document giving up, in advance and permanently, the right to object to a future annexation. It is signed when a property connects to municipal utilities, usually sewer, and it runs with the land, so later buyers inherit it.",
        },
        {
          prompt: "Give the key numbers of the Fishers southeast annexation.",
          answer: "994 acres, 960 parcels, 2,500 to 3,000 residents, about 400 million dollars of assessed value, and 710 parcels (about 74 percent) carrying recorded remonstrance waivers. Completion was announced June 5, 2025, with taxes first payable January 1, 2027.",
        },
        {
          prompt: "Why does the waiver figure settle the annexation, and when was it actually decided?",
          answer: "Because 65 percent opposition ends an annexation under SEA 330, and 74 percent of the parcels had already permanently given up the right to be counted in that percentage. It was decided at the moment the sewer went in.",
        },
        {
          prompt: "Why is annexation not a taking, and what is the argument actually about?",
          answer: "Nothing is transferred and nobody loses a home, so no compensation is owed. What changes is which government taxes you, which police respond and which ballot you get. The argument is about the exchange rate between the new levy and the new services.",
        },
      ],
    },
    {
      slug: "ms-powers-district-lines",
      title: "10 · Instrument three: the school district line, the one that does not move",
      section: "Section 3 · Powers",
      body: `City limits move. **School district lines mostly do not**, and that single asymmetry explains more about American metropolitan life than any other fact in this course.

**Where Indiana's district lines came from.** The **Indiana School Reorganization Act of 1959** "called for each county to develop and implement a reorganization plan," with a nine member reorganization committee per county and a standard that each consolidated district enroll **at least 1,000 students**. The state commission was led by **J. B. "Heavy" Kohlmeyer**, a Purdue agricultural economics professor, who "used his considerable political skills to prod the local panels to act." Over roughly eleven years the number of Indiana school districts fell **from 966 to 402**, and districts with fewer than 1,000 students fell **from 801 to 156** (Hinnefeld, 2017).

**That is the instrument.** A state statute, a county committee, an enrollment threshold, and a map. **Everything about who goes to school with whom in Indiana today runs through a decision made by a county committee in the early 1960s**, and most of those maps have never been redrawn.

**What happened in Marion County, because it is the direct comparison and it is astonishing.** The Marion County reorganization committee "after considering several ideas, voted unanimously to propose a single, 130,000-student district on the grounds it would produce equitable education and a fair tax burden." Suburban residents objected: "Over 10,000 people signed petitions objecting to the idea," and "a standing-room-only crowd of 2,000 people attended an initial public hearing on May 18, 1961, at the Indianapolis World War Memorial Auditorium, and another 1,000 showed for a follow-up hearing six days later." The single district plan died. In its place, attorney Lewis Bose produced a compromise in which "two tiny school districts, Woodruff Place and Center Township (outside of Indianapolis), would merge with the city district to create what is now Indianapolis Public Schools." And the demographic context, stated by the same author: "Indianapolis city schools were about 25 percent nonwhite in 1960, and the other Marion County schools were virtually all white" (Hinnefeld, 2016).

**Read that next to course 1 and the two halves lock together.** Course 1 documented that when Unigov consolidated Indianapolis and Marion County effective January 1, 1970, **the school districts were left out**, that Mayor Lugar said the bill would die if schools were included and acknowledged that "a good number of people really wanted to keep at least their particular school segregated," and that school board president **Landrum Shields** said including schools "would have raised the spectre of racial integration...and would have meant instant death for the plan" (Chalkbeat Indiana, 2016; Wachter, 2014). Township school districts were then about **2.6 percent Black** while Indianapolis Public Schools enrolled **more than one third Black students** (Chalkbeat Indiana, 2016).

**So the boundary was set twice.** **1961: a proposed countywide school district is defeated by petition and public hearing. 1969: a citywide government consolidation deliberately excludes the schools.** Two separate processes, eight years apart, producing the same line. **A boundary that survives two independent attempts to move it is not an accident.**

**Now the Hamilton County half, and the clause that makes this course possible.**

**Unigov barred annexation into neighbouring counties**, a restriction that was needed to get the votes (Wachter, 2014). **Read that slowly.** The 1969 statute that let Indianapolis expand to fill Marion County simultaneously **made it legally impossible for Indianapolis to expand beyond it.** Hamilton County was placed permanently out of reach of the city's boundary in the same act that dissolved the boundary inside Marion County.

**Which means the two ends of the arrow are these, and they are both about lines rather than buildings:**
- **Inside Marion County**, city limits were erased and school district lines were kept, so the school district became the boundary that mattered.
- **At the county line**, the city's power to annex was switched off entirely, so **the only municipalities that could grow into this ground were the ones already in it.** Fishers, Carmel, Westfield and Noblesville could annex. Indianapolis could not.

**And Hamilton Southeastern Schools sits on the other side of that line.** The district serves Fishers and portions of neighbouring Noblesville, on township based territory in the southeastern part of the county. Its consolidation, reported as taking place in the 1960s under exactly the reorganization process described above, has the same property every Indiana district has: **it is drawn on township geometry, not on municipal geometry, and it did not move when the city moved.**

**Here is the concrete consequence, and it is the thing to carry out of this lesson.** The City of Fishers annexed the Geist area in 2010 and 994 acres in the southeast in 2025. **Neither annexation changed a single student's school district.** Municipal boundaries and school boundaries are **two different maps of the same ground, changed by two different bodies, under two different statutes, on two different schedules.** A household can wake up in a new city and the same school district. **That is the ordinary condition of American suburban life and almost nobody can describe it.**

**The four boundaries exercise, which is the practical version of everything above.** Stand anywhere in Fishers and there are at least four different jurisdictional lines crossing the ground under you:
1. **The municipal boundary.** Changed by city council ordinance under IC 36-4-3. Moved in 2010 and 2025.
2. **The township boundary.** Effectively fixed since the nineteenth century. Still a unit of government with an elected trustee, responsible under Indiana law for township assistance and for fire protection where a municipality does not provide it.
3. **The school corporation boundary.** Drawn under the 1959 Act. Governed by an elected school board. Sets which schools your children attend and which referendum appears on your ballot.
4. **The taxing district.** The overlay of every unit that levies on your parcel. **This is the one that determines your bill**, and it is the one lesson 11 is about.

**None of those four is the Mudsock line.**

## Sources
- Chalkbeat Indiana. (2016, August 3). *How racial bias helped turn Indianapolis into one city with 11 school districts*. https://www.chalkbeat.org/indiana/2016/8/3/21098810/how-racial-bias-helped-turn-indianapolis-into-one-city-with-11-school-districts/
- Hinnefeld, S. (2016, July 13). *1961 decisions shaped Indy school districts*. School Matters. https://inschoolmatters.wordpress.com/2016/07/13/1961-decisions-shaped-indy-school-districts/
- Hinnefeld, S. (2017, September 12). *1960s consolidations transformed Indiana schools*. School Matters. https://inschoolmatters.wordpress.com/2017/09/12/1960s-consolidations-transformed-indiana-schools/
- Indiana State Board of Accounts. (2021). *Township manual, chapter 8: Fire protection and emergency services*. https://www.in.gov/sboa/files/TWPCH-08-2021.pdf
- Wachter, J. (2014, May). *40 years after Unigov: Indianapolis and Marion County's experience with consolidated government*. The Abell Foundation. https://abell.org/wp-content/uploads/2022/02/ec-unigov514.pdf`,
      recallContent: [
        {
          prompt: "What did the Indiana School Reorganization Act of 1959 require, and what did it accomplish?",
          answer: "A reorganization plan in each county, developed by a nine member committee, with each consolidated district enrolling at least 1,000 students. Over about eleven years Indiana's districts fell from 966 to 402, and districts under 1,000 students fell from 801 to 156.",
        },
        {
          prompt: "What happened to the proposed single Marion County school district in 1961?",
          answer: "The county committee voted unanimously to propose one 130,000-student district. Over 10,000 people signed petitions against it, 2,000 attended a hearing on May 18, 1961 and 1,000 attended a follow-up six days later. The plan died and a compromise created what is now Indianapolis Public Schools.",
        },
        {
          prompt: "How was the school boundary set twice, and why does that matter?",
          answer: "In 1961 a proposed countywide district was defeated by petition and hearing, and in 1969 Unigov deliberately excluded schools. Two independent processes eight years apart produced the same line, so it is not an accident.",
        },
        {
          prompt: "What did Unigov do about annexation into neighbouring counties, and why is that the hinge of this course?",
          answer: "It barred annexation into neighbouring counties, a restriction needed to get the votes. The same statute that erased city limits inside Marion County made Hamilton County permanently unreachable by Indianapolis, so only municipalities already in the county could grow into this ground.",
        },
        {
          prompt: "Did the 2010 Geist annexation or the 2025 southeast annexation change anyone's school district?",
          answer: "No. Municipal and school boundaries are two different maps of the same ground, changed by two different bodies under two different statutes on two different schedules.",
        },
        {
          prompt: "Name the four jurisdictional lines crossing this ground, and which one determines your tax bill.",
          answer: "The municipal boundary, the township boundary, the school corporation boundary and the taxing district. The taxing district, the overlay of every unit that levies on your parcel, determines the bill. None of the four is the Mudsock line.",
        },
      ],
    },
    {
      slug: "ms-powers-tax-base",
      title: "11 · Instrument four: the tax base, the caps, and who actually pays",
      section: "Section 3 · Powers",
      body: `**The civic question of this course is who pays for what.** Here is the machinery that answers it, and it is more interesting than either the "rich suburb" story or the "starved city" story.

**Three terms you need before anything else makes sense.**
- **Assessed value.** What the assessor says a property is worth. Indiana assesses at market value in use, adjusted annually.
- **The levy.** The total number of dollars a unit of government intends to collect.
- **The rate.** The levy divided by the total assessed value in the district. **The rate is an output, not an input.** A unit sets a levy; the rate falls out of the arithmetic. This is the single most misunderstood thing in property taxation.

**So when assessed value grows, as it does spectacularly in a growing suburb, the same levy produces a lower rate.** And when a taxing unit wants more money, it must raise the levy, which is constrained by state law.

**Then Indiana added a constitutional ceiling, and it changed everything.**

**The property tax caps, from the state agency that administers them.** "Beginning with 2010 tax bills, property owners have been entitled to a property tax cap or circuit breaker credit on the amount of property taxes over: 1% of Homestead Property; 2% of Residential Property; 2% of Long-Term Care Property; 2% of Agricultural Land; 3% of Nonresidential Property; and 3% of Personal Property" (Indiana Department of Local Government Finance, 2024).

**How they became permanent.** "During the 2008 Legislative Session…legislators took the first step in making the circuit breaker caps permanent by passing Senate Joint Resolution (SJR) 1, which sought to add the property tax caps to Article 10, Section 1 of the Indiana Constitution. To change the state constitution, a separately elected General Assembly had to pass the resolution again. During the 2010 Legislative Session, the Senate Joint Resolution (SJR) 1 was passed for the second time. In November 2010, Hoosiers voted to make the caps part of the Indiana Constitution" (Indiana Department of Local Government Finance, 2024).

**How a cap works in practice.** "If the total tax liability for the property exceeds the property tax cap, the county auditor will provide a tax credit (circuit breaker credit) for the amount that exceeds the cap." The agency's own worked example: a homestead assessed at 100,000 dollars is capped at 1,000 dollars; if the calculated liability is 2,100 dollars, the auditor applies an 1,100 dollar credit (Indiana Department of Local Government Finance, 2024).

**Now the sentence that explains every school referendum in Indiana.** "In most counties, the only exemptions from the property tax caps are for expenses related to capital projects or additional school operating or public safety funds **that are approved by voters in a public referendum**" (Indiana Department of Local Government Finance, 2024).

**Read what that does.** A constitutional cap limits what a school corporation can collect from a property no matter what its board decides. **The one route around the cap is a vote.** So a referendum in Indiana is not a school district asking politely. **It is the only legal door in a constitutional wall**, and that is why districts keep walking through it.

**Now watch it happen to one district, on the record.**

**Hamilton Southeastern Schools' own finance page states that the district "ranks in the bottom 2% of all Indiana school districts in state tuition support per student"** (Hamilton Southeastern Schools, n.d.-b). **That is the fact that breaks the intuition.** A district in Indiana's highest income county receives among the least state money per student in the state, because state formulas direct additional funding toward student need. **Whether that is the right policy is a judgment. That it is the policy is a fact**, and it means the district's operating money must come disproportionately from a local levy that a constitutional cap limits.

**The consequences, in dollars, from the district's own published figures:**
- The **2025 property tax caps** produced "a $4.6 million reduction for Hamilton Southeastern Schools."
- The new **Supplemental Homestead Credit** beginning in 2026 is "estimated to have an impact of $4.5 million on HSE."
- The maximum **Operations Fund levy for 2026** is **42,582,439 dollars**.
- Of the referendum dollars in the 2026 budget, **97 percent support teacher salaries and benefits**, with the remainder for safety and security (Hamilton Southeastern Schools, n.d.-b).

**The referendum record, from the state's own list and the county's own returns.**

| Date | What was asked | Result |
|---|---|---|
| **November 2009** | A 5,500,000 dollar referendum | Passed (Indiana Department of Local Government Finance, n.d.) |
| **May 3, 2016** | "For the seven (7) calendar years immediately following the holding of the referendum, shall the Hamilton Southeastern School impose a property tax rate that does not exceed twenty-two and three quarters cents ($0.2275)…" | **Yes 23,380 (71.5 percent), No 9,356 (28.5 percent)** (Hamilton County, Indiana, 2016) |
| **November 2023** | A replacement operating referendum at a maximum rate of **0.1995 dollars** per 100 dollars of assessed value for eight years, **lower** than the 2016 rate | Passed with about 70 percent support (WFYI, 2023; Hamilton Southeastern Schools, n.d.-b) |

**Notice the 2023 rate.** It went **down**, from 0.2275 to 0.1995. **A district asked its voters for a lower rate and got 70 percent yes.** Because assessed value had grown so much, a lower rate on a larger base still funded the schools. **That is the growing tax base doing exactly what a growing tax base does**, and it is the least dramatic and most important fact in this lesson.

**And the comparison the whole cluster is built for, from one source at one vintage.** Using the American Community Survey 2024 one year estimates as published by Census Reporter: **Hamilton County has a population of 379,704 and a median household income of 125,509 dollars, plus or minus 5,196. Marion County has a population of 981,628 and a median household income of 67,066 dollars, plus or minus 2,108** (Census Reporter, n.d.-a, n.d.-b).

**Here is what that pair does and does not prove.**
- **It proves a present difference in household income between two adjacent counties.** That is all it is, and it is measured, with margins of error printed, which is why both figures are given with them.
- **It does not prove a transfer.** This course has **not** read a study tracing assessed value or households from Marion County to Hamilton County. Saying "the tax base moved north" would be a claim about a flow, and a flow requires a longitudinal measurement nobody here has made. **Plan 39 proposed exactly that claim, and this course reports that it could not verify it.**
- **What the record does support** is a mechanism: two counties, two sets of school districts drawn in the early 1960s, a 1969 statute that made the city's boundary unable to cross the county line, and constitutional caps that push both counties' districts toward referenda. **A mechanism is not a flow, and confusing the two is how a good course turns into a bad argument.**

**One last thing about fairness, and it is a factual point rather than a courtesy.** A district in the wealthiest county in Indiana still has to go to its voters for operating money. **Anyone who thinks a rich suburb has easy money has not read a state funding formula or a constitutional cap.** The instruments constrain everyone, differently. **Learn the instruments and you stop needing the villains.**

## Sources
- Census Reporter. (n.d.-a). *Hamilton County, IN*. https://censusreporter.org/profiles/05000US18057-hamilton-county-in/
- Census Reporter. (n.d.-b). *Marion County, IN*. https://censusreporter.org/profiles/05000US18097-marion-county-in/
- Hamilton County, Indiana. (2016). *May 3, 2016 primary election results: Hamilton Southeastern public question*. https://secure2.hamiltoncounty.in.gov/Elections/2016P/results/
- Hamilton Southeastern Schools. (n.d.-b). *Revenue sources*. https://www.hseschools.org/community/finances/revenue-sources
- Indiana Department of Local Government Finance. (2024, April). *Property tax caps / circuit breaker credits fact sheet*. https://www.in.gov/dlgf/files/240429-Fact-Sheet-Circuit-Breaker-Caps.pdf
- Indiana Department of Local Government Finance. (n.d.). *Historic school tax levy referenda*. https://www.in.gov/dlgf/referendum-information/historic-school-tax-levy-referenda/
- WFYI. (2023, November 8). *These Indiana schools won and lost referendums in the 2023 general election*. https://www.wfyi.org/news/articles/indiana-school-referendums-2023-eneral-election-results`,
      recallContent: [
        {
          prompt: "Why is a property tax rate an output rather than an input?",
          answer: "A unit of government sets a levy, the total dollars it intends to collect. The rate is that levy divided by the total assessed value in the district, so the rate falls out of the arithmetic. Growing assessed value means the same levy produces a lower rate.",
        },
        {
          prompt: "State Indiana's property tax caps and how they became constitutional.",
          answer: "One percent of homestead property, two percent of residential, long-term care and agricultural land, and three percent of nonresidential and personal property, beginning with 2010 bills. SJR 1 passed in 2008 and again in 2010, and Hoosiers voted in November 2010 to put the caps in Article 10, Section 1 of the state constitution.",
        },
        {
          prompt: "What is the only exemption from the caps in most counties, and why does that explain school referenda?",
          answer: "Expenses for capital projects, or additional school operating or public safety funds, approved by voters in a public referendum. A referendum is the only legal door in a constitutional wall, which is why districts keep walking through it.",
        },
        {
          prompt: "What does Hamilton Southeastern Schools say about its state funding, and why is that counterintuitive?",
          answer: "The district's own finance page says it ranks in the bottom 2 percent of all Indiana school districts in state tuition support per student. A district in the state's highest income county gets among the least state money per student, because state formulas direct funding toward student need.",
        },
        {
          prompt: "What happened to the referendum rate in 2023, and why?",
          answer: "It fell from 0.2275 to 0.1995 dollars per 100 dollars of assessed value, and still passed with about 70 percent. Assessed value had grown enough that a lower rate on a larger base still funded the schools.",
        },
        {
          prompt: "What does the Hamilton and Marion County income comparison prove, and what does it not?",
          answer: "It proves a present difference in median household income between two adjacent counties, measured with margins of error. It does not prove a transfer of tax base. No longitudinal study tracing assessed value or households from one county to the other has been read into this course, so the proposed 'where the tax base went' claim is reported as unverified.",
        },
      ],
    },
    {
      slug: "ms-powers-test-the-claim",
      title: "12 · Testing this course's own title against the record",
      section: "Section 3 · Powers",
      body: `This course is called *Mudsock: How a Rivalry Marks a Boundary*. **A title is an argument, and an argument gets tested.** Course 1 took the proposed spine of this whole cluster, lined the dates up, and reported that half of it failed. **This lesson does the same thing to its own title**, because a course that tests other people's claims and not its own is doing something other than research.

**The claim, as proposed.** Plan 39 for this cluster put it this way: "Mudsock and Hamilton County are the other end of the same arrow: suburban growth, school district boundaries, and where the tax base went." **Three sub claims. Test them separately.**

## Test 1 · Does the Mudsock rivalry mark a jurisdictional boundary? **No.**

Fishers High School and Hamilton Southeastern High School are:
- both public schools
- in the same school corporation, Hamilton Southeastern Schools
- in the same city, Fishers
- in the same county, Hamilton
- under the same elected school board, paying the same tax rates, voting on the same referendum, and appearing on the same ballot

**The line between them is an attendance boundary**, drawn by one school board and revisable by that same board at any regular meeting. **Nothing any government does differently on one side of it than the other.** As a claim about jurisdiction, **this fails completely**, and the failure is the most interesting result in the course.

## Test 2 · Does the corrected Unigov spine explain the county's separateness? **Yes, and strongly.**

Course 1 established two clauses of the 1969 act. First, **school districts were excluded**, stated at the time by the mayor and by the school board president as the price of passage. Second, the act **barred annexation into neighbouring counties** (Wachter, 2014). **The second clause is a fact about Hamilton County written into an Indianapolis statute.** From January 1, 1970, the city that had just erased every municipal boundary inside its own county was legally unable to cross the line into this one. **Whatever else Unigov did, it fixed this county's political independence in statute.** That half needs no softening.

## Test 3 · Chronology. Did Unigov cause the suburban growth? **No.**

**The same cheap test course 1 used, and the same result.**

| Date | Event |
|---|---|
| 1941 to 1943 | Geist Reservoir built and supplying Indianapolis |
| 1950 to 1960 | Hamilton County grows 40.9 percent, to 40,132 |
| 1950s | The Encyclopedia dates the start of the suburban boom, with SR 37, I-69 and I-465 |
| 1959 | Indiana School Reorganization Act |
| 1960 to 1970 | Hamilton County grows 35.9 percent, to 54,532 |
| 1961 | The proposed countywide Marion County school district is defeated |
| c. 1964 | Hamilton Southeastern's consolidated high school is founded, as reported |
| 1969 | Unigov passes |
| **January 1, 1970** | **Unigov takes effect** |
| 1970 to 1980 | Hamilton County grows 50.4 percent, to 82,027 |
| 1980 | First Geist shoreline housing developments |
| 2010, 2025 | Fishers annexes Geist, then 994 acres in the southeast |

**Two full decades of rapid growth precede Unigov.** So Unigov did not start this. **What it did was arrive in the middle of a growth curve and freeze the boundary conditions around it**, exactly the way course 1 found that Unigov did not clear Indiana Avenue but did change who governed the ground afterwards. **The same weaker claim survives at both ends of the cluster, and it is the same claim: a boundary decision does not cause a physical outcome, it locks in the conditions under which every later outcome is decided.**

## Test 4 · "Where the tax base went." **Not established.**

This course can show you two counties' present income and value figures from one survey at one vintage. **It cannot show you a flow.** A claim that a tax base moved requires tracing assessed value or households over time between two places, and **no such study has been read into this course.** Lesson 11 says so in the text. **Reporting that is the finding, not a gap in the finding.**

## The claim that survives, and it is better than the one proposed

**The Mudsock rivalry does mark a boundary. It is just not a boundary between two governments.** It marks **the line between what a community can see and what actually governs it.**

Four jurisdictional boundaries cross this ground: the municipal limit, the township, the school corporation, and the taxing district. **They are four different shapes, changed by four different bodies, under four different statutes, on four different schedules.** Eight thousand people can fill a stadium on the one line that has no legal effect at all, while the annexation that moved one of the real lines was settled years earlier by 710 signatures on utility paperwork that nobody at the game has read.

**That is not a criticism of anybody at that game.** It is a description of how boundaries actually work in the United States: **the ones you can feel are social, and the ones that decide your taxes, your school, your police and your ballot are recorded.**

## Four method lessons, which outlast every fact in this course

1. **Test your own title.** If the argument in your headline cannot survive a chronology and a jurisdiction check, **you found that out cheaply and you should say so.**
2. **A weakened claim that survives beats a strong claim that does not.** "The rivalry marks a jurisdictional line" is false. "The rivalry marks the gap between visible and governing boundaries" is checkable, and it is the one this course makes.
3. **Separate a mechanism from a flow.** You can document how a system routes money without claiming to have measured where money went.
4. **Report the weakening.** Course 1 wrote this rule and this course is the test of whether it holds when the claim being weakened is the author's own. **It does.**

## What is still open, and would settle it

- **The Hamilton County school reorganization committee's plan and minutes from the early 1960s.** They would fix the district's formation date and show who drew the boundary and on what argument.
- **The recorded remonstrance waivers on those 710 parcels.** Public, in the county recorder's office, and they would show when each was signed and for what utility.
- **The Fishers southeast annexation fiscal plan**, adopted September 5, 2024 and published by the city, which by statute contains parcel level property tax and circuit breaker projections.
- **A longitudinal study of assessed value across the Marion and Hamilton county line.** If one exists, it settles test 4. **This course did not find one.**

**None of those has been read into this course.** They are public or requestable, and they are the next real work on this question.

## Sources
- Encyclopedia of Indianapolis. (n.d.-a). *Fishers*. https://indyencyclopedia.org/fishers/
- Encyclopedia of Indianapolis. (n.d.-c). *Hamilton County*. https://indyencyclopedia.org/hamilton-county/
- Encyclopedia of Indianapolis. (n.d.-d). *Geist Reservoir*. https://indyencyclopedia.org/geist-reservoir/
- Hinnefeld, S. (2016, July 13). *1961 decisions shaped Indy school districts*. School Matters. https://inschoolmatters.wordpress.com/2016/07/13/1961-decisions-shaped-indy-school-districts/
- STATS Indiana. (n.d.). *Hamilton County, Indiana profile*. Indiana Business Research Center, Kelley School of Business, Indiana University. https://www.stats.indiana.edu/profiles/profiles.asp?scope_choice=a&county_changer=18057
- Wachter, J. (2014, May). *40 years after Unigov: Indianapolis and Marion County's experience with consolidated government*. The Abell Foundation. https://abell.org/wp-content/uploads/2022/02/ec-unigov514.pdf`,
      recallContent: [
        {
          prompt: "Does the Mudsock line mark a jurisdictional boundary? Give the reasoning.",
          answer: "No. Both schools are public, in the same school corporation, city and county, under the same board, tax rates, referendum and ballot. It is an attendance boundary drawn by one board and revisable by that board at any meeting.",
        },
        {
          prompt: "Which half of the proposed Unigov spine holds for Hamilton County, and why?",
          answer: "The governance half. Unigov excluded school districts and barred annexation into neighbouring counties, so from January 1, 1970 Indianapolis was legally unable to cross into Hamilton County. That fixed this county's political independence in statute.",
        },
        {
          prompt: "What does the chronology test show about Unigov and suburban growth?",
          answer: "That Unigov did not cause it. The county grew 40.9 percent in the 1950s and 35.9 percent in the 1960s, and Unigov took effect January 1, 1970. It arrived mid curve and froze the boundary conditions around growth already under way.",
        },
        {
          prompt: "Why does this course refuse the claim that the tax base moved north?",
          answer: "Because a flow requires a longitudinal measurement tracing assessed value or households between two places over time, and no such study has been read into this course. It can show a present difference and a mechanism, which is not the same thing.",
        },
        {
          prompt: "State the claim that survives the test.",
          answer: "The rivalry does mark a boundary: the line between what a community can see and what actually governs it. Four jurisdictional boundaries cross this ground in four different shapes, and the one 8,000 people can feel at a stadium has no legal effect.",
        },
        {
          prompt: "Name the four records that would settle the open questions.",
          answer: "The Hamilton County school reorganization committee's plan and minutes, the recorded remonstrance waivers on the 710 parcels, the September 5, 2024 southeast annexation fiscal plan, and any longitudinal study of assessed value across the county line. None has been read here.",
        },
      ],
    },
    {
      slug: "ms-quiz-powers",
      title: "13 · Quiz: who decided, and under which statute",
      section: "Section 3 · Powers",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What changes when a piece of ground incorporates as a municipality?",
            options: [
              "Its school district boundary is redrawn",
              "It gains a council, a budget, a tax levy, ordinances, a police department and a ballot of its own",
              "Its property is reassessed at market value",
              "Its township government is dissolved",
            ],
            correctIndex: 1,
            explanation: "Before incorporation, land in Indiana is governed by the county and township. Incorporation adds a layer; it does not remove the school district or the township.",
            sourceLessonSlug: "ms-powers-incorporation",
          },
          {
            prompt: "In the November 2012 Fishers ballot, how did a voter who wanted an elected mayor have to vote?",
            options: [
              "Yes to both questions",
              "Yes to the first and no to the second",
              "No to both questions",
              "No to the first question and yes to the second",
            ],
            correctIndex: 3,
            explanation: "A yes on the first question produced a reorganized city with a mayor chosen from among nine at large councillors and a hired city manager, regardless of the second answer. Ballot structure is a form of power.",
            sourceLessonSlug: "ms-powers-incorporation",
          },
          {
            prompt: "Give the official Hamilton County result of the Fishers and Fall Creek Township reorganization question.",
            options: [
              "Rejected, 14,097 yes (37.51 percent) to 23,483 no (62.49 percent)",
              "Approved, 20,052 yes to 16,169 no",
              "Rejected by a single vote",
              "Withdrawn before the election",
            ],
            correctIndex: 0,
            explanation: "The second question, whether the town should change into a city, passed 20,052 to 16,169, and Fishers incorporated as a second class city on January 1, 2015.",
            sourceLessonSlug: "ms-powers-incorporation",
          },
          {
            prompt: "What is the Indiana consolidation comparison this course draws?",
            options: [
              "Both Unigov and the Fishers reorganization were approved by voters",
              "Unigov was the only major postwar consolidation done without a referendum in 1969, while in 2012 a much smaller consolidation was put to voters and defeated 62 to 38",
              "Neither consolidation was ever put to a legislature",
              "Both were struck down in court",
            ],
            correctIndex: 1,
            explanation: "Same state, forty three years apart. Neither fact judges the other; putting them side by side teaches something no single case could.",
            sourceLessonSlug: "ms-powers-incorporation",
          },
          {
            prompt: "Under Senate Enrolled Act 330 of 2015, what happens at 65 percent remonstrance opposition?",
            options: [
              "The remonstrators obtain a court hearing",
              "The municipality must pay the remonstrators' legal fees",
              "The annexation process ends",
              "The question goes to a referendum",
            ],
            correctIndex: 2,
            explanation: "51 percent gets a court hearing; 65 percent ends it. Before 2015, 65 percent was needed merely to get into court.",
            sourceLessonSlug: "ms-powers-annexation",
          },
          {
            prompt: "What is a remonstrance waiver?",
            options: [
              "A court order permitting an annexation to proceed",
              "A recorded document in which a landowner permanently gives up the right to object to a future annexation, typically signed when the property connects to municipal sewer",
              "A promise by a city not to raise taxes after annexation",
              "A petition signed by neighbours supporting annexation",
            ],
            correctIndex: 1,
            explanation: "It runs with the land, so later buyers inherit it, usually without knowing. The city extends a pipe and the owner signs away a political right.",
            sourceLessonSlug: "ms-powers-annexation",
          },
          {
            prompt: "In the Fishers southeast annexation, how many of the 960 parcels carried recorded remonstrance waivers?",
            options: ["96", "310", "710", "All 960"],
            correctIndex: 2,
            explanation: "710 parcels, about 74 percent. Since 65 percent opposition would end an annexation, the outcome was settled when the sewer went in, not in 2024.",
            sourceLessonSlug: "ms-powers-annexation",
          },
          {
            prompt: "Why is annexation not a taking under the Fifth Amendment sense course 1 taught?",
            options: [
              "Because Indiana law forbids annexing occupied land",
              "Because the annexing city pays compensation to every owner",
              "Because annexation requires unanimous consent",
              "Because nothing is transferred and nobody loses a home; what changes is which government taxes you, which police respond, and which ballot you get",
            ],
            correctIndex: 3,
            explanation: "The tax increase is real and it is the point. The argument is about the exchange rate between the new levy and the new services, which is what a fiscal plan must spell out.",
            sourceLessonSlug: "ms-powers-annexation",
          },
          {
            prompt: "The Indiana School Reorganization Act of 1959 reduced the number of Indiana school districts:",
            options: [
              "From 966 to 402",
              "From 402 to 292",
              "From 1,800 to 966",
              "From 500 to 292",
            ],
            correctIndex: 0,
            explanation: "It also cut districts with fewer than 1,000 students from 801 to 156, working through nine member county reorganization committees against a 1,000-student standard.",
            sourceLessonSlug: "ms-powers-district-lines",
          },
          {
            prompt: "What happened to the proposed single Marion County school district in 1961?",
            options: [
              "It was adopted and became Indianapolis Public Schools",
              "It was blocked by a federal court",
              "It was defeated after more than 10,000 petition signatures and packed public hearings, leaving township districts intact",
              "It was never actually proposed",
            ],
            correctIndex: 2,
            explanation: "The county committee had voted unanimously for one 130,000-student district. City schools were about 25 percent nonwhite in 1960 and the other Marion County schools were virtually all white.",
            sourceLessonSlug: "ms-powers-district-lines",
          },
          {
            prompt: "Which clause of Unigov is the hinge of this course's argument about Hamilton County?",
            options: [
              "The consolidation of 31 city departments into six",
              "The 250,000 population threshold",
              "The exclusion of Beech Grove, Lawrence, Southport and Speedway",
              "The bar on annexation into neighbouring counties",
            ],
            correctIndex: 3,
            explanation: "From January 1, 1970 the city that had just erased municipal boundaries inside Marion County was legally unable to cross into Hamilton County, so only municipalities already in the county could grow into this ground.",
            sourceLessonSlug: "ms-powers-district-lines",
          },
          {
            prompt: "Did the 2010 Geist annexation or the 2025 southeast annexation change any student's school district?",
            options: [
              "Yes, both moved students into Hamilton Southeastern Schools",
              "Only the Geist annexation did",
              "Only the southeast annexation did",
              "No. Municipal and school boundaries are separate maps changed by different bodies under different statutes",
            ],
            correctIndex: 3,
            explanation: "A household can wake up in a new city and the same school district. That is the ordinary condition of American suburban life.",
            sourceLessonSlug: "ms-powers-district-lines",
          },
          {
            prompt: "Under Indiana's property tax caps, a homestead's annual bill is limited to:",
            options: [
              "1 percent of its gross assessed value",
              "2 percent of its gross assessed value",
              "3 percent of its gross assessed value",
              "Whatever the county council sets",
            ],
            correctIndex: 0,
            explanation: "Two percent applies to other residential, long-term care and agricultural land; three percent to nonresidential and personal property. The caps entered the state constitution after a November 2010 vote.",
            sourceLessonSlug: "ms-powers-tax-base",
          },
          {
            prompt: "In most Indiana counties, what is the only exemption from the property tax caps?",
            options: [
              "Property owned by a nonprofit",
              "Capital project, school operating or public safety funds approved by voters in a public referendum",
              "Any levy adopted unanimously by a county council",
              "Farmland enrolled in a conservation programme",
            ],
            correctIndex: 1,
            explanation: "This is the whole reason school referenda exist in Indiana. A referendum is the only legal door in a constitutional wall.",
            sourceLessonSlug: "ms-powers-tax-base",
          },
          {
            prompt: "Testing this course's own title against the record shows that:",
            options: [
              "The rivalry marks the line between two school districts",
              "The rivalry marks the line between Fishers and Indianapolis",
              "The rivalry marks the line between what a community can see and what actually governs it, because both schools share one district, city, county, board, tax rate and ballot",
              "The rivalry has no relationship to any boundary at all",
            ],
            correctIndex: 2,
            explanation: "Four jurisdictional boundaries cross this ground in four different shapes, and the one 8,000 people can feel at a stadium is not one of them.",
            sourceLessonSlug: "ms-powers-test-the-claim",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 4 · Now  (beat 4: observation and evidence)
    //
    // The owner's existing Mudsock / Hamilton County rivalry tour is the beat 4 asset, but its
    // embed URL DOES NOT EXIST YET, and a tour URL is authoritative external data that must never
    // be guessed (plans/future/04-wanderlearn-360-boundary.md). So this lesson ships as
    // `virtual_tour` with NO contentUrl, exactly like `ia-now-tour` in the Indiana Avenue course:
    // the player renders the "no media yet" notice above the body, and the body is the observation
    // brief the learner uses when the tour lands. Drop the URL in and re-seed.
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "ms-now-tour",
      title: "14 · Now: walk the boundary (virtual tour, forthcoming)",
      section: "Section 4 · Now",
      lessonType: "virtual_tour",
      body: `**The virtual tour for this lesson is forthcoming.** It is not here yet, and the notice above this text is telling you the truth rather than reporting a fault. This course was written before the tour's embed URL existed, on purpose: the site template this series uses treats beat 4 as a drop-in, so **a course is complete and teachable without it** and the tour is added later without restructuring anything.

**Read this lesson now anyway.** It is your observation brief. Beat 4 asks one question, "what is actually there today," and **the difference between a visitor looking at a suburb and a researcher looking at a suburb is entirely a matter of knowing what to look for before you arrive.** Work through this list now, then run it against the tour when it lands.

## What to look for, in order

**1. Find an edge and ask which edge it is.** The single most useful habit in this course. Every time the built environment changes character, ask **which of the four boundaries you are standing on**: a municipal limit, a township line, a school corporation line, or a taxing district. **Usually it is none of them**, because most visible edges are the edge of a subdivision, which is a private plat rather than a jurisdiction. **Learning to be disappointed by an edge is the skill.**

**2. Count the connections between subdivisions.** Stand at the boundary between two neighbourhoods and count how many streets cross it. **Often the answer is zero, or one.** That is the street hierarchy from lesson 5, and it is written into an ordinance. Note where a street stubs out at a treeline, because **a stub is a future connection somebody drew and has not built.**

**3. Look for the age of the road, not the age of the houses.** Section line roads on a mile grid are the oldest thing in view, older than every building around them, and they came from the federal land survey. **Where a road bends off the grid, something made it bend**, usually water, a railroad, or a reservoir.

**4. Find the sewer.** Manhole covers, lift stations, the boundary between a neighbourhood on municipal sewer and one on septic. **You are looking at the line that lesson 9 said decides annexations.** A sewer boundary is a political boundary with a twenty year fuse.

**5. Look at the school sites and estimate the acreage.** How much of the campus is building, how much is parking, how much is field. **Then ask how a fourteen year old without a car reaches it.** That is not a rhetorical question. It has an answer, and the answer is a bus route with a published map.

**6. Read the signs that are documents.** A rezoning notice, a public hearing sign, a plat marker, a "future site of" board, an annexation notice. **Every one of those has a case number, a hearing date and a deciding body**, and Section 5 teaches you to look them up. Photograph the whole sign including the small print.

**7. Look at the reservoir edge, if the tour reaches it.** Where does public access end and private frontage begin? **Who owns the water, who owns the bank, and who is allowed on it** are three separate questions with three separate answers, and lesson 7 gave you the entity that once held all three.

**8. Look at who is on the street, and describe them as they would describe themselves, or not at all.** A tour is a photograph of strangers in a public place. **The ethics of writing about it are the ethics of writing about neighbours**, and they do not change because the neighbourhood is affluent.

## What the tour cannot show you

- **It cannot show you a boundary.** This is the hardest one and the most important. **Not one of the four jurisdictional lines in lesson 10 is visible from the ground.** There is no sign at the school district line. You can stand on it and see nothing.
- **It cannot show you a rate.** Two identical houses on opposite sides of a taxing district line pay different bills, and nothing about them looks different.
- **It cannot show you a waiver.** The document that settled the annexation of 710 parcels is a piece of paper in a county recorder's office.
- **It cannot show you a decision.** A subdivision is evidence that a plat was recorded. **It is not evidence about anybody's motive**, and lesson 7 spent a paragraph on why that distinction matters.

**Write down your five most confident observations before the tour arrives, based on this brief and the map lesson that follows. Then check them.** Being wrong on the record about a place you had not yet seen is a better teacher than being right about one you had.

## Sources
- Encyclopedia of Indianapolis. (n.d.-a). *Fishers*. https://indyencyclopedia.org/fishers/
- Encyclopedia of Indianapolis. (n.d.-d). *Geist Reservoir*. https://indyencyclopedia.org/geist-reservoir/
- U.S. Environmental Protection Agency. (n.d.). *Smart growth and school siting*. https://www.epa.gov/smartgrowth/smart-growth-and-school-siting`,
      recallContent: [
        {
          prompt: "Why is this lesson published before its tour exists?",
          answer: "Because the site template treats beat 4 as a drop-in: a course is complete and teachable with the other five beats, and the tour is added later without restructuring anything. A tour embed URL is authoritative external data and is never guessed.",
        },
        {
          prompt: "When you find a visible edge in a suburb, what is usually true about it?",
          answer: "That it is none of the four jurisdictional boundaries. Most visible edges are the edge of a subdivision, which is a private plat rather than a jurisdiction. Learning to be disappointed by an edge is the skill.",
        },
        {
          prompt: "Why is a sewer boundary a political boundary?",
          answer: "Because connection to municipal sewer is when a remonstrance waiver is signed. It is a political boundary with roughly a twenty year fuse.",
        },
        {
          prompt: "Name the four things a tour of this ground cannot show you.",
          answer: "A boundary, because none of the four jurisdictional lines is visible from the ground; a tax rate; a recorded remonstrance waiver; and a decision, since a subdivision proves a plat was recorded and proves nothing about motive.",
        },
      ],
    },
    {
      slug: "ms-map",
      title: "15 · Map: one county, and the national pattern it belongs to",
      section: "Section 4 · Now",
      body: `**Read this before you touch the map, because the map's limits are the lesson.**

**This platform's lesson map draws the whole world.** A marker is a fixed size dot on a world projection, so two points need to be roughly two degrees apart, on the order of two hundred kilometres, before they separate visually. **Fishers and downtown Indianapolis are about a fifth of a degree apart.** On this map they will crowd into nearly the same dot, **which is a completely accurate rendering of the problem this course is about**: at national scale, a city and its suburb are one place, and every difference that matters between them is invisible.

**So use the right tool for the right question.** For a parcel, a taxing district or a boundary, the right maps are the county's and the state's, and Section 5 sends you to both:
- **Hamilton County's property records**, searchable by parcel number, state parcel number, property address or mailing address, giving ownership, deductions, transfer history and assessed values (Hamilton County, Indiana, n.d.).
- **Indiana Gateway for Government Units**, "an open door into local government finance," operated as a partnership between the State of Indiana and the Indiana Business Research Center at Indiana University's Kelley School of Business, publishing budgets, levies, tax rates and referendum information for every local unit in the state (Indiana Gateway, n.d.).

**Choosing the right scale of map for your question is a research skill.** Course 1 said the same thing and sent its learners to MapIndy for Marion County. **This is the Hamilton County version of that instruction.**

**So this map does the job a world map can do well.** It puts this county in the national pattern of instruments it belongs to, and marks where the records live.

**Blue: the two ends of this cluster's argument.** Fishers and Geist Reservoir on one side, Indiana Avenue on the other. **Twenty miles apart, same metropolitan area, same decades, opposite instruments.** Read their two descriptions back to back and you have both courses in a paragraph each.

**Amber: three American places where these exact instruments were litigated.** These are here to stop you reading Hamilton County as a local peculiarity. **Incorporation, annexation and the school district line are a national method with a national case law**, and in each of these places a court wrote down what the instrument does.

**Green: two records offices.** Noblesville, the Hamilton County seat, holds the recorder's office where every plat and every remonstrance waiver in this course physically lives, and it is the courthouse where the 1925 Klan trial was held. Indianapolis holds the state library, the state archives and the agencies that run Gateway and the property tax caps. **Knowing where a record physically lives is part of knowing that it exists.**

**Coordinates on this map are approximate points, not surveyed locations.** Do not use them to find an address. Use them to see the shape of the pattern, and use the county's property records when you need a parcel.

**What this map cannot show, and neither could course 1's.** It cannot show a boundary, which is the entire problem. **Every marker here is a point, and every subject of this course is a line.** If you want to see the lines, you need a county GIS layer, and getting one is the assignment in lesson 17.

## Sources
- Hamilton County, Indiana. (n.d.). *Property records*. https://secure2.hamiltoncounty.in.gov/PropertyReports/
- Indiana Gateway for Government Units. (n.d.). *An open door into local government finance*. https://gateway.ifionline.org/
- Milliken v. Bradley, 418 U.S. 717 (1974). https://supreme.justia.com/cases/federal/us/418/717/
- United States v. City of Black Jack, 508 F.2d 1179 (8th Cir. 1974). https://law.justia.com/cases/federal/appellate-courts/F2/508/1179/366846/
- Chalkbeat Tennessee. (2015, July 16). *Municipal superintendents cite challenges, benefits of split from Shelby County Schools*. https://www.chalkbeat.org/tennessee/2015/7/16/21101643/municipal-superintendents-cite-challenges-benefits-of-split-from-shelby-county-schools/`,
      mapContent: {
        markers: [
          {
            id: "ms-fishers",
            lat: 39.9568,
            lng: -86.0139,
            title: "Fishers, Hamilton County, Indiana",
            color: "#1d4ed8",
            description:
              "The subject of this course. A railroad switch platted in 1872, nicknamed Mudsock for its swampy soil, incorporated as a town in 1891, and holding 344 residents in 1960. It reached 98,977 in the 2020 census and became a second class city on January 1, 2015 after a two question referendum in which voters rejected merging with Fall Creek Township 62 to 38 and approved city status 55 to 45. It annexed the Geist area in 2010 and 994 acres in the southeast in 2025. Its two public high schools, Fishers and Hamilton Southeastern, contest the Mudsock trophy across all varsity sports, and both sit inside one school corporation, one city and one county.",
          },
          {
            id: "ms-geist",
            lat: 39.921,
            lng: -85.937,
            title: "Geist Reservoir, Indiana (approximate point)",
            color: "#1d4ed8",
            description:
              "Infrastructure for one city, built in another county. The Indianapolis Water Company dammed Fall Creek in 1941 and began supplying Indianapolis with water in 1943. The reservoir covers 1,900 acres across northern Marion, southeastern Hamilton and northwestern Hancock counties, stores 6.9 billion gallons, and covered 535 acres of woodland and 45 homesteads including the village of Germantown. Housing began in 1980; by the early 2000s about 2,200 upscale homes lined the banks, and Fishers annexed them on January 2, 2010 after a four year legal fight.",
          },
          {
            id: "ms-indiana-avenue",
            lat: 39.7745,
            lng: -86.1665,
            title: "Indiana Avenue, Indianapolis, Indiana",
            color: "#7c3aed",
            description:
              "The other end of this cluster's argument, and the subject of the companion course. A Black commercial and cultural corridor, 77 percent Black by 1920, holding more than 180 businesses in eight blocks in 1916. Most of it went to blight designation, university land assembly and eminent domain between 1948 and the 1980s. Twenty miles from the marker to the north, over the same decades, under the opposite set of instruments. Neither course makes sense without the other.",
          },
          {
            id: "ms-detroit-milliken",
            lat: 42.3314,
            lng: -83.0458,
            title: "Detroit, Michigan: Milliken v. Bradley",
            color: "#b45309",
            description:
              "Where the school district line became nearly untouchable. In Milliken v. Bradley, 418 U.S. 717, decided July 25, 1974 by a 5 to 4 vote, the Supreme Court set aside a metropolitan desegregation remedy spanning Detroit and outlying districts, holding that a cross district remedy required a showing of an interdistrict violation or effect. Read it beside lesson 10: an Indiana county committee drew a line in the early 1960s, and a decade later the federal courts made lines of that kind far harder to cross.",
          },
          {
            id: "ms-black-jack",
            lat: 38.7909,
            lng: -90.2712,
            title: "Black Jack, Missouri: incorporation as an instrument",
            color: "#b45309",
            description:
              "Incorporation used on its own, and then found unlawful. Black Jack incorporated in 1970 and adopted a zoning ordinance barring new multifamily construction while a church backed group was assembling land there for low income housing. In United States v. City of Black Jack, 508 F.2d 1179, decided December 27, 1974, the Eighth Circuit held the ordinance violated Title VIII of the Civil Rights Act of 1968 and ordered it enjoined. Lesson 8 taught incorporation as a neutral instrument. This is the case where a court examined what one was used for.",
          },
          {
            id: "ms-shelby-county",
            lat: 35.0868,
            lng: -89.8101,
            title: "Germantown and Shelby County, Tennessee: districts that split",
            color: "#b45309",
            description:
              "The modern version of lesson 10, running in reverse and inside living memory. Memphis voters surrendered their city school district's charter in 2011 and it merged with Shelby County Schools effective July 1, 2013. Six suburban municipalities, Arlington, Bartlett, Collierville, Germantown, Lakeland and Millington, then formed their own municipal school districts, which opened in August 2014 after litigation including claims that their creation was racially motivated. School district lines are not a settled historical artifact; they are still being drawn.",
          },
          {
            id: "ms-noblesville",
            lat: 40.0456,
            lng: -86.0086,
            title: "Noblesville, Indiana: the Hamilton County seat and its records",
            color: "#15803d",
            description:
              "Where the documents in this course physically live. The county recorder holds every subdivision plat and every recorded remonstrance waiver, including the 710 that settled the 2025 southeast annexation before it began. The auditor applies the circuit breaker credits. The assessor produces the property record cards. And the Hamilton County courthouse is where the murder trial of D. C. Stephenson, Grand Dragon of the Indiana Ku Klux Klan, was held from October 28 to November 14, 1925, on a change of venue out of Indianapolis.",
          },
          {
            id: "ms-indianapolis-state",
            lat: 39.7684,
            lng: -86.1622,
            title: "Indianapolis: the state records and the agencies",
            color: "#15803d",
            description:
              "Where the state half of this course is kept. The Indiana General Assembly passed the 1959 School Reorganization Act, the 1969 Unigov statute with its bar on annexation into neighbouring counties, Senate Enrolled Act 330 of 2015 on remonstrance, and Senate Enrolled Act 1 of 2025 on property taxes. The Department of Local Government Finance administers the constitutional tax caps and publishes the historic school referenda list, and Indiana Gateway publishes every local unit's budget, levy and rate.",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 5 · Next  (beat 5: live civics. a referendum on the ballot right now, and a parcel)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "ms-next-live",
      title: "16 · What is on the ballot and in the fiscal plan right now",
      section: "Section 5 · Next",
      body: `Beat 5 is the beat that turns a history course into a civics course. **Every place has a decision pending on it right now**, and finding that decision is a research skill rather than an opinion. **This ground has an unusually good one, because it is a school funding referendum that has not been voted on yet.**

## The live item: a school operating referendum, November 3, 2026

**The Hamilton Southeastern Board of School Trustees approved a resolution on June 10, 2026, by a vote of 6 to 0 with one abstention, to place an operating referendum on the November 2026 ballot** (Current Publishing, 2026; The Reporter, 2026).

**The terms, from the district's own referendum page.** "Up to $0.36 per $100 of assessed property value over eight years," on the **November 3, 2026** ballot, with the district projecting "a $3 per month increase to their 2027 tax bill" for the median homeowner. The stated purposes are "teacher compensation, school safety, student behavioral health services, and educational programs," and the district describes the measure as necessitated by "recent changes to Indiana property tax law" (Hamilton Southeastern Schools, n.d.-a).

**The stated reason, in the officials' own words.** Board President **Tiffany Pascoe**: "In response to SEA-1, the Board has referred this measure to voters. This referendum would help sustain the district's long-term financial outlook." Superintendent **Dr. Matt Kegley**: "This recommendation takes a pragmatic approach by seeking to recover a portion of the revenue lost through SEA-1." The district also reported identifying **7 million dollars in ongoing reductions** (The Reporter, 2026).

**Reporting adds a detail the district page does not.** Coverage of the June resolution described a plan to **start at a rate of about 22 cents and escalate about 6 percent a year to roughly 33 cents by 2034**, under a 36 cent ceiling, and described the measure as replacing the referendum voters approved in 2023 (Current Publishing, 2026). **Notice what just happened: the maximum rate on the ballot and the rate the district intends to levy are two different numbers.** That is normal, legal and worth understanding, and **it is the sort of thing you can only learn by reading past the headline number.**

## Why this is happening: Senate Enrolled Act 1 of 2025

Lesson 11 explained the constitutional caps. **SEA 1, passed in the 2025 session, is the next move in the same game.** Published summaries describe a package that phases in over roughly six years through 2031: the standard homestead deduction begins to phase out, the supplemental homestead deduction rises, a new homestead tax credit is introduced with a dollar cap, levy growth is constrained unless a fiscal body affirmatively adopts an increase after a separate public hearing, and **property tax referenda may appear only on general election ballots.**

**Read that last provision as an instrument.** A rule about **when** a question may be asked is a rule about **who will be in the room to answer it.** A general election electorate is larger and differently composed than a primary or special election electorate. **The 2016 Hamilton Southeastern referendum was decided in a May primary. The 2026 one must be decided in November.** Neither is more legitimate. **They are different electorates, and somebody chose which one gets the question.** That is the same class of decision as Unigov's threshold of 250,000 residents, which course 1 showed writing a law for one city while appearing to write a general rule.

**And the district has already published what the caps cost it**: a 4.6 million dollar reduction from the 2025 property tax caps and an estimated 4.5 million dollar impact from the Supplemental Homestead Credit beginning in 2026 (Hamilton Southeastern Schools, n.d.-b).

## The other live document: the comprehensive plan

**Fishers adopted its comprehensive plan, Fishers 2040, in June 2016, with amendments published in June 2021**, and the city describes it as covering future land use, quality of life, parks and open space, transportation and housing, updated on a five year cycle (City of Fishers, n.d.).

**A caution about how this course cites that plan, and it is a method note.** The city's web server refused automated requests while this course was written, so **the plan's adoption dates here are taken from the title pages of the documents as the city publishes them, and the plan's contents have not been read into this course.** That is a limit, it is stated rather than hidden, and **it is also your first assignment: open the plan yourself.** The URLs are in the sources below.

## The four questions, localised

Course 1 gave four questions that work for any American parcel. **Here is what each one resolves to on this ground.**

1. **What does the comprehensive plan say this land should become?** In Fishers, the Fishers 2040 plan. In unincorporated territory, the county's comprehensive plan.
2. **What does the zoning permit today?** Fishers administers a Unified Development Ordinance. **A comprehensive plan is not zoning**; it is the policy statement a rezoning is judged against.
3. **Is there an area specific plan or a pending annexation, and has it been adopted?** For an annexation, Indiana requires a written **fiscal plan** adopted before the ordinance, spelling out services, costs, revenue and the tax effect. The southeast annexation's fiscal plan is dated **September 5, 2024** and is published on the city's website.
4. **Who decides, when do they meet, and is the agenda public?** For land use, the plan commission and the city council. For annexation, the city council. For the school referendum, **the voters**, on November 3, 2026, after a school board that has already voted.

**Two habits to carry.**

**First, find the document with the number in it.** A fiscal plan, a budget, a levy certification, a referendum resolution. **A number without a document is a rumour**, and every number in this lesson has a document behind it.

**Second, re-check everything above before you rely on it.** Referendum rates get amended. Plans get updated. Contracts get extended. **Every date and figure in this lesson has a source and a date attached, and you should verify all of them.** That instruction is not a disclaimer. It is the method.

## Sources
- City of Fishers. (n.d.). *Fishers 2040 plan*. https://fishersin.gov/departments/planning-zoning/fishers-2040-plan/
- City of Fishers. (2024, September 5). *Southeast annexation fiscal plan 2.0*. https://fishersin.gov/wp-content/uploads/2024/09/City-of-Fishers-Southeast-Annexation-Fiscal-Plan-2.0.pdf
- Current Publishing. (2026, June 11). *Hamilton Southeastern school board OKs referendum resolution*. https://youarecurrent.com/2026/06/11/hamilton-southeastern-school-board-oks-referendum-resolution/
- Hamilton Southeastern Schools. (n.d.-a). *Referendum 2026*. https://www.hseschools.org/community/referendum-2026
- Hamilton Southeastern Schools. (n.d.-b). *Revenue sources*. https://www.hseschools.org/community/finances/revenue-sources
- Indiana General Assembly. (2025). *Senate Bill 1: Local government finance*. https://iga.in.gov/legislative/2025/bills/senate/1
- The Reporter. (2026). *HSE Board approves placing operating referendum on November ballot*. https://readthereporter.com/hse-board-approves-placing-operating-referendum-on-november-ballot/`,
      recallContent: [
        {
          prompt: "What is on the November 3, 2026 ballot for Hamilton Southeastern Schools, and on what terms?",
          answer: "An operating referendum of up to 0.36 dollars per 100 dollars of assessed value over eight years, approved by the school board 6 to 0 with one abstention on June 10, 2026. The district projects a 3 dollar per month increase on the median homeowner's 2027 bill.",
        },
        {
          prompt: "Why are the maximum rate on the ballot and the rate the district intends to levy different numbers?",
          answer: "The ballot sets a ceiling. Coverage of the resolution described a plan to start near 22 cents and escalate about 6 percent a year to roughly 33 cents by 2034, under a 36 cent maximum. That is normal and legal, and you only learn it by reading past the headline number.",
        },
        {
          prompt: "Why does the district say it is asking, and who said so?",
          answer: "Senate Enrolled Act 1 of 2025. Board President Tiffany Pascoe said the board referred the measure in response to SEA-1 to sustain the district's long-term outlook, and Superintendent Dr. Matt Kegley described it as seeking to recover a portion of revenue lost through SEA-1. The district also identified 7 million dollars in ongoing reductions.",
        },
        {
          prompt: "Why is 'referenda may appear only on general election ballots' an instrument rather than a technicality?",
          answer: "Because a rule about when a question may be asked is a rule about who will be in the room to answer it. The 2016 referendum was decided in a May primary; the 2026 one must go to a November general electorate. Neither is more legitimate, but somebody chose which electorate gets the question.",
        },
        {
          prompt: "How does this course cite the Fishers 2040 plan, and why does it say so out loud?",
          answer: "By its published adoption dates, June 2016 with amendments published in June 2021, taken from the documents' title pages. The city's server refused automated requests, so the plan's contents have not been read into this course. The limit is stated rather than hidden, and opening the plan is the learner's assignment.",
        },
      ],
    },
    {
      slug: "ms-next-exercise",
      title: "17 · Practice: find a parcel, a taxing district and a levy",
      section: "Section 5 · Next",
      lessonType: "exercise",
      body: `**This drill is the whole of beat 5 in miniature, and you should do it with the real tools open in another tab.** Everything below is free and public.

**The three tools.**
- **Hamilton County property records**: https://secure2.hamiltoncounty.in.gov/PropertyReports/ . Search by county (duplicate) number, state parcel number, property address or mailing address. It returns ownership, deductions, transfer history, assessed values and printable tax statements (Hamilton County, Indiana, n.d.).
- **Indiana Gateway for Government Units**: https://gateway.ifionline.org/ . Operated as a partnership between the State of Indiana and the Indiana Business Research Center at IU's Kelley School of Business. Its Taxpayer Portal shows assessed values, tax bills and referendum calculators, and its report search and data download reach every local unit's budget, levy and rate (Indiana Gateway, n.d.).
- **The Department of Local Government Finance's historic school tax levy referenda list**: https://www.in.gov/dlgf/referendum-information/historic-school-tax-levy-referenda/ . Every Indiana school referendum, with its findings, resolution, revenue spending plan and certified result.

**Your target: a public building, not a home.** Pick a school, a library, a city hall, a fire station or a park building in Fishers or Noblesville. **Do not run this drill on somebody's house and publish the result.** A parcel record is public; a current occupant's name attached to their address in a piece of writing is a different act. **This is the same rule course 1 applied to the Green Book tourist homes, and it does not relax because the neighbourhood is affluent.**

**Work through these, then answer the questions below.**
1. Find the parcel in Hamilton County property records. Write down the **state parcel number** exactly, including punctuation.
2. Read off the **owner of record** and the **assessed value**. Compare the owner of record to the name of the organisation that occupies the building. **If they differ, that is normal and it is a finding.**
3. Find the **taxing district** the parcel sits in. Then list every unit that levies on it: county, township, city or town if any, school corporation, library, and any special district. **Count them.** Course 1 noted that Marion County has more than 61 taxing districts; **find out how many Hamilton County has, from Gateway.**
4. In Gateway, pull **Hamilton Southeastern Schools' certified levy and rate** for the most recent year available. Compare the referendum rate to the total rate. **What share of the bill is the referendum?**
5. Look up the **circuit breaker credit** on the parcel, if any. That is the dollar figure the caps are removing from a local unit's revenue.
6. In the DLGF referenda list, find **every Hamilton Southeastern referendum** and note the year, the rate asked and the result. Then find one **neighbouring district's** referenda and compare.
7. Ask the boundary question: **is this parcel inside the city limits? Which township? Which school corporation? Which council district?** Write down all four and notice that they are four different shapes.

**The habits this builds, which transfer to any American county.** Every county has an assessor, a recorder and an auditor, and most have a GIS and an online property search. **The names of the tools change and the facts do not: parcel number, owner of record, assessed value, taxing district, and the list of units that levy on it.** Learn to find those five and you can research any address in the country.

**One rule you do not get to break.** Public buildings and commercial addresses only for anything you publish. **The tools do not care and you should.**

## Sources
- Hamilton County, Indiana. (n.d.). *Property records*. https://secure2.hamiltoncounty.in.gov/PropertyReports/
- Indiana Department of Local Government Finance. (n.d.). *Historic school tax levy referenda*. https://www.in.gov/dlgf/referendum-information/historic-school-tax-levy-referenda/
- Indiana Department of Local Government Finance. (2024, April). *Property tax caps / circuit breaker credits fact sheet*. https://www.in.gov/dlgf/files/240429-Fact-Sheet-Circuit-Breaker-Caps.pdf
- Indiana Gateway for Government Units. (n.d.). *An open door into local government finance*. https://gateway.ifionline.org/`,
      exercise: {
        instructions:
          "Type the missing term, name, number, body or year, then check. Close answers (spelling, capitalization) count as 'close', not wrong.",
        items: [
          {
            prompt: "The state's public database of every Indiana local unit's budget, levy and rate is called Indiana ___.",
            answer: "Gateway",
            accept: ["gateway", "indiana gateway", "gateway for government units"],
            explanation: "At gateway.ifionline.org, run as a partnership between the State of Indiana and the Indiana Business Research Center at IU's Kelley School of Business.",
          },
          {
            prompt: "The recorded document by which a landowner permanently gives up the right to object to a future annexation is a remonstrance ___.",
            answer: "waiver",
            accept: ["waivers", "remonstrance waiver"],
            explanation: "It is typically signed when a property connects to municipal sewer, and it runs with the land, so later buyers inherit it.",
          },
          {
            prompt: "In the Fishers southeast annexation, ___ of the 960 parcels carried recorded remonstrance waivers.",
            answer: "710",
            accept: ["710 parcels", "seven hundred ten"],
            explanation: "About 74 percent. Since 65 percent opposition would end an annexation under SEA 330, the outcome was settled when the sewer went in.",
          },
          {
            prompt: "Indiana's annual property tax bill on an owner-occupied homestead is capped at ___ percent of gross assessed value.",
            answer: "1",
            accept: ["one", "1 percent", "1%"],
            explanation: "Two percent applies to other residential, long-term care property and agricultural land; three percent to nonresidential and personal property.",
          },
          {
            prompt: "In most Indiana counties the only exemption from the property tax caps is a levy approved by voters in a public ___.",
            answer: "referendum",
            accept: ["referenda", "referendum vote", "vote"],
            explanation: "That is the whole reason school referenda exist in Indiana: a referendum is the only legal door in a constitutional wall.",
          },
          {
            prompt: "The caps entered the Indiana Constitution after voters approved them in November of ___.",
            answer: "2010",
            accept: ["10"],
            explanation: "Senate Joint Resolution 1 passed the General Assembly in 2008 and again in 2010 before going to the voters, adding the caps to Article 10, Section 1.",
          },
          {
            prompt: "Indiana's municipally initiated annexation, commonly miscalled involuntary, is at IC 36-4-3-___.",
            answer: "3",
            accept: ["three", "36-4-3-3"],
            explanation: "IC 36-4-3-5 is owner initiated with 51 percent of owners or 75 percent of assessed value, and IC 36-4-3-5.1 requires 100 percent consent.",
          },
          {
            prompt: "Under Senate Enrolled Act 330 of 2015, remonstrance at ___ percent ends an annexation.",
            answer: "65",
            accept: ["sixty five", "65 percent"],
            explanation: "51 percent gets a court hearing. Before 2015, 65 percent was needed merely to get into court.",
          },
          {
            prompt: "The Indiana School ___ Act of 1959 is why school district lines in this state were drawn where they are.",
            answer: "Reorganization",
            accept: ["reorganisation", "reorganization act", "school reorganization"],
            explanation: "It required a plan in every county, set a 1,000-student standard, and cut Indiana's districts from 966 to 402.",
          },
          {
            prompt: "Unigov barred Indianapolis from annexing into ___ counties, which is why Hamilton County was out of reach.",
            answer: "neighbouring",
            accept: ["neighboring", "adjacent", "other", "surrounding"],
            explanation: "The restriction was needed to get the votes. The same statute that erased municipal boundaries inside Marion County fixed the county line as a limit.",
          },
          {
            prompt: "Fishers became a second class ___ on January 1, 2015.",
            answer: "city",
            accept: ["city of the second class"],
            explanation: "Voters approved the change 20,052 to 16,169 while rejecting a merger with Fall Creek Township 23,483 to 14,097.",
          },
          {
            prompt: "The Hamilton Southeastern operating referendum on the November 3, 2026 ballot asks for a maximum rate of ___ cents per 100 dollars of assessed value.",
            answer: "36",
            accept: ["thirty six", "0.36", "$0.36"],
            explanation: "Over eight years. The board approved the resolution 6 to 0 with one abstention on June 10, 2026, citing Senate Enrolled Act 1 of 2025.",
          },
          {
            prompt: "Hamilton Southeastern Schools states that it ranks in the bottom ___ percent of Indiana districts in state tuition support per student.",
            answer: "2",
            accept: ["two", "2 percent", "bottom 2"],
            explanation: "State formulas direct additional funding toward student need, so a district in the state's highest income county receives among the least state money per student.",
          },
          {
            prompt: "A private water utility dammed Fall Creek in 1941, flooding 535 acres and 45 homesteads including the village of ___.",
            answer: "Germantown",
            accept: ["germantown village"],
            explanation: "The reservoir began supplying Indianapolis with water in 1943 and is named for Clarence H. Geist, president of the Indianapolis Water Company from 1913 to 1938.",
          },
          {
            prompt: "The line between Fishers High School and Hamilton Southeastern High School is an ___ boundary, not a jurisdictional one.",
            answer: "attendance",
            accept: ["attendance area", "school attendance"],
            explanation: "Both schools are in one school corporation, one city and one county, under one board, one set of rates, one referendum and one ballot.",
          },
        ],
      },
    },
    {
      slug: "ms-quiz-next",
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
              "Because Hamilton County's coordinates are unknown",
              "Because the lesson map draws the whole world, so points need roughly two degrees of separation to separate visually, and Fishers is about a fifth of a degree from downtown Indianapolis",
              "Because county maps are copyrighted",
              "Because the course avoids maps of Indiana",
            ],
            correctIndex: 1,
            explanation: "That crowding is an accurate rendering of the problem: at national scale a city and its suburb are one place, and every difference that matters between them is invisible.",
            sourceLessonSlug: "ms-map",
          },
          {
            prompt: "What is Indiana Gateway for Government Units?",
            options: [
              "A private real estate listing site",
              "The state's online voter registration portal",
              "The state's public database of local government budgets, levies, tax rates and referendum information, run with the Indiana Business Research Center",
              "A historical atlas of Indiana townships",
            ],
            correctIndex: 2,
            explanation: "Its Taxpayer Portal shows assessed values, tax bills and referendum calculators, and its report search reaches every local unit in the state.",
            sourceLessonSlug: "ms-next-exercise",
          },
          {
            prompt: "Which five facts should you pull for any parcel in any American county?",
            options: [
              "Parcel number, owner of record, assessed value, taxing district, and the list of units that levy on it",
              "Square footage, roof age, paint colour, street name and school",
              "Architect, contractor, original cost, current tenant and zoning",
              "Purchase price, mortgage lender, insurer, and two neighbours' names",
            ],
            correctIndex: 0,
            explanation: "The names of the tools change from county to county; those five facts do not.",
            sourceLessonSlug: "ms-next-exercise",
          },
          {
            prompt: "What is on the Hamilton Southeastern ballot on November 3, 2026?",
            options: [
              "A bond issue for a third high school",
              "An operating referendum of up to 0.36 dollars per 100 dollars of assessed value over eight years",
              "A proposal to merge with Noblesville schools",
              "A question on annexing the district into Fishers",
            ],
            correctIndex: 1,
            explanation: "The board approved the resolution 6 to 0 with one abstention on June 10, 2026, and the district projects a 3 dollar per month increase for the median homeowner's 2027 bill.",
            sourceLessonSlug: "ms-next-live",
          },
          {
            prompt: "Why do the maximum rate on a referendum ballot and the rate a district intends to levy differ?",
            options: [
              "Because the county auditor sets the actual rate",
              "Because the ballot rate is adjusted for inflation each year",
              "Because the maximum is a ceiling, and the district may plan to levy below it and escalate over the term",
              "Because the state caps referendum rates at half the ballot figure",
            ],
            correctIndex: 2,
            explanation: "Coverage of the June 2026 resolution described starting near 22 cents and escalating about 6 percent a year to roughly 33 cents by 2034 under a 36 cent ceiling. You only learn that by reading past the headline number.",
            sourceLessonSlug: "ms-next-live",
          },
          {
            prompt: "Senate Enrolled Act 1 of 2025 restricted property tax referenda to general election ballots. Why does this course call that an instrument?",
            options: [
              "Because it saves counties money on special elections",
              "Because a rule about when a question may be asked is a rule about who will be in the room to answer it",
              "Because it makes referenda unconstitutional",
              "Because general elections have lower turnout",
            ],
            correctIndex: 1,
            explanation: "The 2016 Hamilton Southeastern referendum was decided in a May primary and the 2026 one must go to a November electorate. Neither is more legitimate; somebody chose which electorate gets the question.",
            sourceLessonSlug: "ms-next-live",
          },
          {
            prompt: "How does this course handle the Fishers 2040 comprehensive plan?",
            options: [
              "It summarises the plan's land use recommendations in detail",
              "It ignores the plan entirely",
              "It asserts the plan's contents from memory",
              "It cites the published adoption dates from the documents' title pages and states plainly that the plan's contents were not read, because the city's server refused automated requests",
            ],
            correctIndex: 3,
            explanation: "The limit is stated rather than hidden, and opening the plan is left as the learner's assignment. The URLs are in the lesson's sources.",
            sourceLessonSlug: "ms-next-live",
          },
          {
            prompt: "What does Indiana require a municipality to adopt before an annexation ordinance?",
            options: [
              "A written fiscal plan spelling out services, costs, revenue and the tax effect",
              "A referendum of the annexed residents",
              "A county council resolution",
              "A comprehensive plan amendment",
            ],
            correctIndex: 0,
            explanation: "The Fishers southeast annexation's fiscal plan is dated September 5, 2024 and is published on the city's website. A number without a document is a rumour.",
            sourceLessonSlug: "ms-next-live",
          },
          {
            prompt: "Why does this course tell you to practise parcel lookups on public and commercial buildings?",
            options: [
              "Because residential records are not public in Indiana",
              "Because homes are not assigned parcel numbers",
              "Because publishing a current occupant's name with their home address is a different act from a public record sitting in a county database",
              "Because the assessor refuses residential requests",
            ],
            correctIndex: 2,
            explanation: "It is the same rule course 1 applied to the Green Book tourist homes, and it does not relax because the neighbourhood is affluent.",
            sourceLessonSlug: "ms-next-exercise",
          },
          {
            prompt: "When you find a visible edge between two neighbourhoods, what is it most likely to be?",
            options: [
              "A school district line",
              "A township line",
              "A city limit",
              "The edge of a subdivision, which is a private plat rather than a jurisdiction",
            ],
            correctIndex: 3,
            explanation: "Learning to be disappointed by an edge is the skill. None of the four jurisdictional lines in lesson 10 is visible from the ground.",
            sourceLessonSlug: "ms-now-tour",
          },
          {
            prompt: "Why does the observation brief tell you to find the sewer?",
            options: [
              "Because sewer lines follow historic property boundaries",
              "Because sewer maps show the original plats",
              "Because sewers determine school attendance areas",
              "Because the boundary between municipal sewer and septic is where remonstrance waivers get signed, making it a political boundary with a twenty year fuse",
            ],
            correctIndex: 3,
            explanation: "The city extends a pipe and the owner signs away a political right. Lesson 9 showed that settling an annexation of 960 parcels.",
            sourceLessonSlug: "ms-now-tour",
          },
          {
            prompt: "Name the four things a virtual tour of this ground cannot show you.",
            options: [
              "A boundary, a tax rate, a recorded waiver, and a decision",
              "Colour, texture, scale and season",
              "Buildings, streets, signs and vehicles",
              "Weather, time of day, traffic and noise",
            ],
            correctIndex: 0,
            explanation: "A subdivision proves a plat was recorded. It is not evidence about anybody's motive, and none of the four jurisdictional lines has a sign on it.",
            sourceLessonSlug: "ms-now-tour",
          },
          {
            prompt: "Why is Milliken v. Bradley on this course's map?",
            options: [
              "Because it concerned Indiana schools",
              "Because it invalidated the 1959 Reorganization Act",
              "Because the Supreme Court set aside a cross district desegregation remedy in 1974, holding that crossing a district line required a showing of an interdistrict violation or effect",
              "Because it upheld a suburban annexation",
            ],
            correctIndex: 2,
            explanation: "An Indiana county committee drew a school district line in the early 1960s, and a decade later the federal courts made lines of that kind far harder to cross.",
            sourceLessonSlug: "ms-map",
          },
          {
            prompt: "Why is Black Jack, Missouri on this course's map?",
            options: [
              "Because the Eighth Circuit held in 1974 that a zoning ordinance adopted after the city's 1970 incorporation violated the Fair Housing Act",
              "Because it was the first city in America to use remonstrance waivers",
              "Because it merged with St. Louis",
              "Because it has a rivalry like Mudsock",
            ],
            correctIndex: 0,
            explanation: "Lesson 8 taught incorporation as a neutral instrument. Black Jack is the case where a court examined what one was used for.",
            sourceLessonSlug: "ms-map",
          },
          {
            prompt: "What do the Shelby County, Tennessee municipal school districts add to this course?",
            options: [
              "A second example of a high school rivalry",
              "Evidence that school district lines are still being drawn: six suburban municipalities formed their own districts, opening in 2014 after litigation, following a 2013 merger",
              "Proof that consolidation always fails",
              "An example of a successful county-wide district",
            ],
            correctIndex: 1,
            explanation: "The lines are not a settled historical artifact. Lesson 10's instrument is in use right now.",
            sourceLessonSlug: "ms-map",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 6 · Write  (beat 6: ELA and creative nonfiction, grounded in the place)
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "ms-write-assignment",
      title: "19 · Your assignment: write one boundary",
      section: "Section 6 · Write",
      lessonType: "assignment",
      body: `Beat 6 asks a question no other beat can: **what can only be said about this place?** Answering it is a writing problem, and this assignment is a real one.

## The assignment
Write **900 to 1,300 words** of creative nonfiction about **one boundary, one parcel, or one decision** on or near this ground. Every factual sentence must be checkable against a source you name. **The form is literary; the standard of evidence is the one Section 3 used.**

## Step 1 · Choose one line, and choose small
Pick from the four boundaries in lesson 10, or from a parcel you found in lesson 17, or from one of the documented decisions in Section 3. **Smaller is better.** "The suburbs" is not a subject, it is a topic. **"994 acres, 960 parcels, 710 of them already waived" is a subject.** So is one plat, one referendum, one fiscal plan, or the 45 homesteads under Geist Reservoir.

If you do not live in Hamilton County and cannot visit, that is not a disqualification. **It is a constraint you disclose in the piece**, and it changes what you can honestly claim.

## Step 2 · Build the four column chronology before you write a sentence
Lesson 12 killed this course's own title with a table. Build your own, with these columns: **date, event, instrument, source.** If the instrument column is empty for an event, you have a story and not yet a decision. **The table is the outline.**

## Step 3 · Decide what kind of piece this is
Pick one and commit, because mixing them is what makes place writing mushy.
- **A biography of a boundary.** When it was drawn, by which body, under which statute, and what has and has not moved it since.
- **A history of a decision.** One ordinance, one referendum, one court ruling, one fiscal plan, followed to the document.
- **A report on a present.** What is on the ballot now, who is campaigning, what a public meeting sounded like, what the fiscal plan projects.
- **A piece about the record itself.** What you could and could not find, and what the gap means.

**The fourth is the hardest and often the best**, and it is the only one that can be written honestly with thin sources.

## Step 4 · Write it, under these craft rules
1. **Lead with a specific.** A parcel number, a vote total, a rate, a date on a resolution. Not a mood, and not a helicopter shot of cul de sacs.
2. **Name the instrument every time you name an outcome.** "The suburb grew" is weak. "The council adopted an annexation ordinance under IC 36-4-3-3, and 710 of 960 parcels had already waived remonstrance" is strong, and it is sourced.
3. **Give a figure its owner.** Not "Hamilton County is rich" but "the American Community Survey 2024 one year estimate put Hamilton County's median household income at 125,509 dollars, plus or minus 5,196."
4. **Separate a mechanism from a flow.** You may describe how a system routes money. **You may not claim to have measured where money went** unless you have read a study that measured it. Lesson 12 refused this claim in public and so should you.
5. **Separate a consequence from an intention.** A reservoir produced expensive shoreline. **That is not evidence about why it was built.** This is the most abused distinction in local history writing.
6. **Use the present tense for the present.** Fishers is a working city with a live referendum, not a specimen. Write it that way.
7. **One paragraph, minimum, on what you could not establish.** Required, not optional.

## Rules you do not get to break
1. **No invented detail.** Not a date, a name, a quotation, a parcel number, a vote total, or a statistic. **If a source does not say it, you do not write it.** This includes atmospheric invention: you do not know what anyone in a 1971 subdivision was thinking.
2. **No composite or imagined characters.** Real, cited people only. This course gives you Salathiel Fisher, Clarence H. Geist, Judge Steven Nation, Mayor Scott Fadness, Board President Tiffany Pascoe, Superintendent Matt Kegley, Fortville Council President Tonya Davis, and a resident named Diana Callahan who is quoted saying she does not expect much to change. **That is more than enough material.**
3. **No invented dialogue**, including "he might have said."
4. **Private homes are private.** Do not publish a current resident's name with their address, do not photograph into windows, and do not knock uninvited. **Affluence is not consent.**
5. **No suburb bashing, and no suburb flattering.** A subdivision is where roughly a hundred thousand people live. **Contempt for it is as lazy as sentimentality about it**, and both save the writer the trouble of reading an ordinance.
6. **Credit what was built.** A school district that educates 21,000 students, a city that grew from 344 people to the fourth largest in Indiana, a community that fills a stadium for a game between two of its own schools, and a Quaker town two counties' worth of people passed through on the way north. **A piece that only inventories mechanisms is an incomplete report.**
7. **Do not import course 1's moral conclusions.** The two courses share a metropolitan area and a method. **They do not share a verdict**, and pasting one onto the other is exactly the analytic laziness both courses were built to prevent.
8. **Say what you did to a number.** If you adjusted for inflation, converted a rate to a dollar figure, or combined two sources, say so and say how.

## What good looks like
A short, checkable piece in which every sentence is either something you read in a named source or something you clearly mark as unresolved, and in which the prose is still good. **Those two standards do not conflict.** A town that took its identity from the mud, a family holding out four years against an annexation and losing on a rule from 1874, 710 signatures collected one sewer connection at a time, a district in the richest county in the state ranked in the bottom two percent for state aid: **none of that needs decorating.**

## Sources
- Hamilton County, Indiana. (2012). *2012 general election results summary*. https://secure2.hamiltoncounty.in.gov/Elections/2012G/results/ElectionSummary.htm
- Indianapolis Business Journal. (2024, August 2). *Fishers looks to annex 994 acres, add up to 3,000 residents*. https://www.ibj.com/articles/fishers-looks-to-annex-994-acres-add-up-to-3000-residents
- Encyclopedia of Indianapolis. (n.d.-d). *Geist Reservoir*. https://indyencyclopedia.org/geist-reservoir/
- Hamilton Southeastern Schools. (n.d.-b). *Revenue sources*. https://www.hseschools.org/community/finances/revenue-sources`,
      recallContent: [
        {
          prompt: "What is the difference between a topic and a subject in this assignment?",
          answer: "'The suburbs' is a topic. '994 acres, 960 parcels, 710 of them already waived' is a subject. So is one plat, one referendum, one fiscal plan, or the 45 homesteads under Geist Reservoir.",
        },
        {
          prompt: "What are the four columns of the chronology you build before writing, and what does an empty column mean?",
          answer: "Date, event, instrument, source. An empty instrument column means you have a story rather than a documented decision.",
        },
        {
          prompt: "State the two distinctions the craft rules insist on.",
          answer: "Separate a mechanism from a flow: you may describe how a system routes money but not claim to have measured where money went. And separate a consequence from an intention: a reservoir produced expensive shoreline, which is not evidence about why it was built.",
        },
        {
          prompt: "Why does the assignment ban both suburb bashing and suburb flattering?",
          answer: "Because a subdivision is where roughly a hundred thousand people live, and contempt for it is as lazy as sentimentality about it. Both save the writer the trouble of reading an ordinance.",
        },
        {
          prompt: "Which paragraph is required in every submission, and which of course 1's habits must not be imported?",
          answer: "At least one paragraph on what you could not establish. And course 1's moral conclusions: the two courses share a metropolitan area and a method, not a verdict.",
        },
      ],
    },
    {
      slug: "ms-what-comes-next",
      title: "20 · What this course set up, and what it left out",
      section: "Section 6 · Write",
      body: `You have now run the six-beat site template on a suburb. **Course 1 ran it on a cleared district. That the same six questions work on both is the finding**, and it is worth more than any single fact in either course.

| Beat | What you did here | What you can now do anywhere |
|---|---|---|
| **1. Then** | Treated a nickname as a lead, and read a county's growth out of the decennial census | Establish what a place was from institutional sources, and refuse a claim a source does not carry |
| **2. Built** | Read the plat, the street hierarchy, the school site formula and a reservoir | Tell what a built form assumes about the household that lives in it |
| **3. Powers** | Learned four instruments and traced each to a named body, statute and date | Ask "who decided, under what statute, on what record" about any boundary |
| **4. Now** | Built an observation brief before seeing the place, and learned that the boundaries are invisible | Look at a street with questions instead of impressions |
| **5. Next** | Found a referendum on a ballot that has not been voted on yet | Participate in a live decision rather than commenting on a finished one |
| **6. Write** | Wrote grounded nonfiction under an evidence standard | Publish something the next researcher can build on |

**What you can do that you could not do before.**
- Name four different jurisdictional boundaries over one piece of ground, and say which body moves each one.
- Explain why a school district line almost never moves when a city limit does.
- Read a remonstrance waiver as the thing that decides an annexation twenty years before it happens.
- Explain why a constitutional tax cap produces school referenda, and why a wealthy district still needs one.
- Test a claim, including one of your own, against a chronology and a jurisdiction check, **and report it when the claim loses.**

**What this course deliberately did not cover, and why.**
- **The Crispus Attucks and high school gymnasium story.** It is course 2 of this cluster, and it is where the segregation half of the school district argument actually lives. **This course carries the boundary mechanics; that one carries the schools.**
- **The Speedway and the exclusion story attached to it.** Course 3.
- **Benjamin Harrison and federal voting rights.** Course 5. **Fort Harrison and the federal government as landowner.** Course 6.
- **The interior politics of Hamilton Southeastern Schools.** Board elections, curriculum disputes and personnel are live local issues with organised participants on several sides, and **a course about boundary instruments has no business narrating them from a distance.**
- **Any claim about the intent behind a specific plat, covenant, annexation or district line.** The recorded documents exist; **none has been read into this course**, and lesson 12 says so in the text.
- **Any claim that a tax base moved from one county to another.** Refused in lesson 11 and again in lesson 12. **No longitudinal study was found, so no such claim is made.**

**The unopened sources, which are the next real work.** The Hamilton County school reorganization committee's plan and minutes from the early 1960s. The recorded remonstrance waivers on those 710 southeast parcels. The Fishers southeast annexation fiscal plan of September 5, 2024, and the Geist annexation fiscal plan before it. The Fishers 2040 comprehensive plan itself. The Hamilton Superior Court file in the Geist litigation. **All public or requestable, and none of them read here.** If you want to make an original contribution to this story rather than restate it, that is the list.

**Two closing observations, one about each end of this cluster.**

**About this place.** A muddy railroad switch with 344 people in 1960 became, within one lifetime, the fourth largest city in Indiana, with a school district of 21,000 students and a stadium that fills for a game between two of its own high schools. **That is a real achievement by real people**, and nothing in Section 3 is a reason to think otherwise. The instruments are the subject because the instruments are **public, checkable, and still in use**, which makes them the part of the story a citizen can actually do something about.

**About the pair.** Twenty miles and thirty years apart, the same state legislature wrote the statutes that cleared one place and enabled another. **The blight designation and the remonstrance waiver are both instruments. The eminent domain filing and the annexation ordinance are both public records. The Redevelopment Commission and the City Council are both bodies with minutes.** Learn to read either one and you can read both, **and reading both is the only way to see that they were never two stories.**

**That is the whole method, and it is why these courses exist.**

## Sources
- Encyclopedia of Indianapolis. (n.d.-a). *Fishers*. https://indyencyclopedia.org/fishers/
- Encyclopedia of Indianapolis. (n.d.-c). *Hamilton County*. https://indyencyclopedia.org/hamilton-county/
- Hamilton Southeastern Schools. (n.d.-b). *Revenue sources*. https://www.hseschools.org/community/finances/revenue-sources
- Wachter, J. (2014, May). *40 years after Unigov: Indianapolis and Marion County's experience with consolidated government*. The Abell Foundation. https://abell.org/wp-content/uploads/2022/02/ec-unigov514.pdf`,
      recallContent: [
        {
          prompt: "What is the actual product of this course?",
          answer: "The six-beat site template, proved to work on a suburb as well as on a cleared district. Course 1 ran it on Indiana Avenue; this ran it on Fishers and Hamilton County, and that the same six questions work on both is the finding.",
        },
        {
          prompt: "Name three things you can do after this course that you could not do before.",
          answer: "Name four jurisdictional boundaries over one piece of ground and say which body moves each; explain why a school district line almost never moves when a city limit does; read a remonstrance waiver as deciding an annexation decades in advance; and explain why a constitutional tax cap produces school referenda.",
        },
        {
          prompt: "Which two claims does this course explicitly refuse to make?",
          answer: "Any claim about the intent behind a specific plat, covenant, annexation or district line, because the recorded documents have not been read here; and any claim that a tax base moved from Marion County to Hamilton County, because no longitudinal study was found.",
        },
        {
          prompt: "Name the unopened sources that would advance this story.",
          answer: "The Hamilton County school reorganization committee's plan and minutes, the recorded remonstrance waivers on the 710 southeast parcels, the September 5, 2024 southeast annexation fiscal plan and the earlier Geist one, the Fishers 2040 plan itself, and the Hamilton Superior Court file in the Geist litigation.",
        },
        {
          prompt: "What is the closing observation about the pair of courses?",
          answer: "The same state legislature wrote the statutes that cleared one place and enabled another. Blight designation and remonstrance waiver are both instruments; eminent domain filings and annexation ordinances are both public records; the Redevelopment Commission and the City Council are both bodies with minutes. Reading both is the only way to see they were never two stories.",
        },
      ],
    },
    // <<< APPEND NEXT SECTION ABOVE THIS LINE >>>
  ],
};
