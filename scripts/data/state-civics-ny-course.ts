// Authored "New York Civics: How Your State Government Works", the New York entry
// in the per-state Civics layer on Learn.WitUS. It is the state-level companion to
// the general Civics courses (US Civics 101, US Constitution 101, State vs Federal
// Power, and US, State & Local Government: Who Does What): those teach the SYSTEM;
// this teaches ONE state's specific version of it.
//
// Factual and strictly non-partisan (how New York's government works, not who should
// win). Every content lesson is cited (APA 7 in-line + a `## Sources` bibliography)
// to NEW YORK'S OWN OFFICIAL SOURCES: the State Senate (nysenate.gov), the State
// Assembly (nyassembly.gov / assembly.state.ny.us), the Department of State's Local
// Government Handbook (dos.ny.gov), the Unified Court System and the Commission on
// Judicial Nomination (nycourts.gov, cjn.ny.gov), and the State Board of Elections
// (elections.ny.gov), plus the New York State Constitution itself.
//
// The signature New York "gotcha" this course gets RIGHT: New York's court NAMES are
// inverted relative to the federal system. The "Supreme Court" is the state's main
// TRIAL court, and the "Court of Appeals" is the state's HIGHEST court, the reverse
// of what the names suggest. The course teaches this explicitly.
//
// Authoritative-values rule (load-bearing): state facts VARY and CHANGE. Where a
// figure is time-sensitive (deadlines, rules mid-transition, offices recently
// reworked), the course SAYS SO and points the learner to New York's own official
// source to confirm the current value, rather than freezing a number that could go
// stale. Two New York "recently changed" items are flagged in-text:
//   • Mail voting changed after 2019: no-excuse EARLY MAIL voting was added by the
//     Early Mail Voter Act (in effect for 2024 elections), sitting alongside the
//     older, EXCUSE-required "absentee" ballot (two separate mail options).
//   • The Governor / Lieutenant Governor JOINT-TICKET reform: starting with the 2026
//     cycle the two run as a single ticket from the primary onward (the separate
//     lieutenant-governor primary was eliminated); they had already appeared together
//     on one line in the general election before that.
//
// The course is organized into sections (course modules) and ends with a fill-in
// exercise + a final quiz whose every question links back to the lesson that teaches
// the answer.

import type { AuthoredCourse } from "./authored-course";

