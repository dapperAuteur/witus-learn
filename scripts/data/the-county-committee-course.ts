import type { AuthoredCourse } from "./authored-course";

// WARRANT-02 · "The County Committee" (Civics). Source brief:
// plans/future-courses/land-and-schools/2026-08-27-01-land-grants-hbcus-farm-programs.md, section
// 8, Course C. Sibling of WARRANT-01 (`the-match`), which shipped first and which this course
// cross-links in both directions. Tier 0.
//
// THE SPINE, and the sentence the whole course is built to keep true:
// A FEDERAL BENEFIT IS DELIVERED THROUGH A LOCAL GATE, AND WHO STANDS AT THE GATE DECIDES WHO GETS
// THE BENEFIT. WARRANT-01 met that move as a funding formula. This is its second form: the same
// federal government met as a LENDER rather than as a school, running its credit, disaster and
// price-support programmes through committees seated in the county, staffed by the applicant's own
// neighbours and competitors, under an eligibility standard that until 1994 asked in statute
// whether the applicant had "the character, industry, and ability" to farm.
//
// EVERY PRIMARY DOCUMENT IN THIS FILE WAS READ DIRECTLY, not summarised from search results.
// The statutory and regulatory spine, on uscode.house.gov and govinfo.gov:
//   · 7 U.S.C. §1922 (farm ownership loan eligibility: citizenship, the family-farm cap, the
//     experience test, and the credit-elsewhere test), §1941 (the same four for operating loans),
//     §1942(a) (the ten enumerated purposes of an operating loan, ending at family subsistence),
//     §1961 (emergency loans and the disaster designation they hang on), §2003 (target
//     participation rates for socially disadvantaged farmers, and the statutory definition).
//   · 16 U.S.C. §590h(b)(5) (the 1935 Act's state, county and area committees, the appointment of
//     state committees and the ELECTION of county committees by the producers themselves).
//   · 61 Fed. Reg. 16461 (15 April 1996), the notice in which USDA records that section 227 of the
//     1994 reorganisation act ABOLISHED the FmHA county committees by repealing 7 U.S.C. §1982 and
//     part of §1983, moved their eligibility work to the elected FSA committees, and dropped the
//     "character, industry, and ability" test. This document is the hinge of Sections 1 and 2 and
//     it was read in full, not quoted from a summary.
//   · CRS R40179, "Farm Service Agency Committees: In Brief", updated 29 January 2021 (Canada),
//     read in full: the 1935 authority, the 1994 merger, the 2002 and 2008 socially-disadvantaged
//     provisions, the 3-to-11 membership, and the modern committee's published duty list.
//   · P.L. 117-2 sec. 1005, P.L. 117-169 secs. 22007 and 22008, and P.L. 115-334 secs. 5104 and
//     12615, read as enrolled on govinfo.gov, plus 7 U.S.C. 2279(a) and the NOFA at 86 Fed. Reg.
//     28329 in which USDA, not Congress, named the five racial and ethnic groups.
//   · The filed orders themselves in Wynn (M.D. Fla., 23 June 2021) and Miller (N.D. Tex., 1 July
//     2021) from the RECAP archive, and Holman v. Vilsack, 117 F.4th 906 (6th Cir. 2024), which
//     recites the chronology authoritatively.
//   · The Uniform Partition of Heirs Property Act as approved in 2010, sections 2, 4, 6 to 10.
//
// THE CENSUS SECTION IS THE PART THAT DID NOT EXIST BEFORE. Two scanned 1920 volumes and one 1930
// volume were rendered and read page by page, because they carry no text layer:
//   · Fourteenth Census, Volume V, ch. V, Table 4 and Table 5, p. 298: 925,708 Negro farm operators
//     (owners 218,612, managers 2,026, tenants 705,070, which sum exactly) on 41,432,182 acres.
//     Both repeat at Tables 16 and 17, pp. 311 and 313, so each figure has two printings.
//   · Volume V, ch. IV, Table 1, p. 189: the colored tenure/acreage table, and the ONLY place
//     acreage is crossed with tenure. Colored means Negro plus Indian plus Japanese plus Chinese:
//     949,889 operators on 44,944,521 acres. Negroes were 97.5% of colored operators but 92.2% of
//     colored acreage, so a Negro operator count and a colored acreage figure never belong together.
//   · Volume V, Appendix A, p. 911, the enumerator's General Farm Schedule: ACRES OWNED WAS NEVER
//     ASKED. Tenure is four yes/no questions and acreage is captured once, split only by land USE.
//     The only other use of "owned" on the schedule asks for DOLLARS of debt. So the widely quoted
//     "14 to 16 million acres owned" is the COLORED bracket (14,005,208 "Owning entire farm" to
//     16,704,192 for all colored owner-operated land), and its top end overstates ownership by an
//     unknown share of the part owners' 2,698,984 acres.
//   · Hall, "The Negro Farmer in the United States" (1933, a THIRTIETH-census publication, not a
//     1920 monograph, which does not exist), Table 26, p. 40: 1920 Negro owners 13,948,512 acres,
//     tenants 27,077,582, managers 406,088, summing exactly to 41,432,182. That is a CEILING, and
//     the slippage is visible in Hall himself: his section heading reads "Loss of owned land" while
//     his sentences beneath read "the land operated by owners".
//   · Cornell's agcensus archive is RETIRED (404, redirects to USDA NASS). Do not cite it.
//
// THE HARD GATES FROM THE BRIEF, AND HOW THIS FILE HONOURS THEM. They are recorded here so a later
// editor cannot soften one without seeing that it was a decision.
//   1. PIGFORD FRAUD. The brief's item 24 says the allegation may appear only with a named source,
//      a named venue, named evidence and named rebuttals, and that otherwise the course says
//      nothing. Section 6 states what the gate required and what the evidence actually supports.
//   2. NO CENSUS FIGURE WITHOUT THE TABLE. WARRANT-01 refused to print any 1920 acreage or operator
//      count because nobody had opened the volume. Section 3 prints figures only where this course
//      read the table, and names the table.
//   3. THE 1982 PREDICTION IS AN EXERCISE, NOT A PUNCHLINE. The U.S. Commission on Civil Rights
//      predicted fewer than 10,000 Black farmers by the end of the next decade. Section 3 sets that
//      against the later census counts and makes the learner do the comparison, including the
//      reasons the comparison is harder than it looks.
//   4. THE SOURCE THAT CONTRADICTS ITSELF IS TAUGHT AS SUCH. USCCR's own report prints two
//      different figures for Tennessee's one-year loss of Black committee members. The course uses
//      the one its own table supports and says the report disagrees with itself.
//
// House style, inherited from WARRANT-01: `section` on every lesson; flush-left single-line
// `:::reveal q ||| a`; a `## Vocabulary` block of 3-6 lesson-specific terms; APA 7 `## Sources`
// with a stable URL wherever one exists; a quiz per teaching section (pool sized by density,
// serving 5, passing 80, shuffled) plus a final serving 10; every question carries `explanation`
// and `sourceLessonSlug`. Correct options are written SHORT and distractors long and specific, so
// `check-longest-option` passes by construction rather than by post-hoc trimming.
export const THE_COUNTY_COMMITTEE_COURSE: AuthoredCourse = {
  title: "The County Committee",
  description:
    "Federal farm programmes are national money handed out by three people who live down the road. This course teaches the mechanism from the statutes up, and it starts before any of it is about race, with a calendar. A farmer spends in spring and is paid in autumn, so a loan that arrives late is a loan that was denied, and every mechanism that follows is one that can spend time. Then the eligibility test, which changes what a refusal means: to borrow from the United States Department of Agriculture an applicant must be unable to obtain sufficient credit elsewhere at reasonable rates and terms in their own community. The federal farm lender is by statute the lender of last resort, so there is no next lender, and a denial ends the search instead of redirecting it. Two committee systems then sat in every county with almost the same name, and telling them apart is where careful people go wrong: the conservation and price-support committees created by the 1935 Act were elected by producers, and the Farmers Home Administration credit committees were not. A federal civil rights commission described the second kind in 1982 in one paragraph this course reads as a machine: three individuals residing in the county, at least two of them farmers, determining both eligibility and the limits of credit, nominated by the county supervisor and appointed by the state director. The same report counted who sat on those committees, printed a disclaimer that numbers alone do not prove discrimination, and contradicted itself about Tennessee in a way this course shows you rather than resolves. Section three settles a question its sibling course refused to answer, by opening the 1920 census: 925,708 Black farm operators on 41,432,182 acres, three quarters of them tenants, and acres owned never collected at all, because the enumerator's schedule never asked. Then title, where a family can lose land with nobody refusing it anything, because any one co-tenant can force the sale of everything. Then Pigford, taught as a designed settlement in which a standard of proof was traded against a payment, with the numbers, their dates, and an arithmetic check anyone can run. And finally what came after: an audit that found control weaknesses rather than fraud, a fraud allegation stated only because its source, venue, evidence and rebuttals can all be named, and a race-conscious remedy that was enjoined and rewritten so that eligibility turned on an experience rather than an identity. The course ends with a ledger of what it refused to print and three questions you can run on any programme in the country.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1 — The lender of last resort
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "timing-is-the-whole-game",
      title: "1 · A farm's money problem is a timing problem",
      section: "Section 1 · The lender of last resort",
      body: `Before any of this is about race, it is about a calendar.

A farmer spends money in the spring and gets paid in the autumn. Seed, fertiliser, fuel, feed, cash rent and hired labour all come due months before a single bushel is sold. The gap between the spending and the getting paid is the whole reason agricultural credit exists, and it is why **a loan that arrives late is a loan that was denied**. Money for seed in July buys nothing. The crop that money was for is not planted.

Hold that, because it is the single most useful thing in this course. Every mechanism you are about to meet is a mechanism that can spend time.

**What the federal government actually lends for.** The purposes of a direct operating loan are enumerated in statute, at **7 U.S.C. § 1942(a)**, and reading the list tells you what kind of instrument this is. A loan may be made for "purchasing livestock, poultry, or farm or ranch equipment"; for "purchasing feed, seed, fertilizer, insecticide, or farm or ranch supplies, or to meet other essential farm or ranch operating expenses, including cash rent"; for "financing land or water development, use, or conservation"; for "paying loan closing costs"; and, at the end of the list, for "providing other farm, ranch, or home needs, including family subsistence" (7 U.S.C. § 1942, n.d.).

**Read that last purpose again.** Family subsistence. The statute contemplates lending a farm family the money to eat. This is not a commercial credit line with an agricultural flavour. It is a programme that expects to be reached by people with nothing else.

**Three doors, and they are different doors.** Federal farm credit is not one programme:

- **Farm ownership loans**, whose eligibility sits at **7 U.S.C. § 1922**, are for buying and keeping land.
- **Operating loans**, at **7 U.S.C. § 1941**, are for the crop year: the input costs above.
- **Emergency loans**, at **7 U.S.C. § 1961**, are for after a disaster, and they carry an extra condition the other two do not. The Secretary must have found that farming operations in the area were "substantially affected" by a quarantine, "a natural disaster in the United States, or a major disaster or emergency designated by the President" under the Stafford Act (7 U.S.C. § 1961, n.d.).

**That extra condition is a second clock.** An emergency loan is not available because your crop drowned. It is available because your crop drowned *and* somebody with authority has designated your county. A farmer whose county is designated in April and a farmer whose county is designated in September have had very different years, and neither of them designated anything.

**And credit is not the only thing that runs on this calendar.** Price support and commodity programmes, disaster payments and conservation payments are all applied for, certified and paid locally, on deadlines. Miss a signup window and the payment does not arrive late. It does not arrive.

So the picture to carry into Lesson 2 is a farm with a fixed calendar, several separate federal doors, and a set of deadlines it does not control. The next question is who decides whether a given farmer walks through any of them.

:::reveal Why is a late farm operating loan effectively a denied loan? ||| Because the spending it pays for is seasonal, so money that arrives after planting cannot buy the crop it was needed for.

:::reveal What is the last enumerated purpose of a direct operating loan under 7 U.S.C. § 1942(a)? ||| Other farm, ranch, or home needs, including family subsistence.

:::reveal What extra condition does an emergency loan carry that an operating loan does not? ||| A designation: the Secretary must find that operations in the area were substantially affected by a quarantine or a natural disaster, or the President must have declared a major disaster or emergency.

## Vocabulary
- **Operating loan**: federal credit for a single crop year's input costs, enumerated at 7 U.S.C. § 1942(a) and running from seed and cash rent through to family subsistence.
- **Farm ownership loan**: federal credit for acquiring or keeping the land itself, whose eligibility conditions sit at 7 U.S.C. § 1922.
- **Emergency loan**: federal credit available only after an area has been designated as affected by a quarantine or disaster, at 7 U.S.C. § 1961.
- **Disaster designation**: the official finding that makes an area's farmers eligible for emergency credit, made by the Secretary of Agriculture or by the President under the Stafford Act.
- **The crop calendar**: the fixed seasonal sequence of spending and receipts that makes timing, rather than the interest rate, the decisive term of an agricultural loan.

## Sources
7 U.S.C. § 1922. (n.d.). *Persons eligible for real estate loans*. Office of the Law Revision Counsel, U.S. House of Representatives. https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title7-section1922&num=0&edition=prelim

7 U.S.C. § 1941. (n.d.). *Persons eligible for loans*. Office of the Law Revision Counsel, U.S. House of Representatives. https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title7-section1941&num=0&edition=prelim

7 U.S.C. § 1942. (n.d.). *Purposes of loans*. Office of the Law Revision Counsel, U.S. House of Representatives. https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title7-section1942&num=0&edition=prelim

7 U.S.C. § 1961. (n.d.). *Eligibility for emergency loans*. Office of the Law Revision Counsel, U.S. House of Representatives. https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title7-section1961&num=0&edition=prelim`,
    },
    {
      slug: "unable-to-obtain-credit-elsewhere",
      title: "2 · Unable to obtain sufficient credit elsewhere",
      section: "Section 1 · The lender of last resort",
      body: `Now the eligibility test, because it changes what a denial means.

To get a direct federal farm ownership loan, an applicant must satisfy four conditions at **7 U.S.C. § 1922(a)(1)**. They must "be citizens of the United States". They must, for direct loans, "have either training or farming experience that the Secretary determines is sufficient to assure reasonable prospects of success in the proposed farming operations". They must "be or will become owner-operators of not larger than family farms". And they must:

> "be unable to obtain sufficient credit elsewhere to finance their actual needs at reasonable rates and terms, taking into consideration prevailing private and cooperative rates and terms in the community" (7 U.S.C. § 1922, n.d.)

**The operating-loan section says the same four things.** At **7 U.S.C. § 1941(a)(1)** the applicant must be a citizen, must have training or farming experience, must "be or will become operators of not larger than family farms", and must "be unable to obtain sufficient credit elsewhere to finance their actual needs at reasonable rates and terms, taking into consideration prevailing private and cooperative rates and terms in the community in or near which the applicant resides for loans for similar purposes and periods of time" (7 U.S.C. § 1941, n.d.).

**Sit with the fourth condition, because it is the design of the whole thing.** A commercial bank turns you down and you go to another bank. This lender exists *only* for people the other lenders have already refused. Being creditworthy is a disqualification. So the federal farm lender is, by statute, **the lender of last resort**, and that single fact has a consequence people usually miss:

**There is no next lender.** A denial at a commercial bank is one institution's opinion. A denial here is the end of the line, because the eligibility test has already established that the line had one place left in it. When somebody says a delayed or denied federal farm loan cost a family its farm, that is not rhetoric. It is what the eligibility standard implies.

**The family-farm cap is doing work too.** "Not larger than family farms" means the programme is aimed downward, at operations too small to be interesting to commercial credit. Combined with the credit-elsewhere test, the statutory portrait of an eligible applicant is a small operator with no alternatives. That is the population the programme was built for, and it is the population most exposed to whatever the programme does next.

**One more condition, and it is a clock again.** For farm ownership loans, **7 U.S.C. § 1922(b)(1)** additionally requires that the applicant have "participated in the business operations of a farm or ranch for not less than 3 years or has other acceptable experience for a period of time, as determined by the Secretary" (7 U.S.C. § 1922, n.d.). Three years of participation is a plausible threshold and also a real barrier to anyone whose family lost its farm a generation ago.

**Congress noticed the distribution problem and wrote a mechanism for it.** At **7 U.S.C. § 2003**, the Secretary must set **target participation rates** for socially disadvantaged farmers and ranchers and reserve loan funds against them. For farm ownership loans the rate rests on "the portion of the population of the county" that the group makes up, together with "the availability of inventory farmland in such county"; for operating loans it rests on "the number of socially disadvantaged farmers and ranchers in a State in proportion to the total number of farmers and ranchers in that State" (7 U.S.C. § 2003, n.d.).

**And note what a target participation rate is not.** It is a reservation of funds measured against a population share. It says nothing about who inside that share gets approved, and it reviews no applications. The statute stocks a shelf. Somebody local still decides who reaches it.

The statute defines the class it is protecting in one sentence, and the sentence is worth knowing exactly: a **socially disadvantaged group** is "a group whose members have been subjected to racial, ethnic, or gender prejudice because of their identity as members of a group without regard to their individual qualities" (7 U.S.C. § 2003, n.d.).

:::reveal What does the credit-elsewhere test require an applicant to prove? ||| That they cannot obtain sufficient credit elsewhere at reasonable rates and terms, judged against prevailing private and cooperative terms in their own community.

:::reveal Why does the credit-elsewhere test make a federal farm loan denial different from a bank denial? ||| Because eligibility already establishes there is no other lender, so the denial ends the search rather than redirecting it.

:::reveal What does a target participation rate under 7 U.S.C. § 2003 actually do? ||| It reserves a share of loan funds measured against a population proportion, and decides no individual application.

## Vocabulary
- **Credit elsewhere test**: the statutory condition that an applicant be unable to obtain sufficient credit at reasonable rates and terms in their own community, which makes the federal farm lender a lender of last resort.
- **Lender of last resort**: a lender whose eligibility rules admit only applicants other lenders have already refused, so that its denial ends the search rather than redirecting it.
- **Family farm cap**: the requirement that a borrower be or become the operator of not larger than a family farm, which aims the programme at small operations.
- **Target participation rate**: the share of loan funds the Secretary must reserve for socially disadvantaged farmers, computed from population proportions by county or by state.
- **Socially disadvantaged group**: in the statute's own words, a group whose members have been subjected to racial, ethnic, or gender prejudice because of their identity as members of a group without regard to their individual qualities.

## Sources
7 U.S.C. § 1922. (n.d.). *Persons eligible for real estate loans*. Office of the Law Revision Counsel, U.S. House of Representatives. https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title7-section1922&num=0&edition=prelim

7 U.S.C. § 1941. (n.d.). *Persons eligible for loans*. Office of the Law Revision Counsel, U.S. House of Representatives. https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title7-section1941&num=0&edition=prelim

7 U.S.C. § 2003. (n.d.). *Participation of socially disadvantaged farmers and ranchers*. Office of the Law Revision Counsel, U.S. House of Representatives. https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title7-section2003&num=0&edition=prelim`,
    },
    {
      slug: "two-committee-systems",
      title: "3 · Two committee systems, and why that is confusing on purpose",
      section: "Section 1 · The lender of last resort",
      body: `Federal farm programmes reach a farm through a county office, and for most of the twentieth century there were **two different local bodies** in play with almost the same name. Getting them apart is the single most common place people go wrong on this subject, including people who are otherwise careful.

**System one: the elected committee, born in 1935.** Section 8(b) of the Soil Conservation and Domestic Allotment Act of 1935 (P.L. 74-46) authorised **state, county and community committees** to oversee and administer what became the Agricultural Stabilization and Conservation Service programmes, and to consider administrative appeals (CRS, 2021). The authority is still on the books at **16 U.S.C. § 590h(b)(5)**, and it distinguishes sharply between the two levels:

- **State committees are appointed.** "The Secretary shall appoint in each State a State committee composed of not fewer than 3 nor more than 5 members who are fairly representative of the farmers in the State" (16 U.S.C. § 590h, n.d.).
- **County committees are elected.** A county or area committee's members must be "fairly representative of the agricultural producers within the area covered by the county, area, or local committee" and must be "elected by the agricultural producers that participate or cooperate in programs administered within the area" (16 U.S.C. § 590h, n.d.).

**System two: the appointed committee, which ran the credit.** The Farmers Home Administration, USDA's farm lender, had its own county committees, and they were not elected by anybody. They were seated through the agency's own chain of command. Section 2 of this course is about those committees and what a federal civil-rights commission found when it counted who sat on them.

**In 1994 the two systems became one, and the merger is documented in a single Federal Register notice worth reading yourself.** Section 226 of the Department of Agriculture Reorganization Act of 1994 (P.L. 103-354) moved FmHA's farmer-programme loan functions and all of ASCS's functions into what is now the Farm Service Agency. Then, in USDA's own words:

> "section 227 of the Act abolished the former FmHA county committees by removing section 332 and part of Sec. 333 of the Consolidated Farm and Rural Development Act (CONACT) (7 U.S.C. 1982 and 1983)" (Farm Service Agency, 1996, p. 16461)

The elected committees inherited the work: "FSA will use FSA county or area committees to make the eligibility determinations related to Farm Credit Programs direct and guaranteed loan making and servicing that were made by FmHA county committees prior to passage of the Act" (Farm Service Agency, 1996, p. 16461).

**And one eligibility test did not survive the merger.** The same notice lists what the new committees would *not* carry over, and among the discarded items is this:

> "the eligibility requirements that the applicant has the character, industry, and ability to carry out the proposed operations and will honestly endeavor to carry out its undertakings and obligations" (Farm Service Agency, 1996, pp. 16461-16462)

**Read that standard once more and notice what it asks a local body to judge.** Not the applicant's collateral. Not their cash flow. Their **character** and their **industry**, meaning their willingness to work. That test was in the United States Code, it was applied by an appointed county committee, and it was abolished by Public Law 103-354 in October 1994 (7 U.S.C. § 1982, n.d.).

**What the modern committee does.** CRS lists the county committee's duties, and credit approval is not among them. They cover "agricultural conservation programs, production adjustment and price support programs, livestock programs, and any other program as assigned", and the first specific duty in the list is "selecting the County Executive Director" (CRS, 2021). Committees now run 3 to 11 members, serve three-year terms, are paid at an hourly rate equivalent to GS-6 step 1, are limited to eight hours of work a month, and may serve at most three consecutive terms (CRS, 2021).

**Eight hours a month.** Hold that against Lesson 1's calendar, and you have the shape of the problem this course is about.

:::reveal Which federal statute created the elected state, county and community committee system, and in what year? ||| The Soil Conservation and Domestic Allotment Act of 1935, now carried at 16 U.S.C. § 590h(b)(5).

:::reveal Under 16 U.S.C. § 590h(b)(5), who appoints state committees and who chooses county committees? ||| The Secretary appoints state committees; county committees are elected by the agricultural producers who participate or cooperate in programmes administered in the area.

:::reveal What eligibility requirement did USDA say would not carry over to the FSA committees after 1994? ||| That the applicant has the character, industry, and ability to carry out the proposed operations and will honestly endeavor to carry out its undertakings and obligations.

## Vocabulary
- **Agricultural Stabilization and Conservation Service (ASCS)**: the USDA agency whose conservation, price-support and production-adjustment programmes the elected county committees administered before the 1994 reorganisation.
- **Farmers Home Administration (FmHA)**: USDA's farm credit agency until 1994, which ran its own appointed county committees separately from the elected ones.
- **Farm Service Agency (FSA)**: the agency created in 1994 by merging ASCS, FmHA's farmer-programme loan functions and other units, which now runs both the programmes and the elected committees.
- **Local administrative area**: the sub-county district a county committee seat represents, whose boundaries the committee itself recommends.
- **County Executive Director**: the full-time USDA employee who runs the county office day to day, and whom the county committee selects.

## Sources
7 U.S.C. § 1982. (n.d.). *Relief for mobilized military reservists from certain agricultural loan obligations* [including the editorial note recording the repeal of the prior section 1982, related to county committees, by Pub. L. 103-354, title II, § 227(b)(1), Oct. 13, 1994, 108 Stat. 3218]. Office of the Law Revision Counsel, U.S. House of Representatives. https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title7-section1982&num=0&edition=prelim

16 U.S.C. § 590h. (n.d.). *Assistance to cooperators*. Office of the Law Revision Counsel, U.S. House of Representatives. https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title16-section590h&num=0&edition=prelim

Canada, C. (2021, January 29). *Farm Service Agency committees: In brief* (CRS Report No. R40179). Congressional Research Service. https://www.congress.gov/crs-product/R40179

Farm Service Agency. (1996, April 15). Farm Service Agency county committees; Farm Credit Programs loan eligibility determinations. *Federal Register, 61*(73), 16461-16462. https://www.govinfo.gov/content/pkg/FR-1996-04-15/html/96-9201.htm`,
    },
    {
      slug: "quiz-the-lender",
      title: "4 · Knowledge check: the lender of last resort",
      section: "Section 1 · The lender of last resort",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "Why does timing matter more than the interest rate on a farm operating loan?",
            options: ["The spending is seasonal", "Because federal farm loans carry a variable rate that is reset every quarter against the prime rate", "Because the Secretary of Agriculture sets the rate annually and it rarely moves by more than a fraction of a point", "Because a borrower may prepay at any time without penalty, which removes rate risk entirely"],
            correctIndex: 0,
            explanation: "Inputs are bought before planting and the crop is sold months later, so money arriving after the planting window buys nothing at any rate.",
            sourceLessonSlug: "timing-is-the-whole-game",
          },
          {
            prompt: "Which statute enumerates the purposes for which a direct operating loan may be made?",
            options: ["7 U.S.C. § 1942", "7 U.S.C. § 590h, the section that also establishes the state and county committee structure", "7 U.S.C. § 2003, which sets target participation rates for socially disadvantaged farmers", "7 U.S.C. § 1961, the section governing loans made after a designated disaster"],
            correctIndex: 0,
            explanation: "Section 1942(a) lists the purposes, from equipment and inputs through to family subsistence.",
            sourceLessonSlug: "timing-is-the-whole-game",
          },
          {
            prompt: "What is the last enumerated purpose in the operating-loan list at 7 U.S.C. § 1942(a)?",
            options: ["Family subsistence", "Repaying a delinquent property tax assessment levied by the county in which the farm sits", "Purchasing crop insurance through the Federal Crop Insurance Corporation", "Paying the legal costs of contesting a denial by the county committee"],
            correctIndex: 0,
            explanation: "The list ends at other farm, ranch, or home needs, including family subsistence, which tells you the programme expects applicants with nothing else.",
            sourceLessonSlug: "timing-is-the-whole-game",
          },
          {
            prompt: "Which of these is a purpose 7 U.S.C. § 1942(a) expressly names for a direct operating loan?",
            options: ["Cash rent", "Buying an adjoining parcel of farmland to enlarge the operation beyond its current acreage", "Endowing a scholarship fund at the state land-grant college of the borrower's choosing", "Paying the premium on a life insurance policy naming the Secretary as beneficiary"],
            correctIndex: 0,
            explanation: "The statute names feed, seed, fertilizer, insecticide, supplies and other essential operating expenses, including cash rent.",
            sourceLessonSlug: "timing-is-the-whole-game",
          },
          {
            prompt: "Which section of title 7 governs eligibility for federal farm ownership loans?",
            options: ["§ 1922", "§ 1942, the section listing the ten permitted uses of borrowed operating money", "§ 590h, which sets out the composition and election of the county committees", "§ 1994, which governs the aggregate loan limits applied to a single borrower"],
            correctIndex: 0,
            explanation: "Section 1922 sets the four conditions for real estate loans, including the credit-elsewhere test.",
            sourceLessonSlug: "timing-is-the-whole-game",
          },
          {
            prompt: "What additional condition does an emergency loan under 7 U.S.C. § 1961 carry that an operating loan does not?",
            options: ["An area designation", "A requirement that the borrower carry federally reinsured crop insurance for the three preceding crop years", "A cap of forty per cent of the appraised value of the real estate pledged as security", "A written recommendation from the borrower's commercial lender explaining the refusal of credit"],
            correctIndex: 0,
            explanation: "Operations must have been substantially affected by a quarantine or natural disaster, or the President must have declared a major disaster or emergency in the area.",
            sourceLessonSlug: "timing-is-the-whole-game",
          },
          {
            prompt: "Under which statute may the President's declaration of a major disaster trigger emergency farm loan eligibility?",
            options: ["The Stafford Act", "The Consolidated Farm and Rural Development Act, which governs every other category of federal farm credit", "The Soil Conservation and Domestic Allotment Act of 1935, which created the county committee system", "The Federal Crop Insurance Reform and Department of Agriculture Reorganization Act of 1994"],
            correctIndex: 0,
            explanation: "Section 1961 names a major disaster or emergency designated by the President under the Robert T. Stafford Disaster Relief and Emergency Assistance Act.",
            sourceLessonSlug: "timing-is-the-whole-game",
          },
          {
            prompt: "Two farmers suffer identical flood losses but only one lives in a designated county. What follows for emergency loan eligibility?",
            options: ["Only the designated one qualifies", "Both qualify, because the statute measures the individual loss rather than the geography of the event", "Neither qualifies until the Secretary publishes a national loss threshold for the crop year", "Both qualify but the undesignated one must pay a higher rate set by the state committee"],
            correctIndex: 0,
            explanation: "Section 1961 hangs eligibility on the area designation, which neither farmer makes, so identical losses can produce different outcomes.",
            sourceLessonSlug: "timing-is-the-whole-game",
          },
          {
            prompt: "What is the plain effect of missing a programme signup window for a price-support or conservation payment?",
            options: ["The payment does not arrive", "The payment arrives at the next scheduled disbursement, reduced by an administrative late fee", "The county committee may extend the window by up to sixty days on a majority vote", "The application converts automatically into a direct operating loan of the same amount"],
            correctIndex: 0,
            explanation: "These programmes are applied for on deadlines, so a missed window is not a late payment but no payment at all.",
            sourceLessonSlug: "timing-is-the-whole-game",
          },
          {
            prompt: "Which pairing of loan type and purpose is correct?",
            options: ["Ownership loans buy land", "Operating loans buy land, and ownership loans cover the seed, fertiliser and cash rent of a single crop year", "Emergency loans buy land, and ownership loans are available only after a presidential disaster declaration", "Operating loans are repaid over forty years, and ownership loans are repaid within a single crop year"],
            correctIndex: 0,
            explanation: "Ownership loans are for acquiring and keeping the land; operating loans cover the crop year's input costs.",
            sourceLessonSlug: "timing-is-the-whole-game",
          },
          {
            prompt: "Which four conditions does 7 U.S.C. § 1922(a)(1) impose on a farm ownership loan applicant?",
            options: ["Citizenship, experience, family farm, no credit elsewhere", "Citizenship, residence in the county for five years, a clear title opinion, and a signed statement of net worth", "Membership in a producer cooperative, a conservation plan on file, crop insurance, and a farm number", "A minimum net worth, a college degree in agriculture, three references, and a county committee nomination"],
            correctIndex: 0,
            explanation: "The four are United States citizenship, sufficient training or farming experience for direct loans, being or becoming an owner-operator of not larger than a family farm, and inability to obtain sufficient credit elsewhere.",
            sourceLessonSlug: "unable-to-obtain-credit-elsewhere",
          },
          {
            prompt: "What must an applicant be unable to do, in the statute's words, to qualify for a direct federal farm loan?",
            options: ["Obtain sufficient credit elsewhere", "Demonstrate positive net farm income in each of the three preceding tax years without off-farm employment", "Secure a written guarantee from a commercial lender licensed to operate in the applicant's own state", "Repay an outstanding federal debt of any kind, including a defaulted student loan or tax lien"],
            correctIndex: 0,
            explanation: "The test is inability to obtain sufficient credit elsewhere at reasonable rates and terms, judged against prevailing private and cooperative terms in the applicant's own community.",
            sourceLessonSlug: "unable-to-obtain-credit-elsewhere",
          },
          {
            prompt: "The credit-elsewhere test compares an applicant's options against terms prevailing where?",
            options: ["In their own community", "Across the Federal Reserve district in which the applicant's farm is physically located", "In the national market for agricultural credit as reported by the Farm Credit Administration", "In whichever neighbouring state offers the lowest agricultural lending rate that quarter"],
            correctIndex: 0,
            explanation: "Both sections tie the comparison to prevailing private and cooperative rates and terms in the community in or near which the applicant resides.",
            sourceLessonSlug: "unable-to-obtain-credit-elsewhere",
          },
          {
            prompt: "Why does the credit-elsewhere test make a federal farm loan denial unusually consequential?",
            options: ["There is no next lender", "Because a denial is recorded on the applicant's credit file for seven years under federal reporting rules", "Because the applicant must wait a full crop year before submitting a fresh application to the same office", "Because a denial automatically accelerates any existing federal loan the applicant already holds"],
            correctIndex: 0,
            explanation: "Eligibility already establishes that no other lender will serve the applicant on reasonable terms, so the denial ends the search instead of redirecting it.",
            sourceLessonSlug: "unable-to-obtain-credit-elsewhere",
          },
          {
            prompt: "What does the phrase not larger than family farms do in the eligibility sections?",
            options: ["It aims the programme downward", "It requires that at least half the farm's labour be performed by members of the borrower's household", "It caps the acreage a borrower may own at the county median reported in the most recent census", "It limits eligibility to farms that have been in the same family for two or more generations"],
            correctIndex: 0,
            explanation: "The cap restricts the programme to operations small enough to be uninteresting to commercial credit, which is the same population the credit-elsewhere test selects.",
            sourceLessonSlug: "unable-to-obtain-credit-elsewhere",
          },
          {
            prompt: "How much prior participation in farm or ranch business operations does 7 U.S.C. § 1922(b)(1) require?",
            options: ["Three years", "Ten years, or five if the applicant holds a degree in an agricultural discipline from an accredited institution", "One full crop cycle, documented by receipts and a signed statement from the county committee", "No fixed period, because the Secretary is barred from imposing an experience floor on ownership loans"],
            correctIndex: 0,
            explanation: "The statute requires not less than three years of participation in the business operations of a farm or ranch, or other acceptable experience as the Secretary determines.",
            sourceLessonSlug: "unable-to-obtain-credit-elsewhere",
          },
          {
            prompt: "Why can a three-year participation requirement fall unevenly across applicants?",
            options: ["Families that already lost farms cannot meet it", "Because the requirement is waived automatically for applicants under the age of twenty-five in every state", "Because the Secretary counts only participation occurring after the applicant's twenty-first birthday", "Because participation must be continuous and any gap of more than one crop year resets the clock"],
            correctIndex: 0,
            explanation: "Prior participation is easiest to document for people whose families still farm, so an experience floor reproduces the distribution of existing landholding.",
            sourceLessonSlug: "unable-to-obtain-credit-elsewhere",
          },
          {
            prompt: "What does 7 U.S.C. § 2003 require the Secretary to establish?",
            options: ["Target participation rates", "A national registry of every loan denial issued by a county office in the preceding fiscal year", "An independent appeals board with the power to overturn a county committee's eligibility finding", "A minimum interest rate differential between direct and guaranteed farm operating loans"],
            correctIndex: 0,
            explanation: "The Secretary must set target participation rates for socially disadvantaged farmers and ranchers and reserve loan funds against them.",
            sourceLessonSlug: "unable-to-obtain-credit-elsewhere",
          },
          {
            prompt: "For farm ownership loans, what does the target participation rate rest on?",
            options: ["County population share and inventory farmland", "The number of applications the county office received from members of the group in the preceding year", "A fixed national percentage set by Congress and revised only in a reauthorising farm bill", "The dollar volume of guaranteed loans made by commercial lenders in the same county"],
            correctIndex: 0,
            explanation: "The statute names the portion of the county's population made up of members of socially disadvantaged groups together with the availability of inventory farmland in that county.",
            sourceLessonSlug: "unable-to-obtain-credit-elsewhere",
          },
          {
            prompt: "For operating loans, the target participation rate is computed at which level?",
            options: ["The state", "The county, matching the basis used for farm ownership loans under the same section", "The Farm Credit district, so that neighbouring states share a single pooled reservation", "The individual county office, recalculated each time an application is filed"],
            correctIndex: 0,
            explanation: "Operating-loan rates rest on the number of socially disadvantaged farmers in a state in proportion to the total number of farmers in that state.",
            sourceLessonSlug: "unable-to-obtain-credit-elsewhere",
          },
          {
            prompt: "What does a target participation rate NOT do?",
            options: ["Decide any individual application", "Reserve any portion of the available loan funds against a measured population share", "Distinguish between farm ownership loans and operating loans in how it is computed", "Rest on proportions drawn from the population rather than from application volumes"],
            correctIndex: 0,
            explanation: "It is a reservation of funds measured against a population proportion, and it leaves every individual approval to somebody local.",
            sourceLessonSlug: "unable-to-obtain-credit-elsewhere",
          },
          {
            prompt: "How does 7 U.S.C. § 2003(e)(1) define a socially disadvantaged group?",
            options: ["A group subjected to racial, ethnic, or gender prejudice", "Any group whose median household income falls below eighty per cent of the surrounding county's median", "A group formally designated as such by the Secretary after notice and comment rulemaking", "Any group that has filed a civil rights complaint against the Department in the preceding decade"],
            correctIndex: 0,
            explanation: "The statutory phrase is a group whose members have been subjected to racial, ethnic, or gender prejudice because of their identity as members of a group without regard to their individual qualities.",
            sourceLessonSlug: "unable-to-obtain-credit-elsewhere",
          },
          {
            prompt: "In the statutory definition, prejudice attaches to a person because of what?",
            options: ["Their identity as a group member", "Their measured income, farm size and credit history taken together as a single composite score", "The county in which their farm records are administered by the Farm Service Agency", "Their inability to satisfy the three-year participation requirement for ownership loans"],
            correctIndex: 0,
            explanation: "The definition says the prejudice attaches because of identity as members of a group, without regard to their individual qualities.",
            sourceLessonSlug: "unable-to-obtain-credit-elsewhere",
          },
          {
            prompt: "Which act authorised the original state, county and community committee system?",
            options: ["The Soil Conservation and Domestic Allotment Act of 1935", "The Consolidated Farm and Rural Development Act, which also governs federal farm credit eligibility", "The Agricultural Adjustment Act of 1933, struck down in part by the Supreme Court three years later", "The Federal Crop Insurance Reform and Department of Agriculture Reorganization Act of 1994"],
            correctIndex: 0,
            explanation: "Section 8(b) of the 1935 Act, P.L. 74-46, authorised the committees and is carried today at 16 U.S.C. § 590h(b)(5).",
            sourceLessonSlug: "two-committee-systems",
          },
          {
            prompt: "Under 16 U.S.C. § 590h(b)(5), how does a state committee get its members?",
            options: ["The Secretary appoints them", "The producers of the state elect them at the same time they elect their county committee members", "The governor of the state nominates them and the Senate Agriculture Committee confirms them", "The county committees within the state choose them from among their own sitting members"],
            correctIndex: 0,
            explanation: "The Secretary appoints not fewer than three nor more than five members who are fairly representative of the farmers in the state.",
            sourceLessonSlug: "two-committee-systems",
          },
          {
            prompt: "Under the same subsection, how does a county or area committee get its members?",
            options: ["Producers elect them", "The State Executive Director appoints them from a list submitted by the state committee", "The Secretary appoints them on the recommendation of the county's congressional representative", "The outgoing committee co-opts them, subject to a veto by the County Executive Director"],
            correctIndex: 0,
            explanation: "Members are elected by the agricultural producers that participate or cooperate in programmes administered within the area.",
            sourceLessonSlug: "two-committee-systems",
          },
          {
            prompt: "The statute says county committee members must be fairly representative of whom?",
            options: ["The agricultural producers in the area", "The registered voters of the county, whether or not they are engaged in farming or ranching", "The commercial lenders and cooperatives operating within the committee's jurisdiction", "The land-grant extension staff assigned to the county by the state university"],
            correctIndex: 0,
            explanation: "The phrase is fairly representative of the agricultural producers within the area covered by the county, area, or local committee.",
            sourceLessonSlug: "two-committee-systems",
          },
          {
            prompt: "Which agency ran USDA's farm lending before 1994?",
            options: ["The Farmers Home Administration", "The Agricultural Stabilization and Conservation Service, which also ran conservation and price support", "The Federal Crop Insurance Corporation, later moved into the Risk Management Agency", "The Rural Electrification Administration, which lent to cooperatives across the same countryside"],
            correctIndex: 0,
            explanation: "FmHA was the lender, and it seated its own county committees separately from the elected ASCS ones.",
            sourceLessonSlug: "two-committee-systems",
          },
          {
            prompt: "How were FmHA county committee members seated?",
            options: ["Through the agency's own chain of command", "By election among the farmers of the county, on the same ballot as the conservation committees", "By the governor of the state, from a slate proposed by the county's agricultural extension office", "By lot from among all borrowers with an active loan file in the county office"],
            correctIndex: 0,
            explanation: "They were not elected; the credit committees were seated administratively, which is the distinction Section 2 turns on.",
            sourceLessonSlug: "two-committee-systems",
          },
          {
            prompt: "Which public law created the Farm Service Agency and reorganised USDA?",
            options: ["P.L. 103-354", "P.L. 74-46, the Soil Conservation and Domestic Allotment Act enacted in the New Deal", "P.L. 107-171, the farm bill that added socially disadvantaged provisions to county elections", "P.L. 110-246, the 2008 farm bill that raised the maximum size of a combined committee"],
            correctIndex: 0,
            explanation: "The Federal Crop Insurance Reform and Department of Agriculture Reorganization Act of 1994 created FSA out of ASCS, FmHA loan functions and other units.",
            sourceLessonSlug: "two-committee-systems",
          },
          {
            prompt: "What did section 227 of the 1994 reorganisation act do to the FmHA county committees?",
            options: ["Abolished them", "Doubled their membership so that each committee seated six rather than three members", "Converted them into advisory bodies with no vote on eligibility but a right to be consulted", "Transferred them intact to the Risk Management Agency along with the crop insurance functions"],
            correctIndex: 0,
            explanation: "Section 227 abolished them by repealing 7 U.S.C. § 1982 and part of § 1983, which USDA recorded in the Federal Register in 1996.",
            sourceLessonSlug: "two-committee-systems",
          },
          {
            prompt: "Which two code sections did section 227 repeal in whole or in part?",
            options: ["7 U.S.C. §§ 1982 and 1983", "7 U.S.C. §§ 1922 and 1941, the two eligibility sections for ownership and operating loans", "16 U.S.C. § 590h and 7 U.S.C. § 2003, the committee and participation-rate provisions", "7 U.S.C. §§ 1942 and 1961, which enumerate operating and emergency loan purposes"],
            correctIndex: 0,
            explanation: "USDA's notice names sections 332 and part of 333 of the Consolidated Farm and Rural Development Act, codified at 7 U.S.C. §§ 1982 and 1983.",
            sourceLessonSlug: "two-committee-systems",
          },
          {
            prompt: "After the merger, which committees made Farm Credit Programs eligibility determinations?",
            options: ["The elected FSA county or area committees", "A new national review board seated in Washington and staffed by career loan officers", "The appointed state committees, acting on recommendations from the county executive directors", "Commercial lenders participating in the guaranteed loan programme, under delegated authority"],
            correctIndex: 0,
            explanation: "USDA announced that FSA county or area committees would make the eligibility determinations formerly made by FmHA county committees.",
            sourceLessonSlug: "two-committee-systems",
          },
          {
            prompt: "Which discarded eligibility requirement asked a local body to judge an applicant's character?",
            options: ["Character, industry, and ability", "Sufficient training or farming experience to assure a reasonable prospect of success in the operation", "Inability to obtain sufficient credit elsewhere at reasonable rates and terms in the community", "Being or becoming the operator of not larger than a family farm as the Secretary defines it"],
            correctIndex: 0,
            explanation: "The abolished test asked whether the applicant had the character, industry, and ability to carry out the proposed operations and would honestly endeavor to carry out its undertakings.",
            sourceLessonSlug: "two-committee-systems",
          },
          {
            prompt: "In which year was the character, industry, and ability test abolished?",
            options: ["1994", "1935, when the Soil Conservation and Domestic Allotment Act first authorised the committees", "1982, the year the U.S. Commission on Civil Rights published its report on Black farming", "1996, the year USDA published the notice announcing the new committee role"],
            correctIndex: 0,
            explanation: "Public Law 103-354 was enacted in October 1994; USDA published the implementing notice in April 1996.",
            sourceLessonSlug: "two-committee-systems",
          },
          {
            prompt: "In which publication did USDA record the abolition and the transfer of committee duties?",
            options: ["The Federal Register", "The United States Statutes at Large, in the volume covering the 103rd Congress", "The Congressional Record, in the debate on the reorganisation bill's conference report", "The Department's annual report to Congress on farm credit programme performance"],
            correctIndex: 0,
            explanation: "The notice appears at 61 Fed. Reg. 16461, published 15 April 1996, and is readable in full today.",
            sourceLessonSlug: "two-committee-systems",
          },
          {
            prompt: "According to CRS, how many members may a county committee now have?",
            options: ["Three to eleven", "Exactly three, unchanged from the number the Farmers Home Administration committees carried", "Five to fifteen, with the larger figure reserved for counties above a population threshold", "One for each local administrative area, with no statutory ceiling on the total"],
            correctIndex: 0,
            explanation: "County committees now consist of 3 to 11 members including the chairperson and vice chairperson, the upper figure reflecting combined committees.",
            sourceLessonSlug: "two-committee-systems",
          },
          {
            prompt: "How long is a county committee member's term, and how many consecutive terms may they serve?",
            options: ["Three years, three terms", "One year, renewable indefinitely so long as the member remains an eligible producer", "Five years, with a single reappointment permitted at the state committee's discretion", "Two years, with no limit on consecutive service but a bar on serving in two counties at once"],
            correctIndex: 0,
            explanation: "CRS reports three-year terms and a limit of three consecutive terms.",
            sourceLessonSlug: "two-committee-systems",
          },
          {
            prompt: "How many hours a month may a county committee member work?",
            options: ["Eight", "Forty, the equivalent of one full working week per calendar month", "As many as the caseload requires, since the position is salaried rather than hourly", "Twenty, split evenly between committee meetings and field visits to applicants"],
            correctIndex: 0,
            explanation: "Members are paid hourly at a level equivalent to GS-6 step 1 and are limited to eight hours of work a month.",
            sourceLessonSlug: "two-committee-systems",
          },
          {
            prompt: "Which duty does CRS list first among the modern county committee's responsibilities?",
            options: ["Selecting the County Executive Director", "Approving every direct farm ownership loan made within the committee's jurisdiction", "Setting the interest rate charged on operating loans originated in the county that year", "Certifying the acreage and yield history used to compute federal crop insurance premiums"],
            correctIndex: 0,
            explanation: "The published duty list begins with selecting the County Executive Director, then outreach, then reviewing, approving and certifying applications and documents.",
            sourceLessonSlug: "two-committee-systems",
          },
          {
            prompt: "Who is the County Executive Director?",
            options: ["A full-time USDA employee", "An elected officer chosen on the same ballot as the county committee members themselves", "A political appointee named by the Secretary and serving at the Secretary's pleasure", "The senior commercial lender in the county, serving in an ex officio advisory capacity"],
            correctIndex: 0,
            explanation: "The director is a full-time USDA employee running day-to-day county office operations, selected by the county committee.",
            sourceLessonSlug: "two-committee-systems",
          },
          {
            prompt: "What happened to community committees in 1995?",
            options: ["They were dropped", "They absorbed the abolished FmHA committees and took over all credit eligibility work", "They were made elective for the first time, having previously been appointed by the state committee", "They were expanded to eleven members to match the new maximum for county committees"],
            correctIndex: 0,
            explanation: "CRS records that community committees were dropped from the official structure of the county committee system in 1995 as part of the reorganisation.",
            sourceLessonSlug: "two-committee-systems",
          },
          {
            prompt: "What did the Farm Security and Rural Investment Act of 2002 authorise the Secretary to do about representation?",
            options: ["Appoint one additional member", "Reserve two of every five county committee seats for members of socially disadvantaged groups", "Void any county election in which no socially disadvantaged candidate appeared on the ballot", "Replace elections with appointment in any county falling below a representation threshold"],
            correctIndex: 0,
            explanation: "P.L. 107-171 authorised the Secretary to appoint one additional socially disadvantaged member to achieve the goal of fair representation in a committee's jurisdiction.",
            sourceLessonSlug: "two-committee-systems",
          },
          {
            prompt: "What did the 2008 farm bill require the Secretary to do about socially disadvantaged representation?",
            options: ["Develop procedures to maintain it", "Publish the race and gender of every sitting member in the Federal Register each January", "Appoint a socially disadvantaged member to every committee in every county without exception", "Withhold programme funds from any county whose committee had no socially disadvantaged member"],
            correctIndex: 0,
            explanation: "P.L. 110-246 required the Secretary to develop procedures to maintain socially disadvantaged representation on combined or consolidated committees.",
            sourceLessonSlug: "two-committee-systems",
          },
          {
            prompt: "Under 16 U.S.C. § 590h(b)(5), what must an election report include about each nominee?",
            options: ["Race, ethnicity, and gender", "The acreage the nominee farms and the programmes in which the nominee participates", "The nominee's outstanding federal loan balance and any history of delinquency or default", "A written statement of the nominee's policy positions on the programmes the committee runs"],
            correctIndex: 0,
            explanation: "The statute requires reporting the race, ethnicity, and gender of each nominee, as provided through voluntary self-identification.",
            sourceLessonSlug: "two-committee-systems",
          },
          {
            prompt: "Who may vote in a county committee election, according to CRS?",
            options: ["Producers of legal voting age in the area", "Any resident of the county who is registered to vote in federal and state elections", "Only borrowers with an active federal farm loan file in that county office", "Only landowners, whether or not they personally participate in farming operations"],
            correctIndex: 0,
            explanation: "Eligible voters must be of legal voting age and be involved with farming, the spouse of a farmer, or a representative of an entity involved in farming.",
            sourceLessonSlug: "two-committee-systems",
          },
          {
            prompt: "Which act established a pilot programme for urban and suburban county committees?",
            options: ["The Agriculture Improvement Act of 2018", "The Farm Security and Rural Investment Act of 2002, which also opened elections to self-nomination", "The Food, Conservation and Energy Act of 2008, which set the eleven-member ceiling", "The Department of Agriculture Reorganization Act of 1994, which created the Farm Service Agency"],
            correctIndex: 0,
            explanation: "P.L. 115-334 created the pilot for counties with a high concentration of urban or suburban farms.",
            sourceLessonSlug: "two-committee-systems",
          },
          {
            prompt: "What is the significance of the eight-hour monthly limit set against the crop calendar?",
            options: ["Decisions with deadlines rest on very little time", "It guarantees a decision within eight working days of any complete application being filed", "It requires the committee to delegate all routine determinations to the County Executive Director", "It means the committee meets weekly during planting season and not at all thereafter"],
            correctIndex: 0,
            explanation: "A body that meets briefly is deciding time-sensitive applications with little room, which is exactly where a delay becomes a denial.",
            sourceLessonSlug: "two-committee-systems",
          },
          {
            prompt: "Why does mixing up the two committee systems produce wrong conclusions?",
            options: ["One was elected and the other was not", "Because the two systems administered identical programmes under different statutory names", "Because the elected system predated the appointed one by more than half a century", "Because only one of them survived the 1994 reorganisation with its membership unchanged"],
            correctIndex: 0,
            explanation: "The conservation and price-support committees were elected by producers; the credit committees were seated administratively, so claims about how members were chosen depend on which body is meant.",
            sourceLessonSlug: "two-committee-systems",
          },
          {
            prompt: "Which of these was NOT a function of the pre-1994 FmHA county committee?",
            options: ["Being elected by producers", "Determining the eligibility of applicants for federal farm loans in the county", "Setting limits on the amount of credit that would be extended to a borrower", "Operating separately from the conservation and price-support committee in the same county"],
            correctIndex: 0,
            explanation: "The credit committees were seated administratively rather than elected, which is precisely what distinguished them from the 1935 Act committees.",
            sourceLessonSlug: "two-committee-systems",
          },
          {
            prompt: "How does the merger of the two systems complicate a claim about county committees over time?",
            options: ["The same phrase names two different bodies", "The merger abolished elections entirely, so no committee has been elected since 1994", "The merger moved all committee functions to the state level and left the counties with none", "The merger renamed the committees without changing who sat on them or how they were chosen"],
            correctIndex: 0,
            explanation: "Before 1994 county committee could mean an elected conservation body or an appointed credit body, so any claim has to say which and when.",
            sourceLessonSlug: "two-committee-systems",
          },
          {
            prompt: "Which best states the shape of federal farm programme delivery?",
            options: ["A federal benefit through a local gate", "A local benefit administered by a federal officer with no discretion at any level", "A federal benefit distributed automatically by formula with no application required", "A state benefit funded federally and delivered through the state land-grant university"],
            correctIndex: 0,
            explanation: "Congress creates and funds the programme and a county body decides who inside the county receives it, which is the mechanism this course is about.",
            sourceLessonSlug: "two-committee-systems",
          },
          {
            prompt: "Which statement about interest rates and the credit-elsewhere test is accurate?",
            options: ["The test is about availability, not price alone", "The test requires the applicant to prove that no lender will lend at any rate whatsoever", "The test compares the applicant's rate against the federal funds rate on the date of application", "The test is waived entirely for emergency loans made after a presidential disaster declaration"],
            correctIndex: 0,
            explanation: "The statutory phrase is sufficient credit at reasonable rates and terms, so both the amount and the terms are in issue, judged locally.",
            sourceLessonSlug: "unable-to-obtain-credit-elsewhere",
          },
          {
            prompt: "What does the presence of family subsistence in the operating-loan purposes tell you about the programme?",
            options: ["It expects applicants with nothing else", "It shows the programme was designed primarily for large commercial operations diversifying income", "It indicates that the loan may be used for any household purpose unconnected to the farm", "It proves the loan is a grant in substance, since subsistence spending is never repaid"],
            correctIndex: 0,
            explanation: "A credit programme that contemplates lending a family the money to eat is not a commercial line of credit, and the eligibility test points the same way.",
            sourceLessonSlug: "timing-is-the-whole-game",
          },
          {
            prompt: "Which is a correct reading of the relationship between § 2003 and the county decision?",
            options: ["The statute stocks a shelf, someone local decides who reaches it", "The statute assigns each qualifying applicant a specific reserved loan by name and amount", "The statute removes county discretion by requiring approval of every application within the reserve", "The statute directs the county committee to approve applications in the order they are received"],
            correctIndex: 0,
            explanation: "A reservation of funds against a population proportion leaves every individual approval to local determination.",
            sourceLessonSlug: "unable-to-obtain-credit-elsewhere",
          },
          {
            prompt: "Which is true of the 1935 Act's committee structure as originally authorised?",
            options: ["It had three levels", "It had two levels, state and county, with no community tier at any point", "It applied only to the cotton and tobacco states named in the Act's own schedule", "It gave the committees no role in appeals, which were heard only in Washington"],
            correctIndex: 0,
            explanation: "State, county and community committees were authorised, and they also considered administrative appeals; the community tier was dropped in 1995.",
            sourceLessonSlug: "two-committee-systems",
          },
          {
            prompt: "Where must a farmer serve on a county committee, under the 2008 farm bill clarification?",
            options: ["Where their farm records are administered", "In the county where they reside, whether or not they farm any land inside it", "In any county in the state, provided they hold an active loan in that county", "In the county where the largest share of their acreage lies, measured each January"],
            correctIndex: 0,
            explanation: "P.L. 110-246 clarified that a farmer or rancher may serve only on the committee for the county office where their farm records are administered.",
            sourceLessonSlug: "two-committee-systems",
          },
          {
            prompt: "What did the 1994 act do with the Federal Crop Insurance Corporation's functions?",
            options: ["They later sat in a separate agency", "They were abolished outright along with the FmHA county committees in the same section", "They were transferred to the elected county committees together with the credit functions", "They were left with the Agricultural Stabilization and Conservation Service, which survived intact"],
            correctIndex: 0,
            explanation: "CRS records that crop insurance functions folded into FSA at the reorganisation and now sit in the separate Risk Management Agency.",
            sourceLessonSlug: "two-committee-systems",
          },
          {
            prompt: "Which combination correctly describes a modern county committee's pay?",
            options: ["Hourly, at a GS-6 step 1 equivalent", "An annual salary set at the GS-11 grade, matching the County Executive Director", "No pay at all, since the position is a voluntary service to the producers of the county", "A per-application fee funded from the loan servicing charges collected in that county"],
            correctIndex: 0,
            explanation: "CRS reports pay at a level equivalent to GS-6 step 1 on an hourly basis, capped at eight hours a month.",
            sourceLessonSlug: "two-committee-systems",
          },
          {
            prompt: "Which of these is the best description of what section 226 of P.L. 103-354 did?",
            options: ["Moved functions into a new agency", "Repealed the eligibility standards for direct farm ownership and operating loans", "Created the target participation rates for socially disadvantaged farmers and ranchers", "Established the urban and suburban county committee pilot programme"],
            correctIndex: 0,
            explanation: "Section 226 transferred FmHA's farmer programme loan functions and all ASCS functions into what is now the Farm Service Agency.",
            sourceLessonSlug: "two-committee-systems",
          },
          {
            prompt: "Why is it fair to call the pre-1994 credit standard a judgment about the person rather than the plan?",
            options: ["It asked about character and industry", "It required a written business plan reviewed by an independent agricultural economist", "It measured the applicant's collateral against a schedule of appraised values published annually", "It compared the applicant's projected yields against the county average for the preceding decade"],
            correctIndex: 0,
            explanation: "The abolished test turned on the applicant's character, industry and ability and on whether they would honestly endeavor to meet their obligations.",
            sourceLessonSlug: "two-committee-systems",
          },
          {
            prompt: "Which of these correctly names the agency that today runs both the programmes and the county committees?",
            options: ["The Farm Service Agency", "The Natural Resources Conservation Service, which also administers the conservation easements", "The National Institute of Food and Agriculture, which distributes the land-grant capacity grants", "The Risk Management Agency, which took over the crop insurance functions after 1994"],
            correctIndex: 0,
            explanation: "FSA was created in 1994 and runs the county committee system along with the credit, conservation, price support and disaster programmes.",
            sourceLessonSlug: "two-committee-systems",
          },
          {
            prompt: "A learner reads that county committees are elected and concludes that Black farmers could simply vote in their own representatives. What is the first thing to check?",
            options: ["Which committee, and in which decade", "Whether the county held an election that year rather than an appointment round", "Whether the farmers involved held a farm number in more than one county at once", "Whether the state committee had exercised its power to overturn the county result"],
            correctIndex: 0,
            explanation: "The credit committees were not elected at all before 1994, so an argument built on elections has to establish which body and which period it is talking about.",
            sourceLessonSlug: "two-committee-systems",
          },
          {
            prompt: "Under 7 U.S.C. § 1941(a)(1), what must an operating loan applicant be or become?",
            options: ["The operator of not larger than a family farm", "The owner of at least eighty acres of tillable land held free of any prior mortgage", "A member in good standing of a producer cooperative chartered under state law", "A participant in the federal crop insurance programme for the three preceding crop years"],
            correctIndex: 0,
            explanation: "The operating-loan section mirrors the ownership section on this point, requiring the applicant to be or become the operator of not larger than a family farm.",
            sourceLessonSlug: "unable-to-obtain-credit-elsewhere",
          },
          {
            prompt: "What does the experience condition for direct loans require the Secretary to determine?",
            options: ["That there is a reasonable prospect of success", "That the applicant has completed a formal course of instruction at a land-grant institution", "That the applicant has never previously defaulted on any obligation to the federal government", "That the applicant's projected yields exceed the county average for the preceding five years"],
            correctIndex: 0,
            explanation: "The statute asks for training or farming experience sufficient to assure reasonable prospects of success in the proposed farming operations.",
            sourceLessonSlug: "unable-to-obtain-credit-elsewhere",
          },
          {
            prompt: "How does the statute treat a gap in an applicant's farming history when weighing experience?",
            options: ["It counts all experience without regard to the lapse", "It disregards any experience earned more than ten years before the date of application", "It requires the applicant to restart the three-year clock after any interruption of a full crop year", "It permits the county committee to decide case by case whether a lapse is disqualifying"],
            correctIndex: 0,
            explanation: "The statute directs that all farming experience be taken into consideration, without regard to any lapse between farming experiences.",
            sourceLessonSlug: "unable-to-obtain-credit-elsewhere",
          },
          {
            prompt: "Which of these best describes the population the eligibility rules together select?",
            options: ["Small operators with no alternatives", "Established commercial growers seeking a cheaper rate than their existing bank offers", "Absentee landowners renting acreage to tenants under cash-rent arrangements", "Corporate farming entities too large for conventional agricultural credit markets"],
            correctIndex: 0,
            explanation: "The family-farm cap points the programme downward and the credit-elsewhere test admits only applicants other lenders have refused.",
            sourceLessonSlug: "unable-to-obtain-credit-elsewhere",
          },
          {
            prompt: "Which is a purpose 7 U.S.C. § 1942(a) names that is not an input cost?",
            options: ["Paying loan closing costs", "Purchasing an additional quarter section of adjacent pasture to expand the herd", "Making a charitable contribution to a rural hospital serving the borrower's county", "Refinancing a residential mortgage on property unconnected with the farming operation"],
            correctIndex: 0,
            explanation: "Closing costs appear on the enumerated list alongside inputs, land and water development, borrower training and family subsistence.",
            sourceLessonSlug: "timing-is-the-whole-game",
          },
          {
            prompt: "What kind of event, besides a natural disaster, can make emergency loans available under § 1961?",
            options: ["A quarantine imposed by the Secretary", "A collapse in the market price of the borrower's principal commodity below cost of production", "The failure of the borrower's local bank or agricultural credit association during the crop year", "A determination by the county committee that the borrower's operating loan was wrongly denied"],
            correctIndex: 0,
            explanation: "The section names a quarantine under the Plant Protection Act or the animal quarantine laws alongside natural disasters and presidential declarations.",
            sourceLessonSlug: "timing-is-the-whole-game",
          },
          {
            prompt: "May a farmer in a county next to a designated one apply for an emergency loan?",
            options: ["Yes, if substantially affected", "No, because the statute limits eligibility strictly to the county named in the designation", "Only with the written consent of the state committee in both counties concerned", "Only if the farmer holds an existing federal loan in the designated county as well"],
            correctIndex: 0,
            explanation: "The statute allows applications from contiguous counties where operations were substantially affected by the same event.",
            sourceLessonSlug: "timing-is-the-whole-game",
          },
          {
            prompt: "Does 7 U.S.C. § 1961 set a numerical loss threshold for substantial effect?",
            options: ["No", "Yes, a loss of at least thirty per cent of normal production for the affected commodity", "Yes, a loss of at least half the operation's gross receipts in the preceding crop year", "Yes, a loss equal to the outstanding balance of the applicant's existing federal loans"],
            correctIndex: 0,
            explanation: "The statute uses substantially affected without defining a number, leaving the judgment to the designation process.",
            sourceLessonSlug: "timing-is-the-whole-game",
          },
          {
            prompt: "Which duty of the modern county committee touches how the county is districted?",
            options: ["Recommending local administrative area boundaries", "Redrawing the county's precinct lines for state and federal elections every ten years", "Approving the annexation of farmland into a neighbouring municipality's tax base", "Assigning farm numbers to newly purchased tracts within the county's jurisdiction"],
            correctIndex: 0,
            explanation: "CRS lists recommending and reviewing local administrative area boundaries among the committee's published duties.",
            sourceLessonSlug: "two-committee-systems",
          },
          {
            prompt: "Which duty of the modern county committee is aimed at socially disadvantaged farmers specifically?",
            options: ["Directing outreach activities", "Reserving a fixed share of programme payments for members of socially disadvantaged groups", "Reviewing every denial issued to a socially disadvantaged applicant in the preceding year", "Appointing an additional adviser drawn from a community-based organisation in the county"],
            correctIndex: 0,
            explanation: "The duty list includes directing outreach to inform socially disadvantaged farmers of programmes and of the county committee election process.",
            sourceLessonSlug: "two-committee-systems",
          },
          {
            prompt: "Under 16 U.S.C. § 590h(b)(5), what must the Secretary do when committees are combined or consolidated?",
            options: ["Maintain socially disadvantaged representation", "Hold a fresh election in every affected county within ninety days of the consolidation", "Reduce the combined committee to the statutory minimum of three members", "Transfer the combined committee's eligibility functions to the state committee"],
            correctIndex: 0,
            explanation: "The statute directs the Secretary to develop procedures to maintain representation of socially disadvantaged farmers and ranchers on combined or consolidated committees.",
            sourceLessonSlug: "two-committee-systems",
          },
          {
            prompt: "Which is the correct sequence for the credit committees?",
            options: ["Created, abolished in 1994, work moved to elected committees", "Created in 1935, made elective in 1994, and abolished by the 2008 farm bill", "Created in 1994 by the reorganisation act and still seated administratively today", "Created in 1935, merged with the state committees in 1995, and never restored"],
            correctIndex: 0,
            explanation: "FmHA committees predated the reorganisation, were abolished by section 227 of P.L. 103-354, and their eligibility work passed to the elected FSA committees.",
            sourceLessonSlug: "two-committee-systems",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2 — The committee
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "three-people-in-the-county",
      title: "5 · Three people in the county",
      section: "Section 2 · The committee",
      body: `In February 1982 the United States Commission on Civil Rights published a 203-page report called **The Decline of Black Farming in America**, prepared by Pamela Browning. It is public domain, the Commission still hosts it, and one paragraph in it is the reason this course has the title it has.

**Here is the Farmers Home Administration county committee, in the Commission's own words, quoting USDA's own description:**

> "(C)omposed of three individuals residing in the county, at least two of whom are farmers..., (t)he committee determines the eligibility of individual applicants and the limits of credit to be extended." Committee members are nominated by FmHA county supervisors and appointed by FmHA State directors. (U.S. Commission on Civil Rights, 1982, p. 92)

The report restates it in its Findings:

> "FmHA county committees composed of three members, at least two of whom are farmers, determine the eligibility of FmHA farm loan applicants and the limits of credit to be extended to borrowers. Committee members are nominated by FmHA county supervisors and appointed by FmHA State directors." (U.S. Commission on Civil Rights, 1982, p. 188)

**Read it as a machine, one part at a time.**

**Three people.** Not an office, not a panel of underwriters, not an algorithm. Three individuals, and a majority of three is two.

**Residing in the county.** They live where the applicant lives. They know who the applicant is, what their father was, whose land adjoins whose, and what the church and the courthouse think of them. Local knowledge is the stated point of the design and it is also its exposure.

**At least two of whom are farmers.** Now hold this against Lesson 2. The applicant has already proved that no commercial lender will serve them. They are applying for money to plant a crop. And two of the three people deciding are **in the same business in the same county**, which is to say they are the applicant's competitors for land, for labour, for a buyer's attention and, in a fixed county allocation, for the money itself. That is not an accusation. It is a description of the seating.

**Determines the eligibility ... and the limits of credit.** Both. Not just whether you are in, but how much. A committee that approves you for less than you asked has not denied you and has still decided your year.

**Nominated by FmHA county supervisors and appointed by FmHA State directors.** So the chain runs **downward**, not outward. Nobody in this sentence was elected by anybody. Compare Lesson 3: the conservation and price-support committees in the very same counties were **elected** by producers under the 1935 Act. Two bodies, two counties' worth of the same word, and only one of them ever faced a vote.

**And now put Lesson 1 back on the table.** This body meets, considers, and decides on a calendar that does not stop. A delay is not a neutral outcome. It is one of the outcomes.

**One more thing to notice, because it is the sentence the whole course turns on.** Federal money, appropriated by Congress under national statutes, arrives at a farm only after three named local people say so. **That is a federal benefit delivered through a local gate.** WARRANT-01 met that same move as a funding formula, where Congress created a benefit, excluded a class, built a smaller separate channel, and let a state decline to match it. Here the move has a face and an address. **The gate is the mechanism, and who stands at it is the question.**

Lesson 6 is who stood at it, counted.

:::reveal How many members did an FmHA county committee have, and how many had to be farmers? ||| Three members, at least two of whom were farmers.

:::reveal What two things did the FmHA county committee determine? ||| The eligibility of individual applicants, and the limits of credit to be extended to them.

:::reveal How did a person become an FmHA county committee member? ||| Nominated by the FmHA county supervisor and appointed by the FmHA State director, with no election at any stage.

## Vocabulary
- **Farmers Home Administration county committee**: the three-member local body that determined federal farm loan eligibility and credit limits until the committees were abolished in 1994.
- **County supervisor**: the FmHA officer who nominated committee members, and the same office that processed the applications those members decided.
- **State director**: the FmHA official who appointed county committee members, so that the appointing chain ran down from the agency rather than out to the producers.
- **Local gate**: a body seated in the community that decides who receives a benefit created and funded nationally.
- **Findings section**: the numbered conclusions at the end of a commission report, which restate the body's material and do not always match it word for word.

## Sources
U.S. Commission on Civil Rights. (1982, February). *The decline of Black farming in America*. U.S. Government Printing Office. https://www.usccr.gov/files/historical/1982/82-018.pdf`,
    },
    {
      slug: "who-sat-on-it",
      title: "6 · Who sat on it, counted, in a report that disagrees with itself",
      section: "Section 2 · The committee",
      body: `The Commission counted the committees. Here is the national paragraph, verbatim:

> "In 1980, 4.3 percent of all FmHA county committee members were black, down from 7.2 percent in 1979. From 1979 to 1980, the number of black committee members dropped from 427 to 257, a 39.8 percent decline in black participation in 1 year, while total committee membership rose from 5,863 to 5,966." (U.S. Commission on Civil Rights, 1982, p. 92)

**Take that apart before you feel anything about it.** Total membership went **up**, from 5,863 to 5,966. Black membership went **down**, from 427 to 257. Those two movements in one year are not the same thing as a shrinking programme, and the report's arithmetic is checkable: 257 out of 5,966 is 4.31 per cent, and 427 out of 5,863 is 7.28 per cent, so the printed 4.3 and 7.2 are right.

**The state table, and what it does and does not cover.** Table 4.1 at page 93 is titled "Number of Black FmHA Committee Members (1979 and 1980)" and its source is USDA's own **Equal Opportunity Report: USDA Programs, 1980**, at pages 53 and 73 to 76. It lists **nine states**, not fifty:

| State | 1979 | 1980 | Per cent change |
| --- | --- | --- | --- |
| Alabama | 37 | 19 | -48.6 |
| Florida | 14 | 10 | -28.6 |
| Georgia | 61 | 24 | -60.7 |
| Mississippi | 48 | 21 | -56.3 |
| North Carolina | 47 | 31 | -34.0 |
| South Carolina | 27 | 19 | -29.6 |
| Tennessee | 12 | 2 | -83.3 |
| Texas | 33 | 18 | -45.5 |
| Virginia | 49 | 29 | -40.8 |

**Nine states, not the nation.** Those 1979 figures sum to 328 and the 1980 figures to 173, against national totals of 427 and 257. **Do not present Table 4.1 as a national table**, and if you ever see it reproduced as one, you have found a citation that did not open the page.

**Now the part this course is obliged to tell you, and it is the best lesson in the section.** The report contradicts itself about Tennessee, in print, and there are two printings.

- The edition the Commission hosts today, a Government Printing Office setting, prints Tennessee in Table 4.1 as **12 to 2**, a **83.3 per cent** loss, and its chapter text at page 94 says 83.3 as well.
- The same edition's **Findings**, at page 188, says Tennessee lost **93.3 per cent**.
- The earlier February 1982 typescript prints the table row as **33 to 2** with a **93.3** per cent change, which does not compute either: 33 to 2 is a fall of 93.94 per cent, and a fall of exactly 93.3 per cent would require 30 to 2.

**Do the arithmetic yourself and it settles.** 12 minus 2 is 10, and 10 divided by 12 is 0.8333. **83.3 per cent is exact, and it is the figure the table in the published edition supports.** So this course uses 83.3, and says out loud that the report disagrees with itself, that a correction reached the table and the chapter but never reached the Findings, and that the two printings differ.

**Why say all that instead of just printing 83.3?** Because you will meet 93.3 in the wild, cited to this report, and the person citing it will not be lying. They will be quoting page 188. **A source that contradicts itself is not a bad source. It is a source you now know how to use**, which is a different and more durable thing than a number.

**Two temptations to refuse here.**

**The first is to read the drop as proof of intent.** It is not. It is a count of who held seats. Lesson 7 is entirely about that boundary and the Commission draws it itself, in a sentence this course quotes in full.

**The second is to read the drop as a small thing because the numbers are small.** Also wrong, in the other direction. In a nine-state region where Black farmers were concentrated, the number of Black people sitting on the bodies that determined eligibility and credit limits fell from 328 to 173 in a single year. Whatever explains it, that is the composition of the gate at the moment Lesson 8's applicants walked up to it.

:::reveal What happened to total and Black FmHA county committee membership between 1979 and 1980? ||| Total membership rose from 5,863 to 5,966 while Black membership fell from 427 to 257, a decline of 39.8 per cent.

:::reveal Why must Table 4.1 not be described as a national table? ||| It covers nine states, whose totals of 328 and 173 fall well short of the national 427 and 257.

:::reveal Which Tennessee figure does the published table's own arithmetic support, and what should be said about the other? ||| 83.3 per cent, since 12 to 2 is an exact 83.33 per cent fall; the report's Findings section still prints 93.3, so the source contradicts itself and should be described that way.

## Vocabulary
- **Equal Opportunity Report**: USDA's own annual accounting of programme participation and staffing by race, which is where the Commission's committee figures came from.
- **Printing**: a distinct typesetting of the same document, which can carry corrections the other does not, so two honest people may quote the same report and differ.
- **Internal contradiction**: a disagreement between two parts of one document, which is a fact about the source rather than a reason to discard it.
- **Composition**: who holds the seats on a deciding body, which is a count and not by itself a finding about anyone's conduct.

## Sources
U.S. Commission on Civil Rights. (1982, February). *The decline of Black farming in America*. U.S. Government Printing Office. https://www.usccr.gov/files/historical/1982/82-018.pdf

U.S. Commission on Civil Rights. (1982, February). *The decline of Black farming in America* [February 1982 printing]. Education Resources Information Center (ED222604). https://files.eric.ed.gov/fulltext/ED222604.pdf`,
    },
    {
      slug: "numbers-alone-do-not-prove-discrimination",
      title: "7 · Numbers alone do not prove discrimination",
      section: "Section 2 · The committee",
      body: `A federal civil rights commission spent 203 pages documenting the collapse of Black farming, printed participation rates by race, and then wrote this, at page 94, in the middle of the chapter you just read:

> "This comparative analysis does not suggest that specific program participation rates by blacks and whites indicate the presence or absence of racial discrimination in FmHA programs. Numbers alone do not prove discrimination. Moreover, drawing such conclusions would be difficult because of the lack of appropriate reliable data" (U.S. Commission on Civil Rights, 1982, p. 94)

**Sit with how unusual that is.** The body with the most institutional incentive to draw the inference declined to draw it, in writing, on the page where the inference was most available. This course quotes that sentence verbatim because it is the standard the rest of the material has to meet, and because a learner who takes only one habit away from this course should take that one.

**What a participation rate can and cannot do.**

**It can establish a fact that requires explaining.** If a population holds seven per cent of the seats and then four per cent, something happened. Something always happened. The number is a genuine observation about the world.

**It cannot supply the explanation.** A gap is consistent with many mechanisms. Deliberate exclusion is one. So are: fewer applicants, because people stopped applying to a body they expected to say no; office closures that removed seats unevenly; a change in how the agency counted; the shrinking of the farm population itself; the vacancy pattern of three-year staggered terms; and simple error in a hand-compiled table. **A number that is consistent with six explanations is evidence for none of them on its own.**

**And the Commission names the deeper problem in the same breath: the data.** "The lack of appropriate reliable data" is not a hedge, it is a finding about the record. An agency that does not collect the right thing cannot be evaluated on it, by its critics or by its defenders. Recall from Lesson 3 that current law now requires an election report to record "the race, ethnicity, and gender of each nominee" (16 U.S.C. § 590h, n.d.). **That requirement exists because the absence of it was itself a finding.**

**So what does move a claim from a gap to a conclusion?** Four things, and none of them is a bigger gap.

1. **A comparator.** Two people similarly situated, treated differently, identified. This is exactly what Section 5's settlement required of every claimant on its lower-proof track, and it is why that track's denial rate is not small.
2. **A decision record.** What was applied for, what was granted, when, and on what stated ground. A programme that keeps this can be audited; one that does not cannot be defended either.
3. **A mechanism.** A named path by which the outcome could occur, like the one in Lesson 5: three local people, two of them competitors, deciding eligibility and credit limits on a seasonal clock.
4. **A finding by somebody with subpoena power or the parties' agreement**, rather than by inference from a table.

**Notice what that list does to this course.** It means Sections 1 to 4 establish the mechanism and the record, and only Section 5 supplies an adjudicated outcome. The order is deliberate. **Mechanism first, evidence second, conclusion only where somebody with authority actually reached one.**

**And notice what it does to the opposite argument.** The same discipline that stops a table from proving discrimination also stops a table from disproving it. "Numbers alone do not prove discrimination" cuts in both directions, and a person who quotes it only when the numbers are inconvenient has not adopted the standard, they have adopted a tactic. Section 6 meets that exact pattern in a real dispute about real audit findings.

**One practical habit to take out of this lesson.** When you meet a statistic in an argument, ask what would have to be true besides the number for the conclusion to follow, and then ask whether the person offering it has supplied that. Most of the time they have not, and most of the time they have not noticed.

:::reveal What did the Commission say about what participation rates by race can establish? ||| That they do not indicate the presence or absence of racial discrimination, because numbers alone do not prove discrimination.

:::reveal Name three explanations besides discrimination that a falling participation rate is consistent with. ||| Fewer applications, uneven office closures or seat losses, a change in how the agency counted, a shrinking farm population, staggered term vacancies, or error in a hand-compiled table.

:::reveal What four things move a claim from a gap to a conclusion? ||| A comparator, a decision record, a named mechanism, and a finding by a body with subpoena power or the parties' agreement.

## Vocabulary
- **Participation rate**: the share of a programme's beneficiaries or officers drawn from a given group, which describes an outcome without explaining it.
- **Comparator**: a similarly situated person treated differently, which is what turns an aggregate gap into an individual claim.
- **Decision record**: the documented account of what was requested, what was granted, and on what stated ground, without which a programme can be neither audited nor defended.
- **Mechanism**: a named path by which an outcome could actually have been produced, as distinct from the outcome itself.
- **Cuts both ways**: the property of an evidentiary standard that it constrains the argument you like as much as the one you do not.

## Sources
16 U.S.C. § 590h. (n.d.). *Assistance to cooperators*. Office of the Law Revision Counsel, U.S. House of Representatives. https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title16-section590h&num=0&edition=prelim

U.S. Commission on Civil Rights. (1982, February). *The decline of Black farming in America*. U.S. Government Printing Office. https://www.usccr.gov/files/historical/1982/82-018.pdf`,
    },
    {
      slug: "quiz-the-committee",
      title: "8 · Knowledge check: the committee",
      section: "Section 2 · The committee",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "Which federal body published The Decline of Black Farming in America?",
            options: ["The U.S. Commission on Civil Rights", "The Government Accountability Office, then known as the General Accounting Office", "The Economic Research Service of the Department of Agriculture", "The Congressional Research Service, at the request of the House Agriculture Committee"],
            correctIndex: 0,
            explanation: "The Commission published the 203-page report in February 1982, prepared by Pamela Browning.",
            sourceLessonSlug: "three-people-in-the-county",
          },
          {
            prompt: "In what month and year was that report published?",
            options: ["February 1982", "August 1997, the month in which the first Pigford suits were filed", "October 1994, when the reorganisation act abolished the credit committees", "December 2012, the month the Government Accountability Office reported on the claims process"],
            correctIndex: 0,
            explanation: "The title page dates it February 1982, and a later Government Printing Office setting carries corrections the first printing does not.",
            sourceLessonSlug: "three-people-in-the-county",
          },
          {
            prompt: "How many people sat on an FmHA county committee?",
            options: ["Three", "Five, matching the maximum size of a state committee under the 1935 Act", "Eleven, the maximum a combined county committee may now reach", "Nine, one for each of the states covered by the Commission's own table"],
            correctIndex: 0,
            explanation: "The committee was composed of three individuals residing in the county, at least two of whom were farmers.",
            sourceLessonSlug: "three-people-in-the-county",
          },
          {
            prompt: "How many committee members had to be farmers?",
            options: ["At least two", "At least one, with the remaining seats reserved for local business representatives", "All three, since the statute required agricultural experience of every member", "None, since the committee was intended to be independent of the local farm economy"],
            correctIndex: 0,
            explanation: "At least two of the three had to be farmers, which made a majority of the committee the applicant's competitors.",
            sourceLessonSlug: "three-people-in-the-county",
          },
          {
            prompt: "Where did FmHA county committee members have to live?",
            options: ["In the county", "Anywhere in the state, provided they held no land in the county they served", "In an adjoining county, so that no member decided on a neighbour's application", "In the same local administrative area as at least one other member"],
            correctIndex: 0,
            explanation: "The description specifies three individuals residing in the county, which is the source of both the local knowledge and the exposure.",
            sourceLessonSlug: "three-people-in-the-county",
          },
          {
            prompt: "What two determinations did the FmHA county committee make?",
            options: ["Eligibility and the limits of credit", "The interest rate and the repayment schedule for each approved application", "The appraised value of the security and the adequacy of the applicant's insurance", "Whether the county qualified for a disaster designation and how the funds were split"],
            correctIndex: 0,
            explanation: "The committee determined the eligibility of individual applicants and the limits of credit to be extended to borrowers.",
            sourceLessonSlug: "three-people-in-the-county",
          },
          {
            prompt: "Why does approving an applicant for less than requested still decide their year?",
            options: ["A short loan cannot buy a full crop's inputs", "Because a reduced approval is recorded as a denial in the agency's own statistics", "Because the applicant must reapply from the beginning for the balance of the amount", "Because the committee may not revisit an amount once it has been certified"],
            correctIndex: 0,
            explanation: "The committee set the limits of credit as well as eligibility, and an operation financed short is an operation planted short.",
            sourceLessonSlug: "three-people-in-the-county",
          },
          {
            prompt: "Who nominated FmHA county committee members?",
            options: ["The FmHA county supervisor", "The producers of the county, voting at an annual election in the county office", "The state's congressional delegation, from a list of eligible farmers in each county", "The Secretary of Agriculture, on the recommendation of the state committee"],
            correctIndex: 0,
            explanation: "County supervisors nominated and state directors appointed, so the chain ran down from the agency rather than out to the producers.",
            sourceLessonSlug: "three-people-in-the-county",
          },
          {
            prompt: "Who appointed FmHA county committee members?",
            options: ["The FmHA State director", "The county supervisor, who both nominated and seated each member", "The Secretary of Agriculture personally, under authority delegated by statute", "The county's elected conservation committee, sitting as an appointing body"],
            correctIndex: 0,
            explanation: "Members were nominated by county supervisors and appointed by state directors.",
            sourceLessonSlug: "three-people-in-the-county",
          },
          {
            prompt: "What is the structural contrast between the credit committees and the 1935 Act committees?",
            options: ["Only the 1935 Act committees faced a vote", "The credit committees were larger, with up to eleven members in consolidated counties", "The credit committees served the whole state while the others served a single county", "The credit committees met monthly while the others met only during signup windows"],
            correctIndex: 0,
            explanation: "Conservation and price-support committees were elected by producers; the credit committees were nominated and appointed within the agency.",
            sourceLessonSlug: "three-people-in-the-county",
          },
          {
            prompt: "Why is a majority of an FmHA county committee significant?",
            options: ["Two of three could be the applicant's competitors", "Because a unanimous vote was required to approve any application for credit", "Because the third member held a casting vote reserved to the county supervisor", "Because the committee could not act unless all three attended in person"],
            correctIndex: 0,
            explanation: "At least two of three were farmers in the same county, competing for land, labour, buyers and a fixed county allocation.",
            sourceLessonSlug: "three-people-in-the-county",
          },
          {
            prompt: "Which phrase best describes what the committee system is, in this course's terms?",
            options: ["A federal benefit delivered through a local gate", "A state benefit administered by a federally appointed board of review", "A private lending decision reviewed by a federal appeals body", "A national formula that distributes funds without any local decision"],
            correctIndex: 0,
            explanation: "Congress created and funded the programme and three named local people decided who inside the county received it.",
            sourceLessonSlug: "three-people-in-the-county",
          },
          {
            prompt: "What share of FmHA county committee members were Black in 1980?",
            options: ["4.3 per cent", "7.2 per cent, which is instead the share recorded for the preceding year", "14 per cent, matching the Black share of farm operators in the 1920 census", "39.8 per cent, which is instead the size of the one-year decline in Black members"],
            correctIndex: 0,
            explanation: "The report gives 4.3 per cent in 1980, down from 7.2 per cent in 1979.",
            sourceLessonSlug: "who-sat-on-it",
          },
          {
            prompt: "What share had been Black in 1979?",
            options: ["7.2 per cent", "4.3 per cent, which is instead the share recorded for the following year", "10.0 per cent, the target the agency had set for the end of the decade", "5.0 per cent, the midpoint between the two years the report compares"],
            correctIndex: 0,
            explanation: "427 of 5,863 members is 7.28 per cent, which the report prints as 7.2.",
            sourceLessonSlug: "who-sat-on-it",
          },
          {
            prompt: "How did the number of Black committee members change between 1979 and 1980?",
            options: ["From 427 to 257", "From 328 to 173, which are instead the totals for the nine states in the table", "From 5,863 to 5,966, which is instead the change in total committee membership", "From 12 to 2, which is instead the change recorded for a single state"],
            correctIndex: 0,
            explanation: "The report gives a fall from 427 to 257, a decline of 39.8 per cent in one year.",
            sourceLessonSlug: "who-sat-on-it",
          },
          {
            prompt: "What happened to total committee membership over the same year?",
            options: ["It rose from 5,863 to 5,966", "It fell from 5,966 to 5,863 as county offices were closed and consolidated", "It stayed level, since the statute fixed three members for every county", "It rose from 427 to 257 as new local administrative areas were created"],
            correctIndex: 0,
            explanation: "Total membership rose while Black membership fell, which is why the change is not explained by a shrinking programme.",
            sourceLessonSlug: "who-sat-on-it",
          },
          {
            prompt: "How large was the one-year decline in Black committee membership?",
            options: ["39.8 per cent", "83.3 per cent, which is instead the figure for a single state in the table", "93.3 per cent, the figure the report's Findings section prints for that state", "56.4 per cent, which is instead the loss of white-operated farms since 1920"],
            correctIndex: 0,
            explanation: "The drop from 427 to 257 is a decline of 39.8 per cent in Black participation in one year.",
            sourceLessonSlug: "who-sat-on-it",
          },
          {
            prompt: "How many states does Table 4.1 cover?",
            options: ["Nine", "Fifty, since the table reports national committee membership by state", "Sixteen, the states that would later receive the 1890 land-grant letters", "Eleven, the states of the former Confederacy plus two border states"],
            correctIndex: 0,
            explanation: "The table lists nine states whose totals of 328 and 173 fall short of the national 427 and 257.",
            sourceLessonSlug: "who-sat-on-it",
          },
          {
            prompt: "What do the nine states in Table 4.1 sum to for 1979 and 1980?",
            options: ["328 and 173", "427 and 257, which are instead the national totals reported in the text", "5,863 and 5,966, which are instead the totals for all committee members", "Two figures the report does not print, so the table cannot be checked"],
            correctIndex: 0,
            explanation: "The state rows sum to 328 and 173, which is how you can tell at a glance that the table is regional rather than national.",
            sourceLessonSlug: "who-sat-on-it",
          },
          {
            prompt: "What is the source the Commission gives for Table 4.1?",
            options: ["USDA's own Equal Opportunity Report for 1980", "The 1978 Census of Agriculture, volume I, part 51", "The Farmers Home Administration's annual report to the Secretary", "A survey the Commission conducted of county offices in nine states"],
            correctIndex: 0,
            explanation: "The table cites USDA's Equal Opportunity Report: USDA Programs, 1980, at pages 53 and 73 to 76.",
            sourceLessonSlug: "who-sat-on-it",
          },
          {
            prompt: "Which state in Table 4.1 shows the largest percentage decline?",
            options: ["Tennessee", "Georgia, which fell from 61 members to 24 over the same single year", "Mississippi, which fell from 48 members to 21 over the same single year", "Alabama, which fell from 37 members to 19 over the same single year"],
            correctIndex: 0,
            explanation: "Tennessee fell from 12 to 2, an exact 83.3 per cent decline, which is larger than Georgia's 60.7 per cent.",
            sourceLessonSlug: "who-sat-on-it",
          },
          {
            prompt: "What figure does the published table's arithmetic support for Tennessee?",
            options: ["83.3 per cent", "93.3 per cent, which the report's Findings section prints for the same state", "93.9 per cent, which is what a fall from 33 to 2 would actually produce", "60.7 per cent, which is what the table records for Georgia in the same year"],
            correctIndex: 0,
            explanation: "A fall from 12 to 2 is a decline of 83.33 per cent, which is exact.",
            sourceLessonSlug: "who-sat-on-it",
          },
          {
            prompt: "Where in the report does the contradicting 93.3 per cent figure appear?",
            options: ["In the Findings section", "In the table itself, alongside the corrected chapter text at page 94", "In a footnote citing USDA's Equal Opportunity Report for the preceding year", "In the appendix listing the census definitions of a farm since 1900"],
            correctIndex: 0,
            explanation: "The correction reached Table 4.1 and the chapter text but never reached the Findings at page 188.",
            sourceLessonSlug: "who-sat-on-it",
          },
          {
            prompt: "What does the earlier February 1982 printing show in the Tennessee row?",
            options: ["33 to 2, with a 93.3 per cent change", "12 to 2, with an 83.3 per cent change matching the later setting exactly", "30 to 2, which is the pair that would actually produce a 93.3 per cent fall", "No figure at all, since the row was added only in the later printing"],
            correctIndex: 0,
            explanation: "The earlier printing's row does not compute either, because 33 to 2 is a fall of 93.94 per cent.",
            sourceLessonSlug: "who-sat-on-it",
          },
          {
            prompt: "What pair of numbers would actually produce a 93.3 per cent decline?",
            options: ["30 to 2", "33 to 2, which is the pair the earlier printing actually shows", "12 to 2, which is the pair the published edition's table shows", "37 to 19, which is the pair the table records for Alabama"],
            correctIndex: 0,
            explanation: "10 of 12 is 83.3 per cent and 31 of 33 is 93.9 per cent, so only 28 of 30 gives exactly 93.3.",
            sourceLessonSlug: "who-sat-on-it",
          },
          {
            prompt: "How should a course treat a source that contradicts itself?",
            options: ["Use the figure the arithmetic supports and say so", "Discard the source entirely, since an internal contradiction destroys its reliability", "Print both figures without comment and let the reader choose between them", "Use whichever figure supports the argument the course is making"],
            correctIndex: 0,
            explanation: "Saying the report disagrees with itself, and which part the arithmetic supports, is what lets a reader handle the version they meet elsewhere.",
            sourceLessonSlug: "who-sat-on-it",
          },
          {
            prompt: "Why will you meet the 93.3 figure cited to this report?",
            options: ["It is printed in the Findings section", "Because news coverage in 1982 misreported the table's Tennessee row", "Because the correction was published as an erratum that few libraries received", "Because a different federal agency published a competing figure that year"],
            correctIndex: 0,
            explanation: "Somebody quoting page 188 is quoting the report accurately, which is why the contradiction has to be stated rather than resolved silently.",
            sourceLessonSlug: "who-sat-on-it",
          },
          {
            prompt: "Which is the correct reading of the 1979 to 1980 composition change?",
            options: ["A fact that requires explaining", "Proof that the agency deliberately removed Black members from its committees", "Evidence that Black farmers had stopped seeking committee service voluntarily", "A statistical artefact with no meaning, since the underlying numbers are small"],
            correctIndex: 0,
            explanation: "The count is a genuine observation about the world and is consistent with several mechanisms, so it establishes something to explain rather than the explanation.",
            sourceLessonSlug: "numbers-alone-do-not-prove-discrimination",
          },
          {
            prompt: "What did the Commission write immediately after presenting its participation rates?",
            options: ["Numbers alone do not prove discrimination", "That the pattern established a prima facie case requiring the agency to respond", "That the data proved the presence of racial discrimination in FmHA programmes", "That the figures were too unreliable to publish and were included only for context"],
            correctIndex: 0,
            explanation: "The report says the comparative analysis does not indicate the presence or absence of discrimination, and that numbers alone do not prove it.",
            sourceLessonSlug: "numbers-alone-do-not-prove-discrimination",
          },
          {
            prompt: "What second reason does the Commission give for not drawing the conclusion?",
            options: ["The lack of appropriate reliable data", "That the agency had refused to cooperate with the Commission's inquiries", "That the Commission lacked jurisdiction over Department of Agriculture programmes", "That the relevant statute of limitations had run on the years in question"],
            correctIndex: 0,
            explanation: "The sentence continues that drawing such conclusions would be difficult because of the lack of appropriate reliable data.",
            sourceLessonSlug: "numbers-alone-do-not-prove-discrimination",
          },
          {
            prompt: "Why is the Commission's disclaimer unusual?",
            options: ["It refused an inference it had every incentive to draw", "Because civil rights commissions are barred by statute from reaching conclusions", "Because it contradicts the report's own Findings section on the same page", "Because it was inserted by the Department of Agriculture during review"],
            correctIndex: 0,
            explanation: "The body most motivated to draw the conclusion declined to, in writing, at the point where the inference was most available.",
            sourceLessonSlug: "numbers-alone-do-not-prove-discrimination",
          },
          {
            prompt: "What can a participation rate establish on its own?",
            options: ["That something happened worth explaining", "The identity of the person responsible for the change it records", "Whether the change resulted from policy rather than from population shifts", "That the underlying data collection was accurate and complete"],
            correctIndex: 0,
            explanation: "It is a genuine observation about the world, and it is consistent with many mechanisms, so it establishes a question rather than an answer.",
            sourceLessonSlug: "numbers-alone-do-not-prove-discrimination",
          },
          {
            prompt: "Which of these is one of the alternative explanations the lesson lists for a falling participation rate?",
            options: ["Fewer applications from people expecting refusal", "A statutory change requiring committees to seat members by lot", "A federal court order barring the agency from recording members by race", "A rule making committee service incompatible with holding a federal loan"],
            correctIndex: 0,
            explanation: "The list includes fewer applicants, uneven office closures, a change in counting, a shrinking farm population, staggered term vacancies and compilation error.",
            sourceLessonSlug: "numbers-alone-do-not-prove-discrimination",
          },
          {
            prompt: "Why is the absence of reliable data itself a finding?",
            options: ["An agency that does not collect it cannot be evaluated on it", "Because the absence of records is presumed under federal law to indicate concealment", "Because it prevents the agency from applying the credit-elsewhere test consistently", "Because the Commission may compel production of records that were never created"],
            correctIndex: 0,
            explanation: "Without the right data neither critics nor defenders can establish anything, which is why current law requires the race, ethnicity and gender of each nominee to be reported.",
            sourceLessonSlug: "numbers-alone-do-not-prove-discrimination",
          },
          {
            prompt: "Which modern requirement does the lesson connect to the 1982 data finding?",
            options: ["Reporting each nominee's race, ethnicity and gender", "The eight-hour monthly limit on county committee members' work", "The three-year term limit applying to county committee service", "The requirement that a farmer serve only where their records are kept"],
            correctIndex: 0,
            explanation: "16 U.S.C. § 590h(b)(5) now requires the election report to include that information, provided through voluntary self-identification.",
            sourceLessonSlug: "numbers-alone-do-not-prove-discrimination",
          },
          {
            prompt: "Which is the first of the four things that move a claim from a gap to a conclusion?",
            options: ["A comparator", "A larger gap, sustained across more years and more counties", "A statistical significance test applied to the observed difference", "A public statement by an official acknowledging the disparity"],
            correctIndex: 0,
            explanation: "Two similarly situated people treated differently, identified, is the first item on the list and the one the Pigford settlement required.",
            sourceLessonSlug: "numbers-alone-do-not-prove-discrimination",
          },
          {
            prompt: "What does a decision record consist of?",
            options: ["What was asked, what was granted, when, and on what ground", "The names and racial identification of every committee member who voted", "The total dollars a county disbursed in each programme in each fiscal year", "A transcript of the committee's deliberations kept by the county supervisor"],
            correctIndex: 0,
            explanation: "A programme that keeps that record can be audited, and one that does not cannot be defended either.",
            sourceLessonSlug: "numbers-alone-do-not-prove-discrimination",
          },
          {
            prompt: "Which mechanism does this course put forward for the credit outcomes it studies?",
            options: ["Three local people deciding on a seasonal clock", "A national formula that allocated funds by state population share", "An automated credit scoring system applied uniformly across all counties", "A requirement that every applicant obtain two commercial refusals in writing"],
            correctIndex: 0,
            explanation: "The named path is the county committee of Lesson 5: three residents, two of them competitors, determining eligibility and credit limits against the crop calendar.",
            sourceLessonSlug: "numbers-alone-do-not-prove-discrimination",
          },
          {
            prompt: "What is the fourth item on the list, alongside comparator, record and mechanism?",
            options: ["A finding by a body with authority or the parties' agreement", "A peer-reviewed statistical study published in an economics journal", "An admission of liability by the agency in the text of a settlement", "A vote of the county committee acknowledging that a decision was wrong"],
            correctIndex: 0,
            explanation: "The list ends with a finding by somebody with subpoena power or by the parties' agreement, rather than an inference from a table.",
            sourceLessonSlug: "numbers-alone-do-not-prove-discrimination",
          },
          {
            prompt: "How does the four-item list explain this course's order?",
            options: ["Mechanism and record first, adjudicated outcome only in Section 5", "Conclusion first, with the supporting mechanism supplied afterwards", "Statistics first, with the legal material treated as background", "Litigation first, with the programme design explained in the final section"],
            correctIndex: 0,
            explanation: "Sections 1 to 4 establish the mechanism and the record, and only Section 5 reaches an outcome somebody with authority actually adjudicated.",
            sourceLessonSlug: "numbers-alone-do-not-prove-discrimination",
          },
          {
            prompt: "In which direction does the numbers-alone standard cut?",
            options: ["Both", "Only against claims of discrimination, which is what the Commission intended", "Only against agency defences, since the agency controls the data", "Neither, since it is a rhetorical caution rather than an evidentiary rule"],
            correctIndex: 0,
            explanation: "A table cannot disprove discrimination any more than it can prove it, so quoting the standard selectively is a tactic rather than a standard.",
            sourceLessonSlug: "numbers-alone-do-not-prove-discrimination",
          },
          {
            prompt: "What practical habit does the lesson recommend when meeting a statistic in an argument?",
            options: ["Ask what else must be true for the conclusion to follow", "Ask whether the sample size is large enough to be statistically significant", "Ask whether the source is a government agency rather than an advocacy group", "Ask whether the figure has been reproduced by at least two independent outlets"],
            correctIndex: 0,
            explanation: "Then ask whether the person offering it has supplied that additional thing, which most of the time they have not noticed they need.",
            sourceLessonSlug: "numbers-alone-do-not-prove-discrimination",
          },
          {
            prompt: "How many pages long is the Commission's report?",
            options: ["203", "94, which is instead the page carrying the report's own disclaimer", "188, which is instead the page on which its Findings section begins", "1982, which is the year of publication rather than a page count"],
            correctIndex: 0,
            explanation: "The report runs to 203 pages, with the county committee material in chapter 4 and the findings near the end.",
            sourceLessonSlug: "three-people-in-the-county",
          },
          {
            prompt: "Who prepared the Commission's report?",
            options: ["Pamela Browning", "Charles E. Hall, the Census Bureau's specialist in Negro statistics", "Randi Roth, who later served as the court-appointed monitor in Pigford", "Carol Canada, the Congressional Research Service librarian who wrote on FSA committees"],
            correctIndex: 0,
            explanation: "The Acknowledgements credit Pamela Browning with preparing the report.",
            sourceLessonSlug: "three-people-in-the-county",
          },
          {
            prompt: "Which of these describes local knowledge as the committee design intended it?",
            options: ["The stated point of seating deciders in the county", "An accidental byproduct of the agency's staffing shortage in rural offices", "A statutory requirement imposed on the elected committees but not the credit ones", "A criterion the Commission recommended adding to the appointment process"],
            correctIndex: 0,
            explanation: "Residence in the county is the design's rationale, and it is simultaneously its exposure.",
            sourceLessonSlug: "three-people-in-the-county",
          },
          {
            prompt: "Why is the phrase at least two of whom are farmers load-bearing?",
            options: ["It makes competitors a voting majority", "Because it guaranteed that a lender sat on every committee alongside the farmers", "Because it required committees to include at least one member who was not a farmer", "Because it barred landlords from serving on any committee in the county"],
            correctIndex: 0,
            explanation: "Two of three, in the same business in the same county, decide eligibility and credit limits for an applicant no other lender will serve.",
            sourceLessonSlug: "three-people-in-the-county",
          },
          {
            prompt: "How does Lesson 1's crop calendar interact with the committee's decision?",
            options: ["A delay is one of the outcomes", "A delay pauses the crop year until the committee reaches a decision", "The committee must decide within five working days under the statute", "The calendar is irrelevant, since operating loans may be drawn at any time"],
            correctIndex: 0,
            explanation: "The committee decides on a calendar that does not stop, so time spent is a result rather than a neutral interval.",
            sourceLessonSlug: "three-people-in-the-county",
          },
          {
            prompt: "Which of these is a difference between the report's chapter text and its Findings section?",
            options: ["The wording of the county committee description", "The number of members the committee was said to have", "The identity of the official who appointed committee members", "The source cited for the committee composition figures"],
            correctIndex: 0,
            explanation: "The chapter quotes USDA's own description with ellipses, while the Findings restate it in the Commission's own sentence.",
            sourceLessonSlug: "three-people-in-the-county",
          },
          {
            prompt: "What does 257 divided by 5,966 come to?",
            options: ["About 4.3 per cent", "About 7.2 per cent, matching the figure reported for the previous year", "About 39.8 per cent, matching the one-year decline the report describes", "About 83.3 per cent, matching the largest state decline in the table"],
            correctIndex: 0,
            explanation: "4.31 per cent, which is exactly what the report prints, so the national figures check out on their own terms.",
            sourceLessonSlug: "who-sat-on-it",
          },
          {
            prompt: "Which state pair in Table 4.1 shows a decline of 60.7 per cent?",
            options: ["Georgia, 61 to 24", "Mississippi, 48 to 21, the largest single-state loss in absolute numbers", "Virginia, 49 to 29, in a state with one of the largest starting counts", "North Carolina, 47 to 31, in a state that retained the most members"],
            correctIndex: 0,
            explanation: "Georgia fell from 61 members to 24, which the table records as a 60.7 per cent decline.",
            sourceLessonSlug: "who-sat-on-it",
          },
          {
            prompt: "Which state in Table 4.1 shows the smallest percentage decline?",
            options: ["Florida, 14 to 10", "Texas, 33 to 18, in a state with a large and dispersed farm population", "South Carolina, 27 to 19, which retained more than two thirds of its members", "North Carolina, 47 to 31, which retained the largest absolute number"],
            correctIndex: 0,
            explanation: "Florida's fall of 28.6 per cent is smaller than South Carolina's 29.6 per cent, which is the next closest.",
            sourceLessonSlug: "who-sat-on-it",
          },
          {
            prompt: "What should you conclude if you find Table 4.1 reproduced as a national table?",
            options: ["The citation did not open the page", "That the Commission published two versions of the same table", "That the national totals were revised after the report was printed", "That the missing states had no Black committee members to report"],
            correctIndex: 0,
            explanation: "Nine state rows summing to 328 and 173 cannot be the nation, whose totals the same report gives as 427 and 257.",
            sourceLessonSlug: "who-sat-on-it",
          },
          {
            prompt: "What is the correct response to the argument that the committee numbers are too small to matter?",
            options: ["They are the composition of the gate", "That small numbers are always statistically significant in federal programmes", "That the numbers were larger before the report's period began", "That the Commission adjusted them upward to reflect undercounting"],
            correctIndex: 0,
            explanation: "In a nine-state region where Black farmers were concentrated, the seats fell from 328 to 173 in one year, and those seats decided eligibility and credit limits.",
            sourceLessonSlug: "who-sat-on-it",
          },
          {
            prompt: "Which of these did the Commission NOT claim about the participation rates it published?",
            options: ["That they showed discrimination was present", "That the underlying data were not appropriate or reliable enough for conclusions", "That the comparison did not indicate the presence or absence of discrimination", "That drawing conclusions from the comparison would be difficult"],
            correctIndex: 0,
            explanation: "The report explicitly declined to say the rates indicated the presence or absence of racial discrimination.",
            sourceLessonSlug: "numbers-alone-do-not-prove-discrimination",
          },
          {
            prompt: "What is the relationship between the disclaimer and the settlement in Section 5?",
            options: ["The settlement supplied the comparator the disclaimer said was missing", "The settlement adopted the Commission's figures as its own findings of fact", "The settlement was filed by the Commission on behalf of the class", "The settlement rejected the disclaimer as an obstacle to relief"],
            correctIndex: 0,
            explanation: "The consent decree required each claimant to name a specifically identified, similarly situated white farmer, which is the first item on the four-part list.",
            sourceLessonSlug: "numbers-alone-do-not-prove-discrimination",
          },
          {
            prompt: "Why does the appointing chain matter to how the committee behaved?",
            options: ["Accountability ran to the agency rather than to producers", "Because appointed members served longer terms than elected ones", "Because appointed members were paid more than elected committee members", "Because appointed members could be removed only by the Secretary personally"],
            correctIndex: 0,
            explanation: "Nomination by the county supervisor and appointment by the state director meant nobody in the chain answered to a vote.",
            sourceLessonSlug: "three-people-in-the-county",
          },
          {
            prompt: "Which two roles did the same county office play in an application?",
            options: ["Processing the file and nominating the deciders", "Approving the loan and appraising the security offered against it", "Setting the interest rate and certifying the applicant's acreage history", "Auditing the committee and hearing appeals from its determinations"],
            correctIndex: 0,
            explanation: "County supervisors nominated the committee members and their office handled the applications those members decided.",
            sourceLessonSlug: "three-people-in-the-county",
          },
          {
            prompt: "What does the phrase composition of the gate mean in this section?",
            options: ["Who holds the seats on the deciding body", "The total amount of credit a county may extend in a year", "The statutory criteria an applicant must satisfy to be eligible", "The number of applications a committee reviews in a single meeting"],
            correctIndex: 0,
            explanation: "It is a count of who sat on the bodies determining eligibility and credit limits, which is a fact about the gate rather than about any decision.",
            sourceLessonSlug: "who-sat-on-it",
          },
          {
            prompt: "Which is the honest description of the Tennessee discrepancy's cause?",
            options: ["A correction that reached some parts of the report and not others", "A deliberate revision by the agency during its review of the draft", "A transcription error introduced by the digitisation of the scanned pages", "A dispute between the Commission and USDA over the underlying count"],
            correctIndex: 0,
            explanation: "The published edition's table and chapter text carry 83.3 while its Findings still print 93.3, and the earlier printing carries a row that does not compute.",
            sourceLessonSlug: "who-sat-on-it",
          },
          {
            prompt: "Why does this course cite two printings of the same report?",
            options: ["They differ, and the difference is the lesson", "Because the later printing is under copyright and the earlier one is not", "Because neither printing is complete on its own and both must be combined", "Because the Commission withdrew the first printing after publication"],
            correctIndex: 0,
            explanation: "One setting carries a correction the other does not, which is why two honest people can quote the same report and disagree.",
            sourceLessonSlug: "who-sat-on-it",
          },
          {
            prompt: "What did the Commission's disclaimer say about the direction of the inference?",
            options: ["It covered both presence and absence of discrimination", "It covered only claims that discrimination was present", "It covered only claims that discrimination was absent", "It made no reference to discrimination at all"],
            correctIndex: 0,
            explanation: "The sentence says the analysis does not indicate the presence or absence of racial discrimination, which is what makes it cut both ways.",
            sourceLessonSlug: "numbers-alone-do-not-prove-discrimination",
          },
          {
            prompt: "Which of these would the four-part list count as a mechanism?",
            options: ["A three-member local body deciding eligibility on a deadline", "A twelve-point drop in a programme's participation rate over a decade", "A statement by an advocacy organisation that the outcome was unjust", "A comparison of two states' participation rates in the same year"],
            correctIndex: 0,
            explanation: "A mechanism is a named path by which the outcome could actually have been produced, as distinct from the outcome itself.",
            sourceLessonSlug: "numbers-alone-do-not-prove-discrimination",
          },
          {
            prompt: "Why is a programme without a decision record undefendable as well as unauditable?",
            options: ["There is nothing to point to when the decision is questioned", "Because federal law presumes the absence of records to be evidence of fault", "Because the county committee must reconstruct the decision from memory", "Because the applicant may then obtain relief without proving anything"],
            correctIndex: 0,
            explanation: "The record is what both a critic and a defender would use, so its absence disables both arguments equally.",
            sourceLessonSlug: "numbers-alone-do-not-prove-discrimination",
          },
          {
            prompt: "Which best summarises what Lesson 6 does with the committee counts?",
            options: ["Reports them, checks them, and refuses to interpret them", "Reports them and concludes that the agency excluded Black members", "Sets them aside as unreliable because the report contradicts itself", "Extrapolates them to the whole country using the nine-state sample"],
            correctIndex: 0,
            explanation: "It verifies the arithmetic, corrects the regional scope, states the contradiction, and leaves the interpretation to the standard set in the next lesson.",
            sourceLessonSlug: "who-sat-on-it",
          },
          {
            prompt: "How does the elected FSA committee system compare on the accountability question?",
            options: ["Its members face producers at an election", "Its members are appointed by the same state directors as the credit committees were", "Its members serve without any term limit, unlike the appointed credit committees", "Its members are nominated by the county supervisor and confirmed by the state committee"],
            correctIndex: 0,
            explanation: "The 1935 Act committees are elected by the agricultural producers who participate in the programmes, which the credit committees never were.",
            sourceLessonSlug: "three-people-in-the-county",
          },
          {
            prompt: "What is the best reason to read the committee description as a machine rather than a story?",
            options: ["Each clause names a decision point", "Because the description is written in statutory rather than narrative language", "Because the Commission intended it as a technical appendix rather than a finding", "Because a machine reading avoids any conclusion about the people involved"],
            correctIndex: 0,
            explanation: "Three people, residing locally, two of them farmers, deciding both eligibility and amount, seated by appointment, is a sequence of design choices with consequences.",
            sourceLessonSlug: "three-people-in-the-county",
          },
          {
            prompt: "Which of these does the Commission's report NOT contain?",
            options: ["A finding that FmHA committees intentionally excluded Black farmers", "A table of Black committee membership in nine states for 1979 and 1980", "A statement that numbers alone do not prove discrimination", "A description of how committee members were nominated and appointed"],
            correctIndex: 0,
            explanation: "The report presents composition data and expressly declines to say those rates indicate the presence or absence of discrimination.",
            sourceLessonSlug: "numbers-alone-do-not-prove-discrimination",
          },
          {
            prompt: "What is the standing danger in quoting an evidentiary caution like the Commission's?",
            options: ["Applying it only to the argument you dislike", "Overstating the reliability of the data it refers to", "Treating it as a legal rule rather than a scholarly convention", "Attributing it to the agency rather than to the Commission"],
            correctIndex: 0,
            explanation: "A person who invokes it only when the numbers are inconvenient has adopted a tactic rather than a standard.",
            sourceLessonSlug: "numbers-alone-do-not-prove-discrimination",
          },
          {
            prompt: "Which pairing of page and content is correct for the published edition?",
            options: ["Page 94 carries the numbers-alone disclaimer", "Page 92 carries Table 4.1 of committee membership by state", "Page 188 carries the corrected 83.3 per cent figure for Tennessee", "Page 93 carries the report's numbered Findings section"],
            correctIndex: 0,
            explanation: "The disclaimer is at page 94, the national paragraph at page 92, the table at page 93, and the Findings begin near page 188.",
            sourceLessonSlug: "numbers-alone-do-not-prove-discrimination",
          },
          {
            prompt: "What follows from the fact that total membership rose while Black membership fell?",
            options: ["A shrinking programme does not explain the change", "The agency must have replaced each departing member with a white farmer", "The nine states in the table gained seats while the rest of the country lost them", "The change was entirely accounted for by consolidation of county offices"],
            correctIndex: 0,
            explanation: "If the number of seats grew, the loss of Black members cannot be attributed to fewer seats being available.",
            sourceLessonSlug: "who-sat-on-it",
          },
          {
            prompt: "What is the effect of seating deciders who know the applicant's family history?",
            options: ["It supplies information the file does not contain", "It disqualifies the member from voting on that application under agency rules", "It requires the committee to refer the application to the state director", "It obliges the member to disclose the relationship in the written record"],
            correctIndex: 0,
            explanation: "Local knowledge is what the residence requirement was for, and information outside the file is exactly what a decision record cannot capture.",
            sourceLessonSlug: "three-people-in-the-county",
          },
          {
            prompt: "Which document does the Commission quote for the committee's own description?",
            options: ["USDA's own account of the committee", "The Consolidated Farm and Rural Development Act as enacted in 1961", "A Federal Register notice published by the Farmers Home Administration", "Testimony given to the Commission by a serving county supervisor"],
            correctIndex: 0,
            explanation: "The chapter text reproduces the department's own description with ellipses, which is why the passage reads as a quotation within a quotation.",
            sourceLessonSlug: "three-people-in-the-county",
          },
          {
            prompt: "Which is the correct way to describe the nine-state table's coverage?",
            options: ["Regional, and concentrated where Black farmers were", "A random sample of states drawn to represent the national picture", "The nine states in which the agency operated county committees at all", "The nine states that responded to the Commission's request for data"],
            correctIndex: 0,
            explanation: "The states listed are southern and border states where Black farming was concentrated, and their totals fall well short of the national figures.",
            sourceLessonSlug: "who-sat-on-it",
          },
          {
            prompt: "What would it take to explain the 1979 to 1980 change with confidence?",
            options: ["A record of why each seat changed hands", "A larger sample of years, showing whether the pattern repeated", "A comparison against participation rates in other federal programmes", "A statement from the Commission interpreting its own table"],
            correctIndex: 0,
            explanation: "The count establishes something to explain, and only a decision record showing how each vacancy arose and was filled would settle the explanation.",
            sourceLessonSlug: "numbers-alone-do-not-prove-discrimination",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3 — The count
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "operated-is-not-owned",
      title: "9 · Operated is not owned, and the census never asked",
      section: "Section 3 · The count",
      body: `WARRANT-01 refused to print any acreage figure for Black-owned farmland, because the two figures in circulation measure different things and nobody had opened the volume. **This course opened it.** Here is what the 1920 Census of Agriculture actually contains, and the answer is more interesting than either circulating number.

**First, the counts that are exactly right.** In the *Fourteenth Census of the United States Taken in the Year 1920, Volume V: Agriculture*, chapter V, **Table 4 at page 298** gives farm operators by race and tenure. The row for **Negroes**, which is the census's own label and is used here as the census used it, reads:

| 1920 | |
| --- | --- |
| Total | 925,708 |
| Owners | 218,612 |
| Managers | 2,026 |
| Tenants | 705,070 |

Those three sum to the total exactly. **Table 5 on the same page** gives the acreage: **41,432,182 acres** of all land in farms, of which 27,928,900 acres were improved, with land and buildings valued at $2,257,645,325. So the famous "925,708" and the federal "41.4 million acres" are both correct, both from page 298, and both about **Negro** operators.

**Second, the trap, and it has caught a great many people.** The 1920 census ran **two different racial universes in two different chapters**. Chapter IV counts **"colored"** farmers, which the volume defines as Negro plus Indian plus Japanese plus Chinese: **949,889 operators on 44,944,521 acres**. Chapter V counts **Negroes** alone: 925,708 on 41,432,182. The volume explains why the two diverge, at page 187: "The colored farmers in the South are practically all Negroes, while those in the Mountain and Pacific Divisions are practically all Indians or Asiatics."

**Negroes were 97.5 per cent of colored operators but only 92.2 per cent of colored acreage.** So 925,708 and 44.9 million acres do not belong in the same sentence, and neither do 949,889 and 41.4 million.

**Third, and this is the finding.** **Acres owned was never collected.** Not withheld, not lost. Never asked. The enumerator's General Farm Schedule is reproduced at Volume V, Appendix A, page 911, and it captures tenure as four yes-or-no questions ("Do you own all of this farm?", "Do you rent from others part but not all of this farm?", "Do you rent from others all of this farm?", "Do you operate this farm for others as a hired manager?") and acreage exactly once, split only by **use**: total acres, improved, woodland, other unimproved.

**So a part owner reported one acreage covering the land he owned and the land he rented in, with no way to separate them.** The word "owned" appears once more on the schedule, in the encumbrance question, and that asks for **dollars of debt**, not acres.

**What can honestly be said, then.** For **colored** farmers the published tenure table, chapter IV **Table 1 at page 189**, brackets it:

- **Floor, 14,005,208 acres**, the row labelled "Owning entire farm", every acre of which is owned by definition.
- **Ceiling, 16,704,192 acres**, all land in owner-operated farms, which overstates ownership by whatever part of the part owners' 2,698,984 acres was rented in.

**That bracket, fourteen to sixteen point seven million acres, is where the circulating "14 to 16 million acres" comes from.** It is a **colored** figure, its top end is an acknowledged overstatement, and it is routinely quoted beside the **Negro** operator count of 925,708. **Those two numbers are from different universes.**

**For Negroes specifically, Volume V publishes no owner acreage at all.** The nearest figure comes from the next census: Charles E. Hall's *The Negro Farmer in the United States* (1933), **Table 26 at page 40**, which back-reports 1920 as owners 13,948,512 acres, tenants 27,077,582 and managers 406,088, summing exactly to 41,432,182.

**And Hall shows you the error being made, on his own page.** His section heading reads "Loss of owned land". His sentences underneath read "the land (acres) **in farms operated by** Negro owners" and "**the land operated by owners** decreased from 13,948,512 acres in 1920 to 11,198,893 in 1930". **The heading says owned; the sentences say operated by owners.** Those are not the same quantity, because a part owner's farm includes rented ground. **13,948,512 is a ceiling on Black-owned acreage in 1920, not a measurement of it**, and the slippage that turned it into an ownership figure is visible in the source itself.

**Why any of this matters, in one sentence.** In 1920, 705,070 of 925,708 Black farm operators were **tenants**. Seventy-six per cent of them worked land they did not own. **A figure about land operated is therefore mostly a figure about other people's land**, and using it to describe Black landownership erases the exact distinction that makes the history what it is.

:::reveal How many Black farm operators and how many acres did the 1920 census report, and where? ||| 925,708 operators and 41,432,182 acres, both in Volume V, chapter V, Tables 4 and 5 at page 298, for the category the census labelled Negroes.

:::reveal Why can acres owned not be derived from the 1920 census? ||| Because the schedule asked tenure as yes-or-no questions and acreage only once, split by land use, so a part owner's owned and rented acres were never separated.

:::reveal What is the difference between the colored and the Negro figures in the 1920 census? ||| Colored means Negro plus Indian plus Japanese plus Chinese, at 949,889 operators on 44,944,521 acres; Negro alone is 925,708 on 41,432,182.

## Vocabulary
- **Land operated**: all acreage in a farm a person runs, whether they own it, rent it or manage it for somebody else.
- **Land owned**: acreage to which a person holds title, which the 1920 agricultural schedule never asked anyone to report.
- **Full owner and part owner**: in the census's own printed rows, "Owning entire farm" and "Hiring additional land", the second of which mixes owned with rented ground.
- **Cropper**: in the census's own definition, a share tenant whose work animals are furnished by the landlord.
- **Racial universe**: which categories a table's race label actually includes, which differed between chapters of the same 1920 volume.

## Sources
Hall, C. E. (1933). *The Negro farmer in the United States* (Fifteenth Census of the United States: 1930, Census of Agriculture). U.S. Government Printing Office. https://usa.ipums.org/usa/resources/voliii/pubdocs/1930/Other/26618684ch1.pdf

U.S. Bureau of the Census. (1922). *Fourteenth census of the United States taken in the year 1920, Volume V: Agriculture, general report and analytical tables* (Chapter IV, Farm statistics by color and tenure of farmer). U.S. Government Printing Office. https://www2.census.gov/library/publications/decennial/1920/volume-5/06229676v5ch03.pdf

U.S. Bureau of the Census. (1922). *Fourteenth census of the United States taken in the year 1920, Volume V: Agriculture, general report and analytical tables* (Chapter V, Farm statistics by race, nativity, and sex of farmer). U.S. Government Printing Office. https://www2.census.gov/library/publications/decennial/1920/volume-5/06229676v5ch04.pdf

U.S. Bureau of the Census. (1922). *Fourteenth census of the United States taken in the year 1920, Volume V: Agriculture, general report and analytical tables* (Appendix A, the general farm schedule). U.S. Government Printing Office. https://www2.census.gov/library/publications/decennial/1920/volume-5/06229676v5ch09.pdf`,
    },
    {
      slug: "what-the-census-counts",
      title: "10 · The unit changed, so the series broke",
      section: "Section 3 · The count",
      body: `You now have a solid 1920 number. Before you compare it to anything, you have to know that **the census changed what it was counting**, more than once, and that most published comparisons of Black farming across a century quietly compare two different units.

**Until 2002, one farm had one operator.** Look at the 1997 Census of Agriculture, Volume 1, Geographic Area Series, Part 51, **Table 37 at page 525**, titled "Operators by Selected Racial Groups: 1997 and 1992". For BLACK, United States, it reports **18,451** for 1997 and 18,816 for 1992, on 2,384,868 acres. **The table's only columns are farms and land in farms.** There is no separate operator column, because there was nothing to separate: one operator per farm meant the operator count and the farm count were the same number.

**In 2002 that stopped.** The 2002 census, **Table 42 at page 552**, carries a footnote that changes everything downstream: "Data were collected for a maximum of three operators per farm." That year the United States row shows **30,605 farms** and **36,370 Black operators**, of which 22,384 farms reported one operator and 8,221 reported more than one. **The moment farms and operators stop being the same number, every series that ran through 1997 breaks.**

**In 2017 the word changed too, and the maximum rose again.** "Operator" became "producer", and the 2022 census collected demographic information for **up to four producers per farm**. The 2022 Table 52 headnote says so, and Appendix B at page B-16 repeats it: "Demographic and other information were collected for up to four producers per farm. This may be fewer than the total number of producers on some farms." Respondents were also asked to mark one or more race categories, which is why a Black-alone count and a Black-alone-or-in-combination count both exist.

**So the 2022 census yields three defensible numbers for the same subject:**

| Measure, 2022 | Figure |
| --- | --- |
| Black producers, alone or in combination | 46,738 |
| Black producers, alone | 41,807 |
| Farms with a Black producer | 32,653 |
| Acres operated | 5,323,654 |
| Average farm size | 163 acres |

**The commonly quoted "about 32,700" is the farm count**, not the producer count, and if you see it described as a count of Black farmers you have found a conflation.

**How big is the definitional effect?** In 2022 there were 3,374,044 producers on 1,900,487 farms, about 1.78 producers per farm nationally, and NASS reports that the share of farms reporting more than one decision maker rose from 54 per cent in 2017 to 60 per cent in 2022. **A count of people is now roughly one and three quarter times a count of farms**, for reasons that have nothing to do with anybody starting to farm.

**Here is the rule that follows, and it is the whole lesson.** **Compare farms to farms.**

- 1920: **925,710** Black-operated farms, per the Commission on Civil Rights' own Table 1.1, or **925,708** operators per the census table you read in Lesson 9. The two federal documents differ by two, which is worth knowing and changes nothing.
- 2022: **32,653** farms with a Black producer.
- That is a decline of about **96.5 per cent**.

**Now watch what happens if you use the wrong unit.** Comparing 925,710 farms to 46,738 *producers* gives about 94.9 per cent, which **understates** the loss by comparing people at the end against farms at the beginning. The more careless comparison is the more comforting one, which is usually how this goes.

**And here is the comparison you must never make.** 1997 reports 18,451 and 2022 reports 32,653. **That is not a recovery.** Most of the apparent rise is definitional and methodological: the unit changed from operator to producer, the per-farm maximum went from one to three to four, and the census also began adjusting for coverage. The 2002 census restated the 1997 **total** farm count from 1,911,859 to 2,215,876, a rise of 15.9 per cent, without a single new farm existing. **A number that goes up because the ruler changed has not gone up.**

**The Commission saw this coming in 1982.** Its own footnote warns that comparability across census years is "problematic due to changes in the census definition of a farm", and its Appendix A tabulates every one of those definitions from 1900 to 1978. The problem is old, it is documented by the agencies themselves, and it is still the most common error in this subject.

:::reveal Why were the operator count and the farm count the same number in the 1997 census? ||| Because the census collected one operator per farm, so the 1997 table has columns only for farms and land in farms.

:::reveal What changed in 2002, and what did it break? ||| Data were collected for up to three operators per farm, so farms and operators stopped being the same number and every series running through 1997 broke.

:::reveal Which 2022 figure should be compared against the 1920 farm count, and what is the result? ||| The 32,653 farms with a Black producer, which against about 925,710 farms in 1920 is a decline of roughly 96.5 per cent.

## Vocabulary
- **Operator**: the census's pre-2017 term for the person running a farm, counted one per farm until 2002 and up to three afterwards.
- **Producer**: the census's current term for a person involved in decision making on a farm, collected for up to four per farm.
- **Alone or in combination**: a race count that includes people who marked more than one category, which is larger than the alone count for the same group.
- **Coverage adjustment**: a statistical correction for farms the enumeration missed, which raised the restated 1997 national farm count by 15.9 per cent without any new farm existing.
- **Unit break**: the point in a statistical series where what is being counted changes, after which the earlier and later figures are not comparable without adjustment.

## Sources
U.S. Commission on Civil Rights. (1982, February). *The decline of Black farming in America*. U.S. Government Printing Office. https://www.usccr.gov/files/historical/1982/82-018.pdf

U.S. Department of Agriculture, National Agricultural Statistics Service. (1999). *1997 census of agriculture, Volume 1, Geographic area series, Part 51, Table 37: Operators by selected racial groups*. https://www.nass.usda.gov/AgCensus/archive/files/1997-United_States-State_Data-1605-Table-37.pdf

U.S. Department of Agriculture, National Agricultural Statistics Service. (2004). *2002 census of agriculture, Table 42: Black or African American operators*. https://www.nass.usda.gov/AgCensus/archive/files/2002-United_States-StateData-Table-42.pdf

U.S. Department of Agriculture, National Agricultural Statistics Service. (2024). *2022 census of agriculture highlights: Black producers* (ACH22-10). https://www.nass.usda.gov/Publications/Highlights/2024/Census22_HL_BlackProducers.pdf

U.S. Department of Agriculture, National Agricultural Statistics Service. (2024). *2022 census of agriculture, Volume 1, Chapter 1, Appendix B: General explanation and census of agriculture report form*. https://www.nass.usda.gov/Publications/AgCensus/2022/Full_Report/Volume_1,_Chapter_1_US/usappxb.pdf`,
    },
    {
      slug: "the-1982-prediction",
      title: "11 · A federal prediction, and how to grade it",
      section: "Section 3 · The count",
      body: `In 1982 the Commission on Civil Rights made a forecast. You now have everything you need to grade it, and grading it properly is harder and more useful than either cheering or dismissing it.

**The prediction, verbatim, from page 176:**

> "almost 94 percent of the farms operated by blacks have been lost since 1920, and at the current rate of loss there will be fewer than 10,000 black farmers in the United States at the end of the next decade." (U.S. Commission on Civil Rights, 1982, p. 176)

Its Findings restate it: "If the rate of black land loss continues unabated, there will be fewer than 10,000 black farmers at the end of the next decade" (p. 181). And page 2 puts it more starkly still: "At this rate of loss, there will be virtually no blacks operating farms in this country by the end of the next decade."

**Step one: find out what the prediction actually says.** Three phrases need pinning down before any grading is possible.

**"The current rate of loss."** The sentence immediately before supplies it: the decline of Black-operated farms over the preceding decade had been 57 per cent, which the Commission notes was two and a half times the rate for white-operated farms. So the forecast compounds a **57 per cent loss per decade**.

**"Fewer than 10,000 black farmers."** Farms or people? The Commission's own baseline is farms: 57,271 farms operated by Black people in 1978, cited to the 1978 Census of Agriculture, volume I, part 51, page 209. **Read the prediction in farms**, because that is the unit the rate was computed in.

**"The end of the next decade."** **The report never says which year.** The phrase appears three times and is defined nowhere. That is not a quibble, because the arithmetic depends on it: 57,271 falling 57 per cent gives about 24,455 after one decade and about 10,442 after two. **"Fewer than 10,000" is reached only after roughly two decades**, which points at the end of the 1990s rather than 1990. **That is an inference from the report's own numbers, not a statement the report makes**, and it should be labelled that way every time it is used.

**Step two: get the outcome figures, in the right unit.**

- **1997 Census of Agriculture: 18,451.** One operator per farm that year, so this is simultaneously a farm count and an operator count.
- **2022 Census of Agriculture: 32,653 farms** with a Black producer, or 46,738 producers, or 41,807 Black-alone producers, depending which question you are asking.

**Step three: grade it.**

**Read against 1990, the prediction is wrong**, and not marginally. The arithmetic would have implied roughly 24,000 farms, and nothing near 10,000 was reached.

**Read against the end of the 1990s, the prediction is still wrong, but in an interesting way.** The 1997 count of 18,451 is well above 10,000. The forecast overshot by nearly double. **A 57 per cent decadal rate did not continue**, and the honest thing to say is that the Commission's own conditional was doing real work: it wrote "at the current rate of loss", and the rate changed.

**Read against 2022, the prediction is wrong in the opposite direction**, because the reported figure went **up**, and Lesson 10 explains why that rise is mostly the ruler moving rather than the world.

**Step four, and this is where a careless reader stops too early.** "The prediction was wrong" is not the same as "the loss was not real". Both of these are true at once:

- **Black farming did not disappear by 2000**, and a straight-line extrapolation of a decadal rate was the wrong tool for a bounded population that cannot fall below zero and is composed of people making decisions.
- **The loss the Commission was describing was real and enormous.** From about 925,710 farms in 1920 to 32,653 in 2022 is a fall of roughly 96.5 per cent, and the white-operated farm count fell by 56.4 per cent over the 1920 to 1978 stretch the Commission measured. **The disparity in the rates is the finding; the extrapolation was the error.**

**Step five: what would make a better forecast, and it is worth being concrete.** A rate that decays rather than compounding, because the operations most exposed leave first. A stated floor. A stated definition of the unit. A named target year. And a note on the census definitions, which the Commission itself supplied and its own forecast then ignored.

**Your exercise, and it takes about twenty minutes.** Pick your own state. Find its Black farm operator count in the 1997 census and its Black-producer and Black-operated-farm counts in the 2022 census. Compute the change. Then write one sentence saying what your number means and one sentence saying what it does not, naming the unit in both. **If you cannot write the second sentence, you do not yet have the first.**

:::reveal What decadal rate of loss was the Commission's 1982 forecast built on? ||| Fifty-seven per cent, the decline in Black-operated farms over the preceding decade, which it noted was two and a half times the white rate.

:::reveal Does the report say which year "the end of the next decade" means? ||| No. The phrase is used three times and defined nowhere, so any target year attached to it is an inference and must be labelled as one.

:::reveal How can the prediction be wrong while the loss it described is real? ||| Because a compounding straight-line extrapolation was the wrong tool, while the underlying fall from about 925,710 farms in 1920 to 32,653 in 2022 is roughly 96.5 per cent.

## Vocabulary
- **Extrapolation**: projecting a past rate forward, which assumes the rate is a property of the world rather than of the period it was measured in.
- **Conditional forecast**: a prediction stated as depending on something continuing, which is falsified only if that thing continued and the outcome still differed.
- **Baseline**: the starting figure a forecast compounds from, here 57,271 Black-operated farms in 1978.
- **Rate decay**: the tendency of a decline to slow as the most exposed cases leave first, which a constant-rate projection cannot represent.
- **Grading a prediction**: establishing the unit, the rate, and the target date before asking whether the outcome matched, since a prediction with an undefined date cannot be graded at all.

## Sources
U.S. Commission on Civil Rights. (1982, February). *The decline of Black farming in America*. U.S. Government Printing Office. https://www.usccr.gov/files/historical/1982/82-018.pdf

U.S. Department of Agriculture, National Agricultural Statistics Service. (1999). *1997 census of agriculture, Volume 1, Geographic area series, Part 51, Table 37: Operators by selected racial groups*. https://www.nass.usda.gov/AgCensus/archive/files/1997-United_States-State_Data-1605-Table-37.pdf

U.S. Department of Agriculture, National Agricultural Statistics Service. (2024). *2022 census of agriculture highlights: Black producers* (ACH22-10). https://www.nass.usda.gov/Publications/Highlights/2024/Census22_HL_BlackProducers.pdf`,
    },
    {
      slug: "quiz-the-count",
      title: "12 · Knowledge check: the count",
      section: "Section 3 · The count",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "How many Black farm operators did the 1920 census report?",
            options: ["925,708", "949,889, which is instead the count of colored farm operators in the same census", "893,370, which is instead the corresponding figure reported for the year 1910", "705,070, which is instead the number of those operators who were tenants"],
            correctIndex: 0,
            explanation: "Volume V, chapter V, Table 4 at page 298 gives 925,708 for the category the census labelled Negroes.",
            sourceLessonSlug: "operated-is-not-owned",
          },
          {
            prompt: "In which table and page does the 1920 operator count appear?",
            options: ["Table 4, page 298", "Table 1, page 189, which instead carries the colored tenure and acreage breakdown", "Table 26, page 40, which appears in a publication of the following census", "Table 37, page 525, which belongs to the 1997 census of agriculture"],
            correctIndex: 0,
            explanation: "Chapter V of Volume V carries Table 4 on operators by race and tenure at page 298, repeated at Table 16, page 311.",
            sourceLessonSlug: "operated-is-not-owned",
          },
          {
            prompt: "How many acres did Black farm operators operate in 1920?",
            options: ["41,432,182", "44,944,521, which is instead the acreage operated by colored farmers as a whole", "27,928,900, which is instead the improved acreage within those same farms", "16,704,192, which is instead the land in colored owner-operated farms"],
            correctIndex: 0,
            explanation: "Table 5 at page 298 gives 41,432,182 acres of all land in farms for Negro operators.",
            sourceLessonSlug: "operated-is-not-owned",
          },
          {
            prompt: "How does the 1920 census define the category colored?",
            options: ["Negro plus Indian plus Japanese plus Chinese", "Any operator not counted as native-born white of native parentage", "Negro operators in the southern states only, excluding the rest of the country", "Any operator whose farm was located in a county with a segregated school system"],
            correctIndex: 0,
            explanation: "Chapter IV counts colored farmers as that combination, which is why its totals exceed the Negro-only figures in chapter V.",
            sourceLessonSlug: "operated-is-not-owned",
          },
          {
            prompt: "How many colored farm operators did the 1920 census report?",
            options: ["949,889", "925,708, which is instead the count for the Negro category alone", "218,612, which is instead the number of Negro operators who were owners", "233,222, which is instead the number of colored owner-operators"],
            correctIndex: 0,
            explanation: "Chapter IV reports 949,889 colored operators on 44,944,521 acres, against 925,708 Negro operators on 41,432,182 acres.",
            sourceLessonSlug: "operated-is-not-owned",
          },
          {
            prompt: "What proportion of colored operators and of colored acreage were Negro?",
            options: ["97.5 per cent of operators and 92.2 per cent of acreage", "Exactly the same share of each, so the two categories are interchangeable", "92.2 per cent of operators and 97.5 per cent of acreage, the reverse of the figures given", "About four fifths of both, with the remainder made up of Indian operators"],
            correctIndex: 0,
            explanation: "The share differs between the two measures, which is why mixing a Negro operator count with a colored acreage figure produces an incoherent statement.",
            sourceLessonSlug: "operated-is-not-owned",
          },
          {
            prompt: "What explanation does Volume V give for the divergence between the two categories?",
            options: ["Colored operators outside the South were largely Indian or Asian", "Negro operators were undercounted in the Mountain and Pacific divisions", "The two chapters were compiled from different enumeration years", "Colored included tenants while Negro was restricted to owners and managers"],
            correctIndex: 0,
            explanation: "Page 187 states that colored farmers in the South are practically all Negroes while those in the Mountain and Pacific divisions are practically all Indians or Asiatics.",
            sourceLessonSlug: "operated-is-not-owned",
          },
          {
            prompt: "How many of the 925,708 Black farm operators in 1920 were tenants?",
            options: ["705,070", "218,612, which is instead the number recorded as owners in the same table", "2,026, which is instead the number recorded as managers in the same table", "514,870, which is instead the colored share-tenant count from a different chapter"],
            correctIndex: 0,
            explanation: "Table 4 gives owners 218,612, managers 2,026 and tenants 705,070, which sum exactly to the total.",
            sourceLessonSlug: "operated-is-not-owned",
          },
          {
            prompt: "What share of Black farm operators in 1920 worked land they did not own?",
            options: ["About seventy-six per cent", "About a quarter, since owners outnumbered tenants in most southern states", "About half, evenly split between owners and tenants across the country", "About ninety-five per cent, counting managers alongside tenants"],
            correctIndex: 0,
            explanation: "705,070 tenants out of 925,708 operators is 76.2 per cent, which is why an acreage-operated figure is mostly a figure about other people's land.",
            sourceLessonSlug: "operated-is-not-owned",
          },
          {
            prompt: "Why can the 1920 census not tell you how many acres Black farmers owned?",
            options: ["The question was never asked", "The returns for owned acreage were destroyed in a fire before publication", "The Bureau published owned acreage only for white operators", "The figure exists but sits in an unpublished appendix held by the National Archives"],
            correctIndex: 0,
            explanation: "The general farm schedule asked tenure as yes-or-no questions and acreage once, divided only by land use.",
            sourceLessonSlug: "operated-is-not-owned",
          },
          {
            prompt: "How did the 1920 general farm schedule capture tenure?",
            options: ["As four yes-or-no questions", "As a single acreage figure for owned land and another for rented land", "As a percentage of the farm the operator held in fee simple", "As a copy of the recorded deed attached to the enumerator's return"],
            correctIndex: 0,
            explanation: "The schedule asked whether the operator owned all of the farm, rented part but not all, rented all, or operated it as a hired manager.",
            sourceLessonSlug: "operated-is-not-owned",
          },
          {
            prompt: "How did the 1920 schedule divide the farm's acreage?",
            options: ["By land use", "By ownership, separating owned acres from rented acres", "By crop, listing acreage under each commodity grown", "By tenure class, matching the four tenure questions"],
            correctIndex: 0,
            explanation: "It captured total acres, improved land, woodland and other unimproved land, which is a use split rather than an ownership split.",
            sourceLessonSlug: "operated-is-not-owned",
          },
          {
            prompt: "Where does the word owned appear on the 1920 schedule besides the tenure questions?",
            options: ["In the encumbrance question, asking for dollars of debt", "In the acreage question, asking for owned acres separately", "In the improved land question, asking which improvements the operator owned", "It appears nowhere else on the schedule at all"],
            correctIndex: 0,
            explanation: "The farm encumbrance inquiry asks for the total debt on land in the farm owned by the operator, which is a dollar figure rather than an acreage.",
            sourceLessonSlug: "operated-is-not-owned",
          },
          {
            prompt: "Why can a part owner's acreage not be treated as owned land?",
            options: ["It mixes owned ground with land rented in", "Because a part owner reports only the rented portion of the farm", "Because part owners were excluded from the acreage tables entirely", "Because the census counted part owners as tenants rather than as owners"],
            correctIndex: 0,
            explanation: "A part owner reported one acreage covering both owned and rented land, with no way to separate them.",
            sourceLessonSlug: "operated-is-not-owned",
          },
          {
            prompt: "What is the floor of the colored ownership bracket, and what row does it come from?",
            options: ["14,005,208 acres, the Owning entire farm row", "16,704,192 acres, all land in colored owner-operated farms", "2,698,984 acres, the Hiring additional land row for part owners", "27,764,650 acres, all land in colored tenant-operated farms"],
            correctIndex: 0,
            explanation: "Every acre in the Owning entire farm row is owned by definition, so it is a floor rather than an estimate.",
            sourceLessonSlug: "operated-is-not-owned",
          },
          {
            prompt: "What is the ceiling of the colored ownership bracket?",
            options: ["16,704,192 acres", "14,005,208 acres, which is instead the floor drawn from the full-owner row", "44,944,521 acres, which is all land operated by colored farmers of every tenure", "13,948,512 acres, which is a Negro figure from a later census publication"],
            correctIndex: 0,
            explanation: "All land in owner-operated farms overstates ownership by whatever part of the part owners' 2,698,984 acres was rented in.",
            sourceLessonSlug: "operated-is-not-owned",
          },
          {
            prompt: "Where does the circulating figure of 14 to 16 million acres come from?",
            options: ["The colored ownership bracket", "The Negro owner-operated acreage reported for 1920 in the 1930 census", "An estimate published by the Commission on Civil Rights in 1982", "The improved acreage within Black-operated farms in the 1920 census"],
            correctIndex: 0,
            explanation: "It is the span from the colored full-owner floor to the colored owner-operated ceiling, and its upper end is an acknowledged overstatement.",
            sourceLessonSlug: "operated-is-not-owned",
          },
          {
            prompt: "What is wrong with quoting 925,708 Black farmers alongside 15 million acres owned?",
            options: ["The two figures come from different racial universes", "The acreage figure is for 1930 rather than for 1920", "The operator count includes managers, whom the acreage figure excludes", "The acreage figure counts improved land only, not all land in farms"],
            correctIndex: 0,
            explanation: "925,708 is a Negro operator count while the 14 to 16 million bracket is a colored acreage bracket, and it is a ceiling on operated-by-owners land rather than a measurement of ownership.",
            sourceLessonSlug: "operated-is-not-owned",
          },
          {
            prompt: "Which publication back-reports Negro owner acreage for 1920?",
            options: ["Hall's The Negro Farmer in the United States", "Volume V of the Fourteenth Census, in its chapter on race and tenure", "The Commission on Civil Rights report of February 1982", "The 1978 Census of Agriculture, volume I, part 51"],
            correctIndex: 0,
            explanation: "Charles E. Hall's 1933 publication of the 1930 census carries Table 26 at page 40, which gives 1920 alongside 1930.",
            sourceLessonSlug: "operated-is-not-owned",
          },
          {
            prompt: "What figure does Hall's Table 26 give for 1920 Negro owners?",
            options: ["13,948,512 acres", "11,198,893 acres, which is instead the corresponding figure for 1930", "27,077,582 acres, which is instead the figure for tenants in the same year", "41,432,182 acres, which is instead the total across all three tenure classes"],
            correctIndex: 0,
            explanation: "Owners 13,948,512, tenants 27,077,582 and managers 406,088 sum exactly to the 41,432,182 total from the 1920 volume.",
            sourceLessonSlug: "operated-is-not-owned",
          },
          {
            prompt: "Why is 13,948,512 a ceiling rather than a measurement of Black-owned acreage?",
            options: ["It counts land in farms operated by owners", "Because it was estimated rather than enumerated by the Census Bureau", "Because it excludes land owned by people who were not farming it", "Because it was published thirteen years after the census it describes"],
            correctIndex: 0,
            explanation: "A part owner's farm includes rented ground, and no full-owner and part-owner split for Negroes was ever published.",
            sourceLessonSlug: "operated-is-not-owned",
          },
          {
            prompt: "What slippage is visible on Hall's own page?",
            options: ["His heading says owned and his sentences say operated by owners", "His table reports acres and his text reports farms", "His figures are for the South while his heading claims the whole country", "His percentages do not sum to one hundred across the tenure classes"],
            correctIndex: 0,
            explanation: "The section heading reads Loss of owned land while the sentences beneath say the land in farms operated by Negro owners, which is a different quantity.",
            sourceLessonSlug: "operated-is-not-owned",
          },
          {
            prompt: "How does the census itself define a cropper?",
            options: ["A share tenant whose work animals the landlord furnishes", "Any tenant paying rent in a fixed quantity of the crop rather than in cash", "An owner who hires additional land from a neighbouring proprietor", "A farm labourer paid wages rather than a share of the harvest"],
            correctIndex: 0,
            explanation: "Volume V distinguishes share tenants, who furnish their own work animals, from croppers, whose animals are furnished by the landlord.",
            sourceLessonSlug: "operated-is-not-owned",
          },
          {
            prompt: "What labels does the census print for full and part owners in its tables?",
            options: ["Owning entire farm and Hiring additional land", "Full owners and part owners, matching the terms used in the prose", "Fee simple holders and mixed tenure operators", "Proprietors and lessees, following the terminology of the period"],
            correctIndex: 0,
            explanation: "The prose uses full owner and part owner while the printed rows read Owning entire farm and Hiring additional land.",
            sourceLessonSlug: "operated-is-not-owned",
          },
          {
            prompt: "What is a standing renter, in the census's own definition?",
            options: ["A tenant paying a stated amount of farm products", "A tenant paying cash rent fixed per acre of crop land", "A tenant who has occupied the same farm for more than ten years", "A tenant whose landlord furnishes both animals and implements"],
            correctIndex: 0,
            explanation: "The definition gives the example of three bales of cotton or five hundred bushels of corn for the use of the farm.",
            sourceLessonSlug: "operated-is-not-owned",
          },
          {
            prompt: "How many operators per farm did the 1997 census collect?",
            options: ["One", "Three, matching the maximum the following census would adopt", "Four, matching the current maximum for producers", "As many as the farm reported, with no ceiling"],
            correctIndex: 0,
            explanation: "That is why the 1997 table has columns only for farms and land in farms, with no separate operator column.",
            sourceLessonSlug: "what-the-census-counts",
          },
          {
            prompt: "What did the 1997 census report for Black operators in the United States?",
            options: ["18,451", "18,816, which is instead the figure the same table reports for 1992", "30,605, which is instead the number of Black-operated farms in 2002", "32,653, which is instead the number of Black-operated farms in 2022"],
            correctIndex: 0,
            explanation: "Table 37 at page 525 gives 18,451 for 1997 on 2,384,868 acres, against 18,816 in 1992.",
            sourceLessonSlug: "what-the-census-counts",
          },
          {
            prompt: "Why are the 1997 farm count and operator count the same number?",
            options: ["One operator was counted per farm", "Because every Black-operated farm that year reported exactly one owner of record", "Because the census suppressed the operator column for confidentiality reasons", "Because the two were reconciled by a later coverage adjustment"],
            correctIndex: 0,
            explanation: "With one operator per farm there was nothing to separate, so the table carries no distinct operator column.",
            sourceLessonSlug: "what-the-census-counts",
          },
          {
            prompt: "What footnote did the 2002 census carry that broke the series?",
            options: ["Data were collected for a maximum of three operators per farm", "Farms with sales below ten thousand dollars were excluded from the count", "Race was recorded by enumerator observation rather than by self-identification", "Operators of rented land were counted separately from owners for the first time"],
            correctIndex: 0,
            explanation: "Once a farm could report more than one operator, farms and operators stopped being the same number.",
            sourceLessonSlug: "what-the-census-counts",
          },
          {
            prompt: "What did the 2002 census report for Black-operated farms and Black operators?",
            options: ["30,605 farms and 36,370 operators", "36,370 farms and 30,605 operators, the reverse of the figures reported", "30,605 of each, since the two figures still coincided that year", "22,384 farms and 8,221 operators, which are instead the single and multiple counts"],
            correctIndex: 0,
            explanation: "22,384 farms reported one operator and 8,221 reported more than one, which is what separates the two totals.",
            sourceLessonSlug: "what-the-census-counts",
          },
          {
            prompt: "What replaced the term operator, and when?",
            options: ["Producer, from 2017", "Principal operator, from 2002 onwards in every published table", "Decision maker, from 2012 onwards in the highlights publications", "Proprietor, from 1997 onwards in the geographic area series"],
            correctIndex: 0,
            explanation: "The 2017 census adopted producer, and the 2022 census collects demographic information for up to four producers per farm.",
            sourceLessonSlug: "what-the-census-counts",
          },
          {
            prompt: "How many producers per farm does the 2022 census collect information for?",
            options: ["Up to four", "Up to three, unchanged from the maximum adopted in 2002", "Exactly one, restoring the pre-2002 convention", "As many as the farm reports, with no upper limit"],
            correctIndex: 0,
            explanation: "The Table 52 headnote and Appendix B at page B-16 both state a maximum of four producers per farm.",
            sourceLessonSlug: "what-the-census-counts",
          },
          {
            prompt: "How many Black producers did the 2022 census count, alone or in combination?",
            options: ["46,738", "41,807, which is instead the count of Black-alone producers", "32,653, which is instead the number of farms with a Black producer", "48,697, which is instead the corresponding figure for 2017"],
            correctIndex: 0,
            explanation: "The alone-or-in-combination count is 46,738 and the alone count is 41,807, because respondents may mark more than one race.",
            sourceLessonSlug: "what-the-census-counts",
          },
          {
            prompt: "How many farms had a Black producer in 2022?",
            options: ["32,653", "46,738, which is instead the count of Black producers on those farms", "41,807, which is instead the count of Black-alone producers", "5,323,654, which is instead the acreage those farms operated"],
            correctIndex: 0,
            explanation: "The commonly quoted figure of about 32,700 is this farm count, not a count of farmers.",
            sourceLessonSlug: "what-the-census-counts",
          },
          {
            prompt: "How many acres did Black producers operate in 2022, and at what average farm size?",
            options: ["5,323,654 acres, averaging 163 acres", "41,432,182 acres, averaging 45 acres, matching the 1920 figures", "2,384,868 acres, averaging 129 acres, matching the 1997 figures", "3,836,339 acres, averaging 125 acres, matching the 2002 figures"],
            correctIndex: 0,
            explanation: "The 2022 highlights publication reports 5,323,654 acres and an average of 163 acres per farm.",
            sourceLessonSlug: "what-the-census-counts",
          },
          {
            prompt: "Why do a Black-alone and a Black-in-combination count both exist?",
            options: ["Respondents may mark more than one race category", "Because the census counts owners and tenants under separate racial headings", "Because the alone count excludes producers who are not the principal operator", "Because the combination count includes producers on farms with no Black owner"],
            correctIndex: 0,
            explanation: "The report form asks respondents to mark one or more race categories, which produces the two figures.",
            sourceLessonSlug: "what-the-census-counts",
          },
          {
            prompt: "How many producers and farms did the 2022 census count nationally?",
            options: ["3,374,044 producers on 1,900,487 farms", "1,900,487 producers on 3,374,044 farms, the reverse of the figures given", "2,042,220 producers on 2,042,220 farms, which are the 2017 farm totals", "1,911,859 producers on 2,215,876 farms, which are the two 1997 restatements"],
            correctIndex: 0,
            explanation: "That is about 1.78 producers per farm, which is the size of the definitional effect nationally.",
            sourceLessonSlug: "what-the-census-counts",
          },
          {
            prompt: "How did the share of farms reporting more than one decision maker change between 2017 and 2022?",
            options: ["From 54 to 60 per cent", "From 60 to 54 per cent, as consolidation reduced multi-operator farms", "From 30 to 45 per cent, following the change from operator to producer", "It did not change, because the collection maximum stayed at four"],
            correctIndex: 0,
            explanation: "The producer highlights publication reports the rise from 54 per cent to 60 per cent.",
            sourceLessonSlug: "what-the-census-counts",
          },
          {
            prompt: "Which comparison does the lesson say to make across a century?",
            options: ["Farms to farms", "Producers to operators, since both count people running a farm", "Acres to acres, since acreage definitions never changed", "Whichever pair produces the larger measured change"],
            correctIndex: 0,
            explanation: "Comparing about 925,710 farms in 1920 to 32,653 farms in 2022 gives a decline of roughly 96.5 per cent.",
            sourceLessonSlug: "what-the-census-counts",
          },
          {
            prompt: "What is the decline from 1920 to 2022, measured farm to farm?",
            options: ["About 96.5 per cent", "About 94.9 per cent, which is what a farms-to-producers comparison gives", "About 93.8 per cent, which is the 1920 to 1978 figure the Commission printed", "About 56.4 per cent, which is the corresponding white-operated farm decline"],
            correctIndex: 0,
            explanation: "About 925,710 farms in 1920 against 32,653 in 2022 is a fall of roughly 96.5 per cent.",
            sourceLessonSlug: "what-the-census-counts",
          },
          {
            prompt: "What happens if you compare 1920 farms against 2022 producers?",
            options: ["The loss is understated", "The loss is overstated, because producers are fewer than farms", "The two are equivalent, since both count people who run farms", "The comparison is impossible, since the census publishes no producer total"],
            correctIndex: 0,
            explanation: "That comparison gives about 94.9 per cent, which is smaller than the farm-to-farm figure because people at the end are matched against farms at the beginning.",
            sourceLessonSlug: "what-the-census-counts",
          },
          {
            prompt: "Why is the rise from 18,451 in 1997 to 32,653 in 2022 not a recovery?",
            options: ["The unit and the method both changed", "Because the 2022 figure includes producers who do not farm full time", "Because 1997 was an unusually low year within an otherwise stable series", "Because the 2022 figure counts acres rather than farms"],
            correctIndex: 0,
            explanation: "The unit moved from operator to producer, the per-farm maximum went from one to three to four, and coverage adjustment was introduced.",
            sourceLessonSlug: "what-the-census-counts",
          },
          {
            prompt: "By how much did the 2002 census restate the 1997 national farm count?",
            options: ["Up 15.9 per cent", "Down 15.9 per cent, after removing farms that had ceased operating", "Up 57 per cent, matching the Commission's decadal rate of loss", "It did not restate it, because coverage adjustment applies only from 2017"],
            correctIndex: 0,
            explanation: "The total moved from 1,911,859 to 2,215,876 without a single new farm existing, which is a change in the ruler.",
            sourceLessonSlug: "what-the-census-counts",
          },
          {
            prompt: "What did the Commission's own footnote say about comparability across census years?",
            options: ["It is problematic because the definition of a farm changed", "It is straightforward, since the Census Bureau publishes adjusted series", "It applies only to acreage figures and not to operator counts", "It affects the southern states but not the country as a whole"],
            correctIndex: 0,
            explanation: "The report warns of the problem and tabulates every farm definition from 1900 to 1978 in its own appendix.",
            sourceLessonSlug: "what-the-census-counts",
          },
          {
            prompt: "What does the phrase unit break describe?",
            options: ["The point where what is counted changes", "A gap in a series caused by a census being cancelled", "The year a statistical agency changes its publication format", "The difference between a preliminary and a final published figure"],
            correctIndex: 0,
            explanation: "After a unit break the earlier and later figures are not comparable without adjustment, which is what 2002 did to this series.",
            sourceLessonSlug: "what-the-census-counts",
          },
          {
            prompt: "What is a coverage adjustment?",
            options: ["A correction for farms the enumeration missed", "A correction for farms that reported more than one operator", "A reweighting of the sample to match the resident population", "A revision applied when a state boundary changes between censuses"],
            correctIndex: 0,
            explanation: "It raised the restated 1997 national farm count by 15.9 per cent without any new farm coming into existence.",
            sourceLessonSlug: "what-the-census-counts",
          },
          {
            prompt: "What did the Commission on Civil Rights predict in 1982?",
            options: ["Fewer than 10,000 Black farmers by the end of the next decade", "That Black farm numbers would stabilise once the county committees were reformed", "That white-operated farm numbers would fall faster than Black-operated ones", "That the census would stop publishing operator counts by race entirely"],
            correctIndex: 0,
            explanation: "The report says that at the current rate of loss there will be fewer than 10,000 Black farmers at the end of the next decade.",
            sourceLessonSlug: "the-1982-prediction",
          },
          {
            prompt: "What rate of loss was the 1982 forecast built on?",
            options: ["Fifty-seven per cent per decade", "Thirty-nine point eight per cent per year, matching the committee membership decline", "Ninety-four per cent, the total loss the report measured since 1920", "Fifty-six point four per cent, which is the corresponding white-operated farm decline"],
            correctIndex: 0,
            explanation: "The sentence before the prediction gives the preceding decade's decline in Black-operated farms as 57 per cent.",
            sourceLessonSlug: "the-1982-prediction",
          },
          {
            prompt: "How did that rate compare with the white rate, according to the Commission?",
            options: ["Two and a half times as fast", "Roughly the same, which is what made the finding unremarkable", "Half as fast, which the report attributed to smaller starting numbers", "Ten times as fast, which the report described as unprecedented"],
            correctIndex: 0,
            explanation: "The report describes the Black rate of decline as two and a half times that for white-operated farms.",
            sourceLessonSlug: "the-1982-prediction",
          },
          {
            prompt: "What baseline figure does the forecast compound from?",
            options: ["57,271 Black-operated farms in 1978", "925,710 Black-operated farms in 1920, the peak the report identifies", "18,451 Black operators in 1997, from the census after the forecast", "10,000 Black farmers, which is the forecast's own endpoint"],
            correctIndex: 0,
            explanation: "The Commission cites 57,271 farms from the 1978 Census of Agriculture, volume I, part 51, page 209.",
            sourceLessonSlug: "the-1982-prediction",
          },
          {
            prompt: "Which unit should the prediction be read in?",
            options: ["Farms", "Producers, matching the current census terminology", "Acres, since the report described land loss rather than farm loss", "Households, since the report counted families rather than operations"],
            correctIndex: 0,
            explanation: "The Commission's baseline of 57,271 is a farm count and the rate was computed in farms, so the forecast is a forecast about farms.",
            sourceLessonSlug: "the-1982-prediction",
          },
          {
            prompt: "Does the report define which year the end of the next decade means?",
            options: ["No", "Yes, it names 1990 explicitly in the Findings section", "Yes, it names 1999 in the chapter that carries the forecast", "Yes, it names the year of the next decennial census of agriculture"],
            correctIndex: 0,
            explanation: "The phrase appears three times and is defined nowhere, so any year attached to it is an inference.",
            sourceLessonSlug: "the-1982-prediction",
          },
          {
            prompt: "Applying the 57 per cent rate once to the 1978 baseline gives what?",
            options: ["About 24,455", "About 10,442, which requires the rate to be applied twice", "About 32,653, which is the actual 2022 farm count", "About 18,451, which is the actual 1997 operator count"],
            correctIndex: 0,
            explanation: "57,271 falling 57 per cent gives roughly 24,455 after one decade, which is well above the forecast threshold.",
            sourceLessonSlug: "the-1982-prediction",
          },
          {
            prompt: "Applying the rate twice gives what, and what does that imply about the target date?",
            options: ["About 10,442, implying the end of the 1990s", "About 24,455, implying the end of the 1980s", "About 3,000, implying the middle of the 1990s", "About 32,000, implying no threshold was ever crossed"],
            correctIndex: 0,
            explanation: "Fewer than 10,000 is reached only after roughly two decades, which is an inference from the report's numbers rather than a statement it makes.",
            sourceLessonSlug: "the-1982-prediction",
          },
          {
            prompt: "How does the prediction fare against the 1997 census count?",
            options: ["It overshot by nearly double", "It was almost exactly right, within a few hundred farms", "It undershot, because the actual count fell below 10,000", "It cannot be assessed, because 1997 published no racial breakdown"],
            correctIndex: 0,
            explanation: "The 1997 count of 18,451 is well above the 10,000 threshold, so a 57 per cent decadal rate did not continue.",
            sourceLessonSlug: "the-1982-prediction",
          },
          {
            prompt: "What work is the Commission's phrase at the current rate of loss doing?",
            options: ["It makes the forecast conditional", "It identifies the census year the baseline was drawn from", "It restricts the forecast to the nine states in the committee table", "It signals that the figure is an estimate rather than an enumeration"],
            correctIndex: 0,
            explanation: "A conditional forecast is falsified only if the condition held and the outcome still differed, and here the rate itself changed.",
            sourceLessonSlug: "the-1982-prediction",
          },
          {
            prompt: "Why was a compounding straight-line extrapolation the wrong tool here?",
            options: ["The population is bounded and made of people deciding", "Because the census stopped publishing the series it depended on", "Because compounding rates always understate decline in agriculture", "Because the 1978 baseline was later revised upward by the Bureau"],
            correctIndex: 0,
            explanation: "A count that cannot fall below zero, composed of people making choices, does not decline at a constant proportional rate.",
            sourceLessonSlug: "the-1982-prediction",
          },
          {
            prompt: "What is true at the same time as the prediction being wrong?",
            options: ["The loss it described was real and enormous", "The Commission's underlying data were fabricated", "The white-operated farm count fell faster over the same period", "The census definitions were stable throughout the period measured"],
            correctIndex: 0,
            explanation: "About 925,710 farms in 1920 to 32,653 in 2022 is roughly a 96.5 per cent fall, against a 56.4 per cent decline for white-operated farms over the stretch the Commission measured.",
            sourceLessonSlug: "the-1982-prediction",
          },
          {
            prompt: "Which is the finding and which is the error, in the Commission's forecast?",
            options: ["The disparity is the finding, the extrapolation is the error", "The extrapolation is the finding, the disparity is the error", "Both are errors, since the underlying figures were not comparable", "Both are findings, since the outcome eventually matched the forecast"],
            correctIndex: 0,
            explanation: "The rate gap between Black-operated and white-operated farm losses is the real result; projecting it forward as a constant was the mistake.",
            sourceLessonSlug: "the-1982-prediction",
          },
          {
            prompt: "Which of these would improve a forecast of this kind?",
            options: ["A rate that decays rather than compounding", "A larger starting baseline drawn from an earlier census year", "A prediction stated in acres rather than in farms or operators", "A shorter horizon that avoids naming any threshold at all"],
            correctIndex: 0,
            explanation: "The lesson lists a decaying rate, a stated floor, a defined unit, a named target year and a note on the census definitions.",
            sourceLessonSlug: "the-1982-prediction",
          },
          {
            prompt: "What does the exercise at the end of the lesson ask a learner to produce?",
            options: ["One sentence on what the number means and one on what it does not", "A projection of their state's Black farm count for the next decade", "A comparison of their state against the national average for 2022", "A list of the county committees operating in their state today"],
            correctIndex: 0,
            explanation: "The unit must be named in both sentences, and a learner who cannot write the second does not yet have the first.",
            sourceLessonSlug: "the-1982-prediction",
          },
          {
            prompt: "What does the report's page 2 version of the prediction say?",
            options: ["Virtually no Black people operating farms", "Fewer than 25,000 Black farmers by the end of the next decade", "That the decline would halt once federal credit programmes were reformed", "That the census would no longer be able to measure the population"],
            correctIndex: 0,
            explanation: "Page 2 states that at this rate of loss there will be virtually no Black people operating farms in the country by the end of the next decade.",
            sourceLessonSlug: "the-1982-prediction",
          },
          {
            prompt: "Which census does the Commission cite for its 57,271 figure?",
            options: ["The 1978 Census of Agriculture, volume I, part 51", "The 1974 Census of Agriculture, volume II, part 3", "The 1920 Census of Agriculture, Volume V, chapter V", "The 1997 Census of Agriculture, volume 1, part 51"],
            correctIndex: 0,
            explanation: "Footnote 1 cites the 1978 Census of Agriculture, volume I, part 51, page 209.",
            sourceLessonSlug: "the-1982-prediction",
          },
          {
            prompt: "How does the Commission's 1920 farm figure compare with the census table?",
            options: ["It differs by two", "It differs by about twenty-four thousand, because it uses the colored category", "It matches exactly, since both come from the same published table", "It cannot be compared, since the Commission gives only a percentage"],
            correctIndex: 0,
            explanation: "The Commission's Table 1.1 prints 925,710 while the 1920 census table gives 925,708, a difference that changes nothing and is worth knowing.",
            sourceLessonSlug: "what-the-census-counts",
          },
          {
            prompt: "What is the correct description of a source that rounds 925,710 to 926,000?",
            options: ["A secondary figure, and the report cites one for it", "An error, since the census figure ends in eight rather than ten", "A coverage adjustment applied to the original enumeration", "A count of colored rather than Negro operators"],
            correctIndex: 0,
            explanation: "The Commission's rounded 926,000 is footnoted to Calvin L. Beale rather than to the census, while its own Table 1.1 prints 925,710.",
            sourceLessonSlug: "what-the-census-counts",
          },
          {
            prompt: "What did the Commission report as the white-operated farm decline from 1920 to 1978?",
            options: ["56.4 per cent", "93.8 per cent, which is instead the corresponding Black-operated decline", "57 per cent, which is instead the Black decline over the preceding decade alone", "96.5 per cent, which is instead the Black decline measured to 2022"],
            correctIndex: 0,
            explanation: "The report gives almost 94 per cent for Black-operated farms against 56.4 per cent for white-operated farms over the same period.",
            sourceLessonSlug: "the-1982-prediction",
          },
          {
            prompt: "Why is naming the unit the first step in grading any prediction?",
            options: ["A prediction in farms cannot be graded against a count of people", "Because the unit determines which agency published the outcome data", "Because a forecast is falsified only if the unit changed during the period", "Because the census assigns a different confidence interval to each unit"],
            correctIndex: 0,
            explanation: "The forecast was computed in farms, so grading it against a producer count would test something the Commission never said.",
            sourceLessonSlug: "the-1982-prediction",
          },
          {
            prompt: "What should be said about any target year attached to the 1982 forecast?",
            options: ["It is an inference and must be labelled as one", "It is 1990, which the report states in its Findings", "It is 1999, which the report states in its opening chapter", "It cannot be inferred at all from the figures the report provides"],
            correctIndex: 0,
            explanation: "The report never names a year, and the two-decade reading comes from applying the report's own rate to its own baseline.",
            sourceLessonSlug: "the-1982-prediction",
          },
          {
            prompt: "What is the 2017 Black producer count, for comparison with 2022?",
            options: ["48,697", "46,738, which is instead the corresponding 2022 figure", "35,470, which is instead the number of Black-operated farms in 2017", "41,807, which is instead the Black-alone producer count in 2022"],
            correctIndex: 0,
            explanation: "Black producers fell from 48,697 in 2017 to 46,738 in 2022, a decline of 4.0 per cent.",
            sourceLessonSlug: "what-the-census-counts",
          },
          {
            prompt: "How many Black-operated farms did the 2017 census count?",
            options: ["35,470", "32,653, which is instead the corresponding figure for 2022", "48,697, which is instead the count of Black producers in 2017", "30,605, which is instead the count of Black-operated farms in 2002"],
            correctIndex: 0,
            explanation: "Black-operated farms fell from 35,470 in 2017 to 32,653 in 2022, a decline of 7.9 per cent.",
            sourceLessonSlug: "what-the-census-counts",
          },
          {
            prompt: "How did the Black-operated farm decline from 2017 to 2022 compare with the national one?",
            options: ["Faster, at 7.9 per cent against 6.9 per cent", "Slower, at 6.9 per cent against 7.9 per cent nationally", "Identical, since both series fell by the same proportion", "In the opposite direction, since Black-operated farms increased"],
            correctIndex: 0,
            explanation: "All United States farms fell 6.9 per cent while Black-operated farms fell 7.9 per cent over the same five years.",
            sourceLessonSlug: "what-the-census-counts",
          },
          {
            prompt: "What is the best summary of what Lesson 9 established?",
            options: ["The operated figure is exact and the owned figure was never collected", "Both the operated and the owned figures are exact and published", "Neither figure can be established from any federal publication", "The owned figure is exact and the operated figure must be estimated"],
            correctIndex: 0,
            explanation: "41,432,182 acres operated is printed at page 298; acres owned was never asked on the schedule and can only be bracketed or ceilinged.",
            sourceLessonSlug: "operated-is-not-owned",
          },
          {
            prompt: "Which sentence about 1920 Black farming is safe to make?",
            options: ["Most Black farm operators worked land they did not own", "Black farmers owned about fifteen million acres in that year", "Black operators owned three quarters of the land they farmed", "Black and colored operator counts are interchangeable in that census"],
            correctIndex: 0,
            explanation: "705,070 of 925,708 operators were tenants, which is 76 per cent, and the ownership acreage was never collected.",
            sourceLessonSlug: "operated-is-not-owned",
          },
          {
            prompt: "Why does the operated against owned distinction matter to this course specifically?",
            options: ["A tenant's land can be lost without any sale by the family", "Because federal loan eligibility depends on the acreage a farmer owns", "Because the census refused to publish tenure data by race after 1920", "Because tenants were ineligible for every federal farm programme"],
            correctIndex: 0,
            explanation: "Operated acreage is mostly other people's land, so a figure about it describes something different from the landholding Section 4 is about.",
            sourceLessonSlug: "operated-is-not-owned",
          },
          {
            prompt: "What did the 1920 census report as the value of Negro-operated land and buildings?",
            options: ["$2,257,645,325", "$648,760,084, which is instead the value of colored owner-operated land and buildings", "$1,058,577,198, which is instead the total relief paid in a later settlement", "$2,200,000,000, which is instead a later congressional appropriation"],
            correctIndex: 0,
            explanation: "Table 5 at page 298 gives the value alongside the acreage and improved acreage figures.",
            sourceLessonSlug: "operated-is-not-owned",
          },
          {
            prompt: "Where is the 1920 operator count repeated, besides Table 4?",
            options: ["Table 16, page 311", "Table 1, page 189, in the chapter on color and tenure", "Table 26, page 40, in the following census publication", "Nowhere, since the volume prints each figure only once"],
            correctIndex: 0,
            explanation: "Table 16 gives colored farm operators by race and tenure by divisions and states, and its United States row matches Table 4 exactly.",
            sourceLessonSlug: "operated-is-not-owned",
          },
          {
            prompt: "Which is the correct order of maximum operators or producers per farm?",
            options: ["One, then three, then four", "Four, then three, then one, as the census tightened its definition", "One, then two, then four, with a doubling at each revision", "Three throughout, from the first census of agriculture to the present"],
            correctIndex: 0,
            explanation: "One operator per farm until 2002, a maximum of three from 2002, and up to four producers from 2017.",
            sourceLessonSlug: "what-the-census-counts",
          },
          {
            prompt: "What does about 1.78 producers per farm imply for any people-to-farms comparison?",
            options: ["A count of people is now well above a count of farms", "A count of people is now below a count of farms nationally", "The two counts are close enough to be treated as interchangeable", "The ratio applies only to farms with more than one decision maker"],
            correctIndex: 0,
            explanation: "3,374,044 producers on 1,900,487 farms means a producer count runs roughly one and three quarter times the farm count.",
            sourceLessonSlug: "what-the-census-counts",
          },
          {
            prompt: "Which is a fair description of the 1997 to 2022 apparent rise?",
            options: ["Mostly the ruler moving", "Entirely genuine growth in Black farm operations", "A statistical error the Census Bureau has since corrected", "The result of a coverage adjustment applied only to Black operators"],
            correctIndex: 0,
            explanation: "The unit changed, the per-farm maximum rose twice, and coverage adjustment was introduced, so a number that went up because the ruler changed has not gone up.",
            sourceLessonSlug: "what-the-census-counts",
          },
          {
            prompt: "Which document tabulates every census farm definition from 1900 to 1978?",
            options: ["Appendix A of the Commission's 1982 report", "Appendix B of the 2022 census, volume 1, chapter 1", "Appendix A of the 1920 census, Volume V", "Table 37 of the 1997 census, part 51"],
            correctIndex: 0,
            explanation: "The Commission tabulated the definitions itself and warned in a footnote that comparability across years is problematic.",
            sourceLessonSlug: "what-the-census-counts",
          },
          {
            prompt: "What is the most common error in this subject, according to Lesson 10?",
            options: ["Comparing figures across a unit break", "Using the colored category instead of the Negro category for 1920", "Quoting acreage figures without adjusting them for inflation", "Relying on secondary sources instead of the census volumes"],
            correctIndex: 0,
            explanation: "The problem is old, documented by the agencies themselves, and still the most common error in comparisons of Black farming across a century.",
            sourceLessonSlug: "what-the-census-counts",
          },
          {
            prompt: "What did the Commission's Findings say about the prediction?",
            options: ["If the rate continues unabated, fewer than 10,000 remain", "That the prediction should be treated as an upper bound rather than a forecast", "That the rate had already begun to slow by the time of publication", "That the census would need to change its definitions to measure the outcome"],
            correctIndex: 0,
            explanation: "The Findings restate the forecast in conditional form, matching the chapter text's at the current rate of loss.",
            sourceLessonSlug: "the-1982-prediction",
          },
          {
            prompt: "Which combination correctly describes what this course prints about 1920 acreage?",
            options: ["Operated exactly, owned as a ceiling with the source's own slippage shown", "Both operated and owned exactly, from the same census table", "Neither, following the refusal WARRANT-01 made on the same question", "Owned exactly, with the operated figure left as an estimate"],
            correctIndex: 0,
            explanation: "41,432,182 acres operated is printed at page 298, and 13,948,512 is described as a ceiling because Hall's own sentences say operated by owners.",
            sourceLessonSlug: "operated-is-not-owned",
          },
          {
            prompt: "How much improved land did Black-operated farms contain in 1920?",
            options: ["27,928,900 acres", "41,432,182 acres, which is instead all land in those farms", "29,298,441 acres, which is instead the colored improved acreage", "14,005,208 acres, which is instead the colored full-owner acreage"],
            correctIndex: 0,
            explanation: "Table 5 at page 298 reports improved land alongside all land in farms and the value of land and buildings.",
            sourceLessonSlug: "operated-is-not-owned",
          },
          {
            prompt: "How many colored operators were recorded as managers in 1920?",
            options: ["2,226", "2,026, which is instead the number of Negro managers in the same year", "233,222, which is instead the number of colored owner-operators", "714,441, which is instead the number of colored tenants"],
            correctIndex: 0,
            explanation: "The colored figures in chapter IV run slightly above the Negro figures in chapter V for every tenure class.",
            sourceLessonSlug: "operated-is-not-owned",
          },
          {
            prompt: "How did the number of Black farm operators change between 1910 and 1920?",
            options: ["It rose, from 893,370 to 925,708", "It fell, from 925,708 to 893,370, which is the reverse of the reported movement", "It was unchanged, since the census used the same figure for both years", "It cannot be compared, since the 1910 census used the colored category only"],
            correctIndex: 0,
            explanation: "Table 4 prints both years, and the increase of 32,338 operators is confirmed by Hall's own prose in the following census.",
            sourceLessonSlug: "operated-is-not-owned",
          },
          {
            prompt: "Which tenure class fell between 1910 and 1920 among Black operators?",
            options: ["Owners, from 218,972 to 218,612", "Tenants, from 705,070 to 672,964, a fall of more than thirty thousand", "Managers, from 2,026 to 1,434 over the same decade", "None of them, since every class rose over the decade"],
            correctIndex: 0,
            explanation: "Owners fell by 360 while tenants rose by 32,106 and managers by 592, which is why the total rose while ownership did not.",
            sourceLessonSlug: "operated-is-not-owned",
          },
          {
            prompt: "What does the 1910 to 1920 tenure movement suggest about the peak year?",
            options: ["The peak in operators was not a peak in ownership", "Ownership grew faster than tenancy across the decade", "The census changed its tenure definitions between the two years", "Managers accounted for most of the increase in operators"],
            correctIndex: 0,
            explanation: "The record number of operators in 1920 was reached through an increase in tenants while the number of owners slightly declined.",
            sourceLessonSlug: "operated-is-not-owned",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 4 — Title
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "land-that-passes-without-a-will",
      title: "13 · Land that passes without a will",
      section: "Section 4 · Title",
      body: `Sections 1 to 3 were about getting money and about counting who was left. This section is about a way of losing land in which **nobody is denied anything**, because the loss happens through ordinary property law working exactly as written.

**Start with the event: somebody dies without a will.** When a landowner dies intestate, the land does not vanish and it does not go to the state. It passes to the heirs under that state's law of intestate succession, and they take it as **tenants in common**. The Uniform Law Commission puts the sequence plainly:

> "If a landowner dies intestate, the real estate passes to the landowner's heirs as tenants-in-common under state law. Tenants-in-common are vulnerable because any individual tenant can force a partition." (Uniform Law Commission, n.d.)

**What a tenancy in common actually is.** Each co-tenant owns an undivided fractional interest in the whole parcel, not a marked-off piece of it. A one-sixth interest is not six acres out of thirty-six. It is a sixth of every square foot. Every co-tenant has the right to possess and use all of it, and none of them can point at a corner and call it theirs alone.

**Now run it for two more generations.** Three children each take a third. Each of them has four children, so twelve grandchildren hold twelfths. Those twelve have thirty children between them, and the parcel is now owned by dozens of people in fractions with large denominators, some of whom have never seen it, some of whom live a thousand miles away, and some of whom do not know they own anything. **Nobody did anything wrong. Nobody sold. The title simply fragmented, because that is what intestacy plus time does to a co-tenancy.**

**Why this belongs in a course about federal farm programmes.** Because of Section 1's gate. A federal farm programme is delivered to a **farm**, identified in the agency's records, and the person applying has to be able to show they control it. On land with dozens of undocumented co-owners, the person actually farming may have farmed it for forty years and still be unable to produce the paperwork the office asks for. **The loan they cannot get is the loan Section 2's committee never had to deny**, because the application never became complete.

Congress addressed exactly that problem in 2018, which tells you it was real. Section 12615 of the Agriculture Improvement Act of 2018 created a list of documents that a farm operator on heirs property may use to obtain a farm number, codified at **7 U.S.C. § 6622b**. The list includes a court order or a recorder's certification in states that have adopted the uniform act, "a fully executed, unrecorded tenancy-in-common agreement", the operator's "tax return ... for each of the 5 years preceding" the application, and plain "self-certification that the farm operator has control of the land" (P.L. 115-334 § 12615). **Read that as a diagnosis.** Congress would not have enumerated five substitutes for a deed if the deed had been available.

**And the same shape recurs after a disaster.** A programme that pays a landowner asks who the landowner is. When the answer is thirty-one people, some unlocatable, the payment waits. Lesson 1 said timing is the whole game; a title problem is a timing problem with no clock you can see.

**One boundary this course keeps.** Heirs property is not a Black institution and is not unique to Black families. It arises anywhere people die without wills and land stays in a family, and it is well documented in Appalachia, in the Southwest and among Native Hawaiian landholders. What is specific is the combination: a population historically served badly by the legal profession, discouraged from probate courts, holding land bought at great cost, in states whose partition law made a fragmented co-tenancy fragile. **The instrument is general; the exposure was not.**

**What makes the co-tenancy fragile is one sentence of ordinary law, and Lesson 14 is about that sentence.**

:::reveal What happens to land when the owner dies without a will? ||| It passes to the heirs under state intestate succession law, and they hold it together as tenants in common.

:::reveal What does owning a one-sixth interest as a tenant in common actually mean? ||| An undivided sixth of the whole parcel, not six acres out of thirty-six, with a right to possess and use all of it.

:::reveal Why does a fragmented title block access to federal farm programmes? ||| Because a programme is delivered to a farm whose operator must document control of it, and the operator of heirs property often cannot, so the application never becomes complete.

## Vocabulary
- **Intestate**: dying without a valid will, so state succession law rather than the owner's instructions determines who takes the property.
- **Tenancy in common**: co-ownership in which each holder has an undivided fractional interest in the whole parcel and a right to possess all of it.
- **Undivided interest**: a share of the whole rather than a marked-off piece, which is why no co-tenant can point at part of the land and call it exclusively theirs.
- **Heirs property**: land held by co-tenants who inherited it, typically without probate and without a written agreement among them.
- **Farm number**: the identifier under which a farm's records are kept at the county office, and the practical precondition for applying to most federal farm programmes.

## Sources
Agriculture Improvement Act of 2018, Pub. L. No. 115-334, § 12615, 132 Stat. 4490 (codified at 7 U.S.C. § 6622b). https://www.govinfo.gov/content/pkg/PLAW-115publ334/html/PLAW-115publ334.htm

Uniform Law Commission. (n.d.). *Partition of Heirs Property Act*. https://www.uniformlaws.org/acts/catalog/current/p`,
    },
    {
      slug: "the-partition-sale",
      title: "14 · Any one co-tenant can force the sale of everything",
      section: "Section 4 · Title",
      body: `Here is the sentence of ordinary property law that turns a fragmented family title into a mechanism for losing land, and it is the reason this section exists.

**Any single co-tenant can force a partition of the whole parcel.** Not their fraction. The whole thing. The right descends from the principle that no co-owner should be trapped in a co-ownership they want out of, which in most settings is sensible and humane. Applied to a parcel held by forty relatives, it means the least-connected person on the deed can start a process that ends with everybody off the land.

**A court asked to partition has two ways to do it.**

- **Partition in kind** divides the land physically and gives each co-tenant a piece.
- **Partition by sale** sells the parcel and divides the money.

**Under traditional law the second one wins far more often than you would expect**, because dividing farmland into forty pieces frequently produces forty pieces worth less in total than the whole was, and a court told to maximise value will order the sale.

**Now add the buyer, and the mechanism is complete.** The Uniform Law Commission describes the move in its own words:

> "Too often, real estate speculators acquire a small share of heirs' property in order to file a partition action and force a sale. Using this tactic, an investor can acquire the entire parcel for a price well below its fair market value and deplete a family's inherited wealth in the process." (Uniform Law Commission, n.d.)

**Read the sequence slowly, because every step is lawful.**

1. An investor finds a distant relative holding a small undivided interest, perhaps a fortieth, perhaps someone who did not know they held anything.
2. The investor buys that interest, cheaply, because a fractional interest in land you cannot sell alone is worth very little on its own.
3. The investor is now a co-tenant, and a co-tenant may petition for partition.
4. The court, finding physical division impracticable, orders a sale.
5. The sale is often at auction, on a short timetable, to whoever shows up, and the family that has farmed the land for a century finds out about it late or cannot outbid a buyer with cash.

**Nobody was denied anything.** No committee voted. No application was refused. The family's own co-ownership, plus one purchased fortieth, was enough.

**Three details make the traditional version worse than it sounds.**

**The valuation.** A fractional interest bought at a discount can be leveraged into control of a whole parcel, because the fraction is priced as a fraction while the partition action reaches the entirety. The gap between those two prices is the investor's return.

**The timetable.** A forced sale runs on the court's schedule, not the family's. Relatives scattered across several states, some of whom have to be located by publication, are being asked to organise money against a deadline they did not set.

**The information.** A co-tenant who does not know they are a co-tenant cannot object, and notice by publication in a newspaper in the county where the land sits reaches almost nobody who moved away in 1948.

**And now connect it back to Section 1, because the two mechanisms compound.** A family that cannot document control of its land cannot get the operating loan, so it farms with less capital, so it earns less, so it cannot pay the taxes or buy out a relative who wants cash, so a fractional interest ends up for sale. **Credit exclusion feeds title loss, and title loss feeds credit exclusion.** Neither one requires anybody to decide anything about the family at all.

**Lesson 15 is about the model statute written to interrupt this, what it actually changes, and the honest limits on what a course may say about how widely it has been adopted.**

:::reveal Which co-tenant may force a partition of an entire parcel? ||| Any single one of them, whatever the size of their undivided interest.

:::reveal What are a court's two ways of partitioning land, and which tends to win for farmland? ||| Partition in kind, which divides the land physically, and partition by sale; under traditional law the sale usually wins, because forty pieces are often worth less in total than the whole.

:::reveal How do credit exclusion and title loss compound each other? ||| Undocumented control blocks the loan, less capital means lower earnings, lower earnings make a buyout or a tax bill unaffordable, and a fractional interest reaches the market.

## Vocabulary
- **Partition**: the legal process by which a co-ownership is ended, either by dividing the property or by selling it and dividing the proceeds.
- **Partition in kind**: physical division of the parcel among the co-tenants, each taking a defined piece.
- **Partition by sale**: sale of the whole parcel with the proceeds divided by fractional share, which is what a forced sale of farmland usually becomes.
- **Fractional interest**: an undivided share that is cheap to buy on its own but carries the full right to petition for partition of the entire parcel.
- **Notice by publication**: service on unlocatable parties by newspaper advertisement, which satisfies a court and reaches almost none of the people it names.

## Sources
Uniform Law Commission. (n.d.). *Partition of Heirs Property Act*. https://www.uniformlaws.org/acts/catalog/current/p`,
    },
    {
      slug: "the-uniform-act-and-the-farm-number",
      title: "15 · A model statute, four protections, and a federal preference",
      section: "Section 4 · Title",
      body: `In July 2010 the National Conference of Commissioners on Uniform State Laws approved the **Uniform Partition of Heirs Property Act** and recommended it for enactment in all the states. A uniform act is not law anywhere until a legislature passes it, which makes this a **state civics** subject as much as a federal one, and it is why your own state's answer here may differ from your neighbour's.

**What the act does not do.** It does not abolish the right to partition. A co-tenant who wants out can still get out, and a buyer of a fractional interest is still a co-tenant. **What it changes is the procedure between the petition and the sale**, and the Uniform Law Commission summarises it in one sentence:

> "UPHPA provides a series of simple due process protections: notice, appraisal, right of first refusal, and if the other co-tenants choose not to exercise their right and a sale is required, a commercially reasonable sale supervised by the court to ensure all parties receive their fair share of the proceeds." (Uniform Law Commission, n.d.)

**Take the four in order, because each one answers a specific failure from Lesson 14.**

**1. Notice, section 4.** Where a plaintiff seeks notice by publication and the court finds the property may be heirs property, the plaintiff must post "a conspicuous sign on the property" within ten days, stating that the action has commenced and identifying the court. **A sign in the field reaches the person actually farming, which a legal advertisement does not.**

**2. Appraisal, section 6.** The court "shall determine the fair market value of the property by ordering an appraisal", performed by "a disinterested real estate appraiser licensed in this state", valuing the property **"assuming sole ownership of the fee simple estate"**. That clause is the heart of the act. It forbids the fractional-interest discount, so the fortieth interest is priced at a fortieth of the whole parcel's real value rather than at what a fractional interest fetches from a distressed seller. Parties get notice of the value and thirty days to object, and the court holds a valuation hearing whether or not anyone does.

**3. Right of first refusal, section 7.** "Any cotenant except a cotenant that requested partition by sale may buy all the interests of the cotenants that requested partition by sale." Electing co-tenants have forty-five days to decide, and the price is a formula rather than a negotiation: the appraised value of the whole parcel multiplied by the fractional ownership being bought. If several elect, the court allocates among them pro rata, and they get at least sixty days to pay. **So the family gets first claim on the interest the investor bought, at a price the court fixed.**

**4. A preference for keeping the land, sections 8 to 10.** The court "shall order partition in kind unless" it finds that doing so would cause prejudice to the co-tenants **as a group**, and section 9 lists factors the court must weigh, including "evidence of the collective duration of ownership or possession of the property by a cotenant and one or more predecessors in title ... who are or were relatives", the use a co-tenant is making of the land, and contributions to taxes, insurance and upkeep. No single factor may be treated as decisive. If a sale is genuinely unavoidable, section 10 requires an **open-market sale** through a broker rather than a courthouse auction.

**Not every family title is covered.** Section 2(5) defines heirs property by three conditions at the time of filing: no written agreement among all the co-tenants governing partition; at least one co-tenant acquired title from a relative; and either twenty per cent of the interests are held by relatives, or twenty per cent are held by one person who got title from a relative, or twenty per cent of the co-tenants are relatives. Fail any of those and ordinary state partition law applies.

**The federal hook, and what it is not.** The Agriculture Improvement Act of 2018 refers to the uniform act twice, and neither reference makes enactment a condition of anything.

- **Section 5104**, codified at **7 U.S.C. § 1936c**, created a relending programme through intermediaries for "projects that assist heirs with undivided ownership interests to resolve ownership and succession on farmland that has multiple owners", USDA's Heirs' Property Relending Program. The Secretary "shall give preference" to intermediaries with ten years of experience serving socially disadvantaged farmers **and** intermediaries "in States that have adopted a statute consisting of an enactment or adoption of the Uniform Partition of Heirs Property Act" (P.L. 115-334 § 5104). **The preference runs to the lender's state, not the borrower's.**
- **Section 12615**, at **7 U.S.C. § 6622b**, is the farm-number list from Lesson 13. In a state that has adopted the act, a court order or a recorder's certification will do. In a state that has not, the tenancy-in-common agreement, the five years of tax returns and the self-certification are still available to everyone. **So enactment unlocks two extra routes; it gates nothing.**

**And here is what this course will not tell you: how many states have adopted it today.** The Uniform Law Commission publishes its enactment map inside an interactive dashboard this course could not read, and the published secondary counts disagree with each other and count different things, some including states that extended similar protections to all partition actions rather than adopting the act itself. **A stale adoption count presented as current would be exactly the kind of confident wrong number this course exists to avoid.** Look it up yourself at the Commission's own site, note the date you looked, and check your own state's code, because that is the only version of this fact that is ever reliable.

:::reveal What does UPHPA section 6 forbid an appraiser from doing? ||| Discounting for fractional ownership; the appraisal must value the property assuming sole ownership of the fee simple estate.

:::reveal Who may exercise the right of first refusal, and at what price? ||| Any co-tenant except one who asked for a sale, at the appraised value of the whole parcel multiplied by the fractional interest being bought.

:::reveal Does adopting the uniform act determine whether a farmer can obtain a farm number? ||| No. It adds two documentation routes, and the tenancy-in-common agreement, five years of tax returns and self-certification remain available in every state.

## Vocabulary
- **Uniform act**: a model statute drafted for adoption by state legislatures, which has no force anywhere until a legislature enacts it.
- **Right of first refusal**: the entitlement of the non-selling co-tenants to buy out the interest of the co-tenant seeking a sale, at a court-determined price, before any sale to an outsider.
- **Fee simple valuation**: appraisal of the whole property as if one person owned it outright, which removes the fractional-interest discount that made speculative buyouts profitable.
- **Open-market sale**: a broker-conducted sale at a commercially reasonable price under court supervision, as against an auction on the courthouse steps.
- **Heirs' Property Relending Program**: the USDA programme created in 2018 that lends through intermediaries to help families resolve ownership and succession on land held in common.

## Sources
Agriculture Improvement Act of 2018, Pub. L. No. 115-334, §§ 5104, 12615, 132 Stat. 4490 (codified at 7 U.S.C. §§ 1936c, 6622b). https://www.govinfo.gov/content/pkg/PLAW-115publ334/html/PLAW-115publ334.htm

National Conference of Commissioners on Uniform State Laws. (2010). *Uniform Partition of Heirs Property Act*. Uniform Law Commission. https://www.uniformlaws.org/acts/catalog/current/p

Uniform Law Commission. (n.d.). *Partition of Heirs Property Act*. https://www.uniformlaws.org/acts/catalog/current/p`,
    },
    {
      slug: "quiz-title",
      title: "16 · Knowledge check: title",
      section: "Section 4 · Title",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What happens to land when its owner dies without a will?",
            options: ["It passes to the heirs as tenants in common", "It escheats to the state until an heir petitions the probate court to reclaim it", "It is sold by the county and the proceeds are held in trust for any heirs who appear", "It passes to the eldest surviving child, who then holds it in trust for the other heirs"],
            correctIndex: 0,
            explanation: "State intestate succession law distributes the interest, and the heirs take it together as tenants in common.",
            sourceLessonSlug: "land-that-passes-without-a-will",
          },
          {
            prompt: "What does a one-sixth interest as a tenant in common give its holder?",
            options: ["An undivided sixth of the whole parcel", "Six acres out of thirty-six, marked off by survey at the family's own election", "A right to be paid a sixth of the farm's annual income but no right to possess the land", "A reversionary interest that takes effect only when the other co-tenants die"],
            correctIndex: 0,
            explanation: "The interest is undivided, so it is a sixth of every square foot and carries a right to possess all of it.",
            sourceLessonSlug: "land-that-passes-without-a-will",
          },
          {
            prompt: "How does a family co-tenancy typically fragment?",
            options: ["Successive generations inherit without wills", "The county subdivides the parcel each time it is reassessed for property tax purposes", "Co-tenants are required by statute to convey a share to each new heir at birth", "A court divides the interests every ten years to reflect changes in family size"],
            correctIndex: 0,
            explanation: "Each intestate death splits the shares again, so denominators grow across generations without anybody selling anything.",
            sourceLessonSlug: "land-that-passes-without-a-will",
          },
          {
            prompt: "Why does a fragmented title interfere with federal farm programmes?",
            options: ["The operator cannot document control of the land", "Because federal law bars payments to any farm with more than one owner of record", "Because programme payments must be divided among all co-owners before disbursement", "Because a co-tenancy cannot lawfully be assigned a farm number in any state"],
            correctIndex: 0,
            explanation: "Programmes are delivered to a farm whose operator must show control, and the person actually farming heirs property often cannot produce that showing.",
            sourceLessonSlug: "land-that-passes-without-a-will",
          },
          {
            prompt: "Which section of the 2018 farm bill created documentation routes for heirs-property operators seeking a farm number?",
            options: ["Section 12615", "Section 5104, which instead created the relending programme for resolving ownership", "Section 14012, which instead reopened the Pigford claims process for late filers", "Section 227, which instead abolished the appointed credit committees in the counties"],
            correctIndex: 0,
            explanation: "Section 12615 of P.L. 115-334, codified at 7 U.S.C. § 6622b, lists the documents that may establish eligibility for a farm number.",
            sourceLessonSlug: "land-that-passes-without-a-will",
          },
          {
            prompt: "Which of these is on the section 12615 list of acceptable documentation?",
            options: ["Self-certification of control", "A notarised affidavit signed by every living co-tenant holding an interest in the parcel", "A title insurance policy issued by an insurer licensed in the state where the land lies", "A survey plat filed with the county recorder showing the operator's exclusive portion"],
            correctIndex: 0,
            explanation: "The list includes self-certification that the farm operator has control of the land, alongside a tenancy-in-common agreement and five years of tax returns.",
            sourceLessonSlug: "land-that-passes-without-a-will",
          },
          {
            prompt: "How many years of tax returns does the section 12615 list accept as documentation?",
            options: ["Five", "Three, matching the participation requirement for a farm ownership loan", "Ten, the period over which the operator must show continuous possession", "One, since the statute is concerned only with the current crop year"],
            correctIndex: 0,
            explanation: "The list accepts the operator's tax return for each of the five years preceding the application.",
            sourceLessonSlug: "land-that-passes-without-a-will",
          },
          {
            prompt: "What does the existence of five statutory substitutes for a deed tell you?",
            options: ["Deeds were often unavailable", "That Congress preferred self-certification to recorded title in all farm programmes", "That the Department had lost its own copies of the deeds during the reorganisation", "That heirs property is a federal rather than a state law category of ownership"],
            correctIndex: 0,
            explanation: "Congress does not enumerate substitutes for a document that people can readily produce, so the list is a diagnosis of the problem.",
            sourceLessonSlug: "land-that-passes-without-a-will",
          },
          {
            prompt: "Is heirs property unique to Black families?",
            options: ["No", "Yes, because the category is defined by federal civil rights law", "Yes, because only families excluded from probate courts can create a co-tenancy", "Yes, because the uniform act applies only to land acquired after emancipation"],
            correctIndex: 0,
            explanation: "It arises wherever people die without wills and land stays in a family, and is documented in Appalachia, the Southwest and among Native Hawaiian landholders; the exposure rather than the instrument is what differed.",
            sourceLessonSlug: "land-that-passes-without-a-will",
          },
          {
            prompt: "Why does a disaster payment stall on heirs property?",
            options: ["The programme must identify the landowner", "Because disaster payments are barred by statute on any land with a clouded title", "Because the county committee must inspect the property before any payment issues", "Because heirs property is ineligible for any programme administered by the Farm Service Agency"],
            correctIndex: 0,
            explanation: "A programme that pays a landowner has to establish who that is, and an answer of thirty-one people, some unlocatable, takes time the calendar does not have.",
            sourceLessonSlug: "land-that-passes-without-a-will",
          },
          {
            prompt: "Who may petition a court to partition a parcel held in common?",
            options: ["Any single co-tenant", "Only a majority of the co-tenants acting together by written agreement", "Only a co-tenant holding at least a twenty per cent undivided interest", "Only a co-tenant who acquired their interest by inheritance rather than purchase"],
            correctIndex: 0,
            explanation: "Any one co-tenant may force partition of the whole parcel, whatever the size of their share.",
            sourceLessonSlug: "the-partition-sale",
          },
          {
            prompt: "What principle underlies the right to force a partition?",
            options: ["Nobody should be trapped in a co-ownership", "That land should be consolidated into the largest economically viable units", "That a court must periodically confirm the accuracy of the county's title records", "That co-owners who do not farm the land forfeit their interests over time"],
            correctIndex: 0,
            explanation: "The right lets a co-owner exit, which is sensible in most settings and becomes a mechanism when the parcel is held by dozens of relatives.",
            sourceLessonSlug: "the-partition-sale",
          },
          {
            prompt: "What is partition in kind?",
            options: ["Physical division of the land among the co-tenants", "Sale of the parcel with the proceeds divided by fractional share", "Transfer of the whole parcel to the co-tenant who has farmed it longest", "Conversion of the co-tenancy into a corporation with shares matching the fractions"],
            correctIndex: 0,
            explanation: "Partition in kind divides the land physically so each co-tenant takes a defined piece.",
            sourceLessonSlug: "the-partition-sale",
          },
          {
            prompt: "Why does partition by sale usually win for farmland under traditional law?",
            options: ["The divided pieces are often worth less in total", "Because most state statutes forbid dividing agricultural land into parcels of any size", "Because a sale is the only remedy a court may order once an outside investor is a co-tenant", "Because federal farm programme rules require a single owner of record for each farm"],
            correctIndex: 0,
            explanation: "A court told to maximise value orders the sale when dividing a farm into many pieces would destroy value.",
            sourceLessonSlug: "the-partition-sale",
          },
          {
            prompt: "How does a speculator typically acquire standing to force a partition?",
            options: ["By buying a small fractional interest", "By purchasing the county's tax lien on the parcel at the annual delinquency sale", "By recording an adverse possession claim after seven years of uncontested use", "By obtaining a court order declaring the existing co-tenancy invalid for want of probate"],
            correctIndex: 0,
            explanation: "The Uniform Law Commission describes speculators acquiring a small share in order to file a partition action and force a sale.",
            sourceLessonSlug: "the-partition-sale",
          },
          {
            prompt: "Why is a fractional interest cheap to buy?",
            options: ["It cannot be sold or used on its own", "Because state law caps the price of any interest smaller than one tenth of a parcel", "Because the county assesses fractional interests at a reduced rate for tax purposes", "Because a fractional owner has no right to possess or use any part of the property"],
            correctIndex: 0,
            explanation: "An undivided share in land the buyer cannot occupy alone or resell easily fetches little, which is what makes the partition action profitable.",
            sourceLessonSlug: "the-partition-sale",
          },
          {
            prompt: "Where does the investor's return come from in a traditional forced sale?",
            options: ["The gap between the fractional price and the whole parcel's value", "A commission paid by the court from the proceeds of the auction", "A statutory finder's fee for identifying unrecorded co-tenants of record", "The rents collected from the family during the pendency of the action"],
            correctIndex: 0,
            explanation: "The fraction is priced as a fraction while the partition action reaches the entirety, and the difference is the profit.",
            sourceLessonSlug: "the-partition-sale",
          },
          {
            prompt: "Why does the timetable of a forced sale disadvantage the family?",
            options: ["It runs on the court's schedule", "Because state law requires a sale to close within thirty days of the petition", "Because relatives must all be present in the courthouse on the day of the hearing", "Because the family must post a bond equal to the appraised value before objecting"],
            correctIndex: 0,
            explanation: "Scattered relatives, some located only by publication, are asked to organise money against a deadline they did not set.",
            sourceLessonSlug: "the-partition-sale",
          },
          {
            prompt: "What is the practical problem with notice by publication?",
            options: ["It reaches almost nobody who moved away", "It is prohibited in partition actions by the law of most states", "It costs more than the fractional interest the investor purchased", "It must be repeated weekly for a year before a sale may proceed"],
            correctIndex: 0,
            explanation: "An advertisement in a county newspaper satisfies a court and does not find a co-tenant who left in 1948.",
            sourceLessonSlug: "the-partition-sale",
          },
          {
            prompt: "How do credit exclusion and title loss reinforce each other?",
            options: ["Undocumented control blocks credit, and thin capital forces sales", "Credit denials are recorded as liens, which cloud the title in the county records", "A federal loan denial automatically triggers a partition action by the Secretary", "Title loss disqualifies the family from applying for credit for a period of ten years"],
            correctIndex: 0,
            explanation: "Without capital a family cannot pay taxes or buy out a relative who wants cash, and a fractional interest reaches the market.",
            sourceLessonSlug: "the-partition-sale",
          },
          {
            prompt: "What is unusual about the partition mechanism compared with the rest of this course?",
            options: ["Nobody has to decide anything about the family", "It requires an affirmative finding of discrimination by a federal agency", "It operates only in states that have adopted the uniform act on heirs property", "It applies exclusively to land acquired through federal homestead or land-grant programmes"],
            correctIndex: 0,
            explanation: "No committee votes and no application is refused; ordinary property law plus one purchased fraction is enough.",
            sourceLessonSlug: "the-partition-sale",
          },
          {
            prompt: "In what year did the Uniform Law Commission approve the Uniform Partition of Heirs Property Act?",
            options: ["2010", "2018, in the same year Congress created the Heirs' Property Relending Program", "1994, alongside the reorganisation that created the Farm Service Agency", "1999, the year the Pigford consent decree received the court's approval"],
            correctIndex: 0,
            explanation: "The act was approved and recommended for enactment in all the states at the Commission's annual meeting in July 2010.",
            sourceLessonSlug: "the-uniform-act-and-the-farm-number",
          },
          {
            prompt: "When does a uniform act become law in a given state?",
            options: ["When that state's legislature enacts it", "As soon as the Uniform Law Commission approves and publishes it", "When a federal statute references it in a preference or eligibility provision", "When a majority of the states have adopted it, at which point it binds the rest"],
            correctIndex: 0,
            explanation: "A model act has no force anywhere until a legislature passes it, which is why the answer differs from state to state.",
            sourceLessonSlug: "the-uniform-act-and-the-farm-number",
          },
          {
            prompt: "Does the uniform act abolish the right to force a partition?",
            options: ["No", "Yes, for any parcel meeting the statutory definition of heirs property", "Yes, unless the petitioning co-tenant inherited rather than purchased the interest", "Yes, for ten years following the death of the last co-tenant to hold record title"],
            correctIndex: 0,
            explanation: "A co-tenant may still exit and a purchaser is still a co-tenant; what changes is the procedure between petition and sale.",
            sourceLessonSlug: "the-uniform-act-and-the-farm-number",
          },
          {
            prompt: "What are the four protections the Uniform Law Commission names?",
            options: ["Notice, appraisal, right of first refusal, supervised sale", "Probate, survey, mediation, and a statutory right of redemption after any sale", "Registration, insurance, arbitration, and a right of appeal to the state supreme court", "Taxation, valuation, consolidation, and a preference for the largest fractional holder"],
            correctIndex: 0,
            explanation: "The Commission lists notice, appraisal, right of first refusal, and a commercially reasonable court-supervised sale if a sale is required.",
            sourceLessonSlug: "the-uniform-act-and-the-farm-number",
          },
          {
            prompt: "What does the act's notice provision require a plaintiff to do?",
            options: ["Post a conspicuous sign on the property", "Send certified letters to every co-tenant of record at their last known address", "Publish the notice in a newspaper of general circulation in every adjoining county", "File a sworn list of all known heirs with the state department of agriculture"],
            correctIndex: 0,
            explanation: "Where notice by publication is sought and the court finds the property may be heirs property, a sign must be posted within ten days naming the court and the action.",
            sourceLessonSlug: "the-uniform-act-and-the-farm-number",
          },
          {
            prompt: "Why does posting a sign on the land matter more than a newspaper advertisement?",
            options: ["It reaches the person actually farming", "Because a sign satisfies constitutional due process while publication does not", "Because state law charges the plaintiff for publication but not for posting", "Because the sign must remain in place until the litigation is finally concluded"],
            correctIndex: 0,
            explanation: "The person working the land sees a sign in the field; a legal advertisement in a county paper reaches almost nobody.",
            sourceLessonSlug: "the-uniform-act-and-the-farm-number",
          },
          {
            prompt: "Who performs the appraisal the act requires?",
            options: ["A disinterested licensed real estate appraiser", "The county assessor, using the valuation already on the property tax rolls", "A panel of three co-tenants chosen by lot from among the non-selling owners", "The broker who will conduct the open-market sale if one becomes necessary"],
            correctIndex: 0,
            explanation: "The court appoints a disinterested real estate appraiser licensed in the state to determine fair market value.",
            sourceLessonSlug: "the-uniform-act-and-the-farm-number",
          },
          {
            prompt: "On what basis must the appraiser value the property?",
            options: ["Assuming sole ownership of the fee simple estate", "At the price a fractional interest would fetch from a willing buyer in an arms-length sale", "At the county's assessed value for property tax purposes in the current year", "At the highest price offered at any auction conducted within the preceding twelve months"],
            correctIndex: 0,
            explanation: "That clause forbids the fractional-interest discount, which is what made speculative buyouts profitable.",
            sourceLessonSlug: "the-uniform-act-and-the-farm-number",
          },
          {
            prompt: "How long do parties have to object to the appraised value?",
            options: ["Thirty days", "Ten days, matching the deadline for posting the sign on the property", "Forty-five days, matching the period allowed for electing to buy out an interest", "Sixty days, matching the minimum period allowed for paying the purchase price"],
            correctIndex: 0,
            explanation: "Parties receive notice of the appraised value and thirty days to object, and the court holds a valuation hearing regardless.",
            sourceLessonSlug: "the-uniform-act-and-the-farm-number",
          },
          {
            prompt: "Who may exercise the act's right of first refusal?",
            options: ["Any co-tenant who did not request a sale", "Any person who has farmed the land for at least five consecutive years", "Only a co-tenant holding a majority of the undivided interests in the parcel", "Any relative of a co-tenant, whether or not they hold an interest themselves"],
            correctIndex: 0,
            explanation: "The act lets any co-tenant except one that requested partition by sale buy all the interests of those who did.",
            sourceLessonSlug: "the-uniform-act-and-the-farm-number",
          },
          {
            prompt: "How is the buyout price determined under the act?",
            options: ["By formula from the appraised value", "By negotiation between the selling and the buying co-tenants under court supervision", "By competitive bidding among the co-tenants over a period of forty-five days", "By the price the selling co-tenant originally paid, plus interest at the statutory rate"],
            correctIndex: 0,
            explanation: "The price is the appraised value of the whole parcel multiplied by the fractional ownership being bought.",
            sourceLessonSlug: "the-uniform-act-and-the-farm-number",
          },
          {
            prompt: "How long does a co-tenant have to elect to buy out an interest?",
            options: ["Forty-five days", "Thirty days, matching the period allowed for objecting to the appraisal", "Ten days, matching the deadline for posting notice on the property itself", "Ninety days, running from the date the court first enters the partition order"],
            correctIndex: 0,
            explanation: "Electing co-tenants have forty-five days to decide, and at least sixty days after that to pay.",
            sourceLessonSlug: "the-uniform-act-and-the-farm-number",
          },
          {
            prompt: "What happens if several co-tenants elect to buy the same interests?",
            options: ["The court allocates among them pro rata", "The first to file with the clerk takes the whole of the offered interest", "The election fails and the court proceeds directly to an open-market sale", "The co-tenant with the largest existing interest is preferred over the others"],
            correctIndex: 0,
            explanation: "The act directs a pro rata allocation among the electing co-tenants.",
            sourceLessonSlug: "the-uniform-act-and-the-farm-number",
          },
          {
            prompt: "What does the act direct a court to order unless prejudice is shown?",
            options: ["Partition in kind", "Partition by sale, since farmland is rarely capable of physical division", "An immediate open-market sale conducted by a licensed broker", "Dismissal of the petition where any co-tenant objects to the partition"],
            correctIndex: 0,
            explanation: "The court shall order partition in kind unless it finds that doing so would prejudice the co-tenants as a group.",
            sourceLessonSlug: "the-uniform-act-and-the-farm-number",
          },
          {
            prompt: "Prejudice under the act is measured against whom?",
            options: ["The co-tenants as a group", "The co-tenant who filed the petition for partition by sale", "The county's tax base and the surrounding agricultural community", "The creditors holding recorded liens against any co-tenant's interest"],
            correctIndex: 0,
            explanation: "The standard asks whether partition in kind would prejudice the co-tenants as a group, not any one of them.",
            sourceLessonSlug: "the-uniform-act-and-the-farm-number",
          },
          {
            prompt: "Which factor does the act direct the court to weigh in deciding how to partition?",
            options: ["Collective duration of ownership by relatives", "The number of years since the property was last transferred by recorded deed", "The petitioning co-tenant's stated intention to farm rather than resell the land", "The value of comparable parcels sold at auction in the county in the past year"],
            correctIndex: 0,
            explanation: "The act names evidence of the collective duration of ownership or possession by a co-tenant and predecessors in title who are or were relatives.",
            sourceLessonSlug: "the-uniform-act-and-the-farm-number",
          },
          {
            prompt: "May a court treat any single factor as decisive?",
            options: ["No", "Yes, the collective duration of family ownership always controls the outcome", "Yes, the appraised value controls whenever it exceeds the county median", "Yes, the wishes of the co-tenant holding the largest interest control"],
            correctIndex: 0,
            explanation: "The act forbids treating any one factor as dispositive without weighing the totality of relevant factors and circumstances.",
            sourceLessonSlug: "the-uniform-act-and-the-farm-number",
          },
          {
            prompt: "If a sale is unavoidable, what kind of sale does the act require?",
            options: ["An open-market sale through a broker", "A sealed-bid auction conducted by the clerk of the court within thirty days", "A public auction on the courthouse steps, advertised for three consecutive weeks", "A private sale to the highest-bidding co-tenant at the appraised value"],
            correctIndex: 0,
            explanation: "The act requires a commercially reasonable open-market sale under court supervision rather than a courthouse auction.",
            sourceLessonSlug: "the-uniform-act-and-the-farm-number",
          },
          {
            prompt: "Which is one of the three conditions defining heirs property under the act?",
            options: ["No written agreement governs partition", "Every co-tenant must reside within the county in which the land is situated", "The land must have been continuously farmed for at least twenty-five years", "At least one co-tenant must hold a majority of the undivided interests"],
            correctIndex: 0,
            explanation: "The definition requires that no written agreement binding all co-tenants governs partition, that one acquired title from a relative, and a twenty per cent threshold.",
            sourceLessonSlug: "the-uniform-act-and-the-farm-number",
          },
          {
            prompt: "What is the twenty per cent threshold in the act's definition?",
            options: ["Interests or co-tenants who are relatives", "The share of the land that must be under active cultivation at the time of filing", "The maximum share an outside investor may hold before the act ceases to apply", "The minimum share a petitioning co-tenant must hold to seek partition by sale"],
            correctIndex: 0,
            explanation: "Twenty per cent of the interests held by relatives, twenty per cent held by one person who acquired title from a relative, or twenty per cent of the co-tenants being relatives will each satisfy it.",
            sourceLessonSlug: "the-uniform-act-and-the-farm-number",
          },
          {
            prompt: "What happens if a parcel fails one of the act's definitional conditions?",
            options: ["Ordinary state partition law applies", "The court must dismiss the petition and leave the co-tenancy undisturbed", "The federal relending programme becomes the exclusive remedy for the co-tenants", "The uniform act still applies but without the right of first refusal"],
            correctIndex: 0,
            explanation: "The protections attach only to property meeting the definition; otherwise the state's general partition law governs.",
            sourceLessonSlug: "the-uniform-act-and-the-farm-number",
          },
          {
            prompt: "What did section 5104 of the 2018 farm bill create?",
            options: ["A relending programme through intermediaries", "A direct federal grant to families holding land in common without a written agreement", "A national registry of heirs property maintained by the Farm Service Agency", "A requirement that every state adopt the uniform act within five years"],
            correctIndex: 0,
            explanation: "Codified at 7 U.S.C. § 1936c, it lends to intermediaries who relend for projects helping heirs resolve ownership and succession on farmland.",
            sourceLessonSlug: "the-uniform-act-and-the-farm-number",
          },
          {
            prompt: "To whom does the uniform-act preference in section 5104 run?",
            options: ["The intermediary lender's state", "The individual borrower's state of residence at the time of application", "The state in which the land subject to the partition action is physically located", "Any state that has adopted a substantially similar statute, whether or not the act itself"],
            correctIndex: 0,
            explanation: "The preference is given to eligible entities in states that have adopted the act, and an eligible entity is the intermediary that relends.",
            sourceLessonSlug: "the-uniform-act-and-the-farm-number",
          },
          {
            prompt: "What is the other preference criterion in section 5104?",
            options: ["Ten years serving socially disadvantaged farmers", "Certification as a community development financial institution by the Treasury", "A minimum loan portfolio of ten million dollars in agricultural credit", "Written endorsement by the county committee in each county the lender serves"],
            correctIndex: 0,
            explanation: "The Secretary shall give preference to entities with not less than ten years of experience serving socially disadvantaged farmers and ranchers.",
            sourceLessonSlug: "the-uniform-act-and-the-farm-number",
          },
          {
            prompt: "Is adopting the uniform act a condition of federal eligibility for anything?",
            options: ["No", "Yes, a farm number cannot be issued in a state that has not adopted it", "Yes, the relending programme is unavailable to borrowers in non-adopting states", "Yes, disaster payments on heirs property require an adopting state's court order"],
            correctIndex: 0,
            explanation: "Adoption unlocks two extra documentation routes and one lender preference; the other routes remain open in every state.",
            sourceLessonSlug: "the-uniform-act-and-the-farm-number",
          },
          {
            prompt: "In an adopting state, which extra documentation becomes available for a farm number?",
            options: ["A court order or a recorder's certification", "An affidavit from the county committee attesting to the operator's control", "A statement from the state department of agriculture confirming family ownership", "A certified copy of the decedent's death certificate and the intestacy schedule"],
            correctIndex: 0,
            explanation: "Section 12615 accepts a court order verifying the land meets the act's definition, or a recorder's certification that the recorded owner is deceased and an heir has begun retitling.",
            sourceLessonSlug: "the-uniform-act-and-the-farm-number",
          },
          {
            prompt: "Why does this course refuse to print a current count of adopting states?",
            options: ["The published counts disagree and count different things", "Because the Uniform Law Commission has never published any enactment data at all", "Because federal law prohibits reproducing state adoption records without permission", "Because the count changes weekly during every state legislative session"],
            correctIndex: 0,
            explanation: "The Commission's map sits in a dashboard this course could not read, and secondary counts differ, some including states that extended similar protections to all partition actions.",
            sourceLessonSlug: "the-uniform-act-and-the-farm-number",
          },
          {
            prompt: "What should a learner do about the adoption question instead?",
            options: ["Check the Commission and their own state code, noting the date", "Rely on the most recent figure that appears in a national news report", "Assume adoption, since a majority of states have enacted most uniform acts", "Ask the county committee, which certifies state law for programme purposes"],
            correctIndex: 0,
            explanation: "A count is only reliable with the date it was read and a check against the state's own code, which is the general rule for any value another body owns.",
            sourceLessonSlug: "the-uniform-act-and-the-farm-number",
          },
          {
            prompt: "Why is heirs property a state civics subject as much as a federal one?",
            options: ["Partition law is state law", "Because the federal government delegates title determinations to the county committees", "Because the uniform act applies only in states without a federal land-grant institution", "Because federal programmes are administered by state rather than county offices"],
            correctIndex: 0,
            explanation: "Intestate succession and partition are governed by each state's own code, so the outcome depends on which state the land sits in.",
            sourceLessonSlug: "the-uniform-act-and-the-farm-number",
          },
          {
            prompt: "Which best describes what the uniform act changes?",
            options: ["The procedure between petition and sale", "The right of a co-tenant to exit a co-ownership at all", "The rules for who inherits when a landowner dies without a will", "The federal eligibility standards for farm ownership and operating loans"],
            correctIndex: 0,
            explanation: "The act leaves the right to partition intact and inserts notice, appraisal, buyout and sale-method protections into the process.",
            sourceLessonSlug: "the-uniform-act-and-the-farm-number",
          },
          {
            prompt: "How long do electing co-tenants have to pay after the court sets the price?",
            options: ["At least sixty days", "Ten days, since the court must close the buyout before any sale may be ordered", "Thirty days, matching the objection period that followed the appraisal", "Six months, to allow time to arrange financing through a federal lender"],
            correctIndex: 0,
            explanation: "The act gives electing co-tenants at least sixty days to pay the allocated purchase price.",
            sourceLessonSlug: "the-uniform-act-and-the-farm-number",
          },
          {
            prompt: "Which is the correct relationship between the appraisal rule and the speculator's business model?",
            options: ["The rule removes the discount the model depends on", "The rule raises the price the family must pay to keep the land", "The rule bars any outside investor from acquiring a fractional interest", "The rule requires the investor to hold the interest for five years before petitioning"],
            correctIndex: 0,
            explanation: "Valuing the parcel as if solely owned means the fraction is priced at its true proportion of the whole rather than at a distressed fractional price.",
            sourceLessonSlug: "the-uniform-act-and-the-farm-number",
          },
          {
            prompt: "What is the practical effect of the right of first refusal on the family?",
            options: ["First claim on the investor's interest at a court-set price", "A veto over any partition petition filed by a purchaser of a fractional interest", "A right to remain in possession for ten years after any sale is completed", "A statutory loan from the federal government to fund the purchase"],
            correctIndex: 0,
            explanation: "The non-selling co-tenants may buy out those who asked for a sale, at the appraised value times the fractional interest.",
            sourceLessonSlug: "the-uniform-act-and-the-farm-number",
          },
          {
            prompt: "Which of these is NOT one of the act's four named protections?",
            options: ["A cap on the size of any single co-tenant's interest", "Notice to co-tenants when a partition action has commenced", "An appraisal of the property's fair market value by a licensed appraiser", "A right of first refusal for co-tenants who did not seek a sale"],
            correctIndex: 0,
            explanation: "The four are notice, appraisal, right of first refusal and a commercially reasonable supervised sale.",
            sourceLessonSlug: "the-uniform-act-and-the-farm-number",
          },
          {
            prompt: "What does the phrase heirs property most precisely describe?",
            options: ["Land held by co-tenants who inherited it without a written agreement", "Any farmland whose owner of record has been deceased for more than one year", "Property acquired under a federal homestead or land-grant programme before 1900", "Land held in trust by a state agency pending identification of the rightful heirs"],
            correctIndex: 0,
            explanation: "The act's definition turns on inheritance from a relative, the absence of a governing written agreement, and a twenty per cent family threshold.",
            sourceLessonSlug: "the-uniform-act-and-the-farm-number",
          },
          {
            prompt: "Which of these correctly pairs a farm bill section with what it created?",
            options: ["Section 5104, the relending programme", "Section 12615, the preference for lenders in states adopting the uniform act", "Section 5104, the list of documents establishing eligibility for a farm number", "Section 12615, the requirement that courts appoint a disinterested appraiser"],
            correctIndex: 0,
            explanation: "Section 5104 created the relending programme at 7 U.S.C. § 1936c; section 12615 created the farm-number documentation list at 7 U.S.C. § 6622b.",
            sourceLessonSlug: "the-uniform-act-and-the-farm-number",
          },
          {
            prompt: "What is the significance of the act's ten-day sign-posting deadline?",
            options: ["It runs from the court's finding that the land may be heirs property", "It gives the family ten days to file an objection to the partition petition", "It requires the sign to be removed within ten days of the sale closing", "It bars any hearing until ten days after the petition has been filed"],
            correctIndex: 0,
            explanation: "The plaintiff must post within ten days after the court determines the property may be heirs property, where notice by publication is sought.",
            sourceLessonSlug: "the-uniform-act-and-the-farm-number",
          },
          {
            prompt: "How does a valuation hearing work under the act when nobody objects?",
            options: ["The court holds one anyway", "The appraised value becomes final without any further proceeding", "The parties must jointly stipulate to the value before the case proceeds", "The court appoints a second appraiser to confirm the first appraisal"],
            correctIndex: 0,
            explanation: "The act directs the court to hold a valuation hearing regardless of whether any party objects to the appraised value.",
            sourceLessonSlug: "the-uniform-act-and-the-farm-number",
          },
          {
            prompt: "Which is a fair summary of the act's overall design?",
            options: ["It slows the process down and prices the land honestly", "It transfers title to whichever co-tenant has farmed the land the longest", "It converts every family co-tenancy into a corporation with transferable shares", "It removes partition actions from state courts and assigns them to a federal forum"],
            correctIndex: 0,
            explanation: "Notice, an undiscounted appraisal, a buyout window and an open-market sale together remove the speed and the price gap the traditional process supplied.",
            sourceLessonSlug: "the-uniform-act-and-the-farm-number",
          },
          {
            prompt: "Which statement about the relending programme is accurate?",
            options: ["USDA lends to intermediaries who relend to families", "USDA lends directly to individual heirs to buy out their relatives' interests", "USDA guarantees commercial loans made to purchasers of fractional interests", "USDA acquires the disputed parcels and leases them back to the operating family"],
            correctIndex: 0,
            explanation: "The statute authorises loans to intermediaries such as cooperatives, credit unions and certified nonprofits, who then relend.",
            sourceLessonSlug: "the-uniform-act-and-the-farm-number",
          },
          {
            prompt: "What kinds of entities are eligible intermediaries under the relending programme?",
            options: ["Cooperatives, credit unions and certified nonprofits", "State departments of agriculture and land-grant university extension services", "Commercial banks holding at least fifty million dollars in agricultural loans", "County committees acting through their county executive directors"],
            correctIndex: 0,
            explanation: "The statute names cooperatives, credit unions and community development financial institution certified nonprofits as eligible intermediaries.",
            sourceLessonSlug: "the-uniform-act-and-the-farm-number",
          },
          {
            prompt: "Why does this section belong in a course about federal farm programmes?",
            options: ["Title determines access to every programme in it", "Because federal law governs how land passes when an owner dies intestate", "Because partition actions are heard by the same county committees that decide loans", "Because the Farm Service Agency is a party to every heirs property partition"],
            correctIndex: 0,
            explanation: "A programme delivered to a farm requires a documented operator, and a fragmented title is what prevents that document from existing.",
            sourceLessonSlug: "land-that-passes-without-a-will",
          },
          {
            prompt: "Which loss described in this course happens without anybody deciding anything?",
            options: ["Loss of land through a forced partition sale", "Denial of an operating loan for lack of sufficient security", "Refusal of an emergency loan for want of an area designation", "Failure to receive a price support payment after a missed signup window"],
            correctIndex: 0,
            explanation: "The partition mechanism runs entirely on ordinary property law, so no committee, officer or application is involved at all.",
            sourceLessonSlug: "the-partition-sale",
          },
          {
            prompt: "What does an undivided interest prevent a co-tenant from doing?",
            options: ["Pointing at part of the land and calling it theirs alone", "Selling their share to anyone outside the family without court approval", "Occupying or farming the property without the consent of the others", "Passing their interest to their own heirs on their death"],
            correctIndex: 0,
            explanation: "Each co-tenant owns a fraction of the whole and has a right to possess all of it, which is why physical division requires a partition.",
            sourceLessonSlug: "land-that-passes-without-a-will",
          },
          {
            prompt: "Which of these is the most accurate statement about probate and heirs property?",
            options: ["Skipping probate is what leaves the title undocumented", "Probate is unavailable to co-tenants holding undivided interests in farmland", "Probate transfers title automatically to the co-tenant who farms the land", "Probate is required before a farm number may be issued in any state"],
            correctIndex: 0,
            explanation: "Land that passes generation after generation without probate leaves ownership real but unrecorded, which is the condition the documentation list addresses.",
            sourceLessonSlug: "land-that-passes-without-a-will",
          },
          {
            prompt: "How many statutory routes to a farm number does section 12615 provide?",
            options: ["Five categories, one of which is open-ended", "Exactly two, both available only in states adopting the uniform act", "Three, all of which require a court order or a recorded instrument", "One, a self-certification made under penalty of perjury"],
            correctIndex: 0,
            explanation: "The list runs from a court order or recorder's certification through a tenancy-in-common agreement, tax returns and self-certification to any other documentation the Secretary identifies.",
            sourceLessonSlug: "land-that-passes-without-a-will",
          },
          {
            prompt: "What is the honest way to describe the relationship between race and heirs property?",
            options: ["The instrument is general and the exposure was not", "Heirs property is a category defined by the race of the co-tenants", "Race is irrelevant, since intestacy operates identically for everyone", "The uniform act applies only to land inherited by socially disadvantaged families"],
            correctIndex: 0,
            explanation: "Intestacy and partition are general law; what differed was a combination of poor access to legal services, discouragement from probate courts and fragile state partition rules.",
            sourceLessonSlug: "land-that-passes-without-a-will",
          },
          {
            prompt: "In which populations besides Black families is heirs property well documented?",
            options: ["Appalachia, the Southwest and Native Hawaiian landholders", "Only in the eleven states of the former Confederacy", "Only among families holding land granted under the Homestead Act", "Only in counties where the Farm Service Agency has closed its office"],
            correctIndex: 0,
            explanation: "The lesson names Appalachia, the Southwest and Native Hawaiian landholders as documented examples of the same mechanism.",
            sourceLessonSlug: "land-that-passes-without-a-will",
          },
          {
            prompt: "What is the effect of a co-tenant not knowing they hold an interest?",
            options: ["They cannot object to a partition action", "Their interest lapses automatically after twenty years of non-use", "The court must appoint a guardian to represent their share at the sale", "The remaining co-tenants inherit their share by operation of law"],
            correctIndex: 0,
            explanation: "An unknowing co-tenant reached only by publication has no practical way to appear, which is what the sign-posting requirement addresses.",
            sourceLessonSlug: "the-partition-sale",
          },
          {
            prompt: "Which of the act's protections most directly addresses the courthouse auction?",
            options: ["The open-market sale requirement", "The requirement that a sign be posted on the property within ten days", "The thirty-day window for objecting to the appraiser's valuation", "The bar on treating any single statutory factor as dispositive"],
            correctIndex: 0,
            explanation: "Where a sale is unavoidable the act requires a commercially reasonable broker-conducted sale under court supervision.",
            sourceLessonSlug: "the-uniform-act-and-the-farm-number",
          },
          {
            prompt: "Why does the act require the court to weigh contributions to taxes and upkeep?",
            options: ["They show who has actually carried the property", "Because unpaid taxes automatically transfer title to the paying co-tenant", "Because the county assessor's records are the only reliable evidence of ownership", "Because the act bars any co-tenant in arrears from exercising a right of first refusal"],
            correctIndex: 0,
            explanation: "The factor list is designed to make visible the co-tenants who have maintained the land, alongside the collective duration of family ownership and current use.",
            sourceLessonSlug: "the-uniform-act-and-the-farm-number",
          },
          {
            prompt: "Which best states why the twenty per cent threshold exists?",
            options: ["It limits the act to genuinely family-held land", "It caps the interest an outside investor may acquire in a covered parcel", "It sets the minimum share required to force a partition of the whole", "It determines the proportion of proceeds that must be reinvested in farmland"],
            correctIndex: 0,
            explanation: "The threshold makes the definition turn on family holding rather than sweeping in every co-ownership that happens to include a relative.",
            sourceLessonSlug: "the-uniform-act-and-the-farm-number",
          },
          {
            prompt: "What is the relationship between Lesson 13's documentation list and Lesson 15's uniform act?",
            options: ["The list works everywhere and the act adds two routes", "The list applies only where the act has been adopted by the legislature", "The act supersedes the list wherever a state has enacted it", "The list is a federal codification of the act's own definition of heirs property"],
            correctIndex: 0,
            explanation: "Adoption unlocks the court-order and recorder-certification routes; the tenancy-in-common agreement, tax returns and self-certification are available regardless.",
            sourceLessonSlug: "the-uniform-act-and-the-farm-number",
          },
          {
            prompt: "How should a learner treat any number owned by an outside body, such as an adoption count?",
            options: ["Read it from that body and record the date", "Take the most commonly repeated figure as sufficiently reliable", "Assume it has not changed since the last authoritative publication", "Cite a secondary source, since primary bodies rarely publish current data"],
            correctIndex: 0,
            explanation: "A value another organisation owns has to be read from that organisation with the date attached, or it becomes a confident wrong number.",
            sourceLessonSlug: "the-uniform-act-and-the-farm-number",
          },
          {
            prompt: "Which sentence best captures Section 4 as a whole?",
            options: ["A family can lose land without anyone refusing it anything", "A family loses land only when a county committee denies its loan application", "Federal law now guarantees that heirs property cannot be sold without consent", "Partition sales were abolished by the 2018 farm bill in every adopting state"],
            correctIndex: 0,
            explanation: "The partition mechanism runs on general property law, and the credit gate and the title problem feed each other without any decision about the family being made.",
            sourceLessonSlug: "the-partition-sale",
          },
          {
            prompt: "In which month and year did the Uniform Law Commission approve the act?",
            options: ["July 2010", "October 2010, when the printed text carries its publication date", "December 2018, when Congress first referred to it in a farm bill", "March 2011, when the first state legislature enacted it"],
            correctIndex: 0,
            explanation: "It was approved and recommended for enactment in all the states at the Commission's annual meeting in Chicago in July 2010.",
            sourceLessonSlug: "the-uniform-act-and-the-farm-number",
          },
          {
            prompt: "What must a court do with the appraised value even when nobody objects to it?",
            options: ["Hold a valuation hearing", "Order a second appraisal by a different licensed appraiser", "Enter the value as a final judgment without further proceedings", "Refer the valuation to the co-tenants for a majority vote"],
            correctIndex: 0,
            explanation: "The act directs the court to hold the hearing regardless, which prevents an unopposed low valuation from standing unexamined.",
            sourceLessonSlug: "the-uniform-act-and-the-farm-number",
          },
          {
            prompt: "Which of the act's provisions most directly answers the unlocatable co-tenant problem?",
            options: ["The sign posted on the property", "The forty-five day window for electing to buy out an interest", "The pro rata allocation among multiple electing co-tenants", "The requirement of a commercially reasonable open-market sale"],
            correctIndex: 0,
            explanation: "The person actually working the land sees a sign in the field, which a legal advertisement in a county newspaper does not reach.",
            sourceLessonSlug: "the-uniform-act-and-the-farm-number",
          },
          {
            prompt: "Why is a fragmented co-tenancy fragile under traditional partition law?",
            options: ["Any co-tenant can reach the whole parcel", "Because a co-tenancy expires automatically after three generations", "Because unrecorded interests are void against a purchaser for value", "Because the county may sell the parcel for unpaid taxes without notice"],
            correctIndex: 0,
            explanation: "The right to force partition belongs to every co-tenant regardless of share size, and it reaches the entire parcel rather than the petitioner's fraction.",
            sourceLessonSlug: "the-partition-sale",
          },
          {
            prompt: "What does the section 12615 list allow in place of a recorded deed?",
            options: ["Documents showing control rather than title", "An affidavit of adverse possession filed with the county", "A federal court judgment quieting title in the operator", "A survey identifying the operator's exclusive acreage"],
            correctIndex: 0,
            explanation: "Tax returns, an unrecorded tenancy-in-common agreement and self-certification of control are all acceptable, which is why the list reads as a diagnosis.",
            sourceLessonSlug: "land-that-passes-without-a-will",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 5 — Pigford
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "what-pigford-claimed",
      title: "17 · What was claimed, and the half everybody forgets",
      section: "Section 5 · Pigford",
      body: `In August 1997 two suits were filed against the United States Department of Agriculture by Black farmers: **Pigford v. Glickman** and **Brewington v. Glickman** (Cowan & Feder, 2013, p. 2). They became the largest civil rights settlement in the department's history, and almost everything people repeat about them is half the story.

**Here is the claim, in the Congressional Research Service's own summary:**

> "The suit claimed that the agency had discriminated against black farmers on the basis of race and failed to investigate or properly respond to complaints from 1983 to 1997." (Cowan & Feder, 2013, p. ii)

**Read the second half.** The allegation was not only that loans were denied. It was that **the complaint machinery itself did not work**. That is a claim about the remedy rather than about the injury, and it is the reason the case could not be resolved the ordinary way. If an agency's internal civil rights process functions, a person wronged by that agency exhausts it and, failing that, goes to court on the record it produced. If the process does not function, there is no record, no exhaustion, and no ordinary route. Every unusual feature of what follows, including the low proof standard in Lesson 18, follows from that second half of the claim.

**Two class definitions circulate, and they are not the same.** This trips up careful people, so here are both, from the same CRS report.

**The certification order, 9 October 1998:** the court certified as a class "black farmers who filed discrimination complaints against the USDA between January 1983 and February 21, 1997" (Cowan & Feder, 2013, p. 3).

**The consent decree's eligibility test**, which the parties negotiated afterwards and which is the one that actually governed who could claim:

> "an eligible recipient is an African American who (1) farmed or attempted to farm between January 1, 1981, and December 31, 1996, (2) applied to USDA for farm credit or program benefits and believes that he or she was discriminated against by the USDA on the basis of race, and (3) made a complaint against the USDA on or before July 1, 1997." (Cowan & Feder, 2013, p. 3)

**So the complaint deadline moved from 21 February to 1 July 1997**, and the decree added a farming window the certification order did not have. Both texts are real and both are quoted accurately in the wild, which is exactly how two people arguing about "the class" can both be citing the record and still disagree.

**And notice the words "or attempted to farm".** They are load-bearing, and Section 6 comes back to them. A person who applied for a farm ownership loan, was refused, and therefore never farmed is inside this class. That person was never counted as a farmer by anybody, because they never got to be one. Any argument that compares the number of claimants against a census count of farms has to deal with that phrase before it means anything.

**The decree was approved on 14 April 1999 by Judge Paul L. Friedman** of the United States District Court for the District of Columbia, and the reported decision is *Pigford v. Glickman*, 185 F.R.D. 82 (D.D.C. 1999) (Cowan & Feder, 2013, p. ii, n. 1). CRS prints the docket as No. 97-1978, with Brewington as No. 98-1693.

**Why this belongs in this course rather than in a legal-history course.** Everything in Sections 1 to 4 describes a machine: a lender of last resort, a local committee, a title requirement, a calendar. Pigford is what happens when somebody finally puts that machine on trial, and the trial's own design tells you what the participants believed they could prove. Keep the machine in view while you read the settlement.

:::reveal What two things did the Pigford suit allege? ||| Racial discrimination in USDA programmes, and a failure to investigate or properly respond to complaints, from 1983 to 1997.

:::reveal Why does the second allegation change what remedy was possible? ||| Because a complaint process that did not function leaves no record to exhaust and no ordinary route to court, which is why the settlement had to build its own claims machinery.

:::reveal What does the phrase "or attempted to farm" do to the class? ||| It includes people who were refused credit and therefore never farmed, so the class is larger than any count of actual farms.

## Vocabulary
- **Consent decree**: a settlement entered as a court order, so its terms are enforceable by the court rather than resting on the parties' good faith.
- **Class certification**: the court's ruling that a group sharing common questions may sue as one, which fixes who is inside the case before any settlement is negotiated.
- **Exhaustion**: the ordinary requirement that a person use an agency's internal process before going to court, which presupposes that the internal process works.
- **Attempted to farm**: the consent decree's own phrase, which brings people refused credit before they could start into the class of eligible claimants.

## Sources
Cowan, T., & Feder, J. (2013, May 29). *The Pigford cases: USDA settlement of discrimination suits by Black farmers* (CRS Report No. RS20430). Congressional Research Service. https://www.everycrsreport.com/reports/RS20430.html`,
    },
    {
      slug: "track-a-and-track-b",
      title: "18 · Two tracks, and the trade written into them",
      section: "Section 5 · Pigford",
      body: `The consent decree gave a claimant a choice between two routes, and the choice is the most instructive thing in the whole settlement. **A proof standard was traded against a payment**, in both directions, on purpose.

**Track A: the lower bar, the fixed price.**

> "The most widely used option, Track A, provides a monetary settlement of $50,000 plus relief in the form of loan forgiveness and offsets of tax liability. Track A claimants had to present substantial evidence (i.e., a reasonable basis for finding that discrimination happened)" (Cowan & Feder, 2013, p. 3)

**"Substantial evidence" is a real legal standard and a low one.** CRS glosses it as a reasonable basis for finding that discrimination happened. It is not proof. It is enough material that a reasonable person could conclude it. In exchange for that low bar, the payment was fixed: fifty thousand dollars, the same for a claimant who lost forty acres and a claimant who lost four hundred.

**But Track A was not a form you signed.** The decree required four elements, and the fourth is the one that did most of the work:

> "the loan was denied, provided late, approved for a lesser amount than requested, encumbered by restrictive conditions, or USDA failed to provide appropriate loan service, and such treatment was less favorable than that accorded specifically identified, similarly situated white farmers" (Cowan & Feder, 2013, p. 4)

**"Specifically identified, similarly situated white farmers."** A claimant had to name a comparator: a particular neighbour, in a particular year, who was situated like them and treated better. That is a demanding thing to produce twenty years after the fact, and it is why the denial rate you meet in Lesson 19 is not small.

**Note also the second verb in the list: "provided late".** Section 1 said a loan that arrives after planting bought nothing. The decree agreed with Section 1. Lateness is enumerated as an injury alongside outright denial.

**Track B: the higher bar, the tailored payment.**

> "Track B claimants had to prove their claims and actual damages by a preponderance of the evidence (i.e., it is more likely than not that their claims are valid). The documentation to support such a claim and the amount of relief were reviewed by a third party arbitrator, who makes a binding decision." (Cowan & Feder, 2013, p. 4)

**Preponderance is the ordinary civil standard**: more likely than not. A Track B claimant had to prove both the discrimination and the actual damages, put the documentation in front of an arbitrator, and accept a binding result. In exchange, the payment was not capped at fifty thousand. It was whatever the arbitrator found the damages to be.

**Now read the trade in both directions, because this is where most arguments about Pigford actually live.**

- **Somebody who thinks the settlement paid too easily** is objecting to Track A: a low standard of proof, they say, invites claims that would not survive scrutiny.
- **Somebody who thinks the settlement short-changed the class** is objecting to the same trade from the other end: a farmer who lost a four-hundred-acre operation and could prove it got the same fifty thousand dollars as everyone else unless they could carry a full civil case, alone, decades later, with records the agency itself had not kept.

**Both objections are about one design decision.** You cannot have a low standard of proof and an uncapped payment in the same track without accepting a great deal of risk on the public's side; you cannot have a high standard of proof and expect a scattered, elderly, under-documented class to meet it. The decree chose to offer both and let each claimant pick. Whether that was the right call is a judgment. That it was a deliberate trade is a fact, and it is visible in four sentences of a public document.

**Who actually ran it.** The decree named institutions, not the department: **Poorman-Douglas Corporation** as facilitator, **JAMS-Endispute, Inc.** as adjudicator, **Michael Lewis of ADR Associates** as arbitrator, and **Randi Roth** as court-appointed monitor (Cowan & Feder, 2013, p. 4). A monitor reporting to the court, rather than an office reporting to the Secretary, is the structural answer to the second half of the claim in Lesson 17.

:::reveal What standard of proof did Track A require, and what did it pay? ||| Substantial evidence, meaning a reasonable basis for finding that discrimination happened, in exchange for a fixed payment of $50,000 plus loan forgiveness and tax offsets.

:::reveal What comparator did a Track A claimant have to identify? ||| A specifically identified, similarly situated white farmer who received more favourable treatment.

:::reveal Why do the two commonest criticisms of Pigford both attack the same design choice? ||| Because the trade of a low proof standard against a capped payment can be attacked either as too easy to claim or as too small for a large loss.

## Vocabulary
- **Substantial evidence**: a reasonable basis for finding that something happened, which is a lower standard than proof and the one Track A used.
- **Preponderance of the evidence**: the ordinary civil standard, meaning more likely than not, which Track B required for both liability and damages.
- **Comparator**: the specifically identified, similarly situated white farmer a Track A claimant had to name to show less favourable treatment.
- **Arbitrator**: the third party who reviewed Track B documentation and issued a binding decision on damages.
- **Court-appointed monitor**: an officer reporting to the court rather than to the agency, whose existence answers the allegation that the agency's own complaint process had failed.

## Sources
Cowan, T., & Feder, J. (2013, May 29). *The Pigford cases: USDA settlement of discrimination suits by Black farmers* (CRS Report No. RS20430). Congressional Research Service. https://www.everycrsreport.com/reports/RS20430.html`,
    },
    {
      slug: "what-was-decided-and-paid",
      title: "19 · What was decided, what was paid, and the late filers",
      section: "Section 5 · Pigford",
      body: `Now the numbers, with their date attached, because a settlement's figures change as it runs and a figure without an as-of date is a rumour.

**The cumulative figures below are as of 31 December 2011, and they come from the final Court Monitor Report published on 1 April 2012** (Cowan & Feder, 2013, p. 6).

| Measure | Figure |
| --- | --- |
| Claimants found eligible to participate | approximately 22,721 |
| Chose Track A | approximately 22,552 |
| Prevailed on Track A | approximately 15,645, which CRS gives as 69% |
| Denied on Track A | 6,906, which CRS gives as 31% |
| Chose Track B | approximately 169 |
| Prevailed or settled on Track B | approximately 104, which CRS gives as 62% |
| Claims subject to a petition for reexamination | approximately 5,848 |
| Reexaminations the Monitor directed | approximately 2,941, which CRS gives as 50% |
| Total relief, cash plus estimated tax payments plus debt relief | approximately $1.06 billion, printed as $1,058,577,198 |

**Three things to take from that table before anything else.**

**First, nearly a third of Track A claims were denied.** 6,906 people who filed under the low standard of proof did not get paid. Whatever else the process was, it was not automatic, and the comparator requirement from Lesson 18 is the likeliest reason why.

**Second, only 169 people out of more than twenty-two thousand chose Track B.** Under one per cent. That tells you how realistic the higher-proof route was for this class, decades after the events, with the agency's own records gone.

**Third, the report disagrees with itself by one claim, and this course says so rather than smoothing it.** CRS's narrative says approximately 22,552 claimants chose Track A as of 31 December 2011. CRS's own Table 1, captioned as final as of 16 February 2012, prints **22,551** Track A decisions. Two figures, one report, different as-of dates, one claim apart. It changes nothing and it is worth noticing, because a source that is off by one in a place you can check is a source you now know how to read.

**Do the arithmetic yourself, because it reconciles.** CRS's Table 1 breaks Track A relief into five lines: $770,050,000 in $50,000 cash awards, $1,656,000 in $3,000 non-credit awards, $43,715,385 in debt relief, $192,512,500 in IRS payments for Track A claimants, and $7,793,610 in IRS payments on the debt relief. Add them: **$1,015,727,495**, which is exactly the total CRS prints. The table is internally consistent and you can prove it with a calculator in two minutes.

**Then do the subtraction, which CRS does not do for you.** The overall figure is $1,058,577,198 and Track A accounts for $1,015,727,495, leaving **$42,849,703**. CRS prints no Track B total, so this residual is a computation rather than a reported figure and it may contain items the Track A table does not break out. Taken at face value and divided among the 104 prevailing Track B claimants, it averages about **$412,000 each**, which is more than eight times the Track A payment. **State it as what it is:** an inference from two published totals, not a number CRS reports, and it shows what the higher proof standard bought the people who could carry it.

**Pigford II, because thousands of people were late.** Far more people sought to claim than the decree's deadline allowed, so Congress reopened the door. **Section 14012 of the 2008 farm bill (P.L. 110-246)** let late filers petition for a determination on the merits, and the claims were consolidated as ***In re Black Farmers Discrimination Litigation***, 820 F. Supp. 2d 78 (D.D.C. 2011).

- Settlement announced **18 February 2010** by Attorney General Holder and Secretary Vilsack, at **$1.25 billion**.
- The farm bill had provided **$100 million**. The remaining **$1.15 billion** came from the **Claims Resolution Act of 2010 (P.L. 111-291)**, signed **8 December 2010**.
- Final court approval **27 October 2011**; the filing window ran **14 November 2011 to 11 May 2012**.
- Payment options mirrored the original with a higher ceiling on the harder route: fast-track payments of up to $50,000 plus debt relief, or a longer process for damages of up to **$250,000** (Cowan & Feder, 2013, p. 8). **That $250,000 belongs to Pigford II, not to Pigford I**, where the tailored Track B payment carried no such published cap.

**And the volume:** "approximately 89,000 claim forms were mailed out. Nearly 40,000 of them ultimately were filed. Of those, approximately 34,000 were deemed complete, timely, and eligible" (Cowan & Feder, 2013, p. 8). CRS's preliminary estimate was that 17,000 to 19,000 Track A claims would be positively adjudicated, "a rate of approximately 50%-56%", against 69% in the first case (Cowan & Feder, 2013, p. 9).

**Hold that gap between forms mailed and claims paid.** It is the whole subject of Lesson 21.

:::reveal As of 31 December 2011, how many Pigford I claimants were found eligible, and how many prevailed on Track A? ||| About 22,721 were eligible, and about 15,645 prevailed on Track A, which CRS gives as 69%.

:::reveal Why is the small number of Track B claimants informative? ||| Because fewer than one per cent chose the higher proof standard, which shows how unrealistic a full damages case was for this class decades after the events.

:::reveal Where did the $1.15 billion for the Pigford II settlement come from? ||| The Claims Resolution Act of 2010, P.L. 111-291, signed 8 December 2010, on top of $100 million already provided by the 2008 farm bill.

## Vocabulary
- **As-of date**: the date a cumulative figure was measured, without which a settlement statistic cannot be compared with any other.
- **Court Monitor Report**: the periodic public accounting filed by the settlement's court-appointed monitor, and the source of the cumulative Pigford I figures.
- **Petition for reexamination**: a claimant's request that the monitor direct a second look at a decision, granted in about half the cases where it was sought.
- **Late filer**: a person who missed the consent decree's deadline and therefore never received a decision on the merits, whom the 2008 farm bill allowed to petition for one.
- **Residual**: a figure obtained by subtracting one published total from another, which is an inference rather than a reported number and must be labelled as such.

## Sources
Cowan, T., & Feder, J. (2013, May 29). *The Pigford cases: USDA settlement of discrimination suits by Black farmers* (CRS Report No. RS20430). Congressional Research Service. https://www.everycrsreport.com/reports/RS20430.html`,
    },
    {
      slug: "quiz-pigford",
      title: "20 · Knowledge check: Pigford",
      section: "Section 5 · Pigford",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "In what month and year were the first two Pigford suits filed?",
            options: ["August 1997", "April 1999, the same month in which the consent decree was approved by the court", "October 1998, immediately after the district court certified the class of Black farmers", "February 1997, on the deadline that the certification order later used as its cutoff"],
            correctIndex: 0,
            explanation: "Litigation began in August 1997 with two suits, Pigford v. Glickman and Brewington v. Glickman.",
            sourceLessonSlug: "what-pigford-claimed",
          },
          {
            prompt: "What was the name of the companion case filed alongside Pigford v. Glickman?",
            options: ["Brewington v. Glickman", "In re Black Farmers Discrimination Litigation, later consolidated in the same district court", "Keepseagle v. Vilsack, brought on behalf of Native American farmers and ranchers", "Love v. Vilsack, brought on behalf of women farmers denied credit in the same period"],
            correctIndex: 0,
            explanation: "CRS names the two August 1997 suits as Pigford v. Glickman and Brewington v. Glickman.",
            sourceLessonSlug: "what-pigford-claimed",
          },
          {
            prompt: "Besides discrimination in programmes, what did the suit allege USDA had done?",
            options: ["Failed to investigate or respond to complaints", "Destroyed the loan files of every applicant denied credit in the affected period", "Refused to publish the racial composition of its county committees as the statute required", "Diverted appropriated loan funds from the counties with the largest Black farm populations"],
            correctIndex: 0,
            explanation: "CRS states the suit claimed discrimination on the basis of race and a failure to investigate or properly respond to complaints from 1983 to 1997.",
            sourceLessonSlug: "what-pigford-claimed",
          },
          {
            prompt: "Why does the complaint-process allegation change what remedy was possible?",
            options: ["There was no record to exhaust", "Because a failed complaint process automatically doubles the damages a court may award", "Because it moved the case from federal court to the Department's own administrative appeals board", "Because it required the court to appoint a special master before certifying any class"],
            correctIndex: 0,
            explanation: "Exhaustion presupposes a working internal process, so a broken one leaves no record and no ordinary route, which is why the settlement built its own claims machinery.",
            sourceLessonSlug: "what-pigford-claimed",
          },
          {
            prompt: "What period did the discrimination allegation cover?",
            options: ["1983 to 1997", "1981 to 1996, matching the farming window written into the consent decree", "1978 to 1999, running from the census the Commission on Civil Rights used to the decree", "1964 to 1997, running from the Civil Rights Act to the filing of the first complaint"],
            correctIndex: 0,
            explanation: "CRS states the failure to investigate or properly respond to complaints ran from 1983 to 1997.",
            sourceLessonSlug: "what-pigford-claimed",
          },
          {
            prompt: "On what date did the court certify the class?",
            options: ["9 October 1998", "14 April 1999, when the presiding judge approved the negotiated consent decree", "21 February 1997, the cutoff the certification order itself used for filed complaints", "18 February 2010, when the second settlement was announced by two cabinet officers"],
            correctIndex: 0,
            explanation: "CRS records the certification ruling on 9 October 1998, more than a year after filing.",
            sourceLessonSlug: "what-pigford-claimed",
          },
          {
            prompt: "The certification order's class was defined by complaints filed between which dates?",
            options: ["January 1983 and 21 February 1997", "1 January 1981 and 31 December 1996, the window the consent decree used for farming", "1 January 1983 and 1 July 1997, the deadline that governed the settlement itself", "9 October 1988 and 9 October 1998, the ten years preceding the certification ruling"],
            correctIndex: 0,
            explanation: "The order certified Black farmers who filed discrimination complaints against USDA between January 1983 and 21 February 1997.",
            sourceLessonSlug: "what-pigford-claimed",
          },
          {
            prompt: "Under the consent decree, by what date must an eligible claimant have complained to USDA?",
            options: ["1 July 1997", "21 February 1997, the same cutoff the earlier certification order had used", "31 December 1996, the end of the farming window the decree also specified", "9 October 1998, the date on which the district court certified the class"],
            correctIndex: 0,
            explanation: "The decree's third element requires a complaint made against USDA on or before 1 July 1997, which is a later date than the certification order's.",
            sourceLessonSlug: "what-pigford-claimed",
          },
          {
            prompt: "What farming window does the consent decree specify?",
            options: ["1 January 1981 to 31 December 1996", "January 1983 to 21 February 1997, matching the class certification order exactly", "1 January 1978 to 31 December 1997, spanning the two census years CRS cites", "The whole period during which the claimant held an outstanding federal farm loan"],
            correctIndex: 0,
            explanation: "An eligible recipient must have farmed or attempted to farm between 1 January 1981 and 31 December 1996.",
            sourceLessonSlug: "what-pigford-claimed",
          },
          {
            prompt: "Which phrase in the consent decree brings people who never farmed into the class?",
            options: ["Or attempted to farm", "Believes that he or she was discriminated against on the basis of race", "Applied to USDA for farm credit or program benefits during the covered period", "Made a complaint against the USDA on or before the stated deadline"],
            correctIndex: 0,
            explanation: "Someone refused credit before they could start is inside the class, which matters for any comparison against a count of farms.",
            sourceLessonSlug: "what-pigford-claimed",
          },
          {
            prompt: "Who approved the Pigford consent decree, and when?",
            options: ["Judge Paul L. Friedman, 14 April 1999", "The Secretary of Agriculture, acting under delegated settlement authority in April 1999", "A three-judge panel of the D.C. Circuit sitting on an expedited appeal in October 1998", "The Attorney General and the Secretary of Agriculture jointly, in February 2010"],
            correctIndex: 0,
            explanation: "Judge Paul L. Friedman of the U.S. District Court for the District of Columbia approved the decree on 14 April 1999.",
            sourceLessonSlug: "what-pigford-claimed",
          },
          {
            prompt: "Why do two different class definitions circulate for the same case?",
            options: ["The parties redefined the class at settlement", "Because two separate courts certified overlapping classes in different judicial districts", "Because the certification order was vacated on appeal and replaced with a narrower one", "Because CRS printed one definition and the court's own opinion printed a contradictory one"],
            correctIndex: 0,
            explanation: "The October 1998 certification order and the negotiated consent decree state the class differently, so both texts are accurate and they do not match.",
            sourceLessonSlug: "what-pigford-claimed",
          },
          {
            prompt: "Which reported decision does CRS cite for the Pigford consent decree?",
            options: ["185 F.R.D. 82 (D.D.C. 1999)", "820 F. Supp. 2d 78 (D.D.C. 2011), the decision approving the second settlement", "163 U.S. 537 (1896), the case that adopted the separate but equal doctrine", "122 Stat. 1651 (2008), the statutory provision reopening the claims for late filers"],
            correctIndex: 0,
            explanation: "Pigford v. Glickman, 185 F.R.D. 82 (D.D.C. 1999) is the reported decision CRS gives.",
            sourceLessonSlug: "what-pigford-claimed",
          },
          {
            prompt: "What did Track A pay a prevailing claimant?",
            options: ["$50,000 plus loan forgiveness and tax offsets", "The full appraised value of the land the claimant lost, as determined by an independent appraiser", "Whatever an arbitrator found the claimant's actual damages to be after reviewing documents", "A share of the total settlement fund proportional to the acreage the claimant had farmed"],
            correctIndex: 0,
            explanation: "Track A was a fixed monetary settlement of $50,000 plus loan forgiveness and offsets of tax liability.",
            sourceLessonSlug: "track-a-and-track-b",
          },
          {
            prompt: "What standard of proof did Track A require?",
            options: ["Substantial evidence", "Preponderance of the evidence, meaning that the claim is more likely than not to be valid", "Clear and convincing evidence, the intermediate standard used in civil fraud cases", "Proof beyond a reasonable doubt, the standard applied in criminal prosecutions"],
            correctIndex: 0,
            explanation: "CRS glosses substantial evidence as a reasonable basis for finding that discrimination happened, which is lower than proof.",
            sourceLessonSlug: "track-a-and-track-b",
          },
          {
            prompt: "How does CRS gloss the substantial evidence standard?",
            options: ["A reasonable basis for finding it happened", "Documentary proof sufficient to withstand cross examination by government counsel", "Testimony from at least two witnesses with personal knowledge of the events alleged", "A written finding by the agency's own civil rights office that a violation occurred"],
            correctIndex: 0,
            explanation: "The parenthetical in the report reads: a reasonable basis for finding that discrimination happened.",
            sourceLessonSlug: "track-a-and-track-b",
          },
          {
            prompt: "What comparator did a Track A claimant have to produce?",
            options: ["A specifically identified, similarly situated white farmer", "A written statement from the county committee acknowledging that the decision was wrong", "Loan records from at least three neighbouring counties showing a different approval pattern", "An expert report estimating the claimant's losses over the whole period of the class"],
            correctIndex: 0,
            explanation: "The decree required that the treatment be less favourable than that accorded specifically identified, similarly situated white farmers.",
            sourceLessonSlug: "track-a-and-track-b",
          },
          {
            prompt: "Which of these is enumerated in the decree as an injury alongside outright denial?",
            options: ["A loan provided late", "A loan repaid in full ahead of schedule at the borrower's own election", "A loan made by a commercial lender rather than directly by the department", "A loan whose interest rate exceeded the rate charged on guaranteed loans that year"],
            correctIndex: 0,
            explanation: "The decree lists denied, provided late, approved for a lesser amount, encumbered by restrictive conditions, or a failure to provide appropriate loan service.",
            sourceLessonSlug: "track-a-and-track-b",
          },
          {
            prompt: "Why does the inclusion of lateness as an injury matter to this course?",
            options: ["It matches the crop calendar", "It shows that the decree treated interest charges as the principal measure of harm", "It proves that the county committee rather than the county office caused the delays", "It made every claimant automatically eligible regardless of the outcome of their application"],
            correctIndex: 0,
            explanation: "Section 1 established that money arriving after planting buys nothing, and the decree enumerates provided late as an injury in its own right.",
            sourceLessonSlug: "track-a-and-track-b",
          },
          {
            prompt: "What standard of proof did Track B require?",
            options: ["Preponderance of the evidence", "Substantial evidence, meaning a reasonable basis for finding that discrimination happened", "Clear and convincing evidence, reviewed by a panel rather than by a single arbitrator", "An admission of liability by the department before any damages could be assessed"],
            correctIndex: 0,
            explanation: "Track B required proof of both the claim and actual damages by a preponderance, meaning more likely than not.",
            sourceLessonSlug: "track-a-and-track-b",
          },
          {
            prompt: "Who decided a Track B claim, and was the decision reviewable?",
            options: ["An arbitrator, and the decision was binding", "The court itself, subject to appeal to the District of Columbia Circuit as of right", "The court-appointed monitor, subject to reconsideration on the claimant's petition", "The Secretary of Agriculture, subject to review by the department's civil rights office"],
            correctIndex: 0,
            explanation: "A third party arbitrator reviewed the documentation and the amount of relief and made a binding decision.",
            sourceLessonSlug: "track-a-and-track-b",
          },
          {
            prompt: "What did a Track B claimant have to prove, beyond the discrimination itself?",
            options: ["Actual damages", "That the department had acted with intent rather than through indifference or error", "That no other lender in the community would have extended comparable credit", "That the claimant had exhausted the department's internal appeals before filing suit"],
            correctIndex: 0,
            explanation: "Track B required proof of the claims and of actual damages by a preponderance of the evidence.",
            sourceLessonSlug: "track-a-and-track-b",
          },
          {
            prompt: "How is the two-track design best described?",
            options: ["A proof standard traded against a payment", "A geographic split, with Track A for the South and Track B for the rest of the country", "A chronological split, with Track A for earlier complaints and Track B for later ones", "A split by loan type, with Track A for operating loans and Track B for ownership loans"],
            correctIndex: 0,
            explanation: "A low standard of proof came with a capped payment, and a high standard came with a tailored one, which is the trade every later argument turns on.",
            sourceLessonSlug: "track-a-and-track-b",
          },
          {
            prompt: "Someone who argues the settlement paid too easily is objecting to what?",
            options: ["The low proof standard on Track A", "The binding arbitration that closed off any appeal from a Track B determination", "The requirement that a claimant name a similarly situated white farmer as a comparator", "The decision to fund the second settlement through a separate appropriations act"],
            correctIndex: 0,
            explanation: "That criticism attacks the substantial evidence standard as an invitation to claims that would not survive closer scrutiny.",
            sourceLessonSlug: "track-a-and-track-b",
          },
          {
            prompt: "Someone who argues the settlement short-changed the class is objecting to what?",
            options: ["The capped Track A payment", "The absence of any comparator requirement in the Track A elements as written", "The court's decision to certify a class at all rather than try the claims individually", "The department's refusal to concede liability in the text of the consent decree"],
            correctIndex: 0,
            explanation: "A large loss and a small loss were paid the same $50,000 unless the claimant could carry a full damages case decades later.",
            sourceLessonSlug: "track-a-and-track-b",
          },
          {
            prompt: "Which organisation served as facilitator under the consent decree?",
            options: ["Poorman-Douglas Corporation", "JAMS-Endispute, Inc., which served instead as the adjudicator of Track A claims", "ADR Associates, whose Michael Lewis served as the settlement's arbitrator", "The Farm Service Agency's own civil rights office, operating under court supervision"],
            correctIndex: 0,
            explanation: "CRS names Poorman-Douglas Corporation as facilitator, JAMS-Endispute as adjudicator, Michael Lewis of ADR Associates as arbitrator and Randi Roth as monitor.",
            sourceLessonSlug: "track-a-and-track-b",
          },
          {
            prompt: "Who served as the court-appointed monitor?",
            options: ["Randi Roth", "Michael Lewis, who served instead as the arbitrator for Track B determinations", "Judge Paul L. Friedman, who retained the monitoring function personally", "The Inspector General of the Department of Agriculture, reporting to the Secretary"],
            correctIndex: 0,
            explanation: "Randi Roth was the court-appointed monitor, an officer reporting to the court rather than to the department.",
            sourceLessonSlug: "track-a-and-track-b",
          },
          {
            prompt: "Why does a court-appointed monitor answer the second half of the Pigford claim?",
            options: ["It reports to the court, not the agency", "Because a monitor may impose civil penalties on the agency for each violation found", "Because a monitor replaces the agency's own staff in making eligibility determinations", "Because a monitor's findings are admissible as evidence in any subsequent litigation"],
            correctIndex: 0,
            explanation: "The allegation was that the agency's own complaint machinery had failed, so oversight was placed outside the agency.",
            sourceLessonSlug: "track-a-and-track-b",
          },
          {
            prompt: "As of 31 December 2011, approximately how many claimants were found eligible in Pigford I?",
            options: ["22,721", "94,000, which is the number of claims and late-filing requests eventually presented", "15,645, which is instead the number who prevailed on the lower-proof track", "34,000, which is the number deemed complete and timely in the second settlement"],
            correctIndex: 0,
            explanation: "CRS reports approximately 22,721 claimants found eligible to participate in the claims process.",
            sourceLessonSlug: "what-was-decided-and-paid",
          },
          {
            prompt: "How many Pigford I claimants prevailed on Track A?",
            options: ["About 15,645", "About 22,552, which is instead the number who chose Track A rather than Track B", "About 6,906, which is instead the number of Track A claims that were denied", "About 17,000 to 19,000, which is a preliminary estimate for the second settlement"],
            correctIndex: 0,
            explanation: "CRS gives approximately 15,645 successful Track A claims, a rate of 69%.",
            sourceLessonSlug: "what-was-decided-and-paid",
          },
          {
            prompt: "What share of Track A claims were denied in Pigford I?",
            options: ["31%", "About 5%, which is the share the court monitor later directed for reexamination", "About 50%, matching the share of reexamination petitions the monitor granted", "None, because every claimant meeting the class definition received the fixed payment"],
            correctIndex: 0,
            explanation: "6,906 Track A claims were denied, which CRS gives as 31%, so the process was not automatic.",
            sourceLessonSlug: "what-was-decided-and-paid",
          },
          {
            prompt: "How many claimants chose Track B in Pigford I?",
            options: ["About 169", "About 2,941, matching the number of reexaminations the court monitor directed", "About 5,848, matching the number of petitions for reexamination that were filed", "About 22,552, which is instead the number who chose the fixed-payment route"],
            correctIndex: 0,
            explanation: "Approximately 169 claimants chose Track B, fewer than one per cent of those eligible.",
            sourceLessonSlug: "what-was-decided-and-paid",
          },
          {
            prompt: "What does the tiny Track B uptake tell you?",
            options: ["The higher proof standard was unrealistic for this class", "That most claimants preferred binding arbitration to an administrative determination", "That the department discouraged Track B filings by refusing to release loan records", "That Track B was closed to anyone who had already been denied on the other track"],
            correctIndex: 0,
            explanation: "Fewer than one per cent chose the route requiring proof of damages by a preponderance, decades after the events and with records gone.",
            sourceLessonSlug: "what-was-decided-and-paid",
          },
          {
            prompt: "What was the approximate total relief provided in Pigford I?",
            options: ["$1.06 billion", "$1.25 billion, which is instead the amount of the second settlement announced in 2010", "$1.15 billion, which is instead the sum appropriated by the Claims Resolution Act", "$2.2 billion, the figure Congress later appropriated for a race-neutral successor programme"],
            correctIndex: 0,
            explanation: "CRS prints approximately $1.06 billion, or $1,058,577,198, in cash relief, estimated tax payments and debt relief.",
            sourceLessonSlug: "what-was-decided-and-paid",
          },
          {
            prompt: "What internal inconsistency does the CRS report contain about Track A?",
            options: ["Its narrative and its table differ by one claim", "Its narrative gives a 69% success rate and its table implies a rate above ninety per cent", "Its summary names the wrong judge as the officer who approved the consent decree", "Its table omits the debt relief line from the total it prints for Track A relief"],
            correctIndex: 0,
            explanation: "The narrative gives about 22,552 choosing Track A as of 31 December 2011 and Table 1 prints 22,551 decisions as of 16 February 2012.",
            sourceLessonSlug: "what-was-decided-and-paid",
          },
          {
            prompt: "Why does this course print the one-claim discrepancy rather than pick a figure?",
            options: ["A checkable error teaches you how to read the source", "Because the discrepancy materially changes the reported success rate on Track A", "Because CRS reports are not public domain and must be quoted exactly as printed", "Because the court monitor never resolved which of the two counts was correct"],
            correctIndex: 0,
            explanation: "A source that is off by one where you can check it is a source you now know how to handle everywhere else.",
            sourceLessonSlug: "what-was-decided-and-paid",
          },
          {
            prompt: "The five lines of CRS Table 1 add to what total for Track A relief?",
            options: ["$1,015,727,495", "$1,058,577,198, which is instead the overall total for both tracks combined", "$770,050,000, which is instead the cash awards line taken on its own", "$192,512,500, which is instead the IRS payments made for Track A claimants"],
            correctIndex: 0,
            explanation: "The cash awards, non-credit awards, debt relief and two IRS lines sum exactly to the printed Track A total, so the table reconciles.",
            sourceLessonSlug: "what-was-decided-and-paid",
          },
          {
            prompt: "What does subtracting the Track A total from the overall total leave?",
            options: ["About $42.8 million", "About $770 million, the value of the fixed cash awards made under the lower standard", "About $250,000, the ceiling later placed on the higher-proof route in the second case", "Nothing, because the Track A total and the overall total are the same figure"],
            correctIndex: 0,
            explanation: "$1,058,577,198 minus $1,015,727,495 leaves $42,849,703, a residual this course computed rather than a figure CRS reports.",
            sourceLessonSlug: "what-was-decided-and-paid",
          },
          {
            prompt: "How should the roughly $412,000 average implied for prevailing Track B claimants be described?",
            options: ["An inference from two published totals", "A figure CRS reports directly in its table of settlement statistics", "The statutory maximum award available to a Track B claimant under the decree", "The amount the arbitrator awarded in the median Track B determination"],
            correctIndex: 0,
            explanation: "CRS prints no Track B total, so the average comes from a residual and may include items the Track A table does not break out.",
            sourceLessonSlug: "what-was-decided-and-paid",
          },
          {
            prompt: "What does the implied Track B average show about the two tracks?",
            options: ["The higher standard bought a much larger payment", "That the two tracks paid claimants roughly the same amount in practice", "That Track B claimants received less on average than Track A claimants did", "That the arbitrator was bound by the same $50,000 ceiling that governed Track A"],
            correctIndex: 0,
            explanation: "The residual implies an average many times the Track A payment, which is what proving actual damages was worth to those who could do it.",
            sourceLessonSlug: "what-was-decided-and-paid",
          },
          {
            prompt: "How many claims were the subject of a petition for reexamination in Pigford I?",
            options: ["About 5,848", "About 2,941, which is instead the number of reexaminations the monitor directed", "About 6,906, which is instead the number of Track A claims that were denied", "About 169, which is instead the number of claimants who chose the higher-proof track"],
            correctIndex: 0,
            explanation: "About 5,848 claims drew a petition, and the monitor directed reexamination in about 2,941 of them, which CRS gives as 50%.",
            sourceLessonSlug: "what-was-decided-and-paid",
          },
          {
            prompt: "Which statutory provision let Pigford late filers seek a determination on the merits?",
            options: ["Section 14012 of the 2008 farm bill", "Section 22007 of the Inflation Reduction Act of 2022, which funded a later programme", "Section 1005 of the American Rescue Plan Act of 2021, later repealed by Congress", "Section 227 of the 1994 reorganisation act, which abolished the FmHA county committees"],
            correctIndex: 0,
            explanation: "P.L. 110-246 section 14012 allowed late filers to petition for a merits determination, and the claims were consolidated as In re Black Farmers Discrimination Litigation.",
            sourceLessonSlug: "what-was-decided-and-paid",
          },
          {
            prompt: "Under what case name were the Pigford II claims consolidated?",
            options: ["In re Black Farmers Discrimination Litigation", "Pigford v. Glickman, refiled in the same court under the original docket number", "Brewington v. Glickman, the companion case filed alongside the original suit", "Keepseagle v. Vilsack, which resolved claims brought by Native American producers"],
            correctIndex: 0,
            explanation: "The consolidated case is reported at 820 F. Supp. 2d 78 (D.D.C. 2011).",
            sourceLessonSlug: "what-was-decided-and-paid",
          },
          {
            prompt: "What was the announced value of the Pigford II settlement?",
            options: ["$1.25 billion", "$1.06 billion, which is instead the total relief eventually provided in the first case", "$1.15 billion, which is instead the portion supplied by a later appropriations act", "$100 million, which is instead the portion the 2008 farm bill had already provided"],
            correctIndex: 0,
            explanation: "The settlement announced on 18 February 2010 was for $1.25 billion, of which $100 million came from the farm bill.",
            sourceLessonSlug: "what-was-decided-and-paid",
          },
          {
            prompt: "Which statute supplied the remaining $1.15 billion for Pigford II?",
            options: ["The Claims Resolution Act of 2010", "The Food, Conservation and Energy Act of 2008, which had already provided $100 million", "The American Rescue Plan Act of 2021, whose farm loan provision was later enjoined", "The Department of Agriculture Reorganization Act of 1994, which created the agency"],
            correctIndex: 0,
            explanation: "P.L. 111-291, signed 8 December 2010, appropriated the balance of the settlement.",
            sourceLessonSlug: "what-was-decided-and-paid",
          },
          {
            prompt: "On what date was the Claims Resolution Act of 2010 signed?",
            options: ["8 December 2010", "18 February 2010, the date the settlement itself was publicly announced", "27 October 2011, the date the court gave the settlement its final approval", "11 May 2012, the date on which the claim filing window finally closed"],
            correctIndex: 0,
            explanation: "CRS records the signature on 8 December 2010, roughly ten months after the settlement was announced.",
            sourceLessonSlug: "what-was-decided-and-paid",
          },
          {
            prompt: "Approximately how many Pigford II claim forms were mailed out?",
            options: ["89,000", "40,000, which is instead the number of forms that were ultimately filed", "34,000, which is instead the number deemed complete, timely and eligible", "22,721, which is instead the number found eligible in the first settlement"],
            correctIndex: 0,
            explanation: "About 89,000 forms were mailed, nearly 40,000 were filed, and about 34,000 were complete, timely and eligible.",
            sourceLessonSlug: "what-was-decided-and-paid",
          },
          {
            prompt: "How many Pigford II claims were deemed complete, timely and eligible?",
            options: ["About 34,000", "About 89,000, which is instead the number of claim forms that were mailed out", "About 17,000 to 19,000, which is instead the preliminary estimate of successful claims", "About 22,552, which is instead the number who chose Track A in the first settlement"],
            correctIndex: 0,
            explanation: "Nearly 40,000 forms were filed and approximately 34,000 of those were complete, timely and eligible.",
            sourceLessonSlug: "what-was-decided-and-paid",
          },
          {
            prompt: "What success rate did CRS preliminarily estimate for Pigford II Track A claims?",
            options: ["About 50% to 56%", "About 69%, the same rate the first settlement's Track A claims achieved", "About 31%, matching the denial rate recorded in the first settlement", "About 62%, matching the rate at which Track B claimants prevailed earlier"],
            correctIndex: 0,
            explanation: "CRS estimated 17,000 to 19,000 positive adjudications out of the eligible claims, a rate below the 69% achieved in Pigford I.",
            sourceLessonSlug: "what-was-decided-and-paid",
          },
          {
            prompt: "Which figure belongs to Pigford II rather than to Pigford I?",
            options: ["The $250,000 damages ceiling", "The $50,000 fixed payment available on the lower-proof track in both settlements", "The requirement to name a specifically identified, similarly situated white farmer", "The appointment of a court monitor reporting to the district court rather than the agency"],
            correctIndex: 0,
            explanation: "The longer process in Pigford II carried damages of up to $250,000; Pigford I's tailored Track B payment had no such published cap.",
            sourceLessonSlug: "what-was-decided-and-paid",
          },
          {
            prompt: "When did the Pigford II filing window run?",
            options: ["14 November 2011 to 11 May 2012", "1 January 1981 to 31 December 1996, matching the first decree's farming window", "18 February 2010 to 8 December 2010, between the announcement and the appropriation", "14 April 1999 to 1 July 1999, the ninety days following approval of the first decree"],
            correctIndex: 0,
            explanation: "Final court approval came on 27 October 2011 and the window ran from 14 November 2011 to 11 May 2012.",
            sourceLessonSlug: "what-was-decided-and-paid",
          },
          {
            prompt: "Why is an as-of date essential to every Pigford figure?",
            options: ["The cumulative totals moved while the process ran", "Because the settlement's terms were renegotiated at the end of each calendar year", "Because CRS revised its methodology between versions of the same report", "Because the court sealed the underlying data until the litigation was fully concluded"],
            correctIndex: 0,
            explanation: "A settlement's counts and totals change as claims are adjudicated, so a figure without a date cannot be compared with any other.",
            sourceLessonSlug: "what-was-decided-and-paid",
          },
          {
            prompt: "Which two cabinet-level officials announced the Pigford II settlement?",
            options: ["The Attorney General and the Secretary of Agriculture", "The Secretary of Agriculture and the Secretary of Education, as in the 1890 letters", "The Attorney General and the Secretary of the Treasury, which funded the payments", "The Secretary of Agriculture alone, with the Department of Justice declining comment"],
            correctIndex: 0,
            explanation: "CRS records the announcement by Attorney General Holder and Secretary Vilsack on 18 February 2010.",
            sourceLessonSlug: "what-was-decided-and-paid",
          },
          {
            prompt: "What is the source of the cumulative Pigford I figures CRS prints?",
            options: ["The final Court Monitor Report", "The Department of Agriculture's annual civil rights report to Congress", "The Government Accountability Office's audit of the claims administrator", "The claims administrator's sworn declaration filed with the district court in 1999"],
            correctIndex: 0,
            explanation: "CRS attributes the 31 December 2011 data to the final Court Monitor Report published on 1 April 2012.",
            sourceLessonSlug: "what-was-decided-and-paid",
          },
          {
            prompt: "Which is the correct order of events?",
            options: ["Filing, certification, decree, farm bill, second settlement", "Certification, filing, second settlement, decree, farm bill provision for late filers", "Decree, filing, certification, second settlement, appropriation of the settlement funds", "Farm bill provision, filing, certification, decree, and finally the second settlement"],
            correctIndex: 0,
            explanation: "Filed August 1997, certified October 1998, decree approved April 1999, late filers reopened by the 2008 farm bill, second settlement announced February 2010.",
            sourceLessonSlug: "what-was-decided-and-paid",
          },
          {
            prompt: "Which best describes what a claimant gave up by choosing Track A?",
            options: ["Any payment above the fixed amount", "The right to have a neutral third party review the claim at all", "The ability to include loan forgiveness or tax offsets in the relief received", "The chance to have the decision reexamined at the monitor's direction"],
            correctIndex: 0,
            explanation: "The fixed $50,000 was the same whatever the size of the loss, which is the price of the lower standard of proof.",
            sourceLessonSlug: "track-a-and-track-b",
          },
          {
            prompt: "Which best describes what a claimant took on by choosing Track B?",
            options: ["The burden of proving actual damages", "The obligation to accept whatever the department's civil rights office determined", "A waiver of any loan forgiveness that would otherwise have accompanied an award", "The requirement to identify at least three similarly situated white farmers by name"],
            correctIndex: 0,
            explanation: "Track B required proving both the claim and actual damages by a preponderance, before a binding arbitrator.",
            sourceLessonSlug: "track-a-and-track-b",
          },
          {
            prompt: "What does the 31% Track A denial rate rule out?",
            options: ["That the process paid everyone who filed", "That any claimant was required to name a comparator to obtain relief", "That the settlement's payments were funded from appropriated rather than settlement money", "That the court appointed a monitor to oversee the adjudication of claims"],
            correctIndex: 0,
            explanation: "Nearly a third of Track A claimants were denied, so a low standard of proof was not the same thing as an automatic payment.",
            sourceLessonSlug: "what-was-decided-and-paid",
          },
          {
            prompt: "Which of these is NOT something the consent decree enumerated as an injury?",
            options: ["A loan repaid early by the borrower", "A loan approved for a lesser amount than the applicant had requested", "A loan encumbered by restrictive conditions the applicant had not sought", "A failure by the department to provide appropriate loan servicing"],
            correctIndex: 0,
            explanation: "The enumerated injuries are denial, lateness, a reduced amount, restrictive conditions and a failure to service the loan.",
            sourceLessonSlug: "track-a-and-track-b",
          },
          {
            prompt: "How does the certification order's cutoff compare with the consent decree's?",
            options: ["The decree's is later", "The decree's is earlier, ending in February rather than in July of the same year", "They are identical, since the decree simply adopted the certified class unchanged", "The decree removed any complaint deadline and relied on the farming window alone"],
            correctIndex: 0,
            explanation: "Certification used 21 February 1997 and the decree used 1 July 1997, which is why both dates appear in accurate accounts.",
            sourceLessonSlug: "what-pigford-claimed",
          },
          {
            prompt: "What did the Pigford settlements require the department to concede?",
            options: ["Nothing about liability", "That every claimant within the class had been discriminated against as a matter of law", "That its county committees had violated the Equal Credit Opportunity Act in each affected year", "That its internal civil rights office had failed to process complaints for fourteen years"],
            correctIndex: 0,
            explanation: "A consent decree resolves claims without an adjudication of liability, which is why later disputes about what the settlement proved are possible at all.",
            sourceLessonSlug: "what-pigford-claimed",
          },
          {
            prompt: "Which pairing of settlement and funding source is correct?",
            options: ["Pigford II, the Claims Resolution Act of 2010", "Pigford I, the Inflation Reduction Act of 2022, which funded the earlier consent decree", "Pigford II, the 1994 reorganisation act, which had reserved money for future claims", "Pigford I, the 2008 farm bill, which appropriated the whole of the first settlement"],
            correctIndex: 0,
            explanation: "Pigford II drew $100 million from the 2008 farm bill and $1.15 billion from the Claims Resolution Act of 2010.",
            sourceLessonSlug: "what-was-decided-and-paid",
          },
          {
            prompt: "Why did Congress have to act at all for Pigford II to happen?",
            options: ["Thousands of claimants had missed the deadline", "Because the consent decree expired by its own terms ten years after approval", "Because the district court lacked jurisdiction over claims arising before 1983", "Because the first settlement had exhausted the department's litigation authority"],
            correctIndex: 0,
            explanation: "Late filers had never received a determination on the merits, and section 14012 of the 2008 farm bill let them petition for one.",
            sourceLessonSlug: "what-was-decided-and-paid",
          },
          {
            prompt: "What is the relationship between claims filed and awards made?",
            options: ["They are different numbers", "They are the same, since every filed claim produced an award under the decree", "Awards always exceed filings, because a single claim may cover several farmers", "Filings are irrelevant once the settlement's total dollar value has been fixed"],
            correctIndex: 0,
            explanation: "Nearly a third of Track A claims were denied in Pigford I, so the count of claims filed is not a count of awards made.",
            sourceLessonSlug: "what-was-decided-and-paid",
          },
          {
            prompt: "Which is the correct description of the Pigford I Track B ceiling?",
            options: ["There was no published cap", "It was fixed at $50,000, the same as the amount available on the other track", "It was fixed at $250,000, the figure that governed the second settlement", "It was fixed at the appraised value of the land the claimant had lost"],
            correctIndex: 0,
            explanation: "Pigford I's Track B paid a larger, tailored amount; the $250,000 ceiling belongs to the second settlement.",
            sourceLessonSlug: "what-was-decided-and-paid",
          },
          {
            prompt: "Why is the phrase attempted to farm relevant to counting arguments?",
            options: ["Claimants need never have appeared in any farm count", "Because it limited the class to people who filed a complaint before February 1997", "Because it required each claimant to hold a farm number issued by a county office", "Because it excluded tenants and sharecroppers who did not own the land they worked"],
            correctIndex: 0,
            explanation: "Someone refused credit before they could start was never counted as a farmer, so comparing claimants against farm counts needs that phrase handled first.",
            sourceLessonSlug: "what-pigford-claimed",
          },
          {
            prompt: "What proportion of reexamination petitions did the monitor grant?",
            options: ["About half", "All of them, since the decree made reexamination available as of right on request", "About a tenth, reflecting the narrow grounds on which reexamination was available", "None, because the monitor's authority was limited to reporting rather than directing"],
            correctIndex: 0,
            explanation: "About 5,848 claims drew a petition and the monitor directed reexamination in about 2,941, which CRS gives as 50%.",
            sourceLessonSlug: "what-was-decided-and-paid",
          },
          {
            prompt: "Which document number identifies the CRS report on the Pigford cases?",
            options: ["RS20430", "R40179, the report describing the composition and duties of Farm Service Agency committees", "IF11847, the report on the funding of the 1890 land-grant institutions", "GAO-13-69R, the audit of internal controls in the second settlement's claims process"],
            correctIndex: 0,
            explanation: "CRS Report RS20430, by Cowan and Feder, is the standing public-domain summary of both settlements.",
            sourceLessonSlug: "what-was-decided-and-paid",
          },
          {
            prompt: "Which statement about the two Pigford settlements is accurate?",
            options: ["The second had a lower estimated success rate", "The second was funded entirely by the 2008 farm bill with no further appropriation", "The second used a higher standard of proof on its fast-track option than the first did", "The second was decided by the same arbitrator who had handled the first settlement"],
            correctIndex: 0,
            explanation: "CRS estimated 50% to 56% for Pigford II Track A claims against 69% in Pigford I.",
            sourceLessonSlug: "what-was-decided-and-paid",
          },
          {
            prompt: "What is the best reason to keep the machine from Sections 1 to 4 in view while reading the settlement?",
            options: ["The decree's injuries name that machine's failure modes", "Because the settlement replaced the county committee system with a national review board", "Because the decree required every claimant to have served on a county committee", "Because the litigation suspended the credit-elsewhere test for the duration of the class period"],
            correctIndex: 0,
            explanation: "Denial, lateness, reduced amounts, restrictive conditions and poor servicing are exactly the ways a local credit gate can fail an applicant.",
            sourceLessonSlug: "track-a-and-track-b",
          },
          {
            prompt: "On what date did the court give final approval to the Pigford II settlement?",
            options: ["27 October 2011", "18 February 2010, the date the settlement was announced by two cabinet officers", "8 December 2010, the date the appropriating statute was signed into law", "14 April 1999, the date the original consent decree received the court's approval"],
            correctIndex: 0,
            explanation: "Final approval came on 27 October 2011, after which the filing window opened in November.",
            sourceLessonSlug: "what-was-decided-and-paid",
          },
          {
            prompt: "What portion of the Pigford II settlement had already been provided before the appropriation?",
            options: ["$100 million", "$1.15 billion, which is instead the portion the Claims Resolution Act supplied", "$1.25 billion, which is instead the announced value of the whole settlement", "$1.06 billion, which is instead the total relief provided in the first settlement"],
            correctIndex: 0,
            explanation: "The 2008 farm bill had provided $100 million in mandatory spending toward the eventual settlement.",
            sourceLessonSlug: "what-was-decided-and-paid",
          },
          {
            prompt: "Which line in the CRS Track A table is largest?",
            options: ["The $50,000 cash awards", "The IRS payments made on behalf of Track A claimants for their tax liability", "The debt relief provided by cancelling outstanding federal farm loan balances", "The $3,000 non-credit awards paid to claimants whose claims did not involve loans"],
            correctIndex: 0,
            explanation: "The cash awards line is $770,050,000, far larger than the $192,512,500 in IRS payments or the $43,715,385 in debt relief.",
            sourceLessonSlug: "what-was-decided-and-paid",
          },
          {
            prompt: "What did the $3,000 line in the Track A table cover?",
            options: ["Non-credit awards", "The administrative fee charged to each claimant by the settlement facilitator", "The cost of obtaining certified copies of loan records from the county office", "The interest accrued on payments delayed beyond the decree's own deadline"],
            correctIndex: 0,
            explanation: "CRS's table records $1,656,000 in $3,000 non-credit awards alongside the larger $50,000 cash award line.",
            sourceLessonSlug: "what-was-decided-and-paid",
          },
          {
            prompt: "Why did the decree place tax payments inside the relief rather than leaving them to claimants?",
            options: ["The award itself created a tax liability", "Because the Internal Revenue Service was a named party to the consent decree", "Because claimants were barred by statute from filing returns during the class period", "Because the decree converted the payments into tax credits rather than cash awards"],
            correctIndex: 0,
            explanation: "Track A relief expressly included offsets of tax liability, and the table carries separate IRS payment lines for the awards and for the debt relief.",
            sourceLessonSlug: "what-was-decided-and-paid",
          },
          {
            prompt: "What is the honest way to describe the Pigford I Track B outcome for the 65 who did not prevail?",
            options: ["They received nothing on that route", "They were automatically transferred to the fixed-payment route and paid $50,000", "They were entitled to a rehearing before a different arbitrator on request", "They received a reduced award scaled to the strength of their documentation"],
            correctIndex: 0,
            explanation: "About 104 of about 169 Track B claimants prevailed or settled, and the arbitrator's decision was binding.",
            sourceLessonSlug: "what-was-decided-and-paid",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 6 — What came after
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-criticism-in-both-directions",
      title: "21 · The criticism, in both directions, with everyone named",
      section: "Section 6 · What came after",
      body: `Pigford is argued about, and the arguments run in opposite directions. This lesson states both, names everyone, and separates what an audit **found** from what an audit **said could happen**. That distinction is the point of the lesson and it is the most transferable skill in this course.

**The criticism from the claimants' side comes first, because it is usually left out.** CRS records contemporaneous objections from within the class: to the structure of the settlement itself, to the very large number of late filers who never got a determination, and to reported deficiencies in the representation claimants received from class counsel (Cowan & Feder, 2013). Lesson 18's trade explains the first of those: a capped payment on the low-proof track means a farmer who lost a large operation and a farmer who lost a small one were paid identically.

**Now the official audit, which is narrower than its reputation.** On **7 December 2012** the Government Accountability Office published **GAO-13-69R, *Civil Rights: Additional Actions in Pigford II Claims Process Could Reduce Risk of Improper Determinations***, a report mandated by section 201 of the Claims Resolution Act of 2010. Its central finding, verbatim:

> "In general, the internal control design provides reasonable assurance that fraudulent or otherwise invalid claims could be identified and denied; however, certain weaknesses in the control design could expose the claims process to risk of improper determinations." (GAO, 2012, p. 3)

**Read the grammar.** The design "provides reasonable assurance." The weaknesses "could expose" the process "to risk." Nothing in that sentence says fraud occurred. It says a control system had gaps through which an improper determination might pass, which is what an internal-controls audit is for and is a different exercise from investigating claims.

**GAO said so itself, in a footnote that is the single most important line in the whole dispute:**

> "Our review did not include an examination of fraud perpetrated on claimants. According to the settlement's court-appointed Ombudsman, however, all complaints of fraud his office has received pertain to fraud perpetrated on, not by, claimants." (GAO, 2012, enclosure I, n. 7)

**And GAO tested claims.** It drew a random sample of 150 from the 37,275 submitted as of 4 June 2012 and reported: "We found no exceptions in our testing of these claims", with 95 per cent confidence that the actual error rate was at or below 2 per cent (GAO, 2012, n. 21).

**One number from that report travels badly and needs its footnote attached.** GAO reports that as of 23 October 2012 the reviewers had identified about **3,180 claims with potential fraud concerns**, referred onward. GAO's own note immediately qualifies it: "some perceived patterns may not in fact be fraudulent and instead may result from appropriate circumstances. For example, similarities across claims may be attributable to a single individual assisting several claimants in completing their claim forms" (GAO, 2012, n. 15). **That is a suspicion count from a pattern check, not a finding.** If you meet it without the footnote, you have met half a fact.

**Do not confuse it with the earlier report.** **GAO-06-469R, *Pigford Settlement: The Role of the Court-Appointed Monitor***, dated 17 March 2006, is a different document about a different question: how the monitor conducted outreach and how many claims she directed for reexamination. GAO-13-69R cites it in its own footnotes.

**Now the fraud allegation, which this course would have said nothing about if it could not be traced.** The rule set before authoring began was that it appears only with a named source, in a named venue, on named evidence, with named rebuttals. All four are available, so here they are.

**The venue with the strongest record is the floor of the House of Representatives.** On **29 November 2010**, Representative **Steve King** of Iowa held a special order titled "Pigford Farms and Discrimination", printed at *Congressional Record*, vol. 156, no. 153, pp. H7635 to H7641. He described an unnamed source who "believed were a minimum of 75 percent fraudulent" and said he was "completely convinced" the matter "has far more fraud in it than it has legitimate claims" (156 Cong. Rec. H7637, H7641, 2010). Representative **Michele Bachmann** of Minnesota spoke within the same special order and said "The numbers just bespeak obvious fraud in this situation" (156 Cong. Rec. H7640, 2010). **Attribute those two speakers separately.** The passage most often quoted as King's is Bachmann's.

**The second venue is a newspaper.** **Sharon LaFraniere**, "Farm Loan Bias Claims, Often Unsupported, Cost U.S. Millions", *The New York Times*, 25 April 2013, run in print the next day under the alternate headline "Federal Spigot Flows as Farmers Claim Bias". It reported internal objections from career lawyers and agency officials, most unnamed, with **J. Michael Kelly**, USDA's retired associate general counsel, on the record.

**The evidence, sorted honestly, is of three kinds.** Unnamed private sources, for the 75 per cent figure. An arithmetic inference: roughly 94,000 claims against census counts of 18,000 to 33,000 Black farm operators. And, for the newspaper, internal documents plus interviews.

**The middle one is the checkable one, and CRS rebutted it before the article ran.** In the same report that supplies every figure in Lesson 19, CRS explains that census definitions of farm, farm operator and farm owner changed over the period, that the class reached people who "attempted to farm" and therefore were never counted, and that "the number of claims filed cannot be viewed as an accurate representation of the number of awards that have been or will be made under the two settlements" (Cowan & Feder, 2013, p. 9). Nearly a third of Track A claims in Pigford I were denied. That is the arithmetic answer to the arithmetic argument.

**The rebuttals, named.** Secretary **Tom Vilsack**, interviewed by CBS News on 30 December 2010, said that of the 17,000 to 18,000 cases adjudicated in the first settlement, only three had been found marginally questionable (Condon, 2010). **Susan A. Schneider**, professor of law and director of the agricultural and food law programme at the University of Arkansas, published a point-by-point response on 1 May 2013 noting, among other things, that 31 per cent of eligible Track A claimants were denied (Schneider, 2013). **John W. Boyd Jr.**, president of the National Black Farmers Association, and **Tony West**, then Acting Associate Attorney General, both responded publicly in May 2013 (Tinuoye, 2013).

**And here is the bottom line, stated as carefully as the record allows.** No government audit, inspector general report or prosecution that this course could locate ever found that the Pigford settlements were characterised by fraud. GAO found control weaknesses that **could permit** improper determinations, tested 150 claims and found no exceptions, explicitly did not examine claimant fraud, and recorded that the court's own Ombudsman had received fraud complaints only about fraud committed **against** claimants. This course searched for a substantiating audit or prosecution and did not find one, which is not the same sentence as "none exists", and it is the sentence the evidence supports.

:::reveal What did GAO-13-69R actually find about the Pigford II claims process? ||| That the internal control design generally provides reasonable assurance, but that certain weaknesses could expose the process to risk of improper determinations.

:::reveal Why is the figure of about 3,180 claims with potential fraud concerns not a finding of fraud? ||| Because GAO's own note says some perceived patterns may not be fraudulent, giving as an example one person helping several claimants fill in their forms.

:::reveal What did the court-appointed Ombudsman report about the fraud complaints his office received? ||| That all of them concerned fraud perpetrated on claimants rather than by them.

## Vocabulary
- **Internal control design**: the set of checks built into a process to catch invalid results, which an audit can assess without ever examining whether any particular result was wrong.
- **Risk of improper determination**: the possibility that a gap in controls lets a wrong decision through, which is a statement about a system rather than about any decision.
- **Suspicion count**: a tally of items flagged by a pattern check for further review, which becomes a finding only after adjudication.
- **Special order**: floor time reserved by a member of the House for extended remarks, printed in full in the Congressional Record.
- **Not found, as against does not exist**: the honest way to report an exhaustive but bounded search, which leaves the question open rather than closing it by assertion.

## Sources
Condon, S. (2010, December 30). *Steve King says Congress will investigate "reparations"*. CBS News. https://www.cbsnews.com/news/steve-king-says-congress-will-investigate-reparations/

Cowan, T., & Feder, J. (2013, May 29). *The Pigford cases: USDA settlement of discrimination suits by Black farmers* (CRS Report No. RS20430). Congressional Research Service. https://www.everycrsreport.com/reports/RS20430.html

LaFraniere, S. (2013, April 25). Farm loan bias claims, often unsupported, cost U.S. millions. *The New York Times*. https://www.nytimes.com/2013/04/26/us/farm-loan-bias-claims-often-unsupported-cost-us-millions.html

Pigford farms and discrimination, 156 Cong. Rec. H7635-H7641 (2010) (statements of Rep. King and Rep. Bachmann). https://www.govinfo.gov/content/pkg/CREC-2010-11-29/html/CREC-2010-11-29-pt1-PgH7635.htm

Schneider, S. A. (2013, May 1). *Discrimination at USDA: Response to New York Times*. Agricultural Law. https://aglaw.blogspot.com/2013/05/discrimination-at-usda-response-to-new.html

Tinuoye, K. (2013, May 6). *US officials, black farmers defend USDA settlement after critical New York Times story*. TheGrio. https://thegrio.com/2013/05/06/u-s-officials-black-farmers-defend-u-s-d-a-settlement/

U.S. Government Accountability Office. (2006, March 17). *Pigford settlement: The role of the court-appointed monitor* (GAO-06-469R). https://www.gao.gov/products/gao-06-469r

U.S. Government Accountability Office. (2012, December 7). *Civil rights: Additional actions in Pigford II claims process could reduce risk of improper determinations* (GAO-13-69R). https://www.gao.gov/products/gao-13-69r`,
    },
    {
      slug: "the-race-neutral-rewrite",
      title: "22 · A remedy named the class, was enjoined, and was rewritten without it",
      section: "Section 6 · What came after",
      body: `The last chapter is recent enough to date every sentence, and it is the cleanest illustration in this course of a rule that shows up everywhere: **what a statute may say about who it is for is a separate question from what it does.**

**Step one: Congress wrote a remedy that named the class.** Section 1005 of the American Rescue Plan Act of 2021 (P.L. 117-2) appropriated "such sums as may be necessary" and directed:

> "The Secretary shall provide a payment in an amount up to 120 percent of the outstanding indebtedness of each socially disadvantaged farmer or rancher as of January 1, 2021, to pay off the loan directly or to the socially disadvantaged farmer or rancher (or a combination of both)" (P.L. 117-2 § 1005)

Two details worth having right. The appropriation was open ended rather than a fixed sum, so the widely repeated "four billion dollar programme" is an estimate rather than a statutory number. And "socially disadvantaged farmer or rancher" took its meaning from **7 U.S.C. § 2279(a)**, which, like § 2003 in Lesson 2, names no race at all: it means a member of "a group whose members have been subjected to racial or ethnic prejudice because of their identity as members of a group without regard to their individual qualities" (7 U.S.C. § 2279, n.d.).

**The statute did not name races. The implementing notice did.** USDA's Notice of Funds Availability at 86 Fed. Reg. 28329 (26 May 2021) listed the qualifying groups: American Indians or Alaskan Natives, Asians, Blacks or African Americans, Native Hawaiians or other Pacific Islanders, and Hispanics or Latinos, with other groups possible case by case. **That is the seam a challenge attaches to,** and it is worth noticing that the operative racial classification lived in an agency notice rather than in the Act.

**Step two: four federal courts stopped it within a month.** Get the sequence right, because it is often told wrong.

| Date, 2021 | Court | Case | What issued |
| --- | --- | --- | --- |
| 10 June | E.D. Wis. | *Faust v. Vilsack* | A **temporary restraining order**, later dissolved on 6 July |
| 23 June | M.D. Fla. | *Wynn v. Vilsack* | The first **preliminary injunction**, and it was **nationwide** |
| 1 July | N.D. Tex. | *Miller v. Vilsack* | Class certification **and** an injunction against using race |
| 8 July | W.D. Tenn. | *Holman v. Vilsack* | A preliminary injunction |

**Faust came first but was a TRO, not an injunction**, and the same court dissolved it on 6 July because it was "no longer needed to preserve the status quo". The first preliminary injunction, and the nationwide one, was **Wynn**, reported at 545 F. Supp. 3d 1271, where Judge Marcia Morales Howard enjoined the defendants from "issuing any payments, loan assistance, or debt relief pursuant to Section 1005(a)(2)" and wrote that the court "proceeds with great caution in determining that an injunction that will have nationwide effect is warranted" and that it "has never gone so far as to issue such an injunction" (*Wynn v. Vilsack*, 2021).

***Miller* did something different and the difference matters.** Judge Reed C. O'Connor certified nationwide classes and enjoined USDA "from discriminating on account of race or ethnicity in administering section 1005", including any "criterion that is intended to serve as a proxy for race or ethnicity" (*Miller v. Vilsack*, 2021). **Wynn froze the money; Miller barred the criterion.** Those are two different remedies against the same statute.

**Step three: it was never litigated to judgment. It was repealed.** Section 22008 of the Inflation Reduction Act of 2022 (P.L. 117-169) is one sentence: "Section 1005 of the American Rescue Plan Act of 2021 (7 U.S.C. 1921 note; Public Law 117-2) is repealed." No court ever ruled finally on the merits, and the Sixth Circuit later described a thirteen-month injunction. This course found no official document reporting any § 1005 debt relief actually disbursed.

**Step four: the replacement, written without the class.** Section 22007 of the same Act rewrote a different ARPA provision, and the operative text now sits at ARPA § 1006(e):

> "there is appropriated to the Secretary of Agriculture for fiscal year 2022 ... $2,200,000,000 for a program to provide financial assistance, including the cost of any financial assistance, to farmers, ranchers, or forest landowners determined to have experienced discrimination prior to January 1, 2021, in Department of Agriculture farm lending programs, under which the amount of financial assistance provided to a recipient may be not more than $500,000" (P.L. 117-169 § 22007)

**Read who is eligible: anyone who experienced discrimination in USDA farm lending before 2021.** Not anyone of any particular race. The eligibility condition is an **experience**, not an identity. Search the provision and the words race, Black, minority and socially disadvantaged do not appear in the assistance criterion. Two nearby subsections of the same section do use the word racial, for an equity commission, and Hispanic, for Hispanic-serving institutions, so the honest formulation is that **the assistance provision is facially race neutral**, not that the section never mentions race.

**What it did.** The Discrimination Financial Assistance Program took applications from **7 July 2023 to 17 January 2024**, and USDA announced decisions on **31 July 2024**: "over 43,000 individuals", in all fifty states, the District of Columbia, Puerto Rico, the U.S. Virgin Islands and American Samoa. Over 23,000 who had a farming or ranching operation received between $10,000 and $500,000, averaging nearly $82,000; over 20,000 who "planned to have a farming or ranching operation" but reported being unable to because they could not get a USDA loan received between $3,500 and $6,000, averaging $5,000 (USDA, 2024). USDA reported about $2 billion in awards against the $2.2 billion appropriated; the statute allows the cost of delivering the assistance to be paid from the same appropriation, and this course found no document itemising the difference, so it does not print one.

**That second group of recipients is the whole course arriving at once.** Twenty thousand people who never farmed, because a loan was refused. Lesson 17's phrase "or attempted to farm" describes the same people. Section 1's credit-elsewhere test explains why the refusal was final.

**And here is the shape to carry away.** WARRANT-01 showed a benefit created, a class excluded, a separate channel built, and that channel made conditional on a payment by the party that had excluded them. **This is the same shape at the remedy end:** a remedy that named the injured class was stopped, and the remedy that survived had to describe the injury instead of the class. Whether that is a loss or a discipline is a judgment. That it is the same move, a hundred and thirty years after the 1890 Act's "equitably divided" proviso, is a fact you can check in two statutes.

:::reveal Which case issued the first nationwide preliminary injunction against ARPA section 1005, and when? ||| Wynn v. Vilsack in the Middle District of Florida, on 23 June 2021.

:::reveal How did the Miller injunction differ from the Wynn injunction? ||| Wynn froze the payments; Miller certified classes and barred USDA from using race, ethnicity or any proxy for them in administering the section.

:::reveal What is the eligibility condition under the replacement programme? ||| Having experienced discrimination in USDA farm lending before 1 January 2021, which is an experience rather than an identity.

## Vocabulary
- **Temporary restraining order**: a short emergency order preserving the status quo until the court can rule on a preliminary injunction, which is a different and lesser thing than the injunction itself.
- **Nationwide injunction**: relief that binds the government as to everyone rather than only as to the plaintiff before the court, which the Wynn court granted while saying it had never done so before.
- **Facially race neutral**: written so that no racial classification appears on the face of the provision, whatever the pattern of who is eligible in practice.
- **Notice of Funds Availability**: the agency notice announcing how a programme will operate, which is where section 1005's list of qualifying racial and ethnic groups actually appeared.
- **Repeal rather than judgment**: the end of a statute by later legislation before any court decides its validity, which leaves the legal question open.

## Sources
7 U.S.C. § 2279. (n.d.). *Outreach and assistance for socially disadvantaged farmers and ranchers and veteran farmers and ranchers*. Office of the Law Revision Counsel, U.S. House of Representatives. https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title7-section2279&num=0&edition=prelim

American Rescue Plan Act of 2021, Pub. L. No. 117-2, 135 Stat. 4. https://www.govinfo.gov/content/pkg/PLAW-117publ2/html/PLAW-117publ2.htm

Farm Service Agency. (2021, May 26). Notice of funds availability; American Rescue Plan Act of 2021 section 1005 loan payment. *Federal Register, 86*, 28329. https://www.federalregister.gov/documents/2021/05/26/2021-11155/notice-of-funds-availability-american-rescue-plan-act-of-2021-section-1005-loan-payment-arpa

*Holman v. Vilsack*, 117 F.4th 906 (6th Cir. 2024). https://www.opn.ca6.uscourts.gov/opinions.pdf/24a0223p-06.pdf

Inflation Reduction Act of 2022, Pub. L. No. 117-169, 136 Stat. 1818. https://www.govinfo.gov/content/pkg/PLAW-117publ169/html/PLAW-117publ169.htm

*Miller v. Vilsack*, No. 4:21-cv-00595-O (N.D. Tex. July 1, 2021) (order certifying classes and granting preliminary injunction). https://storage.courtlistener.com/recap/gov.uscourts.txnd.347284/gov.uscourts.txnd.347284.60.0.pdf

U.S. Department of Agriculture. (2024, July 31). *Biden-Harris administration issues financial assistance to more than 43,000 farmers, ranchers, and forest landowners* [Press release]. Internet Archive. https://web.archive.org/web/20250113144152/https://www.usda.gov/about-usda/news/press-releases/2024/07/31/biden-harris-administration-issues-financial-assistance-more-43000-farmers-ranchers-and-forest

*Wynn v. Vilsack*, 545 F. Supp. 3d 1271 (M.D. Fla. 2021). https://storage.courtlistener.com/recap/gov.uscourts.flmd.390177/gov.uscourts.flmd.390177.41.0.pdf`,
    },
    {
      slug: "what-this-course-refused",
      title: "23 · What this course refused, and where to take it next",
      section: "Section 6 · What came after",
      body: `A course that only tells you what it found is showing you half its work. Here is the other half, and then where to go.

**1. Any bare acreage figure for Black-owned farmland in 1920.** Lesson 9 explains why: the census never asked. The 14 to 16 million acre bracket is a **colored** figure, its top end overstates ownership by an unknown amount, and it is usually printed beside a **Negro** operator count. The 13,948,512 acre figure is a ceiling on land operated by owners. **This course prints those with their units and their limits attached, and prints no single number as the answer**, because there is no single number and saying so is the finding.

**2. A current count of states that have adopted the Uniform Partition of Heirs Property Act.** The Uniform Law Commission publishes it inside an interactive dashboard this course could not read, and the secondary counts disagree with one another and count different things. A stale number presented as current would be exactly the error this catalog exists to avoid. Lesson 15 tells you where to look and to record the date you looked.

**3. Any dollar figure for section 1005 debt relief actually disbursed.** Nothing moved between the first restraining order and the repeal, and no official document reporting a disbursed amount was found. **Found, not proven absent.**

**4. An itemisation of the roughly two hundred million dollar gap** between the $2.2 billion appropriated for the discrimination assistance programme and the about $2 billion USDA reported paying out. The statute permits the cost of delivering the assistance to be paid from the same appropriation, and there the trail ends. The course states both figures and the statutory reason they can differ, and invents no breakdown.

**5. Any claim that a government audit substantiated fraud in the Pigford settlements.** Lesson 21 sets out what was searched and what was found, and says plainly that "not found" is not the same sentence as "does not exist".

**6. The 93.3 per cent figure for Tennessee's committee losses**, except as a stated contradiction. The published table's arithmetic supports 83.3, the Findings section still prints 93.3, and there are two printings. **Refusing to pick silently is the point.**

**7. Any inference from the 1979 to 1980 committee composition data about anybody's intent.** The Commission declined that inference in writing and this course honours the refusal, including where it would be convenient not to.

**8. A characterisation of what any court would have held about section 1005.** It was repealed rather than litigated to judgment. Four preliminary rulings are not a merits holding, and this course does not turn them into one.

**And two things this course computed rather than inherited.** The five lines of the Pigford Track A table sum exactly to the total CRS prints, which anyone can check. The residual against the overall total implies roughly $412,000 per prevailing Track B claimant, and Lesson 19 labels that an inference from two published figures rather than a reported number.

**Why the ledger exists.** Every item above is something a confident sentence could have covered, and every confident sentence would have made this course feel more complete and be less true. **The refusals are not the footnotes of the argument. They are the reason to believe the rest of it.**

## Where to take this next, inside this catalog

- **The Match (WARRANT-01)** is this course's sibling and the place to go next, or first. It teaches the same move as a funding formula: Congress endows a system of colleges, a class is excluded from them, a separate and smaller system is built, and that system is then made conditional on a state match the law lets the state be excused from. **Read the two together and the shape is unmistakable.** WARRANT-01 also carries a ledger of what it refused, and the first two items on it are the 1920 acreage and operator figures. **Section 3 of this course is the answer to WARRANT-01's first refusal, arrived at the way the ledger said it would have to be: by opening the volume.**
- **Cooperatives.** The Rural Electrification Act of 1936 and the loans that let farmers build the electric systems private utilities would not build. Same countryside, same decades, a different design: nobody was obliged, so the members did it themselves. **Run this course's three questions on it and the answers come out differently, which is the point of running them.**
- **The Great Migration** and **The Great Migration and the World.** Those courses own the leaving. This one owns the ledger the leaving was calculated against, and Lesson 9's finding that three quarters of Black farm operators in 1920 were tenants is the arithmetic behind a decision millions of people made.
- **Genealogy for Yourself and Your Community** and **Tracing a Person Through Records.** Deeds, probate files and the county recorder are the instruments Section 4 is about. If your family holds land in common, those courses teach the records that will tell you who else is on the title.
- **Financing Without Access** and **What They Built.** Capital formation when institutions will not lend. This course is the mirror case, where the lender is the federal government and the answer is still no.
- **Your own state's civics course.** Intestate succession and partition are state law. The uniform act is adopted state by state. **Section 4 has a different ending in every state, and yours is knowable.**

## The three questions, portable

WARRANT-01 ends with three questions about a funding formula. Here are this course's three, about a delivered benefit, and they work on almost any programme:

1. **Who decides, and how did they get there?** Elected, appointed, or hired. Three people in a county, or a national formula.
2. **What is the applicant's alternative if the answer is no?** If the eligibility rule already established there is none, the decision is final in a way an ordinary refusal is not.
3. **What record survives the decision?** If the answer is nothing, the programme cannot be audited, defended, or corrected, and nobody will ever be able to settle an argument about it.

**A programme with good answers to all three is one you can trust. A programme whose answer to the third is nothing is one nobody can evaluate, in either direction.** That is the transferable thing here, and it costs nothing to ask.

:::reveal Why does this course print no single figure for Black-owned farmland in 1920? ||| Because the census never collected acres owned, so what exists is a colored bracket and an owner-operated ceiling, each with its own unit and limit.

:::reveal What is the difference between "not found" and "does not exist" in Lesson 21's conclusion? ||| The first reports the result of a bounded search and leaves the question open; the second is an assertion the evidence does not support.

:::reveal State this course's three portable questions. ||| Who decides and how did they get there, what is the applicant's alternative if the answer is no, and what record survives the decision.

## Vocabulary
- **Ledger of refusals**: the explicit list of claims a course tested and declined to print, which is what makes the printed claims checkable rather than merely confident.
- **Bounded search**: an investigation whose scope is stated, so that finding nothing reports a result rather than proving a negative.
- **Merits holding**: a court's final ruling on whether a law is valid, as distinct from a preliminary order preserving the position while a case proceeds.
- **Portable question**: a test that can be run on a programme the asker has never studied, because it asks about structure rather than about content.

## Sources
Cowan, T., & Feder, J. (2013, May 29). *The Pigford cases: USDA settlement of discrimination suits by Black farmers* (CRS Report No. RS20430). Congressional Research Service. https://www.everycrsreport.com/reports/RS20430.html

U.S. Bureau of the Census. (1922). *Fourteenth census of the United States taken in the year 1920, Volume V: Agriculture, general report and analytical tables* (Chapter V, Farm statistics by race, nativity, and sex of farmer). U.S. Government Printing Office. https://www2.census.gov/library/publications/decennial/1920/volume-5/06229676v5ch04.pdf

U.S. Commission on Civil Rights. (1982, February). *The decline of Black farming in America*. U.S. Government Printing Office. https://www.usccr.gov/files/historical/1982/82-018.pdf`,
    },
    {
      slug: "quiz-what-came-after",
      title: "24 · Knowledge check: what came after",
      section: "Section 6 · What came after",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "Which criticism of the Pigford settlement came from within the class?",
            options: ["That the structure short-changed larger losses", "That the standard of proof was too low to keep out invalid claims", "That the court appointed a monitor rather than leaving oversight to the agency", "That the settlement was funded by appropriation rather than from agency accounts"],
            correctIndex: 0,
            explanation: "CRS records objections to the settlement's structure, to the number of late filers who never got a determination, and to reported deficiencies in class counsel's representation.",
            sourceLessonSlug: "the-criticism-in-both-directions",
          },
          {
            prompt: "Which report number identifies the December 2012 audit of the Pigford II claims process?",
            options: ["GAO-13-69R", "GAO-06-469R, which concerns the role of the court-appointed monitor", "RS20430, which is the standing CRS summary of both settlements", "R40179, which describes the composition of Farm Service Agency committees"],
            correctIndex: 0,
            explanation: "GAO-13-69R was published on 7 December 2012 under a mandate in section 201 of the Claims Resolution Act of 2010.",
            sourceLessonSlug: "the-criticism-in-both-directions",
          },
          {
            prompt: "What is the exact subject of GAO-06-469R?",
            options: ["The role of the court-appointed monitor", "Internal controls in the second settlement's claims process", "The Department of Agriculture's civil rights complaint backlog", "The composition of Farmers Home Administration county committees"],
            correctIndex: 0,
            explanation: "It is a 2006 report about the Pigford I monitor's outreach and reexaminations, and GAO-13-69R cites it in its own footnotes.",
            sourceLessonSlug: "the-criticism-in-both-directions",
          },
          {
            prompt: "What did GAO-13-69R say the internal control design provides?",
            options: ["Reasonable assurance, with certain weaknesses", "Conclusive protection against every category of invalid claim", "No meaningful protection, since claims were adjudicated on the claimant's word", "A guarantee that no improper determination had been made to date"],
            correctIndex: 0,
            explanation: "The finding is that the design generally provides reasonable assurance while certain weaknesses could expose the process to risk of improper determinations.",
            sourceLessonSlug: "the-criticism-in-both-directions",
          },
          {
            prompt: "What does the phrase could expose the process to risk actually assert?",
            options: ["That a gap exists through which an error might pass", "That errors did in fact pass through the identified gaps", "That the claims process was suspended pending remediation", "That the auditors found a specific number of improper payments"],
            correctIndex: 0,
            explanation: "It is a statement about a control system rather than about any particular decision, which is what an internal-controls audit is for.",
            sourceLessonSlug: "the-criticism-in-both-directions",
          },
          {
            prompt: "What did GAO explicitly say its review did not include?",
            options: ["An examination of fraud perpetrated on claimants", "Any review of the claims administrator's control design", "Any testing of individual claims submitted to the process", "Any assessment of whether the settlement's terms were lawful"],
            correctIndex: 0,
            explanation: "A footnote in enclosure I states the review did not examine fraud perpetrated on claimants, and reports the Ombudsman's finding about the complaints his office received.",
            sourceLessonSlug: "the-criticism-in-both-directions",
          },
          {
            prompt: "What did the court-appointed Ombudsman report about the fraud complaints received?",
            options: ["All concerned fraud perpetrated on claimants", "All concerned fraud perpetrated by claimants against the government", "None had been received during the period of the audit", "They were evenly divided between the two directions"],
            correctIndex: 0,
            explanation: "GAO records the Ombudsman as saying every complaint his office received pertained to fraud perpetrated on, not by, claimants.",
            sourceLessonSlug: "the-criticism-in-both-directions",
          },
          {
            prompt: "How many claims did GAO test, and what did it find?",
            options: ["150 claims, with no exceptions", "3,180 claims, of which about half showed irregularities", "37,275 claims, which is the whole population submitted at that point", "None, since the audit examined only the design of the controls"],
            correctIndex: 0,
            explanation: "GAO drew a random sample of 150 from the 37,275 submitted as of 4 June 2012 and found no exceptions.",
            sourceLessonSlug: "the-criticism-in-both-directions",
          },
          {
            prompt: "What confidence statement did GAO attach to its sample result?",
            options: ["95 per cent confidence that the error rate was at or below 2 per cent", "99 per cent confidence that no fraudulent claim had been paid", "90 per cent confidence that the error rate exceeded 10 per cent", "No confidence statement, since the sample was chosen judgmentally"],
            correctIndex: 0,
            explanation: "Because the sample was random, GAO could express its result as a confidence interval on the actual error rate.",
            sourceLessonSlug: "the-criticism-in-both-directions",
          },
          {
            prompt: "What does the figure of about 3,180 claims represent?",
            options: ["Claims flagged for potential fraud concerns", "Claims adjudicated as fraudulent by the claims administrator", "Claims referred to the Department of Justice for prosecution", "Claims denied because the claimant missed the filing deadline"],
            correctIndex: 0,
            explanation: "They were identified by reviewers and referred to the parties, and GAO's own note says some perceived patterns may not be fraudulent at all.",
            sourceLessonSlug: "the-criticism-in-both-directions",
          },
          {
            prompt: "What innocent explanation does GAO's footnote give for similarities across claims?",
            options: ["One person helping several claimants fill in forms", "A single family operating several farms under different names", "A software error duplicating entries in the claims database", "Claimants copying language from a published sample claim form"],
            correctIndex: 0,
            explanation: "GAO records that similarities may be attributable to a single individual assisting several claimants in completing their claim forms.",
            sourceLessonSlug: "the-criticism-in-both-directions",
          },
          {
            prompt: "Under what authority was GAO-13-69R produced?",
            options: ["A mandate in the Claims Resolution Act of 2010", "A request from the plaintiffs' counsel in the consolidated litigation", "A referral from the Department of Agriculture's Inspector General", "The Comptroller General's own initiative, with no external request"],
            correctIndex: 0,
            explanation: "The report is addressed to congressional committees as a mandated report under section 201 of that Act.",
            sourceLessonSlug: "the-criticism-in-both-directions",
          },
          {
            prompt: "Which member of Congress held the special order titled Pigford Farms and Discrimination?",
            options: ["Rep. Steve King of Iowa", "Rep. Michele Bachmann of Minnesota, who spoke within the same special order", "Rep. John Boyd of Virginia, who founded the National Black Farmers Association", "Sen. Tom Vilsack of Iowa, before his appointment as Secretary of Agriculture"],
            correctIndex: 0,
            explanation: "The special order was held on 29 November 2010 and is printed at 156 Cong. Rec. H7635 to H7641.",
            sourceLessonSlug: "the-criticism-in-both-directions",
          },
          {
            prompt: "On what date was that special order held?",
            options: ["29 November 2010", "8 December 2010, when the appropriating statute was signed into law", "25 April 2013, when the newspaper investigation was published", "7 December 2012, when the audit of the claims process appeared"],
            correctIndex: 0,
            explanation: "The Congressional Record prints it at volume 156, number 153, for 29 November 2010.",
            sourceLessonSlug: "the-criticism-in-both-directions",
          },
          {
            prompt: "Where was the 75 per cent fraud figure said to come from?",
            options: ["An unnamed source who believed it", "An audit conducted by the Department of Agriculture's Inspector General", "A statistical sample drawn by the Government Accountability Office", "The claims administrator's own report to the district court"],
            correctIndex: 0,
            explanation: "The figure rested on one unnamed individual's belief, extrapolated by the speaker, and no document was ever produced for it.",
            sourceLessonSlug: "the-criticism-in-both-directions",
          },
          {
            prompt: "Which speaker said the numbers just bespeak obvious fraud in this situation?",
            options: ["Rep. Michele Bachmann", "Rep. Steve King, who held the special order in which the remark was made", "The Secretary of Agriculture, in a radio interview the following month", "The author of the 2013 newspaper investigation, quoting a source"],
            correctIndex: 0,
            explanation: "Bachmann spoke within King's special order, and the passage most often attributed to King is hers.",
            sourceLessonSlug: "the-criticism-in-both-directions",
          },
          {
            prompt: "Why does the lesson insist on separating the two speakers?",
            options: ["The most-quoted passage is misattributed", "Because only one of them was a member of the Agriculture Committee", "Because the Congressional Record does not identify who was speaking", "Because one spoke on the floor and the other in a committee hearing"],
            correctIndex: 0,
            explanation: "A quotation attributed to the wrong member is an error of the same kind the rest of the course is about.",
            sourceLessonSlug: "the-criticism-in-both-directions",
          },
          {
            prompt: "Who wrote the April 2013 New York Times investigation?",
            options: ["Sharon LaFraniere", "J. Michael Kelly, the retired associate general counsel quoted in it", "Susan A. Schneider, who published a response to it the following month", "Tadlock Cowan, one of the authors of the standing CRS report"],
            correctIndex: 0,
            explanation: "The article carried her sole byline, with contributors credited for reporting and research.",
            sourceLessonSlug: "the-criticism-in-both-directions",
          },
          {
            prompt: "What was the article's published headline?",
            options: ["Farm Loan Bias Claims, Often Unsupported, Cost U.S. Millions", "Numbers Alone Do Not Prove Discrimination at the Department of Agriculture", "The County Committee: How Three People Decided a Farmer's Year", "Land-Grab Universities: Expropriated Indigenous Land and the Land-Grant System"],
            correctIndex: 0,
            explanation: "That is the headline on the page, and the print edition carried an alternate reading Federal Spigot Flows as Farmers Claim Bias.",
            sourceLessonSlug: "the-criticism-in-both-directions",
          },
          {
            prompt: "Which named source spoke on the record in that investigation?",
            options: ["J. Michael Kelly", "Tony West, then Acting Associate Attorney General", "John W. Boyd Jr. of the National Black Farmers Association", "Randi Roth, the court-appointed monitor in the first settlement"],
            correctIndex: 0,
            explanation: "Kelly, who retired as USDA's associate general counsel, is quoted by name; the other officials in the piece are unnamed.",
            sourceLessonSlug: "the-criticism-in-both-directions",
          },
          {
            prompt: "What are the three kinds of evidence the fraud allegation rested on?",
            options: ["Unnamed sources, a counting inference, and internal documents", "Court findings, agency admissions, and sworn testimony", "Statistical sampling, forensic accounting, and criminal indictments", "Inspector General audits, prosecutions, and settlement disclosures"],
            correctIndex: 0,
            explanation: "The 75 per cent figure rested on unnamed sources, the claim-count argument on an inference, and the newspaper on documents plus mostly unnamed interviews.",
            sourceLessonSlug: "the-criticism-in-both-directions",
          },
          {
            prompt: "What was the arithmetic inference at the centre of the allegation?",
            options: ["Roughly 94,000 claims against 18,000 to 33,000 counted Black farm operators", "A payout of $1.06 billion against an appropriation of only $100 million", "A denial rate of 31 per cent against an expected rate of 5 per cent", "A settlement of $1.25 billion against 22,721 eligible claimants"],
            correctIndex: 0,
            explanation: "The argument was that there were far more claimants than the census ever counted Black farm operators.",
            sourceLessonSlug: "the-criticism-in-both-directions",
          },
          {
            prompt: "Which source rebutted the counting argument before the newspaper article appeared?",
            options: ["The Congressional Research Service", "The Government Accountability Office, in its December 2012 audit", "The Department of Agriculture's Office of Inspector General", "The court-appointed monitor, in her final report of April 2012"],
            correctIndex: 0,
            explanation: "CRS RS20430 explains the changing census definitions, the reach of the class, and that claims filed are not awards made.",
            sourceLessonSlug: "the-criticism-in-both-directions",
          },
          {
            prompt: "Which three points does the CRS rebuttal make?",
            options: ["Definitions changed, the class reached non-farmers, filings are not awards", "The audit found no fraud, the monitor agreed, and the court approved the settlement", "The class was certified twice, the deadline moved, and the class was redefined", "The payments were capped, the arbitrator was neutral, and the reviews were multiple"],
            correctIndex: 0,
            explanation: "Census definitions of farm, farm operator and farm owner changed; the class reached people who attempted to farm; and nearly a third of Track A claims were denied.",
            sourceLessonSlug: "the-criticism-in-both-directions",
          },
          {
            prompt: "What did Secretary Vilsack say about questionable cases in the first settlement?",
            options: ["Only three of 17,000 to 18,000 adjudicated cases were marginally questionable", "That about a quarter of the adjudicated cases showed signs of irregularity", "That the Department could not evaluate the claims because it lacked the records", "That the Department had referred several thousand cases for prosecution"],
            correctIndex: 0,
            explanation: "He said so in a CBS News interview published on 30 December 2010.",
            sourceLessonSlug: "the-criticism-in-both-directions",
          },
          {
            prompt: "Who is Susan A. Schneider?",
            options: ["A law professor who published a point-by-point response", "A Congressional Research Service analyst who co-wrote the standing report", "The court-appointed monitor in the first Pigford settlement", "A Government Accountability Office director who signed the 2012 audit"],
            correctIndex: 0,
            explanation: "She directs the agricultural and food law programme at the University of Arkansas and responded to the investigation on 1 May 2013.",
            sourceLessonSlug: "the-criticism-in-both-directions",
          },
          {
            prompt: "Which figure did Schneider's response emphasise?",
            options: ["That 31 per cent of eligible Track A claimants were denied", "That only 104 claimants ever prevailed on the higher-proof track", "That the settlement totalled $1.06 billion rather than $1.25 billion", "That the class period ran for fourteen years rather than four"],
            correctIndex: 0,
            explanation: "The denial rate is the direct answer to any suggestion that the process paid whoever filed.",
            sourceLessonSlug: "the-criticism-in-both-directions",
          },
          {
            prompt: "Which two other people responded publicly in May 2013?",
            options: ["John W. Boyd Jr. and Tony West", "Paul L. Friedman and Randi Roth", "Tom Vilsack and Michael Lewis", "Sharon LaFraniere and J. Michael Kelly"],
            correctIndex: 0,
            explanation: "Boyd is president of the National Black Farmers Association and West was then Acting Associate Attorney General.",
            sourceLessonSlug: "the-criticism-in-both-directions",
          },
          {
            prompt: "What did this course find when it searched for a substantiating audit or prosecution?",
            options: ["It found none, and says so as a search result", "It found an Inspector General report substantiating widespread fraud", "It found several prosecutions but no convictions", "It did not search, because the question was outside its scope"],
            correctIndex: 0,
            explanation: "The lesson reports a bounded search that turned up nothing, and states that this is not the same sentence as saying none exists.",
            sourceLessonSlug: "the-criticism-in-both-directions",
          },
          {
            prompt: "What distinction does Lesson 21 call the most transferable skill in the course?",
            options: ["Between what an audit found and what it said could happen", "Between a preliminary injunction and a temporary restraining order", "Between land operated and land owned in a census table", "Between an elected committee and an appointed one"],
            correctIndex: 0,
            explanation: "A control weakness that could permit an improper determination is a different claim from a finding that improper determinations occurred.",
            sourceLessonSlug: "the-criticism-in-both-directions",
          },
          {
            prompt: "Which programme did section 1005 of the American Rescue Plan Act create?",
            options: ["Payments of up to 120 per cent of outstanding farm loan debt", "A relending programme for families holding land as tenants in common", "A financial assistance fund for anyone who experienced lending discrimination", "A capacity grant for the 1890 land-grant institutions and their extension work"],
            correctIndex: 0,
            explanation: "The section directed payments of up to 120 per cent of each socially disadvantaged farmer's outstanding indebtedness as of 1 January 2021.",
            sourceLessonSlug: "the-race-neutral-rewrite",
          },
          {
            prompt: "How much did section 1005 appropriate?",
            options: ["Such sums as may be necessary", "Exactly four billion dollars, the figure most commonly reported", "Two point two billion dollars, matching the later successor programme", "One point two five billion dollars, matching the second Pigford settlement"],
            correctIndex: 0,
            explanation: "The appropriation was open ended, so the widely repeated four billion dollar figure is an estimate rather than a statutory number.",
            sourceLessonSlug: "the-race-neutral-rewrite",
          },
          {
            prompt: "Which loans did section 1005 cover, besides Farm Service Agency direct and guaranteed loans?",
            options: ["Commodity Credit Corporation farm storage facility loans", "Federally guaranteed rural housing mortgages held by farm families", "Small Business Administration disaster loans made to agricultural producers", "Rural Electrification Administration loans made to farmer cooperatives"],
            correctIndex: 0,
            explanation: "The definition of farm loan reaches both FSA subtitle A, B and C loans and CCC farm storage facility loans.",
            sourceLessonSlug: "the-race-neutral-rewrite",
          },
          {
            prompt: "Where did section 1005 take its definition of socially disadvantaged farmer or rancher?",
            options: ["From 7 U.S.C. § 2279(a)", "From 7 U.S.C. § 2003(e), the target participation rate provision", "From the implementing notice USDA published in the Federal Register", "From the consent decree entered in the first Pigford settlement"],
            correctIndex: 0,
            explanation: "That section defines a socially disadvantaged group without naming any race, in language matching § 2003.",
            sourceLessonSlug: "the-race-neutral-rewrite",
          },
          {
            prompt: "Where did the list of qualifying racial and ethnic groups actually appear?",
            options: ["In USDA's Notice of Funds Availability", "In the text of section 1005 as enacted by Congress", "In the definition at 7 U.S.C. § 2279(a) as amended in 2021", "In the preliminary injunction issued by the Florida district court"],
            correctIndex: 0,
            explanation: "The notice at 86 Fed. Reg. 28329, published 26 May 2021, listed the groups; the statute named none.",
            sourceLessonSlug: "the-race-neutral-rewrite",
          },
          {
            prompt: "Why does it matter that the racial list was in the notice rather than the statute?",
            options: ["It identifies the seam a legal challenge attaches to", "It means the list had no legal effect on eligibility at all", "It means Congress never intended the programme to reach any specific group", "It means the courts lacked jurisdiction to review the classification"],
            correctIndex: 0,
            explanation: "The operative racial classification lived in an agency document, which is where the challenge was aimed.",
            sourceLessonSlug: "the-race-neutral-rewrite",
          },
          {
            prompt: "What did the Eastern District of Wisconsin issue on 10 June 2021?",
            options: ["A temporary restraining order", "The first nationwide preliminary injunction against the programme", "An order certifying two nationwide classes of plaintiffs", "A final judgment holding section 1005 unconstitutional"],
            correctIndex: 0,
            explanation: "Faust produced a TRO, which the same court dissolved on 6 July as no longer needed to preserve the status quo.",
            sourceLessonSlug: "the-race-neutral-rewrite",
          },
          {
            prompt: "Which case issued the first preliminary injunction, and was it nationwide?",
            options: ["Wynn v. Vilsack, on 23 June 2021, and it was nationwide", "Faust v. Vilsack, on 10 June 2021, and it was limited to Wisconsin", "Miller v. Vilsack, on 1 July 2021, and it was limited to two certified classes", "Holman v. Vilsack, on 8 July 2021, and it was limited to Tennessee"],
            correctIndex: 0,
            explanation: "The Middle District of Florida enjoined the issuing of any payments, loan assistance or debt relief under section 1005(a)(2).",
            sourceLessonSlug: "the-race-neutral-rewrite",
          },
          {
            prompt: "What did the Wynn court say about issuing an injunction of nationwide effect?",
            options: ["That it proceeded with great caution and had never gone so far before", "That nationwide relief was the routine remedy in constitutional challenges", "That it lacked authority to limit the injunction to the plaintiff before it", "That the government had consented to nationwide relief in its filings"],
            correctIndex: 0,
            explanation: "The order records the court exploring narrower options and finding none that would maintain the status quo.",
            sourceLessonSlug: "the-race-neutral-rewrite",
          },
          {
            prompt: "What did the Northern District of Texas do on 1 July 2021?",
            options: ["Certified classes and enjoined the use of race", "Dissolved the restraining order the Wisconsin court had entered", "Held section 1005 unconstitutional on the merits after a full trial", "Ordered USDA to pay the plaintiffs' claims under the programme"],
            correctIndex: 0,
            explanation: "Miller certified two Rule 23(b)(2) classes and barred discrimination on account of race or ethnicity, including any proxy for them.",
            sourceLessonSlug: "the-race-neutral-rewrite",
          },
          {
            prompt: "How do the Wynn and Miller remedies differ?",
            options: ["Wynn froze the money and Miller barred the criterion", "Wynn barred the criterion and Miller froze the money", "Both froze the money, but only Miller reached beyond its own district", "Both barred the criterion, but only Wynn certified a class"],
            correctIndex: 0,
            explanation: "One enjoined payments under the section; the other enjoined the use of race or any proxy in administering it.",
            sourceLessonSlug: "the-race-neutral-rewrite",
          },
          {
            prompt: "Which court issued a preliminary injunction on 8 July 2021?",
            options: ["The Western District of Tennessee, in Holman", "The Middle District of Florida, in Wynn", "The Eastern District of Wisconsin, in Faust", "The Northern District of Texas, in Miller"],
            correctIndex: 0,
            explanation: "Holman was the fourth of the four rulings and came a week after the Texas order.",
            sourceLessonSlug: "the-race-neutral-rewrite",
          },
          {
            prompt: "What ended section 1005?",
            options: ["A one-sentence repeal in the Inflation Reduction Act", "A final judgment of the Sixth Circuit holding it unconstitutional", "The expiry of its appropriation at the end of fiscal year 2021", "A settlement between the government and the class plaintiffs"],
            correctIndex: 0,
            explanation: "Section 22008 of P.L. 117-169 repealed it outright, so no court ever ruled on the merits.",
            sourceLessonSlug: "the-race-neutral-rewrite",
          },
          {
            prompt: "How long did the Sixth Circuit later describe the injunction as lasting?",
            options: ["Thirteen months", "Six weeks, between the first order and the dissolution of the restraining order", "Three years, until the successor programme announced its awards", "Two crop years, from the appropriation to the repeal"],
            correctIndex: 0,
            explanation: "The court described a thirteen-month injunction spanning the period from the first orders to the repeal.",
            sourceLessonSlug: "the-race-neutral-rewrite",
          },
          {
            prompt: "How much section 1005 debt relief was actually disbursed?",
            options: ["No official document reporting any was found", "About two billion dollars, matching the successor programme", "About one hundred million dollars, released before the first injunction", "About 120 per cent of the outstanding debt of every eligible borrower"],
            correctIndex: 0,
            explanation: "The programme was frozen from the outset and stayed frozen until repeal, and the course reports finding no disbursement figure.",
            sourceLessonSlug: "the-race-neutral-rewrite",
          },
          {
            prompt: "Which section of the Inflation Reduction Act created the successor programme?",
            options: ["Section 22007", "Section 22008, which instead repealed the earlier provision", "Section 1005, which is the provision that was repealed", "Section 14012, which reopened the Pigford claims for late filers"],
            correctIndex: 0,
            explanation: "Section 22007 rewrote ARPA section 1006, and the operative assistance language now sits at ARPA section 1006(e).",
            sourceLessonSlug: "the-race-neutral-rewrite",
          },
          {
            prompt: "How much did the successor programme appropriate?",
            options: ["$2,200,000,000", "$1,250,000,000, which is instead the second Pigford settlement", "$1,150,000,000, which is instead the Claims Resolution Act appropriation", "Such sums as may be necessary, as in the repealed provision"],
            correctIndex: 0,
            explanation: "The provision appropriates $2.2 billion for fiscal year 2022, available until 30 September 2031.",
            sourceLessonSlug: "the-race-neutral-rewrite",
          },
          {
            prompt: "What is the eligibility condition under the successor programme?",
            options: ["Having experienced discrimination in USDA farm lending before 2021", "Membership in a socially disadvantaged group as defined at 7 U.S.C. § 2279(a)", "Holding an outstanding direct or guaranteed farm loan as of 1 January 2021", "Having filed a claim in one of the two earlier Pigford settlements"],
            correctIndex: 0,
            explanation: "The condition is an experience rather than an identity, which is what makes the provision facially race neutral.",
            sourceLessonSlug: "the-race-neutral-rewrite",
          },
          {
            prompt: "What is the maximum assistance an individual recipient could receive?",
            options: ["$500,000", "$250,000, which is instead the ceiling in the second Pigford settlement", "$50,000, which is instead the fixed payment on the lower-proof track", "120 per cent of the recipient's outstanding farm loan indebtedness"],
            correctIndex: 0,
            explanation: "The statute caps assistance at not more than $500,000 per recipient, as determined appropriate to the consequences experienced.",
            sourceLessonSlug: "the-race-neutral-rewrite",
          },
          {
            prompt: "Who administers the successor programme, under the statute?",
            options: ["One or more qualified nongovernmental entities", "The Farm Service Agency's county committees in each affected county", "A special master appointed by the district court in the Pigford litigation", "The Department of Agriculture's Office of the Inspector General"],
            correctIndex: 0,
            explanation: "The statute requires administration through qualified nongovernmental entities selected by the Secretary, subject to standards the Secretary sets.",
            sourceLessonSlug: "the-race-neutral-rewrite",
          },
          {
            prompt: "What is the careful way to describe the successor provision's treatment of race?",
            options: ["The assistance provision is facially race neutral", "The whole section contains no reference to race of any kind", "The section names five racial and ethnic groups as eligible", "The section defers the racial classification to an agency notice"],
            correctIndex: 0,
            explanation: "Nearby subsections mention racial equity for an equity commission and Hispanic-serving institutions, so the precise claim is about the assistance criterion.",
            sourceLessonSlug: "the-race-neutral-rewrite",
          },
          {
            prompt: "When did the successor programme accept applications?",
            options: ["7 July 2023 to 17 January 2024", "14 November 2011 to 11 May 2012, matching the second Pigford window", "1 January 2021 to 31 December 2021, the year of the appropriation", "26 May 2021 to 1 July 2021, between the notice and the injunction"],
            correctIndex: 0,
            explanation: "The window opened in July 2023, was extended, and closed on 17 January 2024, with decisions announced that July.",
            sourceLessonSlug: "the-race-neutral-rewrite",
          },
          {
            prompt: "When were the successor programme's decisions announced?",
            options: ["31 July 2024", "17 January 2024, the day the application window closed", "16 August 2022, the day the Inflation Reduction Act was signed", "30 September 2031, the date to which the appropriation remains available"],
            correctIndex: 0,
            explanation: "USDA announced all decisions and awards on 31 July 2024, roughly a year after the window opened.",
            sourceLessonSlug: "the-race-neutral-rewrite",
          },
          {
            prompt: "How many individuals received assistance under the successor programme?",
            options: ["Over 43,000", "About 22,721, matching the eligible class in the first Pigford settlement", "About 34,000, matching the complete and timely claims in the second", "About 32,653, matching the count of Black-operated farms in 2022"],
            correctIndex: 0,
            explanation: "USDA reported over 43,000 recipients across all fifty states, the District of Columbia, Puerto Rico, the U.S. Virgin Islands and American Samoa.",
            sourceLessonSlug: "the-race-neutral-rewrite",
          },
          {
            prompt: "What did recipients who had a farming or ranching operation receive?",
            options: ["Between $10,000 and $500,000, averaging nearly $82,000", "Between $3,500 and $6,000, averaging $5,000", "A flat $50,000 plus loan forgiveness and tax offsets", "120 per cent of their outstanding indebtedness as of January 2021"],
            correctIndex: 0,
            explanation: "Over 23,000 recipients in that group received amounts in that range, with the lower range reserved for those who never got to farm.",
            sourceLessonSlug: "the-race-neutral-rewrite",
          },
          {
            prompt: "What did recipients who had planned to farm but could not receive?",
            options: ["Between $3,500 and $6,000, averaging $5,000", "Between $10,000 and $500,000, averaging nearly $82,000", "Nothing, since the programme reached only active operations", "The same amount as operating recipients, with no distinction drawn"],
            correctIndex: 0,
            explanation: "Over 20,000 recipients reported being unable to farm because they could not get a USDA loan, and received amounts in that lower range.",
            sourceLessonSlug: "the-race-neutral-rewrite",
          },
          {
            prompt: "Why does the second group of recipients matter to this course?",
            options: ["They are the people a refused loan stopped from ever farming", "They show that the programme reached beyond agriculture entirely", "They prove that the county committees were still operating in 2023", "They demonstrate that the earlier settlements had already paid everyone"],
            correctIndex: 0,
            explanation: "Lesson 17's phrase or attempted to farm describes the same people, and Section 1's credit-elsewhere test explains why the refusal was final.",
            sourceLessonSlug: "the-race-neutral-rewrite",
          },
          {
            prompt: "How does the course describe the gap between $2.2 billion appropriated and about $2 billion awarded?",
            options: ["Delivery costs may be paid from the same appropriation", "The remainder was returned to the Treasury as unspent budget authority", "The remainder was transferred to the Heirs' Property Relending Program", "The two figures are inconsistent and one of them must be wrong"],
            correctIndex: 0,
            explanation: "The statute appropriates for the programme including the cost of any financial assistance, and no itemisation of the difference was found.",
            sourceLessonSlug: "the-race-neutral-rewrite",
          },
          {
            prompt: "What structural shape does Lesson 22 identify?",
            options: ["A remedy naming the class was stopped and the survivor described the injury", "A benefit created nationally and administered by three people in a county", "A title fragmenting across generations until any co-tenant could force a sale", "A statistical series broken by a change in the unit being counted"],
            correctIndex: 0,
            explanation: "It is the WARRANT move at the remedy end, and it echoes the 1890 Act's equitably divided proviso a hundred and thirty years later.",
            sourceLessonSlug: "the-race-neutral-rewrite",
          },
          {
            prompt: "Why does this course refuse to say how a court would have ruled on section 1005?",
            options: ["It was repealed rather than litigated to judgment", "Because the injunctions were sealed and their reasoning is unknown", "Because four different courts reached four incompatible conclusions", "Because the Sixth Circuit vacated all the earlier rulings on appeal"],
            correctIndex: 0,
            explanation: "Four preliminary rulings are not a merits holding, and the course declines to convert them into one.",
            sourceLessonSlug: "what-this-course-refused",
          },
          {
            prompt: "Which is the first item on this course's ledger of refusals?",
            options: ["A bare acreage figure for Black-owned farmland in 1920", "A current count of states adopting the Uniform Partition of Heirs Property Act", "A dollar figure for section 1005 debt relief actually disbursed", "A claim that any audit substantiated fraud in the Pigford settlements"],
            correctIndex: 0,
            explanation: "The census never asked, so what exists is a colored bracket and an owner-operated ceiling, each printed with its unit and its limit.",
            sourceLessonSlug: "what-this-course-refused",
          },
          {
            prompt: "Why does the course refuse a current UPHPA adoption count?",
            options: ["The authoritative source could not be read and the others disagree", "Because the count is published only in a subscription legal database", "Because adoption is a matter of federal rather than state law", "Because the Uniform Law Commission has stopped tracking enactments"],
            correctIndex: 0,
            explanation: "The Commission publishes it inside a dashboard the course could not read, and secondary counts differ and count different things.",
            sourceLessonSlug: "what-this-course-refused",
          },
          {
            prompt: "What does the course say about the Tennessee committee figure?",
            options: ["It uses 83.3 and states the contradiction rather than picking silently", "It uses 93.3, following the report's own Findings section", "It refuses to print either figure, since the report is unreliable", "It averages the two figures, since neither printing can be preferred"],
            correctIndex: 0,
            explanation: "The published table's arithmetic supports 83.3, the Findings still print 93.3, and there are two printings.",
            sourceLessonSlug: "what-this-course-refused",
          },
          {
            prompt: "Which computation does the course claim as its own rather than inheriting?",
            options: ["The residual implying about $412,000 per prevailing Track B claimant", "The 96.5 per cent decline in Black-operated farms since 1920", "The 39.8 per cent one-year fall in Black committee membership", "The 76 per cent tenant share among 1920 Black farm operators"],
            correctIndex: 0,
            explanation: "CRS prints no Track B total, so the average comes from subtracting one published figure from another and is labelled an inference.",
            sourceLessonSlug: "what-this-course-refused",
          },
          {
            prompt: "Which sibling course does this one point at first?",
            options: ["The Match, which teaches the same move as a funding formula", "Cooperatives, which teaches the Rural Electrification Act and the co-op form", "The Great Migration, which teaches why people left the rural South", "Tracing a Person Through Records, which teaches deeds and probate files"],
            correctIndex: 0,
            explanation: "The two courses teach one mechanism in two forms, and Section 3 here answers the first refusal on that course's own ledger.",
            sourceLessonSlug: "what-this-course-refused",
          },
          {
            prompt: "What relationship does this course have to The Match's ledger?",
            options: ["Section 3 answers its first refusal by opening the volume", "It repeats the same refusal, since neither course could read the tables", "It contradicts that ledger by printing the figure that course declined", "It has no relationship, since the two courses share no material"],
            correctIndex: 0,
            explanation: "That course refused the 1920 acreage and operator figures for want of the table; this course read the table and prints what it actually contains.",
            sourceLessonSlug: "what-this-course-refused",
          },
          {
            prompt: "Which course does this one name as the opposite design in the same countryside?",
            options: ["Cooperatives", "The Schoolhouse Network, which teaches privately matched community funds", "Financing Without Access, which teaches capital formation without banks", "Tribal Nations and Indigenous Governance, which teaches treaty land"],
            correctIndex: 0,
            explanation: "The Rural Electrification Act put loans behind systems the members built themselves, because nobody was obliged to build them.",
            sourceLessonSlug: "what-this-course-refused",
          },
          {
            prompt: "How does this course divide its subject from the migration courses?",
            options: ["They own the leaving and this one owns the ledger", "They own the ledger and this one owns the leaving", "They cover the North and this one covers the South", "They cover the twentieth century and this one covers the nineteenth"],
            correctIndex: 0,
            explanation: "Lesson 9's finding that three quarters of Black farm operators were tenants is the arithmetic behind the decision those courses describe.",
            sourceLessonSlug: "what-this-course-refused",
          },
          {
            prompt: "Which courses does this one recommend for the records skills Section 4 needs?",
            options: ["Genealogy for Yourself and Your Community, and Tracing a Person Through Records", "The Match and Cooperatives, which cover federal statutes and rural credit", "The Great Migration and its companion course on the wider world", "Financing Without Access and What They Built, on capital formation"],
            correctIndex: 0,
            explanation: "Deeds, probate files and the county recorder are the instruments a family holding land in common has to read.",
            sourceLessonSlug: "what-this-course-refused",
          },
          {
            prompt: "Why does the course send learners to their own state's civics course?",
            options: ["Intestate succession and partition are state law", "Because federal farm programmes are administered by state legislatures", "Because the uniform act binds every state once a majority adopt it", "Because county committee elections are governed by state election codes"],
            correctIndex: 0,
            explanation: "Section 4 has a different ending in every state, and the state code is where that ending is written.",
            sourceLessonSlug: "what-this-course-refused",
          },
          {
            prompt: "What is the first of this course's three portable questions?",
            options: ["Who decides, and how did they get there", "What record survives the decision that was made", "What is the applicant's alternative if the answer is no", "How much money does the programme have available"],
            correctIndex: 0,
            explanation: "Elected, appointed or hired; three people in a county, or a national formula, is where the analysis starts.",
            sourceLessonSlug: "what-this-course-refused",
          },
          {
            prompt: "What is the second portable question?",
            options: ["What is the applicant's alternative if the answer is no", "Who decides, and how did they get there in the first place", "What record survives the decision the programme made", "Which statute created the programme and in what year"],
            correctIndex: 0,
            explanation: "Where eligibility already established there is no other lender, a refusal is final in a way an ordinary refusal is not.",
            sourceLessonSlug: "what-this-course-refused",
          },
          {
            prompt: "What is the third portable question?",
            options: ["What record survives the decision", "How large is the programme's annual appropriation", "How many people apply in a typical year", "Whether the deciding body meets more than once a month"],
            correctIndex: 0,
            explanation: "If the answer is nothing, the programme cannot be audited, defended or corrected, and no argument about it can ever be settled.",
            sourceLessonSlug: "what-this-course-refused",
          },
          {
            prompt: "What does an answer of nothing to the third question mean?",
            options: ["Nobody can evaluate the programme in either direction", "The programme is presumptively unlawful under federal record-keeping rules", "The programme must be administered by a nongovernmental entity instead", "The applicant may appeal directly to the Secretary of Agriculture"],
            correctIndex: 0,
            explanation: "This is the same point Lesson 7 made about the absence of appropriate reliable data, and it disables critics and defenders alike.",
            sourceLessonSlug: "what-this-course-refused",
          },
          {
            prompt: "Why does this course print a ledger of refusals at all?",
            options: ["The refusals are the reason to believe the rest", "Because the guards in the build require a ledger in every course", "Because the refused items will be added in a later revision", "Because a course must disclose the sources it was unable to purchase"],
            correctIndex: 0,
            explanation: "Every item could have been covered by a confident sentence that would have made the course feel more complete and be less true.",
            sourceLessonSlug: "what-this-course-refused",
          },
          {
            prompt: "Which item on the ledger concerns a figure the course prints only with its limits?",
            options: ["The 1920 acreage figures", "The number of states adopting the uniform partition act", "The amount of section 1005 debt relief actually disbursed", "The itemisation of the successor programme's delivery costs"],
            correctIndex: 0,
            explanation: "The colored bracket and the owner-operated ceiling are printed with their units and limits attached, rather than as one answer.",
            sourceLessonSlug: "what-this-course-refused",
          },
          {
            prompt: "What is the correct relationship between the two Pigford criticisms?",
            options: ["They point in opposite directions", "They make the same objection from different institutional positions", "One is documented and the other was never made by anybody", "Both were rejected by the court before the settlement was approved"],
            correctIndex: 0,
            explanation: "One says the process paid too easily and the other says it failed the people it was for, and both attack the same design decision.",
            sourceLessonSlug: "the-criticism-in-both-directions",
          },
          {
            prompt: "Which sequence of the section 1005 litigation is correct?",
            options: ["Faust TRO, Wynn injunction, Miller class and injunction, Holman injunction", "Wynn TRO, Faust injunction, Holman class and injunction, Miller injunction", "Miller injunction, Faust TRO, Wynn injunction, Holman class certification", "Holman TRO, Miller injunction, Wynn class certification, Faust injunction"],
            correctIndex: 0,
            explanation: "10 June, 23 June, 1 July and 8 July 2021, in that order, across four different district courts.",
            sourceLessonSlug: "the-race-neutral-rewrite",
          },
          {
            prompt: "What is the difference between a temporary restraining order and a preliminary injunction?",
            options: ["The order is a short emergency measure pending the injunction ruling", "The order binds nationwide while the injunction binds only the parties", "The order is issued after trial and the injunction before it", "The order requires a bond and the injunction does not"],
            correctIndex: 0,
            explanation: "Faust's TRO preserved the status quo until the court could rule, and was dissolved once it was no longer needed.",
            sourceLessonSlug: "the-race-neutral-rewrite",
          },
          {
            prompt: "How does the successor programme's design echo the 1890 Act?",
            options: ["Both describe a condition rather than naming the class", "Both grant land rather than cash to the institutions they fund", "Both require a state to match the federal contribution dollar for dollar", "Both were repealed before any court ruled on their validity"],
            correctIndex: 0,
            explanation: "The equitably divided proviso and the experienced discrimination condition both put the arrangement in terms other than the class it was for.",
            sourceLessonSlug: "the-race-neutral-rewrite",
          },
          {
            prompt: "Which is the honest summary of what the record supports about Pigford fraud?",
            options: ["Allegations were made and named; no audit substantiated them", "An audit substantiated widespread fraud in both settlements", "The allegations were fabricated and no evidence of any kind was offered", "The question was never raised in any official or public venue"],
            correctIndex: 0,
            explanation: "The allegations are on the record with named speakers and venues, and the only audit of the process examined controls and found no exceptions in its sample.",
            sourceLessonSlug: "the-criticism-in-both-directions",
          },
          {
            prompt: "What was the standing rule under which Lesson 21 was written?",
            options: ["Say nothing unless source, venue, evidence and rebuttals are all named", "Report the allegation and omit the rebuttals, which are a matter of opinion", "Report only the audit findings and omit the political statements entirely", "Report whichever side the preponderance of published coverage supports"],
            correctIndex: 0,
            explanation: "All four elements are on the record, so the lesson states all four rather than saying nothing.",
            sourceLessonSlug: "the-criticism-in-both-directions",
          },
          {
            prompt: "What did USDA object to in GAO's draft, according to the audit?",
            options: ["The phrase describing a history of discrimination", "The sample size GAO used in testing individual claims", "The recommendation to identify duplicate claims across settlements", "The publication of the number of claims flagged for fraud concerns"],
            correctIndex: 0,
            explanation: "USDA asked GAO to insert the word alleged, and GAO declined, attributing the phrase to the judicial opinions approving both settlements.",
            sourceLessonSlug: "the-criticism-in-both-directions",
          },
          {
            prompt: "Why is USDA's objection an interesting data point?",
            options: ["It shows the agency minimising liability rather than alleging fraud", "It shows the agency endorsing the fraud allegation in an official document", "It shows the agency disputing the number of claims that had been paid", "It shows the agency asking GAO to widen the scope of the audit"],
            correctIndex: 0,
            explanation: "The department's own on-the-record posture was about its liability, which cuts differently from the fraud narrative.",
            sourceLessonSlug: "the-criticism-in-both-directions",
          },
          {
            prompt: "Which is a fair description of what Section 6 does?",
            options: ["States both criticisms, names everyone, and separates found from could", "Adjudicates the dispute in favour of the settlement's defenders", "Omits the fraud allegation because it could not be sourced", "Treats the audit's control findings as findings of fraud"],
            correctIndex: 0,
            explanation: "The section reports the claimants' criticism, the audit's actual findings, the named allegations, and the named rebuttals.",
            sourceLessonSlug: "the-criticism-in-both-directions",
          },
          {
            prompt: "What did GAO recommend at the end of its 2012 audit?",
            options: ["Procedures for prior judgments, and full implementation of the design", "Suspension of all payments until every flagged claim had been adjudicated", "Referral of the flagged claims to the Department of Justice for prosecution", "Replacement of the claims administrator with a court-appointed special master"],
            correctIndex: 0,
            explanation: "GAO asked the claims administrator to document procedures for identifying claimants with prior judgments, and the parties to implement the remaining controls.",
            sourceLessonSlug: "the-criticism-in-both-directions",
          },
          {
            prompt: "Why did GAO say some control weaknesses could not be fixed?",
            options: ["The settlement required claims to be judged on the claimant's own submission", "Because the court had sealed the underlying loan records", "Because the claims administrator lacked authority to reject any claim", "Because the appropriation did not fund any verification work"],
            correctIndex: 0,
            explanation: "By the settlement's terms most claims had to be evaluated on the information the claimant submitted, so the adjudicator could not independently verify it.",
            sourceLessonSlug: "the-criticism-in-both-directions",
          },
          {
            prompt: "What is the correct statutory chain for the successor programme's operative text?",
            options: ["IRA section 22007 amended ARPA section 1006, and the language sits at 1006(e)", "IRA section 22007 stands alone and contains the assistance language directly", "IRA section 22008 created the programme after repealing the earlier one", "ARPA section 1005 was amended rather than repealed, and now reads race neutrally"],
            correctIndex: 0,
            explanation: "Section 22007 is amendatory, so citing it alone as the source of the quoted language is imprecise.",
            sourceLessonSlug: "the-race-neutral-rewrite",
          },
          {
            prompt: "Which two nearby uses of racial or ethnic terms appear in the same IRA section?",
            options: ["An equity commission and Hispanic-serving institutions", "A list of five qualifying racial groups and a socially disadvantaged definition", "A set-aside for tribal colleges and a preference for 1890 institutions", "A reference to the Pigford class and to the Keepseagle settlement"],
            correctIndex: 0,
            explanation: "One subsection funds an equity commission to address racial equity, and another names Hispanic-serving institutions for research grants; neither is a DFAP eligibility criterion.",
            sourceLessonSlug: "the-race-neutral-rewrite",
          },
          {
            prompt: "Until when does the successor programme's appropriation remain available?",
            options: ["30 September 2031", "31 December 2024, the year the awards were announced", "17 January 2024, the date the application window closed", "1 January 2021, the cutoff for the discrimination the programme addresses"],
            correctIndex: 0,
            explanation: "The provision appropriates the funds for fiscal year 2022 to remain available until 30 September 2031.",
            sourceLessonSlug: "the-race-neutral-rewrite",
          },
          {
            prompt: "Which is the accurate way to state the outcome of the section 1005 litigation?",
            options: ["Four preliminary rulings, no merits judgment, then repeal", "Four final judgments holding the provision unconstitutional", "One nationwide judgment on the merits, later affirmed on appeal", "A settlement in which the government agreed to withdraw the programme"],
            correctIndex: 0,
            explanation: "A TRO and three preliminary injunctions froze the programme, and Congress repealed it before any court reached the merits.",
            sourceLessonSlug: "what-this-course-refused",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // FINAL ASSESSMENT
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "final-the-county-committee",
      title: "25 · Final assessment",
      section: "Final assessment",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 10,
        questions: [
          {
            prompt: "What makes timing the decisive term of an agricultural loan?",
            options: ["Inputs are bought before the crop is sold", "Federal interest rates are reset at the start of each crop year", "The county committee may only meet during the planting season", "Loan applications expire automatically after ninety days"],
            correctIndex: 0,
            explanation: "Money that arrives after planting cannot buy the crop it was needed for, at any rate.",
            sourceLessonSlug: "timing-is-the-whole-game",
          },
          {
            prompt: "Which statute enumerates the purposes of a direct operating loan?",
            options: ["7 U.S.C. § 1942", "7 U.S.C. § 1922, which instead sets ownership loan eligibility conditions", "16 U.S.C. § 590h, which instead establishes the committee structure", "7 U.S.C. § 2003, which instead sets target participation rates"],
            correctIndex: 0,
            explanation: "Section 1942(a) runs from equipment and inputs through to family subsistence.",
            sourceLessonSlug: "timing-is-the-whole-game",
          },
          {
            prompt: "What must a federal farm loan applicant be unable to do?",
            options: ["Obtain sufficient credit elsewhere", "Repay any existing federal obligation of any kind", "Demonstrate three consecutive years of positive net farm income", "Obtain a written guarantee from a licensed commercial lender"],
            correctIndex: 0,
            explanation: "The credit-elsewhere test at 7 U.S.C. §§ 1922 and 1941 makes the federal lender the lender of last resort.",
            sourceLessonSlug: "unable-to-obtain-credit-elsewhere",
          },
          {
            prompt: "Why is a federal farm loan denial final in a way a bank denial is not?",
            options: ["Eligibility already established there is no other lender", "Because a denial bars reapplication for a full crop year", "Because a denial accelerates every other federal loan the applicant holds", "Because the applicant forfeits their farm number on denial"],
            correctIndex: 0,
            explanation: "The credit-elsewhere test admits only applicants other lenders have refused, so the refusal ends the search rather than redirecting it.",
            sourceLessonSlug: "unable-to-obtain-credit-elsewhere",
          },
          {
            prompt: "How are county committees chosen under 16 U.S.C. § 590h(b)(5)?",
            options: ["Elected by agricultural producers", "Appointed by the Secretary from a congressional nominee list", "Selected by the County Executive Director from among eligible voters", "Chosen by the state committee from the previous year's applicants"],
            correctIndex: 0,
            explanation: "State committees are appointed by the Secretary; county committees are elected by the producers who participate in programmes in the area.",
            sourceLessonSlug: "two-committee-systems",
          },
          {
            prompt: "What did section 227 of P.L. 103-354 do?",
            options: ["Abolished the FmHA county committees", "Created the Farm Service Agency out of three predecessor units", "Established target participation rates for socially disadvantaged farmers", "Reopened the Pigford claims process for late filers"],
            correctIndex: 0,
            explanation: "It repealed 7 U.S.C. § 1982 and part of § 1983, and USDA recorded the change in the Federal Register in 1996.",
            sourceLessonSlug: "two-committee-systems",
          },
          {
            prompt: "Which eligibility test did the 1994 reorganisation drop?",
            options: ["Character, industry, and ability", "Inability to obtain sufficient credit elsewhere in the community", "Being or becoming the operator of not larger than a family farm", "United States citizenship of the applicant"],
            correctIndex: 0,
            explanation: "USDA's 1996 notice lists it among the requirements the new committees would not carry over.",
            sourceLessonSlug: "two-committee-systems",
          },
          {
            prompt: "How many members did an FmHA county committee have, and how many were farmers?",
            options: ["Three, at least two of them farmers", "Five, at least three of them farmers, appointed by the state director", "Eleven, with no requirement that any of them farm", "Three, none of whom could farm in the county they served"],
            correctIndex: 0,
            explanation: "The Commission on Civil Rights quotes USDA's own description of three residents of the county, at least two of them farmers.",
            sourceLessonSlug: "three-people-in-the-county",
          },
          {
            prompt: "What two things did the FmHA county committee determine?",
            options: ["Eligibility and the limits of credit", "The interest rate and the term of repayment", "The disaster designation and the payment rate", "The appraised value and the required insurance"],
            correctIndex: 0,
            explanation: "Both, which is why an approval for less than requested still decided a farmer's year.",
            sourceLessonSlug: "three-people-in-the-county",
          },
          {
            prompt: "How did FmHA county committee members reach their seats?",
            options: ["Nominated by county supervisors, appointed by state directors", "Elected by the producers of the county on an annual ballot", "Appointed by the governor from a list submitted by extension staff", "Selected by lot from among borrowers with active loan files"],
            correctIndex: 0,
            explanation: "The chain ran down from the agency, so nobody in it faced a vote, unlike the 1935 Act committees in the same counties.",
            sourceLessonSlug: "three-people-in-the-county",
          },
          {
            prompt: "How did Black FmHA county committee membership change between 1979 and 1980?",
            options: ["From 427 to 257 while total membership rose", "From 257 to 427 while total membership fell", "From 328 to 173, which are the national totals", "It did not change, though the total membership grew"],
            correctIndex: 0,
            explanation: "Total membership rose from 5,863 to 5,966 over the same year, so a shrinking programme does not explain the decline.",
            sourceLessonSlug: "who-sat-on-it",
          },
          {
            prompt: "How many states does the Commission's committee membership table cover?",
            options: ["Nine", "Fifty, since the table reports national membership by state", "Sixteen, matching the states that later received land-grant letters", "Eleven, the states of the former Confederacy"],
            correctIndex: 0,
            explanation: "Its rows sum to 328 and 173 against national totals of 427 and 257, so it is regional rather than national.",
            sourceLessonSlug: "who-sat-on-it",
          },
          {
            prompt: "Which Tennessee figure does the published table's arithmetic support?",
            options: ["83.3 per cent", "93.3 per cent, which the report's Findings section prints", "93.9 per cent, which a fall from 33 to 2 would produce", "60.7 per cent, which the table records for another state"],
            correctIndex: 0,
            explanation: "12 to 2 is an exact 83.33 per cent fall, and the report's Findings still print 93.3, so the source contradicts itself.",
            sourceLessonSlug: "who-sat-on-it",
          },
          {
            prompt: "What did the Commission say about what participation rates prove?",
            options: ["Numbers alone do not prove discrimination", "That a sustained gap establishes a presumption the agency must rebut", "That the rates proved discrimination in FmHA farm lending programmes", "That participation rates are the only reliable measure of programme fairness"],
            correctIndex: 0,
            explanation: "The report says the comparison does not indicate the presence or absence of discrimination, and cites a lack of appropriate reliable data.",
            sourceLessonSlug: "numbers-alone-do-not-prove-discrimination",
          },
          {
            prompt: "Which four things move a claim from a gap to a conclusion?",
            options: ["Comparator, decision record, mechanism, authoritative finding", "Sample size, significance test, replication, peer review", "Complaint, investigation, hearing, appeal", "Statute, regulation, guidance, notice"],
            correctIndex: 0,
            explanation: "None of them is a bigger gap, and the settlement in Section 5 required the first of them from every claimant.",
            sourceLessonSlug: "numbers-alone-do-not-prove-discrimination",
          },
          {
            prompt: "How many Black farm operators did the 1920 census report?",
            options: ["925,708", "949,889, which is the colored operator count in the same census", "893,370, which is the corresponding figure for 1910", "925,710, which is the Commission's own restatement of it"],
            correctIndex: 0,
            explanation: "Volume V, chapter V, Table 4 at page 298 gives it, with owners, managers and tenants summing exactly to the total.",
            sourceLessonSlug: "operated-is-not-owned",
          },
          {
            prompt: "How many acres did Black farm operators operate in 1920?",
            options: ["41,432,182", "44,944,521, which is the colored acreage in the same census", "13,948,512, which is a later back-reported owner figure", "16,704,192, which is colored owner-operated land"],
            correctIndex: 0,
            explanation: "Table 5 at page 298 gives it, alongside 27,928,900 acres of improved land.",
            sourceLessonSlug: "operated-is-not-owned",
          },
          {
            prompt: "Why can acres owned not be read from the 1920 census?",
            options: ["The schedule never asked", "The Bureau published the figure for white operators only", "The returns were destroyed before publication", "The figure sits in an unpublished archival appendix"],
            correctIndex: 0,
            explanation: "Tenure was captured as yes-or-no questions and acreage once, split only by land use, so a part owner's owned and rented acres were never separated.",
            sourceLessonSlug: "operated-is-not-owned",
          },
          {
            prompt: "What does the 1920 census mean by colored?",
            options: ["Negro plus Indian plus Japanese plus Chinese", "Negro operators in the southern states only", "Any operator who was not a native-born white citizen", "Any operator recorded as a tenant rather than an owner"],
            correctIndex: 0,
            explanation: "Chapter IV's colored totals therefore exceed chapter V's Negro totals, and the two are not interchangeable.",
            sourceLessonSlug: "operated-is-not-owned",
          },
          {
            prompt: "What share of Black farm operators in 1920 were tenants?",
            options: ["About seventy-six per cent", "About a quarter, with owners the largest single class", "About half, split evenly with owners", "About ninety-five per cent, including managers"],
            correctIndex: 0,
            explanation: "705,070 tenants out of 925,708 operators, which is why an operated-acreage figure is mostly a figure about other people's land.",
            sourceLessonSlug: "operated-is-not-owned",
          },
          {
            prompt: "Where does the circulating 14 to 16 million acre figure come from?",
            options: ["The colored ownership bracket", "The Negro owner-operated acreage back-reported for 1920", "An estimate published by the Commission on Civil Rights", "The improved acreage within Black-operated farms"],
            correctIndex: 0,
            explanation: "It runs from the colored full-owner floor of 14,005,208 to the colored owner-operated ceiling of 16,704,192, and is usually printed beside a Negro operator count.",
            sourceLessonSlug: "operated-is-not-owned",
          },
          {
            prompt: "Why is 13,948,512 acres a ceiling rather than a measurement?",
            options: ["It counts land in farms operated by owners", "It was estimated rather than enumerated", "It covers the southern states only", "It was published thirteen years after the census"],
            correctIndex: 0,
            explanation: "A part owner's farm includes rented ground, and the source's own sentences say operated by owners even where its heading says owned.",
            sourceLessonSlug: "operated-is-not-owned",
          },
          {
            prompt: "How many operators per farm did the 1997 census collect?",
            options: ["One", "Three, matching the maximum adopted in 2002", "Four, matching the current producer maximum", "As many as each farm reported"],
            correctIndex: 0,
            explanation: "That is why the 1997 count of 18,451 is simultaneously a farm count and an operator count.",
            sourceLessonSlug: "what-the-census-counts",
          },
          {
            prompt: "What changed in the 2002 census?",
            options: ["Up to three operators per farm were collected", "The term operator was replaced by producer", "Race was recorded by observation rather than self-identification", "Farms below ten thousand dollars in sales were excluded"],
            correctIndex: 0,
            explanation: "Once a farm could report more than one operator, farms and operators stopped being the same number and the series broke.",
            sourceLessonSlug: "what-the-census-counts",
          },
          {
            prompt: "Which 2022 figure is the farm count?",
            options: ["32,653", "46,738, which counts producers alone or in combination", "41,807, which counts Black-alone producers", "5,323,654, which counts acres operated"],
            correctIndex: 0,
            explanation: "The commonly quoted figure of about 32,700 is a count of farms with a Black producer, not a count of farmers.",
            sourceLessonSlug: "what-the-census-counts",
          },
          {
            prompt: "What is the decline in Black-operated farms from 1920 to 2022?",
            options: ["About 96.5 per cent", "About 94.9 per cent, comparing farms against producers", "About 93.8 per cent, which is the 1920 to 1978 figure", "About 56.4 per cent, which is the white-operated decline"],
            correctIndex: 0,
            explanation: "About 925,710 farms in 1920 against 32,653 in 2022, comparing farms to farms.",
            sourceLessonSlug: "what-the-census-counts",
          },
          {
            prompt: "Why is the rise from 18,451 in 1997 to 32,653 in 2022 not a recovery?",
            options: ["The unit and the method both changed", "Because the later figure counts acres rather than farms", "Because 1997 was an anomalously low year", "Because the 2022 figure includes part-time operations"],
            correctIndex: 0,
            explanation: "The unit moved from operator to producer, the per-farm maximum rose twice, and coverage adjustment restated the 1997 national total upward by 15.9 per cent.",
            sourceLessonSlug: "what-the-census-counts",
          },
          {
            prompt: "What rate of loss did the Commission's 1982 forecast compound?",
            options: ["Fifty-seven per cent per decade", "Thirty-nine point eight per cent per year", "Ninety-four per cent over the whole period since 1920", "Fifty-six point four per cent, the white-operated rate"],
            correctIndex: 0,
            explanation: "The sentence before the prediction gives the preceding decade's decline in Black-operated farms, two and a half times the white rate.",
            sourceLessonSlug: "the-1982-prediction",
          },
          {
            prompt: "Does the Commission's report define the end of the next decade?",
            options: ["No", "Yes, as 1990, in its Findings section", "Yes, as 1999, in its opening chapter", "Yes, as the year of the next agricultural census"],
            correctIndex: 0,
            explanation: "The phrase appears three times and is defined nowhere, so any target year is an inference and must be labelled as one.",
            sourceLessonSlug: "the-1982-prediction",
          },
          {
            prompt: "How does the 1982 prediction fare against the 1997 census?",
            options: ["It overshot, since 18,451 is well above 10,000", "It was almost exactly right, within a few hundred farms", "It undershot, since the count fell below 10,000", "It cannot be graded, since 1997 published no racial breakdown"],
            correctIndex: 0,
            explanation: "A 57 per cent decadal rate did not continue, and the Commission's own conditional phrasing was doing real work.",
            sourceLessonSlug: "the-1982-prediction",
          },
          {
            prompt: "What happens to land when its owner dies without a will?",
            options: ["It passes to the heirs as tenants in common", "It escheats to the state until an heir petitions to reclaim it", "It vests in the eldest surviving child as trustee for the others", "It is sold by the county with the proceeds held for the heirs"],
            correctIndex: 0,
            explanation: "State intestate succession distributes the interest and the heirs hold undivided fractional shares of the whole parcel.",
            sourceLessonSlug: "land-that-passes-without-a-will",
          },
          {
            prompt: "Who may force a partition of a parcel held in common?",
            options: ["Any single co-tenant", "Only a majority of the co-tenants acting together", "Only a co-tenant holding at least a fifth of the interests", "Only a co-tenant who inherited rather than purchased"],
            correctIndex: 0,
            explanation: "The right descends from the principle that no co-owner should be trapped, and it reaches the whole parcel rather than the petitioner's share.",
            sourceLessonSlug: "the-partition-sale",
          },
          {
            prompt: "How does a speculator acquire standing to force a sale?",
            options: ["By buying a small fractional interest", "By purchasing the county's delinquent tax lien", "By recording an adverse possession claim", "By obtaining a court order voiding the co-tenancy"],
            correctIndex: 0,
            explanation: "A fractional interest is cheap because it cannot be used or resold alone, and it carries the full right to petition for partition.",
            sourceLessonSlug: "the-partition-sale",
          },
          {
            prompt: "What does the uniform act's appraisal provision forbid?",
            options: ["Discounting for fractional ownership", "Any appraisal by a person licensed in another state", "Valuing improvements separately from the land itself", "Appraisals conducted more than thirty days before the hearing"],
            correctIndex: 0,
            explanation: "The property must be valued assuming sole ownership of the fee simple estate, which removes the gap the speculator's return depended on.",
            sourceLessonSlug: "the-uniform-act-and-the-farm-number",
          },
          {
            prompt: "Is adoption of the uniform act a condition of any federal eligibility?",
            options: ["No", "Yes, a farm number cannot issue in a non-adopting state", "Yes, the relending programme is closed to borrowers in non-adopting states", "Yes, disaster payments on heirs property require an adopting state's order"],
            correctIndex: 0,
            explanation: "Adoption unlocks two documentation routes and one lender preference; the tenancy-in-common agreement, tax returns and self-certification remain available everywhere.",
            sourceLessonSlug: "the-uniform-act-and-the-farm-number",
          },
          {
            prompt: "What did the Pigford suit allege besides discrimination in programmes?",
            options: ["A failure to investigate or respond to complaints", "Destruction of the loan files of denied applicants", "Diversion of appropriated funds between counties", "Refusal to publish committee composition by race"],
            correctIndex: 0,
            explanation: "That second half is why the case could not be resolved through ordinary exhaustion, and why the settlement built its own machinery.",
            sourceLessonSlug: "what-pigford-claimed",
          },
          {
            prompt: "What did Track A require and pay?",
            options: ["Substantial evidence, for a fixed $50,000 plus relief", "Preponderance of the evidence, for a tailored award", "Clear and convincing evidence, for up to $250,000", "No evidence at all, for a flat payment to every class member"],
            correctIndex: 0,
            explanation: "The lower standard came with a capped payment, and the higher standard on Track B came with a tailored one.",
            sourceLessonSlug: "track-a-and-track-b",
          },
          {
            prompt: "What comparator did a Track A claimant have to identify?",
            options: ["A specifically identified, similarly situated white farmer", "Two other Black farmers denied credit in the same year", "A committee member who had voted against the application", "A commercial lender who had also refused the applicant"],
            correctIndex: 0,
            explanation: "Producing that comparator decades later is why the Track A denial rate reached 31 per cent.",
            sourceLessonSlug: "track-a-and-track-b",
          },
          {
            prompt: "How many Pigford I claimants prevailed on Track A, and at what rate?",
            options: ["About 15,645, which CRS gives as 69 per cent", "About 22,721, which is instead the number found eligible", "About 6,906, which is instead the number denied", "About 104, which is instead the number prevailing on Track B"],
            correctIndex: 0,
            explanation: "As of 31 December 2011, per the final Court Monitor Report published on 1 April 2012.",
            sourceLessonSlug: "what-was-decided-and-paid",
          },
          {
            prompt: "What was the approximate total relief in Pigford I?",
            options: ["$1.06 billion", "$1.25 billion, which is instead the second settlement", "$1.15 billion, which is instead a later appropriation", "$2.2 billion, which is instead a later programme"],
            correctIndex: 0,
            explanation: "CRS prints $1,058,577,198 in cash relief, estimated tax payments and debt relief.",
            sourceLessonSlug: "what-was-decided-and-paid",
          },
          {
            prompt: "Which statute supplied $1.15 billion for the second settlement?",
            options: ["The Claims Resolution Act of 2010", "The Food, Conservation and Energy Act of 2008", "The American Rescue Plan Act of 2021", "The Department of Agriculture Reorganization Act of 1994"],
            correctIndex: 0,
            explanation: "P.L. 111-291, signed 8 December 2010, supplied the balance of the $1.25 billion.",
            sourceLessonSlug: "what-was-decided-and-paid",
          },
          {
            prompt: "What did GAO-13-69R find about the Pigford II claims process?",
            options: ["Reasonable assurance, with weaknesses that could allow improper determinations", "That widespread fraud had occurred and payments should be suspended", "That the process had no internal controls of any kind", "That every flagged claim had been improperly approved"],
            correctIndex: 0,
            explanation: "It is a statement about a control system, not a finding about any particular decision, and GAO tested 150 claims and found no exceptions.",
            sourceLessonSlug: "the-criticism-in-both-directions",
          },
          {
            prompt: "What did the court-appointed Ombudsman report about fraud complaints?",
            options: ["All concerned fraud perpetrated on claimants", "All concerned fraud perpetrated by claimants", "None had been received at all", "They were split evenly between the two directions"],
            correctIndex: 0,
            explanation: "GAO records this in the same footnote in which it says its review did not examine claimant fraud.",
            sourceLessonSlug: "the-criticism-in-both-directions",
          },
          {
            prompt: "Which case issued the first nationwide preliminary injunction against ARPA section 1005?",
            options: ["Wynn v. Vilsack, on 23 June 2021", "Faust v. Vilsack, on 10 June 2021", "Miller v. Vilsack, on 1 July 2021", "Holman v. Vilsack, on 8 July 2021"],
            correctIndex: 0,
            explanation: "Faust came first but issued a temporary restraining order, which the same court dissolved on 6 July.",
            sourceLessonSlug: "the-race-neutral-rewrite",
          },
          {
            prompt: "How did section 1005 end?",
            options: ["It was repealed by the Inflation Reduction Act", "It was struck down on the merits by a federal appellate court", "Its appropriation lapsed at the end of fiscal year 2021", "It was withdrawn by the Secretary under settlement terms"],
            correctIndex: 0,
            explanation: "Section 22008 of P.L. 117-169 repealed it in one sentence, so no court ever reached the merits.",
            sourceLessonSlug: "the-race-neutral-rewrite",
          },
          {
            prompt: "What is the eligibility condition under the successor programme?",
            options: ["Having experienced discrimination in USDA farm lending before 2021", "Membership in one of five named racial or ethnic groups", "Holding an outstanding farm loan as of 1 January 2021", "Having filed a claim in one of the Pigford settlements"],
            correctIndex: 0,
            explanation: "The condition is an experience rather than an identity, which is what makes the assistance provision facially race neutral.",
            sourceLessonSlug: "the-race-neutral-rewrite",
          },
          {
            prompt: "How many people received assistance under that programme, and when was it announced?",
            options: ["Over 43,000, announced 31 July 2024", "About 34,000, announced 27 October 2011", "About 22,721, announced 14 April 1999", "About 32,653, announced 17 January 2024"],
            correctIndex: 0,
            explanation: "Over 23,000 had a farming operation and over 20,000 had planned to farm but reported being unable to get a USDA loan.",
            sourceLessonSlug: "the-race-neutral-rewrite",
          },
          {
            prompt: "Why does this course print no single figure for Black-owned farmland in 1920?",
            options: ["The census never collected acres owned", "Because the figure is disputed among historians", "Because the relevant volume could not be obtained", "Because the figure is proprietary to a private database"],
            correctIndex: 0,
            explanation: "What exists is a colored bracket and an owner-operated ceiling, each printed with its unit and its limit.",
            sourceLessonSlug: "what-this-course-refused",
          },
          {
            prompt: "What are this course's three portable questions?",
            options: ["Who decides, what is the alternative, what record survives", "How much, how soon, and at what rate of interest", "Who applied, who was approved, and in what proportion", "Which statute, which agency, and which fiscal year"],
            correctIndex: 0,
            explanation: "They ask about structure rather than content, so they can be run on a programme the asker has never studied.",
            sourceLessonSlug: "what-this-course-refused",
          },
          {
            prompt: "Which sibling course teaches the same mechanism as a funding formula?",
            options: ["The Match", "Cooperatives, on the Rural Electrification Act", "The Great Migration, on the rural South", "Financing Without Access, on capital formation"],
            correctIndex: 0,
            explanation: "A benefit is created, a class is excluded, a separate smaller channel is built, and that channel is made conditional on a payment by the party that excluded them.",
            sourceLessonSlug: "what-this-course-refused",
          },
        ],
      },
    },
  ],
};
