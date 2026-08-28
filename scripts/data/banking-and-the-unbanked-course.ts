import type { AuthoredCourse } from "./authored-course";

// MONEY-02 · "Banking, and Who Has No Bank" (Money & Property). Source brief:
// plans/future-courses/2026-08-27-15-personal-finance-track-research.md, section 4.4, which called
// this the strong second build of the personal-money track. Sibling of MONEY-01 (the credit course),
// authored in parallel. Tier 0.
//
// THE SPINE, and the sentence the whole course is built to keep true:
// A BANK ACCOUNT IS A PRODUCT WITH A PRICE AND TWO GATES, AND BOTH THE PRICE AND THE GATES FALL
// HARDEST ON THE SMALLEST BALANCES. The catalog's method is to teach the mechanism and who it
// excludes. Applied here that means three mechanisms, each read from its own rule: the identity
// rule that decides whether you may open an account at all (31 CFR 1020.220), the screening report
// that decides whether they will let you (the Fair Credit Reporting Act, because ChexSystems and
// Early Warning Services are consumer reporting agencies and a denied applicant therefore has
// federal rights almost nobody knows they hold), and the fee structure that decides what the
// account costs once you have it (12 CFR part 1030, and 12 CFR 1005.17 for overdraft).
//
// THE ALTERNATIVE-SERVICES ECONOMY IS THE SUBJECT, NOT A FOOTNOTE. Sections 5 and 6 teach money
// orders, check cashing, prepaid cards, nonbank payment apps and the bank desert as a priced market
// that people enter for reasons the FDIC itself collected and published, rather than as a cautionary
// tale about bad choices.
//
// EVERY EXTERNAL FIGURE IN THIS FILE WAS READ FROM ITS PUBLISHER ON 28 AUGUST 2026, and every one of
// them carries that date in the lesson, per the surplus-funds-basics posture. The sources read:
//   · 2023 FDIC National Survey of Unbanked and Underbanked Households (November 2024), read in
//     full, including Figure 1.8 (cited AND main reasons for not having an account), Table 1.1
//     (unbanked rates by income, education, age, race and ethnicity, disability), Figure 1.2, the
//     underbanked and fully banked definitions on p. 15, the money order and check cashing series in
//     section 4, and Appendix 3, the survey instrument itself (questions UB55 and UB60). THE 2023
//     EDITION IS THE MOST RECENT PUBLISHED as of 28 August 2026: the FDIC's own FAQ states that "A
//     new survey report is released every two years, in the fall of even-numbered years", the 2025
//     survey was fielded in June 2025, and its report was not published when this course was written.
//     The lesson says so and dates the figure, because a stale survey number is exactly the failure
//     this domain punishes.
//   · Board of Governors of the Federal Reserve System, Economic Well-Being of U.S. Households in
//     2025 (May 2026), for the unexpected-expense distribution.
//   · 15 U.S.C. 1681a (the definitions of consumer report, consumer reporting agency, and nationwide
//     specialty consumer reporting agency), 1681j (free file disclosure) and 1681m(a) (what a user
//     taking adverse action must tell you), read on uscode.house.gov.
//   · 31 CFR 1020.220(a)(2)(i)(A), read through the FDIC's own advisory FIL-15-2024, "Collecting
//     Identifying Information Required Under the Customer Identification Program Rule".
//   · 12 CFR 1030.4 (Truth in Savings account disclosures), 12 CFR 1005.17(b) (the overdraft opt-in)
//     and 12 CFR 1005.18(b) (the prepaid short form disclosure), read on the CFPB's own regulation
//     pages, which were live and current when this course was written.
//   · Public Law 119-10, approved 9 May 2025, the joint resolution disapproving the CFPB rule
//     "Overdraft Lending: Very Large Financial Institutions", read on govinfo.gov. The 2024 rule is
//     therefore NOT in force, and the course says so rather than describing it in the present tense.
//   · CFPB Data Spotlight, "Overdraft/NSF Revenue in 2023 down more than 50% versus pre-pandemic
//     levels" (24 April 2024), including its own exclusion caveat, which is what makes its figure a
//     floor rather than a total.
//   · Barca, A., and Flynn, C. (2025, January 15), "The last bank branch standing", Fed Communities,
//     for the banking-desert definition and population.
//   · FDIC deposit insurance and NCUA share insurance coverage pages, and USPS's own money order
//     fee page.
//
// THE HARD RULES THIS FILE RUNS ON, recorded so a later editor cannot soften one without seeing it
// was a decision:
//   1. NOT ADVICE, IN PROSE, IN THREE PLACES. The surplus-funds-basics posture, stated in lesson 1,
//      again in the fee section, and again in the final lesson. A registry entry a learner never
//      sees is not the same as a sentence in the lesson they are reading.
//   2. DATE EVERY FIGURE, IN THE LESSON. Survey rates, insurance caps, fee schedules and agency
//      rules all move. Each is printed with the day it was read.
//   3. TEACH THE METHOD, NOT THE TABLE. There is no fifty-state table of check-casher fee caps here
//      and there never will be. The course teaches how to find your own state's rule.
//   4. NO PRODUCT NAMED AS A RECOMMENDATION. Companies are named only where naming them is the fact
//      (ChexSystems and Early Warning Services are the two the CFPB itself names), never as a
//      suggestion.
//   5. CREDIT UNIONS ARE NOT RE-TAUGHT. Cooperatives already teaches the credit union as an entity,
//      one member one vote, at length. This course uses it as a consumer option and points there.
//      Credit reports and scores belong to MONEY-01 and are not taught here either.
//
// House style, inherited from WARRANT-02: `section` on every lesson; flush-left single-line
// `:::reveal q ||| a`; a `## Vocabulary` block of 3-6 lesson-specific terms; APA 7 `## Sources` with
// a stable URL; a quiz per teaching section (pool sized by density, serving 5, passing 80, shuffled)
// plus a final serving 10; every question carries `explanation` and `sourceLessonSlug`. Correct
// options are written SHORT and distractors long and specific, so `check-longest-option` passes by
// construction rather than by post-hoc trimming.

const NOT_ADVICE = `> **This course is information, not financial advice, and it cannot be.** It describes what banks and nonbank companies do, what documents they are required to hand you, and what federal rules say, so that you can read your own account and decide for yourself. It does not tell you which bank to use, which account to open, how much to keep in it, or what to do with your money. Every external figure in this course was read from its publisher on **28 August 2026** and carries that date in the lesson, because fee schedules, survey rates and agency rules all move.`;

