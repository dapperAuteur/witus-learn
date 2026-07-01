// Authored "Florida Civics: How Your State Government Works" — the Florida entry
// in the per-state Civics layer on Learn.WitUS. It is the state-level companion to
// the general Civics courses (US Civics 101, US Constitution 101, State vs Federal
// Power, and US, State & Local Government: Who Does What): those teach the SYSTEM;
// this teaches ONE state's specific version of it.
//
// Factual and strictly non-partisan (how Florida's government works, not who should
// win). Every content lesson is cited (APA 7 in-line + a `## Sources` bibliography)
// to FLORIDA'S OWN OFFICIAL SOURCES: the Florida Legislature / Online Sunshine
// (leg.state.fl.us) and the Florida Senate (flsenate.gov), the Department of State /
// Division of Elections (dos.fl.gov), the state courts (flcourts.gov), and the text
// of the Florida Constitution itself.
//
// Authoritative-values rule (load-bearing): state facts VARY and CHANGE. Where a
// figure is time-sensitive (deadlines, mail-ballot rules mid-transition, ID rules),
// the course SAYS SO and points the learner to Florida's own official source to
// confirm the current value, rather than freezing a number that could go stale.
// Florida-specific "recently changed / varies" items flagged in-text:
//   • Vote-by-mail: SB 90 (2021) and SB 524 (2022) tightened it — a request no longer
//     lasts multiple cycles; it expires at the end of the calendar year of the next
//     general election, and you must supply an ID number. Confirm current rules at
//     dos.fl.gov.
//   • The 60% supermajority threshold to pass an amendment was itself added in 2006
//     (Amendment 3); before 2006 a simple majority passed amendments.
//   • The Florida Cabinet was shrunk to three elected officers (AG, CFO, Agriculture
//     Commissioner) effective 2003 — older sources describe a larger Cabinet.
//
// The course is organized into sections (course modules) and ends with a fill-in
// exercise + a final quiz whose every question links back to the lesson that teaches
// the answer.

import type { AuthoredCourse } from "./authored-course";

