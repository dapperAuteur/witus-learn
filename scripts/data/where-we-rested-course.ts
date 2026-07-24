// Authored "Where We Rested" — a cited, high-school-and-up course on Learn.WitUS (Culture &
// History) about the Black resort and beach communities that existed as going concerns: Highland
// Beach (Maryland), Idlewild (Michigan), American Beach (Florida), Oak Bluffs and the Inkwell
// (Massachusetts), and Bruce's Beach (California).
//
// It is the POSITIVE-TRACK course specified in plans/44-parallel-history-and-timelines.md, Part 1,
// and the natural companion to "The Green Book: How to Read a Route"
// (green-book-how-to-read-a-route), which is its prerequisite. The Green Book told a traveller
// where they could stop. This course is about the places Black Americans OWNED, so they would not
// have to ask.
//
// THE DESIGN RULE, which governs every lesson in the file:
//   NEVER USE A POSITIVE TO SOFTEN A NEGATIVE. These places existed BECAUSE the rest of the coast
//   was closed. A version of this course that reads as a pleasant travelogue has misled the
//   learner. The claim is CO-OCCURRENCE: both were happening at once, often to the same people.
//   Teach that; do not editorialise it into balance or uplift. The rule is stated to the learner
//   in lesson 1, given a procedure in lesson 12, and worked as an example in lesson 13.
//
// Sourcing discipline (the load-bearing part of this file):
//   * Every teaching lesson carries APA 7 in-line citations and a `## Sources` bibliography.
//   * The Bruce's Beach material is read out of the City of Manhattan Beach History Advisory
//     Board's report of October 25, 2021, which works from Los Angeles County deeds, the Superior
//     Court file in City of Manhattan Beach v. B.H. Dyer et al. (No. 157,573), the Board of
//     Trustees minutes, and the California Eagle. Award figures, ordinance numbers, dates and the
//     Bessonette cross-examination come from that report, not from memory.
//   * The 2021 to 2023 return sequence is read from Los Angeles County's own ARDI page and
//     Supervisor Hahn's office. The complications are reported: what came back was Block 5 (the
//     lifeguard building site), NOT the city park in Block 12; four other Black families
//     condemned in 1924 have had nothing returned; and the family sold the land back to the
//     County within about seven months.
//   * MaVynee Betsch and NaNa dune are taken from the National Park Service and from the
//     Timucuan Ecological and Historic Preserve Boundary Revision Act of 2004, not from the
//     popular "she saved the dune" version. The record shows a campaign, a landowner's
//     conveyance, and a statute.
//   * NO INVENTED STATISTIC, QUOTATION, CHARACTER OR ADDRESS. Where accounts disagree the course
//     gives the competing figures with their owners: Highland Beach at 26 and two-thirds acres
//     (the town) versus 40 acres (Preservation Maryland and others); Idlewild's peak at 20,000 or
//     25,000 visitors on a weekend versus 25,000 a year; American Beach at about 200 or 216
//     acres; Betsch as A.L. Lewis's great-granddaughter (NPS) or granddaughter (elsewhere).
//   * These are LIVING communities with living descendants who steward them. They are described
//     as they describe themselves. No triumphalism, no tragedy framing, no nostalgia.
//
// House rule: NO em-dashes or en-dashes in prose. Historical testimony is reproduced in markdown
// blockquotes, which the em-dash checker recognises as quoted material.

import type { AuthoredCourse } from "./authored-course";

