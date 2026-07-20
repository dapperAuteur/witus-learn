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
    "A cited, high-school-level history of the Great Migration — the movement of roughly six million Black Americans out of the rural South between about 1916 and 1970, and the country and culture they remade. The course follows the shape of the move itself: the forces that pushed people out (Jim Crow, sharecropping and debt peonage, racial terror, the boll weevil), the forces that pulled them north and west (wartime factory labor, the Chicago Defender, kinship chains), the three great routes they traveled, the cities and culture they built (the Harlem Renaissance, Chicago blues, Motown, the Black church and press, Black political power and a growing Black middle class), the costs they were made to pay (redlining, restrictive covenants, the second ghetto, white flight, deindustrialization), and — the pillar most surveys skip — how the culture and the moral argument of the Migration went global. Built on Isabel Wilkerson's three-family narrative frame and standard scholarship (Wilkerson, Lemann, Grossman, Marks), with primary sources pointed to their real archives. Companion to this platform's homeschool 'Great Migration' course and its Hoodoo, History of Unions, and Pan-Africanism courses.",
  lessons: [
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 1 · What the Great Migration was
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "gmw-what-and-scale",
      title: "1 · What the Great Migration was — and how we measure it",
      section: "Section 1 · The shape of the Migration",
      body: `Between roughly **1916 and 1970**, about **six million** African Americans left the American South and moved to cities in the North, the Midwest, and the West. Historians call this the **Great Migration**, and by scale it is one of the largest movements of people inside a single country in the twentieth century (National Archives, n.d.).

**Start with the demographic fact, because it is the whole story in one line.** At the beginning of the twentieth century, about **90%** of Black Americans lived in the South. By 1970, only about **52%** did (National Archives, n.d.). In seventy years, a people who had been overwhelmingly Southern and rural became, in large part, Northern and urban. Everything else in this course — the music, the politics, the neighborhoods, the costs, the global reach — grows out of that one shift in where people lived.

**"About six million" is an estimate, and you should treat it like one.** Different scholars, counting different years and using different methods, land on somewhat different totals. Isabel Wilkerson, whose book frames this course, describes "six million black Southerners" leaving between about 1915 and 1970 (Wilkerson, 2010). The National Archives dates the movement 1916–1970 and uses the same round figure (National Archives, n.d.). When a number is this big and this old, precision is a warning sign, not a virtue — the honest version is "about six million," and this course will keep saying "about."

**Why "the South" is doing so much work here.** Historians mean the states of the former Confederacy and the border South — places where, after Reconstruction collapsed, Black life was governed by **Jim Crow**: legally enforced segregation, near-total disenfranchisement, and an economy (sharecropping) built to keep Black families in debt. Sections 2 and 3 take the "why" apart carefully. For now, hold onto the size of the thing: six million individual decisions, made kitchen table by kitchen table, that added up to a nation remaking itself.

**A note on how this course is built.** Rather than a list of dates, it follows Wilkerson's method: three real people, whose journeys stand in for three great routes out of the South. You will meet them properly in Section 4, but their names are worth planting now — **Ida Mae Brandon Gladney**, who left Mississippi for Chicago in 1937; **George Swanson Starling**, who left Florida for Harlem in 1945; and **Robert Joseph Pershing Foster**, who left Louisiana for California in 1953 (Wilkerson, 2010).

:::reveal Roughly how many people left, over what years, and how did the share of Black Americans living in the South change from the start of the 1900s to 1970? ||| About six million people, from roughly 1916 to 1970. About 90% of Black Americans lived in the South at the start of the twentieth century; by 1970 only about 52% did.

## Sources
- National Archives. (n.d.). *The Great Migration (1910–1970)*. https://www.archives.gov/research/african-americans/migrations/great-migration
- Wilkerson, I. (2010). *The warmth of other suns: The epic story of America's great migration*. Random House.`,
      recallContent: [
        {
          prompt: "About how many Black Americans left the South during the Great Migration, and over roughly what span of years?",
          answer: "About six million, from roughly 1916 to 1970. 'About' is doing real work — the total is an estimate.",
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
- The **First Great Migration**, roughly **1916–1940**. The sharp acceleration came with **World War I**, when Northern factories lost their supply of European immigrant labor and, for the first time, recruited Black Southern workers in large numbers (Section 3). Commonly cited estimates put this first wave at around **1.5 million** people — a rough figure (Britannica, n.d.).
- The **Second Great Migration**, roughly **1940–1970**, driven by **World War II** defense industries and reaching much further west — to the shipyards of California, Oregon, and Washington. This second wave is usually estimated as larger, on the order of **5 million** people, though the two waves overlap and the counts are approximate (Britannica, n.d.).

Notice that 1.5 million plus 5 million is more than six million. That is not a mistake you should hide; it is a sign that these are **estimates counted over overlapping periods with fuzzy edges**, not receipts. Use them for scale, not arithmetic.

**Three streams.** Because the South-to-North railroads ran mostly straight up the map, people tended to move due north from wherever they started, which produced three broad corridors:

| Stream | From (roughly) | To (roughly) |
| --- | --- | --- |
| Eastern | Florida, Georgia, the Carolinas, Virginia | Washington, D.C., Philadelphia, New York (Harlem) |
| Midwestern | Mississippi, Alabama, Tennessee, Arkansas | Chicago, Detroit, Cleveland, Milwaukee |
| Western | Louisiana, Texas, Oklahoma | Los Angeles, Oakland, the West Coast |

Wilkerson (2010) built her entire book on this pattern by choosing one person for each stream — a device this course borrows in Section 4. The streams matter because **who your neighbors were in the North depended on where in the South you had come from.** A Black Chicagoan in 1945 was overwhelmingly likely to have Mississippi or Arkansas roots; a Black Angeleno, Louisiana or Texas roots. Southern regions did not just empty out — they reassembled, transplanted, in specific Northern cities.

:::reveal Name the two waves of the Great Migration and the war that accelerated each, then name the three geographic streams. ||| First Great Migration (roughly 1916–1940), accelerated by World War I; Second Great Migration (roughly 1940–1970), accelerated by World War II. The three streams ran Eastern (to D.C./Philadelphia/New York), Midwestern (to Chicago/Detroit), and Western (to Los Angeles/Oakland).

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
            explanation: "The standard round figure is about six million — and it is an estimate, so historians say 'about' (National Archives; Wilkerson, 2010).",
            sourceLessonSlug: "gmw-what-and-scale",
          },
          {
            prompt: "What years does this course use to bracket the Great Migration?",
            options: ["Roughly 1865–1900", "Roughly 1916–1970", "Roughly 1945–1980", "Roughly 1900–1920"],
            correctIndex: 1,
            explanation: "The National Archives dates the movement 1916–1970; Wilkerson uses about 1915–1970. Either way, it spans roughly five decades.",
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
              "Because the total is an estimate — scholars counting different years by different methods get somewhat different figures",
              "Because the real number is secret",
              "Because six million is a made-up number with no basis",
            ],
            correctIndex: 1,
            explanation: "For a number this large and this old, false precision is a warning sign. Different scholars land on different totals, so the honest version is 'about.'",
            sourceLessonSlug: "gmw-what-and-scale",
          },
          {
            prompt: "Which war accelerated the FIRST Great Migration (roughly 1916–1940)?",
            options: ["The Civil War", "World War I", "World War II", "The Korean War"],
            correctIndex: 1,
            explanation: "World War I cut off European immigrant labor to Northern factories, which then recruited Black Southern workers for the first time in large numbers.",
            sourceLessonSlug: "gmw-waves-and-streams",
          },
          {
            prompt: "Which war accelerated the SECOND Great Migration (roughly 1940–1970)?",
            options: ["World War I", "World War II", "The Vietnam War", "The Spanish-American War"],
            correctIndex: 1,
            explanation: "World War II defense industries — including West Coast shipyards — drew the second, larger wave, which reached much further west.",
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
            explanation: "Roughly 1.5 million in the first wave and 5 million in the second — approximate figures counted over overlapping periods (Britannica).",
            sourceLessonSlug: "gmw-waves-and-streams",
          },
          {
            prompt: "Why do 1.5 million plus 5 million not add neatly to 'about six million'?",
            options: [
              "Because the numbers are wrong and should be ignored",
              "Because these are estimates over overlapping periods with fuzzy edges — use them for scale, not arithmetic",
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
            explanation: "Because the streams ran roughly straight north, Southern regions reassembled in specific Northern cities — Mississippi and Arkansas roots concentrated in Chicago.",
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
            explanation: "Isabel Wilkerson's The Warmth of Other Suns (2010) follows one person per stream — Ida Mae Gladney, George Starling, and Robert Foster — a device this course borrows.",
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

**How the system worked.** After the Civil War, most Southern land stayed in the hands of white owners, while the people who worked it — many of them formerly enslaved and their descendants — had no land and no cash. The solution that emerged was sharecropping: a family farmed an owner's land in exchange for a share of the crop, usually about half. Because the family had no money to live on until harvest, they bought food, seed, tools, and clothing on credit from the landowner or a **furnishing merchant**, at marked-up prices and steep interest, against the crop they had not yet grown (Wilkerson, 2010).

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

**Racial terror was the enforcement arm of Jim Crow.** Between 1877 and 1950, the Equal Justice Initiative has documented more than **4,400** racial terror lynchings of Black Americans — public killings, often by mobs, meant not only to murder an individual but to terrorize a whole community into submission (Equal Justice Initiative [EJI], 2017). Counts vary between projects and are certainly undercounts, but the scale and purpose are not in doubt. A lynching in the next county was a message to everyone who heard about it, and news of it traveled with families who left.

**The violence did not stop at the Southern border, and 1919 proved it.** In the summer after World War I, white mobs attacked Black communities in more than three dozen cities and towns across the country. The writer and NAACP official James Weldon Johnson named it the **"Red Summer."** In Chicago, riots left 38 people dead; the worst killing was in rural **Elaine, Arkansas**, where estimates of Black dead run from about 100 to 240 (National Archives, n.d.-b). Red Summer is a warning this course will return to: the North was a destination, not a promised land.

**Now the beetle.** The **boll weevil**, a cotton-eating insect, crossed into the United States from Mexico near Brownsville, Texas, around **1892**, and spread east across the cotton South, reaching essentially all cotton-growing regions by the mid-1920s (Britannica, n.d.-b). Where it hit, it could ruin a cotton crop, and cotton was the only thing a sharecropping economy grew. Ruined crops meant ruined croppers, and some landowners responded by pushing tenant families off the land entirely.

**But be careful here — this is a place where popular history oversimplifies.** It is tempting to say "the boll weevil caused the Great Migration," and you will see that claim made. It is too clean. The Migration was already underway before the weevil reached the Deep South, its timing does not line up neatly with the biggest migration surges, and scholars such as Carole Marks argue the pull of Northern industry and the push of Jim Crow and terror mattered more than any single crop failure (Marks, 1989). The honest version: the boll weevil was **one shock among several**, one that made a bad situation worse and gave already-decided families a final reason to buy a train ticket.

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
              "A rule barring Black voters from the Democratic primary — the only election that mattered in the one-party South",
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
            explanation: "Debt peonage used debt to hold laborers in place, enforced by sheriffs and courts — a form of coerced labor that outlasted slavery by decades.",
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
            prompt: "About how many racial terror lynchings of Black Americans has the Equal Justice Initiative documented for 1877–1950?",
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
              "That anti-Black violence was national, not only Southern — the North was a destination, not a promised land",
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

**World War I created the opening.** Northern factories — steel mills, meatpacking plants, auto works, railroads — had run for decades on a steady supply of European immigrant labor. When war broke out in Europe in 1914, that supply collapsed: immigration to the United States fell sharply, and then the U.S. entered the war in 1917 and pulled millions of men into the military. Industry suddenly faced a severe labor shortage in the middle of a wartime production boom (Grossman, 1989; National Archives, n.d.).

**So industry turned south.** Companies that had never hired Black workers began sending **labor agents** into the South to recruit them, sometimes paying train fare north in exchange for a signed work commitment. Carole Marks (1989) argues this recruitment was so deliberate and organized that the Migration was, in her words, "orchestrated in the board rooms of northern industrial enterprises" — a useful correction to any picture of migrants as simply drifting north on their own. Southern states, alarmed at losing their cheap labor force, passed laws taxing or jailing labor agents to try to stop them (Grossman, 1989).

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

**Getting it read in the South was itself an act of defiance.** The *Defender* was dangerous to be caught with in parts of the South, and some towns tried to ban it. It traveled anyway, largely through **Pullman porters** — the Black men who worked the railroad sleeping cars — who carried bundles of the paper south and left them where people would find them (Grossman, 1989). A single copy might be read aloud to a whole community, or passed hand to hand until it fell apart.

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
              "The pattern of one relative going north, finding work, and sending for the next — the main engine of the Migration",
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
            explanation: "Abbott's paper cast leaving as claiming one's rights, not fleeing — powerful framing for a fearful decision.",
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
    // <<< APPEND NEXT SECTION ABOVE THIS LINE >>>
  ],
};
