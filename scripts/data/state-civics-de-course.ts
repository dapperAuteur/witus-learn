// Authored "Delaware Civics: How Your State Government Works" — the Delaware entry in
// the per-state Civics layer on Learn.WitUS. State-level companion to the general Civics
// courses: those teach the SYSTEM; this teaches Delaware's version.
//
// Factual and strictly non-partisan. Every content lesson is cited (APA 7 in-line +
// a `## Sources` bibliography) to DELAWARE'S OWN OFFICIAL SOURCES: the General Assembly
// (legis.delaware.gov), the Department of Elections (elections.delaware.gov), the
// Courts (courts.delaware.gov), and the Delaware Constitution (1897).
//
// Authoritative-values rule (load-bearing): state facts VARY and CHANGE. Time-sensitive
// items (voting rules) are flagged and point learners to elections.delaware.gov.
//
// Organized into sections (course modules), ending with a fill-in exercise + a final
// quiz whose every question links back to the lesson that teaches the answer.

import type { AuthoredCourse } from "./authored-course";

export const STATE_CIVICS_DE_COURSE: AuthoredCourse = {
  title: "Delaware Civics: How Your State Government Works",
  description:
    "A practical, non-partisan guide to how the state of Delaware governs itself — and how you take part where you live. Delaware — 'The First State' to ratify the U.S. Constitution — has two features found nowhere else: it is the ONLY state that can amend its constitution WITHOUT a public vote (the Legislature does it alone), and it is the corporate capital of America, home to the famous Court of Chancery where most of the nation's big companies settle their business disputes. You'll learn Delaware's Constitution of 1897, its plural executive, its General Assembly of 21 senators and 41 representatives, its politically balanced appointed judiciary, and its three counties. Time-sensitive facts are flagged, pointing to elections.delaware.gov. Cited to Delaware's own official sources (legis.delaware.gov, elections.delaware.gov, courts.delaware.gov).",
  lessons: [
    // ── Section 1: Amending the constitution without a vote ──────────────
    {
      slug: "de-amend-no-vote",
      title: "1 · The only state that amends its constitution without a public vote",
      section: "What Makes Delaware Unique",
      body: `Delaware's most distinctive civic rule is easy to state and genuinely unique: **Delaware is the ONLY state that can amend its constitution WITHOUT a vote of the people** (Delaware General Assembly, n.d.).

**How it works.** In **every other state**, changing the constitution ultimately requires the **voters** to approve the amendment at the ballot. In Delaware, the **General Assembly (the Legislature) alone** can amend the state constitution: an amendment must pass by a **two-thirds vote of each chamber in two consecutive sessions** (with a legislative election in between) — and then it **becomes part of the constitution with no referendum** (Delaware General Assembly, n.d.). The people **never vote** on it directly.

Why it matters: this makes the **elected Legislature unusually powerful** over Delaware's fundamental law, and it means Delaware's constitution can be changed **without a statewide campaign or ballot question.** It's the clearest sign of Delaware's legislature-centered tradition — and a favorite civics-trivia fact.

Delaware governs under its **Constitution of 1897** (its fourth), and it proudly calls itself **"The First State"** because it was the **first to ratify the U.S. Constitution, on December 7, 1787.**

**A note this course keeps returning to:** state facts **vary and change.** Everything here is current as of authoring, but Delaware's own government (legis.delaware.gov, elections.delaware.gov, courts.delaware.gov) is the authoritative source. When something is time-sensitive — like voting rules — we say so.

**Check yourself.** What is unique about how Delaware amends its constitution, and why is Delaware called "The First State"?

## Sources
- Delaware General Assembly. (n.d.). *Amending the Delaware Constitution (1897) without a referendum*. legis.delaware.gov. https://legis.delaware.gov/
- Delaware Department of Elections. (n.d.). *Delaware government and history*. elections.delaware.gov. https://elections.delaware.gov/`,
    },

    // ── Section 2: The corporate capital + Court of Chancery ─────────────
    {
      slug: "de-chancery",
      title: "2 · The corporate capital of America and the Court of Chancery",
      section: "What Makes Delaware Unique",
      body: `Delaware's second claim to fame shapes the **entire U.S. economy**: it is the **corporate capital of America.**

**Why so many companies are 'Delaware corporations.'** A large majority of major U.S. companies — **most of the Fortune 500 and a huge share of publicly traded companies** — are **legally incorporated in Delaware**, even if they operate elsewhere (Delaware Courts, n.d.). They choose Delaware for its **well-developed, business-friendly corporate law** and, above all, for its **specialized court.**

**The Court of Chancery.** Delaware has a distinctive **Court of Chancery** — a **court of equity with NO juries**, whose judges (called the **Chancellor** and **Vice Chancellors**) are **expert in corporate and business law** (Delaware Courts, n.d.). It resolves shareholder disputes, mergers, and governance fights quickly and predictably, producing a deep body of **precedent** that companies rely on. Because of the Court of Chancery, **many of the most important business-law decisions in the country are made in Delaware** — a remarkable amount of influence for the second-smallest state.

Why it matters for civics: Delaware's government generates **revenue** from incorporation fees (a major part of the state budget) and gives Delaware **outsized influence** over how American businesses are governed. It's a case study in how a small state's **laws and courts** can shape the whole nation.

**Check yourself.** Why do so many companies incorporate in Delaware, and what is special about the Court of Chancery?

## Sources
- Delaware Courts. (n.d.). *The Court of Chancery and Delaware corporate law*. courts.delaware.gov. https://courts.delaware.gov/
- Delaware Department of State. (n.d.). *Division of Corporations*. corp.delaware.gov. https://corp.delaware.gov/`,
    },

    // ── Section 3: The executive + General Assembly ──────────────────────
    {
      slug: "de-executive-legislature",
      title: "3 · The executive and the General Assembly",
      section: "The Three Branches",
      body: `**Executive — a plural executive.** Delaware voters elect several statewide officials (Delaware Department of Elections, n.d.):
- The **Governor** and **Lieutenant Governor** (elected **separately** — they can be from different parties),
- the **Attorney General**,
- the **State Treasurer**,
- the **State Auditor**, and
- the **Insurance Commissioner.**
The Governor serves a **4-year term**, limited to **two terms.**

**Legislative — the Delaware General Assembly.** A bicameral body meeting in Dover (Delaware General Assembly, n.d.):
- **House of Representatives — 41 members**, elected to **2-year terms.**
- **Senate — 21 senators**, elected to **4-year terms.**
- It is one of the **smaller legislatures** in the country — fitting for a small state — and part-time.

**Judicial — the Delaware courts.** Beyond the famous **Court of Chancery** (Lesson 2), Delaware has the **Superior Court**, other trial courts, and the **Delaware Supreme Court** (5 justices) at the top. How Delaware selects — and *balances* — its judges is distinctive, covered next.

**Veto and override.** The Governor may veto bills; the General Assembly overrides with a **three-fifths vote of each chamber.**

**Check yourself.** Which statewide executive officers do Delaware voters elect, and how many members are in each legislative chamber?

## Sources
- Delaware Department of Elections. (n.d.). *Statewide elected officials*. elections.delaware.gov. https://elections.delaware.gov/
- Delaware General Assembly. (n.d.). *The General Assembly: House and Senate*. legis.delaware.gov. https://legis.delaware.gov/`,
    },

    // ── Section 4: Politically balanced judiciary + no initiative ────────
    {
      slug: "de-courts-lawmaking",
      title: "4 · A politically balanced bench, and how a bill becomes law",
      section: "Making Law",
      body: `**How Delaware picks its judges — with a rare BALANCE rule.** Delaware **appoints** its judges: the **Governor nominates** and the **Senate confirms** them, for **12-year terms** (Delaware Courts, n.d.). But Delaware adds a genuinely unusual requirement written into its constitution: a **political-balance ("major-party balance") rule.** For its major courts, **no more than a bare majority of judges may belong to any one political party**, and the remainder must belong to the **other major party** (Delaware Courts, n.d.). In other words, Delaware **constitutionally requires its courts to be roughly bipartisan** — a feature no other state mandates so explicitly. (The exact application has been litigated, so ⚠️ confirm current details at courts.delaware.gov.) The goal is a judiciary seen as **balanced and non-partisan in outcome** — part of why businesses trust Delaware's courts.

**How a bill becomes law** (Delaware General Assembly, n.d.):
1. **Introduction** in the House or Senate; **committee** review; **floor votes** in both chambers.
2. **Governor** — sign, veto (three-fifths override), or let it become law.

**No citizen initiative.** Delaware citizens **cannot** put a statute or amendment on the ballot by petition — and remember from Lesson 1 that they **don't even vote on constitutional amendments.** So Delaware's lawmaking is, by design, **channeled through the elected General Assembly** more completely than almost anywhere else.

**Check yourself.** What balance does Delaware require on its courts, and can Delaware citizens start a law by initiative?

## Sources
- Delaware Courts. (n.d.). *Judicial appointment and the major-party balance requirement*. courts.delaware.gov. https://courts.delaware.gov/
- Delaware General Assembly. (n.d.). *How a bill becomes law*. legis.delaware.gov. https://legis.delaware.gov/`,
    },

    // ── Section 5: Local government + getting involved ───────────────────
    {
      slug: "de-local-involved",
      title: "5 · Local government (just three counties) and how to take part",
      section: "Get Involved",
      body: `**Local government.** Delaware's local map is simple — it has the **fewest counties of any state** (Delaware General Assembly, n.d.):
- **3 counties: New Castle, Kent, and Sussex** — each governed by an elected **county council or Levy Court**, handling land use, some services, and property assessment.
- **Cities and towns** (like Wilmington and Dover) provide municipal services.
- **School districts** operate locally.
Because Delaware is small and the state government is strong, much is handled at the **state** level, with counties and towns filling in local services.

**Voting.** ⚠️ **Time-sensitive:** Delaware has **expanded voting access** in recent years (adding early voting and same-day registration provisions), though some changes have faced legal challenges under Delaware's constitution. Rules and deadlines are administered by the **Department of Elections and county offices** and can change — confirm the **current** details at **elections.delaware.gov** before you vote.

**How to take part:**
- **Register and vote** — check current early-voting and registration rules at elections.delaware.gov.
- **Show up locally.** Your **county council/Levy Court**, city/town council, and school board hold public meetings.
- **Contact your legislators** in Dover — you have one Representative and one Senator. Because the Legislature can even amend the constitution alone, contacting legislators carries real weight in Delaware.
- **Run** — school board, town council, and county council are reachable local starting points.

**Check yourself.** How many counties does Delaware have, and why does contacting your legislator carry special weight here?

## Sources
- Delaware General Assembly. (n.d.). *Local government: the three counties and municipalities*. legis.delaware.gov. https://legis.delaware.gov/
- Delaware Department of Elections. (n.d.). *Registering and voting in Delaware*. elections.delaware.gov. https://elections.delaware.gov/`,
    },

    // ── Section 6: Practice (fill in the blanks) ─────────────────────────
    {
      slug: "de-exercise",
      title: "6 · Practice: fill in the blanks",
      section: "Practice",
      exercise: {
        instructions:
          "Fill in each blank about Delaware state government, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt:
              "Delaware is the only state that can amend its constitution WITHOUT a vote of the ___.",
            answer: "people",
            accept: ["voters", "public"],
            explanation:
              "The General Assembly amends the constitution by a two-thirds vote in two consecutive sessions — no referendum required.",
          },
          {
            prompt:
              "Delaware's famous business court, which has no juries, is the Court of ___.",
            answer: "Chancery",
            accept: ["chancery"],
            explanation:
              "The Court of Chancery, led by the Chancellor and Vice Chancellors, decides corporate disputes and makes Delaware the corporate capital.",
          },
          {
            prompt:
              "Delaware is nicknamed 'The ___ State' because it first ratified the U.S. Constitution in 1787.",
            answer: "First",
            accept: ["first"],
            explanation:
              "Delaware ratified the U.S. Constitution on December 7, 1787 — the first state to do so.",
          },
          {
            prompt:
              "Delaware's constitution requires a political ___ on its major courts (roughly bipartisan judges).",
            answer: "balance",
            explanation:
              "No more than a bare majority of judges may be from one major party; the rest must be from the other — a unique constitutional rule.",
          },
          {
            prompt:
              "Delaware has just ___ counties — the fewest of any state.",
            answer: "3",
            accept: ["three"],
            explanation:
              "New Castle, Kent, and Sussex are Delaware's three counties.",
          },
          {
            prompt:
              "TRUE or FALSE: Delaware voters ratify constitutional amendments at the ballot box.",
            answer: "false",
            explanation:
              "False. Delaware is the only state where the Legislature amends the constitution alone — voters never vote on amendments.",
          },
        ],
      },
    },

    // ── Section 7: Final quiz ────────────────────────────────────────────
    {
      slug: "de-quiz",
      title: "7 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "What is unique about how Delaware amends its constitution?",
            options: [
              "It requires a unanimous public vote",
              "The Legislature can amend it alone (two-thirds in two sessions) — no public vote is required",
              "Only the Governor can amend it",
              "It can never be amended",
            ],
            correctIndex: 1,
            explanation:
              "Delaware is the only state where the General Assembly amends the constitution without a referendum.",
            sourceLessonSlug: "de-amend-no-vote",
          },
          {
            prompt: "Why is Delaware called 'The First State'?",
            options: [
              "It was the first colony settled",
              "It was the first to ratify the U.S. Constitution (December 7, 1787)",
              "It has the first governor",
              "It is alphabetically first",
            ],
            correctIndex: 1,
            explanation:
              "Delaware ratified the U.S. Constitution first, on December 7, 1787.",
            sourceLessonSlug: "de-amend-no-vote",
          },
          {
            prompt: "What makes Delaware the 'corporate capital' of America?",
            options: [
              "It has the most factories",
              "Most major U.S. companies incorporate there, drawn by its corporate law and the Court of Chancery",
              "It bans corporations elsewhere",
              "It owns all the companies",
            ],
            correctIndex: 1,
            explanation:
              "A majority of large U.S. companies incorporate in Delaware for its business law and expert Court of Chancery.",
            sourceLessonSlug: "de-chancery",
          },
          {
            prompt: "What is special about Delaware's Court of Chancery?",
            options: [
              "It only handles traffic tickets",
              "It is a court of equity with no juries, expert in corporate and business law",
              "It elects the Governor",
              "It is a federal court",
            ],
            correctIndex: 1,
            explanation:
              "The Court of Chancery decides business disputes without juries, producing precedent companies rely on.",
            sourceLessonSlug: "de-chancery",
          },
          {
            prompt: "How many members are in Delaware's House and Senate?",
            options: [
              "41 House / 21 Senate",
              "100 House / 40 Senate",
              "151 House / 36 Senate",
              "203 House / 50 Senate",
            ],
            correctIndex: 0,
            explanation:
              "Delaware has a small legislature: 41 House members (2-year terms) and 21 senators (4-year terms).",
            sourceLessonSlug: "de-executive-legislature",
          },
          {
            prompt: "What balance does Delaware's constitution require on its major courts?",
            options: [
              "An equal number of men and women",
              "A major-party balance — no more than a bare majority from one party, the rest from the other",
              "Only judges over age 60",
              "Only judges from Wilmington",
            ],
            correctIndex: 1,
            explanation:
              "Delaware uniquely requires roughly bipartisan courts, part of why its bench is trusted by business.",
            sourceLessonSlug: "de-courts-lawmaking",
          },
          {
            prompt: "How are Delaware's judges chosen?",
            options: [
              "Elected in partisan races",
              "Nominated by the Governor and confirmed by the Senate for 12-year terms, subject to party balance",
              "Elected by the Legislature",
              "Chosen by the Court of Chancery",
            ],
            correctIndex: 1,
            explanation:
              "Delaware appoints judges (Governor nominates, Senate confirms) for 12-year terms under a major-party balance rule.",
            sourceLessonSlug: "de-courts-lawmaking",
          },
          {
            prompt: "Can Delaware citizens put a law on the ballot by initiative?",
            options: [
              "Yes, a strong initiative",
              "No — Delaware has no initiative, and citizens don't even vote on constitutional amendments",
              "Only in even years",
              "Only for corporate law",
            ],
            correctIndex: 1,
            explanation:
              "Delaware channels lawmaking through the General Assembly; there is no citizen initiative and no amendment referendum.",
            sourceLessonSlug: "de-courts-lawmaking",
          },
          {
            prompt: "How many counties does Delaware have?",
            options: ["3", "23", "64", "100"],
            correctIndex: 0,
            explanation:
              "Delaware has just three counties — New Castle, Kent, and Sussex — the fewest of any state.",
            sourceLessonSlug: "de-local-involved",
          },
          {
            prompt: "Why does this course tell you to VERIFY Delaware's judiciary and voting rules?",
            options: [
              "Because Delaware has no government website",
              "Because the party-balance rule has been litigated and voting-access changes are recent — confirm at courts.delaware.gov / elections.delaware.gov",
              "Because only Congress sets them",
              "Because voting is secret",
            ],
            correctIndex: 1,
            explanation:
              "Delaware's court-balance rule and new voting rules are contested and evolving, so the state's own sites are authoritative.",
            sourceLessonSlug: "de-local-involved",
          },
        ],
      },
    },
  ],
};
