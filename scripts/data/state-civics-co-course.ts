// Authored "Colorado Civics: How Your State Government Works" — the Colorado entry in
// the per-state Civics layer on Learn.WitUS. State-level companion to the general
// Civics courses: those teach the SYSTEM; this teaches Colorado's version.
//
// Factual and strictly non-partisan. Every content lesson is cited (APA 7 in-line +
// a `## Sources` bibliography) to COLORADO'S OWN OFFICIAL SOURCES: the General
// Assembly (leg.colorado.gov), the Secretary of State / elections (sos.state.co.us),
// the Judicial Branch (coloradojudicial.gov), and the Colorado Constitution (1876).
//
// Authoritative-values rule (load-bearing): state facts VARY and CHANGE. Colorado's
// signature feature — the Taxpayer's Bill of Rights (TABOR) — has intricate, evolving
// mechanics (refunds, "de-Brucing"), and Colorado runs all-mail elections. Time-
// sensitive items are flagged and point learners to sos.state.co.us.
//
// Organized into sections (course modules), ending with a fill-in exercise + a final
// quiz whose every question links back to the lesson that teaches the answer.

import type { AuthoredCourse } from "./authored-course";

export const STATE_CIVICS_CO_COURSE: AuthoredCourse = {
  title: "Colorado Civics: How Your State Government Works",
  description:
    "A practical, non-partisan guide to how the state of Colorado governs itself — and how you take part where you live. You'll learn Colorado's Constitution of 1876; its strong direct democracy (initiative, referendum, recall); the three state branches; how a bill becomes a Colorado law in a General Assembly of 35 senators and 65 representatives; how Colorado picks judges by merit selection plus retention elections; and Colorado's signature feature — the Taxpayer's Bill of Rights (TABOR), which requires VOTER approval for tax increases and caps state revenue, refunding the excess. It also covers Colorado's all-mail elections and its independent redistricting commissions, flagging TABOR's evolving mechanics and pointing to sos.state.co.us. Cited to Colorado's own official sources (leg.colorado.gov, sos.state.co.us, coloradojudicial.gov).",
  lessons: [
    // ── Section 1: The Colorado Constitution ─────────────────────────────
    {
      slug: "co-constitution",
      title: "1 · Colorado's Constitution of 1876 and its direct democracy",
      section: "The Colorado Constitution",
      body: `Colorado governs under its **Constitution of 1876**, adopted when Colorado became the **38th state on August 1, 1876** — just weeks after the nation's 100th birthday, which is why Colorado is the **"Centennial State"** (Colorado General Assembly, n.d.).

Colorado added **direct-democracy tools** to its constitution in **1910**, during the Progressive Era, and uses them heavily to this day (Colorado Secretary of State, n.d.):

- **Initiative** — citizens can gather signatures to enact a **statute OR a constitutional amendment** directly at the ballot. (Colorado's constitution is, as a result, one of the more frequently amended in the nation.)
- **Referendum** — voters can **reject** a law the Legislature passed by petitioning it onto the ballot.
- **Recall** — voters can petition to remove elected officials before their term ends.

This is the through-line of Colorado civics: **voters are a lawmaking body.** That single design choice produced Colorado's most distinctive feature of all — the **Taxpayer's Bill of Rights (TABOR)**, itself passed by citizen initiative, which gets its own lesson.

**A note this course keeps returning to:** state facts **vary and change**, and Colorado — because voters amend the constitution by initiative — changes its rules often. Everything here is current as of authoring, but Colorado's own government (leg.colorado.gov, sos.state.co.us, coloradojudicial.gov) is the authoritative source. When something is time-sensitive, we say so.

**Check yourself.** Why is Colorado the "Centennial State," and what can Colorado citizens put on the ballot by initiative that many states cannot?

## Sources
- Colorado General Assembly. (n.d.). *Colorado Constitution (1876)*. leg.colorado.gov. https://leg.colorado.gov/
- Colorado Secretary of State. (n.d.). *Initiatives, referenda, and recall*. sos.state.co.us. https://www.sos.state.co.us/`,
    },

    // ── Section 2: The three state branches ──────────────────────────────
    {
      slug: "co-three-branches",
      title: "2 · The three branches of Colorado government",
      section: "The Three Branches",
      body: `Colorado divides power into the familiar three branches, with a few Colorado-specific features.

**Legislative — the Colorado General Assembly.** A bicameral body meeting in Denver (Colorado General Assembly, n.d.):
- **Senate — 35 senators**, elected to **4-year terms.**
- **House of Representatives — 65 representatives**, elected to **2-year terms.**
- Members face **term limits** — **8 consecutive years** in each chamber (voter-approved in 1990).
- A distinctive rule: Colorado's **"GAVEL" amendment (1988)** guarantees that **every bill gets a committee hearing** and limits leaders' power to kill bills quietly — an unusually pro-transparency legislative rule.

**Executive — the Governor and separately elected officers.** The **Governor** and **Lieutenant Governor** run together on a **joint ticket.** Voters separately elect the **Secretary of State** (who runs elections), the **Attorney General**, and the **State Treasurer.**

**Judicial — the Colorado courts.** Trial courts up through the **Court of Appeals** and the **Colorado Supreme Court** (7 justices). Colorado's method for choosing judges — **merit selection plus retention** — is distinctive and gets its own lesson next (Colorado Judicial Branch, n.d.).

**Veto and override.** The Governor may veto bills (and line-item veto appropriations). The General Assembly overrides with a **two-thirds vote of each chamber.**

**Check yourself.** How many members are in each chamber of the General Assembly, and what does the "GAVEL" amendment guarantee?

## Sources
- Colorado General Assembly. (n.d.). *How the General Assembly works; term limits and GAVEL*. leg.colorado.gov. https://leg.colorado.gov/
- Colorado Judicial Branch. (n.d.). *Colorado courts overview*. coloradojudicial.gov. https://www.coloradojudicial.gov/`,
    },

    // ── Section 3: How Colorado picks its judges ─────────────────────────
    {
      slug: "co-courts",
      title: "3 · How Colorado chooses its judges (merit selection + retention)",
      section: "The Three Branches",
      body: `Colorado does **not** elect its judges in ordinary partisan or nonpartisan campaigns, and the Governor does **not** simply pick whomever they want. Colorado uses **merit selection followed by retention** — a system often called the **"Missouri Plan"** (Colorado Judicial Branch, n.d.):

1. **Nominating commission.** When a judgeship opens, a **nonpartisan judicial nominating commission** (citizens and lawyers) reviews applicants and sends the Governor a short list of the most qualified.
2. **Governor appoints.** The **Governor must choose from that list** — not from the whole field — which keeps the pick merit-based rather than purely political.
3. **Retention elections.** After serving an initial period, the judge faces the voters in a **nonpartisan "retention" election** — a simple **yes/no "shall this judge be retained?"** — and again periodically after that (Colorado Supreme Court justices serve **10-year** retention terms).

Why it matters: this blends professional vetting (the commission) with public accountability (the yes/no retention vote), while avoiding big-money contested judicial campaigns. If you're comparing states, note that Colorado's judges are **appointed from a vetted list, then kept or removed by voters** — not elected in head-to-head races.

**Check yourself.** Walk through the three steps by which a Colorado judge reaches and keeps the bench.

## Sources
- Colorado Judicial Branch. (n.d.). *Judicial selection and retention in Colorado*. coloradojudicial.gov. https://www.coloradojudicial.gov/
- Colorado General Assembly. (n.d.). *Colorado Constitution, Article VI (Judicial)*. leg.colorado.gov. https://leg.colorado.gov/`,
    },

    // ── Section 4: TABOR — the Taxpayer's Bill of Rights ─────────────────
    {
      slug: "co-tabor",
      title: "4 · TABOR: the Taxpayer's Bill of Rights (Colorado's signature rule)",
      section: "Making Law & Money",
      body: `If you learn one thing that is distinctively Colorado, make it **TABOR.**

The **Taxpayer's Bill of Rights (TABOR)** is a constitutional amendment **passed by citizen initiative in 1992** (Article X, Section 20). It does two big things that shape all of Colorado government (Colorado General Assembly, n.d.; Colorado Secretary of State, n.d.):

1. **Voter approval for tax increases.** State and local governments in Colorado **cannot raise taxes, impose a new tax, or increase a tax rate without a direct vote of the people.** Elected officials, on their own, **cannot** raise your taxes — the voters must say yes.
2. **A revenue/spending cap with refunds.** TABOR **limits how much revenue** the government may keep and spend, tied to a formula (roughly inflation plus population growth). Revenue collected **above** that cap must generally be **refunded to taxpayers**, unless voters agree to let the government keep it.

Two pieces of Colorado vocabulary follow from TABOR:
- **"TABOR refund"** — the checks or tax reductions Coloradans receive when the state collects above the cap.
- **"De-Brucing"** — when voters of a city, county, school district, or the state vote to **let their government keep and spend revenue above the TABOR limit** (named for TABOR's author, Douglas Bruce). Many local governments have "de-Bruced."

Why it matters: TABOR makes **the voters the gatekeepers of taxation and spending** in Colorado — a direct-democracy idea pushed further than almost anywhere else. It profoundly shapes every state budget debate.

⚠️ **Time-sensitive.** TABOR's caps, refund mechanics, and interactions with other measures change year to year and are frequently litigated and on the ballot. For the **current** numbers and rules, rely on leg.colorado.gov and sos.state.co.us rather than a fixed figure.

**Check yourself.** Under TABOR, who must approve a tax increase in Colorado, and what happens to revenue collected above the cap?

## Sources
- Colorado General Assembly. (n.d.). *TABOR (Colorado Constitution, Article X, Section 20)*. leg.colorado.gov. https://leg.colorado.gov/
- Colorado Secretary of State. (n.d.). *Ballot measures and TABOR*. sos.state.co.us. https://www.sos.state.co.us/`,
    },

    // ── Section 5: How a bill becomes law ────────────────────────────────
    {
      slug: "co-bill-to-law",
      title: "5 · How a bill becomes a Colorado law",
      section: "Making Law & Money",
      body: `A Colorado law can be made **two ways** — through the General Assembly, or directly by the voters.

**Path 1 — through the General Assembly** (Colorado General Assembly, n.d.):
1. **Introduction.** A legislator introduces a bill; thanks to the **GAVEL amendment**, it is guaranteed a **committee hearing** rather than being killed quietly.
2. **Committee.** Hearings, amendments, and a vote.
3. **Floor votes.** The full chamber votes, then the **other chamber** repeats.
4. **Reconciliation.** Differences are resolved (often in a conference committee).
5. **Governor.** The Governor may **sign**, **veto** (two-thirds override), or **line-item veto** appropriations. ⚠️ **TABOR overlay:** if a bill would **raise taxes**, passing the Legislature is **not enough** — it must **also be approved by the voters.**

**Path 2 — directly by the voters:**
- **Initiative** — signatures put a **statute or constitutional amendment** straight on the ballot.
- **Referendum** — voters can veto a statute the Legislature passed.

The takeaway: in Colorado the Legislature is the usual road — but **the voters have their own on-ramp, and on taxes their approval is mandatory** thanks to TABOR.

**Check yourself.** Why can't the Colorado Legislature raise a tax on its own, even after passing a bill?

## Sources
- Colorado General Assembly. (n.d.). *How a bill becomes law; the GAVEL amendment*. leg.colorado.gov. https://leg.colorado.gov/`,
    },

    // ── Section 6: Elections, local government, getting involved ─────────
    {
      slug: "co-elections-involved",
      title: "6 · Elections, local government, and how to take part",
      section: "Get Involved",
      body: `**Elections — Colorado votes by mail.** Since 2013 Colorado has **mailed a ballot to every registered voter** for every election, and it pairs that with **same-day and automatic voter registration** and **16/17-year-old pre-registration** — a model widely praised for both access and security (Colorado Secretary of State, n.d.):
- Return your ballot **by mail or at a drop box or voter service center.**
- Colorado also offers in-person options at **voter service and polling centers.**

**Redistricting by independent commissions.** In 2018 Colorado voters passed **Amendments Y and Z**, creating **independent commissions** — made up of Democrats, Republicans, and unaffiliated members — to draw the state's **congressional** and **legislative** maps, taking that power out of pure legislative control.

**Local government** (Colorado General Assembly, n.d.):
- **64 counties**, governed by elected **boards of county commissioners**, plus **home-rule** cities and counties that write their own charters. **Denver** and **Broomfield** are unusual **consolidated city-and-county** governments.
- Special districts (schools, water, fire, transit) round out local government — and remember, under TABOR **each** of these needs **voter approval** to raise taxes.

**How to take part:**
- **Vote — it's mailed to you.** Track your ballot at sos.state.co.us.
- **Use direct democracy.** Sign, circulate, or file an **initiative or referendum** — Colorado's are among the most active in the country.
- **Show up locally.** County commissions, city councils, and school boards meet publicly; TABOR means **tax questions come to you on the ballot** — read them.
- **Contact your legislators** in Denver, and testify — the GAVEL rule means your bill gets heard.
- **Run** — school board, city council, special-district, and county offices are reachable starting points.

**Check yourself.** How does a Colorado voter receive their ballot, and who draws Colorado's district maps since 2018?

## Sources
- Colorado Secretary of State. (n.d.). *Voting in Colorado: mail ballots, registration; independent redistricting commissions*. sos.state.co.us. https://www.sos.state.co.us/
- Colorado General Assembly. (n.d.). *Local government: counties, home rule, and TABOR*. leg.colorado.gov. https://leg.colorado.gov/`,
    },

    // ── Section 7: Practice (fill in the blanks) ─────────────────────────
    {
      slug: "co-exercise",
      title: "7 · Practice: fill in the blanks",
      section: "Practice",
      exercise: {
        instructions:
          "Fill in each blank about Colorado state government, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt: "Colorado became a state in 1876, which is why it is nicknamed the ___ State.",
            answer: "Centennial",
            accept: ["centennial"],
            explanation:
              "Colorado joined the Union in 1876, the nation's 100th year, earning the nickname the Centennial State.",
          },
          {
            prompt:
              "Colorado's signature constitutional rule requiring voter approval for tax increases is called ___ (an acronym).",
            answer: "TABOR",
            accept: ["tabor", "the Taxpayer's Bill of Rights", "Taxpayer's Bill of Rights"],
            explanation:
              "The Taxpayer's Bill of Rights (TABOR, 1992) requires voter approval for tax increases and caps and refunds revenue above a limit.",
          },
          {
            prompt:
              "Under TABOR, revenue the state collects ABOVE its cap must generally be ___ to taxpayers.",
            answer: "refunded",
            accept: ["returned", "refund"],
            explanation:
              "Revenue above the TABOR cap is refunded to taxpayers unless voters agree to let the government keep it (called 'de-Brucing').",
          },
          {
            prompt:
              "Colorado picks judges by merit selection, then keeps or removes them through yes/no ___ elections.",
            answer: "retention",
            explanation:
              "A nominating commission sends the Governor a list; the Governor appoints; the judge later faces nonpartisan yes/no retention elections (10-year terms for the Supreme Court).",
          },
          {
            prompt: "Colorado's General Assembly has 35 senators and ___ representatives.",
            answer: "65",
            explanation:
              "The Colorado House has 65 members (2-year terms); the Senate has 35 (4-year terms). Both chambers have 8-year term limits.",
          },
          {
            prompt:
              "TRUE or FALSE: The Colorado Legislature can raise a state tax on its own, without a public vote.",
            answer: "false",
            explanation:
              "False. Under TABOR, a tax increase must be approved by the voters — passing the Legislature alone is not enough.",
          },
        ],
      },
    },

    // ── Section 8: Final quiz ────────────────────────────────────────────
    {
      slug: "co-quiz",
      title: "8 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "Which constitution governs Colorado, and why is Colorado the 'Centennial State'?",
            options: [
              "The Constitution of 1876; it joined the Union in the nation's 100th year",
              "The Constitution of 1912; it was the 100th territory",
              "The Constitution of 1950; it has 100 counties",
              "It has no constitution",
            ],
            correctIndex: 0,
            explanation:
              "Colorado adopted its constitution in 1876 and became a state that year — the nation's centennial — hence 'Centennial State.'",
            sourceLessonSlug: "co-constitution",
          },
          {
            prompt: "What can Colorado citizens put directly on the ballot by initiative?",
            options: [
              "Only nonbinding opinions",
              "A statute OR a constitutional amendment",
              "Only local ordinances",
              "Nothing — Colorado has no initiative",
            ],
            correctIndex: 1,
            explanation:
              "Colorado's initiative allows citizens to enact statutes and constitutional amendments directly, making its constitution frequently amended.",
            sourceLessonSlug: "co-constitution",
          },
          {
            prompt: "What is TABOR?",
            options: [
              "A state agency that builds roads",
              "The Taxpayer's Bill of Rights — requires voter approval for tax increases and caps/refunds revenue",
              "Colorado's income-tax code",
              "A judicial nominating commission",
            ],
            correctIndex: 1,
            explanation:
              "TABOR (1992) requires voter approval for tax increases and refunds revenue collected above a formula-based cap.",
            sourceLessonSlug: "co-tabor",
          },
          {
            prompt: "Under TABOR, what happens to state revenue collected ABOVE the cap?",
            options: [
              "It is kept automatically by the Legislature",
              "It must generally be refunded to taxpayers unless voters approve keeping it",
              "It goes to the federal government",
              "It is illegal to collect",
            ],
            correctIndex: 1,
            explanation:
              "Excess revenue is refunded to taxpayers unless voters agree to let the government keep it ('de-Brucing').",
            sourceLessonSlug: "co-tabor",
          },
          {
            prompt: "How does Colorado choose its judges?",
            options: [
              "Partisan elections",
              "Merit selection (nominating commission → Governor appoints) plus yes/no retention elections",
              "The Legislature elects them",
              "Lifetime appointment by the Governor with no review",
            ],
            correctIndex: 1,
            explanation:
              "Colorado uses the Missouri Plan: a commission vets applicants, the Governor appoints from the list, and voters retain or remove judges.",
            sourceLessonSlug: "co-courts",
          },
          {
            prompt: "What does Colorado's 'GAVEL' amendment guarantee?",
            options: [
              "That the Governor can veto any bill twice",
              "That every bill gets a committee hearing (limiting leaders' power to kill bills quietly)",
              "That judges serve for life",
              "That taxes never rise",
            ],
            correctIndex: 1,
            explanation:
              "The 1988 GAVEL amendment guarantees each bill a committee hearing, an unusual pro-transparency legislative rule.",
            sourceLessonSlug: "co-three-branches",
          },
          {
            prompt: "Why can't the Colorado Legislature raise a state tax by itself?",
            options: [
              "Only counties can tax",
              "TABOR requires that tax increases be approved by the voters",
              "The Governor sets all taxes",
              "Colorado has no taxes",
            ],
            correctIndex: 1,
            explanation:
              "Under TABOR a tax increase must go to the voters; passing the Legislature alone is not sufficient.",
            sourceLessonSlug: "co-bill-to-law",
          },
          {
            prompt: "How do most Coloradans vote?",
            options: [
              "In person only, on Election Day",
              "By mail — a ballot is mailed to every registered voter",
              "Online",
              "By proxy through a legislator",
            ],
            correctIndex: 1,
            explanation:
              "Since 2013 Colorado mails a ballot to every registered voter, with same-day and automatic registration.",
            sourceLessonSlug: "co-elections-involved",
          },
          {
            prompt: "Who has drawn Colorado's congressional and legislative maps since 2018?",
            options: [
              "The Governor alone",
              "Independent commissions of Democrats, Republicans, and unaffiliated members (Amendments Y and Z)",
              "The U.S. Congress",
              "The state Treasurer",
            ],
            correctIndex: 1,
            explanation:
              "Amendments Y and Z (2018) created independent redistricting commissions for Colorado's maps.",
            sourceLessonSlug: "co-elections-involved",
          },
          {
            prompt: "Why does this course tell you to VERIFY TABOR's current numbers and rules?",
            options: [
              "Because TABOR is secret",
              "Because its caps, refunds, and interactions change yearly and are frequently litigated and on the ballot — check leg.colorado.gov / sos.state.co.us",
              "Because only Congress controls TABOR",
              "Because TABOR was repealed",
            ],
            correctIndex: 1,
            explanation:
              "TABOR's mechanics evolve each year and appear on ballots, so the authoritative, current source is the state's own sites.",
            sourceLessonSlug: "co-tabor",
          },
        ],
      },
    },
  ],
};
