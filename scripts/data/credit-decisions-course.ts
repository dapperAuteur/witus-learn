import type { AuthoredCourse } from "./authored-course";

// MONEY-01 · "Credit, and the Decisions Made About You" (Money & Property). Source brief:
// plans/future-courses/2026-08-27-15-personal-finance-track-research.md, sections 4.2, 7 and 10.
// First course of a new series, `personal-money`, code MONEY. Tier 0.
//
// THE SPINE, and the sentence the whole course is built to keep true:
// A CREDIT DECISION IS MADE ABOUT A RECORD YOU DID NOT WRITE, BY A PARTY WHO MUST TELL YOU WHY.
// This is not a course about how to build good credit. It is a course about how the decision is
// made, what data feeds it, who is allowed to look, and what recourse exists when the record is
// wrong. Each of those four questions has a statutory answer anyone can read for free.
//
// WHY THIS CATALOG, AND NOT A GENERIC BUDGETING COURSE. The catalog already teaches this exact
// mechanism twice, from the other end, and this course is the third form of the same move:
//   · `the-county-committee` (WARRANT-02) teaches a FEDERAL credit gate from the statute up: the
//     eligibility test in its own words, the body that applied it, and the notice that recorded its
//     abolition. A government gate that had to state a standard.
//   · `financing-without-access` teaches the PROCEDURE for reading any exclusion: ask which door
//     was closed, what pool replaced it, and who bears the risk.
// This course is a PRIVATE gate that has to state its reasons. Both siblings are cross-linked by
// name in the LESSONS, not just in this comment: Section 1 lesson 1, Section 2 lesson 3, Section 4
// lesson 3, and the capstone.
//
// THE SERIES, DECLARED SO A LATER AUTHOR INHERITS IT RATHER THAN INVENTS IT.
//   MONEY-01  Credit, and the Decisions Made About You  (this course)
//   MONEY-02  Banking, and Who Has No Bank              deposit insurance, fees, the substitute market
//   MONEY-03  Debt, and What a Collector Must Prove     validation, student loans, medical debt
//   MONEY-04  Predatory Products, Priced                the fee-to-APR conversion, the MLA cap
//   MONEY-05  Filing Your Own Taxes                     domestic only; hands to taxes-americans-abroad
//   MONEY-06  Housing: the Lease and the Loan Estimate  the standardized federal forms
//   MONEY-07  Retirement and Investing Accounts         the wrapper vs the investment; named last on purpose
//   MONEY-99  Read Your Own Record                      the series capstone, taken last
// NUMBERED, NOT LETTERED. A letter promises independent tracks takeable in any order, and that is
// false here: 03 and 06 both assume you can read a consumer report, which is what 01 teaches.
// AND DELIBERATELY NO "00". A `00` promises a METHOD course, and this catalog already has two of
// them (`who-has-the-power`, `what-a-business-entity-is`). A third would be filler with a badge on
// it. WARRANT solved the same problem the same way: `the-match` is WARRANT-01, not 00.
// THE CODE IS `MONEY`, NOT `CREDIT`, AND THAT IS NOT A MECHANICAL POINT. `CREDIT` already belongs
// to "Credit: Who Gets Named", a series about ATTRIBUTION (the Matthew and Matilda effects, the
// patent record). `CREDIT-03` sitting beside `CREDIT-01` would tell a learner that a credit-report
// course is part of a series about who gets named on a patent. The semantic collision is the worse
// of the two, and guard rule 7 would refuse the prefix anyway.
//
// EVERY PRIMARY DOCUMENT IN THIS FILE WAS FETCHED AND READ ON 28 AUGUST 2026, not summarised from
// memory. The statutory and regulatory spine:
//   · FCRA: 15 U.S.C. 1681a (the definitions of "consumer report", "consumer reporting agency",
//     and the nationwide agency), 1681b(a) (the closed list of permissible purposes, which ends
//     with the words "and no other"), 1681c(a) (what may not appear, and for how long),
//     1681g(f) (the credit-score disclosure and the statutory definition of a credit score),
//     1681i(a) (the dispute right, the 30-day reinvestigation, the 5-business-day notice to the
//     furnisher), 1681j(a) (the free annual file disclosure), 1681m(a) (the four duties of a USER
//     taking adverse action), 1681s-2 (furnisher duties, on furnishing and on dispute).
//   · ECOA: 15 U.S.C. 1691(a) (prohibited bases) and 1691(d) (the statement of reasons, and the
//     statutory definition of adverse action).
//   · Regulation B: 12 CFR 1002.2(c) and (z) (adverse action; prohibited basis), 1002.9(a) and (b)
//     (the notification, and the sentence this whole course turns on: a statement of reasons "must
//     be specific and indicate the principal reason(s)", and a bare reference to internal standards
//     or to a failed score threshold is INSUFFICIENT).
//   · Regulation V: 12 CFR 1022.72(a) (the risk-based pricing notice) and 1022.136 (the centralized
//     source for annual file disclosures, which does NOT name a website in its own text).
//   · TILA: 15 U.S.C. 1601(a) (meaningful disclosure so a consumer can "compare more readily").
//
// THREE THINGS THIS COURSE REFUSES TO DO, RECORDED HERE SO A LATER EDITOR CANNOT SOFTEN ONE
// WITHOUT SEEING THAT IT WAS A DECISION.
//   1. IT GIVES NO FINANCIAL ADVICE. It never tells a reader what to do with their own money, names
//      no bank, card, bureau product, score service or lender as a recommendation, and promises no
//      outcome in points. Said in PROSE in three places, per the posture `surplus-funds-basics`
//      established: Section 1 lesson 1, Section 5 lesson 3, and the capstone. A registry entry a
//      landing page renders is necessary and not sufficient, because a learner in lesson 14 never
//      saw the landing page. NOTE that `cert-disclaimer.ts` does NOT cover this: its one sentence
//      is about affiliation with a named certifying body, which is a different speech act.
//   2. IT PRINTS NO SUMMARY TABLE OF THINGS THAT MOVE. Score model versions, which model a given
//      lender buys, and what any bureau currently offers beyond the statutory floor all change. The
//      course teaches the FLOOR (what the statute guarantees) and the METHOD (how to find what is
//      true today), because summary tables go stale silently and a method does not. Every figure and
//      every fetched page carries its date IN THE LESSON.
//   3. IT DOES NOT DESCRIBE AN AGENCY'S CURRENT FOOTING IN THE PRESENT TENSE. The rules cited here
//      are the durable layer; which agency is writing, supervising or enforcing them at any moment
//      is not, and 2025-2026 changed it. Section 6 lesson 2 teaches that distinction on purpose and
//      dates what it says. Filed as a research check (`credit-agency-footing`).
//
// House style, inherited from WARRANT-02: `section` on every lesson; flush-left single-line
// `:::reveal q ||| a`; a `## Vocabulary` block of 3-6 lesson-specific terms; APA 7 `## Sources`
// with a stable URL; a quiz per teaching section (pool sized by density, serving 5, passing 80,
// shuffled) plus a final serving 10; every question carries `explanation` and `sourceLessonSlug`.
// Correct options are written SHORT and distractors long and specific, so `check-longest-option`
// passes by construction rather than by post-hoc trimming.
export const CREDIT_DECISIONS_COURSE: AuthoredCourse = {
  title: "Credit, and the Decisions Made About You",
  description:
    "Somebody you have never met keeps a file about how you pay, sells it to people deciding whether to lend to you, and is allowed to do that. This course is not about how to build good credit. It is about how a credit decision is actually made: what data feeds it, who is allowed to look, what the decider must tell you, and what you can do when the record is wrong. It starts before any of it is about scores, with a calendar, because the ordinary failure is not overspending but timing. Money is owed on one date and arrives on another, and closing that gap is what every consumer credit product sells. Then the vocabulary that the law, rather than the industry, defines. A creditor that receives a completed application does one of three things, and only one of them has a legal name: adverse action, defined to its edges in Regulation B, because the paperwork rights attach to the defined term and not to the feeling of being turned down. Then the file itself, which the Fair Credit Reporting Act defines as a communication bearing on your credit worthiness, credit standing, credit capacity, character, general reputation, personal characteristics, or mode of living, and which a consumer reporting agency assembles for monetary fees. Who may buy it is a closed list in the statute that ends with the words and no other. What may appear in it, and for how long, is a second list, and most adverse items fall off after seven years. Then the score, which the statute defines as a numerical value derived from a statistical tool used to predict the likelihood of certain credit behaviors, which means it is a prediction rather than a measurement, that there is more than one of them, and that the four key factors printed beside it are the part you can act on. The centre of the course is a piece of paper you can hold: the adverse action notice, which federal regulation requires to be specific and to indicate the principal reasons, and which may not simply say you failed to reach a score cutoff. Read beside this catalog's own course on federal farm credit, where a government gate had to state its eligibility standard in statute, the parallel is exact and one level down. Then the dispute: a reasonable reinvestigation, free of charge, inside thirty days, with the company that supplied the item put on notice within five business days and obliged to investigate too. Then the price, and why the annual percentage rate exists at all, which is so that two offers can be compared. The course closes on the method rather than on a table, because model versions and program terms move while statutes do not, and it ends by having you read your own record. It is information about how institutions decide, not advice about your money, and it says so in three separate lessons.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1 — The decision, and the calendar
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-gap-money-falls-into",
      title: "1 · Before it is about scores, it is about a calendar",
      section: "Section 1 · The decision, and the calendar",
      body: `Rent is due on the first. Pay lands on the fifth.

Nothing in that sentence is a character flaw. It is two calendars that do not line up, and it is the ordinary shape of the problem consumer credit exists to solve. Money is owed on one date and arrives on another, and the gap between them has to be filled by something: a buffer you already have, a borrowing you are permitted to make, or going without.

**Hold that, because it is the most useful thing in this course.** Every product you are about to meet is a way of buying time, and every one of them is priced.

**The same idea, one level up, in a course you can go and read.** This catalog already teaches the farm version. In *The County Committee* the opening lesson makes the point in a form nobody argues with: a farmer spends in the spring and is paid in the autumn, so **a loan that arrives late is a loan that was denied**. Money for seed in July buys nothing, because the crop that money was for is not planted. The household version is less dramatic and structurally identical. A payment that clears on the wrong day is not a smaller problem than a payment that never clears; it is a different problem with its own price.

**What this course is, and what it is not.** This is a course about how a credit decision is made: what record it is made from, who is allowed to look at that record, what the decider has to tell you, and what you can do when the record is wrong. **It is not financial advice, and it will not give you any.** It will not tell you what to do with your money, will not name a bank or a card or a score service as a good one, will not tell you to borrow or not to borrow, and will not promise you an outcome in points. Those are decisions about your life, and this course does not know your life. What it can do is put the rules in your hands, because the rules are public, free, and written down.

**Two habits that come with that promise.** First, **every figure in this course carries a date**, because financial specifics go stale silently and an undated number is a claim someone will still be repeating in five years. Second, **this course teaches a method rather than a table**. Which score model a given lender buys, and what a given company is offering this month, both move. What the statute guarantees moves far more slowly, and you can look it up yourself. So where a summary table would be convenient and wrong, you will get the statute and the way to check.

**Why the gap is the right place to start.** Because the gap is what produces the record. A borrowing that is repaid on time and a borrowing that is not are the same event to you at the moment you make it, and two very different lines in a file afterwards. The file is not a description of who you are. It is a description of what happened to your calendar, kept by a company you did not hire, and sold to people making decisions about you.

That is the object this course takes apart, and the next lesson starts by defining the decision itself, because the law defines it more precisely than the industry does.

:::reveal In one sentence, what problem does consumer credit exist to solve? ||| The gap between the date money is owed and the date money arrives.

:::reveal What does the sibling course The County Committee say about a farm loan that arrives after planting? ||| That a loan which arrives late is a loan that was denied, because money for seed in July buys nothing.

:::reveal Why does this course date every figure it prints? ||| Because financial specifics go stale silently, and an undated number is a claim someone will still be repeating years later.

## Vocabulary
- **Cash-flow timing**: the mismatch between the dates money is owed and the dates money arrives, which is the failure this course treats as ordinary rather than as a personal fault.
- **Consumer credit**: an arrangement that supplies money or goods now against a promise to pay later, primarily for personal, family or household purposes.
- **The file**: the record of your borrowing and repayment kept by a company you did not choose and cannot dismiss, and sold to parties deciding about you.
- **Method rather than table**: this course's rule that it teaches how to find what is true today rather than printing a summary that will go stale without announcing it.

## Sources
15 U.S.C. § 1601. (n.d.). *Congressional findings and declaration of purpose*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/15/1601

7 U.S.C. § 1942. (n.d.). *Purposes of loans; restrictions on use*. Office of the Law Revision Counsel, U.S. House of Representatives. https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title7-section1942&num=0&edition=prelim`,
    },
    {
      slug: "three-things-a-creditor-can-do",
      title: "2 · Three things a creditor can do, and only one has a name in law",
      section: "Section 1 · The decision, and the calendar",
      body: `A creditor that receives a completed application does one of three things. It grants what was asked for. It makes a counteroffer, which is an offer of different money on different terms. Or it takes **adverse action**.

Only the third has a definition in federal law, and the definition is the reason the rest of this course has anything to work with. **Rights attach to the defined term, not to the feeling of being turned down.**

**The statutory definition first.** The Equal Credit Opportunity Act says:

> "For purposes of this subsection, the term 'adverse action' means a denial or revocation of credit, a change in the terms of an existing credit arrangement, or a refusal to grant credit in substantially the amount or on substantially the terms requested. Such term does not include a refusal to extend additional credit under an existing credit arrangement where the applicant is delinquent or otherwise in default, or where such additional credit would exceed a previously established credit limit." (15 U.S.C. § 1691, n.d.)

**Then the regulation, which draws the edges.** Regulation B, the rule that implements ECOA, is more specific in both directions:

> "(c) Adverse action. (1) The term means: (i) A refusal to grant credit in substantially the amount or on substantially the terms requested in an application unless the creditor makes a counteroffer (to grant credit in a different amount or on other terms) and the applicant uses or expressly accepts the credit offered; (ii) A termination of an account or an unfavorable change in the terms of an account that does not affect all or substantially all of a class of the creditor's accounts; or (iii) A refusal to increase the amount of credit available to an applicant who has made an application for an increase." (12 CFR § 1002.2, n.d.)

**Read the exclusions, because they are where people get surprised.** The same paragraph says the term does *not* include a change in terms you expressly agreed to, an action taken because that account is already in default or delinquent, a refusal to authorise a transaction at the point of sale in the ordinary case, a refusal because the law forbids that extension of credit, or a refusal because the creditor simply does not offer the product you asked for (12 CFR § 1002.2, n.d.).

**Two consequences worth carrying.** A counteroffer you accept is not adverse action, which means the smaller, dearer loan you took instead of the one you wanted generates no letter explaining anything. And a card declined at a till is not adverse action either, so nothing is owed to you for it. Both are ordinary and both are outside the machinery.

**And there is a clock.** Regulation B requires the creditor to notify you of the action taken **within 30 days** of receiving a completed application, and within 30 days of adverse action on an existing account (12 CFR § 1002.9, n.d.). The statute frames the same period, allowing the agency to set a longer reasonable time for a class of transaction (15 U.S.C. § 1691, n.d.).

So the shape is: you apply, a decision happens, and if the decision meets the definition then a specific document is owed to you inside a specific window. **What that document has to say is Section 4, and it is the centre of this course.** First you need to know what the decision was made from.

:::reveal What are the three things a creditor can do with a completed application? ||| Grant it, make a counteroffer, or take adverse action.

:::reveal Under Regulation B, is a counteroffer that the applicant accepts an adverse action? ||| No. A refusal is not adverse action where the creditor counteroffers and the applicant uses or expressly accepts the credit offered.

:::reveal How long does Regulation B give a creditor to notify an applicant of the action taken on a completed application? ||| 30 days.

## Vocabulary
- **Adverse action**: the defined event, in ECOA and Regulation B, that triggers a creditor's duty to notify and to state reasons: a denial, a revocation, an unfavourable change in terms, or a refusal to grant substantially what was asked.
- **Counteroffer**: an offer of credit in a different amount or on other terms; accepted or used, it takes the transaction outside adverse action.
- **Completed application**: the point from which the 30-day notification clock in Regulation B runs.
- **Regulation B**: 12 CFR part 1002, the rule that implements the Equal Credit Opportunity Act and supplies the operational detail the statute leaves open.

## Sources
15 U.S.C. § 1691. (n.d.). *Scope of prohibition*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/15/1691

12 CFR § 1002.2. (n.d.). *Definitions*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/1002.2

12 CFR § 1002.9. (n.d.). *Notifications*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/1002.9`,
    },
    {
      slug: "the-file-not-the-person",
      title: "3 · The lender is not reading you, it is reading a file",
      section: "Section 1 · The decision, and the calendar",
      body: `The decision is not made about you. It is made about a document, and the document is written by other people and sold by a company.

**What the document is, in the statute's own words.** The Fair Credit Reporting Act defines a consumer report as:

> "any written, oral, or other communication of any information by a consumer reporting agency bearing on a consumer's credit worthiness, credit standing, credit capacity, character, general reputation, personal characteristics, or mode of living which is used or expected to be used or collected in whole or in part for the purpose of serving as a factor in establishing the consumer's eligibility for—(A) credit or insurance to be used primarily for personal, family, or household purposes; (B) employment purposes; or (C) any other purpose authorized under section 1681b of this title." (15 U.S.C. § 1681a, n.d.)

**Notice the list.** Credit worthiness and credit standing you expected. **Character, general reputation, personal characteristics, and mode of living** are also there, written into federal law in 1970 and still there. The statute is not describing a payment history. It is describing a dossier, and the definition is that wide because the industry it was written about was that wide.

**Who keeps it, and why they keep it.** The same section defines the keeper:

> "any person which, for monetary fees, dues, or on a cooperative nonprofit basis, regularly engages in whole or in part in the practice of assembling or evaluating consumer credit information or other information on consumers for the purpose of furnishing consumer reports to third parties, and which uses any means or facility of interstate commerce for the purpose of preparing or furnishing consumer reports." (15 U.S.C. § 1681a, n.d.)

**For monetary fees.** A consumer reporting agency is a business, its product is information about you, and you are not its customer. You did not hire it, you cannot fire it, and it owes you a set of duties only because a statute says so. That is the single most useful thing to understand about the arrangement, and it explains why every right in this course is written down: none of them would exist as a matter of contract, because you have no contract.

**Nationwide, and what that means.** The statute separately defines an agency that "compiles and maintains files on consumers on a nationwide basis" as one that regularly assembles, evaluates and maintains, for furnishing to third parties, both "(1) Public record information" and "(2) Credit account information from persons who furnish that information regularly and in the ordinary course of business" (15 U.S.C. § 1681a, n.d.). The nationwide agencies carry the heaviest duties, including the free annual disclosure in Section 5.

**Two lines that follow from all of this.** First, a lender comparing two applicants is comparing two documents, so an error in a document is an error in a decision. Second, there is more than one document. The nationwide agencies are separate businesses assembled from overlapping but not identical sources, which is why the capstone of this course has you pull more than one and reconcile them rather than pull one and trust it.

**And a person with no document at all is not a person with a clean record.** They are a person the system cannot price, which is a different problem and the subject of Section 2's last lesson.

:::reveal Name three things beyond payment history that the FCRA's definition of a consumer report expressly covers. ||| Character, general reputation, personal characteristics, and mode of living are all in the statutory list.

:::reveal On what basis does the FCRA say a consumer reporting agency assembles information? ||| For monetary fees, dues, or on a cooperative nonprofit basis. It is a business, and the consumer is not its customer.

:::reveal What two kinds of information define a nationwide consumer reporting agency in the statute? ||| Public record information, and credit account information from persons who furnish it regularly in the ordinary course of business.

## Vocabulary
- **Consumer report**: the statutory name for the communication a consumer reporting agency makes about you, defined by what it bears on and what it is used to establish, not by its format.
- **Consumer reporting agency**: a business that assembles or evaluates consumer information for monetary fees in order to furnish reports to third parties.
- **Nationwide consumer reporting agency**: one that maintains files nationwide holding both public record information and regularly furnished credit account information; it carries the heaviest duties in the Act.
- **Furnisher**: the party that supplies an item of information to an agency, most often the creditor you actually dealt with.

## Sources
15 U.S.C. § 1681a. (n.d.). *Definitions; rules of construction*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/15/1681a

15 U.S.C. § 1681b. (n.d.). *Permissible purposes of consumer reports*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/15/1681b`,
    },
    {
      slug: "quiz-the-decision",
      title: "4 · Knowledge check: the decision, and the calendar",
      section: "Section 1 · The decision, and the calendar",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What problem does this course say consumer credit exists to solve?",
            options: ["A timing gap", "The problem that most households systematically spend more each month than they earn in wages", "The problem that prices for essential goods rise faster than the wages paid for ordinary work", "The problem that banks hold more deposits than they are able to lend out profitably"],
            correctIndex: 0,
            explanation: "Money is owed on one date and arrives on another, and the gap has to be filled by a buffer, a borrowing, or going without.",
            sourceLessonSlug: "the-gap-money-falls-into",
          },
          {
            prompt: "In the farm version of the same idea, what does the sibling course say a late operating loan actually is?",
            options: ["A denied loan", "A loan that carries a higher interest rate because the lender priced the delay into the terms", "A loan the Secretary of Agriculture must approve a second time before the money can be released", "A loan that converts automatically into an emergency loan under the disaster designation rules"],
            correctIndex: 0,
            explanation: "Money for seed in July buys nothing, because the crop that money was for is not planted.",
            sourceLessonSlug: "the-gap-money-falls-into",
          },
          {
            prompt: "Which catalog course teaches the farm version of the timing problem?",
            options: ["The County Committee", "Financing Without Access, which teaches fraternal societies and rotating savings associations", "What They Built, which teaches Black districts capitalising themselves when banks would not lend", "Surplus Funds Basics, which teaches the recovery of surplus after a tax sale"],
            correctIndex: 0,
            explanation: "Its opening lesson makes the point in the form nobody argues with, using the spring-spend and autumn-sell calendar.",
            sourceLessonSlug: "the-gap-money-falls-into",
          },
          {
            prompt: "Which of these does this course expressly promise NOT to do?",
            options: ["Give financial advice", "Quote the text of any federal statute or regulation without first paying for a commercial database", "Discuss how a consumer reporting agency assembles the file it keeps about an individual", "Explain what a creditor is required to tell an applicant after it refuses an application"],
            correctIndex: 0,
            explanation: "It teaches how institutions decide, and it does not tell any reader what to do with their own money.",
            sourceLessonSlug: "the-gap-money-falls-into",
          },
          {
            prompt: "Why does this course attach a date to every figure it prints?",
            options: ["Figures go stale silently", "Because federal law requires an educational publisher to date any numerical claim about consumer credit", "Because a dated figure can be cited in a dispute with a consumer reporting agency and an undated one cannot", "Because the catalog's citation tooling refuses to extract a source unless a date appears beside it"],
            correctIndex: 0,
            explanation: "An undated number is a claim someone will still be repeating in five years without knowing it has moved.",
            sourceLessonSlug: "the-gap-money-falls-into",
          },
          {
            prompt: "What does this course mean by teaching a method rather than a table?",
            options: ["Teach how to check", "Presenting every rule as a numbered procedure the learner performs in a fixed order from start to finish", "Replacing all prose explanation with diagrams so the material can be understood without reading", "Restricting the course to rules that have never been amended since they were first enacted"],
            correctIndex: 0,
            explanation: "What a given company offers this month moves; what the statute guarantees moves far more slowly and you can look it up.",
            sourceLessonSlug: "the-gap-money-falls-into",
          },
          {
            prompt: "According to the opening lesson, what are the three ways a household can fill the gap between money owed and money arriving?",
            options: ["A buffer, a borrowing, or going without", "A wage increase, a second job, or a reduction in the number of people in the household", "A government transfer payment, a charitable grant, or an interest-free loan from an employer", "A deferral agreement, a bankruptcy filing, or a negotiated settlement with every creditor at once"],
            correctIndex: 0,
            explanation: "The lesson names exactly those three, and treats the gap as ordinary rather than as a personal failing.",
            sourceLessonSlug: "the-gap-money-falls-into",
          },
          {
            prompt: "What does the opening lesson say every consumer credit product is selling?",
            options: ["Time", "Access to a payment network that ordinary bank transfers cannot reach on short notice", "Insurance against the possibility that an employer pays wages later than the agreed date", "Membership in a pool of borrowers whose repayments subsidise one another's interest rates"],
            correctIndex: 0,
            explanation: "Every product in the course is a way of buying time, and every one of them is priced.",
            sourceLessonSlug: "the-gap-money-falls-into",
          },
          {
            prompt: "Why does the lesson say a payment that clears on the wrong day is not simply a smaller version of a payment that never clears?",
            options: ["It is a different problem", "Because a late payment is reported to the consumer reporting agencies while a missed payment is not", "Because federal law treats a late payment as a technical default and a missed payment as a breach", "Because a late payment can always be reversed by the paying bank while a missed one cannot"],
            correctIndex: 0,
            explanation: "It is a different problem with its own price, which is exactly why timing is worth teaching before scores.",
            sourceLessonSlug: "the-gap-money-falls-into",
          },
          {
            prompt: "What does the lesson say the file is a description of?",
            options: ["What happened to your calendar", "The lender's own assessment of an applicant's honesty, written up after the application interview", "A ranking of every consumer in the country against every other consumer in the country", "The average balance a household has carried across all of its accounts since the accounts were opened"],
            correctIndex: 0,
            explanation: "It is not a description of who you are; it records events, kept by a company you did not hire.",
            sourceLessonSlug: "the-gap-money-falls-into",
          },
          {
            prompt: "The lesson says a borrowing repaid on time and a borrowing not repaid are the same event at one moment. Which moment?",
            options: ["When you make it", "The moment the creditor reports the account to a nationwide consumer reporting agency for the first time", "The moment the applicant signs the promissory note in front of a witness or a notary", "The moment the funds actually leave the lender's account and arrive in the borrower's"],
            correctIndex: 0,
            explanation: "They are identical when made and become two very different lines in a file afterwards.",
            sourceLessonSlug: "the-gap-money-falls-into",
          },
          {
            prompt: "Which statute does the opening lesson cite for the idea that credit terms should be disclosed so they can be compared?",
            options: ["15 U.S.C. § 1601", "15 U.S.C. § 1681i, the section that creates the dispute right and the reinvestigation duty", "12 CFR § 1002.9, the Regulation B section governing notifications of action taken", "15 U.S.C. § 1691(a), the section listing the bases on which a creditor may not discriminate"],
            correctIndex: 0,
            explanation: "That is the Truth in Lending Act's findings and purpose section, and the course returns to it in Section 6.",
            sourceLessonSlug: "the-gap-money-falls-into",
          },
          {
            prompt: "Which of these would violate this course's own stated rule about advice?",
            options: ["Naming a good credit card", "Quoting the text of Regulation B on what an adverse action notice must contain", "Explaining that the nationwide agencies are separate businesses assembled from overlapping sources", "Describing the statutory definition of a credit score as a prediction rather than a measurement"],
            correctIndex: 0,
            explanation: "The course names no bank, card, bureau product or lender as a recommendation, because that is a decision about a reader's life it does not know.",
            sourceLessonSlug: "the-gap-money-falls-into",
          },
          {
            prompt: "What kind of promise about outcomes does this course refuse to make?",
            options: ["A promise in points", "A promise that the statutes it quotes will still read the same way in ten years' time", "A promise that a consumer reporting agency will answer a dispute letter within the statutory period", "A promise that a lender will explain its decision in language an ordinary reader can follow"],
            correctIndex: 0,
            explanation: "It will not tell a reader that any step will raise a score by a stated number.",
            sourceLessonSlug: "the-gap-money-falls-into",
          },
          {
            prompt: "The lesson opens with rent due on the first and pay landing on the fifth. What is that meant to establish?",
            options: ["It is not a character flaw", "That most rental agreements in the United States require payment before the first working day of a month", "That employers are legally required to align pay dates with the largest recurring bill a worker owes", "That a four-day gap is the threshold at which a lender begins to treat an account as delinquent"],
            correctIndex: 0,
            explanation: "It is two calendars that do not line up, which is the ordinary shape of the problem rather than a fault.",
            sourceLessonSlug: "the-gap-money-falls-into",
          },
          {
            prompt: "Which of these questions is NOT one of the four this course sets out to answer?",
            options: ["Which lender should you choose", "What record is a credit decision made from, and who assembles that record", "Who is allowed to look at the record, and for what purposes", "What the decider must tell you, and what you can do when the record is wrong"],
            correctIndex: 0,
            explanation: "Choosing a lender is a decision about a reader's own life, which is the line between information and advice.",
            sourceLessonSlug: "the-gap-money-falls-into",
          },
          {
            prompt: "Why does the lesson say the gap is the right place to start a course about credit?",
            options: ["The gap produces the record", "Because the statutes governing credit reporting were written in response to a national shortage of savings", "Because a lender's first question on any application is how many days separate income from rent", "Because the annual percentage rate is calculated directly from the length of the gap being financed"],
            correctIndex: 0,
            explanation: "What happens in the gap becomes the lines in the file that later decisions are made from.",
            sourceLessonSlug: "the-gap-money-falls-into",
          },
          {
            prompt: "What does the lesson say you can do about the company that keeps your file, in terms of the ordinary customer relationship?",
            options: ["Nothing, you never hired it", "You may terminate the relationship in writing and require the company to delete the file within thirty days", "You may transfer your file to a competing agency once in any twelve-month period without charge", "You may negotiate the terms on which the file is assembled before any account is opened"],
            correctIndex: 0,
            explanation: "You did not hire it and cannot fire it, which is why every right in the course had to be written into a statute.",
            sourceLessonSlug: "the-gap-money-falls-into",
          },
          {
            prompt: "How does the lesson describe a person with no credit file at all?",
            options: ["Someone the system cannot price", "Someone the statute treats as having a perfect record until an adverse item is first reported", "Someone entitled to an automatic explanation from any creditor that declines their application", "Someone whose application must be decided on income and employment alone by federal rule"],
            correctIndex: 0,
            explanation: "An absent file is not a clean record; it is a different problem, and Section 2 takes it up.",
            sourceLessonSlug: "the-gap-money-falls-into",
          },
          {
            prompt: "Where does this course say the rules it teaches can be found?",
            options: ["Public and free", "In a subscription legal database that a public library card gives limited access to", "In the internal underwriting manuals lenders file with their prudential regulator each year", "In the terms and conditions a borrower signs at the moment an account is opened"],
            correctIndex: 0,
            explanation: "The statutes and regulations behind every right in the course are published, free to read, and written down.",
            sourceLessonSlug: "the-gap-money-falls-into",
          },
          {
            prompt: "What does the lesson give instead of a summary table where a table would be convenient?",
            options: ["The statute and the way to check", "A dated snapshot of the market taken at the moment the course was written and revised annually", "A referral to a licensed financial professional who can supply the current figures on request", "An estimate expressed as a range rather than a single number, to allow for change over time"],
            correctIndex: 0,
            explanation: "Summary tables go stale silently, and the statutory floor plus a checking method does not.",
            sourceLessonSlug: "the-gap-money-falls-into",
          },
          {
            prompt: "How many things can a creditor do with a completed application, according to the second lesson?",
            options: ["Three", "Two, since a counteroffer is legally treated as a denial followed by a fresh offer of credit", "Five, because Regulation B separates approvals, conditional approvals, counteroffers, denials and withdrawals", "One, because every response other than an outright grant is classified as adverse action"],
            correctIndex: 0,
            explanation: "It grants what was asked, makes a counteroffer, or takes adverse action.",
            sourceLessonSlug: "three-things-a-creditor-can-do",
          },
          {
            prompt: "Which of the three possible responses to a completed application has a definition in federal law?",
            options: ["Adverse action", "The counteroffer, which Regulation B defines by the amount and terms of the credit newly offered", "The grant, which the statute defines as the extension of credit in the amount originally requested", "All three are defined, and the statute assigns each of them its own notification period"],
            correctIndex: 0,
            explanation: "Rights attach to the defined term, not to the general feeling of having been turned down.",
            sourceLessonSlug: "three-things-a-creditor-can-do",
          },
          {
            prompt: "Under ECOA, which of these is expressly within the statutory meaning of adverse action?",
            options: ["A revocation of credit", "A refusal to extend more credit on an account where the applicant is already delinquent or in default", "A refusal to extend more credit that would carry the balance past a previously established limit", "A change in the terms of an account that the applicant expressly agreed to in advance"],
            correctIndex: 0,
            explanation: "The statute names a denial or revocation of credit, a change in the terms of an existing arrangement, and a refusal to grant substantially what was requested.",
            sourceLessonSlug: "three-things-a-creditor-can-do",
          },
          {
            prompt: "ECOA's definition of adverse action expressly excludes a refusal to extend additional credit in two situations. Which pair?",
            options: ["Existing default, or over the limit", "An application made by telephone, or an application made outside the creditor's ordinary business hours", "An application for a product the creditor has discontinued, or one for an amount below its minimum", "An application from an applicant who has previously been refused by the same creditor twice"],
            correctIndex: 0,
            explanation: "The statutory carve-out covers an applicant already delinquent or in default, and additional credit that would exceed a previously established limit.",
            sourceLessonSlug: "three-things-a-creditor-can-do",
          },
          {
            prompt: "Under Regulation B, when does a refusal to grant what was requested stop being adverse action?",
            options: ["When an accepted counteroffer replaces it", "When the creditor sends written notice of the refusal within thirty days of the completed application", "When the applicant applies again for a smaller amount within sixty days of the original refusal", "When the creditor refers the applicant to a second lender that offers the product requested"],
            correctIndex: 0,
            explanation: "The rule excepts a refusal where the creditor counteroffers and the applicant uses or expressly accepts the credit offered.",
            sourceLessonSlug: "three-things-a-creditor-can-do",
          },
          {
            prompt: "Regulation B counts a termination of an account as adverse action, but with a qualifier. What is it?",
            options: ["Not if it hits a whole class", "Not if the account has been open for less than one full billing cycle at the time of termination", "Not if the creditor gives the accountholder at least forty-five days of advance written notice", "Not if the accountholder holds a second account with the same creditor that remains open"],
            correctIndex: 0,
            explanation: "A termination or unfavourable change counts only where it does not affect all or substantially all of a class of the creditor's accounts.",
            sourceLessonSlug: "three-things-a-creditor-can-do",
          },
          {
            prompt: "Is a card declined at the till an adverse action under Regulation B in the ordinary case?",
            options: ["No", "Yes, and the merchant must supply the reason for the decline before the transaction is abandoned", "Yes, but only where the decline happens more than once at the same merchant in a single day", "Yes, and the issuer must send a written statement of reasons within thirty days of the decline"],
            correctIndex: 0,
            explanation: "A refusal to authorise a transaction at point of sale is expressly excluded, apart from the narrow termination and credit-line cases.",
            sourceLessonSlug: "three-things-a-creditor-can-do",
          },
          {
            prompt: "A creditor refuses because it does not offer the product asked for. Under Regulation B, is that adverse action?",
            options: ["No", "Yes, because the applicant has been refused credit in substantially the amount that was requested", "Yes, but only if the creditor advertised the product within the previous twelve months", "Yes, unless the creditor supplies the name of another lender that does offer the product"],
            correctIndex: 0,
            explanation: "A refusal because the creditor does not offer the type of credit or credit plan requested is expressly outside the term.",
            sourceLessonSlug: "three-things-a-creditor-can-do",
          },
          {
            prompt: "A creditor refuses because the law forbids that extension of credit. Under Regulation B, is that adverse action?",
            options: ["No", "Yes, and the creditor must identify the statute that forbids it in a written statement of reasons", "Yes, because the applicant is refused credit and the reason for the refusal is irrelevant to the definition", "Yes, unless the applicant withdraws the application before the creditor issues its decision"],
            correctIndex: 0,
            explanation: "A refusal because applicable law prohibits the creditor from extending the credit requested is one of the listed exclusions.",
            sourceLessonSlug: "three-things-a-creditor-can-do",
          },
          {
            prompt: "What does Regulation B require within 30 days of a completed application?",
            options: ["Notice of the action taken", "A full copy of the consumer report the creditor used, sent to the applicant without charge", "A written estimate of the annual percentage rate the applicant would have been offered", "An oral explanation of the creditor's underwriting standards, on request from the applicant"],
            correctIndex: 0,
            explanation: "The rule requires notice of the creditor's approval of, counteroffer to, or adverse action on the application.",
            sourceLessonSlug: "three-things-a-creditor-can-do",
          },
          {
            prompt: "Beyond the completed application, which other event starts a 30-day Regulation B notification clock?",
            options: ["Adverse action on an existing account", "The applicant's written request for a copy of the file the creditor relied on in reaching its decision", "The creditor's decision to sell the account to a different institution in the ordinary course of business", "The anniversary of the account opening, on which the creditor must restate the terms in force"],
            correctIndex: 0,
            explanation: "The rule sets 30 days after taking adverse action on an existing account, alongside the completed-application case.",
            sourceLessonSlug: "three-things-a-creditor-can-do",
          },
          {
            prompt: "Under Regulation B, how long does a creditor have after notifying an applicant of a counteroffer, if the applicant neither uses nor accepts the credit offered?",
            options: ["90 days", "30 days, the same period that applies to every other notification the rule requires of a creditor", "15 days, on the theory that a counteroffer is a live offer the applicant is expected to answer quickly", "180 days, matching the period a creditor may hold an application file open before closing it"],
            correctIndex: 0,
            explanation: "The rule sets 90 days after notifying the applicant of a counteroffer that the applicant does not expressly accept or use.",
            sourceLessonSlug: "three-things-a-creditor-can-do",
          },
          {
            prompt: "What is Regulation B, in one line?",
            options: ["12 CFR part 1002", "15 U.S.C. § 1691, the Equal Credit Opportunity Act itself as passed by Congress in 1974", "12 CFR part 1022, the rule implementing the Fair Credit Reporting Act's consumer-report duties", "12 CFR part 1026, the rule implementing the Truth in Lending Act's disclosure requirements"],
            correctIndex: 0,
            explanation: "It is the rule implementing the Equal Credit Opportunity Act, supplying the operational detail the statute leaves open.",
            sourceLessonSlug: "three-things-a-creditor-can-do",
          },
          {
            prompt: "Why does the lesson insist that the definition of adverse action matters so much?",
            options: ["Rights attach to the defined term", "Because a creditor that misclassifies a decision commits a separate offence under the statute", "Because the definition determines which federal agency has authority to examine the creditor", "Because an applicant may not sue a creditor unless the decision was correctly labelled at the time"],
            correctIndex: 0,
            explanation: "The paperwork duties follow the defined event and not the applicant's sense of having been refused.",
            sourceLessonSlug: "three-things-a-creditor-can-do",
          },
          {
            prompt: "According to the lesson, what does an accepted counteroffer produce for the applicant, in terms of explanation?",
            options: ["No letter", "A shortened statement of reasons, limited to the two factors that most affected the decision", "The same full statement of reasons a denial would have produced, on the same thirty-day timetable", "An oral explanation only, which the applicant may have confirmed in writing on request"],
            correctIndex: 0,
            explanation: "The smaller or dearer loan you took instead of the one you wanted generates no letter explaining anything.",
            sourceLessonSlug: "three-things-a-creditor-can-do",
          },
          {
            prompt: "Does the ECOA statute allow the notification period to be longer than thirty days for some transactions?",
            options: ["Yes, by regulation", "No, thirty days is an absolute statutory ceiling that no agency may extend for any class of credit", "Yes, but only where the applicant consents in writing at the time the application is submitted", "Yes, and the extension is automatic for any application involving real property as collateral"],
            correctIndex: 0,
            explanation: "The statute frames thirty days or such longer reasonable time as specified in regulations for a class of credit transaction.",
            sourceLessonSlug: "three-things-a-creditor-can-do",
          },
          {
            prompt: "Which pair of decisions does the lesson describe as ordinary and outside the machinery of explanation?",
            options: ["An accepted counteroffer and a declined card", "A denial for insufficient income and a denial for too many recent applications for credit", "A closed account and an account whose interest rate was raised across an entire product line", "A refused mortgage application and a refused application to increase an existing credit line"],
            correctIndex: 0,
            explanation: "Both are common, neither meets the definition, and so nothing is owed to the consumer for either.",
            sourceLessonSlug: "three-things-a-creditor-can-do",
          },
          {
            prompt: "What does the lesson say the applicant needs to know before the contents of the adverse action notice can be understood?",
            options: ["What the decision was made from", "How many days remain before the statutory period for filing a dispute expires for that decision", "Which federal agency supervises the particular creditor that issued the notice in question", "Whether the creditor is a bank, a credit union, or a finance company not taking deposits"],
            correctIndex: 0,
            explanation: "The lesson closes by pointing at the file, which the next lesson defines from the statute.",
            sourceLessonSlug: "three-things-a-creditor-can-do",
          },
          {
            prompt: "Under Regulation B, is a change in account terms the accountholder expressly agreed to an adverse action?",
            options: ["No", "Yes, because any unfavourable change in the terms of an account falls inside the definition", "Yes, unless the agreement was made in writing and signed by both the creditor and the accountholder", "Yes, but the creditor may satisfy its duty with an oral notice rather than a written statement"],
            correctIndex: 0,
            explanation: "A change in the terms of an account expressly agreed to by an applicant is one of the rule's listed exclusions.",
            sourceLessonSlug: "three-things-a-creditor-can-do",
          },
          {
            prompt: "Regulation B treats a refusal to increase available credit as adverse action, but only in one circumstance. Which?",
            options: ["The applicant asked for the increase", "The creditor has already increased the line for other accountholders in the same product during that year", "The account has been open for at least twelve months and has never carried a late payment", "The refusal is communicated in writing rather than orally or through an electronic message"],
            correctIndex: 0,
            explanation: "The rule reaches a refusal to increase the amount of credit available to an applicant who has made an application for an increase.",
            sourceLessonSlug: "three-things-a-creditor-can-do",
          },
          {
            prompt: "Where does the FCRA's definition of a consumer report say the information must bear on?",
            options: ["Credit worthiness and character", "The applicant's employment history over the seven years preceding the date of the report", "The total value of the assets the consumer owns at the moment the report is furnished", "The consumer's willingness to accept the terms a creditor has previously offered them"],
            correctIndex: 0,
            explanation: "The statutory list runs credit worthiness, credit standing, credit capacity, character, general reputation, personal characteristics, or mode of living.",
            sourceLessonSlug: "the-file-not-the-person",
          },
          {
            prompt: "Which of these phrases appears in the FCRA's statutory definition of a consumer report?",
            options: ["Mode of living", "Household net worth, meaning assets less liabilities as of the date the report is prepared", "Employment stability, meaning the number of separate employers in the preceding decade", "Repayment intention, meaning the consumer's stated willingness to honour a future obligation"],
            correctIndex: 0,
            explanation: "Mode of living sits in the list alongside character, general reputation and personal characteristics.",
            sourceLessonSlug: "the-file-not-the-person",
          },
          {
            prompt: "For what purposes does the FCRA's definition say a consumer report is used to establish eligibility?",
            options: ["Credit, insurance, employment", "Housing, education, and any licence issued by a State or a political subdivision of a State", "Marriage, immigration, and the transfer of real property between private parties", "Voting registration, jury service, and enrolment in a federal benefits programme"],
            correctIndex: 0,
            explanation: "The definition names credit or insurance for personal, family or household purposes, employment purposes, and any other purpose authorised under section 1681b.",
            sourceLessonSlug: "the-file-not-the-person",
          },
          {
            prompt: "On what basis does the FCRA say a consumer reporting agency assembles or evaluates information?",
            options: ["For monetary fees", "Under a licence granted by the Federal Trade Commission and renewable every three years", "As a public utility whose rates are set by the prudential regulator of the largest user", "Without charge, since the statute makes consumer reporting a public information service"],
            correctIndex: 0,
            explanation: "The definition reads for monetary fees, dues, or on a cooperative nonprofit basis, which is what makes it a business.",
            sourceLessonSlug: "the-file-not-the-person",
          },
          {
            prompt: "Why does the lesson say every right in this course had to be written into a statute?",
            options: ["You have no contract with the agency", "Because the common law of most States expressly forbids a private action over an inaccurate record", "Because the agencies operate across State lines and no single State could bind them", "Because a written statute is the only way to make a duty enforceable against a corporation"],
            correctIndex: 0,
            explanation: "You did not hire the agency and cannot fire it, so none of these duties would exist as a matter of contract.",
            sourceLessonSlug: "the-file-not-the-person",
          },
          {
            prompt: "In the FCRA's definition, who is the consumer reporting agency's customer?",
            options: ["The third party buying the report", "The consumer, who may direct what the agency collects and how long it is retained", "The furnisher, which pays a subscription fee for the privilege of reporting its accounts", "The federal supervisor, which purchases reports in bulk to monitor lending patterns"],
            correctIndex: 0,
            explanation: "The agency assembles information for the purpose of furnishing consumer reports to third parties, and the consumer is the subject rather than the buyer.",
            sourceLessonSlug: "the-file-not-the-person",
          },
          {
            prompt: "Which two kinds of information define a nationwide consumer reporting agency under the FCRA?",
            options: ["Public records and credit accounts", "Employment verifications and rental payment histories collected from landlords and property managers", "Bank deposit balances and monthly utility payments reported by the servicing companies", "Insurance claims histories and medical billing records supplied by providers and insurers"],
            correctIndex: 0,
            explanation: "The definition names public record information, and credit account information from persons who furnish it regularly in the ordinary course of business.",
            sourceLessonSlug: "the-file-not-the-person",
          },
          {
            prompt: "According to the lesson, why does the capstone have a learner pull more than one report?",
            options: ["The agencies are separate businesses", "Because the statute requires a consumer to compare at least two files before filing any dispute", "Because a single agency may lawfully refuse a first request and must honour a second one", "Because a dispute filed with one agency is only effective if the same item appears in two files"],
            correctIndex: 0,
            explanation: "They are assembled from overlapping but not identical sources, so reconciling them is the exercise.",
            sourceLessonSlug: "the-file-not-the-person",
          },
          {
            prompt: "What does the lesson say follows from the fact that a lender comparing applicants is comparing documents?",
            options: ["An error in a document is an error in a decision", "That two applicants with identical documents must by law receive identical offers of credit", "That a lender is required to interview any applicant whose document appears incomplete", "That the documents must be prepared by an agency the applicant selects from a published list"],
            correctIndex: 0,
            explanation: "The decision is made about the record, so a wrong line in the record is a wrong input to the decision.",
            sourceLessonSlug: "the-file-not-the-person",
          },
          {
            prompt: "What is a furnisher, in this course's vocabulary?",
            options: ["The party that supplies an item", "The consumer reporting agency that assembles the file and sells it on to lenders and insurers", "The lender that buys a report in order to decide whether to extend credit to an applicant", "The vendor that builds the statistical model a lender uses to score the file it has bought"],
            correctIndex: 0,
            explanation: "It is most often the creditor you actually dealt with, and Section 5 shows that it carries duties of its own.",
            sourceLessonSlug: "the-file-not-the-person",
          },
          {
            prompt: "The FCRA's definition of a consumer report covers communications in which forms?",
            options: ["Written, oral, or other", "Written only, because an oral statement leaves no record capable of being disputed later", "Electronic only, since the definition was amended to cover automated furnishing systems", "Written and electronic, with oral communications governed by a separate section of the Act"],
            correctIndex: 0,
            explanation: "The statute reads any written, oral, or other communication of any information by a consumer reporting agency.",
            sourceLessonSlug: "the-file-not-the-person",
          },
          {
            prompt: "Why does the lesson describe the FCRA's definition of a consumer report as describing a dossier rather than a payment history?",
            options: ["The list is that wide", "Because the statute was drafted before computerised payment records existed anywhere in the industry", "Because the definition is expressly limited to information the consumer has personally supplied", "Because the definition applies only to reports sold for employment rather than credit purposes"],
            correctIndex: 0,
            explanation: "Character, general reputation, personal characteristics and mode of living are all in the definition, because the industry it was written about was that wide.",
            sourceLessonSlug: "the-file-not-the-person",
          },
          {
            prompt: "Which section of the FCRA does its definition of a consumer report cross-reference for other authorised purposes?",
            options: ["Section 1681b", "Section 1681i, which sets out the reinvestigation duty owed after a consumer disputes an item", "Section 1681c, which lists the items that may not appear in a report and for how long", "Section 1681m, which lists the duties of a user that takes adverse action on a report"],
            correctIndex: 0,
            explanation: "The third limb of the definition reads any other purpose authorized under section 1681b of this title.",
            sourceLessonSlug: "the-file-not-the-person",
          },
          {
            prompt: "What does the lesson say a nationwide agency's status brings with it?",
            options: ["The heaviest duties", "An exemption from State consumer-protection statutes that would otherwise apply to its files", "A federal charter that must be renewed by the supervising agency every five years", "An obligation to maintain an office in every State in which it furnishes consumer reports"],
            correctIndex: 0,
            explanation: "The nationwide agencies carry the heaviest duties in the Act, including the free annual disclosure taken up in Section 5.",
            sourceLessonSlug: "the-file-not-the-person",
          },
          {
            prompt: "In the definition of a consumer reporting agency, what does the statute require of the agency's means of operating?",
            options: ["Interstate commerce", "A physical place of business in the State where the consumer whose file it keeps resides", "Registration with the Secretary of State of every jurisdiction in which it sells reports", "A separate written agreement with each consumer whose information it assembles or evaluates"],
            correctIndex: 0,
            explanation: "The definition requires that the agency use any means or facility of interstate commerce to prepare or furnish consumer reports.",
            sourceLessonSlug: "the-file-not-the-person",
          },
          {
            prompt: "The FCRA definition covers reports used to establish eligibility for credit or insurance used primarily for what purposes?",
            options: ["Personal, family, or household", "Commercial, agricultural, or industrial, matching the scope of the Truth in Lending Act", "Educational, medical, or charitable, matching the categories used in the tax code", "Governmental, municipal, or tribal, matching the list of eligible public borrowers"],
            correctIndex: 0,
            explanation: "The first limb of the definition names credit or insurance to be used primarily for personal, family, or household purposes.",
            sourceLessonSlug: "the-file-not-the-person",
          },
          {
            prompt: "This course says a consumer reporting agency is defined by what it does rather than by its size. Which activity is the definition built on?",
            options: ["Assembling or evaluating", "Lending money to consumers and then reporting the resulting accounts to other lenders", "Scoring consumers against a statistical model licensed from a third-party developer", "Selling advertising to lenders that wish to reach consumers matching a stated profile"],
            correctIndex: 0,
            explanation: "The definition turns on regularly engaging in the practice of assembling or evaluating consumer information for furnishing to third parties.",
            sourceLessonSlug: "the-file-not-the-person",
          },
          {
            prompt: "Which of these correctly states the relationship the lesson draws between you and your file?",
            options: ["It is about you, not yours", "You own the file and license its use to lenders each time you submit a credit application", "The file is jointly owned by you and by the agency that assembles it from public sources", "The file belongs to the last creditor that furnished information about you to the agency"],
            correctIndex: 0,
            explanation: "It is a record about you kept and sold by a company you did not choose, which is why the statutory duties exist at all.",
            sourceLessonSlug: "the-file-not-the-person",
          },
          {
            prompt: "In which year did Congress write the phrase mode of living into the definition of a consumer report?",
            options: ["1970", "1974, alongside the Equal Credit Opportunity Act's prohibition on discrimination in credit", "1968, alongside the Truth in Lending Act's requirement of meaningful disclosure of terms", "2003, when the Fair and Accurate Credit Transactions Act added the free annual disclosure"],
            correctIndex: 0,
            explanation: "The lesson notes the phrase was written into federal law in 1970 and is still there.",
            sourceLessonSlug: "the-file-not-the-person",
          },
          {
            prompt: "What is the practical point of the lesson's insistence that the decision is made about a document?",
            options: ["The document can be checked", "That an applicant may demand that the lender interview them instead of reading the file", "That a lender bears no responsibility for a decision if the document it read was wrong", "That documents are standardised across agencies, so only one of them needs to be read"],
            correctIndex: 0,
            explanation: "A record you can obtain, read and dispute is a very different object from a judgement about your character, which is the whole reason the rest of the course works.",
            sourceLessonSlug: "the-file-not-the-person",
          },
          {
            prompt: "The lesson says the statutory definition of a consumer reporting agency includes nonprofit operations. On what basis?",
            options: ["A cooperative nonprofit basis", "Because Congress exempted mutual and cooperative lenders from the definition entirely", "Because nonprofit agencies are supervised by a different federal regulator than for-profit ones", "Because nonprofit agencies may furnish reports only for employment and insurance purposes"],
            correctIndex: 0,
            explanation: "The definition reads for monetary fees, dues, or on a cooperative nonprofit basis, so the form of the enterprise does not exempt it.",
            sourceLessonSlug: "the-file-not-the-person",
          },
          {
            prompt: "What does the opening lesson identify as the ordinary failure it takes seriously, rather than the one people assume?",
            options: ["Timing, not overspending", "Borrowing at a rate higher than the one a better-informed applicant would have been offered", "Failing to read the terms and conditions attached to an account before the account is opened", "Holding too few separate accounts for a scoring model to form a reliable prediction"],
            correctIndex: 0,
            explanation: "The course treats the mismatch between when money is owed and when it arrives as the ordinary shape of the problem.",
            sourceLessonSlug: "the-gap-money-falls-into",
          },
          {
            prompt: "Under Regulation B, what is the deadline for notice after adverse action on an incomplete application, absent the alternative route the rule allows?",
            options: ["30 days", "45 days, on the reasoning that an incomplete application takes longer to evaluate fairly", "10 business days, because an incomplete application requires no substantive underwriting review", "90 days, matching the period the rule allows after an unaccepted counteroffer is made"],
            correctIndex: 0,
            explanation: "The rule sets 30 days after taking adverse action on an incomplete application unless notice is instead given under the incomplete-application procedure.",
            sourceLessonSlug: "three-things-a-creditor-can-do",
          },
          {
            prompt: "Which document does this course say is owed to you inside a specific window once a decision meets the statutory definition?",
            options: ["The adverse action notice", "A complete copy of every consumer report the creditor obtained during its review of the application", "A written summary of the creditor's underwriting standards as applied to applicants of your profile", "A statement of the annual percentage rate the creditor would have charged had the application succeeded"],
            correctIndex: 0,
            explanation: "That document is the subject of Section 4, and what it must say is the centre of this course.",
            sourceLessonSlug: "three-things-a-creditor-can-do",
          },
          {
            prompt: "What does this course say the nationwide agencies' separateness means for the accuracy of any one report?",
            options: ["They can disagree", "That the agencies are required to reconcile their files with one another every ninety days", "That an item appearing in only one file is presumed inaccurate under the statute", "That a lender must obtain all three files before it may lawfully act on any of them"],
            correctIndex: 0,
            explanation: "Overlapping but not identical sources produce files that differ, which is why reconciling them is a real exercise rather than a formality.",
            sourceLessonSlug: "the-file-not-the-person",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2 — What is in the file, and who may look
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "what-may-appear-and-for-how-long",
      title: "5 · What may appear in the file, and for how long",
      section: "Section 2 · What is in the file, and who may look",
      body: `The file is not a permanent record. Congress put a clock on most of it, and the clock is the part people are least likely to know they have.

**The exclusion list, in the statute's own words.** The Fair Credit Reporting Act says:

> "Except as authorized under subsection (b), no consumer reporting agency may make any consumer report containing any of the following items of information: (1) Cases under title 11 or under the Bankruptcy Act that, from the date of entry of the order for relief or the date of adjudication, as the case may be, antedate the report by more than 10 years. (2) Civil suits, civil judgments, and records of arrest that, from date of entry, antedate the report by more than seven years or until the governing statute of limitations has expired, whichever is the longer period. (3) Paid tax liens which, from date of payment, antedate the report by more than seven years. (4) Accounts placed for collection or charged to profit and loss which antedate the report by more than seven years. (5) Any other adverse item of information, other than records of convictions of crimes which antedates the report by more than seven years." (15 U.S.C. § 1681c, n.d.)

**Read paragraph (5) twice.** It is a catch-all: *any other adverse item*, seven years. The exceptions are narrow and they are named. And note what is carved out of the seven-year rule: **records of convictions of crimes**, which the statute does not put a clock on at all.

**Three details that change how the list reads.**

First, **the clock starts from a stated event, not from today**. A civil judgment runs from date of entry. A paid tax lien runs from date of payment. A collection account runs from the account's own date. So the useful question about an old item is never "how long has this been on here", it is "what date is this measured from, and is that date right".

Second, **the seven-year limit for civil suits and judgments runs to the longer of seven years or the expiry of the governing statute of limitations**. The statute of limitations is state law, so this is one of the places where a national summary would be wrong and the method is to find your own state's rule.

Third, **paragraph (6) is about medical providers**, and it restricts the name, address and telephone number of a medical information furnisher unless the identifying details are coded so that the provider and the nature of the service cannot be inferred by anyone other than the consumer (15 U.S.C. § 1681c, n.d.). Whether particular medical debts appear at all, as opposed to how the provider is named, has moved repeatedly through both voluntary industry changes and rulemaking, so this course states the statutory text and nothing about the current practice. **Checked 28 August 2026; verify before relying on any claim about what the agencies currently report.**

**Who puts the items there.** The parties supplying information are furnishers, and the Act binds them directly:

> "A person shall not furnish any information relating to a consumer to any consumer reporting agency if the person knows or has reasonable cause to believe that the information is inaccurate." (15 U.S.C. § 1681s-2, n.d.)

**That is a duty on the creditor, not on the agency.** It matters because the agency did not originate most of what is in your file. It bought it. Section 5 shows what happens when you dispute an item, and the answer runs back down this same chain to the furnisher.

**The practical shape.** A file is a set of dated items, most of which expire, supplied by parties who are forbidden to supply what they know to be wrong. Every one of those three properties is something you can check against a copy of the file itself.

:::reveal How long may a case under title 11 antedate a consumer report, under the FCRA's exclusion list? ||| Ten years, measured from the date of entry of the order for relief or the date of adjudication.

:::reveal What is the FCRA's catch-all period for any other adverse item of information? ||| Seven years, with records of convictions of crimes carved out of that limit.

:::reveal What does the FCRA forbid a furnisher to do? ||| Furnish information it knows, or has reasonable cause to believe, is inaccurate.

## Vocabulary
- **Exclusion list**: the FCRA's enumeration at section 1681c(a) of items a consumer reporting agency may not include in a report once they are older than a stated period.
- **Antedate**: to precede in time. The statute measures each item from a specified event, such as date of entry or date of payment, rather than from the date of the report.
- **Charged to profit and loss**: an account the creditor has written off as a loss, which the statute puts on the same seven-year clock as an account placed for collection.
- **Medical information furnisher**: a supplier of medical information whose identifying details the statute restricts unless coded so the provider and service cannot be inferred.

## Sources
15 U.S.C. § 1681c. (n.d.). *Requirements relating to information contained in consumer reports*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/15/1681c

15 U.S.C. § 1681s-2. (n.d.). *Responsibilities of furnishers of information to consumer reporting agencies*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/15/1681s-2`,
    },
    {
      slug: "permissible-purpose",
      title: "6 · Who is allowed to look, and the four words that end the list",
      section: "Section 2 · What is in the file, and who may look",
      body: `Anyone who wants to see your file has to have a reason the statute recognises. Not a good reason. A listed one.

**The list, and how it closes.** The FCRA opens the section with a sentence that does the whole job:

> "Subject to subsection (c), any consumer reporting agency may furnish a consumer report under the following circumstances and no other" (15 U.S.C. § 1681b, n.d.)

**And no other.** That is a closed list, which is a different legal object from a list of examples. If a purpose is not on it, the agency may not furnish the report for that purpose, however commercially sensible the request might be.

**What is on the list.** The circumstances include a court order or a grand jury subpoena; the written instructions of the consumer the report is about; and, in the paragraph that carries most ordinary business, a person the agency has reason to believe:

> "(A) intends to use the information in connection with a credit transaction involving the consumer on whom the information is to be furnished and involving the extension of credit to, or review or collection of an account of, the consumer; or (B) intends to use the information for employment purposes; or (C) intends to use the information in connection with the underwriting of insurance involving the consumer; or (D) intends to use the information in connection with a determination of the consumer's eligibility for a license or other benefit granted by a governmental instrumentality required by law to consider an applicant's financial responsibility or status" (15 U.S.C. § 1681b, n.d.)

The same paragraph adds a potential investor, servicer or current insurer assessing an existing credit obligation, and a residual limb for a person who "otherwise has a legitimate business need for the information" either "in connection with a business transaction that is initiated by the consumer" or "to review an account to determine whether the consumer continues to meet the terms of the account" (15 U.S.C. § 1681b, n.d.). Separate paragraphs cover child-support enforcement agencies on a certification, state plan administrators setting a support award, and the deposit and credit-union insurers acting as conservator or receiver.

**Three things worth noticing, because they are counter-intuitive.**

First, **a credit transaction is not the only door**. Employment and insurance underwriting are separate listed purposes, so a report may be pulled about you by parties who are not lending you anything.

Second, **the legitimate-business-need limb is narrower than it sounds**. It is not "any business that would find this useful". It reaches a transaction *the consumer initiated*, or a review of an account the consumer already holds.

Third, **you can supply the purpose yourself**. The list includes furnishing "in accordance with the written instructions of the consumer to whom it relates" (15 U.S.C. § 1681b, n.d.), which is the door your own request walks through.

**Why the closed list is the hinge of this course.** It means the file is not public. It also means that when a party you did not expect has seen your file, the question is answerable: which listed circumstance did they claim, and did it apply. A right that resolves into a specific question is a right you can actually use.

:::reveal What four words close the FCRA's list of circumstances in which a consumer report may be furnished? ||| And no other. The list is closed rather than illustrative.

:::reveal Name two listed purposes that are not credit transactions. ||| Employment purposes, and the underwriting of insurance involving the consumer. A licence or benefit determination by a government instrumentality also qualifies.

:::reveal How does a consumer's own request for their file fit the permissible-purpose list? ||| Through the paragraph allowing furnishing in accordance with the written instructions of the consumer to whom the report relates.

## Vocabulary
- **Permissible purpose**: one of the circumstances listed at 15 U.S.C. section 1681b(a) under which, and under no other, a consumer reporting agency may furnish a report.
- **Closed list**: an enumeration that excludes anything not named, as opposed to a list of examples that admits similar cases.
- **Legitimate business need**: the residual permissible purpose, limited to a transaction initiated by the consumer or a review of an account the consumer already holds.
- **Account review**: the listed purpose under which an existing creditor may pull a report to determine whether the consumer continues to meet the terms of the account.

## Sources
15 U.S.C. § 1681b. (n.d.). *Permissible purposes of consumer reports*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/15/1681b

15 U.S.C. § 1681a. (n.d.). *Definitions; rules of construction*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/15/1681a`,
    },
    {
      slug: "the-file-that-does-not-exist",
      title: "7 · The file that does not exist",
      section: "Section 2 · What is in the file, and who may look",
      body: `Everything so far assumes there is a file. For a large number of people there is not, or there is one too thin to model, and that is a different problem with a different history.

**What it is, mechanically.** A scoring model is built on observed repayment behaviour. If nothing about you has been furnished, or too little has, the model has nothing to work on and returns no score rather than a bad one. **An absent file is not a clean record.** It reads to an automated decision as an absence of evidence, and an automated decision that cannot price you will usually decline you or price you as though you were the worst case it can imagine.

**Who ends up there, and why it is structural.** Files are built from what furnishers report. Furnishers report accounts. So a person who has paid rent on time for twenty years, in cash, to a landlord who reports nothing, has twenty years of evidence that generates no record at all. The evidence exists. The channel that would carry it does not.

**This catalog already teaches what people do about that.** *Financing Without Access* states the through-line in a sentence: **when the capital system excludes you, you invent an entity.** It teaches the fraternal benefit society, the building and loan association, the rotating savings and credit association, and the Islamic-finance instruments, and it gives the reader a procedure rather than a list: **ask which door was closed, what pool replaced it, and who bears the risk.**

**Run that procedure on the thin file and it produces the whole analysis.** Which door was closed: the mainstream credit market, which cannot price an applicant it has no data about. What pool replaced it: informal lending, a rotating fund, a mutual society, a cosigner, or a product priced for people the model cannot see. Who bears the risk: in the informal case, the members themselves, which is why those institutions are governed by relationships rather than by files.

**And the gate can be operated deliberately.** *The County Committee* teaches the federal farm version: three individuals residing in the county determined both eligibility and the limits of credit to be extended, and the standard they applied asked in statute whether the applicant had the character, industry, and ability to carry out the proposed operations. A gate staffed by neighbours applying a character test is a very different object from a model with no data, but they fail in the same direction, and the person on the wrong side of either one has no next lender to go to.

**What this course can and cannot say about it.** It can say the mechanism, because the mechanism is documented and does not move. It cannot tell you the current share of adults with no file or a thin one, because that is a measured figure with a publication cycle and this course prints no undated numbers. If you need that figure, it comes from the agency that publishes it, with the year attached, and you should read the year.

**The lesson to carry into Section 3.** The score is built from the file. So everything true about the file, including its absence, is true about the score before the model does any work at all.

:::reveal Why does an absent credit file produce no score rather than a low one? ||| Because a scoring model is built on observed repayment behaviour, so with nothing furnished it has nothing to model.

:::reveal What procedure does Financing Without Access give for reading any exclusion? ||| Ask which door was closed, what pool replaced it, and who bears the risk.

:::reveal Why can twenty years of on-time rent produce no credit record at all? ||| Because files are built from what furnishers report, and a landlord who reports nothing supplies no channel for the evidence.

## Vocabulary
- **Thin file**: a consumer file holding too few furnished items for a scoring model to produce a result.
- **Credit invisibility**: the condition of having no consumer file at all, which an automated decision reads as absence of evidence rather than as a good record.
- **Furnisher channel**: the reporting relationship through which a payment history becomes a file entry; without it, the payment history exists and the record does not.
- **Substitute institution**: the pool that forms when the mainstream channel is closed, taught at length in Financing Without Access as the fraternal society, the building and loan, and the rotating savings association.

## Sources
15 U.S.C. § 1681a. (n.d.). *Definitions; rules of construction*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/15/1681a

15 U.S.C. § 1681g. (n.d.). *Disclosures to consumers*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/15/1681g

7 U.S.C. § 1922. (n.d.). *Persons eligible for real estate loans*. Office of the Law Revision Counsel, U.S. House of Representatives. https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title7-section1922&num=0&edition=prelim`,
    },
    {
      slug: "quiz-the-file",
      title: "8 · Knowledge check: what is in the file, and who may look",
      section: "Section 2 · What is in the file, and who may look",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "Under the FCRA's exclusion list, how far back may a case under title 11 appear in a consumer report?",
            options: ["10 years", "Seven years, the same period the statute applies to accounts placed for collection or charged off", "Fifteen years, because a bankruptcy is a court proceeding rather than an ordinary credit event", "Indefinitely, because the statute treats a public court record as permanently reportable"],
            correctIndex: 0,
            explanation: "The limit runs from the date of entry of the order for relief or the date of adjudication, as the case may be.",
            sourceLessonSlug: "what-may-appear-and-for-how-long",
          },
          {
            prompt: "What is the FCRA's catch-all limit for any other adverse item of information?",
            options: ["Seven years", "Ten years, matching the period the statute sets for cases under title 11 or the Bankruptcy Act", "Five years, after which the agency must delete the item whether or not the consumer disputes it", "Three years, measured from the last activity the furnisher reported on the account"],
            correctIndex: 0,
            explanation: "Paragraph (5) is a catch-all set at seven years, and its only carve-out is records of convictions of crimes.",
            sourceLessonSlug: "what-may-appear-and-for-how-long",
          },
          {
            prompt: "Which category does the FCRA's seven-year catch-all expressly carve out?",
            options: ["Records of criminal convictions", "Judgments entered by a federal court rather than by a court of a State or territory", "Debts owed to an agency or instrumentality of the United States government", "Items a consumer has previously disputed and which survived the agency's reinvestigation"],
            correctIndex: 0,
            explanation: "Paragraph (5) reads any other adverse item of information, other than records of convictions of crimes.",
            sourceLessonSlug: "what-may-appear-and-for-how-long",
          },
          {
            prompt: "From what event does the FCRA measure the reporting period for a paid tax lien?",
            options: ["Date of payment", "The date the taxing authority first recorded the lien in the county's public records", "The date the report is furnished, counting backwards through the consumer's whole file", "The date the consumer first disputed the item with the consumer reporting agency"],
            correctIndex: 0,
            explanation: "Paragraph (3) sets seven years from date of payment for a paid tax lien.",
            sourceLessonSlug: "what-may-appear-and-for-how-long",
          },
          {
            prompt: "From what event does the FCRA measure the period for civil suits, civil judgments and records of arrest?",
            options: ["Date of entry", "The date on which the underlying obligation or the alleged offence actually occurred", "The date the consumer reporting agency first received the item from a furnisher", "The date the governing statute of limitations began to run under the relevant State's law"],
            correctIndex: 0,
            explanation: "Paragraph (2) measures from date of entry, and runs for the longer of seven years or the expiry of the governing statute of limitations.",
            sourceLessonSlug: "what-may-appear-and-for-how-long",
          },
          {
            prompt: "For civil suits and judgments, which period does the FCRA apply when the two candidates differ?",
            options: ["The longer period", "The shorter period, so the consumer receives the benefit of whichever clock expires first", "Seven years in every case, with the statute of limitations relevant only to enforcement", "The period the State in which the consumer resides has elected under a federal opt-in"],
            correctIndex: 0,
            explanation: "The statute reads more than seven years or until the governing statute of limitations has expired, whichever is the longer period.",
            sourceLessonSlug: "what-may-appear-and-for-how-long",
          },
          {
            prompt: "Why does the lesson say a national summary of the civil-judgment period would be wrong?",
            options: ["Limitations periods are State law", "Because the federal period was repealed and each agency now sets its own retention policy", "Because judgments are reported only in the State where they were entered and nowhere else", "Because the period depends on the amount of the judgment rather than on the date of entry"],
            correctIndex: 0,
            explanation: "The governing statute of limitations is State law, so the method is to find your own State's rule rather than to trust a table.",
            sourceLessonSlug: "what-may-appear-and-for-how-long",
          },
          {
            prompt: "The lesson says the useful question about an old item is never how long it has been there. What is it instead?",
            options: ["What date is it measured from", "Which of the three nationwide agencies received the item first and on what terms", "Whether the furnisher is still in business and able to answer a reinvestigation request", "How many times the consumer has already disputed the item without obtaining a deletion"],
            correctIndex: 0,
            explanation: "Each item runs from a stated event, so the right question is what date is this measured from, and is that date right.",
            sourceLessonSlug: "what-may-appear-and-for-how-long",
          },
          {
            prompt: "What does the FCRA restrict about a medical information furnisher that has notified the agency of its status?",
            options: ["Its name, address and telephone number", "The dollar amount of any balance the provider reports as owed by the consumer", "The date on which the underlying medical service was supplied to the consumer", "The identity of the insurer that declined to pay the provider's original charge"],
            correctIndex: 0,
            explanation: "Paragraph (6) restricts those identifying details unless they are coded so the provider and the nature of the service cannot be inferred by anyone but the consumer.",
            sourceLessonSlug: "what-may-appear-and-for-how-long",
          },
          {
            prompt: "Why does this course refuse to say what the agencies currently do about medical debt generally?",
            options: ["It has moved repeatedly", "Because the statute expressly forbids an educational publisher from describing agency practice", "Because medical debt is governed by State law and no national statement could be accurate", "Because the agencies treat their reporting policies as trade secrets and publish nothing"],
            correctIndex: 0,
            explanation: "Both voluntary industry changes and rulemaking have moved, so the lesson states the statutory text and dates its check at 28 August 2026.",
            sourceLessonSlug: "what-may-appear-and-for-how-long",
          },
          {
            prompt: "Which party does 15 U.S.C. section 1681s-2 bind against furnishing information it knows to be inaccurate?",
            options: ["The furnisher", "The consumer reporting agency, which must verify each item before adding it to a file", "The user of the report, which must confirm accuracy before acting on any adverse item", "The consumer, who must correct the record before applying for any further credit"],
            correctIndex: 0,
            explanation: "The duty runs to the person furnishing the information, most often the creditor the consumer actually dealt with.",
            sourceLessonSlug: "what-may-appear-and-for-how-long",
          },
          {
            prompt: "What is the standard of knowledge in the furnisher's accuracy duty?",
            options: ["Knows or has reasonable cause to believe", "Actual knowledge only, so a furnisher that merely suspects an error commits no violation", "Strict liability, so any inaccuracy is a violation whatever the furnisher knew or believed", "Gross negligence, a standard the statute defines separately in its definitions section"],
            correctIndex: 0,
            explanation: "The prohibition applies where the person knows or has reasonable cause to believe that the information is inaccurate.",
            sourceLessonSlug: "what-may-appear-and-for-how-long",
          },
          {
            prompt: "Why does the lesson stress that the agency did not originate most of what is in a file?",
            options: ["It bought it", "Because the agency is legally immune from any claim arising out of a furnisher's error", "Because a consumer may only dispute an item with the party that originally created it", "Because the agency is required to identify the original creditor on the face of the report"],
            correctIndex: 0,
            explanation: "The chain runs back to the furnisher, which is why a dispute reaches the furnisher too, as Section 5 shows.",
            sourceLessonSlug: "what-may-appear-and-for-how-long",
          },
          {
            prompt: "The lesson summarises a file as a set of dated items with which three properties?",
            options: ["Dated, expiring, and supplied by bound parties", "Complete, verified at the point of entry, and identical across all three nationwide agencies", "Confidential, immune from correction, and available only through a paid subscription", "Permanent, sourced from public records, and assembled without any input from creditors"],
            correctIndex: 0,
            explanation: "Most items expire on a stated clock, and the parties supplying them are forbidden to supply what they know to be wrong.",
            sourceLessonSlug: "what-may-appear-and-for-how-long",
          },
          {
            prompt: "What does the FCRA say about accounts placed for collection or charged to profit and loss?",
            options: ["Seven years", "Ten years, because a charge-off is a formal accounting event comparable to a bankruptcy", "They may be reported until the debt is paid, whenever that happens to occur", "They may not be reported at all once the original creditor has sold the account"],
            correctIndex: 0,
            explanation: "Paragraph (4) puts them on the same seven-year clock as the statute's other ordinary adverse items.",
            sourceLessonSlug: "what-may-appear-and-for-how-long",
          },
          {
            prompt: "How does 15 U.S.C. section 1681c(a) open?",
            options: ["No agency may make a report containing", "Every agency shall include the following items in each report it furnishes to a user", "A consumer may request the removal of the following items at any time without charge", "A furnisher shall verify the following items before supplying them to any agency"],
            correctIndex: 0,
            explanation: "It is a prohibition on the agency, expressed as a list of items a consumer report may not contain once they are stale.",
            sourceLessonSlug: "what-may-appear-and-for-how-long",
          },
          {
            prompt: "The lesson calls one FCRA paragraph a catch-all. Which numbered paragraph of section 1681c(a) is it?",
            options: ["Paragraph (5)", "Paragraph (1), the one that sets the ten-year limit for cases under title 11", "Paragraph (6), the one that restricts the naming of a medical information furnisher", "Paragraph (2), the one governing civil suits, civil judgments and records of arrest"],
            correctIndex: 0,
            explanation: "It reaches any other adverse item of information not already named, at seven years.",
            sourceLessonSlug: "what-may-appear-and-for-how-long",
          },
          {
            prompt: "What does the lesson say the clock on most file items means for a consumer?",
            options: ["The file is not permanent", "That a consumer may reset any item's clock by making a single payment on the account", "That an agency must notify the consumer in writing on the day each item expires", "That an expired item may still be furnished if the user certifies a legitimate business need"],
            correctIndex: 0,
            explanation: "Congress put a clock on most of it, and that clock is the part people are least likely to know they have.",
            sourceLessonSlug: "what-may-appear-and-for-how-long",
          },
          {
            prompt: "Which sentence in 15 U.S.C. section 1681b(a) makes the permissible-purpose list closed?",
            options: ["And no other", "Subject to the limitations set out in the regulations prescribed by the Bureau from time to time", "Provided the user certifies its purpose in writing before the report is furnished to it", "Except where a court of competent jurisdiction has ordered otherwise in a particular case"],
            correctIndex: 0,
            explanation: "The opening reads under the following circumstances and no other, which excludes anything not named.",
            sourceLessonSlug: "permissible-purpose",
          },
          {
            prompt: "What is the difference between a closed list and a list of examples, as the lesson uses the terms?",
            options: ["A closed list excludes what it omits", "A closed list may be extended by an agency, while a list of examples may be extended only by Congress", "A closed list applies to consumers, while a list of examples applies to users of the report", "A closed list is published in the statute, while a list of examples appears only in the regulation"],
            correctIndex: 0,
            explanation: "If a purpose is not on a closed list, the agency may not furnish for that purpose however sensible the request looks.",
            sourceLessonSlug: "permissible-purpose",
          },
          {
            prompt: "Which of these is a listed permissible purpose under 15 U.S.C. section 1681b(a)?",
            options: ["Employment purposes", "Marketing a product the consumer has never expressed any interest in receiving", "Assessing whether a neighbour is a suitable person to admit to a residents' association", "Compiling a public directory of consumers ranked by their repayment behaviour"],
            correctIndex: 0,
            explanation: "The statute names use of the information for employment purposes as one of the listed circumstances.",
            sourceLessonSlug: "permissible-purpose",
          },
          {
            prompt: "Insurance appears in the permissible-purpose list in connection with what activity?",
            options: ["Underwriting", "Paying a claim the consumer has already submitted under an existing policy", "Marketing a new policy to a consumer who has not applied for any coverage", "Investigating whether an insured consumer has misstated a material fact after a loss"],
            correctIndex: 0,
            explanation: "The listed purpose reaches use of the information in connection with the underwriting of insurance involving the consumer.",
            sourceLessonSlug: "permissible-purpose",
          },
          {
            prompt: "The licence-or-benefit permissible purpose applies to a governmental instrumentality only in one circumstance. Which?",
            options: ["It is required by law to consider financial responsibility", "It has obtained the written consent of the applicant before requesting the report", "It is acting under a court order issued by a judge of a court of competent jurisdiction", "It certifies that no other source of the information is reasonably available to it"],
            correctIndex: 0,
            explanation: "The paragraph reaches a determination of eligibility for a licence or other benefit granted by a governmental instrumentality required by law to consider an applicant's financial responsibility or status.",
            sourceLessonSlug: "permissible-purpose",
          },
          {
            prompt: "The legitimate-business-need limb reaches a business transaction in what condition?",
            options: ["Initiated by the consumer", "Concluded within the previous twelve months between the same two parties", "Approved in advance by the consumer reporting agency furnishing the report", "Valued above a threshold the Bureau sets by regulation each calendar year"],
            correctIndex: 0,
            explanation: "The residual limb reaches a business transaction that is initiated by the consumer, which is much narrower than any business that would find the report useful.",
            sourceLessonSlug: "permissible-purpose",
          },
          {
            prompt: "What is the second branch of the legitimate-business-need limb?",
            options: ["Account review", "A collections action brought against a consumer by a party other than the original creditor", "A marketing review to decide which consumers should receive a firm offer of credit", "A background investigation into a consumer applying to rent residential property"],
            correctIndex: 0,
            explanation: "It permits review of an account to determine whether the consumer continues to meet the terms of the account.",
            sourceLessonSlug: "permissible-purpose",
          },
          {
            prompt: "Under which listed circumstance does a consumer's own request for their file fall?",
            options: ["Written instructions of the consumer", "The legitimate business need limb, since obtaining a file is a transaction the consumer initiates", "The court order limb, because a consumer may compel disclosure by application to a court", "The account review limb, since the consumer is reviewing an account they already hold"],
            correctIndex: 0,
            explanation: "The statute permits furnishing in accordance with the written instructions of the consumer to whom the report relates.",
            sourceLessonSlug: "permissible-purpose",
          },
          {
            prompt: "Which judicial process is named in the first paragraph of the permissible-purpose list?",
            options: ["A court order or grand jury subpoena", "A civil deposition subpoena issued by counsel in a private lawsuit between two parties", "A search warrant issued on probable cause by a magistrate judge of a federal district court", "A summons issued by a State administrative tribunal in a licensing proceeding"],
            correctIndex: 0,
            explanation: "The paragraph names the order of a court having jurisdiction, a grand jury subpoena, and two specific statutory subpoenas.",
            sourceLessonSlug: "permissible-purpose",
          },
          {
            prompt: "A child support enforcement agency's request under the list requires what from the requester?",
            options: ["A certification", "A court order entered in the underlying support proceeding before the request is made", "The written consent of the parent whose report is being requested by the agency", "Payment of a statutory fee to the consumer reporting agency furnishing the report"],
            correctIndex: 0,
            explanation: "The paragraph requires the person making the request to certify the purpose, the establishment of parentage, and that the report will be kept confidential.",
            sourceLessonSlug: "permissible-purpose",
          },
          {
            prompt: "Which two federal insurers appear by name in the permissible-purpose list?",
            options: ["The FDIC and the NCUA", "The Federal Reserve Board and the Office of the Comptroller of the Currency", "The Federal Housing Administration and the Government National Mortgage Association", "The Securities Investor Protection Corporation and the Pension Benefit Guaranty Corporation"],
            correctIndex: 0,
            explanation: "The paragraph reaches them acting as conservator, receiver or liquidating agent for an insured depository institution or insured credit union.",
            sourceLessonSlug: "permissible-purpose",
          },
          {
            prompt: "What makes the closed list the hinge of this course, according to the lesson?",
            options: ["It turns a right into a question", "It gives the consumer a claim for damages against any user that pulls a report at all", "It requires each agency to publish a list of every party that has ever bought a report", "It obliges a user to notify the consumer in advance of every request it intends to make"],
            correctIndex: 0,
            explanation: "When an unexpected party has seen your file, the answerable question is which listed circumstance they claimed and whether it applied.",
            sourceLessonSlug: "permissible-purpose",
          },
          {
            prompt: "The lesson says a party wanting your file needs a reason of a particular kind. What kind?",
            options: ["A listed one", "A commercially reasonable one, judged by the ordinary standards of the lending industry", "A written one, signed by an officer of the requesting company and retained for five years", "A recent one, arising from a transaction concluded within the previous ninety days"],
            correctIndex: 0,
            explanation: "Not a good reason, a listed one, because the statute closes the list rather than inviting analogy.",
            sourceLessonSlug: "permissible-purpose",
          },
          {
            prompt: "The credit-transaction permissible purpose covers extension of credit and which other activities?",
            options: ["Review or collection of an account", "Advertising a firm offer of credit to consumers who match a preselected profile", "Reselling the report to a second lender considering the same consumer's application", "Setting the interest rate the lender will charge to all of its customers as a class"],
            correctIndex: 0,
            explanation: "The paragraph names a credit transaction involving the extension of credit to, or review or collection of an account of, the consumer.",
            sourceLessonSlug: "permissible-purpose",
          },
          {
            prompt: "Under the list, a potential investor or servicer may obtain a report for what purpose?",
            options: ["Assessing an existing credit obligation", "Deciding whether to acquire the consumer reporting agency that assembled the file", "Marketing a refinancing offer to consumers whose existing loans it does not hold", "Verifying the identity of a consumer opening an account at an unrelated institution"],
            correctIndex: 0,
            explanation: "The paragraph reaches valuation of, or assessment of the credit or prepayment risks associated with, an existing credit obligation.",
            sourceLessonSlug: "permissible-purpose",
          },
          {
            prompt: "Does the permissible-purpose list mean a consumer report is a public record?",
            options: ["No", "Yes, because the list includes public record information as one of its categories", "Yes, because any person may obtain one by paying the agency's published fee", "Yes, but only in the State in which the consumer reporting agency maintains its files"],
            correctIndex: 0,
            explanation: "A closed list of circumstances is the opposite of public availability; the file may be furnished only for a named purpose.",
            sourceLessonSlug: "permissible-purpose",
          },
          {
            prompt: "What happens to a scoring model when nothing has been furnished about a consumer?",
            options: ["It returns no score", "It returns the lowest score in the model's published range as a conservative default", "It substitutes the average score of consumers living in the same postal district", "It is required by statute to treat the consumer as having an unblemished record"],
            correctIndex: 0,
            explanation: "A model built on observed repayment behaviour has nothing to work on, so it produces no result rather than a bad one.",
            sourceLessonSlug: "the-file-that-does-not-exist",
          },
          {
            prompt: "Why does the lesson say an absent file is not a clean record?",
            options: ["It reads as absent evidence", "Because the agencies charge a fee to open a file, and an unpaid fee is itself an adverse item", "Because a consumer with no file is presumed by statute to have defaulted on a prior obligation", "Because the agencies must report the absence of a file to every user that requests one"],
            correctIndex: 0,
            explanation: "An automated decision that cannot price an applicant will usually decline them or price them as the worst case it can imagine.",
            sourceLessonSlug: "the-file-that-does-not-exist",
          },
          {
            prompt: "Twenty years of on-time cash rent to a non-reporting landlord produces what in a consumer file?",
            options: ["Nothing", "A positive trade line established automatically once the tenancy passes twelve months", "A public record entry derived from the lease filed with the county recorder's office", "An inquiry record showing that the landlord checked the tenant's file at move-in"],
            correctIndex: 0,
            explanation: "The evidence exists and the channel that would carry it does not, because files are built from what furnishers report.",
            sourceLessonSlug: "the-file-that-does-not-exist",
          },
          {
            prompt: "What is the stated through-line of the sibling course Financing Without Access?",
            options: ["You invent an entity", "That every excluded group eventually receives access once the market recognises its profitability", "That informal lending is always more expensive than the mainstream credit it substitutes for", "That federal regulation is the only mechanism that has ever opened a closed credit market"],
            correctIndex: 0,
            explanation: "Its sentence is that when the capital system excludes you, you invent an entity, and it teaches four families of them.",
            sourceLessonSlug: "the-file-that-does-not-exist",
          },
          {
            prompt: "Applying that course's procedure to the thin file, which door was closed?",
            options: ["The mainstream credit market", "The federal disaster loan programme, which requires an area designation before it opens", "The employment market, which uses the same file for a different permissible purpose", "The deposit market, which will not open an account without a prior credit history"],
            correctIndex: 0,
            explanation: "It cannot price an applicant it has no data about, so the door closes without anyone deciding to close it.",
            sourceLessonSlug: "the-file-that-does-not-exist",
          },
          {
            prompt: "In the informal substitute institutions, who bears the risk?",
            options: ["The members", "A federal insurer that guarantees each participant's contribution up to a statutory cap", "The employer of the participants, which underwrites the pool as a workplace benefit", "The State banking regulator, which stands behind chartered mutual associations"],
            correctIndex: 0,
            explanation: "That is why those institutions are governed by relationships rather than by files.",
            sourceLessonSlug: "the-file-that-does-not-exist",
          },
          {
            prompt: "Which eligibility standard does The County Committee report from the statute, before its repeal?",
            options: ["Character, industry, and ability", "Sufficient collateral, adequate insurance, and a demonstrated three-year operating history", "Residence in the county, membership of a cooperative, and endorsement by two neighbours", "A minimum acreage, a minimum yield, and participation in a federal price support programme"],
            correctIndex: 0,
            explanation: "The test asked whether the applicant had the character, industry, and ability to carry out the proposed operations.",
            sourceLessonSlug: "the-file-that-does-not-exist",
          },
          {
            prompt: "How many individuals sat on the federal farm credit committee described in the sibling course?",
            options: ["Three", "Seven, appointed in staggered terms so that no single year's appointments could control it", "Five, of whom at least three had to be farmers residing in an adjoining county", "Eleven, elected annually by all producers participating in any federal farm programme"],
            correctIndex: 0,
            explanation: "Three individuals residing in the county, at least two of them farmers, determined both eligibility and the limits of credit.",
            sourceLessonSlug: "the-file-that-does-not-exist",
          },
          {
            prompt: "What do a neighbour-staffed character gate and a model with no data have in common, according to the lesson?",
            options: ["They fail in the same direction", "Both are prohibited by the Equal Credit Opportunity Act's list of prohibited bases", "Both require the decider to state its reasons in writing within thirty days of the decision", "Both were abolished by the same federal reorganisation act in the middle of the 1990s"],
            correctIndex: 0,
            explanation: "The person on the wrong side of either one has no next lender to go to.",
            sourceLessonSlug: "the-file-that-does-not-exist",
          },
          {
            prompt: "Why does this course decline to state the current share of adults with no file or a thin one?",
            options: ["It is a dated measurement", "Because the figure is proprietary to the agencies and has never been published anywhere", "Because the definition of a thin file varies by model and no national figure can exist", "Because the statute forbids the publication of aggregate statistics drawn from consumer files"],
            correctIndex: 0,
            explanation: "It is a measured figure on a publication cycle, and this course prints no undated numbers.",
            sourceLessonSlug: "the-file-that-does-not-exist",
          },
          {
            prompt: "What does the lesson say is true about the score before the model does any work at all?",
            options: ["Everything true about the file", "That the model has already assigned a provisional value based on the consumer's postcode", "That the score's range has been fixed by regulation and cannot vary between models", "That the score reflects the lender's own experience with applicants of a similar profile"],
            correctIndex: 0,
            explanation: "The score is built from the file, so the file's properties, including its absence, carry into the score.",
            sourceLessonSlug: "the-file-that-does-not-exist",
          },
          {
            prompt: "Which four families of substitute institution does Financing Without Access teach?",
            options: ["Fraternal, building and loan, ROSCA, Islamic finance", "Credit unions, savings banks, payday lenders and pawnbrokers operating under State licences", "Community development banks, microfinance funds, employer advances and church collections", "Trade unions, friendly societies, burial clubs and municipal pawn offices"],
            correctIndex: 0,
            explanation: "It teaches the fraternal benefit society, the building and loan association, the rotating savings and credit association, and Islamic-finance instruments.",
            sourceLessonSlug: "the-file-that-does-not-exist",
          },
          {
            prompt: "What can this course say about credit invisibility, and what can it not?",
            options: ["The mechanism, not the current share", "The current share, but not the mechanism, because mechanisms vary between scoring models", "Neither, because both are commercially confidential to the consumer reporting agencies", "Both, because the mechanism and the share are published together in the same annual report"],
            correctIndex: 0,
            explanation: "The mechanism is documented and does not move; the share is a measured figure with a publication cycle and a year attached.",
            sourceLessonSlug: "the-file-that-does-not-exist",
          },
          {
            prompt: "The three-part procedure this course borrows asks which door was closed, who bears the risk, and what else?",
            options: ["What pool replaced it", "How many years passed before the closure was recognised by a federal regulator", "Which statute created the exclusion and which court later held it unconstitutional", "Whether the excluded group eventually gained access on the same terms as everyone else"],
            correctIndex: 0,
            explanation: "The middle question is what pool replaced the closed door, and it is what makes the analysis produce an institution rather than a grievance.",
            sourceLessonSlug: "the-file-that-does-not-exist",
          },
          {
            prompt: "The lesson says a gate can be operated deliberately. Which example does it give?",
            options: ["The federal farm credit committee", "The underwriting department of a nationwide bank applying a published lending policy", "The consumer reporting agency deciding which furnishers it will accept data from", "The employer using a consumer report to decide between two shortlisted candidates"],
            correctIndex: 0,
            explanation: "Three individuals residing in the county determined eligibility and the limits of credit, under a statutory character test.",
            sourceLessonSlug: "the-file-that-does-not-exist",
          },
          {
            prompt: "Why does the lesson describe the thin-file problem as structural rather than personal?",
            options: ["Files are built from what furnishers report", "Because the statute assigns responsibility for opening a file to the consumer rather than the agency", "Because a consumer must apply to each agency separately before any file will be created", "Because the scoring models are licensed to lenders on terms consumers cannot negotiate"],
            correctIndex: 0,
            explanation: "A payment history with no reporting channel produces no record however reliable the payer.",
            sourceLessonSlug: "the-file-that-does-not-exist",
          },
          {
            prompt: "What does the course say happens when an automated decision cannot price an applicant?",
            options: ["It declines or prices for the worst case", "It refers the file to a human underwriter, who must interview the applicant in person", "It approves the application on the smallest amount the lender offers as a starter product", "It is required to obtain a second report from a different nationwide agency before deciding"],
            correctIndex: 0,
            explanation: "Absence of evidence is not read as good evidence, which is the whole point of the lesson.",
            sourceLessonSlug: "the-file-that-does-not-exist",
          },
          {
            prompt: "What is the difference between the evidence and the record, in the thin-file lesson?",
            options: ["The evidence exists, the channel does not", "The evidence is oral and the record is written, so only the record can be disputed", "The evidence belongs to the consumer and the record belongs to the furnisher", "The evidence covers the present and the record covers only the preceding seven years"],
            correctIndex: 0,
            explanation: "Twenty years of paid rent is evidence; without a furnisher to report it, no record is created.",
            sourceLessonSlug: "the-file-that-does-not-exist",
          },
          {
            prompt: "The FCRA restricts a medical information furnisher's details unless they are handled how?",
            options: ["Coded so nothing can be inferred", "Redacted entirely, leaving the balance and the date but no reference to any provider", "Disclosed only to the consumer and withheld from every user of the report", "Reported to the Bureau rather than to the consumer reporting agency"],
            correctIndex: 0,
            explanation: "The exception requires codes that do not identify, or provide information sufficient to infer, the specific provider or the nature of the services.",
            sourceLessonSlug: "what-may-appear-and-for-how-long",
          },
          {
            prompt: "In which situation does the FCRA's medical-furnisher restriction not apply?",
            options: ["Certain insurance-business uses", "Any use by an employer evaluating an applicant for a position involving safety duties", "Any use by a lender underwriting a loan secured by residential real property", "Any use by a government agency determining eligibility for a public benefit"],
            correctIndex: 0,
            explanation: "The provision excepts a report provided to an insurance company for a purpose relating to the business of insurance other than property and casualty insurance.",
            sourceLessonSlug: "what-may-appear-and-for-how-long",
          },
          {
            prompt: "What does the FCRA's exclusion list say about the agency's discretion over stale items?",
            options: ["There is none", "The agency may retain a stale item so long as it marks the item as older than seven years", "The agency may retain a stale item where the furnisher certifies the debt is still owed", "The agency may retain a stale item until the consumer requests its removal in writing"],
            correctIndex: 0,
            explanation: "The section is framed as a prohibition on making a report containing the listed items, subject only to the exceptions in subsection (b).",
            sourceLessonSlug: "what-may-appear-and-for-how-long",
          },
          {
            prompt: "Why is the furnisher's accuracy duty useful to a consumer even before any dispute is filed?",
            options: ["It binds the party that created the item", "Because it requires the furnisher to notify the consumer before reporting any adverse item", "Because it obliges the furnisher to obtain the consumer's signature on each report it makes", "Because it entitles the consumer to a copy of every item the furnisher has ever supplied"],
            correctIndex: 0,
            explanation: "The prohibition runs against the creditor that supplied the information, not only against the agency that resold it.",
            sourceLessonSlug: "what-may-appear-and-for-how-long",
          },
          {
            prompt: "What does the permissible-purpose lesson say about a request that is commercially sensible but unlisted?",
            options: ["It is not permitted", "It is permitted if the requester certifies the business reason in writing to the agency", "It is permitted once the agency's compliance department approves the requester's account", "It is permitted where the consumer has previously done business with the requester"],
            correctIndex: 0,
            explanation: "A closed list means the agency may not furnish for an unlisted purpose however sensible the request looks.",
            sourceLessonSlug: "permissible-purpose",
          },
          {
            prompt: "The lesson calls one consequence of the closed list counter-intuitive: that a report may be pulled by someone lending you nothing. Which purposes show that?",
            options: ["Employment and insurance underwriting", "Debt collection and the enforcement of a civil judgment entered against the consumer", "Marketing and the compilation of prescreened lists of consumers meeting stated criteria", "Identity verification and the prevention of fraud in payment card transactions"],
            correctIndex: 0,
            explanation: "Both are separately listed purposes, so parties who are not extending you credit may lawfully see the file.",
            sourceLessonSlug: "permissible-purpose",
          },
          {
            prompt: "What does the lesson say a right that resolves into a specific question is?",
            options: ["A right you can use", "A right that must be exercised within a statutory period or it lapses permanently", "A right enforceable only by a federal agency rather than by the consumer directly", "A right that applies to nationwide agencies but not to specialty reporting agencies"],
            correctIndex: 0,
            explanation: "Which listed circumstance did they claim, and did it apply, is a question a consumer can actually put and get answered.",
            sourceLessonSlug: "permissible-purpose",
          },
          {
            prompt: "The permissible-purpose list's opening phrase makes the whole section subject to another provision. Which?",
            options: ["Subsection (c)", "Subsection (a) of section 1681c, the exclusion list governing what a report may contain", "Section 1681i, the reinvestigation provision governing disputes raised by consumers", "Section 1681m, the provision governing the duties of users taking adverse action"],
            correctIndex: 0,
            explanation: "The sentence opens Subject to subsection (c), which carries its own limits on furnishing for certain purposes.",
            sourceLessonSlug: "permissible-purpose",
          },
          {
            prompt: "Under the list, an agency administering a State plan may obtain a report for what use?",
            options: ["Setting a support award", "Determining eligibility for unemployment insurance benefits after a job separation", "Verifying residence for the purpose of enrolling a child in a public school district", "Assessing whether an applicant qualifies for a State-funded housing subsidy programme"],
            correctIndex: 0,
            explanation: "The paragraph permits furnishing to an agency administering a State plan for use in setting an initial or modified child support award.",
            sourceLessonSlug: "permissible-purpose",
          },
          {
            prompt: "What is the practical value of knowing the exclusion periods, according to Section 2?",
            options: ["You can check the dates", "You can require an agency to delete any item you no longer recognise as your own", "You can prevent a furnisher from reporting an account by objecting before it is opened", "You can compel a lender to disregard any item it considers when reaching its decision"],
            correctIndex: 0,
            explanation: "Each item runs from a stated event, so the dates on a copy of your own file are checkable facts rather than opinions.",
            sourceLessonSlug: "what-may-appear-and-for-how-long",
          },
          {
            prompt: "How does Section 2 connect the file to the score taught in Section 3?",
            options: ["The score is built from the file", "The score replaces the file once a consumer has held credit for at least two years", "The score is furnished separately and is governed by a different federal statute entirely", "The score is supplied by the furnisher rather than derived from the assembled record"],
            correctIndex: 0,
            explanation: "Everything true about the file, including its absence, is true about the score before the model does any work.",
            sourceLessonSlug: "the-file-that-does-not-exist",
          },
          {
            prompt: "Which of these is NOT among the FCRA's enumerated stale-item categories in section 1681c(a)?",
            options: ["Unpaid utility balances by name", "Cases under title 11 or under the Bankruptcy Act older than ten years from entry", "Paid tax liens older than seven years measured from the date the lien was paid", "Accounts placed for collection or charged to profit and loss older than seven years"],
            correctIndex: 0,
            explanation: "Utilities are not a named category; they fall under the catch-all for any other adverse item at seven years.",
            sourceLessonSlug: "what-may-appear-and-for-how-long",
          },
          {
            prompt: "What does the lesson say about the relationship between the agency and the items in your file?",
            options: ["It resold what others reported", "It investigated and verified each item before adding it to the file it maintains", "It generated the items itself from public records held by courts and county offices", "It received the items directly from the consumer at the time each account was opened"],
            correctIndex: 0,
            explanation: "Most of a file is bought from furnishers, which is why the accuracy duty binds the furnisher directly.",
            sourceLessonSlug: "what-may-appear-and-for-how-long",
          },
          {
            prompt: "Which phrase from the residual permissible purpose does the lesson warn is narrower than it sounds?",
            options: ["Legitimate business need", "Written instructions of the consumer to whom the report relates", "The underwriting of insurance involving the consumer whose report is requested", "A determination of eligibility for a licence granted by a governmental instrumentality"],
            correctIndex: 0,
            explanation: "It reaches a transaction the consumer initiated or a review of an account the consumer already holds, not any useful business purpose.",
            sourceLessonSlug: "permissible-purpose",
          },
        ],
      },
    },
  ],
};
