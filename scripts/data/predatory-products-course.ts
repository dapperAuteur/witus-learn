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
  ],
};