export const WHERE_WE_RESTED_COURSE: AuthoredCourse = {
  title: "Where We Rested",
  description:
    "A cited, high-school-and-up course on the Black resort and beach communities that Americans built and ran as businesses: Highland Beach in Maryland, Idlewild in Michigan, American Beach in Florida, Oak Bluffs and the Inkwell on Martha's Vineyard, and Bruce's Beach in California. It teaches them as property, business and government rather than as scenery: who bought the land and from whom, who platted and sold the lots, what the hotels and clubs actually were, where the capital came from, who governed, and what the season had to earn. It runs on one rule, stated in the first lesson and never relaxed: a positive is never used to soften a negative. These places existed because the rest of the coast was closed, and both things were happening at the same time, often to the same people. It closes on Bruce's Beach, condemned by a city ordinance in 1924 and returned to the Bruce family's heirs on July 20, 2022, and on what actually happened to that land afterwards, which is more complicated than the headline. Prerequisite: The Green Book: How to Read a Route (green-book-how-to-read-a-route).",
  lessons: [
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 1 · Why these places existed
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "wwr-why-they-existed",
      title: "1 · Why these places existed, and the rule this course runs on",
      section: "Section 1 · Why these places existed",
      body: `**This course has a prerequisite, and it is not decoration.** Take **The Green Book: How to Read a Route** (\`green-book-how-to-read-a-route\`) first. That course teaches you to open a digitized edition, read a listing down to its abbreviations, chain listings into a route, and read a gap as evidence. It is the method course for everything in this series.

**This course is its companion, and the difference between them is one preposition.** The Green Book told a traveller **where they could stop**. This course is about the places Black Americans **owned**, so that they would not have to ask.

## The rule this course runs on

**Never use a positive to soften a negative.**

Read that again, because it governs every lesson here and it is the reason this course exists in the shape it does. Five communities are about to be taught as achievements, with deeds, plats, balance sheets, charters and payrolls. **None of that is offered as a counterweight to anything.** "Black Americans built beautiful resorts" is not an answer to "Black Americans were kept off the beach." It is not on the same ledger. There is no arithmetic in which one cancels the other.

**The claim this course is entitled to make is narrower and stronger: both were happening, at the same time, in the same country, often to the same people.** That is called **co-occurrence**, and Section 5 gives you a procedure for putting it on a page without cheating.

**Here is the practical version of the rule.** If a paragraph of this course reads like a travel brochure, it has failed. If it reads like a eulogy, it has also failed. **A resort that exists because you cannot use the public beach is not a holiday. It is an infrastructure workaround with a dance floor.**

## What was actually closed, and by what

The condition these places answered was not one law. It was a stack of instruments, and naming them is the difference between "there was racism" and "here is the document."

- **Statute, and its nullification.** California had a civil rights statute. In 1912 a Black man named Caleb Holden was charged one dollar for a beer while his white companion was charged a nickel. The Los Angeles City Attorney, John W. Shenk, was asked to look into it and declared that businesses had the right to charge whatever they desired and could change their prices at will. A letter to the editor of The Liberator wrote that Shenk "completely nullified the Civil Rights bill in this state" (City of Manhattan Beach History Advisory Board, 2021). **A statute you cannot enforce is a fact about the enforcement, not about the statute.**
- **Zoning.** In 1921 Secretary of Commerce Herbert Hoover organised an Advisory Committee on Zoning and distributed a manual nationwide on why cities should adopt zoning ordinances (Rothstein, 2017, as cited in City of Manhattan Beach History Advisory Board, 2021).
- **Private covenants and trade rules.** In 1924 the National Association of Real Estate Boards adopted a code of ethics stating that a realtor should never be instrumental in introducing into a neighbourhood members of any race or nationality whose presence would clearly be detrimental to property values. It stayed in effect into the 1950s (Rothstein, 2017, as cited in City of Manhattan Beach History Advisory Board, 2021).
- **Sundown towns.** Towns adopted policies forbidding Black people from being inside the town limits after dark. Two of Manhattan Beach's South Bay neighbours, Hawthorne and Inglewood, were sundown towns (Loewen, 2005, as cited in City of Manhattan Beach History Advisory Board, 2021).
- **Leases, and arrest.** A city could lease its own beach to a private man who would then post "No Trespassing" and have the police arrest swimmers. Manhattan Beach did exactly that in 1927, and lesson 13 walks through the summer it produced (City of Manhattan Beach History Advisory Board, 2021).
- **Violence.** The city's own report quotes SurveyLA: the final and most long-lasting mechanism of segregation was white violence and intimidation, ranging from polite requests to leave to bombs, vandalism and death threats (City of Manhattan Beach History Advisory Board, 2021).

**Six instruments, one effect.** Hold onto the list, because the communities in this course were built by people who knew every item on it by name.

## What you will be able to do at the end

- Say who bought a specific piece of ground, from whom, in what year, and where the record is.
- Tell a **subdivision** from a **hotel**, which is the single most common mistake made about these places.
- Name the **legal shape** a community is in, and say who can take its land as a result.
- Put two true things on one calendar without implying that either one settles the other.
- Read the Bruce's Beach return of 2022 as a civics problem rather than as a headline.

## What this course will not do

- It will not tell you these communities were paradises. They were businesses with seasons, debts, factions and bad years.
- It will not tell you a community's success proves anything about anybody's suffering.
- It will not invent a person, a price, an address or a quotation to make a paragraph land.
- It will not describe living residents in words they did not choose.

## Sources
- City of Manhattan Beach History Advisory Board. (2021, October 25). *History Advisory Board report*. City of Manhattan Beach. https://cmcp.org/wp-content/uploads/2023/02/Supplmental-Material_History-Report-4867-6724-8699-1-1.pdf
- Loewen, J. W. (2005). *Sundown towns: A hidden dimension of American racism*. New Press.
- National Park Service. (n.d.-d). *The Green Book: An historic context*. https://www.nps.gov/articles/000/the-green-book-an-historic-context.htm
- Rothstein, R. (2017). *The color of law: A forgotten history of how our government segregated America*. Liveright.`,
    },
    {
      slug: "wwr-what-resort-meant",
      title: "2 · What a resort meant here: five places, five legal shapes",
      section: "Section 1 · Why these places existed",
      body: `**The word "resort" will mislead you if you let it.** Today it usually means one company owning one property and selling you a room. **In four of the five places in this course it meant something completely different: a subdivision.** Somebody assembled land, filed a plat, cut it into lots, and sold the lots to individual buyers who built their own cottages. The "resort" is the aggregate of those buyers. **That is a real estate business, and it has a paper trail: a deed, a plat map, a tax roll.**

**The fifth is the exception, and the exception is the one that was taken.**

| Place | Founded | Who assembled the land | What was sold | Legal shape today |
|---|---|---|---|---|
| **Highland Beach**, Anne Arundel County, Maryland | 1893 | Charles and Laura Douglass, buying from a Black farming family | Lots | **Incorporated town** since 1922 |
| **Idlewild**, Lake County, Michigan | 1912 | The Idlewild Resort Company, four white couples | Lots | **Unincorporated**, in Yates Township |
| **American Beach**, Nassau County, Florida | 1935 | The Afro-American Life Insurance Company's Pension Bureau | Lots | **Unincorporated**, in Nassau County |
| **Oak Bluffs and the Inkwell**, Dukes County, Massachusetts | No founding date | Nobody. Individual buyers, deed by deed, from 1870 | Lots | **A town of Massachusetts** that Black owners do not control |
| **Bruce's Beach**, Manhattan Beach, California | 1912 | Willa Bruce, buying two lots in an existing tract | **Service, not land** | **Gone.** Condemned 1924, judgment 1929 |

**Read the last two columns together, because that is the argument of Section 4.** Four of these communities were an aggregate of many owners, and three of the four eventually acquired a body that could speak for the whole. Bruce's Beach was one family holding two lots inside a city governed entirely by other people. **It is the only one in the table that no longer exists, and Section 6 gives you the ordinance number.**

## Three things a resort here actually was

**1. Property.** Somebody holds title. Ask: who sold it, who bought it, what did it cost, and where is the deed recorded? Every community in this course has a county recorder's office with the answer in it.

**2. Business.** Somebody sells something. In these places the product line was remarkably consistent: **a place to sleep, a place to eat, a place to change your clothes, a place to dance, and the lot itself.** Section 3 takes those one at a time.

**3. Government.** Somebody makes rules and somebody enforces them. That could be a mayor, a township, a county, a lot owners association, or nobody. **Which one you have determines what happens when a more powerful government wants your ground.**

## The vocabulary you need, once

- **Plat.** A recorded map dividing a tract into numbered lots and blocks. Filing one is how raw land becomes sellable parcels. Idlewild's first plat was surveyed in 1915 (The Cultural Landscape Foundation, n.d.).
- **Lot and block.** The address system of a plat. Willa Bruce owned **Lot 8 and Lot 9 of Block 5** of Peck's Manhattan Beach Tract. Those words are the whole legal identity of Bruce's Beach (City of Manhattan Beach History Advisory Board, 2021).
- **Deed.** The instrument transferring title, recorded with a county. Deeds are public.
- **Incorporation.** The act by which residents create a municipality with the power to tax, zone and govern. Highland Beach did it on May 12, 1922 (Town of Highland Beach, n.d.).
- **Condemnation, or eminent domain.** A government taking private property for public use, paying compensation set by a court. Manhattan Beach used it in 1924 (City of Manhattan Beach History Advisory Board, 2021).

**One warning before Section 2.** These five communities were not a movement and did not coordinate. They are five separate business decisions made in five states across forty-two years, mostly by people who did not know each other. **Do not let the shape of a course convince you they were a plan.**

## Sources
- City of Manhattan Beach History Advisory Board. (2021, October 25). *History Advisory Board report*. City of Manhattan Beach. https://cmcp.org/wp-content/uploads/2023/02/Supplmental-Material_History-Report-4867-6724-8699-1-1.pdf
- The Cultural Landscape Foundation. (n.d.). *Idlewild Historic District*. https://www.tclf.org/idlewild-historic-district
- Town of Highland Beach. (n.d.). *History of Highland Beach*. https://www.highlandbeachmd.org/town-history`,
      recallContent: [
        {
          prompt: "State the rule this course runs on, in one sentence.",
          answer: "Never use a positive to soften a negative. A community's achievement is not a counterweight to anybody's exclusion; the claim the evidence supports is co-occurrence, that both were happening at the same time, often to the same people.",
        },
        {
          prompt: "Name four of the six instruments that closed American beaches and lodging to Black travellers.",
          answer: "A nullified civil rights statute (the Shenk opinion in Los Angeles, 1912), zoning promoted federally from 1921, private restrictive covenants and the 1924 realtors' code of ethics, sundown town rules, municipal beach leases enforced by arrest, and white violence.",
        },
        {
          prompt: "What is this course's prerequisite, and what does that course teach?",
          answer: "The Green Book: How to Read a Route. It teaches you to read a digitized Green Book edition, read a listing, chain listings into a route, and read a gap in the listings as evidence.",
        },
        {
          prompt: "How does this course say a paragraph can fail?",
          answer: "By reading like a travel brochure, or by reading like a eulogy. Either one has stopped reporting.",
        },
      ],
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 2 · Buying the land
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "wwr-highland-beach-1893",
      title: "3 · Highland Beach, 1893: a denial, a deed, and a subdivision",
      section: "Section 2 · Buying the land",
      body: `**Start with Highland Beach because it is the oldest, the smallest, and the only one that ended up governing itself outright.**

## The denial

Major **Charles Remond Douglass**, the youngest son of Frederick Douglass, and his wife **Laura** were refused service at a resort on the Chesapeake Bay because they were Black. Accounts of the refusal differ in detail. BlackPast places it in **1890** at a restaurant at the **Bay Ridge Resort**; the community's own museum account says only that they were "denied service because of their race" at a nearby resort (Frederick Douglass Museum and Cultural Center, n.d.). **Both accounts agree on the sequence: refusal first, purchase second.**

**Note what he did next, because it is the subject of this whole course.** He did not petition the resort. He bought the ground south of it.

## The deed, and a disagreement worth keeping

**How much land, and from whom, is genuinely contested, and the two answers come from equally serious places.**

- **The Town of Highland Beach's own history** says the Douglasses acquired **twenty-six and two-thirds acres** from **Daniel Brashears and Georgianna Lane**, heirs to the original Brashears estate (Town of Highland Beach, n.d.).
- **Preservation Maryland and other accounts** say **40 acres** of farmland, with **500 feet of beachfront**, purchased from **Daniel Brashears**, described as a free Black farmer and waterman of Anne Arundel County (Preservation Maryland, n.d.).

**Do not split the difference and do not pick the bigger number.** The deed is recorded in the **Anne Arundel County land records**, and this course has not read it. **A community's own history and a recorded deed are different kinds of document with different failure modes**, and when they disagree the way to resolve it is the deed, not a vote.

**One thing every account agrees on, and it matters more than the acreage.** The seller was Black. Daniel Brashears was a free Black farmer and waterman. **There was no white developer in the middle of this transaction**, which makes Highland Beach different from Idlewild in a way lesson 4 will make plain.

## The subdivision

Douglass **laid out the community** and named its two principal streets for Reconstruction-era friends of his father (Maryland Historical Trust, n.d.). **Naming a street is a governance act performed by a private person**, and it is an early sign of what this place was going to become.

Then he **subdivided the tract and sold lots**, to family and friends first (Frederick Douglass Museum and Cultural Center, n.d.; Preservation Maryland, n.d.). **That is the business model of this entire course in one line: buy a tract, cut it into lots, sell the lots to people who cannot buy elsewhere, and let them build.**

## The first buildings

Charles Douglass **built the first cottage in 1894** (Town of Highland Beach, n.d.). He also built **Twin Oaks**, a two-and-a-half-storey Queen Anne frame house with a wraparound porch and a corner tower, in **1894 to 1895**, for his father. **Frederick Douglass died in February 1895, before it was finished** (Maryland Historical Trust, n.d.; Town of Highland Beach, n.d.).

The Maryland Historical Trust's National Register entry records the tradition that Frederick Douglass designed the house with a second-floor balcony to give a view east toward the Eastern Shore, where he had been born. **Read the phrase "according to tradition" carefully.** The Trust is telling you it is a community account, not a documented design record. **That is exactly the honesty this course wants from you.**

**Twin Oaks was listed on the National Register of Historic Places on February 20, 1992**, inventory number AA-721, as the earliest construction in Highland Beach and the oldest structure remaining there (Maryland Historical Trust, n.d.). It was restored in 1986 and is now the **Frederick Douglass Museum and Cultural Center** (Preservation Maryland, n.d.).

## The incorporation

Charles Douglass died in **1920**. His son **Haley Douglass** led the effort that made Highland Beach an **incorporated municipality on May 12, 1922**, the first African American incorporated municipality in Maryland and, by the town's own account, believed to be the first African American summer resort in the United States (Town of Highland Beach, n.d.).

**Twenty-nine years from a refused dinner to a municipal charter.** Section 4 explains why that charter turned out to be the most consequential thing in this lesson.

## The place today, described as it describes itself

The town says it has **about 80 homes**, many still owned and occupied by descendants of the original settlers, and that **it prohibits commercial establishments** (Town of Highland Beach, n.d.). Preservation Maryland says **about 60 homes** and describes an **all-volunteer government** (Preservation Maryland, n.d.). **Two counts, both recent, both from serious sources.** The town's own figure is the one to prefer, and the difference is probably about what counts as a home.

Guests and residents recorded by the town include Paul Robeson, Robert and Mary Church Terrell, Booker T. Washington, Robert Weaver, W.E.B. Du Bois, Paul Laurence Dunbar, Langston Hughes, E. Franklin Frazier and Alex Haley (Town of Highland Beach, n.d.). **That list is the town's, not this course's**, and it is a list of visitors to somebody's summer street.

## Sources
- BlackPast. (n.d.-b). *Highland Beach, Maryland (1893 to present)*. https://blackpast.org/african-american-history/highland-beach-maryland-1893/
- Frederick Douglass Museum and Cultural Center. (n.d.). *How it all began*. https://fdmcc.org/founding-of-the-community
- Maryland Historical Trust. (n.d.). *Douglass Summer House* [National Register properties in Maryland, NRID 1097]. https://apps.mht.maryland.gov/nr/NRDetail.aspx?NRID=1097
- Preservation Maryland. (n.d.). *Highland Beach: Douglass family-founded beach town on the Chesapeake*. https://preservationmaryland.org/highland-beach-douglass-family-founded-beach-town-on-the-chesapeake/
- Town of Highland Beach. (n.d.). *History of Highland Beach*. https://www.highlandbeachmd.org/town-history`,
      recallContent: [
        {
          prompt: "Why will the word resort mislead you in this course?",
          answer: "Because in four of the five places it did not mean one company selling rooms. It meant a subdivision: somebody assembled land, filed a plat, cut it into lots, and sold the lots to individual buyers who built their own cottages.",
        },
        {
          prompt: "What are the five legal shapes in the table, one per community?",
          answer: "Incorporated town (Highland Beach), unincorporated community in a township (Idlewild), unincorporated community in a county (American Beach), property owners inside a town they do not control (Oak Bluffs), and private lots inside a hostile city (Bruce's Beach).",
        },
        {
          prompt: "What is a plat, and what does filing one do?",
          answer: "A recorded map dividing a tract into numbered lots and blocks. Filing one turns raw land into sellable parcels with legal identities.",
        },
        {
          prompt: "Which of the five no longer exists, and what is its legal identity in the record?",
          answer: "Bruce's Beach. Lots 8 and 9 of Block 5 of Peck's Manhattan Beach Tract, condemned by the city in 1924 with final judgment in 1929.",
        },
      ],
    },
    {
      slug: "wwr-idlewild-1912",
      title: "4 · Idlewild, 1912 to 1921: a lot-sales business, and the year the owners took it over",
      section: "Section 2 · Buying the land",
      body: `**Idlewild is the best business-history case in this course, and it opens with a fact that a careless version would hide.**

## Who founded it

**The Idlewild Resort Company was formed in 1912 by four white couples.** Erastus and Flora Branch and Adelbert and Isabelle Branch of White Cloud, Michigan; Wilbur M. and Mayme Lemon and A. E. and Madolin Wright of Chicago. They organised the company to turn roughly **2,700 acres of cutover timberland in Lake County, Michigan**, into a resort marketed to the middle-class and professional Black communities of Detroit and Chicago (Terry Wantz Historical Research Center, n.d.; The Cultural Landscape Foundation, n.d.).

**The community says this about itself, in these words, on its own website:** Idlewild was "Founded in 1912 by white land developers who marketed Idlewild as a resort community for blacks during the Jim Crow segregation era" (Idlewild Michigan, n.d.).

**Do not launder that.** A course that described Idlewild as founded by Black Americans would be telling a nicer story than the one the community tells about itself. **What Black Americans did at Idlewild is more interesting than founding it: they bought it, filled it, ran it, and in 1921 took the whole operation over.**

## The product

The company **surveyed its first plat in 1915** and began marketing lots in tracts adjacent to **Idlewild Lake**, about 100 acres, and near **Paradise Lake**, about 42 acres. An eight-acre island in Idlewild Lake, **Island Park**, later Williams Island, became the social centre, reached first by footbridges. **A clubhouse went up in 1916**, followed by an electrical plant, cottages and venues (The Cultural Landscape Foundation, n.d.).

**The sales terms are the most quoted business fact about Idlewild, and they need a caveat.** Secondary accounts consistently report **lots of 25 by 100 feet at 35 dollars**, sold on terms of **6 dollars down and 1 dollar a week**, and report that the company **recruited Black sales agents by giving them a lot for every lot they sold**. **This course has not checked those terms against the recorded 1915 plat or against a deed.** The Lake County Register of Deeds is where they would be checked, and if you want to make an original contribution to Idlewild's history rather than restate it, that is the errand.

**Look at what those terms do, if they are right.** A dollar a week is a working household's discretionary money. **Priced that way, a lot is not an investment vehicle for the rich. It is a savings plan.** And paying sales agents in lots turns the sales force into the resident population, which is a cheap way to seed a community and a fast way to lose control of one.

## The advertising, and the endorsement

The company advertised in Black newspapers, the **Chicago Defender** among them. The Cultural Landscape Foundation credits **W.E.B. Du Bois** with making Idlewild nationally known through an article in **The Crisis in 1921** (The Cultural Landscape Foundation, n.d.).

Early property owners named by the community and by the local historical research centre include **Dr. Daniel Hale Williams**, the Chicago surgeon who founded Provident Hospital; **W.E.B. Du Bois**; the novelist **Charles Waddell Chesnutt**; **Madam C. J. Walker**; and **Violette Neatley Anderson**, whom the community's own site describes as the first Black woman attorney in Chicago (Idlewild Michigan, n.d.; Terry Wantz Historical Research Center, n.d.).

**That roster is the marketing asset.** A lot company selling to a national Black market needed exactly one thing: proof that people whose judgment the market trusted had already bought.

## 1921, the year that matters

**In 1921 the original developers turned ownership and management of the resort over to the Idlewild Lot Owners Association, incorporated in August 1921 and run by Idlewild's Black property owners. The association still exists** (Idlewild Michigan, n.d.).

**Stop on that.** Nine years after four white couples formed a company to sell lots to Black buyers, the buyers held the going concern. **That is a transfer of a business, and it is the single most under-taught fact about Idlewild.** Lesson 10 comes back to what the association could and could not do.

## The peak, and three numbers that are not the same number

Idlewild's best decades ran from the 1920s into the early 1960s. **Nightlife was the draw.** Promoters **Phil Giles** and **Arthur Braggs** brought major entertainers to clubs including the **Flamingo**, the **Paradise** and the **El Morocco**, and the **Pere Marquette Railway** connected the resort to Chicago, Detroit, Cleveland and St. Louis (Idlewild Michigan, n.d.).

**Now the numbers, and this is a method lesson disguised as a fact.**

| Figure | Whose figure | What it counts |
|---|---|---|
| **25,000 visitors on a given weekend** in the 1950s | Ronald Stephens, a Purdue professor who has written two books on Idlewild, as reported in press accounts | A single weekend, at peak |
| **20,000 visitors on a summer weekend** | Other press accounts | A single weekend, at peak |
| **Almost 25,000 annual vacationers**, and **more than 300 Black-owned businesses** | The Idlewild community's own website | A whole year, and a business count |

**Those are not competing estimates of one quantity. They are three different quantities.** Twenty-five thousand in a weekend and twenty-five thousand in a year differ by roughly a factor of ten. **Give a figure its owner and its scope every single time, or you will publish a number that means nothing.**

## Designation

The **Idlewild Historic District** was listed on the National Register of Historic Places on **June 7, 1979**, reference number **79001160**, with Black social history as an area of significance (National Park Service, n.d.-e). **A boundary increase followed, and the sources disagree about when.** The Cultural Landscape Foundation says the district was expanded in **2010** (The Cultural Landscape Foundation, n.d.), while other listing summaries put the boundary increase in **2015**. **The National Register record settles it, and this course has not opened the nomination file.**

A **Michigan Historical Commission** marker stands at Idlewild; the Historical Marker Database records it as erected in **2009**, marker number S0713 (The Historical Marker Database, n.d.).

## Sources
- The Cultural Landscape Foundation. (n.d.). *Idlewild Historic District*. https://www.tclf.org/idlewild-historic-district
- The Historical Marker Database. (n.d.). *Idlewild historical marker*. https://www.hmdb.org/m.asp?m=182804
- Idlewild Michigan. (n.d.). *History*. https://www.idlewild-michigan.org/history
- National Park Service. (n.d.-e). *Idlewild Historic District* [National Register of Historic Places, reference no. 79001160]. https://npgallery.nps.gov/AssetDetail/NRIS/79001160
- Terry Wantz Historical Research Center. (n.d.). *Idlewild*. https://www.twhistoricalresearchcenter.com/idlewild`,
      recallContent: [
        {
          prompt: "Who did Charles Douglass buy Highland Beach from, and why does that detail matter?",
          answer: "Daniel Brashears, a free Black farmer and waterman of Anne Arundel County (the town's account adds Georgianna Lane). It matters because no white developer stood in the middle of the transaction.",
        },
        {
          prompt: "What are the two competing acreage figures for the 1893 purchase, and how would you settle them?",
          answer: "Twenty-six and two-thirds acres (the town's own history) and 40 acres (Preservation Maryland and others). The recorded deed in the Anne Arundel County land records settles it; this course has not read it.",
        },
        {
          prompt: "When did Highland Beach incorporate, who led it, and what was the significance?",
          answer: "May 12, 1922, led by Haley Douglass after his father Charles died in 1920. It was the first African American incorporated municipality in Maryland.",
        },
        {
          prompt: "What does the Maryland Historical Trust signal by writing that Frederick Douglass designed Twin Oaks according to tradition?",
          answer: "That it is a community account rather than a documented design record. The phrase is the Trust marking the limit of its evidence.",
        },
      ],
    },
    {
      slug: "wwr-american-beach-1935",
      title: "5 · American Beach, 1935: an insurance company buys a shoreline",
      section: "Section 2 · Buying the land",
      body: `**American Beach is the case where the capital has a name and a balance sheet, and that changes what kind of history it is.**

## The company first, the beach second

The **Afro-American Life Insurance Company** was founded in **Jacksonville, Florida, in 1901** to insure Black Floridians when white-owned insurers would not. **Abraham Lincoln Lewis** was one of seven founders and became its president; he is described as Florida's first Black millionaire (National Park Service, n.d.-a; Wikipedia, n.d.-a).

**In 1935 the company's Pension Bureau bought 33 acres of oceanfront on Amelia Island.** The purchase served two purposes at once: **an investment of company funds**, and **a resort for Black Floridians who were excluded from other beaches**, offered as a benefit to executives and as a sales incentive for employees (National Park Service, n.d.-c; Wikipedia, n.d.-a).

**Read that as a business decision, because that is what it was.** An insurer holds reserves and must invest them. This one invested part of them in beachfront that its own policyholders could actually use. **That is capital formation under exclusion, and it is an economics lesson rather than a footnote.**

## The name is an argument

Lewis named the place **American Beach**. The reason given in the accounts is that he and others held that in the United States beach access should be open to everyone. **The name is a claim about the country, filed as a property name.** The community's motto, carried on its markers and in its own materials, was **"Recreation and Relaxation Without Humiliation."**

**Notice something, and do not overclaim it.** The Green Book course taught that the rival guide *Travelguide*, published from 1947 to 1963, carried the motto "Vacation and Recreation Without Humiliation" (National Park Service, n.d.-d). **The construction recurs across Black leisure businesses of the period.** Whether one borrowed from the other is not established here, and you should not assert it.

## The subdivision, and an acreage range

**Lewis had the land subdivided and sold parcels** to Black-owned companies and to shareholders, and the community grew well beyond the original 33 acres. **Accounts of its greatest extent range from about 200 acres to 216 acres** (Wikipedia, n.d.-a). **This course reports the range rather than choosing inside it.** The Nassau County property records are where the answer is.

**Same model as Highland Beach and Idlewild: buy a tract, cut it up, sell the lots.** The difference is who is buying and with whose money. Highland Beach was a federal employee's savings and his family's. Idlewild was a white land company's capital, and then thousands of dollar-a-week payments. **American Beach was an insurance company's investment portfolio.**

## What was on it

American Beach operated as a full resort: **hotels, restaurants and nightclubs alongside homes and other businesses** (Wikipedia, n.d.-a). The best-known building is **Evans' Rendezvous**, a nightclub on the ocean. The National Park Service notes plainly that Evans' Rendezvous **is not available for touring** (National Park Service, n.d.-b), which is the kind of sentence that tells you a building is real, standing, and not a museum.

The Park Service's own summary calls American Beach **the most prominent of Florida's segregated beaches**, significant for its role in providing travel and leisure to African Americans in the region in the mid-twentieth century (National Park Service, n.d.-c).

## 1964, twice

**Two things happened to American Beach in 1964, and it is important not to fuse them.**

- **The Civil Rights Act of 1964** desegregated public accommodations, including Florida's beaches. Black Floridians could go to beaches nearer home, and many did (Wikipedia, n.d.-a).
- **Hurricane Dora made landfall near St. Augustine in the early hours of September 10, 1964**, with winds estimated around 115 miles per hour, the first hurricane landfall at St. Augustine in the era of modern record keeping. Northeast Florida took heavy damage (National Oceanic and Atmospheric Administration, 2014). **American Beach lost homes and buildings** (Wikipedia, n.d.-a).

**One statute and one storm, ten weeks apart.** Lesson 14 handles what to do with that pairing without turning it into a moral.

## MaVynee Betsch, and the version worth checking

**MaVynee Oshun Betsch was born on January 13, 1935 and died on September 5, 2005** (National Park Service, n.d.-a). She studied at the **Oberlin Conservatory of Music** and performed in Europe, then returned to Florida in the 1960s to work on the environment; Wikipedia dates her return specifically to American Beach to **1977** (National Park Service, n.d.-a; Wikipedia, n.d.-a). She **donated her substantial inheritance to environmental causes** and sold her family's home to give away the proceeds (National Park Service, n.d.-a). She was known as **the Beach Lady**.

**Her relationship to A. L. Lewis is reported two different ways, and the disagreement is worth carrying.** The National Park Service says "Her great-grandfather, Abraham Lincoln Lewis" (National Park Service, n.d.-a). Wikipedia's American Beach article calls her his granddaughter (Wikipedia, n.d.-a). **Prefer the Park Service, note the conflict, and understand that a genealogy is settled by records rather than by repetition.**

## NaNa dune, and what actually happened

**The popular version is that the Beach Lady saved the dune.** The record is more specific and, read carefully, more instructive.

**NaNa** is part of the tallest dune system on Florida's Atlantic coast. The name is from **NaNa**, meaning grandmother in the **Twi** language of West Africa. When development of the Amelia Island Plantation resort threatened it, **Betsch campaigned against that development** (National Park Service, n.d.-a).

Then three separate things had to happen, and only the first was hers.

1. **She changed a landowner's mind.** Accounts credit her campaign with persuading the resort to preserve the dune.
2. **The landowner conveyed it.** Amelia Island Plantation bought the dune and donated it toward the National Park Service (Wikipedia, n.d.-a).
3. **Congress had to move a boundary.** The Park Service could not simply hold the parcel. The **Timucuan Ecological and Historic Preserve Boundary Revision Act of 2004** (H.R. 3768, 108th Congress) expanded the preserve's boundary to take in an **8.5-acre parcel** at American Beach. The Park Service today states that it owns the **8.5-acre sand dune** (Timucuan Ecological and Historic Preserve Boundary Revision Act of 2004; National Park Service, n.d.-b).

**Sources differ on the year of the donation**, with 2003 and 2004 both appearing. **The statute is the datable instrument and it is 2004.** When a popular account and a public law disagree about a date, use the public law.

**Why this version is better than the legend.** "One woman saved a dune" is a story about a personality. **"An activist changed a corporation's decision, and then a federal statute made the result permanent"** is a story about how anything gets protected in the United States, and it takes nothing at all away from her.

## The place today

**Most of American Beach is privately owned.** The Park Service says so and instructs visitors to respect residents' privacy (National Park Service, n.d.-b). The **A. L. Lewis Museum at American Beach opened on September 6, 2014**, a project Betsch had wanted for most of her life. An **American Beach Property Owners Association** exists, and **Nassau County planning staff have worked with the community since 2018** on identifying and preserving the community's character, including zoning updates and an explored Community Redevelopment Area designation (Nassau County, n.d.).

**And there is a live designation question right now.** After a letter of inquiry received in 2021, the National Park Service commissioned a **National Historic Landmark study** of American Beach, opened public comment on **November 4, 2024**, and expected the effort to run **through spring 2026** (National Park Service, n.d.-c). The district itself has been on the **National Register since 2002**; secondary summaries give the listing date as January 28, 2002 and the district as about 40 acres with 67 buildings and one structure, figures fixed in a nomination this course has not read. **Check the current status before you rely on any of this. A live process is a live process.**

## Sources
- Nassau County, Florida. (n.d.). *American Beach neighborhood planning*. https://www.nassaucountyfl.com/990/American-Beach-Neighborhood-Planning
- National Oceanic and Atmospheric Administration, Atlantic Oceanographic and Meteorological Laboratory. (2014). *50th anniversary of Hurricane Dora's St. Augustine landfall*. https://www.aoml.noaa.gov/hurricane_blog/50th-anniversary-of-hurricane-doras-st-augustine-landfall/
- National Park Service. (n.d.-a). *MaVynee "Beach Lady" Betsch*. https://www.nps.gov/people/mavynee-beach-lady-betsch.htm
- National Park Service. (n.d.-b). *Visiting American Beach*. Timucuan Ecological and Historic Preserve. https://www.nps.gov/timu/learn/historyculture/ambch_visiting.htm
- National Park Service. (n.d.-c). *National Park Service announces study of American Beach for possible National Historic Landmark designation* [News release]. Timucuan Ecological and Historic Preserve. https://www.nps.gov/timu/learn/news/national-park-service-announces-study-of-american-beach-for-possible-national-historic-landmark-designation.htm
- National Park Service. (n.d.-d). *The Green Book: An historic context*. https://www.nps.gov/articles/000/the-green-book-an-historic-context.htm
- Timucuan Ecological and Historic Preserve Boundary Revision Act of 2004, H.R. 3768, 108th Cong. (2004). https://www.congress.gov/bill/108th-congress/house-bill/3768/text
- Wikipedia. (n.d.-a). *American Beach, Florida*. https://en.wikipedia.org/wiki/American_Beach,_Florida`,
      recallContent: [
        {
          prompt: "Who formed the Idlewild Resort Company, and how does the Idlewild community describe that fact on its own website?",
          answer: "Four white couples, the Branches, the Lemons and the Wrights, in 1912. The community's site says Idlewild was founded in 1912 by white land developers who marketed it as a resort community for Black people during the Jim Crow era.",
        },
        {
          prompt: "What happened at Idlewild in 1921, and why is it the most under-taught fact about the place?",
          answer: "The original developers turned ownership and management over to the Idlewild Lot Owners Association, incorporated in August 1921 and run by Idlewild's Black property owners. It is a transfer of a going concern from the developers to the buyers.",
        },
        {
          prompt: "Idlewild's peak is reported as 25,000 visitors on a weekend, 20,000 on a weekend, and almost 25,000 a year. What is the method lesson?",
          answer: "Those are three different quantities, not three estimates of one. A weekend figure and an annual figure differ by roughly a factor of ten. Give every figure its owner and its scope.",
        },
        {
          prompt: "What are the reported Idlewild lot terms, and what is the honest caveat?",
          answer: "Lots of 25 by 100 feet at 35 dollars, 6 dollars down and 1 dollar a week, with sales agents paid in lots. The caveat is that this course has not checked those terms against the recorded 1915 plat or a deed at the Lake County Register of Deeds.",
        },
      ],
    },
    {
      slug: "wwr-oak-bluffs-deeds",
      title: "6 · Oak Bluffs: no founder, and 129 deeds",
      section: "Section 2 · Buying the land",
      body: `**Oak Bluffs breaks the pattern of the last three lessons, and that is why it is here.**

There is **no founder**, **no founding year**, and **no Black developer** to name. There is a town on Martha's Vineyard, in Dukes County, Massachusetts, in which Black families bought property **one deed at a time, over more than a century.** **The unit of analysis is not the subdivision. It is the transaction.**

## The land was subdivided for somebody else

The **Vineyard Grove Company**, formed by wealthy residents, laid out the **Highlands** section of what became Oak Bluffs around **1869 to 1870**, dividing it into roughly **700 small parcels of about 70 by 30 feet**, as a Methodist summer vacation community (Burnett, n.d.; Martha's Vineyard Magazine, 2016).

**The plan did not work.** When Methodist development faltered in an economic downturn, the company made a deal with a smaller **Baptist** organisation to hold revivals there. A **wooden open tabernacle was built in 1877**, on a site where the **New England Black Baptist Association** had held meetings (Burnett, n.d.; Martha's Vineyard Magazine, 2016).

**That is the hinge.** Historians Robert and Karen Hayden credit the 1877 tabernacle with the Highlands becoming **the first summer neighbourhood for vacationing and homeowning Black people** in the early 1900s (Hayden & Hayden, as cited in Martha's Vineyard Magazine, 2016). **A failed Methodist subdivision, rescued by a Baptist revival ground, became the place where Black families could buy.** Nobody planned that.

## The deeds, counted

**This is the best piece of primary research available on any community in this course, and it is a map made out of deeds.**

**Jeffrey Burnett**, then a doctoral candidate at Michigan State University, built the **Oak Bluffs Historic Highlands property map** by spatialising nineteenth and twentieth century deed records from the **Dukes County Registry of Deeds**. The project identified **129 deeds in which people of African descent purchased or sold land, covering 22 different properties**, and it works from deeds, census records and interviews with community members (Burnett, n.d.).

**Named early Black landowners, with dates:**

| Owner | What, and when |
|---|---|
| **Dr. Samuel T. Brimingham** | Beecher Park property, **August 1870** |
| **Ralph Mitchell, Patience Simmonds, Lucy Matthews, Mary Ann Mitchell** | Land in the Highlands, **between 1887 and 1890** |
| **Luella Barnett Coleman and her husband** | Three lots on Myrtle Avenue from Manuel Gonsalves for **800 dollars, 1944**; three more lots across Myrtle Avenue in **1955** (Martha's Vineyard Magazine, 2016) |

**Look at what a deed gives you that a memoir cannot.** A price. A seller's name. A street. A year. **The Coleman purchase is the most concrete transaction in this entire course**, because somebody read the instrument.

## Shearer Cottage

**Charles Shearer** was born in **1854** in Appomattox County, Virginia, to an enslaved woman and a white farm owner. During the Civil War, Union soldiers allowed him to travel with them. Afterwards he attended **Hampton Institute**, became a teacher there, and met **Henrietta**, also a teacher. The couple moved to Massachusetts around **1877** and bought property on Martha's Vineyard (National Trust for Historic Preservation, n.d.).

**Henrietta ran a laundry for ten years first.** In **1912** the Shearers opened a **12-room wooden inn** for African Americans, who were excluded from other island lodging. It grew to seat upwards of fifty people at its communal table (National Trust for Historic Preservation, n.d.).

**Two facts about Shearer Cottage belong together.** It was **listed in the Negro Motorist Green Book**, so the prerequisite course's method applies to it directly. And it **remains in the possession of Shearer descendants** and is still maintained by them (National Trust for Historic Preservation, n.d.; Martha's Vineyard African American Heritage Trail, n.d.).

**A laundry became an inn became a family asset held for more than a century.** That is a full business history in one sentence, and it started with somebody taking in washing.

## The Inkwell, and the name

The town beach in Oak Bluffs is known as **the Inkwell**. **The name was applied by white people as an insult**, referring to the skin colour of the people swimming there. **It was taken up by the swimmers.** BlackPast calls it the most famous of the beaches across the United States to transform an odious nickname into an emblem of pride (BlackPast, n.d.-a).

**Use the name, because the community uses it.** The Martha's Vineyard African American Heritage Trail describes the Inkwell as a beautiful swimming spot along Beach Road that has traditionally been a meeting place for African American families and visitors, busy from a dawn swimming group onward through July and August (Martha's Vineyard African American Heritage Trail, n.d.). **That is a present-tense description of a working beach, and it is the community's own.**

## The institution is voluntary, not municipal

Oak Bluffs is a **town of Massachusetts**. Its Black property owners do not govern it and never claimed to. **So the institution they built is an association rather than a government.**

**The Cottagers, Inc.** was founded in **1956** by **Thelma Garland Smith** with friends, in response to criticism that African Americans did not care about the island or contribute to community needs. It is a philanthropic volunteer organisation of **100 African American women homeowners** supporting charitable, educational and community service projects on the island, and it operates **Cottagers' Corner**. The Vineyard Gazette covered its sixtieth anniversary in 2016 and its seventieth in 2026 (Vineyard Gazette, 2016; Vineyard Gazette, 2026).

**Read the membership requirement closely: homeowners.** The Cottagers is an organisation of property owners, which makes it the direct cousin of Idlewild's Lot Owners Association and American Beach's Property Owners Association. **Three communities, three different legal shapes, and the same instinct: if you own the ground, form the body.**

The **African American Heritage Trail of Martha's Vineyard** was established in **1998** and now carries much of the interpretive work (National Trust for Historic Preservation, n.d.).

## Sources
- BlackPast. (n.d.-a). *The Inkwell, Martha's Vineyard (1890s to present)*. https://blackpast.org/african-american-history/inkwell-martha-s-vineyard-1890s/
- Burnett, J. (n.d.). *Oak Bluffs historic Highlands map*. https://historic-highlands.oakbluffsarchaeology.org/
- Martha's Vineyard African American Heritage Trail. (n.d.). *Town of Oak Bluffs*. https://mvafricanamericanheritagetrail.org/trail-sites/town-of-oak-bluffs/
- Martha's Vineyard Magazine. (2016, August 1). *Life in the Highlands*. https://mvmagazine.com/news/2016/08/01/life-highlands
- National Trust for Historic Preservation. (n.d.). *Shearer Cottage and the rich African American heritage of Martha's Vineyard*. https://savingplaces.org/stories/shearer-cottage-and-the-rich-african-american-heritage-of-marthas-vineyard
- Vineyard Gazette. (2016, August 2). *The Cottagers: Sixty years of community and philanthropy*. https://vineyardgazette.com/news/2016/08/02/cottagers-sixty-years-community-and-philanthrophy
- Vineyard Gazette. (2026, July 1). *Cottagers celebrate 70 years of service*. https://vineyardgazette.com/news/2026/07/01/cottagers-celebrate-70-years-service`,
      recallContent: [
        {
          prompt: "Where did the Afro-American Life Insurance Company's money for American Beach come from, and why is that an economics lesson?",
          answer: "From an insurer's invested reserves. The company was founded in 1901 to insure Black Floridians when white insurers would not, and in 1935 its Pension Bureau bought 33 acres of oceanfront as both an investment and a resort its policyholders could use. That is capital formation under exclusion.",
        },
        {
          prompt: "What three steps actually protected NaNa dune?",
          answer: "MaVynee Betsch's campaign changed the resort's decision; Amelia Island Plantation bought and donated the dune; and the Timucuan Ecological and Historic Preserve Boundary Revision Act of 2004 expanded the preserve boundary to take in the 8.5-acre parcel.",
        },
        {
          prompt: "Which two things happened to American Beach in 1964?",
          answer: "The Civil Rights Act desegregated public accommodations including Florida beaches, and Hurricane Dora made landfall near St. Augustine on September 10 with winds estimated around 115 miles per hour, damaging the community.",
        },
        {
          prompt: "How is MaVynee Betsch related to A. L. Lewis, and what is the disagreement?",
          answer: "The National Park Service says great-granddaughter; Wikipedia's American Beach article says granddaughter. Prefer the Park Service and note the conflict, because a genealogy is settled by records rather than by repetition.",
        },
      ],
    },
    {
      slug: "wwr-quiz-land",
      title: "7 · Quiz: buying the land",
      section: "Section 2 · Buying the land",
      quiz: {
        passingScore: 70,
        // 15-question bank served 8 at a time with shuffled options, so a retake is a different
        // quiz rather than the same list (the repo standard, src/lib/quiz.ts).
        questionsPerAttempt: 8,
        shuffleOptions: true,
        questions: [
          {
            prompt: "State the rule this course runs on.",
            options: [
              "Balance every negative fact with a positive one",
              "Never use a positive to soften a negative",
              "Always lead with the achievement",
              "Report only what a community says about itself",
            ],
            correctIndex: 1,
            explanation: "The claim the evidence supports is co-occurrence, not balance. An achievement is not a counterweight to an exclusion.",
            sourceLessonSlug: "wwr-why-they-existed",
          },
          {
            prompt: "In 1912 the Los Angeles City Attorney John W. Shenk issued an opinion that, in the words of a letter to The Liberator, did what?",
            options: [
              "Required beaches to admit all paying customers",
              "Created the first zoning ordinance in California",
              "Nullified the state's civil rights bill",
              "Banned the renting of bathing suits",
            ],
            correctIndex: 2,
            explanation: "Shenk declared businesses could charge whatever they wished, which let them price Black customers out. A statute you cannot enforce is a fact about enforcement.",
            sourceLessonSlug: "wwr-why-they-existed",
          },
          {
            prompt: "In four of the five communities in this course, the word resort actually means:",
            options: [
              "A subdivision, sold lot by lot",
              "A single company hotel",
              "A municipal public park",
              "A membership club that owns no land",
            ],
            correctIndex: 0,
            explanation: "Somebody assembled land, filed a plat, cut it into lots and sold them. The community is the aggregate of the buyers.",
            sourceLessonSlug: "wwr-what-resort-meant",
          },
          {
            prompt: "Willa Bruce's holding at Manhattan Beach had which legal identity?",
            options: [
              "An unrecorded homestead claim",
              "Lots 8 and 9 of Block 5, Peck's Manhattan Beach Tract",
              "The whole of Peck's Manhattan Beach Tract",
              "A ninety-nine year lease granted by the city of Manhattan Beach",
            ],
            correctIndex: 1,
            explanation: "Two lots in one block of a recorded tract. Those words are the entire legal identity of Bruce's Beach.",
            sourceLessonSlug: "wwr-what-resort-meant",
          },
          {
            prompt: "Who sold Charles and Laura Douglass the land that became Highland Beach?",
            options: [
              "The Bay Ridge Resort company that had refused them service",
              "The State of Maryland",
              "A Baltimore railroad company",
              "Daniel Brashears, a free Black farmer and waterman",
            ],
            correctIndex: 3,
            explanation: "The town's account adds Georgianna Lane as a co-seller. Either way the seller was Black, so no white developer stood in the middle.",
            sourceLessonSlug: "wwr-highland-beach-1893",
          },
          {
            prompt: "How much land the Douglasses bought in 1893 is contested. Which pair of figures is in dispute?",
            options: [
              "10 acres and 15 acres",
              "26 and two-thirds acres, and 40 acres",
              "100 acres and 216 acres",
              "2,700 acres and 3,000 acres of cutover timberland",
            ],
            correctIndex: 1,
            explanation: "The town's own history gives 26 and two-thirds acres; Preservation Maryland and others give 40. The recorded deed in Anne Arundel County settles it.",
            sourceLessonSlug: "wwr-highland-beach-1893",
          },
          {
            prompt: "Highland Beach incorporated on May 12, 1922. What did that make it?",
            options: [
              "A federally protected historic site",
              "A county park and recreation district",
              "The first African American incorporated municipality in Maryland",
              "The first National Historic Landmark district in the state of Maryland",
            ],
            correctIndex: 2,
            explanation: "Haley Douglass led the effort after his father Charles died in 1920. Incorporation gave the residents a municipal government of their own.",
            sourceLessonSlug: "wwr-highland-beach-1893",
          },
          {
            prompt: "Twin Oaks, the house Charles Douglass built for his father, was listed on the National Register in which year?",
            options: ["1922", "1986", "1992", "2002"],
            correctIndex: 2,
            explanation: "Listed February 20, 1992, inventory number AA-721, as the oldest structure remaining at Highland Beach. It was restored in 1986.",
            sourceLessonSlug: "wwr-highland-beach-1893",
          },
          {
            prompt: "Who formed the Idlewild Resort Company in 1912?",
            options: [
              "Four white couples from Michigan and Chicago",
              "The Idlewild Lot Owners Association",
              "Dr. Daniel Hale Williams and W.E.B. Du Bois, jointly",
              "Officers of the Pere Marquette Railway",
            ],
            correctIndex: 0,
            explanation: "The Branches, the Lemons and the Wrights. The Idlewild community states this on its own website, and a course that hid it would be telling a nicer story than the community tells.",
            sourceLessonSlug: "wwr-idlewild-1912",
          },
          {
            prompt: "What happened at Idlewild in August 1921?",
            options: [
              "The company surveyed and recorded its first plat",
              "The Chicago Defender stopped carrying the advertisements",
              "The federal government designated the historic district",
              "The Lot Owners Association took over the resort",
            ],
            correctIndex: 3,
            explanation: "The original developers turned ownership and management over to the association, run by Idlewild's Black property owners. It is a transfer of a going concern.",
            sourceLessonSlug: "wwr-idlewild-1912",
          },
          {
            prompt: "Idlewild's peak is variously reported as 25,000 on a weekend, 20,000 on a weekend, and almost 25,000 a year. What is the correct handling?",
            options: [
              "Average the three figures together",
              "Use the largest, since the others must undercount",
              "Discard all three of them as unreliable rumour",
              "Report each figure with its owner and its scope",
            ],
            correctIndex: 3,
            explanation: "A weekend figure and an annual figure differ by roughly a factor of ten, so they are not competing estimates of one quantity.",
            sourceLessonSlug: "wwr-idlewild-1912",
          },
          {
            prompt: "Which company bought the first 33 acres at American Beach, and in what year?",
            options: [
              "The Amelia Island Plantation resort company, in 1972",
              "The Afro-American Life Insurance Company, in 1935",
              "The Idlewild Resort Company, in 1935",
              "The Vineyard Grove Company, in 1901",
            ],
            correctIndex: 1,
            explanation: "The company's Pension Bureau bought the oceanfront as both an investment of reserves and a resort its policyholders could actually use.",
            sourceLessonSlug: "wwr-american-beach-1935",
          },
          {
            prompt: "What finally made NaNa dune permanently public land?",
            options: [
              "A federal statute revising a preserve boundary in 2004",
              "A Nassau County zoning amendment",
              "A purchase made by MaVynee Betsch herself",
              "A Florida state park designation granted in 1977 by the governor",
            ],
            correctIndex: 0,
            explanation: "Her campaign changed the resort's decision and the resort conveyed the land, but the Timucuan boundary revision act of 2004 is the instrument that let the Park Service hold the 8.5 acres.",
            sourceLessonSlug: "wwr-american-beach-1935",
          },
          {
            prompt: "What made the Oak Bluffs Highlands available to Black buyers in the first place?",
            options: [
              "A town ordinance reserving lots for Black families",
              "An outright gift of land from the Vineyard Grove Company trustees",
              "A federal Reconstruction-era land grant to freedpeople",
              "A failed Methodist subdivision, then an 1877 Baptist tabernacle",
            ],
            correctIndex: 3,
            explanation: "The Vineyard Grove Company platted about 700 small parcels around 1870 for a Methodist community; when that faltered it partnered with a Baptist organisation, and the tabernacle drew Black vacationers who then bought.",
            sourceLessonSlug: "wwr-oak-bluffs-deeds",
          },
          {
            prompt: "Jeffrey Burnett's Oak Bluffs Highlands project counted how many deeds involving people of African descent?",
            options: ["22", "70", "129", "700"],
            correctIndex: 2,
            explanation: "129 deeds covering 22 different properties, spatialised from the Dukes County Registry of Deeds. The 22 is the property count and the 700 is the original parcel count.",
            sourceLessonSlug: "wwr-oak-bluffs-deeds",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 3 · The businesses and the seasons
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "wwr-the-businesses",
      title: "8 · What was actually sold: a bed, a meal, a changing room, a dance floor, a lot",
      section: "Section 3 · The businesses and the seasons",
      body: `**Stop thinking about these places as destinations for a moment and look at the product line.** Across five states and fifty years the same five things were sold, and each one existed because it could not be bought elsewhere.

## 1. A bed

**Shearer Cottage, Oak Bluffs, 1912.** A **12-room wooden inn** opened by Charles and Henrietta Shearer specifically for African Americans, who were excluded from other island lodging (National Trust for Historic Preservation, n.d.). Other Oak Bluffs guest houses are named in the record too: **Aunt Georgia's House**, run by Mrs. Georgia O'Brien and Ms. Louisa Izett, and the **Maxwell House** (Martha's Vineyard African American Heritage Trail, n.d.; Martha's Vineyard Magazine, 2016).

**The Slaughter boarding house, Manhattan Beach, 1927.** Mr. and Mrs. James Slaughter opened a **modern ten-room boarding house at 120 26th Street**, outside the area the city had condemned, with a grand opening advertised in the California Eagle for Memorial Day, **Monday, May 30, 1927** (City of Manhattan Beach History Advisory Board, 2021).

**Idlewild and American Beach both ran hotels.** Idlewild's own account lists hotels, clubhouses, entertainment venues and places of worship around Idlewild Lake and Paradise Lake (Idlewild Michigan, n.d.). American Beach carried hotels, restaurants and nightclubs alongside its houses (Wikipedia, n.d.-a).

**A standing rule before you go looking.** **120 26th Street is an address in a public municipal history report, not an invitation.** Some of these addresses are people's homes today. Read them in the record; do not knock on them.

## 2. A meal

Willa Bruce's very first operation at Manhattan Beach, advertised in the Liberator for **June 17, 1912**, was **a small portable cottage with a stand that sold soda pop and lunches** (City of Manhattan Beach History Advisory Board, 2021). Shearer Cottage grew to seat **upwards of fifty people** at communal meals (National Trust for Historic Preservation, n.d.).

## 3. A changing room, which is the least romantic and most important item on this list

**Read this slowly, because it explains what segregation actually cost people.**

Willa Bruce's guests in 1912 arrived to find that she **rented bathing suits and provided access to bathing showers and dressing tents** (City of Manhattan Beach History Advisory Board, 2021). By **1916** the Bruces had built a **two-storey frame building with a kitchen, a dance floor and other amenities**, and by **1923** there were three buildings across their two lots (City of Manhattan Beach History Advisory Board, 2021).

**You cannot swim if you cannot change.** A public beach with no bath house you are allowed to use is not a public beach. **So the first product of a Black beach business was a room with a door on it**, and the second was the towel.

**Now look at what the city did about it.** On **June 5, 1924**, the same day the Board of Trustees passed Ordinance 276 declaring its intention to acquire Blocks 5 and 12 by condemnation, it passed **ordinances 273 to 275**, which prohibited new or additional bath houses and commercialised amusements near the Strand without Trustee approval, and prohibited dressing or undressing in any vehicle or temporary structure on the beach (City of Manhattan Beach History Advisory Board, 2021).

**Read those two facts as one decision.** The city moved against the land and against the business model on the same day, and the business model was a place to change your clothes. **When you can name the product, you can recognise the instrument aimed at it.**

## 4. A dance floor

**Idlewild's nightlife was the draw and the promoters have names.** **Phil Giles** and **Arthur Braggs** brought major entertainers to the **Flamingo**, the **Paradise** and the **El Morocco** (Idlewild Michigan, n.d.). A **clubhouse went up on the island in 1916**, followed by an electrical plant, cottages and venues (The Cultural Landscape Foundation, n.d.).

**American Beach's is Evans' Rendezvous**, a nightclub on the ocean, still standing and, the Park Service notes, **not available for touring** (National Park Service, n.d.-b).

**And the Bruces had a dance floor in 1916**, inside a two-storey building on 33 and one-third feet of beach frontage.

## 5. The lot itself

**In three of the five communities the primary product was land, and everything else was an amenity that made land sell.** Highland Beach: Charles Douglass subdivided and sold lots to family and friends. Idlewild: the Resort Company platted in 1915 and sold lots, reportedly for 35 dollars on weekly terms. American Beach: the Afro-American Life Insurance Company subdivided its 33 acres and sold parcels to Black-owned companies and shareholders.

**A hotel earns a room-night at a time. A lot company earns once, and then the buyer builds the town for you.** That is why the lot model recurs in this course and the pure hotel model does not.

## The parent business, in one case

**American Beach is the only community here whose developer had a completely different main line of business.** The Afro-American Life Insurance Company sold **insurance**, and the beach was an investment of company money plus a benefit for executives and a sales incentive for staff (National Park Service, n.d.-c; Wikipedia, n.d.-a). **The resort was a line item on somebody else's balance sheet**, which is a very different kind of business risk from a family inn.

## And one community that mostly refused to sell anything

**Highland Beach is the outlier and stays one.** It began as a summer retreat of private cottages, and **the town today prohibits commercial establishments** (Town of Highland Beach, n.d.). **A municipality can do that to itself.** Lesson 10 explains why that sentence is a governance fact and not a preference.

## Sources
- City of Manhattan Beach History Advisory Board. (2021, October 25). *History Advisory Board report*. City of Manhattan Beach. https://cmcp.org/wp-content/uploads/2023/02/Supplmental-Material_History-Report-4867-6724-8699-1-1.pdf
- The Cultural Landscape Foundation. (n.d.). *Idlewild Historic District*. https://www.tclf.org/idlewild-historic-district
- Idlewild Michigan. (n.d.). *History*. https://www.idlewild-michigan.org/history
- Martha's Vineyard African American Heritage Trail. (n.d.). *Town of Oak Bluffs*. https://mvafricanamericanheritagetrail.org/trail-sites/town-of-oak-bluffs/
- Martha's Vineyard Magazine. (2016, August 1). *Life in the Highlands*. https://mvmagazine.com/news/2016/08/01/life-highlands
- National Park Service. (n.d.-b). *Visiting American Beach*. Timucuan Ecological and Historic Preserve. https://www.nps.gov/timu/learn/historyculture/ambch_visiting.htm
- National Park Service. (n.d.-c). *National Park Service announces study of American Beach for possible National Historic Landmark designation* [News release]. Timucuan Ecological and Historic Preserve. https://www.nps.gov/timu/learn/news/national-park-service-announces-study-of-american-beach-for-possible-national-historic-landmark-designation.htm
- National Trust for Historic Preservation. (n.d.). *Shearer Cottage and the rich African American heritage of Martha's Vineyard*. https://savingplaces.org/stories/shearer-cottage-and-the-rich-african-american-heritage-of-marthas-vineyard
- Town of Highland Beach. (n.d.). *History of Highland Beach*. https://www.highlandbeachmd.org/town-history
- Wikipedia. (n.d.-a). *American Beach, Florida*. https://en.wikipedia.org/wiki/American_Beach,_Florida`,
      recallContent: [
        {
          prompt: "Why is Oak Bluffs in this course when it has no founder and no founding year?",
          answer: "Because it shows the other shape the same achievement can take: Black families bought property one deed at a time inside a town they did not govern. The unit of analysis is the transaction, not the subdivision.",
        },
        {
          prompt: "What did Jeffrey Burnett's Oak Bluffs Highlands project actually do, and with what records?",
          answer: "It spatialised nineteenth and twentieth century deeds from the Dukes County Registry of Deeds, identifying 129 deeds in which people of African descent bought or sold land across 22 properties, supported by census records and community interviews.",
        },
        {
          prompt: "Where does the name the Inkwell come from, and how should a writer handle it?",
          answer: "White people applied it as an insult about the skin colour of the swimmers, and the swimmers took it up as a name of pride. Use it, because the community uses it, and say where the name came from.",
        },
        {
          prompt: "What do the Cottagers, the Idlewild Lot Owners Association and the American Beach Property Owners Association have in common?",
          answer: "All three are associations of property owners. Three communities in three different legal shapes had the same instinct: if you own the ground, form the body.",
        },
      ],
    },
    {
      slug: "wwr-the-season",
      title: "9 · The season, the capital, and what the record will and will not tell you",
      section: "Section 3 · The businesses and the seasons",
      body: `**This is the lesson where a lot of writing about these communities goes soft, so this one is going to be blunt about its own limits first.**

## What this course does not know

**No season's books for any of these businesses has been read into this course.** Not a room rate, not an occupancy figure, not a payroll, not a night's take at the Flamingo. **So this course will not tell you how many weeks a season ran or what a cottage rented for.** Any writer who gives you those numbers owes you a source, and if the source is a memoir, the number is a memory.

**What is documented is the season's rough shape and where the money came from.** That is enough to teach the economics honestly.

## The shape of a season

The Martha's Vineyard African American Heritage Trail describes the Inkwell as one of the most popular spots for the community **in July and August** (Martha's Vineyard African American Heritage Trail, n.d.). Highland Beach began as a **summer retreat**, and the house Charles Douglass built for his father is called a **summer home** (Town of Highland Beach, n.d.). **A Michigan lake and a Massachusetts island earn in a short window. A Florida beach does not have the same constraint.**

**That difference matters more than it sounds.** A business with a ten-week earning window and a twelve-month cost base has to price like one, and it is fragile to exactly one bad summer. **Hold that thought until lesson 14, where a hurricane and a statute arrive in the same season.**

## Where the capital came from, which is the actual lesson

**Five communities, five completely different sources of money.** This is the table to remember.

| Community | The capital | What that implies |
|---|---|---|
| **Highland Beach** | A federal employee's savings and his family's, buying from a Black farmer | Small, personal, and answerable to nobody. Also small enough to stay residential |
| **Idlewild** | A white land company's capital first, then thousands of instalment payments from Black buyers | The developers took the early risk and the buyers took the town, formally, in 1921 |
| **American Beach** | An insurance company's invested reserves | Professional capital, a board, and a resort that is a line item |
| **Oak Bluffs** | Individual household savings, deed by deed | No single point of failure, and no single body that can act |
| **Bruce's Beach** | A railroad dining-car chef's wages and a woman running the business on site | One family, no partners, no association, no municipality |

**Charles Bruce worked as a dining-car chef on the train running between Salt Lake City and Los Angeles while the business operated** (City of Manhattan Beach History Advisory Board, 2021). **Read the last row against the first four and you have the argument of the next lesson.**

## Transport is a cost and a constraint

The **Pere Marquette Railway** connected Idlewild to Chicago, Detroit, Cleveland and St. Louis (Idlewild Michigan, n.d.). **A resort on a rail line has a catchment; a resort off one has a driveway.** The Green Book course taught what the automobile changed about who could travel and how; these communities sat on the receiving end of that change.

## The prices that ARE in the record

**Four, and every one of them has a caveat attached by the source itself.**

| Price | What it bought | The caveat |
|---|---|---|
| **1,225 dollars**, February 19, 1912 | Lot 8, Block 5, Peck's Manhattan Beach Tract, a parcel of 33 and one-third by 105 feet, bought by Willa Bruce from Henry Willard | The Los Angeles Times called it "a high price compared to the cost of nearby lots." **The city's own History Advisory Board could not obtain deeds for comparable properties to confirm that, said so in the report, and was still trying** (City of Manhattan Beach History Advisory Board, 2021) |
| **35 dollars**, from 1915 | A 25 by 100 foot lot at Idlewild, reportedly 6 dollars down and 1 dollar a week | Secondary accounts only. **Not checked here against the recorded plat or a deed** |
| **800 dollars**, 1944 | Three lots on Myrtle Avenue, Oak Bluffs, bought by Luella Barnett Coleman and her husband from Manuel Gonsalves | Read out of the deed record (Martha's Vineyard Magazine, 2016) |
| **14,500 dollars**, June 10, 1929 | The court's award to the Bruces for Lots 8 and 9 in the condemnation judgment | An award, not a sale price. The Bruces had asked for more (City of Manhattan Beach History Advisory Board, 2021) |

**One more figure, and it is here to be thought about rather than resolved.** The History Advisory Board's report notes that in the market for ocean frontage between Santa Monica and Long Beach at the time, a **66 and two-thirds by 100 foot ocean-facing lot could be purchased for 12,500 dollars, or 187 dollars per foot** (City of Manhattan Beach History Advisory Board, 2021).

**Do not turn that into a verdict.** The Bruces' two lots and the comparison lot are different sizes in different places in different years, and the report presents the comparison without computing an answer. **The honest sentence is: here are both figures, here is who produced them, and here is what would be needed to compare them properly.** A verdict you cannot support is worse than no verdict.

## The method rules for money in this course

1. **Give every figure an owner, a date and a scope.** Lesson 4's three Idlewild visitor numbers exist because somebody skipped this step.
2. **Say what you did to a number.** If you adjust for inflation, say so, say which index, and say which year you converted to.
3. **An award is not a price. An asking price is not a sale. A listing is not a transaction.**
4. **When a source attaches its own caveat, carry the caveat.** The Manhattan Beach report's admission that it could not get comparable deeds is one of the most useful sentences in it.
5. **A missing number is a finding.** "No season's accounts survive in an accessible archive" is a real result, and it tells the next researcher where to dig.

## Sources
- City of Manhattan Beach History Advisory Board. (2021, October 25). *History Advisory Board report*. City of Manhattan Beach. https://cmcp.org/wp-content/uploads/2023/02/Supplmental-Material_History-Report-4867-6724-8699-1-1.pdf
- Idlewild Michigan. (n.d.). *History*. https://www.idlewild-michigan.org/history
- Martha's Vineyard African American Heritage Trail. (n.d.). *Town of Oak Bluffs*. https://mvafricanamericanheritagetrail.org/trail-sites/town-of-oak-bluffs/
- Martha's Vineyard Magazine. (2016, August 1). *Life in the Highlands*. https://mvmagazine.com/news/2016/08/01/life-highlands
- Town of Highland Beach. (n.d.). *History of Highland Beach*. https://www.highlandbeachmd.org/town-history`,
      recallContent: [
        {
          prompt: "What were the five things these communities sold?",
          answer: "A bed, a meal, a changing room, a dance floor, and the lot itself. Each existed because it could not be bought elsewhere.",
        },
        {
          prompt: "Why is the changing room the most important item on that list?",
          answer: "Because you cannot swim if you cannot change, so a public beach with no bath house you may use is not a public beach. Willa Bruce's first product in 1912 was rented bathing suits, showers and dressing tents.",
        },
        {
          prompt: "What did Manhattan Beach pass on June 5, 1924, besides Ordinance 276?",
          answer: "Ordinances 273 to 275, prohibiting new bath houses and commercialised amusements near the Strand without Trustee approval and prohibiting dressing or undressing in any vehicle or temporary structure on the beach. The city moved against the land and the business model on the same day.",
        },
        {
          prompt: "Why does the lot model recur in this course and the pure hotel model does not?",
          answer: "A hotel earns a room-night at a time. A lot company earns once and then the buyer builds the town, so three of the five communities sold land as the primary product.",
        },
      ],
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 4 · Governance
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "wwr-governance",
      title: "10 · Who ran things: five legal shapes, and what each one can actually do",
      section: "Section 4 · Governance",
      body: `**This is the load-bearing lesson of the course, and it is the one most writing about these places skips entirely.**

Everything so far has been property and business. **Now ask the question that decides what happens to property and business: who governs the ground, and what powers do they hold?**

## The five shapes

**1. An incorporated municipality. Highland Beach, Maryland, since May 12, 1922.**
Residents created a municipal government, the first African American incorporated municipality in Maryland (Town of Highland Beach, n.d.). Preservation Maryland describes it as an **all-volunteer government** (Preservation Maryland, n.d.). **The town prohibits commercial establishments** (Town of Highland Beach, n.d.).

**Read that last sentence again as a governance fact.** A town can restrict land use inside its own limits because a municipality holds the **police power** delegated by the state. **A homeowners association cannot do that. A town can.**

**2. An unincorporated community, a township, and a lot owners association. Idlewild, Michigan.**
Idlewild is unincorporated and sits in **Yates Township, Lake County**, so the township and county provide public funding and administrative oversight. The **Idlewild Lot Owners Association**, incorporated in **August 1921**, has provided homeowner governance and preservation advocacy ever since, and an **Idlewild African American Chamber of Commerce** was founded in **2000** by John O. Meeks (Idlewild Michigan, n.d.).

**Two bodies, neither of them a city.** One is a unit of Michigan government the residents vote in; the other is a private corporation the property owners run.

**3. An unincorporated community, a county, and a property owners association. American Beach, Florida.**
American Beach is unincorporated in **Nassau County**. There is an **American Beach Property Owners Association**, and since **2018** county planning staff have worked with the community on identifying and preserving its character, including zoning updates and an explored **Community Redevelopment Area** designation (Nassau County, n.d.).

**Notice who holds the pen.** The zoning is the county's. The community participates. **Participation and authority are different things, and knowing which one you have is the whole skill.**

**4. Property owners inside a town they do not control. Oak Bluffs, Massachusetts.**
Oak Bluffs is a town of Massachusetts with its own government, and Black property owners there have never claimed to run it. **So the institution they built is voluntary: The Cottagers, Inc., founded in 1956 by Thelma Garland Smith with friends, a philanthropic organisation of 100 African American women homeowners** (Vineyard Gazette, 2016).

**5. Private lots inside a city governed by other people. Bruce's Beach, California.**
The Bruces held two lots. There was no township of theirs, no association, no municipality of theirs. **Every relevant power sat with the Manhattan Beach Board of Trustees**, and in 1923 a real estate agent named George Lindsey and, in the minutes' phrase, several civic leaders, petitioned that board to purchase Blocks 5 and 12 (City of Manhattan Beach History Advisory Board, 2021).

**Note the counter-petition, because it is easy to miss.** On **December 6, 1923** a petition was submitted to the Board by property owners of Blocks 5 and 12 protesting Lindsey's petition (City of Manhattan Beach History Advisory Board, 2021). **People objected on the record. It did not stop the ordinance.**

## What an association can do, and what only a government can do

| Power | Association | Township or county | Municipality |
|---|---|---|---|
| Hold and maintain common property | Yes | Yes | Yes |
| Set covenants binding its own members | Yes | No | No |
| Fundraise, advocate, preserve, interpret | Yes | Yes | Yes |
| **Levy taxes** | No | Yes | Yes |
| **Zone land** | No | Yes | Yes |
| **Take property by eminent domain** | No | Yes | Yes |
| **Police the streets** | No | Yes | Yes |

**Every power in the bottom half of that table is a power somebody can use on you.** An association is a way of speaking. A government is a way of deciding.

## The pattern, stated at exactly the strength the evidence supports

**Here is what these five cases show.** The community with a municipal charter still exists as a town with a government. The two with associations inside townships and counties still exist as communities, and their zoning is decided by a township or a county in which they are a minority. The one with individual deeds inside a town keeps its property and none of the authority. **The one with neither a charter nor an association nor a friendly government was condemned by ordinance in 1924 and was gone by 1927.**

**Now here is what these five cases do NOT show, and you must not let a good pattern run past its evidence.**

- **Five cases are not a sample.** You cannot derive a rule about American municipalities from five communities selected because they are well documented.
- **Incorporation is not armour.** Highland Beach incorporated in **1922** and Bruce's Beach was condemned in **1924**, and nothing about the first prevented the second, because they are in different states and unrelated. More to the point, the rest of this route series is full of incorporated places whose Black districts were taken anyway, by states, counties and highway departments that outrank a city.
- **The causation runs the other way as often as not.** A community that could organise a charter was already a community with money, lawyers and time.

**The claim that survives all of that is narrower and still worth having: legal shape determines who has to be persuaded, and which instrument they must use to move you.** It does not determine whether they succeed. **Knowing which body has the power is how you know which meeting to attend**, and that is the difference between a history course and a civics course.

## Sources
- City of Manhattan Beach History Advisory Board. (2021, October 25). *History Advisory Board report*. City of Manhattan Beach. https://cmcp.org/wp-content/uploads/2023/02/Supplmental-Material_History-Report-4867-6724-8699-1-1.pdf
- Idlewild Michigan. (n.d.). *History*. https://www.idlewild-michigan.org/history
- Nassau County, Florida. (n.d.). *American Beach neighborhood planning*. https://www.nassaucountyfl.com/990/American-Beach-Neighborhood-Planning
- Preservation Maryland. (n.d.). *Highland Beach: Douglass family-founded beach town on the Chesapeake*. https://preservationmaryland.org/highland-beach-douglass-family-founded-beach-town-on-the-chesapeake/
- Town of Highland Beach. (n.d.). *History of Highland Beach*. https://www.highlandbeachmd.org/town-history
- Vineyard Gazette. (2016, August 2). *The Cottagers: Sixty years of community and philanthropy*. https://vineyardgazette.com/news/2016/08/02/cottagers-sixty-years-community-and-philanthrophy`,
      recallContent: [
        {
          prompt: "What does this course refuse to tell you about these businesses, and why?",
          answer: "Room rates, occupancy, payroll, season length and a night's take, because no season's books for any of them has been read into the course. A writer who gives you those numbers owes you a source.",
        },
        {
          prompt: "Name the five different sources of capital behind the five communities.",
          answer: "A federal employee's savings (Highland Beach), a white land company then instalment payments from Black buyers (Idlewild), an insurance company's invested reserves (American Beach), individual household savings deed by deed (Oak Bluffs), and a railroad dining-car chef's wages with his wife running the business on site (Bruce's Beach).",
        },
        {
          prompt: "What did the Los Angeles Times say about the 1,225 dollars Willa Bruce paid, and what caveat did the city's own report attach?",
          answer: "The Times called it a high price compared to the cost of nearby lots. The History Advisory Board reported that it could not obtain deeds for comparable properties to confirm that and was still trying.",
        },
        {
          prompt: "State three of the five method rules for money in this course.",
          answer: "Give every figure an owner, a date and a scope; say what you did to a number; an award is not a price; carry a source's own caveat; and a missing number is a finding.",
        },
      ],
    },
    {
      slug: "wwr-quiz-business-governance",
      title: "11 · Quiz: the businesses, the money, and who governed",
      section: "Section 4 · Governance",
      quiz: {
        passingScore: 70,
        // 15-question bank served 8 at a time with shuffled options, so a retake is a different
        // quiz rather than the same list (the repo standard, src/lib/quiz.ts).
        questionsPerAttempt: 8,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What did Willa Bruce's operation actually sell when it opened on June 17, 1912?",
            options: [
              "Building lots, sold on weekly instalment terms to buyers",
              "Soda pop and lunches, plus suits, showers and dressing tents",
              "Life insurance policies underwritten for Black policyholders in Florida",
              "Nothing at all. It was a private family cottage with no trade",
            ],
            correctIndex: 1,
            explanation: "A portable cottage with a stand, and the changing facilities. Her first product was a room with a door on it.",
            sourceLessonSlug: "wwr-the-businesses",
          },
          {
            prompt: "Why does this course call the changing room the most important product on the list?",
            options: [
              "Because you cannot swim if you cannot change",
              "Because it was the most profitable line by a wide margin",
              "Because the buildings were architecturally significant and survive",
              "Because it was the only service the Green Book editors would list",
            ],
            correctIndex: 0,
            explanation: "A public beach with no bath house you are allowed to use is not a public beach, which is why a Black beach business began with a place to change.",
            sourceLessonSlug: "wwr-the-businesses",
          },
          {
            prompt: "Besides Ordinance 276, what did the Manhattan Beach Board of Trustees pass on June 5, 1924?",
            options: [
              "Ordinances 273 to 275, restricting bath houses and beach changing",
              "A resolution renaming the beachfront park after the Bruce family",
              "A bond issue to build a municipal pier at the foot of 26th Street",
              "An ordinance requiring all lodging houses to register their guests",
            ],
            correctIndex: 0,
            explanation: "The city moved against the land and against the business model on the same day, and the business model was a place to change your clothes.",
            sourceLessonSlug: "wwr-the-businesses",
          },
          {
            prompt: "Shearer Cottage in Oak Bluffs opened in 1912 as what, and after what earlier business?",
            options: [
              "A 40-room hotel, after a successful island real estate brokerage",
              "A restaurant, after a bakery the Shearers had run in Boston",
              "A nightclub, after a dance hall the family operated at the Highlands",
              "A 12-room inn, after Henrietta Shearer ran a laundry for ten years",
            ],
            correctIndex: 3,
            explanation: "The laundry came first. A laundry became an inn became a family asset held by descendants for more than a century.",
            sourceLessonSlug: "wwr-the-businesses",
          },
          {
            prompt: "Which community's developer had a completely different main line of business?",
            options: [
              "Highland Beach, whose founder ran a Chesapeake steamboat line",
              "American Beach, developed by an insurance company",
              "Oak Bluffs, developed by a Baptist publishing house",
              "Idlewild, developed by a Michigan lumber and sawmill partnership",
            ],
            correctIndex: 1,
            explanation: "The Afro-American Life Insurance Company sold insurance. The beach was an investment of company money and a staff benefit, a line item on somebody else's balance sheet.",
            sourceLessonSlug: "wwr-the-businesses",
          },
          {
            prompt: "What does this course say it does NOT know about these businesses?",
            options: [
              "Who owned the land, because the deeds were destroyed by fire",
              "Which states they were located in, because the records conflict badly",
              "Room rates, occupancy, payroll and season length",
              "Whether Black Americans were in fact excluded from other beaches",
            ],
            correctIndex: 2,
            explanation: "No season's books have been read into the course, so it refuses to supply those figures. A writer who gives them to you owes you a source.",
            sourceLessonSlug: "wwr-the-season",
          },
          {
            prompt: "Charles Bruce earned the family's outside income how?",
            options: [
              "As a dining-car chef on the railroad",
              "As a Los Angeles County lifeguard",
              "As a real estate agent selling Manhattan Beach lots",
              "As a postal carrier working a Los Angeles delivery route",
            ],
            correctIndex: 0,
            explanation: "He cooked on the train running between Salt Lake City and Los Angeles while Willa ran the business on site.",
            sourceLessonSlug: "wwr-the-season",
          },
          {
            prompt: "Luella Barnett Coleman and her husband bought three lots on Myrtle Avenue in Oak Bluffs in 1944 for how much?",
            options: ["35 dollars", "800 dollars", "1,225 dollars", "14,500 dollars"],
            correctIndex: 1,
            explanation: "Read out of the deed record. A deed gives you a price, a seller, a street and a year, which a memoir cannot.",
            sourceLessonSlug: "wwr-the-season",
          },
          {
            prompt: "The 14,500 dollars associated with the Bruces in 1929 was what, exactly?",
            options: [
              "The price at which they voluntarily sold the property to a buyer",
              "The assessed value entered by the Los Angeles County assessor",
              "The amount they had originally paid for the two beachfront lots",
              "The court's award in the condemnation judgment",
            ],
            correctIndex: 3,
            explanation: "An award, not a price. They had asked for more. An award is not a sale and an asking price is not a transaction.",
            sourceLessonSlug: "wwr-the-season",
          },
          {
            prompt: "Which power does a property owners association NOT have?",
            options: [
              "Taking property by eminent domain",
              "Holding and maintaining common property it owns",
              "Setting covenants that bind its own members",
              "Raising money, advocating, and interpreting local history",
            ],
            correctIndex: 0,
            explanation: "Taxing, zoning, condemning and policing are government powers. An association is a way of speaking; a government is a way of deciding.",
            sourceLessonSlug: "wwr-governance",
          },
          {
            prompt: "Idlewild is unincorporated. Which unit of Michigan government does it sit in?",
            options: [
              "The City of Baldwin, which annexed it in the 1920s",
              "Yates Township, in Lake County",
              "No unit at all. It is federal land inside a national forest",
              "The Idlewild Lot Owners Association, which is a public body",
            ],
            correctIndex: 1,
            explanation: "The township and county provide public funding and administrative oversight. The Lot Owners Association is a private corporation, not a government.",
            sourceLessonSlug: "wwr-governance",
          },
          {
            prompt: "Who decides zoning at American Beach?",
            options: [
              "The American Beach Property Owners Association, by member vote",
              "The National Park Service, under the Timucuan preserve legislation",
              "The community itself, through a town meeting held each summer",
              "Nassau County",
            ],
            correctIndex: 3,
            explanation: "The community is unincorporated, so the county holds the pen. County planning staff have worked with residents since 2018, but participation and authority are different things.",
            sourceLessonSlug: "wwr-governance",
          },
          {
            prompt: "On December 6, 1923, what appeared in the Manhattan Beach Board of Trustees minutes?",
            options: [
              "The final judgment awarding compensation to the condemned owners",
              "An ordinance leasing the beachfront to Oscar Bessonette for a dollar",
              "A petition from Blocks 5 and 12 owners protesting the purchase",
              "A grand jury report naming the city officials involved in the arson investigation",
            ],
            correctIndex: 2,
            explanation: "People objected on the record, three weeks after Lindsey's petition. It did not stop the ordinance, and a record of objection is still evidence.",
            sourceLessonSlug: "wwr-governance",
          },
          {
            prompt: "What is the strongest claim the five governance cases actually support?",
            options: [
              "Incorporating as a municipality protects a Black community from ever being taken",
              "Legal shape determines who must be persuaded and which instrument they must use",
              "Property owners associations are more effective than municipal governments",
              "Communities that organised early always kept their land and their businesses",
            ],
            correctIndex: 1,
            explanation: "It does not determine whether they succeed. Five well-documented cases are not a sample, and incorporation is not armour.",
            sourceLessonSlug: "wwr-governance",
          },
          {
            prompt: "Highland Beach prohibits commercial establishments. Why is that a governance fact rather than a preference?",
            options: [
              "Because the county rather than the town enforces the restriction",
              "Because the National Register listing forbids commercial use of the land",
              "Because a municipality holds police power delegated by the state",
              "Because the original 1893 deeds carried a covenant against any trade",
            ],
            correctIndex: 2,
            explanation: "A town can restrict land use inside its own limits. A homeowners association cannot, which is exactly the difference the lesson is teaching.",
            sourceLessonSlug: "wwr-governance",
          },
        ],
      },
    },
    // <<< APPEND NEXT SECTION ABOVE THIS LINE >>>
  ],
};
