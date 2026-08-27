import type { AuthoredCourse } from "./authored-course";

// WARRANT-01 · "The Match" (Civics). Source brief:
// plans/future-courses/land-and-schools/2026-08-27-01-land-grants-hbcus-farm-programs.md, which
// surveyed the whole land-grant / HBCU / farm-programs cluster, found the catalog close to
// greenfield on it (zero occurrences of "Morrill", "Pigford", "Homestead Act", "heirs property" or
// "Federation of Southern Cooperatives" across 226 registered courses), and recommended THIS course
// as the first build because every lesson but two rests on a document a learner can download today.
// Tier 0.
//
// THE SPINE, and the sentence the whole course is built to keep true:
// A FEDERAL BENEFIT IS CREATED, A CLASS IS EXCLUDED, A SEPARATE AND SMALLER CHANNEL IS BUILT FOR THE
// EXCLUDED CLASS, AND THAT CHANNEL IS THEN PERMITTED TO GO UNMATCHED BY THE PARTY OBLIGED TO FUND
// IT. The move appears at least four times inside this one statute family: 1890 against 1862;
// Evans-Allen against Hatch; the waiver that only 1890 institutions may receive; and the
// redistribution clause that moves a state's forfeited money to a state that paid.
//
// WHY THE STATUTE AND NOT THE HEADLINE. The brief was emphatic that the $12bn 2023 letter figure is
// contestable (it applies the 1862 institution's per-student state appropriation to the 1890's
// enrollment, so a critic can argue it partly measures mission mix), and that the far stronger
// material is two sentences in a three-page public-domain CRS In Focus. This course therefore leads
// with the statutory asymmetry and treats the 2023 letters as the current chapter rather than the
// spine. Section 5 teaches the methodological objection as a real objection, by name.
//
// EVERY PRIMARY DOCUMENT IN THIS FILE WAS READ DIRECTLY, not summarised from search results:
//   · 7 U.S.C. §301, §302, §304 (the 1862 grant formula, the scrip mechanism, the perpetual fund and
//     the "industrial classes" purpose language), read on uscode.house.gov.
//   · 7 U.S.C. §322 and §323 (the 1890 Act's annual cash appropriation, and the separate-but-equal
//     proviso), read on uscode.house.gov, text in effect on 26 August 2026.
//   · 7 U.S.C. §3221, §3222d (the extension capacity grant, the equal-match requirement, and the
//     waiver authority), read on uscode.house.gov.
//   · 7 U.S.C. §361c (the Hatch Act allotment, its withholding rule, and the ONLY 1862 waiver, which
//     reaches four jurisdictions), read on uscode.house.gov. This is what CRS's word "most" carries.
//   · CRS In Focus IF11847, VERSION 10, updated 15 June 2021, downloaded from congress.gov and read
//     in full. Version 10 is textually identical to version 9 except for the analyst's name.
//   · The sixteen Cardona/Vilsack letters of 18 September 2023, 48 pages, downloaded as published
//     and read. EVERY per-state figure in this course is taken from the letter itself.
//   · USDA press release 0188.23, 18 September 2023, read via the Internet Archive because usda.gov
//     refuses direct fetches.
//   · APLU policy brief 3000-PB1 (Lee & Keys, 2013), downloaded from aplu.org and read.
//
// TWO SOURCE-INTERNAL CONTRADICTIONS ARE TAUGHT RATHER THAN SMOOTHED:
//   · The APLU brief says the Evans-Allen Act came "90 years after the Hatch Act of 1887" (correct)
//     and in the same paragraph says extension arrived "83 years after the Smith-Lever Act of 1914"
//     beside a printed "1997" that is a typo for 1977. 1977 minus 1914 is 63. The course uses CRS
//     for the statutory dates, computes the gaps itself, and says the brief contradicts itself.
//   · The APLU brief's highlights box says "61 percent" and its body says "61.2 percent (11 out of
//     18)". Its own two shortfall figures add to $56,627,200 and it prints $56,627,199.
//
// THE ARITHMETIC THIS COURSE DID ITSELF, and it is the best exercise in the file: the sixteen 2023
// letters name sixteen dollar figures. They sum to $13,055,622,416. USDA's press release says "over
// $12 billion", which is true; press coverage said "$13 billion", which is the same sum rounded.
// Both are defensible and a learner with a calculator can settle it in five minutes.
//
// SECTION 7.3 OF THE BRIEF IS OBEYED IN LESSON 2, and it is not optional. This course has ONE
// injured party as its spine. It states the other injury in its own terms, early, without hedging
// and without absorbing it: the endowment the 1862 institutions received was land taken from
// Indigenous nations. Lesson 2 cites Lee and Ahtone, states their counts AS their counts, hands off
// to `tribal-nations-governance` and to WARRANT-03, and does not then use that fact to structure
// this course's argument. It carries that statement even though WARRANT-03 has not shipped, because
// neither course's honesty may depend on the other course existing.
//
// TESTED AND REFUSED (the ledger lesson prints all of them): the "14 to 16 million acres" figure for
// Black-owned farmland; the 925,708 count of 1920 Black farm operators; any per-institution 2023
// figure taken from press coverage rather than from the letter; a tribal affiliation for Tristan
// Ahtone; a current count of 1994 Institutions; and any characterisation of what the 2026 MOU's own
// text does or does not contain, since only the parties' announcements were readable.
//
// House style: `section` on every lesson; flush-left single-line `:::reveal q ||| a`; a
// `## Vocabulary` block of 3-6 lesson-specific terms; APA 7 `## Sources` with a stable URL wherever
// one exists; a quiz per teaching section (pool sized by density, serving 5, passing 80, shuffled)
// plus a final serving 10; every question carries `explanation` + `sourceLessonSlug`. Correct
// options are written SHORT and distractors long and specific, so `check-longest-option` passes by
// construction rather than by post-hoc trimming.
export const THE_MATCH_COURSE: AuthoredCourse = {
  title: "The Match",
  description:
    "One statute created two classes of college, and only one class has ever been allowed to come up short. This course teaches the American land-grant system as an instrument rather than as a story, starting from the words on the page. The Morrill Act of 1862 gave each state thirty thousand acres of public land for every senator and representative it had under the 1860 census, told the state to sell it, invest the proceeds in a fund whose capital must remain forever undiminished, and spend only the interest, forever, on a college teaching agriculture and the mechanic arts to the industrial classes. Then Congress attached the machine that made those colleges powerful: the Hatch Act of 1887 paid for agricultural experiment stations, and the Smith-Lever Act of 1914 paid for the extension agents who carried research to actual farms. The 1890 Institutions were not eligible for either, and Congress did not authorize annual research and extension capacity grants for them until 1977. That is ninety years without research money and sixty-three without extension money, and it is stated in one sentence in a three-page congressional document any learner can download. The 1890 Act itself is stranger than its reputation: it granted cash rather than land, so the phrase land-grant HBCU is exactly true about legal status and misleading about endowment, and its operative proviso wrote separate but equal into federal higher-education funding six years before Plessy v. Ferguson. The course then works the match. Capacity grants require dollar-for-dollar non-federal money; the law lets the Secretary of Agriculture waive the top half of that requirement for an 1890 institution and permits no such waiver for the 1862 institutions of any state; all states meet their 1862 match, and in FY2020 nine 1890 institutions took waivers. The 2013 APLU count and the sixteen letters two federal secretaries sent to sixteen governors in September 2023 are taught as evidence with their objections attached, including the governors who disputed the method by name. The course ends where the evidence ends, with an agreement that arrived in 2026 carrying no money, a ledger of what this course tested and refused to print, and a research exercise that has you pull your own state's numbers out of the report Congress requires USDA to publish every year.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1 — The instrument
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "thirty-thousand-acres-per-member",
      title: "1 · Thirty thousand acres for each senator and representative",
      section: "Section 1 · The instrument",
      body: `Start with the words, because almost everything people believe about land-grant colleges is a paraphrase of a paraphrase.

Here is the whole operative grant, at **7 U.S.C. § 301**, from the Act of July 2, 1862:

> "There is granted to the several States, for the purposes hereinafter mentioned in this subchapter, an amount of public land, to be apportioned to each State a quantity equal to thirty thousand acres for each Senator and Representative in Congress to which the States are respectively entitled by the apportionment under the census of 1860: Provided, That no mineral lands shall be selected or purchased under the provisions of said sections." (7 U.S.C. § 301, n.d.)

**Read what the unit of measure is.** Not students. Not farms. Not need. A state's share of the endowment was set by the size of its congressional delegation under a census taken two years earlier. New York had a large delegation in 1860 and therefore a large grant. Kansas had a small one.

**Read the second thing: the state does not receive a college.** It receives an asset. The statute that says what to do with the asset is **7 U.S.C. § 304**, and this is the sentence that makes the whole system work:

> "the moneys so invested or loaned shall constitute a perpetual fund, the capital of which shall remain forever undiminished (except so far as may be provided in section 305 of this title), and the interest of which shall be inviolably appropriated, by each State which may take and claim the benefit of this subchapter, to the endowment, support, and maintenance of at least one college where the leading object shall be, without excluding other scientific and classical studies and including military tactics, to teach such branches of learning as are related to agriculture and the mechanic arts, in such manner as the legislatures of the States may respectively prescribe, in order to promote the liberal and practical education of the industrial classes in the several pursuits and professions in life." (7 U.S.C. § 304, n.d.)

So the design is: **sell the land, invest the money, never touch the capital, spend the interest on a college, forever.** That is an endowment, in the ordinary sense a university uses the word today, created by statute out of federal real estate.

**Third thing, and it becomes the whole argument in four lessons' time.** Look at the heading the U.S. Code puts over these sections. Subchapter I of chapter 13 is titled **"COLLEGE-AID LAND APPROPRIATION"**. Hold that phrase. Subchapter II has a different heading, and the difference between the two headings is not decoration.

**Fourth: most states could not take the land where they lived.** Under **7 U.S.C. § 302**, a state selected its acreage from public land inside its own borders that was available at $1.25 an acre, and where there was not enough of that, the Secretary of the Interior issued **land scrip** for the shortfall, "said scrip to be sold by said States and the proceeds thereof applied to the uses and purposes prescribed in said sections, and for no other use or purpose whatsoever" (7 U.S.C. § 302, n.d.). A state could not locate its own scrip in another state. Its **assignees** could, on unappropriated federal land, up to a million acres in any one state.

That proviso is why an endowment collected in Ithaca or New Brunswick was paid for by land a thousand miles west. The next lesson is about whose land that was.

:::reveal Under the 1862 Act, what quantity of public land did each state receive, and what set the size of its share? ||| Thirty thousand acres for each senator and representative, so the size of the state's congressional delegation under the 1860 census set the size of its endowment.

:::reveal What does the statute say may never happen to the fund's capital? ||| It must remain forever undiminished. Only the interest may be spent, and only on the college.

:::reveal Why did eastern states end up endowed with western land? ||| Where a state lacked enough qualifying public land inside its own borders, the Interior Department issued land scrip instead; a state could not locate scrip in another state, but its assignees could.

## Vocabulary
- **Land-grant institution**: a college endowed under one of the Morrill Acts and holding that status in federal law, which is a legal category rather than a description of what the campus looks like.
- **Perpetual fund**: the invested proceeds of the granted land, whose capital the statute says must remain forever undiminished, so only the return is available to spend.
- **Land scrip**: a certificate issued to a state for acreage it could not take inside its own borders, sold by the state for cash, and locatable on federal land elsewhere only by the buyer.
- **Apportionment**: the allocation of House seats among the states after a census, which the 1862 Act borrowed as its formula for allocating acres.
- **The industrial classes**: the statute's own phrase for the intended beneficiaries of the education it endowed.

## Sources
7 U.S.C. § 301. (n.d.). *Land grant aid of colleges*. Office of the Law Revision Counsel, U.S. House of Representatives. https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title7-section301&num=0&edition=prelim

7 U.S.C. § 302. (n.d.). *Method of apportionment and selection; issuance of land scrip*. Office of the Law Revision Counsel, U.S. House of Representatives. https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title7-section302&num=0&edition=prelim

7 U.S.C. § 304. (n.d.). *Investment of proceeds of sale of land or scrip*. Office of the Law Revision Counsel, U.S. House of Representatives. https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title7-section304&num=0&edition=prelim`,
    },
    {
      slug: "whose-land-it-was",
      title: "2 · Whose land it was",
      section: "Section 1 · The instrument",
      body: `This course has one injured party at its centre and it is not the one this lesson is about. That is exactly why the lesson comes second rather than nowhere.

**The public domain the 1862 Act spent was land taken from Indigenous nations.** The statute in lesson 1 says "an amount of public land" as though the phrase needed no explanation. It needs one. Land became public domain by treaty cession, by seizure, and by purchase under conditions the seller did not set, and the 1862 Act converted it into university endowments.

**The scale of that conversion has been counted, parcel by parcel.** Robert Lee and Tristan Ahtone, reporting for *High Country News* in March 2020, reconstructed the Morrill Act land from Bureau of Land Management patent records, congressional documents and archival sources, and published the underlying database openly. Their figures, stated as they state them (Lee & Ahtone, 2020):

| What is counted | The investigation's figure |
| --- | --- |
| Acres redistributed by the Morrill Act | "nearly 11 million acres" |
| Parcels | "almost 80,000 parcels" |
| Where they lay | "24 Western states" |
| Nations named in the cessions | "nearly 250 tribes, bands and communities" |
| Cessions | "over 160 violence-backed land cessions" |
| Beneficiary institutions | "52 institutions across the United States" |
| Raised for endowments by the early 20th century | "$17.7 million" |
| Paid to extinguish Indigenous title to that land | "less than $400,000" |
| Still held in trust for at least 12 universities | "more than 500,000 acres" |
| Revenue those retained lands produced in FY2019 | "more than $5.4 million" |

**Every one of those is a count of a particular thing, and the counts are not interchangeable.** "Nearly 250 tribes, bands and communities" counts the parties named in cession documents. It is not a count of the 574 federally recognised nations that exist today, each of which is a distinct government. Fifty-two beneficiary institutions is not the same number as the twelve that still hold trust land. A course that blurred those would be doing the opposite of what this one is for.

**Now the two paragraphs this course owes you, and it owes them whether or not the sibling course ever ships.**

The 1862 institutions were endowed with land taken from Indigenous nations. That is not background to the story this course tells, it is a second and different injury, with a different injured party, a different legal footing, and a different remedy. Its footing is treaty rights, sovereignty and the federal trust responsibility, not civil rights and equal protection. Its remedies are argued in terms of land, treaty enforcement and government-to-government obligation. The people who get to decide how that story is told are the nations themselves.

So this course names it, cites it, and hands it off rather than absorbing it. **It does not become this course's argument.** Making Indigenous dispossession the prologue to a course about Black exclusion would turn a sovereign nation's land into a plot device, and this catalog has already decided, twice, not to do that. What happened to the remaining Indigenous land base after 1887, including allotment, the Dawes Act, the Indian Reorganization Act and the trust responsibility, belongs to **Tribal Nations and Governance**, which teaches it properly. What was done with the land already taken, parcel by parcel, belongs to WARRANT-03, and that course requires a review arrangement this one does not.

**One consequence you should carry forward.** In 1994 Congress made tribal colleges land-grant institutions. Section 3 comes back to that, and to the fact that the institutions run by the nations whose land endowed the system were admitted to it 132 years later.

:::reveal What does the "nearly 250 tribes, bands and communities" figure actually count? ||| The parties named in the cession documents the investigation traced. It is not a count of the federally recognised nations that exist today.

:::reveal Why does this course refuse to make Indigenous dispossession its organising argument? ||| Because it is a different injury with a different injured party, legal footing and remedy, and subordinating it to another story would reduce a sovereign nation's land to a plot device.

:::reveal Which shipped course owns allotment, the Dawes Act and the trust responsibility? ||| Tribal Nations and Governance. This course links to it and re-teaches none of it.

## Vocabulary
- **Public domain**: land held by the federal government and available for disposal, which in the 1862 Act's case had been acquired from Indigenous nations by cession, seizure and purchase.
- **Cession**: a transfer of land title from a nation to the United States, usually by treaty, and the unit the Morrill Act investigation counted.
- **Extinguishment of title**: the legal act by which the United States treated Indigenous title as ended, against which the investigation set the amount actually paid.
- **Trust land**: land the United States holds legal title to on behalf of another party, which in this story includes acreage granted institutions still hold.

## Sources
Lee, R., & Ahtone, T. (2020, March 30). *Land-grab universities: Expropriated Indigenous land is the foundation of the land-grant university system*. High Country News. https://www.hcn.org/issues/52-4/indigenous-affairs-education-land-grab-universities/`,
    },
    {
      slug: "what-a-capacity-grant-is",
      title: "3 · What a capacity grant is, and the machine it built",
      section: "Section 1 · The instrument",
      body: `An endowment pays for a campus. It does not, by itself, produce a variety of wheat or tell a farmer in the next county what to do about it. Congress built the machine that does that in two moves, and the machine is the reason a land-grant university became something other than a college.

**First, what the system is, in the words of the congressional document this course leans on hardest.** The Congressional Research Service describes the land-grant university system as "a federal-state partnership with a threefold mission of teaching, research, and extension", present "in all 50 states, the District of Columbia, and most U.S. territories", and notes that these institutions "originally focused on agriculture and the mechanical arts and now engage in a variety of academic disciplines" (Congressional Research Service [CRS], 2021, p. 1). Teaching is the part everyone can see. The other two thirds are what the next two statutes bought.

**Move one, 1887: research.** The **Hatch Act of 1887** (7 U.S.C. § 361a et seq.) created and funded agricultural experiment stations attached to the land-grant colleges, paid annually and by formula (CRS, 2021).

**Move two, 1914: delivery.** The **Smith-Lever Act of 1914** (7 U.S.C. § 341 et seq.) created the Cooperative Extension Service, the county-level system that carries what the experiment station learns to the people who farm (CRS, 2021).

**Both are capacity grants, and the term is worth getting exactly right.** CRS defines the category plainly: the National Institute of Food and Agriculture, inside USDA, "distributes capacity grants, also known as formula funds, among eligible institutions based on statutory formulas" and the recipient institutions "develop Plans of Work (subject to NIFA's approval) and decide which of their own projects to support" (CRS, 2021, p. 1).

**Compare that with the other kind of federal money in the same building.** A competitive grant is awarded "directly to specific projects proposed by eligible applicants and selected through a national peer-review process" (CRS, 2021, p. 1). The difference is not prestige. It is **who decides and how reliably the money arrives**:

| | Capacity grant (formula funds) | Competitive grant |
| --- | --- | --- |
| How much you get | Set by a statutory formula | Set by how your proposal scores |
| Who chooses the work | The institution, in its Plan of Work | The peer reviewers and the agency |
| Arrives when | Every year, as appropriated | If and when you win |
| What it can pay for | Standing capability: people, labs, stations | The project in the proposal |

**Capacity money is what lets an institution hire a scientist onto a career rather than onto a grant cycle.** That is why it compounds, and why an institution that has had it since 1887 is not simply richer than one that got it in 1977. It has had ninety more years of people, equipment, data series and the track record that wins competitive grants.

**One more feature of a capacity grant, and it is the hinge of this entire course.** CRS states it in a single clause: these grants "generally require one-to-one nonfederal matching funds (provided by the state or other nonfederal sources)" (CRS, 2021, p. 1). Federal money in this system is conditional. Somebody other than the federal government has to put up a matching dollar, or the federal dollar does not land.

Hold three things going into Section 2: **1887, research. 1914, extension. Both matched.**

:::reveal What is the defining feature of a capacity grant, as against a competitive grant? ||| It is distributed by statutory formula and the institution decides which of its own projects to support, rather than being awarded to a specific proposal through peer review.

:::reveal What did the Hatch Act of 1887 and the Smith-Lever Act of 1914 each pay for? ||| Hatch paid for the agricultural experiment stations, and Smith-Lever created the Cooperative Extension Service that carries research to farmers.

:::reveal What condition does CRS say federal capacity grants generally carry? ||| One-to-one non-federal matching funds, provided by the state or another non-federal source.

## Vocabulary
- **Capacity grant (formula funds)**: federal money distributed among eligible institutions by a statutory formula, spent on standing capability that the institution itself directs through an approved Plan of Work.
- **Competitive grant**: federal money awarded to a specific proposed project selected through national peer review.
- **Agricultural experiment station**: the research arm attached to a land-grant institution, created and funded by the Hatch Act of 1887.
- **Cooperative Extension Service**: the delivery arm created by the Smith-Lever Act of 1914, which carries research out to farms through county-level staff.
- **Non-federal match**: the dollar a state or other non-federal source must put up alongside a federal capacity dollar before that federal dollar is paid.

## Sources
Congressional Research Service. (2021, June 15). *1890 land-grant universities: Background and selected issues* (In Focus No. IF11847, Version 10). https://www.congress.gov/crs-product/IF11847`,
    },
    {
      slug: "quiz-the-instrument",
      title: "4 · Knowledge check: the instrument",
      section: "Section 1 · The instrument",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "Under 7 U.S.C. § 301, how much public land did each state receive per member of its congressional delegation?",
            options: ["Thirty thousand acres", "One hundred sixty acres, the same quantity a homestead claim carried under the 1862 Homestead Act", "Twenty thousand acres, doubled for states that had no public land inside their borders", "Six hundred forty acres, one full surveyed section of federal land per member"],
            correctIndex: 0,
            explanation: "Thirty thousand acres for each senator and representative, which made the size of a state's delegation the size of its endowment.",
            sourceLessonSlug: "thirty-thousand-acres-per-member",
          },
          {
            prompt: "The 1862 Act apportioned acreage using the apportionment under which census?",
            options: ["1860", "1850, the last full enumeration completed before the bill was first introduced in Congress", "1870, applied retroactively once the postwar count was finished", "The census of 1790, whose original apportionment the statute preserved for land grants"],
            correctIndex: 0,
            explanation: "The statute names the apportionment under the census of 1860, two years before the Act itself.",
            sourceLessonSlug: "thirty-thousand-acres-per-member",
          },
          {
            prompt: "What single category of land does 7 U.S.C. § 301 expressly exclude from selection or purchase?",
            options: ["Mineral lands", "Land within twenty miles of a navigable river or an existing federal canal project", "Any land already surveyed and offered at public auction before July 1862", "Land lying inside a state that had not ratified the Thirteenth Amendment"],
            correctIndex: 0,
            explanation: "The proviso in § 301 says no mineral lands shall be selected or purchased under the Act.",
            sourceLessonSlug: "thirty-thousand-acres-per-member",
          },
          {
            prompt: "According to 7 U.S.C. § 304, what must happen to the capital of the fund created from the land sales?",
            options: ["It stays forever undiminished", "It must be spent down over fifty years so that the benefit reaches the founding generation", "It may be drawn on for construction but not for salaries or ordinary operating costs", "It reverts to the federal Treasury once the college is built and accredited"],
            correctIndex: 0,
            explanation: "The statute makes it a perpetual fund whose capital remains forever undiminished, with only one narrow statutory exception.",
            sourceLessonSlug: "thirty-thousand-acres-per-member",
          },
          {
            prompt: "Under 7 U.S.C. § 304, what portion of the fund may the state actually spend on the college?",
            options: ["The interest", "The capital, once the state legislature has assented to the arrangement in writing", "Half the proceeds of each land sale as it is completed", "Whatever the federal government approves in an annual plan of work"],
            correctIndex: 0,
            explanation: "The interest is what the statute inviolably appropriates to the endowment, support and maintenance of the college.",
            sourceLessonSlug: "thirty-thousand-acres-per-member",
          },
          {
            prompt: "The 1862 Act's stated purpose is to promote the liberal and practical education of which group?",
            options: ["The industrial classes", "The sons of farmers residing in counties with no existing academy or seminary", "Veterans of the Union Army and their immediate dependants", "Students preparing for the learned professions of law, medicine and divinity"],
            correctIndex: 0,
            explanation: "The industrial classes is the statute's own phrase, and it is doing the work that words like access do today.",
            sourceLessonSlug: "thirty-thousand-acres-per-member",
          },
          {
            prompt: "Which branches of learning does § 304 name as the leading object of the endowed college?",
            options: ["Agriculture and the mechanic arts", "Scientific agriculture, veterinary medicine and the emerging discipline of civil engineering", "The natural sciences, to the deliberate exclusion of classical and literary studies", "Teacher training, surveying and the practical branches of commercial bookkeeping"],
            correctIndex: 0,
            explanation: "The statute adds that this is without excluding other scientific and classical studies, and including military tactics.",
            sourceLessonSlug: "thirty-thousand-acres-per-member",
          },
          {
            prompt: "How many colleges does § 304 require the state to endow with the fund?",
            options: ["At least one", "Exactly one, so that the endowment could never be split between two institutions", "One for every two members of the state's congressional delegation", "Three, covering agriculture, the mechanic arts and military tactics separately"],
            correctIndex: 0,
            explanation: "At least one college, which is the phrase that later made a two-institution split arguable at all.",
            sourceLessonSlug: "thirty-thousand-acres-per-member",
          },
          {
            prompt: "What is the U.S. Code heading over the subchapter containing the 1862 grant?",
            options: ["College-aid land appropriation", "Agricultural experiment stations and cooperative extension work", "Federal assistance to institutions of higher education in the several states", "Grants of the public domain for internal improvements and education"],
            correctIndex: 0,
            explanation: "Subchapter I is titled College-Aid Land Appropriation, and the word land in that heading is what changes in Subchapter II.",
            sourceLessonSlug: "thirty-thousand-acres-per-member",
          },
          {
            prompt: "Under 7 U.S.C. § 302, at what price were the qualifying public lands inside a state's own borders available at private entry?",
            options: ["$1.25 an acre", "$2.50 an acre, the doubled rate charged inside federal railroad land-grant corridors", "$0.75 an acre, a reduced rate set for education grants specifically", "Whatever the Secretary of the Interior appraised each parcel at before transfer"],
            correctIndex: 0,
            explanation: "The $1.25 threshold in § 302 defines which land inside a state counted toward its share.",
            sourceLessonSlug: "thirty-thousand-acres-per-member",
          },
          {
            prompt: "What did the Secretary of the Interior issue to a state that lacked enough qualifying public land inside its borders?",
            options: ["Land scrip", "A cash payment equal to the market value of the missing acreage at the date of the grant", "A reserved claim against future territorial acquisitions of the United States", "An exemption from the endowment requirement for the shortfall portion"],
            correctIndex: 0,
            explanation: "Land scrip for the acreage of the deficiency, which the state then sold for cash.",
            sourceLessonSlug: "thirty-thousand-acres-per-member",
          },
          {
            prompt: "Under § 302, who was permitted to locate a state's land scrip on federal land in another state?",
            options: ["The state's assignees", "The state itself, provided the receiving state's legislature consented by resolution", "The Secretary of the Interior, acting on the state's behalf at his own discretion", "Any land-grant college chartered under the Act, in its own corporate name"],
            correctIndex: 0,
            explanation: "The state could not locate its own scrip elsewhere; its assignees, meaning the buyers, could.",
            sourceLessonSlug: "thirty-thousand-acres-per-member",
          },
          {
            prompt: "What ceiling does § 302 place on how much scrip assignees may locate in any single state?",
            options: ["One million acres", "Thirty thousand acres, matching the per-member formula in the grant itself", "Five per cent of the unappropriated federal land within that state", "No ceiling at all, provided the land was subject to private entry"],
            correctIndex: 0,
            explanation: "Not more than one million acres could be located by such assignees in any one of the states.",
            sourceLessonSlug: "thirty-thousand-acres-per-member",
          },
          {
            prompt: "Section 302 says the proceeds of scrip sales may be applied to the Act's purposes and to what else?",
            options: ["Nothing else", "Any other educational purpose the state legislature designates by statute", "The retirement of state debts incurred in raising Union regiments", "The survey and improvement of the granted land before its sale"],
            correctIndex: 0,
            explanation: "The statute says for no other use or purpose whatsoever, which is unusually blunt drafting.",
            sourceLessonSlug: "thirty-thousand-acres-per-member",
          },
          {
            prompt: "The 1862 Act is popularly known by two names in the U.S. Code's own short-title note. One is the Morrill Act. What is the other?",
            options: ["The First Morrill Act", "The Agricultural College Endowment Act of 1862", "The Land Scrip Act", "The Public Domain Education Act"],
            correctIndex: 0,
            explanation: "The Code's short-title note records both Morrill Act and First Morrill Act for the 1862 statute.",
            sourceLessonSlug: "thirty-thousand-acres-per-member",
          },
          {
            prompt: "Under the 1862 design, what does a state actually receive from the federal government?",
            options: ["An asset to sell", "A completed college campus built to federal specifications and then transferred", "An annual cash appropriation renewed by Congress each session", "A federal charter authorising it to raise a property tax for higher education"],
            correctIndex: 0,
            explanation: "Land or scrip, which the state converts to money, invests, and spends the return on forever.",
            sourceLessonSlug: "thirty-thousand-acres-per-member",
          },
          {
            prompt: "The statutory citation for the 1862 Act's grant section is:",
            options: ["12 Stat. 503", "26 Stat. 417, the Statutes at Large page for the college-aid appropriation", "22 Stat. 484, the page carrying the 1883 amendment to the investment rule", "108 Stat. 4048, the page carrying the land-grant status provisions of 1994"],
            correctIndex: 0,
            explanation: "Act of July 2, 1862, ch. 130, § 1, 12 Stat. 503, as the Code's source credit records.",
            sourceLessonSlug: "thirty-thousand-acres-per-member",
          },
          {
            prompt: "What kind of financial instrument does the 1862 Act create, in the sense a university uses the word today?",
            options: ["An endowment", "A revolving loan fund repaid from tuition receipts over a fixed term", "A block grant renewable at the discretion of the appropriating committee", "A trust whose principal is distributed to students as scholarships"],
            correctIndex: 0,
            explanation: "Capital preserved in perpetuity with only the return spent is the definition of an endowment.",
            sourceLessonSlug: "thirty-thousand-acres-per-member",
          },
          {
            prompt: "Why did a state with a large congressional delegation in 1860 end up with a larger land-grant endowment?",
            options: ["The formula counted members", "Because larger states were assessed a higher matching contribution and received more in return", "Because the Interior Department gave priority in land selection to the more populous states", "Because members from large states negotiated individually for supplemental acreage"],
            correctIndex: 0,
            explanation: "Thirty thousand acres per senator and representative makes delegation size the sole driver of the share.",
            sourceLessonSlug: "thirty-thousand-acres-per-member",
          },
          {
            prompt: "According to Lee and Ahtone's investigation, roughly how many acres did the Morrill Act redistribute?",
            options: ["Nearly 11 million", "About 41 million, the acreage figure the federal record gives for land operated in 1920", "About 160 million, matching the total acreage patented under the Homestead Act", "Roughly 500,000, the acreage still held in trust by land-grant institutions"],
            correctIndex: 0,
            explanation: "Nearly 11 million acres, across almost 80,000 parcels, in the investigation's own words.",
            sourceLessonSlug: "whose-land-it-was",
          },
          {
            prompt: "Across how many parcels does the investigation say that acreage was spread?",
            options: ["Almost 80,000", "About 250, one for each of the tribes, bands and communities named in the cessions", "Exactly 52, one for each beneficiary institution the investigation identified", "More than 160, matching the number of land cessions it traced"],
            correctIndex: 0,
            explanation: "Almost 80,000 parcels, which is what made the work parcel-level rather than aggregate.",
            sourceLessonSlug: "whose-land-it-was",
          },
          {
            prompt: "How many institutions does the investigation identify as beneficiaries of the Morrill Act land?",
            options: ["52", "19, the number of historically Black land-grant institutions in the system today", "12, the number that still hold granted land in trust", "24, matching the number of western states where the parcels lay"],
            correctIndex: 0,
            explanation: "Fifty-two beneficiary institutions, which is a different count from the twelve still holding trust land.",
            sourceLessonSlug: "whose-land-it-was",
          },
          {
            prompt: "The investigation reports how much the grants had raised for university endowments by the early twentieth century?",
            options: ["$17.7 million", "Just over $400,000, the same sum the United States paid to extinguish title to the land", "About $5.4 million, the revenue the retained trust lands produced in one recent year", "Roughly $124 million, the annual capacity funding one class of institution now receives"],
            correctIndex: 0,
            explanation: "$17.7 million raised, set by the investigation against less than $400,000 paid to extinguish title.",
            sourceLessonSlug: "whose-land-it-was",
          },
          {
            prompt: "What sum does the investigation report was paid to extinguish Indigenous title to that land?",
            options: ["Less than $400,000", "About $17.7 million, matching what the land raised for the endowments", "Nothing at all, for every parcel the investigation was able to trace", "An amount the investigation says the surviving records do not permit anyone to estimate"],
            correctIndex: 0,
            explanation: "Less than $400,000 against $17.7 million raised, which is the ratio the investigation puts at the centre.",
            sourceLessonSlug: "whose-land-it-was",
          },
          {
            prompt: "How much granted land does the investigation say remains held in trust for at least twelve universities?",
            options: ["More than 500,000 acres", "Nearly 11 million acres, the full quantity the Morrill Act redistributed", "About 80,000 acres, one acre for each parcel the investigation traced", "None, since every parcel had been sold by the early twentieth century"],
            correctIndex: 0,
            explanation: "More than 500,000 acres, which produced more than $5.4 million in revenue in FY2019.",
            sourceLessonSlug: "whose-land-it-was",
          },
          {
            prompt: "In which region does the investigation say most of the Morrill Act parcels lay?",
            options: ["The West", "The Deep South, where most 1890 institutions were later established", "The Ohio and Mississippi valleys, close to the colleges the land endowed", "New England and the Mid-Atlantic, inside the states that held the largest delegations"],
            correctIndex: 0,
            explanation: "Mostly across 24 western states, which is the geographic consequence of the scrip rule in § 302.",
            sourceLessonSlug: "whose-land-it-was",
          },
          {
            prompt: "What exactly does the figure of nearly 250 tribes, bands and communities count?",
            options: ["Parties named in cessions", "Federally recognised nations holding a government-to-government relationship with the United States today", "Reservations established by treaty during the period the Morrill Act parcels were patented", "Distinct language communities identified in the ethnographic record of the affected regions"],
            correctIndex: 0,
            explanation: "It counts parties named in the cession documents, which is not the same thing as the 574 recognised nations that exist now.",
            sourceLessonSlug: "whose-land-it-was",
          },
          {
            prompt: "How does the investigation characterise the more than 160 land cessions it traced?",
            options: ["Violence-backed", "Negotiated at length and ratified without objection by the Senate in every recorded instance", "Concluded on terms substantially equivalent to those of ordinary commercial land sales", "Reversed by later litigation in a majority of the cases the investigation followed"],
            correctIndex: 0,
            explanation: "Over 160 violence-backed land cessions is the investigation's own phrase, and this course keeps it.",
            sourceLessonSlug: "whose-land-it-was",
          },
          {
            prompt: "Why does this course state the Indigenous dispossession and then decline to build its argument on it?",
            options: ["It is a different injury", "Because the evidence for it is weaker than the evidence for the funding claims that follow", "Because it happened too long ago to bear on how institutions are funded today", "Because the sibling course covering it has already shipped and carries the material"],
            correctIndex: 0,
            explanation: "A different injured party, a different legal footing and a different remedy, so subordinating it to another spine would misrepresent it.",
            sourceLessonSlug: "whose-land-it-was",
          },
          {
            prompt: "On what legal footing does this course say the Indigenous land claim rests?",
            options: ["Treaty rights and sovereignty", "The Equal Protection Clause of the Fourteenth Amendment, as applied to state funding decisions", "Ordinary state property law, including adverse possession and quiet-title actions", "The federal statutes governing surplus property disposal by executive agencies"],
            correctIndex: 0,
            explanation: "Treaty rights, sovereignty and the federal trust responsibility, which is a different body of law from civil rights and equal protection.",
            sourceLessonSlug: "whose-land-it-was",
          },
          {
            prompt: "Which shipped course does this one hand off to for allotment, the Dawes Act and the trust responsibility?",
            options: ["Tribal Nations and Governance", "The Schoolhouse Network, which teaches community-financed school construction in the same period", "The Name on the Door, which teaches architectural credit and licensure", "Cooperatives, which teaches the Rural Electrification Act and the co-op form"],
            correctIndex: 0,
            explanation: "That course owns Indigenous governance and the post-1887 land base, and this one re-teaches none of it.",
            sourceLessonSlug: "whose-land-it-was",
          },
          {
            prompt: "In what year did Congress make tribal colleges land-grant institutions?",
            options: ["1994", "1977, the same year the 1890 institutions first received research and extension capacity grants", "1934, alongside the reorganisation of tribal governments", "1862, under the original Morrill Act's provision for territories"],
            correctIndex: 0,
            explanation: "The 1994 institutions entered the system 132 years after the land that endowed it was granted.",
            sourceLessonSlug: "whose-land-it-was",
          },
          {
            prompt: "Who reported the land-grab universities investigation, and where?",
            options: ["Lee and Ahtone, in High Country News", "The Government Accountability Office, in a report to the Senate Agriculture Committee", "The Congressional Research Service, in the In Focus this course otherwise relies on", "The Association of Public and Land-grant Universities, in its 2013 policy brief"],
            correctIndex: 0,
            explanation: "Robert Lee and Tristan Ahtone, published in High Country News in March 2020 with the database released openly.",
            sourceLessonSlug: "whose-land-it-was",
          },
          {
            prompt: "Which records did the investigation build its parcel database from?",
            options: ["Federal land patent records", "Oral testimony gathered from descendants of the affected communities over three years", "The internal endowment ledgers voluntarily disclosed by the fifty-two beneficiary institutions", "State legislative journals recording each land sale as it was authorised"],
            correctIndex: 0,
            explanation: "Bureau of Land Management patent records, congressional documents and archival sources, which is why it works parcel by parcel.",
            sourceLessonSlug: "whose-land-it-was",
          },
          {
            prompt: "What does this course say it will not do with a specific nation's account of a specific cession?",
            options: ["Write it without that nation's agreement", "Cite it without a page reference to a peer-reviewed publication", "Include it in any assessment question or self-check card", "Translate it out of the nation's own language into English"],
            correctIndex: 0,
            explanation: "Agreement, on that nation's terms, not consultation, which is the standard this catalog already applies.",
            sourceLessonSlug: "whose-land-it-was",
          },
          {
            prompt: "What did the Hatch Act of 1887 create and fund?",
            options: ["Agricultural experiment stations", "The county-level extension agents who carry findings out to working farms", "The land-grant colleges themselves, in states that had not yet founded one", "A federal loan programme for farmers unable to obtain credit locally"],
            correctIndex: 0,
            explanation: "Research capacity attached to the land-grant colleges, paid annually and by formula.",
            sourceLessonSlug: "what-a-capacity-grant-is",
          },
          {
            prompt: "What did the Smith-Lever Act of 1914 create?",
            options: ["The Cooperative Extension Service", "The agricultural experiment stations that conduct the research extension later carries", "The National Institute of Food and Agriculture inside the Department of Agriculture", "A matching-fund requirement applying to every federal grant to a state college"],
            correctIndex: 0,
            explanation: "Extension is the delivery arm: county staff carrying the experiment station's work to farmers.",
            sourceLessonSlug: "what-a-capacity-grant-is",
          },
          {
            prompt: "What is the other name CRS gives for capacity grants?",
            options: ["Formula funds", "Block grants, in the sense used for federal transfers to state governments generally", "Discretionary awards, because the agency chooses which institutions receive them", "Entitlement payments, because eligibility rather than appropriation controls the amount"],
            correctIndex: 0,
            explanation: "CRS calls them capacity grants, also known as formula funds, distributed by statutory formula.",
            sourceLessonSlug: "what-a-capacity-grant-is",
          },
          {
            prompt: "Which agency inside USDA distributes these capacity grants?",
            options: ["NIFA", "The Farm Service Agency, which also administers farm loans and disaster assistance", "The Economic Research Service, which publishes the department's statistical analysis", "The Agricultural Marketing Service, which oversees commodity grading and standards"],
            correctIndex: 0,
            explanation: "The National Institute of Food and Agriculture administers federal funds for land-grant universities.",
            sourceLessonSlug: "what-a-capacity-grant-is",
          },
          {
            prompt: "Under a capacity grant, who decides which projects the money supports?",
            options: ["The institution", "A national panel of peer reviewers drawn from other land-grant universities", "The Secretary of Agriculture, project by project, on the agency's own priorities", "The state legislature that provides the matching appropriation"],
            correctIndex: 0,
            explanation: "The institution develops a Plan of Work subject to the agency's approval and decides which of its own projects to support.",
            sourceLessonSlug: "what-a-capacity-grant-is",
          },
          {
            prompt: "What does an institution have to submit for a capacity grant, subject to the agency's approval?",
            options: ["A plan of work", "A competitive proposal scored against proposals from every other eligible applicant", "An audited statement showing that the state match has already cleared", "A five-year strategic plan approved by the state's higher education board"],
            correctIndex: 0,
            explanation: "Recipient institutions develop Plans of Work subject to approval, then direct their own projects.",
            sourceLessonSlug: "what-a-capacity-grant-is",
          },
          {
            prompt: "How is a competitive grant awarded, in CRS's description?",
            options: ["Through national peer review", "By a statutory formula applied to enrollment and the rural population of the state", "By the institution's own selection, once its plan of work has been approved", "Automatically to every eligible institution that applies before the deadline"],
            correctIndex: 0,
            explanation: "Competitive grants go directly to specific projects selected through a national peer-review process.",
            sourceLessonSlug: "what-a-capacity-grant-is",
          },
          {
            prompt: "Which kind of money is better suited to hiring a scientist onto a permanent position?",
            options: ["Capacity funding", "Competitive project funding, because the peer review certifies the quality of the work", "Either one equally, since federal money carries the same conditions in both cases", "Neither, since federal agricultural money may not be spent on salaries"],
            correctIndex: 0,
            explanation: "Capacity money arrives annually by formula, so it can support standing capability rather than a single project cycle.",
            sourceLessonSlug: "what-a-capacity-grant-is",
          },
          {
            prompt: "What matching condition does CRS say federal capacity grants generally carry?",
            options: ["One-to-one non-federal funds", "A sliding scale rising from ten per cent to fifty per cent over the life of the grant", "A one-time capital contribution equal to the value of the original land grant", "None, since capacity funds are distributed by formula rather than by application"],
            correctIndex: 0,
            explanation: "One-to-one non-federal matching funds, which may come from the state or another non-federal source.",
            sourceLessonSlug: "what-a-capacity-grant-is",
          },
          {
            prompt: "Besides a state appropriation, what sources may a non-federal match come from?",
            options: ["The university or another non-federal entity", "Any federal agency other than the Department of Agriculture", "A federal loan taken out by the state against its future appropriations", "Student tuition revenue only, and only in the year the grant is paid"],
            correctIndex: 0,
            explanation: "CRS says the funds typically come from state appropriations but can also come from the universities themselves or another non-federal entity.",
            sourceLessonSlug: "what-a-capacity-grant-is",
          },
          {
            prompt: "What is the statutory citation CRS gives for the Hatch Act in the U.S. Code?",
            options: ["7 U.S.C. § 361a et seq.", "7 U.S.C. § 341 et seq., which is where the extension statute is codified", "7 U.S.C. § 301 et seq., the subchapter carrying the 1862 land grant", "7 U.S.C. § 321 et seq., the subchapter carrying the 1890 annual appropriation"],
            correctIndex: 0,
            explanation: "Hatch is at 7 U.S.C. § 361a et seq.; § 341 et seq. is Smith-Lever.",
            sourceLessonSlug: "what-a-capacity-grant-is",
          },
          {
            prompt: "What is the statutory citation CRS gives for the Smith-Lever Act?",
            options: ["7 U.S.C. § 341 et seq.", "7 U.S.C. § 361a et seq., which is where the research capacity statute is codified", "7 U.S.C. § 3221, the extension capacity grant for the 1890 institutions", "7 U.S.C. § 304, the investment provision of the original land grant"],
            correctIndex: 0,
            explanation: "Smith-Lever is at 7 U.S.C. § 341 et seq., and the 1890 extension grant at § 3221 is a separate authority entirely.",
            sourceLessonSlug: "what-a-capacity-grant-is",
          },
          {
            prompt: "Which came first, the research capacity grant or the extension capacity grant?",
            options: ["Research, in 1887", "Extension, in 1887, with research following under Smith-Lever in 1914", "They were enacted together in a single statute in 1890", "Extension, in 1862, as part of the original Morrill Act"],
            correctIndex: 0,
            explanation: "Hatch in 1887 paid for the experiment stations; Smith-Lever added extension twenty-seven years later.",
            sourceLessonSlug: "what-a-capacity-grant-is",
          },
          {
            prompt: "Why does having capacity money since 1887 compound into more than a cash advantage?",
            options: ["It builds people, data and track record", "Because the original appropriation was invested and its capital has never been drawn down", "Because institutions receiving it are exempt from the peer-review requirement", "Because the formula pays interest on any unspent balance carried forward"],
            correctIndex: 0,
            explanation: "Ninety extra years of staff, equipment, long data series and a competitive track record is what an institution actually accumulates.",
            sourceLessonSlug: "what-a-capacity-grant-is",
          },
          {
            prompt: "What happens to a federal capacity dollar if the required non-federal match is not provided?",
            options: ["It does not land", "It is paid anyway and recovered from the following year's allotment", "It converts automatically into a competitive award for the same institution", "It is held in escrow by the agency until the state legislature next meets"],
            correctIndex: 0,
            explanation: "Federal money in this system is conditional on somebody else putting up the matching dollar.",
            sourceLessonSlug: "what-a-capacity-grant-is",
          },
          {
            prompt: "An endowment pays for a campus. What did Congress add in 1887 and 1914 that an endowment does not supply?",
            options: ["Research and its delivery", "The land itself, which had been exhausted in the original grants", "Tuition support for students unable to pay the college's fees", "Federal accreditation of the degrees the colleges awarded"],
            correctIndex: 0,
            explanation: "An experiment station to produce findings and an extension service to carry them to farms.",
            sourceLessonSlug: "what-a-capacity-grant-is",
          },
          {
            prompt: "Which two dates should a learner carry out of Section 1 as the capacity-grant dates?",
            options: ["1887 and 1914", "1862 and 1890, the two Morrill Acts", "1977 and 2008, when the 1890 appropriation floors were set and raised", "1994 and 2014, when the roster of land-grant institutions last changed"],
            correctIndex: 0,
            explanation: "Hatch in 1887 for research and Smith-Lever in 1914 for extension, both matched.",
            sourceLessonSlug: "what-a-capacity-grant-is",
          },
          {
            prompt: "In the 1862 design, what was the state obliged to do with the land itself?",
            options: ["Sell it", "Hold it permanently and lease it, so that the acreage itself became the perpetual fund", "Transfer it directly to the college as its campus and demonstration farm", "Return any unsold portion to the federal government after ten years"],
            correctIndex: 0,
            explanation: "The proceeds of sale are what get invested; the perpetual fund is money, not acreage.",
            sourceLessonSlug: "thirty-thousand-acres-per-member",
          },
          {
            prompt: "Which of these is a fair description of what an 1862 land-grant credit line answers?",
            options: ["A statutory status", "A ranking of research output among American universities", "A description of the campus curriculum as it stands today", "A guarantee of the amount of federal money the institution receives"],
            correctIndex: 0,
            explanation: "Land-grant is a category in federal law, which is why private universities can hold it and public ones can lack it.",
            sourceLessonSlug: "thirty-thousand-acres-per-member",
          },
          {
            prompt: "How many states does the U.S. land-grant system reach, according to CRS?",
            options: ["All 50, plus D.C. and most territories", "Only the 34 states that existed when the 1862 Act was signed", "The 24 western states where the Morrill Act parcels were located", "The 18 states that hold a historically Black land-grant institution"],
            correctIndex: 0,
            explanation: "CRS describes land-grant universities as present in all fifty states, the District of Columbia and most U.S. territories.",
            sourceLessonSlug: "what-a-capacity-grant-is",
          },
          {
            prompt: "CRS describes the land-grant system as a partnership between which two levels of government?",
            options: ["Federal and state", "Federal and county, since extension is delivered through county offices", "State and municipal, with the federal role limited to setting standards", "Federal and tribal, following the 1994 designation of tribal colleges"],
            correctIndex: 0,
            explanation: "A federal-state partnership with a threefold mission of teaching, research and extension.",
            sourceLessonSlug: "what-a-capacity-grant-is",
          },
          {
            prompt: "What threefold mission does CRS attribute to the land-grant university system?",
            options: ["Teaching, research and extension", "Teaching, athletics and public service to the surrounding community", "Research, technology transfer and the commercialisation of agricultural patents", "Teaching, accreditation and the certification of agricultural professionals"],
            correctIndex: 0,
            explanation: "Teaching, research and extension, which is why the 1887 and 1914 statutes matter as much as the 1862 one.",
            sourceLessonSlug: "what-a-capacity-grant-is",
          },
          {
            prompt: "What does CRS say land-grant institutions originally focused on?",
            options: ["Agriculture and the mechanical arts", "Teacher preparation and the training of county school superintendents", "Military tactics, to the near exclusion of the civilian curriculum", "Classical studies, before shifting to applied subjects after 1887"],
            correctIndex: 0,
            explanation: "They originally focused on agriculture and the mechanical arts and now engage in a variety of academic disciplines.",
            sourceLessonSlug: "what-a-capacity-grant-is",
          },
          {
            prompt: "Which phrase in the 1862 statute leaves room for a college to teach subjects beyond agriculture?",
            options: ["Without excluding other studies", "In such manner as the legislatures may prescribe", "For no other use or purpose whatsoever", "Subject to the approval of the Secretary of the Interior"],
            correctIndex: 0,
            explanation: "The leading object is agriculture and the mechanic arts, without excluding other scientific and classical studies.",
            sourceLessonSlug: "thirty-thousand-acres-per-member",
          },
          {
            prompt: "Which subject does § 304 expressly require the endowed college to include?",
            options: ["Military tactics", "Veterinary science, given the agricultural focus of the endowment", "Bookkeeping, so that graduates could manage a farm as a business", "Modern languages, for the benefit of immigrant farming communities"],
            correctIndex: 0,
            explanation: "Including military tactics is written into the purpose clause alongside agriculture and the mechanic arts.",
            sourceLessonSlug: "thirty-thousand-acres-per-member",
          },
          {
            prompt: "What does this course say a learner should hold onto from the U.S. Code's Subchapter I heading?",
            options: ["The word land", "The word college, which distinguishes it from the later university system", "The word aid, which marks the money as charitable rather than owed", "The word appropriation, which makes the grant annual rather than one-time"],
            correctIndex: 0,
            explanation: "College-Aid Land Appropriation, because Subchapter II carries a different word in that slot.",
            sourceLessonSlug: "thirty-thousand-acres-per-member",
          },
          {
            prompt: "Which of these is NOT something the 1862 Act gave a state?",
            options: ["Annual cash", "Public land inside its own borders where enough was available at the qualifying price", "Land scrip for the portion it could not take at home", "A statutory purpose it was required to spend the interest on"],
            correctIndex: 0,
            explanation: "The 1862 grant is an asset, not a recurring appropriation, and that distinction is the hinge of Section 2.",
            sourceLessonSlug: "thirty-thousand-acres-per-member",
          },
          {
            prompt: "Why does this course open with statutory text rather than with a narrative?",
            options: ["The words are checkable", "Because narrative accounts of the period have all been shown to be unreliable", "Because federal statutes are the only sources exempt from copyright restrictions", "Because the learner is expected to have read the narrative history already"],
            correctIndex: 0,
            explanation: "Almost everything people believe about land-grant colleges is a paraphrase of a paraphrase, and the statute settles it.",
            sourceLessonSlug: "thirty-thousand-acres-per-member",
          },
          {
            prompt: "In FY2019, how much revenue does the investigation say retained Morrill Act trust lands produced?",
            options: ["More than $5.4 million", "More than $17.7 million, matching what the original grants raised", "Less than $400,000, the sum paid to extinguish title to the land", "About $124 million, the annual capacity funding one class of institution receives"],
            correctIndex: 0,
            explanation: "More than $5.4 million from more than 500,000 acres still held for at least twelve universities.",
            sourceLessonSlug: "whose-land-it-was",
          },
          {
            prompt: "This course says three of the investigation's counts are commonly confused. Which is the odd one out from the other two?",
            options: ["Institutions still holding trust land", "Parcels traced by the investigation", "Acres redistributed by the Morrill Act", "Cessions the parcels came out of"],
            correctIndex: 0,
            explanation: "Institutions is a count of universities; parcels, acres and cessions all count land or land transactions.",
            sourceLessonSlug: "whose-land-it-was",
          },
          {
            prompt: "How did the investigation make its underlying database available?",
            options: ["Openly published", "Released only to the institutions named in it, for comment before publication", "Held under embargo pending peer review by a historical association", "Summarised in the article without any underlying data being released"],
            correctIndex: 0,
            explanation: "The database was published openly, which is what lets a learner check a specific parcel rather than take a figure on trust.",
            sourceLessonSlug: "whose-land-it-was",
          },
          {
            prompt: "What does this course decline to state about Tristan Ahtone?",
            options: ["A tribal affiliation", "The publication that carried the investigation", "The year the investigation was published", "The records the investigation was built from"],
            correctIndex: 0,
            explanation: "The article's byline does not state one, and inferring an affiliation is exactly the error this catalog refuses.",
            sourceLessonSlug: "whose-land-it-was",
          },
          {
            prompt: "How many federally recognised nations does this course say exist today, each a distinct government?",
            options: ["574", "Nearly 250, the figure the Morrill Act investigation reports", "160, matching the number of cessions the investigation traced", "35, the number of tribal colleges holding land-grant status"],
            correctIndex: 0,
            explanation: "The 574 figure is why the investigation's count of parties named in cessions must never be reported as a count of nations.",
            sourceLessonSlug: "whose-land-it-was",
          },
          {
            prompt: "Which course does this one name as the future home of the parcel-level land story?",
            options: ["WARRANT-03", "Tribal Nations and Governance, which already carries allotment and the trust responsibility", "The Schoolhouse Network, which teaches matching funds in a private philanthropy", "The Name on the Door, which teaches Tuskegee's buildings and who signed for them"],
            correctIndex: 0,
            explanation: "The third course on this spine, which requires a review arrangement that this course does not.",
            sourceLessonSlug: "whose-land-it-was",
          },
          {
            prompt: "What is the sequence a state followed under the 1862 Act?",
            options: ["Sell, invest, spend the interest", "Build the college first, then apply to the Interior Department for reimbursement in land", "Levy a state property tax, then draw federal land as a matching contribution", "Receive an annual federal appropriation and add a state appropriation to it"],
            correctIndex: 0,
            explanation: "Sell the land or the scrip, invest the proceeds in a perpetual fund, and spend only the return, forever.",
            sourceLessonSlug: "thirty-thousand-acres-per-member",
          },
        ],
      },
    },
  ],
};
