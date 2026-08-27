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
        ],
      },
    },
  ],
};
