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
    "PLACEHOLDER",
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
  ],
};
