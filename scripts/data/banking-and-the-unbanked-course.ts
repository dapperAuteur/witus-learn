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
  ],
};
