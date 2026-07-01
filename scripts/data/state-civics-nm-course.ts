// Authored "New Mexico Civics: How Your State Government Works" — the New Mexico entry
// in the per-state Civics layer on Learn.WitUS. State-level companion to the general
// Civics courses: those teach the SYSTEM; this teaches New Mexico's version.
//
// Factual and strictly non-partisan. Every content lesson is cited (APA 7 in-line +
// a `## Sources` bibliography) to NEW MEXICO'S OWN OFFICIAL SOURCES: the Legislature
// (nmlegis.gov), the Secretary of State / elections (sos.nm.gov), the Courts
// (nmcourts.gov), and the New Mexico Constitution (1912).
//
// Authoritative-values rule (load-bearing): state facts VARY and CHANGE. Time-sensitive
// items (voting rules) are flagged and point learners to sos.nm.gov.
//
// Organized into sections (course modules), ending with a fill-in exercise + a final
// quiz whose every question links back to the lesson that teaches the answer.

import type { AuthoredCourse } from "./authored-course";

export const STATE_CIVICS_NM_COURSE: AuthoredCourse = {
  title: "New Mexico Civics: How Your State Government Works",
  description:
    "A practical, non-partisan guide to how the state of New Mexico governs itself — and how you take part where you live. New Mexico has two features found nowhere else: its 1912 constitution contains special protections for Spanish-speaking citizens, making it effectively the most bilingual state, and it has the ONLY fully volunteer (unpaid) state legislature in the nation. You'll learn New Mexico's Constitution of 1912, its plural executive, its Legislature of 42 senators and 70 representatives, its hybrid judiciary, its 33 counties, and the sovereign Pueblo and tribal nations within its borders. Time-sensitive facts are flagged, pointing to sos.nm.gov. Cited to New Mexico's own official sources (nmlegis.gov, sos.nm.gov, nmcourts.gov).",
  lessons: [
    // ── Section 1: The bilingual constitution ────────────────────────────
    {
      slug: "nm-bilingual",
      title: "1 · New Mexico's bilingual constitution and its cultures",
      section: "What Makes New Mexico Unique",
      body: `New Mexico's most distinctive civic feature is written into its founding document: its **1912 constitution contains special protections for Spanish-speaking citizens**, making New Mexico effectively **the most bilingual state in the nation** (New Mexico Legislature, n.d.).

**What the constitution does.** Because New Mexico had a large, long-established **Spanish-speaking (Hispano) population** at statehood in **1912**, its constitution deliberately protects them (New Mexico Legislature, n.d.):
- It **protects the right to vote, hold office, and serve on juries regardless of ability to speak, read, or write English or Spanish** — so language cannot be used to exclude citizens.
- It provides that **children of Spanish descent shall not be denied equal educational rights**, and it made certain laws and official notices available in **both English and Spanish.**
- These protections were made **especially hard to amend**, entrenching bilingual rights.
While New Mexico has **no single "official language"** declared the way some states do, in practice it operates as a **bilingual (English/Spanish)** state, and it celebrates its blended **Hispano, Native American, and Anglo** heritage.

**Native nations.** New Mexico is also home to **many sovereign tribal nations** — including **19 Pueblos** and the Navajo Nation, Apache tribes, and others — governments with their own laws and courts, an essential part of the state's civic landscape.

This is the through-line: New Mexico's government reflects a **multicultural, multilingual** society, protected in its very constitution.

**A note this course keeps returning to:** state facts **vary and change.** Everything here is current as of authoring, but New Mexico's own government (nmlegis.gov, sos.nm.gov, nmcourts.gov) is the authoritative source.

**Check yourself.** What does New Mexico's constitution protect for Spanish-speaking citizens, and what sovereign governments exist within the state?

## Sources
- New Mexico Legislature. (n.d.). *New Mexico Constitution (1912): language and educational protections*. nmlegis.gov. https://www.nmlegis.gov/
- New Mexico Secretary of State. (n.d.). *New Mexico government and cultures*. sos.nm.gov. https://www.sos.nm.gov/`,
    },

    // ── Section 2: The only unpaid legislature ───────────────────────────
    {
      slug: "nm-unpaid-legislature",
      title: "2 · The only unpaid legislature in the nation",
      section: "The Three Branches",
      body: `New Mexico's second national "only": it has the **only fully volunteer (UNPAID) state legislature in the country** (New Mexico Legislature, n.d.).

**What that means.** New Mexico legislators receive **NO salary** for their work. They get a **per-diem allowance** (to cover expenses like lodging and meals during the session) and mileage — but **no annual pay** at all (New Mexico Legislature, n.d.). Every other state pays its legislators something; New Mexico pays them **nothing** beyond expenses. This makes New Mexico's the **truest "citizen legislature"** in the nation — people serve out of **civic duty**, and legislators tend to be retirees, business owners, or others who can afford to serve without a salary.

**The sessions match.** New Mexico's Legislature is bicameral and part-time (New Mexico Legislature, n.d.):
- **House of Representatives — 70 members** (2-year terms), and **Senate — 42 senators** (4-year terms).
- It alternates **long and short sessions**: a **60-day** session in odd-numbered years and a **30-day** (mostly budget-focused) session in even years — short windows for an unpaid body.

Why it matters: New Mexico bet that an **unpaid, part-time** legislature keeps government **close to citizens and cheap** — though critics note it can limit who is **able** to serve. Either way, it's a genuinely unique feature of American government.

**Check yourself.** What is unique about how New Mexico pays its legislators, and how long are its sessions?

## Sources
- New Mexico Legislature. (n.d.). *The volunteer (unpaid) Legislature; sessions and per diem*. nmlegis.gov. https://www.nmlegis.gov/`,
    },

    // ── Section 3: The executive + the courts ────────────────────────────
    {
      slug: "nm-executive-courts",
      title: "3 · The executive and how New Mexico picks its judges",
      section: "The Three Branches",
      body: `**Executive — a plural executive.** New Mexico voters elect several statewide officials (New Mexico Secretary of State, n.d.):
- The **Governor** and **Lieutenant Governor** (nominated separately in primaries, then running **together** in the general election),
- the **Secretary of State** (who runs elections),
- the **Attorney General**,
- the **State Treasurer**,
- the **State Auditor**, and
- the **Commissioner of Public Lands** (a powerful office in a state with vast public lands).
Statewide officers serve **4-year terms** with **term limits.**

**Judicial — a distinctive hybrid.** New Mexico chooses judges in an unusual **three-step blend** of appointment, partisan election, and retention (New Mexico Courts, n.d.):
1. When a judgeship opens, a **judicial nominating commission** sends names to the **Governor**, who **appoints** a judge.
2. That judge must then run in the **next partisan election** (with a party label) to keep the seat.
3. After winning once, the judge thereafter faces **nonpartisan yes/no retention elections** (needing a high approval threshold). The **New Mexico Supreme Court** has **5 justices.**
So a New Mexico judge is **appointed, then partisan-elected, then retained** — mixing three different methods you've seen separately in other states.

**Veto and override.** The Governor may veto bills (and has a strong **line-item veto**); the Legislature overrides with a **two-thirds vote of each chamber.**

**Check yourself.** Name two statewide executives New Mexicans elect, and describe the three steps by which a New Mexico judge reaches and keeps the bench.

## Sources
- New Mexico Secretary of State. (n.d.). *Statewide elected officials*. sos.nm.gov. https://www.sos.nm.gov/
- New Mexico Courts. (n.d.). *Judicial selection: appointment, partisan election, and retention*. nmcourts.gov. https://www.nmcourts.gov/`,
    },

    // ── Section 4: Lawmaking, local government, getting involved ─────────
    {
      slug: "nm-lawmaking-involved",
      title: "4 · How a bill becomes law, local government, and getting involved",
      section: "Get Involved",
      body: `**How a bill becomes law** (New Mexico Legislature, n.d.):
1. **Introduction** during the 60-day (odd year) or 30-day (even year) session; **committee** review; **floor votes** in both chambers.
2. **Governor** — sign, veto (two-thirds override), or **line-item veto** appropriations.
New Mexico has **no statewide citizen initiative** for general laws; **constitutional amendments** are proposed by the Legislature and ratified by the **voters** (recall that the **language-rights provisions** are especially hard to amend).

**Local government** (New Mexico Legislature, n.d.):
- **33 counties**, governed by elected **county commissions**, plus other elected county officials.
- **Cities, towns, and villages** provide municipal services; some have home-rule charters.
- **Sovereign tribal nations** (the 19 Pueblos, Navajo Nation, and Apache tribes) govern their own lands — a major part of New Mexico's civic map.

**Voting.** ⚠️ **Time-sensitive:** New Mexico offers **same-day registration**, **early and absentee voting**, and (through recent reforms) automatic registration options. Rules and deadlines are administered by **county clerks** and can change — confirm the **current** details at **sos.nm.gov** before you vote. (And remember New Mexico's constitution protects your right to vote **regardless of your English or Spanish literacy.**)

**How to take part:**
- **Register and vote** — even same-day in many cases; check your status at sos.nm.gov.
- **Serve — literally for free.** Because the Legislature is unpaid, New Mexico especially depends on **citizens willing to serve.** Running for the Legislature is an act of civic volunteering here.
- **Show up locally.** County commissions, city/town councils, and school boards hold public meetings; if you live near or on tribal land, tribal governments are key.
- **Contact your legislators** in Santa Fe — you have one Representative and one Senator; sessions are short, so timing matters.

**Check yourself.** Can New Mexico citizens start a law by initiative, and what does the state especially depend on given its unpaid Legislature?

## Sources
- New Mexico Legislature. (n.d.). *How a bill becomes law; local government*. nmlegis.gov. https://www.nmlegis.gov/
- New Mexico Secretary of State. (n.d.). *Registering and voting: same-day registration, early/absentee voting*. sos.nm.gov. https://www.sos.nm.gov/`,
    },

    // ── Section 5: Practice (fill in the blanks) ─────────────────────────
    {
      slug: "nm-exercise",
      title: "5 · Practice: fill in the blanks",
      section: "Practice",
      exercise: {
        instructions:
          "Fill in each blank about New Mexico state government, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt:
              "New Mexico's 1912 constitution protects the rights of ___-speaking citizens, making it effectively bilingual.",
            answer: "Spanish",
            accept: ["spanish"],
            explanation:
              "The constitution protects voting, office-holding, jury service, and education regardless of English or Spanish literacy.",
          },
          {
            prompt:
              "New Mexico has the only fully volunteer (___) state legislature in the nation.",
            answer: "unpaid",
            explanation:
              "New Mexico legislators receive per diem and mileage but no salary — the only unpaid legislature in the country.",
          },
          {
            prompt:
              "New Mexico's current constitution is the Constitution of ___.",
            answer: "1912",
            explanation:
              "New Mexico adopted its constitution in 1912, becoming the 47th state that year.",
          },
          {
            prompt:
              "New Mexico's Legislature has a 42-member Senate and a ___-member House.",
            answer: "70",
            accept: ["seventy"],
            explanation:
              "The New Mexico House has 70 members (2-year terms) and the Senate has 42 (4-year terms).",
          },
          {
            prompt:
              "A New Mexico judge is first appointed, then must win a ___ election, then face retention votes.",
            answer: "partisan",
            explanation:
              "New Mexico blends appointment, partisan election, and retention — a distinctive three-step judicial method.",
          },
          {
            prompt:
              "TRUE or FALSE: New Mexico pays its legislators an annual salary like other states.",
            answer: "false",
            explanation:
              "False. New Mexico is the only state with an unpaid legislature — legislators receive only per diem and mileage.",
          },
        ],
      },
    },

    // ── Section 6: Final quiz ────────────────────────────────────────────
    {
      slug: "nm-quiz",
      title: "6 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "What is distinctive about New Mexico's 1912 constitution?",
            options: [
              "It bans all languages but English",
              "It contains special protections for Spanish-speaking citizens, making the state effectively bilingual",
              "It has no bill of rights",
              "It created a unicameral legislature",
            ],
            correctIndex: 1,
            explanation:
              "New Mexico's constitution protects voting, office-holding, jury service, and education regardless of English/Spanish literacy.",
            sourceLessonSlug: "nm-bilingual",
          },
          {
            prompt: "Which sovereign governments exist within New Mexico?",
            options: [
              "None",
              "Many tribal nations, including 19 Pueblos and the Navajo Nation",
              "Only city governments",
              "Only the federal government",
            ],
            correctIndex: 1,
            explanation:
              "New Mexico is home to 19 Pueblos plus the Navajo Nation and Apache tribes — sovereign governments.",
            sourceLessonSlug: "nm-bilingual",
          },
          {
            prompt: "What is unique about New Mexico's legislature?",
            options: [
              "It has 400 members",
              "It is the only fully volunteer (unpaid) state legislature — no salary, only per diem",
              "It meets year-round",
              "It is appointed",
            ],
            correctIndex: 1,
            explanation:
              "New Mexico legislators receive no salary — the only unpaid legislature in the nation.",
            sourceLessonSlug: "nm-unpaid-legislature",
          },
          {
            prompt: "How long are New Mexico's legislative sessions?",
            options: [
              "Year-round",
              "60 days in odd years and 30 days (mostly budget) in even years",
              "90 days every other year",
              "45 days annually",
            ],
            correctIndex: 1,
            explanation:
              "New Mexico alternates a 60-day session (odd years) and a 30-day session (even years).",
            sourceLessonSlug: "nm-unpaid-legislature",
          },
          {
            prompt: "How does a New Mexico judge reach and keep the bench?",
            options: [
              "Lifetime appointment with no review",
              "Appointed by the Governor, then wins a partisan election, then faces retention votes",
              "Elected by the Legislature",
              "Chosen by lottery",
            ],
            correctIndex: 1,
            explanation:
              "New Mexico blends appointment, partisan election, and retention — a three-step hybrid.",
            sourceLessonSlug: "nm-executive-courts",
          },
          {
            prompt: "Which powerful statewide office reflects New Mexico's vast public lands?",
            options: [
              "The Commissioner of Public Lands",
              "The Chief Justice",
              "The Speaker of the House",
              "The Adjutant General",
            ],
            correctIndex: 0,
            explanation:
              "New Mexico elects a Commissioner of Public Lands, an influential office given the state's extensive public lands.",
            sourceLessonSlug: "nm-executive-courts",
          },
          {
            prompt: "Can New Mexico citizens start a general law by initiative?",
            options: [
              "Yes, a strong initiative",
              "No — there is no statewide initiative; the Legislature proposes amendments for voters",
              "Only in even years",
              "Only in Spanish",
            ],
            correctIndex: 1,
            explanation:
              "New Mexico has no statewide initiative for general laws; citizens ratify amendments the Legislature refers.",
            sourceLessonSlug: "nm-lawmaking-involved",
          },
          {
            prompt: "How many counties does New Mexico have?",
            options: ["10", "33", "159", "254"],
            correctIndex: 1,
            explanation:
              "New Mexico has 33 counties, alongside its municipalities and sovereign tribal nations.",
            sourceLessonSlug: "nm-lawmaking-involved",
          },
          {
            prompt: "Which voting feature does New Mexico offer?",
            options: [
              "No registration ever",
              "Same-day registration, early and absentee voting (plus constitutional protection regardless of English/Spanish literacy)",
              "Voting only for landowners",
              "In-person Election-Day voting only",
            ],
            correctIndex: 1,
            explanation:
              "New Mexico offers same-day registration and early/absentee voting, and its constitution protects voters regardless of language literacy.",
            sourceLessonSlug: "nm-lawmaking-involved",
          },
          {
            prompt: "Why does this course tell you to VERIFY New Mexico's voting rules?",
            options: [
              "Because New Mexico has no elections office",
              "Because registration and early/absentee rules are run by county clerks and change — confirm at sos.nm.gov",
              "Because only Congress sets them",
              "Because voting is secret",
            ],
            correctIndex: 1,
            explanation:
              "New Mexico administers voting locally and rules evolve, so sos.nm.gov is the authoritative, current source.",
            sourceLessonSlug: "nm-lawmaking-involved",
          },
        ],
      },
    },
  ],
};