export const BANKING_AND_THE_UNBANKED_COURSE: AuthoredCourse = {
  title: "Banking, and Who Has No Bank",
  description:
    "A generic banking course teaches you how to open a checking account. This one teaches what a bank account actually is, what it costs, what happens when you do not have one, and what fills the gap. It starts with the deposit contract, because the thing you call your money is legally a claim against a company, and the insurance that backs that claim has a structure worth learning even though its dollar cap has a date on it. Then the two gates. The first is the identity rule at 31 CFR 1020.220, which requires a bank to collect four things before it opens an account for you, and which does not say the words driver's license or Social Security number, though almost everyone believes it does. The second is the gate almost nobody knows exists: banks screen applicants through companies like ChexSystems and Early Warning Services, those companies are consumer reporting agencies under the Fair Credit Reporting Act, and that single legal fact gives a rejected applicant a right to be told which company was consulted, a right to a free copy of the file, and a right to dispute what is in it. Then the cost structure, taught as a price rather than a rule: a monthly fee waived above a balance threshold is the same account sold at two prices, sorted by who has the least. Overdraft is taught from the opt-in regulation and from the rule Congress nullified in May 2025, because a course that described that rule in the present tense would be wrong. Then the substitute market, priced rather than scolded: money orders, check cashing, prepaid cards and payment apps, with the fees the FDIC and USPS publish, and with the reason a household with an unpredictable balance rationally prefers a fee it can see to a fee it cannot predict. The evidence spine is the FDIC's own biennial survey, which asks unbanked households why, publishes their answers, and shows that the single most cited reason is not having enough money to meet a minimum balance. The course ends with distance, with what saving actually looks like across the population according to the Federal Reserve, and with five things you can do to read your own account, none of which is advice about what to do with your money.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1 — What an account is, and what it costs
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-deposit-contract",
      title: "1 · What a deposit account actually is",
      section: "Section 1 · What an account is, and what it costs",
      body: `${NOT_ADVICE}

Start with the thing everyone thinks they already understand.

**When you deposit money at a bank, the money stops being yours.** It becomes the bank's money, and what you hold in return is a claim: a promise by that institution to pay you on demand. That is why a bank can lend your deposit to somebody else without asking you, and it is why the failure of a bank is a real event in your life rather than an abstraction. The balance on your screen is a number the bank owes you.

**Deposit insurance is the answer to the question that fact raises.** In the United States a bank deposit is insured by the Federal Deposit Insurance Corporation and a credit union share account is insured by the National Credit Union Administration, and both are structured the same way, which is the part worth learning.

**The structure, which is stable.** Coverage is counted three ways at once: **per depositor, per insured institution, for each account ownership category**. Those are three separate multipliers, not one limit. Two people with a joint account are two depositors. The same person at two different insured banks is covered at each. And the same person at one bank, holding money in two different ownership categories, is covered separately in each. Read on **28 August 2026**, the FDIC states the standard amount as **$250,000 per depositor, per FDIC-insured bank, for each account ownership category** (FDIC, 2024), and the NCUA states that its **National Credit Union Share Insurance Fund** insures accounts at federally insured credit unions to the same **$250,000**, "backed by the full faith and credit of the United States" (NCUA, 2025).

**Learn the structure. Date the cap.** The three-way count is how the system works. The dollar figure is a number Congress and the regulators can change, so it is printed here with the day it was read, and you should read it from the FDIC or the NCUA yourself before relying on it.

**What is covered, and what is not, is a sharper lesson than it looks.** The FDIC lists checking accounts, negotiable order of withdrawal accounts, savings accounts, money market deposit accounts, time deposits such as certificates of deposit, and cashier's checks and money orders issued by a bank. It lists as **not insured**: stocks, bonds, mutual funds, annuities, life insurance policies, the contents of a safe deposit box, municipal securities, **and United States Treasury bills, bonds and notes** (FDIC, 2024).

**That last one catches people, and it is the whole idea in one line.** A Treasury bill is not covered, and a Treasury bill is not risky. Deposit insurance covers **the institution failing**, not the asset losing value. It is insurance on the promise, not insurance on the outcome.

**One more fact, and it is the reason the system works at all:** coverage is automatic. If an insured bank fails, there is nothing to apply for.

**And a boundary.** A credit union is a financial cooperative, owned by its members and governed one member one vote. That is taught properly, as an entity, in **Cooperatives**, and this course will not repeat it. Here a credit union is simply a second kind of insured institution you can hold an account at.

:::reveal What do you actually own after you deposit money at a bank? ||| A claim on the bank. The money becomes the bank's; what you hold is its promise to pay you.

:::reveal Name the three things deposit insurance is counted per. ||| Per depositor, per insured institution, and per account ownership category.

:::reveal Why are United States Treasury securities not covered by deposit insurance? ||| Because deposit insurance covers the institution failing, not an asset losing value. A Treasury is not a deposit and its safety comes from somewhere else entirely.

## Vocabulary
- **Deposit contract**: the relationship a deposit creates, in which the money becomes the bank's and the customer holds a claim against the bank rather than the cash itself.
- **Ownership category**: the legal capacity in which an account is held (single, joint, certain trusts and retirement accounts), and one of the three axes deposit insurance is counted along.
- **Standard maximum deposit insurance amount**: the per-depositor, per-bank, per-category dollar limit published by the FDIC, stated in this lesson as read on 28 August 2026.
- **Share insurance**: the credit-union counterpart to deposit insurance, provided by the National Credit Union Share Insurance Fund and administered by the NCUA.
- **Time deposit**: a deposit committed for a fixed term, such as a certificate of deposit, and insured on the same terms as a checking or savings balance.

## Sources
Federal Deposit Insurance Corporation. (2024, April 1). *Understanding deposit insurance*. https://www.fdic.gov/resources/deposit-insurance/understanding-deposit-insurance

National Credit Union Administration. (2025, May 20). *Share insurance coverage*. https://ncua.gov/consumers/share-insurance-coverage`,
    },
    {
      slug: "the-identity-gate",
      title: "2 · The first gate: four pieces of information",
      section: "Section 1 · What an account is, and what it costs",
      body: `Before a bank can open an account for you, a federal rule requires it to collect certain things. Reading that rule is more useful than any advice about opening an account, because it tells you what is actually required and, just as importantly, what is not.

**The rule is the Customer Identification Program rule, at 31 CFR 1020.220.** It is an anti-money-laundering rule, not a consumer rule, and that origin explains its shape. The FDIC's own advisory to the banks it supervises summarises the requirement plainly: procedures "must include collecting, at a minimum" the customer's **name**, **date of birth, for an individual**, **address**, and **identification number**, before the account is opened (FDIC, 2024).

**Now the part almost nobody knows.** For a U.S. person the identification number "must be a taxpayer identification number", which includes a Social Security number **and** an individual taxpayer identification number. For a non-U.S. person, the rule accepts one or more of: "a taxpayer identification number; passport number and country of issuance, alien identification card number; or number and country of issuance of any other government-issued document evidencing nationality or residence and bearing a photograph or similar safeguard" (FDIC, 2024, quoting 31 CFR 1020.220).

**Read the list again for what is missing.** The rule does not say driver's license. It does not say Social Security number. It does not say state ID. A foreign passport is on the list, in the rule's own words, for a person who is not a U.S. person.

**Two cautions, and both matter.** First, the rule is a **floor**, not a ceiling: a bank may ask for more than the rule requires, and it may decline an application for its own reasons. Knowing the rule does not entitle you to an account. Second, the rule is strict where it is strict: the FDIC's advisory says the rule "does not allow for an abbreviated collection of any data element", so the full taxpayer identification number is required before opening, not later (FDIC, 2024).

**And collecting is not the same act as verifying.** The rule requires the bank to collect those four items and, separately, to have risk-based procedures to verify identity, which may be documentary, non-documentary, or both. That is why one bank asks for two physical documents and another asks you questions drawn from public records.

**Why this gate is worth a lesson.** In the FDIC's 2023 national survey, read on **28 August 2026**, **13.0 percent** of unbanked households cited not having the personal identification required to open an account as **a** reason, and **5.1 percent** gave it as their **main** reason. Split by history, the figure separates sharply: among households that had **never** been banked, **20.4 percent** cited it, against **4.8 percent** of households that had been banked before (FDIC, 2024).

**That split is the finding.** The identity gate falls almost entirely on people who have never been through the door. Somebody already inside the system has, by definition, already cleared it.

:::reveal What four items must a bank collect before opening an account under 31 CFR 1020.220? ||| Name, date of birth for an individual, address, and identification number.

:::reveal Does the Customer Identification Program rule require a driver's license? ||| No. It requires an identification number, which for a U.S. person must be a taxpayer identification number. A driver's license appears nowhere in the requirement.

:::reveal Why does the identification reason for being unbanked split so sharply by banking history? ||| Because anyone who has held an account already cleared the gate. In 2023 it was cited by 20.4 percent of never-banked unbanked households against 4.8 percent of previously banked ones.

## Vocabulary
- **Customer Identification Program rule**: the anti-money-laundering regulation at 31 CFR 1020.220 that sets what a bank must collect from a customer before opening an account.
- **Taxpayer identification number**: the identification number the rule requires from a U.S. person, a category that includes both a Social Security number and an individual taxpayer identification number.
- **Documentary and non-documentary verification**: the two families of method a bank may use to confirm an identity, which is why different banks ask for different things.
- **Never banked**: the FDIC's category for an unbanked household in which no one has ever held an account, as distinct from a household that had one and lost it.
- **A floor, not a ceiling**: the way to read this rule, since a bank may require more than the regulation does and may decline an applicant who satisfies it.

## Sources
Federal Deposit Insurance Corporation. (2024, March). *Collecting identifying information required under the Customer Identification Program rule* (FIL-15-2024). https://www.fdic.gov/news/financial-institution-letters/2024/fil24015a.pdf

Federal Deposit Insurance Corporation. (2024, November). *2023 FDIC national survey of unbanked and underbanked households*. https://www.fdic.gov/household-survey`,
    },
    {
      slug: "the-fee-schedule-is-a-document",
      title: "3 · The fee schedule is a document you can demand",
      section: "Section 1 · What an account is, and what it costs",
      body: `A bank account has a price. The price is written down, in a document, and a federal regulation requires the bank to give you that document. Most people never ask for it.

**The regulation is Truth in Savings, 12 CFR part 1030.** Section 1030.4(a)(1) states that "A depository institution shall provide account disclosures to a consumer before an account is opened or a service is provided, whichever is earlier." Section 1030.4(a)(2) adds five words that are the most useful in this course: "A depository institution shall provide account disclosures to a consumer **upon request**."

**Read that as an instruction rather than as a rule about banks.** You may walk into an institution where you hold nothing, ask for the account disclosures for an account you have not opened, and by regulation receive them. You may then do the same at a second institution and compare two documents rather than two advertisements.

**And the regulation says what has to be in them.** Section 1030.4(b)(4) requires disclosure of "the amount of any fee that may be imposed in connection with the account (or an explanation of how the fee will be determined) and the conditions under which the fee may be imposed."

**Those last eight words are the ones to hold.** Not just the number, but the conditions. A monthly maintenance fee of a given amount tells you very little on its own. The condition under which it is waived tells you almost everything.

**Because a minimum balance is a price, not a rule.** An account advertised as free with a balance above some threshold is one account sold at two prices, and the sorting variable is how much money you have. Somebody who keeps a comfortable cushion pays nothing. Somebody whose balance dips below the line in a bad week pays the fee, and they pay it in the week they could least afford it. Nothing about that is hidden or unusual. It is simply a price structure, and it runs in the direction the household can least absorb.

**This is not a small effect.** In the FDIC's 2023 survey, read on **28 August 2026**, "Don't have enough money to meet minimum balance requirements" was cited by **42.3 percent** of unbanked households, the most cited reason of any offered (FDIC, 2024).

**What to compare, when you have two disclosures side by side.** The monthly maintenance fee and every listed way to waive it. The minimum opening deposit. The overdraft and non-sufficient-funds fee, and how many can be charged in a single day. The fee for using another institution's ATM. Any fee for a paper statement, for dormancy, or for closing the account soon after opening it.

${NOT_ADVICE}

**One caution about the word free.** An account can be free at one balance and expensive at another without anyone lying to you, and the disclosure is where the difference lives. Reading it is not distrust. It is the ordinary use of a document written for you.

:::reveal Under 12 CFR 1030.4, when must a depository institution provide account disclosures? ||| Before an account is opened or a service is provided, whichever is earlier, and also upon request.

:::reveal What does 1030.4(b)(4) require beyond the amount of a fee? ||| The conditions under which the fee may be imposed, which is where a balance waiver lives.

:::reveal In what sense is a minimum balance requirement a price rather than a rule? ||| It sells the same account at two prices sorted by how much money the customer has, so the fee lands on the lowest balances and not on the highest.

## Vocabulary
- **Truth in Savings**: the disclosure regime at 12 CFR part 1030 governing what a depository institution must tell a consumer about a deposit account.
- **Account disclosures**: the document Truth in Savings requires, containing fees, the conditions under which they may be imposed, and the account's terms.
- **Minimum balance requirement**: a threshold below which a monthly fee applies, which functions as a price charged to the smallest balances.
- **Maintenance fee waiver**: the stated condition that removes a monthly fee, and the single most informative line in most account disclosures.
- **Non-sufficient funds fee**: a charge for a transaction the institution declines for lack of money, distinct from an overdraft fee, which is charged when it pays the transaction anyway.

## Sources
Consumer Financial Protection Bureau. (n.d.). *12 CFR 1030.4 - Account disclosures*. https://www.consumerfinance.gov/rules-policy/regulations/1030/4/

Federal Deposit Insurance Corporation. (2024, November). *2023 FDIC national survey of unbanked and underbanked households*. https://www.fdic.gov/household-survey`,
    },
    {
      slug: "quiz-what-an-account-is",
      title: "4 · Knowledge check: the account, the gate, and the price",
      section: "Section 1 · What an account is, and what it costs",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What does a depositor actually hold after money is deposited at a bank?",
            options: ["A claim on the bank", "Physical custody of the same currency notes, held separately in the depositor's name until withdrawn", "A share of ownership in the bank proportional to the size of the balance held", "A federally issued instrument that can be redeemed at any other insured institution"],
            correctIndex: 0,
            explanation: "The money becomes the bank's property and the depositor holds the bank's promise to pay, which is why the institution's failure is a real event rather than an abstraction.",
            sourceLessonSlug: "the-deposit-contract",
          },
          {
            prompt: "Why can a bank lend out a deposit without asking the depositor?",
            options: ["The money is the bank's", "Because deposit insurance transfers legal title to the money from the depositor to the FDIC at the moment of deposit", "Because federal law grants an implied lending licence over the first fifty per cent of any consumer balance", "Because the depositor signs a separate lending authorisation at account opening in every state"],
            correctIndex: 0,
            explanation: "A deposit transfers the money to the bank and leaves the customer with a claim, so lending it out is the bank using its own asset.",
            sourceLessonSlug: "the-deposit-contract",
          },
          {
            prompt: "Deposit insurance is counted per depositor, per insured institution, and per what third thing?",
            options: ["Account ownership category", "Calendar year, so unused coverage from a prior year cannot be carried forward into the next one", "Branch location, so two accounts at two branches of one bank are insured separately", "Deposit product type, so a savings balance and a checking balance are each covered in full"],
            correctIndex: 0,
            explanation: "Single, joint, certain trust and certain retirement holdings are different ownership categories, and each is counted separately at the same institution.",
            sourceLessonSlug: "the-deposit-contract",
          },
          {
            prompt: "Two people hold one joint account. How does deposit insurance treat them?",
            options: ["As two depositors", "As one depositor, because a single account number can only ever support a single insured claim", "As one depositor unless they file a joint-coverage election with the FDIC before a failure", "As two depositors only when the account is held at a credit union rather than at a bank"],
            correctIndex: 0,
            explanation: "The per-depositor axis counts people, not accounts, which is why a joint account is covered differently from a single one.",
            sourceLessonSlug: "the-deposit-contract",
          },
          {
            prompt: "What did the FDIC state as the standard coverage amount when this course was written on 28 August 2026?",
            options: ["$250,000", "$100,000, the figure that applied before the financial crisis and that the FDIC restored in stages", "$500,000, doubled from the earlier level for accounts held at any single insured institution", "$1,250,000, the aggregate ceiling that applies across every ownership category combined"],
            correctIndex: 0,
            explanation: "The figure is dated in the lesson on purpose, because a dollar cap is a number regulators and Congress can change and the structure around it is what stays stable.",
            sourceLessonSlug: "the-deposit-contract",
          },
          {
            prompt: "Which federal body insures share accounts at federally insured credit unions?",
            options: ["The NCUA", "The Federal Deposit Insurance Corporation, which covers banks and credit unions under one combined insurance fund", "The Consumer Financial Protection Bureau, which took over share insurance functions under the Dodd-Frank Act", "The Federal Reserve Board, through the deposit facility it operates for member institutions"],
            correctIndex: 0,
            explanation: "The National Credit Union Administration runs the National Credit Union Share Insurance Fund, which the agency describes as backed by the full faith and credit of the United States.",
            sourceLessonSlug: "the-deposit-contract",
          },
          {
            prompt: "What is the name of the fund that insures credit union share accounts?",
            options: ["The National Credit Union Share Insurance Fund", "The Federal Savings and Loan Insurance Corporation, which was created for thrift institutions and now covers credit unions", "The Deposit Insurance Fund, the same fund that stands behind insured bank deposits", "The Cooperative Members Protection Fund, capitalised by member share purchases at each credit union"],
            correctIndex: 0,
            explanation: "The NCUA administers it, and the agency states the coverage as $250,000, read on 28 August 2026.",
            sourceLessonSlug: "the-deposit-contract",
          },
          {
            prompt: "Which of these does the FDIC list as an INSURED deposit product?",
            options: ["A certificate of deposit", "A municipal security bought through the bank's own investment desk and held in the customer's name", "A mutual fund sold at the branch by an affiliated broker under the same brand", "An annuity contract issued by an insurer with which the bank has a marketing agreement"],
            correctIndex: 0,
            explanation: "The FDIC lists time deposits such as certificates of deposit alongside checking, savings and money market deposit accounts.",
            sourceLessonSlug: "the-deposit-contract",
          },
          {
            prompt: "Which of these does the FDIC list as NOT insured?",
            options: ["Safe deposit box contents", "A negotiable order of withdrawal account opened at an insured bank branch", "A cashier's check issued by the insured bank itself and still outstanding", "A money market deposit account funded by a direct payroll deposit"],
            correctIndex: 0,
            explanation: "The box is a rental of space, not a deposit, so nothing inside it is a claim on the bank in the way a balance is.",
            sourceLessonSlug: "the-deposit-contract",
          },
          {
            prompt: "Why are United States Treasury bills, bonds and notes not covered by deposit insurance?",
            options: ["They are not deposits", "Because the Treasury explicitly waives federal insurance on its own instruments when they are held by consumers", "Because their maturity exceeds the maximum term the insurance fund is permitted to cover", "Because they are held in book-entry form and only physical certificates qualify for coverage"],
            correctIndex: 0,
            explanation: "Deposit insurance covers the institution failing rather than an asset losing value, and a Treasury security is a claim on the United States, not on the bank.",
            sourceLessonSlug: "the-deposit-contract",
          },
          {
            prompt: "What risk does deposit insurance actually cover?",
            options: ["The institution failing", "Any decline in the market value of assets a customer holds through the insured institution", "Losses a customer suffers from unauthorised transfers out of an insured account", "The failure of a borrower to repay a loan the insured institution made with deposited funds"],
            correctIndex: 0,
            explanation: "It is insurance on the promise, not on the outcome, which is exactly why a Treasury security sits outside it while being extremely safe.",
            sourceLessonSlug: "the-deposit-contract",
          },
          {
            prompt: "If an insured bank fails, what must a covered depositor do to obtain insured funds?",
            options: ["Nothing, coverage is automatic", "Submit a proof-of-claim form to the FDIC within sixty days of the closing announcement", "Apply to the receiver and wait for the liquidation of the failed institution to conclude", "Open a replacement account at another insured bank and request an interbank transfer"],
            correctIndex: 0,
            explanation: "The FDIC states that coverage is automatic and there is nothing to apply for, which is a large part of why the system holds during a panic.",
            sourceLessonSlug: "the-deposit-contract",
          },
          {
            prompt: "Which course in this catalog teaches the credit union as an entity, one member one vote?",
            options: ["Cooperatives", "Financing Without Access, which covers building and loan associations and fraternal societies at length", "Banking & Money When You Live Abroad, which covers the non-resident account case", "Surplus Funds Basics, which covers county tax sale surplus and asset recovery"],
            correctIndex: 0,
            explanation: "This course deliberately does not re-teach the co-op form, and treats a credit union simply as a second kind of insured institution.",
            sourceLessonSlug: "the-deposit-contract",
          },
          {
            prompt: "Why does this lesson print the insurance cap with the day it was read?",
            options: ["The cap can change", "Because the FDIC publishes a different cap for each of the fifty states and the reader must select their own", "Because the figure is proprietary to the FDIC and may only be reproduced with a retrieval date", "Because the cap is recalculated every quarter against an index the FDIC publishes"],
            correctIndex: 0,
            explanation: "The three-way counting structure is stable and worth learning; the dollar figure is a value owned by an external system, so it is dated rather than asserted.",
            sourceLessonSlug: "the-deposit-contract",
          },
          {
            prompt: "A person holds accounts at two different FDIC-insured banks. How does coverage apply?",
            options: ["Separately at each bank", "Combined across both banks, because the per-depositor limit follows the person rather than the institution", "Only at the bank where the older of the two accounts was opened first", "Combined, unless the depositor files a separate-institution election with each bank"],
            correctIndex: 0,
            explanation: "Per insured institution is one of the three axes, so the same person is covered at each bank rather than once across all of them.",
            sourceLessonSlug: "the-deposit-contract",
          },
          {
            prompt: "What is an ownership category, in deposit insurance?",
            options: ["The legal capacity an account is held in", "The product family the account belongs to, such as checking, savings or a certificate of deposit", "The branch or region of the institution at which the account was originally opened", "The tax status the depositor claims on the account's annual interest reporting form"],
            correctIndex: 0,
            explanation: "Single, joint, certain trusts and certain retirement holdings are different capacities, and coverage is counted separately in each at the same bank.",
            sourceLessonSlug: "the-deposit-contract",
          },
          {
            prompt: "What does the lesson call the balance shown on a bank customer's screen?",
            options: ["A number the bank owes you", "A record of the specific currency the bank is holding in reserve on the customer's behalf", "A federally guaranteed instrument that can be presented for payment at any insured institution", "An equity position in the bank that rises and falls with the institution's own results"],
            correctIndex: 0,
            explanation: "The deposit contract makes the customer a creditor of the bank, and the balance is the size of that debt.",
            sourceLessonSlug: "the-deposit-contract",
          },
          {
            prompt: "Which of these is listed by the FDIC as an insured deposit product?",
            options: ["A money market deposit account", "A money market mutual fund purchased through the bank's brokerage affiliate", "A life insurance policy sold to the customer at the branch", "A municipal bond held in a custody account at the same institution"],
            correctIndex: 0,
            explanation: "A money market deposit account is a deposit; a money market mutual fund is an investment and appears on the not-insured side.",
            sourceLessonSlug: "the-deposit-contract",
          },
          {
            prompt: "Which of these bank-issued items does the FDIC list as covered?",
            options: ["A cashier's check", "A stock certificate held in the bank's vault on behalf of the customer who bought it", "An annuity contract marketed under the bank's own brand at the teller line", "A United States savings bond purchased through the bank's payroll programme"],
            correctIndex: 0,
            explanation: "Cashier's checks, money orders and other official items issued by an insured bank appear in the FDIC's list of insured products.",
            sourceLessonSlug: "the-deposit-contract",
          },
          {
            prompt: "What makes a bank failure a real event in a depositor's life rather than an abstraction?",
            options: ["The depositor is a creditor", "The depositor's currency is physically stored at the failed branch and must be recovered from it", "The depositor owns shares in the bank whose value falls to zero on the day it closes", "The depositor's account number is reissued by the regulator to a different institution"],
            correctIndex: 0,
            explanation: "A deposit is a claim on the bank, so if the bank cannot pay, the claim is what is at risk, which is the gap deposit insurance was built to close.",
            sourceLessonSlug: "the-deposit-contract",
          },
          {
            prompt: "Which insurance structure does the lesson tell the learner to memorise, and which to re-check?",
            options: ["Memorise the structure, re-check the cap", "Memorise the cap, re-check the structure, because the counting rules are revised far more often than the dollar figure", "Memorise both, because neither has changed since the National Credit Union Share Insurance Fund was created", "Re-check both every quarter against the Federal Register, since each is republished on a quarterly cycle"],
            correctIndex: 0,
            explanation: "Per depositor, per institution, per ownership category is durable; the dollar amount is an externally owned value that gets a retrieval date.",
            sourceLessonSlug: "the-deposit-contract",
          },
          {
            prompt: "Which regulation sets what a bank must collect before opening an account?",
            options: ["31 CFR 1020.220", "12 CFR 1030.4, the Truth in Savings section governing when account disclosures must be given", "12 CFR 1005.17, the section requiring an opt-in before certain overdraft fees are charged", "15 U.S.C. 1681m, which sets out what a user of a consumer report must say when it takes adverse action"],
            correctIndex: 0,
            explanation: "It is the Customer Identification Program rule, an anti-money-laundering requirement rather than a consumer-protection one, which explains its shape.",
            sourceLessonSlug: "the-identity-gate",
          },
          {
            prompt: "Which four items must a bank collect from a customer before opening an account?",
            options: ["Name, date of birth, address, identification number", "Name, employer, monthly income, and the source of the funds used to make the opening deposit", "Name, photograph, two references, and a signature card witnessed by a branch employee", "Name, prior banking history, credit score, and a statement of the intended use of the account"],
            correctIndex: 0,
            explanation: "The FDIC's advisory quotes the rule as requiring these at a minimum, with date of birth applying to an individual.",
            sourceLessonSlug: "the-identity-gate",
          },
          {
            prompt: "For a U.S. person, what must the identification number be?",
            options: ["A taxpayer identification number", "A Social Security number specifically, since no other number satisfies the rule for a U.S. person", "A state-issued driver's licence number, or a state identification card number where no licence exists", "Any government-issued number that appears on a document bearing the applicant's photograph"],
            correctIndex: 0,
            explanation: "A taxpayer identification number covers both a Social Security number and an individual taxpayer identification number, which is why the ITIN qualifies.",
            sourceLessonSlug: "the-identity-gate",
          },
          {
            prompt: "Does the Customer Identification Program rule name a driver's licence as a requirement?",
            options: ["No", "Yes, it names a driver's licence first among the acceptable documents for a U.S. person", "Yes, but only where the applicant cannot produce a passport or a military identification card", "Yes for an in-branch application and no for one submitted electronically"],
            correctIndex: 0,
            explanation: "The rule names an identification number, not a specific card, which is why so much of what people believe is required turns out to be the bank's own policy.",
            sourceLessonSlug: "the-identity-gate",
          },
          {
            prompt: "Which of these does the rule expressly accept from a NON-U.S. person?",
            options: ["A passport number and country of issuance", "A signed affidavit of identity witnessed by two account holders in good standing at the same bank", "A letter from a consulate confirming the applicant's residential address in the United States", "A utility bill in the applicant's name issued within the preceding thirty days"],
            correctIndex: 0,
            explanation: "The rule lists a taxpayer identification number, a passport number with country of issuance, an alien identification card number, or another government-issued document evidencing nationality or residence and bearing a photograph or similar safeguard.",
            sourceLessonSlug: "the-identity-gate",
          },
          {
            prompt: "What does the FDIC's advisory say about collecting a partial taxpayer identification number?",
            options: ["It is not allowed", "It is allowed for accounts opened remotely, provided the remainder is collected within ten business days", "It is allowed where the applicant is a returning customer of the same institution", "It is allowed when a third party has already verified the number under its own programme"],
            correctIndex: 0,
            explanation: "The advisory states the rule does not allow an abbreviated collection of any data element, so the full number is required before the account is opened.",
            sourceLessonSlug: "the-identity-gate",
          },
          {
            prompt: "How does the rule treat collecting information and verifying identity?",
            options: ["As two separate requirements", "As one combined step that must be completed with original physical documents in a branch", "As a single requirement satisfied whenever the applicant is already a customer of an affiliate", "As alternatives, so a bank may verify identity instead of collecting the four data elements"],
            correctIndex: 0,
            explanation: "Collection of the four items is required, and separately the bank must have risk-based verification procedures that may be documentary, non-documentary, or both.",
            sourceLessonSlug: "the-identity-gate",
          },
          {
            prompt: "Why does one bank ask for two physical documents while another asks questions from public records?",
            options: ["Verification may be documentary or not", "Because the rule assigns different verification methods according to the size of the opening deposit", "Because state law rather than federal law governs verification and the two states differ", "Because a bank with a federal charter must use documents while a state-chartered one may not"],
            correctIndex: 0,
            explanation: "The rule requires risk-based procedures and permits documentary methods, non-documentary methods, or a combination, so banks land in different places.",
            sourceLessonSlug: "the-identity-gate",
          },
          {
            prompt: "Knowing the Customer Identification Program rule entitles an applicant to what?",
            options: ["Nothing, it is a floor", "An account at any insured institution, provided the four required data elements are produced", "A written explanation from the bank whenever an application is declined for identity reasons", "A second review of the application by the bank's compliance department on request"],
            correctIndex: 0,
            explanation: "A bank may ask for more than the rule requires and may decline for its own reasons, so the rule tells you the minimum it must collect, not what it may refuse you for.",
            sourceLessonSlug: "the-identity-gate",
          },
          {
            prompt: "In the FDIC's 2023 survey, what share of unbanked households cited lacking the personal identification required to open an account?",
            options: ["13.0 percent", "42.3 percent, which was the share citing a lack of money to meet minimum balance requirements", "36.0 percent, which was the share citing a general lack of trust in banks as a reason", "20.4 percent, which was the share among never-banked households specifically rather than all unbanked ones"],
            correctIndex: 0,
            explanation: "13.0 percent cited it as a reason and 5.1 percent gave it as their main reason, read from the 2023 report on 28 August 2026.",
            sourceLessonSlug: "the-identity-gate",
          },
          {
            prompt: "How did the identification reason split between never-banked and previously banked households in 2023?",
            options: ["20.4 percent against 4.8 percent", "13.0 percent against 5.1 percent, which are the overall cited and main-reason figures rather than a split", "42.3 percent against 40.1 percent, which compare the 2023 and 2021 minimum-balance figures", "47.4 percent against 52.6 percent, which are the shares previously banked and never banked overall"],
            correctIndex: 0,
            explanation: "Never-banked households cited it at 20.4 percent against 4.8 percent for households that had held an account before, which is the sharpest split among the reasons.",
            sourceLessonSlug: "the-identity-gate",
          },
          {
            prompt: "What does that never-banked split show about the identity gate?",
            options: ["It falls on people who never got in", "It falls hardest on households that closed an account recently and are trying to open a replacement", "It falls evenly across the unbanked population regardless of any prior banking history", "It falls mainly on households that hold an account at a credit union rather than at a bank"],
            correctIndex: 0,
            explanation: "Anyone already inside the system has by definition already cleared it, so the barrier is concentrated on first-time applicants.",
            sourceLessonSlug: "the-identity-gate",
          },
          {
            prompt: "What kind of rule is the Customer Identification Program rule, in origin?",
            options: ["An anti-money-laundering rule", "A consumer-protection rule written to guarantee fair access to deposit accounts", "A tax-administration rule enforced by the Internal Revenue Service against account holders", "A bank-safety rule setting the minimum documentation for a loan file rather than a deposit account"],
            correctIndex: 0,
            explanation: "Its origin explains its shape: it is concerned with knowing who a customer is, not with whether the customer can get an account.",
            sourceLessonSlug: "the-identity-gate",
          },
          {
            prompt: "Under the rule, which item is required specifically 'for an individual'?",
            options: ["Date of birth", "A residential street address, as distinct from the principal place of business used by an entity", "A taxpayer identification number, which entities are not required to supply before opening", "A photograph, which is waived for accounts opened on behalf of a business"],
            correctIndex: 0,
            explanation: "The rule requires name, date of birth for an individual, address and identification number, and the date-of-birth element is the one qualified that way.",
            sourceLessonSlug: "the-identity-gate",
          },
          {
            prompt: "Does an individual taxpayer identification number satisfy the identification-number requirement for a U.S. person?",
            options: ["Yes", "No, because only a Social Security number is a taxpayer identification number under the rule", "Only if the applicant also produces a foreign passport with a country of issuance", "Only for a joint account where the other holder supplies a Social Security number"],
            correctIndex: 0,
            explanation: "A taxpayer identification number is the category the rule names, and it includes both a Social Security number and an ITIN.",
            sourceLessonSlug: "the-identity-gate",
          },
          {
            prompt: "Which regulation requires a bank to hand over account disclosures on request?",
            options: ["12 CFR 1030.4", "31 CFR 1020.220, the rule setting what identifying information must be collected before opening", "12 CFR 1005.18, which sets the short form disclosure for prepaid accounts sold at retail", "15 U.S.C. 1681j, which governs a consumer's free annual file disclosure from a reporting agency"],
            correctIndex: 0,
            explanation: "Section 1030.4(a)(2) states that a depository institution shall provide account disclosures to a consumer upon request, which is what makes comparing two documents possible.",
            sourceLessonSlug: "the-fee-schedule-is-a-document",
          },
          {
            prompt: "Under 1030.4(a)(1), when must account disclosures be provided?",
            options: ["Before the account is opened", "Within thirty days of the first statement cycle in which a fee is actually charged", "At any time during the first year, provided the customer has not closed the account", "Only when the customer asks, since no automatic timing requirement exists in the section"],
            correctIndex: 0,
            explanation: "The section says before an account is opened or a service is provided, whichever is earlier.",
            sourceLessonSlug: "the-fee-schedule-is-a-document",
          },
          {
            prompt: "Beyond the amount of a fee, what does 1030.4(b)(4) require an institution to disclose?",
            options: ["The conditions under which it may be imposed", "The average amount collected from customers in that fee category over the previous year", "The proportion of the institution's revenue that the fee category represents in total", "A comparison against the same fee at the three nearest competing institutions"],
            correctIndex: 0,
            explanation: "The conditions are where a balance waiver lives, which is why the amount alone tells a reader very little.",
            sourceLessonSlug: "the-fee-schedule-is-a-document",
          },
          {
            prompt: "May a person request account disclosures for an account they have not opened, at an institution where they hold nothing?",
            options: ["Yes", "No, disclosures are provided only to existing customers of the institution", "Only after paying the institution's published research or documentation fee", "Only if the person first submits an application and is approved for the account"],
            correctIndex: 0,
            explanation: "Section 1030.4(a)(2) makes the disclosures available upon request, which is exactly what allows two documents to be compared side by side.",
            sourceLessonSlug: "the-fee-schedule-is-a-document",
          },
          {
            prompt: "In what sense is a minimum balance requirement a price rather than a rule?",
            options: ["It sells one account at two prices", "It sets the smallest deposit the law will permit an institution to accept for a consumer account", "It is a reserve the institution must hold against the account under federal banking regulation", "It is a floor set by the regulator below which an account must be closed automatically"],
            correctIndex: 0,
            explanation: "The same account is free above the threshold and carries a fee below it, so the sorting variable is how much money the customer has.",
            sourceLessonSlug: "the-fee-schedule-is-a-document",
          },
          {
            prompt: "Which household pays the monthly maintenance fee on a balance-waived account?",
            options: ["The one whose balance dips below the line", "The one that keeps a comfortable cushion, since larger balances carry proportionally larger servicing costs", "Every household equally, since the waiver applies only to accounts opened before a stated date", "Neither, because a balance waiver removes the fee for all holders of that account type"],
            correctIndex: 0,
            explanation: "The fee lands in the week the household could least absorb it, which is the direction that makes the structure worth naming.",
            sourceLessonSlug: "the-fee-schedule-is-a-document",
          },
          {
            prompt: "In the FDIC's 2023 survey, which reason for not having a bank account was cited most often?",
            options: ["Not enough money for the minimum balance", "A general distrust of banks, which was cited by a larger share than any other reason offered", "Inconvenient bank locations, which reflected the closure of branches over the preceding decade", "A lack of the personal identification required to open an account at an insured institution"],
            correctIndex: 0,
            explanation: "It was cited by 42.3 percent of unbanked households, more than any other reason on the list, read on 28 August 2026.",
            sourceLessonSlug: "the-fee-schedule-is-a-document",
          },
          {
            prompt: "What share of unbanked households cited a lack of money to meet minimum balance requirements in 2023?",
            options: ["42.3 percent", "36.0 percent, which was the share citing distrust of banks as a reason", "23.3 percent, which was the share giving the minimum balance as their MAIN reason rather than as a reason", "30.7 percent, which was the share citing that bank account fees are too high"],
            correctIndex: 0,
            explanation: "42.3 percent cited it as a reason; 23.3 percent gave it as the single main reason.",
            sourceLessonSlug: "the-fee-schedule-is-a-document",
          },
          {
            prompt: "Which of these belongs on a list of things to compare between two account disclosures?",
            options: ["Every listed way to waive the monthly fee", "The institution's total assets and its most recent published return-on-assets ratio", "The number of branches the institution operates within the customer's home county", "The interest rate the institution charges on its own consumer lending products"],
            correctIndex: 0,
            explanation: "The waiver conditions are what turn a stated fee into an actual price for a particular household.",
            sourceLessonSlug: "the-fee-schedule-is-a-document",
          },
          {
            prompt: "What is the difference between a non-sufficient funds fee and an overdraft fee?",
            options: ["One declines the transaction, the other pays it", "One is charged by banks and the other only by credit unions under their own share rules", "One is capped by federal regulation and the other is set entirely by the institution", "One applies to debit card purchases and the other applies only to paper checks"],
            correctIndex: 0,
            explanation: "A non-sufficient funds fee is charged when the institution declines a transaction for lack of money; an overdraft fee is charged when it pays the transaction anyway.",
            sourceLessonSlug: "the-fee-schedule-is-a-document",
          },
          {
            prompt: "Why does the lesson say reading an account disclosure is not an act of distrust?",
            options: ["It is a document written for you", "Because the institution is required to review the disclosure with the customer line by line before opening", "Because a customer who declines to read it forfeits the right to dispute a fee later", "Because the regulator audits the disclosure and certifies its accuracy before publication"],
            correctIndex: 0,
            explanation: "The regulation requires the institution to produce it, so obtaining one is the ordinary use of a document rather than a favour.",
            sourceLessonSlug: "the-fee-schedule-is-a-document",
          },
          {
            prompt: "An account is advertised as free. What does the disclosure tell you that the advertisement does not?",
            options: ["The conditions", "The institution's own cost of providing the account and the margin it earns on the balance", "Whether the account is insured by the FDIC or by the National Credit Union Administration", "The number of other customers at the institution who currently hold the same account"],
            correctIndex: 0,
            explanation: "An account can be free at one balance and expensive at another without anyone lying, and 1030.4(b)(4) puts the conditions in the document.",
            sourceLessonSlug: "the-fee-schedule-is-a-document",
          },
          {
            prompt: "Which fee is worth checking specifically for how many can be charged in one day?",
            options: ["The overdraft fee", "The monthly maintenance fee, since some institutions apply it more than once in a single cycle", "The minimum opening deposit, which some institutions collect in instalments across a month", "The annual percentage yield, which changes daily with the institution's own funding costs"],
            correctIndex: 0,
            explanation: "The per-item structure is what turns a single short day into several charges, which is why the daily count belongs on the comparison list.",
            sourceLessonSlug: "the-fee-schedule-is-a-document",
          },
          {
            prompt: "What does this course refuse to tell a learner, and say so in prose in three separate places?",
            options: ["What to do with their money", "Which federal agency insures the account they hold at their own institution", "How the Customer Identification Program rule applies to a non-U.S. person opening an account", "What a bank must disclose about a fee before the account is opened"],
            correctIndex: 0,
            explanation: "It describes what institutions do and what documents they must hand you; it names no bank, product or amount as a recommendation.",
            sourceLessonSlug: "the-fee-schedule-is-a-document",
          },
          {
            prompt: "Which part of the deposit-insurance figure did the lesson say to re-check rather than memorise?",
            options: ["The dollar cap", "The three-way counting rule, since ownership categories are redefined in most years", "The list of insured deposit products, which the FDIC revises with each banking cycle", "The automatic nature of coverage, which applies only in some receiverships"],
            correctIndex: 0,
            explanation: "The structure is durable and the number is an externally owned value, so the lesson dates it and tells the reader to confirm it.",
            sourceLessonSlug: "the-deposit-contract",
          },
          {
            prompt: "What is the practical use of knowing that disclosures are available before opening?",
            options: ["You can compare two documents", "You can require the institution to match a competitor's stated fee schedule in writing", "You can open the account and cancel within a statutory three-day rescission window", "You can require the institution to waive any fee it failed to mention in its advertising"],
            correctIndex: 0,
            explanation: "Comparing two required disclosures is a comparison of terms rather than of advertisements, which is the only comparison that survives contact with a fee schedule.",
            sourceLessonSlug: "the-fee-schedule-is-a-document",
          },
          {
            prompt: "Why does the lesson call the identity rule 'the first gate'?",
            options: ["It runs before any account exists", "Because it is the older of the two rules and was written before the Fair Credit Reporting Act", "Because it applies to every applicant while the second gate applies only to joint accounts", "Because clearing it guarantees the applicant will be approved for the account"],
            correctIndex: 0,
            explanation: "It governs whether an account can be opened at all, and a second gate, the screening report, decides whether the institution will open one.",
            sourceLessonSlug: "the-identity-gate",
          },
          {
            prompt: "What is a time deposit?",
            options: ["A deposit committed for a fixed term", "A deposit that may only be withdrawn during the institution's published branch hours", "A deposit whose insurance coverage lapses after a fixed number of years without activity", "A deposit made after the institution's daily cut-off and posted on the following business day"],
            correctIndex: 0,
            explanation: "A certificate of deposit is the common example, and it is insured on the same terms as a checking or savings balance.",
            sourceLessonSlug: "the-deposit-contract",
          },
          {
            prompt: "The FDIC lists crypto assets on which side of its insurance line?",
            options: ["Not insured", "Insured, on the same terms as a money market deposit account at the institution", "Insured only when held in custody by the bank rather than by an affiliated exchange", "Insured up to half the standard maximum amount, under a separate ownership category"],
            correctIndex: 0,
            explanation: "Crypto assets appear in the FDIC's list of products that deposit insurance does not cover.",
            sourceLessonSlug: "the-deposit-contract",
          },
          {
            prompt: "A learner wants to know their own bank's overdraft fee. Where does this section tell them to look?",
            options: ["The account disclosures", "The bank's most recent quarterly call report filed with its federal supervisor", "The FDIC's published survey of household use of banking services", "The Customer Identification Program procedures the bank maintains in writing"],
            correctIndex: 0,
            explanation: "Truth in Savings requires the fee and the conditions under which it may be imposed to appear there, and the document is available on request.",
            sourceLessonSlug: "the-fee-schedule-is-a-document",
          },
          {
            prompt: "Which of these is NOT one of the three axes deposit insurance is counted along?",
            options: ["Per deposit product", "Per depositor, which counts people rather than accounts and covers joint holders separately", "Per insured institution, which is why accounts at two banks are covered at each", "Per account ownership category, which separates single, joint and certain trust holdings"],
            correctIndex: 0,
            explanation: "A checking balance and a savings balance in the same ownership category at the same bank are added together, not covered separately.",
            sourceLessonSlug: "the-deposit-contract",
          },
          {
            prompt: "Why does the identity rule's origin matter for reading it?",
            options: ["It was not written to give you access", "Because an anti-money-laundering rule is enforced by the Treasury rather than by a banking regulator", "Because it applies only to institutions above a stated asset threshold", "Because it expires and must be re-adopted by the Treasury every five years"],
            correctIndex: 0,
            explanation: "It exists so a bank knows who its customer is, which is why nothing in it obliges the bank to open an account for anyone.",
            sourceLessonSlug: "the-identity-gate",
          },
          {
            prompt: "How many pieces of identifying information does the rule require at a minimum?",
            options: ["Four", "Two, being the applicant's legal name and a government-issued photographic document", "Six, adding employment status and the source of the opening deposit to the four core items", "Three, since date of birth is required only when the applicant is opening a joint account"],
            correctIndex: 0,
            explanation: "Name, date of birth for an individual, address, and identification number, collected before the account is opened.",
            sourceLessonSlug: "the-identity-gate",
          },
          {
            prompt: "What is the relationship between a bank's own documentation policy and the federal rule?",
            options: ["The policy can be stricter", "The policy must match the rule exactly, since deviation is a supervisory violation", "The policy may waive any element of the rule for an existing customer of the institution", "The policy governs verification and the rule governs nothing that happens in a branch"],
            correctIndex: 0,
            explanation: "The rule is a floor, so a bank may ask for more than it requires, which is why so much of what feels legally required is institutional practice.",
            sourceLessonSlug: "the-identity-gate",
          },
          {
            prompt: "Which of these is the clearest single reading of the Truth in Savings disclosure requirement?",
            options: ["You can ask for the price before you buy", "The institution must publish its fees in a newspaper of general circulation each year", "The regulator sets the maximum fee an institution may charge on a consumer account", "A fee not mentioned in advertising cannot be charged to a consumer account"],
            correctIndex: 0,
            explanation: "Disclosures are required before opening and on request, so the price of the product is obtainable before any commitment is made.",
            sourceLessonSlug: "the-fee-schedule-is-a-document",
          },
          {
            prompt: "What is the underlying reason this course dates every external figure in the lesson text?",
            options: ["The figures move", "Because the publishers require a retrieval date to be printed alongside any reproduced statistic", "Because the course is reviewed annually and the dates mark which lessons were revised", "Because the FDIC restates its survey figures each quarter as new call reports arrive"],
            correctIndex: 0,
            explanation: "Fee schedules, survey rates and agency rules all change, so a figure without a date is a claim the reader cannot check or refresh.",
            sourceLessonSlug: "the-fee-schedule-is-a-document",
          },
          {
            prompt: "What did the lesson say about a household whose balance is always comfortably above the waiver threshold?",
            options: ["It pays nothing", "It pays a higher fee, because larger balances cost the institution more to service and insure", "It pays the same fee as every other household holding that account type", "It pays a reduced fee scaled to the amount by which the balance exceeds the threshold"],
            correctIndex: 0,
            explanation: "The waiver removes the fee entirely above the threshold, which is precisely what makes the structure a price sorted by balance.",
            sourceLessonSlug: "the-fee-schedule-is-a-document",
          },
          {
            prompt: "Which of these does the lesson list as worth checking in a disclosure alongside the maintenance fee?",
            options: ["Any dormancy fee", "The institution's deposit insurance premium and the assessment rate it pays to the fund", "The interest the institution earns by lending the customer's balance to other borrowers", "The compensation of the branch employee who opens the account"],
            correctIndex: 0,
            explanation: "Dormancy, paper-statement and early-closure fees are the ones that surface after the account stops being used the way the customer expected.",
            sourceLessonSlug: "the-fee-schedule-is-a-document",
          },
          {
            prompt: "A customer holds a single account and a joint account at the same insured bank. How is coverage counted?",
            options: ["Separately, in two ownership categories", "Together, because both accounts sit at the same insured institution and share one limit", "Separately only if the two accounts were opened in different calendar years", "Together, unless the customer designates one account as primary with the institution"],
            correctIndex: 0,
            explanation: "Single and joint are different ownership categories, and the per-category axis counts them apart at the same bank.",
            sourceLessonSlug: "the-deposit-contract",
          },
          {
            prompt: "What does this section identify as the two gates in front of a bank account?",
            options: ["Identity and screening", "Income and residency, both of which an institution must verify before opening a consumer account", "Deposit insurance and Truth in Savings, the two federal regimes governing consumer accounts", "The opening deposit and the monthly maintenance fee, the two prices of holding an account"],
            correctIndex: 0,
            explanation: "The identity rule decides whether an account can be opened at all; the screening report, taught later, decides whether the institution will open one.",
            sourceLessonSlug: "the-identity-gate",
          },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2 — Who has no account, and why they say so
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-survey-that-counts",
      title: "5 · The survey that counts them, and what it counts",
      section: "Section 2 · Who has no account, and why they say so",
      body: `Most claims about the unbanked come from somebody's guess. This course uses a federal survey instead, and the first job is to know what that survey actually measures.

**The instrument is the FDIC National Survey of Unbanked and Underbanked Households.** It has run **biennially since 2009**, in partnership with the U.S. Census Bureau, and it is fielded as a supplement to the Current Population Survey. The most recent survey was conducted in **June 2023**, "collecting responses from almost 30,000 households", and its report was published in **November 2024** (FDIC, 2024).

**Which edition you are reading matters, so this course names it.** The FDIC's own guidance is that "A new survey report is released every two years, in the fall of even-numbered years." The **2023 report is the most recent published edition as of 28 August 2026**, when this lesson was written. A 2025 survey has been fielded. When its report appears, the figures below are the previous wave, and you should read the new one rather than trusting these.

**Three categories, and they are defined precisely.** From the report itself:

- **Unbanked**: "no one in the household had a checking or savings account at a bank or credit union." In 2023 that was **4.2 percent of U.S. households, about 5.6 million households**.
- **Underbanked**: the household **had** an account "but in the past 12 months had used at least one of eight nonbank financial services", being three transaction services (nonbank money orders, check cashing, international remittances) and five alternatives to mainstream credit (rent-to-own, payday, pawn shop, auto title, and tax refund anticipation loans). In 2023 that was **14.2 percent, about 19.0 million households**.
- **Fully banked**: had an account and used none of those eight. In 2023, **81.6 percent, about 109.1 million households** (FDIC, 2024).

**Read the underbanked definition again, because it is easy to misuse.** Underbanked is not a measure of hardship or of being poorly served. It is defined by **behaviour**: a household that has a perfectly good account and sent one international remittance last year is counted underbanked. That is a defensible definition and it is not the one most people assume, so quoting the 14.2 percent without the definition attached is how a true number becomes a false claim.

**One methodological note the report makes itself, and it matters.** The 2023 underbanked and fully banked rates "are not directly comparable to those in 2021 because the question on tax refund anticipation loans was broadened". Excluding those loans, the report says, the underbanked rate would have been 13.6 percent in 2021 and 12.7 percent in 2023 (FDIC, 2024).

**That footnote is a lesson in itself.** A survey that changes a question changes its own series, and the honest ones say so in a footnote most readers skip. When you see a rate move, check whether the question moved first.

**The long trend, which is the least quoted finding.** The unbanked rate was **8.2 percent in 2011**, its highest since the survey began, and **4.2 percent in 2023**. It fell by almost half, corresponding to an additional 5.3 million banked households. About two thirds of that decline was associated with changes in households' socioeconomic circumstances, particularly rising income and education (FDIC, 2024).

:::reveal Who fields the FDIC household survey, and how often? ||| The FDIC with the U.S. Census Bureau, biennially since 2009, as a supplement to the Current Population Survey.

:::reveal What makes a household underbanked rather than unbanked? ||| It has a checking or savings account but used at least one of eight named nonbank financial services in the past 12 months.

:::reveal Why can the 2023 underbanked rate not be compared directly with 2021? ||| The tax refund anticipation loan question was broadened, so the series changed with the question. The report says so in its own footnote.

## Vocabulary
- **Unbanked household**: one in which no member holds a checking or savings account at a bank or credit union.
- **Underbanked household**: one that holds an account but used at least one of eight named nonbank financial services in the past year, a definition about behaviour rather than about hardship.
- **Fully banked household**: one that holds an account and used none of the eight nonbank services.
- **Current Population Survey supplement**: the vehicle the FDIC survey rides on, which is what gives it a nationally representative sample of nearly 30,000 households.
- **Series break**: what happens when a survey changes a question, making the new wave not directly comparable with the old one.

## Sources
Federal Deposit Insurance Corporation. (2024, November). *2023 FDIC national survey of unbanked and underbanked households*. https://www.fdic.gov/household-survey

Federal Deposit Insurance Corporation. (n.d.). *Household survey: Frequently asked questions*. https://www.fdic.gov/household-survey/frequently-asked-questions`,
    },
    {
      slug: "the-reasons-in-their-own-words",
      title: "6 · The reasons, in their own words",
      section: "Section 2 · Who has no account, and why they say so",
      body: `This is the part of the survey that makes speculation unnecessary. The FDIC asks unbanked households why, from a fixed list, and publishes what they say.

**How the question is actually built** matters for reading the answers. The survey instrument (question UB55) reads each reason and records yes or no, so a household can select several. Then a second question (UB60) is asked only of households that selected more than one, and it asks for **the main reason**. So each reason has two numbers: how many **cited** it, which can total well over 100 percent, and how many gave it as **the** reason, which totals 100.

**The 2023 results, read from Figure 1.8 on 28 August 2026** (cited, then main):

| Reason | Cited | Main |
|---|---|---|
| Don't have enough money to meet minimum balance requirements | 42.3% | 23.3% |
| Don't trust banks | 36.0% | 15.7% |
| Avoiding a bank gives more privacy | 33.9% | 5.1% |
| Bank account fees are too high | 30.7% | 8.9% |
| Bank account fees are too unpredictable | 29.3% | 1.2% |
| Banks do not offer needed products and services | 20.0% | 1.7% |
| Bank locations are inconvenient | 16.3% | 2.5% |
| Don't have personal identification required to open an account | 13.0% | 5.1% |
| Problems with past banking or credit history | 12.3% | 3.4% |
| Other reason | 22.0% | 18.1% |
| Did not select a reason | 15.0% | 15.0% |

**The headline finding is about money, not attitude.** The most cited reason and the most cited main reason are the same one, and it is a balance requirement. The FDIC also groups the three fee-and-balance reasons together and reports that **33.4 percent** of unbanked households gave one of them as their main reason (FDIC, 2024). One third of the unbanked population names the price of the product.

**The second finding is that unpredictability is separate from expense.** "Fees are too high" and "fees are too unpredictable" are different questions and got different answers: 30.7 percent and 29.3 percent cited. Read those together and you get a household saying the problem is not only that the account costs money, it is that it cannot forecast what it will cost. That distinction returns in Section 5, because it is the strongest reason a rational person prefers a fee printed on a wall.

**The third finding is the one this course builds a whole section on.** **12.3 percent** cited "problems with past banking or credit history", and **3.4 percent** gave it as their main reason. That reason describes a **denial**, and behind a denial there is a report, and behind that report there is a federal statute nobody told them about. That is Section 3.

**And the survey also asks whether they want one.** In 2023, 11.5 percent of unbanked households were very interested in having an account, 17.6 percent somewhat interested, 19.7 percent not very, and 51.2 percent not at all (FDIC, 2024). Interest is far higher among households that were banked recently: among those who had held an account in the past 12 months, **63.7 percent** were very or somewhat interested, against **25.7 percent** of those whose account was longer ago.

**One honest caution about the "Other reason" line.** It was cited by 22.0 percent and was the main reason for 18.1 percent, which is the second-largest main-reason share on the chart. A fixed list of nine reasons does not exhaust the world, and this course does not pretend the nine are the whole answer.

:::reveal Why do the cited percentages in Figure 1.8 add to more than 100? ||| Because the survey reads each reason separately and a household can say yes to several. Only the main-reason column adds to 100.

:::reveal What share of unbanked households in 2023 gave a fee or minimum-balance reason as their MAIN reason? ||| 33.4 percent, combining fees too high, fees too unpredictable, and not enough money for a minimum balance.

:::reveal Which reason points at a denial rather than a choice, and how often was it cited? ||| Problems with past banking or credit history, cited by 12.3 percent and the main reason for 3.4 percent.

## Vocabulary
- **Cited reason**: any reason a household said applied, from a read-aloud list, which is why the cited column can exceed 100 percent.
- **Main reason**: the single reason a household picked when it had selected more than one, which is why that column totals exactly 100 percent.
- **Fee-and-balance group**: the FDIC's own grouping of fees too high, fees too unpredictable, and insufficient money for a minimum balance, given as the main reason by 33.4 percent in 2023.
- **Unpredictability**: a distinct survey item from expense, and the one that explains a preference for a posted fee over a variable one.
- **Interest in having an account**: a separate survey question, which found the strongest interest among households that had held an account within the past year.

## Sources
Federal Deposit Insurance Corporation. (2024, November). *2023 FDIC national survey of unbanked and underbanked households* (Figures 1.7-1.9, Table 1.4, Appendix 3). https://www.fdic.gov/household-survey`,
    },
    {
      slug: "the-distribution-is-not-random",
      title: "7 · The distribution is not random",
      section: "Section 2 · Who has no account, and why they say so",
      body: `A national rate of 4.2 percent sounds like a rounding error. It is not distributed like one.

**By income, the spread is the widest in the table.** Unbanked rates by family income in 2023, from Table 1.1, read on **28 August 2026** (FDIC, 2024):

| Family income | Unbanked |
|---|---|
| Less than $15,000 | 21.8% |
| $15,000 to $30,000 | 9.0% |
| $30,000 to $50,000 | 4.5% |
| $50,000 to $75,000 | 1.8% |
| At least $75,000 | 0.7% |

**That is roughly a thirtyfold difference between the bottom band and the top.** More than one household in five in the lowest income band has no account at all. Hold that against the most cited reason from the previous lesson, which was not having enough money to meet a minimum balance, and the two findings explain each other without anyone needing a theory.

**By education**, 19.7 percent of households without a high school diploma were unbanked, against 0.8 percent of households with a college degree.

**By disability status**, the unbanked rate among working-age households with a disability was **11.2 percent**, against **3.7 percent** of working-age households without one, so three times as high. That gap has narrowed sharply: the same figure was 16.2 percent in 2019.

**By race and ethnicity**, 2023 rates were **Black 10.6 percent**, **Hispanic 9.5 percent**, **American Indian or Alaska Native 12.2 percent**, **Native Hawaiian or Other Pacific Islander 4.8 percent**, **Asian 2.0 percent**, and **White 1.9 percent** (FDIC, 2024).

**The obvious objection is the right one, and the survey answers it.** Are those gaps just income in disguise? No. The report states that differences between Black and White households and between Hispanic and White households "were present at every income level", and prints the table that shows it. Among households earning between $50,000 and $75,000, the unbanked rate was 3.5 percent for Black households and 4.5 percent for Hispanic households, against **0.8 percent** for White households. In the lowest income band the same comparison runs 35.1 percent and 28.2 percent against 13.2 percent.

**One number in the table moved sharply and the report says why it is uncertain.** The unbanked rate among American Indian or Alaska Native households rose from 6.9 percent in 2021 to 12.2 percent in 2023, having fallen from 16.3 percent in 2019. The report notes that the sample for this group is small, which is a warning to read a single wave carefully rather than a reason to ignore it.

**Two more distinctions worth carrying forward.** First, **47.4 percent** of unbanked households in 2023 had been banked before and **52.6 percent** had never been banked, so the unbanked population is roughly half people who lost an account. Second, **66.2 percent** of unbanked households were **cash only**, using neither a prepaid card nor a nonbank online payment service, which is **2.8 percent of all U.S. households**.

**Being cash only is the sharpest version of the problem.** Every mechanism the rest of this course describes, the fee schedule, the prepaid disclosure, the payment app, assumes some access to the payments system. A cash-only household is outside all of it.

:::reveal How large is the gap in unbanked rates between the lowest and highest income bands? ||| 21.8 percent against 0.7 percent in 2023, roughly a thirtyfold difference.

:::reveal Does income explain the whole gap by race and ethnicity? ||| No. The FDIC reports the differences were present at every income level, with 3.5 and 4.5 percent against 0.8 percent even in the $50,000 to $75,000 band.

:::reveal What does cash only mean, and how common was it in 2023? ||| An unbanked household using neither prepaid cards nor nonbank online payment services: 66.2 percent of unbanked households and 2.8 percent of all households.

## Vocabulary
- **Cash only**: an unbanked household that uses neither prepaid cards nor nonbank online payment services, and so sits outside the electronic payments system entirely.
- **Working-age household with a disability**: an FDIC survey category whose unbanked rate ran three times that of working-age households without a disability in 2023.
- **Previously banked**: an unbanked household in which someone once held an account, roughly half of the unbanked population in 2023.
- **Present at every income level**: the report's own phrase for gaps by race and ethnicity that persist after income is held constant.
- **Small sample caution**: the report's warning attached to the American Indian or Alaska Native series, which is a reason to read one wave carefully rather than to discard it.

## Sources
Federal Deposit Insurance Corporation. (2024, November). *2023 FDIC national survey of unbanked and underbanked households* (Table 1.1, Figure 1.2, Table 1.3). https://www.fdic.gov/household-survey`,
    },
    {
      slug: "quiz-who-has-no-account",
      title: "8 · Knowledge check: the count, the reasons, the distribution",
      section: "Section 2 · Who has no account, and why they say so",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "Which agency runs the national survey this course uses as its evidence spine?",
            options: ["The FDIC", "The Consumer Financial Protection Bureau, which took over household financial surveys under the Dodd-Frank Act", "The Federal Reserve Board, which fields it alongside its own annual household economics survey", "The National Credit Union Administration, which surveys both bank and credit union members"],
            correctIndex: 0,
            explanation: "The FDIC runs it in partnership with the U.S. Census Bureau, as a supplement to the Current Population Survey.",
            sourceLessonSlug: "the-survey-that-counts",
          },
          {
            prompt: "How often is the FDIC household survey conducted?",
            options: ["Every two years", "Every year, in June, with results published the following spring by the Census Bureau", "Every five years, aligned to the decennial census and its intercensal update", "Continuously, with a rolling twelve-month sample published each calendar quarter"],
            correctIndex: 0,
            explanation: "It has run biennially since 2009, and the FDIC states that a new report is released in the fall of even-numbered years.",
            sourceLessonSlug: "the-survey-that-counts",
          },
          {
            prompt: "Which survey is the FDIC household survey fielded as a supplement to?",
            options: ["The Current Population Survey", "The American Community Survey, which the Census Bureau fields continuously across every county", "The Survey of Consumer Finances, which the Federal Reserve fields every three years", "The Survey of Income and Program Participation, which follows the same households over several years"],
            correctIndex: 0,
            explanation: "Riding on the CPS is what gives it a nationally representative sample, close to 30,000 households in 2023.",
            sourceLessonSlug: "the-survey-that-counts",
          },
          {
            prompt: "When was the survey behind this course's figures actually conducted, and when was its report published?",
            options: ["Fielded June 2023, published November 2024", "Fielded June 2025 and published November 2025, making it the newest wave available anywhere", "Fielded January 2024 and published the following June alongside the Quarterly Banking Profile", "Fielded across all of 2023 and published in stages through 2025 as each chapter was completed"],
            correctIndex: 0,
            explanation: "It was the most recent published edition when this course was written on 28 August 2026, and the course says so rather than implying it is the newest possible.",
            sourceLessonSlug: "the-survey-that-counts",
          },
          {
            prompt: "How does the survey define an unbanked household?",
            options: ["Nobody in it has a checking or savings account", "Nobody in it has used a bank branch or an automated teller machine in the past twelve months", "Its account balance fell below the institution's stated minimum at some point in the year", "It relies on nonbank services for more than half of its monthly financial transactions"],
            correctIndex: 0,
            explanation: "The definition is about holding an account at a bank or credit union, not about how the household transacts.",
            sourceLessonSlug: "the-survey-that-counts",
          },
          {
            prompt: "What was the unbanked rate in 2023?",
            options: ["4.2 percent", "14.2 percent, which was the underbanked rate rather than the unbanked one", "8.2 percent, which was the 2011 figure and the highest since the survey began", "2.8 percent, which was the share of all households that were cash-only unbanked"],
            correctIndex: 0,
            explanation: "About 5.6 million households, and the change from 4.5 percent in 2021 was not statistically significant.",
            sourceLessonSlug: "the-survey-that-counts",
          },
          {
            prompt: "How does the survey define an underbanked household?",
            options: ["It has an account and used a nonbank service", "It has an account whose balance is too low to avoid the institution's monthly maintenance fee", "It has an account at a credit union rather than at a bank insured by the FDIC", "It has an account that was opened within the past twelve months after a period without one"],
            correctIndex: 0,
            explanation: "It holds a checking or savings account and used at least one of eight named nonbank financial services in the past 12 months.",
            sourceLessonSlug: "the-survey-that-counts",
          },
          {
            prompt: "How many nonbank financial services does the underbanked definition count?",
            options: ["Eight", "Three, being nonbank money orders, check cashing, and international remittances", "Five, being rent-to-own and payday, pawn shop, auto title and tax refund anticipation loans", "Twelve, adding prepaid cards and nonbank online payment services to the ten credit and transaction items"],
            correctIndex: 0,
            explanation: "Three transaction services and five alternatives to mainstream credit, which together make eight.",
            sourceLessonSlug: "the-survey-that-counts",
          },
          {
            prompt: "Which of these is one of the three TRANSACTION services in the underbanked definition?",
            options: ["Nonbank money orders", "Payday loans, which are one of the five credit alternatives rather than a transaction service", "Rent-to-own services, which the survey groups with the credit alternatives", "Prepaid cards, which the survey asks about separately and does not count in the definition"],
            correctIndex: 0,
            explanation: "The three are nonbank money orders, check cashing, and international remittances.",
            sourceLessonSlug: "the-survey-that-counts",
          },
          {
            prompt: "Which of these is one of the five CREDIT alternatives in the underbanked definition?",
            options: ["Auto title loans", "International remittances, which the survey counts as one of the three transaction services", "Nonbank check cashing, which is also grouped with the transaction services", "Nonbank online payment services, which the survey measures but excludes from the definition"],
            correctIndex: 0,
            explanation: "The five are rent-to-own services and payday, pawn shop, auto title, and tax refund anticipation loans.",
            sourceLessonSlug: "the-survey-that-counts",
          },
          {
            prompt: "What was the underbanked rate in 2023?",
            options: ["14.2 percent", "4.2 percent, which was the unbanked rate representing about 5.6 million households", "81.6 percent, which was the share of households that were fully banked in the same year", "12.7 percent, which is what the rate would have been excluding tax refund anticipation loans"],
            correctIndex: 0,
            explanation: "About 19.0 million households, against 81.6 percent fully banked and 4.2 percent unbanked.",
            sourceLessonSlug: "the-survey-that-counts",
          },
          {
            prompt: "Why is quoting the underbanked rate without its definition misleading?",
            options: ["It is defined by behaviour, not hardship", "Because the FDIC publishes a different underbanked rate for each state and no single national figure exists", "Because the rate counts only households below the federal poverty line rather than all households", "Because the rate is an estimate with a margin of error the FDIC declines to publish"],
            correctIndex: 0,
            explanation: "A household with a perfectly good account that sent one international remittance last year counts as underbanked.",
            sourceLessonSlug: "the-survey-that-counts",
          },
          {
            prompt: "Why does the report say the 2023 underbanked rate is not directly comparable with 2021?",
            options: ["A survey question was broadened", "Because the sample size fell below the threshold the Census Bureau requires for a national estimate", "Because the survey moved from a telephone instrument to an online one between the two waves", "Because the 2021 wave was fielded during a period when branch access was restricted"],
            correctIndex: 0,
            explanation: "The tax refund anticipation loan question was broadened, and the report gives 13.6 percent for 2021 and 12.7 percent for 2023 on the older basis.",
            sourceLessonSlug: "the-survey-that-counts",
          },
          {
            prompt: "What is the general lesson of that footnote about comparability?",
            options: ["Check whether the question moved", "Assume any change of more than one percentage point reflects a real change in household behaviour", "Treat every survey series as broken unless the publisher explicitly certifies it as continuous", "Use only the first and last waves of any series, since intermediate waves are not comparable"],
            correctIndex: 0,
            explanation: "A survey that changes a question changes its own series, and honest publishers put that in a footnote most readers skip.",
            sourceLessonSlug: "the-survey-that-counts",
          },
          {
            prompt: "What was the highest unbanked rate recorded since the survey began, and in which year?",
            options: ["8.2 percent in 2011", "7.6 percent in 2009, the first year the survey was conducted by the FDIC", "6.5 percent in 2017, the peak after the recovery from the financial crisis stalled", "5.4 percent in 2019, the last pre-pandemic reading before the rate fell sharply"],
            correctIndex: 0,
            explanation: "Between 2011 and 2023 the rate fell by almost half, corresponding to an additional 5.3 million banked households.",
            sourceLessonSlug: "the-survey-that-counts",
          },
          {
            prompt: "What did the report associate with about two thirds of the decline in the unbanked rate since 2011?",
            options: ["Changes in socioeconomic circumstances", "The introduction of mobile banking apps by the largest insured depository institutions", "The expansion of federal deposit insurance coverage to a higher per-depositor amount", "A regulatory requirement that banks offer a low-cost account to every applicant"],
            correctIndex: 0,
            explanation: "Particularly rising income and educational attainment, though a statistically significant remainder persisted after those were accounted for.",
            sourceLessonSlug: "the-survey-that-counts",
          },
          {
            prompt: "About how many households responded to the 2023 survey?",
            options: ["Almost 30,000", "About 5,600, matching the number of unbanked households the survey estimated nationally", "Roughly 128 million, being every banked household in the United States", "About 2,000, the standard sample for a nationally representative federal supplement"],
            correctIndex: 0,
            explanation: "The report states that the survey was conducted in June 2023, collecting responses from almost 30,000 households.",
            sourceLessonSlug: "the-survey-that-counts",
          },
          {
            prompt: "How does the survey collect reasons for not having an account?",
            options: ["Yes or no to each item on a read list", "As an open-ended question recorded verbatim and coded afterwards by Census Bureau staff", "By asking the household to rank all nine reasons from most to least important", "By asking only the single most important reason, with no multiple-selection question at all"],
            correctIndex: 0,
            explanation: "Question UB55 reads each reason and records yes or no, and a follow-up asks for the main reason only of households that selected more than one.",
            sourceLessonSlug: "the-reasons-in-their-own-words",
          },
          {
            prompt: "Why can the cited-reason percentages total more than 100?",
            options: ["A household can select several", "Because the survey weights each household more than once when it belongs to multiple demographic groups", "Because the figures are reported separately for banked and unbanked households and then added", "Because the percentages are of adults rather than of households, and a household holds several adults"],
            correctIndex: 0,
            explanation: "Only the main-reason column totals 100 percent, because a household picks exactly one there.",
            sourceLessonSlug: "the-reasons-in-their-own-words",
          },
          {
            prompt: "Which reason was cited by the largest share of unbanked households in 2023?",
            options: ["Not enough money for a minimum balance", "Avoiding a bank gives more privacy, which was cited by a third of unbanked households", "Bank account fees are too unpredictable, which the survey asks about separately from fee levels", "Problems with past banking or credit history, which describes a denial rather than a choice"],
            correctIndex: 0,
            explanation: "42.3 percent cited it, and it was also the most cited main reason at 23.3 percent.",
            sourceLessonSlug: "the-reasons-in-their-own-words",
          },
          {
            prompt: "What share gave distrust of banks as their MAIN reason in 2023?",
            options: ["15.7 percent", "36.0 percent, which was the share that cited distrust as a reason rather than as the main one", "23.3 percent, which was the main-reason share for the minimum balance item", "33.9 percent, which was the share citing that avoiding a bank gives more privacy"],
            correctIndex: 0,
            explanation: "Distrust was the second-most cited main reason, after not having enough money for a minimum balance.",
            sourceLessonSlug: "the-reasons-in-their-own-words",
          },
          {
            prompt: "What share of unbanked households gave a fee or minimum-balance reason as their main reason?",
            options: ["33.4 percent", "42.3 percent, which is the share citing the minimum balance item alone as a reason", "29.2 percent, which is the same grouped figure for 2021 rather than for 2023", "23.3 percent, which is the minimum balance item's main-reason share on its own"],
            correctIndex: 0,
            explanation: "The FDIC groups fees too high, fees too unpredictable, and insufficient money for a minimum balance, and reports 33.4 percent in 2023.",
            sourceLessonSlug: "the-reasons-in-their-own-words",
          },
          {
            prompt: "Which two fee-related items does the survey ask about separately?",
            options: ["Fees too high and fees too unpredictable", "Monthly maintenance fees and overdraft fees, which households are asked to rank against each other", "Fees charged by banks and fees charged by check cashers, for a direct cost comparison", "Fees on checking accounts and fees on savings accounts, since the two products price differently"],
            correctIndex: 0,
            explanation: "They got different answers, 30.7 percent and 29.3 percent cited, which is why level and predictability are separate problems.",
            sourceLessonSlug: "the-reasons-in-their-own-words",
          },
          {
            prompt: "What does the separation between expense and unpredictability explain later in this course?",
            options: ["Why a posted fee can be preferred", "Why the FDIC groups the two items together when reporting main reasons in its own tables", "Why the survey's underbanked definition excludes prepaid cards and payment apps", "Why the unbanked rate fell by almost half between 2011 and 2023"],
            correctIndex: 0,
            explanation: "A household that cannot forecast what an account will cost has a real reason to prefer a fee it can see in advance, which is the substitute market's core appeal.",
            sourceLessonSlug: "the-reasons-in-their-own-words",
          },
          {
            prompt: "What share cited problems with past banking or credit history in 2023?",
            options: ["12.3 percent", "13.0 percent, which was the share citing a lack of the required personal identification", "3.4 percent, which was that item's main-reason share rather than its cited share", "22.0 percent, which was the share citing some other reason not on the list"],
            correctIndex: 0,
            explanation: "3.4 percent gave it as their main reason, and it is the item that points at a denial rather than a decision.",
            sourceLessonSlug: "the-reasons-in-their-own-words",
          },
          {
            prompt: "Why does this course build a whole section on the past-banking-history reason?",
            options: ["Behind a denial there is a report", "Because it was the most cited reason of the nine and therefore the most important quantitatively", "Because the FDIC treats it as the only reason that can be resolved by the household itself", "Because it is the only reason the survey asks about that has changed materially since 2019"],
            correctIndex: 0,
            explanation: "The report is a consumer report under federal law, which gives a denied applicant rights they almost never know they hold.",
            sourceLessonSlug: "the-reasons-in-their-own-words",
          },
          {
            prompt: "What proportion of unbanked households said they were not at all interested in having an account in 2023?",
            options: ["51.2 percent", "17.6 percent, which was the share that said they were somewhat interested rather than uninterested", "11.5 percent, which was the share that said they were very interested", "19.7 percent, which was the share that said they were not very interested"],
            correctIndex: 0,
            explanation: "The four categories in 2023 were 11.5, 17.6, 19.7 and 51.2 percent, and the uninterested share has fallen across recent waves.",
            sourceLessonSlug: "the-reasons-in-their-own-words",
          },
          {
            prompt: "Interest in having an account was highest among which unbanked households?",
            options: ["Those banked within the past 12 months", "Those that had never held an account, since they had no prior experience to discourage them", "Those aged 65 or older, who were most likely to want a place to receive benefit payments", "Those in the highest income band, who had the least difficulty meeting a minimum balance"],
            correctIndex: 0,
            explanation: "63.7 percent of them were very or somewhat interested, against 25.7 percent whose account was longer ago.",
            sourceLessonSlug: "the-reasons-in-their-own-words",
          },
          {
            prompt: "What caution does the lesson attach to the 'Other reason' line?",
            options: ["A nine-item list is not the world", "That the FDIC excludes it from the main-reason column, so it cannot be compared with the named items", "That households selecting it were disproportionately in the highest income bands", "That it was cited by fewer than one per cent of unbanked households and can be ignored"],
            correctIndex: 0,
            explanation: "It was cited by 22.0 percent and was the main reason for 18.1 percent, the second-largest main-reason share on the chart.",
            sourceLessonSlug: "the-reasons-in-their-own-words",
          },
          {
            prompt: "What was the unbanked rate among households with family income below $15,000 in 2023?",
            options: ["21.8 percent", "9.0 percent, which was the rate in the $15,000 to $30,000 income band", "19.7 percent, which was the rate among households without a high school diploma", "35.1 percent, which was the rate for Black households in that same lowest income band"],
            correctIndex: 0,
            explanation: "More than one household in five in the lowest band had no account, against 0.7 percent in the highest.",
            sourceLessonSlug: "the-distribution-is-not-random",
          },
          {
            prompt: "What was the unbanked rate among households with family income of at least $75,000?",
            options: ["0.7 percent", "1.8 percent, which was the rate in the $50,000 to $75,000 income band immediately below it", "4.2 percent, which was the national rate across all income bands combined", "0.8 percent, which was the rate among households holding a college degree"],
            correctIndex: 0,
            explanation: "Roughly a thirtyfold difference against the lowest band, which is why a 4.2 percent national rate is a poor description of the distribution.",
            sourceLessonSlug: "the-distribution-is-not-random",
          },
          {
            prompt: "How do the income table and the reasons table explain each other?",
            options: ["The top reason is a balance requirement", "The top reason is distrust, which the income table shows is concentrated among wealthier households", "The income table shows the rate is flat, which means the stated reasons must be pretextual", "The income table measures households and the reasons table measures adults, so neither is comparable"],
            correctIndex: 0,
            explanation: "The most cited reason for having no account is not having enough money to meet a minimum balance, and the unbanked rate is more than twenty times higher in the lowest income band than in the highest.",
            sourceLessonSlug: "the-distribution-is-not-random",
          },
          {
            prompt: "What was the unbanked rate among households without a high school diploma in 2023?",
            options: ["19.7 percent", "0.8 percent, which was the rate among households holding a college degree", "6.5 percent, which was the rate among households whose highest attainment was a high school diploma", "3.0 percent, which was the rate among households with some college but no degree"],
            correctIndex: 0,
            explanation: "The education gradient runs from 19.7 percent to 0.8 percent between the lowest and highest attainment groups.",
            sourceLessonSlug: "the-distribution-is-not-random",
          },
          {
            prompt: "What was the unbanked rate among working-age households with a disability in 2023?",
            options: ["11.2 percent", "16.2 percent, which was the same measure in 2019 before the rate fell sharply", "3.7 percent, which was the rate among working-age households without a disability", "12.2 percent, which was the rate among American Indian or Alaska Native households"],
            correctIndex: 0,
            explanation: "That is three times the 3.7 percent rate among working-age households without a disability, and down from 16.2 percent in 2019.",
            sourceLessonSlug: "the-distribution-is-not-random",
          },
          {
            prompt: "What was the unbanked rate among Black households in 2023?",
            options: ["10.6 percent", "13.8 percent, which was the rate among Black households in 2019 rather than in 2023", "9.5 percent, which was the rate among Hispanic households in the same year", "1.9 percent, which was the rate among White households in the same year"],
            correctIndex: 0,
            explanation: "Down from 13.8 percent in 2019, and still several times the 1.9 percent rate among White households.",
            sourceLessonSlug: "the-distribution-is-not-random",
          },
          {
            prompt: "What was the unbanked rate among White households in 2023?",
            options: ["1.9 percent", "2.0 percent, which was the rate among Asian households in the same year", "4.8 percent, which was the rate among Native Hawaiian or Other Pacific Islander households", "4.2 percent, which was the national rate across all groups combined"],
            correctIndex: 0,
            explanation: "It is the baseline against which the report describes rates among Black, Hispanic and American Indian or Alaska Native households as several times higher.",
            sourceLessonSlug: "the-distribution-is-not-random",
          },
          {
            prompt: "Does income account for the whole gap in unbanked rates by race and ethnicity?",
            options: ["No", "Yes, the report finds the gaps disappear entirely once income is held constant", "The report declines to test it, because income and race cannot be separated in the survey design", "Yes for Hispanic households and no for Black households, according to the report's own analysis"],
            correctIndex: 0,
            explanation: "The report states the differences were present at every income level, and prints the table that shows it.",
            sourceLessonSlug: "the-distribution-is-not-random",
          },
          {
            prompt: "In the $50,000 to $75,000 income band, what was the unbanked rate for White households?",
            options: ["0.8 percent", "3.5 percent, which was the rate for Black households in the same income band", "4.5 percent, which was the rate for Hispanic households in the same income band", "1.8 percent, which was the overall rate for that income band across all groups"],
            correctIndex: 0,
            explanation: "Against 3.5 percent for Black households and 4.5 percent for Hispanic households in the same band, which is the report's evidence that the gap is not income alone.",
            sourceLessonSlug: "the-distribution-is-not-random",
          },
          {
            prompt: "Which group's unbanked rate rose sharply between 2021 and 2023 with a small-sample caution attached?",
            options: ["American Indian or Alaska Native households", "Households without a high school diploma, whose rate rose from 19.2 to 19.7 percent over the same period", "Working-age households with a disability, whose rate had fallen from 16.2 percent in 2019", "Households in the $30,000 to $50,000 income band, whose rate rose from 4.0 to 4.5 percent"],
            correctIndex: 0,
            explanation: "It rose from 6.9 percent in 2021 to 12.2 percent in 2023 after falling from 16.3 percent in 2019, and the report warns that the sample is small.",
            sourceLessonSlug: "the-distribution-is-not-random",
          },
          {
            prompt: "What does a small-sample caution mean for reading a single wave of a survey?",
            options: ["Read it carefully rather than discard it", "Discard the estimate entirely, since a small sample produces no usable information", "Substitute the previous wave's figure until three consecutive waves agree with each other", "Treat the estimate as exact, since the publisher would not print a figure it could not stand behind"],
            correctIndex: 0,
            explanation: "The report prints the figure and prints the warning, which is the honest way to handle a group whose sample cannot support a confident single-wave reading.",
            sourceLessonSlug: "the-distribution-is-not-random",
          },
          {
            prompt: "What share of unbanked households in 2023 had been banked at some point in the past?",
            options: ["47.4 percent", "66.2 percent, which was the share of unbanked households that were cash only", "52.6 percent, which was the share that had never been banked rather than the share that had", "63.7 percent, which was the interest figure among households banked within the past year"],
            correctIndex: 0,
            explanation: "So roughly half the unbanked population consists of people who lost an account rather than never having had one.",
            sourceLessonSlug: "the-distribution-is-not-random",
          },
          {
            prompt: "What does the survey mean by a cash-only unbanked household?",
            options: ["It uses neither prepaid cards nor payment apps", "It holds no account and receives all of its income in physical currency rather than by deposit", "It pays every bill in person at a counter rather than by mail or electronic transfer", "It has closed its account within the past twelve months and not yet opened another"],
            correctIndex: 0,
            explanation: "The FDIC infers that such households rely primarily on cash and paper instruments such as nonbank money orders.",
            sourceLessonSlug: "the-distribution-is-not-random",
          },
          {
            prompt: "What share of unbanked households were cash only in 2023?",
            options: ["66.2 percent", "2.8 percent, which is the cash-only unbanked share of ALL households rather than of unbanked ones", "33.8 percent, which is the share relying on prepaid cards or nonbank online payment services", "47.4 percent, which is the share of unbanked households that had previously been banked"],
            correctIndex: 0,
            explanation: "As a share of all U.S. households, cash-only unbanked was 2.8 percent.",
            sourceLessonSlug: "the-distribution-is-not-random",
          },
          {
            prompt: "Why does the lesson call the cash-only household the sharpest version of the problem?",
            options: ["It is outside the payments system entirely", "Because it pays the highest total fees of any household category the survey measures", "Because it is the only category the FDIC declines to publish demographic breakdowns for", "Because it is growing faster than any other category across recent survey waves"],
            correctIndex: 0,
            explanation: "Every mechanism the rest of the course describes, from a fee schedule to a prepaid disclosure, assumes some access to electronic payments.",
            sourceLessonSlug: "the-distribution-is-not-random",
          },
          {
            prompt: "What was the fully banked share of U.S. households in 2023?",
            options: ["81.6 percent", "95.8 percent, which was the banked share including underbanked households", "85.8 percent, being the sum of the fully banked and unbanked shares", "14.2 percent, which was the underbanked share rather than the fully banked one"],
            correctIndex: 0,
            explanation: "About 109.1 million households held an account and used none of the eight nonbank services.",
            sourceLessonSlug: "the-survey-that-counts",
          },
          {
            prompt: "About how many U.S. households were unbanked in 2023?",
            options: ["5.6 million", "19.0 million, which was the number of underbanked households rather than unbanked ones", "128.0 million, which was the number of banked households in the same year", "109.1 million, which was the number of fully banked households"],
            correctIndex: 0,
            explanation: "4.2 percent of households, against about 128.0 million banked households.",
            sourceLessonSlug: "the-survey-that-counts",
          },
          {
            prompt: "About how many U.S. households were underbanked in 2023?",
            options: ["19.0 million", "5.6 million, which was the number of unbanked households in the same year", "30,000, which was the number of households that responded to the survey", "5.3 million, which was the increase in banked households between 2011 and 2023"],
            correctIndex: 0,
            explanation: "14.2 percent of households, holding an account and using at least one of the eight nonbank services.",
            sourceLessonSlug: "the-survey-that-counts",
          },
          {
            prompt: "Which survey question asks for the single main reason a household has no account?",
            options: ["UB60", "UB55, which reads each reason in turn and records a yes or no answer for each one", "UB50, which asks how interested the household is in having a bank account", "UB10, which asks whether anyone in the household has ever held a bank account"],
            correctIndex: 0,
            explanation: "It is asked only of households that selected more than one reason at UB55, which is why the main-reason column sums to 100.",
            sourceLessonSlug: "the-reasons-in-their-own-words",
          },
          {
            prompt: "What share cited that bank locations are inconvenient in 2023?",
            options: ["16.3 percent", "33.9 percent, which was the share citing that avoiding a bank gives more privacy", "20.0 percent, which was the share saying banks do not offer needed products and services", "29.3 percent, which was the share saying bank account fees are too unpredictable"],
            correctIndex: 0,
            explanation: "It was the main reason for 2.5 percent, and it is the reason that connects to the bank-desert material later in the course.",
            sourceLessonSlug: "the-reasons-in-their-own-words",
          },
          {
            prompt: "What share cited that avoiding a bank gives more privacy in 2023?",
            options: ["33.9 percent", "36.0 percent, which was the share citing a general distrust of banks", "30.7 percent, which was the share citing that bank account fees are too high", "5.1 percent, which was that item's main-reason share rather than its cited share"],
            correctIndex: 0,
            explanation: "It was the third most cited reason, though only 5.1 percent gave it as their main one.",
            sourceLessonSlug: "the-reasons-in-their-own-words",
          },
          {
            prompt: "What is the difference between the cited column and the main column in Figure 1.8?",
            options: ["One allows several answers, one allows one", "One reports unbanked households and the other reports all households in the survey", "One is weighted to the national population and the other reports raw response counts", "One covers 2023 and the other covers the previous wave for comparison"],
            correctIndex: 0,
            explanation: "Cited comes from a yes-or-no read of each item; main comes from a single choice among the items already selected.",
            sourceLessonSlug: "the-reasons-in-their-own-words",
          },
          {
            prompt: "What was the unbanked rate for Hispanic households in 2023?",
            options: ["9.5 percent", "12.2 percent, which was the rate among Hispanic households in 2019 rather than in 2023", "10.6 percent, which was the rate among Black households in the same year", "2.0 percent, which was the rate among Asian households in the same year"],
            correctIndex: 0,
            explanation: "Down from 12.2 percent in 2019, and still several times the White rate of 1.9 percent.",
            sourceLessonSlug: "the-distribution-is-not-random",
          },
          {
            prompt: "In the lowest income band, how did the unbanked rate for Black households compare with White households?",
            options: ["35.1 percent against 13.2 percent", "21.8 percent against 0.7 percent, which is the overall comparison between income bands", "10.6 percent against 1.9 percent, which is the overall comparison across all income levels", "3.5 percent against 0.8 percent, which is the comparison in the $50,000 to $75,000 band"],
            correctIndex: 0,
            explanation: "Hispanic households were at 28.2 percent in the same band, which is what the report means by the gap being present at every income level.",
            sourceLessonSlug: "the-distribution-is-not-random",
          },
          {
            prompt: "Why does the lesson open by saying a 4.2 percent rate 'sounds like a rounding error'?",
            options: ["Because it is not distributed like one", "Because the FDIC itself describes the change from 2021 as not statistically significant", "Because a national rate below five per cent falls inside the survey's stated margin of error", "Because the rate has fallen in every wave since the survey began in 2009"],
            correctIndex: 0,
            explanation: "A small national average hides a range running from 0.7 percent to 21.8 percent by income alone.",
            sourceLessonSlug: "the-distribution-is-not-random",
          },
          {
            prompt: "What proportion of unbanked households had NEVER been banked in 2023?",
            options: ["52.6 percent", "47.4 percent, which was the share that had previously held an account", "66.2 percent, which was the cash-only share of unbanked households", "51.2 percent, which was the share not at all interested in having an account"],
            correctIndex: 0,
            explanation: "The split has moved slowly: 49.6 percent never banked in 2019 and 51.2 percent in 2021.",
            sourceLessonSlug: "the-distribution-is-not-random",
          },
          {
            prompt: "What does the survey's design allow it to do that speculation cannot?",
            options: ["Publish the reasons households give", "Track the same households across successive survey waves to measure individual transitions", "Establish the cause of each household's decision through follow-up interviews", "Measure the fees each unbanked household would pay if it opened an account"],
            correctIndex: 0,
            explanation: "The stated reasons come from the households themselves, from a fixed list, published with both a cited and a main share.",
            sourceLessonSlug: "the-reasons-in-their-own-words",
          },
          {
            prompt: "Which of these is NOT one of the three categories the survey sorts households into?",
            options: ["Overbanked", "Unbanked, meaning nobody in the household holds a checking or savings account", "Underbanked, meaning the household holds an account and used a named nonbank service", "Fully banked, meaning the household holds an account and used none of the eight services"],
            correctIndex: 0,
            explanation: "The three are unbanked, underbanked and fully banked, and together they account for every household in the survey.",
            sourceLessonSlug: "the-survey-that-counts",
          },
          {
            prompt: "Why does this course name the edition of the survey it is quoting?",
            options: ["A newer wave supersedes these figures", "Because the FDIC requires the edition to be cited whenever any figure is reproduced", "Because earlier editions used a different definition of a household than the 2023 one", "Because the report is republished each quarter with revised estimates"],
            correctIndex: 0,
            explanation: "The survey is biennial, a 2025 wave has been fielded, and a stale rate presented as current is exactly the failure this domain punishes.",
            sourceLessonSlug: "the-survey-that-counts",
          },
          {
            prompt: "What did the report say about the change in the unbanked rate between 2021 and 2023?",
            options: ["It was not statistically significant", "It was the largest two-year decline the survey has recorded since it began in 2009", "It reversed a decade of improvement and returned the rate to its 2011 level", "It could not be measured because the underlying question had been rewritten"],
            correctIndex: 0,
            explanation: "The rate moved from 4.5 percent to 4.2 percent, and the report says the difference over that period was not statistically significant.",
            sourceLessonSlug: "the-survey-that-counts",
          },
          {
            prompt: "What did the banked share of U.S. households come to in 2023?",
            options: ["95.8 percent", "81.6 percent, which counts only the fully banked and excludes underbanked households", "85.8 percent, which is the fully banked share plus the unbanked share", "4.2 percent, which is the unbanked share rather than the banked one"],
            correctIndex: 0,
            explanation: "About 128.0 million households had at least one member holding a checking or savings account at a bank.",
            sourceLessonSlug: "the-survey-that-counts",
          },
          {
            prompt: "Which two survey findings, read together, make a theory about the unbanked unnecessary?",
            options: ["The top reason and the income gradient", "The interest question and the never-banked share, which together measure demand for accounts", "The underbanked definition and the cash-only share, which measure use of nonbank services", "The trend since 2011 and the education gradient, which measure change over time"],
            correctIndex: 0,
            explanation: "Households name a minimum balance more often than anything else, and the unbanked rate is more than twenty times higher in the lowest income band than in the highest.",
            sourceLessonSlug: "the-distribution-is-not-random",
          },
          {
            prompt: "What was the unbanked rate for households earning $15,000 to $30,000 in 2023?",
            options: ["9.0 percent", "21.8 percent, which was the rate in the band below it, under $15,000 of family income", "4.5 percent, which was the rate in the band above it, $30,000 to $50,000", "10.4 percent, which was the rate for this band in 2019 rather than in 2023"],
            correctIndex: 0,
            explanation: "The gradient runs 21.8, 9.0, 4.5, 1.8 and 0.7 percent across the five bands the FDIC publishes.",
            sourceLessonSlug: "the-distribution-is-not-random",
          },
          {
            prompt: "What share cited that banks do not offer needed products and services in 2023?",
            options: ["20.0 percent", "16.3 percent, which was the share citing inconvenient bank locations", "29.3 percent, which was the share citing that fees are too unpredictable", "1.7 percent, which was that item's main-reason share rather than its cited share"],
            correctIndex: 0,
            explanation: "Only 1.7 percent gave it as their main reason, which is a wide gap between a complaint and a decisive one.",
            sourceLessonSlug: "the-reasons-in-their-own-words",
          },
          {
            prompt: "By how much did the unbanked rate change between 2011 and 2023?",
            options: ["It fell by almost half", "It roughly doubled, from 4.2 percent to 8.2 percent over the twelve-year period", "It stayed within half a percentage point across every wave in that period", "It fell to zero in three of the intervening waves before recovering"],
            correctIndex: 0,
            explanation: "From 8.2 percent in 2011 to 4.2 percent in 2023, corresponding to an additional 5.3 million banked households.",
            sourceLessonSlug: "the-survey-that-counts",
          },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3 — The second gate: the report behind a denial
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "a-report-you-did-not-know-existed",
      title: "9 · The second gate: a report about you that you have never seen",
      section: "Section 3 · The second gate: the report behind a denial",
      body: `Section 2 ended on a number: **12.3 percent** of unbanked households cited "problems with past banking or credit history" as a reason for having no account (FDIC, 2024). That reason describes something being done to a person rather than something they chose. This section is about the machinery behind it.

**When you apply for a checking account, the bank usually pulls a report.** Not, in most cases, the credit report you have heard of. A separate one, from a company that keeps a file on how your previous deposit accounts ended. The Consumer Financial Protection Bureau describes the category plainly: banks and credit unions "use deposit account and payments screening to help decide whether to offer you a checking or savings account, or to accept your personal checks" (CFPB, 2025).

**And the CFPB names the two companies.** "Banks and credit unions supply this type of information to checking account reporting companies, such as Chex Systems and Early Warning Services" (CFPB, 2024).

**Read the direction of that sentence.** Banks **supply** the information. The file is assembled out of what your previous institutions reported: an account closed with a negative balance, an unpaid overdraft, suspected fraud. The bank that closed your account is the source, and the next bank is the reader.

**Now the legal move that makes this section possible.** A company like this is a **consumer reporting agency** under the Fair Credit Reporting Act, and that is not a matter of opinion. The statute defines the term at **15 U.S.C. 1681a(f)** as "any person which, for monetary fees, dues, or on a cooperative nonprofit basis, regularly engages in whole or in part in the practice of assembling or evaluating consumer credit information or other information on consumers for the purpose of furnishing consumer reports to third parties."

**Note the four words "or other information".** The definition was written wide on purpose. It does not say credit. A company assembling information about closed deposit accounts, and selling it to banks deciding whether to open one, is squarely inside it.

**A consumer report, in turn, is defined at 15 U.S.C. 1681a(d)** as a communication by a consumer reporting agency "bearing on a consumer's credit worthiness, credit standing, credit capacity, character, general reputation, personal characteristics, or mode of living" that is used or expected to be used as a factor in establishing eligibility for credit, insurance, employment or another authorised purpose.

**And the FCRA has a named category for exactly this kind of company.** At **15 U.S.C. 1681a(x)** a "nationwide specialty consumer reporting agency" is one that compiles and maintains files on consumers nationwide relating to "(1) medical records or payments; (2) residential or tenant history; (3) **check writing history**; (4) employment history; or (5) insurance claims."

**Category three is the one that matters here.** Congress wrote a specialty-agency category into the statute, and check writing history is in it by name. So the report a bank pulls before opening your account is not in some gap in the law. It is inside a statute whose whole purpose is to give the person being reported on a set of rights.

**Which is the point of this section.** Almost nobody knows the report exists. Rather more people have been turned down because of it. Very few have read it. The next two lessons are what the law says you may do about that.

:::reveal Where does the information in a checking-account screening file come from? ||| From banks and credit unions themselves, which report how a customer's previous accounts ended.

:::reveal Which words in the definition at 15 U.S.C. 1681a(f) make it reach beyond credit? ||| The phrase "or other information on consumers", which is why an agency assembling deposit-account histories is a consumer reporting agency.

:::reveal Which of the five nationwide specialty categories at 1681a(x) covers checking-account screening? ||| Check writing history, the third of the five listed.

## Vocabulary
- **Deposit account screening**: the practice, in the CFPB's own words, of using a report to decide whether to offer someone a checking or savings account.
- **Consumer reporting agency**: the FCRA's category at 15 U.S.C. 1681a(f), defined to cover any person regularly assembling credit "or other information" on consumers to furnish reports to third parties.
- **Consumer report**: a communication from such an agency bearing on a consumer's credit worthiness, character, general reputation, personal characteristics or mode of living, used as a factor in an eligibility decision.
- **Nationwide specialty consumer reporting agency**: the FCRA's category at 1681a(x), whose five subjects include check writing history.
- **Furnisher**: the institution that reports information into a file, which for deposit screening is the bank or credit union that held the previous account.

## Sources
15 U.S.C. § 1681a. (n.d.). *Definitions; rules of construction*. Office of the Law Revision Counsel, U.S. House of Representatives. https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title15-section1681a&num=0&edition=prelim

Consumer Financial Protection Bureau. (2024, December 18). *I was denied a checking account because of a report. What can I do?* https://www.consumerfinance.gov/ask-cfpb/i-was-denied-a-checking-account-because-of-a-report-what-can-i-do-en-1113/

Consumer Financial Protection Bureau. (2025, March 13). *List of consumer reporting companies*. https://www.consumerfinance.gov/consumer-tools/credit-reports-and-scores/consumer-reporting-companies/companies-list/`,
    },
    {
      slug: "the-adverse-action-notice",
      title: "10 · The letter that has to tell you who was consulted",
      section: "Section 3 · The second gate: the report behind a denial",
      body: `A bank turns down your application. What is it required to tell you?

**The governing provision is 15 U.S.C. 1681m(a)**, headed as the duties of users of consumer reports taking adverse action. If a person takes adverse action "based in whole or in part on any information contained in a consumer report", that person must:

- provide the consumer with notice of the adverse action;
- provide "the name, address, and telephone number of the consumer reporting agency" that furnished the report;
- provide a statement that the consumer reporting agency "did not make the decision to take the adverse action and is unable to provide the consumer the specific reasons why the adverse action was taken"; and
- provide notice of the consumer's right to obtain a free copy of the consumer report from that agency, and the right "to dispute with the consumer reporting agency the accuracy or completeness of any information in a consumer report".

**The CFPB states the application to this exact case.** "If declined for a new checking or deposit account, the bank must provide you with an 'adverse action' notice that includes the name and contact information of the screening company from which the bank got the report. You can contact the reporting company and request a free copy of the report" (CFPB, 2025).

**Now hold two sentences from that list side by side, because together they are the whole design.** The bank must name the agency. The agency did not make the decision and cannot tell you why it went the way it did. So the notice does two things at once: it points you at the file, and it tells you the file's keeper is not the decision-maker. You are being handed a thread, not an answer.

**And here is a distinction this catalog will not let you miss, because it is where a careful person goes wrong.** You may have heard that a denied applicant is entitled to be told **the principal reasons** for the denial. That right is real, and it comes from the Equal Credit Opportunity Act through **Regulation B**. But Regulation B defines adverse action at **12 CFR 1002.2(c)** as, among other things, "a refusal to grant credit in substantially the amount or on substantially the terms requested in an application", and it defines an application at **1002.2(f)** as "an oral or written request for an extension of credit".

**A checking account is not an extension of credit.** So the Regulation B statement of principal reasons does **not** attach to a deposit-account denial. What attaches is the FCRA notice above, which names the agency and points you to the file, and which does not oblige anybody to explain the decision itself.

**That is a real difference and it is worth sitting with.** The same person can be refused two things on the same afternoon and hold two different sets of rights. Refused a loan, they are entitled to reasons. Refused a checking account, they are entitled to a pointer. Both of those are choices Congress made, and neither is an accident of drafting.

**The practical instruction, then, is narrow and useful.** If you are declined, do not argue with the branch. Read the notice for the name of the reporting company. That name is the only thing in the letter that leads anywhere, and getting it is your statutory right.

:::reveal What three things must a notice under 15 U.S.C. 1681m(a) tell a consumer? ||| Who the reporting agency was, that the agency did not make the decision and cannot give the specific reasons, and that the consumer may get a free copy of the report and dispute it.

:::reveal Why does the Regulation B right to be told the principal reasons not apply to a checking-account denial? ||| Because Regulation B defines an application as a request for an extension of credit, and a deposit account is not credit.

:::reveal What is the single most useful item in an account-denial letter? ||| The name and contact details of the screening company, because that is the only line in it that leads to a document you can read and dispute.

## Vocabulary
- **Adverse action notice**: the notice a user of a consumer report must give under 15 U.S.C. 1681m(a) when it acts against a consumer based in whole or in part on that report.
- **The disclaimer of reasons**: the required statement that the reporting agency did not make the decision and cannot say why it was made, which is what makes the notice a pointer rather than an explanation.
- **Regulation B**: the Equal Credit Opportunity Act's implementing rule at 12 CFR part 1002, whose adverse-action machinery turns on a request for an extension of credit.
- **Extension of credit**: the trigger for Regulation B, and the reason a deposit-account refusal does not carry the statement of principal reasons.
- **A thread, not an answer**: the way to read an account-denial letter, since its value lies in the name of the agency rather than in any explanation of the decision.

## Sources
15 U.S.C. § 1681m. (n.d.). *Requirements on users of consumer reports*. Office of the Law Revision Counsel, U.S. House of Representatives. https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title15-section1681m&num=0&edition=prelim

Consumer Financial Protection Bureau. (n.d.). *12 CFR 1002.2 - Definitions*. https://www.consumerfinance.gov/rules-policy/regulations/1002/2/

Consumer Financial Protection Bureau. (2025, March 13). *List of consumer reporting companies*. https://www.consumerfinance.gov/consumer-tools/credit-reports-and-scores/consumer-reporting-companies/companies-list/`,
    },
    {
      slug: "getting-and-fixing-your-file",
      title: "11 · Getting the file, and what a dispute actually does",
      section: "Section 3 · The second gate: the report behind a denial",
      body: `You do not have to be denied anything to read your own file. The statute gives two separate routes, and knowing both is the useful part.

**Route one, the annual disclosure.** At **15 U.S.C. 1681j(a)(1)(A)**, a nationwide consumer reporting agency and a nationwide specialty consumer reporting agency "shall make all disclosures pursuant to section 1681g of this title once during any 12-month period upon request of the consumer and without charge to the consumer." One free file disclosure per agency per twelve months, for the asking, with no denial required. ChexSystems states the same right on its own consumer page: "Under the Fair Credit Reporting Act (FCRA), you are entitled to a free copy of your consumer disclosure report, upon your request, at a minimum once every 12 months", requestable through its consumer portal, by telephone, or by post (ChexSystems, 2026).

**Route two, the sixty-day window.** At **15 U.S.C. 1681j(b)**, a consumer who has received an adverse-action notification may request a free disclosure within **60 days** of it. The CFPB puts the two routes together for this exact case: "Nationwide checking account reporting companies must provide you with one free annual report per year, upon request" and "You also have the right to request a free report if you have received an 'adverse action' notice" (CFPB, 2024).

**Section 1681j(c) adds three more free-disclosure triggers** for a consumer who certifies they are unemployed and seeking employment within 60 days, are receiving public welfare assistance, or believe their file contains inaccurate information due to fraud.

**Now the dispute, which is the part people get wrong.** Under **15 U.S.C. 1681i(a)(1)(A)**, when a consumer disputes the completeness or accuracy of an item and notifies the agency directly, the agency must "conduct a reasonable reinvestigation to determine whether the disputed information is inaccurate and record the current status of the disputed information, or delete the item", generally within **30 days** of receiving the notice, extendable by up to 15 days if the consumer supplies relevant information during that period.

**And the outcome rule, at 1681i(a)(5)(A):** if an item is "found to be inaccurate or incomplete or cannot be verified", the agency "shall promptly delete that item of information from the file of the consumer, or modify that item". Under **1681i(a)(6)** the agency must then give written notice of the results, generally within five business days of completing the reinvestigation.

**Read "or cannot be verified" carefully, because it is doing real work.** The burden is not on you to prove the entry false. If the agency cannot verify it, the item goes. That is the single most useful clause in the section.

**What a dispute does not do.** It does not oblige any bank to open an account for you. It does not remove an entry that is true. And it does not settle the underlying debt: if you owe a former institution money, correcting the file is a separate act from paying it. A dispute is a mechanism for **accuracy**, not for outcomes.

**What this course does not know, and says so.** ChexSystems publishes how to request a disclosure but the pages read on **28 August 2026** did not state how long an item stays in a file, and the two CFPB pages read the same day are not fully consistent about which companies sit in the deposit-screening category: the agency's Ask CFPB answer names Chex Systems and Early Warning Services, while its published list of consumer reporting companies, last updated 13 March 2025, showed one company under bank account screening. Both are stated here as read, with their dates, rather than smoothed into a single confident sentence. A source check is filed for each.

:::reveal How often may you get a free file disclosure from a nationwide specialty consumer reporting agency? ||| Once during any 12-month period on request, at no charge, under 15 U.S.C. 1681j(a)(1)(A).

:::reveal How long does an agency generally have to complete a reinvestigation of a disputed item? ||| Thirty days from receiving the notice, extendable by up to fifteen more if the consumer supplies relevant information within that period.

:::reveal What happens to a disputed item the agency cannot verify? ||| It must be promptly deleted or modified. The consumer does not have to prove it false.

## Vocabulary
- **File disclosure**: the consumer's own copy of what an agency holds about them, available free once every twelve months under 15 U.S.C. 1681j(a).
- **The sixty-day window**: the separate free-disclosure right that opens when a consumer receives an adverse-action notification.
- **Reinvestigation**: the agency's duty under 1681i(a)(1)(A) to check a disputed item, generally within thirty days.
- **Cannot be verified**: the clause that requires deletion of an item the agency is unable to confirm, which is what puts the burden on the agency rather than the consumer.
- **Accuracy, not outcome**: what a dispute is for, since correcting a file obliges no bank to open an account and settles no debt.

## Sources
15 U.S.C. § 1681i. (n.d.). *Procedure in case of disputed accuracy*. Office of the Law Revision Counsel, U.S. House of Representatives. https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title15-section1681i&num=0&edition=prelim

15 U.S.C. § 1681j. (n.d.). *Charges for certain disclosures*. Office of the Law Revision Counsel, U.S. House of Representatives. https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title15-section1681j&num=0&edition=prelim

ChexSystems. (2026). *Request a consumer disclosure*. https://www.chexsystems.com/request-reports/consumer-disclosure

Consumer Financial Protection Bureau. (2024, December 18). *I was denied a checking account because of a report. What can I do?* https://www.consumerfinance.gov/ask-cfpb/i-was-denied-a-checking-account-because-of-a-report-what-can-i-do-en-1113/`,
    },
    {
      slug: "quiz-the-second-gate",
      title: "12 · Knowledge check: the screening report and your rights",
      section: "Section 3 · The second gate: the report behind a denial",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "Which survey finding does this section set out to explain?",
            options: ["Problems with past banking or credit history", "That 42.3 percent of unbanked households could not meet a minimum balance requirement", "That 51.2 percent of unbanked households were not at all interested in having an account", "That 66.2 percent of unbanked households used neither prepaid cards nor payment apps"],
            correctIndex: 0,
            explanation: "12.3 percent of unbanked households cited it, and unlike most items on the list it describes a denial rather than a choice.",
            sourceLessonSlug: "a-report-you-did-not-know-existed",
          },
          {
            prompt: "When someone applies for a checking account, what does the bank usually pull?",
            options: ["A deposit account screening report", "The same credit report a mortgage lender would order, from one of the three nationwide bureaus", "A record from the FDIC showing every insured account the applicant has ever held", "A tax transcript from the Internal Revenue Service confirming reported income"],
            correctIndex: 0,
            explanation: "It is a separate report from a company that keeps a file on how a person's previous deposit accounts ended.",
            sourceLessonSlug: "a-report-you-did-not-know-existed",
          },
          {
            prompt: "Who supplies the information in a checking-account screening file?",
            options: ["Banks and credit unions", "The applicant, through the disclosures made on the account application form itself", "Merchants who accepted the applicant's checks and were not paid on presentation", "State banking regulators, from the complaint records they maintain on consumers"],
            correctIndex: 0,
            explanation: "The CFPB states that banks and credit unions supply this type of information, so the institution that closed an account is the source and the next institution is the reader.",
            sourceLessonSlug: "a-report-you-did-not-know-existed",
          },
          {
            prompt: "Which two companies does the CFPB name as checking account reporting companies?",
            options: ["Chex Systems and Early Warning Services", "Equifax and TransUnion, the two largest of the three nationwide credit reporting bureaus", "Fannie Mae and Freddie Mac, the two government-sponsored enterprises in housing finance", "FICO and VantageScore, the two publishers of consumer credit scoring models"],
            correctIndex: 0,
            explanation: "The CFPB names them in its answer about being denied a checking account, read on 28 August 2026.",
            sourceLessonSlug: "a-report-you-did-not-know-existed",
          },
          {
            prompt: "Which statutory section defines a consumer reporting agency?",
            options: ["15 U.S.C. 1681a(f)", "15 U.S.C. 1681m(a), which sets what a user of a report must tell a consumer after adverse action", "15 U.S.C. 1681i(a), which governs reinvestigation of a disputed item in a consumer file", "12 CFR 1002.2(c), which defines adverse action for the purposes of Regulation B"],
            correctIndex: 0,
            explanation: "The definition covers any person regularly assembling consumer credit information or other information on consumers to furnish reports to third parties.",
            sourceLessonSlug: "a-report-you-did-not-know-existed",
          },
          {
            prompt: "Which words in the consumer-reporting-agency definition make it reach beyond credit?",
            options: ["Or other information", "For monetary fees, dues, or on a cooperative nonprofit basis, which covers every possible business model", "Uses any means or facility of interstate commerce, which covers any company with a website", "Regularly engages in whole or in part, which covers a company doing this as a sideline"],
            correctIndex: 0,
            explanation: "The definition reads credit information or other information on consumers, which is why a deposit-account history file falls inside it.",
            sourceLessonSlug: "a-report-you-did-not-know-existed",
          },
          {
            prompt: "What does 15 U.S.C. 1681a(d) define?",
            options: ["A consumer report", "A consumer reporting agency, being the company that assembles and furnishes the information", "A nationwide specialty consumer reporting agency and its five subject categories", "The duties of a person taking adverse action based on information in a consumer report"],
            correctIndex: 0,
            explanation: "It covers a communication bearing on credit worthiness, character, general reputation, personal characteristics or mode of living, used as a factor in an eligibility decision.",
            sourceLessonSlug: "a-report-you-did-not-know-existed",
          },
          {
            prompt: "How many subject categories does the nationwide specialty consumer reporting agency definition list?",
            options: ["Five", "Three, being medical records or payments, employment history, and insurance claims", "Two, being check writing history and residential or tenant history", "Eight, matching the eight nonbank financial services in the FDIC's underbanked definition"],
            correctIndex: 0,
            explanation: "Medical records or payments, residential or tenant history, check writing history, employment history, and insurance claims.",
            sourceLessonSlug: "a-report-you-did-not-know-existed",
          },
          {
            prompt: "Which specialty category covers checking-account screening?",
            options: ["Check writing history", "Employment history, since a bank verifies where an applicant works before opening an account", "Residential or tenant history, since a bank must confirm the applicant's stated address", "Insurance claims, since a deposit account is insured by the FDIC against institution failure"],
            correctIndex: 0,
            explanation: "It is the third of the five categories named at 15 U.S.C. 1681a(x).",
            sourceLessonSlug: "a-report-you-did-not-know-existed",
          },
          {
            prompt: "What follows from a screening company being a consumer reporting agency under the FCRA?",
            options: ["The consumer gets statutory rights", "The company must obtain written permission from the consumer before assembling any file", "The company is supervised directly by the FDIC as an insured depository institution", "The company must delete every negative entry after twelve months have elapsed"],
            correctIndex: 0,
            explanation: "The whole purpose of the statute is to give the person being reported on a set of rights, which is what the rest of this section teaches.",
            sourceLessonSlug: "a-report-you-did-not-know-existed",
          },
          {
            prompt: "What kinds of entries end up in a deposit-screening file?",
            options: ["Accounts closed with a negative balance", "The applicant's monthly income and every deposit made into a previous account", "The applicant's credit score as calculated by the three nationwide credit bureaus", "The applicant's complete transaction history at every institution over seven years"],
            correctIndex: 0,
            explanation: "Unpaid overdrafts, accounts closed owing money and suspected fraud are the kinds of things previous institutions report.",
            sourceLessonSlug: "a-report-you-did-not-know-existed",
          },
          {
            prompt: "In the CFPB's description, what is deposit account screening used to decide?",
            options: ["Whether to offer an account", "How large a monthly maintenance fee to charge a particular applicant for an account", "Whether an applicant qualifies for federal deposit insurance on the account", "How much overdraft coverage to extend on the account once it is opened"],
            correctIndex: 0,
            explanation: "The CFPB says institutions use it to help decide whether to offer a checking or savings account, or to accept personal checks and electronic funds transfer payments.",
            sourceLessonSlug: "a-report-you-did-not-know-existed",
          },
          {
            prompt: "Which provision governs what a user of a consumer report must tell a consumer after adverse action?",
            options: ["15 U.S.C. 1681m(a)", "15 U.S.C. 1681j(a), which sets the free annual file disclosure a consumer may request", "15 U.S.C. 1681a(x), which defines a nationwide specialty consumer reporting agency", "15 U.S.C. 1681i(a), which requires reinvestigation of an item the consumer disputes"],
            correctIndex: 0,
            explanation: "It applies when adverse action is taken based in whole or in part on information contained in a consumer report.",
            sourceLessonSlug: "the-adverse-action-notice",
          },
          {
            prompt: "What must an adverse action notice under 1681m(a) tell the consumer about the reporting agency?",
            options: ["Its name, address and telephone number", "The exact date on which the agency assembled the file the institution relied upon", "The identity of every institution that has furnished information into the file", "The fee the institution paid to obtain the report from that agency"],
            correctIndex: 0,
            explanation: "Naming the agency is what turns the letter into a pointer to a document the consumer can actually obtain.",
            sourceLessonSlug: "the-adverse-action-notice",
          },
          {
            prompt: "What statement about the reporting agency must the notice contain?",
            options: ["That it did not make the decision", "That it verified the accuracy of every item in the file before furnishing the report", "That it is supervised by the Consumer Financial Protection Bureau under federal law", "That it will remove any item the consumer objects to within thirty days of a request"],
            correctIndex: 0,
            explanation: "The statute requires a statement that the agency did not make the decision and is unable to provide the specific reasons why the adverse action was taken.",
            sourceLessonSlug: "the-adverse-action-notice",
          },
          {
            prompt: "Which two rights must the adverse action notice tell the consumer they have?",
            options: ["A free copy and a dispute", "A second review by the institution and an appeal to the institution's federal regulator", "An explanation of the principal reasons and a right to reapply after ninety days", "Compensation for the application fee and a referral to another insured institution"],
            correctIndex: 0,
            explanation: "The right to obtain a free copy of the report from the agency, and the right to dispute the accuracy or completeness of any information in it.",
            sourceLessonSlug: "the-adverse-action-notice",
          },
          {
            prompt: "Why does the lesson call the adverse action notice a thread rather than an answer?",
            options: ["It points at a file, not a reason", "Because the notice arrives weeks after the decision, by which time the file has already changed", "Because the notice is optional and many institutions choose not to send one at all", "Because the notice names the decision-maker but withholds the name of the reporting agency"],
            correctIndex: 0,
            explanation: "It must name the agency and must also say the agency cannot give the specific reasons, so it hands over a lead rather than an explanation.",
            sourceLessonSlug: "the-adverse-action-notice",
          },
          {
            prompt: "Which regulation carries the right to be told the principal reasons for a denial?",
            options: ["Regulation B", "Regulation E, which governs electronic fund transfers and the overdraft opt-in", "Regulation DD, which governs the account disclosures a depository institution must provide", "Regulation V, which governs the accuracy of information furnished to consumer reporting agencies"],
            correctIndex: 0,
            explanation: "It implements the Equal Credit Opportunity Act, and its adverse-action machinery is built around applications for credit.",
            sourceLessonSlug: "the-adverse-action-notice",
          },
          {
            prompt: "How does 12 CFR 1002.2(f) define an application?",
            options: ["A request for an extension of credit", "Any completed form submitted to a financial institution seeking a product or service", "A written request for any consumer financial product offered by a covered institution", "A request for credit or for a deposit account, whichever the consumer submits first"],
            correctIndex: 0,
            explanation: "It reads as an oral or written request for an extension of credit made in accordance with the creditor's procedures for that type of credit.",
            sourceLessonSlug: "the-adverse-action-notice",
          },
          {
            prompt: "Why does the Regulation B statement of principal reasons not attach to a checking-account denial?",
            options: ["A checking account is not credit", "Because Regulation B applies only to institutions above a stated asset threshold", "Because the applicant may reapply at any time, which removes the need for a statement", "Because the FCRA notice replaces it whenever a consumer report was used in the decision"],
            correctIndex: 0,
            explanation: "Regulation B's adverse action turns on a refusal to grant credit in response to an application, and an application is defined as a request for an extension of credit.",
            sourceLessonSlug: "the-adverse-action-notice",
          },
          {
            prompt: "A person is refused a loan and a checking account on the same afternoon. What differs?",
            options: ["Only the loan carries a right to reasons", "Only the account carries a right to be told which reporting agency was consulted", "Neither carries any notice obligation, since both are discretionary business decisions", "Both carry identical rights, since the Fair Credit Reporting Act governs each equally"],
            correctIndex: 0,
            explanation: "Both may carry the FCRA notice naming the agency, but only the credit refusal carries Regulation B's statement of principal reasons.",
            sourceLessonSlug: "the-adverse-action-notice",
          },
          {
            prompt: "What does the lesson tell a declined applicant to do first?",
            options: ["Read the notice for the agency's name", "Ask the branch manager to override the decision and reopen the application on the spot", "File a complaint with the institution's federal regulator before requesting any document", "Apply immediately at three other institutions to establish a pattern of refusals"],
            correctIndex: 0,
            explanation: "That name is the only line in the letter that leads to a document, and supplying it is the institution's statutory obligation.",
            sourceLessonSlug: "the-adverse-action-notice",
          },
          {
            prompt: "Under 1681m(a), what triggers the notice obligation?",
            options: ["Adverse action based on a consumer report", "Any denial of an application, whether or not a consumer report played any part in it", "A denial that the institution's own compliance department classifies as discriminatory", "A written request from the consumer within sixty days of the decision"],
            correctIndex: 0,
            explanation: "The section applies when adverse action is taken based in whole or in part on information contained in a consumer report.",
            sourceLessonSlug: "the-adverse-action-notice",
          },
          {
            prompt: "Which section gives a consumer a free file disclosure once every twelve months?",
            options: ["15 U.S.C. 1681j(a)(1)(A)", "15 U.S.C. 1681i(a)(5)(A), which requires deletion of an item that cannot be verified", "15 U.S.C. 1681m(a), which sets out the contents of an adverse action notice", "15 U.S.C. 1681a(x), which lists the five nationwide specialty categories"],
            correctIndex: 0,
            explanation: "It applies to nationwide agencies and nationwide specialty agencies, once during any 12-month period, upon request and without charge.",
            sourceLessonSlug: "getting-and-fixing-your-file",
          },
          {
            prompt: "Must a consumer be denied something before requesting a free annual file disclosure?",
            options: ["No", "Yes, the free disclosure opens only after an adverse action notice has been received", "Yes, unless the consumer is currently unemployed and seeking work within sixty days", "Yes, and the request must be made within sixty days of the denial to be free"],
            correctIndex: 0,
            explanation: "The annual disclosure is available for the asking. The sixty-day window after an adverse action is a separate, additional right.",
            sourceLessonSlug: "getting-and-fixing-your-file",
          },
          {
            prompt: "How long does the sixty-day free-disclosure window run from?",
            options: ["The adverse action notification", "The date the consumer's account was closed by the previous institution", "The date the reporting agency last received information from a furnisher", "The date of the consumer's most recent annual free file disclosure request"],
            correctIndex: 0,
            explanation: "Section 1681j(b) opens a free disclosure to a consumer who requests it within 60 days of receiving notification that a rating may be adversely affected.",
            sourceLessonSlug: "getting-and-fixing-your-file",
          },
          {
            prompt: "Which of these is a free-disclosure trigger under 15 U.S.C. 1681j(c)?",
            options: ["Receiving public welfare assistance", "Holding an account at an institution that has closed a branch within the past year", "Having been refused an account by more than one institution in a calendar year", "Having lived at the same address for fewer than twelve months"],
            correctIndex: 0,
            explanation: "The section also covers a consumer unemployed and seeking employment within 60 days, and one who believes the file contains fraud-related inaccuracies.",
            sourceLessonSlug: "getting-and-fixing-your-file",
          },
          {
            prompt: "Which section requires an agency to reinvestigate a disputed item?",
            options: ["15 U.S.C. 1681i(a)(1)(A)", "15 U.S.C. 1681j(a)(1)(A), which entitles a consumer to one free disclosure every twelve months", "15 U.S.C. 1681m(a), which governs what a user must say after taking adverse action", "12 CFR 1030.4(b)(4), which requires disclosure of the conditions under which a fee applies"],
            correctIndex: 0,
            explanation: "The duty is triggered when the consumer disputes the completeness or accuracy of an item and notifies the agency.",
            sourceLessonSlug: "getting-and-fixing-your-file",
          },
          {
            prompt: "What must a reinvestigation determine or do?",
            options: ["Check the item or delete it", "Contact every institution the consumer has ever banked with to confirm the entry", "Refer the dispute to the Consumer Financial Protection Bureau for a written determination", "Suspend furnishing of the entire file until the consumer withdraws the dispute"],
            correctIndex: 0,
            explanation: "The agency must conduct a reasonable reinvestigation, record the current status of the disputed information, or delete the item.",
            sourceLessonSlug: "getting-and-fixing-your-file",
          },
          {
            prompt: "How long does an agency generally have to complete a reinvestigation?",
            options: ["Thirty days", "Sixty days, matching the window in which a free disclosure may be requested after adverse action", "Five business days, matching the deadline for notifying the consumer of the results", "Twelve months, matching the interval between free annual file disclosures"],
            correctIndex: 0,
            explanation: "The period runs from the date the agency receives the notice, and may be extended by up to fifteen additional days in one stated circumstance.",
            sourceLessonSlug: "getting-and-fixing-your-file",
          },
          {
            prompt: "What extends the reinvestigation period by up to fifteen days?",
            options: ["Relevant information from the consumer", "A request from the furnishing institution for additional time to research the entry", "The agency receiving more than one dispute from the same consumer in a single month", "A determination by the agency that the disputed item is frivolous or irrelevant"],
            correctIndex: 0,
            explanation: "The extension applies when the agency receives relevant information from the consumer during the original thirty-day period.",
            sourceLessonSlug: "getting-and-fixing-your-file",
          },
          {
            prompt: "What must happen to an item that is found inaccurate, incomplete, or that cannot be verified?",
            options: ["It must be promptly deleted or modified", "It must be flagged as disputed and retained in the file for the remainder of its reporting period", "It must be referred to the furnisher, which then decides whether to keep or remove it", "It must be replaced with a statement supplied by the consumer describing the dispute"],
            correctIndex: 0,
            explanation: "Section 1681i(a)(5)(A) says the agency shall promptly delete the item from the consumer's file or modify it.",
            sourceLessonSlug: "getting-and-fixing-your-file",
          },
          {
            prompt: "Why does the phrase 'cannot be verified' matter so much?",
            options: ["The burden is on the agency", "Because it lets a consumer remove any entry simply by disputing it in writing", "Because it applies only to items furnished by an institution that has since failed", "Because it converts the thirty-day period into an indefinite one while verification is attempted"],
            correctIndex: 0,
            explanation: "The consumer does not have to prove the entry false; if the agency cannot verify it, the item goes.",
            sourceLessonSlug: "getting-and-fixing-your-file",
          },
          {
            prompt: "How soon must the agency give written notice of the results of a reinvestigation?",
            options: ["Within five business days of completing it", "Within thirty days of receiving the consumer's original notice of the dispute", "Within sixty days, matching the adverse-action free-disclosure window", "Within fifteen days of any extension granted during the reinvestigation"],
            correctIndex: 0,
            explanation: "Section 1681i(a)(6) also requires a revised report, a description of the procedure on request, and notice that the consumer may add a statement of dispute.",
            sourceLessonSlug: "getting-and-fixing-your-file",
          },
          {
            prompt: "What does a successful dispute NOT do?",
            options: ["Oblige a bank to open an account", "Remove an inaccurate entry from the consumer's file at the reporting agency", "Trigger written notice of the results to the consumer within five business days", "Require the agency to record the current status of the disputed information"],
            correctIndex: 0,
            explanation: "A dispute is a mechanism for accuracy. No bank is required to offer an account to anyone, whatever the file says.",
            sourceLessonSlug: "getting-and-fixing-your-file",
          },
          {
            prompt: "Does correcting a file settle a debt owed to a former institution?",
            options: ["No", "Yes, deletion of the entry extinguishes the underlying obligation as a matter of law", "Yes, provided the consumer disputes within sixty days of the account being closed", "Yes for an overdraft balance and no for a balance arising from suspected fraud"],
            correctIndex: 0,
            explanation: "Correcting what is reported and paying what is owed are separate acts, and the FCRA governs only the first.",
            sourceLessonSlug: "getting-and-fixing-your-file",
          },
          {
            prompt: "What does this course say it could NOT establish from ChexSystems' own pages?",
            options: ["How long an item stays in a file", "Whether the company is a consumer reporting agency under the Fair Credit Reporting Act", "How a consumer may request a copy of their own consumer disclosure report", "Whether the free annual disclosure is available without an adverse action notice"],
            correctIndex: 0,
            explanation: "The retention period was not stated on the pages read on 28 August 2026, so the course leaves it open and files a source check instead of guessing.",
            sourceLessonSlug: "getting-and-fixing-your-file",
          },
          {
            prompt: "What inconsistency between two CFPB pages does the lesson report rather than smooth over?",
            options: ["Which companies sit in the screening category", "Whether a free annual report is available to consumers who have not been denied an account", "Whether an adverse action notice must name the reporting company at all", "Whether a checking account application counts as an application for credit"],
            correctIndex: 0,
            explanation: "The Ask CFPB answer names Chex Systems and Early Warning Services while the published list, last updated 13 March 2025, showed one company under bank account screening.",
            sourceLessonSlug: "getting-and-fixing-your-file",
          },
          {
            prompt: "How does ChexSystems itself describe the consumer's right to a copy of the file?",
            options: ["Free at least once every 12 months on request", "Available for a fee set by the company and published on its consumer disclosure page", "Available only to consumers who supply a copy of an adverse action notice", "Available once in any consumer's lifetime, after which a charge applies"],
            correctIndex: 0,
            explanation: "The company cites the Fair Credit Reporting Act as the basis, matching 15 U.S.C. 1681j(a)(1)(A).",
            sourceLessonSlug: "getting-and-fixing-your-file",
          },
          {
            prompt: "Which routes does ChexSystems publish for requesting a disclosure?",
            options: ["Online, by telephone, or by post", "Only in person at a branch of the institution that denied the application", "Only through the consumer's own bank, which must forward the request", "Only by written request accompanied by a notarised statement of identity"],
            correctIndex: 0,
            explanation: "Its consumer disclosure page lists a consumer portal, a telephone number, and a mailed form with authentication documents, read on 28 August 2026.",
            sourceLessonSlug: "getting-and-fixing-your-file",
          },
          {
            prompt: "What is a furnisher, in the deposit-screening context?",
            options: ["The institution that reports into the file", "The company that assembles the file and sells reports to banks and credit unions", "The consumer, who supplies information about themselves on an account application", "The regulator that supervises the reporting company under federal law"],
            correctIndex: 0,
            explanation: "The bank or credit union that held the previous account is the source of the entry, and the next institution is the reader.",
            sourceLessonSlug: "a-report-you-did-not-know-existed",
          },
          {
            prompt: "Why does the lesson say the report is not sitting in a gap in the law?",
            options: ["The FCRA names its category by statute", "Because the CFPB supervises every checking account reporting company as a large participant", "Because state banking law fills any space the federal statute leaves uncovered", "Because the companies voluntarily agreed to follow the credit-reporting rules"],
            correctIndex: 0,
            explanation: "Check writing history is one of the five subjects Congress wrote into the nationwide specialty agency definition.",
            sourceLessonSlug: "a-report-you-did-not-know-existed",
          },
          {
            prompt: "The definition of a consumer report includes information bearing on what, besides credit standing?",
            options: ["Character and general reputation", "The consumer's employment status at the moment the report is furnished to the user", "The consumer's account balances at every institution the agency has data from", "The consumer's tax filings for the three years preceding the request"],
            correctIndex: 0,
            explanation: "The section names credit worthiness, credit standing, credit capacity, character, general reputation, personal characteristics, and mode of living.",
            sourceLessonSlug: "a-report-you-did-not-know-existed",
          },
          {
            prompt: "Which of these is one of the five nationwide specialty subjects?",
            options: ["Residential or tenant history", "Bank account balances held across all federally insured depository institutions", "Retail purchase history compiled from merchant loyalty programmes nationwide", "Utility payment history reported by regulated gas and electric suppliers"],
            correctIndex: 0,
            explanation: "The five are medical records or payments, residential or tenant history, check writing history, employment history, and insurance claims.",
            sourceLessonSlug: "a-report-you-did-not-know-existed",
          },
          {
            prompt: "What is the practical relationship between the two gates in this course?",
            options: ["Identity decides if, screening decides whether", "Both are governed by the same federal rule and are enforced by the same agency", "Screening runs first and identity verification only if the screening report is clean", "Clearing either one obliges the institution to open the account"],
            correctIndex: 0,
            explanation: "The Customer Identification Program rule governs whether an account can be opened at all; the screening report informs whether the institution will open one.",
            sourceLessonSlug: "a-report-you-did-not-know-existed",
          },
          {
            prompt: "Under 1681j(a)(1)(A), how is the free disclosure obtained?",
            options: ["Upon request of the consumer", "Automatically, mailed by the agency to every consumer once each calendar year", "Through the consumer's bank, which must order it on the customer's behalf", "By purchasing it and applying for a refund from the agency within thirty days"],
            correctIndex: 0,
            explanation: "The section says the agency shall make the disclosures once during any 12-month period upon request and without charge.",
            sourceLessonSlug: "getting-and-fixing-your-file",
          },
          {
            prompt: "Which disclosures does 1681j(a)(1)(A) require the agency to make free of charge?",
            options: ["Those under section 1681g", "Only the portion of the file relating to accounts closed within the past twelve months", "A summary of the file rather than the file itself, which remains available for a fee", "Only the identity of the institutions that have obtained the report in the past year"],
            correctIndex: 0,
            explanation: "The section cross-refers to 1681g, which is the general disclosure-to-consumers provision of the statute.",
            sourceLessonSlug: "getting-and-fixing-your-file",
          },
          {
            prompt: "What is the honest limit of what a dispute can achieve?",
            options: ["Accuracy, not outcomes", "Removal of any entry the consumer considers unfair to their circumstances", "An explanation from the bank of the specific reasons for the original denial", "A requirement that the previous institution reopen the closed account"],
            correctIndex: 0,
            explanation: "It does not remove a true entry, does not oblige a bank to open an account, and does not settle any underlying debt.",
            sourceLessonSlug: "getting-and-fixing-your-file",
          },
          {
            prompt: "Why does the course print both CFPB pages with their dates rather than choosing one?",
            options: ["Because they disagree and both were read", "Because federal agencies require every reproduced page to carry a retrieval date", "Because one page is the official rule and the other is unofficial guidance", "Because the two pages describe different states and neither applies nationally"],
            correctIndex: 0,
            explanation: "Smoothing a source-internal disagreement into one confident sentence is exactly what this catalog refuses to do, so both are stated as read with a source check filed.",
            sourceLessonSlug: "getting-and-fixing-your-file",
          },
          {
            prompt: "A consumer wants to see their screening file before applying anywhere. Can they?",
            options: ["Yes, under the annual free disclosure", "No, the file is released only to institutions with a permissible purpose for obtaining it", "No, unless they have been denied an account within the preceding sixty days", "Only if their previous account was closed with a zero or positive balance"],
            correctIndex: 0,
            explanation: "The annual free file disclosure requires no denial and no reason, which makes reading the file before applying entirely possible.",
            sourceLessonSlug: "getting-and-fixing-your-file",
          },
          {
            prompt: "Which document does the adverse action notice send a consumer toward?",
            options: ["Their own file at the reporting agency", "The institution's written lending policy, which explains how applications are evaluated", "The Consumer Financial Protection Bureau's list of consumer reporting companies", "The account disclosures the institution would have provided had the account been opened"],
            correctIndex: 0,
            explanation: "The notice names the agency and states the consumer's right to a free copy of the report and to dispute what is in it.",
            sourceLessonSlug: "the-adverse-action-notice",
          },
          {
            prompt: "How does 12 CFR 1002.2(c) define adverse action, in relevant part?",
            options: ["A refusal to grant credit as requested", "Any decision that leaves an applicant worse off than before the application was made", "The closure of an existing deposit account without the account holder's consent", "The reporting of a negative entry to a consumer reporting agency by a furnisher"],
            correctIndex: 0,
            explanation: "The definition speaks of a refusal to grant credit in substantially the amount or on substantially the terms requested in an application, unless the creditor makes a counteroffer.",
            sourceLessonSlug: "the-adverse-action-notice",
          },
          {
            prompt: "Which of these is NOT required by 15 U.S.C. 1681m(a)?",
            options: ["The specific reasons for the decision", "Notice of the adverse action itself, given orally, in writing or electronically", "The name, address and telephone number of the consumer reporting agency", "Notice of the right to dispute the accuracy or completeness of information in the report"],
            correctIndex: 0,
            explanation: "The statute requires the opposite: a statement that the agency cannot provide the specific reasons why the adverse action was taken.",
            sourceLessonSlug: "the-adverse-action-notice",
          },
          {
            prompt: "What is the design purpose of naming the agency in the notice?",
            options: ["So the consumer can obtain the file", "So the consumer can complain about the agency to its federal supervisor", "So the consumer can require the agency to explain the institution's decision", "So the consumer can apply directly to the agency for a second opinion"],
            correctIndex: 0,
            explanation: "The notice hands over the one piece of information that leads to a document the consumer can read, dispute and correct.",
            sourceLessonSlug: "the-adverse-action-notice",
          },
          {
            prompt: "Why does this course treat the deposit-screening report and the credit report as different subjects?",
            options: ["They are different files from different companies", "Because only one of them is governed by the Fair Credit Reporting Act", "Because a deposit screening report contains no information about the consumer's identity", "Because credit reports are supplied by banks and screening reports are supplied by merchants"],
            correctIndex: 0,
            explanation: "Credit reports and scores are the subject of the credit course in this series; the file behind an account denial is a separate one held by a specialty agency.",
            sourceLessonSlug: "a-report-you-did-not-know-existed",
          },
          {
            prompt: "What does the survey item about past banking history tell you that the other items do not?",
            options: ["That someone was refused", "That the household chose to avoid banks for reasons of privacy or trust", "That the household could not meet a minimum balance requirement at any institution", "That the household lives too far from a branch to open an account in person"],
            correctIndex: 0,
            explanation: "It describes something done to a household rather than a decision it made, which is why the machinery behind it deserves a section.",
            sourceLessonSlug: "a-report-you-did-not-know-existed",
          },
          {
            prompt: "Who assembles a deposit screening file, in the FCRA's terms?",
            options: ["A consumer reporting agency", "A furnisher, which is the institution that reports the underlying entries", "A user, which is the institution that obtains and relies on the report", "A reseller, which redistributes files assembled by the nationwide credit bureaus"],
            correctIndex: 0,
            explanation: "Furnishers report into the file, users obtain it, and the agency in the middle assembles and sells it.",
            sourceLessonSlug: "a-report-you-did-not-know-existed",
          },
          {
            prompt: "What does the phrase 'based in whole or in part' do in 1681m(a)?",
            options: ["It catches partial reliance on the report", "It limits the duty to decisions made entirely on the basis of the consumer report", "It allows the user to choose whether the notice is required in any given case", "It requires the user to state what proportion of the decision rested on the report"],
            correctIndex: 0,
            explanation: "A report that was one factor among several still triggers the notice, which is why the duty is hard for a user to avoid.",
            sourceLessonSlug: "the-adverse-action-notice",
          },
          {
            prompt: "Which right does a consumer hold whether or not they were ever denied anything?",
            options: ["The free annual file disclosure", "The right to be told the principal reasons for a decision under Regulation B", "The right to a reinvestigation completed within five business days", "The right to have a bank open an account once the file is corrected"],
            correctIndex: 0,
            explanation: "Section 1681j(a)(1)(A) is available on request, once in any twelve-month period, with no denial required.",
            sourceLessonSlug: "getting-and-fixing-your-file",
          },
          {
            prompt: "How does a consumer start a reinvestigation?",
            options: ["By notifying the agency of the dispute", "By notifying the bank that furnished the entry and asking it to withdraw the report", "By filing a complaint with the Consumer Financial Protection Bureau's complaint database", "By requesting the free annual file disclosure and marking the disputed entry on it"],
            correctIndex: 0,
            explanation: "The duty at 1681i(a)(1)(A) is triggered when the consumer notifies the agency directly, or indirectly through a reseller.",
            sourceLessonSlug: "getting-and-fixing-your-file",
          },
          {
            prompt: "What may a consumer add to a file after an unsuccessful dispute?",
            options: ["A statement of dispute", "A copy of the adverse action notice they received from the denying institution", "A certification from a licensed accountant that the entry is inaccurate", "A request that the entry be suppressed for a period of twelve months"],
            correctIndex: 0,
            explanation: "Section 1681i(a)(6) requires the agency to notify the consumer that they may add a statement of dispute to the file.",
            sourceLessonSlug: "getting-and-fixing-your-file",
          },
          {
            prompt: "What is the practical difference between the annual disclosure and the sixty-day window?",
            options: ["One needs no denial, the other follows one", "One is free and the other is charged at a fee set by the agency", "One covers the whole file and the other covers only the disputed entries", "One applies to credit bureaus and the other to specialty agencies"],
            correctIndex: 0,
            explanation: "The annual right at 1681j(a) requires nothing more than a request; the right at 1681j(b) opens on receiving an adverse-action notification.",
            sourceLessonSlug: "getting-and-fixing-your-file",
          },
          {
            prompt: "This section's central claim about the screening system is best summarised how?",
            options: ["It is a legal file with a legal remedy", "It is an informal industry list with no statutory footing and no consumer recourse", "It is maintained by federal regulators rather than by private companies", "It is identical to the credit report and can be obtained from the same source"],
            correctIndex: 0,
            explanation: "Being a consumer reporting agency brings the notice duty, the free disclosure and the reinvestigation duty with it.",
            sourceLessonSlug: "a-report-you-did-not-know-existed",
          },
          {
            prompt: "What does the reinvestigation duty require the agency to do about status?",
            options: ["Record the current status of the item", "Publish a correction to every user who obtained the report in the previous year", "Freeze the file until the dispute is resolved and refuse all requests for it", "Substitute the consumer's own account of events for the furnisher's entry"],
            correctIndex: 0,
            explanation: "The section says the agency must determine whether the information is inaccurate and record the current status of the disputed information, or delete the item.",
            sourceLessonSlug: "getting-and-fixing-your-file",
          },
          {
            prompt: "Which sentence best captures why almost nobody exercises these rights?",
            options: ["Most people do not know the report exists", "Most people are told the rights are unavailable to deposit account applicants", "Most people are charged a fee that makes the annual disclosure impractical", "Most people are required to hire an attorney before an agency will respond"],
            correctIndex: 0,
            explanation: "Rather more people have been turned down because of it than have ever read it, which is the gap this section is written to close.",
            sourceLessonSlug: "a-report-you-did-not-know-existed",
          },
          {
            prompt: "What relationship does the notice describe between the reporting agency and the decision?",
            options: ["The agency did not make it", "The agency made it on behalf of the institution using an automated model", "The agency and the institution made it jointly under a shared underwriting policy", "The agency reviewed and approved the institution's decision before it was communicated"],
            correctIndex: 0,
            explanation: "The required statement says the agency did not make the decision and is unable to provide the specific reasons why it was taken.",
            sourceLessonSlug: "the-adverse-action-notice",
          },
          {
            prompt: "Why is the CFPB's Ask CFPB answer cited with its review date in this course?",
            options: ["Agency guidance can change", "Because the answer contradicts the statute and the date shows which came first", "Because the CFPB requires a review date whenever its guidance is quoted", "Because the answer applies only to consumers in states that adopted it"],
            correctIndex: 0,
            explanation: "It was last reviewed 18 December 2024 and read on 28 August 2026, and this course dates every external source rather than presenting guidance as timeless.",
            sourceLessonSlug: "getting-and-fixing-your-file",
          },
          {
            prompt: "What does the CFPB say checking account reporting companies must do with a consumer's dispute?",
            options: ["Investigate it and correct inaccurate information", "Forward it to the institution that furnished the entry and take no further action", "Suspend the entry from the file until the consumer withdraws the dispute in writing", "Charge a research fee before beginning any review of the disputed information"],
            correctIndex: 0,
            explanation: "The CFPB's answer matches the statutory duty at 15 U.S.C. 1681i, which requires a reasonable reinvestigation and deletion or modification of what cannot be verified.",
            sourceLessonSlug: "getting-and-fixing-your-file",
          },
          {
            prompt: "Which body of law is doing the work in this whole section?",
            options: ["The Fair Credit Reporting Act", "The Equal Credit Opportunity Act, whose adverse-action machinery turns on requests for credit", "The Truth in Savings Act, which governs the disclosure of deposit account fees", "The Electronic Fund Transfer Act, which governs overdraft opt-in and prepaid disclosures"],
            correctIndex: 0,
            explanation: "The definitions, the notice duty, the free disclosure and the reinvestigation duty are all sections of 15 U.S.C. 1681.",
            sourceLessonSlug: "a-report-you-did-not-know-existed",
          },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 4 — Overdraft, and where the cost lands
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "overdraft-is-a-mechanism",
      title: "13 · Overdraft is a mechanism, and it has an on switch",
      section: "Section 4 · Overdraft, and where the cost lands",
      body: `An overdraft fee is not a penalty the bank is obliged to charge. It is the price of a service, and for one important class of transactions the service is one you had to switch on.

**The regulation is Regulation E, 12 CFR 1005.17(b).** Before assessing a fee for paying an **ATM or one-time debit card** transaction that overdraws an account, an institution must do four things in order:

1. Provide "a notice in writing, or if the consumer agrees, electronically, **segregated from all other information**, describing the institution's overdraft service";
2. Provide "a reasonable opportunity for the consumer to affirmatively consent, or opt in, to the service for ATM and one-time debit card transactions";
3. Obtain "the consumer's affirmative consent, or opt-in"; and
4. Provide "confirmation of the consumer's consent in writing", including "a statement informing the consumer of the right to revoke such consent".

**The word "segregated" is doing work.** The notice cannot be a clause buried in a signature packet. It has to stand apart, which is a small piece of regulatory design aimed at exactly the failure it names.

**Now the boundary of the rule, which is the single most misunderstood fact about overdraft.** The opt-in covers **ATM withdrawals and one-time debit card purchases**. It does not cover a paper check. It does not cover an automated clearing house payment, which is how most rent, utility and loan payments move. It does not cover a **recurring** debit card payment, such as a subscription set up on the card.

**So a person can decline overdraft coverage and still be charged an overdraft fee.** They declined it for the transactions the rule covers. The rent payment that hit on the wrong day was never inside the rule. Understanding that boundary is the difference between believing you turned something off and knowing exactly what you turned off.

**Two more mechanics worth knowing, because they decide how many fees a single short day produces.** Fees are generally charged **per item**, so one morning with three transactions and a low balance is not automatically one fee. And the **order in which items are posted** during the day determines which of them overdraw. Both of these are institution practice rather than a single national rule, so the place to read them is the account disclosures from Section 1 and the account agreement, not this course.

**And the fourth step of the opt-in rule is the one people forget: consent is revocable.** The confirmation the institution sends has to say so. If you opted in years ago and have not thought about it since, that is a decision you are still making.

${NOT_ADVICE}

**Nothing here tells you whether to opt in.** For some households, having a debit card purchase go through matters more than the fee; for others the reverse. This lesson tells you that the switch exists, what it covers, what it does not, and that it can be flipped back.

:::reveal Which transactions does the Regulation E overdraft opt-in cover? ||| ATM withdrawals and one-time debit card transactions, and only those.

:::reveal Name two kinds of payment the opt-in does NOT cover. ||| Paper checks and automated clearing house payments, and also recurring debit card payments.

:::reveal What must the confirmation of an opt-in tell the consumer? ||| That the consent can be revoked.

## Vocabulary
- **Overdraft service**: an institution paying a transaction that would overdraw an account, and charging a fee for doing so.
- **Opt-in**: the affirmative consent Regulation E requires before an overdraft fee may be charged on an ATM or one-time debit card transaction.
- **Segregated notice**: the requirement that the overdraft-service description stand apart from all other information rather than sit inside a packet.
- **Per-item fee**: the common structure in which each overdrawing transaction is charged separately, so one short day can produce several fees.
- **Posting order**: the sequence in which a day's transactions are applied to a balance, which determines which of them overdraw.

## Sources
Consumer Financial Protection Bureau. (n.d.). *12 CFR 1005.17 - Requirements for overdraft services*. https://www.consumerfinance.gov/rules-policy/regulations/1005/17/

Federal Deposit Insurance Corporation. (2024, November). *2023 FDIC national survey of unbanked and underbanked households*. https://www.fdic.gov/household-survey`,
    },
    {
      slug: "the-rule-that-was-repealed",
      title: "14 · The rule that was made, and then unmade",
      section: "Section 4 · Overdraft, and where the cost lands",
      body: `Here is a thing a course written in early 2025 would have got wrong, which is why this one names dates.

**In December 2024 the Consumer Financial Protection Bureau finalised a rule** titled *Overdraft Lending: Very Large Financial Institutions*. **In 2025 Congress disapproved it.** Senate Joint Resolution 18 became **Public Law 119-10**, approved **9 May 2025**, and its official title is "Joint resolution disapproving the rule submitted by the Bureau of Consumer Financial Protection relating to 'Overdraft Lending: Very Large Financial Institutions'" (U.S. Government Publishing Office, n.d.).

**The mechanism that did it is worth knowing on its own, because it applies far beyond banking.** The Congressional Review Act lets Congress nullify a recently finalised agency rule by joint resolution. Its consequence is unusually strong: under **5 U.S.C. 801(b)(2)**, a rule disapproved this way "may not be reissued in substantially the same form, and a new rule that is substantially the same as such a rule may not be issued, unless the reissued or new rule is specifically authorized by a law enacted after the date of the joint resolution."

**Read that clause carefully.** A disapproval does not merely cancel the rule. It closes the door on the agency writing that rule again, absent a new statute. So the correct present-tense sentence about the 2024 overdraft rule is: **it is not in force, and the agency cannot reissue it in substantially the same form.**

**What that leaves standing.** The Regulation E opt-in from the previous lesson is untouched: it is an older rule, and nothing here disturbed it. Institutions set their own overdraft fee amounts, and the Truth in Savings disclosure requirement from Section 1 is how you read them.

**Now the money, and its own caveat.** The CFPB publishes overdraft and non-sufficient-funds fee revenue from bank call reports. Its Data Spotlight of **24 April 2024**, read on **28 August 2026**, reported that "combined reported bank overdraft/NSF fee revenue was $5.83 billion" in 2023, "a decrease of 51%, or $6.13 billion, compared to the $11.96 billion reported in 2019" (CFPB, 2024).

**And then the sentence that makes the figure honest.** The same document states that the revenue "excludes overdraft/NSF revenue generated by banks with assets of $1 billion or less, which are not required to report overdraft/NSF fee revenue as a separate line item in their call report data, as well as overdraft/NSF revenue generated by all credit unions."

**So $5.83 billion is a floor, not a total.** Every small bank and every credit union in the country is outside it. That is not a criticism of the CFPB, which says so plainly in its own text. It is a lesson about reading any number built from a regulatory filing: **the filing threshold defines the number**, and if you do not know the threshold you do not know what you are holding.

**The pattern to carry away is the one this course keeps returning to.** A figure has a date. A rule has a status. And a total assembled from mandatory reports covers exactly the institutions the mandate reaches.

:::reveal What happened to the CFPB's 2024 overdraft rule? ||| Congress disapproved it. Public Law 119-10, approved 9 May 2025, nullified it under the Congressional Review Act.

:::reveal What does 5 U.S.C. 801(b)(2) prevent after a disapproval? ||| Reissuing the rule in substantially the same form, or issuing a substantially similar new one, unless a later statute specifically authorises it.

:::reveal Why is the CFPB's $5.83 billion figure a floor rather than a total? ||| It excludes banks with $1 billion or less in assets, which do not report the item separately, and it excludes all credit unions.

## Vocabulary
- **Congressional Review Act**: the procedure by which Congress may nullify a recently finalised agency rule by joint resolution, with an unusually strong bar on reissuing it.
- **Joint resolution of disapproval**: the instrument used, which becomes a public law when signed, as Public Law 119-10 did on 9 May 2025.
- **Substantially the same form**: the statutory phrase that stops an agency reissuing a disapproved rule without new authorising legislation.
- **Call report**: the periodic regulatory filing from which the CFPB's overdraft revenue figures are built, and whose reporting threshold defines what the figures can cover.
- **A floor, not a total**: how to read any aggregate assembled from mandatory filings that only some institutions are required to make.

## Sources
U.S. Government Publishing Office. (n.d.). *Public Law 119-10*. https://www.govinfo.gov/app/details/PLAW-119publ10

5 U.S.C. § 801. (n.d.). *Congressional review*. Office of the Law Revision Counsel, U.S. House of Representatives. https://uscode.house.gov/view.xhtml?req=granuleid:USC-prelim-title5-section801&num=0&edition=prelim

Consumer Financial Protection Bureau. (2024, April 24). *Overdraft/NSF revenue in 2023 down more than 50% versus pre-pandemic levels, saving consumers over $6 billion annually*. https://www.consumerfinance.gov/data-research/research-reports/data-spotlight-overdraft-nsf-revenue-in-2023-down-more-than-50-versus-pre-pandemic-levels-saving-consumers-over-6-billion-annually/`,
    },
    {
      slug: "why-the-cost-lands-on-a-low-balance",
      title: "15 · Why the cost lands where it does, and what an alternative looks like",
      section: "Section 4 · Overdraft, and where the cost lands",
      body: `Put the last two sections together and the shape of the problem is arithmetic rather than opinion.

**A household with a comfortable balance is charged almost nothing.** The maintenance fee is waived by the balance itself. No transaction overdraws, so no per-item fee is charged. The account is genuinely free, and the person holding it will tell you honestly that banking costs them nothing.

**A household whose balance runs near zero pays the same account's other price.** The maintenance fee applies in exactly the months the balance dipped. A transaction that arrives before a deposit clears triggers a per-item fee, and because fees are per item, a single bad day can produce several. The account is expensive, and it is most expensive in the worst weeks.

**The mechanism that creates the bad day is timing, not overspending.** Rent is due on the first. Pay lands on the fifth. That gap is not a budgeting failure and no amount of planning removes it, because the household does not control either date. Every fee described in this section is triggered by a **sequence**, and a household with a cushion never meets the sequence at all.

**This is why the survey answer in Section 2 was two answers.** 30.7 percent of unbanked households said bank account fees are too high; **29.3 percent** said they are too **unpredictable** (FDIC, 2024). Those are different complaints. A predictable cost can be planned around at any income. An unpredictable one cannot, and it is the unpredictability that makes a fee you can read off a wall look attractive by comparison. Section 5 is about the market that sells exactly that.

**Now, is a different account structure possible?** Yes, and it exists, which is worth knowing because it turns an argument into a comparison.

**The Bank On National Account Standards are a voluntary certification, not a law.** They are published by the **Cities for Financial Empowerment Fund**, a nonprofit, and an institution's account is certified against them only if it applies. Nothing requires any bank to offer one. Read on **28 August 2026**, the **2025-2026** standards require, among the core features:

- **Minimum opening deposit**: "$25 or less".
- **Monthly maintenance fee**: "If not waivable: $5 or less. If waivable: $10 or less; offer at least two options to waive fee entirely with a single transaction".
- **Overdraft or Non-Sufficient Funds (NSF) Fees**: "**None**".
- **Account Activation, Closure, Dormancy, Inactivity, and Low Balance Fees**: "None".
- **Insured Account**: "Deposits Insured by FDIC, NCUSIF, or regulator-sanctioned equivalent" (CFE Fund, 2025).

**And two of its strongly recommended features answer this course's two gates directly.** On account screening, it recommends institutions "Only deny new customers for past incidences of actual fraud". On documentation, it recommends they "Accept ITINs and government-issued IDs (e.g., municipal, consular, other government) as primary documentation for account opening" (CFE Fund, 2025).

**Notice what that second recommendation implies.** Nothing in the Customer Identification Program rule from Section 1 prevented accepting an ITIN. The standard is not asking institutions to break a rule. It is asking them to stop requiring more than the rule does.

**This course names the standards because they are a published document you can read, not as a recommendation.** Whether such an account exists near you, and whether it suits you, is not something this course can know.

:::reveal Why is a low-balance household charged more for the same account? ||| The maintenance fee applies in the months its balance dips, and per-item overdraft fees trigger on a sequence a household with a cushion never meets.

:::reveal What makes an unpredictable fee different from an expensive one? ||| A predictable cost can be planned around at any income. An unpredictable one cannot, which is why 29.3 percent gave unpredictability as a separate reason.

:::reveal What do the Bank On standards say about overdraft and NSF fees? ||| None, with no grace period, warning or reversal exception.

## Vocabulary
- **Timing gap**: the interval between when money is due and when it arrives, which is what triggers overdraft rather than overspending.
- **Per-item fee structure**: the practice of charging separately for each overdrawing transaction, so a single day can produce several fees.
- **Bank On National Account Standards**: a voluntary certification published by the Cities for Financial Empowerment Fund setting core features for a low-cost transaction account.
- **Certification, not regulation**: the correct status of those standards, since no institution is required to offer or apply for a certified account.
- **Requiring more than the rule**: the gap the standards' documentation recommendation addresses, since the federal identity rule never barred an ITIN.

## Sources
Cities for Financial Empowerment Fund. (2025). *Bank On national account standards (2025-2026)*. https://joinbankon.org/

Federal Deposit Insurance Corporation. (2024, November). *2023 FDIC national survey of unbanked and underbanked households*. https://www.fdic.gov/household-survey`,
    },
    {
      slug: "quiz-overdraft-and-cost",
      title: "16 · Knowledge check: the opt-in, the repeal, and the price",
      section: "Section 4 · Overdraft, and where the cost lands",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "Which regulation sets the overdraft opt-in requirement?",
            options: ["12 CFR 1005.17", "12 CFR 1030.4, which requires account disclosures before opening and upon request", "15 U.S.C. 1681m, which governs adverse action notices based on consumer reports", "31 CFR 1020.220, which sets the identifying information required before an account is opened"],
            correctIndex: 0,
            explanation: "It is part of Regulation E, and it applies before a fee may be assessed for paying an ATM or one-time debit card transaction that overdraws.",
            sourceLessonSlug: "overdraft-is-a-mechanism",
          },
          {
            prompt: "How many steps does the opt-in rule require before an overdraft fee may be charged?",
            options: ["Four", "One, being the consumer's signature on the account agreement at opening", "Two, being a written notice followed by the consumer's consent", "Six, adding an annual reconfirmation and a written cost estimate to the four core steps"],
            correctIndex: 0,
            explanation: "A segregated notice, a reasonable opportunity to consent, the consent itself, and a written confirmation stating the right to revoke.",
            sourceLessonSlug: "overdraft-is-a-mechanism",
          },
          {
            prompt: "What does the rule require of the overdraft-service notice itself?",
            options: ["That it be segregated from other information", "That it be delivered by certified post to the consumer's address of record", "That it be reviewed aloud with the consumer by a branch employee before signing", "That it disclose the institution's total overdraft revenue for the preceding year"],
            correctIndex: 0,
            explanation: "Segregation stops the description being buried in a signature packet, which is the failure the requirement is aimed at.",
            sourceLessonSlug: "overdraft-is-a-mechanism",
          },
          {
            prompt: "Which transactions does the opt-in cover?",
            options: ["ATM and one-time debit card transactions", "Every transaction that can overdraw an account, including checks and automated clearing house payments", "Only paper checks presented for payment against an account with insufficient funds", "Only recurring debit card payments set up in advance with a merchant"],
            correctIndex: 0,
            explanation: "The rule names ATM and one-time debit card transactions, and only those.",
            sourceLessonSlug: "overdraft-is-a-mechanism",
          },
          {
            prompt: "Which of these is OUTSIDE the opt-in rule?",
            options: ["An automated clearing house payment", "A cash withdrawal made at an automated teller machine using a debit card", "A single grocery purchase made with a debit card at the point of sale", "A one-time debit card payment made online to a merchant the consumer has not used before"],
            correctIndex: 0,
            explanation: "Checks, ACH payments and recurring debit card payments were never inside the rule, which is how a consumer who declined coverage can still be charged.",
            sourceLessonSlug: "overdraft-is-a-mechanism",
          },
          {
            prompt: "Can a consumer who declined overdraft coverage still be charged an overdraft fee?",
            options: ["Yes", "No, declining the service bars any overdraft fee on the account entirely", "No, unless the institution obtains a second written consent from the consumer", "Only at an institution with more than $10 billion in consolidated assets"],
            correctIndex: 0,
            explanation: "They declined it for the transactions the rule covers; a rent payment moving by ACH was never inside the rule.",
            sourceLessonSlug: "overdraft-is-a-mechanism",
          },
          {
            prompt: "What must the written confirmation of an opt-in tell the consumer?",
            options: ["That consent may be revoked", "The dollar amount of every overdraft fee the institution charged in the preceding year", "The order in which the institution posts transactions during a business day", "That the consent expires automatically after twelve months unless renewed"],
            correctIndex: 0,
            explanation: "The fourth step of the rule requires a statement informing the consumer of the right to revoke such consent.",
            sourceLessonSlug: "overdraft-is-a-mechanism",
          },
          {
            prompt: "Why can one short day produce more than one overdraft fee?",
            options: ["Fees are generally charged per item", "Because federal regulation requires a separate fee for each hour the balance stays negative", "Because the institution must charge one fee for the overdraft and one for restoring the balance", "Because a single fee is charged and then doubled if the balance is not restored by close of business"],
            correctIndex: 0,
            explanation: "Each overdrawing transaction is charged separately, so three transactions against a low balance are not automatically one fee.",
            sourceLessonSlug: "overdraft-is-a-mechanism",
          },
          {
            prompt: "What determines which of a day's transactions overdraw an account?",
            options: ["The posting order", "The size of each transaction, since the largest is always applied last by federal rule", "The type of merchant, since debit card purchases are always posted before other items", "The time of day the consumer authorised each transaction, recorded to the minute"],
            correctIndex: 0,
            explanation: "Posting order is institution practice rather than a single national rule, which is why the account disclosures and agreement are where to read it.",
            sourceLessonSlug: "overdraft-is-a-mechanism",
          },
          {
            prompt: "Where does the lesson send a learner to read their own institution's posting order and fee amounts?",
            options: ["The account disclosures and agreement", "The Consumer Financial Protection Bureau's published overdraft data spotlight", "The Regulation E text at 12 CFR 1005.17, which sets both nationally", "The institution's quarterly call report filed with its federal supervisor"],
            correctIndex: 0,
            explanation: "Both are institution practice, and Truth in Savings requires the fee and the conditions under which it applies to be disclosed.",
            sourceLessonSlug: "overdraft-is-a-mechanism",
          },
          {
            prompt: "How does this lesson describe an overdraft fee?",
            options: ["The price of a service", "A penalty federal law requires an institution to impose when an account is overdrawn", "A charge set by the Consumer Financial Protection Bureau and applied uniformly", "A recovery of the institution's actual cost of processing a returned item"],
            correctIndex: 0,
            explanation: "It is the price of the institution paying a transaction it did not have to pay, and for ATM and one-time debit card items the consumer had to switch the service on.",
            sourceLessonSlug: "overdraft-is-a-mechanism",
          },
          {
            prompt: "What does this course say about whether a learner should opt in?",
            options: ["Nothing, that is not its job", "That declining is always the cheaper choice for any household over a full year", "That opting in is advisable for households whose income varies from month to month", "That the decision should be reviewed with the branch manager at least annually"],
            correctIndex: 0,
            explanation: "It says the switch exists, what it covers, what it does not, and that consent is revocable, which is information rather than advice.",
            sourceLessonSlug: "overdraft-is-a-mechanism",
          },
          {
            prompt: "What was the title of the CFPB rule that Congress disapproved?",
            options: ["Overdraft Lending: Very Large Financial Institutions", "Requirements for Overdraft Services, being the Regulation E opt-in rule at 12 CFR 1005.17", "Truth in Savings: Account Disclosures for Consumer Deposit Accounts", "Prepaid Accounts Under the Electronic Fund Transfer Act and the Truth in Lending Act"],
            correctIndex: 0,
            explanation: "The CFPB finalised it in December 2024, and the joint resolution disapproving it names it in the resolution's own title.",
            sourceLessonSlug: "the-rule-that-was-repealed",
          },
          {
            prompt: "Which public law disapproved that rule, and when was it approved?",
            options: ["Public Law 119-10, on 9 May 2025", "Public Law 119-18, on 26 March 2025, the date the Senate passed the resolution", "Public Law 117-2, which is the American Rescue Plan Act rather than a disapproval resolution", "Public Law 118-10, approved in December 2024 on the day the rule was finalised"],
            correctIndex: 0,
            explanation: "It began as Senate Joint Resolution 18 and its official title names the rule it disapproves.",
            sourceLessonSlug: "the-rule-that-was-repealed",
          },
          {
            prompt: "Which statute provides the disapproval mechanism used here?",
            options: ["The Congressional Review Act", "The Administrative Procedure Act, under which a court may vacate a rule as arbitrary and capricious", "The Regulatory Flexibility Act, which requires agencies to consider effects on small entities", "The Paperwork Reduction Act, which governs information collections imposed by agencies"],
            correctIndex: 0,
            explanation: "It lets Congress nullify a recently finalised agency rule by joint resolution, and its consequence is codified at 5 U.S.C. 801.",
            sourceLessonSlug: "the-rule-that-was-repealed",
          },
          {
            prompt: "What does 5 U.S.C. 801(b)(2) forbid after a rule is disapproved?",
            options: ["Reissuing it in substantially the same form", "Any further rulemaking by the agency on any subject for the remainder of the Congress", "Enforcement of the rule against institutions that had already begun complying with it", "Publication of the rule's text in the Federal Register or in the Code of Federal Regulations"],
            correctIndex: 0,
            explanation: "A substantially similar new rule is barred too, unless specifically authorised by a law enacted after the disapproval resolution.",
            sourceLessonSlug: "the-rule-that-was-repealed",
          },
          {
            prompt: "What would make it lawful for the agency to issue a substantially similar rule later?",
            options: ["A law enacted after the disapproval", "A court order vacating the joint resolution as an unconstitutional legislative veto", "A change of administration, which resets the agency's rulemaking authority", "The passage of five years from the date the joint resolution was approved"],
            correctIndex: 0,
            explanation: "The statute says unless the reissued or new rule is specifically authorized by a law enacted after the date of the joint resolution.",
            sourceLessonSlug: "the-rule-that-was-repealed",
          },
          {
            prompt: "What is the correct present-tense statement about the 2024 overdraft rule?",
            options: ["It is not in force", "It applies only to institutions with more than $10 billion in consolidated assets", "It takes effect on a delayed schedule agreed between Congress and the agency", "It is being litigated and its status will be settled by a federal appellate court"],
            correctIndex: 0,
            explanation: "It was nullified, and under the Congressional Review Act the agency cannot reissue it in substantially the same form without new authorising legislation.",
            sourceLessonSlug: "the-rule-that-was-repealed",
          },
          {
            prompt: "What did the disapproval leave untouched?",
            options: ["The Regulation E opt-in", "The Truth in Savings requirement to disclose fees, which the resolution repealed alongside it", "The Fair Credit Reporting Act's adverse action notice duty, which was suspended by the same law", "Deposit insurance coverage for consumer checking accounts, which was reduced accordingly"],
            correctIndex: 0,
            explanation: "The opt-in is an older rule at 12 CFR 1005.17 and nothing in the disapproval disturbed it.",
            sourceLessonSlug: "the-rule-that-was-repealed",
          },
          {
            prompt: "What did the CFPB report as combined bank overdraft and NSF fee revenue for 2023?",
            options: ["$5.83 billion", "$11.96 billion, which was the figure reported for 2019 rather than for 2023", "$6.13 billion, which was the size of the decrease rather than the level of revenue", "$7.7 billion, which was the figure reported for 2022 in an earlier data spotlight"],
            correctIndex: 0,
            explanation: "The Data Spotlight of 24 April 2024 describes it as a 51 percent decrease against the 2019 level.",
            sourceLessonSlug: "the-rule-that-was-repealed",
          },
          {
            prompt: "What was the reported figure for 2019, against which the 2023 number is compared?",
            options: ["$11.96 billion", "$5.83 billion, which is the 2023 figure rather than the pre-pandemic comparison", "$6.13 billion, which is the difference between the two years rather than either level", "$2 billion, which is the reduction the CFPB attributed to eliminated NSF fees alone"],
            correctIndex: 0,
            explanation: "The decrease from 2019 to 2023 was $6.13 billion, or 51 percent.",
            sourceLessonSlug: "the-rule-that-was-repealed",
          },
          {
            prompt: "Which institutions are excluded from the CFPB's reported overdraft revenue figure?",
            options: ["Small banks and all credit unions", "Institutions supervised by the Federal Reserve rather than by the FDIC", "Institutions that eliminated non-sufficient funds fees before the reporting year", "Institutions whose overdraft revenue fell by more than half against the prior year"],
            correctIndex: 0,
            explanation: "Banks with assets of $1 billion or less are not required to report the item as a separate line in their call reports, and credit unions are outside the series entirely.",
            sourceLessonSlug: "the-rule-that-was-repealed",
          },
          {
            prompt: "Why does that exclusion make $5.83 billion a floor?",
            options: ["Excluded institutions also charge these fees", "Because the CFPB rounds every reported figure downward to the nearest hundred million", "Because the figure counts only fees that consumers successfully disputed and recovered", "Because the reporting year ends before the fourth quarter's fees have been collected"],
            correctIndex: 0,
            explanation: "The published total covers exactly the institutions the reporting mandate reaches, and every small bank and credit union sits outside it.",
            sourceLessonSlug: "the-rule-that-was-repealed",
          },
          {
            prompt: "What general lesson does the lesson draw from that caveat?",
            options: ["The filing threshold defines the number", "That regulatory data should be treated as unreliable unless independently audited", "That agencies deliberately understate industry revenue when publishing research", "That a figure assembled from filings is always larger than the true total"],
            correctIndex: 0,
            explanation: "It is not a criticism of the CFPB, which says so in its own text; it is how to read any aggregate built from mandatory reports.",
            sourceLessonSlug: "the-rule-that-was-repealed",
          },
          {
            prompt: "Who sets the dollar amount of an overdraft fee now?",
            options: ["The institution", "The Consumer Financial Protection Bureau, at the level set by its December 2024 rule", "Congress, through the joint resolution that disapproved the 2024 rule", "The FDIC, as a condition of deposit insurance for consumer transaction accounts"],
            correctIndex: 0,
            explanation: "With the 2024 rule nullified, the amount is the institution's, and Truth in Savings is how a consumer reads it.",
            sourceLessonSlug: "the-rule-that-was-repealed",
          },
          {
            prompt: "Why does the lesson say a course written in early 2025 would have got this wrong?",
            options: ["The rule's status changed in May 2025", "Because the CFPB withdrew the rule voluntarily before any resolution was introduced", "Because the rule's effective date was moved forward rather than nullified", "Because the underlying statute was amended to change what the rule could cover"],
            correctIndex: 0,
            explanation: "It was finalised in December 2024 and disapproved by a public law approved on 9 May 2025, which is why the course names dates rather than describing rules in the present tense.",
            sourceLessonSlug: "the-rule-that-was-repealed",
          },
          {
            prompt: "Why is a comfortable balance effectively a free account?",
            options: ["The balance waives the fee and nothing overdraws", "Because institutions are required to waive maintenance fees above a federally set threshold", "Because interest earned on a larger balance offsets every fee charged in the same month", "Because larger accounts are exempt from Truth in Savings fee disclosures entirely"],
            correctIndex: 0,
            explanation: "The maintenance fee waiver applies and no transaction meets the sequence that triggers a per-item fee.",
            sourceLessonSlug: "why-the-cost-lands-on-a-low-balance",
          },
          {
            prompt: "What creates the bad day that triggers overdraft fees, in this lesson's account?",
            options: ["Timing", "Overspending relative to income across the month as a whole", "A failure to reconcile the account against the institution's own statement", "The institution reordering transactions in a way that federal regulation forbids"],
            correctIndex: 0,
            explanation: "Rent due on the first and pay landing on the fifth is a sequence the household controls neither end of, and no amount of planning removes it.",
            sourceLessonSlug: "why-the-cost-lands-on-a-low-balance",
          },
          {
            prompt: "Why does a household with a cushion never meet that sequence?",
            options: ["The cushion covers the gap", "Because its institution posts transactions in a different order for larger balances", "Because it is exempt from per-item fees under the terms of its account agreement", "Because its income arrives on the first of the month rather than on the fifth"],
            correctIndex: 0,
            explanation: "The fee is triggered by a balance running out before a deposit clears, and a cushion means the balance does not run out.",
            sourceLessonSlug: "why-the-cost-lands-on-a-low-balance",
          },
          {
            prompt: "What share of unbanked households said bank account fees are too unpredictable?",
            options: ["29.3 percent", "30.7 percent, which was the share saying that bank account fees are too high", "42.3 percent, which was the share citing a lack of money for a minimum balance", "33.4 percent, which was the grouped fee-and-balance share for the MAIN reason"],
            correctIndex: 0,
            explanation: "It is a separate survey item from fees being too high, and it got its own answer.",
            sourceLessonSlug: "why-the-cost-lands-on-a-low-balance",
          },
          {
            prompt: "Why does the lesson treat expense and unpredictability as different complaints?",
            options: ["A predictable cost can be planned around", "Because the FDIC combines them into a single figure when reporting main reasons", "Because unpredictability affects only households whose income arrives weekly", "Because an unpredictable fee is always larger than a predictable one in practice"],
            correctIndex: 0,
            explanation: "That difference is what makes a fee posted on a wall attractive by comparison, which is the whole subject of the next section.",
            sourceLessonSlug: "why-the-cost-lands-on-a-low-balance",
          },
          {
            prompt: "What are the Bank On National Account Standards, in status?",
            options: ["A voluntary certification", "A federal regulation issued by the FDIC and binding on insured depository institutions", "A model state law adopted by a majority of states for consumer transaction accounts", "A condition of federal deposit insurance for accounts held by lower-income households"],
            correctIndex: 0,
            explanation: "They are published by the Cities for Financial Empowerment Fund, a nonprofit, and an account is certified only if the institution applies.",
            sourceLessonSlug: "why-the-cost-lands-on-a-low-balance",
          },
          {
            prompt: "Who publishes the Bank On National Account Standards?",
            options: ["The Cities for Financial Empowerment Fund", "The Federal Deposit Insurance Corporation, as part of its economic inclusion work", "The Consumer Financial Protection Bureau, under its authority over consumer deposit products", "The Federal Reserve Bank of St. Louis, which also hosts the programme's data hub"],
            correctIndex: 0,
            explanation: "It is a nonprofit, which is why the course is careful to call the standards a certification rather than a rule.",
            sourceLessonSlug: "why-the-cost-lands-on-a-low-balance",
          },
          {
            prompt: "What minimum opening deposit do the 2025-2026 standards allow?",
            options: ["$25 or less", "$100 or less, matching the threshold most institutions apply to a basic checking account", "$5 or less, which is the standard's cap on a non-waivable monthly maintenance fee", "No opening deposit at all, since the standards prohibit any opening requirement"],
            correctIndex: 0,
            explanation: "It is one of the core features, read from the standards on 28 August 2026.",
            sourceLessonSlug: "why-the-cost-lands-on-a-low-balance",
          },
          {
            prompt: "What monthly maintenance fee do the standards allow if the fee is NOT waivable?",
            options: ["$5 or less", "$10 or less, which is the cap that applies when the fee IS waivable", "$25 or less, which is the standard's cap on the minimum opening deposit", "$2 or less, which is the standard's cap on a mailed paper statement"],
            correctIndex: 0,
            explanation: "If the fee is waivable the cap is $10 or less, and the institution must offer at least two ways to waive it entirely with a single transaction.",
            sourceLessonSlug: "why-the-cost-lands-on-a-low-balance",
          },
          {
            prompt: "What do the standards require of a waivable monthly maintenance fee?",
            options: ["At least two single-transaction waiver options", "That the waiver apply automatically once the balance exceeds a stated threshold", "That the institution refund the fee if the consumer requests it within thirty days", "That the fee be prorated to the number of days the balance was below the threshold"],
            correctIndex: 0,
            explanation: "The standard gives direct deposit with no minimum, online bill pay, and a debit card purchase as examples of qualifying single transactions.",
            sourceLessonSlug: "why-the-cost-lands-on-a-low-balance",
          },
          {
            prompt: "What do the standards say about overdraft and non-sufficient funds fees?",
            options: ["None", "They must be capped at $5 per item, matching the CFPB's disapproved 2024 rule", "They are permitted if the consumer has affirmatively opted in under Regulation E", "They are permitted once per statement cycle and must be reversed on request"],
            correctIndex: 0,
            explanation: "The core-features table states none, which is the sharpest single line in the document.",
            sourceLessonSlug: "why-the-cost-lands-on-a-low-balance",
          },
          {
            prompt: "Which other fees do the standards prohibit outright?",
            options: ["Activation, closure, dormancy, inactivity and low balance", "Out-of-network ATM fees and international transaction fees on the debit card", "Wire transfer fees and stop payment fees requested by the account holder", "Fees for replacing a lost debit card or for expedited card delivery"],
            correctIndex: 0,
            explanation: "They are listed together in the core-features table, which is aimed squarely at the fees that surface when an account stops being used as expected.",
            sourceLessonSlug: "why-the-cost-lands-on-a-low-balance",
          },
          {
            prompt: "What do the standards require about deposit insurance?",
            options: ["Deposits insured by FDIC, NCUSIF or equivalent", "That the institution carry private insurance in addition to federal coverage", "That the account be excluded from insurance in exchange for the lower fee structure", "That the institution disclose the insurance status only on request from the consumer"],
            correctIndex: 0,
            explanation: "The standard names FDIC, NCUSIF, or a regulator-sanctioned equivalent, which ties the certification back to Section 1's insurance structure.",
            sourceLessonSlug: "why-the-cost-lands-on-a-low-balance",
          },
          {
            prompt: "What do the standards strongly recommend about account screening?",
            options: ["Deny only for past incidences of actual fraud", "That institutions stop using screening reports entirely when opening consumer accounts", "That institutions provide the screening report to the applicant before deciding", "That institutions accept any applicant whose screening file is less than twelve months old"],
            correctIndex: 0,
            explanation: "It is a strongly recommended feature rather than a core one, and it answers Section 3's gate directly.",
            sourceLessonSlug: "why-the-cost-lands-on-a-low-balance",
          },
          {
            prompt: "What do the standards strongly recommend about account opening documentation?",
            options: ["Accept ITINs and government-issued IDs", "Require two forms of photographic identification issued by a state or the federal government", "Waive identification requirements for applicants referred by a community organisation", "Accept a utility bill in place of any government-issued identification document"],
            correctIndex: 0,
            explanation: "It names municipal, consular and other government identification as acceptable primary documentation, which is the standard asking institutions to stop requiring more than the federal rule does.",
            sourceLessonSlug: "why-the-cost-lands-on-a-low-balance",
          },
          {
            prompt: "What does that documentation recommendation imply about the federal identity rule?",
            options: ["It never barred an ITIN", "That it requires a driver's licence, which the standard asks institutions to waive", "That it applies only to applicants who are not U.S. persons", "That it was amended to permit consular identification after the standards were published"],
            correctIndex: 0,
            explanation: "The Customer Identification Program rule requires a taxpayer identification number, a category that includes an ITIN, so the standard is asking for less than institutions often require, not for a rule to be broken.",
            sourceLessonSlug: "why-the-cost-lands-on-a-low-balance",
          },
          {
            prompt: "Why does this course name the Bank On standards at all?",
            options: ["They are a published document you can read", "Because they are the only account structure the course recommends to learners", "Because federal law requires every insured institution to offer a certified account", "Because they set the fee levels that the disapproved 2024 CFPB rule would have imposed"],
            correctIndex: 0,
            explanation: "Naming a readable standard turns an argument about whether a cheaper structure is possible into a comparison against a document.",
            sourceLessonSlug: "why-the-cost-lands-on-a-low-balance",
          },
          {
            prompt: "What does the course say it cannot know about a certified account?",
            options: ["Whether one exists near you or suits you", "Whether the standards are published by a nonprofit or by a federal agency", "Whether the standards prohibit overdraft and non-sufficient funds fees", "Whether an institution must apply in order for its account to be certified"],
            correctIndex: 0,
            explanation: "That is the not-advice boundary: the course describes the document and declines to make the individual decision.",
            sourceLessonSlug: "why-the-cost-lands-on-a-low-balance",
          },
          {
            prompt: "In which months does a maintenance fee with a balance waiver actually apply?",
            options: ["The months the balance dipped", "Every month, since a waiver reduces the fee rather than removing it", "Only the first month after opening, while the waiver conditions are being established", "Only in months when the account had no transactions at all"],
            correctIndex: 0,
            explanation: "That is the sense in which it is a price sorted by balance: it is charged in exactly the months the household could least absorb it.",
            sourceLessonSlug: "why-the-cost-lands-on-a-low-balance",
          },
          {
            prompt: "How does this lesson describe the shape of the problem?",
            options: ["Arithmetic rather than opinion", "A matter of financial literacy that education alone can resolve", "A consequence of institutions violating the disclosure rules in Regulation DD", "An artefact of the survey's definitions rather than of any real cost difference"],
            correctIndex: 0,
            explanation: "The same account carries two prices, and which one a household pays follows from a sequence rather than from a judgment about it.",
            sourceLessonSlug: "why-the-cost-lands-on-a-low-balance",
          },
          {
            prompt: "What is the relationship between the Regulation E opt-in and an institution's fee amount?",
            options: ["The rule governs consent, not price", "The rule sets a maximum fee that institutions may charge per overdrawing item", "The rule requires the fee to be proportional to the amount by which the account is overdrawn", "The rule bars any fee at all once consent has been revoked in writing"],
            correctIndex: 0,
            explanation: "It requires a segregated notice, consent and a revocation statement before certain fees may be charged; the amount is the institution's.",
            sourceLessonSlug: "overdraft-is-a-mechanism",
          },
          {
            prompt: "A consumer opted in five years ago and has not thought about it since. What does the lesson say?",
            options: ["That is a decision they are still making", "That the consent lapsed automatically after twelve months and must be renewed", "That the institution must have re-obtained consent at each account anniversary", "That the consent applies only to the transactions authorised in the first year"],
            correctIndex: 0,
            explanation: "Consent is revocable and the confirmation had to say so, so an unrevisited opt-in remains in force by default.",
            sourceLessonSlug: "overdraft-is-a-mechanism",
          },
          {
            prompt: "Which of these does the opt-in rule NOT require?",
            options: ["A cap on the fee amount", "A notice describing the overdraft service, segregated from all other information", "A reasonable opportunity for the consumer to affirmatively consent", "Written confirmation of the consent, stating the right to revoke it"],
            correctIndex: 0,
            explanation: "The rule is about consent and disclosure, not about price, which is why the disapproved 2024 rule was a separate instrument entirely.",
            sourceLessonSlug: "overdraft-is-a-mechanism",
          },
          {
            prompt: "Why does the course insist on naming dates for rules as well as for figures?",
            options: ["A rule has a status that can change", "Because the Federal Register requires a date whenever a rule is described in writing", "Because rules expire automatically five years after they are finalised", "Because a rule's effective date determines which states it applies in"],
            correctIndex: 0,
            explanation: "The 2024 overdraft rule is the worked example: finalised, then nullified, so any present-tense description without a date is a liability.",
            sourceLessonSlug: "the-rule-that-was-repealed",
          },
          {
            prompt: "What does the CFPB's data spotlight measure?",
            options: ["Reported bank overdraft and NSF fee revenue", "The number of overdraft fees charged to each household in a typical year", "The average overdraft fee amount charged across all insured institutions", "The share of consumers who have opted in to overdraft coverage under Regulation E"],
            correctIndex: 0,
            explanation: "It is built from call report data, which is why the reporting threshold defines what the total can include.",
            sourceLessonSlug: "the-rule-that-was-repealed",
          },
          {
            prompt: "What asset threshold determines whether a bank reports overdraft revenue as a separate line item?",
            options: ["$1 billion", "$10 billion, the threshold that defined the very large institutions in the disapproved 2024 rule", "$250,000, matching the standard maximum deposit insurance amount per depositor", "$5.83 billion, matching the total reported revenue for the year"],
            correctIndex: 0,
            explanation: "Banks at or below that size are not required to report it separately, so their fees are outside the published figure.",
            sourceLessonSlug: "the-rule-that-was-repealed",
          },
          {
            prompt: "Which of these best states the not-advice boundary applied in this section?",
            options: ["Describe the switch, do not flip it", "Recommend the option that costs the least over a twelve-month period", "Recommend opting out for any household whose balance falls below the waiver threshold", "Decline to describe the overdraft mechanism at all, since it varies by institution"],
            correctIndex: 0,
            explanation: "The course explains what the opt-in covers and that it is revocable, and leaves the decision entirely with the reader.",
            sourceLessonSlug: "overdraft-is-a-mechanism",
          },
          {
            prompt: "Which Section 1 requirement is the practical companion to reading an overdraft fee?",
            options: ["Truth in Savings account disclosures", "The Customer Identification Program rule's four required data elements", "The deposit insurance structure counted per depositor, per bank, per ownership category", "The requirement that coverage be automatic when an insured institution fails"],
            correctIndex: 0,
            explanation: "12 CFR 1030.4(b)(4) requires both the amount and the conditions under which the fee may be imposed.",
            sourceLessonSlug: "overdraft-is-a-mechanism",
          },
          {
            prompt: "By what percentage did reported overdraft and NSF revenue fall between 2019 and 2023?",
            options: ["51 percent", "24 percent, which was the fall from 2022 to 2023 rather than from 2019", "76 percent, which would leave revenue at roughly a quarter of the 2019 level", "13 percent, matching the share of unbanked households citing an identification problem"],
            correctIndex: 0,
            explanation: "A fall of $6.13 billion, from $11.96 billion to $5.83 billion in reported revenue.",
            sourceLessonSlug: "the-rule-that-was-repealed",
          },
          {
            prompt: "What is the standard's cap on a mailed paper statement?",
            options: ["$2 or less", "$5 or less, matching the cap on a non-waivable monthly maintenance fee", "$25 or less, matching the cap on the minimum opening deposit", "No charge at all, since the standards prohibit statement fees entirely"],
            correctIndex: 0,
            explanation: "Free electronic statements are required, with a mailed paper statement capped at $2 or less if offered.",
            sourceLessonSlug: "why-the-cost-lands-on-a-low-balance",
          },
          {
            prompt: "How would you describe the two prices of one account, in a sentence?",
            options: ["Free above the threshold, expensive below it", "Identical for every holder, since federal regulation forbids differential pricing", "Higher for larger balances, which cost the institution more to insure and service", "Set by the regulator at opening and fixed for the life of the account"],
            correctIndex: 0,
            explanation: "The waiver removes the fee above the threshold, and per-item overdraft charges concentrate below it.",
            sourceLessonSlug: "why-the-cost-lands-on-a-low-balance",
          },
          {
            prompt: "Which document does an institution's overdraft posting practice actually live in?",
            options: ["The account agreement", "Regulation E at 12 CFR 1005.17, which sets a national posting order", "The institution's call report filed quarterly with its federal supervisor", "The Bank On National Account Standards, which set posting order for certified accounts"],
            correctIndex: 0,
            explanation: "Posting order is institution practice, so the agreement and the disclosures are where a consumer reads it rather than in a national rule.",
            sourceLessonSlug: "overdraft-is-a-mechanism",
          },
          {
            prompt: "What does the phrase 'reasonable opportunity to consent' add to the rule?",
            options: ["Consent cannot be assumed from silence", "The institution may treat continued use of the account as agreement to the service", "The consumer must respond within thirty days or the opt-in takes effect automatically", "The institution may obtain consent from any joint holder on behalf of all of them"],
            correctIndex: 0,
            explanation: "The rule requires affirmative consent, obtained after a segregated notice, and confirmed in writing.",
            sourceLessonSlug: "overdraft-is-a-mechanism",
          },
          {
            prompt: "What connects this section to the next one on money orders and check cashing?",
            options: ["Unpredictability", "The identity rule, which applies equally to nonbank financial service providers", "Deposit insurance, which extends to money orders bought at a check casher", "The Congressional Review Act, which also nullified a rule governing prepaid accounts"],
            correctIndex: 0,
            explanation: "A household that cannot forecast what an account will cost has a real reason to prefer a fee it can read off a wall before paying it.",
            sourceLessonSlug: "why-the-cost-lands-on-a-low-balance",
          },
          {
            prompt: "What functionality do the standards require of the account's card?",
            options: ["A free debit card on a payment network", "A prepaid card issued by a third party rather than by the institution itself", "A card that works only at the institution's own automated teller machines", "A card with a monthly fee capped at the same level as the maintenance fee"],
            correctIndex: 0,
            explanation: "The standards require a free debit card on a network such as Visa, Mastercard or Discover, for point of sale and bill payment.",
            sourceLessonSlug: "why-the-cost-lands-on-a-low-balance",
          },
          {
            prompt: "What do the standards require where an institution does not offer free bill pay?",
            options: ["Four free money orders or cashier's checks a month", "A waiver of the monthly maintenance fee for that account holder", "Free wire transfers up to a stated monthly dollar limit", "A referral to a nonbank bill payment service at no charge to the consumer"],
            correctIndex: 0,
            explanation: "The functionality section requires free bill pay if available, otherwise at least four free money orders or cashier's checks each month.",
            sourceLessonSlug: "why-the-cost-lands-on-a-low-balance",
          },
          {
            prompt: "Which two Regulation E steps come AFTER the consumer has consented?",
            options: ["Obtaining the consent and confirming it in writing", "Providing the segregated notice and giving a reasonable opportunity to consent", "Disclosing the fee amount and disclosing the institution's posting order", "Verifying the consumer's identity and screening their deposit account history"],
            correctIndex: 0,
            explanation: "The four steps run notice, opportunity, consent, then written confirmation including the right to revoke.",
            sourceLessonSlug: "overdraft-is-a-mechanism",
          },
        ],
      },
    },

    // ══════════════════════════════════════════════════════════════════════
    // SECTION 5 — The substitute market, priced
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "money-orders-and-check-cashing",
      title: "17 · Money orders and check cashing, priced",
      section: "Section 5 · The substitute market, priced",
      body: `A household without an account still has to pay rent and still has to turn a paycheck into money. There is a market that does both, and this lesson prices it.

**A money order is a prepaid paper instrument.** You hand over cash plus a fee and receive a document the payee can deposit or cash. It does what a check does for somebody who has no checking account, and unlike a personal check it cannot bounce, because it was funded before it was issued.

**The United States Postal Service publishes its price, which makes it the best worked example available.** Read on **28 August 2026**, USPS listed domestic money order fees of **$2.65** for amounts from $0.01 to $500.00 and **$3.75** for $500.01 to $1,000.00, with a maximum of "$1,000 in a single order anywhere in the United States", plus a postal military money order at $0.85 (USPS, 2026).

**Now check cashing, which is the other half.** A check casher converts a check into cash immediately, for a fee, usually charged as a **percentage of the check** rather than as a flat amount. The difference in structure matters: a money order fee is fixed and a check-cashing fee scales with the money.

**Check-cashing fees are governed by state law, and this course will not print a fifty-state table.** Rates change, they are set by different bodies in different states, and a table with one stale row is worse than no table. Instead, learn the method: **find your own state's check-casher licensing law and the regulator that administers it**, then read the current maximum from that regulator's own publication.

**Here is that method executed once, so it is concrete.** In New York, the Department of Financial Services sets the maximum under **Part 400.11 of the Superintendent's Regulations**. Its industry letter of **30 January 2023**, effective **18 January 2023**, set the maximum a licensed check casher may charge at **1.5 percent** of a check issued by a federal or state government agency for public assistance, Social Security, unemployment, retirement, veterans' benefits, emergency relief, housing assistance or a tax refund, and at **$1 or 2.2 percent of the amount, whichever is greater**, for all other checks (NYSDFS, 2023).

**Read the structure of that rule rather than the numbers.** New York set two rates, and it set the lower one on government benefit checks specifically. Somebody decided that a benefit payment should not be cashed on the same terms as a payroll check, and wrote it into a regulation. Whether your state does anything similar is exactly the question the method above answers.

**How much are these services used, and by whom?** From the FDIC's 2023 survey, read **28 August 2026**: **8.0 percent** of all households used nonbank money orders and **2.7 percent** used nonbank check cashing. Both fell by more than half over the decade, from **18.2 percent** and **6.9 percent** in 2013. Nonbank money transfer services were used by **6.6 percent** of households in 2023 (FDIC, 2024).

**And the use is concentrated, which is the finding.** All three services remained far more common among unbanked households than banked ones. Among unbanked households that used them, "more than nine in ten" used money orders to pay bills, "three in four" who used check cashing cashed a check from work, retirement, or a government agency, and about half who used money transfer services did so to pay bills (FDIC, 2024).

**That is not discretionary spending.** It is rent, utilities and wages, moving through a paid channel because the free one is closed.

:::reveal Why can a money order not bounce? ||| It is funded before it is issued, so the money is already there when the payee presents it.

:::reveal What is the structural difference between a money order fee and a check-cashing fee? ||| A money order fee is a fixed amount; a check-cashing fee is usually a percentage, so it scales with the size of the check.

:::reveal Why does this course refuse to print a fifty-state table of check-cashing caps? ||| Rates change and are set by different bodies in different states, so a table with one stale row is worse than no table. The method for finding your own state's rule does not go stale.

## Vocabulary
- **Money order**: a prepaid paper instrument, funded at purchase, that serves the function of a check for someone without a checking account.
- **Check casher**: a licensed nonbank business that converts a check to cash immediately for a fee, generally charged as a percentage of the check.
- **Percentage fee**: a charge that scales with the amount, which is why the cost of check cashing rises with the size of the paycheck.
- **State licensing law**: the level at which check-casher fee maximums are set, which is why the transferable skill is finding your state's rule rather than memorising a national number.
- **Concentrated use**: the survey finding that these services are used far more by unbanked households, and used for bills and income rather than discretionary spending.

## Sources
United States Postal Service. (2026). *Money orders*. https://www.usps.com/shop/money-orders.htm

New York State Department of Financial Services. (2023, January 30). *Industry letter: Maximum check casher fee*. https://www.dfs.ny.gov/industry_guidance/industry_letters/il20230130_max_check_casher_fee

Federal Deposit Insurance Corporation. (2024, November). *2023 FDIC national survey of unbanked and underbanked households* (Section 4). https://www.fdic.gov/household-survey`,
    },
    {
      slug: "prepaid-cards-and-payment-apps",
      title: "18 · Prepaid cards and payment apps, and the disclosure on the packet",
      section: "Section 5 · The substitute market, priced",
      body: `Paper is not the only substitute. Two electronic ones matter more every year, and one of them has its own disclosure rule that works exactly like the account disclosures in Section 1.

**A prepaid account holds money you load onto it and spend from a card.** It is not a deposit account at a bank you are a customer of, and it is not a credit product. It sits in its own regulatory category.

**Regulation E gives that category a pre-acquisition disclosure, at 12 CFR 1005.18(b).** A financial institution "shall provide the disclosures required by paragraph (b) of this section **before a consumer acquires a prepaid account**". The **short form** disclosure must state a defined list of fees: the **periodic fee** (monthly or annual), the **per purchase fee**, **two ATM withdrawal fees** (in network and out of network), the **cash reload fee**, **two ATM balance inquiry fees** (in network and out of network), **customer service fees** (automated and live agent), and any **inactivity fee** with the conditions that trigger it.

**And there is a retail rule that is the whole point of the design.** Where a card is sold in a store, the long form may follow acquisition only if the short form "is provided on or are visible through an outward-facing, external surface" of the packaging. In other words: on the outside of the packet, before you buy it.

**Compare that with Section 1 and the shape of this course becomes visible.** A bank account's price is in a document you can request under Truth in Savings. A prepaid account's price is on the outside of the box under Regulation E. Both are the same instruction: **the price is published before you commit, and reading it is your move.**

**Insurance is where prepaid gets genuinely more complicated, so this course states it carefully.** Deposit insurance covers deposits at insured banks. The FDIC's own deposit insurance FAQ, read **28 August 2026**, says that "Prepaid cards that are registered with the card issuer are insured when certain FDIC requirements are met" (FDIC, 2024). Note the two conditions in that sentence. Registered with the issuer, and certain requirements met. This is not the automatic coverage a bank deposit gets in Section 1, and whether it applies to a particular card is a fact about that card's programme rather than about prepaid cards in general.

**Now the payment apps**, which the FDIC surveys separately as **nonbank online payment services** with an account feature that stores money. The survey named PayPal, Venmo and Cash App as examples and deliberately excluded Zelle, which moves money between existing bank accounts rather than storing it.

**The usage split is the finding, and it is sharp.** Among households that used online payment services in 2023, **60.8 percent** of unbanked ones used them to pay bills against **24.5 percent** of banked ones; **34.3 percent** against 12.3 percent used them to receive income; and **40.9 percent** against 14.2 percent used them to save or keep money safe. Altogether, **71.5 percent** of unbanked households with online payment services used them for at least one of those three core transactions, against **33.5 percent** of banked households (FDIC, 2024).

**Prepaid cards show the same pattern, harder.** Among unbanked households with prepaid cards, **73.9 percent** paid bills with them against 28.3 percent of banked households, **59.0 percent** received income against 28.6 percent, and **44.8 percent** saved or kept money safe against 19.2 percent. **90.7 percent** used them for at least one core transaction, against 46.0 percent of banked households (FDIC, 2024).

**Read those two paragraphs as one sentence.** For a banked household these tools are conveniences layered on top of an account. For an unbanked household they are the account: the thing wages arrive in, bills are paid from, and money is kept in. Same product, entirely different job.

:::reveal When must a prepaid account's short form disclosure be provided? ||| Before the consumer acquires the account, and for a card sold at retail it must be on or visible through the outside of the packaging.

:::reveal Name three fees the short form disclosure must state. ||| The periodic fee, the per purchase fee, and the cash reload fee, alongside ATM withdrawal and balance inquiry fees, customer service fees and any inactivity fee.

:::reveal Why is prepaid card insurance not the same as deposit insurance on a bank account? ||| The FDIC says such cards are insured when registered with the issuer and when certain requirements are met, which makes it conditional on the programme rather than automatic.

## Vocabulary
- **Prepaid account**: a product holding funds loaded by the consumer and spent from a card, regulated in its own category rather than as a deposit or a credit product.
- **Short form disclosure**: the pre-acquisition fee summary Regulation E requires, which for a retail card must appear on or through the outside of the packaging.
- **Cash reload fee**: one of the fees the short form must state, charged when a consumer adds money to the card.
- **Nonbank online payment service**: the FDIC's category for an app with an account feature that stores money, distinct from a service that only moves money between bank accounts.
- **Core transaction**: the survey's grouping of paying bills, receiving income, and saving or keeping money safe, which is how it measures whether a tool is doing an account's job.

## Sources
Consumer Financial Protection Bureau. (n.d.). *12 CFR 1005.18 - Requirements for financial institutions offering prepaid accounts*. https://www.consumerfinance.gov/rules-policy/regulations/1005/18/

Federal Deposit Insurance Corporation. (2024, April 1). *Deposit insurance FAQs*. https://www.fdic.gov/resources/deposit-insurance/faq/

Federal Deposit Insurance Corporation. (2024, November). *2023 FDIC national survey of unbanked and underbanked households* (Section 3 and Figures ES.7-ES.8). https://www.fdic.gov/household-survey`,
    },
    {
      slug: "why-someone-chooses-the-substitute",
      title: "19 · Why a reasonable person chooses the substitute",
      section: "Section 5 · The substitute market, priced",
      body: `The lazy version of this subject says people use check cashers because they do not know better. The survey says something else, and the arithmetic supports it.

**Start with what the household is actually comparing.** Not "a bank account" against "a check casher" in the abstract. A specific, priced transaction against another specific, priced transaction, under a constraint the household did not choose.

**Three properties decide it, and only one of them is price.**

**One: is the cost knowable in advance?** A check-cashing fee is a posted percentage. You can compute it before you hand over the check. A money order fee is a number on a wall. An overdraft fee is knowable in amount and **unknowable in occurrence**, because whether it happens depends on posting order and on when a deposit clears. Section 2 found that **29.3 percent** of unbanked households cited fees being too unpredictable, separately from the **30.7 percent** citing fees being too high (FDIC, 2024).

**Two: when is the money available?** A check casher hands over cash now. A deposit may be subject to a hold. For a household paying rent tomorrow, "now" and "in three days" are not two prices of the same thing. They are two different products.

**Three: is there a minimum?** A check casher has no balance requirement. Section 2's most cited reason for having no account was not having enough money to meet a minimum balance, at **42.3 percent**.

**Now do the arithmetic, as a method rather than as an answer.** To compare any two ways of moving money, convert both to the same units: **what does it cost to turn this amount into usable money, this week?**

- A New York check casher, under the maximum in effect since 18 January 2023, may charge **2.2 percent** on a non-government check, or **1.5 percent** on a listed government payment. On a $600 payroll check that is up to $13.20; on a $600 benefit payment, up to $9.00.
- A USPS money order to pay a bill cost **$2.65** for amounts up to $500 when read on **28 August 2026**.
- A bank account's monthly maintenance fee, if not waived, is whatever that institution's account disclosures say, plus any per-item overdraft fees actually incurred that month.

**The comparison is not close in either direction, and that is the point.** For a household with a stable balance the account is free and the check casher is expensive. For a household whose balance touches zero most months, the account can cost more than the posted percentage, and it costs it unpredictably. **Both households are doing the same arithmetic and getting different answers, because they are pricing different risk.**

**This is why the course refuses to tell you which to use.** Which is cheaper depends on your own numbers: your fee schedule, your balance pattern, your pay timing, and your state's cap. The transferable skill is that you can now obtain all four, from documents somebody is required to give you.

**One more finding that makes the whole picture honest.** The substitute market is shrinking, fast. Money order use across all households fell from 18.2 percent in 2013 to 8.0 percent in 2023, and check cashing from 6.9 percent to 2.7 percent (FDIC, 2024). Whatever is happening, it is not a story about a growing shadow economy. It is a story about a shrinking one, alongside an unbanked rate that halved between 2011 and 2023.

**And a finding that keeps it from being triumphant.** **66.2 percent** of unbanked households in 2023 were cash only, using neither a prepaid card nor an online payment service. For them the substitute market is not a choice between products. It is the only counter that is open.

:::reveal Name the three properties, besides price, that decide between an account and a substitute. ||| Whether the cost is knowable in advance, when the money becomes available, and whether there is a minimum balance.

:::reveal Why do two households doing the same arithmetic reach opposite answers? ||| They are pricing different risk: one has a stable balance so the account is free, the other touches zero and faces unpredictable per-item fees.

:::reveal What happened to the use of money orders and check cashing between 2013 and 2023? ||| Both fell by more than half across all households, from 18.2 to 8.0 percent and from 6.9 to 2.7 percent.

## Vocabulary
- **Knowable in advance**: the property a posted percentage has and an overdraft fee lacks, since occurrence depends on posting order and deposit timing.
- **Availability**: when funds can actually be spent, which makes immediate cash and a held deposit two different products rather than two prices.
- **Same-units comparison**: the method of pricing any two ways of moving money by asking what it costs to turn this amount into usable money this week.
- **Pricing different risk**: the reason a stable-balance household and a zero-balance household reach opposite conclusions from identical arithmetic.
- **The only counter open**: the position of a cash-only household, for which the substitute market is not a comparison at all.

## Sources
Federal Deposit Insurance Corporation. (2024, November). *2023 FDIC national survey of unbanked and underbanked households*. https://www.fdic.gov/household-survey

New York State Department of Financial Services. (2023, January 30). *Industry letter: Maximum check casher fee*. https://www.dfs.ny.gov/industry_guidance/industry_letters/il20230130_max_check_casher_fee

United States Postal Service. (2026). *Money orders*. https://www.usps.com/shop/money-orders.htm`,
    },
    {
      slug: "quiz-the-substitute-market",
      title: "20 · Knowledge check: the substitute market",
      section: "Section 5 · The substitute market, priced",
      quiz: {
        shuffleOptions: true,
        passingScore: 80,
        questionsPerAttempt: 5,
        questions: [
          {
            prompt: "What is a money order?",
            options: ["A prepaid paper instrument", "A short-term loan against a paycheck that has not yet been deposited", "A transfer of funds between two accounts at insured depository institutions", "A guarantee by a bank that a personal check will clear on presentation"],
            correctIndex: 0,
            explanation: "It is funded at purchase, so it does what a check does for someone with no checking account.",
            sourceLessonSlug: "money-orders-and-check-cashing",
          },
          {
            prompt: "Why can a money order not bounce?",
            options: ["It is funded before it is issued", "Because federal law requires the issuer to guarantee payment regardless of funding", "Because the payee's bank advances the funds and recovers them from the issuer later", "Because the purchaser's account is frozen for the amount until the order is presented"],
            correctIndex: 0,
            explanation: "The money is already there when the payee presents it, which is the structural difference from a personal check.",
            sourceLessonSlug: "money-orders-and-check-cashing",
          },
          {
            prompt: "What did USPS list as its domestic money order fee for amounts up to $500, read on 28 August 2026?",
            options: ["$2.65", "$3.75, which was the fee for amounts between $500.01 and $1,000.00", "$0.85, which was the fee for a postal military money order", "$2.35, which is the cap in the Bank On National Account Standards"],
            correctIndex: 0,
            explanation: "The fee is dated in the lesson because USPS sets it and it can change.",
            sourceLessonSlug: "money-orders-and-check-cashing",
          },
          {
            prompt: "What is the maximum amount of a single USPS domestic money order?",
            options: ["$1,000", "$500, above which the purchaser must buy two separate orders at the higher fee", "$250,000, matching the standard maximum deposit insurance amount", "$3,000, above which the purchaser must present government identification"],
            correctIndex: 0,
            explanation: "USPS states that a customer may send up to $1,000 in a single order anywhere in the United States.",
            sourceLessonSlug: "money-orders-and-check-cashing",
          },
          {
            prompt: "How is a check-cashing fee usually structured?",
            options: ["As a percentage of the check", "As a flat amount that does not vary with the size of the check presented", "As a monthly subscription that covers unlimited checks within a stated period", "As a deduction taken by the check's issuer before the check is written"],
            correctIndex: 0,
            explanation: "That is the structural difference from a money order, whose fee is a fixed amount.",
            sourceLessonSlug: "money-orders-and-check-cashing",
          },
          {
            prompt: "At what level of government are check-casher fee maximums set?",
            options: ["State", "Federal, through a Consumer Financial Protection Bureau regulation applying nationwide", "Municipal, through licensing ordinances adopted by individual cities and counties", "None, since check cashers set their fees entirely at their own discretion"],
            correctIndex: 0,
            explanation: "That is why the transferable skill is finding your own state's licensing law and regulator rather than memorising a national number.",
            sourceLessonSlug: "money-orders-and-check-cashing",
          },
          {
            prompt: "Why does this course refuse to publish a fifty-state table of check-cashing caps?",
            options: ["A table with one stale row is worse than none", "Because the caps are confidential and are not published by state regulators", "Because only a handful of states regulate check cashing at all, making a table pointless", "Because the Consumer Financial Protection Bureau already publishes an authoritative one"],
            correctIndex: 0,
            explanation: "Rates change and are set by different bodies in different states, so the method for finding your own state's rule is what does not go stale.",
            sourceLessonSlug: "money-orders-and-check-cashing",
          },
          {
            prompt: "Which body sets the maximum check casher fee in New York?",
            options: ["The Department of Financial Services", "The Federal Reserve Bank of New York, under its supervisory authority over state members", "The New York State Legislature, which sets the rate directly in statute each year", "The Consumer Financial Protection Bureau, under a state-specific enforcement agreement"],
            correctIndex: 0,
            explanation: "It sets the maximum under Part 400.11 of the Superintendent's Regulations and publishes it in an industry letter.",
            sourceLessonSlug: "money-orders-and-check-cashing",
          },
          {
            prompt: "What rate did New York set for a listed government assistance check, effective 18 January 2023?",
            options: ["1.5 percent", "2.2 percent, which is the rate applying to all other checks, drafts and money orders", "$1 flat, regardless of the amount of the government payment being cashed", "2.65 percent, matching the USPS money order fee for amounts up to $500"],
            correctIndex: 0,
            explanation: "The lower rate applies to federal or state payments including public assistance, Social Security, unemployment, retirement, veterans' benefits, emergency relief, housing assistance and tax refunds.",
            sourceLessonSlug: "money-orders-and-check-cashing",
          },
          {
            prompt: "What rate did New York set for all other checks?",
            options: ["$1 or 2.2 percent, whichever is greater", "1.5 percent, matching the rate applied to government assistance payments", "A flat $5 regardless of the amount of the check being presented", "No maximum at all, leaving the rate to the licensee's own discretion"],
            correctIndex: 0,
            explanation: "The greater-of structure means a very small check carries a minimum charge while a larger one is priced on the percentage.",
            sourceLessonSlug: "money-orders-and-check-cashing",
          },
          {
            prompt: "What is the teachable point about New York setting TWO rates?",
            options: ["A benefit check was priced differently on purpose", "That the state was unable to agree on a single rate and split the difference", "That the two rates apply in different counties of the state", "That the lower rate is a temporary measure that expires each year"],
            correctIndex: 0,
            explanation: "Somebody decided a benefit payment should not be cashed on the same terms as a payroll check and wrote that into a regulation.",
            sourceLessonSlug: "money-orders-and-check-cashing",
          },
          {
            prompt: "What share of all U.S. households used nonbank money orders in 2023?",
            options: ["8.0 percent", "18.2 percent, which was the figure for 2013 rather than for 2023", "2.7 percent, which was the figure for nonbank check cashing in the same year", "6.6 percent, which was the figure for nonbank money transfer services"],
            correctIndex: 0,
            explanation: "The use of money orders across all households fell from 18.2 percent in 2013 to 8.0 percent in 2023.",
            sourceLessonSlug: "money-orders-and-check-cashing",
          },
          {
            prompt: "What share of all U.S. households used nonbank check cashing in 2023?",
            options: ["2.7 percent", "6.9 percent, which was the figure for 2013 rather than for 2023", "8.0 percent, which was the figure for nonbank money orders in the same year", "4.2 percent, which was the unbanked rate rather than a check cashing figure"],
            correctIndex: 0,
            explanation: "It fell from 6.9 percent in 2013, so the decline over the decade was more than half.",
            sourceLessonSlug: "money-orders-and-check-cashing",
          },
          {
            prompt: "What share of all households used nonbank money transfer services in 2023?",
            options: ["6.6 percent", "7.0 percent, which was the figure for 2021 rather than for 2023", "2.7 percent, which was the figure for nonbank check cashing", "18.2 percent, which was the money order figure for 2013"],
            correctIndex: 0,
            explanation: "The FDIC named Western Union, MoneyGram, Walmart Money Center and Ria as examples of the companies in this category.",
            sourceLessonSlug: "money-orders-and-check-cashing",
          },
          {
            prompt: "Among unbanked households using money orders, what did more than nine in ten use them for?",
            options: ["Paying bills", "Sending money to family or friends within the United States", "Making purchases from merchants that do not accept cash payment", "Building savings by holding uncashed orders as a store of value"],
            correctIndex: 0,
            explanation: "The concentration on bills is what makes this spending non-discretionary: it is rent and utilities moving through a paid channel.",
            sourceLessonSlug: "money-orders-and-check-cashing",
          },
          {
            prompt: "Among unbanked households using check cashing, what did three in four cash?",
            options: ["A check from work, retirement or a government agency", "A personal check written by a family member or a friend", "A refund check issued by a merchant after a returned purchase", "An insurance settlement check paid after a claim was approved"],
            correctIndex: 0,
            explanation: "That is income rather than a discretionary transaction, which is the finding the lesson draws from it.",
            sourceLessonSlug: "money-orders-and-check-cashing",
          },
          {
            prompt: "What is a prepaid account, in the regulatory sense?",
            options: ["Its own category, neither deposit nor credit", "A deposit account at an insured bank held under a different marketing name", "A form of revolving credit repaid by loading funds onto the card", "A savings product exempt from Regulation E and from Truth in Savings"],
            correctIndex: 0,
            explanation: "It holds funds the consumer loads and spends from a card, and Regulation E gives it a disclosure regime of its own.",
            sourceLessonSlug: "prepaid-cards-and-payment-apps",
          },
          {
            prompt: "Which regulation requires a pre-acquisition disclosure for prepaid accounts?",
            options: ["12 CFR 1005.18", "12 CFR 1030.4, which requires deposit account disclosures before opening and on request", "12 CFR 1005.17, which requires an opt-in before certain overdraft fees may be charged", "15 U.S.C. 1681j, which entitles a consumer to a free annual file disclosure"],
            correctIndex: 0,
            explanation: "It states that the institution shall provide the required disclosures before a consumer acquires a prepaid account.",
            sourceLessonSlug: "prepaid-cards-and-payment-apps",
          },
          {
            prompt: "When must a prepaid short form disclosure be provided?",
            options: ["Before the consumer acquires the account", "Within thirty days of the first load of funds onto the card", "At the time of the first transaction made with the card", "Only if the consumer requests it in writing from the issuer"],
            correctIndex: 0,
            explanation: "For a card sold at retail, it must be on or visible through an outward-facing external surface of the packaging.",
            sourceLessonSlug: "prepaid-cards-and-payment-apps",
          },
          {
            prompt: "Which of these fees must the prepaid short form disclosure state?",
            options: ["The cash reload fee", "The interest rate applied to funds held on the card for more than thirty days", "The issuer's cost of processing each transaction made at a point of sale", "The fee the merchant pays to accept the card at a point of sale terminal"],
            correctIndex: 0,
            explanation: "The list also covers the periodic fee, the per purchase fee, in-network and out-of-network ATM withdrawal and balance inquiry fees, customer service fees, and any inactivity fee.",
            sourceLessonSlug: "prepaid-cards-and-payment-apps",
          },
          {
            prompt: "How many ATM withdrawal fees must the short form state?",
            options: ["Two", "One, being the highest of the fees the issuer charges at any machine", "Four, covering domestic and international machines in and out of network", "None, since ATM fees are set by the machine's operator rather than by the issuer"],
            correctIndex: 0,
            explanation: "An in-network fee and an out-of-network fee, and the same pairing applies to ATM balance inquiries.",
            sourceLessonSlug: "prepaid-cards-and-payment-apps",
          },
          {
            prompt: "What must accompany the inactivity fee on the short form?",
            options: ["The conditions that trigger it", "The number of consumers charged it in the preceding calendar year", "A comparison with the inactivity fee charged on a deposit account", "A statement that the fee may be waived on request to customer service"],
            correctIndex: 0,
            explanation: "Naming the trigger is what makes the fee predictable rather than a surprise on a dormant card.",
            sourceLessonSlug: "prepaid-cards-and-payment-apps",
          },
          {
            prompt: "For a prepaid card sold in a store, where must the short form appear?",
            options: ["On or visible through the outside of the packaging", "In the terms and conditions leaflet sealed inside the package", "On the retailer's shelf label rather than on the product itself", "On the issuer's website, with a reference printed on the receipt"],
            correctIndex: 0,
            explanation: "That is the condition on which the long form may follow acquisition rather than precede it.",
            sourceLessonSlug: "prepaid-cards-and-payment-apps",
          },
          {
            prompt: "What single instruction do Truth in Savings and the prepaid short form share?",
            options: ["The price is published before you commit", "The regulator sets a maximum fee that the product may not exceed", "The institution must review the disclosure aloud with the consumer", "The consumer may cancel within three business days of acquiring the product"],
            correctIndex: 0,
            explanation: "One puts the price in a document you can request, the other puts it on the outside of the box, and both make reading it the consumer's move.",
            sourceLessonSlug: "prepaid-cards-and-payment-apps",
          },
          {
            prompt: "What does the FDIC's deposit insurance FAQ say about prepaid cards?",
            options: ["Insured when registered and certain requirements are met", "Never insured, since a prepaid card is not a deposit at an insured institution", "Always insured to the same limit as a checking account at the issuing bank", "Insured only for balances above the standard maximum deposit insurance amount"],
            correctIndex: 0,
            explanation: "The two conditions in that sentence are what make prepaid coverage a fact about a particular programme rather than about prepaid cards in general.",
            sourceLessonSlug: "prepaid-cards-and-payment-apps",
          },
          {
            prompt: "How does prepaid card coverage differ from coverage on a bank deposit?",
            options: ["It is conditional rather than automatic", "It is provided by the card network rather than by a federal insurance fund", "It applies only to funds loaded by an employer or a government agency", "It is capped at a lower amount than the standard maximum deposit insurance amount"],
            correctIndex: 0,
            explanation: "Section 1 established that deposit coverage is automatic and requires no application; prepaid coverage depends on registration and on requirements being met.",
            sourceLessonSlug: "prepaid-cards-and-payment-apps",
          },
          {
            prompt: "Which service did the FDIC deliberately EXCLUDE from its nonbank online payment services question?",
            options: ["Zelle", "PayPal, which moves money between merchants rather than between individuals", "Venmo, which the survey classes as a prepaid account instead", "Cash App, which the survey counts under nonbank money transfer services"],
            correctIndex: 0,
            explanation: "The category is defined by an account feature that stores money, and Zelle moves money between existing bank accounts rather than storing it.",
            sourceLessonSlug: "prepaid-cards-and-payment-apps",
          },
          {
            prompt: "Among households using online payment services, what share of UNBANKED ones used them to pay bills?",
            options: ["60.8 percent", "24.5 percent, which was the figure for banked households rather than unbanked ones", "73.9 percent, which was the prepaid card figure rather than the payment app figure", "71.5 percent, which was the share using them for at least one core transaction"],
            correctIndex: 0,
            explanation: "The comparison against 24.5 percent of banked households is the point: the same tool is doing a different job.",
            sourceLessonSlug: "prepaid-cards-and-payment-apps",
          },
          {
            prompt: "What share of unbanked households with online payment services used them for at least one core transaction?",
            options: ["71.5 percent", "33.5 percent, which was the figure for banked households rather than unbanked ones", "90.7 percent, which was the equivalent figure for prepaid cards", "60.8 percent, which was the share using them specifically to pay bills"],
            correctIndex: 0,
            explanation: "More than twice the 33.5 percent among banked households with the same tools.",
            sourceLessonSlug: "prepaid-cards-and-payment-apps",
          },
          {
            prompt: "Among unbanked households with prepaid cards, what share used them to pay bills?",
            options: ["73.9 percent", "28.3 percent, which was the figure for banked households with prepaid cards", "59.0 percent, which was the share using them to receive income", "44.8 percent, which was the share using them to save or keep money safe"],
            correctIndex: 0,
            explanation: "Against 28.3 percent of banked households, which is the sharpest of the three core-transaction gaps.",
            sourceLessonSlug: "prepaid-cards-and-payment-apps",
          },
          {
            prompt: "What share of unbanked households with prepaid cards used them for at least one core transaction?",
            options: ["90.7 percent", "46.0 percent, which was the figure for banked households with prepaid cards", "71.5 percent, which was the equivalent figure for online payment services", "73.9 percent, which was the share using them specifically to pay bills"],
            correctIndex: 0,
            explanation: "Almost twice the 46.0 percent among banked households, which is why the lesson says the card is the account rather than an addition to one.",
            sourceLessonSlug: "prepaid-cards-and-payment-apps",
          },
          {
            prompt: "Which three transactions does the FDIC group as core?",
            options: ["Paying bills, receiving income, saving or keeping money safe", "Making purchases in person, making purchases online, and sending money to friends", "Cashing checks, buying money orders, and sending international remittances", "Depositing cash, withdrawing cash, and checking an account balance"],
            correctIndex: 0,
            explanation: "They are the transactions an account normally does, which is how the survey measures whether another tool is standing in for one.",
            sourceLessonSlug: "prepaid-cards-and-payment-apps",
          },
          {
            prompt: "What is the single-sentence reading of the prepaid and payment-app usage gaps?",
            options: ["For unbanked households the tool IS the account", "Unbanked households use these tools less often because they lack smartphones", "Banked households use these tools more intensively than unbanked ones do", "The two groups use the tools identically once income is held constant"],
            correctIndex: 0,
            explanation: "For a banked household they are conveniences layered on an account; for an unbanked one they are where wages arrive, bills are paid, and money is kept.",
            sourceLessonSlug: "prepaid-cards-and-payment-apps",
          },
          {
            prompt: "Which explanation for using a check casher does this course reject?",
            options: ["That people do not know better", "That immediate availability of cash can be worth paying for", "That a posted percentage is easier to forecast than an overdraft fee", "That a check casher imposes no minimum balance requirement"],
            correctIndex: 0,
            explanation: "The survey and the arithmetic both support a reasoned comparison under a constraint the household did not choose.",
            sourceLessonSlug: "why-someone-chooses-the-substitute",
          },
          {
            prompt: "Which of these is one of the three properties, besides price, that decides the comparison?",
            options: ["Whether the cost is knowable in advance", "Whether the provider is insured by the FDIC or by the NCUA", "Whether the transaction is reported to a consumer reporting agency", "Whether the household has previously held a deposit account"],
            correctIndex: 0,
            explanation: "The other two are when the money becomes available, and whether there is a minimum balance.",
            sourceLessonSlug: "why-someone-chooses-the-substitute",
          },
          {
            prompt: "In what sense is an overdraft fee unknowable?",
            options: ["Its occurrence, not its amount", "Its amount, since institutions may change it without notifying the account holder", "Both amount and occurrence, since neither is disclosed anywhere in advance", "Neither, since Truth in Savings makes it fully predictable for every household"],
            correctIndex: 0,
            explanation: "The amount is disclosed, but whether it happens depends on posting order and on when a deposit clears.",
            sourceLessonSlug: "why-someone-chooses-the-substitute",
          },
          {
            prompt: "Why are immediate cash and a held deposit described as two different products?",
            options: ["Timing changes what the money can do", "Because a held deposit earns interest while cash does not", "Because a held deposit is insured and cash in hand is not", "Because only one of them is subject to a percentage fee"],
            correctIndex: 0,
            explanation: "For a household paying rent tomorrow, now and in three days are not two prices of the same thing.",
            sourceLessonSlug: "why-someone-chooses-the-substitute",
          },
          {
            prompt: "What is the same-units question this lesson teaches for comparing two ways of moving money?",
            options: ["What does it cost to make this amount usable this week", "Which provider is regulated by the more senior federal agency", "Which option has been in business longer in the local area", "Which option reports positive activity to a consumer reporting agency"],
            correctIndex: 0,
            explanation: "Converting both options to the same units is the method; the answer depends on the learner's own numbers.",
            sourceLessonSlug: "why-someone-chooses-the-substitute",
          },
          {
            prompt: "Under New York's maximum, what could a check casher charge on a $600 payroll check?",
            options: ["Up to $13.20", "Up to $9.00, which is the figure for a listed government payment of the same size", "Exactly $1.00, which is the minimum charge under the greater-of rule", "Up to $2.65, matching the USPS money order fee for amounts up to $500"],
            correctIndex: 0,
            explanation: "2.2 percent of $600 is $13.20, and the greater-of rule means the percentage rather than the $1 minimum applies at that size.",
            sourceLessonSlug: "why-someone-chooses-the-substitute",
          },
          {
            prompt: "Under the same maximum, what could a check casher charge on a $600 listed government payment?",
            options: ["Up to $9.00", "Up to $13.20, which is the figure for a non-government check of the same size", "Nothing, since government payments are exempt from check cashing fees entirely", "Up to $3.75, matching the USPS fee for money orders above $500"],
            correctIndex: 0,
            explanation: "1.5 percent of $600 is $9.00, and the lower rate applies to the listed categories of federal and state payments.",
            sourceLessonSlug: "why-someone-chooses-the-substitute",
          },
          {
            prompt: "Why do a stable-balance household and a zero-balance household reach opposite conclusions?",
            options: ["They are pricing different risk", "One has access to a bank branch and the other does not", "One is subject to the check-cashing cap and the other is not", "One reads its account disclosures and the other does not"],
            correctIndex: 0,
            explanation: "For the first the account is free and the check casher is expensive; for the second the account can cost more, unpredictably.",
            sourceLessonSlug: "why-someone-chooses-the-substitute",
          },
          {
            prompt: "Why does this course decline to say which option is cheaper?",
            options: ["It depends on the learner's own numbers", "Because the relevant fee schedules are confidential and cannot be obtained", "Because federal law prohibits comparing regulated and unregulated products", "Because the comparison changes too often to be worth attempting at all"],
            correctIndex: 0,
            explanation: "Fee schedule, balance pattern, pay timing and state cap are all individual, and all four are obtainable from documents somebody is required to provide.",
            sourceLessonSlug: "why-someone-chooses-the-substitute",
          },
          {
            prompt: "What is happening to the size of the substitute market?",
            options: ["It is shrinking", "It is growing rapidly as more households leave the banking system", "It is stable, having changed by less than a percentage point since 2013", "It cannot be measured, since nonbank providers file no reports"],
            correctIndex: 0,
            explanation: "Money order use across all households fell from 18.2 to 8.0 percent and check cashing from 6.9 to 2.7 percent between 2013 and 2023.",
            sourceLessonSlug: "why-someone-chooses-the-substitute",
          },
          {
            prompt: "What finding keeps the shrinking-market story from being triumphant?",
            options: ["Two thirds of unbanked households are cash only", "That the unbanked rate rose between 2021 and 2023 in every income band", "That check cashing fees rose faster than inflation over the same decade", "That prepaid card use among banked households grew over the same period"],
            correctIndex: 0,
            explanation: "66.2 percent of unbanked households used neither prepaid cards nor online payment services, so for them the substitute market is the only counter open.",
            sourceLessonSlug: "why-someone-chooses-the-substitute",
          },
          {
            prompt: "What constraint frames the comparison the household is actually making?",
            options: ["One it did not choose", "A budget it set for itself at the start of the month", "A preference for cash over electronic payment methods", "A requirement imposed by its employer about how wages are received"],
            correctIndex: 0,
            explanation: "The comparison is between two specific priced transactions under conditions the household controls neither end of.",
            sourceLessonSlug: "why-someone-chooses-the-substitute",
          },
          {
            prompt: "Which survey figure supports the point about minimum balances in this comparison?",
            options: ["42.3 percent", "29.3 percent, which is the share citing that fees are too unpredictable", "66.2 percent, which is the cash-only share of unbanked households", "8.0 percent, which is the share of all households using nonbank money orders"],
            correctIndex: 0,
            explanation: "It was the most cited reason for having no account, and a check casher imposes no balance requirement at all.",
            sourceLessonSlug: "why-someone-chooses-the-substitute",
          },
          {
            prompt: "What was the USPS fee for a money order between $500.01 and $1,000.00, read on 28 August 2026?",
            options: ["$3.75", "$2.65, which was the fee for amounts up to $500.00", "$0.85, which was the fee for a postal military money order", "$1.00, which is the minimum charge under New York's check cashing rule"],
            correctIndex: 0,
            explanation: "The two-band structure means a single order above $500 costs more than the lower band's flat fee.",
            sourceLessonSlug: "money-orders-and-check-cashing",
          },
          {
            prompt: "What did USPS list as the fee for a postal military money order?",
            options: ["$0.85", "$2.65, which was the standard domestic fee for amounts up to $500.00", "$3.75, which was the standard domestic fee for larger amounts", "$1.50, matching New York's rate on government assistance checks"],
            correctIndex: 0,
            explanation: "It is a separate product with its own published fee, read on 28 August 2026.",
            sourceLessonSlug: "money-orders-and-check-cashing",
          },
          {
            prompt: "Why does the lesson call money order and check cashing spending non-discretionary?",
            options: ["It is rent, utilities and wages", "Because households are legally required to use licensed providers for these transactions", "Because the fees are deducted automatically before the household receives the funds", "Because the survey counts only transactions a household reported as unavoidable"],
            correctIndex: 0,
            explanation: "More than nine in ten unbanked money order users paid bills with them, and three in four check cashing users were cashing income.",
            sourceLessonSlug: "money-orders-and-check-cashing",
          },
          {
            prompt: "Which two things does the substitute market do for a household without an account?",
            options: ["Pay bills and turn a check into money", "Extend credit and report positive payment history to a bureau", "Insure deposits and provide overdraft protection on stored funds", "Screen applicants and furnish information to reporting agencies"],
            correctIndex: 0,
            explanation: "A money order does what a check does, and a check casher does what a deposit and a withdrawal do together.",
            sourceLessonSlug: "money-orders-and-check-cashing",
          },
          {
            prompt: "Among unbanked households using money transfer services, what did about half use them for?",
            options: ["Paying bills", "Sending international remittances to family outside the United States", "Receiving wages from an employer that does not offer direct deposit", "Buying money orders to pay a landlord who does not accept cash"],
            correctIndex: 0,
            explanation: "The pattern matches money orders and check cashing: the services are being used for core household transactions rather than for occasional transfers.",
            sourceLessonSlug: "money-orders-and-check-cashing",
          },
          {
            prompt: "Among unbanked households with prepaid cards, what share used them to receive income?",
            options: ["59.0 percent", "28.6 percent, which was the figure for banked households with prepaid cards", "73.9 percent, which was the share using them to pay bills", "44.8 percent, which was the share using them to save or keep money safe"],
            correctIndex: 0,
            explanation: "Against 28.6 percent of banked households, which is a smaller gap than the bill-paying one but still a doubling.",
            sourceLessonSlug: "prepaid-cards-and-payment-apps",
          },
          {
            prompt: "Among unbanked households with prepaid cards, what share used them to save or keep money safe?",
            options: ["44.8 percent", "19.2 percent, which was the figure for banked households with prepaid cards", "40.9 percent, which was the equivalent figure for online payment services", "90.7 percent, which was the share using them for at least one core transaction"],
            correctIndex: 0,
            explanation: "A card being used as a place to keep money is the clearest sign that it is standing in for a deposit account.",
            sourceLessonSlug: "prepaid-cards-and-payment-apps",
          },
          {
            prompt: "Among unbanked households with online payment services, what share used them to receive income?",
            options: ["34.3 percent", "12.3 percent, which was the figure for banked households with the same services", "60.8 percent, which was the share using them to pay bills", "40.9 percent, which was the share using them to save or keep money safe"],
            correctIndex: 0,
            explanation: "Against 12.3 percent of banked households, so nearly three times the rate.",
            sourceLessonSlug: "prepaid-cards-and-payment-apps",
          },
          {
            prompt: "What is the regulatory point of putting a fee summary on the outside of a package?",
            options: ["The price is readable before purchase", "Retailers are required to stock only cards whose fees fall below a federal cap", "The issuer may then omit the long form disclosure from the package entirely", "The consumer may return the card for a refund within thirty days of purchase"],
            correctIndex: 0,
            explanation: "It is the retail analogue of Truth in Savings making account disclosures available on request before an account is opened.",
            sourceLessonSlug: "prepaid-cards-and-payment-apps",
          },
          {
            prompt: "What does the greater-of structure in New York's rule do to a very small check?",
            options: ["It applies a minimum charge", "It exempts the check from any fee at all below a stated threshold", "It applies the government assistance rate regardless of who issued the check", "It requires the check casher to refuse the transaction entirely"],
            correctIndex: 0,
            explanation: "The rule reads $1 or 2.2 percent, whichever is greater, so below about $45 the flat dollar governs.",
            sourceLessonSlug: "money-orders-and-check-cashing",
          },
          {
            prompt: "Which of these is the transferable skill this section teaches?",
            options: ["Finding your own state's rule", "Memorising the maximum check cashing fee in each of the fifty states", "Identifying which nonbank providers are insured by the FDIC", "Predicting the direction of nonbank service usage over the coming decade"],
            correctIndex: 0,
            explanation: "The method executed once on New York is the pattern; the numbers themselves are dated and belong to a regulator.",
            sourceLessonSlug: "money-orders-and-check-cashing",
          },
          {
            prompt: "What does 'the only counter that is open' describe?",
            options: ["The position of a cash-only household", "A branch that remains after every other bank in a census tract has closed", "The single window at a check casher that handles government payments", "The final free-disclosure route available after an adverse action notice"],
            correctIndex: 0,
            explanation: "For a household using neither prepaid cards nor payment apps, the substitute market is not a comparison between products at all.",
            sourceLessonSlug: "why-someone-chooses-the-substitute",
          },
          {
            prompt: "Which four documents does the lesson say a learner can now obtain to run the comparison?",
            options: ["Fee schedule, balance pattern, pay timing, state cap", "Credit report, credit score, adverse action notice, dispute result", "Account agreement, deposit insurance certificate, call report, survey report", "Short form disclosure, long form disclosure, packaging, receipt"],
            correctIndex: 0,
            explanation: "Each comes from a document somebody is required to provide, which is what turns the arithmetic from a guess into a calculation.",
            sourceLessonSlug: "why-someone-chooses-the-substitute",
          },
          {
            prompt: "How does the lesson describe what the survey says about the reasoning of unbanked households?",
            options: ["They are comparing priced transactions", "They are unaware that bank accounts exist in their area", "They prefer cash for reasons unrelated to cost or timing", "They are barred by federal rule from opening an account"],
            correctIndex: 0,
            explanation: "The reasons households gave in Section 2 describe price, predictability and access rather than ignorance.",
            sourceLessonSlug: "why-someone-chooses-the-substitute",
          },
          {
            prompt: "What happened to prepaid card use among BANKED households by 2023?",
            options: ["It stood at 5.2 percent", "It rose sharply to 32.8 percent, matching the earlier unbanked figure", "It fell to zero as payment apps replaced physical cards entirely", "It matched the unbanked rate for the first time since the survey began"],
            correctIndex: 0,
            explanation: "Down from 5.7 percent in 2021, a much smaller proportional fall than among unbanked households.",
            sourceLessonSlug: "prepaid-cards-and-payment-apps",
          },
          {
            prompt: "Why does a percentage fee behave differently from a flat fee as amounts grow?",
            options: ["It scales with the money", "It falls as a share of the amount because of volume discounts", "It is capped by federal regulation once the amount exceeds $1,000", "It converts automatically to a flat fee above a stated threshold"],
            correctIndex: 0,
            explanation: "A $2.65 money order fee is the same on any amount up to $500, while a 2.2 percent check cashing fee doubles when the check doubles.",
            sourceLessonSlug: "money-orders-and-check-cashing",
          },
          {
            prompt: "Which section of this course is the direct companion to the prepaid short form disclosure?",
            options: ["The Truth in Savings account disclosures", "The Customer Identification Program rule's four data elements", "The Fair Credit Reporting Act's adverse action notice", "The Congressional Review Act's bar on reissuing a disapproved rule"],
            correctIndex: 0,
            explanation: "Both regimes publish the price before the consumer commits, one on request and one on the outside of the packaging.",
            sourceLessonSlug: "prepaid-cards-and-payment-apps",
          },
          {
            prompt: "What did the lesson say about whether the substitute market is a shadow economy in growth?",
            options: ["It is not, it is shrinking", "It is, and its growth explains the decline in the unbanked rate", "The survey cannot tell, because nonbank providers are not required to report", "It grew until 2019 and has been flat since then"],
            correctIndex: 0,
            explanation: "Use of money orders and check cashing more than halved between 2013 and 2023 alongside an unbanked rate that halved between 2011 and 2023.",
            sourceLessonSlug: "why-someone-chooses-the-substitute",
          },
          {
            prompt: "Which category does a check casher fall into for regulatory purposes?",
            options: ["A state-licensed nonbank business", "An insured depository institution supervised by the FDIC", "A consumer reporting agency under the Fair Credit Reporting Act", "A prepaid account issuer subject to Regulation E disclosures"],
            correctIndex: 0,
            explanation: "That is why its maximum fee is set by a state regulator rather than by a federal one.",
            sourceLessonSlug: "money-orders-and-check-cashing",
          },
          {
            prompt: "What makes a posted percentage easier to live with than an overdraft fee, for some households?",
            options: ["You can compute it before you hand over the check", "It is always smaller in absolute terms than an overdraft fee would be", "It is refundable if the household deposits the funds within thirty days", "It is capped by federal regulation while overdraft fees are not"],
            correctIndex: 0,
            explanation: "The predictability is the property, not the size, which is why the survey asked about high fees and unpredictable fees separately.",
            sourceLessonSlug: "why-someone-chooses-the-substitute",
          },
          {
            prompt: "What was New York's regulatory authority for the check casher fee maximum?",
            options: ["Part 400.11 of the Superintendent's Regulations", "Regulation E at 12 CFR part 1005, as applied to nonbank providers", "Section 400 of the federal Truth in Savings Act, as amended", "The Consumer Financial Protection Bureau's supervisory designation for large participants"],
            correctIndex: 0,
            explanation: "The Department of Financial Services published the resulting maximum in an industry letter dated 30 January 2023.",
            sourceLessonSlug: "money-orders-and-check-cashing",
          },
          {
            prompt: "What did the lesson identify as the reason a free channel gets replaced by a paid one?",
            options: ["The free one is closed to that household", "The paid one offers rewards the free one does not", "The paid one is more heavily regulated and therefore safer", "The household prefers to keep its transactions off any electronic record"],
            correctIndex: 0,
            explanation: "Rent, utilities and wages move through a paid channel because the household has no account for them to move through.",
            sourceLessonSlug: "money-orders-and-check-cashing",
          },
          {
            prompt: "Which unbanked group used prepaid cards more in 2023?",
            options: ["Those previously banked", "Those that had never been banked, at 26.5 percent against 17.2 percent", "Neither, since the survey found no difference between the two groups", "Those in the highest income band among unbanked households"],
            correctIndex: 0,
            explanation: "Previously banked unbanked households used prepaid cards at 26.5 percent against 17.2 percent among never-banked ones.",
            sourceLessonSlug: "prepaid-cards-and-payment-apps",
          },
          {
            prompt: "How does the FDIC define the nonbank online payment service category?",
            options: ["An account feature that stores money", "Any application that allows a consumer to send money to another person", "Any service operated by a company that is not an insured depository institution", "Any payment made from a mobile telephone rather than from a card"],
            correctIndex: 0,
            explanation: "The stored-money feature is why Zelle, which moves funds between existing bank accounts, was excluded from the question.",
            sourceLessonSlug: "prepaid-cards-and-payment-apps",
          },
          {
            prompt: "What is the correct way to describe the safety of funds on a particular prepaid card?",
            options: ["A fact about that card's programme", "Identical to a bank deposit, since the funds sit at an insured institution either way", "Never insured, since the card is not issued by an insured depository institution", "Guaranteed by the card network under its own protection scheme"],
            correctIndex: 0,
            explanation: "The FDIC's conditional language, registered with the issuer and certain requirements met, makes coverage specific to the programme rather than general to prepaid cards.",
            sourceLessonSlug: "prepaid-cards-and-payment-apps",
          },
          {
            prompt: "What does this section add to the account-versus-substitute argument that opinion cannot?",
            options: ["Published prices from both sides", "A ruling by a federal court on which option consumers must be offered", "A survey of consumer satisfaction with each type of provider", "An estimate of each provider's profit margin on a typical transaction"],
            correctIndex: 0,
            explanation: "USPS publishes its fee, New York publishes its cap, Truth in Savings requires the account disclosures, and Regulation E puts prepaid fees on the packet.",
            sourceLessonSlug: "why-someone-chooses-the-substitute",
          },
        ],
      },
    },
  ],
};
