// Authored "Georgia Civics: How Your State Government Works" — the Georgia
// entry in the per-state Civics layer on Learn.WitUS. It is the state-level
// companion to the general Civics courses (US Civics 101, US Constitution 101,
// State vs Federal Power, and US, State & Local Government: Who Does What): those
// teach the SYSTEM; this teaches ONE state's specific version of it.
//
// Factual and strictly non-partisan (how Georgia's government works, not who
// should win). Every content lesson is cited (APA 7 in-line + a `## Sources`
// bibliography) to GEORGIA'S OWN OFFICIAL SOURCES: the Georgia Constitution
// (the 1983 constitution, hosted by the Secretary of State at sos.ga.gov), the
// General Assembly (legis.ga.gov), the Secretary of State / elections
// (sos.ga.gov) and the state portal (georgia.gov), the Judicial Branch
// (gasupreme.us and georgiacourts.gov), plus the Association County Commissioners
// of Georgia (accg.org) for the county-structure explainers.
//
// Authoritative-values rule (load-bearing): state facts VARY and CHANGE. Where a
// figure is time-sensitive or election-dependent, the course SAYS SO and points
// the learner to Georgia's own official source to confirm the current value,
// rather than freezing a number or rule that could go stale. Georgia-specific
// items flagged in-text include:
//   • Georgia has NO citizen initiative — you cannot memorize a "signature
//     threshold" because citizens can't put a constitutional amendment on the
//     ballot at all; only the General Assembly (2/3 of each house) or a
//     constitutional convention can, and then voters ratify by majority.
//   • SB 202 (2021) changed absentee/mail rules (photo-ID / ID-number
//     verification instead of signature match), drop-box availability, early-
//     voting requirements, and the timing of runoffs — these are recent, were
//     litigated, and can be amended again, so confirm current rules at
//     sos.ga.gov rather than trusting a fixed description.
//   • The number of AMENDMENTS to the 1983 constitution grows most election
//     cycles as the General Assembly refers new ones — any count is a snapshot.
//   • The number of CONSOLIDATED city-county governments and the roster of
//     cities/special districts changes over time — treat any count as approximate
//     and confirm with the Department of Community Affairs (dca.georgia.gov).
//   • Early-voting dates, absentee deadlines, and acceptable photo IDs are set by
//     law and administered by the SOS — confirm the current specifics at
//     sos.ga.gov / georgia.gov before an election.
//
// Two Georgia "gotchas" the course foregrounds: (1) Georgia has 159 COUNTIES,
// the SECOND-MOST of any state (after Texas); and (2) Georgia uses a
// MAJORITY-VOTE / RUNOFF system — a candidate must win an outright majority
// (50% + 1), or the top two go to a runoff.
//
// The course is organized into sections (course modules) and ends with a fill-in
// exercise + a final quiz whose every question links back to the lesson that
// teaches the answer.

import type { AuthoredCourse } from "./authored-course";

