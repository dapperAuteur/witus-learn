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
    // <<< APPEND NEXT SECTION ABOVE THIS LINE >>>
  ],
};
