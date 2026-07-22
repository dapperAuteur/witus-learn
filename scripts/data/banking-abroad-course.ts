// Authored "Banking & Money When You Live Abroad" — a Learn.WitUS course in the "Travel &
// Living Abroad" category. Companion to Taxes for Americans Abroad and the pointer to it from
// Moving Abroad 101 (Lesson 7 there names this course by title). High-stakes financial content:
// deliberately conservative, repeatedly framed as EDUCATIONAL ONLY (not financial, tax, or legal
// advice), and cited to the IRS, FinCEN, and Treasury (FATCA/FBAR/OFAC) and the CFPB (consumer
// banking, international money transfers, exchange-rate disclosure, and scams).
//
// SCOPE NOTE (load-bearing): FBAR and FATCA Form 8938 are covered only as a short pointer here
// (Lesson 4) — full depth (thresholds, deadlines, penalties, Form 1116/2555 interaction) lives in
// the "Taxes for Americans Abroad" course, which this course cites and repeatedly redirects to,
// per the "don't duplicate depth" instruction. This course's own focus is the banking-access
// problem (why some foreign banks decline Americans), keeping/using U.S. bank and brokerage
// accounts from abroad, moving money internationally, currency risk, scams, and compliance.
//
// AUTHORITATIVE-VALUES RULE (load-bearing here): FBAR/FATCA dollar thresholds, transfer-provider
// fee schedules, and exchange rates all change over time or vary by provider. This course never
// asserts a fixed dollar figure as permanent fact — it teaches the pattern and repeatedly points
// the learner to irs.gov, fincen.gov, and each institution's own current disclosures.
//
// Every fact is cited to a verified source: IRS.gov (FATCA overview, FATCA for individuals, the
// FBAR page, the Form 8938 page, foreign currency/exchange-rate page), FinCEN.gov (the FBAR
// filing destination, and FinCEN's own warning about scammers impersonating the agency), the
// U.S. Department of the Treasury's Office of Foreign Assets Control (OFAC sanctions screening),
// and the Consumer Financial Protection Bureau (checking-account denial/closure, moving a
// checking account, prepaid/debit foreign-transaction fees, the remittance transfer rule and its
// disclosure/cancellation/error-resolution rights, and classic fraud/scam warning signs).
//
// Ends with a quiz whose every question links back to the lesson that teaches the answer
// (the quiz standard).

import type { AuthoredCourse } from "./authored-course";

