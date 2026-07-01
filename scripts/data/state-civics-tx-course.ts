// Authored "Texas Civics: How Your State Government Works" — the Texas entry in the
// per-state Civics layer on Learn.WitUS. It is the state-level companion to the
// general Civics courses (US Civics 101, US Constitution 101, State vs Federal Power,
// and US, State & Local Government: Who Does What): those teach the SYSTEM; this
// teaches ONE state's specific — and unusually distinctive — version of it.
//
// Factual and strictly non-partisan (how Texas's government works, not who should
// win). Every content lesson is cited (APA 7 in-line + a `## Sources` bibliography)
// to TEXAS'S OWN OFFICIAL SOURCES: the Texas Constitution and statutes portal
// (statutes.capitol.texas.gov), the Texas Legislature Online (capitol.texas.gov),
// the Texas Legislative Council (tlc.texas.gov), the Texas House and Senate
// (house.texas.gov / senate.texas.gov), the Judicial Branch (txcourts.gov), the
// Secretary of State / VoteTexas (sos.state.tx.us / votetexas.gov), and the Texas
// Legislative Reference Library (lrl.texas.gov).
//
// Authoritative-values rule (load-bearing): state facts VARY and CHANGE. Where a
// figure is time-sensitive (the running amendment count that grows every odd-year
// election, voter-ID lists, the registration deadline), the course SAYS SO and points
// the learner to Texas's own official source to confirm the current value, rather
// than freezing a number that could go stale. The amendment total in particular is
// flagged as a moving number: Texas votes on new constitutional amendments almost
// every odd-numbered November.
//
// Texas's signature civic features, threaded throughout: the very long, heavily
// amended 1876 constitution; the PLURAL EXECUTIVE (a governor deliberately NOT made
// all-powerful — a separately-elected Lieutenant Governor, Attorney General,
// Comptroller, Land Commissioner, and Agriculture Commissioner each answer to voters,
// not to the governor); a part-time, BIENNIAL legislature; and the BIFURCATED high
// courts (a Supreme Court for civil cases + a Court of Criminal Appeals for criminal
// cases) whose judges are chosen in PARTISAN elections.
//
// The course is organized into sections (course modules) and ends with a fill-in
// exercise + a final quiz whose every question links back to the lesson that teaches
// the answer.

import type { AuthoredCourse } from "./authored-course";

