// Authored "The Great Migration: How Six Million People Remade America (and the World)" — a
// cited, high-school-level cultural-history course on Learn.WitUS (BVC). It is a DISTINCT,
// companion course to the existing homeschool-oriented "The Great Migration: How Six Million
// People Remade America" (slug `great-migration`): this one is pitched at high schoolers, is
// built on Isabel Wilkerson's three-family narrative frame, and carries an explicit GLOBAL
// pillar ("and the World") — how the culture, politics, and moral argument of the Migration
// traveled beyond U.S. borders. The two courses cross-reference each other rather than repeat.
//
// Sourcing discipline (the load-bearing part of this file):
//   * Every teaching lesson carries APA 7 in-line citations and a `## Sources` bibliography.
//   * NOTHING here is quoted or asserted from memory. Every date, name, statistic, and book
//     title was checked against a source before authoring: the U.S. National Archives and
//     Census framing of the Migration; standard scholarship (Wilkerson, 2010; Lemann, 1991;
//     Grossman, 1989; Marks, 1989; Hirsch, 1983; Dudziak, 2000); the Chicago Defender's own
//     documented record; and the holding of Shelley v. Kraemer (1948) read from the reporter.
//   * Isabel Wilkerson's three real subjects — Ida Mae Brandon Gladney (Mississippi → Chicago,
//     1937), George Swanson Starling (Florida → Harlem, 1945), and Robert Joseph Pershing
//     Foster (Louisiana → California, 1953) — are used ONLY as she documented them, cited, and
//     are never embellished, quoted from memory, or given invented dialogue.
//   * Where the record is genuinely contested — the exact decade-by-decade migrant counts, the
//     total (commonly "about six million"), the share of Black Americans in the South before and
//     after, whether the boll weevil was a major or minor push, and how much the 1930s HOLC
//     "redlining" maps CAUSED versus REFLECTED segregation — the lesson attributes the figure
//     and hedges rather than asserting a tidy number. Teaching students to notice that gap is
//     part of the point (this platform's "verify, don't trust blindly" DNA).
//   * No fabricated characters. Second-person address and real, cited figures only.

import type { AuthoredCourse } from "./authored-course";

