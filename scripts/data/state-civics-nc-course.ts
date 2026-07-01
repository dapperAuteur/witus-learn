// Authored "North Carolina Civics: How Your State Government Works" — the North
// Carolina entry in the per-state Civics layer on Learn.WitUS. State-level companion
// to the general Civics courses (US Civics 101, US Constitution 101, State vs Federal
// Power, and US, State & Local Government: Who Does What): those teach the SYSTEM;
// this teaches North Carolina's specific version of it.
//
// Factual and strictly non-partisan. Every content lesson is cited (APA 7 in-line +
// a `## Sources` bibliography) to NORTH CAROLINA'S OWN OFFICIAL SOURCES: the General
// Assembly and the NC Constitution's own text (ncleg.gov), the State Board of
// Elections (ncsbe.gov) and the Secretary of State (sosnc.gov), and the Judicial
// Branch (nccourts.gov). Encyclopedic references (NCpedia, the state DNCR history
// blog) support historical dates; Ballotpedia backs a few cross-state comparisons.
//
// Authoritative-values rule (load-bearing): state facts VARY and CHANGE, and North
// Carolina's are among the most litigated in the country. The most time-sensitive
// items — flagged in-text — are: (1) the PHOTO VOTER-ID timeline, which took years of
// state and federal litigation before taking effect (municipal 2023, then statewide
// 2024) and was STILL being litigated in federal court as this course was authored;
// and (2) ABSENTEE / EARLY-VOTING DEADLINES, which the General Assembly has changed
// recently (e.g., the mail-ballot return deadline). The course points learners to
// ncsbe.gov for current dates rather than asserting fixed deadlines that may have moved.
//
// NC "gotchas" this course gets right, on purpose:
//   • the COUNCIL OF STATE — a large PLURAL elected executive (ten separately-elected
//     statewide officers), not a single governor with appointed deputies;
//   • the governor had NO VETO until an amendment took effect in 1997 — NC was the
//     LAST state to grant its governor a veto;
//   • a veto is overridden by THREE-FIFTHS (3/5) of members present and voting in each
//     chamber — NOT the more common two-thirds.
//
// Organized into sections (course modules), ending with a fill-in exercise + a final
// quiz whose every question links back to the lesson that teaches the answer.

import type { AuthoredCourse } from "./authored-course";

