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
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3 — The score is a model, not a fact
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "a-score-is-a-prediction",
      title: "9 · A score is a prediction, and the statute says so",
      section: "Section 3 · The score is a model, not a fact",
      body: `The single most useful sentence about credit scores is in the statute, and almost nobody has read it.

> "The term 'credit score' means a numerical value or a categorization derived from a statistical tool or modeling system used by a person who makes or arranges a loan to predict the likelihood of certain credit behaviors, including default" (15 U.S.C. § 1681g, n.d.)

**Take that apart, because every clause is load-bearing.**

**"A numerical value or a categorization."** Not a measurement. Not a grade. Not a quantity of anything that exists in the world. It is an output.

**"Derived from a statistical tool or modeling system."** So there is a model, the model was built by somebody, and it could have been built differently. A model has authors and choices, and choices can be argued with in a way that a measured height cannot.

**"Used by a person who makes or arranges a loan."** The model exists because a lender wants it. It is a tool for the lender's purpose, and the lender's purpose is not the same as yours. This is not a criticism, it is a description, and it explains why a score is not a report card: a report card is meant to inform the student.

**"To predict the likelihood of certain credit behaviors, including default."** A prediction about a population, applied to you. The model has learned that people whose files look like yours behaved a certain way, and it assigns you the population's behaviour. Whether you will actually behave that way is not what the number says.

**The consequence, and it is the one people find hardest.** A score is not a fact about you that a lender discovers. It is an opinion a model produces about a file, and different models produce different opinions from the same file. You cannot be wrong about your score, and neither can the model, because there is nothing there to be right about. What can be wrong is **the file**, which is why Section 5 is about disputes and this section is not.

**What the statute makes the model tell you.** When a consumer requests a score, the agency must supply the score, along with:

> "(B) The range of possible credit scores under the model used" ... "(C) All of the key factors that adversely affected the credit score of the consumer in the model used, the total number of which shall not exceed 4" ... "(D) The date on which the credit score was created" ... "(E) The name of the person or entity that provided the credit score or credit file upon which the credit score was created" (15 U.S.C. § 1681g, n.d.)

**Read (B) and (E) together and the plural is undeniable.** If there were one score, there would be no need to disclose the range under *the model used*, and no need to name the entity that provided it. Congress wrote a disclosure that only makes sense in a world of many models, and the next lesson is about what that means for the sentence "my credit score is".

:::reveal What does the FCRA's definition say a credit score is derived from? ||| A statistical tool or modeling system, used by a person who makes or arranges a loan.

:::reveal What does a credit score predict, according to the statutory definition? ||| The likelihood of certain credit behaviors, including default.

:::reveal Why does the lesson say you cannot be wrong about your score? ||| Because a score is a model's output rather than a fact about you, so there is nothing there to be right about. What can be wrong is the file.

## Vocabulary
- **Credit score**: in the statute's words, a numerical value or categorization derived from a statistical tool used by a lender to predict the likelihood of certain credit behaviors, including default.
- **Model**: the statistical system that turns a file into a score. It has authors, it embodies choices, and a different one built on the same file returns a different number.
- **Key factor**: one of at most four items the statute requires an agency to name as having adversely affected the score in the model used.
- **Score range**: the span of possible values under the particular model used, which the statute requires to be disclosed alongside the score itself.

## Sources
15 U.S.C. § 1681g. (n.d.). *Disclosures to consumers*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/15/1681g

15 U.S.C. § 1681a. (n.d.). *Definitions; rules of construction*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/15/1681a`,
    },
    {
      slug: "there-is-no-single-score",
      title: "10 · There is no such thing as your credit score",
      section: "Section 3 · The score is a model, not a fact",
      body: `The sentence "my credit score is" contains a hidden assumption, and the statute quietly refutes it.

**The argument from the disclosure itself.** Section 1681g(f) requires an agency supplying a score to state "the range of possible credit scores under the model used" and "the name of the person or entity that provided the credit score or credit file upon which the credit score was created" (15 U.S.C. § 1681g, n.d.). **Neither disclosure would mean anything if there were one score.** A range is only worth stating when ranges differ. A provider is only worth naming when providers differ. Congress wrote a disclosure regime for a plural world because the world is plural.

**Three axes of variation, all structural.**

**By model.** More than one company builds scoring models, and each builds more than one, revised over time. A revision is a new model, not an update to your number: it weighs the same file differently and returns a different result. This is why a score seen in one place and a score seen in another can differ without either being wrong.

**By file.** The nationwide agencies hold overlapping but not identical files, as Section 1 established. The same model run on three different files produces three different numbers, and the difference is evidence about the files rather than about you.

**By purpose.** Models are built for particular decisions. A model tuned to predict default on a card is not the same instrument as one tuned to predict default on a mortgage, and a lender buys the one that fits its question.

**What this course will not print, and why.** It will not print a table of current model names and version numbers, or say which model any particular kind of lender uses today. Those move, and they have moved repeatedly. **Checked 28 August 2026: this course makes no claim about which score models are in general use or which the mortgage market requires, and a reader who needs that should read it from the model publishers and the relevant federal housing regulator, with the date attached.** A table here would be a confident sentence that quietly stops being true, and a reader would have no way of knowing when.

**What does not move, and is therefore worth learning.** The statutory definition. The four disclosure elements. The fact that the model reads a file, so the file is the thing you can check and correct. And the reason codes, which are the subject of the next lesson and are the only part of the whole apparatus that tells you anything actionable.

**The practical form of all this.** When a number is quoted to you, the questions that resolve it are: which model, built by whom, run on which file, and on what date. Those four questions are exactly the four things the statute makes an agency disclose, which is not a coincidence.

:::reveal Why do the FCRA's score-disclosure elements imply that more than one score model exists? ||| Because a range under the model used and the name of the provider would be pointless disclosures if there were only one model.

:::reveal Name the three structural reasons two quoted scores can differ. ||| A different model, a different file at a different agency, or a model built for a different lending purpose.

:::reveal What four questions resolve a quoted score, and where do they come from? ||| Which model, built by whom, run on which file, on what date. They are the four things the statute makes an agency disclose.

## Vocabulary
- **Model version**: a revision of a scoring model that weighs the same file differently, producing a different number without any change in the underlying record.
- **Score provider**: the person or entity that supplied the score or the file it was built on, which the statute requires to be named in the disclosure.
- **Plural world**: this lesson's name for the fact that models, files and purposes all vary, so a single true score does not exist to be found.
- **Purpose-built model**: a model tuned to predict a particular behaviour on a particular product, which is why a lender buys the one that fits its own question.

## Sources
15 U.S.C. § 1681g. (n.d.). *Disclosures to consumers*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/15/1681g

15 U.S.C. § 1681a. (n.d.). *Definitions; rules of construction*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/15/1681a`,
    },
    {
      slug: "the-key-factors",
      title: "11 · The four reasons beside the number are the useful part",
      section: "Section 3 · The score is a model, not a fact",
      body: `The number gets the attention. The four short phrases printed beside it are the part that says anything you can act on.

**What the statute requires.** An agency supplying a score must also supply:

> "All of the key factors that adversely affected the credit score of the consumer in the model used, the total number of which shall not exceed 4" (15 U.S.C. § 1681g, n.d.)

**Three words in that clause do a lot of work.**

**"All."** Not a selection. Every key factor that adversely affected the score, subject to the cap.

**"Adversely affected."** The factors are not a description of your file in general. They are the things that pushed the number *down* in this model. A factor absent from the list is not a factor you have got right; it may simply not have hurt you in this model.

**"Shall not exceed 4."** A ceiling, not a target. Fewer is permitted. And the cap is why the list reads as terse and slightly cryptic: the statute asked for the top few and got the top few.

**Why the reason codes beat the number, practically.** A number tells you where you sit relative to a range you did not set. A key factor names a property of the file, and a property of the file is checkable. If a factor refers to an account, you can find the account. If it refers to a balance, you can find the balance. If it refers to something you do not recognise, **you have found a dispute**, which is Section 5.

**And this is where the number's status matters.** Because a score is a model's opinion rather than a fact, arguing with the number is not a thing you can do. Arguing with the file is. The key factors are the bridge: they are the model's own statement of which parts of the file it read badly, expressed in terms of the file, which is the object with a correction procedure attached to it.

**The same structure appears in the adverse action notice.** When a creditor takes adverse action based on a report, the FCRA requires it to disclose a numerical credit score it used along with certain of the section 1681g(f)(1) items (15 U.S.C. § 1681m, n.d.). So the reason codes reach you twice: once when you ask, and once when a decision goes against you. **Section 4 reads that letter line by line**, and by then you will know what half of it is.

**One caution stated plainly.** The key factors do not come with instructions, they do not tell you how much any factor moved the number, and nothing in the statute promises that addressing one of them will change any future score. **This course makes no such promise either.** What the factors give you is a list of specific things in a specific record that a specific model read as adverse. That is a starting point for checking, not a plan of action.

:::reveal What is the maximum number of key factors the FCRA requires an agency to disclose with a score? ||| Four. The statute sets a ceiling rather than a target, and fewer is permitted.

:::reveal Why are the key factors more actionable than the score itself? ||| Because each names a property of the file, and the file is the object that can be checked and corrected.

:::reveal Where else does a consumer meet the key factors, besides asking for them? ||| In an adverse action notice, where the FCRA requires a user acting on a report to disclose the score it used and certain of the same items.

## Vocabulary
- **Key factors**: the items the statute requires an agency to name as having adversely affected the score in the model used, capped at four.
- **Reason code**: the industry name for a key factor as printed, usually a short phrase and sometimes an accompanying code.
- **Adversely affected**: the statutory test for what belongs on the key-factor list. It names what pushed the score down, not what the file contains in general.
- **The bridge**: this lesson's name for the key factors, because they express a model's opinion in terms of the file, which is the object a dispute procedure attaches to.

## Sources
15 U.S.C. § 1681g. (n.d.). *Disclosures to consumers*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/15/1681g

15 U.S.C. § 1681m. (n.d.). *Requirements on users of consumer reports*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/15/1681m`,
    },
    {
      slug: "quiz-the-score",
      title: "12 · Knowledge check: the score is a model, not a fact",
      section: "Section 3 · The score is a model, not a fact",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "In the FCRA's own definition, what is a credit score derived from?",
            options: ["A statistical tool", "A weighted average of the balances a consumer has carried over the preceding two years", "An examiner's review of the consumer's file conducted by the agency's underwriting staff", "A survey of the lenders that have previously extended credit to the same consumer"],
            correctIndex: 0,
            explanation: "The statute says a statistical tool or modeling system, used by a person who makes or arranges a loan.",
            sourceLessonSlug: "a-score-is-a-prediction",
          },
          {
            prompt: "What does the statutory definition say a credit score is used to predict?",
            options: ["The likelihood of credit behaviors", "The maximum amount of credit a consumer can afford to service from current income", "The interest rate a competing lender would offer the same consumer for the same product", "The number of months before the consumer will next apply for a new line of credit"],
            correctIndex: 0,
            explanation: "The definition reads to predict the likelihood of certain credit behaviors, including default.",
            sourceLessonSlug: "a-score-is-a-prediction",
          },
          {
            prompt: "Which behaviour does the statutory definition name expressly as an example?",
            options: ["Default", "Late payment by more than thirty days on any revolving account held by the consumer", "Bankruptcy filed under any chapter of title 11 within the following twenty-four months", "Closure of an account by the consumer before the end of its stated term"],
            correctIndex: 0,
            explanation: "The definition reads certain credit behaviors, including default.",
            sourceLessonSlug: "a-score-is-a-prediction",
          },
          {
            prompt: "The statutory definition allows a credit score to take which two forms?",
            options: ["A numerical value or a categorization", "A percentage or a monetary amount expressed in the currency of the transaction", "A letter grade or a percentile rank against all other consumers in the country", "A written narrative or a numerical value, at the option of the agency supplying it"],
            correctIndex: 0,
            explanation: "The definition opens a numerical value or a categorization derived from a statistical tool or modeling system.",
            sourceLessonSlug: "a-score-is-a-prediction",
          },
          {
            prompt: "Why does the lesson say a score is not a report card?",
            options: ["A report card informs the student", "Because a report card is issued by a public body and a score is issued by a private company", "Because a report card covers a fixed period and a score covers the whole of a consumer's life", "Because a report card can be appealed to a higher authority and a score cannot be appealed"],
            correctIndex: 0,
            explanation: "The model exists because a lender wants it, and the lender's purpose is not the same as the consumer's.",
            sourceLessonSlug: "a-score-is-a-prediction",
          },
          {
            prompt: "The lesson says a model has something a measured height does not. What?",
            options: ["Authors and choices", "A statutory range that the Bureau publishes and revises every calendar year", "A margin of error that the agency must disclose alongside the score itself", "A licence issued by the federal regulator of the lender that intends to use it"],
            correctIndex: 0,
            explanation: "The model was built by somebody and could have been built differently, so its choices can be argued with.",
            sourceLessonSlug: "a-score-is-a-prediction",
          },
          {
            prompt: "What does the lesson say a model actually assigns to an individual consumer?",
            options: ["A population's behaviour", "The average of the consumer's own repayment record over the preceding seven years", "A ranking against every other applicant considered by the same lender that month", "The lender's estimate of the loss it would suffer if the consumer defaulted tomorrow"],
            correctIndex: 0,
            explanation: "The model learned that people whose files look like yours behaved a certain way, and applies that to you.",
            sourceLessonSlug: "a-score-is-a-prediction",
          },
          {
            prompt: "According to the lesson, what can be wrong, given that a score itself cannot be?",
            options: ["The file", "The range the model publishes, if it differs from the range a competing model uses", "The date on which the score was created, if the agency records it incorrectly", "The lender's interpretation of the score, if it applies the wrong cutoff to the number"],
            correctIndex: 0,
            explanation: "A score is an opinion produced from a file, so the correctable object is the record, which is why Section 5 is about disputes.",
            sourceLessonSlug: "a-score-is-a-prediction",
          },
          {
            prompt: "When a consumer requests a score, what must the agency disclose about the model's possible values?",
            options: ["The range", "The median score of all consumers evaluated under the same model in the same year", "The number of consumers who scored higher than the requesting consumer that month", "The statistical confidence interval around the score the model has produced"],
            correctIndex: 0,
            explanation: "The statute requires the range of possible credit scores under the model used.",
            sourceLessonSlug: "a-score-is-a-prediction",
          },
          {
            prompt: "Which date does the FCRA require to be disclosed with a credit score?",
            options: ["The date the score was created", "The date the oldest item still appearing in the consumer's file was first furnished", "The date on which the model itself was last revised by the entity that built it", "The date the consumer's request for the disclosure was received by the agency"],
            correctIndex: 0,
            explanation: "Subparagraph (D) requires the date on which the credit score was created.",
            sourceLessonSlug: "a-score-is-a-prediction",
          },
          {
            prompt: "Which identity does the FCRA require to be disclosed alongside a score?",
            options: ["The provider of the score or file", "The lender that most recently obtained the consumer's report from the agency", "The employee of the agency who authorised the disclosure of the score to the consumer", "The federal agency responsible for supervising the model's developer"],
            correctIndex: 0,
            explanation: "Subparagraph (E) requires the name of the person or entity that provided the credit score or credit file upon which the score was created.",
            sourceLessonSlug: "a-score-is-a-prediction",
          },
          {
            prompt: "What kind of instrument does the lesson say a score is, in place of a fact?",
            options: ["An opinion about a file", "A measurement of the consumer's capacity to repay, taken at a single moment in time", "A certification issued by the agency that the consumer's file is complete and accurate", "A guarantee to the lender that losses below a stated threshold will be reimbursed"],
            correctIndex: 0,
            explanation: "Different models produce different opinions from the same file, which is what makes it an opinion rather than a discovery.",
            sourceLessonSlug: "a-score-is-a-prediction",
          },
          {
            prompt: "In the statutory definition, who uses the modeling system?",
            options: ["A person who makes or arranges a loan", "The consumer reporting agency, on its own behalf and for its own commercial purposes", "The federal supervisor of the institution that furnished the underlying information", "Any person with a permissible purpose to obtain the consumer's report"],
            correctIndex: 0,
            explanation: "The definition ties the model to a person who makes or arranges a loan, which is why the tool serves the lender's question.",
            sourceLessonSlug: "a-score-is-a-prediction",
          },
          {
            prompt: "Which claim would the lesson treat as a category error?",
            options: ["My score is wrong", "My file contains an account that was never opened in my name", "My file shows a judgment entered more than ten years before the date of the report", "The agency disclosed only three key factors when the statute permits four"],
            correctIndex: 0,
            explanation: "There is nothing in a model's output to be right or wrong about; the correctable claims are all about the record.",
            sourceLessonSlug: "a-score-is-a-prediction",
          },
          {
            prompt: "The lesson describes the statutory definition as the most useful sentence about scores for what reason?",
            options: ["It settles what a score is", "It fixes the range within which every lawful scoring model must produce its values", "It obliges every lender to use the same model when evaluating comparable applications", "It gives the consumer a right to demand that a different model be run on the same file"],
            correctIndex: 0,
            explanation: "It says in law that a score is a modelled prediction, which resolves most of the confusion around the subject.",
            sourceLessonSlug: "a-score-is-a-prediction",
          },
          {
            prompt: "What hidden assumption does the lesson say the phrase my credit score contains?",
            options: ["That there is only one", "That the consumer is entitled to see it without charge at any time they wish", "That the score was produced by the agency rather than by an outside model developer", "That the number will remain unchanged until the consumer opens a new account"],
            correctIndex: 0,
            explanation: "The statute's disclosure regime only makes sense in a world of many models, which is the world we are in.",
            sourceLessonSlug: "there-is-no-single-score",
          },
          {
            prompt: "Why would a required disclosure of the range be meaningless if there were one score?",
            options: ["Ranges would never differ", "Because the range is set by regulation rather than by the entity that built the model", "Because a consumer could calculate the range from the score and the key factors alone", "Because the agency would already have disclosed the range when the file was opened"],
            correctIndex: 0,
            explanation: "A range is only worth stating when ranges differ, which is the lesson's argument from the statute's own text.",
            sourceLessonSlug: "there-is-no-single-score",
          },
          {
            prompt: "Which of these is one of the three axes of variation the lesson names?",
            options: ["By model", "By region, because the agencies maintain separate files for each Federal Reserve district", "By season, because models are recalibrated at the start of every calendar quarter", "By income, because a separate model is used above and below a statutory threshold"],
            correctIndex: 0,
            explanation: "The three are variation by model, variation by file across the nationwide agencies, and variation by the purpose the model was built for.",
            sourceLessonSlug: "there-is-no-single-score",
          },
          {
            prompt: "What does the lesson say a revision to a scoring model is?",
            options: ["A new model", "An adjustment applied retroactively to every score the earlier model had produced", "A correction that the developer must notify to every consumer previously scored", "A recalibration that leaves the consumer's number unchanged but shifts the range"],
            correctIndex: 0,
            explanation: "A revision weighs the same file differently and returns a different result, so it is not an update to your number.",
            sourceLessonSlug: "there-is-no-single-score",
          },
          {
            prompt: "Running one model on the files of three nationwide agencies produces what, and what does the difference tell you?",
            options: ["Three numbers, about the files", "One number, because the agencies are required to synchronise their files each month", "Three numbers, about the consumer's changing behaviour over the reporting period", "Three numbers, about which agency the model's developer has contracted with"],
            correctIndex: 0,
            explanation: "The agencies hold overlapping but not identical files, so the spread is evidence about the records rather than about the person.",
            sourceLessonSlug: "there-is-no-single-score",
          },
          {
            prompt: "Why is a model tuned for card default not the same instrument as one tuned for mortgage default?",
            options: ["They answer different questions", "Because federal law requires a separate model for each category of secured lending", "Because card models may use public records and mortgage models may not", "Because mortgage models are supervised by a housing regulator and card models are not"],
            correctIndex: 0,
            explanation: "Models are built for particular decisions, and a lender buys the one that fits its own question.",
            sourceLessonSlug: "there-is-no-single-score",
          },
          {
            prompt: "What does this course refuse to print about scoring models?",
            options: ["Current names and versions", "The statutory definition, because it is quoted at length in the preceding lesson", "The four disclosure elements, because they vary between models and agencies", "The fact that models are built by companies rather than by a public body"],
            correctIndex: 0,
            explanation: "Those move, and a table here would be a confident sentence that quietly stops being true.",
            sourceLessonSlug: "there-is-no-single-score",
          },
          {
            prompt: "On what date does this course record its check of the score-model landscape?",
            options: ["28 August 2026", "1 January 2026, the start of the year in which the course was written and reviewed", "17 July 2026, the date on which the catalog's standards data was last refreshed", "No date, because the course makes no claim about the landscape at all"],
            correctIndex: 0,
            explanation: "The lesson dates its own refusal, so a reader knows exactly what was and was not checked, and when.",
            sourceLessonSlug: "there-is-no-single-score",
          },
          {
            prompt: "Where does the lesson say a reader who needs current model information should go?",
            options: ["The publishers and the federal housing regulator", "The consumer reporting agencies, which must publish the list on request each year", "The lender's own disclosure documents, which name every model it has ever purchased", "The Federal Register, in which every model revision must be noticed before use"],
            correctIndex: 0,
            explanation: "The lesson names the model publishers and the relevant federal housing regulator, with the date attached.",
            sourceLessonSlug: "there-is-no-single-score",
          },
          {
            prompt: "Which of these does the lesson list as something that does not move and is therefore worth learning?",
            options: ["The statutory definition", "The number of points a late payment removes from a score under the leading model", "The cutoff a mortgage lender applies when deciding between approval and denial", "The market share held by each of the companies that build scoring models"],
            correctIndex: 0,
            explanation: "The definition, the four disclosure elements, the fact that the model reads a file, and the reason codes are the durable parts.",
            sourceLessonSlug: "there-is-no-single-score",
          },
          {
            prompt: "What four questions does the lesson say resolve a quoted score?",
            options: ["Which model, whose, which file, what date", "How high, how recent, how stable, and how it compares to the national average", "Which lender, which product, which term, and which interest rate was offered", "Which agency, which furnisher, which account, and which payment was missed"],
            correctIndex: 0,
            explanation: "They are exactly the four things the statute makes an agency disclose, which the lesson notes is not a coincidence.",
            sourceLessonSlug: "there-is-no-single-score",
          },
          {
            prompt: "Why does the lesson say a summary table of model versions would be worse than no table?",
            options: ["A reader cannot tell when it expired", "Because a table would breach the agencies' commercial confidentiality in their own products", "Because federal law requires any published comparison of models to be updated quarterly", "Because a table would encourage a reader to choose a lender by the model it uses"],
            correctIndex: 0,
            explanation: "It would be a confident sentence that quietly stops being true, with nothing to signal the moment it did.",
            sourceLessonSlug: "there-is-no-single-score",
          },
          {
            prompt: "The lesson says a spread between quoted scores is evidence about what?",
            options: ["The files", "The consumer's reliability, since a wider spread indicates a more volatile payment record", "The models' accuracy, since the correct score is the median of the three quoted values", "The lenders' preferences, since each buys the model that flatters its own applicants"],
            correctIndex: 0,
            explanation: "The difference between numbers drawn from different agencies is evidence about the records rather than about the person.",
            sourceLessonSlug: "there-is-no-single-score",
          },
          {
            prompt: "How does this lesson describe the world the FCRA's score disclosure was written for?",
            options: ["A plural world", "A world in which a single national model would eventually replace the competing ones", "A world in which consumers rather than lenders would be the models' primary customers", "A world in which every agency would maintain an identical copy of every consumer file"],
            correctIndex: 0,
            explanation: "Models, files and purposes all vary, so a single true score does not exist to be found.",
            sourceLessonSlug: "there-is-no-single-score",
          },
          {
            prompt: "What does the FCRA require an agency to disclose about the factors that hurt a score?",
            options: ["All of them, capped at four", "The three that the model weighted most heavily, ranked in order of their effect", "Any factor the consumer specifically asks about, on payment of a reasonable fee", "A narrative explanation of the model's reasoning, written in plain language"],
            correctIndex: 0,
            explanation: "The statute requires all of the key factors that adversely affected the score in the model used, not exceeding four in total.",
            sourceLessonSlug: "the-key-factors",
          },
          {
            prompt: "What does the word all do in the key-factor clause?",
            options: ["It forbids a selection", "It extends the disclosure to factors that improved the score as well as those that hurt it", "It requires the agency to repeat the disclosure for every model it holds a licence to", "It obliges the agency to disclose factors from the consumer's file at every other agency"],
            correctIndex: 0,
            explanation: "Every key factor that adversely affected the score must appear, subject only to the cap of four.",
            sourceLessonSlug: "the-key-factors",
          },
          {
            prompt: "What does adversely affected mean for what appears on the key-factor list?",
            options: ["What pushed the number down", "What the consumer has most recently changed about the accounts held in the file", "What the model considers the most reliable single predictor across all consumers", "What the lender has told the agency it wishes to see explained to the applicant"],
            correctIndex: 0,
            explanation: "The list is not a general description of the file; it names what hurt the score in that model.",
            sourceLessonSlug: "the-key-factors",
          },
          {
            prompt: "Is a factor absent from the key-factor list something the consumer has got right?",
            options: ["Not necessarily", "Yes, because the statute requires the disclosure of every factor the model considered", "Yes, because a factor that does not appear was scored as neutral by definition", "Yes, because the agency must certify that no other adverse factor exists in the file"],
            correctIndex: 0,
            explanation: "It may simply not have hurt the score in this model, which is a different statement from being satisfactory.",
            sourceLessonSlug: "the-key-factors",
          },
          {
            prompt: "Is four a target or a ceiling in the key-factor requirement?",
            options: ["A ceiling", "A target, so an agency disclosing fewer than four is in breach of the requirement", "Neither, since the number is set by the model's developer rather than by the statute", "A ceiling for agencies but a target for creditors sending adverse action notices"],
            correctIndex: 0,
            explanation: "The statute reads shall not exceed 4, so fewer is permitted.",
            sourceLessonSlug: "the-key-factors",
          },
          {
            prompt: "Why does the lesson say the key factors read as terse and slightly cryptic?",
            options: ["The statute asked for the top few", "Because the agencies compress them to fit the space available on a printed notice", "Because model developers treat the full wording as a trade secret and abbreviate it", "Because the statute requires them to be expressed as numeric codes rather than words"],
            correctIndex: 0,
            explanation: "The cap of four means the list is the top few, which is why it reads the way it does.",
            sourceLessonSlug: "the-key-factors",
          },
          {
            prompt: "Why does the lesson say a key factor beats the number, practically?",
            options: ["It names something checkable", "It carries a statutory guarantee that addressing it will raise the score within one cycle", "It is disclosed more often than the number, which agencies supply only once a year", "It is produced by the agency rather than the model, so it is easier to dispute"],
            correctIndex: 0,
            explanation: "A number places you against a range you did not set; a factor names a property of the file, and the file can be found and corrected.",
            sourceLessonSlug: "the-key-factors",
          },
          {
            prompt: "What has the consumer found if a key factor refers to something they do not recognise?",
            options: ["A dispute", "A model error, which the developer must correct within thirty days of notification", "A permissible-purpose violation by whoever pulled the report in the first place", "A stale item that the agency must delete without any further inquiry"],
            correctIndex: 0,
            explanation: "An unrecognised item in the file is exactly what Section 5's dispute procedure exists for.",
            sourceLessonSlug: "the-key-factors",
          },
          {
            prompt: "The lesson calls the key factors a bridge. Between what?",
            options: ["The model's opinion and the file", "The consumer's application and the creditor's underwriting standards for that product", "The agency's disclosure and the lender's decision on the pending application", "The score's range and the cutoff the lender applies when deciding on the loan"],
            correctIndex: 0,
            explanation: "They express the model's opinion in terms of the file, which is the object a correction procedure attaches to.",
            sourceLessonSlug: "the-key-factors",
          },
          {
            prompt: "Under the FCRA, when else does a consumer receive score information besides on request?",
            options: ["When a user takes adverse action", "On the anniversary of each account the consumer holds with a reporting creditor", "Whenever a permissible-purpose inquiry is made about the consumer's file", "At the close of each calendar year, in a summary the agency must mail without charge"],
            correctIndex: 0,
            explanation: "Section 1681m requires a user taking adverse action based on a report to disclose a numerical credit score it used and certain related items.",
            sourceLessonSlug: "the-key-factors",
          },
          {
            prompt: "What does this course refuse to promise about acting on a key factor?",
            options: ["That any future score will change", "That the factor accurately describes the account it refers to in the consumer's file", "That the agency will disclose the same factor again if the consumer asks a second time", "That the creditor will explain the factor in the adverse action notice it sends"],
            correctIndex: 0,
            explanation: "Nothing in the statute promises it, the factors carry no weights or instructions, and this course makes no such promise either.",
            sourceLessonSlug: "the-key-factors",
          },
          {
            prompt: "What do the key factors give a consumer, in the lesson's own summary?",
            options: ["A list of specific things to check", "A ranked plan of action with an estimated effect on the score for each step taken", "A guarantee that no other adverse item exists anywhere in the consumer's file", "A right to have the model re-run once the named factors have been addressed"],
            correctIndex: 0,
            explanation: "A starting point for checking, in a specific record, that a specific model read as adverse. Not a plan of action.",
            sourceLessonSlug: "the-key-factors",
          },
          {
            prompt: "Why is arguing with the number not a thing a consumer can do?",
            options: ["It is an opinion, not a claim", "Because the model's developer is not a consumer reporting agency and owes no duties", "Because a score dispute must be filed with the lender rather than with the agency", "Because the statutory dispute period expires thirty days after the score is created"],
            correctIndex: 0,
            explanation: "A score is a model's output, so the argument has to be about the file, and the key factors are how you get there.",
            sourceLessonSlug: "the-key-factors",
          },
          {
            prompt: "Which section of the FCRA carries the four key-factor requirement?",
            options: ["Section 1681g", "Section 1681b, which lists the circumstances under which a report may be furnished", "Section 1681i, which sets out the reinvestigation duty following a consumer dispute", "Section 1681c, which limits how long an adverse item may appear in a report"],
            correctIndex: 0,
            explanation: "It sits in the disclosures section, at subsection (f) on credit scores.",
            sourceLessonSlug: "the-key-factors",
          },
          {
            prompt: "How does Section 3 hand off to Section 4?",
            options: ["The reason codes reach you twice", "By explaining that a score cutoff is the only lawful ground for taking adverse action", "By showing that the score disclosure and the adverse action notice are the same document", "By establishing that a creditor must consult the model's developer before deciding"],
            correctIndex: 0,
            explanation: "Once when you ask for them, and once when a decision goes against you, which is the letter Section 4 reads line by line.",
            sourceLessonSlug: "the-key-factors",
          },
          {
            prompt: "What does the lesson say the number tells a consumer that the factors do not?",
            options: ["Where they sit in a range", "Which account in the file the model treated as the most serious problem", "How the lender intends to price the loan if the application is approved", "Whether the file contains any item older than the statutory reporting period"],
            correctIndex: 0,
            explanation: "It places you against a range you did not set, which is why the factors carry the actionable information.",
            sourceLessonSlug: "the-key-factors",
          },
          {
            prompt: "Which is the correct description of the relationship between file, model and score?",
            options: ["The model reads the file and outputs the score", "The score is furnished to the agency and stored as an item in the consumer's file", "The file is assembled from scores supplied by each of the consumer's creditors", "The model and the file are maintained jointly by the agency and the lender"],
            correctIndex: 0,
            explanation: "That ordering is why the file is the object with a correction procedure and the score is not.",
            sourceLessonSlug: "a-score-is-a-prediction",
          },
          {
            prompt: "The statutory phrase used by a person who makes or arranges a loan tells you what about the model's purpose?",
            options: ["It serves the lender", "That the model must be approved by the lender's federal supervisor before use", "That the consumer may specify which model the lender is required to purchase", "That the model may only be used for loans and never for insurance or employment"],
            correctIndex: 0,
            explanation: "It is a tool for the lender's question, which is a description rather than a criticism.",
            sourceLessonSlug: "a-score-is-a-prediction",
          },
          {
            prompt: "What is the practical reason this course spends a section on what a score is before teaching the notice?",
            options: ["Half the notice is score information", "Because a consumer may not request an adverse action notice without quoting their score", "Because a creditor is forbidden from taking adverse action unless a score was calculated", "Because the notice is issued by the agency that built the model rather than by the creditor"],
            correctIndex: 0,
            explanation: "The lesson says that by Section 4 you will know what half of the letter is.",
            sourceLessonSlug: "the-key-factors",
          },
          {
            prompt: "What does the lesson mean when it says the key factors do not come with weights?",
            options: ["They do not say how much each moved it", "They do not say which of the agencies supplied the item the factor refers to", "They do not say whether the factor will still be present at the next request", "They do not say which model version produced the factor list in question"],
            correctIndex: 0,
            explanation: "The disclosure names the factors and caps them at four; nothing in it quantifies their effect.",
            sourceLessonSlug: "the-key-factors",
          },
          {
            prompt: "How does the lesson describe the difference between a starting point and a plan of action?",
            options: ["Checking versus doing", "Reading the notice versus filing the dispute within the statutory period", "Requesting the score versus requesting the whole file from every agency", "Contacting the furnisher versus contacting the consumer reporting agency"],
            correctIndex: 0,
            explanation: "The factors give you specific things to check in a specific record, which is not the same as telling you what to do.",
            sourceLessonSlug: "the-key-factors",
          },
          {
            prompt: "In Section 3's account, what is the only correctable object in the whole apparatus?",
            options: ["The file", "The score, which the agency must recalculate on request after a successful dispute", "The model, which the developer must revise when a consumer identifies an error", "The lender's cutoff, which the creditor must justify in the adverse action notice"],
            correctIndex: 0,
            explanation: "The model produces an opinion and the number is its output; the record is the thing with a procedure attached.",
            sourceLessonSlug: "a-score-is-a-prediction",
          },
          {
            prompt: "What does the lesson say about the idea that a lender discovers your score?",
            options: ["It is not a discovery", "It is accurate, because the score exists in the file before any lender requests it", "It is accurate for mortgage lending and inaccurate for every other kind of credit", "It is accurate once the consumer has held at least one account for twelve months"],
            correctIndex: 0,
            explanation: "A score is produced by running a model, so it is generated rather than found.",
            sourceLessonSlug: "a-score-is-a-prediction",
          },
          {
            prompt: "The statute requires disclosure of the range under which model?",
            options: ["The model used", "Every model the agency holds a licence to run against the consumer's file", "The model most widely used by lenders in the consumer's own State", "The model the consumer nominates at the time of making the request"],
            correctIndex: 0,
            explanation: "The words are the range of possible credit scores under the model used, which ties the disclosure to the particular model.",
            sourceLessonSlug: "a-score-is-a-prediction",
          },
          {
            prompt: "Why does the lesson call the plurality of scores structural rather than accidental?",
            options: ["Models, files and purposes all vary", "Because Congress required each agency to build and maintain its own scoring model", "Because a single model would violate the antitrust laws governing the industry", "Because the agencies deliberately withhold data from one another to differentiate"],
            correctIndex: 0,
            explanation: "Three independent sources of variation guarantee that no single true number exists to be found.",
            sourceLessonSlug: "there-is-no-single-score",
          },
          {
            prompt: "What would the lesson say about a claim that a particular score is the one that matters?",
            options: ["It depends on which lender asks", "It is correct, because one model is designated by statute as the national standard", "It is correct for mortgage lending, where a single model is required by federal law", "It is meaningless, because lenders never disclose which model they have purchased"],
            correctIndex: 0,
            explanation: "A lender buys the model that fits its own question, so which score matters is a fact about the decision being made.",
            sourceLessonSlug: "there-is-no-single-score",
          },
          {
            prompt: "The lesson lists four durable things worth learning. Which is among them?",
            options: ["The four disclosure elements", "The current cutoff each large lender applies to applications for unsecured credit", "The number of consumers scored under each model in the most recent calendar year", "The fee an agency may charge for supplying a score outside the free annual disclosure"],
            correctIndex: 0,
            explanation: "The statutory definition, the four disclosure elements, the fact that the model reads a file, and the reason codes.",
            sourceLessonSlug: "there-is-no-single-score",
          },
          {
            prompt: "Why does the lesson say the model reading a file is the useful half of the arrangement?",
            options: ["The file is checkable", "Because the model is published in the Federal Register and can be inspected by anyone", "Because a consumer may require the agency to run a different model on the same file", "Because the file is maintained by the consumer and supplied to the agency on request"],
            correctIndex: 0,
            explanation: "The file is the thing you can obtain, read and correct, which is where every remedy in the course attaches.",
            sourceLessonSlug: "there-is-no-single-score",
          },
          {
            prompt: "How does the lesson characterise the relationship between a model's authors and its output?",
            options: ["Choices produce the number", "The authors are legally responsible for any decision a lender makes using the number", "The authors must publish the weights they assign to each item in a consumer's file", "The authors are supervised by the same regulator that supervises the lender"],
            correctIndex: 0,
            explanation: "A model has authors and choices, and a different set of choices returns a different number from the same file.",
            sourceLessonSlug: "a-score-is-a-prediction",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 4 — The letter that has to say why
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "read-your-adverse-action-notice",
      title: "13 · Read your own adverse action notice",
      section: "Section 4 · The letter that has to say why",
      body: `This is the centre of the course, and it is a piece of paper you can hold.

When a creditor takes adverse action, federal regulation requires it to send you a document, and requires that document to tell you **why**. Not that it happened. Why.

**What the statute requires.** ECOA says:

> "Each applicant against whom adverse action is taken shall be entitled to a statement of reasons for such action from the creditor." (15 U.S.C. § 1691, n.d.)

and then closes the obvious loophole:

> "A statement of reasons meets the requirements of this section only if it contains the specific reasons for the adverse action taken." (15 U.S.C. § 1691, n.d.)

**What the regulation requires, field by field.** Regulation B sets out what has to be in the notification:

> "A notification given to an applicant when adverse action is taken shall be in writing and shall contain a statement of the action taken; the name and address of the creditor; a statement of the provisions of section 701(a) of the Act; the name and address of the Federal agency that administers compliance with respect to the creditor; and either: (i) A statement of specific reasons for the action taken; or (ii) A disclosure of the applicant's right to a statement of specific reasons within 30 days, if the statement is requested within 60 days of the creditor's notification." (12 CFR § 1002.9, n.d.)

**Six things, then. Count them on the letter in front of you:**

1. **The action taken.** What was decided.
2. **The creditor's name and address.** Who decided.
3. **A statement of the provisions of section 701(a).** That is the ECOA anti-discrimination notice, and the next lesson but one is about what it says.
4. **The federal agency that administers compliance for that creditor.** Where a complaint about this creditor goes. Note that the notice names the agency, which means you do not have to work out which one.
5. **Either the reasons themselves, or the right to ask for them.** If the letter offers the right rather than the reasons, **you have 60 days to ask** and the creditor then has 30 days to answer.
6. And under the FCRA, if a consumer report was involved, a second set of items, which is the next lesson.

**Now the sentence the entire course turns on.** Regulation B does not stop at requiring reasons. It says what a reason has to be:

> "The statement of reasons for adverse action required by paragraph (a)(2)(i) of this section must be specific and indicate the principal reason(s) for the adverse action. Statements that the adverse action was based on the creditor's internal standards or policies or that the applicant, joint applicant, or similar party failed to achieve a qualifying score on the creditor's credit scoring system are insufficient." (12 CFR § 1002.9, n.d.)

**Read the second sentence again.** Two specific evasions are named and forbidden. "It did not meet our internal standards" is insufficient. **"You did not reach our score cutoff" is insufficient.** The regulation anticipated exactly the two things a creditor would most like to say, and closed both.

**Why that matters more than it looks.** A score cutoff is not a reason, it is a restatement of the decision. Naming the *principal reasons* forces the creditor back onto the file: the balances, the history, the length of record, the specific items the model read badly. And a reason expressed in terms of the file is a reason you can go and check, which is the whole architecture of this course.

**So the letter is not a courtesy.** It is a required disclosure with a defined content standard, and it is the only point in the entire process where an institution has to explain itself to you in writing, on a timetable, in specific terms.

:::reveal Under ECOA, what does a statement of reasons have to contain to satisfy the statute? ||| The specific reasons for the adverse action taken.

:::reveal Which two statements does Regulation B name as insufficient reasons for adverse action? ||| That the action was based on the creditor's internal standards or policies, and that the applicant failed to achieve a qualifying score on the creditor's credit scoring system.

:::reveal If a notice discloses the right to reasons rather than the reasons, what are the two deadlines? ||| The applicant has 60 days to request the statement, and the creditor then has 30 days to provide it.

## Vocabulary
- **Adverse action notice**: the written notification a creditor must give when it takes adverse action, carrying the action, the creditor's identity, the ECOA notice, the supervising agency, and either the reasons or the right to them.
- **Statement of specific reasons**: the part of the notice that must be specific and indicate the principal reasons; a reference to internal standards or a failed score cutoff does not qualify.
- **Principal reasons**: the leading grounds for the decision, expressed in terms a consumer can check against the file rather than as a restatement of the outcome.
- **Section 701(a) notice**: the statement of the Equal Credit Opportunity Act's anti-discrimination provisions that Regulation B requires the notification to carry.

## Sources
15 U.S.C. § 1691. (n.d.). *Scope of prohibition*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/15/1691

12 CFR § 1002.9. (n.d.). *Notifications*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/1002.9`,
    },
    {
      slug: "the-second-notice-on-the-same-page",
      title: "14 · The second notice on the same page",
      section: "Section 4 · The letter that has to say why",
      body: `Most people who receive one of these letters receive two notices printed as one document, required by two different statutes, and never notice the seam.

**Regulation B's notice, from the last lesson, comes from ECOA.** It is about the *decision*: what was decided and on what principal reasons.

**The FCRA's notice is about the report.** It is triggered by a different fact, namely that the adverse action was based in whole or in part on information in a consumer report, and it imposes four duties:

> "If any person takes any adverse action with respect to any consumer that is based in whole or in part on any information contained in a consumer report, the person shall— (1) provide oral, written, or electronic notice of the adverse action to the consumer; (2) provide to the consumer written or electronic disclosure— (A) of a numerical credit score as defined in section 1681g(f)(2)(A) of this title used by such person in taking any adverse action based in whole or in part on any information in a consumer report; and (B) of the information set forth in subparagraphs (B) through (E) of section 1681g(f)(1) of this title" (15 U.S.C. § 1681m, n.d.)

**Duty (2) is the payoff of Section 3.** The score, the range, the key factors capped at four, the date the score was created, and who provided it: exactly the disclosure elements you already know, arriving unrequested because a decision went against you.

**Duties (3) and (4) are the ones people miss.** The user must also provide:

> "(3) ... (A) the name, address, and telephone number of the consumer reporting agency (including a toll-free telephone number established by the agency if the agency compiles and maintains files on consumers on a nationwide basis) that furnished the report to the person; and (B) a statement that the consumer reporting agency did not make the decision to take the adverse action and is unable to provide the consumer the specific reasons why the adverse action was taken" (15 U.S.C. § 1681m, n.d.)

> "(4) provide to the consumer an oral, written, or electronic notice of the consumer's right— (A) to obtain, under section 1681j of this title, a free copy of a consumer report on the consumer from the consumer reporting agency referred to in paragraph (3), which notice shall include an indication of the 60-day period under that section for obtaining such a copy; and (B) to dispute, under section 1681i of this title, with a consumer reporting agency the accuracy or completeness of any information in a consumer report furnished by the agency." (15 U.S.C. § 1681m, n.d.)

**So the letter hands you the next two steps.** It tells you which agency's file was used, that a free copy is available on a 60-day clock, and that you may dispute what is in it. **The remedy is printed on the refusal.** Section 5 is the two steps the letter just named.

**And the sentence in duty (3)(B) is worth pausing on.** The agency did not make the decision and cannot tell you why it went the way it did. The creditor decided, so the reasons come from the creditor, under Regulation B. The file comes from the agency, under the FCRA. Two institutions, two duties, one envelope, and knowing which is which tells you who to write to.

**A third notice exists and is different again.** Where a creditor uses a consumer report and then grants credit on materially less favourable terms than it offers to a substantial proportion of its consumers, Regulation V requires a **risk-based pricing notice** (12 CFR § 1022.72, n.d.). That is not adverse action; you got the credit. It is the disclosure for being priced worse than the people around you, and it exists because a bad price and a refusal are the same decision expressed differently.

:::reveal What fact triggers the FCRA's adverse action duties, as opposed to Regulation B's? ||| That the adverse action was based in whole or in part on information contained in a consumer report.

:::reveal What must a user tell a consumer about the consumer reporting agency's role in the decision? ||| That the agency did not make the decision and is unable to provide the specific reasons why the adverse action was taken.

:::reveal What triggers a risk-based pricing notice, and how does it differ from adverse action? ||| Being granted credit on materially less favourable terms than a substantial proportion of consumers get, based on a consumer report. The credit was granted, so it is not a refusal.

## Vocabulary
- **The seam**: the boundary between the Regulation B notice about the decision and the FCRA notice about the report, usually printed as one document.
- **Free copy on a 60-day clock**: the FCRA right a user must tell the consumer about after adverse action, pointing at the agency whose report it used.
- **Risk-based pricing notice**: the Regulation V disclosure owed when a consumer report leads to credit on materially less favourable terms than a substantial proportion of consumers receive.
- **Material terms**: the price and conditions on which credit is granted, which the risk-based pricing rule compares against what most consumers get from that same person.

## Sources
15 U.S.C. § 1681m. (n.d.). *Requirements on users of consumer reports*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/15/1681m

12 CFR § 1022.72. (n.d.). *General requirements for risk-based pricing notices*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/1022.72

15 U.S.C. § 1681g. (n.d.). *Disclosures to consumers*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/15/1681g`,
    },
    {
      slug: "a-gate-that-must-state-a-standard",
      title: "15 · A gate that has to state a standard",
      section: "Section 4 · The letter that has to say why",
      body: `Set the adverse action notice beside the course this catalog already published about federal farm credit, and the same machine appears at two different scales.

**The government version.** *The County Committee* teaches a federal lender whose eligibility standard sat in statute. To borrow, an applicant had to be unable to obtain sufficient credit elsewhere at reasonable rates and terms in their own community, and until 1994 the statute also asked whether the applicant had **the character, industry, and ability** to carry out the proposed operations. The people applying that test were **three individuals residing in the county, at least two of them farmers**, who determined both eligibility and the limits of credit to be extended.

**The consumer version.** A private lender applies a standard it wrote itself, using a model it bought, on a file assembled by a company. Nobody elected anybody. And yet the same demand is made of it: **state the principal reasons, specifically, in writing, on a timetable.**

**The difference is instructive in both directions.** The federal gate had to publish its standard in advance, in a statute anyone could read, and could then apply it through neighbours. The private gate does not publish its standard at all, and is required instead to explain its application after the fact. Neither arrangement is obviously the better one. What they share is the thing worth learning: **a gate that must state something can be argued with, and a gate that need not cannot.**

**Now the part of the notice that is about who you are.** Regulation B requires the notification to carry a statement of the ECOA's prohibited bases, and the regulation defines them:

> "(z) Prohibited basis means race, color, religion, national origin, sex, marital status, or age (provided that the applicant has the capacity to enter into a binding contract); the fact that all or part of the applicant's income derives from any public assistance program; or the fact that the applicant has in good faith exercised any right under the Consumer Credit Protection Act or any state law upon which an exemption has been granted by the Bureau." (12 CFR § 1002.2, n.d.)

The statute puts the same list in the form of a prohibition:

> "It shall be unlawful for any creditor to discriminate against any applicant, with respect to any aspect of a credit transaction— (1) on the basis of race, color, religion, national origin, sex or marital status, or age (provided the applicant has the capacity to contract); (2) because all or part of the applicant's income derives from any public assistance program; or (3) because the applicant has in good faith exercised any right under this chapter." (15 U.S.C. § 1691, n.d.)

**Three features of that list are easy to miss.**

**"With respect to any aspect of a credit transaction."** Not just the approval. Any aspect, which reaches the terms, the pricing, the servicing and the collection.

**Public assistance income is a protected source.** The statute names it separately, which tells you what practice it was written against.

**Retaliation is prohibited.** Exercising a right in good faith under the Consumer Credit Protection Act, which includes the rights in this course, cannot lawfully be held against you.

**Why the notice and the prohibition sit in the same envelope.** Because the statement of reasons is what makes the prohibition checkable. A refusal with no stated reason is unfalsifiable. A refusal that names its principal reasons can be compared against the file, against the reasons other applicants were given, and against the list above. **The disclosure is the enforcement mechanism**, which is exactly what the county committee's published statutory standard was too.

:::reveal What eligibility test did the federal farm lender apply in statute until 1994? ||| Whether the applicant had the character, industry, and ability to carry out the proposed operations.

:::reveal What is the difference between how the federal gate and the private gate handle their standards? ||| The federal gate published its standard in advance in statute; the private gate does not publish it, and must instead explain its application after the fact.

:::reveal Which income source does ECOA name separately as a prohibited basis? ||| Income derived in whole or in part from any public assistance program.

## Vocabulary
- **Prohibited basis**: the list in ECOA and Regulation B of grounds on which a creditor may not discriminate in any aspect of a credit transaction.
- **Any aspect of a credit transaction**: the statutory reach of the prohibition, covering terms, pricing, servicing and collection as well as the decision to grant.
- **Retaliation**: adverse treatment because an applicant exercised a right in good faith under the Consumer Credit Protection Act, which the statute lists as a prohibited basis.
- **Disclosure as enforcement**: this lesson's name for the reason the statement of reasons matters, since an unstated reason cannot be tested against the prohibition.

## Sources
15 U.S.C. § 1691. (n.d.). *Scope of prohibition*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/15/1691

12 CFR § 1002.2. (n.d.). *Definitions*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/1002.2

7 U.S.C. § 1922. (n.d.). *Persons eligible for real estate loans*. Office of the Law Revision Counsel, U.S. House of Representatives. https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title7-section1922&num=0&edition=prelim

Farm Service Agency. (1996, April 15). Farm Service Agency county committees; Farm Credit Programs loan eligibility determinations. *Federal Register, 61*(73), 16461-16462. https://www.govinfo.gov/content/pkg/FR-1996-04-15/html/96-9201.htm`,
    },
    {
      slug: "quiz-the-notice",
      title: "16 · Knowledge check: the letter that has to say why",
      section: "Section 4 · The letter that has to say why",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "Under ECOA, what is an applicant against whom adverse action is taken entitled to?",
            options: ["A statement of reasons", "A copy of every consumer report the creditor obtained during its evaluation of the file", "An interview with the officer who made the decision, on request within thirty days", "A referral to a second lender offering a comparable product on comparable terms"],
            correctIndex: 0,
            explanation: "The statute entitles each such applicant to a statement of reasons for the action from the creditor.",
            sourceLessonSlug: "read-your-adverse-action-notice",
          },
          {
            prompt: "ECOA says a statement of reasons meets the section's requirements only if it contains what?",
            options: ["The specific reasons", "The name of every scoring model the creditor consulted while evaluating the application", "The internal policy number under which the creditor classified the application", "A calculation showing how far the applicant fell short of the creditor's threshold"],
            correctIndex: 0,
            explanation: "The statute closes the loophole with the words only if it contains the specific reasons for the adverse action taken.",
            sourceLessonSlug: "read-your-adverse-action-notice",
          },
          {
            prompt: "Regulation B requires a statement of reasons to be specific and to indicate what?",
            options: ["The principal reasons", "The number of applicants refused for the same reason during the preceding quarter", "The identity of the consumer reporting agency that supplied the information relied on", "The point at which the applicant's file first diverged from the creditor's requirements"],
            correctIndex: 0,
            explanation: "The rule reads must be specific and indicate the principal reason(s) for the adverse action.",
            sourceLessonSlug: "read-your-adverse-action-notice",
          },
          {
            prompt: "Which statement does Regulation B expressly declare insufficient as a reason for adverse action?",
            options: ["A failed score cutoff", "That the applicant's stated income could not be verified from the documents supplied", "That the applicant had opened four new accounts in the preceding six months", "That the applicant's file contained a collection account placed within the last year"],
            correctIndex: 0,
            explanation: "The rule names a failure to achieve a qualifying score on the creditor's credit scoring system as insufficient, alongside a reference to internal standards.",
            sourceLessonSlug: "read-your-adverse-action-notice",
          },
          {
            prompt: "What is the other evasion Regulation B names as insufficient?",
            options: ["The creditor's internal standards", "The volume of applications the creditor received during the month in question", "The absence of a prior relationship between the creditor and the applicant", "The applicant's failure to supply a document the creditor had not requested"],
            correctIndex: 0,
            explanation: "Statements that the action was based on the creditor's internal standards or policies are expressly insufficient.",
            sourceLessonSlug: "read-your-adverse-action-notice",
          },
          {
            prompt: "Why does the lesson say a score cutoff is not a reason?",
            options: ["It restates the decision", "Because the cutoff is set by the model's developer rather than by the creditor itself", "Because the cutoff varies by product and cannot be disclosed to an individual applicant", "Because the applicant has no way to obtain the score the creditor actually used"],
            correctIndex: 0,
            explanation: "Naming the principal reasons forces the creditor back onto the file, which is an object the applicant can go and check.",
            sourceLessonSlug: "read-your-adverse-action-notice",
          },
          {
            prompt: "Regulation B requires the adverse action notification to be in what form?",
            options: ["In writing", "Orally, with a written confirmation to follow within ten business days of the call", "In any form the creditor chooses, provided the applicant acknowledges receipt", "By certified mail, with a return receipt retained by the creditor for two years"],
            correctIndex: 0,
            explanation: "The rule opens shall be in writing and then lists the contents it must carry.",
            sourceLessonSlug: "read-your-adverse-action-notice",
          },
          {
            prompt: "Which of these is one of the items Regulation B requires in the adverse action notification?",
            options: ["The creditor's name and address", "The number of applications the creditor approved in the same product during that month", "The applicant's own credit file as held by each of the nationwide agencies", "A schedule of the terms on which the creditor would reconsider the application"],
            correctIndex: 0,
            explanation: "The rule requires a statement of the action taken, the creditor's name and address, the section 701(a) statement, the supervising agency, and the reasons or the right to them.",
            sourceLessonSlug: "read-your-adverse-action-notice",
          },
          {
            prompt: "Which government body's name and address must the adverse action notification carry?",
            options: ["The federal agency supervising the creditor", "The office of the State attorney general in the applicant's own State of residence", "The federal court in whose district the creditor maintains its principal place of business", "The consumer reporting agency's federal supervisor, rather than the creditor's"],
            correctIndex: 0,
            explanation: "The rule requires the name and address of the Federal agency that administers compliance with respect to the creditor, so the consumer does not have to work out which one it is.",
            sourceLessonSlug: "read-your-adverse-action-notice",
          },
          {
            prompt: "If a notification discloses the right to reasons rather than the reasons themselves, how long does the applicant have to ask?",
            options: ["60 days", "30 days, matching the period the creditor then has to supply the statement of reasons", "90 days, matching the period Regulation B allows after an unaccepted counteroffer", "One year, measured from the date the creditor received the completed application"],
            correctIndex: 0,
            explanation: "The disclosure route requires the request to be made within 60 days of the creditor's notification.",
            sourceLessonSlug: "read-your-adverse-action-notice",
          },
          {
            prompt: "Once an applicant requests the statement of reasons in time, how long does the creditor have?",
            options: ["30 days", "60 days, matching the period the applicant had in which to make the request", "Ten business days, because the creditor already reached the decision it is explaining", "Until the end of the calendar quarter in which the request was received"],
            correctIndex: 0,
            explanation: "The rule gives the applicant a right to a statement of specific reasons within 30 days of a timely request.",
            sourceLessonSlug: "read-your-adverse-action-notice",
          },
          {
            prompt: "What does the lesson say the adverse action notice is, rather than a courtesy?",
            options: ["A required disclosure", "A commercial communication that the creditor may tailor to its own marketing needs", "An offer to reconsider the application on receipt of additional documentation", "A summary of the creditor's underwriting standards prepared for the applicant"],
            correctIndex: 0,
            explanation: "It is a required disclosure with a defined content standard and a timetable, and the only written explanation in the whole process.",
            sourceLessonSlug: "read-your-adverse-action-notice",
          },
          {
            prompt: "Under ECOA, may a creditor satisfy the statement-of-reasons duty by giving the statement orally?",
            options: ["Yes, if it confirms in writing on request", "No, the statute requires every statement of reasons to be delivered in writing in every case", "Yes, and no written confirmation may be demanded by the applicant afterwards", "Yes, but only where the creditor acted on fewer than fifty applications that year"],
            correctIndex: 0,
            explanation: "The statute allows an oral statement where the written notification advises the applicant of the right to have the reasons confirmed in writing on written request.",
            sourceLessonSlug: "read-your-adverse-action-notice",
          },
          {
            prompt: "Which anti-discrimination provision must the Regulation B notification restate?",
            options: ["Section 701(a) of the Act", "Section 615 of the Fair Credit Reporting Act, on the duties of users of reports", "Title VII of the Civil Rights Act of 1964, on discrimination in employment", "Section 5 of the Federal Trade Commission Act, on unfair or deceptive practices"],
            correctIndex: 0,
            explanation: "The rule requires a statement of the provisions of section 701(a) of the Act, which is the ECOA prohibited-bases provision.",
            sourceLessonSlug: "read-your-adverse-action-notice",
          },
          {
            prompt: "The lesson says the regulation anticipated the two things a creditor would most like to say. What does that tell you about the rule's drafting?",
            options: ["Both evasions were closed on purpose", "That the two statements were once permitted and were removed by later amendment", "That a creditor may still use either statement if it also supplies a score disclosure", "That the two statements are permitted for small creditors and forbidden for large ones"],
            correctIndex: 0,
            explanation: "Naming the internal-standards and score-cutoff evasions specifically is what makes the specificity requirement bite.",
            sourceLessonSlug: "read-your-adverse-action-notice",
          },
          {
            prompt: "What does the lesson say a reason expressed in terms of the file allows a consumer to do?",
            options: ["Check it", "Compel the creditor to reverse its decision within the thirty-day statutory period", "Require the consumer reporting agency to delete the item the reason refers to", "Obtain a second decision from a different underwriter at the same institution"],
            correctIndex: 0,
            explanation: "That checkability is the whole architecture of this course, and it is why the principal-reasons requirement matters.",
            sourceLessonSlug: "read-your-adverse-action-notice",
          },
          {
            prompt: "How many items does the lesson count in the Regulation B notification, counting the FCRA additions as one?",
            options: ["Six", "Three, since the rule groups the creditor's identity, the action and the reasons together", "Nine, because each of the ECOA prohibited bases is counted as its own item", "Four, because the supervising agency and the section 701(a) statement are optional"],
            correctIndex: 0,
            explanation: "The action, the creditor, the section 701(a) statement, the supervising agency, the reasons or the right to them, and the FCRA items when a report was used.",
            sourceLessonSlug: "read-your-adverse-action-notice",
          },
          {
            prompt: "What fact triggers the FCRA's adverse action duties on a user?",
            options: ["The action was based on a consumer report", "The applicant requested a copy of the report before the decision was reached", "The creditor is supervised by a federal banking regulator rather than by a State one", "The applicant's score fell below the range published by the model's developer"],
            correctIndex: 0,
            explanation: "The duties apply where the adverse action is based in whole or in part on information contained in a consumer report.",
            sourceLessonSlug: "the-second-notice-on-the-same-page",
          },
          {
            prompt: "How many duties does 15 U.S.C. section 1681m(a) impose on a user taking adverse action?",
            options: ["Four", "Two, namely notice of the action and disclosure of the numerical credit score used", "Six, matching the number of items Regulation B requires in its own notification", "One, namely the provision of oral, written or electronic notice of the adverse action"],
            correctIndex: 0,
            explanation: "Notice of the action, the score disclosure, the agency's contact details with the disclaimer, and notice of the free-copy and dispute rights.",
            sourceLessonSlug: "the-second-notice-on-the-same-page",
          },
          {
            prompt: "Which score-related items must a user disclose after adverse action based on a report?",
            options: ["The score and the section 1681g(f)(1) items", "The range alone, since the score itself is proprietary to the model's developer", "The key factors alone, since the number would confuse an applicant who was refused", "The lender's own cutoff, so the applicant can see how far short the score fell"],
            correctIndex: 0,
            explanation: "The statute requires the numerical credit score used, plus the information in subparagraphs (B) through (E) of section 1681g(f)(1).",
            sourceLessonSlug: "the-second-notice-on-the-same-page",
          },
          {
            prompt: "What must the user tell the consumer about the consumer reporting agency that furnished the report?",
            options: ["Its name, address and telephone number", "The date on which the agency last updated the consumer's file before the report was pulled", "The fee the user paid the agency for the report on which it based its decision", "The number of other users that obtained the same report during the preceding year"],
            correctIndex: 0,
            explanation: "Including a toll-free number where the agency compiles and maintains files on consumers on a nationwide basis.",
            sourceLessonSlug: "the-second-notice-on-the-same-page",
          },
          {
            prompt: "What disclaimer about the agency does the FCRA require the notice to carry?",
            options: ["It did not make the decision", "It is not liable for any inaccuracy in the information it supplied to the user", "It may not be contacted by the consumer until thirty days after the decision", "It has already been notified of the adverse action and will annotate the file"],
            correctIndex: 0,
            explanation: "The statement must say the agency did not make the decision and is unable to provide the specific reasons why the adverse action was taken.",
            sourceLessonSlug: "the-second-notice-on-the-same-page",
          },
          {
            prompt: "The FCRA requires notice of a right to a free copy of the report, with what period indicated?",
            options: ["60 days", "12 months, matching the free annual disclosure available to every consumer", "30 days, matching the period an agency has to complete a reinvestigation", "90 days, matching the period Regulation B allows after an unaccepted counteroffer"],
            correctIndex: 0,
            explanation: "The notice must include an indication of the 60-day period under section 1681j for obtaining the copy.",
            sourceLessonSlug: "the-second-notice-on-the-same-page",
          },
          {
            prompt: "Which other FCRA right must the adverse action notice tell the consumer about?",
            options: ["The right to dispute", "The right to require the user to reconsider the application once the file is corrected", "The right to have the agency suppress the file from all future users for twelve months", "The right to receive a written explanation from the agency of how the score was built"],
            correctIndex: 0,
            explanation: "The right to dispute, under section 1681i, the accuracy or completeness of any information in the report.",
            sourceLessonSlug: "the-second-notice-on-the-same-page",
          },
          {
            prompt: "The lesson says the remedy is printed where?",
            options: ["On the refusal", "In a separate mailing the agency sends after the user notifies it of the decision", "In the terms and conditions the applicant accepted when submitting the application", "In the regulation itself, which the consumer must find and read independently"],
            correctIndex: 0,
            explanation: "The letter names the agency, the free copy on a 60-day clock, and the dispute right, which are Section 5's two steps.",
            sourceLessonSlug: "the-second-notice-on-the-same-page",
          },
          {
            prompt: "Knowing which institution owes which duty tells a consumer what, practically?",
            options: ["Who to write to", "Which federal court has jurisdiction over a claim arising from the decision", "How long the creditor must retain the application file after the decision", "Which of the three nationwide agencies holds the most complete record"],
            correctIndex: 0,
            explanation: "The reasons come from the creditor under Regulation B; the file comes from the agency under the FCRA.",
            sourceLessonSlug: "the-second-notice-on-the-same-page",
          },
          {
            prompt: "What triggers a risk-based pricing notice under Regulation V?",
            options: ["Materially less favourable terms", "Any use of a consumer report in connection with an application for consumer credit", "A refusal to grant credit in substantially the amount the applicant requested", "The consumer's score falling below the median for applicants of that product"],
            correctIndex: 0,
            explanation: "The rule applies where a consumer report leads to credit on material terms materially less favourable than the most favourable terms available to a substantial proportion of consumers from that person.",
            sourceLessonSlug: "the-second-notice-on-the-same-page",
          },
          {
            prompt: "How does a risk-based pricing notice differ from an adverse action notice?",
            options: ["You got the credit", "It is sent by the consumer reporting agency rather than by the creditor that priced the loan", "It is required only for credit secured by residential real property rather than for all credit", "It must be delivered before the application is decided rather than afterwards"],
            correctIndex: 0,
            explanation: "It is the disclosure for being priced worse than the people around you, not for being refused.",
            sourceLessonSlug: "the-second-notice-on-the-same-page",
          },
          {
            prompt: "Why does the lesson say a bad price and a refusal are the same decision expressed differently?",
            options: ["Both act on the report", "Because a consumer refused credit may always obtain it elsewhere at a higher price", "Because a creditor must choose between refusing and repricing under the same rule", "Because the statute defines a materially less favourable price as a form of adverse action"],
            correctIndex: 0,
            explanation: "Both outcomes follow from a consumer report, which is why the disclosure regime reaches both rather than only the refusal.",
            sourceLessonSlug: "the-second-notice-on-the-same-page",
          },
          {
            prompt: "In the Regulation V risk-based pricing rule, against what are a consumer's terms compared?",
            options: ["The most favourable terms most consumers get", "The average terms offered by all lenders operating in the consumer's own State", "The terms the same consumer received on their most recent previous credit account", "The terms the creditor would offer to an applicant with no consumer file at all"],
            correctIndex: 0,
            explanation: "The comparison is to the most favourable material terms available to a substantial proportion of consumers from or through that person.",
            sourceLessonSlug: "the-second-notice-on-the-same-page",
          },
          {
            prompt: "The lesson calls the boundary between the two notices a seam. What lies on each side?",
            options: ["The decision, and the report", "The creditor's obligations, and the applicant's obligations under the same transaction", "The federal requirements, and any additional requirements imposed by State law", "The written portion of the notice, and the portion the creditor may deliver orally"],
            correctIndex: 0,
            explanation: "Regulation B's notice is about the decision and its principal reasons; the FCRA's notice is about the report that fed it.",
            sourceLessonSlug: "the-second-notice-on-the-same-page",
          },
          {
            prompt: "Which purpose does the FCRA credit-score disclosure serve after adverse action, per the lesson?",
            options: ["It arrives unrequested", "It replaces the free annual file disclosure for that twelve-month period", "It obliges the creditor to reconsider once the consumer corrects the file", "It certifies that the score was calculated by an approved model developer"],
            correctIndex: 0,
            explanation: "The same elements you can request in Section 3 arrive on their own because a decision went against you.",
            sourceLessonSlug: "the-second-notice-on-the-same-page",
          },
          {
            prompt: "May the FCRA's notice of the adverse action itself be given orally?",
            options: ["Yes", "No, the statute requires the notice of the action to be in writing in every case", "Only where the user acted on fewer than one hundred and fifty applications that year", "Only where the consumer has given prior written consent to oral communication"],
            correctIndex: 0,
            explanation: "The first duty reads oral, written, or electronic notice of the adverse action to the consumer.",
            sourceLessonSlug: "the-second-notice-on-the-same-page",
          },
          {
            prompt: "In which form must the FCRA's score disclosure be given?",
            options: ["Written or electronic", "Oral, written or electronic, at the user's option in the same way as the notice of action", "Written only, delivered by mail to the address the consumer supplied on the application", "In whatever form the consumer requests when applying for the credit in question"],
            correctIndex: 0,
            explanation: "The second duty specifies written or electronic disclosure, which is narrower than the first duty's oral option.",
            sourceLessonSlug: "the-second-notice-on-the-same-page",
          },
          {
            prompt: "What eligibility test does the sibling course report from federal farm credit statute?",
            options: ["Character, industry, and ability", "Three years of continuous operation and a demonstrated positive net worth", "Residence in the county and endorsement by the elected conservation committee", "Ownership of at least forty acres and participation in a price support programme"],
            correctIndex: 0,
            explanation: "The statute asked whether the applicant had the character, industry, and ability to carry out the proposed operations, until 1994.",
            sourceLessonSlug: "a-gate-that-must-state-a-standard",
          },
          {
            prompt: "What did the federal farm applicant have to be unable to do, before borrowing?",
            options: ["Obtain sufficient credit elsewhere", "Repay an existing obligation from the current year's expected receipts", "Secure the endorsement of two neighbouring producers in the same county", "Obtain crop insurance covering the acreage the loan would be used to plant"],
            correctIndex: 0,
            explanation: "The applicant had to be unable to obtain sufficient credit elsewhere at reasonable rates and terms in their own community.",
            sourceLessonSlug: "a-gate-that-must-state-a-standard",
          },
          {
            prompt: "How does the private credit gate differ from the federal farm gate on publication?",
            options: ["It does not publish its standard", "It publishes its standard in the Federal Register before applying it to any application", "It files its standard with the consumer reporting agencies that supply its reports", "It must publish its standard on request from any applicant who has been refused"],
            correctIndex: 0,
            explanation: "The private gate is required instead to explain its application after the fact, through the statement of reasons.",
            sourceLessonSlug: "a-gate-that-must-state-a-standard",
          },
          {
            prompt: "What do the two gates share, in the lesson's summary?",
            options: ["Each must state something", "Each is operated by people elected by the community the applicant lives in", "Each applies a test that Congress wrote and can amend at any time by statute", "Each gives the refused applicant a right of appeal to a federal administrative body"],
            correctIndex: 0,
            explanation: "A gate that must state something can be argued with, and a gate that need not cannot.",
            sourceLessonSlug: "a-gate-that-must-state-a-standard",
          },
          {
            prompt: "Which of these is a prohibited basis under ECOA?",
            options: ["Marital status", "Length of residence at the applicant's current address as stated on the application", "The number of credit applications the applicant has submitted in the last six months", "The industry in which the applicant is employed at the time of the application"],
            correctIndex: 0,
            explanation: "The list runs race, colour, religion, national origin, sex or marital status, and age where the applicant has capacity to contract.",
            sourceLessonSlug: "a-gate-that-must-state-a-standard",
          },
          {
            prompt: "ECOA's prohibition reaches discrimination with respect to what?",
            options: ["Any aspect of a credit transaction", "The decision to grant or refuse credit, and nothing beyond that decision itself", "The advertising of credit products, but not the evaluation of individual applications", "The setting of interest rates, but not the servicing or collection of the account"],
            correctIndex: 0,
            explanation: "The words any aspect of a credit transaction reach the terms, the pricing, the servicing and the collection.",
            sourceLessonSlug: "a-gate-that-must-state-a-standard",
          },
          {
            prompt: "Which income source does ECOA protect by name?",
            options: ["Public assistance", "Self-employment income, where the applicant has filed returns for at least two years", "Rental income from residential property the applicant owns and lets to tenants", "Income from a pension or retirement plan sponsored by a former employer"],
            correctIndex: 0,
            explanation: "The statute names income derived in whole or in part from any public assistance program as its own prohibited basis.",
            sourceLessonSlug: "a-gate-that-must-state-a-standard",
          },
          {
            prompt: "ECOA's third prohibited basis protects an applicant who has done what?",
            options: ["Exercised a right in good faith", "Filed a complaint against the creditor with the appropriate federal supervisory agency", "Refused to supply information the creditor was not entitled to request in the first place", "Obtained a copy of their own consumer report within the preceding twelve months"],
            correctIndex: 0,
            explanation: "The statute prohibits discrimination because the applicant has in good faith exercised any right under the chapter, which is an anti-retaliation provision.",
            sourceLessonSlug: "a-gate-that-must-state-a-standard",
          },
          {
            prompt: "The age prohibition in ECOA carries a proviso. What is it?",
            options: ["The applicant has capacity to contract", "The applicant is at least twenty-one years of age at the time of the application", "The creditor has offered the same product to applicants of every age group", "The applicant has held a credit account for a minimum of twelve consecutive months"],
            correctIndex: 0,
            explanation: "The statute reads age (provided the applicant has the capacity to contract), and Regulation B renders it as capacity to enter into a binding contract.",
            sourceLessonSlug: "a-gate-that-must-state-a-standard",
          },
          {
            prompt: "Regulation B's definition of prohibited basis adds a limb the statute states differently. Which?",
            options: ["Rights under State law where an exemption was granted", "Rights under any collective bargaining agreement covering the applicant's employment", "Rights under a municipal ordinance regulating consumer lending within the city", "Rights under a contract between the applicant and a previous creditor"],
            correctIndex: 0,
            explanation: "The regulation reaches good-faith exercise of any right under the Consumer Credit Protection Act or any State law on which the Bureau has granted an exemption.",
            sourceLessonSlug: "a-gate-that-must-state-a-standard",
          },
          {
            prompt: "Why does the lesson say the statement of reasons makes the prohibition checkable?",
            options: ["An unstated reason cannot be tested", "Because the reasons must be filed with the creditor's federal supervisor each quarter", "Because a stated reason binds the creditor to reconsider if the reason turns out false", "Because the statute requires the reasons to be identical for all applicants refused"],
            correctIndex: 0,
            explanation: "A refusal with no stated reason is unfalsifiable; a refusal naming its principal reasons can be compared against the file and against the prohibited-bases list.",
            sourceLessonSlug: "a-gate-that-must-state-a-standard",
          },
          {
            prompt: "The lesson names the disclosure as something other than a formality. What?",
            options: ["The enforcement mechanism", "A defence the creditor may raise if the applicant later brings a discrimination claim", "A record the consumer reporting agency retains for seven years from the decision", "A condition the creditor must satisfy before it may report the application to an agency"],
            correctIndex: 0,
            explanation: "The lesson makes the same point about the county committee's published statutory standard.",
            sourceLessonSlug: "a-gate-that-must-state-a-standard",
          },
          {
            prompt: "How many people sat on the federal farm credit committee, and what did they determine?",
            options: ["Three, eligibility and credit limits", "Five, eligibility only, with credit limits set by the state director's office", "Seven, credit limits only, with eligibility determined by the county supervisor", "Nine, neither, since the committee's role was advisory to the agency's lending staff"],
            correctIndex: 0,
            explanation: "Three individuals residing in the county, at least two of them farmers, determined both eligibility and the limits of credit to be extended.",
            sourceLessonSlug: "a-gate-that-must-state-a-standard",
          },
          {
            prompt: "Who elected the people who decide a consumer credit application, in the private version of the gate?",
            options: ["Nobody", "The creditor's shareholders, who appoint the underwriting committee each year", "The consumers of the product, through the creditor's published governance procedures", "The federal supervisor, which certifies each underwriter before they may decide files"],
            correctIndex: 0,
            explanation: "The private lender applies a standard it wrote itself using a model it bought on a file assembled by a company, and no election is involved anywhere.",
            sourceLessonSlug: "a-gate-that-must-state-a-standard",
          },
          {
            prompt: "Does the lesson claim the private arrangement is worse than the federal one?",
            options: ["No", "Yes, because the private standard is never published while the federal one was", "Yes, because the federal gate was subject to election and the private gate is not", "Yes, because the federal statute permitted appeal and the private notice does not"],
            correctIndex: 0,
            explanation: "The lesson says neither arrangement is obviously the better one and draws the shared property instead.",
            sourceLessonSlug: "a-gate-that-must-state-a-standard",
          },
          {
            prompt: "The lesson describes the same machine at two scales. What is the machine?",
            options: ["A gate that must state something", "A federal agency lending money to applicants no private lender would serve", "An eligibility test written by neighbours and applied to their own competitors", "A statistical model priced on the likelihood that an applicant will default"],
            correctIndex: 0,
            explanation: "One published its standard in advance and one must explain its application afterwards, but both are answerable in a way an unstated standard is not.",
            sourceLessonSlug: "a-gate-that-must-state-a-standard",
          },
          {
            prompt: "What can a stated reason be compared against, per the lesson?",
            options: ["The file and the prohibited-bases list", "The reasons the same creditor gave to the same applicant on a previous application", "The published cutoffs of the model developer whose score the creditor purchased", "The federal supervisor's most recent examination report on that creditor"],
            correctIndex: 0,
            explanation: "It can also be compared against the reasons other applicants were given, which is what makes the disclosure an enforcement mechanism.",
            sourceLessonSlug: "a-gate-that-must-state-a-standard",
          },
          {
            prompt: "Which document does the course cite for the abolition of the federal farm credit committees' eligibility role?",
            options: ["A 1996 Federal Register notice", "The Congressional Record for the debate on the 1994 reorganisation act", "A Congressional Research Service report published in January of 2021", "The Uniform Partition of Heirs Property Act as approved in the year 2010"],
            correctIndex: 0,
            explanation: "The Farm Service Agency recorded the change at 61 Fed. Reg. 16461, dated 15 April 1996.",
            sourceLessonSlug: "a-gate-that-must-state-a-standard",
          },
          {
            prompt: "Why does the lesson put the notice and the prohibition in the same envelope?",
            options: ["The reasons make the prohibition testable", "Because the statute requires both to be printed on a single sheet of paper", "Because a creditor that omits either one commits the same statutory violation", "Because the applicant must sign both before the decision becomes final"],
            correctIndex: 0,
            explanation: "The statement of reasons is what allows the prohibition to be checked, so the two provisions do one job between them.",
            sourceLessonSlug: "a-gate-that-must-state-a-standard",
          },
          {
            prompt: "What does Regulation B's phrase must be specific rule out?",
            options: ["A generic explanation", "An explanation given orally rather than in writing to the refused applicant", "An explanation naming more than four separate grounds for the decision", "An explanation the creditor supplies later than thirty days after the request"],
            correctIndex: 0,
            explanation: "The rule pairs specificity with the principal-reasons requirement, and names two generic formulations as insufficient.",
            sourceLessonSlug: "read-your-adverse-action-notice",
          },
          {
            prompt: "Under ECOA, a creditor may satisfy the statement-of-reasons duty in which two ways?",
            options: ["Send them, or offer the right to them", "Publish them on its website, or supply them to the supervising federal agency", "Give them to the applicant, or give them to the consumer reporting agency it used", "State them in the application form, or state them at the time of the interview"],
            correctIndex: 0,
            explanation: "Either provide statements of reasons in writing as a matter of course, or give written notification disclosing the right to a statement and where to obtain it.",
            sourceLessonSlug: "read-your-adverse-action-notice",
          },
          {
            prompt: "Where a third party asked a creditor to extend credit to an applicant, how may the notification be made?",
            options: ["Directly or through the third party", "Only directly, since the statute forbids delegation of the notification duty", "Only through the third party, which stands in the creditor's place for that purpose", "By publication, where the applicant's address cannot be established from the file"],
            correctIndex: 0,
            explanation: "The statute permits either route provided the identity of the creditor is disclosed.",
            sourceLessonSlug: "read-your-adverse-action-notice",
          },
          {
            prompt: "ECOA allows verbal statements or notifications for a creditor of what size?",
            options: ["Under 150 applications a year", "Under 500 applications a year, measured across all products the creditor offers", "Under 1,000 applications a year, as determined by the creditor's own records", "Any size, provided the applicant does not request written confirmation"],
            correctIndex: 0,
            explanation: "The statute allows it for a creditor that did not act on more than one hundred and fifty applications during the preceding calendar year.",
            sourceLessonSlug: "read-your-adverse-action-notice",
          },
          {
            prompt: "What does the lesson call the only point in the process where an institution must explain itself in writing?",
            options: ["The adverse action notice", "The risk-based pricing notice required when a consumer is priced less favourably", "The annual file disclosure the nationwide agencies must supply on request", "The reinvestigation result the agency sends after a consumer disputes an item"],
            correctIndex: 0,
            explanation: "It is a required disclosure with a defined content standard, on a timetable, in specific terms.",
            sourceLessonSlug: "read-your-adverse-action-notice",
          },
          {
            prompt: "In the two-notice structure, which institution supplies the reasons for the decision?",
            options: ["The creditor", "The consumer reporting agency, which holds the file the decision was based on", "The model developer, which built the scoring system the creditor applied", "The federal supervisor, which reviews the creditor's decisions on complaint"],
            correctIndex: 0,
            explanation: "The agency did not make the decision and cannot say why it went the way it did, which the notice itself has to state.",
            sourceLessonSlug: "the-second-notice-on-the-same-page",
          },
          {
            prompt: "In the same structure, which institution supplies the file?",
            options: ["The consumer reporting agency", "The creditor, which must retain a copy of the report for two years after deciding", "The furnisher, which supplied the items and can produce them on request", "The applicant, who must obtain and forward the report before applying"],
            correctIndex: 0,
            explanation: "The file comes from the agency under the FCRA, which is why the notice must name it and give its contact details.",
            sourceLessonSlug: "the-second-notice-on-the-same-page",
          },
          {
            prompt: "What does the lesson say most recipients of one of these letters fail to notice?",
            options: ["The seam", "That the letter carries a deadline for requesting a statement of specific reasons", "That the score disclosed is not the score any other lender would have used", "That the supervising agency named on the letter is not the creditor's regulator"],
            correctIndex: 0,
            explanation: "Two notices required by two different statutes are printed as one document.",
            sourceLessonSlug: "the-second-notice-on-the-same-page",
          },
          {
            prompt: "Which section of the FCRA governs the free copy the adverse action notice points to?",
            options: ["Section 1681j", "Section 1681g, the section governing what an agency must disclose on request", "Section 1681i, the section governing reinvestigation after a consumer dispute", "Section 1681b, the section listing the permissible purposes for furnishing a report"],
            correctIndex: 0,
            explanation: "The notice must indicate the 60-day period under section 1681j for obtaining a free copy from the agency named.",
            sourceLessonSlug: "the-second-notice-on-the-same-page",
          },
          {
            prompt: "Which section of the FCRA governs the dispute right the adverse action notice points to?",
            options: ["Section 1681i", "Section 1681s-2, which imposes duties on the furnishers that supply the information", "Section 1681m, the same section that imposes the notice duty on the user", "Section 1681c, which limits how long an adverse item may appear in a report"],
            correctIndex: 0,
            explanation: "The notice must state the right to dispute, under section 1681i, the accuracy or completeness of any information in the report.",
            sourceLessonSlug: "the-second-notice-on-the-same-page",
          },
          {
            prompt: "Which statute does the risk-based pricing notice come from?",
            options: ["The Fair Credit Reporting Act", "The Equal Credit Opportunity Act, through Regulation B's notification requirements", "The Truth in Lending Act, through Regulation Z's disclosure of the annual percentage rate", "The Real Estate Settlement Procedures Act, through the standardized loan disclosures"],
            correctIndex: 0,
            explanation: "It is implemented in Regulation V at 12 CFR 1022.72, which is the FCRA's implementing rule.",
            sourceLessonSlug: "the-second-notice-on-the-same-page",
          },
          {
            prompt: "The risk-based pricing rule applies to credit used primarily for which purposes?",
            options: ["Personal, family, or household", "Commercial or agricultural, matching the scope of the farm credit programmes", "Any purpose, since the rule turns on the use of a consumer report rather than the use of the credit", "Educational or medical, the two categories the rule names by way of example"],
            correctIndex: 0,
            explanation: "The rule reaches credit to that consumer that is primarily for personal, family, or household purposes.",
            sourceLessonSlug: "the-second-notice-on-the-same-page",
          },
          {
            prompt: "What does Section 4's cross-course lesson add that the statutes alone do not?",
            options: ["Scale", "A remedy the consumer can pursue in federal court against a private lender", "A definition of adverse action broader than the one Regulation B supplies", "A published list of the standards each large creditor applies to its applications"],
            correctIndex: 0,
            explanation: "The same demand, state your standard or state your reasons, appears at the level of a federal programme and at the level of one household's application.",
            sourceLessonSlug: "a-gate-that-must-state-a-standard",
          },
          {
            prompt: "Which fact about a creditor does the notice save the consumer from having to work out?",
            options: ["Which federal agency supervises it", "Which consumer reporting agency holds the most complete file on the consumer", "Which scoring model the creditor purchased and applied to the application", "Which of the creditor's products the applicant would have qualified for instead"],
            correctIndex: 0,
            explanation: "Regulation B requires the notification to name the federal agency that administers compliance with respect to that creditor.",
            sourceLessonSlug: "read-your-adverse-action-notice",
          },
          {
            prompt: "What is the relationship between the score disclosure in Section 3 and the one in the adverse action notice?",
            options: ["Same elements, different trigger", "The notice version omits the key factors, which are available only on request", "The notice version is supplied by the agency and the Section 3 version by the creditor", "The notice version covers every model the creditor holds a licence to run"],
            correctIndex: 0,
            explanation: "One arrives because you asked; the other arrives because a decision went against you.",
            sourceLessonSlug: "the-second-notice-on-the-same-page",
          },
          {
            prompt: "Under Regulation B, what must the notification state about the outcome itself?",
            options: ["The action taken", "The number of days the creditor spent evaluating the completed application", "The product the applicant would have qualified for on the information supplied", "The threshold the applicant would need to reach for a future application to succeed"],
            correctIndex: 0,
            explanation: "A statement of the action taken heads the list of contents the rule requires.",
            sourceLessonSlug: "read-your-adverse-action-notice",
          },
          {
            prompt: "What does the lesson say the private lender's standard is built from?",
            options: ["Its own rules, a bought model, a bought file", "A framework published by the federal supervisor and applied uniformly across the industry", "A test written by Congress and applied by an elected committee in the applicant's county", "A set of criteria the consumer reporting agencies publish and revise every year"],
            correctIndex: 0,
            explanation: "A standard it wrote itself, a model it bought, and a file assembled by a company, with no election anywhere in the chain.",
            sourceLessonSlug: "a-gate-that-must-state-a-standard",
          },
          {
            prompt: "What does the lesson identify as the useful property shared by a published standard and a required statement of reasons?",
            options: ["Both can be argued with", "Both are enforced by the same federal agency under the same statutory scheme", "Both must be produced before the decision is made rather than after it", "Both give the applicant a right to have the decision reviewed by a second decider"],
            correctIndex: 0,
            explanation: "A gate that must state something can be tested against what it stated; a gate that need not cannot.",
            sourceLessonSlug: "a-gate-that-must-state-a-standard",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 5 — Getting it wrong, and getting it fixed
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-dispute-and-the-clock",
      title: "17 · The dispute, and the clock it starts",
      section: "Section 5 · Getting it wrong, and getting it fixed",
      body: `A file with a wrong line in it is a decision with a wrong input. The statute's answer is a procedure with deadlines, and the deadlines are the part worth memorising.

**The core duty.** The FCRA says:

> "if the completeness or accuracy of any item of information contained in a consumer's file at a consumer reporting agency is disputed by the consumer and the consumer notifies the agency directly, or indirectly through a reseller, of such dispute, the agency shall, free of charge, conduct a reasonable reinvestigation to determine whether the disputed information is inaccurate and record the current status of the disputed information, or delete the item from the file in accordance with paragraph (5), before the end of the 30-day period beginning on the date on which the agency receives the notice of the dispute" (15 U.S.C. § 1681i, n.d.)

**Six things in that sentence, and each is a lever.**

**"Completeness or accuracy."** Not only errors. An item that is technically true and materially incomplete is disputable on the statute's own terms.

**"Any item of information."** Not only adverse items, and not only accounts.

**"The consumer notifies the agency."** The duty is triggered by notice from you. Nothing happens on its own.

**"Free of charge."** The reinvestigation costs you nothing, and the statute says so rather than leaving it to be negotiated.

**"A reasonable reinvestigation."** A standard, not a formality. What counts as reasonable is judged against what a reasonable investigation would have found.

**"Before the end of the 30-day period beginning on the date on which the agency receives the notice."** The clock starts on receipt, so the date you can prove the agency received your notice is the date that matters.

**The second clock, which is faster.** The agency does not investigate alone:

> "Before the expiration of the 5-business-day period beginning on the date on which a consumer reporting agency receives notice of a dispute from any consumer or a reseller in accordance with paragraph (1), the agency shall provide notification of the dispute to any person who provided any item of information in dispute, at the address and in the manner established with the person." (15 U.S.C. § 1681i, n.d.)

**That is the whole mechanism in one sentence.** Your dispute with the agency reaches the furnisher, within five business days, whether or not you ever contacted the furnisher yourself. The next lesson is about what the furnisher then owes.

**What happens at the end.** If the item is found inaccurate or incomplete, or cannot be verified:

> "If, after any reinvestigation under paragraph (1) of any information disputed by a consumer, an item of the information is found to be inaccurate or incomplete or cannot be verified, the consumer reporting agency shall—(i) promptly delete that item of information from the file of the consumer, or modify that item of information, as appropriate" (15 U.S.C. § 1681i, n.d.)

**Read "cannot be verified" carefully.** The item does not have to be proved false. If the reinvestigation cannot verify it, the same consequence follows. And the agency must then give the consumer written notice of the results, including a revised report, a description of the procedure used on request, the right to add a statement of dispute to the file, and the right to request that notice of the deletion or change be sent to certain parties (15 U.S.C. § 1681i, n.d.).

:::reveal How long does a consumer reporting agency have to complete a reinvestigation, and when does the clock start? ||| Thirty days, beginning on the date the agency receives the notice of the dispute.

:::reveal Within how long must the agency notify the party that supplied the disputed item? ||| Five business days from receipt of the dispute.

:::reveal What are the three findings that require an agency to delete or modify an item? ||| That it is inaccurate, that it is incomplete, or that it cannot be verified.

## Vocabulary
- **Reinvestigation**: the reasonable, free investigation the FCRA requires an agency to conduct into a disputed item within thirty days of receiving notice.
- **Completeness or accuracy**: the two grounds of dispute the statute names, so a technically true but materially incomplete item is disputable.
- **Cannot be verified**: the third outcome that triggers deletion or modification, which does not require the consumer to prove the item false.
- **Statement of dispute**: the consumer's own account of the disagreement, which the statute allows to be added to the file after a reinvestigation.

## Sources
15 U.S.C. § 1681i. (n.d.). *Procedure in case of disputed accuracy*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/15/1681i

15 U.S.C. § 1681m. (n.d.). *Requirements on users of consumer reports*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/15/1681m`,
    },
    {
      slug: "the-furnisher-has-duties-too",
      title: "18 · The furnisher has duties too, and that is the leverage",
      section: "Section 5 · Getting it wrong, and getting it fixed",
      body: `The common mistake is to think of a dispute as an argument with the agency. It is not. It is a procedure that reaches the company that put the item there.

**What the furnisher owes on notice of a dispute.** The FCRA sets out the duty in five parts:

> "(A) conduct an investigation with respect to the disputed information; (B) review all relevant information provided by the consumer reporting agency pursuant to section 1681i(a)(2) of this title; (C) report the results of the investigation to the consumer reporting agency" (15 U.S.C. § 1681s-2, n.d.)

and, where the investigation finds the item incomplete or inaccurate, the furnisher must report that finding to the other nationwide agencies as well, and:

> "promptly modify that item of information; delete that item of information; or permanently block the reporting of that item of information." (15 U.S.C. § 1681s-2, n.d.)

**Three consequences that change how you would go about this.**

**First, one dispute moves two institutions.** You file with the agency; the agency notifies the furnisher inside five business days; the furnisher must investigate and report back. You do not have to run two separate processes to get two parties working.

**Second, a finding travels.** If the furnisher's investigation shows the item incomplete or inaccurate, the duty is to tell the nationwide agencies, not only the one that asked. The whole point of that provision is that a corrected item should not survive at the other agencies simply because nobody wrote to them.

**Third, the furnisher's three remedies are named.** Modify, delete, or permanently block. Not "annotate", not "review at the next cycle".

**And the upstream duty from Section 2 still applies.** A furnisher may not report information it knows or has reasonable cause to believe is inaccurate (15 U.S.C. § 1681s-2, n.d.). So a furnisher that has already investigated and found an item wrong is in a different position from one that has never looked.

**Why this is called leverage.** The agency did not create the item and, in most cases, has no independent knowledge of it. The furnisher does. A dispute filed with the agency is the mechanism that compels the party with the knowledge to look, on a clock, and to report what it found. **That is a structural advantage the consumer has, and almost nobody uses it deliberately.**

**One thing this course will not tell you.** It will not tell you how to word a dispute, what to include, or when disputing is a good idea in your situation. Those are decisions about your record and your circumstances, and they belong to you. **This course is information about how the procedure works, not advice about whether to use it.** What it can tell you is that the procedure has deadlines, that the deadlines run from receipt, and that the consequences of an unverifiable item are the same as those of a false one.

:::reveal Which three things must a furnisher do on receiving notice of a dispute from an agency? ||| Investigate the disputed information, review all relevant information the agency provided, and report the results back to the agency.

:::reveal What must a furnisher do if its investigation finds an item incomplete or inaccurate? ||| Report that to the nationwide agencies, and promptly modify, delete, or permanently block the reporting of the item.

:::reveal Why is a dispute filed with the agency described as leverage? ||| Because it compels the furnisher, which is the party with the actual knowledge of the item, to investigate on a clock and report back.

## Vocabulary
- **Furnisher investigation**: the inquiry a furnisher must conduct once an agency notifies it of a consumer dispute, distinct from the agency's own reinvestigation.
- **Permanent block**: one of the three remedies the statute names for a furnisher whose investigation finds an item inaccurate, incomplete or unverifiable.
- **Travelling finding**: the requirement that a furnisher report an incomplete or inaccurate finding to the nationwide agencies rather than only to the one that raised the dispute.
- **Upstream duty**: the separate prohibition on furnishing information the furnisher knows or has reasonable cause to believe is inaccurate.

## Sources
15 U.S.C. § 1681s-2. (n.d.). *Responsibilities of furnishers of information to consumer reporting agencies*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/15/1681s-2

15 U.S.C. § 1681i. (n.d.). *Procedure in case of disputed accuracy*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/15/1681i`,
    },
    {
      slug: "getting-your-own-file",
      title: "19 · Getting your own file, and the site the regulation does not name",
      section: "Section 5 · Getting it wrong, and getting it fixed",
      body: `None of the previous two lessons is usable until you have the document. The statute gives you a floor, and the floor is worth knowing exactly.

**The statutory floor.** The FCRA says:

> "All consumer reporting agencies described in subsections (p) and (w) of section 1681a of this title shall make all disclosures pursuant to section 1681g of this title once during any 12-month period upon request of the consumer and without charge to the consumer." (15 U.S.C. § 1681j, n.d.)

**Once during any 12-month period, from each such agency, without charge.** That is the guarantee. It is a floor, not a ceiling: nothing in it prevents an agency from offering more, and the free copy that follows an adverse action, from Section 4, is a separate entitlement with its own 60-day clock.

**How you are supposed to ask.** Regulation V requires the nationwide agencies to build a shared front door:

> "All nationwide consumer reporting agencies shall jointly design, fund, implement, maintain, and operate a centralized source" (12 CFR § 1022.136, n.d.)

whose purpose is:

> "to enable consumers to make a single request to obtain annual file disclosures from all nationwide consumer reporting agencies, as required under section 612(a) of the FCRA" (12 CFR § 1022.136, n.d.)

and which must:

> "Enable consumers to request annual file disclosures by any of the following request methods, at the consumers' option: (i) A single, dedicated Web site, (ii) A single, dedicated toll-free telephone number; and (iii) Mail directed to a single address" (12 CFR § 1022.136, n.d.)

**Here is the detail almost every explanation of this gets wrong.** The regulation requires a single dedicated website and a single dedicated toll-free number. **It does not print the address of either.** So the URL is not in the rule, and anyone who tells you it is has not read the rule.

**Where the address actually comes from.** It comes from the agencies that administer and explain the statute. The Consumer Financial Protection Bureau's own consumer page, "How do I get a free copy of my credit reports?", names it, saying to visit **AnnualCreditReport.com** or call **(877) 322-8228**, and describing the entitlement as one free copy of your credit report each year from each of the three major consumer reporting companies (Consumer Financial Protection Bureau, 2023). **That page carries its own last-reviewed date of 28 August 2023, and this course read it on 28 August 2026.** Both dates are printed here on purpose, because a page reviewed three years before you read it is a page to re-check rather than a page to trust blindly.

**The same page also says something this course will repeat rather than resolve.** It notes that you may be able to view reports more often than the statutory floor. That is a company practice, not a statutory right, and company practices change without notice. **The floor is the thing to rely on. Anything above it is a bonus that may or may not be there when you look.**

**And the disclaimer, said again where it belongs.** This lesson tells you what the law guarantees and where the federal agency that explains the law says to go. **It does not tell you what to do with the document, whether to dispute anything in it, or how to manage your finances.** This course gives no financial advice, and the free non-commercial routes named here are named because they are the ones a federal agency publishes, not because this course is recommending a service.

:::reveal What is the FCRA's statutory floor for free file disclosures? ||| Once during any 12-month period, on request, without charge, from each nationwide agency and each nationwide specialty agency.

:::reveal What does Regulation V require the nationwide agencies to build, and what does the rule NOT contain? ||| A jointly funded centralized source reachable by a single website, a single toll-free number and a single mailing address. The rule does not print the address of any of them.

:::reveal Why does this lesson print two separate dates for the CFPB page? ||| Because the page's own last-reviewed date and the date this course read it are different facts, and a reader needs both to judge how stale the page may be.

## Vocabulary
- **Free annual file disclosure**: the FCRA entitlement to all section 1681g disclosures once in any 12-month period, on request, without charge.
- **Centralized source**: the jointly designed, funded and operated front door Regulation V requires the nationwide agencies to provide, reachable by website, toll-free number or mail.
- **Statutory floor**: the minimum the law guarantees, as distinct from whatever a company happens to be offering at the moment you look.
- **Nationwide specialty consumer reporting agency**: the further category at section 1681a(w) that the free-disclosure duty also reaches, alongside the nationwide agencies.

## Sources
15 U.S.C. § 1681j. (n.d.). *Charges for certain disclosures*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/15/1681j

12 CFR § 1022.136. (n.d.). *Centralized source for requesting annual file disclosures from nationwide consumer reporting agencies*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/1022.136

Consumer Financial Protection Bureau. (2023, August 28). *How do I get a free copy of my credit reports?* https://www.consumerfinance.gov/ask-cfpb/how-do-i-get-a-copy-of-my-credit-reports-en-5/`,
    },
    {
      slug: "quiz-the-dispute",
      title: "20 · Knowledge check: getting it wrong, and getting it fixed",
      section: "Section 5 · Getting it wrong, and getting it fixed",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "How long does a consumer reporting agency have to complete a reinvestigation of a disputed item?",
            options: ["30 days", "Five business days, which is the period for notifying the party that supplied the item", "Sixty days, matching the window in which a free copy may be claimed after adverse action", "Ninety days, which the statute extends to one hundred and twenty for public record items"],
            correctIndex: 0,
            explanation: "The period runs to the end of the 30-day period beginning on the date the agency receives the notice of dispute.",
            sourceLessonSlug: "the-dispute-and-the-clock",
          },
          {
            prompt: "From what event does the FCRA's reinvestigation clock begin?",
            options: ["Receipt of the notice", "The date the consumer posted the dispute, as shown by the postmark on the envelope", "The date the disputed item was first furnished to the agency by the creditor", "The date the agency completes its own preliminary review of the consumer's file"],
            correctIndex: 0,
            explanation: "The statute measures from the date on which the agency receives the notice of the dispute, which is why provable receipt matters.",
            sourceLessonSlug: "the-dispute-and-the-clock",
          },
          {
            prompt: "What does the FCRA say the reinvestigation must cost the consumer?",
            options: ["Nothing", "A reasonable fee, which the agency may set and must publish in advance", "Nothing for the first dispute in any year and a fee for each dispute after that", "The cost of obtaining the file, which the agency may deduct from the free disclosure"],
            correctIndex: 0,
            explanation: "The statute says free of charge, rather than leaving the point to be negotiated.",
            sourceLessonSlug: "the-dispute-and-the-clock",
          },
          {
            prompt: "On what two grounds may a consumer dispute an item under section 1681i?",
            options: ["Completeness or accuracy", "Age or origin, meaning items too old to report or supplied by an unauthorised party", "Relevance or materiality, meaning items that did not affect the decision complained of", "Ownership or authorship, meaning items belonging to another consumer entirely"],
            correctIndex: 0,
            explanation: "The statute reaches the completeness or accuracy of any item of information in the consumer's file.",
            sourceLessonSlug: "the-dispute-and-the-clock",
          },
          {
            prompt: "Why does the completeness ground matter separately from the accuracy ground?",
            options: ["A true item can be incomplete", "Because incompleteness is judged by the agency and accuracy by the furnisher", "Because an incomplete item carries a shorter reporting period than an inaccurate one", "Because only completeness disputes require notification of the furnisher"],
            correctIndex: 0,
            explanation: "An item that is technically true and materially incomplete is disputable on the statute's own terms.",
            sourceLessonSlug: "the-dispute-and-the-clock",
          },
          {
            prompt: "Which items may a consumer dispute under the statute?",
            options: ["Any item in the file", "Only adverse items, since a favourable item cannot injure the consumer's interests", "Only account items, since public records must be corrected at the courthouse instead", "Only items furnished within the preceding twenty-four months"],
            correctIndex: 0,
            explanation: "The provision reaches any item of information contained in a consumer's file, not only adverse items and not only accounts.",
            sourceLessonSlug: "the-dispute-and-the-clock",
          },
          {
            prompt: "What standard does the FCRA set for the agency's investigation?",
            options: ["A reasonable reinvestigation", "A complete audit of every item in the consumer's file, conducted by an independent party", "A confirmation from the furnisher that the item as reported matches the furnisher's records", "A review of the documentation the consumer supplies, and nothing further"],
            correctIndex: 0,
            explanation: "It is a standard rather than a formality, judged against what a reasonable investigation would have found.",
            sourceLessonSlug: "the-dispute-and-the-clock",
          },
          {
            prompt: "Within what period must an agency notify the party that supplied a disputed item?",
            options: ["Five business days", "Thirty days, the same period allowed for completing the reinvestigation itself", "Ten calendar days, measured from the date the consumer's notice was posted", "Immediately, since the statute sets no period and requires notice on receipt"],
            correctIndex: 0,
            explanation: "The period runs from the date the agency receives notice of the dispute, and the notice goes to the address and in the manner established with that person.",
            sourceLessonSlug: "the-dispute-and-the-clock",
          },
          {
            prompt: "Must a consumer contact the furnisher separately for the furnisher to be put on notice?",
            options: ["No", "Yes, because the agency's duty is limited to reviewing its own records for the item", "Yes, unless the furnisher is a nationwide bank supervised by a federal regulator", "Yes, and the consumer must supply proof of that contact to the agency within ten days"],
            correctIndex: 0,
            explanation: "The agency must notify any person who provided any item of information in dispute, within five business days.",
            sourceLessonSlug: "the-dispute-and-the-clock",
          },
          {
            prompt: "Which three findings require an agency to delete or modify an item after reinvestigation?",
            options: ["Inaccurate, incomplete, or unverifiable", "Disputed, adverse, or older than the applicable reporting period for its category", "Furnished in error, furnished twice, or furnished by an unregistered furnisher", "Proved false, admitted false, or withdrawn by the furnisher on request"],
            correctIndex: 0,
            explanation: "If the item is found inaccurate or incomplete, or cannot be verified, the agency must promptly delete or modify it as appropriate.",
            sourceLessonSlug: "the-dispute-and-the-clock",
          },
          {
            prompt: "What is the significance of the phrase cannot be verified?",
            options: ["No proof of falsity is needed", "It applies only to items drawn from public records rather than from furnishers", "It permits the agency to leave the item in place with a notation of the dispute", "It extends the reinvestigation period by a further thirty days automatically"],
            correctIndex: 0,
            explanation: "An unverifiable item carries the same consequence as a false one, which is a materially different starting position for the consumer.",
            sourceLessonSlug: "the-dispute-and-the-clock",
          },
          {
            prompt: "Which of these must the agency's written notice of results include, on request?",
            options: ["A description of the procedure used", "The name of the employee who conducted the reinvestigation of the disputed item", "A copy of every document the furnisher supplied during the investigation", "An estimate of the effect the change will have on the consumer's credit score"],
            correctIndex: 0,
            explanation: "The notice covers completion, a revised report, a description of the procedure on request, the right to add a statement of dispute, and the right to request notifications.",
            sourceLessonSlug: "the-dispute-and-the-clock",
          },
          {
            prompt: "What is a statement of dispute, in the FCRA's scheme?",
            options: ["The consumer's own account, added to the file", "A formal complaint filed with the federal agency that supervises the furnisher", "A certification by the agency that the item has been investigated and verified", "A notice the furnisher must send to every other agency holding the same item"],
            correctIndex: 0,
            explanation: "The statute gives the consumer the right to add it to the file after a reinvestigation.",
            sourceLessonSlug: "the-dispute-and-the-clock",
          },
          {
            prompt: "How may a consumer notify an agency of a dispute, under the statute's own words?",
            options: ["Directly, or through a reseller", "Only in writing, by mail, to the address the agency publishes for that purpose", "Only through the creditor that furnished the item to the agency originally", "Only through the federal agency that supervises the consumer reporting agency"],
            correctIndex: 0,
            explanation: "The provision reaches a consumer who notifies the agency directly, or indirectly through a reseller.",
            sourceLessonSlug: "the-dispute-and-the-clock",
          },
          {
            prompt: "What does the lesson say a file with a wrong line in it amounts to?",
            options: ["A decision with a wrong input", "A violation of the furnisher's duty that entitles the consumer to statutory damages", "An item the agency must delete without conducting any investigation at all", "A permissible-purpose breach by whoever obtained the report containing it"],
            correctIndex: 0,
            explanation: "Which is why the correction procedure is the load-bearing remedy in the whole scheme.",
            sourceLessonSlug: "the-dispute-and-the-clock",
          },
          {
            prompt: "What triggers the agency's reinvestigation duty?",
            options: ["Notice from the consumer", "The agency's own periodic audit of the files it maintains on consumers", "A request from the creditor that most recently obtained the consumer's report", "The expiry of the reporting period applicable to the item in question"],
            correctIndex: 0,
            explanation: "Nothing happens on its own; the duty is triggered by the consumer notifying the agency.",
            sourceLessonSlug: "the-dispute-and-the-clock",
          },
          {
            prompt: "Which three duties does the FCRA impose on a furnisher notified of a dispute?",
            options: ["Investigate, review, report back", "Delete, notify the consumer, and refund any fees the consumer has paid", "Suspend reporting, notify its regulator, and await instructions from the agency", "Contact the consumer, obtain documentation, and re-furnish the item as corrected"],
            correctIndex: 0,
            explanation: "Conduct an investigation, review all relevant information the agency provided, and report the results of the investigation to the agency.",
            sourceLessonSlug: "the-furnisher-has-duties-too",
          },
          {
            prompt: "What information must a furnisher review as part of its investigation?",
            options: ["What the agency provided", "Only its own internal records relating to the account in question", "Only the documentation the consumer attached to the original dispute", "Only the information the item's original creditor supplied when the account was opened"],
            correctIndex: 0,
            explanation: "The statute requires review of all relevant information provided by the consumer reporting agency under section 1681i(a)(2).",
            sourceLessonSlug: "the-furnisher-has-duties-too",
          },
          {
            prompt: "What are the three remedies a furnisher must apply when its investigation finds an item wrong?",
            options: ["Modify, delete, or permanently block", "Annotate, suspend, or re-verify at the next monthly reporting cycle", "Refund, apologise, or refer the matter to its own compliance department", "Notify the consumer, notify the agency, or notify the federal supervisor"],
            correctIndex: 0,
            explanation: "The statute names promptly modify, delete, or permanently block the reporting of that item of information.",
            sourceLessonSlug: "the-furnisher-has-duties-too",
          },
          {
            prompt: "Where must a furnisher report a finding that an item is incomplete or inaccurate?",
            options: ["To the nationwide agencies", "Only to the agency that raised the dispute with the furnisher in the first place", "To the federal agency that supervises the furnisher's lending operations", "To the consumer directly, in writing, within five business days of the finding"],
            correctIndex: 0,
            explanation: "The point of that provision is that a corrected item should not survive elsewhere simply because nobody wrote to the other agencies.",
            sourceLessonSlug: "the-furnisher-has-duties-too",
          },
          {
            prompt: "What is the common mistake the lesson identifies about disputes?",
            options: ["Treating it as an argument with the agency", "Believing a dispute must be filed within thirty days of the item first appearing", "Believing a dispute freezes the item so that no user may see it while it is open", "Believing a dispute must be accompanied by documentary proof to be effective"],
            correctIndex: 0,
            explanation: "It is a procedure that reaches the company that put the item there, which is where the knowledge sits.",
            sourceLessonSlug: "the-furnisher-has-duties-too",
          },
          {
            prompt: "How many institutions does one dispute set to work, in the lesson's account?",
            options: ["Two", "One, since the agency conducts the entire reinvestigation using its own records", "Three, because the federal supervisor must also review the disputed item", "Four, counting the agency, the furnisher, the supervisor and the model developer"],
            correctIndex: 0,
            explanation: "You file with the agency, and the agency's five-business-day notice pulls the furnisher in.",
            sourceLessonSlug: "the-furnisher-has-duties-too",
          },
          {
            prompt: "Why does the lesson call the dispute procedure a structural advantage?",
            options: ["It compels the knowledgeable party to look", "Because the statute presumes a disputed item to be inaccurate until verified", "Because the consumer may recover a statutory penalty for every day of delay", "Because the agency must suppress the item from all users while the dispute is open"],
            correctIndex: 0,
            explanation: "The agency mostly has no independent knowledge of the item; the furnisher does, and the procedure makes it look on a clock.",
            sourceLessonSlug: "the-furnisher-has-duties-too",
          },
          {
            prompt: "How does the upstream furnishing duty interact with the dispute duty?",
            options: ["A furnisher that has looked cannot claim ignorance", "The two duties are alternatives, and a furnisher may elect which one to comply with", "The upstream duty is suspended for any item that is the subject of a live dispute", "The upstream duty applies only to items furnished after the dispute is resolved"],
            correctIndex: 0,
            explanation: "A furnisher that has investigated and found an item wrong is in a different position from one that has never looked.",
            sourceLessonSlug: "the-furnisher-has-duties-too",
          },
          {
            prompt: "Which of these will this course NOT tell a reader about disputes?",
            options: ["Whether to file one", "The period within which an agency must complete its reinvestigation", "The date from which the reinvestigation period is measured under the statute", "The consequence when a disputed item cannot be verified by the investigation"],
            correctIndex: 0,
            explanation: "How to word a dispute, what to include, and whether to file are decisions about a reader's own record and circumstances.",
            sourceLessonSlug: "the-furnisher-has-duties-too",
          },
          {
            prompt: "How does the lesson describe the difference between what it offers and advice?",
            options: ["How the procedure works, not whether to use it", "Federal rules rather than State rules, which vary too much to summarise", "Written rules rather than industry practice, which is not published anywhere", "Current rules rather than historical ones, which have changed repeatedly"],
            correctIndex: 0,
            explanation: "It is information about a mechanism, and the decision to use the mechanism belongs to the reader.",
            sourceLessonSlug: "the-furnisher-has-duties-too",
          },
          {
            prompt: "What is the FCRA's floor for free file disclosures from a nationwide agency?",
            options: ["Once in any 12-month period", "Twice in any calendar year, once in each half of the year on written request", "Once in any 24-month period, unless the consumer has been refused credit", "Unlimited, provided each request is made in writing and separately signed"],
            correctIndex: 0,
            explanation: "The statute requires all section 1681g disclosures once during any 12-month period on request and without charge.",
            sourceLessonSlug: "getting-your-own-file",
          },
          {
            prompt: "Which categories of agency does the free annual disclosure duty reach?",
            options: ["Nationwide and nationwide specialty agencies", "Every consumer reporting agency of any size operating anywhere in the country", "Only the three largest agencies, as designated annually by the supervising body", "Only agencies that have furnished a report about the consumer in the past year"],
            correctIndex: 0,
            explanation: "The provision names agencies described in subsections (p) and (w) of section 1681a.",
            sourceLessonSlug: "getting-your-own-file",
          },
          {
            prompt: "Is the annual free disclosure a floor or a ceiling?",
            options: ["A floor", "A ceiling, so an agency that offers more than one free copy violates the statute", "Neither, since the number is set by each agency's own published terms of service", "A ceiling for nationwide agencies and a floor for nationwide specialty agencies"],
            correctIndex: 0,
            explanation: "Nothing in it prevents an agency from offering more, and the post-adverse-action free copy is a separate entitlement.",
            sourceLessonSlug: "getting-your-own-file",
          },
          {
            prompt: "What does Regulation V require the nationwide agencies to build together?",
            options: ["A centralized source", "A shared database in which all three agencies maintain a single consumer file", "A joint dispute-resolution board with an independent chair appointed by the Bureau", "A published register of every user that has obtained a report in the past year"],
            correctIndex: 0,
            explanation: "They must jointly design, fund, implement, maintain and operate it.",
            sourceLessonSlug: "getting-your-own-file",
          },
          {
            prompt: "What is the stated purpose of the centralized source?",
            options: ["A single request reaching all of them", "To let consumers compare the three files side by side in one document", "To let the agencies verify a consumer's identity before releasing any file", "To let a creditor obtain all three reports in one transaction at one price"],
            correctIndex: 0,
            explanation: "The rule says it is to enable consumers to make a single request to obtain annual file disclosures from all nationwide consumer reporting agencies.",
            sourceLessonSlug: "getting-your-own-file",
          },
          {
            prompt: "Which three request methods must the centralized source support?",
            options: ["A website, a toll-free number, and mail", "A website, an email address, and an in-person appointment at a branch office", "A toll-free number, a mobile application, and a request through the consumer's bank", "Mail, fax, and a request submitted through a creditor the consumer holds an account with"],
            correctIndex: 0,
            explanation: "A single dedicated website, a single dedicated toll-free telephone number, and mail directed to a single address, at the consumer's option.",
            sourceLessonSlug: "getting-your-own-file",
          },
          {
            prompt: "What does 12 CFR 1022.136 NOT contain, which most explanations of it assume?",
            options: ["The website address", "Any requirement that the source be free to use for the consumer requesting a file", "Any obligation on the agencies to fund the source jointly rather than separately", "Any reference to the FCRA provision the source exists to implement"],
            correctIndex: 0,
            explanation: "The rule requires a single dedicated website and toll-free number without printing the address of either.",
            sourceLessonSlug: "getting-your-own-file",
          },
          {
            prompt: "Where does this course say the actual address comes from?",
            options: ["The agency that explains the statute", "The consumer reporting agencies' own terms of service, published on their websites", "The Federal Register notice in which the centralized source was first authorised", "The adverse action notice, which must name the site whenever a report was used"],
            correctIndex: 0,
            explanation: "The lesson takes it from the Consumer Financial Protection Bureau's own consumer page and dates the reading.",
            sourceLessonSlug: "getting-your-own-file",
          },
          {
            prompt: "Which two dates does the lesson print for the CFPB page, and why?",
            options: ["Its review date and the date it was read", "Its publication date and the date the statute it explains was last amended", "The date of the rule and the date the centralized source began operating", "The date of the last dispute and the date the reinvestigation was completed"],
            correctIndex: 0,
            explanation: "A page reviewed three years before you read it is a page to re-check rather than to trust blindly, and both facts are needed to see that.",
            sourceLessonSlug: "getting-your-own-file",
          },
          {
            prompt: "The CFPB page notes that reports may be viewable more often than the floor. How does this course treat that?",
            options: ["As practice, not a right", "As a statutory entitlement the agencies may not lawfully withdraw once offered", "As a rule change that supersedes the twelve-month period in the statute", "As an error on the page, since the statute permits only one free copy a year"],
            correctIndex: 0,
            explanation: "Company practices change without notice, so the floor is the thing to rely on and anything above it is a bonus.",
            sourceLessonSlug: "getting-your-own-file",
          },
          {
            prompt: "What does the disclaimer in this lesson say about the free routes it names?",
            options: ["Named because a federal agency publishes them", "Named because they are cheaper than the commercial alternatives available", "Named because the statute requires an educational publisher to identify them", "Named because the course has evaluated them against the commercial services"],
            correctIndex: 0,
            explanation: "They are named as the routes a federal agency publishes, not as a recommendation of any service.",
            sourceLessonSlug: "getting-your-own-file",
          },
          {
            prompt: "How does the free copy after adverse action relate to the annual free disclosure?",
            options: ["It is a separate entitlement", "It replaces the annual disclosure for that twelve-month period once claimed", "It is the same entitlement, claimable early where a decision has gone against you", "It is available only to consumers who have not already used the annual disclosure"],
            correctIndex: 0,
            explanation: "It has its own 60-day clock under section 1681j, as the adverse action notice itself has to state.",
            sourceLessonSlug: "getting-your-own-file",
          },
          {
            prompt: "Why does the lesson say none of the dispute material is usable until you have the document?",
            options: ["You cannot dispute what you cannot read", "Because the statute requires a copy of the file to accompany every dispute filed", "Because the agency will not accept a dispute from a consumer who has not paid a fee", "Because the reinvestigation clock does not start until the file has been disclosed"],
            correctIndex: 0,
            explanation: "The correction procedure operates on specific items, and the items are in the file.",
            sourceLessonSlug: "getting-your-own-file",
          },
          {
            prompt: "Which section of the FCRA does the centralized source implement, per the regulation's own words?",
            options: ["Section 612(a)", "Section 611, the reinvestigation provision codified at 15 U.S.C. 1681i", "Section 615, the user duties provision codified at 15 U.S.C. 1681m", "Section 604, the permissible purposes provision codified at 15 U.S.C. 1681b"],
            correctIndex: 0,
            explanation: "The rule states the purpose is to enable a single request as required under section 612(a) of the FCRA, which is codified at 15 U.S.C. 1681j.",
            sourceLessonSlug: "getting-your-own-file",
          },
          {
            prompt: "What is the toll-free number the CFPB page names for the centralized source?",
            options: ["(877) 322-8228", "(800) 685-1111, the number the largest nationwide agency publishes for consumers", "(888) 397-3742, the number published for disputes rather than for file requests", "The number is not published by any federal agency and must be obtained from the site"],
            correctIndex: 0,
            explanation: "The CFPB page names both the website and that number, and this course records reading the page on 28 August 2026.",
            sourceLessonSlug: "getting-your-own-file",
          },
          {
            prompt: "How does the CFPB page describe the annual entitlement, in the words this course quotes?",
            options: ["One free copy each year from each of three companies", "Three free copies each year, claimable from any of the nationwide agencies", "One free copy each year, shared across all three nationwide agencies together", "Unlimited free copies, subject to identity verification at each request"],
            correctIndex: 0,
            explanation: "The page describes a right to request one free copy of your credit report each year from each of the three major consumer reporting companies.",
            sourceLessonSlug: "getting-your-own-file",
          },
          {
            prompt: "In the lesson's framing, what is the relationship between a statutory floor and a company practice?",
            options: ["One is reliable, one may vanish", "The practice controls, because it is what the consumer actually encounters", "The floor controls, and any practice above it is unlawful under the statute", "They are the same thing, since the agencies write the rules they operate under"],
            correctIndex: 0,
            explanation: "The floor is what the law guarantees; anything above it is a bonus that may or may not be there when you look.",
            sourceLessonSlug: "getting-your-own-file",
          },
          {
            prompt: "What is a reseller, in the context of the FCRA's dispute provision?",
            options: ["An indirect route for the consumer's notice", "A furnisher that supplies items to more than one nationwide agency at once", "A creditor that buys a report and then sells its decision to another lender", "A model developer that licenses its scoring system to multiple agencies"],
            correctIndex: 0,
            explanation: "The statute lets a consumer notify the agency directly, or indirectly through a reseller.",
            sourceLessonSlug: "the-dispute-and-the-clock",
          },
          {
            prompt: "What does the agency have to send the consumer once a reinvestigation is complete?",
            options: ["Written notice of the results", "An oral summary, with written confirmation only if the consumer requests it", "A certificate of accuracy signed by an officer of the consumer reporting agency", "A copy of the furnisher's investigation file, including its internal correspondence"],
            correctIndex: 0,
            explanation: "The notice includes a statement of completion and a revised consumer report, among the other listed items.",
            sourceLessonSlug: "the-dispute-and-the-clock",
          },
          {
            prompt: "Which right does the FCRA give a consumer about notifying others after a change?",
            options: ["To request notification of the change", "To require every user of the report to reconsider its decision within thirty days", "To have the agency publish a correction in a general circulation newspaper", "To have the furnisher write directly to the consumer confirming the deletion"],
            correctIndex: 0,
            explanation: "The results notice must include the right to request notifications under subsection (d) of the section.",
            sourceLessonSlug: "the-dispute-and-the-clock",
          },
          {
            prompt: "Section 5's three lessons take the reader through which sequence?",
            options: ["Get the file, dispute the item, reach the furnisher", "Contact the creditor, appeal the decision, complain to the supervisor", "Request the score, compare the models, choose the most favourable one", "Read the notice, request the reasons, apply again on better terms"],
            correctIndex: 0,
            explanation: "The document comes first, because the correction procedure operates on specific items in it.",
            sourceLessonSlug: "getting-your-own-file",
          },
          {
            prompt: "What does the lesson mean when it says the deadlines are the part worth memorising?",
            options: ["They convert a right into a date", "They limit how long a consumer may wait before filing any dispute at all", "They set the period after which an unverified item must be treated as accurate", "They determine which of the nationwide agencies has to answer the dispute first"],
            correctIndex: 0,
            explanation: "Thirty days for the reinvestigation from receipt, and five business days for the notice to the furnisher, are the two checkable facts in the whole procedure.",
            sourceLessonSlug: "the-dispute-and-the-clock",
          },
          {
            prompt: "What does the furnisher's duty on receipt of a dispute have that the agency's own duty does not?",
            options: ["Direct knowledge of the item", "A statutory deadline expressed in business days rather than in calendar days", "An obligation to communicate its findings directly to the consumer in writing", "A right to charge the consumer a reasonable fee for the investigation performed"],
            correctIndex: 0,
            explanation: "The furnisher created the item, which is why the procedure that compels it to look is the leverage in the scheme.",
            sourceLessonSlug: "the-furnisher-has-duties-too",
          },
          {
            prompt: "What does the lesson say about running two separate processes against agency and furnisher?",
            options: ["You do not have to", "You must, because the two statutes create entirely separate procedures", "You may not, because a duplicate dispute is treated as frivolous by the agency", "You should, because the furnisher's deadline is shorter than the agency's"],
            correctIndex: 0,
            explanation: "One dispute moves two institutions, because the agency's five-business-day notice pulls the furnisher in.",
            sourceLessonSlug: "the-furnisher-has-duties-too",
          },
          {
            prompt: "Which of these describes the FCRA's treatment of an item the agency simply cannot check?",
            options: ["Same outcome as a false item", "It stays in the file with a notation that verification was attempted and failed", "It is suppressed for six months and then restored if nobody objects again", "It is referred to the federal supervisor for a determination on the merits"],
            correctIndex: 0,
            explanation: "Inaccurate, incomplete or unverifiable all lead to prompt deletion or modification as appropriate.",
            sourceLessonSlug: "the-dispute-and-the-clock",
          },
          {
            prompt: "How does Section 5 relate to Section 4, in the course's structure?",
            options: ["The notice names these two steps", "It substitutes a different remedy for the one the adverse action notice describes", "It applies only where no adverse action notice was received by the consumer", "It repeats Section 4's material from the consumer reporting agency's perspective"],
            correctIndex: 0,
            explanation: "The FCRA's adverse action duties require the user to name the free copy on a 60-day clock and the dispute right, which are exactly these lessons.",
            sourceLessonSlug: "getting-your-own-file",
          },
          {
            prompt: "In the lesson's phrase, what does the statute give a consumer about free file access?",
            options: ["A floor worth knowing exactly", "A schedule of fees the agencies may charge for each additional copy requested", "A discretion the agencies exercise according to their own published policies", "A right that expires if it is not exercised within the calendar year it arises"],
            correctIndex: 0,
            explanation: "Once in any twelve-month period, on request, without charge, from each covered agency.",
            sourceLessonSlug: "getting-your-own-file",
          },
          {
            prompt: "Why does the lesson describe the regulation's silence about the URL as a detail worth stating?",
            options: ["It shows who is actually the source", "It shows the rule is out of date and awaiting amendment by the supervising agency", "It shows the agencies may change the address without any regulatory approval at all", "It shows the centralized source is voluntary rather than legally required"],
            correctIndex: 0,
            explanation: "The address comes from the agency that administers and explains the statute, not from the rule, which is a fact about provenance.",
            sourceLessonSlug: "getting-your-own-file",
          },
          {
            prompt: "What does the FCRA require the agency to record about a disputed item if it is not deleted?",
            options: ["Its current status", "The number of times the consumer has disputed the same item previously", "The identity of the furnisher that verified the item during the reinvestigation", "The date on which the item will next be eligible for automatic removal"],
            correctIndex: 0,
            explanation: "The duty is to determine whether the information is inaccurate and record the current status of the disputed information, or delete it.",
            sourceLessonSlug: "the-dispute-and-the-clock",
          },
          {
            prompt: "How does a furnisher's duty differ from the agency's duty in what it must produce?",
            options: ["It reports results to the agency", "It reports results to the consumer, who then forwards them to the agency", "It reports results to its federal supervisor, which notifies the agency", "It reports results to the other furnishers holding the same account"],
            correctIndex: 0,
            explanation: "The statute requires it to report the results of the investigation to the consumer reporting agency that raised the dispute.",
            sourceLessonSlug: "the-furnisher-has-duties-too",
          },
          {
            prompt: "What does the lesson say almost nobody does with the dispute procedure?",
            options: ["Use it deliberately", "File it within the statutory period after receiving an adverse action notice", "Address it to the furnisher rather than to the consumer reporting agency", "Attach documentary evidence sufficient to satisfy a reasonable investigation"],
            correctIndex: 0,
            explanation: "It is a structural advantage the consumer already has, and the lesson's point is that it is under-used rather than unavailable.",
            sourceLessonSlug: "the-furnisher-has-duties-too",
          },
          {
            prompt: "Which of the following is NOT one of the levers the lesson identifies in the reinvestigation sentence?",
            options: ["A right to compensation", "The words free of charge, which put the cost of the reinvestigation on the agency", "The words completeness or accuracy, which reach more than outright errors", "The thirty-day period, which begins on the date the agency receives the notice"],
            correctIndex: 0,
            explanation: "The lesson names six levers in the sentence and compensation is not among them; the section creates a procedure rather than a payment.",
            sourceLessonSlug: "the-dispute-and-the-clock",
          },
          {
            prompt: "To what address must an agency send its notice of a dispute to a furnisher?",
            options: ["The one established with that person", "The furnisher's registered office as shown in the records of its State of incorporation", "The address printed on the consumer's most recent statement from that furnisher", "Any address the consumer supplies with the dispute, which the agency must use"],
            correctIndex: 0,
            explanation: "The statute requires notification at the address and in the manner established with the person supplying the information.",
            sourceLessonSlug: "the-dispute-and-the-clock",
          },
          {
            prompt: "What does the lesson say about who the free routes in Section 5 belong to?",
            options: ["Non-commercial and federally published", "Commercial services the course has reviewed and found acceptable for the purpose", "Services the consumer reporting agencies operate under contract with the government", "Services the course recommends over their paid equivalents for most readers"],
            correctIndex: 0,
            explanation: "They are named because a federal agency publishes them, which is a statement about provenance rather than a recommendation.",
            sourceLessonSlug: "getting-your-own-file",
          },
          {
            prompt: "Why does the lesson insist that an unverifiable item is a materially different starting position for a consumer?",
            options: ["The burden is not to prove falsity", "Because the agency must pay damages where an item cannot be verified in time", "Because the furnisher forfeits its right to re-report the item at a later date", "Because the consumer may then obtain a second free copy outside the annual floor"],
            correctIndex: 0,
            explanation: "The statute treats inaccurate, incomplete and unverifiable alike, so the consumer does not have to prove a negative.",
            sourceLessonSlug: "the-dispute-and-the-clock",
          },
          {
            prompt: "What does the phrase jointly design, fund, implement, maintain, and operate tell you about the centralized source?",
            options: ["It is a shared obligation", "It is operated by the federal supervisor with the agencies contributing funding", "It is optional, since a joint obligation cannot be enforced against any one agency", "It is a private venture the agencies may discontinue on notice to the Bureau"],
            correctIndex: 0,
            explanation: "The rule places every one of those verbs on all nationwide consumer reporting agencies together.",
            sourceLessonSlug: "getting-your-own-file",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 6 — The price, the rulemakers, and your own record
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-number-that-makes-offers-comparable",
      title: "21 · The number that exists so two offers can be compared",
      section: "Section 6 · The price, the rulemakers, and your own record",
      body: `Everything so far has been about whether you get credit. This lesson is about the other half of the decision, which is what it costs, and about the one number that was invented to make that answerable.

**Congress said why, in the statute's own findings.** The Truth in Lending Act's purpose is:

> "to assure a meaningful disclosure of credit terms so that the consumer will be able to compare more readily the various credit terms available to him and avoid the uninformed use of credit, and to protect the consumer against inaccurate and unfair credit billing and credit card practices" (15 U.S.C. § 1601, n.d.)

**"Compare more readily."** That is the whole design. The problem TILA was written against was not that credit was expensive. It was that credit was expensive in incomparable units: a fee here, a rate there, a discount for paying early, a charge folded into a price. Two offers stated in different units cannot be ranked, and an unrankable market does not discipline anyone.

**The fix is a common unit, and the statute defines how to compute it.** For revolving credit, the definition is arithmetic anyone can do:

> "in the case of any extension of credit under an open end credit plan, as the quotient (expressed as a percentage) of the total finance charge for the period to which it relates divided by the amount upon which the finance charge for that period is based, multiplied by the number of such periods in a year." (15 U.S.C. § 1606, n.d.)

**Three steps.** Take the finance charge for one period. Divide it by the amount it was charged on. Multiply by the number of those periods in a year.

**Work it.** Suppose a charge of 15 on a balance of 100 for a period, and there are 26 such periods in a year. Then 15 divided by 100 is 0.15, and 0.15 multiplied by 26 is 3.9, which expressed as a percentage is **390 percent**. The same charge described as "fifteen percent" is describing the period, not the year, and the two descriptions are 375 percentage points apart.

**That is the entire trick, and it is why the annualisation matters.** A cost quoted per period sounds small in proportion to how short the period is. Annualising is what removes the period from the comparison, which is exactly what "compare more readily" requires.

**The closed-end case is harder, and the statute says so.** For credit other than under an open-end plan, the rate is the nominal annual rate that yields the finance charge when applied to the unpaid balances "calculated according to the actuarial method of allocating payments made on a debt between the amount financed and the amount of the finance charge", or a simplified method the agency prescribes that keeps reasonable accuracy (15 U.S.C. § 1606, n.d.). **You are not expected to do that one by hand.** You are expected to know that it exists, that it is defined, and that the lender has to disclose its result.

**Where this goes next in the series.** MONEY-04 applies this arithmetic to the products it was written for. What matters here is the connection back to the rest of the course: **the file and the score decide whether you are offered credit, and the APR is how you find out what the answer cost.** Both halves are disclosure regimes, and both exist because a market of incomparable offers is a market nobody can shop in.

:::reveal In TILA's own words, what is the purpose of meaningful disclosure of credit terms? ||| So that the consumer will be able to compare more readily the various credit terms available and avoid the uninformed use of credit.

:::reveal What are the three steps of the open-end annual percentage rate formula in 15 U.S.C. 1606(a)(2)? ||| Divide the period's total finance charge by the amount it was charged on, then multiply by the number of such periods in a year, expressed as a percentage.

:::reveal What method does the statute name for computing the rate on credit that is not under an open-end plan? ||| The actuarial method of allocating payments between the amount financed and the finance charge, or a simplified method the agency prescribes that retains reasonable accuracy.

## Vocabulary
- **Annual percentage rate**: the cost of credit expressed as a yearly rate, defined at 15 U.S.C. section 1606 and disclosed so that two offers stated in different units can be ranked.
- **Finance charge**: the cost of the credit for a period, which is the numerator of the open-end annual percentage rate calculation.
- **Open-end credit plan**: revolving credit, for which the statute gives the simple quotient formula rather than the actuarial one.
- **Actuarial method**: the closed-end computation, which allocates each payment first to accumulated finance charge and the balance to the amount financed.
- **Annualisation**: multiplying a per-period cost by the number of periods in a year, which is what removes the period from a comparison.

## Sources
15 U.S.C. § 1601. (n.d.). *Congressional findings and declaration of purpose*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/15/1601

15 U.S.C. § 1606. (n.d.). *Determination of annual percentage rate*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/15/1606`,
    },
    {
      slug: "who-writes-the-rules",
      title: "22 · Three layers, and only two of them hold still",
      section: "Section 6 · The price, the rulemakers, and your own record",
      body: `Every right in this course sits in a three-layer stack, and knowing which layer a thing lives on tells you how much to trust it next year.

**Layer one, the statute.** Congress passes an Act. It is codified in the United States Code, it changes only when Congress changes it, and it is free to read.

- **Fair Credit Reporting Act**, 15 U.S.C. § 1681 and following. The file, permissible purpose, the score disclosure, the dispute right, the free disclosure, the user's duties on adverse action, the furnisher's duties.
- **Equal Credit Opportunity Act**, 15 U.S.C. § 1691 and following. The prohibited bases and the statement of reasons.
- **Truth in Lending Act**, 15 U.S.C. § 1601 and following. Meaningful disclosure, and the annual percentage rate.

**Layer two, the regulation.** An agency writes rules implementing the statute, published in the Code of Federal Regulations. Rules change more often than statutes, through a public process that leaves a record.

- **Regulation B**, 12 CFR part 1002, implements ECOA. The adverse action definition and the specificity requirement.
- **Regulation V**, 12 CFR part 1022, implements the FCRA. The risk-based pricing notice and the centralized source.
- **Regulation Z**, 12 CFR part 1026, implements TILA.

**Layer three, the agency.** Somebody administers, supervises and enforces. **This is the layer that moves, and it has moved.**

**Here is what this course will and will not say about layer three.** It will say that the statutes and regulations above were in force and readable on **28 August 2026**, because it read them that day and quoted them. It will not describe any agency's authorities, funding, staffing or enforcement posture in the present tense, because those were the subject of active change and litigation through 2025 and 2026 and a sentence written today would be a sentence that stops being true without warning. **A reader who needs to know which body is currently doing what should check the agency's own site and the Federal Register, and note the date.**

**Why this is not a hedge but the actual lesson.** The reason this course is built on statutes and regulations rather than on agency guidance is precisely that the bottom two layers hold still. Your right to a statement of specific reasons does not depend on who is currently supervising the creditor. Your right to a reasonable reinvestigation within thirty days does not depend on any agency's budget. **The duty runs from the creditor and the agency that holds your file, directly to you, and it is enforceable whether or not anyone is watching.**

**And this is the general method, not a special case.** Whenever a source tells you what your rights are, ask which layer it is speaking from. A statute cited by section is checkable in one click. A regulation cited by part and section is checkable in one click. A summary on a company's website, or an assertion in a course like this one, is worth exactly as much as the citation under it. **That is why every lesson here carries a Sources block with a stable URL: so you can go past this course to the thing it is describing.**

:::reveal Which three layers does every right in this course sit in? ||| The statute passed by Congress, the regulation implementing it, and the agency administering and enforcing it.

:::reveal Which of the three layers does this course refuse to describe in the present tense, and why? ||| The agency layer, because its authorities, funding and enforcement posture were subject to active change and litigation and a present-tense sentence would stop being true without warning.

:::reveal What question should you ask of any source that tells you what your rights are? ||| Which layer it is speaking from, and whether it gives a citation you can check in one click.

## Vocabulary
- **Statute**: an Act of Congress codified in the United States Code, which changes only when Congress changes it.
- **Regulation**: an agency rule implementing a statute, published in the Code of Federal Regulations and changed through a public process that leaves a record.
- **Regulation Z**: 12 CFR part 1026, the rule implementing the Truth in Lending Act, named here for completeness alongside Regulations B and V.
- **The layer that moves**: this lesson's name for the agency layer, which this course dates rather than describes.

## Sources
15 U.S.C. § 1681. (n.d.). *Congressional findings and statement of purpose*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/15/1681

15 U.S.C. § 1691. (n.d.). *Scope of prohibition*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/15/1691

15 U.S.C. § 1601. (n.d.). *Congressional findings and declaration of purpose*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/15/1601

12 CFR § 1002.9. (n.d.). *Notifications*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/1002.9

12 CFR § 1022.72. (n.d.). *General requirements for risk-based pricing notices*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/1022.72`,
    },
    {
      slug: "read-your-own-record",
      title: "23 · Capstone: read your own record",
      section: "Section 6 · The price, the rulemakers, and your own record",
      body: `The catalog's capstones all do the same thing: take the mechanism the course taught and run it once, on your own material. *Map Your Own Stack* has you document every government over your block. *Choose a Form Capstone* has you pick an entity and defend it. This one has you read the record institutions are reading about you.

**Before anything else, the third statement of the rule this course has followed throughout.** What follows is a description of a procedure and of what the law entitles you to. **It is not financial advice, and this course does not know your circumstances.** It does not tell you whether to request anything, whether to dispute anything, or what any of it means for your money. Every step below is optional, and the only thing this course asserts is that the entitlements exist and what the statute says about them.

**Part one: obtain the documents.** The FCRA entitles you to all section 1681g disclosures once in any 12-month period, without charge, from each nationwide agency and each nationwide specialty agency (15 U.S.C. § 1681j, n.d.). Regulation V requires the nationwide agencies to operate a centralized source reachable by a single website, a single toll-free number, or mail to a single address (12 CFR § 1022.136, n.d.). The address is not printed in the rule; the CFPB's own page names it, and this course read that page on 28 August 2026 (Consumer Financial Protection Bureau, 2023).

**Part two: reconcile them.** Put the documents side by side and note, item by item, where they differ. **The differences are the point.** They are evidence that these are separate businesses assembled from overlapping sources, and they are the thing no single report can show you. For each item, record the four facts that matter under Section 2: what it says, who furnished it, what date it is measured from, and whether that date is inside the period section 1681c(a) allows.

**Part three: read one notice properly, if you have one.** Take any adverse action notice you have received and find the six things Section 4 listed: the action, the creditor, the section 701(a) statement, the supervising agency, and either the reasons or the right to request them within 60 days. Then find the FCRA half: the score, the range, the key factors, the date, the provider, the agency's contact details with the disclaimer, and the notice of your free-copy and dispute rights. **Ask of the reasons the one question Regulation B makes askable: are these specific principal reasons, or are they a restatement of the outcome?**

**Part four: know what a dispute would be, whether or not you file one.** A dispute is notice to the agency that an item's completeness or accuracy is disputed. It starts a 30-day reinvestigation from the date of receipt, free of charge, and within five business days the agency must notify whoever furnished the item, who then owes its own investigation (15 U.S.C. §§ 1681i, 1681s-2, n.d.). Inaccurate, incomplete and unverifiable produce the same outcome.

**Part five: write the one-page summary.** Not for anyone else. Three headings: **what the record says about me**, **where the records disagree**, and **which items I could not verify from the documents themselves**. That third heading is the useful one, and it is the same discipline the rest of this catalog uses when it prints what it refused to print.

**What you will have at the end.** Not a better score, which this course has promised you nothing about. You will have the actual documents that decisions about you are made from, a list of the places they disagree, and the knowledge of exactly which statute answers each question you still have. That is a different thing from advice, and it is the thing this course was able to give honestly.

:::reveal What is the first part of this capstone, and what entitles you to do it? ||| Obtain the documents, under the FCRA's free annual file disclosure at section 1681j and the centralized source Regulation V requires.

:::reveal Why does the capstone ask you to reconcile more than one report rather than read one? ||| Because the agencies are separate businesses assembled from overlapping sources, so the differences between the files are evidence no single report can show.

:::reveal What are the three headings of the one-page summary? ||| What the record says about me, where the records disagree, and which items I could not verify from the documents themselves.

## Vocabulary
- **Capstone**: the catalog's pattern of closing a course by running its mechanism once on the learner's own material rather than on an example.
- **Reconciliation**: setting two or more consumer files side by side and recording item by item where they differ.
- **The four facts per item**: what it says, who furnished it, what date it is measured from, and whether that date is inside the period the statute allows.
- **Could not verify**: the summary heading that records what the documents themselves did not settle, which is the same discipline the catalog applies to its own sources.

## Sources
15 U.S.C. § 1681j. (n.d.). *Charges for certain disclosures*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/15/1681j

15 U.S.C. § 1681i. (n.d.). *Procedure in case of disputed accuracy*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/15/1681i

15 U.S.C. § 1681c. (n.d.). *Requirements relating to information contained in consumer reports*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/15/1681c

12 CFR § 1002.9. (n.d.). *Notifications*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/1002.9

12 CFR § 1022.136. (n.d.). *Centralized source for requesting annual file disclosures from nationwide consumer reporting agencies*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/1022.136

Consumer Financial Protection Bureau. (2023, August 28). *How do I get a free copy of my credit reports?* https://www.consumerfinance.gov/ask-cfpb/how-do-i-get-a-copy-of-my-credit-reports-en-5/`,
    },
    {
      slug: "quiz-the-price-and-the-rules",
      title: "24 · Knowledge check: the price, the rulemakers, and your own record",
      section: "Section 6 · The price, the rulemakers, and your own record",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "In TILA's own findings, what is meaningful disclosure of credit terms for?",
            options: ["Comparing more readily", "Ensuring that no consumer is charged more than a rate Congress considers reasonable", "Allowing federal supervisors to monitor the pricing decisions of regulated lenders", "Standardising the paperwork lenders must retain in support of each extension of credit"],
            correctIndex: 0,
            explanation: "The statute says so that the consumer will be able to compare more readily the various credit terms available, and avoid the uninformed use of credit.",
            sourceLessonSlug: "the-number-that-makes-offers-comparable",
          },
          {
            prompt: "What problem does the lesson say TILA was written against?",
            options: ["Incomparable units", "Interest rates rising faster than wages during the decade the Act was passed", "Lenders refusing to disclose any price at all until an application was approved", "Consumers borrowing more than their incomes could support over a full term"],
            correctIndex: 0,
            explanation: "Two offers stated in different units cannot be ranked, and an unrankable market does not discipline anyone.",
            sourceLessonSlug: "the-number-that-makes-offers-comparable",
          },
          {
            prompt: "For an open-end credit plan, what is the first step of the statutory annual percentage rate formula?",
            options: ["Divide the finance charge by the amount", "Multiply the finance charge by the number of periods in the year", "Subtract the amount financed from the total of payments over the term", "Apply the actuarial method to allocate each payment between charge and principal"],
            correctIndex: 0,
            explanation: "The quotient of the total finance charge for the period divided by the amount on which it is based comes first.",
            sourceLessonSlug: "the-number-that-makes-offers-comparable",
          },
          {
            prompt: "What is the second step of the open-end annual percentage rate formula?",
            options: ["Multiply by periods in a year", "Divide by the number of days the balance was actually outstanding in the period", "Add any fees excluded from the finance charge to the numerator before dividing", "Compound the result over the number of periods rather than multiplying by it"],
            correctIndex: 0,
            explanation: "The quotient, expressed as a percentage, is multiplied by the number of such periods in a year.",
            sourceLessonSlug: "the-number-that-makes-offers-comparable",
          },
          {
            prompt: "A finance charge of 15 on 100 for a period, with 26 such periods in a year, gives what annual percentage rate under the statutory formula?",
            options: ["390 percent", "15 percent, because the charge is fifteen percent of the amount it was applied to", "26 percent, because there are twenty-six periods in the year being annualised", "41 percent, because the periodic rate must be compounded rather than multiplied"],
            correctIndex: 0,
            explanation: "Fifteen divided by one hundred is 0.15, multiplied by twenty-six is 3.9, expressed as a percentage 390.",
            sourceLessonSlug: "the-number-that-makes-offers-comparable",
          },
          {
            prompt: "How far apart are the period figure and the annual figure in that worked example?",
            options: ["375 percentage points", "26 percentage points, one for each period in the year being annualised", "11 percentage points, the difference between the charge and the number of periods", "They are the same figure described in two different but equivalent ways"],
            correctIndex: 0,
            explanation: "Fifteen percent describes the period and 390 percent describes the year, and the gap between them is 375 points.",
            sourceLessonSlug: "the-number-that-makes-offers-comparable",
          },
          {
            prompt: "Why does a cost quoted per period sound small, according to the lesson?",
            options: ["The period is short", "Because lenders are permitted to omit fees from the periodic figure they quote", "Because consumers compare it to the monthly payment rather than to the balance", "Because the statute allows the periodic rate to be rounded down to the nearest point"],
            correctIndex: 0,
            explanation: "It sounds small in proportion to how short the period is, and annualising is what removes the period from the comparison.",
            sourceLessonSlug: "the-number-that-makes-offers-comparable",
          },
          {
            prompt: "Which method does the statute name for credit that is NOT under an open-end plan?",
            options: ["The actuarial method", "The quotient method, applied to the longest period the plan contemplates", "The simple interest method, applied to the original amount financed throughout", "The declining balance method, applied at the end of each calendar quarter"],
            correctIndex: 0,
            explanation: "It allocates each payment first to accumulated finance charge and the balance to the unpaid amount financed.",
            sourceLessonSlug: "the-number-that-makes-offers-comparable",
          },
          {
            prompt: "What alternative does the statute permit to the actuarial method?",
            options: ["A simplified method the agency prescribes", "Any method the lender chooses, provided it is disclosed to the consumer in advance", "The open-end quotient formula, applied as though the term were a single period", "No alternative, since the actuarial method is mandatory for all closed-end credit"],
            correctIndex: 0,
            explanation: "The statute allows a method the Bureau prescribes which materially simplifies computation while retaining reasonable accuracy.",
            sourceLessonSlug: "the-number-that-makes-offers-comparable",
          },
          {
            prompt: "What does the lesson say a learner is expected to know about the closed-end computation?",
            options: ["That it exists and is defined", "How to perform it by hand for a term of up to sixty monthly payments", "That it produces a lower figure than the open-end formula on the same facts", "That it applies only where the credit is secured by residential real property"],
            correctIndex: 0,
            explanation: "You are not expected to compute it by hand; you are expected to know it exists, is defined, and that the lender must disclose its result.",
            sourceLessonSlug: "the-number-that-makes-offers-comparable",
          },
          {
            prompt: "How does the lesson connect the annual percentage rate to the rest of the course?",
            options: ["The file decides whether, the rate says what it cost", "The rate is one of the key factors an agency must disclose alongside a score", "The rate is the figure a creditor must state as a principal reason for adverse action", "The rate determines how long an adverse item may remain in the consumer's file"],
            correctIndex: 0,
            explanation: "Both halves are disclosure regimes, and both exist because a market of incomparable offers is one nobody can shop in.",
            sourceLessonSlug: "the-number-that-makes-offers-comparable",
          },
          {
            prompt: "Which course in the series applies this arithmetic to the products it was written for?",
            options: ["MONEY-04", "MONEY-02, the course on banking and the substitute market for the unbanked", "MONEY-06, the course on housing, the lease and the standardized loan forms", "MONEY-99, the series capstone that revisits every mechanism at once"],
            correctIndex: 0,
            explanation: "MONEY-04, Predatory Products Priced, is where the fee-to-rate conversion does its work.",
            sourceLessonSlug: "the-number-that-makes-offers-comparable",
          },
          {
            prompt: "What does the lesson call the entire trick of an annualised rate?",
            options: ["It removes the period", "It combines fees and interest into one figure that no lender may understate", "It converts a variable rate into a fixed one for the purposes of comparison", "It discounts future payments back to their value on the date of the agreement"],
            correctIndex: 0,
            explanation: "Removing the period from the comparison is exactly what compare more readily requires.",
            sourceLessonSlug: "the-number-that-makes-offers-comparable",
          },
          {
            prompt: "The open-end formula's result is expressed how?",
            options: ["As a percentage", "As a decimal fraction of the amount financed over the whole term", "As a monetary amount, being the total finance charge for the year", "As a ratio of the finance charge to the number of periods in the year"],
            correctIndex: 0,
            explanation: "The statute says the quotient, expressed as a percentage, multiplied by the number of such periods in a year.",
            sourceLessonSlug: "the-number-that-makes-offers-comparable",
          },
          {
            prompt: "Which three layers does the rules lesson describe?",
            options: ["Statute, regulation, agency", "Congress, the courts, and the States, in descending order of authority", "Federal law, State law, and the contract between the consumer and the creditor", "The creditor, the consumer reporting agency, and the model developer"],
            correctIndex: 0,
            explanation: "Knowing which layer a thing lives on tells you how much to trust it next year.",
            sourceLessonSlug: "who-writes-the-rules",
          },
          {
            prompt: "Which of the three layers does the lesson say holds still?",
            options: ["The bottom two", "All three, since a statute, a regulation and an agency are equally durable", "Only the statute, since regulations change every time an agency's leadership changes", "Only the agency, since statutes and regulations are amended more frequently"],
            correctIndex: 0,
            explanation: "The statute and the regulation hold still; the agency layer is the one that moves.",
            sourceLessonSlug: "who-writes-the-rules",
          },
          {
            prompt: "Which regulation implements the Equal Credit Opportunity Act?",
            options: ["Regulation B", "Regulation V, which also carries the risk-based pricing notice requirement", "Regulation Z, which governs the disclosure of the annual percentage rate", "Regulation X, which governs the standardized real estate settlement forms"],
            correctIndex: 0,
            explanation: "Regulation B is 12 CFR part 1002, and it carries the adverse action definition and the specificity requirement.",
            sourceLessonSlug: "who-writes-the-rules",
          },
          {
            prompt: "Which regulation implements the Fair Credit Reporting Act?",
            options: ["Regulation V", "Regulation B, which also carries the definition of a prohibited basis", "Regulation Z, which governs the determination of the annual percentage rate", "Regulation E, which governs electronic fund transfers between accounts"],
            correctIndex: 0,
            explanation: "Regulation V is 12 CFR part 1022, and it carries the risk-based pricing notice and the centralized source.",
            sourceLessonSlug: "who-writes-the-rules",
          },
          {
            prompt: "Which regulation implements the Truth in Lending Act?",
            options: ["Regulation Z", "Regulation V, which implements the consumer-reporting duties in the same title", "Regulation B, which implements the disclosure of reasons for adverse action", "Regulation F, which governs the conduct of third-party debt collectors"],
            correctIndex: 0,
            explanation: "Regulation Z is 12 CFR part 1026, named in the lesson alongside Regulations B and V.",
            sourceLessonSlug: "who-writes-the-rules",
          },
          {
            prompt: "What will this course say about the agency layer?",
            options: ["When it read the rules", "Which agency currently supervises each category of creditor in the country", "How each agency's enforcement priorities have changed since the previous year", "Which of the agency's rules are currently in force and which are stayed"],
            correctIndex: 0,
            explanation: "It states that the statutes and regulations were in force and readable on 28 August 2026, because it read them that day.",
            sourceLessonSlug: "who-writes-the-rules",
          },
          {
            prompt: "Why does the lesson refuse to describe an agency's authorities in the present tense?",
            options: ["They were actively changing", "Because agency authorities are confidential and not published in any public record", "Because a course may not discuss an agency without that agency's written consent", "Because the statute forbids third parties from characterising a federal agency's powers"],
            correctIndex: 0,
            explanation: "They were the subject of active change and litigation through 2025 and 2026, so a sentence written today would stop being true without warning.",
            sourceLessonSlug: "who-writes-the-rules",
          },
          {
            prompt: "Where does the lesson send a reader who needs the current agency picture?",
            options: ["The agency's site and the Federal Register", "The creditor's adverse action notice, which names the supervising agency", "The consumer reporting agencies, which publish their supervisors' names annually", "A commercial legal database, since federal agency status is not published free"],
            correctIndex: 0,
            explanation: "And it tells the reader to note the date when they look.",
            sourceLessonSlug: "who-writes-the-rules",
          },
          {
            prompt: "What is the lesson's argument for building the course on statutes rather than on agency guidance?",
            options: ["The bottom layers hold still", "Statutes are shorter and easier for a learner to read in full than guidance is", "Guidance is not published in a form that can be cited with a stable web address", "Guidance applies only to supervised institutions and not to every creditor"],
            correctIndex: 0,
            explanation: "Your right to specific principal reasons does not depend on who is currently supervising the creditor.",
            sourceLessonSlug: "who-writes-the-rules",
          },
          {
            prompt: "In the lesson's account, from whom does the duty in these statutes run?",
            options: ["The creditor and the agency, to you", "The federal supervisor, to the creditor, and only indirectly to the consumer", "Congress, to the agencies, which may pass the duty on at their discretion", "The consumer reporting agency, to the creditor that purchased the report"],
            correctIndex: 0,
            explanation: "The duty runs directly, and it is enforceable whether or not anyone is watching.",
            sourceLessonSlug: "who-writes-the-rules",
          },
          {
            prompt: "What is the general method the lesson draws from the three-layer stack?",
            options: ["Ask which layer a claim comes from", "Read the most recent source available and disregard anything older than a year", "Trust federal sources over State sources whenever the two appear to conflict", "Prefer a summary written for consumers over the underlying legal text"],
            correctIndex: 0,
            explanation: "A statute or regulation cited by section is checkable in one click; a summary is worth exactly as much as the citation under it.",
            sourceLessonSlug: "who-writes-the-rules",
          },
          {
            prompt: "Why does every lesson in this course carry a sources block with a stable URL?",
            options: ["So you can go past the course", "Because the catalog's citation tooling cannot index a lesson without one", "Because federal law requires an educational publisher to cite its legal sources", "Because a lesson without a source cannot be assessed by the section quiz"],
            correctIndex: 0,
            explanation: "So a reader can reach the thing being described rather than relying on this course's account of it.",
            sourceLessonSlug: "who-writes-the-rules",
          },
          {
            prompt: "Which statute number carries the Fair Credit Reporting Act?",
            options: ["15 U.S.C. 1681", "15 U.S.C. 1691, which carries the Equal Credit Opportunity Act's prohibitions", "15 U.S.C. 1601, which carries the Truth in Lending Act's findings and purpose", "12 U.S.C. 1002, which carries Regulation B's definition of adverse action"],
            correctIndex: 0,
            explanation: "The FCRA sits at 15 U.S.C. 1681 and following, and carries the file, permissible purpose, the score disclosure and the dispute right.",
            sourceLessonSlug: "who-writes-the-rules",
          },
          {
            prompt: "Which statute number carries the Equal Credit Opportunity Act?",
            options: ["15 U.S.C. 1691", "15 U.S.C. 1681, which carries the consumer-reporting and dispute provisions", "15 U.S.C. 1606, which carries the determination of the annual percentage rate", "12 U.S.C. 1022, which carries Regulation V's risk-based pricing requirements"],
            correctIndex: 0,
            explanation: "ECOA sits at 15 U.S.C. 1691 and following, and carries the prohibited bases and the statement of reasons.",
            sourceLessonSlug: "who-writes-the-rules",
          },
          {
            prompt: "What does the capstone lesson do, following the catalog's pattern?",
            options: ["Runs the mechanism on your own material", "Tests everything the course taught in a single comprehensive written examination", "Summarises the six sections so a learner can revise without rereading them", "Introduces the next course in the series and the topics it will cover"],
            correctIndex: 0,
            explanation: "The same pattern as Map Your Own Stack and Choose a Form Capstone elsewhere in the catalog.",
            sourceLessonSlug: "read-your-own-record",
          },
          {
            prompt: "Which two catalog capstones does this one name as its models?",
            options: ["Map Your Own Stack and Choose a Form Capstone", "The Match and The County Committee, the two courses in the land warrant series", "Financing Without Access and What They Built, the two exclusion-history courses", "Surplus Funds Basics and Cooperatives, the two courses gated on legal review"],
            correctIndex: 0,
            explanation: "One has you document every government over your block; the other has you pick an entity and defend it.",
            sourceLessonSlug: "read-your-own-record",
          },
          {
            prompt: "What does the capstone state before anything else?",
            options: ["That this is not financial advice", "That the exercise must be completed within thirty days of finishing the course", "That the documents obtained must be retained for seven years for later reference", "That a learner should consult the course instructor before beginning any step"],
            correctIndex: 0,
            explanation: "It is the third of the three prose statements of the rule, and it says every step is optional.",
            sourceLessonSlug: "read-your-own-record",
          },
          {
            prompt: "What is part one of the capstone?",
            options: ["Obtain the documents", "Write to each creditor asking for the reasons behind its most recent decision", "Calculate the annual percentage rate on every account currently held open", "Request a score from each of the nationwide agencies before reading any file"],
            correctIndex: 0,
            explanation: "Under the free annual file disclosure at section 1681j and the centralized source Regulation V requires.",
            sourceLessonSlug: "read-your-own-record",
          },
          {
            prompt: "Why does the capstone say the differences between reports are the point?",
            options: ["No single report can show them", "Because the statute treats any difference between two files as a reportable error", "Because a creditor must use whichever file shows the most favourable history", "Because an item appearing in only one file must be deleted from that file"],
            correctIndex: 0,
            explanation: "They are evidence that these are separate businesses assembled from overlapping sources.",
            sourceLessonSlug: "read-your-own-record",
          },
          {
            prompt: "Which four facts does the capstone ask a learner to record for each item?",
            options: ["What it says, who furnished it, its date, and whether the date is in range", "Its balance, its interest rate, its opening date, and its current payment status", "Its creditor, its account number, its credit limit, and its most recent payment", "Its category, its severity, its effect on the score, and its dispute history"],
            correctIndex: 0,
            explanation: "The fourth is whether the date is inside the period section 1681c(a) allows for that category of item.",
            sourceLessonSlug: "read-your-own-record",
          },
          {
            prompt: "Which question does the capstone say Regulation B makes askable of an adverse action notice?",
            options: ["Are these principal reasons or a restatement", "Was the notice sent within thirty days of the completed application being received", "Did the creditor obtain a report from more than one nationwide agency", "Would a different creditor have reached the same decision on the same file"],
            correctIndex: 0,
            explanation: "The specificity requirement is what makes that a question with an answer rather than a complaint.",
            sourceLessonSlug: "read-your-own-record",
          },
          {
            prompt: "What does part four of the capstone ask a learner to know?",
            options: ["What a dispute would be", "How to draft a dispute letter that an agency is most likely to accept", "Which of the three nationwide agencies resolves disputes most quickly", "Whether disputing an item is advisable given their own circumstances"],
            correctIndex: 0,
            explanation: "The lesson describes the procedure and its deadlines, whether or not the learner files anything.",
            sourceLessonSlug: "read-your-own-record",
          },
          {
            prompt: "What is the third heading of the capstone's one-page summary?",
            options: ["Which items I could not verify", "Which items I intend to dispute during the coming month", "Which creditors have obtained my report in the past twelve months", "Which accounts contribute most to the score each agency reports"],
            correctIndex: 0,
            explanation: "It is the same discipline the rest of the catalog uses when it prints what it refused to print.",
            sourceLessonSlug: "read-your-own-record",
          },
          {
            prompt: "What does the capstone say a learner will have at the end, and what they will not?",
            options: ["The documents, not a better score", "A dispute filed with each agency, not a resolution of any of the disputes", "A complete financial plan, not a guarantee that the plan will succeed", "An enforceable claim against a creditor, not the means to bring it"],
            correctIndex: 0,
            explanation: "The course promised nothing about a score; it delivers the documents, the disagreements, and the statute that answers each remaining question.",
            sourceLessonSlug: "read-your-own-record",
          },
          {
            prompt: "In the capstone, who is the one-page summary written for?",
            options: ["Nobody else", "The consumer reporting agency, as an attachment to any dispute filed", "A prospective creditor, to be supplied with a future credit application", "The federal agency named on the most recent adverse action notice received"],
            correctIndex: 0,
            explanation: "The lesson says not for anyone else, which is what makes the third heading honest rather than defensive.",
            sourceLessonSlug: "read-your-own-record",
          },
          {
            prompt: "How does the capstone describe the difference between what it gives and advice?",
            options: ["Entitlements exist; the decisions are yours", "Federal rules apply everywhere; State rules must be looked up separately", "Statutes are durable; agency guidance is not and should be disregarded", "Documents are evidence; scores are opinions and should be ignored entirely"],
            correctIndex: 0,
            explanation: "The only thing it asserts is that the entitlements exist and what the statute says about them.",
            sourceLessonSlug: "read-your-own-record",
          },
          {
            prompt: "Which six items does the capstone ask a learner to find in the Regulation B half of a notice?",
            options: ["Action, creditor, 701(a), agency, reasons or the right to them", "Score, range, key factors, date, provider, and the agency's telephone number", "Balance, limit, payment history, inquiries, public records, and personal details", "Statute, regulation, supervisor, deadline, remedy, and the address for a dispute"],
            correctIndex: 0,
            explanation: "Those are the contents Regulation B requires, with the 60-day request window attached to the last of them.",
            sourceLessonSlug: "read-your-own-record",
          },
          {
            prompt: "Which items does the capstone ask a learner to find in the FCRA half of a notice?",
            options: ["Score, range, factors, date, provider, agency details, rights", "The action taken, the creditor's address, and the supervising federal agency", "The annual percentage rate, the finance charge, and the total of payments", "The prohibited bases, the statement of reasons, and the request deadline"],
            correctIndex: 0,
            explanation: "Plus the disclaimer that the agency did not make the decision, and the free-copy and dispute rights.",
            sourceLessonSlug: "read-your-own-record",
          },
          {
            prompt: "Which three outcomes does the capstone remind a learner produce the same result on a dispute?",
            options: ["Inaccurate, incomplete, unverifiable", "Disputed, adverse, and older than the reporting period for its category", "Deleted, modified, and permanently blocked from further reporting", "Verified, corrected, and annotated with the consumer's statement of dispute"],
            correctIndex: 0,
            explanation: "The statute treats all three alike, which is why the consumer never has to prove a negative.",
            sourceLessonSlug: "read-your-own-record",
          },
          {
            prompt: "What does the lesson mean by saying an unrankable market does not discipline anyone?",
            options: ["Nobody can shop it", "Regulators cannot bring enforcement actions without comparable pricing data", "Lenders cannot set prices without knowing what their competitors are charging", "Consumers cannot enforce their rights without knowing the rate they were charged"],
            correctIndex: 0,
            explanation: "If two offers cannot be ranked, competition on price does nothing, which is the reason for a common unit.",
            sourceLessonSlug: "the-number-that-makes-offers-comparable",
          },
          {
            prompt: "In the statutory open-end formula, what is the denominator?",
            options: ["The amount the charge was based on", "The number of periods in the year over which the charge is being annualised", "The total of all payments the consumer will make over the life of the plan", "The credit limit the creditor has established for the account in question"],
            correctIndex: 0,
            explanation: "The formula divides the total finance charge for the period by the amount upon which that finance charge is based.",
            sourceLessonSlug: "the-number-that-makes-offers-comparable",
          },
          {
            prompt: "According to the closed-end definition, how is a payment allocated under the actuarial method?",
            options: ["First to finance charge, then to principal", "Equally between the finance charge and the amount financed on each payment date", "First to the amount financed, with any remainder applied to the finance charge", "Entirely to the amount financed until the principal is repaid in full"],
            correctIndex: 0,
            explanation: "A payment is applied first to the accumulated finance charge and the balance is applied to the unpaid amount financed.",
            sourceLessonSlug: "the-number-that-makes-offers-comparable",
          },
          {
            prompt: "What is the second of TILA's two stated purposes in the quoted findings?",
            options: ["Protection against unfair billing practices", "Establishment of a national ceiling on the rate any lender may charge", "Creation of a federal register of every consumer credit contract in force", "Assignment of supervisory responsibility to a single federal banking agency"],
            correctIndex: 0,
            explanation: "The findings name protection against inaccurate and unfair credit billing and credit card practices alongside comparability.",
            sourceLessonSlug: "the-number-that-makes-offers-comparable",
          },
          {
            prompt: "The rate lesson says the annual percentage rate answers which question?",
            options: ["What the answer cost", "Whether the applicant will be granted the credit they have applied for", "Which of the nationwide agencies supplied the report the lender relied on", "How long the creditor may report the resulting account to the agencies"],
            correctIndex: 0,
            explanation: "The file and the score decide whether you are offered credit; the rate is how you find out what that answer cost.",
            sourceLessonSlug: "the-number-that-makes-offers-comparable",
          },
          {
            prompt: "In the three-layer stack, where is a rule published?",
            options: ["The Code of Federal Regulations", "The United States Code, alongside the statute it implements", "The Federal Register only, which is where it remains permanently", "The agency's own website, which is the sole authoritative source"],
            correctIndex: 0,
            explanation: "Statutes are codified in the United States Code and regulations in the Code of Federal Regulations.",
            sourceLessonSlug: "who-writes-the-rules",
          },
          {
            prompt: "What does the lesson say about how often each of the first two layers changes?",
            options: ["Statutes least, regulations more", "Both change annually on a fixed schedule set by the supervising agency", "Regulations least, because they require a public process that statutes do not", "Neither changes, which is why the course was able to cite them at all"],
            correctIndex: 0,
            explanation: "A statute changes only when Congress changes it; a rule changes more often, through a public process that leaves a record.",
            sourceLessonSlug: "who-writes-the-rules",
          },
          {
            prompt: "What does the lesson say a summary on a company website is worth?",
            options: ["As much as its citation", "More than the statute, because it is written for the reader who needs it", "Nothing, because a company has an interest in the consumer's understanding", "The same as an agency publication, since both are secondary descriptions"],
            correctIndex: 0,
            explanation: "The same is said of an assertion in this course: worth exactly as much as the citation under it.",
            sourceLessonSlug: "who-writes-the-rules",
          },
          {
            prompt: "Which right does the lesson use to show that enforcement does not depend on an agency's budget?",
            options: ["The thirty-day reinvestigation", "The right to a free annual file disclosure from each nationwide agency", "The right to be told which federal agency supervises a particular creditor", "The right to add a statement of dispute to the file after a reinvestigation"],
            correctIndex: 0,
            explanation: "The lesson pairs it with the right to a statement of specific reasons, which likewise does not depend on who is supervising.",
            sourceLessonSlug: "who-writes-the-rules",
          },
          {
            prompt: "Which of these is NOT one of the three statutes the rules lesson names?",
            options: ["The Fair Debt Collection Practices Act", "The Fair Credit Reporting Act, at 15 U.S.C. 1681 and following", "The Equal Credit Opportunity Act, at 15 U.S.C. 1691 and following", "The Truth in Lending Act, at 15 U.S.C. 1601 and following"],
            correctIndex: 0,
            explanation: "Collections is the subject of MONEY-03; this course's stack is the FCRA, ECOA and TILA.",
            sourceLessonSlug: "who-writes-the-rules",
          },
          {
            prompt: "How does the capstone treat the possibility that a learner has no adverse action notice?",
            options: ["That part is conditional", "It requires the learner to apply for credit in order to generate one", "It substitutes a risk-based pricing notice, which every borrower receives", "It treats the absence of a notice as itself a violation to be reported"],
            correctIndex: 0,
            explanation: "The lesson says to take any adverse action notice you have received, and every step in the capstone is optional.",
            sourceLessonSlug: "read-your-own-record",
          },
          {
            prompt: "What does the capstone say about the fifth part's audience?",
            options: ["It is for the learner alone", "It is submitted to the instructor for grading against a published rubric", "It is attached to any future application as a statement of the learner's record", "It is filed with the consumer reporting agency as a statement of dispute"],
            correctIndex: 0,
            explanation: "Writing it for nobody else is what makes the could-not-verify heading useful rather than defensive.",
            sourceLessonSlug: "read-your-own-record",
          },
          {
            prompt: "Which statutory provisions does the capstone cite for the dispute procedure?",
            options: ["Sections 1681i and 1681s-2", "Sections 1681b and 1681c, on permissible purpose and reporting periods", "Sections 1681g and 1681m, on disclosures and the duties of users of reports", "Sections 1691 and 1601, on prohibited bases and meaningful disclosure"],
            correctIndex: 0,
            explanation: "The agency's reinvestigation duty and the furnisher's investigation duty respectively.",
            sourceLessonSlug: "read-your-own-record",
          },
          {
            prompt: "In the capstone's framing, what is the useful heading in the summary?",
            options: ["The one recording what could not be verified", "The one listing everything the record says, since it is the most complete", "The one comparing the score reported by each of the nationwide agencies", "The one listing every creditor that has obtained a report in the past year"],
            correctIndex: 0,
            explanation: "Recording what the documents did not settle is the same discipline the catalog applies to its own sourcing.",
            sourceLessonSlug: "read-your-own-record",
          },
          {
            prompt: "Which two dates does the capstone attach to the source for the centralized source's address?",
            options: ["The page's own review date and 28 August 2026", "The date the regulation was adopted and the date it took effect", "The date the statute was passed and the date it was last amended", "The date the agencies launched the source and the date it was last audited"],
            correctIndex: 0,
            explanation: "The course records reading the CFPB page on 28 August 2026, and the page carries its own last-reviewed date.",
            sourceLessonSlug: "read-your-own-record",
          },
          {
            prompt: "What does the annualisation step do to a comparison between two offers?",
            options: ["Puts them in the same unit", "Adds the fees that each lender is permitted to exclude from the rate", "Adjusts each for the length of time the borrower expects to hold the credit", "Discounts each for the risk that the borrower will repay the balance early"],
            correctIndex: 0,
            explanation: "A common unit is the entire design of the disclosure, per TILA's own findings.",
            sourceLessonSlug: "the-number-that-makes-offers-comparable",
          },
          {
            prompt: "According to the lesson, in accordance with what must the annual percentage rate be determined?",
            options: ["The regulations of the Bureau", "The lender's own published methodology, disclosed to the consumer in advance", "The accounting standards applicable to the lender's audited financial statements", "The custom of the trade in the State where the credit is extended"],
            correctIndex: 0,
            explanation: "The statute says the rate shall be determined in accordance with the regulations of the Bureau, which is the second layer of the stack.",
            sourceLessonSlug: "the-number-that-makes-offers-comparable",
          },
          {
            prompt: "How does the rate lesson describe both halves of the credit decision?",
            options: ["Both are disclosure regimes", "Both are enforced by the same federal agency under a single statute", "Both turn on the same consumer report supplied by the same agency", "Both are optional for the creditor unless the applicant requests them"],
            correctIndex: 0,
            explanation: "Whether you get credit and what it costs are each answered by a mandatory disclosure rather than by negotiation.",
            sourceLessonSlug: "the-number-that-makes-offers-comparable",
          },
          {
            prompt: "What does the rules lesson say about the enforceability of these duties?",
            options: ["They hold whether or not anyone is watching", "They lapse whenever the supervising agency's enforcement budget is reduced", "They apply only to creditors that are examined by a federal banking regulator", "They may be waived by agreement between the creditor and the consumer"],
            correctIndex: 0,
            explanation: "The duty runs from the creditor and the agency directly to the consumer, which is the point of building on the statute.",
            sourceLessonSlug: "who-writes-the-rules",
          },
          {
            prompt: "Which part of the capstone is described as the exercise's evidence rather than its conclusion?",
            options: ["The reconciliation", "The one-page summary written under three headings at the end", "The reading of a single adverse action notice field by field", "The description of what a dispute would be if one were filed"],
            correctIndex: 0,
            explanation: "The differences between the documents are the material; the summary only records them.",
            sourceLessonSlug: "read-your-own-record",
          },
          {
            prompt: "The rate lesson's worked example uses how many periods in the year?",
            options: ["26", "12, because the finance charge in the example is stated for a calendar month", "52, because the example describes a charge assessed on a weekly cycle", "365, because the statute requires annualisation on a daily basis"],
            correctIndex: 0,
            explanation: "Twenty-six periods, which multiplied by a quotient of 0.15 gives 3.9, or 390 percent.",
            sourceLessonSlug: "the-number-that-makes-offers-comparable",
          },
          {
            prompt: "Which layer does the lesson say a reader can check in one click?",
            options: ["A statute or regulation cited by section", "An agency's current enforcement posture, published on its own website", "A company's summary of a consumer's rights under the applicable statutes", "A course's assertion about what a statute means for a particular reader"],
            correctIndex: 0,
            explanation: "Which is why the method is to ask what layer a claim is speaking from and whether it carries a citation.",
            sourceLessonSlug: "who-writes-the-rules",
          },
          {
            prompt: "What does the capstone say about whether a learner should request or dispute anything?",
            options: ["It does not say", "It recommends requesting everything and disputing anything unrecognised", "It recommends waiting until an adverse action notice has been received", "It recommends consulting a licensed professional before taking any step"],
            correctIndex: 0,
            explanation: "It states that every step is optional and that the course does not know the reader's circumstances.",
            sourceLessonSlug: "read-your-own-record",
          },
          {
            prompt: "Which section of the FCRA governs how long an item may appear, which the capstone asks a learner to check dates against?",
            options: ["Section 1681c(a)", "Section 1681b(a), the closed list of permissible purposes for furnishing", "Section 1681j(a), the free annual file disclosure available on request", "Section 1681g(f), the credit score disclosure and its four key factors"],
            correctIndex: 0,
            explanation: "The exclusion list is what makes the fourth of the four per-item facts checkable.",
            sourceLessonSlug: "read-your-own-record",
          },
          {
            prompt: "What is the relationship between the two disclosure regimes this course covers?",
            options: ["One decides access, one prices it", "One is federal and one is left to the States to implement as they choose", "One binds creditors and one binds consumer reporting agencies exclusively", "One applies before the decision and one only after credit has been extended"],
            correctIndex: 0,
            explanation: "The file and the score govern whether credit is offered; the annual percentage rate governs what the offer costs.",
            sourceLessonSlug: "the-number-that-makes-offers-comparable",
          },
          {
            prompt: "What does the course say makes a capstone honest, in the catalog's pattern?",
            options: ["It runs on the learner's own material", "It is graded against the same standard as every section quiz in the course", "It reviews every statute the course quoted in the order they were introduced", "It requires the learner to demonstrate a measurable improvement in outcome"],
            correctIndex: 0,
            explanation: "Taking the mechanism the course taught and running it once, on your own record, is the pattern the catalog uses.",
            sourceLessonSlug: "read-your-own-record",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // FINAL ASSESSMENT — 50 questions, serving 10, passing 80
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "final-credit-decisions",
      title: "25 · Final assessment",
      section: "Final assessment",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 10,
        questions: [
          {
            prompt: "This course's spine, in one sentence, is that a credit decision is made about what?",
            options: ["A record you did not write", "The applicant's stated income and employment as verified by the creditor", "A negotiation between the applicant and an officer of the lending institution", "A ranking of every applicant the creditor considered during the same month"],
            correctIndex: 0,
            explanation: "The record is kept by a company you did not hire, and the party deciding must tell you why it decided as it did.",
            sourceLessonSlug: "the-file-not-the-person",
          },
          {
            prompt: "What is the ordinary failure this course starts from, rather than the one people assume?",
            options: ["Timing", "Overspending on goods a household does not strictly need to buy", "Borrowing at a rate the household did not read before signing the agreement", "Holding too few accounts for a scoring model to produce a reliable result"],
            correctIndex: 0,
            explanation: "Money is owed on one date and arrives on another, which is two calendars that do not line up rather than a character flaw.",
            sourceLessonSlug: "the-gap-money-falls-into",
          },
          {
            prompt: "Which of the three possible responses to a completed application carries a legal definition?",
            options: ["Adverse action", "The counteroffer, which Regulation B defines by amount and by terms offered", "The grant, which the statute defines as extension in the amount requested", "All three, each with its own notification period under Regulation B"],
            correctIndex: 0,
            explanation: "Rights attach to the defined term rather than to the feeling of having been turned down.",
            sourceLessonSlug: "three-things-a-creditor-can-do",
          },
          {
            prompt: "Under Regulation B, what removes a refusal from the definition of adverse action?",
            options: ["An accepted counteroffer", "Written notice of the refusal delivered within thirty days of the application", "A referral to another lender offering the product the applicant requested", "The applicant's failure to supply a document the creditor had requested"],
            correctIndex: 0,
            explanation: "The rule excepts a refusal where the creditor counteroffers and the applicant uses or expressly accepts the credit offered.",
            sourceLessonSlug: "three-things-a-creditor-can-do",
          },
          {
            prompt: "Which phrases appear in the FCRA's statutory definition of a consumer report?",
            options: ["Character and mode of living", "Net worth and total household assets as of the date of the report", "Employment stability and length of residence at the current address", "Payment capacity and projected income over the following twelve months"],
            correctIndex: 0,
            explanation: "The list runs credit worthiness, credit standing, credit capacity, character, general reputation, personal characteristics, or mode of living.",
            sourceLessonSlug: "the-file-not-the-person",
          },
          {
            prompt: "On what basis does the FCRA say a consumer reporting agency assembles information?",
            options: ["For monetary fees", "Under a federal charter renewed every five years by the supervising agency", "As a public service funded by an assessment on the lenders that use reports", "At the direction of the consumer, who authorises each item before it is added"],
            correctIndex: 0,
            explanation: "For monetary fees, dues, or on a cooperative nonprofit basis, which is what makes the agency a business rather than a registry.",
            sourceLessonSlug: "the-file-not-the-person",
          },
          {
            prompt: "How long may a case under title 11 appear in a consumer report?",
            options: ["10 years", "Seven years, the same period the statute sets for most other adverse items", "Indefinitely, because a bankruptcy is a matter of public court record", "Five years, after which the agency must delete it whether or not it is disputed"],
            correctIndex: 0,
            explanation: "Measured from the date of entry of the order for relief or the date of adjudication, as the case may be.",
            sourceLessonSlug: "what-may-appear-and-for-how-long",
          },
          {
            prompt: "What is the FCRA's catch-all reporting period for any other adverse item?",
            options: ["Seven years", "Ten years, matching the period the statute sets for bankruptcy proceedings", "Three years, measured from the last activity the furnisher reported", "Twelve months, matching the period of the free annual file disclosure"],
            correctIndex: 0,
            explanation: "Its only carve-out is records of convictions of crimes, which the statute does not clock at all.",
            sourceLessonSlug: "what-may-appear-and-for-how-long",
          },
          {
            prompt: "Which four words close the FCRA's list of permissible purposes?",
            options: ["And no other", "As the Bureau prescribes by regulation from time to time thereafter", "Or for any similar and legitimate commercial business purpose", "Subject always to the written consent of the consumer concerned"],
            correctIndex: 0,
            explanation: "That makes the list closed rather than illustrative, so an unlisted purpose is not permitted however sensible it looks.",
            sourceLessonSlug: "permissible-purpose",
          },
          {
            prompt: "Which of these is a listed permissible purpose that does not involve lending?",
            options: ["Employment purposes", "Marketing a product to consumers who match a preselected demographic profile", "Compiling a public directory of consumers ranked by repayment behaviour", "Assessing a neighbour's suitability for membership of a residents' association"],
            correctIndex: 0,
            explanation: "Employment and insurance underwriting are separately listed, so parties lending you nothing may lawfully see the file.",
            sourceLessonSlug: "permissible-purpose",
          },
          {
            prompt: "The residual legitimate-business-need purpose reaches a business transaction in what condition?",
            options: ["Initiated by the consumer", "Concluded within the preceding twelve months between the same parties", "Valued above a threshold set by the supervising agency each calendar year", "Approved in advance by the consumer reporting agency furnishing the report"],
            correctIndex: 0,
            explanation: "Or a review of an account to determine whether the consumer continues to meet its terms.",
            sourceLessonSlug: "permissible-purpose",
          },
          {
            prompt: "What does a scoring model return when nothing has been furnished about a consumer?",
            options: ["No score", "The lowest value in the model's published range, as a conservative default", "The average score of consumers in the same postal district as the applicant", "A provisional value that the lender may override with its own judgment"],
            correctIndex: 0,
            explanation: "An absent file is not a clean record; a model built on observed behaviour has nothing to work on.",
            sourceLessonSlug: "the-file-that-does-not-exist",
          },
          {
            prompt: "What procedure does Financing Without Access supply for reading any exclusion?",
            options: ["Which door, what pool, whose risk", "Which statute, which agency, and which fiscal year the exclusion began", "Who applied, who was approved, and in what proportion to the population", "How much, how soon, and at what rate of interest the substitute charged"],
            correctIndex: 0,
            explanation: "Ask which door was closed, what pool replaced it, and who bears the risk.",
            sourceLessonSlug: "the-file-that-does-not-exist",
          },
          {
            prompt: "In the FCRA's own words, what is a credit score derived from?",
            options: ["A statistical tool", "The agency's review of the file conducted by its underwriting staff", "A weighted average of balances carried over the preceding two years", "A poll of the lenders that have previously extended credit to the consumer"],
            correctIndex: 0,
            explanation: "A numerical value or a categorization derived from a statistical tool or modeling system used by a person who makes or arranges a loan.",
            sourceLessonSlug: "a-score-is-a-prediction",
          },
          {
            prompt: "What does the statutory definition say a credit score predicts?",
            options: ["The likelihood of credit behaviors", "The maximum amount the consumer could service from their current income", "The interest rate a competing lender would offer for the same product", "The probability that the consumer will accept the offer if it is made"],
            correctIndex: 0,
            explanation: "The definition names certain credit behaviors, including default, which is why a score is a prediction rather than a measurement.",
            sourceLessonSlug: "a-score-is-a-prediction",
          },
          {
            prompt: "According to the course, what can be wrong, given that a score cannot be?",
            options: ["The file", "The model's range, if it differs from that of a competing model", "The lender's cutoff, if it is set higher than a competitor would set it", "The date the score was created, if the agency records it incorrectly"],
            correctIndex: 0,
            explanation: "A score is an opinion produced from a file, so the record is the object with a correction procedure attached.",
            sourceLessonSlug: "a-score-is-a-prediction",
          },
          {
            prompt: "Why do the FCRA's score-disclosure elements imply that more than one model exists?",
            options: ["Range and provider would be pointless otherwise", "Because the statute requires each agency to build its own scoring model", "Because a single model would breach the antitrust laws governing the industry", "Because the statute names the number of models that may lawfully be used"],
            correctIndex: 0,
            explanation: "A range is only worth stating when ranges differ, and a provider only worth naming when providers differ.",
            sourceLessonSlug: "there-is-no-single-score",
          },
          {
            prompt: "What are the three structural reasons two quoted scores can differ?",
            options: ["Model, file, purpose", "Season, region, and the consumer's age at the time of the request", "Income, employment, and the number of accounts currently held open", "Agency, lender, and the product the consumer has applied for"],
            correctIndex: 0,
            explanation: "Different models, different files at different agencies, and models built for different lending questions.",
            sourceLessonSlug: "there-is-no-single-score",
          },
          {
            prompt: "What is the maximum number of key factors the FCRA requires with a score?",
            options: ["Four", "Three, ranked in order of the weight the model assigned to each", "Six, one for each category of information a file may contain", "There is no maximum, since the statute requires all adverse factors"],
            correctIndex: 0,
            explanation: "The statute requires all of the key factors that adversely affected the score, the total number of which shall not exceed 4.",
            sourceLessonSlug: "the-key-factors",
          },
          {
            prompt: "Why are the key factors more actionable than the number itself?",
            options: ["Each names something checkable", "Each carries a statutory guarantee of the score effect from addressing it", "Each is disclosed more often than the number, which is annual only", "Each is produced by the agency rather than by the model's developer"],
            correctIndex: 0,
            explanation: "A factor names a property of the file, and the file can be obtained, read and corrected.",
            sourceLessonSlug: "the-key-factors",
          },
          {
            prompt: "Under ECOA, a statement of reasons satisfies the statute only if it contains what?",
            options: ["The specific reasons", "The identity of the agency that supplied the report relied upon", "The internal policy number under which the application was classified", "The margin by which the applicant fell short of the creditor's threshold"],
            correctIndex: 0,
            explanation: "The statute closes the loophole with the words only if it contains the specific reasons for the adverse action taken.",
            sourceLessonSlug: "read-your-adverse-action-notice",
          },
          {
            prompt: "Regulation B says the statement of reasons must be specific and indicate what?",
            options: ["The principal reasons", "The number of comparable applications refused in the same period", "The point at which the file diverged from the creditor's requirements", "The scoring model the creditor purchased and applied to the application"],
            correctIndex: 0,
            explanation: "The specificity and principal-reasons requirement is the sentence this whole course turns on.",
            sourceLessonSlug: "read-your-adverse-action-notice",
          },
          {
            prompt: "Which two statements does Regulation B name as insufficient reasons?",
            options: ["Internal standards, and a failed score", "An unverified income, and an incomplete application form", "A recent delinquency, and a short length of credit history", "A high balance, and a large number of recent credit inquiries"],
            correctIndex: 0,
            explanation: "The rule anticipated the two things a creditor would most like to say and closed both.",
            sourceLessonSlug: "read-your-adverse-action-notice",
          },
          {
            prompt: "If a notice offers the right to reasons rather than the reasons, what are the two periods?",
            options: ["60 days to ask, 30 to answer", "30 days to ask, 60 days for the creditor to supply the statement", "90 days to ask, with no deadline on the creditor's reply", "10 business days to ask, and the creditor must reply immediately"],
            correctIndex: 0,
            explanation: "The request must be made within 60 days of the notification, and the creditor then has 30 days.",
            sourceLessonSlug: "read-your-adverse-action-notice",
          },
          {
            prompt: "Which government body must be named in the Regulation B adverse action notification?",
            options: ["The creditor's federal supervisor", "The federal court in whose district the creditor is incorporated", "The attorney general of the applicant's own State of residence", "The federal supervisor of the consumer reporting agency used"],
            correctIndex: 0,
            explanation: "The rule requires the name and address of the Federal agency that administers compliance with respect to that creditor.",
            sourceLessonSlug: "read-your-adverse-action-notice",
          },
          {
            prompt: "What fact triggers the FCRA's adverse action duties, as distinct from Regulation B's?",
            options: ["Reliance on a consumer report", "The applicant's prior written request for a copy of the report", "The creditor being supervised by a federal rather than a State regulator", "The applicant's score falling below the model's published median"],
            correctIndex: 0,
            explanation: "The duties apply where the adverse action is based in whole or in part on information contained in a consumer report.",
            sourceLessonSlug: "the-second-notice-on-the-same-page",
          },
          {
            prompt: "What must a user tell a consumer about the consumer reporting agency's role?",
            options: ["It did not make the decision", "It has already been notified and will annotate the consumer's file", "It bears no liability for any inaccuracy in the information supplied", "It may not be contacted until thirty days after the decision is made"],
            correctIndex: 0,
            explanation: "And that it is unable to provide the consumer the specific reasons why the adverse action was taken.",
            sourceLessonSlug: "the-second-notice-on-the-same-page",
          },
          {
            prompt: "What period must the adverse action notice indicate for obtaining a free copy of the report?",
            options: ["60 days", "12 months, matching the free annual file disclosure entitlement", "30 days, matching the agency's reinvestigation period for a dispute", "90 days, matching the counteroffer period under Regulation B"],
            correctIndex: 0,
            explanation: "The notice must include an indication of the 60-day period under section 1681j for obtaining the copy.",
            sourceLessonSlug: "the-second-notice-on-the-same-page",
          },
          {
            prompt: "What triggers a risk-based pricing notice under Regulation V?",
            options: ["Materially less favourable terms", "Any refusal to grant credit in substantially the amount requested", "Any use of a consumer report in connection with a credit application", "Any change in the terms of an existing account held by the consumer"],
            correctIndex: 0,
            explanation: "Compared to the most favourable material terms available to a substantial proportion of consumers from that person.",
            sourceLessonSlug: "the-second-notice-on-the-same-page",
          },
          {
            prompt: "What eligibility test did the federal farm lender apply in statute until 1994?",
            options: ["Character, industry, and ability", "A minimum acreage and a demonstrated three-year yield history", "Residence in the county and the endorsement of two neighbours", "Collateral sufficient to secure the full amount of the loan requested"],
            correctIndex: 0,
            explanation: "The County Committee teaches the test, the elected body that applied it, and the notice recording its repeal.",
            sourceLessonSlug: "a-gate-that-must-state-a-standard",
          },
          {
            prompt: "What do the federal farm gate and the private credit gate share, in this course's account?",
            options: ["Each must state something", "Each applies a test written by Congress and reviewable in federal court", "Each is operated by people elected by the community the applicant lives in", "Each gives a refused applicant an administrative right of appeal"],
            correctIndex: 0,
            explanation: "One published its standard in advance and one must explain its application afterwards, but a gate that must state something can be argued with.",
            sourceLessonSlug: "a-gate-that-must-state-a-standard",
          },
          {
            prompt: "ECOA's prohibition reaches discrimination with respect to what?",
            options: ["Any aspect of a credit transaction", "The decision to grant or refuse credit, and nothing beyond that", "The advertising of credit products but not individual applications", "The interest rate charged but not the servicing of the account"],
            correctIndex: 0,
            explanation: "Any aspect reaches the terms, the pricing, the servicing and the collection.",
            sourceLessonSlug: "a-gate-that-must-state-a-standard",
          },
          {
            prompt: "Which income source does ECOA name separately as a prohibited basis?",
            options: ["Public assistance", "Self-employment income where returns have been filed for two years", "Rental income from residential property the applicant owns and lets", "Pension income from a plan sponsored by a former employer"],
            correctIndex: 0,
            explanation: "The statute names income derived in whole or in part from any public assistance program.",
            sourceLessonSlug: "a-gate-that-must-state-a-standard",
          },
          {
            prompt: "How long does an agency have to complete a reinvestigation, and from when?",
            options: ["30 days from receipt", "30 days from the date the consumer posted the notice of dispute", "Five business days from receipt, matching the furnisher notification", "60 days from receipt, extendable by a further 30 on written notice"],
            correctIndex: 0,
            explanation: "The period runs to the end of the 30-day period beginning on the date the agency receives the notice.",
            sourceLessonSlug: "the-dispute-and-the-clock",
          },
          {
            prompt: "Within what period must an agency notify the furnisher of a dispute?",
            options: ["Five business days", "Thirty days, the same period allowed for the reinvestigation itself", "Ten calendar days from the date the consumer posted the notice", "Immediately, since the statute sets no period for the notification"],
            correctIndex: 0,
            explanation: "At the address and in the manner established with that person, which is what makes one dispute move two institutions.",
            sourceLessonSlug: "the-dispute-and-the-clock",
          },
          {
            prompt: "Which three findings require an agency to delete or modify a disputed item?",
            options: ["Inaccurate, incomplete, unverifiable", "Adverse, disputed, and beyond the applicable reporting period", "Proved false, admitted false, or withdrawn by the furnisher", "Duplicated, misattributed, or drawn from a sealed public record"],
            correctIndex: 0,
            explanation: "Because unverifiable carries the same consequence as false, the consumer never has to prove a negative.",
            sourceLessonSlug: "the-dispute-and-the-clock",
          },
          {
            prompt: "What three remedies must a furnisher apply when its investigation finds an item wrong?",
            options: ["Modify, delete, or permanently block", "Annotate, suspend, or re-verify at the next reporting cycle", "Refund, apologise, or refer the matter to its compliance team", "Notify the consumer, the agency, and its own federal supervisor"],
            correctIndex: 0,
            explanation: "And it must report an incomplete or inaccurate finding to the nationwide agencies, not only to the one that asked.",
            sourceLessonSlug: "the-furnisher-has-duties-too",
          },
          {
            prompt: "Why does the course call a dispute filed with the agency leverage?",
            options: ["It compels the knowledgeable party to look", "It suspends the item from all users while the dispute remains open", "It creates a presumption that the disputed item is inaccurate", "It entitles the consumer to statutory damages for each day of delay"],
            correctIndex: 0,
            explanation: "The agency mostly has no independent knowledge of the item; the furnisher does, and the procedure makes it look on a clock.",
            sourceLessonSlug: "the-furnisher-has-duties-too",
          },
          {
            prompt: "What is the FCRA's floor for free file disclosures?",
            options: ["Once in any 12-month period", "Twice a year, once in each half, on separate written requests", "Once in any 24-month period unless credit has been refused", "Unlimited, subject to identity verification at each request"],
            correctIndex: 0,
            explanation: "On request and without charge, from each nationwide agency and each nationwide specialty agency.",
            sourceLessonSlug: "getting-your-own-file",
          },
          {
            prompt: "What does 12 CFR 1022.136 require, and what does it NOT contain?",
            options: ["A centralized source, but not its address", "An address for the centralized source, but no toll-free number", "A duty on each agency separately, but no joint obligation", "A fee schedule for disclosures, but no free annual entitlement"],
            correctIndex: 0,
            explanation: "The rule requires a single dedicated website and toll-free number without printing the address of either.",
            sourceLessonSlug: "getting-your-own-file",
          },
          {
            prompt: "Where does this course say the address of the centralized source comes from?",
            options: ["The agency that explains the statute", "The consumer reporting agencies' own published terms of service", "The Federal Register notice authorising the centralized source", "The adverse action notice, which must name the site by law"],
            correctIndex: 0,
            explanation: "The CFPB's own consumer page names it, and the course prints both that page's review date and the date it was read.",
            sourceLessonSlug: "getting-your-own-file",
          },
          {
            prompt: "In TILA's own findings, what is meaningful disclosure of credit terms for?",
            options: ["Comparing more readily", "Capping the rate that any lender may lawfully charge a consumer", "Standardising the records a lender must retain for each transaction", "Enabling supervisors to monitor lenders' pricing across the market"],
            correctIndex: 0,
            explanation: "So the consumer can compare more readily the various credit terms available and avoid the uninformed use of credit.",
            sourceLessonSlug: "the-number-that-makes-offers-comparable",
          },
          {
            prompt: "What are the two steps of the open-end annual percentage rate formula?",
            options: ["Divide, then multiply by periods per year", "Multiply by the term in years, then subtract the amount financed", "Compound the periodic rate, then convert the result to a percentage", "Allocate each payment to charge and principal, then solve for the rate"],
            correctIndex: 0,
            explanation: "The quotient of the period's finance charge over the amount it was based on, multiplied by the number of such periods in a year.",
            sourceLessonSlug: "the-number-that-makes-offers-comparable",
          },
          {
            prompt: "A charge of 15 on 100 for a period, with 26 periods in a year, annualises to what?",
            options: ["390 percent", "15 percent, since the charge is fifteen percent of the amount charged on", "26 percent, since there are twenty-six periods in the year", "41 percent, since the periodic rate must be compounded not multiplied"],
            correctIndex: 0,
            explanation: "Fifteen over one hundred is 0.15, multiplied by twenty-six is 3.9, expressed as a percentage 390.",
            sourceLessonSlug: "the-number-that-makes-offers-comparable",
          },
          {
            prompt: "Which method does the statute name for credit not under an open-end plan?",
            options: ["The actuarial method", "The quotient method applied to the longest period in the plan", "The simple interest method applied to the original amount financed", "The declining balance method applied at each calendar quarter end"],
            correctIndex: 0,
            explanation: "Each payment is applied first to accumulated finance charge and the balance to the unpaid amount financed.",
            sourceLessonSlug: "the-number-that-makes-offers-comparable",
          },
          {
            prompt: "Which three layers does every right in this course sit in?",
            options: ["Statute, regulation, agency", "Congress, the courts, and the individual States in descending order", "Federal law, State law, and the contract between the parties", "The creditor, the reporting agency, and the model developer"],
            correctIndex: 0,
            explanation: "And knowing which layer a claim comes from tells you how much to trust it next year.",
            sourceLessonSlug: "who-writes-the-rules",
          },
          {
            prompt: "Which layer does this course date rather than describe in the present tense?",
            options: ["The agency", "The statute, which Congress may amend at any time without notice", "The regulation, which changes through a process that leaves no record", "All three, since every layer of the stack was in flux during 2026"],
            correctIndex: 0,
            explanation: "Its authorities, funding and enforcement posture were the subject of active change and litigation through 2025 and 2026.",
            sourceLessonSlug: "who-writes-the-rules",
          },
          {
            prompt: "What is the course's argument for building on statutes rather than agency guidance?",
            options: ["The bottom two layers hold still", "Statutes are shorter and easier for a learner to read in full", "Guidance cannot be cited with a stable and permanent web address", "Guidance binds only institutions that a federal agency examines"],
            correctIndex: 0,
            explanation: "The right to specific principal reasons does not depend on who is currently supervising the creditor.",
            sourceLessonSlug: "who-writes-the-rules",
          },
          {
            prompt: "What are the three headings of the capstone's one-page summary?",
            options: ["What it says, where they disagree, what I could not verify", "What I owe, what I earn, and what remains after both are counted", "What is accurate, what is inaccurate, and what I intend to dispute", "What each agency reports, what each scores, and which is highest"],
            correctIndex: 0,
            explanation: "The third heading is the useful one, and it is the discipline the catalog applies to its own sourcing.",
            sourceLessonSlug: "read-your-own-record",
          },
          {
            prompt: "What does the capstone say a learner will have at the end?",
            options: ["The documents and the disagreements", "A higher score at each of the three nationwide reporting agencies", "A dispute resolved in the learner's favour at every agency contacted", "A financial plan tailored to the learner's own income and obligations"],
            correctIndex: 0,
            explanation: "Plus the knowledge of exactly which statute answers each remaining question, which is a different thing from advice.",
            sourceLessonSlug: "read-your-own-record",
          },
        ],
      },
    },
  ],
};
