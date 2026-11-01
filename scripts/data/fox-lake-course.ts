// Authored "Fox Lake: Indiana's Lake of Its Own" (REST-01), a cited, high-school-and-up SITE course on
// Learn.WitUS (Culture & History), course 01 of the series "A Place of Our Own: Black Resorts, Retreats
// and Vacation Towns" (REST). REST-00 is `where-we-rested`, its prerequisite.
//
// Brief: plans/future-courses/culture-and-history/black-resorts/2026-11-01-fox-lake-brief.md (tracked
// twin cloud-briefs/rest-01/00-approved-brief.md), generated from the series brief plans/94, which BAM
// approved on 2026-11-01 with all ten recommendations. Evidence log:
// plans/research/2026-11-01-fox-lake-idlewild-sources.md (all facts below were read there or fetched
// again in the build session of 2026-11-01).
//
// It runs the six-beat site template of plans/37 (Then, Built, Who decided, Now, Next, Write), one beat
// per section, as `indiana-avenue-a-district-and-what-replaced-it` does.
//
// Sourcing discipline (the load-bearing part of this file):
//   * Every teaching lesson carries APA 7 in-line citations and a `## Sources` bibliography with a
//     locator. The two National Register nominations (Greiff, 2001; Garner, 2025), the Indiana Green
//     Book multiple property form (Borland & Linebarger, 2025), the 2022 state marker and the NPS theme
//     study (Kahrl & Cammeron, 2022) are the spine. The Indianapolis Recorder is quoted ONLY as the
//     nominations quote it; no Recorder page was opened (Hoosier State Chronicles answered 403).
//   * CONFLICTS ARE TAUGHT, NOT RESOLVED BY GUESSING. Plat 1926 or 1927; founding year; level of
//     significance in 2001; the 2026 form's own Green Book years and period of significance; Pryor's
//     listing date; lake size; cottage count; the hotel manager's name; "one of only two" and "first
//     listed" are each shown with their owners (lessons 4 and 14).
//   * BAM's decision (answer 5): the 1930 Marion lynching is included, briefly, with a content note and
//     NO images, from the Equal Justice Initiative's calendar and the one sentence in the 2026 form. No
//     source links it to the land company's decisions, and the course says so.
//   * Consent rule (answer 7): NO living private person is named or quoted. The nominations quote a
//     living daughter of the Pryors and name other living owners; the course uses none of it. No cottage
//     street number appears: the 2026 form lists owners by address and the course does not reproduce it.
//   * Images: only the Indiana Album clubhouse photograph (rights "No Copyright, United States") may be
//     shown, after the /admin/media upload and approval; until then it is a described placeholder with
//     its credit. Every other image is a placeholder that names who must give permission.
//   * Public stops only. The lesson that plans a visit sends learners to the state marker, the DNR
//     public access site and public roads; the lodge only by the association's invitation.
//
// Held: public-ready, but publishHoldReason keeps it unpublished until the Fox Lake Preservation
// Foundation has had about three weeks to review it (BAM, answer 4; user task 382).
//
// House rule: NO em-dashes or en-dashes in prose.

import type { AuthoredCourse } from "./authored-course";

const GREIFF_2001 =
  "Greiff, G.-J. (2001). *Fox Lake* [National Register of Historic Places registration form, NRIS 01000360; form dated March 29, 2000; prepared for the Fox Lake Property Owners Association]. National Park Service. https://npgallery.nps.gov/GetAsset/0c6b54b7-921f-4e4f-89c1-fa0f2eacaa13";
const GARNER_2025 =
  "Garner, K. W. (2025). *Fox Lake (additional information and boundary increase)* [National Register of Historic Places registration form, prepared February 28, 2025, for the Fox Lake Preservation Foundation; listed March 2, 2026]. Indiana Department of Natural Resources, Division of Historic Preservation and Archaeology. https://www.in.gov/dnr/historic-preservation/files/hp-Fox-Lake-Additional-Documentation-and-Boundary-Increase.pdf";
const BORLAND_2025 =
  "Borland, A., & Linebarger, E. (2025). *Green Book sites in Indiana, 1936-1967* [National Register of Historic Places multiple property documentation form]. Gray & Pape, Inc., for the Indiana Department of Natural Resources, Division of Historic Preservation and Archaeology. https://www.in.gov/dnr/historic-preservation/files/hp-Green-Book-Sites-in-Indiana.pdf";
const IHB_2022 =
  "Indiana Historical Bureau. (2022). *Fox Lake Resort* [State historical marker 76.2022.1, with annotated text]. Indiana State Library. https://www.in.gov/history/state-historical-markers/find-a-marker/find-historical-markers-by-county/indiana-historical-markers-by-county/fox-lake-resort/";
const KAHRL_2022 =
  "Kahrl, A. W., & Cammeron, M. (2022). *African American outdoor recreation theme study: Historic context and National Historic Landmark survey*. National Park Service; Organization of American Historians. https://www.nps.gov/subjects/nationalhistoriclandmarks/upload/African-American-Outdoor-Recreation-National-Historic-Landmark-Theme-Study.pdf";
const NPS_2024 =
  "National Park Service. (2024). *Weekly list of actions taken on properties* [Week ending November 15, 2024]. https://www.nps.gov/subjects/nationalregister/weekly-list-2024-11-15.htm";
const NPS_2026 =
  "National Park Service. (2026). *Weekly list of actions taken on properties: 2/27/2026 through 3/6/2026*. https://home.nps.gov/subjects/nationalregister/weekly-list-2026-03-06.htm";
const NPS_FAQ =
  "National Park Service. (2026, February 17). *FAQs: National Register of Historic Places*. https://www.nps.gov/subjects/nationalregister/faqs.htm";
const EJI =
  "Equal Justice Initiative. (n.d.). *Thousands lynch two Black men in Marion, Indiana* [A history of racial injustice calendar, August 7]. Retrieved November 1, 2026, from https://calendar.eji.org/racial-injustice/aug/7";
const INDIANA_ALBUM =
  "Indiana State Library. (n.d.). *Fox Lake Clubhouse interior, Angola, Indiana, circa 1950s* [Photograph; Dixon Family Collection; rights statement No Copyright, United States]. Indiana Album, Indiana Memory. https://digital.library.in.gov/Record/PPO_IndianaAlbum-7860FF8E-F9CD-4FA0-A9B9-909931734393";
const INDIANA_LANDMARKS_2021 =
  "Indiana Landmarks. (2021, April 26). *Saving sites rich in African American heritage*. https://www.indianalandmarks.org/2021/04/saving-sites-rich-in-african-american-heritage/";
const FOX_LAKE_FOUNDATION =
  "Fox Lake Preservation Foundation. (n.d.). *About us*. Retrieved November 1, 2026, from https://www.foxlakefoundation.org/about";

