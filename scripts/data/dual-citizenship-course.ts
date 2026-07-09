// "Dual Citizenship & Renunciation Basics" — a Learn.WitUS course in the "Travel & Living
// Abroad" category. Plain-language and strictly non-partisan: this course explains WHAT dual
// nationality is, that U.S. law permits it, the general (country-varies) ways a second
// citizenship is acquired, the practical implications of holding two citizenships, and the
// formal process for renouncing U.S. citizenship — presented factually, neither encouraged
// nor discouraged. Educational only, not legal or tax advice.
//
// AUTHORITATIVE-VALUES RULE (load-bearing here): the OTHER country's citizenship and dual-
// nationality rules vary enormously and are not something this course can enumerate — every
// lesson that touches "how you'd acquire or keep a second citizenship" points the learner to
// that country's own citizenship/immigration authority rather than asserting a rule that only
// holds for some countries. The renunciation fee is also explicitly time-stamped (the Department
// of State cut it from $2,350 to $450, effective April 13, 2026) rather than treated as a
// permanent number — confirm the current fee at travel.state.gov before relying on it. The
// exit-tax dollar thresholds (net worth, average net income tax) are inflation-adjusted most
// years and are shown only as a multi-year pattern, with a pointer to confirm the current figure
// at irs.gov.
//
// Cited to authoritative sources verified live during authoring: the U.S. Department of State's
// travel.state.gov (Dual Nationality; Relinquishing U.S. Nationality; Oath of Renunciation of
// U.S. Citizenship — INA 349(a)(5); the Federal Register fee-reduction rule), USCIS (the
// Naturalization Oath of Allegiance and its Policy Manual chapter, for the "doesn't require
// giving up your other citizenship" point), and the IRS (the expatriation tax under IRC 877A,
// Form 8854, and the Relief Procedures for Certain Former Citizens). Cross-references the
// "Taxes for Americans Abroad" course rather than duplicating its FEIE/FBAR/FATCA content.
//
// Ends with a quiz whose every question links back to the lesson that teaches the answer
// (the quiz standard).

import type { AuthoredCourse } from "./authored-course";

