// Authored "Retiring Abroad" — a Learn.WitUS course in the "Travel & Living Abroad" category,
// for U.S. citizens considering retiring in another country. It is the retirement-specific
// companion to Moving Abroad 101 (content/moving-abroad-101-course): where that course teaches
// the general relocation framework (visa categories, choosing a country, timeline, keeping U.S.
// ties), this course narrows in on what changes when the person moving is retired and living on
// Social Security, a pension, and/or savings rather than a paycheck — Social Security payments
// abroad, retirement/passive-income visas, taxes on retirement income, Medicare's lack of
// coverage abroad, and estate/beneficiary questions. It points to Moving Abroad 101 and Taxes for
// Americans Abroad (content/taxes-americans-abroad-course) rather than duplicating their depth,
// and forward-references a not-yet-built Healthcare Abroad companion course the same way Moving
// Abroad 101 does.
//
// AUTHORITATIVE-VALUES RULE (load-bearing here): Social Security's country-restriction list, visa
// income/pension thresholds, U.S. tax filing thresholds and estate-tax exclusion amounts, and
// Medicare's coverage rules are all set by government agencies and can change (SSA's restricted-
// country list changes with U.S. sanctions policy; IRS thresholds adjust annually; destination
// countries revise visa requirements unilaterally). This course never asserts a dollar figure or a
// country-restriction list as a permanent fact — it teaches the structure and repeatedly points
// the learner to the official, current source (ssa.gov's Payments Abroad Screening Tool, the
// destination country's own immigration authority, irs.gov, medicare.gov) to confirm specifics
// before acting.
//
// Every claim is cited APA 7 in-line to a verified, authoritative source: the Social Security
// Administration (ssa.gov/international — payments abroad and the Payments Abroad Screening
// Tool), the U.S. Department of State (travel.state.gov's retirement-abroad and country-
// information pages), the IRS (worldwide-income filing requirements, including estate/gift tax
// filing), Medicare.gov (coverage outside the United States), and two destination-government
// immigration authorities used as concrete, verified examples of official retirement/passive-
// income visa categories: Portugal's national visa portal (vistos.mne.gov.pt) and Panama's
// Servicio Nacional de Migración (migracion.gob.pa). Every citation was verified against the live
// official source (fetched directly, or via search results that quote the live page) before
// authoring — no fabricated country rules, no fabricated characters, no "AI tells."
//
// This course is EDUCATIONAL ONLY — not financial, tax, legal, or immigration advice. It says so
// repeatedly and points to the professionals and official tools each topic actually requires.
//
// Ends with a quiz whose every question links back to the lesson that teaches the answer
// (the quiz standard).

import type { AuthoredCourse } from "./authored-course";

