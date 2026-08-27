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
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2 — The sentence
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-proviso",
      title: "5 · The proviso, and who gets to write the split",
      section: "Section 2 · The sentence",
      body: `The heading the U.S. Code puts over this section is **"Racial discrimination by colleges restricted."** Read the section, then read the heading again.

**7 U.S.C. § 323**, from the Act of August 30, 1890, in the text in effect on 26 August 2026:

> "No money shall be paid out under this subchapter to any State or Territory for the support or maintenance of a college where a distinction of race or color is made in the admission of students, but the establishment and maintenance of such colleges separately for white and colored students shall be held to be a compliance with the provisions of said sections if the funds received in such State or Territory be equitably divided as hereinafter set forth: Provided, That in any State in which there has been one college established in pursuance of subchapter I of this chapter, and also in which an educational institution of like character has been established, or may be hereafter established, and is on August 30, 1890, aided by such State from its own revenue, for the education of colored students in agriculture and the mechanic arts, however named or styled, or whether or not it has received money prior to August 30, 1890, under said subchapter I, the legislature of such State may propose and report to the Secretary of Agriculture a just and equitable division of the fund to be received under this subchapter between one college for white students and one institution for colored students established as aforesaid, which shall be divided into two parts and paid accordingly." (7 U.S.C. § 323, n.d.)

**Three things are happening in that sentence and they are worth separating.**

**One: the prohibition is real.** Federal money may not go to a college that discriminates in admissions. In 1890, that is not nothing.

**Two: the exception swallows it.** Maintaining separate colleges "shall be held to be a compliance", conditioned only on the funds being "equitably divided". A state did not have to admit anyone. It had to divide a sum.

**Three, and this is the one to carry for the rest of the course: the state legislature writes the division.** The statute says "the legislature of such State may propose and report to the Secretary of Agriculture a just and equitable division". The party that had refused to admit Black students to the existing college is handed the pen that decides what the second institution is worth. **That allocation of authority, from 1890, is the ancestor of every argument in Sections 4 and 5.**

**On the phrase "separate but equal".** It is not in this statute. The statute says "equitably divided" and "of like character", and CRS paraphrases the provision as deeming compliant those states "that created separate institutions 'of like character' for White and non-White students" (Congressional Research Service [CRS], 2021, p. 1). The quotation marks in the CRS sentence are doing honest work: the phrase is the statute's own, and you can find it in the proviso above.

**On the chronology, stated exactly.** The Supreme Court adopted the separate-but-equal doctrine in **Plessy v. Ferguson**, 163 U.S. 537, decided in 1896. The Act of August 30, 1890 is six years earlier. So the structure was written into federal higher-education funding before the Court blessed it in constitutional law. That is a claim about a date, and you can check both dates in an afternoon.

**One more detail that repays attention.** The proviso reaches an institution "however named or styled", and one "established, or may be hereafter established". Congress was writing for institutions that did not exist yet, in states that had not yet decided to create them.

:::reveal Under § 323, what makes a state compliant even though it maintains separate colleges? ||| Dividing the funds equitably between them. The statute says the establishment and maintenance of separate colleges shall be held to be a compliance if the funds are equitably divided.

:::reveal Who does the statute say may propose the division of the fund, and to whom? ||| The legislature of the state, which proposes and reports a just and equitable division to the Secretary of Agriculture.

:::reveal Is the phrase "separate but equal" in the 1890 Act? ||| No. The statute's own words are "equitably divided" and "of like character", and the Supreme Court adopted the separate-but-equal doctrine six years later in Plessy v. Ferguson.

## Vocabulary
- **Proviso**: the clause beginning "Provided, That" which carves an exception or a condition out of the rule the sentence just stated, and which in § 323 does most of the work.
- **Of like character**: the statute's phrase for the second institution a state could establish for Black students, and the phrase CRS quotes rather than paraphrases.
- **Equitably divided**: the only condition the statute places on a state that chooses separate institutions, and a standard the state legislature itself proposes.
- **Compliance**: the legal finding that a state has met the Act's admissions condition, which the proviso lets a state reach without admitting anybody.

## Sources
7 U.S.C. § 323. (n.d.). *Racial discrimination by colleges restricted*. Office of the Law Revision Counsel, U.S. House of Representatives. https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title7-section323&num=0&edition=prelim

Congressional Research Service. (2021, June 15). *1890 land-grant universities: Background and selected issues* (In Focus No. IF11847, Version 10). https://www.congress.gov/crs-product/IF11847

Plessy v. Ferguson, 163 U.S. 537 (1896).`,
    },
    {
      slug: "cash-not-land",
      title: "6 · Cash, not land",
      section: "Section 2 · The sentence",
      body: `Here is the single fact that reframes everything people assume about the 1890 institutions, and it is sitting in a chapter heading.

**Subchapter I of chapter 13 of Title 7 is headed "COLLEGE-AID LAND APPROPRIATION."** That is the 1862 Act: land, sold, invested, spent forever.

**Subchapter II is headed "COLLEGE-AID ANNUAL APPROPRIATION."** That is the 1890 Act. Not land. An annual payment.

**7 U.S.C. § 322**, the operative section, in its current text:

> "There is annually appropriated, out of any money in the Treasury not otherwise appropriated, to be paid as provided in section 324 of this title, to each State and Territory for the more complete endowment and maintenance of colleges for the benefit of agriculture and the mechanic arts established in accordance with the provisions of subchapter I of this chapter, $50,000 to be applied only to instruction in food and agricultural sciences, and to the facilities for such instruction." (7 U.S.C. § 322, n.d.)

**So the 1890 Act granted money, not acreage.** The amount was originally $25,000 and the Act of March 4, 1907 substituted $50,000. The phrase "food and agricultural sciences" is not original either: it was substituted in 1981 for a longer nineteenth-century list of subjects.

**What that means for a phrase you will hear constantly.** An 1890 institution genuinely is a land-grant institution: it holds that status in federal law and CRS lists these nineteen universities as part of the land-grant university system (CRS, 2021). But **the 1890 institutions were never given an endowment of land.** So "land-grant HBCU" is exactly true about legal status and quietly misleading about where the money came from, and a learner who assumes the two systems started with comparable endowments has misread the century.

**The comparison, laid out:**

| | 1862 institutions | 1890 institutions |
| --- | --- | --- |
| What the Act granted | Public land, or scrip for it | An annual cash appropriation |
| Code subchapter heading | College-Aid Land Appropriation | College-Aid Annual Appropriation |
| What the state was left holding | A perpetual fund it invests | A yearly payment it divides |
| Who decides the split | Not applicable, one college | The state legislature, under § 323 |

**One statutory note this course reports and does not interpret.** The U.S. Code carries a note under § 322 recording Public Law 103-330, title VII, § 724, of 30 September 1994, which provided that "No funds shall be available in fiscal year 1995 and thereafter for payments under the Act of August 30, 1890 and the tenth and eleventh paragraphs under the heading 'Emergency Appropriations' of the Act of March 4, 1907 (7 U.S.C. 321 et seq.)" (7 U.S.C. § 322, n.d.). That is what the note says. What it did in practice to the institutions, and how it sits beside the capacity grants Section 3 covers, is a question this course has filed rather than answered, because guessing at it would be worse than leaving the gap visible.

:::reveal What did the 1890 Act grant, and what did the 1862 Act grant? ||| The 1890 Act granted an annual cash appropriation; the 1862 Act granted public land or scrip for it.

:::reveal What are the two U.S. Code subchapter headings that carry this distinction? ||| College-Aid Land Appropriation for the 1862 subchapter and College-Aid Annual Appropriation for the 1890 one.

:::reveal In what sense is "land-grant HBCU" accurate, and in what sense is it misleading? ||| Accurate about legal status, since these institutions hold land-grant status in federal law, and misleading about endowment, since they were never granted land.

## Vocabulary
- **Annual appropriation**: money Congress provides year by year out of the Treasury, which is a different kind of promise from a one-time grant of an asset.
- **More complete endowment**: the 1890 Act's own phrase for what its payment was for, which is a claim about topping up the 1862 endowment rather than creating a second one.
- **Statutory note**: an enacted provision printed alongside a Code section rather than inside it, which carries the same legal force and is easy to miss.
- **Codified text**: the U.S. Code's current version of a statute, which may differ in wording from the Statutes at Large original because of later amendments.

## Sources
7 U.S.C. § 322. (n.d.). *Annual appropriation*. Office of the Law Revision Counsel, U.S. House of Representatives. https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title7-section322&num=0&edition=prelim

Congressional Research Service. (2021, June 15). *1890 land-grant universities: Background and selected issues* (In Focus No. IF11847, Version 10). https://www.congress.gov/crs-product/IF11847`,
    },
    {
      slug: "the-roster-still-changes",
      title: "7 · The roster, and the fact that it still changes",
      section: "Section 2 · The sentence",
      body: `People treat the land-grant roster as settled history. It is a list maintained by statute, and it changed within the last twelve years.

**The counts, from CRS as of June 2021** (CRS, 2021, p. 1 and Table 1):

| Type | Institutions | Undergraduates | Graduate students |
| --- | --- | --- | --- |
| 1862 | 57 | 1,534,525 | 446,014 |
| 1890 | 19 | 89,544 | 14,734 |
| 1994 | 35 | 23,481 | 273 |

**Nineteen institutions in eighteen states.** The arithmetic works because **Alabama has two**, Alabama A&M University and Tuskegee University, and CRS notes that "for funding purposes, Alabama's two 1890 Institutions ... are treated as though they are located in separate states" (CRS, 2021, p. 1).

**Tuskegee is private, and it is an 1890 land-grant institution.** That combination confuses people reliably, and the statute explains it: Tuskegee does not qualify under the 1890 Act, so Congress writes it in by name. The extension capacity grant is codified under the heading **"Extension at 1890 land-grant colleges, including Tuskegee University"**, and the matching-funds section defines an eligible institution as "a college eligible to receive funds under the Act of August 30, 1890 ... including Tuskegee University" (7 U.S.C. § 3221, n.d.; 7 U.S.C. § 3222d, n.d.). **When a statute names one institution, that is worth noticing.** It usually means the general rule does not reach it.

**The nineteenth arrived in 2014.** Section 7129 of the Agricultural Act of 2014 (Pub. L. 113-79, 7 February 2014) is titled "Designation of Central State University as 1890 institution", and provides that "any provision of a Federal law relating to colleges and universities eligible to receive funds under the Act of August 30, 1890 ..., including Tuskegee University, shall apply to Central State University" (Agricultural Act of 2014, § 7129).

**And read subsection (b) before you call that a happy ending.** The same section provides that "notwithstanding the designation under subsection (a), for fiscal years 2014 and 2015, Central State University shall not be eligible to receive formula funds" under the 1890 research and extension capacity grants, Smith-Lever 3(d), the Renewable Resources Extension Act, or McIntire-Stennis (Agricultural Act of 2014, § 7129(b)). **Designated, and expressly barred from the capacity money for two years.**

**One thing this course will not tell you: the current number of 1994 institutions.** CRS reported 35 as of June 2021. The statutory definition list printed as a note to 7 U.S.C. § 301 has been amended repeatedly, including by the 2014 and 2018 farm bills, and as it currently stands it names 36 colleges (7 U.S.C. § 301, n.d.). Those two numbers are counting slightly different things at different dates, and a course that picked whichever one it preferred would be doing the thing this catalog exists to stop. **Cite the count with the source and the date attached, every time, or do not cite it.**

:::reveal How can there be nineteen 1890 institutions in eighteen states? ||| Alabama holds two, Alabama A&M and Tuskegee, and for funding purposes they are treated as though they were in separate states.

:::reveal Why do the 1890 funding statutes name Tuskegee University explicitly? ||| Because Tuskegee is private and does not qualify under the general terms of the 1890 Act, so Congress writes it in by name.

:::reveal What did section 7129 of the 2014 farm bill do, and what did its second subsection do? ||| It designated Central State University as an 1890 institution, and then barred it from receiving 1890 formula funds for fiscal years 2014 and 2015.

## Vocabulary
- **Roster**: the list of institutions holding a given land-grant status, maintained by statute rather than by custom, and therefore amendable.
- **Formula funds**: another name for capacity grants, and the specific money Central State was designated into and then barred from for two years.
- **Designation**: the statutory act of extending an existing status to a named institution, used here because the institution could not reach the status under the general rule.
- **McIntire-Stennis**: the cooperative forestry research programme named in the 2014 restriction, listed here because the restriction reached beyond the two obvious capacity grants.

## Sources
7 U.S.C. § 301. (n.d.). *Land grant aid of colleges* [including the Equity in Educational Land-Grant Status Act of 1994 note]. Office of the Law Revision Counsel, U.S. House of Representatives. https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title7-section301&num=0&edition=prelim

7 U.S.C. § 3221. (n.d.). *Extension at 1890 land-grant colleges, including Tuskegee University*. Office of the Law Revision Counsel, U.S. House of Representatives. https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title7-section3221&num=0&edition=prelim

7 U.S.C. § 3222d. (n.d.). *Matching funds requirement for research and extension activities at eligible institutions*. Office of the Law Revision Counsel, U.S. House of Representatives. https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title7-section3222d&num=0&edition=prelim

Agricultural Act of 2014, Pub. L. No. 113-79, § 7129, 128 Stat. 649 (2014). https://www.govinfo.gov/content/pkg/PLAW-113publ79/html/PLAW-113publ79.htm

Congressional Research Service. (2021, June 15). *1890 land-grant universities: Background and selected issues* (In Focus No. IF11847, Version 10). https://www.congress.gov/crs-product/IF11847`,
    },
    {
      slug: "quiz-the-sentence",
      title: "8 · Knowledge check: the sentence",
      section: "Section 2 · The sentence",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What heading does the U.S. Code put over 7 U.S.C. § 323?",
            options: ["Racial discrimination by colleges restricted", "Equitable division of funds between colleges for white and colored students", "Conditions on the annual appropriation to agricultural and mechanical colleges", "Compliance of the several states with the college-aid appropriation"],
            correctIndex: 0,
            explanation: "The heading says restricted, and the proviso underneath it is what permits the separate colleges.",
            sourceLessonSlug: "the-proviso",
          },
          {
            prompt: "Under § 323, no money may be paid to a state for a college that makes a distinction of race or color in what?",
            options: ["The admission of students", "The appointment of faculty and the composition of its governing board", "The award of scholarships funded from the state's own revenue", "The selection of students for its agricultural experiment station"],
            correctIndex: 0,
            explanation: "The prohibition reaches admissions only, which is narrower than it first sounds.",
            sourceLessonSlug: "the-proviso",
          },
          {
            prompt: "What single condition does § 323 attach to a state that maintains separate colleges?",
            options: ["The funds are equitably divided", "The two colleges offer identical courses of instruction in agriculture and the mechanic arts", "The second institution is accredited by the same body as the first within five years", "The Secretary of Agriculture personally inspects both institutions each year"],
            correctIndex: 0,
            explanation: "Separate maintenance is held to be a compliance if the funds received are equitably divided.",
            sourceLessonSlug: "the-proviso",
          },
          {
            prompt: "Who does § 323 say may propose the division of the fund?",
            options: ["The state legislature", "The Secretary of Agriculture, after consulting both institutions' presidents", "The board of trustees of the existing 1862 college in that state", "A joint commission of the two institutions appointed by the governor"],
            correctIndex: 0,
            explanation: "The legislature proposes and reports a just and equitable division to the Secretary of Agriculture.",
            sourceLessonSlug: "the-proviso",
          },
          {
            prompt: "Why does this course call the allocation of that authority the ancestor of the later arguments?",
            options: ["The state writes the split", "Because the Secretary of Agriculture was given no role in the process at all", "Because the statute set the split at a fixed percentage that has never been revised", "Because Congress reserved the right to overturn any division it considered unjust"],
            correctIndex: 0,
            explanation: "The party that had refused to admit Black students to the existing college decides what the second institution is worth.",
            sourceLessonSlug: "the-proviso",
          },
          {
            prompt: "Does the phrase separate but equal appear in the 1890 Act?",
            options: ["No", "Yes, in the proviso, immediately before the words equitably divided", "Yes, but only in the section heading rather than in the operative text", "Yes, in an amendment added by the Act of March 4, 1907"],
            correctIndex: 0,
            explanation: "The statute's own words are equitably divided and of like character; the doctrine got its name six years later.",
            sourceLessonSlug: "the-proviso",
          },
          {
            prompt: "Which phrase in § 323 does CRS quote rather than paraphrase when describing the second institution?",
            options: ["Of like character", "Separately for white and colored students", "However named or styled", "Aided by such State from its own revenue"],
            correctIndex: 0,
            explanation: "CRS puts of like character in quotation marks precisely because the phrase is statutory.",
            sourceLessonSlug: "the-proviso",
          },
          {
            prompt: "In what year was Plessy v. Ferguson decided?",
            options: ["1896", "1890, the same year Congress passed the Second Morrill Act", "1883, the year the investment provision of the 1862 Act was amended", "1907, the year the annual appropriation was raised to $50,000"],
            correctIndex: 0,
            explanation: "163 U.S. 537, decided in 1896, which is six years after the Act of August 30, 1890.",
            sourceLessonSlug: "the-proviso",
          },
          {
            prompt: "What is the Statutes at Large citation for the 1890 Act?",
            options: ["26 Stat. 417", "12 Stat. 503, the page carrying the original land grant", "108 Stat. 4048, the page carrying the 1994 land-grant status provisions", "128 Stat. 649, the first page of the Agricultural Act of 2014"],
            correctIndex: 0,
            explanation: "Act of August 30, 1890, ch. 841, § 1, 26 Stat. 417, as the Code's source credit records.",
            sourceLessonSlug: "the-proviso",
          },
          {
            prompt: "The proviso reaches an institution described as established, or as what?",
            options: ["May be hereafter established", "Chartered by the state before the Civil War and continuously operated since", "Recognised by the Secretary of the Interior as an agricultural college", "Operating a farm of not less than two hundred acres"],
            correctIndex: 0,
            explanation: "Congress was writing for institutions that did not yet exist in states that had not yet decided to create them.",
            sourceLessonSlug: "the-proviso",
          },
          {
            prompt: "The proviso applies to an institution aided by the state from what source, as of 30 August 1890?",
            options: ["Its own revenue", "The proceeds of the state's original 1862 land grant, held in the perpetual fund", "Federal appropriations already received under the first Morrill Act", "Private endowments raised by the institution's founders and alumni"],
            correctIndex: 0,
            explanation: "Aided by such State from its own revenue, for the education of colored students in agriculture and the mechanic arts.",
            sourceLessonSlug: "the-proviso",
          },
          {
            prompt: "What phrase in the proviso covers institutions whatever they happened to call themselves?",
            options: ["However named or styled", "Of like character, or its equivalent under state law", "Whether or not it has received money prior to August 30, 1890", "Established as aforesaid, in the state's own judgment"],
            correctIndex: 0,
            explanation: "However named or styled, which kept the proviso from turning on a title.",
            sourceLessonSlug: "the-proviso",
          },
          {
            prompt: "Into how many parts does § 323 say the fund shall be divided in a state using the proviso?",
            options: ["Two", "Three, adding a share for the state's agricultural experiment station", "As many parts as the state maintains separate institutions", "One, with the second institution paid from the state's own revenue instead"],
            correctIndex: 0,
            explanation: "Two parts, between one college for white students and one institution for colored students, paid accordingly.",
            sourceLessonSlug: "the-proviso",
          },
          {
            prompt: "What is the honest way to state the 1890 Act's relation to Plessy?",
            options: ["The structure came first", "The Act codified the holding in Plessy within six years of the decision", "The Act was struck down in Plessy and re-enacted in amended form", "The Act and the decision were unrelated, since one concerns transport and the other education"],
            correctIndex: 0,
            explanation: "The funding structure was enacted in 1890 and the Court adopted the doctrine in 1896, which is a claim about two checkable dates.",
            sourceLessonSlug: "the-proviso",
          },
          {
            prompt: "How does this course describe what the exception in § 323 does to the prohibition in the same sentence?",
            options: ["It swallows it", "It narrows it to states that had already established a second institution", "It suspends it for a period of ten years from the date of enactment", "It transfers enforcement of it from the Secretary to the federal courts"],
            correctIndex: 0,
            explanation: "A state did not have to admit anyone; it had to divide a sum.",
            sourceLessonSlug: "the-proviso",
          },
          {
            prompt: "What is the heading of U.S. Code Subchapter II of chapter 13 of Title 7?",
            options: ["College-aid annual appropriation", "College-aid land appropriation, the same heading as Subchapter I", "Racial discrimination by colleges restricted", "Agricultural experiment stations and extension work"],
            correctIndex: 0,
            explanation: "Annual, against Subchapter I's land, and the difference between the two headings is the whole lesson.",
            sourceLessonSlug: "cash-not-land",
          },
          {
            prompt: "What did the 1890 Act grant to the states?",
            options: ["An annual cash appropriation", "Thirty thousand acres for each senator and representative, on the 1890 apportionment", "Land scrip locatable on unappropriated federal land in the western territories", "A perpetual fund whose capital was to remain forever undiminished"],
            correctIndex: 0,
            explanation: "Money out of the Treasury, paid annually, which is why the 1890 institutions never received a land endowment.",
            sourceLessonSlug: "cash-not-land",
          },
          {
            prompt: "What is the current annual figure named in 7 U.S.C. § 322?",
            options: ["$50,000", "$25,000, the amount originally set by the 1890 Act and never changed", "$3,000,000, the floor written into the extension capacity grant", "$124 million, the annual capacity funding the 1890 institutions received in FY2020"],
            correctIndex: 0,
            explanation: "The Act of March 4, 1907 substituted $50,000 for the original $25,000.",
            sourceLessonSlug: "cash-not-land",
          },
          {
            prompt: "What was the original annual amount under the 1890 Act?",
            options: ["$25,000", "$50,000, reduced to $25,000 during the retrenchment of the 1890s", "$15,000, rising by $1,000 a year to a ceiling of $25,000", "There was no fixed amount; Congress appropriated what it chose each year"],
            correctIndex: 0,
            explanation: "The 1907 Act substituted $50,000 for $25,000 and inserted the proviso about preparing instructors.",
            sourceLessonSlug: "cash-not-land",
          },
          {
            prompt: "The phrase food and agricultural sciences entered § 322 in which year's amendment?",
            options: ["1981", "1890, as part of the original enactment of the Second Morrill Act", "1907, when the annual amount was doubled", "1994, when payments under the section were discontinued"],
            correctIndex: 0,
            explanation: "The 1981 amendment substituted it for a longer nineteenth-century list of subjects.",
            sourceLessonSlug: "cash-not-land",
          },
          {
            prompt: "In what sense is the phrase land-grant HBCU accurate?",
            options: ["Legal status", "Endowment, since those institutions received acreage under the 1890 Act", "Campus location, since the campuses sit on former federal public domain", "Curriculum, since the institutions teach agriculture and the mechanic arts"],
            correctIndex: 0,
            explanation: "Land-grant is a status in federal law, and the 1890 institutions genuinely hold it.",
            sourceLessonSlug: "cash-not-land",
          },
          {
            prompt: "In what sense is the phrase land-grant HBCU misleading?",
            options: ["Endowment", "Legal status, since the designation is informal rather than statutory", "Eligibility, since those institutions cannot receive federal agricultural funds", "Governance, since the institutions are not answerable to their state legislatures"],
            correctIndex: 0,
            explanation: "The 1890 institutions were never given an endowment of land, so the phrase implies a starting position they never had.",
            sourceLessonSlug: "cash-not-land",
          },
          {
            prompt: "The § 322 appropriation is directed to colleges established under which subchapter?",
            options: ["Subchapter I", "Subchapter II, the subchapter the section itself sits in", "Subchapter VI of chapter 64, which carries the 1890 capacity grants", "Whichever subchapter the state legislature designates in its plan"],
            correctIndex: 0,
            explanation: "The money goes to colleges established under the 1862 subchapter, and § 323 is what splits it in a segregating state.",
            sourceLessonSlug: "cash-not-land",
          },
          {
            prompt: "The 1890 Act's payment is described in § 322 as being for what?",
            options: ["More complete endowment and maintenance", "The construction of dormitories, libraries and laboratory buildings", "The purchase of additional farmland adjoining each college", "Scholarships for students unable to pay the college's tuition"],
            correctIndex: 0,
            explanation: "More complete endowment and maintenance, which frames the money as topping up the 1862 endowment rather than creating a second one.",
            sourceLessonSlug: "cash-not-land",
          },
          {
            prompt: "What does the statutory note under § 322 record about fiscal year 1995 and after?",
            options: ["No funds available for those payments", "That the annual amount was raised from $50,000 to $250,000 per state", "That payments were transferred from the Secretary of Agriculture to the Secretary of Education", "That the payments were made permanent and indefinite in amount"],
            correctIndex: 0,
            explanation: "Public Law 103-330 § 724 provided that no funds shall be available in FY1995 and thereafter for payments under the Act of August 30, 1890.",
            sourceLessonSlug: "cash-not-land",
          },
          {
            prompt: "How does this course treat that 1994 statutory note?",
            options: ["Reports it without interpreting it", "Presents it as proof that federal support for the 1890 institutions ended in 1995", "Omits it, on the grounds that a note carries no legal force", "Treats it as an error in the Code that the Law Revision Counsel has since acknowledged"],
            correctIndex: 0,
            explanation: "What it did in practice is filed as an open question rather than guessed at, because a guess would be worse than a visible gap.",
            sourceLessonSlug: "cash-not-land",
          },
          {
            prompt: "According to CRS, how many 1862 institutions are there?",
            options: ["57", "19, matching the number of historically Black land-grant institutions", "35, matching the number of tribal land-grant institutions", "52, the number of institutions the Morrill Act investigation identified as beneficiaries"],
            correctIndex: 0,
            explanation: "CRS gives 57 original land-grant universities, 19 in the 1890 group and 35 in the 1994 group as of June 2021.",
            sourceLessonSlug: "the-roster-still-changes",
          },
          {
            prompt: "According to CRS, how many 1890 institutions are there?",
            options: ["19", "18, the number named in the 2013 policy brief on state matching funds", "16, the number of governors who received the 2023 federal letters", "57, matching the count of original land-grant universities"],
            correctIndex: 0,
            explanation: "Nineteen, in eighteen states, because Alabama holds two of them.",
            sourceLessonSlug: "the-roster-still-changes",
          },
          {
            prompt: "How many states hold an 1890 institution?",
            options: ["18", "19, one for each institution in the group", "16, matching the number of governors who received the 2023 letters", "50, since every state was required to designate one"],
            correctIndex: 0,
            explanation: "Nineteen institutions in eighteen states, and the arithmetic works because of Alabama.",
            sourceLessonSlug: "the-roster-still-changes",
          },
          {
            prompt: "Which state holds two 1890 institutions?",
            options: ["Alabama", "Louisiana, which holds both Southern University and Grambling State University", "North Carolina, which holds North Carolina A&T and Elizabeth City State", "Ohio, which holds both Central State University and Wilberforce University"],
            correctIndex: 0,
            explanation: "Alabama A&M University and Tuskegee University, which for funding purposes are treated as though in separate states.",
            sourceLessonSlug: "the-roster-still-changes",
          },
          {
            prompt: "How does CRS say Alabama's two 1890 institutions are treated for funding purposes?",
            options: ["As though in separate states", "As a single institution splitting one state allocation between two campuses", "As one 1890 institution and one 1862 institution respectively", "As institutions of a territory rather than of a state"],
            correctIndex: 0,
            explanation: "Treating them as separate states is what keeps the per-state formula workable with two institutions in one state.",
            sourceLessonSlug: "the-roster-still-changes",
          },
          {
            prompt: "What is unusual about Tuskegee University's position in the land-grant system?",
            options: ["It is private", "It is the only 1890 institution located outside the states of the former Confederacy", "It holds both 1862 and 1890 status simultaneously", "It receives capacity funding directly rather than through its state"],
            correctIndex: 0,
            explanation: "A private university holding 1890 land-grant status, which is why the statutes have to name it.",
            sourceLessonSlug: "the-roster-still-changes",
          },
          {
            prompt: "Why do the 1890 funding statutes name Tuskegee University by name?",
            options: ["It does not qualify generally", "Because Congress wished to honour Booker T. Washington's founding of the institution", "Because it is the largest of the 1890 institutions by enrollment", "Because Alabama's legislature declined to include it in the state's own division of funds"],
            correctIndex: 0,
            explanation: "When a statute names one institution, it usually means the general rule does not reach it.",
            sourceLessonSlug: "the-roster-still-changes",
          },
          {
            prompt: "What is the heading of 7 U.S.C. § 3221?",
            options: ["Extension at 1890 land-grant colleges, including Tuskegee University", "Matching funds requirement for research and extension activities at eligible institutions", "Racial discrimination by colleges restricted", "Authorization of appropriations and allotments of grants"],
            correctIndex: 0,
            explanation: "The heading names Tuskegee, which is a visible trace of the drafting problem the institution's private status creates.",
            sourceLessonSlug: "the-roster-still-changes",
          },
          {
            prompt: "Which statute designated Central State University as an 1890 institution?",
            options: ["The Agricultural Act of 2014", "The National Agricultural Research, Extension, and Teaching Policy Act of 1977", "The Equity in Educational Land-Grant Status Act of 1994", "The Agriculture Improvement Act of 2018"],
            correctIndex: 0,
            explanation: "Section 7129 of Pub. L. 113-79, signed 7 February 2014, which is why a 2013 brief lists eighteen institutions and a 2021 CRS lists nineteen.",
            sourceLessonSlug: "the-roster-still-changes",
          },
          {
            prompt: "In which state is Central State University?",
            options: ["Ohio", "Delaware, the other state the 2023 letters found had funded equitably", "West Virginia, whose 1890 institution is West Virginia State University", "Missouri, whose 1890 institution is Lincoln University"],
            correctIndex: 0,
            explanation: "Ohio, and Ohio is one of the two states the 2023 federal letters did not go to.",
            sourceLessonSlug: "the-roster-still-changes",
          },
          {
            prompt: "What did subsection (b) of the 2014 designation do to Central State University?",
            options: ["Barred it from formula funds for two years", "Required it to raise a private endowment matching the federal designation", "Limited its designation to research grants and excluded extension permanently", "Made the designation conditional on approval by the Ohio legislature"],
            correctIndex: 0,
            explanation: "For fiscal years 2014 and 2015 it could not receive the 1890 capacity grants, Smith-Lever 3(d), the Renewable Resources Extension Act or McIntire-Stennis.",
            sourceLessonSlug: "the-roster-still-changes",
          },
          {
            prompt: "Which of these programmes was named in Central State's two-year funding restriction?",
            options: ["McIntire-Stennis", "The Hatch Act experiment station allotment", "The 1890 Facilities Grant Program", "The USDA/1890 National Scholars Program"],
            correctIndex: 0,
            explanation: "The restriction reached beyond the two obvious capacity grants to Smith-Lever 3(d), the Renewable Resources Extension Act and McIntire-Stennis cooperative forestry.",
            sourceLessonSlug: "the-roster-still-changes",
          },
          {
            prompt: "What is the section number of the Central State designation in the 2014 farm bill?",
            options: ["7129", "7116, which carries the annual reporting requirement on capacity funding and matching", "1449, the matching-funds section of the 1977 policy act", "532, the definition of a 1994 institution"],
            correctIndex: 0,
            explanation: "Section 7129 of Pub. L. 113-79, printed in the Code as a note to 7 U.S.C. § 321.",
            sourceLessonSlug: "the-roster-still-changes",
          },
          {
            prompt: "What count does this course decline to state for the 1994 institutions?",
            options: ["The current one", "The number CRS reported in June 2021", "The number named in the original 1994 statute", "The number of states those institutions are located in"],
            correctIndex: 0,
            explanation: "CRS reported 35 as of June 2021 and the current statutory list names 36, so the count is cited with its source and date or not at all.",
            sourceLessonSlug: "the-roster-still-changes",
          },
          {
            prompt: "How many colleges does the statutory definition list of 1994 institutions currently name?",
            options: ["36", "29, the number designated when the Act was passed in 1994", "35, the figure CRS reported as of June 2021", "19, matching the number of 1890 institutions"],
            correctIndex: 0,
            explanation: "The list printed as a note to 7 U.S.C. § 301 has been amended repeatedly and as it stands names 36 colleges.",
            sourceLessonSlug: "the-roster-still-changes",
          },
          {
            prompt: "What is the rule this course states about citing an institution count?",
            options: ["Attach the source and the date", "Prefer the higher figure, since counts of this kind are always understated", "Use only figures published by the Congressional Research Service", "Round to the nearest five so that changes do not falsify the text"],
            correctIndex: 0,
            explanation: "Two sources counting slightly different things at different dates will disagree, and picking a preferred one is the failure to avoid.",
            sourceLessonSlug: "the-roster-still-changes",
          },
          {
            prompt: "According to CRS Table 1, how many undergraduates were enrolled at the 1890 institutions?",
            options: ["89,544", "1,534,525, the figure for the 1862 institutions", "23,481, the figure for the 1994 institutions", "446,014, the graduate figure for the 1862 institutions"],
            correctIndex: 0,
            explanation: "The table is drawn from NCES IPEDS twelve-month enrollment data for 2019 to 2020.",
            sourceLessonSlug: "the-roster-still-changes",
          },
          {
            prompt: "According to CRS Table 1, how many graduate students were enrolled at the 1994 institutions?",
            options: ["273", "14,734, the graduate figure for the 1890 institutions", "23,481, the undergraduate figure for the 1994 institutions", "446,014, the graduate figure for the 1862 institutions"],
            correctIndex: 0,
            explanation: "273 graduate students across all 35 institutions, against 446,014 at the 1862 institutions.",
            sourceLessonSlug: "the-roster-still-changes",
          },
          {
            prompt: "Which data source does CRS cite for the enrollment figures in its table?",
            options: ["NCES IPEDS", "The Census of Agriculture published by the National Agricultural Statistics Service", "The National Institute of Food and Agriculture's annual plan of work filings", "Enrollment returns submitted by the institutions directly to the Secretary of Agriculture"],
            correctIndex: 0,
            explanation: "Twelve-month 2019 to 2020 enrollment data from the National Center for Education Statistics Integrated Postsecondary Education Data System.",
            sourceLessonSlug: "the-roster-still-changes",
          },
          {
            prompt: "The land-grant roster is best described as which of these?",
            options: ["A list maintained by statute", "A historical record fixed by the two Morrill Acts and unchanged since 1890", "An administrative designation the Secretary of Agriculture may grant or withdraw", "A membership list maintained by the association of public and land-grant universities"],
            correctIndex: 0,
            explanation: "It is amendable, and it was amended within the last twelve years.",
            sourceLessonSlug: "the-roster-still-changes",
          },
          {
            prompt: "Why does a 2013 policy brief count eighteen 1890 institutions while a 2021 CRS document counts nineteen?",
            options: ["Central State was added in 2014", "Because the 2013 brief excluded Tuskegee as a private institution", "Because two institutions merged between the two publication dates", "Because the 2021 document counts campuses rather than universities"],
            correctIndex: 0,
            explanation: "The roster changed between the two documents, which is exactly why a count needs its date attached.",
            sourceLessonSlug: "the-roster-still-changes",
          },
          {
            prompt: "How does § 322's own text describe the source of the money it appropriates?",
            options: ["Any money in the Treasury not otherwise appropriated", "The proceeds of sales of the public domain in the western territories", "Receipts from customs duties on imported agricultural products", "The interest accruing on each state's 1862 perpetual fund"],
            correctIndex: 0,
            explanation: "That standing phrase is what makes it an appropriation rather than a grant of an asset.",
            sourceLessonSlug: "cash-not-land",
          },
          {
            prompt: "What does § 322 say the money may be applied to only?",
            options: ["Instruction and its facilities", "The purchase and improvement of land for the college's demonstration farm", "The salaries of the college's president and its board of trustees", "Any purpose the state legislature designates in its biennial budget"],
            correctIndex: 0,
            explanation: "Applied only to instruction in food and agricultural sciences, and to the facilities for such instruction.",
            sourceLessonSlug: "cash-not-land",
          },
          {
            prompt: "What proviso did the Act of March 4, 1907 insert into § 322?",
            options: ["Preparing instructors", "A requirement that states match the appropriation dollar for dollar", "An exemption for states maintaining separate colleges", "A ceiling on how much could be spent on facilities in any one year"],
            correctIndex: 0,
            explanation: "The colleges may use a portion of the money for courses specially preparing instructors to teach the subject.",
            sourceLessonSlug: "cash-not-land",
          },
          {
            prompt: "Which of these is the correct reading of the two Morrill Acts side by side?",
            options: ["One granted land, the other money", "Both granted land, in different quantities and at different dates", "Both granted money, with the 1890 amount indexed to the 1862 acreage", "One granted money and the other granted a matching requirement"],
            correctIndex: 0,
            explanation: "That difference is preserved in the U.S. Code's own subchapter headings and is the reason the endowments were never comparable.",
            sourceLessonSlug: "cash-not-land",
          },
          {
            prompt: "The word restricted in the heading of § 323 sits over a provision that in practice does what?",
            options: ["Permits separate institutions", "Bars any state maintaining segregated colleges from receiving the appropriation", "Requires desegregation of the existing college within ten years", "Leaves the admissions question entirely to the Secretary of Agriculture"],
            correctIndex: 0,
            explanation: "The prohibition on discriminatory admissions is real, and the proviso underneath it makes separate maintenance a compliance.",
            sourceLessonSlug: "the-proviso",
          },
          {
            prompt: "What must a state have already had, for the § 323 proviso to be available to it?",
            options: ["A college established under Subchapter I", "Two colleges of like character, one for each group of students", "A state constitutional provision requiring separate schools", "An agricultural experiment station funded under the Hatch Act"],
            correctIndex: 0,
            explanation: "The proviso opens with any State in which there has been one college established in pursuance of subchapter I of this chapter.",
            sourceLessonSlug: "the-proviso",
          },
          {
            prompt: "Does the § 323 proviso require the second institution to have received Morrill money before 1890?",
            options: ["No", "Yes, and continuously for at least five years before the Act", "Yes, unless the state legislature certifies otherwise to the Secretary", "The statute is silent, so the Secretary decided it case by case"],
            correctIndex: 0,
            explanation: "The proviso expressly reaches an institution whether or not it has received money prior to August 30, 1890.",
            sourceLessonSlug: "the-proviso",
          },
          {
            prompt: "What officer does § 323 name as the recipient of the state's proposed division?",
            options: ["The Secretary of Agriculture", "The Secretary of the Interior, who administered the original land grants", "The Commissioner of Education in the Department of the Interior", "The Comptroller of the Treasury, who certified the payments"],
            correctIndex: 0,
            explanation: "The current text names the Secretary of Agriculture, following the transfer-of-functions notes the Code records.",
            sourceLessonSlug: "the-proviso",
          },
          {
            prompt: "How does the CRS summary describe what the Morrill Act of 1890 did about admissions?",
            options: ["Prohibited racial discrimination", "Required each state to admit Black students to its existing land-grant college", "Left admissions entirely to the discretion of each institution's trustees", "Conditioned the appropriation on the desegregation of the state's public schools"],
            correctIndex: 0,
            explanation: "CRS says it provided funding and prohibited racial discrimination in student admissions for recipient institutions, then notes the compliance provision.",
            sourceLessonSlug: "the-proviso",
          },
          {
            prompt: "What does the U.S. Code's codification note say about § 322 and § 323?",
            options: ["Both come from section 1 of the 1890 Act", "They come from two different statutes enacted six years apart", "Section 323 was added by amendment in 1907", "Section 322 was repealed and re-enacted in 1981"],
            correctIndex: 0,
            explanation: "Section 322 is based on part of section 1 of the Act of August 30, 1890, and the remainder of that section is classified to § 323.",
            sourceLessonSlug: "cash-not-land",
          },
          {
            prompt: "A state using the § 323 proviso divides which fund between its two institutions?",
            options: ["The annual appropriation", "The perpetual fund created from the 1862 land sales", "The Hatch Act allotment to its agricultural experiment station", "Its own general-revenue appropriation for higher education"],
            correctIndex: 0,
            explanation: "The fund to be received under this subchapter is the § 322 annual appropriation, not the 1862 endowment.",
            sourceLessonSlug: "the-proviso",
          },
          {
            prompt: "What does this course say a learner has misread if they assume the two systems started with comparable endowments?",
            options: ["The century", "The distinction between capacity grants and competitive grants", "The difference between a state and a territory under the Acts", "The role of the Secretary of Agriculture in approving the division"],
            correctIndex: 0,
            explanation: "The 1890 institutions were never given an endowment of land, so their starting position was never comparable.",
            sourceLessonSlug: "cash-not-land",
          },
          {
            prompt: "How many 1890 institutions did the Alabama arithmetic require CRS to explain?",
            options: ["Two in one state", "One in two states, split across a shared campus", "Three, counting Tuskegee's separate extension programme", "None, since Alabama's institutions are counted as territories"],
            correctIndex: 0,
            explanation: "Nineteen institutions in eighteen states only reconciles because Alabama A&M and Tuskegee are both in Alabama.",
            sourceLessonSlug: "the-roster-still-changes",
          },
          {
            prompt: "Which document type does this course say is the right way to settle whether a roster has changed?",
            options: ["The amending statute", "A press release from the institution that was added", "An encyclopedia entry citing the institution's founding date", "The association of public and land-grant universities' membership list"],
            correctIndex: 0,
            explanation: "Section 7129 of the 2014 farm bill is what settles Central State, and it is three sentences long.",
            sourceLessonSlug: "the-roster-still-changes",
          },
          {
            prompt: "What does the phrase designated and then barred describe in this course?",
            options: ["Central State in 2014 and 2015", "Tuskegee's position under the 1890 Act before Congress named it", "The 1994 institutions' access to research capacity funding", "Alabama A&M's treatment under the per-state funding formula"],
            correctIndex: 0,
            explanation: "The same section that designated Central State expressly withheld the formula funds for two fiscal years.",
            sourceLessonSlug: "the-roster-still-changes",
          },
          {
            prompt: "Which two words separate the U.S. Code headings over the 1862 and the 1890 subchapters?",
            options: ["Land and annual", "College and university", "Aid and grant", "Appropriation and endowment"],
            correctIndex: 0,
            explanation: "College-Aid Land Appropriation against College-Aid Annual Appropriation, and everything else in the two headings is identical.",
            sourceLessonSlug: "cash-not-land",
          },
          {
            prompt: "What kind of promise is an annual appropriation, compared with a grant of an asset?",
            options: ["A yearly one", "A permanent one, since appropriations may not be reduced once enacted", "An identical one, since both are enforceable against the Treasury indefinitely", "A conditional one, since an asset grant carries no purpose restriction"],
            correctIndex: 0,
            explanation: "An asset once granted stays granted; an annual payment depends on Congress providing it each year, which is what the 1994 note shows.",
            sourceLessonSlug: "cash-not-land",
          },
          {
            prompt: "What did the 1907 Act do to the amount in § 322?",
            options: ["Doubled it", "Halved it, as a wartime economy measure", "Indexed it to the number of students enrolled at each college", "Left it unchanged while adding the instruction-only restriction"],
            correctIndex: 0,
            explanation: "It substituted $50,000 for $25,000, and that $50,000 is still the figure printed in the section today.",
            sourceLessonSlug: "cash-not-land",
          },
          {
            prompt: "Under § 323, what does a state have to divide rather than do?",
            options: ["A sum", "Its agricultural experiment station between two campuses", "Its congressional delegation's acreage entitlement", "Its extension staff between the two institutions"],
            correctIndex: 0,
            explanation: "A state did not have to admit anyone; it had to divide a sum equitably and report the division.",
            sourceLessonSlug: "the-proviso",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3 — Ninety years
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "not-eligible-for-these-grants",
      title: "9 · Not eligible for these grants",
      section: "Section 3 · Ninety years",
      body: `This is the sentence. If you remember one thing from this course, remember where to find it, because it is three pages into a free congressional document and it requires no inference at all.

> "Shortly after the 1862 Institutions were established as LGUs, Congress enacted legislation to provide them with annual capacity grants for research (Hatch Act of 1887, 7 U.S.C. §361a et seq.) and capacity grants for extension in 1914 (Smith-Lever Act, 7 U.S.C. §341 et seq.). **The 1890 Institutions were not eligible for these grants.** Congress first authorized annual capacity grants specifically for research and extension at the 1890 Institutions in the National Agricultural Research, Education, and Teaching Policy Act of 1977 (NARETPA)." (Congressional Research Service [CRS], 2021, p. 2)

**Now do the subtraction, because the subtraction is the argument.**

| Capacity grant | 1862 institutions | 1890 institutions | Gap |
| --- | --- | --- | --- |
| Research | Hatch Act, 1887 | NARETPA, 1977 | 90 years |
| Extension | Smith-Lever Act, 1914 | NARETPA, 1977 | 63 years |

**Ninety years of research money. Sixty-three years of extension money.** Not underfunded. Not eligible.

**Recall from Section 1 what capacity money actually buys**, because "ninety years of funding" understates it. Capacity money is annual and formula-driven, so it hires people onto careers, keeps equipment running, and accumulates the long data series and the track record that go on to win competitive grants. An institution that has had it since 1887 is not simply richer than one that got it in 1977. It has ninety additional years of compounding capability, and the compounding is the point.

**A warning about a source you will meet, and a habit it should teach you.** The Association of Public and Land-grant Universities published a policy brief on exactly this subject in 2013. Its account of the gap says the Evans-Allen Act was "established in 1977 (90 years after the Hatch Act of 1887)", which is correct, and then in the same paragraph calls the 1977 statute "The National Agriculture Research, Extension and Teaching Act of **1997**" and says it was "established **83 years** after the Smith-Lever Act of 1914" (Lee & Keys, 2013, p. 5).

**Both of those are wrong, and they are wrong together.** 1977 minus 1914 is 63, not 83. The "1997" beside it is a typo for 1977, and the likeliest reading is that the year error and the arithmetic error are the same mistake happening twice. This is the land-grant universities' own association, writing about its own members, and it still needs checking.

**So the habit: take the statutory dates from the statute or from CRS, and do the arithmetic yourself.** Every date in the table above is in a document you can open, and a subtraction is not a citation you have to trust.

**One cross-link worth following.** The Name on the Door teaches Robert R. Taylor at Tuskegee, and the buildings students made the bricks for. This course is the answer to a question that course does not ask: **why an institution like Tuskegee existed to be built at all**, and why its research arm spent its first eighty-seven years ineligible for the money that made a land-grant university a research university.

:::reveal What is the CRS sentence that carries this course? ||| The 1890 Institutions were not eligible for these grants, meaning the Hatch Act research capacity grants and the Smith-Lever extension capacity grants.

:::reveal How long was the research gap, and how long the extension gap? ||| Ninety years for research, from 1887 to 1977, and sixty-three years for extension, from 1914 to 1977.

:::reveal What two errors sit in one sentence of the 2013 APLU brief? ||| It prints 1997 for the 1977 statute and says extension arrived 83 years after 1914 when the correct figure is 63.

## Vocabulary
- **Ineligible**: not entitled to apply, which is a different and stronger condition than applying and receiving too little.
- **Compounding capability**: the staff, equipment, data series and track record an institution accumulates from annual funding, which is why a ninety-year gap is not a ninety-year cash difference.
- **NARETPA**: the National Agricultural Research, Extension, and Teaching Policy Act of 1977, the first statute to authorize annual research and extension capacity grants for the 1890 institutions.
- **Doing the subtraction**: the habit this lesson teaches, of taking statutory dates from a primary source and computing the interval rather than repeating a published interval.

## Sources
Congressional Research Service. (2021, June 15). *1890 land-grant universities: Background and selected issues* (In Focus No. IF11847, Version 10). https://www.congress.gov/crs-product/IF11847

Lee, J. M., Jr., & Keys, S. W. (2013, September). *Land-grant but unequal: State one-to-one match funding for 1890 land-grant universities* (Policy Brief No. 3000-PB1). Association of Public and Land-grant Universities. https://www.aplu.org/wp-content/uploads/land-grant-but-unequal-state-one-to-one-match-funding-for-1890-land-grant-universities.pdf`,
    },
    {
      slug: "a-remedy-written-as-a-fraction",
      title: "10 · A remedy written as a fraction",
      section: "Section 3 · Ninety years",
      body: `When the remedy finally arrived in 1977, look at how Congress sized it. Not in dollars. **As a percentage of what the other class of institution was getting.**

**CRS states it plainly:** "NARETPA originally required these appropriations to equal not less than 15% (research) and 4% (extension) of the capacity grant appropriations for 1862 Institutions. The 2008 farm bill (P.L. 110-246) increased these requirements to 30% (research) and 20% (extension)" (CRS, 2021, p. 2).

**Read the extension floor again: four per cent.** For thirty-one years, from 1977 until the 2008 farm bill, the statutory minimum for extension at the nineteen 1890 institutions was four per cent of what the 1862 institutions received.

**And you can read the current floor in the statute itself**, at 7 U.S.C. § 3221(a)(2):

> "Beginning with fiscal year 2003, there shall be appropriated under this section for each fiscal year an amount that is not less than 20 percent of the total appropriations for such year under the Act of May 8, 1914 ... and related acts pertaining to cooperative extension work at the land-grant institutions identified in the Act of May 8, 1914" (7 U.S.C. § 3221, n.d.).

**A floor expressed as a fraction of somebody else's appropriation is a permanent statement about relative size.** It does not say what the work costs. It says what share of another institution's funding this institution may not fall below. That is a different kind of promise, and it is the third time this course has met the same design move.

**The three 1890 capacity grants, as CRS lists them**, with the enacted FY2021 appropriations it reports:

| Programme | Authority | Match required | FY2021 |
| --- | --- | --- | --- |
| Extension capacity grants | NARETPA § 1444, 7 U.S.C. § 3221 | One-to-one, waivable up to 50% | $62 million |
| Research capacity grants (Evans-Allen) | NARETPA § 1445, 7 U.S.C. § 3222 | One-to-one, waivable up to 50% | $73 million |
| 1890 Facilities Grant Program | NARETPA § 1447, 7 U.S.C. § 3222b | **None** | $21.5 million |

**Notice the third row.** The facilities grant requires no match, which tells you the match is a policy choice Congress makes programme by programme rather than a fixed feature of federal money.

**How the extension money is actually split among the nineteen** is also in the statute, and it is worth seeing because it explains why per-institution amounts differ so much. After 4 per cent goes to the agency for administration, 20 per cent is allotted in equal shares, 40 per cent by the rural population of each institution's state, and the balance by farm population, both from the last decennial census. And once again, "the allotments to Tuskegee University and Alabama Agricultural and Mechanical University shall be determined as if each institution were in a separate State" (7 U.S.C. § 3221, n.d.).

**One measured figure from the sector's own brief.** Writing in 2013, APLU reported that the 1890 institutions "currently receive about 21 percent of Hatch Act funding through the Evans-Allen Act" (Lee & Keys, 2013, p. 5), against a statutory research floor that had been 30 per cent since 2008. Take that as APLU's figure rather than as a settled one, and note that a floor and an outturn are two different measurements.

:::reveal How did NARETPA originally size the 1890 appropriations? ||| As percentages of the 1862 capacity grant appropriations: not less than 15 per cent for research and 4 per cent for extension.

:::reveal What did the 2008 farm bill do to those floors? ||| Raised them to 30 per cent for research and 20 per cent for extension.

:::reveal Which of the three 1890 capacity grants requires no non-federal match? ||| The 1890 Facilities Grant Program, which shows that the match is a choice Congress makes programme by programme.

## Vocabulary
- **Statutory floor**: a minimum appropriation Congress writes into law, which here is expressed as a share of another class of institution's funding rather than as a dollar amount.
- **Evans-Allen**: the research capacity grant for the 1890 institutions, authorized by NARETPA § 1445 and codified at 7 U.S.C. § 3222.
- **Allotment formula**: the statutory rule dividing a capacity appropriation among eligible institutions, which here uses equal shares, rural population and farm population.
- **Outturn**: what a programme actually received in a given year, which is a different measurement from the floor below which it may not fall.

## Sources
7 U.S.C. § 3221. (n.d.). *Extension at 1890 land-grant colleges, including Tuskegee University*. Office of the Law Revision Counsel, U.S. House of Representatives. https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title7-section3221&num=0&edition=prelim

Congressional Research Service. (2021, June 15). *1890 land-grant universities: Background and selected issues* (In Focus No. IF11847, Version 10). https://www.congress.gov/crs-product/IF11847

Lee, J. M., Jr., & Keys, S. W. (2013, September). *Land-grant but unequal: State one-to-one match funding for 1890 land-grant universities* (Policy Brief No. 3000-PB1). Association of Public and Land-grant Universities. https://www.aplu.org/wp-content/uploads/land-grant-but-unequal-state-one-to-one-match-funding-for-1890-land-grant-universities.pdf`,
    },
    {
      slug: "three-tiers-in-one-row",
      title: "11 · Three tiers in one row",
      section: "Section 3 · Ninety years",
      body: `In 1994, Congress made tribal colleges land-grant institutions. **The Equity in Educational Land-Grant Status Act of 1994** is part C of title V of Public Law 103-382, enacted 20 October 1994 and printed at 108 Stat. 4048. Section 533 provides that "1994 Institutions shall be considered land-grant colleges established for the benefit of agriculture and the mechanic arts", and section 532 defines the category by listing the colleges by name (7 U.S.C. § 301, n.d., statutory note).

**A definition by list is worth pausing on.** It means the category is not a test anyone can satisfy. It is a roster, amended by Congress, exactly as Section 2 found for the 1890 group. The list has been amended by several farm bills since, most recently in the statute as printed by the 2014 and 2018 Acts.

**Now put the three tiers in one row, using the table CRS built for Congress** (CRS, 2021, Table 1). This is FY2020 enacted appropriations for the research and extension capacity programmes:

| | 1862 | 1890 | 1994 |
| --- | --- | --- | --- |
| Institutions | 57 | 19 | 35 |
| Federal capacity funding, research and extension | $574 million | $124 million | (blank) |
| Share of that funding | 82% | 18% | 0% |

**The blank is not a rounding artifact and it is not zero dollars misprinted.** CRS's own source note explains it: the funding totals include capacity programmes for the 1862 institutions (Hatch, Smith-Lever 3(b) and 3(c)) and for the 1890 institutions (Evans-Allen, NARETPA § 1444), and for the 1994 institutions, "no comparable programs" (CRS, 2021, Table 1 note).

**Three tiers, one row, in a document written for members of Congress.** A course does not need to editorialise that.

**Two sentences this course will put next to each other and then stop.** The 1862 institutions were endowed with land taken from Indigenous nations, as Lesson 2 stated and cited. The institutions run by those nations were admitted to the same land-grant system 132 years later, and the cell for their share of research and extension capacity funding is blank because no comparable programme exists.

**What this course does not do with that.** It does not narrate the 1994 institutions' own story, their endowment arrangements, or what tribal colleges do, because that is not this course's material and asserting it from a summary would be exactly the failure this catalog is built to avoid. **Tribal Nations and Governance** owns Indigenous governance. The land itself belongs to WARRANT-03. This lesson's job is to show you the row and tell you where the three numbers come from.

**And the honest caution on the counts, again.** The 35 is CRS's figure as of June 2021. Section 2 showed that the statutory list currently names 36 colleges. Cite the number with the source and the date, or do not cite the number.

:::reveal What is the short title of the 1994 statute, and what public law is it part of? ||| The Equity in Educational Land-Grant Status Act of 1994, part C of title V of Public Law 103-382, enacted 20 October 1994.

:::reveal Why is the 1994 column of the CRS capacity-funding table blank? ||| Because there are no comparable capacity programmes for those institutions, which is what the table's own source note says.

:::reveal What are the three shares of federal research and extension capacity funding CRS reports for 2020? ||| 82 per cent to the 1862 institutions, 18 per cent to the 1890 institutions, and 0 per cent to the 1994 institutions.

## Vocabulary
- **1994 institutions**: the tribal colleges given land-grant status by the Equity in Educational Land-Grant Status Act of 1994, defined in the statute by a list of names.
- **Definition by list**: a statutory category that names its members rather than stating a test, so membership changes only when Congress amends the list.
- **No comparable programs**: the CRS table's own explanation for the blank cell, meaning the absence of an equivalent capacity grant rather than an appropriation of zero.
- **Enacted appropriations**: the amounts Congress actually provided in a given year's appropriations act, which is what CRS's table reports for FY2020.

## Sources
7 U.S.C. § 301. (n.d.). *Land grant aid of colleges* [including the Equity in Educational Land-Grant Status Act of 1994, Pub. L. No. 103-382, tit. V, pt. C, 108 Stat. 4048, as a statutory note]. Office of the Law Revision Counsel, U.S. House of Representatives. https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title7-section301&num=0&edition=prelim

Congressional Research Service. (2021, June 15). *1890 land-grant universities: Background and selected issues* (In Focus No. IF11847, Version 10). https://www.congress.gov/crs-product/IF11847`,
    },
    {
      slug: "quiz-ninety-years",
      title: "12 · Knowledge check: ninety years",
      section: "Section 3 · Ninety years",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What does CRS say about the 1890 institutions and the Hatch and Smith-Lever capacity grants?",
            options: ["They were not eligible", "They received a reduced allotment set at fifteen per cent of the 1862 share", "They received the grants only in states that had divided the funds equitably", "They were eligible but rarely applied, since few had experiment stations"],
            correctIndex: 0,
            explanation: "Not eligible is a stronger and different condition from applying and receiving too little.",
            sourceLessonSlug: "not-eligible-for-these-grants",
          },
          {
            prompt: "In what year did Congress first authorize annual research and extension capacity grants for the 1890 institutions?",
            options: ["1977", "1890, in the Second Morrill Act that created the institutions", "1914, alongside the creation of the Cooperative Extension Service", "2008, when the appropriation floors were raised in the farm bill"],
            correctIndex: 0,
            explanation: "The National Agricultural Research, Extension, and Teaching Policy Act of 1977, as CRS states.",
            sourceLessonSlug: "not-eligible-for-these-grants",
          },
          {
            prompt: "How long was the research capacity gap between the 1862 and the 1890 institutions?",
            options: ["90 years", "63 years, which is the interval that applies to extension rather than research", "83 years, the figure the 2013 policy brief prints", "31 years, the interval between the 1977 floors and their 2008 increase"],
            correctIndex: 0,
            explanation: "Hatch in 1887 to NARETPA in 1977 is ninety years.",
            sourceLessonSlug: "not-eligible-for-these-grants",
          },
          {
            prompt: "How long was the extension capacity gap?",
            options: ["63 years", "90 years, which is the interval that applies to research rather than extension", "83 years, the figure the 2013 policy brief prints", "20 years, matching the statutory extension floor set in 2008"],
            correctIndex: 0,
            explanation: "Smith-Lever in 1914 to NARETPA in 1977 is sixty-three years, and 83 is an error a published brief repeats.",
            sourceLessonSlug: "not-eligible-for-these-grants",
          },
          {
            prompt: "What two errors sit in the same sentence of the 2013 APLU brief?",
            options: ["1997 for 1977, and 83 for 63", "1887 for 1877, and 90 for 63", "1914 for 1917, and 20 for 30", "1977 for 1997, and 61 for 51"],
            correctIndex: 0,
            explanation: "The year typo and the arithmetic error are most likely the same mistake happening twice.",
            sourceLessonSlug: "not-eligible-for-these-grants",
          },
          {
            prompt: "Which part of the 2013 APLU brief's account of the gap is arithmetically correct?",
            options: ["Ninety years after Hatch", "Eighty-three years after Smith-Lever", "The 1997 date it gives for NARETPA", "Its statement that extension arrived before research"],
            correctIndex: 0,
            explanation: "1977 minus 1887 really is 90; it is the Smith-Lever half of the same paragraph that fails.",
            sourceLessonSlug: "not-eligible-for-these-grants",
          },
          {
            prompt: "What habit does this course draw out of the APLU error?",
            options: ["Do the subtraction yourself", "Prefer association publications to congressional ones on funding questions", "Cite only the most recent version of any published brief", "Treat any figure repeated by two sources as corroborated"],
            correctIndex: 0,
            explanation: "Every date is in a document you can open, and a subtraction is not a citation you have to trust.",
            sourceLessonSlug: "not-eligible-for-these-grants",
          },
          {
            prompt: "Why does this course say ninety years of funding understates the gap?",
            options: ["Capacity money compounds", "Because inflation over the period was higher than the appropriations growth", "Because the 1890 institutions also lost their annual appropriation in 1995", "Because the Hatch Act appropriation was larger per institution than Evans-Allen"],
            correctIndex: 0,
            explanation: "Annual formula money buys careers, equipment, long data series and the track record that wins competitive grants.",
            sourceLessonSlug: "not-eligible-for-these-grants",
          },
          {
            prompt: "Which shipped course does this one cross-link to at Tuskegee's buildings?",
            options: ["The Name on the Door", "The Schoolhouse Network, which teaches community-financed school construction", "Cooperatives, which teaches the Rural Electrification Act", "Tribal Nations and Governance, which teaches allotment and the trust responsibility"],
            correctIndex: 0,
            explanation: "That course teaches Robert R. Taylor and the buildings students made the bricks for; this one explains why the institution existed to be built.",
            sourceLessonSlug: "not-eligible-for-these-grants",
          },
          {
            prompt: "What does NARETPA stand for?",
            options: ["National Agricultural Research, Extension, and Teaching Policy Act", "National Agricultural Resources, Education and Technical Preparation Act", "National Agriculture Research, Endowment and Training Programs Act", "National Association for Rural Extension, Teaching and Public Agriculture"],
            correctIndex: 0,
            explanation: "The 1977 statute, Pub. L. 95-113, Title XIV, which first authorized 1890 capacity grants.",
            sourceLessonSlug: "not-eligible-for-these-grants",
          },
          {
            prompt: "How did NARETPA originally size the 1890 research appropriation?",
            options: ["Not less than 15% of the 1862 figure", "As a fixed dollar amount adjusted annually for inflation", "At whatever level the Secretary of Agriculture determined each year", "In proportion to the enrollment of each 1890 institution"],
            correctIndex: 0,
            explanation: "Fifteen per cent for research, and four per cent for extension, of the 1862 capacity grant appropriations.",
            sourceLessonSlug: "a-remedy-written-as-a-fraction",
          },
          {
            prompt: "What was NARETPA's original extension floor?",
            options: ["4%", "15%, the same figure it set for research", "20%, the level set in 2008", "30%, the level set in 2008 for research"],
            correctIndex: 0,
            explanation: "Four per cent of the 1862 extension capacity appropriations, and it stayed there for thirty-one years.",
            sourceLessonSlug: "a-remedy-written-as-a-fraction",
          },
          {
            prompt: "Which statute raised the 1890 appropriation floors?",
            options: ["The 2008 farm bill", "The Agricultural Act of 2014, which also designated Central State University", "The Agriculture Improvement Act of 2018, which added the reporting requirement", "The Equity in Educational Land-Grant Status Act of 1994"],
            correctIndex: 0,
            explanation: "Public Law 110-246 raised research to 30 per cent and extension to 20 per cent.",
            sourceLessonSlug: "a-remedy-written-as-a-fraction",
          },
          {
            prompt: "What are the current statutory floors for the 1890 appropriations?",
            options: ["30% research, 20% extension", "15% research, 4% extension, unchanged since 1977", "50% for both, matching the waiver ceiling", "21% research and no floor for extension"],
            correctIndex: 0,
            explanation: "Raised from the original 15 and 4 by the 2008 farm bill.",
            sourceLessonSlug: "a-remedy-written-as-a-fraction",
          },
          {
            prompt: "How long did the four per cent extension floor stand?",
            options: ["31 years", "63 years, matching the extension eligibility gap", "90 years, matching the research eligibility gap", "10 years, until the 1987 farm bill revised it"],
            correctIndex: 0,
            explanation: "From 1977 until the 2008 farm bill raised it to twenty per cent.",
            sourceLessonSlug: "a-remedy-written-as-a-fraction",
          },
          {
            prompt: "What does 7 U.S.C. § 3221(a)(2) express the extension minimum as?",
            options: ["A percentage of the Smith-Lever appropriation", "A fixed dollar amount specified for each fiscal year", "A share of the state's own extension appropriation", "A multiple of the institution's prior-year allotment"],
            correctIndex: 0,
            explanation: "Not less than 20 per cent of the total appropriations under the Act of May 8, 1914, excluding Smith-Lever section 3(d).",
            sourceLessonSlug: "a-remedy-written-as-a-fraction",
          },
          {
            prompt: "Beginning with which fiscal year does the twenty per cent extension floor apply?",
            options: ["2003", "1977, the year NARETPA was enacted", "2008, the year the farm bill raised the floors", "2018, the year the reporting requirement was added"],
            correctIndex: 0,
            explanation: "The statute says beginning with fiscal year 2003, which is earlier than the 2008 statute that set the twenty per cent level.",
            sourceLessonSlug: "a-remedy-written-as-a-fraction",
          },
          {
            prompt: "What does this course say a floor expressed as a fraction of another institution's appropriation is?",
            options: ["A statement about relative size", "A guarantee that funding will rise with the cost of the work", "An accounting convention with no policy content", "A temporary measure that lapses when the appropriation changes"],
            correctIndex: 0,
            explanation: "It does not say what the work costs; it says what share of somebody else's funding this institution may not fall below.",
            sourceLessonSlug: "a-remedy-written-as-a-fraction",
          },
          {
            prompt: "Which authority carries the 1890 extension capacity grant?",
            options: ["NARETPA § 1444, 7 U.S.C. § 3221", "NARETPA § 1445, 7 U.S.C. § 3222, which carries research", "NARETPA § 1447, 7 U.S.C. § 3222b, which carries facilities", "Smith-Lever section 3(d), 7 U.S.C. § 343(d)"],
            correctIndex: 0,
            explanation: "Section 1444 is extension and section 1445, the Evans-Allen Act, is research.",
            sourceLessonSlug: "a-remedy-written-as-a-fraction",
          },
          {
            prompt: "Which authority carries the 1890 research capacity grant?",
            options: ["The Evans-Allen Act", "The Hatch Act of 1887, which the 1890 institutions became eligible for in 1977", "The 1890 Facilities Grant Program", "Smith-Lever section 3(b), which funds cooperative extension work"],
            correctIndex: 0,
            explanation: "Evans-Allen is NARETPA section 1445, codified at 7 U.S.C. § 3222.",
            sourceLessonSlug: "a-remedy-written-as-a-fraction",
          },
          {
            prompt: "Which of the three 1890 capacity grants requires no match?",
            options: ["The facilities grant", "The Evans-Allen research capacity grant", "The extension capacity grant under section 1444", "None of them; all three require a one-to-one match"],
            correctIndex: 0,
            explanation: "The 1890 Facilities Grant Program under NARETPA section 1447 requires no matching funds.",
            sourceLessonSlug: "a-remedy-written-as-a-fraction",
          },
          {
            prompt: "What does the facilities grant's lack of a match requirement demonstrate?",
            options: ["The match is a policy choice", "That facilities spending is exempt from federal cost-sharing rules generally", "That the 1890 institutions were excused from matching after 2008", "That capacity grants never carry conditions of any kind"],
            correctIndex: 0,
            explanation: "Congress attaches or omits a match programme by programme, so a match is a decision rather than a fixed feature of federal money.",
            sourceLessonSlug: "a-remedy-written-as-a-fraction",
          },
          {
            prompt: "What FY2021 appropriation does CRS report for the 1890 research capacity grant?",
            options: ["$73 million", "$62 million, which is the extension figure", "$21.5 million, which is the facilities figure", "$124 million, which is the FY2020 total for research and extension together"],
            correctIndex: 0,
            explanation: "Evans-Allen received $73 million and extension $62 million in the enacted FY2021 appropriations CRS reports.",
            sourceLessonSlug: "a-remedy-written-as-a-fraction",
          },
          {
            prompt: "What FY2021 appropriation does CRS report for the 1890 extension capacity grant?",
            options: ["$62 million", "$73 million, which is the Evans-Allen research figure", "$25 million, the amount the 2018 farm bill authorizes for facilities", "$574 million, the FY2020 figure for the 1862 institutions"],
            correctIndex: 0,
            explanation: "Extension under section 1444 received $62 million in FY2021.",
            sourceLessonSlug: "a-remedy-written-as-a-fraction",
          },
          {
            prompt: "In the extension allotment formula, what share goes to the agency for administration?",
            options: ["4%", "20%, the same share allotted in equal proportions among institutions", "40%, matching the share allotted by rural population", "None; the statute forbids administrative deductions"],
            correctIndex: 0,
            explanation: "Four per cent of the total goes to the agency for administrative, technical and coordinating services.",
            sourceLessonSlug: "a-remedy-written-as-a-fraction",
          },
          {
            prompt: "In that formula, what share is allotted among eligible institutions in equal proportions?",
            options: ["20%", "40%, which is the share allotted by rural population instead", "4%, which is the agency's administrative share", "The whole balance, after the agency's share is removed"],
            correctIndex: 0,
            explanation: "Twenty per cent in equal proportions, forty per cent by rural population, and the balance by farm population.",
            sourceLessonSlug: "a-remedy-written-as-a-fraction",
          },
          {
            prompt: "Which population measure carries the forty per cent share of the extension allotment?",
            options: ["Rural population", "Farm population, which carries the balance instead", "Total state population as of the last decennial census", "Enrollment at the eligible institution"],
            correctIndex: 0,
            explanation: "Forty per cent by rural population and the balance by farm population, both from the last preceding decennial census.",
            sourceLessonSlug: "a-remedy-written-as-a-fraction",
          },
          {
            prompt: "How does the extension statute treat Tuskegee and Alabama A&M in computing allotments?",
            options: ["As if in separate states", "As a single institution sharing one allotment", "As a territory rather than a state", "By enrollment share within Alabama's single allotment"],
            correctIndex: 0,
            explanation: "The same rule CRS describes for funding purposes generally is written into the allotment computation itself.",
            sourceLessonSlug: "a-remedy-written-as-a-fraction",
          },
          {
            prompt: "What share of Hatch Act funding did APLU report the 1890 institutions were receiving through Evans-Allen in 2013?",
            options: ["About 21%", "About 30%, matching the statutory floor set in 2008", "About 15%, matching the original 1977 floor", "About 82%, matching the 1862 share of capacity funding"],
            correctIndex: 0,
            explanation: "APLU's own figure, reported against a statutory research floor that had been 30 per cent since 2008.",
            sourceLessonSlug: "a-remedy-written-as-a-fraction",
          },
          {
            prompt: "What is the difference between a floor and an outturn?",
            options: ["A minimum against an actual amount", "A federal figure against a state figure", "A research figure against an extension figure", "An authorized amount against an appropriated one"],
            correctIndex: 0,
            explanation: "A floor is what a programme may not fall below; an outturn is what it actually received in a year.",
            sourceLessonSlug: "a-remedy-written-as-a-fraction",
          },
          {
            prompt: "When did the Equity in Educational Land-Grant Status Act of 1994 become law?",
            options: ["20 October 1994", "7 February 2014, the date of the farm bill that added Central State University", "30 August 1890, the date of the Second Morrill Act", "20 December 2018, the date of the most recent farm bill"],
            correctIndex: 0,
            explanation: "Part C of title V of Public Law 103-382, printed at 108 Stat. 4048.",
            sourceLessonSlug: "three-tiers-in-one-row",
          },
          {
            prompt: "What public law carries the 1994 land-grant status provisions?",
            options: ["Pub. L. 103-382", "Pub. L. 95-113, which carries NARETPA", "Pub. L. 110-246, the 2008 farm bill", "Pub. L. 113-79, the Agricultural Act of 2014"],
            correctIndex: 0,
            explanation: "Title V, part C of Public Law 103-382, enacted 20 October 1994.",
            sourceLessonSlug: "three-tiers-in-one-row",
          },
          {
            prompt: "How does the 1994 statute define a 1994 institution?",
            options: ["By listing the colleges", "By a test any accredited tribal college may satisfy on application", "By reference to the Bureau of Indian Education's own roster", "By delegating the determination to the Secretary of Agriculture"],
            correctIndex: 0,
            explanation: "A definition by list means the category changes only when Congress amends the list.",
            sourceLessonSlug: "three-tiers-in-one-row",
          },
          {
            prompt: "What status does section 533 of the 1994 statute confer?",
            options: ["Land-grant college status", "Eligibility for the Hatch Act experiment station allotment", "A share of the 1890 extension capacity appropriation", "An exemption from all federal matching requirements"],
            correctIndex: 0,
            explanation: "1994 institutions shall be considered land-grant colleges established for the benefit of agriculture and the mechanic arts.",
            sourceLessonSlug: "three-tiers-in-one-row",
          },
          {
            prompt: "In CRS's FY2020 table, how much federal research and extension capacity funding went to the 1862 institutions?",
            options: ["$574 million", "$124 million, which is the 1890 figure", "$73 million, the FY2021 Evans-Allen appropriation", "$13 billion, the sum of the 2023 state funding gaps"],
            correctIndex: 0,
            explanation: "$574 million against $124 million for the 1890 institutions, from enacted FY2020 appropriations.",
            sourceLessonSlug: "three-tiers-in-one-row",
          },
          {
            prompt: "In that table, how much went to the 1890 institutions?",
            options: ["$124 million", "$574 million, which is the 1862 figure", "$62 million, the FY2021 extension appropriation alone", "Nothing, which is the 1994 institutions' position"],
            correctIndex: 0,
            explanation: "$124 million, or eighteen per cent of the research and extension capacity funding in that year.",
            sourceLessonSlug: "three-tiers-in-one-row",
          },
          {
            prompt: "What appears in the 1994 column of the CRS capacity-funding table?",
            options: ["A blank", "Zero dollars, recorded as an appropriation of nil", "The same figure as the 1890 column, since the programmes are shared", "A footnote referring the reader to a separate tribal college table"],
            correctIndex: 0,
            explanation: "A blank, explained by the source note as no comparable programs rather than as an appropriation of zero.",
            sourceLessonSlug: "three-tiers-in-one-row",
          },
          {
            prompt: "How does the CRS table's source note explain the 1994 blank?",
            options: ["No comparable programs", "Data not yet reported by the institutions for that fiscal year", "Amounts too small to display at the table's level of rounding", "Funding provided under a different appropriations act"],
            correctIndex: 0,
            explanation: "The note lists the included programmes for the 1862 and 1890 groups and says no comparable programs exist for the 1994 group.",
            sourceLessonSlug: "three-tiers-in-one-row",
          },
          {
            prompt: "What percentage of research and extension capacity funding did the 1862 institutions receive in 2020?",
            options: ["82%", "18%, which is the 1890 share", "30%, the statutory research floor for the 1890 institutions", "57%, matching the number of 1862 institutions"],
            correctIndex: 0,
            explanation: "Eighty-two per cent to the 1862 institutions, eighteen to the 1890 institutions, zero to the 1994 institutions.",
            sourceLessonSlug: "three-tiers-in-one-row",
          },
          {
            prompt: "How many years separate the 1862 land grant from the 1994 designation of tribal colleges?",
            options: ["132", "90, matching the research capacity gap for the 1890 institutions", "104, the interval between the two Morrill Acts and NARETPA", "63, matching the extension capacity gap"],
            correctIndex: 0,
            explanation: "The institutions run by the nations whose land endowed the system were admitted to it 132 years later.",
            sourceLessonSlug: "three-tiers-in-one-row",
          },
          {
            prompt: "What does this course decline to narrate about the 1994 institutions?",
            options: ["Their own story", "The statute that gave them land-grant status", "The CRS table row that reports their capacity funding", "The date the 1994 Act became law"],
            correctIndex: 0,
            explanation: "Their endowment arrangements and what tribal colleges do are not this course's material, and asserting them from a summary would be the failure the catalog exists to avoid.",
            sourceLessonSlug: "three-tiers-in-one-row",
          },
          {
            prompt: "Which course does this lesson hand Indigenous governance back to?",
            options: ["Tribal Nations and Governance", "The Name on the Door, which teaches architectural credit at Tuskegee", "Cooperatives, which teaches rural credit and the co-op form", "The Schoolhouse Network, which teaches community-financed schoolbuilding"],
            correctIndex: 0,
            explanation: "That course owns Indigenous governance, and the land itself belongs to WARRANT-03.",
            sourceLessonSlug: "three-tiers-in-one-row",
          },
          {
            prompt: "Why is a definition by list worth pausing on?",
            options: ["The category is not a test", "Because a list is easier for institutions to challenge in court", "Because it means the Secretary may add institutions at any time", "Because lists in statutes are never amended once enacted"],
            correctIndex: 0,
            explanation: "Membership is a roster amended by Congress, exactly as Section 2 found for the 1890 group.",
            sourceLessonSlug: "three-tiers-in-one-row",
          },
          {
            prompt: "Which two farm bills does this course name as having amended the 1994 institution list as printed?",
            options: ["2014 and 2018", "1977 and 2008, when the appropriation floors were set and raised", "1890 and 1994, the two designating statutes", "2002 and 2023, the years of the letters and the reporting requirement"],
            correctIndex: 0,
            explanation: "The statutory note records amendments through the 2014 and 2018 Acts among others.",
            sourceLessonSlug: "three-tiers-in-one-row",
          },
          {
            prompt: "What is the CRS-reported count of 1994 institutions, and as of when?",
            options: ["35, as of June 2021", "36, as of the current statutory list", "29, as of the Act's enactment in 1994", "19, matching the number of 1890 institutions"],
            correctIndex: 0,
            explanation: "35 is CRS's June 2021 figure; the statutory list currently names 36, which is why the date has to travel with the number.",
            sourceLessonSlug: "three-tiers-in-one-row",
          },
          {
            prompt: "Which capacity programmes does the CRS table include for the 1862 institutions?",
            options: ["Hatch and Smith-Lever 3(b) and 3(c)", "Evans-Allen and NARETPA section 1444", "The 1890 Facilities Grant Program and McIntire-Stennis", "Smith-Lever section 3(d) and the Renewable Resources Extension Act"],
            correctIndex: 0,
            explanation: "The note names Hatch and Smith-Lever 3(b) and 3(c) for the 1862 group and Evans-Allen plus NARETPA section 1444 for the 1890 group.",
            sourceLessonSlug: "three-tiers-in-one-row",
          },
          {
            prompt: "Which capacity programmes does that table include for the 1890 institutions?",
            options: ["Evans-Allen and NARETPA § 1444", "Hatch and Smith-Lever 3(b) and 3(c)", "The 1890 Facilities Grant Program and the Centers of Excellence", "The Scholarships for Students at 1890 Institutions provision"],
            correctIndex: 0,
            explanation: "Only the two capacity grants, which is why the facilities and competitive programmes do not appear in that row.",
            sourceLessonSlug: "three-tiers-in-one-row",
          },
          {
            prompt: "Which fiscal year's enacted appropriations does the CRS funding table report?",
            options: ["FY2020", "FY2021, the year the individual programme figures are given for", "FY2003, the first year the twenty per cent extension floor applied", "FY2018, the year the reporting requirement was enacted"],
            correctIndex: 0,
            explanation: "The table draws on enacted FY2020 appropriations, while the programme-by-programme figures elsewhere in the document are FY2021.",
            sourceLessonSlug: "three-tiers-in-one-row",
          },
          {
            prompt: "What does this course say it does with the two sentences it puts next to each other about 1862 and 1994?",
            options: ["Stops", "Draws the policy conclusion it thinks a reader should reach", "Argues that the 1994 designation settled the 1862 question", "Treats them as too speculative to state at all"],
            correctIndex: 0,
            explanation: "The row is in a congressional document, and a course does not need to editorialise it.",
            sourceLessonSlug: "three-tiers-in-one-row",
          },
          {
            prompt: "Which is the stronger evidence for this course's argument, and why?",
            options: ["The ineligibility, because it needs no inference", "The 2023 dollar figure, because it is the most recent measurement", "The 1994 blank cell, because it applies to the largest group of institutions", "The APLU brief, because it comes from the universities themselves"],
            correctIndex: 0,
            explanation: "One sentence in a congressional document establishes it, where a per-student model has to be defended against a mission-mix objection.",
            sourceLessonSlug: "not-eligible-for-these-grants",
          },
          {
            prompt: "In what document does the not-eligible sentence appear?",
            options: ["A CRS In Focus", "A Government Accountability Office audit of the Department of Agriculture", "A policy brief by the association of public and land-grant universities", "A letter from two federal secretaries to sixteen governors"],
            correctIndex: 0,
            explanation: "A three-page Congressional Research Service In Focus, which is public domain and free to download.",
            sourceLessonSlug: "not-eligible-for-these-grants",
          },
          {
            prompt: "What kind of thing is the 1977 remedy sized against?",
            options: ["Another class of institution's appropriation", "The measured cost of running an experiment station", "The enrollment of the receiving institutions", "The acreage of the original 1862 land grants"],
            correctIndex: 0,
            explanation: "Percentages of the 1862 capacity grant appropriations, which is a statement about relative size rather than about cost.",
            sourceLessonSlug: "a-remedy-written-as-a-fraction",
          },
          {
            prompt: "How many times has this course now met the same design move by the end of Section 3?",
            options: ["Three", "Once, in the 1890 Act's proviso", "Five, counting each capacity programme separately", "Twice, in 1890 and in 1994"],
            correctIndex: 0,
            explanation: "The 1890 proviso, the ineligibility, and the remedy written as a fraction of somebody else's appropriation.",
            sourceLessonSlug: "a-remedy-written-as-a-fraction",
          },
          {
            prompt: "Which exclusion does the § 3221(a)(2) calculation make from the Smith-Lever total?",
            options: ["Section 3(d) amounts", "Amounts appropriated for the agricultural experiment stations", "Any amounts provided as non-federal matching funds", "Appropriations for the 1994 institutions"],
            correctIndex: 0,
            explanation: "The statute says the total appropriations shall not include amounts made available under section 3(d) of that Act.",
            sourceLessonSlug: "a-remedy-written-as-a-fraction",
          },
          {
            prompt: "What is the public law citation for NARETPA?",
            options: ["Pub. L. 95-113, Title XIV", "Pub. L. 103-382, title V, part C", "Pub. L. 110-246, title VII", "Pub. L. 115-334, title VII"],
            correctIndex: 0,
            explanation: "CRS gives NARETPA as Pub. L. 95-113, Title XIV, which authorizes the three 1890 capacity grants.",
            sourceLessonSlug: "a-remedy-written-as-a-fraction",
          },
          {
            prompt: "What does the 1890 Facilities Grant Program pay for?",
            options: ["Facilities and equipment", "Salaries for extension agents in rural counties", "Scholarships for students in food and agricultural sciences", "Competitive research projects selected by peer review"],
            correctIndex: 0,
            explanation: "Acquiring and improving agricultural and food science facilities and equipment, with no matching funds required.",
            sourceLessonSlug: "a-remedy-written-as-a-fraction",
          },
          {
            prompt: "What FY2021 appropriation does CRS report for the 1890 Facilities Grant Program?",
            options: ["$21.5 million", "$25 million, which is the amount the 2018 farm bill authorizes", "$62 million, the extension capacity figure", "$40 million, the authorization covering all of 7 U.S.C. § 3152"],
            correctIndex: 0,
            explanation: "The 2018 farm bill authorizes $25 million annually and the enacted FY2021 appropriation was $21.5 million.",
            sourceLessonSlug: "a-remedy-written-as-a-fraction",
          },
          {
            prompt: "Which of these is NOT one of the three 1890 capacity grants CRS lists?",
            options: ["The Hatch Act allotment", "The extension capacity grant under NARETPA § 1444", "The Evans-Allen research capacity grant", "The 1890 Facilities Grant Program"],
            correctIndex: 0,
            explanation: "Hatch is the 1862 research capacity grant, and the 1890 institutions were never eligible for it.",
            sourceLessonSlug: "a-remedy-written-as-a-fraction",
          },
          {
            prompt: "How does this course describe the relationship between the not-eligible sentence and the argument built on it?",
            options: ["No inference is required", "The sentence supports the argument only when combined with enrollment data", "The sentence is contested by the institutions it describes", "The sentence is a paraphrase that the underlying statutes do not support"],
            correctIndex: 0,
            explanation: "It is a statement of fact in a congressional document about who could and could not apply.",
            sourceLessonSlug: "not-eligible-for-these-grants",
          },
          {
            prompt: "What does the phrase not simply richer mean in this lesson?",
            options: ["The gap is capability, not cash", "The 1862 institutions also hold larger private endowments", "The comparison should be made per student rather than in total", "The 1890 institutions receive more from other federal programmes"],
            correctIndex: 0,
            explanation: "Ninety extra years of people, equipment, data series and track record is a different kind of advantage from a larger balance.",
            sourceLessonSlug: "not-eligible-for-these-grants",
          },
          {
            prompt: "Which two 1890 programmes did the 2013 APLU brief's comparison turn on?",
            options: ["Evans-Allen and extension", "The facilities grant and the scholarships programme", "The Centers of Excellence and the capacity building grants", "The USDA/1890 National Scholars Program and Smith-Lever 3(d)"],
            correctIndex: 0,
            explanation: "The brief measured state matching for extension and Evans-Allen research funding, the two matched capacity grants.",
            sourceLessonSlug: "a-remedy-written-as-a-fraction",
          },
          {
            prompt: "What is the safest way to report the APLU 21 per cent figure?",
            options: ["As APLU's figure, dated", "As the current statutory floor for research funding", "As a Congressional Research Service finding", "As an average across the whole period since 1977"],
            correctIndex: 0,
            explanation: "It is an association's measurement published in 2013, and a floor and an outturn are two different things.",
            sourceLessonSlug: "a-remedy-written-as-a-fraction",
          },
          {
            prompt: "Why does this course put the FY2020 shares in a single row?",
            options: ["Three tiers become visible at once", "Because CRS presents them only as a running total", "Because the shares are the only figures in the document that are not contested", "Because a row is easier to render on a phone than a chart"],
            correctIndex: 0,
            explanation: "Eighty-two, eighteen and zero per cent side by side, in a document written for members of Congress.",
            sourceLessonSlug: "three-tiers-in-one-row",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 4 — The match
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-state-shall-provide",
      title: "13 · The state shall provide",
      section: "Section 4 · The match",
      body: `The match is the centre of this course, so read the sentence that creates it and pay attention to its subject.

**7 U.S.C. § 3222d(c)**, headed "Matching formula":

> "Notwithstanding any other provision of this subchapter, the State shall provide equal matching funds from non-Federal sources." (7 U.S.C. § 3222d, n.d.)

**The State shall provide.** Not the institution. Not the Department of Agriculture. The obligation runs to the state government, and the same section defines an eligible institution as "a college eligible to receive funds under the Act of August 30, 1890 ..., including Tuskegee University", covering the extension and research formula funds distributed under §§ 3221 and 3222.

**Now the sentence almost nobody quotes, at § 3222d(f)(1):**

> "Federal funds that are not matched by a State in accordance with subsection (c) for a fiscal year shall be redistributed by the Secretary to eligible institutions whose States have satisfied the matching funds requirement for that fiscal year." (7 U.S.C. § 3222d, n.d.)

**Trace who wins and who loses when a state does not pay.**

| Party | What happens |
| --- | --- |
| The 1890 institution in the state that did not match | Loses the unmatched federal money |
| The state that did not match | Pays nothing, and forfeits nothing of its own |
| 1890 institutions in states that did match | Receive the redistributed money |
| The federal Treasury | Spends the same total either way |

**So the money does not go back to Washington. It goes sideways, to another state's historically Black land-grant university.** The design was presumably meant to give a state a reason to pay, since it can watch its money leave. What it does in practice is convert one state's decision into another state's windfall, and neither of them is the institution that was supposed to get it.

**The sector's own association is emphatic about where the responsibility sits, and this course quotes it because it cuts against an easy reading.** APLU wrote in 2013 that "the one-to-one matching inequity that is being experienced by 1890 land-grant institutions is not in any way caused be [sic] the federal government or the U.S. Department of Agriculture. In fact, Congress established the matching requirement so that all land-grant institutions would receive one-to-one matching funds from their respective state" (Lee & Keys, 2013, p. 6).

**Take that seriously rather than reading past it.** The organisation representing land-grant universities, writing a brief whose whole purpose is to complain about the shortfall, says the federal government did not cause it. **The withholding party is the state.** A course that blamed USDA here would be picking the wrong defendant, and its own strongest source would say so.

**One more line from the same page, because it names the choice an institution actually faces:** where a state does not meet the obligation, the arrangement requires "these institutions to apply for a waiver of the one-to-one match requirement or forfeit their funding" (Lee & Keys, 2013, p. 6). Apply, or forfeit. Hold that. The next lesson is about the waiver.

:::reveal Who does 7 U.S.C. § 3222d(c) say shall provide the equal matching funds? ||| The state. The obligation runs to the state government, not to the institution and not to the Department of Agriculture.

:::reveal What happens to federal capacity funds a state does not match? ||| They are redistributed to eligible institutions whose states did satisfy the matching requirement, so the money moves to another state's 1890 institution.

:::reveal What does APLU say about whether the federal government caused the matching shortfall? ||| That it is not in any way caused by the federal government or USDA, because Congress established the match so that all land-grant institutions would receive matching funds from their own state.

## Vocabulary
- **Matching formula**: the statutory rule at § 3222d(c) requiring the state to put up an equal amount from non-federal sources before the federal capacity dollar is paid.
- **Redistribution**: the rule at § 3222d(f) that moves unmatched federal money to institutions in states that did match, so the loss lands on the institution rather than on the state.
- **Eligible institution**: the statutory term for a college eligible under the 1890 Act, including Tuskegee University by name.
- **Forfeit**: what an institution does with unmatched federal money if it neither obtains a waiver nor receives the state's contribution.

## Sources
7 U.S.C. § 3222d. (n.d.). *Matching funds requirement for research and extension activities at eligible institutions*. Office of the Law Revision Counsel, U.S. House of Representatives. https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title7-section3222d&num=0&edition=prelim

Lee, J. M., Jr., & Keys, S. W. (2013, September). *Land-grant but unequal: State one-to-one match funding for 1890 land-grant universities* (Policy Brief No. 3000-PB1). Association of Public and Land-grant Universities. https://www.aplu.org/wp-content/uploads/land-grant-but-unequal-state-one-to-one-match-funding-for-1890-land-grant-universities.pdf`,
    },
    {
      slug: "the-waiver-only-one-side-gets",
      title: "14 · The waiver only one side gets",
      section: "Section 4 · The match",
      body: `Two sentences in the CRS In Focus do more work than every dollar estimate in this course put together, because they need no model, no assumption and no inference.

> "Current law permits USDA to waive up to 50% of the matching requirements for 1890 Institutions if the state is unlikely to provide sufficient funds. **The law does not permit waivers for most 1862 Institutions.** Currently, all states meet the matching requirements for their 1862 Institutions. In contrast, **in FY2020, nine 1890 Institutions received matching fund waivers** for either research or extension capacity grants or both grant types." (Congressional Research Service [CRS], 2021, p. 2)

**An asymmetry written into statute, and observed in practice, in a congressional document.** That is the strongest fact in this whole subject, and it is stronger than any headline dollar figure, because a dollar figure can be argued with and a statutory permission cannot.

**Here is the waiver itself, at 7 U.S.C. § 3222d(d):**

> "Notwithstanding subsection (f), the Secretary may waive the matching funds requirement under subsection (c) above the 50 percent level for any fiscal year for an eligible institution of a State if the Secretary determines that the State will be unlikely to satisfy the matching requirement." (7 U.S.C. § 3222d, n.d.)

**Read the drafting precisely, because CRS's plain-English version compresses it.** The Secretary may waive the requirement *above the 50 per cent level*. So the state must always put up at least half, and only the top half is waivable. CRS's "up to 50%" and the statute's "above the 50 percent level" describe the same rule from opposite ends, and APLU says the same thing a third way: USDA "still requires 1890 land-grant institutions to come up with at least 50 percent of the match" (Lee & Keys, 2013, p. 6).

**Now the word "most", because it is doing real work.** The 1862 side has a matching rule too, at 7 U.S.C. § 361c(d), and it has teeth: if a state fails to match, "the Secretary of Agriculture shall withhold from payment to the State" the difference, and shall reapportion the withheld amount "among the States satisfying the matching requirement for that fiscal year" (7 U.S.C. § 361c, n.d.). Same machinery as the 1890 side.

**But there is exactly one waiver on the 1862 side, and it does not reach any state.** Section 361c(d)(4) sets a 50 per cent requirement instead of one-to-one for "the insular areas of the Commonwealth of Puerto Rico, Guam, and the Virgin Islands of the United States and the District of Columbia", and lets the Secretary waive even that "if the Secretary determines that the government of the insular area or the District of Columbia will be unlikely to meet the matching requirement for the fiscal year" (7 U.S.C. § 361c, n.d.).

**So "most 1862 Institutions" carries four jurisdictions, none of them a state.** Put the two side by side:

| | 1862 institutions | 1890 institutions |
| --- | --- | --- |
| Match required | One-to-one | One-to-one |
| Waiver available | Only for three insular areas and D.C. | For any eligible institution, above the 50% level |
| Unmatched money | Withheld and reapportioned | Redistributed to institutions in matching states |
| Observed, per CRS | All states meet it | Nine institutions took waivers in FY2020 |

**And CRS says out loud what the waiver does.** "Although waivers for matching funds allow for federal funding of 1890 Institutions without complete state funding support, they open funding disparities between 1890 and 1862 Institutions" (CRS, 2021, p. 2). A waiver is a mercy and a permission at the same time. It keeps money reaching an institution whose state will not pay, and it removes the consequence that would otherwise fall on the state.

**Since 2018, the waivers have names attached.** Section 7116 of the 2018 farm bill (7 U.S.C. § 2207d) requires USDA to report annually on capacity funding allocations and non-federal matching by institution and by programme, and CRS notes that "these reports publicly identify institutions that received waivers for particular capacity grant programs" (CRS, 2021, p. 2). CRS also notes the limit of that transparency: the reports "do not distinguish between state appropriations and funds provided by other nonfederal sources", so a match met by the university itself reads the same as one met by the legislature.

:::reveal What does the law permit for 1890 institutions that it does not permit for most 1862 institutions? ||| A waiver of the matching requirement, which USDA may grant above the 50 per cent level when a state is unlikely to provide sufficient funds.

:::reveal Which 1862 jurisdictions can receive a matching waiver? ||| Puerto Rico, Guam, the U.S. Virgin Islands and the District of Columbia, which is what the word most in the CRS sentence carries.

:::reveal What does CRS say waivers do to the gap between the two systems? ||| They allow federal funding to reach 1890 institutions without complete state support, and in doing so they open funding disparities between the 1890 and 1862 institutions.

## Vocabulary
- **Waiver**: an agency's release of a statutory requirement, here limited to the portion of the 1890 match above fifty per cent and conditioned on a finding about the state.
- **Above the 50 percent level**: the statute's own boundary on the waiver, meaning the state must always provide at least half of the required match.
- **Withhold and reapportion**: the 1862 consequence for a state that does not match, which moves money to states that did.
- **Transparency requirement**: the 2018 farm bill provision requiring USDA to publish allocations and matching by institution and programme, which is what makes waivers publicly nameable.

## Sources
7 U.S.C. § 361c. (n.d.). *Authorization of appropriations and allotments of grants*. Office of the Law Revision Counsel, U.S. House of Representatives. https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title7-section361c&num=0&edition=prelim

7 U.S.C. § 3222d. (n.d.). *Matching funds requirement for research and extension activities at eligible institutions*. Office of the Law Revision Counsel, U.S. House of Representatives. https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title7-section3222d&num=0&edition=prelim

Congressional Research Service. (2021, June 15). *1890 land-grant universities: Background and selected issues* (In Focus No. IF11847, Version 10). https://www.congress.gov/crs-product/IF11847

Lee, J. M., Jr., & Keys, S. W. (2013, September). *Land-grant but unequal: State one-to-one match funding for 1890 land-grant universities* (Policy Brief No. 3000-PB1). Association of Public and Land-grant Universities. https://www.aplu.org/wp-content/uploads/land-grant-but-unequal-state-one-to-one-match-funding-for-1890-land-grant-universities.pdf`,
    },
    {
      slug: "counting-it-in-2013",
      title: "15 · Counting it in 2013",
      section: "Section 4 · The match",
      body: `Before the federal letters of 2023, the land-grant universities' own association counted the shortfall itself. Its brief is short, its figures are exact, and its arithmetic is worth checking.

**Lee, J. M., Jr., & Keys, S. W. (2013, September).** *Land-grant but unequal: State one-to-one match funding for 1890 land-grant universities.* APLU Policy Brief 3000-PB1.

**The findings, in the brief's own numbers, for 2010 to 2012** (Lee & Keys, 2013, pp. 1, 8):

| Measure | Figure |
| --- | --- |
| 1890 institutions not receiving 100% of the match | 61.2%, which the brief states as 11 out of 18 |
| Extension funding not received | $31,828,918 |
| Research funding not received | $24,798,282 |
| Combined, as the brief prints it | $56,627,199 |

**Eighteen, not nineteen, because the brief predates Central State University's 2014 designation.** That is a good reminder that a count has a date on it.

**Now add the two component figures yourself.** $31,828,918 plus $24,798,282 is **$56,627,200**. The brief prints $56,627,199, one dollar lower. That is a rounding artifact rather than a scandal, and it is worth a minute of your time for exactly one reason: **it proves the habit works.** The published total and the published components are both in front of you, they can be reconciled with a calculator, and you now know something about the document that no summary of it will ever tell you.

**The brief also disagrees with itself in a smaller way.** Its highlights box says "61 percent" and its body says "61.2 percent (11 out of 18)" (Lee & Keys, 2013, pp. 1, 8). Quote one, say which, and do not blend them into "about 61 per cent of the roughly 18".

**Two cautions the brief states about its own numbers**, and they are the reason to trust it more rather than less. First, "in some cases though institutions may not have received a waiver, the match comes from general funds instead of a specific line-item", so the absence of a waiver does not prove a legislature appropriated the match. Second, the brief says it "is also not clear if the remaining eight states where 1890 institutions have not applied for a waiver are also losing millions of dollars", because many do not have a specific line item to check (Lee & Keys, 2013, p. 8). **A source that tells you what it cannot see is a better source, not a weaker one.**

**Now the contrast this course exists to draw, and the other course you should read next.** The Schoolhouse Network teaches a matching grant too: the Rosenwald Fund offered money that only existed once other money appeared first, from four named columns, one of which was the local Black community in cash, land, materials and labour. **That was private philanthropy setting a condition on itself and on a community that had no obligation to anybody.** The match in this course is the mirror image. It is public money a state is obliged by federal statute to provide, and the shortfall is not a community failing to raise its share. It is a legislature declining to pay one.

**Read the two together and you have the whole shape of the period:** communities taxed for schools they could not attend, raising a private match anyway, in states that were not paying a public one they had agreed to.

:::reveal What share of 1890 institutions did APLU find were not receiving the full match from 2010 to 2012? ||| 61.2 per cent, which the brief states as 11 out of 18, and its highlights box rounds to 61 per cent.

:::reveal What do the brief's two component shortfall figures add up to, and what does it print? ||| They add to $56,627,200 and the brief prints $56,627,199, a one-dollar rounding artifact you can find with a calculator.

:::reveal How does the Rosenwald match differ from the 1890 match? ||| Rosenwald was private philanthropy conditioning its own money on contributions a community had no obligation to make; the 1890 match is public money a state was obliged by statute to provide.

## Vocabulary
- **Policy brief**: a short advocacy document by an interested organisation, which can carry exact figures and still need checking, as this one does.
- **Line item**: a specifically identified appropriation in a state budget, whose absence is what made APLU unable to see whether some states were short.
- **Component and total**: the published parts of a figure and the published sum, which should reconcile and here differ by a dollar.
- **Challenge grant**: the private matching model The Schoolhouse Network teaches, where a donor's money exists only once other named contributions appear.

## Sources
Lee, J. M., Jr., & Keys, S. W. (2013, September). *Land-grant but unequal: State one-to-one match funding for 1890 land-grant universities* (Policy Brief No. 3000-PB1). Association of Public and Land-grant Universities. https://www.aplu.org/wp-content/uploads/land-grant-but-unequal-state-one-to-one-match-funding-for-1890-land-grant-universities.pdf`,
    },
    {
      slug: "quiz-the-match",
      title: "16 · Knowledge check: the match",
      section: "Section 4 · The match",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "Who does 7 U.S.C. § 3222d(c) say shall provide the equal matching funds?",
            options: ["The state", "The eligible institution, out of its own tuition and endowment income", "The Secretary of Agriculture, from unobligated balances in the capacity accounts", "Any non-federal donor the institution can persuade to contribute"],
            correctIndex: 0,
            explanation: "The subject of the sentence is the State, which is why the withholding party in this story is a legislature.",
            sourceLessonSlug: "the-state-shall-provide",
          },
          {
            prompt: "From what kind of sources must the match come?",
            options: ["Non-federal", "Federal, from a second agency other than the Department of Agriculture", "State general revenue only, excluding institutional funds", "Private philanthropy, excluding any government appropriation"],
            correctIndex: 0,
            explanation: "Equal matching funds from non-federal sources, which can include the university itself or another non-federal entity.",
            sourceLessonSlug: "the-state-shall-provide",
          },
          {
            prompt: "What does § 3222d(f) do with federal funds a state fails to match?",
            options: ["Redistributes them", "Returns them to the Treasury as unobligated balances", "Holds them for the institution until the state appropriates the match", "Converts them into competitive grant authority for the same institution"],
            correctIndex: 0,
            explanation: "The Secretary redistributes them to eligible institutions whose states did satisfy the matching requirement that year.",
            sourceLessonSlug: "the-state-shall-provide",
          },
          {
            prompt: "Where does unmatched 1890 capacity money end up?",
            options: ["At another state's 1890 institution", "Back in the federal Treasury as a lapsed appropriation", "In an escrow account carried forward to the following fiscal year", "At the 1862 institution in the same state"],
            correctIndex: 0,
            explanation: "The money goes sideways, to eligible institutions in states that met the requirement.",
            sourceLessonSlug: "the-state-shall-provide",
          },
          {
            prompt: "In the redistribution mechanism, which party forfeits nothing of its own?",
            options: ["The state that did not match", "The institution whose state did not match", "The institution that receives the redistributed money", "The federal Treasury, which spends more as a result"],
            correctIndex: 0,
            explanation: "The institution loses the money, another institution gains it, and the state pays nothing either way.",
            sourceLessonSlug: "the-state-shall-provide",
          },
          {
            prompt: "How does the federal Treasury's total outlay change when a state fails to match?",
            options: ["It does not", "It falls by the amount the state withheld", "It rises, since the shortfall is made up federally", "It depends on whether the institution obtained a waiver"],
            correctIndex: 0,
            explanation: "The same total is spent either way; only the destination changes.",
            sourceLessonSlug: "the-state-shall-provide",
          },
          {
            prompt: "What does APLU say about the federal government's responsibility for the matching shortfall?",
            options: ["It did not cause it", "That USDA's waiver policy is the direct cause of state underfunding", "That Congress set the match too high for most states to meet", "That the Department of Education rather than USDA bears responsibility"],
            correctIndex: 0,
            explanation: "The association writes that the inequity is not in any way caused by the federal government or USDA.",
            sourceLessonSlug: "the-state-shall-provide",
          },
          {
            prompt: "Why does this course quote APLU on that point specifically?",
            options: ["It cuts against an easy reading", "Because APLU is the only source with access to the underlying data", "Because CRS declines to say who is responsible", "Because the letters of 2023 make the same argument"],
            correctIndex: 0,
            explanation: "The organisation complaining about the shortfall says the federal government did not cause it, and blaming USDA would pick the wrong defendant.",
            sourceLessonSlug: "the-state-shall-provide",
          },
          {
            prompt: "According to APLU, what choice does an institution face when its state does not meet the obligation?",
            options: ["Apply for a waiver or forfeit", "Sue the state or accept the reduced allocation", "Raise the match from tuition or close the programme", "Appeal to Congress or wait for the next farm bill"],
            correctIndex: 0,
            explanation: "Apply for a waiver of the one-to-one match requirement, or forfeit the funding.",
            sourceLessonSlug: "the-state-shall-provide",
          },
          {
            prompt: "Which two capacity grants does the § 3222d matching requirement cover?",
            options: ["The formula funds under §§ 3221 and 3222", "The Hatch Act and Smith-Lever allotments", "The facilities grant and the scholarships programme", "The Centers of Excellence and the capacity building grants"],
            correctIndex: 0,
            explanation: "The section defines formula funds as the allocations distributed under sections 3221 and 3222, meaning extension and Evans-Allen.",
            sourceLessonSlug: "the-state-shall-provide",
          },
          {
            prompt: "How does § 3222d define an eligible institution?",
            options: ["A college eligible under the 1890 Act, including Tuskegee", "Any historically Black college or university offering an agriculture degree", "Any land-grant institution receiving formula funds of any kind", "An institution designated as such by its own state legislature"],
            correctIndex: 0,
            explanation: "The definition names Tuskegee expressly, for the reason Section 2 gave.",
            sourceLessonSlug: "the-state-shall-provide",
          },
          {
            prompt: "Which two CRS sentences does this course call the strongest fact in the subject?",
            options: ["The waiver asymmetry and the FY2020 count", "The 82 per cent share and the blank 1994 cell", "The Hatch date and the Smith-Lever date", "The enrollment totals and the capacity funding totals"],
            correctIndex: 0,
            explanation: "A statutory permission one side has and the other lacks, plus what actually happened in one named year.",
            sourceLessonSlug: "the-waiver-only-one-side-gets",
          },
          {
            prompt: "How many 1890 institutions received matching fund waivers in FY2020?",
            options: ["Nine", "Nineteen, meaning every institution in the group", "Eleven, matching the count in the 2013 policy brief", "Sixteen, matching the number of governors who received letters in 2023"],
            correctIndex: 0,
            explanation: "Nine received waivers for research or extension capacity grants or both, in the year CRS reports.",
            sourceLessonSlug: "the-waiver-only-one-side-gets",
          },
          {
            prompt: "What does CRS say about states meeting the match for their 1862 institutions?",
            options: ["All of them do", "About two thirds of them do", "Only the states without an 1890 institution do", "The reports do not permit an answer"],
            correctIndex: 0,
            explanation: "Currently all states meet the matching requirements for their 1862 institutions, which is the other half of the contrast.",
            sourceLessonSlug: "the-waiver-only-one-side-gets",
          },
          {
            prompt: "At what level does § 3222d(d) permit the Secretary to waive the match?",
            options: ["Above the 50 percent level", "In full, at the Secretary's discretion", "Up to 75 per cent for institutions in states with no line item", "Only where the state has appropriated nothing at all"],
            correctIndex: 0,
            explanation: "The state must always provide at least half, and only the portion above that is waivable.",
            sourceLessonSlug: "the-waiver-only-one-side-gets",
          },
          {
            prompt: "What finding must the Secretary make before granting the waiver?",
            options: ["That the state is unlikely to satisfy the requirement", "That the institution has exhausted its own non-federal sources", "That the shortfall would force the institution to close a programme", "That the state has failed to match in each of the three preceding years"],
            correctIndex: 0,
            explanation: "The determination is about the state's likely behaviour, not about the institution's need.",
            sourceLessonSlug: "the-waiver-only-one-side-gets",
          },
          {
            prompt: "How do CRS's up to 50 per cent and the statute's above the 50 percent level relate?",
            options: ["They describe the same rule", "They contradict each other, and CRS is in error", "They apply to research and extension respectively", "They applied before and after the 2008 farm bill respectively"],
            correctIndex: 0,
            explanation: "One states what may be waived and the other states what must remain, and APLU says the same thing a third way.",
            sourceLessonSlug: "the-waiver-only-one-side-gets",
          },
          {
            prompt: "What does the 1862 matching rule at § 361c(d) require the Secretary to do when a state fails to match?",
            options: ["Withhold the difference", "Grant a waiver on the institution's application", "Pay the full allotment and recover it the following year", "Refer the state to the Comptroller General for audit"],
            correctIndex: 0,
            explanation: "Withhold from payment to the state an amount equal to the difference, then reapportion it.",
            sourceLessonSlug: "the-waiver-only-one-side-gets",
          },
          {
            prompt: "What does § 361c(d) do with amounts withheld from a non-matching state?",
            options: ["Reapportions them among matching states", "Returns them to the Treasury at the end of the fiscal year", "Holds them for that state's experiment station for two years", "Transfers them to the 1890 capacity accounts"],
            correctIndex: 0,
            explanation: "The same withhold-and-move machinery exists on both sides; the difference is the waiver.",
            sourceLessonSlug: "the-waiver-only-one-side-gets",
          },
          {
            prompt: "Which jurisdictions does the only 1862 matching waiver reach?",
            options: ["Three insular areas and D.C.", "Every state whose legislature meets biennially rather than annually", "The eighteen states holding an 1890 institution", "Any state whose 1862 institution enrolls fewer than ten thousand students"],
            correctIndex: 0,
            explanation: "Puerto Rico, Guam, the U.S. Virgin Islands and the District of Columbia, which is what the word most carries.",
            sourceLessonSlug: "the-waiver-only-one-side-gets",
          },
          {
            prompt: "What matching level does § 361c(d)(4) set for those insular areas and D.C.?",
            options: ["50 per cent", "One-to-one, the same as every other 1862 recipient", "Twenty per cent, matching the 1890 extension floor", "None; they are exempt from matching entirely"],
            correctIndex: 0,
            explanation: "Fifty per cent of the formula funds distributed to each of them, and the Secretary may waive even that.",
            sourceLessonSlug: "the-waiver-only-one-side-gets",
          },
          {
            prompt: "Beginning with which fiscal year does that insular-area matching provision apply?",
            options: ["2003", "1998, when the 1890 matching section was added", "2008, when the appropriation floors were raised", "2018, when the reporting requirement was enacted"],
            correctIndex: 0,
            explanation: "The statute makes it effective beginning for fiscal year 2003.",
            sourceLessonSlug: "the-waiver-only-one-side-gets",
          },
          {
            prompt: "What does CRS say waivers do, besides letting federal money reach the institution?",
            options: ["Open funding disparities", "Trigger an automatic review of the state's appropriation", "Reduce the institution's allocation in the following year", "Transfer the matching obligation to the university itself"],
            correctIndex: 0,
            explanation: "They allow federal funding without complete state support, and in doing so open disparities between the 1890 and 1862 institutions.",
            sourceLessonSlug: "the-waiver-only-one-side-gets",
          },
          {
            prompt: "How does this course describe what a waiver is at the same time as being a mercy?",
            options: ["A permission", "An audit finding against the state", "A loan repayable from future appropriations", "A penalty on the receiving institution"],
            correctIndex: 0,
            explanation: "It keeps money flowing to the institution and removes the consequence that would otherwise fall on the state.",
            sourceLessonSlug: "the-waiver-only-one-side-gets",
          },
          {
            prompt: "Which farm bill section created the annual reporting requirement on capacity funding and matching?",
            options: ["Section 7116 of the 2018 farm bill", "Section 7129 of the 2014 farm bill, which designated Central State University", "Section 1449 of NARETPA, which created the matching requirement", "Section 7402 of the 2008 farm bill, which raised the appropriation floors"],
            correctIndex: 0,
            explanation: "Codified at 7 U.S.C. § 2207d, it requires reporting by institution and by grant programme.",
            sourceLessonSlug: "the-waiver-only-one-side-gets",
          },
          {
            prompt: "What do those annual reports publicly identify?",
            options: ["Institutions that received waivers", "The names of legislators who voted against the state match", "The specific research projects each capacity grant funded", "The amount each state would owe under a per-student calculation"],
            correctIndex: 0,
            explanation: "The reports identify institutions that received waivers for particular capacity grant programmes.",
            sourceLessonSlug: "the-waiver-only-one-side-gets",
          },
          {
            prompt: "What limit does CRS note on the transparency those reports provide?",
            options: ["They do not separate state from other non-federal money", "They are published only every five years, with the farm bill", "They omit the 1890 institutions in states that granted no waiver", "They report totals without breaking figures out by institution"],
            correctIndex: 0,
            explanation: "A match met by the university itself reads the same in the report as one appropriated by the legislature.",
            sourceLessonSlug: "the-waiver-only-one-side-gets",
          },
          {
            prompt: "Why does this course say a statutory permission is stronger evidence than a dollar estimate?",
            options: ["It cannot be argued with", "Because dollar estimates are usually calculated incorrectly", "Because statutes are more recent than the estimates built on them", "Because Congress publishes statutes and agencies publish estimates"],
            correctIndex: 0,
            explanation: "An estimate rests on a model somebody can dispute; a permission written into law rests on nothing but the text.",
            sourceLessonSlug: "the-waiver-only-one-side-gets",
          },
          {
            prompt: "Who wrote the 2013 APLU policy brief on state matching?",
            options: ["Lee and Keys", "Cardona and Vilsack, the two federal secretaries", "Croft and Bickell, the CRS analysts", "Lee and Ahtone, the land-grab universities reporters"],
            correctIndex: 0,
            explanation: "John Michael Lee, Jr. and Samaad Wes Keys, published as APLU Policy Brief 3000-PB1 in September 2013.",
            sourceLessonSlug: "counting-it-in-2013",
          },
          {
            prompt: "What period does the APLU brief's shortfall analysis cover?",
            options: ["2010 to 2012", "1987 to 2020, the range used in the 2023 federal letters", "1977 to 2008, between the two settings of the appropriation floors", "2003 to 2013, the decade before publication"],
            correctIndex: 0,
            explanation: "Three years, which is a much shorter window than the thirty-three-year range the 2023 letters use.",
            sourceLessonSlug: "counting-it-in-2013",
          },
          {
            prompt: "What extension shortfall does the APLU brief report?",
            options: ["$31,828,918", "$24,798,282, which is the research figure", "$56,627,199, which is the combined figure", "$13,055,622,416, the sum of the 2023 letter figures"],
            correctIndex: 0,
            explanation: "Extension is the larger of the two components in the brief.",
            sourceLessonSlug: "counting-it-in-2013",
          },
          {
            prompt: "What research shortfall does the APLU brief report?",
            options: ["$24,798,282", "$31,828,918, which is the extension figure", "$56,627,200, the sum of the two components", "$172,135,168, the smallest figure in the 2023 letters"],
            correctIndex: 0,
            explanation: "Research is the smaller component, and the two together are what the brief's combined figure sums.",
            sourceLessonSlug: "counting-it-in-2013",
          },
          {
            prompt: "What combined shortfall does the brief print?",
            options: ["$56,627,199", "$56,627,200, which is what its own components add to", "$31,828,918, which is the extension component", "$24,798,282, which is the research component"],
            correctIndex: 0,
            explanation: "The printed total is one dollar below what its two published components sum to.",
            sourceLessonSlug: "counting-it-in-2013",
          },
          {
            prompt: "What do the brief's two component figures actually add up to?",
            options: ["$56,627,200", "$56,627,199, exactly as the brief prints it", "$57,000,000, the round figure the highlights box uses", "$56,626,199, a thousand dollars lower than the printed total"],
            correctIndex: 0,
            explanation: "One dollar above the printed total, which is a rounding artifact and a demonstration that the habit works.",
            sourceLessonSlug: "counting-it-in-2013",
          },
          {
            prompt: "Why does this course spend a paragraph on a one-dollar discrepancy?",
            options: ["It proves the habit works", "Because it casts doubt on every other figure in the brief", "Because federal grant accounting requires exact reconciliation", "Because the brief has been corrected in a later edition"],
            correctIndex: 0,
            explanation: "The total and the components are both on the page, they reconcile with a calculator, and no summary would ever tell you.",
            sourceLessonSlug: "counting-it-in-2013",
          },
          {
            prompt: "What share of 1890 institutions did the brief find were not receiving the full match?",
            options: ["61.2 per cent", "50 per cent, matching the statutory waiver level", "82 per cent, matching the 1862 share of capacity funding", "100 per cent, since every institution applied for a waiver"],
            correctIndex: 0,
            explanation: "11 out of 18 in the brief's body, which its highlights box rounds to 61 per cent.",
            sourceLessonSlug: "counting-it-in-2013",
          },
          {
            prompt: "How many institutions does the 2013 brief count in total, and why?",
            options: ["18, before Central State was designated", "19, the count CRS reports for 2021", "16, matching the letters sent in 2023", "17, excluding Tuskegee as a private institution"],
            correctIndex: 0,
            explanation: "The brief predates the 2014 farm bill, which is why a count needs its date attached.",
            sourceLessonSlug: "counting-it-in-2013",
          },
          {
            prompt: "What does the brief say about a match met from general funds rather than a line item?",
            options: ["The absence of a waiver proves nothing", "That such a match does not satisfy the statutory requirement", "That USDA counts it at half its nominal value", "That it is the most common way states meet the obligation"],
            correctIndex: 0,
            explanation: "An institution may not have received a waiver and still not have had a specific appropriation, which is what the brief cannot see.",
            sourceLessonSlug: "counting-it-in-2013",
          },
          {
            prompt: "What does APLU say it cannot tell about the remaining eight states?",
            options: ["Whether they are also short", "Whether their institutions applied for waivers at all", "Whether their appropriations were made in the correct fiscal year", "Whether their 1862 institutions were also underfunded"],
            correctIndex: 0,
            explanation: "Many do not have a specific line item, so the brief cannot see whether those states are also losing millions.",
            sourceLessonSlug: "counting-it-in-2013",
          },
          {
            prompt: "How does this course treat a source that states what it cannot see?",
            options: ["As stronger for saying so", "As too incomplete to cite in a course of this kind", "As requiring corroboration from a second advocacy organisation", "As evidence that the underlying data is unavailable to anyone"],
            correctIndex: 0,
            explanation: "A source that tells you what it cannot see is a better source, not a weaker one.",
            sourceLessonSlug: "counting-it-in-2013",
          },
          {
            prompt: "Which shipped course is the contrast pair for the matching idea?",
            options: ["The Schoolhouse Network", "Tribal Nations and Governance, which teaches the trust responsibility", "The Name on the Door, which teaches architectural credit", "Cooperatives, which teaches the Rural Electrification Act"],
            correctIndex: 0,
            explanation: "Rosenwald's challenge grant is the private mirror of the public match this course teaches.",
            sourceLessonSlug: "counting-it-in-2013",
          },
          {
            prompt: "What kind of money was the Rosenwald match?",
            options: ["Private philanthropy", "A federal capacity grant distributed by formula", "A state appropriation required by statute", "A county tax levy earmarked for school construction"],
            correctIndex: 0,
            explanation: "A private fund conditioning its own money on contributions from named sources, including the local Black community.",
            sourceLessonSlug: "counting-it-in-2013",
          },
          {
            prompt: "What is the essential difference between the Rosenwald match and the 1890 match?",
            options: ["Obligation", "The size of the sums involved in each case", "The decade in which each arrangement operated", "Whether the recipient was a school or a university"],
            correctIndex: 0,
            explanation: "One is a community raising a share it had no duty to raise; the other is a legislature declining to pay one it had agreed to.",
            sourceLessonSlug: "counting-it-in-2013",
          },
          {
            prompt: "What does this course say reading the two matching stories together gives you?",
            options: ["The shape of the period", "A method for estimating the total value of withheld funds", "A reason to treat philanthropic and public funding as equivalent", "Grounds for concluding that private matching worked better"],
            correctIndex: 0,
            explanation: "Communities taxed for schools they could not attend, raising a private match anyway, in states not paying a public one.",
            sourceLessonSlug: "counting-it-in-2013",
          },
          {
            prompt: "In the redistribution mechanism, what did the design presumably intend?",
            options: ["To give a state a reason to pay", "To reduce total federal spending on the programme", "To concentrate capacity funding in the strongest institutions", "To let the Secretary choose which institutions to favour"],
            correctIndex: 0,
            explanation: "A state can watch its money leave, though in practice this converts one state's decision into another state's windfall.",
            sourceLessonSlug: "the-state-shall-provide",
          },
          {
            prompt: "Which section of the U.S. Code carries the 1890 matching requirement?",
            options: ["7 U.S.C. § 3222d", "7 U.S.C. § 361c, which carries the Hatch Act allotment rules", "7 U.S.C. § 323, the separate-but-equal proviso", "7 U.S.C. § 2207d, the annual reporting requirement"],
            correctIndex: 0,
            explanation: "Section 3222d, added by Public Law 105-185 in 1998, carries the matching formula, the waiver and the redistribution rule.",
            sourceLessonSlug: "the-state-shall-provide",
          },
          {
            prompt: "Which section of the U.S. Code carries the 1862 matching and withholding rules?",
            options: ["7 U.S.C. § 361c", "7 U.S.C. § 3222d, which carries the 1890 matching requirement", "7 U.S.C. § 3221, the 1890 extension capacity grant", "7 U.S.C. § 304, the investment provision of the 1862 Act"],
            correctIndex: 0,
            explanation: "Section 361c carries the allotments, the matching requirement, the withholding rule and the single insular-area waiver.",
            sourceLessonSlug: "the-waiver-only-one-side-gets",
          },
          {
            prompt: "What is the same on both sides of the match comparison?",
            options: ["A one-to-one requirement", "The availability of a waiver to any institution", "The number of institutions in each group", "The share of capacity funding each group receives"],
            correctIndex: 0,
            explanation: "Both systems require a dollar for a dollar; the difference is what happens when a state does not pay it.",
            sourceLessonSlug: "the-waiver-only-one-side-gets",
          },
          {
            prompt: "What is different on the two sides of the match comparison?",
            options: ["Who may be excused", "The proportion of the match that must be non-federal", "The agency that administers the capacity grants", "The requirement that the institution file a plan of work"],
            correctIndex: 0,
            explanation: "A waiver exists for any 1890 institution and for only four 1862 jurisdictions, none of them a state.",
            sourceLessonSlug: "the-waiver-only-one-side-gets",
          },
          {
            prompt: "What is the correct name for what an institution does when it neither obtains a waiver nor receives the state's match?",
            options: ["Forfeit", "Appeal", "Defer", "Reallocate"],
            correctIndex: 0,
            explanation: "APLU's own phrasing is apply for a waiver of the one-to-one match requirement or forfeit their funding.",
            sourceLessonSlug: "the-state-shall-provide",
          },
          {
            prompt: "How should the APLU brief's two different percentage figures be handled?",
            options: ["Quote one and say which", "Average them and report the midpoint", "Prefer the highlights box, which is the summary of record", "Report neither, since the brief contradicts itself"],
            correctIndex: 0,
            explanation: "The body says 61.2 per cent as 11 out of 18 and the highlights box rounds to 61, so blending them invents a third figure.",
            sourceLessonSlug: "counting-it-in-2013",
          },
          {
            prompt: "Which of the four Rosenwald budget columns does this course name as the community's own share?",
            options: ["Cash, land, materials and labour", "The county tax levy raised for the purpose", "The Fund's capped grant per new schoolhouse", "The contribution required of local white residents"],
            correctIndex: 0,
            explanation: "The community's contribution was made in cash, land, materials and labour valued in dollars.",
            sourceLessonSlug: "counting-it-in-2013",
          },
          {
            prompt: "What section number of NARETPA is the 1890 matching requirement?",
            options: ["§ 1449", "§ 1444, which authorizes the extension capacity grant", "§ 1445, the Evans-Allen research capacity grant", "§ 1447, the 1890 Facilities Grant Program"],
            correctIndex: 0,
            explanation: "Section 1449, added to NARETPA by Public Law 105-185 in 1998 and codified at 7 U.S.C. § 3222d.",
            sourceLessonSlug: "the-state-shall-provide",
          },
          {
            prompt: "What may an eligible institution use the matching funds for, under § 3222d(e)?",
            options: ["Research, extension and education activities", "Only the specific projects named in its plan of work", "Facilities and equipment, but not personnel costs", "Any purpose the state legislature designates"],
            correctIndex: 0,
            explanation: "Under terms the Secretary establishes, for agricultural research, extension and education activities.",
            sourceLessonSlug: "the-state-shall-provide",
          },
          {
            prompt: "What does the word notwithstanding do at the start of § 3222d(d)?",
            options: ["Overrides the redistribution rule", "Limits the waiver to fiscal years after 2003", "Requires the Secretary to consult the state legislature first", "Restricts the waiver to research rather than extension grants"],
            correctIndex: 0,
            explanation: "The waiver operates notwithstanding subsection (f), which is the provision that would otherwise redistribute the money.",
            sourceLessonSlug: "the-waiver-only-one-side-gets",
          },
          {
            prompt: "Which is the correct order of what happens to an unmatched federal capacity dollar in the 1890 system?",
            options: ["Waiver considered, then redistribution", "Redistribution first, then a waiver application", "Withholding from the state, then reapportionment", "Return to the Treasury, then reappropriation by Congress"],
            correctIndex: 0,
            explanation: "The waiver operates notwithstanding the redistribution rule, so it is the step that can prevent the money moving.",
            sourceLessonSlug: "the-waiver-only-one-side-gets",
          },
          {
            prompt: "Why can a course not read a state's appropriation directly out of the annual USDA report?",
            options: ["It does not separate the sources", "Because the report is exempt from public disclosure", "Because it aggregates all nineteen institutions into one figure", "Because it covers only the years since 2018"],
            correctIndex: 0,
            explanation: "CRS notes the reports do not distinguish between state appropriations and funds provided by other non-federal sources.",
            sourceLessonSlug: "the-waiver-only-one-side-gets",
          },
          {
            prompt: "What did the 2013 brief's Figure 2 map?",
            options: ["Matching status by state", "The location of every 1890 institution's experiment station", "The rural population share used in the extension formula", "State appropriations per student at each institution"],
            correctIndex: 0,
            explanation: "It maps whether each state provided the full one-to-one match, including the case of a state matching for only one of its 1890 institutions.",
            sourceLessonSlug: "counting-it-in-2013",
          },
          {
            prompt: "What does APLU say USDA still requires of the 1890 institutions?",
            options: ["At least 50 per cent of the match", "A plan of work approved before any waiver is granted", "Repayment of previously waived amounts once a state resumes matching", "An annual audit of all non-federal contributions"],
            correctIndex: 0,
            explanation: "Which is the same rule the statute states as a waiver available only above the 50 per cent level.",
            sourceLessonSlug: "the-waiver-only-one-side-gets",
          },
          {
            prompt: "In one sentence, what is the asymmetry this section teaches?",
            options: ["Only one side may be short", "Only one side receives federal capacity funding", "Only one side is required to provide a match", "Only one side is subject to an annual reporting requirement"],
            correctIndex: 0,
            explanation: "The same statute, the same one-to-one match, two classes of institution, and a waiver available to only one of them.",
            sourceLessonSlug: "the-waiver-only-one-side-gets",
          },
          {
            prompt: "What was added to the U.S. Code in 1998 that this section turns on?",
            options: ["The 1890 matching section", "The Smith-Lever extension appropriation", "The transparency reporting requirement", "The designation of Central State University"],
            correctIndex: 0,
            explanation: "Section 1449 of NARETPA, added by Public Law 105-185 on 23 June 1998, carries the formula, the waiver and the redistribution rule.",
            sourceLessonSlug: "the-state-shall-provide",
          },
          {
            prompt: "Which document would tell a learner which institutions took a waiver in a given year?",
            options: ["The annual USDA capacity and matching report", "The Congressional Research Service In Focus on the 1890 institutions", "The APLU policy brief on state one-to-one matching", "The letters the federal secretaries sent to governors in 2023"],
            correctIndex: 0,
            explanation: "The report required by section 7116 of the 2018 farm bill publicly identifies institutions receiving waivers by programme.",
            sourceLessonSlug: "the-waiver-only-one-side-gets",
          },
          {
            prompt: "How many jurisdictions does the phrase most 1862 Institutions leave out?",
            options: ["Four", "Nineteen, one for each 1890 institution", "Sixteen, matching the 2023 letters", "None; the phrase is a hedge with no content"],
            correctIndex: 0,
            explanation: "Puerto Rico, Guam, the U.S. Virgin Islands and the District of Columbia, which is why the sentence says most rather than all.",
            sourceLessonSlug: "the-waiver-only-one-side-gets",
          },
          {
            prompt: "What kind of evidence is a count of waivers granted in a named fiscal year?",
            options: ["Observed practice", "A statutory permission", "A modelled estimate", "An advocacy figure"],
            correctIndex: 0,
            explanation: "CRS pairs the permission written into law with what actually happened in FY2020, which is why the pair is so hard to argue with.",
            sourceLessonSlug: "the-waiver-only-one-side-gets",
          },
          {
            prompt: "Which party in this story does the statute never excuse?",
            options: ["The state, below fifty per cent", "The institution, from filing a plan of work", "The Secretary, from making the required determination", "Congress, from appropriating the statutory floor"],
            correctIndex: 0,
            explanation: "The waiver reaches only the portion above fifty per cent, so half the match is never waivable.",
            sourceLessonSlug: "the-waiver-only-one-side-gets",
          },
          {
            prompt: "What year's data does the CRS waiver count come from?",
            options: ["FY2020", "FY2021, the year the individual programme appropriations are given for", "2013, the year of the APLU policy brief", "2020 to 2023, averaged across the period"],
            correctIndex: 0,
            explanation: "Nine 1890 institutions received matching fund waivers in FY2020, as CRS reports.",
            sourceLessonSlug: "the-waiver-only-one-side-gets",
          },
          {
            prompt: "Whose behaviour does the waiver determination turn on?",
            options: ["The state's", "The institution's, and how hard it has tried to raise the match", "The Secretary's predecessor's, through a standing policy", "Congress's, through the level of the appropriation"],
            correctIndex: 0,
            explanation: "The Secretary decides whether the state will be unlikely to satisfy the matching requirement.",
            sourceLessonSlug: "the-waiver-only-one-side-gets",
          },
          {
            prompt: "What does this course say happens to a state's obligation when its 1890 institution obtains a waiver?",
            options: ["The consequence is removed", "The obligation transfers to the following fiscal year", "The state must repay the waived amount within three years", "The state loses its own 1862 allotment by the same amount"],
            correctIndex: 0,
            explanation: "The waiver keeps money reaching the institution and takes away the pressure the redistribution rule would otherwise apply.",
            sourceLessonSlug: "the-waiver-only-one-side-gets",
          },
          {
            prompt: "Which is true of both the 2013 APLU count and the CRS waiver count?",
            options: ["Each carries a date", "Each covers the same three-year period", "Each was produced by a federal agency", "Each counts nineteen institutions"],
            correctIndex: 0,
            explanation: "APLU counted 2010 to 2012 across 18 institutions and CRS counted FY2020 across 19, which is why neither figure travels without its date.",
            sourceLessonSlug: "counting-it-in-2013",
          },
          {
            prompt: "What did the 2013 brief say about states meeting the match for their 1862 institutions?",
            options: ["All of them were", "About half of them were", "The brief did not examine the 1862 side", "Only the states without an 1890 institution were"],
            correctIndex: 0,
            explanation: "The brief says all states are meeting the one-to-one requirement for their 1862 institutions while the majority do not for the 1890s, which is the same contrast CRS reports eight years later.",
            sourceLessonSlug: "counting-it-in-2013",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 5 — Counting it, and arguing about the count
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "sixteen-letters",
      title: "17 · Sixteen letters",
      section: "Section 5 · Counting it, and arguing about the count",
      body: `On 18 September 2023 the Secretary of Education and the Secretary of Agriculture sent the same letter, with one number changed, to sixteen governors.

**USDA's own press release states the headline** as "the over $12 billion disparity in funding between land-grant Historically Black Colleges and Universities (HBCUs) and their non-HBCU land-grant peers in their states" (U.S. Department of Agriculture [USDA], 2023).

**Sixteen letters, eighteen states, and the release closes the arithmetic itself:** "There are HBCU land-grant institutions in 18 states; however, Delaware and Ohio have equitably funded their respective universities" (USDA, 2023). So the two states that did not get a letter are named, and the reason is given.

**The method, in the letters' own words:** "Using readily available data from the National Center for Education Statistics (NCES) Integrated Postsecondary Education Survey (IPEDS) that ranges from 1987 to 2020, we calculated the amount that these institutions would have received if their state funding per student were equal to that of 1862 institutions" (Cardona & Vilsack, 2023).

**Here is every figure, taken from the letter rather than from coverage of it** (Cardona & Vilsack, 2023). Press reporting disagreed about which institution had the largest gap, and the letters settle it:

| State | 1890 institution | Amount |
| --- | --- | --- |
| Tennessee | Tennessee State University | $2,147,784,704 |
| North Carolina | North Carolina A&T State University | $2,079,934,848 |
| Florida | Florida Agricultural and Mechanical University | $1,973,081,216 |
| Texas | Prairie View A&M University | $1,135,496,704 |
| Louisiana | Southern University and A&M College | $1,126,149,248 |
| West Virginia | West Virginia State University | $852,622,464 |
| Georgia | Fort Valley State University | $603,156,480 |
| Alabama | Alabama A&M University | $527,280,064 |
| South Carolina | South Carolina State University | $469,956,832 |
| Oklahoma | Langston University | $418,986,272 |
| Missouri | Lincoln University | $361,569,760 |
| Arkansas | University of Arkansas at Pine Bluff | $330,935,712 |
| Maryland | University of Maryland Eastern Shore | $321,181,312 |
| Virginia | Virginia State University | $277,544,416 |
| Mississippi | Alcorn State University | $257,807,216 |
| Kentucky | Kentucky State University | $172,135,168 |

**Now add them up, because that is the exercise.** The sixteen figures sum to **$13,055,622,416**. USDA's release says "over $12 billion", which is true of that sum. Press coverage said "$13 billion", which is the same sum rounded the other way. **Both are defensible and neither is a different measurement**, and you can settle in five minutes an apparent discrepancy that has been repeated in print for three years.

**Two details in the letters worth noticing.** Alabama's letter names **only Alabama A&M**, against Auburn University, and does not reach Tuskegee, because Tuskegee is private and a state-appropriations comparison has nothing to compare. And the letters do not simply demand money: they suggest "a substantial state allocation toward the 1890 deficit combined with a forward-looking budget commitment for a two-to-one match of federal land-grant funding", and say expressly that "it is not necessary to reduce funding to other institutions" (Cardona & Vilsack, 2023).

**The sentence that tells you what the letters were for:** "This is a situation that clearly predates all of us. However, it is a problem that we can work together to solve. In fact, it is our hope that we can collaborate to avoid burdensome and costly litigation that has occurred in several states" (Cardona & Vilsack, 2023).

:::reveal How many governors received a letter, how many states hold an 1890 institution, and how does the difference resolve? ||| Sixteen letters against eighteen states, because USDA's release says Delaware and Ohio had funded their institutions equitably.

:::reveal What did the departments actually calculate? ||| What each 1890 institution would have received between 1987 and 2020 if its state funding per student had equalled that of the state's 1862 institution.

:::reveal What do the sixteen published figures add up to? ||| $13,055,622,416, which is consistent both with USDA's over $12 billion and with the $13 billion that appeared in press coverage.

## Vocabulary
- **Per-student state funding**: state appropriations divided by enrollment, the unit the 2023 analysis used to compare two institutions of very different size.
- **Counterfactual**: the amount an institution would have received under a stated alternative rule, which is what the letters compute rather than a sum anyone was billed.
- **IPEDS**: the Integrated Postsecondary Education Data System, the federal collection the departments drew their state-funding and enrollment data from.
- **Two-to-one match**: the forward-looking budget commitment the letters suggest alongside a one-time allocation, meaning two state dollars for each federal land-grant dollar.

## Sources
Cardona, M., & Vilsack, T. J. (2023, September 18). *Letters to state governors regarding 1890 land-grant institutions* [Letters]. U.S. Department of Education. https://sites.ed.gov/whhbcu/files/2023/09/Secretary-letter-1890.pdf

U.S. Department of Agriculture. (2023, September 18). *Secretaries of Education, Agriculture call on governors to equitably fund land-grant HBCUs* (Release No. 0188.23). https://www.usda.gov/about-usda/news/press-releases/2023/09/18/secretaries-education-agriculture-call-governors-equitably-fund-land-grant-hbcus`,
    },
    {
      slug: "the-objection-named",
      title: "18 · The objection, named",
      section: "Section 5 · Counting it, and arguing about the count",
      body: `A course that presents the $12 billion as a settled debt is doing advocacy. The objection to the method is real, it has been made by named officials in writing, and you should be able to state it before you decide what you think.

**Start with the structure of the calculation.** The departments took each state's per-student appropriation to its **1862** institution, applied that rate to the **1890** institution's enrollment, and summed the difference across 1987 to 2020. Everything follows from that one modelling choice.

**So the strongest general objection is not political.** A research-intensive flagship with a medical school, a veterinary school and a doctoral research enterprise has a legitimately higher cost per student than a smaller teaching-focused institution. To the extent that is true, part of the computed gap measures **what the two institutions do** rather than how they were treated. That is a real argument and it has to be answered rather than dismissed.

**Two named officials made narrower and more checkable versions of it.**

**Virginia.** Secretary of Education **Aimee Rogstad Guidera** replied to Cardona and Vilsack in a letter dated 4 October 2023. Her claim is factual rather than rhetorical: "Based on reliable data from state-maintained finance, accounting and education systems, the Commonwealth has funded VSU well above Virginia Tech on a per student basis in aggregate, since 1994", noting that 1994 is when the state began holding reliable college data (Spitalniak, 2023). She also argued that IPEDS has "well-documented" problems that prevent it collecting quality student-level data, citing a 2016 Institute for Higher Education Policy report finding the database "can not flexibly adapt as data needs evolve and doesn't accurately represent all enrolled students, especially those that are part time and low income" (Spitalniak, 2023). **Note what that dispute actually is: two datasets, one federal and one state, disagreeing about the same appropriations.** That is settleable, and it is the right kind of argument to be having.

**Kentucky.** **David Givens**, president pro tempore of the state Senate, told WLEX-TV in September that Kentucky State University is overfunded when measured by metrics such as full-time equivalent students: "My initial reaction to the letter was to be perplexed. Knowing what we did in the last budget and prior budgets, knowing that we have met or exceeded every budget recommendation from both Republican and Democratic governors as it relates to KSU" (Spitalniak, 2023). **His objection is a denominator objection.** Headcount and full-time equivalent enrollment are different numbers, and per-student figures move when you change which one you divide by.

**And named officials pushed the other way, in the same reporting.** Georgia Representatives Sandra Scott, Viola Davis and Kim Schofield threatened legal action over the $603 million gap at Fort Valley State. Oklahoma Senator George Young said of Langston's $419 million that "this 'oversight' has been well publicized and investigated. It is time to correct it", and Representative Jason Lowe said "clearly, Democrats and Republicans have failed this great institution". Mississippi Representative Alyce Clarke said of Alcorn State that "MSU is not to blame for receiving the funding it has received over the years to grow and prosper. However, it is unfair to Alcorn State students when their institution did not receive the same equity in funding" (Spitalniak, 2023).

**One state had already done its own arithmetic.** A 2021 Tennessee study found that Tennessee State University "may have missed out on up to $544 million in state funding" (Spitalniak, 2023). That is a state government's own figure, produced before the federal letters, and it is smaller than the federal one for the same institution by a factor of about four. **Both numbers can be honestly produced, because they are answering different questions over different periods.**

**Now the move this whole course is built to make.** The per-student argument can be had forever, because it rests on a model. **The matching argument cannot**, because it rests on whether a state paid a statutory obligation, and USDA publishes the answer by institution every year. So: **use the letters as the current chapter, and build on the match.**

:::reveal What is the structural objection to the 2023 calculation? ||| That applying the flagship's per-student appropriation to the 1890 institution's enrollment may partly measure the difference in what the two institutions do rather than how they were treated.

:::reveal What kind of dispute is Virginia's objection, at bottom? ||| A dispute between two datasets, federal IPEDS and the state's own finance and accounting systems, about the same appropriations, which is settleable.

:::reveal Why does this course build on the match rather than on the $12 billion? ||| Because the per-student figure rests on a model that can be argued with, while whether a state met a statutory match is published by institution every year.

## Vocabulary
- **Mission mix**: the difference in what institutions do, such as running medical and veterinary schools, which can raise legitimate cost per student and so confound a per-student comparison.
- **Denominator objection**: an argument that a per-student figure is wrong because the wrong enrollment measure was used, such as headcount rather than full-time equivalent.
- **Full-time equivalent**: an enrollment measure that converts part-time students into fractions of a full-time one, which usually produces a smaller number than headcount.
- **Settleable dispute**: a disagreement that could be resolved by examining the underlying records, as distinct from one that turns on a value judgment.

## Sources
Spitalniak, L. (2023, October 10). *Lawmakers press state leaders on land-grant HBCU funding gaps*. Higher Ed Dive. https://www.highereddive.com/news/lawmakers-react-hbcu-funding-disparities-biden/696035/`,
    },
    {
      slug: "a-remedy-without-money",
      title: "19 · A remedy that arrives without money",
      section: "Section 5 · Counting it, and arguing about the count",
      body: `A course that stopped at 2023 would imply that a remedy arrived. Here is what actually happened next, dated, and with the parts this course could not read marked as unread.

**In March 2026, USDA and the Council of 1890 University Presidents signed a memorandum of understanding.** West Virginia State University, one of the nineteen and therefore a party, dates the signing to **5 March 2026** and describes the agreement as establishing "a joint Task Force comprised of agency heads appointed by Secretary Rollins and 1890 Presidents", which is "mandated to meet at least twice a year" (West Virginia State University, 2026). The same announcement describes commitments on workforce development, personnel exchange between the department and the institutions, and USDA liaisons providing regional support to farmers, ranchers and foresters, and aligns the agreement with Executive Order 14283.

**Inside Higher Ed's account adds the context that makes it legible.** Harry L. Williams, chief executive of the Thurgood Marshall College Fund, told the publication that USDA has signed agreements of this kind "since Ronald Reagan, often at the start of a new administration" (Inside Higher Ed, 2026). Felecia M. Nave of the 1890 Universities Foundation said the agreement "builds on prior efforts while placing a stronger emphasis on ensuring that our work is not just symbolic, but truly actionable", and West Virginia State's president Ericke S. Cage described it as a forum to raise issues (Inside Higher Ed, 2026).

**What this course can say, and what it cannot.** Neither the signing institutions' own announcements nor the trade-press reporting names a dollar figure in the agreement, and the reporting frames it as a partnership and access commitment rather than an appropriation. **This course did not read the memorandum itself**, so it does not tell you what the text does or does not contain. That gap is filed as an open source check rather than papered over, because the difference between "the reporting names no money" and "the document contains no money" is exactly the kind of difference this catalog exists to keep visible.

**Here is the shape of the thing, though, and it is the honest ending.** In September 2023, two federal secretaries put a documented number in front of sixteen governors. In March 2026, the outcome visible in the public record is a task force that meets twice a year. **The distance between those two sentences is the lesson.**

**And this is the fourth time you have watched the same move in one statute family.** A benefit is created. A class is excluded. A separate, smaller channel is built. The channel is permitted to go unmatched by the party obliged to fund it, and the remedy, when it comes, is sized against somebody else's number or arrives without a number at all:

| Where | The move |
| --- | --- |
| 1890 | Separate maintenance deemed compliance, with the state writing the division |
| 1887 to 1977 | Not eligible for the capacity grants that made the other system powerful |
| 1977 onward | A remedy sized as a percentage of the other class's appropriation |
| Today | A waiver only one class may receive, and a match only one class is allowed to miss |

**Once you can see the move, you can see it outside this subject**, and that is what this course is finally for. When you meet a benefit with a separate channel attached, ask three questions. Who is obliged to fund the channel? What happens to them if they do not? And who publishes the answer?

:::reveal What did the March 2026 memorandum of understanding establish, according to a signing institution's own announcement? ||| A joint task force of USDA agency heads and 1890 presidents, mandated to meet at least twice a year, alongside commitments on workforce development, personnel exchange and USDA liaisons.

:::reveal Why does this course refuse to say the memorandum contains no money? ||| Because it did not read the document, only the parties' announcements and the reporting, and the difference between the reporting naming no money and the text containing none is exactly what should stay visible.

:::reveal What three questions does this course leave you with for any benefit with a separate channel attached? ||| Who is obliged to fund the channel, what happens to them if they do not, and who publishes the answer.

## Vocabulary
- **Memorandum of understanding**: an agreement recording intentions and structures for cooperation, which may carry no appropriation and no enforceable obligation to spend.
- **Task force**: the standing body of agency officials and institutional heads the 2026 agreement establishes, with a stated meeting frequency and no stated budget.
- **The move**: this course's name for the recurring design pattern of creating a benefit, excluding a class, building a smaller separate channel, and permitting that channel to go unfunded.
- **Unread document**: a source a course knows exists and has not examined, which must be labelled as such rather than characterised from coverage.

## Sources
Inside Higher Ed. (2026, March 19). *Historically Black land-grants celebrate USDA agreement*. https://www.insidehighered.com/news/government/politics-elections/2026/03/19/historically-black-land-grants-celebrate-usda

West Virginia State University. (2026). *USDA and Council of 1890 Universities sign landmark agreement to advance agricultural excellence and federal equity*. https://wvstateu.edu/news/usda-and-council-of-1890-universities-sign-landmark-agreement-to-advance-agricultural-excellence-and-federal-equity/`,
    },
    {
      slug: "quiz-counting-it",
      title: "20 · Knowledge check: counting it",
      section: "Section 5 · Counting it, and arguing about the count",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "On what date did the two federal secretaries send their letters to governors?",
            options: ["18 September 2023", "10 October 2023, the date of the trade-press round-up of reactions", "4 October 2023, the date of Virginia's reply", "5 March 2026, the date of the USDA memorandum of understanding"],
            correctIndex: 0,
            explanation: "USDA release 0188.23, dated 18 September 2023, announced the letters the same day they were sent.",
            sourceLessonSlug: "sixteen-letters",
          },
          {
            prompt: "How many governors received a letter?",
            options: ["16", "18, one for each state holding an 1890 institution", "19, one for each 1890 institution", "50, since the analysis covered every state"],
            correctIndex: 0,
            explanation: "Sixteen letters, and USDA's release names all sixteen governors and their states.",
            sourceLessonSlug: "sixteen-letters",
          },
          {
            prompt: "Which two states holding an 1890 institution did not receive a letter?",
            options: ["Delaware and Ohio", "Alabama and Tennessee, whose institutions had already sued", "Maryland and Virginia, whose figures were the smallest", "Missouri and Kentucky, which had already commissioned their own studies"],
            correctIndex: 0,
            explanation: "USDA's release says both had equitably funded their respective universities.",
            sourceLessonSlug: "sixteen-letters",
          },
          {
            prompt: "What figure does USDA's own press release give?",
            options: ["Over $12 billion", "Exactly $13 billion, the sum of the sixteen letters", "$13,055,622,416, computed from the letters", "$56,627,199, the 2013 policy brief's combined shortfall"],
            correctIndex: 0,
            explanation: "The release says over $12 billion, which is the official wording for a sum that is in fact just over thirteen.",
            sourceLessonSlug: "sixteen-letters",
          },
          {
            prompt: "What do the sixteen published letter figures add up to?",
            options: ["$13,055,622,416", "$12,000,000,000, exactly matching the press release", "$544 million, matching Tennessee's own 2021 study", "$56,627,200, the corrected 2013 shortfall total"],
            correctIndex: 0,
            explanation: "Adding the sixteen figures settles an apparent discrepancy that has been repeated in print for years.",
            sourceLessonSlug: "sixteen-letters",
          },
          {
            prompt: "How does the sum of the letters reconcile the over $12 billion and $13 billion figures?",
            options: ["Both describe the same sum", "It shows the press figure was a different calculation", "It shows the official figure excluded two states", "It shows neither figure can be reproduced from the letters"],
            correctIndex: 0,
            explanation: "Over $12 billion is true of $13.06 billion, and $13 billion is that same sum rounded the other way.",
            sourceLessonSlug: "sixteen-letters",
          },
          {
            prompt: "Which state's 1890 institution carries the largest figure in the letters?",
            options: ["Tennessee", "North Carolina, whose figure is just over $2 billion", "Florida, whose figure approaches $2 billion", "Texas, whose figure exceeds $1.1 billion"],
            correctIndex: 0,
            explanation: "Tennessee State University at $2,147,784,704, narrowly ahead of North Carolina A&T.",
            sourceLessonSlug: "sixteen-letters",
          },
          {
            prompt: "Which state's 1890 institution carries the smallest figure?",
            options: ["Kentucky", "Mississippi, whose figure is just under $258 million", "Virginia, whose figure is just under $278 million", "Maryland, whose figure is just over $321 million"],
            correctIndex: 0,
            explanation: "Kentucky State University at $172,135,168, which is the bottom of the range the press release gives.",
            sourceLessonSlug: "sixteen-letters",
          },
          {
            prompt: "What range does the press release give for the figures across the sixteen states?",
            options: ["$172 million to $2.1 billion", "$56 million to $12 billion, covering both federal analyses", "$361 million to $2.1 billion, excluding the smallest three", "$544 million to $2.1 billion, matching Tennessee's own study at the low end"],
            correctIndex: 0,
            explanation: "The range runs from Kentucky State at the bottom to Tennessee State at the top.",
            sourceLessonSlug: "sixteen-letters",
          },
          {
            prompt: "Which data system did the departments use?",
            options: ["IPEDS", "The Census of Agriculture published by NASS", "The annual USDA capacity and matching report required in 2018", "State budget documents obtained by records request"],
            correctIndex: 0,
            explanation: "The NCES Integrated Postsecondary Education Data System, covering 1987 to 2020.",
            sourceLessonSlug: "sixteen-letters",
          },
          {
            prompt: "What period does the 2023 analysis cover?",
            options: ["1987 to 2020", "2010 to 2012, the period the APLU brief examined", "1890 to 2020, the whole life of the institutions", "1977 to 2023, from NARETPA to the letters"],
            correctIndex: 0,
            explanation: "Thirty-three years of IPEDS data, which the letters describe as the last thirty years.",
            sourceLessonSlug: "sixteen-letters",
          },
          {
            prompt: "What exactly did the departments calculate?",
            options: ["A counterfactual per-student amount", "The unpaid balance of the statutory one-to-one match", "The value of land the 1890 institutions never received", "The federal capacity funding withheld between 1887 and 1977"],
            correctIndex: 0,
            explanation: "What each institution would have received if its state funding per student had equalled that of the 1862 institution.",
            sourceLessonSlug: "sixteen-letters",
          },
          {
            prompt: "Which Alabama institution does the Alabama letter name?",
            options: ["Alabama A&M University", "Tuskegee University, the state's other 1890 institution", "Both of Alabama's 1890 institutions, with separate figures", "Auburn University, as the recipient of the excess funding"],
            correctIndex: 0,
            explanation: "Only Alabama A&M, compared against Auburn, because a state-appropriations comparison has nothing to compare for a private university.",
            sourceLessonSlug: "sixteen-letters",
          },
          {
            prompt: "Why does the Alabama letter not reach Tuskegee?",
            options: ["Tuskegee is private", "Tuskegee lost its 1890 designation before 1987", "Tuskegee's figure was reported in a separate letter to the legislature", "Alabama had already funded Tuskegee equitably"],
            correctIndex: 0,
            explanation: "A comparison of state appropriations per student has no state appropriation to measure at a private institution.",
            sourceLessonSlug: "sixteen-letters",
          },
          {
            prompt: "What forward-looking commitment do the letters suggest alongside a one-time allocation?",
            options: ["A two-to-one match of federal land-grant funding", "A permanent transfer of the 1862 institution's research budget", "An annual audit of the state's higher education appropriations", "A constitutional amendment protecting the institution's funding"],
            correctIndex: 0,
            explanation: "The letters suggest a substantial state allocation toward the deficit plus a budget commitment for a two-to-one match.",
            sourceLessonSlug: "sixteen-letters",
          },
          {
            prompt: "What do the letters say expressly about other institutions' funding?",
            options: ["It need not be reduced", "It should be frozen until the gap is closed", "It should be redirected to the 1890 institution over five years", "It falls outside the departments' authority to discuss"],
            correctIndex: 0,
            explanation: "The letters say it is not necessary to reduce funding to other institutions, or the institution's own general fund allocation.",
            sourceLessonSlug: "sixteen-letters",
          },
          {
            prompt: "What outcome do the letters say the secretaries hope to avoid?",
            options: ["Litigation", "A congressional hearing on state higher-education funding", "A reduction in the states' federal capacity allotments", "The loss of the institutions' land-grant designation"],
            correctIndex: 0,
            explanation: "The letters say they hope to collaborate to avoid burdensome and costly litigation that has occurred in several states.",
            sourceLessonSlug: "sixteen-letters",
          },
          {
            prompt: "What is the release number of USDA's 2023 announcement?",
            options: ["0188.23", "IF11847, which is the CRS product number", "3000-PB1, which is the APLU brief's report number", "113-79, which is the 2014 farm bill's public law number"],
            correctIndex: 0,
            explanation: "Release No. 0188.23, dated 18 September 2023.",
            sourceLessonSlug: "sixteen-letters",
          },
          {
            prompt: "What does this course say a learner should take per-institution figures from?",
            options: ["The letter", "Whichever news outlet reported the figure first", "The press release, which lists them all by state", "The 2013 policy brief, which is the earlier count"],
            correctIndex: 0,
            explanation: "Press reporting disagreed about which institution had the largest gap; the letters settle it and the press release gives only the range.",
            sourceLessonSlug: "sixteen-letters",
          },
          {
            prompt: "What is the single modelling choice everything in the 2023 analysis follows from?",
            options: ["Applying the 1862 per-student rate", "Choosing 1987 as the start year of the series", "Excluding private institutions from the comparison", "Using state rather than federal appropriations"],
            correctIndex: 0,
            explanation: "The flagship's per-student appropriation applied to the 1890 institution's enrollment is the assumption the whole figure rests on.",
            sourceLessonSlug: "the-objection-named",
          },
          {
            prompt: "What is the strongest general objection to that choice?",
            options: ["Mission mix", "That IPEDS data begins only in 1987", "That state appropriations are not the largest source of institutional revenue", "That the comparison ignores federal capacity funding entirely"],
            correctIndex: 0,
            explanation: "A flagship with medical and veterinary schools has legitimately higher cost per student, so part of the gap may measure what the institutions do.",
            sourceLessonSlug: "the-objection-named",
          },
          {
            prompt: "Who replied for Virginia, and in what capacity?",
            options: ["Aimee Rogstad Guidera, Secretary of Education", "Glenn Youngkin, the governor, in a public statement", "The president of Virginia State University, on the institution's behalf", "David Givens, president pro tempore of the state Senate"],
            correctIndex: 0,
            explanation: "Guidera replied to Cardona and Vilsack in a letter dated 4 October 2023.",
            sourceLessonSlug: "the-objection-named",
          },
          {
            prompt: "What does Virginia's reply claim about VSU and Virginia Tech since 1994?",
            options: ["VSU was funded above Virginia Tech per student", "Both institutions were funded identically per student", "Virginia Tech was funded above VSU, but by less than the federal figure", "The state holds no data that would allow a comparison"],
            correctIndex: 0,
            explanation: "Guidera says state-maintained finance and accounting systems show the Commonwealth funded VSU well above Virginia Tech per student in aggregate since 1994.",
            sourceLessonSlug: "the-objection-named",
          },
          {
            prompt: "Why does Virginia's reply name 1994 specifically?",
            options: ["Reliable state college data begins then", "It is the year the tribal colleges received land-grant status", "It is the year the federal analysis was originally commissioned", "It is the year Virginia State University last received a state capital appropriation"],
            correctIndex: 0,
            explanation: "Guidera says that is when the state began having reliable college data.",
            sourceLessonSlug: "the-objection-named",
          },
          {
            prompt: "What report does Virginia's reply cite against IPEDS?",
            options: ["A 2016 Institute for Higher Education Policy report", "A 2012 Government Accountability Office audit of federal data collection", "A 2021 Tennessee state study of its own land-grant funding", "The 2013 APLU policy brief on state matching funds"],
            correctIndex: 0,
            explanation: "The cited finding is that the database cannot adapt as data needs evolve and misrepresents part-time and low-income students.",
            sourceLessonSlug: "the-objection-named",
          },
          {
            prompt: "What kind of dispute does this course say Virginia's objection actually is?",
            options: ["Two datasets about the same appropriations", "A disagreement about what counts as equitable funding", "A constitutional question about state sovereignty", "A dispute about which institution is the real flagship"],
            correctIndex: 0,
            explanation: "Federal IPEDS against the state's own finance systems, which is settleable and the right kind of argument to be having.",
            sourceLessonSlug: "the-objection-named",
          },
          {
            prompt: "Who made Kentucky's objection?",
            options: ["David Givens, Senate president pro tempore", "Andy Beshear, the governor who received the letter", "The president of Kentucky State University", "Aimee Rogstad Guidera, speaking for a neighbouring state"],
            correctIndex: 0,
            explanation: "Givens told WLEX-TV in September 2023 that KSU is overfunded on full-time equivalent metrics.",
            sourceLessonSlug: "the-objection-named",
          },
          {
            prompt: "What kind of objection is Kentucky's, in this course's terms?",
            options: ["A denominator objection", "A data-integrity objection about IPEDS collection", "A jurisdictional objection about federal authority", "A timing objection about the start year of the series"],
            correctIndex: 0,
            explanation: "Headcount and full-time equivalent enrollment are different numbers, and per-student figures move when the denominator changes.",
            sourceLessonSlug: "the-objection-named",
          },
          {
            prompt: "Which enrollment measure did Kentucky's objection prefer?",
            options: ["Full-time equivalent", "Headcount, including all part-time students", "First-time full-time freshmen only", "Degrees awarded rather than students enrolled"],
            correctIndex: 0,
            explanation: "Full-time equivalent converts part-time students into fractions, which usually gives a smaller denominator than headcount.",
            sourceLessonSlug: "the-objection-named",
          },
          {
            prompt: "Which three Georgia legislators threatened legal action over the Fort Valley State gap?",
            options: ["Scott, Davis and Schofield", "Young, Lowe and Clarke", "Givens, Guidera and Parson", "Cardona, Vilsack and Rollins"],
            correctIndex: 0,
            explanation: "Representatives Sandra Scott, Viola Davis and Kim Schofield, over the $603 million figure.",
            sourceLessonSlug: "the-objection-named",
          },
          {
            prompt: "Which Oklahoma legislator said the oversight had been well publicized and investigated?",
            options: ["Senator George Young", "Representative Jason Lowe, who said both parties had failed the institution", "Representative Alyce Clarke, speaking about Alcorn State", "Senate President Pro Tempore David Givens"],
            correctIndex: 0,
            explanation: "Young was speaking about Langston University's $419 million figure.",
            sourceLessonSlug: "the-objection-named",
          },
          {
            prompt: "What did Mississippi Representative Alyce Clarke say about Mississippi State University?",
            options: ["It is not to blame", "It should return part of its appropriation to Alcorn State", "It had misreported its own enrollment to IPEDS", "It had been underfunded on the same measure"],
            correctIndex: 0,
            explanation: "She said MSU is not to blame for the funding it received, and that the unfairness falls on Alcorn State's students.",
            sourceLessonSlug: "the-objection-named",
          },
          {
            prompt: "What did Tennessee's own 2021 study find about Tennessee State University?",
            options: ["It may have missed out on up to $544 million", "It had been funded above its 1862 peer since 1994", "It was owed exactly the amount the federal letter later named", "It could not be compared with any other institution in the state"],
            correctIndex: 0,
            explanation: "A state government's own figure, produced before the federal letters and about four times smaller for the same institution.",
            sourceLessonSlug: "the-objection-named",
          },
          {
            prompt: "How does this course explain the gap between Tennessee's $544 million and the federal $2.1 billion?",
            options: ["Different questions over different periods", "One of the two studies made an arithmetic error", "The state study excluded federal capacity funding", "The federal figure includes the statutory match shortfall"],
            correctIndex: 0,
            explanation: "Both numbers can be honestly produced, because they are not measuring the same thing.",
            sourceLessonSlug: "the-objection-named",
          },
          {
            prompt: "What does this course say a course does if it presents the $12 billion as a settled debt?",
            options: ["Advocacy", "A public service to the institutions concerned", "A correct reading of a federal finding", "An error of arithmetic rather than of judgment"],
            correctIndex: 0,
            explanation: "The objection is real, has been made in writing by named officials, and has to be stated before a learner decides.",
            sourceLessonSlug: "the-objection-named",
          },
          {
            prompt: "Which argument does this course say can be had forever?",
            options: ["The per-student one", "The one about whether a state met its statutory match", "The one about which institutions hold 1890 status", "The one about whether the 1890 Act granted land"],
            correctIndex: 0,
            explanation: "It rests on a model, whereas the match rests on whether a state paid an obligation USDA publishes annually.",
            sourceLessonSlug: "the-objection-named",
          },
          {
            prompt: "On what date does West Virginia State University say the USDA agreement was signed?",
            options: ["5 March 2026", "19 March 2026, the date of the trade-press report", "18 September 2023, the date of the federal letters", "20 October 1994, the date of the tribal college designation"],
            correctIndex: 0,
            explanation: "The date comes from a signing institution's own announcement, which makes it a party's account rather than a summary.",
            sourceLessonSlug: "a-remedy-without-money",
          },
          {
            prompt: "Who signed the 2026 agreement with USDA?",
            options: ["The Council of 1890 University Presidents", "The Association of Public and Land-grant Universities", "The sixteen governors who received the 2023 letters", "The Thurgood Marshall College Fund"],
            correctIndex: 0,
            explanation: "USDA and the Council of 1890 University Presidents, per the signing institutions' announcements.",
            sourceLessonSlug: "a-remedy-without-money",
          },
          {
            prompt: "What does the 2026 agreement establish, per the signing institution's announcement?",
            options: ["A joint task force", "A new capacity grant programme for the 1890 institutions", "A federal fund to close the state funding gaps", "A binding schedule of state matching payments"],
            correctIndex: 0,
            explanation: "A joint task force of agency heads and 1890 presidents, mandated to meet at least twice a year.",
            sourceLessonSlug: "a-remedy-without-money",
          },
          {
            prompt: "How often is that task force mandated to meet?",
            options: ["At least twice a year", "Quarterly, in each of the four USDA regions", "Once each Congress, before the farm bill is drafted", "Whenever the Secretary of Agriculture convenes it"],
            correctIndex: 0,
            explanation: "At least twice a year, per the announcement, with no stated budget attached.",
            sourceLessonSlug: "a-remedy-without-money",
          },
          {
            prompt: "Which executive order does the signing institution's announcement align the agreement with?",
            options: ["Executive Order 14283", "Executive Order 9066", "Executive Order 10730", "Executive Order 11246"],
            correctIndex: 0,
            explanation: "Described in the announcement as the White House initiative to promote excellence and innovation at HBCUs.",
            sourceLessonSlug: "a-remedy-without-money",
          },
          {
            prompt: "What did Harry L. Williams of the Thurgood Marshall College Fund say about agreements of this kind?",
            options: ["USDA has signed them since Reagan", "That this was the first such agreement in the department's history", "That previous versions had all carried appropriations", "That the 1890 institutions had declined to sign earlier ones"],
            correctIndex: 0,
            explanation: "He told Inside Higher Ed they have been signed since Ronald Reagan, often at the start of a new administration.",
            sourceLessonSlug: "a-remedy-without-money",
          },
          {
            prompt: "What did Felecia M. Nave of the 1890 Universities Foundation emphasise about the agreement?",
            options: ["That the work be actionable rather than symbolic", "That it would close the funding gap within a decade", "That it superseded the 2023 letters", "That it required no action from the states"],
            correctIndex: 0,
            explanation: "She said it builds on prior efforts while placing a stronger emphasis on the work not being merely symbolic.",
            sourceLessonSlug: "a-remedy-without-money",
          },
          {
            prompt: "What does this course say it did NOT do with the 2026 memorandum?",
            options: ["Read it", "Report its signing date", "Name the parties to it", "Describe the task force it establishes"],
            correctIndex: 0,
            explanation: "It worked from the parties' announcements and the reporting, and says so rather than characterising a text it has not seen.",
            sourceLessonSlug: "a-remedy-without-money",
          },
          {
            prompt: "What distinction does this course insist on keeping visible about the memorandum?",
            options: ["Reporting names no money against the text containing none", "A signed agreement against a proposed one", "A federal action against a state action", "A task force against a working group"],
            correctIndex: 0,
            explanation: "The gap is filed as an open source check rather than papered over with a confident sentence.",
            sourceLessonSlug: "a-remedy-without-money",
          },
          {
            prompt: "How does this course describe the distance between September 2023 and March 2026?",
            options: ["The lesson", "An administrative delay of no particular significance", "Evidence that the states have complied", "Proof that the federal analysis was withdrawn"],
            correctIndex: 0,
            explanation: "A documented number put in front of sixteen governors, and, in the public record, a task force that meets twice a year.",
            sourceLessonSlug: "a-remedy-without-money",
          },
          {
            prompt: "How many times does this course say you have watched the same design move by the end?",
            options: ["Four", "Once, in the 1890 proviso", "Two, in 1890 and 1977", "Nine, once for each institution that took a waiver"],
            correctIndex: 0,
            explanation: "The 1890 proviso, the ineligibility, the remedy sized as a fraction, and the waiver only one class may receive.",
            sourceLessonSlug: "a-remedy-without-money",
          },
          {
            prompt: "What are the three questions this course leaves a learner with?",
            options: ["Who funds it, what if they do not, who publishes", "Who wrote it, who signed it, who benefits", "How much, how long, how often", "Which statute, which agency, which court"],
            correctIndex: 0,
            explanation: "Who is obliged to fund the separate channel, what happens to them if they do not, and who publishes the answer.",
            sourceLessonSlug: "a-remedy-without-money",
          },
          {
            prompt: "Why would stopping this course at 2023 be dishonest?",
            options: ["It would imply a remedy arrived", "It would omit the 2013 policy brief that preceded it", "It would exclude the states that were not sent letters", "It would rest the course on a contested figure"],
            correctIndex: 0,
            explanation: "The visible outcome three years later is a task force, and a course that ends on the letters implies otherwise.",
            sourceLessonSlug: "a-remedy-without-money",
          },
          {
            prompt: "Which of these is the clearest example of the design move as this course names it?",
            options: ["A separate channel nobody is compelled to fund", "A competitive grant awarded by peer review", "A statute that names one institution by name", "A data system with documented collection problems"],
            correctIndex: 0,
            explanation: "A benefit created, a class excluded, a smaller separate channel built, and that channel permitted to go unmatched.",
            sourceLessonSlug: "a-remedy-without-money",
          },
          {
            prompt: "What is the reported figure for the gap between Virginia Tech and Virginia State?",
            options: ["Roughly $275 million", "Roughly $603 million, the Georgia figure", "Roughly $419 million, the Oklahoma figure", "Roughly $544 million, Tennessee's own study figure"],
            correctIndex: 0,
            explanation: "Higher Ed Dive reports roughly $275 million over a thirty-year period, against the letter's $277,544,416.",
            sourceLessonSlug: "the-objection-named",
          },
          {
            prompt: "What did Missouri lawmakers propose in response to the Lincoln University figure?",
            options: ["A study of the funding history", "Immediate payment of the full amount named in the letter", "A constitutional amendment protecting the institution", "Litigation against the Department of Education"],
            correctIndex: 0,
            explanation: "A bipartisan push to analyse the state's history of underfunding Lincoln, inspired by Tennessee's 2021 study.",
            sourceLessonSlug: "the-objection-named",
          },
          {
            prompt: "What is the reported per-student funding gap for Langston University?",
            options: ["Almost $419 million", "Almost $362 million, which is Lincoln University's figure", "Almost $258 million, which is Alcorn State's figure", "Just over $172 million, which is Kentucky State's figure"],
            correctIndex: 0,
            explanation: "Langston's letter figure is $418,986,272, against Oklahoma State University.",
            sourceLessonSlug: "the-objection-named",
          },
          {
            prompt: "Which figure did the letters give for Lincoln University in Missouri?",
            options: ["$361,569,760", "$418,986,272, which is Langston University's figure", "$321,181,312, which is the Maryland figure", "$277,544,416, which is the Virginia figure"],
            correctIndex: 0,
            explanation: "Reported in coverage as almost $362 million, against the University of Missouri.",
            sourceLessonSlug: "sixteen-letters",
          },
          {
            prompt: "What figure did the letters give for Fort Valley State University?",
            options: ["$603,156,480", "$469,956,832, which is South Carolina State's figure", "$852,622,464, which is West Virginia State's figure", "$330,935,712, which is the Arkansas figure"],
            correctIndex: 0,
            explanation: "The Georgia figure, over which three state representatives threatened legal action.",
            sourceLessonSlug: "sixteen-letters",
          },
          {
            prompt: "Which institution does the letter compare Alabama A&M against?",
            options: ["Auburn University", "The University of Alabama at Tuscaloosa", "Tuskegee University, the state's other 1890 institution", "Alabama State University"],
            correctIndex: 0,
            explanation: "Auburn is the state's original 1862 land-grant institution, which is what makes it the comparator.",
            sourceLessonSlug: "sixteen-letters",
          },
          {
            prompt: "Which institution does the Missouri letter name as the 1862 comparator?",
            options: ["The University of Missouri", "Missouri State University", "Missouri University of Science and Technology", "Lincoln University, compared against its own earlier funding"],
            correctIndex: 0,
            explanation: "The University of Missouri at Columbia is the state's 1862 land-grant institution.",
            sourceLessonSlug: "sixteen-letters",
          },
          {
            prompt: "Which institution does the Oklahoma letter name as the 1862 comparator?",
            options: ["Oklahoma State University", "The University of Oklahoma", "The University of Central Oklahoma", "Langston University, compared with its peer institutions nationally"],
            correctIndex: 0,
            explanation: "Oklahoma State University is the state's original land-grant institution.",
            sourceLessonSlug: "sixteen-letters",
          },
          {
            prompt: "What did the letters ask governors' budget offices to do?",
            options: ["Examine the data together", "Certify the figures within ten days", "Submit a remediation plan to the departments", "Suspend appropriations pending a federal audit"],
            correctIndex: 0,
            explanation: "The departments offered to work with each state's budget office and to host a workshop examining the funding data.",
            sourceLessonSlug: "sixteen-letters",
          },
          {
            prompt: "Where should a learner go to check a per-institution 2023 figure?",
            options: ["The published letters", "The 2013 APLU policy brief", "The CRS In Focus on the 1890 institutions", "The annual USDA capacity and matching report"],
            correctIndex: 0,
            explanation: "All sixteen letters were published as one document, and every figure in this course's table comes from it.",
            sourceLessonSlug: "sixteen-letters",
          },
          {
            prompt: "What is the safest single-sentence description of the $12 billion figure?",
            options: ["A modelled counterfactual over 33 years", "The unpaid balance of a statutory obligation", "A judgment entered against sixteen states", "An estimate of federal funding withheld since 1887"],
            correctIndex: 0,
            explanation: "It is what the institutions would have received under a stated alternative funding rule, not a sum anyone was billed.",
            sourceLessonSlug: "the-objection-named",
          },
          {
            prompt: "Which of these does NOT depend on the per-student model?",
            options: ["Whether a state met its statutory match", "The size of each state's computed gap", "The ranking of the sixteen states by gap", "The total across all sixteen states"],
            correctIndex: 0,
            explanation: "The match is a yes-or-no question about a statutory obligation, and USDA publishes the answer by institution.",
            sourceLessonSlug: "the-objection-named",
          },
          {
            prompt: "What does this course recommend doing with the 2023 letters in an argument?",
            options: ["Treat them as the current chapter", "Lead with them, since they carry the largest figure", "Omit them, since the method is contested", "Present them as the settled legal position"],
            correctIndex: 0,
            explanation: "Build on the match, which cannot be modelled away, and use the letters as the current chapter of the same story.",
            sourceLessonSlug: "the-objection-named",
          },
          {
            prompt: "How many of the sixteen letter figures exceed one billion dollars?",
            options: ["Five", "Two, Tennessee and North Carolina", "Nine, matching the FY2020 waiver count", "Sixteen, all of them"],
            correctIndex: 0,
            explanation: "Tennessee, North Carolina, Florida, Texas and Louisiana, which a learner can confirm by reading the table.",
            sourceLessonSlug: "sixteen-letters",
          },
          {
            prompt: "Which figure did the letters give for West Virginia State University?",
            options: ["$852,622,464", "$603,156,480, which is the Georgia figure", "$469,956,832, which is South Carolina State's figure", "$527,280,064, which is Alabama A&M's figure"],
            correctIndex: 0,
            explanation: "West Virginia's figure is the sixth largest of the sixteen.",
            sourceLessonSlug: "sixteen-letters",
          },
          {
            prompt: "Which figure did the letters give for the University of Maryland Eastern Shore?",
            options: ["$321,181,312", "$277,544,416, which is Virginia State's figure", "$330,935,712, which is the Arkansas figure", "$257,807,216, which is Alcorn State's figure"],
            correctIndex: 0,
            explanation: "Maryland's figure sits between the Arkansas and Virginia figures in the table.",
            sourceLessonSlug: "sixteen-letters",
          },
          {
            prompt: "What does this course say the letters are, in relation to the whole argument?",
            options: ["A chapter, not the spine", "The strongest evidence available on the subject", "A restatement of the 2013 policy brief", "A legal finding binding on the sixteen states"],
            correctIndex: 0,
            explanation: "The statutory match is the spine because it survives every objection the per-student model has to answer.",
            sourceLessonSlug: "the-objection-named",
          },
          {
            prompt: "What did Oklahoma Representative Jason Lowe say about responsibility for the gap?",
            options: ["Both parties failed the institution", "That the federal analysis had overstated the shortfall", "That the state had already begun closing the gap", "That the comparison institution was wrongly chosen"],
            correctIndex: 0,
            explanation: "He said clearly, Democrats and Republicans have failed this great institution.",
            sourceLessonSlug: "the-objection-named",
          },
          {
            prompt: "What does the phrase readily available data in the letters signal about the method?",
            options: ["It uses an existing public collection", "It relies on records obtained by subpoena from the states", "It draws on a survey conducted specially for the letters", "It uses institutional accounts rather than state appropriations"],
            correctIndex: 0,
            explanation: "IPEDS is a standing federal collection, which is both the method's convenience and the target of Virginia's objection.",
            sourceLessonSlug: "sixteen-letters",
          },
          {
            prompt: "Which is a fair statement of what a learner can verify about the 2023 total without trusting anybody?",
            options: ["The sixteen published figures sum", "That the per-student method is sound", "That each state actually owes the amount named", "That the IPEDS data is accurate for every year"],
            correctIndex: 0,
            explanation: "The arithmetic is checkable; the model behind each figure is the part that has to be argued about.",
            sourceLessonSlug: "sixteen-letters",
          },
          {
            prompt: "Which trade publication carried the round-up of state reactions this course cites?",
            options: ["Higher Ed Dive", "The Congressional Record", "The Federal Register", "The Chronicle of Agricultural Policy"],
            correctIndex: 0,
            explanation: "Laura Spitalniak's 10 October 2023 report, which carries both the objections and the calls for action by name.",
            sourceLessonSlug: "the-objection-named",
          },
          {
            prompt: "What does the 2026 agreement commit USDA to explore regarding institutional staff?",
            options: ["Personnel exchange", "Direct federal salary support for extension agents", "A hiring freeze at the 1862 institutions", "Tenure protections for 1890 faculty"],
            correctIndex: 0,
            explanation: "The announcement describes institutional capacity-building through personnel exchange agreements alongside the task force.",
            sourceLessonSlug: "a-remedy-without-money",
          },
          {
            prompt: "Who do the USDA liaisons in the 2026 agreement provide support to?",
            options: ["Farmers, ranchers and foresters", "State legislative budget committees", "The Council of 1890 University Presidents only", "Students applying for federal scholarships"],
            correctIndex: 0,
            explanation: "The announcement describes regional support and technical assistance to farmers, ranchers and foresters.",
            sourceLessonSlug: "a-remedy-without-money",
          },
          {
            prompt: "Which West Virginia State University official is quoted on the 2026 agreement?",
            options: ["President Ericke S. Cage", "Secretary of Education Aimee Rogstad Guidera", "Senate President Pro Tempore David Givens", "Thurgood Marshall College Fund chief Harry L. Williams"],
            correctIndex: 0,
            explanation: "Cage described it as a forum for raising issues, in the trade-press account this course cites.",
            sourceLessonSlug: "a-remedy-without-money",
          },
          {
            prompt: "What is the correct way to describe a document a course knows exists and has not examined?",
            options: ["Unread", "Unavailable", "Disputed", "Superseded"],
            correctIndex: 0,
            explanation: "Labelling it as unread is what keeps a course from characterising a text from coverage of it.",
            sourceLessonSlug: "a-remedy-without-money",
          },
        ],
      },
    },
  ],
};