export const STATE_CIVICS_NY_COURSE: AuthoredCourse = {
  title: "New York Civics: How Your State Government Works",
  description:
    "A practical, non-partisan guide to how the state of New York governs itself, and how you take part where you live. You'll learn New York's 1894 constitution and its distinctive automatic 20-year ballot question (\"shall we hold a constitutional convention?\"); the three state branches, including a separately-elected Attorney General and Comptroller and New York's famously INVERTED court names (the \"Supreme Court\" is the TRIAL court, while the \"Court of Appeals\" is the state's HIGHEST court, whose judges the Governor APPOINTS from a nominating commission's list with State Senate confirmation); how a bill becomes a New York law in a 150-member Assembly and 63-member Senate (a two-thirds override); local government across New York's 62 counties (including New York City's five boroughs) with strong home rule; and New York's elections rules: early voting, no-excuse early mail voting alongside excuse-required absentee ballots, closed party primaries, and NO statewide citizen initiative. It closes on how to get involved where you live. Cited to New York's own official sources (nysenate.gov, nyassembly.gov, dos.ny.gov, nycourts.gov, cjn.ny.gov, elections.ny.gov) and the State Constitution. Because state facts vary and change, the course flags time-sensitive items (like the post-2019 early-mail-voting change and the Governor/Lieutenant-Governor joint-ticket reform) and points you to New York's own sources to confirm the current rule.",
  lessons: [
    // ── Section 1: The New York Constitution ─────────────────────────────
    {
      slug: "ny-constitution",
      title: "1 · New York's constitution: the 1894 rulebook",
      section: "The New York Constitution",
      body: `Every U.S. state has its own constitution, its own top-level rulebook, layered *under* the U.S. Constitution but governing the daily machinery of the state. New York's current constitution was adopted in **1894** (and has been amended many times since), the product of a constitutional convention held that year (New York State Senate, n.d.-a).

A state constitution does for the state what the U.S. Constitution does for the nation: it creates the branches, distributes power, and sets limits the legislature can't cross by ordinary law. New York's is long and detailed, and two features shape everything else in this course:

- **A demanding amendment path.** New York doesn't let the legislature amend the constitution in a single vote. Under **Article XIX**, a proposed amendment must be **passed by a majority in both houses of TWO SUCCESSIVE, separately-elected Legislatures**, and *then* approved by the **voters** at a referendum (New York State Senate, n.d.-b). So it takes agreement across an intervening election plus a popular vote, deliberately slow.
- **The automatic 20-year convention question.** This is New York's signature constitutional feature. Every **20 years**, the state constitution **requires** a question to appear on the ballot: *"Shall there be a convention to revise the constitution and amend the same?"* Voters answer yes or no. If they say yes, delegates are elected and a convention is held; if no, the machinery just waits another 20 years (New York State Senate, n.d.-c). The most recent such mandatory question appeared in **2017** (voters said no), which sets the next automatic one for **2037**, though the legislature can also put a convention question on the ballot at other times.

**A structural fact worth flagging now:** in New York, ordinary citizens **cannot** start a statewide ballot measure by petition (there's no statewide citizen initiative, covered in the elections lesson). So *every* statewide constitutional change runs through either the legislature-plus-voters path or a convention. The 20-year question is the one moment the voters, not the legislature, decide whether to reopen the whole document.

**A note this course keeps returning to:** state facts **vary and change**. Rules and dates described here are current as of authoring, but the authoritative source is always New York's own government (the offices cited below), not a textbook. When something is time-sensitive, we say so.

**Check yourself.** In what year was New York's current constitution adopted, what two things must happen for an ordinary amendment to pass, and what question is New York required to put on the ballot every 20 years?

## Sources
- New York State Senate. (n.d.-a). *The New York State Constitution*. NYSenate.gov. https://www.nysenate.gov/new-york-state-constitution
- New York State Senate. (n.d.-b). *New York State Constitution, Article XIX (Amendments)*. NYSenate.gov. https://www.nysenate.gov/new-york-state-constitution
- New York State Senate. (n.d.-c). *What is the New York State constitutional convention?* NYSenate.gov. https://www.nysenate.gov/newsroom/articles/2017/velmanette-montgomery/what-new-york-state-constitutional-convention`,
    },

    // ── Section 2: The three state branches ──────────────────────────────
    {
      slug: "ny-three-branches",
      title: "2 · The three branches, and New York's plural executive",
      section: "The Three Branches",
      body: `Like the federal government, New York splits its power into three branches (legislative, executive, and judicial) but the details are distinctly New York's (New York State Senate, n.d.-d).

**Legislative: the New York State Legislature.** A two-chamber (bicameral) body:
- **Assembly: 150 members, 2-year terms.**
- **Senate: 63 members, 2-year terms.**
Both chambers are elected for two-year terms. The Assembly is led by a **Speaker**; the Senate's day-to-day leader is the **Temporary President** (the majority leader), while the **Lieutenant Governor** serves as the Senate's (largely ceremonial) president (New York State Senate, n.d.-d).

**Executive: a PLURAL executive.** The Governor is New York's chief executive, but several statewide offices are **elected separately by the voters**, not appointed by the Governor:
- **Governor** and **Lieutenant Governor**: the state's top executives (their joint-ticket rules are covered in the elections lessons).
- **Attorney General**: the state's chief legal officer, elected independently.
- **Comptroller**: the state's chief fiscal officer (audits, pension fund, financial oversight), elected independently.
Because the Attorney General and Comptroller answer to voters, not to the Governor, executive power in New York is **shared**, not concentrated in the Governor alone (New York State Senate, n.d.-d).

**Judicial: the state courts (with famously confusing names).** New York's court system is real-world confusing because its court **names are inverted** compared with the federal system: the trial court is called the "Supreme Court" and the top court is the "Court of Appeals." That inversion is important enough to get its own lesson next.

**Check yourself.** Name New York's three branches; give the size and term of each legislative chamber; and name two statewide executive officers (besides the Governor) whom New Yorkers elect separately.

## Sources
- New York State Senate. (n.d.-d). *Branches of government in New York State*. NYSenate.gov. https://www.nysenate.gov/branches-government-new-york-state
- New York State Senate. (n.d.-a). *The New York State Constitution*. NYSenate.gov. https://www.nysenate.gov/new-york-state-constitution`,
      recallContent: [
        { prompt: "In what year was New York's current constitution adopted?", answer: "1894. It came out of an 1894 constitutional convention and has been amended many times since." },
        { prompt: "What question must New York put on the ballot every 20 years?", answer: "Whether to hold a convention to revise the state constitution. The most recent was in 2017 (voters said no), so the next is 2037." },
      ],
    },
    {
      slug: "ny-courts",
      title: "3 · New York's courts: the inverted-names gotcha",
      section: "The Three Branches",
      body: `Here is New York's classic civics trap, and it trips up nearly everyone: **New York's court names are the reverse of the federal system's.** Learn this once and you'll never be confused again.

**The "Supreme Court" is the TRIAL court.** In the federal system, "the Supreme Court" means the single highest court in the land. **In New York it does not.** The **New York State Supreme Court** is the state's general **trial court**, the workhorse court where cases *start*, spread across judicial districts throughout the state (New York State Senate, n.d.-d; New York State Department of State, n.d.-a). It is emphatically **not** the top of the pyramid.

**The "Court of Appeals" is the HIGHEST court.** The court that sits at the very top of New York's system, its court of last resort, is the **New York State Court of Appeals** (New York State Court of Appeals, n.d.). Everywhere else "court of appeals" sounds like a mid-level appellate court; in New York it's *the* top court. In between sit the **Appellate Divisions** of the Supreme Court, which hear most appeals before a case can reach the Court of Appeals.

So the mental model to lock in:
- **Supreme Court** → trial court (cases *begin* here).
- **Appellate Division** → intermediate appeals.
- **Court of Appeals** → the state's HIGHEST court (final say on New York law).

**How Court of Appeals judges reach the bench: APPOINTED, not elected.** New York's top judges are **appointed**, through a process set by a **1977** constitutional amendment (New York State Commission on Judicial Nomination, n.d.):
1. A nonpartisan **Commission on Judicial Nomination** screens applicants and sends the Governor a short list of the most qualified candidates for a vacancy.
2. The **Governor must appoint** a judge **from that list** (the Governor cannot go outside the Commission's nominees).
3. The appointment requires the **advice and consent of the State Senate** (Senate confirmation).
A Court of Appeals judge serves a **14-year term** (with mandatory retirement at age 70). The court has a **Chief Judge plus six Associate Judges**, seven in all (New York State Court of Appeals, n.d.).

Note that many *other* New York judges (including trial-level Supreme Court justices and many local judges) are chosen by **election**, not by this appointment process. The "Governor appoints from a commission list" rule you just learned is specifically the path to the **Court of Appeals**, the state's highest court.

**Check yourself.** In New York, which court is the trial court and which is the highest court, and why is that the opposite of what the names suggest? Then describe the three steps by which a Court of Appeals judge is chosen.

## Sources
- New York State Court of Appeals. (n.d.). *New York State Court of Appeals - the State's highest court*. NYCourts.gov. https://www.nycourts.gov/ctapps/
- New York State Commission on Judicial Nomination. (n.d.). *About the Commission*. CJN.ny.gov. https://cjn.ny.gov/about
- New York State Department of State. (n.d.-a). *The judicial system* (Local Government Handbook). DOS.ny.gov. https://video.dos.ny.gov/lg/handbook/html/the_judicial_system.html`,
      recallContent: [
        { prompt: "How large are New York's two legislative chambers, and how long are their terms?", answer: "The Assembly has 150 members and the Senate has 63 members. Both are elected to 2-year terms." },
        { prompt: "Why is New York's executive called a 'plural' executive?", answer: "Because voters separately elect the Attorney General and the Comptroller, not just the Governor, so executive power is shared rather than held by the Governor alone." },
      ],
    },

    // ── Section 3: How a bill becomes a state law ────────────────────────
    {
      slug: "ny-bill-to-law",
      title: "4 · How a bill becomes a New York law",
      section: "How a Bill Becomes State Law",
      body: `A bill in the New York State Legislature travels a path that rhymes with Congress but has its own steps. Here's the route (New York State Senate, n.d.-e).

1. **Introduction.** A legislator files (sponsors) a bill in their chamber (Assembly or Senate). It's given a bill number and referred to a standing committee.
2. **Committee.** The committee studies the bill, may hold hearings, may amend it, and votes on whether to "report" it to the floor. **Most bills die in committee**. This is the biggest filter.
3. **Floor debate and vote.** If it's reported out, the full chamber debates the bill (readings), may amend it, and votes.
4. **The other chamber.** A bill that passes one house goes to the other and must pass there in the **same form**. Because both houses must pass **identical** text, differences have to be reconciled before a bill can advance.
5. **The Governor.** Once both houses pass the same bill, it goes to the Governor, who can **sign** it, **veto** it, or in some circumstances let it become law without signature.
6. **Override: a two-thirds vote.** If the Governor **vetoes**, the Legislature can override with a **two-thirds vote of the members in EACH house** (New York State Senate, n.d.-e). This mirrors the federal two-thirds override, unlike some states (e.g., Indiana) where a simple majority suffices. In practice, overrides in New York are uncommon and require a strong, sustained legislative majority.

**A New York wrinkle: the powerful executive budget.** New York's governor has a distinctive amount of leverage over the **budget** specifically. Under the state's "executive budget" system, the Governor proposes the budget and the Legislature's ability to change it is constrained, a feature that makes the New York governor unusually strong on the budget compared with governors in many other states. (For the precise current rules, consult the Legislature's own materials, since budget procedure is intricate and can be litigated.)

**Check yourself.** Put these in order: committee, Governor's signature or veto, introduction, floor vote, the other chamber. Then state the vote New York's Legislature needs to override a gubernatorial veto.

## Sources
- New York State Senate. (n.d.-e). *How a bill becomes a law*. NYSenate.gov. https://www.nysenate.gov/how-bill-becomes-law
- New York State Senate. (n.d.-d). *Branches of government in New York State*. NYSenate.gov. https://www.nysenate.gov/branches-government-new-york-state`,
      recallContent: [
        { prompt: "In New York, which court is the trial court and which is the highest court?", answer: "The 'Supreme Court' is the trial court where cases begin, and the 'Court of Appeals' is the state's highest court. The names are the reverse of the federal system." },
        { prompt: "How does someone become a judge on New York's Court of Appeals?", answer: "A Commission on Judicial Nomination sends the Governor a short list of candidates, the Governor must appoint from that list, and the State Senate must confirm the choice." },
      ],
    },

    // ── Section 4: Local government in New York ──────────────────────────
    {
      slug: "ny-local-government",
      title: "5 · Local government in New York: 62 counties and strong home rule",
      section: "Local Government in New York",
      body: `New York's local government has a distinctive shape, most notably the way **New York City's five boroughs** double as counties, and the state's strong tradition of **home rule** (New York State Department of State, n.d.-b).

**Counties: 62 of them, and the NYC twist.** New York has **62 counties**. Of these, **57** are counties outside New York City, and the remaining **5** are the counties that make up **New York City**, one per borough: **New York County (Manhattan), Kings County (Brooklyn), Queens County (Queens), Bronx County (the Bronx), and Richmond County (Staten Island)**. The five boroughs function as counties for many purposes, even though the *city* government (not five separate county governments) actually runs services in New York City (New York State Department of State, n.d.-b). Every part of the state lies within one of the 62 counties.

**Strong home rule.** New York grants counties, cities, towns, and villages **broad home-rule powers**, real authority to adopt local laws, charters, and regulations governing local affairs, rather than needing Albany's permission for every local decision (New York State Department of State, n.d.-c). Home rule is a defining feature of New York local government; it's why local governments can tailor a lot of policy to their own communities.

**Cities, towns, and villages: the general-purpose units.** Below (and alongside) counties, New York has three kinds of general-purpose local government:
- **Cities**: more urban, chartered municipalities (New York has 62 cities), typically with a mayor and council.
- **Towns**: cover the territory outside cities; **every part of a county outside its cities is inside a town**, so towns blanket the map.
- **Villages**: smaller incorporated communities that sit *within* towns and provide additional local services (there are several hundred villages statewide).

**Special districts.** On top of these, New York uses many **special districts**, single-purpose local units for things like fire protection, water, sewer, or lighting. So the "who provides my service?" answer can involve a city or town, a county, *and* one or more special districts layered on the same ground.

The practical payoff is the same as everywhere: **who provides your service depends on where you live**, and in New York, it may be your city, your town, your village, your county, or a special district. In New York City, uniquely, the five boroughs *are* counties, but it's the **city** that governs.

**Check yourself.** How many counties does New York have, and what is unusual about the five that make up New York City? Name the three general-purpose local governments below the county, and name the power New York is known for granting them.

## Sources
- New York State Department of State. (n.d.-b). *County government* (Local Government Handbook). DOS.ny.gov. https://video.dos.ny.gov/lg/handbook/html/county_government.html
- New York State Department of State. (n.d.-c). *Local government home rule power* (Local Government Handbook). DOS.ny.gov. https://video.dos.ny.gov/lg/handbook/html/local_government_home_rule_power.html`,
      recallContent: [
        { prompt: "What vote does New York's Legislature need to override the Governor's veto?", answer: "A two-thirds vote of the members in each house, the same threshold as the federal system." },
        { prompt: "Where do most New York bills die?", answer: "In committee. The committee decides whether to report a bill to the floor, and most never make it out, so it is the biggest filter." },
      ],
    },

    // ── Section 5: Elections & ballot access ─────────────────────────────
    {
      slug: "ny-elections",
      title: "6 · Elections in New York: early voting, closed primaries, no initiative",
      section: "Elections & Ballot Access",
      body: `Elections are run by each state, so New York's rules are specifically New York's, and several changed significantly after 2019. (Because rules like these change, the authoritative and current source is always the New York State Board of Elections at elections.ny.gov.)

**Early in-person voting.** New York offers a period of **early in-person voting** before Election Day, at designated poll sites, so you don't have to vote only on the single Tuesday. This was one of several access expansions New York adopted in recent years (New York State Board of Elections, n.d.-a).

**Two separate mail options, and one of them is now no-excuse.** This is a place people get confused, so read carefully:
- **Absentee ballot (EXCUSE required).** New York's traditional **absentee** ballot still requires you to qualify under a listed **excuse** (for example, illness/disability, absence from your county on Election Day, or certain other reasons).
- **Early mail ballot (NO excuse required).** Separately, New York's **Early Mail Voter Act** added a **no-excuse mail-voting** option: **any registered voter** may request an **early mail ballot** without giving a reason. This option took effect for New York's **2024** elections (New York State Board of Elections, n.d.-b).
You use **one or the other** for a given election: a voter issued an early mail ballot isn't also issued an absentee ballot for the same election. (Application deadlines differ by method and by whether you apply by mail or in person. Check the current deadlines at elections.ny.gov.)

⚠️ **Time-sensitive / recently changed: confirm current rules.** New York expanded mail and early voting rapidly after 2019, and details (deadlines, application methods, which reasons count as an "excuse") are set by law and can be adjusted. Verify the **current** rules and deadlines at **elections.ny.gov** before relying on a specific one.

**Closed party primaries.** New York runs **closed primaries**: only voters **enrolled in a party** may vote in that party's primary (New York State Board of Elections, n.d.-a). If you're registered without a party (or in a different party), you can't vote in another party's primary. And because party enrollment changes can have a **long lead time** in New York, switching parties to vote in a particular primary is something to plan well ahead. Check the Board of Elections for the current enrollment-change deadline.

**No statewide citizen initiative.** A big structural fact for ballot access: **New York has NO statewide citizen initiative.** In many Western states, ordinary citizens can gather signatures to put a proposed law or constitutional amendment directly on the statewide ballot. **In New York, they cannot.** Statewide ballot measures reach the ballot only when the **Legislature refers** them (a proposed constitutional amendment passed by two successive Legislatures, or a bond act), not by citizen petition. So in New York, "changing state law" means electing and lobbying legislators, not launching a statewide petition drive. (New York *does* allow various local referenda; this "no initiative" rule is about the **statewide** level.)

**Check yourself.** Explain the difference between New York's absentee ballot and its early mail ballot; say what a "closed primary" requires; and state whether a New York citizen can put a new statewide law on the ballot by petition.

## Sources
- New York State Board of Elections. (n.d.-a). *Ways to vote / registration and voting deadlines*. Elections.ny.gov. https://elections.ny.gov/ways-vote
- New York State Board of Elections. (n.d.-b). *Request a ballot (absentee and early mail)*. Elections.ny.gov. https://elections.ny.gov/request-ballot`,
      recallContent: [
        { prompt: "How many counties does New York have, and what is unusual about five of them?", answer: "New York has 62 counties. Five of them are the boroughs of New York City, though the city government (not five county governments) runs services there." },
        { prompt: "What are New York's three general-purpose local governments below the county, and what power is New York known for granting them?", answer: "Cities, towns, and villages. New York is known for strong home rule, broad authority to pass local laws without needing Albany's approval for every decision." },
      ],
    },
    {
      slug: "ny-recent-changes",
      title: "7 · Two New York rules that recently CHANGED (flagged)",
      section: "Elections & Ballot Access",
      body: `This lesson exists because of the course's core honesty rule: **state facts change**, and two New York election rules changed recently enough that older sources will mislead you. Both are flagged here so you check the current rule rather than trusting a stale one.

**1) No-excuse EARLY MAIL voting was added (in effect for 2024).** For most of its history, if you wanted to vote by mail in New York, you needed an **excuse** (the absentee-ballot rules). New York's **Early Mail Voter Act** changed that by creating a **separate, no-excuse early mail ballot** that any registered voter can request, a genuinely new option that took effect for the **2024** elections (New York State Board of Elections, n.d.-b).

⚠️ **The subtle part to flag:** the excuse-required **absentee** ballot **still exists** *alongside* the new no-excuse **early mail** ballot. New York didn't replace one with the other. So a source written before 2024 that says "New York requires an excuse to vote by mail" is now **incomplete**: it's true of the *absentee* ballot but not of the *early mail* ballot. Don't assume "New York = excuse required" anymore; confirm which mail option you mean at elections.ny.gov.

**2) The Governor / Lieutenant Governor JOINT-TICKET reform (2026 cycle).** New York elects a Governor and a Lieutenant Governor. Historically the two were **nominated in separate primaries** (a candidate could win the governor's primary while a *different* person won the lieutenant-governor primary) even though the two winners then ran **together on one line** in the November general election. New York changed this: beginning with the **2026** cycle, the candidates form a **joint ticket from the primary onward**, and the **separate lieutenant-governor primary was eliminated** (Ballotpedia, n.d.). The practical effect: a gubernatorial candidate now runs with a chosen running mate throughout, more like a presidential ticket.

⚠️ **Confirm which era a source describes.** Material written before this reform will describe **separate** lieutenant-governor primaries; material about 2026 and later describes a **joint ticket**. When in doubt, confirm the current nominating rule with the State Board of Elections.

**Why a whole lesson on two recent changes?** Because this is exactly where learners (and older textbooks) get tripped up, and it teaches the transferable skill: **when a source and current practice disagree, the state's own current site is the tiebreaker.** New York isn't unique in reworking election rules, every state does it, so the habit ("verify the *current* rule at the state's official source") matters more than memorizing today's answer.

**Check yourself.** What new no-excuse mail option did New York add, and why can a pre-2024 source mislead you about mail voting? And what changed about how New York nominates its Lieutenant Governor starting in 2026?

## Sources
- New York State Board of Elections. (n.d.-b). *Request a ballot (early mail and absentee)*. Elections.ny.gov. https://elections.ny.gov/request-ballot
- Ballotpedia. (n.d.). *New York gubernatorial and lieutenant gubernatorial election, 2026*. https://ballotpedia.org/New_York_gubernatorial_and_lieutenant_gubernatorial_election,_2026`,
      recallContent: [
        { prompt: "How do New York's two mail-ballot options differ?", answer: "The absentee ballot requires a listed excuse, while the early mail ballot (from the Early Mail Voter Act, in effect for 2024) is no-excuse for any registered voter. Both exist side by side." },
        { prompt: "Can an ordinary New York citizen put a new statewide law on the ballot by petition?", answer: "No. New York has no statewide citizen initiative, so statewide measures reach the ballot only when the Legislature refers them." },
      ],
    },

    // ── Section 6: Get involved where you live ───────────────────────────
    {
      slug: "ny-get-involved",
      title: "8 · Get involved where you live in New York",
      section: "Get Involved Where You Live",
      body: `Knowing how New York works only pays off when you **show up**. Because New York has a strong legislature, strong local home rule, and no statewide citizen initiative, those are exactly the places an engaged New Yorker has leverage.

**Register and vote: use New York's expanded options.** Check your registration and confirm the current deadlines at the State Board of Elections (elections.ny.gov). You can vote **early in person**, on Election Day, by **no-excuse early mail** ballot, or by **absentee** ballot if you qualify under an excuse. Remember New York's **closed primaries**: to vote in a party's primary you must be **enrolled** in that party, and enrollment changes can have a long lead time, so plan ahead (New York State Board of Elections, n.d.-a).

**Contact your state legislators: they're where statewide law is made.** You have **one Assembly member** and **one State Senator** in Albany, on top of your members of Congress. Because New York has **no statewide citizen initiative**, lobbying your legislators (and testifying on bills) is *the* way to change state law here. Look them up, read bills, and track legislation at **nysenate.gov** and **nyassembly.gov** (New York State Senate, n.d.-e).

**Weigh in on bills and the budget.** Most bills live or die in **committee**, so comment carries the most weight *before* a committee vote. New York's budget is powerful and moves fast each spring. If a budget item matters to you, engage early with your legislators while it's still being negotiated.

**Show up locally: county, city, town, village.** Thanks to New York's strong **home rule**, your **county legislature/board**, your **city council**, your **town board**, and your **village board** make real decisions about local laws, taxes, and services, and their meetings are public. These smaller rooms are where one person's comment moves things most. (In New York City, the five boroughs are counties, but it's the **City Council** and citywide offices that govern. Engage there.)

**Vote on the ballot questions, including the big one.** When statewide **ballot proposals** appear (legislatively referred amendments and bond acts), those are real decisions, not throwaway lines. Read up before you fill them in. And remember New York's **automatic 20-year convention question** (next due in **2037**): when it appears, *you*, the voter, decide whether to reopen the whole state constitution.

**Check yourself.** Name three specific ways to get involved in New York government, and explain why contacting your state legislators is especially important in New York given its lack of a statewide citizen initiative.

## Sources
- New York State Senate. (n.d.-e). *How a bill becomes a law / find your legislators*. NYSenate.gov. https://www.nysenate.gov/how-bill-becomes-law
- New York State Board of Elections. (n.d.-a). *Ways to vote / voter information*. Elections.ny.gov. https://elections.ny.gov/ways-vote`,
      recallContent: [
        { prompt: "Why can a source written before 2024 mislead you about voting by mail in New York?", answer: "Because it predates the no-excuse early mail ballot. The old 'excuse required' rule still fits the absentee ballot, but not the new early mail option that took effect for 2024." },
        { prompt: "Starting with the 2026 cycle, what changed about how New York nominates its Lieutenant Governor?", answer: "The Governor and Lieutenant Governor now run as a joint ticket from the primary onward, and the separate lieutenant-governor primary was eliminated." },
      ],
    },

    // ── Section 7: Practice ──────────────────────────────────────────────
    {
      slug: "ny-practice",
      title: "9 · Practice: New York civics fill-in",
      section: "Practice",
      exercise: {
        instructions:
          "Fill in each blank about New York state government, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt: "New York's current constitution was adopted in the year ___.",
            answer: "1894",
            explanation:
              "New York's current constitution dates to 1894 and has been amended many times since.",
          },
          {
            prompt:
              "Every ___ years, New York must ask voters whether to hold a constitutional convention.",
            answer: "20",
            accept: ["twenty"],
            explanation:
              "The 20-year automatic convention question is New York's signature constitutional feature; the most recent was 2017 (next: 2037).",
          },
          {
            prompt:
              "In New York, the trial court is confusingly named the ___ Court.",
            answer: "supreme",
            explanation:
              "New York's names are inverted: the 'Supreme Court' is the TRIAL court, while the Court of Appeals is the highest court.",
          },
          {
            prompt:
              "New York's highest court, its court of last resort, is the Court of ___.",
            answer: "appeals",
            explanation:
              "The Court of Appeals is New York's highest court; its judges are appointed by the Governor from a nominating commission's list, with Senate confirmation.",
          },
          {
            prompt:
              "The New York Assembly has 150 members and the New York ___ has 63 members.",
            answer: "senate",
            explanation:
              "New York's Legislature is a 150-member Assembly and a 63-member Senate, both elected to two-year terms.",
          },
          {
            prompt:
              "New York's Legislature can override the Governor's veto with a ___-thirds vote of each house.",
            answer: "two",
            accept: ["2", "two thirds", "two-thirds"],
            explanation:
              "New York mirrors the federal system: a two-thirds vote in each house overrides a gubernatorial veto.",
          },
          {
            prompt:
              "New York has ___ counties, five of which are the boroughs of New York City.",
            answer: "62",
            accept: ["sixty-two", "sixty two"],
            explanation:
              "New York has 62 counties; 57 lie outside New York City and 5 are the NYC boroughs (Manhattan, Brooklyn, Queens, the Bronx, Staten Island).",
          },
          {
            prompt:
              "TRUE or FALSE: an ordinary New York citizen can gather signatures to put a new statewide law directly on the ballot.",
            answer: "false",
            explanation:
              "False. New York has NO statewide citizen initiative; statewide measures reach the ballot only when the Legislature refers them.",
          },
        ],
      },
    },

    // ── Section 8: Final quiz ────────────────────────────────────────────
    {
      slug: "ny-quiz",
      title: "10 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "What question is New York required to put on the ballot every 20 years?",
            options: [
              "Whether to raise the state income tax",
              "Whether to hold a convention to revise the state constitution",
              "Whether to re-elect the Governor",
              "Whether to split New York City from the state",
            ],
            correctIndex: 1,
            explanation:
              "Every 20 years New York must ask voters, 'Shall there be a convention to revise the constitution and amend the same?' The most recent was 2017 (next 2037).",
            sourceLessonSlug: "ny-constitution",
          },
          {
            prompt: "In New York's court system, which statement is correct?",
            options: [
              "The Supreme Court is the highest court and the Court of Appeals is a trial court",
              "The Supreme Court is the trial court and the Court of Appeals is the highest court",
              "Both are trial courts",
              "The Court of Appeals is a federal court",
            ],
            correctIndex: 1,
            explanation:
              "New York inverts the names: the 'Supreme Court' is the general TRIAL court, while the 'Court of Appeals' is the state's HIGHEST court.",
            sourceLessonSlug: "ny-courts",
          },
          {
            prompt: "How are New York Court of Appeals judges selected?",
            options: [
              "Elected in partisan statewide races",
              "Appointed by the Governor from a nominating commission's list, with State Senate confirmation",
              "Appointed by the U.S. President",
              "Chosen by the Chief Judge alone",
            ],
            correctIndex: 1,
            explanation:
              "Since a 1977 amendment, the Governor must appoint Court of Appeals judges from the Commission on Judicial Nomination's list, with the advice and consent of the Senate; the term is 14 years.",
            sourceLessonSlug: "ny-courts",
          },
          {
            prompt: "What is the size of New York's two legislative chambers?",
            options: [
              "A 150-member Assembly and a 63-member Senate",
              "A 100-member Assembly and a 50-member Senate",
              "A 435-member House and a 100-member Senate",
              "A 63-member Assembly and a 150-member Senate",
            ],
            correctIndex: 0,
            explanation:
              "New York's Legislature is a 150-member Assembly and a 63-member Senate, both elected to two-year terms.",
            sourceLessonSlug: "ny-three-branches",
          },
          {
            prompt: "How can New York's Legislature override the Governor's veto?",
            options: [
              "With a simple majority of each house",
              "With a two-thirds vote of each house",
              "It cannot. The Governor's veto is final",
              "Only by a statewide referendum",
            ],
            correctIndex: 1,
            explanation:
              "New York requires a two-thirds vote in each house to override a gubernatorial veto, the same threshold as the federal system.",
            sourceLessonSlug: "ny-bill-to-law",
          },
          {
            prompt: "How many counties does New York have, and what is special about five of them?",
            options: [
              "50 counties; five are federal territory",
              "62 counties; five are the boroughs of New York City",
              "57 counties; five are in Long Island",
              "62 counties; five are unincorporated",
            ],
            correctIndex: 1,
            explanation:
              "New York has 62 counties; the five that make up New York City (Manhattan, Brooklyn, Queens, the Bronx, Staten Island) are counties, though the CITY governs.",
            sourceLessonSlug: "ny-local-government",
          },
          {
            prompt: "What is the difference between New York's absentee ballot and its early mail ballot?",
            options: [
              "They are the same thing",
              "The absentee ballot requires a listed excuse; the early mail ballot is no-excuse (any registered voter)",
              "The early mail ballot requires an excuse; the absentee ballot is no-excuse",
              "Only the absentee ballot still exists",
            ],
            correctIndex: 1,
            explanation:
              "New York's absentee ballot still requires an excuse, while the newer Early Mail Voter Act added a no-excuse early mail ballot (in effect for 2024). Both exist side by side.",
            sourceLessonSlug: "ny-elections",
          },
          {
            prompt: "What does New York's 'closed primary' rule require?",
            options: [
              "Any voter may vote in any party's primary",
              "Only voters enrolled in a party may vote in that party's primary",
              "Primaries are decided by the Legislature",
              "There are no primaries in New York",
            ],
            correctIndex: 1,
            explanation:
              "New York runs closed primaries: only voters enrolled in a party may vote in that party's primary, and enrollment changes can have a long lead time.",
            sourceLessonSlug: "ny-elections",
          },
          {
            prompt: "Can an ordinary New York citizen put a new statewide law on the ballot by petition?",
            options: [
              "Yes, with 5% of voters' signatures",
              "Yes, but only in odd years",
              "No. New York has no statewide citizen initiative; only the Legislature can refer statewide measures",
              "Yes, through the county legislature",
            ],
            correctIndex: 2,
            explanation:
              "New York has no statewide citizen initiative. Statewide ballot measures reach the ballot only when the Legislature refers them.",
            sourceLessonSlug: "ny-elections",
          },
          {
            prompt: "Starting with the 2026 cycle, what changed about how New York picks its Lieutenant Governor?",
            options: [
              "The office was abolished",
              "The Governor and Lieutenant Governor now run as a joint ticket from the primary onward (the separate LG primary was eliminated)",
              "The Lieutenant Governor is now appointed by the courts",
              "The Lieutenant Governor is now chosen by the Legislature",
            ],
            correctIndex: 1,
            explanation:
              "Beginning with the 2026 cycle, gubernatorial and lieutenant-gubernatorial candidates form a joint ticket from the primary onward, and the separate lieutenant-governor primary was eliminated.",
            sourceLessonSlug: "ny-recent-changes",
          },
        ],
      },
    },
  ],
};