export const BANKING_ABROAD_COURSE: AuthoredCourse = {
  title: "Banking & Money When You Live Abroad",
  description:
    "A practical, plain-language guide for U.S. citizens living abroad: why FATCA makes some foreign banks reluctant to open accounts for Americans, keeping and using your existing U.S. bank and brokerage accounts from abroad, a short pointer to the FBAR/FATCA foreign-account reporting covered in depth in the Taxes for Americans Abroad course, how to move money internationally (wires, transfer services, fees, and the exchange rate), currency risk, avoiding scams that specifically target people sending money across borders, and staying compliant (sanctions screening and using regulated providers). This course is educational only, not financial, tax, or legal advice, confirm current rules, forms, fees, and dollar thresholds with your bank, a qualified cross-border financial or tax professional, and at irs.gov, fincen.gov, and consumerfinance.gov. Cited throughout to the IRS, FinCEN, the U.S. Department of the Treasury, and the Consumer Financial Protection Bureau.",
  lessons: [
    {
      slug: "why-banking-gets-complicated-abroad",
      title: "1 · Why banking gets complicated when you live abroad",
      body: `**This course is educational only, it is not financial, tax, or legal advice.** Banking rules for Americans abroad sit at the intersection of federal reporting law, foreign banking regulation, and each institution's own risk policies. This course maps that terrain so you know what questions to ask; it can't replace a conversation with your bank, a cross-border financial planner, or (for tax questions) a qualified tax professional and irs.gov directly.

Two things make banking different for a U.S. citizen living abroad, compared with almost anyone else in the world.

First, the United States taxes and reports on its citizens' finances based on **citizenship**, not residence, a rule this platform's *Taxes for Americans Abroad* course covers in full. One consequence of that rule reaches directly into banking: the **Foreign Account Tax Compliance Act (FATCA)**, a 2010 law that requires foreign financial institutions to identify and report the accounts they hold for U.S. taxpayers to the IRS, or face a steep withholding tax on certain U.S.-source payments they receive (Internal Revenue Service, n.d.-a). That single requirement is a big part of why some foreign banks won't open accounts for Americans at all, Lesson 2 covers it in depth.

Second, once you do have money in accounts outside the U.S., or move money across a border, you run into a separate layer: **consumer-protection rules that apply specifically to international transfers**, enforced by the Consumer Financial Protection Bureau, and **federal reporting obligations** that exist purely because the accounts are foreign, enforced by the IRS and FinCEN (a bureau of the U.S. Treasury). None of this means banking abroad is impossible, millions of Americans manage it every day, but it does mean the easy assumptions that work for domestic banking often don't transfer.

**This course's roadmap:** why some foreign banks are reluctant to serve Americans (Lesson 2), keeping and using U.S. bank and brokerage accounts while abroad (Lesson 3), a short pointer to the foreign-account reporting rules covered in depth elsewhere on this platform (Lesson 4), moving money across borders and what it costs (Lessons 5-6), avoiding scams that specifically target people sending money internationally (Lesson 7), staying compliant (Lesson 8), and a closing checklist (Lesson 9).

:::reveal What federal law is the main reason some foreign banks are reluctant to open accounts for U.S. citizens, and what does it require of those banks? ||| FATCA (the Foreign Account Tax Compliance Act). It requires foreign financial institutions to identify and report accounts held by U.S. taxpayers to the IRS, or face a 30% withholding tax on certain U.S.-source payments, a compliance burden some banks decide isn't worth taking on American customers for.

## Sources
- Internal Revenue Service. (n.d.-a). *Foreign Account Tax Compliance Act (FATCA)*. https://www.irs.gov/businesses/corporations/foreign-account-tax-compliance-act-fatca`,
    },
    {
      slug: "fatca-and-foreign-banks",
      title: "2 · FATCA, and why some foreign banks say no to Americans",
      body: `Quick refresher: Lesson 1 introduced FATCA as a main reason some foreign banks won't serve U.S. citizens, a reporting law that reaches foreign banks because the IRS taxes citizens on worldwide income no matter where they live (Internal Revenue Service, n.d.-a).

**What FATCA actually requires.** Enacted in 2010, FATCA requires foreign financial institutions, banks, but also brokers, investment funds, and some insurers, to identify which of their account holders are U.S. taxpayers and report those accounts' identity and financial details to the IRS (Internal Revenue Service, n.d.-a, n.d.-b). Institutions that don't register with the IRS and agree to report face a 30% withholding tax on certain payments they receive from U.S. sources (Internal Revenue Service, n.d.-a).

**Why some banks decline American customers rather than comply.** For a large multinational bank, building FATCA compliance systems is a one-time cost spread across a huge customer base. For a smaller foreign bank, or one with few American clients, the ongoing cost of identifying, monitoring, and reporting on U.S. accountholders can outweigh the revenue from serving them, so some simply decline to open new accounts for U.S. citizens, or close existing ones, rather than build the compliance infrastructure. This is a business decision each institution makes on its own; no single U.S. rule bans foreign banks from serving Americans, and practices vary widely by country and by bank.

**What this means for you practically.** If you're opening (or trying to keep) a foreign account, expect more paperwork than a local customer would face, often a U.S. tax identification number and a signed FATCA self-certification form (Internal Revenue Service, n.d.-b), expect some institutions to decline outright, and expect this to vary a great deal by country and by bank size; a large international bank in a major city often has more experience serving Americans than a small regional one. None of this is a reason to misstate your U.S. tax status on a self-certification, that creates its own separate problem.

**On the reporting side you'll do yourself:** succeeding in opening (or keeping) a foreign account is exactly what can start your own FBAR and FATCA Form 8938 reporting obligations, Lesson 4 is a short pointer to where this platform covers that in full.

:::reveal Why might a small foreign bank decline to open an account for a U.S. citizen, even though no U.S. law directly bans them from doing so? ||| Because FATCA requires ongoing identification, monitoring, and reporting of U.S. accountholders (or a 30% withholding tax if they don't comply), for a bank with few American customers, that compliance cost can outweigh the revenue, so some simply decline American customers as a business decision, not a legal requirement.

## Sources
- Internal Revenue Service. (n.d.-a). *Foreign Account Tax Compliance Act (FATCA)*. https://www.irs.gov/businesses/corporations/foreign-account-tax-compliance-act-fatca
- Internal Revenue Service. (n.d.-b). *FATCA information for individuals*. https://www.irs.gov/businesses/corporations/fatca-information-for-individuals`,
      recallContent: [
        {
          prompt:
            "What federal law is the main reason some foreign banks are reluctant to open accounts for U.S. citizens, and what does it require of those banks?",
          answer:
            "FATCA (the Foreign Account Tax Compliance Act). It requires foreign financial institutions to identify and report accounts held by U.S. taxpayers to the IRS, or face a 30% withholding tax on certain U.S.-source payments.",
        },
        {
          prompt:
            "Besides U.S. tax rules reaching worldwide income, what's the second layer this course says makes banking different for Americans abroad?",
          answer:
            "Consumer-protection rules specific to international transfers (enforced by the CFPB) and federal reporting obligations for foreign accounts (enforced by the IRS and FinCEN), an extra layer beyond ordinary domestic banking rules.",
        },
      ],
    },
    {
      slug: "keeping-us-bank-brokerage-accounts-abroad",
      title: "3 · Keeping and using your U.S. bank and brokerage accounts from abroad",
      body: `Quick refresher: Lesson 2 covered why some foreign banks decline American customers, FATCA's compliance and withholding-tax burden makes some institutions decide it isn't worth serving U.S. citizens (Internal Revenue Service, n.d.-a).

Given that friction, many Americans abroad choose a simpler path for at least part of their money: **keep the U.S. bank and brokerage accounts they already have**, rather than (or in addition to) opening new foreign ones.

**Keeping a U.S. checking account works, but tell your bank you're moving.** An unannounced address change, foreign logins, and card use in a new country are exactly the kind of activity that can trigger a fraud hold, or an account closure. A bank or credit union can close your account without your permission and, in general, without advance notice (Consumer Financial Protection Bureau, n.d.-a). Proactively updating your address and travel plans with your bank reduces that risk. If an account does get closed and you need to move your banking relationship, the CFPB publishes a checklist for moving a checking account cleanly, redirecting direct deposits and automatic payments before you close anything, which applies whether you're moving across town or across an ocean (Consumer Financial Protection Bureau, n.d.-b).

**If a U.S. bank denies you an account or closes one, ask why.** Most banks use a checking-account reporting company, the CFPB names Chex Systems and Early Warning Services as the major ones, similar to a credit bureau; you're entitled to request your report, and to dispute anything on it that's inaccurate (Consumer Financial Protection Bureau, n.d.-a).

**Brokerage accounts are a separate, and often stricter, story.** Brokerages set their own policies about which addresses they'll service, and it's common for a U.S. brokerage to restrict, or ask you to close, an account once your address of record becomes a foreign one, independent of anything FATCA itself requires. Policies differ firm to firm and change over time, so if you're moving abroad and want to keep an existing brokerage account, **contact that specific firm before you move** and ask directly what its policy is for accountholders living at a foreign address; don't assume either that you're fine or that you'll be forced out.

**Using cards from abroad costs more than you'd expect if you're not paying attention.** Many prepaid and debit cards charge a **foreign transaction fee**, usually a percentage of the purchase, withdrawal, or other transaction, when you use the card in a foreign country or in a foreign currency, and not every card even works internationally, so check your specific cardholder agreement before you rely on a card abroad (Consumer Financial Protection Bureau, n.d.-c, n.d.-d). If you travel or live abroad often, comparing your options for this fee is worth the few minutes it takes.

:::reveal If your U.S. bank account gets closed while you're living abroad, what should you check first, according to the CFPB? ||| Your checking-account report from a reporting company like Chex Systems or Early Warning Services, you're entitled to request it and dispute anything inaccurate, and that's usually the first step to understanding (and fixing) why an account was denied or closed.

## Sources
- Internal Revenue Service. (n.d.-a). *Foreign Account Tax Compliance Act (FATCA)*. https://www.irs.gov/businesses/corporations/foreign-account-tax-compliance-act-fatca
- Consumer Financial Protection Bureau. (n.d.-a). *Why was I denied a checking account?* https://www.consumerfinance.gov/ask-cfpb/why-was-i-denied-a-checking-account-en-1113/
- Consumer Financial Protection Bureau. (n.d.-b). *Moving your checking account*. https://www.consumerfinance.gov/consumer-tools/bank-accounts/moving-your-checking-account/
- Consumer Financial Protection Bureau. (n.d.-c). *What types of fees do prepaid cards typically charge?* https://www.consumerfinance.gov/ask-cfpb/what-types-of-fees-do-prepaid-cards-typically-charge-en-2053/
- Consumer Financial Protection Bureau. (n.d.-d). *Can I use my prepaid card outside of the U.S.?* https://www.consumerfinance.gov/ask-cfpb/can-i-use-my-prepaid-card-outside-of-the-us-en-501/`,
      recallContent: [
        {
          prompt:
            "Why might a small foreign bank decline to open an account for a U.S. citizen, even though no U.S. law directly bans them from doing so?",
          answer:
            "Because FATCA requires ongoing identification, monitoring, and reporting of U.S. accountholders (or a 30% withholding tax if they don't comply), for a bank with few American customers, that compliance cost can outweigh the revenue, so some decline American customers as a business decision.",
        },
        {
          prompt:
            "What does a foreign bank risk if it takes on U.S. accountholders but doesn't register and report under FATCA?",
          answer: "A 30% withholding tax on certain U.S.-source payments it receives.",
        },
      ],
    },
    {
      slug: "fbar-fatca-reporting-pointer",
      title: "4 · Foreign-account reporting: the short version (see the Taxes course for depth)",
      body: `Quick refresher: Lesson 3 covered keeping and using U.S. bank and brokerage accounts from abroad, proactively telling your bank about a move, and checking your specific brokerage's policy on foreign addresses before you go.

**This lesson is intentionally short.** Once you hold, or have signature authority over, a foreign financial account, you may pick up two separate U.S. reporting obligations that this platform's *Taxes for Americans Abroad* course covers in full depth. This lesson exists only to flag that they exist and point you there, not to re-teach them.

**The FBAR (FinCEN Form 114).** If the combined value of your foreign financial accounts exceeded $10,000 at any point during the year, you generally must file a Report of Foreign Bank and Financial Accounts, filed electronically with FinCEN (a bureau of the U.S. Treasury), separately from your IRS tax return (Internal Revenue Service, n.d.-c; Financial Crimes Enforcement Network, n.d.-a). This is about *reporting the account's existence*, not about owing extra tax, you can owe nothing and still have an FBAR obligation.

**FATCA's Form 8938.** A related but separate requirement, filed *with* your IRS return, covers a broader category of "specified foreign financial assets" once their total value crosses thresholds that are higher than the FBAR's and depend on your filing status and whether you live in the U.S. or abroad (Internal Revenue Service, n.d.-e). The FBAR and Form 8938 are not either/or many people who cross both thresholds must file both, to two different destinations.

**Why this matters for a banking-focused course:** the moment you succeed in opening (or keeping) a foreign account, the very thing Lessons 2-3 were about, you may have started a reporting clock. Don't let the account-opening win distract from the reporting follow-through. If any of this sounds like it applies to you, the *Taxes for Americans Abroad* course (Lessons 6-7) walks through both filings, their exact thresholds, deadlines, and penalties in detail, and, as always, confirm current thresholds and forms at irs.gov or fincen.gov, since dollar figures in this area are periodically adjusted.

:::reveal Which reporting obligation reports "did your foreign accounts exist and how much were they worth," and which is filed with your regular IRS return instead of separately with FinCEN? ||| The FBAR (FinCEN Form 114) reports the existence and combined value of foreign accounts, filed separately with FinCEN once the combined value exceeds $10,000 at any point in the year. Form 8938 (FATCA) is the one filed with your IRS tax return, covering a broader "specified foreign financial assets" category at higher, residency-dependent thresholds.

## Sources
- Internal Revenue Service. (n.d.-c). *Report of Foreign Bank and Financial Accounts (FBAR)*. https://www.irs.gov/businesses/small-businesses-self-employed/report-of-foreign-bank-and-financial-accounts-fbar
- Internal Revenue Service. (n.d.-e). *Do I need to file Form 8938, Statement of Specified Foreign Financial Assets?* https://www.irs.gov/businesses/corporations/do-i-need-to-file-form-8938-statement-of-specified-foreign-financial-assets
- Financial Crimes Enforcement Network. (n.d.-a). *Report Foreign Bank and Financial Accounts*. https://www.fincen.gov/report-foreign-bank-and-financial-accounts`,
      recallContent: [
        {
          prompt:
            "If your U.S. bank account gets closed while you're living abroad, what should you check first, according to the CFPB?",
          answer:
            "Your checking-account report from a reporting company like Chex Systems or Early Warning Services, you're entitled to request it and dispute anything inaccurate.",
        },
        {
          prompt:
            "Why might a U.S. brokerage restrict or close your account once you move to a foreign address, even though FATCA doesn't force it to?",
          answer:
            "Brokerages set their own policies about which addresses they'll service, independent of what FATCA itself requires, many simply choose not to service foreign addresses, so you should ask your specific firm before moving.",
        },
      ],
    },
    {
      slug: "moving-money-internationally",
      title: "5 · Moving money internationally: wires, transfer services, and what they cost",
      body: `Quick refresher: Lesson 4 pointed out that once you hold a foreign account, you may pick up separate FBAR and FATCA Form 8938 reporting obligations, both covered in depth in the *Taxes for Americans Abroad* course (Internal Revenue Service, n.d.-c, n.d.-e).

This lesson turns to a more everyday question: how do you actually **move money across a border**, rent, a mortgage back home, a pension arriving, or ordinary support to family, and what should you expect it to cost?

**The main ways to send money internationally** are a **bank wire transfer**, a **dedicated international money-transfer service**, or transfers built into a multi-currency account. A wire transfer is simply an electronic transfer of money from one bank account to another, domestic or international (Consumer Financial Protection Bureau, n.d.-f). When a U.S. consumer sends more than $15 to a person or company in another country through a company that regularly provides this service, federal law specifically defines it as a **remittance transfer**, and it comes with its own consumer protections layered on top of ordinary wire-transfer rules (Consumer Financial Protection Bureau, n.d.-e).

**Those protections matter, and they're the reason to read the disclosure before you send.** A remittance transfer provider must give you, before you pay, a written disclosure covering the exact exchange rate that will apply, any fees (including certain fees charged by intermediary or receiving institutions), and the amount the recipient is expected to actually receive (Consumer Financial Protection Bureau, n.d.-e). After you pay, you generally have **up to 30 minutes to cancel the transfer for a full refund**, as long as the money hasn't already been picked up or deposited (Consumer Financial Protection Bureau, n.d.-e). If something goes wrong, the wrong amount arrives, or it doesn't arrive at all, you have **180 days** from the provider's disclosed delivery date to report the error, and the provider must investigate (Consumer Financial Protection Bureau, n.d.-e, n.d.-g).

**These protections generally do not extend to a plain domestic-style wire between two of your own U.S. bank accounts**, or to transfers under the $15 threshold, or to certain very small providers, so know which kind of transfer you're making. And they protect the *sending consumer*; verifying that the *company* you're using is a real, regulated money-transfer business, not an unregistered stranger promising to move money for you, is a separate and important check, covered in Lesson 8.

**Practical habit:** before you commit to any international transfer, compare the total disclosed cost, fees plus the exchange-rate, across at least two providers, including your own bank, since the cheapest-looking option on fees alone isn't always the cheapest once the exchange rate is factored in. Lesson 6 covers exactly how that exchange-rate cost hides itself.

:::reveal If a U.S. consumer sends more than $15 to someone in another country through a company that regularly offers this service, what is that transfer called under federal law, and what must the provider disclose beforehand? ||| It's called a remittance transfer. The provider must disclose the exact exchange rate, any fees, and the amount the recipient is expected to receive, before the consumer pays.

## Sources
- Internal Revenue Service. (n.d.-c). *Report of Foreign Bank and Financial Accounts (FBAR)*. https://www.irs.gov/businesses/small-businesses-self-employed/report-of-foreign-bank-and-financial-accounts-fbar
- Internal Revenue Service. (n.d.-e). *Do I need to file Form 8938, Statement of Specified Foreign Financial Assets?* https://www.irs.gov/businesses/corporations/do-i-need-to-file-form-8938-statement-of-specified-foreign-financial-assets
- Consumer Financial Protection Bureau. (n.d.-e). *What is a remittance transfer and what are my rights?* https://www.consumerfinance.gov/ask-cfpb/what-is-a-remittance-transfer-and-what-are-my-rights-en-1161/
- Consumer Financial Protection Bureau. (n.d.-f). *What is a wire transfer?* https://www.consumerfinance.gov/ask-cfpb/what-is-a-wire-transfer-en-1163/
- Consumer Financial Protection Bureau. (n.d.-g). *Money transfers*. https://www.consumerfinance.gov/consumer-tools/money-transfers/`,
      recallContent: [
        {
          prompt:
            "Which reporting obligation reports \"did your foreign accounts exist and how much were they worth,\" and which is filed with your regular IRS return instead of separately with FinCEN?",
          answer:
            "The FBAR reports foreign accounts' existence and combined value, filed separately with FinCEN. Form 8938 (FATCA) is filed with your IRS return, at higher, residency-dependent thresholds.",
        },
        {
          prompt: "Does filing an FBAR mean you don't also need to consider Form 8938?",
          answer:
            "No, they're separate requirements with different thresholds and different filing destinations; many people who cross both thresholds must file both.",
        },
      ],
    },
    {
      slug: "currency-risk-and-exchange-rates",
      title: "6 · Currency risk: what exchange rates actually cost you",
      body: `Quick refresher: Lesson 5 covered remittance transfers, the federal category for sending more than $15 abroad through a regular transfer provider, and the disclosures (exchange rate, fees, amount received) providers must give you before you pay (Consumer Financial Protection Bureau, n.d.-e).

**Currency risk is simply this: the value of your money, measured in a currency you don't hold, moves without your permission.** If you earn in one currency and spend, save, or owe debt in another, the position many Americans abroad are in, a shift in the exchange rate can quietly change how much your income is really worth, or how much a transfer actually costs you, even though nothing about your own finances changed.

**Two different things get bundled into "the exchange rate," and it's worth telling them apart.** First, there's the underlying market rate between two currencies, which moves constantly and isn't something any individual bank or transfer provider controls. Second, there's the rate your bank or transfer provider actually gives *you*, which is typically a **markup** on that underlying market rate, the spread is effectively how many transfer providers make money, separate from (or instead of) a flat fee. Federal disclosure rules require remittance transfer providers to tell you the exact exchange rate that will apply to your transfer, and providers must include a statement that they make money from the currency exchange itself (Consumer Financial Protection Bureau, n.d.-e). Reading that disclosed rate against the actual market rate, widely published, easy to check, tells you the real cost of a transfer; a "$0 fee" transfer can still be expensive if the exchange-rate markup is wide.

**On the tax side, currency movement isn't just a cost, it can be a taxable event.** The IRS generally requires income and expenses in a foreign currency to be translated into U.S. dollars using the exchange rate at the time you receive the income or pay the expense, and gains or losses from currency movement on certain foreign-currency transactions can themselves have U.S. tax consequences, a technical area this course only flags; the *Taxes for Americans Abroad* course and a cross-border tax professional are the right places for the specifics (Internal Revenue Service, n.d.-f).

**A practical habit, not a forecast:** this course won't tell you whether a currency will rise or fall, that's speculation, not education. What it will tell you is to (1) compare the *disclosed* rate a provider quotes you against the real market rate before you send money, (2) understand that holding savings in a currency other than the one you'll eventually spend it in carries risk in both directions, and (3) not assume "no fee" means "no cost", the exchange-rate markup is often the larger cost.

:::reveal What are the two different components that can get bundled into "the exchange rate" a transfer provider quotes you, and which one must be disclosed by federal rule? ||| The underlying market rate between two currencies (which no single provider controls), and the markup the provider adds on top of it (how many providers profit from currency exchange). Federal rule requires the provider to disclose the exact rate that will apply to your transfer and a statement that it profits from the exchange.

## Sources
- Consumer Financial Protection Bureau. (n.d.-e). *What is a remittance transfer and what are my rights?* https://www.consumerfinance.gov/ask-cfpb/what-is-a-remittance-transfer-and-what-are-my-rights-en-1161/
- Internal Revenue Service. (n.d.-f). *Foreign currency and currency exchange rates*. https://www.irs.gov/individuals/international-taxpayers/foreign-currency-and-currency-exchange-rates`,
      recallContent: [
        {
          prompt:
            "If a U.S. consumer sends more than $15 to someone in another country through a company that regularly offers this service, what is that transfer called, and what must the provider disclose beforehand?",
          answer:
            "A remittance transfer. The provider must disclose the exact exchange rate, any fees, and the amount the recipient is expected to receive.",
        },
        {
          prompt: "About how long do you generally have to cancel a remittance transfer after paying, and what's the condition?",
          answer:
            "Up to 30 minutes, as long as the money hasn't already been picked up by the recipient or deposited into their account.",
        },
      ],
    },
    {
      slug: "avoiding-scams-sending-money-abroad",
      title: "7 · Avoiding scams when you send money across borders",
      body: `Quick refresher: Lesson 6 covered currency risk and the exchange-rate markup hidden inside many international transfers, and why a "no fee" transfer can still be costly (Consumer Financial Protection Bureau, n.d.-e).

People who regularly send money internationally, exactly the position many Americans abroad are in, are a specific target for scammers, precisely because international wires and transfers are fast, hard to reverse, and unremarkable-looking in that population.

**The classic pattern: someone convinces you to wire or transfer money urgently, then disappears.** The CFPB lists the recurring warning signs across these scams: someone falsely claiming to be a government agency, a bank, a business, or a family member; demands for an upfront fee to release a prize, refund, or loan; requests to pay by wire transfer, cryptocurrency, courier, payment app, or gift card specifically, rather than a reversible, traceable method; high-pressure urgency ("act now"); and, increasingly, AI-generated voice clones or altered images used to fake a familiar voice or face in an emergency (Consumer Financial Protection Bureau, n.d.-i). A so-called "grandparent scam," or a call claiming to be a relative in trouble abroad, follows exactly this pattern, living abroad yourself doesn't make you immune; it can make the story more plausible when a scammer targets *your* family back home, or make you the direct target.

**Government agencies won't ask you to wire money, ever.** This is worth memorizing on its own: FinCEN has specifically warned that scammers impersonate the agency itself, by phone, text, email, mail, or social media, sometimes using real current or former employees' names, to pressure people into moving money or disclosing account information, often citing fake anti-money-laundering violations or debts. FinCEN states plainly that it will not contact you about frozen assets or blocked transfers, and recommends verifying any such contact independently through FinCEN's own site rather than any number or link the message provides (Financial Crimes Enforcement Network, n.d.-b). The same logic applies to any agency, the IRS, the Social Security Administration, and others also don't collect debts or "unlock" money by wire transfer, gift card, or cryptocurrency.

**Before you send money to anyone you haven't independently verified:** hang up and call back using a number you already had (not one given to you in the suspicious message or call), ask a question only the real person would know, resist the artificial urgency, and remember that once a wire or a cash-equivalent transfer (gift cards, cryptocurrency) is sent, it is very hard or impossible to reverse (Consumer Financial Protection Bureau, n.d.-h, n.d.-i).

:::reveal Name two of the classic warning signs of a money-transfer scam that the CFPB lists. ||| Any two of: someone falsely claiming to represent a government agency, bank, business, or family member; demands for an upfront fee; requests to pay by wire, cryptocurrency, courier, payment app, or gift card; high-pressure urgency; or AI-generated voice/image cloning to fake a familiar person.

## Sources
- Consumer Financial Protection Bureau. (n.d.-e). *What is a remittance transfer and what are my rights?* https://www.consumerfinance.gov/ask-cfpb/what-is-a-remittance-transfer-and-what-are-my-rights-en-1161/
- Consumer Financial Protection Bureau. (n.d.-h). *What are some common types of scams?* https://www.consumerfinance.gov/ask-cfpb/what-are-some-common-types-of-scams-en-2092/
- Consumer Financial Protection Bureau. (n.d.-i). *What are some classic warning signs of possible fraud and scams?* https://www.consumerfinance.gov/ask-cfpb/what-are-some-classic-warning-signs-of-possible-fraud-and-scams-en-2094/
- Financial Crimes Enforcement Network. (n.d.-b). *Recognizing imposter scams*. https://www.fincen.gov/resources/scams`,
      recallContent: [
        {
          prompt:
            "What are the two different components that can get bundled into \"the exchange rate\" a transfer provider quotes you, and which one must be disclosed by federal rule?",
          answer:
            "The underlying market rate (which no single provider controls) and the markup the provider adds on top of it. Federal rule requires disclosure of the exact rate that will apply and a statement that the provider profits from the exchange.",
        },
        {
          prompt: "Why can a transfer advertised as having \"no fee\" still be expensive?",
          answer:
            "Because the exchange-rate markup, the spread between the real market rate and the rate the provider quotes you, is often where a provider makes its money, and it can cost more than an outright fee would.",
        },
      ],
    },
    {
      slug: "staying-compliant-sanctions-and-registered-providers",
      title: "8 · Staying compliant: sanctions screening and using regulated providers",
      body: `Quick refresher: Lesson 7 covered the classic warning signs of scams targeting people who send money internationally, and FinCEN's own warning that it will never contact you about frozen assets or blocked transfers (Financial Crimes Enforcement Network, n.d.-b).

Beyond avoiding scams, staying compliant when you bank and move money across borders means two more things worth knowing about, both of which sit above the level of any individual bank or transfer app.

**Sanctions screening (OFAC).** The U.S. Department of the Treasury's **Office of Foreign Assets Control (OFAC)** administers and enforces economic and trade sanctions against specific countries, regimes, individuals, and entities, in support of U.S. foreign policy and national-security goals (U.S. Department of the Treasury, Office of Foreign Assets Control, n.d.). Banks and money-transfer providers are required to screen transactions against OFAC's lists, and if a wire or transfer involves a person or entity subject to sanctions, the institution can be required to **block (freeze) or reject** the transaction, this can happen even to an ordinary personal transfer if a name, bank, or country involved matches a sanctions list, sometimes for reasons that have nothing to do with the sender's own conduct (U.S. Department of the Treasury, Office of Foreign Assets Control, n.d.). If your funds are ever blocked this way, the institution can notify you, and you generally have the right to apply for the funds' release (U.S. Department of the Treasury, Office of Foreign Assets Control, n.d.). This is one more reason large, established banks and transfer providers, with mature sanctions-screening programs, tend to have fewer surprises than an obscure or informal one.

**Use a registered money-transfer business, not an informal one.** Companies that regularly transmit money, including the remittance transfer providers covered in Lesson 5, generally fall into "money transmitters," one of the classes of **money services business (MSB)** that must register with FinCEN (Form 107) and comply with federal anti-money-laundering rules (Financial Crimes Enforcement Network, n.d.-c). Sending money through an unregistered, informal arrangement, someone offering to move money for you outside any regulated channel, forfeits the consumer protections covered in Lesson 5 (the disclosure requirements, the cancellation window, the error-resolution rights) entirely, on top of being a common scam vector itself (Lesson 7).

**Staying compliant, in short, is mostly about using the regulated system rather than working around it:** legitimate banks and transfer providers, honest FATCA self-certifications when a foreign institution asks (Lesson 2), timely FBAR/FATCA reporting when it applies to you (Lesson 4), and enough awareness of sanctions screening that a blocked transfer doesn't come as a total surprise.

:::reveal What can happen to an international wire or transfer if a name, bank, or country involved matches an OFAC sanctions list, and must the sender always have done something wrong for this to happen? ||| The transaction can be blocked (frozen) or rejected by the institution handling it, as required by U.S. sanctions law. No, a match can occur for reasons unrelated to the sender's own conduct (e.g., a name or intermediary bank on the list), and the sender generally has the right to apply for the funds' release.

## Sources
- U.S. Department of the Treasury, Office of Foreign Assets Control. (n.d.). *Basic information on OFAC and sanctions*. https://ofac.treasury.gov/faqs/topic/1501
- Financial Crimes Enforcement Network. (n.d.-b). *Recognizing imposter scams*. https://www.fincen.gov/resources/scams
- Financial Crimes Enforcement Network. (n.d.-c). *Money Services Business (MSB) Registration*. https://www.fincen.gov/resources/money-services-business-msb-registration`,
      recallContent: [
        {
          prompt: "Name two of the classic warning signs of a money-transfer scam that the CFPB lists.",
          answer:
            "Any two of: someone falsely claiming to represent a government agency, bank, business, or family member; demands for an upfront fee; requests to pay by wire, cryptocurrency, courier, payment app, or gift card; high-pressure urgency; or AI-generated voice/image cloning.",
        },
        {
          prompt: "According to FinCEN, will the agency ever contact you directly about frozen assets or blocked transfers?",
          answer:
            "No, FinCEN states it will not contact you about frozen assets or blocked transfers; any message claiming otherwise is a scam impersonating the agency.",
        },
      ],
    },
    {
      slug: "banking-abroad-checklist",
      title: "9 · A banking-abroad compliance checklist",
      body: `Quick refresher: Lesson 8 covered sanctions screening (OFAC) and using registered, regulated providers rather than informal ones, both examples of staying compliant beyond just following a bank's own policies (U.S. Department of the Treasury, Office of Foreign Assets Control, n.d.).

**This closing lesson doesn't introduce new rules, it's a checklist that pulls every earlier lesson into one place**, since "banking abroad" isn't really one problem; it's several separate problems (a foreign bank's own risk policy, your existing U.S. accounts, federal reporting, moving money, currency risk, scams, and sanctions) that only look like a single problem from the outside.

**Before you move, or as soon as you can after you move:**

1. **Tell your U.S. bank and brokerage you're moving**, and ask your brokerage specifically about its policy on foreign addresses, don't wait for an account freeze or closure to find out (Lesson 3; Consumer Financial Protection Bureau, n.d.-a).
2. **If you're opening a foreign account, expect FATCA paperwork**, a U.S. tax ID, a self-certification form, and expect some institutions to decline; that's a business decision each bank makes, not a reflection of anything you did (Lesson 2; Internal Revenue Service, n.d.-a).
3. **Track your foreign accounts' combined value against the FBAR's $10,000 threshold**, and separately check whether your specified foreign assets cross Form 8938's higher thresholds, then go to the *Taxes for Americans Abroad* course, or a cross-border tax professional, for the filings themselves (Lesson 4; Internal Revenue Service, n.d.-c, n.d.-e).
4. **Before any international transfer, read the disclosure**, the exact exchange rate, the fees, and the amount your recipient will actually get, and compare it against at least one other provider (Lesson 5; Consumer Financial Protection Bureau, n.d.-e).
5. **Remember the exchange-rate markup is often the real cost**, even on a transfer advertised as fee-free (Lesson 6; Consumer Financial Protection Bureau, n.d.-e).
6. **Treat any urgent request to wire money, or any contact claiming to be a government agency asking you to move funds, as a scam until proven otherwise**, verify independently, using contact information you already had (Lesson 7; Financial Crimes Enforcement Network, n.d.-b).
7. **Use registered, regulated providers**, and don't be surprised if an ordinary transfer is occasionally delayed or blocked for sanctions screening, that's the system working as designed, not evidence something is wrong with your own conduct (Lesson 8; U.S. Department of the Treasury, Office of Foreign Assets Control, n.d.).

**One closing reminder, since it bears repeating: this course is educational, not financial, tax, or legal advice.** It's a map, the vocabulary and the moving pieces, so that when you talk with your bank, your brokerage, or a qualified cross-border tax or financial professional, you already know which questions to ask.

:::reveal Name three of the checklist items this closing lesson pulls together from earlier lessons. ||| Any three of: tell your bank/brokerage before moving; expect FATCA paperwork (and possible declines) when opening a foreign account; track your FBAR/Form 8938 thresholds; read the exchange-rate/fee disclosure before any transfer; remember the exchange-rate markup is often the real cost; treat urgent wire requests as scams until verified; use registered providers and expect occasional sanctions-screening delays.

## Sources
- Consumer Financial Protection Bureau. (n.d.-a). *Why was I denied a checking account?* https://www.consumerfinance.gov/ask-cfpb/why-was-i-denied-a-checking-account-en-1113/
- Consumer Financial Protection Bureau. (n.d.-e). *What is a remittance transfer and what are my rights?* https://www.consumerfinance.gov/ask-cfpb/what-is-a-remittance-transfer-and-what-are-my-rights-en-1161/
- Internal Revenue Service. (n.d.-a). *Foreign Account Tax Compliance Act (FATCA)*. https://www.irs.gov/businesses/corporations/foreign-account-tax-compliance-act-fatca
- Internal Revenue Service. (n.d.-c). *Report of Foreign Bank and Financial Accounts (FBAR)*. https://www.irs.gov/businesses/small-businesses-self-employed/report-of-foreign-bank-and-financial-accounts-fbar
- Internal Revenue Service. (n.d.-e). *Do I need to file Form 8938, Statement of Specified Foreign Financial Assets?* https://www.irs.gov/businesses/corporations/do-i-need-to-file-form-8938-statement-of-specified-foreign-financial-assets
- Financial Crimes Enforcement Network. (n.d.-b). *Recognizing imposter scams*. https://www.fincen.gov/resources/scams
- U.S. Department of the Treasury, Office of Foreign Assets Control. (n.d.). *Basic information on OFAC and sanctions*. https://ofac.treasury.gov/faqs/topic/1501`,
      recallContent: [
        {
          prompt:
            "What can happen to an international wire or transfer if a name, bank, or country involved matches an OFAC sanctions list, and must the sender always have done something wrong for this to happen?",
          answer:
            "The transaction can be blocked (frozen) or rejected. No, a match can occur for reasons unrelated to the sender's own conduct, and the sender generally has the right to apply for the funds' release.",
        },
        {
          prompt:
            "What kind of company must generally register with FinCEN as a money services business if it regularly transmits money, including internationally?",
          answer:
            "A money transmitter, one of the classes of \"money services business\" that must register with FinCEN (Form 107) and comply with federal anti-money-laundering rules.",
        },
      ],
    },
    {
      slug: "banking-abroad-quiz",
      title: "10 · Check your understanding",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "What federal law is the main reason some foreign banks are reluctant to open accounts for U.S. citizens?",
            options: [
              "The Bank Secrecy Act",
              "FATCA (the Foreign Account Tax Compliance Act)",
              "The USA PATRIOT Act",
              "Regulation E",
            ],
            correctIndex: 1,
            explanation:
              "FATCA requires foreign financial institutions to identify and report U.S. accountholders to the IRS, or face a 30% withholding tax, that compliance burden leads some banks to decline American customers.",
            sourceLessonSlug: "why-banking-gets-complicated-abroad",
          },
          {
            prompt: "Why might a small foreign bank decline to open an account for a U.S. citizen, even though no law bans them from doing so?",
            options: [
              "U.S. citizens are legally barred from holding foreign bank accounts",
              "FATCA's compliance cost, and the risk of a 30% withholding tax, can outweigh the revenue from serving a few American customers",
              "Foreign banks can never legally serve non-residents",
              "The IRS revokes a foreign bank's charter if it serves Americans",
            ],
            correctIndex: 1,
            explanation:
              "It's a business decision, not a legal ban: the ongoing FATCA compliance cost (or the 30% withholding-tax risk of not complying) can outweigh what a bank earns from a small number of American customers.",
            sourceLessonSlug: "fatca-and-foreign-banks",
          },
          {
            prompt: "If your U.S. bank account is closed while you live abroad, what should you check first, per the CFPB?",
            options: [
              "Your credit card's rewards balance",
              "Your checking-account report from a company like Chex Systems or Early Warning Services",
              "Your passport's remaining validity",
              "Your Foreign Earned Income Exclusion eligibility",
            ],
            correctIndex: 1,
            explanation:
              "The CFPB points to checking-account reporting companies (Chex Systems, Early Warning Services) as the first place to check, you can request your report and dispute inaccuracies.",
            sourceLessonSlug: "keeping-us-bank-brokerage-accounts-abroad",
          },
          {
            prompt: "Which foreign-account reporting obligation is filed with your regular IRS tax return, versus separately with FinCEN?",
            options: [
              "The FBAR is filed with your IRS return; Form 8938 goes to FinCEN",
              "Form 8938 is filed with your IRS return; the FBAR goes to FinCEN separately",
              "Both are filed together, directly with FinCEN",
              "Neither is ever filed separately from your state tax return",
            ],
            correctIndex: 1,
            explanation:
              "Form 8938 (FATCA) is attached to your IRS return. The FBAR (FinCEN Form 114) is a completely separate electronic filing with FinCEN, a Treasury bureau.",
            sourceLessonSlug: "fbar-fatca-reporting-pointer",
          },
          {
            prompt:
              "A U.S. consumer sends $200 to a relative in another country through a company that regularly offers this service. What must the provider disclose before the consumer pays?",
            options: [
              "Nothing, disclosure is optional for amounts under $500",
              "The exact exchange rate, any fees, and the amount the recipient is expected to receive",
              "Only the total dollar amount being sent",
              "Only the provider's customer service phone number",
            ],
            correctIndex: 1,
            explanation:
              "Federal law defines this as a remittance transfer (transfers over $15) and requires the provider to disclose the exact exchange rate, fees, and expected amount received, before the consumer pays.",
            sourceLessonSlug: "moving-money-internationally",
          },
          {
            prompt: "Why can an international transfer advertised as having \"no fee\" still be expensive?",
            options: [
              "Because taxes are always added afterward",
              "Because the exchange-rate markup, the spread between the real market rate and the rate quoted to you, is often where the provider makes its money",
              "Because \"no fee\" transfers are illegal and always cost extra",
              "Because the recipient must pay a mandatory tariff",
            ],
            correctIndex: 1,
            explanation:
              "The exchange-rate markup is a separate cost from any flat fee, and it's how many providers profit from currency exchange, a $0-fee transfer can still be costly if the exchange rate is marked up.",
            sourceLessonSlug: "currency-risk-and-exchange-rates",
          },
          {
            prompt: "Which of these is a classic warning sign of a money-transfer scam, according to the CFPB?",
            options: [
              "A request to pay by wire transfer, cryptocurrency, courier, or gift card, combined with high-pressure urgency",
              "A written disclosure showing the exchange rate and fees before you pay",
              "A 30-minute window to cancel a transfer after paying",
              "A checking-account report from Chex Systems",
            ],
            correctIndex: 0,
            explanation:
              "Urgent requests to pay by wire, cryptocurrency, courier, payment app, or gift card, especially combined with someone claiming to be a government agency, bank, or family member, are classic scam warning signs.",
            sourceLessonSlug: "avoiding-scams-sending-money-abroad",
          },
          {
            prompt: "What can happen to an international wire or transfer if a name, bank, or country involved matches a U.S. sanctions (OFAC) list?",
            options: [
              "Nothing, sanctions only apply to businesses, never personal transfers",
              "The transaction can be blocked or rejected by the institution handling it, even if the sender did nothing wrong",
              "The sender is automatically fined by the IRS",
              "The transfer is always canceled with no recovery of the funds",
            ],
            correctIndex: 1,
            explanation:
              "Banks and transfer providers must screen against OFAC's sanctions lists, and a match can trigger a block or rejection even on an ordinary personal transfer, for reasons unrelated to the sender's own conduct.",
            sourceLessonSlug: "staying-compliant-sanctions-and-registered-providers",
          },
          {
            prompt: "According to this course's closing checklist, what should you do before making any international transfer?",
            options: [
              "Skip reading the disclosure to save time",
              "Read the disclosed exchange rate and fees, and compare against at least one other provider",
              "Always use the very first provider you find",
              "Assume every provider charges the same exchange rate",
            ],
            correctIndex: 1,
            explanation:
              "The checklist repeats Lesson 5's core habit: read the disclosure (exchange rate, fees, amount received) and compare it against another provider before committing to a transfer.",
            sourceLessonSlug: "banking-abroad-checklist",
          },
        ],
      },
    },
  ],
};
