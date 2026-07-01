// Authored "Ohio Civics: How Your State Government Works" — the Ohio entry in the
// per-state Civics layer on Learn.WitUS. It is the state-level companion to the
// general Civics courses (US Civics 101, US Constitution 101, State vs Federal
// Power, and US, State & Local Government: Who Does What): those teach the SYSTEM;
// this teaches ONE state's specific version of it.
//
// Factual and strictly non-partisan (how Ohio's government works, not who should
// win). Every content lesson is cited (APA 7 in-line + a `## Sources` bibliography)
// to OHIO'S OWN OFFICIAL SOURCES: the Ohio Constitution and Revised Code (as hosted
// at codes.ohio.gov / Ohio Laws), the Ohio General Assembly / Ohio Legislature
// (legislature.ohio.gov, ohiosenate.gov, ohiohouse.gov), the Secretary of State /
// elections (ohiosos.gov), and the Ohio judicial branch (supremecourt.ohio.gov).
//
// Authoritative-values rule (load-bearing): state facts VARY and CHANGE. Where a
// figure is time-sensitive (signature thresholds tied to the last gubernatorial
// vote, ID lists, a rule that recently changed, or a threshold voters were ASKED to
// change), the course SAYS SO and points the learner to Ohio's own official source
// to confirm the current value, rather than freezing a number that could go stale.
// Ohio-specific "recently changed / gotcha" items flagged in-text:
//   • The 2023 (Aug. 8) Issue 1 attempt to raise the amendment threshold to 60%
//     FAILED — the citizen amendment bar is still a SIMPLE majority.
//   • Judicial GENERAL-election ballots gained PARTY LABELS starting with the 2022
//     cycle (SB 80, 2021) — Ohio's old "partisan primary / nonpartisan-looking
//     general" ballot changed.
//   • Statewide photo voter ID became required under HB 458 (signed Jan. 2023,
//     effective April 2023).
//   • The veto override is THREE-FIFTHS (3/5), not the two-thirds people expect.
//
// The course is organized into sections (course modules) and ends with a fill-in
// exercise + a final quiz whose every question links back to the lesson that teaches
// the answer.

import type { AuthoredCourse } from "./authored-course";

