// "Taxes for Americans Abroad" — a Learn.WitUS course in the "Travel & Living Abroad"
// category. High-stakes financial content: this course is deliberately conservative,
// repeatedly framed as EDUCATIONAL ONLY (not tax or legal advice), and cited heavily to
// the IRS, FinCEN, and Treasury.
//
// AUTHORITATIVE-VALUES RULE (load-bearing here): dollar thresholds (FEIE cap, filing
// income thresholds, Form 8938 asset thresholds, FBAR penalty ceilings) are set or
// adjusted by Congress/IRS/Treasury and several of them change annually for inflation.
// This course never asserts a single current dollar figure as a permanent fact. Where a
// figure helps illustrate the *pattern* (e.g. the FEIE cap's year-over-year history), it
// is cited to a specific year, and the course repeatedly tells the learner to confirm the
// CURRENT figure at irs.gov (or fincen.gov for FBAR) before relying on it. Form 8938's
// thresholds are set by statute (not annually inflation-adjusted at the time this course
// was authored) but are still framed as confirm-at-irs.gov, since Congress can change them.
//
// Every fact is cited to a verified source: IRS.gov pages fetched and quoted directly
// during authoring (Publication 54, the FEIE pages, Form 1116/2555 instructions, the FBAR
// and FATCA/Form 8938 pages, the automatic-extension pages, self-employment/totalization
// pages, Form 8621's about page), FinCEN.gov for the FBAR filing destination, and the
// California Franchise Tax Board for the one concrete state-residency example (used only
// to illustrate "sticky state" domicile rules, not as a complete state-tax guide).
//
// Ends with a quiz whose every question links back to the lesson that teaches the answer
// (the quiz standard).

import type { AuthoredCourse } from "./authored-course";

