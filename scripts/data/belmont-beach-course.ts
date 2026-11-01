// Authored "Belmont Beach and the City's Water: Assigned, Claimed and Contested" (REST-05), a cited,
// high-school-and-up SITE course on Learn.WitUS (Culture & History), course 05 of the series "A Place of
// Our Own: Black Resorts, Retreats and Vacation Towns" (REST). REST-00 is `where-we-rested`, its
// prerequisite. REST-06 (international) is parked as research first; the old optional capstone is REST-07.
//
// Brief: plans/future-courses/culture-and-history/black-resorts/2026-11-01-belmont-beach-rest-05-brief.md
// (tracked twin cloud-briefs/rest-05/00-approved-brief.md), generated from plans/95, which BAM approved on
// 2026-11-01 with inline answers. Evidence log: plans/research/2026-11-01-belmont-beach-and-city-waters-sources.md
// (and plans/research/2026-11-01-black-resorts-comparables.md for Rainbow Beach). The spine sources were
// fetched AGAIN in the build session of 2026-11-01 and the locators below were read on them.
//
// It runs the six-beat site template of plans/37 on Belmont in sections 1 to 4 (Then, Built, Who decided,
// Now), then a section of US case cards (the same mechanism elsewhere), then Write. plans/95 explains why
// Belmont alone cannot fill six beats: the nomination finds no newspaper reference to the beach after 1943.
//
// Sourcing discipline (the load-bearing part of this file):
//   * Every teaching lesson carries APA 7 in-line citations and a `## Sources` bibliography with a locator.
//     The 2024 National Register form (Garner, 2024; its PDF pages and printed pages are the same numbers),
//     the state review board's minutes and agenda, the NPS weekly list and the NPS theme study (Kahrl &
//     Cammeron, 2022; printed page = PDF page minus 8) are the spine. The Indianapolis Recorder is quoted ONLY
//     as the nomination reports it; no Recorder page was opened (Hoosier State Chronicles answered 403).
//   * BELMONT WAS NOT BLACK-OWNED. The land was the city's. The course says so and never says otherwise.
//     The news report that business owners were "offered Belmont Beach instead" is the reporter's narration
//     (Strong, n.d.), taught as one account beside the nomination's.
//   * CONFLICTS ARE TAUGHT, NOT RESOLVED BY GUESSING: when it began; who made it; the 1927 Fleming episode;
//     Douglass Park's pool year; what the 2026 listing holds; why the city allowed it; Riverside's picket and
//     end date; Swope's filing year; the Monson "manager" or "owner". Research checks filed for the ones a
//     document can settle (src/lib/research-checks.ts, keys `bb-*`).
//   * BAM's decision (plan 95, answer 5): the drownings (1941, unnamed, as the nomination records them; 1979,
//     unnamed) and the 1964 Monson acid are included with a content note and NO images. Fairground Park
//     (1949), Belle Isle (1943) and the Biloxi wade-ins are NOT approved yet: their case cards are written in
//     `BELMONT_HELD_CASE_CARDS` at the bottom of this file, which the seeder never reads (it reads
//     `lessons` only). BAM's answer switches them in (user task 388).
//   * Rainbow Beach's 1960 and 1961 wade-ins moved here from REST-03 (answer 3), lesson 21.
//   * Consent rule: NO living private person is named or quoted. The Friends of Belmont Beach's officers,
//     the historian IBJ quotes, the Kansas City plaintiffs, the Glen Echo and Rainbow Beach organizers and
//     the 1979 child are described, not named. Historical figures named: Marian Spencer (died 2019), Thurgood
//     Marshall, Rev. Mozel Sanders, Mayor Joseph E. Bell, and people the 1930s press named in their roles.
//   * Images: none embedded. Every image is a placeholder that names whose permission is needed: Kurt West
//     Garner's 21 nomination photographs, the Friends' images, the Recorder's 1936 photograph (rights not
//     checked), NPS images (likely federal works, confirm per image). Commercial images are never used.
//   * Public ground only, and never the river: the White River was "still deemed unsafe for swimming" in 2023
//     (Wooten, 2023). The current state advisory is an authoritative value to read on the day, not assumed.
//
// Held: public-ready, but publishHoldReason keeps it unpublished until the Friends of Belmont Beach have had
// about three weeks to review it (plan 95, answer 6; user task 387).
//
// House rule: NO em-dashes or en-dashes in prose.

import type { AuthoredCourse, AuthoredLesson } from "./authored-course";

const GARNER_2024 =
  "Garner, K. W. (2024). *Belmont Park & Beach* [National Register of Historic Places registration form, dated May 22, 2024; prepared for the Friends of Belmont Beach; listed July 31, 2026, as \"Belmont Beach,\" SG100013298]. Indiana Department of Natural Resources, Division of Historic Preservation and Archaeology. https://www.in.gov/dnr/historic-preservation/files/hp-Belmont-Park-and-Beach.pdf";
const GARNER_2025 =
  "Garner, K. W. (2025). *Fox Lake (additional information and boundary increase)* [National Register of Historic Places registration form, prepared February 28, 2025, for the Fox Lake Preservation Foundation; listed March 2, 2026]. Indiana Department of Natural Resources, Division of Historic Preservation and Archaeology. https://www.in.gov/dnr/historic-preservation/files/hp-Fox-Lake-Additional-Documentation-and-Boundary-Increase.pdf";
const HPRB_2026A =
  "Indiana Historic Preservation Review Board. (2026a). *Minutes, April 15, 2026*. Indiana Department of Natural Resources. https://secure.in.gov/dnr/historic-preservation/files/hp-042026-review-board-Minutes.pdf";
const HPRB_2026B =
  "Indiana Historic Preservation Review Board. (2026b). *Agenda, October 14, 2026*. Indiana Department of Natural Resources. https://www.in.gov/dnr/static/historic/board/100626/hp-102026-agenda.pdf";
const NPS_WEEKLY_2026 =
  "National Park Service. (2026). *Weekly list of actions taken on properties: 7/24/2026 through 7/31/2026*. https://www.nps.gov/subjects/nationalregister/weekly-list-2026-07-31.htm";
const KAHRL_2022 =
  "Kahrl, A. W., & Cammeron, M. (2022). *African American outdoor recreation theme study: Historic context and National Historic Landmark survey*. National Park Service; Organization of American Historians. https://www.nps.gov/subjects/nationalhistoriclandmarks/upload/African-American-Outdoor-Recreation-National-Historic-Landmark-Theme-Study.pdf";
const MULLINS_2016 =
  "Mullins, P. R. (2016, February 22). Race and the river: Swimming, sewers, and segregation. *Archaeology and Material Culture*. https://paulmullins.wordpress.com/2016/02/22/race-and-the-river-swimming-sewers-and-segregation/";
const WOOTEN_2023 =
  "Wooten, T. (2023, June 9). Haughville pursuing vision to make Belmont Beach permanent park. *Indianapolis Business Journal*. https://www.ibj.com/articles/reenvisioning-belmont-beach";
const STRONG_ND =
  "Strong, A. (n.d.). Historic beach provides glimpse into realities of segregated swimming. *Scripps News*. Retrieved November 1, 2026, from https://www.scrippsnews.com/us-news/race-in-america/historic-beach-provides-glimpse-into-realities-of-segregated-swimming";
const FOBB_PAST =
  "Friends of Belmont Beach. (n.d.-a). *The past*. Retrieved November 1, 2026, from https://belmontbeachindy.org/the-past/";
const FOBB_HOME =
  "Friends of Belmont Beach. (n.d.-b). *Belmont Beach* [Home page]. Retrieved November 1, 2026, from https://www.belmontbeachindy.org/";
const YOUNG_2025 =
  "Young, S. (2025, May 15). Share feedback on public art honoring Indy's Black history. *Mirror Indy*. https://mirrorindy.org/?p=52393";
const VERDERAME_2023 =
  "Verderame, J. A. (2023). Frederick Douglass Park. In *Encyclopedia of Indianapolis*. The Polis Center. https://indyencyclopedia.org/frederick-douglass-park/";
const INDY_PARKS =
  "Indy Parks. (n.d.). *Frederick Douglass Park*. Retrieved November 1, 2026, from https://parks.indy.gov/parks/frederick-douglass-park/";
const SUTTON_2019 =
  "Sutton, C. (2019, February 14). *Reckoning with Riverside*. Indiana Historical Society. https://indianahistory.org/blog/reckoning-with-riverside/";
const REUBEN_2024 =
  "Reuben, E. (2024, July 8). Diving into equality. *Indianapolis Monthly*. https://www.indianapolismonthly.com/longform/diving-into-equality/";
const KC_V_WILLIAMS =
  "*Kansas City v. Williams*, 205 F.2d 47 (8th Cir. 1953). https://law.resource.org/pub/us/case/reporter/F2/205/205.F2d.47.14664.14666.html";
const ZIEGLER_2016 =
  "Ziegler, L. (2016, February 25). Swope Park pool desegregation case important to Kansas City civil rights struggle. *KCUR*. https://www.kcur.org/community/2016-02-25/swope-park-pool-desegregation-case-important-to-kansas-city-civil-rights-struggle";
const NPS_ANACOSTIA_2024 =
  "National Park Service. (2024, August 21). *Anacostia Park pool riots*. https://www.nps.gov/anac/learn/historyculture/anacostia-park-pool-riots.htm";
const NPS_GLEN_ECHO_2021 =
  "National Park Service. (2021, August 3). *Summer of change*. Glen Echo Park. https://home.nps.gov/glec/learn/historyculture/summer-of-change.htm";
const CBS_BALTIMORE_2013 =
  "CBS Baltimore. (2013, July 7). Chapter in Baltimore civil rights history memorialized Sunday. https://www.cbsnews.com/baltimore/news/chapter-in-baltimore-civil-rights-history-memorialized-sunday";
const NPR_2014 =
  "NPR. (2014, June 13). Remembering a civil rights swim-in: \"It was a milestone.\" *KUNC*. https://www.kunc.org/npr-news/2014-06-13/remembering-a-civil-rights-swim-in-it-was-a-milestone";
const KERN_2019 =
  "Kern, J. (2019, July 10). Remembering Marian Spencer. *UC News*. https://www.uc.edu/news/articles/2019/07/n20843078.html";
const UC_LIBRARIES =
  "University of Cincinnati Libraries. (n.d.). *Biography: Marian Spencer*. Retrieved November 1, 2026, from https://libapps.libraries.uc.edu/exhibits/marian-spencer/?p=13";
const IRVIN_MITCHELL_2026 =
  "Irvin-Mitchell, A. (2026, June 15). Calming the ripples of Pittsburgh's segregated swimming history. *PublicSource*. https://www.publicsource.org/pittsburgh-swimmers-segregated-pools/";
const JURAVICH_ND =
  "Juravich, N. (n.d.). August 29, 1960 [Guest post]. In M. F. Delmont, *Black quotidian: Everyday history in African-American newspapers*. Stanford University Press. https://blackquotidian.supdigital.org/bq/august-29-1960";

