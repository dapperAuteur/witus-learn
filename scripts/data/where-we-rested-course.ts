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
    // <<< APPEND NEXT SECTION ABOVE THIS LINE >>>
  ],
};