export const STATE_CIVICS_NC_COURSE: AuthoredCourse = {
  title: "North Carolina Civics: How Your State Government Works",
  description:
    "A practical, non-partisan guide to how the state of North Carolina governs itself — and how you take part where you live. You'll learn North Carolina's THIRD constitution (adopted 1971) and its amendment path — the General Assembly proposes by a three-fifths vote and the VOTERS ratify, because NC has NO citizen initiative; the three branches, including the COUNCIL OF STATE, a large plural executive of TEN separately-elected statewide officers (Governor, Lieutenant Governor, Attorney General, Secretary of State, Auditor, Treasurer, Superintendent of Public Instruction, and the Commissioners of Agriculture, Insurance, and Labor); a General Assembly of a 120-member House and a 50-member Senate where — famously — the governor had NO veto until 1997 (NC was the last state to grant one) and a veto is overridden by THREE-FIFTHS, not two-thirds; and appellate judges elected in PARTISAN races. It covers how a bill becomes a North Carolina law, local government across NC's 100 counties (a board of commissioners, limited home rule under Dillon's Rule, municipalities, and NO townships as government), and NC's elections — photo voter ID (recently in effect after years of litigation), no-excuse absentee, early one-stop voting with same-day registration, and a 25-day regular registration deadline. It closes on how to get involved. Cited to North Carolina's own official sources (ncleg.gov, ncsbe.gov, sosnc.gov, nccourts.gov). Because state facts vary and change, the course flags the photo-ID litigation timeline and the absentee/early-voting deadlines — and points you to ncsbe.gov for current dates rather than asserting fixed rules.",
  lessons: [
    // ── Section 1: The North Carolina Constitution ───────────────────────
    {
      slug: "nc-constitution",
      title: "1 · North Carolina's 1971 constitution — and no citizen initiative",
      section: "The North Carolina Constitution",
      body: `North Carolina governs itself under a constitution adopted in **1971** — its **third** constitution (after those of **1776** and **1868**). The 1971 document was a modernizing rewrite recommended by the North Carolina State Constitution Study Commission; it reorganized and streamlined the 1868 constitution rather than starting from scratch (NCpedia, n.d.; North Carolina General Assembly, n.d.).

**How North Carolina's constitution is amended — the legislature proposes, the voters ratify.** This is a key North Carolina fact, and it differs from many western states:

- **There is NO citizen initiative in North Carolina.** Ordinary citizens **cannot** petition a proposed amendment (or a proposed statute) directly onto the statewide ballot. Unlike Arizona, Arkansas, or California, North Carolina has **no statewide initiative or popular referendum** for constitutional amendments — the proposing power belongs to the **General Assembly** (Ballotpedia, n.d.).
- **Step 1 — the General Assembly proposes.** An amendment must be **passed by a three-fifths (3/5) vote of all the members of each house** of the General Assembly (Ballotpedia, n.d.).
- **Step 2 — the voters ratify.** A proposed amendment then goes on the ballot and takes effect only if a **simple majority of voters** approve it (Ballotpedia, n.d.).
- **The convention route.** The General Assembly can also (by a two-thirds vote of each house, plus voter approval to call it) convene a **constitutional convention** — but this is rare; almost every amendment since Reconstruction has originated in the legislature (NCpedia, n.d.).

**A note this course keeps returning to:** state facts **vary and change**, and North Carolina's are among the most **litigated** in the country. Everything here is current as of authoring, but North Carolina's own government (ncleg.gov, ncsbe.gov, sosnc.gov, nccourts.gov) is the authoritative source. When something is time-sensitive or in flux, we say so.

**Check yourself.** In what year was North Carolina's current constitution adopted, is it the state's first/second/third constitution, and who can propose a constitutional amendment — citizens by petition, or the General Assembly?

## Sources
- North Carolina General Assembly. (n.d.). *Constitution of North Carolina*. NCleg.gov. https://www.ncleg.gov/Laws/Constitution
- NCpedia. (n.d.). *Constitution, State (North Carolina)*. https://www.ncpedia.org/government/nc-constitution-history
- Ballotpedia. (n.d.). *Amending the North Carolina Constitution / North Carolina Constitution*. https://ballotpedia.org/North_Carolina_Constitution`,
    },

    // ── Section 2: The three state branches ──────────────────────────────
    {
      slug: "nc-three-branches",
      title: "2 · The three branches — and the Council of State",
      section: "The Three Branches",
      body: `North Carolina splits power into three branches, with two features that stand out: a **plural elected executive** (the **Council of State**) and — historically — a **governor with no veto at all** (fixed only in 1997; see Lesson 4).

**Legislative — the North Carolina General Assembly** (North Carolina General Assembly, n.d.):
- **House of Representatives — 120 members, 2-year terms.**
- **Senate — 50 members, 2-year terms.**
- North Carolina does **not** have legislative term limits for the General Assembly.

**Executive — the COUNCIL OF STATE, a large plural executive.** This is a defining North Carolina fact. Instead of one governor who appoints the rest of the executive branch, North Carolina voters **separately elect TEN statewide executive officers**, established by the constitution and known collectively as the **Council of State** (each a 4-year term) (North Carolina Council of State, n.d.; NCpedia, n.d.):
1. **Governor**
2. **Lieutenant Governor** — **separately elected**, *not* a running mate on the governor's ticket. So North Carolina can (and often does) have a governor and lieutenant governor from **different parties**.
3. **Attorney General**
4. **Secretary of State**
5. **State Auditor**
6. **State Treasurer**
7. **Superintendent of Public Instruction**
8. **Commissioner of Agriculture**
9. **Commissioner of Insurance**
10. **Commissioner of Labor**

Because these ten officers are elected **on their own**, real executive power in North Carolina is **split**, not concentrated in the governor — a governor shares the executive branch with nine other independently-elected officials who answer to the voters, not to the governor.

**Judicial — appellate judges elected in PARTISAN races.** Covered fully in the next lesson: North Carolina **elects** its **Supreme Court** justices and **Court of Appeals** judges in **partisan** statewide elections (with a party label on the ballot) — not merit selection, and not nonpartisan races (North Carolina Judicial Branch, n.d.).

**The veto — and the 3/5 override.** North Carolina's governor is unusual twice over: the office had **no veto power at all until 1997** (NC was the **last** state to grant its governor a veto), and even now a veto is overridden by only **three-fifths** of the members present and voting in each chamber — not the more common two-thirds. Both points get their own treatment in Lesson 4.

**Check yourself.** Give the size of each chamber of the General Assembly, name what the "Council of State" is and roughly how many officers it has, and say how North Carolina chooses its appellate judges.

## Sources
- North Carolina General Assembly. (n.d.). *The North Carolina General Assembly (House & Senate)*. NCleg.gov. https://www.ncleg.gov/
- North Carolina Council of State (via NC.gov / OSBM). (n.d.). *Council of State*. https://www.osbm.nc.gov/stewardship-services/council-state
- NCpedia. (n.d.). *Council of State*. https://www.ncpedia.org/council-state`,
    },
    {
      slug: "nc-courts",
      title: "3 · North Carolina's courts: appellate judges elected in PARTISAN races",
      section: "The Three Branches",
      body: `North Carolina's way of choosing its highest judges is a clean contrast to states that use merit selection or nonpartisan judicial races: North Carolina **elects** its appellate judges, and it does so in **PARTISAN** elections — with a party label on the ballot (North Carolina Judicial Branch, n.d.; Ballotpedia, n.d.).

**Partisan, elected — NOT merit selection, NOT nonpartisan.** For the **Supreme Court of North Carolina** (a Chief Justice and six Associate Justices, **8-year terms**) and the **North Carolina Court of Appeals** (fifteen judges who sit in rotating panels of three, **8-year terms**), North Carolina holds **statewide partisan elections**. "Partisan" means candidates run **with a party label** on the ballot; "elected" means voters — not a governor picking from a commission's list — put them on the bench (North Carolina Judicial Branch, n.d.; Ballotpedia, n.d.).

⚠️ **A flagged, changing fact:** North Carolina has **switched its judicial elections between nonpartisan and partisan more than once** in recent decades. The General Assembly moved appellate (and later trial) judicial races **back to partisan** in the late 2010s. Because the legislature can change this again, confirm the current label rule for a given election at nccourts.gov / ncsbe.gov rather than assuming (Ballotpedia, n.d.).

This is worth underlining because it differs from other models:
- **Indiana** and some large counties elsewhere use *merit selection* (a commission nominates, the governor appoints, voters later retain).
- **Arkansas** elects its appellate judges in **nonpartisan** races (no party label).
- **North Carolina** elects its appellate judges in **PARTISAN** races — a party label appears next to the candidate.

**Vacancy note.** When a mid-term vacancy occurs on the bench, the **Governor appoints** a replacement, who then must **stand for election** to keep the seat — so even appointed judges face the voters (North Carolina Judicial Branch, n.d.).

**Why this matters civically:** in North Carolina, your **judicial races are real, party-labeled elections you vote in** — not yes/no retention questions and not label-free contests. Knowing they're partisan tells you a party cue *will* appear on the ballot, but it's still worth researching the candidates on the merits.

**Check yourself.** How does North Carolina choose its Supreme Court justices and Court of Appeals judges, and what does "partisan" mean on your judicial ballot — versus "nonpartisan"?

## Sources
- North Carolina Judicial Branch. (n.d.). *Supreme Court / Court of Appeals / how judges are selected*. NCcourts.gov. https://www.nccourts.gov/courts
- Ballotpedia. (n.d.). *North Carolina judicial elections / Supreme Court of North Carolina*. https://ballotpedia.org/North_Carolina_judicial_elections`,
    },

    // ── Section 3: How a bill becomes a state law ────────────────────────
    {
      slug: "nc-bill-to-law",
      title: "4 · How a bill becomes a North Carolina law — veto only since 1997, 3/5 override",
      section: "How a Bill Becomes State Law",
      body: `A bill in the North Carolina General Assembly follows the familiar two-chamber path, but the **ending** is where North Carolina is genuinely unusual — because of the state's late, limited **veto** (North Carolina General Assembly, n.d.).

1. **Introduction.** A legislator files a bill in the House or Senate.
2. **Committee.** The bill is assigned to a committee that holds hearings, may amend it, and votes. As everywhere, **most bills die in committee** — the biggest filter.
3. **Floor votes / readings.** If it clears committee, the full chamber debates and votes (North Carolina bills generally get multiple **readings**), and may amend.
4. **The other chamber.** It repeats the process in the second chamber; any differences must be reconciled so both chambers pass **identical** text.
5. **The Governor.** The Governor can **sign** the bill, **let it become law without signature**, or **veto** it — *for most bills* (see the twists below).

**The North Carolina twist #1 — the governor had NO veto until 1997.** For most of its history North Carolina's governor **could not veto legislation at all**. A constitutional amendment giving the governor a veto was **approved by voters in November 1996 and took effect in 1997**, making North Carolina the **LAST state in the nation** to grant its governor a veto power (NC Department of Natural and Cultural Resources, n.d.; EdNC, n.d.).

**The North Carolina twist #2 — a THREE-FIFTHS override (not two-thirds).** If the Governor vetoes a bill, the General Assembly can override with **three-fifths (3/5) of the members present and voting in each chamber** — a lower bar than the two-thirds many states require. This lower threshold was part of the 1990s compromise that created the veto in the first place (EdNC, n.d.).

**The North Carolina twist #3 — some bills the governor CAN'T veto.** North Carolina's veto does **not** reach certain categories — notably, the governor **cannot veto** proposed **constitutional amendments** or certain **local/redistricting** bills, which become law (or go to the ballot) without the governor's signature. So the veto, though real since 1997, is **narrower** than the federal model (North Carolina General Assembly, n.d.).

**And note what North Carolina does NOT have:** there's **no citizen initiative** (Lesson 1), so — unlike Arizona or Arkansas — voters can't write a *statute* directly by petition. The main route to a new state law is a **bill through the General Assembly** (voters do get the final say when the legislature refers a **constitutional amendment**).

**Check yourself.** Order these: committee, floor vote, Governor's action, introduction, the other chamber. Then state two things that make North Carolina's veto unusual (when the governor first got it, and the fraction needed to override).

## Sources
- North Carolina General Assembly. (n.d.). *How a bill becomes a law / the legislative process*. NCleg.gov. https://www.ncleg.gov/
- NC Department of Natural and Cultural Resources. (n.d.). *Gubernatorial veto instituted (1996)*. DNCR.nc.gov. https://www.dncr.nc.gov/blog/2016/01/01/gubernatorial-veto-instituted-1996
- EdNC. (n.d.). *How does veto power work in North Carolina?* EdNC.org. https://www.ednc.org/edexplainer-how-does-veto-power-work-in-north-carolina/`,
    },

    // ── Section 4: Local government in North Carolina ────────────────────
    {
      slug: "nc-local-government",
      title: "5 · Local government: 100 counties, limited home rule, no townships",
      section: "Local Government in North Carolina",
      body: `North Carolina's local government rests on **100 counties** and its cities and towns — with **no township layer** and only **limited home rule**, because the state follows a **Dillon's Rule** tradition (UNC School of Government — Coates' Canons, n.d.; NCpedia, n.d.).

**Counties — 100 of them.** North Carolina is divided into **100 counties**, each governed by an **elected Board of County Commissioners** (the county's legislative/governing body) under G.S. Chapter 153A. Counties deliver services the state assigns them — public health, social services, elections administration, register of deeds, the courts' local support, and much of public education's local funding (NCpedia, n.d.). Other county offices — **Sheriff** and **Register of Deeds** — are elected; many administrative roles (e.g., a professional **county manager**) are appointed.

**Cities and towns (municipalities).** Incorporated **municipalities** run local services where people live densely — police, local streets, water/sewer in many places, zoning — typically under a **mayor and a city/town council** (or a council–manager form). Municipal powers come from the General Assembly under G.S. Chapter 160A (recodified in the "160D" land-use chapter) (NCpedia, n.d.).

**Limited home rule — a Dillon's Rule state.** This is the key structural fact: North Carolina local governments generally have **only the powers the General Assembly grants them** (expressly, by necessary implication, or as essential to their declared purposes). North Carolina is **not** a broad "home rule" state — counties and cities can't simply do anything not forbidden; they need **statutory authority from the legislature**. In practice this means the General Assembly can **enable, limit, or preempt** local action (e.g., local wage or firearm rules) far more than in many home-rule states (UNC School of Government — Coates' Canons, n.d.).

**No townships as government.** Unlike much of the Northeast and Midwest, North Carolina has **no active township layer** of government. (Some counties still show historic "township" boundaries used for a few administrative or descriptive purposes, but townships are **not** a functioning unit of local government with their own elected officials.) Below the county, the working local layer is the **city or town** — not a township (NCpedia, n.d.).

The practical upshot: if you have a local problem in North Carolina, the two levels to think about are your **county** (Board of Commissioners) and your **city or town** (council) — not a township. And remember the limit: because North Carolina is a Dillon's-Rule state, what your local government *can* do is often set by the **General Assembly** in Raleigh.

**Check yourself.** How many counties does North Carolina have, what governs a county, what does "limited home rule / Dillon's Rule" mean for a city or county, and what local layer does North Carolina NOT have?

## Sources
- UNC School of Government — Coates' Canons. (n.d.). *Is North Carolina a Dillon's Rule state?* SOG.unc.edu. https://canons.sog.unc.edu/2012/10/is-north-carolina-a-dillons-rule-state/
- NCpedia. (n.d.). *County government / municipal (city) government in North Carolina*. https://www.ncpedia.org/`,
    },

    // ── Section 5: Elections & ballot access ─────────────────────────────
    {
      slug: "nc-elections",
      title: "6 · Elections in NC: early one-stop voting, no-excuse absentee, 25-day deadline",
      section: "Elections & Ballot Access",
      body: `North Carolina runs its own elections, and its everyday rules are a specific, voter-friendly mix — with one heavily-litigated exception (photo ID) that gets its own flagged lesson next. (Because election rules change, the current source is always the **North Carolina State Board of Elections — ncsbe.gov**.)

**Early in-person "one-stop" voting — with SAME-DAY registration.** North Carolina offers an **early voting** ("one-stop") period before Election Day at which any registered voter can vote in person. Notably, during this early-voting period North Carolina allows **same-day registration**: an eligible resident who isn't yet registered can **register and vote at the same visit**, showing proof of residence (North Carolina State Board of Elections, n.d.).

**Regular registration closes 25 days before Election Day.** Outside the early-voting same-day window, the **regular voter-registration deadline is 25 days before Election Day**. Miss that deadline and your only same-day option is to register in person **during early voting** (not on Election Day itself) (North Carolina State Board of Elections, n.d.).

**No-excuse absentee (mail) voting.** North Carolina has **no-excuse absentee voting**: **any** registered voter may request and vote a **mail-in absentee ballot** — no excuse required. You must **request** the ballot ahead of a deadline (historically about two weeks before Election Day), and there are witness/return requirements to follow (North Carolina State Board of Elections, n.d.).

⚠️ **Flagged — absentee deadlines have MOVED.** North Carolina recently **changed** its mail-ballot **return** rule: where absentee ballots postmarked by Election Day once had a short grace period to arrive, the General Assembly moved to requiring ballots to be **received by Election Day**. Because this (and the request deadline) can change again, **do not rely on a fixed date from this course — confirm the current request and return deadlines at ncsbe.gov** for your specific election (North Carolina State Board of Elections, n.d.).

**Check yourself.** In North Carolina, can you register and vote on the same day during early voting? What is the regular registration deadline (in days before the election)? And is absentee/mail voting "no-excuse"?

## Sources
- North Carolina State Board of Elections. (n.d.). *Vote early in person (one-stop) / same-day registration*. NCsbe.gov. https://www.ncsbe.gov/voting/vote-early-person
- North Carolina State Board of Elections. (n.d.). *Voter registration deadlines*. NCsbe.gov. https://www.ncsbe.gov/registering/how-register/voter-registration-deadlines
- North Carolina State Board of Elections. (n.d.). *Vote by mail (absentee)*. NCsbe.gov. https://www.ncsbe.gov/voting/vote-mail`,
    },
    {
      slug: "nc-voter-id-in-flux",
      title: "7 · Photo voter ID — recently in effect after litigation (flagged)",
      section: "Elections & Ballot Access",
      body: `⚠️ **THIS LESSON IS ABOUT A RULE WITH A LONG, CHANGING LEGAL HISTORY. Confirm the CURRENT status and acceptable-ID list at ncsbe.gov before relying on any detail.**

**The requirement.** North Carolina now generally requires voters to **show a photo ID** to vote in person (and to include an ID number/copy or an exception form when voting by mail). The requirement traces to **Senate Bill 824**, which the General Assembly enacted in **December 2018** by overriding the governor's veto (North Carolina State Board of Elections, n.d.; Ballotpedia, n.d.).

**Why "recently in effect" — the litigation timeline (why we flag it).** North Carolina's photo-ID requirement was tied up in **state and federal courts for years** before it actually applied to voters:
- Passed **2018**, it was then **blocked** by court orders and did **not** apply in 2019–2022 elections while lawsuits proceeded.
- In **April 2023**, the **North Carolina Supreme Court** reversed course and **allowed** the law to take effect. Photo ID was then used starting in the **2023 municipal elections** and in the **2024** statewide elections (North Carolina State Board of Elections, n.d.; Ballotpedia, n.d.).
- **Federal litigation continued** even after the state-law question was settled — a separate federal challenge to SB 824 was still being decided as this course was authored (with a federal court **upholding** the law in **2026**, subject to possible appeal) (Ballotpedia, n.d.).

**There's a fail-safe.** A voter who can't show an acceptable photo ID at the polls generally isn't simply turned away — North Carolina provides options such as completing an **ID Exception Form** (e.g., citing a reasonable impediment) or voting a **provisional ballot**, then having it reviewed. The **acceptable-ID list** (driver's license, NC-issued non-operator ID, U.S. passport, certain student/employee IDs approved by the state board, military/tribal IDs, and a free county-issued voter photo ID, among others) is set and updated by the state (North Carolina State Board of Elections, n.d.).

⚠️ **Because this rule has moved through the courts repeatedly, this course will NOT treat any single ruling as the final word.** The specific acceptable-ID list, the exception process, and even whether a given election is affected can change between cycles. The authoritative, current source is **ncsbe.gov** — check it, not an older summary, before you rely on any specific requirement.

**Why flag this so hard?** Voter-ID rules are exactly the kind of "state fact" that **changes with each court ruling and legislative session**. Asserting a stale status here would be worse than useless — it could tell someone they don't need ID when they do, or vice versa. The durable skill is: **for photo-ID rules, always pull the current guidance from ncsbe.gov.**

**Check yourself.** What does North Carolina now generally require to vote in person, why does this course refuse to treat one court ruling as the final word, and where should you look for the current rule and ID list?

## Sources
- North Carolina State Board of Elections. (n.d.). *Voter ID / bring your photo ID to vote*. NCsbe.gov. https://www.ncsbe.gov/voting/voter-id
- Ballotpedia. (n.d.). *Voter ID in North Carolina (Senate Bill 824 & litigation timeline)*. https://ballotpedia.org/Voter_ID_in_North_Carolina`,
    },

    // ── Section 6: Get involved where you live ───────────────────────────
    {
      slug: "nc-get-involved",
      title: "8 · Get involved where you live in North Carolina",
      section: "Get Involved Where You Live",
      body: `North Carolina gives you several levers — candidate elections (including an unusually long ballot of statewide executives and judges), voting access, and accessible local bodies. Here's where to pull them.

**Register and vote — mind the deadlines, and remember same-day early voting.** Register (and check your registration) by the **25-day** regular deadline; if you miss it, you can still **register and vote in person during early voting** (same-day registration). Bring your **photo ID** (see the flagged lesson), and remember absentee/mail voting is **no-excuse** but has request/return deadlines. Start at **ncsbe.gov** (North Carolina State Board of Elections, n.d.).

**Vote the whole Council of State — and your judicial races.** Because North Carolina separately elects **ten** statewide executives (the **Council of State**) and elects its **appellate judges in partisan races**, your ballot is long. That's power: you personally choose the Attorney General, the Superintendent of Public Instruction, three Commissioners, and more — so research **down the ballot**, not just the top of it (North Carolina Council of State, n.d.; North Carolina Judicial Branch, n.d.).

**Understand there's no citizen initiative — so the General Assembly is the main lawmaking lever.** Unlike some states, you **can't** petition a statute or amendment onto the ballot yourself. The path to changing state law runs through the **General Assembly** — and because the governor's veto is comparatively **limited** (it arrived only in 1997 and is overridden by just **3/5**), the **legislature is the center of gravity**. Look up your legislators and track bills at **ncleg.gov**, and testify or comment in committee, where bills live or die (North Carolina General Assembly, n.d.).

**Show up locally — county and city.** Your **Board of County Commissioners** and your **city/town council** meetings are public and set your local taxes, ordinances, land use, and services (no townships to track in North Carolina). These smaller rooms are where one voice carries the most weight — and remember the limit: because North Carolina is a **Dillon's-Rule** state, some local questions are ultimately decided by the **General Assembly**, so local *and* state advocacy often go together (UNC School of Government — Coates' Canons, n.d.).

**Check yourself.** Name three ways to get involved in North Carolina government, and explain why the General Assembly is the main lever for changing a state law here (hint: no citizen initiative + a limited veto).

## Sources
- North Carolina State Board of Elections. (n.d.). *Register to vote / voting options*. NCsbe.gov. https://www.ncsbe.gov/registering
- North Carolina General Assembly. (n.d.). *Find your legislators / track legislation*. NCleg.gov. https://www.ncleg.gov/
- UNC School of Government — Coates' Canons. (n.d.). *Local government authority in North Carolina*. https://canons.sog.unc.edu/`,
    },

    // ── Section 7: Practice ──────────────────────────────────────────────
    {
      slug: "nc-practice",
      title: "9 · Practice: North Carolina civics fill-in",
      section: "Practice",
      exercise: {
        instructions:
          "Fill in each blank about North Carolina state government, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt: "North Carolina's current constitution was adopted in the year ___.",
            answer: "1971",
            explanation:
              "The 1971 constitution is North Carolina's THIRD (after 1776 and 1868). Amendments are proposed by the General Assembly (3/5 of each house) and ratified by the voters — there is no citizen initiative.",
          },
          {
            prompt:
              "North Carolina's plural elected executive — ten statewide officers elected separately — is collectively called the ___ of State.",
            answer: "council",
            explanation:
              "The Council of State is ten separately-elected statewide executives (Governor, Lt. Governor, Attorney General, Secretary of State, Auditor, Treasurer, Superintendent of Public Instruction, and Commissioners of Agriculture, Insurance, and Labor).",
          },
          {
            prompt:
              "The North Carolina House has 120 members and the North Carolina Senate has ___ members.",
            answer: "50",
            accept: ["fifty"],
            explanation:
              "The General Assembly is a 120-member House and a 50-member Senate, both on 2-year terms.",
          },
          {
            prompt:
              "North Carolina's governor had NO veto power until the year ___ — making NC the last state to grant its governor a veto.",
            answer: "1997",
            accept: ["1996"],
            explanation:
              "Voters approved the veto amendment in November 1996 and it took effect in 1997. NC was the last state to give its governor a veto.",
          },
          {
            prompt:
              "The General Assembly overrides a governor's veto with a ___-fifths vote of the members present and voting in each chamber.",
            answer: "three",
            accept: ["3", "three-fifths", "3/5"],
            explanation:
              "North Carolina uses a 3/5 override — lower than the more common two-thirds — a compromise from when the veto was created in the 1990s.",
          },
          {
            prompt: "North Carolina is divided into ___ counties.",
            answer: "100",
            accept: ["one hundred"],
            explanation:
              "North Carolina has 100 counties, each governed by an elected Board of County Commissioners. It has limited home rule (Dillon's Rule) and no townships.",
          },
          {
            prompt:
              "TRUE or FALSE: North Carolina lets citizens petition a statute or constitutional amendment directly onto the statewide ballot (a citizen initiative).",
            answer: "false",
            explanation:
              "False. North Carolina has NO citizen initiative. The General Assembly proposes amendments (3/5 of each house) and the voters ratify; statutes come from the legislature.",
          },
        ],
      },
    },

    // ── Section 8: Final quiz ────────────────────────────────────────────
    {
      slug: "nc-quiz",
      title: "10 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "How is North Carolina's constitution amended?",
            options: [
              "Citizens petition an amendment directly onto the ballot (initiative)",
              "The General Assembly proposes by a 3/5 vote of each house, and the voters ratify",
              "The Governor amends it by executive order",
              "The state Supreme Court rewrites it",
            ],
            correctIndex: 1,
            explanation:
              "North Carolina has no citizen initiative: the General Assembly proposes an amendment by a three-fifths vote of each house, and a majority of voters must ratify it.",
            sourceLessonSlug: "nc-constitution",
          },
          {
            prompt: "What is the 'Council of State' in North Carolina?",
            options: [
              "An advisory board the governor appoints",
              "The state Senate's leadership committee",
              "Ten separately-elected statewide executive officers (a plural executive)",
              "The panel that nominates judges",
            ],
            correctIndex: 2,
            explanation:
              "The Council of State is North Carolina's plural executive — ten statewide officers each elected separately, including the Governor, Lt. Governor, Attorney General, three Commissioners, and more.",
            sourceLessonSlug: "nc-three-branches",
          },
          {
            prompt: "How does North Carolina choose its Supreme Court justices and Court of Appeals judges?",
            options: [
              "Merit selection (commission + governor + retention)",
              "Nonpartisan statewide elections",
              "Partisan statewide elections (a party label appears on the ballot)",
              "Appointment by the General Assembly for life",
            ],
            correctIndex: 2,
            explanation:
              "North Carolina elects its appellate judges in PARTISAN statewide races (8-year terms) — with a party label on the ballot — not merit selection or nonpartisan races.",
            sourceLessonSlug: "nc-courts",
          },
          {
            prompt: "Which statement about the North Carolina governor's veto is correct?",
            options: [
              "The governor has always had a veto since 1776",
              "The governor got a veto only in 1997 — NC was the last state to grant one — and a veto is overridden by 3/5 of each chamber",
              "There is no veto at all in North Carolina",
              "A veto is overridden by a simple majority",
            ],
            correctIndex: 1,
            explanation:
              "North Carolina was the LAST state to give its governor a veto (amendment approved 1996, effective 1997), and a veto is overridden by three-fifths of the members present and voting in each chamber.",
            sourceLessonSlug: "nc-bill-to-law",
          },
          {
            prompt: "What vote overrides a governor's veto in North Carolina?",
            options: [
              "A simple majority of each chamber",
              "Two-thirds of each chamber",
              "Three-fifths of the members present and voting in each chamber",
              "Three-fourths of each chamber",
            ],
            correctIndex: 2,
            explanation:
              "North Carolina uses a THREE-FIFTHS override — not the more common two-thirds — a threshold set when the veto was created in the 1990s.",
            sourceLessonSlug: "nc-bill-to-law",
          },
          {
            prompt: "How many counties does North Carolina have, and how are they governed?",
            options: [
              "50 counties, each run by a county judge",
              "100 counties, each governed by an elected Board of County Commissioners",
              "75 counties, each with a quorum court",
              "120 counties, one per House seat",
            ],
            correctIndex: 1,
            explanation:
              "North Carolina has 100 counties, each governed by an elected Board of County Commissioners under a limited-home-rule (Dillon's Rule) framework.",
            sourceLessonSlug: "nc-local-government",
          },
          {
            prompt: "Which local layer does North Carolina NOT use as a unit of government?",
            options: ["Counties", "Cities and towns", "Townships", "Boards of county commissioners"],
            correctIndex: 2,
            explanation:
              "North Carolina has no active township layer of government. Its working local layers are the 100 counties and the incorporated cities and towns.",
            sourceLessonSlug: "nc-local-government",
          },
          {
            prompt: "Which statement about North Carolina voting access is correct?",
            options: [
              "There is no early voting and absentee voting requires an excuse",
              "Early one-stop voting allows same-day registration, and absentee (mail) voting is no-excuse",
              "Voters may only vote on Election Day",
              "Same-day registration is allowed on Election Day itself",
            ],
            correctIndex: 1,
            explanation:
              "North Carolina offers early one-stop voting with same-day registration during that period, and no-excuse absentee (mail) voting; the regular registration deadline is 25 days before Election Day.",
            sourceLessonSlug: "nc-elections",
          },
          {
            prompt: "Why does this course refuse to treat one court ruling as the final word on North Carolina's photo voter-ID rule?",
            options: [
              "Because North Carolina has no voter-ID requirement at all",
              "Because the ID requirement (SB 824, 2018) was litigated in state and federal courts for years — taking effect only in 2023–2024 — so you must check ncsbe.gov for the current status",
              "Because the rules are secret",
              "Because only the governor knows the rule",
            ],
            correctIndex: 1,
            explanation:
              "North Carolina's photo-ID law (SB 824, 2018) was blocked and unblocked repeatedly; it took effect in 2023 (municipal) and 2024, with federal litigation continuing. The current source is ncsbe.gov.",
            sourceLessonSlug: "nc-voter-id-in-flux",
          },
          {
            prompt: "Because North Carolina has no citizen initiative and a comparatively limited governor's veto, what is the main lever for changing a state law?",
            options: [
              "Petitioning a statute directly onto the ballot",
              "Electing and lobbying your General Assembly members (and testifying in committee)",
              "Asking the U.S. President",
              "Filing in federal court only",
            ],
            correctIndex: 1,
            explanation:
              "With no citizen initiative and a veto that arrived only in 1997 (overridden by just 3/5), the General Assembly is the center of gravity — electing/lobbying legislators and testifying in committee is the key lever.",
            sourceLessonSlug: "nc-get-involved",
          },
        ],
      },
    },
  ],
};