export const BELMONT_BEACH_COURSE: AuthoredCourse = {
  title: "Belmont Beach and the City's Water: Assigned, Claimed and Contested",
  description:
    "A cited, high-school-and-up site course on Belmont Beach, the strip of White River shore in Haughville, on Indianapolis's near west side, that the city formally opened as a \"new swimming beach for colored people\" in 1936 while its other beaches and pools stayed closed to Black residents. It reads the place out of its 2024 National Register nomination (listed in 2026 as \"Belmont Beach\"), the state review board's record and the 1941 Indianapolis Recorder complaint the nomination reports. A learner can say how a flood levee, a dam built for a white park and a sandbar made the beach; which public body decided what (the parks board, public works, the board of health, the courts); why the city owned it and Black residents did not; how Indianapolis desegregated its water and what it left alone; and how the same fight ran in Gary, Washington, Kansas City, Cincinnati, Pittsburgh, Chicago's Rainbow Beach, Glen Echo, Gwynn Oak and St. Augustine. Belmont was assigned, not owned, which is what separates it from every earlier course in the series. It runs on the series rule: a positive is never used to soften a negative. Content notes mark drownings and the 1964 acid attack; there are no graphic images. Course 05 of A Place of Our Own (REST). Prerequisite: Where We Rested (where-we-rested).",
  lessons: [
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 1 · Then
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "bb-owned-assigned-claimed",
      title: "1 · Owned, assigned, claimed: why a city beach is a different kind of place",
      section: "Section 1 · Then",
      body: `**Take Where We Rested (\`where-we-rested\`) first.** It is course 00 of this series and gives you the rule this course runs on. Course 01, Fox Lake, applied that rule to a lake resort Black families bought. This course applies it to a place nobody in it bought.

## Three words for three kinds of place

Every earlier course in this series is about places Black Americans **owned**: lots on a plat, cottages, a hotel, an association with dues. Belmont Beach was not one of them. **The land was the city's.** Hold three words apart from the first lesson to the last:

| Word | What it means here | Example in this course |
|---|---|---|
| **Owned** | Black buyers held title and could decide | Fox Lake (REST-01); the resorts of REST-00 |
| **Assigned** | A public body designated a place for Black use, and kept the decision | Belmont Beach, 1936; Douglass Park, 1921 |
| **Claimed** | People entered a place they had been kept out of, and made the public body answer | Rainbow Beach, 1960; Glen Echo, 1960 |

**An assigned place can be loved, crowded and full of life, and still be assigned.** That is the course's whole argument in one sentence, and it is why the series rule matters here more than anywhere: **never use a positive to soften a negative.** The Baby Lincolns playing ball beside the river in the 1930s is true. A city keeping every other beach and pool closed to the people watching them is also true. Neither one answers the other.

## What the record says, in one paragraph

The 2024 National Register nomination puts it plainly. The beach and the park "became segregated recreational facilities for Indianapolis's Black population during the 1920s through the 1970s." Black residents' use of the beach "happened naturally since no formal beach had been provided and other beaches were segregated; it formally became a Black beach in 1936" (Garner, 2024, Sec. 8 p. 10). The city bought the park land in 1930 and opened it in 1932 (Garner, 2024, Sec. 8 p. 10).

**Notice whose verbs those are.** The city provided, segregated, bought, opened. Black residents used. That grammar is the record, and this course teaches you to read it.

## The community's word for it

The Friends of Belmont Beach, the neighborhood group that has been reclaiming the beach since 2020, describe it in their own words as a riverside park reclaimed from "the shadows of racial segregation" (Friends of Belmont Beach, n.d.-b). They also give a reason the city allowed it at all, which lesson 11 takes up beside the nomination's more cautious reason (Friends of Belmont Beach, n.d.-a). **This course treats the Friends as the community's voice and the nomination as the documentary spine, and it says which one is speaking every time.**

## One thing this course will never say

**Belmont Beach was not Black-owned.** A news report says a group of Black business owners was "offered Belmont Beach instead" of land they had meant to buy (Strong, n.d.). Lesson 4 shows where that story probably comes from. But no source read for this course says any Black person or company held title to the beach or ran it. The parks department did (Garner, 2024, Sec. 8 p. 12).

## What you will be able to do at the end

- Say how a flood, a levee and a dam built for a white park made a beach, with dates and the document for each.
- Name the four public bodies that decided Belmont's fate, and what each one decided.
- Read a 1941 newspaper complaint, as a nomination reports it, as evidence.
- Compare Belmont with pools, beaches and parks in eight other places, and say which were assigned and which were claimed.
- Plan a visit that stays on public ground and out of the river.

## Sources
- ${FOBB_HOME}
- ${FOBB_PAST}
- ${GARNER_2024} Locator: Section 8, pp. 10 and 12 (PDF pp. 10, 12), statement of significance and "Construction of the Levee and Parkway."
- ${STRONG_ND}`,
    },
    {
      slug: "bb-1913-to-1917-levee-and-dam",
      title: "2 · 1913 to 1917: a flood, a levee, a dam built for Riverside Park, and a sandbar",
      section: "Section 1 · Then",
      body: `**Belmont Beach was not planned as a beach.** It is what was left over when the city built two other things: a flood levee and, before that, a dam for a white park upstream. Follow the paper.

## 1899 to 1900: a dam for Riverside Park

In the 1890s the city was building out its park system. During the Taggart mayoral administration (1895 to 1901) it added about 1,100 acres of parks, among them **Riverside Park**, on both sides of the White River north of the Crawfordsville Road crossing at what is now 16th Street. **"In order for it to have deeper waters and a beach, a dam was constructed south of 16th Street across the White River."** Bids for the work went out in June 1899; the 400-foot dam of stone and concrete was completed in August 1900 (Garner, 2024, Sec. 8 p. 12, nn. 6 to 8).

That dam is the **Emrichsville Dam**. It is mostly gone now. Its remnants on the south bank, deteriorated stone abutments and a concrete spillway, still cross the beach, and the nomination counts them as a contributing structure because "the dam and its extant remnants were instrumental in the development of the beach by allowing sandbars to form" (Garner, 2024, Sec. 7 p. 6).

**Read that sentence twice.** The sandbar Black swimmers later used was a by-product of an improvement built so that a white park would have a beach.

## 1913: the flood

The Great Flood of 1913 hit the west side hardest, "displacing as many as four thousand families of limited means," and covered nearly four square miles in or near the city (Garner, 2024, Sec. 8 pp. 11 to 12). The low south bank at the river's bend, owned at the time by Horatio S. and Annie (Woolen) Garner, was one of the most critical places to protect (Garner, 2024, Sec. 8 pp. 11 to 12).

## 1914 to 1917: the levee and the parkway

Mayor Joseph Bell called for a levee along the west bank. The board of public works bought or condemned the land for it; appraisals began in November 1914 and contracts were let in May 1915. The parks board saw a chance to extend its parkway system along the river and **bought the land between the river and the levee in 1915.** The levee, with White River Parkway on top, was finished in 1917 (Garner, 2024, Sec. 8 p. 12, nn. 2 to 5).

**Then the sentence the whole course rests on:** "The land between the parkway and White River came under ownership of the city's park department. The land on the south side of the parkway remained under private ownership" (Garner, 2024, Sec. 8 p. 12).

## The monument

A boulder with a bronze plaque stands where the parkway meets Belmont Avenue. The nomination transcribes it: the flood prevention levee and boulevard were "erected under the administration of Joseph E. Bell, Mayor," with four members of the board of public works and two city engineers named, "1915-1917" (Garner, 2024, Sec. 7 p. 7). **The plaque names nine men. It does not name a beach, because there was not one yet.**

## Why the dates matter

The nomination's period of significance begins in **1917**, "with the completion of the levee and parkway which led to the informal use of the riverbank beach" (Garner, 2024, Sec. 8 p. 10). So "when did Belmont Beach begin?" has at least two right answers, and lesson 8 adds the second: 1917 for use, 1936 for designation.

:::reveal Why was the Emrichsville Dam built? ||| So that Riverside Park, a city park upstream, would have deeper water and a beach. It was completed in August 1900.

:::reveal After the levee was finished in 1917, who owned the strip between the parkway and the river? ||| The city's park department. The land south of the parkway stayed private until the city bought it for the park in 1931.

## Sources
- ${GARNER_2024} Locator: Section 7, pp. 6 to 7 (dam remnants; levee monument and plaque text); Section 8, pp. 10 to 12 (period of significance; "Early Development of the Land"; "Construction of the Levee and Parkway"), notes 1 to 8.`,
    },
    {
      slug: "bb-west-side-fills",
      title: "3 · The west side fills: ward five, Haughville and the Great Migration",
      section: "Section 1 · Then",
      body: `A beach needs swimmers. This lesson is about who lived within walking distance of the river, and why they had nowhere else to swim.

## The numbers, as the nomination gives them

At the close of the Civil War, Indianapolis's Black population was **1,653**. By 1900 it was **almost 16,000**, and by 1920 it had "more than doubled to almost 35,000" (Garner, 2024, Sec. 8 p. 13). The nomination takes these figures from a 1996 study of Indianapolis in the Great Migration (Brady, 1996, as cited in Garner, 2024, Sec. 8 p. 13, n. 9). **They are a secondary source's numbers, cited by a nomination.** Say so if you use them.

## Ward five

By 1920, "nearly half of the city's ward five's population was Black compared to 5% in other wards." Ward five ran roughly between 10th, West and Washington Streets and the White River, on the near west side (Garner, 2024, Sec. 8 p. 13). That is the neighborhood around Indiana Avenue, which the course \`indiana-avenue-a-district-and-what-replaced-it\` teaches.

The Black population kept moving west, **across the river into Haughville**, a neighborhood first settled by European immigrants from the 1830s and grown up around industries by the river and the railroads (Garner, 2024, Sec. 8 p. 13). Between 1880 and 1900 Belmont Avenue was extended north and residential plats were laid out on its west side; by the 1920s the blocks south of the future park were built up with housing (Garner, 2024, Sec. 8 p. 13).

## A mixed neighborhood, on paper

The 1935 *Recorder* list of west side businesses that sponsored a Belmont Park event (lesson 9) includes a grocery owned by Hyman Klezmer, an immigrant from Russia who lived above his store on West 10th Street, beside Black-owned businesses such as Willie E. Nash's Belmont Garage and Tillman B. Buggs's grocery (Garner, 2024, Sec. 8 pp. 14 to 15). **Haughville was not a single-race neighborhood. Its parks were assigned by race anyway.** That is a fact about the city's decisions, not about the neighbors.

## Where they could not swim

The nomination is direct: during the 1890s and 1900s the city made a large expansion of its parks, "but recreational facilities at the parks and beaches were prohibited from use by Blacks" (Garner, 2024, Sec. 8 p. 14). **Riverside Park, with its beach and the dam built for it, was a short walk upriver and closed to them.** Lesson 14 shows how long that lasted.

The river itself was not safe. The archaeologist Paul Mullins, writing on the history of the White River, quotes a 1916 description of it as "a malodorous, septic stream, bearing on its surface floating matter of sewage origin" (Mullins, 2016). In 1916 the Indiana State Board of Health found waterways like the White River "heavily contaminated," according to the *Indianapolis Business Journal* (Wooten, 2023).

**So by the 1920s the west side had thousands of Black families, a polluted river, a white park upstream with a beach, and no place of its own to swim.** Lessons 4 and 8 show what each side did about it.

:::reveal What does "ward five" mean in this lesson, and why does it matter? ||| A city ward on the near west side, bounded roughly by 10th, West and Washington Streets and the White River. By 1920 nearly half its population was Black, against 5% in other wards, so it supplied the people who later used Belmont Beach.

## Sources
- Brady, C. (1996). *Indianapolis at the time of the Great Migration, 1900-1920*. [Cited in Garner, 2024, Sec. 8 p. 13, n. 9; not read for this course.]
- ${GARNER_2024} Locator: Section 8, pp. 13 to 15 (PDF pp. 13 to 15), "Black population growth of the West Side and Haughville" and "Creation of Dunbar/Belmont Park."
- ${MULLINS_2016} Locator: the 1916 description of the river, quoted in the post.
- ${WOOTEN_2023} Locator: paragraph on the 1916 State Board of Health finding.`,
      recallContent: [
        {
          prompt: "Why was the Emrichsville Dam built, and what did it have to do with Belmont Beach?",
          answer: "It was built in 1899 and 1900 so Riverside Park, a white park upstream, would have deeper water and a beach. Behind it, sandbars formed on the low south bank, and those sandbars became Belmont Beach.",
        },
        {
          prompt: "What happened to the strip between the river and the parkway when the levee was finished in 1917?",
          answer: "It came under the ownership of the city's park department. The land south of the parkway stayed private.",
        },
      ],
    },
    {
      slug: "bb-1927-country-club",
      title: "4 · 1927: a country club the Parks Board would not allow",
      section: "Section 1 · Then",
      body: `In 1927 a group of Black business people tried to do on the White River what the families of Fox Lake were doing in northeast Indiana that same decade: **buy land of their own.** They were stopped. This lesson teaches the episode as two versions, because the sources tell it two ways.

## Version 1: "threatened to condemn"

Paul Mullins, an archaeologist who has written about the river, reports that in 1927 "Henry Fleming led a group of African-American entrepreneurs" who planned to buy the former Casino Gardens on the White River and "convert the location into the Spring Hill Country Club." **"The Parks Board threatened to condemn the property if it was sold to African Americans"** (Mullins, 2016). Condemnation is the government's power to take private land for public use, with payment. Here it was threatened in order to stop a sale.

## Version 2: "bought the land"

The *Indianapolis Business Journal* tells it differently. A group led by Henry Fleming "tried to buy nearby land at West 20th Street and Lafayette Road" for a country club; white neighbors protested; and **"the city of Indianapolis parks board stepped in and bought the land"** (Wooten, 2023). The *Journal* says the site is "the space now known as Municipal Gardens" and attributes the account of the protests to a local historian it interviewed (Wooten, 2023).

## The nomination's one sentence

The 2024 nomination does not name Fleming. It says only: "The city had blocked a group of Black entrepreneurs who hoped to build a waterfront park at what is now Municipal Gardens, further creating the demand to use the White River at Belmont" (Garner, 2024, Sec. 8 p. 15).

## What agrees, and what does not

| Question | Mullins (2016) | Wooten (2023) | Garner (2024) |
|---|---|---|---|
| Year | 1927 | 1927 | Not given |
| Leader | Henry Fleming | Henry Fleming | Not named |
| Site | Former Casino Gardens, now Municipal Gardens | West 20th Street and Lafayette Road, now Municipal Gardens | Now Municipal Gardens |
| What the city did | Threatened to condemn | Bought the land | "Blocked" |

**All three agree that the city stopped it, and that the site is now Municipal Gardens.** They disagree on how. A threat to condemn and a purchase are different acts, though one could have led to the other. **This course does not decide which happened.** The 1927 *Indianapolis Recorder* pages Mullins draws on would settle it; nobody writing this course has opened them.

## Where the "offered Belmont Beach instead" story probably comes from

A news report on the Friends of Belmont Beach says, in the reporter's own words, that a group of Black business owners meant to buy another property but "was offered Belmont Beach instead" (Strong, n.d.). The nomination says the city designated the beach in 1936, nine years after the 1927 episode, and **never says the beach was offered to, sold to or run by any group** (Garner, 2024, Sec. 8 pp. 15 to 16). The two accounts may be one memory joining two events: the refused purchase of 1927 and the city's designation of 1936. That is an inference, and it is labeled as one. **What the documents support is narrower: the city refused Black buyers a riverfront of their own, and later assigned them one it kept.**

## Co-occurrence drill: the same years at Fox Lake

| Year | Fox Lake (REST-01) | Indianapolis |
|---|---|---|
| 1924 | Five white businessmen form the Fox Lake Land Company to sell lots to Black families | |
| 1926 to 1928 | The plat; the first lots sold; the first cottage (1928) | |
| 1927 | | Fleming's group is stopped from buying a riverfront for a country club |

**Write one sentence that puts the two in the same year without letting either explain the other.** The rule: a lot sale in northeast Indiana does not soften a refused purchase in Indianapolis, and the refusal does not make Fox Lake a consolation. Indianapolis families did go to Fox Lake; Indianapolis sent more of its summer people than any other city (Garner, 2025, p. 26). That is a fact about where people went, not a balance.

:::reveal In the 1927 episode, what do all three sources agree on? ||| That the city stopped a group of Black entrepreneurs from acquiring a riverfront site for their own use, and that the site is now Municipal Gardens.

:::reveal What does "condemn" mean in "threatened to condemn the property"? ||| To take private land for public use through the government's power of eminent domain, paying the owner. Here the threat was used to stop a sale to Black buyers.

## Sources
- ${GARNER_2024} Locator: Section 8, p. 15 (PDF p. 15), "Development of Belmont Beach," first paragraph.
- ${GARNER_2025} Locator: p. 26.
- ${MULLINS_2016} Locator: the paragraph on Henry Fleming and the Spring Hill Country Club.
- ${STRONG_ND} Locator: the paragraph after the executive director's first quotation.
- ${WOOTEN_2023} Locator: the paragraphs on the 1927 country club plan.`,
      recallContent: [
        {
          prompt: "Give the 1920 figures the nomination uses for Indianapolis's Black population and for ward five.",
          answer: "Almost 35,000 citywide, and nearly half of ward five's population, against 5% in other wards. The nomination takes them from a 1996 study.",
        },
        {
          prompt: "What did the nomination say about city parks and beaches and Black residents in the 1890s and 1900s?",
          answer: "That recreational facilities at the parks and beaches were prohibited from use by Black residents.",
        },
      ],
    },
    {
      slug: "bb-key-terms",
      title: "5 · Key terms",
      section: "Section 1 · Then",
      body: `These are the words this course uses as tools. **Each one names a document, a body or a decision you can look up.**

| Term | What it means here | Where you meet it |
|---|---|---|
| **Assigned place** | A place a public body designated for Black use while keeping the decision; Belmont Beach (1936), Douglass Park (1921) | Lessons 1, 8, 13 |
| **Claimed place** | A place people entered after being kept out, forcing the public body to answer; Rainbow Beach (1960) | Lessons 1, 21 |
| **Parks board** | The city body that bought park land, named parks and designated their uses | Lessons 2, 7, 11 |
| **Board of public works** | The city body that built the levee and bought or condemned land for it | Lessons 2, 11 |
| **Board of health** | The body that delayed the beach's opening in 1942 and closed it in 1943 | Lessons 11, 12 |
| **Condemnation (eminent domain)** | Government taking private land for public use, with payment | Lesson 4 |
| **Levee** | An earth embankment against floods; here it carries White River Parkway | Lesson 2 |
| **Sandbar** | A bank of sand the river builds; Belmont's formed behind the Emrichsville Dam | Lesson 2 |
| **National Register nomination** | The form that argues a place onto the federal list of historic places: description, significance, boundary, photographs | Lessons 1, 16 |
| **Period of significance** | The years a nomination argues the place mattered; Belmont's is 1917 to 1976 | Lessons 2, 16 |
| **Wade-in** | A protest in which people enter a beach or pool they have been kept out of | Lessons 18, 21 |
| **Co-occurrence** | Two true things on one calendar, neither used to explain or soften the other | Lessons 1, 4 |

:::reveal What is the difference between an assigned place and an owned place? ||| An owned place is held by its users, who can decide what happens to it. An assigned place is designated for a group by a public body that keeps the decision, including the decision to close it.

:::reveal Why is "period of significance" not the same as "when the beach was open"? ||| It is part of the nomination's argument: the years it says the place mattered for the reasons given. Belmont's runs 1917 to 1976, but the nomination finds no newspaper mention of the beach after 1943.

## Sources
- ${GARNER_2024} Locator: Section 8, pp. 9 to 10 (areas, period and significant dates).`,
      recallContent: [
        {
          prompt: "In the 1927 Fleming episode, what are the two versions of what the city did?",
          answer: "Mullins (2016): the Parks Board threatened to condemn the property if it was sold to African Americans. Wooten (2023): white neighbors protested and the parks board bought the land. The nomination says only that the city blocked it.",
        },
        {
          prompt: "Why does this course not call Belmont Beach Black-owned?",
          answer: "Because the land belonged to the city's park department, and no source read says any Black person or company held title to it or ran it. The 'offered Belmont Beach instead' line is a reporter's narration.",
        },
      ],
    },
    {
      slug: "bb-quiz-then",
      title: "6 · Quiz: then",
      section: "Section 1 · Then",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Who owned the strip of riverbank that became Belmont Beach once the levee was finished in 1917?",
            options: [
              "The city's park department",
              "A Black-owned country club",
              "The Woolen family's estate",
              "The Indianapolis Belt Railroad",
            ],
            correctIndex: 0,
            explanation: "The nomination: the land between the parkway and the river came under the park department's ownership. No source says any Black group held title.",
            sourceLessonSlug: "bb-1913-to-1917-levee-and-dam",
          },
          {
            prompt: "Why was the Emrichsville Dam built in 1899 and 1900?",
            options: [
              "To make a beach for Black swimmers",
              "To power a Haughville flour mill",
              "To hold back the 1913 flood water",
              "To give Riverside Park a beach",
            ],
            correctIndex: 3,
            explanation: "So that Riverside Park, upstream, would have deeper water and a beach. The sandbars that became Belmont Beach formed behind it as a by-product.",
            sourceLessonSlug: "bb-1913-to-1917-levee-and-dam",
          },
          {
            prompt: "Which three words does this course use to sort places by who decided?",
            options: [
              "Built, sold, and then lost",
              "Owned, assigned, claimed",
              "Public, private, and mixed",
              "Rural, urban, and suburban",
            ],
            correctIndex: 1,
            explanation: "Owned (title held by its users), assigned (designated by a public body that kept the decision), claimed (entered by people kept out). Belmont was assigned.",
            sourceLessonSlug: "bb-owned-assigned-claimed",
          },
          {
            prompt: "By 1920, about what share of ward five's population was Black, according to the nomination?",
            options: [
              "About 5 percent, as in other wards",
              "Nearly all, about 95 percent",
              "Nearly half",
              "About one in ten residents",
            ],
            correctIndex: 2,
            explanation: "Nearly half, against 5% in other wards. The nomination takes the figure from a 1996 study, so cite it as the nomination's source.",
            sourceLessonSlug: "bb-west-side-fills",
          },
          {
            prompt: "In 1927, what did Henry Fleming's group plan to build on the White River?",
            options: [
              "A Black-owned beach at Belmont",
              "A country club",
              "A public swimming pool",
              "A Black-owned hotel",
            ],
            correctIndex: 1,
            explanation: "The Spring Hill Country Club, at what is now Municipal Gardens. The city stopped it; the sources differ on whether by a threat to condemn or by buying the land.",
            sourceLessonSlug: "bb-1927-country-club",
          },
          {
            prompt: "Two sources tell the 1927 episode differently. What does this course do with them?",
            options: [
              "Teach both versions side by side",
              "Use only the newer one, from 2023",
              "Use only the older one, from 2016",
              "Leave the 1927 episode out entirely",
            ],
            correctIndex: 0,
            explanation: "Mullins says the Parks Board threatened to condemn; the IBJ says it bought the land. All agree the city stopped it. The 1927 Recorder pages would settle the rest.",
            sourceLessonSlug: "bb-1927-country-club",
          },
          {
            prompt: "The phrase 'offered Belmont Beach instead' comes from where?",
            options: [
              "The 1936 Recorder article",
              "The 2024 National Register form",
              "A reporter's narration, Scripps News",
              "The 1917 levee monument's plaque",
            ],
            correctIndex: 2,
            explanation: "It is the reporter's own wording in a Scripps News story about the Friends of Belmont Beach. The nomination never says the beach was offered to any group.",
            sourceLessonSlug: "bb-1927-country-club",
          },
          {
            prompt: "What is a wade-in?",
            options: [
              "A lifeguard's training swim",
              "Entering a beach or pool you were kept out of",
              "A city's ceremony opening a new beach",
              "A swimming race held on the river",
            ],
            correctIndex: 1,
            explanation: "A protest in which people enter a beach or pool they have been barred from. It is how a place gets claimed, the third of the course's three words.",
            sourceLessonSlug: "bb-key-terms",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 2 · Built
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "bb-dunbar-park-1932",
      title: "7 · 1930 to 1932: Dunbar Park, a name nobody used",
      section: "Section 2 · Built",
      body: `The beach came before the park, but the park was the city's first deliberate act. **Read it as a purchase with a purpose written into it.**

## 1930: first priority

In 1930 the city's parks and recreation department announced that land for four new parks would be acquired. **First priority** was the triangular tract left from the Garner property after the levee and parkway were built, on the south side of the parkway (Garner, 2024, Sec. 8 p. 14, n. 11, citing the *Indianapolis Star*, March 2, 1930).

## 1931: bought "for the exclusive use by the Black community"

"The 28-acre tract of land was purchased in the fall of 1931 for the exclusive use by the Black community as a park" (Garner, 2024, Sec. 8 p. 14). The nomination explains why the city did it: "Through pressure by its Black residents, the city understood they needed to create a park for its Black population" (Garner, 2024, Sec. 8 p. 14). The city's first park for Black residents, **Frederick Douglass Park, had opened in 1921 on the near northeast side, about four miles from the west side** (Garner, 2024, Sec. 8 p. 14). Lesson 13 goes there.

**So two things are true at once.** Black residents pressed for a park and got one. The park they got was designated by race, which meant the city's other parks stayed closed to them. The purchase was a response to pressure and an instrument of segregation in the same act.

## 1932: trees, diamonds, a playground, and a name

In January 1932 the park department announced 5,000 trees and shrubs, baseball diamonds and playground equipment (Garner, 2024, Sec. 8 p. 14, nn. 12 to 13). The park would be named **Paul Lawrence Dunbar Park**, "in honor of the noted African American author/poet," at the request of the **Westside Community League, an African American organization** (Garner, 2024, Sec. 8 p. 14, n. 14).

**A note on a name.** The nomination prints "Paul Lawrence Dunbar." The poet spelled it Paul Laurence Dunbar. Quote the form as printed, and say that you did.

## "For an unknown reason, the Dunbar name was rarely used"

That is the nomination's sentence (Garner, 2024, Sec. 8 p. 14). By August 1932 the city's Black newspaper, the *Indianapolis Recorder*, was calling it **Belmont Park**: the Haughville Democratic Club announced a public picnic there on August 19, 1932, with fishing (which tells you the beach was in use), horseshoes and a ball game (Garner, 2024, Sec. 8 p. 14, n. 15).

**What can you say about why the name did not stick?** Only what the record allows. The nomination does not know. You may notice that residents named the place after its street and its neighborhood rather than the name the city announced, but that is an observation, not an explanation. **Do not supply a motive the sources do not give.**

## Belmont Park today

The park is now **Rev. Mozel Sanders Park**, renamed in 2008 (lesson 16). The nomination describes it as mostly grass-covered and triangular, with mature shade trees from its early years, a wetland and pond in its east half, and modern recreation facilities. The 2013 Phillips School No. 63 sits on its west edge and is not inside the nominated boundary (Garner, 2024, Sec. 7 pp. 5 to 6).

> **Image placeholder: permission needed.** The nomination's photographs of the park (photos 14 to 21) were taken by Kurt West Garner in March and May 2024 (Garner, 2024, photo log). They may be shown here only with his permission, which has been asked for.

:::reveal Why did the city buy the park land in 1931, according to the nomination? ||| Through pressure from Black residents, the city understood it needed a park for its Black population; it bought the 28-acre tract "for the exclusive use by the Black community."

:::reveal What name did the city give the park in 1932, and what did people call it? ||| Paul Lawrence Dunbar Park (as the form prints it), at the Westside Community League's request. By August 1932 the Recorder was calling it Belmont Park, and the Dunbar name was rarely used.

## Sources
- ${GARNER_2024} Locator: Section 7, pp. 5 to 6 (Belmont Park today); Section 8, p. 14 (PDF p. 14), "Creation of Dunbar/Belmont Park," notes 11 to 15; photo log, pp. 23 to 26.`,
      recallContent: [
        {
          prompt: "Name the three city boards in the key terms, and one thing each did at Belmont.",
          answer: "The parks board (bought land, named and designated parks), the board of public works (built the levee, bought or condemned land for it), and the board of health (delayed the 1942 opening and closed the beach in 1943).",
        },
        {
          prompt: "What is the difference between an assigned place and a claimed place?",
          answer: "An assigned place is designated for a group by a public body that keeps the decision. A claimed place is one people entered after being kept out, forcing the public body to answer.",
        },
      ],
    },
    {
      slug: "bb-august-8-1936",
      title: "8 · August 8, 1936: the formal opening, and what \"formal\" added",
      section: "Section 2 · Built",
      body: `**Black residents were swimming at Belmont long before the city said they could.** The nomination: "Black residents had been informally using the White River bank north of the levee for fishing, wading and swimming, however, the beach was not formally established for Blacks until 1936" (Garner, 2024, Sec. 8 p. 15).

## What the rest of the city had

The first city beaches with lifeguards appear to have been at McClure Park and Big Eagle Creek, from 1933. "Despite development of white-only swimming facilities at nearby Riverside and Rodius Parks, the only swimming facility for the city's Black residents was a pool opened in 1927 at Douglass Park on the near northeast side" (Garner, 2024, Sec. 8 p. 15). **That pool date is disputed**; lesson 13 shows the 1922 account. The beach "was brought about by the contention that there were not enough swimming facilities for colored people on the west side of town" (Garner, 2024, Sec. 8 p. 15).

## The announcement

On August 8, 1936, the *Indianapolis Recorder* ran on its front page: "Formal Opening of the New West Side Beach Saturday." As the nomination quotes it, the "new swimming beach for colored people at Belmont and White River, which has been the source through which many children and grown-ups have warded off the heat waves this summer, will have its formal opening and dedication services Saturday, Aug. 8th, at 3:00 p.m." (Garner, 2024, Sec. 8 pp. 15 to 16, n. 21).

**Read the announcement's own grammar.** The beach "has been" a source of relief all summer. The opening is "formal." The *Recorder* is telling its readers that the city is now recognizing something they had already made.

## What "formal" added

According to the nomination's summary of the article (Garner, 2024, Sec. 8 p. 16):

- **A dedication ceremony**, with a baseball game between Haughville's Baby Lincolns and a visiting team at Belmont Park.
- **Music from a Federal Emergency Relief Administration band.** A New Deal relief agency paid the musicians.
- **Changing tents**, "temporary until shelters and bathhouses could be" built.

The nomination adds that the summer of 1936 was particularly hot, and that before home air conditioning, cooling off in pools and waterways "was nearly a necessity" (Garner, 2024, Sec. 8 p. 16).

**And what "formal" did not add.** Lesson 12 reads the 1941 complaint. Five summers later the tents were still the dressing rooms. **The promise in "until shelters and bathhouses could be built" is the thing to check against the later record, and you will.**

## 1940 and 1941: lessons, lifeguards, a listing

By 1940 the city's parks and recreation department, Flanner House, the Works Progress Administration, the *Recorder* and the American Red Cross were sponsoring **swimming lessons for the west side's Black children at Belmont Beach**, and Belmont's lifeguards and playground supervisors took part in a swim meet at Douglass Pool (Garner, 2024, Sec. 8 p. 16, n. 22). In 1941 the *Indianapolis Star* listed the river at Belmont Avenue among **the city's three beaches** (Garner, 2024, Sec. 8 p. 16, n. 23).

## The photograph

The *Recorder* printed a photograph with its August 8, 1936 story. *Mirror Indy* reproduced it in 2025 with the credit "Indianapolis Recorder," in a story about the Indianapolis Black Heritage and Legacy Trail, a public art project with Flanner House that sought feedback from Haughville residents (Young, 2025).

> **Image placeholder: rights not checked.** The *Recorder*'s August 8, 1936 photograph of the beach. A 1936 American publication is in the public domain only if it was published without a copyright notice or its copyright was not renewed; neither has been checked. Until the holder's rights statement is read, open it in the *Mirror Indy* story linked in Sources.

:::reveal What did the beach's 1936 "formal opening" add that was not there before? ||| A dedication with a ball game, a Federal Emergency Relief Administration band, and changing tents meant to be temporary until shelters and bathhouses were built. The swimming itself was already happening.

## Sources
- ${GARNER_2024} Locator: Section 8, pp. 15 to 16 (PDF pp. 15 to 16), "Development of Belmont Beach," notes 19 to 23.
- ${YOUNG_2025} Locator: the photograph captioned as published in the Recorder on Aug. 8, 1936.`,
      recallContent: [
        {
          prompt: "Why did the city buy the land for Belmont Park in 1931, according to the nomination?",
          answer: "Through pressure from Black residents, the city understood it needed a park for its Black population, and it bought the 28-acre tract for the Black community's exclusive use.",
        },
        {
          prompt: "What did the Recorder call the park by August 1932, and what name had the city announced?",
          answer: "Belmont Park. The city had announced Paul Lawrence Dunbar Park (as the form prints it), requested by the Westside Community League; the Dunbar name was rarely used.",
        },
      ],
    },
    {
      slug: "bb-what-the-recorder-reported",
      title: "9 · Ball fields, merchants and the Baby Lincolns: what the Recorder chose to report",
      section: "Section 2 · Built",
      body: `**A newspaper's choices are evidence too.** Every fact about Belmont Park in the 1930s comes to us through the *Indianapolis Recorder*, as the nomination quotes it. This lesson asks what the *Recorder* chose to put in front of its readers, and what that tells you.

## 1935: "Belmont Park Closes with Big Program"

On September 7, 1935, the *Recorder* reported the end-of-season program at Belmont Park. As the nomination summarizes it (Garner, 2024, Sec. 8 pp. 14 to 15, n. 16):

- West side merchants and business men and women contributed "lavishly."
- More than **125 children** took part.
- The **Belmont Blues**, a Black west side softball team that used the park's field, received the parks department's first-ever certificate for a perfect winning season.
- The sponsors were Standard Grocery, Klezmer Grocery, T. B. Buggs Grocery, Phillips Marcus Pool Room and Belmont Garage. **"Most of these businesses were locally owned by African Americans,"** the nomination says, naming Willie E. Nash's Belmont Garage and Tillman B. Buggs's grocery (Garner, 2024, Sec. 8 pp. 14 to 15).

## The Baby Lincolns

The *Recorder* first mentions the **Baby Lincolns**, a semi-professional Black baseball team from Haughville, in 1932, and reports on them often through about 1937, with several games at Belmont Park. In May 1937 it reported that Haughville's "fast moving, semi-professional baseball club lost a thrilling three-inning exhibition tilt to the Indianapolis A. B. C.'s at Belmont Park" (Garner, 2024, Sec. 8 p. 15, n. 17).

**The ABCs were a Negro league club** and a charter member of the Negro National League, the nomination notes; the park's field was "nearly in the shadow of Perry Stadium," later Victory Field, where the minor league Indianapolis Indians, the ABCs and other Negro league teams played (Garner, 2024, Sec. 8 p. 15). If you have taken the course \`negro-leagues\`, you have met the ABCs.

## 1941: a "night playground"

In 1941 the city opened a "night playground," meaning lights, at Belmont Park among a few others, "then still referred to as a colored park." The nomination reads this as lights "evidently, finally installed" after "longstanding public requests" (Garner, 2024, Sec. 8 p. 15, n. 18).

## What the Recorder chose

Put the three items side by side. **The *Recorder* reported Black merchants paying for children's programs, a Black team winning, a Black ball club playing a Negro league team, and lights won after years of asking.** It reported the community's own work and its own institutions.

**Now hold the rule.** Every one of those stories happened in a park the city had designated by race. The merchants' generosity was real. So was the fact that the children it served could not swim at Riverside, a short walk upriver. **Neither fact explains the other, and a paragraph that lets the ball games make segregation look pleasant has broken the series rule.**

## What the Recorder also reported

The same newspaper, five years after the opening, ran a front-page complaint about the beach's conditions and a column calling the city's system "recreation-jim-crow ... as it is deliberately planned to be." **Lesson 12 reads it.** A newspaper that celebrated the park and attacked the city that ran it was not contradicting itself. It was doing both of its jobs.

:::reveal What does the 1935 sponsor list tell you about the neighborhood, and what does it not? ||| That west side businesses, most of them Black-owned, paid for the park's season-closing program. It does not tell you who owned the park: the city did.

## Sources
- ${GARNER_2024} Locator: Section 8, pp. 14 to 15 (PDF pp. 14 to 15), notes 16 to 18.`,
      recallContent: [
        {
          prompt: "What did the formal opening of August 8, 1936 add to Belmont Beach?",
          answer: "A dedication with a ball game, a Federal Emergency Relief Administration band, and changing tents, temporary until shelters and bathhouses could be built.",
        },
        {
          prompt: "According to the nomination, what was the only swimming facility for Black residents before Belmont Beach was formalized?",
          answer: "The pool at Douglass Park on the near northeast side, which the nomination dates to 1927 (another source says June 1922).",
        },
      ],
    },
    {
      slug: "bb-quiz-built",
      title: "10 · Quiz: built",
      section: "Section 2 · Built",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        shuffleOptions: true,
        questions: [
          {
            prompt: "For whose use did the city buy the 28-acre park tract in 1931, according to the nomination?",
            options: [
              "The exclusive use of the Black community",
              "Every resident of the city, open to all",
              "The white residents of the near west side",
              "Riverside Park's overflow summer crowds",
            ],
            correctIndex: 0,
            explanation: "\"For the exclusive use by the Black community as a park.\" The purchase answered Black residents' pressure and designated the park by race in the same act.",
            sourceLessonSlug: "bb-dunbar-park-1932",
          },
          {
            prompt: "Who asked that the new park be named for Paul Laurence Dunbar?",
            options: [
              "The Haughville Democratic Club",
              "The Westside Community League",
              "The Indianapolis Recorder",
              "The city's board of public works",
            ],
            correctIndex: 1,
            explanation: "The Westside Community League, an African American organization. The nomination prints the name 'Paul Lawrence Dunbar' and says the name was rarely used.",
            sourceLessonSlug: "bb-dunbar-park-1932",
          },
          {
            prompt: "Why did the Dunbar name not stick, according to the nomination?",
            options: [
              "The poet's family objected",
              "The council voted it down",
              "The nomination does not know",
              "A newspaper mocked the name",
            ],
            correctIndex: 2,
            explanation: "\"For an unknown reason, the Dunbar name was rarely used.\" Do not supply a motive the sources do not give.",
            sourceLessonSlug: "bb-dunbar-park-1932",
          },
          {
            prompt: "When was Belmont Beach formally established for Black residents?",
            options: [
              "In 1917, when the levee was done",
              "In 1932, with the park's opening",
              "In 1943, after the sewage closure",
              "In 1936, with a formal opening",
            ],
            correctIndex: 3,
            explanation: "August 8, 1936. Informal use began after the 1917 levee; the formal opening came nineteen summers later.",
            sourceLessonSlug: "bb-august-8-1936",
          },
          {
            prompt: "Which of these did the 1936 formal opening include?",
            options: [
              "A new brick bathhouse",
              "A diving board and slide",
              "A New Deal relief band",
              "Safety ropes in the water",
            ],
            correctIndex: 2,
            explanation: "A Federal Emergency Relief Administration band played. The bathhouses were promised later; the 1941 complaint found tents, no ropes and no diving boards.",
            sourceLessonSlug: "bb-august-8-1936",
          },
          {
            prompt: "Who sponsored the 1940 swimming lessons at Belmont Beach?",
            options: [
              "Riverside Amusement Park alone",
              "Parks, Flanner House, WPA, Recorder, Red Cross",
              "The board of health and the YMCA",
              "The Friends of Belmont Beach",
            ],
            correctIndex: 1,
            explanation: "The city's parks and recreation department, Flanner House, the Works Progress Administration, the Indianapolis Recorder and the American Red Cross.",
            sourceLessonSlug: "bb-august-8-1936",
          },
          {
            prompt: "Who were the Baby Lincolns?",
            options: [
              "A Haughville semi-pro baseball club",
              "A children's choir at Flanner House",
              "The 1941 Belmont lifeguard crew",
              "A Negro National League charter team",
            ],
            correctIndex: 0,
            explanation: "A semi-professional Black baseball team from Haughville, in the Recorder from 1932 to about 1937. The ABCs, who beat them in 1937, were the Negro league charter team.",
            sourceLessonSlug: "bb-what-the-recorder-reported",
          },
          {
            prompt: "The 1935 Recorder story lists west side sponsors, most of them Black-owned. What does that show?",
            options: [
              "That the merchants owned the park",
              "Local business paid for its programs",
              "That segregation had ended there",
              "That the city paid for no programs",
            ],
            correctIndex: 1,
            explanation: "West side merchants, most Black-owned, paid for a season-closing program for children. The park itself was the city's, designated by race.",
            sourceLessonSlug: "bb-what-the-recorder-reported",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 3 · Who decided
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "bb-four-public-bodies",
      title: "11 · Four public bodies: who could buy, build, designate, delay and close",
      section: "Section 3 · Who decided",
      body: `**This is the load-bearing lesson.** At Fox Lake the question "who decided?" had a private answer: a land company and an owners' association. At Belmont every answer is a public body. Make the table, then read what it shows.

## The table

| Body | What it decided at Belmont | When | Source |
|---|---|---|---|
| **Board of public works** | Bought or condemned land for the levee and built it | 1914 to 1917 | Garner, 2024, Sec. 8 p. 12 |
| **Parks board / park department** | Bought the strip between river and levee; later the park tract "for the exclusive use by the Black community"; named it; formally opened the beach; installed lights | 1915; 1931 to 1932; 1936; 1941 | Garner, 2024, Sec. 8 pp. 12, 14 to 16 |
| **Parks board** (again) | Stopped a Black group's riverfront purchase, by threat of condemnation or by purchase (lesson 4) | 1927 | Mullins, 2016; Wooten, 2023 |
| **Board of health** | Delayed the 1942 opening; closed the beach in June 1943 after raw sewage | 1942 to 1943 | Garner, 2024, Sec. 8 p. 17 |
| **The legislature and the courts** | State laws of 1945 (fair treatment in labor and patronage), 1949 (schools) and the early 1960s (housing); later, private suits | 1945 to 1980 | Garner, 2024, Sec. 8 p. 17; Reuben, 2024 |

**Notice the column that is missing: Black residents.** They pressed for the park (Garner, 2024, Sec. 8 p. 14), used the beach before it was designated, wrote the complaints, paid for programs and taught children to swim. **They appear in the record as petitioners, users and critics, never as the body that decided.** That is what "assigned" means.

## The health board's two decisions

In 1942, "the opening of Belmont Beach was delayed by the city's Board of Health." It opened that year, then was delayed again at the start of 1943 "due to raw sewage found at the beach flowing in the White River": a sewer main had broken at the Meridian Street pumping station, and both the 26th Street beach and Belmont were closed for fear that the river "had reached the high danger point" (Garner, 2024, Sec. 8 p. 17, nn. 29 to 30, citing the *Indianapolis News*, June 13, 1942 and June 24, 1943).

**Then the record stops.** "No references are found in Indianapolis newspapers concerning Belmont Beach after 1943." The nomination's explanation is a guess and says so: "Perhaps due to the dangers posed by both contaminants and the dam, the beach was no longer considered a recreational area under the park department" (Garner, 2024, Sec. 8 p. 17).

## 1958: wading pools

In 1958 the park department built wading pools in several parks, including one at Belmont Park, "which seems to indicate that families were discouraged from using the beach" (Garner, 2024, Sec. 8 p. 17, n. 31). **"Seems to indicate" is an inference from an action.** It is reasonable, and the nomination labels it. So should you.

## Why the city allowed the beach at all: two readings

| Who says it | What they say |
|---|---|
| **The Friends of Belmont Beach** | "City officials allowed it only because pollution rendered that stretch of the river useless to white residents." Their page calls this environmental racism, since the beach "was only permitted due to its degraded state" (Friends of Belmont Beach, n.d.-a) |
| **The 2024 nomination** | "Calls for swimming facilities by and for the Black community probably resulted in the use of the Belmont site, but it was also considered contaminated with a severe lack of facilities by many who used it" (Garner, 2024, Sec. 8 p. 16) |

**These are not the same claim, and they do not cancel.** One is the community's interpretation of motive; the other is a cautious reading of cause, with "probably." Both agree on the facts: the water was contaminated and the facilities were poor. **Teach both, each with its owner.** A course that picked one would be deciding a question its sources leave open.

:::reveal Which public body closed Belmont Beach in June 1943, and why? ||| The city's Board of Health, after raw sewage from a sewer main break at the Meridian Street pumping station reached the river; the 26th Street beach was closed too.

:::reveal What role do Black residents have in the decisions table, and what does that show? ||| None as a deciding body. They appear as petitioners, users, critics and volunteers. That absence is what makes Belmont an assigned place rather than an owned one.

## Sources
- ${FOBB_PAST}
- ${GARNER_2024} Locator: Section 8, pp. 12, 14 to 17 (PDF pp. 12, 14 to 17), notes 2 to 5, 11 to 31.
- ${MULLINS_2016}
- ${REUBEN_2024}
- ${WOOTEN_2023}`,
      recallContent: [
        {
          prompt: "What did the 1935 Recorder's season-closing story at Belmont Park report?",
          answer: "Lavish contributions from west side merchants, most of them Black-owned; more than 125 children; and the Belmont Blues softball team's certificate for a perfect season.",
        },
        {
          prompt: "Who were the Indianapolis ABCs, and how do they connect to Belmont Park?",
          answer: "A Negro league club and a charter member of the Negro National League. In May 1937 they beat Haughville's Baby Lincolns in an exhibition at Belmont Park.",
        },
      ],
    },
    {
      slug: "bb-1941-complaint",
      title: "12 · Primary-source exercise: the Recorder's 1941 complaint",
      section: "Section 3 · Who decided",
      lessonType: "exercise",
      body: `> **Content note.** This lesson mentions two drownings in the river near Belmont Beach: a young boy several seasons before 1941, and a young white boy at the dam in July 1941. Neither is named in the record this course read, and this course does not name them. There are no images. You may skip to lesson 13 and come back.

## How to read this lesson

The *Indianapolis Recorder* ran a front-page story on June 28, 1941: "Belmont Beach Draws Complaint on Health, Safe Swim Conditions." **Nobody writing this course has opened that page.** What you are reading is the 2024 nomination's summary of it, with its quotations (Garner, 2024, Sec. 8 pp. 16 to 17, nn. 24 to 28). Read it in two passes: first as the nomination reports it, then, when the page itself is brought in (the *Recorder* pages are on an operator's fetch list), against the page. **If the page and the summary differ, the page wins, and you should say where.**

## What the reporter found, about a month into the 1941 season

As the nomination lists it:

1. No shade, tents or shelters; the dressing tents were inadequate.
2. No safety rope markers in the water; no umbrellas for lifeguards.
3. No parking, "so that cars drove through the crowds onto the beach."
4. Makeshift oars in the rescue boat.
5. No slides or diving boards for children; an arduous entry drive; no lights or benches; weeds high to the riverbank.
6. Not enough disinfectant for the outdoor toilets; no police.
7. **No lifeguard for a sixty-foot hole several yards from the beach "that had claimed the life of a young boy several seasons prior."**

The reporter's conclusion, quoted in the nomination: "in the meantime, the only other authorized swim spot in the city for colored, aside from unsatisfactory Douglass Park, appears to remain a health hazard" (Garner, 2024, Sec. 8 p. 16, n. 25).

**Compare that list with lesson 8.** In 1936 the tents were temporary "until shelters and bathhouses could be" built. In 1941 the tents were still there, and inadequate.

## July 1941: "Mud Hole (alias Belmont Beach)"

A *Recorder* column in early July called it the "Mud Hole (alias Belmont Beach)," and named a lifeguard, William Carter, who "will see to it that you meet with no calamities whatsoever." William Carter and James Carson were the lifeguards that summer (Garner, 2024, Sec. 8 pp. 16 to 17, n. 26).

A month later, a column titled "City Hall Hooey" (July 19, 1941) wrote, as the nomination quotes it, that citizens were "thoroughly disgusted with this breakdown in the recreation-jim-crow (sic) as it is and as it is deliberately planned to be" and wanted the recreation superintendent and "other public hirelings to leave their personal prejudices out of civic matters" (Garner, 2024, Sec. 8 p. 17, n. 27). **The "(sic)" is the nomination's.**

## Late July 1941

"In late July, the life of a young white boy was ended due to drowning at the dam at Belmont Beach." Fishermen saw it; as much as thirty minutes passed before the lifeguard, Will Jackson, was told. The city then prohibited swimming in the White River between 38th and Michigan Streets "except at the two beaches (presumably Belmont and Riverside)" (Garner, 2024, Sec. 8 p. 17, n. 28). The *Recorder*'s headline, as the nomination cites it: "Guard Not at Fault-Coroner."

**Hold the details apart.** The boy who drowned at the dam was white. The beach was designated for Black swimmers. The order that followed kept two beaches open, and the nomination's "presumably" means it is inferring which two. **Do not tidy any of that into a story the record does not tell.**

## The drill

Type the missing word, then check.

## Sources
- ${GARNER_2024} Locator: Section 8, pp. 16 to 17 (PDF pp. 16 to 17), notes 24 to 28. The Recorder issues cited there: June 28, 1941, p. 1, cols. 1 to 2, and p. 8, col. 1; July 9, 1941, p. 8, col. 3; July 19, 1941, p. 10, col. 1; July 26, 1941, p. 3, col. 2. Not opened for this course.`,
      exercise: {
        instructions:
          "Type the missing word, then check. Close answers (spelling, capitalization) count as 'close', not wrong.",
        items: [
          {
            prompt: "The Recorder's June 1941 complaint said the dressing facilities were still ___, five summers after the formal opening.",
            answer: "tents",
            accept: ["tent", "dressing tents", "changing tents"],
            explanation: "In 1936 the tents were temporary until shelters and bathhouses could be built. In 1941 they were still the dressing rooms, and inadequate.",
          },
          {
            prompt: "With no parking at the beach, ___ drove through the crowds onto the sand.",
            answer: "cars",
            accept: ["automobiles", "autos", "car"],
            explanation: "One of the reporter's complaints, as the nomination summarizes it.",
          },
          {
            prompt: "The rescue boat had makeshift ___.",
            answer: "oars",
            accept: ["oar", "paddles"],
            explanation: "A small detail with a large meaning: the safety equipment was improvised.",
          },
          {
            prompt: "A July 1941 Recorder column called the beach the 'Mud ___ (alias Belmont Beach)'.",
            answer: "Hole",
            accept: ["mud hole", "mudhole"],
            explanation: "From the column 'East is West,' July 9, 1941, as the nomination quotes it.",
          },
          {
            prompt: "The 'City Hall Hooey' column called the system 'recreation-jim-___', as it is deliberately planned to be.",
            answer: "crow",
            accept: ["jim-crow", "jim crow"],
            explanation: "The column's word for segregated recreation; the nomination marks it '(sic)'.",
          },
          {
            prompt: "After the July 1941 drowning at the dam, the city banned river swimming between 38th and Michigan Streets except at the two ___.",
            answer: "beaches",
            accept: ["beach", "city beaches"],
            explanation: "The nomination adds '(presumably Belmont and Riverside)': an inference, marked as one.",
          },
          {
            prompt: "The body that delayed the 1942 opening and closed the beach in 1943 was the Board of ___.",
            answer: "Health",
            accept: ["board of health", "health board"],
            explanation: "After raw sewage from a broken sewer main reached the river in June 1943.",
          },
          {
            prompt: "Belmont and the 26th Street beach were closed in June 1943 after raw ___ reached the river from a broken main.",
            answer: "sewage",
            accept: ["sewerage", "raw sewage"],
            explanation: "A sewer main broke at the Meridian Street pumping station. After 1943 the nomination finds no newspaper mention of the beach.",
          },
        ],
      },
    },
    {
      slug: "bb-douglass-park-pool",
      title: "13 · One pool across town: Douglass Park",
      section: "Section 3 · Who decided",
      body: `The 1941 reporter compared Belmont with "unsatisfactory Douglass Park." **Douglass Park was the other assigned place**, and the city's first.

## The park

Frederick Douglass Park opened **July 7, 1921**, on land the Claypool family donated to the city (Verderame, 2023). The *Encyclopedia of Indianapolis* gives the reason in one sentence: **"With the Ku Klux Klan at its peak in the 1920s, the city decided to provide a separate park"** (Verderame, 2023). The nomination places it "on the city's near northeast side in the heart of the Martindale neighborhood," about four miles from the west side's Black population (Garner, 2024, Sec. 8 p. 14). **Even the park's opening year has a dissenter:** the Indiana Memory record for the parks department's Douglass Park drawings says it opened in 1927 (Indianapolis Department of Parks and Recreation, n.d.); the encyclopedia, the city's page and the nomination say 1921.

## The pool: 1922 or 1927?

| Source | When the pool opened |
|---|---|
| *Encyclopedia of Indianapolis* (Verderame, 2023) | June 1922, "the first amenity the city built in the park" |
| Indy Parks, the city's own park page (n.d.) | "A swimming pool was added in 1927" |
| The 2024 Belmont nomination | "a pool opened in 1927 at Douglass Park," citing a 1932 newspaper (Garner, 2024, Sec. 8 p. 15, n. 19) |

**This course does not pick.** Two sources say 1927, one says 1922; counting sources does not settle a date, because two can copy one. What would settle it is a dated record of the pool's opening: a 1922 or 1927 newspaper notice, or the parks department's drawings. The golf course has the same problem: 1927 in the encyclopedia, 1928 on the city's page (Verderame, 2023; Indy Parks, n.d.).

## One pool, for how long

The archaeologist Paul Mullins writes that Douglass Park "remained the city's only public Black pool into the late 1950's" (Mullins, 2016). Mullins also quotes a 1949 *Recorder* complaint from Jesse Posey of the North Indianapolis Civic League: "our west side kids swim in the Canal, Fall Creek or White River," followed by a dash and "all polluted waters" (Mullins, 2016). **Eight years after the 1941 complaint, and six after Belmont dropped out of the newspapers, west side children were still swimming in polluted water.**

## What two assigned places show

Put Douglass and Belmont side by side:

| | Douglass Park | Belmont |
|---|---|---|
| Opened | 1921 | Park 1932; beach formally 1936 |
| Water | A built pool (1922 or 1927) | A river sandbar behind a dam |
| Distance from the west side | About four miles | In Haughville |
| Who decided | The city | The city |

**The city built a pool for one assigned park and designated a polluted river for the other.** Both were responses to Black residents' demands. Both kept the decision with the city, and both kept every other pool and beach closed.

:::reveal Why did the city open Douglass Park in 1921, according to the Encyclopedia of Indianapolis? ||| With the Ku Klux Klan at its peak in the 1920s, the city decided to provide a separate park for Black residents.

:::reveal Why does this course not settle the Douglass pool's opening year by counting sources? ||| Because two sources can repeat one; agreement is not independence. A dated record of the opening, such as a newspaper notice or the parks department's drawings, would settle it.

## Sources
- ${GARNER_2024} Locator: Section 8, pp. 14 to 15 (PDF pp. 14 to 15), note 19.
- Indianapolis Department of Parks and Recreation. (n.d.). *Douglass Park pool, site plan, club house, golf course, concessions, recreational center* [Landscape architectural drawings, 1922 to 1954; rights: In Copyright]. Indiana Memory. Retrieved November 1, 2026, from https://digital.library.in.gov/Record/BSU_IndplsPDArc-5379 Locator: the record's description.
- ${INDY_PARKS} Locator: the history paragraph.
- ${MULLINS_2016} Locator: the paragraphs on Douglass Park and the 1949 Recorder.
- ${VERDERAME_2023} Locator: the history paragraphs, first and second.`,
      recallContent: [
        {
          prompt: "What did the June 28, 1941 Recorder complaint find at Belmont Beach? Name three things.",
          answer: "Any three of: no shade or shelters and inadequate dressing tents; no safety ropes; no parking, so cars drove through crowds; makeshift oars; no lights or benches; too little disinfectant; no police; no lifeguard at a sixty-foot hole that had claimed a young boy's life.",
        },
        {
          prompt: "What happened after the July 1941 drowning at the dam?",
          answer: "The city banned swimming in the White River between 38th and Michigan Streets except at two beaches, presumably Belmont and Riverside, in the nomination's words.",
        },
      ],
    },
    {
      slug: "bb-how-indianapolis-desegregated",
      title: "14 · How Indianapolis desegregated its water, and what it left alone",
      section: "Section 3 · Who decided",
      body: `> **Content note.** This lesson mentions the drowning of a 15-year-old in the White River in 1979 after a private club turned him away. He is not named here. There are no images.

**Desegregation in Indianapolis did not happen on one date.** It happened by law, by protest and by lawsuit, place by place, and a private club on the same river held out longest. This lesson follows three threads.

## Thread 1: the law, as the nomination tells it

The nomination lists state laws: an anti-discrimination law of **1945** on "fair and equal treatment among labor and patronage," a **1949** law desegregating the state's schools, and laws in the **early 1960s** against discrimination in housing. Then it says: **"The city parks and beaches were now integrated"** (Garner, 2024, Sec. 8 p. 17). **That sentence has no date.** The city's own records give a decade: "All city parks and golf courses were integrated in the 1960s," says the Indiana Memory record for the parks department's Douglass Park drawings (Indianapolis Department of Parks and Recreation, n.d.). A date for the beaches themselves is not in any source read here.

## Thread 2: Riverside, the white park with the beach

Riverside Amusement Park, beside the city's Riverside Park, opened in **1904** and "wasn't officially segregated until **1919**." Black patrons were admitted once a year, on days called "Colored Frolic Day"; the Black community called it "milk cap day," because each person had to offer a milk cap to get in (Sutton, 2019). The Indiana Historical Society's post shows a photograph captioned **"NAACP Youth picket outside Riverside Amusement Park in June 1962,"** and lists a *Recorder* article of July 21, 1962, "See Action Near on 'White Only' Signs at Riverside" (Sutton, 2019).

**When did Riverside's segregation end?** The post read for this course does not say. Other accounts put the picket or the end in 1963; this course has seen those only in search results, so it does not use them.

> **Image placeholder: permission needed.** The Indiana Historical Society's 1962 photograph of the NAACP Youth picket. Ask the Society.

## Thread 3: a private club on the same river

The **Riviera Club**, a private swim club on the White River, opened January 12, 1933. "A sign on the club's property read 'No Blacks, no Jews' as late as the 1950s" (Reuben, 2024). A private club was not covered by the laws that opened the city's parks.

In **1974** two Black men sued the club "for illegal discrimination under the 1964 Civil Rights Act." On Memorial Day **1979**, while the case went on, a 15-year-old Black boy was turned away from the club's pool and drowned in the White River; *Indianapolis Monthly* names him, and this course does not. The case, *Bates v. Riviera Club, Inc.*, went to trial on October 6, 1980, and settled: the club ousted several members and board members and admitted applicants it had excluded, and in exchange "was allowed to keep its status as a private club" (Reuben, 2024).

**Read the dates together.** Belmont dropped out of the newspapers in 1943. The city's parks were integrated in the 1960s. A private pool on the same river was turning Black children away in 1979.

## The other way out: close the pool

Some cities answered desegregation orders by **closing their pools**. Jackson, Mississippi did, and the Supreme Court allowed it in *Palmer v. Thompson* (1971). The course \`golf-play-know-work\`, lesson \`golf-three-evasions\`, teaches that case; this course links to it rather than retelling it. **No source read here says Indianapolis closed a pool to avoid integrating it**, so do not say it did.

:::reveal What does the nomination's sentence "The city parks and beaches were now integrated" leave out? ||| A date. It follows a list of laws from 1945 to the early 1960s; the city's own records say parks were integrated in the 1960s, but no source read here dates the beaches.

:::reveal Why could the Riviera Club keep excluding Black swimmers after the public parks opened? ||| It was a private club, outside the laws that opened public facilities. It took a 1974 suit under the 1964 Civil Rights Act, settled after a 1980 trial began, to change its membership practice.

## Sources
- ${GARNER_2024} Locator: Section 8, p. 17 (PDF p. 17), last paragraph.
- Indianapolis Department of Parks and Recreation. (n.d.). *Douglass Park pool, site plan, club house, golf course, concessions, recreational center* [Landscape architectural drawings, 1922 to 1954; rights: In Copyright]. Indiana Memory. Retrieved November 1, 2026, from https://digital.library.in.gov/Record/BSU_IndplsPDArc-5379 Locator: the record's description.
- ${REUBEN_2024} Locator: the sections on the club's opening, the 1974 suit and the 1980 trial.
- ${SUTTON_2019} Locator: the photograph caption and the Further Reading list.`,
      recallContent: [
        {
          prompt: "When did Douglass Park open, and why, according to the Encyclopedia of Indianapolis?",
          answer: "July 7, 1921. With the Ku Klux Klan at its peak, the city decided to provide a separate park for Black residents.",
        },
        {
          prompt: "What are the two dates given for the Douglass Park pool, and who gives each?",
          answer: "June 1922 (Encyclopedia of Indianapolis, Verderame 2023) and 1927 (Indy Parks, and the 2024 Belmont nomination). The course does not pick.",
        },
      ],
    },
    {
      slug: "bb-quiz-who-decided",
      title: "15 · Quiz: who decided",
      section: "Section 3 · Who decided",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Which public body built the levee and bought or condemned land for it?",
            options: [
              "The board of public works",
              "The city's board of health",
              "The Riverside Park company",
              "The Indiana state legislature",
            ],
            correctIndex: 0,
            explanation: "The board of public works. The parks board bought the strip between river and levee for its parkway system.",
            sourceLessonSlug: "bb-four-public-bodies",
          },
          {
            prompt: "In the decisions table, where do Black residents appear?",
            options: [
              "As the body that designated the beach",
              "As petitioners, users and critics",
              "As the owners who sold the park tract",
              "Nowhere at all in the 1930s record",
            ],
            correctIndex: 1,
            explanation: "They pressed for the park, used and criticized the beach, paid for programs and taught swimming, but no deciding body was theirs. That is what assigned means.",
            sourceLessonSlug: "bb-four-public-bodies",
          },
          {
            prompt: "The Friends of Belmont Beach and the nomination explain the city's choice of Belmont differently. What does the course do?",
            options: [
              "It takes the Friends' reading",
              "It takes the nomination's reading",
              "It teaches both with their owners",
              "It says neither reading is useful",
            ],
            correctIndex: 2,
            explanation: "The Friends: pollution made it useless to white residents. The nomination: Black demand probably led to it. Both agree the water was contaminated and facilities poor.",
            sourceLessonSlug: "bb-four-public-bodies",
          },
          {
            prompt: "How does this course know what the June 28, 1941 Recorder complaint said?",
            options: [
              "From the nomination's summary",
              "From the original printed page",
              "From a lifeguard's oral history",
              "From the city's own 1941 report",
            ],
            correctIndex: 0,
            explanation: "Only as the 2024 nomination summarizes and quotes it. The page itself has not been opened, so the page wins if they differ.",
            sourceLessonSlug: "bb-1941-complaint",
          },
          {
            prompt: "In 1941 the beach had no lifeguard at a sixty-foot hole. What had happened there?",
            options: [
              "A rescue boat had sunk in it",
              "A young boy had drowned there",
              "A dam gate had collapsed there",
              "The 1913 flood had first broken",
            ],
            correctIndex: 1,
            explanation: "It 'had claimed the life of a young boy several seasons prior,' the reporter wrote, as the nomination quotes it. The boy is not named in the record read.",
            sourceLessonSlug: "bb-1941-complaint",
          },
          {
            prompt: "When did the Douglass Park pool open?",
            options: [
              "In 1921, the day the park opened",
              "In 1936, the same year as Belmont",
              "Sources differ: 1922 or 1927",
              "In 1958, with the wading pools",
            ],
            correctIndex: 2,
            explanation: "June 1922 (Encyclopedia of Indianapolis) or 1927 (Indy Parks; the Belmont nomination). A dated record of the opening would settle it.",
            sourceLessonSlug: "bb-douglass-park-pool",
          },
          {
            prompt: "What does the Indiana Historical Society's photograph of Riverside Amusement Park show?",
            options: [
              "Its opening day in 1904",
              "A 1919 whites-only sign",
              "A 1962 NAACP Youth picket",
              "Milk cap day in the 1940s",
            ],
            correctIndex: 2,
            explanation: "The caption reads 'NAACP Youth picket outside Riverside Amusement Park in June 1962.' The post does not say when segregation there ended.",
            sourceLessonSlug: "bb-how-indianapolis-desegregated",
          },
          {
            prompt: "What was the outcome of Bates v. Riviera Club, Inc.?",
            options: [
              "The club was closed by court order",
              "A settlement; it stayed a private club",
              "The suit was dismissed in 1974",
              "The city bought the club's pool",
            ],
            correctIndex: 1,
            explanation: "After the trial began in October 1980, the parties settled: the club changed its membership practice and kept its status as a private club.",
            sourceLessonSlug: "bb-how-indianapolis-desegregated",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 4 · Now
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "bb-1959-to-2026",
      title: "16 · 1959 to 2026: an expressway, a new name, a friends group, and a listing",
      section: "Section 4 · Now",
      body: `After 1943 the beach drops out of the newspapers. The park does not. **Then, in 2020, the beach comes back, and this time the people bringing it back are the neighborhood's.**

## The park, 1948 to 2008

| Year | What happened | Source |
|---|---|---|
| 1948 | Wendell Phillips School No. 63 built at the park's south edge as a "community school," with an office for the park's recreation director | Garner, 2024, Sec. 8 p. 13, n. 10 |
| 1955 | A temporary World War II housing development, also called Belmont Park, dismantled, displacing about 85 families; its land added to the park | Garner, 2024, Sec. 8 p. 18, n. 34 |
| 1955 to 1957 | A sewer interceptor built along the parkway at the park | Garner, 2024, Sec. 8 p. 18, n. 32 |
| 1959 | **The Russell Dean Expressway** built on the parkway between 10th and 16th Streets; its right-of-way cut into the park and "further disconnected the park from the beach" | Garner, 2024, Sec. 8 p. 18, n. 33 |
| 1965 | A plan to shift I-65 east of the river, to "preserve such historic landmarks and recreation areas as Taggart Riverside Park, Belmont Park, and Lake Sullivan" | Garner, 2024, Sec. 8 p. 18, n. 36 |
| 1966 | New backstop, courts, flying circles, fountains, playground equipment and a shelter house | Garner, 2024, Sec. 8 p. 18, n. 37 |
| 2008 | Renamed **Rev. Mozel Sanders Park**, for the longtime pastor of Mt. Vernon Missionary Baptist Church and a leader of the city's civil rights movement in the 1960s and 1970s | Garner, 2024, Sec. 8 p. 18, n. 38 |
| 2013 | A new Phillips School built on the park's west edge, over part of the old ball diamond | Garner, 2024, Sec. 8 p. 13 |

**Notice 1955 and 1959.** A housing project's families were displaced to enlarge the park, and four years later a highway took part of the park. The course \`indiana-avenue-a-district-and-what-replaced-it\` (lesson \`ia-powers-alignment\`) teaches how highway alignments were chosen on the near west side; this course only records what one of them did here.

## The beach, 2020 to 2026

- **2020:** "a group of Haughville residents began the work of reclaiming" the beach, the Friends of Belmont Beach say, calling it a "100% grassroots initiative" (Friends of Belmont Beach, n.d.-b).
- **2021:** the first season of a seasonal pop-up park, testing a concept from the city's White River Vision Plan, with funding from the Lilly Endowment, according to the *Indianapolis Business Journal* in June 2023 (Wooten, 2023).
- **2023:** the land under the beach is owned by the Indianapolis Airport Authority and the city, and the group's Haughville Riverfront Vision Plan will propose improvements (Wooten, 2023). **That ownership is as reported in 2023; check it again before you repeat it.**
- **2024:** Kurt West Garner prepares the National Register nomination for the Friends, dated May 22, 2024 (Garner, 2024, Sec. 11 p. 22).
- **April 15, 2026:** the Indiana Historic Preservation Review Board takes up application 2827, "Belmont Park & Beach"; a member of the friends group speaks in favor; **approved unanimously** (Indiana Historic Preservation Review Board, 2026a, item 4).
- **July 31, 2026:** the National Park Service lists it, as **"Belmont Beach," SG100013298** (National Park Service, 2026; Indiana Historic Preservation Review Board, 2026b).

## What was listed? An open question

Read the two descriptions side by side.

| Document | Name | What it covers |
|---|---|---|
| The 2024 nomination | "Belmont Park & Beach" | About 42 acres: the beach, the levee and parkway, and the park, except the 2013 school (Garner, 2024, Sec. 10 pp. 21 to 22) |
| The NPS weekly list, 2026 | "Belmont Beach" | "bounded by White River Parkway West Drive on the south, and the White River on the north east of Belmont Ave." (National Park Service, 2026) |

**The federal list names the beach and describes only the strip north of the parkway.** That may mean the park was dropped from the final boundary. It may only be how the weekly list summarizes a location. **The final registration form as the Park Service accepted it has not been read for this course**, so this course does not say whether Rev. Mozel Sanders Park is inside the listing.

One more wrinkle, from the nomination itself: the beach strip and the parkway were **already** inside an older National Register listing, the Indianapolis Park and Boulevard district; the form counts one contributing resource "previously listed" (Garner, 2024, p. 3; Sec. 7 p. 6). **So the 2026 listing did not put the beach on the Register for the first time. It listed it for a different reason: as a Black recreation site, under "Ethnic Heritage: Black."**

## What listing does

What National Register listing does and does not do is the subject of REST-01 lesson 13 (\`fl-decided-designation\`), from the Park Service's own guidance; read it there rather than assuming listing protects a place. **The decisions about Belmont's future sit where they always did: with public bodies, now with a neighborhood group at the table.**

:::reveal What did the 1959 expressway do to Belmont Park? ||| Its right-of-way cut into the park and further separated the park from the beach.

:::reveal Under what name and number was Belmont listed in 2026, and why is the boundary an open question? ||| "Belmont Beach," SG100013298, listed July 31, 2026. The nomination proposed "Belmont Park & Beach," about 42 acres, but the federal list describes only the strip between the parkway and the river; the final accepted form has not been read.

## Sources
- ${FOBB_HOME}
- ${GARNER_2024} Locator: p. 3 (classification and resource counts); Section 7, p. 6; Section 8, pp. 13 and 18 (PDF pp. 13, 18), notes 10, 32 to 38; Section 10, pp. 21 to 22 (acreage, boundary); Section 11, p. 22 (form prepared by).
- ${HPRB_2026A} Locator: item 4.
- ${HPRB_2026B} Locator: Part IV, Marion County.
- ${NPS_WEEKLY_2026} Locator: Indiana, Marion County.
- ${WOOTEN_2023} Locator: the paragraphs on the pop-up park, land ownership and the vision plan.`,
      recallContent: [
        {
          prompt: "What did the nomination say about integration after the 1945, 1949 and early-1960s laws, and what is missing from that sentence?",
          answer: "\"The city parks and beaches were now integrated.\" It gives no date. The city's own records say parks and golf courses were integrated in the 1960s.",
        },
        {
          prompt: "What was the Riviera Club, and what happened in 1974 and 1980?",
          answer: "A private swim club on the White River, opened 1933, with a 'No Blacks, no Jews' sign as late as the 1950s. Two Black men sued it in 1974 under the 1964 Civil Rights Act; the case went to trial in October 1980 and settled.",
        },
      ],
    },
    {
      slug: "bb-now-tour",
      title: "17 · Now: what is there, and how to see it from public ground (360 tour, forthcoming)",
      section: "Section 4 · Now",
      lessonType: "virtual_tour",
      body: `**The 360 tour for this lesson is forthcoming.** A short capture session in Indianapolis is planned, from public ground only. This course is complete without it. **Read this lesson as your observation brief, and as the rules for going there yourself.**

## The rule before everything else: stay out of the river

The *Indianapolis Business Journal* reported in June 2023 that the White River "is still deemed unsafe for swimming" (Wooten, 2023). **This course never suggests entering the water.** Before any visit, read the current advisory from the state and county health authorities yourself; do not assume it from this lesson, because water quality changes and a 2023 sentence is not today's reading. The Friends of Belmont Beach work with local programs to promote swimming lessons, a news report says (Strong, n.d.). **Learning to swim happens in a pool with a lifeguard, not here.**

## Where you may stand

The beach is public land, owned by the city and the Indianapolis Airport Authority as the *Indianapolis Business Journal* reported in 2023, and the park across the parkway is a city park (Wooten, 2023; Garner, 2024, Sec. 8 p. 18). The Friends hold seasonal events at the beach's northwest end (Garner, 2024, Sec. 8 p. 18).

1. **The levee monument**, at White River Parkway and Belmont Avenue, on the north side of the parkway: a boulder with the 1917 bronze plaque (Garner, 2024, Sec. 7 p. 7). Read the names on it.
2. **The beach's west end**: the parking lot and the lawn events space (Garner, 2024, Sec. 7 p. 6).
3. **The dam abutment**, just north of the parking area, seen from the bank: the stone and concrete remnants of the Emrichsville Dam (Garner, 2024, Sec. 7 p. 6). **Look; do not climb it.**
4. **The park**, across the parkway at the crosswalk: the shade trees, the wetland pond and the walking path (Garner, 2024, Sec. 7 p. 5).

## What to look for, in order

1. **The levee's height.** The parkway sits high on it. Stand at its foot on the park side, then on the beach side. The levee is why there is a strip of city land between road and river at all (lesson 2).
2. **The sandbars.** "Depending on water levels, sandbars appear along the riverbank or just beyond, in the river" (Garner, 2024, Sec. 7 p. 6). If you see one, you are seeing the 1930s beach's raw material.
3. **The dam remnant.** Find where it meets the bank. Then look upriver toward Riverside, the park it was built to serve.
4. **The expressway's cut.** Notice how hard it is to walk from the park to the beach. That is 1959 (lesson 16).
5. **What a tour cannot show:** the tents, the lifeguards, the board of health's notice, who was turned away at Riverside the same afternoon. **Everything this lesson cannot photograph, sections 2 and 3 sent you to read.**

## Consent, if you take pictures

Photograph from public ground. On an event day, ask before photographing anyone, and never photograph children without a parent's consent. **The Friends' events are a community's gatherings, not a backdrop.**

> **Image placeholder: permission needed.** The nomination's photographs of the beach, the dam abutment, the levee and the monument (photos 1 to 13) were taken by Kurt West Garner in March and May 2024 (Garner, 2024, photo log). They may be shown only with his permission, which has been asked for. The Friends of Belmont Beach's own images need the Friends' permission; their site gives no credits or terms.

## Sources
- ${GARNER_2024} Locator: Section 7, pp. 5 to 7 (PDF pp. 5 to 7); Section 8, p. 18; photo log, pp. 23 to 26.
- ${STRONG_ND}
- ${WOOTEN_2023} Locator: the paragraphs on land ownership and water quality.`,
      recallContent: [
        {
          prompt: "Under what name and federal reference number was Belmont listed on the National Register, and on what date?",
          answer: "\"Belmont Beach,\" SG100013298, listed July 31, 2026.",
        },
        {
          prompt: "What happened in 1959 and in 2008 at Belmont Park?",
          answer: "1959: the Russell Dean Expressway's right-of-way cut into the park and separated it further from the beach. 2008: the park was renamed Rev. Mozel Sanders Park.",
        },
      ],
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 5 · The same fight in other cities
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "bb-1949-gary-and-anacostia",
      title: "18 · Summer 1949: Gary's lakefront and Washington's Anacostia pool",
      section: "Section 5 · The same fight in other cities",
      body: `> **Content note.** This lesson describes white crowds attacking Black young people trying to use public beaches and a public pool in 1949. It gives no detail of injuries beyond counts, and there are no images.

**Belmont's mechanism, a public body deciding who may use public water, ran in every city with a public beach or pool.** This section takes it city by city, Midwest first. In summer 1949, four years after World War II, young Black Americans in two cities tested it directly.

## Gary, Indiana: "Young Citizens for Beachhead Democracy"

In 1949 a group of African American youth in Gary formed **Young Citizens for Beachhead Democracy** and announced plans to occupy the city's public beaches on Lake Michigan. The historian Victoria Wolcott, as the National Park Service's theme study quotes her, wrote that they "were met by forty squad cars and scores of white residents who attacked their cars with baseball bats and lead pipes." The study adds: "This was common" (Kahrl & Cammeron, 2022, p. 91).

**Notice the group's name.** "Beachhead" is a military word for the first ground taken on a hostile shore, and "democracy" is the word the country had just fought a war under. What the founders meant by the name is not in the sources read here, so treat any reading of it, including this one, as yours.

## Washington, D.C.: the Anacostia pool

The Anacostia pool sat in Anacostia Park, whose history the National Park Service now tells; in 1949 "the pool was run by the District of Columbia's recreation board," which also hired the lifeguards (National Park Service, 2024). Beginning **June 23, 1949**, Black swimmers challenged its whites-only practice. On **June 29**, around 70 Black and 100 white swimmers were in the pool and an estimated 450 people gathered outside; four people were hurt badly enough to go to the hospital and five were arrested, for disorderly conduct and for spreading anti-segregation flyers (National Park Service, 2024).

**Then the owner decided.** "The National Park Service shut down the pool for the remainder of the summer." In **June 1950**, it "reopened as a desegregated pool" (National Park Service, 2024).

## Read the two together

| | Gary, 1949 | Anacostia, 1949 |
|---|---|---|
| Who ran the water | The city | The District's recreation board; the Park Service closed it |
| Who acted first | Black youth, by announcing an occupation | Black swimmers, by entering |
| What the authority did | Forty squad cars, as Wolcott describes it | Closed the pool, then reopened it desegregated in 1950 |

**Both are claimed places.** At Belmont the city assigned a beach; at Gary and Anacostia young people walked into the ones that had been kept from them, and the public body had to answer. **Same mechanism, run in reverse.**

## A third case from summer 1949, held

St. Louis's Fairground Park pool, opened to Black children on June 21, 1949, belongs in this lesson by date and by mechanism. **Its case card is written and held** until a content decision is made about how this course treats violence aimed at children (see lesson 25).

:::reveal What did the National Park Service do after the June 1949 clashes at the Anacostia pool? ||| It shut the pool for the rest of the summer, and reopened it as a desegregated pool in June 1950.

:::reveal Why does this course call Gary and Anacostia "claimed" rather than "assigned"? ||| Because Black young people entered, or announced they would enter, public water they had been kept out of, forcing the public body to respond. Belmont was designated by the city.

## Sources
- ${KAHRL_2022} Locator: printed p. 91 (PDF p. 99), citing Wolcott (2012), *Race, Riots, and Roller Coasters*, pp. 75, 176.
- ${NPS_ANACOSTIA_2024} Locator: the page's account of June 23 and 29, 1949, and the 1950 reopening.`,
      recallContent: [
        {
          prompt: "Name two places you may stand at Belmont Beach on a visit, and one rule about the river.",
          answer: "Any two of: the 1917 levee monument at the parkway and Belmont Avenue; the west-end parking lot and lawn; the bank opposite the dam abutment; the park across the parkway. Never enter the river; read the current advisory yourself.",
        },
        {
          prompt: "What is the Emrichsville Dam remnant, and why may you look but not climb?",
          answer: "The stone and concrete remains of the 1900 dam built for Riverside Park, whose sandbars made the beach. It is a deteriorated structure at the water's edge.",
        },
      ],
    },
    {
      slug: "bb-kansas-city-swope",
      title: "19 · Kansas City: Swope Park pool, and reading the 1953 opinion",
      section: "Section 5 · The same fight in other cities",
      body: `Gary and Anacostia were claimed by entering. **Kansas City was claimed in court.** This lesson asks you to read part of an appellate opinion, which is a primary source anyone can open.

## The case

The local NAACP helped three young Black residents sue the city to desegregate the **Swope Park** swimming pool. KCUR, Kansas City's public radio station, says the suit "was first filed in 1951" (Ziegler, 2016); the National Park Service's theme study says the three sued "after being denied admission to a whites-only public pool in **1952**" (Kahrl & Cammeron, 2022, p. 93). **Report both.** A filing date and a denial date can differ, and so can two secondary sources.

Thurgood Marshall, then the NAACP's chief attorney, came to try the case. The city's lawyers moved to have him removed from it, and pointed to the riots in St. Louis when Black swimmers were allowed into a pool there (Ziegler, 2016). Judge Ridge, the trial judge, ruled for the plaintiffs in 1952 (Ziegler, 2016).

## The opinion

The city appealed. On **June 10, 1953**, the United States Court of Appeals for the Eighth Circuit affirmed (*Kansas City v. Williams*, 1953). Three passages to read:

1. **The "Negro pool."** The city had a pool it maintained "as a general Negro swimming facility," built in 1939 for $60,000, "some 4 1/2 to 6 1/2 miles away from Swope Park," able to hold 250 people at a time (*Kansas City v. Williams*, 1953).
2. **Swope.** In comparison, "the Swope Park pool would ... have to be given the rank recreationally of a deluxe or blue ribbon facility" (*Kansas City v. Williams*, 1953).
3. **The holding.** It was "impossible for us to say as a matter of law that the court's appraisal of the two pools as not constituting substantially equal facilities for swimming enjoyment was clearly erroneous." Affirmed (*Kansas City v. Williams*, 1953).

**Read what the court did and did not decide.** It did not say separate pools were unconstitutional. It said these two pools were **not equal**, so the city could not keep Black swimmers out of the better one. That is the "separate but equal" doctrine used against itself.

## After

The pool was shut during the appeal, "allegedly to avoid the kind of violence" seen elsewhere, and Black swimmers were first allowed in the following summer, 1954 (Ziegler, 2016). KCUR's 2016 photo caption says the pool "still helps people cool down today" (Ziegler, 2016). **That was true in 2016; check it before you say it now.**

## Compare with Belmont

| | Belmont, 1936 | Swope, 1953 |
|---|---|---|
| The assigned facility | A river sandbar with tents | A 1939 pool for 250, miles away |
| The better facility kept white | Riverside Park's beach, a short walk upriver | Swope Park pool |
| How the gap was answered | It was not, in the record read | A suit, tried by Thurgood Marshall, won on appeal |

**Nobody sued over Belmont in any source read for this course.** That is not evidence nobody tried. It is a gap, and lesson 25 lists it.

:::reveal What did the Eighth Circuit hold in Kansas City v. Williams (1953)? ||| It affirmed the trial court's finding that the separate pool for Black swimmers was not substantially equal to Swope Park's, so the city could not exclude Black swimmers from Swope. It did not rule separate facilities unconstitutional.

## Sources
- ${KAHRL_2022} Locator: printed p. 93 (PDF p. 101), "Legal Challenges."
- ${KC_V_WILLIAMS} Locator: the opinion of Judge Johnsen; the comparison of the two pools and the holding near its end. The online text shows no star pages.
- ${ZIEGLER_2016}`,
      recallContent: [
        {
          prompt: "What happened at the Anacostia pool in June 1949, and what did the Park Service do?",
          answer: "Black swimmers challenged its whites-only practice from June 23; on June 29 about 70 Black and 100 white swimmers were in the pool with 450 outside, four were hospitalized and five arrested. The Park Service closed the pool for the summer and reopened it desegregated in June 1950.",
        },
        {
          prompt: "What was Young Citizens for Beachhead Democracy?",
          answer: "A group of African American youth in Gary, Indiana, who in 1949 announced plans to occupy the city's Lake Michigan beaches and were met, as Wolcott describes it, by forty squad cars and white residents with bats and pipes.",
        },
      ],
    },
    {
      slug: "bb-cincinnati-and-pittsburgh",
      title: "20 · Cincinnati's Coney Island and Pittsburgh's Highland Park pool",
      section: "Section 5 · The same fight in other cities",
      body: `Two more cases, one at an amusement park and one at a city pool, each taking years.

## Cincinnati: Coney Island and Sunlite Pool, 1952 to 1961

Cincinnati's Coney Island amusement park had a swimming pool, Sunlite Pool. In **1952**, after her children heard an advertisement for an event at the park, **Marian Spencer** called to ask whether it was open to all children. "After a representative of the park admitted that the event was not open to black children, Spencer took action" (University of Cincinnati Libraries, n.d.). She chaired an NAACP legal action against the park and, the university's library says, "led a biracial team of 28 witnesses" in the case (University of Cincinnati Libraries, n.d.; Kern, 2019).

**It took nine years to reach the water.** "Entrance to the park was open to all in **1955**," and "Sunlite Pool and Moonlight Gardens were desegregated in **1961**" (Kern, 2019). Spencer later became the first African American woman elected to Cincinnati City Council, in 1983, and died on July 9, 2019 (Kern, 2019).

**Notice the order: the gate first, the pool last.** The pool and the dance hall, the places where bodies were closest, held out six years longer than the entrance.

## Pittsburgh: Highland Park pool, 1931 to 1952

When two large pools opened at **Highland Park** in 1931, white officials "requested Black swimmers produce their 'health certificates' and declined to ask the same of white swimmers" (Kahrl & Cammeron, 2022, p. 60). (The study's own footnote says one pool was rebuilt "since its opening in 1932," so the opening year is 1931 or 1932 within one document.) In the late 1940s, Black swimmers' repeated attempts were "consistently thwarted by mobs of white teenagers, and by local law enforcement, who arrested the Black swimmers for inciting a riot" (Kahrl & Cammeron, 2022, p. 91).

In 1932, after a mob beat two Black men, the **Robert H. Terrell Law Club** petitioned City Council to act (Irvin-Mitchell, 2026). Civil rights efforts and the NAACP pushed the pool toward integration "by 1952," and the *Pittsburgh Courier* of September 6, 1952 ran the headline **"5,000 Negroes Used Highland Park Pool This Year"** (Irvin-Mitchell, 2026).

## The tools, compared

| Tool | Where | Who used it |
|---|---|---|
| A rule applied to one race only ("health certificates") | Pittsburgh, 1931 | City officials |
| Arresting the people attacked | Pittsburgh, late 1940s | Police |
| A petition to the council | Pittsburgh, 1932 | The Robert H. Terrell Law Club |
| A lawsuit with witnesses | Cincinnati, 1952 | A mother, with the NAACP |
| A designated beach on polluted water | Indianapolis, 1936 | The parks board |

**Every tool in the left column is in someone's hands. Ask whose, every time.**

:::reveal What did Marian Spencer's 1952 action against Coney Island achieve, and when? ||| The park's entrance opened to all in 1955; Sunlite Pool and Moonlight Gardens were desegregated in 1961.

:::reveal What were the "health certificates" at Highland Park in 1931? ||| A requirement officials applied to Black swimmers and not to white swimmers, used to keep Black swimmers out of the new pools.

## Sources
- ${IRVIN_MITCHELL_2026} Locator: the paragraphs on the 1932 petition and the 1952 Courier clipping.
- ${KAHRL_2022} Locator: printed p. 60 (PDF p. 68), citing Wiltse (2007), *Contested Waters*, pp. 125 to 126; printed p. 91 (PDF p. 99).
- ${KERN_2019}
- ${UC_LIBRARIES}`,
      recallContent: [
        {
          prompt: "What did the Eighth Circuit decide in Kansas City v. Williams (1953), and what did it not decide?",
          answer: "It affirmed that the separate pool was not substantially equal to Swope Park's, so the city could not keep Black swimmers out of Swope. It did not rule separate facilities unconstitutional.",
        },
        {
          prompt: "How did the court describe the Swope Park pool, compared with the city's pool for Black swimmers?",
          answer: "As 'a deluxe or blue ribbon facility.' The other was a 1939 pool for 250 people, 4.5 to 6.5 miles away.",
        },
      ],
    },
    {
      slug: "bb-wade-ins-and-carousels",
      title: "21 · Wade-ins and carousels: Rainbow Beach, Glen Echo, Gwynn Oak, St. Augustine",
      section: "Section 5 · The same fight in other cities",
      body: `> **Content note.** This lesson describes a 1960 attack with rocks on young people at a Chicago beach, mass arrests, and, in 1964, a motel operator pouring acid into a pool where Black and white protesters were swimming. It gives no graphic detail and shows no images. You may skip to lesson 22 and come back.

**By 1960 the claim had a method: walk in, together, in public, and make the authority choose.** Four places, four years.

## Chicago: Rainbow Beach, 1960 and 1961

Rainbow Beach, on Chicago's South Side, was "one of dozens of public beaches along the city's shoreline ostensibly open to all but, in practice, off-limits to Blacks" (Kahrl & Cammeron, 2022, p. 101). **No law kept anyone off it. A crowd did.** That is the difference from Belmont, where the city drew the line itself.

In summer 1960 a Black police officer and his family were driven from the beach. The *Chicago Defender* reported that a mob drove them off "while his white, on-duty counterpart looked on" (Juravich, n.d.). The South Side NAACP Youth Council decided to stage a wade-in. On **August 28, 1960**, about thirty young people, Black Chicagoans and a few white allies from the University of Chicago, calling themselves "Freedom Waders," spread blankets on the sand (Juravich, n.d.; Kahrl & Cammeron, 2022, p. 102). Within two hours a white mob surrounded them and threw rocks while they sang "We Shall Overcome." **The Youth Council's 21-year-old president was struck in the head and needed 17 stitches** (Kahrl & Cammeron, 2022, p. 102; Juravich, n.d.). The *Defender*'s front page the next day: "Mob Injures Two at Rainbow Beach" (Juravich, n.d.).

**They came back.** On the weekend of **July 7 and 8, 1961**, the wade-ins resumed, "this time with over 200 police officers on hand and an estimated crowd of 10,000 counter-protesters and onlookers." Police arrested and charged nine white people with disorderly conduct, and the demonstrations continued through the summer with police present (Kahrl & Cammeron, 2022, p. 102).

**What changed between 1960 and 1961 was the city's choice.** In 1960 the police "eventually arrived and allowed the group to escape the mob" (Kahrl & Cammeron, 2022, p. 102); in 1961 the police protected them and arrested their attackers. Same beach, same law, a different decision by a public body.

*(This story moved here from REST-03, which opens on the 1919 Chicago beach riot and links to this lesson.)*

## Glen Echo, Maryland, 1960: the carousel

Glen Echo was a private amusement park outside Washington. On **June 30, 1960**, a 26-year-old Howard University student led about two dozen members of the Non-violent Action Group, Black and white, with two high school students, onto the carousel. A security guard told them, "It's strictly for white people," and five were arrested (National Park Service, 2021). Picketing ran all season, until the park closed on September 11, 1960; the theme study counts over 40 arrests that summer (National Park Service, 2021; Kahrl & Cammeron, 2022, p. 100). **On March 14, 1961, the park announced it would integrate** (National Park Service, 2021).

## Gwynn Oak, Maryland, 1963

At Gwynn Oak Park, in Woodlawn, Maryland, "nearly 400 were arrested for trespassing" in protests that ended July 7, 1963, and the park was desegregated on **August 28, 1963** (CBS Baltimore, 2013). Plaques marking the fiftieth anniversary stand near the park's entrance (CBS Baltimore, 2013).

## St. Augustine, Florida, 1964: the pool

In June 1964, during a Southern Christian Leadership Conference campaign in St. Augustine, Martin Luther King Jr. was arrested trying to desegregate the restaurant of the Monson Motor Lodge. A week later, on **June 18, 1964**, two white guests and five Black young people entered the motel's pool. **The man in charge poured muriatic acid into the water** (Kahrl & Cammeron, 2022, p. 105; NPR, 2014). NPR's account reports no serious injuries, and quotes a participant who said there was too much water for the acid to do harm (NPR, 2014).

**Who poured it?** The theme study says "the hotel's manager"; NPR calls him "the hotel owner" and names him (Kahrl & Cammeron, 2022, p. 105; NPR, 2014). **This course does not decide which, and does not name him.**

The day after the attack, the Senate ended a 60-day filibuster and passed the Civil Rights bill; President Johnson signed the Civil Rights Act on July 2, 1964 (Kahrl & Cammeron, 2022, p. 106). **The study draws the link between the pool and the Act; NPR quotes a participant who believed it. Neither proves the vote turned on it, and you should not say it did.**

## What the four share

| Place | Line drawn by | How it was claimed | Answered by |
|---|---|---|---|
| Rainbow Beach (a city beach) | A crowd | Wade-ins, 1960 and 1961 | Police protection, 1961 |
| Glen Echo (an amusement park) | The park | Sit-in on a carousel | The park, 1961 |
| Gwynn Oak Park | The park | Mass trespass arrests | Desegregated, 1963 |
| Monson Motor Lodge (a motel) | The motel | A swim-in | The Civil Rights Act, 1964 |

> **Image placeholder: do not use commercial images.** News photographs of these events are held by commercial agencies. The National Park Service's Glen Echo images, credited to the Glen Echo Park photo archives, may be federal works; confirm each image's credit before use.

:::reveal What changed at Rainbow Beach between August 1960 and July 1961? ||| The city's response. In 1960 a mob drove the waders off and police arrived late; in 1961 over 200 police protected the waders and arrested nine white attackers.

:::reveal Why does this course not name who poured the acid at the Monson Motor Lodge, or say whether he was the manager or the owner? ||| Because its two sources disagree (the theme study says manager, NPR says owner), and the course does not settle a conflict by picking.

## Sources
- ${CBS_BALTIMORE_2013}
- ${JURAVICH_ND}
- ${KAHRL_2022} Locator: printed pp. 100 to 102 (PDF pp. 108 to 110), Glen Echo and Rainbow Beach; printed pp. 105 to 106 (PDF pp. 113 to 114), St. Augustine and the Civil Rights Act.
- ${NPR_2014}
- ${NPS_GLEN_ECHO_2021}`,
      recallContent: [
        {
          prompt: "How long did it take from Marian Spencer's 1952 action to the desegregation of Sunlite Pool, and what opened first?",
          answer: "Nine years. The park entrance opened to all in 1955; Sunlite Pool and Moonlight Gardens were desegregated in 1961.",
        },
        {
          prompt: "What were the 'health certificates' at Pittsburgh's Highland Park pools?",
          answer: "A requirement, from 1931, that officials applied to Black swimmers and not to white swimmers.",
        },
      ],
    },
    {
      slug: "bb-map",
      title: "22 · Map: Belmont Beach and the same fight in other cities",
      section: "Section 5 · The same fight in other cities",
      body: `Click any marker for its detail. **This map draws the whole country, so the Indianapolis points sit almost on top of each other.** Zoom in on Indianapolis to separate them. It shows three things:

**Blue: Belmont, the assigned beach.** Belmont Beach and Rev. Mozel Sanders Park, in Haughville.

**Amber: the rest of Indianapolis's water and parks.** The Riverside Park area upriver, with the dam's white beach and the amusement park; Douglass Park, the other assigned park; Municipal Gardens, the riverfront the city kept from Henry Fleming's group in 1927.

**Green: the same fight elsewhere.** Gary, Washington's Anacostia Park, Kansas City's Swope Park, Cincinnati, Pittsburgh's Highland Park, Chicago's Rainbow Beach, Glen Echo, Gwynn Oak and St. Augustine.

**Purple: the series.** Fox Lake, the lake Indianapolis families went to (REST-01).

**Coordinates are approximate place centers from OpenStreetMap's gazetteer**, not the locations of pools, docks or buildings. The Riverside marker is the gazetteer's point for today's Riverside park, not the old amusement park's gate. Cincinnati's marker is the city center; the gazetteer did not return Coney Island.

**What the map cannot show.** It cannot show the beaches nobody wrote about. Every point here is on it because a newspaper, a court or a nomination recorded a decision. **The towns where Black children simply stayed home in the summer left no point.**

## Sources
- OpenStreetMap contributors. (n.d.). *Nominatim gazetteer*. Retrieved November 1, 2026, from https://nominatim.openstreetmap.org/
- ${GARNER_2024} Locator: Section 8, pp. 12 to 15.`,
      mapContent: {
        atlas: "us-states",
        markers: [
          {
            id: "bb-belmont-beach",
            lat: 39.784,
            lng: -86.192,
            title: "Belmont Beach and Rev. Mozel Sanders Park, Indianapolis",
            color: "#1d4ed8",
            description:
              "The subject of this course. A strip of city land between the White River and the 1917 levee, used informally by Black west siders from 1917 and formally opened by the city as a beach for Black residents on August 8, 1936; closed by the board of health in 1943. The park across the parkway was bought in 1931 and opened in 1932. Listed on the National Register as \"Belmont Beach\" on July 31, 2026.",
          },
          {
            id: "bb-riverside",
            lat: 39.814,
            lng: -86.197,
            title: "Riverside Park area, Indianapolis",
            color: "#d97706",
            description:
              "The white park upriver. The Emrichsville Dam (1900) was built so Riverside would have deeper water and a beach. Riverside Amusement Park, beside it, was officially segregated from 1919, admitted Black patrons once a year, and was picketed by NAACP Youth in June 1962.",
          },
          {
            id: "bb-douglass-park",
            lat: 39.804,
            lng: -86.133,
            title: "Frederick Douglass Park, Indianapolis",
            color: "#d97706",
            description:
              "The city's first park for Black residents, opened July 7, 1921, about four miles from the west side. Its pool opened in June 1922 or in 1927 (sources differ) and, one historian writes, remained the city's only public Black pool into the late 1950s.",
          },
          {
            id: "bb-municipal-gardens",
            lat: 39.793,
            lng: -86.202,
            title: "Municipal Gardens, Indianapolis",
            color: "#d97706",
            description:
              "The riverfront site where Henry Fleming's group planned the Spring Hill Country Club in 1927. The city stopped it: by a threat to condemn, in one account, or by buying the land, in another.",
          },
          {
            id: "bb-fox-lake",
            lat: 41.623,
            lng: -85.025,
            title: "Fox Lake, Steuben County, Indiana",
            color: "#7c3aed",
            description:
              "REST-01. A lake resort Black families bought into from the 1920s; Indianapolis sent more of its summer residents than any other city. An owned place, where Belmont was an assigned one.",
          },
          {
            id: "bb-gary",
            lat: 41.564,
            lng: -87.337,
            title: "Gary, Indiana",
            color: "#15803d",
            description:
              "1949: Young Citizens for Beachhead Democracy announced plans to occupy the city's Lake Michigan beaches and, as one historian describes it, were met by forty squad cars and white residents with bats and pipes.",
          },
          {
            id: "bb-anacostia",
            lat: 38.873,
            lng: -76.983,
            title: "Anacostia Park, Washington, D.C.",
            color: "#15803d",
            description:
              "June 1949: Black swimmers challenged the pool's whites-only practice; four hospitalized and five arrested on June 29. The National Park Service closed the pool for the summer and reopened it desegregated in June 1950.",
          },
          {
            id: "bb-swope",
            lat: 38.999,
            lng: -94.522,
            title: "Swope Park, Kansas City, Missouri",
            color: "#15803d",
            description:
              "Kansas City v. Williams (8th Cir. 1953): the city's separate pool was not substantially equal to Swope's 'deluxe or blue ribbon facility.' Black swimmers were admitted the next summer.",
          },
          {
            id: "bb-cincinnati",
            lat: 39.101,
            lng: -84.513,
            title: "Cincinnati, Ohio (Coney Island and Sunlite Pool)",
            color: "#15803d",
            description:
              "1952: Marian Spencer led an NAACP legal action against Coney Island. The park's entrance opened to all in 1955; Sunlite Pool was desegregated in 1961. Marker at the city center, not the park.",
          },
          {
            id: "bb-highland-park",
            lat: 40.472,
            lng: -79.919,
            title: "Highland Park, Pittsburgh",
            color: "#15803d",
            description:
              "1931: 'health certificates' demanded of Black swimmers only; late 1940s: Black swimmers arrested for 'inciting a riot'; integrated by 1952, when the Pittsburgh Courier reported 5,000 Black swimmers that season.",
          },
          {
            id: "bb-rainbow-beach",
            lat: 41.76,
            lng: -87.553,
            title: "Rainbow Beach, Chicago",
            color: "#15803d",
            description:
              "August 28, 1960: the South Side NAACP Youth Council's 'Freedom Waders' were attacked with rocks. July 7 and 8, 1961: they returned with over 200 police present, and nine white people were charged.",
          },
          {
            id: "bb-glen-echo",
            lat: 38.967,
            lng: -77.139,
            title: "Glen Echo Park, Maryland",
            color: "#15803d",
            description:
              "June 30, 1960: a carousel sit-in by the Non-violent Action Group; five arrested that day and over 40 by summer's end. The park announced integration on March 14, 1961.",
          },
          {
            id: "bb-gwynn-oak",
            lat: 39.327,
            lng: -76.718,
            title: "Gwynn Oak Park, Maryland",
            color: "#15803d",
            description:
              "Summer 1963: nearly 400 arrested for trespassing in protests that ended July 7. Desegregated August 28, 1963.",
          },
          {
            id: "bb-st-augustine",
            lat: 29.895,
            lng: -81.315,
            title: "St. Augustine, Florida",
            color: "#15803d",
            description:
              "June 18, 1964: a swim-in at the Monson Motor Lodge pool, into which the man in charge poured muriatic acid. The Senate passed the Civil Rights bill the next day.",
          },
        ],
      },
    },
    {
      slug: "bb-quiz-other-cities",
      title: "23 · Quiz: the same fight in other cities",
      section: "Section 5 · The same fight in other cities",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What did the National Park Service do after the June 1949 clashes at the Anacostia pool?",
            options: [
              "Filled the pool in for good",
              "Closed it, then reopened it in 1950",
              "Kept it open with a police guard",
              "Sold the pool to a private club",
            ],
            correctIndex: 1,
            explanation: "It shut the pool for the rest of the summer and reopened it as a desegregated pool in June 1950.",
            sourceLessonSlug: "bb-1949-gary-and-anacostia",
          },
          {
            prompt: "What did Young Citizens for Beachhead Democracy announce in Gary in 1949?",
            options: [
              "A boycott of the city's buses",
              "A plan to occupy the beaches",
              "A lawsuit over the city's pools",
              "A petition to build a new pool",
            ],
            correctIndex: 1,
            explanation: "They announced plans to occupy Gary's public Lake Michigan beaches, and were met, as Wolcott describes it, by forty squad cars and white residents with bats and pipes.",
            sourceLessonSlug: "bb-1949-gary-and-anacostia",
          },
          {
            prompt: "What did the Eighth Circuit hold in Kansas City v. Williams (1953)?",
            options: [
              "That all segregation was unconstitutional",
              "That the city could close Swope Park pool",
              "That the separate pool was not equal",
              "That the case was filed in the wrong court",
            ],
            correctIndex: 2,
            explanation: "It affirmed that the separate pool was not substantially equal to Swope's, so Black swimmers could not be kept out. It did not strike down separate facilities as such.",
            sourceLessonSlug: "bb-kansas-city-swope",
          },
          {
            prompt: "When was the Swope Park suit filed?",
            options: [
              "Sources differ: 1951 or 1952",
              "In 1949, the year of St. Louis",
              "In 1953, the year it was decided",
              "In 1954, the summer it reopened",
            ],
            correctIndex: 0,
            explanation: "KCUR says it was first filed in 1951; the National Park Service's study dates the refusal and suit to 1952. Report both.",
            sourceLessonSlug: "bb-kansas-city-swope",
          },
          {
            prompt: "At Cincinnati's Coney Island, what opened to Black patrons last?",
            options: [
              "The park's front entrance",
              "The parking lot and gates",
              "Sunlite Pool, in 1961",
              "The picnic grounds, 1955",
            ],
            correctIndex: 2,
            explanation: "The entrance opened to all in 1955; Sunlite Pool and Moonlight Gardens were desegregated in 1961, nine years after Marian Spencer's 1952 action.",
            sourceLessonSlug: "bb-cincinnati-and-pittsburgh",
          },
          {
            prompt: "What did Pittsburgh officials demand of Black swimmers only at Highland Park in 1931?",
            options: [
              "A membership fee",
              "A swimming test",
              "Health certificates",
              "A white sponsor",
            ],
            correctIndex: 2,
            explanation: "'Health certificates,' which they did not ask of white swimmers. A rule applied to one race is a tool of exclusion even when it sounds neutral.",
            sourceLessonSlug: "bb-cincinnati-and-pittsburgh",
          },
          {
            prompt: "What kept Black Chicagoans off Rainbow Beach before 1960, according to the theme study?",
            options: [
              "A city ordinance on race",
              "In practice, white crowds",
              "A fee only some could pay",
              "A fence across the sand",
            ],
            correctIndex: 1,
            explanation: "It was a public beach 'ostensibly open to all but, in practice, off-limits to Blacks.' No law drew the line; a crowd enforced it.",
            sourceLessonSlug: "bb-wade-ins-and-carousels",
          },
          {
            prompt: "What changed at Rainbow Beach between the 1960 and 1961 wade-ins?",
            options: [
              "The city passed a beach law",
              "The waders brought lawyers",
              "Police protected the waders",
              "The beach was closed to all",
            ],
            correctIndex: 2,
            explanation: "In 1961 over 200 police were on hand and nine white people were charged with disorderly conduct. Same beach and law; a different decision by a public body.",
            sourceLessonSlug: "bb-wade-ins-and-carousels",
          },
          {
            prompt: "The theme study and NPR describe the man who poured acid into the Monson pool differently. How?",
            options: [
              "Guest or lifeguard",
              "Manager or owner",
              "Police or sheriff",
              "Cook or bellhop",
            ],
            correctIndex: 1,
            explanation: "The theme study says the hotel's manager; NPR says the hotel owner. The course reports both and settles neither.",
            sourceLessonSlug: "bb-wade-ins-and-carousels",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 6 · Write
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "bb-write-assignment",
      title: "24 · Your assignment: one beach, one board decision, one newspaper page",
      section: "Section 6 · Write",
      lessonType: "assignment",
      body: `Beat 6 asks what can only be said about this place. **REST-00 lesson 20 gave you the rules for writing about a property. They all apply.** This lesson adds what is particular to an assigned place.

## The assignment

Write **800 to 1,200 words** of nonfiction built on **three documents**: one place, one decision by a public body about it, and one newspaper page that reported it. You may use Belmont or any place in Section 5. Every factual sentence must be checkable against a source you name.

## Choose your subject

- **Belmont:** the 1931 purchase "for the exclusive use by the Black community"; the 1936 opening; the 1941 complaint; the 1943 closing; the 1959 expressway; the 2026 listing.
- **Indianapolis:** Douglass Park's pool; Riverside's once-a-year day; the 1927 country club; the Riviera Club case.
- **Elsewhere:** Swope Park and *Kansas City v. Williams*; Anacostia, 1949 to 1950; Coney Island, 1952 to 1961; Highland Park's "health certificates"; Rainbow Beach, 1960 and 1961.

**You may not write about a living private person**, quote anyone who has not agreed to be quoted, or name a child in a drowning or an attack. Historical public figures, in the roles the sources give them, are fine.

## Build the table first

Five columns, as in REST-00: **date, event, deciding body, source, and what else was happening.** At Belmont the fourth column will almost always name a public body. **If it names a Black-owned body as deciding, check your source again**; at Belmont that would be a finding no source read for this course supports.

## Craft rules

1. **Lead with the document**, not a mood.
2. **Say whose verb it is.** The city designated, bought, closed. Residents used, asked, complained, organized. Do not hand a public body's decision to the people it was made about.
3. **Mark "as quoted in."** If you have the newspaper only through a nomination, say so in the sentence.
4. **Teach a conflict as a conflict.** If two sources disagree, show both with their owners.
5. **One paragraph, at least, on what you could not establish.**
6. **No lost paradise and no triumph.** Belmont was a polluted strip the city offered in place of equal access; its revival is the neighborhood's own work. Both sentences are true, and neither cancels the other.

## Sources
- ${GARNER_2024}
- ${KAHRL_2022}`,
      recallContent: [
        {
          prompt: "What did the Rainbow Beach 'Freedom Waders' do on August 28, 1960, and what happened?",
          answer: "About thirty young people from the South Side NAACP Youth Council spread blankets on the sand; a white mob surrounded them and threw rocks, and the Youth Council's 21-year-old president needed 17 stitches.",
        },
        {
          prompt: "What happened at the Monson Motor Lodge on June 18, 1964, and what happened in the Senate the next day?",
          answer: "Two white guests and five Black young people entered the pool, and the man in charge poured muriatic acid into it. The next day the Senate ended its filibuster and passed the Civil Rights bill.",
        },
      ],
    },
    {
      slug: "bb-what-was-cut",
      title: "25 · What this course cut, and the sources nobody has opened",
      section: "Section 6 · Write",
      body: `**A course that hides its gaps teaches you to hide yours.** Here are this course's.

## Not settled

- **Whether the 2026 listing includes the park.** The nomination proposed "Belmont Park & Beach"; the federal list names "Belmont Beach" and describes only the strip north of the parkway. The final accepted form was not read.
- **How the city stopped the 1927 country club**: a threat to condemn, or a purchase.
- **When the Douglass Park pool opened**: June 1922 or 1927.
- **When Riverside Amusement Park's segregation ended.** The source read shows a June 1962 picket and does not give an end date.
- **When Belmont and the city's other beaches were integrated.** The nomination's sentence has no date.
- **Who poured the acid at the Monson pool, manager or owner.**
- **Whether anyone ever sued over Belmont.** No source read mentions a suit. That is a gap, not a finding.

## Left out on purpose

- **Every living private person.** The Friends of Belmont Beach's officers, the historian the *Indianapolis Business Journal* interviewed, the Kansas City plaintiffs, the Glen Echo and Rainbow Beach organizers: described, not named or quoted, until they agree.
- **The names of children** who drowned or were hurt.
- **Images.** None is embedded. The nomination's 21 photographs, the Friends' images and the *Recorder*'s 1936 photograph all need permission or a rights check first.
- **A claim this course saw only in a search result**, about a city ban on Black swimming at two west side spots, from a neighborhood riverfront study whose file could not be opened. **The nomination documents a different 1941 ban, on river swimming except at two beaches.** The reported ban is not taught until the study is read.

## Held: three case cards waiting on a decision

Three more cases belong in Section 5 by date and by mechanism. Their case cards are **written and held** while a decision is made about how this course treats violence aimed at children and crowds: **St. Louis's Fairground Park pool (June 1949)**, **Detroit's Belle Isle (June 1943)** and **the Biloxi, Mississippi wade-ins (1959 to 1968)**. If they are added, they will carry content notes and no images, like lessons 12, 14 and 21.

## The unopened sources

1. **The *Indianapolis Recorder***, 1927 to 1943: the Fleming episode, the 1936 opening, the 1941 complaint and columns. **Every *Recorder* fact in this course is second hand until someone reads the pages.**
2. **The *Indianapolis News* and *Star*** pages the nomination cites, 1899 to 2008, by page and column (Garner, 2024, Sec. 9 pp. 19 to 20).
3. **The neighborhood riverfront study** cited for the reported ban.
4. **The final National Register record** for SG100013298, with its boundary.
5. **Jeff Wiltse's *Contested Waters* (2007)** and **Victoria Wolcott's *Race, Riots, and Roller Coasters* (2012)**, the books the theme study draws on for Pittsburgh, Gary and Louisville. Not read for this course.

**If you want to add to Belmont's history instead of repeating it, that list is where to start.** The Friends of Belmont Beach, who asked for the nomination, are the people to tell what you find.

## What comes next in the series

- **REST-03, The Midwest Ring,** opens on the 1919 Chicago beach riot, the event the Rainbow Beach waders were answering four decades later.
- **REST-06, All of God's Beaches,** will take this course's question abroad: South Africa's beach law, Australia's 1965 Freedom Ride and the pools of Moree, Bermuda. It is researched before it is built.

## Sources
- ${GARNER_2024} Locator: Section 9, pp. 19 to 20 (bibliography).
- ${KAHRL_2022} Locator: printed pp. 60, 91 (notes 7 and 118).
- ${NPS_WEEKLY_2026}`,
    },
    {
      slug: "bb-final-quiz",
      title: "26 · Final quiz",
      section: "Section 6 · Write",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 10,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is the series rule this course runs on?",
            options: [
              "Lead with the happiest documented moment",
              "Never use a positive to soften a negative",
              "Give each side of every question equal space",
              "Use only federal sources, never local ones",
            ],
            correctIndex: 1,
            explanation: "Belmont was a loved, crowded place and an assigned one. Both are true; neither answers the other.",
            sourceLessonSlug: "bb-owned-assigned-claimed",
          },
          {
            prompt: "Which word does this course use for Belmont Beach?",
            options: [
              "Owned",
              "Assigned",
              "Claimed",
              "Leased",
            ],
            correctIndex: 1,
            explanation: "The city designated it for Black use and kept every decision, including closing it. Rainbow Beach was claimed; Fox Lake was owned.",
            sourceLessonSlug: "bb-owned-assigned-claimed",
          },
          {
            prompt: "Who held title to Belmont Beach in the 1930s?",
            options: [
              "Henry Fleming's country club",
              "The city's park department",
              "The Westside Community League",
              "The Friends of Belmont Beach",
            ],
            correctIndex: 1,
            explanation: "The park department, since the levee was finished in 1917. No source read says any Black group owned or ran it.",
            sourceLessonSlug: "bb-1913-to-1917-levee-and-dam",
          },
          {
            prompt: "The National Register period of significance for Belmont begins in 1917. What happened that year?",
            options: [
              "The levee and parkway were finished",
              "The city formally opened the beach",
              "The Emrichsville Dam was completed",
              "The park was named for Dunbar",
            ],
            correctIndex: 0,
            explanation: "The levee's completion led to informal use of the riverbank beach. The dam dates from 1900, the park's naming from 1932, the formal opening from 1936.",
            sourceLessonSlug: "bb-1913-to-1917-levee-and-dam",
          },
          {
            prompt: "Which of these is a claim no source read for this course supports?",
            options: [
              "The city designated the beach in 1936",
              "A Black company owned and ran the beach",
              "The board of health closed it in 1943",
              "Black residents swam there before 1936",
            ],
            correctIndex: 1,
            explanation: "The land was the city's. The 'offered Belmont Beach instead' line is a reporter's narration, and no source says any Black group held title or ran it.",
            sourceLessonSlug: "bb-1927-country-club",
          },
          {
            prompt: "What was promised as temporary at the 1936 opening and still there in 1941?",
            options: [
              "The changing tents",
              "The FERA band stand",
              "The night lighting",
              "The board's warning",
            ],
            correctIndex: 0,
            explanation: "Tents were to serve until shelters and bathhouses could be built. The 1941 complaint found them still in use, and inadequate.",
            sourceLessonSlug: "bb-1941-complaint",
          },
          {
            prompt: "Why did the city open Douglass Park in 1921, according to the Encyclopedia of Indianapolis?",
            options: [
              "To honor a donor's late father",
              "To provide a separate park",
              "To replace a flooded old park",
              "To host a national convention",
            ],
            correctIndex: 1,
            explanation: "'With the Ku Klux Klan at its peak in the 1920s, the city decided to provide a separate park.'",
            sourceLessonSlug: "bb-douglass-park-pool",
          },
          {
            prompt: "Why could the Riviera Club keep turning Black swimmers away after the public parks opened?",
            options: [
              "It was a private club",
              "It stood outside the city",
              "It was owned by the state",
              "It had a federal permit",
            ],
            correctIndex: 0,
            explanation: "It was private, outside the laws that opened public facilities; a 1974 suit under the 1964 Civil Rights Act, settled after a 1980 trial began, changed its practice.",
            sourceLessonSlug: "bb-how-indianapolis-desegregated",
          },
          {
            prompt: "Why is what the 2026 listing covers still an open question?",
            options: [
              "The state review board rejected the park",
              "The federal list describes only the beach",
              "The nomination was withdrawn in 2025",
              "The park is too new to be listed at all",
            ],
            correctIndex: 1,
            explanation: "The form proposed 'Belmont Park & Beach,' about 42 acres; the federal list names 'Belmont Beach' bounded by the parkway and the river. The final form was not read.",
            sourceLessonSlug: "bb-1959-to-2026",
          },
          {
            prompt: "What does this course tell you to check before visiting Belmont Beach?",
            options: [
              "The current water advisory",
              "The 1936 Recorder's rules",
              "The nomination's boundary",
              "The levee plaque's names",
            ],
            correctIndex: 0,
            explanation: "The river was still unsafe for swimming in 2023. Read the state and county advisory on the day; never enter the water.",
            sourceLessonSlug: "bb-now-tour",
          },
          {
            prompt: "Which map color marks the places that fought the same fight in other cities?",
            options: [
              "Blue",
              "Amber",
              "Green",
              "Purple",
            ],
            correctIndex: 2,
            explanation: "Green. Blue is Belmont, amber is the rest of Indianapolis, purple is the series (Fox Lake).",
            sourceLessonSlug: "bb-map",
          },
          {
            prompt: "In Kansas City v. Williams, how did the court get to its result?",
            options: [
              "It found the two pools unequal",
              "It ruled segregation itself void",
              "It ordered both pools closed",
              "It sent the case to the state",
            ],
            correctIndex: 0,
            explanation: "It affirmed that the 1939 pool for Black swimmers was not substantially equal to Swope's, using 'separate but equal' against itself.",
            sourceLessonSlug: "bb-kansas-city-swope",
          },
          {
            prompt: "Which three case cards are written but held out of this course?",
            options: [
              "Gary, Anacostia, Swope Park",
              "Fairground Park, Belle Isle, Biloxi",
              "Glen Echo, Gwynn Oak, St. Augustine",
              "Coney Island, Highland, Rainbow",
            ],
            correctIndex: 1,
            explanation: "St. Louis's Fairground Park pool (1949), Detroit's Belle Isle (1943) and the Biloxi wade-ins (1959 to 1968), held while a content decision is made.",
            sourceLessonSlug: "bb-what-was-cut",
          },
          {
            prompt: "In your assignment, what does the 'deciding body' column at Belmont almost always name?",
            options: [
              "A neighborhood merchant",
              "A public body of the city",
              "A Black-owned company",
              "A national civil rights group",
            ],
            correctIndex: 1,
            explanation: "The parks board, public works, the board of health, later the courts. If it names a Black-owned deciding body, recheck the source.",
            sourceLessonSlug: "bb-write-assignment",
          },
          {
            prompt: "Why does the course list the Indianapolis Recorder as an unopened source?",
            options: [
              "Every issue was lost in a fire",
              "It knows it only via the nomination",
              "It was published only in French",
              "It never covered Belmont at all",
            ],
            correctIndex: 1,
            explanation: "Every Recorder fact here comes as the 2024 nomination quotes or summarizes it. The pages themselves have not been opened.",
            sourceLessonSlug: "bb-what-was-cut",
          },
          {
            prompt: "What did the parks department build at Belmont Park in 1958, and what does the nomination infer from it?",
            options: [
              "A bathhouse; that the beach was busy",
              "A wading pool; families left the beach",
              "A boat dock; the river was cleaner",
              "A fence; the park was being closed",
            ],
            correctIndex: 1,
            explanation: "A wading pool, which 'seems to indicate that families were discouraged from using the beach.' An inference from an action, labeled as one.",
            sourceLessonSlug: "bb-four-public-bodies",
          },
        ],
      },
    },
  ],
};

