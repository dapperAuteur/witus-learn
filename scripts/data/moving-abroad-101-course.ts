// Authored "Moving Abroad 101" — the hub course for U.S. citizens actually relocating (not just
// taking a trip): the big decisions (long stay vs. residency vs. citizenship), categories of
// long-stay visas (work, study, family, retirement, and the newer digital-nomad visas, at a high
// level), how to choose a country, a realistic timeline and cost, keeping U.S. ties while abroad
// (voting, mail, banking, taxes), and where to get authoritative help. It is the connective
// overview for the "Moving & living abroad" pillar of the "Travel & Living Abroad" category —
// it points learners to the deeper Taxes-for-Americans-Abroad and Banking-Abroad courses rather
// than duplicating them, and to its sibling Travel Visas 101 (content/travel-visas-101-course)
// for the short-trip visa mechanics it assumes as background.
//
// AUTHORITATIVE-VALUES RULE (load-bearing here): immigration requirements, visa fees, income
// thresholds, and processing times are set unilaterally by each destination country and change
// with little notice — this course never asserts a fixed number for any of them. It teaches the
// decision framework and repeatedly tells the learner to confirm current rules with the
// destination's own official immigration authority and, for anything consequential, a licensed
// immigration attorney. This is educational content, not legal, tax, or financial advice.
//
// Every claim is cited APA 7 in-line to a verified, authoritative source: U.S. Department of
// State (travel.state.gov), the Federal Voting Assistance Program (fvap.gov), the Social Security
// Administration (ssa.gov), the IRS (irs.gov), and two destination-government immigration
// authorities used as concrete examples (Portugal's official visa portal, vistos.mne.gov.pt, and
// Mexico's Instituto Nacional de Migración, gob.mx/inm) plus the American Immigration Lawyers
// Association's official attorney directory. Every citation was verified against the live
// official source via WebSearch/WebFetch before authoring — no fabricated country rules, no
// fabricated characters, no "AI tells."
//
// Ends with a quiz whose every question links back to the lesson that teaches the answer
// (the quiz standard).

import type { AuthoredCourse } from "./authored-course";

