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
  ],
};