export const GREAT_MIGRATION_AND_THE_WORLD_COURSE: AuthoredCourse = {
  title: "The Great Migration: How Six Million People Remade America (and the World)",
  description:
    "A cited, high-school-level history of the Great Migration, the movement of roughly six million Black Americans out of the rural South between about 1916 and 1970, and the country and culture they remade. The course follows the shape of the move itself: the forces that pushed people out (Jim Crow, sharecropping and debt peonage, racial terror, the boll weevil), the forces that pulled them north and west (wartime factory labor, the Chicago Defender, kinship chains), the three great routes they traveled, the cities and culture they built (the Harlem Renaissance, Chicago blues, Motown, the Black church and press, Black political power and a growing Black middle class), the costs they were made to pay (redlining, restrictive covenants, the second ghetto, white flight, deindustrialization), and the pillar most surveys skip: how the culture and the moral argument of the Migration went global. Built on Isabel Wilkerson's three-family narrative frame and standard scholarship (Wilkerson, Lemann, Grossman, Marks), with primary sources pointed to their real archives. Companion to this platform's homeschool 'Great Migration' course and its Hoodoo, History of Unions, and Pan-Africanism courses.",
  lessons: [
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 1 · What the Great Migration was
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "gmw-what-and-scale",
      title: "1 · What the Great Migration was, and how we measure it",
      section: "Section 1 · The shape of the Migration",
      body: `Between roughly **1916 and 1970**, about **six million** African Americans left the American South and moved to cities in the North, the Midwest, and the West. Historians call this the **Great Migration**, and by scale it is one of the largest movements of people inside a single country in the twentieth century (National Archives, n.d.).

**Start with the demographic fact, because it is the whole story in one line.** At the beginning of the twentieth century, about **90%** of Black Americans lived in the South. By 1970, only about **52%** did (National Archives, n.d.). In seventy years, a people who had been overwhelmingly Southern and rural became, in large part, Northern and urban. Everything else in this course, the music, the politics, the neighborhoods, the costs, the global reach, grows out of that one shift in where people lived.

**"About six million" is an estimate, and you should treat it like one.** Different scholars, counting different years and using different methods, land on somewhat different totals. Isabel Wilkerson, whose book frames this course, describes "six million black Southerners" leaving between about 1915 and 1970 (Wilkerson, 2010). The National Archives dates the movement 1916-1970 and uses the same round figure (National Archives, n.d.). When a number is this big and this old, precision is a warning sign, not a virtue, the honest version is "about six million," and this course will keep saying "about."

**Why "the South" is doing so much work here.** Historians mean the states of the former Confederacy and the border South, places where, after Reconstruction collapsed, Black life was governed by **Jim Crow**: legally enforced segregation, near-total disenfranchisement, and an economy (sharecropping) built to keep Black families in debt. Sections 2 and 3 take the "why" apart carefully. For now, hold onto the size of the thing: six million individual decisions, made kitchen table by kitchen table, that added up to a nation remaking itself.

**A note on how this course is built.** Rather than a list of dates, it follows Wilkerson's method: three real people, whose journeys stand in for three great routes out of the South. You will meet them properly in Section 4, but their names are worth planting now, **Ida Mae Brandon Gladney**, who left Mississippi for Chicago in 1937; **George Swanson Starling**, who left Florida for Harlem in 1945; and **Robert Joseph Pershing Foster**, who left Louisiana for California in 1953 (Wilkerson, 2010).

:::reveal Roughly how many people left, over what years, and how did the share of Black Americans living in the South change from the start of the 1900s to 1970? ||| About six million people, from roughly 1916 to 1970. About 90% of Black Americans lived in the South at the start of the twentieth century; by 1970 only about 52% did.

## Sources
- National Archives. (n.d.). *The Great Migration (1910–1970)*. https://www.archives.gov/research/african-americans/migrations/great-migration
- Wilkerson, I. (2010). *The warmth of other suns: The epic story of America's great migration*. Random House.`,
      recallContent: [
        {
          prompt: "About how many Black Americans left the South during the Great Migration, and over roughly what span of years?",
          answer: "About six million, from roughly 1916 to 1970. 'About' is doing real work, the total is an estimate.",
        },
        {
          prompt: "What share of Black Americans lived in the South at the start of the 1900s, versus 1970?",
          answer: "About 90% at the start of the twentieth century; about 52% by 1970 (National Archives).",
        },
      ],
    },
    {
      slug: "gmw-waves-and-streams",
      title: "2 · Two waves and three streams",
      section: "Section 1 · The shape of the Migration",
      body: `The Great Migration was not one smooth flow. Historians usually split it into **two waves**, and geographers trace **three streams**. Getting these straight now will make the rest of the course click into place.

**Two waves.**
- The **First Great Migration**, roughly **1916-1940**. The sharp acceleration came with **World War I**, when Northern factories lost their supply of European immigrant labor and, for the first time, recruited Black Southern workers in large numbers (Section 3). Commonly cited estimates put this first wave at around **1.5 million** people, a rough figure (Britannica, n.d.).
- The **Second Great Migration**, roughly **1940-1970**, driven by **World War II** defense industries and reaching much further west, to the shipyards of California, Oregon, and Washington. This second wave is usually estimated as larger, on the order of **5 million** people, though the two waves overlap and the counts are approximate (Britannica, n.d.).

Notice that 1.5 million plus 5 million is more than six million. That is not a mistake you should hide; it is a sign that these are **estimates counted over overlapping periods with fuzzy edges**, not receipts. Use them for scale, not arithmetic.

**Three streams.** Because the South-to-North railroads ran mostly straight up the map, people tended to move due north from wherever they started, which produced three broad corridors:

| Stream | From (roughly) | To (roughly) |
| --- | --- | --- |
| Eastern | Florida, Georgia, the Carolinas, Virginia | Washington, D.C., Philadelphia, New York (Harlem) |
| Midwestern | Mississippi, Alabama, Tennessee, Arkansas | Chicago, Detroit, Cleveland, Milwaukee |
| Western | Louisiana, Texas, Oklahoma | Los Angeles, Oakland, the West Coast |

Wilkerson (2010) built her entire book on this pattern by choosing one person for each stream, a device this course borrows in Section 4. The streams matter because **who your neighbors were in the North depended on where in the South you had come from.** A Black Chicagoan in 1945 was overwhelmingly likely to have Mississippi or Arkansas roots; a Black Angeleno, Louisiana or Texas roots. Southern regions did not just empty out, they reassembled, transplanted, in specific Northern cities.

:::reveal Name the two waves of the Great Migration and the war that accelerated each, then name the three geographic streams. ||| First Great Migration (roughly 1916-1940), accelerated by World War I; Second Great Migration (roughly 1940-1970), accelerated by World War II. The three streams ran Eastern (to D.C./Philadelphia/New York), Midwestern (to Chicago/Detroit), and Western (to Los Angeles/Oakland).

## Sources
- Britannica, T. Editors of Encyclopaedia. (n.d.). *Great Migration*. In *Encyclopædia Britannica*. https://www.britannica.com/event/Great-Migration
- Wilkerson, I. (2010). *The warmth of other suns: The epic story of America's great migration*. Random House.`,
    },
    {
      slug: "gmw-quiz-shape",
      title: "3 · Quiz: the shape of the Migration",
      section: "Section 1 · The shape of the Migration",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "About how many Black Americans left the South during the Great Migration?",
            options: ["About six hundred thousand", "About six million", "About sixteen million", "About sixty million"],
            correctIndex: 1,
            explanation: "The standard round figure is about six million, and it is an estimate, so historians say 'about' (National Archives; Wilkerson, 2010).",
            sourceLessonSlug: "gmw-what-and-scale",
          },
          {
            prompt: "What years does this course use to bracket the Great Migration?",
            options: ["Roughly 1865-1900", "Roughly 1916-1970", "Roughly 1945-1980", "Roughly 1900-1920"],
            correctIndex: 1,
            explanation: "The National Archives dates the movement 1916-1970; Wilkerson uses about 1915-1970. Either way, it spans roughly five decades.",
            sourceLessonSlug: "gmw-what-and-scale",
          },
          {
            prompt: "At the start of the twentieth century, about what share of Black Americans lived in the South?",
            options: ["About 50%", "About 70%", "About 90%", "About 25%"],
            correctIndex: 2,
            explanation: "About 90% at the start of the 1900s, falling to about 52% by 1970 (National Archives). That single shift is the story in one line.",
            sourceLessonSlug: "gmw-what-and-scale",
          },
          {
            prompt: "By 1970, about what share of Black Americans still lived in the South?",
            options: ["About 10%", "About 30%", "About 52%", "About 80%"],
            correctIndex: 2,
            explanation: "About 52% by 1970, down from about 90% (National Archives). Roughly half a people had relocated in seventy years.",
            sourceLessonSlug: "gmw-what-and-scale",
          },
          {
            prompt: "Why does this course keep saying 'about six million' rather than an exact number?",
            options: [
              "Because the government never counted it",
              "Because the total is an estimate, scholars counting different years by different methods get somewhat different figures",
              "Because the real number is secret",
              "Because six million is a made-up number with no basis",
            ],
            correctIndex: 1,
            explanation: "For a number this large and this old, false precision is a warning sign. Different scholars land on different totals, so the honest version is 'about.'",
            sourceLessonSlug: "gmw-what-and-scale",
          },
          {
            prompt: "Which war accelerated the FIRST Great Migration (roughly 1916-1940)?",
            options: ["The Civil War", "World War I", "World War II", "The Korean War"],
            correctIndex: 1,
            explanation: "World War I cut off European immigrant labor to Northern factories, which then recruited Black Southern workers for the first time in large numbers.",
            sourceLessonSlug: "gmw-waves-and-streams",
          },
          {
            prompt: "Which war accelerated the SECOND Great Migration (roughly 1940-1970)?",
            options: ["World War I", "World War II", "The Vietnam War", "The Spanish-American War"],
            correctIndex: 1,
            explanation: "World War II defense industries, including West Coast shipyards, drew the second, larger wave, which reached much further west.",
            sourceLessonSlug: "gmw-waves-and-streams",
          },
          {
            prompt: "The second wave reached much further into which region than the first?",
            options: ["The Deep South", "New England only", "The West (California, Oregon, Washington)", "Canada"],
            correctIndex: 2,
            explanation: "World War II shipyards on the Pacific coast pulled the Western stream into full force during the second wave.",
            sourceLessonSlug: "gmw-waves-and-streams",
          },
          {
            prompt: "Commonly cited (rough) estimates put the first wave at about ___ and the second at about ___.",
            options: ["1.5 million; 5 million", "5 million; 1.5 million", "6 million; 6 million", "300,000; 900,000"],
            correctIndex: 0,
            explanation: "Roughly 1.5 million in the first wave and 5 million in the second, approximate figures counted over overlapping periods (Britannica).",
            sourceLessonSlug: "gmw-waves-and-streams",
          },
          {
            prompt: "Why do 1.5 million plus 5 million not add neatly to 'about six million'?",
            options: [
              "Because the numbers are wrong and should be ignored",
              "Because these are estimates over overlapping periods with fuzzy edges, use them for scale, not arithmetic",
              "Because a million people were double-counted on purpose",
              "Because the South gained population during the Migration",
            ],
            correctIndex: 1,
            explanation: "The wave figures are estimates with fuzzy start and end dates. They convey scale; they are not meant to sum exactly.",
            sourceLessonSlug: "gmw-waves-and-streams",
          },
          {
            prompt: "The Midwestern stream carried people from Mississippi, Alabama, and Arkansas mainly to which cities?",
            options: ["Los Angeles and Oakland", "Chicago and Detroit", "Boston and Providence", "Miami and Atlanta"],
            correctIndex: 1,
            explanation: "Railroads ran roughly due north, so Deep-South migrants filled Chicago, Detroit, and other Midwestern cities.",
            sourceLessonSlug: "gmw-waves-and-streams",
          },
          {
            prompt: "The Eastern stream carried people from Florida, Georgia, and the Carolinas mainly to which cities?",
            options: [
              "Washington, D.C., Philadelphia, and New York",
              "Chicago and Milwaukee",
              "Houston and Dallas",
              "Seattle and Portland",
            ],
            correctIndex: 0,
            explanation: "The Eastern seaboard corridor fed D.C., Philadelphia, and New York (Harlem).",
            sourceLessonSlug: "gmw-waves-and-streams",
          },
          {
            prompt: "The Western stream carried people from Louisiana and Texas mainly to which area?",
            options: ["New England", "The Upper Midwest", "Los Angeles, Oakland, and the West Coast", "The Carolinas"],
            correctIndex: 2,
            explanation: "Louisiana and Texas roots led west to Los Angeles, Oakland, and the Pacific coast.",
            sourceLessonSlug: "gmw-waves-and-streams",
          },
          {
            prompt: "What does the three-streams pattern tell you about a Black Chicagoan in 1945?",
            options: [
              "They were most likely born in Chicago",
              "They were overwhelmingly likely to have roots in the Deep South, especially Mississippi or Arkansas",
              "They had probably come from California",
              "They were most likely a European immigrant",
            ],
            correctIndex: 1,
            explanation: "Because the streams ran roughly straight north, Southern regions reassembled in specific Northern cities, Mississippi and Arkansas roots concentrated in Chicago.",
            sourceLessonSlug: "gmw-waves-and-streams",
          },
          {
            prompt: "Whose three-family narrative frame is this course built on?",
            options: [
              "Nicholas Lemann's",
              "Isabel Wilkerson's",
              "James Grossman's",
              "Carole Marks's",
            ],
            correctIndex: 1,
            explanation: "Isabel Wilkerson's The Warmth of Other Suns (2010) follows one person per stream, Ida Mae Gladney, George Starling, and Robert Foster, a device this course borrows.",
            sourceLessonSlug: "gmw-what-and-scale",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 2 · Why they left: the push
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "gmw-jim-crow",
      title: "4 · Jim Crow: the law that made the South a cage",
      section: "Section 2 · Why they left: the push",
      body: `People do not uproot their whole lives on a whim. To understand the Migration you have to understand what six million people were leaving, and the first answer is a system of law with a nickname: **Jim Crow**.

**"Separate but equal" was made constitutional in 1896.** In *Plessy v. Ferguson*, the Supreme Court upheld a Louisiana law requiring separate railroad cars for Black and white passengers, ruling 7 to 1 that segregation did not violate the Fourteenth Amendment as long as facilities were "equal" (*Plessy v. Ferguson*, 1896). In practice they were never equal, and everyone knew it. *Plessy* handed the South a green light, and over the next decades states built segregation into schools, streetcars, waiting rooms, drinking fountains, hospitals, cemeteries, and courtrooms.

**The vote was taken away on purpose.** Between the 1890s and the early 1900s, Southern states rewrote their constitutions and election laws to strip Black men of the ballot they had won after the Civil War, using tools designed to disenfranchise Black voters while sounding race-neutral:
- **Poll taxes** (you had to pay to vote, sometimes cumulatively for past years);
- **Literacy tests** graded by a white registrar who could pass or fail whomever he chose;
- **Grandfather clauses** that waived those requirements for men whose grandfathers could vote before Reconstruction (which no Black Southerner's could);
- the **white primary**, which barred Black voters from the Democratic primary that was the only election that mattered in a one-party South. The Supreme Court did not strike the white primary down until *Smith v. Allwright* in 1944 (*Smith v. Allwright*, 1944).

**And the humiliation was constant and enforceable.** Jim Crow was not only signs and statutes. It was a code of daily behavior that a Black Southerner broke at real risk: stepping off the sidewalk, the wrong tone of voice, meeting a white person's eyes too long. Wilkerson (2010) describes a caste system so total that leaving it felt, to many, less like moving and more like defecting from a country. Grossman (1989), studying Chicago's newcomers, found that migrants themselves described the North in the language of freedom and the South in the language of bondage.

Jim Crow, then, is push factor number one: not poverty alone, but a legal order engineered to keep an entire people poor, voteless, and afraid.

:::reveal Name three legal tools Southern states used to take the vote away from Black men, and the 1896 case that made "separate but equal" the law. ||| Poll taxes, literacy tests (graded by white registrars), grandfather clauses, and the white primary were the disenfranchisement tools. Plessy v. Ferguson (1896) made "separate but equal" constitutional.

## Sources
- *Plessy v. Ferguson*, 163 U.S. 537 (1896).
- *Smith v. Allwright*, 321 U.S. 649 (1944).
- Grossman, J. R. (1989). *Land of hope: Chicago, Black Southerners, and the Great Migration*. University of Chicago Press.
- Wilkerson, I. (2010). *The warmth of other suns: The epic story of America's great migration*. Random House.`,
      recallContent: [
        {
          prompt: "What 1896 Supreme Court case made 'separate but equal' constitutional?",
          answer: "Plessy v. Ferguson (1896), decided 7 to 1. In practice, separate facilities were never equal.",
        },
        {
          prompt: "What was the 'white primary,' and when did the Supreme Court strike it down?",
          answer: "A rule barring Black voters from the Democratic primary (the only election that mattered in the one-party South). Struck down in Smith v. Allwright (1944).",
        },
      ],
    },
    {
      slug: "gmw-sharecropping",
      title: "5 · Sharecropping and debt peonage: an economy built to trap",
      section: "Section 2 · Why they left: the push",
      body: `Jim Crow was the law. **Sharecropping** was the economy underneath it, and it was engineered so that hard work rarely led out of debt.

**How the system worked.** After the Civil War, most Southern land stayed in the hands of white owners, while the people who worked it, many of them formerly enslaved and their descendants, had no land and no cash. The solution that emerged was sharecropping: a family farmed an owner's land in exchange for a share of the crop, usually about half. Because the family had no money to live on until harvest, they bought food, seed, tools, and clothing on credit from the landowner or a **furnishing merchant**, at marked-up prices and steep interest, against the crop they had not yet grown (Wilkerson, 2010).

**"Settling up" was where the trap sprang.** At harvest, the owner did the accounting, alone, in a system where the cropper often could not legally challenge a white man's numbers and had been kept from the literacy to check them. Wilkerson (2010) describes croppers who brought in a good cotton crop and were still told, year after year, that they had come out "even" or that they owed more than they had earned. A family could work an entire year and end it deeper in debt than it began.

**When that debt was used to hold people in place, it became debt peonage.** In much of the South it was effectively illegal to leave while you "owed" the landowner, and sheriffs and courts enforced those debts. Historians have documented forms of forced and coerced labor that outlasted slavery by decades (a system the historian Douglas Blackmon called "slavery by another name"). For a sharecropping family, the arithmetic was brutally simple: stay, and you would likely never get ahead; and leaving could itself be treated as a crime.

**This is the economic engine of the Migration.** When Northern factories finally offered a cash wage paid directly to the worker (Section 3), they were not just offering more money. They were offering the first exit most Black Southern families had ever seen from an economy specifically designed to keep them from accumulating anything.

:::reveal In sharecropping, why could a family work hard all year and still end up owing money? ||| Because they bought everything on credit at marked-up prices and interest, and the landowner alone did the "settling up" at harvest, in a system where a cropper could not safely challenge a white man's numbers. When that debt was used to keep them from leaving, it became debt peonage.

## Sources
- Wilkerson, I. (2010). *The warmth of other suns: The epic story of America's great migration*. Random House.
- Blackmon, D. A. (2008). *Slavery by another name: The re-enslavement of Black Americans from the Civil War to World War II*. Doubleday.`,
    },
    {
      slug: "gmw-terror-and-weevil",
      title: "6 · Terror, and the boll weevil: the last straws",
      section: "Section 2 · Why they left: the push",
      body: `Law and debt held people in place. **Terror** and a **beetle** helped push them out.

**Racial terror was the enforcement arm of Jim Crow.** Between 1877 and 1950, the Equal Justice Initiative has documented more than **4,400** racial terror lynchings of Black Americans, public killings, often by mobs, meant not only to murder an individual but to terrorize a whole community into submission (Equal Justice Initiative [EJI], 2017). Counts vary between projects and are certainly undercounts, but the scale and purpose are not in doubt. A lynching in the next county was a message to everyone who heard about it, and news of it traveled with families who left.

**The violence did not stop at the Southern border, and 1919 proved it.** In the summer after World War I, white mobs attacked Black communities in more than three dozen cities and towns across the country. The writer and NAACP official James Weldon Johnson named it the **"Red Summer."** In Chicago, riots left 38 people dead; the worst killing was in rural **Elaine, Arkansas**, where estimates of Black dead run from about 100 to 240 (National Archives, n.d.-b). Red Summer is a warning this course will return to: the North was a destination, not a promised land.

**Now the beetle.** The **boll weevil**, a cotton-eating insect, crossed into the United States from Mexico near Brownsville, Texas, around **1892**, and spread east across the cotton South, reaching essentially all cotton-growing regions by the mid-1920s (Britannica, n.d.-b). Where it hit, it could ruin a cotton crop, and cotton was the only thing a sharecropping economy grew. Ruined crops meant ruined croppers, and some landowners responded by pushing tenant families off the land entirely.

**But be careful here, this is a place where popular history oversimplifies.** It is tempting to say "the boll weevil caused the Great Migration," and you will see that claim made. It is too clean. The Migration was already underway before the weevil reached the Deep South, its timing does not line up neatly with the biggest migration surges, and scholars such as Carole Marks argue the pull of Northern industry and the push of Jim Crow and terror mattered more than any single crop failure (Marks, 1989). The honest version: the boll weevil was **one shock among several**, one that made a bad situation worse and gave already-decided families a final reason to buy a train ticket.

:::reveal Was the boll weevil the single cause of the Great Migration? Explain. ||| No. It was one economic shock among several. The Migration was already underway before the weevil reached the Deep South, and scholars argue Jim Crow, terror, and the pull of Northern industry mattered more. It made a bad situation worse rather than starting the movement.

## Sources
- Equal Justice Initiative. (2017). *Lynching in America: Confronting the legacy of racial terror* (3rd ed.). https://lynchinginamerica.eji.org/report/
- National Archives. (n.d.-b). *Racial violence and the Red Summer*. https://www.archives.gov/research/african-americans/wwi/red-summer
- Britannica, T. Editors of Encyclopaedia. (n.d.-b). *Boll weevil*. In *Encyclopædia Britannica*. https://www.britannica.com/animal/boll-weevil
- Marks, C. (1989). *Farewell—We're good and gone: The great Black migration*. Indiana University Press.`,
      recallContent: [
        {
          prompt: "What did the 'Red Summer' of 1919 show about the North?",
          answer: "That anti-Black mob violence was national, not only Southern. White mobs attacked Black communities in dozens of cities (38 died in Chicago; the Elaine, Arkansas massacre was the worst). The North was a destination, not a promised land.",
        },
        {
          prompt: "Roughly how many racial terror lynchings has the Equal Justice Initiative documented, and over what years?",
          answer: "More than 4,400 of Black Americans between 1877 and 1950 (an undercount; counts vary between projects).",
        },
      ],
    },
    {
      slug: "gmw-quiz-push",
      title: "7 · Quiz: why they left",
      section: "Section 2 · Why they left: the push",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What did the 1896 case Plessy v. Ferguson establish?",
            options: [
              "That segregation was unconstitutional",
              "That 'separate but equal' segregation did not violate the Constitution",
              "That Black men could not be barred from voting",
              "That sharecropping was illegal",
            ],
            correctIndex: 1,
            explanation: "Plessy upheld Louisiana's segregated-railcar law 7 to 1, making 'separate but equal' constitutional. Facilities were never actually equal.",
            sourceLessonSlug: "gmw-jim-crow",
          },
          {
            prompt: "Which of these was NOT a tool used to disenfranchise Black voters in the Jim Crow South?",
            options: ["Poll taxes", "Literacy tests", "The white primary", "Automatic voter registration"],
            correctIndex: 3,
            explanation: "Poll taxes, literacy tests, grandfather clauses, and the white primary were all used to take the vote away. Automatic registration is a modern, opposite idea.",
            sourceLessonSlug: "gmw-jim-crow",
          },
          {
            prompt: "What was the 'white primary'?",
            options: [
              "A school for white children only",
              "A rule barring Black voters from the Democratic primary, the only election that mattered in the one-party South",
              "A whites-only railroad car",
              "The first primary election of the year",
            ],
            correctIndex: 1,
            explanation: "In the one-party South, the Democratic primary decided everything, so barring Black voters from it erased their vote. Struck down in Smith v. Allwright (1944).",
            sourceLessonSlug: "gmw-jim-crow",
          },
          {
            prompt: "In sharecropping, why could a hardworking family still end a good year in debt?",
            options: [
              "They refused to work",
              "They bought supplies on credit at marked-up prices and the landowner alone did the 'settling up'",
              "Cotton had no value",
              "The government taxed all their earnings",
            ],
            correctIndex: 1,
            explanation: "Credit at inflated prices plus a rigged, unchallengeable accounting at harvest meant a family could work all year and still be told it owed money.",
            sourceLessonSlug: "gmw-sharecropping",
          },
          {
            prompt: "When a family was legally prevented from leaving because they 'owed' a landowner, the system is called:",
            options: ["A grandfather clause", "Debt peonage", "The white primary", "Redlining"],
            correctIndex: 1,
            explanation: "Debt peonage used debt to hold laborers in place, enforced by sheriffs and courts, a form of coerced labor that outlasted slavery by decades.",
            sourceLessonSlug: "gmw-sharecropping",
          },
          {
            prompt: "What was the main PURPOSE of a lynching, beyond the murder itself?",
            options: [
              "To settle a legal dispute",
              "To terrorize an entire community into submission",
              "To recruit workers north",
              "To enforce a debt",
            ],
            correctIndex: 1,
            explanation: "The EJI documents lynching as racial terrorism: public killings meant to frighten a whole community, not only punish an individual.",
            sourceLessonSlug: "gmw-terror-and-weevil",
          },
          {
            prompt: "About how many racial terror lynchings of Black Americans has the Equal Justice Initiative documented for 1877-1950?",
            options: ["About 40", "About 400", "More than 4,400", "More than 44,000"],
            correctIndex: 2,
            explanation: "More than 4,400 (and considered an undercount). Different projects reach somewhat different totals.",
            sourceLessonSlug: "gmw-terror-and-weevil",
          },
          {
            prompt: "What was the 'Red Summer' of 1919?",
            options: [
              "A record cotton harvest",
              "A wave of white-mob attacks on Black communities in dozens of U.S. cities after World War I",
              "A Communist uprising",
              "A heat wave that ruined crops",
            ],
            correctIndex: 1,
            explanation: "Named by James Weldon Johnson, it saw anti-Black violence in more than three dozen cities. The worst killing was the Elaine, Arkansas massacre.",
            sourceLessonSlug: "gmw-terror-and-weevil",
          },
          {
            prompt: "What did the Red Summer reveal about the North as a destination?",
            options: [
              "That it was completely free of racial violence",
              "That anti-Black violence was national, not only Southern, the North was a destination, not a promised land",
              "That migrants were unwelcome only in the South",
              "That the Migration had ended",
            ],
            correctIndex: 1,
            explanation: "Chicago's 1919 riot left 38 dead. The North offered jobs and the vote, but not safety from racism.",
            sourceLessonSlug: "gmw-terror-and-weevil",
          },
          {
            prompt: "The boll weevil first entered the United States around 1892 near:",
            options: ["Brownsville, Texas", "Chicago, Illinois", "Harlem, New York", "Atlanta, Georgia"],
            correctIndex: 0,
            explanation: "It crossed from Mexico near Brownsville, Texas, around 1892 and spread east across the cotton South by the mid-1920s.",
            sourceLessonSlug: "gmw-terror-and-weevil",
          },
          {
            prompt: "Why is it an oversimplification to say 'the boll weevil caused the Great Migration'?",
            options: [
              "Because the boll weevil never reached the South",
              "Because the Migration was already underway before the weevil hit the Deep South, and scholars say Jim Crow, terror, and Northern jobs mattered more",
              "Because cotton was not important",
              "Because the weevil helped cotton farmers",
            ],
            correctIndex: 1,
            explanation: "The weevil was one shock among several. Its timing does not line up neatly with the biggest surges, and Marks (1989) stresses industry's pull and Jim Crow's push.",
            sourceLessonSlug: "gmw-terror-and-weevil",
          },
          {
            prompt: "Which scholar argued that the pull of Northern industry mattered more than any single crop failure?",
            options: ["Homer Plessy", "Carole Marks", "James Weldon Johnson", "Douglas Blackmon"],
            correctIndex: 1,
            explanation: "Marks (1989) argued Northern industry actively recruited and 'orchestrated' migration, a corrective to boll-weevil-only stories.",
            sourceLessonSlug: "gmw-terror-and-weevil",
          },
          {
            prompt: "Why does this course call cash factory wages a genuine 'exit' for sharecropping families?",
            options: [
              "Because factories paid in cotton",
              "Because a wage paid directly to the worker was the first escape most had from an economy designed to keep them from accumulating anything",
              "Because factory work was easy",
              "Because it let them keep farming",
            ],
            correctIndex: 1,
            explanation: "Sharecropping was built to prevent Black families from getting ahead. A direct cash wage broke that trap for the first time.",
            sourceLessonSlug: "gmw-sharecropping",
          },
          {
            prompt: "Overall, the 'push' factors of Section 2 are best summarized as:",
            options: [
              "Only the boll weevil",
              "A legal order (Jim Crow), a rigged economy (sharecropping/debt peonage), and racial terror, with crop failure as one added shock",
              "High Northern wages alone",
              "A shortage of farmland",
            ],
            correctIndex: 1,
            explanation: "Push factors stacked: segregation and disenfranchisement, an economy built to trap, terror, and economic shocks like the weevil.",
            sourceLessonSlug: "gmw-jim-crow",
          },
          {
            prompt: "Douglas Blackmon's phrase 'slavery by another name' refers to:",
            options: [
              "The Harlem Renaissance",
              "Forms of forced and coerced labor (including debt peonage) that outlasted slavery by decades",
              "The boll weevil infestation",
              "The white primary",
            ],
            correctIndex: 1,
            explanation: "Blackmon (2008) documented coerced labor systems that persisted from the Civil War into the twentieth century.",
            sourceLessonSlug: "gmw-sharecropping",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 3 · Why they left: the pull
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "gmw-wwi-and-jobs",
      title: "8 · The pull: a war, a labor shortage, and a wage",
      section: "Section 3 · Why they left: the pull",
      body: `Push factors explain the pressure. They do not explain the timing. Black Southerners endured Jim Crow for decades before the great surge north. What changed around 1916 was on the other end of the journey: for the first time, the North needed them, and said so with a paycheck.

**World War I created the opening.** Northern factories, steel mills, meatpacking plants, auto works, railroads, had run for decades on a steady supply of European immigrant labor. When war broke out in Europe in 1914, that supply collapsed: immigration to the United States fell sharply, and then the U.S. entered the war in 1917 and pulled millions of men into the military. Industry suddenly faced a severe labor shortage in the middle of a wartime production boom (Grossman, 1989; National Archives, n.d.).

**So industry turned south.** Companies that had never hired Black workers began sending **labor agents** into the South to recruit them, sometimes paying train fare north in exchange for a signed work commitment. Carole Marks (1989) argues this recruitment was so deliberate and organized that the Migration was, in her words, "orchestrated in the board rooms of northern industrial enterprises", a useful correction to any picture of migrants as simply drifting north on their own. Southern states, alarmed at losing their cheap labor force, passed laws taxing or jailing labor agents to try to stop them (Grossman, 1989).

**The wage did the rest of the arguing.** A job in a Northern factory paid a cash wage, directly to the worker, several times what farm labor earned in the South, and it came without a rigged "settling up" at the end of the year. For a sharecropping family that had never been allowed to get ahead, even a hard, dangerous, low-status factory job was a raise and, more importantly, a wage they actually controlled (Wilkerson, 2010; Grossman, 1989).

**Then World War II did it again, bigger.** The same engine restarted in the 1940s. Wartime defense plants and shipyards, now stretching to the West Coast, created an even larger demand for labor, powering the Second Great Migration (Section 4). The pattern is worth naming: **the Great Migration tracked the labor needs of American industry at war.**

:::reveal Why did the great surge north begin around 1916 specifically, when Jim Crow was decades old? ||| Because World War I cut off European immigrant labor and pulled men into the military, creating a severe labor shortage in Northern industry. For the first time, factories recruited Black Southern workers and paid a cash wage several times what farm labor earned. The timing was set by industry's wartime need for workers.

## Sources
- Grossman, J. R. (1989). *Land of hope: Chicago, Black Southerners, and the Great Migration*. University of Chicago Press.
- Marks, C. (1989). *Farewell—We're good and gone: The great Black migration*. Indiana University Press.
- Wilkerson, I. (2010). *The warmth of other suns: The epic story of America's great migration*. Random House.
- National Archives. (n.d.). *The Great Migration (1910–1970)*. https://www.archives.gov/research/african-americans/migrations/great-migration`,
      recallContent: [
        {
          prompt: "How did World War I open the door to Northern factory jobs for Black Southerners?",
          answer: "It cut off European immigrant labor and drafted millions of men, creating a labor shortage. Northern industry recruited Black Southern workers for the first time, at a cash wage several times higher than Southern farm labor.",
        },
        {
          prompt: "What is Carole Marks's argument about how organized the Migration was?",
          answer: "That it was actively recruited and 'orchestrated in the board rooms of northern industrial enterprises,' not just a spontaneous drift of rural people north.",
        },
      ],
    },
    {
      slug: "gmw-defender-and-kin",
      title: "9 · The Chicago Defender and the kinship chain",
      section: "Section 3 · Why they left: the pull",
      body: `Industry supplied the jobs. But how did a sharecropper in Mississippi even learn that those jobs existed, or find the nerve to go? Two forces did that work: a **newspaper** and a **network of relatives**.

**The Chicago Defender was the loudest voice for leaving.** Founded in 1905 by **Robert Sengstacke Abbott**, the *Defender* became the most widely read Black newspaper in the country, and during World War I it campaigned openly for migration. It ran editorials, cartoons, and photographs praising Northern life, printed train schedules and Northern job listings, and even declared a **"Great Northern Drive"** for **May 15, 1917**, a symbolic day to leave (Grossman, 1989). Abbott's paper framed the move not as running away but as a bold claim on freedom and dignity.

**Getting it read in the South was itself an act of defiance.** The *Defender* was dangerous to be caught with in parts of the South, and some towns tried to ban it. It traveled anyway, largely through **Pullman porters**, the Black men who worked the railroad sleeping cars, who carried bundles of the paper south and left them where people would find them (Grossman, 1989). A single copy might be read aloud to a whole community, or passed hand to hand until it fell apart.

**But most people did not move because of a newspaper. They moved because of family.** The single most reliable engine of the Migration was the **kinship chain**: one person went north, found work and a place to stay, wrote home (sometimes tucking a few dollars or a train ticket into the envelope), and then sent for the next relative, who did the same. Wilkerson (2010) shows this pattern in each of her three subjects, and Grossman (1989) documents Chicago neighborhoods that filled up, block by block, with people from the same handful of Southern counties. A letter from a cousin who had actually made it was worth more than any editorial.

**This is why the streams from Section 1 held their shape.** Migration followed the lines of family and acquaintance, so people from one Southern place ended up clustered in one Northern place. The move looked, from a distance, like a flood. Up close, it was a relay.

:::reveal Name the newspaper that campaigned for migration, the men who smuggled it south, and the "engine" that actually moved most families. ||| The Chicago Defender (founded 1905 by Robert Abbott) campaigned for migration and declared a "Great Northern Drive" for May 15, 1917. Pullman porters carried it south past local bans. But the main engine was the kinship chain: one relative went, found work, and sent for the next.

## Sources
- Grossman, J. R. (1989). *Land of hope: Chicago, Black Southerners, and the Great Migration*. University of Chicago Press.
- Wilkerson, I. (2010). *The warmth of other suns: The epic story of America's great migration*. Random House.
- The Chicago Defender (1905–present). [Primary source: Black weekly newspaper, Chicago]. Archived collections, e.g., Library of Congress *Chronicling America*.`,
    },
    {
      slug: "gmw-quiz-pull",
      title: "10 · Quiz: what pulled them",
      section: "Section 3 · Why they left: the pull",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Why did the great surge north begin around 1916, decades after Jim Crow was in force?",
            options: [
              "Because the South suddenly became legal to leave",
              "Because World War I cut off European immigrant labor and created a Northern factory labor shortage",
              "Because sharecropping ended in 1916",
              "Because the boll weevil arrived in 1916",
            ],
            correctIndex: 1,
            explanation: "The timing was set by industry's wartime need for workers, not by any change in Southern law.",
            sourceLessonSlug: "gmw-wwi-and-jobs",
          },
          {
            prompt: "What did Northern companies send into the South to recruit Black workers?",
            options: ["Labor agents", "Boll weevils", "Poll taxes", "Pullman cars only"],
            correctIndex: 0,
            explanation: "Labor agents recruited workers, sometimes advancing train fare. Southern states passed laws taxing or jailing them to stem the loss of labor.",
            sourceLessonSlug: "gmw-wwi-and-jobs",
          },
          {
            prompt: "Carole Marks argued the Migration was 'orchestrated in the board rooms of northern industrial enterprises.' Her point is that:",
            options: [
              "Migrants had no reasons of their own to leave",
              "Northern industry actively and deliberately recruited migrants, not just a spontaneous drift",
              "The Migration never really happened",
              "Southern landowners organized the move",
            ],
            correctIndex: 1,
            explanation: "Marks (1989) corrects the image of aimless drift: recruitment by Northern industry was organized and intentional.",
            sourceLessonSlug: "gmw-wwi-and-jobs",
          },
          {
            prompt: "Why did Southern states pass laws taxing or jailing labor agents?",
            options: [
              "To protect workers from fraud",
              "To stop the loss of their cheap Black labor force to the North",
              "To fund schools",
              "To encourage migration",
            ],
            correctIndex: 1,
            explanation: "Losing workers threatened the Southern labor economy, so states tried to block the recruiters.",
            sourceLessonSlug: "gmw-wwi-and-jobs",
          },
          {
            prompt: "Compared with Southern farm labor, a Northern factory wage was:",
            options: [
              "Lower, but safer",
              "Several times higher, and paid in cash directly to the worker",
              "Paid only in credit at a company store",
              "The same",
            ],
            correctIndex: 1,
            explanation: "A direct cash wage several times higher, without a rigged 'settling up,' was a genuine exit from the sharecropping trap.",
            sourceLessonSlug: "gmw-wwi-and-jobs",
          },
          {
            prompt: "The Second Great Migration (1940s onward) was powered by:",
            options: [
              "World War II defense plants and shipyards, including on the West Coast",
              "A return to farming",
              "The end of all factory work",
              "The boll weevil's disappearance",
            ],
            correctIndex: 0,
            explanation: "The same wartime-industry engine restarted, bigger, and reached the Pacific coast.",
            sourceLessonSlug: "gmw-wwi-and-jobs",
          },
          {
            prompt: "Who founded the Chicago Defender, and in what year?",
            options: ["Robert Abbott, 1905", "James Weldon Johnson, 1919", "Berry Gordy, 1959", "Homer Plessy, 1896"],
            correctIndex: 0,
            explanation: "Robert Sengstacke Abbott founded the Defender in 1905; it became the most widely read Black newspaper in the country.",
            sourceLessonSlug: "gmw-defender-and-kin",
          },
          {
            prompt: "What was the Chicago Defender's 'Great Northern Drive'?",
            options: [
              "A fundraising campaign",
              "A symbolic day (May 15, 1917) the paper set for Black Southerners to leave for the North",
              "A railroad company",
              "A cotton-picking contest",
            ],
            correctIndex: 1,
            explanation: "Abbott declared May 15, 1917 a symbolic 'Great Northern Drive,' part of the paper's open campaign for migration.",
            sourceLessonSlug: "gmw-defender-and-kin",
          },
          {
            prompt: "How did the Chicago Defender reach readers in Southern towns that tried to ban it?",
            options: [
              "By radio broadcast",
              "Pullman porters carried bundles south on the trains",
              "It was mailed by the government",
              "It was printed in the South",
            ],
            correctIndex: 1,
            explanation: "Black Pullman porters smuggled the paper south, where a single copy might be read aloud to a whole community.",
            sourceLessonSlug: "gmw-defender-and-kin",
          },
          {
            prompt: "What was the 'kinship chain,' and why did it matter most?",
            options: [
              "A chain-link fence around Northern factories",
              "The pattern of one relative going north, finding work, and sending for the next, the main engine of the Migration",
              "A labor union",
              "A Southern law",
            ],
            correctIndex: 1,
            explanation: "A letter from a relative who had actually made it, sometimes with a ticket enclosed, moved more families than any editorial.",
            sourceLessonSlug: "gmw-defender-and-kin",
          },
          {
            prompt: "The kinship chain helps explain why:",
            options: [
              "Migration was random",
              "People from one Southern place clustered in one Northern place, keeping the three streams' shape",
              "Everyone moved to the same city",
              "The Defender failed",
            ],
            correctIndex: 1,
            explanation: "Because migration followed family lines, Southern regions reassembled in specific Northern neighborhoods.",
            sourceLessonSlug: "gmw-defender-and-kin",
          },
          {
            prompt: "How did the Defender frame the decision to migrate?",
            options: [
              "As cowardly running away",
              "As a bold claim on freedom and dignity",
              "As a temporary vacation",
              "As a government order",
            ],
            correctIndex: 1,
            explanation: "Abbott's paper cast leaving as claiming one's rights, not fleeing, powerful framing for a fearful decision.",
            sourceLessonSlug: "gmw-defender-and-kin",
          },
          {
            prompt: "The pattern 'the Great Migration tracked the labor needs of American industry at war' is supported by:",
            options: [
              "Both surges (WWI and WWII) coinciding with wartime industrial labor shortages",
              "The Migration happening only in peacetime",
              "Factories closing during both world wars",
              "The South industrializing first",
            ],
            correctIndex: 0,
            explanation: "Both great surges lined up with wartime booms that starved industry of its usual labor supply.",
            sourceLessonSlug: "gmw-wwi-and-jobs",
          },
          {
            prompt: "Which best captures the relationship between push and pull factors?",
            options: [
              "Push factors set the timing; pull factors set the pressure",
              "Push factors (Jim Crow, debt, terror) built the pressure; pull factors (wartime jobs, a wage) set the timing and direction",
              "Only pull factors mattered",
              "Only push factors mattered",
            ],
            correctIndex: 1,
            explanation: "Decades of push built the pressure; the wartime pull of jobs decided when and where it was released.",
            sourceLessonSlug: "gmw-wwi-and-jobs",
          },
          {
            prompt: "Why were Pullman porters well positioned to spread the Defender and news of the North?",
            options: [
              "They owned the newspaper",
              "As Black men who worked the railroad sleeping cars, they traveled constantly between North and South",
              "They were factory recruiters",
              "They ran the poll-tax offices",
            ],
            correctIndex: 1,
            explanation: "Their jobs moved them along the rail lines, making them a natural distribution network for news and newspapers.",
            sourceLessonSlug: "gmw-defender-and-kin",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 4 · The routes and the cities
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "gmw-three-travelers",
      title: "11 · Three travelers: Ida Mae, George, and Robert",
      section: "Section 4 · The routes and the cities",
      body: `Six million is a number you cannot picture. Three people, you can. Isabel Wilkerson spent fifteen years and interviewed more than 1,200 people to write *The Warmth of Other Suns* (2010), and she built the book around three real individuals, one for each migration stream. This course does the same. Everything below is as **Wilkerson documented it**, real people, cited, not embellished.

**Ida Mae Brandon Gladney, the Midwestern stream.** A sharecropper's wife in Mississippi, Ida Mae left with her family for **Chicago in 1937**, part of the great corridor that carried Deep-South migrants straight up the map to the Midwest (Wilkerson, 2010). Her life stands in for the majority of migrants: rural people, leaving the cotton economy, headed for a Northern industrial city.

**George Swanson Starling, the Eastern stream.** A sharp, restless man who picked citrus in Florida, George tried to organize his fellow fruit pickers for better pay, which in the Jim Crow South made him a marked man. He left for **New York's Harlem in 1945**, riding the Eastern corridor that ran up the Atlantic seaboard (Wilkerson, 2010). He would spend his working life on the very trains that carried migrants north.

**Robert Joseph Pershing Foster, the Western stream.** A surgeon from Louisiana, Robert left in **1953** to build a medical career in **California**, driving west across the desert on the Western corridor (Wilkerson, 2010). His story is a reminder that the Migration was not only sharecroppers: it carried doctors, teachers, and skilled workers who could not practice or advance under Jim Crow.

**Why this frame teaches so well.** Put the three side by side and the whole Migration comes into focus:

| Person | Left | For | Year | Stream |
| --- | --- | --- | --- | --- |
| Ida Mae Brandon Gladney | Mississippi | Chicago | 1937 | Midwestern |
| George Swanson Starling | Florida | Harlem (New York) | 1945 | Eastern |
| Robert Joseph Pershing Foster | Louisiana | California | 1953 | Western |

Three people, three streams, three decades. Keep them in mind: the rest of the course is, in a sense, the story of what people like them left, carried, built, and paid.

:::reveal Match Wilkerson's three subjects to their streams: who went to Chicago, who to Harlem, who to California, and from which Southern states? ||| Ida Mae Brandon Gladney left Mississippi for Chicago (Midwestern stream, 1937); George Swanson Starling left Florida for Harlem (Eastern stream, 1945); Robert Joseph Pershing Foster left Louisiana for California (Western stream, 1953).

## Sources
- Wilkerson, I. (2010). *The warmth of other suns: The epic story of America's great migration*. Random House.`,
      recallContent: [
        {
          prompt: "Who are Wilkerson's three subjects, and which stream does each represent?",
          answer: "Ida Mae Brandon Gladney (Mississippi to Chicago, Midwestern), George Swanson Starling (Florida to Harlem, Eastern), and Robert Joseph Pershing Foster (Louisiana to California, Western).",
        },
        {
          prompt: "What does Robert Foster (a surgeon) show about who the migrants were?",
          answer: "That the Migration was not only sharecroppers. It also carried doctors, teachers, and skilled professionals who could not advance under Jim Crow.",
        },
      ],
    },
    {
      slug: "gmw-cities",
      title: "12 · The cities they poured into",
      section: "Section 4 · The routes and the cities",
      body: `When the streams reached their Northern ends, they hit a handful of cities with tremendous force. The numbers are the story here, so read the table slowly.

| City | Black population, 1910 | Black population, 1920 | Rough change |
| --- | --- | --- | --- |
| Detroit | 5,741 | 40,838 | about +611% |
| Chicago | ~44,000 | ~109,400 | about +148% |
| New York City | (large already) | (grew ~66% in the decade) |, |

Detroit's roughly **sixfold** jump in ten years was the largest percentage growth of any big Northern city; Chicago's Black population more than doubled; and by 1930 New York City's Black population had reached about 328,000, with **Harlem** becoming the largest Black urban neighborhood in the country (U.S. Census data, as reported by Encyclopedia of Chicago, n.d.; National Archives, n.d.).

**A caution about one famous statistic.** You will often see it claimed that **Philadelphia's** Black population grew "500%" from 1910 to 1920. Handle that number with care: the raw census counts usually cited alongside it (roughly 84,000 to 134,000) work out to closer to **60%**, not 500%. When a dramatic percentage and the underlying head-count do not agree, trust the head-count and flag the percentage. (This is exactly the kind of "verify, do not repeat" habit this platform is built on.)

**Where did all these people live? In very little space.** Northern cities were segregated too, not by Jim Crow statute but by restrictive covenants, real-estate practice, and violence (Section 7). So arriving migrants were packed into a few districts that took on names of their own: Chicago's **"Black Belt," later Bronzeville** (the "Black Metropolis"); Detroit's **Paradise Valley** and Black Bottom; New York's **Harlem**. Landlords chopped apartments into tiny "kitchenette" units and charged more for them than white tenants paid for whole flats. Overcrowding, high rents, and disease were the immediate price of arrival (Grossman, 1989).

But density has a flip side. Pack tens of thousands of people, their churches, newspapers, clubs, and musicians into a few square miles, and you do not only get overcrowding. You get **Bronzeville and Harlem**, the cultural powerhouses of Section 5.

:::reveal Which Northern city had the largest percentage growth in Black population from 1910 to 1920, and why should you be skeptical of the "Philadelphia grew 500%" claim? ||| Detroit, which grew about 611% (from 5,741 to 40,838). Be skeptical of "Philadelphia 500%" because the raw census counts usually cited (about 84,000 to 134,000) work out to closer to 60%; when the percentage and the head-count disagree, trust the head-count.

## Sources
- Encyclopedia of Chicago. (n.d.). *Great Migration*. Chicago History Museum. http://www.encyclopedia.chicagohistory.org/pages/545.html
- National Archives. (n.d.). *The Great Migration (1910–1970)*. https://www.archives.gov/research/african-americans/migrations/great-migration
- Grossman, J. R. (1989). *Land of hope: Chicago, Black Southerners, and the Great Migration*. University of Chicago Press.`,
    },
    {
      slug: "gmw-second-migration-west",
      title: "13 · The Second Great Migration goes west",
      section: "Section 4 · The routes and the cities",
      body: `The first wave filled the industrial cities of the Northeast and Midwest. The **Second Great Migration** (1940s-1970) did that again and then pushed the Western stream to full flood, all the way to the Pacific coast, on the strength of one thing: **World War II shipbuilding**.

**The shipyards were hiring, fast.** When the U.S. entered the war, West Coast shipyards needed enormous numbers of workers, and for the first time offered Black Southerners skilled, well-paid defense jobs. The industrialist **Henry J. Kaiser** ran shipyards in **Richmond and Oakland, California; Portland, Oregon; and Vancouver, Washington**, and recruited workers from across the South (Kaiser Permanente, n.d.). The demographic effect was staggering: San Francisco's Black population grew from **fewer than 5,000 before the war to about 32,000 by 1945** (Second Great Migration, n.d.). New Black communities appeared almost overnight in the East Bay and in **Vanport, Oregon**, a wartime housing city near Portland.

**But the West was not free of the color line.** Black shipyard workers ran into the same wall that met migrants everywhere: **labor unions that would not admit them as equals.** The powerful Boilermakers union, rather than integrate, forced Black workers into separate, second-class "auxiliary" locals that collected their dues but denied them full membership and job security. Black workers fought back, and in California the case known as **James v. Marinship (1944)** ended with a ruling against the union's practice of demanding dues while denying real membership (Second Great Migration, n.d.). (This platform's *History of Unions* course tells the labor side of this story in detail, including how the wartime *Fair Employment Practice Committee*, see Section 6, pushed back on shipyard discrimination.)

**The pattern to notice.** Each wave of the Migration followed war industry, and each time migrants found that the North and West offered a paycheck and a vote but not an escape from racism. That double truth, opportunity braided together with new forms of exclusion, is the hinge of this whole course, and Section 7 will follow it into the housing market, where its costs landed hardest.

:::reveal What industry drove the Second Great Migration to the West Coast, and what barrier did Black workers hit even in those good jobs? ||| World War II shipbuilding (Kaiser's yards in Richmond, Oakland, Portland, and Vancouver, WA) drove it, San Francisco's Black population jumped from under 5,000 to about 32,000 by 1945. The barrier was union exclusion: the Boilermakers forced Black workers into second-class "auxiliary" locals, challenged in James v. Marinship (1944).

## Sources
- Kaiser Permanente. (n.d.). *The World War II Kaiser Richmond shipyard labor force*. https://about.kaiserpermanente.org/who-we-are/our-history/the-world-war-ii-kaiser-richmond-shipyard-labor-force
- *Second Great Migration (African American)*. (n.d.). In *Wikipedia*. https://en.wikipedia.org/wiki/Second_Great_Migration_(African_American)
- *James v. Marinship Corp.* (California Supreme Court, 1944).`,
      recallContent: [
        {
          prompt: "What drove the Second Great Migration to the West Coast, and by how much did San Francisco's Black population grow during the war?",
          answer: "World War II shipbuilding (Henry Kaiser's yards in Richmond, Oakland, Portland, and Vancouver, WA). San Francisco's Black population grew from fewer than 5,000 before the war to about 32,000 by 1945.",
        },
        {
          prompt: "How did the Boilermakers union treat Black shipyard workers, and what case challenged it?",
          answer: "It forced them into separate, second-class 'auxiliary' locals that took their dues but denied full membership. James v. Marinship (1944) ruled against demanding dues while denying real membership.",
        },
      ],
    },
    {
      slug: "gmw-quiz-routes",
      title: "14 · Quiz: routes and cities",
      section: "Section 4 · The routes and the cities",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "In Wilkerson's frame, Ida Mae Brandon Gladney left which state for which city, and in what year?",
            options: ["Florida for Harlem, 1945", "Mississippi for Chicago, 1937", "Louisiana for California, 1953", "Georgia for Detroit, 1916"],
            correctIndex: 1,
            explanation: "Ida Mae, a sharecropper's wife, left Mississippi for Chicago in 1937, the Midwestern stream (Wilkerson, 2010).",
            sourceLessonSlug: "gmw-three-travelers",
          },
          {
            prompt: "George Swanson Starling represents which stream, and where did he go?",
            options: ["Western; Los Angeles", "Midwestern; Chicago", "Eastern; Harlem (New York), 1945", "Northern; Boston"],
            correctIndex: 2,
            explanation: "George left Florida for Harlem in 1945 after trying to organize fellow citrus pickers, the Eastern stream (Wilkerson, 2010).",
            sourceLessonSlug: "gmw-three-travelers",
          },
          {
            prompt: "Robert Joseph Pershing Foster, a surgeon, left Louisiana in 1953 for California. What does his story illustrate?",
            options: [
              "That only sharecroppers migrated",
              "That the Migration also carried skilled professionals blocked by Jim Crow",
              "That doctors were welcomed in the South",
              "That the Western stream did not exist",
            ],
            correctIndex: 1,
            explanation: "Foster shows the Migration included doctors, teachers, and skilled workers who could not advance under Jim Crow (Wilkerson, 2010).",
            sourceLessonSlug: "gmw-three-travelers",
          },
          {
            prompt: "Why did Wilkerson build her book around three individuals?",
            options: [
              "Because only three people migrated",
              "Because three real, cited lives make an unimaginable number of six million people concrete, one per stream",
              "Because she could not find more interviews",
              "Because the government required it",
            ],
            correctIndex: 1,
            explanation: "She interviewed more than 1,200 people over fifteen years, then chose one per stream so readers could picture the whole.",
            sourceLessonSlug: "gmw-three-travelers",
          },
          {
            prompt: "Which Northern city had the LARGEST percentage growth in Black population from 1910 to 1920?",
            options: ["Chicago (~148%)", "Detroit (~611%)", "New York (~66%)", "Boston (~20%)"],
            correctIndex: 1,
            explanation: "Detroit grew from 5,741 to 40,838, about +611%, a roughly sixfold jump, the largest of any big Northern city.",
            sourceLessonSlug: "gmw-cities",
          },
          {
            prompt: "Chicago's Black population went from about 44,000 in 1910 to about 109,400 in 1920, a change of roughly:",
            options: ["+10%", "+148%", "+611%", "+1,000%"],
            correctIndex: 1,
            explanation: "About +148%, Chicago's Black population more than doubled in the decade.",
            sourceLessonSlug: "gmw-cities",
          },
          {
            prompt: "Why should you be skeptical of the claim that 'Philadelphia grew 500%' from 1910 to 1920?",
            options: [
              "Because Philadelphia had no Black population",
              "Because the raw census counts (roughly 84,000 to 134,000) work out to closer to 60%, not 500%",
              "Because Philadelphia grew even faster than 500%",
              "Because the census did not count Philadelphia",
            ],
            correctIndex: 1,
            explanation: "When a dramatic percentage disagrees with the underlying head-count, trust the head-count and flag the percentage.",
            sourceLessonSlug: "gmw-cities",
          },
          {
            prompt: "What were Bronzeville, Paradise Valley, and Harlem?",
            options: [
              "Southern plantations",
              "The segregated districts where arriving migrants were concentrated in Chicago, Detroit, and New York",
              "Names of railroads",
              "Union halls",
            ],
            correctIndex: 1,
            explanation: "Because Northern cities were segregated too (by covenant and practice), migrants were packed into a few districts that became famous in their own right.",
            sourceLessonSlug: "gmw-cities",
          },
          {
            prompt: "What was a 'kitchenette' apartment?",
            options: [
              "A luxury flat",
              "A larger apartment chopped into tiny units, rented to migrants at high prices",
              "A restaurant",
              "A type of railroad car",
            ],
            correctIndex: 1,
            explanation: "Landlords subdivided apartments and charged migrants more for a kitchenette than white tenants paid for a whole flat.",
            sourceLessonSlug: "gmw-cities",
          },
          {
            prompt: "What industry drove the Second Great Migration to the West Coast?",
            options: ["Cotton farming", "World War II shipbuilding", "Gold mining", "Railroads only"],
            correctIndex: 1,
            explanation: "West Coast defense shipyards (notably Henry Kaiser's) recruited Black Southerners for skilled, well-paid war jobs.",
            sourceLessonSlug: "gmw-second-migration-west",
          },
          {
            prompt: "San Francisco's Black population during World War II grew from fewer than 5,000 to about:",
            options: ["6,000", "12,000", "32,000", "200,000"],
            correctIndex: 2,
            explanation: "About 32,000 by 1945, new Black communities appeared almost overnight in the Bay Area.",
            sourceLessonSlug: "gmw-second-migration-west",
          },
          {
            prompt: "How did the Boilermakers union treat Black shipyard workers?",
            options: [
              "It admitted them as full, equal members",
              "It forced them into separate, second-class 'auxiliary' locals that took dues but denied full membership",
              "It refused to let them work at all",
              "It paid them extra",
            ],
            correctIndex: 1,
            explanation: "Auxiliary locals collected dues while denying real membership and job security, challenged in James v. Marinship (1944).",
            sourceLessonSlug: "gmw-second-migration-west",
          },
          {
            prompt: "The 1944 California case James v. Marinship concerned:",
            options: [
              "A restrictive housing covenant",
              "A union demanding dues from Black workers while denying them real membership",
              "The white primary",
              "The boll weevil",
            ],
            correctIndex: 1,
            explanation: "The court ruled against the union's practice of collecting dues while withholding genuine membership.",
            sourceLessonSlug: "gmw-second-migration-west",
          },
          {
            prompt: "Which pattern held across both waves of the Migration?",
            options: [
              "Migrants found the North and West completely free of racism",
              "Each wave followed war industry, and each time migrants found opportunity braided together with new forms of exclusion",
              "Migration only happened once",
              "The West offered no jobs",
            ],
            correctIndex: 1,
            explanation: "Opportunity and exclusion together is the hinge of the course, followed into housing in Section 7.",
            sourceLessonSlug: "gmw-second-migration-west",
          },
          {
            prompt: "Vanport, Oregon, was:",
            options: [
              "A Southern cotton town",
              "A wartime housing city near Portland where a new Black community formed during the Second Great Migration",
              "A union headquarters",
              "A shipyard in New York",
            ],
            correctIndex: 1,
            explanation: "Vanport housed war workers near Portland and became one of the new West Coast Black communities of the 1940s.",
            sourceLessonSlug: "gmw-second-migration-west",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 5 · What they built: the culture
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "gmw-harlem-renaissance",
      title: "15 · The Harlem Renaissance and Jacob Lawrence",
      section: "Section 5 · What they built: the culture",
      body: `The Migration did not only move workers into factories. It concentrated a whole people, with its talents and traditions, into a few dense neighborhoods, and out of that concentration came one of the great flowerings of American art: the **Harlem Renaissance** of the 1920s.

**Harlem became a capital.** As the Eastern stream (George Starling's route) filled upper Manhattan, Harlem grew into the largest Black urban neighborhood in the country and a magnet for writers, painters, and musicians. Historians usually date the Renaissance to roughly the **1920s into the mid-1930s**, and describe it as the moment a "New Negro" generation set out to define Black life on its own terms rather than through white stereotypes (National Museum of African American History and Culture [NMAAHC], n.d.).

**One book named the movement.** In 1925, the Howard University philosopher **Alain Locke** edited an anthology, *The New Negro: An Interpretation*, that gathered the era's poetry, fiction, and essays and became its manifesto (Locke, 1925). Its writers included **Langston Hughes**, **Zora Neale Hurston**, **Claude McKay**, and **Countee Cullen**; in music, figures like **Duke Ellington** carried the same spirit. Notice the direct line from Section 2: many of these artists were themselves migrants or the children of migrants, writing about the South they or their parents had left.

**One artist painted the Migration itself.** In 1941, a young painter named **Jacob Lawrence**, the son of migrants, finished *The Migration Series*: **60 small tempera panels** with captions that tell the Migration's whole arc, from the pressures of the South to the crowded promise of the North. It is now owned jointly by the **Museum of Modern Art** and the **Phillips Collection** (Museum of Modern Art [MoMA], n.d.). Lawrence's series is a rare thing for a high-school researcher: a **primary source about the Migration, made by a child of it, that you can actually look at** (search "Jacob Lawrence Migration Series" at either museum). Where this course points you to archives by description, Lawrence points you to images.

**The payoff of density.** Overcrowding (Section 4) and artistic explosion were two faces of the same fact. Pack a people together, and the suffering is real, but so is the collision of talent that produces a renaissance.

:::reveal What 1925 anthology named the Harlem Renaissance, who edited it, and what 1941 artwork tells the Migration's story in 60 panels? ||| Alain Locke edited "The New Negro: An Interpretation" (1925), the movement's manifesto. Jacob Lawrence's "The Migration Series" (1941), 60 tempera panels now shared by the Museum of Modern Art and the Phillips Collection, tells the Migration's arc in pictures.

## Sources
- Locke, A. (Ed.). (1925). *The New Negro: An interpretation*. Albert and Charles Boni.
- National Museum of African American History and Culture. (n.d.). *A new African American identity: The Harlem Renaissance*. https://nmaahc.si.edu/explore/stories/new-african-american-identity-harlem-renaissance
- Museum of Modern Art. (n.d.). *Jacob Lawrence: The Migration Series*. https://www.moma.org/calendar/exhibitions/444`,
      recallContent: [
        {
          prompt: "Who edited The New Negro (1925) and why does it matter?",
          answer: "Alain Locke. The anthology became the manifesto of the Harlem Renaissance, gathering writers like Langston Hughes, Zora Neale Hurston, Claude McKay, and Countee Cullen.",
        },
        {
          prompt: "What is Jacob Lawrence's Migration Series, and why is it useful to a student?",
          answer: "A 1941 set of 60 tempera panels telling the Migration's arc, painted by a son of migrants. It is a primary source about the Migration that you can actually look at (shared by MoMA and the Phillips Collection).",
        },
      ],
    },
    {
      slug: "gmw-blues-to-motown",
      title: "16 · From the Delta to Chess and Motown",
      section: "Section 5 · What they built: the culture",
      body: `Here is the single clearest way to see the Migration's cultural power: **follow the music.** The sounds that became the soundtrack of twentieth-century America were, over and over, Southern music carried north by migrants and transformed by the city.

**Jazz rode the train from New Orleans to Chicago.** In 1922, a young cornet player named **Louis Armstrong** left New Orleans to join King Oliver's band in Chicago, arriving at the Illinois Central Station in July of that year (Britannica, n.d.-c). He was one migrant among thousands, but he helped turn Chicago into a jazz capital and became one of the most influential musicians in American history. The music followed the people.

**The Delta blues became the Chicago blues, and got louder.** **McKinley Morganfield**, the world knows him as **Muddy Waters**, grew up on Stovall Plantation near Clarksdale, Mississippi, where the folklorist Alan Lomax recorded him for the Library of Congress in 1941. In **1943** he took the train to Chicago, and there he did something the city demanded: he **plugged in**. To be heard over a noisy South Side club, acoustic Delta blues became amplified, electric **Chicago blues** (Britannica, n.d.-d). That electrified sound, recorded on Chicago's Chess Records, is a direct ancestor of rock and roll. Section 8 follows it across an ocean.

**Detroit built a hit factory, and the Migration built Detroit.** In **1959**, **Berry Gordy Jr.** founded a record company in Detroit that he would incorporate as **Motown**, working out of a house he nicknamed **"Hitsville U.S.A."** (Detroit Historical Society, n.d.). Here is the detail that ties it all together: Gordy's own parents had migrated to Detroit from **Sandersville, Georgia, in 1922**, part of the Great Migration (Detroit Historical Society, n.d.). Motown, one of the most successful Black-owned businesses in American history, was itself a **product of the Migration**, built by a migrant family, staffed and sung by the children of migrants, for an audience the Migration had gathered into Northern cities.

**The pattern.** Jazz, blues, gospel (next lesson), and soul were not invented in the North. They were **carried** there and remade there. The Migration did not just relocate people; it relocated, concentrated, and industrialized a culture.

:::reveal Trace one musical line from South to North: who brought the Delta blues to Chicago, what did the city make him do to the sound, and how was Motown itself a product of the Migration? ||| Muddy Waters (McKinley Morganfield) brought Delta blues from Mississippi to Chicago in 1943 and went electric to be heard in loud clubs, creating Chicago blues (recorded on Chess). Motown was founded by Berry Gordy in Detroit in 1959, and Gordy's own parents had migrated there from Georgia in 1922, so the label itself was a product of the Migration.

## Sources
- Britannica, T. Editors of Encyclopaedia. (n.d.-c). *Louis Armstrong*. In *Encyclopædia Britannica*. https://www.britannica.com/biography/Louis-Armstrong
- Britannica, T. Editors of Encyclopaedia. (n.d.-d). *Muddy Waters*. In *Encyclopædia Britannica*. https://www.britannica.com/biography/Muddy-Waters
- Detroit Historical Society. (n.d.). *Motown Records*. Encyclopedia of Detroit. https://detroithistorical.org/learn/encyclopedia-of-detroit/motown-records`,
      recallContent: [
        {
          prompt: "What did Muddy Waters do to the Delta blues when he reached Chicago, and why?",
          answer: "He amplified it, went electric, to be heard over noisy South Side clubs, creating Chicago blues (recorded on Chess Records), a direct ancestor of rock and roll.",
        },
        {
          prompt: "How was Motown itself a product of the Great Migration?",
          answer: "Berry Gordy founded it in Detroit in 1959, and his own parents had migrated there from Sandersville, Georgia, in 1922. The label was built by a migrant family for an audience the Migration had gathered north.",
        },
      ],
    },
    {
      slug: "gmw-church-and-press",
      title: "17 · The church, gospel, and the Black press",
      section: "Section 5 · What they built: the culture",
      body: `Music and art get the headlines, but two quieter institutions did the daily work of turning strangers into a community: the **church** and the **newspaper**.

**The Black church was the first thing migrants rebuilt.** Newcomers who felt lost in a huge, cold city could find, in a storefront church, people who talked like them, cooked like them, and had come from the same Southern counties. Churches ran employment networks, mutual-aid funds, day care, and burial societies; they were social-service agency, town hall, and concert hall at once. As Section 6 will show, they were also the launch pad for Black political power.

**And the church produced a new sacred music: gospel.** **Thomas A. Dorsey**, a Georgia-born migrant who had played blues and jazz, fused that bluesy feeling with Christian lyrics in 1920s and 1930s Chicago, and is widely called the **"father of gospel music."** He served for decades as music director at Chicago's **Pilgrim Baptist Church**, one of the largest Black churches in the country (Britannica, n.d.-e). Gospel is a perfect emblem of the Migration: **Southern feeling, Northern city, brand-new form.**

**The Black press knit the whole migration together.** You already met the **Chicago Defender** (Section 3). It was not alone. The **Pittsburgh Courier** grew into one of the most powerful Black newspapers in the country, with editions in more than a dozen cities and a peak circulation around **500,000**; the **New York Amsterdam News** and the **Philadelphia Tribune** anchored their cities (New Pittsburgh Courier, 2016). These papers did four jobs at once: they **advertised** the North, **coached** newcomers on city life, **reported** the news white papers ignored, and **campaigned** for civil rights, running the "Double V" campaign in World War II (victory over fascism abroad and racism at home) that the Courier made famous.

**Add it up.** Church, press, music, art, and business turned migrant districts into self-sustaining Black cities-within-cities. That density of institutions is exactly what made the next thing possible: political power.

:::reveal Name the "father of gospel music" and one major Black newspaper besides the Chicago Defender, and say what such institutions did for migrants. ||| Thomas A. Dorsey, a Georgia-born migrant, is called the father of gospel music (long the music director at Chicago's Pilgrim Baptist Church). The Pittsburgh Courier (also the Amsterdam News, Philadelphia Tribune) was another major Black paper. Churches and papers gave migrants community, jobs, mutual aid, news, and a civil-rights voice.

## Sources
- Britannica, T. Editors of Encyclopaedia. (n.d.-e). *Thomas Andrew Dorsey*. In *Encyclopædia Britannica*. https://www.britannica.com/biography/Thomas-Andrew-Dorsey
- New Pittsburgh Courier. (2016, May 6). *The Great Migration was a triumph of the Black press*. https://newpittsburghcourier.com/2016/05/06/the-great-migration-was-a-triumph-of-the-black-press/`,
    },
    {
      slug: "gmw-quiz-culture",
      title: "18 · Quiz: what they built (culture)",
      section: "Section 5 · What they built: the culture",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What was the Harlem Renaissance?",
            options: [
              "A housing program",
              "A 1920s-1930s flowering of Black art, writing, and music centered in Harlem",
              "A labor union",
              "A Southern church movement",
            ],
            correctIndex: 1,
            explanation: "As the Eastern stream filled Harlem, a 'New Negro' generation redefined Black life through art on its own terms.",
            sourceLessonSlug: "gmw-harlem-renaissance",
          },
          {
            prompt: "Who edited the 1925 anthology The New Negro, the movement's manifesto?",
            options: ["Langston Hughes", "Alain Locke", "Berry Gordy", "W. E. B. Du Bois"],
            correctIndex: 1,
            explanation: "Howard University philosopher Alain Locke edited The New Negro (1925), gathering Hughes, Hurston, McKay, Cullen, and others.",
            sourceLessonSlug: "gmw-harlem-renaissance",
          },
          {
            prompt: "Jacob Lawrence's The Migration Series (1941) is:",
            options: [
              "A novel",
              "A set of 60 painted panels telling the Migration's story, made by a son of migrants",
              "A jazz album",
              "A government report",
            ],
            correctIndex: 1,
            explanation: "60 tempera panels, now shared by MoMA and the Phillips Collection, a primary visual source about the Migration.",
            sourceLessonSlug: "gmw-harlem-renaissance",
          },
          {
            prompt: "Why does this course call Jacob Lawrence's series an unusually useful source for students?",
            options: [
              "Because it is very long",
              "Because it is a primary source about the Migration, made by a child of it, that you can actually look at",
              "Because it was painted by the government",
              "Because it is a secret",
            ],
            correctIndex: 1,
            explanation: "Most primary sources here are pointed to by description; Lawrence's panels are viewable images made by a participant's child.",
            sourceLessonSlug: "gmw-harlem-renaissance",
          },
          {
            prompt: "Louis Armstrong helped make which city a jazz capital after leaving New Orleans in 1922?",
            options: ["Chicago", "Los Angeles", "Atlanta", "Boston"],
            correctIndex: 0,
            explanation: "Armstrong took the train to Chicago in July 1922 to join King Oliver's band, the music followed the migrants.",
            sourceLessonSlug: "gmw-blues-to-motown",
          },
          {
            prompt: "What did Muddy Waters do to the Delta blues after moving to Chicago in 1943?",
            options: [
              "Made it quieter and acoustic",
              "Amplified it, went electric, to be heard in loud clubs, creating Chicago blues",
              "Abandoned it for classical music",
              "Returned it to the plantation",
            ],
            correctIndex: 1,
            explanation: "Electric Chicago blues, recorded on Chess Records, is a direct ancestor of rock and roll.",
            sourceLessonSlug: "gmw-blues-to-motown",
          },
          {
            prompt: "How was Motown itself a product of the Great Migration?",
            options: [
              "It was founded in the South",
              "Berry Gordy founded it in Detroit in 1959, and his own parents had migrated there from Georgia in 1922",
              "It only recorded white artists",
              "It was owned by a railroad",
            ],
            correctIndex: 1,
            explanation: "A migrant family built one of the most successful Black-owned businesses in U.S. history, for an audience the Migration had gathered north.",
            sourceLessonSlug: "gmw-blues-to-motown",
          },
          {
            prompt: "The broad pattern of the Migration's music is best described as:",
            options: [
              "Northern music sent south",
              "Southern music carried north and remade in the city (jazz, blues, gospel, soul)",
              "Music invented from scratch in the North",
              "Music that never changed",
            ],
            correctIndex: 1,
            explanation: "The Migration relocated, concentrated, and industrialized a Southern-rooted culture.",
            sourceLessonSlug: "gmw-blues-to-motown",
          },
          {
            prompt: "Who is widely called the 'father of gospel music'?",
            options: ["Louis Armstrong", "Thomas A. Dorsey", "Berry Gordy", "Muddy Waters"],
            correctIndex: 1,
            explanation: "Dorsey, a Georgia-born migrant, fused blues feeling with Christian lyrics in Chicago and directed music at Pilgrim Baptist Church.",
            sourceLessonSlug: "gmw-church-and-press",
          },
          {
            prompt: "Why is gospel music 'a perfect emblem of the Migration'?",
            options: [
              "Because it was invented in the South",
              "Because it combined Southern feeling, a Northern city, and a brand-new form",
              "Because it had no words",
              "Because it was only sung in Detroit",
            ],
            correctIndex: 1,
            explanation: "Like the Migration itself, gospel took something Southern, moved it to a Northern city, and made something new.",
            sourceLessonSlug: "gmw-church-and-press",
          },
          {
            prompt: "Beyond worship, what practical roles did the Black church play for migrants?",
            options: [
              "None; it was only for Sundays",
              "Employment networks, mutual aid, day care, burial societies, social-service agency, town hall, and concert hall at once",
              "It discouraged newcomers",
              "It replaced the newspaper",
            ],
            correctIndex: 1,
            explanation: "The church was often the first institution migrants rebuilt, and it did much of the daily work of community.",
            sourceLessonSlug: "gmw-church-and-press",
          },
          {
            prompt: "Which was a major Black newspaper of the Migration era besides the Chicago Defender?",
            options: ["The Pittsburgh Courier", "The New York Times", "The Wall Street Journal", "The Boston Globe"],
            correctIndex: 0,
            explanation: "The Courier peaked around 500,000 circulation with editions in many cities; the Amsterdam News and Philadelphia Tribune were others.",
            sourceLessonSlug: "gmw-church-and-press",
          },
          {
            prompt: "The Pittsburgh Courier's World War II 'Double V' campaign called for:",
            options: [
              "Two victories in football",
              "Victory over fascism abroad AND victory over racism at home",
              "A second world war",
              "Two newspapers per city",
            ],
            correctIndex: 1,
            explanation: "Double V linked the fight against fascism overseas to the fight against racism in the United States.",
            sourceLessonSlug: "gmw-church-and-press",
          },
          {
            prompt: "What four jobs did the Black press do at once for migrants?",
            options: [
              "Advertised the North, coached newcomers, reported ignored news, and campaigned for civil rights",
              "Only printed sports scores",
              "Sold train tickets and nothing else",
              "Worked only in the South",
            ],
            correctIndex: 0,
            explanation: "These papers were recruiter, guidebook, newsroom, and advocate all at once.",
            sourceLessonSlug: "gmw-church-and-press",
          },
          {
            prompt: "How did the density of migrant districts relate to the culture they produced?",
            options: [
              "Density prevented any culture",
              "Overcrowding and artistic explosion were two faces of the same fact, packing a people together collided their talent",
              "The culture came from empty land",
              "Density only caused disease and nothing else",
            ],
            correctIndex: 1,
            explanation: "The suffering of overcrowding was real, but so was the collision of concentrated talent that produced renaissances.",
            sourceLessonSlug: "gmw-harlem-renaissance",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 6 · What they built: political power
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "gmw-the-vote",
      title: "19 · The ballot they could finally use",
      section: "Section 6 · What they built: political power",
      body: `Remember the single cruelest fact of Section 2: in the South, Black citizens had been stripped of the vote. Now watch what happened when six million of them moved to places where they could cast one.

**In the North, they could vote, and in dense districts that meant they could win.** Because migrants clustered in specific neighborhoods (Section 4), those neighborhoods could elect their own. In **1928**, **Oscar De Priest** won a Chicago district to become the **first African American elected to Congress in the twentieth century, and the first ever from outside the South** (U.S. House of Representatives, n.d.-a). He was followed by **William L. Dawson**, elected from Chicago in **1942** (who in 1949 became the first Black American to chair a congressional committee), and by **Adam Clayton Powell Jr.**, the Harlem pastor elected in **1944** (U.S. House of Representatives, n.d.-b, n.d.-c). Southern disenfranchisement had silenced Black voters for decades; Northern migration gave them a voice in Congress again.

**The Black vote also became a national force that presidents had to court.** During the Great Depression, Black voters made a historic switch: drawn by New Deal relief, about **75%** backed the Democrats in **1936**, leaving the "Party of Lincoln" they had supported since emancipation (Salve Regina University, n.d.). Concentrated in the big cities of populous Northern states, this bloc suddenly had real weight in national elections, and both parties began to notice.

**That leverage produced concrete federal action.** Two presidential orders show the pattern:
- In **1941**, under pressure from Black organizing (next lesson), President Franklin Roosevelt issued **Executive Order 8802**, banning racial discrimination in the defense industries and creating a **Fair Employment Practice Committee** (Executive Order 8802, 1941).
- In **1948**, President Harry Truman issued **Executive Order 9981**, ordering the **desegregation of the armed forces**, a decision historians tie in part to pressure from civil-rights leaders and to the growing importance of the Black urban vote (National Archives, n.d.-c).

The lesson is blunt and worth stating plainly: **a vote you can actually cast is power.** The Migration did not create Black political genius, which the South had always had. It moved that genius to ground where it could finally be counted.

:::reveal Who was the first African American elected to Congress in the twentieth century, and what two presidential orders show the Northern Black vote's growing leverage? ||| Oscar De Priest, elected from Chicago in 1928 (also the first from outside the South). Executive Order 8802 (1941, banning defense-industry discrimination, creating the FEPC) and Executive Order 9981 (1948, desegregating the armed forces) show the leverage of the Northern Black vote.

## Sources
- U.S. House of Representatives, History, Art & Archives. (n.d.-a). *De Priest, Oscar Stanton*. https://history.house.gov/People/Detail/12155
- U.S. House of Representatives, History, Art & Archives. (n.d.-b). *Dawson, William Levi*. https://history.house.gov/People/Detail/12028
- U.S. House of Representatives, History, Art & Archives. (n.d.-c). *Powell, Adam Clayton, Jr.* https://history.house.gov/People/Listing/P/POWELL,-Adam-Clayton,-Jr--(P000477)/
- Executive Order 8802, 3 C.F.R. (1941).
- National Archives. (n.d.-c). *Executive Order 9981: Desegregation of the Armed Forces (1948)*. https://www.archives.gov/milestone-documents/executive-order-9981
- Salve Regina University. (n.d.). *How Blacks became Blue: The 1936 African American voting shift*. https://digitalcommons.salve.edu/pell_theses/77/`,
      recallContent: [
        {
          prompt: "Why did moving north give Black Americans political power they lacked in the South?",
          answer: "In the South they were disenfranchised; in the North they could vote. Clustered in dense districts, they could elect their own (Oscar De Priest, Chicago, 1928 was the first in the twentieth century) and, as a bloc in big Northern states, sway national elections.",
        },
        {
          prompt: "What did Executive Orders 8802 (1941) and 9981 (1948) each do?",
          answer: "EO 8802 banned racial discrimination in the defense industries and created the Fair Employment Practice Committee. EO 9981 desegregated the armed forces. Both reflected the leverage of the growing Black urban vote and civil-rights pressure.",
        },
      ],
    },
    {
      slug: "gmw-randolph-and-middle-class",
      title: "20 · Randolph, the porters, and a rising middle class",
      section: "Section 6 · What they built: political power",
      body: `Electoral power was one engine. **Organized labor and mass protest** were another, and one man sits at the center of both: **A. Philip Randolph**.

**The Pullman porters organized.** The **Pullman porters** you met in Section 3 (the men who staffed the railroad sleeping cars and smuggled the Defender south) held some of the steadiest jobs open to Black men, but under demeaning conditions and low pay. In **1925**, Randolph organized them into the **Brotherhood of Sleeping Car Porters**, the first major Black-led labor union in the United States. After a long fight, it won recognition and a contract in **1937** (AFL-CIO, n.d.). This platform's *History of Unions* course tells that struggle, and the wider story of Black workers and the labor movement, in full.

**Then Randolph turned the union into a political weapon.** In **1941**, angry that Black workers were being shut out of the booming defense industry, Randolph threatened a mass **March on Washington** unless the government acted. To head off the march, Roosevelt issued Executive Order 8802 (last lesson), and Randolph called it off, having won a real concession without a shot fired. He used the same tactic again after the war to help push Truman toward desegregating the military in 1948. Randolph had discovered something the civil-rights movement would use for the next thirty years: **the credible threat of mass, disciplined action by Black Americans could move a president.**

**Meanwhile, a Black middle class was taking shape.** Steady wages, the vote, and dense communities let a broader Black middle class grow in Northern cities than Jim Crow had ever permitted: postal workers, porters, teachers, ministers, nurses, small-business owners, and the professionals who served Black neighborhoods that white businesses would not. Institutions like the **NAACP** and the **National Urban League** grew alongside them. This is a genuine achievement, and you should not shrink it.

**But hold it honestly.** That middle class rose inside walls it did not choose. Its members were still barred from most neighborhoods, many jobs, and much of the wealth-building (especially home equity) that white families used to climb, for reasons Section 7 is about to make painfully concrete. The Migration built real Black power and a real Black middle class. It did not buy equality, because equality was not for sale.

:::reveal Who founded the Brotherhood of Sleeping Car Porters and when, and how did he use the threat of a march to win Executive Order 8802? ||| A. Philip Randolph founded the Brotherhood of Sleeping Car Porters in 1925 (it won its contract in 1937). In 1941 he threatened a mass March on Washington over defense-job discrimination; to head it off, Roosevelt issued Executive Order 8802, and Randolph called off the march, winning the concession.

## Sources
- AFL-CIO. (n.d.). *A. Philip Randolph*. https://aflcio.org/about/history/labor-history-people/asa-philip-randolph
- Executive Order 8802, 3 C.F.R. (1941).`,
    },
    {
      slug: "gmw-quiz-power",
      title: "21 · Quiz: what they built (power)",
      section: "Section 6 · What they built: political power",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Why did moving north translate into real political power for Black Americans?",
            options: [
              "The North had no elections",
              "In the North they could vote, and clustered in dense districts they could elect their own and sway national races",
              "The South restored their vote in 1928",
              "Northern cities had no white residents",
            ],
            correctIndex: 1,
            explanation: "Disenfranchised in the South, migrants could vote in the North; concentrated districts elected Black representatives and gave the bloc national weight.",
            sourceLessonSlug: "gmw-the-vote",
          },
          {
            prompt: "Oscar De Priest, elected from Chicago in 1928, was:",
            options: [
              "The first Black senator",
              "The first African American elected to Congress in the twentieth century, and the first from outside the South",
              "A Southern governor",
              "The founder of Motown",
            ],
            correctIndex: 1,
            explanation: "His 1928 Chicago victory marked a new era of Northern urban Black political organization.",
            sourceLessonSlug: "gmw-the-vote",
          },
          {
            prompt: "In 1936, about what share of Black voters backed the Democrats, marking a historic switch?",
            options: ["About 10%", "About 40%", "About 75%", "About 5%"],
            correctIndex: 2,
            explanation: "Drawn by New Deal relief, about 75% backed the Democrats in 1936, leaving the 'Party of Lincoln.'",
            sourceLessonSlug: "gmw-the-vote",
          },
          {
            prompt: "What did President Roosevelt's Executive Order 8802 (1941) do?",
            options: [
              "Desegregated the military",
              "Banned racial discrimination in the defense industries and created the Fair Employment Practice Committee",
              "Ended sharecropping",
              "Created the Chicago Defender",
            ],
            correctIndex: 1,
            explanation: "EO 8802 opened war industries to Black workers and set up the FEPC to enforce it.",
            sourceLessonSlug: "gmw-the-vote",
          },
          {
            prompt: "What did President Truman's Executive Order 9981 (1948) do?",
            options: [
              "Desegregated the armed forces",
              "Banned labor unions",
              "Created the poll tax",
              "Funded the boll-weevil fight",
            ],
            correctIndex: 0,
            explanation: "EO 9981 ordered equality of treatment in the armed forces, tied in part to civil-rights pressure and the Black urban vote.",
            sourceLessonSlug: "gmw-the-vote",
          },
          {
            prompt: "Who founded the Brotherhood of Sleeping Car Porters in 1925?",
            options: ["Adam Clayton Powell Jr.", "A. Philip Randolph", "Oscar De Priest", "Thomas Dorsey"],
            correctIndex: 1,
            explanation: "A. Philip Randolph organized the porters into the first major Black-led labor union, which won its contract in 1937.",
            sourceLessonSlug: "gmw-randolph-and-middle-class",
          },
          {
            prompt: "How did Randolph win Executive Order 8802 in 1941?",
            options: [
              "By running for president",
              "By threatening a mass March on Washington over defense-job discrimination, which Roosevelt headed off with the order",
              "By suing in the Supreme Court",
              "By buying a newspaper",
            ],
            correctIndex: 1,
            explanation: "The credible threat of mass action forced a concession; Randolph then called off the march.",
            sourceLessonSlug: "gmw-randolph-and-middle-class",
          },
          {
            prompt: "What tactic did Randolph pioneer that the civil-rights movement later used for decades?",
            options: [
              "The credible threat of mass, disciplined action to move a president",
              "Secret negotiations only",
              "Armed rebellion",
              "Boycotting all elections",
            ],
            correctIndex: 0,
            explanation: "He showed that organized, disciplined mass pressure could win federal action without violence.",
            sourceLessonSlug: "gmw-randolph-and-middle-class",
          },
          {
            prompt: "Which best describes the Black middle class that grew in Northern cities?",
            options: [
              "It did not exist",
              "It was a real achievement, postal workers, porters, teachers, ministers, business owners, but it rose inside walls of segregation it did not choose",
              "It was fully equal to the white middle class",
              "It was made up only of musicians",
            ],
            correctIndex: 1,
            explanation: "Steady wages, the vote, and dense communities enabled a real middle class, still constrained by segregation (Section 7).",
            sourceLessonSlug: "gmw-randolph-and-middle-class",
          },
          {
            prompt: "Which two organizations grew alongside the Northern Black middle class?",
            options: [
              "The NAACP and the National Urban League",
              "The Boilermakers and the Pullman Company",
              "The FEPC and the HOLC",
              "Chess Records and Motown",
            ],
            correctIndex: 0,
            explanation: "Civil-rights and social-service organizations like the NAACP and Urban League expanded with the migrant communities.",
            sourceLessonSlug: "gmw-randolph-and-middle-class",
          },
          {
            prompt: "William L. Dawson, elected from Chicago in 1942, achieved which first in 1949?",
            options: [
              "First Black senator",
              "First African American to chair a congressional committee",
              "First Black president",
              "First Black governor",
            ],
            correctIndex: 1,
            explanation: "Dawson built a powerful South Side political base and chaired a House committee, a first for a Black member.",
            sourceLessonSlug: "gmw-the-vote",
          },
          {
            prompt: "Adam Clayton Powell Jr., elected in 1944, was a pastor of which Harlem church?",
            options: ["Pilgrim Baptist", "Abyssinian Baptist", "Ebenezer Baptist", "Riverside"],
            correctIndex: 1,
            explanation: "Powell used his Abyssinian Baptist pulpit and community activism to win a new majority-Black Harlem seat.",
            sourceLessonSlug: "gmw-the-vote",
          },
          {
            prompt: "The honest summary of this section is that the Migration:",
            options: [
              "Bought full equality",
              "Built real Black political power and a real Black middle class, but did not buy equality, because equality was not for sale",
              "Made no political difference",
              "Only helped musicians",
            ],
            correctIndex: 1,
            explanation: "Genuine gains in power and class standing coexisted with continued, structural exclusion (the subject of Section 7).",
            sourceLessonSlug: "gmw-randolph-and-middle-class",
          },
          {
            prompt: "What connects the Pullman porters to BOTH the culture and the politics of the Migration?",
            options: [
              "They only drove trains",
              "They smuggled the Chicago Defender south (culture/recruitment) and, organized by Randolph, became the first major Black union (politics)",
              "They founded Motown",
              "They wrote The New Negro",
            ],
            correctIndex: 1,
            explanation: "The porters spread the news that fueled migration and then organized into a union that reshaped Black politics.",
            sourceLessonSlug: "gmw-randolph-and-middle-class",
          },
          {
            prompt: "The deepest point of Section 6 is that:",
            options: [
              "Voting does not matter",
              "A vote you can actually cast is power, the Migration moved Black political genius to ground where it could finally be counted",
              "The South was better for Black voters",
              "Only presidents have power",
            ],
            correctIndex: 1,
            explanation: "The South always had Black political talent; the Migration moved it where it could be exercised and counted.",
            sourceLessonSlug: "gmw-the-vote",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 7 · The costs
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "gmw-redlining",
      title: "22 · Redlining: how a map became a wall",
      section: "Section 7 · The costs",
      body: `The North offered a wage and a vote. What it withheld, systematically, was the main way twentieth-century American families built wealth: **owning a home that gained value**. The tool of that denial was **redlining**, and understanding it means being careful, because the popular version gets the details wrong.

**The New Deal reshaped American housing.** During the Depression, the federal government created agencies to rescue and expand home ownership: the **Home Owners' Loan Corporation (HOLC)** in **1933**, and the **Federal Housing Administration (FHA)** in **1934**. These made long-term, low-down-payment mortgages widely available, and they helped build the modern American middle class (Federal Reserve Bank of Chicago, n.d.).

**But they built it with a color line.** The HOLC produced color-coded "residential security" maps of American cities, grading neighborhoods from "best" (green) to "hazardous" (red). Areas where Black people lived were routinely graded **red** ("redlined"), marking them as too risky for lending. More consequentially, the **FHA's own 1934 underwriting manual instructed appraisers to treat the presence of Black residents, and even the risk of their arrival, as a reason to deny a mortgage** (Federal Reserve Bank of Chicago, n.d.). The result: for decades, government-backed home loans flowed to white neighborhoods and were choked off in Black ones.

**Here is where you must slow down and verify.** You will often hear the tidy claim that "the HOLC's redlining maps caused housing segregation." Recent scholarship complicates that. Researchers (including economists at the Federal Reserve Bank of Chicago) debate **how much the HOLC maps caused segregation versus reflected and reinforced discrimination that was already standard practice** among private lenders and the FHA (Federal Reserve Bank of Chicago, n.d.). The honest statement is not "one map ruined everything." It is: **redlining was a whole system, of which the famous maps are the most visible piece, and the FHA's lending rules may have mattered more than the HOLC's maps.** Notice what just happened: a dramatic, shareable story ("the map did it") gave way to a more careful, better-sourced one. That is the move this course keeps asking you to make.

**Why it mattered so much.** A family shut out of a mortgage could not buy a home; a family that could not buy could not build home equity; and home equity was the single biggest asset most American families passed to their children. Redlining did not just segregate space. It **blocked the wealth escalator** for Black families for two generations, and the gap it opened is still measurable today.

:::reveal What was redlining, and why should you be cautious about the claim "the HOLC maps caused segregation"? ||| Redlining was the system of denying government-backed mortgages in Black neighborhoods, using HOLC "residential security" maps (Black areas graded red) and, crucially, the FHA's 1934 underwriting rules that treated Black residents as a lending risk. Be cautious about "the maps caused segregation" because scholars debate how much the maps caused versus reflected existing discrimination; the FHA's lending rules may have mattered more. Redlining was a whole system, not one map.

## Sources
- Federal Reserve Bank of Chicago. (n.d.). *Revisiting how two federal housing agencies propagated redlining in the 1930s*. https://www.chicagofed.org/research/content-areas/mobility/policy-brief-federal-housing-programs-redlining`,
      recallContent: [
        {
          prompt: "How did redlining block wealth-building for Black families?",
          answer: "Government-backed mortgages were denied in Black neighborhoods (HOLC 'red' grades; the FHA's 1934 rules treating Black residents as a lending risk). No mortgage meant no home, no home equity, and no main asset to pass to children, blocking the wealth escalator for two generations.",
        },
        {
          prompt: "Why is 'the HOLC maps caused segregation' an oversimplification?",
          answer: "Scholars debate how much the maps caused versus reflected discrimination already standard among private lenders and the FHA. Redlining was a whole system; the FHA's underwriting rules may have mattered more than the maps.",
        },
      ],
    },
    {
      slug: "gmw-covenants-and-second-ghetto",
      title: "23 · Covenants, Shelley, and the second ghetto",
      section: "Section 7 · The costs",
      body: `Redlining starved Black neighborhoods of credit. Two more tools kept Black families *inside* them: **private contracts** and, later, **public policy**.

**Restrictive covenants were segregation written into the deed.** A racially **restrictive covenant** was a clause in a property's deed promising that the home would never be sold to or occupied by Black people (and often other groups). Whole white neighborhoods signed them block by block, building a private legal wall that no anti-discrimination law then touched. If a Black family bought in anyway, neighbors could sue to remove them, and courts would enforce the covenant.

**The Supreme Court closed the courthouse door in 1948.** In *Shelley v. Kraemer*, the Court ruled that while private parties could *write* such covenants, a **state court could not enforce them**, because judicial enforcement would make the government a party to racial discrimination, violating the Fourteenth Amendment (*Shelley v. Kraemer*, 1948). It was a real victory. But notice its limit: the covenants themselves were not banned, only their court enforcement, and segregation simply shifted to other, quieter tools, from realtor practice to violence, until the Fair Housing Act of 1968.

**Then government helped build what the historian Arnold Hirsch called the "second ghetto."** In the postwar years, cities cleared "slums" and built large public-housing projects, and in Chicago these were deliberately sited to keep Black residents concentrated in the existing Black Belt rather than let them disperse. In *Making the Second Ghetto: Race and Housing in Chicago, 1940-1960* (1983), Hirsch showed that midcentury segregation was not a leftover from the past fading away, but a **new structure actively built by public policy and private action together** (Hirsch, 1983).

**And crossing the line could be deadly.** When Black families did move into white blocks, they were often met with mobs, vandalism, and firebombs. This was not only a Southern story: some of the ugliest anti-Black housing violence of the century happened in Northern cities. The "promised land" defended its borders.

:::reveal What did Shelley v. Kraemer (1948) actually decide about restrictive covenants, and what was Arnold Hirsch's "second ghetto"? ||| Shelley v. Kraemer ruled that courts could not ENFORCE racially restrictive covenants (state enforcement would violate the Fourteenth Amendment), though it did not ban the covenants themselves. Hirsch's "second ghetto" is the postwar segregation actively built by public policy (slum clearance and the deliberate siting of public housing) and private action, not a leftover fading from the past.

## Sources
- *Shelley v. Kraemer*, 334 U.S. 1 (1948).
- Hirsch, A. R. (1983). *Making the second ghetto: Race and housing in Chicago, 1940–1960*. Cambridge University Press.`,
    },
    {
      slug: "gmw-white-flight-deindustrialization",
      title: "24 · White flight and the vanishing factory",
      section: "Section 7 · The costs",
      body: `The last two costs are the cruelest, because of their timing. Just as Black migrants finished arriving in the industrial cities, two things pulled the ground out from under them: white families left, and the factories left too.

**White flight was subsidized.** After World War II, millions of white urban families moved to new suburbs, helped by exactly the low-cost, government-backed mortgages that redlining denied to Black families. The FHA's rules that starved Black neighborhoods of credit were the same rules that financed white suburbanization. So "white flight" was not simply private choice; it was **public policy paying for one group to leave while trapping another in place** (Federal Reserve Bank of Chicago, n.d.). As the tax base followed white families to the suburbs, the cities migrants had come to were left poorer.

**Then the factories vanished.** The historian **Thomas Sugrue**, studying Detroit, showed that **deindustrialization began in the 1950s**, well before the urban unrest of the 1960s. Employers moved plants to the suburbs, to small towns, and eventually overseas, and automated away many of the jobs that remained (Sugrue, 1996). The engine that had *pulled* the Migration north (Section 3) went into reverse precisely when Black workers, often the "last hired," were most dependent on it. Sugrue argued that this combination, racial discrimination plus disappearing industrial jobs, is the real origin of the late-twentieth-century "urban crisis," and that white flight and deindustrialization were **structural causes of urban decline, not reactions to it** (Sugrue, 1996).

**Put the timing together and the tragedy is clear.** For fifty years, Northern industry advertised for Black Southern labor. Black families uprooted everything and came. And within a generation of arriving, many found the factories closing, the mortgages denied, the neighbors gone, and the tax base with them. The Migration was a triumph of courage and will. It was also, for many, a door that opened onto a room whose far exits were being sealed. Both of those things are true, and an honest course holds them at once.

:::reveal How were "white flight" and deindustrialization especially cruel in their timing for Black migrants? ||| White flight was subsidized by the same FHA-backed mortgages Black families were denied, so public policy paid one group to leave while trapping another and draining the city's tax base. Then, per Sugrue, deindustrialization began in the 1950s: factories moved to suburbs and overseas and automated, so the jobs that had pulled migrants north disappeared just as they arrived, often as the "last hired." These were structural causes of urban decline, not reactions to it.

## Sources
- Sugrue, T. J. (1996). *The origins of the urban crisis: Race and inequality in postwar Detroit*. Princeton University Press.
- Federal Reserve Bank of Chicago. (n.d.). *Revisiting how two federal housing agencies propagated redlining in the 1930s*. https://www.chicagofed.org/research/content-areas/mobility/policy-brief-federal-housing-programs-redlining`,
      recallContent: [
        {
          prompt: "Why does this course say 'white flight' was not simply private choice?",
          answer: "Because it was subsidized by the same FHA-backed mortgages that redlining denied to Black families. Public policy financed white families' move to the suburbs while trapping Black families in the city and draining the urban tax base.",
        },
        {
          prompt: "What did Thomas Sugrue argue about deindustrialization in Detroit?",
          answer: "That it began in the 1950s (before the 1960s unrest), as employers moved plants to suburbs and overseas and automated. Combined with racial discrimination, it was a structural cause of the urban crisis, not a reaction to 1960s unrest.",
        },
      ],
    },
    {
      slug: "gmw-quiz-costs",
      title: "25 · Quiz: the costs",
      section: "Section 7 · The costs",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What was 'redlining'?",
            options: [
              "A Southern voting law",
              "The system of denying government-backed mortgages in Black neighborhoods",
              "A type of blues music",
              "A union tactic",
            ],
            correctIndex: 1,
            explanation: "Redlining choked off home loans in Black areas (HOLC 'red' grades and the FHA's 1934 underwriting rules), blocking home ownership.",
            sourceLessonSlug: "gmw-redlining",
          },
          {
            prompt: "Which two New Deal agencies reshaped American housing (with a color line built in)?",
            options: [
              "The HOLC (1933) and the FHA (1934)",
              "The FEPC and the NAACP",
              "The BSCP and the AFL",
              "The HOLC and Motown",
            ],
            correctIndex: 0,
            explanation: "The Home Owners' Loan Corporation (1933) and Federal Housing Administration (1934) expanded mortgages, but along racial lines.",
            sourceLessonSlug: "gmw-redlining",
          },
          {
            prompt: "Why should you be careful with the claim 'the HOLC maps caused housing segregation'?",
            options: [
              "Because the maps never existed",
              "Because scholars debate how much the maps caused versus reflected existing discrimination, the FHA's lending rules may have mattered more",
              "Because segregation was illegal",
              "Because the maps were only used in the South",
            ],
            correctIndex: 1,
            explanation: "Redlining was a whole system; recent research questions whether the famous maps caused segregation or codified practice already standard.",
            sourceLessonSlug: "gmw-redlining",
          },
          {
            prompt: "How did redlining 'block the wealth escalator'?",
            options: [
              "By raising factory wages",
              "No mortgage meant no home, no home equity, and no main asset to pass to children",
              "By funding Black colleges",
              "By desegregating suburbs",
            ],
            correctIndex: 1,
            explanation: "Home equity was most families' biggest inherited asset; denying mortgages cut Black families off from it for generations.",
            sourceLessonSlug: "gmw-redlining",
          },
          {
            prompt: "A racially restrictive covenant was:",
            options: [
              "A labor contract",
              "A clause in a property deed promising the home would never be sold to or occupied by Black people",
              "A church rule",
              "A type of mortgage",
            ],
            correctIndex: 1,
            explanation: "Covenants wrote segregation into the deed itself, enforced by neighbors and courts.",
            sourceLessonSlug: "gmw-covenants-and-second-ghetto",
          },
          {
            prompt: "What did Shelley v. Kraemer (1948) actually decide?",
            options: [
              "It banned all restrictive covenants outright",
              "That courts could not ENFORCE racially restrictive covenants, because state enforcement would violate the Fourteenth Amendment",
              "That covenants were required by law",
              "That the FHA must integrate",
            ],
            correctIndex: 1,
            explanation: "The covenants themselves were not banned; only their judicial enforcement was blocked, so segregation shifted to quieter tools.",
            sourceLessonSlug: "gmw-covenants-and-second-ghetto",
          },
          {
            prompt: "Arnold Hirsch's 'second ghetto' refers to:",
            options: [
              "A neighborhood in the South",
              "Postwar segregation actively built by public policy (slum clearance, deliberate public-housing siting) and private action",
              "A leftover from slavery fading away",
              "A Harlem theater",
            ],
            correctIndex: 1,
            explanation: "Hirsch (1983) showed midcentury Chicago segregation was newly constructed, not a fading remnant.",
            sourceLessonSlug: "gmw-covenants-and-second-ghetto",
          },
          {
            prompt: "What often happened when Black families moved into white blocks in Northern cities?",
            options: [
              "They were always welcomed",
              "They were often met with mobs, vandalism, and firebombs, anti-Black housing violence was not only a Southern story",
              "The city paid them to leave",
              "Nothing at all",
            ],
            correctIndex: 1,
            explanation: "Some of the century's ugliest housing violence occurred in the North; the 'promised land' defended its borders.",
            sourceLessonSlug: "gmw-covenants-and-second-ghetto",
          },
          {
            prompt: "Why does this course say 'white flight' was not simply a private choice?",
            options: [
              "Because no one moved",
              "Because it was subsidized by the same FHA-backed mortgages that redlining denied to Black families",
              "Because the suburbs were integrated",
              "Because cities paid people to stay",
            ],
            correctIndex: 1,
            explanation: "Public policy financed white suburbanization while trapping Black families in the city and draining its tax base.",
            sourceLessonSlug: "gmw-white-flight-deindustrialization",
          },
          {
            prompt: "According to Thomas Sugrue, when did deindustrialization begin in Detroit?",
            options: [
              "In the 1980s",
              "In the 1950s, before the urban unrest of the 1960s",
              "Never",
              "During the Civil War",
            ],
            correctIndex: 1,
            explanation: "Sugrue (1996) dated the flight of jobs and investment to the 1950s, with plants moving to suburbs and overseas and automating.",
            sourceLessonSlug: "gmw-white-flight-deindustrialization",
          },
          {
            prompt: "Why was deindustrialization especially cruel in its timing for Black migrants?",
            options: [
              "It happened before they arrived",
              "The factory jobs that had pulled them north disappeared just as they arrived, often as the 'last hired'",
              "It only affected white workers",
              "It raised their wages",
            ],
            correctIndex: 1,
            explanation: "The engine that pulled the Migration north went into reverse right when Black workers most depended on it.",
            sourceLessonSlug: "gmw-white-flight-deindustrialization",
          },
          {
            prompt: "Sugrue argued that white flight and deindustrialization were:",
            options: [
              "Reactions to 1960s urban unrest",
              "Structural causes of urban decline that came first and helped create the later unrest",
              "Caused by the boll weevil",
              "Good for the cities",
            ],
            correctIndex: 1,
            explanation: "He reversed the usual story: the structural changes preceded and helped cause the frustration behind 1960s unrest.",
            sourceLessonSlug: "gmw-white-flight-deindustrialization",
          },
          {
            prompt: "The FHA's underwriting rules had which double effect?",
            options: [
              "They funded both Black and white home buying equally",
              "They starved Black neighborhoods of credit while financing white suburbanization",
              "They ended segregation",
              "They only applied to farms",
            ],
            correctIndex: 1,
            explanation: "The same rules that denied Black families mortgages paid for white families to move out, two sides of one policy.",
            sourceLessonSlug: "gmw-white-flight-deindustrialization",
          },
          {
            prompt: "Which statement best holds the full truth of the Migration's costs?",
            options: [
              "The Migration was a total failure",
              "The Migration was a triumph of courage AND, for many, a door opening onto a room whose far exits were being sealed, both are true",
              "The Migration had no costs",
              "The North was exactly like the South",
            ],
            correctIndex: 1,
            explanation: "An honest course holds the achievement and the structural betrayal at once, without erasing either.",
            sourceLessonSlug: "gmw-white-flight-deindustrialization",
          },
          {
            prompt: "Racially restrictive covenants finally lost their broader legal footing with which 1968 law?",
            options: ["The Fair Housing Act", "The poll tax", "The GI Bill", "The Wagner Act"],
            correctIndex: 0,
            explanation: "After Shelley (1948) blocked court enforcement, the Fair Housing Act of 1968 outlawed housing discrimination more broadly.",
            sourceLessonSlug: "gmw-covenants-and-second-ghetto",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 8 · And the world
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "gmw-culture-abroad",
      title: "26 · The culture that crossed the ocean",
      section: "Section 8 · And the world",
      body: `The title of this course promises "and the World," and here is where that promise comes due. The Migration concentrated a Southern-rooted Black culture in a few Northern cities (Section 5). From those cities, it went **global**, and it changed music everywhere it landed.

**Jazz conquered Paris.** Jazz first reached France during **World War I**, carried by Black American army bands, and after the war some Black musicians stayed, finding in Paris audiences and a freedom the United States denied them. In **1925**, *La Revue Nègre* opened at the Théâtre des Champs-Élysées with a young dancer named **Josephine Baker** and the New Orleans clarinetist **Sidney Bechet**, and it made Baker a European star (La Revue Nègre, n.d.). Bechet built a career in France he could never have had at home.

**But tell this part honestly.** Paris was freer than Mississippi, not free. French audiences often embraced Black performers through a lens of exotic fantasy, a fashion the era itself called *négrophilie* ("negrophilia"), which prized Black artists as thrilling and "primitive" rather than simply as artists (La Revue Nègre, n.d.). The welcome was real, and so were its limits. Both are true, which by now should sound familiar.

**And Chicago blues became the sound of the world.** Recall Muddy Waters plugging in on the South Side (Section 5). His electric records on Chess crossed the Atlantic and landed on a group of young British musicians who studied them obsessively. In 1962, one such band needed a name, spotted Muddy's 1950 song **"Rollin' Stone"** on a record sleeve, and became **The Rolling Stones** (Rollin' Stone [Muddy Waters song], n.d.). The Beatles, the Stones, and Eric Clapton all pointed back to Chess artists, then sold that Chicago-blues sound to the entire planet as "rock." Follow the thread all the way: a Delta field holler, carried north by a migrant, electrified in a Chicago club, shipped to London, and beamed back out to the world.

**The pattern of the whole section.** What the Migration built in Bronzeville, Harlem, and Detroit did not stay there. Jazz, blues, gospel, and eventually Motown soul became **America's most successful cultural export**, and a Black export at that. Six million people did not only remake American cities. Through the culture they made, they remade the sound of the modern world.

:::reveal Trace one line by which the Great Migration's culture reached the whole world through popular music. ||| A Delta blues carried north by a migrant (Muddy Waters) was electrified in Chicago and recorded on Chess; young British musicians studied those records, and one band named itself after Muddy's song "Rollin' Stone" (the Rolling Stones, 1962). Through the British Invasion, Chicago blues became global rock. (Earlier, jazz had crossed to Paris with WWI army bands and La Revue Nègre, 1925.)

## Sources
- *La Revue Nègre*. (n.d.). In *Wikipedia*. https://en.wikipedia.org/wiki/La_Revue_N%C3%A8gre
- *Rollin' Stone (Muddy Waters song)*. (n.d.). In *Wikipedia*. https://en.wikipedia.org/wiki/Rollin%27_Stone_(Muddy_Waters_song)`,
      recallContent: [
        {
          prompt: "How did jazz reach Paris, and why is 'negrophilia' an important caveat?",
          answer: "Jazz reached Paris via Black American army bands in World War I; some musicians stayed (La Revue Nègre, 1925, with Josephine Baker and Sidney Bechet). The caveat: French audiences often embraced Black performers as exotic and 'primitive' rather than simply as artists. The welcome was real, and so were its limits.",
        },
        {
          prompt: "How did Chicago blues become global rock music?",
          answer: "Muddy Waters' electric Chess records reached young British musicians, who built the British Invasion on them. The Rolling Stones took their name from Muddy's 1950 song 'Rollin' Stone.' Delta blues, carried north and electrified, went to London and back out to the world.",
        },
      ],
    },
    {
      slug: "gmw-internationalism-and-cold-war",
      title: "27 · The moral argument goes global",
      section: "Section 8 · And the world",
      body: `Culture was one export. A **moral argument** was the other, and it may have mattered even more.

**The Migration helped make Black politics international.** Concentrating millions of Black people, with their newspapers, universities, and organizations, in world cities like New York gave Black thinkers a platform that reached far beyond the United States. Harlem in particular became a hub of **Black internationalism** and **Pan-Africanism**, linking the struggle of Black Americans to anti-colonial movements across Africa and the Caribbean. (This platform's *Pan-Africanism*, *Afrocentricity*, and *Africa Before Colonization* courses follow that thread of ideas in depth; this lesson only shows where it connects to the Migration.)

**The Cold War turned American racism into a global liability.** After World War II, the United States competed with the Soviet Union for the loyalty of a decolonizing world, much of it in Africa and Asia. In that contest, Jim Crow was a disaster for American propaganda: the Soviet Union pointed to lynchings, segregated schools, and the abuse of Black diplomats in the U.S. capital to argue that American "freedom" was a lie. In *Cold War Civil Rights* (2000), the historian **Mary Dudziak** documented how this international embarrassment pushed the federal government, from Truman through Johnson, to support civil-rights reform partly to protect America's image abroad (Dudziak, 2000). In other words, the world was watching, and its gaze became a lever that Black Americans and their allies could pull.

**And the movement they built inspired the world back.** The American civil-rights movement, itself powered by the migrants' Northern votes and Southern courage, became a model studied by activists fighting colonialism and, later, apartheid in South Africa. Ideas of nonviolent mass protest flowed both ways across borders. The moral argument that began in Southern fields and Northern ghettos became part of a global conversation about human rights.

**The legacy, and a surprising turn.** The Migration's demographic tide has even begun to reverse. Since the **1970s**, in what demographers call the **New Great Migration**, many Black Americans, often younger and college-educated, have moved **back to the South**, drawn by New South jobs, family ties, and the perception of lessening discrimination, and repelled by Northern deindustrialization (Section 7). The South's share of the Black population, which had fallen to about half by 1970, rose back to roughly **57% by 2020** (Frey, 2004; U.S. Census data). The people the South drove out, and their descendants, are choosing, on new terms, to return. That is not the Migration failing. It is the Migration's children exercising the very freedom, to live where they choose, that six million people left home to claim.

:::reveal How did the Cold War make American racism a global issue, and what is the "New Great Migration"? ||| During the Cold War, the U.S. competed with the USSR for a decolonizing world, and Soviet propaganda used American racism (lynchings, segregation) to attack U.S. credibility. Dudziak (2000) showed this pushed federal civil-rights reform to protect America's image abroad. The "New Great Migration" is the reversal since the 1970s, in which many Black Americans (often younger, college-educated) have moved back to the South, raising the South's share of the Black population back toward 57% by 2020.

## Sources
- Dudziak, M. L. (2000). *Cold War civil rights: Race and the image of American democracy*. Princeton University Press.
- Frey, W. H. (2004). *The new great migration: Black Americans' return to the South, 1965–2000*. Brookings Institution. https://www.brookings.edu/articles/the-new-great-migration-black-americans-return-to-the-south-1965-2000/`,
    },
    {
      slug: "gmw-quiz-world",
      title: "28 · Quiz: and the world",
      section: "Section 8 · And the world",
      quiz: {
        passingScore: 70,
        shuffleOptions: true,
        questions: [
          {
            prompt: "How did jazz first reach Paris?",
            options: [
              "By radio in the 1950s",
              "Carried by Black American army bands during World War I",
              "It was invented in France",
              "By the Rolling Stones",
            ],
            correctIndex: 1,
            explanation: "WWI army bands brought jazz to France; some Black musicians stayed for the audiences and relative freedom they found.",
            sourceLessonSlug: "gmw-culture-abroad",
          },
          {
            prompt: "Who starred in the 1925 Paris show La Revue Nègre?",
            options: [
              "Josephine Baker and Sidney Bechet",
              "Muddy Waters and Berry Gordy",
              "Langston Hughes and Zora Neale Hurston",
              "Louis Armstrong and Duke Ellington",
            ],
            correctIndex: 0,
            explanation: "La Revue Nègre (1925) made dancer Josephine Baker a European star and featured clarinetist Sidney Bechet.",
            sourceLessonSlug: "gmw-culture-abroad",
          },
          {
            prompt: "What is the honest caveat about Black performers' welcome in 1920s Paris?",
            options: [
              "There was no welcome at all",
              "Paris was freer than the U.S. but not free, audiences often embraced Black artists as exotic and 'primitive' (negrophilia)",
              "Paris treated them exactly equally",
              "They were paid nothing",
            ],
            correctIndex: 1,
            explanation: "The welcome was real and so were its limits: a fashion for the 'primitive' framed the embrace.",
            sourceLessonSlug: "gmw-culture-abroad",
          },
          {
            prompt: "The Rolling Stones took their name from:",
            options: [
              "A British folk song",
              "Muddy Waters' 1950 Chess song 'Rollin' Stone'",
              "A Motown hit",
              "A Harlem Renaissance poem",
            ],
            correctIndex: 1,
            explanation: "British 'Chess obsessives' named the band after Muddy Waters' song, carrying Chicago blues worldwide as rock.",
            sourceLessonSlug: "gmw-culture-abroad",
          },
          {
            prompt: "The full 'thread' of the blues going global runs:",
            options: [
              "London to Chicago to Mississippi",
              "A Delta blues, carried north by a migrant, electrified in Chicago, shipped to London, and beamed back to the world",
              "Paris to New Orleans only",
              "Detroit to the South",
            ],
            correctIndex: 1,
            explanation: "Muddy Waters embodies the whole chain: Delta roots, Chicago electricity, British Invasion, global rock.",
            sourceLessonSlug: "gmw-culture-abroad",
          },
          {
            prompt: "Why does the course call the Migration's music 'America's most successful cultural export, and a Black export at that'?",
            options: [
              "Because it stayed in Bronzeville",
              "Because jazz, blues, gospel, and Motown soul, all built by migrants and their children, spread worldwide",
              "Because it was made by the government",
              "Because Europe invented it",
            ],
            correctIndex: 1,
            explanation: "The culture the Migration concentrated in Northern cities became a global export.",
            sourceLessonSlug: "gmw-culture-abroad",
          },
          {
            prompt: "How did concentrating Black communities in world cities like New York affect Black politics?",
            options: [
              "It isolated them from the world",
              "It gave Black thinkers an international platform, making Harlem a hub of Black internationalism and Pan-Africanism",
              "It ended all activism",
              "It had no effect",
            ],
            correctIndex: 1,
            explanation: "The density that produced culture also produced an internationally connected Black politics.",
            sourceLessonSlug: "gmw-internationalism-and-cold-war",
          },
          {
            prompt: "During the Cold War, why did American racism become a global liability?",
            options: [
              "It made no difference internationally",
              "The U.S. competed with the USSR for a decolonizing world, and Soviet propaganda used U.S. racism to attack American credibility",
              "The USSR supported segregation",
              "Racism helped U.S. foreign policy",
            ],
            correctIndex: 1,
            explanation: "Jim Crow undermined the U.S. image among the African and Asian nations both superpowers were courting.",
            sourceLessonSlug: "gmw-internationalism-and-cold-war",
          },
          {
            prompt: "What did Mary Dudziak's Cold War Civil Rights (2000) argue?",
            options: [
              "That civil rights had no international dimension",
              "That international embarrassment pushed the federal government (Truman to Johnson) to support civil-rights reform partly to protect America's image abroad",
              "That the Soviet Union ended segregation",
              "That the Cold War caused the Great Migration",
            ],
            correctIndex: 1,
            explanation: "Dudziak documented the world's gaze as a lever for domestic civil-rights reform.",
            sourceLessonSlug: "gmw-internationalism-and-cold-war",
          },
          {
            prompt: "How did the American civil-rights movement influence the world?",
            options: [
              "It had no influence abroad",
              "It became a model studied by activists fighting colonialism and apartheid, with nonviolent-protest ideas flowing both ways",
              "It only affected Canada",
              "It discouraged other movements",
            ],
            correctIndex: 1,
            explanation: "The movement built on migrants' votes and courage became part of a global human-rights conversation.",
            sourceLessonSlug: "gmw-internationalism-and-cold-war",
          },
          {
            prompt: "What is the 'New Great Migration'?",
            options: [
              "A second move to the North",
              "The reversal since the 1970s, in which many Black Americans have moved back to the South",
              "A move to Europe",
              "The original Migration renamed",
            ],
            correctIndex: 1,
            explanation: "Demographers use the term for the return migration to the South that began in the 1970s.",
            sourceLessonSlug: "gmw-internationalism-and-cold-war",
          },
          {
            prompt: "By 2020, the South's share of the Black population had risen back to about:",
            options: ["25%", "40%", "57%", "90%"],
            correctIndex: 2,
            explanation: "It fell to about half by 1970, then rose to roughly 57% by 2020 (Frey; U.S. Census).",
            sourceLessonSlug: "gmw-internationalism-and-cold-war",
          },
          {
            prompt: "What draws many in the New Great Migration back to the South?",
            options: [
              "Cheaper cotton",
              "New South jobs, family ties, and the perception of lessening discrimination, plus Northern deindustrialization pushing the other way",
              "The return of Jim Crow",
              "A government order",
            ],
            correctIndex: 1,
            explanation: "Southern opportunity and roots pull, while Northern job losses push, a reversal of the original push-pull.",
            sourceLessonSlug: "gmw-internationalism-and-cold-war",
          },
          {
            prompt: "How does the course frame the New Great Migration's meaning?",
            options: [
              "As proof the Migration failed",
              "As the Migration's children exercising the freedom to live where they choose, the very freedom six million people left home to claim",
              "As unrelated to the Great Migration",
              "As forced removal",
            ],
            correctIndex: 1,
            explanation: "Returning on new terms is an exercise of the freedom the original Migration was about.",
            sourceLessonSlug: "gmw-internationalism-and-cold-war",
          },
          {
            prompt: "Which best sums up the 'and the World' pillar of this course?",
            options: [
              "The Migration only mattered inside the U.S.",
              "Six million people remade American cities AND, through their culture and moral argument, helped remake the sound and the conscience of the modern world",
              "The Migration ended in 1940",
              "Culture cannot cross borders",
            ],
            correctIndex: 1,
            explanation: "The Migration's reach was global in both culture (music) and politics (the Cold War civil-rights lever and Black internationalism).",
            sourceLessonSlug: "gmw-culture-abroad",
          },
        ],
      },
    },
    {
      slug: "gmw-exercise",
      title: "29 · Practice: name the concept (whole-course review)",
      section: "Section 8 · And the world",
      body: `A capstone drill across the whole course. Fill each blank with the term, name, number, or year, then check. Spelling and capitalization are forgiving; if you are close, you will be told so.`,
      exercise: {
        instructions: "Type the missing term, name, or number from the course, then check. Close answers (spelling, capitalization) are counted as 'close,' not wrong.",
        items: [
          {
            prompt: "About ___ million African Americans left the South during the Great Migration (roughly 1916-1970).",
            answer: "six",
            accept: ["6", "6 million", "six million"],
            explanation: "About six million, and it is an estimate, so we say 'about.'",
          },
          {
            prompt: "The system of Southern segregation law and custom that the migrants were leaving is called ___ ___ (two words).",
            answer: "Jim Crow",
            accept: ["jim crow"],
            explanation: "Jim Crow: legal segregation, disenfranchisement, and an economy built to trap.",
          },
          {
            prompt: "In the farming system called ___, a family worked an owner's land for a share of the crop and often ended the year in debt.",
            answer: "sharecropping",
            accept: ["share cropping", "share-cropping"],
            explanation: "When debt was used to keep the family from leaving, it became debt peonage.",
          },
          {
            prompt: "World War ___ cut off European immigrant labor and opened Northern factory jobs to Black Southerners around 1916.",
            answer: "I",
            accept: ["1", "one", "world war i", "world war 1"],
            explanation: "WWI created the labor shortage that set the Migration's timing.",
          },
          {
            prompt: "The Chicago ___, founded by Robert Abbott in 1905, campaigned for migration and declared a 'Great Northern Drive' for May 15, 1917.",
            answer: "Defender",
            accept: ["defender", "chicago defender"],
            explanation: "Pullman porters smuggled it south past local bans.",
          },
          {
            prompt: "Isabel Wilkerson's book that frames this course is 'The Warmth of Other ___.'",
            answer: "Suns",
            accept: ["suns", "sons"],
            explanation: "The Warmth of Other Suns (2010) follows three migrants, one per stream.",
          },
          {
            prompt: "Wilkerson's subject who left Mississippi for Chicago in 1937 was Ida Mae Brandon ___.",
            answer: "Gladney",
            accept: ["gladney"],
            explanation: "Ida Mae represents the Midwestern stream.",
          },
          {
            prompt: "Berry Gordy founded the Detroit record label ___ in 1959; his own parents had migrated there from Georgia in 1922.",
            answer: "Motown",
            accept: ["motown", "tamla"],
            explanation: "Motown was itself a product of the Great Migration.",
          },
          {
            prompt: "A. Philip Randolph organized the Brotherhood of Sleeping Car ___ in 1925, the first major Black-led union.",
            answer: "Porters",
            accept: ["porters"],
            explanation: "He later used the threat of a march to win Executive Order 8802 (1941).",
          },
          {
            prompt: "The practice of denying government-backed mortgages in Black neighborhoods is called ___.",
            answer: "redlining",
            accept: ["red-lining", "red lining"],
            explanation: "It blocked home-equity wealth for Black families for generations.",
          },
          {
            prompt: "In the 1948 case Shelley v. ___, the Supreme Court ruled that courts could not enforce racially restrictive covenants.",
            answer: "Kraemer",
            accept: ["kraemer", "kramer"],
            explanation: "The covenants themselves were not banned, only their court enforcement.",
          },
          {
            prompt: "The 1925 Paris show that made Josephine Baker a star was 'La Revue ___.'",
            answer: "Nègre",
            accept: ["negre", "nègre", "negre "],
            explanation: "Jazz reached Paris with WWI army bands; some musicians, like Sidney Bechet, stayed.",
          },
          {
            prompt: "The British band that took its name from Muddy Waters' 1950 song 'Rollin' Stone' is The Rolling ___.",
            answer: "Stones",
            accept: ["stones", "rolling stones"],
            explanation: "Chicago blues crossed the Atlantic and came back as global rock.",
          },
          {
            prompt: "The reversal since the 1970s, with Black Americans moving back to the South, is called the ___ Great Migration.",
            answer: "New",
            accept: ["new"],
            explanation: "The South's Black population share rose back toward 57% by 2020.",
          },
        ],
      },
    },
    // <<< APPEND NEXT SECTION ABOVE THIS LINE >>>
  ],
};
