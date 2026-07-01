// Authored "Arizona Civics: How Your State Government Works" — the Arizona entry in
// the per-state Civics layer on Learn.WitUS. State-level companion to the general
// Civics courses (US Civics 101, US Constitution 101, State vs Federal Power, and US,
// State & Local Government: Who Does What): those teach the SYSTEM; this teaches
// Arizona's specific version of it.
//
// Factual and strictly non-partisan. Every content lesson is cited (APA 7 in-line +
// a `## Sources` bibliography) to ARIZONA'S OWN OFFICIAL SOURCES: the Legislature
// (azleg.gov), the Secretary of State / elections (azsos.gov), the Judicial Branch
// (azcourts.gov), and the Citizens Clean Elections Commission's civic-education
// materials (azcleanelections.gov), plus the Secretary of State's official 1998
// ballot pamphlet for Proposition 105 (the Voter Protection Act).
//
// Authoritative-values rule (load-bearing): state facts VARY and CHANGE. The single
// most time-sensitive item in this course — flagged PROMINENTLY in its own lesson —
// is the CREATION of a Lieutenant Governor. Arizona historically had NO Lieutenant
// Governor (the Secretary of State was first in line of succession); Proposition 131
// (2022) creates a Lt. Governor BEGINNING WITH THE 2026 ELECTION CYCLE. Because this
// course is authored in mid-2026, that transition is IN PROGRESS: the course presents
// it as a change underway and tells learners to confirm the CURRENT status with
// azsos.gov / azleg.gov rather than asserting a fixed answer.
//
// Organized into sections (course modules), ending with a fill-in exercise + a final
// quiz whose every question links back to the lesson that teaches the answer.

import type { AuthoredCourse } from "./authored-course";