export const DUAL_CITIZENSHIP_COURSE: AuthoredCourse = {
  title: "Dual Citizenship & Renunciation Basics",
  description:
    "A plain-language, non-partisan guide to holding two citizenships and to formally giving up U.S. citizenship: what dual nationality is and that U.S. law permits it, the general ways a second citizenship is acquired (by descent, naturalization, or marriage — rules vary by country), the practical implications (which passport to use, taxes, military service and other obligations), and the formal, in-person, irrevocable process for renouncing U.S. citizenship before a consular officer, including its tax consequences. This course takes no position on whether to acquire or renounce a citizenship — it explains how the systems work. Cited to the U.S. Department of State, USCIS, and the IRS. Educational only, not legal or tax advice.",
  lessons: [
    // ── Section 1: Understanding Dual Nationality ──────────────────────────
    {
      slug: "what-is-dual-nationality",
      title: "1 · What is dual nationality, and does U.S. law allow it?",
      section: "Understanding Dual Nationality",
      body: `**A quick note before we start:** this course is educational, not legal or tax advice. It explains how dual nationality and renunciation work in general — it does not tell you whether either one is right for you, and it takes no position on immigration or citizenship policy.

**Dual nationality means being a national — a citizen — of two countries at the same time.** The U.S. Department of State puts it simply: "the concept of dual nationality means that a person is a national of two countries at the same time" (U.S. Department of State, n.d.-a). A person can end up a dual national in more than one way — for example, "a child born in a foreign country to U.S. national parents may be both a U.S. national and a national of the country of birth," or "an individual having one nationality at birth may naturalize at a later date in another country and become a dual national" (U.S. Department of State, n.d.-a). Lesson 2 covers the general categories in more detail.

**Does U.S. law require picking one?** No. The Department of State is direct about this: "U.S. law does not require a U.S. citizen to choose between U.S. citizenship and another (foreign) nationality" (U.S. Department of State, n.d.-a). The United States does not have a policy of stripping citizenship simply because someone also holds another nationality, and it does not ask most people to prove they've given up a foreign citizenship.

**One place this comes up directly: naturalizing as a U.S. citizen.** Someone naturalizing takes the Oath of Allegiance, which includes a line renouncing "all allegiance and fidelity to any foreign prince, potentate, state, or sovereignty" of which the applicant was previously a subject or citizen (U.S. Citizenship and Immigration Services, n.d.-a). Read on its own, that could sound like it requires giving up a prior citizenship outright. In practice, it doesn't: the U.S. government does not require a naturalizing citizen to take any legal step to formally renounce their country of origin's citizenship, and whether that other citizenship actually ends is a question for that **other country's** law, not U.S. law (U.S. Department of State, n.d.-a; U.S. Citizenship and Immigration Services, n.d.-a, n.d.-b). Many naturalized U.S. citizens keep their original citizenship for this exact reason.

**What dual nationality is NOT:** it is not the same as simply traveling or working abroad, and it is not something the United States assigns you — either you already hold another nationality (by that country's own law) or you don't. The next lesson covers the general ways a second citizenship comes about.

:::reveal Under U.S. law, must a U.S. citizen choose between U.S. citizenship and a second nationality? ||| No. The Department of State is explicit that U.S. law does not require a U.S. citizen to choose between U.S. citizenship and another nationality — the U.S. does not force a choice, though the other country's own law may.

## Sources
- U.S. Department of State. (n.d.-a). *Dual nationality*. https://travel.state.gov/content/travel/en/legal/travel-legal-considerations/Relinquishing-US-Nationality/Dual-Nationality.html
- U.S. Citizenship and Immigration Services. (n.d.-a). *Naturalization Oath of Allegiance to the United States of America*. https://www.uscis.gov/citizenship/learn-about-citizenship/the-naturalization-interview-and-test/naturalization-oath-of-allegiance-to-the-united-states-of-america
- U.S. Citizenship and Immigration Services. (n.d.-b). *Chapter 2 - The Oath of Allegiance*. USCIS Policy Manual, Volume 12, Part J. https://www.uscis.gov/policy-manual/volume-12-part-j-chapter-2`,
    },
    {
      slug: "how-a-second-citizenship-is-acquired",
      title: "2 · How people generally acquire a second citizenship",
      section: "Understanding Dual Nationality",
      recallContent: [
        {
          prompt: "Under U.S. law, must a U.S. citizen choose between U.S. citizenship and a second nationality?",
          answer:
            "No. U.S. law does not require a U.S. citizen to choose between U.S. citizenship and another nationality — the U.S. does not force a choice, though the other country's own law may.",
        },
      ],
      body: `Lesson 1 named the two broad patterns the Department of State describes — being born a dual national, or naturalizing elsewhere later in life (U.S. Department of State, n.d.-a). This lesson walks through the general categories people mean when they talk about "getting a second citizenship," at a high level. **Every one of these depends entirely on the other country's own citizenship law — this course cannot and does not tell you the rule for any specific country.**

- **By descent (jus sanguinis, "right of blood").** Many countries grant citizenship to the children — and sometimes grandchildren or more distant descendants — of their own citizens, wherever the child is born. Whether this applies to you, how many generations back it reaches, and what documentation it requires varies enormously by country: some countries recognize descent for multiple generations, others limit it to one, and some require the ancestor never to have lost their own citizenship. **Check with that country's own citizenship or nationality authority (often a consulate or embassy) — not a general summary — to find out if you qualify.**
- **By naturalization.** Just as the U.S. naturalizes people who meet its own eligibility rules (residency, language, and civics requirements — see this platform's *Citizenship & Naturalization Basics* course for how the U.S. side works), other countries naturalize applicants who meet **their** residency, language, and other requirements. Minimum residency periods, language tests, and required renunciations of prior citizenship (some countries do require this on **their** end, even though the U.S. doesn't) differ country to country.
- **By marriage.** Many countries offer a faster or modified path to citizenship for the spouse of one of their citizens — sometimes a shortened residency requirement, sometimes an entirely separate process. This is a matter of the other spouse's country's law, and marriage to a U.S. citizen does not, by itself, grant U.S. citizenship either — the foreign spouse of a U.S. citizen still generally goes through the immigration and naturalization process like anyone else (with some accelerated eligibility, as covered in *Citizenship & Naturalization Basics*).

**The throughline: acquiring a second citizenship is always governed by that country's law, not U.S. law.** The U.S. government's only real involvement is the negative one already covered in Lesson 1 — it doesn't stop you and doesn't require you to give up U.S. citizenship to do it (U.S. Department of State, n.d.-a). Anyone considering any of these paths should go to the specific country's own embassy, consulate, or citizenship authority for the actual, current rule, rather than a general description like this one.

:::reveal Name the three general ways this lesson describes for acquiring a second citizenship, and what do all three have in common? ||| Descent (through a parent or ancestor), naturalization in that country, and marriage to one of that country's citizens. All three are governed entirely by the other country's own law, which varies — not by U.S. law.

## Sources
- U.S. Department of State. (n.d.-a). *Dual nationality*. https://travel.state.gov/content/travel/en/legal/travel-legal-considerations/Relinquishing-US-Nationality/Dual-Nationality.html`,
    },

    // ── Section 2: Living With Two Citizenships ────────────────────────────
    {
      slug: "passports-entry-and-exit",
      title: "3 · Which passport to use: entry, exit, and travel rules",
      section: "Living With Two Citizenships",
      recallContent: [
        {
          prompt: "Name the three general ways people acquire a second citizenship, and what do all three have in common?",
          answer:
            "Descent, naturalization, and marriage — all three are governed entirely by the other country's own law, which varies by country.",
        },
      ],
      body: `Holding two citizenships raises a practical, recurring question: which passport do you actually use, and when?

**Entering and leaving the United States: always the U.S. passport.** The Department of State's rule is unambiguous: "U.S. nationals, including U.S. dual nationals, must use a U.S. passport to enter and leave the United States" (U.S. Department of State, n.d.-b). This isn't optional or a matter of convenience — it applies regardless of what other passport you also hold.

**Entering and leaving the other country of nationality: often that country's own passport or ID.** The Department of State notes that "when traveling to a country where you have U.S. and that country's nationality, you may need to use a passport from that country," and you may also need to show identification from that country (U.S. Department of State, n.d.-b). Some countries require their own nationals to enter and exit on that country's passport as a matter of their own law, even if the traveler primarily thinks of themselves as American.

**Practical takeaway:** a dual national typically carries **both** passports when traveling between the two countries — the U.S. one for U.S. border crossings, the other country's for that country's border crossings — and should confirm the specific rule for the second country before traveling, since practices vary.

**Exit bans are a related, separate risk.** The Department of State warns that "some countries may impose exit bans on individuals, including dual nationals, as an alternative to criminal detention or in civil or familial disputes," and that "while usually routine, in rare instances exit bans may be used coercively on people not facing charges" (U.S. Department of State, n.d.-b). Holding a second nationality can put someone more squarely within that country's legal reach than a foreign visitor would be. The Department's consistent advice: "research the dual nationality laws of your countries. This includes countries where you are a dual national, or where you want to naturalize" (U.S. Department of State, n.d.-a) — before you travel, and ideally before you naturalize elsewhere at all.

:::reveal When entering or leaving the United States, which passport must a U.S. dual national use? ||| The U.S. passport, always — the Department of State's rule applies regardless of what other passport the person also holds. Traveling to the other country of nationality may separately require that country's own passport.

## Sources
- U.S. Department of State. (n.d.-a). *Dual nationality*. https://travel.state.gov/content/travel/en/legal/travel-legal-considerations/Relinquishing-US-Nationality/Dual-Nationality.html
- U.S. Department of State. (n.d.-b). *Dual nationality*. https://travel.state.gov/en/international-travel/planning/personal-needs/dual-nationality.html`,
    },
    {
      slug: "taxes-military-and-other-obligations",
      title: "4 · Taxes, military service, and other obligations of dual nationality",
      section: "Living With Two Citizenships",
      recallContent: [
        {
          prompt: "When entering or leaving the United States, which passport must a U.S. dual national use?",
          answer:
            "The U.S. passport, always — regardless of what other passport the person also holds.",
        },
      ],
      body: `Dual nationality isn't only about which document you carry at the border — the Department of State is direct that "U.S. dual nationals owe allegiance to both the United States and the foreign country (or countries, if they are nationals of more than one)," and "they are required to obey the laws of both countries" (U.S. Department of State, n.d.-a). Two obligations come up often enough to name specifically.

**Taxes.** The United States taxes its citizens on their **worldwide** income no matter where they live or hold a second citizenship — this doesn't change because you also hold another country's passport. That subject is large enough that it has its own course on this platform, *Taxes for Americans Abroad*, covering the core worldwide-income rule, the Foreign Earned Income Exclusion, the Foreign Tax Credit, and foreign-account reporting (FBAR/FATCA) in depth. This course doesn't repeat that material — if taxes while living abroad or holding foreign accounts are the reason you're here, that course is the next stop. (Lesson 8 of *this* course covers a related but distinct topic: the one-time exit tax that can apply specifically when someone **renounces** U.S. citizenship.)

**Military service.** The Department of State warns plainly: "dual nationals may have to do military service in the foreign country where they are a national," and "this obligation may be imposed immediately upon arrival or when attempting to leave" (U.S. Department of State, n.d.-b). Many countries with mandatory military service enforce it against their own dual-national citizens, including U.S. citizens who also hold that country's nationality — this is a matter of the other country's law, not something the U.S. can exempt someone from.

**Other obligations vary by country** and can include things like mandatory civic registration, jury-type service, or restrictions tied specifically to citizens (some countries reserve certain jobs, property rights, or public offices for citizens only, which can cut in a dual national's favor, or impose specific duties that cut the other way). Because "each country has its own nationality laws based on its own policy" (U.S. Department of State, n.d.-a), the only reliable way to know what applies to you is to check the specific rules of the country in question.

:::reveal According to the Department of State, what obligation can a foreign country impose on its dual-national citizens related to its armed forces, and when might it apply? ||| Mandatory military service in that country — the Department of State notes this obligation may be imposed immediately upon arrival in the country or when the person attempts to leave.

## Sources
- U.S. Department of State. (n.d.-a). *Dual nationality*. https://travel.state.gov/content/travel/en/legal/travel-legal-considerations/Relinquishing-US-Nationality/Dual-Nationality.html
- U.S. Department of State. (n.d.-b). *Dual nationality*. https://travel.state.gov/en/international-travel/planning/personal-needs/dual-nationality.html`,
    },

    // ── Section 3: Renouncing U.S. Citizenship ─────────────────────────────
    {
      slug: "what-renunciation-is",
      title: "5 · What renunciation of U.S. citizenship is — and isn't",
      section: "Renouncing U.S. Citizenship",
      recallContent: [
        {
          prompt: "According to the Department of State, what obligation can a foreign country impose on its dual-national citizens related to its armed forces?",
          answer:
            "Mandatory military service in that country — potentially imposed immediately upon arrival or when the person attempts to leave.",
        },
      ],
      body: `The rest of this course shifts to a different, much more consequential topic: **formally giving up U.S. citizenship.** This section describes the process factually. It does not recommend it, and it does not discourage it — it is a serious, irrevocable legal act, and this course's job is to make sure you understand exactly what it involves before you consider it.

**Renunciation is one specific, formal way to lose U.S. nationality — not the only way.** The Immigration and Nationality Act (INA) § 349 lists **seven potentially expatriating acts** — actions that, if done voluntarily and with the intent to give up U.S. nationality, can result in loss of citizenship (U.S. Department of State, n.d.-c). They include things like naturalizing in a foreign country as an adult of one's own free choice, or taking a formal oath of allegiance to a foreign state (U.S. Department of State, n.d.-c) — some of which overlap with the "acquiring a second citizenship" paths from Lesson 2. **Formal renunciation** — appearing before a U.S. official specifically to declare, on the record, that you are giving up your citizenship — is the most direct and unambiguous of the seven. The Department of State describes it as "the most unequivocal way in which a person can manifest an intention to relinquish U.S. nationality" (U.S. Department of State, n.d.-d).

**The legal basis is INA § 349(a)(5):** it covers "making a formal renunciation of nationality before a diplomatic or consular officer of the United States in a foreign state" (U.S. Department of State, n.d.-d). (A separate, narrower provision, INA § 349(a)(6), allows renunciation while physically inside the United States, but only in specific circumstances and through the Department of Homeland Security rather than the State Department process this course describes (U.S. Department of State, n.d.-d).)

**Voluntariness and intent are the legal heart of it.** An expatriating act under INA § 349 only results in loss of nationality "if performed voluntarily and with the intention of relinquishing U.S. nationality" (U.S. Department of State, n.d.-c). This is exactly why the process (Lesson 6) involves more than one meeting with a U.S. official — the government has to be satisfied both that you did this on purpose and that you meant to give up citizenship, not just that you did something that happens to be on the list.

**What renunciation is not:** it is not automatic, it is not something that happens by simply moving abroad, holding a foreign passport, or even naturalizing elsewhere (unless done with the specific intent described above), and — critically, covered in Lesson 6 — it cannot be done by mail, online, or through someone acting on your behalf.

:::reveal What two conditions does INA § 349 require before an act (like formal renunciation) actually results in loss of U.S. nationality? ||| The act must be performed voluntarily, and with the intention of relinquishing U.S. nationality — doing something on the list of expatriating acts without that intent does not, by itself, cause loss of citizenship.

## Sources
- U.S. Department of State. (n.d.-c). *Relinquishing U.S. nationality*. https://travel.state.gov/content/travel/en/legal/travel-legal-considerations/Relinquishing-US-Nationality.html
- U.S. Department of State. (n.d.-d). *Oath of renunciation of U.S. citizenship — INA 349(a)(5)*. https://travel.state.gov/content/travel/en/legal/travel-legal-considerations/us-citizenship/Renunciaton-USCitizenship-persons-claiming-right-residence.html`,
    },
    {
      slug: "the-renunciation-process",
      title: "6 · The renunciation process, step by step",
      section: "Renouncing U.S. Citizenship",
      recallContent: [
        {
          prompt: "What two conditions does INA § 349 require before an act results in loss of U.S. nationality?",
          answer:
            "The act must be performed voluntarily, and with the intention of relinquishing U.S. nationality.",
        },
      ],
      body: `Renunciation follows a specific, deliberately unhurried process, entirely different from anything that can be done remotely.

**You cannot renounce by mail, online, or through an agent.** The Department of State is explicit: "U.S. citizens cannot effectively renounce their citizenship by mail" (U.S. Department of State, n.d.-d). The process the rest of this lesson describes — appearing before a U.S. official in person — is the only way that has legal effect under INA § 349(a)(5).

**It must be done abroad, before a U.S. official.** "An individual wishing to renounce U.S. nationality must appear in person and sign an oath of renunciation before a U.S. consular or diplomatic officer abroad" (U.S. Department of State, n.d.-d) — that is, at a U.S. embassy or consulate in another country, not inside the United States. (Recall from Lesson 5 that a narrow, separate path exists only for people physically in the U.S., under a different subsection and handled by a different agency.)

**Two separate appointments, not one.** In practice, this typically involves two interviews with a consular or diplomatic officer: an initial interview, and then, if the person still wants to proceed, a second appointment where they take the actual oath of renunciation in person. After the oath, the officer prepares a Certificate of Loss of Nationality (CLN) package — including a recommendation on whether to approve or deny the request — and sends it to the Department of State's Office of American Citizen Services for review (U.S. Department of State, n.d.-d, n.d.-e).

**Renunciation doesn't take effect the moment you take the oath.** Under INA § 358, "the renunciation of one's U.S. nationality does not result in one's expatriation until the Department of State approves a Certificate of Loss of Nationality" (U.S. Department of State, n.d.-d). The Department's review checks that "the applicant's burden of proof has been met and that a finding that the individual has voluntarily and intentionally renounced U.S. citizenship is warranted" (U.S. Department of State, n.d.-e) — tying directly back to the voluntariness-and-intent standard from Lesson 5.

**Minors and guardians cannot do this on someone else's behalf.** Citizenship "cannot be renounced by a parent or a legal guardian under any set of circumstances" (U.S. Department of State, n.d.-d) — it is a personal act that requires the individual's own appearance and, generally, sufficient age and capacity to understand what they're doing.

**There is a fee, and it recently changed.** As of April 13, 2026, the Department of State reduced the fee for processing a Certificate of Loss of Nationality request from $2,350 to $450 (U.S. Department of State, 2026). Because consular fees are set by regulation and can change again, **confirm the current fee at travel.state.gov before relying on any number, including this one.**

:::reveal Can a U.S. citizen renounce their citizenship by mailing in a signed form, and when does the renunciation actually take legal effect? ||| No — renunciation cannot be done by mail; it requires appearing in person before a U.S. consular or diplomatic officer abroad and taking an oath. It only takes legal effect once the Department of State reviews and approves a Certificate of Loss of Nationality, not at the moment the oath is taken.

## Sources
- U.S. Department of State. (n.d.-d). *Oath of renunciation of U.S. citizenship — INA 349(a)(5)*. https://travel.state.gov/content/travel/en/legal/travel-legal-considerations/us-citizenship/Renunciaton-USCitizenship-persons-claiming-right-residence.html
- U.S. Department of State. (n.d.-e). *Relinquishing U.S. nationality abroad*. https://travel.state.gov/content/travel/en/legal/travel-legal-considerations/us-citizenship/Relinquishing-US-Nationality-Abroad.html
- U.S. Department of State. (2026). *Schedule of fees for consular services — Fee for administrative processing of request for Certificate of Loss of Nationality of the United States* (Final rule, Document No. 2026-04931, published March 13, 2026, effective April 13, 2026). Federal Register. https://www.federalregister.gov/documents/2026/03/13/2026-04931/schedule-of-fees-for-consular-services-fee-for-administrative-processing-of-request-for-certificate`,
    },
    {
      slug: "irrevocable-and-serious-consequences",
      title: "7 · Why it's irrevocable, and the lasting consequences",
      section: "Renouncing U.S. Citizenship",
      recallContent: [
        {
          prompt: "Can a U.S. citizen renounce their citizenship by mailing in a signed form?",
          answer:
            "No — it requires appearing in person before a U.S. consular or diplomatic officer abroad and taking an oath.",
        },
        {
          prompt: "When does a renunciation actually take legal effect?",
          answer:
            "Only once the Department of State reviews and approves a Certificate of Loss of Nationality — not at the moment the oath is taken.",
        },
      ],
      body: `This is the single most important lesson in this course: **renunciation of U.S. citizenship is final.**

**It cannot be undone through the ordinary process.** Once approved, "the Department's determination of loss of U.S. nationality is irrevocable, except as provided in Section 351(b) of the INA, and cannot be cancelled or set aside absent a successful administrative or judicial appeal" (U.S. Department of State, n.d.-d). Section 351(b) is a narrow exception (broadly, for certain renunciations made before age 18); outside that, a successful legal appeal — not a change of mind — is the only path back, and even that is not guaranteed. There is no "cooling-off period" refund and no simple reapplication for citizenship as if nothing happened.

**Statelessness is a real risk the Department of State warns about directly.** People "who contemplate renunciation of U.S. nationality should be aware that they will experience a great deal of hardship unless they already possess a foreign nationality or are assured of acquiring another nationality shortly after completing their renunciation." Without a second nationality already secured, "those individuals would become stateless," would not be "entitled to the protection of any government," and "might also find it difficult or impossible to travel as they would probably not be entitled to a passport from any country" (U.S. Department of State, n.d.-d). More broadly, the Department describes how statelessness "can present severe hardships affecting the ability to own or rent property, work, marry, receive medical benefits, and attend school" (U.S. Department of State, n.d.-c). This is precisely why the consular officer's interview process (Lesson 6) probes whether the person already holds — or is about to acquire — another citizenship.

**Renunciation does not erase U.S. legal obligations that already exist.** Former citizens "remain subject to possible prosecution for crimes violating United States law" and do not escape existing financial obligations, "including child support payments" (U.S. Department of State, n.d.-c). Renunciation is forward-looking; it is not a way to retroactively avoid consequences for things that already happened.

**Coming back to visit gets harder, not easier.** After renouncing, a former U.S. citizen needs a visa to travel to the United States, or must otherwise qualify under the Visa Waiver Program like any other foreign national (U.S. Department of State, n.d.-c) — the automatic right of entry that comes with U.S. citizenship (and the U.S.-passport-at-the-border rule from Lesson 3) no longer applies.

:::reveal What happens to someone who renounces U.S. citizenship without already holding, or being assured of acquiring, a second nationality? ||| They can become stateless — without the protection of any government, and likely unable to obtain a passport from any country, which the Department of State warns can create severe hardship affecting travel, property, work, marriage, medical care, and schooling.

## Sources
- U.S. Department of State. (n.d.-c). *Relinquishing U.S. nationality*. https://travel.state.gov/content/travel/en/legal/travel-legal-considerations/Relinquishing-US-Nationality.html
- U.S. Department of State. (n.d.-d). *Oath of renunciation of U.S. citizenship — INA 349(a)(5)*. https://travel.state.gov/content/travel/en/legal/travel-legal-considerations/us-citizenship/Renunciaton-USCitizenship-persons-claiming-right-residence.html`,
    },
    {
      slug: "renunciation-and-the-exit-tax",
      title: "8 · Renunciation and taxes: the exit tax and Form 8854",
      section: "Renouncing U.S. Citizenship",
      recallContent: [
        {
          prompt: "What happens to someone who renounces U.S. citizenship without already holding, or being assured of acquiring, a second nationality?",
          answer:
            "They can become stateless — without the protection of any government and likely unable to obtain a passport from any country, creating severe hardship.",
        },
      ],
      body: `Renunciation has one more major consequence that catches people off guard: it can trigger a **one-time U.S. tax event**, on top of the ordinary worldwide-income rules covered in *Taxes for Americans Abroad*. This lesson is a factual overview, not tax advice — anyone actually considering renunciation should work with a qualified cross-border tax professional well before doing it.

**Not everyone who renounces owes this tax — only "covered expatriates."** The IRS's expatriation tax rules (Internal Revenue Code § 877A) apply to people who expatriated on or after June 17, 2008, and meet **any one** of three tests (Internal Revenue Service, n.d.-a):

1. **Net worth test:** your net worth is $2 million or more on the date of expatriation.
2. **Average tax liability test:** your average annual net income tax for the 5 years before expatriating exceeds an amount the IRS adjusts for inflation — illustrating the trend rather than today's number, the IRS's own published figures rose from $178,000 (2022) to $190,000 (2023) to $201,000 (2024) to $206,000 (2025) (Internal Revenue Service, n.d.-a). **Always confirm the current-year figure at irs.gov.**
3. **Certification test:** you fail to certify, on **Form 8854**, that you've complied with all federal tax obligations for the 5 years before expatriating.

**If you're a covered expatriate, most of your worldwide property is treated as if you sold it the day before you expatriated.** Under this "mark-to-market" rule, "property is deemed sold for its fair market value on the day before the expatriation date," and the resulting gain (above an exclusion amount that is itself adjusted for inflation each year — $890,000 for 2025) is included in that year's taxable income (Internal Revenue Service, n.d.-a). This applies even though nothing was actually sold — it's a tax on unrealized gains, assessed at the moment of expatriation.

**Form 8854 is the required paperwork either way.** Anyone who expatriates must file **Form 8854, Initial and Annual Expatriation Statement**, to inform the IRS of the expatriation and certify 5 years of tax compliance; it's filed "on the date that the individual's U.S. income tax return for the taxable year is due or would be due" (Internal Revenue Service, n.d.-a, n.d.-b). Failing to file it (or filing it incorrectly) is itself one of the three tests above that can make someone a covered expatriate.

**Relief exists for some lower-net-worth former citizens.** The IRS's "Relief Procedures for Certain Former Citizens" can let some people avoid covered-expatriate status even if they didn't previously file U.S. returns, if they meet non-willfulness and financial conditions — generally net worth under $2,000,000 and limited average tax liability — and submit the required information (Internal Revenue Service, n.d.-c). This is a narrow program with its own eligibility rules, not a general exemption, and confirming eligibility requires reading the current irs.gov guidance directly.

:::reveal Name the three tests, any ONE of which can make someone a "covered expatriate" facing the exit tax. ||| Net worth of $2 million or more at expatriation; average annual net income tax over an inflation-adjusted threshold for the 5 prior years; or failing to certify 5 years of federal tax compliance on Form 8854.

## Sources
- Internal Revenue Service. (n.d.-a). *Expatriation tax*. https://www.irs.gov/individuals/international-taxpayers/expatriation-tax
- Internal Revenue Service. (n.d.-b). *About Form 8854, Initial and Annual Expatriation Statement*. https://www.irs.gov/forms-pubs/about-form-8854
- Internal Revenue Service. (n.d.-c). *Relief procedures for certain former citizens*. https://www.irs.gov/individuals/international-taxpayers/relief-procedures-for-certain-former-citizens`,
    },

    // ── Section 4: Practice ────────────────────────────────────────────────
    {
      slug: "practice-dual-citizenship-renunciation",
      title: "9 · Practice: dual citizenship and renunciation",
      section: "Practice",
      exercise: {
        instructions: "Fill in each blank, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt: "U.S. law does ___ require a U.S. citizen to choose between U.S. citizenship and another nationality.",
            answer: "not",
            explanation: "The Department of State is explicit: U.S. law does not force a choice.",
          },
          {
            prompt: "Entering or leaving the United States, a U.S. dual national must always use a ___ passport.",
            answer: "U.S.",
            accept: ["us", "united states", "american"],
            explanation: "This rule applies regardless of what other passport the person also holds.",
          },
          {
            prompt: "The formal renunciation of U.S. citizenship must happen in person before a U.S. consular or diplomatic officer ___ (inside the U.S. / abroad).",
            answer: "abroad",
            explanation: "Renunciation under INA § 349(a)(5) requires appearing before a U.S. official at an embassy or consulate abroad, not inside the United States.",
          },
          {
            prompt: "Once approved, a Department of State determination of loss of nationality is ___ (can it generally be undone?).",
            answer: "irrevocable",
            explanation: "Outside a narrow exception (INA § 351(b)), only a successful administrative or judicial appeal can undo it — there is no simple change-of-mind reversal.",
          },
          {
            prompt: "A former citizen who renounces without already holding another nationality risks becoming ___.",
            answer: "stateless",
            explanation: "Without a second nationality, a person can lose the protection of any government and the ability to get a passport from any country.",
          },
          {
            prompt: "The IRS test based on the value of everything you own at expatriation is the ___ ___ test.",
            answer: "net worth",
            accept: ["networth"],
            explanation: "Net worth of $2 million or more at expatriation is one of the three tests for \"covered expatriate\" status.",
          },
          {
            prompt: "The required IRS paperwork for anyone who expatriates is Form ___.",
            answer: "8854",
            explanation: "Form 8854, Initial and Annual Expatriation Statement, certifies 5 years of tax compliance and reports the expatriation.",
          },
        ],
      },
    },

    // ── Section 5: Final Quiz ───────────────────────────────────────────
    {
      slug: "dual-citizenship-renunciation-quiz",
      title: "10 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "Does U.S. law require a U.S. citizen to choose between U.S. citizenship and a second nationality?",
            options: [
              "Yes, U.S. law requires picking one",
              "No — U.S. law does not require a U.S. citizen to choose between U.S. citizenship and another nationality",
              "Only if the other country objects",
              "Only for naturalized citizens, not those born abroad",
            ],
            correctIndex: 1,
            explanation:
              "The Department of State states directly that U.S. law does not require a U.S. citizen to choose between U.S. citizenship and another nationality.",
            sourceLessonSlug: "what-is-dual-nationality",
          },
          {
            prompt: "According to this course, what do descent, naturalization, and marriage as paths to a second citizenship all have in common?",
            options: [
              "They are all governed by U.S. law",
              "They all require the U.S. to approve the acquisition first",
              "They are all governed by the OTHER country's own law, which varies by country",
              "None of them can result in dual citizenship",
            ],
            correctIndex: 2,
            explanation:
              "All three paths depend entirely on the specific foreign country's own citizenship law, which is why this course points learners to that country's own authority rather than asserting a universal rule.",
            sourceLessonSlug: "how-a-second-citizenship-is-acquired",
          },
          {
            prompt: "When entering or leaving the United States, which passport must a U.S. dual national use?",
            options: [
              "Whichever passport is more convenient",
              "The passport of the other country of nationality",
              "The U.S. passport, regardless of what other passport is also held",
              "No passport is required for dual nationals",
            ],
            correctIndex: 2,
            explanation:
              "The Department of State's rule is unambiguous: U.S. nationals, including dual nationals, must use a U.S. passport to enter and leave the United States.",
            sourceLessonSlug: "passports-entry-and-exit",
          },
          {
            prompt: "According to the Department of State, what obligation can a foreign country impose on its dual-national citizens tied to its armed forces?",
            options: [
              "None — the U.S. exempts dual nationals from foreign military service",
              "Mandatory military service, possibly imposed on arrival in the country or when attempting to leave",
              "Only voluntary service is ever allowed",
              "Only citizens who were born in that country can be required to serve",
            ],
            correctIndex: 1,
            explanation:
              "The Department of State warns that dual nationals may have to perform military service in the foreign country where they are a national, and this obligation may be imposed upon arrival or when attempting to leave.",
            sourceLessonSlug: "taxes-military-and-other-obligations",
          },
          {
            prompt: "What two conditions does INA § 349 require before an expatriating act (like formal renunciation) actually results in loss of U.S. nationality?",
            options: [
              "It must be witnessed by two people and notarized",
              "It must be performed voluntarily and with the intention of relinquishing U.S. nationality",
              "It must happen before age 18",
              "It must be approved by Congress",
            ],
            correctIndex: 1,
            explanation:
              "INA § 349 requires that the act be both voluntary and done with the intent to give up U.S. nationality — this is why the renunciation process involves the government confirming intent, not just the act itself.",
            sourceLessonSlug: "what-renunciation-is",
          },
          {
            prompt: "Can a U.S. citizen renounce their citizenship by mail, and when does a renunciation actually take legal effect?",
            options: [
              "Yes by mail; it takes effect immediately upon signing",
              "No — it requires appearing in person before a consular or diplomatic officer abroad, and it only takes effect once the Department of State approves a Certificate of Loss of Nationality",
              "Yes by mail; it takes effect after 90 days",
              "No — it can only be done inside the United States",
            ],
            correctIndex: 1,
            explanation:
              "Renunciation cannot be done by mail. It requires an in-person oath before a U.S. consular or diplomatic officer abroad, and it takes legal effect only once the Department of State reviews and approves a Certificate of Loss of Nationality.",
            sourceLessonSlug: "the-renunciation-process",
          },
          {
            prompt: "Once the Department of State approves a determination of loss of nationality, can the person generally reverse it if they change their mind?",
            options: [
              "Yes, at any time within one year",
              "No — outside a narrow statutory exception, it is irrevocable absent a successful administrative or judicial appeal",
              "Yes, simply by reapplying for a passport",
              "Yes, if they pay an additional fee",
            ],
            correctIndex: 1,
            explanation:
              "The Department of State's determination of loss of nationality is irrevocable except as provided in INA § 351(b), and can only be undone through a successful administrative or judicial appeal — not a simple change of mind.",
            sourceLessonSlug: "irrevocable-and-serious-consequences",
          },
          {
            prompt: "What risk does the Department of State specifically warn about for someone who renounces without already holding, or being assured of acquiring, a second nationality?",
            options: [
              "Automatic reinstatement of U.S. citizenship after 5 years",
              "Becoming stateless, without the protection of any government or a passport from any country",
              "Losing the right to visit the U.S. for exactly one year",
              "Owing double the normal exit tax",
            ],
            correctIndex: 1,
            explanation:
              "The Department of State warns that without a foreign nationality already secured, a person who renounces can become stateless — without the protection of any government, and likely unable to obtain a passport from any country.",
            sourceLessonSlug: "irrevocable-and-serious-consequences",
          },
          {
            prompt: "Which of these, by itself, can make someone a 'covered expatriate' subject to the IRS exit tax?",
            options: [
              "Having net worth of $2 million or more on the date of expatriation",
              "Owning a home in a foreign country",
              "Being married to a non-U.S. citizen",
              "Holding a foreign bank account under $10,000",
            ],
            correctIndex: 0,
            explanation:
              "Net worth of $2 million or more at expatriation is one of three independent tests (along with the average tax liability test and the Form 8854 certification test) — meeting any one of them can trigger covered-expatriate status.",
            sourceLessonSlug: "renunciation-and-the-exit-tax",
          },
        ],
      },
    },
  ],
};
