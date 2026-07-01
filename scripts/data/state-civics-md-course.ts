// Authored "Maryland Civics: How Your State Government Works" — the Maryland entry in
// the per-state Civics layer on Learn.WitUS. State-level companion to the general
// Civics courses: those teach the SYSTEM; this teaches Maryland's version.
//
// Factual and strictly non-partisan. Every content lesson is cited (APA 7 in-line +
// a `## Sources` bibliography) to MARYLAND'S OWN OFFICIAL SOURCES: the General Assembly
// (mgaleg.maryland.gov), the State Board of Elections (elections.maryland.gov), the
// Judiciary (mdcourts.gov), and the Maryland Constitution (1867).
//
// Authoritative-values rule (load-bearing): state facts VARY and CHANGE. Maryland
// renamed its top court in 2022 (Court of Appeals -> Supreme Court of Maryland). Time-
// sensitive items are flagged and point learners to elections.maryland.gov.
//
// Organized into sections (course modules), ending with a fill-in exercise + a final
// quiz whose every question links back to the lesson that teaches the answer.

import type { AuthoredCourse } from "./authored-course";

export const STATE_CIVICS_MD_COURSE: AuthoredCourse = {
  title: "Maryland Civics: How Your State Government Works",
  description:
    "A practical, non-partisan guide to how the state of Maryland governs itself — and how you take part where you live. Maryland's Governor holds what many call the STRONGEST executive budget power in the nation: the Legislature can generally only CUT items from the Governor's budget, not add spending. You'll learn Maryland's Constitution of 1867, its compact plural executive (Governor/Lt. Governor, Attorney General, Comptroller), its General Assembly of 47 senators and 141 delegates, its recently renamed Supreme Court of Maryland, and its distinctive local map of 23 counties PLUS the independent City of Baltimore. It also covers Maryland's referendum (but no initiative) and its voting rules. Time-sensitive facts are flagged, pointing to elections.maryland.gov. Cited to Maryland's own official sources (mgaleg.maryland.gov, elections.maryland.gov, mdcourts.gov).",
  lessons: [
    // ── Section 1: The strongest budget governor ─────────────────────────
    {
      slug: "md-budget-power",
      title: "1 · Maryland's Governor: the strongest budget power in the nation",
      section: "What Makes Maryland Unique",
      body: `Maryland's most distinctive civic feature is the **extraordinary budget power of its Governor** — widely described as the **strongest gubernatorial budget authority in the United States** (Maryland General Assembly, n.d.).

**How it works.** In most states, the legislature can freely **add** to, cut, or rewrite the governor's proposed budget. In Maryland, the **"executive budget" system** (in the Constitution since 1916) flips that: the **Governor proposes the budget, and the General Assembly can generally only CUT or reduce items — it cannot ADD spending or move money to new purposes** in the main budget bill (Maryland General Assembly, n.d.). The Legislature can strike or lower a line, but it **cannot raise it or insert its own new spending** the way legislatures elsewhere do.

Why it matters: this single rule makes Maryland's Governor **unusually powerful over state finances.** Whoever holds the governorship largely **sets the spending agenda**, and the Legislature reacts within tight limits. (In recent years Maryland has adopted some mechanisms to give the Legislature slightly more flexibility, so ⚠️ **confirm the current details** at mgaleg.maryland.gov — but the core executive-budget principle remains Maryland's signature.)

Maryland governs under its **Constitution of 1867** (its fourth) and became the **7th state on April 28, 1788.**

**A note this course keeps returning to:** state facts **vary and change.** Everything here is current as of authoring, but Maryland's own government (mgaleg.maryland.gov, elections.maryland.gov, mdcourts.gov) is the authoritative source. When something is time-sensitive — like the court's new name or budget mechanics — we say so.

**Check yourself.** What can Maryland's Legislature generally NOT do to the Governor's proposed budget, and why does that make the Governor so powerful?

## Sources
- Maryland General Assembly. (n.d.). *The executive budget system; the Maryland Constitution (1867)*. mgaleg.maryland.gov. https://mgaleg.maryland.gov/
- Maryland State Board of Elections. (n.d.). *Maryland government overview*. elections.maryland.gov. https://elections.maryland.gov/`,
    },

    // ── Section 2: The executive + the General Assembly ──────────────────
    {
      slug: "md-executive-legislature",
      title: "2 · The executive and the General Assembly",
      section: "The Three Branches",
      body: `**Executive — a compact plural executive.** Maryland voters elect a **small** set of statewide officials (Maryland State Board of Elections, n.d.):
- The **Governor** and **Lieutenant Governor** run **together on a joint ticket.**
- Voters separately elect the **Attorney General** and the **Comptroller** (Maryland's chief tax and fiscal officer — a notably powerful office here).
- The **Secretary of State** and **Treasurer** are **not** elected by the public: the **Secretary of State is appointed by the Governor**, and the **Treasurer is elected by the General Assembly.**

So Maryland's *elected* statewide executive is compact — Governor/Lt. Governor, Attorney General, Comptroller — while the strong budget power (Lesson 1) makes the Governor dominant.

**Legislative — the Maryland General Assembly.** A bicameral body meeting in Annapolis (Maryland General Assembly, n.d.):
- **House of Delegates — 141 delegates.**
- **Senate — 47 senators.**
- Members serve **4-year terms**, aligned with the Governor's four-year cycle. Maryland's is a part-time Legislature with a fixed annual session (famously **90 days**).

**Veto and override.** The Governor may veto bills; the General Assembly overrides with a **three-fifths vote of each chamber.**

**Check yourself.** Which statewide executive officers do Maryland voters elect, and how long is a Maryland legislative session?

## Sources
- Maryland State Board of Elections. (n.d.). *Statewide elected officials*. elections.maryland.gov. https://elections.maryland.gov/
- Maryland General Assembly. (n.d.). *The General Assembly; the 90-day session*. mgaleg.maryland.gov. https://mgaleg.maryland.gov/`,
    },

    // ── Section 3: The courts (and a 2022 name change) ───────────────────
    {
      slug: "md-courts",
      title: "3 · Maryland's courts and a 2022 name change",
      section: "The Three Branches",
      body: `**A recent renaming to know.** ⚠️ Until 2022, Maryland's **highest court** was called the **"Court of Appeals,"** and its intermediate court was the "Court of Special Appeals" — a naming scheme (shared historically with New York) that confused many people, because in most states "Court of Appeals" is a *lower* appellate court. In **2022, Maryland voters approved renaming them**: the highest court became the **"Supreme Court of Maryland,"** and the intermediate court became the **"Appellate Court of Maryland"** (Maryland Judiciary, n.d.). So older sources may still say "Court of Appeals" — don't be thrown; it's the same court, now called the **Supreme Court of Maryland** (7 justices).

**How Maryland picks its judges** (Maryland Judiciary, n.d.):
- **Appellate judges** (Supreme Court and Appellate Court) are **appointed by the Governor** (advised by a nominating commission) with **Senate confirmation**, and then face voters in periodic **yes/no retention elections** (10-year terms).
- **Circuit Court** (trial) judges are appointed initially but then must **run in contested elections** to keep their seats — a hybrid that mixes appointment and election.
- **District Court** judges are appointed by the Governor with Senate consent.

So Maryland blends **merit appointment** with some **elections**, depending on the court.

**Check yourself.** What is Maryland's highest court now called (and what was it called before 2022), and how are its appellate judges chosen?

## Sources
- Maryland Judiciary. (n.d.). *The Maryland courts; the 2022 renaming; judicial selection*. mdcourts.gov. https://www.mdcourts.gov/
- Maryland General Assembly. (n.d.). *2022 constitutional amendment renaming the appellate courts*. mgaleg.maryland.gov. https://mgaleg.maryland.gov/`,
    },

    // ── Section 4: How a bill becomes law + the referendum ───────────────
    {
      slug: "md-bill-and-referendum",
      title: "4 · How a bill becomes law — and Maryland's referendum (but no initiative)",
      section: "Making Law",
      body: `Maryland makes law **through the General Assembly**, with a distinctive **citizen check** but **no citizen initiative.**

**How a bill becomes law** (Maryland General Assembly, n.d.):
1. **Introduction.** A member introduces a bill in the House of Delegates or Senate during the 90-day session.
2. **Committee.** Hearings, amendments, and a committee vote.
3. **Floor votes.** Both chambers must pass the bill.
4. **Governor.** The Governor may sign, veto (a **three-fifths** override), or let it become law — and remember the **budget bill** is special (Lesson 1).

**The referendum — a citizen veto.** Maryland citizens **cannot** propose new laws by initiative, but they **can** use a **"petition to referendum"**: by gathering signatures, voters can **suspend a law the General Assembly just passed and put it to a statewide vote** to accept or reject it (Maryland State Board of Elections, n.d.). Marylanders have used this to decide high-profile questions. So the citizen power here is a **veto** (reject a law), not an **initiative** (start a law) — an important distinction from states like Colorado or California.

Constitutional **amendments** are proposed by the General Assembly (by a **three-fifths vote**) and then ratified by the **voters.**

**Check yourself.** What is the difference between Maryland's referendum and a citizen initiative, and which one does Maryland have?

## Sources
- Maryland General Assembly. (n.d.). *How a bill becomes law; amending the constitution*. mgaleg.maryland.gov. https://mgaleg.maryland.gov/
- Maryland State Board of Elections. (n.d.). *Petition to referendum*. elections.maryland.gov. https://elections.maryland.gov/`,
    },

    // ── Section 5: Local government (independent Baltimore) + involved ───
    {
      slug: "md-local-involved",
      title: "5 · Local government, independent Baltimore, and how to take part",
      section: "Get Involved",
      body: `**Local government — 23 counties plus an independent city** (Maryland General Assembly, n.d.):
- Maryland has **23 counties** — many of them **home-rule "charter" counties** (like Montgomery and Baltimore County) with elected councils and executives and broad self-governing power.
- ⚠️ **Plus one independent city: Baltimore.** The **City of Baltimore is NOT part of any county** — it is an **independent city**, a county-equivalent with its own government (the same idea you met in Virginia and Missouri). Note the classic Maryland source of confusion: **Baltimore City and Baltimore County are two different governments.**
- **Municipalities** (cities and towns) provide services within counties, and **special districts** handle schools and utilities.

**Voting.** ⚠️ **Time-sensitive:** Maryland offers **early in-person voting**, **no-excuse mail-in voting** with drop boxes, and **same-day registration** during early voting. Rules and deadlines are administered by the **State Board of Elections and local boards** and can change — confirm the **current** details at **elections.maryland.gov** before you vote.

**How to take part:**
- **Register and vote** — use early voting or mail-in; check your status at elections.maryland.gov.
- **Use the referendum.** If the General Assembly passes a law you want to challenge, you can join a **petition to referendum** to send it to the voters.
- **Show up locally.** County councils/commissions, city councils, and school boards meet publicly; in charter counties, an elected **county executive** runs things day to day.
- **Contact your legislators** in Annapolis — you have one Delegate-district team and one Senator (Maryland districts elect multiple delegates).
- **Run** — school board, city council, and county council are reachable local starting points.

**Check yourself.** What is unusual about the City of Baltimore, and what citizen tool lets Marylanders challenge a new law?

## Sources
- Maryland General Assembly. (n.d.). *Local government: charter counties and the independent City of Baltimore*. mgaleg.maryland.gov. https://mgaleg.maryland.gov/
- Maryland State Board of Elections. (n.d.). *Voting in Maryland: early voting, mail-in, same-day registration*. elections.maryland.gov. https://elections.maryland.gov/`,
    },

    // ── Section 6: Practice (fill in the blanks) ─────────────────────────
    {
      slug: "md-exercise",
      title: "6 · Practice: fill in the blanks",
      section: "Practice",
      exercise: {
        instructions:
          "Fill in each blank about Maryland state government, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt:
              "Maryland's Governor has the nation's strongest ___ power: the Legislature can generally only cut, not add, spending.",
            answer: "budget",
            explanation:
              "Under Maryland's executive-budget system, the General Assembly may reduce items in the Governor's budget but not add new spending.",
          },
          {
            prompt:
              "Maryland's current constitution is the Constitution of ___.",
            answer: "1867",
            explanation:
              "Maryland's fourth constitution, adopted in 1867, still governs the state.",
          },
          {
            prompt:
              "In 2022 Maryland renamed its highest court from the 'Court of Appeals' to the ___ Court of Maryland.",
            answer: "Supreme",
            accept: ["supreme"],
            explanation:
              "Voters approved renaming the top court the Supreme Court of Maryland (7 justices) and the intermediate court the Appellate Court of Maryland.",
          },
          {
            prompt:
              "Maryland citizens can challenge a new law with a petition to ___ (a citizen veto), but cannot start laws by initiative.",
            answer: "referendum",
            explanation:
              "The petition to referendum suspends a law the Legislature passed and sends it to the voters — a veto, not an initiative.",
          },
          {
            prompt:
              "The City of ___ is not part of any county — it is an independent city.",
            answer: "Baltimore",
            accept: ["baltimore"],
            explanation:
              "Baltimore City is a county-equivalent independent city; Baltimore City and Baltimore County are separate governments.",
          },
          {
            prompt:
              "TRUE or FALSE: Maryland has a citizen initiative that lets voters propose new statutes.",
            answer: "false",
            explanation:
              "False. Maryland has a referendum (to reject laws) but no citizen initiative (to propose laws).",
          },
        ],
      },
    },

    // ── Section 7: Final quiz ────────────────────────────────────────────
    {
      slug: "md-quiz",
      title: "7 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "What is distinctive about Maryland's Governor?",
            options: [
              "The Governor cannot veto bills",
              "The Governor has the nation's strongest budget power — the Legislature can generally only cut, not add, spending",
              "The Governor serves for life",
              "The Governor is chosen by the Legislature",
            ],
            correctIndex: 1,
            explanation:
              "Under the executive-budget system, the General Assembly may reduce but not add to the Governor's proposed budget.",
            sourceLessonSlug: "md-budget-power",
          },
          {
            prompt: "Which statewide officers do Maryland voters elect?",
            options: [
              "Nine officials",
              "Governor/Lt. Governor (joint ticket), Attorney General, and Comptroller",
              "Only the Governor",
              "The Secretary of State and Treasurer",
            ],
            correctIndex: 1,
            explanation:
              "Maryland's elected statewide executive is compact: Governor/Lt. Governor, Attorney General, and Comptroller.",
            sourceLessonSlug: "md-executive-legislature",
          },
          {
            prompt: "How many members are in the Maryland House of Delegates and Senate?",
            options: [
              "141 Delegates / 47 Senators",
              "100 Delegates / 40 Senators",
              "150 Delegates / 50 Senators",
              "99 Delegates / 33 Senators",
            ],
            correctIndex: 0,
            explanation:
              "The House of Delegates has 141 members and the Senate has 47; both serve 4-year terms.",
            sourceLessonSlug: "md-executive-legislature",
          },
          {
            prompt: "What did Maryland's highest court get renamed to in 2022?",
            options: [
              "The Court of Appeals",
              "The Supreme Court of Maryland (formerly the Court of Appeals)",
              "The Superior Court",
              "The General Court",
            ],
            correctIndex: 1,
            explanation:
              "Voters renamed the top court the Supreme Court of Maryland; older sources may still say 'Court of Appeals.'",
            sourceLessonSlug: "md-courts",
          },
          {
            prompt: "How are Maryland's appellate judges chosen?",
            options: [
              "Elected in partisan races",
              "Appointed by the Governor with Senate confirmation, then retention elections",
              "Elected by the Legislature",
              "Chosen by lottery",
            ],
            correctIndex: 1,
            explanation:
              "Appellate judges are appointed with Senate confirmation and then face yes/no retention elections (Circuit judges run in contested elections).",
            sourceLessonSlug: "md-courts",
          },
          {
            prompt: "What citizen power do Marylanders have over new laws?",
            options: [
              "A citizen initiative to propose laws",
              "A petition to referendum — a citizen veto that sends a new law to the voters",
              "Direct repeal by any citizen",
              "None at all",
            ],
            correctIndex: 1,
            explanation:
              "Maryland has a referendum (reject a law) but no initiative (propose a law).",
            sourceLessonSlug: "md-bill-and-referendum",
          },
          {
            prompt: "Which constitution governs Maryland today?",
            options: [
              "The Constitution of 1776",
              "The Constitution of 1867",
              "The Constitution of 1945",
              "It uses the federal constitution only",
            ],
            correctIndex: 1,
            explanation:
              "Maryland's fourth constitution, adopted in 1867, is in force.",
            sourceLessonSlug: "md-budget-power",
          },
          {
            prompt: "What is unusual about the City of Baltimore?",
            options: [
              "It is the state capital",
              "It is an independent city, not part of any county",
              "It has no government",
              "It governs the entire state",
            ],
            correctIndex: 1,
            explanation:
              "Baltimore City is a county-equivalent independent city; it and Baltimore County are separate governments.",
            sourceLessonSlug: "md-local-involved",
          },
          {
            prompt: "How many counties does Maryland have (plus the independent city)?",
            options: ["10 + Baltimore", "23 + Baltimore City", "50 + Baltimore", "5 + Baltimore"],
            correctIndex: 1,
            explanation:
              "Maryland has 23 counties plus the independent City of Baltimore; many counties are home-rule charter counties.",
            sourceLessonSlug: "md-local-involved",
          },
          {
            prompt: "Why does this course tell you to VERIFY Maryland's court name and budget details?",
            options: [
              "Because Maryland has no government website",
              "Because the top court was renamed in 2022 and budget-flexibility rules have been adjusted — confirm at mdcourts.gov / mgaleg.maryland.gov",
              "Because only Congress sets them",
              "Because voting is secret",
            ],
            correctIndex: 1,
            explanation:
              "Maryland recently renamed its highest court and has tweaked budget mechanics, so the state's own sites are the authoritative, current source.",
            sourceLessonSlug: "md-courts",
          },
        ],
      },
    },
  ],
};
