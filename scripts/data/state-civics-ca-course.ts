// Authored "California Civics: How Your State Government Works" — the California
// entry in the per-state Civics layer on Learn.WitUS. It is the state-level
// companion to the general Civics courses (US Civics 101, US Constitution 101,
// State vs Federal Power, and US, State & Local Government: Who Does What): those
// teach the SYSTEM; this teaches ONE state's specific version of it.
//
// Factual and strictly non-partisan (how California's government works, not who
// should win). Every content lesson is cited (APA 7 in-line + a `## Sources`
// bibliography) to CALIFORNIA'S OWN OFFICIAL SOURCES: the California Constitution
// and codes (leginfo.legislature.ca.gov), the Secretary of State / elections
// (sos.ca.gov), the Judicial Branch (courts.ca.gov), the Legislature
// (assembly.ca.gov, senate.ca.gov), plus the nonpartisan Legislative Analyst's
// Office (lao.ca.gov) for process explainers.
//
// Authoritative-values rule (load-bearing): state facts VARY and CHANGE. Where a
// figure is time-sensitive or turnout-dependent, the course SAYS SO and points the
// learner to California's own official source to confirm the current value, rather
// than freezing a number that could go stale. California-specific items flagged
// in-text include:
//   • Initiative/referendum SIGNATURE THRESHOLDS are a PERCENTAGE of the last
//     gubernatorial vote (5% statute, 5% referendum, 8% constitutional amendment),
//     so the RAW signature counts change every cycle — confirm the current numbers
//     at sos.ca.gov, don't memorize a raw number.
//   • The number of AMENDMENTS to the 1879 constitution keeps growing each election.
//   • The number of SPECIAL DISTRICTS is large and shifts (official counts range
//     from ~3,000 to 4,800+ depending on definition) — treat any count as approximate.
//   • Voter registration / vote-by-mail / same-day rules can be changed by law —
//     confirm the current rule at sos.ca.gov.
//   • Judicial RETENTION timing (an initial term can be 4, 8, or 12 years) depends
//     on when in the seat's cycle a justice was appointed — confirm the specific
//     seat at courts.ca.gov.
//
// The course is organized into sections (course modules) and ends with a fill-in
// exercise + a final quiz whose every question links back to the lesson that
// teaches the answer.

import type { AuthoredCourse } from "./authored-course";