// ═══════════════════════════════════════════════════════════════════════════════════════════════
// HELD CASE CARDS: NOT IN THE COURSE. DO NOT SEED.
// ═══════════════════════════════════════════════════════════════════════════════════════════════
//
// BAM's content decision (plan 95, answer 5) approved the drownings and the Monson acid. It did NOT
// approve Fairground Park (1949), Belle Isle (1943) or the Biloxi wade-ins (1959 to 1968), which plan 95
// §9 flagged as violence aimed at children and crowds. These three cards are written so his answer can
// switch them in without a new research pass. The seeder reads `BELMONT_BEACH_COURSE.lessons` only, so
// nothing below reaches the database, the citations list or a learner.
//
// TO SWITCH ONE IN (user task 388, after BAM says yes for that card):
//   1. Move the card into `lessons`, in Section 5, by date: Belle Isle before lesson 18; Fairground Park
//      after Anacostia in lesson 18's order (as its own lesson after 18); Biloxi after lesson 21.
//   2. Renumber every lesson title from that point ("19 · ..." and so on) and every "lesson N" cross-
//      reference in the bodies (lessons 1, 5, 18, 25 and the recall cards).
//   3. Delete the "held" paragraph in lesson 18 (Fairground) and the "Held" section of lesson 25.
//   4. Add two quiz questions per card to lesson 23 and one to the final, with the length checks green.
//   5. Add map markers (St. Louis 38.625, -90.190; Belle Isle 42.342, -82.970; Biloxi 30.401, -88.889,
//      OpenStreetMap place centers fetched 2026-11-01).
//   6. Biloxi: the death toll is DISPUTED (two killed per MDAH and the City of Biloxi; ten shot and no
//      deaths per the NPS theme study, citing the New York Times). The card teaches the dispute; settle
//      it from James Patterson Smith's or J. Michael Butler's published work before asserting either.
//   7. Re-run pnpm lint, the course audit and the tests.
// If BAM says no to a card, delete it here and remove its sentence from lesson 25.