export const FOX_LAKE_COURSE: AuthoredCourse = {
  title: "Fox Lake: Indiana's Lake of Its Own",
  description:
    "A cited, high-school-and-up site course on Fox Lake, near Angola in Steuben County: the lake resort Black families from Indianapolis, Fort Wayne, Detroit, Chicago and Toledo built in northeast Indiana from the 1920s, and still use. It reads the place out of its two National Register nominations (2001 and 2026), the Indiana Green Book survey and the 2022 state marker. A learner can say who bought the land and who sold the lots (five white businessmen, in 1924), who built the cottages and ran the hotel (Black owners, a Black contractor, and two Black women from 1943), what the owners' association could and could not decide, how to read a Green Book listing and a nomination that disagrees with itself, why Fox Lake held after 1964 when coastal Black resorts did not, and how to visit without stepping onto anyone's land. It runs on the series rule: a positive is never used to soften a negative. Fox Lake existed because Indiana's other lakes were closed. Course 01 of A Place of Our Own (REST). Prerequisite: Where We Rested (where-we-rested).",
  lessons: [
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 1 · Then
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "fl-a-lake-of-its-own",
      title: "1 · Why Indiana needed a lake of its own",
      section: "Section 1 · Then",
      body: `**Take Where We Rested (\`where-we-rested\`) first.** It is course 00 of this series, and it gives you the rule this course runs on and the vocabulary (plat, lot, deed, association) that every lesson here uses. This course applies that method to one place, the way the Indianapolis route course applies the Green Book method to one street.

## The rule, once more

**Never use a positive to soften a negative.** Fox Lake is a place Black families bought, built and still keep. It is also a place that existed because the rest of Indiana's lakes were closed to them. **Both are true at once. Neither one answers the other.** If a paragraph in this course reads like a lake brochure, it has failed; if it reads like an elegy, it has failed too.

## What was closed

The 2001 National Register nomination for Fox Lake states the condition plainly: "In the years between World War I and World War II (and for some years after), blacks generally were not welcomed in white resort communities" (Greiff, 2001, Sec. 8, pp. 4 to 5). It calls Fox Lake a direct response to that situation, a variation of the redlining Black families met in cities and towns, which gave them "a place of their own" for summer (Greiff, 2001, Sec. 8, p. 5).

The state's Green Book survey describes how the closing worked at resorts. Some resorts refused Black guests outright; others excluded them more quietly, by simply not having the segregated restrooms and changing rooms that segregation required. It quotes a decision from Yosemite National Park that Black visitors could not be openly discriminated against but "should be told that the parks have no facilities for taking care of them" (Taylor, 2020, as cited in Borland & Linebarger, 2025, p. 102). And it names the second thing a resort offered: a chance to own a second home, at a time when white owners, real estate agents and mortgage lenders combined to keep Black buyers out of white resort areas (Borland & Linebarger, 2025, pp. 102 to 103).

## Indiana in the 1920s

The 2001 nomination places Fox Lake in a decade when the Ku Klux Klan "was a powerful force in Indiana throughout much of the 1920s," alongside groups such as the White Citizens Protective League in Indianapolis, and when, in the historian James H. Madison's words as the nomination quotes them, "White homeowners and real estate brokers continued to co-operate to restrict black home buying or renting" (Greiff, 2001, Sec. 8, p. 5).

## One lake that was refused

**In 1922 a group of middle-class Black families from Chicago tried to buy Sager Lake, outside Valparaiso, for a summer resort. Local opposition stopped it** (Greiff, 2001, Sec. 8, p. 5; Garner, 2025, p. 32). The 2001 nomination lists its sources for that: a Valparaiso newspaper headline of June 5, 1922, "Sager Sale Is Not Completed," and a Hobart paper of July 6, 1922 (Greiff, 2001, Sec. 9, p. 10). **That is the kind of paper trail this course wants from you: a date, a headline, a newspaper.**

## What came of it

Until Fox Lake, the 2001 nomination says, there appear to have been no Black lake resorts in Indiana; it says Fox Lake "appears to have been the only such community in Indiana" before World War II, and one of the few in the Midwest (Greiff, 2001, Sec. 8, pp. 5, 9). The 2026 update to the nomination goes further and calls it "Indiana's only African American lake resort community," which is why it raised the district's significance to the whole state (Garner, 2025, p. 22).

**Read those two claims carefully, because they are not the same claim.** "Only before World War II" and "only, ever" are different statements, and lesson 14 will show you how often a later document says more than an earlier one without new evidence.

## What you will be able to do at the end

- Say who bought the Fox Lake land, from whom, in what year, and where it is written down.
- Tell three different founding dates apart, and say what each one dates.
- Read a Green Book listing and a National Register nomination as evidence, and catch a nomination contradicting itself.
- Say what a property owners' association can and cannot decide, and who decides the rest.
- Plan a visit that stays on public ground.

## Sources
- ${BORLAND_2025} Locator: pp. 102 to 103, "Subtype 1: Resort."
- ${GARNER_2025} Locator: p. 22, statement of significance; p. 32, Sager Lake.
- ${GREIFF_2001} Locator: Section 8, pp. 4 to 5 and 9 (PDF pp. 8, 9 and 13); Section 9, p. 10 (PDF p. 14), bibliography.
- Taylor, C. (2020). *Overground railroad: The Green Book and the roots of Black travel in America*. Abrams Press. [Cited in Borland & Linebarger, 2025, p. 102, n. 260; not read for this course.]`,
    },
    {
      slug: "fl-1924-the-company",
      title: "2 · 1924: five white businessmen, a farm, and a company in Marion",
      section: "Section 1 · Then",
      body: `**Fox Lake was founded by white men and bought by Black families.** That sentence is the first thing the record says, and a course that softened it would be telling a nicer story than the nominations tell.

## The company

**In 1924, five white businessmen bought land on the south side of Fox Lake and incorporated as the Fox Lake Land Company.** They were C. M. Thieme and O. L. Christman of Fort Wayne, G. G. Eckhart and Paul Moreland of Marion, and Harry Schrader of Kokomo. They set up offices in Marion and set about to "develop the property and sell lots to black families" (Greiff, 2001, Sec. 8, p. 5; Garner, 2025, p. 25). The 2026 nomination adds that all three cities had large Black populations (Garner, 2025, p. 25).

**A note on a name.** The 2001 form's scanned text reads "Cristman"; the 2026 form spells it "Christman" (Greiff, 2001, Sec. 8, p. 5; Garner, 2025, p. 25). This course uses the 2026 spelling and tells you it did, which is what you should do every time two documents spell one person two ways.

## The land

**The land was a farm.** The south shore was two large tracts in the early 1900s: the W. H. Ward farm, 77 acres on the southwest and west shores, and the Hershey property on the south and southeast shores. The Ward farm is what the company bought (Garner, 2025, pp. 24 to 25). It was not easy ground. The 2001 nomination says it was tangled with trees and scrub, swampy in many places, and had been thought of as a good place to go hunting (Greiff, 2001, Sec. 8, p. 5).

**The incorporation is on paper.** The state marker's annotated text cites the notice of new corporations in the Muncie *Star Press* of October 12, 1924, page 2 (Indiana Historical Bureau, 2022, n. 1). This course has not read that page. The marker's editors did, and they tell you where it is.

## The pattern, and why it matters

The Indiana Green Book survey treats this as the usual shape of a Black resort: "The land for Black resorts was typically purchased by white businessmen, platted, and sold to Black buyers" (Borland & Linebarger, 2025, p. 103; see also Garner, 2025, p. 23). Idlewild in Michigan began the same way, as REST-00 lesson 4 showed.

**Do not read that as a kindness, and do not read it as a scam.** Read it as a business arrangement shaped by exclusion. The sellers had land and access to the lake market that Black buyers were denied; the buyers had demand that the rest of the market refused. **The company made money because the rest of Indiana's lakes were closed.** That is a fact about the market, and it does not need an adjective.

## The address

The company's offices were in Marion. The 2026 nomination, in the same paragraph that names the founders, describes Marion as "the city with the infamous last Black lynching in Indiana that occurred in 1930" (Garner, 2025, p. 25). **The next lesson is about that sentence.** It carries a content note, and you may read it when you are ready.

:::reveal Who founded the Fox Lake Land Company, and who was it formed to sell to? ||| Five white businessmen from Fort Wayne, Marion and Kokomo, in 1924. It was formed to develop the land and sell lots to Black families.

:::reveal Where is the 1924 incorporation recorded, according to the state marker? ||| In the Muncie Star Press notice of new corporations, October 12, 1924, page 2, which the marker's annotated text cites.

## Sources
- ${BORLAND_2025} Locator: p. 103.
- ${GARNER_2025} Locator: pp. 23 to 25.
- ${GREIFF_2001} Locator: Section 8, p. 5 (PDF p. 9).
- ${IHB_2022} Locator: annotated text, note 1.`,
      recallContent: [
        {
          prompt: "What two things did a lake resort offer Black families in the 1920s, according to the Indiana Green Book survey?",
          answer: "A vacation place where they were welcome, and a chance to own a second home, at a time when white owners, agents and lenders combined to keep Black buyers out of white resort areas.",
        },
        {
          prompt: "What happened at Sager Lake in 1922, and why does it matter to Fox Lake?",
          answer: "Middle-class Black families from Chicago tried to buy it for a resort near Valparaiso and local opposition stopped it. It shows that a Black resort in Indiana was refused before Fox Lake was built.",
        },
        {
          prompt: "What is the series rule, and how does it apply to Fox Lake?",
          answer: "Never use a positive to soften a negative. Fox Lake is a place Black families built and kept, and it existed because the other lakes were closed. Both are true; neither answers the other.",
        },
      ],
    },
    {
      slug: "fl-marion-1930",
      title: "3 · Marion, 1930: what the record puts beside the company's address",
      section: "Section 1 · Then",
      body: `> **Content note.** This lesson names a lynching: the killing of two Black teenagers by a white mob in Marion, Indiana, in 1930. It describes what happened in plain words and without detail of the violence. It shows no images, and it does not link to the photograph of the event. You may skip to lesson 4 and come back.

## Why this is here

The 2026 Fox Lake nomination names Marion as the city of the land company's offices and, in the same sentence, as "the city with the infamous last Black lynching in Indiana that occurred in 1930" (Garner, 2025, p. 25). **A course that read that sentence and left it out would be choosing comfort over the record.** So this lesson does three things: it says what happened, it says what the record does and does not connect, and it gives you the rule for writing about both.

## What happened

On the night of August 7, 1930, a white mob in Marion broke into the Grant County Jail, took out **Thomas Shipp and Abram Smith**, both 19, and hanged them in the courthouse yard without a trial. The three young men held there had been accused, in the Equal Justice Initiative's words, of "murdering a white man and sexual impropriety against a white woman." The Equal Justice Initiative puts the crowd at between 5,000 and 10,000 people. A third young man, **James Cameron**, 16, was beaten and about to be killed when someone in the crowd said he was innocent, and he was released. No one was convicted for the killings; the Equal Justice Initiative records that all-white juries acquitted the mob's leaders. Cameron was convicted as an accessory and served four years. He later founded NAACP chapters in Indiana, opened America's Black Holocaust Museum in Milwaukee in 1988, and was pardoned by the State of Indiana in 1993 (Equal Justice Initiative, n.d.).

**A photograph was taken that night, and the Equal Justice Initiative calls it one of the best-known photographs of an American lynching.** This course does not show it and does not link to it. You do not need to see it to know what it records.

## What the record connects, and what it does not

Hold two facts side by side.

| Date | Fox Lake | Marion |
|---|---|---|
| **1924** | The Fox Lake Land Company incorporates, with offices in Marion | |
| **1926 to 1929** | The plat, the first lots sold, the first cottage (lesson 4) | |
| **August 7, 1930** | | Thomas Shipp and Abram Smith are lynched; James Cameron survives |
| **1932** | Lowell T. Boyd takes control of the company and moves its offices to Kokomo | |

**Now the discipline.** No source read for this course says the lynching changed anything at Fox Lake. The 2001 nomination gives a reason for the 1932 change of control: "changing fortunes brought about by the Depression" (Greiff, 2001, Sec. 8, p. 6). **The office moved from Marion to Kokomo because Kokomo was where the new controlling owner's insurance business was** (Greiff, 2001, Sec. 8, p. 6). Nothing in the record says more than that, and you may not say more than that either.

**That is the co-occurrence rule doing its work.** A company selling Black families a place to rest kept its offices in a city where, six years after it incorporated, a white mob numbered in the thousands killed two Black teenagers. **Both facts are true. They sit on one calendar. Neither explains the other, and neither softens the other.** The 2026 nomination placed them in one sentence; it did not draw a line between them, and neither does this course.

## Sources
- ${EJI}
- ${GARNER_2025} Locator: p. 25.
- ${GREIFF_2001} Locator: Section 8, p. 6 (PDF p. 10).`,
      recallContent: [
        {
          prompt: "Who formed the Fox Lake Land Company, when, and where were its offices?",
          answer: "Five white businessmen (Thieme and Christman of Fort Wayne, Eckhart and Moreland of Marion, Schrader of Kokomo), in 1924, with offices in Marion.",
        },
        {
          prompt: "What did the company buy?",
          answer: "The W. H. Ward farm, 77 acres on the southwest and west shores of Fox Lake: wooded, scrubby and swampy ground that had been used for hunting.",
        },
      ],
    },
    {
      slug: "fl-1926-to-1932",
      title: "4 · 1926 to 1932: three dates for three events, and a plat that has two",
      section: "Section 1 · Then",
      body: `**Ask "when was Fox Lake founded?" and you will get at least four answers.** That is not because anyone is careless. It is because "founded" covers several events, and each source picks a different one. **Your job is to name the event, then give its date and its owner.**

## Four answers, four events

| Answer | What it dates | Whose answer |
|---|---|---|
| **1924** | The land company buys the farm and incorporates | Greiff, 2001, Sec. 8, p. 5; Garner, 2025, p. 25; Kahrl & Cammeron, 2022, p. 185 |
| **1926 or 1927** | The original plat is laid out and lots begin to sell | Garner, 2025, p. 25 (1926); Greiff, 2001, Sec. 8, p. 6 (1927) |
| **1928** | The first cottage is built | Greiff, 2001, Sec. 8, p. 6; the 2026 form's period of significance starts here (Garner, 2025, p. 22) |
| **"the 1920s"** | The resort as a whole | The state marker (Indiana Historical Bureau, 2022) |

The National Park Service's theme study adds a fifth version: it says the Fox Lake community "began" in 1927, when Black families started renting cabins from white landowners or building on lots they had bought (Kahrl & Cammeron, 2022, p. 56). **None of these is wrong about its own event. They are wrong only if you let one stand for all the others.**

## The plat: 1926 or 1927

**This is a real disagreement, and this course does not settle it.**
- The 2001 nomination: "The first dirt road was cut into the property in 1927, and the Original Plat along the southwestern shore was subdivided" (Greiff, 2001, Sec. 8, pp. 5 to 6).
- The 2026 nomination: "Fox Lake's plat was established by 1926 and at least three lots were sold to Alma Alsop, William Crawford, and Carl Wilson, Sr. in the same year" (Garner, 2025, p. 25).
- **The 2026 nomination also contradicts itself.** Two pages earlier it says the community "was established by 1927 when the original plat was created" (Garner, 2025, p. 23).

**What would settle it:** the plat as recorded in Steuben County, or the 1930 W. W. Hixson plat book of Pleasant Township, which the 2026 form lists in its bibliography (Garner, 2025, p. 34). Until someone reads the recorded plat, the honest answer is "1926 or 1927, and here is who says which."

## June 1926: the opening

The 2026 nomination quotes an advertisement in the Indianapolis Recorder, the city's Black newspaper, of June 19, 1926: "The long looked for Indiana lake resort for Colored people" and "Fox Lake Big Opening Sunday June 20." A bus excursion from Indianapolis cost $5.00, and the ad gave drivers a route north through Peru and Fort Wayne to Angola (Garner, 2025, p. 26). **This course has not seen the ad; it reports the nomination's quotation of it.** An advertised opening in 1926 fits the 2026 form's plat date better than the 2001 form's, but an advertisement is a promise, not a recorded plat.

## 1928: the first cottage

**Carl Wilson Sr.**, a Black businessman who had built an exterminating business in Fort Wayne that reached beyond the Black community, built the first of his three cottages starting in 1928. The access road ended just past his cottage, and the lane was named **Wilson Drive** (Greiff, 2001, Sec. 8, p. 6). It is Lane 130 today, and two of his cottages still stand on it (Garner, 2025, p. 25). The 2026 form says the first cottage was built "by 1929" (Garner, 2025, p. 25), a looser date that does not contradict 1928.

## 1929 and 1932

In 1929 a few of the incorporators paid for 58 children of the Indianapolis Orphans' Home to spend two weeks at the lake (Garner, 2025, p. 26, citing the Recorder of August 10, 1929). **Development was slow.** The 2026 form suspects the Depression; the 2001 form says so outright. **In 1932, Lowell T. Boyd**, an insurance executive, took control of the company and moved its offices to Kokomo, and his brother **Emery Boyd** moved to the lake with his family to run it day to day and farm the tillable land, which had first been meant for a golf course (Greiff, 2001, Sec. 8, p. 6; Garner, 2025, p. 26).

**The two nominations describe 1932 slightly differently.** The 2001 form says Lowell Boyd "assumed controlling interest"; the 2026 form says the original incorporators "sold Fox Lake Land Company to two brothers" (Greiff, 2001, Sec. 8, p. 6; Garner, 2025, p. 26). Those are compatible, but not identical: a controlling interest is not the whole company. Quote the one you use.

:::reveal Name the event each of these dates: 1924, 1926 or 1927, 1928. ||| 1924: the company buys the farm and incorporates. 1926 or 1927: the original plat is laid out and lots begin to sell (sources differ). 1928: Carl Wilson Sr. starts the first cottage.

## Sources
- ${GARNER_2025} Locator: pp. 22 to 26 and 34 (bibliography: the 1930 Hixson plat book).
- ${GREIFF_2001} Locator: Section 8, pp. 5 to 6 (PDF pp. 9 to 10).
- ${IHB_2022} Locator: marker text, side one.
- ${KAHRL_2022} Locator: printed p. 56 (PDF p. 64); printed p. 185 (PDF p. 193).`,
      recallContent: [
        {
          prompt: "What does the 2026 nomination say about Marion, and what does the record NOT say?",
          answer: "It calls Marion the city of the 1930 lynching, the last in Indiana, in the same sentence as the company's offices. No source says the lynching changed anything at Fox Lake; the 2001 form gives the Depression as the reason control changed in 1932.",
        },
        {
          prompt: "Why did the company's offices move from Marion to Kokomo in 1932?",
          answer: "Because Lowell T. Boyd, who took control that year, had his insurance business in Kokomo. The record gives no other reason.",
        },
      ],
    },
    {
      slug: "fl-who-came",
      title: "5 · Who came, and what they did there",
      section: "Section 1 · Then",
      body: `**The resort was not just its cottages. It was a calendar of meetings, picnics and conventions**, most of them reported in the Indianapolis Recorder and quoted in the 2026 nomination. Read this lesson as a list of documents, not a list of good times.

## Where they came from

**Indianapolis sent the most people.** Others came from Toledo, Detroit and Chicago, and from Indiana cities such as Marion and Fort Wayne (Greiff, 2001, Sec. 8, p. 7; Garner, 2025, p. 26). The geography helped: U.S. 20 ran east and west near the lake and U.S. 27 ran north from Fort Wayne, though the 2026 form notes that the route from Indianapolis was "more circuitous" (Garner, 2025, p. 25).

**Freeman B. Ransom**, the Indianapolis attorney for Madam C. J. Walker's company, for whom Ransom Place is named, had a cottage at Fox Lake that his descendants still hold, and Mrs. Ransom sat on the property owners' association's board (Greiff, 2001, Sec. 8, p. 7; Garner, 2025, p. 26). If you have taken **Indiana Avenue: A District and What Replaced It**, you met him in lesson 6 (\`ia-built-walker\`). **Fox Lake is where part of the Indiana Avenue economy spent its summers.**

## The calendar, as the record gives it

| Year | Event | Source the nomination cites |
|---|---|---|
| **1929** | 58 children from the Indianapolis Orphans' Home spend two weeks at the lake, paid for by some of the incorporators | Recorder, Aug. 10, 1929 (Garner, 2025, p. 26) |
| **1937** | A land-company drawing on Labor Day: over 1,000 entries, and the Rev. Plummer D. Jacobs, an Indianapolis funeral director, wins a cottage; in 1938 the company deeds it to him and Levinia Jacobs for $1.00 | Recorder, Sept. 11, 1937 (Garner, 2025, p. 30) |
| **1938** | The Dukes Club of Indianapolis holds its first convention at Fox Lake | Recorder, Aug. 13, 1938 (Garner, 2025, p. 27) |
| **1940** | The first statewide picnic of the Odd Fellows Household of Ruth; "several thousand" expected | Recorder, June 29, 1940 (Garner, 2025, p. 27) |
| **World War II** | Black troops from Baer Field in Fort Wayne invited on weekend passes; residents set up tents with free refreshments | Greiff, 2001, Sec. 8, p. 8 |
| **1946** | The Dukes return for their national conference | Recorder, July 13, 1946 (Garner, 2025, p. 27) |
| **1952** | The Dukes Club of America's 16th annual convention: about 200 from Illinois, Ohio, Michigan and Indiana | Recorder, Aug. 2, 1952 (Garner, 2025, p. 29) |
| **1953** | The Indiana State NAACP holds its annual picnic at Fox Lake; its state president, Jessie Jacobs, summered there | Recorder, Aug. 8, 1953 (Garner, 2025, p. 29) |
| **1964** | The 17th annual meeting of the Midwest Alumni Association of Talladega College: over 180, mostly at the Mar-Fran | Recorder, Aug. 29, 1964 (Garner, 2025, p. 30) |

**Notice the 1940 entry's wording.** "Several thousand" were **expected**. That is a forecast in a newspaper, not a count. A careful writer says "expected," because the source did.

## Why the meetings came

The 2001 nomination gives a plain mechanism: an organization first learned of Fox Lake as a meeting place "nearly always" through a member who had a cottage there (Greiff, 2001, Sec. 8, pp. 8 to 9). **Ownership produced the calendar.** A family that could buy a lot could host a club, and a club that came once came back.

## What a reader cannot get from this table

It cannot tell you what it cost to stay, how many families came in a given summer, or who was turned away from a white lake that same weekend. **Those numbers are not in the nominations, and this course will not make them up.** Lesson 21 lists where they might be found.

## Sources
- ${GARNER_2025} Locator: pp. 25 to 30, with its footnotes 1 to 17 citing the Indianapolis Recorder by date and page.
- ${GREIFF_2001} Locator: Section 8, pp. 7 to 9 (PDF pp. 11 to 13).`,
      recallContent: [
        {
          prompt: "Give the four founding answers for Fox Lake and the event each one dates.",
          answer: "1924, the company and the farm purchase; 1926 or 1927, the original plat and first lot sales (sources differ); 1928, the first cottage; and 'the 1920s', the marker's general phrase. The theme study adds 1927, when families began renting cabins.",
        },
        {
          prompt: "What would settle the 1926 or 1927 plat question?",
          answer: "The plat as recorded in Steuben County, or the 1930 Hixson plat book of Pleasant Township, which the 2026 form lists in its bibliography.",
        },
        {
          prompt: "Who built the first cottage, and what was the lane named?",
          answer: "Carl Wilson Sr., a Black businessman from Fort Wayne, starting in 1928. The lane was named Wilson Drive; it is Lane 130 today.",
        },
      ],
    },
    {
      slug: "fl-key-terms",
      title: "6 · Key terms",
      section: "Section 1 · Then",
      body: `These are the words this course uses as working tools. **Each one names a document or a body you can look up.**

| Term | What it means here | Where you meet it |
|---|---|---|
| **Land company** | A corporation formed to buy land, plat it and sell lots. The Fox Lake Land Company (1924) | Lessons 2, 4, 11 |
| **Plat** | A recorded map dividing land into numbered lots and blocks; the Original Plat at Fox Lake (1926 or 1927) | Lessons 4, 11 |
| **Lot** | One numbered parcel on a plat; Fox Lake lots averaged about fifty by eighty feet in the original district | Lessons 4, 8 |
| **Speculative cottage** | A cottage built by a developer before any buyer, then rented or sold; Emery Boyd built twelve | Lesson 9 |
| **Property owners' association** | A private body of lot owners that collects dues and runs shared services; Fox Lake's formed in 1938 and incorporated in 1952 | Lesson 11 |
| **National Register of Historic Places** | The federal list of places worth preserving, kept by the National Park Service; Fox Lake listed 2001, enlarged 2026 | Lesson 13 |
| **Nomination** | The registration form that argues a place onto the National Register: description, significance, boundary, photographs | Lessons 13, 14 |
| **Period of significance** | The years a nomination says the place mattered for the reasons given | Lesson 14 |
| **Level of significance** | Local, statewide or national: how far the place's importance reaches, in the nomination's argument | Lessons 13, 14 |
| **Multiple property documentation form (MPDF)** | A federal form that sets out a theme and the rules for listing places under it; Indiana's Green Book MPDF (2025) | Lessons 12, 14 |
| **Green Book listing** | An entry in *The Negro Motorist Green Book*: a name, an address and a category, in a given year | Lesson 12 |
| **Co-occurrence** | Two true things on one calendar, neither used to explain or soften the other | Lessons 1, 3, 16 |

:::reveal What is the difference between a plat and a lot? ||| A plat is the recorded map that divides land into numbered parcels; a lot is one of those parcels.

:::reveal What does a "period of significance" tell you, and what does it not? ||| It gives the years a nomination argues the place mattered, for the reasons the nomination gives. It does not tell you when the place began or ended, and two nominations can give different periods for one place.

:::reveal Why is "several thousand expected" not a count? ||| Because it is a newspaper's forecast before the event. A count would come after it, from someone who counted.

## Sources
- ${GARNER_2025} Locator: pp. 21 to 22 (areas and periods of significance).
- ${GREIFF_2001} Locator: Section 7, pp. 4 to 5 (PDF pp. 6 to 7), lot size; Section 8, pp. 6 to 8 (PDF pp. 10 to 12).`,
      recallContent: [
        {
          prompt: "Why did so many clubs and organizations meet at Fox Lake, according to the 2001 nomination?",
          answer: "Because, nearly always, a member owned a cottage there and brought the group. Ownership produced the calendar.",
        },
        {
          prompt: "Name two organizations that met at Fox Lake and the year.",
          answer: "Any two of: the Dukes Club (1938, 1946, 1952), the Odd Fellows Household of Ruth (1940), the Indiana State NAACP (1953), the Midwest Alumni Association of Talladega College (1964).",
        },
      ],
    },
    {
      slug: "fl-quiz-then",
      title: "7 · Quiz: then",
      section: "Section 1 · Then",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Who bought the Ward farm on Fox Lake in 1924 and incorporated the Fox Lake Land Company?",
            options: [
              "Five white businessmen",
              "Black families from Indianapolis, buying lots together",
              "The State of Indiana, for a public fishing park",
              "The Chicago group that had been refused Sager Lake",
            ],
            correctIndex: 0,
            explanation: "C. M. Thieme and O. L. Christman of Fort Wayne, G. G. Eckhart and Paul Moreland of Marion, and Harry Schrader of Kokomo, with offices in Marion, to sell lots to Black families.",
            sourceLessonSlug: "fl-1924-the-company",
          },
          {
            prompt: "What happened at Sager Lake, near Valparaiso, in 1922?",
            options: [
              "Local opposition stopped a Black purchase",
              "It opened as Indiana's first Black resort, two years before Fox Lake",
              "The Fox Lake Land Company bought it and resold it in lots",
              "The state turned it into a fish hatchery for northern lakes",
            ],
            correctIndex: 0,
            explanation: "Middle-class Black families from Chicago tried to buy it for a summer resort, and local opposition prevented it. The 2001 nomination cites two 1922 newspapers for it.",
            sourceLessonSlug: "fl-a-lake-of-its-own",
          },
          {
            prompt: "The plat of Fox Lake is dated 1926 in one nomination and 1927 in the other. What does this course do with that?",
            options: [
              "Average them",
              "Report both, with owners, until the plat is read",
              "Use 1927, because the 2001 form is older and so closer to the event",
              "Use 1926, because the 2026 form is newer and corrects the older one",
            ],
            correctIndex: 1,
            explanation: "The 2001 form says the Original Plat was subdivided in 1927; the 2026 form says the plat was established by 1926, and elsewhere says 1927. The recorded plat or the 1930 Hixson plat book would settle it.",
            sourceLessonSlug: "fl-1926-to-1932",
          },
          {
            prompt: "Who built the first cottage at Fox Lake, starting in 1928?",
            options: [
              "Emery Boyd",
              "Carl Wilson Sr., of Fort Wayne",
              "John A. Roberts, the contractor who later bought 1.8 acres",
              "Freeman B. Ransom, the Walker company's Indianapolis attorney",
            ],
            correctIndex: 1,
            explanation: "Wilson ran an exterminating business in Fort Wayne. The lane was named Wilson Drive, now Lane 130. Boyd arrived in 1932; Roberts built cottages later.",
            sourceLessonSlug: "fl-1926-to-1932",
          },
          {
            prompt: "Why did the land company's offices move from Marion to Kokomo in 1932?",
            options: [
              "Because of Marion's 1930 lynching",
              "Lowell T. Boyd took control; his business was in Kokomo",
              "A state law moved it",
              "Kokomo offered the company a tax break to move its offices and staff there",
            ],
            correctIndex: 1,
            explanation: "The 2001 nomination gives the Depression as the reason for the change of control, and Kokomo as Boyd's base. No source connects the move to the lynching, and the course does not either.",
            sourceLessonSlug: "fl-marion-1930",
          },
          {
            prompt: "In 1940 the Indianapolis Recorder reported that 'several thousand' Odd Fellows were expected at Fox Lake. How should you report that figure?",
            options: [
              "As the attendance",
              "As a forecast: several thousand were expected",
              "Halve it",
              "As the summer population of the resort that year, counted by the paper",
            ],
            correctIndex: 1,
            explanation: "The newspaper forecast a crowd before the picnic. A count would come after it. Say 'expected', because the source did.",
            sourceLessonSlug: "fl-who-came",
          },
          {
            prompt: "Which city sent the most vacationers to Fox Lake?",
            options: [
              "Chicago",
              "Detroit",
              "Indianapolis, the state capital",
              "Toledo, Ohio",
            ],
            correctIndex: 2,
            explanation: "Both nominations say Indianapolis supplied the largest share, even though the drive was more roundabout than from Chicago, Detroit or Toledo.",
            sourceLessonSlug: "fl-who-came",
          },
          {
            prompt: "What does 'period of significance' mean in a National Register nomination?",
            options: [
              "The years the place was open",
              "The years the nomination argues the place mattered, for the reasons it gives",
              "The years the owners paid dues",
              "The years it appeared in the Green Book",
            ],
            correctIndex: 1,
            explanation: "It is part of the nomination's argument, not a record of opening and closing. The 2001 and 2026 Fox Lake forms give different periods for the same place.",
            sourceLessonSlug: "fl-key-terms",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 2 · Built
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "fl-built-the-cottage",
      title: "8 · The lake cottage as a building type",
      section: "Section 2 · Built",
      body: `**Beat 2 asks why a place looks the way it does.** At Fox Lake the answer is not an architect. It is a lake shore, a steep slope, small lots, a summer season and owners who built for themselves.

## What the cottages are

The 2001 nomination describes the original district as "32 relatively modest lake cottages, most of which were constructed before World War II," with "a fairly high degree of integrity" (Greiff, 2001, Sec. 7, p. 4). Most are:
- **one story, of frame construction**, with **gabled roofs** and **concrete block foundations**;
- fronted by **open or screened porches**, some since enclosed for more room;
- sided in **clapboard or board-and-batten**, some now covered in aluminum or vinyl;
- lit by **wood double-hung windows** (three-over-one or one-over-one), or a few casements;
- marked by a few **Craftsman** details such as exposed rafter ends (Greiff, 2001, Sec. 7, pp. 4 to 5).

The nomination calls them "representative of midwestern lakeside cottages of the period" and points to similar cottages at Lake James nearby and at Hudson Lake in LaPorte County (Greiff, 2001, Sec. 7, p. 4). **That comparison matters.** The cottages are ordinary for their region. **What is not ordinary is who was allowed to build them where.**

## The slope

On the lake side of the lane the ground drops so steeply that several cottages are **two stories high: an entrance facing the lane on the upper floor, and a door to the lake on the lower one.** The upper story is frame; the lower story is **concrete block built into the hillside**, so only part of it shows. At the east end some rooftops sit below the lane and are reached by steps (Greiff, 2001, Sec. 7, p. 5).

**The lots are small**, about fifty by eighty feet on average, and the cottages cluster wherever the ground allows; some nearly touch (Greiff, 2001, Sec. 7, p. 5). The 2001 form says the lane itself began as "little more than a rugged dirt path," later graveled, and paved with asphalt in the decade before the form was written (Greiff, 2001, Sec. 7, p. 5).

## Water, light and the privy

**The early cottages had no plumbing or electricity.** Community pumps at the Boyds' farmhouse, the clubhouse and the beach supplied water for the first decade or so. **Electricity reached Fox Lake in 1936.** After that owners dug their own wells, and after World War II indoor plumbing replaced the "Roosevelt outhouses," privies built by the Works Progress Administration (WPA). One still stands in the district (Greiff, 2001, Sec. 8, p. 7 and n. 2).

## How many, and when

**Counting the cottages is harder than it sounds**, and the 2026 nomination says why. Before World War II, "between two and four dozen" cottages were built on the original lane; "the discrepancy is related to county assessor construction dates and a 1942 United States Geological Survey map," which shows about two dozen buildings (Garner, 2025, p. 28). Another three dozen followed between 1945 and 1964; the 1959 survey map shows about seventy-six cottages on the south shore; and ten were built on the north shore between 1966 and 1982 (Garner, 2025, pp. 29, 31). **Two kinds of record, assessor dates and a federal map, disagree, and the nomination says so.** That is the right way to report a count.

## What the building type does not tell you

The Indiana Green Book survey says it directly: at a Green Book resort, "The individual architectural features of each resource are of secondary importance to the cumulative social history of the resort" (Borland & Linebarger, 2025, p. 102). **A Fox Lake cottage looks like any lake cottage. Its significance is in its deed, not its gable.**

:::reveal Why are some Fox Lake cottages two stories on one side and one story on the other? ||| They sit on a steep slope down to the lake: the upper, frame story faces the lane, and the lower story is concrete block built into the hillside with a door to the water.

:::reveal Why does the 2026 nomination give "between two and four dozen" prewar cottages instead of one number? ||| Because county assessor construction dates and the 1942 USGS map disagree, and the nomination reports the range rather than choosing.

## Sources
- ${BORLAND_2025} Locator: p. 102.
- ${GARNER_2025} Locator: pp. 28 to 29, 31.
- ${GREIFF_2001} Locator: Section 7, pp. 4 to 5 (PDF pp. 6 to 7); Section 8, p. 7 and note 2 (PDF p. 11).`,
      recallContent: [
        {
          prompt: "What does the 2001 nomination's comparison with Lake James and Hudson Lake teach?",
          answer: "That the cottages are an ordinary regional type. What made Fox Lake unusual was who was allowed to build there, not how they built.",
        },
        {
          prompt: "Name three Fox Lake institutions from the calendar in lesson 5.",
          answer: "Any three of: the Dukes Club conventions, the Odd Fellows Household of Ruth picnic, the Indiana State NAACP picnic, the Talladega College alumni meeting, the 1929 Orphans' Home stay, the 1937 cottage drawing.",
        },
      ],
    },
    {
      slug: "fl-built-who-built",
      title: "9 · Who built it, who ran it, and who owned it",
      section: "Section 2 · Built",
      body: `**Three questions that sound alike and are not: who built a building, who ran the business in it, and who owned it.** Fox Lake's record answers them differently, and the differences are the lesson.

## The company's cottages

When Emery Boyd took charge in 1932 he built **twelve cottages on scattered lots, rented them, and sold every one within two to three years** (Greiff, 2001, Sec. 8, p. 6). The 2026 nomination thinks they are the side-gabled cottages with front-gabled porches it marks in its resource list, and identifies ten of them (Garner, 2025, p. 26). **These are speculative cottages: built before there was a buyer, by the seller.**

## A Black contractor

**John A. Roberts, a Black contractor, bought lots from the company and built several cottages around the lake.** He lived at the resort year round, built one last cottage he named "Lake View," and in 1947 bought another 1.8 acres from the company to develop more homes. His death was reported at the association's Memorial Day meeting of 1953 (Garner, 2025, pp. 26, 29 to 30). The 2026 form names him, with Emery Boyd, as a builder of the district (Garner, 2025, p. 21).

**Put the two side by side.** The white land company built to sell; a Black contractor built to sell and to stay. **Both are in the record, and the record names them as equals on the form's builder line.**

## The hotel, the barn and the clubhouse

Boyd leased out the Ward farmhouse so it could become a small hotel, and rebuilt the barn as a restaurant with a clubhouse and dance hall above it. Neither building survives; they stood uphill, south of today's Fox Lake Road (Greiff, 2001, Sec. 8, p. 6). Around the clubhouse were tennis courts, horseshoe pits and basketball hoops; there were saddle horses until the early 1950s, trap shooting matches run by a Toledo gun club, a weekly Family Night at the restaurant, and, from the mid-1940s, a Sunday school held on the beach in July and August (Greiff, 2001, Sec. 8, p. 8).

> **Image placeholder: cleared for use, upload pending.** "Fox Lake Clubhouse interior, Angola, Indiana, circa 1950s," Dixon Family Collection, Indiana Album, Indiana State Library. Rights statement: No Copyright, United States (RightsStatements.org NoC-US). The record describes a snapshot of people dancing and listening to music at an unknown event, with men on a small corner stage with record players, speakers and a microphone, and decorations hanging from the rafters. It says the clubhouse burned down in the late 1950s (Indiana State Library, n.d.). The photograph appears here after it is uploaded and approved at /admin/media; until then, open it at the link in Sources.

## Two Black women ran the hotel

**A succession of managers ran the hotel and restaurant until 1943, when two Black women took them over: Mary Frances Fleming of Indianapolis and Mabel Van Cleave of Franklin, Indiana** (Garner, 2025, p. 28; Greiff, 2001, Sec. 8, p. 6). The partnership did well enough that **Harry M. and Frances Fleming**, who owned Fleming's Grocery in Indianapolis, built a new motel, the **Mar-Fran**, on the west bluff over the lake in the 1950s (Garner, 2025, p. 28). The 40-room Mar-Fran burned in 1966 and was rebuilt in 1967 as the two-story winged building that stands there now (Garner, 2025, p. 31).

**Now ask the ownership question, and notice the record's limit.** Boyd set up a lease for the farmhouse. The 2026 form says operations were "turned over" to Fleming and Van Cleave. **Neither nomination says who owned the hotel business after 1943, or on what terms the women ran it.** The Mar-Fran is different: the Flemings built it. **When you write about the hotel, say "ran," because that is what the record supports.**

## Pryor's Country Place

At the east end of the south shore stands a cobblestone house built for the Rev. Dr. Scott F. Hershey and Georgia Hershey in about 1916, and later run briefly as a resort by Jack and Belle Fox of Angola until federal raids for illegal liquor and gambling sent them to prison in the early 1930s (Garner, 2025, p. 25). **In 1947 Albert and Hazelene Pryor of Chicago, a Black couple, bought the house and five acres** and ran it as an inn: rooms, cabins, three meals a day cooked by Hazelene Pryor, a small beach, boats, lawn bowling, croquet and archery (Garner, 2025, p. 28). It was listed in the Green Book from 1954 to 1967 (Borland & Linebarger, 2025, p. 111). **Lesson 12 reads those listings.**

> **Image placeholder: permission needed.** The 2026 nomination's photographs of the cottages, the Mar-Fran and Pryor's Place were taken by Kurt West Garner on February 3, 2025 (Garner, 2025, p. 37). They may be shown here only with the photographer's or the foundation's permission, which has been asked for. Interiors of any cottage, the Mar-Fran or Pryor's Place need the owner's written consent.

## Sources
- ${BORLAND_2025} Locator: p. 111, Table (Angola entries).
- ${GARNER_2025} Locator: pp. 21, 25 to 26, 28 to 31, 37 (photo log).
- ${GREIFF_2001} Locator: Section 8, pp. 6 and 8 (PDF pp. 10 and 12).
- ${INDIANA_ALBUM}`,
      recallContent: [
        {
          prompt: "What did the early cottages lack, and when did electricity arrive?",
          answer: "Plumbing and electricity. Water came from community pumps; electricity reached Fox Lake in 1936; WPA-built privies were replaced by indoor plumbing after World War II.",
        },
        {
          prompt: "What does the Indiana Green Book survey say about architecture at a Green Book resort?",
          answer: "That individual architectural features are of secondary importance to the resort's cumulative social history. The significance is in who could build there, not in the gables.",
        },
      ],
    },
    {
      slug: "fl-quiz-built",
      title: "10 · Quiz: built",
      section: "Section 2 · Built",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What are most of the cottages in the 2001 Fox Lake district built of?",
            options: [
              "Brick, on a fieldstone base, with slate roofs",
              "Frame, on concrete block",
              "Logs throughout, cut from the swampy south shore",
              "Factory steel frames shipped by rail from Chicago",
            ],
            correctIndex: 1,
            explanation: "One story, frame, gabled roofs, concrete block foundations, with porches; a few are block or log-walled frame.",
            sourceLessonSlug: "fl-built-the-cottage",
          },
          {
            prompt: "Why do some cottages on the lake side of the lane have two stories?",
            options: [
              "Each housed two families who split the summer rent",
              "A county zoning rule required two floors on the shore",
              "The steep slope to the lake",
              "They were rebuilt as rooming houses for the hotel",
            ],
            correctIndex: 2,
            explanation: "The ground drops steeply to the lake, so the lower story is built into the hillside with a door to the water.",
            sourceLessonSlug: "fl-built-the-cottage",
          },
          {
            prompt: "In what year did electricity reach Fox Lake?",
            options: [
              "In 1924",
              "In 1936, after a decade of pumps",
              "Only after the Civil Rights Act of 1964 opened other lakes",
              "With the association's incorporation in July 1952",
            ],
            correctIndex: 1,
            explanation: "Community pumps supplied water for about the first decade; electricity came in 1936, and indoor plumbing replaced WPA privies after the war.",
            sourceLessonSlug: "fl-built-the-cottage",
          },
          {
            prompt: "Why does the 2026 nomination give a range, 'between two and four dozen', for prewar cottages?",
            options: [
              "Assessor dates and a 1942 map disagree",
              "Owners refused",
              "The cottages were moved around the lake on skids over the years",
              "The Green Book counted the cottages differently each year it listed them",
            ],
            correctIndex: 0,
            explanation: "It reports the disagreement between county assessor construction dates and the 1942 USGS map rather than choosing one.",
            sourceLessonSlug: "fl-built-the-cottage",
          },
          {
            prompt: "Who was John A. Roberts?",
            options: [
              "A 1924 incorporator",
              "A Black contractor who built cottages and lived there",
              "The Green Book's publisher",
              "A state conservation officer who stocked the lake with bluegill in 1949",
            ],
            correctIndex: 1,
            explanation: "He bought lots, built cottages including his last, 'Lake View', bought 1.8 more acres in 1947, and is named with Emery Boyd as a builder of the district.",
            sourceLessonSlug: "fl-built-who-built",
          },
          {
            prompt: "Who took over running the hotel and restaurant in 1943?",
            options: [
              "Boyd's sons",
              "The owners' association",
              "Mary Frances Fleming and Mabel Van Cleave",
              "Albert and Hazelene Pryor, who had come from Chicago that spring",
            ],
            correctIndex: 2,
            explanation: "Fleming of Indianapolis and Van Cleave of Franklin. The Flemings later built the Mar-Fran motel on the west bluff.",
            sourceLessonSlug: "fl-built-who-built",
          },
          {
            prompt: "Why should you write that Fleming and Van Cleave 'ran' the hotel, rather than 'owned' it?",
            options: [
              "They were state employees",
              "Neither nomination says who owned the hotel business after 1943",
              "They sold it in 1944",
              "The land company forbade it",
            ],
            correctIndex: 1,
            explanation: "Boyd leased the farmhouse for a hotel, and the 2026 form says operations were 'turned over' to the women. The record supports 'ran'. The Mar-Fran, which the Flemings built, is a different case.",
            sourceLessonSlug: "fl-built-who-built",
          },
          {
            prompt: "What did Albert and Hazelene Pryor buy in 1947?",
            options: [
              "The Ward farm",
              "The Hershey house and five acres, run as an inn",
              "The Mar-Fran",
              "A share in the land company",
            ],
            correctIndex: 1,
            explanation: "A Black couple from Chicago, they ran Pryor's Country Place as an inn with rooms, cabins and meals; it was in the Green Book from 1954 to 1967.",
            sourceLessonSlug: "fl-built-who-built",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 3 · Who decided
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "fl-decided-association",
      title: "11 · A private plat and an owners' association: what each could decide",
      section: "Section 3 · Who decided",
      body: `**Beat 3 is the load-bearing beat of every site course: who decided what happened to this place?** At Fox Lake the answer is a set of bodies with different powers, and the line between what each could decide is the lesson.

## The land company decided the map

The Fox Lake Land Company drew the plat, set the lots, sold them, and kept selling for half a century. It ran a promotional drawing on Labor Day 1937 with over 1,000 entries and deeded the prize cottage for $1.00 (Garner, 2025, p. 30). It added the Butternut Point Addition in 1940, platted the northwest shore as Tri-State Beach by 1951 and the north shore in 1966 (Garner, 2025, pp. 27, 29, 31). Between 1967 and 1969 the Boyd family deeded 3.3 acres of lakefront for a new recreation center (Garner, 2025, p. 30). **And it still owns unplatted land on the northeast corner of the lake** (Garner, 2025, p. 31). **Whoever owns the plat decides where lots exist at all.**

## The owners formed a body

**In 1938 the property owners organized the Fox Lake Property Owners' Association and assessed modest dues** (Greiff, 2001, Sec. 8, p. 7). The 2026 nomination quotes the purpose written into its bylaws:

> To provide mutual protection of the financial investment of the property owners of Fox Lake. To serve the general needs of this resort; to provide for wholesome recreation; to encourage persons of good moral character to buy, build and occupy cottages at Fox Lake resort; to guard, supervise and promote all recreational activities at this resort, including a life guard for swimming, and boating, conservation for fishing and hunting.

(Garner, 2025, p. 27)

**Over the next decade it arranged regular trash removal and road upkeep, hired lifeguards and set swimming hours and rules**, and owners formed clubs in their home cities in the off season to raise money for it (Greiff, 2001, Sec. 8, pp. 7 to 8). **It incorporated on July 8, 1952**, the date of its articles of incorporation and bylaws (Greiff, 2001, Sec. 8, p. 8 and Sec. 9, p. 9), and that year improved the beach and bathhouse on "the island" in the middle of the south shore (Garner, 2025, p. 29). The state marker says the association formed "by 1940," which fits 1938 (Indiana Historical Bureau, 2022).

**Read the bylaws as a list of powers.** Every verb is about shared services and money: protect the investment, serve needs, provide recreation, supervise, hire a lifeguard. **One clause is about who comes: "to encourage persons of good moral character to buy."** Encourage is not a power to refuse a buyer, and no source read for this course says the association ever screened one. Do not write that it did.

## What the association could not decide

REST-00 lesson 10 gave you the rule: **a homeowners' body cannot zone, tax or police; a town can.** Fox Lake is not a town. It sits in Pleasant Township, Steuben County (Garner, 2025, p. 34). So the bodies that decided the rest were public ones:
- **The county** built West Fox Lake Road, the east and west connection along the south shore, in the late 1940s (Garner, 2025, p. 25).
- **The State of Indiana** stocked the lake with bluegill after a 1949 meeting between the Indiana Director of Conservation and a group of Fox Lake anglers, and in the mid-1960s bought an acre from the Pryors for a public access site with a boat launch and fishing pier, still public today (Garner, 2025, pp. 29, 31).
- **The National Park Service**, through the National Register, decided what counts as historic and where the boundary runs (lesson 13).

**A summer community of owners decided its own beach, its own roads within the plat and its own calendar. It never decided the county road, the state's fish or the federal list.** That is what "who decided" looks like at a private lake.

## Sources
- ${GARNER_2025} Locator: pp. 25, 27, 29 to 31, 34.
- ${GREIFF_2001} Locator: Section 8, pp. 7 to 8 (PDF pp. 11 to 12); Section 9, p. 9 (PDF p. 13), bibliography (articles of incorporation, July 8, 1952).
- ${IHB_2022} Locator: marker text, side one; annotated text, notes 2 to 3.`,
      recallContent: [
        {
          prompt: "Who built, who ran and who owned: give one Fox Lake example of each, from lesson 9.",
          answer: "Built: John A. Roberts, a Black contractor, or Emery Boyd's twelve speculative cottages. Ran: Mary Frances Fleming and Mabel Van Cleave ran the hotel from 1943. Owned: the Pryors bought their house and five acres in 1947; the Flemings built the Mar-Fran.",
        },
        {
          prompt: "What happened to the clubhouse, according to the Indiana Album record?",
          answer: "It burned down in the late 1950s. Neither the farmhouse hotel nor the barn clubhouse survives.",
        },
      ],
    },
    {
      slug: "fl-decided-green-book",
      title: "12 · The Green Book as a listing, not a guarantee",
      section: "Section 3 · Who decided",
      body: `**Take the method from The Green Book: How to Read a Route (\`green-book-how-to-read-a-route\`) and apply it here.** A Green Book entry is a name, an address and a category in a given year. It tells a traveler a business would serve them. **It does not tell you who owned it, how good it was, or whether it was open the week you arrived.**

## The Fox Lake listings

The Indiana Green Book survey transcribes every Indiana entry from the digitized editions. For Angola it gives three (Borland & Linebarger, 2025, p. 111):

| Listed as | Address as printed | Years listed | Category |
|---|---|---|---|
| **Fox Lake Resort** | 1 1/2 miles S.W. of Angola | 1940 to 1941; 1946 to 1949 | Resort |
| **Pryor's Country Place** | Rural Route No. 2 | 1954 to 1967 | (none given) |
| **Mar-Fran Hotel** | US 20, 1 mile west of Angola, 1/2 mile south | 1959 to 1967 | Hotel |

The survey adds a warning about its own table: "Fox Lake included multiple buildings under different ownership. Specific addresses for buildings within the resort were not included in the Green Book editions" (Borland & Linebarger, 2025, p. 111). **The resort listing names a place, not a business.**

## Three things to notice

**1. The gap.** The resort is not listed from 1942 to 1945. The table does not say why, and neither does this course. The method course's lesson on gaps gives you the possible explanations and the rule: **a gap is a question, not an answer.**

**2. The change of subject.** After 1949 the resort itself drops out, and two businesses at the lake appear instead. **From 1954 the Green Book points travelers to an inn and, from 1959, a motel, not to a resort.** That fits what lessons 9 and 16 show: a community of owners did not need a guide; travelers who did not own a cottage needed a room.

**3. Category and name.** The motel the nominations call the Mar-Fran Motel is listed as the Mar-Fran Hotel. Use the name the source prints, and say so.

## The pages themselves

The state marker's annotated text cites the edition and page for each Fox Lake listing it used: 1940, p. 12; 1941, p. 12; 1959, p. 23; 1960, p. 38; 1961, p. 32; 1962, p. 38; 1963 to 1964, p. 23; 1966 to 1967, p. 23, each with a New York Public Library image ID (Indiana Historical Bureau, 2022, n. 4). **Look closely at that footnote: it gives the same image ID, 5205895, for both the 1963 to 1964 and the 1966 to 1967 editions.** Two editions cannot share one image. One of them is a copy error. **Even a careful footnote can carry one, and the only fix is to open the page.** This course has not opened the scans; they are at the Schomburg Center's digital collections.

## A listing is not a guarantee

The 2026 nomination sums up the guide's purpose: Victor Green, a Harlem postman, believed a national guide to businesses that would serve Black travelers would make travel safer, and the listings also brought those businesses customers (Garner, 2025, p. 30). **A listing is what a business told the publisher, in a given year.** It is not an inspection and not a promise. And at Fox Lake the record shows the opposite risk as well: the resort was a destination well before the Green Book listed it in 1940 (Garner, 2025, p. 23). **Absence from the guide never meant absence from the map.**

## Sources
- ${BORLAND_2025} Locator: p. 111, Table and its note.
- ${GARNER_2025} Locator: pp. 23, 30.
- ${IHB_2022} Locator: annotated text, note 4.`,
      recallContent: [
        {
          prompt: "What could the Fox Lake Property Owners' Association decide, and what could it not?",
          answer: "It collected dues and ran shared services: trash, roads in the plat, the beach, lifeguards, swimming rules, recreation. It could not zone, tax or police; the county built the road, the state stocked the lake and bought the public access site, and the federal government keeps the National Register.",
        },
        {
          prompt: "What does the bylaws clause 'to encourage persons of good moral character to buy' allow you to write?",
          answer: "Only that the association meant to encourage such buyers. 'Encourage' is not a power to refuse, and no source says it ever screened a buyer.",
        },
      ],
    },
    {
      slug: "fl-decided-designation",
      title: "13 · Designation as an instrument: 2001, 2024, 2026",
      section: "Section 3 · Who decided",
      body: `**A National Register listing is a decision with an author, a date and a boundary.** At Fox Lake there are three, and the community commissioned all of them.

## Three listings

| Date listed | What | Prepared by, and for | Size and argument |
|---|---|---|---|
| **April 12, 2001** | Fox Lake (Historic District), NRIS 01000360 | Glory-June Greiff, for the Fox Lake Property Owners Association | About 10.7 acres on both sides of the original lane; 27 contributing and 6 non-contributing buildings; period of significance 1928 to 1950; Criterion A, ethnic heritage and recreation |
| **November 13, 2024** | Pryor's Country Place, individually, SG100011038 | Kurt West Garner | Criterion A, Black ethnic heritage and recreation, and Criterion C, architecture; period 1916 to 1970 |
| **March 2, 2026** | Fox Lake additional documentation (MP01000360) and boundary increase (MP100012764), and Pryor's additional documentation (MP100011038) | Kurt West Garner, for the Fox Lake Preservation Foundation | About 240 acres around most of the lake; 69 contributing and 35 non-contributing resources added to the 30 already listed; periods 1928 to 1976 and 1940 to 1949; listed under the Green Book MPDF |

(Greiff, 2001, Secs. 5, 8, 10; National Park Service, 2024, 2026; Garner, 2025, pp. 1, 3, 21 to 24, 35, 37)

**Notice who decided to ask.** The 2001 form was prepared for the owners' association; the 2026 form for the preservation foundation. The state reviewed both, and the National Park Service listed them. **The community wrote its own history into the federal record twice, twenty-five years apart.**

## What the boundary increase changed

The 2026 form says the 2001 district covered only part of what the land company built, and that its new boundary takes in the rest of the original development, the eastern addition with Pryor's Place, the public landing, the west side where the Mar-Fran stands, and the north shore the company developed into the 1970s (Garner, 2025, pp. 24, 36). **A boundary is an argument about where a story stops.** The 2001 boundary said the story was one lane before 1950; the 2026 boundary says it is the whole lake through the 1970s.

## What listing does and does not do

The National Park Service is direct about this. Listing "places no restrictions on what a non-federal owner may do with their property up to and including destruction," unless federal assistance is involved; when federal money is involved, the Advisory Council on Historic Preservation must be allowed to comment on changes (National Park Service, 2026, February 17). The Park Service also points owners to a federal tax credit program (National Park Service, 2026, February 17).

**So the listings protect Fox Lake's record, not its buildings.** A cottage owner may still sell, alter or tear down. Rules on demolition would come from a local ordinance, and this course did not look for one in Steuben County; that is a question for lesson 19.

## The state marker

In 2022 the Indiana Historical Bureau, Indiana Landmarks and the Fox Lake Preservation Foundation installed state marker 76.2022.1 at the southeast point of the lake (Indiana Historical Bureau, 2022). **A marker is a public text with three sponsors.** Its two sides say what those three bodies agreed to say in public in 2022, and its annotated text tells you where each sentence came from.

## Sources
- ${GARNER_2025} Locator: pp. 1, 3, 21 to 24, 35 to 37.
- ${GREIFF_2001} Locator: Sections 5, 8 and 10 (PDF pp. 2 and 15).
- ${IHB_2022} Locator: location and sponsors.
- ${NPS_2024} Locator: Indiana, Steuben County entry.
- ${NPS_2026} Locator: Indiana, Steuben County entries.
- ${NPS_FAQ} Locator: "What are the results of listing?"`,
      recallContent: [
        {
          prompt: "Which Green Book listings does the Indiana survey give for Angola, and for which years?",
          answer: "Fox Lake Resort, 1940 to 1941 and 1946 to 1949; Pryor's Country Place, 1954 to 1967; Mar-Fran Hotel, 1959 to 1967.",
        },
        {
          prompt: "What copy error does the state marker's Green Book footnote carry?",
          answer: "It gives the same NYPL image ID, 5205895, for the 1963 to 1964 and the 1966 to 1967 editions. Only opening the pages can tell which is right.",
        },
      ],
    },
    {
      slug: "fl-decided-reading-a-nomination",
      title: "14 · Reading a nomination that disagrees with itself",
      section: "Section 3 · Who decided",
      body: `**Nominations are arguments written by people under deadlines, and they contain mistakes.** The Fox Lake record has more than a dozen places where two documents, or one document, say two things. **This course does not choose quietly. It shows you every one, with its owner.**

## The conflicts

| Question | One source says | Another says | What would settle it |
|---|---|---|---|
| **Plat date** | 1927 (Greiff, 2001, Sec. 8, p. 6) | "by 1926" (Garner, 2025, p. 25); "by 1927" (Garner, 2025, p. 23) | The recorded plat; the 1930 Hixson plat book |
| **When it began** | 1924 company (both nominations) | 1927, families renting cabins (Kahrl & Cammeron, 2022, p. 56); "the 1920s" (marker) | Name the event, then date it (lesson 4) |
| **Level of significance in 2001** | "statewide" (Kahrl & Cammeron, 2022, p. 186) | the 2026 update "seeks to raise the significance ... from local to statewide" (Garner, 2025, p. 22) | The 2001 form's level box, illegible in the scan read here |
| **Green Book years** | "often featured in the Negro Motorists Green Book during the 1950s-1960s" (Garner, 2025, p. 22) | "last included in the Green Book in 1949" (Garner, 2025, p. 23) | The state survey's table: the resort 1940 to 1949, two businesses to 1967 (lesson 12) |
| **Mar-Fran in the Green Book** | promoted "by 1954" (Garner, 2025, p. 30) | 1959 to 1967 (Borland & Linebarger, 2025, p. 111; Garner, 2025, p. 28) | The 1954 to 1958 editions |
| **End of the period of significance** | 1976 (Garner, 2025, p. 22) | "the end of the period of significance in 1982" (Garner, 2025, p. 31); 1964 (Kahrl & Cammeron, 2022, p. 185) | The listed form as the Park Service accepted it |
| **Pryor's Country Place listed** | November 13, 2024 (National Park Service, 2024) | "02/19/2025" (Garner, 2025, p. 24) | The weekly list is the Park Service's own record; prefer it and say so |
| **Lake size** | 142 acres (Greiff, 2001, Sec. 7, p. 4) | 140 acres (Garner, 2025, p. 5) | A state lake survey |
| **Cottages in the 2001 district** | "32 relatively modest lake cottages" (Greiff, 2001, Sec. 7, p. 4) | 27 contributing and 6 non-contributing buildings, 33 (Greiff, 2001, Sec. 5); "approximately 30 cottages" (Garner, 2025, p. 24) | The 2001 resource list, cottage by cottage |
| **The hotel manager's name** | "Frances Flemming" (Greiff, 2001, Sec. 8, p. 6) | "Mary Frances Fleming" (Garner, 2025, p. 28) | Use the fuller, later form and say so |

## Two claims this course will not teach

- **"One of only two still-standing African American lake resorts in the nation, along with Idlewild."** Indiana Landmarks wrote this (Indiana Landmarks, 2021). The National Park Service's theme study names other Midwest lake communities that kept their Black identity, Lake Ivanhoe in Wisconsin, Lake Placid in Missouri and Lake Adney in Minnesota (Kahrl & Cammeron, 2022, p. 142). **The claim is contradicted by a better source, so it is out.**
- **"The first African American resort community listed on the National Register."** The theme study says this of Fox Lake in a footnote (Kahrl & Cammeron, 2022, p. 56, n. 95). The Idlewild Historic District in Michigan was listed in 1979, twenty-two years earlier (REST-00 lesson 4). **Out.**

## A rule the form had to meet

The state's Green Book survey sets the rule for listing a resort under it: the period of significance "must fall within the dates of 1936-1967 when the Green Book was in publication" (Borland & Linebarger, 2025, p. 103). The 2026 form, listed under that survey, gives a main period of 1928 to 1976 and a second period of 1940 to 1949, the years the resort was listed (Garner, 2025, pp. 21 to 22). **The second period meets the rule; the first runs outside it.** This course does not know how the reviewers reconciled them. **That is a fair question to ask the state office, not a reason to doubt the listing.**

## The procedure

1. **Name the owner of each version**, with a page.
2. **Prefer the record closest to the act**: a recorded plat over a narrative; the Park Service's weekly list over a form's own summary of it.
3. **A later document is not automatically better.** The 2026 form corrects the 2001 form in places and contradicts itself in others.
4. **When you cannot settle it, write "sources differ"** and give both. Then say what would settle it. **That sentence is a contribution, not a weakness.**

:::reveal Why does this course refuse to teach "one of only two still-standing African American lake resorts"? ||| Because the National Park Service theme study names other surviving Midwest Black lake communities (Lake Ivanhoe, Lake Placid, Lake Adney), so the claim is contradicted by a better source.

## Sources
- ${BORLAND_2025} Locator: pp. 103, 111.
- ${GARNER_2025} Locator: pp. 5, 21 to 25, 28, 30 to 31.
- ${GREIFF_2001} Locator: Section 5 (PDF p. 2); Section 7, p. 4 (PDF p. 6); Section 8, p. 6 (PDF p. 10).
- ${INDIANA_LANDMARKS_2021}
- ${KAHRL_2022} Locator: printed pp. 56 and n. 95, 142, 185 to 186 (PDF pp. 64, 150, 193 to 194).
- ${NPS_2024} Locator: Indiana, Steuben County entry.`,
      recallContent: [
        {
          prompt: "What does National Register listing do and not do for a private owner's building?",
          answer: "It places no restrictions on a non-federal owner, up to and including demolition, unless federal assistance is involved; federal money brings a comment from the Advisory Council on Historic Preservation. It protects the record, not the building.",
        },
        {
          prompt: "Who commissioned the 2001 and the 2026 Fox Lake nominations?",
          answer: "The 2001 form was prepared for the Fox Lake Property Owners Association; the 2026 form for the Fox Lake Preservation Foundation. The community wrote its own history into the federal record twice.",
        },
      ],
    },
    {
      slug: "fl-quiz-who-decided",
      title: "15 · Quiz: who decided",
      section: "Section 3 · Who decided",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        shuffleOptions: true,
        questions: [
          {
            prompt: "When did the Fox Lake Property Owners' Association organize and when did it incorporate?",
            options: [
              "1924, with the land company, and again when Boyd took over in 1932",
              "1938; incorporated 1952",
              "1946 and 1966, after the war and with the north-shore plat",
              "Both in 2001, so the association could sponsor the nomination",
            ],
            correctIndex: 1,
            explanation: "It organized with modest dues in 1938 and incorporated on July 8, 1952. The marker's 'by 1940' fits 1938.",
            sourceLessonSlug: "fl-decided-association",
          },
          {
            prompt: "Which of these could the owners' association NOT decide?",
            options: [
              "Lifeguard hours and swimming rules at the beach",
              "Trash pickup and road upkeep inside the plat",
              "Zoning and taxes",
              "How much its members paid in annual dues",
            ],
            correctIndex: 2,
            explanation: "A private owners' body runs shared services. Zoning, taxing and county roads belong to public bodies; the county built West Fox Lake Road in the late 1940s.",
            sourceLessonSlug: "fl-decided-association",
          },
          {
            prompt: "What does the Green Book listing 'Fox Lake Resort, 1 1/2 miles S.W. of Angola' tell a reader?",
            options: [
              "That one owner ran every business at the resort under one lease",
              "That a state inspector had visited and approved the cottages and beach",
              "A resort there would serve Black travelers that year",
              "That it closed in 1942",
            ],
            correctIndex: 2,
            explanation: "A listing names a place a traveler would be served in a given year. The state survey notes the resort was many buildings under different ownership, with no addresses in the guide.",
            sourceLessonSlug: "fl-decided-green-book",
          },
          {
            prompt: "Which Fox Lake businesses does the Indiana survey find in the Green Book after 1949?",
            options: [
              "Pryor's Country Place and the Mar-Fran",
              "Nothing",
              "The K. T. Thompson Lodge, as a meeting hall for travelers",
              "Boyd's farmhouse hotel and the barn clubhouse, under new names",
            ],
            correctIndex: 0,
            explanation: "Pryor's Country Place, 1954 to 1967, and the Mar-Fran Hotel, 1959 to 1967. The resort itself was last listed in 1949.",
            sourceLessonSlug: "fl-decided-green-book",
          },
          {
            prompt: "What does National Register listing restrict for a private owner who uses no federal money?",
            options: [
              "Nothing, up to and including demolition",
              "Paint colors",
              "Any sale",
              "All additions, new windows and new roofs, which need a federal permit",
            ],
            correctIndex: 0,
            explanation: "The Park Service says listing places no restrictions on a non-federal owner, up to and including destruction, unless federal assistance is involved.",
            sourceLessonSlug: "fl-decided-designation",
          },
          {
            prompt: "What did the 2026 boundary increase do?",
            options: [
              "Removed Pryor's",
              "Grew the district to about 240 acres",
              "Made the whole lake a National Historic Landmark with federal protection",
              "Moved the marker",
            ],
            correctIndex: 1,
            explanation: "It took in the rest of the original development, the eastern addition with Pryor's, the landing, the west side and the north shore, and listed it under the Green Book MPDF.",
            sourceLessonSlug: "fl-decided-designation",
          },
          {
            prompt: "Pryor's Country Place has two listing dates in the record. Which should you use, and why?",
            options: [
              "February 19, 2025",
              "Either; they agree",
              "Neither one",
              "November 13, 2024, from the Park Service's weekly list, saying so",
            ],
            correctIndex: 3,
            explanation: "The weekly list is the Park Service's record of the action; the 2026 form's '02/19/2025' is its own summary. Prefer the record closest to the act, and name both.",
            sourceLessonSlug: "fl-decided-reading-a-nomination",
          },
          {
            prompt: "Why is 'the first African American resort community listed on the National Register' not taught here?",
            options: [
              "It is a rumor",
              "Idlewild's district was listed in 1979, twenty-two years earlier",
              "Fox Lake was never listed",
              "The theme study withdrew it",
            ],
            correctIndex: 1,
            explanation: "The theme study's footnote says it of Fox Lake, but Idlewild's district was listed on June 7, 1979, and Fox Lake in 2001.",
            sourceLessonSlug: "fl-decided-reading-a-nomination",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 4 · Now
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "fl-now-after-1964",
      title: "16 · 1964 and after: why Fox Lake held",
      section: "Section 4 · Now",
      body: `**REST-00 lesson 14 named the hard fact: the law that opened the country closed many of the businesses Black travelers had built.** Fox Lake is the case where the community held. **Both things are true, and the second does not cancel the first.**

## What changed in 1964

The 2026 nomination puts it plainly: "The Civil Rights Act of 1964 altered the course of Black resorts that had developed due to discrimination. With freedoms gained from legislation, African Americans were able to purchase property within any resort communities." It goes on: "By this time, though, Fox Lakers had already developed a sense of community, and an identity associated with Indiana's Black resort" (Garner, 2025, p. 32).

## What the owners did next

The record after 1964 is a record of building, not of closing:
- **1966:** Emery Boyd platted the north shore; ten cottages went up there between 1966 and 1982, built by Black vacationers (Garner, 2025, p. 31).
- **1967:** the Mar-Fran, burned in 1966, was rebuilt (Garner, 2025, p. 31).
- **1967 to 1969:** the Boyd family deeded 3.3 acres of lakefront for a new recreation center, ringed by a lagoon; the island it made was named Emery Boyd Park (Garner, 2025, p. 30).
- **September 1, 1968:** the **K. T. Thompson Lodge** was dedicated, named for Dr. Ketous Thomas Thompson, a physician of Alliance, Ohio, who was born in South Africa, worked as a Pullman porter in Chicago while finishing medical school, and began vacationing at Fox Lake after his marriage in 1928; he died in 1963 (Garner, 2025, pp. 30 to 31). The lodge has been in use ever since for suppers, camps, Sunday school, reunions and weddings (Garner, 2025, p. 31).
- **1982:** the last lake lot was sold, to an African American family (Garner, 2025, p. 31).

**Today**, the nomination says, Fox Lake "no longer has a restaurant or hotel," but "the property owners' association remains strong, the lodge is the hub for vacationer activities, and many of the cottages have been passed down in families, sometimes now in their third generation of ownership" (Garner, 2025, p. 32).

## Why it held: one argument, with an owner

The National Park Service's theme study offers an explanation: because northeast Indiana never saw the population and economic growth of much of the coastal South, Fox Lake owners "never experienced the intense pressure to sell, nor was the area subject to coordinated efforts to redevelop, that befell other historically Black summer communities" (Kahrl & Cammeron, 2022, p. 142). **That is an interpretation by named historians, and it is a good one. Teach it as theirs.** It has a corollary worth saying out loud: **the same slow growth that spared Fox Lake was not a choice anyone at Fox Lake made.** It is a fact about the region.

## The co-occurrence, stated plainly

| After 1964 | At Fox Lake |
|---|---|
| Black families can buy at any lake, by law | The owners build a new lodge and plat a new shore |
| The hotel and restaurant are gone by the time of the 2026 form | The association, the lodge and the families remain |

**Do not turn that into a moral.** The hotel did not close because the law was wrong, and the families did not stay because the law was right. **Each column is a fact with a source.**

## Sources
- ${GARNER_2025} Locator: pp. 30 to 32.
- ${KAHRL_2022} Locator: printed p. 142 (PDF p. 150).`,
      recallContent: [
        {
          prompt: "Name two places where the Fox Lake record contradicts itself or another source, and what would settle each.",
          answer: "Any two: plat 1926 or 1927 (the recorded plat); Pryor's listed Nov. 13, 2024 or Feb. 19, 2025 (the Park Service's weekly list); period of significance ending 1976 or 1982 (the listed form); Green Book in the 1950s and 1960s or last in 1949 (the state survey's table); 142 or 140 acres (a lake survey).",
        },
        {
          prompt: "What is the four-step procedure for a conflict between sources?",
          answer: "Name each version's owner with a page; prefer the record closest to the act; do not assume the later document is better; if you cannot settle it, write 'sources differ', give both, and say what would settle it.",
        },
      ],
    },
    {
      slug: "fl-now-tour",
      title: "17 · Now: what is there, and how to see it from public ground (360 tour, forthcoming)",
      section: "Section 4 · Now",
      lessonType: "virtual_tour",
      body: `**The 360 tour for this lesson is forthcoming.** A capture day is planned for next summer, from public ground only. This course is complete without it: the site template treats beat 4 as a drop-in. **Read this lesson now as your observation brief, and as the rules for going there yourself.**

## The rule before everything else

**Fox Lake is a living community on private land.** The cottages are homes and summer homes, many held by the same families for three generations. **This course never sends you to a cottage, a private lane or a private dock.** The 2026 nomination lists owners by address; this course does not reproduce that list, and you should not either.

## Where you may stand

1. **The state historical marker**, at the southeast point of Fox Lake, listed by the Indiana Historical Bureau at 1429 Fox Lake Rd., Angola (Indiana Historical Bureau, 2022). Read both sides. Note the three sponsors.
2. **The public access site**, which the State of Indiana bought from the Pryors in the mid-1960s: a boat launch and fishing pier east of Pryor's Place, still public (Garner, 2025, p. 31).
3. **West Fox Lake Road**, the county road along the south shore (Garner, 2025, p. 25). Whether the numbered lanes off it are public roads is a question this course did not settle, so treat them as private unless you are invited.

**The K. T. Thompson Lodge is the association's building.** Go in only if the association invites you.

## What to look for, in order

1. **The slope.** From the water or the access site, find the two-story cottages: frame above, block below, door to the lake (lesson 8).
2. **The scale of the lots.** Cottages close together, about fifty by eighty feet in the original plat. **Small lots were how a lake was sold to working families.**
3. **The west bluff.** The two-story winged motel there is the Mar-Fran as rebuilt in 1967 (Garner, 2025, p. 31). Look; do not go in.
4. **The center of the south shore.** The lodge, the lagoon and the beach the association improved in 1952 and rebuilt in 1968.
5. **The north shore.** Newer houses, 1966 to 1982. **They are part of the same history, which is the 2026 boundary's whole argument.**
6. **The undeveloped northeast corner**, still owned by the land company (Garner, 2025, p. 31).
7. **The marker's words.** Compare them with what you see. What does the marker say that the shore does not show, and the reverse?

## What a tour cannot show

It cannot show a deed, a date, an owner, or who was refused at another lake the same weekend. **Everything this lesson cannot photograph, beats 3 and 5 send you to read.**

## Consent, if you take pictures

Photograph from public ground. Do not photograph people without asking, and never children. Do not photograph into windows. **An interior, any interior, needs the owner's consent first.**

## Sources
- ${GARNER_2025} Locator: pp. 25, 31.
- ${IHB_2022} Locator: location line.`,
      recallContent: [
        {
          prompt: "What did Fox Lake owners build after 1964?",
          answer: "The K. T. Thompson Lodge (dedicated September 1, 1968) on land the Boyd family deeded; ten north-shore cottages between 1966 and 1982; and the Mar-Fran was rebuilt in 1967. The last lake lot sold in 1982 to an African American family.",
        },
        {
          prompt: "What explanation does the NPS theme study give for why Fox Lake held, and how should you present it?",
          answer: "Northeast Indiana's slow growth meant no intense pressure to sell and no coordinated redevelopment. It is the historians' interpretation, so attribute it to them.",
        },
      ],
    },
    {
      slug: "fl-map",
      title: "18 · Map: Fox Lake and the places that made it",
      section: "Section 4 · Now",
      body: `Click any marker for its detail. **This map draws the whole country, so points within a day's drive of each other overlap.** It cannot show Fox Lake lot by lot, and it is not meant to. It shows three things:

**Blue: Fox Lake itself.**

**Green: where the people came from.** Indianapolis sent the most; Fort Wayne, Detroit, Chicago and Toledo sent others (Greiff, 2001, Sec. 8, p. 7).

**Amber: the company's cities, and the lake that was refused.** Marion, where the company kept its offices from 1924 to 1932; Kokomo, where they moved; and Valparaiso, near Sager Lake, refused in 1922 (Greiff, 2001, Sec. 8, pp. 5 to 6).

**Purple: the Midwest ring.** Idlewild in Michigan, the best-known Black lake resort and the subject of REST-00 lesson 4 and REST-02; Woodland Park near it; and Lake Ivanhoe in Wisconsin, founded by Black Chicagoans in 1926 (Kahrl & Cammeron, 2022, p. 56). REST-03 teaches the ring.

**Coordinates are approximate place centers from OpenStreetMap's gazetteer**, not the locations of buildings. Do not use them to find an address.

**What the map cannot show.** It cannot show the lakes that said no. Sager Lake is on it because a newspaper wrote it down; **every other refusal in Indiana in those years is missing because nobody did.**

## Sources
- ${GREIFF_2001} Locator: Section 8, pp. 5 to 7 (PDF pp. 9 to 11).
- ${KAHRL_2022} Locator: printed p. 56 (PDF p. 64).
- OpenStreetMap contributors. (n.d.). *Nominatim gazetteer*. https://nominatim.openstreetmap.org/`,
      mapContent: {
        atlas: "us-states",
        markers: [
          {
            id: "fl-fox-lake",
            lat: 41.623,
            lng: -85.025,
            title: "Fox Lake, Steuben County, Indiana",
            color: "#1d4ed8",
            description:
              "The subject of this course. The Fox Lake Land Company, five white businessmen, bought the Ward farm in 1924 to sell lots to Black families; the plat dates from 1926 or 1927 (sources differ) and the first cottage from 1928. Listed on the National Register in 2001, with Pryor's Country Place in 2024 and a boundary increase to about 240 acres in 2026. State marker 76.2022.1 stands at the southeast point.",
          },
          {
            id: "fl-indianapolis",
            lat: 39.768,
            lng: -86.158,
            title: "Indianapolis, Indiana",
            color: "#15803d",
            description:
              "The city that sent the most Fox Lake vacationers, Freeman B. Ransom among them, and home of the Indianapolis Recorder, whose pages the 2026 nomination cites for the resort's opening ad (1926), conventions and picnics.",
          },
          {
            id: "fl-fort-wayne",
            lat: 41.08,
            lng: -85.139,
            title: "Fort Wayne, Indiana",
            color: "#15803d",
            description:
              "Home of Carl Wilson Sr., who built the first cottage, and of two of the 1924 incorporators. During World War II, Black troops from Baer Field here were invited to Fox Lake on weekend passes.",
          },
          {
            id: "fl-detroit",
            lat: 42.332,
            lng: -83.047,
            title: "Detroit, Michigan",
            color: "#15803d",
            description: "One of the distant cities both nominations name as a source of Fox Lake vacationers.",
          },
          {
            id: "fl-chicago",
            lat: 41.876,
            lng: -87.624,
            title: "Chicago, Illinois",
            color: "#15803d",
            description:
              "Source of vacationers, and of Albert and Hazelene Pryor, who bought the Hershey house in 1947 and ran Pryor's Country Place. Black Chicago families had tried and failed to buy Sager Lake in 1922.",
          },
          {
            id: "fl-toledo",
            lat: 41.653,
            lng: -83.538,
            title: "Toledo, Ohio",
            color: "#15803d",
            description: "Source of vacationers, and of the gun club that ran trap shooting matches at the lake in the early years.",
          },
          {
            id: "fl-marion",
            lat: 40.558,
            lng: -85.659,
            title: "Marion, Indiana",
            color: "#b45309",
            description:
              "The land company's offices, 1924 to 1932, and the city where Thomas Shipp and Abram Smith were lynched on August 7, 1930 (lesson 3, with a content note). No source links the two.",
          },
          {
            id: "fl-kokomo",
            lat: 40.486,
            lng: -86.134,
            title: "Kokomo, Indiana",
            color: "#b45309",
            description:
              "Home of incorporator Harry Schrader, and from 1932 of the company's offices, when Lowell T. Boyd, an insurance executive based here, took control.",
          },
          {
            id: "fl-valparaiso",
            lat: 41.467,
            lng: -87.06,
            title: "Valparaiso, Indiana (Sager Lake)",
            color: "#b45309",
            description:
              "In 1922 middle-class Black families from Chicago tried to buy Sager Lake, outside Valparaiso, for a summer resort. Local opposition stopped it.",
          },
          {
            id: "fl-idlewild",
            lat: 43.887,
            lng: -85.803,
            title: "Idlewild, Lake County, Michigan",
            color: "#7c3aed",
            description:
              "The best-known Black lake resort in the Midwest, founded 1912 by white developers and bought by Black owners; National Register district 1979, boundary increase 2010. Taught in REST-00 lesson 4; REST-02 picks up after 1921.",
          },
          {
            id: "fl-woodland-park",
            lat: 43.715,
            lng: -85.861,
            title: "Woodland Park, Michigan",
            color: "#7c3aed",
            description: "A second Black resort community near Idlewild, taught in REST-03.",
          },
          {
            id: "fl-lake-ivanhoe",
            lat: 42.58,
            lng: -88.34,
            title: "Lake Ivanhoe, Wisconsin",
            color: "#7c3aed",
            description:
              "An 83-acre lake resort community Black Chicagoans established in 1926, the year Fox Lake's plat was advertised. Taught in REST-03.",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 5 · Next
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "fl-next-read-the-record",
      title: "19 · Next: read the current record",
      section: "Section 5 · Next",
      lessonType: "exercise",
      body: `**Beat 5 asks what is decided about this place now, and who is deciding it.** At Fox Lake nobody has published a redevelopment plan; the live record is a boundary, a study list, a foundation's aims, an undeveloped corner and a county's parcel map. **Read each one, then answer the drill below.**

## 1. The boundary

The 2026 listing drew the historic district around most of the lake, about 240 acres (Garner, 2025, p. 35). **Read the verbal boundary description on page 36 of the form.** It walks the line parcel by parcel, using property lines and road edges. Notice what it leaves out as well as what it takes in.

## 2. The study list

The National Park Service's theme study put Fox Lake on its list for possible National Historic Landmark study and wrote: "Further study will be needed to determine the overall integrity of the Fox Lake Resort" (Kahrl & Cammeron, 2022, p. 186). **That sentence is an open door, not a decision.** A landmark nomination would need someone to write it.

## 3. The foundation

The Fox Lake Preservation Foundation says it was created "to advocate for the African American cultural heritage of Fox Lake" and its natural and built surroundings through fundraising, educational programming and community outreach (Fox Lake Preservation Foundation, n.d.). It sponsored the 2026 nomination and the 2022 marker (Garner, 2025, p. 37; Indiana Historical Bureau, 2022). **Read its site for what it is doing now, in its own words.**

## 4. The undeveloped corner

The land company "still owns under different officers" the undeveloped northeast corner of the lake, which it once meant to develop (Garner, 2025, p. 31). **An unplatted parcel inside a historic district is exactly where the next decision will happen**, if one does.

## 5. The parcel map

The 2026 form lists among its sources the "Steuben County, Indiana GIS Beacon Portal, accessed February 25, 2025" (Garner, 2025, p. 34). **Find the county's GIS through the county government's own website, not a third-party site.** Look up the public access site or the land company's parcel, never a cottage. Note the four facts from the Indiana Avenue course: parcel number, owner of record, assessed value, and the overlapping jurisdictions.

## 6. The question nobody has answered here

Is there a **local** historic preservation ordinance in Steuben County or Pleasant Township that reaches Fox Lake? Lesson 13 showed that National Register listing alone does not stop a demolition. **This course did not look. You can.** Start with the county's planning office.

## Rules

Look up public and institutional parcels only. **Do not publish a cottage owner's name with an address.** A public record in a county database and a name in your essay are different things.

## Sources
- ${FOX_LAKE_FOUNDATION}
- ${GARNER_2025} Locator: pp. 31, 34 to 37.
- ${IHB_2022} Locator: sponsors.
- ${KAHRL_2022} Locator: printed p. 186 (PDF p. 194).`,
      exercise: {
        instructions:
          "Type the missing word or name, then check. Close answers (spelling, capitalization) count as 'close', not wrong.",
        items: [
          {
            prompt: "The county GIS that the 2026 form lists in its bibliography is called the ___ portal.",
            answer: "Beacon",
            accept: ["beacon portal", "gis beacon", "beacon gis"],
            explanation: "The form cites the Steuben County, Indiana GIS Beacon Portal, accessed February 25, 2025. Find it from the county's own site.",
          },
          {
            prompt: "The theme study says further study is needed to determine the overall ___ of the Fox Lake Resort.",
            answer: "integrity",
            accept: ["integrity of the resort"],
            explanation: "Integrity is the National Register's word for how well a place still shows its history. The study list is an open door, not a decision.",
          },
          {
            prompt: "The body that still owns the undeveloped northeast corner of the lake is the Fox Lake ___ Company.",
            answer: "Land",
            accept: ["land company", "fox lake land company"],
            explanation: "Under different officers, according to the 2026 form. Its land is where a future decision would happen.",
          },
          {
            prompt: "The organization that sponsored the 2026 nomination is the Fox Lake ___ Foundation.",
            answer: "Preservation",
            accept: ["preservation foundation", "fox lake preservation foundation"],
            explanation: "It also co-sponsored the 2022 state marker, with the Indiana Historical Bureau and Indiana Landmarks.",
          },
          {
            prompt: "The level of significance the 2026 update gave the district is ___.",
            answer: "statewide",
            accept: ["state", "statewide significance"],
            explanation: "Raised from local, on the ground that Fox Lake is Indiana's only African American lake resort community.",
          },
          {
            prompt: "Listing places no restrictions on a non-federal owner unless ___ assistance is involved.",
            answer: "federal",
            accept: ["federal money", "federal funding"],
            explanation: "When federal money is involved, the Advisory Council on Historic Preservation must be allowed to comment.",
          },
          {
            prompt: "The kind of rule that could actually require a review before demolition is a ___ historic preservation ordinance.",
            answer: "local",
            accept: ["county", "municipal", "township"],
            explanation: "National Register listing alone does not stop a demolition. Whether one reaches Fox Lake is the open question this lesson leaves you.",
          },
          {
            prompt: "The public place on the lake that the State of Indiana bought from the Pryors is the public ___ site.",
            answer: "access",
            accept: ["access site", "public access site"],
            explanation: "A boat launch and fishing pier, bought in the mid-1960s and still public: a safe parcel to look up.",
          },
          {
            prompt: "The association's building at the center of the south shore is the K. T. ___ Lodge.",
            answer: "Thompson",
            accept: ["thompson lodge", "k. t. thompson"],
            explanation: "Dedicated September 1, 1968, and entered only by the association's invitation.",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 6 · Write
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "fl-write-assignment",
      title: "20 · Your assignment: one cottage, one owner, one document",
      section: "Section 6 · Write",
      lessonType: "assignment",
      body: `Beat 6 asks what can only be said about this place. **REST-00 lesson 20 gave you the rules for writing about a property. They all apply.** This lesson adds what is particular to Fox Lake.

## The assignment

Write **800 to 1,200 words** of nonfiction built on **one document** from this course: one Green Book listing, one Recorder story as a nomination quotes it, one line of the bylaws, one entry on a weekly list, one paragraph of a nomination. Every factual sentence must be checkable against a source you name.

## Choose your subject

- **A business:** Pryor's Country Place, the Mar-Fran, the hotel and clubhouse, or the land company.
- **A person in the record:** Carl Wilson Sr., John A. Roberts, Mary Frances Fleming and Mabel Van Cleave, the Pryors, the Rev. Plummer D. Jacobs, Dr. K. T. Thompson. **Historical figures only, as the nominations name them.**
- **A decision:** the 1938 association, the 1952 incorporation, the 1966 north-shore plat, the 2026 boundary.
- **A conflict:** one row of lesson 14's table, followed as far as you can take it.

**You may not write about a living private person**, quote anyone who has not agreed to be quoted, or name a current owner with an address.

## Build the table first

Five columns, as in REST-00: **date, event, instrument, source, and what else was happening.** The fifth column is where Marion, Sager Lake or 1964 may go. **It may not be used to balance anything.**

## Craft rules

1. **Lead with the document**, not a mood.
2. **Give every figure its owner**, and say "expected" when the source said expected.
3. **Say "ran" when the record says ran.** Ownership is a claim that needs a deed.
4. **One paragraph, at least, on what you could not establish.**
5. **No lost paradise.** Fox Lake is a working community with a strong association today. Write it in the present tense.

## Sources
- ${GARNER_2025}
- ${GREIFF_2001}`,
      recallContent: [
        {
          prompt: "Why is the land company's undeveloped northeast corner worth watching?",
          answer: "Because it is unplatted land inside the 2026 historic district, still owned by the company, which once meant to develop it. If a decision about Fox Lake's future comes, it is likely to come there.",
        },
        {
          prompt: "What open question about local protection did lesson 19 leave you?",
          answer: "Whether any local preservation ordinance in Steuben County or Pleasant Township reaches Fox Lake. National Register listing alone does not stop a demolition.",
        },
      ],
    },
    {
      slug: "fl-what-was-cut",
      title: "21 · What this course cut, and the sources nobody has opened",
      section: "Section 6 · Write",
      body: `**A course that hides its gaps teaches you to hide yours.** Here are this course's.

## Not settled

- **The plat date**, 1926 or 1927. The recorded plat was not read.
- **The level of significance in 2001**, local or statewide. The 2001 form's level box is illegible in the scan read here.
- **The end of the period of significance**, 1976 or 1982, inside one form.
- **Who owned the hotel business after 1943.** The record says who ran it.
- **What anything cost.** No open-market lot price, rent, room rate or dues figure appears in the sources read for this course, and none was guessed.

## Left out on purpose

- **Every cottage address and every current owner's name.** The 2026 form lists them; this course does not.
- **Living people's recollections.** The 2026 form quotes a living daughter of the Pryors. This course quotes no living private person without consent, and asks the foundation whether anyone wishes to be named.
- **Photographs**, except one cleared photograph of the clubhouse, until the people who hold the rights say yes.

## The unopened sources

1. **The Indianapolis Recorder**, 1926 to 1964. The 2026 form cites a dozen issues by date and page. **Every one of them is a primary source this course only knows second hand.**
2. **"History of Fox Lake Resort, 1925-1965,"** the property owners' association's unpublished manuscript of 1965 or 1966, in the Spears Family Collection at the Indiana Historical Society (Indiana Historical Bureau, 2022, nn. 2 to 3; Greiff, 2001, Sec. 9, p. 10).
3. **The association's articles of incorporation and bylaws**, July 8, 1952 (Greiff, 2001, Sec. 9, p. 9).
4. **The Fox Lake Newsletter**, volumes 1 to 6, October 1962 to October 1968 (Greiff, 2001, Sec. 9, p. 9).
5. **Steuben County's deed books and the 1930 Hixson plat book**, which settle the plat date.
6. **The Muncie Star Press of October 12, 1924**, the incorporation notice (Indiana Historical Bureau, 2022, n. 1).
7. **Mark Foster's 1999 article** on prosperous Black Americans and vacations, which the marker cites (Indiana Historical Bureau, 2022, n. 1).
8. **The Green Book pages** for Angola in each edition, at the Schomburg Center's digital collections.

**If you want to add to Fox Lake's history instead of repeating it, that list is where to start.**

## What comes next in the series

- **REST-02** picks up Idlewild after 1921.
- **REST-03** maps the Midwest ring this course's map began.
- **REST-04** goes to the mountains, the Gulf and the shore.

## Sources
- ${GARNER_2025}
- ${GREIFF_2001} Locator: Section 9, pp. 9 to 10 (PDF pp. 13 to 14), bibliography.
- ${IHB_2022} Locator: annotated text, notes 1 to 3.`,
    },
    {
      slug: "fl-final-quiz",
      title: "22 · Final quiz",
      section: "Section 6 · Write",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 10,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is the series rule this course runs on?",
            options: [
              "Lead each lesson with the community's happiest documented moment",
              "Never use a positive to soften a negative",
              "Give each side of every question exactly equal space and weight",
              "Use only federal sources, since state and local ones disagree",
            ],
            correctIndex: 1,
            explanation: "Fox Lake existed because Indiana's other lakes were closed. Both facts are true; neither answers the other.",
            sourceLessonSlug: "fl-a-lake-of-its-own",
          },
          {
            prompt: "Who formed the Fox Lake Land Company in 1924?",
            options: [
              "Five white businessmen",
              "The Indianapolis Recorder's publishers, as an investment",
              "Black families from Chicago who had lost Sager Lake",
              "Emery and Lowell Boyd, the Kokomo insurance brothers",
            ],
            correctIndex: 0,
            explanation: "Thieme, Christman, Eckhart, Moreland and Schrader. The Boyds took control in 1932.",
            sourceLessonSlug: "fl-1924-the-company",
          },
          {
            prompt: "What does the record connect between the 1930 Marion lynching and Fox Lake?",
            options: [
              "The lynching caused the 1932 sale of the company to the Boyds",
              "Only the company's office city",
              "The three young men had family cottages on the lake",
              "The lynching closed the resort for the 1930 and 1931 seasons",
            ],
            correctIndex: 1,
            explanation: "The 2026 form names Marion as both. No source links the lynching to the company's decisions; the 2001 form gives the Depression as the reason for the 1932 change.",
            sourceLessonSlug: "fl-marion-1930",
          },
          {
            prompt: "The founding year is given as 1924, 1926 or 1927, and 1928. What is the right way to handle that?",
            options: [
              "Pick 1924",
              "Pick whichever year is cited most often across the sources",
              "Name each event, then date it",
              "Write 'the 1920s', since the marker does, and stop there",
            ],
            correctIndex: 2,
            explanation: "Each date belongs to a different event, and the plat date itself is disputed.",
            sourceLessonSlug: "fl-1926-to-1932",
          },
          {
            prompt: "Why did organizations hold meetings at Fox Lake?",
            options: [
              "State rules",
              "The Green Book recommended the lake to clubs by name each summer",
              "A member owned a cottage there",
              "It was the only lake in Indiana with a hotel and a restaurant",
            ],
            correctIndex: 2,
            explanation: "The 2001 form: ownership produced the calendar.",
            sourceLessonSlug: "fl-who-came",
          },
          {
            prompt: "What makes a Fox Lake cottage significant, according to the Indiana Green Book survey's rule?",
            options: [
              "Its high-style architecture, which the survey ranks first",
              "Its age",
              "Its place in the resort's history",
              "Its size compared with cottages at Lake James and Hudson Lake",
            ],
            correctIndex: 2,
            explanation: "Architectural features are of secondary importance to the cumulative social history of the resort.",
            sourceLessonSlug: "fl-built-the-cottage",
          },
          {
            prompt: "Who were Mary Frances Fleming and Mabel Van Cleave?",
            options: [
              "Land company founders",
              "Two Black women who ran the hotel from 1943",
              "Green Book editors",
              "State officials who inspected the lake for the Department of Conservation",
            ],
            correctIndex: 1,
            explanation: "The Flemings later built the Mar-Fran. The record says the two women ran the hotel; it does not say who owned it.",
            sourceLessonSlug: "fl-built-who-built",
          },
          {
            prompt: "Which body built West Fox Lake Road in the late 1940s?",
            options: [
              "The association",
              "The NPS",
              "The county, a public body",
              "The land company, as part of the 1940 Butternut Point Addition",
            ],
            correctIndex: 2,
            explanation: "A public road is a public body's decision. The association ran services inside the plat; it could not build county roads.",
            sourceLessonSlug: "fl-decided-association",
          },
          {
            prompt: "The resort was last listed in the Green Book in 1949. What appeared after that?",
            options: [
              "Nothing",
              "Pryor's from 1954 and the Mar-Fran from 1959",
              "The lodge",
              "The whole lake as a single district, under the name Fox Lake Resort",
            ],
            correctIndex: 1,
            explanation: "Two businesses at the lake were listed to 1967, according to the state survey's table.",
            sourceLessonSlug: "fl-decided-green-book",
          },
          {
            prompt: "What did the 2026 listing change?",
            options: [
              "It made the cottages public",
              "It banned demolition",
              "It enlarged the district to about 240 acres and raised it to statewide",
              "It made the lake a landmark",
            ],
            correctIndex: 2,
            explanation: "Listing itself restricts no private owner. The theme study says landmark status would need further study.",
            sourceLessonSlug: "fl-decided-designation",
          },
          {
            prompt: "Why does this course not teach that Fox Lake is 'one of only two still-standing African American lake resorts'?",
            options: [
              "It is too modest",
              "The theme study names other surviving Midwest Black lake communities",
              "Idlewild closed",
              "Indiana Landmarks withdrew it",
            ],
            correctIndex: 1,
            explanation: "Lake Ivanhoe, Lake Placid and Lake Adney, in the National Park Service's theme study. The claim is contradicted by a better source.",
            sourceLessonSlug: "fl-decided-reading-a-nomination",
          },
          {
            prompt: "What explanation does the National Park Service theme study give for why Fox Lake held after 1964?",
            options: [
              "A federal grant",
              "A court order",
              "Slow regional growth meant little pressure to sell or redevelop",
              "Green Book listings",
            ],
            correctIndex: 2,
            explanation: "It is the historians' interpretation; present it as theirs.",
            sourceLessonSlug: "fl-now-after-1964",
          },
        ],
      },
    },
  ],
};
