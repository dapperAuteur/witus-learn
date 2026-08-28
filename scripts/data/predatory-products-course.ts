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
  ],
};