export const STATE_CIVICS_TX_COURSE: AuthoredCourse = {
  title: "Texas Civics: How Your State Government Works",
  description:
    "A practical, non-partisan guide to how the state of Texas governs itself — and how you take part where you live. You'll learn Texas's long, much-amended 1876 constitution; its distinctive PLURAL EXECUTIVE (a deliberately limited governor sharing power with a separately-elected Lieutenant Governor, Attorney General, Comptroller, Land Commissioner, and Agriculture Commissioner); a part-time legislature that meets only every OTHER year (a 150-member House and a 31-member Senate); Texas's unusual TWO highest courts (a Supreme Court for civil cases and a Court of Criminal Appeals for criminal cases) with partisan-elected judges; how a bill becomes a Texas law, including the two-thirds veto override; local government across Texas's 254 counties — the most of any state — run by a commissioners court, with NO townships and home-rule cities; and Texas's elections rules — strict photo voter ID, no same-day registration (a ~30-day deadline), and no statewide citizen initiative. It closes on how to get involved where you live. Cited to Texas's own official sources (capitol.texas.gov, tlc.texas.gov, txcourts.gov, sos.state.tx.us / votetexas.gov). Because state facts vary and change, the course flags time-sensitive items — like the running count of constitutional amendments and the voter-ID and registration rules — and points you to Texas's own sources to confirm the current rule.",
  lessons: [
    // ── Section 1: The Texas Constitution ────────────────────────────────
    {
      slug: "tx-constitution",
      title: "1 · Texas's constitution: the long, much-amended 1876 rulebook",
      section: "The Texas Constitution",
      body: `Every U.S. state has its own constitution — its own top-level rulebook — layered *under* the U.S. Constitution but governing the daily machinery of the state. Texas is on its current constitution, adopted in **1876** (Texas Legislative Council, n.d.-a). It is Texas's seventh constitution (counting those from its time as a Mexican state, a republic, and a Confederate state), and it is one of the longest and most-amended state constitutions in the country.

A state constitution does for the state what the U.S. Constitution does for the nation: it creates the branches, distributes power, and sets limits the legislature can't cross by ordinary law. Three features of Texas's 1876 document stand out and shape everything else in this course:

- **It is very long and highly detailed.** Written in the aftermath of Reconstruction, the 1876 constitution was drafted to sharply LIMIT state government — especially the governor — after Texans' unhappy experience with a powerful Reconstruction-era administration. It writes many specifics directly into the constitution rather than leaving them to ordinary law, which is a big reason it needs constant amending.
- **It has been amended hundreds of times.** Because so much detail is locked into the constitution, changing state policy often requires a constitutional amendment. The Legislature has proposed **more than 700 amendments**, and voters have approved **more than 500 of them** (Texas Legislative Reference Library, n.d.). Compare that with the U.S. Constitution's 27 amendments in far more years.
- **It creates a PLURAL EXECUTIVE.** Instead of concentrating executive power in the governor, Texas's constitution scatters it among several separately-elected statewide officers (Tex. Const. art. IV). You'll meet them in the next lesson — this is Texas's single most distinctive structural choice.

⚠️ **Time-sensitive / a moving number — confirm the current count.** The amendment total is **not fixed**: Texas votes on new constitutional amendments almost every odd-numbered November, so the running count grows over time. Treat "700+ proposed / 500+ approved" as an authored-time figure and confirm the current totals with the Texas Legislative Reference Library (lrl.texas.gov) or the Texas Legislative Council (tlc.texas.gov), not a frozen textbook number.

A state constitution is also **easier to amend than the U.S. Constitution** — in Texas, the Legislature proposes an amendment by a two-thirds vote of each chamber, and then the *voters* decide it at the polls. That matters for this course: some things you'll learn are set in the constitution, while others are set by ordinary law (the Legislature can change them, and sometimes does — we'll flag those).

**A note this course keeps returning to:** state facts **vary and change**. Office names, deadlines, and rules described here are current as of authoring, but the authoritative source is always Texas's own government (capitol.texas.gov and the offices below), not a textbook. When something is time-sensitive, we say so.

**Check yourself.** In what year did Texas adopt its current constitution, why is it so long and so often amended, and what does "plural executive" mean?

## Sources
- Texas Legislative Council. (n.d.-a). *The Texas Constitution.* Texas Constitution and Statutes. https://statutes.capitol.texas.gov/?link=CN
- Texas Legislative Reference Library. (n.d.). *Constitutional amendments.* LRL.texas.gov. https://lrl.texas.gov/legis/constamends/index.cfm
- Tex. Const. art. IV (Executive Department). https://statutes.capitol.texas.gov/Docs/CN/htm/CN.4.htm`,
    },

    // ── Section 2: The three state branches ──────────────────────────────
    {
      slug: "tx-three-branches",
      title: "2 · The three branches — and Texas's plural executive",
      section: "The Three Branches",
      body: `Like the federal government, Texas splits its power into three branches — but the balance between them is distinctly Texas's, and the executive branch in particular is built to be *divided*.

**Legislative — the Texas Legislature.** A two-chamber (bicameral) legislature:
- **House of Representatives — 150 members, 2-year terms.**
- **Senate — 31 members, 4-year terms.**
It writes state law and passes the budget. A defining feature: it is **part-time and meets only every OTHER year** — you'll see why that matters in Lesson 4 (Texas House of Representatives, n.d.; Texas Legislative Council, n.d.-b).

**Executive — the PLURAL EXECUTIVE.** This is Texas's signature. Rather than a single powerful governor who appoints the top officials, Texas voters **separately elect** several statewide executive officers, each of whom answers to the voters — not to the governor (Tex. Const. art. IV). The major separately-elected offices include:
- **Governor** — the state's chief executive, elected to a 4-year term. Powerful in some ways (veto, appointments to boards, commander of the state's forces), but deliberately **not** the sole head of the executive branch.
- **Lieutenant Governor** — often described as the most powerful office in Texas, because the Lt. Governor is the **President of the Senate** and presides over it. Covered in the next paragraph.
- **Attorney General** — the state's chief lawyer.
- **Comptroller of Public Accounts** — the state's chief financial officer / tax collector and revenue estimator.
- **Commissioner of the General Land Office** — manages state lands and the Permanent School Fund's land assets.
- **Commissioner of Agriculture** — heads the Department of Agriculture (a statutory statewide elected office).
Because these officials answer to voters, executive power in Texas is **shared and split**, not concentrated in the governor alone. A Texas governor cannot simply fire the Attorney General or the Comptroller — the people elected them.

**The Lieutenant Governor — a legislative-executive hybrid.** Uniquely, Texas's Lt. Governor sits in the *executive* branch but wields enormous power over the *legislature*: as President of the Senate, the Lt. Governor presides over the Senate, appoints Senate committee members and chairs, and assigns bills to committee (Texas Senate, n.d.). Many observers consider the Lt. Governor more powerful over day-to-day lawmaking than the governor.

**Judicial — the state courts.** Texas's court system is unusual because it has **TWO** highest courts — a split ("bifurcated") top. That's the subject of the next lesson.

**Check yourself.** Name Texas's three branches; give the size and term length of each legislative chamber; and explain what "plural executive" means and why the Lieutenant Governor is so powerful.

## Sources
- Tex. Const. art. IV (Executive Department). https://statutes.capitol.texas.gov/Docs/CN/htm/CN.4.htm
- Texas House of Representatives. (n.d.). *About the Texas House.* House.texas.gov. https://house.texas.gov/about
- Texas Senate. (n.d.). *The Lieutenant Governor.* Senate.texas.gov. https://senate.texas.gov/ltgov.php
- Texas Legislative Council. (n.d.-b). *Texas legislative glossary.* TLC.texas.gov. https://tlc.texas.gov/glossary`,
    },
    {
      slug: "tx-courts",
      title: "3 · Texas's courts: two high courts, partisan-elected judges",
      section: "The Three Branches",
      body: `How does a state pick its judges, and how many "supreme" courts does it have? Texas's answer is unusual on both counts.

**Two highest courts — a bifurcated top (since 1891).** Almost every state has ONE court of last resort. Texas (like only Oklahoma) has **TWO** (Texas Office of Court Administration, n.d.):
1. The **Supreme Court of Texas** is the court of last resort for **CIVIL** cases (and juvenile cases). It has a Chief Justice and eight Justices — nine in all.
2. The **Court of Criminal Appeals** is the court of last resort for **CRIMINAL** cases, including the final say on death-penalty appeals. It has a Presiding Judge and eight Judges — nine in all.

So in Texas, whether your case ends at the Supreme Court or the Court of Criminal Appeals depends on whether it's a **civil** or a **criminal** matter. This split dates to an **1891** constitutional amendment.

**Partisan election of judges.** Here's the other distinctive fact: Texas chooses the judges on **both** high courts — and most of its other judges — in **partisan elections**. Candidates run under a party label (Democrat or Republican), campaign, and are elected statewide to **six-year terms** (Texas Office of Court Administration, n.d.). This is different from states that appoint judges or use nonpartisan or "merit selection + retention" systems.

**Why partisan election matters civically:** because the party label appears on the ballot, Texas judicial races can move together with the top of the ticket — a strong year for one party can sweep its judicial candidates in too. Whatever one thinks of that, the practical point for you as a voter is that **your ballot will include judicial races**, often several, and they are real, contested elections — not throwaway lines.

⚠️ **Some details vary by court level.** The partisan-election, six-year-term rule described here is the statewide/appellate picture. Rules for particular trial courts (and periodic reform proposals about how Texas selects judges) can differ, so when you want the rule for a *specific* court, the authoritative source is the Texas Judicial Branch (txcourts.gov).

**Check yourself.** Name Texas's two highest courts and say which kinds of cases each one ends; and describe how Texas selects the judges on those courts.

## Sources
- Texas Office of Court Administration. (n.d.). *Court structure of Texas / Texas courts: A descriptive summary.* Txcourts.gov. https://www.txcourts.gov/about-texas-courts/
- Supreme Court of Texas. (n.d.). *About the Court.* Txcourts.gov. https://www.txcourts.gov/supreme/
- Texas Court of Criminal Appeals. (n.d.). *About the Court.* Txcourts.gov. https://www.txcourts.gov/cca/`,
    },

    // ── Section 3: How a bill becomes a state law ────────────────────────
    {
      slug: "tx-bill-to-law",
      title: "4 · How a bill becomes a Texas law — and the biennial session",
      section: "How a Bill Becomes State Law",
      body: `A bill in the Texas Legislature travels a path that rhymes with Congress but has its own steps and — crucially — its own once-every-two-years clock (Texas Legislative Council, n.d.-c; Texas House of Representatives, n.d.).

**First, the biennial calendar.** The Texas Legislature is **part-time** and meets in a **regular session only in odd-numbered years**, convening at noon on the **second Tuesday in January** and lasting a maximum of **140 days** (Texas Legislative Council, n.d.-b). Between regular sessions — a full two years — the Legislature is generally not in session. Only the **governor** can call a **special session** (up to 30 days each, on subjects the governor sets). This biennial, part-time design means Texas budgets **two years at a time** and that most lawmaking is compressed into a few hectic months every other year.

Now the route a bill travels:

1. **Introduction.** A legislator files a bill in their chamber (House or Senate).
2. **Committee.** The bill goes to a committee, which studies it, holds hearings, may amend it, and votes. **Most bills die in committee** — this is the biggest filter. (In the Senate, the Lieutenant Governor controls which committee a bill goes to — a major lever of power.)
3. **Readings / floor vote.** If it survives committee, the full chamber debates it over required readings, may amend it, and votes.
4. **The other chamber.** A bill that passes one chamber goes to the other and repeats the whole process. If the second chamber changes it, the two versions must be reconciled (often in a **conference committee**) so both chambers pass **identical** text.
5. **The Governor.** Once both chambers pass the same bill, it goes to the governor, who can **sign** it, **let it become law without a signature**, or **veto** it. (Texas also gives the governor a **line-item veto** over spending items in the budget bill.)
6. **The two-thirds override.** If the governor vetoes, the Legislature can override with a **two-thirds vote of each chamber** — the same threshold Congress uses against a presidential veto. But there's a Texas twist: because the session is so short and ends in 140 days, many vetoes arrive **after the Legislature has already gone home**, so in practice a large share of Texas vetoes are **never** subject to an override vote at all.

**Check yourself.** Put these in order: committee, governor's signature or veto, introduction, floor vote, the other chamber. Then explain why the biennial session and its 140-day limit make many Texas vetoes effectively final even though the override threshold is two-thirds.

## Sources
- Texas Legislative Council. (n.d.-c). *The legislative process in Texas.* TLC.texas.gov. https://tlc.texas.gov/docs/legref/legislativeprocess.pdf
- Texas Legislative Council. (n.d.-b). *Texas legislative glossary.* TLC.texas.gov. https://tlc.texas.gov/glossary
- Texas House of Representatives. (n.d.). *About the Texas House.* House.texas.gov. https://house.texas.gov/about`,
    },

    // ── Section 4: Local government in Texas ─────────────────────────────
    {
      slug: "tx-local-government",
      title: "5 · Local government in Texas: 254 counties, no townships",
      section: "Local Government in Texas",
      body: `Texas's local government has a shape all its own — starting with the fact that it has **254 counties, the most of any U.S. state** (the next-closest, Georgia, has 159). Every square foot of Texas lies inside exactly one county.

**The commissioners court runs the county.** Despite the name, the **commissioners court** is **not** a court — it's the **governing body** of the county (its "legislature" and "executive" combined). Under the Local Government Code, each commissioners court is made up of (Tex. Loc. Gov't Code ch. 81; Texas Association of Counties, n.d.):
- A **county judge**, elected countywide, who **presides** over the commissioners court. (Confusingly, the county judge is an administrator here; in smaller counties the same person may also hear some actual court cases, but the role on the commissioners court is executive/administrative — and the county judge serves as the county's budget officer in less-populous counties.)
- **Four county commissioners**, each **elected from one of four precincts** (geographic quarters of the county). Each commissioner is especially responsible for roads and bridges in their precinct.
Together these five set the county budget, the county tax rate, and county services.

**NO townships.** A distinctive fact: **Texas has no townships.** Many states (Indiana, Ohio, the Northeast) run a township layer between the county and the city — Texas does not. Below the county there is no general-purpose township government; local services in unincorporated areas are largely the county's job (plus special districts).

**Home-rule vs. general-law cities.** Texas cities come in two constitutional flavors:
- A **home-rule city** (allowed once a city passes **5,000** population) can adopt its own **charter** and generally do anything not forbidden by state law — broad self-government.
- A **general-law city** (typically smaller) can exercise only the powers the state has specifically granted it.
So a big Texas city writes its own charter and has wide latitude; a small town operates on a state template. On top of cities, Texas has thousands of **special districts** (school districts, water districts, hospital districts) that levy taxes for a single purpose.

The practical payoff is the same as everywhere: **who provides your service depends on where you live** — it might be your city, your county, or a special district. Texas's "no townships, but lots of special districts" mix just arranges the boxes differently than many states.

**Check yourself.** How many counties does Texas have (and how does that rank nationally)? Who sits on a commissioners court and what does it do? And what common local layer does Texas NOT have?

## Sources
- Tex. Loc. Gov't Code ch. 81 (Commissioners Court). https://statutes.capitol.texas.gov/Docs/LG/htm/LG.81.htm
- Texas Association of Counties. (n.d.). *Duties of Texas county officials / about Texas counties.* County.org. https://www.county.org/about-texas-counties
- Tex. Const. art. XI (Municipal Corporations — home-rule cities). https://statutes.capitol.texas.gov/Docs/CN/htm/CN.11.htm`,
    },

    // ── Section 5: Elections & ballot access ─────────────────────────────
    {
      slug: "tx-elections",
      title: "6 · Elections in Texas: strict photo ID, no same-day registration, no initiative",
      section: "Elections & Ballot Access",
      body: `Elections are run by each state, so Texas's rules are specifically Texas's — and several of them are notably **strict**. (Because rules like these change, the authoritative and current source is always the Texas Secretary of State / VoteTexas at votetexas.gov and sos.state.tx.us.)

**Strict photo voter ID — with a fallback declaration.** To vote in person in Texas, you generally must present one of a short list of accepted **photo IDs** — for example a Texas driver license, a Texas Election Identification Certificate, a Texas personal ID card, a Texas handgun license, a U.S. military ID with photo, a U.S. citizenship certificate with photo, or a U.S. passport (VoteTexas.gov, n.d.-a). For voters aged **18–69**, most of these may be expired **no more than four years**; for voters **70 or older**, an otherwise-valid ID may be expired for any length of time. A voter who cannot reasonably obtain one of the accepted photo IDs may sign a **Reasonable Impediment Declaration** and show a supporting document (like a utility bill, bank statement, government check, or voter registration certificate).

⚠️ **Confirm the current ID list.** The accepted-ID list and the expiration rules are set by state law and can change. Verify the current list at **votetexas.gov** before relying on a specific item.

**No same-day registration — register about 30 days ahead.** Texas does **NOT** offer same-day or online voter registration for the act of registering to vote. Your registration is effective **30 days after** it's submitted and accepted — so you must register roughly **a month before** an election to vote in it (VoteTexas.gov, n.d.-b). Miss the deadline and you can't vote in that election. (⚠️ Confirm the exact deadline for a given election at votetexas.gov, since dates shift with the election calendar.)

**No statewide citizen initiative.** Here's a big structural fact for ballot access: **Texas has NO statewide citizen-initiated ballot measures.** In many Western states, ordinary citizens can gather signatures to put a law or constitutional amendment directly on the statewide ballot. **In Texas, they can't** — the constitution lets **only the Legislature** propose amendments (by a two-thirds vote of each chamber), which voters then ratify (Tex. Const. art. XVII). The constitutional amendments Texans vote on every odd November all originate in the Legislature, not from citizen petitions. (Some Texas **home-rule cities** allow local initiative/referendum on city matters, but there is no *statewide* citizen initiative.) So in Texas, "changing state law" means electing legislators and lobbying them — not launching a statewide petition drive.

**Check yourself.** Name Texas's ID requirement to vote in person and what a voter without accepted photo ID can do instead; explain what "no same-day registration / ~30-day deadline" means; and state whether a Texas citizen can put a new state law on the statewide ballot by petition.

## Sources
- VoteTexas.gov. (n.d.-a). *Required identification for voters.* Texas Secretary of State. https://www.votetexas.gov/voting/need-id.html
- VoteTexas.gov. (n.d.-b). *Register to vote / registration FAQs.* Texas Secretary of State. https://www.votetexas.gov/register-to-vote/
- Tex. Const. art. XVII (Mode of Amending the Constitution). https://statutes.capitol.texas.gov/Docs/CN/htm/CN.17.htm`,
    },

    // ── Section 6: Get involved where you live ───────────────────────────
    {
      slug: "tx-get-involved",
      title: "7 · Get involved where you live in Texas",
      section: "Get Involved Where You Live",
      body: `Knowing how Texas works only pays off when you **show up**. Because Texas spreads power across a plural executive, a part-time legislature, and 254 counties, an engaged Texan has several distinct places to push.

**Register and vote — mind Texas's deadlines.** Register (and check your registration) **at least ~30 days before** any election you want to vote in, since Texas has no same-day registration. Bring an **accepted photo ID** to the polls — or, if you can't get one, be ready to sign a **Reasonable Impediment Declaration** with a supporting document. Start at VoteTexas.gov (VoteTexas.gov, n.d.-b).

**Contact your state legislators — but remember the biennial clock.** You have **one state representative** and **one state senator** in the Legislature, on top of your members of Congress. Because Texas has **no citizen initiative**, lobbying your legislators is *the* way to change state law here. And because the Legislature only meets every other year for 140 days, **timing matters**: engaging *before and during* a regular (odd-year) session is far more effective than after it adjourns. Look up your legislators and track bills at **capitol.texas.gov** (Texas Legislature Online), where you can read bills and find committee schedules.

**Testify or submit comment on a bill.** Texas's committee hearings are where most bills live or die, and they're **open to public testimony**. Watch a committee's calendar on capitol.texas.gov, and sign up to testify or submit written comment on a bill you care about — comment carries the most weight *before* the committee vote.

**Show up locally — county, city, special district.** Your **commissioners court** (county judge + four commissioners), your **city council**, and your local **school board / special-district boards** meet in public and set your local taxes and services. These smaller rooms are where one person's comment moves things most — and remember Texas has **lots of special districts**, so there may be more local boards affecting your tax bill than you'd expect.

**Vote your judicial races thoughtfully.** Because Texas **elects** its judges in partisan races (Lesson 3), your ballot will include real, contested judicial contests — from the two high courts down to local benches. Read up before you fill them in rather than skipping them.

**Check yourself.** Name three specific ways to get involved in Texas government, and explain why the *timing* of contacting your state legislators matters so much in Texas given its biennial session and lack of a citizen initiative.

## Sources
- Texas Legislature Online. (n.d.). *Find your legislators / track legislation.* Capitol.texas.gov. https://capitol.texas.gov/
- VoteTexas.gov. (n.d.-b). *Register to vote / voter information.* Texas Secretary of State. https://www.votetexas.gov/register-to-vote/`,
    },

    // ── Section 7: Practice ──────────────────────────────────────────────
    {
      slug: "tx-practice",
      title: "8 · Practice: Texas civics fill-in",
      section: "Practice",
      exercise: {
        instructions:
          "Fill in each blank about Texas state government, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt: "Texas's current constitution was adopted in the year ___.",
            answer: "1876",
            explanation:
              "Texas's current (and longest-serving) constitution dates to 1876, drafted after Reconstruction to limit state government.",
          },
          {
            prompt:
              "The Texas House has 150 members and the Texas ___ has 31 members.",
            answer: "senate",
            explanation:
              "The bicameral Legislature is a 150-member House (2-year terms) and a 31-member Senate (4-year terms).",
          },
          {
            prompt:
              "Texas scatters executive power among several separately-elected officers — this design is called the ___ executive.",
            answer: "plural",
            explanation:
              "The 'plural executive' means the governor shares power with a separately-elected Lt. Governor, Attorney General, Comptroller, Land Commissioner, and Agriculture Commissioner.",
          },
          {
            prompt:
              "The Texas Legislature meets in regular session only in ___-numbered years (every other year).",
            answer: "odd",
            explanation:
              "Texas's part-time Legislature convenes a 140-day regular session on the second Tuesday of January in odd-numbered years.",
          },
          {
            prompt: "Texas is divided into ___ counties — the most of any state.",
            answer: "254",
            accept: ["two hundred fifty-four", "two hundred fifty four"],
            explanation:
              "Texas has 254 counties, more than any other state; each is governed by a commissioners court.",
          },
          {
            prompt:
              "TRUE or FALSE: an ordinary Texas citizen can gather signatures to put a new STATE law directly on the statewide ballot.",
            answer: "false",
            explanation:
              "False. Texas has NO statewide citizen initiative; only the Legislature can propose constitutional amendments, which voters then ratify.",
          },
        ],
      },
    },

    // ── Section 8: Final quiz ────────────────────────────────────────────
    {
      slug: "tx-quiz",
      title: "9 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "Why is Texas's 1876 constitution so long and so frequently amended?",
            options: [
              "It has never been amended, so detail piled up",
              "It writes many specifics into the constitution itself, so changing policy often needs a constitutional amendment",
              "Federal law requires an amendment every year",
              "The governor rewrites it each term",
            ],
            correctIndex: 1,
            explanation:
              "Drafted to limit state government after Reconstruction, it locks lots of detail into the constitution, so the Legislature must propose amendments (700+ proposed, 500+ approved) for voters to decide.",
            sourceLessonSlug: "tx-constitution",
          },
          {
            prompt: "What does Texas's 'plural executive' mean?",
            options: [
              "The governor appoints all other statewide officials",
              "There are two governors",
              "Several statewide executive officers are elected separately and answer to voters, not to the governor",
              "The Legislature runs the executive branch",
            ],
            correctIndex: 2,
            explanation:
              "Texas voters separately elect the Lt. Governor, Attorney General, Comptroller, Land Commissioner, and Agriculture Commissioner, so executive power is split rather than concentrated in the governor.",
            sourceLessonSlug: "tx-three-branches",
          },
          {
            prompt: "Why is the Texas Lieutenant Governor often called the most powerful office in the state?",
            options: [
              "The Lt. Governor commands the state's courts",
              "The Lt. Governor is President of the Senate and controls committees and bill assignments",
              "The Lt. Governor can veto any bill alone",
              "The Lt. Governor appoints all judges",
            ],
            correctIndex: 1,
            explanation:
              "As President of the Senate, the Lt. Governor presides, appoints Senate committee members and chairs, and assigns bills to committee — huge leverage over lawmaking.",
            sourceLessonSlug: "tx-three-branches",
          },
          {
            prompt: "How is Texas's high court system unusual?",
            options: [
              "It has no supreme court",
              "It has TWO highest courts — a Supreme Court for civil cases and a Court of Criminal Appeals for criminal cases",
              "Its supreme court is appointed by the U.S. President",
              "It shares a supreme court with Oklahoma",
            ],
            correctIndex: 1,
            explanation:
              "Texas (like only Oklahoma) has a bifurcated top: the Supreme Court is the last word on civil cases, the Court of Criminal Appeals on criminal cases.",
            sourceLessonSlug: "tx-courts",
          },
          {
            prompt: "How does Texas select the judges on its two highest courts?",
            options: [
              "Merit selection plus yes/no retention votes",
              "Lifetime appointment by the governor",
              "Nonpartisan elections",
              "Partisan statewide elections to six-year terms",
            ],
            correctIndex: 3,
            explanation:
              "Texas elects these judges in partisan elections (party label on the ballot) to six-year terms — unlike appointment or merit-selection states.",
            sourceLessonSlug: "tx-courts",
          },
          {
            prompt: "What is distinctive about when the Texas Legislature meets?",
            options: [
              "It meets year-round, full time",
              "It meets only in regular session in odd-numbered years, for up to 140 days",
              "It meets only when the courts allow it",
              "It meets every year for the full year",
            ],
            correctIndex: 1,
            explanation:
              "Texas's part-time Legislature holds a regular session only in odd years (140 days max); only the governor can call special sessions.",
            sourceLessonSlug: "tx-bill-to-law",
          },
          {
            prompt: "How can the Texas Legislature override the governor's veto?",
            options: [
              "With a simple majority of each chamber",
              "It cannot — the veto is final",
              "With a two-thirds vote of each chamber (though many vetoes arrive after the session ends)",
              "By a statewide referendum",
            ],
            correctIndex: 2,
            explanation:
              "A two-thirds vote of each chamber can override — but because the session is short, many vetoes come after adjournment and are never subject to an override vote.",
            sourceLessonSlug: "tx-bill-to-law",
          },
          {
            prompt: "Which statement about Texas local government is correct?",
            options: [
              "Texas has fewer counties than any state",
              "Texas has 254 counties (the most of any state) and NO townships; a commissioners court runs each county",
              "Texas counties are run by an elected mayor",
              "Every Texas town is a home-rule city",
            ],
            correctIndex: 1,
            explanation:
              "Texas has 254 counties — the most nationally — governed by a commissioners court (county judge + four precinct commissioners), and it has no townships.",
            sourceLessonSlug: "tx-local-government",
          },
          {
            prompt: "What do you need to vote in person in Texas, and what's the fallback?",
            options: [
              "Nothing — no ID is required",
              "An accepted photo ID; or, if you can't get one, a Reasonable Impediment Declaration plus a supporting document",
              "A passport only",
              "A witness signature",
            ],
            correctIndex: 1,
            explanation:
              "Texas requires an accepted photo ID; a voter who can't reasonably obtain one may sign a Reasonable Impediment Declaration and show a supporting document.",
            sourceLessonSlug: "tx-elections",
          },
          {
            prompt: "Can an ordinary Texas citizen put a new STATE law on the statewide ballot by petition?",
            options: [
              "Yes, with 5% of voters' signatures",
              "Yes, but only in odd years",
              "No — Texas has no statewide citizen initiative; only the Legislature can propose amendments",
              "Yes, through the commissioners court",
            ],
            correctIndex: 2,
            explanation:
              "Texas has no statewide citizen initiative; only the Legislature proposes constitutional amendments (by a two-thirds vote), which voters then ratify.",
            sourceLessonSlug: "tx-elections",
          },
        ],
      },
    },
  ],
};
