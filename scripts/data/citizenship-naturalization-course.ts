// Authored "Citizenship & Naturalization Basics", a sibling of US Civics 101 in the Civics
// curriculum on Learn.WitUS. Plain-language and strictly non-partisan: this course explains
// WHO is a citizen and HOW the naturalization process and rules work — it takes no position on
// immigration policy or politics. Cited (APA 7 in-line + a `## Sources` bibliography per lesson)
// to authoritative sources: USCIS (uscis.gov) for the naturalization process, the civics/English
// test, the Oath, and rights/responsibilities; the National Archives and Congress.gov's
// Constitution Annotated for the 14th Amendment; the Library of Congress and the Supreme Court
// for case law. Rules, forms, and fees change — every lesson that names a specific number,
// form, or test format tells the learner to confirm the current version at uscis.gov rather than
// treating this course as a substitute for official guidance or legal advice. Ends with a quiz
// whose every question links back to the lesson that teaches the answer (the quiz standard).

import type { AuthoredCourse } from "./authored-course";

export const CITIZENSHIP_NATURALIZATION_COURSE: AuthoredCourse = {
  title: "Citizenship & Naturalization Basics",
  description:
    "A clear, non-partisan guide to U.S. citizenship: who is a citizen at birth (birthright and through parents), how the naturalization process works step by step, what the civics and English test cover, the Oath of Allegiance, and the rights and responsibilities that come with citizenship. Cited to USCIS, the National Archives, and Congress.gov. Rules and fees change — this course teaches how the system works and where to confirm current requirements, and takes no position on immigration policy.",
  lessons: [
    // ── Section 1: Who Is a Citizen? ──────────────────────────────────────
    {
      slug: "birthright-citizenship",
      title: "1 · Who is a U.S. citizen? Birthright and the 14th Amendment",
      section: "Who Is a Citizen?",
      body: `There are two broad ways to be a U.S. citizen: you are **born** one, or you **become** one through naturalization. This course covers both, starting with birth.

The most common path is **birthright citizenship**, guaranteed by the **14th Amendment's Citizenship Clause**, ratified in 1868:

> "All persons born or naturalized in the United States, and subject to the jurisdiction thereof, are citizens of the United States and of the state wherein they reside." (U.S. Const. amend. XIV, § 1)

In plain terms: if you are born on U.S. soil, you are a citizen at birth (sometimes called *jus soli*, "right of soil"), with narrow exceptions such as children of foreign diplomats. Congress codified this same rule in the Immigration and Nationality Act (INA § 301) (U.S. Citizenship and Immigration Services [USCIS], n.d.-a).

The Supreme Court confirmed this reading in **United States v. Wong Kim Ark, 169 U.S. 649 (1898)**, holding that a man born in San Francisco to Chinese immigrant parents who were not themselves eligible for citizenship was still a U.S. citizen by birth (Library of Congress, n.d.-a). Most recently, in **Trump v. Barbara, 609 U.S. ___ (2026)** (decided June 30, 2026), the Supreme Court struck down a 2025 executive order that had sought to limit birthright citizenship, holding that the 14th Amendment's guarantee applies to children born in the United States regardless of their parents' immigration status (Supreme Court of the United States, 2026). **The Court divided closely: it struck down the order 6–3, but on the underlying constitutional question the Justices split 5–4** — Chief Justice Roberts wrote the majority (joined by the Court's liberal Justices), Justices Thomas, Alito, and Gorsuch dissented, and Justice Kavanaugh concurred in the judgment on narrower, statutory grounds. Because the ruling is very recent and further proceedings (including a rehearing petition) were reported as of July 2026, **confirm the current status** before relying on any detail. That decision is a good example of this course's approach: it explains what the courts decided about *how the rule works*, not an argument about what immigration policy *should* be.

:::reveal What does the 14th Amendment say about who is a citizen, and which 1898 Supreme Court case confirmed it applies even when a child's parents are not citizens? ||| Anyone born (or naturalized) in the United States and subject to its jurisdiction is a citizen. United States v. Wong Kim Ark, 169 U.S. 649 (1898), confirmed this applies to a child born in the U.S. to parents who were not citizens.

## Sources
- U.S. Const. amend. XIV, § 1. National Archives. https://www.archives.gov/founding-docs/amendments-11-27
- U.S. Citizenship and Immigration Services. (n.d.-a). *Chapter 3 - U.S. citizens at birth (INA 301 and 309)*. USCIS Policy Manual, Volume 12, Part H. https://www.uscis.gov/policy-manual/volume-12-part-h-chapter-3
- Library of Congress. (n.d.-a). *United States v. Wong Kim Ark, 169 U.S. 649 (1898)*. https://www.loc.gov/item/usrep169649/
- Supreme Court of the United States. (2026). *Trump v. Barbara*, 609 U.S. ___, No. 25-365 (June 30, 2026). https://www.supremecourt.gov/opinions/25pdf/25-365_4hdj.pdf`,
    },
    {
      slug: "citizenship-through-parents",
      title: "2 · Citizenship through your parents",
      section: "Who Is a Citizen?",
      recallContent: [
        {
          prompt: "What does the 14th Amendment say about who is a citizen?",
          answer:
            "Anyone born (or naturalized) in the United States and subject to its jurisdiction is a citizen.",
        },
        {
          prompt: "Which 1898 Supreme Court case confirmed birthright citizenship applies even when a child's parents are not citizens?",
          answer: "United States v. Wong Kim Ark, 169 U.S. 649 (1898).",
        },
      ],
      body: `You don't have to be born on U.S. soil to be a citizen. Two other paths run through a **parent**:

- **Acquisition at birth (born abroad to a U.S. citizen parent).** Under INA § 301, a child born outside the United States can be a citizen at birth if one or both parents were U.S. citizens who met specific residence or physical-presence requirements before the birth. The exact rule depends on whether one or both parents were citizens, and it has changed over the decades, so the applicable version depends on the child's birth date (USCIS, n.d.-a).
- **Automatic acquisition after birth (derivation).** Under the **Child Citizenship Act of 2000** (INA § 320), a child under 18 who is a lawful permanent resident, and who is residing in the United States in the legal and physical custody of a U.S. citizen parent, automatically becomes a citizen — no separate application is required, though families often apply for a Certificate of Citizenship as proof (USCIS, n.d.-b).

Because eligibility turns on technical details, dates, and whose custody the child is in, anyone in this situation should use USCIS's own tools (starting with "I am the Child of a U.S. Citizen") or a qualified source, rather than assume a general rule applies to their exact case (USCIS, n.d.-c).

:::reveal Name the two ways a child can become a citizen through a parent without being born in the U.S. ||| Acquisition (born abroad to a U.S. citizen parent, under INA § 301) and automatic acquisition after birth / derivation (a child under 18 in the legal and physical custody of a U.S. citizen parent, under INA § 320, the Child Citizenship Act of 2000).

## Sources
- U.S. Citizenship and Immigration Services. (n.d.-a). *Chapter 3 - U.S. citizens at birth (INA 301 and 309)*. USCIS Policy Manual, Volume 12, Part H. https://www.uscis.gov/policy-manual/volume-12-part-h-chapter-3
- U.S. Citizenship and Immigration Services. (n.d.-b). *Chapter 4 - Automatic acquisition of citizenship after birth (INA 320)*. USCIS Policy Manual, Volume 12, Part H. https://www.uscis.gov/policy-manual/volume-12-part-h-chapter-4
- U.S. Citizenship and Immigration Services. (n.d.-c). *I am the child of a U.S. citizen*. https://www.uscis.gov/citizenship/learn-about-citizenship/i-am-the-child-of-a-us-citizen`,
    },

    // ── Section 2: Becoming a Citizen: Naturalization ────────────────────
    {
      slug: "naturalization-eligibility",
      title: "3 · Becoming a citizen: naturalization eligibility",
      section: "Becoming a Citizen: Naturalization",
      recallContent: [
        {
          prompt: "Name the two ways a child can become a citizen through a parent without being born in the U.S.",
          answer:
            "Acquisition (born abroad to a U.S. citizen parent, under INA § 301) and automatic acquisition after birth / derivation (a child under 18 in the legal and physical custody of a U.S. citizen parent, under INA § 320).",
        },
      ],
      body: `If you were not a citizen at birth, the legal path to become one is **naturalization**. In general, to apply you must (USCIS, n.d.-d; USCIS, n.d.-e):

- Be **at least 18 years old** when you file.
- Be a **lawful permanent resident** ("green card" holder) for the required period, usually **5 years** (or **3 years** if you have been married to, and living with, a U.S. citizen the whole time).
- Meet **continuous residence** and **physical presence** requirements, meaning you have not been outside the U.S. for extended stretches during that period.
- Have lived for at least 3 months in the state or USCIS district where you're applying.
- Have "**good moral character**."
- Show a basic understanding of **English** and **U.S. civics** (with some exceptions, covered in Lesson 5).
- Show attachment to the principles of the U.S. Constitution, and be willing to take the **Oath of Allegiance** (Lesson 6).

Some categories, such as spouses of U.S. citizens or current/former members of the U.S. military, have different residency requirements. Eligibility rules are detailed and applicant-specific, so USCIS provides an online eligibility tool, and the current, exact rule for any given situation should always be confirmed at uscis.gov rather than assumed from a general summary like this one.

:::reveal What is the general permanent-residence requirement to naturalize, and how is it shorter for some applicants? ||| Generally 5 years as a lawful permanent resident, or 3 years if married to and living with a U.S. citizen the whole time.

## Sources
- U.S. Citizenship and Immigration Services. (n.d.-d). *I am a lawful permanent resident of 5 years*. https://www.uscis.gov/citizenship/learn-about-citizenship/citizenship-and-naturalization/i-am-a-lawful-permanent-resident-of-5-years
- U.S. Citizenship and Immigration Services. (n.d.-e). *Instructions for Form N-400, Application for Naturalization*. https://www.uscis.gov/sites/default/files/document/forms/n-400instr.pdf`,
    },
    {
      slug: "naturalization-process-steps",
      title: "4 · The naturalization process, step by step",
      section: "Becoming a Citizen: Naturalization",
      recallContent: [
        {
          prompt: "What is the general permanent-residence requirement to naturalize?",
          answer: "Generally 5 years as a lawful permanent resident.",
        },
        {
          prompt: "How is the residency requirement shorter for some applicants?",
          answer: "3 years, for someone married to and living with a U.S. citizen the whole time.",
        },
      ],
      body: `USCIS lays the naturalization process out as a series of steps (USCIS, n.d.-f). At a high level:

1. **Confirm you're not already a citizen** (see Lessons 1 to 2), and confirm you meet eligibility (Lesson 3).
2. **Complete Form N-400**, Application for Naturalization, the official application (USCIS, n.d.-g).
3. **File it**, online or by mail, and pay the filing fee — unless you qualify for a **reduced fee** or a **fee waiver** based on income or certain public benefits. Filing fees change over time (there was a fee adjustment as recently as mid-2026), so always check the current amount on USCIS's official fee schedule (Form G-1055) or fee calculator before filing rather than relying on a number you saw elsewhere (USCIS, n.d.-h).
4. **Attend a biometrics appointment**, if USCIS requires one, to collect fingerprints and other identifying information.
5. **Attend an interview.** A USCIS officer reviews your application and background, and — unless you qualify for an exemption — you take the English and civics test at the same appointment (Lesson 5).
6. **Receive a decision.** If USCIS needs more evidence, or if you fail part of the test, you're generally retested on just the part you failed, 60 to 90 days later.
7. **If approved, receive a notice to take the Oath of Allegiance**, and attend a naturalization ceremony (Lesson 6). You are not yet a citizen until you take the Oath.

:::reveal What are the last two events in the naturalization process, in order? ||| Receiving a decision on the application, and then, if approved, taking the Oath of Allegiance at a naturalization ceremony — which is the moment citizenship is actually granted.

## Sources
- U.S. Citizenship and Immigration Services. (n.d.-f). *10 steps to naturalization*. https://www.uscis.gov/citizenship/learn-about-citizenship/10-steps-to-naturalization
- U.S. Citizenship and Immigration Services. (n.d.-g). *N-400, Application for Naturalization*. https://www.uscis.gov/n-400
- U.S. Citizenship and Immigration Services. (n.d.-h). *G-1055, Fee Schedule*. https://www.uscis.gov/g-1055`,
    },
    {
      slug: "civics-and-english-test",
      title: "5 · The civics and English test",
      section: "Becoming a Citizen: Naturalization",
      recallContent: [
        {
          prompt: "What are the last two events in the naturalization process, in order?",
          answer:
            "Receiving a decision on the application, and then, if approved, taking the Oath of Allegiance at a naturalization ceremony.",
        },
      ],
      body: `At the interview, most applicants take a two-part naturalization test (USCIS, n.d.-i):

- **English:** you generally read one sentence aloud correctly (out of up to three tries), write one sentence correctly (out of up to three tries), and are assessed on speaking and understanding English throughout the interview itself.
- **Civics:** you answer questions about U.S. history and government drawn from an **official USCIS question list**. This list and its format have changed before, and changed again recently: USCIS began giving a new **2025 civics test** to anyone who files Form N-400 on or after October 20, 2025 — 20 questions asked orally from a list of 128, needing 12 correct to pass. People who filed before that date take the older 2008 version — 10 questions asked from a list of 100, needing 6 correct (USCIS, n.d.-j).
- **Exceptions.** Some longtime lawful permanent residents may take the civics test in their own language, with an interpreter, and applicants who are 65 or older with 20+ years as a permanent resident are asked from a shorter, specially marked set of questions (USCIS, n.d.-i).

Because the question list, format, and passing score have changed and can change again, always study from the **current** official list published at uscis.gov, not an old printout or a third-party site that may be out of date.

:::reveal As of the 2025 civics test, how many questions are asked at the interview, and how many must you answer correctly to pass? ||| 20 questions are asked (from a list of 128), and you must answer 12 correctly to pass.

## Sources
- U.S. Citizenship and Immigration Services. (n.d.-i). *The naturalization interview and test*. https://www.uscis.gov/citizenship/learn-about-citizenship/the-naturalization-interview-and-test
- U.S. Citizenship and Immigration Services. (n.d.-j). *Study for the test*. https://www.uscis.gov/citizenship/find-study-materials-and-resources/study-for-the-test`,
    },
    {
      slug: "oath-of-allegiance",
      title: "6 · The Oath of Allegiance",
      section: "Becoming a Citizen: Naturalization",
      recallContent: [
        {
          prompt: "As of the 2025 civics test, how many questions are asked at the interview?",
          answer: "20 questions, from a list of 128.",
        },
        {
          prompt: "How many must you answer correctly to pass the 2025 civics test?",
          answer: "12 correct answers.",
        },
      ],
      body: `Even after your Form N-400 is approved, you are **not yet a U.S. citizen**. Citizenship is granted at the moment you take the **Oath of Allegiance**, at a naturalization ceremony (USCIS, n.d.-k). The Oath's principles are set out in INA § 337(a), and its text includes:

> "I hereby declare, on oath, that I absolutely and entirely renounce and abjure all allegiance and fidelity to any foreign prince, potentate, state, or sovereignty, of whom or which I have heretofore been a subject or citizen; that I will support and defend the Constitution and laws of the United States of America against all enemies, foreign and domestic; that I will bear true faith and allegiance to the same … so help me God." (USCIS, n.d.-k)

A few practical notes:

- Some applicants qualify for a **modified Oath** that omits the promise to bear arms, for documented religious or other reasons (USCIS, n.d.-l).
- At the ceremony you'll typically complete Form N-445 and check in with USCIS before the ceremony begins.
- After taking the Oath, you receive a **Certificate of Naturalization** — check it carefully for errors before you leave, since correcting it later takes an extra step.

:::reveal At what exact moment does a naturalization applicant actually become a U.S. citizen? ||| When they take the Oath of Allegiance at a naturalization ceremony, not when Form N-400 is approved.

## Sources
- U.S. Citizenship and Immigration Services. (n.d.-k). *Naturalization Oath of Allegiance to the United States of America*. https://www.uscis.gov/citizenship/learn-about-citizenship/the-naturalization-interview-and-test/naturalization-oath-of-allegiance-to-the-united-states-of-america
- U.S. Citizenship and Immigration Services. (n.d.-l). *Chapter 2 - The Oath of Allegiance*. USCIS Policy Manual, Volume 12, Part J. https://www.uscis.gov/policy-manual/volume-12-part-j-chapter-2`,
    },

    // ── Section 3: Rights, Responsibilities & Help ────────────────────────
    {
      slug: "rights-and-responsibilities",
      title: "7 · Rights and responsibilities of citizenship",
      section: "Rights, Responsibilities & Help",
      recallContent: [
        {
          prompt: "At what exact moment does a naturalization applicant actually become a U.S. citizen?",
          answer: "When they take the Oath of Allegiance at a naturalization ceremony.",
        },
      ],
      body: `Whether you became a citizen at birth or through naturalization, citizenship carries both **rights** and **responsibilities** (USCIS, n.d.-m).

Rights include:

- **Voting** in federal, state, and local elections.
- **Running for most elected office** (running for **President or Vice President** additionally requires being a "natural born Citizen" under U.S. Const. art. II, § 1 — a stricter, separate rule that does not apply to other offices) (Congress.gov, n.d.).
- **A U.S. passport**, and the U.S. government's assistance if you need help while traveling abroad.
- **Serving on a jury**, and priority when petitioning to bring certain family members to live in the United States.
- Eligibility for federal jobs that require citizenship, and protection from ever having your right to live in the U.S. taken away simply for living elsewhere.

Responsibilities include:

- **Supporting and defending the Constitution**, and staying informed about issues affecting your community.
- **Serving on a jury** when called (a right and a duty).
- **Paying taxes**, and, for most men ages 18 to 25, **registering for Selective Service**.

:::reveal Which additional citizenship rule applies only to running for President or Vice President, and not to other elected offices? ||| The "natural born Citizen" requirement in Article II, § 1 of the Constitution.

## Sources
- U.S. Citizenship and Immigration Services. (n.d.-m). *Citizenship rights and responsibilities*. https://www.uscis.gov/citizenship-resource-center/learn-about-citizenship/citizenship-and-naturalization/citizenship-rights-and-responsibilities
- Congress.gov. (n.d.). *U.S. Constitution, Article II*. Constitution Annotated. https://constitution.congress.gov/constitution/article-2/`,
    },
    {
      slug: "avoiding-scams-getting-help",
      title: "8 · Getting authoritative help, and avoiding scams",
      section: "Rights, Responsibilities & Help",
      recallContent: [
        {
          prompt: "Which additional citizenship rule applies only to running for President or Vice President?",
          answer: "The \"natural born Citizen\" requirement in Article II, § 1 of the Constitution.",
        },
      ],
      body: `This course has covered the general rules, but rules, forms, and fees genuinely **change** (the civics test and USCIS's own fee schedule both changed within the last year alone). **uscis.gov is the authoritative source** — always confirm the current requirement there before you rely on any summary, including this one.

Because naturalization applications involve money, deadlines, and immigration status, they're also a common target for fraud. A few things USCIS specifically warns about (USCIS, n.d.-n; USCIS, n.d.-o):

- **Only an attorney, or an accredited representative working for a Department of Justice (DOJ)–recognized organization, can legally give you immigration advice.** In the United States, a "**notario público**" is *not* authorized to give legal advice — even though the term means something different (a credentialed attorney) in many other countries.
- **Red flags:** guarantees that your case will be approved, requests to sign blank or false forms, anyone insisting on keeping your original documents, demands for payment in gift cards, or threats that you'll be deported if you don't pay.
- **Where to get real help:** USCIS's own Citizenship Resource Center, the DOJ's list of recognized organizations and accredited representatives, and nonprofit legal-aid organizations. If you suspect fraud, you can report it — doing so does not affect your immigration case (USCIS, n.d.-o).

:::reveal In the United States, is a "notario público" authorized to give immigration legal advice? ||| No. Despite what the term means in some other countries, in the U.S. only an attorney or a DOJ-recognized accredited representative can legally give immigration advice.

## Sources
- U.S. Citizenship and Immigration Services. (n.d.-n). *Avoid scams*. https://www.uscis.gov/avoid-scams
- U.S. Citizenship and Immigration Services. (n.d.-o). *Report immigration scams*. https://www.uscis.gov/scams-fraud-and-misconduct/avoid-scams/report-immigration-scams`,
    },

    // ── Section 4: Practice ────────────────────────────────────────────
    {
      slug: "practice-citizenship-naturalization",
      title: "9 · Practice: citizenship and naturalization",
      section: "Practice",
      exercise: {
        instructions: "Fill in each blank, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt: "The constitutional guarantee of citizenship for anyone born in the U.S. comes from the ___ Amendment (number).",
            answer: "14th",
            accept: ["fourteenth", "14", "fourteen"],
            explanation: "The 14th Amendment's Citizenship Clause guarantees birthright citizenship.",
          },
          {
            prompt: "The official application form for naturalization is Form N-___.",
            answer: "400",
            explanation: "Form N-400, Application for Naturalization.",
          },
          {
            prompt: "You must be a lawful permanent resident for ___ years to naturalize (general rule, not married to a citizen).",
            answer: "5",
            accept: ["five"],
            explanation: "5 years is the general continuous-residence requirement; it's 3 years if married to and living with a U.S. citizen.",
          },
          {
            prompt: "You actually become a citizen when you take the ___ of Allegiance.",
            answer: "Oath",
            explanation: "Approval of Form N-400 is not enough — citizenship is granted at the Oath ceremony.",
          },
          {
            prompt: "In the U.S., a \"notario público\" is NOT authorized to give immigration legal ___.",
            answer: "advice",
            explanation: "Only an attorney or a DOJ-recognized accredited representative can legally give immigration advice.",
          },
        ],
      },
    },

    // ── Section 5: Final Quiz ─────────────────────────────────────────
    {
      slug: "citizenship-naturalization-quiz",
      title: "10 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "Under the 14th Amendment, who is a U.S. citizen at birth?",
            options: [
              "Only children of U.S. citizens",
              "Anyone born or naturalized in the U.S. and subject to its jurisdiction",
              "Only children born in a hospital",
              "Nobody; citizenship is only granted by naturalization",
            ],
            correctIndex: 1,
            explanation:
              "The 14th Amendment's Citizenship Clause guarantees citizenship to anyone born (or naturalized) in the United States and subject to its jurisdiction.",
            sourceLessonSlug: "birthright-citizenship",
          },
          {
            prompt: "Which 1898 Supreme Court case confirmed birthright citizenship applies even when a child's parents are not citizens?",
            options: [
              "Marbury v. Madison",
              "United States v. Wong Kim Ark",
              "Trump v. Barbara",
              "Plessy v. Ferguson",
            ],
            correctIndex: 1,
            explanation:
              "United States v. Wong Kim Ark, 169 U.S. 649 (1898), confirmed birthright citizenship for a child born in the U.S. to non-citizen parents.",
            sourceLessonSlug: "birthright-citizenship",
          },
          {
            prompt: "Under the Child Citizenship Act of 2000 (INA § 320), how can a child under 18 automatically become a citizen after birth?",
            options: [
              "By passing the civics test",
              "By being a lawful permanent resident in the legal and physical custody of a U.S. citizen parent",
              "By turning 18 while living in the U.S.",
              "It is not possible without a separate application",
            ],
            correctIndex: 1,
            explanation:
              "A child under 18 who is a lawful permanent resident residing in the legal and physical custody of a U.S. citizen parent automatically becomes a citizen under INA § 320.",
            sourceLessonSlug: "citizenship-through-parents",
          },
          {
            prompt: "What is the general permanent-residence requirement to naturalize, and how is it shorter for some applicants?",
            options: [
              "10 years generally; 5 years if married to a citizen",
              "5 years generally; 3 years if married to and living with a U.S. citizen the whole time",
              "1 year for everyone",
              "There is no residence requirement",
            ],
            correctIndex: 1,
            explanation:
              "Generally 5 years as a lawful permanent resident, or 3 years if married to and living with a U.S. citizen the whole time.",
            sourceLessonSlug: "naturalization-eligibility",
          },
          {
            prompt: "Which of these is the correct order of the last two major steps in naturalization?",
            options: [
              "Take the Oath, then receive a decision",
              "Receive a decision, then (if approved) take the Oath of Allegiance",
              "Take the civics test, then file Form N-400",
              "Receive a Certificate of Naturalization, then apply",
            ],
            correctIndex: 1,
            explanation:
              "USCIS issues a decision on the application first; only after approval does the applicant take the Oath of Allegiance, which is when citizenship is actually granted.",
            sourceLessonSlug: "naturalization-process-steps",
          },
          {
            prompt: "As of the 2025 civics test (for applicants filing Form N-400 on or after October 20, 2025), how many questions are asked and how many must be correct to pass?",
            options: [
              "10 asked, 6 correct",
              "20 asked, 12 correct",
              "100 asked, all correct",
              "5 asked, 3 correct",
            ],
            correctIndex: 1,
            explanation:
              "The 2025 civics test asks 20 questions from a list of 128, and requires 12 correct answers to pass. Applicants who filed before October 20, 2025 use the older 2008 test (10 asked, 6 correct).",
            sourceLessonSlug: "civics-and-english-test",
          },
          {
            prompt: "When does a naturalization applicant actually become a U.S. citizen?",
            options: [
              "The day Form N-400 is filed",
              "The day the interview is scheduled",
              "When they take the Oath of Allegiance at a naturalization ceremony",
              "The day they pass the civics test",
            ],
            correctIndex: 2,
            explanation:
              "Approval of Form N-400 is not enough on its own — citizenship is granted at the moment the applicant takes the Oath of Allegiance.",
            sourceLessonSlug: "oath-of-allegiance",
          },
          {
            prompt: "Which additional rule applies only to running for President or Vice President, not to other elected offices?",
            options: [
              "Must be a naturalized citizen",
              "Must be a \"natural born Citizen\" (U.S. Const. art. II, § 1)",
              "Must have passed the civics test twice",
              "Must be a lawful permanent resident",
            ],
            correctIndex: 1,
            explanation:
              "Article II, § 1 requires the President (and, by extension, the Vice President) to be a \"natural born Citizen,\" a stricter rule than for other elected offices.",
            sourceLessonSlug: "rights-and-responsibilities",
          },
          {
            prompt: "In the United States, who is legally authorized to give immigration legal advice?",
            options: [
              "Any notary public, including a \"notario público\"",
              "Only an attorney or a DOJ-recognized accredited representative",
              "Anyone who has been through the naturalization process themselves",
              "Any USCIS employee you speak with by phone",
            ],
            correctIndex: 1,
            explanation:
              "In the U.S., only an attorney or an accredited representative working for a DOJ-recognized organization can legally give immigration advice. A \"notario público\" is not authorized to, despite what the term implies elsewhere.",
            sourceLessonSlug: "avoiding-scams-getting-help",
          },
        ],
      },
    },
  ],
};