const ALLEN_2022 =
  "Allen, M. R. (2022, April 2). The long reconstruction of Fairground Park. *The Common Reader*. https://commonreader.wustl.edu/the-long-reconstruction-of-fairground-park/";
const LANE_2022 =
  "Lane, S. N. (2022, December). *(H)our history lesson: The Detroit race riot of 1943*. National Park Service. https://home.nps.gov/articles/000/-h-our-history-lesson-the-detroit-race-riot-of-1943.htm";
const MDAH_MASON =
  "Mississippi Department of Archives and History. (n.d.). *Gilbert R. Mason papers* [Finding aid, Z/2300.000]. Retrieved November 1, 2026, from https://finding.mdah.ms.gov/manuscripts/z2300000";
const BILOXI_2018 =
  "City of Biloxi. (2018, April 25). *New wade-in marker added to Freedom Trail*. https://biloxi.ms.us/new-wade-in-marker-added-to-freedom-trail/";

export const BELMONT_HELD_CASE_CARDS: AuthoredLesson[] = [
  {
    slug: "bb-held-fairground-park-1949",
    title: "HELD · St. Louis, June 21, 1949: the Fairground Park pool",
    section: "Section 5 · The same fight in other cities",
    body: `> **Content note.** This lesson describes a white crowd attacking Black children at a public pool in 1949. It gives counts, not details of injuries, and there are no images.

## The decision

St. Louis's welfare director, John J. O'Toole, decided in June 1949 to open the city's pools to Black swimmers. "I can't lawfully refuse them," he said, and "I'm not going to be a party to an unlawful gentlemen's agreement" (Allen, 2022).

## June 21, 1949

On the day the Fairground Park pool opened to them, "200 White children and teenagers surrounded and began attacking 30 Black children who had entered the pool." Some 5,000 people gathered in the park; over 400 police officers with 51 vehicles worked through the night. Five Black people and one white person were seriously injured; police arrested three white people and four Black people (Allen, 2022). **Other accounts give different injury and arrest counts**; this card uses one source's and says so.

## What the city did next

"Mayor Darst immediately closed both Fairground and Marquette Pools on June 22, 1949." He reopened them desegregated in 1950, after a federal court ruling (Allen, 2022). "There are no monuments or markers to teach the story of the pool riot" (Allen, 2022).

**Compare with Anacostia in the same summer:** the same sequence, attack, closure, court or federal decision, desegregated reopening the next June. **And with Kansas City:** the city's lawyers cited the St. Louis riot as a reason to keep Swope segregated (lesson 19).

## Sources
- ${ALLEN_2022}`,
  },
  {
    slug: "bb-held-belle-isle-1943",
    title: "HELD · Detroit, June 1943: Belle Isle",
    section: "Section 5 · The same fight in other cities",
    body: `> **Content note.** This lesson concerns the 1943 Detroit riot, which began at a city park and left 34 people dead. It gives counts only, and there are no images.

## A shared park

Belle Isle is an island park in the Detroit River, owned by the city, where white and Black residents fished, picnicked, boated and played sports. As Detroit's Black population grew, the National Park Service's theme study says, they "mingled with occasional fights over things like outdoor grills and fishing spots" (Kahrl & Cammeron, 2022, p. 59).

## June 1943

In June 1943 white sailors attacked Black visitors to the park, and separately white women beat a Black woman; rumors spread and the violence grew (Kahrl & Cammeron, 2022, p. 59). A National Park Service lesson dates the first fight to the evening of June 20, 1943. **"Twenty-five African Americans were killed, 17 of them by police"**; 34 people died in all; authorities reported about 675 injured; 6,000 soldiers were sent in (Lane, 2022). The theme study gives "over 600" injured (Kahrl & Cammeron, 2022, p. 59).

## Why it belongs beside Belmont

Belle Isle was not assigned to anyone. **It was shared, and the sharing was what was contested.** The same summer of 1943 that ended Belmont Beach with a sewage closure, a shared park in Detroit ended in a riot. Neither event explains the other.

## Sources
- ${KAHRL_2022} Locator: printed p. 59 (PDF p. 67), citing Wolcott (2012), p. 43.
- ${LANE_2022}`,
  },
  {
    slug: "bb-held-biloxi-wade-ins",
    title: "HELD · Biloxi, 1959 to 1968: the wade-ins",
    section: "Section 5 · The same fight in other cities",
    body: `> **Content note.** This lesson describes a 1960 mob attack and shootings on and near a public beach. The death toll is disputed between sources, and the lesson shows the dispute. There are no images.

## A public beach with no law

Biloxi's beachfront was built with public money, including federal funds. On **May 14, 1959**, Dr. Gilbert R. Mason and eight others staged the first wade-in (Mississippi Department of Archives and History [MDAH], n.d.). In October 1959 Mason and two others petitioned the county board of supervisors for "unrestrained use of the beach," pointing out that no law barred Black people from it and that public funds had built it. Mason rejected a separate "colored" section: Black people wanted "all twenty-six miles" (Kahrl & Cammeron, 2022, p. 99). The board refused; the state's Sovereignty Commission surveilled the petitioners, and at least three signers were fired (Kahrl & Cammeron, 2022, p. 99).

## April 1960

On April 17, 1960, Mason swam alone and was arrested for disorderly conduct (MDAH, n.d.; Kahrl & Cammeron, 2022, p. 99). A larger wade-in followed the next Sunday.

**The sources disagree on what happened next.**

| Source | Date | How many came | Casualties |
|---|---|---|---|
| NPS theme study, citing the *New York Times* | April 24, 1960 | Nearly 125 | Eight Black and two white people shot; at least fifteen seriously injured |
| City of Biloxi (2018) | April 24, 1960 | 125 | "Two African-American men were murdered" |
| MDAH finding aid | April 25, 1960 | Fifty | "Two people were killed and over twenty people were injured" |

**This card does not settle it.** A published history of the wade-ins (the work of James Patterson Smith or J. Michael Butler) should be read before any number of deaths is taught as fact.

## What the federal government did

On May 17, 1960, the Justice Department sued Harrison County, arguing that federal money for the beach obliged equal access: "the first time the federal government had used the appropriation of federal dollars to enforce equal access to public recreational amenities" (Kahrl & Cammeron, 2022, p. 100). The beaches were integrated on **August 16, 1968** (City of Biloxi, 2018). A Mississippi Freedom Trail marker was added in 2018 (City of Biloxi, 2018).

**Link:** REST-04's Gulfside Assembly lessons, when built, will show the theme study's note that state investigators passed over Gulfside during the wade-ins (Kahrl & Cammeron, 2022, p. 104).

## Sources
- ${BILOXI_2018}
- ${KAHRL_2022} Locator: printed pp. 99 to 100, 104 (PDF pp. 107 to 108, 112).
- ${MDAH_MASON}`,
  },
];