export const RETIRING_ABROAD_COURSE: AuthoredCourse = {
  title: "Retiring Abroad",
  description:
    "For U.S. citizens considering retiring in another country: whether Social Security payments keep coming (and the Payments Abroad Screening Tool that checks your specific country), the high-level landscape of retirement and passive-income visas, why the U.S. still taxes your worldwide retirement income, why Medicare doesn't travel with you, a retirement-specific take on choosing a country and budgeting a fixed income, estate and beneficiary questions to raise with a professional, and a planning checklist to pull it together. Cited throughout to ssa.gov, travel.state.gov, irs.gov, and medicare.gov. Educational only, not financial, tax, legal, or immigration advice.",
  lessons: [
    {
      slug: "retiring-abroad-big-picture",
      title: "1 · Retiring abroad: the big picture",
      body: `Retiring in another country is a specific kind of move: unlike relocating for a job or school, your income in retirement is typically **Social Security, a pension, and/or savings** rather than local employment. That changes which questions matter most, and it's why this course exists as a focused companion to this platform's broader **Moving Abroad 101** course rather than repeating it.

**This course is educational only, not financial, tax, legal, or immigration advice.** Every topic here touches rules set by a government agency (the Social Security Administration, the IRS, Medicare, or a destination country's immigration authority), and those rules change. This course teaches you the landscape and the vocabulary, then points you to the official tool or professional each topic actually requires before you rely on anything for your own retirement plan.

Six planning areas make up the retiring-abroad landscape, and this course covers each in turn:

1. **Social Security payments abroad**, whether your benefits keep coming, and how to check your specific destination (Lesson 2).
2. **Retirement and passive-income visas**, the visa category many countries offer people living on non-work income (Lesson 3).
3. **Taxes in retirement**, the U.S. taxes worldwide income no matter where you retire (Lesson 4).
4. **Healthcare in retirement**, Medicare's coverage gap abroad, and what to do about it (Lesson 5).
5. **Cost of living and choosing a country**, budgeting a fixed retirement income against a new country's costs (Lesson 6).
6. **Estate and beneficiary considerations**, what continues to apply, and what a local professional needs to confirm (Lesson 7).

As the Department of State's own guidance on retiring abroad puts it, planning covers "your finances, health care, and safety," and "[l]aws on immigration and residency are very different from place to place", meaning nothing in this course substitutes for confirming your destination's current rules directly (U.S. Department of State, n.d.-a).

:::reveal Name the six planning areas this course covers for retiring abroad. ||| Social Security payments abroad, retirement/passive-income visas, taxes in retirement, healthcare (Medicare's coverage gap), cost of living and choosing a country, and estate/beneficiary considerations.

## Sources
- U.S. Department of State, Bureau of Consular Affairs. (n.d.-a). Retirement. Travel.State.gov. https://travel.state.gov/content/travel/en/international-travel/while-abroad/retirement-abroad.html`,
    },
    {
      slug: "social-security-payments-abroad",
      title: "2 · Social Security payments while living abroad",
      body: `The question most retirees ask first: **does my Social Security check still show up if I live abroad?** For most U.S. citizens, yes.

**The general rule.** If you are a U.S. citizen, you may generally continue receiving your Retirement, Survivors, or Disability Insurance (Social Security) payments while living outside the United States, as long as you remain eligible for them (Social Security Administration, n.d.-a). This is different from the rule for **non-citizens**, whose payments generally stop after six consecutive calendar months outside the U.S. unless a specific exception applies, a distinction worth knowing if your spouse or a family member receiving benefits isn't a U.S. citizen (Social Security Administration, n.d.-a).

**The exceptions, a short list of restricted countries.** U.S. Treasury Department regulations flatly prohibit sending Social Security payments to anyone living in **Cuba** or **North Korea**, no exceptions. A second, shorter list of countries has **general restrictions with possible exceptions** for eligible people who meet specific conditions; this list has historically included countries such as Azerbaijan, Belarus, Kazakhstan, Kyrgyzstan, Tajikistan, Turkmenistan, and Uzbekistan (Social Security Administration, n.d.-a). Because this list is tied to U.S. sanctions policy, it can change, this course does not treat it as fixed.

**Check your own situation before you move.** The SSA's **Payments Abroad Screening Tool** answers this precisely for your case: a short questionnaire tells you whether your specific payments will continue indefinitely, stop after six months, or run into a country-specific restriction (Social Security Administration, n.d.-b). Run it for your actual destination, don't rely on this lesson's general list, before finalizing any retirement move.

:::reveal Which two countries have a complete ban on Social Security payments being sent, and what tool checks any destination's specific status? ||| Cuba and North Korea, per U.S. Treasury Department regulations, no exceptions. The SSA's Payments Abroad Screening Tool checks your own specific situation and destination.

## Sources
- Social Security Administration. (n.d.-a). Payments outside the United States. https://www.ssa.gov/international/payments.html
- Social Security Administration. (n.d.-b). Payments Abroad Screening Tool. https://www.ssa.gov/international/payments_outsideUS.html`,
      recallContent: [
        {
          prompt: "Name the six planning areas this course covers for retiring abroad.",
          answer:
            "Social Security payments abroad, retirement/passive-income visas, taxes in retirement, healthcare (Medicare's coverage gap), cost of living and choosing a country, and estate/beneficiary considerations.",
        },
        {
          prompt: "As a U.S. citizen, does living abroad generally stop your Social Security payments?",
          answer:
            "Generally no, U.S. citizens can typically keep receiving Social Security payments abroad if eligible, unlike non-citizens (whose payments generally stop after six months abroad), but always confirm your specific destination with the Payments Abroad Screening Tool.",
        },
      ],
    },
    {
      slug: "retirement-passive-income-visas",
      title: "3 · Retirement and passive-income visas: the high-level landscape",
      body: `Many countries offer a specific long-stay or residency visa category for people supporting themselves with **non-work income**, a pension, Social Security, or savings, rather than a local job. Moving Abroad 101's visa-category lesson covers the general shape of this category alongside work, study, family, and digital-nomad visas; this lesson zooms in on two verified, concrete examples of how real governments define it.

**Portugal.** The Portuguese Ministry of Foreign Affairs' official national visa portal lists, under its "fixed residency" visas, a "**residency visa for retirement purposes, religious purposes or for people living from passive income**" (Ministério dos Negócios Estrangeiros de Portugal, n.d.), a government-published category built specifically for retirees and people living on pensions, investment income, or similar passive sources, distinct from a work or study visa.

**Panama.** Panama's **Servicio Nacional de Migración** (National Migration Service) lists a "**Jubilado Pensionado**" ("Retiree/Pensioner") category under its permanent-residency permits, alongside a related "Rentista Retirado" (retired rentier) category for people living on investment income (Servicio Nacional de Migración de Panamá, n.d.). Like most retirement-visa programs, it generally requires proof of a qualifying, guaranteed lifetime pension or income stream, the exact minimum amount is set by Panama and subject to change, so this course does not print a figure; confirm the current requirement directly with Panama's official migration authority or its embassy/consulate.

**The pattern to expect elsewhere.** Most retirement/passive-income visa programs share this shape: proof your income is pension, Social Security, savings, or investment-based (not local employment); a minimum income or asset threshold set by that country; and sometimes additional requirements like health insurance or a clean background check. The category names, thresholds, and documentation differ by country and change over time, treat this lesson as a map of what to look for, then confirm the current rules with your destination's own official immigration authority, exactly as Moving Abroad 101's "getting authoritative help" lesson recommends.

:::reveal Name two countries with a verified, official retirement/passive-income visa category, and what each generally requires proof of. ||| Portugal's residency visa "for retirement purposes... or for people living from passive income," and Panama's Jubilado Pensionado visa, which generally requires proof of a qualifying guaranteed lifetime pension or income stream (current minimum amounts must be confirmed officially).

## Sources
- Ministério dos Negócios Estrangeiros de Portugal [Portuguese Ministry of Foreign Affairs]. (n.d.). Type of visa – general information. Vistos.MNE.gov.pt. https://vistos.mne.gov.pt/en/national-visas/general-information/type-of-visa
- Servicio Nacional de Migración de Panamá [Panama National Migration Service]. (n.d.). Permisos migratorios [Migratory permits]. Gobierno de Panamá. https://www.migracion.gob.pa/permisos-migratorios/`,
      recallContent: [
        {
          prompt: "Which two countries have a complete ban on Social Security payments being sent, and what tool checks any destination's specific status?",
          answer:
            "Cuba and North Korea, per U.S. Treasury Department regulations. The SSA's Payments Abroad Screening Tool checks your own specific situation and destination.",
        },
        {
          prompt: "What does Panama's official migration authority call its pension-based permanent residency category?",
          answer: "Jubilado Pensionado (Retiree/Pensioner), alongside a related Rentista Retirado (retired rentier) category for investment income.",
        },
      ],
    },
    {
      slug: "taxes-in-retirement-abroad",
      title: "4 · Taxes in retirement: the U.S. still taxes worldwide income",
      body: `Retiring abroad does not end your U.S. tax obligations, and that includes retirement income specifically, not just wages.

**The core rule.** If you are a U.S. citizen or resident living outside the United States, you generally must file income tax returns, estate tax returns, and gift tax returns, and pay estimated tax, "**in the same way as those residing in the United States**" (Internal Revenue Service, n.d.). This applies to your **worldwide** income, Social Security benefits, pension distributions, retirement account withdrawals, and investment income are all part of that, regardless of where you live when you receive them. Whether you must file at all depends on your gross income, filing status, and age, per the thresholds published in **IRS Publication 54**, this course does not print a specific dollar threshold, since it's set by the IRS and adjusts (Internal Revenue Service, n.d.).

**A retirement-specific wrinkle: the Foreign Earned Income Exclusion does not apply to retirement income.** Workers abroad can often exclude a portion of *earned* income (wages, self-employment income) from U.S. tax using the Foreign Earned Income Exclusion (Form 2555). Retirement income doesn't qualify: Social Security benefits, pensions, and annuity income are not "earned income," so this exclusion, the main U.S. tax break available to Americans working abroad, generally does not reduce tax owed on retirement income the way it can for a paycheck. The Foreign Tax Credit (for tax paid to your new country of residence) may still apply and is covered, along with the exclusion, in this platform's full **Taxes for Americans Abroad** course.

**Estate and gift taxes keep applying too.** The same IRS filing-requirements guidance that covers income tax explicitly extends to estate and gift tax returns for citizens abroad (Internal Revenue Service, n.d.), Lesson 7 picks this up from the estate-planning side.

**This is educational, not tax advice.** Retirement income taxation interacts with your destination country's own tax rules, tax treaties, and your specific accounts in ways a general course cannot resolve for you, confirm your situation with a cross-border tax professional and at irs.gov, and see the **Taxes for Americans Abroad** course for the fuller picture (Foreign Tax Credit, FBAR, FATCA, and more).

:::reveal Does retiring abroad let you exclude your Social Security or pension income from U.S. tax the way the Foreign Earned Income Exclusion can for wages? ||| No, the Foreign Earned Income Exclusion only applies to earned income (wages, self-employment). Social Security, pensions, and annuity income aren't earned income, so that exclusion generally doesn't apply to retirement income; the Foreign Tax Credit may still help.

## Sources
- Internal Revenue Service. (n.d.). U.S. citizens and residents abroad filing requirements. https://www.irs.gov/individuals/international-taxpayers/us-citizens-and-residents-abroad-filing-requirements`,
      recallContent: [
        {
          prompt: "What does Panama's official migration authority call its pension-based permanent residency category?",
          answer: "Jubilado Pensionado (Retiree/Pensioner), alongside a related Rentista Retirado category for investment income.",
        },
        {
          prompt: "Does moving abroad change a U.S. citizen's obligation to file estate and gift tax returns?",
          answer:
            "No, the IRS's filing-requirements guidance for citizens abroad explicitly covers estate tax returns and gift tax returns too, filed the same way as if living in the U.S.",
        },
      ],
    },
    {
      slug: "healthcare-in-retirement-medicare",
      title: "5 · Healthcare in retirement: Medicare doesn't travel",
      body: `The single biggest healthcare surprise for retirees moving abroad: **Medicare generally does not go with you.**

**The core rule.** In most situations, Medicare will not pay for health care or supplies you get outside the United States, where "outside the U.S." means anywhere other than the 50 states, D.C., Puerto Rico, the U.S. Virgin Islands, Guam, American Samoa, and the Northern Mariana Islands (Centers for Medicare & Medicaid Services, n.d.). If you retire to Portugal, Panama, Mexico, or almost anywhere else outside that list, your Medicare coverage generally does not follow you there.

**The narrow exceptions**, worth knowing, but not something to plan a retirement around:
- Traveling through **Canada** without unreasonable delay, by the most direct route, between Alaska and another U.S. state, when a medical emergency happens and the Canadian hospital is closer than the nearest adequate U.S. hospital.
- Living in the U.S. near a foreign border, where a **foreign hospital is closer** to your home than the nearest U.S. hospital that can treat your condition, this is about proximity for U.S. residents, not coverage for someone living abroad full-time.
- Limited **cruise-ship** situations, generally only when the ship is within six hours of a U.S. port and specific conditions are met.

(Centers for Medicare & Medicaid Services, n.d.)

None of these exceptions apply to the situation this course is about: living in another country as a retiree. **Some Medigap (Medicare Supplement Insurance) plans include limited emergency foreign-travel coverage**, but that's designed for a trip, not for someone who has relocated, and terms vary by plan, so confirm directly with your own Medigap insurer rather than assuming it applies.

**What the Department of State recommends instead:** obtain private health insurance that covers medical and dental treatment, plus **medical evacuation**, in your destination country (U.S. Department of State, n.d.-a). This platform's forthcoming **Healthcare Abroad** companion course goes deeper on evaluating private international health insurance and understanding a destination's local healthcare system, this lesson is the pointer that Medicare alone will not cover you, not the full healthcare-abroad guide.

:::reveal Does Medicare generally cover your healthcare costs if you retire and live abroad? What should the Department of State's guidance push you toward instead? ||| No, Medicare generally doesn't cover care outside the U.S. (with only narrow, situational exceptions that don't apply to living abroad). The Department of State recommends private health insurance covering medical, dental, and medical evacuation in your destination country.

## Sources
- Centers for Medicare & Medicaid Services. (n.d.). Travel outside the U.S. Medicare.gov. https://www.medicare.gov/coverage/travel-outside-the-u.s.
- U.S. Department of State, Bureau of Consular Affairs. (n.d.-a). Retirement. Travel.State.gov. https://travel.state.gov/content/travel/en/international-travel/while-abroad/retirement-abroad.html`,
      recallContent: [
        {
          prompt: "Does retiring abroad let you exclude your Social Security or pension income from U.S. tax the way the Foreign Earned Income Exclusion can for wages?",
          answer:
            "No, that exclusion only applies to earned income. Social Security, pensions, and annuities aren't earned income, so it generally doesn't apply to retirement income.",
        },
        {
          prompt: "Name one of Medicare's narrow exceptions for coverage outside the U.S., and why none of them help a retiree who has relocated abroad.",
          answer:
            "Examples: a Canada-route emergency between Alaska and another U.S. state, a foreign hospital closer than the nearest U.S. hospital for a U.S. resident, or a limited cruise-ship situation near a U.S. port. None apply to someone who has actually relocated and lives abroad full-time.",
        },
      ],
    },
    {
      slug: "cost-of-living-choosing-a-country",
      title: "6 · Cost of living and choosing a country, on a fixed retirement income",
      body: `Moving Abroad 101's six-factor framework, visa accessibility, cost of living, healthcare, taxes, language, and safety, still applies when the person moving is a retiree. This lesson doesn't repeat that framework; it adds the twist that matters most for retirement specifically: **you're very likely budgeting against a fixed or semi-fixed income**, not a paycheck that can grow with a promotion.

**Budget against your actual retirement income, not a national average.** Cost-of-living comparisons you'll find online are estimates, not guarantees, the honest test is whether your specific Social Security, pension, and savings income covers your specific destination's housing, groceries, transportation, and healthcare costs (as flagged generally in Moving Abroad 101's framework), with room left for the unexpected.

**Currency risk compounds over a long retirement.** A retirement can span decades, and exchange rates move over decades too. If your income arrives in U.S. dollars but your expenses are in another currency, a favorable exchange rate when you move is not guaranteed to stay favorable for the rest of your retirement, budget with a buffer, and revisit the math periodically rather than assuming the rate on moving day is permanent.

**Confirm healthcare access and cost specifically as a retiree.** Lesson 5 covered Medicare's coverage gap; when you're choosing a country, that translates into a practical question: what does adequate private health insurance cost for someone your age in this specific country, and is it even available to you at your age or with your health history? Insurance affordability and availability can both depend heavily on age, so this is worth confirming for your own situation before you commit to a country, not after.

**Keep researching safety and stability the same way Moving Abroad 101 recommends**, the Department of State's country-by-country information pages, including its Travel Advisory levels, are the same tool whether you're moving for work or for retirement (U.S. Department of State, n.d.-b).

:::reveal What retirement-specific twist does this lesson add to Moving Abroad 101's six-factor framework? ||| Budgeting against a fixed retirement income (Social Security, pension, savings) rather than a paycheck, accounting for currency-exchange-rate risk over a potentially decades-long retirement, and confirming healthcare access and cost specifically for your age before committing to a country.

## Sources
- U.S. Department of State, Bureau of Consular Affairs. (n.d.-a). Retirement. Travel.State.gov. https://travel.state.gov/content/travel/en/international-travel/while-abroad/retirement-abroad.html
- U.S. Department of State, Bureau of Consular Affairs. (n.d.-b). International travel country information pages ("Learn about your destination"). Travel.State.gov. https://travel.state.gov/content/travel/en/international-travel/International-Travel-Country-Information-Pages.html`,
      recallContent: [
        {
          prompt: "Name one of Medicare's narrow exceptions for coverage outside the U.S., and why none of them help a retiree who has relocated abroad.",
          answer:
            "Examples: a Canada-route emergency, a foreign hospital closer than the nearest U.S. hospital for a U.S. resident, or a limited cruise-ship situation. None apply to someone who has actually relocated abroad full-time.",
        },
        {
          prompt: "Why does currency risk matter more for a retiree moving abroad than for a shorter-term move?",
          answer:
            "Because retirement can span decades, and exchange rates can shift substantially over that time, a favorable rate on moving day isn't guaranteed to last, so retirees should budget with a buffer and revisit the math periodically.",
        },
      ],
    },
    {
      slug: "estate-and-beneficiary-considerations",
      title: "7 · Estate and beneficiary considerations, at a high level",
      body: `Retiring abroad raises two separate estate-related questions, one about continuing U.S. obligations, one about whether your existing documents still work in your new country. This lesson introduces both at a high level; neither is a substitute for a professional who knows your specific situation.

**U.S. estate and gift tax obligations continue, based on worldwide assets.** As Lesson 4 introduced, the same IRS guidance that covers income tax filing for citizens abroad states they must also file "estate tax returns, and gift tax returns... in the same way as those residing in the United States" (Internal Revenue Service, n.d.). Living abroad doesn't remove your estate from U.S. tax jurisdiction, it's based on citizenship and worldwide assets, not where you happen to live when you die.

**Whether your U.S. will, trust, and powers of attorney work in your new country is a separate question, and this course cannot answer it for you.** The Department of State's own retirement-abroad guidance recommends you "consult professionals" to determine whether your trust, will, and powers of attorney will be enforceable in your destination country, since local law varies (U.S. Department of State, n.d.-a). A U.S. embassy or consulate can typically provide a list of local English-speaking lawyers as a starting point (U.S. Department of State, n.d.-a).

**Two practical follow-ups worth raising with your own estate attorney and financial institutions**, though this course does not assert specific rules for them:
- Whether you need a **second, local will** covering assets in your destination country (some countries require or strongly recommend this), and how it should be coordinated with your U.S. will so the two don't conflict.
- Whether your **beneficiary designations**, on retirement accounts, life insurance, and financial accounts, are current and whether living abroad changes anything about how they're administered.

**The takeaway:** treat estate planning as one of the professional consultations you schedule before finalizing a move, alongside the cross-border tax professional from Lesson 4, not something to resolve from a course, a blog, or a forum.

:::reveal Name the two separate estate-related questions this lesson raises, and who resolves each. ||| (1) Whether U.S. estate/gift tax still applies based on worldwide assets, yes, per IRS filing rules, regardless of where you live. (2) Whether your existing will, trust, and powers of attorney are enforceable in your new country, a question for a local/cross-border estate attorney, not this course.

## Sources
- Internal Revenue Service. (n.d.). U.S. citizens and residents abroad filing requirements. https://www.irs.gov/individuals/international-taxpayers/us-citizens-and-residents-abroad-filing-requirements
- U.S. Department of State, Bureau of Consular Affairs. (n.d.-a). Retirement. Travel.State.gov. https://travel.state.gov/content/travel/en/international-travel/while-abroad/retirement-abroad.html`,
      recallContent: [
        {
          prompt: "Why does currency risk matter more for a retiree moving abroad than for a shorter-term move?",
          answer:
            "Because retirement can span decades, and exchange rates can shift substantially over that time, retirees should budget with a buffer and revisit the math periodically.",
        },
        {
          prompt: "Does living abroad remove a U.S. citizen's estate from U.S. estate tax obligations?",
          answer:
            "No, U.S. estate and gift tax filing obligations continue based on citizenship and worldwide assets, the same as if living in the United States.",
        },
      ],
    },
    {
      slug: "planning-steps-and-next-moves",
      title: "8 · Planning steps: building your retirement-abroad timeline",
      body: `Pulling every lesson together into an order of operations. None of these steps is exotic on its own, the value is doing them **in this order**, before you commit to dates, a lease, or a one-way ticket.

1. **Run the SSA's Payments Abroad Screening Tool for your actual destination** (Lesson 2), don't rely on a general list of restricted countries; check your specific case (Social Security Administration, n.d.-b).
2. **Confirm your destination's current retirement/passive-income visa requirements directly with its official immigration authority** (Lesson 3), not from this course, a forum, or a relocation blog, since requirements and thresholds change.
3. **Talk to a cross-border tax professional** about your specific Social Security, pension, and investment income (Lesson 4), and see this platform's full **Taxes for Americans Abroad** course for the deeper mechanics (Foreign Tax Credit, FBAR, FATCA).
4. **Arrange private international health insurance, including medical evacuation coverage**, since Medicare will not follow you (Lesson 5); this platform's forthcoming **Healthcare Abroad** course will go deeper on evaluating options.
5. **Budget your specific fixed income against your destination's real costs**, with a currency-risk buffer (Lesson 6).
6. **Consult a local or cross-border estate attorney** about your will, trust, and powers of attorney (Lesson 7).
7. **Enroll in the Smart Traveler Enrollment Program (STEP)** so the nearest U.S. embassy or consulate can reach you in an emergency, and keep your passport valid well past your move date (U.S. Department of State, n.d.-a).
8. **Keep your U.S. ties in order**, voting, mail, and banking all continue to matter after you move, and this platform's **Moving Abroad 101** course covers each in depth, including the Federal Voting Assistance Program and FATCA's effect on foreign bank accounts.

**The habit that ties it together:** treat this as a checklist to work through in roughly this order, months before your target move date, not a set of tasks to rush through in the final weeks. Every step here points to either an official tool (the SSA screening tool, STEP) or a professional (a tax advisor, an estate attorney, the destination's own immigration authority) precisely because this course's job is to map the landscape, not to substitute for the people and tools who can confirm your specific situation.

:::reveal List three of the planning steps this lesson recommends, in roughly the right order. ||| Any three, roughly in order: run the SSA Payments Abroad Screening Tool, confirm the destination's current visa requirements officially, consult a cross-border tax professional, arrange private international health insurance, budget with a currency buffer, consult an estate attorney, enroll in STEP, and keep U.S. ties (voting/mail/banking) in order.

## Sources
- U.S. Department of State, Bureau of Consular Affairs. (n.d.-a). Retirement. Travel.State.gov. https://travel.state.gov/content/travel/en/international-travel/while-abroad/retirement-abroad.html
- Social Security Administration. (n.d.-b). Payments Abroad Screening Tool. https://www.ssa.gov/international/payments_outsideUS.html`,
      recallContent: [
        {
          prompt: "Does living abroad remove a U.S. citizen's estate from U.S. estate tax obligations?",
          answer: "No, U.S. estate and gift tax filing obligations continue based on citizenship and worldwide assets.",
        },
        {
          prompt: "Why does this course recommend running the SSA's Payments Abroad Screening Tool for your actual destination, rather than relying on the general restricted-country list from Lesson 2?",
          answer:
            "Because the restricted-country list is tied to changing U.S. sanctions policy, and the tool checks your specific, current situation rather than a general list that could be out of date.",
        },
      ],
    },
    {
      slug: "retiring-abroad-checklist-practice",
      title: "9 · Practice: build your retiring-abroad planning checklist",
      exercise: {
        instructions:
          "Fill in each blank with the term from this course, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt: "The SSA tool that tells you whether your Social Security payments will continue, stop, or hit a country restriction is the ___.",
            answer: "Payments Abroad Screening Tool",
            explanation: "Run it for your actual destination rather than relying on a general list of restricted countries.",
          },
          {
            prompt: "The two countries where Social Security payments are completely prohibited by U.S. Treasury regulations are Cuba and ___.",
            answer: "North Korea",
            explanation: "A short second list of countries has restrictions with possible exceptions instead of a complete ban.",
          },
          {
            prompt: "Panama's official pension-based permanent residency category is called ___.",
            answer: "Jubilado Pensionado",
            accept: ["jubilado-pensionado", "retiree pensioner", "retiree/pensioner"],
            explanation: "Alongside a related Rentista Retirado category for people living on investment income.",
          },
          {
            prompt: "U.S. citizens abroad are taxed on their ___ income, including Social Security and pension income, not just income earned in the U.S.",
            answer: "worldwide",
            explanation: "The same IRS guidance also requires estate and gift tax returns to keep being filed.",
          },
          {
            prompt: "The Foreign Earned Income Exclusion generally does not apply to Social Security or pension income because those aren't considered ___ income.",
            answer: "earned",
            explanation: "The exclusion only applies to wages and self-employment income, not retirement income.",
          },
          {
            prompt: "The federal health program that generally does NOT cover healthcare costs for retirees living abroad is ___.",
            answer: "Medicare",
            explanation: "The Department of State recommends private international health insurance with medical evacuation coverage instead.",
          },
          {
            prompt: "The official U.S. program that lets travelers and expatriates register their trip or move so the nearest embassy can reach them in an emergency is ___.",
            answer: "STEP",
            accept: ["smart traveler enrollment program"],
            explanation: "Enroll before you move, and keep your passport valid well past your move date.",
          },
          {
            prompt: "Before finalizing a retirement move abroad, this course recommends consulting a cross-border tax professional and a local ___ attorney about your will, trust, and powers of attorney.",
            answer: "estate",
            explanation: "Whether your existing U.S. documents are enforceable abroad varies by country and needs a professional's confirmation.",
          },
        ],
      },
    },
    {
      slug: "retiring-abroad-quiz",
      title: "10 · Check your understanding",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "As a U.S. citizen, does moving abroad generally stop your Social Security payments?",
            options: [
              "Yes, payments stop the day you leave the U.S.",
              "Generally no, U.S. citizens can typically keep receiving payments abroad if eligible, unlike non-citizens (whose payments generally stop after six months)",
              "Only if you notify the SSA in writing",
              "Payments only continue if you keep a U.S. mailing address",
            ],
            correctIndex: 1,
            explanation:
              "U.S. citizens can generally continue receiving Social Security payments abroad if eligible. Non-citizens face a different rule: payments generally stop after six consecutive months outside the U.S. unless an exception applies.",
            sourceLessonSlug: "social-security-payments-abroad",
          },
          {
            prompt: "Which two countries have a complete, no-exceptions ban on Social Security payments being sent there?",
            options: ["Mexico and Portugal", "Panama and Costa Rica", "Cuba and North Korea", "Canada and the United Kingdom"],
            correctIndex: 2,
            explanation:
              "U.S. Treasury Department regulations completely prohibit sending Social Security payments to Cuba or North Korea. A separate, shorter list of countries has restrictions with possible exceptions instead.",
            sourceLessonSlug: "social-security-payments-abroad",
          },
          {
            prompt: "What does Portugal's official national visa portal call its visa category for retirees and people living on passive income?",
            options: [
              "The 'Golden Visa'",
              "A 'residency visa for retirement purposes... or for people living from passive income'",
              "It does not offer any retirement-specific visa",
              "The 'Digital Nomad Visa'",
            ],
            correctIndex: 1,
            explanation:
              "Portugal's official visa portal explicitly lists this category, distinct from its digital-nomad and other visa types, under its fixed-residency visas.",
            sourceLessonSlug: "retirement-passive-income-visas",
          },
          {
            prompt: "Does the Foreign Earned Income Exclusion generally reduce U.S. tax owed on Social Security or pension income?",
            options: [
              "Yes, the same way it does for wages",
              "No, that exclusion only applies to earned income (wages/self-employment), and retirement income isn't earned income",
              "Only for people over age 70",
              "Only if the pension is paid by a foreign employer",
            ],
            correctIndex: 1,
            explanation:
              "The Foreign Earned Income Exclusion applies to earned income only. Social Security, pensions, and annuities are not earned income, so this exclusion generally doesn't apply to them; the Foreign Tax Credit may still help.",
            sourceLessonSlug: "taxes-in-retirement-abroad",
          },
          {
            prompt: "Does moving abroad end a U.S. citizen's estate and gift tax filing obligations?",
            options: [
              "Yes, once you establish residency elsewhere",
              "No, the same IRS guidance covering income tax filing abroad also requires estate and gift tax returns, based on worldwide assets",
              "Only estates over $1 million must still file",
              "Only if the person dies within the U.S.",
            ],
            correctIndex: 1,
            explanation:
              "The IRS's filing-requirements guidance for citizens abroad explicitly extends to estate tax returns and gift tax returns, filed the same way as if living in the U.S.",
            sourceLessonSlug: "taxes-in-retirement-abroad",
          },
          {
            prompt: "Does Medicare generally cover healthcare costs for a retiree who has relocated to live abroad?",
            options: [
              "Yes, anywhere in the world",
              "No, Medicare generally doesn't cover care outside the U.S., and its narrow exceptions don't apply to someone who has relocated abroad",
              "Only in countries with a U.S. military base",
              "Only for emergency care, everywhere",
            ],
            correctIndex: 1,
            explanation:
              "Medicare generally doesn't pay for care outside the U.S. Its narrow exceptions (a Canada-route emergency, a nearer foreign hospital for a U.S. resident, limited cruise-ship situations) don't apply to someone actually living abroad.",
            sourceLessonSlug: "healthcare-in-retirement-medicare",
          },
          {
            prompt: "What retirement-specific twist does this course add to Moving Abroad 101's six-factor framework for choosing a country?",
            options: [
              "Ignoring cost of living entirely",
              "Budgeting a fixed retirement income against currency risk over a long retirement, and confirming age-specific healthcare access and cost",
              "Only considering countries with no income tax",
              "Choosing based solely on climate",
            ],
            correctIndex: 1,
            explanation:
              "Because retirees are typically living on a fixed income (Social Security, pension, savings) over a potentially decades-long retirement, this course adds currency-risk budgeting and confirming healthcare access/cost specifically for your age.",
            sourceLessonSlug: "cost-of-living-choosing-a-country",
          },
          {
            prompt: "According to the Department of State's retirement-abroad guidance, who should you consult about whether your U.S. will, trust, and powers of attorney are enforceable in your destination country?",
            options: [
              "No one, U.S. estate documents automatically apply everywhere",
              "Professionals (e.g., a local or cross-border estate attorney), since enforceability varies by country",
              "Only the destination country's tax office",
              "This course provides a definitive answer for every country",
            ],
            correctIndex: 1,
            explanation:
              "The Department of State recommends consulting professionals to determine whether existing estate documents are enforceable abroad, since local law varies, a U.S. embassy or consulate can typically suggest local English-speaking lawyers.",
            sourceLessonSlug: "estate-and-beneficiary-considerations",
          },
          {
            prompt: "Which planning step does this course recommend running for your ACTUAL destination, rather than relying on a general list?",
            options: [
              "The SSA's Payments Abroad Screening Tool",
              "A generic online cost-of-living calculator",
              "A travel blog's visa checklist",
              "None, general lists are always sufficient",
            ],
            correctIndex: 0,
            explanation:
              "Because the restricted-country list for Social Security payments is tied to changing U.S. sanctions policy, this course recommends running the Payments Abroad Screening Tool for your specific, current situation.",
            sourceLessonSlug: "planning-steps-and-next-moves",
          },
        ],
      },
    },
  ],
};
