import type { AuthoredCourse } from "./authored-course";

// MONEY-06 · "Housing: the Lease, the Loan Estimate, and the Map" (Money & Property). Source brief:
// plans/future-courses/2026-08-27-15-personal-finance-track-research.md, sections 4.9, 7 and 10.
// Sixth course of the `personal-money` series, code MONEY. Tier 0.
//
// THE SPINE, and the sentence the whole course is built to keep true:
// A HOUSING DECISION IS A CHOICE BETWEEN TWO CONTRACTS, AND ALMOST EVERY TERM THAT MATTERS IS
// ALREADY WRITTEN DOWN ON A FORM SOMEBODY IS REQUIRED TO GIVE YOU.
// This is not a course about whether to rent or to buy. It refuses to answer that question on
// purpose. It is a course about the lease, the note, the Loan Estimate, the Closing Disclosure, the
// appraisal, and the recorded covenant: what each document is, who is required to produce it, when,
// and what the law says it must contain.
//
// WHY THIS CATALOG, AND NOT A GENERIC HOME-BUYING COURSE. The connection is already shipped, in
// three courses this one links by name in the LESSONS rather than only in this comment:
//   · `what-they-built` teaches how Black business districts capitalised themselves when banks
//     would not lend, including the building and loan association as the instrument that did it.
//   · `the-county-committee` (WARRANT-02) teaches a federal credit gate administered locally, which
//     is the same shape as a mortgage underwriting decision one level up.
//   · `financing-without-access` teaches the PROCEDURE for reading any exclusion: ask which door was
//     closed, what pool replaced it, and who bears the risk.
//   · `credit-decisions` (MONEY-01) taught the consumer report a mortgage underwriter reads, so this
//     course assumes it and does not re-teach it.
// The history half of this course therefore LINKS rather than re-narrates. Its own contribution is
// the modern document: the covenant is still in the county land record, and in Arizona a statute
// says what an owner may record to amend it.
//
// EVERY PRIMARY DOCUMENT IN THIS FILE WAS FETCHED AND READ ON 28 AUGUST 2026, not summarised from
// memory. The statutory and regulatory spine:
//   · TILA: 15 U.S.C. 1601(a) (meaningful disclosure so a consumer can "compare more readily").
//   · RESPA: 12 U.S.C. 2601(a) and (b) (the findings and the four purposes), 2607(a), (b) and
//     (d)(1) (referral fees, split charges, and the criminal penalty).
//   · Regulation Z: 12 CFR 1026.2(a)(3)(i) and (ii) (what an "application" is, and the six items
//     that make one), 1026.19(e)(1)(i) and (e)(1)(iii)(A) and (B) (the Loan Estimate and its two
//     deadlines), 1026.19(e)(3)(i) and (e)(3)(ii) (good faith: zero tolerance, and the 10 percent
//     aggregate), 1026.19(f)(1)(i) and (f)(1)(ii)(A) (the Closing Disclosure and the three-business
//     -day rule), 1026.37 (the Loan Estimate's contents, headings (a) through (o), the Loan Terms
//     table at (b) and the Comparisons table at (l)), 1026.38 (the Closing Disclosure's contents,
//     headings (a) through (t), and the Loan Calculations at (o)).
//   · ECOA / Regulation B: 15 U.S.C. 1691, and 12 CFR 1002.14(a)(1), (a)(2), (a)(3) and (b)(3),
//     the free copy of every appraisal and written valuation.
//   · Title XI of FIRREA: 12 U.S.C. 3331 (why federally related transactions require an appraisal).
//   · Fair Housing Act: 42 U.S.C. 3601 (the one-sentence declaration of policy), 3604(a), (b) and
//     (c), 3605(a), (b) and (c) (residential real estate-related transactions, which the statute
//     defines to include appraising), 3610(a)(1)(A)(i) (one year to HUD) and 3613(a)(1)(A) (two
//     years to court).
//   · HUD's regulation: 24 CFR 100.135(a), (b), (c) and (d).
//   · HMDA: 12 U.S.C. 2801(a) and (b), which is Congress's own written finding about lending and
//     the decline of geographic areas, and the reason the public data exists.
//   · 26 U.S.C. 121(a) and (b), and 26 U.S.C. 163(h), both taught as CONDITIONAL and both dated.
//   · Shelley v. Kraemer, 334 U.S. 1 (1948), decided 3 May 1948.
//   · Arizona, used as ONE LABELLED STATE and never as a national rule: A.R.S. 33-1321 (security
//     deposits), 33-1368 (the five-day notices), 33-532 and 33-533 (the Uniform Unlawful
//     Restrictions in Land Records Act), and 32-2107.01 (the recorded disclaimer).
//
// FOUR THINGS THIS COURSE REFUSES TO DO, RECORDED HERE SO A LATER EDITOR CANNOT SOFTEN ONE WITHOUT
// SEEING THAT IT WAS A DECISION.
//   1. IT DOES NOT TELL ANYONE WHETHER TO RENT OR TO BUY, and it gives no financial advice of any
//      kind. It names no lender, broker, bank, insurer, servicer or platform as a good one, and it
//      promises no outcome. Said in PROSE in three places, per the posture `surplus-funds-basics`
//      established and `credit-decisions` inherited: Section 1 lesson 1, Section 4 lesson 3, and the
//      capstone. A registry entry a landing page renders is necessary and not sufficient, because a
//      learner in lesson 15 never saw the landing page.
//   2. IT PRINTS NO INTEREST RATE, AND NO CURRENT PROGRAMME FIGURE. Rates move weekly; loan limits,
//      agency programme rules and tax treatment are reset on their own schedules. Where the
//      arithmetic needs a number the number is labelled a HYPOTHETICAL chosen to make the shape
//      visible, never a market rate. Every real figure carries its date IN the lesson.
//   3. IT STATES NO NATIONAL RULE ABOUT LANDLORD AND TENANT LAW. That law is state law and the
//      variation is enormous, so Section 1 teaches the METHOD for finding the governing statute and
//      demonstrates it on ONE state, Arizona, labelled as such every time it appears.
//   4. IT DOES NOT DESCRIBE ANY AGENCY'S CURRENT FOOTING IN THE PRESENT TENSE. Statutes and
//      regulations are the durable layer; who is writing, supervising and enforcing them at any
//      moment is not. Where a source was published by a task force whose host no longer resolves,
//      the course says so instead of citing a dead address, and it is filed as a research check.
//
// House style, inherited from MONEY-01: `section` on every lesson; flush-left single-line
// `:::reveal q ||| a`; a `## Vocabulary` block of 3-6 lesson-specific terms; APA 7 `## Sources`
// with a stable URL; a quiz per teaching section (pool sized by density, serving 5, passing 80,
// shuffled) plus a final serving 10; every question carries `explanation` and `sourceLessonSlug`.
// Correct options are written SHORT and distractors long and specific, so `check-longest-option`
// passes by construction rather than by post-hoc trimming.
export const HOUSING_DECISIONS_COURSE: AuthoredCourse = {
  title: "Housing: the Lease, the Loan Estimate, and the Map",
  description:
    "A housing decision is not a choice between two lifestyles. It is a choice between two contracts, and almost every term that matters is already written on a document somebody is legally required to hand you. This course will not tell you whether to rent or to buy, and it gives no financial advice. It teaches the machinery instead. A lease buys a right to occupy for a term; a mortgage loan buys money and pledges the property back as security, which is why the early payments are almost all interest and why the schedule that proves it is arithmetic anyone can do. Renting is governed by state law, which means there is no national answer about deposits, notice or eviction, so the course teaches how to find the statute that governs your own address and demonstrates the method on one labelled state rather than printing a table that would be wrong in forty-nine places. Buying is governed by two federal forms designed to be laid side by side: the Loan Estimate, which a creditor must deliver within three business days of an application, itself defined as six specific pieces of information, and the Closing Disclosure, which the consumer must receive at least three business days before consummation. Between them sit the good-faith rules that decide which quoted costs may move and by how much, the annual percentage rate that the form itself says is not your interest rate, and the total interest percentage, which states what the loan costs as a share of what was borrowed. The comparison of renting against buying is then done honestly, in the same units, over a stated horizon, with the transaction costs on both ends counted, because the familiar claim that renting throws money away is a conclusion with no arithmetic attached. The last third turns to valuation and to the record. An appraisal is an opinion of value, you are entitled to a free copy of every one, and appraising is written into the Fair Housing Act's own definition of a covered transaction. Then the map: racially restrictive covenants are still in the county land records, a 1948 Supreme Court decision made them judicially unenforceable without erasing them, a university project has mapped hundreds of them in one city, and in at least one state a statute says exactly what an owner may record to strike one from their own deed. It closes by having you read one real document about your own housing.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1 — Two contracts, and the law that fills the gaps
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "two-contracts-one-question",
      title: "1 · Two contracts, and a question asked badly",
      section: "Section 1 · Two contracts, and the law that fills the gaps",
      body: `You are not choosing between two lifestyles. You are choosing between two contracts.

A **lease** buys you the right to occupy a specific property for a stated term at a stated price. A **mortgage loan** buys you money. You use the money to buy the property, and you pledge the property back to the lender as security for repaying it. One is a right to possess. The other is a debt with the roof as collateral. Almost everything people argue about follows from those two sentences.

**The sentence this course was written against.** "Renting is throwing money away" is not an analysis. It is a conclusion with no arithmetic attached, and it survives because it sounds like arithmetic. A rent payment and a mortgage payment are both payments for housing. The honest question is what each one buys, what part of each is gone permanently, and over what period you are counting. Interest is gone. Property tax is gone. Insurance is gone. Maintenance is gone. The commission on the way out is gone. One part of a mortgage payment does buy an ownership stake, and that part is real and countable. Section 4 does the comparison properly, in the same units, with the assumptions written down where you can change them.

**What this course is.** It is a course about the documents that govern housing decisions, and about the rules that make those documents say what they say. Two of them are federal forms designed to be compared, and you can hold both.

**What this course is not, said plainly here and said again twice more.** It is not financial advice and it will not give you any. **It will not tell you whether to rent or to buy.** That is a decision about your income, your household, your work, your health and how long you expect to stay, and this course knows none of that. It will not name a lender, a broker, a bank, an insurer or a platform as a good one, and it will not promise you an outcome. What it will do is put the mechanism and the primary documents in your hands, because those are public, free, and written down.

**Three habits come with that promise.**

1. **Every figure carries a date in the lesson.** Financial specifics go stale silently, and an undated number is a claim someone will still be repeating in five years.
2. **This course teaches a method rather than a table.** Interest rates move weekly. Loan limits, agency programme rules and tax treatment are reset on their own schedules. Landlord and tenant law is fifty different laws. A summary table of any of those would be wrong before you finished reading it, so where a table would be convenient and wrong you get the statute and the way to check it.
3. **Nothing here is a national rule unless a federal statute makes it one.** That distinction does more work in this course than anywhere else in the series, because the mortgage disclosures are federal and nearly everything about renting is not.

**Two federal statutes set up the whole middle of the course, and both say why they exist.** The Truth in Lending Act states its purpose as assuring "a meaningful disclosure of credit terms so that the consumer will be able to compare more readily the various credit terms available to him and avoid the uninformed use of credit" (15 U.S.C. § 1601, n.d.). The Real Estate Settlement Procedures Act states that its purpose is to produce "more effective advance disclosure to home buyers and sellers of settlement costs" and "the elimination of kickbacks or referral fees that tend to increase unnecessarily the costs of certain settlement services" (12 U.S.C. § 2601, n.d.). Comparison is not a nice side effect of those forms. It is the reason Congress required them.

**Where this sits in the series.** MONEY-01 taught how a credit decision is made about a record you did not write. A mortgage underwriter reads that record, so this course assumes it rather than repeating it.

:::reveal What two contracts is a housing decision actually a choice between? ||| A lease, which buys the right to occupy for a term, and a mortgage loan, which buys money and pledges the property back as security.

:::reveal Why does this course say that "renting is throwing money away" is not an analysis? ||| Because it is a conclusion with no arithmetic attached. Interest, tax, insurance, maintenance and the commission are gone in the same way rent is.

:::reveal What does the Truth in Lending Act give as its own purpose? ||| A meaningful disclosure of credit terms so the consumer can compare more readily and avoid the uninformed use of credit.

## Vocabulary
- **Lease**: a contract that conveys the right to occupy a specific property for a stated term at a stated price, leaving ownership with the landlord.
- **Mortgage loan**: a loan of money used to buy property, in which the property itself is pledged back to the lender as security for repayment.
- **Collateral**: the property a borrower pledges, which the lender may proceed against if the borrower does not repay.
- **Horizon**: the length of time a comparison is counted over, which has to be stated before any rent-against-buy arithmetic means anything.

## Sources
15 U.S.C. § 1601. (n.d.). *Congressional findings and declaration of purpose*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/15/1601

12 U.S.C. § 2601. (n.d.). *Congressional findings and purpose*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/12/2601`,
    },
    {
      slug: "the-lease-is-the-document",
      title: "2 · The lease is the document, and the state supplies the rest",
      section: "Section 1 · Two contracts, and the law that fills the gaps",
      body: `A lease does two things at once, and confusing them is how most tenants lose arguments.

**First, it conveys possession.** For the term it names, the tenant, not the owner, has the right to be in the property. That is why a landlord who wants a tenant out generally has to go to a court to get an order, rather than simply taking back what they own. **Second, it sets terms**: the rent, the due date, what may be charged, what each side must maintain, and what counts as a breach.

**Everything the lease does not say is supplied by law, and that law is state law.** This is the single most important structural fact about renting in the United States, and it is why this course will not give you a national rule about deposits, notice periods, or eviction. There is no national rule. There are fifty-one of them, they differ enormously, several were rewritten in the last decade, and a city or county ordinance can add more on top. A course that printed a summary table would be handing most of its readers a confident answer about somebody else's state.

**So here is the method, which travels even though the answers do not.** Four questions, asked in this order.

1. **Which body of law governs this address?** Start with the state code and look for the chapter or title named for landlords and tenants. Many states adopted some version of a model act written for exactly this subject, which is why the structure often looks familiar across states even when the numbers do not match. Then check whether the city or county has its own ordinance, because local rules layer on top rather than replacing the state law.
2. **What does the statute require whether or not my lease says it?** Some terms are set by law and cannot be contracted away. Those are the ones worth finding first, because they are true for you even if the lease is silent or says the opposite.
3. **What does my lease say, read against that?** Now the document is readable, because you know which of its terms are choices and which are restatements of law.
4. **What is the deadline, and who enforces it?** Almost every tenant remedy has a clock attached. The clock is what usually decides the outcome.

**One state, worked, and labelled every time.** Arizona's residential landlord and tenant law is Title 33, Chapter 10 of the Arizona Revised Statutes, the Arizona Residential Landlord and Tenant Act, running from section 33-1301 through 33-1381. That chapter is where an Arizona tenant finds the answers to the four questions above. This course uses Arizona as its worked example because Section 6 returns to Arizona for the land records, so one state's code carries both halves of the course. **What is true in Arizona is not true in your state unless your state says so.** Arizona is a demonstration of where to look, not a statement of what you will find.

**A note on why the lease still matters after all that.** The statute sets a floor, not the whole agreement. Within the floor, the lease is the contract, and courts read contracts. The two documents work together: the statute tells you what cannot be done to you, and the lease tells you what you agreed to. And almost every dispute in this area is decided on documents rather than recollection, which is why the signed lease, the move-in condition record and the written notices each side sent do more work than anyone's memory of what was said.

:::reveal What are the two distinct things a lease does? ||| It conveys the right to possess the property for the term, and it sets the terms, including rent, charges, maintenance duties and what counts as a breach.

:::reveal Why does this course refuse to state a national rule about deposits or eviction? ||| Because landlord and tenant law is state law. There is no national rule, the variation is enormous, and a local ordinance can add more on top.

:::reveal Which four questions make up the method for finding the law that governs a tenancy? ||| Which body of law governs this address, what does the statute require regardless of the lease, what does the lease say read against that, and what is the deadline.

## Vocabulary
- **Possession**: the right to be in and use the property, which a lease transfers to the tenant for the term, and which is why removing a tenant is normally a court process.
- **State law**: the body of statute that supplies every term the lease leaves out, and the reason there is no single national answer about renting.
- **Local ordinance**: a city or county rule that layers on top of state landlord and tenant law rather than replacing it.
- **Arizona Residential Landlord and Tenant Act**: Title 33, Chapter 10 of the Arizona Revised Statutes, sections 33-1301 to 33-1381, used in this course as one labelled worked example.

## Sources
Arizona Revised Statutes, tit. 33, ch. 10. (n.d.). *Arizona Residential Landlord and Tenant Act*. Arizona State Legislature. https://www.azleg.gov/arsDetail/?title=33`,
    },
    {
      slug: "the-deposit-and-the-clock",
      title: "3 · The deposit, the clock, and where recourse actually lives",
      section: "Section 1 · Two contracts, and the law that fills the gaps",
      body: `A security deposit is the landlord's money in hand against your performance. Every fight about one is a fight about the same four questions, and those four questions are what you carry to any state.

**How much may be held. Whether a charge may be called nonrefundable. When the money has to come back. And what has to be itemised when it does not all come back.**

**Arizona, as one labelled state, answers all four in a single section.** Arizona Revised Statutes section 33-1321 provides that "A landlord shall not demand or receive security, however denominated, including prepaid rent in an amount or value of more than one and one-half month's rent" (A.R.S. § 33-1321, n.d.). On labelling, the same section provides that "The purpose of all nonrefundable fees or deposits shall be stated in writing by the landlord. Any fee or deposit not designated as nonrefundable is refundable" (A.R.S. § 33-1321, n.d.). That second sentence is a default rule doing real work: silence is resolved in the tenant's favour.

**The move-in record is in the statute too**, which tells you how much of this is about proof. Arizona requires that on move in a landlord furnish the tenant "with a signed copy of the lease, a move-in form for specifying any existing damages to the dwelling unit and written notification to the tenant that the tenant may be present at the move-out inspection" (A.R.S. § 33-1321, n.d.).

**And then the clock.** Arizona provides that "Within fourteen days, excluding Saturdays, Sundays or other legal holidays, after termination of the tenancy and delivery of possession and demand by the tenant the landlord shall provide the tenant an itemized list of all deductions together with the amount due and payable to the tenant, if any" (A.R.S. § 33-1321, n.d.). Read that clause carefully, because it is typical of how these statutes are built: the clock does not start at move out alone. It starts on termination, delivery of possession, **and demand by the tenant**. A tenant who never asks may be waiting on a clock that never started.

**The other clock is the one that ends a tenancy.** Arizona's section 33-1368 sets two of them. Where a tenant's noncompliance materially affects health and safety, the landlord may deliver written notice specifying the acts and omissions "and that the rental agreement will terminate on a date not less than five days after receipt of the notice if the breach is not remedied in five days" (A.R.S. § 33-1368, n.d.). For rent, the statute provides that where rent is unpaid and the tenant fails to pay "within five days after written notice by the landlord of nonpayment and the landlord's intention to terminate the rental agreement if the rent is not paid within that period of time, the landlord may terminate the rental agreement by filing a special detainer action pursuant to section 33-1377" (A.R.S. § 33-1368, n.d.).

**Notice what the landlord does at the end of that sentence.** The landlord files an action. Termination is the start of a court case, not the end of the tenancy by the landlord's own hand. That shape is common, though the notice periods and the name of the action are not.

**So the transferable skill is a shape, not a number.** For any state, find the statute, then find four things: the cap, the labelling rule, the deadline, and the remedy. Then find the deadline that applies to YOU, because a tenant remedy that expired is not a remedy. **Recourse in this area lives in state courts.** This course is not telling you to file anything. It is telling you where the answer to "who decides this" is written.

:::reveal What four questions does every security-deposit dispute come down to? ||| How much may be held, whether a charge may be called nonrefundable, when the money must come back, and what must be itemised.

:::reveal In Arizona, what happens to a fee that the landlord did not designate as nonrefundable in writing? ||| It is refundable. The statute says any fee or deposit not designated as nonrefundable is refundable.

:::reveal What three things start Arizona's fourteen-day deposit clock? ||| Termination of the tenancy, delivery of possession, and demand by the tenant. A tenant who never demands may be waiting on a clock that never started.

## Vocabulary
- **Security deposit**: money a landlord holds against a tenant's performance, governed by a state statute that sets the cap, the labelling rule, the deadline and the remedy.
- **Nonrefundable fee**: a charge the landlord keeps regardless of condition, which some states require to be designated as such in writing before it may be kept.
- **Itemized list of deductions**: the written accounting a landlord must supply for anything withheld from a deposit, on the deadline the state's statute sets.
- **Special detainer**: the name Arizona gives the court action a landlord files to end a tenancy for nonpayment, which is a court process rather than a self-help remedy.

## Sources
Arizona Revised Statutes § 33-1321. (n.d.). *Security deposits*. Arizona State Legislature. https://www.azleg.gov/ars/33/01321.htm

Arizona Revised Statutes § 33-1368. (n.d.). *Noncompliance with rental agreement by tenant; failure to pay rent; utility discontinuation; liability for guests; definition*. Arizona State Legislature. https://www.azleg.gov/ars/33/01368.htm`,
    },
    {
      slug: "quiz-two-contracts",
      title: "4 · Knowledge check: two contracts, and the law that fills the gaps",
      section: "Section 1 · Two contracts, and the law that fills the gaps",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "According to this course, a housing decision is a choice between what?",
            options: ["Two contracts", "Two neighbourhoods with different school districts and commuting distances", "Two savings strategies, one building equity and one preserving liquidity", "Two tax positions, one that permits itemising and one that does not"],
            correctIndex: 0,
            explanation: "A lease conveys a right to occupy for a term, and a mortgage loan lends money against the property as security.",
            sourceLessonSlug: "two-contracts-one-question",
          },
          {
            prompt: "What does a lease buy the tenant?",
            options: ["A right to occupy", "A share of the property's value that grows with each monthly payment made", "An option to purchase the property at the end of the stated term", "A claim against the landlord's lender if the building changes hands"],
            correctIndex: 0,
            explanation: "It is possession of a specific property for a stated term at a stated price, with ownership staying where it was.",
            sourceLessonSlug: "two-contracts-one-question",
          },
          {
            prompt: "What does a mortgage loan actually buy the borrower?",
            options: ["Money", "The property itself, which the lender conveys directly to the borrower at closing", "A guarantee from the lender that the property is worth the price agreed", "An insurance policy that repays the balance if the property loses value"],
            correctIndex: 0,
            explanation: "The borrower uses the money to buy the property and then pledges that property back to the lender as security.",
            sourceLessonSlug: "two-contracts-one-question",
          },
          {
            prompt: "Why does this course say that \"renting is throwing money away\" is not an analysis?",
            options: ["No arithmetic is attached", "Because rent and mortgage payments are set by completely different bodies of law", "Because renters in most states recover a share of their payments when they move out", "Because the phrase was coined by an industry that profits when people buy homes"],
            correctIndex: 0,
            explanation: "It is a conclusion that sounds like arithmetic, and interest, tax, insurance and commission are gone in the same way rent is.",
            sourceLessonSlug: "two-contracts-one-question",
          },
          {
            prompt: "Which part of a mortgage payment does the course say genuinely buys an ownership stake?",
            options: ["The principal", "The escrowed portion set aside for property tax and homeowner's insurance", "The interest, which the lender credits against the outstanding balance each month", "The mortgage insurance premium, which protects the borrower's equity position"],
            correctIndex: 0,
            explanation: "Interest, tax, insurance, maintenance and the eventual commission are gone; only the principal portion buys a stake.",
            sourceLessonSlug: "two-contracts-one-question",
          },
          {
            prompt: "Which question does this course expressly refuse to answer?",
            options: ["Whether to rent or buy", "How a creditor is required to compute the annual percentage rate it discloses", "What a landlord must itemise when withholding money from a security deposit", "Which federal statute defines a residential real estate-related transaction"],
            correctIndex: 0,
            explanation: "That decision depends on income, household, work, health and expected length of stay, none of which the course knows.",
            sourceLessonSlug: "two-contracts-one-question",
          },
          {
            prompt: "Which of these will this course NOT do?",
            options: ["Name a good lender", "Quote the purpose clause of a federal statute that governs mortgage disclosure", "Explain what a creditor must deliver after receiving a completed loan application", "Describe how a state statute sets the deadline for returning a security deposit"],
            correctIndex: 0,
            explanation: "It names no lender, broker, bank, insurer or platform as a recommendation, and it promises no outcome.",
            sourceLessonSlug: "two-contracts-one-question",
          },
          {
            prompt: "Why does every figure in this course carry a date in the lesson?",
            options: ["Figures go stale silently", "Because federal law requires an educational publisher to date any claim about mortgage costs", "Because an undated figure cannot be entered as evidence in a landlord and tenant dispute", "Because the catalog's citation tooling refuses to extract a source without a date beside it"],
            correctIndex: 0,
            explanation: "An undated number is a claim someone will still be repeating in five years without knowing it has moved.",
            sourceLessonSlug: "two-contracts-one-question",
          },
          {
            prompt: "Why does this course teach a method rather than a summary table?",
            options: ["Tables go stale", "Because a table of state rules would be too long to render legibly on a mobile screen", "Because summarising another publisher's standards text would infringe that publisher's rights", "Because the underlying federal disclosure forms are redesigned on a published annual cycle"],
            correctIndex: 0,
            explanation: "Rates move weekly, programme rules reset on their own schedules, and landlord and tenant law is fifty separate laws.",
            sourceLessonSlug: "two-contracts-one-question",
          },
          {
            prompt: "In this course, when is a housing rule treated as a national rule?",
            options: ["When a federal statute makes it one", "Whenever a majority of states have adopted a substantially similar provision", "Whenever a federal agency has published guidance describing the practice as standard", "Whenever the same term appears in the model act that most states worked from"],
            correctIndex: 0,
            explanation: "The mortgage disclosures are federal and nearly everything about renting is not, which is why the distinction matters here.",
            sourceLessonSlug: "two-contracts-one-question",
          },
          {
            prompt: "What purpose does the Truth in Lending Act state for itself?",
            options: ["Meaningful disclosure of credit terms", "Setting a ceiling on the interest a lender may charge a consumer borrower", "Requiring every creditor to explain in writing why an application was refused", "Guaranteeing that a consumer may cancel a mortgage within three days of signing"],
            correctIndex: 0,
            explanation: "The stated aim is that the consumer can compare more readily and avoid the uninformed use of credit.",
            sourceLessonSlug: "two-contracts-one-question",
          },
          {
            prompt: "According to the Truth in Lending Act's own words, what should disclosure let the consumer do?",
            options: ["Compare more readily", "Recover damages from any creditor whose disclosure later proves inaccurate", "Obtain the same rate from any lender that competes for the same business", "Understand the total household budget within which a payment has to fit"],
            correctIndex: 0,
            explanation: "The statute pairs comparing more readily with avoiding the uninformed use of credit as the reason for disclosure.",
            sourceLessonSlug: "two-contracts-one-question",
          },
          {
            prompt: "Which purpose does the Real Estate Settlement Procedures Act state for itself?",
            options: ["Advance disclosure of settlement costs", "Standardising the commission a real estate broker may charge on a residential sale", "Requiring a lender to hold a closing at a settlement agent chosen by the buyer", "Setting a national ceiling on the fees a title insurance company may collect"],
            correctIndex: 0,
            explanation: "Its stated purposes include more effective advance disclosure to home buyers and sellers, and the elimination of kickbacks and referral fees.",
            sourceLessonSlug: "two-contracts-one-question",
          },
          {
            prompt: "Which practice does RESPA name in its own purpose clause as something to eliminate?",
            options: ["Kickbacks and referral fees", "Advertising a mortgage rate the lender does not intend to make available", "Charging a borrower for an appraisal the lender never actually ordered", "Requiring a borrower to accept the lender's own title insurance affiliate"],
            correctIndex: 0,
            explanation: "The statute says such fees tend to increase unnecessarily the costs of certain settlement services.",
            sourceLessonSlug: "two-contracts-one-question",
          },
          {
            prompt: "What does this course say comparison is, in relation to the federal mortgage forms?",
            options: ["The reason they exist", "A convenience the industry added after the forms were already required", "An option a borrower may request from a lender before an application is filed", "A feature of the forms that applies only to loans sold into the secondary market"],
            correctIndex: 0,
            explanation: "Both TILA and RESPA state disclosure and comparison as their own purposes, so it is the point rather than a side effect.",
            sourceLessonSlug: "two-contracts-one-question",
          },
          {
            prompt: "Which earlier course in this series does this one assume rather than repeat?",
            options: ["MONEY-01, on credit decisions", "MONEY-04, on predatory products and the conversion of a flat fee into a rate", "MONEY-05, on filing a domestic tax return and choosing between filing statuses", "MONEY-02, on the identity documents a bank must collect before opening an account"],
            correctIndex: 0,
            explanation: "A mortgage underwriter reads the consumer report that MONEY-01 teaches, so this course builds on it.",
            sourceLessonSlug: "two-contracts-one-question",
          },
          {
            prompt: "What is collateral, as this course uses the term?",
            options: ["Property pledged to a lender", "A deposit the buyer leaves with a broker while an offer is being considered", "A guarantee from a third party that the borrower will make every payment", "An insurance policy that repays the lender if the borrower loses employment"],
            correctIndex: 0,
            explanation: "It is what the lender may proceed against if the borrower does not repay, and in a mortgage it is the property itself.",
            sourceLessonSlug: "two-contracts-one-question",
          },
          {
            prompt: "What does the course mean by the horizon of a rent-against-buy comparison?",
            options: ["The period counted over", "The point at which the loan balance falls below the property's assessed value", "The maximum term a lender is willing to write for a first-lien residential loan", "The date after which a seller may exclude gain from the sale of a residence"],
            correctIndex: 0,
            explanation: "It has to be stated before any comparison means anything, because the answer changes with the length of the count.",
            sourceLessonSlug: "two-contracts-one-question",
          },
          {
            prompt: "Which costs does the course list as gone permanently for an owner?",
            options: ["Interest, tax, insurance, maintenance", "Principal, escrow, and the down payment placed at closing", "The appraisal fee alone, since every other closing cost is recovered on sale", "Nothing, because an owner recovers every housing cost when the property is sold"],
            correctIndex: 0,
            explanation: "The commission on the way out joins that list, which is why the familiar throwing-money-away framing collapses.",
            sourceLessonSlug: "two-contracts-one-question",
          },
          {
            prompt: "Why does the course say the rent-against-buy comparison belongs in Section 4 rather than here?",
            options: ["It needs stated assumptions", "Because the arithmetic depends on a current interest rate the course will publish later", "Because the comparison is only valid once a learner has an actual Loan Estimate in hand", "Because federal law forbids presenting the comparison before the disclosures are explained"],
            correctIndex: 0,
            explanation: "The comparison is done in the same units over a stated horizon, with the assumptions written down where a reader can change them.",
            sourceLessonSlug: "two-contracts-one-question",
          },
          {
            prompt: "How many separate bodies of landlord and tenant law does the course say a national rule would have to cover?",
            options: ["Fifty-one", "One, because the Fair Housing Act preempts state law on residential tenancies", "Twelve, one for each federal reserve district that supervises residential lending", "Two, a federal floor and a single uniform act that every state adopted verbatim"],
            correctIndex: 0,
            explanation: "The course counts the states and the District, and notes that a city or county ordinance can add more on top.",
            sourceLessonSlug: "two-contracts-one-question",
          },
          {
            prompt: "What kind of statement does the course say an undated financial figure becomes?",
            options: ["A claim people keep repeating", "A representation that a federal regulator may treat as a deceptive practice", "A citation that the catalog's own tooling will refuse to index or publish", "An estimate that is presumed accurate until a learner proves otherwise"],
            correctIndex: 0,
            explanation: "The date is what lets a reader know when to go and re-check the number for themselves.",
            sourceLessonSlug: "two-contracts-one-question",
          },
          {
            prompt: "What does the course promise to put in the learner's hands instead of advice?",
            options: ["The mechanism and the documents", "A ranked list of the lenders that most often approve first-time applicants", "A worksheet that returns a recommendation once the learner enters their income", "A projection of what a given household would save by buying rather than renting"],
            correctIndex: 0,
            explanation: "Those are public, free and written down, which is exactly why the course can give them and cannot give advice.",
            sourceLessonSlug: "two-contracts-one-question",
          },
          {
            prompt: "Which two things does a lease do at once?",
            options: ["Conveys possession and sets terms", "Transfers ownership and creates a lien in favour of the landlord's mortgage lender", "Waives the tenant's statutory rights and substitutes the landlord's own written rules", "Registers the tenancy with the state and fixes the rent for the property's next occupant"],
            correctIndex: 0,
            explanation: "Confusing the two is how most tenants lose arguments, because the terms are negotiable and possession is not merely a courtesy.",
            sourceLessonSlug: "the-lease-is-the-document",
          },
          {
            prompt: "Because a lease conveys possession, what does a landlord who wants a tenant out generally have to do?",
            options: ["Go to court", "Give notice to the state agency that registers residential rental properties", "Repay the tenant's deposit in full before the tenancy can be brought to an end", "Offer the tenant a replacement property of a comparable size in the same area"],
            correctIndex: 0,
            explanation: "For the term of the lease the tenant, not the owner, has the right to be in the property, so removal is normally a court process.",
            sourceLessonSlug: "the-lease-is-the-document",
          },
          {
            prompt: "Who supplies everything a lease does not say?",
            options: ["State law", "The landlord, whose written house rules become part of the agreement", "The federal Department of Housing and Urban Development, by regulation", "The county recorder, through the covenants recorded against the property"],
            correctIndex: 0,
            explanation: "This is why the course refuses a national rule about deposits, notice periods or eviction.",
            sourceLessonSlug: "the-lease-is-the-document",
          },
          {
            prompt: "What is the first question in the course's four-question method for a tenancy?",
            options: ["Which law governs this address", "Whether the landlord holds a licence issued by the state real estate commissioner", "Whether the lease was signed before or after the property last changed ownership", "How much rent comparable properties in the same neighbourhood currently command"],
            correctIndex: 0,
            explanation: "That means the state code's landlord and tenant chapter first, then any city or county ordinance layered on top.",
            sourceLessonSlug: "the-lease-is-the-document",
          },
          {
            prompt: "In the course's method, what is the second question a tenant should ask?",
            options: ["What the statute requires regardless", "Which local court would hear a dispute between the parties to this agreement", "What the landlord's insurer requires as a condition of covering the building", "Whether the lease term is long enough to justify the cost of moving in"],
            correctIndex: 0,
            explanation: "Some terms are set by law and cannot be contracted away, and those are true even where the lease is silent or says the opposite.",
            sourceLessonSlug: "the-lease-is-the-document",
          },
          {
            prompt: "Why does the method put reading the lease third rather than first?",
            options: ["The law makes it readable", "Because a lease has no effect until the governing state statute has been located", "Because a tenant may not lawfully sign a lease before consulting the state code", "Because leases are drafted after the state publishes its annual tenancy regulations"],
            correctIndex: 0,
            explanation: "Once you know which terms are choices and which merely restate law, the document tells you something it could not tell you before.",
            sourceLessonSlug: "the-lease-is-the-document",
          },
          {
            prompt: "What is the fourth question in the method, and why does the course say it decides outcomes?",
            options: ["The deadline", "The rent, because the amount at stake determines which court will hear a claim", "The landlord's identity, because an out-of-state owner is treated differently", "The lease term, because a longer tenancy attracts a broader set of protections"],
            correctIndex: 0,
            explanation: "Almost every tenant remedy has a clock attached, and the clock is usually what decides the result.",
            sourceLessonSlug: "the-lease-is-the-document",
          },
          {
            prompt: "How do local ordinances interact with state landlord and tenant law?",
            options: ["They layer on top", "They replace the state statute entirely within the city or county limits", "They apply only to buildings constructed after the ordinance was adopted", "They bind the landlord but create no rights a tenant can raise in court"],
            correctIndex: 0,
            explanation: "That is why the method checks the city or county after the state code rather than instead of it.",
            sourceLessonSlug: "the-lease-is-the-document",
          },
          {
            prompt: "Which state does this course use as its single worked example, and why?",
            options: ["Arizona, because Section 6 returns there", "Texas, because its education standards name renting against buying explicitly", "Illinois, because its financial literacy strand names mortgage lending by name", "Nevada, because its financial literacy standards devote a strand to housing"],
            correctIndex: 0,
            explanation: "Using one state for both the tenancy law and the land records means a single code carries both halves of the course.",
            sourceLessonSlug: "the-lease-is-the-document",
          },
          {
            prompt: "Where in the Arizona Revised Statutes is the residential landlord and tenant law?",
            options: ["Title 33, Chapter 10", "Title 32, Chapter 20, which also governs real estate licensing in the state", "Title 12, Chapter 8, which sets out the procedure for civil actions generally", "Title 44, Chapter 9, which covers consumer transactions and deceptive practices"],
            correctIndex: 0,
            explanation: "The Arizona Residential Landlord and Tenant Act runs from section 33-1301 through 33-1381.",
            sourceLessonSlug: "the-lease-is-the-document",
          },
          {
            prompt: "What does the course say about applying Arizona's rules to another state?",
            options: ["They do not apply", "They apply unless the other state has enacted a conflicting provision", "They apply in any state that adopted the same model act Arizona worked from", "They apply as a federal floor, with each state free to add further protections"],
            correctIndex: 0,
            explanation: "Arizona is a demonstration of where to look, not a statement of what a reader in another state will find.",
            sourceLessonSlug: "the-lease-is-the-document",
          },
          {
            prompt: "What does the course say a statute sets, in relation to the lease?",
            options: ["A floor", "A ceiling above which no lease term may be enforced by a court", "A default that the parties may waive in writing at the time of signing", "A schedule of the only charges a residential landlord is permitted to make"],
            correctIndex: 0,
            explanation: "Within that floor the lease is the contract, and courts read contracts, so the two documents work together.",
            sourceLessonSlug: "the-lease-is-the-document",
          },
          {
            prompt: "On what are almost all landlord and tenant disputes decided, according to this lesson?",
            options: ["Documents", "The testimony of neighbours who observed the condition of the property", "Whichever party appears at the hearing with legal representation", "The landlord's account, because possession creates a presumption of good faith"],
            correctIndex: 0,
            explanation: "The signed lease, the move-in condition record and the written notices do more work than anyone's memory of what was said.",
            sourceLessonSlug: "the-lease-is-the-document",
          },
          {
            prompt: "Why does the structure of landlord and tenant statutes often look familiar from state to state?",
            options: ["Many worked from a model act", "Because federal regulation prescribes the headings each state statute must use", "Because the states adopted a single interstate compact governing residential leases", "Because courts in one state are required to follow decisions issued in another"],
            correctIndex: 0,
            explanation: "The structure travels even though the numbers do not, which is exactly why the method transfers and the answers do not.",
            sourceLessonSlug: "the-lease-is-the-document",
          },
          {
            prompt: "What does this course say a national summary table of tenancy rules would actually give most readers?",
            options: ["Someone else's state's answer", "A reliable starting point that a local ordinance could only ever expand", "A defensible position that a court would accept in the absence of state law", "An accurate floor, since the states differ only in the remedies they provide"],
            correctIndex: 0,
            explanation: "That is the reason the course teaches the method for finding the governing statute instead of publishing the table.",
            sourceLessonSlug: "the-lease-is-the-document",
          },
          {
            prompt: "What is a security deposit, in the terms this lesson uses?",
            options: ["The landlord's money in hand", "A payment applied to the final month of rent under the lease", "A bond issued by an insurer that guarantees the tenant's performance", "An escrow held by the county recorder until the tenancy is terminated"],
            correctIndex: 0,
            explanation: "It is held against the tenant's performance, which is why every dispute about one is a dispute about the same four questions.",
            sourceLessonSlug: "the-deposit-and-the-clock",
          },
          {
            prompt: "Which four questions does the lesson say every deposit dispute reduces to?",
            options: ["Cap, labelling, deadline, itemisation", "Amount, interest, insurance, and the identity of the account holder", "Condition, occupancy, notice, and whether a walkthrough was ever offered", "Rent, term, renewal, and whether the tenant gave the required written notice"],
            correctIndex: 0,
            explanation: "Those four travel to any state, which is what makes them a method rather than a national rule.",
            sourceLessonSlug: "the-deposit-and-the-clock",
          },
          {
            prompt: "What limit does Arizona's statute place on security, including prepaid rent?",
            options: ["One and one-half month's rent", "Two months' rent, plus a separate cleaning fee agreed in the lease", "Whatever the parties negotiate, provided the amount is stated in writing", "One month's rent for an unfurnished unit and three months for a furnished one"],
            correctIndex: 0,
            explanation: "The statute says a landlord shall not demand or receive security, however denominated, in an amount or value of more than that.",
            sourceLessonSlug: "the-deposit-and-the-clock",
          },
          {
            prompt: "Under Arizona's statute, what happens to a fee that was not designated as nonrefundable?",
            options: ["It is refundable", "It is forfeited to the landlord at the end of the tenancy by default", "It is treated as prepaid rent and applied to the tenant's final month", "It is held by the court until the parties agree on how it should be applied"],
            correctIndex: 0,
            explanation: "The same section requires that the purpose of all nonrefundable fees or deposits be stated in writing by the landlord.",
            sourceLessonSlug: "the-deposit-and-the-clock",
          },
          {
            prompt: "What does the course call the Arizona rule that an undesignated fee is refundable?",
            options: ["A default rule", "A safe harbour that protects a landlord who follows the statutory form", "A presumption that the landlord may rebut with evidence of actual damage", "An exception that applies only where the tenancy lasted less than one year"],
            correctIndex: 0,
            explanation: "It resolves silence in the tenant's favour, which is a real piece of work for a single sentence to do.",
            sourceLessonSlug: "the-deposit-and-the-clock",
          },
          {
            prompt: "Which three things must an Arizona landlord furnish the tenant on move in?",
            options: ["Signed lease, move-in form, inspection notice", "A copy of the state statute, a receipt for the deposit, and a set of keys", "Proof of insurance, the owner's address, and a schedule of permitted charges", "A condition report from a licensed inspector, a utility list, and a parking permit"],
            correctIndex: 0,
            explanation: "The written notification tells the tenant they may be present at the move-out inspection, which is the proof half of the arrangement.",
            sourceLessonSlug: "the-deposit-and-the-clock",
          },
          {
            prompt: "How long does an Arizona landlord have to provide the itemized list of deductions?",
            options: ["Fourteen days", "Thirty calendar days running from the date the tenant vacated the unit", "Sixty days, or ninety where the landlord claims damage beyond ordinary wear", "Twenty-one business days from the date the tenant's forwarding address is given"],
            correctIndex: 0,
            explanation: "The statute counts fourteen days excluding Saturdays, Sundays and other legal holidays, which is longer than fourteen calendar days.",
            sourceLessonSlug: "the-deposit-and-the-clock",
          },
          {
            prompt: "Which days does Arizona's fourteen-day deposit clock exclude?",
            options: ["Weekends and legal holidays", "Any day on which the county recorder's office is closed to the public", "The first three days after the tenant returns possession of the property", "Days on which the landlord was unable to inspect because of severe weather"],
            correctIndex: 0,
            explanation: "The statute says fourteen days excluding Saturdays, Sundays or other legal holidays, so the calendar count is longer.",
            sourceLessonSlug: "the-deposit-and-the-clock",
          },
          {
            prompt: "What three events must occur before Arizona's deposit clock starts?",
            options: ["Termination, delivery, demand", "Move out, forwarding address, and the landlord's completed inspection", "Notice, inspection, and the filing of a claim in a justice court", "Lease expiry, key return, and written confirmation from the landlord"],
            correctIndex: 0,
            explanation: "The demand by the tenant is the one people miss, and a tenant who never asks may be waiting on a clock that never started.",
            sourceLessonSlug: "the-deposit-and-the-clock",
          },
          {
            prompt: "Why does the course single out the word \"demand\" in Arizona's deposit statute?",
            options: ["A tenant who never asks may wait forever", "Because a demand must be served by a process server to be effective", "Because the demand fixes the amount the landlord is permitted to withhold", "Because a demand converts the deposit into prepaid rent for the final month"],
            correctIndex: 0,
            explanation: "It is typical of how these statutes are built: the clock starts on a combination of events, not on move out alone.",
            sourceLessonSlug: "the-deposit-and-the-clock",
          },
          {
            prompt: "Under Arizona's section 33-1368, how much time does a notice for a health and safety breach give?",
            options: ["Five days", "Ten days, extended to twenty where the tenant has occupied for over a year", "Three days, running from the date the landlord posts notice on the door", "Thirty days, matching the notice period required to end a month-to-month tenancy"],
            correctIndex: 0,
            explanation: "The rental agreement terminates on a date not less than five days after receipt of the notice if the breach is not remedied in five days.",
            sourceLessonSlug: "the-deposit-and-the-clock",
          },
          {
            prompt: "What must an Arizona landlord's notice for a health and safety breach specify?",
            options: ["The acts and omissions", "The dollar amount the landlord estimates the damage will cost to repair", "The name of the court in which any resulting action would be filed", "The date on which the landlord intends to re-let the property to another tenant"],
            correctIndex: 0,
            explanation: "The notice has to name the breach, which is what lets the tenant remedy it inside the five days the statute allows.",
            sourceLessonSlug: "the-deposit-and-the-clock",
          },
          {
            prompt: "In Arizona, what must a nonpayment notice tell the tenant besides the fact of nonpayment?",
            options: ["The intention to terminate", "The total balance owed including late fees accrued to the date of notice", "The tenant's right to request a hearing before the tenancy can be ended", "The address at which payment must be delivered for it to count as timely"],
            correctIndex: 0,
            explanation: "The statute requires written notice of nonpayment and of the landlord's intention to terminate if rent is not paid within the period.",
            sourceLessonSlug: "the-deposit-and-the-clock",
          },
          {
            prompt: "What does an Arizona landlord do after the nonpayment period expires?",
            options: ["Files a special detainer action", "Changes the locks and stores the tenant's belongings at the tenant's expense", "Records a notice of default against the property with the county recorder", "Refers the unpaid balance to a collection agency without any court involvement"],
            correctIndex: 0,
            explanation: "Termination is the start of a court case rather than the end of the tenancy by the landlord's own hand.",
            sourceLessonSlug: "the-deposit-and-the-clock",
          },
          {
            prompt: "What does the course say is common across states, even though the numbers are not?",
            options: ["The shape", "The five-day notice period for both nonpayment and health and safety breaches", "The name of the court action a landlord must file to recover possession", "The requirement that a landlord hold the deposit in a separate interest-bearing account"],
            correctIndex: 0,
            explanation: "Find the statute, then find the cap, the labelling rule, the deadline and the remedy; the answers differ everywhere.",
            sourceLessonSlug: "the-deposit-and-the-clock",
          },
          {
            prompt: "Where does the course say recourse in landlord and tenant matters actually lives?",
            options: ["State courts", "The federal district court for the district in which the property sits", "The state agency that licenses residential property managers and brokers", "An arbitration panel selected under the terms printed in the standard lease"],
            correctIndex: 0,
            explanation: "The course names where the answer to who decides this is written; it does not tell any reader to file anything.",
            sourceLessonSlug: "the-deposit-and-the-clock",
          },
          {
            prompt: "What does the course say about a tenant remedy whose deadline has passed?",
            options: ["It is not a remedy", "It survives, because statutory rights cannot be lost through delay", "It converts into a claim against the landlord's insurer instead of the landlord", "It may still be raised as a defence even though it cannot be brought as a claim"],
            correctIndex: 0,
            explanation: "That is why the fourth question in the method is the deadline, and why it is the one that usually decides the outcome.",
            sourceLessonSlug: "the-deposit-and-the-clock",
          },
          {
            prompt: "Which of these is the course's stated position on filing a claim over a deposit?",
            options: ["It tells nobody to file", "It advises tenants to file whenever a landlord misses the statutory deadline", "It recommends filing only where the amount withheld exceeds one month's rent", "It advises against filing, on the ground that the cost usually exceeds the recovery"],
            correctIndex: 0,
            explanation: "The course teaches where the governing rule is written and gives no advice about what any reader should do.",
            sourceLessonSlug: "the-deposit-and-the-clock",
          },
          {
            prompt: "Why does the course use one state's statute rather than a fifty-state comparison of deposits?",
            options: ["A table would be wrong almost everywhere", "Because only Arizona publishes its landlord and tenant statute without a paywall", "Because the other states have not yet enacted deposit statutes of their own", "Because federal law preempts state deposit rules everywhere except Arizona"],
            correctIndex: 0,
            explanation: "The method for finding the governing statute transfers to any state; a summary table of the answers would not.",
            sourceLessonSlug: "the-deposit-and-the-clock",
          },
          {
            prompt: "What does the phrase \"however denominated\" do in Arizona's deposit cap?",
            options: ["Catches renamed charges", "Limits the cap to charges the lease calls a security deposit", "Requires the landlord to state the deposit in dollars rather than in months", "Allows a landlord to exceed the cap where the charge is called prepaid rent"],
            correctIndex: 0,
            explanation: "The statute expressly includes prepaid rent, so calling money something else does not move it outside the cap.",
            sourceLessonSlug: "the-deposit-and-the-clock",
          },
          {
            prompt: "What does the course say the move-in form is really about?",
            options: ["Proof", "Insurance, because the form is what the landlord's insurer requires", "Rent, because the form fixes the amount chargeable for the first month", "Notice, because the form starts the clock for reporting maintenance problems"],
            correctIndex: 0,
            explanation: "A record of existing damage made at move in is what makes a later deduction contestable rather than a matter of recollection.",
            sourceLessonSlug: "the-deposit-and-the-clock",
          },
          {
            prompt: "Which statement about state notice periods for nonpayment is accurate under this course?",
            options: ["They differ by state", "They are five days everywhere, because the states adopted a uniform act", "They are set by federal regulation and cannot be varied by a state statute", "They are whatever the lease provides, because notice is a matter of contract"],
            correctIndex: 0,
            explanation: "What is five days in Arizona is a different number elsewhere, and the resulting action has different names in different states.",
            sourceLessonSlug: "the-deposit-and-the-clock",
          },
          {
            prompt: "What does the course say a mortgage borrower pledges, and to whom?",
            options: ["The property, to the lender", "Their future wages, to the servicer that collects the monthly payment", "The down payment, to an escrow agent chosen by the seller of the property", "Their consumer report, to the agency that assembled it for the underwriter"],
            correctIndex: 0,
            explanation: "That pledge is what makes the loan a debt with the roof as collateral rather than an unsecured borrowing.",
            sourceLessonSlug: "two-contracts-one-question",
          },
          {
            prompt: "Which documents does the course list as the ones it takes apart?",
            options: ["Lease, note, forms, appraisal, land record", "Deed, will, trust, and the county assessor's annual valuation notice", "Credit report, score disclosure, adverse action notice, and dispute letter", "Listing agreement, purchase contract, inspection report, and moving estimate"],
            correctIndex: 0,
            explanation: "Two of them are federal forms designed to be compared, and the course says a learner can hold both.",
            sourceLessonSlug: "two-contracts-one-question",
          },
          {
            prompt: "What does the course say it knows nothing about, and therefore cannot advise on?",
            options: ["The reader's own life", "The text of the federal regulations that govern mortgage disclosure forms", "The way a state statute allocates the burden of proof in a deposit dispute", "Which documents a creditor is required to deliver after receiving an application"],
            correctIndex: 0,
            explanation: "Income, household, work, health and expected length of stay all bear on the decision, and none of them is in the course's hands.",
            sourceLessonSlug: "two-contracts-one-question",
          },
          {
            prompt: "How does the course describe what happens to interest rates over time?",
            options: ["They move weekly", "They are fixed by a federal agency and adjusted twice each calendar year", "They are set at closing and cannot change for the life of any first-lien loan", "They are published annually alongside the loan limits the same agency sets"],
            correctIndex: 0,
            explanation: "That is one of the reasons the course prints no rate and labels any number used in arithmetic as a hypothetical.",
            sourceLessonSlug: "two-contracts-one-question",
          },
          {
            prompt: "What does the course say about a term a state statute puts beyond the reach of contract?",
            options: ["It binds even if the lease is silent", "It applies only where the lease expressly incorporates the statute by reference", "It may be waived if both parties initial the relevant paragraph of the lease", "It applies only to leases signed after the statute's most recent amendment"],
            correctIndex: 0,
            explanation: "Those terms are the ones worth finding first, because they are true for a tenant even where the lease says the opposite.",
            sourceLessonSlug: "the-lease-is-the-document",
          },
          {
            prompt: "What is the practical effect of possession passing to the tenant for the term?",
            options: ["Self-help removal is not available", "The tenant becomes liable for the property tax assessed during the term", "The landlord loses the right to enter the property for any reason at all", "The tenancy is recorded against the property in the county land records"],
            correctIndex: 0,
            explanation: "The owner generally has to obtain a court order rather than simply taking back what they own.",
            sourceLessonSlug: "the-lease-is-the-document",
          },
          {
            prompt: "Which document tells a tenant what cannot be done to them?",
            options: ["The statute", "The lease, which restates every protection the state provides", "The landlord's written house rules, issued at the start of the tenancy", "The move-in condition form, which records the state of the property"],
            correctIndex: 0,
            explanation: "The lease tells a tenant what they agreed to; the statute sets the floor beneath it, and the two work together.",
            sourceLessonSlug: "the-lease-is-the-document",
          },
          {
            prompt: "What does Arizona's statute call the money it caps, in order to stop the cap being avoided?",
            options: ["Security, however denominated", "A refundable deposit held against damage to the dwelling unit", "Any sum collected before the tenant takes possession of the property", "Consideration paid to the landlord in excess of the first month's rent"],
            correctIndex: 0,
            explanation: "The section expressly includes prepaid rent within the capped amount, so renaming the charge does not move it outside the limit.",
            sourceLessonSlug: "the-deposit-and-the-clock",
          },
          {
            prompt: "In the course's reading, what does a written move-out inspection notice give the tenant?",
            options: ["The chance to be present", "A deadline by which the landlord must return the entire deposit", "A right to have the inspection conducted by an independent third party", "An automatic extension of the tenancy until the inspection is completed"],
            correctIndex: 0,
            explanation: "Arizona requires that written notification at move in, alongside the signed lease and the move-in damage form.",
            sourceLessonSlug: "the-deposit-and-the-clock",
          },
          {
            prompt: "What does the course say a learner should carry from Arizona to their own state?",
            options: ["The four questions", "The fourteen-day deadline, which is the shortest any state imposes", "The one and one-half month cap, which most other states also use", "The special detainer procedure, which is the standard eviction route"],
            correctIndex: 0,
            explanation: "The cap, the labelling rule, the deadline and the remedy travel as questions; every one of the answers is state-specific.",
            sourceLessonSlug: "the-deposit-and-the-clock",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2 — The loan itself, and the arithmetic nobody shows you
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-note-and-the-security-instrument",
      title: "5 · A mortgage is two documents, and only one of them is the loan",
      section: "Section 2 · The loan itself, and the arithmetic nobody shows you",
      body: `In ordinary speech, "the mortgage" means the loan. In the paperwork it means something else, and the difference is worth ten minutes of anyone's life.

**Document one is the promissory note.** It is the promise to repay: how much was borrowed, at what rate, over what term, in what payments, and what happens if a payment is late. It is a debt instrument, and it would work as one even if no property existed.

**Document two is the security instrument**, called a mortgage in some states and a deed of trust in others. It does not lend anything. It pledges the property as security for the note, and it sets out what the lender may do if the note is not paid. That is the document the word "mortgage" technically names.

**The second document gets recorded, and that is why this course ends in a land record.** A security instrument is filed with the county recorder so that the lender's interest appears in the public chain of title for that parcel. The land record is not a filing cabinet at a bank. It is a public register of who has what interest in a specific piece of ground, and everything in Section 6 lives in the same place.

**Both halves are state law, and states genuinely differ.** Arizona is the course's labelled example again, and it carries both forms in separate chapters: mortgages at Title 33, Chapter 6, and deeds of trust at Title 33, Chapter 6.1 (Ariz. Rev. Stat. tit. 33, n.d.). Which instrument is used, and what a lender must do before a forced sale, are questions with fifty-one answers. **This course states no national rule about foreclosure**, for exactly the reason it stated none about eviction. Find the chapter of your own state's code that names the instrument on your paperwork, and read the sections about default in it.

**What the term does.** The term is the number of years the scheduled payments run. A longer term produces a smaller payment on the same amount borrowed, and a larger total of interest, because interest accrues on the balance for longer. That is not a trick and it is not a scandal. It is the same trade priced two ways, and the next lesson makes it visible.

**Escrow, and why Congress mentioned it by name.** Many loans collect an additional amount each month toward property tax and insurance, held by the servicer and paid out when those bills come due. Congress did not invent that arrangement, but it did name it in RESPA's own purposes, which include "a reduction in the amounts home buyers are required to place in escrow accounts established to insure the payment of real estate taxes and insurance" (12 U.S.C. § 2601, n.d.). A statute that lists reducing escrow among its purposes is a statute telling you the practice was a problem.

**A sentence worth holding on to.** A payment that includes tax and insurance is not the same object as a payment that does not, so two quoted payments are not comparable until you know which components each one contains. That is not a small point. It is the single most common way two offers get compared wrongly, and the federal forms in Section 3 exist partly to stop it.

**Where the catalog has been here before.** *The County Committee* (WARRANT-02) teaches a federal credit gate applied locally: a statutory eligibility standard, administered by people, with a written record of who was let through. A mortgage underwriting decision has the same shape one level down, with a private gate and a different set of documents. And *Surplus Funds Basics*, in the Asset Recovery series, picks up the thread at the other end, after a forced sale has happened and money is left over. This course does not cover that ground; it points at it.

:::reveal What are the two documents in a mortgage transaction, and which one is the loan? ||| The promissory note, which is the promise to repay and is the loan, and the security instrument, which pledges the property.

:::reveal Why does a security instrument end up in a county land record? ||| Because it is recorded so the lender's interest appears in the public chain of title for that parcel, which is the same register the covenants in Section 6 sit in.

:::reveal What did Congress name among RESPA's own purposes in relation to escrow? ||| A reduction in the amounts home buyers are required to place in escrow accounts established to insure the payment of real estate taxes and insurance.

## Vocabulary
- **Promissory note**: the debt instrument itself, stating the amount borrowed, the rate, the term and the payments, and enforceable as a promise to repay whether or not property is involved.
- **Security instrument**: the separate document, called a mortgage or a deed of trust depending on the state, that pledges the property as security for the note and states what the lender may do on default.
- **Recording**: filing a document with the county recorder so that the interest it creates appears in the public chain of title for the parcel.
- **Escrow**: an amount collected with the periodic payment and held by the servicer to pay property tax and insurance when those bills fall due.
- **Term**: the number of years the scheduled payments run, which trades the size of the payment against the total interest paid.

## Sources
12 U.S.C. § 2601. (n.d.). *Congressional findings and purpose*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/12/2601

Arizona Revised Statutes, tit. 33. (n.d.). *Property* [chapter listing: ch. 6, Mortgages; ch. 6.1, Deeds of Trust]. Arizona State Legislature. https://www.azleg.gov/arsDetail/?title=33`,
    },
    {
      slug: "amortisation-is-the-whole-trick",
      title: "6 · Amortisation, and why the early payments are almost all interest",
      section: "Section 2 · The loan itself, and the arithmetic nobody shows you",
      body: `People are told that early mortgage payments are mostly interest and are almost never shown why. The why is four lines of arithmetic, and once you have it you never need anyone's table again.

**The rule that generates everything.** An amortising loan takes a level payment and splits it in the same way every period:

1. **Interest** = the balance still owed, times the periodic rate.
2. **Principal** = the payment, minus that interest.
3. **New balance** = the old balance, minus that principal.
4. Repeat.

That is the whole mechanism. There is no fifth step.

**Why the early payments are mostly interest falls straight out of step one.** Interest is charged on the balance, the balance is at its largest at the very beginning, so the interest slice is at its largest at the very beginning. Nobody decided this and no lender chose it. It is what happens when you charge interest on a declining balance and hold the payment constant.

**A worked example, with the rate labelled as a hypothetical.** This course prints no market rate, so take a round number chosen because it makes the arithmetic checkable by hand: borrow 200,000 over 30 years at a **hypothetical** 6 percent a year. Six percent a year is 0.5 percent a month, so the periodic rate is 0.005 and there are 360 payments.

The level payment that pays this to zero in 360 months is about **1,199.10**. Now run the four steps for month one:

- Interest = 200,000 x 0.005 = **1,000.00**
- Principal = 1,199.10 minus 1,000.00 = **199.10**
- New balance = **199,800.90**

**In the first month, about 83 percent of the payment is interest.** Not because anything unfair happened, but because 200,000 was outstanding for that month.

**Now run it forward five years.** After 60 payments the balance is about **186,108**. So over those five years:

- Paid in: 60 x 1,199.10 = about **71,946**
- Debt reduced by: 200,000 minus 186,108 = about **13,892**
- Interest: about **58,054**

**Roughly nineteen cents of every dollar paid in the first five years reduced the debt.** Hold that number, because Section 4's comparison turns on it and because the federal form in the next lesson is required to print something very close to it.

**And over the whole term**, 360 payments of about 1,199.10 come to about **431,676** on 200,000 borrowed, so about **231,676** is interest. That is a little more than the amount borrowed, at a hypothetical 6 percent over 30 years.

**Two things follow, and neither is advice.** First, the term is not a neutral choice: it moves the payment one way and the total interest the other, and both effects are computable before anyone signs anything. Second, an extra amount applied to principal reduces the balance that every future interest calculation runs on, which is why prepayment is treated as a term worth disclosing rather than a courtesy. Whether a particular loan permits it, and on what conditions, is stated on the form you are about to meet.

**Do this once by hand.** Take any amount, any hypothetical rate, and any term, and run the four steps for three months on paper. It takes five minutes, and it permanently ends the question of whether a payment schedule someone showed you is plausible.

:::reveal What are the four steps that generate an amortisation schedule? ||| Interest equals balance times the periodic rate, principal equals payment minus interest, new balance equals old balance minus principal, then repeat.

:::reveal Why is the interest share largest at the start of the loan? ||| Because interest is charged on the balance outstanding, and the balance is at its largest at the beginning.

:::reveal In the course's hypothetical, roughly what share of the first five years of payments actually reduced the debt? ||| About nineteen percent, since about 13,892 of about 71,946 paid in went to principal.

## Vocabulary
- **Amortisation**: the process by which a level payment pays a loan to zero over its term, with the split between interest and principal shifting every period.
- **Periodic rate**: the annual rate divided by the number of payments in a year, which is the number actually multiplied by the balance to produce one period's interest.
- **Principal**: the part of a payment that reduces the amount owed, which is whatever is left after that period's interest is taken.
- **Prepayment**: an amount paid beyond the scheduled payment and applied to principal, which lowers the balance every later interest calculation runs on.

## Sources
15 U.S.C. § 1601. (n.d.). *Congressional findings and declaration of purpose*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/15/1601

12 CFR § 1026.37. (n.d.). *Content of disclosures for certain mortgage transactions (Loan Estimate)*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/1026.37`,
    },
    {
      slug: "the-numbers-the-form-must-print",
      title: "7 · The three numbers the form is required to print, and what each one means",
      section: "Section 2 · The loan itself, and the arithmetic nobody shows you",
      body: `The last lesson worked out by hand what a loan costs. Federal regulation requires a lender to print very nearly the same thing on a form, in a table whose heading is an instruction.

**The table is called Comparisons**, and Regulation Z requires it "under the heading 'Comparisons' along with the statement 'Use these measures to compare this loan with other loans'" (12 CFR § 1026.37, n.d.). A regulator wrote the sentence telling you what the box is for.

**Number one: In 5 Years.** The rule requires two figures. The first is "The total principal, interest, mortgage insurance, and loan costs scheduled to be paid through the end of the 60th month after the due date of the first periodic payment, expressed as a dollar amount, along with the statement 'Total you will have paid in principal, interest, mortgage insurance, and loan costs'". The second is "The principal scheduled to be paid through the end of the 60th month after the due date of the first periodic payment, expressed as a dollar amount, along with the statement 'Principal you will have paid off.'" (12 CFR § 1026.37, n.d.).

**Those two figures are the previous lesson, printed.** Total paid in, and how much of it reduced the debt. A learner who ran the four steps by hand already knows why the second number is so much smaller than the first, and is therefore not surprised by a form that most people find demoralising and cannot explain.

**Number two: the annual percentage rate, with a sentence attached that ends an argument.** The regulation requires "The 'Annual Percentage Rate,' using that term and the abbreviation 'APR' and expressed as a percentage, and the following statement: 'Your costs over the loan term expressed as a rate. This is not your interest rate.'" (12 CFR § 1026.37, n.d.).

**Read the last four words again.** The form itself tells you the APR is not the interest rate. The interest rate is what generates the interest line in the amortisation arithmetic. The APR expresses the cost of the loan, including certain charges, as a rate, so that two offers with different fee structures can be ranked against each other. Two loans can carry the same interest rate and different APRs, and the difference is the charges.

**Number three: the total interest percentage.** The regulation requires "The total amount of interest that the consumer will pay over the life of the loan, expressed as a percentage of the amount of credit extended, using the term 'Total Interest Percentage,' the abbreviation 'TIP,' and the statement 'The total amount of interest that you will pay over the loan term as a percentage of your loan amount.'" (12 CFR § 1026.37, n.d.).

**This is the most quietly devastating number on the form**, and it is the previous lesson's last paragraph turned into one figure. In the hypothetical worked there, about 231,676 of interest on 200,000 borrowed is a total interest percentage of about 116 percent. Nothing is hidden and nothing is unusual. It is simply what a long term at a positive rate produces, stated once, in a unit anyone can compare.

**The same numbers reappear at the end.** The Closing Disclosure carries a "Loan Calculations" table (12 CFR § 1026.38, n.d.), which includes the total of payments, described as what the consumer will have paid after making all payments of principal, interest, mortgage insurance and loan costs as scheduled, alongside the annual percentage rate and the total interest percentage. So the estimate and the final document report in the same units, which is exactly what makes them comparable to each other as well as to a rival offer.

**Why any of this exists.** Because the Truth in Lending Act says its purpose is "to assure a meaningful disclosure of credit terms so that the consumer will be able to compare more readily the various credit terms available to him and avoid the uninformed use of credit" (15 U.S.C. § 1601, n.d.). Every box named above is that sentence turned into a printing requirement.

:::reveal What sentence does Regulation Z require to appear with the Comparisons heading? ||| Use these measures to compare this loan with other loans.

:::reveal What statement must the form print next to the annual percentage rate? ||| Your costs over the loan term expressed as a rate. This is not your interest rate.

:::reveal What does the total interest percentage express, in the regulation's own words? ||| The total amount of interest you will pay over the loan term as a percentage of your loan amount.

## Vocabulary
- **Comparisons table**: the Loan Estimate box that Regulation Z requires under a heading telling the consumer to use its measures to compare this loan with other loans.
- **In 5 Years**: the pair of figures showing the total scheduled to be paid through the sixtieth month and how much of that will have paid off principal.
- **Annual percentage rate**: the cost of the loan over its term expressed as a rate, which the form itself states is not the interest rate.
- **Total interest percentage**: the total interest over the life of the loan expressed as a percentage of the amount borrowed, abbreviated TIP on the form.
- **Loan Calculations**: the Closing Disclosure table that repeats the total of payments, the annual percentage rate and the total interest percentage on the final document.

## Sources
12 CFR § 1026.37. (n.d.). *Content of disclosures for certain mortgage transactions (Loan Estimate)*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/1026.37

12 CFR § 1026.38. (n.d.). *Content of disclosures for certain mortgage transactions (Closing Disclosure)*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/1026.38

15 U.S.C. § 1601. (n.d.). *Congressional findings and declaration of purpose*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/15/1601`,
    },
    {
      slug: "quiz-the-loan",
      title: "8 · Knowledge check: the loan itself, and the arithmetic",
      section: "Section 2 · The loan itself, and the arithmetic nobody shows you",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "In the paperwork, which document is the loan?",
            options: ["The promissory note", "The security instrument, which pledges the property to the lender", "The deed, which conveys title from the seller to the buyer at closing", "The Closing Disclosure, which states the actual terms of the transaction"],
            correctIndex: 0,
            explanation: "It states how much was borrowed, at what rate, over what term, in what payments, and would work as a debt even with no property involved.",
            sourceLessonSlug: "the-note-and-the-security-instrument",
          },
          {
            prompt: "What does the security instrument actually do?",
            options: ["Pledges the property", "Lends the money the borrower uses to purchase the property", "Transfers legal title to the lender until the final payment is made", "Guarantees that the property is worth at least the amount borrowed"],
            correctIndex: 0,
            explanation: "It secures the note and sets out what the lender may do if the note is not paid; it lends nothing itself.",
            sourceLessonSlug: "the-note-and-the-security-instrument",
          },
          {
            prompt: "Which two names does the course give for the security instrument, depending on the state?",
            options: ["Mortgage or deed of trust", "Promissory note or loan agreement, depending on the lender's own forms", "Warranty deed or quitclaim deed, depending on what the seller conveys", "Title policy or abstract of title, depending on how the state proves ownership"],
            correctIndex: 0,
            explanation: "Which instrument is used, and what a lender must do before a forced sale, are questions with fifty-one answers.",
            sourceLessonSlug: "the-note-and-the-security-instrument",
          },
          {
            prompt: "Why does a security instrument get recorded?",
            options: ["So the lender's interest is public", "So the county can assess property tax against the correct owner each year", "So the borrower can prove to an insurer that the property is encumbered", "So a later buyer is relieved of any obligation the previous owner incurred"],
            correctIndex: 0,
            explanation: "Recording puts the lender's interest in the public chain of title for that parcel, which is the same register the covenants in Section 6 sit in.",
            sourceLessonSlug: "the-note-and-the-security-instrument",
          },
          {
            prompt: "What is a county land record, as this course describes it?",
            options: ["A public register of interests", "A private archive maintained by the title insurance industry for its members", "A federal database of every residential mortgage originated in the United States", "A list of properties on which taxes are delinquent, published once each year"],
            correctIndex: 0,
            explanation: "It records who has what interest in a specific piece of ground, which is why the course ends there rather than in a bank's files.",
            sourceLessonSlug: "the-note-and-the-security-instrument",
          },
          {
            prompt: "Where does Arizona put mortgages and deeds of trust in its statutes?",
            options: ["Title 33, chapters 6 and 6.1", "Title 44, chapters 2 and 3, alongside the consumer transaction provisions", "Title 6, chapters 8 and 9, with the rules governing banks and lenders", "Title 12, chapters 5 and 6, with the general provisions on civil procedure"],
            correctIndex: 0,
            explanation: "Arizona carries both forms in separate chapters, which is one reason the course uses it as its labelled worked example.",
            sourceLessonSlug: "the-note-and-the-security-instrument",
          },
          {
            prompt: "What national rule does this course state about foreclosure?",
            options: ["None", "That a lender must obtain a court judgment before any forced sale may occur", "That a borrower always has a statutory right to reinstate the loan before sale", "That a lender must offer a loan modification before commencing any proceeding"],
            correctIndex: 0,
            explanation: "The course states none, for the same reason it states none about eviction: this is state law and the variation is real.",
            sourceLessonSlug: "the-note-and-the-security-instrument",
          },
          {
            prompt: "What does the course tell a reader to do about default rules in their own state?",
            options: ["Read their own state's chapter", "Assume the Arizona provisions apply unless a lender says otherwise", "Rely on the summary in the loan documents the lender provides at closing", "Wait for a servicer to explain the process after a payment has been missed"],
            correctIndex: 0,
            explanation: "Find the chapter that names the instrument on your own paperwork, and read the sections about default in it.",
            sourceLessonSlug: "the-note-and-the-security-instrument",
          },
          {
            prompt: "What does a longer term do to the payment and to total interest?",
            options: ["Lowers one, raises the other", "Lowers both, because the lender spreads its costs over more periods", "Raises both, because a longer commitment carries a higher periodic rate", "Leaves both unchanged, because the total borrowed has not changed at all"],
            correctIndex: 0,
            explanation: "A longer term produces a smaller payment on the same amount borrowed and a larger total of interest, since interest accrues for longer.",
            sourceLessonSlug: "the-note-and-the-security-instrument",
          },
          {
            prompt: "How does the course characterise the trade between term and total interest?",
            options: ["The same trade priced two ways", "A defect in the amortisation formula that regulators have not yet corrected", "A charge the lender adds to compensate for the risk of a longer commitment", "An artefact of escrow, which grows with the number of years the loan runs"],
            correctIndex: 0,
            explanation: "It is not a trick and not a scandal; it is what happens when interest accrues on a balance for a longer period.",
            sourceLessonSlug: "the-note-and-the-security-instrument",
          },
          {
            prompt: "What is escrow, in the sense this lesson uses?",
            options: ["Money collected for tax and insurance", "A holding account for the buyer's deposit until the sale closes", "A reserve the lender keeps against the possibility of a missed payment", "A fund set aside by the county to cover unpaid assessments on a parcel"],
            correctIndex: 0,
            explanation: "It is collected with the periodic payment, held by the servicer, and paid out when the tax and insurance bills fall due.",
            sourceLessonSlug: "the-note-and-the-security-instrument",
          },
          {
            prompt: "What did Congress list among RESPA's own purposes in relation to escrow?",
            options: ["A reduction in the amounts required", "A requirement that escrow be held in an interest-bearing account", "A prohibition on any lender collecting escrow from a first-time buyer", "A cap of two months of tax and insurance on any federally related loan"],
            correctIndex: 0,
            explanation: "A statute that lists reducing escrow among its purposes is a statute telling you the practice was a problem.",
            sourceLessonSlug: "the-note-and-the-security-instrument",
          },
          {
            prompt: "Why does the course say two quoted monthly payments may not be comparable?",
            options: ["They may contain different components", "Because lenders are permitted to quote payments net of any prepayment credit", "Because a payment quoted before an application is not required to be accurate", "Because servicers recalculate the payment every year regardless of the terms"],
            correctIndex: 0,
            explanation: "A payment that includes tax and insurance is not the same object as one that does not, which is the most common way two offers get compared wrongly.",
            sourceLessonSlug: "the-note-and-the-security-instrument",
          },
          {
            prompt: "Which shipped catalog course does this lesson name as the federal credit gate applied locally?",
            options: ["The County Committee", "What They Built, on Black business districts and the building and loan", "Financing Without Access, on fraternal societies and rotating savings", "Banking and the Unbanked, on deposit accounts and the households without one"],
            correctIndex: 0,
            explanation: "WARRANT-02 teaches a statutory eligibility standard administered by people, with a written record of who was let through.",
            sourceLessonSlug: "the-note-and-the-security-instrument",
          },
          {
            prompt: "How does the course relate a mortgage underwriting decision to the county committee?",
            options: ["Same shape, private gate", "Identical process, since both are governed by the same federal statute", "Opposite shapes, because underwriting has no written eligibility standard", "Unrelated, because farm credit and residential credit share no common structure"],
            correctIndex: 0,
            explanation: "It is the same shape one level down: an eligibility standard, a decider, and a documentary record of the decision.",
            sourceLessonSlug: "the-note-and-the-security-instrument",
          },
          {
            prompt: "Which course does this lesson name as picking up the thread after a forced sale?",
            options: ["Surplus Funds Basics", "Cooperatives, which teaches the credit union among other co-operative forms", "Credit Decisions, which teaches the consumer report an underwriter reads", "The Great Migration, which teaches the movement out of the rural South"],
            correctIndex: 0,
            explanation: "It sits in the Asset Recovery series and deals with money left over after a sale; this course points at it rather than covering it.",
            sourceLessonSlug: "the-note-and-the-security-instrument",
          },
          {
            prompt: "In ordinary speech, what does the word mortgage usually mean?",
            options: ["The loan", "The security instrument recorded against the parcel", "The monthly payment a borrower makes to the servicer", "The lien priority a lender holds relative to other creditors"],
            correctIndex: 0,
            explanation: "In the paperwork it names the security instrument instead, and the course says the difference is worth ten minutes of anyone's life.",
            sourceLessonSlug: "the-note-and-the-security-instrument",
          },
          {
            prompt: "What would still be true of a promissory note if no property existed?",
            options: ["It would still be a debt", "It would be unenforceable for want of consideration", "It would convert automatically into an unsecured personal loan agreement", "It would need to be recorded with the county before it could be collected"],
            correctIndex: 0,
            explanation: "The note is a debt instrument in its own right; the security instrument is what attaches the property to it.",
            sourceLessonSlug: "the-note-and-the-security-instrument",
          },
          {
            prompt: "What is the first step of the amortisation rule?",
            options: ["Interest equals balance times rate", "Payment equals principal divided by the number of periods remaining", "Balance equals the original amount less the total of all payments made", "Principal equals the payment multiplied by the periodic rate for that month"],
            correctIndex: 0,
            explanation: "The periodic rate is the annual rate divided by the number of payments in a year, and it multiplies the balance still owed.",
            sourceLessonSlug: "amortisation-is-the-whole-trick",
          },
          {
            prompt: "How is the principal portion of a payment calculated?",
            options: ["Payment minus interest", "Balance multiplied by the periodic rate for that month", "The original amount borrowed divided by the number of payments", "A fixed share of the payment set by the lender at origination"],
            correctIndex: 0,
            explanation: "Whatever is left after that period's interest is taken is what reduces the amount owed.",
            sourceLessonSlug: "amortisation-is-the-whole-trick",
          },
          {
            prompt: "How many steps does the course say the amortisation mechanism has?",
            options: ["Four", "Seven, one for each component of a fully escrowed monthly payment", "Two, because interest and principal are computed from a single formula", "Twelve, because the schedule must be recalculated once in every month of the year"],
            correctIndex: 0,
            explanation: "Interest, principal, new balance, repeat. The course says there is no fifth step.",
            sourceLessonSlug: "amortisation-is-the-whole-trick",
          },
          {
            prompt: "Why are the early payments mostly interest?",
            options: ["The balance is largest then", "Because lenders front-load their charges into the first years of the loan", "Because regulation requires interest to be collected before any principal", "Because the periodic rate is set higher during the first sixty payments"],
            correctIndex: 0,
            explanation: "Nobody decided it: it is what happens when interest is charged on a declining balance while the payment is held constant.",
            sourceLessonSlug: "amortisation-is-the-whole-trick",
          },
          {
            prompt: "What does the course say about the 6 percent rate in its worked example?",
            options: ["It is a hypothetical", "It is the average rate on a thirty-year loan at the date of writing", "It is the maximum rate permitted on a federally related mortgage loan", "It is the rate the Loan Estimate uses in the model form the regulation prints"],
            correctIndex: 0,
            explanation: "The course prints no market rate, and this round number was chosen because 0.5 percent a month makes the arithmetic checkable by hand.",
            sourceLessonSlug: "amortisation-is-the-whole-trick",
          },
          {
            prompt: "In the worked example, what is the periodic rate?",
            options: ["0.005", "0.06, applied once at the end of each calendar year of the loan", "0.5, since the rate is stated as a percentage rather than a decimal", "0.0005, because the annual rate is divided across three hundred sixty payments"],
            correctIndex: 0,
            explanation: "Six percent a year is 0.5 percent a month, and there are 360 payments over the thirty-year term.",
            sourceLessonSlug: "amortisation-is-the-whole-trick",
          },
          {
            prompt: "In the worked example, what is the first month's interest on 200,000?",
            options: ["1,000", "1,199.10, which is the whole of the first scheduled payment", "199.10, with the balance of the payment reducing the amount owed", "12,000, because interest for the first year is collected at the outset"],
            correctIndex: 0,
            explanation: "200,000 multiplied by 0.005 is 1,000, which is why so little of the first payment reduces the debt.",
            sourceLessonSlug: "amortisation-is-the-whole-trick",
          },
          {
            prompt: "In the worked example, roughly what share of the first payment is interest?",
            options: ["About 83 percent", "About 50 percent, split evenly between interest and principal", "About 17 percent, with the rest going straight to reduce the balance", "About 100 percent, since no principal is repaid in the first twelve months"],
            correctIndex: 0,
            explanation: "About 1,000 of a payment of about 1,199.10 is interest, because 200,000 was outstanding for that month.",
            sourceLessonSlug: "amortisation-is-the-whole-trick",
          },
          {
            prompt: "In the worked example, what is the approximate balance after five years?",
            options: ["About 186,108", "About 128,054, once sixty scheduled payments have been applied in full", "About 199,801, because only the first month's principal has been credited", "About 71,946, which is the total of the payments made over those five years"],
            correctIndex: 0,
            explanation: "Sixty payments of about 1,199.10 reduced a 200,000 balance by only about 13,892.",
            sourceLessonSlug: "amortisation-is-the-whole-trick",
          },
          {
            prompt: "In the worked example, roughly how much of the first five years of payments reduced the debt?",
            options: ["About 19 percent", "About 81 percent, with the remainder covering the interest charged", "About half, since the split reaches parity around the fifth year", "About 3 percent, because the balance barely moves in the first decade"],
            correctIndex: 0,
            explanation: "About 13,892 of about 71,946 paid in went to principal, and the rest, about 58,054, was interest.",
            sourceLessonSlug: "amortisation-is-the-whole-trick",
          },
          {
            prompt: "In the worked example, what is the approximate total of all 360 payments?",
            options: ["About 431,676", "About 231,676, which is the interest charged over the full term", "About 200,000, since an amortising loan repays exactly what was borrowed", "About 359,730, because the final payment is smaller than the others"],
            correctIndex: 0,
            explanation: "360 payments of about 1,199.10 on 200,000 borrowed leaves about 231,676 of interest.",
            sourceLessonSlug: "amortisation-is-the-whole-trick",
          },
          {
            prompt: "In the worked example, roughly how does total interest compare with the amount borrowed?",
            options: ["A little more", "A little less, because principal is repaid throughout the term", "About one quarter, which is typical of a long amortising loan", "Roughly triple, because interest compounds monthly over thirty years"],
            correctIndex: 0,
            explanation: "About 231,676 of interest on 200,000 borrowed, at a hypothetical 6 percent over thirty years.",
            sourceLessonSlug: "amortisation-is-the-whole-trick",
          },
          {
            prompt: "What does an extra amount applied to principal do?",
            options: ["Lowers every later interest figure", "Shortens the term without changing the total interest that will be paid", "Entitles the borrower to a proportionate refund of the interest already paid", "Suspends the requirement to make the next scheduled payment on its due date"],
            correctIndex: 0,
            explanation: "It reduces the balance that every future interest calculation runs on, which is why prepayment is a term worth disclosing.",
            sourceLessonSlug: "amortisation-is-the-whole-trick",
          },
          {
            prompt: "Where does the course say a borrower finds out whether a loan permits prepayment?",
            options: ["On the form", "In the county land record where the security instrument was filed", "From the servicer, after the loan has been transferred for the first time", "In the state statute governing the security instrument used in that state"],
            correctIndex: 0,
            explanation: "Whether a prepayment penalty applies is one of the items the Loan Estimate's Loan Terms table has to state.",
            sourceLessonSlug: "amortisation-is-the-whole-trick",
          },
          {
            prompt: "What exercise does the lesson ask a learner to do once, by hand?",
            options: ["Run three months of a schedule", "Compute the annual percentage rate from the statutory formula", "Compare three lenders' quoted payments on a single sheet of paper", "Reconstruct the total interest percentage from a completed Closing Disclosure"],
            correctIndex: 0,
            explanation: "It takes about five minutes, and it permanently ends the question of whether a payment schedule someone showed you is plausible.",
            sourceLessonSlug: "amortisation-is-the-whole-trick",
          },
          {
            prompt: "What is the periodic rate, as this lesson defines it?",
            options: ["Annual rate divided by payments per year", "The rate a lender charges on the amount still outstanding at the end of the term", "The annual percentage rate reduced by the charges included in its computation", "The rate at which the payment itself increases from one year to the next"],
            correctIndex: 0,
            explanation: "It is the number actually multiplied by the balance to produce one period's interest.",
            sourceLessonSlug: "amortisation-is-the-whole-trick",
          },
          {
            prompt: "According to the lesson, who decided that early payments are mostly interest?",
            options: ["Nobody", "Congress, when it enacted the Truth in Lending Act's disclosure rules", "The lender, which sets the split between interest and principal at closing", "The servicer, which applies payments in the order stated in the note"],
            correctIndex: 0,
            explanation: "It falls out of charging interest on a declining balance while holding the payment constant, and no lender chose it.",
            sourceLessonSlug: "amortisation-is-the-whole-trick",
          },
          {
            prompt: "What is the third step of the amortisation rule?",
            options: ["New balance equals old less principal", "New payment equals old payment plus the accrued interest not yet collected", "New rate equals the old rate adjusted for the index published that month", "New term equals the remaining periods less the number of payments made"],
            correctIndex: 0,
            explanation: "Then the rule repeats, and the course insists there is no fifth step to the mechanism.",
            sourceLessonSlug: "amortisation-is-the-whole-trick",
          },
          {
            prompt: "What heading does Regulation Z require over the Loan Estimate's comparison table?",
            options: ["Comparisons", "Additional Disclosures, which collects the loan's remaining required statements", "Loan Costs, which itemises the charges the creditor imposes at origination", "Projected Payments, which shows how the payment changes over the loan's life"],
            correctIndex: 0,
            explanation: "The regulation also requires the statement telling the consumer to use these measures to compare this loan with other loans.",
            sourceLessonSlug: "the-numbers-the-form-must-print",
          },
          {
            prompt: "What statement must accompany the Comparisons heading?",
            options: ["Use these measures to compare", "This estimate is not a commitment to lend on the terms shown", "Your lender may change these figures at any time before closing", "These numbers assume you make every payment on its scheduled due date"],
            correctIndex: 0,
            explanation: "A regulator wrote the sentence telling the consumer what the box is for, which is the course's point about the whole form.",
            sourceLessonSlug: "the-numbers-the-form-must-print",
          },
          {
            prompt: "How many figures does the In 5 Years disclosure require?",
            options: ["Two", "One, the total the consumer will have paid by the sixtieth month", "Four, covering principal, interest, mortgage insurance and loan costs separately", "Five, one for each year of the period the disclosure covers"],
            correctIndex: 0,
            explanation: "A total paid in through the sixtieth month, and the principal that will have been paid off by then.",
            sourceLessonSlug: "the-numbers-the-form-must-print",
          },
          {
            prompt: "Through which month does the In 5 Years disclosure measure?",
            options: ["The sixtieth", "The seventy-second, which is six years after the first scheduled payment", "The last month of the fifth calendar year in which the loan is outstanding", "The month in which the balance first falls below the original amount borrowed"],
            correctIndex: 0,
            explanation: "The regulation counts through the end of the 60th month after the due date of the first periodic payment.",
            sourceLessonSlug: "the-numbers-the-form-must-print",
          },
          {
            prompt: "Which items does the In 5 Years total include, by the regulation's own list?",
            options: ["Principal, interest, mortgage insurance, loan costs", "Principal and interest only, since other charges vary with the property", "Every settlement charge the consumer paid at or before consummation", "The escrowed property tax and insurance, plus principal and interest"],
            correctIndex: 0,
            explanation: "The form pairs that total with the principal the consumer will have paid off by the same point.",
            sourceLessonSlug: "the-numbers-the-form-must-print",
          },
          {
            prompt: "What does the course say the In 5 Years box is, in relation to the amortisation lesson?",
            options: ["That lesson, printed", "A separate calculation that regulators derived from a different formula", "A projection that applies only to loans with an adjustable interest rate", "An estimate the lender may revise once the property has been appraised"],
            correctIndex: 0,
            explanation: "A learner who ran the four steps by hand already knows why the second figure is so much smaller than the first.",
            sourceLessonSlug: "the-numbers-the-form-must-print",
          },
          {
            prompt: "What sentence must the form print beside the annual percentage rate?",
            options: ["This is not your interest rate", "This rate is guaranteed for sixty days from the date of this estimate", "This rate may increase if the property appraises below the purchase price", "This rate includes every charge you will pay in connection with the loan"],
            correctIndex: 0,
            explanation: "The full statement calls the APR the consumer's costs over the loan term expressed as a rate, and then says it is not the interest rate.",
            sourceLessonSlug: "the-numbers-the-form-must-print",
          },
          {
            prompt: "What does the annual percentage rate express?",
            options: ["Cost over the term, as a rate", "The share of each payment that goes to interest in the first year", "The proportion of the property's value the lender is willing to finance", "The premium a borrower pays above the rate offered to the safest applicants"],
            correctIndex: 0,
            explanation: "Including certain charges, so two offers with different fee structures can be ranked against each other.",
            sourceLessonSlug: "the-numbers-the-form-must-print",
          },
          {
            prompt: "Can two loans carry the same interest rate and different annual percentage rates?",
            options: ["Yes, the charges differ", "No, because the annual percentage rate is derived from the interest rate alone", "Only where one loan is adjustable and the other carries a fixed rate", "Only where the two loans have different terms measured in years"],
            correctIndex: 0,
            explanation: "That is exactly why the APR exists as a separate figure and why the form says it is not the interest rate.",
            sourceLessonSlug: "the-numbers-the-form-must-print",
          },
          {
            prompt: "Which figure generates the interest line in the amortisation arithmetic?",
            options: ["The interest rate", "The annual percentage rate, once the loan costs are added to the balance", "The total interest percentage, divided by the number of payments remaining", "The total of payments, spread evenly across the months of the loan term"],
            correctIndex: 0,
            explanation: "The APR expresses cost as a rate for comparison; the interest rate is what multiplies the balance each period.",
            sourceLessonSlug: "the-numbers-the-form-must-print",
          },
          {
            prompt: "What does the total interest percentage state?",
            options: ["Interest as a share of the amount borrowed", "The share of the first sixty payments that consists of interest", "The rate at which unpaid interest is added back to the loan balance", "The proportion of the lender's revenue that comes from interest rather than fees"],
            correctIndex: 0,
            explanation: "The regulation requires the term, the abbreviation TIP, and a statement describing it as interest over the loan term as a percentage of the loan amount.",
            sourceLessonSlug: "the-numbers-the-form-must-print",
          },
          {
            prompt: "In the course's hypothetical, roughly what is the total interest percentage?",
            options: ["About 116 percent", "About 16 percent, because interest is spread over three hundred sixty months", "About 54 percent, matching the interest share of the first five years of payments", "About 6 percent, which is the annual rate the worked example assumed"],
            correctIndex: 0,
            explanation: "About 231,676 of interest on 200,000 borrowed, which the course says is nothing hidden and nothing unusual.",
            sourceLessonSlug: "the-numbers-the-form-must-print",
          },
          {
            prompt: "Which table on the Closing Disclosure repeats these figures?",
            options: ["Loan Calculations", "Summary of Borrower's Transaction, which reconciles the amounts paid", "Calculating Cash to Close, which compares the estimate against the final", "Projected Payments, which shows how the payment changes over the term"],
            correctIndex: 0,
            explanation: "It carries the total of payments alongside the annual percentage rate and the total interest percentage.",
            sourceLessonSlug: "the-numbers-the-form-must-print",
          },
          {
            prompt: "What does the Closing Disclosure's total of payments represent?",
            options: ["Everything paid if all payments are made", "The amount still outstanding after the sixtieth scheduled payment", "The sum of the settlement charges collected at or before consummation", "The cash the consumer must bring to the closing table on the day"],
            correctIndex: 0,
            explanation: "It is what the consumer will have paid after making all payments of principal, interest, mortgage insurance and loan costs as scheduled.",
            sourceLessonSlug: "the-numbers-the-form-must-print",
          },
          {
            prompt: "Why does it matter that the estimate and the final document report in the same units?",
            options: ["They stay comparable", "Because the regulation requires the two documents to state identical figures", "Because a difference between them entitles the consumer to cancel the loan", "Because the servicer uses the difference to set the first escrow analysis"],
            correctIndex: 0,
            explanation: "It makes them comparable to each other as well as to a rival offer, which is the whole design of the disclosure regime.",
            sourceLessonSlug: "the-numbers-the-form-must-print",
          },
          {
            prompt: "According to this lesson, what are all of these printing requirements an expression of?",
            options: ["TILA's stated purpose", "An industry agreement reached with the federal banking regulators", "A settlement of litigation brought against several national lenders", "A model form drafted by the states and later adopted by Congress"],
            correctIndex: 0,
            explanation: "The statute's purpose is meaningful disclosure so a consumer can compare more readily and avoid the uninformed use of credit.",
            sourceLessonSlug: "the-numbers-the-form-must-print",
          },
          {
            prompt: "What does the course call the total interest percentage?",
            options: ["The quietly devastating number", "The only figure on the form a lender is permitted to estimate", "A number that applies only to loans with a term longer than fifteen years", "A calculation the consumer must request, since it is not printed by default"],
            correctIndex: 0,
            explanation: "It converts total interest into a share of what was borrowed, in a unit anyone can compare.",
            sourceLessonSlug: "the-numbers-the-form-must-print",
          },
          {
            prompt: "What does the second In 5 Years figure tell the consumer?",
            options: ["Principal paid off", "The balance that will remain outstanding at that point", "The interest that will have accrued by the sixtieth month", "The equity the property will have gained through appreciation"],
            correctIndex: 0,
            explanation: "The regulation requires the statement Principal you will have paid off beside that dollar amount.",
            sourceLessonSlug: "the-numbers-the-form-must-print",
          },
          {
            prompt: "Why does the course say a learner who did the arithmetic is not demoralised by the In 5 Years box?",
            options: ["They already know why", "Because the box is optional and may be omitted from the estimate", "Because their own calculation would produce a much more favourable figure", "Because the regulation lets a lender exclude loan costs from that total"],
            correctIndex: 0,
            explanation: "Most people find the figure demoralising and cannot explain it; running the four steps by hand supplies the explanation.",
            sourceLessonSlug: "the-numbers-the-form-must-print",
          },
          {
            prompt: "Which of these does the course say is hidden in a total interest percentage of about 116 percent?",
            options: ["Nothing", "A charge the lender adds outside the interest rate disclosed", "An assumption that the borrower will refinance before the term ends", "A servicing fee that is collected annually and never separately stated"],
            correctIndex: 0,
            explanation: "It is what a long term at a positive rate produces, stated once in a comparable unit.",
            sourceLessonSlug: "the-numbers-the-form-must-print",
          },
          {
            prompt: "What is the practical use of the Comparisons table, in one phrase?",
            options: ["Ranking offers", "Calculating the cash a buyer must bring to closing", "Confirming that the appraised value supports the purchase price", "Recording the lender's interest in the county land records"],
            correctIndex: 0,
            explanation: "The regulation's own heading statement tells the consumer to use these measures to compare this loan with other loans.",
            sourceLessonSlug: "the-numbers-the-form-must-print",
          },
          {
            prompt: "Who wrote the sentence on the form telling a consumer what the Comparisons box is for?",
            options: ["A regulator", "The lender's compliance department, following an industry template", "The consumer's own settlement agent, as part of the closing package", "A trade association that publishes model forms for its member lenders"],
            correctIndex: 0,
            explanation: "Regulation Z prescribes the heading and the statement that goes with it, which is the course's point about the whole document.",
            sourceLessonSlug: "the-numbers-the-form-must-print",
          },
          {
            prompt: "What unit does the total interest percentage put interest into?",
            options: ["A share of the loan amount", "Dollars per month over the first five years of the loan", "A rate per year, comparable with the disclosed interest rate", "A ratio of interest to the property's appraised market value"],
            correctIndex: 0,
            explanation: "Expressing it as a percentage of the amount borrowed is what makes it comparable across two offers of different sizes.",
            sourceLessonSlug: "the-numbers-the-form-must-print",
          },
          {
            prompt: "Which of these does a promissory note state?",
            options: ["Amount, rate, term, payments", "The legal description of the parcel offered as security", "The lender's remedies if the borrower fails to pay on time", "The county in which the instrument must be recorded"],
            correctIndex: 0,
            explanation: "It also states what happens if a payment is late, and it is the loan itself rather than the pledge of the property.",
            sourceLessonSlug: "the-note-and-the-security-instrument",
          },
          {
            prompt: "What does the course say a land record is not?",
            options: ["A filing cabinet at a bank", "A public register of interests in a specific parcel of ground", "A document a lender is required to record after making a loan", "A register that a member of the public is entitled to search"],
            correctIndex: 0,
            explanation: "It is a public register of who has what interest in a specific piece of ground, which is why Section 6 lives in the same place.",
            sourceLessonSlug: "the-note-and-the-security-instrument",
          },
          {
            prompt: "Why does the course refuse to state a national foreclosure rule?",
            options: ["It is state law", "Because foreclosure procedures are set by each lender's own servicing manual", "Because the rules were suspended and have not yet been fully reinstated", "Because federal regulation preempts state procedure only for insured loans"],
            correctIndex: 0,
            explanation: "The same reason it states no national rule about eviction, and the variation between states is real rather than cosmetic.",
            sourceLessonSlug: "the-note-and-the-security-instrument",
          },
          {
            prompt: "What does the course say a statute listing escrow reduction among its purposes tells you?",
            options: ["The practice was a problem", "That escrow accounts are prohibited on federally related mortgage loans", "That Congress intended lenders to stop collecting tax and insurance entirely", "That the amount held in escrow is capped at one year of anticipated charges"],
            correctIndex: 0,
            explanation: "Congress did not invent the arrangement, but it named reducing the amounts required among RESPA's four stated purposes.",
            sourceLessonSlug: "the-note-and-the-security-instrument",
          },
          {
            prompt: "What does the course say is the most common way two mortgage offers get compared wrongly?",
            options: ["Different payment components", "Comparing the annual percentage rate rather than the interest rate", "Comparing loans of different terms without adjusting for the number of years", "Comparing an estimate against a final disclosure rather than two estimates"],
            correctIndex: 0,
            explanation: "A payment that includes tax and insurance is not the same object as one that does not, and the federal forms exist partly to stop that error.",
            sourceLessonSlug: "the-note-and-the-security-instrument",
          },
          {
            prompt: "What is the second step of the amortisation rule?",
            options: ["Principal equals payment minus interest", "Interest equals the payment multiplied by the periodic rate", "Balance equals the payment divided by the number of periods left", "Payment equals the balance divided by the remaining term in months"],
            correctIndex: 0,
            explanation: "The interest is taken first, and whatever remains of the payment is what reduces the amount owed.",
            sourceLessonSlug: "amortisation-is-the-whole-trick",
          },
          {
            prompt: "In the worked example, what is the approximate level payment?",
            options: ["1,199.10", "1,000.00, which is the interest charged in the first month", "555.56, being 200,000 divided by the 360 scheduled payments", "1,666.67, so that the loan repays in full within twenty years"],
            correctIndex: 0,
            explanation: "That is the payment that amortises 200,000 to zero over 360 months at a hypothetical 0.5 percent a month.",
            sourceLessonSlug: "amortisation-is-the-whole-trick",
          },
          {
            prompt: "In the worked example, what is the balance after the first payment?",
            options: ["199,800.90", "199,000.00, once the first month's interest has been credited", "198,800.90, because two months of principal are applied at the outset", "200,000.00, since the first payment consists entirely of interest"],
            correctIndex: 0,
            explanation: "The first payment reduced the balance by about 199.10, because about 1,000.00 of it went to interest.",
            sourceLessonSlug: "amortisation-is-the-whole-trick",
          },
          {
            prompt: "In the worked example, roughly how much interest was paid over the first five years?",
            options: ["About 58,054", "About 13,892, with the remainder reducing the outstanding balance", "About 71,946, being the whole of the payments made in that period", "About 231,676, which is the interest charged across the entire term"],
            correctIndex: 0,
            explanation: "About 71,946 was paid in and about 13,892 of it reduced the debt, leaving the rest as interest.",
            sourceLessonSlug: "amortisation-is-the-whole-trick",
          },
          {
            prompt: "Why did the course pick a rate that works out to half a percent a month?",
            options: ["The arithmetic checks by hand", "Because it matches the rate used in the model form the regulation prints", "Because half a percent is the lowest rate a lender may lawfully charge", "Because monthly compounding is only permitted at rates below one percent"],
            correctIndex: 0,
            explanation: "The course prints no market rate, and a round hypothetical lets a reader verify every figure with a pen.",
            sourceLessonSlug: "amortisation-is-the-whole-trick",
          },
          {
            prompt: "Which figure on the Loan Estimate answers the amortisation lesson most directly?",
            options: ["In 5 Years", "Costs at Closing, which totals the charges due at consummation", "The Loan Terms table, which states the amount borrowed and the rate", "Calculating Cash to Close, which reconciles the estimate against the final"],
            correctIndex: 0,
            explanation: "It prints the total paid through the sixtieth month beside the principal that will have been paid off by then.",
            sourceLessonSlug: "the-numbers-the-form-must-print",
          },
          {
            prompt: "What must accompany the total interest percentage on the form, besides the figure?",
            options: ["The term, the abbreviation, and a statement", "A comparison against the average for loans of that size and term", "A signature line confirming the consumer has read and understood it", "A footnote naming the index against which the figure was calculated"],
            correctIndex: 0,
            explanation: "The regulation requires the words Total Interest Percentage, the abbreviation TIP, and the sentence describing what the figure means.",
            sourceLessonSlug: "the-numbers-the-form-must-print",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3 — Two forms you can hold
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "what-starts-the-clock",
      title: "9 · Six pieces of information, and the clock they start",
      section: "Section 3 · Two forms you can hold",
      body: `Everything in this section runs off one defined word. Until you have made an **application**, a lender owes you no form at all. The moment you have, a clock starts and it is short.

**The definition, in the regulation's own words.** Regulation Z gives a general meaning first: "Application means the submission of a consumer's financial information for the purposes of obtaining an extension of credit" (12 CFR § 1026.2, n.d.). Then, for the transactions this course is about, it gets specific. For a transaction subject to the Loan Estimate and Closing Disclosure rules, "an application consists of the submission of the consumer's name, the consumer's income, the consumer's social security number to obtain a credit report, the property address, an estimate of the value of the property, and the mortgage loan amount sought" (12 CFR § 1026.2, n.d.).

**Count them. Six.** Name, income, social security number to obtain a credit report, property address, an estimate of the property's value, and the loan amount sought. That is the whole list.

**This is the most useful single fact in the section**, and almost nobody is told it. A conversation in which you have supplied all six of those things is an application, whatever anyone calls it, and it triggers a duty. A conversation in which one of them is missing is not, and no form is owed. If you want the form, supply the six. If you are not ready for the clock to start, know which one you are holding back and why.

**Then the duty.** In a closed-end consumer credit transaction secured by real property, other than a reverse mortgage, "the creditor shall provide the consumer with good faith estimates of the disclosures in § 1026.37" (12 CFR § 1026.19, n.d.). Note the phrase **good faith estimates**, because the next lesson but one turns on exactly how much good faith is measured in dollars.

**Deadline one, the front end.** The creditor "shall deliver or place in the mail the disclosures required under paragraph (e)(1)(i) of this section not later than the third business day after the creditor receives the consumer's application, as defined in § 1026.2(a)(3)" (12 CFR § 1026.19, n.d.).

**Deadline two, the back end.** Except in a stated case, the creditor "shall deliver or place in the mail the disclosures required under paragraph (e)(1)(i) of this section not later than the seventh business day before consummation of the transaction" (12 CFR § 1026.19, n.d.).

**Read those two together, because they do different jobs.** The first one means you cannot be strung along: three business days after the six items are in, the estimate is owed. The second means you cannot be handed the estimate at the door: it must be out at least seven business days before the transaction is consummated, so there is time to read it and time to go and get another one.

**Consummation is a defined moment, not the day you move in.** Regulation B, in the closely related rule about appraisals, defines it: "The term 'consummation' means the time that a consumer becomes contractually obligated on a closed-end credit transaction" (12 CFR § 1002.14, n.d.). It is the moment of obligation on the loan.

**Why the six-item definition matters more than it looks.** Before these rules, "application" was whatever a lender said it was, so the duty to disclose could be postponed indefinitely by declining to call a conversation an application. Defining the term by a closed list of six items takes that discretion away. It is the same move MONEY-01 taught in another statute, where rights attach to a defined term rather than to a feeling, and it is worth recognising as a pattern: **when a consumer protection depends on a word, look for the definition, because that is where the protection is either real or hollow.**

**One practical consequence.** Asking three lenders what they would charge produces three conversations. Giving three lenders the six items produces three Loan Estimates, on the same federally prescribed form, in the same units.

:::reveal What six items make an application for a transaction subject to these rules? ||| Name, income, social security number to obtain a credit report, property address, an estimate of the property's value, and the mortgage loan amount sought.

:::reveal How long does a creditor have to deliver or mail the Loan Estimate? ||| Not later than the third business day after the creditor receives the consumer's application, as the regulation defines it.

:::reveal What is consummation, in the regulation's own definition? ||| The time that a consumer becomes contractually obligated on a closed-end credit transaction.

## Vocabulary
- **Application**: for these transactions, a closed list of six submitted items, which is what turns a conversation into a duty to disclose.
- **Good faith estimate**: the standard the Loan Estimate is held to, measured later in dollars by the tolerance rules rather than by intention.
- **Consummation**: the moment the consumer becomes contractually obligated on the loan, which is the anchor for the disclosure deadlines.
- **Business day**: the unit both Loan Estimate deadlines are counted in, which is why a calendar week is the wrong way to plan around them.

## Sources
12 CFR § 1026.2. (n.d.). *Definitions and rules of construction*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/1026.2

12 CFR § 1026.19. (n.d.). *Certain mortgage and variable-rate transactions*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/1026.19

12 CFR § 1002.14. (n.d.). *Rules on providing appraisals and other valuations*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/1002.14`,
    },
    {
      slug: "reading-the-loan-estimate",
      title: "10 · Reading the Loan Estimate, box by box",
      section: "Section 3 · Two forms you can hold",
      body: `The Loan Estimate is not a letter and it is not a marketing document. It is a form whose contents are prescribed paragraph by paragraph in federal regulation, which is exactly what makes two of them comparable.

**The structure, in the regulation's own headings.** Section 1026.37 requires, in order: General information, Loan terms, Projected payments, Costs at closing, Web site reference, Closing cost details covering loan costs, Closing cost details covering other costs, Calculating cash to close, an Adjustable payment table, an Adjustable interest rate table, Contact information, Comparisons, Other considerations, a Signature statement, and rules on the Form of disclosures (12 CFR § 1026.37, n.d.).

**That list is worth reading twice**, because it tells you what a lender is not allowed to leave out. A quote scribbled on a business card has no Comparisons table and no Calculating cash to close. It is not a worse version of this form. It is a different kind of object.

**The Loan terms table is the top of the form**, and the regulation prescribes both what goes in it and the label each item carries. It requires a separate table under the heading "Loan Terms", containing:

- **Loan amount**, which is "The total amount the consumer will borrow, as reflected by the face amount of the note, labeled 'Loan Amount.'"
- **Interest rate**, which is "The interest rate that will be applicable to the transaction at consummation, labeled 'Interest Rate.'"
- **Principal and interest payment**, which is "The initial periodic payment amount that will be due under the terms of the legal obligation, labeled 'Principal & Interest,'"
- **Prepayment penalty**, which is "A statement of whether the transaction includes a prepayment penalty, labeled 'Prepayment Penalty.'"
- **Balloon payment**, which is "A statement of whether the transaction includes a balloon payment, labeled 'Balloon Payment.'" (12 CFR § 1026.37, n.d.)

**Two of those five are yes-or-no questions**, and they are the two people forget to ask. A prepayment penalty decides whether the extra-to-principal idea from the last section is available to you at all. A balloon payment decides whether the schedule you have been shown actually retires the debt, or whether a large sum falls due at the end of it. The form asks both, on your behalf, every time.

**The regulation also requires disclosure of adjustments after consummation** for the loan amount, the interest rate and the principal and interest payment (12 CFR § 1026.37, n.d.). So "does this number change later" is a question the form is built to answer rather than one you have to think to ask.

**Projected payments is the box that answers a different question.** The regulation frames it around the events that force a new figure to be shown: the initial periodic payment or range of payments is disclosed as one thing, and then certain events "require the disclosure of additional separate periodic payments or ranges of payments" (12 CFR § 1026.37, n.d.). In plain terms, if the payment is going to change, the form has to show you the changed one too, rather than showing the low starting figure alone.

**Costs at closing, and the two cost sections behind it.** The form carries a Costs at closing summary, and behind it two itemised sections: loan costs, the charges connected to getting the loan, and other costs, the charges connected to the transaction and the property. Calculating cash to close then reconciles all of it into the amount you would need to bring. And then Comparisons, which the previous lesson took apart.

**How to use the form, in one move.** Lay two of them side by side and read them in the regulation's own order. Because the boxes are prescribed, the same number is in the same place on both, and any difference between two offers is visible rather than argued about. That is the entire design, and it is why Section 1 quoted two statutes that both say comparison is the point.

:::reveal Which two Loan Terms items are yes-or-no statements the form makes on your behalf? ||| Whether the transaction includes a prepayment penalty, and whether it includes a balloon payment.

:::reveal What does the regulation say the loan amount is, in its own words? ||| The total amount the consumer will borrow, as reflected by the face amount of the note, labeled Loan Amount.

:::reveal What forces the Projected payments box to show more than one figure? ||| Certain events require the disclosure of additional separate periodic payments or ranges of payments, so a payment that changes has to be shown as changed.

## Vocabulary
- **Loan Terms table**: the prescribed top table of the Loan Estimate, carrying the loan amount, interest rate, principal and interest payment, prepayment penalty and balloon payment under labels the regulation dictates.
- **Prepayment penalty**: a charge for paying ahead of schedule, which the form must state the presence or absence of, and which decides whether paying extra to principal is available.
- **Balloon payment**: a large amount falling due at the end of a schedule that has not retired the debt, which the form must also state the presence or absence of.
- **Projected payments**: the box that must show additional payments or ranges where an event will change the periodic payment during the loan.
- **Loan costs and other costs**: the two itemised closing cost sections, separating charges for getting the loan from charges tied to the transaction and the property.

## Sources
12 CFR § 1026.37. (n.d.). *Content of disclosures for certain mortgage transactions (Loan Estimate)*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/1026.37

15 U.S.C. § 1601. (n.d.). *Congressional findings and declaration of purpose*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/15/1601`,
    },
    {
      slug: "the-closing-disclosure-and-the-tolerances",
      title: "11 · The Closing Disclosure, and the rules that make an estimate mean something",
      section: "Section 3 · Two forms you can hold",
      body: `An estimate nobody is held to is a sales document. What turns the Loan Estimate into a promise is a set of rules about how far the final numbers may move.

**First, the final form itself.** In a transaction subject to the Loan Estimate rule, "the creditor shall provide the consumer with the disclosures required under § 1026.38 reflecting the actual terms of the transaction" (12 CFR § 1026.19, n.d.). Its contents are prescribed the same way, running through General information, Loan terms, Projected payments, Costs at closing, an alternative cash-to-close table, loan costs, other costs, closing cost totals, Calculating cash to close, summaries of the borrower's and the seller's transactions, Loan disclosures, an adjustable payment table, an adjustable interest rate table, Loan calculations, other disclosures, a questions notice, contact information, a signature statement, and rules on the form of disclosures (12 CFR § 1026.38, n.d.).

**Second, the time to read it.** With stated exceptions, the creditor "shall ensure that the consumer receives the disclosures required under paragraph (f)(1)(i) of this section no later than three business days before consummation" (12 CFR § 1026.19, n.d.). Not delivered by. **Received** by. Three business days before the moment you become contractually obligated.

**That waiting period is the single most consumer-protective mechanism in the section**, because the alternative is reading forty numbers for the first time in a room where everyone else is waiting for you to sign.

**Third, and this is the part that makes the estimate binding: good faith is measured in dollars.** The general rule is strict. "An estimated closing cost disclosed pursuant to paragraph (e) of this section is in good faith if the charge paid by or imposed on the consumer does not exceed the amount originally disclosed under paragraph (e)(1)(i) of this section", subject to the exceptions that follow (12 CFR § 1026.19, n.d.). **Read that plainly: for those charges, the estimate is a ceiling.** Not a guess, not an indication. A ceiling.

**Fourth, the ten percent exception, and note what it costs the lender to use it.** A different rule applies to certain third-party charges. "An estimate of a charge for a third-party service or a recording fee is in good faith if: (A) The aggregate amount of charges for third-party services and recording fees paid by or imposed on the consumer does not exceed the aggregate amount of such charges disclosed under paragraph (e)(1)(i) of this section by more than 10 percent; (B) The charge for the third-party service is not paid to the creditor or an affiliate of the creditor; and (C) The creditor permits the consumer to shop for the third-party service" (12 CFR § 1026.19, n.d.).

**All three conditions, not one.** The looser ten percent standard is available only where the money is not going to the creditor or its affiliate and where the consumer was allowed to shop. A charge paid to the creditor's own affiliate does not get the ten percent room. That is a rule about self-dealing wearing the clothes of a rule about estimates.

**Fifth, the statute underneath all of it.** RESPA makes the underlying conduct unlawful rather than merely disclosable. "No person shall give and no person shall accept any fee, kickback, or thing of value pursuant to any agreement or understanding, oral or otherwise, that business incident to or a part of a real estate settlement service involving a federally related mortgage loan shall be referred to any person" (12 U.S.C. § 2607, n.d.). And separately, no person shall give or accept "any portion, split, or percentage of any charge made or received for the rendering of a real estate settlement service ... other than for services actually performed" (12 U.S.C. § 2607, n.d.). The section carries a criminal penalty: a violator "shall be fined not more than $10,000 or imprisoned for not more than one year, or both" (12 U.S.C. § 2607, n.d.).

**Put the section together and the design is visible.** Six items start a clock. Three business days later a form arrives whose contents are dictated line by line. Certain of its numbers are a ceiling; others may move by a stated percentage only if the money goes somewhere independent. Three business days before you are obligated, a second prescribed form arrives with the actual terms. **Every one of those is a rule you can check.**

:::reveal How long before consummation must the consumer RECEIVE the Closing Disclosure? ||| No later than three business days before consummation, and the rule is about receipt rather than delivery.

:::reveal For the charges under the general rule, what is the disclosed estimate? ||| A ceiling. The charge paid is in good faith only if it does not exceed the amount originally disclosed.

:::reveal What three conditions must all be met for the ten percent tolerance to apply? ||| The aggregate does not exceed the disclosed aggregate by more than ten percent, the charge is not paid to the creditor or an affiliate, and the consumer was permitted to shop.

## Vocabulary
- **Closing Disclosure**: the prescribed final form reflecting the actual terms of the transaction, whose twenty required parts mirror the Loan Estimate's structure.
- **Three-business-day rule**: the requirement that the consumer receive the Closing Disclosure at least three business days before consummation, which is about receipt and not delivery.
- **Zero tolerance**: the general good faith rule under which a disclosed closing cost may not be exceeded at all.
- **Ten percent tolerance**: the looser aggregate standard for third-party services and recording fees, available only where the money does not go to the creditor or an affiliate and the consumer could shop.
- **Unearned fee**: a portion, split or percentage of a settlement service charge given or accepted other than for services actually performed, which RESPA makes unlawful.

## Sources
12 CFR § 1026.19. (n.d.). *Certain mortgage and variable-rate transactions*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/1026.19

12 CFR § 1026.38. (n.d.). *Content of disclosures for certain mortgage transactions (Closing Disclosure)*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/1026.38

12 U.S.C. § 2607. (n.d.). *Prohibition against kickbacks and unearned fees*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/12/2607`,
    },
    {
      slug: "quiz-the-forms",
      title: "12 · Knowledge check: two forms you can hold",
      section: "Section 3 · Two forms you can hold",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "Until a consumer has made an application, what does a lender owe them?",
            options: ["No form at all", "A written quotation of the rate available on the day of the enquiry", "A Loan Estimate, since the duty attaches to any request for pricing", "A statement of the charges the lender imposes on every borrower"],
            correctIndex: 0,
            explanation: "Everything in this section runs off that defined word, and the moment an application exists a short clock starts.",
            sourceLessonSlug: "what-starts-the-clock",
          },
          {
            prompt: "What is Regulation Z's general definition of an application?",
            options: ["Submission of financial information for credit", "A signed request on a form the creditor supplies for that purpose", "An enquiry recorded by the creditor and reported to a consumer reporting agency", "A commitment by the consumer to proceed with the transaction if approved"],
            correctIndex: 0,
            explanation: "The general definition is the submission of a consumer's financial information for the purposes of obtaining an extension of credit.",
            sourceLessonSlug: "what-starts-the-clock",
          },
          {
            prompt: "How many items make an application for a transaction subject to these rules?",
            options: ["Six", "Four, since the property address and value are treated as one item", "Nine, once the creditor's own verification requirements are counted", "Whatever number the creditor's written policy specifies for that product"],
            correctIndex: 0,
            explanation: "The regulation lists them in a closed set, which is what takes the discretion away from the creditor.",
            sourceLessonSlug: "what-starts-the-clock",
          },
          {
            prompt: "Which of these is on the regulation's list of application items?",
            options: ["An estimate of the property's value", "A signed purchase contract for the property being financed", "Two years of federal income tax returns for every borrower", "Proof that the consumer holds the funds needed to close"],
            correctIndex: 0,
            explanation: "The six are name, income, social security number to obtain a credit report, property address, an estimate of value, and the loan amount sought.",
            sourceLessonSlug: "what-starts-the-clock",
          },
          {
            prompt: "Why does the regulation mention the consumer's social security number specifically?",
            options: ["To obtain a credit report", "To confirm the consumer's identity under anti-money-laundering rules", "To report the resulting loan to the federal mortgage data collection", "To determine whether the consumer is eligible for a government programme"],
            correctIndex: 0,
            explanation: "The list names it as the consumer's social security number to obtain a credit report, which links this section to MONEY-01.",
            sourceLessonSlug: "what-starts-the-clock",
          },
          {
            prompt: "What is true of a conversation in which all six items have been supplied?",
            options: ["It is an application", "It is an application only if the creditor calls it one in writing", "It is a pre-qualification, which carries no disclosure obligation", "It is an application only where the consumer has paid an application fee"],
            correctIndex: 0,
            explanation: "It triggers the duty whatever anyone calls it, which is why the closed list is the most useful fact in the section.",
            sourceLessonSlug: "what-starts-the-clock",
          },
          {
            prompt: "What does the course advise a reader to know if they are not ready for the clock to start?",
            options: ["Which item they are holding back", "Which lender is most likely to approve the application quickly", "How many business days remain before the offer they hold expires", "What the creditor's internal policy says about incomplete submissions"],
            correctIndex: 0,
            explanation: "If you want the form, supply the six; if you are not ready, know which one is missing and why.",
            sourceLessonSlug: "what-starts-the-clock",
          },
          {
            prompt: "What must the creditor provide in a closed-end transaction secured by real property?",
            options: ["Good faith estimates of the disclosures", "A binding commitment to lend on the terms shown in the estimate", "A written statement of the reasons any application would be refused", "A comparison of its own offer against those of two competing lenders"],
            correctIndex: 0,
            explanation: "The regulation excepts a reverse mortgage, and the phrase good faith is measured in dollars by the tolerance rules.",
            sourceLessonSlug: "what-starts-the-clock",
          },
          {
            prompt: "By when must the Loan Estimate be delivered or placed in the mail?",
            options: ["The third business day after application", "Within seven calendar days of the consumer's first enquiry about pricing", "At the same time the creditor orders an appraisal of the subject property", "Before the consumer signs a purchase contract for the property"],
            correctIndex: 0,
            explanation: "The clock runs from the creditor's receipt of the application as the regulation defines that term.",
            sourceLessonSlug: "what-starts-the-clock",
          },
          {
            prompt: "What is the second Loan Estimate deadline?",
            options: ["The seventh business day before consummation", "Thirty days before the scheduled date of the closing", "The same day the Closing Disclosure is delivered to the consumer", "The last business day of the month in which the application was made"],
            correctIndex: 0,
            explanation: "The rule states an exception, but the general position is that the estimate must be out at least that far in advance.",
            sourceLessonSlug: "what-starts-the-clock",
          },
          {
            prompt: "What does the seven-business-day deadline protect?",
            options: ["Time to read and to shop", "The creditor's right to withdraw an offer before consummation", "The consumer's ability to cancel after the transaction has closed", "The seller's interest in a timely completion of the sale"],
            correctIndex: 0,
            explanation: "It means the estimate cannot be handed over at the door, so there is time to read it and to go and get another one.",
            sourceLessonSlug: "what-starts-the-clock",
          },
          {
            prompt: "What does the three-business-day deadline for the Loan Estimate protect?",
            options: ["Against being strung along", "Against a creditor changing the rate after an application is filed", "Against a settlement agent adding charges the creditor never quoted", "Against a consumer applying to more than one lender at the same time"],
            correctIndex: 0,
            explanation: "Three business days after the six items are in, the estimate is owed, whatever the creditor would prefer.",
            sourceLessonSlug: "what-starts-the-clock",
          },
          {
            prompt: "What is consummation, in the regulation's definition?",
            options: ["When the consumer becomes contractually obligated", "The date the consumer takes physical possession of the property", "The day the deed is recorded in the county land records", "The moment the creditor disburses the loan proceeds to the seller"],
            correctIndex: 0,
            explanation: "It is the moment of obligation on the loan, and it is not the day anyone moves in.",
            sourceLessonSlug: "what-starts-the-clock",
          },
          {
            prompt: "Before these rules, what determined whether a conversation was an application?",
            options: ["Whatever the lender said", "A federal register of applications maintained by each creditor", "The point at which a consumer report was obtained by the lender", "Whether a fee had been collected from the consumer in advance"],
            correctIndex: 0,
            explanation: "That is why defining the term by a closed list of six items takes the discretion away.",
            sourceLessonSlug: "what-starts-the-clock",
          },
          {
            prompt: "What pattern does this lesson tell a learner to recognise?",
            options: ["Look for the definition", "Assume a longer statute offers stronger protection than a shorter one", "Treat agency guidance as equal in force to the regulation it interprets", "Expect a consumer right to be enforced by the agency rather than the consumer"],
            correctIndex: 0,
            explanation: "When a consumer protection depends on a word, the definition is where the protection is either real or hollow.",
            sourceLessonSlug: "what-starts-the-clock",
          },
          {
            prompt: "Which earlier course made the same move with a defined term?",
            options: ["MONEY-01", "MONEY-05, which defines a filing status for a domestic tax return", "WARRANT-02, which defines eligibility for a federal farm credit programme", "MONEY-02, which defines the identity documents a bank must collect"],
            correctIndex: 0,
            explanation: "There, rights attached to a defined term rather than to the feeling of having been turned down.",
            sourceLessonSlug: "what-starts-the-clock",
          },
          {
            prompt: "In what unit are both Loan Estimate deadlines counted?",
            options: ["Business days", "Calendar weeks running from the date of the application", "Banking days, excluding any day a federal reserve bank is closed", "Working hours, measured against the creditor's published office schedule"],
            correctIndex: 0,
            explanation: "Which is why a calendar week is the wrong way to plan around them.",
            sourceLessonSlug: "what-starts-the-clock",
          },
          {
            prompt: "What kind of transaction does the Loan Estimate rule exclude by name?",
            options: ["A reverse mortgage", "A loan secured by a second lien on the consumer's dwelling", "A loan made by a creditor that originates fewer than ten loans a year", "A transaction in which the consumer pays cash for part of the price"],
            correctIndex: 0,
            explanation: "The rule covers closed-end consumer credit secured by real property or a cooperative unit, other than a reverse mortgage.",
            sourceLessonSlug: "what-starts-the-clock",
          },
          {
            prompt: "What does giving three lenders the six items produce?",
            options: ["Three Loan Estimates", "Three credit enquiries and no obligation on any lender to respond", "Three verbal quotations that may each be withdrawn without notice", "One estimate, since only the first lender to receive them owes a form"],
            correctIndex: 0,
            explanation: "On the same federally prescribed form, in the same units, which is what makes them comparable at all.",
            sourceLessonSlug: "what-starts-the-clock",
          },
          {
            prompt: "What does the Loan Estimate's prescribed content make possible?",
            options: ["Comparison", "A binding rate lock for the period the estimate remains open", "A guarantee that the final charges will match the estimate exactly", "A right to withdraw from the purchase contract without forfeiting a deposit"],
            correctIndex: 0,
            explanation: "It is a form whose contents are prescribed paragraph by paragraph, which is exactly what makes two of them comparable.",
            sourceLessonSlug: "reading-the-loan-estimate",
          },
          {
            prompt: "Which of these is one of the regulation's own top-level headings for the Loan Estimate?",
            options: ["Calculating cash to close", "Summary of seller's transaction, which reconciles the seller's side", "Escrow account disclosure, which projects the first year of escrow", "Servicing transfer notice, which names the party collecting payments"],
            correctIndex: 0,
            explanation: "The prescribed order also includes General information, Loan terms, Projected payments, Costs at closing and Comparisons.",
            sourceLessonSlug: "reading-the-loan-estimate",
          },
          {
            prompt: "How does the course describe a quote scribbled on a business card?",
            options: ["A different kind of object", "A Loan Estimate in substance, though not in the prescribed format", "An enforceable offer, provided the lender signed and dated it", "A preliminary disclosure that the regulation permits before application"],
            correctIndex: 0,
            explanation: "It has no Comparisons table and no Calculating cash to close, so it is not a worse version of the form.",
            sourceLessonSlug: "reading-the-loan-estimate",
          },
          {
            prompt: "What does the regulation say the loan amount is?",
            options: ["The face amount of the note", "The purchase price of the property less the consumer's down payment", "The amount the creditor expects to disburse at the closing table", "The appraised value multiplied by the creditor's maximum lending ratio"],
            correctIndex: 0,
            explanation: "It is the total amount the consumer will borrow, as reflected by the face amount of the note, labeled Loan Amount.",
            sourceLessonSlug: "reading-the-loan-estimate",
          },
          {
            prompt: "Which interest rate must the Loan Terms table state?",
            options: ["The rate applicable at consummation", "The rate the creditor advertised on the day the application was made", "The highest rate the loan could reach over the whole of its term", "The average rate the creditor charged on similar loans that month"],
            correctIndex: 0,
            explanation: "The regulation requires the rate that will be applicable to the transaction at consummation, labeled Interest Rate.",
            sourceLessonSlug: "reading-the-loan-estimate",
          },
          {
            prompt: "What does the Principal and Interest line show?",
            options: ["The initial periodic payment", "The total of principal and interest over the whole loan term", "The share of the payment that reduces the balance in the first year", "The payment including escrowed property tax and insurance amounts"],
            correctIndex: 0,
            explanation: "The regulation requires the initial periodic payment amount due under the terms of the legal obligation.",
            sourceLessonSlug: "reading-the-loan-estimate",
          },
          {
            prompt: "What does the form say about a prepayment penalty?",
            options: ["Whether the transaction includes one", "How much it would cost to repay the loan in full after five years", "That the consumer may waive it by initialling the relevant line", "That it applies to any payment made before its scheduled due date"],
            correctIndex: 0,
            explanation: "It is a statement of whether the transaction includes a prepayment penalty, labeled Prepayment Penalty.",
            sourceLessonSlug: "reading-the-loan-estimate",
          },
          {
            prompt: "What does the form say about a balloon payment?",
            options: ["Whether the transaction includes one", "The exact date on which the final large payment would fall due", "Whether the creditor will refinance the balance when it comes due", "How the balloon amount compares with the original loan amount"],
            correctIndex: 0,
            explanation: "It is a statement of whether the transaction includes a balloon payment, labeled Balloon Payment.",
            sourceLessonSlug: "reading-the-loan-estimate",
          },
          {
            prompt: "Which two Loan Terms items does the course call the ones people forget to ask about?",
            options: ["Prepayment penalty and balloon payment", "The interest rate and the initial principal and interest payment", "The loan amount and the total of the costs due at closing", "The adjustable payment table and the adjustable interest rate table"],
            correctIndex: 0,
            explanation: "They are yes-or-no questions, and the form asks both on the consumer's behalf every time.",
            sourceLessonSlug: "reading-the-loan-estimate",
          },
          {
            prompt: "Why does a prepayment penalty matter to the previous section's arithmetic?",
            options: ["It decides whether paying extra is available", "It raises the interest rate applied to the outstanding balance", "It shortens the term the amortisation schedule is calculated over", "It converts the loan from an amortising loan to an interest-only loan"],
            correctIndex: 0,
            explanation: "Applying an extra amount to principal lowers every later interest figure, but only where the loan permits it.",
            sourceLessonSlug: "reading-the-loan-estimate",
          },
          {
            prompt: "Why does a balloon payment matter?",
            options: ["The schedule may not retire the debt", "It increases the periodic payment throughout the loan term", "It is charged only where the borrower repays the loan early", "It requires the creditor to re-appraise the property before maturity"],
            correctIndex: 0,
            explanation: "A large sum can fall due at the end of a schedule the consumer thought was paying the loan off.",
            sourceLessonSlug: "reading-the-loan-estimate",
          },
          {
            prompt: "Which three figures must the form address for adjustments after consummation?",
            options: ["Loan amount, interest rate, payment", "Loan costs, other costs, and the total cash to close", "The appraised value, the purchase price, and the down payment", "Escrow, property tax, and the homeowner's insurance premium"],
            correctIndex: 0,
            explanation: "So the question of whether a number changes later is one the form is built to answer rather than one a consumer must think to ask.",
            sourceLessonSlug: "reading-the-loan-estimate",
          },
          {
            prompt: "What triggers additional entries in the Projected payments box?",
            options: ["Events that change the payment", "The creditor's decision to include an escrow account with the loan", "The consumer's request for a longer term than the creditor offered", "A change in the property's assessed value during the loan term"],
            correctIndex: 0,
            explanation: "Certain events require disclosure of additional separate periodic payments or ranges of payments, so a rising payment must be shown.",
            sourceLessonSlug: "reading-the-loan-estimate",
          },
          {
            prompt: "In plain terms, what does the Projected payments rule stop a lender doing?",
            options: ["Showing only the low starting figure", "Charging escrow amounts that were not disclosed in advance", "Adjusting the interest rate without notifying the consumer first", "Selling the loan to a servicer before the first payment is due"],
            correctIndex: 0,
            explanation: "If the payment is going to change, the form has to show the changed one as well.",
            sourceLessonSlug: "reading-the-loan-estimate",
          },
          {
            prompt: "What distinguishes loan costs from other costs on the form?",
            options: ["Getting the loan against the transaction", "Charges paid to the creditor against charges paid to third parties", "Charges the consumer may shop for against charges that are fixed", "Charges due at closing against charges collected over the loan term"],
            correctIndex: 0,
            explanation: "Loan costs are the charges connected to getting the loan; other costs are tied to the transaction and the property.",
            sourceLessonSlug: "reading-the-loan-estimate",
          },
          {
            prompt: "What does Calculating cash to close do?",
            options: ["Reconciles the amount to bring", "States the balance that will remain after five years of payments", "Lists every party who will receive money from the transaction", "Compares the creditor's charges against a published market average"],
            correctIndex: 0,
            explanation: "It brings the cost sections together into the amount the consumer would actually need at the closing.",
            sourceLessonSlug: "reading-the-loan-estimate",
          },
          {
            prompt: "What is the course's one-move instruction for using the form?",
            options: ["Lay two side by side", "Read the Comparisons table before anything else on the document", "Take the estimate to a settlement agent for an independent review", "Ask the creditor to explain each box before signing the acknowledgment"],
            correctIndex: 0,
            explanation: "Because the boxes are prescribed, the same number sits in the same place on both, so any difference is visible rather than argued about.",
            sourceLessonSlug: "reading-the-loan-estimate",
          },
          {
            prompt: "What must the creditor provide under the Closing Disclosure rule?",
            options: ["Disclosures reflecting the actual terms", "A revised estimate whenever any quoted charge has changed", "A written explanation of any figure that differs from the estimate", "A statement of the consumer's right to rescind the transaction"],
            correctIndex: 0,
            explanation: "The rule requires the disclosures under section 1026.38 reflecting the actual terms of the transaction.",
            sourceLessonSlug: "the-closing-disclosure-and-the-tolerances",
          },
          {
            prompt: "Which of these is one of the Closing Disclosure's prescribed parts?",
            options: ["Loan calculations", "Comparisons, which ranks this loan against competing offers", "Web site reference, which directs the consumer to a federal database", "Appraisal summary, which states the value the appraiser reported"],
            correctIndex: 0,
            explanation: "The prescribed parts also include Loan disclosures, a questions notice, closing cost totals and summaries of each side's transaction.",
            sourceLessonSlug: "the-closing-disclosure-and-the-tolerances",
          },
          {
            prompt: "What does the three-business-day rule require, precisely?",
            options: ["Receipt, not delivery", "Delivery, whether or not the consumer actually receives it", "A signed acknowledgment returned to the creditor before closing", "That the consumer waive the period in writing if closing sooner"],
            correctIndex: 0,
            explanation: "The creditor must ensure the consumer receives the disclosures no later than three business days before consummation.",
            sourceLessonSlug: "the-closing-disclosure-and-the-tolerances",
          },
          {
            prompt: "Why does the course call the waiting period the most consumer-protective mechanism in the section?",
            options: ["Reading forty numbers under pressure", "Because it allows the consumer to cancel the loan without penalty", "Because it gives the creditor time to correct any tolerance violation", "Because it is the only rule in the section a court will enforce directly"],
            correctIndex: 0,
            explanation: "The alternative is reading them for the first time in a room where everyone else is waiting for a signature.",
            sourceLessonSlug: "the-closing-disclosure-and-the-tolerances",
          },
          {
            prompt: "Under the general good faith rule, what is a disclosed closing cost?",
            options: ["A ceiling", "An indication that the creditor may revise at any time before closing", "An average of the charges the creditor imposed on similar transactions", "A figure the consumer may challenge only after the transaction closes"],
            correctIndex: 0,
            explanation: "It is in good faith only if the charge paid does not exceed the amount originally disclosed, subject to the stated exceptions.",
            sourceLessonSlug: "the-closing-disclosure-and-the-tolerances",
          },
          {
            prompt: "What does the course say turns the Loan Estimate from a sales document into a promise?",
            options: ["Rules about how far numbers may move", "The consumer's signature on the acknowledgment at the foot of the form", "The requirement that the creditor deliver it within three business days", "The obligation to provide a second, final form before consummation"],
            correctIndex: 0,
            explanation: "An estimate nobody is held to is a sales document; the tolerance rules are what hold the creditor to it.",
            sourceLessonSlug: "the-closing-disclosure-and-the-tolerances",
          },
          {
            prompt: "Which charges get the ten percent standard rather than the strict one?",
            options: ["Third-party services and recording fees", "Every charge the creditor itself imposes for originating the loan", "Property tax and homeowner's insurance collected into an escrow account", "Any charge the consumer agreed to in the purchase contract"],
            correctIndex: 0,
            explanation: "And the standard is aggregate, so the comparison is between totals rather than line by line.",
            sourceLessonSlug: "the-closing-disclosure-and-the-tolerances",
          },
          {
            prompt: "How many conditions must be met for the ten percent tolerance to apply?",
            options: ["Three", "One, that the aggregate does not exceed the disclosed aggregate by ten percent", "Two, an aggregate limit and the consumer's written consent to shop", "Four, adding a requirement that the creditor document its selection"],
            correctIndex: 0,
            explanation: "All three, not one: the aggregate limit, the money not going to the creditor or an affiliate, and the consumer being permitted to shop.",
            sourceLessonSlug: "the-closing-disclosure-and-the-tolerances",
          },
          {
            prompt: "What happens to a charge paid to the creditor's own affiliate?",
            options: ["It does not get the ten percent room", "It is exempt from both tolerance standards under the regulation", "It may exceed the estimate by up to twenty percent in the aggregate", "It must be refunded in full if it exceeds the amount disclosed"],
            correctIndex: 0,
            explanation: "The looser standard is available only where the charge is not paid to the creditor or an affiliate, which the course calls a rule about self-dealing.",
            sourceLessonSlug: "the-closing-disclosure-and-the-tolerances",
          },
          {
            prompt: "What does the ten percent standard compare?",
            options: ["Aggregate against aggregate", "Each individual charge against the figure disclosed for that charge", "The final total against the average charged by comparable creditors", "The creditor's charges against the third parties' published rate cards"],
            correctIndex: 0,
            explanation: "The rule speaks of the aggregate amount of charges for third-party services and recording fees.",
            sourceLessonSlug: "the-closing-disclosure-and-the-tolerances",
          },
          {
            prompt: "What does RESPA say about a fee paid for referring settlement business?",
            options: ["No person shall give or accept it", "It must be disclosed on the Closing Disclosure as a loan cost", "It is permitted where the referring party performs some service", "It is capped at ten percent of the charge for the service referred"],
            correctIndex: 0,
            explanation: "The prohibition covers any fee, kickback or thing of value given pursuant to any agreement or understanding, oral or otherwise.",
            sourceLessonSlug: "the-closing-disclosure-and-the-tolerances",
          },
          {
            prompt: "What does RESPA say about splitting a settlement service charge?",
            options: ["Only for services actually performed", "Only where both parties are licensed in the state of the transaction", "Only where the split is disclosed to the consumer before closing", "Only where the total charge does not exceed the customary amount"],
            correctIndex: 0,
            explanation: "No person shall give or accept any portion, split or percentage of such a charge other than for services actually performed.",
            sourceLessonSlug: "the-closing-disclosure-and-the-tolerances",
          },
          {
            prompt: "What penalty does RESPA attach to a violation of that section?",
            options: ["A fine, imprisonment, or both", "A civil penalty assessed by the supervising banking regulator", "Rescission of the loan at the consumer's option within three years", "Forfeiture of the creditor's right to collect interest on the loan"],
            correctIndex: 0,
            explanation: "The statute states a fine of not more than $10,000 or imprisonment for not more than one year, or both.",
            sourceLessonSlug: "the-closing-disclosure-and-the-tolerances",
          },
          {
            prompt: "What is the course's summary of the section's design?",
            options: ["Rules a consumer can check", "Guidance a regulator publishes and periodically revises", "A voluntary code the mortgage industry agreed to follow", "A set of defaults the parties may vary by written agreement"],
            correctIndex: 0,
            explanation: "Six items start a clock, a prescribed form follows, certain numbers are a ceiling, and a second prescribed form arrives before obligation.",
            sourceLessonSlug: "the-closing-disclosure-and-the-tolerances",
          },
          {
            prompt: "What phrase in the Loan Estimate rule does the tolerance section later measure?",
            options: ["Good faith", "Actual terms of the transaction as finally agreed by the parties", "Reasonably available information known to the creditor at the time", "The creditor's best estimate given the information then in its possession"],
            correctIndex: 0,
            explanation: "The regulation requires good faith estimates, and the tolerance rules turn that phrase into dollars.",
            sourceLessonSlug: "the-closing-disclosure-and-the-tolerances",
          },
          {
            prompt: "Which document reflects the actual terms rather than an estimate?",
            options: ["The Closing Disclosure", "The Loan Estimate, once the creditor has verified the application", "The promissory note, which restates the disclosures in binding form", "The security instrument recorded with the county after consummation"],
            correctIndex: 0,
            explanation: "The Loan Estimate carries good faith estimates; the Closing Disclosure reflects what the transaction actually is.",
            sourceLessonSlug: "the-closing-disclosure-and-the-tolerances",
          },
          {
            prompt: "Why does the course say a lender who missed one of these rules has missed something written down?",
            options: ["Each is a checkable rule", "Because a regulator publishes a list of every violation each quarter", "Because the consumer's signature acknowledges that each rule was met", "Because the settlement agent certifies compliance at the closing table"],
            correctIndex: 0,
            explanation: "The deadlines, the prescribed contents and the tolerances are all in the text, so compliance is verifiable rather than a matter of trust.",
            sourceLessonSlug: "the-closing-disclosure-and-the-tolerances",
          },
          {
            prompt: "What does the Closing Disclosure's alternative cash-to-close table exist for?",
            options: ["Transactions without a seller", "Loans where the consumer pays no closing costs at all", "Transactions in which the creditor is also the settlement agent", "Loans that will be sold into the secondary market after closing"],
            correctIndex: 0,
            explanation: "It appears in the regulation's list alongside the standard Calculating cash to close table.",
            sourceLessonSlug: "the-closing-disclosure-and-the-tolerances",
          },
          {
            prompt: "Whose transactions do the Closing Disclosure's two summary tables cover?",
            options: ["The borrower's and the seller's", "The creditor's and the settlement agent's", "The appraiser's and the title insurer's", "The buyer's agent's and the listing agent's"],
            correctIndex: 0,
            explanation: "They are separate prescribed parts of the form, which is why the document reconciles both sides of the sale.",
            sourceLessonSlug: "the-closing-disclosure-and-the-tolerances",
          },
          {
            prompt: "What does the course mean by saying the section's forms report in the same units?",
            options: ["The same figures in the same places", "Both are expressed in whole dollars rather than in percentages", "Both are prepared by the same party under the same regulation", "Both must be signed by the consumer before the loan can close"],
            correctIndex: 0,
            explanation: "That is what makes the estimate and the final document comparable to each other as well as to a rival offer.",
            sourceLessonSlug: "the-closing-disclosure-and-the-tolerances",
          },
          {
            prompt: "In the tolerance rules, what does permitting the consumer to shop actually buy the creditor?",
            options: ["Access to the looser standard", "An exemption from the requirement to disclose the charge at all", "The right to substitute its own affiliate for the provider chosen", "A longer period before the Closing Disclosure must be received"],
            correctIndex: 0,
            explanation: "It is one of the three conditions, alongside the aggregate limit and the money not going to the creditor or an affiliate.",
            sourceLessonSlug: "the-closing-disclosure-and-the-tolerances",
          },
          {
            prompt: "What is the course's description of a rule that gives looser treatment only to independent charges?",
            options: ["A rule about self-dealing", "A rule about the accuracy of third-party price quotations", "A rule about the creditor's obligation to verify its own estimates", "A rule about which party bears the cost of a delayed settlement"],
            correctIndex: 0,
            explanation: "It wears the clothes of a rule about estimates, but the affiliate condition is what it is really doing.",
            sourceLessonSlug: "the-closing-disclosure-and-the-tolerances",
          },
          {
            prompt: "How does the Closing Disclosure's structure relate to the Loan Estimate's?",
            options: ["It mirrors it", "It replaces it with an entirely different set of categories", "It condenses it into a single table of final figures", "It omits the cost detail, which appears only on the estimate"],
            correctIndex: 0,
            explanation: "Both run through general information, loan terms, projected payments, costs at closing and the cost detail, which is what keeps them comparable.",
            sourceLessonSlug: "the-closing-disclosure-and-the-tolerances",
          },
          {
            prompt: "What does the course say an estimate nobody is held to amounts to?",
            options: ["A sales document", "A binding offer that the creditor may withdraw only for cause", "A regulatory filing with no consequence for the consumer either way", "A projection whose accuracy the settlement agent is required to verify"],
            correctIndex: 0,
            explanation: "The tolerance rules are precisely what stop the Loan Estimate from being one.",
            sourceLessonSlug: "the-closing-disclosure-and-the-tolerances",
          },
          {
            prompt: "Which part of the Closing Disclosure carries the questions notice?",
            options: ["Its own prescribed part", "A footnote to the Loan calculations table on the final page", "The signature statement, immediately above the consumer's signature", "The contact information table, alongside the creditor's details"],
            correctIndex: 0,
            explanation: "The regulation lists a questions notice among the form's separately prescribed parts.",
            sourceLessonSlug: "the-closing-disclosure-and-the-tolerances",
          },
          {
            prompt: "What kind of loan does the Loan Estimate rule cover?",
            options: ["Closed-end credit secured by real property", "Any consumer loan of more than one hundred thousand dollars", "Open-end credit lines secured by the consumer's principal dwelling", "Loans made by federally insured depository institutions only"],
            correctIndex: 0,
            explanation: "The rule also reaches a cooperative unit, and it excepts a reverse mortgage by name.",
            sourceLessonSlug: "what-starts-the-clock",
          },
          {
            prompt: "What does the course say about a lender who calls a six-item submission something other than an application?",
            options: ["The duty attaches anyway", "The duty is suspended until the lender records it as an application", "The consumer must object in writing to start the disclosure clock", "The submission converts to an application only on the lender's approval"],
            correctIndex: 0,
            explanation: "It is an application whatever anyone calls it, which is the whole point of defining the term by a closed list.",
            sourceLessonSlug: "what-starts-the-clock",
          },
          {
            prompt: "Which two questions does the Loan Terms table answer with a yes or a no?",
            options: ["Prepayment penalty and balloon payment", "Whether the loan is assumable and whether it may be refinanced", "Whether escrow is required and whether taxes are included", "Whether the rate is fixed and whether the term exceeds thirty years"],
            correctIndex: 0,
            explanation: "The regulation requires a statement of whether the transaction includes each of them, under those exact labels.",
            sourceLessonSlug: "reading-the-loan-estimate",
          },
          {
            prompt: "What is the Loan Estimate, in the course's characterisation?",
            options: ["A form with prescribed contents", "A letter of intent the creditor may revise at will before closing", "A marketing document the creditor designs to present its offer well", "A summary the settlement agent prepares from the creditor's file"],
            correctIndex: 0,
            explanation: "Its contents are prescribed paragraph by paragraph in federal regulation, which is what makes two of them comparable.",
            sourceLessonSlug: "reading-the-loan-estimate",
          },
          {
            prompt: "What does the course say is the entire design of the disclosure regime?",
            options: ["Differences become visible", "Creditors are required to compete on price rather than on service", "Consumers are given a right to cancel after reviewing the documents", "Regulators can audit every transaction against a standard template"],
            correctIndex: 0,
            explanation: "Because the boxes are prescribed, the same number sits in the same place on both forms, so a difference is seen rather than argued about.",
            sourceLessonSlug: "reading-the-loan-estimate",
          },
          {
            prompt: "Which statutes did Section 1 quote to explain why comparison is the point?",
            options: ["TILA and RESPA", "The Fair Housing Act and the Equal Credit Opportunity Act", "The Home Mortgage Disclosure Act and Title XI of FIRREA", "The Fair Credit Reporting Act and the Truth in Savings Act"],
            correctIndex: 0,
            explanation: "Both statutes name disclosure and comparison among their own stated purposes.",
            sourceLessonSlug: "reading-the-loan-estimate",
          },
          {
            prompt: "In the regulation's prescribed order, what follows Costs at closing on the Loan Estimate?",
            options: ["Web site reference", "Comparisons, which ranks the loan against competing offers", "Contact information for the creditor and the loan officer", "Other considerations, including the appraisal and assumption terms"],
            correctIndex: 0,
            explanation: "The order then runs through the two closing cost detail sections and Calculating cash to close.",
            sourceLessonSlug: "reading-the-loan-estimate",
          },
          {
            prompt: "What does the course say a consumer holds back when they are not ready to apply?",
            options: ["One of the six items", "Their consent to a credit report being obtained by the creditor", "The signed authorisation the creditor needs to order an appraisal", "Their agreement to the creditor's published schedule of charges"],
            correctIndex: 0,
            explanation: "A conversation missing one of the six is not an application, and no form is owed on it.",
            sourceLessonSlug: "what-starts-the-clock",
          },
          {
            prompt: "What is the relationship between the six-item list and the creditor's discretion?",
            options: ["The list removes it", "The list is a minimum the creditor may add to by policy", "The list applies only where the creditor has adopted it in writing", "The list is advisory, and a creditor may define application differently"],
            correctIndex: 0,
            explanation: "Before the definition, the duty to disclose could be postponed by declining to call a conversation an application.",
            sourceLessonSlug: "what-starts-the-clock",
          },
          {
            prompt: "What does the Closing Disclosure rule require the creditor to ensure?",
            options: ["That the consumer receives it in time", "That the consumer signs it before the transaction may be consummated", "That the figures match the Loan Estimate in every material respect", "That a settlement agent explains each entry to the consumer"],
            correctIndex: 0,
            explanation: "The obligation is framed as ensuring receipt no later than three business days before consummation.",
            sourceLessonSlug: "the-closing-disclosure-and-the-tolerances",
          },
          {
            prompt: "What makes RESPA's kickback rule different from a disclosure rule?",
            options: ["It makes the conduct unlawful", "It requires the payment to be shown on the Closing Disclosure", "It caps the payment at a percentage of the underlying charge", "It applies only where the consumer objects before consummation"],
            correctIndex: 0,
            explanation: "The statute prohibits giving or accepting the fee at all, and attaches a criminal penalty rather than a disclosure duty.",
            sourceLessonSlug: "the-closing-disclosure-and-the-tolerances",
          },
          {
            prompt: "What does the course say is the most useful single fact in this section?",
            options: ["The six-item definition", "The three-business-day rule for receiving the Closing Disclosure", "The ten percent aggregate tolerance for third-party services", "The criminal penalty attached to an unearned settlement fee"],
            correctIndex: 0,
            explanation: "Almost nobody is told it, and it is what decides whether a lender owes a form at all.",
            sourceLessonSlug: "what-starts-the-clock",
          },
          {
            prompt: "Which document does the regulation say the Loan Estimate carries good faith estimates of?",
            options: ["The disclosures in section 1026.37", "The final settlement statement prepared by the settlement agent", "The promissory note the consumer will sign at consummation", "The appraisal report the creditor obtains on the subject property"],
            correctIndex: 0,
            explanation: "Section 1026.37 is the provision that prescribes the Loan Estimate's contents box by box.",
            sourceLessonSlug: "what-starts-the-clock",
          },
          {
            prompt: "What label does the regulation require beside the initial periodic payment?",
            options: ["Principal and Interest", "Monthly Payment, stated to the nearest whole dollar", "Total Payment, including escrowed tax and insurance amounts", "Scheduled Payment, as calculated at the time of application"],
            correctIndex: 0,
            explanation: "The regulation prescribes both the content and the label for every item in the Loan Terms table.",
            sourceLessonSlug: "reading-the-loan-estimate",
          },
          {
            prompt: "What does the course say about the order in which two Loan Estimates should be read?",
            options: ["The regulation's own order", "Starting from the total cash to close and working backwards", "Whichever order the creditor's loan officer recommends", "Alphabetically by the name of each charge listed on the form"],
            correctIndex: 0,
            explanation: "Reading them in the prescribed order is what puts the same number in the same place on both documents.",
            sourceLessonSlug: "reading-the-loan-estimate",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 4 — The comparison, done honestly
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "why-throwing-money-away-is-not-an-analysis",
      title: "13 · What each payment actually buys",
      section: "Section 4 · The comparison, done honestly",
      body: `The claim that renting throws money away contains two assumptions and states neither. It assumes a rent payment buys nothing, and it assumes a mortgage payment buys an asset. Both are wrong as stated, and the second is wrong in a way that is measurable.

**What a rent payment buys.** Occupancy for the term, and something people undercount: the transfer of a list of risks to somebody else. The landlord carries the cost of a failed roof, the water heater, the assessment increase, the vacancy when the building is half empty, and the cost of selling the building when it is time. A tenant's exposure to all of that is capped at the rent and the term. That is not nothing. It is an insurance-shaped good, and it is priced into the rent.

**What a mortgage payment buys.** Occupancy, plus one component that accrues to you, plus exposure to the price of the asset in both directions. The component that accrues to you is the **principal**, and Section 2 measured it in a labelled hypothetical: over the first five years of a thirty-year loan at 6 percent, about 13,892 of about 71,946 paid in reduced the debt. **About 81 cents of every dollar of those payments did not buy an ownership stake.**

**And the payment is not the whole outlay.** An owner also pays property tax, insurance the lender requires, maintenance, and in many cases association dues. None of those buys an ownership stake either. They are the price of holding the asset, in the same way rent is the price of occupying somebody else's.

**So the honest ledger has three columns, not two.** What each side pays. What part of it accrues to the payer. And what risks each side is carrying. The one-line claim collapses all three into a slogan.

**The form already quantifies the argument.** The In 5 Years box on the Loan Estimate prints the total to be paid through the sixtieth month beside "Principal you will have paid off" (12 CFR § 1026.37, n.d.). Whoever wrote that requirement understood exactly which comparison people were failing to make, and put both numbers on the same line so the ratio is unavoidable.

**Two other slogans die the same way.** "Buy as soon as you can afford it" is a conclusion. "Renting is cheaper" is a conclusion. Neither states a horizon, an assumption about prices, or an accounting for transaction costs, so neither is checkable, so neither is an analysis.

**Here is the honest statement of the position.** For some households, at some prices, over some horizons, buying is clearly better arithmetic. For others, renting is. The result turns on inputs including the price, the rent, the rate, the horizon, what happens to prices, what else the money could do, and what you would otherwise spend on transaction costs. **This course does not know any of those for you, so it will not tell you which side wins, and any source that answers the question without asking for those inputs is selling something.**

**What the course gives you instead** is the list of the inputs, the arithmetic that combines them, and the places where each number comes from a document rather than from a guess. Two lessons from now you will have run the comparison yourself, with your own assumptions written down where you can change one and watch the answer move.

**A note on the emotional half, since pretending it is absent is its own dishonesty.** Owning and renting differ in things arithmetic does not capture: control over the space, security of tenure, the freedom to leave, the obligation to maintain, and what a household wants its next ten years to look like. Those are real and they are yours. The point of doing the arithmetic properly is not to override them. It is so that when you choose, you know what the choice costs, rather than discovering it in year three.

:::reveal What two unstated assumptions does the throwing-money-away claim rest on? ||| That a rent payment buys nothing, and that a mortgage payment buys an asset. Both are wrong as stated.

:::reveal Besides occupancy, what does a rent payment buy? ||| The transfer of risks to the landlord: the failed roof, the assessment increase, the vacancy, and the cost of selling the building.

:::reveal Which single component of a mortgage payment accrues to the payer? ||| The principal. In the course's hypothetical, about 81 cents of every dollar paid in the first five years did not buy an ownership stake.

## Vocabulary
- **Principal reduction**: the only part of a mortgage payment that accrues to the borrower as an ownership stake, and the smaller part for most of a long loan's life.
- **Cost of holding**: property tax, insurance, maintenance and association dues, which an owner pays and which buy no ownership stake.
- **Risk transfer**: the insurance-shaped good a tenant buys, capping their exposure to maintenance, assessments, vacancy and the cost of sale at the rent and the term.
- **Slogan**: a conclusion with no horizon, no price assumption and no accounting for transaction costs, which is therefore not checkable and not an analysis.

## Sources
12 CFR § 1026.37. (n.d.). *Content of disclosures for certain mortgage transactions (Loan Estimate)*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/1026.37`,
    },
    {
      slug: "the-costs-of-getting-in-and-out",
      title: "14 · The costs of getting in, and the costs of getting out",
      section: "Section 4 · The comparison, done honestly",
      body: `Transaction costs are the part of this comparison that slogans never count, and they are the reason the horizon matters more than almost anything else.

**Getting in, and one distinction worth being precise about.** A down payment is **not** a cost. It is a transfer of your money into the asset, and you still have it, in a less liquid form. The closing costs are a different animal: they are spent. The Closing Disclosure itemises them in prescribed sections, running through loan costs, other costs, closing cost totals and Calculating cash to close (12 CFR § 1026.38, n.d.). That form is the honest inventory, and it exists in your file whether or not you read it.

**Getting out is the half people forget entirely.** Selling a property normally involves a broker's commission, transfer or recording charges, and any costs the seller agrees to cover. The Closing Disclosure carries a separate prescribed "Summary of seller's transaction" (12 CFR § 1026.38, n.d.), which means the seller's side of a sale is itemised on the same form, in the same units, by the same regulation. **If you want to know what leaving costs, look at the seller's column on somebody's Closing Disclosure**, because that is a real document rather than an estimate from an article.

**Now put the two together and the horizon appears on its own.** Getting-in costs and getting-out costs are paid once each, no matter how long you stay. Spread over two years they are enormous per year. Spread over fifteen they are small. That single fact does more work in a rent-against-buy comparison than the interest rate does, and it is why any comparison that does not state a horizon is not a comparison.

**The tax code agrees, and says so with a number.** The exclusion of gain on the sale of a principal residence applies where, "during the 5-year period ending on the date of the sale or exchange, such property has been owned and used by the taxpayer as the taxpayer's principal residence for periods aggregating 2 years or more" (26 U.S.C. § 121, n.d.). The excluded amount "shall not exceed $250,000" (26 U.S.C. § 121, n.d.), and a joint return applies that paragraph "by substituting '$500,000' for '$250,000'" where the section's conditions are met (26 U.S.C. § 121, n.d.).

**Those figures were read on 28 August 2026 and are dated for a reason.** Tax provisions are amended, and a number in an article you read once is not evidence about the year you are actually in. **The durable part is the shape**: a rule that keys on two years out of five is itself telling you these decisions are counted in years, and that a short stay is a different transaction from a long one.

**Renting has transaction costs too**, and honesty requires counting them rather than treating them as zero. A deposit is a transfer rather than a cost, on the same reasoning as a down payment, but application charges, any nonrefundable fee the state permits to be labelled as such, moving costs, and the risk of a rent change at renewal all belong in the ledger. They are smaller than a sale's costs and they recur more often, which is a genuinely different shape, not a smaller version of the same shape.

**What this lesson leaves you able to do.** Take any comparison anyone shows you and ask three questions. Over how many years. What did you assume about the price at the end. Did you count what it costs to get out. **A comparison that cannot answer all three is a slogan with arithmetic attached to it**, which is more persuasive than a slogan and no more true.

:::reveal Why is a down payment not a cost in this comparison? ||| Because it is a transfer of your money into the asset rather than money spent. Closing costs, by contrast, are spent.

:::reveal Where can a learner see what selling actually costs, in prescribed form? ||| In the Summary of seller's transaction, which the Closing Disclosure regulation requires as its own separate part.

:::reveal What does the two-of-five-years condition in the gain exclusion tell you about the decision? ||| That these decisions are counted in years, and that a short stay is a different transaction from a long one.

## Vocabulary
- **Transaction cost**: an amount spent to enter or leave a housing arrangement, paid once regardless of how long the arrangement lasts, which is why it interacts with the horizon.
- **Down payment**: a transfer of the buyer's money into the asset rather than an expense, which is why the comparison treats it differently from closing costs.
- **Summary of seller's transaction**: the prescribed Closing Disclosure part that itemises the seller's side of a sale, which is where the cost of getting out is visible.
- **Exclusion of gain**: the tax provision permitting a stated amount of gain on a principal residence to be excluded where an ownership and use condition measured in years is met.

## Sources
12 CFR § 1026.38. (n.d.). *Content of disclosures for certain mortgage transactions (Closing Disclosure)*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/1026.38

26 U.S.C. § 121. (n.d.). *Exclusion of gain from sale of principal residence*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/26/121`,
    },
    {
      slug: "build-the-comparison-yourself",
      title: "15 · Build the comparison yourself, and change one assumption at a time",
      section: "Section 4 · The comparison, done honestly",
      body: `Here is the whole comparison, as a procedure. It has seven lines, it fits on one page, and every input is either a document or a stated assumption.

**1. Fix the horizon, in years, and write down why.** Three years because of a job. Ten years because of a school. Whatever it is, the number is a decision and it belongs at the top of the page, not implied at the bottom.

**2. The renting column.** Rent over the horizon, plus renter's insurance, plus the moving costs at each end, plus an assumption about how the rent changes. **Write the assumption down.** A comparison that quietly holds rent flat for ten years has made a forecast without admitting it.

**3. The owning column, from the form.** Total paid over the horizon, minus the principal paid off. The Loan Estimate gives both figures directly for a five-year horizon in the In 5 Years box, and Section 2's four steps produce them for any other horizon in a few minutes.

**4. Add the owner's holding costs.** Property tax, the insurance the lender requires, maintenance, and association dues if any. Every one of these is a real outlay that buys no ownership stake, and every one of them is knowable from a document: the county's assessment, an insurance quotation, the association's own schedule.

**5. Add the transaction costs at both ends of the owning column**, from the previous lesson. Once in, once out.

**6. Credit the owning column with what you would hold at the end**, which means stating what you assume the property is worth then. **This is the assumption people hide.** If you assume prices rise steadily, say so; the comparison is now a forecast and should be labelled one. Then subtract what leaving costs, because you do not receive the sale price, you receive the sale price less the cost of selling.

**7. Charge the owning column for the down payment's opportunity cost**, or charge the renting column for what a renter does with the same money. Either convention works; using neither is what puts a thumb on the scale.

**Then do the only step that makes the whole thing honest: change one assumption at a time.** Move the horizon by two years. Move the price assumption to flat. Move the rent growth. If the answer flips on a single plausible change, you have not found an answer, you have found a coin toss with a spreadsheet around it. **Whoever chooses the assumptions chooses the result**, and that is precisely why this course will not choose them for you.

**The tax question, taught as conditional because it is conditional.** The Internal Revenue Code disallows personal interest generally: "no deduction shall be allowed under this chapter for personal interest paid or accrued during the taxable year" (26 U.S.C. § 163, n.d.). It then excepts "any qualified residence interest", which it defines as interest on acquisition indebtedness or home equity indebtedness with respect to a qualified residence (26 U.S.C. § 163, n.d.). The amount treated as acquisition indebtedness is capped: the section states that it "shall not exceed $1,000,000 ($500,000 in the case of a married individual filing a separate return)", and a further paragraph substitutes $750,000 and $375,000 for taxable years beginning after 2017 (26 U.S.C. § 163, n.d.). **Read on 28 August 2026, and dated because this provision has been amended more than once.**

**Three things follow, and they are the durable part.** A deduction is worth something only to a taxpayer who itemises rather than taking the standard deduction. A deduction reduces taxable income and not tax, so its value is roughly the deduction times the marginal rate, not the deduction. And the cap means the benefit does not scale indefinitely with the size of the loan. **Anyone who tells you the interest is effectively discounted by the deduction has skipped all three conditions.**

**And the third statement of the course's position, said here in full.** This course gives no financial advice and will not tell you whether to rent or to buy. It has now given you the mechanism, the documents, the arithmetic and the assumptions. The choice is yours, it depends on facts about your life the course does not have, and anybody who answers it for a stranger is guessing.

:::reveal What is the first line of the comparison, and why does it go first? ||| The horizon in years, with the reason written down, because every transaction cost and every forecast is measured against it.

:::reveal Which assumption does the course say people hide? ||| What the property is assumed to be worth at the end of the horizon, which turns the comparison into a forecast that should be labelled one.

:::reveal What are the three conditions on the value of a mortgage interest deduction? ||| The taxpayer must itemise, it reduces taxable income rather than tax so its value is roughly the marginal rate times the deduction, and acquisition indebtedness is capped.

## Vocabulary
- **Sensitivity**: changing one assumption at a time to see whether the result flips, which is the step that separates an answer from a coin toss with a spreadsheet around it.
- **Opportunity cost**: what the money used for a down payment would otherwise have done, charged to one column or the other so that neither side gets a free input.
- **Qualified residence interest**: the statutory exception to the general disallowance of personal interest, defined by reference to acquisition indebtedness and home equity indebtedness on a qualified residence.
- **Acquisition indebtedness cap**: the statutory ceiling on the debt whose interest may qualify, which is why the deduction's benefit does not scale indefinitely with loan size.
- **Itemising**: claiming actual deductions instead of the standard deduction, without which a deduction changes a taxpayer's bill by nothing at all.

## Sources
26 U.S.C. § 163. (n.d.). *Interest*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/26/163

12 CFR § 1026.37. (n.d.). *Content of disclosures for certain mortgage transactions (Loan Estimate)*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/1026.37`,
    },
    {
      slug: "quiz-the-comparison",
      title: "16 · Knowledge check: the comparison, done honestly",
      section: "Section 4 · The comparison, done honestly",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "How many unstated assumptions does the throwing-money-away claim rest on?",
            options: ["Two", "None, because the claim is a description rather than an argument", "Four, one for each component of an ordinary monthly housing payment", "One, that property prices rise faster than rents over any long period"],
            correctIndex: 0,
            explanation: "That a rent payment buys nothing, and that a mortgage payment buys an asset. Both are wrong as stated.",
            sourceLessonSlug: "why-throwing-money-away-is-not-an-analysis",
          },
          {
            prompt: "Besides occupancy, what does the course say a rent payment buys?",
            options: ["A transfer of risks", "A claim on part of the building's appreciation over the term", "A right to renew the tenancy on the same terms indefinitely", "A share of the landlord's property tax savings each year"],
            correctIndex: 0,
            explanation: "The landlord carries the failed roof, the assessment increase, the vacancy, and the cost of selling the building.",
            sourceLessonSlug: "why-throwing-money-away-is-not-an-analysis",
          },
          {
            prompt: "How does the course characterise the risk transfer a tenant buys?",
            options: ["An insurance-shaped good", "A subsidy the landlord provides in exchange for a longer term", "A concession that only applies in states with strong tenant statutes", "A benefit that disappears once the tenancy runs beyond twelve months"],
            correctIndex: 0,
            explanation: "It caps the tenant's exposure at the rent and the term, and it is priced into the rent rather than given away.",
            sourceLessonSlug: "why-throwing-money-away-is-not-an-analysis",
          },
          {
            prompt: "Which single component of a mortgage payment accrues to the borrower?",
            options: ["Principal", "Interest, which is credited against the property's value each year", "Escrow, which is refunded in full when the loan is paid off", "Mortgage insurance, which protects the borrower's equity stake"],
            correctIndex: 0,
            explanation: "In the course's hypothetical, about 13,892 of about 71,946 paid over five years reduced the debt.",
            sourceLessonSlug: "why-throwing-money-away-is-not-an-analysis",
          },
          {
            prompt: "In the course's hypothetical, roughly how much of the first five years of payments bought no ownership stake?",
            options: ["About 81 cents in the dollar", "About 19 cents in the dollar, with the rest reducing the balance", "All of it, because principal is not credited until the sixth year", "None of it, because every payment reduces the amount outstanding"],
            correctIndex: 0,
            explanation: "About 58,054 of about 71,946 was interest, at a labelled hypothetical 6 percent over a thirty-year term.",
            sourceLessonSlug: "why-throwing-money-away-is-not-an-analysis",
          },
          {
            prompt: "Which of these does the course say buys no ownership stake for an owner?",
            options: ["Property tax", "The principal portion of the scheduled monthly payment", "The down payment transferred into the asset at closing", "The proceeds received when the property is eventually sold"],
            correctIndex: 0,
            explanation: "Insurance, maintenance and association dues sit in the same category: the price of holding the asset.",
            sourceLessonSlug: "why-throwing-money-away-is-not-an-analysis",
          },
          {
            prompt: "How many columns does the course say an honest ledger has?",
            options: ["Three", "Two, one for renting and one for owning over the same period", "Five, one for each major category of housing expenditure", "One, since every payment for housing is ultimately the same kind of outlay"],
            correctIndex: 0,
            explanation: "What each side pays, what part of it accrues to the payer, and what risks each side carries.",
            sourceLessonSlug: "why-throwing-money-away-is-not-an-analysis",
          },
          {
            prompt: "What does the In 5 Years box put on the same line?",
            options: ["Total paid and principal paid off", "The interest rate and the annual percentage rate for the loan", "The estimate and the final figure once the loan has closed", "The scheduled payment and the escrowed tax and insurance"],
            correctIndex: 0,
            explanation: "Whoever wrote the requirement understood which comparison people were failing to make, and made the ratio unavoidable.",
            sourceLessonSlug: "why-throwing-money-away-is-not-an-analysis",
          },
          {
            prompt: "Why does the course call \"renting is cheaper\" a slogan rather than an analysis?",
            options: ["It states no horizon or assumptions", "Because rent is set by a landlord rather than by a market", "Because the comparison depends on tax treatment the speaker cannot know", "Because rents and prices move together, so neither can be cheaper for long"],
            correctIndex: 0,
            explanation: "It states no horizon, no price assumption and no accounting for transaction costs, so it is not checkable.",
            sourceLessonSlug: "why-throwing-money-away-is-not-an-analysis",
          },
          {
            prompt: "What does the course say about a source that answers the rent-or-buy question without asking for inputs?",
            options: ["It is selling something", "It is applying a standard rule of thumb accepted across the industry", "It is relying on the federal disclosure forms, which supply every input", "It is using a national average, which is accurate for most households"],
            correctIndex: 0,
            explanation: "The result turns on the price, the rent, the rate, the horizon, price movements, opportunity cost and transaction costs.",
            sourceLessonSlug: "why-throwing-money-away-is-not-an-analysis",
          },
          {
            prompt: "What is the course's honest statement about which side wins?",
            options: ["It depends on the inputs", "Buying wins over any horizon longer than three years", "Renting wins wherever rents are below the equivalent payment", "Neither wins, because the two are equivalent once tax is accounted for"],
            correctIndex: 0,
            explanation: "For some households at some prices over some horizons buying is clearly better arithmetic, and for others renting is.",
            sourceLessonSlug: "why-throwing-money-away-is-not-an-analysis",
          },
          {
            prompt: "Why does the lesson discuss the non-arithmetic side of the choice?",
            options: ["Pretending it is absent is dishonest", "Because control and security of tenure can be priced precisely", "Because lenders are required to consider them in underwriting", "Because a comparison is invalid unless every factor is quantified"],
            correctIndex: 0,
            explanation: "Control, security of tenure, the freedom to leave and the obligation to maintain are real, and the arithmetic exists to price the choice rather than override it.",
            sourceLessonSlug: "why-throwing-money-away-is-not-an-analysis",
          },
          {
            prompt: "What does the course say the point of doing the arithmetic properly is?",
            options: ["Knowing what the choice costs", "Producing a single defensible answer for any household", "Persuading a lender that the transaction makes financial sense", "Establishing which option a reasonable person would choose"],
            correctIndex: 0,
            explanation: "So that the cost is known when the choice is made rather than discovered in year three.",
            sourceLessonSlug: "why-throwing-money-away-is-not-an-analysis",
          },
          {
            prompt: "Why is a down payment not a cost in this comparison?",
            options: ["It is a transfer into the asset", "Because it is refunded when the property is eventually sold", "Because the lender rather than the buyer supplies it at closing", "Because it is deductible against the gain realised on a later sale"],
            correctIndex: 0,
            explanation: "You still have it, in a less liquid form. Closing costs, by contrast, are spent.",
            sourceLessonSlug: "the-costs-of-getting-in-and-out",
          },
          {
            prompt: "Where are getting-in costs itemised in prescribed form?",
            options: ["On the Closing Disclosure", "In the purchase contract signed by the buyer and the seller", "In the county land records where the deed is eventually filed", "On the appraisal report the creditor obtains before consummation"],
            correctIndex: 0,
            explanation: "Its prescribed sections run through loan costs, other costs, closing cost totals and Calculating cash to close.",
            sourceLessonSlug: "the-costs-of-getting-in-and-out",
          },
          {
            prompt: "Which part of the Closing Disclosure shows what selling costs?",
            options: ["Summary of seller's transaction", "Loan calculations, which totals what the borrower will pay", "Calculating cash to close, which reconciles the buyer's funds", "Projected payments, which shows how the payment changes"],
            correctIndex: 0,
            explanation: "The seller's side of a sale is itemised on the same form, in the same units, by the same regulation.",
            sourceLessonSlug: "the-costs-of-getting-in-and-out",
          },
          {
            prompt: "What does the course say to look at if you want to know what leaving costs?",
            options: ["The seller's column on a real disclosure", "A published national average for real estate commissions", "The listing agreement a seller signs with a broker", "The property's most recent county assessment notice"],
            correctIndex: 0,
            explanation: "It is a real document rather than an estimate from an article, and the regulation prescribes what goes in it.",
            sourceLessonSlug: "the-costs-of-getting-in-and-out",
          },
          {
            prompt: "How do transaction costs interact with the horizon?",
            options: ["Once each, spread over the years", "They recur annually, so they scale with the length of stay", "They fall as the balance is repaid, because the lender charges less", "They are unaffected by the horizon, which is why it can be ignored"],
            correctIndex: 0,
            explanation: "Spread over two years they are enormous per year; spread over fifteen they are small.",
            sourceLessonSlug: "the-costs-of-getting-in-and-out",
          },
          {
            prompt: "What does the course say does more work in the comparison than the interest rate?",
            options: ["The horizon", "The size of the down payment placed at closing", "The property's assessed value for local tax purposes", "The presence or absence of an association fee"],
            correctIndex: 0,
            explanation: "Because getting-in and getting-out costs are paid once each and then spread across the years of the stay.",
            sourceLessonSlug: "the-costs-of-getting-in-and-out",
          },
          {
            prompt: "What condition does the gain exclusion place on ownership and use?",
            options: ["Two years within the last five", "Continuous occupation for the whole of the five-year period", "Ownership for at least ten years before the date of sale", "Use as a principal residence at the moment of sale only"],
            correctIndex: 0,
            explanation: "The statute speaks of periods aggregating two years or more during the five-year period ending on the date of the sale.",
            sourceLessonSlug: "the-costs-of-getting-in-and-out",
          },
          {
            prompt: "What amount does the gain exclusion cap the excluded gain at, on a single return?",
            options: ["250,000 dollars", "500,000 dollars, which is halved for a married individual filing separately", "The lesser of the gain or the original purchase price of the residence", "Whatever gain remains after subtracting the cost of selling the property"],
            correctIndex: 0,
            explanation: "The statute states that the excluded amount shall not exceed that figure, and it was read on 28 August 2026.",
            sourceLessonSlug: "the-costs-of-getting-in-and-out",
          },
          {
            prompt: "What does the statute substitute for a joint return meeting its conditions?",
            options: ["500,000 dollars", "750,000 dollars, matching the acquisition indebtedness cap", "No cap at all, provided both spouses meet the use requirement", "An amount indexed each year to a published cost-of-living measure"],
            correctIndex: 0,
            explanation: "It applies the paragraph by substituting the larger figure where the section's stated conditions are met.",
            sourceLessonSlug: "the-costs-of-getting-in-and-out",
          },
          {
            prompt: "Why does the course date the tax figures it quotes?",
            options: ["Provisions get amended", "Because the statute requires publishers to date any quoted figure", "Because a figure without a date cannot be relied on in a tax return", "Because the amounts are recalculated by the agency every quarter"],
            correctIndex: 0,
            explanation: "A number in an article you read once is not evidence about the year you are actually in.",
            sourceLessonSlug: "the-costs-of-getting-in-and-out",
          },
          {
            prompt: "What does the course call the durable part of the gain exclusion?",
            options: ["The shape", "The two dollar figures, which have not changed since enactment", "The requirement that the property be sold rather than exchanged", "The fact that it applies only to taxpayers who itemise deductions"],
            correctIndex: 0,
            explanation: "A rule keyed on two years out of five is telling you these decisions are counted in years.",
            sourceLessonSlug: "the-costs-of-getting-in-and-out",
          },
          {
            prompt: "How does the course treat a rental security deposit in this ledger?",
            options: ["As a transfer, not a cost", "As a cost, because it is rarely returned in full", "As a cost, because it earns no interest for the tenant", "As neither, because it never appears on any prescribed form"],
            correctIndex: 0,
            explanation: "On the same reasoning as a down payment, though application charges, permitted nonrefundable fees and moving costs do belong in the ledger.",
            sourceLessonSlug: "the-costs-of-getting-in-and-out",
          },
          {
            prompt: "How does the course describe the shape of a renter's transaction costs?",
            options: ["Smaller and more frequent", "Larger, because moving is more expensive than selling", "Identical to an owner's, only expressed in different units", "Absent, since a tenant pays nothing to enter or leave a tenancy"],
            correctIndex: 0,
            explanation: "That is a genuinely different shape rather than a smaller version of the same one.",
            sourceLessonSlug: "the-costs-of-getting-in-and-out",
          },
          {
            prompt: "Which three questions does the course say to ask of any comparison you are shown?",
            options: ["Horizon, price assumption, exit costs", "Rate, term, and the size of the required down payment", "Location, condition, and the age of the building's systems", "Income, credit, and the amount of savings held in reserve"],
            correctIndex: 0,
            explanation: "A comparison that cannot answer all three is a slogan with arithmetic attached to it.",
            sourceLessonSlug: "the-costs-of-getting-in-and-out",
          },
          {
            prompt: "What does the course say about a slogan with arithmetic attached?",
            options: ["More persuasive, no more true", "It is acceptable where the arithmetic is correctly performed", "It becomes an analysis once a horizon is stated anywhere in it", "It is worse than a plain slogan because it takes longer to check"],
            correctIndex: 0,
            explanation: "Adding numbers to an unstated assumption does not turn it into a checkable claim.",
            sourceLessonSlug: "the-costs-of-getting-in-and-out",
          },
          {
            prompt: "How many lines does the course's comparison procedure have?",
            options: ["Seven", "Three, one for renting, one for owning, and one for the difference", "Twelve, one for each category the Closing Disclosure itemises", "As many as the household's circumstances happen to require"],
            correctIndex: 0,
            explanation: "It fits on one page, and every input is either a document or a stated assumption.",
            sourceLessonSlug: "build-the-comparison-yourself",
          },
          {
            prompt: "What goes at the top of the comparison page?",
            options: ["The horizon and the reason for it", "The purchase price of the property under consideration", "The interest rate quoted on the most recent Loan Estimate", "The household's total income for the current calendar year"],
            correctIndex: 0,
            explanation: "The number is a decision, and it belongs at the top rather than implied at the bottom.",
            sourceLessonSlug: "build-the-comparison-yourself",
          },
          {
            prompt: "What must the renting column state besides rent, insurance and moving costs?",
            options: ["An assumption about rent changes", "The landlord's expected return on the property over the period", "The market rent for comparable properties in adjoining areas", "The deposit, treated as an expense rather than a transfer"],
            correctIndex: 0,
            explanation: "A comparison that quietly holds rent flat for ten years has made a forecast without admitting it.",
            sourceLessonSlug: "build-the-comparison-yourself",
          },
          {
            prompt: "Which two figures does the owning column start from?",
            options: ["Total paid, minus principal paid off", "The purchase price, minus the down payment made at closing", "The annual percentage rate, times the number of years in the horizon", "The scheduled payment, times twelve months times the horizon"],
            correctIndex: 0,
            explanation: "The In 5 Years box supplies both directly for a five-year horizon, and Section 2's four steps produce them for any other.",
            sourceLessonSlug: "build-the-comparison-yourself",
          },
          {
            prompt: "Which of these does step four add to the owning column?",
            options: ["Tax, insurance, maintenance, dues", "The interest already counted in the total paid figure", "The principal, since it is part of the total outlay", "The opportunity cost of the down payment amount"],
            correctIndex: 0,
            explanation: "Each is a real outlay that buys no ownership stake and each is knowable from a document.",
            sourceLessonSlug: "build-the-comparison-yourself",
          },
          {
            prompt: "Where does the course say an owner's holding costs can be found?",
            options: ["Documents, not guesses", "A national average published by a federal housing agency", "The lender's underwriting file, which estimates each of them", "The purchase contract, which allocates them between the parties"],
            correctIndex: 0,
            explanation: "The county's assessment, an insurance quotation, and the association's own schedule of dues.",
            sourceLessonSlug: "build-the-comparison-yourself",
          },
          {
            prompt: "Which assumption does the course say people hide?",
            options: ["The property's value at the end", "The rate of return on money not spent on a down payment", "The number of years the household expects to stay", "The maintenance cost of the property over the horizon"],
            correctIndex: 0,
            explanation: "If you assume prices rise steadily, say so, because the comparison is now a forecast and should be labelled one.",
            sourceLessonSlug: "build-the-comparison-yourself",
          },
          {
            prompt: "What must be subtracted from the credit for the property's end value?",
            options: ["The cost of selling", "The remaining balance on the loan at that date", "The tax on the gain realised from the disposal", "The transaction costs paid when the property was bought"],
            correctIndex: 0,
            explanation: "You do not receive the sale price, you receive the sale price less what leaving costs.",
            sourceLessonSlug: "build-the-comparison-yourself",
          },
          {
            prompt: "What does step seven require?",
            options: ["Accounting for opportunity cost", "Adjusting both columns for expected inflation over the horizon", "Deducting the mortgage interest from the owning column entirely", "Adding a margin of safety to whichever column looks more expensive"],
            correctIndex: 0,
            explanation: "Charge the owning column for the down payment's alternative use, or charge the renting column for what a renter does with the same money.",
            sourceLessonSlug: "build-the-comparison-yourself",
          },
          {
            prompt: "What does using neither opportunity-cost convention do?",
            options: ["Puts a thumb on the scale", "Simplifies the comparison without affecting the result", "Understates the owning column by the amount of the down payment", "Makes the comparison conform to the way lenders present it"],
            correctIndex: 0,
            explanation: "Either convention works; leaving the input out of both columns is what biases the answer.",
            sourceLessonSlug: "build-the-comparison-yourself",
          },
          {
            prompt: "What is the step the course says makes the whole thing honest?",
            options: ["Changing one assumption at a time", "Having a second person check the arithmetic independently", "Running the comparison for three separate properties at once", "Repeating the calculation using the lender's own worksheet"],
            correctIndex: 0,
            explanation: "Move the horizon, move the price assumption, move the rent growth, and see whether the answer survives.",
            sourceLessonSlug: "build-the-comparison-yourself",
          },
          {
            prompt: "What has a learner found if the answer flips on a single plausible change?",
            options: ["A coin toss with a spreadsheet around it", "An error in the arithmetic that should be located and corrected", "Evidence that the horizon chosen was too short to be meaningful", "Proof that the two options are genuinely equivalent in value"],
            correctIndex: 0,
            explanation: "Whoever chooses the assumptions chooses the result, which is why the course refuses to choose them for anyone.",
            sourceLessonSlug: "build-the-comparison-yourself",
          },
          {
            prompt: "What does the Internal Revenue Code say about personal interest generally?",
            options: ["No deduction is allowed", "It is deductible up to a stated annual ceiling", "It is deductible only where the taxpayer itemises deductions", "It is deductible at half the taxpayer's marginal rate"],
            correctIndex: 0,
            explanation: "The general rule disallows it, and qualified residence interest is stated as an exception to that disallowance.",
            sourceLessonSlug: "build-the-comparison-yourself",
          },
          {
            prompt: "How does the statute define qualified residence interest?",
            options: ["Interest on acquisition or home equity indebtedness", "Interest on any loan secured by real property of any kind", "Interest paid to a federally insured lender on a first-lien loan", "Interest on the portion of a loan used to improve the residence"],
            correctIndex: 0,
            explanation: "With respect to a qualified residence of the taxpayer, which is what carves it out of the general disallowance.",
            sourceLessonSlug: "build-the-comparison-yourself",
          },
          {
            prompt: "What cap does the section state on acquisition indebtedness before the later substitution?",
            options: ["1,000,000 dollars", "750,000 dollars for every filing status without exception", "500,000 dollars, doubled for taxpayers filing a joint return", "No cap, provided the debt was incurred to acquire the residence"],
            correctIndex: 0,
            explanation: "The section states that figure, with 500,000 dollars for a married individual filing a separate return.",
            sourceLessonSlug: "build-the-comparison-yourself",
          },
          {
            prompt: "What does the later paragraph substitute for taxable years beginning after 2017?",
            options: ["750,000 and 375,000 dollars", "500,000 and 250,000 dollars across all filing statuses", "1,000,000 and 500,000 dollars, restoring the earlier figures", "An amount indexed annually to a published inflation measure"],
            correctIndex: 0,
            explanation: "The course read the section on 28 August 2026 and dates it, because this provision has been amended more than once.",
            sourceLessonSlug: "build-the-comparison-yourself",
          },
          {
            prompt: "To whom is a deduction worth nothing at all?",
            options: ["A taxpayer taking the standard deduction", "A taxpayer whose loan exceeds the acquisition indebtedness cap", "A taxpayer who bought the property in the current calendar year", "A taxpayer who rents part of the residence to another household"],
            correctIndex: 0,
            explanation: "A deduction is worth something only to a taxpayer who itemises rather than taking the standard deduction.",
            sourceLessonSlug: "build-the-comparison-yourself",
          },
          {
            prompt: "What does a deduction reduce?",
            options: ["Taxable income", "Tax, dollar for dollar, in the year the interest is paid", "The loan balance on which interest is charged the following year", "The gain that must be recognised when the property is sold"],
            correctIndex: 0,
            explanation: "So its value is roughly the deduction times the marginal rate, not the deduction itself.",
            sourceLessonSlug: "build-the-comparison-yourself",
          },
          {
            prompt: "What has someone skipped if they say interest is effectively discounted by the deduction?",
            options: ["All three conditions", "The requirement that the loan be secured by a first lien", "The distinction between the interest rate and the annual percentage rate", "The fact that interest is charged on a declining balance over time"],
            correctIndex: 0,
            explanation: "Itemising, the difference between reducing income and reducing tax, and the cap on acquisition indebtedness.",
            sourceLessonSlug: "build-the-comparison-yourself",
          },
          {
            prompt: "What is the course's third and final statement of its own position?",
            options: ["No advice, and no answer to rent or buy", "A recommendation to buy wherever the horizon exceeds seven years", "A recommendation to rent until the comparison favours buying twice over", "A suggestion that a reader consult the lender who quoted the best rate"],
            correctIndex: 0,
            explanation: "It gives the mechanism, the documents, the arithmetic and the assumptions, and says the choice depends on facts it does not have.",
            sourceLessonSlug: "build-the-comparison-yourself",
          },
          {
            prompt: "What does the course say about anybody who answers the rent-or-buy question for a stranger?",
            options: ["They are guessing", "They are applying an accepted professional standard", "They are relying on the federal forms rather than on judgment", "They are correct roughly as often as the arithmetic would predict"],
            correctIndex: 0,
            explanation: "The choice depends on facts about a household's life that no course and no stranger has.",
            sourceLessonSlug: "build-the-comparison-yourself",
          },
          {
            prompt: "Which document supplies both owning-column figures for a five-year horizon?",
            options: ["The Loan Estimate", "The Closing Disclosure's summary of the seller's transaction", "The promissory note signed at consummation", "The county assessment notice for the property"],
            correctIndex: 0,
            explanation: "Its In 5 Years box prints the total to be paid through the sixtieth month beside the principal paid off.",
            sourceLessonSlug: "build-the-comparison-yourself",
          },
          {
            prompt: "What does the course say a comparison becomes once it assumes prices rise steadily?",
            options: ["A forecast", "An estimate governed by the good faith tolerance rules", "A projection the lender is required to verify before closing", "An analysis, since the assumption makes the arithmetic complete"],
            correctIndex: 0,
            explanation: "And it should be labelled one, so a reader knows which part of the result is a prediction.",
            sourceLessonSlug: "build-the-comparison-yourself",
          },
          {
            prompt: "Why does the course insist the horizon's reason be written down?",
            options: ["It is a decision, not a default", "Because lenders require a stated intended period of occupancy", "Because the tax exclusion depends on the reason for the move", "Because a stated reason makes the arithmetic legally binding"],
            correctIndex: 0,
            explanation: "Three years because of a job or ten because of a school are different premises, and the premise drives the result.",
            sourceLessonSlug: "build-the-comparison-yourself",
          },
          {
            prompt: "What does the course say about the emotional factors in the choice?",
            options: ["They are real and they are yours", "They should be excluded so the comparison stays objective", "They can be converted into dollars using a standard adjustment", "They matter only where the arithmetic produces a close result"],
            correctIndex: 0,
            explanation: "The arithmetic exists to price the choice rather than to override control, security of tenure or the freedom to leave.",
            sourceLessonSlug: "why-throwing-money-away-is-not-an-analysis",
          },
          {
            prompt: "Which risk does the course list as one the landlord carries?",
            options: ["Vacancy", "The tenant's own moving costs at the end of the term", "The renter's insurance premium on the tenant's belongings", "The tenant's liability for damage beyond ordinary wear"],
            correctIndex: 0,
            explanation: "Alongside the failed roof, the assessment increase, and the cost of selling the building.",
            sourceLessonSlug: "why-throwing-money-away-is-not-an-analysis",
          },
          {
            prompt: "What is the second thing an honest ledger records for each side?",
            options: ["What accrues to the payer", "How the payment compares with the local market average", "Whether the payment is fixed or variable over the horizon", "Which party is legally obliged to make the payment"],
            correctIndex: 0,
            explanation: "The three columns are what each side pays, what part accrues to the payer, and what risks each side carries.",
            sourceLessonSlug: "why-throwing-money-away-is-not-an-analysis",
          },
          {
            prompt: "What does the course say a buy-as-soon-as-you-can-afford-it rule is?",
            options: ["A conclusion", "A reasonable default for households with a long horizon", "An analysis, since affordability is itself a computed quantity", "A rule of thumb supported by the federal disclosure regime"],
            correctIndex: 0,
            explanation: "Like its opposite, it states no horizon, no price assumption and no accounting for transaction costs.",
            sourceLessonSlug: "why-throwing-money-away-is-not-an-analysis",
          },
          {
            prompt: "Which costs does the course say slogans never count?",
            options: ["Transaction costs", "The interest charged over the life of the loan", "The property tax assessed by the county each year", "The insurance a lender requires the owner to carry"],
            correctIndex: 0,
            explanation: "They are the reason the horizon matters more than almost anything else in the comparison.",
            sourceLessonSlug: "the-costs-of-getting-in-and-out",
          },
          {
            prompt: "How does the course describe the Closing Disclosure's list of getting-in costs?",
            options: ["The honest inventory", "An estimate the settlement agent may revise after closing", "A summary that omits any charge paid outside the closing", "A schedule the consumer prepares and the creditor verifies"],
            correctIndex: 0,
            explanation: "It exists in the consumer's file whether or not they read it, and its sections are prescribed by regulation.",
            sourceLessonSlug: "the-costs-of-getting-in-and-out",
          },
          {
            prompt: "Which of these belongs in a renter's transaction cost ledger?",
            options: ["Moving costs", "The deposit, which is a transfer rather than a cost", "The landlord's cost of re-letting the unit after departure", "The property tax the landlord pays on the building each year"],
            correctIndex: 0,
            explanation: "Application charges, any permitted nonrefundable fee, and the risk of a rent change at renewal belong there too.",
            sourceLessonSlug: "the-costs-of-getting-in-and-out",
          },
          {
            prompt: "What does the course say about spreading transaction costs over two years?",
            options: ["They are enormous per year", "They are unchanged, because the total is what matters", "They are small, because the amounts are fixed at closing", "They are recovered in full through the gain exclusion"],
            correctIndex: 0,
            explanation: "Spread over fifteen years the same costs are small, which is why any comparison without a horizon is not a comparison.",
            sourceLessonSlug: "the-costs-of-getting-in-and-out",
          },
          {
            prompt: "What does the course say a short stay is, relative to a long one?",
            options: ["A different transaction", "The same transaction measured over fewer periods", "A better transaction, because less interest accrues overall", "An equivalent transaction once the gain exclusion is applied"],
            correctIndex: 0,
            explanation: "The gain exclusion's two-of-five-years condition is itself telling you these decisions are counted in years.",
            sourceLessonSlug: "the-costs-of-getting-in-and-out",
          },
          {
            prompt: "Which step of the procedure covers the transaction costs at both ends?",
            options: ["Step five", "Step one, alongside the choice of the horizon", "Step seven, together with the opportunity cost charge", "Step two, in the renting column where moving costs appear"],
            correctIndex: 0,
            explanation: "Once in and once out, added to the owning column from the previous lesson's inventory.",
            sourceLessonSlug: "build-the-comparison-yourself",
          },
          {
            prompt: "What does the course say about holding rent flat across a ten-year comparison?",
            options: ["It is an unadmitted forecast", "It is the conservative assumption and therefore the safe one", "It is required, because future rent cannot be known in advance", "It is acceptable where the lease term covers the whole horizon"],
            correctIndex: 0,
            explanation: "The assumption about rent changes has to be written down alongside every other assumption in the comparison.",
            sourceLessonSlug: "build-the-comparison-yourself",
          },
          {
            prompt: "What does the course promise the learner will have after this section?",
            options: ["A comparison they ran themselves", "A recommendation tailored to their own circumstances", "A projection prepared using the lender's own software", "A guarantee that the result will hold over the horizon"],
            correctIndex: 0,
            explanation: "With their own assumptions written down where one can be changed and the answer watched.",
            sourceLessonSlug: "why-throwing-money-away-is-not-an-analysis",
          },
          {
            prompt: "In the comparison, what does the owning column receive credit for at the end of the horizon?",
            options: ["The property's assumed value", "The total principal repaid over the whole of the horizon", "The interest deducted against taxable income each year", "The transaction costs incurred when the property was bought"],
            correctIndex: 0,
            explanation: "Less what leaving costs, and with the assumption behind the value stated rather than implied.",
            sourceLessonSlug: "build-the-comparison-yourself",
          },
          {
            prompt: "How does the course describe the acquisition indebtedness cap's effect?",
            options: ["The benefit does not scale indefinitely", "The deduction is denied entirely above the stated amount", "The interest rate is capped on any loan above the threshold", "The taxpayer must itemise once the loan exceeds the cap"],
            correctIndex: 0,
            explanation: "It is one of the three conditions people skip when they describe interest as effectively discounted.",
            sourceLessonSlug: "build-the-comparison-yourself",
          },
          {
            prompt: "What kind of input is every line of the comparison procedure?",
            options: ["A document or a stated assumption", "An estimate supplied by a lender or a broker", "A figure drawn from published national averages", "A projection generated by an amortisation calculator"],
            correctIndex: 0,
            explanation: "That is what makes the procedure checkable by somebody else, which a slogan never is.",
            sourceLessonSlug: "build-the-comparison-yourself",
          },
          {
            prompt: "Why does the course say a tenant's exposure is capped?",
            options: ["At the rent and the term", "At the amount of the security deposit held by the landlord", "At the value of the tenant's own belongings in the unit", "At the notice period the state statute requires for termination"],
            correctIndex: 0,
            explanation: "That cap is the insurance-shaped good the rent is paying for, and it is priced in rather than given away.",
            sourceLessonSlug: "why-throwing-money-away-is-not-an-analysis",
          },
          {
            prompt: "Which sentence best states the course's rule about assumptions?",
            options: ["Whoever chooses them chooses the answer", "They should be set to the most likely value available", "They should be omitted where they cannot be verified", "They should match the ones the lender used in underwriting"],
            correctIndex: 0,
            explanation: "Which is exactly why the course supplies the procedure and refuses to supply the inputs.",
            sourceLessonSlug: "build-the-comparison-yourself",
          },
          {
            prompt: "What does the course say the down payment is, in a less liquid form?",
            options: ["Still yours", "Spent, in the same way closing costs are spent", "The lender's, until the loan has been repaid in full", "A charge the seller receives as part of the purchase price"],
            correctIndex: 0,
            explanation: "It is a transfer into the asset, which is why the comparison treats it differently from closing costs.",
            sourceLessonSlug: "the-costs-of-getting-in-and-out",
          },
          {
            prompt: "What does step three of the procedure draw on for a horizon other than five years?",
            options: ["Section 2's four steps", "The lender's own projection prepared at underwriting", "The Closing Disclosure's Loan calculations table", "A published amortisation table for the relevant term"],
            correctIndex: 0,
            explanation: "Interest, principal, new balance, repeat, which produces the total paid and principal repaid for any horizon in a few minutes.",
            sourceLessonSlug: "build-the-comparison-yourself",
          },
          {
            prompt: "Which of these does the course name as a knowable source for an owner's insurance cost?",
            options: ["An insurance quotation", "The lender's estimate on the Loan Estimate form", "The county's most recent assessment of the property", "The seller's disclosure of what they paid last year"],
            correctIndex: 0,
            explanation: "The county's assessment supplies the tax figure and the association's own schedule supplies the dues.",
            sourceLessonSlug: "build-the-comparison-yourself",
          },
          {
            prompt: "What does the course say about exposure to the price of the asset for an owner?",
            options: ["It runs in both directions", "It is limited to the amount of the down payment made", "It begins only once the loan has been repaid in full", "It is transferred to the lender by the security instrument"],
            correctIndex: 0,
            explanation: "A mortgage payment buys occupancy, principal reduction, and exposure to the asset's price up and down alike.",
            sourceLessonSlug: "why-throwing-money-away-is-not-an-analysis",
          },
        ],
      },
    },
  ],
};