export const TAXES_AMERICANS_ABROAD_COURSE: AuthoredCourse = {
  title: "Taxes for Americans Abroad",
  description:
    "A careful, plain-language introduction to U.S. tax obligations for citizens and green card holders living outside the United States: the core worldwide-income rule, who must file, the Foreign Earned Income Exclusion (Form 2555) and its qualifying tests, the Foreign Tax Credit (Form 1116), foreign-account reporting under the FBAR (FinCEN Form 114) and FATCA (Form 8938), the automatic 2-month filing extension, state tax considerations, and common pitfalls. This course is educational only, not tax or legal advice, always confirm current rules, forms, and dollar thresholds with a qualified cross-border tax professional and at irs.gov. Cited throughout to the IRS, FinCEN, and Treasury.",
  lessons: [
    {
      slug: "worldwide-income-the-core-rule",
      title: "1 · The core rule: worldwide income, no matter where you live",
      body: `**Before anything else: this course is educational, not tax or legal advice.** Tax rules for Americans abroad are genuinely complicated, the stakes of getting them wrong (unfiled returns, missed elections, foreign-account penalties) are real, and this course cannot know your specific facts. Use it to understand the landscape and the vocabulary, then confirm your own situation, and the current numbers, with a qualified cross-border tax professional and with irs.gov before you file (Internal Revenue Service, n.d.-a).

Most countries tax based on where you **live**. Move away, stop living there, and (eventually) their tax claim on you fades. The United States does not work that way.

The United States taxes its **citizens** and its **resident aliens**, which, for this purpose, mainly means lawful permanent residents, i.e., **green card holders**, on their **worldwide income**, no matter where in the world they live or where the income was earned (Internal Revenue Service, n.d.-a, n.d.-b). This is called **citizenship-based taxation**, and the U.S. is one of the very few countries that uses it. Wages earned in Tokyo, rental income from a flat in Lisbon, interest from a bank account in Nairobi, all of it is, in principle, reportable to the IRS, the same as if it had been earned in Ohio (Internal Revenue Service, n.d.-a).

**This doesn't necessarily mean double taxation.** Later lessons cover two major tools, the Foreign Earned Income Exclusion (Lessons 3-4) and the Foreign Tax Credit (Lesson 5), that Congress built specifically to reduce or eliminate paying tax twice on the same income. But you only get access to those tools by **filing** a U.S. return; skipping the filing because you "already pay tax where I live" gives up the very relief that's designed to prevent double taxation (Internal Revenue Service, n.d.-a).

**Green card holders are treated the same as citizens for this rule.** Holding a green card, even if you've lived abroad for years and rarely visit the U.S., keeps you a U.S. tax resident on worldwide income until you either formally abandon the green card (Form I-407, with U.S. Citizenship and Immigration Services) or become subject to the separate expatriation tax rules. A citizen has no equivalent opt-out short of formally renouncing citizenship (Internal Revenue Service, n.d.-x).

:::reveal What is "citizenship-based taxation," and who does it apply to besides U.S. citizens? ||| It's the U.S. rule that taxes worldwide income regardless of where you live, applying to U.S. citizens and to resident aliens (mainly green card holders) alike, green card holders stay subject to it until they formally give up the green card or otherwise expatriate.

## Sources
- Internal Revenue Service. (n.d.-a). *Tax Guide for U.S. Citizens and Resident Aliens Abroad (Publication 54)*. https://www.irs.gov/publications/p54
- Internal Revenue Service. (n.d.-b). *U.S. citizens and resident aliens abroad*. https://www.irs.gov/individuals/international-taxpayers/us-citizens-and-resident-aliens-abroad
- Internal Revenue Service. (n.d.-x). *Tax information and responsibilities for new immigrants to the United States*. https://www.irs.gov/individuals/international-taxpayers/tax-information-and-responsibilities-for-new-immigrants-to-the-united-states`,
    },
    {
      slug: "who-must-file",
      title: "2 · Who must file, and why filing is what unlocks relief",
      body: `Quick refresher: Lesson 1 covered the core rule, the U.S. taxes citizens and green card holders on worldwide income no matter where they live (Internal Revenue Service, n.d.-a). This lesson covers who specifically must **file** a return, and why filing matters even when you expect to owe nothing.

**The filing test for Americans abroad is the same test used for everyone in the U.S.** If your gross income from **worldwide** sources is at or above the threshold for your filing status and age, you must file a return, living abroad doesn't raise or remove that requirement (Internal Revenue Service, n.d.-c, n.d.-d). The exact threshold table lives in Chapter 1 of Publication 54, and it changes over time, so this course won't pretend a single dollar figure is permanent; check the current-year table at irs.gov before you decide you're under it (Internal Revenue Service, n.d.-a, n.d.-c). As an illustration of the order of magnitude: for the 2025 tax year, a single filer under 65 was required to file at $15,750 or more of gross income, and a married couple filing jointly (both under 65) at $31,500 or more, numbers the IRS adjusts most years for inflation (Internal Revenue Service, n.d.-d).

**"Gross income" is broad, and it includes income you might otherwise think of as tax-free.** It covers wages, self-employment earnings, foreign pensions, rental income, interest, dividends, and capital gains, from any country. Critically, it also includes any amount you plan to exclude under the Foreign Earned Income Exclusion (Lessons 3-4), you count that income first to see whether you must file, then exclude it on the return itself (Internal Revenue Service, n.d.-c).

**Why file if the exclusions and credits might zero out what you owe?** Because the Foreign Earned Income Exclusion and the Foreign Tax Credit are not automatic, they're **elections and calculations made on a filed return** (Form 2555 and Form 1116, respectively). Skip the filing, and you skip the relief, even though the underlying law would have let you owe little or nothing (Internal Revenue Service, n.d.-a). Many Americans abroad who assume "I don't owe anything, so why bother" are, ironically, the people who most need to file to prove that on paper.

:::reveal If you expect the Foreign Earned Income Exclusion to bring your U.S. tax owed to zero, do you still need to file a return? ||| Yes. The exclusion and the Foreign Tax Credit are calculated and claimed on a filed return (Form 2555 / Form 1116), they're not automatic, so filing is what actually unlocks the relief.

## Sources
- Internal Revenue Service. (n.d.-a). *Tax Guide for U.S. Citizens and Resident Aliens Abroad (Publication 54)*. https://www.irs.gov/publications/p54
- Internal Revenue Service. (n.d.-c). *U.S. citizens and residents abroad filing requirements*. https://www.irs.gov/individuals/international-taxpayers/us-citizens-and-residents-abroad-filing-requirements
- Internal Revenue Service. (n.d.-d). *Check if you need to file a tax return*. https://www.irs.gov/individuals/check-if-you-need-to-file-a-tax-return`,
      recallContent: [
        {
          prompt: "What is \"citizenship-based taxation,\" and who does it apply to besides U.S. citizens?",
          answer:
            "It's the U.S. rule that taxes worldwide income regardless of where you live, applying to U.S. citizens and to resident aliens (mainly green card holders) alike, green card holders stay subject to it until they formally give up the green card or otherwise expatriate.",
        },
        {
          prompt: "Can a citizen simply opt out of U.S. citizenship-based taxation the way a green card holder can abandon their green card?",
          answer:
            "No. A green card holder can stop being taxed this way by formally abandoning the green card (Form I-407) or through expatriation rules. A citizen has no equivalent opt-out short of formally renouncing citizenship.",
        },
      ],
    },
    {
      slug: "feie-overview-form-2555",
      title: "3 · The Foreign Earned Income Exclusion (Form 2555)",
      body: `Quick refresher: Lesson 2 covered who must file, the same worldwide-gross-income thresholds as domestic filers, and why filing is what actually unlocks relief like the exclusion this lesson covers (Internal Revenue Service, n.d.-c, n.d.-d).

The **Foreign Earned Income Exclusion (FEIE)** lets a qualifying taxpayer exclude a set amount of **foreign earned income** from U.S. income tax each year. You claim it on **Form 2555**, attached to your regular Form 1040 (Internal Revenue Service, n.d.-e, n.d.-h).

**"Earned" is the operative word, and it's a common trip-up.** The exclusion applies to income for services you performed abroad, wages, salary, self-employment income. It does **not** apply to unearned/passive income: interest, dividends, capital gains, pensions, Social Security, rental income, and alimony are not eligible for the FEIE, no matter where you live (Internal Revenue Service, n.d.-j). Someone living abroad on investment income or a pension has no FEIE to claim on that income at all, the Foreign Tax Credit (Lesson 5) is the relevant tool there instead.

**The exclusion amount is capped, and the cap is adjusted for inflation almost every year**, so this course teaches the *pattern*, not a number to memorize. To show how much it moves: the IRS's own published figures rose from $107,600 (2020) to $108,700 (2021) to $112,000 (2022) to $120,000 (2023) (Internal Revenue Service, n.d.-e). It has continued climbing since. **Always confirm the current year's exact cap at irs.gov before you rely on it**, a number that was right last year can be wrong this year (Internal Revenue Service, n.d.-e, n.d.-j).

**Two qualifying spouses can each claim their own exclusion** on their own earned income, effectively doubling the household's excluded amount, but each spouse must independently meet the tax-home and residency tests covered in the next lesson (Internal Revenue Service, n.d.-j).

**One more limit worth knowing up front:** the FEIE excludes income from **regular income tax**, it does **not** reduce self-employment tax on self-employment earnings. Lesson 9 covers that pitfall in more detail (Internal Revenue Service, n.d.-v).

:::reveal Does the Foreign Earned Income Exclusion apply to rental income or a pension you receive while living abroad? ||| No. The FEIE only applies to foreign *earned* income (wages and self-employment income for services performed abroad), passive income like rental income, pensions, interest, and dividends isn't eligible for it.

## Sources
- Internal Revenue Service. (n.d.-e). *Foreign earned income exclusion*. https://www.irs.gov/individuals/international-taxpayers/foreign-earned-income-exclusion
- Internal Revenue Service. (n.d.-h). *Foreign earned income exclusion – forms to file*. https://www.irs.gov/individuals/international-taxpayers/foreign-earned-income-exclusion-forms-to-file
- Internal Revenue Service. (n.d.-j). *Figuring the foreign earned income exclusion*. https://www.irs.gov/individuals/international-taxpayers/figuring-the-foreign-earned-income-exclusion
- Internal Revenue Service. (n.d.-v). *Self-employment tax for businesses abroad*. https://www.irs.gov/individuals/international-taxpayers/self-employment-tax-for-businesses-abroad`,
      recallContent: [
        {
          prompt: "If you expect the Foreign Earned Income Exclusion to bring your U.S. tax owed to zero, do you still need to file a return?",
          answer:
            "Yes. The exclusion and the Foreign Tax Credit are calculated and claimed on a filed return (Form 2555 / Form 1116), they're not automatic, so filing is what actually unlocks the relief.",
        },
        {
          prompt: "Does living abroad, by itself, raise or lower the gross-income threshold at which you must file a U.S. return?",
          answer:
            "Neither, Americans abroad use the exact same worldwide-gross-income filing thresholds as domestic filers. Living abroad doesn't change the threshold.",
        },
      ],
    },
    {
      slug: "feie-qualifying-tests",
      title: "4 · Qualifying for the FEIE: the physical presence and bona fide residence tests",
      body: `Quick refresher: Lesson 3 covered what the FEIE excludes, a capped, annually-adjusted amount of foreign *earned* income, claimed on Form 2555, and that it doesn't cover passive income or self-employment tax (Internal Revenue Service, n.d.-e, n.d.-j).

Claiming the FEIE requires passing **two** separate tests: a **tax home test**, plus **one of two** residency tests.

**Tax home test.** Your "tax home", your regular place of business, employment, or post of duty, must be in a foreign country throughout the period you're claiming (Internal Revenue Service, n.d.-e). This is about where you *work*, not where your family lives.

**Then, pass one of these two tests:**

**1. The physical presence test.** You must be physically present in one or more foreign countries for at least **330 full days** during any 12-month period that includes part of the tax year. This test is purely about the calendar, it doesn't ask why you're abroad, what kind of visa or residence you hold, or whether you intend to return to the U.S. It only counts days (Internal Revenue Service, n.d.-g).

**2. The bona fide residence test.** You must be a bona fide resident of a foreign country (or countries) for an **uninterrupted period that includes a full tax year** (January 1, December 31). Unlike the physical presence test, this one is about the *nature* of your stay, factors like intent and ties to the foreign country matter, not just a day count. Brief or temporary trips back to the U.S. don't break bona fide residence, as long as you clearly intend to return to your foreign home (Internal Revenue Service, n.d.-f). Bona fide residence generally isn't available in your first year abroad, since it requires a full tax year already completed.

**Which test fits you** usually comes down to timing and travel pattern: someone who moved abroad mid-year and travels a lot may qualify faster under physical presence (pure day-counting); someone who has been settled abroad for a full calendar year with a stable foreign home may already qualify under bona fide residence. Form 2555 has a section for each test, and you use whichever one you actually meet (Internal Revenue Service, n.d.-h).

:::reveal What's the core difference between the physical presence test and the bona fide residence test? ||| The physical presence test is a pure day count, 330 full days abroad in any 12-month period, regardless of intent or visa type. The bona fide residence test looks at the nature of your stay, intent and ties to the foreign country, over an uninterrupted period covering a full tax year.

## Sources
- Internal Revenue Service. (n.d.-e). *Foreign earned income exclusion*. https://www.irs.gov/individuals/international-taxpayers/foreign-earned-income-exclusion
- Internal Revenue Service. (n.d.-f). *Foreign earned income exclusion – bona fide residence test*. https://www.irs.gov/individuals/international-taxpayers/foreign-earned-income-exclusion-bona-fide-residence-test
- Internal Revenue Service. (n.d.-g). *Foreign earned income exclusion – physical presence test*. https://www.irs.gov/individuals/international-taxpayers/foreign-earned-income-exclusion-physical-presence-test
- Internal Revenue Service. (n.d.-h). *Foreign earned income exclusion – forms to file*. https://www.irs.gov/individuals/international-taxpayers/foreign-earned-income-exclusion-forms-to-file`,
      recallContent: [
        {
          prompt: "Does the Foreign Earned Income Exclusion apply to rental income or a pension you receive while living abroad?",
          answer:
            "No. The FEIE only applies to foreign earned income (wages and self-employment income for services performed abroad), passive income like rental income, pensions, interest, and dividends isn't eligible.",
        },
        {
          prompt: "Roughly how much did the FEIE cap rise from 2020 to 2023, according to the IRS's own published figures, and why doesn't this course quote today's exact number as permanent?",
          answer:
            "It rose from $107,600 (2020) to $120,000 (2023) in the IRS's own figures, and it has kept climbing since. The course avoids asserting a fixed current number because the cap is adjusted for inflation almost every year, always check irs.gov for the current figure.",
        },
      ],
    },
    {
      slug: "foreign-tax-credit-form-1116",
      title: "5 · The Foreign Tax Credit (Form 1116)",
      body: `Quick refresher: Lesson 4 covered the two ways to qualify for the FEIE, 330 days of physical presence, or bona fide residence covering a full tax year, on top of the tax-home test (Internal Revenue Service, n.d.-f, n.d.-g).

The **Foreign Tax Credit (FTC)** is the other major tool for avoiding double taxation, and it works differently from the FEIE. Instead of *excluding* income from U.S. tax, the FTC gives you a **dollar-for-dollar credit** against your U.S. tax bill for income tax you already paid to a foreign country on the same income (Internal Revenue Service, n.d.-k). You claim it on **Form 1116** (Internal Revenue Service, n.d.-l).

**Why it matters beyond the FEIE:** the FTC can apply to income the FEIE can't touch, passive income like foreign dividends, interest, or rental income, and it's also the main relief for anyone who doesn't meet either FEIE residency test yet. Many Americans abroad use **both**: the FEIE on earned income, and the FTC on remaining income (including earned income above the FEIE cap) or on foreign tax paid on income the FEIE didn't exclude (Internal Revenue Service, n.d.-k).

**A small-amount shortcut exists.** If your total qualifying foreign taxes are $300 or less ($600 or less for married filing jointly), you may be able to claim the credit directly **without filing Form 1116** at all, by making an election, though in that case the usual foreign tax credit limitation calculation doesn't apply to you (Internal Revenue Service, n.d.-l). Above that, Form 1116 is required, and it separates income (and the foreign tax paid on it) into categories, commonly a "general category" for wages/business income and a "passive category" for investment income, figured separately (Internal Revenue Service, n.d.-l).

**One structural point worth knowing:** the FTC is generally limited to the U.S. tax that would otherwise be due on that same foreign-source income, you can't use it to wipe out U.S. tax on *domestic* income, and any unused credit can sometimes be carried back or forward, subject to the form's rules (Internal Revenue Service, n.d.-k, n.d.-l). Whether the FEIE, the FTC, or a mix of both produces a better outcome for a specific year depends on your income mix and the foreign tax rate where you live, exactly the kind of comparison a qualified cross-border tax professional runs against your actual numbers.

:::reveal How does the Foreign Tax Credit differ from the Foreign Earned Income Exclusion in how it reduces your U.S. tax? ||| The FEIE excludes a capped amount of foreign *earned* income from U.S. tax entirely. The Foreign Tax Credit instead gives a dollar-for-dollar credit against U.S. tax for foreign income tax you already paid on the same income, and it can apply to passive income the FEIE can't touch.

## Sources
- Internal Revenue Service. (n.d.-k). *Foreign Tax Credit*. https://www.irs.gov/individuals/international-taxpayers/foreign-tax-credit
- Internal Revenue Service. (n.d.-l). *Instructions for Form 1116*. https://www.irs.gov/instructions/i1116`,
      recallContent: [
        {
          prompt: "What's the core difference between the physical presence test and the bona fide residence test?",
          answer:
            "The physical presence test is a pure day count, 330 full days abroad in any 12-month period. The bona fide residence test looks at the nature of your stay (intent and ties to the foreign country) over an uninterrupted period covering a full tax year.",
        },
        {
          prompt: "Which FEIE test would generally suit someone who just moved abroad mid-year and hasn't completed a full tax year there yet?",
          answer:
            "The physical presence test, it only requires 330 full days abroad in any 12-month period and doesn't require a completed full tax year, unlike the bona fide residence test.",
        },
      ],
    },
    {
      slug: "fbar-fincen-form-114",
      title: "6 · Foreign account reporting: the FBAR (FinCEN Form 114)",
      body: `Quick refresher: Lesson 5 covered the Foreign Tax Credit, a dollar-for-dollar credit on Form 1116 for foreign income tax already paid, distinct from the FEIE's exclusion approach (Internal Revenue Service, n.d.-k).

This lesson is about a **completely separate obligation** that trips people up constantly: reporting the *existence* of foreign financial accounts, regardless of whether they generated any taxable income at all.

**What it is.** If you're a "U.S. person", which includes citizens, green card holders, and certain entities, with a financial interest in, or signature authority over, one or more foreign financial accounts (bank accounts, brokerage accounts, and some other account types), and the **combined value of all those accounts exceeded $10,000 at any time during the calendar year**, you must file a **Report of Foreign Bank and Financial Accounts (FBAR)**, using **FinCEN Form 114** (Internal Revenue Service, n.d.-m; Financial Crimes Enforcement Network, n.d.). Note the threshold is the **aggregate** across all your foreign accounts, not per account, three accounts with $4,000 each still cross it.

**Where it's filed is the single most confused fact about the FBAR: it does not go to the IRS with your tax return.** It's filed electronically with the **Financial Crimes Enforcement Network (FinCEN)**, a bureau of the U.S. Treasury, through FinCEN's own BSA E-Filing System, a completely separate filing from Form 1040 (Internal Revenue Service, n.d.-m; Financial Crimes Enforcement Network, n.d.).

**Deadline.** The FBAR is due **April 15** following the calendar year it covers, the same as the regular tax deadline, but filers automatically receive an extension to **October 15** without having to request one (Internal Revenue Service, n.d.-m).

**Penalties for not filing can be steep**, ranging from civil penalties (higher for "willful" violations than for non-willful ones, with a "reasonable cause" exception available in some non-willful cases) up to potential criminal penalties in serious cases; the exact civil-penalty ceilings are adjusted for inflation, so this course won't quote a fixed number, confirm current maximums at fincen.gov or with a professional if you're catching up on past-due filings (Internal Revenue Service, n.d.-m).

**FBAR is about accounts, not income tax.** You can owe zero additional U.S. tax and still have an FBAR obligation purely because your foreign accounts crossed the threshold, the two are separate filings with separate rules, which is exactly why the next lesson exists.

:::reveal Where do you file the FBAR, with your IRS Form 1040, or somewhere else? ||| Somewhere else. The FBAR (FinCEN Form 114) is filed electronically with FinCEN, a Treasury bureau, not with your IRS tax return, it's a completely separate filing.

## Sources
- Internal Revenue Service. (n.d.-m). *Report of Foreign Bank and Financial Accounts (FBAR)*. https://www.irs.gov/businesses/small-businesses-self-employed/report-of-foreign-bank-and-financial-accounts-fbar
- Financial Crimes Enforcement Network. (n.d.). *Report Foreign Bank and Financial Accounts*. https://www.fincen.gov/report-foreign-bank-and-financial-accounts`,
      recallContent: [
        {
          prompt: "How does the Foreign Tax Credit differ from the Foreign Earned Income Exclusion in how it reduces your U.S. tax?",
          answer:
            "The FEIE excludes a capped amount of foreign earned income from U.S. tax entirely. The FTC instead gives a dollar-for-dollar credit for foreign income tax already paid on the same income, and it can reach passive income the FEIE can't.",
        },
        {
          prompt: "Below what amount of total qualifying foreign taxes might you be able to claim the Foreign Tax Credit without filing Form 1116 at all?",
          answer:
            "$300 or less for most filers, or $600 or less for married filing jointly, above that, Form 1116 is required.",
        },
      ],
    },
    {
      slug: "fatca-form-8938",
      title: "7 · Foreign asset reporting: FATCA and Form 8938",
      body: `Quick refresher: Lesson 6 covered the FBAR, a FinCEN filing, separate from your tax return, triggered once combined foreign accounts exceed $10,000 at any point in the year (Internal Revenue Service, n.d.-m).

**Form 8938 is a second, different foreign-reporting requirement, created by the Foreign Account Tax Compliance Act (FATCA).** It's easy to confuse with the FBAR because both involve foreign accounts, but they are separate filings, with different thresholds, different definitions of what counts, and (unlike the FBAR) Form 8938 **is** filed with your regular income tax return (Internal Revenue Service, n.d.-o, n.d.-p).

**What it covers.** Form 8938 reports "specified foreign financial assets," a category that's broader than bank accounts, it can include foreign stock, foreign partnership interests, and certain foreign financial instruments held outside an account, in addition to foreign accounts themselves (Internal Revenue Service, n.d.-o).

**The thresholds are higher than the FBAR's, and they depend on where you live and your filing status.** For taxpayers **living abroad**: unmarried filers must file if the total value of specified foreign assets was more than $200,000 on the last day of the tax year, or more than $300,000 at any time during the year; married filers filing jointly must file above $400,000 on the last day, or $600,000 at any time. (Taxpayers living **in** the U.S. face lower thresholds, $50,000/$75,000 unmarried, $100,000/$150,000 married filing jointly.) These are the current statutory thresholds; as always, confirm at irs.gov since Congress can change them (Internal Revenue Service, n.d.-p).

**If you don't have to file a U.S. tax return for the year, you don't have to file Form 8938 either**, no matter how large your foreign assets are, the obligation attaches to the return (Internal Revenue Service, n.d.-p).

**The FBAR and Form 8938 are not either/or: many people owe both, for the same accounts, in the same year**, because they measure different things (accounts vs. a broader asset category) and go to different places (FinCEN vs. the IRS with your return). Filing one does not satisfy the other (Internal Revenue Service, n.d.-o, n.d.-r).

:::reveal If you already filed an FBAR for your foreign bank accounts this year, does that satisfy Form 8938 too? ||| No. They're separate requirements with different thresholds and different filing destinations (FBAR to FinCEN, Form 8938 with your IRS return), many people who cross both thresholds must file both.

## Sources
- Internal Revenue Service. (n.d.-o). *Summary of FATCA reporting for U.S. taxpayers*. https://www.irs.gov/businesses/corporations/summary-of-fatca-reporting-for-us-taxpayers
- Internal Revenue Service. (n.d.-p). *Do I need to file Form 8938, Statement of Specified Foreign Financial Assets?* https://www.irs.gov/businesses/corporations/do-i-need-to-file-form-8938-statement-of-specified-foreign-financial-assets
- Internal Revenue Service. (n.d.-r). *FATCA information for individuals*. https://www.irs.gov/businesses/corporations/fatca-information-for-individuals`,
      recallContent: [
        {
          prompt: "Where do you file the FBAR, with your IRS Form 1040, or somewhere else?",
          answer:
            "Somewhere else. The FBAR (FinCEN Form 114) is filed electronically with FinCEN, a Treasury bureau, not with your IRS tax return.",
        },
        {
          prompt: "Is the FBAR's $10,000 threshold measured per foreign account, or across all your foreign accounts combined?",
          answer:
            "Combined (aggregate), the $10,000 threshold is the total value across all your foreign financial accounts at any time during the year, not a per-account limit.",
        },
      ],
    },
    {
      slug: "extensions-for-filers-abroad",
      title: "8 · The automatic 2-month extension, and further extensions",
      body: `Quick refresher: Lesson 7 covered Form 8938, a FATCA filing attached to your tax return, separate from the FBAR, with its own higher thresholds for people living abroad (Internal Revenue Service, n.d.-p).

**Living abroad comes with one automatic scheduling break.** If you're a U.S. citizen or resident alien whose home and main place of business (or military post) is outside the U.S. and Puerto Rico on the regular due date, you get an **automatic 2-month extension** to file your return and pay, no form required to get it (Internal Revenue Service, n.d.-s). For a calendar-year filer, that moves the deadline from April 15 to **June 15** (Internal Revenue Service, n.d.-s).

**Two important catches:**

1. **You must attach a statement to your return** explaining which qualifying situation applied to you (living abroad, or military duty abroad), there's no separate form to file in advance, but the explanation has to be there when you do file (Internal Revenue Service, n.d.-s).
2. **The extension is for filing, not for payment relief from interest.** Any tax you owe is still technically due by the regular April 15 date, and **interest accrues on unpaid tax from April 15**, even though you're not penalized for filing late within the 2-month window (Internal Revenue Service, n.d.-s).

**Need more time beyond June 15?** You can request an additional extension, generally to October 15, using **Form 4868**, the same form domestic filers use, filed by the (extended) June 15 deadline (Internal Revenue Service, n.d.-s, n.d.-t). In some circumstances a further discretionary extension beyond that is available by writing to the IRS, but it isn't automatic (Internal Revenue Service, n.d.-u).

**How this interacts with the FBAR:** remember from Lesson 6 that the FBAR has its **own** deadline (April 15, with an automatic extension to October 15) that runs on FinCEN's timeline, separate from whatever extension you arrange for your income tax return, don't assume one extension covers both filings (Internal Revenue Service, n.d.-m, n.d.-s).

:::reveal You live abroad and haven't filed any extension paperwork. What's your automatic filing deadline, and does it also delay when unpaid tax starts accruing interest? ||| June 15 (2 months after the regular April 15 deadline) automatically, just by living abroad and attaching an explanatory statement when you file, but it does NOT delay interest, which still accrues on any unpaid tax starting April 15.

## Sources
- Internal Revenue Service. (n.d.-s). *U.S. citizens and resident aliens abroad – Automatic 2-month extension of time to file*. https://www.irs.gov/individuals/international-taxpayers/us-citizens-and-resident-aliens-abroad-automatic-2-month-extension-of-time-to-file
- Internal Revenue Service. (n.d.-t). *U.S. citizens and resident aliens abroad – Automatic 6-month extension of time to file*. https://www.irs.gov/individuals/international-taxpayers/us-citizens-and-resident-aliens-abroad-automatic-6-month-extension-of-time-to-file
- Internal Revenue Service. (n.d.-u). *U.S. citizens and resident aliens abroad – Extensions of time to file*. https://www.irs.gov/individuals/international-taxpayers/us-citizens-and-resident-aliens-abroad-extensions-of-time-to-file
- Internal Revenue Service. (n.d.-m). *Report of Foreign Bank and Financial Accounts (FBAR)*. https://www.irs.gov/businesses/small-businesses-self-employed/report-of-foreign-bank-and-financial-accounts-fbar`,
      recallContent: [
        {
          prompt: "If you already filed an FBAR for your foreign bank accounts this year, does that satisfy Form 8938 too?",
          answer:
            "No. They're separate requirements with different thresholds and filing destinations (FBAR to FinCEN, Form 8938 with your IRS return), many people must file both.",
        },
        {
          prompt: "Does Form 8938 use the same $10,000 threshold as the FBAR?",
          answer:
            "No. Form 8938's thresholds are much higher and depend on filing status and whether you live abroad or in the U.S., for example, $200,000/$300,000 for an unmarried filer living abroad, versus the FBAR's flat $10,000 aggregate.",
        },
      ],
    },
    {
      slug: "state-taxes-and-common-pitfalls",
      title: "9 · State taxes abroad, and common pitfalls",
      body: `Quick refresher: Lesson 8 covered the automatic 2-month federal filing extension for people abroad (to June 15), and that it doesn't stop interest from accruing on unpaid tax (Internal Revenue Service, n.d.-s).

**Everything so far has been federal.** States are a separate question, and (unlike the federal rules) there's no single nationwide standard, because state tax residency is defined by each state, not the IRS.

**Moving abroad doesn't automatically end your state tax obligation.** Most states tax based on **domicile**, your true, fixed, permanent home, the place you intend to return to, and several states are notoriously reluctant to let a former resident go, sometimes nicknamed "sticky states" (California, New Mexico, New York, South Carolina, and Virginia are commonly named in this category). California's own tax authority, for example, states that an individual domiciled in California remains a California resident even while physically outside the state for a temporary or transitory purpose, and that California presumes a taxpayer's domicile hasn't changed until they affirmatively prove otherwise, evaluated through a broad, multi-factor "totality of contacts" test (California Franchise Tax Board, n.d.). Concretely, cutting ties usually means establishing a new domicile elsewhere and taking active steps, changing your driver's license and voter registration, moving bank and investment accounts, and no longer maintaining a home in the old state, not simply booking a one-way flight. **Because every state's rule is different, and this course can't cover 50 of them, treat this as a flag to check your specific state's tax agency (or a professional) before assuming you're free of state tax just because you moved abroad.**

**Common pitfalls, gathered from the lessons above:**

1. **Assuming "I pay tax where I live, so I don't need to file in the U.S."** Lesson 2 covered this directly, the filing requirement is separate from what you might owe, and skipping the filing forfeits the FEIE and FTC relief designed to prevent double taxation (Internal Revenue Service, n.d.-c).
2. **Assuming the FEIE covers everything.** It only excludes foreign *earned* income, and it does **not** reduce self-employment tax, a self-employed person abroad can owe U.S. self-employment tax on their full net profit even after excluding the income tax on it, unless a **totalization agreement** between the U.S. and their country of residence provides relief (Internal Revenue Service, n.d.-v, n.d.-w).
3. **Confusing the FBAR and Form 8938, or assuming one filing covers both.** Lessons 6-7 covered why they're separate, with different thresholds and destinations (Internal Revenue Service, n.d.-m, n.d.-o).
4. **Owning foreign mutual funds, ETFs, or similar pooled investments without realizing they may be a "PFIC" (Passive Foreign Investment Company).** PFICs carry their own punitive tax treatment and a reporting requirement (**Form 8621**) that catches many Americans abroad by surprise, often simply from opening a routine local investment or retirement account in their country of residence. This is a genuinely technical area where professional guidance is worth the cost before you invest, not after (Internal Revenue Service, n.d.-y).
5. **Treating last year's numbers, exclusion caps, filing thresholds, FBAR/FATCA penalty ceilings, as permanent.** Nearly every dollar figure in this course is adjusted periodically. Re-check the current figures at irs.gov (or fincen.gov for the FBAR) each filing season (Internal Revenue Service, n.d.-e).

**One closing reminder, since it bears repeating: none of this is tax or legal advice.** It's a map of the terrain, the forms, the tests, the deadlines, so that when you sit down with a qualified cross-border tax professional (or irs.gov directly), you already understand the vocabulary and know which questions to ask.

:::reveal Name two of the common pitfalls this lesson covers. ||| Any two of: assuming filing isn't needed because tax is already paid abroad, assuming the FEIE covers self-employment tax or all income types, confusing the FBAR with Form 8938, holding foreign mutual funds without realizing PFIC rules apply, or treating a prior year's dollar thresholds as permanent.

## Sources
- California Franchise Tax Board. (n.d.). *Residents*. https://www.ftb.ca.gov/file/personal/residency-status/index.html
- Internal Revenue Service. (n.d.-c). *U.S. citizens and residents abroad filing requirements*. https://www.irs.gov/individuals/international-taxpayers/us-citizens-and-residents-abroad-filing-requirements
- Internal Revenue Service. (n.d.-e). *Foreign earned income exclusion*. https://www.irs.gov/individuals/international-taxpayers/foreign-earned-income-exclusion
- Internal Revenue Service. (n.d.-m). *Report of Foreign Bank and Financial Accounts (FBAR)*. https://www.irs.gov/businesses/small-businesses-self-employed/report-of-foreign-bank-and-financial-accounts-fbar
- Internal Revenue Service. (n.d.-o). *Summary of FATCA reporting for U.S. taxpayers*. https://www.irs.gov/businesses/corporations/summary-of-fatca-reporting-for-us-taxpayers
- Internal Revenue Service. (n.d.-v). *Self-employment tax for businesses abroad*. https://www.irs.gov/individuals/international-taxpayers/self-employment-tax-for-businesses-abroad
- Internal Revenue Service. (n.d.-w). *Totalization agreements*. https://www.irs.gov/individuals/international-taxpayers/totalization-agreements
- Internal Revenue Service. (n.d.-y). *About Form 8621, Information Return by a Shareholder of a Passive Foreign Investment Company or Qualified Electing Fund*. https://www.irs.gov/forms-pubs/about-form-8621`,
      recallContent: [
        {
          prompt: "You live abroad and haven't filed any extension paperwork. What's your automatic filing deadline, and does it also delay when unpaid tax starts accruing interest?",
          answer:
            "June 15 (2 months after the regular April 15 deadline) automatically, but it does NOT delay interest, which still accrues on any unpaid tax starting April 15.",
        },
        {
          prompt: "Name one reason a U.S. state might keep taxing someone who has moved abroad.",
          answer:
            "The person hasn't broken domicile with that state, many states (especially 'sticky states' like California) presume you're still a resident until you affirmatively establish a new domicile elsewhere and sever meaningful ties.",
        },
      ],
    },
    {
      slug: "taxes-abroad-quiz",
      title: "10 · Check your understanding",
      quiz: {
        passingScore: 70,
        // Options shuffle per attempt so a fixed answer position cannot be gamed;
        // scoring is by identity, so no answer changes (src/lib/quiz.ts).
        shuffleOptions: true,
        questions: [
          {
            prompt: "How does the U.S. decide whether to tax a citizen's or green card holder's income, even if they've lived abroad for years?",
            options: [
              "Based on where the income was earned only",
              "Based on citizenship/resident-alien status, worldwide income is taxed regardless of where they live",
              "Only income physically transferred into a U.S. bank account is taxed",
              "Only if they visit the U.S. at least once during the year",
            ],
            correctIndex: 1,
            explanation:
              "The U.S. uses citizenship-based taxation: citizens and resident aliens (mainly green card holders) are taxed on worldwide income no matter where they live or where the income was earned.",
            sourceLessonSlug: "worldwide-income-the-core-rule",
          },
          {
            prompt: "You live abroad and expect the Foreign Earned Income Exclusion to bring your U.S. tax owed to zero. Do you still need to file a return?",
            options: [
              "No, if you owe nothing, filing isn't required",
              "Yes, the exclusion and Foreign Tax Credit are claimed on a filed return, so filing is what unlocks the relief",
              "Only if you earned more than $1 million",
              "Only if you're claiming a refund",
            ],
            correctIndex: 1,
            explanation:
              "The FEIE and Foreign Tax Credit aren't automatic, they're calculated and elected on a filed return (Form 2555 / Form 1116). Skipping the filing forfeits the relief.",
            sourceLessonSlug: "who-must-file",
          },
          {
            prompt: "Which of these income types can the Foreign Earned Income Exclusion apply to?",
            options: [
              "Rental income from a foreign property",
              "A foreign pension",
              "Wages for work you performed while living abroad",
              "Dividends from a foreign brokerage account",
            ],
            correctIndex: 2,
            explanation:
              "The FEIE only applies to foreign earned income, wages and self-employment income for services performed abroad. Passive income like rent, pensions, and dividends isn't eligible.",
            sourceLessonSlug: "feie-overview-form-2555",
          },
          {
            prompt: "What does the physical presence test require to qualify for the FEIE?",
            options: [
              "A full calendar tax year of intent to live abroad permanently",
              "At least 330 full days physically present in a foreign country or countries during a 12-month period",
              "Owning property in a foreign country",
              "Renouncing U.S. citizenship",
            ],
            correctIndex: 1,
            explanation:
              "The physical presence test is a pure day count: 330 full days abroad during any 12-month period that includes part of the tax year, intent and visa type don't matter for this test.",
            sourceLessonSlug: "feie-qualifying-tests",
          },
          {
            prompt: "How does the Foreign Tax Credit (Form 1116) reduce U.S. tax, compared to the FEIE?",
            options: [
              "It excludes foreign earned income from tax entirely, just like the FEIE",
              "It gives a dollar-for-dollar credit for foreign income tax already paid on the same income, and can apply to passive income",
              "It only applies to self-employment tax",
              "It eliminates the need to file a U.S. return",
            ],
            correctIndex: 1,
            explanation:
              "The FTC is a credit, not an exclusion, it credits U.S. tax dollar-for-dollar for foreign income tax already paid, and unlike the FEIE it can reach passive income like dividends and rental income.",
            sourceLessonSlug: "foreign-tax-credit-form-1116",
          },
          {
            prompt: "Where do you file the FBAR (FinCEN Form 114)?",
            options: [
              "Attached to your IRS Form 1040",
              "Electronically with FinCEN, a Treasury bureau, separate from your tax return",
              "By mail to your nearest U.S. embassy",
              "You don't need to file it separately if you filed Form 8938",
            ],
            correctIndex: 1,
            explanation:
              "The FBAR is filed electronically with FinCEN through its BSA E-Filing System, not with your IRS tax return, a completely separate filing, once combined foreign accounts exceed $10,000 at any point in the year.",
            sourceLessonSlug: "fbar-fincen-form-114",
          },
          {
            prompt: "True or false: filing an FBAR automatically satisfies the Form 8938 (FATCA) requirement too.",
            options: [
              "True, they're the same filing under two names",
              "False, they're separate requirements with different thresholds, and Form 8938 is filed with your tax return while the FBAR goes to FinCEN",
              "True, but only for married filers",
              "False, because Form 8938 replaced the FBAR",
            ],
            correctIndex: 1,
            explanation:
              "The FBAR and Form 8938 are separate requirements with different thresholds and destinations. Many people who cross both thresholds must file both.",
            sourceLessonSlug: "fatca-form-8938",
          },
          {
            prompt: "You live abroad and file no extension paperwork. What happens to your filing deadline, and does it stop interest from accruing on unpaid tax?",
            options: [
              "Deadline moves to June 15 automatically, and interest is also delayed to June 15",
              "Deadline moves to June 15 automatically, but interest still accrues on unpaid tax from April 15",
              "There is no automatic extension for people living abroad",
              "The deadline moves to October 15 automatically",
            ],
            correctIndex: 1,
            explanation:
              "Living abroad grants an automatic 2-month extension (to June 15 for calendar-year filers) with no form required beyond an explanatory statement, but interest still accrues on any unpaid tax starting from the regular April 15 due date.",
            sourceLessonSlug: "extensions-for-filers-abroad",
          },
          {
            prompt: "Why might someone who moved abroad still owe state income tax to their old U.S. state?",
            options: [
              "States automatically stop taxing anyone who leaves the country",
              "They haven't broken domicile with that state, some states (like 'sticky states') presume continued residency until you prove you've established a new domicile elsewhere",
              "Federal law requires all states to tax worldwide income the same way the IRS does",
              "State tax only applies to people who still hold a U.S. passport",
            ],
            correctIndex: 1,
            explanation:
              "State tax residency is defined by domicile, not simply by moving abroad. States like California presume your domicile hasn't changed until you affirmatively prove you've established a new one and severed meaningful ties.",
            sourceLessonSlug: "state-taxes-and-common-pitfalls",
          },
        ],
      },
    },
  ],
};
