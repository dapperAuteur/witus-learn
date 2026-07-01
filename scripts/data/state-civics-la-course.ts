// Authored "Louisiana Civics: How Your State Government Works" — the Louisiana entry in
// the per-state Civics layer on Learn.WitUS. State-level companion to the general
// Civics courses: those teach the SYSTEM; this teaches Louisiana's version.
//
// Factual and strictly non-partisan. Every content lesson is cited (APA 7 in-line +
// a `## Sources` bibliography) to LOUISIANA'S OWN OFFICIAL SOURCES: the Legislature
// (legis.la.gov), the Secretary of State / elections (sos.la.gov), the courts
// (lasc.org), and the Louisiana Constitution (1974).
//
// Authoritative-values rule (load-bearing): state facts VARY and CHANGE. Louisiana is
// the nation's only civil-law state, uses parishes instead of counties, and runs a
// distinctive "jungle primary." Time-sensitive items (election dates, voter rules) are
// flagged and point learners to sos.la.gov.
//
// Organized into sections (course modules), ending with a fill-in exercise + a final
// quiz whose every question links back to the lesson that teaches the answer.

import type { AuthoredCourse } from "./authored-course";

export const STATE_CIVICS_LA_COURSE: AuthoredCourse = {
  title: "Louisiana Civics: How Your State Government Works",
  description:
    "A practical, non-partisan guide to how the state of Louisiana governs itself — and how you take part where you live. Louisiana is unlike any other state: it is the ONLY state whose legal system is built on CIVIL LAW (the French/Spanish/Napoleonic tradition) rather than English common law; it calls its counties PARISHES (64 of them); and it elects officials through a distinctive 'jungle primary' in which all candidates share one ballot and a runoff follows if no one wins a majority. You'll learn Louisiana's Constitution of 1974, its plural executive of seven separately elected statewide officers, its Legislature of 39 senators and 105 representatives, how it elects its judges, and its parish and city-parish local governments (including consolidated New Orleans). Time-sensitive facts are flagged, pointing to sos.la.gov. Cited to Louisiana's own official sources (legis.la.gov, sos.la.gov, lasc.org).",
  lessons: [
    // ── Section 1: Civil law — Louisiana's defining difference ───────────
    {
      slug: "la-civil-law",
      title: "1 · Louisiana's defining difference: a civil-law state",
      section: "What Makes Louisiana Unique",
      body: `Start with the single most important fact about Louisiana government: **Louisiana is the only U.S. state whose legal system is based on CIVIL LAW**, not the English **common law** used by the other 49 states (Louisiana State Legislature, n.d.).

**What that means.** Louisiana's private law descends from the **French and Spanish legal traditions** — ultimately the **Roman/Napoleonic civil-law** family — because Louisiana was a French and Spanish colony before the **Louisiana Purchase (1803)**. When Louisiana became the **18th state on April 30, 1812**, it kept that heritage. The practical consequences are real (Louisiana State Legislature, n.d.):
- Louisiana law is organized in a **Civil Code** — comprehensive written codes that judges apply — rather than relying primarily on **judicial precedent (case law)** the way common-law states do.
- Louisiana uses **distinctive legal vocabulary** you won't find elsewhere: **"parishes"** (not counties), **"usufruct"**, and **"forced heirship"** (rules that reserve part of an estate for certain children) among them.
- Property, inheritance, and contract rules can differ from the rest of the country.

Why this leads the course: nearly every distinctive feature of Louisiana civics — the word "parish," the legal culture, even the flavor of its politics — traces back to this **civil-law, French-and-Spanish colonial** foundation. Keep it in mind as the through-line.

**A note this course keeps returning to:** state facts **vary and change.** Everything here is current as of authoring, but Louisiana's own government (legis.la.gov, sos.la.gov, lasc.org) is the authoritative source. When something is time-sensitive — like election dates or voter rules — we say so.

**Check yourself.** What legal tradition is Louisiana's system based on, and how does that differ from the other 49 states?

## Sources
- Louisiana State Legislature. (n.d.). *Louisiana's civil-law system and the Civil Code*. legis.la.gov. https://www.legis.la.gov/
- Louisiana Secretary of State. (n.d.). *About Louisiana: history and government*. sos.la.gov. https://www.sos.la.gov/`,
    },

    // ── Section 2: The Constitution + the three branches ─────────────────
    {
      slug: "la-constitution-branches",
      title: "2 · The Constitution of 1974 and the three branches",
      section: "The Three Branches",
      body: `Louisiana governs under its **Constitution of 1974** — remarkably, its **eleventh** constitution (Louisiana has rewritten its constitution more than almost any state). It divides power into the familiar three branches (Louisiana State Legislature, n.d.).

**Legislative — the Louisiana Legislature.** A bicameral body meeting in Baton Rouge:
- **House of Representatives — 105 representatives.**
- **Senate — 39 senators.**
- Members serve **4-year terms** and face **term limits** — **three consecutive terms (12 years)** in a chamber.

**Executive — a plural executive.** Louisiana voters elect **seven** separate statewide officials, so executive power is widely divided (Louisiana Secretary of State, n.d.):
1. **Governor** — the chief executive (a comparatively strong one over the budget).
2. **Lieutenant Governor** — elected **separately** (can be a different party than the Governor); oversees tourism/culture.
3. **Secretary of State** — runs elections.
4. **Attorney General** — the state's lawyer.
5. **State Treasurer.**
6. **Commissioner of Agriculture and Forestry.**
7. **Commissioner of Insurance.**

**Judicial — the Louisiana courts.** District courts up through the Courts of Appeal and the **Louisiana Supreme Court** (7 justices). Louisiana **elects** its judges — covered later with its distinctive primary.

**Veto and override.** The Governor may veto bills (and line-item veto appropriations); the Legislature overrides with a **two-thirds vote of each chamber.**

**Check yourself.** How many statewide executive officials do Louisiana voters elect, and how many members sit in each legislative chamber?

## Sources
- Louisiana State Legislature. (n.d.). *Constitution of Louisiana (1974); the branches of government*. legis.la.gov. https://www.legis.la.gov/
- Louisiana Secretary of State. (n.d.). *Statewide elected officials*. sos.la.gov. https://www.sos.la.gov/`,
    },

    // ── Section 3: The jungle primary ────────────────────────────────────
    {
      slug: "la-jungle-primary",
      title: "3 · Louisiana's 'jungle primary' (the open primary)",
      section: "Elections",
      body: `Louisiana runs elections in a way no state did before it — the **"jungle primary,"** officially the **open primary** (sometimes called the "Louisiana primary") (Louisiana Secretary of State, n.d.):

**How it works.**
- **All candidates for an office — of every party — appear together on ONE ballot** in the first round. There are no separate Democratic and Republican primaries.
- **Every voter**, regardless of party, votes on that single ballot.
- If a candidate wins an outright **majority (more than 50%)**, they **win the office immediately** — no second round.
- If **no one** gets a majority, the **top two finishers advance to a runoff** — **even if they belong to the same party.**

This is different from Washington's or California's "top-two," where the top two **always** advance to a general election; in Louisiana, a candidate can **win outright in the first round** by clearing 50%. It's a genuine Louisiana invention, in use for state and local offices for decades.

**Timing.** Louisiana often holds these elections on an **off-cycle calendar** — for example, the **Governor is elected in odd-numbered years** (an October primary with a November runoff, e.g., 2023, 2027). ⚠️ **Time-sensitive:** exact dates, and the rules for federal offices, have shifted over the years. Confirm the **current** election calendar and rules at **sos.la.gov** before you plan to vote.

**Check yourself.** In Louisiana's jungle primary, what happens if a candidate wins more than 50% in the first round — and what if no one does?

## Sources
- Louisiana Secretary of State. (n.d.). *Louisiana's open (jungle) primary and election calendar*. sos.la.gov. https://www.sos.la.gov/`,
    },

    // ── Section 4: How a bill becomes law + amending ─────────────────────
    {
      slug: "la-bill-to-law",
      title: "4 · How a bill becomes a Louisiana law",
      section: "Making Law",
      body: `Louisiana makes its statutes **through the Legislature** (Louisiana State Legislature, n.d.):

1. **Introduction.** A legislator introduces a bill in the House or Senate during the annual session in Baton Rouge (Louisiana alternates between general sessions and shorter fiscal-only sessions in different years).
2. **Committee.** Hearings, amendments, and a committee vote.
3. **Floor votes.** Both chambers must pass the bill.
4. **Governor.** The Governor may **sign**, **veto**, or **line-item veto** appropriations; a **two-thirds** override is possible — and Louisiana even provides for a **veto-override session** if the Governor vetoes bills after the session ends.

**Amending the constitution.** Unlike some Western states, Louisiana has **no general citizen initiative** to propose statutes. Constitutional **amendments**, however, are frequent: the **Legislature proposes** an amendment by a **two-thirds vote of each chamber**, and it then goes to the **voters** for ratification. Because Louisiana's constitution is long and detailed, voters see constitutional amendments on the ballot **often** — reading them is a real civic task in Louisiana.

**The civil-law flavor.** Remember from Lesson 1: Louisiana statutes fit within a **civil-law Civil Code** framework, so the *style* of Louisiana law — comprehensive codes rather than precedent-driven common law — shapes how these bills are written and applied.

**Check yourself.** Can Louisiana citizens initiate a statute by petition? How does a constitutional amendment reach Louisiana voters?

## Sources
- Louisiana State Legislature. (n.d.). *How a bill becomes law; amending the constitution*. legis.la.gov. https://www.legis.la.gov/`,
    },

    // ── Section 5: Parishes and local government ─────────────────────────
    {
      slug: "la-parishes",
      title: "5 · Parishes: Louisiana's counties by another name",
      section: "Local Government",
      body: `Here is Louisiana's most famous vocabulary difference: **Louisiana does not have counties — it has PARISHES** (Louisiana Secretary of State, n.d.).

**Why "parish"?** The term is a legacy of Louisiana's **French and Spanish Catholic colonial past**, when church parishes doubled as administrative districts. When other states organized into "counties," Louisiana kept **"parish"** — and it's the **only state that uses the word** (Alaska, the other exception, uses **"boroughs"**). There are **64 parishes.**

**How parishes are governed** (Louisiana State Legislature, n.d.):
- Many parishes are run by a **Police Jury** — a traditional Louisiana governing board (the name is another colonial holdover; a "police jury" is the parish's legislative body, roughly like a county commission).
- Others have adopted a **home-rule charter** with a **parish president and council** form of government.
- Each parish also elects officials like a **sheriff**, **clerk of court**, and **assessor**.

**City-parish consolidation.** Louisiana has notable **consolidated city-parish governments**, where a city and its parish merge into one government — most famously **New Orleans (coterminous with Orleans Parish)** and **Baton Rouge (the City of Baton Rouge and East Baton Rouge Parish).**

The practical effect: in Louisiana, when other Americans say "county," you say **"parish"** — and your parish (via a police jury or a parish president and council) handles roads, drainage, and local services.

**Check yourself.** What does Louisiana call its counties, why, and what is a "police jury"?

## Sources
- Louisiana Secretary of State. (n.d.). *Parishes of Louisiana*. sos.la.gov. https://www.sos.la.gov/
- Louisiana State Legislature. (n.d.). *Local government: police juries, home-rule charters, city-parish consolidation*. legis.la.gov. https://www.legis.la.gov/`,
    },

    // ── Section 6: Courts, voting, getting involved ──────────────────────
    {
      slug: "la-courts-involved",
      title: "6 · Judges, voting, and how to take part",
      section: "Get Involved",
      body: `**How Louisiana picks its judges.** Louisiana **elects** its judges — from district courts up to the **Louisiana Supreme Court** (7 justices elected from districts to **10-year terms**) — using the same **open ('jungle') primary** format as other Louisiana offices (Louisiana Supreme Court, n.d.). So judicial candidates share one ballot, and a majority wins outright (else a runoff). When a seat opens mid-term, the Supreme Court may appoint an interim judge pending an election.

**Voting in Louisiana.** ⚠️ **Time-sensitive:** Louisiana requires **ID to vote** in person (with a fallback affidavit process), offers **early in-person voting**, and permits **absentee (mail) voting for qualifying reasons.** Registration, ID, and early-voting rules are administered by the **Secretary of State and parish Registrars of Voters** and can change. Confirm the **current** rules at **sos.la.gov** or your parish registrar before you vote.

**How to take part:**
- **Register and vote** — bring ID; use early voting to beat lines; check whether you qualify for absentee. Watch for the **many constitutional amendments** on Louisiana ballots and read them.
- **Show up locally.** Your **police jury or parish council**, city council, and school board hold public meetings — parish government decides a lot in Louisiana.
- **Contact your legislators** in Baton Rouge — you have one Representative and one Senator.
- **Run** — school board, city council, police jury/parish council, and parish offices are reachable local starting points.

**Check yourself.** How are Louisiana Supreme Court justices chosen, and where should you confirm current voting rules?

## Sources
- Louisiana Supreme Court. (n.d.). *The Louisiana Supreme Court and judicial elections*. lasc.org. https://www.lasc.org/
- Louisiana Secretary of State. (n.d.). *Voting in Louisiana: registration, ID, early and absentee voting*. sos.la.gov. https://www.sos.la.gov/`,
    },

    // ── Section 7: Practice (fill in the blanks) ─────────────────────────
    {
      slug: "la-exercise",
      title: "7 · Practice: fill in the blanks",
      section: "Practice",
      exercise: {
        instructions:
          "Fill in each blank about Louisiana state government, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt:
              "Louisiana is the only U.S. state whose legal system is based on ___ law rather than English common law.",
            answer: "civil",
            explanation:
              "Louisiana's private law descends from the French/Spanish (Napoleonic) civil-law tradition, organized in a Civil Code.",
          },
          {
            prompt: "Louisiana calls its counties ___.",
            answer: "parishes",
            accept: ["parish"],
            explanation:
              "Louisiana has 64 parishes — a term from its French/Spanish Catholic colonial past; it is the only state to use it.",
          },
          {
            prompt:
              "In Louisiana's 'jungle primary,' a candidate who wins more than ___% of the vote in the first round wins outright.",
            answer: "50",
            accept: ["fifty"],
            explanation:
              "All candidates share one ballot; a majority (over 50%) wins immediately, otherwise the top two advance to a runoff — even if same-party.",
          },
          {
            prompt:
              "Louisiana's current constitution — its eleventh — is the Constitution of ___.",
            answer: "1974",
            explanation:
              "Louisiana adopted its 1974 constitution, having rewritten its constitution more times than almost any state.",
          },
          {
            prompt:
              "A traditional Louisiana parish governing board is called a Police ___.",
            answer: "Jury",
            accept: ["jury"],
            explanation:
              "A police jury is a parish's legislative body (like a county commission); some parishes instead use a parish president and council under a home-rule charter.",
          },
          {
            prompt:
              "TRUE or FALSE: Louisiana has a general citizen initiative letting voters put statutes on the ballot by petition.",
            answer: "false",
            explanation:
              "False. Louisiana has no general citizen initiative; constitutional amendments are proposed by the Legislature (two-thirds) and then ratified by voters.",
          },
        ],
      },
    },

    // ── Section 8: Final quiz ────────────────────────────────────────────
    {
      slug: "la-quiz",
      title: "8 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "What makes Louisiana's legal system unique among U.S. states?",
            options: [
              "It has no courts",
              "It is based on civil law (French/Spanish/Napoleonic), not English common law",
              "It uses only federal law",
              "It bans written statutes",
            ],
            correctIndex: 1,
            explanation:
              "Louisiana is the only civil-law state, a legacy of its French and Spanish colonial past, organized in a Civil Code.",
            sourceLessonSlug: "la-civil-law",
          },
          {
            prompt: "What does Louisiana call its counties, and how many are there?",
            options: [
              "Boroughs; 16",
              "Parishes; 64",
              "Shires; 100",
              "Districts; 50",
            ],
            correctIndex: 1,
            explanation:
              "Louisiana has 64 parishes — the only state to use 'parish,' from its Catholic colonial heritage.",
            sourceLessonSlug: "la-parishes",
          },
          {
            prompt: "In Louisiana's 'jungle primary,' what happens if a candidate wins over 50% in the first round?",
            options: [
              "They still must face a runoff",
              "They win the office outright, with no second round",
              "The Legislature decides the winner",
              "The election is voided",
            ],
            correctIndex: 1,
            explanation:
              "A first-round majority wins outright; only if no one clears 50% do the top two advance to a runoff (even if same-party).",
            sourceLessonSlug: "la-jungle-primary",
          },
          {
            prompt: "How is Louisiana's jungle primary different from Washington's 'top-two'?",
            options: [
              "They are identical",
              "In Louisiana a candidate can win outright by clearing 50% in the first round; in top-two the top two always advance",
              "Louisiana has separate party primaries",
              "Washington has no primary",
            ],
            correctIndex: 1,
            explanation:
              "Top-two always sends two candidates to the general; Louisiana's open primary lets a majority winner take the office in round one.",
            sourceLessonSlug: "la-jungle-primary",
          },
          {
            prompt: "How many statewide executive officials do Louisiana voters elect?",
            options: ["One (the Governor only)", "Three", "Seven", "Fifteen"],
            correctIndex: 2,
            explanation:
              "Louisiana elects seven statewide executives (Governor, Lt. Governor, Secretary of State, Attorney General, Treasurer, Agriculture Commissioner, Insurance Commissioner).",
            sourceLessonSlug: "la-constitution-branches",
          },
          {
            prompt: "Which constitution governs Louisiana today?",
            options: [
              "Its first, from 1812",
              "The Constitution of 1974 (its eleventh)",
              "The Napoleonic Code directly",
              "It has no constitution",
            ],
            correctIndex: 1,
            explanation:
              "Louisiana's 1974 constitution is its eleventh; the state has rewritten its constitution more than almost any other.",
            sourceLessonSlug: "la-constitution-branches",
          },
          {
            prompt: "Can Louisiana citizens put a statute on the ballot by initiative petition?",
            options: [
              "Yes, a strong initiative",
              "No — there is no general citizen initiative; amendments come from the Legislature and then voters ratify",
              "Only in even years",
              "Only for local roads",
            ],
            correctIndex: 1,
            explanation:
              "Louisiana has no general initiative; the Legislature proposes constitutional amendments (two-thirds) for voter ratification.",
            sourceLessonSlug: "la-bill-to-law",
          },
          {
            prompt: "What is a 'police jury' in Louisiana?",
            options: [
              "A jury in a criminal trial",
              "A traditional parish governing board (like a county commission)",
              "The state police force",
              "A panel that appoints judges",
            ],
            correctIndex: 1,
            explanation:
              "A police jury is the legislative/governing body of many Louisiana parishes; others use a parish president and council.",
            sourceLessonSlug: "la-parishes",
          },
          {
            prompt: "How are Louisiana's judges chosen?",
            options: [
              "Appointed for life by the Governor",
              "Elected — including Supreme Court justices from districts — using the open (jungle) primary format",
              "Elected by the Legislature",
              "Appointed by the Attorney General",
            ],
            correctIndex: 1,
            explanation:
              "Louisiana elects its judges, including its 7 Supreme Court justices (10-year terms), via the same open-primary format.",
            sourceLessonSlug: "la-courts-involved",
          },
          {
            prompt: "Why does this course tell you to VERIFY Louisiana's election calendar and voting rules?",
            options: [
              "Because Louisiana has no elections office",
              "Because dates (e.g., odd-year governor races) and ID/absentee rules change and are run by the SoS and parish registrars — confirm at sos.la.gov",
              "Because only Congress sets them",
              "Because voting is secret",
            ],
            correctIndex: 1,
            explanation:
              "Louisiana's off-cycle calendar and voting rules shift and are administered locally, so sos.la.gov is the authoritative source.",
            sourceLessonSlug: "la-courts-involved",
          },
        ],
      },
    },
  ],
};