export const STATE_CIVICS_AZ_COURSE: AuthoredCourse = {
  title: "Arizona Civics: How Your State Government Works",
  description:
    "A practical, non-partisan guide to how the state of Arizona governs itself — and how you take part where you live. You'll learn Arizona's constitution (drafted 1910, statehood February 14, 1912) and its unusually strong direct democracy — citizen initiative, referendum, and recall built right in; the three state branches; how a bill becomes an Arizona law in a legislature of 30 senators and 60 representatives elected from 30 shared districts; local government across Arizona's 15 counties (Arizona has NO townships); and Arizona's elections — the Active Early Voting List, merit-selected judges in large counties, and the Voter Protection Act (Prop 105, 1998) that shields voter-passed initiatives from the legislature. It closes on how to get involved where you live. A prominent, flagged lesson covers a change IN PROGRESS: Arizona historically had no Lieutenant Governor, but Proposition 131 (2022) creates one beginning with the 2026 election cycle — so the course tells you to confirm the current status at azsos.gov / azleg.gov. Cited to Arizona's own official sources (azleg.gov, azsos.gov, azcourts.gov).",
  lessons: [
    // ── Section 1: The Arizona Constitution ──────────────────────────────
    {
      slug: "az-constitution",
      title: "1 · Arizona's constitution and its strong direct democracy",
      section: "The Arizona Constitution",
      body: `Arizona is a comparatively **young** state with a constitution built around a big idea: **put real lawmaking power directly in the hands of voters.** The constitution was drafted in **1910**, and Arizona became the **48th state on February 14, 1912** (Arizona Secretary of State, n.d.; Citizens Clean Elections Commission, n.d.).

The framers of Arizona's constitution were shaped by the **Progressive Era**, which distrusted powerful legislatures and political machines. So they wrote **direct democracy tools directly into the constitution** — and Arizona uses them heavily to this day (Arizona Secretary of State, n.d.):

- **Initiative** — citizens can gather signatures to put a **new law or even a constitutional amendment** directly on the ballot, bypassing the legislature entirely.
- **Referendum** — voters can **veto** a law the legislature passed by referring it to the ballot; the legislature can also refer measures to voters.
- **Recall** — voters can petition to **remove an elected official** before their term ends via a special election.

This is the through-line of Arizona civics: in a lot of states, "the government" means elected officials. **In Arizona, the voters themselves are a lawmaking body.** That single design choice explains many of Arizona's distinctive features — including the Voter Protection Act you'll meet later, which was itself passed *by* initiative to protect *other* initiatives.

**A note this course keeps returning to:** state facts **vary and change**, and Arizona — precisely because voters can amend the constitution by initiative — changes its rules relatively often. Everything here is current as of authoring, but Arizona's own government (azleg.gov, azsos.gov, azcourts.gov) is the authoritative source. When something is time-sensitive or mid-transition, we say so — loudly (see the Lieutenant Governor lesson).

**Check yourself.** When did Arizona become a state, and name the three direct-democracy tools its constitution gives voters.

## Sources
- Arizona Secretary of State. (n.d.). *Arizona Constitution and direct democracy (initiative, referendum, recall)*. AZSOS.gov. https://azsos.gov/
- Citizens Clean Elections Commission. (n.d.). *How Arizona government works*. AZCleanElections.gov. https://www.azcleanelections.gov/how-government-works`,
    },

    // ── Section 2: The three state branches ──────────────────────────────
    {
      slug: "az-three-branches",
      title: "2 · The three branches of Arizona government",
      section: "The Three Branches",
      body: `Arizona divides power into the familiar three branches, with a few Arizona-specific twists.

**Legislative — the Arizona Legislature.** A bicameral body with an unusual district structure (Arizona State Legislature, n.d.; Citizens Clean Elections Commission, n.d.):
- **Senate — 30 senators.**
- **House of Representatives — 60 representatives.**
- Arizona has **30 legislative districts**, and here's the twist: **each district elects ONE senator and TWO representatives.** So your senator and your two House members all represent the *same* district — a design you don't see in most states.
- Members serve **2-year terms**, subject to an **8-year (four consecutive 2-year terms) limit per chamber** (they can switch chambers, or return after a break).

**Executive — the Governor and separately elected officers.** The Governor is the chief executive, but several statewide executive officers are elected on their own (such as the **Secretary of State**, **Attorney General**, **Treasurer**, and **Superintendent of Public Instruction**). ⚠️ **Note — the executive line-up is changing:** Arizona historically had **no Lieutenant Governor**, and this is being changed by Proposition 131 (2022). Because that's the most time-sensitive fact in the course, it gets its **own lesson** — see "The Lieutenant Governor: a change in progress."

**Judicial — the Arizona courts.** Trial courts up through the **Court of Appeals** and the **Arizona Supreme Court**. How Arizona picks its judges **depends on county size** — a genuinely distinctive rule covered in the next lesson (Arizona Judicial Branch, n.d.).

**Veto override — a two-thirds rule.** Unlike Indiana's weak governor, **Arizona's legislature needs a two-thirds vote of each chamber to override the governor's veto** (Arizona State Legislature, n.d.). That makes Arizona's governor comparatively **strong** on vetoes — a useful contrast to keep in mind if you study more than one state.

**Check yourself.** How many senators and representatives does Arizona have, what's unusual about how its 30 districts are represented, and what vote does it take to override the Arizona governor's veto?

## Sources
- Arizona State Legislature. (n.d.). *About the Arizona Legislature*. AZLeg.gov. https://www.azleg.gov/
- Citizens Clean Elections Commission. (n.d.). *State senators & representatives*. AZCleanElections.gov. https://www.azcleanelections.gov/how-government-works/arizona-state-senators-and-representatives
- Arizona Judicial Branch. (n.d.). *About the Arizona courts*. AZCourts.gov. https://www.azcourts.gov/`,
    },
    {
      slug: "az-courts",
      title: "3 · Arizona's courts: merit selection depends on county size",
      section: "The Three Branches",
      body: `Arizona's way of choosing judges is distinctive because it is **not the same everywhere in the state** — it depends on how **big the county** is (Arizona Judicial Branch, n.d.).

**Merit selection in large counties.** For the **Arizona Supreme Court**, the **Court of Appeals**, and the **trial courts (Superior Court) in the state's most populous counties** (counties above a population threshold — historically **more than 250,000 residents**), Arizona uses **merit selection**:
1. A nonpartisan **commission** screens applicants and sends the Governor a short list.
2. The **Governor appoints** a judge from that list.
3. The judge later faces a **yes/no retention vote** by voters.
This is meant to insulate the busiest, highest-stakes courts from campaign politics.

**Elected judges in small counties.** In Arizona's **less-populous counties** (below that threshold), Superior Court judges are chosen the old-fashioned way — by **popular election**. So whether *your* trial judge was appointed-then-retained or elected outright depends on **which county you live in**.

⚠️ **Varies / confirm the current threshold.** The exact population cutoff that separates "merit-selection" counties from "elected-judge" counties is set by law and can be adjusted, and a county can cross the threshold as it grows. Treat "≈250,000" as an authored-time figure and confirm the current rule and which counties it covers at **azcourts.gov**.

**Why this matters civically:** on an Arizona ballot you might see judges up for a **yes/no retention vote** (in a large county) or judges in a **contested election** (in a small county) — and it's the *same state*. Knowing which system your county uses tells you what kind of decision your ballot is actually asking you to make.

**Check yourself.** Explain what determines whether an Arizona Superior Court judge is chosen by merit selection or by election, and why the same state can show you two different kinds of judicial races.

## Sources
- Arizona Judicial Branch. (n.d.). *Judicial selection / merit selection*. AZCourts.gov. https://www.azcourts.gov/
- Citizens Clean Elections Commission. (n.d.). *How Arizona courts work*. AZCleanElections.gov. https://www.azcleanelections.gov/how-government-works`,
    },

    // ── Section 3: How a bill becomes a state law ────────────────────────
    {
      slug: "az-bill-to-law",
      title: "4 · How a bill becomes an Arizona law (and how voters do it directly)",
      section: "How a Bill Becomes State Law",
      body: `Arizona has **two** ways a new law can be made: the ordinary legislative route, and the direct-democracy route where **voters themselves pass the law.** Both matter here.

**Route 1 — through the Legislature** (Arizona State Legislature, n.d.):
1. **Introduction.** A legislator introduces a bill in the House or Senate.
2. **Committee.** The bill goes to committee for hearings, amendments, and a vote. Most bills die here.
3. **Caucus and floor vote (Committee of the Whole).** Surviving bills are debated by the full chamber, may be amended, and voted on.
4. **The other chamber.** It repeats the process in the second chamber; differences are reconciled so both chambers pass **identical** text.
5. **The Governor.** The Governor may **sign**, **allow it to become law without signature**, or **veto**.
6. **Override.** The Legislature can override a veto only with a **two-thirds** vote of each chamber (Arizona's governor is comparatively strong on vetoes).

**Route 2 — straight to the voters (initiative).** Because Arizona's constitution has the **initiative**, citizens can **skip the Legislature**: gather enough valid signatures, and a proposed law — or even a constitutional amendment — goes **directly on the ballot** for voters to enact. A statute or amendment approved by voters this way becomes law **without** the Legislature's or Governor's signature (Arizona Secretary of State, n.d.).

⚠️ **Signature requirements vary — check the current numbers.** The number of valid signatures needed (a percentage of the votes cast for governor in the last election, higher for a constitutional amendment than for a statute) and the filing deadlines are set by law and change with each election cycle. Don't rely on a fixed number — confirm the current thresholds at **azsos.gov**.

**Why Route 2 is a big deal:** it means an idea the Legislature refuses to pass can still become law if voters want it — and, as the next section shows, once voters pass it, the Legislature can't easily undo it.

**Check yourself.** Describe the two different ways a new law can be made in Arizona, and explain why the initiative route makes Arizona's voters a kind of "third lawmaker."

## Sources
- Arizona State Legislature. (n.d.). *How a bill becomes law / legislative process*. AZLeg.gov. https://www.azleg.gov/
- Arizona Secretary of State. (n.d.). *Initiative, referendum, and recall guide*. AZSOS.gov. https://azsos.gov/`,
    },

    // ── Section 4: Local government in Arizona ───────────────────────────
    {
      slug: "az-local-government",
      title: "5 · Local government in Arizona: 15 counties, no townships",
      section: "Local Government in Arizona",
      body: `Arizona's local map is simpler than many states' — it has relatively **few counties** and **no township layer at all**.

**Counties — 15 of them.** Arizona is divided into just **15 counties** (compared with dozens in many Eastern and Midwestern states). Each county is governed by an elected **Board of Supervisors**, which sets the county budget, runs county services, and oversees county departments. Other county officers — like the **Sheriff**, **County Attorney**, **Assessor**, **Recorder**, and **Treasurer** — are typically elected too (Arizona Secretary of State, n.d.; Citizens Clean Elections Commission, n.d.).

**No townships.** Here's a clean distinguishing fact: **Arizona has no townships.** In some states (like Indiana) a township layer sits between the county and the city; **Arizona doesn't use that layer at all.** Below the county, local government is **cities and towns** (municipalities).

**Cities and towns.** Incorporated **municipalities** — cities and towns — run local services where people live densely: police, local streets, zoning, parks, water in many places. Many Arizona cities use a **council–manager** form (an elected council sets policy; a professional city manager runs operations).

**A Western wrinkle — special districts, including water.** Because Arizona is arid, **water** is a big deal, and special districts (including irrigation and water districts) can be important local governments. The *kinds* of special districts and who runs them **vary**, so — as always — check who actually provides a given service where you live.

The practical upshot: in Arizona, your local services come from your **county** and your **city or town**, not from a township. That two-layer simplicity is itself a defining feature of Arizona local government.

**Check yourself.** How many counties does Arizona have, what elected body runs a county, and what local layer — common in some other states — does Arizona NOT have?

## Sources
- Arizona Secretary of State. (n.d.). *Arizona counties and local government*. AZSOS.gov. https://azsos.gov/
- Citizens Clean Elections Commission. (n.d.). *Local government in Arizona*. AZCleanElections.gov. https://www.azcleanelections.gov/how-government-works`,
    },

    // ── Section 5: Elections & ballot access ─────────────────────────────
    {
      slug: "az-elections",
      title: "6 · Elections in Arizona: early voting and the Voter Protection Act",
      section: "Elections & Ballot Access",
      body: `Arizona runs its own elections, and two features stand out: a **strong early-voting system** and a constitutional shield that makes voter-passed initiatives **very hard for the Legislature to undo.** (Because election rules change, the current source is always the Arizona Secretary of State — azsos.gov.)

**Early voting and the Active Early Voting List.** Arizona has long made **early voting** — including voting by mail — widely available. Voters can join the **Active Early Voting List (AEVL)**, which automatically sends a ballot by mail for each election so the voter doesn't have to request one every time. This is a big reason a large share of Arizonans vote early rather than in person on Election Day (Arizona Secretary of State, n.d.).

⚠️ **Confirm the current rules.** The exact registration deadline, ID requirements, AEVL sign-up and retention rules, and mail-ballot deadlines are set by state law and can change (Arizona has amended election rules in recent cycles). Verify the current details at **azsos.gov** before relying on a specific one.

**The Voter Protection Act (Proposition 105, 1998) — Arizona's most distinctive election rule.** This is the payoff of Arizona's strong direct democracy. Under the **Voter Protection Act**, once voters approve an initiative or referendum (Arizona Secretary of State, 1998):
- **The Legislature cannot repeal it.** A law the people passed can't simply be undone by the Legislature.
- **The Legislature can only *amend* it under strict conditions:** any change must be approved by a **three-fourths (3/4) supermajority of each chamber**, *and* the change must **"further the purpose"** of the original measure.

In plain terms: **in Arizona, a law the voters pass is protected from the very legislators the voters bypassed to pass it.** This is why Arizona initiatives "stick" in a way they might not elsewhere — and it's a direct expression of the Progressive-Era distrust baked into the 1910 constitution.

**Check yourself.** What is the Active Early Voting List, and under the Voter Protection Act, what are the TWO conditions the Legislature must meet to amend a voter-approved initiative?

## Sources
- Arizona Secretary of State. (n.d.). *Voting in Arizona — early voting and the Active Early Voting List*. AZSOS.gov. https://azsos.gov/
- Arizona Secretary of State. (1998). *Proposition 105 (Voter Protection Act) — official ballot pamphlet*. AZSOS.gov. https://apps.azsos.gov/election/1998/Info/PubPamphlet/prop105.html`,
    },
    {
      slug: "az-lieutenant-governor",
      title: "7 · The Lieutenant Governor: a change in progress (READ THE FLAG)",
      section: "Elections & Ballot Access",
      body: `⚠️ **THIS LESSON IS ABOUT A CHANGE UNDERWAY. Do not memorize a fixed answer — confirm the current status at azsos.gov and azleg.gov.**

For almost its entire history, **Arizona had NO Lieutenant Governor.** That made Arizona unusual: in most states the Lieutenant Governor is next in line if the governor leaves office, but in Arizona that role fell to the **Secretary of State**, who was **first in the line of succession.** Because Arizona governors have several times left mid-term (to join a presidential cabinet, for example), the **Secretary of State has actually become governor multiple times** in Arizona's history (Citizens Clean Elections Commission, n.d.; Ballotpedia, n.d.).

**What's changing — Proposition 131 (2022).** Arizona voters approved **Proposition 131** in 2022, a constitutional amendment that **creates the office of Lieutenant Governor**, taking effect with the **2026 election cycle** (Ballotpedia, n.d.). Its key features:
- Beginning in **2026**, candidates for **Governor** run with a **Lieutenant Governor running mate** on a **joint ticket** (the way President and Vice President run together). Under the measure, a party's gubernatorial **nominee** names a running mate **after the primary**, ahead of the general election.
- Once the office exists, the **Lieutenant Governor replaces the Secretary of State as first in the line of succession** to the governorship.

**Why this is flagged so hard.** This course is authored in **mid-2026**, right as this transition is happening. Depending on exactly when you're reading this:
- Older sources (and habits) will still say **"Arizona has no Lieutenant Governor; the Secretary of State is first in line."**
- Newer sources will describe an **elected Lieutenant Governor** who is now first in line.
Both can be "true" for different moments in time — which is exactly why you must **check the CURRENT status**, not trust a snapshot.

**Do this:** to know whether Arizona has a sitting Lieutenant Governor *right now*, and who is currently first in the line of succession, confirm at the **Arizona Secretary of State (azsos.gov)** and the **Arizona Legislature (azleg.gov)**. This is the single most important "verify, don't assert" moment in the course.

**Check yourself.** Historically, who was first in line to succeed Arizona's governor, what did Proposition 131 (2022) create and when does it take effect, and why should you verify the current status rather than trusting an older source?

## Sources
- Ballotpedia. (n.d.). *Arizona Proposition 131, Create Office of Lieutenant Governor Amendment (2022)*. https://ballotpedia.org/Arizona_Proposition_131,_Create_Office_of_Lieutenant_Governor_Amendment_(2022)
- Citizens Clean Elections Commission. (n.d.). *Lieutenant Governor*. AZCleanElections.gov. https://www.azcleanelections.gov/how-government-works/lieutenant-governor
- Arizona Secretary of State. (n.d.). *State officers and succession*. AZSOS.gov. https://azsos.gov/`,
    },

    // ── Section 6: Get involved where you live ───────────────────────────
    {
      slug: "az-get-involved",
      title: "8 · Get involved where you live in Arizona",
      section: "Get Involved Where You Live",
      body: `Arizona gives ordinary people unusually strong tools — so getting involved here can mean more than just voting for candidates.

**Register and vote — and consider the early list.** Register and check your registration before the deadline, then decide how you'll vote. Many Arizonans join the **Active Early Voting List** so a mail ballot arrives automatically each election. Confirm the current registration deadline, ID rules, and mail-ballot deadlines at **azsos.gov** (Arizona Secretary of State, n.d.).

**Use direct democracy — it's your superpower here.** Because Arizona has the **initiative, referendum, and recall**, you can do more than lobby legislators:
- **Sign (or circulate) an initiative petition** to put a law on the ballot.
- **Support a referendum** to send a law the Legislature passed back to voters.
- **Participate in a recall** to remove an official before their term ends.
And thanks to the **Voter Protection Act**, a measure you help pass is hard for the Legislature to unwind — your effort **sticks** (Arizona Secretary of State, n.d.).

**Contact your legislators — one senator, two representatives.** Because of Arizona's district design, you have **one state senator and two state representatives** all from your **same** legislative district. Look them up and track bills at **azleg.gov**, and testify or submit comment in committee — the stage where most bills live or die (Arizona State Legislature, n.d.).

**Show up locally — county and city/town.** Your **County Board of Supervisors** and your **city or town council** meetings are public and set your local taxes and services (remember: no townships to worry about in Arizona). Public comment there is where one voice carries the most weight.

**Vote your judicial ballot knowingly.** Depending on your county, you'll either **retain-or-not** merit-selected judges or vote in **contested judicial elections** (Lesson 3) — know which one your ballot is asking.

**Check yourself.** Name three ways to get involved in Arizona government, and explain why the initiative + Voter Protection Act make direct democracy an especially powerful tool for an Arizonan.

## Sources
- Arizona Secretary of State. (n.d.). *Voting, registration, and citizen petitions*. AZSOS.gov. https://azsos.gov/
- Arizona State Legislature. (n.d.). *Find your legislators / track legislation*. AZLeg.gov. https://www.azleg.gov/`,
    },

    // ── Section 7: Practice ──────────────────────────────────────────────
    {
      slug: "az-practice",
      title: "9 · Practice: Arizona civics fill-in",
      section: "Practice",
      exercise: {
        instructions:
          "Fill in each blank about Arizona state government, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt: "Arizona became the 48th state in the year ___.",
            answer: "1912",
            explanation:
              "Arizona's constitution was drafted in 1910; statehood came on February 14, 1912.",
          },
          {
            prompt:
              "Arizona has 30 legislative districts; each district elects one senator and ___ representatives.",
            answer: "two",
            accept: ["2"],
            explanation:
              "Each of Arizona's 30 districts elects 1 senator and 2 representatives — 30 senators and 60 representatives total.",
          },
          {
            prompt:
              "Citizens gathering signatures to put a new law directly on the ballot are using the ___ (a direct-democracy tool).",
            answer: "initiative",
            explanation:
              "The initiative lets voters enact laws or amendments directly, bypassing the Legislature — a core Arizona feature.",
          },
          {
            prompt: "Arizona is divided into ___ counties.",
            answer: "15",
            accept: ["fifteen"],
            explanation:
              "Arizona has just 15 counties, each run by an elected Board of Supervisors — and it has no townships.",
          },
          {
            prompt:
              "The 1998 law that stops the Legislature from repealing a voter-approved initiative is the Voter ___ Act.",
            answer: "protection",
            explanation:
              "The Voter Protection Act (Prop 105, 1998) blocks repeal and allows amendment only by a 3/4 vote that 'furthers the purpose.'",
          },
          {
            prompt:
              "TRUE or FALSE: Arizona has always had a Lieutenant Governor as first in line to succeed the governor.",
            answer: "false",
            explanation:
              "False. Historically the Secretary of State was first in line; Proposition 131 (2022) creates a Lieutenant Governor beginning with the 2026 cycle — a change in progress you should verify.",
          },
        ],
      },
    },

    // ── Section 8: Final quiz ────────────────────────────────────────────
    {
      slug: "az-quiz",
      title: "10 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "What is the defining feature of Arizona's constitution emphasized in this course?",
            options: [
              "A weak legislature",
              "Strong direct democracy — initiative, referendum, and recall built in",
              "A ban on all taxes",
              "A unicameral legislature",
            ],
            correctIndex: 1,
            explanation:
              "Arizona's Progressive-Era constitution puts strong direct-democracy tools — initiative, referendum, recall — directly in voters' hands.",
            sourceLessonSlug: "az-constitution",
          },
          {
            prompt: "How are Arizona's 30 legislative districts represented?",
            options: [
              "Each district elects two senators and one representative",
              "Each district elects one senator and two representatives",
              "Districts elect only senators; representatives are statewide",
              "Each district elects three senators",
            ],
            correctIndex: 1,
            explanation:
              "Each of the 30 districts elects 1 senator and 2 representatives, for 30 senators and 60 representatives.",
            sourceLessonSlug: "az-three-branches",
          },
          {
            prompt: "What determines whether an Arizona Superior Court judge is merit-selected or elected?",
            options: [
              "The judge's political party",
              "The size (population) of the county",
              "Whether it's a presidential election year",
              "A coin flip",
            ],
            correctIndex: 1,
            explanation:
              "Large counties (historically above ~250,000) use merit selection plus retention; smaller counties elect their Superior Court judges.",
            sourceLessonSlug: "az-courts",
          },
          {
            prompt: "Besides passing a bill through the Legislature, how else can a new law be made in Arizona?",
            options: [
              "By the governor alone",
              "By voters directly, through the initiative",
              "By a single county",
              "By the state Supreme Court",
            ],
            correctIndex: 1,
            explanation:
              "Arizona's initiative lets voters enact a law or constitutional amendment directly, without the Legislature or Governor.",
            sourceLessonSlug: "az-bill-to-law",
          },
          {
            prompt: "Which local layer does Arizona NOT have?",
            options: ["Counties", "Cities and towns", "Townships", "Boards of Supervisors"],
            correctIndex: 2,
            explanation:
              "Arizona has no townships — its 15 counties and its cities/towns are the local layers.",
            sourceLessonSlug: "az-local-government",
          },
          {
            prompt: "Under the Voter Protection Act (Prop 105, 1998), how can the Legislature change a voter-approved initiative?",
            options: [
              "By a simple majority anytime",
              "It cannot change it under any circumstances",
              "Only by a 3/4 vote of each chamber AND only if the change furthers the measure's purpose",
              "Only the governor can change it",
            ],
            correctIndex: 2,
            explanation:
              "The Legislature cannot repeal a voter initiative and may amend it only by a 3/4 supermajority that 'furthers the purpose' of the original measure.",
            sourceLessonSlug: "az-elections",
          },
          {
            prompt: "What is Arizona's Active Early Voting List (AEVL)?",
            options: [
              "A list of people banned from voting",
              "A list that automatically sends a mail ballot for each election",
              "A registry of poll workers",
              "A list of candidates",
            ],
            correctIndex: 1,
            explanation:
              "Joining the AEVL means a mail ballot is sent automatically each election, so the voter needn't request one each time.",
            sourceLessonSlug: "az-elections",
          },
          {
            prompt: "Historically, who was FIRST in line to succeed Arizona's governor (before the 2022 change)?",
            options: [
              "The Lieutenant Governor",
              "The Secretary of State",
              "The Attorney General",
              "The Speaker of the House",
            ],
            correctIndex: 1,
            explanation:
              "Arizona had no Lieutenant Governor; the Secretary of State was first in line and has become governor several times in Arizona history.",
            sourceLessonSlug: "az-lieutenant-governor",
          },
          {
            prompt: "What did Arizona's Proposition 131 (2022) do, and when does it take effect?",
            options: [
              "Abolished the Legislature, effective immediately",
              "Created the office of Lieutenant Governor, beginning with the 2026 election cycle",
              "Banned early voting starting in 2024",
              "Merged two counties in 2020",
            ],
            correctIndex: 1,
            explanation:
              "Prop 131 creates a Lieutenant Governor (elected on a joint ticket with the governor) starting with the 2026 cycle — a change in progress you should verify at azsos.gov / azleg.gov.",
            sourceLessonSlug: "az-lieutenant-governor",
          },
          {
            prompt: "Why does this course tell you to VERIFY Arizona's Lieutenant Governor status rather than memorize an answer?",
            options: [
              "Because the office is secret",
              "Because the change is in progress (2026 cycle), so older and newer sources disagree — check the current status",
              "Because Arizona has no official website",
              "Because only Congress knows",
            ],
            correctIndex: 1,
            explanation:
              "The transition is underway as of authoring; older sources say 'no Lt. Gov,' newer ones describe the new office — so confirm the current status at azsos.gov / azleg.gov.",
            sourceLessonSlug: "az-lieutenant-governor",
          },
        ],
      },
    },
  ],
};