export const STATE_CIVICS_GA_COURSE: AuthoredCourse = {
  title: "Georgia Civics: How Your State Government Works",
  description:
    "A practical, non-partisan guide to how the state of Georgia governs itself — and how you take part where you live. You'll learn Georgia's 1983 constitution (the most recent of the state's several constitutions) and why Georgia has NO citizen initiative — constitutional amendments are proposed by the General Assembly (a two-thirds vote of each house) and then ratified by voters. You'll learn the three state branches: a plural executive of separately-elected constitutional officers (the Lieutenant Governor is elected on their own, not on a ticket with the Governor, and presides over the Senate), plus the Attorney General, Secretary of State, and several commissioners; the 236-seat General Assembly (a 180-member House and a 56-member Senate); and the courts (a 9-justice Supreme Court and a 15-judge Court of Appeals whose members are chosen in NONPARTISAN statewide elections). You'll learn how a bill becomes a Georgia law — including the Governor's veto and the two-thirds override — and Georgia's local government: 159 counties (the SECOND-MOST of any state, after Texas), home rule, consolidated city-county governments like Athens-Clarke and Columbus-Muscogee, and NO townships. Finally you'll learn Georgia's distinctive elections rules — photo ID, in-person early voting, no-excuse absentee-by-mail (with the recent SB 202 changes), and the MAJORITY-VOTE RUNOFF system that sends the top two to a second election when no one wins outright — before a lesson on how to get involved. Cited to Georgia's own official sources (legis.ga.gov, sos.ga.gov, gasupreme.us / georgiacourts.gov, and the 1983 Constitution). Because state facts vary and change, the course flags time-sensitive items — like the recent SB 202 election-law changes and current ID/deadline rules — and points you to Georgia's own sources to confirm the current rule.",
  lessons: [
    // ── Section 1: The Georgia Constitution ──────────────────────────────
    {
      slug: "ga-constitution",
      title: "1 · Georgia's constitution: the 1983 rulebook — and no citizen initiative",
      section: "The Georgia Constitution",
      body: `Every U.S. state has its own constitution — its own top-level rulebook — layered *under* the U.S. Constitution but governing the daily machinery of the state. Georgia has had **several** constitutions over its history; the one in force today is the **Constitution of 1983**, ratified by the voters on **November 2, 1982** and effective **July 1, 1983** (Georgia Secretary of State, n.d.-a; Georgia Constitution, 1983).

A state constitution does for the state what the U.S. Constitution does for the nation: it creates the branches, distributes power, and sets limits the legislature can't cross by ordinary law. Two features of Georgia's document shape everything else in this course:

- **There is NO citizen initiative.** This is the biggest thing that makes Georgia different from "direct-democracy" states like California. In Georgia, **ordinary citizens cannot put a law or a constitutional amendment on the ballot by gathering signatures.** A proposed amendment must be **proposed by the General Assembly** — by a **two-thirds vote of the members of *each* house** — or by a **constitutional convention**, and then **ratified by a majority of the voters** at a general election (Georgia Constitution, 1983, art. X, §I; Georgia Secretary of State, n.d.-b). So when you hear "let's put it on the ballot," in Georgia that path runs **through the legislature first**, not around it.
- **The Governor does not sign amendments onto the ballot.** A resolution proposing an amendment goes to the voters **without** the Governor's signature — the two-thirds legislative vote and the voters' ratification are what matter (Georgia Constitution, 1983, art. X, §I).

⚠️ **Time-sensitive / varies.** The **number of amendments** ratified since 1983 grows most election cycles as the General Assembly refers new ones — any specific count you read is a snapshot, not a fixed total. When you need the current text or the amendments on an upcoming ballot, the authoritative sources are the constitution itself and the Secretary of State's "Proposed Constitutional Amendments" page (sos.ga.gov), not a textbook.

**A note this course keeps returning to:** state facts **vary and change**. Deadlines, election rules, and figures described here are current as of authoring, but the authoritative source is always Georgia's own government (the offices below), not a textbook. When something is time-sensitive, we say so.

**Check yourself.** In what year did Georgia's current constitution take effect, and what are the only two ways a constitutional amendment can be *proposed* — given that Georgia has no citizen initiative?

## Sources
- Georgia Secretary of State. (n.d.-a). *Constitution of the State of Georgia* [Official text, revised March 2019]. SOS.ga.gov. https://sos.ga.gov/sites/default/files/2022-02/state_constitution.pdf
- Georgia Secretary of State. (n.d.-b). *Proposed Georgia constitution amendments*. SOS.ga.gov. https://sos.ga.gov/page/proposed-georgia-constitution-amendments
- Georgia Constitution. (1983). Art. X, §I (Amendments to the Constitution). https://sos.ga.gov/sites/default/files/2022-02/state_constitution.pdf`,
    },

    // ── Section 2: The three state branches ──────────────────────────────
    {
      slug: "ga-three-branches",
      title: "2 · The three branches — and Georgia's plural executive",
      section: "The Three Branches",
      body: `Like the federal government, Georgia splits its power into three branches — but the balance between them is distinctly Georgia's (Georgia.gov, n.d.-a).

**Legislative — the General Assembly.** A two-chamber (bicameral) legislature of **236 total seats** (Georgia Constitution, 1983, art. III; Georgia General Assembly, n.d.-a):
- **House of Representatives — 180 members, 2-year terms.**
- **Senate — 56 members, 2-year terms.**
It writes state law and passes the budget. Note that **both** chambers serve two-year terms, so the *entire* General Assembly is up for election every two years — unlike states where a senate serves longer, staggered terms.

**Executive — a PLURAL executive.** The **Governor** is Georgia's chief executive and is limited to **two consecutive four-year terms** (Georgia Constitution, 1983, art. V, §I). But Georgia's executive branch is **plural**: several statewide **constitutional officers are elected separately** by the voters, so they answer to the electorate, not to the Governor. Alongside the Governor, Georgians separately elect the **Lieutenant Governor, Secretary of State, Attorney General, State School Superintendent, Commissioner of Insurance, Commissioner of Agriculture, and Commissioner of Labor** (Georgia Constitution, 1983, art. V; Georgia.gov, n.d.-b).

⚠️ **A Georgia detail people get wrong:** the **Lieutenant Governor is elected INDEPENDENTLY** — *not* on a joint ticket with the Governor. The two are chosen in separate races and **can be from different parties** (Georgia.gov, n.d.-b). And Georgia's Lieutenant Governor has real power in the legislature: the office **presides over the State Senate as its President** and helps steer Senate business (Georgia General Assembly, n.d.-b). Because these officers answer to voters, executive power in Georgia is **shared**, not concentrated in the Governor alone.

**Judicial — the state courts.** Georgia's court system runs from trial courts up to the **Court of Appeals** and the **Supreme Court of Georgia** (9 justices). How Georgia chooses its appellate judges — nonpartisan statewide elections — is distinctive and covered in the next lesson.

**Check yourself.** Name Georgia's three branches, give the size and term length of each chamber of the General Assembly, and explain two things about the Lieutenant Governor: how they're elected, and what job they hold in the Senate.

## Sources
- Georgia Constitution. (1983). Art. III (Legislative Branch) & Art. V (Executive Branch). https://sos.ga.gov/sites/default/files/2022-02/state_constitution.pdf
- Georgia General Assembly. (n.d.-a). *House of Representatives; Senate*. Legis.ga.gov. https://www.legis.ga.gov/
- Georgia General Assembly. (n.d.-b). *Senate leadership (President of the Senate)*. Legis.ga.gov. https://www.legis.ga.gov/senate/leadership
- Georgia.gov. (n.d.-a). *The three branches of Georgia's state government*. https://georgia.gov/three-branches-georgias-state-government
- Georgia.gov. (n.d.-b). *Elected officials*. https://georgia.gov/elected-officials`,
    },
    {
      slug: "ga-courts",
      title: "3 · Georgia's courts: nonpartisan elections for the appellate bench",
      section: "The Three Branches",
      body: `How does a state pick its judges? States do it very differently — some appoint judges, some elect them in **partisan** races (with party labels on the ballot), and some elect them in **nonpartisan** races (no party label). Georgia uses **nonpartisan statewide elections** for its two appellate courts — an important thing to know before you fill in those ballot lines.

**The appellate courts (Georgia Constitution, 1983, art. VI; Judicial Council of Georgia, n.d.):**
1. **The Supreme Court of Georgia** — the state's highest court, with **nine justices** (a Chief Justice and eight others). It is the final word on Georgia law.
2. **The Court of Appeals of Georgia** — the intermediate appellate court, with **fifteen judges** who sit in divisions. It hears appeals that don't go directly to the Supreme Court.

**How they reach the bench — nonpartisan elections.** Both Supreme Court justices and Court of Appeals judges are **elected by the voters statewide in NONPARTISAN elections**, and they serve **six-year terms** (Supreme Court of Georgia, n.d.; Judicial Council of Georgia, n.d.). "Nonpartisan" means **no party label appears next to the candidate's name on your ballot** — you're voting on the person, not a party line.

**Vacancies are filled by the Governor.** When a seat opens *between* elections, the **Governor appoints** someone to fill it (in practice choosing from candidates vetted by a judicial nominating commission); that appointee then must **stand for election** to keep the seat (Judicial Council of Georgia, n.d.). So a judge you see on the ballot may have first reached the bench by appointment — but they hold the seat only by winning a nonpartisan election.

**Why this matters civically:** because appellate judicial races are **nonpartisan**, you can't rely on a party label to decide — you'll want to read about the candidates before you vote those lines, rather than skipping them. (Trial courts below the appellate level — Superior Courts and others — also use nonpartisan elections in Georgia.)

**Check yourself.** How many members sit on Georgia's Supreme Court and how many on its Court of Appeals? Are their elections partisan or nonpartisan — and what does that word mean for what you'll see on your ballot?

## Sources
- Georgia Constitution. (1983). Art. VI (Judicial Branch). https://sos.ga.gov/sites/default/files/2022-02/state_constitution.pdf
- Supreme Court of Georgia. (n.d.). *Court information / history (nine justices; nonpartisan election; six-year terms)*. Gasupreme.us. https://www.gasupreme.us/court-information/history/
- Judicial Council of Georgia. (n.d.). *Court of Appeals of Georgia; Georgia's court system*. Georgiacourts.gov. https://georgiacourts.gov/court-of-appeals-of-georgia/`,
    },

    // ── Section 3: How a bill becomes a state law ────────────────────────
    {
      slug: "ga-bill-to-law",
      title: "4 · How a bill becomes a Georgia law",
      section: "How a Bill Becomes State Law",
      body: `A bill in the Georgia General Assembly travels a path that rhymes with Congress but has its own steps — and a key twist in the override math. Here's the route (Georgia General Assembly, n.d.-c; Georgia Constitution, 1983, art. III & V).

1. **Introduction.** A legislator (often working with the **Office of Legislative Counsel**, which drafts the bill) files it with the **Clerk of the House** or the **Secretary of the Senate**. It gets a number and a **first reading**.
2. **Committee.** The presiding officer assigns the bill to a **standing committee**, which studies it, may hold hearings, may amend it, and votes. **Most bills die in committee** — this is the biggest filter.
3. **Floor vote — house of origin.** If it survives committee and is placed on the calendar, the full house debates and votes. To pass, a bill needs a **majority of the *total membership* of that house** — that's **at least 91 votes in the 180-member House and at least 29 in the 56-member Senate** (a "constitutional majority," not just a majority of those present).
4. **The other house.** A bill that passes one house goes to the other and repeats the whole process. If the second house changes it, the two versions must be **reconciled** — the originating house agrees to the changes, or a **conference committee** works out one identical text both houses then pass.
5. **The Governor.** Once both houses pass the same bill, it goes to the Governor, who can **sign** it, **veto** it, or **let it become law without a signature** (a bill becomes law if the Governor doesn't act within the constitutional deadline) (Georgia Constitution, 1983, art. V, §II).
6. **The override — two-thirds of *each* house.** If the Governor **vetoes**, the General Assembly can override with a **two-thirds vote of the members of *each* house** — the same supermajority Congress needs (Georgia Constitution, 1983, art. III, §V; Georgia General Assembly, n.d.-c). Because that bar is high, overrides are uncommon.

Remember from Lesson 1: some measures **don't go to the Governor at all.** A **constitutional amendment** proposed by the General Assembly skips the Governor's desk and goes straight to the **voters** for ratification — and because Georgia has **no citizen initiative**, that legislative-then-voter path is the *only* way to amend the constitution.

**Check yourself.** Put these in order: committee, floor vote, introduction, the Governor, the other house. Then state the vote a Georgia governor's veto takes to override (and in which houses).

## Sources
- Georgia General Assembly. (n.d.-c). *About legislation (how an idea becomes law)*. Legis.ga.gov. https://www.legis.ga.gov/legislation/about
- Georgia Constitution. (1983). Art. III, §V (Enactment of laws) & Art. V, §II (Duties and powers of Governor; veto). https://sos.ga.gov/sites/default/files/2022-02/state_constitution.pdf`,
    },

    // ── Section 4: Local government in Georgia ───────────────────────────
    {
      slug: "ga-local-government",
      title: "5 · Local government in Georgia: 159 counties (2nd-most), home rule, NO townships",
      section: "Local Government in Georgia",
      body: `Georgia's local government has a shape worth learning carefully — most notably, Georgia has **159 counties**, the **second-most of any state**, and it has **no townships at all**.

**Counties — 159 of them (second only to Texas).** Georgia is divided into **159 counties** — the **second-most of any U.S. state**, behind only **Texas (254)** (Association County Commissioners of Georgia [ACCG], n.d.-a). Every square foot of the state is inside a county. A county is run by an elected governing authority — a **board of commissioners** (or in some counties a sole commissioner) — and provides services like courts, jails, roads, elections, and public health, especially in **unincorporated** areas that aren't part of any city (Georgia Constitution, 1983, art. IX; ACCG, n.d.-a).

**NO townships.** Unlike states such as Indiana or those in the Northeast, Georgia has **no township layer** of local government. The building blocks of Georgia local government are **counties, cities (municipalities), and consolidated city-county governments** — there is no township in the list (Georgia Department of Community Affairs [DCA], n.d.).

**Home rule.** Georgia's constitution grants counties and cities **"home rule"** — limited authority to govern their own local affairs without asking the legislature for permission on every detail. A county's governing authority may adopt reasonable ordinances and regulations relating to **its property, affairs, and local government** for matters **not already covered by general law** (Georgia Constitution, 1983, art. IX, §II). Cities get their powers through a **charter** (a local constitution) enacted by the **General Assembly** and, when required, ratified by the city's voters (DCA, n.d.).

**Consolidated city-county governments — a Georgia specialty.** Some places have **merged their city and county governments into one**, so a single body governs both. **Columbus-Muscogee** (1971) was **Georgia's first** consolidated city-county government; well-known others include **Athens-Clarke County**, **Augusta-Richmond County**, and **Macon-Bibb County** (ACCG, n.d.-b; DCA, n.d.). ⚠️ **The number varies** — Georgia has roughly a handful of these consolidated governments and the roster (and the count of cities and special districts) changes over time as places consolidate, incorporate, or dissolve; treat any count as approximate and confirm current figures with the Department of Community Affairs (dca.georgia.gov).

The practical payoff: **who provides your service depends on where you live** — it might be your city, your county, or (if you're in a consolidated government) a single merged body. Georgia's answer just never includes a township.

**Check yourself.** How many counties does Georgia have, and where does that rank nationally? What is a "consolidated city-county government," and what common local layer (found in some other states) does Georgia NOT have?

## Sources
- Georgia Constitution. (1983). Art. IX (Counties and Municipal Corporations; home rule). https://sos.ga.gov/sites/default/files/2022-02/state_constitution.pdf
- Association County Commissioners of Georgia. (n.d.-a). *About Georgia's counties (159 counties; second-most, after Texas)*. ACCG.org. https://www.accg.org/about_counties2.php
- Association County Commissioners of Georgia. (n.d.-b). *County and city relations; consolidated governments*. ACCG.org. https://www.accg.org/docs/handbook/County%20and%20City%20Relations.pdf
- Georgia Department of Community Affairs. (n.d.). *All active Georgia governments (counties, cities, consolidated governments)*. DCA.georgia.gov. https://dca.georgia.gov/document/publications/all-active-georgia-governments-type/download`,
    },

    // ── Section 5: Elections & ballot access ─────────────────────────────
    {
      slug: "ga-elections",
      title: "6 · Elections in Georgia: photo ID, early voting, absentee-by-mail, and the majority runoff",
      section: "Elections & Ballot Access",
      body: `Elections are run by each state, so Georgia's rules are specifically Georgia's — and several were changed recently. (Because rules like these are set by law and administered by the state, the authoritative and current source is always the Georgia Secretary of State at **sos.ga.gov**.)

**Photo ID.** Georgia requires **photo identification to vote in person** — a Georgia driver's license, a state ID card, a U.S. passport, or another acceptable photo ID; voters without one can get a **free** state voter ID card (Georgia.gov, n.d.-c; Georgia Secretary of State, n.d.-c). ⚠️ The exact list of acceptable IDs is set by law — confirm the current list at sos.ga.gov before an election.

**In-person early voting.** Georgia offers **in-person advance (early) voting**. For a general election it **begins on the fourth Monday before Election Day** and runs through the **Friday before** it, and includes **required Saturday voting** (with some Sundays optional, at the county's choice) (Georgia.gov, n.d.-d). You can vote at **any early-voting site in your county**, not just your assigned precinct.

**Absentee (mail) voting — no excuse, but SB 202 changed the rules.** Any registered Georgia voter may vote **absentee by mail without giving an excuse**. But **Senate Bill 202 (2021)** made several notable changes (Georgia General Assembly, 2021; Ballotpedia, n.d.-a):
- **ID instead of signature match.** Absentee ballots are now verified using a **driver's-license or state-ID number** (or the last four digits of a Social Security number, plus date of birth) rather than by matching signatures.
- **Drop boxes.** Ballot **drop boxes** are now placed **inside early-voting locations and available during their hours**, and their number is limited — a change from the more widely available drop boxes used in 2020.
- **Application window.** The deadline to **request** an absentee ballot is **11 days before Election Day**.
⚠️ **Recently changed and litigated — confirm before relying on it.** SB 202 is recent, was the subject of lawsuits and national debate, and its provisions can be amended again. Always check the **current** absentee rules and deadlines at sos.ga.gov.

**⚠️ The Georgia gotcha — the MAJORITY-VOTE RUNOFF.** Georgia is a **majority-vote** state: to win most offices, a candidate must receive an **outright majority (more than 50% of the vote)**, not merely the most votes. **If no candidate gets a majority, the top two finishers advance to a RUNOFF election** held after the first vote (Georgia.gov, n.d.-e; Georgia Secretary of State, n.d.-c). This is why Georgia sometimes holds a second, decisive election weeks after Election Day. ⚠️ **The runoff *timing* is set by law and was changed by SB 202** (which shortened the runoff period, especially for federal races) — the exact number of days can differ by race and can be amended, so confirm the current runoff schedule at sos.ga.gov.

**Check yourself.** Name three things about voting in Georgia (think ID at the polls, the early-voting window, and how you can vote by mail). Then explain the majority-vote runoff: what has to happen for a runoff to be triggered?

## Sources
- Georgia Secretary of State. (n.d.-c). *How-to guide: voting (photo ID; advance voting; runoffs)*. SOS.ga.gov. https://sos.ga.gov/how-to-guide/how-guide-voting
- Georgia.gov. (n.d.-c). *Voter identification requirements*. https://georgia.gov/
- Georgia.gov. (n.d.-d). *Vote early in person*. https://georgia.gov/vote-early-person
- Georgia.gov. (n.d.-e). *Vote in runoff elections*. https://georgia.gov/vote-runoff-elections
- Georgia General Assembly. (2021). *Senate Bill 202 (2021–2022 session)*. Legis.ga.gov. https://www.legis.ga.gov/legislation/59827
- Ballotpedia. (n.d.-a). *Election policy in Georgia (summary of SB 202 changes)*. https://ballotpedia.org/Election_policy_in_Georgia`,
    },
    {
      slug: "ga-no-initiative",
      title: "7 · Why Georgia has no ballot initiative — and how change actually happens",
      section: "Elections & Ballot Access",
      body: `Georgia's most important civic difference from "direct-democracy" states deserves its own lesson: **Georgia has no statewide citizen initiative or referendum.** In some states, ordinary citizens can gather signatures to put a proposed law or constitutional amendment directly on the ballot. **You cannot do that in Georgia** (Georgia Secretary of State, n.d.-b; Ballotpedia, n.d.-b).

**So how does the constitution change here?** Only two paths, both routed through elected officials first (Georgia Constitution, 1983, art. X, §I):
1. **The General Assembly proposes it.** A proposed amendment must pass by a **two-thirds vote of the members of *each* house**. It then goes on the **statewide ballot** for the voters to **ratify by a simple majority**. (The Governor does **not** sign it onto the ballot.)
2. **A constitutional convention proposes it.** The General Assembly can also call a convention to propose changes, which voters then ratify.

**What shows up on your Georgia ballot as a "measure," then, is different** from an initiative state. When you see a statewide **constitutional amendment** or a **statewide referendum question** on a Georgia ballot, it got there because the **legislature put it there** — not because citizens petitioned it on. (Local governments can also put **local** questions to their own voters under the constitution, but that's separate from a statewide citizen initiative — which Georgia simply doesn't have.)

**Why this matters civically:** in an initiative state, an organized group can write a law and pass it at the ballot box over the legislature's head. In Georgia, the way to change state law or the constitution is to **elect legislators and persuade them** — because they are the gatekeepers for what reaches the ballot. Knowing this tells you where to put your energy: **contacting and lobbying your legislators, and voting on the amendments they refer**, rather than trying to launch a citizen petition that state law doesn't provide for.

⚠️ **Time-sensitive / varies.** The specific amendments and referendum questions on any given ballot change every cycle. For what's actually on your upcoming ballot, use the Secretary of State's "Proposed Constitutional Amendments" page (sos.ga.gov).

**Check yourself.** True or false: in Georgia, citizens can gather signatures to put a constitutional amendment on the ballot. Then name the two ways an amendment *can* be proposed, and who must ratify it.

## Sources
- Georgia Constitution. (1983). Art. X, §I (Amendments proposed by the General Assembly; ratification by voters). https://sos.ga.gov/sites/default/files/2022-02/state_constitution.pdf
- Georgia Secretary of State. (n.d.-b). *Proposed Georgia constitution amendments*. SOS.ga.gov. https://sos.ga.gov/page/proposed-georgia-constitution-amendments
- Ballotpedia. (n.d.-b). *Laws governing ballot measures in Georgia (no citizen initiative)*. https://ballotpedia.org/Laws_governing_ballot_measures_in_Georgia`,
    },

    // ── Section 6: Get involved where you live ───────────────────────────
    {
      slug: "ga-get-involved",
      title: "8 · Get involved where you live in Georgia",
      section: "Get Involved Where You Live",
      body: `Knowing how Georgia works only pays off when you **show up**. Because Georgia has **no citizen initiative**, the levers that matter most are **elections and your legislators** — so here's where to push.

**Register and vote — and check your registration.** Georgia has **online voter registration** and lets you check your status through the Secretary of State's **My Voter Page**. Bring an acceptable **photo ID** when you vote in person, use the **in-person early-voting** window (it opens the fourth Monday before a general election), or request an **absentee ballot by mail** (remember the ~11-day-before request deadline). Because rules changed under SB 202, verify the current specifics at **sos.ga.gov** (Georgia Secretary of State, n.d.-c; Georgia.gov, n.d.-d).

**Don't forget the runoff.** Georgia's **majority-vote runoff** means an election isn't always over on Election Day. If your race goes to a **runoff** (no candidate got a majority), you'll need to **come back and vote again** — turnout in runoffs is often much lower, so your vote can carry even more weight (Georgia.gov, n.d.-e).

**Vote the whole ballot — including the amendments.** Georgia ballots include **statewide constitutional amendments and referendum questions** the **legislature** referred, plus **nonpartisan judicial races** (Lesson 3) with no party label to guide you. Read up before you fill these in rather than leaving them blank.

**Contact your state legislators — they're the gatekeepers.** You have **one State Representative** and **one State Senator**, on top of your members of Congress. Because Georgia has no citizen initiative, **persuading legislators is the path to changing state law**. Look them up, read bills, and track committee hearings at **legis.ga.gov** — and remember that **most bills live or die in committee**, so a comment or testimony **before** the committee vote carries the most weight (Georgia General Assembly, n.d.-c).

**Show up locally.** Your **county board of commissioners**, your **city council**, and (if you're in one) your **consolidated city-county government** are public and set your local taxes and services. These smaller rooms are where one person's comment moves things most.

**Check yourself.** Name three specific ways to take part in Georgia government, and explain why — given that Georgia has no citizen initiative — contacting your state legislators is an especially important lever here.

## Sources
- Georgia Secretary of State. (n.d.-c). *How-to guide: voting; My Voter Page*. SOS.ga.gov. https://sos.ga.gov/how-to-guide/how-guide-voting
- Georgia.gov. (n.d.-d). *Vote early in person*. https://georgia.gov/vote-early-person
- Georgia.gov. (n.d.-e). *Vote in runoff elections*. https://georgia.gov/vote-runoff-elections
- Georgia General Assembly. (n.d.-c). *About legislation; find your legislator*. Legis.ga.gov. https://www.legis.ga.gov/`,
    },

    // ── Section 7: Practice ──────────────────────────────────────────────
    {
      slug: "ga-practice",
      title: "9 · Practice: Georgia civics fill-in",
      section: "Practice",
      exercise: {
        instructions:
          "Fill in each blank about Georgia state government, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt: "Georgia's current constitution took effect in the year ___.",
            answer: "1983",
            explanation:
              "Georgia's current constitution was ratified by voters on November 2, 1982 and took effect July 1, 1983 — the most recent of Georgia's several constitutions.",
          },
          {
            prompt:
              "TRUE or FALSE: in Georgia, citizens can gather signatures to put a constitutional amendment on the ballot (a 'citizen initiative').",
            answer: "false",
            explanation:
              "False. Georgia has NO citizen initiative. An amendment must be proposed by a two-thirds vote of each house of the General Assembly (or a constitutional convention), then ratified by voters.",
          },
          {
            prompt:
              "Georgia's House has 180 members and its state ___ has 56 members.",
            answer: "senate",
            explanation:
              "The bicameral General Assembly is a 180-member House and a 56-member Senate — 236 seats total, both serving 2-year terms.",
          },
          {
            prompt:
              "Georgia's Lieutenant Governor is elected separately from the Governor and presides over the state ___.",
            answer: "senate",
            explanation:
              "The Lieutenant Governor is elected independently (not on a ticket with the Governor) and serves as President of the Senate.",
          },
          {
            prompt: "Georgia is divided into ___ counties.",
            answer: "159",
            accept: ["one hundred fifty-nine", "one hundred and fifty-nine"],
            explanation:
              "Georgia has 159 counties — the second-most of any state, after Texas (254). Georgia has no townships.",
          },
          {
            prompt:
              "Georgia's Supreme Court justices and Court of Appeals judges are chosen in ___ elections (no party label on the ballot).",
            answer: "nonpartisan",
            accept: ["non-partisan"],
            explanation:
              "Both appellate courts are elected statewide in nonpartisan elections (six-year terms) — no party label appears next to the candidate's name.",
          },
          {
            prompt:
              "In Georgia, if no candidate wins an outright majority (more than 50%), the top two advance to a ___ election.",
            answer: "runoff",
            accept: ["run-off", "run off"],
            explanation:
              "Georgia is a majority-vote state: a candidate must win more than 50%, or the top two go to a runoff — a Georgia hallmark.",
          },
        ],
      },
    },

    // ── Section 8: Final quiz ────────────────────────────────────────────
    {
      slug: "ga-quiz",
      title: "10 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "When did Georgia's current constitution take effect, and how can it be amended?",
            options: [
              "1877 — only by a citizen signature initiative",
              "1983 — amendments are proposed by a two-thirds vote of each house of the General Assembly, then ratified by voters",
              "1945 — amendments are made by the Governor alone",
              "2010 — amendments require approval of the U.S. Congress",
            ],
            correctIndex: 1,
            explanation:
              "Georgia's current constitution took effect in 1983. It has no citizen initiative — amendments are proposed by a two-thirds vote of each house (or a convention) and ratified by a majority of voters.",
            sourceLessonSlug: "ga-constitution",
          },
          {
            prompt: "Which best describes Georgia's Lieutenant Governor?",
            options: [
              "Elected on a joint ticket with the Governor and has no legislative role",
              "Appointed by the Governor",
              "Elected separately from the Governor (can be a different party) and presides over the State Senate",
              "Chosen by the General Assembly",
            ],
            correctIndex: 2,
            explanation:
              "Georgia's executive is plural: the Lieutenant Governor is elected independently, may be from a different party than the Governor, and serves as President of the Senate.",
            sourceLessonSlug: "ga-three-branches",
          },
          {
            prompt: "How large are the two houses of Georgia's General Assembly?",
            options: [
              "100-member House and 50-member Senate",
              "180-member House and 56-member Senate",
              "435-member House and 100-member Senate",
              "A single 236-member unicameral house",
            ],
            correctIndex: 1,
            explanation:
              "The General Assembly is a 180-member House and a 56-member Senate — 236 seats total, both serving two-year terms.",
            sourceLessonSlug: "ga-three-branches",
          },
          {
            prompt: "How are Georgia's Supreme Court justices and Court of Appeals judges selected?",
            options: [
              "Partisan statewide elections with a party label on the ballot",
              "Lifetime appointment by the U.S. President",
              "Nonpartisan statewide elections to six-year terms (with the Governor filling mid-term vacancies)",
              "Chosen by the county boards of commissioners",
            ],
            correctIndex: 2,
            explanation:
              "Both appellate courts (Supreme Court, 9 justices; Court of Appeals, 15 judges) are elected statewide in nonpartisan elections to six-year terms; the Governor fills interim vacancies.",
            sourceLessonSlug: "ga-courts",
          },
          {
            prompt: "To override a Georgia Governor's veto, the General Assembly needs:",
            options: [
              "A simple majority of each house",
              "A two-thirds vote of the members of each house",
              "Approval of the state Supreme Court",
              "A statewide citizen initiative",
            ],
            correctIndex: 1,
            explanation:
              "A veto override requires a two-thirds vote of the members of each house — the same supermajority Congress needs.",
            sourceLessonSlug: "ga-bill-to-law",
          },
          {
            prompt: "Which statement about Georgia local government is correct?",
            options: [
              "Georgia has 159 counties (the second-most of any state) and no townships",
              "Georgia has 254 counties and thousands of townships",
              "Georgia has no counties, only special districts",
              "Every Georgia city must merge with its county",
            ],
            correctIndex: 0,
            explanation:
              "Georgia has 159 counties — second only to Texas (254) — plus cities and some consolidated city-county governments, but NO townships.",
            sourceLessonSlug: "ga-local-government",
          },
          {
            prompt: "What is a 'consolidated city-county government' in Georgia, and which was the first?",
            options: [
              "A township that governs several counties; the first was Athens-Clarke",
              "A merged city and county under one government; Columbus-Muscogee (1971) was Georgia's first",
              "A federal district; the first was Augusta-Richmond",
              "A special district for schools only; the first was Macon-Bibb",
            ],
            correctIndex: 1,
            explanation:
              "A consolidated city-county government merges a city and county into one body. Columbus-Muscogee (1971) was Georgia's first; others include Athens-Clarke, Augusta-Richmond, and Macon-Bibb.",
            sourceLessonSlug: "ga-local-government",
          },
          {
            prompt: "What triggers a runoff election in Georgia?",
            options: [
              "A tie in the state legislature",
              "No candidate winning an outright majority (more than 50%), sending the top two to a second election",
              "A judge ordering a recount",
              "The Governor calling one at will",
            ],
            correctIndex: 1,
            explanation:
              "Georgia is a majority-vote state: if no candidate wins more than 50%, the top two advance to a runoff — a distinctive Georgia feature.",
            sourceLessonSlug: "ga-elections",
          },
          {
            prompt: "Which is an accurate change made by Georgia's Senate Bill 202 (2021)?",
            options: [
              "It created a statewide citizen initiative",
              "Absentee ballots are now verified using an ID number rather than signature match, and drop boxes were moved inside early-voting sites",
              "It abolished in-person early voting",
              "It required the Governor to sign every constitutional amendment",
            ],
            correctIndex: 1,
            explanation:
              "SB 202 (2021) changed absentee verification to a driver's-license/ID number (or SSN digits + DOB) instead of signature matching, limited drop boxes to inside early-voting locations, and changed runoff timing. Confirm current rules at sos.ga.gov.",
            sourceLessonSlug: "ga-elections",
          },
          {
            prompt: "Because Georgia has no citizen initiative, what is the main way to change state law or the constitution?",
            options: [
              "Gather petition signatures to put a law directly on the ballot",
              "Elect and persuade legislators — who are the gatekeepers for what reaches the ballot — and vote on the amendments they refer",
              "Petition the U.S. Supreme Court",
              "Ask the Governor to write new statutes directly",
            ],
            correctIndex: 1,
            explanation:
              "Georgia has no statewide citizen initiative. Amendments and referendum questions reach the ballot only when the General Assembly refers them, so electing and lobbying legislators is the key lever.",
            sourceLessonSlug: "ga-no-initiative",
          },
        ],
      },
    },
  ],
};