export const STATE_CIVICS_CA_COURSE: AuthoredCourse = {
  title: "California Civics: How Your State Government Works",
  description:
    "A practical, non-partisan guide to how the state of California governs itself — and how you take part where you live. You'll learn California's 1879 constitution (one of the longest and most-amended in the nation) and its powerful tools of DIRECT DEMOCRACY — the initiative, referendum, and recall added in the 1911 Progressive era; the three state branches, including a plural executive of separately-elected constitutional officers (the Lieutenant Governor is elected independently, not on a ticket with the Governor); the 120-seat Legislature (an 80-member Assembly and a 40-member Senate); and the courts (a 7-justice Supreme Court, Courts of Appeal, and Superior Courts in all 58 counties), whose appellate justices are appointed and then confirmed by voters in retention elections. You'll learn how a bill becomes a California law — including the Governor's line-item veto and the two-thirds override — and California's local government (58 counties, charter vs. general-law cities, thousands of special districts, and NO townships). Finally you'll learn California's distinctive elections rules — automatic and same-day registration, a ballot mailed to every active voter, the top-two primary, and the citizen initiative — before a lesson on how to get involved. Cited to California's own official sources (leginfo.legislature.ca.gov, sos.ca.gov, courts.ca.gov). Because state facts vary and change, the course flags time-sensitive items — like turnout-dependent initiative signature thresholds and judicial retention timing — and points you to California's own sources to confirm the current rule.",
  lessons: [
    // ── Section 1: The California Constitution ────────────────────────────
    {
      slug: "ca-constitution",
      title: "1 · California's constitution: the 1879 rulebook and direct democracy",
      section: "The California Constitution",
      body: `Every U.S. state has its own constitution — its own top-level rulebook — layered *under* the U.S. Constitution but governing the daily machinery of the state. California is on its **second** constitution, adopted in **1879** (ratified by voters on May 7, 1879), replacing the original 1849 statehood constitution (California Secretary of State, n.d.-a).

A state constitution does for the state what the U.S. Constitution does for the nation: it creates the branches, distributes power, and sets limits the legislature can't cross by ordinary law. Three features of California's document stand out and shape everything else in this course:

- **It is long and heavily amended.** The 1879 document began with about 22 articles and roughly 16,000 words, but decades of amendments have made it **one of the longest state constitutions in the country** (California State Legislature, n.d.). Unlike the U.S. Constitution, it is **easy to amend**, so it changes often.
- **Strong direct democracy — the initiative, referendum, and recall.** California's **Article II** gives ordinary citizens three powerful tools: the **initiative** (propose a new law or constitutional amendment by petition), the **referendum** (approve or reject a law the Legislature passed), and the **recall** (remove an elected official before their term ends). These were added in a **1911** special election, championed by Progressive Governor Hiram Johnson to curb the political machine of the Southern Pacific Railroad (California Secretary of State, n.d.-b; Legislative Analyst's Office, n.d.). This makes California one of the strongest "direct democracy" states in the nation — a theme you'll see again and again.
- **Two main ways to change it (Article XVIII).** The Legislature can propose an amendment or revision by a **two-thirds vote of each house**, or the **voters themselves** can propose an amendment by initiative; either way, a **majority of voters** must approve it (California Constitution, art. XVIII).

⚠️ **Time-sensitive / varies.** The **number of amendments** to the 1879 constitution keeps growing with almost every election — any specific count you read is a snapshot, not a fixed total. When you need the current text or the number of amendments, the authoritative source is the constitution itself at **leginfo.legislature.ca.gov**, not a textbook.

**A note this course keeps returning to:** state facts **vary and change**. Deadlines, signature thresholds, and rules described here are current as of authoring, but the authoritative source is always California's own government (the offices below), not a textbook. When something is time-sensitive, we say so.

**Check yourself.** In what year did California adopt its current constitution, and what are the three direct-democracy tools its Article II gives ordinary citizens?

## Sources
- California Secretary of State. (n.d.-a). *Constitutions collection (1849 and 1878–1879)*. SOS.ca.gov. https://www.sos.ca.gov/archives/collections/constitutions
- California Secretary of State. (n.d.-b). *Recalls*. SOS.ca.gov. https://www.sos.ca.gov/elections/recalls
- California State Legislature. (n.d.). *California's Legislature — the state constitution*. Leginfo.ca.gov. https://www.leginfo.ca.gov/pdf/2017/2117_Cal_Leg2016_Sec03.pdf
- California Constitution, art. XVIII (Amending and Revising the Constitution). https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=CONS&article=XVIII
- Legislative Analyst's Office. (n.d.). *The state's initiative, referendum, and recall processes*. LAO.ca.gov. https://lao.ca.gov/`,
    },

    // ── Section 2: The three state branches ──────────────────────────────
    {
      slug: "ca-three-branches",
      title: "2 · The three branches — and California's plural executive",
      section: "The Three Branches",
      body: `Like the federal government, California splits its power into three branches — but the balance between them is distinctly California's.

**Legislative — the California Legislature.** A two-chamber (bicameral) legislature of **120 total seats** (California Constitution, art. IV, §2):
- **State Assembly — 80 members, 2-year terms.**
- **State Senate — 40 members, 4-year terms** (half the Senate is up every two years).
It writes state law and passes the budget. ⚠️ **Term limits (varies by when a member was first elected):** under **Proposition 28 (2012)**, members first elected **on or after June 6, 2012** may serve a total of **12 years** in the Legislature (Assembly, Senate, or any combination); members elected before that fall under the older 6-years-Assembly / 8-years-Senate limits (California Constitution, art. IV, §2).

**Executive — a PLURAL executive.** The **Governor** is California's chief executive and serves at most **two 4-year terms** (California Constitution, art. V, §2). But California's executive branch is **plural**: several statewide **constitutional officers are elected separately** by the voters, so they answer to the electorate, not to the Governor. The eight statewide constitutional officers are the **Governor, Lieutenant Governor, Attorney General, Secretary of State, State Controller, State Treasurer, Superintendent of Public Instruction, and Insurance Commissioner**; a separately elected **four-member Board of Equalization** rounds out the elected statewide slate (California Secretary of State, n.d.-c; California Constitution, art. V).

⚠️ **A California detail people get wrong:** the **Lieutenant Governor is elected INDEPENDENTLY** — *not* on a joint ticket with the Governor. The two are chosen in separate races and **can be from different parties** (California Secretary of State, n.d.-c). Because these officers answer to voters, executive power in California is **shared**, not concentrated in the Governor alone.

**Judicial — the state courts.** California's court system runs from trial courts up to the **Courts of Appeal** and the **California Supreme Court** (7 justices). How California's *appellate* justices reach the bench is distinctive and covered in the next lesson.

**Check yourself.** Name California's three branches, give the size and term length of each legislative chamber, and explain why the Lieutenant Governor is not simply "the Governor's running mate."

## Sources
- California Constitution, art. IV (Legislative). https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=CONS&article=IV
- California Constitution, art. V (Executive). https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=CONS&article=V
- California Secretary of State. (n.d.-c). *Primary elections in California / voter-nominated (top-two) offices*. SOS.ca.gov. https://www.sos.ca.gov/elections/primary-elections-california`,
    },
    {
      slug: "ca-courts",
      title: "3 · California's courts: appoint, confirm, then retention",
      section: "The Three Branches",
      body: `How does a state pick its judges? States do it very differently — some elect judges in partisan races, some in nonpartisan races, some appoint them. California uses a distinctive **appoint-then-retain** system for its highest courts.

**The three-tier court system (California Constitution, art. VI; Judicial Council of California, n.d.):**
1. **Superior Courts** — the trial courts, one in **each of California's 58 counties**. This is where nearly all cases start.
2. **Courts of Appeal** — the intermediate appellate courts, organized into **six geographic districts**.
3. **The California Supreme Court** — the state's highest court, with **seven justices** (a Chief Justice plus six associate justices).

**How appellate justices reach the bench (Supreme Court + Courts of Appeal):**
1. The **Governor appoints** (nominates) the justice.
2. The **Commission on Judicial Appointments** must confirm the appointment. That commission is the **Chief Justice, the Attorney General, and a senior presiding justice of the Courts of Appeal**.
3. At the next **gubernatorial general election**, **voters** vote yes/no on whether to **retain** the justice — a **retention election** with no opponent. It's a performance check, not a campaign. Full terms are **12 years** (California Constitution, art. VI, §16; Judicial Council of California, n.d.).

⚠️ **Retention timing varies — flag it.** The 12-year term attaches to the **seat**, not the person. A justice appointed partway through a seat's cycle first faces the voters for the **remainder** of that term — so an initial retention term can be **4, 8, or 12 years** depending on when the appointment happened. When you want the schedule for a *specific* justice, the authoritative source is the Judicial Branch (courts.ca.gov), not a general rule.

**Trial judges are different.** **Superior Court judges** serve **6-year terms** and are normally chosen in **nonpartisan county elections** (though the Governor fills mid-term vacancies by appointment). So the "appoint-then-retain" rule you just learned applies to the **appellate** courts, not to every judge on every bench.

**Why this matters civically:** on your ballot you may see Supreme Court and Court of Appeal justices listed for a **yes/no retention vote**, and Superior Court judges in contested races. Knowing which is which means you can vote those lines thoughtfully instead of skipping them.

**Check yourself.** Name California's three court tiers, describe the three steps by which a Supreme Court justice reaches the bench, and explain what a "retention vote" asks you to decide.

## Sources
- California Constitution, art. VI (Judicial). https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=CONS&article=VI
- Judicial Council of California. (n.d.). *Judicial selection: How California chooses its judges and justices; California Courts overview*. Courts.ca.gov. https://newsroom.courts.ca.gov/branch-facts/judicial-selection-how-california-chooses-its-judges-and-justices`,
    },

    // ── Section 3: How a bill becomes a state law ────────────────────────
    {
      slug: "ca-bill-to-law",
      title: "4 · How a bill becomes a California law",
      section: "How a Bill Becomes State Law",
      body: `A bill in the California Legislature travels a path that rhymes with Congress but has its own steps — and a couple of powerful twists in the Governor's hands. Here's the route (California State Senate, n.d.; California Constitution, art. IV, §10).

1. **Introduction.** A legislator introduces a bill in their house (Assembly or Senate); it's assigned a number and read the first time.
2. **Committee.** The bill goes to a **policy committee**, which studies it, holds hearings, may amend it, and votes. **Most bills die in committee** — this is the biggest filter. Bills that spend money also pass through the **Appropriations Committee**.
3. **Floor vote — house of origin.** If it survives committee, the full house debates it (readings) and votes. A regular bill needs a **majority** — **41 votes in the 80-member Assembly, 21 in the 40-member Senate**.
4. **The other house.** A bill that passes one house goes to the other and repeats the whole process. If the second house changes it, the two versions must be **reconciled** (differences concurred in, or resolved in a **conference committee**) so both houses pass **identical** text.
5. **The Governor.** Once both houses pass the same bill, it goes to the Governor, who can **sign** it, **veto** it, or **let it become law without a signature** (a bill becomes law if the Governor doesn't act within the constitutional deadline).
6. **The California twists.** Two features stand out:
   - **A two-thirds override.** If the Governor vetoes, the Legislature can override with a **two-thirds vote of each house** — the same supermajority Congress needs. In practice, California overrides are **extremely rare** (the last successful one was in 1979) (California Constitution, art. IV, §10).
   - **A line-item veto on spending.** Unlike the U.S. President, California's Governor has a **line-item veto**: on an appropriations (spending) bill, the Governor may **reduce or eliminate individual items** while approving the rest (California Constitution, art. IV, §10(e)). This gives the Governor real power over the state budget.

Some measures **skip the Governor entirely.** A constitutional amendment or a change the Legislature refers to the ballot goes to the **voters**, not the Governor — and a **citizen initiative** (Lesson 1) becomes law by a vote of the people without any legislative or gubernatorial signature at all.

**Check yourself.** Put these in order: committee, floor vote, introduction, the Governor, the other house. Then name the two special powers a California governor has over legislation (hint: one is a supermajority the President also faces; the other is about spending and the President does not have it).

## Sources
- California State Senate. (n.d.). *The legislative process (citizen's guide)*. Senate.ca.gov. https://www.senate.ca.gov/citizens-guide/legislative-process
- California Constitution, art. IV, §10 (Passage of bills; veto; line-item veto). https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CONS&sectionNum=SEC.+10.&article=IV`,
    },

    // ── Section 4: Local government in California ─────────────────────────
    {
      slug: "ca-local-government",
      title: "5 · Local government in California: 58 counties, charter cities, NO townships",
      section: "Local Government in California",
      body: `California's local government has a shape worth learning carefully — most notably, California has **no townships at all**, and it draws a sharp line between "charter" and "general-law" local governments.

**Counties — 58 of them.** California is divided into **58 counties**, and every square foot of the state is inside one. A county is run by an elected **Board of Supervisors** (usually five members) and provides services like courts, jails, public health, elections, and social services — especially in **unincorporated** areas that aren't part of any city (California Constitution, art. XI; Legislative Analyst's Office, n.d.-b).

**NO townships.** Unlike states such as Indiana or those in the Northeast, California has **no township layer** of local government. Below the county, the authoritative list of California local governments runs **counties → cities → special districts → school districts** — there is no township in it (Legislative Analyst's Office, n.d.-b).

**Charter vs. general-law — the "home rule" distinction.** This is the key California idea:
- A **general-law** city or county operates under the default rules the **state Legislature** sets in the Government Code.
- A **charter** city or county has adopted its own **charter** (a local constitution approved by its voters), which gives it **"home rule"** — broad authority over its own **municipal affairs**. California's constitution says a charter city "may make and enforce all ordinances and regulations in respect to municipal affairs," subject to its charter (California Constitution, art. XI, §5). Big cities like Los Angeles and San Francisco are charter cities; many smaller cities are general-law.

**Special districts — the invisible layer.** Beyond counties and cities, California has **thousands of special districts** — single-purpose local governments that run one service in a defined area: water, fire protection, sanitation, mosquito/vector control, parks, transit, and (as separate governments) **school districts**. They're easy to overlook but they levy taxes/fees and hold elections. ⚠️ **The number varies** — official figures range from roughly **3,000 to more than 4,800** depending on how a "special district" is defined, and districts form and dissolve. Treat any count as approximate and confirm current figures with the State Controller (California State Controller's Office, n.d.).

The practical payoff: **who provides your service depends on where you live** — it might be your city, your county, a special district, or a combination. California's answer just never includes a township.

**Check yourself.** How many counties does California have, what is the difference between a charter city and a general-law city, and what common local layer (found in some other states) does California NOT have?

## Sources
- California Constitution, art. XI (Local Government). https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CONS&sectionNum=SEC.+5.&article=XI
- Legislative Analyst's Office. (n.d.-b). *California's governmental structure (state and local government)*. LAO.ca.gov. https://lao.ca.gov/1995/010195_calguide/cgslf1.html
- California State Controller's Office. (n.d.). *Special districts financial data*. SCO.ca.gov. https://www.sco.ca.gov/ard_local_districts.html`,
    },

    // ── Section 5: Elections & ballot access ─────────────────────────────
    {
      slug: "ca-elections",
      title: "6 · Elections in California: automatic & same-day registration, mail ballots for all",
      section: "Elections & Ballot Access",
      body: `Elections are run by each state, so California's rules are specifically California's — and several of them make voting notably **accessible**. (Because rules like these are set by law and change, the authoritative and current source is always the California Secretary of State at **sos.ca.gov**.)

**Easy registration — online, automatic, and same-day.** California offers **online voter registration**, and through the DMV's **"California New Motor Voter"** program eligible Californians are **automatically registered** (or their registration updated) when they complete a DMV transaction, **unless they opt out**. And if you miss the regular registration deadline (about **15 days** before an election), California's **same-day registration** — called **Conditional Voter Registration** in state law — lets you register **and** cast a ballot during the 14 days up to and including **Election Day**, at a county elections office, vote center, or satellite location (California Secretary of State, n.d.-d).

**A ballot mailed to every active voter.** California mails a **vote-by-mail ballot to every active registered voter** — you don't have to request one or give an excuse. This was made **permanent by Assembly Bill 37 (2021)**. You can return the ballot by mail, at a drop box, or at a vote center, or you can still vote in person (California Secretary of State, n.d.-e). ⚠️ This universal-mail-ballot rule is set by state law and could be changed — confirm the current rule at sos.ca.gov.

**The top-two primary.** Since **Proposition 14 (2010)** (effective 2011), California uses a **top-two (voter-nominated) primary** for state and congressional offices: **all candidates appear on one primary ballot regardless of party**, every voter gets the same ballot, and the **top two vote-getters advance to the general election — even if they're from the same party** (California Secretary of State, n.d.-c). Note the exceptions: the **U.S. President** and **party-committee** contests still use the older party-primary model, and truly nonpartisan local offices are separate.

**The citizen initiative — direct lawmaking.** California's signature tool (Lesson 1) lets citizens put a measure directly on the ballot by gathering petition signatures. The number of signatures required is a **percentage of the total votes cast for Governor at the last gubernatorial election** (California Secretary of State, n.d.-f; California Constitution, art. II, §8):
- **Initiative statute:** at least **5%**.
- **Initiative constitutional amendment:** at least **8%**.
- **Referendum:** at least **5%**.

⚠️ **Signature thresholds VARY every cycle — do not memorize a raw number.** The *percentage* is fixed in the constitution, but because it's a percentage of the **last governor's-race turnout**, the actual **raw signature count changes after every gubernatorial election**. Always get the **current** number from the Secretary of State (sos.ca.gov) rather than trusting a fixed figure.

**Check yourself.** Name three ways California makes registering or voting easier (think DMV, deadline safety net, and how ballots reach you); explain what "top two" means; and explain why California's initiative signature requirement is a *percentage* rather than a fixed number.

## Sources
- California Secretary of State. (n.d.-d). *Voter registration (online, automatic "Motor Voter," and conditional/same-day registration)*. SOS.ca.gov. https://www.sos.ca.gov/elections/voter-registration
- California Secretary of State. (n.d.-e). *Vote by mail*. SOS.ca.gov. https://www.sos.ca.gov/elections/voter-registration/vote-mail
- California Secretary of State. (n.d.-c). *Primary elections in California (top-two, voter-nominated)*. SOS.ca.gov. https://www.sos.ca.gov/elections/primary-elections-california
- California Secretary of State. (n.d.-f). *How to qualify an initiative (signature requirements)*. SOS.ca.gov. https://www.sos.ca.gov/elections/ballot-measures/how-qualify-initiative
- California Constitution, art. II, §8 (Initiative). https://leginfo.legislature.ca.gov/faces/codes_displaySection.xhtml?lawCode=CONS&sectionNum=SEC.+8.&article=II`,
    },
    {
      slug: "ca-direct-democracy",
      title: "7 · Direct democracy in depth: initiative, referendum, recall",
      section: "Elections & Ballot Access",
      body: `California's most distinctive civic feature deserves its own lesson: the **three tools of direct democracy** in **Article II** of the constitution. Together they let voters make law, unmake law, and remove officials — powers that many states don't have, and that California uses heavily (Legislative Analyst's Office, n.d.; California Secretary of State, n.d.-b).

**1) The initiative — voters propose and pass a law.** Citizens draft a measure, get a title and summary from the Attorney General, gather the required petition signatures (a percentage of the last governor's-race vote — Lesson 6), and if it qualifies it goes on the ballot. If a majority approves, it becomes law **without** the Legislature or Governor. Two flavors: an **initiative statute** (5% threshold) or an **initiative constitutional amendment** (8% threshold).

**2) The referendum — voters veto a law the Legislature passed.** A referendum lets citizens **block a statute** the Legislature already enacted, by qualifying a petition (5% threshold) to put that law before the voters. If voters reject it, the law doesn't take effect. (There are limits — for example, urgency measures and appropriations for state expenses are generally not subject to referendum.)

**3) The recall — voters remove an elected official early.** The recall lets voters try to **remove an elected official before their term ends**, including a Governor or even a state Supreme Court justice. Petition-signature requirements and timelines vary by the office (California Secretary of State, n.d.-b). California's 1911 recall power is why the state has held nationally-watched gubernatorial recall elections.

⚠️ **Time-sensitive / varies.** Signature thresholds (turnout-dependent), deadlines, and recall procedures are set by law and change. Confirm the **current** rules and the exact numbers with the Secretary of State (sos.ca.gov) before relying on any specific figure.

**Why a whole lesson on this?** Because direct democracy is **the** thing that makes California civics different. In many states, "changing the law" means only electing legislators and lobbying them. In California, an organized group of citizens can **write a law and pass it at the ballot box**, **repeal one the Legislature passed**, or **remove an official** — so understanding these tools is essential to taking part here.

**Check yourself.** Match each tool to what it does: which one lets voters PASS a new law, which lets voters BLOCK a law the Legislature passed, and which lets voters REMOVE an official early?

## Sources
- California Secretary of State. (n.d.-b). *Recalls; ballot measures (initiatives and referenda)*. SOS.ca.gov. https://www.sos.ca.gov/elections/recalls
- California Constitution, art. II (Voting, Initiative and Referendum, and Recall). https://leginfo.legislature.ca.gov/faces/codes_displayText.xhtml?lawCode=CONS&article=II
- Legislative Analyst's Office. (n.d.). *California's initiative, referendum, and recall processes*. LAO.ca.gov. https://lao.ca.gov/`,
    },

    // ── Section 6: Get involved where you live ───────────────────────────
    {
      slug: "ca-get-involved",
      title: "8 · Get involved where you live in California",
      section: "Get Involved Where You Live",
      body: `Knowing how California works only pays off when you **show up**. Because California pairs a full legislature with unusually strong tools of direct democracy, an engaged Californian has more levers than in most states.

**Register and vote — use California's on-ramps.** You can register **online** at the Secretary of State's site, and you're likely already registered through the **DMV Motor Voter** program. If you missed the ~15-day deadline, use **same-day (conditional) registration** through Election Day. Watch for the **vote-by-mail ballot** that's mailed to every active voter, and return it by mail, drop box, or in person (California Secretary of State, n.d.-d).

**Vote the whole ballot — including the measures and retention votes.** California ballots are long: candidates chosen by the **top-two** rule, statewide and local **ballot measures**, and **yes/no retention votes** for appellate justices (Lesson 3). Read up before you fill these in rather than leaving them blank — the ballot measures in particular can change state law directly.

**Contact your state legislators.** You have **one Assemblymember** and **one State Senator**, on top of your members of Congress. Look them up, read bills, and track committee hearings at **assembly.ca.gov** and **senate.ca.gov** — and remember that **most bills live or die in committee**, so a comment or testimony **before** the committee vote carries the most weight (California State Senate, n.d.).

**Use (or watch) direct democracy.** California's initiative, referendum, and recall (Lesson 7) mean citizens can propose or block laws and recall officials. Even if you never run a petition drive yourself, understanding these tools helps you evaluate the measures already on your ballot. Start at the Secretary of State's ballot-measure pages (California Secretary of State, n.d.-b).

**Show up locally.** Your **county Board of Supervisors**, your **city council**, and your **special-district** boards (water, fire, school, parks) are public and set your local taxes and services. These smaller rooms are where one person's comment moves things most.

**Check yourself.** Name three specific ways to get involved in California government, and explain why California's direct-democracy tools give citizens here more ways to change the law than citizens in many other states.

## Sources
- California Secretary of State. (n.d.-d). *Voter registration, vote by mail, and elections*. SOS.ca.gov. https://www.sos.ca.gov/elections
- California Secretary of State. (n.d.-b). *Ballot measures and recalls*. SOS.ca.gov. https://www.sos.ca.gov/elections/ballot-measures
- California State Senate. (n.d.). *Find your legislator / the legislative process*. Senate.ca.gov. https://www.senate.ca.gov/`,
    },

    // ── Section 7: Practice ──────────────────────────────────────────────
    {
      slug: "ca-practice",
      title: "9 · Practice: California civics fill-in",
      section: "Practice",
      exercise: {
        instructions:
          "Fill in each blank about California state government, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt: "California's current constitution was adopted in the year ___.",
            answer: "1879",
            explanation:
              "California's second and current constitution dates to 1879, replacing the 1849 statehood constitution.",
          },
          {
            prompt:
              "The three tools of direct democracy in California are the initiative, the referendum, and the ___.",
            answer: "recall",
            explanation:
              "Article II gives citizens the initiative (propose a law), the referendum (reject a law), and the recall (remove an official) — all added in 1911.",
          },
          {
            prompt:
              "California's Assembly has 80 members and its state ___ has 40 members.",
            answer: "senate",
            explanation:
              "The bicameral Legislature is an 80-member Assembly (2-year terms) and a 40-member Senate (4-year terms) — 120 seats total.",
          },
          {
            prompt: "California is divided into ___ counties.",
            answer: "58",
            accept: ["fifty-eight", "fifty eight"],
            explanation:
              "California has 58 counties, each with a Superior Court and an elected Board of Supervisors. California has no townships.",
          },
          {
            prompt:
              "A city that adopts its own charter for 'home rule' over municipal affairs is called a ___ city (as opposed to a general-law city).",
            answer: "charter",
            explanation:
              "Charter cities (e.g., Los Angeles, San Francisco) have home rule over municipal affairs under Article XI; general-law cities follow the Legislature's default Government Code.",
          },
          {
            prompt:
              "California uses a top-___ primary: all candidates share one ballot and the two highest vote-getters advance, regardless of party.",
            answer: "two",
            accept: ["2"],
            explanation:
              "The top-two (voter-nominated) primary came from Proposition 14 (2010) and applies to state and congressional offices.",
          },
          {
            prompt:
              "TRUE or FALSE: the number of signatures to qualify a California initiative is a fixed number set in the constitution and never changes.",
            answer: "false",
            explanation:
              "False. It is a PERCENTAGE of the last gubernatorial vote (5% statute, 8% constitutional amendment), so the raw count changes every cycle — check sos.ca.gov.",
          },
        ],
      },
    },

    // ── Section 8: Final quiz ────────────────────────────────────────────
    {
      slug: "ca-quiz",
      title: "10 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "When was California's current (second) constitution adopted, and what is notable about it?",
            options: [
              "1849 — it is one of the shortest state constitutions",
              "1879 — it is long, heavily amended, and grants strong direct democracy",
              "1911 — it abolished the state legislature",
              "1966 — it created a unicameral legislature",
            ],
            correctIndex: 1,
            explanation:
              "California's 1879 constitution (its second) is one of the longest and most-amended in the nation and, via Article II, grants strong direct democracy.",
            sourceLessonSlug: "ca-constitution",
          },
          {
            prompt: "Which best describes California's Lieutenant Governor?",
            options: [
              "Elected on a joint ticket with the Governor",
              "Appointed by the Governor",
              "Elected separately from the Governor and can be from a different party",
              "Chosen by the Legislature",
            ],
            correctIndex: 2,
            explanation:
              "California's executive is plural: the Lieutenant Governor is elected independently, not on a ticket, and may be from a different party than the Governor.",
            sourceLessonSlug: "ca-three-branches",
          },
          {
            prompt: "How large are the two houses of the California Legislature?",
            options: [
              "100-member House and 50-member Senate",
              "80-member Assembly and 40-member Senate",
              "435-member House and 100-member Senate",
              "A single 120-member unicameral house",
            ],
            correctIndex: 1,
            explanation:
              "The California Legislature is an 80-member Assembly (2-year terms) and a 40-member Senate (4-year terms) — 120 seats total.",
            sourceLessonSlug: "ca-three-branches",
          },
          {
            prompt: "How does a California Supreme Court or Court of Appeal justice reach the bench?",
            options: [
              "Partisan statewide election",
              "Lifetime appointment by the U.S. President",
              "Governor appoints, a commission confirms, then voters decide a yes/no retention vote",
              "Chosen by the county Board of Supervisors",
            ],
            correctIndex: 2,
            explanation:
              "Appellate justices are appointed by the Governor, confirmed by the Commission on Judicial Appointments, and then face a yes/no retention vote (12-year terms).",
            sourceLessonSlug: "ca-courts",
          },
          {
            prompt: "What power does California's Governor have over the state BUDGET that the U.S. President lacks?",
            options: [
              "The power to raise taxes without a vote",
              "A line-item veto to reduce or eliminate individual appropriation items",
              "The power to dissolve the Legislature",
              "The power to appoint all legislators",
            ],
            correctIndex: 1,
            explanation:
              "California's Governor has a line-item veto (Art. IV, §10(e)) — the ability to reduce or eliminate individual spending items while approving the rest of a bill.",
            sourceLessonSlug: "ca-bill-to-law",
          },
          {
            prompt: "To override a California Governor's veto, the Legislature needs:",
            options: [
              "A simple majority of each house",
              "A two-thirds vote of each house (rare in practice)",
              "Approval of the state Supreme Court",
              "A statewide referendum",
            ],
            correctIndex: 1,
            explanation:
              "A veto override requires a two-thirds vote of each house — the same supermajority Congress needs — and in California it is extremely rare.",
            sourceLessonSlug: "ca-bill-to-law",
          },
          {
            prompt: "Which statement about California local government is correct?",
            options: [
              "California has 58 counties and no townships",
              "California has 92 counties and thousands of townships",
              "California has no counties, only special districts",
              "Every California city must be a charter city",
            ],
            correctIndex: 0,
            explanation:
              "California has 58 counties, cities (charter or general-law), and thousands of special districts — but NO townships.",
            sourceLessonSlug: "ca-local-government",
          },
          {
            prompt: "What does California's 'top-two' primary do?",
            options: [
              "Sends the top candidate from each party to the general election",
              "Lets only registered party members vote",
              "Advances the two highest vote-getters overall, regardless of party",
              "Chooses judges by retention vote",
            ],
            correctIndex: 2,
            explanation:
              "Under the top-two (voter-nominated) primary from Proposition 14 (2010), the two highest vote-getters advance — even if they share a party.",
            sourceLessonSlug: "ca-elections",
          },
          {
            prompt: "Why does the number of signatures to qualify a California initiative change over time?",
            options: [
              "The Legislature resets it every year at random",
              "It is a percentage of the votes cast for Governor at the last gubernatorial election",
              "It is tied to the U.S. Census only",
              "It never changes — it is a fixed constitutional number",
            ],
            correctIndex: 1,
            explanation:
              "The requirement is a percentage of the last governor's-race turnout (5% statute, 8% constitutional amendment), so the raw count shifts each cycle — check sos.ca.gov.",
            sourceLessonSlug: "ca-elections",
          },
          {
            prompt: "Which set correctly matches California's three direct-democracy tools?",
            options: [
              "Initiative = remove an official; Referendum = pass a law; Recall = reject a law",
              "Initiative = pass a law; Referendum = reject a law the Legislature passed; Recall = remove an official early",
              "Initiative = appoint a judge; Referendum = set the budget; Recall = call an election",
              "All three simply mean 'vote in an election'",
            ],
            correctIndex: 1,
            explanation:
              "Initiative lets voters pass a law, referendum lets voters reject a law the Legislature passed, and recall lets voters remove an elected official before the term ends.",
            sourceLessonSlug: "ca-direct-democracy",
          },
        ],
      },
    },
  ],
};