export const MOVING_ABROAD_101_COURSE: AuthoredCourse = {
  title: "Moving Abroad 101",
  description:
    "The overview course for U.S. citizens actually relocating abroad, not just visiting: the big decisions (a long stay vs. residency vs. citizenship), the common categories of long-stay visas (work, study, family, retirement, and the newer digital-nomad visas), a six-factor framework for choosing a country, a realistic timeline and cost of relocating, how to keep your ties to the U.S. while living abroad (voting, mail, banking, taxes), and where to get authoritative help. Cited throughout to travel.state.gov, fvap.gov, ssa.gov, and irs.gov, with destination-government examples, teaches the framework, since immigration rules are country-specific and change.",
  lessons: [
    {
      slug: "big-picture-stay-residency-citizenship",
      title: "1 · The big picture: long stay vs. residency vs. citizenship",
      body: `Moving abroad isn't one decision, it's a ladder, and each rung means something legally different. Before you research any single country, get clear on which rung you're actually aiming for.

**A long stay** means living somewhere for months at a time on a visa that lets you remain longer than a typical tourist stay, but that is still temporary, it expires, and you either leave, renew it, or convert it into something more permanent. This course's sibling, *Travel Visas 101*, covers short visa-free and tourist-visa stays; a long-stay visa is the next rung up (Lesson 2).

**Residency** is a different legal status: the destination country grants you an ongoing right to live there, often starting as *temporary residency* (renewable, tied to conditions like a job or income) and, after enough consecutive years, becoming eligible to convert to *permanent residency*. Residency does not make you a citizen of that country, and it doesn't affect your U.S. citizenship at all.

**Citizenship** (naturalization in your new country) is the top rung: full legal membership in that country, typically after years of residency, a language/civics test, and other requirements that vary enormously by country. Because the United States generally permits dual citizenship, most U.S. citizens who naturalize elsewhere do not have to give up their U.S. citizenship, but *this depends on both countries' laws*, so verify both sides with an attorney before assuming it (U.S. Department of State, n.d.-a). Renouncing U.S. citizenship, separately, is a serious, largely irreversible legal step outside this course's scope.

**Why this matters before you research a country:** "long stay," "residency," and "citizenship" have different visa categories, different timelines, and different paperwork. Knowing which rung you're aiming for narrows your research immediately.

:::reveal What are the three rungs of the "moving abroad" ladder, from least to most permanent? ||| A long stay (temporary, on a visa that expires), residency (an ongoing right to live there, starting temporary and potentially becoming permanent), and citizenship (full legal membership via naturalization, typically after years of residency).

## Sources
- U.S. Department of State, Bureau of Consular Affairs. (n.d.-a). Living abroad resources. Travel.State.gov. https://travel.state.gov/content/travel/en/international-travel/while-abroad.html`,
    },
    {
      slug: "long-stay-visa-categories",
      title: "2 · The common categories of long-stay visas",
      body: `Once you're past a short tourist stay, most countries sort long-stay visas into a handful of recurring categories. Knowing the category tells you what evidence you'll need to gather, long before you pick a specific country.

- **Work visas.** Tied to a job offer or employer sponsorship in the destination country. Usually the employer (not you) starts the process, and the visa is often tied to that specific job, leaving the job can affect your status.
- **Study visas.** Tied to enrollment at an accredited school or university in the destination country, usually requiring proof of acceptance, funds, and sometimes health insurance.
- **Family visas.** For joining a spouse, parent, or other close family member who is already a citizen or resident of the destination country, commonly called "family reunification."
- **Retirement / passive-income visas.** For people who can support themselves without local employment, usually a pension, Social Security, savings, or other steady income above a country-set minimum (Lesson 4 covers Social Security payments specifically).
- **Digital-nomad / remote-work visas.** A newer category covered on its own in Lesson 3.

**A concrete example of how one country packages these:** Mexico's temporary resident visa, issued through the **Instituto Nacional de Migración (INM)**, Mexico's immigration authority, covers work, family reunification, and passive-income/retirement stays under one visa type, generally requiring proof of a job offer, a qualifying family relationship, or proof of sufficient income or savings, depending on which basis you're applying under. It's valid for a set period and can be renewed toward permanent residency after enough cumulative years. Because Mexico periodically adjusts its income and savings thresholds, this course does not print a dollar figure, confirm the current requirement directly at **gob.mx/inm** or your nearest Mexican consulate before you apply.

Every country draws these categories differently, and a single visa can blend more than one (as Mexico's example shows). Use these five categories as a mental map, then confirm the specific destination's actual visa names and requirements (Lesson 8).

:::reveal Name the five common categories of long-stay visas. ||| Work visas, study visas, family (reunification) visas, retirement/passive-income visas, and digital-nomad/remote-work visas.

## Sources
- Instituto Nacional de Migración. (n.d.). Trámites y servicios [Procedures and services]. Gobierno de México. https://www.gob.mx/inm`,
      recallContent: [
        {
          prompt: "What are the three rungs of the 'moving abroad' ladder, from least to most permanent?",
          answer:
            "A long stay (temporary, on a visa that expires), residency (an ongoing right to live there, potentially becoming permanent), and citizenship (full legal membership via naturalization).",
        },
        {
          prompt: "Does naturalizing in another country usually require giving up U.S. citizenship?",
          answer:
            "Generally no, since the U.S. permits dual citizenship for most people, but this depends on both countries' laws, so it must be verified, not assumed.",
        },
      ],
    },
    {
      slug: "digital-nomad-visas",
      title: "3 · The new wave: digital-nomad and remote-work visas",
      body: `A **digital-nomad visa** (also called a remote-work visa) is a purpose-built long-stay visa for people who keep working for an employer or clients *outside* the destination country while living *in* it. It's a genuinely new visa category, most countries that offer one created it only in the last several years, and dozens more have launched programs since. At a high level, most share a similar shape:

- **Proof your income comes from outside the country**, an employment contract, freelance client agreements, or a remote-work letter, showing you're not competing for a local job.
- **A minimum income or savings threshold**, set and adjusted by that country, usually well above its tourist-visa requirements.
- **Health insurance** valid in the destination country for the visa's duration.
- **A clean criminal background check**, often required to be recently issued and sometimes apostilled/legalized.
- A defined validity period (commonly around a year), often renewable, and in some countries eventually convertible toward residency.

**A concrete example from an official source:** Portugal's national visa portal explicitly lists a "temporary stay visa for the exercise of a professional activity done remotely, 'digital nomads'" and a parallel "residency visa" version of the same category, one for a shorter stay, one on the path toward longer-term residency (Ministério dos Negócios Estrangeiros de Portugal, n.d.). That's the real, current, government-published name for the category, not a nickname invented by a travel blog.

**Treat this as a fast-moving category.** Income thresholds, exact document lists, and even which countries offer a digital-nomad visa at all change often, some countries add programs, others revise theirs, year to year. This course teaches the shape of the category; always confirm the current, country-specific rules at the destination's own official visa or immigration site (Lesson 8) before you plan around one.

:::reveal What five things do most digital-nomad visa programs have in common? ||| Proof of income from outside the country, a minimum income or savings threshold, health insurance valid in-country, a clean criminal background check, and a defined (often renewable) validity period.

## Sources
- Ministério dos Negócios Estrangeiros de Portugal [Portuguese Ministry of Foreign Affairs]. (n.d.). Type of visa – general information. Vistos.MNE.gov.pt. https://vistos.mne.gov.pt/en/national-visas/general-information/type-of-visa`,
      recallContent: [
        {
          prompt: "Name three of the five common categories of long-stay visas.",
          answer:
            "Any three of: work visas, study visas, family (reunification) visas, retirement/passive-income visas, and digital-nomad/remote-work visas.",
        },
        {
          prompt: "In Mexico's example, what agency issues the temporary resident visa, and what three bases can it be granted on?",
          answer:
            "Instituto Nacional de Migración (INM); it can be granted on a job offer, a qualifying family relationship, or proof of sufficient income/savings.",
        },
      ],
    },
    {
      slug: "choosing-a-country",
      title: "4 · How to choose a country: a six-factor framework",
      body: `"Where should I move?" is really six smaller, more answerable questions. Work through them in this order, later factors are easier to research once you've narrowed the list with the earlier ones.

1. **Visa accessibility.** Do you actually qualify for a long-stay visa there, under a category from Lesson 2 or 3, given your job, income, savings, or family ties? A beautiful destination you can't legally get a visa for isn't a real option yet.
2. **Cost of living.** Housing, groceries, transportation, and everyday services vary enormously by country and even by city within a country. Your target country's cost of living, compared honestly against your actual income or savings, determines whether the move is financially sustainable, not just survivable for a vacation.
3. **Healthcare.** How care works, what it costs, and whether you'll need private international insurance (public systems and their access rules for non-citizens vary widely by country). This course's Healthcare Abroad companion course goes deeper; here, just confirm the destination has a healthcare access path for your visa type before you commit.
4. **Taxes.** Moving abroad does not end your U.S. tax obligations (Lesson 7), and it adds a *second* set, the destination country's own tax rules for residents, which vary by how long you stay and what income you earn there. Some countries offer temporary tax incentives for new residents; treat any such claim as something to verify with a cross-border tax professional, not something to plan around from a blog post.
5. **Language.** Whether you need fluency, conversational ability, or can get by with English depends on the country, the region within it, and how much of daily life you want to navigate independently versus through a translator or local help.
6. **Safety.** The U.S. Department of State publishes a **Travel Advisory level** for every country, plus destination-specific safety and health information, on its country information pages ("Learn About Your Destination"), check your target country's current advisory level and read what's driving it, not just the number (U.S. Department of State, n.d.-b).

No country will score perfectly on all six. The point of the framework is to compare candidates on the *same* six factors, rather than falling for the one factor a single article happened to emphasize.

:::reveal List the six factors in this framework, in the recommended research order. ||| Visa accessibility, cost of living, healthcare, taxes, language, and safety.

## Sources
- U.S. Department of State, Bureau of Consular Affairs. (n.d.-b). International travel country information pages ("Learn about your destination"). Travel.State.gov. https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages.html`,
      recallContent: [
        {
          prompt: "What five things do most digital-nomad visa programs have in common?",
          answer:
            "Proof of income from outside the country, a minimum income/savings threshold, health insurance, a clean criminal background check, and a defined validity period.",
        },
        {
          prompt: "What does Portugal's official visa portal call its remote-work visa category?",
          answer:
            "A 'temporary stay visa' or 'residency visa' for the exercise of a professional activity done remotely, officially labeled 'digital nomads' on the government site.",
        },
      ],
    },
    {
      slug: "realistic-timeline",
      title: "5 · A realistic timeline for relocating",
      body: `Moving abroad is not a single event, it's a sequence, and skipping ahead (say, signing a lease before your visa is approved) is one of the most common expensive mistakes. A realistic timeline has four phases:

**Phase 1, Research and decide (months, not weeks).** Work the six-factor framework (Lesson 4) across a shortlist of countries, confirm which visa category (Lessons 2-3) you actually qualify for, and get a preliminary read from a cross-border tax professional and, if your situation is at all complex, an immigration attorney (Lesson 8). Rushing this phase is where most bad moves start.

**Phase 2, Visa application.** Timelines vary enormously by country and visa type, this course does not print a number of weeks or months, because it varies by country and changes over time. What's consistent: you'll gather documents (often including an apostilled/legalized criminal background check, proof of income or savings, and health insurance), and processing itself can take anywhere from a few weeks to many months depending on the destination and category. Build in buffer time, and never book a one-way ticket before your visa is actually approved.

**Phase 3, The move itself.** Housing (often temporary/short-term while you find something permanent), shipping or selling belongings, closing out U.S. obligations that don't travel well (a lease, a car), and the logistics of the trip itself.

**Phase 4, Settling in and renewing.** Registering with local authorities where required, opening local accounts, enrolling in local healthcare access, and (critically) tracking your visa's or residency permit's renewal window well before it expires. Missing a renewal deadline can mean starting the entire process over, or worse.

**The realistic habit:** treat Phase 1 as the phase you can't rush, and treat every date after that (a lease, a flight, a job start date) as provisional until your visa is actually in hand.

:::reveal What are the four phases of a realistic relocation timeline? ||| Research and decide, visa application, the move itself, and settling in and renewing.

## Sources
- U.S. Department of State, Bureau of Consular Affairs. (n.d.-a). Living abroad resources. Travel.State.gov. https://travel.state.gov/content/travel/en/international-travel/while-abroad.html`,
      recallContent: [
        {
          prompt: "List the six factors in the country-choosing framework, in the recommended research order.",
          answer: "Visa accessibility, cost of living, healthcare, taxes, language, and safety.",
        },
        {
          prompt: "Why shouldn't you book a one-way ticket or sign a long-term lease before your visa is approved?",
          answer:
            "Because visa processing timelines vary and can take much longer than expected, committing to dates before approval risks an expensive mistake if the visa is delayed or denied.",
        },
      ],
    },
    {
      slug: "realistic-costs",
      title: "6 · A realistic cost of relocating",
      body: `Like timelines, relocation costs vary too much by country, visa type, and personal circumstances for this course to print a total dollar figure, and any number written here would go stale. What's stable is the **structure** of the costs. Budget for all of these categories, not just the ones that come to mind first:

- **Visa/application fees**, paid to the destination government, varies by country and visa category, and is often non-refundable even if denied.
- **Document costs**: certified copies, translations, and apostilles/legalizations of documents like birth certificates, marriage certificates, and background checks, these add up and are easy to underestimate.
- **Travel and shipping**: flights, and either shipping belongings or replacing them after selling/donating what you had.
- **Housing transition costs**: a security deposit (sometimes several months' rent upfront in some countries), temporary lodging while you search, and possibly furnishing an unfurnished unit.
- **Health insurance**: often required as a visa condition, and a real ongoing cost even where not required.
- **Professional help**: a cross-border tax preparer and, for complex cases, an immigration attorney (Lesson 8), money well spent relative to the cost of a mistake.
- **A buffer for the unexpected**: a delayed visa, an extra flight, an unplanned month of overlap paying for housing in two countries.

**The realistic habit:** build your budget from these categories using *your* target country's current fee schedules and cost of living (Lesson 4), rather than a total figure from an article about a different country, a different visa type, or a different year.

:::reveal Name four categories of cost to budget for when relocating abroad, beyond the visa fee itself. ||| Any four of: document costs (translations/apostilles), travel and shipping, housing transition costs, health insurance, professional help (tax preparer/attorney), and a buffer for the unexpected.

## Sources
- U.S. Department of State, Bureau of Consular Affairs. (n.d.-b). International travel country information pages ("Learn about your destination"). Travel.State.gov. https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages.html`,
      recallContent: [
        {
          prompt: "What are the four phases of a realistic relocation timeline?",
          answer: "Research and decide, visa application, the move itself, and settling in and renewing.",
        },
        {
          prompt: "Why doesn't this course print a total dollar figure for the cost of relocating?",
          answer:
            "Because costs vary too much by country, visa type, and personal circumstances, and any fixed number would go stale, the course teaches the cost categories instead.",
        },
      ],
    },
    {
      slug: "keeping-your-us-ties",
      title: "7 · Keeping your ties to the U.S.: voting, mail, banking, and taxes",
      body: `Moving abroad doesn't end your relationship with the United States, several obligations and rights follow you, and each has its own official channel.

**Voting.** Most U.S. citizens 18 or older living abroad remain eligible to vote absentee in federal elections, and some states also allow voting in state and local elections from abroad (U.S. Department of State, n.d.-c). Start at the **Federal Voting Assistance Program (FVAP.gov)**, the official DoD-run program that helps overseas citizens register and vote: submit a **Federal Post Card Application (FPCA)** to your local election officials, ideally at the start of the calendar year, or at least 45 days before an election, to register and request your ballot, then return it by mail, by dropping it at the nearest U.S. embassy or consulate, or another method your state allows (Federal Voting Assistance Program, n.d.).

**Mail.** Your U.S. mail doesn't automatically follow you abroad, plan for a mail-forwarding service or a trusted person to handle anything that can't go paperless before you leave, since some U.S. institutions (banks, the IRS, your state) may still need to reach you by physical mail.

**Banking.** The U.S. taxes and reports on its citizens' finances no matter where they live, and that has a real side effect: the **Foreign Account Tax Compliance Act (FATCA)** requires foreign financial institutions to report U.S.-owned accounts to the IRS, and some foreign banks respond by declining to open accounts for U.S. citizens at all rather than take on that reporting burden (Internal Revenue Service, n.d.-a). Don't assume you can simply walk into a local bank and open an account, research account access for U.S. citizens specifically as part of choosing a country (Lesson 4), and this platform's dedicated **Banking & Money When You Live Abroad** course covers this in depth.

**Taxes.** The single biggest misconception about moving abroad: it does not end your U.S. tax filing obligation. U.S. citizens living abroad must generally file U.S. income tax returns on their **worldwide income**, regardless of where they live or where they earned it, even if tax benefits like the Foreign Earned Income Exclusion or the Foreign Tax Credit end up reducing what they owe, filing is still required to claim those benefits (Internal Revenue Service, n.d.-b). **Retirees:** Social Security retirement benefits generally keep being paid while you live abroad if you're a U.S. citizen, with a short list of countries (including Cuba and North Korea) where payments cannot be sent at all, use the Social Security Administration's **Payments Abroad Screening Tool** to check your specific situation before you move (Social Security Administration, n.d.). This platform's dedicated **Taxes for Americans Abroad** course covers filing requirements, the Foreign Earned Income Exclusion, FBAR, and FATCA in depth, this lesson is the pointer, not the full picture.

:::reveal Name the four U.S. ties this lesson covers, and one official resource for each. ||| Voting (FVAP.gov / the FPCA), mail (a forwarding plan), banking (research U.S.-citizen account access as part of choosing a country; FATCA affects it), and taxes (the IRS, worldwide income filing still applies; SSA's Payments Abroad Screening Tool for retirees).

## Sources
- U.S. Department of State, Bureau of Consular Affairs. (n.d.-c). Voting from abroad. Travel.State.gov. https://travel.state.gov/content/travel/en/international-travel/while-abroad/voting.html
- Federal Voting Assistance Program. (n.d.). Vote from abroad. U.S. Department of Defense. https://www.fvap.gov/
- Internal Revenue Service. (n.d.-a). Summary of FATCA reporting for U.S. taxpayers. https://www.irs.gov/businesses/corporations/summary-of-fatca-reporting-for-us-taxpayers
- Internal Revenue Service. (n.d.-b). U.S. citizens and residents abroad filing requirements. https://www.irs.gov/individuals/international-taxpayers/us-citizens-and-residents-abroad-filing-requirements
- Social Security Administration. (n.d.). Payments outside the United States. https://www.ssa.gov/international/payments.html`,
      recallContent: [
        {
          prompt: "Name four categories of cost to budget for when relocating abroad, beyond the visa fee itself.",
          answer:
            "Any four of: document costs, travel and shipping, housing transition costs, health insurance, professional help, and a buffer for the unexpected.",
        },
        {
          prompt: "Does moving abroad end a U.S. citizen's obligation to file U.S. taxes?",
          answer:
            "No. U.S. citizens are generally taxed on worldwide income and must keep filing regardless of where they live, even if exclusions or credits reduce what they owe.",
        },
      ],
    },
    {
      slug: "getting-authoritative-help",
      title: "8 · Where to get authoritative help",
      body: `Everything in this course is a framework, not a substitute for two specific, authoritative sources you should consult before you actually apply for a visa or sign anything binding:

**The destination country's own official immigration authority.** Only the destination government can tell you its current, legally accurate requirements, a blog, a forum, or even this course can go stale the moment a country updates its rules. Go directly to the official source: examples used in this course include Portugal's national visa portal (vistos.mne.gov.pt) and Mexico's Instituto Nacional de Migración (gob.mx/inm); every country has its own equivalent, typically its foreign ministry, immigration service, or its embassy/consulate in the United States. If you can't find the official site through a general search, your target country's nearest U.S.-based embassy or consulate can point you to it.

**A licensed immigration attorney**, for anything beyond a straightforward, well-documented case, dual-nationality questions, a prior visa denial or overstay anywhere, a complex family situation, or simply real money and years of your life on the line. The **American Immigration Lawyers Association (AILA)** runs a free, official directory of licensed, currently-in-good-standing immigration attorneys, searchable by location and practice area, as a reliable starting point for finding one (American Immigration Lawyers Association, n.d.).

**A cross-border tax professional**, separately from an immigration attorney, someone who specifically handles U.S. citizens abroad, since your destination country's tax rules and the U.S.'s worldwide-income rules (Lesson 7) interact in ways general tax preparers may not have encountered.

**This course is educational, not legal, tax, or immigration advice.** Immigration rules are set unilaterally by each country and change, sometimes with little notice, the responsible way to use everything you've learned here is as a map for what questions to ask, not as a substitute for confirming the current, country-specific answer with the destination's own official source and a licensed professional before you act.

:::reveal Name the two authoritative sources this course tells you to confirm with before applying for a visa or signing anything binding. ||| The destination country's own official immigration authority (its government site, embassy, or consulate) and a licensed immigration attorney, plus, separately, a cross-border tax professional for tax questions.

## Sources
- American Immigration Lawyers Association. (n.d.). AILA lawyer search. https://www.ailalawyer.com/
- Ministério dos Negócios Estrangeiros de Portugal [Portuguese Ministry of Foreign Affairs]. (n.d.). Type of visa – general information. Vistos.MNE.gov.pt. https://vistos.mne.gov.pt/en/national-visas/general-information/type-of-visa
- Instituto Nacional de Migración. (n.d.). Trámites y servicios [Procedures and services]. Gobierno de México. https://www.gob.mx/inm`,
      recallContent: [
        {
          prompt: "Name the four U.S. ties covered in the previous lesson, and one official resource for each.",
          answer:
            "Voting (FVAP.gov), mail (a forwarding plan), banking (research account access; watch for FATCA friction), and taxes (the IRS for filing; SSA's Payments Abroad Screening Tool for retirees).",
        },
        {
          prompt: "Why does this course avoid stating a country's specific visa requirements as permanent facts?",
          answer:
            "Because immigration rules are set unilaterally by each destination country and change, sometimes with little notice, the course teaches the framework and points learners to the destination's own current official source.",
        },
      ],
    },
    {
      slug: "moving-abroad-checklist-practice",
      title: "9 · Practice: build your moving-abroad research checklist",
      exercise: {
        instructions:
          "Fill in each blank with the term from this course, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt: "The legal status where a country grants you an ongoing right to live there, short of citizenship, is called ___.",
            answer: "residency",
            explanation: "It often starts as temporary residency and can become permanent after enough consecutive years.",
          },
          {
            prompt: "Full legal membership in another country, typically after years of residency, is called ___ (in that country).",
            answer: "citizenship",
            accept: ["naturalization"],
            explanation: "Most U.S. citizens who naturalize elsewhere keep their U.S. citizenship too, since dual citizenship is generally permitted, but verify both countries' laws.",
          },
          {
            prompt: "A visa tied to a job offer or employer sponsorship in the destination country is a ___ visa.",
            answer: "work",
            explanation: "The employer usually starts the process, and the visa is often tied to that specific job.",
          },
          {
            prompt: "A newer visa category for people who keep working for employers or clients outside the country while living in it is a ___ visa.",
            answer: "digital-nomad",
            accept: ["digital nomad", "remote-work", "remote work"],
            explanation: "Portugal's official visa portal explicitly names this category 'digital nomads.'",
          },
          {
            prompt: "The six-factor framework for choosing a country includes visa accessibility, cost of living, healthcare, ___, language, and safety.",
            answer: "taxes",
            explanation: "Moving abroad adds a second country's tax rules on top of your ongoing U.S. tax obligation.",
          },
          {
            prompt: "The official U.S. program that helps citizens abroad register and vote is called ___.",
            answer: "FVAP",
            accept: ["federal voting assistance program"],
            explanation: "Start at FVAP.gov and submit a Federal Post Card Application (FPCA) to register and request your ballot.",
          },
          {
            prompt: "The U.S. law that requires foreign banks to report U.S.-owned accounts to the IRS, and sometimes causes them to decline U.S. customers, is ___.",
            answer: "FATCA",
            accept: ["foreign account tax compliance act"],
            explanation: "Some foreign financial institutions decline U.S. citizens as customers to avoid FATCA's reporting burden.",
          },
          {
            prompt: "U.S. citizens abroad are generally taxed by the U.S. on their ___ income, not just income earned in the U.S.",
            answer: "worldwide",
            explanation: "Filing is required even if the Foreign Earned Income Exclusion or Foreign Tax Credit ultimately reduces what's owed.",
          },
          {
            prompt: "The official directory for finding a licensed immigration attorney, run by the American Immigration Lawyers Association, is called ___.",
            answer: "AILA",
            accept: ["aila lawyer search", "ailalawyer.com"],
            explanation: "It's free to search and limited to licensed attorneys in good standing with AILA and their state bar.",
          },
        ],
      },
    },
    {
      slug: "moving-abroad-101-quiz",
      title: "10 · Check your understanding",
      quiz: {
        passingScore: 70,
        // Options shuffle per attempt so a fixed answer position cannot be gamed;
        // scoring is by identity, so no answer changes (src/lib/quiz.ts).
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is the key legal difference between residency and citizenship in a destination country?",
            options: [
              "There is no difference; the two terms are fully interchangeable",
              "Residency is a right to live there; citizenship is full membership",
              "Citizenship is always temporary; residency is always permanent",
              "Only residency needs a visa; citizenship never requires one",
            ],
            correctIndex: 1,
            explanation:
              "Residency (temporary or permanent) grants an ongoing right to live in a country. Citizenship, via naturalization, is full legal membership, typically reached only after years of residency and other requirements.",
            sourceLessonSlug: "big-picture-stay-residency-citizenship",
          },
          {
            prompt: "In Mexico's example, what agency issues its temporary resident visa, and what bases can it be granted on?",
            options: [
              "The IRS; granted only on your U.S. federal tax status",
              "Mexico's INM; on a job offer, family, or proof of income",
              "The U.S. Department of State; based on U.S. citizenship alone",
              "A private visa broker; based on payment of a flat fee",
            ],
            correctIndex: 1,
            explanation:
              "Mexico's INM issues the temporary resident visa, which can be granted on a job offer, a qualifying family relationship, or proof of sufficient income or savings, depending on the basis.",
            sourceLessonSlug: "long-stay-visa-categories",
          },
          {
            prompt: "According to Portugal's official visa portal, what does it call its remote-work visa category?",
            options: [
              "The 'Golden Visa,' its investment-based residency permit",
              "A visa for professional activity done remotely, 'digital nomads'",
              "The 'D8 Express Visa,' a fast-tracked skilled-worker permit",
              "It does not offer any remote-work visa category at present",
            ],
            correctIndex: 1,
            explanation:
              "Portugal's official visa portal (vistos.mne.gov.pt) explicitly names both a temporary-stay and a residency version of this category as being for 'digital nomads.'",
            sourceLessonSlug: "digital-nomad-visas",
          },
          {
            prompt: "In the six-factor framework for choosing a country, which factor involves checking the U.S. Department of State's country information pages?",
            options: ["Cost of living", "Language", "Safety", "Healthcare"],
            correctIndex: 2,
            explanation:
              "Safety is checked via the State Department's Travel Advisory level and destination-specific information on its 'Learn About Your Destination' pages.",
            sourceLessonSlug: "choosing-a-country",
          },
          {
            prompt: "Why does this course avoid stating how many weeks or months a visa application will take?",
            options: [
              "Processing times are secret and never published",
              "Timelines vary by country and visa type, and change",
              "Every visa takes exactly the same amount of time",
              "Only expedited applications have a processing time",
            ],
            correctIndex: 1,
            explanation:
              "Like fees, visa processing timelines are set and adjusted by each destination country, so this course teaches the four-phase structure instead of a fixed duration.",
            sourceLessonSlug: "realistic-timeline",
          },
          {
            prompt: "Besides the visa application fee itself, which of these is a realistic relocation cost category to budget for?",
            options: [
              "Document costs like translations and apostilles",
              "U.S. federal income tax withholding on wages you haven't earned yet",
              "A mandatory donation to the destination government",
              "None, the visa fee is the only real cost",
            ],
            correctIndex: 0,
            explanation:
              "Document costs, travel/shipping, housing transition costs, health insurance, professional help, and a buffer for the unexpected are all real, commonly underestimated categories.",
            sourceLessonSlug: "realistic-costs",
          },
          {
            prompt: "Where should a U.S. citizen living abroad start to register and vote absentee?",
            options: [
              "Their destination country's local election office",
              "FVAP.gov, the Federal Voting Assistance Program",
              "There is no legal way to vote once you move abroad",
              "Only by flying back to your home U.S. state in person",
            ],
            correctIndex: 1,
            explanation:
              "FVAP.gov is the official DoD-run program that helps overseas citizens register and request their ballot via the FPCA.",
            sourceLessonSlug: "keeping-your-us-ties",
          },
          {
            prompt: "Does moving abroad end a U.S. citizen's obligation to file U.S. income taxes?",
            options: [
              "Yes, once you establish tax residency in another country",
              "No, U.S. citizens are taxed on worldwide income",
              "Only if they earn more than $1 million per year",
              "Only for the first full year after you move abroad",
            ],
            correctIndex: 1,
            explanation:
              "The IRS requires U.S. citizens abroad to file on worldwide income even if exclusions or credits like the Foreign Earned Income Exclusion ultimately reduce what's owed.",
            sourceLessonSlug: "keeping-your-us-ties",
          },
          {
            prompt: "This course recommends confirming a destination's visa requirements with which two authoritative sources?",
            options: [
              "A popular travel blog and a large online expat community group",
              "The country's official immigration authority and a licensed attorney",
              "This course alone, since it is kept fully up to date for you",
              "Only a general travel agent handling your relocation flights",
            ],
            correctIndex: 1,
            explanation:
              "Because immigration rules are country-specific and change, this course points learners to the destination's own official source (e.g., its immigration ministry or embassy) and a licensed attorney (e.g., via AILA's directory) rather than asserting fixed rules itself.",
            sourceLessonSlug: "getting-authoritative-help",
          },
        ],
      },
    },
  ],
};
