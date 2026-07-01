// Authored "Tennessee Civics: How Your State Government Works" — the Tennessee entry in
// the per-state Civics layer on Learn.WitUS. State-level companion to the general
// Civics courses: those teach the SYSTEM; this teaches Tennessee's version.
//
// Factual and strictly non-partisan. Every content lesson is cited (APA 7 in-line +
// a `## Sources` bibliography) to TENNESSEE'S OWN OFFICIAL SOURCES: the General
// Assembly (capitol.tn.gov), the Secretary of State / elections (sos.tn.gov), the
// courts (tncourts.gov), and the Tennessee Constitution (1870).
//
// Authoritative-values rule (load-bearing): state facts VARY and CHANGE. Tennessee has
// several genuinely unusual rules — the Attorney General appointed by the state Supreme
// Court, the Senate Speaker holding the title "Lieutenant Governor," several officers
// elected by the Legislature, and a very weak gubernatorial veto. Time-sensitive items
// (voter-ID and absentee rules) are flagged and point learners to sos.tn.gov.
//
// Organized into sections (course modules), ending with a fill-in exercise + a final
// quiz whose every question links back to the lesson that teaches the answer.

import type { AuthoredCourse } from "./authored-course";

export const STATE_CIVICS_TN_COURSE: AuthoredCourse = {
  title: "Tennessee Civics: How Your State Government Works",
  description:
    "A practical, non-partisan guide to how the state of Tennessee governs itself — and how you take part where you live. You'll learn Tennessee's Constitution of 1870; a General Assembly of 33 senators and 99 representatives; and an executive branch full of genuine oddities: the Governor is the ONLY official Tennesseans elect statewide, there is no separately elected Lieutenant Governor (the Speaker of the Senate holds that title), the Secretary of State, Treasurer, and Comptroller are chosen BY THE LEGISLATURE, and — uniquely in the nation — the Attorney General is appointed by the STATE SUPREME COURT. You'll also learn Tennessee's unusually weak gubernatorial veto (overridden by a simple majority), its lack of a citizen initiative, its 'Tennessee Plan' for judges, and its 95 counties. Time-sensitive voting rules are flagged, pointing to sos.tn.gov. Cited to Tennessee's own official sources (capitol.tn.gov, sos.tn.gov, tncourts.gov).",
  lessons: [
    // ── Section 1: The Tennessee Constitution ────────────────────────────
    {
      slug: "tn-constitution",
      title: "1 · Tennessee's Constitution of 1870 (and its hard-to-amend rule)",
      section: "The Tennessee Constitution",
      body: `Tennessee governs under its **Constitution of 1870** — its **third** (after 1796 and 1834). Tennessee became the **16th state on June 1, 1796** (Tennessee General Assembly, n.d.).

A defining feature: Tennessee has **no citizen initiative**, and its constitution is **deliberately hard to amend.** There are two paths, both slow (Tennessee General Assembly, n.d.):
- **Legislative path (most common).** An amendment must **pass two consecutive General Assemblies** — by a **simple majority** in the first, then a **two-thirds** majority in the second (after an intervening legislative election) — and then go to the **voters.** ⚠️ At ratification there's a distinctive twist: the amendment passes only if the "yes" votes are a **majority AND exceed half of the total votes cast in that same election's race for Governor.** So turnout in the governor's race sets the bar the amendment must clear — a rule unique enough to trip up even careful readers.
- **Constitutional convention**, which the Legislature and voters can call.

Because citizens can't initiate laws or amendments, **the General Assembly is the gateway** for almost everything — a strong contrast with initiative states like Colorado.

**A note this course keeps returning to:** state facts **vary and change.** Everything here is current as of authoring, but Tennessee's own government (capitol.tn.gov, sos.tn.gov, tncourts.gov) is the authoritative source. When something is time-sensitive — like voter-ID rules — we say so.

**Check yourself.** Can Tennessee citizens put a law on the ballot by petition, and what turnout-linked threshold must a constitutional amendment clear?

## Sources
- Tennessee General Assembly. (n.d.). *Constitution of the State of Tennessee (1870); amendment process*. capitol.tn.gov. https://www.capitol.tn.gov/
- Tennessee Secretary of State. (n.d.). *Tennessee government and history*. sos.tn.gov. https://sos.tn.gov/`,
    },

    // ── Section 2: The unusual executive ─────────────────────────────────
    {
      slug: "tn-executive",
      title: "2 · Tennessee's unusual executive — one elected officer, and a Speaker called 'Lieutenant Governor'",
      section: "The Three Branches",
      body: `Tennessee's executive branch is one of the most distinctive in the country. Start with a surprising fact: **the Governor is the ONLY executive official Tennesseans elect statewide** (Tennessee General Assembly, n.d.).

**No separately elected Lieutenant Governor.** Tennessee has **no Lieutenant Governor elected by the people.** Instead, ⚠️ **the Speaker of the state Senate is given the title "Lieutenant Governor" by statute.** So Tennessee's "Lieutenant Governor" is really the Senate's presiding officer — chosen by the senators, not by the voters — and first in line to succeed the Governor. This is a genuine Tennessee quirk worth remembering.

**Officers chosen by the Legislature, not the voters.** Three key statewide officers are **elected by the General Assembly** (the Legislature), not by the public (Tennessee General Assembly, n.d.):
- **Secretary of State** — elected by the General Assembly (4-year term).
- **State Treasurer** — elected by the General Assembly.
- **Comptroller of the Treasury** — elected by the General Assembly.

**And the biggest oddity of all — the Attorney General.** ⚠️ Tennessee is the **only state in the nation** where the **Attorney General is appointed by the state Supreme Court.** The five justices of the **Tennessee Supreme Court select the Attorney General** for an **8-year term** — not the Governor, not the Legislature, and not the voters. It's the single most distinctive fact in Tennessee civics.

So Tennessee **spreads executive selection across all three branches**: the people pick the Governor, the Legislature picks several officers, and the Supreme Court picks the Attorney General.

**Check yourself.** Who holds the title "Lieutenant Governor" in Tennessee, and who appoints Tennessee's Attorney General?

## Sources
- Tennessee General Assembly. (n.d.). *Constitutional officers; the Speaker of the Senate as Lieutenant Governor*. capitol.tn.gov. https://www.capitol.tn.gov/
- Tennessee Courts. (n.d.). *The Attorney General and Reporter*. tncourts.gov. https://www.tncourts.gov/`,
    },

    // ── Section 3: Legislature + the Tennessee Plan for judges ───────────
    {
      slug: "tn-legislature-courts",
      title: "3 · The General Assembly and the 'Tennessee Plan' for judges",
      section: "The Three Branches",
      body: `**Legislative — the Tennessee General Assembly.** A **part-time "citizen legislature"** meeting in Nashville (Tennessee General Assembly, n.d.):
- **House of Representatives — 99 representatives**, elected to **2-year terms.**
- **Senate — 33 senators**, elected to **4-year terms.**
- The Senate's Speaker also carries the title **"Lieutenant Governor"** (see the previous lesson).

**Judicial — a two-track system.** Tennessee selects its judges in two different ways (Tennessee Courts, n.d.):
- **Appellate judges** — the **Supreme Court (5 justices)**, the Court of Appeals, and the Court of Criminal Appeals — are chosen by the **"Tennessee Plan"**: the **Governor appoints** from a nominating commission's list, and the judge later faces the voters in a **yes/no retention election** (8-year terms).
- **Trial-court judges** (Circuit, Chancery, Criminal) are **elected directly** by voters in their districts.

And recall the twist from the last lesson: those **five Supreme Court justices then select the Attorney General** — so the judiciary reaches into the executive branch in a way no other state's does.

**A very weak veto.** ⚠️ Here's another Tennessee distinctive: the Governor's veto is **one of the weakest in the nation.** The General Assembly can **override a veto by the same SIMPLE MAJORITY that passed the bill** — not the two-thirds most states require. So a Tennessee Governor's veto is more a **speed bump than a wall**, and the Governor also has a limited **reduction veto** on appropriations.

**Check yourself.** How does Tennessee choose its Supreme Court justices, and why is the Governor's veto considered weak?

## Sources
- Tennessee General Assembly. (n.d.). *The General Assembly; veto and override*. capitol.tn.gov. https://www.capitol.tn.gov/
- Tennessee Courts. (n.d.). *Judicial selection: the Tennessee Plan and trial-court elections*. tncourts.gov. https://www.tncourts.gov/`,
    },

    // ── Section 4: How a bill becomes law ────────────────────────────────
    {
      slug: "tn-bill-to-law",
      title: "4 · How a bill becomes a Tennessee law",
      section: "Making Law",
      body: `In Tennessee, laws are made **through the General Assembly** — there is **no citizen initiative** to go around it.

**How a bill becomes law** (Tennessee General Assembly, n.d.):
1. **Introduction.** A legislator introduces a bill in the House or Senate.
2. **Committee.** Hearings, amendments, and a committee vote — Tennessee's committee system is where many bills live or die.
3. **Floor votes.** Both chambers must pass the bill. A Tennessee rule to know: a bill needs a **constitutional majority** — a majority of **all elected members** of each chamber (50 in the House, 17 in the Senate), not just of those present.
4. **Governor.** The Governor may **sign**, **veto**, or let a bill become law without signature. ⚠️ But remember the weak veto: the Legislature **overrides with a simple majority**, so a determined majority can pass a bill over the Governor's objection easily.

**No initiative or popular referendum.** Tennessee citizens **cannot** put a statute or amendment on the ballot by petition. Constitutional amendments come **only** from the Legislature (over two General Assemblies) and then face the voters — with the turnout-linked threshold from the first lesson.

The takeaway: in Tennessee, **the Legislature is the road**, the Governor is a comparatively **weak check**, and citizens' direct role comes at the **ratification** stage, not the **proposal** stage.

**Check yourself.** What is a "constitutional majority" in the Tennessee General Assembly, and how easily can the Legislature override the Governor's veto?

## Sources
- Tennessee General Assembly. (n.d.). *How a bill becomes law; constitutional majority; veto override*. capitol.tn.gov. https://www.capitol.tn.gov/`,
    },

    // ── Section 5: Local government ──────────────────────────────────────
    {
      slug: "tn-local-government",
      title: "5 · Local government: 95 counties, cities, and metro government",
      section: "Local Government",
      body: `Most of the government Tennesseans deal with day to day is **local** (Tennessee General Assembly, n.d.):

- **95 counties.** Each is governed by an elected **county commission** and a **county mayor (county executive)**, along with separately elected officials (sheriff, trustee, clerk, register, assessor). County government is strong in Tennessee and delivers many services, especially in rural areas.
- **Cities and towns (municipalities).** Tennessee cities incorporate under general law or charters and choose forms like mayor-council or council-manager. Tennessee allows **home rule** for municipalities that adopt it by referendum, though many operate under general law.
- **Metropolitan (consolidated) government.** Tennessee is notable for **consolidated city-county governments** — most famously **Metropolitan Nashville–Davidson County**, one of the earliest and best-known city-county consolidations in the United States (and the Memphis area has explored similar ideas).
- **Special districts and school systems** round out local government; many counties and cities run their own school systems.

The practical effect: in Tennessee, the **county** is a major unit of government (more so than in some northeastern states), and a few areas use **consolidated metro** government that blends city and county into one.

**Check yourself.** How many counties does Tennessee have, and what is distinctive about Nashville's government?

## Sources
- Tennessee General Assembly. (n.d.). *Local government: counties, municipalities, and metropolitan government*. capitol.tn.gov. https://www.capitol.tn.gov/
- Tennessee Secretary of State. (n.d.). *Counties and municipalities of Tennessee*. sos.tn.gov. https://sos.tn.gov/`,
    },

    // ── Section 6: Elections & getting involved ──────────────────────────
    {
      slug: "tn-elections-involved",
      title: "6 · Elections and how to take part",
      section: "Get Involved",
      body: `Tennessee runs its own distinctive election rules, and there are real ways to take part (Tennessee Secretary of State, n.d.).

**Voting rules to know.** ⚠️ **Time-sensitive:** Tennessee requires a **photo ID** to vote in person, and — unlike many states — Tennessee does **not** offer no-excuse absentee (mail) voting: to vote absentee you generally must **qualify under a specific excuse** (such as being 60+, having an illness, or being away). Tennessee **does** offer **early in-person voting** for a period before Election Day. Because these rules change and are administered by **county election commissions**, confirm the **current** ID, absentee-excuse, and early-voting details at **sos.tn.gov** or your county election office before you vote.

**How to take part:**
- **Register and vote** — bring photo ID for in-person voting; use early voting to avoid Election-Day lines; check whether you qualify for absentee.
- **Show up locally.** County commissions, city councils, and school boards hold public meetings — and in Tennessee the **county** decides a great deal.
- **Contact your legislators** — you have one Representative and one Senator in Nashville; because bills often turn on committee votes, timely input matters.
- **Weigh in on amendments.** You can't start one, but the Legislature refers **constitutional amendments** to the ballot — and your turnout in the governor's race affects whether they pass.
- **Run** — school board, city council, county commission, and county offices are reachable local starting points.

**Check yourself.** Does Tennessee offer no-excuse absentee voting, and where should you confirm the current rules?

## Sources
- Tennessee Secretary of State. (n.d.). *Voting in Tennessee: photo ID, absentee excuses, early voting*. sos.tn.gov. https://sos.tn.gov/
- Tennessee General Assembly. (n.d.). *Elections and constitutional amendments*. capitol.tn.gov. https://www.capitol.tn.gov/`,
    },

    // ── Section 7: Practice (fill in the blanks) ─────────────────────────
    {
      slug: "tn-exercise",
      title: "7 · Practice: fill in the blanks",
      section: "Practice",
      exercise: {
        instructions:
          "Fill in each blank about Tennessee state government, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt: "Tennessee's current constitution is the Constitution of ___.",
            answer: "1870",
            explanation:
              "Tennessee's third constitution, adopted in 1870, is still in force; the state has no citizen initiative.",
          },
          {
            prompt:
              "In Tennessee, the official who holds the title 'Lieutenant Governor' is actually the Speaker of the ___.",
            answer: "Senate",
            accept: ["senate"],
            explanation:
              "Tennessee has no separately elected Lieutenant Governor; the Speaker of the Senate carries that title by statute and is first in line of succession.",
          },
          {
            prompt:
              "Uniquely in the nation, Tennessee's Attorney General is appointed by the state ___ Court.",
            answer: "Supreme",
            accept: ["supreme"],
            explanation:
              "The five justices of the Tennessee Supreme Court appoint the Attorney General to an 8-year term — the only such arrangement in the U.S.",
          },
          {
            prompt:
              "Tennessee's Secretary of State, Treasurer, and Comptroller are elected by the ___, not by the voters.",
            answer: "legislature",
            accept: ["General Assembly", "general assembly", "Legislature"],
            explanation:
              "These three officers are chosen by the General Assembly, another way Tennessee keeps statewide selection out of the voters' hands.",
          },
          {
            prompt:
              "Tennessee's Governor has a WEAK veto because the Legislature can override it with a ___ majority.",
            answer: "simple",
            accept: ["majority"],
            explanation:
              "Unlike the two-thirds most states require, Tennessee overrides a veto by a simple (constitutional) majority — among the weakest vetoes in the nation.",
          },
          {
            prompt:
              "TRUE or FALSE: Tennessee lets any voter cast a no-excuse absentee (mail) ballot.",
            answer: "false",
            explanation:
              "False. Tennessee generally requires a qualifying excuse to vote absentee; it does offer early in-person voting. Verify current rules at sos.tn.gov.",
          },
        ],
      },
    },

    // ── Section 8: Final quiz ────────────────────────────────────────────
    {
      slug: "tn-quiz",
      title: "8 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "Which constitution governs Tennessee today, and can citizens initiate laws?",
            options: [
              "The Constitution of 1796; yes, strong initiative",
              "The Constitution of 1870; no, Tennessee has no citizen initiative",
              "The Constitution of 1953; yes, for taxes only",
              "It has no constitution",
            ],
            correctIndex: 1,
            explanation:
              "Tennessee's 1870 constitution is in force, and the state has no citizen initiative — the General Assembly is the gateway.",
            sourceLessonSlug: "tn-constitution",
          },
          {
            prompt: "Who holds the title 'Lieutenant Governor' in Tennessee?",
            options: [
              "A separately elected Lieutenant Governor",
              "The Speaker of the state Senate (by statute)",
              "The Attorney General",
              "The Chief Justice",
            ],
            correctIndex: 1,
            explanation:
              "Tennessee has no separately elected Lieutenant Governor; the Senate Speaker carries the title and is first in succession.",
            sourceLessonSlug: "tn-executive",
          },
          {
            prompt: "Who appoints Tennessee's Attorney General?",
            options: [
              "The Governor",
              "The voters",
              "The state Supreme Court (the only such arrangement in the nation)",
              "The U.S. President",
            ],
            correctIndex: 2,
            explanation:
              "Tennessee's five Supreme Court justices appoint the Attorney General to an 8-year term — unique in the United States.",
            sourceLessonSlug: "tn-executive",
          },
          {
            prompt: "How are Tennessee's Secretary of State, Treasurer, and Comptroller chosen?",
            options: [
              "Elected by the voters",
              "Appointed by the Governor",
              "Elected by the General Assembly (the Legislature)",
              "Appointed by the Supreme Court",
            ],
            correctIndex: 2,
            explanation:
              "The General Assembly elects these three statewide officers, not the voters.",
            sourceLessonSlug: "tn-executive",
          },
          {
            prompt: "How are Tennessee's appellate (Supreme Court) judges selected?",
            options: [
              "Elected in partisan races",
              "By the 'Tennessee Plan' — the Governor appoints from a commission's list, then voters hold yes/no retention elections",
              "Appointed for life by the Legislature",
              "Chosen by the Attorney General",
            ],
            correctIndex: 1,
            explanation:
              "Appellate judges are appointed by the Governor from a nominating list and then face retention elections (8-year terms); trial judges are elected directly.",
            sourceLessonSlug: "tn-legislature-courts",
          },
          {
            prompt: "Why is Tennessee's gubernatorial veto considered weak?",
            options: [
              "The Governor cannot veto at all",
              "The Legislature can override it with a simple majority (not two-thirds)",
              "Only the courts can override it",
              "Vetoes expire after a week",
            ],
            correctIndex: 1,
            explanation:
              "Tennessee overrides a veto by the same simple majority that passed the bill, making the veto one of the weakest in the nation.",
            sourceLessonSlug: "tn-legislature-courts",
          },
          {
            prompt: "How many members are in the Tennessee House and Senate?",
            options: [
              "110 House / 38 Senate",
              "99 House / 33 Senate",
              "150 House / 50 Senate",
              "203 House / 50 Senate",
            ],
            correctIndex: 1,
            explanation:
              "The Tennessee House has 99 members (2-year terms) and the Senate has 33 (4-year terms).",
            sourceLessonSlug: "tn-legislature-courts",
          },
          {
            prompt: "What is distinctive about Nashville's local government?",
            options: [
              "It has no government",
              "It is a consolidated metropolitan city-county government (Metro Nashville–Davidson County)",
              "It is run by the state directly",
              "It is an independent city in a different state",
            ],
            correctIndex: 1,
            explanation:
              "Metropolitan Nashville–Davidson County is one of the earliest and best-known consolidated city-county governments in the U.S.",
            sourceLessonSlug: "tn-local-government",
          },
          {
            prompt: "What is true about absentee voting in Tennessee?",
            options: [
              "Any voter may vote absentee for no reason",
              "A voter generally must qualify under a specific excuse to vote absentee",
              "Absentee voting is banned entirely",
              "Only the Governor may vote absentee",
            ],
            correctIndex: 1,
            explanation:
              "Tennessee generally requires a qualifying excuse for absentee voting, though it offers early in-person voting; verify current rules at sos.tn.gov.",
            sourceLessonSlug: "tn-elections-involved",
          },
          {
            prompt: "Why does this course tell you to VERIFY Tennessee's voting rules?",
            options: [
              "Because Tennessee has no elections office",
              "Because photo-ID, absentee-excuse, and early-voting rules change and are run by county commissions — confirm at sos.tn.gov",
              "Because only Congress sets them",
              "Because voting is secret",
            ],
            correctIndex: 1,
            explanation:
              "Tennessee's voting rules are administered locally and change, so the authoritative, current source is sos.tn.gov or your county election office.",
            sourceLessonSlug: "tn-elections-involved",
          },
        ],
      },
    },
  ],
};