export const STATE_CIVICS_FL_COURSE: AuthoredCourse = {
  title: "Florida Civics: How Your State Government Works",
  description:
    "A practical, non-partisan guide to how the state of Florida governs itself — and how you take part where you live. You'll learn Florida's 1968-revision constitution and its unusually many ways to amend it, including the once-every-20-years Constitution Revision Commission that can place proposals straight on the ballot, and the citizen-initiative petition — where any amendment now needs 60% of the vote to pass; the three branches, including Florida's distinctive plural executive (a Governor plus a separately-elected Cabinet: Attorney General, Chief Financial Officer, and Commissioner of Agriculture); how a bill becomes a Florida law in a 120-member House and 40-member Senate, with a two-thirds veto override; local government across Florida's 67 counties (charter vs. non-charter) and its municipalities — Florida has NO townships; and Florida's elections rules — closed primaries, voter ID, and vote-by-mail rules that were tightened in 2021–2022. It closes on how to get involved where you live. Cited to Florida's own official sources (leg.state.fl.us, flsenate.gov, dos.fl.gov, flcourts.gov, and the Florida Constitution). Because state facts vary and change, the course flags time-sensitive items — like the recently tightened mail-ballot rules and the 60% amendment threshold added in 2006 — and points you to Florida's own sources to confirm the current rule.",
  lessons: [
    // ── Section 1: The Florida Constitution ──────────────────────────────
    {
      slug: "fl-constitution",
      title: "1 · Florida's constitution: the 1968 rewrite and its many amendment paths",
      section: "The Florida Constitution",
      body: `Every U.S. state has its own constitution — its own top-level rulebook — layered *under* the U.S. Constitution but governing the daily machinery of the state. Florida's current constitution is the **1968 revision**: the Legislature drafted a wholesale rewrite, and the people ratified it in 1968, replacing the 1885 constitution (The Florida Senate, n.d.-a).

A state constitution does for the state what the U.S. Constitution does for the nation: it creates the branches, distributes power, and sets limits the legislature can't cross by ordinary law. What makes Florida's document distinctive is **how many different ways it can be amended** — more paths than almost any other state:

- **Legislative joint resolution** — the Legislature itself proposes an amendment (Florida Department of State, Division of Elections, n.d.-a).
- **Citizen initiative** — ordinary citizens gather signatures to put an amendment on the ballot (covered in the elections section). Florida *does* have a citizen initiative — unlike many Southern and Midwestern states.
- **Constitution Revision Commission (CRC)** — a body that meets only once every **20 years**, reviews the whole constitution, and can place its proposals **directly on the ballot** without any legislative approval. This is genuinely unusual — most states have nothing like it (Florida Department of State, Division of Elections, n.d.-a).
- **Taxation and Budget Reform Commission** — a narrower commission focused on the state's finances that can likewise refer proposals to the ballot.

**The one rule they all share — 60% to pass.** However an amendment reaches the ballot, it becomes part of the constitution only if **at least 60% of voters approve it** (Florida Department of State, Division of Elections, n.d.-a).

⚠️ **Time-sensitive / recently changed — flag it.** That **60% supermajority is itself a recent rule.** Florida voters added it in **2006 (Amendment 3)**; before then, a **simple majority** (more than 50%) was enough. So an amendment that would have passed in, say, 2004 with 55% would **fail** today. When you read older material about "passing an amendment," check whether it predates the 60% rule.

**Check yourself.** Name three ways the Florida Constitution can be amended, and state the single percentage of the vote any amendment now needs to pass — and when that threshold was adopted.

## Sources
- Florida Department of State, Division of Elections. (n.d.-a). *Constitutional amendments/initiatives*. DOS.fl.gov. https://dos.fl.gov/elections/laws-rules/constitutional-amendmentsinitiatives/
- The Florida Senate. (n.d.-a). *The Florida Constitution*. FLSenate.gov. https://www.flsenate.gov/laws/constitution`,
    },
    {
      slug: "fl-crc",
      title: "2 · The Constitution Revision Commission — Florida's once-in-20-years wildcard",
      section: "The Florida Constitution",
      body: `Most states can change their constitution only through the legislature or a citizen petition. Florida has a third route that is close to unique: the **Constitution Revision Commission (CRC)**.

**What it is.** The CRC is a **37-member** body that convenes automatically **once every 20 years** to review the *entire* Florida Constitution and recommend changes. Its members are appointed — 15 by the **Governor**, 9 by the **Senate President**, 9 by the **House Speaker**, and 3 by the **Chief Justice** of the Florida Supreme Court, plus the **Attorney General**, who serves automatically (Florida Constitution, Art. XI, §2; Florida Department of State, Division of Elections, n.d.-a).

**Why it's powerful.** The CRC's proposals go **directly to the ballot** — the Legislature does not get to approve, block, or edit them. That makes the CRC a rare body that can put constitutional questions to the voters on its own authority. (Like every amendment, its proposals still need 60% at the polls to take effect.)

**Its schedule is fixed by the constitution.** The CRC meets on a 20-year cycle: it convened in **1977–78, 1997–98, and 2017–18**. ⚠️ **Flag it:** by that schedule the next CRC would convene around **2037** — but treat any future date as *scheduled, not guaranteed*, and confirm the current status against the state, because a constitutional amendment could change or abolish the CRC (voters have been asked about it before).

**Why this matters civically.** In a CRC year, some of the amendments on your ballot didn't come from the Legislature *or* from a citizen petition — they came from an appointed commission most Floridians have never heard of. Knowing the CRC exists helps you understand *where a ballot amendment came from*, which is part of judging it.

**Check yourself.** How often does Florida's Constitution Revision Commission meet, and what can it do that makes it unusually powerful compared with commissions in other states?

## Sources
- Florida Department of State, Division of Elections. (n.d.-a). *Constitutional amendments/initiatives*. DOS.fl.gov. https://dos.fl.gov/elections/laws-rules/constitutional-amendmentsinitiatives/
- The Florida Senate. (n.d.-a). *The Florida Constitution* (Article XI — Amendments). FLSenate.gov. https://www.flsenate.gov/laws/constitution`,
    },

    // ── Section 2: The three state branches ──────────────────────────────
    {
      slug: "fl-three-branches",
      title: "3 · The three branches — and Florida's plural executive (Governor + Cabinet)",
      section: "The Three Branches",
      body: `Like the federal government, Florida splits its power into three branches — but its **executive** branch has a distinctive Florida shape.

**Legislative — the Florida Legislature.** A two-chamber (bicameral) legislature (The Florida Senate, n.d.-b):
- **House of Representatives — 120 members, 2-year terms.**
- **Senate — 40 members, 4-year terms** (staggered, so about half the Senate is up each election).
It writes state law and passes the budget. (Florida also term-limits its legislators to eight consecutive years in a chamber — a rule you can confirm in the constitution's Article VI.)

**Executive — a Governor PLUS a separately-elected Cabinet.** This is Florida's signature feature. The Governor is the chief executive, but Florida also elects, **statewide and independently of the Governor**, three other officers who together form the **Florida Cabinet** (Florida Constitution, Art. IV, §4):
- **Attorney General** — the state's chief legal officer.
- **Chief Financial Officer (CFO)** — the state's chief fiscal officer.
- **Commissioner of Agriculture and Consumer Services.**

Because these officials answer to the voters — not to the Governor — Florida's executive power is **shared, not concentrated**. On matters the constitution and statutes assign to the Cabinet (things like clemency, state lands, and certain agencies), the Governor and Cabinet act *together as a board*, and the Governor generally cannot act alone.

⚠️ **Flag it — the Cabinet changed.** The Cabinet used to be larger (it once included, for example, an elected Secretary of State, Comptroller, and Treasurer). Voters shrank it to today's **three** members, effective **2003**. Sources written before then describe a bigger Cabinet — confirm the current membership at the state (Florida Constitution, Art. IV).

**Judicial — the state courts.** Florida's court system runs from trial courts up through the **District Courts of Appeal (DCAs)** to the **Florida Supreme Court**. How Florida picks its *appellate* judges is covered in the next lesson.

**Check yourself.** Name Florida's three branches; give the size and term length of each legislative chamber; and name the three separately-elected officers who, with the Governor, make up the Florida Cabinet.

## Sources
- The Florida Senate. (n.d.-b). *The Florida Constitution* (Article III — Legislature; Article IV — Executive). FLSenate.gov. https://www.flsenate.gov/laws/constitution
- The Florida Senate. (n.d.-c). *FAQ — the Legislature*. FLSenate.gov. https://www.flsenate.gov/reference/faq`,
    },
    {
      slug: "fl-courts",
      title: "4 · Florida's courts: merit selection + retention for the top courts",
      section: "The Three Branches",
      body: `How does a state pick its judges? States do it very differently — some elect judges in contested races, some appoint them. Florida uses a **split system**: it depends on which court you're talking about.

**The appellate courts — merit selection, then retention.** For the **Florida Supreme Court** and the five **District Courts of Appeal (DCAs)**, Florida does *not* choose judges in contested popular elections. Instead (Florida Supreme Court, n.d.):
1. A **Judicial Nominating Commission (JNC)** — a nine-member panel — reviews applicants and sends the Governor a short list of nominees.
2. The **Governor appoints** a justice or judge from that list.
3. The justice/judge then periodically faces a **merit-retention vote** — a nonpartisan yes/no "shall this judge be retained?" every **six years**. There's no opponent; it's a performance check, not a campaign.

Florida voters adopted this merit-selection-plus-retention system for all appellate judges by constitutional amendment in the mid-1970s.

**The trial courts — elected.** Here's the Florida twist most people miss: the **trial courts** work differently. **Circuit court** judges and **county court** judges are chosen in **nonpartisan elections** — voters actually pick them in contested races (Florida Supreme Court, n.d.). So "merit selection" in Florida applies to the *appellate* courts, **not** to the trial-level judges you may also see on your ballot.

**Why this matters civically.** On a Florida ballot you may see **two different kinds of judicial races at once**: a contested *election* for a circuit or county judge, and a yes/no *retention* vote for a Supreme Court justice or DCA judge. Knowing which is which means you can vote each one thoughtfully instead of skipping it. When you want the exact rule for a specific court, the authoritative source is the Florida courts — flcourts.gov.

**Check yourself.** Explain Florida's three-step way of selecting Supreme Court and District Court of Appeal judges, and describe how that differs from how circuit and county (trial) judges are chosen.

## Sources
- Florida Supreme Court. (n.d.). *Merit selection, retention & retirement*. FLCourts.gov. https://supremecourt.flcourts.gov/the-court/about-the-court/justices/merit-selection-retention-retirement
- Florida Supreme Court. (n.d.). *Florida's court system*. FLCourts.gov. https://supremecourt.flcourts.gov/About-the-Court/Florida-s-Court-System`,
    },

    // ── Section 3: How a bill becomes a state law ────────────────────────
    {
      slug: "fl-bill-to-law",
      title: "5 · How a bill becomes a Florida law",
      section: "How a Bill Becomes State Law",
      body: `A bill in the Florida Legislature travels a path that rhymes with Congress but has its own steps and its own ending. Here's the route (The Florida Senate, n.d.-c).

1. **Introduction.** A legislator files a bill in their chamber (House or Senate). Florida's regular session is short — **60 days**, normally in the spring — so the calendar is tight and most bills never get heard.
2. **Committee.** The bill is referred to one or more committees, which study it, hold hearings, may amend it, and vote. **Most bills die in committee** — this is the biggest filter.
3. **Second and third readings / floor vote.** If it survives committee, the full chamber takes it up over the required readings, may amend it, and votes.
4. **The other chamber.** A bill that passes one chamber goes to the other and repeats the process. Because the House and Senate must pass **identical** text, differences get reconciled (often in a conference committee) before final passage.
5. **The Governor.** Once both chambers pass the same bill, it goes to the Governor, who can **sign** it, **let it become law without a signature**, or **veto** it. Florida's Governor also has a **line-item veto** over specific appropriations in a budget bill — the power to strike individual spending items.
6. **The veto override — two-thirds.** If the Governor vetoes, the Legislature can override with a **two-thirds vote of each chamber** (Florida Constitution, Art. III, §8). That's the same high bar Congress uses against a presidential veto — so an override in Florida is hard, and the Governor's veto is a strong tool.

**Check yourself.** Put these in order: committee, Governor's signature or veto, introduction, floor vote, the other chamber. Then state what fraction of each chamber it takes to override a Florida Governor's veto.

## Sources
- The Florida Senate. (n.d.-c). *FAQ — how a bill becomes a law*. FLSenate.gov. https://www.flsenate.gov/reference/faq
- The Florida Senate. (n.d.-b). *The Florida Constitution* (Article III, §8 — executive approval and veto). FLSenate.gov. https://www.flsenate.gov/laws/constitution`,
    },

    // ── Section 4: Local government in Florida ───────────────────────────
    {
      slug: "fl-local-government",
      title: "6 · Local government in Florida: 67 counties, charter vs. non-charter, and NO townships",
      section: "Local Government in Florida",
      body: `Florida's local government has a shape worth learning precisely — and one thing it *lacks* is as important as what it has: **Florida has no townships.**

**Counties — 67 of them.** Florida is divided into **67 counties**, and every square foot of the state is inside one (The Florida Senate, n.d.-b; Florida Constitution, Art. VIII). But not all counties are governed the same way — Florida splits them into two types:

- **Charter counties.** A county whose voters have adopted a local **charter** — a mini-constitution for the county. Charter counties have broad **home rule**: they can generally do anything not prohibited by state law, and can design their own structure of government. Roughly **20** of Florida's counties are charter counties (the number can change as counties adopt charters).
- **Non-charter counties.** The rest operate under the structure and powers **the state sets in general law** — a more limited, state-defined home rule. If a non-charter county wants to expand its powers or restructure, it has to work within what the Legislature allows.

⚠️ **Flag it:** the *exact* count of charter counties changes over time as voters adopt charters. Treat "about 20" as an authored-time figure and confirm the current list with the state (fl-counties data / the Legislature).

**Municipalities — cities, towns, and villages.** On top of counties, Florida has hundreds of incorporated **municipalities**. Florida law makes **no legal distinction** between the words "city," "town," and "village" — they're all municipalities with a governing council/commission and (usually) a mayor. Municipalities run local services where people are more densely settled.

**No townships — a real structural difference.** Many states (like Indiana or Pennsylvania) have a **township** layer between the county and the city. **Florida does not.** Florida's local government is essentially **two layers: counties and municipalities.** If you live in an unincorporated area (no city), your **county** is your local government; if you live inside a city, town, or village, you have **both** a county and a municipality. There's no township box in between.

**The practical payoff:** who provides your service depends on where you live — your city (if you're in one) or your county (if you're not). And knowing your county's **type** (charter vs. non-charter) tells you how much freedom it has to make its own rules.

**Check yourself.** How many counties does Florida have; what's the difference between a charter and a non-charter county; and what common local layer — found in states like Indiana — does Florida NOT have?

## Sources
- The Florida Senate. (n.d.-b). *The Florida Constitution* (Article VIII — Local Government). FLSenate.gov. https://www.flsenate.gov/laws/constitution
- Florida Legislature / Online Sunshine. (n.d.). *The 2024 Florida Statutes — Title XI, County Organization and Intergovernmental Relations*. Leg.state.fl.us. https://www.leg.state.fl.us/statutes/`,
    },

    // ── Section 5: Elections & ballot access ─────────────────────────────
    {
      slug: "fl-elections",
      title: "7 · Elections in Florida: closed primaries, voter ID, and recently tightened mail voting",
      section: "Elections & Ballot Access",
      body: `Elections are run by each state, so Florida's rules are specifically Florida's — and several of them changed recently. (Because rules like these change, the authoritative and current source is always the Florida Department of State's Division of Elections at dos.fl.gov, and your county Supervisor of Elections.)

**Closed primaries.** Florida is a **closed primary** state: in a party primary, **only voters registered in that party** may vote for that party's candidates. If you're registered with no party affiliation, you can't vote in either party's primary (Florida Department of State, Division of Elections, n.d.-b).
- **One big exception — the "universal primary contest."** If *all* the candidates for an office are from the same party **and** the primary winner will face **no** general-election opponent, then the primary is opened to **all** voters, regardless of party, for that office. In that situation the primary effectively *is* the election, so everyone gets a say.

**Voter ID at the polls.** To vote in person, Florida requires a current, valid **photo ID that includes a signature** (a Florida driver license, a Florida ID card, and several other listed IDs qualify). If your photo ID has no signature, you show a second ID that does; and if you can't provide ID, you may cast a **provisional** ballot (Florida Department of State, Division of Elections, n.d.-b).

⚠️ **Vote-by-mail was TIGHTENED in 2021–2022 — flag it.** Florida's mail-voting rules recently changed, and older guidance is now wrong:
- **Requests expire much faster.** Under **SB 90 (2021)** and **SB 524 (2022)**, a vote-by-mail request no longer carries across multiple election cycles. A request now covers elections only **through the end of the calendar year of the next regularly scheduled general election** — after that you must **request again** (Florida Department of State, Division of Elections, n.d.-c).
- **You must supply an ID number** (Florida driver license / ID number, or the last four digits of your Social Security number) to **request** a mail ballot.
- **Request deadline:** to have a ballot **mailed** to you, the request must reach your Supervisor of Elections **no later than 5 p.m. on the 12th day before the election** (Florida Department of State, Division of Elections, n.d.-c).

**Registration deadline — 29 days out.** You must be registered **29 days before** an election to vote in it; Florida does **not** offer same-day registration (Florida Department of State, Division of Elections, n.d.-b).

**Amendments need 60% (the ballot-access supermajority).** As Lesson 1 covered, any constitutional amendment on your ballot — legislative, citizen-initiative, or CRC — needs **at least 60%** of the vote to pass, a bar Florida added in 2006. This directly shapes ballot politics in Florida: a measure with clear majority support can still lose.

⚠️ **Confirm the current details.** ID lists, mail-ballot request rules, and deadlines are set by state law and have been changing. Verify the current rules at **dos.fl.gov** and with your county Supervisor of Elections before relying on any specific one.

**Check yourself.** What does "closed primary" mean in Florida, and what's the one exception; what recently changed about how long a vote-by-mail request lasts; and what share of the vote does a constitutional amendment need to pass?

## Sources
- Florida Department of State, Division of Elections. (n.d.-b). *For voters — voter registration, ID, and voting*. DOS.fl.gov. https://dos.fl.gov/elections/for-voters/
- Florida Department of State, Division of Elections. (n.d.-c). *Vote-by-mail*. DOS.fl.gov. https://dos.fl.gov/elections/for-voters/voting/vote-by-mail/
- The Florida Senate. (n.d.-d). *Senate Bill 90 (2021) — Elections*. FLSenate.gov. https://www.flsenate.gov/Session/Bill/2021/90`,
    },
    {
      slug: "fl-citizen-initiative",
      title: "8 · The citizen initiative: putting an amendment on the ballot yourself",
      section: "Elections & Ballot Access",
      body: `Here's a power Floridians have that residents of many states don't: the **citizen initiative** — the ability of ordinary citizens to gather signatures and put a **constitutional amendment** directly on the statewide ballot, without asking the Legislature (Florida Department of State, Division of Elections, n.d.-a).

**How it works, in outline.**
1. **Draft and register.** Sponsors write the amendment (it must stick to a **single subject**) and register a petition committee.
2. **Gather signatures.** They must collect valid petition signatures totaling **8% of the votes cast in the last presidential election**, and hit that threshold across at least **half of Florida's congressional districts** — so support has to be spread around the state, not just one metro area.
3. **State Supreme Court review.** Once enough signatures come in, the **Attorney General** asks the **Florida Supreme Court** for an advisory opinion checking the measure's **single-subject** compliance and whether its ballot **title and summary** are clear and not misleading. A measure that flunks this review is kept off the ballot.
4. **The 60% vote.** If it qualifies, it goes on the ballot — and, like every amendment, needs **at least 60%** of voters to pass (Florida Department of State, Division of Elections, n.d.-a).

**Why the 8% + geographic spread + 60% combination matters.** Together these are demanding thresholds. It's genuinely hard to (a) collect that many valid signatures across the state, (b) survive Supreme Court review, and (c) then clear 60% at the polls. That's *by design* — Florida makes citizen amendments possible but not easy.

⚠️ **Flag it — the rules here shift.** Signature thresholds, the geographic-distribution requirement, petition deadlines, and the mechanics of gathering/verifying signatures have been adjusted by the Legislature more than once and are a recurring subject of new bills. Treat the specifics above as the framework and confirm the **current** signature counts and deadlines at **dos.fl.gov** before starting a petition.

**Check yourself.** Describe the citizen-initiative path in Florida — roughly how many signatures, what the Florida Supreme Court checks, and what share of the vote it takes to pass.

## Sources
- Florida Department of State, Division of Elections. (n.d.-a). *Constitutional amendments/initiatives*. DOS.fl.gov. https://dos.fl.gov/elections/laws-rules/constitutional-amendmentsinitiatives/
- The Florida Senate. (n.d.-a). *The Florida Constitution* (Article XI, §3 — Initiative). FLSenate.gov. https://www.flsenate.gov/laws/constitution`,
    },

    // ── Section 6: Get involved where you live ───────────────────────────
    {
      slug: "fl-get-involved",
      title: "9 · Get involved where you live in Florida",
      section: "Get Involved Where You Live",
      body: `Knowing how Florida works only pays off when you **show up**. Florida gives residents several distinct levers — the Legislature, the ballot itself (initiatives and amendments), and local government — so here's where an engaged Floridian has leverage.

**Register and vote — mind Florida's deadlines and the party rule.** Register (and check your registration) **at least 29 days before** any election, since Florida has no same-day registration. Because Florida runs **closed primaries**, if you want a say in a party's primary you must be **registered in that party** by the deadline. Bring an acceptable **photo ID with a signature** to the polls. If you vote by mail, remember the rules **tightened** in 2021–2022: **re-request** your ballot (a prior request may have expired), give your **ID number**, and get the request in by **5 p.m. on the 12th day before** the election. Start at your county Supervisor of Elections and dos.fl.gov (Florida Department of State, Division of Elections, n.d.-b, n.d.-c).

**Contact your state legislators.** You have **one state representative** and **one state senator** in the Florida Legislature, on top of your members of Congress. Because Florida's regular session is only 60 days and most bills die in committee, contacting your legislators — and doing it **early**, before a committee votes — is where citizen input matters most. Look them up, read bills, and track committee calendars on **flsenate.gov** (the Senate) and the House site (The Florida Senate, n.d.-c).

**Use the ballot — but know the 60% bar.** If there's an issue you care about, Florida's **citizen initiative** (Lesson 8) lets you help put an amendment on the ballot, and you vote directly on amendments each cycle. Just remember any amendment needs **60%** to pass — so it's worth understanding *where* a measure came from (Legislature, citizen petition, or the CRC) and reading it carefully.

**Show up locally — county and municipality.** Your **county commission** and your **city/town/village council** meetings are public and set your local taxes and services. Whether your **county is charter or non-charter** shapes how much it can decide locally. These smaller rooms are where one person's comment moves things most — and since Florida has no townships, your local decisions come down to just those two layers.

**Cast your judicial votes thoughtfully.** On a Florida ballot you may see both a **contested election** for a circuit or county judge and a **yes/no retention vote** for an appellate judge (Lesson 4). Both are real decisions — read up before you fill them in rather than leaving them blank.

**Check yourself.** Name three specific ways to get involved in Florida government, and explain why contacting your state legislators *early* (before a committee vote) matters given Florida's 60-day session.

## Sources
- Florida Department of State, Division of Elections. (n.d.-b). *For voters — registration, ID, and voting*. DOS.fl.gov. https://dos.fl.gov/elections/for-voters/
- The Florida Senate. (n.d.-c). *FAQ / find your legislators / track legislation*. FLSenate.gov. https://www.flsenate.gov/reference/faq`,
    },

    // ── Section 7: Practice ──────────────────────────────────────────────
    {
      slug: "fl-practice",
      title: "10 · Practice: Florida civics fill-in",
      section: "Practice",
      exercise: {
        instructions:
          "Fill in each blank about Florida state government, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt: "Florida's current constitution is the ___ revision (the year the people ratified the wholesale rewrite).",
            answer: "1968",
            explanation:
              "Florida's current constitution is the 1968 revision, which replaced the 1885 constitution.",
          },
          {
            prompt:
              "Any amendment to the Florida Constitution now needs at least ___% of the vote to pass.",
            answer: "60",
            accept: ["60%", "sixty"],
            explanation:
              "A 60% supermajority is required — a rule Florida voters added in 2006 (Amendment 3). Before then a simple majority passed amendments.",
          },
          {
            prompt:
              "The Florida House has 120 members and the Florida ___ has 40 members.",
            answer: "senate",
            explanation:
              "The bicameral Legislature is a 120-member House (2-year terms) and a 40-member Senate (4-year staggered terms).",
          },
          {
            prompt:
              "Besides the Governor, the Florida Cabinet is made up of three separately-elected officers: the Attorney General, the Chief Financial Officer, and the Commissioner of ___.",
            answer: "agriculture",
            accept: ["agriculture and consumer services"],
            explanation:
              "The three elected Cabinet officers are the Attorney General, the CFO, and the Commissioner of Agriculture and Consumer Services — Florida's plural executive.",
          },
          {
            prompt: "Florida is divided into ___ counties.",
            answer: "67",
            accept: ["sixty-seven", "sixty seven"],
            explanation:
              "Florida has 67 counties; each is either a charter county (broad home rule) or a non-charter county (state-defined powers).",
          },
          {
            prompt:
              "The Florida Legislature can override the Governor's veto with a ___ vote of each chamber.",
            answer: "two-thirds",
            accept: ["two thirds", "2/3", "two-thirds majority"],
            explanation:
              "A two-thirds override in each chamber is required — the same high bar Congress uses against a presidential veto.",
          },
          {
            prompt:
              "TRUE or FALSE: Florida has a township layer of local government between counties and cities.",
            answer: "false",
            explanation:
              "False. Florida has NO townships — its local government is essentially two layers: counties and municipalities.",
          },
        ],
      },
    },

    // ── Section 8: Final quiz ────────────────────────────────────────────
    {
      slug: "fl-quiz",
      title: "11 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "What share of the vote does any amendment to the Florida Constitution now need to pass?",
            options: [
              "A simple majority (more than 50%)",
              "At least 60%",
              "Two-thirds (about 67%)",
              "Three-fourths (75%)",
            ],
            correctIndex: 1,
            explanation:
              "Any amendment needs at least 60% approval — a supermajority Florida voters added in 2006. Before then a simple majority was enough.",
            sourceLessonSlug: "fl-constitution",
          },
          {
            prompt: "What is distinctive about Florida's Constitution Revision Commission (CRC)?",
            options: [
              "It meets every year to rewrite the budget",
              "It meets once every 20 years and can place proposals directly on the ballot",
              "It is appointed by the U.S. President",
              "It replaces the Legislature during its session",
            ],
            correctIndex: 1,
            explanation:
              "The CRC convenes once every 20 years, reviews the whole constitution, and sends its proposals straight to the ballot without legislative approval — a genuinely unusual power.",
            sourceLessonSlug: "fl-crc",
          },
          {
            prompt: "Besides the Governor, who makes up the Florida Cabinet?",
            options: [
              "The Speaker, the Senate President, and the Chief Justice",
              "The Lieutenant Governor, Secretary of State, and Treasurer",
              "The separately-elected Attorney General, Chief Financial Officer, and Commissioner of Agriculture",
              "Three members appointed by the Governor",
            ],
            correctIndex: 2,
            explanation:
              "Florida's plural executive: the Governor plus three separately-elected officers — the AG, the CFO, and the Commissioner of Agriculture — who together form the Cabinet.",
            sourceLessonSlug: "fl-three-branches",
          },
          {
            prompt: "How does Florida select its Supreme Court and District Court of Appeal judges?",
            options: [
              "Partisan statewide elections",
              "Lifetime appointment by the Legislature",
              "Merit selection (nominating commission + governor) followed by yes/no retention votes",
              "Appointment by the U.S. President",
            ],
            correctIndex: 2,
            explanation:
              "Appellate judges are chosen by merit selection — a nominating commission sends the Governor a list, the Governor appoints, and the judge later faces a yes/no retention vote. (Trial-court judges, by contrast, are elected.)",
            sourceLessonSlug: "fl-courts",
          },
          {
            prompt: "How can the Florida Legislature override the Governor's veto?",
            options: [
              "With a simple majority of each chamber",
              "With a two-thirds vote of each chamber",
              "It cannot — the Governor's veto is final",
              "Only by a statewide referendum",
            ],
            correctIndex: 1,
            explanation:
              "A two-thirds vote in each chamber overrides a veto — the same high bar Congress uses, making Florida's gubernatorial veto a strong tool.",
            sourceLessonSlug: "fl-bill-to-law",
          },
          {
            prompt: "Which statement about Florida's local government is correct?",
            options: [
              "Florida has townships between its counties and cities",
              "Florida has 67 counties, split into charter and non-charter counties, and NO townships",
              "Florida has no counties, only municipalities",
              "Every Florida county has an identical, state-mandated structure",
            ],
            correctIndex: 1,
            explanation:
              "Florida has 67 counties — some charter (broad home rule), some non-charter (state-defined powers) — plus municipalities, and no township layer.",
            sourceLessonSlug: "fl-local-government",
          },
          {
            prompt: "What does it mean that Florida holds 'closed primaries'?",
            options: [
              "Anyone can vote in any party's primary",
              "Only voters registered in a party may vote in that party's primary (with a universal-primary exception)",
              "Primaries are held in secret with no public results",
              "Only incumbents may run in a primary",
            ],
            correctIndex: 1,
            explanation:
              "In a closed primary only that party's registered voters may vote for its candidates — except in a 'universal primary contest,' where all candidates are one party and the winner has no general-election opponent, which opens to all voters.",
            sourceLessonSlug: "fl-elections",
          },
          {
            prompt: "What recently changed about Florida's vote-by-mail rules (SB 90 in 2021, SB 524 in 2022)?",
            options: [
              "Vote-by-mail was abolished",
              "A mail-ballot request now expires faster (roughly by the end of the next general-election year) and you must supply an ID number",
              "Every voter is automatically mailed a ballot",
              "Mail ballots no longer require any deadline",
            ],
            correctIndex: 1,
            explanation:
              "The 2021–2022 laws shortened how long a request lasts (a request no longer carries across multiple cycles) and require an ID number to request a mail ballot — confirm current rules at dos.fl.gov.",
            sourceLessonSlug: "fl-elections",
          },
          {
            prompt: "Roughly what must a Florida citizen initiative collect to reach the ballot?",
            options: [
              "Nothing — the Governor puts it on the ballot",
              "Signatures equal to about 8% of the last presidential vote, spread across at least half the congressional districts, then Florida Supreme Court review",
              "A two-thirds vote of the Legislature",
              "Approval from every county commission",
            ],
            correctIndex: 1,
            explanation:
              "A citizen initiative needs signatures totaling about 8% of the last presidential vote across at least half of Florida's congressional districts, must survive a single-subject/ballot-summary review by the Florida Supreme Court, and then still needs 60% at the polls.",
            sourceLessonSlug: "fl-citizen-initiative",
          },
          {
            prompt: "Given Florida's 60-day session where most bills die in committee, when does contacting your legislators matter most?",
            options: [
              "After the Governor signs the bill",
              "Early — before the committee votes on the bill",
              "Only during a Constitution Revision Commission year",
              "Only in even-numbered years",
            ],
            correctIndex: 1,
            explanation:
              "Because committee is the biggest filter and the session is short, citizen input carries the most weight early, before a committee votes a bill up or down.",
            sourceLessonSlug: "fl-get-involved",
          },
        ],
      },
    },
  ],
};