export const STATE_CIVICS_OH_COURSE: AuthoredCourse = {
  title: "Ohio Civics: How Your State Government Works",
  description:
    "A practical, non-partisan guide to how the state of Ohio governs itself — and how you take part where you live. You'll learn Ohio's 1851 constitution and its unusually STRONG direct democracy (the initiative and referendum Ohioans have held since 1912, letting citizens amend the constitution or make law by petition — with a citizen constitutional amendment still passing on a SIMPLE majority after voters rejected a 2023 attempt to raise the bar to 60%); the three branches, including a plural executive (a Governor and separately-elected Lieutenant Governor who run as a joint ticket, plus a separately-elected Attorney General, Secretary of State, Auditor, and Treasurer) and a 99-member House and 33-member Senate; how a bill becomes an Ohio law — including Ohio's unusual THREE-FIFTHS veto override (not two-thirds); Ohio's ELECTED judges (partisan primaries, and — since 2022 — party labels on the general-election ballot too); local government across Ohio's 88 counties, home-rule cities and villages, active townships, and special districts; and Ohio's elections rules — photo voter ID (since 2023), no-excuse early and absentee voting, and the citizen initiative/referendum process. It closes on how to get involved where you live. Cited to Ohio's own official sources (the Ohio Constitution/Revised Code, the Ohio General Assembly, ohiosos.gov, and the Ohio judicial branch). Because state facts vary and change, the course flags time-sensitive items — signature thresholds tied to the last governor's race, the 2023 photo-ID law, the 2021 judicial-ballot change, and the failed 2023 supermajority proposal — and points you to Ohio's own sources to confirm the current rule.",
  lessons: [
    // ── Section 1: The Ohio Constitution ─────────────────────────────────
    {
      slug: "oh-constitution",
      title: "1 · Ohio's constitution: the 1851 rulebook and its 1912 makeover",
      section: "The Ohio Constitution",
      body: `Every U.S. state has its own constitution — its own top-level rulebook — layered *under* the U.S. Constitution but governing the daily machinery of the state. Ohio is on its **second** constitution, adopted in **1851**, replacing the original 1802 statehood constitution (Ohio Secretary of State, n.d.-a; Constitution of Ohio, art. II).

A state constitution does for the state what the U.S. Constitution does for the nation: it creates the branches, distributes power, and sets limits the legislature can't cross by ordinary law. Ohio's 1851 document was heavily rewritten in one pivotal year — **1912** — when a state constitutional convention proposed a wave of amendments that voters approved. The single most important thing that came out of 1912 shapes this entire course:

- **Strong direct democracy — the initiative and referendum (since 1912).** In 1912 Ohioans amended the constitution to give **the people themselves** the power to make and unmake law: the **initiative** (citizens petition to propose a new law or a constitutional amendment) and the **referendum** (citizens petition to put a law the legislature passed up for a popular vote). This makes Ohio one of the **direct-democracy states** — not every state lets citizens legislate this way, and Ohio's version is comparatively robust (Ohio Secretary of State, n.d.-b).
- **Home rule for cities and villages (also 1912).** The same 1912 wave added **municipal home rule** (Article XVIII), giving Ohio cities and villages broad power to run their own local affairs — covered in the local-government lesson.

**The direct-democracy detail this course keeps returning to:** a **citizen-initiated constitutional amendment still passes on a SIMPLE majority** — 50% + 1 of the votes cast on it. That bar is exactly what a 2023 ballot measure (Issue 1) tried to raise to **60%** — and **voters rejected it** (we cover this in the elections section). So the simple-majority rule you just learned survived a very recent, very public attempt to change it. When you read older commentary, check whether it predates that August 2023 vote.

A state constitution is also **easier to amend than the U.S. Constitution**, and Ohio's — precisely because of that direct-democracy power — has been amended many times. That matters here: some things you'll learn are set in the constitution (harder to change), while others are set by ordinary law (the General Assembly can change them, and sometimes does — we'll flag those).

**A note this course keeps returning to:** state facts **vary and change**. Thresholds, ID lists, and rules described here are current as of authoring, but the authoritative source is always Ohio's own government (the Ohio Constitution/Revised Code and the offices below), not a textbook. When something is time-sensitive, we say so.

**Check yourself.** In what year did Ohio adopt its current constitution, what pivotal power did the 1912 amendments give directly to the people, and what majority does a citizen-initiated constitutional amendment still need to pass?

## Sources
- Ohio Secretary of State. (n.d.-a). *Ohio history and the Ohio Constitution.* Ohiosos.gov. https://www.ohiosos.gov/
- Ohio Secretary of State. (n.d.-b). *Putting an issue on the ballot in Ohio.* Ohiosos.gov. https://www.ohiosos.gov/legislation-and-ballot-issues/putting-an-issue-on-the-ballot/
- Constitution of the State of Ohio, art. II (Legislative). Ohio Laws. https://codes.ohio.gov/ohio-constitution/article-2`,
    },

    // ── Section 2: The three state branches ──────────────────────────────
    {
      slug: "oh-three-branches",
      title: "2 · The three branches — and Ohio's plural executive",
      section: "The Three Branches",
      body: `Like the federal government, Ohio splits its power into three branches — but each branch has details that are distinctly Ohio's.

**Legislative — the Ohio General Assembly.** A two-chamber (bicameral) legislature (Ohio General Assembly, n.d.; Constitution of Ohio, art. II):
- **House of Representatives — 99 members, 2-year terms.**
- **Senate — 33 members, 4-year terms.**
It writes state law and passes the state budget. (Ohio also has legislative **term limits**, adopted by the voters in 1992.)

**Executive — a PLURAL executive.** Ohio's chief executive is the **Governor**, but executive power is deliberately spread across **several separately-elected statewide officers**, each elected on a partisan ballot to a 4-year term (Ohio Secretary of State, n.d.-c; Constitution of Ohio, art. III):
- **Governor** and **Lieutenant Governor** — a distinctive Ohio detail: they run together as a **single JOINT TICKET** in both the primary and the general election (you can't file for one alone). So Ohio elects a Governor and a Lieutenant Governor as a pair — but the other executive officers below are elected entirely on their own.
- **Attorney General** — the state's chief lawyer.
- **Secretary of State** — Ohio's chief elections officer.
- **Auditor of State** — audits state and local finances.
- **Treasurer of State** — the state's banker/custodian of funds.

Because the Attorney General, Secretary of State, Auditor, and Treasurer answer to **voters**, not to the Governor, the Governor does **not** control them. Executive power in Ohio is **shared**, not concentrated in one office. (A practical example: Ohio's elections are run by the separately-elected **Secretary of State**, not by the Governor.)

**Judicial — the state courts.** Ohio's court system runs from trial courts up through the intermediate **Courts of Appeals** to the **Supreme Court of Ohio** (seven justices). How Ohio picks these judges — by **election** — is distinctive and gets its own lesson next.

**Ohio's veto-override number to remember — three-fifths.** One number here is a classic Ohio "gotcha," so plant it now: to override the Governor's veto, each chamber needs a **three-fifths (3/5)** vote — **not** the two-thirds people assume from Congress. We work through it fully in the bill-to-law lesson.

**Check yourself.** Name Ohio's three branches, give the size and term length of each legislative chamber, name the six separately-elected statewide executive officers, and say which two of them must run together on a joint ticket.

## Sources
- Ohio General Assembly. (n.d.). *About the Ohio General Assembly / the legislative process.* Legislature.ohio.gov. https://www.legislature.ohio.gov/publications/the-legislative-process
- Ohio Secretary of State. (n.d.-c). *Candidate requirement guide (statewide offices).* Ohiosos.gov. https://www.ohiosos.gov/
- Constitution of the State of Ohio, art. III (Executive). Ohio Laws. https://codes.ohio.gov/ohio-constitution/article-3`,
    },
    {
      slug: "oh-courts",
      title: "3 · Ohio's courts: elected judges — and a 2021 ballot change",
      section: "The Three Branches",
      body: `How does a state pick its judges? States do it very differently — some appoint them, some use merit selection, and some, like Ohio, **elect** them. Ohio's method has a wrinkle that changed recently, so it's worth getting exactly right.

**Ohio ELECTS its judges.** For the **Supreme Court of Ohio** (seven justices, including the Chief Justice) and the intermediate **Courts of Appeals**, Ohioans choose judges in **popular elections** — six-year terms. Trial-court judges are elected too. So unlike states that appoint their top judges, in Ohio the judges who interpret state law appear on **your ballot** (Supreme Court of Ohio, n.d.; Ballotpedia, n.d.-a).

**The distinctive old system — and the 2021 change (flag this).** Ohio's judicial elections used to work in an unusual "split" way, sometimes called the "Michigan method":
- Judicial candidates ran in **partisan PRIMARIES** (nominated by party), **but**
- On the **general-election ballot**, their names appeared **without party labels** — a nonpartisan-looking general election.

⚠️ **Recently changed — confirm the current ballot.** In **2021**, Ohio enacted **Senate Bill 80**, which added **party labels to the general-election ballot** for Supreme Court and Court of Appeals races, starting with the **2022** elections. So the old "partisan primary, nonpartisan-looking general" description is now **out of date** for those top courts: today a general-election voter sees each Supreme Court and appeals candidate's **party** on the ballot (Ballotpedia, n.d.-b). If you read a civics text written before 2022, it may still describe the old nonpartisan-general system — verify the current ballot format with the Secretary of State or the courts.

**Why this matters civically:** because Ohioans *elect* their judges (and now see party labels for the top courts), those judicial races are real, contested decisions on your ballot — not lines to skip. Knowing the current format means you can vote those races deliberately.

**Check yourself.** How does Ohio choose its Supreme Court justices — appointment or election? Describe Ohio's old "partisan primary / nonpartisan general" system and the 2021 change (SB 80) that put party labels on the general-election ballot for the top courts.

## Sources
- Supreme Court of Ohio. (n.d.). *About the Court / judicial elections.* Supremecourt.ohio.gov. https://www.supremecourt.ohio.gov/
- Ballotpedia. (n.d.-a). *Ohio judicial elections.* https://ballotpedia.org/Ohio_judicial_elections
- Ballotpedia. (n.d.-b). *Judicial selection in Ohio (Senate Bill 80, 2021).* https://ballotpedia.org/Judicial_selection_in_Ohio`,
    },

    // ── Section 3: How a bill becomes a state law ────────────────────────
    {
      slug: "oh-bill-to-law",
      title: "4 · How a bill becomes an Ohio law — the 3/5 override",
      section: "How a Bill Becomes State Law",
      body: `A bill in the Ohio General Assembly travels a path that rhymes with Congress but has its own steps and — crucially — its own veto-override number. Here's the route (Ohio Senate, n.d.; Ohio General Assembly, n.d.).

1. **Introduction (first consideration).** A legislator introduces a bill in their chamber (House or Senate). In Ohio, simply introducing the bill counts as its **"first consideration."**
2. **Committee (second consideration).** Referring the bill to a **committee** is its **"second consideration."** The committee studies it, holds hearings, may amend it, and votes. **Most bills die in committee** — this is the biggest filter.
3. **Floor / third consideration.** If it survives committee, the full chamber takes it up on the floor (its **"third consideration"**), may amend it, and votes. In the Senate a bill needs a majority of the votes cast (**17 of 33**) to pass; in the House it needs a majority as well.
4. **The other chamber.** A bill that passes one chamber goes to the other and repeats the whole process. If the second chamber changes it, the two versions must be reconciled (often in a **conference committee**) so both chambers pass **identical** text.
5. **The Governor.** Once both chambers pass the same bill (now an "act"), it goes to the **Governor**, who can **sign** it, **let it become law without a signature**, or **veto** it. Ohio's Governor also has a **line-item veto** on appropriations bills.
6. **The Ohio twist — a THREE-FIFTHS override.** If the Governor vetoes, the General Assembly can override — but the number is the Ohio gotcha: **three-fifths (3/5) of the members elected to EACH chamber**, which works out to **60 of 99 in the House and 20 of 33 in the Senate** (Constitution of Ohio, art. II, §16). That is **not** the **two-thirds** Congress needs to override a presidential veto. Ohio's 3/5 bar is **lower** than the federal two-thirds — a distinctive, easy-to-miss detail.

**Check yourself.** Put these in order: committee (second consideration), Governor's signature or veto, introduction (first consideration), floor vote (third consideration), the other chamber. Then state the exact fraction — and the raw vote counts — Ohio needs to override a veto, and say how that differs from Congress.

## Sources
- Ohio Senate. (n.d.). *How a bill becomes a law.* Ohiosenate.gov. https://ohiosenate.gov/about/how-a-bill-becomes-a-law
- Ohio General Assembly. (n.d.). *The legislative process.* Legislature.ohio.gov. https://www.legislature.ohio.gov/publications/the-legislative-process
- Constitution of the State of Ohio, art. II, §16 (When laws take effect; veto; override). Ohio Laws. https://codes.ohio.gov/ohio-constitution/section-2.16`,
    },

    // ── Section 4: Local government in Ohio ──────────────────────────────
    {
      slug: "oh-local-government",
      title: "5 · Local government in Ohio: 88 counties, home rule, townships",
      section: "Local Government in Ohio",
      body: `Ohio's local government stacks several layers — counties, cities and villages, townships, and special districts — and a defining Ohio feature is how much **self-government power** its cities and villages have.

**Counties — all 88 of them.** Ohio is divided into **88 counties**, and every square foot of the state is inside one. A traditional Ohio county is run by an elected **Board of County Commissioners** (usually three) plus other separately elected county officials (auditor, treasurer, prosecutor, sheriff, recorder, clerk of courts, engineer, coroner). A few counties have adopted **charters** to reorganize this (Ohio General Assembly, n.d.; Ohio.gov, n.d.).

**Home-rule cities and villages (Article XVIII, since 1912).** This is Ohio's signature local feature. The 1912 constitution granted Ohio **municipalities** (cities and villages) **home rule** — broad "powers of local self-government," and the ability to adopt their own **charter** and ordinances — so long as they don't conflict with general state law (Constitution of Ohio, art. XVIII). In Ohio, a city can do a lot on its own initiative rather than waiting for the legislature's permission — that's what "home rule" means, and it makes Ohio municipalities comparatively powerful. (The recurring tension is when a **local ordinance conflicts with a state "general law"** — the state law generally wins.)

**Townships — still active in Ohio.** Ohio keeps an active **township** layer that many states have weakened or dropped. Townships (governed by an elected board of **trustees** plus a fiscal officer) provide services — roads, fire, zoning in the parts of a county not inside a city or village. If you live in an unincorporated area, your **township** is a real unit of government, not a leftover on a map (Ohio General Assembly, n.d.).

**Special districts.** On top of all that, Ohio has hundreds of **special districts** — single-purpose local governments for things like parks, libraries, transit, soil-and-water conservation, or specific services — each with its own board and (often) its own levy on the ballot.

⚠️ **Time-sensitive / varies — confirm counts and structure.** The exact number of Ohio municipalities, townships, and special districts, and whether a given county or city has adopted a **charter**, all shift over time. Treat any specific count as an authored-time snapshot and confirm the current structure with the state and your county (via Ohio.gov and your county's site), not a fixed textbook number.

The practical payoff is the same as everywhere: **who provides your service depends on where you live** — it might be your city, your village, your county, your township, or a special district. Ohio's strong municipal home rule just means your **city or village** can set more of its own rules than in many states.

**Check yourself.** How many counties does Ohio have, what is "home rule" and which 1912 constitutional article grants it to cities and villages, and what does an Ohio township do for people who live in unincorporated areas?

## Sources
- Constitution of the State of Ohio, art. XVIII (Municipal Corporations — home rule). Ohio Laws. https://codes.ohio.gov/ohio-constitution/article-18
- Ohio General Assembly. (n.d.). *Ohio Revised Code, Title 3 (Counties) & Title 5 (Townships).* Ohio Laws. https://codes.ohio.gov/ohio-revised-code
- Ohio.gov. (n.d.). *Local government resources.* https://ohio.gov/government/resources/local-government`,
    },

    // ── Section 5: Elections & ballot access ─────────────────────────────
    {
      slug: "oh-elections",
      title: "6 · Elections in Ohio: photo ID (2023), early voting, and the ballot initiative",
      section: "Elections & Ballot Access",
      body: `Elections are run by each state, so Ohio's rules are specifically Ohio's — administered by the separately-elected **Secretary of State**. Several rules changed recently, so this lesson flags what's new. (Because rules like these change, the authoritative and current source is always the Ohio Secretary of State at ohiosos.gov.)

**Photo voter ID — required since 2023 (flag this).** ⚠️ To vote **in person** in Ohio you now generally must show an **unexpired photo ID** — such as an Ohio driver's license or state ID, a U.S. passport, or a military ID. This is a **recent change**: it came from **House Bill 458**, signed in **January 2023** and effective in **April 2023**; before that Ohio accepted several non-photo IDs (like a current utility bill or bank statement). HB 458 also tightened absentee-ballot deadlines and limited each county to **one drop box**. Because the exact accepted-ID list and deadlines are set by law and can change, confirm the current requirements at **ohiosos.gov** (Ohio Secretary of State, n.d.-d).

**No-excuse early and absentee voting.** Ohio offers **no-excuse absentee voting** — any registered Ohio voter may vote **early**, in person during an early-voting period or **by mail**, **without** needing a listed excuse. (Under HB 458, mail-ballot requests and returns have tighter deadlines than before, and mail voters must supply a photo-ID number or the last four digits of their Social Security number.) Confirm the current early-voting calendar and mail deadlines with the Secretary of State (Ohio Secretary of State, n.d.-d).

**Registration closes ~30 days out.** Ohio does **not** offer Election-Day registration. You must be registered about **30 days before** an election to vote in it — verify the exact deadline at ohiosos.gov.

**Ohio's strong direct democracy — the citizen initiative and referendum.** This is where Ohio stands out. Ordinary Ohioans can put measures on the statewide ballot by petition (Ohio Secretary of State, n.d.-b):
- **Initiated constitutional amendment** — citizens can propose a change to the **constitution** by gathering valid signatures equal to **10% of the last gubernatorial vote**, from at least **44 of Ohio's 88 counties**. It then goes on the ballot and passes on a **SIMPLE majority (50% + 1)**.
- **Initiated statute** — citizens can propose a **law** (a lower **6%** signature threshold; Ohio's is technically an *indirect* process that goes to the legislature first).
- **Referendum** — citizens can petition to put a law the legislature already passed up for a popular **yes/no vote** to keep or reject it.

⚠️ **The 2023 Issue 1 gotcha — the simple-majority bar SURVIVED.** In an **August 8, 2023** special election, Ohioans voted on **Issue 1**, which would have **raised** the bar to pass a citizen constitutional amendment from a simple majority to **60%** (and made petitioning harder). **It FAILED, about 57% to 43%** (Ballotpedia, n.d.-c). So as of authoring, a citizen constitutional amendment in Ohio **still passes on a simple majority** — the 60% supermajority was **rejected by the voters**. If you see older material claiming Ohio requires (or is about to require) 60%, it's either predicting that failed measure or is out of date; confirm the current rule at ohiosos.gov.

**Check yourself.** Name Ohio's in-person ID requirement and the 2023 law that created it; say whether Ohio has no-excuse early/absentee voting; state the signature threshold and passing majority for a citizen constitutional amendment; and explain what 2023's Issue 1 tried to do and how it turned out.

## Sources
- Ohio Secretary of State. (n.d.-b). *Putting an issue on the ballot in Ohio (citizen-initiated amendments, statutes, referendum).* Ohiosos.gov. https://www.ohiosos.gov/legislation-and-ballot-issues/putting-an-issue-on-the-ballot/
- Ohio Secretary of State. (n.d.-d). *Voter identification & voting (HB 458 changes).* Ohiosos.gov. https://www.ohiosos.gov/elections/voters/
- Ballotpedia. (n.d.-c). *Ohio Issue 1, 60% vote requirement to approve constitutional amendments measure (Aug. 2023).* https://ballotpedia.org/Ohio_Issue_1,_60%25_Vote_Requirement_to_Approve_Constitutional_Amendments_Measure_(2023)`,
    },
    {
      slug: "oh-recent-changes",
      title: "7 · Four Ohio rules that recently CHANGED (flagged)",
      section: "Elections & Ballot Access",
      body: `This lesson exists because of the course's core honesty rule: **state facts change**, and several Ohio rules changed recently enough that older sources will mislead you. They're gathered here so you check the current rule rather than trusting a stale one — and so you learn the transferable habit: **when a source and Ohio's own site disagree, the state's current site is the tiebreaker.**

**1) Judicial ballots gained PARTY LABELS (2021 → 2022 elections).** Ohio long used a "partisan primary, nonpartisan-looking general" ballot for its top courts. **Senate Bill 80 (2021)** added **party labels to the general-election ballot** for Supreme Court and Court of Appeals races, starting in **2022**. If a text says Ohio's judicial *general* elections are "nonpartisan," it predates this change (Ballotpedia, n.d.-b).

**2) Photo voter ID became required (HB 458, effective April 2023).** Ohio switched from accepting several non-photo IDs to requiring an **unexpired photo ID** to vote in person, and tightened mail-ballot and drop-box rules. Sources written before 2023 describe the older, looser ID rules (Ohio Secretary of State, n.d.-d).

**3) The amendment threshold stayed at a SIMPLE majority — the 60% attempt failed (Aug. 2023).** Ohio's legislature put **Issue 1** on a special-election ballot to raise the bar for citizen constitutional amendments to **60%**. **Voters rejected it (~57%–43%).** So the rule *didn't* change — but a lot of 2023 commentary discussed the proposed 60% as if it might pass. The current bar is still **50% + 1** (Ballotpedia, n.d.-c).

**4) Veto override is THREE-FIFTHS, not two-thirds.** This one didn't "change," but it's the most common Ohio civics error. People assume the federal **two-thirds** applies. Ohio's constitution sets the override at **three-fifths (3/5)** of each chamber — **60 House / 20 Senate** — a lower bar than the federal one (Constitution of Ohio, art. II, §16).

**Why a whole lesson on recent changes?** Because this is exactly where learners get tripped up, and it teaches the durable skill: **verify the office's, ballot's, or threshold's CURRENT rule against Ohio's own site**, rather than memorizing whatever a possibly-outdated source says. Ohio isn't unusual in changing its rules — every state does — so the habit matters more than today's specific answer.

**Check yourself.** For each of the four items above, state what the current Ohio rule is and why an older source might state it wrong.

## Sources
- Ballotpedia. (n.d.-b). *Judicial selection in Ohio (Senate Bill 80, 2021).* https://ballotpedia.org/Judicial_selection_in_Ohio
- Ballotpedia. (n.d.-c). *Ohio Issue 1, 60% vote requirement to approve constitutional amendments measure (Aug. 2023).* https://ballotpedia.org/Ohio_Issue_1,_60%25_Vote_Requirement_to_Approve_Constitutional_Amendments_Measure_(2023)
- Ohio Secretary of State. (n.d.-d). *Voter identification & voting (HB 458 changes).* Ohiosos.gov. https://www.ohiosos.gov/elections/voters/
- Constitution of the State of Ohio, art. II, §16 (veto; override). Ohio Laws. https://codes.ohio.gov/ohio-constitution/section-2.16`,
    },

    // ── Section 6: Get involved where you live ───────────────────────────
    {
      slug: "oh-get-involved",
      title: "8 · Get involved where you live in Ohio",
      section: "Get Involved Where You Live",
      body: `Knowing how Ohio works only pays off when you **show up**. Because Ohio combines a strong legislature, elected judges, powerful home-rule cities, **and** a real citizen initiative/referendum, an engaged Ohioan has an unusually wide set of levers.

**Register and vote — mind Ohio's rules.** Register (and check your registration) **about 30 days before** any election, since Ohio has no Election-Day registration. Bring your **photo ID** to the polls (a 2023 change). If you'd rather vote early or by mail, you can — Ohio has **no-excuse** early and absentee voting — but confirm the current deadlines and ID requirements at the Secretary of State's site (Ohio Secretary of State, n.d.-d).

**Contact your state legislators — and track bills.** You have **one state representative** and **one state senator** in the General Assembly, on top of your members of Congress. Look them up, read bills, and follow committee schedules at the Ohio General Assembly's site — comment carries the most weight **before** a committee votes, since that's where most bills live or die (Ohio General Assembly, n.d.).

**Use Ohio's direct-democracy tools — they're real here.** Unlike states with no citizen initiative, Ohio lets **the people** petition to propose a constitutional amendment, propose a statute, or **referendum** a law the legislature passed. It's a heavy lift (signatures equal to a percentage of the last governor's vote, spread across at least 44 counties), but it's a genuine lever — and, as 2023 showed, Ohioans turn out for statewide ballot issues. Start at the Secretary of State's "putting an issue on the ballot" resources (Ohio Secretary of State, n.d.-b).

**Show up locally — county, city/village, township, special district.** Your **county commissioners**, your **city or village council**, your **township trustees**, and special-district boards all meet publicly and set your local taxes and services. Because Ohio cities and villages have **home rule**, your municipality can act on a lot without waiting for the state — which means your local council is a high-leverage room.

**Vote your judicial races deliberately.** Ohioans **elect** their judges, and (since 2022) the top-court races carry **party labels** on the general ballot. Those aren't lines to skip — read up on the candidates and vote them.

**Check yourself.** Name four specific ways to get involved in Ohio government, and explain why Ohio's citizen initiative/referendum makes it different from a state where "changing the law" means only electing and lobbying legislators.

## Sources
- Ohio General Assembly. (n.d.). *Find your legislators / track legislation.* Legislature.ohio.gov. https://www.legislature.ohio.gov/
- Ohio Secretary of State. (n.d.-b). *Putting an issue on the ballot in Ohio.* Ohiosos.gov. https://www.ohiosos.gov/legislation-and-ballot-issues/putting-an-issue-on-the-ballot/
- Ohio Secretary of State. (n.d.-d). *Voter information — ID, early & absentee voting, registration.* Ohiosos.gov. https://www.ohiosos.gov/elections/voters/`,
    },

    // ── Section 7: Practice ──────────────────────────────────────────────
    {
      slug: "oh-practice",
      title: "9 · Practice: Ohio civics fill-in",
      section: "Practice",
      exercise: {
        instructions:
          "Fill in each blank about Ohio state government, then check. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt: "Ohio's current constitution was adopted in the year ___.",
            answer: "1851",
            explanation:
              "Ohio's second and current constitution dates to 1851 (replacing the 1802 statehood constitution); it was heavily amended in 1912.",
          },
          {
            prompt:
              "Since 1912, Ohio citizens can propose or reject laws directly through the initiative and ___.",
            answer: "referendum",
            explanation:
              "The 1912 amendments gave Ohioans strong direct democracy: the initiative (propose) and the referendum (repeal/keep a law).",
          },
          {
            prompt:
              "The Ohio House has 99 members and the Ohio ___ has 33 members.",
            answer: "senate",
            explanation:
              "The bicameral General Assembly is a 99-member House (2-year terms) and a 33-member Senate (4-year terms).",
          },
          {
            prompt:
              "To override a governor's veto, each chamber of the General Assembly needs a ___-fifths vote.",
            answer: "three",
            accept: ["3", "three-fifths", "3/5", "three fifths"],
            explanation:
              "Ohio's override is three-fifths (3/5) of each chamber — 60 of 99 in the House, 20 of 33 in the Senate — NOT the federal two-thirds.",
          },
          {
            prompt: "Ohio is divided into ___ counties.",
            answer: "88",
            accept: ["eighty-eight", "eighty eight"],
            explanation:
              "Ohio has 88 counties; a citizen amendment petition must draw signatures from at least 44 of them.",
          },
          {
            prompt:
              "Since a 2023 law (HB 458), voting in person in Ohio generally requires a government-issued photo ___.",
            answer: "id",
            accept: ["identification"],
            explanation:
              "HB 458 (effective April 2023) made unexpired photo ID the standard for in-person voting, replacing several older non-photo IDs.",
          },
          {
            prompt:
              "In August 2023, Ohio voters REJECTED Issue 1, which would have raised the bar to pass a citizen amendment to ___ percent.",
            answer: "60",
            accept: ["sixty"],
            explanation:
              "Issue 1 failed (~57%–43%), so a citizen constitutional amendment still passes on a SIMPLE majority (50% + 1).",
          },
        ],
      },
    },

    // ── Section 8: Final quiz ────────────────────────────────────────────
    {
      slug: "oh-quiz",
      title: "10 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt:
              "What pivotal power did Ohio's 1912 constitutional amendments give directly to the people?",
            options: [
              "The power to elect U.S. Senators",
              "The initiative and referendum (direct democracy)",
              "The power to abolish the state income tax",
              "A line-item veto for voters",
            ],
            correctIndex: 1,
            explanation:
              "In 1912 Ohioans amended the constitution to add the initiative and referendum, making Ohio a strong direct-democracy state.",
            sourceLessonSlug: "oh-constitution",
          },
          {
            prompt:
              "What majority does a CITIZEN-initiated constitutional amendment need to pass in Ohio?",
            options: [
              "A simple majority (50% + 1)",
              "Sixty percent (60%)",
              "Two-thirds",
              "Three-fifths",
            ],
            correctIndex: 0,
            explanation:
              "A citizen amendment still passes on a simple majority — the 2023 Issue 1 attempt to raise it to 60% was rejected by voters.",
            sourceLessonSlug: "oh-constitution",
          },
          {
            prompt:
              "Which two Ohio statewide executive officers must run together on a single joint ticket?",
            options: [
              "Attorney General and Secretary of State",
              "Auditor and Treasurer",
              "Governor and Lieutenant Governor",
              "Secretary of State and Treasurer",
            ],
            correctIndex: 2,
            explanation:
              "In Ohio the Governor and Lieutenant Governor run as one joint ticket; the AG, Secretary of State, Auditor, and Treasurer are each elected separately.",
            sourceLessonSlug: "oh-three-branches",
          },
          {
            prompt: "How does Ohio choose its Supreme Court justices?",
            options: [
              "Appointment by the Governor for life",
              "Merit selection by a nominating commission",
              "Popular election (with party labels on the general ballot since 2022)",
              "Appointment by the General Assembly",
            ],
            correctIndex: 2,
            explanation:
              "Ohio ELECTS its judges; SB 80 (2021) added party labels to the Supreme Court and Court of Appeals general-election ballot starting in 2022.",
            sourceLessonSlug: "oh-courts",
          },
          {
            prompt:
              "What vote does the Ohio General Assembly need to override the Governor's veto?",
            options: [
              "A simple majority of each chamber",
              "Three-fifths (3/5) of each chamber",
              "Two-thirds of each chamber",
              "A statewide referendum",
            ],
            correctIndex: 1,
            explanation:
              "Ohio's override is three-fifths (3/5) — 60 of 99 in the House, 20 of 33 in the Senate — which is LOWER than the federal two-thirds.",
            sourceLessonSlug: "oh-bill-to-law",
          },
          {
            prompt: "In the Ohio General Assembly, where do most bills die?",
            options: [
              "On the Governor's desk",
              "In committee",
              "In a citizen referendum",
              "At the county commission",
            ],
            correctIndex: 1,
            explanation:
              "Committee is the biggest filter — most bills never make it out of committee to a floor vote.",
            sourceLessonSlug: "oh-bill-to-law",
          },
          {
            prompt: "How many counties does Ohio have?",
            options: ["58", "88", "92", "99"],
            correctIndex: 1,
            explanation:
              "Ohio has 88 counties; a citizen amendment petition must gather signatures from at least 44 of them.",
            sourceLessonSlug: "oh-local-government",
          },
          {
            prompt:
              "What does 'home rule' (Article XVIII, 1912) give Ohio cities and villages?",
            options: [
              "Broad power to run their own local affairs (adopt charters/ordinances) as long as they don't conflict with general state law",
              "The power to secede from the state",
              "Immunity from all state law",
              "The right to levy federal taxes",
            ],
            correctIndex: 0,
            explanation:
              "Home rule grants municipalities broad powers of local self-government, limited by conflicting general state laws — a signature Ohio feature since 1912.",
            sourceLessonSlug: "oh-local-government",
          },
          {
            prompt:
              "What recently changed about voting in person in Ohio (HB 458, 2023)?",
            options: [
              "Ohio abolished in-person voting",
              "Ohio now generally requires an unexpired photo ID to vote in person",
              "Ohio adopted Election-Day registration",
              "Ohio made all elections vote-by-mail",
            ],
            correctIndex: 1,
            explanation:
              "HB 458 (effective April 2023) made unexpired photo ID the standard for in-person voting and tightened mail-ballot and drop-box rules.",
            sourceLessonSlug: "oh-elections",
          },
          {
            prompt:
              "What happened with Ohio's August 2023 Issue 1 (the 60% proposal)?",
            options: [
              "It passed, so amendments now need 60%",
              "It was withdrawn before the vote",
              "Voters REJECTED it, so amendments still pass on a simple majority",
              "A court struck it down",
            ],
            correctIndex: 2,
            explanation:
              "Voters rejected Issue 1 (~57%–43%), so a citizen constitutional amendment still passes on a simple majority (50% + 1).",
            sourceLessonSlug: "oh-elections",
          },
        ],
      },
    },
  ],
};
