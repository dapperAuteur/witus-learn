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
  ],
};
