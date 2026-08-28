import type { AuthoredCourse } from "./authored-course";

// MONEY-04 · "Predatory Products, Priced" (Money & Property). Source brief:
// plans/future-courses/2026-08-27-15-personal-finance-track-research.md, sections 4.10, 7 and 10.
// Fourth course of the `personal-money` series, code MONEY. Tier 0.
//
// THE SPINE, and the sentence the whole course is built to keep true:
// A PREDATORY PRODUCT IS NOT A SCAM. IT IS LEGAL, DISCLOSED, AND PRICED.
// That distinction is the course. A scam is illegal on its face and the remedy is fraud law. A
// predatory product is sold by a licensed business under an enforceable written contract with its
// price printed on it, and the remedy is arithmetic plus the disclosure rules. Teaching them as one
// thing produces the generic "avoid scams" lesson, which leaves a reader unable to price the legal
// product they will actually be offered, and unable to tell what recourse they hold when money
// leaves an account.
//
// THE SECOND SPINE, AND THE SINGLE MOST USEFUL THING IN THE COURSE. Regulation E (12 CFR part 1005)
// draws a line almost nobody knows exists. When someone takes money from your account WITHOUT
// authority, the definition at 1005.2(m) is met, the error-resolution machinery at 1005.11 runs, the
// liability caps at 1005.6 apply, and 15 U.S.C. 1693g(b) puts the burden of proof on the
// institution. When you were TRICKED INTO AUTHORISING THE TRANSFER YOURSELF, the definition is not
// met, and none of that machinery starts. Same loss, same person, different rule, and the rule
// decides who bears it.
//
// WHAT THIS COURSE REFUSES TO DO, RECORDED SO A LATER EDITOR CANNOT SOFTEN ONE BY ACCIDENT:
//   1. IT GIVES NO FINANCIAL ADVICE and does not moralise in either direction. It never tells a
//      reader what to do with their own money, never names a lender or a product as good or bad,
//      and never implies that a person using one of these products made a foolish choice. MONEY-02
//      teaches the FDIC's own collected reasons households give for using nonbank services, and
//      those reasons are reasons. Said in PROSE in three places, per the `surplus-funds-basics`
//      posture: Section 1 lesson 1, Section 4 lesson 3, and the capstone.
//   2. IT PRINTS NO NATIONAL RATE OR CAP. Small-dollar lending is state law and the states disagree
//      completely: New York makes lending above 25 percent per annum a felony under Penal Law
//      190.40, while Florida licenses the same transaction under Fla. Stat. 560.404 with a 10
//      percent fee cap and a rollover ban. Two real statutes, opposite answers, both quoted. The
//      course teaches HOW TO FIND YOUR OWN STATE'S RULE and dates every figure it prints.
//   3. IT STATES THE POSTURE OF EVERY ENFORCEMENT ACTION IT CITES. A complaint is an allegation, a
//      stipulated order is a settlement, a jury verdict is a finding. The FTC's own boilerplate
//      says so and is quoted in Section 6 lesson 2. No allegation is described as a proven fact.
//
// SOURCING. Statute and regulation over agency guidance, for the reason MONEY-01 established: the
// durable layer is 15 U.S.C. and 12 CFR, and an agency's footing moved in 2025 and 2026. EVERY
// primary document below was fetched and read on 28 AUGUST 2026:
//   · TILA: 15 U.S.C. 1601(a) (compare more readily), 1606(a)(2) (the open-end computation this
//     course reuses as the fee-to-rate conversion), 1643 (unauthorized card use).
//   · Regulation Z: 12 CFR 1026.2(a)(16) (credit sale, and why a rent-to-own lease falls outside),
//     1026.12(b) (the 50 dollar card cap) and 1026.12(c) (claims and defenses against the issuer).
//   · EFTA and Regulation E: 15 U.S.C. 1693g(a) and (b); 12 CFR 1005.2(m) (unauthorized electronic
//     fund transfer, with its three exclusions), 1005.3(c) (what is not an EFT at all, including
//     the wire-transfer exclusion), 1005.6 (liability tiers), 1005.11 (error resolution clocks).
//   · MLA: 10 U.S.C. 987(b), (e) and (i); 32 CFR 232.3(f) and 232.4(b)-(d).
//   · FCRA identity-theft remedies: 15 U.S.C. 1681c-1 (fraud alert, extended alert, security
//     freeze) and 1681c-2 (the block).
//   · Tax: 26 U.S.C. 6402(m) (the PATH Act refund hold that shapes the refund-loan market).
//   · State law, as the method rather than as a table: N.Y. Penal Law 190.40; Fla. Stat. 560.404;
//     Conn. Gen. Stat. 42-240, 42-241 and 42-248 (rent-to-own disclosure and the 2x cap).
//   · Enforcement, with posture: FTC v. Progressive Leasing (N.D. Ga., complaint and proposed
//     stipulated final order, 20 April 2020); FTC and 18 states v. Harris Jewelry (complaint and
//     proposed order, 20 July 2022, the FTC's first Military Lending Act action); United States v.
//     Tucker and Muir (S.D.N.Y., jury verdict 13 October 2017, sentence 5 January 2018); AMG
//     Capital Management, LLC v. FTC, 593 U.S. 67 (2021).
//
// House style, inherited from MONEY-01 and MONEY-02: `section` on every lesson; flush-left
// single-line `:::reveal q ||| a`; a `## Vocabulary` block of 3-6 lesson-specific terms; APA 7
// `## Sources` with a stable URL; a quiz per teaching section (pool sized by density, serving 5,
// passing 80, shuffled) plus a final serving 10; every question carries `explanation` and
// `sourceLessonSlug`. Correct options are written SHORT and distractors long and specific, so
// `check-longest-option` passes by construction rather than by post-hoc trimming.
export const PREDATORY_PRODUCTS_COURSE: AuthoredCourse = {
  title: "Predatory Products, Priced",
  description:
    "A scam and a predatory product are not the same object, and confusing them costs people money twice. A scam is illegal on its face, and the remedy is fraud law. A predatory product is legal, sold by a licensed business under a written contract, with its price printed on the page, and the remedy is arithmetic. This course prices the legal ones. It starts with the tool the law itself requires, the annual percentage rate, which exists under the Truth in Lending Act so that two offers stated in different units can be compared, and it teaches the conversion that turns a flat fee into one. Then the small-dollar loan, where the cost is not in the first loan but in the renewal, a mechanism the Supreme Court described in a single sentence about fine print and a federal jury in New York found a lender had understated by a factor of nearly ten. Then rent-to-own, where the total of payments can approach or exceed twice the cash price, and where no annual percentage rate appears at all, because Regulation Z's definition of a credit sale turns on whether the customer agreed to pay, and a lease you may end at any time is not that agreement. Then the products that attach to money you are already owed: a tax refund that federal law holds until a stated date for the households most likely to be offered a loan against it, and overdraft, which is priced. Then the line that decides who bears a loss when money leaves an account, which is the most useful thing this course teaches. Regulation E defines an unauthorized electronic fund transfer as one initiated by someone other than you without your authority, and the error-resolution machinery, the liability caps and the burden of proof on the institution all hang on that definition being met. A transfer you were tricked into making yourself does not meet it. The course closes on who is targeted, taught from public enforcement records rather than from assertion, and on how to read one: a complaint is an allegation, a stipulated order is a settlement, and a jury verdict is a finding, and the difference matters. It gives no financial advice, prints no national rate, dates every figure, and teaches you to find your own state's rule rather than trusting a table.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1 — Legal, disclosed, and priced
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "not-a-scam-a-product",
      title: "1 · A predatory product is legal, disclosed, and priced",
      section: "Section 1 · Legal, disclosed, and priced",
      body: `Somebody takes your money by pretending to be your bank. Somebody else charges you 1,925 dollars to borrow 500. Only one of those is a crime, and it is not the expensive one.

**That sentence is the course.** A scam is illegal on its face: money moves because a lie was told, and the remedy is fraud law, criminal or civil. A predatory product is something else entirely. It is sold by a business holding a state licence, under a written contract, with the price printed on the page, and if you do not pay it the seller can take you to court and win. Nothing about it is hidden and nothing about it is illegal. **The cost is the product.**

**Why the distinction is not academic.** The two objects have completely different remedies, and reaching for the wrong one wastes the only move you have. Against a scam you have reporting, a police report, and, when money left an account without your say-so, a federal error-resolution procedure with deadlines that Section 5 takes apart line by line. Against a legal product you have none of that, because nothing went wrong: what you have instead is arithmetic, a disclosure the law requires, and, before you sign, the ability to compare. A course that teaches "watch out for scams" and stops has left you unable to price the thing you will actually be offered.

**What this course is, and is not.** It is a course about how these products are built and what they cost, taught from the statutes and regulations that govern them. **It is not financial advice and it will not give you any.** It will not tell you to use or avoid any product, will not name a lender, and does not know your circumstances. It will also not do the other thing, which is to imply that a person who used one of these products made a foolish choice. MONEY-02 in this series works through the FDIC's own biennial survey, which asks households without a bank account why and publishes their answers, and the answers are reasons rather than excuses: the most cited one is not having enough money to meet a minimum balance, and the rest run to predictability of cost, distance, opening hours, and having been refused before. **A person choosing a priced product over an unavailable one is doing arithmetic, not failing at it.**

**The method, borrowed from a course you can go and read.** This catalog's *Financing Without Access* states a procedure for reading any exclusion: ask which door was closed, what pool replaced it, and who bears the risk. Applied to a two-week loan at a storefront, that procedure produces the whole analysis. The door that closed was mainstream credit, for the reasons MONEY-01 works through. The pool that replaced it prices for very short terms and a high rate of non-payment. And the risk sits with the borrower, which is why the security, where there is any, is a post-dated cheque, a debit authorisation, or a car title.

**Two habits, the same two MONEY-01 committed to.** Every figure in this course carries a date, because financial specifics go stale silently. And this course teaches a method rather than a table, which matters more here than anywhere else in the series: small-dollar lending is state law, the states disagree with each other completely, and a national number would be wrong in most of the country on the day it was printed.

:::reveal What single feature separates a predatory product from a scam? ||| The predatory product is legal: licensed, contracted, disclosed, and enforceable in court.

:::reveal Why does the distinction change what you can do about it? ||| The remedies differ. A scam reaches fraud law and, sometimes, a federal error-resolution procedure; a legal product reaches only arithmetic and the disclosure rules.

:::reveal What three questions does the procedure borrowed from Financing Without Access ask? ||| Which door was closed, what pool replaced it, and who bears the risk.

## Vocabulary
- **Predatory product**: a lawful, licensed, contractually enforceable financial product whose price is disclosed and very high relative to the amount borrowed and the length of the term.
- **Scam**: a transfer obtained by deception, illegal on its face, where the remedy is fraud law rather than price comparison.
- **Alternative financial services**: the nonbank market of small-dollar lenders, cheque cashers, money transmitters and lease-purchase sellers that MONEY-02 prices from published fee schedules.
- **Method rather than table**: this course's rule that it teaches how to find the rule that governs you rather than printing a national summary that goes stale without announcing it.

## Sources
15 U.S.C. § 1601. (n.d.). *Congressional findings and declaration of purpose*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/15/1601

United States Attorney's Office, Southern District of New York. (2018, January 5). *Scott Tucker sentenced to more than 16 years in prison for running $3.5 billion unlawful internet payday lending enterprise*. U.S. Department of Justice. https://www.justice.gov/usao-sdny/pr/scott-tucker-sentenced-more-16-years-prison-running-35-billion-unlawful-internet-payday`,
    },
    {
      slug: "the-conversion-the-law-requires",
      title: "2 · A fee is a rate, and the law already told you why",
      section: "Section 1 · Legal, disclosed, and priced",
      body: `Two offers. One charges 15 dollars. The other charges 22 percent. Which is cheaper?

The question is unanswerable as asked, and that is not an accident of wording. It is the exact problem Congress named when it wrote the Truth in Lending Act, whose stated purpose is:

> "to assure a meaningful disclosure of credit terms so that the consumer will be able to compare more readily the various credit terms available to him and avoid the uninformed use of credit" (15 U.S.C. § 1601, n.d.)

**Compare more readily.** Not "borrow less", not "borrow wisely". The statute's problem is that two prices stated in different units cannot be ranked, and its answer is a single standardized number, the annual percentage rate, that every covered offer has to state in the same units.

**MONEY-01 taught what the number is. This course teaches the conversion that produces it**, because the products in this course quote a fee, and a fee is where the difficulty lives.

**The arithmetic, from the statute rather than from a rule of thumb.** For open-end credit, 15 U.S.C. § 1606(a)(2) defines the annual percentage rate as the quotient of the finance charge for a period divided by the amount the charge is based on, multiplied by the number of such periods in a year. Written out, that is two steps and no more:

1. **The periodic rate.** Divide the charge by the amount financed. A 15 dollar charge on 100 dollars is 0.15, or 15 percent, **for that period**.
2. **The number of periods in a year.** A 14-day period happens 365 divided by 14 times a year, which is about 26.07.

Multiply: 0.15 times 26.07 is about 3.91, or roughly **391 percent a year**. The same charge on a 30-day period annualizes at 0.15 times 12.17, about 183 percent. **Nothing changed except the term**, which is the whole reason the period cannot be left out of the comparison.

**Read that arithmetic in both directions, because that is what makes it honest.** It does not say the lender earned 391 percent, and it does not say the borrower will pay 391 dollars. It says: **if this price ran for a year at this pace, it would come to that.** That is a unit conversion, not an accusation. It is also the only way to set a 15 dollar charge beside a 22 percent card and see which is dearer for the same money over the same days.

**Now the part that matters for the rest of the course.** The comparison tool only appears where the law says it must. Regulation Z requires the disclosure for consumer credit, so a payday loan and a title loan carry an annual percentage rate on the paperwork. **A rent-to-own agreement usually does not, because it is generally not structured as credit at all.** Section 3 works through the definition that decides it. When the number is missing, you are not being cheated; you are being handed a product the comparison rule was never written to reach, and the arithmetic is yours to do.

Every figure in this lesson is arithmetic performed on numbers chosen as examples. **They are not rates in force anywhere.** What your state permits is the subject of Section 2 lesson 3.

:::reveal In the Truth in Lending Act's own words, what is meaningful disclosure of credit terms for? ||| So that the consumer will be able to compare more readily the various credit terms available and avoid the uninformed use of credit.

:::reveal What are the two steps that turn a flat fee into an annual percentage rate? ||| Divide the charge by the amount financed to get the periodic rate, then multiply by the number of such periods in a year.

:::reveal A 15 dollar charge per 100 dollars over 14 days annualizes to roughly what? ||| About 391 percent.

:::reveal Why does the same charge produce a much lower annual rate over a 30-day term? ||| Because a 30-day period repeats about 12 times a year rather than about 26, and the annual rate is the periodic rate times the number of periods.

## Vocabulary
- **Annual percentage rate**: the standardized annualized cost of credit that the Truth in Lending Act requires to be disclosed so two offers stated in different units can be ranked.
- **Periodic rate**: the finance charge for one period divided by the amount it is charged on, before any annualization.
- **Annualization**: multiplying a periodic rate by the number of such periods in a year, which is what removes the length of the term from a price comparison.
- **Finance charge**: the cost of credit expressed as a dollar amount, which is the numerator of the periodic rate.

## Sources
15 U.S.C. § 1601. (n.d.). *Congressional findings and declaration of purpose*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/15/1601

15 U.S.C. § 1606. (n.d.). *Determination of annual percentage rate*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/15/1606`,
    },
    {
      slug: "one-class-congress-capped",
      title: "3 · Congress capped this rate for one class of people",
      section: "Section 1 · Legal, disclosed, and priced",
      body: `There is a 36 percent ceiling in federal law on the cost of consumer credit. It applies to about one percent of the population.

**The Military Lending Act is the sharpest single object in this course**, because it is a completed argument sitting in the United States Code. Congress looked at small-dollar lending, decided the price was too high, and capped it. Then it capped it for servicemembers and their dependents, and for nobody else.

**The cap itself.** 10 U.S.C. § 987(b) says a creditor "may not impose an annual percentage rate of interest greater than 36 percent" on covered consumer credit extended to a covered member or a dependent (10 U.S.C. § 987, n.d.). The Department of Defense rule that implements it repeats the number: 32 CFR § 232.4(b) states that a creditor "may not impose an MAPR greater than 36 percent in connection with an extension of consumer credit" (32 CFR § 232.4, n.d.).

**Read the acronym, because it is doing work.** MAPR is the **military annual percentage rate**, and it is deliberately wider than the ordinary one. Under 32 CFR § 232.4(c) it sweeps in credit insurance premiums, debt cancellation and suspension fees, charges for credit-related ancillary products, finance charges, application fees and participation fees. **The ordinary annual percentage rate can be held down by moving cost into a fee. The military one cannot**, and that design tells you exactly which evasion the drafters had seen.

**Who is covered.** 10 U.S.C. § 987(i)(1) defines a covered member as a person on active duty under a call or order exceeding 30 days, or on active Guard and Reserve duty, and the protection extends to dependents.

**What else the statute forbids.** Subsection (e) is a list of practices, not just a price: a creditor may not roll over or refinance the debt with new credit from the same creditor, may not require a waiver of the servicemember's legal recourse, may not impose mandatory arbitration or onerous notice requirements, may not take a post-dated cheque or a vehicle title as security, may not require repayment by military allotment, and may not penalise prepayment. **Every item on that list is a mechanism this course goes on to teach.** Read backwards, subsection (e) is a description of the market as Congress found it.

**And read the exclusions, because they are just as informative.** 32 CFR § 232.3(f) carves residential mortgages out of the definition of consumer credit, and it carves out "Any credit transaction that is expressly intended to finance the purchase of a motor vehicle when the credit is secured by the vehicle being purchased" (32 CFR § 232.3, n.d.). So a loan to *buy* a car is outside the cap. Section 2 lesson 4 covers the loan secured by a car you *already own*, which is a different transaction and is not carved out.

**The teaching point, and it is not a slogan.** The existence of this cap answers a question people argue about in the abstract: is 36 percent a workable ceiling? Congress answered yes, in statute, for a named class. What the statute does not do is extend that answer to anyone else, and that gap is the subject rather than the outrage. **A rule that protects one group is a fact about who the law decided to protect.**

:::reveal What rate ceiling does 10 U.S.C. 987 set, and on whom? ||| 36 percent, on consumer credit extended to covered servicemembers and their dependents.

:::reveal Why is the military annual percentage rate wider than the ordinary one? ||| Because 32 CFR 232.4(c) requires credit insurance, debt cancellation fees, ancillary product charges, application fees and participation fees to be counted inside it.

:::reveal Name three practices 10 U.S.C. 987(e) forbids in covered credit. ||| Rolling the debt over with new credit from the same creditor, requiring mandatory arbitration, and taking a vehicle title as security.

:::reveal Is a loan to purchase a car covered by the Military Lending Act cap? ||| No. 32 CFR 232.3(f) excludes credit expressly intended to finance the purchase of a motor vehicle when it is secured by that vehicle.

## Vocabulary
- **Military Lending Act**: 10 U.S.C. 987, the federal statute capping the cost of covered consumer credit to servicemembers and their dependents and forbidding a list of specific loan terms.
- **MAPR**: the military annual percentage rate, defined at 32 CFR 232.4 to include ancillary charges the ordinary annual percentage rate can leave out.
- **Covered member**: under 10 U.S.C. 987(i)(1), a person on active duty under a call or order exceeding 30 days, or on active Guard and Reserve duty.
- **Purchase-money exclusion**: the carve-out at 32 CFR 232.3(f) for credit that finances the purchase of the vehicle securing it, which is why a title loan on a car you already own is a different transaction.

## Sources
10 U.S.C. § 987. (n.d.). *Terms of consumer credit extended to members and dependents: limitations*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/10/987

32 CFR § 232.3. (n.d.). *Definitions*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/32/232.3

32 CFR § 232.4. (n.d.). *Terms of consumer credit extended to covered borrowers*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/32/232.4`,
    },
    {
      slug: "quiz-legal-disclosed-priced",
      title: "4 · Knowledge check: legal, disclosed, and priced",
      section: "Section 1 · Legal, disclosed, and priced",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What does this course say separates a predatory product from a scam?",
            options: ["The product is legal", "The product costs the borrower a larger amount of money in total than any scam would", "The product is sold in a physical storefront rather than over the telephone or the internet", "The product is offered only to people who have already been refused credit somewhere else"],
            correctIndex: 0,
            explanation: "It is licensed, contracted, disclosed and enforceable in court, and the cost is the product rather than a concealment.",
            sourceLessonSlug: "not-a-scam-a-product",
          },
          {
            prompt: "Why does the scam-versus-product distinction change what a person can do about a loss?",
            options: ["The remedies differ", "Because a state regulator will investigate one of them and a federal regulator will investigate the other", "Because the two are recorded in different sections of a consumer report and stay there for different periods", "Because one can be disputed with a credit card issuer and the other must be taken to small claims court"],
            correctIndex: 0,
            explanation: "A scam reaches fraud law and sometimes a federal error-resolution procedure; a legal product reaches arithmetic and the disclosure rules and nothing else.",
            sourceLessonSlug: "not-a-scam-a-product",
          },
          {
            prompt: "Against a legal, licensed, fully disclosed high-cost product, what does this course say a borrower actually has?",
            options: ["Arithmetic and the disclosure", "A statutory right to rescind the agreement within three business days of signing it", "A right to have the lender state the principal reasons it set the price where it did", "A federal error-resolution procedure with a thirty-day investigation deadline attached"],
            correctIndex: 0,
            explanation: "Nothing went wrong, so no error procedure starts. What remains is the required disclosure and the ability to compare before signing.",
            sourceLessonSlug: "not-a-scam-a-product",
          },
          {
            prompt: "Which of these does this course expressly promise not to do?",
            options: ["Give financial advice", "Quote the text of any state statute that permits a small-dollar lending transaction to be made", "Describe the mechanism by which a lender converts a flat fee into an annualized rate", "Name any federal regulation that governs how a consumer deposit account may be debited"],
            correctIndex: 0,
            explanation: "It teaches how the products are built and priced, and it never tells a reader what to do with their own money.",
            sourceLessonSlug: "not-a-scam-a-product",
          },
          {
            prompt: "What second thing does the course refuse to do, alongside giving advice?",
            options: ["Imply the borrower was foolish", "Describe any specific company by name, even where a court has entered a judgment against it", "Compare a nonbank product against a bank product, because the two are not sold on the same terms", "State the annual percentage rate of any product whose fee is quoted in dollars rather than percent"],
            correctIndex: 0,
            explanation: "MONEY-02 works through the FDIC's own survey of why households use nonbank services, and those answers are reasons rather than excuses.",
            sourceLessonSlug: "not-a-scam-a-product",
          },
          {
            prompt: "According to the sibling course MONEY-02, what is the most cited reason households give for having no bank account?",
            options: ["Not enough money for a minimum balance", "Not being able to produce a driver's licence or a Social Security number at the branch", "Not trusting banks after a previous account was closed by the institution without notice", "Not having a branch within a reasonable travelling distance of home or of work"],
            correctIndex: 0,
            explanation: "The other cited reasons run to predictability of cost, distance, opening hours, and having been refused before.",
            sourceLessonSlug: "not-a-scam-a-product",
          },
          {
            prompt: "What three questions does the procedure this course borrows from Financing Without Access ask?",
            options: ["Which door closed, what pool replaced it, who bears the risk", "What was borrowed, over what term, and at what annual percentage rate the lender disclosed", "Which regulator licensed the lender, which statute it charges under, and which court would hear a dispute", "How much was paid in fees, how much in interest, and how much of the principal remains outstanding"],
            correctIndex: 0,
            explanation: "Applied to a two-week storefront loan, that procedure produces the whole analysis without any new vocabulary.",
            sourceLessonSlug: "not-a-scam-a-product",
          },
          {
            prompt: "Applying that procedure to small-dollar lending, where does the course say the risk sits?",
            options: ["With the borrower", "With the state regulator, which guarantees repayment out of a licensing fund it maintains", "With the lender's own bank, which advances the money and collects it from the borrower's employer", "Split evenly between borrower and lender, because the security is held by a neutral third party"],
            correctIndex: 0,
            explanation: "That is why the security, where there is any, is a post-dated cheque, a debit authorisation, or a car title.",
            sourceLessonSlug: "not-a-scam-a-product",
          },
          {
            prompt: "Why does this course attach a date to every figure it prints?",
            options: ["Figures go stale silently", "Because a dated figure carries evidentiary weight in a dispute with a state financial regulator", "Because federal law requires a publisher to date any numerical claim it makes about consumer credit", "Because the catalog's citation tooling cannot extract a source unless a date appears beside it"],
            correctIndex: 0,
            explanation: "An undated number is a claim someone will still be repeating years after the rule behind it changed.",
            sourceLessonSlug: "not-a-scam-a-product",
          },
          {
            prompt: "Why does teaching a method rather than a table matter more in this course than anywhere else in the series?",
            options: ["Small-dollar lending is state law", "Because the federal rules governing these products are reissued by the agency every calendar year", "Because the products themselves are renamed frequently enough that a table's headings stop matching", "Because a table cannot show the arithmetic that converts a quoted fee into an annualized rate"],
            correctIndex: 0,
            explanation: "The states disagree with each other completely, so a national number would be wrong in most of the country on the day it was printed.",
            sourceLessonSlug: "not-a-scam-a-product",
          },
          {
            prompt: "In the opening comparison, which of the two events is the crime?",
            options: ["The impersonation", "The loan of 500 dollars that ends up costing 1,925 dollars to repay in full", "Both, because charging more than a state's usury ceiling is a criminal offence everywhere", "Neither, because both transactions were carried out under a written and signed agreement"],
            correctIndex: 0,
            explanation: "The expensive one is legal, which is exactly why the two need different tools.",
            sourceLessonSlug: "not-a-scam-a-product",
          },
          {
            prompt: "Under the Truth in Lending Act's stated purpose, what is meaningful disclosure of credit terms for?",
            options: ["So a consumer can compare more readily", "So a creditor can demonstrate to its regulator that it assessed the borrower's ability to repay", "So a court can determine whether the rate charged exceeded the ceiling set by the state of residence", "So a consumer reporting agency can record the terms of the agreement accurately in the borrower's file"],
            correctIndex: 0,
            explanation: "The statute's words are compare more readily the various credit terms available and avoid the uninformed use of credit.",
            sourceLessonSlug: "the-conversion-the-law-requires",
          },
          {
            prompt: "What problem does the statute name that a standardized rate is meant to solve?",
            options: ["Prices stated in different units cannot be ranked", "Lenders had been advertising rates they did not in fact charge to any borrower who applied", "Borrowers were signing agreements before the lender had finished preparing the paperwork", "Interest was being compounded at intervals shorter than the ones printed on the agreement"],
            correctIndex: 0,
            explanation: "Fifteen dollars and twenty-two percent are not comparable until both are expressed in the same units.",
            sourceLessonSlug: "the-conversion-the-law-requires",
          },
          {
            prompt: "Under 15 U.S.C. 1606(a)(2), what are the two steps that produce an annual percentage rate for open-end credit?",
            options: ["Divide the charge by the amount, then multiply by periods per year", "Add every fee to the principal, then divide the total by the number of days in the term", "Subtract the amount financed from the total of payments, then divide by the amount financed", "Multiply the amount financed by the periodic rate, then divide by the number of scheduled payments"],
            correctIndex: 0,
            explanation: "The statute states it as the quotient of the finance charge for a period over the amount it is based on, multiplied by the number of such periods in a year.",
            sourceLessonSlug: "the-conversion-the-law-requires",
          },
          {
            prompt: "A charge of 15 dollars on 100 dollars for a 14-day term annualizes to roughly what?",
            options: ["About 391 percent", "About 180 percent, because a fourteen-day period repeats a little over twelve times each year", "About 15 percent, because the charge is fifteen percent of the amount that was actually financed", "About 26 percent, because the number of fourteen-day periods in a year is a little over twenty-six"],
            correctIndex: 0,
            explanation: "The periodic rate of 0.15 is multiplied by roughly 26.07 fourteen-day periods in a year.",
            sourceLessonSlug: "the-conversion-the-law-requires",
          },
          {
            prompt: "Why does the same 15-dollar charge annualize much lower over a 30-day term?",
            options: ["Fewer periods in a year", "Because the finance charge is recalculated each month against a declining principal balance", "Because a thirty-day term crosses a statutory threshold above which a lower ceiling applies", "Because the lender must amortize the charge across the whole term rather than earn it at origination"],
            correctIndex: 0,
            explanation: "A thirty-day period repeats about 12.17 times a year rather than about 26.07, and nothing else in the arithmetic changes.",
            sourceLessonSlug: "the-conversion-the-law-requires",
          },
          {
            prompt: "What does the course insist an annualized figure does NOT say?",
            options: ["That the lender earned that much", "That the price should be compared against the price of a different credit product entirely", "That the term of the loan is relevant to how the price should be read by the borrower", "That the charge must be disclosed as a dollar amount as well as a percentage rate"],
            correctIndex: 0,
            explanation: "It says only that if this price ran for a year at this pace it would come to that, which is a unit conversion rather than an accusation.",
            sourceLessonSlug: "the-conversion-the-law-requires",
          },
          {
            prompt: "What is the periodic rate in this conversion?",
            options: ["The charge divided by the amount financed", "The annual percentage rate divided by the number of days remaining in the loan's term", "The dollar amount of the charge, before any adjustment for the length of the borrowing period", "The share of each scheduled payment that is applied to interest rather than to principal reduction"],
            correctIndex: 0,
            explanation: "It is the first of the two steps, and it is the figure that gets multiplied by the number of periods in a year.",
            sourceLessonSlug: "the-conversion-the-law-requires",
          },
          {
            prompt: "Why does a rent-to-own agreement usually carry no annual percentage rate?",
            options: ["It is generally not credit", "Because the seller is a retailer rather than a lender and retailers are outside the Truth in Lending Act", "Because the agreement is for goods rather than for money and only money carries a disclosed rate", "Because the customer may return the goods, so the price is treated as a rental charge for tax purposes"],
            correctIndex: 0,
            explanation: "The comparison tool only appears where the law requires it, and Section 3 works through the definition that decides the question.",
            sourceLessonSlug: "the-conversion-the-law-requires",
          },
          {
            prompt: "When the annual percentage rate is missing from a document, what does the course say has happened?",
            options: ["The rule did not reach that product", "The seller has withheld a disclosure that federal law required it to place on the first page", "The transaction has been structured so that the interest is charged after the agreement ends", "The state regulator has granted the seller an exemption from the federal disclosure requirement"],
            correctIndex: 0,
            explanation: "You are not being cheated; you are being handed a product the comparison rule was never written to reach, and the arithmetic is yours.",
            sourceLessonSlug: "the-conversion-the-law-requires",
          },
          {
            prompt: "What does the lesson say about the numbers it uses in its worked conversion?",
            options: ["They are examples, not rates in force", "They are the ceiling that federal law places on a small-dollar loan of that size and term", "They are the median charge reported across licensed lenders in the most recent published survey", "They are the figures a court found had been charged in the case the course cites later on"],
            correctIndex: 0,
            explanation: "What any given state permits is the subject of a later lesson, and the course prints no national rate.",
            sourceLessonSlug: "the-conversion-the-law-requires",
          },
          {
            prompt: "Which sibling course does this lesson credit with teaching what the annual percentage rate is, so that this one can teach the conversion?",
            options: ["MONEY-01", "MONEY-02, which prices deposit accounts and the nonbank substitutes for them", "The County Committee, which teaches federal farm credit decided by local elected committees", "Financing Without Access, which teaches the substitute institutions built when capital was refused"],
            correctIndex: 0,
            explanation: "The products in this course quote a fee, so the conversion rather than the definition is what this lesson adds.",
            sourceLessonSlug: "the-conversion-the-law-requires",
          },
          {
            prompt: "What rate ceiling does 10 U.S.C. 987 impose, and on whom?",
            options: ["36 percent, on covered servicemembers", "36 percent, on any consumer credit extended anywhere in the United States after the statute took effect", "25 percent, on any lender operating without a licence from the state in which the borrower resides", "The state ceiling, applied nationally to lenders that make loans across state lines by internet"],
            correctIndex: 0,
            explanation: "The statute reaches a covered member and that member's dependents, and it reaches nobody else.",
            sourceLessonSlug: "one-class-congress-capped",
          },
          {
            prompt: "What does the acronym MAPR stand for in 32 CFR part 232?",
            options: ["Military annual percentage rate", "Maximum allowable periodic rate, the ceiling a state regulator may permit under its own statute", "Minimum acceptable payment ratio, the share of income a covered borrower may be required to pledge", "Mandatory arbitration prohibition rule, the part of the statute forbidding forced arbitration clauses"],
            correctIndex: 0,
            explanation: "It is defined more widely than the ordinary annual percentage rate on purpose.",
            sourceLessonSlug: "one-class-congress-capped",
          },
          {
            prompt: "Why is the military annual percentage rate defined more widely than the ordinary one?",
            options: ["It counts ancillary charges too", "Because servicemembers move between states and a single national measure was needed for enforcement", "Because the Department of Defense uses a different compounding convention from the one in Regulation Z", "Because the statute measures the rate across the whole term rather than across a single billing period"],
            correctIndex: 0,
            explanation: "32 CFR 232.4(c) sweeps in credit insurance, debt cancellation fees, ancillary product charges, application fees and participation fees.",
            sourceLessonSlug: "one-class-congress-capped",
          },
          {
            prompt: "What does the width of the MAPR definition tell you about what the drafters had seen?",
            options: ["Cost was being moved into fees", "That lenders were compounding interest more frequently than the agreements they issued disclosed", "That servicemembers were being charged different rates depending on their rank and length of service", "That state regulators were licensing lenders who had already been refused a licence elsewhere"],
            correctIndex: 0,
            explanation: "The ordinary rate can be held down by moving cost into a fee, and the military one is built so that it cannot be.",
            sourceLessonSlug: "one-class-congress-capped",
          },
          {
            prompt: "Under 10 U.S.C. 987(i)(1), who is a covered member?",
            options: ["Active duty for more than 30 days", "Any person who has ever served in the armed forces, including a veteran discharged many years earlier", "Any person employed by the Department of Defense, whether in uniform or in a civilian capacity", "Any person living within a stated distance of an active military installation in the United States"],
            correctIndex: 0,
            explanation: "The definition covers active duty under a call or order exceeding 30 days, or active Guard and Reserve duty, and it extends to dependents.",
            sourceLessonSlug: "one-class-congress-capped",
          },
          {
            prompt: "Which of these does 10 U.S.C. 987(e) forbid in covered consumer credit?",
            options: ["Taking a vehicle title as security", "Charging any fee at all beyond the stated periodic interest that accrues over the loan's term", "Reporting a missed payment to a consumer reporting agency before the account is 90 days past due", "Lending more than one month of the borrower's basic pay in any single consumer credit transaction"],
            correctIndex: 0,
            explanation: "The subsection also forbids rolling over with new credit from the same creditor, mandatory arbitration, allotment repayment and prepayment penalties.",
            sourceLessonSlug: "one-class-congress-capped",
          },
          {
            prompt: "Reading 10 U.S.C. 987(e) backwards, what does the course say the list amounts to?",
            options: ["A description of the market", "A statement of the terms Congress considered acceptable in any consumer credit agreement", "A checklist a creditor must complete and file before extending credit to a covered borrower", "A list of the practices a state must forbid before its own lending statute will be recognised"],
            correctIndex: 0,
            explanation: "Every item on it is a mechanism this course goes on to teach, which is why the list reads as a description of what the drafters found.",
            sourceLessonSlug: "one-class-congress-capped",
          },
          {
            prompt: "Is a loan made to buy a car covered by the Military Lending Act cap?",
            options: ["No, it is excluded", "Yes, because a vehicle loan is consumer credit extended for a personal or household purpose", "Yes, but only where the purchase price exceeds the borrower's annual basic pay for that grade", "No, unless the lender also sells the borrower a credit insurance product alongside the financing"],
            correctIndex: 0,
            explanation: "32 CFR 232.3(f) carves out credit expressly intended to finance the purchase of a motor vehicle when it is secured by that vehicle.",
            sourceLessonSlug: "one-class-congress-capped",
          },
          {
            prompt: "What does 32 CFR 232.3(f) also exclude from the definition of consumer credit?",
            options: ["Residential mortgages", "Any loan of less than five hundred dollars, on the ground that the amount is too small to regulate", "Any loan made by a federally insured credit union rather than by a state-licensed finance company", "Any loan whose term is shorter than thirty-one days, because such a loan carries no periodic interest"],
            correctIndex: 0,
            explanation: "The exclusions cover residential mortgages, purchase-money vehicle loans, and credit secured by the personal property it finances.",
            sourceLessonSlug: "one-class-congress-capped",
          },
          {
            prompt: "How does the course describe the significance of the Military Lending Act cap?",
            options: ["Congress answered the question for one class", "It proves that a 36 percent ceiling is unworkable, because lenders left the market once it applied", "It shows that a federal ceiling always overrides a state ceiling wherever the two are in conflict", "It shows that a rate above 36 percent is presumptively unlawful in every consumer credit market"],
            correctIndex: 0,
            explanation: "The statute answered yes for a named class and did not extend that answer to anyone else, and that gap is the subject rather than the outrage.",
            sourceLessonSlug: "one-class-congress-capped",
          },
          {
            prompt: "In this course's framing, what is a rule that protects one group and not another?",
            options: ["A fact about who the law protects", "Evidence that the protected group was harmed more severely than any other group in the market", "A temporary measure that Congress is required to extend or repeal within a fixed number of years", "A signal that the state legislatures have already provided the same protection to everybody else"],
            correctIndex: 0,
            explanation: "The course treats the gap as the subject to be examined rather than as an occasion for outrage.",
            sourceLessonSlug: "one-class-congress-capped",
          },
          {
            prompt: "Which body wrote the regulation implementing the Military Lending Act cap?",
            options: ["The Department of Defense", "The Federal Trade Commission, which brought the first enforcement action under the statute", "The Bureau of Consumer Financial Protection, which writes Regulation Z and Regulation E", "The Office of the Comptroller of the Currency, which supervises the national banks that make the loans"],
            correctIndex: 0,
            explanation: "32 CFR part 232 is the Department's rule, and it repeats the statutory 36 percent figure in its own words.",
            sourceLessonSlug: "one-class-congress-capped",
          },
          {
            prompt: "In the exact words of 32 CFR 232.4(b), what may a creditor not do?",
            options: ["Impose an MAPR greater than 36 percent", "Extend credit to a covered borrower without first verifying the borrower's status in a federal database", "Charge any fee that was not itemized in the written agreement before the borrower signed it", "Accept repayment by military allotment unless the borrower requested that method in writing"],
            correctIndex: 0,
            explanation: "The rule's phrasing is in connection with an extension of consumer credit, which is the defined term the exclusions then narrow.",
            sourceLessonSlug: "one-class-congress-capped",
          },
          {
            prompt: "Which transaction does the course say is NOT carved out of the Military Lending Act's coverage?",
            options: ["A loan secured by a car you already own", "A first mortgage used to purchase the covered borrower's primary residence in the state of assignment", "A loan used to buy a car, where the same car is pledged as security for the credit extended", "A loan used to buy furniture, where the furniture itself is pledged as security for the credit"],
            correctIndex: 0,
            explanation: "The purchase-money exclusion covers credit that finances the vehicle securing it, which a title loan on a car already owned is not.",
            sourceLessonSlug: "one-class-congress-capped",
          },
          {
            prompt: "What does the course mean when it calls the Military Lending Act a completed argument sitting in the United States Code?",
            options: ["The debate was settled in statute for one group", "That Congress wrote the statute after the courts had already resolved every question it raised", "That the statute contains its own findings section explaining why the ceiling was set at that level", "That no further regulation was needed, because the statute is self-executing without any agency rule"],
            correctIndex: 0,
            explanation: "Congress looked at small-dollar lending, decided the price was too high, and capped it for servicemembers and their dependents.",
            sourceLessonSlug: "one-class-congress-capped",
          },
          {
            prompt: "What kind of security does small-dollar lending typically take, according to Section 1?",
            options: ["A post-dated cheque or debit authorisation", "A lien recorded against the borrower's residence with the county in which the property sits", "A guarantee signed by a second person who agrees to repay if the borrower does not do so", "A deposit of cash equal to a stated share of the amount advanced, held until the loan is repaid"],
            correctIndex: 0,
            explanation: "A car title is the third form, and all three exist because the risk sits with the borrower rather than with the lender.",
            sourceLessonSlug: "not-a-scam-a-product",
          },
          {
            prompt: "What is a finance charge, in the arithmetic this section teaches?",
            options: ["The cost of credit as a dollar amount", "The total the borrower repays, including the amount originally advanced by the lender", "The share of a payment applied to principal once the interest for the period has been satisfied", "The fee a state permits a licensed lender to charge for verifying a borrower's eligibility"],
            correctIndex: 0,
            explanation: "It is the numerator of the periodic rate, and dividing it by the amount financed is the first of the two conversion steps.",
            sourceLessonSlug: "the-conversion-the-law-requires",
          },
          {
            prompt: "How many 14-day periods are there in a year, for the purposes of this conversion?",
            options: ["About 26", "About 12, because a fourteen-day period is treated as half of a calendar month for this purpose", "About 52, because the conversion counts a period for each week rather than for each fourteen days", "Exactly 24, because the statute directs that a year be divided into twenty-four equal half-months"],
            correctIndex: 0,
            explanation: "365 divided by 14 is roughly 26.07, which is the multiplier the second step applies.",
            sourceLessonSlug: "the-conversion-the-law-requires",
          },
          {
            prompt: "Which document is the source of the phrase compare more readily?",
            options: ["The Truth in Lending Act", "The Military Lending Act, in the subsection setting the ceiling for covered consumer credit", "Regulation E, in the section defining an unauthorized electronic fund transfer and its exclusions", "The Fair Credit Reporting Act, in the section listing the permissible purposes for a consumer report"],
            correctIndex: 0,
            explanation: "The phrase sits in the statute's own findings and declaration of purpose at 15 U.S.C. 1601.",
            sourceLessonSlug: "the-conversion-the-law-requires",
          },
          {
            prompt: "Under the course's framing, what does a licensed lender have if a borrower does not pay a legal high-cost loan?",
            options: ["A claim it can enforce in court", "An automatic right to seize any deposit account the borrower holds at any financial institution", "A right to report the borrower to a state prosecutor for having written a cheque without funds", "A right to raise the rate above the ceiling the state statute otherwise imposes on the transaction"],
            correctIndex: 0,
            explanation: "The contract is enforceable, which is precisely what distinguishes the product from a scam.",
            sourceLessonSlug: "not-a-scam-a-product",
          },
          {
            prompt: "What does this course say a generic avoid-scams lesson leaves a reader unable to do?",
            options: ["Price the legal product they will be offered", "Recognise an impersonation attempt when the caller already knows part of an account number", "Report a fraudulent transfer to the institution within the deadline the regulation sets for notice", "Distinguish between a state-licensed lender and one operating without any licence at all"],
            correctIndex: 0,
            explanation: "It also leaves them unclear about what recourse exists when money actually leaves an account, which Section 5 takes apart.",
            sourceLessonSlug: "not-a-scam-a-product",
          },
          {
            prompt: "Which of these is an accurate reading of an annualized figure on a two-week loan?",
            options: ["What it would come to at that pace over a year", "The total number of dollars the borrower will hand over before the obligation is discharged", "The profit margin the lender records on the transaction after its own costs have been deducted", "The ceiling above which the state in which the loan was made would treat the charge as usurious"],
            correctIndex: 0,
            explanation: "That is what makes it a unit conversion, and what lets it be set beside a card rate for the same money over the same days.",
            sourceLessonSlug: "the-conversion-the-law-requires",
          },
          {
            prompt: "What is the effect on the annualized rate of shortening the term while holding the fee constant?",
            options: ["It rises", "It falls, because a shorter term gives the charge less time to accumulate against the balance", "It stays the same, because the fee is a fixed amount rather than a rate charged over time", "It becomes indeterminate, because the statute does not define an annual rate below a thirty-day term"],
            correctIndex: 0,
            explanation: "A shorter period repeats more times in a year, and the annual rate is the periodic rate times the number of periods.",
            sourceLessonSlug: "the-conversion-the-law-requires",
          },
          {
            prompt: "Where does the course say the Military Lending Act's list of forbidden terms leads?",
            options: ["Into the mechanisms this course teaches", "Into the definition of an unauthorized electronic fund transfer that Section 5 examines in detail", "Into the disclosure obligations a rent-to-own seller owes under the statute of its own state", "Into the identity-verification requirements a bank must satisfy before it opens a deposit account"],
            correctIndex: 0,
            explanation: "Rollover, vehicle-title security, mandatory arbitration and prepayment penalties are each taken up later in the course.",
            sourceLessonSlug: "one-class-congress-capped",
          },
          {
            prompt: "Which is the correct description of a predatory product's price?",
            options: ["Disclosed and very high", "Concealed until after the agreement has been signed by both of the parties to it", "Set by the lender's regulator rather than by the lender itself under a published schedule", "Variable, in the sense that the lender may raise it at any time without notifying the borrower"],
            correctIndex: 0,
            explanation: "Nothing about the product is hidden and nothing about it is illegal, which is what makes arithmetic the tool that works on it.",
            sourceLessonSlug: "not-a-scam-a-product",
          },
          {
            prompt: "In the Financing Without Access procedure, what does the phrase what pool replaced it refer to?",
            options: ["The capital that lends where the mainstream would not", "The reserve a state regulator maintains to reimburse borrowers harmed by an unlicensed lender", "The group of borrowers whose repayments fund the losses the lender takes on other borrowers", "The set of alternative products a household considers once it has been refused a bank account"],
            correctIndex: 0,
            explanation: "In small-dollar lending, that capital prices for very short terms and a high rate of non-payment.",
            sourceLessonSlug: "not-a-scam-a-product",
          },
          {
            prompt: "Why does the course say a national rate figure would be wrong the day it was printed?",
            options: ["The states disagree completely", "Because the federal ceiling is republished each year with a different inflation adjustment applied", "Because lenders change their published fees more often than any survey can be conducted and released", "Because the annual percentage rate depends on the term, and terms vary between individual borrowers"],
            correctIndex: 0,
            explanation: "One state makes the transaction a felony while another licenses it with a fee cap and a rollover ban.",
            sourceLessonSlug: "not-a-scam-a-product",
          },
          {
            prompt: "What does the course say about a person who chooses a priced nonbank product over a bank one?",
            options: ["They are doing arithmetic", "They have not read the disclosure the institution was required to give them before opening",  "They are paying for convenience that a household with a stable balance would not need to buy", "They have usually been refused a deposit account by at least one institution in the past year"],
            correctIndex: 0,
            explanation: "Choosing a priced product over an unavailable one is arithmetic rather than a failure at arithmetic.",
            sourceLessonSlug: "not-a-scam-a-product",
          },
          {
            prompt: "What is the relationship between MONEY-01 and this course on the subject of the annual percentage rate?",
            options: ["MONEY-01 defines it, this course converts fees into it", "MONEY-01 computes it for closed-end credit and this course computes it for open-end credit only", "MONEY-01 rejects it as a measure and this course adopts it as the primary comparison tool", "The two teach it identically, because the statutory definition is the same in both directions"],
            correctIndex: 0,
            explanation: "The products in this course quote a fee rather than a rate, so the conversion is what this lesson adds.",
            sourceLessonSlug: "the-conversion-the-law-requires",
          },
          {
            prompt: "Which statute supplies the open-end computation this course reuses as its fee-to-rate conversion?",
            options: ["15 U.S.C. 1606", "10 U.S.C. 987, which sets the ceiling that applies to covered servicemembers and their dependents", "12 CFR 1005.2, which defines an unauthorized electronic fund transfer and lists three exclusions", "15 U.S.C. 1681, which defines a consumer report and the agencies that assemble and sell them"],
            correctIndex: 0,
            explanation: "Its subsection (a)(2) states the quotient-times-periods formula the lesson works step by step.",
            sourceLessonSlug: "the-conversion-the-law-requires",
          },
          {
            prompt: "Which of these is an ancillary charge that 32 CFR 232.4(c) requires to be counted inside the MAPR?",
            options: ["A credit insurance premium", "A late payment charge assessed after the borrower misses a scheduled instalment on the account", "A recording fee paid to a county office to perfect the lender's security interest in the collateral", "A charge for a copy of the borrower's consumer report obtained from a nationwide reporting agency"],
            correctIndex: 0,
            explanation: "Debt cancellation and suspension fees, ancillary product charges, application fees and participation fees also count.",
            sourceLessonSlug: "one-class-congress-capped",
          },
          {
            prompt: "What does the course say about arguing over whether 36 percent is a workable ceiling?",
            options: ["Congress already answered for one class", "That the question cannot be settled because no jurisdiction has ever tried a ceiling at that level", "That the answer depends entirely on the length of the term, so no single ceiling can be assessed", "That the states have converged on the figure, which is why the federal statute adopted it as well"],
            correctIndex: 0,
            explanation: "The statute answered yes for servicemembers and their dependents, and left the question open for everyone else.",
            sourceLessonSlug: "one-class-congress-capped",
          },
          {
            prompt: "Which of these is the course's stated reason for building on statute and regulation rather than agency guidance?",
            options: ["The statutory layer holds still", "Because agency guidance is written for supervised institutions rather than for the consumers who read it", "Because a regulation carries a penalty for violation and guidance carries no consequence at all", "Because guidance is issued without notice and comment, so its text can change between two readings"],
            correctIndex: 0,
            explanation: "MONEY-01 established the same sourcing posture for the same reason, and this course inherits it.",
            sourceLessonSlug: "not-a-scam-a-product",
          },
          {
            prompt: "What does the course say the borrower is left holding when a product falls outside the disclosure rule?",
            options: ["The arithmetic", "A statutory right to demand the missing disclosure in writing before the agreement takes effect", "A defence to enforcement, because an agreement without a disclosed rate cannot be enforced", "A complaint to the state regulator, which must then decide whether the rule ought to apply"],
            correctIndex: 0,
            explanation: "The comparison tool appears only where the law puts it, so where it is absent the conversion is the reader's to perform.",
            sourceLessonSlug: "the-conversion-the-law-requires",
          },
          {
            prompt: "A 10 percent charge on 100 dollars over 14 days annualizes to roughly what?",
            options: ["About 261 percent", "About 10 percent, because the charge is ten percent of the amount that was actually advanced", "About 120 percent, because a fourteen-day charge is annualized across twelve monthly periods", "About 365 percent, because the annualization multiplies the charge by the number of days in a year"],
            correctIndex: 0,
            explanation: "0.10 multiplied by roughly 26.07 fourteen-day periods gives about 2.61, which is 261 percent.",
            sourceLessonSlug: "the-conversion-the-law-requires",
          },
          {
            prompt: "Why does the course put the not-advice statement in the prose rather than only in a registry?",
            options: ["A reader deep in the course never saw the landing page", "Because a registry entry is not legally sufficient to disclaim liability for financial advice", "Because the registry only accepts courses that name an external certifying body by its own name", "Because the landing page renders the disclaimer below the fold on a phone-sized screen"],
            correctIndex: 0,
            explanation: "The posture is inherited from surplus-funds-basics, which states its own disclaimer in three separate lessons for the same reason.",
            sourceLessonSlug: "not-a-scam-a-product",
          },
          {
            prompt: "Under 32 CFR 232.3(f), which of these is treated as consumer credit that the cap can reach?",
            options: ["An unsecured small-dollar loan", "A first mortgage taken out to purchase the covered borrower's own primary residence", "A loan expressly intended to finance a car purchase and secured by that same car", "A loan expressly intended to finance furniture and secured by the furniture it bought"],
            correctIndex: 0,
            explanation: "The exclusions are drawn around purchase-money transactions and residential mortgages, leaving unsecured small-dollar credit inside.",
            sourceLessonSlug: "one-class-congress-capped",
          },
          {
            prompt: "What is the practical effect of the Military Lending Act's ban on rollover with the same creditor?",
            options: ["The renewal cycle cannot be built", "The creditor must refund any interest already collected before the original term expires", "The borrower may cancel the loan within three days of signing without owing any charge", "The creditor must offer a repayment plan of at least sixty days before it may collect at all"],
            correctIndex: 0,
            explanation: "Section 2 shows that the renewal, rather than the first loan, is where the cost of small-dollar lending actually lives.",
            sourceLessonSlug: "one-class-congress-capped",
          },
          {
            prompt: "How does the course describe the security in a title loan compared with the Military Lending Act's list?",
            options: ["The statute forbids it for covered borrowers", "The statute permits it for covered borrowers provided the vehicle is worth more than the loan", "The statute is silent on it, because vehicle security is governed only by the law of each state", "The statute requires it, so that a covered borrower is not exposed to an unsecured obligation"],
            correctIndex: 0,
            explanation: "Subsection (e) names the vehicle title alongside the post-dated cheque as security a creditor may not take.",
            sourceLessonSlug: "one-class-congress-capped",
          },
          {
            prompt: "Which pair of numbers illustrates that only the term changed in the lesson's worked example?",
            options: ["391 percent and 183 percent", "391 percent and 261 percent, which compare a fifteen dollar charge against a ten dollar charge", "36 percent and 25 percent, which compare the federal military ceiling against a state usury ceiling", "26.07 and 12.17, which are the two periodic rates the lesson computes before annualizing either one"],
            correctIndex: 0,
            explanation: "The same fifteen dollar charge on the same hundred dollars, over fourteen days and then over thirty, produces both figures.",
            sourceLessonSlug: "the-conversion-the-law-requires",
          },
          {
            prompt: "What is the role of the phrase and the cost is the product in this section?",
            options: ["It states that the price is the design", "It states that the seller may recover its costs before applying any payment to the principal balance", "It states that a product whose cost exceeds its benefit is unlawful under the Truth in Lending Act", "It states that the disclosed price includes every charge the borrower will face over the whole term"],
            correctIndex: 0,
            explanation: "Nothing about a predatory product is concealed or unlawful, so the high price is the thing being sold rather than a defect in it.",
            sourceLessonSlug: "not-a-scam-a-product",
          },
          {
            prompt: "What does the course mean by saying it will not moralise in either direction?",
            options: ["No advice, and no blame either", "It will describe no product as high cost, because that judgement belongs to the reader alone", "It will avoid naming any statute that treats one class of borrower differently from another", "It will present both a lender's and a borrower's account of every transaction it describes"],
            correctIndex: 0,
            explanation: "It refuses both to recommend and to imply that a person using one of these products made a foolish choice.",
            sourceLessonSlug: "not-a-scam-a-product",
          },
          {
            prompt: "In the two-step conversion, which figure is the multiplier?",
            options: ["Periods per year", "The finance charge stated in dollars, before it is divided by the amount that was financed", "The amount financed, which is multiplied by the periodic rate to give the total repayable", "The number of scheduled payments, which the statute directs be counted rather than the periods"],
            correctIndex: 0,
            explanation: "It is 365 divided by the number of days in the period, and it is what removes the term from the comparison.",
            sourceLessonSlug: "the-conversion-the-law-requires",
          },
          {
            prompt: "Which of these correctly names the two documents that set the 36 percent figure?",
            options: ["10 U.S.C. 987 and 32 CFR 232.4", "15 U.S.C. 1601 and 12 CFR 1026.4, which define the purpose of disclosure and the finance charge", "15 U.S.C. 1606 and 12 CFR 1005.6, which set the computation method and the liability caps", "26 U.S.C. 6402 and 12 CFR 1024, which govern tax refunds and real estate settlement disclosures"],
            correctIndex: 0,
            explanation: "The statute states the limit and the Department of Defense rule restates it as the MAPR limit.",
            sourceLessonSlug: "one-class-congress-capped",
          },
          {
            prompt: "What does the course say is the reason a 15 dollar charge and a 22 percent rate cannot be ranked as stated?",
            options: ["They are in different units", "One is charged at origination and the other accrues daily over the whole life of the account", "One is set by a state statute and the other is set by a federal regulation with a different scope", "One applies to a secured loan and the other applies to an unsecured revolving line of credit"],
            correctIndex: 0,
            explanation: "The Truth in Lending Act's answer to exactly that problem is a single standardized number stated in the same units by every covered offer.",
            sourceLessonSlug: "the-conversion-the-law-requires",
          },
          {
            prompt: "Which of these is a fair statement of what the course does with the Military Lending Act?",
            options: ["It reads it as evidence about who gets protected", "It uses it as the national ceiling and applies its arithmetic to every product the course prices", "It treats it as guidance rather than statute, because the Department of Defense issued the rule", "It presents it as a model state statute that legislatures are expected to adopt in their own terms"],
            correctIndex: 0,
            explanation: "The cap exists for a named class and for nobody else, and that gap is the object of study.",
            sourceLessonSlug: "one-class-congress-capped",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2 — The small-dollar loan, and where the cost lives
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "what-the-transaction-actually-is",
      title: "5 · What the transaction actually is, in a state that licenses it",
      section: "Section 2 · The small-dollar loan, and where the cost lives",
      body: `A payday loan is not, legally speaking, usually called a payday loan. In Florida it is a **deferred presentment transaction**, and the name is a description: you write a cheque today, the licensee holds it, and presentment is deferred to an agreed date.

**Reading one state's statute in full is worth more than reading a summary of all fifty**, because the summary loses the machinery and the machinery is the lesson. Florida's is Fla. Stat. § 560.404, read on **28 August 2026**, and it is unusually detailed.

**The shape of the transaction.** The agreement must be written and signed, and executed on the day the money is handed over. The written agreement must state the provider's name and address, the date, the amount of the cheque, the length of the deferment period, the last day of that period, and a clear description of the payment obligation (Fla. Stat. § 560.404, 2025).

**The three numbers that define the price.**
- **The amount.** The face amount of the cheque may not exceed 500 dollars for a non-instalment transaction, exclusive of fees; for an instalment transaction, 1,000 dollars.
- **The fee.** A provider "may not charge fees that exceed 10 percent of the currency or payment instrument provided" on a non-instalment transaction, and 8 percent of the outstanding balance biweekly on an instalment one. A separate verification fee is authorised by cross-reference, and the percentage caps may not be applied to it.
- **The term.** The agreement "may not be for a term longer than 31 days or fewer than 7 days" for a non-instalment transaction.

**Now do the arithmetic from Section 1 on the statute's own ceiling, not on an invented figure.** Ten percent for a 14-day term is a periodic rate of 0.10 across a period that repeats about 26.07 times in a year. That is roughly **261 percent a year** before the verification fee. At the shortest permitted term of 7 days it is 0.10 times about 52.1, roughly **521 percent**. **Same statutory cap, double the annualized figure, because the term halved.** That is the Section 1 point arriving with a real number attached.

**The statute also does things a summary would never tell you.** Fees are earned at origination for a transaction paid off in 31 days or less, but an instalment transaction's fees are earned by a simple interest calculation. Prepayment penalties are prohibited. The provider must hand over the full amount of the cheque less only the permitted fees. And the agreement may not contain a hold harmless clause, a confession of judgment, a wage assignment, a waiver of claims and defences, or a waiver of any provision of the part.

**And one line that connects this course to the last one.** Subsection (13) requires the provider to comply with the Regulation Z disclosure requirements at 12 CFR part 1026 and to hand the borrower a copy when the transaction is initiated. So the annual percentage rate is on the paperwork by federal law, and MONEY-01 taught you what it is. **The number you just computed by hand should be sitting on the form.**

None of this describes a national rule. Florida licenses this transaction; the next lesson but one shows a state where making the same loan is a felony.

:::reveal What is Florida's statutory name for a payday loan? ||| A deferred presentment transaction.

:::reveal What are the fee cap and the permitted term range for a Florida non-instalment deferred presentment transaction? ||| Fees may not exceed 10 percent of the amount provided, and the term may be no longer than 31 days and no fewer than 7.

:::reveal Why does the same 10 percent cap annualize to roughly 261 percent over 14 days and roughly 521 percent over 7? ||| Because the shorter period repeats about twice as many times in a year, and the annual rate is the periodic rate times the number of periods.

## Vocabulary
- **Deferred presentment transaction**: Florida's statutory name for the transaction in which a licensee accepts a cheque and agrees to defer presenting it for payment until a stated date.
- **Face amount**: the amount written on the borrower's cheque, which Florida caps at 500 dollars for a non-instalment transaction exclusive of the permitted fees.
- **Earned at origination**: the rule that the fee on a short deferred presentment transaction belongs to the provider when the loan is made rather than accruing over the term.
- **Verification fee**: a separate charge authorised by cross-reference in Fla. Stat. 560.404(6)(b), to which the percentage fee caps do not apply.

## Sources
Fla. Stat. § 560.404. (2025). *Requirements for deferred presentment transactions*. The Florida Senate. https://www.flsenate.gov/Laws/Statutes/2025/560.404

15 U.S.C. § 1606. (n.d.). *Determination of annual percentage rate*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/15/1606`,
    },
    {
      slug: "the-rollover-is-the-product",
      title: "6 · The first loan is not where the money is",
      section: "Section 2 · The small-dollar loan, and where the cost lives",
      body: `A single two-week loan repaid on the due date costs the fee, once. That transaction is not the business, and the business knows it.

**The cost lives in the renewal.** A loan that is not repaid at the end of the term is refinanced into a new one for another fee, and the balance that produced the fee never falls. This is the mechanism the entire small-dollar market runs on, and you do not have to take a critic's word for it, because two federal courts have described it in their own words.

**The Supreme Court, in a case about remedies, described the mechanism in one sentence.** In *AMG Capital Management, LLC v. FTC*, decided 22 April 2021, the Court set out what the district court had found about the defendants' payday lending:

> "The companies' written explanations seemed to say that customers could normally repay a loan by making a single payment... But in fine print the explanations said that the loan would be automatically renewed unless the customer took affirmative steps to opt out." (*AMG Capital Management, LLC v. FTC*, 2021)

**Read what the default is doing there.** Repayment is the exception you have to ask for. Renewal is what happens if you do nothing.

**The criminal case against the same operator supplies the arithmetic**, and it is the sharpest number in this course. On 13 October 2017, after a five-week trial in the Southern District of New York, a jury found Scott Tucker and Timothy Muir **guilty on all 14 counts**, including racketeering, wire fraud, money laundering and Truth in Lending Act offences. Tucker was sentenced on 5 January 2018 to 200 months in prison, Muir to 84 (U.S. Attorney's Office, S.D.N.Y., 2018).

The Department of Justice's account of what the jury heard is worth reading slowly. The paperwork carried a proper Truth in Lending Act disclosure box. For a 500 dollar loan, that box stated a finance charge of **150 dollars** and a total of payments of **650 dollars**. The repayment schedule was then structured so that each payday the lender withdrew the entire interest payment due and **left the principal untouched**, repeating payday after payday, applying nothing to principal until at least the fifth payday. On the government's figures, for that same 500 dollar borrower the finance charge was in fact **1,425 dollars**, and the total of payments **1,925 dollars** (U.S. Attorney's Office, S.D.N.Y., 2018).

**650 disclosed. 1,925 taken. Same loan, same borrower, same box.** The gap is not the interest rate. The gap is the renewal.

**Which is why the ban is the tell.** Section 1 read 10 U.S.C. § 987(e) as a description of the market: the first practice on that list is extending new credit to roll over or refinance existing credit from the same creditor. Florida's statute does the same thing for everybody in the state. A provider "may not engage in the rollover of a deferred presentment agreement", may not redeem, extend or consolidate one with the proceeds of another, and may not lend to somebody who already has an outstanding transaction with any provider or terminated one within the previous 24 hours, which is checked against a statewide database (Fla. Stat. § 560.404, 2025). Florida also requires a 60-day grace period, at no additional charge, for a borrower who says in person that they cannot repay.

**A rule against a practice is evidence that the practice existed.** Three separate legislatures wrote the same prohibition, which is a stronger statement about how the product works than any figure a critic could offer.

:::reveal In the Supreme Court's description, what happened if a borrower did nothing at the end of the term? ||| The loan was automatically renewed. Repayment in a single payment required taking affirmative steps to opt out.

:::reveal What did the jury in the Southern District of New York find on 13 October 2017? ||| That Tucker and Muir were guilty on all 14 counts, including racketeering, wire fraud, money laundering and Truth in Lending Act offences.

:::reveal On the government's figures, what was the disclosed total of payments on a 500 dollar loan, and what was actually taken? ||| 650 dollars was disclosed; 1,925 dollars was the actual total, with a finance charge of 1,425 rather than 150.

:::reveal What does Florida's rollover ban tell you about the market it was written for? ||| That the practice existed and was worth prohibiting, which is a stronger statement about how the product works than an outside estimate.

## Vocabulary
- **Rollover**: refinancing an unpaid short-term loan into a new one for a further fee, so that a new charge is earned while the principal balance does not fall.
- **Interest-only withdrawal**: the repayment structure the Tucker jury heard described, in which each scheduled debit took the whole periodic charge and applied nothing to principal.
- **Total of payments**: the Truth in Lending Act disclosure stating what the borrower will pay in all, which the government proved had been understated in that case.
- **Grace period**: Florida's requirement of a 60-day extension at no additional charge for a borrower who states in person that they cannot repay.

## Sources
AMG Capital Management, LLC v. Federal Trade Commission, 593 U.S. 67. (2021). Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/supremecourt/text/19-508

Fla. Stat. § 560.404. (2025). *Requirements for deferred presentment transactions*. The Florida Senate. https://www.flsenate.gov/Laws/Statutes/2025/560.404

United States Attorney's Office, Southern District of New York. (2018, January 5). *Scott Tucker sentenced to more than 16 years in prison for running $3.5 billion unlawful internet payday lending enterprise*. U.S. Department of Justice. https://www.justice.gov/usao-sdny/pr/scott-tucker-sentenced-more-16-years-prison-running-35-billion-unlawful-internet-payday`,
    },
    {
      slug: "find-your-states-rule",
      title: "7 · Two states, opposite answers, and how to find yours",
      section: "Section 2 · The small-dollar loan, and where the cost lives",
      body: `The last two lessons were about Florida. Cross into New York and the same transaction is a felony.

**New York Penal Law § 190.40**, criminal usury in the second degree, read on **28 August 2026**:

> "A person is guilty of criminal usury in the second degree when, not being authorized or permitted by law to do so, he knowingly charges, takes or receives any money or other property as interest on the loan or forebearance of any money or other property, at a rate exceeding twenty-five per centum per annum or the equivalent rate for a longer or shorter period." (N.Y. Penal Law § 190.40, n.d.)

It is a class E felony. **Notice the drafting.** The statute says "or the equivalent rate for a longer or shorter period", which is the Section 1 annualization written into criminal law. A fourteen-day charge cannot escape a per-annum ceiling by pointing at its own term, because the ceiling is defined to follow it.

**So: 10 percent for 14 days is a licensed transaction in Florida and, absent an authorisation, criminal in New York.** Both statements are true right now. Neither is the national position, because there is no national position.

**This is exactly why this course prints no table.** A table would have to be maintained across 51 jurisdictions, would go stale silently, and would be believed anyway. What travels is the method.

**How to find the rule that governs you, in four steps.**

1. **Name the transaction the way your state names it.** Deferred presentment, deferred deposit, small loan, short-term loan, payday loan, title pledge, title pawn, consumer instalment loan. The statute is filed under the state's own noun, not under yours.
2. **Go to the state's own code, not to a summary.** Every state publishes its statutes free. Search the code for the noun, and for the chapter that licenses the lender.
3. **Read four things**, because they are the four that decide the price: the **maximum amount**, the **maximum fee or rate**, the **permitted term**, and **whether renewal is allowed**. Florida's answers are 500 dollars, 10 percent, 7 to 31 days, and no. Those four answers are the product.
4. **Then find the licensing regulator**, which is usually a department of financial institutions, banking, or financial regulation. It publishes a licence lookup. **A lender that is not on it is not licensed**, which changes what you are dealing with entirely, and it is checkable in about a minute.

**One more question worth asking, because it explains an internet offer.** If your state's ceiling is low and you are being offered a loan anyway, ask what law the lender says applies. The Tucker case turned on precisely that: the enterprise arranged for tribes to appear as owners so that state enforcement would meet a sovereign immunity claim, and the Department of Justice's account records that several state courts dismissed enforcement actions on that basis before the jury found the arrangement was a fiction (U.S. Attorney's Office, S.D.N.Y., 2018). **Which law applies is a real question with a real answer, and it is the first one to ask about an offer that your state appears to forbid.**

:::reveal What does New York Penal Law 190.40 make criminal, and at what rate? ||| Knowingly charging, taking or receiving interest above twenty-five per centum per annum, or the equivalent rate for a longer or shorter period, without authorisation.

:::reveal Why does the phrase or the equivalent rate for a longer or shorter period matter? ||| Because it writes annualization into the criminal statute, so a short-term charge cannot escape a per-annum ceiling by pointing at its own term.

:::reveal What are the four features of a state's rule that decide the price of a small-dollar loan? ||| The maximum amount, the maximum fee or rate, the permitted term, and whether renewal is allowed.

:::reveal What question should you ask about an offer your own state appears to forbid? ||| Which law the lender says applies, and whether the lender holds a licence from your state's regulator.

## Vocabulary
- **Criminal usury**: charging interest above a rate that a state's penal law makes a crime, as distinct from a rate that is merely unenforceable.
- **The equivalent rate for a longer or shorter period**: New York's statutory phrase that applies its per-annum ceiling to a charge stated over any other term.
- **Licence lookup**: the public register a state financial regulator publishes, on which a licensed lender appears and an unlicensed one does not.
- **Choice of law**: the question of which jurisdiction's rules govern a transaction, which is the first thing to establish about an offer your own state appears to forbid.

## Sources
N.Y. Penal Law § 190.40. (n.d.). *Criminal usury in the second degree*. The New York State Senate. https://www.nysenate.gov/legislation/laws/PEN/190.40

Fla. Stat. § 560.404. (2025). *Requirements for deferred presentment transactions*. The Florida Senate. https://www.flsenate.gov/Laws/Statutes/2025/560.404

United States Attorney's Office, Southern District of New York. (2018, January 5). *Scott Tucker sentenced to more than 16 years in prison for running $3.5 billion unlawful internet payday lending enterprise*. U.S. Department of Justice. https://www.justice.gov/usao-sdny/pr/scott-tucker-sentenced-more-16-years-prison-running-35-billion-unlawful-internet-payday`,
    },
    {
      slug: "the-title-loan-and-the-car",
      title: "8 · The same arithmetic, with the car attached",
      section: "Section 2 · The small-dollar loan, and where the cost lives",
      body: `Add collateral to a small-dollar loan and two things change. The price usually falls a little. The consequence of not paying changes completely.

**A vehicle title loan is a short-term loan secured by the title to a car the borrower already owns outright or nearly so.** Section 1 established why that is a different transaction from a car loan: 32 CFR § 232.3(f) excludes credit that finances the purchase of the vehicle securing it, and a title loan finances nothing. It converts a car you own into cash, and pledges the car.

**Two states, again, and the gap between them is enormous.**

**Virginia** licenses motor vehicle title lending and, under Va. Code § 6.2-2216, "Authorized fees and charges", a licensee may charge only a listed set of items. Interest is capped at **a simple annual rate not to exceed 36 percent**. A monthly maintenance fee is limited to the lesser of 8 percent of the original loan amount or 15 dollars, and it may not be added to the interest-bearing balance. A returned payment fee is capped at 25 dollars, a late charge at 20, and the costs of repossession and sale at 5 percent of the original loan. Interest stops accruing when the vehicle is repossessed, or 60 days after default, unless the borrower conceals the vehicle. The borrower is not liable for vehicle storage fees (Va. Code § 6.2-2216, n.d.). **That is the same 36 percent figure Congress chose for servicemembers**, applied by one state to everybody.

**Georgia** reaches the transaction through its pawnbroker statute instead, and the numbers are different by an order of magnitude. Under O.C.G.A. § 44-12-131, all pawn transactions run for 30-day periods and may be extended for further 30-day periods. During the first 90 days a pawnbroker may charge, for each 30-day period, interest and pawnshop charges "which together equal no more than 25 percent of the principal amount advanced". Beyond 90 days the per-period ceiling falls to 12.5 percent. The statute also forbids leasing the vehicle back to the pledgor during the transaction, and provides for the pawnbroker to take possession of the vehicle on default (O.C.G.A. § 44-12-131, n.d.).

**Do the Section 1 conversion on that ceiling.** Twenty-five percent for a 30-day period, over roughly 12.17 such periods, is about **304 percent a year** for the first 90 days. Twelve and a half percent per period is about **152 percent** after that. Set beside Virginia's 36 percent simple annual, on the same collateral, for the same purpose. **Neither state is doing anything hidden. They made different choices, and both wrote them down.**

**Now the part the arithmetic does not capture.** With an unsecured loan the worst case is a debt, a lawsuit, and a mark on a consumer report. With a title loan the worst case is that the car goes. Georgia's statute contemplates the pawnbroker taking possession without court involvement where that can be done peacefully. Virginia's caps the cost of repossession and sale and stops the interest clock at it, which is a rule about repossession rather than a rule against it. **For a household whose income depends on driving to work, the vehicle is not collateral in the ordinary sense: it is the thing that produces the money the loan is repaid from.**

That is the whole reason 10 U.S.C. § 987(e) forbids taking a vehicle title as security from a covered servicemember. Congress did not cap the price of that transaction. It removed the security.

:::reveal What distinguishes a vehicle title loan from a car loan? ||| A title loan is secured by a vehicle the borrower already owns; it finances nothing, and the purchase-money exclusion at 32 CFR 232.3(f) does not reach it.

:::reveal What interest ceiling does Va. Code 6.2-2216 place on a motor vehicle title loan? ||| A simple annual rate not to exceed 36 percent, plus a short closed list of other permitted charges.

:::reveal What does O.C.G.A. 44-12-131 permit a pawnbroker to charge for each 30-day period during the first 90 days? ||| Interest and pawnshop charges together equal to no more than 25 percent of the principal amount advanced.

:::reveal Why is a car a different kind of collateral for many borrowers? ||| Because it produces the income the loan is repaid from, so losing it removes the means of repayment rather than merely settling the debt.

## Vocabulary
- **Vehicle title loan**: short-term credit secured by the certificate of title to a vehicle the borrower already owns, rather than by a vehicle the credit is buying.
- **Pawn transaction**: Georgia's statutory frame for the same economic transaction, run in 30-day periods with its own ceiling on interest and pawnshop charges.
- **Maintenance fee**: Virginia's separately capped monthly charge, limited to the lesser of 8 percent of the original loan or 15 dollars and excluded from the interest-bearing balance.
- **Repossession**: taking the secured vehicle on default, which Georgia's statute contemplates without court involvement where it can be done peacefully.

## Sources
Va. Code § 6.2-2216. (n.d.). *Authorized fees and charges*. Virginia Law, Virginia General Assembly. https://law.lis.virginia.gov/vacode/title6.2/chapter22/section6.2-2216/

O.C.G.A. § 44-12-131. (n.d.). *Duration of pawn transactions; lease-back of motor vehicles prohibited; taking possession of motor vehicles; restrictions on interest, fees, or charges*. Onecle. https://law.onecle.com/georgia/title-44/44-12-131.html

32 CFR § 232.3. (n.d.). *Definitions*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/32/232.3

10 U.S.C. § 987. (n.d.). *Terms of consumer credit extended to members and dependents: limitations*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/10/987`,
    },
    {
      slug: "quiz-the-small-dollar-loan",
      title: "9 · Knowledge check: the small-dollar loan",
      section: "Section 2 · The small-dollar loan, and where the cost lives",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What is Florida's statutory name for the transaction most people call a payday loan?",
            options: ["A deferred presentment transaction", "A short-term consumer instalment loan issued under a supervised lender licence", "A small loan advance made against the borrower's next scheduled payment of wages", "A deferred deposit obligation secured by an authorisation to debit the borrower's account"],
            correctIndex: 0,
            explanation: "The name is a description: a cheque is written today and presentment is deferred to an agreed date.",
            sourceLessonSlug: "what-the-transaction-actually-is",
          },
          {
            prompt: "Why does this course read one state's statute in full rather than summarising fifty?",
            options: ["A summary loses the machinery", "Because only one state has published its small-dollar lending statute in a machine-readable form", "Because the states have largely converged, so one statute stands in accurately for the others", "Because federal law preempts the states on everything except the maximum amount that may be lent"],
            correctIndex: 0,
            explanation: "The machinery is the lesson, and a summary is exactly the thing that drops it.",
            sourceLessonSlug: "what-the-transaction-actually-is",
          },
          {
            prompt: "Under Fla. Stat. 560.404, what is the maximum face amount of a cheque for a non-instalment deferred presentment transaction?",
            options: ["500 dollars", "1,000 dollars, which is the ceiling the statute sets for a deferred presentment instalment transaction", "10 percent of the borrower's most recent net pay, as evidenced to the provider before the advance", "No fixed ceiling, because the amount is limited only by the fee cap the statute separately imposes"],
            correctIndex: 0,
            explanation: "The figure is exclusive of the fees the statute allows, and the instalment ceiling is 1,000 dollars.",
            sourceLessonSlug: "what-the-transaction-actually-is",
          },
          {
            prompt: "What fee cap does Fla. Stat. 560.404(6)(a) set for a non-instalment deferred presentment transaction?",
            options: ["10 percent of the amount provided", "8 percent of the outstanding balance, assessed on a biweekly basis over the whole term", "25 percent of the principal advanced during each thirty-day period of the transaction", "36 percent expressed as a simple annual rate over the length of the deferment period"],
            correctIndex: 0,
            explanation: "The 8 percent biweekly figure is the separate cap for a deferred presentment instalment transaction.",
            sourceLessonSlug: "what-the-transaction-actually-is",
          },
          {
            prompt: "What term range does Fla. Stat. 560.404(8) permit for a non-instalment deferred presentment agreement?",
            options: ["7 to 31 days", "60 to 90 days, which is the range the statute sets for a deferred presentment instalment transaction", "14 to 30 days, matching the interval between two ordinary biweekly payments of wages", "No fewer than 30 days, so that every transaction spans at least one full calendar month"],
            correctIndex: 0,
            explanation: "The 60-to-90-day range is the instalment transaction's, and the difference in term is what moves the annualized figure.",
            sourceLessonSlug: "what-the-transaction-actually-is",
          },
          {
            prompt: "Run the Section 1 conversion on Florida's 10 percent cap over a 14-day term. What is the approximate annualized figure?",
            options: ["About 261 percent", "About 10 percent, because the fee is a single charge rather than a rate that recurs over time", "About 120 percent, because a fourteen-day charge annualizes across twelve monthly periods", "About 521 percent, which is the figure the same cap produces over the shortest permitted term"],
            correctIndex: 0,
            explanation: "0.10 multiplied by roughly 26.07 fourteen-day periods gives about 2.61.",
            sourceLessonSlug: "what-the-transaction-actually-is",
          },
          {
            prompt: "The same Florida cap over the shortest permitted 7-day term annualizes to roughly what?",
            options: ["About 521 percent", "About 261 percent, which is the figure the same cap produces across a fourteen-day term", "About 130 percent, because halving the term also halves the annualized cost of the charge", "About 1,000 percent, because a seven-day period repeats more than fifty-two times each year"],
            correctIndex: 0,
            explanation: "0.10 multiplied by roughly 52.1 seven-day periods gives about 5.21, and only the term changed.",
            sourceLessonSlug: "what-the-transaction-actually-is",
          },
          {
            prompt: "What does the pair of figures 261 percent and 521 percent demonstrate?",
            options: ["Only the term changed", "That Florida permits two different fee caps depending on the length of the deferment period", "That the annualized figure depends on the amount advanced as well as on the length of the term", "That a verification fee has been added into the second calculation but not into the first one"],
            correctIndex: 0,
            explanation: "Same statutory cap, same amount, and the annualized figure roughly doubles because the period repeats twice as often.",
            sourceLessonSlug: "what-the-transaction-actually-is",
          },
          {
            prompt: "What does Fla. Stat. 560.404(13) require the provider to do?",
            options: ["Comply with the Regulation Z disclosures", "Report the transaction to a nationwide consumer reporting agency within five business days", "Verify the borrower's income against a payroll record before the advance may be made", "Offer the borrower a written comparison against at least two other licensed providers"],
            correctIndex: 0,
            explanation: "So the annual percentage rate is on the paperwork by federal law, and MONEY-01 taught what it is.",
            sourceLessonSlug: "what-the-transaction-actually-is",
          },
          {
            prompt: "Which of these does Florida's statute prohibit in a deferred presentment agreement?",
            options: ["A confession of judgment clause", "Any charge for verifying the borrower's eligibility against the state's transaction database", "Repayment by any method other than presentment of the cheque the borrower originally wrote", "The sale of the agreement to a third party for collection after the deferment period has ended"],
            correctIndex: 0,
            explanation: "The statute also bars a hold harmless clause, a wage assignment, a waiver of claims and defences, and a waiver of any provision of the part.",
            sourceLessonSlug: "what-the-transaction-actually-is",
          },
          {
            prompt: "When are the fees earned on a Florida deferred presentment transaction paid off in 31 days or less?",
            options: ["At origination", "Only once the cheque has been presented and paid by the drawer's own financial institution", "Daily across the deferment period, in proportion to the number of days the cheque was held", "At the end of the term, so that a borrower repaying early owes no part of the disclosed fee"],
            correctIndex: 0,
            explanation: "An instalment transaction is different: its fees are earned using a simple interest calculation.",
            sourceLessonSlug: "what-the-transaction-actually-is",
          },
          {
            prompt: "What does Florida's statute say about prepayment penalties?",
            options: ["They are prohibited", "They are capped at the amount of one further period's fee on the outstanding balance", "They are permitted only where the borrower repays within the first seven days of the term", "They are left to the agreement, provided the amount is disclosed before the borrower signs it"],
            correctIndex: 0,
            explanation: "The provider may charge only those fees the section specifically authorises.",
            sourceLessonSlug: "what-the-transaction-actually-is",
          },
          {
            prompt: "What must a Florida provider hand the borrower at the time of the transaction?",
            options: ["The full amount less only permitted fees", "A schedule showing how each future payment will be divided between interest and principal", "A copy of the borrower's consumer report obtained from a nationwide reporting agency", "A written estimate of the total cost of renewing the transaction for a further thirty days"],
            correctIndex: 0,
            explanation: "The provider must also furnish a copy of the written agreement and of the Regulation Z disclosure.",
            sourceLessonSlug: "what-the-transaction-actually-is",
          },
          {
            prompt: "What is a verification fee under Fla. Stat. 560.404(6)(b)?",
            options: ["A separate charge outside the percentage caps", "The provider's charge for confirming that the borrower's cheque will clear when presented", "A fee the state collects from the borrower for each entry made in the transaction database", "A charge for verifying the borrower's identity under the federal customer identification rule"],
            correctIndex: 0,
            explanation: "The section is explicit that the percentage caps may not be applied to it.",
            sourceLessonSlug: "what-the-transaction-actually-is",
          },
          {
            prompt: "A single two-week loan repaid on its due date costs what, in this course's framing?",
            options: ["The fee, once", "The fee plus the interest that accrued daily across the fourteen days of the term", "Nothing, because the fee is refunded where the borrower repays on or before the due date", "The fee, plus a further charge for closing the transaction and releasing the borrower's cheque"],
            correctIndex: 0,
            explanation: "That transaction is not the business, and the section's point is where the business actually is.",
            sourceLessonSlug: "the-rollover-is-the-product",
          },
          {
            prompt: "Where does this course say the cost of small-dollar lending actually lives?",
            options: ["In the renewal", "In the verification fee, which sits outside the percentage cap the state statute imposes", "In the collection action a lender brings once the borrower has failed to repay the balance", "In the interest that accrues between the date of the advance and the date of presentment"],
            correctIndex: 0,
            explanation: "A loan not repaid at term is refinanced into a new one for a further fee while the balance that produced the fee never falls.",
            sourceLessonSlug: "the-rollover-is-the-product",
          },
          {
            prompt: "In AMG Capital Management v. FTC, what did the Court say happened in the fine print?",
            options: ["The loan renewed automatically", "The lender reserved the right to raise the rate after the first payment had been received", "The borrower waived any claim or defence arising out of the transaction against the lender", "The lender was permitted to present the cheque before the agreed date if funds appeared"],
            correctIndex: 0,
            explanation: "The written explanations seemed to say a single payment would repay the loan, and repayment was in fact the opt-out.",
            sourceLessonSlug: "the-rollover-is-the-product",
          },
          {
            prompt: "In that description, which outcome required the borrower to take affirmative steps?",
            options: ["Repayment", "Renewal, which the borrower had to request in writing before the end of the deferment period", "Repossession, which the lender could not carry out without first obtaining a court order", "Disclosure, which the lender supplied only where the borrower asked for it before signing"],
            correctIndex: 0,
            explanation: "Renewal was the default, which is what makes the structure a mechanism rather than a choice.",
            sourceLessonSlug: "the-rollover-is-the-product",
          },
          {
            prompt: "What did the jury in the Southern District of New York decide on 13 October 2017?",
            options: ["Guilty on all 14 counts", "That the lender had to refund the difference between the disclosed and the actual total", "That the tribal ownership arrangement was valid and the state actions were therefore barred", "That the Truth in Lending Act disclosure box had been prepared correctly under federal law"],
            correctIndex: 0,
            explanation: "The counts included racketeering, wire fraud, money laundering and Truth in Lending Act offences, after a five-week trial.",
            sourceLessonSlug: "the-rollover-is-the-product",
          },
          {
            prompt: "On a 500 dollar loan in that case, what finance charge did the Truth in Lending Act box state?",
            options: ["150 dollars", "1,425 dollars, which the government showed was the amount actually taken from the borrower", "650 dollars, which was the total of payments the same disclosure box stated to the borrower", "50 dollars for each of the first five paydays, after which the principal began to be reduced"],
            correctIndex: 0,
            explanation: "The box stated a finance charge of 150 dollars and a total of payments of 650 dollars.",
            sourceLessonSlug: "the-rollover-is-the-product",
          },
          {
            prompt: "On the government's figures, what did that same 500 dollar borrower actually pay in total?",
            options: ["1,925 dollars", "650 dollars, which is what the Truth in Lending Act disclosure box had stated in advance", "150 dollars, which was the finance charge the lender disclosed before the money was advanced", "500 dollars, because the interest-only withdrawals were credited against the principal balance"],
            correctIndex: 0,
            explanation: "The finance charge was 1,425 rather than 150, and the gap is the renewal rather than the rate.",
            sourceLessonSlug: "the-rollover-is-the-product",
          },
          {
            prompt: "How was the repayment schedule structured in that case?",
            options: ["Interest taken, principal untouched", "Equal instalments of principal and interest across the whole of the agreed repayment term", "A single payment at the end, with the entire charge earned on the day the loan was made", "Principal first, so that the balance fell quickly and the interest charge fell along with it"],
            correctIndex: 0,
            explanation: "Nothing was applied to principal until at least the fifth payday, and the whole periodic charge was withdrawn each time.",
            sourceLessonSlug: "the-rollover-is-the-product",
          },
          {
            prompt: "What does the course say the 650-against-1,925 gap is attributable to?",
            options: ["The renewal", "The verification fee, which the disclosure box was not required to include in its figures", "The interest rate, which was higher than the annual percentage rate the box disclosed", "The late charges assessed after the borrower missed the first scheduled repayment date"],
            correctIndex: 0,
            explanation: "Same loan, same borrower, same box: what differed was that the balance producing the charge never fell.",
            sourceLessonSlug: "the-rollover-is-the-product",
          },
          {
            prompt: "Which practice heads the list of prohibitions in 10 U.S.C. 987(e)?",
            options: ["Rolling over credit with the same creditor", "Charging an annual percentage rate above the ceiling the borrower's own state has set", "Taking a post-dated cheque as security for a loan made to a covered servicemember", "Requiring the borrower to purchase a credit insurance product alongside the financing"],
            correctIndex: 0,
            explanation: "Section 1 read the whole subsection as a description of the market Congress found.",
            sourceLessonSlug: "the-rollover-is-the-product",
          },
          {
            prompt: "What does Fla. Stat. 560.404(18) forbid?",
            options: ["Rollover of the agreement", "Any charge for a transaction that the state database shows was terminated within 24 hours", "Presenting the borrower's cheque before the last day of the agreed deferment period", "Making a transaction for a term shorter than the seven days the section elsewhere requires"],
            correctIndex: 0,
            explanation: "It also bars redeeming, extending or consolidating an agreement with the proceeds of another from the same or an affiliated provider.",
            sourceLessonSlug: "the-rollover-is-the-product",
          },
          {
            prompt: "What does Florida's statewide database exist to check?",
            options: ["Whether a borrower already has an outstanding transaction", "Whether the provider's licence remains in good standing with the state regulator", "Whether the borrower's cheque has previously been returned unpaid by a bank", "Whether the fee charged falls within the percentage cap the section imposes"],
            correctIndex: 0,
            explanation: "A provider may not lend to a person with an outstanding transaction anywhere, or one terminated within the previous 24 hours.",
            sourceLessonSlug: "the-rollover-is-the-product",
          },
          {
            prompt: "What does Florida require for a borrower who says in person that they cannot repay?",
            options: ["A 60-day grace period at no additional charge", "An immediate referral to the state regulator, which then negotiates a repayment schedule", "A reduction of the outstanding balance by the amount of the fee already earned at origination", "A further advance sufficient to cover the outstanding balance, repayable over ninety days"],
            correctIndex: 0,
            explanation: "The grace period is conditioned on the borrower completing credit counselling from an agency on the office's published list.",
            sourceLessonSlug: "the-rollover-is-the-product",
          },
          {
            prompt: "What inference does this course draw from three legislatures writing the same rollover prohibition?",
            options: ["The practice existed", "That the prohibition is ineffective, because it has had to be enacted more than once", "That federal law requires each state to adopt the same prohibition in its own statute", "That the practice is now extinct in every state that has enacted such a prohibition"],
            correctIndex: 0,
            explanation: "A rule against a practice is stronger evidence about how the product works than any figure a critic could offer.",
            sourceLessonSlug: "the-rollover-is-the-product",
          },
          {
            prompt: "What does N.Y. Penal Law 190.40 make criminal?",
            options: ["Charging above 25 percent per annum without authorisation", "Making any loan of less than 500 dollars for a term shorter than thirty-one days", "Presenting a borrower's post-dated cheque before the date written on the face of it", "Operating as a lender in the state without first registering with the Attorney General"],
            correctIndex: 0,
            explanation: "The offence is criminal usury in the second degree, a class E felony.",
            sourceLessonSlug: "find-your-states-rule",
          },
          {
            prompt: "What is the significance of the phrase or the equivalent rate for a longer or shorter period?",
            options: ["Annualization is written into the criminal statute", "It permits a higher charge where the term of the loan is shorter than one calendar month", "It exempts a transaction whose term is too short for a per-annum rate to be computed at all", "It requires the lender to state the charge in the same units the borrower used when applying"],
            correctIndex: 0,
            explanation: "A fourteen-day charge cannot escape a per-annum ceiling by pointing at its own term, because the ceiling follows it.",
            sourceLessonSlug: "find-your-states-rule",
          },
          {
            prompt: "What class of offence is criminal usury in the second degree in New York?",
            options: ["A class E felony", "A class A misdemeanour, punishable by a fine rather than by any term of imprisonment", "A civil violation, which renders the loan unenforceable but carries no criminal penalty", "A regulatory breach handled by the state banking department under its licensing powers"],
            correctIndex: 0,
            explanation: "The statute's operative words are knowingly charges, takes or receives, without being authorized or permitted by law.",
            sourceLessonSlug: "find-your-states-rule",
          },
          {
            prompt: "What does the Florida-and-New-York pairing show about small-dollar lending in the United States?",
            options: ["There is no national position", "That federal law sets a floor which the states may raise but may not lower any further", "That a lender may choose which state's rule applies by incorporating in that state", "That the two states measure the same charge using two different annualization methods"],
            correctIndex: 0,
            explanation: "The same transaction is licensed in one state and, absent authorisation, criminal in the other, and both statements are true at once.",
            sourceLessonSlug: "find-your-states-rule",
          },
          {
            prompt: "What is the first step in this course's method for finding the rule that governs you?",
            options: ["Name the transaction as your state names it", "Contact the lender and ask which state's law it believes governs the agreement offered", "Compute the annual percentage rate from the fee and the term before reading any statute", "Look up the lender in a nationwide database of consumer complaints filed against it"],
            correctIndex: 0,
            explanation: "The statute is filed under the state's own noun, whether that is deferred presentment, small loan, title pledge or something else.",
            sourceLessonSlug: "find-your-states-rule",
          },
          {
            prompt: "Which four features of a state's rule does the course say decide the price?",
            options: ["Amount, fee, term, renewal", "Licence, regulator, penalty, and the court in which a dispute would be heard", "Disclosure, collateral, default, and the remedy available to the lender on non-payment", "Interest, insurance, arbitration, and the assignment of the agreement to a third party"],
            correctIndex: 0,
            explanation: "Florida's four answers are 500 dollars, 10 percent, 7 to 31 days, and no renewal.",
            sourceLessonSlug: "find-your-states-rule",
          },
          {
            prompt: "What does the course say a state licence lookup settles in about a minute?",
            options: ["Whether the lender is licensed", "Whether the rate offered falls within the ceiling the state statute currently imposes", "Whether the lender has been the subject of an enforcement action in the past five years", "Whether the agreement offered contains any of the clauses the state statute prohibits"],
            correctIndex: 0,
            explanation: "A lender that is not on the register is not licensed, which changes what the borrower is dealing with entirely.",
            sourceLessonSlug: "find-your-states-rule",
          },
          {
            prompt: "What question does the course say to ask about an offer your state appears to forbid?",
            options: ["Which law the lender says applies", "How quickly the money can be advanced once the application has been submitted online", "Whether the lender will report the account to a nationwide consumer reporting agency", "Whether the fee is charged at origination or accrues across the life of the agreement"],
            correctIndex: 0,
            explanation: "The Tucker case turned on exactly that, and several state courts dismissed enforcement actions before the jury found the arrangement was a fiction.",
            sourceLessonSlug: "find-your-states-rule",
          },
          {
            prompt: "Why does this course refuse to print a fifty-state table?",
            options: ["It would go stale silently and be believed anyway", "Because the states publish their statutes in formats that cannot be compared with each other", "Because a table would show the annualized rate rather than the fee the statute actually caps", "Because federal law forbids an educational publisher from summarising state lending statutes"],
            correctIndex: 0,
            explanation: "It would have to be maintained across 51 jurisdictions, and what travels instead is the method.",
            sourceLessonSlug: "find-your-states-rule",
          },
          {
            prompt: "Where does the course say to look for a state's rule?",
            options: ["The state's own published code", "A commercial legal database, because state codes are not published without a subscription", "The lender's own website, which is required to state the statute under which it operates", "The federal register, which collects each state's consumer lending statutes in one place"],
            correctIndex: 0,
            explanation: "Every state publishes its statutes free, and the chapter that licenses the lender is where the four price features sit.",
            sourceLessonSlug: "find-your-states-rule",
          },
          {
            prompt: "What is a vehicle title loan?",
            options: ["Short-term credit secured by a car you already own", "Credit advanced to buy a vehicle, secured by the vehicle the credit is buying", "A lease of a vehicle under which the driver may buy it at the end for a nominal sum", "A loan the borrower repays by surrendering the vehicle at the end of the agreed term"],
            correctIndex: 0,
            explanation: "It finances nothing: it converts a car the borrower owns into cash and pledges the car.",
            sourceLessonSlug: "the-title-loan-and-the-car",
          },
          {
            prompt: "Why does the purchase-money exclusion at 32 CFR 232.3(f) not reach a title loan?",
            options: ["The credit does not finance the vehicle", "Because the exclusion applies only to vehicles registered in the borrower's own name", "Because a title loan is made by a pawnbroker rather than by a licensed motor vehicle lender", "Because the exclusion was written before title lending existed as a recognised product"],
            correctIndex: 0,
            explanation: "The exclusion covers credit expressly intended to finance the purchase of the vehicle securing it, which a title loan is not.",
            sourceLessonSlug: "the-title-loan-and-the-car",
          },
          {
            prompt: "What interest ceiling does Va. Code 6.2-2216 place on a motor vehicle title loan?",
            options: ["36 percent simple annual", "25 percent of the principal advanced for each thirty-day period during the first ninety days", "10 percent of the amount advanced, plus a separate fee for verifying the borrower's identity", "No ceiling, provided every charge is itemised in the written agreement before signature"],
            correctIndex: 0,
            explanation: "It is the same figure Congress chose for servicemembers, applied by one state to everybody.",
            sourceLessonSlug: "the-title-loan-and-the-car",
          },
          {
            prompt: "How is Virginia's monthly maintenance fee limited?",
            options: ["The lesser of 8 percent or 15 dollars", "To 5 percent of the original loan amount, which also caps repossession and sale costs", "To 25 dollars, which is the same figure the section sets for a returned payment charge", "To 20 dollars, which is the same figure the section sets for a late charge on the account"],
            correctIndex: 0,
            explanation: "The fee is limited to the lesser of 8 percent of the original loan or 15 dollars, and it may not be added to the interest-bearing balance.",
            sourceLessonSlug: "the-title-loan-and-the-car",
          },
          {
            prompt: "Under Va. Code 6.2-2216(B), when does interest stop accruing on a title loan?",
            options: ["On repossession, or 60 days after default", "On the date the borrower first misses a scheduled payment on the outstanding balance", "On the date the licensee files an action in court to recover the outstanding balance", "Never, because interest continues until the borrower discharges the obligation in full"],
            correctIndex: 0,
            explanation: "The exception is a borrower who conceals the vehicle, and the borrower is not liable for storage fees.",
            sourceLessonSlug: "the-title-loan-and-the-car",
          },
          {
            prompt: "Through which statute does Georgia reach the vehicle title transaction?",
            options: ["Its pawnbroker statute", "Its deferred presentment statute, which caps the fee at ten percent of the amount advanced", "Its motor vehicle finance statute, which caps the rate at thirty-six percent simple annual", "Its criminal usury statute, which makes the transaction a felony above twenty-five percent"],
            correctIndex: 0,
            explanation: "O.C.G.A. 44-12-131 runs pawn transactions in 30-day periods and sets its own ceiling on interest and pawnshop charges.",
            sourceLessonSlug: "the-title-loan-and-the-car",
          },
          {
            prompt: "What does O.C.G.A. 44-12-131 permit for each 30-day period during the first 90 days?",
            options: ["25 percent of the principal advanced", "12.5 percent of the principal advanced, which is the ceiling that applies beyond ninety days", "36 percent expressed as a simple annual rate across the whole life of the pawn transaction", "10 percent of the amount advanced, plus a fee for registering a lien on the vehicle title"],
            correctIndex: 0,
            explanation: "The figure covers interest and pawnshop charges together, and it falls to 12.5 percent per period after 90 days.",
            sourceLessonSlug: "the-title-loan-and-the-car",
          },
          {
            prompt: "Annualized, what does Georgia's 25 percent per 30-day ceiling come to?",
            options: ["About 304 percent", "About 25 percent, because the charge is stated as a percentage of the principal advanced", "About 152 percent, which is the figure the post-ninety-day ceiling of 12.5 percent produces", "About 300 percent only where the pawn is extended for the full twelve months of a year"],
            correctIndex: 0,
            explanation: "0.25 multiplied by roughly 12.17 thirty-day periods gives about 3.04, and the post-90-day ceiling gives about 152 percent.",
            sourceLessonSlug: "the-title-loan-and-the-car",
          },
          {
            prompt: "What is the duration of a pawn transaction under O.C.G.A. 44-12-131?",
            options: ["30 days, extendable in further 30-day periods", "90 days, after which the pawnbroker must take possession of the pledged property", "One year, which is the maximum a pawnbroker may hold a certificate of title in Georgia", "Seven to thirty-one days, matching the range Florida sets for a deferred presentment"],
            correctIndex: 0,
            explanation: "The statute's own words are that all pawn transactions shall be for 30 day periods but may be extended or continued.",
            sourceLessonSlug: "the-title-loan-and-the-car",
          },
          {
            prompt: "What does Georgia's statute forbid a pawnbroker from doing with a pledged motor vehicle?",
            options: ["Leasing it back to the pledgor", "Taking possession of it at any point before a court has entered judgment on the debt", "Registering a lien against the certificate of title while the transaction remains open", "Extending the transaction beyond ninety days without the written consent of the pledgor"],
            correctIndex: 0,
            explanation: "The statute prohibits lease-back during the transaction or during any extension or continuation of it.",
            sourceLessonSlug: "the-title-loan-and-the-car",
          },
          {
            prompt: "What changes when collateral is added to a small-dollar loan?",
            options: ["The consequence of not paying", "The disclosure the lender must give, because a secured loan carries no annual percentage rate", "The term, because a secured loan must run for at least thirty days under federal law", "The identity of the regulator, because a secured lender is supervised federally rather than by a state"],
            correctIndex: 0,
            explanation: "The price usually falls a little, and the worst case moves from a debt and a mark on a report to losing the car.",
            sourceLessonSlug: "the-title-loan-and-the-car",
          },
          {
            prompt: "Why does the course say a car is a different kind of collateral for many households?",
            options: ["It produces the income the loan is repaid from", "Because its value falls faster than the balance of the loan secured against it", "Because the title cannot be transferred without the borrower appearing in person", "Because a vehicle is exempt from seizure in most states unless a court orders otherwise"],
            correctIndex: 0,
            explanation: "Losing it removes the means of repayment rather than merely settling the debt.",
            sourceLessonSlug: "the-title-loan-and-the-car",
          },
          {
            prompt: "What did Congress do about vehicle-title security for covered servicemembers?",
            options: ["Removed the security rather than capping its price", "Capped the rate at 36 percent while leaving the title pledge itself available to the lender", "Required a court order before the vehicle could be repossessed from a covered borrower", "Required the lender to insure the vehicle for the borrower's benefit during the term"],
            correctIndex: 0,
            explanation: "10 U.S.C. 987(e) forbids taking a vehicle title as security in covered consumer credit.",
            sourceLessonSlug: "the-title-loan-and-the-car",
          },
          {
            prompt: "How does Virginia treat the cost of repossession and sale?",
            options: ["Capped at 5 percent of the original loan", "Recoverable in full, provided the licensee itemises each charge to the borrower in writing", "Not recoverable at all, because the licensee bears its own costs of enforcing the security", "Recoverable only where a court has entered judgment for the licensee against the borrower"],
            correctIndex: 0,
            explanation: "The section also caps a returned payment fee at 25 dollars and a late charge at 20, and lists them exhaustively.",
            sourceLessonSlug: "the-title-loan-and-the-car",
          },
          {
            prompt: "What does the Virginia-and-Georgia comparison demonstrate about title lending?",
            options: ["Two states made different choices, both written down", "That one state permits the transaction and the other treats it as a criminal offence", "That the federal 36 percent ceiling now applies to title lending in every jurisdiction", "That the annualized cost is identical once each state's separate fees are counted in"],
            correctIndex: 0,
            explanation: "Neither state is concealing anything: 36 percent simple annual against up to 25 percent per 30-day period, on the same collateral.",
            sourceLessonSlug: "the-title-loan-and-the-car",
          },
          {
            prompt: "Which figure does Virginia's title-loan ceiling coincide with?",
            options: ["The Military Lending Act cap", "The New York criminal usury ceiling of twenty-five percent per annum on any loan", "The Florida deferred presentment fee cap of ten percent of the amount advanced", "The Georgia post-ninety-day pawn ceiling of twelve and a half percent per period"],
            correctIndex: 0,
            explanation: "Congress chose 36 percent for a named class; Virginia applied the same figure to everybody in the state.",
            sourceLessonSlug: "the-title-loan-and-the-car",
          },
          {
            prompt: "In Georgia, may a pawnbroker take possession of a vehicle without going to court?",
            options: ["Yes, where it can be done peacefully", "No, a court order is required before possession may be taken in any circumstances", "Only after the ninety-day period during which the higher charge ceiling applies has ended", "Only where the pawnbroker has registered a lien against the certificate of title first"],
            correctIndex: 0,
            explanation: "The statute contemplates possession either without court involvement where peaceful, or through legal action.",
            sourceLessonSlug: "the-title-loan-and-the-car",
          },
          {
            prompt: "Which of these is NOT among the permitted charges Va. Code 6.2-2216 lists?",
            options: ["A vehicle storage fee", "A returned cheque or draft fee of up to twenty-five dollars on a failed payment", "A late charge of up to twenty dollars where a scheduled payment is not made on time", "Court damages and collection costs, limited to the amount of the original loan"],
            correctIndex: 0,
            explanation: "Subsection (C) states that the borrower shall not be liable for fees incurred in connection with the storage of a motor vehicle.",
            sourceLessonSlug: "the-title-loan-and-the-car",
          },
          {
            prompt: "What does this course say the four Florida answers add up to?",
            options: ["The product", "The disclosure the federal Truth in Lending Act separately requires to be given", "The licence conditions the state regulator imposes on a provider before it may operate", "The evidence a court would need before it could set the agreement aside as unconscionable"],
            correctIndex: 0,
            explanation: "The maximum amount, the maximum fee, the permitted term and whether renewal is allowed are what a small-dollar loan is.",
            sourceLessonSlug: "find-your-states-rule",
          },
          {
            prompt: "Which court decided AMG Capital Management v. FTC, and when?",
            options: ["The Supreme Court, 22 April 2021", "The Second Circuit Court of Appeals, in an opinion issued during June of 2019", "The District Court for the Southern District of New York, after a five-week jury trial", "The Northern District of Georgia, where the Commission filed its complaint and order"],
            correctIndex: 0,
            explanation: "The case was about remedies, and the passage this course quotes is its description of what the district court had found.",
            sourceLessonSlug: "the-rollover-is-the-product",
          },
          {
            prompt: "What sentence did Scott Tucker receive on 5 January 2018?",
            options: ["200 months in prison", "84 months in prison, which was the sentence imposed on his co-defendant Timothy Muir", "A fine equal to the total of payments taken from borrowers across all fifty of the states", "Three years of supervised release with no custodial term, because the counts were regulatory"],
            correctIndex: 0,
            explanation: "Muir was sentenced to 84 months, and both sentences followed the jury's verdict on all 14 counts.",
            sourceLessonSlug: "the-rollover-is-the-product",
          },
          {
            prompt: "What does the phrase earned at origination mean in Florida's statute?",
            options: ["The fee belongs to the provider when the loan is made", "The fee is calculated from the date the cheque is presented rather than from the advance", "The fee accrues daily and is refundable in proportion to any unused part of the term", "The fee is collected by the state at origination and remitted to the provider afterwards"],
            correctIndex: 0,
            explanation: "It applies to a transaction paid off in 31 days or less, while an instalment transaction's fees use a simple interest calculation.",
            sourceLessonSlug: "what-the-transaction-actually-is",
          },
          {
            prompt: "What does the course say about the number a borrower computes by hand from the fee and the term?",
            options: ["It should be sitting on the form", "It will differ from the disclosed figure because the statute uses a different method", "It cannot be checked, because the lender is not required to disclose the term in writing", "It applies only where the loan is renewed, since a single term carries no annualized rate"],
            correctIndex: 0,
            explanation: "Florida requires compliance with the Regulation Z disclosures, so the annual percentage rate is on the paperwork by federal law.",
            sourceLessonSlug: "what-the-transaction-actually-is",
          },
          {
            prompt: "Which of these is a nonbank small-dollar transaction that this course prices from a state statute rather than from an estimate?",
            options: ["A Florida deferred presentment transaction", "A revolving credit card account issued by a national bank to a consumer in any state", "A federal student loan repaid under an income-driven plan set by the governing regulations", "An overdraft charged by a depository institution on a debit card point-of-sale transaction"],
            correctIndex: 0,
            explanation: "The Georgia pawn transaction and the Virginia title loan are the other two priced directly from statute in this section.",
            sourceLessonSlug: "what-the-transaction-actually-is",
          },
          {
            prompt: "What does the course say about the relationship between the price of a secured small-dollar loan and its risk to the borrower?",
            options: ["Lower price, higher stakes", "Higher price, because the lender must bear the cost of perfecting its security interest", "Identical, because the annualized figure captures everything the borrower stands to lose", "Lower price and lower stakes, because the collateral discharges the debt on repossession"],
            correctIndex: 0,
            explanation: "Adding collateral usually lowers the price a little and changes the consequence of not paying completely.",
            sourceLessonSlug: "the-title-loan-and-the-car",
          },
          {
            prompt: "What kind of document is the Department of Justice account this course relies on for the Tucker figures?",
            options: ["A record of what a jury heard and found", "An allegation contained in a complaint the government had filed but not yet proved", "A settlement in which the defendants neither admitted nor denied the conduct alleged", "A regulatory guidance document describing how the agency interprets the statute"],
            correctIndex: 0,
            explanation: "The verdict on all 14 counts came first, and the sentencing release records what the evidence at trial established.",
            sourceLessonSlug: "the-rollover-is-the-product",
          },
          {
            prompt: "Which of these accurately states the posture of AMG Capital Management v. FTC for this course's purposes?",
            options: ["A Supreme Court decision describing a district court's findings", "An allegation by the Commission that the Court neither accepted nor rejected on the merits", "A settlement between the Commission and the defendants entered without any admission", "A criminal conviction returned by a jury on counts including racketeering and wire fraud"],
            correctIndex: 0,
            explanation: "The criminal conviction is the separate Southern District of New York case, and the course keeps the two apart.",
            sourceLessonSlug: "the-rollover-is-the-product",
          },
          {
            prompt: "What is the effect of Florida's 24-hour rule?",
            options: ["A borrower cannot immediately re-enter a new transaction", "A provider must hold the borrower's cheque for at least twenty-four hours before presenting it", "A borrower may cancel the transaction without charge within twenty-four hours of signing", "A provider must report each new transaction to the state database within twenty-four hours"],
            correctIndex: 0,
            explanation: "A provider may not lend to a person whose previous transaction with any provider was terminated less than 24 hours earlier.",
            sourceLessonSlug: "the-rollover-is-the-product",
          },
          {
            prompt: "What does the course identify as the choice-of-law question behind an internet loan offer?",
            options: ["Whose rules the lender says govern the agreement", "Whether the borrower may sue in their own state or must travel to the lender's state", "Whether the annual percentage rate is computed under federal or under state definitions", "Whether the loan is reported to a consumer reporting agency in the borrower's own state"],
            correctIndex: 0,
            explanation: "It is a real question with a real answer, and it is the first one to ask about an offer a state appears to forbid.",
            sourceLessonSlug: "find-your-states-rule",
          },
          {
            prompt: "Which regulator does the course say publishes a licence lookup?",
            options: ["The state department of financial institutions or banking", "The Federal Trade Commission, which maintains a national register of consumer lenders", "The Department of Defense, which lists every creditor permitted to lend to servicemembers", "The Internal Revenue Service, which registers any business making loans against a tax refund"],
            correctIndex: 0,
            explanation: "The name varies by state but the function does not, and the register is public.",
            sourceLessonSlug: "find-your-states-rule",
          },
          {
            prompt: "In the Tucker enterprise, what did the arrangement with tribes exist to defeat?",
            options: ["State enforcement of lending laws", "The federal Truth in Lending Act's requirement to disclose the total of payments", "A federal criminal prosecution for racketeering and for laundering the loan proceeds", "The obligation to hold a licence from each state in which the borrowers were resident"],
            correctIndex: 0,
            explanation: "Several state courts dismissed enforcement actions on a sovereign immunity claim before the jury found the arrangement was a fiction.",
            sourceLessonSlug: "find-your-states-rule",
          },
          {
            prompt: "What does the course say the Georgia and Virginia statutes have in common?",
            options: ["Both wrote their choice down", "Both cap the charge at the same figure once the separate fees are counted together", "Both require a court order before a pledged motor vehicle may be taken from the borrower", "Both treat the transaction as a pawn rather than as an extension of consumer credit"],
            correctIndex: 0,
            explanation: "Neither state is doing anything hidden; they reached very different answers and published both.",
            sourceLessonSlug: "the-title-loan-and-the-car",
          },
          {
            prompt: "What is the practical function of a post-dated cheque in a deferred presentment transaction?",
            options: ["It is the provider's security", "It is the disclosure the federal Truth in Lending Act requires to be given at origination", "It is the record the state database uses to identify an outstanding transaction", "It is the fee, since the difference between the face amount and the advance is the charge"],
            correctIndex: 0,
            explanation: "Section 1 named the post-dated cheque, the debit authorisation and the car title as the three forms of security in this market.",
            sourceLessonSlug: "what-the-transaction-actually-is",
          },
          {
            prompt: "What does the course say about Florida's grace-period condition?",
            options: ["It requires credit counselling", "It requires the borrower to pay a further fee equal to half the original charge", "It requires the borrower to surrender the cheque and sign a new written agreement", "It requires the state regulator to approve the extension before it may take effect"],
            correctIndex: 0,
            explanation: "The counselling must come from an agency on the office's published list, and the extension itself carries no additional charge.",
            sourceLessonSlug: "the-rollover-is-the-product",
          },
          {
            prompt: "Which two figures does the course set against each other to show the gap the renewal creates?",
            options: ["650 dollars disclosed and 1,925 dollars taken", "500 dollars advanced and 150 dollars charged as the finance charge on the loan", "36 percent and 25 percent, being the Virginia ceiling and the New York usury ceiling", "10 percent and 25 percent, being the Florida fee cap and the Georgia per-period cap"],
            correctIndex: 0,
            explanation: "Same loan, same borrower and same disclosure box, with the difference produced by a balance that never fell.",
            sourceLessonSlug: "the-rollover-is-the-product",
          },
          {
            prompt: "How does the course characterise the relationship between an unsecured loan's worst case and a title loan's?",
            options: ["A debt and a report entry, against losing the car", "Identical, because both end in a court judgment that the lender may enforce", "The unsecured case is worse, because there is no collateral to discharge the balance", "The two cannot be compared, because the products are licensed under different statutes"],
            correctIndex: 0,
            explanation: "That difference is why Congress removed the security for covered servicemembers rather than capping its price.",
            sourceLessonSlug: "the-title-loan-and-the-car",
          },
          {
            prompt: "What does 25 percent per 30-day period fall to after 90 days in Georgia?",
            options: ["12.5 percent", "10 percent, matching the ceiling Florida imposes on a deferred presentment transaction", "36 percent expressed as a simple annual rate, matching the Virginia title loan ceiling", "Nothing further may be charged, because the pawn must be redeemed or forfeited at that point"],
            correctIndex: 0,
            explanation: "The statute sets a lower ceiling for a transaction continued or extended beyond 90 days.",
            sourceLessonSlug: "the-title-loan-and-the-car",
          },
          {
            prompt: "Which of these does the course present as the reason the annualized figure alone is not enough for a title loan?",
            options: ["The collateral changes the worst case", "The annualized figure cannot be computed where the term runs in thirty-day periods", "The statute prohibits stating an annual percentage rate for a secured transaction", "The lender is permitted to change the rate once the ninety-day period has elapsed"],
            correctIndex: 0,
            explanation: "The arithmetic prices the loan; it does not price the loss of the thing that produces the income repaying it.",
            sourceLessonSlug: "the-title-loan-and-the-car",
          },
          {
            prompt: "Why does the course use Florida's own ceiling rather than an invented number for its worked conversion?",
            options: ["So the arithmetic runs on a real rule", "Because Florida's ceiling is the median across the states that license the transaction", "Because federal law requires an example to be drawn from a currently effective statute", "Because an invented figure would understate what lenders in that state actually charge"],
            correctIndex: 0,
            explanation: "The Section 1 point arrives with a real number attached rather than as an illustration.",
            sourceLessonSlug: "what-the-transaction-actually-is",
          },
          {
            prompt: "What must a Florida deferred presentment agreement state in writing about timing?",
            options: ["The length and last day of the deferment period", "The number of days the provider expects the borrower's employer to take to pay wages", "The date on which the provider will report the transaction to a consumer reporting agency", "The interval at which the fee will be recalculated if the transaction is not repaid on time"],
            correctIndex: 0,
            explanation: "The agreement must also state the provider's name and address, the date, the amount of the cheque, and a clear description of the payment obligation.",
            sourceLessonSlug: "what-the-transaction-actually-is",
          },
          {
            prompt: "On what day must a Florida deferred presentment agreement be executed?",
            options: ["The day the money is handed over", "Within three business days of the provider approving the borrower's written application", "On the last day of the deferment period, when the cheque is presented for payment", "At least twenty-four hours before the advance, so the borrower may reconsider it"],
            correctIndex: 0,
            explanation: "The statute ties execution to the day the provider furnishes the currency or payment instrument to the drawer.",
            sourceLessonSlug: "what-the-transaction-actually-is",
          },
          {
            prompt: "What is the instalment fee cap in Fla. Stat. 560.404(6)(a)?",
            options: ["8 percent of the outstanding balance, biweekly", "10 percent of the amount advanced, which is the non-instalment cap the same paragraph sets", "25 percent for each thirty-day period, matching the Georgia pawn ceiling for ninety days", "36 percent expressed as a simple annual rate across the whole of the repayment schedule"],
            correctIndex: 0,
            explanation: "The 10 percent figure applies to a transaction not repayable in instalments, and the two caps are set side by side.",
            sourceLessonSlug: "what-the-transaction-actually-is",
          },
          {
            prompt: "Which of these clauses does Florida's statute name among those a deferred presentment agreement may not contain?",
            options: ["A waiver of any provision of the part", "A term permitting the provider to present the cheque before the agreed deferment date", "A term requiring the borrower to notify the provider before opening another account", "A term allowing the provider to charge a fee for issuing its own payment instrument"],
            correctIndex: 0,
            explanation: "The prohibited list also includes a hold harmless clause, a confession of judgment, a wage assignment and a waiver of claims and defences.",
            sourceLessonSlug: "what-the-transaction-actually-is",
          },
          {
            prompt: "What is the sequence the course uses to establish that renewal is the mechanism?",
            options: ["The Court's description, then the jury's arithmetic", "A regulator's estimate, followed by a trade body's response to that estimate", "A consumer survey, followed by the industry's own published lending statistics", "A state statute, followed by a summary of the other forty-nine state statutes"],
            correctIndex: 0,
            explanation: "AMG Capital describes the auto-renewal default and the criminal case supplies the 650-against-1,925 figures.",
            sourceLessonSlug: "the-rollover-is-the-product",
          },
          {
            prompt: "According to the Department of Justice account, when did any part of a payment begin to reduce principal?",
            options: ["At the fifth payday, at the earliest", "On the first payday, once the periodic finance charge had been satisfied in full", "Only after the borrower asked in writing for the balance to be amortised over time", "Never, because the structure required the whole balance to be repaid in one payment"],
            correctIndex: 0,
            explanation: "Until then the whole interest payment was withdrawn each payday and nothing was applied to the principal balance.",
            sourceLessonSlug: "the-rollover-is-the-product",
          },
          {
            prompt: "Which three Truth in Lending Act items does the Department of Justice account name as required before credit is extended?",
            options: ["Finance charge, annual percentage rate, total of payments", "Licence number, regulator's address, and the borrower's right to cancel the agreement", "Term, collateral description, and the court in which any dispute would have to be heard", "Amount advanced, verification fee, and the date the provider will present the cheque"],
            correctIndex: 0,
            explanation: "The account describes those three as what lenders including payday lenders must disclose accurately, clearly and conspicuously.",
            sourceLessonSlug: "the-rollover-is-the-product",
          },
          {
            prompt: "What does the course say a legislature's prohibition of a practice is evidence of?",
            options: ["That the practice existed", "That the practice was more profitable than any other part of the lender's business", "That the practice had already been prohibited by federal law in every other state", "That the legislature intended the whole product to be unavailable within its borders"],
            correctIndex: 0,
            explanation: "Three separate legislatures wrote the same rollover prohibition, which says more about the product than an outside estimate would.",
            sourceLessonSlug: "the-rollover-is-the-product",
          },
          {
            prompt: "Which state's rule does this course use as its example of a statute that licenses the transaction?",
            options: ["Florida", "New York, whose penal law reaches the charge at twenty-five percent per annum", "Virginia, whose title-loan statute caps interest at thirty-six percent simple annual", "Georgia, whose pawnbroker statute runs the transaction in thirty-day periods"],
            correctIndex: 0,
            explanation: "The New York statute is the contrasting case in which the same charge is a class E felony absent authorisation.",
            sourceLessonSlug: "find-your-states-rule",
          },
          {
            prompt: "What does the course say happens to a fifty-state table over time?",
            options: ["It goes stale silently", "It becomes more accurate as the states converge on a single regulatory approach", "It has to be filed with each state regulator before it may be published to the public", "It stops matching the statutes because states rename the transaction rather than change it"],
            correctIndex: 0,
            explanation: "It would have to be maintained across 51 jurisdictions and would be believed after it stopped being true.",
            sourceLessonSlug: "find-your-states-rule",
          },
          {
            prompt: "Which of these nouns does the course list as a name a state might file the transaction under?",
            options: ["Title pledge", "Deferred remittance, which is the term used where the lender holds an electronic authorisation", "Wage advance agreement, which is the term used where an employer participates in the loan", "Presentment guarantee, which is the term used where a third party insures the borrower's cheque"],
            correctIndex: 0,
            explanation: "Deferred presentment, deferred deposit, small loan, short-term loan, payday loan, title pledge and title pawn are the names it gives.",
            sourceLessonSlug: "find-your-states-rule",
          },
          {
            prompt: "In Virginia, what happens to the interest clock if the borrower conceals the vehicle?",
            options: ["It does not stop", "It stops immediately, because concealment is treated as a constructive repossession", "It stops sixty days after default in every case, regardless of the borrower's conduct", "It is replaced by a daily storage charge assessed against the borrower until recovery"],
            correctIndex: 0,
            explanation: "The section stops interest on repossession or 60 days after default, with concealment as the stated exception.",
            sourceLessonSlug: "the-title-loan-and-the-car",
          },
          {
            prompt: "What does Georgia's statute permit a pawnbroker to charge in addition, in a motor vehicle title transaction?",
            options: ["A lien registration fee actually incurred", "A storage charge for each day the vehicle remains in the pawnbroker's possession", "A separate verification fee, to which the percentage ceilings on charges do not apply", "A repossession and sale cost of up to five percent of the principal amount advanced"],
            correctIndex: 0,
            explanation: "The fee may be no more than the state's own charge to register a lien, and only where the pawnbroker actually registers one.",
            sourceLessonSlug: "the-title-loan-and-the-car",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3 — Rent-to-own: the total against the price
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "total-of-payments-against-cash-price",
      title: "10 · Two numbers, and the only comparison that matters",
      section: "Section 3 · Rent-to-own: the total against the price",
      body: `A sofa has a price. It also has a total. Rent-to-own is the market where those two numbers are furthest apart, and the whole analysis is putting them side by side.

**The vocabulary first, in a statute's own words.** Connecticut defines **cash price** as "the price at which a lessor in the ordinary course of business would in good faith offer the property for cash on the date of the rent-to-own agreement" (Conn. Gen. Stat. § 42-240, n.d.). That is what the item costs if you walk in and pay for it. The other number is the **rent-to-own price**: the total number of payments and the total amount of those payments necessary to acquire ownership.

**Two numbers, one subtraction.** The difference between them is the price of the arrangement, and it is the only figure in this transaction worth arguing about.

**Connecticut requires both numbers and the subtraction, in a size you can read.** Conn. Gen. Stat. § 42-241, headed "Written agreement. Information which must be disclosed", lists the items that must appear before the lessee signs. Among them are the cash price, the rent-to-own price, and, as its own line, "The difference between the cash price and the rent-to-own price". All three of those figures must appear **in at least ten-point boldface type** (Conn. Gen. Stat. § 42-241, n.d.). The type-size rule is the tell: a legislature that has to specify the point size has seen the alternative.

**Connecticut also caps the total, and does it in an unusual way.** Section 42-248 is headed "Limit on total rental payments. Lessee to acquire ownership when fifty per cent of all rental payments made by lessee equals cash price of rented property. Termination of agreement." Its operative sentence is:

> "When fifty per cent of all rental payments made by a lessee equals the cash price of the property disclosed to the lessee in the rent-to-own agreement, the lessee shall own the rented property and the rent-to-own agreement shall terminate." (Conn. Gen. Stat. § 42-248, n.d.)

**Read what that does.** It does not forbid a high total. It makes ownership vest automatically once half of what has been paid equals the cash price, which is the same thing as saying the total may not exceed twice the cash price, expressed as a mechanism rather than as a prohibition. **A cap you have to enforce is worth less than a cap that transfers the title by operation of law.**

**The figures are Connecticut's, read on 28 August 2026, and they are not national.** Other states set different ceilings, and some set none. The next lesson explains why the federal comparison rule does not fill the gap.

**And the market has been the subject of a federal enforcement action about exactly this arithmetic.** On 20 April 2020 the Federal Trade Commission filed a complaint and a proposed stipulated final order against Progressive Leasing in the Northern District of Georgia. **The Commission alleged**, and this is an allegation rather than a finding, that consumers were told the payment plans were "same as cash" or "no interest", and that consumers instead "paid more than the sticker price, and frequently paid approximately twice the sticker price if they made all scheduled payments under the plans" (Federal Trade Commission, 2020). The FTC's own note on the release states the standard: "The Commission files a complaint when it has 'reason to believe' that the named defendants are violating or are about to violate the law", and "Stipulated final orders have the force of law when approved and signed by the District Court judge" (Federal Trade Commission, 2020). Section 6 lesson 2 teaches how to read that distinction generally.

:::reveal What are the two numbers a rent-to-own comparison turns on? ||| The cash price and the rent-to-own price, which is the total of the payments needed to acquire ownership.

:::reveal How does Connecticut define cash price? ||| The price at which a lessor in the ordinary course of business would in good faith offer the property for cash on the date of the rent-to-own agreement.

:::reveal What does Conn. Gen. Stat. 42-248 do when fifty per cent of the payments made equals the cash price? ||| Ownership vests in the lessee and the agreement terminates, which caps the total at twice the cash price by operation of law.

:::reveal In the Progressive Leasing matter, was the claim that consumers frequently paid about twice the sticker price a finding or an allegation? ||| An allegation. It was pleaded in a complaint the Commission files when it has reason to believe the law is being violated.

## Vocabulary
- **Cash price**: what the item costs paid for outright, defined in Connecticut as the price the lessor would in good faith offer for cash on the date of the agreement.
- **Rent-to-own price**: the total number and total amount of the payments needed to acquire ownership, which Connecticut requires to be disclosed beside the cash price.
- **The difference**: the price of the arrangement itself, which Connecticut requires to be printed as its own line in at least ten-point boldface type.
- **Automatic vesting**: Connecticut's mechanism by which title passes and the agreement ends once half the payments made equal the cash price, rather than leaving the cap to be enforced afterwards.

## Sources
Conn. Gen. Stat. ch. 743i, §§ 42-240 to 42-248. (n.d.). *Consumer rent-to-own agreements*. Connecticut General Assembly. https://www.cga.ct.gov/2023/pub/chap_743i.htm

Federal Trade Commission. (2020, April 20). *Rent-to-own payment plan company Progressive Leasing will pay $175 million to settle FTC charges it deceived consumers about pricing*. https://www.ftc.gov/news-events/news/press-releases/2020/04/rent-own-payment-plan-company-progressive-leasing-will-pay-175-million-settle-ftc-charges-it`,
    },
    {
      slug: "why-no-annual-rate-appears",
      title: "11 · Why there is no rate on the page",
      section: "Section 3 · Rent-to-own: the total against the price",
      body: `Look at a rent-to-own agreement and you will not find an annual percentage rate. That is not an oversight, and it is not usually a violation. **The comparison rule Section 1 taught does not reach this transaction**, and the reason is a definition.

**Regulation Z applies to credit.** Its definition of a **credit sale** at 12 CFR § 1026.2(a)(16) covers an ordinary sale on credit, and then reaches further, to a bailment or lease. The test has two parts, and both have to be satisfied. The customer must agree "to pay as compensation for use a sum substantially equivalent to, or in excess of, the total value" of the property and any services involved, **and** the customer must either become the owner on completing the payments or have the option to become the owner for no further consideration or for nominal consideration (12 CFR § 1026.2, n.d.).

**Rent-to-own agreements are ordinarily written so that the first part is not satisfied.** They are structured as terminable leases: the customer rents for a period, may renew, and may return the item and walk away at any point without owing the remaining payments. If you may stop at any time, you have not agreed to pay a sum substantially equivalent to the total value. You have agreed to this period, and then to decide again.

**So the transaction sits outside Regulation Z**, which means no finance charge, no total of payments in a federal disclosure box, and **no annual percentage rate**. Nothing has been withheld. The rule was written around a promise to pay, and this contract is drafted not to contain one.

**Notice that the customer genuinely does get something for that.** The right to return the item is real, and for a household that expects its income to be interrupted it is worth having. A credit sale you cannot pay leaves you with a debt, a possible judgment, and an entry in the file MONEY-01 taught you to read. A terminable lease you cannot pay leaves you without the sofa. **Those are different risks, and a person who prefers the second one is making a choice rather than a mistake.** What it costs is the difference between the two numbers in the last lesson.

**The states filled the gap themselves, and the fact that they had to is the proof.** The whole point of a rental-purchase act is to require, under state law, the disclosures that Regulation Z would have required if the transaction were credit: the cash price, the total to ownership, the difference, the number and amount of payments. Connecticut's statute exists because the federal one does not apply. **When you find a state statute doing a federal statute's job, you have found a product that was designed to sit outside the federal one.**

**Which leaves the arithmetic to you, and it is easy arithmetic.** Number of payments, times the amount of each payment, plus anything due at signing and any charge for the option to purchase, equals the total to ownership. Set that against the cash price. Divide the total by the cash price and you have the multiple: 1.9 times, 2.3 times, whatever it is. **That multiple is the number to compare between offers**, and it needs no statute to compute.

One thing to check on the page while you are there: almost every rental-purchase statute requires an **early purchase option**, and its formula is where the difference between two otherwise similar offers usually hides.

:::reveal What two things must both be true for a lease to be a credit sale under 12 CFR 1026.2(a)(16)? ||| The customer must agree to pay a sum substantially equivalent to or greater than the total value, and must become or be able to become the owner for no or nominal further consideration.

:::reveal Which part of that test does a terminable rent-to-own lease avoid? ||| The agreement to pay, because the customer may return the item at any time and owes nothing further.

:::reveal What does the existence of state rental-purchase acts tell you? ||| That the product sits outside the federal disclosure rule, so the states legislated the disclosures themselves.

:::reveal What single figure lets you compare two rent-to-own offers without any statute? ||| The multiple: the total to ownership divided by the cash price.

## Vocabulary
- **Credit sale**: the Regulation Z category at 12 CFR 1026.2(a)(16) that reaches some leases, and whose two-part test a terminable rental-purchase agreement is drafted to fail.
- **Terminable lease**: an agreement the customer may end at any time by returning the property, which is why no promise to pay the full value exists.
- **Rental-purchase act**: a state statute requiring, under state law, the disclosures the federal credit rules would have required if the transaction were credit.
- **Early purchase option**: the formula for buying the item outright before the end of the payment schedule, and the term where two similar offers most often differ.
- **The multiple**: the total to ownership divided by the cash price, which is this course's comparison figure where no annual percentage rate exists.

## Sources
12 CFR § 1026.2. (n.d.). *Definitions and rules of construction*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/1026.2

Conn. Gen. Stat. ch. 743i, §§ 42-240 to 42-248. (n.d.). *Consumer rent-to-own agreements*. Connecticut General Assembly. https://www.cga.ct.gov/2023/pub/chap_743i.htm`,
    },
    {
      slug: "where-the-total-hides",
      title: "12 · Where the total hides, and what a regulator found",
      section: "Section 3 · Rent-to-own: the total against the price",
      body: `A number that is disclosed and a number that is visible are not the same number. That gap is the subject of this lesson, and a federal complaint describes it precisely.

**What the Commission alleged.** In the Progressive Leasing matter, filed 20 April 2020 in the Northern District of Georgia, the FTC's complaint alleged that when consumers were presented with the terms of the offers, they were shown the cash price of the item along with the cost of the initial payment and each periodic payment. **To see the full cost of the plan, the complaint alleged, consumers had to click a dropdown arrow next to the words "Additional Lease Details"** (Federal Trade Commission, 2020).

**Read the structure of that allegation, because it is the general case.** Every figure the consumer needed was in the flow. The cash price was there. The payment amount was there. The one number that is the whole comparison, the total to ownership, was behind an interaction. **A disclosure that requires a deliberate act to reveal is disclosed and invisible at once**, which is exactly the difference between the arithmetic being available and the arithmetic being done.

**Posture, stated plainly, because this course does not blur it.** That is an allegation in a complaint, not a judicial finding of fact. The Commission's own note on the release says it "files a complaint when it has 'reason to believe' that the named defendants are violating or are about to violate the law and it appears to the Commission that a proceeding is in the public interest" (Federal Trade Commission, 2020). The matter was resolved by a proposed stipulated final order under which the company was to pay 175 million dollars for consumer refunds, to stop misrepresenting the cost, terms or nature of the plans, **to clearly and conspicuously disclose the total cost to own when marketing them**, to obtain express informed consent before charging, and to monitor the retailers offering its plans. The Commission's vote to authorise the filing was 3 to 2. The release also records that the company was aware of consumer confusion, with more than 15,000 complaints received in one 15-month period, according to the FTC.

**The remedy is the most instructive part of the document**, because it names what was missing: the total cost to own, clearly and conspicuously. That is the same number Connecticut's statute puts in ten-point boldface, and the same number the last lesson told you to compute yourself.

**So here is the method, and it is four lines on the back of the agreement.**

1. **Find the cash price.** If it is not on the page, ask for the price to buy the item outright today, and write down the answer.
2. **Find the payment amount and how many payments reach ownership.** Multiply.
3. **Add everything else**: anything due at signing, delivery, any required fee, any charge in the early purchase formula if you intend to use it.
4. **Divide the total by the cash price.** You now have the multiple, which is comparable across any two offers and needs no rate.

**And find your own state's rental-purchase act by name**, using the same four-step method Section 2 gave for lending: the state's own noun (rent-to-own, rental-purchase, lease-purchase), the state's own published code, then the four features that decide the price. For a rental-purchase act the four are: **what must be disclosed, whether the total is capped, what the early purchase option must cost, and what happens on a missed payment.**

**None of this tells you whether to sign.** That is your decision about your own household, and this course does not know your household. What it can do is make sure that when you decide, both numbers are in front of you.

:::reveal In the FTC's complaint, what did a consumer have to do to see the full cost of the plan? ||| Click a dropdown arrow next to the words Additional Lease Details.

:::reveal What is the difference between a number being disclosed and a number being visible? ||| A disclosure that requires a deliberate act to reveal is present in the flow and absent from the decision.

:::reveal What did the proposed stipulated final order require the company to disclose when marketing its plans? ||| The total cost to own the product, clearly and conspicuously.

:::reveal What four features decide the price under a state rental-purchase act? ||| What must be disclosed, whether the total is capped, what the early purchase option costs, and what happens on a missed payment.

## Vocabulary
- **Total cost to own**: the figure the proposed order required to be disclosed clearly and conspicuously, and the same figure Connecticut prints in boldface.
- **Stipulated final order**: a settlement that, in the Commission's own words, has the force of law when approved and signed by the District Court judge.
- **Reason to believe**: the standard on which the Commission files a complaint, which is why a complaint is an allegation rather than a finding.
- **Clearly and conspicuously**: the standard the order applied to the total cost, and the answer to a disclosure that sits behind an interaction.

## Sources
Federal Trade Commission. (2020, April 20). *Rent-to-own payment plan company Progressive Leasing will pay $175 million to settle FTC charges it deceived consumers about pricing*. https://www.ftc.gov/news-events/news/press-releases/2020/04/rent-own-payment-plan-company-progressive-leasing-will-pay-175-million-settle-ftc-charges-it

Conn. Gen. Stat. ch. 743i, §§ 42-240 to 42-248. (n.d.). *Consumer rent-to-own agreements*. Connecticut General Assembly. https://www.cga.ct.gov/2023/pub/chap_743i.htm`,
    },
    {
      slug: "quiz-rent-to-own",
      title: "13 · Knowledge check: rent-to-own",
      section: "Section 3 · Rent-to-own: the total against the price",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What two numbers does a rent-to-own comparison turn on?",
            options: ["The cash price and the rent-to-own price", "The periodic payment and the annual percentage rate disclosed on the agreement", "The amount due at signing and the balance remaining after the first twelve payments", "The retail list price and the amount the lessor paid its own supplier for the item"],
            correctIndex: 0,
            explanation: "The difference between them is the price of the arrangement, and it is the only figure worth arguing about.",
            sourceLessonSlug: "total-of-payments-against-cash-price",
          },
          {
            prompt: "How does Conn. Gen. Stat. 42-240 define cash price?",
            options: ["The good-faith cash offer price on the date of the agreement", "The amount the lessor originally paid to acquire the property from its own supplier", "The average price at which similar property is sold for cash in the same county", "The rent-to-own price reduced by the total of the charges the lessor has disclosed"],
            correctIndex: 0,
            explanation: "The statute's phrasing is the price at which a lessor in the ordinary course of business would in good faith offer the property for cash.",
            sourceLessonSlug: "total-of-payments-against-cash-price",
          },
          {
            prompt: "What is the rent-to-own price?",
            options: ["The total payments needed to acquire ownership", "The periodic payment multiplied by the number of weeks in a single calendar year", "The cash price plus a stated percentage set by the state's rental-purchase statute", "The amount required to exercise the early purchase option at the midpoint of the term"],
            correctIndex: 0,
            explanation: "Connecticut requires both the total number of payments and the total amount of those payments to be disclosed.",
            sourceLessonSlug: "total-of-payments-against-cash-price",
          },
          {
            prompt: "Which three figures must Connecticut's disclosure print in at least ten-point boldface type?",
            options: ["Cash price, rent-to-own price, and the difference", "Payment amount, payment frequency, and the number of payments to reach ownership", "Delivery charge, early purchase option price, and the fee for a missed payment", "Licence number of the lessor, the state regulator's address, and the consumer's right to cancel"],
            correctIndex: 0,
            explanation: "A legislature that has to specify the point size has seen the alternative.",
            sourceLessonSlug: "total-of-payments-against-cash-price",
          },
          {
            prompt: "What is the section heading of Conn. Gen. Stat. 42-241?",
            options: ["Written agreement. Information which must be disclosed.", "Limit on total rental payments, and termination of the rent-to-own agreement", "Definitions applicable to consumer rent-to-own agreements made within the state", "Prohibited practices in the marketing of consumer rent-to-own agreements to lessees"],
            correctIndex: 0,
            explanation: "It lists the items that must appear before the lessee signs, including the cash price and the rent-to-own price.",
            sourceLessonSlug: "total-of-payments-against-cash-price",
          },
          {
            prompt: "What happens under Conn. Gen. Stat. 42-248 when fifty per cent of the rental payments made equals the cash price?",
            options: ["The lessee owns the property and the agreement terminates", "The lessor must offer the lessee a written option to purchase at a nominal price", "The remaining payments are reduced by half for the balance of the agreed term", "The lessee may return the property without owing any of the remaining payments"],
            correctIndex: 0,
            explanation: "That is a two-times cap on the total, expressed as a mechanism rather than as a prohibition.",
            sourceLessonSlug: "total-of-payments-against-cash-price",
          },
          {
            prompt: "Why does the course call automatic vesting a stronger form of cap?",
            options: ["It transfers title by operation of law", "It sets a lower ceiling than a prohibition on offering an agreement above the limit", "It applies to every state, while a prohibition applies only within one jurisdiction", "It requires the lessor to refund the difference once the ceiling has been exceeded"],
            correctIndex: 0,
            explanation: "A cap you have to enforce is worth less than one that vests ownership without anybody having to act.",
            sourceLessonSlug: "total-of-payments-against-cash-price",
          },
          {
            prompt: "In the Progressive Leasing matter, what did the FTC allege consumers were told about the plans?",
            options: ["Same as cash, or no interest", "That the total to ownership would be disclosed after the first payment was made", "That the plans carried a lower annual percentage rate than a store credit card", "That the property could be returned at any point with a full refund of payments made"],
            correctIndex: 0,
            explanation: "The complaint alleged that this led consumers to believe they would not be charged more than the sticker price.",
            sourceLessonSlug: "total-of-payments-against-cash-price",
          },
          {
            prompt: "What did the FTC's complaint allege consumers frequently paid, relative to the sticker price?",
            options: ["Approximately twice the sticker price", "Approximately half again the sticker price where every payment was made on time", "Exactly the sticker price, plus a separate charge for delivery and for installation", "Less than the sticker price, provided the early purchase option was exercised early"],
            correctIndex: 0,
            explanation: "The allegation was about consumers who made all scheduled payments under the plans.",
            sourceLessonSlug: "total-of-payments-against-cash-price",
          },
          {
            prompt: "On what standard does the Commission file a complaint, in its own words?",
            options: ["Reason to believe", "Clear and convincing evidence that the conduct alleged has already caused consumer harm", "A preponderance of the evidence gathered during a compulsory process investigation", "A referral from a state attorney general that names the defendant and describes the conduct"],
            correctIndex: 0,
            explanation: "The note adds that it must also appear to the Commission that a proceeding is in the public interest.",
            sourceLessonSlug: "total-of-payments-against-cash-price",
          },
          {
            prompt: "What does the Commission say gives a stipulated final order the force of law?",
            options: ["Approval and signature by the District Court judge", "A vote of the full Commission recorded in the minutes of its public meeting", "Publication of the order in the Federal Register following a comment period", "Acceptance of the order in writing by every defendant named in the complaint"],
            correctIndex: 0,
            explanation: "That sentence is why a settlement is neither an allegation nor a judicial finding of fact.",
            sourceLessonSlug: "total-of-payments-against-cash-price",
          },
          {
            prompt: "Which court did the FTC file the Progressive Leasing complaint and proposed order in?",
            options: ["The Northern District of Georgia", "The Southern District of New York, where the payday lending prosecution was tried", "The Supreme Court of the United States, which decided the remedies question in 2021", "The District of Connecticut, whose rental-purchase statute the course also quotes"],
            correctIndex: 0,
            explanation: "The filing date was 20 April 2020, and the Commission's authorising vote was 3 to 2.",
            sourceLessonSlug: "total-of-payments-against-cash-price",
          },
          {
            prompt: "Why does no annual percentage rate appear on an ordinary rent-to-own agreement?",
            options: ["Regulation Z does not reach the transaction", "Because the state rental-purchase act forbids a lessor from stating a rate on the page", "Because the periodic payment is a rental charge on which no rate can be computed", "Because the lessor is a retailer, and retailers are exempt from the federal rules"],
            correctIndex: 0,
            explanation: "The rule was written around a promise to pay, and the contract is drafted not to contain one.",
            sourceLessonSlug: "why-no-annual-rate-appears",
          },
          {
            prompt: "What is the first part of the credit-sale test at 12 CFR 1026.2(a)(16)?",
            options: ["An agreement to pay substantially the total value", "A transfer of possession of the property to the customer at the start of the term", "A charge for the use of the property that exceeds the lessor's own cost of capital", "A written disclosure of the total of payments before the customer signs the agreement"],
            correctIndex: 0,
            explanation: "The customer must agree to pay as compensation for use a sum substantially equivalent to, or in excess of, the total value.",
            sourceLessonSlug: "why-no-annual-rate-appears",
          },
          {
            prompt: "What is the second part of that test?",
            options: ["Ownership on completion, or an option for nominal consideration", "A term longer than four months, counted from the date the property was delivered", "A finance charge separately stated in the agreement alongside the periodic payment", "A security interest taken by the lessor in the property that is the subject of the lease"],
            correctIndex: 0,
            explanation: "Both parts must be satisfied, and a terminable rental-purchase lease is drafted to fail the first.",
            sourceLessonSlug: "why-no-annual-rate-appears",
          },
          {
            prompt: "Which feature of a rent-to-own agreement defeats the first part of the test?",
            options: ["The customer may return the item at any time", "The customer pays weekly rather than monthly over the life of the agreement", "The lessor retains title to the property until the final payment has been received", "The lessor may repossess the property without first obtaining an order of a court"],
            correctIndex: 0,
            explanation: "If you may stop at any time, you have not agreed to pay a sum substantially equivalent to the total value.",
            sourceLessonSlug: "why-no-annual-rate-appears",
          },
          {
            prompt: "What does the course say a customer genuinely buys with a terminable structure?",
            options: ["The right to stop and owe nothing", "A lower total cost than the same item bought on a store credit account", "A guarantee that the property will be replaced if it fails during the term", "An option to purchase the item at the end for the amount of one further payment"],
            correctIndex: 0,
            explanation: "A credit sale you cannot pay leaves a debt and a file entry; a terminable lease you cannot pay leaves you without the item.",
            sourceLessonSlug: "why-no-annual-rate-appears",
          },
          {
            prompt: "How does the course describe a household that prefers the terminable structure?",
            options: ["Making a choice about which risk to carry", "Paying more than necessary because it has not read the disclosure carefully", "Unable to obtain credit anywhere else, which is why it accepts the higher total", "Protected by federal law, because a lease carries stronger consumer rights than credit"],
            correctIndex: 0,
            explanation: "The two structures carry different risks, and preferring the second one is a choice rather than a mistake.",
            sourceLessonSlug: "why-no-annual-rate-appears",
          },
          {
            prompt: "What does the existence of a state rental-purchase act prove, in this course's reading?",
            options: ["The product sits outside the federal rule", "The state regulator has found the product to be unfair to consumers within its borders", "The federal rules have been amended to delegate the disclosure question to the states", "The lessor holds a state licence that permits it to disregard the federal disclosure rules"],
            correctIndex: 0,
            explanation: "When a state statute is doing a federal statute's job, the product was designed to sit outside the federal one.",
            sourceLessonSlug: "why-no-annual-rate-appears",
          },
          {
            prompt: "How do you compute the multiple this course uses to compare two rent-to-own offers?",
            options: ["Total to ownership divided by cash price", "Cash price divided by the number of payments needed to acquire ownership", "The difference between the two prices divided by the number of weeks in the term", "The periodic payment multiplied by the number of periods remaining after signing"],
            correctIndex: 0,
            explanation: "It is comparable across any two offers and needs no statute and no disclosed rate.",
            sourceLessonSlug: "why-no-annual-rate-appears",
          },
          {
            prompt: "What should be added to the total before dividing by the cash price?",
            options: ["Anything due at signing and any required charges", "The interest the lessor would have charged had the transaction been structured as credit", "The value of the property at the end of the term, discounted to its present value", "The amount the lessee would forfeit by returning the property before ownership vests"],
            correctIndex: 0,
            explanation: "Delivery, any required fee, and the charge in the early purchase formula where the lessee intends to use it all belong in the total.",
            sourceLessonSlug: "why-no-annual-rate-appears",
          },
          {
            prompt: "Where does the course say the difference between two otherwise similar offers usually hides?",
            options: ["In the early purchase option formula", "In the delivery charge, which most state statutes leave entirely uncapped", "In the periodic payment, which varies more between lessors than any other term", "In the definition of cash price, which each lessor is free to compute differently"],
            correctIndex: 0,
            explanation: "Almost every rental-purchase statute requires an early purchase option, and its formula is where offers diverge.",
            sourceLessonSlug: "why-no-annual-rate-appears",
          },
          {
            prompt: "What did the FTC's complaint allege a consumer had to click to see the full cost?",
            options: ["A dropdown arrow beside Additional Lease Details", "A link to the state rental-purchase act reproduced on the lessor's own website", "A checkbox confirming that the consumer had read and accepted the lease terms", "A button requesting a printed copy of the agreement to be posted to the consumer"],
            correctIndex: 0,
            explanation: "The cash price and the payment amounts were in the flow; the total to ownership was behind an interaction.",
            sourceLessonSlug: "where-the-total-hides",
          },
          {
            prompt: "What general point does the course draw from that allegation?",
            options: ["Disclosed and visible are not the same", "A disclosure made online is less effective than the same disclosure made on paper", "A regulator will treat any omitted figure as a deceptive act under its own statute", "A consumer who does not click has waived the right to complain about the total"],
            correctIndex: 0,
            explanation: "A disclosure that requires a deliberate act to reveal is present in the flow and absent from the decision.",
            sourceLessonSlug: "where-the-total-hides",
          },
          {
            prompt: "What did the proposed stipulated final order require the company to disclose when marketing the plans?",
            options: ["The total cost to own, clearly and conspicuously", "The annual percentage rate computed under the federal open-end credit formula", "The number of consumer complaints it had received about the plans in the past year", "The identity of every retailer authorised to offer the plans in the consumer's state"],
            correctIndex: 0,
            explanation: "The remedy names what was missing, and it is the same number Connecticut prints in ten-point boldface.",
            sourceLessonSlug: "where-the-total-hides",
          },
          {
            prompt: "What sum was the company to pay under the proposed order?",
            options: ["175 million dollars", "10.9 million dollars, which was the refund figure in the Harris Jewelry matter", "1.3 billion dollars, which was a judgment obtained in a payday lending case", "No monetary sum, because the order was limited to prospective conduct requirements"],
            correctIndex: 0,
            explanation: "The money was to be used to provide refunds to affected consumers.",
            sourceLessonSlug: "where-the-total-hides",
          },
          {
            prompt: "Besides the money and the disclosure, what else did the proposed order require?",
            options: ["Monitoring the retailers that offer the plans", "Withdrawal from every state whose rental-purchase act caps the total of payments", "Publication of the complaint on the company's own website for a period of two years", "Refunding any consumer who had returned property before ownership had vested"],
            correctIndex: 0,
            explanation: "It also required express informed consent before charging or billing, and barred misrepresenting the cost, terms or nature of the plans.",
            sourceLessonSlug: "where-the-total-hides",
          },
          {
            prompt: "How many complaints does the release say the company received in one 15-month period, according to the FTC?",
            options: ["More than 15,000", "More than 175,000, one for each thousand dollars of the settlement figure agreed", "Fewer than 1,000, which the Commission described as evidence of widespread confusion", "None, because consumers who completed the payments had no basis to complain at all"],
            correctIndex: 0,
            explanation: "The release presents that as evidence the company was aware of consumers' confusion about the terms.",
            sourceLessonSlug: "where-the-total-hides",
          },
          {
            prompt: "What is the first step in the course's four-line method for pricing a rent-to-own offer?",
            options: ["Find the cash price", "Compute the annual percentage rate from the payment amount and the term length", "Ask the lessor for a copy of its licence from the state's consumer protection office", "Compare the periodic payment against the payment on a store credit account offer"],
            correctIndex: 0,
            explanation: "If it is not on the page, ask for the price to buy the item outright today and write the answer down.",
            sourceLessonSlug: "where-the-total-hides",
          },
          {
            prompt: "Which four features does the course say decide the price under a state rental-purchase act?",
            options: ["Disclosure, cap, early purchase option, missed payment", "Licence, regulator, penalty, and the venue for hearing any dispute that arises", "Amount, fee, term, and renewal, which are the four features for a small-dollar loan", "Delivery, installation, warranty, and the lessor's obligation to replace faulty goods"],
            correctIndex: 0,
            explanation: "It is the rental-purchase counterpart of the four features Section 2 gave for a lending statute.",
            sourceLessonSlug: "where-the-total-hides",
          },
          {
            prompt: "What does the course say about whether a reader should sign a rent-to-own agreement?",
            options: ["It does not say, and will not", "It advises against signing where the multiple exceeds two times the cash price", "It advises signing only where the state statute caps the total of the payments", "It advises signing where the household expects its income to be interrupted"],
            correctIndex: 0,
            explanation: "The course's job is to make sure both numbers are in front of the reader when they decide.",
            sourceLessonSlug: "where-the-total-hides",
          },
          {
            prompt: "What is the difference between the cash price and the rent-to-own price, in this course's terms?",
            options: ["The price of the arrangement", "The lessor's profit, after the cost of acquiring and delivering the property", "The amount the state statute requires the lessor to refund on an early purchase", "The finance charge, which Regulation Z requires to be stated as a dollar amount"],
            correctIndex: 0,
            explanation: "It is the only figure in the transaction worth arguing about, which is why Connecticut requires it as its own line.",
            sourceLessonSlug: "total-of-payments-against-cash-price",
          },
          {
            prompt: "Are Connecticut's rent-to-own figures presented in this course as national rules?",
            options: ["No, they are one state's, and dated", "Yes, because the Federal Trade Commission adopted them as a national standard", "Yes, because every state that regulates rent-to-own has enacted the same ceiling", "No, but they are the strictest, so any other state's rule will be more protective"],
            correctIndex: 0,
            explanation: "They were read on 28 August 2026, and other states set different ceilings while some set none.",
            sourceLessonSlug: "total-of-payments-against-cash-price",
          },
          {
            prompt: "What does the course say a terminable rent-to-own lease leaves a customer who cannot pay?",
            options: ["Without the item", "With a judgment entered against them in the county where they reside", "With a debt reported to a nationwide consumer reporting agency for seven years", "With an obligation to pay the remaining scheduled payments as liquidated damages"],
            correctIndex: 0,
            explanation: "A credit sale you cannot pay leaves a debt, a possible judgment, and a file entry, which is a different risk.",
            sourceLessonSlug: "why-no-annual-rate-appears",
          },
          {
            prompt: "What kind of property does a rental-purchase agreement typically cover?",
            options: ["Household goods such as furniture and electronics", "Real property, including the residence in which the goods are to be installed", "Motor vehicles, which is why the pawnbroker statutes reach the same transaction", "Financial instruments, which is why the securities exclusions in Regulation E apply"],
            correctIndex: 0,
            explanation: "The Progressive Leasing complaint names furniture, jewelry and cellphones among the items consumers were buying.",
            sourceLessonSlug: "total-of-payments-against-cash-price",
          },
          {
            prompt: "What does the course mean by saying nothing has been withheld when no rate appears?",
            options: ["The rule was written around a promise this contract does not contain", "The lessor has obtained a waiver from the federal regulator for that disclosure", "The rate is disclosed elsewhere, in the state-mandated portion of the agreement", "The rate is unnecessary, because the total of payments already appears on the page"],
            correctIndex: 0,
            explanation: "A transaction drafted to fall outside Regulation Z carries no finance charge, no federal total of payments box, and no annual percentage rate.",
            sourceLessonSlug: "why-no-annual-rate-appears",
          },
          {
            prompt: "Which of these is a fair statement of the posture of the Progressive Leasing matter?",
            options: ["A complaint and a proposed stipulated order", "A jury verdict after a five-week trial in a federal district court", "A Supreme Court decision resolving a conflict among the courts of appeals", "An administrative rule issued after notice and comment by the Commission"],
            correctIndex: 0,
            explanation: "A complaint is an allegation and a stipulated order is a settlement, and neither is a judicial finding on the merits.",
            sourceLessonSlug: "where-the-total-hides",
          },
          {
            prompt: "What does the ten-point boldface requirement suggest about the drafting history of Connecticut's statute?",
            options: ["The legislature had seen the alternative", "The legislature copied the requirement from the federal Truth in Lending Act", "The legislature intended the disclosure to be readable by people with low vision", "The legislature wanted the figures to occupy a full page of the written agreement"],
            correctIndex: 0,
            explanation: "A rule that has to specify the point size is a rule written against something that had happened.",
            sourceLessonSlug: "total-of-payments-against-cash-price",
          },
          {
            prompt: "Which statute did the course use to define the vocabulary of rent-to-own?",
            options: ["Connecticut's consumer rent-to-own chapter", "Regulation Z, which defines cash price and total of payments for lease transactions", "Florida's deferred presentment statute, which uses the same defined terms", "The Military Lending Act, whose definition of consumer credit reaches leases"],
            correctIndex: 0,
            explanation: "Chapter 743i supplies cash price, rent-to-own price, the disclosure list and the cap.",
            sourceLessonSlug: "total-of-payments-against-cash-price",
          },
          {
            prompt: "In the FTC's account, which figures were shown to consumers in the ordinary flow?",
            options: ["The cash price and the payment amounts", "The total to ownership and the number of payments required to reach it", "The difference between the cash price and the total to own the property", "The annual percentage rate and the finance charge for the whole term"],
            correctIndex: 0,
            explanation: "The one figure that is the whole comparison was the one behind the interaction.",
            sourceLessonSlug: "where-the-total-hides",
          },
          {
            prompt: "How does this course's rent-to-own method relate to its small-dollar lending method?",
            options: ["Same four-step shape, different four features", "It is unrelated, because rent-to-own is governed federally and lending is governed by states", "It is the same in every respect, because both products are licensed under one statute", "It is shorter, because a rental-purchase act has no licensing regulator to look up"],
            correctIndex: 0,
            explanation: "The state's own noun, the state's own published code, then the four features that decide the price.",
            sourceLessonSlug: "where-the-total-hides",
          },
          {
            prompt: "Why does the course prefer the multiple to an annualized rate for rent-to-own?",
            options: ["No rate is disclosed, and the multiple needs none", "Because the multiple is required to be disclosed by every state rental-purchase act", "Because a rate would overstate the cost of a lease the customer may end at will", "Because the federal regulator has directed that leases be compared using multiples"],
            correctIndex: 0,
            explanation: "It is computable from the two figures the transaction actually produces, and it compares across offers.",
            sourceLessonSlug: "why-no-annual-rate-appears",
          },
          {
            prompt: "What is the effect of Connecticut's cap on a lessor that has already collected more than half the cash price in payments?",
            options: ["Ownership will vest once half the payments equal the cash price", "The lessor must refund the excess to the lessee within thirty days of the payment", "The lessor must reduce the remaining payments so the total stops at the cash price", "The lessor must offer the lessee a new agreement on terms approved by the state"],
            correctIndex: 0,
            explanation: "At that point the lessee owns the property and the agreement terminates by the statute's own terms.",
            sourceLessonSlug: "total-of-payments-against-cash-price",
          },
          {
            prompt: "What is a bailment, in the context of the Regulation Z credit-sale definition?",
            options: ["A transfer of possession without transfer of ownership", "A pledge of collateral to secure repayment of an outstanding consumer loan", "A payment made at signing to reserve property for later delivery to the customer", "A guarantee by a third party that the customer's obligations will be performed"],
            correctIndex: 0,
            explanation: "The definition reaches a bailment or lease meeting both parts of its test, which is why the drafting of the agreement matters.",
            sourceLessonSlug: "why-no-annual-rate-appears",
          },
          {
            prompt: "What does nominal consideration mean in the second part of the credit-sale test?",
            options: ["A token amount to acquire ownership", "The full remaining balance owed under the agreement at the time of purchase", "An amount equal to the difference between the cash price and the payments made", "Any amount the parties agree in writing before the property is delivered"],
            correctIndex: 0,
            explanation: "The test is satisfied where the customer becomes owner on completion, or may become owner for no or only nominal further consideration.",
            sourceLessonSlug: "why-no-annual-rate-appears",
          },
          {
            prompt: "Which of these correctly states what a rent-to-own customer owes on returning the item?",
            options: ["Nothing further, under a terminable agreement", "The remaining scheduled payments, as damages for ending the agreement early", "Half the difference between the cash price and the total to acquire ownership", "A restocking charge set by the state rental-purchase act at a fixed percentage"],
            correctIndex: 0,
            explanation: "That is precisely the feature that keeps the agreement outside the credit-sale definition.",
            sourceLessonSlug: "why-no-annual-rate-appears",
          },
          {
            prompt: "What did the Commission's authorising vote in the Progressive Leasing matter record?",
            options: ["Three to two, with two commissioners dissenting", "A unanimous decision of all five commissioners then serving on the Commission", "A tie broken by the chair, who voted to authorise the filing of the complaint", "No vote, because the matter was resolved by staff without a Commission decision"],
            correctIndex: 0,
            explanation: "The release names the two dissenting commissioners and notes that a third issued a separate statement.",
            sourceLessonSlug: "total-of-payments-against-cash-price",
          },
          {
            prompt: "Why does the course say the remedy in a settlement is the most instructive part of the document?",
            options: ["It names what was missing", "It states the amount the defendant admitted it had taken from consumers", "It sets the standard every competitor in the market must now meet by law", "It records the court's findings of fact about the conduct that was alleged"],
            correctIndex: 0,
            explanation: "Requiring the total cost to own to be disclosed clearly and conspicuously identifies the figure whose absence was the problem.",
            sourceLessonSlug: "where-the-total-hides",
          },
          {
            prompt: "Which two documents does this section put side by side to make the same point about the total?",
            options: ["Connecticut's disclosure statute and the FTC's remedy", "Regulation Z's credit-sale definition and the Military Lending Act's rate cap", "Florida's deferred presentment statute and New York's criminal usury statute", "Georgia's pawnbroker statute and Virginia's motor vehicle title loan statute"],
            correctIndex: 0,
            explanation: "One prints the total in ten-point boldface, the other requires it clearly and conspicuously, and both name the same figure.",
            sourceLessonSlug: "where-the-total-hides",
          },
          {
            prompt: "What is the third step in the four-line rent-to-own method?",
            options: ["Add everything else that is due", "Divide the total by the cash price to obtain the comparison multiple", "Multiply the payment amount by the number of payments needed for ownership", "Look up the lessor's licence on the state financial regulator's public register"],
            correctIndex: 0,
            explanation: "Anything due at signing, delivery, required fees and any early purchase charge all belong before the division.",
            sourceLessonSlug: "where-the-total-hides",
          },
          {
            prompt: "What does the course say about a household that expects its income to be interrupted?",
            options: ["The right to return may be worth having", "It should not enter a rental-purchase agreement under any circumstances at all", "It will always pay less under a credit sale than under a rental-purchase agreement", "It is protected by the state statute from any obligation arising after the interruption"],
            correctIndex: 0,
            explanation: "The point is that the two structures carry different risks rather than that one is correct.",
            sourceLessonSlug: "why-no-annual-rate-appears",
          },
          {
            prompt: "Which of these is NOT among the items Connecticut requires to be disclosed in a rent-to-own agreement?",
            options: ["The annual percentage rate", "The cash price of the property that is the subject of the agreement", "The total number and total amount of payments needed to acquire ownership", "The difference between the cash price and the rent-to-own price of the property"],
            correctIndex: 0,
            explanation: "There is no annual percentage rate to disclose, which is why the state statute requires the totals instead.",
            sourceLessonSlug: "why-no-annual-rate-appears",
          },
          {
            prompt: "How should a reader treat the phrase same as cash in a marketing claim, on this course's approach?",
            options: ["As a claim to check against the two numbers", "As a legally binding promise that the total will not exceed the cash price", "As a term of art defined by the state rental-purchase act in identical words", "As an admission that the transaction is a credit sale under Regulation Z"],
            correctIndex: 0,
            explanation: "The FTC alleged that consumers hearing it believed they would not be charged more than the sticker price, and paid about twice it.",
            sourceLessonSlug: "total-of-payments-against-cash-price",
          },
          {
            prompt: "Which figure does the course say is comparable across any two rent-to-own offers?",
            options: ["The multiple", "The periodic payment, which is the figure both lessors are required to disclose", "The cash price, which each lessor computes from the same wholesale acquisition cost", "The term, expressed as the number of weeks until ownership vests in the customer"],
            correctIndex: 0,
            explanation: "1.9 times, 2.3 times, whatever it is, and it needs no rate and no statute to compute.",
            sourceLessonSlug: "why-no-annual-rate-appears",
          },
          {
            prompt: "What did the FTC allege about the company's awareness of consumer confusion?",
            options: ["It had received tens of thousands of complaints", "It had commissioned a survey showing that consumers understood the terms", "It had been warned in writing by three state attorneys general before the filing", "It had removed the total cost figure from the flow after receiving complaints"],
            correctIndex: 0,
            explanation: "The release records more than 15,000 complaints in a single 15-month period, according to the Commission.",
            sourceLessonSlug: "where-the-total-hides",
          },
          {
            prompt: "How does this course describe the relationship between Regulation Z and the rent-to-own market?",
            options: ["The market was built around the definition", "Regulation Z was amended to remove rental-purchase agreements from its coverage", "Regulation Z applies, but the disclosures may be given after the agreement is signed", "Regulation Z applies only where the total exceeds twice the cash price of the property"],
            correctIndex: 0,
            explanation: "Agreements are drafted as terminable leases precisely so the agreement-to-pay element of the credit-sale test is not met.",
            sourceLessonSlug: "why-no-annual-rate-appears",
          },
          {
            prompt: "What does the course tell a reader to do if the cash price is not printed on the page?",
            options: ["Ask for the outright purchase price today", "Estimate it from the retail price of a comparable item sold in another store", "Treat the first payment as the cash price for the purposes of the comparison", "Assume the state statute caps the total at twice whatever the payments come to"],
            correctIndex: 0,
            explanation: "Then write the answer down, because the whole comparison depends on having that number.",
            sourceLessonSlug: "where-the-total-hides",
          },
          {
            prompt: "Which of these best describes what Connecticut's cap does NOT do?",
            options: ["Forbid a high total outright", "Vest ownership once half the payments made equal the cash price", "Terminate the agreement at the moment ownership passes to the lessee", "Operate without requiring the lessee to bring any action to enforce it"],
            correctIndex: 0,
            explanation: "It reaches the same result by transferring title rather than by prohibiting the offer.",
            sourceLessonSlug: "total-of-payments-against-cash-price",
          },
          {
            prompt: "What is the subtraction the course says is the heart of the rent-to-own analysis?",
            options: ["Rent-to-own price minus cash price", "Cash price minus the amount due at the signing of the agreement", "Total payments minus the payments already made at the point of return", "Early purchase option price minus the remaining scheduled payments"],
            correctIndex: 0,
            explanation: "That difference is the price of the arrangement, and Connecticut requires it as its own disclosed line.",
            sourceLessonSlug: "total-of-payments-against-cash-price",
          },
          {
            prompt: "Which of these does the course present as a reason a state might cap a rent-to-own total?",
            options: ["The federal comparison rule does not reach it", "The federal rule caps it already, and the state is required to match the figure", "The Commission has directed states to cap the total at twice the cash price", "The product is credit, so the state must apply the same ceiling as for a loan"],
            correctIndex: 0,
            explanation: "Rental-purchase acts exist to supply, under state law, what Regulation Z would have supplied if the transaction were credit.",
            sourceLessonSlug: "why-no-annual-rate-appears",
          },
          {
            prompt: "What did the proposed order require before the company could charge or bill a consumer?",
            options: ["Express informed consent", "A signed acknowledgement witnessed by an employee of the participating retailer", "A copy of the consumer's report obtained from a nationwide reporting agency", "Written approval from the state regulator in the consumer's state of residence"],
            correctIndex: 0,
            explanation: "The order also required monitoring of third-party retailers offering the plans.",
            sourceLessonSlug: "where-the-total-hides",
          },
          {
            prompt: "Which of these is the correct order of the course's rent-to-own method?",
            options: ["Cash price, payments, extras, divide", "Divide, extras, payments, cash price, then look up the state statute afterwards", "Statute, licence, regulator, then the arithmetic once the lessor has been verified", "Multiple, cap, disclosure, then the early purchase option formula for the offer"],
            correctIndex: 0,
            explanation: "Four lines on the back of the agreement, ending in the multiple.",
            sourceLessonSlug: "where-the-total-hides",
          },
          {
            prompt: "Why does the course say the comparison figure needs no statute?",
            options: ["It is arithmetic on figures the transaction produces", "Because the state statute already requires the lessor to compute it for the lessee", "Because the federal rule supplies it wherever a state statute does not require it", "Because a multiple has the same legal effect as a disclosed annual percentage rate"],
            correctIndex: 0,
            explanation: "Number of payments times amount, plus extras, divided by the cash price, is available to anyone with both numbers.",
            sourceLessonSlug: "why-no-annual-rate-appears",
          },
          {
            prompt: "What does the course say a legislature specifying a point size has probably seen?",
            options: ["A disclosure printed too small to read", "A lessor refusing to provide the cash price when a customer asked for it", "A total of payments computed differently by two lessors in the same market", "An early purchase option formula that produced a higher price than the total"],
            correctIndex: 0,
            explanation: "The type-size rule is the tell, and it is why the course reads statutes for what they were written against.",
            sourceLessonSlug: "total-of-payments-against-cash-price",
          },
          {
            prompt: "Which section of the Connecticut chapter contains the cap?",
            options: ["Section 42-248", "Section 42-240, which defines cash price and the other terms used in the chapter", "Section 42-241, which lists the information that must be disclosed before signature", "Section 42-243, which sets out the remedies available to a lessee for a violation"],
            correctIndex: 0,
            explanation: "Its heading names the limit, the vesting rule and the termination of the agreement together.",
            sourceLessonSlug: "total-of-payments-against-cash-price",
          },
          {
            prompt: "How does the course characterise the arithmetic left to a rent-to-own customer?",
            options: ["Easy arithmetic", "Impossible without the annual percentage rate the lessor is required to disclose", "A calculation only a licensed adviser is permitted to perform for a consumer", "A projection that depends on assumptions about how long the customer will keep the item"],
            correctIndex: 0,
            explanation: "Payments times amount, plus extras, divided by cash price, is four operations.",
            sourceLessonSlug: "why-no-annual-rate-appears",
          },
          {
            prompt: "What is the relationship between the FTC complaint's factual allegations and this course's treatment of them?",
            options: ["Reported as allegations, never as findings", "Reported as findings, because a settlement resolves the factual questions raised", "Omitted entirely, because unproven allegations have no place in a taught course", "Reported as findings, because the District Court signed the stipulated final order"],
            correctIndex: 0,
            explanation: "The Commission's own note explains that it files on reason to believe, and Section 6 generalises the distinction.",
            sourceLessonSlug: "where-the-total-hides",
          },
          {
            prompt: "Which single figure does this section say is the whole comparison?",
            options: ["The total to ownership", "The initial payment, which is the only amount most customers see before signing", "The weekly payment, which is what the customer must actually find each week", "The cash price, which is fixed by the lessor at the date the agreement is made"],
            correctIndex: 0,
            explanation: "It is the figure Connecticut prints in boldface, the figure the FTC's remedy required, and the figure the course tells you to compute.",
            sourceLessonSlug: "where-the-total-hides",
          },
          {
            prompt: "What does Connecticut's chapter call the party who supplies the property under a rent-to-own agreement?",
            options: ["The lessor", "The pawnbroker, which is the term Georgia's statute uses for the same function", "The provider, which is the term Florida's deferred presentment statute uses", "The creditor, which is the term Regulation Z uses for a party extending credit"],
            correctIndex: 0,
            explanation: "The counterpart is the lessee, and the vocabulary is a lease vocabulary because the transaction is drafted as a lease.",
            sourceLessonSlug: "total-of-payments-against-cash-price",
          },
          {
            prompt: "Why does this section say the item's price and the item's total are furthest apart in this market?",
            options: ["The comparison rule does not reach it", "Because the goods are delivered before any payment has been made by the customer", "Because state statutes require the lessor to add a fixed margin to the cash price", "Because the payments are weekly, and weekly terms compound faster than monthly ones"],
            correctIndex: 0,
            explanation: "No federal annual percentage rate appears, so the whole analysis is putting the two numbers side by side yourself.",
            sourceLessonSlug: "total-of-payments-against-cash-price",
          },
          {
            prompt: "Which of these is the correct reading of the phrase clearly and conspicuously in the proposed order?",
            options: ["Not behind an interaction the consumer must perform", "Printed in at least ten-point boldface type on the face of the agreement", "Repeated orally by the retailer's employee before the consumer signs anything", "Filed with the state regulator before the plan may be offered in that state"],
            correctIndex: 0,
            explanation: "The ten-point boldface requirement is Connecticut's statutory answer to the same problem, and the two documents name the same figure.",
            sourceLessonSlug: "where-the-total-hides",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 4 — Attached to money already coming to you
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "a-refund-is-money-already-owed",
      title: "14 · A refund is a debt the government already owes you",
      section: "Section 4 · Attached to money already coming to you",
      body: `A tax refund is not a prize and it is not a windfall. It is the return of an overpayment: money that was yours, withheld from your pay across the year, and repaid because more was taken than was owed.

**The statute is unambiguous about what it is.** Under 26 U.S.C. § 6402(a) the Secretary may credit an overpayment "against any liability in respect of an internal revenue tax" and "shall refund any balance" to the person who made it (26 U.S.C. § 6402, n.d.). **Shall refund.** It is a debt, and the creditor is you.

**That single fact reframes every product in this section.** A loan made against a refund is a loan against money the government is already required to pay you. The lender is not taking a credit risk on whether the money exists. It is taking a risk on timing and on whether the return is correct. The product is not access to money you do not have; it is **access to money you do have, sooner**.

**And federal law fixes how much sooner, for some filers and not others.** 26 U.S.C. § 6402(m) says that no credit or refund of an overpayment for a taxable year "shall be made before the 15th day of the second month following" the close of that year, where the return claims the child tax credit by reason of section 24(d) or the earned income credit under section 32 (26 U.S.C. § 6402, n.d.).

**Read that carefully, because it is the mechanism of the whole section.** The hold does not apply to every filer. It applies to returns claiming two specific credits, and those two credits are refundable credits aimed at working households with lower incomes. So federal law itself holds the refund of the filers who are, by the design of the credits, least able to wait for it, and holds nobody else's. **The hold is not a scandal; it is an anti-fraud measure with a stated purpose.** But its effect on the market is not in dispute: it creates a defined window, in a defined population, in which a large and certain sum of money is coming and has not arrived.

**A product that fills a defined gap for a defined population is not an accident of the market. It is a response to a statute.** Section 1's borrowed procedure applies exactly: the door that closed is the calendar, the pool that replaced it is a lender advancing against a receivable it can verify, and the risk it bears is small because the debtor is the United States Treasury.

**Which is why the price is the only interesting question**, and why the next lesson does nothing but price it. A product whose credit risk is genuinely low, sold into a window created by statute, to a population identified by statute, should be cheap. Whether any particular offer is cheap is arithmetic, and you already know the arithmetic.

**One thing to hold on to, though, before the arithmetic.** The reason a household takes an advance on money coming in three weeks is almost never ignorance of the price. It is that something is due this week. Section 1 said this and it bears repeating here: the FDIC's own survey of why households use nonbank services collects reasons, not excuses, and timing is the most ordinary reason there is.

:::reveal What does 26 U.S.C. 6402(a) say the Secretary shall do with the balance of an overpayment? ||| Refund it, after crediting it against any liability in respect of an internal revenue tax.

:::reveal What date does 26 U.S.C. 6402(m) fix, and for which returns? ||| The 15th day of the second month after the close of the taxable year, for returns claiming the refundable child tax credit under section 24(d) or the earned income credit under section 32.

:::reveal Why does the hold matter for the market in refund products? ||| It creates a defined window, in a defined population, in which a large and certain sum is coming and has not arrived.

:::reveal What risk does a lender advancing against a refund actually bear? ||| Timing, and whether the return is correct. It is not bearing the risk that the money does not exist, because the debtor is the Treasury.

## Vocabulary
- **Overpayment**: tax paid in excess of the liability, which 26 U.S.C. 6402(a) requires to be credited and then refunded.
- **Refundable credit**: a credit that can produce a payment to the filer rather than only reducing tax owed, of which section 24(d) and section 32 are the two named in 6402(m).
- **The statutory hold**: the rule at 26 U.S.C. 6402(m) delaying refunds on returns claiming those two credits until a fixed date.
- **Advance against a receivable**: lending against a sum a third party is already obliged to pay, which is what a refund-related loan is.

## Sources
26 U.S.C. § 6402. (n.d.). *Authority to make credits or refunds*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/26/6402`,
    },
    {
      slug: "the-refund-loan-and-the-transfer",
      title: "15 · Two products, and only one of them is a loan",
      section: "Section 4 · Attached to money already coming to you",
      body: `Two things are commonly sold alongside tax preparation, they are easily confused, and only one is credit. Telling them apart is most of the lesson.

**The first is a loan against the refund.** The filer borrows now, and the loan is repaid out of the refund when it arrives. It is credit: there is an amount, a term, and a charge, so Regulation Z reaches it and there is an annual percentage rate to read. **Section 1's arithmetic applies without modification.** A charge of C on an advance of A repaid in D days is a periodic rate of C divided by A, multiplied by 365 divided by D. A 60 dollar charge on a 600 dollar advance repaid in 21 days is 0.10 times about 17.4, which is roughly **174 percent a year**. Those are illustrative figures chosen to show the shape, not any offer in the market.

**Notice what makes that figure large, because it is not the size of the charge.** Ten percent of the advance is not an outrageous number by itself. It is large **because the term is three weeks**, and the term is three weeks because the money was always going to arrive in three weeks. **A short term is what turns a modest charge into a large rate, and this is the product where the term is shortest and most certain.**

**The second product is not a loan at all**, and this is the one people get wrong. Under a refund transfer, sometimes sold as a refund anticipation cheque, no money is advanced. A temporary bank account is opened, the refund is directed into it, the preparation fee and the transfer fee are deducted, and the remainder is passed to the filer. **Nothing has been lent.** What has been sold is the ability to pay the preparation fee out of the refund instead of out of pocket at the time of filing.

**So the honest description of a refund transfer is a fee for deferring another fee**, and its cost cannot be expressed as an annual percentage rate, because there is no principal and no credit. The comparison is simpler and starker: what does the transfer cost, and what would preparation have cost if paid directly? **That is a subtraction, and it is the only question the product raises.**

**Which makes the free routes the load-bearing comparison, and they are named, federal, and non-commercial.**

- **IRS Free File**, at IRS.gov, offers guided tax software free for filers within an adjusted gross income threshold (89,000 dollars on the page read on **28 August 2026**), plus Free File Fillable Forms with no income limit at all (Internal Revenue Service, n.d.-a). The IRS's own page warns that you must start at IRS.gov, because going directly to a partner's commercial site does not get you the free program.
- **And the Free File program bans the product this lesson is about.** Among the benefits the IRS lists: "No upselling of additional services or hidden fees permitted. Selling of bank products, such as a refund anticipation loan (RAL), audit protection or other services are prohibited" (Internal Revenue Service, n.d.-a). **The tax authority names the product by name and excludes it from its own free channel.**
- **VITA and TCE** provide free preparation by IRS-certified volunteers, with a quality review of every return before filing. VITA generally serves filers making 69,000 dollars or less, and TCE particularly serves people aged 60 and over, both figures read on **28 August 2026**. The IRS publishes a locator tool and a telephone number for finding a site (Internal Revenue Service, n.d.-b).

**Three questions, then, and they settle both products.** What is the charge, in dollars? How many days earlier does the money arrive? And what would the same preparation have cost through a free channel? **A product that buys three weeks is worth what three weeks is worth to you, which is a question about your household and not about the product.**

:::reveal What is the difference between a refund-related loan and a refund transfer? ||| The loan advances money and is repaid from the refund; the transfer advances nothing and simply lets the preparation fee be deducted from the refund.

:::reveal Why can a refund transfer's cost not be expressed as an annual percentage rate? ||| Because no money is lent, so there is no principal and no credit for a rate to be computed on.

:::reveal What does the IRS Free File program say about selling refund anticipation loans? ||| That the selling of bank products such as a refund anticipation loan, audit protection or other services is prohibited within the program.

:::reveal What makes a modest charge on a refund advance produce a large annualized rate? ||| The shortness of the term, because the money was always going to arrive within a few weeks.

## Vocabulary
- **Refund anticipation loan**: credit advanced against an expected tax refund and repaid from it, which the IRS Free File program names and prohibits within its own channel.
- **Refund transfer**: an arrangement in which a temporary account receives the refund so fees can be deducted from it, which advances no money and is therefore not credit.
- **Fee deferral**: the accurate description of what a refund transfer sells, namely the ability to pay a preparation fee later out of the refund.
- **Free File Fillable Forms**: the IRS option with no income limit, distinct from the guided software that carries an adjusted gross income threshold.
- **VITA and TCE**: the IRS volunteer preparation programs, with a quality review of every return, serving filers by income and, for TCE, particularly those aged 60 and over.

## Sources
Internal Revenue Service. (n.d.-a). *IRS Free File: Do your taxes for free*. https://www.irs.gov/filing/irs-free-file-do-your-taxes-for-free

Internal Revenue Service. (n.d.-b). *Free tax return preparation for qualifying taxpayers*. https://www.irs.gov/individuals/free-tax-return-preparation-for-qualifying-taxpayers

15 U.S.C. § 1606. (n.d.). *Determination of annual percentage rate*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/15/1606`,
    },
    {
      slug: "overdraft-priced-as-credit",
      title: "16 · Overdraft, priced the way this course prices everything else",
      section: "Section 4 · Attached to money already coming to you",
      body: `An overdraft is a very small loan, made without an application, for a very short time, at a fee. Price it the way you price everything else in this course and it is usually the most expensive credit a household ever uses.

**MONEY-02 already taught the rule, and this lesson does not repeat it.** That course works through 12 CFR § 1005.17, the Regulation E provision under which a financial institution may not assess a fee for paying an ATM or one-time debit card overdraft unless it has given a segregated written notice, provided a reasonable opportunity to consent, obtained the consumer's affirmative consent, and confirmed that consent in writing (12 CFR § 1005.17, n.d.). It also teaches which transactions the opt-in rule does not cover, and it teaches the 2024 rule that Congress nullified in 2025, because describing that rule in the present tense would be wrong. **Go and read it there.** What this lesson adds is the price.

**The conversion, on the same two steps.** An overdraft fee is a finance charge in everything but statutory name: it is the cost of having money you did not have, for the days until the account is brought positive. So the periodic rate is the fee divided by the amount overdrawn, and the multiplier is 365 divided by the number of days before the deposit lands.

**Worked, with figures chosen as an illustration and not as anybody's fee schedule.** A 30 dollar fee on a 20 dollar shortfall repaid in 3 days is a periodic rate of 1.5, multiplied by about 121.7 three-day periods in a year. The product is enormous, and quoting it as a percentage stops being informative. **That is itself the finding.** The annualization tool that lets you rank a card against a payday loan breaks down here, because the fee is flat and the amount is tiny, and the honest statement is simpler: **the fee is larger than the transaction.**

**Which is the real comparison, and it needs no rate at all.** For a flat fee, the cost as a share of the amount falls as the amount rises. Thirty dollars on a 200 dollar overdraft is 15 percent of it. Thirty dollars on a 5 dollar coffee is six times the coffee. **A flat fee is a regressive price: it costs the most, proportionally, on the smallest transactions**, which is the same structural point MONEY-02 makes about a monthly fee waived above a balance threshold. Both fall hardest on the smallest balances, and neither does so by anybody's malice.

**This is not advice, and here is the second of the three places this course says so plainly.** This lesson does not tell you to opt in or to opt out, does not say whether an overdraft is better or worse than any alternative, and does not know what happens in your household if a payment is declined. Being declined has costs too: a returned payment fee from the party you were paying, a late charge, a service disconnected, a journey not made. **Those are real and this course cannot weigh them for you.** What it can do is make sure the fee is a number you have looked at rather than a number that happened to you.

**Three things to find, and all three are on a document your institution must give you.** MONEY-02 teaches that the fee schedule is a document you can demand. On it: the overdraft or non-sufficient-funds fee, **how many such fees may be charged in a single day**, and whether the institution charges a further sustained-overdraft fee if the balance stays negative. The daily maximum is the one people never look up, and it is the one that turns a single bad morning into a multiple.

:::reveal What does this lesson add to MONEY-02's treatment of overdraft? ||| The price. MONEY-02 teaches the opt-in rule and the rule that was nullified; this lesson runs the course's conversion on the fee.

:::reveal Why does annualizing an overdraft fee stop being informative? ||| Because the fee is flat and the amount is tiny, so the percentage becomes enormous. The honest statement is that the fee is larger than the transaction.

:::reveal Why is a flat fee a regressive price? ||| Because its cost as a share of the amount falls as the amount rises, so it costs the most proportionally on the smallest transactions.

:::reveal What are the three things to find on an institution's fee schedule about overdraft? ||| The fee itself, how many may be charged in a single day, and whether a sustained-overdraft fee applies if the balance stays negative.

## Vocabulary
- **Overdraft service**: the arrangement, defined in 12 CFR 1005.17, under which an institution pays a transaction that overdraws an account and assesses a fee for doing so.
- **Opt-in**: the four-step affirmative consent Regulation E requires before an ATM or one-time debit card overdraft fee may be assessed.
- **Flat fee**: a charge of a fixed amount regardless of the transaction size, which is proportionally most expensive on the smallest transactions.
- **Sustained overdraft fee**: an additional charge some institutions assess when a balance remains negative for a stated number of days.
- **Daily maximum**: the number of overdraft or non-sufficient-funds fees an institution may charge in one day, which is the figure that turns a single incident into a multiple.

## Sources
12 CFR § 1005.17. (n.d.). *Requirements for overdraft services*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/1005.17

15 U.S.C. § 1606. (n.d.). *Determination of annual percentage rate*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/15/1606`,
    },
    {
      slug: "quiz-money-already-coming",
      title: "17 · Knowledge check: money already coming to you",
      section: "Section 4 · Attached to money already coming to you",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What is a tax refund, in the statute's own terms?",
            options: ["The balance of an overpayment, which shall be refunded", "A credit the government grants to households whose income falls below a stated level", "A payment the government makes in exchange for filing a return before the deadline", "An advance against the following year's liability, recovered through the next withholding"],
            correctIndex: 0,
            explanation: "26 U.S.C. 6402(a) lets the Secretary credit an overpayment against tax liability and requires the balance to be refunded.",
            sourceLessonSlug: "a-refund-is-money-already-owed",
          },
          {
            prompt: "Why does the course say a lender advancing against a refund is not taking a credit risk on whether the money exists?",
            options: ["The debtor is the Treasury", "Because the lender takes a security interest in the filer's future wages as well", "Because the preparer guarantees the refund amount before the return is submitted", "Because the advance is capped at a share of the refund small enough to be certain"],
            correctIndex: 0,
            explanation: "The risks it bears are timing and whether the return is correct, not the existence of the obligation.",
            sourceLessonSlug: "a-refund-is-money-already-owed",
          },
          {
            prompt: "What date does 26 U.S.C. 6402(m) fix?",
            options: ["The 15th day of the second month after the taxable year", "The 15th day of April following the close of the taxable year in question", "The 31st day after the return is accepted by the Internal Revenue Service", "The first business day of the third month following the close of the year"],
            correctIndex: 0,
            explanation: "No credit or refund of the overpayment may be made before that date for the returns the subsection names.",
            sourceLessonSlug: "a-refund-is-money-already-owed",
          },
          {
            prompt: "Which credits does 26 U.S.C. 6402(m) name?",
            options: ["The section 24(d) child credit and the section 32 earned income credit", "Every refundable credit available to an individual filer under the Internal Revenue Code", "The education credits and the credit for household and dependent care expenses paid", "The credit for taxes withheld from wages and the credit for estimated tax payments made"],
            correctIndex: 0,
            explanation: "Both are refundable credits aimed at working households with lower incomes, which is why the hold falls where it does.",
            sourceLessonSlug: "a-refund-is-money-already-owed",
          },
          {
            prompt: "How does the course describe the statutory hold?",
            options: ["An anti-fraud measure with a market effect", "A penalty imposed on filers who claim credits they were not entitled to receive", "An administrative delay caused by the volume of returns filed in the first weeks", "A requirement imposed by the states rather than by the Internal Revenue Code"],
            correctIndex: 0,
            explanation: "It is not treated as a scandal, but its effect is a defined window in a defined population in which a certain sum has not yet arrived.",
            sourceLessonSlug: "a-refund-is-money-already-owed",
          },
          {
            prompt: "Applying the Financing Without Access procedure to a refund advance, what closed the door?",
            options: ["The calendar", "A refusal of credit by a bank that had reviewed the filer's consumer report", "The absence of any deposit account into which the refund could be paid directly", "A state statute forbidding the lender from advancing against a federal payment"],
            correctIndex: 0,
            explanation: "The pool that replaced it is a lender advancing against a receivable it can verify, and its risk is small.",
            sourceLessonSlug: "a-refund-is-money-already-owed",
          },
          {
            prompt: "What does the course say the refund product actually sells?",
            options: ["The same money, sooner", "Access to money the filer would otherwise never receive at all in that year", "Protection against the risk that the return contains an error and is rejected", "A guarantee that the refund will be paid in full regardless of any offsetting liability"],
            correctIndex: 0,
            explanation: "It is not access to money you do not have; it is access to money you do have, earlier.",
            sourceLessonSlug: "a-refund-is-money-already-owed",
          },
          {
            prompt: "Which of the two tax-season products is credit?",
            options: ["The loan against the refund", "The refund transfer, because a temporary bank account is opened in the filer's name", "Both, because in each case the preparation fee is paid out of the eventual refund", "Neither, because in both cases the money comes from the filer's own overpayment"],
            correctIndex: 0,
            explanation: "It has an amount, a term and a charge, so Regulation Z reaches it and an annual percentage rate must be disclosed.",
            sourceLessonSlug: "the-refund-loan-and-the-transfer",
          },
          {
            prompt: "What happens under a refund transfer?",
            options: ["Fees are deducted from the refund in a temporary account", "The preparer advances the expected refund and recovers it when the refund lands", "The refund is redirected to a prepaid card issued by the preparer's partner bank", "The filer's liability for the preparation fee is transferred to the partner bank"],
            correctIndex: 0,
            explanation: "No money is advanced, so nothing has been lent and there is no principal on which a rate could be computed.",
            sourceLessonSlug: "the-refund-loan-and-the-transfer",
          },
          {
            prompt: "What is the honest description of what a refund transfer sells?",
            options: ["A fee for deferring another fee", "Insurance against the risk that the refund is smaller than the filer expected", "Faster access to the refund than the Internal Revenue Service would otherwise give", "A line of credit secured by the filer's expected refund for the following tax year"],
            correctIndex: 0,
            explanation: "It buys the ability to pay the preparation fee out of the refund rather than out of pocket at filing.",
            sourceLessonSlug: "the-refund-loan-and-the-transfer",
          },
          {
            prompt: "What is the only comparison a refund transfer raises?",
            options: ["The transfer's cost against paying preparation directly", "The annual percentage rate on the transfer against the rate on a refund advance", "The refund amount against the total the filer paid in withholding during the year", "The transfer fee against the fee the institution charges for an ordinary overdraft"],
            correctIndex: 0,
            explanation: "It is a subtraction rather than a rate, because there is no credit involved.",
            sourceLessonSlug: "the-refund-loan-and-the-transfer",
          },
          {
            prompt: "What does the IRS Free File program say about the sale of refund anticipation loans?",
            options: ["Selling them within the program is prohibited", "They may be offered provided the annual percentage rate is disclosed in advance", "They may be offered only to filers whose adjusted gross income exceeds the threshold", "They must be offered by every participating partner as an alternative to waiting"],
            correctIndex: 0,
            explanation: "The page lists no upselling and no hidden fees, and names refund anticipation loans and audit protection among prohibited bank products.",
            sourceLessonSlug: "the-refund-loan-and-the-transfer",
          },
          {
            prompt: "What does the IRS warn about reaching the Free File program?",
            options: ["Start at IRS.gov, not the partner's own site", "Apply before the fifteenth day of the second month or the option closes", "Use only the fillable forms option, because the guided software carries a charge", "File a paper return first, because the free program only accepts amended returns"],
            correctIndex: 0,
            explanation: "Going directly to a partner's commercial website does not get the filer the free program.",
            sourceLessonSlug: "the-refund-loan-and-the-transfer",
          },
          {
            prompt: "Which IRS Free File option carries no income limit at all?",
            options: ["Free File Fillable Forms", "Guided tax software, which is available to every filer regardless of income", "The Volunteer Income Tax Assistance programme run by IRS-certified volunteers", "Tax Counseling for the Elderly, which is open to filers of any age or income"],
            correctIndex: 0,
            explanation: "The guided software carries an adjusted gross income threshold, read as 89,000 dollars on 28 August 2026.",
            sourceLessonSlug: "the-refund-loan-and-the-transfer",
          },
          {
            prompt: "Which population does the TCE programme particularly serve?",
            options: ["People aged 60 and over", "Active-duty servicemembers and their dependents in every state and territory", "Filers claiming the earned income credit whose refunds are held by statute", "Filers whose adjusted gross income falls below the Free File guided threshold"],
            correctIndex: 0,
            explanation: "It specialises in pension and retirement questions, while VITA generally serves filers making 69,000 dollars or less.",
            sourceLessonSlug: "the-refund-loan-and-the-transfer",
          },
          {
            prompt: "What quality control does the IRS require at a VITA or TCE site?",
            options: ["A quality review of every return before filing", "A second signature from a licensed accountant on every return that claims a credit", "An audit of a random sample of returns after the close of each filing season", "A written acknowledgement from the filer that the return was prepared without charge"],
            correctIndex: 0,
            explanation: "Volunteers must also pass tax law training that meets or exceeds IRS standards.",
            sourceLessonSlug: "the-refund-loan-and-the-transfer",
          },
          {
            prompt: "A 60 dollar charge on a 600 dollar advance repaid in 21 days annualizes to roughly what?",
            options: ["About 174 percent", "About 10 percent, because the charge is ten percent of the amount that was advanced", "About 60 percent, because the charge is sixty dollars over the life of the advance", "About 21 percent, because the advance is outstanding for twenty-one days in total"],
            correctIndex: 0,
            explanation: "0.10 multiplied by about 17.4 twenty-one-day periods in a year, using illustrative figures rather than any market offer.",
            sourceLessonSlug: "the-refund-loan-and-the-transfer",
          },
          {
            prompt: "What makes that figure large, according to the lesson?",
            options: ["The shortness of the term", "The size of the charge, which is high relative to what a bank would charge", "The certainty of repayment, which lets the lender price the advance aggressively", "The statutory hold, which the lender must wait out before it can be repaid"],
            correctIndex: 0,
            explanation: "Ten percent of the advance is not an outrageous number by itself, and the term is short because the money was always arriving soon.",
            sourceLessonSlug: "the-refund-loan-and-the-transfer",
          },
          {
            prompt: "Which three questions does the lesson say settle both tax-season products?",
            options: ["The charge, the days gained, the free-channel cost", "The rate, the term, and whether the preparer holds a licence in the filer's state", "The refund size, the withholding total, and the credits claimed on the return", "The preparer's fee, the bank's fee, and the amount of the statutory refund hold"],
            correctIndex: 0,
            explanation: "A product that buys three weeks is worth what three weeks is worth to that household.",
            sourceLessonSlug: "the-refund-loan-and-the-transfer",
          },
          {
            prompt: "How does this course describe an overdraft, in its own framing?",
            options: ["A very small loan for a very short time at a fee", "A penalty the institution imposes for breaching the terms of the deposit contract", "A line of credit governed by Regulation Z and disclosed with an annual percentage rate", "A service the institution is required to provide to every consumer deposit account"],
            correctIndex: 0,
            explanation: "It is made without an application, which is why the price is the only thing left to examine.",
            sourceLessonSlug: "overdraft-priced-as-credit",
          },
          {
            prompt: "Which course owns the treatment of 12 CFR 1005.17 and the nullified 2024 overdraft rule?",
            options: ["MONEY-02", "MONEY-01, which teaches the consumer credit decision from the statutes upward", "This course, in the section on products attached to money already coming to you", "Financing Without Access, which teaches the substitute institutions built after refusal"],
            correctIndex: 0,
            explanation: "This lesson deliberately adds only the price, and sends the reader to the sibling course for the rule.",
            sourceLessonSlug: "overdraft-priced-as-credit",
          },
          {
            prompt: "What are the four steps 12 CFR 1005.17(b)(1) requires before an ATM or one-time debit card overdraft fee may be assessed?",
            options: ["Segregated notice, opportunity, affirmative consent, confirmation", "Application, credit check, written agreement, and disclosure of the annual rate", "Notice, waiting period, verbal consent, and a copy of the institution's fee schedule", "Disclosure, a three-day cancellation window, consent, and annual re-authorisation"],
            correctIndex: 0,
            explanation: "The consent must be affirmative, and the confirmation must be in writing or, if the consumer agrees, electronically.",
            sourceLessonSlug: "overdraft-priced-as-credit",
          },
          {
            prompt: "Why does annualizing a small overdraft stop being informative?",
            options: ["The fee is flat and the amount is tiny", "Because the term cannot be known until the deposit that clears it arrives", "Because Regulation E forbids expressing an overdraft fee as a percentage rate", "Because the institution may charge more than one fee on the same calendar day"],
            correctIndex: 0,
            explanation: "The percentage becomes enormous, and the honest statement is simply that the fee is larger than the transaction.",
            sourceLessonSlug: "overdraft-priced-as-credit",
          },
          {
            prompt: "What does the course say a flat fee does as the transaction size falls?",
            options: ["It costs proportionally more", "It is waived, because most institutions do not charge on very small amounts", "It is capped at the amount of the transaction that caused the overdraft", "It costs proportionally less, because the absolute amount stays the same"],
            correctIndex: 0,
            explanation: "Thirty dollars is fifteen percent of a two hundred dollar overdraft and six times a five dollar coffee.",
            sourceLessonSlug: "overdraft-priced-as-credit",
          },
          {
            prompt: "Which structural point does the overdraft lesson share with MONEY-02's treatment of monthly account fees?",
            options: ["Both fall hardest on the smallest balances", "Both are prohibited unless the consumer has affirmatively opted in beforehand", "Both are capped by the same federal regulation at a fixed dollar amount", "Both were nullified by Congress under the Congressional Review Act in 2025"],
            correctIndex: 0,
            explanation: "A monthly fee waived above a balance threshold is the same account sold at two prices, sorted by who has the least.",
            sourceLessonSlug: "overdraft-priced-as-credit",
          },
          {
            prompt: "Does this lesson tell a reader whether to opt in to overdraft coverage?",
            options: ["No, and it says so plainly", "Yes, it recommends opting out because the fee exceeds the transaction size", "Yes, it recommends opting in where the household has an unpredictable balance", "It defers the question to the institution, which must decide on the consumer's behalf"],
            correctIndex: 0,
            explanation: "This is the second of the three places the course states in prose that it gives no financial advice.",
            sourceLessonSlug: "overdraft-priced-as-credit",
          },
          {
            prompt: "What costs does the lesson say a declined payment can carry?",
            options: ["A returned payment fee, a late charge, a service cut off", "A permanent entry on the consumer's file at a nationwide reporting agency", "A criminal referral, where the payment was made by cheque without sufficient funds", "An automatic closure of the deposit account by the institution that declined it"],
            correctIndex: 0,
            explanation: "Those are real and the course cannot weigh them for any particular household, which is why it declines to.",
            sourceLessonSlug: "overdraft-priced-as-credit",
          },
          {
            prompt: "Which figure does the lesson say people never look up?",
            options: ["The daily maximum number of fees", "The interest rate the institution pays on the balance of the same account", "The number of days after which a sustained overdraft fee begins to accrue", "The threshold below which the institution will not pay an overdrawing transaction"],
            correctIndex: 0,
            explanation: "It is the figure that turns a single bad morning into a multiple.",
            sourceLessonSlug: "overdraft-priced-as-credit",
          },
          {
            prompt: "What is a sustained overdraft fee?",
            options: ["A further charge while the balance stays negative", "A fee charged each time a transaction is declined for insufficient funds", "A fee charged for transferring funds from a linked account to cover a shortfall", "A fee the institution charges to restore overdraft coverage after it was removed"],
            correctIndex: 0,
            explanation: "It is one of the three things the lesson tells a reader to find on the fee schedule.",
            sourceLessonSlug: "overdraft-priced-as-credit",
          },
          {
            prompt: "Which document does MONEY-02 teach a consumer can demand, and which this lesson sends them back to?",
            options: ["The fee schedule", "The deposit contract's arbitration clause and its opt-out procedure", "The consumer report the institution obtained before opening the account", "The record of every overdraft charged on the account in the previous year"],
            correctIndex: 0,
            explanation: "The overdraft fee, the daily maximum and any sustained-overdraft charge are all on it.",
            sourceLessonSlug: "overdraft-priced-as-credit",
          },
          {
            prompt: "Which transactions does the Regulation E opt-in rule cover?",
            options: ["ATM and one-time debit card transactions", "Every transaction that overdraws the account, including cheques and direct debits", "Only transactions initiated at a point of sale in a physical retail location", "Only transactions initiated through a nonbank payment application or platform"],
            correctIndex: 0,
            explanation: "MONEY-02 teaches which transactions fall outside the rule, and this lesson does not repeat that work.",
            sourceLessonSlug: "overdraft-priced-as-credit",
          },
          {
            prompt: "What does 26 U.S.C. 6402(a) permit before any balance is refunded?",
            options: ["Crediting the overpayment against tax liability", "Deducting the preparer's fee where a refund transfer has been arranged", "Withholding the refund pending verification of the credits claimed on the return", "Applying the overpayment to the filer's estimated liability for the following year"],
            correctIndex: 0,
            explanation: "The Secretary may credit an overpayment against any liability in respect of an internal revenue tax and shall refund the balance.",
            sourceLessonSlug: "a-refund-is-money-already-owed",
          },
          {
            prompt: "What is a refundable credit?",
            options: ["One that can produce a payment rather than only reducing tax owed", "One a filer may claim in a later year if it was not used in the year it arose", "One the Internal Revenue Service must refund within thirty days of the return", "One that is refunded only where the filer has overpaid through withholding"],
            correctIndex: 0,
            explanation: "The section 24(d) child credit and the section 32 earned income credit are the two named in the hold.",
            sourceLessonSlug: "a-refund-is-money-already-owed",
          },
          {
            prompt: "Whose refunds does 26 U.S.C. 6402(m) hold?",
            options: ["Those claiming the two named credits", "Every filer who submits a return before the fifteenth day of February", "Filers whose returns are selected for examination by the Internal Revenue Service", "Filers who have arranged for the refund to be paid into a temporary bank account"],
            correctIndex: 0,
            explanation: "It applies to those returns and to no others, which is what makes the resulting window population-specific.",
            sourceLessonSlug: "a-refund-is-money-already-owed",
          },
          {
            prompt: "What does the course say about why a household takes an advance on money arriving in three weeks?",
            options: ["Something is due this week", "It has usually not read the disclosure the preparer was required to give it", "It expects the refund to be larger than the amount the return actually claims", "It has been refused a deposit account and has nowhere else to receive the money"],
            correctIndex: 0,
            explanation: "It is almost never ignorance of the price, and timing is the most ordinary reason there is.",
            sourceLessonSlug: "a-refund-is-money-already-owed",
          },
          {
            prompt: "Which figure did the course read on the IRS Free File page on 28 August 2026 as the guided software threshold?",
            options: ["89,000 dollars of adjusted gross income", "69,000 dollars of adjusted gross income, which is the VITA figure on a separate page", "60 years of age, which is the population the TCE programme particularly serves", "No threshold at all, because the guided software is open to filers of any income"],
            correctIndex: 0,
            explanation: "The course dates the figure in the lesson because a threshold like this moves and an undated number is a claim someone will keep repeating.",
            sourceLessonSlug: "the-refund-loan-and-the-transfer",
          },
          {
            prompt: "Why does the course date the Free File and VITA figures in the lesson itself?",
            options: ["Because thresholds move and an undated figure goes stale silently", "Because the Internal Revenue Service requires published figures to carry a date", "Because the citation tooling cannot extract a source without a date beside it", "Because a dated figure can be relied on in a dispute with a paid preparer"],
            correctIndex: 0,
            explanation: "It is the same habit the course committed to in Section 1 lesson 1 and applies to every external figure.",
            sourceLessonSlug: "the-refund-loan-and-the-transfer",
          },
          {
            prompt: "Which of these products would carry a disclosed annual percentage rate?",
            options: ["A loan repaid out of the filer's refund", "A refund transfer, because the temporary account is opened at a partner bank", "Free File Fillable Forms, because the Internal Revenue Service supplies the software", "A VITA preparation, because IRS-certified volunteers complete the return without charge"],
            correctIndex: 0,
            explanation: "It has an amount, a term and a charge, so Regulation Z reaches it.",
            sourceLessonSlug: "the-refund-loan-and-the-transfer",
          },
          {
            prompt: "What does the lesson say the overdraft conversion demonstrates about the annualization tool?",
            options: ["It breaks down on a flat fee over a tiny amount", "It works better on an overdraft than on any other product in the course", "It cannot be applied at all, because an overdraft is not credit under federal law", "It produces a figure the institution is required to disclose on the periodic statement"],
            correctIndex: 0,
            explanation: "That breakdown is itself the finding, and the plainer statement replaces it.",
            sourceLessonSlug: "overdraft-priced-as-credit",
          },
          {
            prompt: "In the illustrative overdraft example, what was the relationship between the fee and the shortfall?",
            options: ["The fee was larger than the shortfall", "The fee was capped at the amount of the transaction that overdrew the account", "The fee was a fixed percentage of the shortfall regardless of how small it was", "The fee was waived because the balance was restored within three business days"],
            correctIndex: 0,
            explanation: "A 30 dollar fee on a 20 dollar shortfall is the shape, and the figures are chosen as an illustration rather than as any fee schedule.",
            sourceLessonSlug: "overdraft-priced-as-credit",
          },
          {
            prompt: "What does the course mean by calling a flat fee regressive?",
            options: ["Its proportional cost is highest on the smallest amounts", "It rises as a percentage of the balance the account holder maintains over time", "It is charged only to account holders whose balances fall below a stated threshold", "It is reduced for account holders who maintain a direct deposit of their wages"],
            correctIndex: 0,
            explanation: "The absolute amount is constant, so dividing it by a smaller transaction produces a larger share.",
            sourceLessonSlug: "overdraft-priced-as-credit",
          },
          {
            prompt: "Which sibling course does this section direct a reader to for the substance of the overdraft rule?",
            options: ["Banking, and Who Has No Bank", "Credit, and the Decisions Made About You, which teaches the consumer report", "The County Committee, which teaches a federal credit gate applied by local committees", "Financing Without Access, which teaches the substitute institutions built after refusal"],
            correctIndex: 0,
            explanation: "MONEY-02 teaches the opt-in, the transactions outside it, and the rule Congress nullified in 2025.",
            sourceLessonSlug: "overdraft-priced-as-credit",
          },
          {
            prompt: "What is the periodic rate in the refund-advance conversion?",
            options: ["The charge divided by the amount advanced", "The annual percentage rate divided by the number of days until the refund lands", "The refund amount divided by the number of days the statutory hold remains in force", "The preparation fee divided by the total the filer paid in withholding during the year"],
            correctIndex: 0,
            explanation: "The multiplier is then 365 divided by the number of days the advance is outstanding.",
            sourceLessonSlug: "the-refund-loan-and-the-transfer",
          },
          {
            prompt: "What does the course say about whether the illustrative refund-advance figures describe the market?",
            options: ["They do not; they show the shape", "They are the median charge across preparers in the most recent filing season", "They are the maximum a preparer may charge under the Internal Revenue Code", "They are the figures the Internal Revenue Service publishes for comparison purposes"],
            correctIndex: 0,
            explanation: "The course prints no market rate, and the arithmetic is what transfers rather than the numbers.",
            sourceLessonSlug: "the-refund-loan-and-the-transfer",
          },
          {
            prompt: "What does the phrase shall refund establish about a tax refund?",
            options: ["It is an obligation, and the filer is the creditor", "It is a discretionary payment the Secretary may make where the return is correct", "It is a credit that must first be applied against the following year's liability", "It is contingent on the filer having claimed at least one refundable credit"],
            correctIndex: 0,
            explanation: "That single fact reframes every product in the section, because the money already belongs to the filer.",
            sourceLessonSlug: "a-refund-is-money-already-owed",
          },
          {
            prompt: "Which of these is a named, free, non-commercial route the lesson points to?",
            options: ["The IRS VITA locator tool", "A commercial preparer offering a no-fee refund transfer to first-time filers", "A partner site reached directly rather than through the IRS Free File landing page", "A refund advance offered at zero cost in exchange for a paid preparation package"],
            correctIndex: 0,
            explanation: "The IRS publishes a locator tool and a telephone number for finding a VITA or TCE site.",
            sourceLessonSlug: "the-refund-loan-and-the-transfer",
          },
          {
            prompt: "How does the course treat the question of whether buying three weeks is worth it?",
            options: ["As a question about the household, not the product", "As settled by the arithmetic, which shows the advance is never worth the charge", "As a matter for the state regulator, which sets the maximum a preparer may charge", "As unanswerable, because the annual percentage rate on a short advance is meaningless"],
            correctIndex: 0,
            explanation: "The course prices the product and refuses to decide for the reader what three weeks is worth to them.",
            sourceLessonSlug: "the-refund-loan-and-the-transfer",
          },
          {
            prompt: "What is the difference between an overdraft fee and a finance charge, on this lesson's account?",
            options: ["Mostly the statutory name", "The overdraft fee is refundable while a finance charge is earned at origination", "The overdraft fee is capped by federal regulation while a finance charge is not", "The overdraft fee compounds daily while a finance charge is assessed only once"],
            correctIndex: 0,
            explanation: "It is the cost of having money you did not have, for the days until the account is brought positive.",
            sourceLessonSlug: "overdraft-priced-as-credit",
          },
          {
            prompt: "Which two figures does the lesson use to show the regressive shape of a flat fee?",
            options: ["A 200 dollar overdraft and a 5 dollar coffee", "A 30 dollar fee and a 20 dollar shortfall repaid in three days", "An 89,000 dollar threshold and a 69,000 dollar threshold on two IRS pages", "A 500 dollar loan and a 1,925 dollar total taken from a payday borrower"],
            correctIndex: 0,
            explanation: "Thirty dollars is fifteen percent of the first and six times the second.",
            sourceLessonSlug: "overdraft-priced-as-credit",
          },
          {
            prompt: "What is the effect of the statutory hold on lenders in this market?",
            options: ["It makes the timing of the receivable predictable", "It prevents a lender from advancing against a refund claiming those credits", "It requires the lender to register with the Internal Revenue Service before lending", "It caps the charge a lender may impose on an advance against a held refund"],
            correctIndex: 0,
            explanation: "A defined window in a defined population is exactly the condition a product can be built for.",
            sourceLessonSlug: "a-refund-is-money-already-owed",
          },
          {
            prompt: "Which of these correctly names the two tax-season products the lesson distinguishes?",
            options: ["A refund advance and a refund transfer", "A refund advance and an overdraft line of credit on the receiving account", "A refund transfer and a prepaid card issued to receive the filer's refund", "An instalment loan and a deferred presentment transaction against the refund"],
            correctIndex: 0,
            explanation: "The first is credit and the second is not, and they are easily confused because both are sold at the same counter.",
            sourceLessonSlug: "the-refund-loan-and-the-transfer",
          },
          {
            prompt: "What does the IRS Free File page say about hidden fees and upselling?",
            options: ["Neither is permitted within the program", "Both are permitted provided they are disclosed before the return is transmitted", "Both are matters for the partner company rather than for the Internal Revenue Service", "Neither is addressed, because the program covers only the preparation of the return"],
            correctIndex: 0,
            explanation: "The same list of benefits names refund anticipation loans and audit protection as prohibited bank products.",
            sourceLessonSlug: "the-refund-loan-and-the-transfer",
          },
          {
            prompt: "Which of these best describes the credit risk in a refund advance?",
            options: ["Low, because the payer is the Treasury", "High, because the borrower has no assets and no verified income to pledge", "Unknown, because the size of the refund cannot be estimated before filing", "Shared, because the preparer guarantees repayment if the refund is reduced"],
            correctIndex: 0,
            explanation: "The lesson makes the point that a low-risk advance sold into a statutory window should be cheap, and whether any offer is cheap is arithmetic.",
            sourceLessonSlug: "a-refund-is-money-already-owed",
          },
          {
            prompt: "What does the course say a filer is, relative to the government, when a refund is owed?",
            options: ["The creditor", "A claimant, whose entitlement depends on the Secretary's discretion each year", "A borrower, because the withholding operated as an advance against the liability", "A beneficiary of a credit programme rather than a party to an obligation"],
            correctIndex: 0,
            explanation: "The statute says the balance shall be refunded, which makes it a debt.",
            sourceLessonSlug: "a-refund-is-money-already-owed",
          },
          {
            prompt: "Which two IRS programmes does the lesson name as free preparation by certified volunteers?",
            options: ["VITA and TCE", "Free File and Free File Fillable Forms, which are software rather than volunteers", "The Taxpayer Advocate Service and the Low Income Taxpayer Clinic programme", "The Volunteer Income Tax Assistance grant programme and the Free File Alliance"],
            correctIndex: 0,
            explanation: "Both require volunteers to pass tax law training meeting or exceeding IRS standards, with a quality review of every return.",
            sourceLessonSlug: "the-refund-loan-and-the-transfer",
          },
          {
            prompt: "Why does the lesson say the fee schedule matters more than the headline overdraft fee?",
            options: ["Because the daily maximum and sustained fee multiply it", "Because the headline fee is not required to be disclosed before the account is opened", "Because the schedule shows the annual percentage rate the institution must disclose", "Because the schedule states whether the institution has obtained the consumer's opt-in"],
            correctIndex: 0,
            explanation: "One fee is a price; several in a day plus a sustained charge is a different product.",
            sourceLessonSlug: "overdraft-priced-as-credit",
          },
          {
            prompt: "How does this course describe its role when a reader faces the overdraft decision?",
            options: ["To make the fee a number they looked at", "To recommend the option that costs the household the least over a full year", "To decide on the reader's behalf, because the arithmetic settles the question", "To refer the reader to their financial institution for a personalised recommendation"],
            correctIndex: 0,
            explanation: "Rather than a number that happened to them, and without weighing costs the course cannot see.",
            sourceLessonSlug: "overdraft-priced-as-credit",
          },
          {
            prompt: "Which of these is outside the Regulation E overdraft opt-in rule, as MONEY-02 teaches?",
            options: ["An overdraft paid through a Regulation Z line of credit", "An overdraft caused by a one-time debit card purchase at a point of sale", "An overdraft caused by a cash withdrawal made at an automated teller machine", "An overdraft on an account whose holder has confirmed consent in writing"],
            correctIndex: 0,
            explanation: "Transfers from another account held by the consumer and certain exempt credit features are also outside it.",
            sourceLessonSlug: "overdraft-priced-as-credit",
          },
          {
            prompt: "What does the lesson identify as the second of the three places this course states it gives no advice?",
            options: ["The overdraft lesson", "The opening lesson on the difference between a scam and a product", "The lesson pricing the refund advance and the refund transfer against free routes", "The capstone, in which the reader prices one product and checks one rule"],
            correctIndex: 0,
            explanation: "The first is Section 1 lesson 1 and the third is the capstone, following the surplus-funds-basics posture.",
            sourceLessonSlug: "overdraft-priced-as-credit",
          },
          {
            prompt: "What does the course say about the relationship between a refund product's price and its risk?",
            options: ["A low-risk advance in a statutory window should be cheap", "A high-risk advance justifies whatever charge the market will bear for it", "The price is set by the Internal Revenue Service rather than by the lender", "Risk is irrelevant, because the charge is regulated as a preparation fee"],
            correctIndex: 0,
            explanation: "Which is why the price is the only interesting question, and why the next lesson does nothing but price it.",
            sourceLessonSlug: "a-refund-is-money-already-owed",
          },
          {
            prompt: "Which document must a financial institution provide before it may charge an ATM or one-time debit overdraft fee?",
            options: ["A segregated written notice", "A copy of the Regulation E error resolution procedures for the account", "A written estimate of the fees the consumer is likely to incur in a year", "A comparison of the institution's overdraft fee against the market average"],
            correctIndex: 0,
            explanation: "It must be segregated from all other information, and confirmation of the consent must follow in writing.",
            sourceLessonSlug: "overdraft-priced-as-credit",
          },
          {
            prompt: "Why does the course put overdraft in this section rather than beside the payday loan?",
            options: ["It attaches to money already coming in", "Because the fee is capped by the same statute that caps a deferred presentment fee", "Because it is the only product in the course that carries no disclosure requirement", "Because Regulation E rather than Regulation Z governs the small-dollar market"],
            correctIndex: 0,
            explanation: "The section's subject is products priced against a sum the household is already due to receive.",
            sourceLessonSlug: "overdraft-priced-as-credit",
          },
          {
            prompt: "Which of these does the lesson NOT claim about overdraft?",
            options: ["That it is worse than every alternative", "That it is a very small loan made for a very short time at a fee", "That a flat fee costs proportionally most on the smallest transactions", "That the daily maximum is the figure that turns one incident into a multiple"],
            correctIndex: 0,
            explanation: "Being declined carries costs too, and the course states that it cannot weigh them for any particular household.",
            sourceLessonSlug: "overdraft-priced-as-credit",
          },
          {
            prompt: "What does the section title attached to money already coming to you describe?",
            options: ["Products priced against a sum the household is already due", "Products sold only to households that have been refused a deposit account", "Products whose charges are collected after the money has already been spent", "Products the federal government requires to be offered alongside tax preparation"],
            correctIndex: 0,
            explanation: "A tax refund and an incoming deposit are both sums already owed, which is what the products in this section attach to.",
            sourceLessonSlug: "a-refund-is-money-already-owed",
          },
          {
            prompt: "Which fact does the course use to show that the refund product responds to a statute rather than to chance?",
            options: ["The hold applies to two named credits and to nobody else", "The Internal Revenue Service prohibits the product within its own free channel", "The advance is repaid from the refund rather than from the borrower's wages", "The preparer opens a temporary bank account to receive the refund on the filer's behalf"],
            correctIndex: 0,
            explanation: "A product that fills a defined gap for a defined population is a response to the rule that created the gap.",
            sourceLessonSlug: "a-refund-is-money-already-owed",
          },
          {
            prompt: "In the refund transfer, whose money pays the preparation fee?",
            options: ["The filer's, out of the refund", "The partner bank's, which advances it and recovers it from the preparer", "The preparer's, which absorbs it in exchange for a share of the refund", "The Internal Revenue Service's, which remits it directly to the preparer"],
            correctIndex: 0,
            explanation: "Nothing is advanced; the fee is simply deducted from the refund when it lands in the temporary account.",
            sourceLessonSlug: "the-refund-loan-and-the-transfer",
          },
          {
            prompt: "What is the practical test the lesson gives for whether a tax-season product is credit?",
            options: ["Was money advanced before the refund arrived", "Was a temporary bank account opened to receive the refund on the filer's behalf", "Was a fee charged separately from the fee for preparing the return itself", "Was the product sold by a preparer rather than by a chartered depository institution"],
            correctIndex: 0,
            explanation: "If nothing was advanced there is no principal, no term and no rate, and the comparison becomes a subtraction.",
            sourceLessonSlug: "the-refund-loan-and-the-transfer",
          },
          {
            prompt: "Which of these figures did the course read on the IRS VITA page on 28 August 2026?",
            options: ["Generally 69,000 dollars or less", "89,000 dollars of adjusted gross income for the guided tax software option", "No income limit, because Free File Fillable Forms carries none at any level", "36 percent, matching the ceiling the Military Lending Act sets for servicemembers"],
            correctIndex: 0,
            explanation: "The page also names TCE as particularly serving people aged 60 and over.",
            sourceLessonSlug: "the-refund-loan-and-the-transfer",
          },
          {
            prompt: "What does the course say about calling the statutory refund hold a scandal?",
            options: ["It declines to; the hold has a stated purpose", "It agrees, because the hold falls on the households least able to wait it out", "It has no view, because the purpose of the provision is not stated in the statute", "It treats the hold as unlawful, because it applies to some filers and not others"],
            correctIndex: 0,
            explanation: "It is an anti-fraud measure, and what is not in dispute is the market effect the window creates.",
            sourceLessonSlug: "a-refund-is-money-already-owed",
          },
          {
            prompt: "What does the course say a refund advance's lender can verify before it lends?",
            options: ["The receivable it is advancing against", "The borrower's employment history and current income from a payroll record", "The borrower's file at each of the three nationwide consumer reporting agencies", "The borrower's prior-year refund, which sets the maximum the advance may reach"],
            correctIndex: 0,
            explanation: "That is what makes the pool that replaced the closed door a low-risk one in this particular market.",
            sourceLessonSlug: "a-refund-is-money-already-owed",
          },
          {
            prompt: "Which of these is the correct reading of the phrase no principal and no credit?",
            options: ["A refund transfer lends nothing, so no rate exists", "A refund advance lends nothing, so no rate needs to be disclosed on it", "An overdraft lends nothing, so Regulation E rather than Regulation Z governs it", "A rent-to-own agreement lends nothing, so the total need not appear on the page"],
            correctIndex: 0,
            explanation: "Its cost is a fee against another fee, which is a subtraction rather than an annual percentage rate.",
            sourceLessonSlug: "the-refund-loan-and-the-transfer",
          },
          {
            prompt: "Which statute supplies the arithmetic this section applies to a refund advance and to an overdraft alike?",
            options: ["15 U.S.C. 1606", "26 U.S.C. 6402, which fixes the date on which a held refund may be paid", "12 CFR 1005.17, which requires an opt-in before an overdraft fee may be assessed", "10 U.S.C. 987, which caps the rate on consumer credit to covered servicemembers"],
            correctIndex: 0,
            explanation: "Its open-end computation is the two-step conversion the whole course runs on a quoted fee.",
            sourceLessonSlug: "the-refund-loan-and-the-transfer",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 5 — Fraud, and the line Regulation E draws
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "unauthorized-has-a-definition",
      title: "18 · Unauthorized is a defined word, and everything depends on it",
      section: "Section 5 · Fraud, and the line Regulation E draws",
      body: `Two people each lose 2,000 dollars from a checking account on the same day. One gets it back within 45 days and the other does not. Nothing about them differs except one fact, and the fact is in a definition.

**This is the most useful thing in this course.** Regulation E, the rule implementing the Electronic Fund Transfer Act, defines the term that the whole recovery machinery hangs on:

> "Unauthorized electronic fund transfer means an electronic fund transfer from a consumer's account initiated by a person other than the consumer without actual authority to initiate the transfer and from which the consumer receives no benefit." (12 CFR § 1005.2, n.d.)

**Take that apart, because every clause does work.**

- **"Initiated by a person other than the consumer."** Somebody else pressed the button. If you pressed it, this clause is not satisfied and the definition is not met.
- **"Without actual authority."** Not apparent authority, not authority the institution reasonably believed existed. Actual.
- **"From which the consumer receives no benefit."** You got nothing out of it.

**Then the three exclusions, which are where most real cases actually land.** The same paragraph says the term does not include a transfer initiated:

> "(1) By a person who was furnished the access device to the consumer's account by the consumer, unless the consumer has notified the financial institution that transfers by that person are no longer authorized; (2) With fraudulent intent by the consumer or any person acting in concert with the consumer; (3) By the financial institution or its employee." (12 CFR § 1005.2, n.d.)

**Exclusion (1) is the one that surprises people, and the official commentary makes its edges sharp in both directions.**

Sharp against the consumer: "If a consumer furnishes an access device and grants authority to make transfers to a person (such as a family member or co-worker) who exceeds the authority given, the consumer is fully liable for the transfers unless the consumer has notified the financial institution that transfers by that person are no longer authorized" (Official Interpretations to 12 CFR pt. 1005, n.d.). **You handed over the card and the number, they went further than you meant, and the loss is yours until you tell the institution.** The notice is the switch, and nothing else flips it.

Sharp in the consumer's favour: "An unauthorized EFT includes a transfer initiated by a person who obtained the access device from the consumer through fraud or robbery" (Official Interpretations to 12 CFR pt. 1005, n.d.). **Being tricked out of the device is not furnishing it.** That distinction, between handing somebody your card and having it taken from you by deception, is doing an enormous amount of work.

**An access device, incidentally, is broader than a card.** The regulation defines it as "a card, code, or other means of access to a consumer's account, or any combination thereof, that may be used by the consumer to initiate electronic fund transfers" (12 CFR § 1005.2, n.d.). A card, a PIN, a login, a one-time passcode: all access devices.

**Hold the definition in your head for the next lesson**, because the next lesson is what the institution owes you once it is met, and the lesson after that is what happens when it is not.

:::reveal Quote the three elements of an unauthorized electronic fund transfer under 12 CFR 1005.2(m). ||| Initiated by a person other than the consumer, without actual authority, and from which the consumer receives no benefit.

:::reveal If you give someone your card and PIN and they take more than you agreed, is that unauthorized? ||| No. The commentary says the consumer is fully liable unless the consumer has notified the institution that transfers by that person are no longer authorized.

:::reveal Is a transfer by someone who obtained your card by fraud or robbery unauthorized? ||| Yes. The official commentary says an unauthorized transfer includes one initiated by a person who obtained the access device through fraud or robbery.

:::reveal What counts as an access device? ||| A card, code, or other means of access to the account, or any combination of them, that the consumer may use to initiate electronic fund transfers.

## Vocabulary
- **Unauthorized electronic fund transfer**: the defined term at 12 CFR 1005.2(m) on which the entire error-resolution and liability machinery depends.
- **Access device**: a card, code, or other means of access to an account, defined broadly enough to cover a PIN, a login and a passcode.
- **Actual authority**: real permission from the consumer, as distinct from an appearance of permission the institution might have relied on.
- **The furnishing exclusion**: 12 CFR 1005.2(m)(1), under which transfers by a person you gave the device to are not unauthorized until you tell the institution otherwise.

## Sources
12 CFR § 1005.2. (n.d.). *Definitions*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/1005.2

*Official interpretations, supplement I to 12 CFR part 1005*. (n.d.). Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/appendix-Supplement_I_to_part_1005`,
    },
    {
      slug: "what-the-institution-owes-you",
      title: "19 · What the institution owes you when the definition is met",
      section: "Section 5 · Fraud, and the line Regulation E draws",
      body: `Once a transfer is unauthorized within the meaning of the regulation, a specific machine starts, it runs on clocks, and the burden of proof is not on you.

**Start with the burden, because it is the part almost nobody knows.** The statute says:

> "In any action which involves a consumer's liability for an unauthorized electronic fund transfer, the burden of proof is upon the financial institution to show that the electronic fund transfer was authorized or...that the conditions of liability set forth in subsection (a) have been met." (15 U.S.C. § 1693g, n.d.)

**The institution has to show it was authorized. You do not have to show it was not.** That is the opposite of what most people assume when they are told to prove they did not make a charge.

**Then the liability caps, which are tiered by how fast you speak.** Under 12 CFR § 1005.6, before any liability attaches at all the institution must first have given the required disclosures about liability for unauthorized transfers, and, where an access device was involved, it must have been an accepted device with a means of identifying the authorized user (12 CFR § 1005.6, n.d.). Then:

- **Timely notice.** Where the consumer notifies within two business days of learning of the loss or theft, liability may not exceed "the lesser of $50 or the amount of unauthorized transfers that occur before notice" (12 CFR § 1005.6, n.d.).
- **Delayed notice.** Beyond that window the exposure rises, to the lesser of 500 dollars or a sum computed from the transfers in the first two business days plus those afterwards.
- **The 60-day rule.** A consumer must report an unauthorized transfer appearing on a periodic statement "within 60 days of the financial institution's transmittal of the statement" (12 CFR § 1005.6, n.d.). Transfers after that window, which reasonable reporting would have stopped, can fall on the consumer entirely.
- **Extenuating circumstances.** Where the delay was due to extenuating circumstances such as extended travel or hospitalisation, the periods are extended to a reasonable time.

**Notice is defined generously.** It is given when the consumer takes steps reasonably necessary to inform the institution, whether or not a particular employee actually receives the information.

**Then the error-resolution clocks at 12 CFR § 1005.11**, which is the part you will actually use.

- **Your deadline.** The institution must comply with the section for any oral or written notice of error received "no later than 60 days after the institution sends the periodic statement" showing the transfer (12 CFR § 1005.11, n.d.). **Oral notice counts**, though the institution may require written confirmation.
- **Ten business days.** The institution "shall investigate promptly and...shall determine whether an error occurred within 10 business days of receiving a notice of error" (12 CFR § 1005.11, n.d.).
- **Forty-five days, with your money back in the meantime.** If it cannot finish in ten business days it may take up to 45 days, provided it "Provisionally credits the consumer's account in the amount of the alleged error (including interest where applicable) within 10 business days of receiving the error notice" (12 CFR § 1005.11, n.d.).

**Read the trade in that last provision.** The institution buys more investigating time by putting the money back while it investigates. **The default is that you are not out of pocket during the investigation**, and knowing that changes the conversation you have on the telephone.

**Two practical consequences worth stating flatly.** Speed matters more than eloquence: the caps step up by the calendar, not by how convincingly you explain yourself. And the periodic statement is the trigger, so an unread statement is a running clock.

:::reveal Who bears the burden of proof that an electronic fund transfer was authorized? ||| The financial institution, under 15 U.S.C. 1693g(b).

:::reveal Under 12 CFR 1005.6, what is the cap where the consumer gives timely notice? ||| The lesser of 50 dollars or the amount of unauthorized transfers occurring before notice.

:::reveal How long does an institution have to determine whether an error occurred, and what must it do to take longer? ||| 10 business days, extendable to 45 days only if it provisionally credits the account for the alleged error within those 10 business days.

:::reveal When does the 60-day reporting clock start? ||| When the institution transmits or sends the periodic statement showing the transfer.

## Vocabulary
- **Burden of proof**: the obligation, placed by 15 U.S.C. 1693g(b) on the institution, to show that a disputed transfer was authorized or that the liability conditions were met.
- **Timely notice**: notification within two business days of learning of a loss or theft, which holds liability to the lesser of 50 dollars or the transfers before notice.
- **Notice of error**: the oral or written report that starts the 12 CFR 1005.11 investigation, due no later than 60 days after the periodic statement is sent.
- **Provisional credit**: the amount the institution must return to the account within 10 business days if it wants up to 45 days to investigate.
- **Extenuating circumstances**: the ground on which the reporting periods are extended to a reasonable time, such as extended travel or hospitalisation.

## Sources
15 U.S.C. § 1693g. (n.d.). *Consumer liability*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/15/1693g

12 CFR § 1005.6. (n.d.). *Liability of consumer for unauthorized transfers*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/1005.6

12 CFR § 1005.11. (n.d.). *Procedures for resolving errors*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/1005.11`,
    },
    {
      slug: "when-you-pressed-send",
      title: "20 · When you pressed send, the machine does not start",
      section: "Section 5 · Fraud, and the line Regulation E draws",
      body: `Somebody telephones. They know your name, the last four digits of your account, and the amount of a real transaction. They say your account is compromised and that you must move your money to a safe account immediately. You do it yourself, from your own device, with your own credentials.

**Read the definition again.** An unauthorized electronic fund transfer is one "initiated by a person other than the consumer without actual authority" (12 CFR § 1005.2, n.d.). **You initiated it.** You had actual authority to move your own money, and you used it. The first clause fails, and when the first clause fails the whole machine from the last lesson does not start. No two-business-day cap. No 45-day provisional credit. No burden on the institution to prove authorization, because authorization is not in dispute.

**That is the line, and it is the single most consequential thing in this course.** Money taken from your account WITHOUT your authorisation sits inside a federal error-resolution procedure with deadlines and a reversed burden of proof. Money you were deceived into sending YOURSELF sits outside it. **Same loss, same victim, same deception. Opposite rule.**

**Be precise about where the boundary actually runs, because the last lesson gave you the tools.**

- **Someone steals your card or your credentials and transfers money.** They initiated it, without actual authority. **Unauthorized.** The machine runs.
- **Someone tricks you into giving them your card, your login, or a one-time passcode, and then they transfer the money.** They initiated it, and the commentary says an unauthorized transfer includes one by a person who obtained the access device through fraud or robbery. **Unauthorized.** The machine runs.
- **You are tricked, and you make the transfer yourself.** You initiated it. **Not within the definition.** The machine does not run.

**So the operative question in a real case is a narrow factual one: whose hands were on the transaction?** Not whether you were deceived. Not whether it was unfair. Who pressed the button, and if it was somebody else, how did they get what they used?

**This is why the payment method a fraudster steers you toward is not a detail. It is the point.** The Federal Trade Commission's own reporting on 2024 data states that "consumers reported losing more money to scams where they paid with bank transfers or cryptocurrency than all other payment methods combined" (Federal Trade Commission, 2025). **Those are the two methods where the consumer performs the transfer and the money is hard to reverse**, which is exactly the combination this lesson describes. A demand that you pay by a specific method is a demand about which rulebook will apply afterwards.

**None of this means nothing can be done.** An institution may reverse a payment as a matter of its own policy or a network's rules even where no statute requires it, and reporting a fraud is worthwhile regardless. But **a courtesy is not a right**, and knowing which one you are asking for changes how you ask and what you do next.

**And this is not a lesson about being careless.** Impersonation works on attentive people because it borrows real details and real urgency, and the pressure to act immediately is the technique rather than an accident. **The defence that actually generalises is procedural, not attitudinal**: no legitimate institution needs a transfer completed inside the call, so ending the call and dialling the number printed on your own card costs nothing and defeats the entire structure.

:::reveal Why does a transfer you were tricked into making yourself fall outside 12 CFR 1005.2(m)? ||| Because the definition requires initiation by a person other than the consumer, and you initiated it with actual authority over your own account.

:::reveal What is the operative factual question in a disputed transfer? ||| Whose hands were on the transaction, and if it was somebody else, how they obtained what they used.

:::reveal What did the FTC report about payment methods in 2024 data? ||| That consumers reported losing more money to scams paid by bank transfer or cryptocurrency than all other payment methods combined.

:::reveal What is the procedural defence this lesson recommends over an attitudinal one? ||| End the call and dial the number printed on your own card, because no legitimate institution needs a transfer completed inside the call.

## Vocabulary
- **Induced authorisation**: a transfer the consumer performs personally after being deceived, which does not meet the definition of an unauthorized electronic fund transfer.
- **Impersonation**: a fraud in which the caller presents as a bank, an agency or a company, borrowing real details and real urgency.
- **Reversibility**: how easily a completed payment can be recalled, which differs sharply between payment methods and drives which method a fraudster will insist on.
- **A courtesy against a right**: the difference between an institution choosing to reimburse and a regulation requiring it, which changes what a consumer can insist upon.

## Sources
12 CFR § 1005.2. (n.d.). *Definitions*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/1005.2

Federal Trade Commission. (2025, March 10). *New FTC data show a big jump in reported losses to fraud to $12.5 billion in 2024*. https://www.ftc.gov/news-events/news/press-releases/2025/03/new-ftc-data-show-big-jump-reported-losses-fraud-125-billion-2024

*Official interpretations, supplement I to 12 CFR part 1005*. (n.d.). Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/appendix-Supplement_I_to_part_1005`,
    },
    {
      slug: "four-instruments-four-rules",
      title: "21 · The same loss under four different rulebooks",
      section: "Section 5 · Fraud, and the line Regulation E draws",
      body: `A thousand dollars leaves. What you can do about it depends almost entirely on which instrument it left through, and the four instruments are governed by four different bodies of law.

**One: a credit card.** The statute caps a cardholder's liability for unauthorized use at 50 dollars, and Regulation Z repeats it: "The liability of a cardholder for unauthorized use of a credit card shall not exceed the lesser of $50 or the amount of money, property, labor, or services obtained" before the issuer is notified (12 CFR § 1026.12, n.d.). Under 15 U.S.C. § 1643(b) the **issuer** bears the burden of showing that use was authorized, or that the conditions of liability were met.

**And the card carries something no other instrument does.** Under 12 CFR § 1026.12(c) a cardholder who has made a good faith attempt to resolve a dispute with the merchant may "assert against the card issuer all claims (other than tort claims) and defenses arising out of the transaction", and may withhold payment on the disputed amount without being reported delinquent (12 CFR § 1026.12, n.d.). **That is a right against your own issuer arising out of a dispute with somebody else**, and it is the strongest consumer protection in this lesson. It carries limits: the credit extended must exceed 50 dollars and the transaction must have occurred in the cardholder's state or within 100 miles of the address, unless the merchant is the issuer or is connected to it in ways the rule specifies.

**Two: a debit card or another electronic fund transfer.** Regulation E, which is the whole of Section 5 so far: the 1005.2(m) definition, the 1005.6 tiers, the 1005.11 clocks, and the burden on the institution at 15 U.S.C. § 1693g(b). **Strong when the definition is met, and nothing when it is not.**

**Three: a wire transfer, which is outside both.** 12 CFR § 1005.3(c)(3) excludes from the definition of an electronic fund transfer "Any transfer of funds through Fedwire or through a similar wire transfer system that is used primarily for transfers between financial institutions or between businesses" (12 CFR § 1005.3, n.d.). **A payment sent this way is not an electronic fund transfer for these purposes at all**, so the machinery of the last two lessons has nothing to attach to. Whether a sent wire can be recalled is a question of the receiving bank's cooperation and the funds still being there.

**Four: cash, and instruments that behave like it.** No consumer error-resolution regime, no chargeback, no defined dispute window. Recovery, if any, comes from finding the recipient.

**Set them side by side and the pattern is not subtle.** The instruments with the strongest rules are the ones where an intermediary holds the money and can be made to answer for it. The instruments with no rules are the ones where the money is simply gone. **A fraudster choosing your payment method is choosing your remedy**, and that is why an insistence on a particular method is itself the signal, more reliable than anything about the story being told.

**Two other exclusions from 12 CFR § 1005.3(c) worth knowing**, because they surprise people: transfers whose primary purpose is the purchase or sale of a security or commodity regulated by the SEC or the CFTC, and certain preauthorized transfers at very small institutions, are also outside the definition (12 CFR § 1005.3, n.d.).

**So the practical instruction is one sentence, and it is not advice about what to buy.** When a loss happens, the first thing to establish is which instrument moved the money, because that determines which rulebook you are in, which deadline is running, and whether anybody is obliged to answer you at all.

:::reveal What is a cardholder's maximum liability for unauthorized use of a credit card, and who must prove authorization? ||| 50 dollars at most, and the issuer bears the burden of showing the use was authorized or that the liability conditions were met.

:::reveal What does 12 CFR 1026.12(c) let a cardholder do? ||| Assert against the card issuer all claims other than tort claims, and defenses, arising out of the transaction, and withhold payment on the disputed amount.

:::reveal Why does Regulation E not reach a wire transfer sent through Fedwire or a similar system? ||| Because 12 CFR 1005.3(c)(3) excludes such transfers from the definition of an electronic fund transfer.

:::reveal What is the first thing to establish when money has been lost? ||| Which instrument moved it, because that decides which rulebook applies and which deadline is already running.

## Vocabulary
- **Chargeback right**: the cardholder's ability under 12 CFR 1026.12(c) to assert claims and defenses against the issuer arising out of a transaction with a merchant.
- **The 50 dollar cap**: the statutory and regulatory ceiling on a cardholder's liability for unauthorized use of a credit card.
- **Wire transfer exclusion**: 12 CFR 1005.3(c)(3), which places Fedwire and similar systems outside the definition of an electronic fund transfer.
- **Intermediary**: the party holding the money in transit, whose presence is what makes a rule enforceable against anybody.

## Sources
15 U.S.C. § 1643. (n.d.). *Liability of holder of credit card*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/15/1643

12 CFR § 1026.12. (n.d.). *Special credit card provisions*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/1026.12

12 CFR § 1005.3. (n.d.). *Coverage*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/1005.3

15 U.S.C. § 1693g. (n.d.). *Consumer liability*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/15/1693g`,
    },
    {
      slug: "quiz-regulation-e-line",
      title: "22 · Knowledge check: the line Regulation E draws",
      section: "Section 5 · Fraud, and the line Regulation E draws",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "Under 12 CFR 1005.2(m), who must have initiated a transfer for it to be unauthorized?",
            options: ["A person other than the consumer", "Any person acting without the written consent of the account holder on file", "A person the institution has not verified against its customer identification records", "A person located outside the state in which the consumer maintains the account"],
            correctIndex: 0,
            explanation: "The definition also requires that the person acted without actual authority and that the consumer received no benefit.",
            sourceLessonSlug: "unauthorized-has-a-definition",
          },
          {
            prompt: "What kind of authority must be absent for the definition to be met?",
            options: ["Actual authority", "Apparent authority, meaning authority the institution could reasonably have believed existed", "Written authority, meaning authority recorded in a signed instrument held by the institution", "Continuing authority, meaning authority granted for a series of transfers rather than for one"],
            correctIndex: 0,
            explanation: "The regulation says without actual authority, which is narrower than an appearance of permission.",
            sourceLessonSlug: "unauthorized-has-a-definition",
          },
          {
            prompt: "What is the third element of the definition, alongside initiation by another and absence of actual authority?",
            options: ["The consumer receives no benefit", "The transfer exceeds a dollar threshold the institution has set for the account", "The transfer is reported to the institution within two business days of occurring", "The transfer is made to a payee the consumer has never previously paid"],
            correctIndex: 0,
            explanation: "All three elements must be present before any of the recovery machinery attaches.",
            sourceLessonSlug: "unauthorized-has-a-definition",
          },
          {
            prompt: "Which of these is one of the three exclusions in 12 CFR 1005.2(m)?",
            options: ["A transfer by the financial institution or its employee", "A transfer made outside the United States by a person holding the consumer's card", "A transfer for less than fifty dollars, which the regulation treats as de minimis", "A transfer the consumer discovers more than sixty days after the periodic statement"],
            correctIndex: 0,
            explanation: "The other two are transfers by a person the consumer furnished the access device to, and transfers with the consumer's own fraudulent intent.",
            sourceLessonSlug: "unauthorized-has-a-definition",
          },
          {
            prompt: "What ends the furnishing exclusion at 12 CFR 1005.2(m)(1)?",
            options: ["Notifying the institution that the person's transfers are no longer authorized", "Reporting the person to law enforcement and obtaining a written police report", "Closing the account and opening a replacement account at the same institution", "Recovering the physical card or changing the password on the online account"],
            correctIndex: 0,
            explanation: "The commentary is explicit that the consumer is fully liable until the institution is notified, and nothing else flips the switch.",
            sourceLessonSlug: "unauthorized-has-a-definition",
          },
          {
            prompt: "You lend your card and PIN to a relative for one purchase and they make five. What does the commentary say?",
            options: ["You are fully liable unless you notified the institution", "The transfers beyond the one you agreed to are unauthorized and must be refunded", "Liability is split between you and the institution according to the amounts involved", "The institution must investigate under the error resolution procedures within ten days"],
            correctIndex: 0,
            explanation: "The commentary addresses exactly this case: a person who exceeds the authority given, such as a family member or co-worker.",
            sourceLessonSlug: "unauthorized-has-a-definition",
          },
          {
            prompt: "Someone obtains your card by deceiving you and then makes transfers. Is that unauthorized?",
            options: ["Yes, the commentary says so expressly", "No, because you handed the device over, which triggers the furnishing exclusion", "Only if the transfers occurred within two business days of you handing it over", "Only if you had not previously permitted anybody else to use the same device"],
            correctIndex: 0,
            explanation: "An unauthorized transfer includes one initiated by a person who obtained the access device from the consumer through fraud or robbery.",
            sourceLessonSlug: "unauthorized-has-a-definition",
          },
          {
            prompt: "How does Regulation E define an access device?",
            options: ["A card, code, or other means of account access", "A physical card issued by the institution and activated by the consumer on receipt", "Any credential the institution has recorded in its customer identification file", "A device capable of connecting to the institution's own network from a remote location"],
            correctIndex: 0,
            explanation: "That covers a card, a PIN, a login and a one-time passcode, or any combination of them.",
            sourceLessonSlug: "unauthorized-has-a-definition",
          },
          {
            prompt: "Why does the course call the definition the most useful thing it teaches?",
            options: ["Everything that follows depends on whether it is met", "Because it is the only provision of Regulation E that a consumer may enforce directly", "Because it sets the dollar cap on what a consumer can lose in a single incident", "Because it determines which federal agency will investigate a reported fraud"],
            correctIndex: 0,
            explanation: "The caps, the clocks and the reversed burden of proof all attach only where the definition is satisfied.",
            sourceLessonSlug: "unauthorized-has-a-definition",
          },
          {
            prompt: "Under 15 U.S.C. 1693g(b), who must show that a disputed electronic fund transfer was authorized?",
            options: ["The financial institution", "The consumer, who must produce evidence that the transfer was not made by them", "The payee, who must produce the authorisation on which the transfer was accepted", "Neither party, because the regulation resolves the question by reference to the clocks"],
            correctIndex: 0,
            explanation: "The institution must show either that the transfer was authorized or that the conditions of liability have been met.",
            sourceLessonSlug: "what-the-institution-owes-you",
          },
          {
            prompt: "Why does the course single out the burden of proof as the part almost nobody knows?",
            options: ["Most people assume they must prove they did not make the charge", "Because the statute places it on the consumer, contrary to what institutions say", "Because it changes depending on whether the transfer was made by card or by transfer", "Because it applies only where the consumer notified within two business days"],
            correctIndex: 0,
            explanation: "The statutory allocation is the opposite of the common assumption.",
            sourceLessonSlug: "what-the-institution-owes-you",
          },
          {
            prompt: "What must the institution have done before any consumer liability attaches under 12 CFR 1005.6?",
            options: ["Given the required disclosures about liability", "Obtained a written acknowledgement that the consumer had read the account agreement", "Verified the consumer's identity against a government-issued photographic document", "Provided the consumer with a means of freezing the account remotely at any time"],
            correctIndex: 0,
            explanation: "Where an access device was involved it must also have been an accepted device with a means of identifying the authorized user.",
            sourceLessonSlug: "what-the-institution-owes-you",
          },
          {
            prompt: "What is the cap where the consumer notifies within two business days of learning of a loss or theft?",
            options: ["The lesser of 50 dollars or the transfers before notice", "The lesser of 500 dollars or the sum of the transfers in the first two business days", "Zero, because timely notice removes consumer liability entirely under the regulation", "The full amount of the transfers, because the two-day window governs only the investigation"],
            correctIndex: 0,
            explanation: "Beyond that window the exposure rises to the lesser of 500 dollars or a computed sum.",
            sourceLessonSlug: "what-the-institution-owes-you",
          },
          {
            prompt: "What is the outer cap where notice is delayed beyond the two-business-day window?",
            options: ["The lesser of 500 dollars or a computed sum", "The lesser of 50 dollars or the amount of the transfers that occurred before notice", "Unlimited, because delayed notice removes the protection of the regulation entirely", "The amount of one periodic statement's transfers, whatever that figure happens to be"],
            correctIndex: 0,
            explanation: "The computation adds the transfers in the first two business days to those occurring afterwards.",
            sourceLessonSlug: "what-the-institution-owes-you",
          },
          {
            prompt: "What is the 60-day rule in 12 CFR 1005.6(b)(3)?",
            options: ["Report a transfer on a statement within 60 days of its transmittal", "Investigate a reported error within 60 days of receiving notice of it", "Provisionally credit the account within 60 days of the alleged error occurring", "Retain records of a disputed transfer for 60 days after the investigation ends"],
            correctIndex: 0,
            explanation: "Transfers after that window, which reasonable reporting would have stopped, can fall on the consumer entirely.",
            sourceLessonSlug: "what-the-institution-owes-you",
          },
          {
            prompt: "What can extend the reporting periods under 12 CFR 1005.6?",
            options: ["Extenuating circumstances such as extended travel or hospitalisation", "A written request made to the institution before the period would otherwise expire", "The institution's failure to send a periodic statement in the preceding calendar month", "A police report filed with a law enforcement agency naming the person responsible"],
            correctIndex: 0,
            explanation: "The periods are extended to a reasonable time where the delay was due to such circumstances.",
            sourceLessonSlug: "what-the-institution-owes-you",
          },
          {
            prompt: "When is notice given to a financial institution under 12 CFR 1005.6(b)(5)?",
            options: ["When the consumer takes steps reasonably necessary to inform it", "When a designated employee of the institution personally receives the information", "When the institution records the notice in its own error resolution case system", "When the consumer confirms an earlier oral report in writing to a stated address"],
            correctIndex: 0,
            explanation: "It does not turn on whether a particular employee actually receives it.",
            sourceLessonSlug: "what-the-institution-owes-you",
          },
          {
            prompt: "By when must a notice of error reach the institution under 12 CFR 1005.11(b)(1)?",
            options: ["No later than 60 days after the periodic statement is sent", "Within two business days of the consumer learning of the loss or the theft", "Within 10 business days of the transfer appearing on the consumer's account", "Within 45 days of the transfer, matching the maximum investigation period"],
            correctIndex: 0,
            explanation: "The notice may be oral or written, though the institution may require written confirmation.",
            sourceLessonSlug: "what-the-institution-owes-you",
          },
          {
            prompt: "Does an oral report start the error resolution procedure?",
            options: ["Yes, oral or written notice both count", "No, only a written notice delivered to the address on the periodic statement", "Only where the consumer also files a police report within the same period", "Only where the institution's own procedures permit telephone reporting of errors"],
            correctIndex: 0,
            explanation: "The institution may require written confirmation, but the section applies to any oral or written notice of error.",
            sourceLessonSlug: "what-the-institution-owes-you",
          },
          {
            prompt: "How long does 12 CFR 1005.11(c) give an institution to determine whether an error occurred?",
            options: ["10 business days", "45 calendar days from the date the notice of error was received", "60 days from the transmittal of the periodic statement showing the transfer", "Two business days, matching the consumer's own reporting window for a lost device"],
            correctIndex: 0,
            explanation: "It must investigate promptly, and it may take longer only on a stated condition.",
            sourceLessonSlug: "what-the-institution-owes-you",
          },
          {
            prompt: "What must an institution do to take up to 45 days to investigate?",
            options: ["Provisionally credit the account within 10 business days", "Obtain the consumer's written agreement to the extension of the investigation", "Notify the consumer in writing of the reason the investigation cannot be completed", "Report the matter to its primary federal regulator before the extension begins"],
            correctIndex: 0,
            explanation: "The credit is for the amount of the alleged error, including interest where applicable.",
            sourceLessonSlug: "what-the-institution-owes-you",
          },
          {
            prompt: "What does the course say the provisional credit provision means for a consumer during an investigation?",
            options: ["The default is that they are not out of pocket", "The investigation cannot begin until the institution has recovered the funds", "The consumer must repay the credit if the investigation takes the full 45 days", "The institution may charge a fee for the credit while the investigation runs"],
            correctIndex: 0,
            explanation: "The institution buys more investigating time by putting the money back while it investigates.",
            sourceLessonSlug: "what-the-institution-owes-you",
          },
          {
            prompt: "What does the course say matters more than eloquence when reporting an unauthorized transfer?",
            options: ["Speed", "A written narrative describing the circumstances of the loss in detail", "A police report naming the person who initiated the disputed transfers", "The amount at stake, because larger disputes receive a longer investigation"],
            correctIndex: 0,
            explanation: "The caps step up by the calendar rather than by how convincingly the consumer explains themselves.",
            sourceLessonSlug: "what-the-institution-owes-you",
          },
          {
            prompt: "Why does the course call an unread statement a running clock?",
            options: ["The 60-day reporting period runs from its transmittal", "Because the institution treats an unopened statement as an acceptance of the entries", "Because the provisional credit is reversed if the statement is not acknowledged", "Because the two-business-day window begins when the statement is delivered"],
            correctIndex: 0,
            explanation: "Transfers appearing on a statement must be reported within 60 days of the institution sending it.",
            sourceLessonSlug: "what-the-institution-owes-you",
          },
          {
            prompt: "A caller persuades you to move your own money to a so-called safe account. Which element of the definition fails?",
            options: ["Initiation by a person other than the consumer", "Absence of actual authority, because the caller had no permission to act", "The no-benefit element, because you received nothing from the transfer at all", "None of them, because deception vitiates any authority the consumer appeared to give"],
            correctIndex: 0,
            explanation: "You initiated it, using actual authority over your own account, so the definition is not met and the machinery does not start.",
            sourceLessonSlug: "when-you-pressed-send",
          },
          {
            prompt: "What does the course call the single most consequential distinction it teaches?",
            options: ["Money taken from your account against money you were deceived into sending", "The difference between a debit card transaction and a credit card transaction", "The difference between a state-licensed lender and one operating without a licence", "The difference between a fee charged at origination and one that accrues over a term"],
            correctIndex: 0,
            explanation: "Same loss, same victim, same deception, and opposite rules apply.",
            sourceLessonSlug: "when-you-pressed-send",
          },
          {
            prompt: "Someone steals your credentials and moves the money themselves. Which side of the line is that?",
            options: ["Unauthorized, and the machinery runs", "Outside the definition, because the credentials were yours and the authority was real", "Unauthorized only if the theft is reported to law enforcement within two days", "Outside the definition unless the institution had previously flagged the account"],
            correctIndex: 0,
            explanation: "They initiated it without actual authority, so the caps, the clocks and the reversed burden all attach.",
            sourceLessonSlug: "when-you-pressed-send",
          },
          {
            prompt: "What is the operative factual question the lesson says a real case turns on?",
            options: ["Whose hands were on the transaction", "Whether the amount transferred exceeded the consumer's ordinary transaction pattern", "Whether the consumer acted reasonably given the information they had at the time", "Whether the institution's fraud monitoring should have detected the transfer first"],
            correctIndex: 0,
            explanation: "And if it was somebody else, how they obtained what they used.",
            sourceLessonSlug: "when-you-pressed-send",
          },
          {
            prompt: "What did the FTC report about the payment methods behind reported 2024 fraud losses?",
            options: ["Bank transfers and cryptocurrency exceeded all others combined", "Credit cards accounted for more reported losses than every other method together", "Cash payments accounted for the majority of reported losses across all age groups", "Prepaid cards and money orders together exceeded every other payment method"],
            correctIndex: 0,
            explanation: "Those are the two methods where the consumer performs the transfer and the money is hard to reverse.",
            sourceLessonSlug: "when-you-pressed-send",
          },
          {
            prompt: "What does an insistence on a particular payment method amount to, in this lesson's reading?",
            options: ["A demand about which rulebook will apply afterwards", "An indication that the payee is located outside the United States", "A sign that the transaction exceeds the limit on the consumer's own account", "A requirement imposed by the receiving institution rather than by the payee"],
            correctIndex: 0,
            explanation: "The method decides the remedy, which is why it is the more reliable signal than anything about the story being told.",
            sourceLessonSlug: "when-you-pressed-send",
          },
          {
            prompt: "What does the lesson say about an institution reversing a payment it is not required to reverse?",
            options: ["A courtesy is not a right", "It is prohibited, because reversing without a legal basis would prejudice the payee", "It is required by the payment network's rules in every case of reported fraud", "It converts the transfer into an unauthorized one for the purposes of the regulation"],
            correctIndex: 0,
            explanation: "Knowing which one you are asking for changes how you ask and what you do next.",
            sourceLessonSlug: "when-you-pressed-send",
          },
          {
            prompt: "How does the lesson characterise people who fall for impersonation?",
            options: ["Attentive people meeting a technique built on real details and urgency", "Careless people who failed to verify the caller before acting on the request", "People who had not read the disclosures their institution was required to give", "People who were unaware that the regulation distinguishes authorised transfers"],
            correctIndex: 0,
            explanation: "The pressure to act immediately is the technique rather than an accident, which is why the defence is procedural.",
            sourceLessonSlug: "when-you-pressed-send",
          },
          {
            prompt: "What procedural defence does the lesson give?",
            options: ["End the call and dial the number on your own card", "Ask the caller for a reference number and a supervisor's direct line", "Record the call and forward the recording to the institution's fraud team", "Transfer a small test amount first to confirm the destination account is genuine"],
            correctIndex: 0,
            explanation: "No legitimate institution needs a transfer completed inside the call, so ending it costs nothing and defeats the structure.",
            sourceLessonSlug: "when-you-pressed-send",
          },
          {
            prompt: "What is the ceiling on a cardholder's liability for unauthorized use of a credit card?",
            options: ["The lesser of 50 dollars or what was obtained before notice", "The lesser of 500 dollars or the amount obtained in the first two business days", "Zero, because the issuer bears the whole loss on any unauthorized card use", "The full amount, unless the cardholder reported the loss within sixty days"],
            correctIndex: 0,
            explanation: "12 CFR 1026.12(b) states it in those terms, and 15 U.S.C. 1643 sets the same figure.",
            sourceLessonSlug: "four-instruments-four-rules",
          },
          {
            prompt: "Who bears the burden of proof under 15 U.S.C. 1643(b)?",
            options: ["The card issuer", "The cardholder, who must show the charge was not made with their permission", "The merchant that accepted the card for the disputed transaction in question", "The payment network, which must reconstruct the authorisation from its records"],
            correctIndex: 0,
            explanation: "The issuer must show the use was authorized, or that the conditions of liability were met.",
            sourceLessonSlug: "four-instruments-four-rules",
          },
          {
            prompt: "What does 12 CFR 1026.12(c) allow a cardholder to assert against the issuer?",
            options: ["All claims other than tort claims, and defenses, arising out of the transaction", "A right to have the transaction reversed within ten business days of a written notice", "A right to close the account without penalty where a merchant refuses to resolve a dispute", "A right to recover from the issuer any amount the merchant has refused to refund"],
            correctIndex: 0,
            explanation: "The cardholder may also withhold payment on the disputed amount without being reported delinquent.",
            sourceLessonSlug: "four-instruments-four-rules",
          },
          {
            prompt: "What must a cardholder do before asserting claims and defenses under 12 CFR 1026.12(c)?",
            options: ["Make a good faith attempt to resolve the dispute with the merchant", "File a written notice of error with the issuer within sixty days of the statement", "Obtain a written refusal from the merchant stating the reason for the refusal", "Notify the payment network in writing that the transaction is being disputed"],
            correctIndex: 0,
            explanation: "The right arises out of a dispute with somebody else and is asserted against the cardholder's own issuer.",
            sourceLessonSlug: "four-instruments-four-rules",
          },
          {
            prompt: "What are the two limits on the claims-and-defenses right in 12 CFR 1026.12(c)(3)(i)?",
            options: ["Credit above 50 dollars, and the same state or within 100 miles", "Credit above 500 dollars, and a transaction made within the previous sixty days", "Credit above 50 dollars, and a merchant holding a licence in the cardholder's state", "Credit above 100 dollars, and a transaction settled through a domestic payment network"],
            correctIndex: 0,
            explanation: "The distance is measured from the cardholder's current designated address.",
            sourceLessonSlug: "four-instruments-four-rules",
          },
          {
            prompt: "When do those amount and distance limits not apply?",
            options: ["Where the merchant is the issuer or connected to it as the rule specifies", "Where the transaction was made online rather than at a physical retail location", "Where the cardholder has held the account for more than twelve consecutive months", "Where the disputed amount exceeds the credit limit on the cardholder's account"],
            correctIndex: 0,
            explanation: "The rule also lifts them for a franchised dealer and for a sale obtained through an issuer-participated mail solicitation.",
            sourceLessonSlug: "four-instruments-four-rules",
          },
          {
            prompt: "Which regulation governs a disputed debit card transaction?",
            options: ["Regulation E", "Regulation Z, which governs credit cards and other extensions of consumer credit", "Regulation B, which requires a statement of principal reasons for an adverse action", "Regulation V, which governs the consumer reporting agencies and their files"],
            correctIndex: 0,
            explanation: "That means the 1005.2(m) definition, the 1005.6 tiers, the 1005.11 clocks and the burden at 15 U.S.C. 1693g(b).",
            sourceLessonSlug: "four-instruments-four-rules",
          },
          {
            prompt: "How does the course summarise Regulation E's protection?",
            options: ["Strong when the definition is met, nothing when it is not", "Uniform, because every transfer from a consumer account is covered by it", "Weaker than the credit card rules in every case, whatever the circumstances", "Available only where the consumer has opted in to the institution's fraud service"],
            correctIndex: 0,
            explanation: "That binary is exactly why the definition is the most useful thing the course teaches.",
            sourceLessonSlug: "four-instruments-four-rules",
          },
          {
            prompt: "What does 12 CFR 1005.3(c)(3) exclude from the definition of an electronic fund transfer?",
            options: ["Fedwire and similar wire transfer systems", "Any transfer initiated by telephone rather than through an electronic terminal", "Any transfer between two accounts held by the same consumer at one institution", "Any transfer of less than fifty dollars made at a point of sale in a retail store"],
            correctIndex: 0,
            explanation: "The exclusion names systems used primarily for transfers between financial institutions or between businesses.",
            sourceLessonSlug: "four-instruments-four-rules",
          },
          {
            prompt: "What determines whether a sent wire can be recalled, according to the lesson?",
            options: ["The receiving bank's cooperation and whether the funds remain", "The sending institution's obligation under the error resolution procedures", "Whether the consumer reported the transfer within two business days of sending it", "Whether the transfer exceeded the daily limit the sending institution had set"],
            correctIndex: 0,
            explanation: "The machinery of Regulation E has nothing to attach to, because the transfer is not an electronic fund transfer for these purposes.",
            sourceLessonSlug: "four-instruments-four-rules",
          },
          {
            prompt: "What recovery does cash offer, on the lesson's account?",
            options: ["Only finding the recipient", "The same error resolution procedure that applies to an electronic fund transfer", "A chargeback through the network that processed the underlying transaction", "A statutory claim against the party that accepted it, capped at fifty dollars"],
            correctIndex: 0,
            explanation: "There is no consumer error-resolution regime, no chargeback, and no defined dispute window.",
            sourceLessonSlug: "four-instruments-four-rules",
          },
          {
            prompt: "What pattern does the lesson find across the four instruments?",
            options: ["Rules are strongest where an intermediary holds the money", "Rules are strongest where the transaction amount is largest", "Rules are strongest where the transfer crosses a state boundary", "Rules are strongest where the consumer initiated the transfer personally"],
            correctIndex: 0,
            explanation: "The instruments with no rules are the ones where the money is simply gone.",
            sourceLessonSlug: "four-instruments-four-rules",
          },
          {
            prompt: "What other exclusion does 12 CFR 1005.3(c) contain that the lesson names?",
            options: ["Transfers whose primary purpose is buying or selling a security or commodity", "Transfers made by a consumer to a payee located outside the United States", "Transfers initiated through a mobile application rather than an electronic terminal", "Transfers exceeding a threshold set by the consumer's own financial institution"],
            correctIndex: 0,
            explanation: "Certain preauthorized transfers at very small institutions are also outside the definition.",
            sourceLessonSlug: "four-instruments-four-rules",
          },
          {
            prompt: "What is the one-sentence practical instruction the lesson ends on?",
            options: ["Establish which instrument moved the money", "Report the loss to law enforcement before contacting any financial institution", "Compute the annualized cost of the loss before deciding whether to dispute it", "Ask the institution to reverse the transaction as a matter of its own policy"],
            correctIndex: 0,
            explanation: "That determines which rulebook applies, which deadline is running, and whether anybody is obliged to answer.",
            sourceLessonSlug: "four-instruments-four-rules",
          },
          {
            prompt: "Two people lose the same sum on the same day and only one recovers it. What does the course say explains the difference?",
            options: ["A definition", "The size of the loss relative to the balance each of them maintained", "Which institution each of them banked with and what its policies allowed", "How persuasively each of them described the incident to the fraud department"],
            correctIndex: 0,
            explanation: "Nothing about them differs except whether the transfer met 12 CFR 1005.2(m).",
            sourceLessonSlug: "unauthorized-has-a-definition",
          },
          {
            prompt: "Which of these transfers is excluded from the definition because of the consumer's own conduct?",
            options: ["One made with fraudulent intent by the consumer or a person in concert with them", "One made by a person who obtained the consumer's card through a robbery", "One made by an employee of the financial institution without the consumer's knowledge", "One made after the consumer notified the institution that authority was withdrawn"],
            correctIndex: 0,
            explanation: "Transfers by the institution or its employee are excluded too, but for a different reason.",
            sourceLessonSlug: "unauthorized-has-a-definition",
          },
          {
            prompt: "What does the course mean by saying the notice is the switch?",
            options: ["Only telling the institution ends the furnishing exclusion", "Only a written notice starts the ten business day investigation period", "Only notice within two business days holds liability to the lower cap", "Only notice from the account holder rather than a joint holder is effective"],
            correctIndex: 0,
            explanation: "Recovering the card or changing a password does not restore the transfers to the definition.",
            sourceLessonSlug: "unauthorized-has-a-definition",
          },
          {
            prompt: "Which part of the regulation implements the Electronic Fund Transfer Act?",
            options: ["12 CFR part 1005", "12 CFR part 1026, which also carries the credit card provisions the course cites", "12 CFR part 1002, which requires a statement of principal reasons on an adverse action", "12 CFR part 1022, which governs the accuracy and disclosure of consumer report files"],
            correctIndex: 0,
            explanation: "Part 1026 is Regulation Z, and the course keeps the two apart because they govern different instruments.",
            sourceLessonSlug: "unauthorized-has-a-definition",
          },
          {
            prompt: "Does the definition of an unauthorized transfer turn on whether the consumer was deceived?",
            options: ["No, it turns on who initiated the transfer", "Yes, deception vitiates any authority the consumer may appear to have exercised", "Yes, but only where the deception involved an impersonation of the institution", "No, it turns on whether the amount exceeded the consumer's usual transaction size"],
            correctIndex: 0,
            explanation: "Deception matters only through how the initiator got what they used, not through how the consumer felt.",
            sourceLessonSlug: "when-you-pressed-send",
          },
          {
            prompt: "Which three protections does the course say do not apply where the definition is not met?",
            options: ["The caps, the provisional credit, and the reversed burden", "The disclosure requirements, the licensing rules, and the state usury ceiling", "The chargeback right, the claims-and-defenses right, and the delinquency protection", "The identity verification rule, the account screening rule, and the dispute right"],
            correctIndex: 0,
            explanation: "No two-business-day cap, no 45-day provisional credit, and no obligation on the institution to prove authorization.",
            sourceLessonSlug: "when-you-pressed-send",
          },
          {
            prompt: "In the impersonation example, what real details does the caller borrow?",
            options: ["A name, the last four digits, and a real transaction amount", "The consumer's full account number and the balance held on the account", "A copy of the consumer's most recent periodic statement, read aloud in full", "The consumer's credit score and the four key factors reported alongside it"],
            correctIndex: 0,
            explanation: "Borrowing real details and real urgency is why the technique works on attentive people.",
            sourceLessonSlug: "when-you-pressed-send",
          },
          {
            prompt: "Why does the lesson say a fraudster's choice of payment method is not a detail?",
            options: ["It selects the remedy the victim will have afterwards", "It determines which state's law will govern any dispute about the transfer", "It determines whether the transfer will be reported to a consumer reporting agency", "It determines the fee the receiving institution will charge for accepting the funds"],
            correctIndex: 0,
            explanation: "Bank transfers and cryptocurrency are the methods where the consumer transfers and reversal is hardest.",
            sourceLessonSlug: "when-you-pressed-send",
          },
          {
            prompt: "What does the course say is still worth doing even where no statute requires reimbursement?",
            options: ["Reporting the fraud", "Filing a civil action against the receiving institution for accepting the funds", "Requesting a provisional credit under the error resolution procedures anyway", "Closing every account held at the institution that processed the transaction"],
            correctIndex: 0,
            explanation: "An institution may reverse a payment under its own policy or a network's rules, but that is a courtesy rather than a right.",
            sourceLessonSlug: "when-you-pressed-send",
          },
          {
            prompt: "How does the course frame the credit card claims-and-defenses right relative to the other instruments?",
            options: ["The strongest consumer protection in the lesson", "The weakest, because of the amount and distance limits the rule imposes", "Equivalent to the Regulation E error resolution procedure in every material respect", "Available only where the merchant and the issuer are the same legal person"],
            correctIndex: 0,
            explanation: "It is a right against your own issuer arising out of a dispute with somebody else.",
            sourceLessonSlug: "four-instruments-four-rules",
          },
          {
            prompt: "What may a cardholder do with the disputed amount while asserting claims and defenses?",
            options: ["Withhold payment without being reported delinquent", "Demand a provisional credit within ten business days of the notice", "Require the issuer to close the merchant's acquiring relationship immediately", "Deduct the amount from the following month's minimum payment automatically"],
            correctIndex: 0,
            explanation: "The rule protects the cardholder from a delinquency report on the amount in dispute.",
            sourceLessonSlug: "four-instruments-four-rules",
          },
          {
            prompt: "Which instrument in the lesson has no consumer error-resolution regime at all?",
            options: ["Cash and instruments that behave like it", "A debit card used for a one-time point of sale purchase in a retail store", "A credit card used for a purchase from a merchant in the cardholder's own state", "An electronic fund transfer initiated from the consumer's own online banking"],
            correctIndex: 0,
            explanation: "No chargeback and no defined dispute window, so recovery depends on finding the recipient.",
            sourceLessonSlug: "four-instruments-four-rules",
          },
          {
            prompt: "What does the course say about the relationship between an intermediary and an enforceable rule?",
            options: ["A rule needs somebody who can be made to answer", "An intermediary always slows recovery, because it must investigate before acting", "An intermediary is irrelevant, because the rules attach to the consumer's account", "An intermediary is required by federal law in every consumer payment transaction"],
            correctIndex: 0,
            explanation: "That is why the instruments where an intermediary holds the money carry the strongest rules.",
            sourceLessonSlug: "four-instruments-four-rules",
          },
          {
            prompt: "Which two provisions state the 50 dollar credit card cap?",
            options: ["15 U.S.C. 1643 and 12 CFR 1026.12(b)", "15 U.S.C. 1693g and 12 CFR 1005.6, which govern electronic fund transfers", "12 CFR 1005.2(m) and the official interpretations to that same paragraph", "12 CFR 1005.3(c)(3) and 12 CFR 1005.11, which set coverage and the clocks"],
            correctIndex: 0,
            explanation: "The regulation's phrasing is the lesser of 50 dollars or the amount of money, property, labor, or services obtained.",
            sourceLessonSlug: "four-instruments-four-rules",
          },
          {
            prompt: "What is the significance of the phrase before the issuer is notified in the credit card cap?",
            options: ["Liability stops running at notice", "Liability is doubled where notice is given after two business days have passed", "Liability attaches only to transactions occurring after the notice was given", "Liability is removed entirely where notice is given within sixty days of the statement"],
            correctIndex: 0,
            explanation: "The cap is the lesser of 50 dollars or what was obtained before the issuer was told.",
            sourceLessonSlug: "four-instruments-four-rules",
          },
          {
            prompt: "How does the course describe the effect of the wire transfer exclusion on a defrauded consumer?",
            options: ["The Regulation E machinery has nothing to attach to", "The consumer must instead report the transfer within two business days of sending", "The consumer may still obtain a provisional credit under the error resolution rules", "The consumer's liability is capped at 500 dollars rather than at 50 dollars"],
            correctIndex: 0,
            explanation: "The payment is not an electronic fund transfer for these purposes, so the definition, the caps and the clocks do not apply.",
            sourceLessonSlug: "four-instruments-four-rules",
          },
          {
            prompt: "What must an access device have been, before consumer liability can attach under 12 CFR 1005.6(a)?",
            options: ["An accepted device with a means of identifying the authorized user", "A device issued within the previous twelve months and activated by the consumer", "A device the institution has verified against a government-issued identification", "A device registered with the payment network in the consumer's own name"],
            correctIndex: 0,
            explanation: "The institution must also have given the required disclosures about liability for unauthorized transfers.",
            sourceLessonSlug: "what-the-institution-owes-you",
          },
          {
            prompt: "What happens to transfers occurring after the 60-day statement window has closed?",
            options: ["They can fall on the consumer entirely", "They are capped at 50 dollars, because the earlier cap continues to apply", "They must still be provisionally credited within ten business days of a report", "They are treated as a separate error with its own sixty-day reporting period"],
            correctIndex: 0,
            explanation: "The rule reaches transfers that reasonable reporting would have stopped.",
            sourceLessonSlug: "what-the-institution-owes-you",
          },
          {
            prompt: "What does the course say about the relationship between the caps and the calendar?",
            options: ["The caps step up by the calendar", "The caps depend on the amount at stake rather than on any elapsed period", "The caps are fixed by the institution in its own account agreement with the consumer", "The caps apply only where the consumer can identify the person who initiated the transfer"],
            correctIndex: 0,
            explanation: "Which is why speed matters more than how convincingly the consumer explains themselves.",
            sourceLessonSlug: "what-the-institution-owes-you",
          },
          {
            prompt: "Which document is the trigger for the 60-day reporting deadline?",
            options: ["The periodic statement", "The account agreement signed when the consumer opened the account", "The written confirmation of the consumer's opt-in to overdraft coverage", "The notice of error the consumer files with the institution about the transfer"],
            correctIndex: 0,
            explanation: "The clock runs from the institution's transmittal of the statement showing the transfer.",
            sourceLessonSlug: "what-the-institution-owes-you",
          },
          {
            prompt: "May an institution require written confirmation of an oral notice of error?",
            options: ["Yes, but the oral notice still starts the procedure", "No, an oral notice must be treated as complete for all purposes", "Yes, and the procedure does not begin until the written confirmation arrives", "Only where the disputed amount exceeds the institution's own reporting threshold"],
            correctIndex: 0,
            explanation: "The section applies to any oral or written notice of error received within the reporting window.",
            sourceLessonSlug: "what-the-institution-owes-you",
          },
          {
            prompt: "What does the provisional credit include, besides the amount of the alleged error?",
            options: ["Interest, where applicable", "A fixed administrative sum set by the institution's own error resolution policy", "The fees the institution charged on transactions that overdrew the account", "The amount of any further unauthorized transfers occurring during the investigation"],
            correctIndex: 0,
            explanation: "It must be made within ten business days of receiving the error notice for the extension to be available.",
            sourceLessonSlug: "what-the-institution-owes-you",
          },
          {
            prompt: "How does the course describe the trade the 45-day extension represents?",
            options: ["More time to investigate, bought by returning the money meanwhile", "A longer period for the consumer to gather evidence supporting the dispute", "A shorter cap in exchange for a longer investigation period for the institution", "A waiver of the sixty-day reporting deadline in exchange for a written notice"],
            correctIndex: 0,
            explanation: "That default matters, because knowing it changes the conversation a consumer has on the telephone.",
            sourceLessonSlug: "what-the-institution-owes-you",
          },
          {
            prompt: "Which lesson in this section owns the rules that apply once a transfer IS unauthorized?",
            options: ["The one on what the institution owes you", "The one on the definition, which also sets out the caps and the investigation clocks", "The one on four instruments, which covers the credit card and the wire transfer", "The one on induced authorisation, which explains why the machinery does not start"],
            correctIndex: 0,
            explanation: "The definition lesson establishes when the machinery attaches; this one sets out what it does.",
            sourceLessonSlug: "what-the-institution-owes-you",
          },
          {
            prompt: "Which of these would satisfy the no-benefit element of the definition?",
            options: ["A transfer from which the consumer got nothing", "A transfer the consumer authorised but later regretted having made at all", "A transfer that paid a bill the consumer would have had to pay in any event", "A transfer the consumer made to an account they hold at another institution"],
            correctIndex: 0,
            explanation: "It is the third of the three elements, alongside initiation by another and the absence of actual authority.",
            sourceLessonSlug: "unauthorized-has-a-definition",
          },
          {
            prompt: "Which of these is NOT an access device under 12 CFR 1005.2(a)?",
            options: ["A periodic statement mailed to the consumer's address", "A personal identification number used at an automated teller machine", "A login credential used to reach an online banking service", "A one-time passcode sent to authorise a single transaction"],
            correctIndex: 0,
            explanation: "The definition covers a card, code, or other means of access that may be used to initiate transfers.",
            sourceLessonSlug: "unauthorized-has-a-definition",
          },
          {
            prompt: "Why does the course say the fraud-or-robbery commentary does enormous work?",
            options: ["It separates handing over a device from having it taken by deception", "It removes the sixty-day reporting deadline where the device was taken by force", "It shifts the burden of proof to the consumer where deception is alleged", "It extends the two-business-day window to a reasonable time in every case"],
            correctIndex: 0,
            explanation: "Being tricked out of the device is not furnishing it, so the transfers remain unauthorized.",
            sourceLessonSlug: "unauthorized-has-a-definition",
          },
          {
            prompt: "Which body of law governs a disputed credit card transaction?",
            options: ["The Truth in Lending Act and Regulation Z", "The Electronic Fund Transfer Act and Regulation E, as for a debit card", "The Fair Credit Reporting Act and Regulation V, because the file records the dispute", "The Equal Credit Opportunity Act and Regulation B, because credit was extended"],
            correctIndex: 0,
            explanation: "15 U.S.C. 1643 and 12 CFR 1026.12 supply the cap, the burden and the claims-and-defenses right.",
            sourceLessonSlug: "four-instruments-four-rules",
          },
          {
            prompt: "What does the course say a consumer should establish first when money has gone?",
            options: ["The instrument", "The identity of the person who received the funds and their location", "The amount of the loss and whether it exceeds the institution's reporting threshold", "Whether the institution's fraud monitoring flagged the transaction at the time"],
            correctIndex: 0,
            explanation: "The instrument determines the rulebook, the deadline and whether anybody is obliged to answer at all.",
            sourceLessonSlug: "four-instruments-four-rules",
          },
          {
            prompt: "Where does the 100-mile limit in 12 CFR 1026.12(c)(3)(i) measure from?",
            options: ["The cardholder's current designated address", "The address of the branch at which the account was originally opened", "The merchant's principal place of business as registered with its own state", "The location at which the disputed transaction was authorised by the issuer"],
            correctIndex: 0,
            explanation: "The transaction must have occurred in the same state as that address or within 100 miles of it.",
            sourceLessonSlug: "four-instruments-four-rules",
          },
          {
            prompt: "Which of these describes the structure of Section 5 as a whole?",
            options: ["Definition, consequences, the gap, then the four instruments", "Enforcement, arithmetic, statutes, then the state-by-state variation", "Disclosure, licensing, collection, then the remedies available on default", "Identity, screening, adverse action, then the dispute and its deadlines"],
            correctIndex: 0,
            explanation: "The definition lesson sets the test, the next shows what it triggers, the third shows what happens when it fails, and the last compares instruments.",
            sourceLessonSlug: "four-instruments-four-rules",
          },
          {
            prompt: "What does the course say about whether the induced-authorisation gap means nothing can be done?",
            options: ["No, but what remains is a courtesy rather than a right", "Yes, because a transfer outside the definition cannot be reversed by anybody", "Yes, unless the consumer reported the transfer within two business days of making it", "No, because the error resolution procedure applies regardless of who initiated it"],
            correctIndex: 0,
            explanation: "An institution or a network may act on its own policy, and reporting is worthwhile either way.",
            sourceLessonSlug: "when-you-pressed-send",
          },
          {
            prompt: "Which of these correctly describes what happens when the consumer initiates a transfer under deception?",
            options: ["The first element of the definition fails", "The no-benefit element fails, because the consumer received nothing in return", "The definition is met, because the consumer's consent was obtained by a fraud", "The definition is met, but the caps are increased to the higher tier of 500 dollars"],
            correctIndex: 0,
            explanation: "A transfer initiated by the consumer, with actual authority over their own account, is not a transfer by a person other than the consumer.",
            sourceLessonSlug: "when-you-pressed-send",
          },
          {
            prompt: "How does the lesson describe the urgency in an impersonation call?",
            options: ["The technique rather than an accident", "A sign that the caller is working from a script prepared by somebody else", "A requirement imposed by the receiving institution's own cut-off times", "Evidence that the transfer will be treated as unauthorized under the regulation"],
            correctIndex: 0,
            explanation: "Which is why the recommended defence is procedural rather than a matter of being more careful.",
            sourceLessonSlug: "when-you-pressed-send",
          },
          {
            prompt: "Which number does the lesson tell a reader to dial?",
            options: ["The one printed on their own card", "The one the caller provides for verification of the caller's identity", "The one listed in the search results for the institution's fraud department", "The one shown by the caller identification display on the incoming call"],
            correctIndex: 0,
            explanation: "Ending the call costs nothing and defeats the entire structure of the fraud.",
            sourceLessonSlug: "when-you-pressed-send",
          },
          {
            prompt: "What is the relationship between the FTC's payment-method finding and the Regulation E line?",
            options: ["The largest losses run through the methods with the weakest rules", "The finding contradicts the line, because most losses run through card transactions", "The finding is unrelated, because the FTC measures reports rather than legal outcomes", "The finding shows that most losses fall inside the definition and are therefore recoverable"],
            correctIndex: 0,
            explanation: "Bank transfers and cryptocurrency are the two methods where the consumer performs the transfer and reversal is hardest.",
            sourceLessonSlug: "when-you-pressed-send",
          },
          {
            prompt: "Under 12 CFR 1005.6(b)(3), what is the consequence of not reviewing a periodic statement?",
            options: ["The reporting window closes while the consumer is unaware", "The institution must send a duplicate statement before the window can close", "The consumer's liability is capped at 50 dollars regardless of the delay", "The institution must extend the window by the number of days of the delay"],
            correctIndex: 0,
            explanation: "The clock runs from transmittal, which is why the course calls an unread statement a running clock.",
            sourceLessonSlug: "what-the-institution-owes-you",
          },
          {
            prompt: "Which two clocks does 12 CFR 1005.11 set for the institution?",
            options: ["10 business days to determine, 45 days with provisional credit", "2 business days to acknowledge, 60 days to complete the investigation", "60 days to receive notice, 90 days to reverse a provisional credit given", "45 days to determine, 10 further business days to notify the consumer"],
            correctIndex: 0,
            explanation: "The 60-day figure is the consumer's deadline for giving notice rather than one of the institution's investigation clocks.",
            sourceLessonSlug: "what-the-institution-owes-you",
          },
          {
            prompt: "What does the course say the tiered caps reward?",
            options: ["Reporting quickly", "Reporting in writing rather than by telephone to the institution", "Reporting to law enforcement as well as to the financial institution", "Reporting an amount that exceeds the institution's own investigation threshold"],
            correctIndex: 0,
            explanation: "The lesser of 50 dollars applies within two business days, and the exposure rises after that.",
            sourceLessonSlug: "what-the-institution-owes-you",
          },
          {
            prompt: "Which of these is a correct statement about Regulation E and a security purchase?",
            options: ["A transfer whose primary purpose is buying a security may be excluded", "Every transfer from a consumer account is covered regardless of its purpose", "A securities transfer is covered but carries a longer investigation period", "A securities transfer is covered only where the broker is also the account bank"],
            correctIndex: 0,
            explanation: "12 CFR 1005.3(c)(4) excludes such transfers where the regulatory conditions it states are satisfied.",
            sourceLessonSlug: "four-instruments-four-rules",
          },
          {
            prompt: "What is the practical value of knowing the burden of proof rests on the institution?",
            options: ["It changes what the consumer has to establish on the call", "It removes the sixty-day deadline for reporting a transfer on a statement", "It entitles the consumer to a provisional credit before any investigation begins", "It transfers the loss to the payment network rather than to the institution"],
            correctIndex: 0,
            explanation: "Most people assume they must prove they did not make the charge, and the statute says otherwise.",
            sourceLessonSlug: "what-the-institution-owes-you",
          },
          {
            prompt: "Which lesson does the course identify as containing its most useful single teaching?",
            options: ["The one drawing the line Regulation E draws", "The one converting a quoted fee into an annualized rate under 15 U.S.C. 1606", "The one comparing the total of payments against the cash price in rent-to-own", "The one reading the Military Lending Act as a statement about who gets protected"],
            correctIndex: 0,
            explanation: "The distinction decides who bears the loss, and almost nobody knows the line is there.",
            sourceLessonSlug: "when-you-pressed-send",
          },
          {
            prompt: "What does the phrase from which the consumer receives no benefit exclude?",
            options: ["A transfer the consumer got something out of", "A transfer the consumer authorised but which produced a smaller benefit than expected", "A transfer to a payee the consumer had previously paid on more than one occasion", "A transfer that was reversed by the receiving institution before the funds settled"],
            correctIndex: 0,
            explanation: "It is one of the three elements that must all be present for the definition to be met.",
            sourceLessonSlug: "unauthorized-has-a-definition",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 6 — The record, the enforcement, and who is targeted
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-alert-the-freeze-and-the-block",
      title: "23 · Three tools in the Fair Credit Reporting Act, and what each one does",
      section: "Section 6 · The record, the enforcement, and who is targeted",
      body: `Identity theft is the case where somebody borrows in your name, so the damage lands in the file MONEY-01 taught you to read. The Fair Credit Reporting Act gives you three distinct tools for that file, they do different things, and people routinely reach for the wrong one.

**One: the initial fraud alert.** Under 15 U.S.C. § 1681c-1(a)(1), a consumer who asserts a good faith suspicion of fraud or identity theft may ask a nationwide agency to place a fraud alert in the file, and the agency must include it "for a period of not less than 1 year", and refer the request to the other nationwide agencies (15 U.S.C. § 1681c-1, n.d.). **One call, three files, one year.** It is a flag telling users of the report to take extra care in verifying identity. It does not stop anybody from pulling the file.

**Two: the extended alert.** Under subsection (b), a consumer who submits an **identity theft report** gets an alert "during the 7-year period beginning on the date of such request", and is excluded from prescreened credit and insurance solicitation lists "during the 5-year period" (15 U.S.C. § 1681c-1, n.d.). **Seven years on the alert, five years off the marketing lists**, and the price of admission is the identity theft report rather than a suspicion.

**Three: the security freeze, which is the one that actually blocks.** Subsection (i) defines it as "a restriction that prohibits a consumer reporting agency from disclosing the contents of a consumer report" to a third party without the consumer's express authorisation. The timings are specific: the agency must place it within **1 business day** of a request made by telephone or online, and **3 business days** for one made by post; it must lift it within **1 hour** of a telephone or online request, and 3 business days for a postal one. And it is **free of charge**, to place and to remove (15 U.S.C. § 1681c-1, n.d.).

**Read the one-hour figure, because it removes the usual objection.** A freeze is often refused on the grounds that it would be inconvenient when credit is genuinely needed. The statute sets the lift at an hour by telephone or online. **Whether to use one is your decision and this course does not make it for you**, but the inconvenience should be priced accurately rather than assumed.

**Four: the block, which is the repair rather than the prevention.** Under 15 U.S.C. § 1681c-2(a), an agency "shall block the reporting of any information in the file of a consumer that the consumer identifies as information that resulted from an alleged identity theft", within **4 business days** of receiving four things: appropriate proof of identity, a copy of an identity theft report, identification of the information, and a statement that the information does not relate to any transaction the consumer authorised (15 U.S.C. § 1681c-2, n.d.).

**Notice the fourth item, because it is the same distinction Section 5 turned on.** The statement is that the transaction was not authorised by you. **The block is the file-side twin of the Regulation E definition**, and it fails for the same reason in the same case: a debt you were deceived into incurring yourself is a debt you authorised.

**Where the identity theft report comes from.** The Federal Trade Commission operates IdentityTheft.gov for exactly this purpose, and it is federal, free and non-commercial. The FTC reports that in 2024 more than 1.1 million identity theft reports came through that site (Federal Trade Commission, 2025).

:::reveal How long must an initial fraud alert stay in a file, and what does a consumer need to get one? ||| Not less than 1 year, on an assertion in good faith of suspected fraud or identity theft.

:::reveal What does an extended fraud alert require, and how long does it last? ||| An identity theft report, and it lasts 7 years, with 5 years of exclusion from prescreened solicitation lists.

:::reveal How quickly must a security freeze be lifted on a telephone or online request, and what may it cost? ||| Within 1 hour, and it is free of charge to place and to remove.

:::reveal What four things must a consumer supply before an agency must block information under 15 U.S.C. 1681c-2? ||| Proof of identity, a copy of an identity theft report, identification of the information, and a statement that it does not relate to any transaction the consumer authorised.

## Vocabulary
- **Initial fraud alert**: a one-call flag lasting at least a year, referred to the other nationwide agencies, that asks users of the report to verify identity more carefully.
- **Extended fraud alert**: a seven-year alert requiring an identity theft report, carrying five years of exclusion from prescreened solicitation lists.
- **Security freeze**: the restriction prohibiting an agency from disclosing the contents of a report to a third party, free to place and to lift, with statutory timings.
- **Identity theft report**: the document that unlocks the extended alert and the block, obtainable free through the FTC's own site.
- **Block**: the four-business-day removal of information resulting from an alleged identity theft, on receipt of the four items the statute lists.

## Sources
15 U.S.C. § 1681c-1. (n.d.). *Identity theft prevention; fraud alerts and active duty alerts*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/15/1681c-1

15 U.S.C. § 1681c-2. (n.d.). *Block of information resulting from identity theft*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/15/1681c-2

Federal Trade Commission. (2025, March 10). *New FTC data show a big jump in reported losses to fraud to $12.5 billion in 2024*. https://www.ftc.gov/news-events/news/press-releases/2025/03/new-ftc-data-show-big-jump-reported-losses-fraud-125-billion-2024`,
    },
    {
      slug: "reading-an-enforcement-action",
      title: "24 · Complaint, order, verdict: three documents that are not the same thing",
      section: "Section 6 · The record, the enforcement, and who is targeted",
      body: `Public enforcement records are the best evidence this course has about how these markets actually behave. They are also the easiest thing in the world to misread, because a headline treats all three postures identically and they are not remotely the same.

**One: the complaint, which is an allegation.** The agency that files them says so in its own boilerplate, printed at the foot of every press release:

> "The Commission files a complaint when it has 'reason to believe' that the named defendants are violating or are about to violate the law and it appears to the Commission that a proceeding is in the public interest." (Federal Trade Commission, 2020)

**Reason to believe.** That is the filing standard, not a finding, not proof, and not an admission by anybody. Everything a complaint says about what a company did is what the government contends it can show.

**Two: the settlement, which resolves without proving.** The same note continues: "Stipulated final orders have the force of law when approved and signed by the District Court judge" (Federal Trade Commission, 2020). **Force of law and finding of fact are different things.** A stipulated order binds the defendant's future conduct and often moves money, and it does that without any court deciding whether the allegations were true. That is why the Progressive Leasing and Harris Jewelry matters in this course are always described as what the Commission alleged.

**Three: the judgment or the verdict, which is a finding.** In *United States v. Tucker and Muir*, a jury in the Southern District of New York, after a five-week trial, found both defendants guilty on all 14 counts on 13 October 2017, and the court imposed sentences on 5 January 2018 (U.S. Attorney's Office, S.D.N.Y., 2018). **That is a finding beyond reasonable doubt by a jury**, which is why this course is willing to state the 650-against-1,925 arithmetic from that case as what happened, and unwilling to state anything from a complaint the same way.

**A fourth thing worth knowing: a decision can be about remedy rather than conduct.** In *AMG Capital Management, LLC v. FTC*, decided 22 April 2021, the Supreme Court held that section 13(b) of the FTC Act "does not authorize the Commission to seek, or a court to award, equitable monetary relief such as restitution or disgorgement" (*AMG Capital Management, LLC v. FTC*, 2021). **That holding says nothing about whether the lending was deceptive.** It says what the Commission may ask a court for under that section. A reader who takes it as vindication of the conduct, or as a finding against it, has misread it in opposite directions.

**So the three questions to ask of any enforcement document you are handed.**

1. **Who is speaking?** An agency contending, parties agreeing, or a court or jury deciding.
2. **What was decided, if anything?** Conduct, remedy, procedure, or nothing at all yet.
3. **Is there an admission?** Settlements commonly contain none, and a settlement without an admission is not evidence that the conduct occurred.

**This is not pedantry and it is not softness toward defendants.** It is the same discipline the rest of the course applies to a statute: read the document for what it actually says. **An allegation reported as a fact damages the credibility of the entire body of enforcement evidence**, including the parts that were proved to a jury.

:::reveal On what standard does the FTC say it files a complaint? ||| Reason to believe that the named defendants are violating or are about to violate the law, and that a proceeding appears to be in the public interest.

:::reveal What gives a stipulated final order the force of law, and what does it not establish? ||| Approval and signature by the District Court judge. It does not establish that the allegations were true.

:::reveal What did the Supreme Court hold in AMG Capital Management v. FTC? ||| That section 13(b) does not authorize the Commission to seek, or a court to award, equitable monetary relief such as restitution or disgorgement.

:::reveal What are the three questions to ask of an enforcement document? ||| Who is speaking, what was decided if anything, and whether there is an admission.

## Vocabulary
- **Complaint**: a pleading filed on a reason-to-believe standard, stating what the government contends rather than what has been established.
- **Stipulated final order**: a settlement that has the force of law once a judge approves and signs it, and that commonly contains no admission.
- **Verdict**: a finding by a jury, which is why a fact established at trial can be stated as what happened.
- **Holding on remedy**: a decision about what relief a court may award, which settles nothing about whether the underlying conduct occurred.

## Sources
Federal Trade Commission. (2020, April 20). *Rent-to-own payment plan company Progressive Leasing will pay $175 million to settle FTC charges it deceived consumers about pricing*. https://www.ftc.gov/news-events/news/press-releases/2020/04/rent-own-payment-plan-company-progressive-leasing-will-pay-175-million-settle-ftc-charges-it

AMG Capital Management, LLC v. Federal Trade Commission, 593 U.S. 67. (2021). Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/supremecourt/text/19-508

United States Attorney's Office, Southern District of New York. (2018, January 5). *Scott Tucker sentenced to more than 16 years in prison for running $3.5 billion unlawful internet payday lending enterprise*. U.S. Department of Justice. https://www.justice.gov/usao-sdny/pr/scott-tucker-sentenced-more-16-years-prison-running-35-billion-unlawful-internet-payday`,
    },
    {
      slug: "who-is-targeted-from-the-record",
      title: "25 · Who is targeted, taken from the record rather than asserted",
      section: "Section 6 · The record, the enforcement, and who is targeted",
      body: `It is easy to say these products target vulnerable people. It is also unfalsifiable as stated, which makes it worth nothing. The public record supports something better: specific defendants, specific conduct, specific populations, with the posture of each document on its face.

**One: Congress named a class in statute.** The Military Lending Act, from Section 1, is the least deniable evidence in the whole subject. Congress did not cap the price of small-dollar credit generally. It capped it at 36 percent for covered servicemembers and their dependents, forbade taking a vehicle title or a post-dated cheque from them as security, and forbade rolling their debt over with new credit from the same creditor (10 U.S.C. § 987, n.d.). **A legislature does not write a targeted protection for a population it does not believe is targeted.**

**Two: an enforcement action naming that same population.** On 20 July 2022 the Federal Trade Commission and a group of 18 states sued the national jewellery retailer Harris Jewelry. **The complaint alleged**, and these remain allegations, that the company deceptively claimed financing purchases through it would raise servicemembers' credit scores, misrepresented that its protection plans were not optional or were required, and added those plans to purchases without consumers' consent. The complaint also charged a violation of the Military Lending Act, **the FTC's first action under that Act** (Federal Trade Commission, 2022).

Under a **proposed order** with the FTC and the multistate group, the company was to stop collection of millions of dollars of debt, provide approximately 10.9 million dollars in refunds for purchased protection plans, provide refunds for overpayments, **assist with deletion of negative credit entries** relating to the debt, and complete its shutdown and dissolve once the obligations were met (Federal Trade Commission, 2022).

**Read the third remedy against the first allegation.** The claim alleged was that the financing would raise credit scores. The remedy required assistance in deleting negative entries. **That pairing is the whole shape of the harm**, and it connects this course directly to MONEY-01: the file is where the damage from a consumer credit product ends up.

**Three: a case where the targeting is a matter of geography and legality.** In the Tucker prosecution the loans went, on the government's account, to more than 4.5 million people in all 50 states, including more than 250,000 in New York, **many of them in states whose laws expressly forbade lending at those rates** (U.S. Attorney's Office, S.D.N.Y., 2018). Section 2 lesson 3 quoted New York's criminal usury statute. The enterprise's response to state enforcement was the sovereign immunity arrangement the jury found was a fiction. **A product structured to reach borrowers in states that prohibited it is targeting, and it was proved to a jury rather than asserted.**

**And now the data, with its own publisher's caution attached.** The FTC's Consumer Sentinel Network Data Book aggregates consumer reports of fraud and identity theft. The 2024 edition, published in March 2025, was the most recent listed on the Commission's own report index when this course was written on **28 August 2026**. It reports 6.5 million consumer reports received during 2024, fraud reports from 2.6 million consumers, more than 1.1 million identity theft reports through IdentityTheft.gov, and more than 12.5 billion dollars in reported fraud losses (Federal Trade Commission, 2024; Federal Trade Commission, 2025).

**Here is the caution, in the FTC's own words, and it is why this lesson leads with enforcement rather than with figures:** "The Sentinel Data Book is based on unverified reports filed by consumers. The data is not based on a consumer survey" (Federal Trade Commission, 2024).

**That sentence disqualifies a whole class of conclusion.** Reports measure who reported, which is shaped by who knows the site exists, who has the time, who trusts a federal agency with their details, and who speaks English. **It is not a measure of who is defrauded.** MONEY-02 uses a probability survey with published methodology when it needs a population figure, precisely because that is a different instrument. Use the Sentinel data for what it is: a large record of what people told the government, useful for direction and for comparison over time, and not a census of harm.

:::reveal What is the least deniable evidence that servicemembers are targeted? ||| That Congress wrote a protection specifically for them, capping the rate and forbidding particular loan terms.

:::reveal What was notable about the Harris Jewelry complaint in enforcement history? ||| It was the FTC's first action under the Military Lending Act, brought with 18 states.

:::reveal What did the proposed Harris Jewelry order require in relation to consumer files? ||| Assistance with the deletion of negative credit entries pertaining to the debt.

:::reveal What does the FTC say about the basis of the Sentinel Data Book? ||| That it is based on unverified reports filed by consumers, and is not based on a consumer survey.

## Vocabulary
- **Targeting**: directing a product at an identified population, evidenced here by statute, by pleaded allegations, and by conduct proved at trial.
- **Multistate action**: an enforcement matter brought jointly by a federal agency and a group of state attorneys general.
- **Consumer Sentinel Network**: the FTC's database of consumer reports of fraud and identity theft, drawn from consumers and from other agencies and organisations.
- **Unverified report**: a report accepted as filed and not checked, which is why the Data Book measures reporting rather than prevalence.
- **Probability survey**: the different instrument MONEY-02 uses when a population figure is needed, with published methodology and a defined sample.

## Sources
10 U.S.C. § 987. (n.d.). *Terms of consumer credit extended to members and dependents: limitations*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/10/987

Federal Trade Commission. (2022, July 20). *FTC and 18 states sue to stop Harris Jewelry from cheating military families with illegal financing and sales tactics*. https://www.ftc.gov/news-events/news/press-releases/2022/07/ftc-18-states-sue-stop-harris-jewelry-cheating-military-families-illegal-financing-sales-tactics

Federal Trade Commission. (2024). *Consumer Sentinel Network Data Book 2024*. https://www.ftc.gov/reports/consumer-sentinel-network-data-book-2024

Federal Trade Commission. (2025, March 10). *New FTC data show a big jump in reported losses to fraud to $12.5 billion in 2024*. https://www.ftc.gov/news-events/news/press-releases/2025/03/new-ftc-data-show-big-jump-reported-losses-fraud-125-billion-2024

United States Attorney's Office, Southern District of New York. (2018, January 5). *Scott Tucker sentenced to more than 16 years in prison for running $3.5 billion unlawful internet payday lending enterprise*. U.S. Department of Justice. https://www.justice.gov/usao-sdny/pr/scott-tucker-sentenced-more-16-years-prison-running-35-billion-unlawful-internet-payday`,
    },
    {
      slug: "capstone-price-one-and-check-one",
      title: "26 · Capstone: price one product, check one rule, read one document",
      section: "Section 6 · The record, the enforcement, and who is targeted",
      body: `Everything in this course is a procedure, and a procedure you have not run is a thing you have read about. This capstone runs all three of them once, on material you choose.

**Before anything else, the third and last statement of the same thing.** This course gives **no financial advice**. It has not told you to use or avoid any product, has named no lender or seller as good or bad, and does not know your income, your obligations, your household or what a missed payment would cost you. Every figure in it carries a date because figures move, and it teaches methods rather than tables because tables go stale silently. **What you produce below is a description of how a product and a rule work, not a decision.** The decision is yours and it always was.

**Part one: price one product.** Pick any product in this course that is offered where you live: a small-dollar loan, a title loan, a rent-to-own agreement, a refund advance, or the overdraft on an account you already hold. Find its real, current terms, from a real document rather than from an advertisement.

Then produce four lines:
1. **The amount**, and what is actually received.
2. **The charge**, in dollars, including every separate fee named in the paperwork.
3. **The term**, in days, and what happens at the end of it.
4. **The comparison figure.** For credit, the annualized rate from 15 U.S.C. § 1606(a)(2): the charge over the amount, times 365 over the term in days. For rent-to-own, the multiple: total to ownership over cash price. **If the paperwork already states an annual percentage rate, compute yours anyway and compare the two.** A difference is not proof of anything, and it is always worth understanding.

**Part two: check one rule, in your own state.** Take the same product and run the four-step method: the state's own noun, the state's own published code, the four features that decide the price, and the licensing regulator's public register.

Write down five things: the statute's citation, the maximum amount, the maximum fee or rate, the permitted term, and whether renewal is allowed. Then **look the seller up on the regulator's register and record whether it appears.** Finish with the date you checked, because a rule you checked without dating is a rule you will misquote in a year.

**Part three: read one document you already have.** Find your own deposit account's fee schedule and answer three questions from it: the overdraft or non-sufficient-funds fee, **how many can be charged in a single day**, and whether a sustained-overdraft charge applies. Then answer two more from Section 5, from the account agreement or the institution's published error-resolution information: **how you give notice of an unauthorized transfer**, and **the deadline for doing so**.

**Part four, and it takes one minute: the sentence.** Write the one-sentence test from Section 5 somewhere you will find it again.

> If somebody other than me moved the money without my authority, a federal procedure with deadlines applies and the institution has to prove it was authorized. If I moved it myself because I was deceived, that procedure does not apply, and what I am asking for is a courtesy rather than a right.

**Then read it once more and note what it does not say.** It does not say the second case is your fault. It says the rules are different, and knowing which case you are in tells you what to ask for, how fast, and of whom. **That is the whole course: a document, a rule, and arithmetic you can do yourself.**

**What you should have at the end.** One product priced in your own hand. One statute located, quoted and dated. One seller checked against a public register. Five facts from documents your own institution is required to give you. And a sentence that will be true long after every figure in this course has moved.

:::reveal What four lines make up the pricing exercise? ||| The amount received, the charge in dollars including every fee, the term in days, and the comparison figure.

:::reveal What five things does the rule-checking exercise record? ||| The statute's citation, the maximum amount, the maximum fee or rate, the permitted term, and whether renewal is allowed.

:::reveal Which three questions does the capstone ask of your own fee schedule? ||| The overdraft or non-sufficient-funds fee, how many may be charged in a single day, and whether a sustained-overdraft charge applies.

:::reveal What does the capstone's one-sentence test not say? ||| That being deceived into moving the money yourself is your fault. It says only that the rules are different.

## Vocabulary
- **Comparison figure**: the annualized rate for credit, or the multiple for a lease-purchase, whichever the product's structure makes computable.
- **The four-step method**: naming the transaction as the state names it, reading the state's own code, extracting the four price features, and checking the licensing register.
- **Sustained overdraft charge**: the additional fee some institutions assess while a balance remains negative, and one of the three fee-schedule facts to record.
- **The one-sentence test**: the capstone's portable statement of the Regulation E line, written to remain true after the figures in this course have moved.

## Sources
15 U.S.C. § 1606. (n.d.). *Determination of annual percentage rate*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/uscode/text/15/1606

12 CFR § 1005.2. (n.d.). *Definitions*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/1005.2

12 CFR § 1005.11. (n.d.). *Procedures for resolving errors*. Legal Information Institute, Cornell Law School. https://www.law.cornell.edu/cfr/text/12/1005.11`,
    },
    {
      slug: "quiz-record-and-targeting",
      title: "27 · Knowledge check: the record, the enforcement, and who is targeted",
      section: "Section 6 · The record, the enforcement, and who is targeted",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "How long must an initial fraud alert remain in a consumer's file?",
            options: ["Not less than 1 year", "Seven years, which is the period the statute sets for the extended fraud alert", "Ninety days, after which the consumer must renew it with each agency separately", "Indefinitely, until the consumer asks each nationwide agency to remove it"],
            correctIndex: 0,
            explanation: "The agency must also refer the request to the other nationwide agencies, so one call reaches three files.",
            sourceLessonSlug: "the-alert-the-freeze-and-the-block",
          },
          {
            prompt: "What does a consumer need in order to obtain an initial fraud alert?",
            options: ["A good faith suspicion of fraud or identity theft", "A copy of an identity theft report obtained from a federal agency's website", "A police report naming the person suspected of having used the consumer's identity", "Written confirmation from a creditor that an account was opened without permission"],
            correctIndex: 0,
            explanation: "The identity theft report is what the extended alert requires, which is the difference between the two tools.",
            sourceLessonSlug: "the-alert-the-freeze-and-the-block",
          },
          {
            prompt: "What does an initial fraud alert actually do?",
            options: ["Flags the file so users verify identity more carefully", "Prevents any third party from obtaining the consumer's report without consent", "Removes any account opened fraudulently from the consumer's file automatically", "Excludes the consumer from prescreened credit and insurance solicitation lists"],
            correctIndex: 0,
            explanation: "It does not stop anybody from pulling the file, which is what the security freeze does.",
            sourceLessonSlug: "the-alert-the-freeze-and-the-block",
          },
          {
            prompt: "How long does the extended fraud alert last under 15 U.S.C. 1681c-1(b)?",
            options: ["7 years", "1 year, the same period the statute sets for the initial fraud alert", "5 years, which is the period of exclusion from prescreened solicitation lists", "4 business days, matching the deadline for blocking information in the file"],
            correctIndex: 0,
            explanation: "The consumer is separately excluded from prescreened credit and insurance solicitation lists during a 5-year period.",
            sourceLessonSlug: "the-alert-the-freeze-and-the-block",
          },
          {
            prompt: "What is the additional effect of an extended alert, beyond the alert itself?",
            options: ["Five years off prescreened solicitation lists", "Four business days in which the agency must block information in the file", "One hour in which the agency must lift a freeze on a telephone request", "Seven years of free copies of the file from each nationwide agency"],
            correctIndex: 0,
            explanation: "Those are lists provided to third parties to offer credit or insurance.",
            sourceLessonSlug: "the-alert-the-freeze-and-the-block",
          },
          {
            prompt: "How does 15 U.S.C. 1681c-1(i) define a security freeze?",
            options: ["A restriction prohibiting disclosure of the report's contents", "A flag telling a user of the report to verify the consumer's identity carefully", "A removal of information from the file that resulted from an identity theft", "A prohibition on a furnisher reporting new information about the consumer"],
            correctIndex: 0,
            explanation: "The restriction applies to disclosure to a third party without the consumer's express authorisation.",
            sourceLessonSlug: "the-alert-the-freeze-and-the-block",
          },
          {
            prompt: "How quickly must an agency place a security freeze requested by telephone or online?",
            options: ["Within 1 business day", "Within 1 hour, which is the deadline for lifting rather than placing a freeze", "Within 3 business days, which is the deadline for a request made by post", "Within 4 business days, matching the deadline for blocking disputed information"],
            correctIndex: 0,
            explanation: "A request by post gets 3 business days.",
            sourceLessonSlug: "the-alert-the-freeze-and-the-block",
          },
          {
            prompt: "How quickly must a security freeze be lifted on a telephone or online request?",
            options: ["Within 1 hour", "Within 1 business day, which is the deadline for placing rather than lifting one", "Within 3 business days, which is the deadline where the request is made by post", "Within 30 days, matching the reinvestigation period for a disputed file item"],
            correctIndex: 0,
            explanation: "That figure is why the usual convenience objection to a freeze should be priced accurately rather than assumed.",
            sourceLessonSlug: "the-alert-the-freeze-and-the-block",
          },
          {
            prompt: "What may a consumer be charged for placing or removing a security freeze?",
            options: ["Nothing, it is free of charge", "A fee set by each agency, capped at the amount the statute permits for a file copy", "A single fee for placement, with removals free for the following twelve months", "A fee only where more than two freezes are placed and lifted in one calendar year"],
            correctIndex: 0,
            explanation: "The statute makes both placement and removal free of charge.",
            sourceLessonSlug: "the-alert-the-freeze-and-the-block",
          },
          {
            prompt: "Within how long must an agency block information under 15 U.S.C. 1681c-2(a)?",
            options: ["4 business days after receiving the required materials", "30 days from receipt of the consumer's dispute about the information", "10 business days, matching the Regulation E error determination period", "1 business day, matching the deadline for placing a security freeze online"],
            correctIndex: 0,
            explanation: "The four materials are proof of identity, an identity theft report, identification of the information, and the consumer's statement.",
            sourceLessonSlug: "the-alert-the-freeze-and-the-block",
          },
          {
            prompt: "What is the fourth item a consumer must supply to obtain a block?",
            options: ["A statement that the information relates to no transaction they authorised", "A statement of the amount the consumer believes was taken from the account", "A statement from the furnisher confirming that the account was opened fraudulently", "A statement from law enforcement that a criminal investigation has been opened"],
            correctIndex: 0,
            explanation: "That statement is the file-side twin of the Regulation E line, and it fails in the same case for the same reason.",
            sourceLessonSlug: "the-alert-the-freeze-and-the-block",
          },
          {
            prompt: "Why does the course call the block the file-side twin of the Regulation E definition?",
            options: ["Both turn on whether the consumer authorised the transaction", "Both require the consumer to report within sixty days of a periodic statement", "Both place the burden of proof on the institution holding the consumer's money", "Both apply only where an access device was used to initiate the transaction"],
            correctIndex: 0,
            explanation: "A debt you were deceived into incurring yourself is a debt you authorised, so the block fails just as the error procedure does.",
            sourceLessonSlug: "the-alert-the-freeze-and-the-block",
          },
          {
            prompt: "Where does the course say a consumer can obtain an identity theft report free?",
            options: ["IdentityTheft.gov, operated by the Federal Trade Commission", "The nationwide consumer reporting agency that holds the affected file", "The state attorney general's consumer protection division in the consumer's state", "The financial institution at which the fraudulent account was opened"],
            correctIndex: 0,
            explanation: "It is federal, free and non-commercial, and the FTC reports more than 1.1 million such reports through the site in 2024.",
            sourceLessonSlug: "the-alert-the-freeze-and-the-block",
          },
          {
            prompt: "Does the course tell a reader whether to place a security freeze?",
            options: ["No, it prices the inconvenience and leaves the decision", "Yes, it recommends a freeze because it is free and can be lifted in an hour", "Yes, it recommends against a freeze because it delays legitimate credit applications", "It defers to the consumer reporting agency, which decides whether a freeze is warranted"],
            correctIndex: 0,
            explanation: "The one-hour lift is given so the usual objection can be assessed accurately rather than assumed.",
            sourceLessonSlug: "the-alert-the-freeze-and-the-block",
          },
          {
            prompt: "On what standard does the FTC's own boilerplate say it files a complaint?",
            options: ["Reason to believe", "Clear and convincing evidence that the conduct occurred as described", "Proof beyond reasonable doubt of each element of the violation alleged", "A referral from a state attorney general supported by consumer affidavits"],
            correctIndex: 0,
            explanation: "It must also appear to the Commission that a proceeding is in the public interest.",
            sourceLessonSlug: "reading-an-enforcement-action",
          },
          {
            prompt: "What is everything a complaint says about a company's conduct?",
            options: ["What the government contends it can show", "A finding of fact binding on the defendant in any later proceeding", "An admission by the defendant, since a complaint follows a negotiated resolution", "A determination by the agency's administrative law judge after a full hearing"],
            correctIndex: 0,
            explanation: "Reason to believe is the filing standard, not proof and not an admission by anybody.",
            sourceLessonSlug: "reading-an-enforcement-action",
          },
          {
            prompt: "When does a stipulated final order acquire the force of law?",
            options: ["When approved and signed by the District Court judge", "When the Commission votes to authorise the filing of the complaint and order", "When the defendant countersigns it and files it with the Commission's secretary", "When the period for public comment on the proposed order has closed"],
            correctIndex: 0,
            explanation: "Force of law and a finding of fact are different things, which is why the course labels allegations as allegations.",
            sourceLessonSlug: "reading-an-enforcement-action",
          },
          {
            prompt: "What does a stipulated final order NOT establish?",
            options: ["That the allegations were true", "That the defendant must change its future conduct in the ways described", "That the court has jurisdiction over the defendant and over the subject matter", "That money must be paid to the Commission for distribution to consumers"],
            correctIndex: 0,
            explanation: "It binds future conduct and often moves money, without any court deciding whether the allegations were true.",
            sourceLessonSlug: "reading-an-enforcement-action",
          },
          {
            prompt: "What is the posture of the finding in United States v. Tucker and Muir?",
            options: ["A jury verdict after a five-week trial", "A settlement reached before trial in which no admission was made", "An administrative determination by the Commission following an investigation", "A summary judgment entered on the government's motion without any trial"],
            correctIndex: 0,
            explanation: "That is why the course states the arithmetic from that case as what happened and refuses to do so for a complaint.",
            sourceLessonSlug: "reading-an-enforcement-action",
          },
          {
            prompt: "What did the Supreme Court hold in AMG Capital Management v. FTC?",
            options: ["Section 13(b) does not authorize equitable monetary relief", "The defendants' payday lending practices were deceptive under the FTC Act", "The tribal ownership arrangement barred state enforcement against the lenders", "The fine-print automatic renewal violated the Truth in Lending Act disclosures"],
            correctIndex: 0,
            explanation: "It says what the Commission may ask a court for under that section, and nothing about whether the lending was deceptive.",
            sourceLessonSlug: "reading-an-enforcement-action",
          },
          {
            prompt: "How can AMG Capital be misread, according to the course?",
            options: ["As vindication of the conduct, or as a finding against it", "As a decision about which state's law governs an internet lending transaction", "As an extension of the Military Lending Act cap to the whole consumer market", "As a determination that a stipulated order cannot carry the force of law"],
            correctIndex: 0,
            explanation: "It is a holding on remedy, so both readings go wrong in opposite directions.",
            sourceLessonSlug: "reading-an-enforcement-action",
          },
          {
            prompt: "What is the first of the three questions to ask of an enforcement document?",
            options: ["Who is speaking", "How much money changed hands as a result of the proceeding", "Whether the conduct described is still occurring in the market today", "Which federal agency has jurisdiction over the defendant's business"],
            correctIndex: 0,
            explanation: "An agency contending, parties agreeing, or a court or jury deciding are three different speakers.",
            sourceLessonSlug: "reading-an-enforcement-action",
          },
          {
            prompt: "What is the third of those questions?",
            options: ["Is there an admission", "Was the defendant represented by counsel throughout the proceeding", "Did the agency publish the complaint alongside the proposed order", "Has the defendant complied with the terms of the order since it was entered"],
            correctIndex: 0,
            explanation: "Settlements commonly contain none, and a settlement without an admission is not evidence that the conduct occurred.",
            sourceLessonSlug: "reading-an-enforcement-action",
          },
          {
            prompt: "Why does the course insist on stating posture accurately?",
            options: ["An allegation reported as fact damages the whole body of evidence", "Because a defendant may sue a publisher that describes an allegation as proven", "Because a settlement can be reopened where its terms are described inaccurately", "Because an agency will withdraw a complaint that has been publicly mischaracterised"],
            correctIndex: 0,
            explanation: "Including the parts that were proved to a jury, which is why the discipline is not softness toward defendants.",
            sourceLessonSlug: "reading-an-enforcement-action",
          },
          {
            prompt: "What does the course call the least deniable evidence that servicemembers are targeted?",
            options: ["Congress wrote a protection specifically for them", "The Commission's complaint alleging deceptive claims about credit scores", "The number of servicemembers who filed reports with the Consumer Sentinel Network", "The requirement that a covered borrower be verified against a federal database"],
            correctIndex: 0,
            explanation: "A legislature does not write a targeted protection for a population it does not believe is targeted.",
            sourceLessonSlug: "who-is-targeted-from-the-record",
          },
          {
            prompt: "What was notable about the Harris Jewelry action in enforcement history?",
            options: ["It was the FTC's first action under the Military Lending Act", "It was the first action the Commission brought jointly with state attorneys general", "It was the first matter in which a proposed order required a company to dissolve", "It was the first time a court found a violation of the Military Lending Act"],
            correctIndex: 0,
            explanation: "The complaint was brought with a group of 18 states on 20 July 2022.",
            sourceLessonSlug: "who-is-targeted-from-the-record",
          },
          {
            prompt: "What did the Harris Jewelry complaint allege about the company's credit-score claims?",
            options: ["That it deceptively claimed financing would raise servicemembers' scores", "That it reported servicemembers' accounts to agencies that were not consumer reporting agencies", "That it obtained servicemembers' consumer reports without any permissible purpose", "That it refused to correct negative entries after servicemembers disputed them in writing"],
            correctIndex: 0,
            explanation: "The complaint also alleged misrepresentation of protection plans and adding them without consumers' consent.",
            sourceLessonSlug: "who-is-targeted-from-the-record",
          },
          {
            prompt: "Which remedy in the proposed Harris Jewelry order pairs against the credit-score allegation?",
            options: ["Assistance with deleting negative credit entries", "Payment of approximately 10.9 million dollars in refunds for protection plans", "Cessation of the collection of millions of dollars of outstanding consumer debt", "Completion of the company's shutdown and its dissolution under state law"],
            correctIndex: 0,
            explanation: "The claim was that the financing would raise scores; the remedy required help removing negative entries, which is the shape of the harm.",
            sourceLessonSlug: "who-is-targeted-from-the-record",
          },
          {
            prompt: "How does the Harris Jewelry pairing connect this course to MONEY-01?",
            options: ["The file is where the damage from a credit product ends up", "Both courses teach the same statutory cap on the cost of consumer credit", "Both courses treat the adverse action notice as the centre of the analysis", "Both courses price a product using the same open-end computation formula"],
            correctIndex: 0,
            explanation: "MONEY-01 teaches the consumer report; this course shows a product whose harm landed there.",
            sourceLessonSlug: "who-is-targeted-from-the-record",
          },
          {
            prompt: "On the government's account in the Tucker case, how many borrowers were reached?",
            options: ["More than 4.5 million people in all 50 states", "More than 250,000 people, all of them resident in the state of New York", "Approximately 15,000 people who complained within a single fifteen-month period", "About 2.6 million people, matching the number who filed fraud reports in 2024"],
            correctIndex: 0,
            explanation: "That included more than 250,000 in New York, whose criminal usury statute the course quotes.",
            sourceLessonSlug: "who-is-targeted-from-the-record",
          },
          {
            prompt: "Why does the course treat lending into prohibiting states as evidence of targeting?",
            options: ["The structure existed to reach borrowers the state had protected", "Because the lender charged higher rates in those states than in permissive ones", "Because the borrowers in those states had been refused credit by every bank", "Because state law required the lender to register before lending across the border"],
            correctIndex: 0,
            explanation: "And it was proved to a jury rather than asserted, which is the standard this section holds itself to.",
            sourceLessonSlug: "who-is-targeted-from-the-record",
          },
          {
            prompt: "Which edition of the Consumer Sentinel Network Data Book was the most recent when this course was written?",
            options: ["The 2024 edition, published March 2025", "The 2025 edition, published in the first quarter of the following calendar year", "The 2023 edition, because the Commission publishes the Data Book biennially", "The 2026 edition, published in the same month this course was written"],
            correctIndex: 0,
            explanation: "It was the most recent listed on the Commission's own report index when the course was written on 28 August 2026.",
            sourceLessonSlug: "who-is-targeted-from-the-record",
          },
          {
            prompt: "What does the FTC say the Sentinel Data Book is based on?",
            options: ["Unverified reports filed by consumers", "A stratified probability sample of households drawn from the Current Population Survey", "Records supplied by financial institutions about disputed transactions in the year", "Case files from the Commission's own completed enforcement investigations"],
            correctIndex: 0,
            explanation: "The Commission adds expressly that the data is not based on a consumer survey.",
            sourceLessonSlug: "who-is-targeted-from-the-record",
          },
          {
            prompt: "What class of conclusion does that caution disqualify?",
            options: ["Treating the reports as a measure of who is defrauded", "Comparing the reported totals in one year against those in another year", "Using the reports to identify which payment methods carry the largest losses", "Citing the reports as evidence that the Commission received them at all"],
            correctIndex: 0,
            explanation: "Reports measure who reported, which is shaped by who knows the site exists, has the time, trusts the agency and speaks English.",
            sourceLessonSlug: "who-is-targeted-from-the-record",
          },
          {
            prompt: "What instrument does MONEY-02 use when it needs a population figure?",
            options: ["A probability survey with published methodology", "The Consumer Sentinel Network's aggregated consumer reports for the year", "The Commission's own enforcement record across the preceding five years", "A census of accounts drawn from the deposit records of insured institutions"],
            correctIndex: 0,
            explanation: "That is a different instrument from a collection of unverified reports, which is exactly the point.",
            sourceLessonSlug: "who-is-targeted-from-the-record",
          },
          {
            prompt: "What does the course say the Sentinel data IS good for?",
            options: ["Direction and comparison over time", "Establishing the prevalence of fraud within any named demographic group", "Determining which consumers are entitled to a refund under an enforcement order", "Proving that a particular company engaged in the conduct consumers described"],
            correctIndex: 0,
            explanation: "It is a large record of what people told the government, and not a census of harm.",
            sourceLessonSlug: "who-is-targeted-from-the-record",
          },
          {
            prompt: "Why does the course say targeting vulnerable people is worth nothing as a claim?",
            options: ["It is unfalsifiable as stated", "It is contradicted by the enforcement record in every case the course examines", "It cannot be proved without a probability survey of the affected population", "It describes a motive rather than a practice, and motives are not actionable"],
            correctIndex: 0,
            explanation: "The public record supports something better: specific defendants, specific conduct and specific populations, each with its posture on its face.",
            sourceLessonSlug: "who-is-targeted-from-the-record",
          },
          {
            prompt: "What are the four lines the capstone's pricing exercise produces?",
            options: ["The amount, the charge, the term, the comparison figure", "The lender, the licence number, the regulator, and the date of the check", "The statute, the ceiling, the term limit, and whether renewal is allowed", "The fee schedule, the daily maximum, the sustained charge, and the notice route"],
            correctIndex: 0,
            explanation: "The charge must include every separate fee named in the paperwork, and the term is in days.",
            sourceLessonSlug: "capstone-price-one-and-check-one",
          },
          {
            prompt: "What does the capstone say to do if the paperwork already states an annual percentage rate?",
            options: ["Compute your own anyway and compare the two", "Accept the stated figure, because the disclosure is required to be accurate", "Report any difference to the state licensing regulator as a possible violation", "Use the stated figure for credit and the multiple for a lease-purchase agreement"],
            correctIndex: 0,
            explanation: "A difference is not proof of anything, and it is always worth understanding.",
            sourceLessonSlug: "capstone-price-one-and-check-one",
          },
          {
            prompt: "Which comparison figure does the capstone use for a rent-to-own agreement?",
            options: ["The multiple: total to ownership over cash price", "The annualized rate computed from the periodic payment and the term in days", "The difference between the cash price and the early purchase option price", "The share of the total that the state statute permits to exceed the cash price"],
            correctIndex: 0,
            explanation: "For credit it uses the annualized rate from 15 U.S.C. 1606(a)(2) instead.",
            sourceLessonSlug: "capstone-price-one-and-check-one",
          },
          {
            prompt: "What five things does the capstone's rule-checking exercise record?",
            options: ["Citation, maximum amount, maximum fee, permitted term, renewal", "Lender, regulator, licence number, expiry date, and the enforcement history", "Cash price, total, difference, early purchase option, and the missed-payment term", "Fee, daily maximum, sustained charge, notice route, and the reporting deadline"],
            correctIndex: 0,
            explanation: "Plus the date the check was made, because a rule checked without a date is a rule you will misquote in a year.",
            sourceLessonSlug: "capstone-price-one-and-check-one",
          },
          {
            prompt: "What does the capstone ask a reader to do with the seller's name?",
            options: ["Look it up on the regulator's public register", "Search for enforcement actions filed against it in the previous five years", "Compare its advertised rate against the ceiling the state statute imposes", "Confirm it against the list of participants in the IRS Free File programme"],
            correctIndex: 0,
            explanation: "And record whether it appears, because a lender not on the register is not licensed.",
            sourceLessonSlug: "capstone-price-one-and-check-one",
          },
          {
            prompt: "Which three questions does the capstone put to a deposit account's fee schedule?",
            options: ["The fee, the daily maximum, and whether a sustained charge applies", "The interest rate, the minimum balance, and the monthly maintenance charge", "The overdraft opt-in status, the notice route, and the reporting deadline", "The identity documents required, the screening company used, and the dispute route"],
            correctIndex: 0,
            explanation: "The daily maximum is the figure that turns a single bad morning into a multiple.",
            sourceLessonSlug: "capstone-price-one-and-check-one",
          },
          {
            prompt: "Which two further facts does the capstone ask a reader to find, from Section 5?",
            options: ["How to give notice of an unauthorized transfer, and the deadline", "The liability cap and the provisional credit amount for the account held", "The institution's own definition of an unauthorized transfer and its exclusions", "The burden of proof the institution applies and the evidence it will require"],
            correctIndex: 0,
            explanation: "Both come from the account agreement or the institution's published error-resolution information.",
            sourceLessonSlug: "capstone-price-one-and-check-one",
          },
          {
            prompt: "What is the fourth part of the capstone, which takes one minute?",
            options: ["Writing down the one-sentence Regulation E test", "Filing a complaint with the state regulator about the product priced", "Placing a security freeze with each of the nationwide reporting agencies", "Comparing the priced product against a second offer from another seller"],
            correctIndex: 0,
            explanation: "It is written to remain true after every figure in the course has moved.",
            sourceLessonSlug: "capstone-price-one-and-check-one",
          },
          {
            prompt: "What does the capstone's one-sentence test say applies when somebody else moved the money without authority?",
            options: ["A federal procedure with deadlines, and the institution must prove authorization", "A right to a refund from the payment network within four business days", "A criminal referral, which the institution is obliged to make on the consumer's behalf", "A ninety-day investigation during which the institution may withhold the funds"],
            correctIndex: 0,
            explanation: "And where the consumer moved it themselves after being deceived, what remains is a courtesy rather than a right.",
            sourceLessonSlug: "capstone-price-one-and-check-one",
          },
          {
            prompt: "What does the capstone say the one-sentence test does NOT say?",
            options: ["That being deceived into moving the money is your fault", "That the institution has any obligation at all in the second case", "That the two cases are governed by different bodies of federal law", "That the deadline for reporting differs between the two situations"],
            correctIndex: 0,
            explanation: "It says only that the rules are different, and knowing which case you are in tells you what to ask for and of whom.",
            sourceLessonSlug: "capstone-price-one-and-check-one",
          },
          {
            prompt: "How does the capstone summarise the whole course in one phrase?",
            options: ["A document, a rule, and arithmetic you can do yourself", "A statute, a regulator, and a complaint you can file without a lawyer", "A disclosure, a cooling-off period, and a right of rescission you can exercise", "A survey, an enforcement record, and a comparison of the two data sources"],
            correctIndex: 0,
            explanation: "That is what the three exercises produce, and each is repeatable on any product.",
            sourceLessonSlug: "capstone-price-one-and-check-one",
          },
          {
            prompt: "Where is the third and final statement that this course gives no financial advice?",
            options: ["At the start of the capstone", "In the section on the record and who is targeted, before the enforcement lessons", "In the lesson pricing overdraft against the Section 1 conversion arithmetic", "In the opening lesson distinguishing a scam from a legal, disclosed product"],
            correctIndex: 0,
            explanation: "The first is Section 1 lesson 1 and the second is the overdraft lesson, following the surplus-funds-basics posture.",
            sourceLessonSlug: "capstone-price-one-and-check-one",
          },
          {
            prompt: "What does the capstone say the reader produces, as opposed to what they do not?",
            options: ["A description of how a product and a rule work, not a decision", "A recommendation the reader can act on without further research", "A complaint the reader may file with a state or federal regulator", "A calculation the seller is obliged to accept as the disclosed price"],
            correctIndex: 0,
            explanation: "The decision is the reader's and always was, because the course does not know their circumstances.",
            sourceLessonSlug: "capstone-price-one-and-check-one",
          },
          {
            prompt: "What does the capstone say a reader should have at the end?",
            options: ["One product priced, one statute dated, one seller checked, five facts", "A completed application for the product they have decided to use", "A written complaint ready to send to the licensing regulator in their state", "A comparison table of every small-dollar product available in their state"],
            correctIndex: 0,
            explanation: "And a sentence that will be true long after every figure in the course has moved.",
            sourceLessonSlug: "capstone-price-one-and-check-one",
          },
          {
            prompt: "Where does the capstone say to get a product's terms from?",
            options: ["A real document rather than an advertisement", "The state regulator's published summary of the product's permitted terms", "A comparison site that aggregates offers from licensed sellers in the state", "The seller's telephone representative, whose statements bind the seller"],
            correctIndex: 0,
            explanation: "The exercise is to price a real, current offer using the paperwork that governs it.",
            sourceLessonSlug: "capstone-price-one-and-check-one",
          },
          {
            prompt: "Which statute supplies the annualized comparison in the capstone?",
            options: ["15 U.S.C. 1606(a)(2)", "12 CFR 1005.2(m), which defines an unauthorized electronic fund transfer", "15 U.S.C. 1681c-1, which sets the timings for a fraud alert and a freeze", "10 U.S.C. 987, which caps the rate on credit to covered servicemembers"],
            correctIndex: 0,
            explanation: "The charge over the amount, times 365 over the term in days.",
            sourceLessonSlug: "capstone-price-one-and-check-one",
          },
          {
            prompt: "Which of the three FCRA tools actually stops a third party from seeing the file?",
            options: ["The security freeze", "The initial fraud alert, which flags the file for at least one year", "The extended fraud alert, which lasts seven years on an identity theft report", "The block, which removes information resulting from an alleged identity theft"],
            correctIndex: 0,
            explanation: "The alerts ask for extra verification; only the freeze restricts disclosure of the report's contents.",
            sourceLessonSlug: "the-alert-the-freeze-and-the-block",
          },
          {
            prompt: "Which of the FCRA tools is repair rather than prevention?",
            options: ["The block under 15 U.S.C. 1681c-2", "The security freeze, which restricts disclosure of the report to third parties", "The initial fraud alert, which is referred to the other nationwide agencies", "The extended alert, which also removes the consumer from solicitation lists"],
            correctIndex: 0,
            explanation: "It removes information that resulted from an alleged identity theft, within four business days of the four required items.",
            sourceLessonSlug: "the-alert-the-freeze-and-the-block",
          },
          {
            prompt: "How many identity theft reports does the FTC say came through IdentityTheft.gov in 2024?",
            options: ["More than 1.1 million", "About 6.5 million, which is the total of all consumer reports Sentinel received", "About 2.6 million, which is the number of consumers who filed fraud reports", "More than 15,000, which was the complaint count in one fifteen-month period"],
            correctIndex: 0,
            explanation: "Sentinel received 6.5 million consumer reports in total during that year across all categories.",
            sourceLessonSlug: "the-alert-the-freeze-and-the-block",
          },
          {
            prompt: "How many consumers filed fraud reports with the FTC in 2024?",
            options: ["About 2.6 million", "About 6.5 million, which is the total number of Sentinel reports across all types", "More than 1.1 million, which is the identity theft figure from IdentityTheft.gov", "More than 4.5 million, matching the borrower count in the Tucker prosecution"],
            correctIndex: 0,
            explanation: "Reported fraud losses exceeded 12.5 billion dollars in the same year, on the same unverified-report basis.",
            sourceLessonSlug: "who-is-targeted-from-the-record",
          },
          {
            prompt: "Which three things does the Military Lending Act do that the targeting lesson names?",
            options: ["Caps the rate, bars title and cheque security, bars same-creditor rollover", "Caps the rate, requires a licence, and bars lending across state boundaries", "Requires disclosure, requires a cooling-off period, and bars mandatory arbitration", "Bars any fee, requires a repayment plan, and requires credit counselling on default"],
            correctIndex: 0,
            explanation: "A legislature does not write that combination of protections for a population it does not believe is targeted.",
            sourceLessonSlug: "who-is-targeted-from-the-record",
          },
          {
            prompt: "What did the proposed Harris Jewelry order require the company to do about its own future?",
            options: ["Complete its shutdown and dissolve once the obligations were met", "Submit its marketing materials to the Commission for approval for five years", "Appoint an independent monitor to review its financing practices annually", "Restrict its business to states that had not joined the multistate action"],
            correctIndex: 0,
            explanation: "It also had to stop collecting millions of dollars of debt and refund about 10.9 million dollars for protection plans.",
            sourceLessonSlug: "who-is-targeted-from-the-record",
          },
          {
            prompt: "What did the Harris Jewelry complaint allege about the protection plans?",
            options: ["That they were misrepresented as not optional or as required", "That they were sold at a price exceeding the ceiling the statute permits", "That they were cancelled without notice once a servicemember was deployed", "That they were reported to consumer reporting agencies as separate accounts"],
            correctIndex: 0,
            explanation: "The complaint also alleged that the plans were added to purchases without consumers' consent.",
            sourceLessonSlug: "who-is-targeted-from-the-record",
          },
          {
            prompt: "How many states joined the FTC in the Harris Jewelry action?",
            options: ["18", "50, so that the action covered every jurisdiction in the United States", "5, being the states in which the retailer maintained its largest operations", "None, because the Commission brought the action under its own authority alone"],
            correctIndex: 0,
            explanation: "It was a multistate action, and it was the Commission's first under the Military Lending Act.",
            sourceLessonSlug: "who-is-targeted-from-the-record",
          },
          {
            prompt: "What does the course say shapes who appears in the Sentinel reports?",
            options: ["Who knows the site exists, has the time, trusts the agency, speaks English", "Which states contribute their own consumer complaint data to the network", "Which categories the Commission has chosen to sort the reports into that year", "Which payment methods the reporting consumers used to send the money"],
            correctIndex: 0,
            explanation: "Which is why the reports measure reporting rather than prevalence.",
            sourceLessonSlug: "who-is-targeted-from-the-record",
          },
          {
            prompt: "Why does the targeting lesson lead with enforcement rather than with figures?",
            options: ["Enforcement records name defendants, conduct and populations", "Because figures are only published every two years and go stale between editions", "Because the Commission does not publish figures broken down by population", "Because the enforcement record is easier for a reader to verify independently"],
            correctIndex: 0,
            explanation: "The Data Book's own caution about unverified reports is why the figures come second and carry their caveat.",
            sourceLessonSlug: "who-is-targeted-from-the-record",
          },
          {
            prompt: "What is the relationship between a fraud alert and a security freeze, in effect?",
            options: ["One asks for care, the other refuses disclosure", "One lasts a year and the other lasts seven years on the same request", "One is free and the other may be charged for by each nationwide agency", "One applies to the file and the other applies to individual accounts within it"],
            correctIndex: 0,
            explanation: "The alert flags the file for extra verification and does not stop anybody pulling it.",
            sourceLessonSlug: "the-alert-the-freeze-and-the-block",
          },
          {
            prompt: "What must an agency do with an initial fraud alert request beyond placing it?",
            options: ["Refer it to the other nationwide agencies", "Notify every creditor that has pulled the file in the previous twelve months", "Provide the consumer with a free copy of the file at the same time", "Open a reinvestigation of every item the consumer identifies as fraudulent"],
            correctIndex: 0,
            explanation: "That referral is what makes one call reach three files.",
            sourceLessonSlug: "the-alert-the-freeze-and-the-block",
          },
          {
            prompt: "Which document unlocks both the extended alert and the block?",
            options: ["An identity theft report", "A police report naming the person who used the consumer's identity", "A sworn affidavit from the creditor that opened the fraudulent account", "A written dispute filed with each of the nationwide reporting agencies"],
            correctIndex: 0,
            explanation: "The FTC operates IdentityTheft.gov for exactly this purpose, free of charge.",
            sourceLessonSlug: "the-alert-the-freeze-and-the-block",
          },
          {
            prompt: "How long must an agency take to place a freeze requested by post?",
            options: ["3 business days", "1 business day, which is the deadline for a telephone or online request", "1 hour, which is the deadline for lifting a freeze requested online", "4 business days, matching the deadline for blocking disputed information"],
            correctIndex: 0,
            explanation: "The removal deadline for a postal request is also 3 business days.",
            sourceLessonSlug: "the-alert-the-freeze-and-the-block",
          },
          {
            prompt: "Which of these correctly states what a complaint is NOT?",
            options: ["Proof, a finding, or an admission by anybody", "A pleading the agency files after voting to authorise the filing", "A statement of what the government contends it can establish at trial", "A document filed on a standard of reason to believe the law was violated"],
            correctIndex: 0,
            explanation: "Reason to believe is a filing standard, and everything a complaint says is what the government contends.",
            sourceLessonSlug: "reading-an-enforcement-action",
          },
          {
            prompt: "What is the second of the three questions to ask of an enforcement document?",
            options: ["What was decided, if anything", "Which court has jurisdiction over the parties and the subject matter", "Whether the agency has published the underlying investigative record", "How much time the defendant has to comply with the terms imposed"],
            correctIndex: 0,
            explanation: "Conduct, remedy, procedure, or nothing at all yet are four different answers.",
            sourceLessonSlug: "reading-an-enforcement-action",
          },
          {
            prompt: "Why is the course willing to state the 650-against-1,925 figures as what happened?",
            options: ["A jury found the defendants guilty on all 14 counts", "The Commission alleged those figures in a complaint it filed in federal court", "The Supreme Court adopted those figures in its decision on the remedies question", "The defendants stipulated to those figures in a settlement approved by the court"],
            correctIndex: 0,
            explanation: "That is a finding beyond reasonable doubt, which is a different posture from a complaint or a settlement.",
            sourceLessonSlug: "reading-an-enforcement-action",
          },
          {
            prompt: "What does the course say about calling this posture discipline softness toward defendants?",
            options: ["It is the same discipline applied to a statute: read what it says", "It is a legal requirement imposed on publishers by the agencies themselves", "It is a concession the course makes in exchange for citing enforcement records", "It is a limitation of the sources available rather than an editorial choice"],
            correctIndex: 0,
            explanation: "Reporting an allegation as a fact damages the credibility of the whole body of enforcement evidence.",
            sourceLessonSlug: "reading-an-enforcement-action",
          },
          {
            prompt: "Which case in this course is a holding about remedy rather than about conduct?",
            options: ["AMG Capital Management v. FTC", "United States v. Tucker and Muir, decided by a jury after a five-week trial", "FTC v. Progressive Leasing, resolved by a proposed stipulated final order", "FTC and 18 states v. Harris Jewelry, the first Military Lending Act action"],
            correctIndex: 0,
            explanation: "The Court held that section 13(b) does not authorize equitable monetary relief such as restitution or disgorgement.",
            sourceLessonSlug: "reading-an-enforcement-action",
          },
          {
            prompt: "Which of these is the correct sequence of postures from weakest to strongest as evidence?",
            options: ["Complaint, stipulated order, jury verdict", "Jury verdict, complaint, stipulated order signed by the District Court judge", "Stipulated order, jury verdict, complaint filed on a reason-to-believe standard", "Complaint, jury verdict, stipulated order entered without any admission of fact"],
            correctIndex: 0,
            explanation: "An allegation, then a settlement that proves nothing about the allegations, then a finding.",
            sourceLessonSlug: "reading-an-enforcement-action",
          },
          {
            prompt: "What does this course do every time it cites the Progressive Leasing or Harris Jewelry matters?",
            options: ["Describes them as what the Commission alleged", "States the findings the District Court made after reviewing the evidence", "Notes the amount recovered and treats that as a measure of the harm proved", "Compares the allegations against the statutory text of the Act at issue"],
            correctIndex: 0,
            explanation: "Both were resolved by proposed orders, so no court decided whether the allegations were true.",
            sourceLessonSlug: "reading-an-enforcement-action",
          },
          {
            prompt: "What was the total of reported fraud losses the FTC published for 2024?",
            options: ["More than 12.5 billion dollars", "About 175 million dollars, the sum in the Progressive Leasing proposed order", "About 3.5 billion dollars, the revenue figure in the Tucker prosecution", "About 10.9 million dollars, the refund figure in the Harris Jewelry order"],
            correctIndex: 0,
            explanation: "The figure rests on unverified consumer reports, which the Commission states expressly.",
            sourceLessonSlug: "who-is-targeted-from-the-record",
          },
          {
            prompt: "Which part of the capstone connects most directly to Section 2's four-step method?",
            options: ["Checking one rule in your own state", "Pricing one product from its real paperwork rather than an advertisement", "Reading five facts off documents your own institution must give you", "Writing down the one-sentence test from the Regulation E section"],
            correctIndex: 0,
            explanation: "The state's own noun, the state's own published code, the four price features, and the licensing register.",
            sourceLessonSlug: "capstone-price-one-and-check-one",
          },
          {
            prompt: "Why does the capstone insist on dating the rule check?",
            options: ["A rule checked without a date will be misquoted later", "Because the statute requires a citation to include the date of access", "Because the regulator's register is updated on a fixed annual schedule", "Because the licensing period expires one year after the check is made"],
            correctIndex: 0,
            explanation: "It is the same date-every-figure habit the course committed to in its first lesson.",
            sourceLessonSlug: "capstone-price-one-and-check-one",
          },
          {
            prompt: "Which products does the capstone offer as candidates for the pricing exercise?",
            options: ["A small-dollar loan, a title loan, rent-to-own, a refund advance, or an overdraft", "Any consumer credit product carrying a disclosed annual percentage rate", "Only products offered by sellers appearing on the state regulator's register", "Only products the course has already priced from a statute in earlier sections"],
            correctIndex: 0,
            explanation: "The instruction is to pick one offered where the reader lives, and to work from a real document.",
            sourceLessonSlug: "capstone-price-one-and-check-one",
          },
          {
            prompt: "What does the course say about a procedure you have not run?",
            options: ["It is a thing you have read about", "It cannot be verified against the statute that requires it to be followed", "It will be forgotten before the reader is in a position to use it", "It belongs in a summary table rather than in a taught course"],
            correctIndex: 0,
            explanation: "Which is why the capstone runs all three procedures once, on material the reader chooses.",
            sourceLessonSlug: "capstone-price-one-and-check-one",
          },
          {
            prompt: "Which section of the FCRA carries the fraud alerts and the security freeze?",
            options: ["15 U.S.C. 1681c-1", "15 U.S.C. 1681c-2, which carries the block of information resulting from theft", "15 U.S.C. 1681i, which carries the reinvestigation duty on a disputed item", "15 U.S.C. 1681j, which carries the free annual file disclosure entitlement"],
            correctIndex: 0,
            explanation: "The block sits in the neighbouring section, and the course keeps the two apart because they do different work.",
            sourceLessonSlug: "the-alert-the-freeze-and-the-block",
          },
          {
            prompt: "What does the course say identity theft does to a consumer, in MONEY-01's terms?",
            options: ["The damage lands in the file", "The damage is limited to the account the impostor opened in the consumer's name", "The damage is reversed automatically once a fraud alert has been placed", "The damage is measured by the amount the impostor borrowed rather than by the record"],
            correctIndex: 0,
            explanation: "Somebody borrows in your name, so the consequences show up in the consumer report MONEY-01 teaches you to read.",
            sourceLessonSlug: "the-alert-the-freeze-and-the-block",
          },
          {
            prompt: "Which of these does a security freeze NOT do?",
            options: ["Remove information already in the file", "Prohibit the agency from disclosing the report's contents to a third party", "Take effect within one business day of a telephone or an online request", "Get lifted within one hour of a telephone or an online request to remove it"],
            correctIndex: 0,
            explanation: "Removing information resulting from an alleged identity theft is the block at 15 U.S.C. 1681c-2.",
            sourceLessonSlug: "the-alert-the-freeze-and-the-block",
          },
          {
            prompt: "Why does the block fail where a consumer was deceived into incurring the debt themselves?",
            options: ["Because the required statement is that the consumer authorised nothing", "Because the block applies only to accounts opened within the previous twelve months", "Because the agency has four business days and cannot investigate a deception", "Because the consumer must first place an extended fraud alert on the same file"],
            correctIndex: 0,
            explanation: "It is the same failure as under 12 CFR 1005.2(m), for the same reason, on the file side rather than the account side.",
            sourceLessonSlug: "the-alert-the-freeze-and-the-block",
          },
          {
            prompt: "What does the course say a headline does to the three enforcement postures?",
            options: ["Treats them identically", "Reports only the settlement figure and omits the underlying allegations", "Describes the remedy without naming the statute the defendant was charged under", "Distinguishes them accurately, which is why the course relies on press coverage"],
            correctIndex: 0,
            explanation: "They are not remotely the same, which is why public records are both the best evidence and the easiest thing to misread.",
            sourceLessonSlug: "reading-an-enforcement-action",
          },
          {
            prompt: "In which court and on what date did the jury return its verdict against Tucker and Muir?",
            options: ["The Southern District of New York, 13 October 2017", "The Northern District of Georgia, on 20 April 2020 with a proposed order", "The Supreme Court of the United States, on 22 April 2021 in a unanimous decision", "The Southern District of New York, on 5 January 2018 when sentence was imposed"],
            correctIndex: 0,
            explanation: "Sentences were imposed on 5 January 2018, which is a separate date from the verdict.",
            sourceLessonSlug: "reading-an-enforcement-action",
          },
          {
            prompt: "What does the course say enforcement records are, relative to its other evidence?",
            options: ["The best evidence about how these markets behave", "A supplement to the statutory analysis, useful only where a statute is ambiguous", "A substitute for survey data, because they name individuals rather than populations", "A weaker source than trade publications, because agencies publish selectively"],
            correctIndex: 0,
            explanation: "They are also the easiest thing to misread, which is why the posture discipline exists.",
            sourceLessonSlug: "reading-an-enforcement-action",
          },
          {
            prompt: "What did the FTC's Sentinel figures for 2024 include besides fraud reports?",
            options: ["Identity theft reports and other consumer protection reports", "Enforcement actions the Commission filed during the same calendar year", "Complaints received directly by the state attorneys general that joined its cases", "Records of disputed transactions supplied by insured depository institutions"],
            correctIndex: 0,
            explanation: "Sentinel received 6.5 million consumer reports in total across all categories in that year.",
            sourceLessonSlug: "who-is-targeted-from-the-record",
          },
          {
            prompt: "How does the course describe the claim that these products target vulnerable people?",
            options: ["Easy to say and unfalsifiable as stated", "Established by the Commission's own enforcement statistics for the year", "Contradicted by the FDIC survey's collected reasons for using nonbank services", "Provable only where a statute names the population as a protected class"],
            correctIndex: 0,
            explanation: "The record supports something better, which is specific defendants, specific conduct and specific populations.",
            sourceLessonSlug: "who-is-targeted-from-the-record",
          },
          {
            prompt: "Which part of the Tucker record does the course rely on for the targeting point?",
            options: ["Lending into states whose laws expressly forbade those rates", "The revenue figure of 3.5 billion dollars generated between 2008 and 2013", "The sentence of 200 months imposed on the principal defendant in the case", "The Supreme Court's later holding that section 13(b) authorises no monetary relief"],
            correctIndex: 0,
            explanation: "More than 250,000 of the borrowers were in New York, whose criminal usury statute the course quotes in Section 2.",
            sourceLessonSlug: "who-is-targeted-from-the-record",
          },
          {
            prompt: "Which two documents does the capstone say a reader's own institution must give them?",
            options: ["The fee schedule and the error-resolution information", "The consumer report used to screen the application and the denial letter", "The state licensing certificate and the regulator's most recent examination report", "The Truth in Lending disclosure and the statement of principal reasons for a denial"],
            correctIndex: 0,
            explanation: "The fee schedule answers three questions and the account agreement or published error information answers two more.",
            sourceLessonSlug: "capstone-price-one-and-check-one",
          },
        ],
      },
    },
  ],
};

