// Authored "How to Help a Campaign" — a practical, strictly non-partisan course in
// the Civics curriculum on Learn.WitUS (sibling of US Civics 101, US Constitution
// 101, State vs Federal, and "How to Run for Office"). It teaches the *ways to help*
// any campaign or cause the learner chooses — volunteering, donating, canvassing,
// phone/text banking, hosting events, and digital outreach — plus the rules that
// govern those activities. It NEVER advocates for a party, candidate, or position;
// the same nuts and bolts serve any campaign or ballot measure.
//
// Citation standard (APA 7 in-line + a `## Sources` bibliography) to authoritative,
// non-partisan sources: the FEC (volunteer activity, in-kind contributions,
// contribution limits, who may contribute, coordination/independent expenditures,
// personal use), USA.gov and Vote.gov (the federal plain-language voter guides), the
// National Conference of State Legislatures (NCSL — the canonical source for
// state-by-state variation in contribution limits and ballot-measure rules), and
// Ballotpedia (ballot-measure overviews). Every URL was verified at authoring time.
//
// AUTHORITATIVE-VALUES RULE (load-bearing here): contribution limits and disclosure
// thresholds VARY by jurisdiction, and state/local rules differ from federal ones.
// This course never states a single state contribution limit as universal. The only
// fixed dollar figures it names are *federal* values published by the FEC — and even
// the federal individual-to-candidate limit is flagged as indexed for inflation (it
// changes each cycle), so it is attributed to "the FEC's current limits" rather than
// frozen here. The one concrete federal volunteer figure used (the in-home event
// food/beverage/invitation allowance) is attributed to the FEC's volunteer-activity
// rule, which the learner is told to confirm at the source.
//
// Ends with a quiz whose every question links back to the lesson that teaches the
// answer (the quiz standard) — and whose answers are about *how to help legally and
// safely*, never a partisan judgment.

import type { AuthoredCourse } from "./authored-course";

export const HELP_A_CAMPAIGN_COURSE: AuthoredCourse = {
  title: "How to Help a Campaign: A Practical, Non-Partisan Guide",
  description:
    "A clear, non-partisan, hands-on guide to helping ANY campaign or cause you choose — a candidate, a ballot measure, or a local issue. Learn the real ways to help (volunteering, donating, canvassing, phone and text banking, hosting events, and digital outreach), the difference between volunteering and a paid role, and the rules that govern your help: when volunteer time is NOT a contribution but spending your own money can be (in-kind contributions), federal vs. state donation limits and disclosure (which vary by state), the guardrails on outside spending and truth-in-advertising, and how to protect your own time, safety, and data. Cited to the FEC, USA.gov, Vote.gov, NCSL, and Ballotpedia. It teaches you how to help — not who to help.",
  lessons: [
    // ── Section 1: Ways to help ──────────────────────────────────────────
    {
      slug: "ways-to-help",
      title: "1 · The many ways to help a campaign",
      section: "Ways to Help",
      body: `You don't have to run for office — or even be an expert — to make a real difference for a campaign or cause you believe in. Campaigns run on the help of ordinary people, and there are many ways to plug in. Pick the ones that fit your time, your skills, and your comfort level.

The common ways to help, roughly from least to most public-facing:

- **Donate.** Give money (within the legal limits — covered later). Even small amounts add up, and small-dollar donors are the backbone of most campaigns.
- **Volunteer your time.** Stuff envelopes, enter data, make signs, drive people to events, staff a table. Volunteer *services* are generally **not** a contribution (FEC, n.d.-a).
- **Canvass (knock on doors).** Talk to voters in person — the single most effective form of voter contact.
- **Phone bank and text bank.** Reach voters by phone or text from anywhere.
- **Host an event.** Open your home or a community room for a meet-and-greet or fundraiser (with rules — covered later).
- **Help digitally.** Share, post, create graphics, build a website, or manage social media — uncompensated online activity by an individual is broadly unrestricted (FEC, n.d.-b).

This course covers each of these, **and the rules attached to them**, so you can help confidently and legally. Importantly, everything here works for **any** campaign — a candidate of any party, a **ballot measure**, or a **local cause**. This course teaches you *how* to help; *who* to help is always your choice.

**Check yourself.** Name three different ways an ordinary person can help a campaign without running for office.

## Sources
- FEC. (n.d.-a). *Volunteer activity*. Federal Election Commission. https://www.fec.gov/help-candidates-and-committees/candidate-taking-receipts/volunteer-activity/
- FEC. (n.d.-b). *Understanding ways to support federal candidates*. https://www.fec.gov/introduction-campaign-finance/understanding-ways-support-federal-candidates/`,
    },
    {
      slug: "volunteer-vs-paid-role",
      title: "2 · Volunteering vs. a paid role",
      section: "Ways to Help",
      body: `It matters — legally and practically — whether you help as a **volunteer** or in a **paid role**, because campaign-finance law treats them very differently.

**Volunteering** means donating your **personal services** for free. Under FEC rules, **volunteer services are not a contribution** as long as you are **not paid by anyone** for that time (FEC, n.d.-a). You can knock doors, make calls, and run a phone bank for as many hours as you like without any of it counting as a contribution or against any limit. (This is why a campaign can be powered by thousands of volunteer hours that never appear as donations.)

A **paid role** is a job: the campaign (or a committee, or a vendor) pays you a wage or fee to do the work — a field organizer, a digital director, a consultant. Paid staff are employees or contractors, not donors, and their pay is a campaign **expenditure** the campaign reports.

The line gets subtle in one important place: if **someone else pays for your services** on the campaign's behalf — say, your employer pays you to work for the campaign, or a company "loans" you to it — that payment can become an **in-kind contribution** from whoever paid (FEC, n.d.-b). The safe rule: **your own freely-donated time is fine; someone paying for your time on the campaign's behalf is a different thing.** The next lessons unpack exactly when help crosses into a contribution.

For **state and local** campaigns, the same volunteer-vs-paid distinction exists, but the precise definitions and reporting live in **state law**, which varies — confirm with your state's election or ethics agency (NCSL, n.d.-a).

**Check yourself.** Is your own donated volunteer time a contribution under FEC rules? What changes if *someone else pays you* to work for the campaign?

## Sources
- FEC. (n.d.-a). *Volunteer activity*. Federal Election Commission. https://www.fec.gov/help-candidates-and-committees/candidate-taking-receipts/volunteer-activity/
- FEC. (n.d.-b). *Understanding ways to support federal candidates*. https://www.fec.gov/introduction-campaign-finance/understanding-ways-support-federal-candidates/
- NCSL. (n.d.-a). *State limits on contributions to candidates*. National Conference of State Legislatures. https://www.ncsl.org/elections-and-campaigns/state-limits-on-contributions-to-candidates`,
    },

    // ── Section 2: The money & in-kind rules ─────────────────────────────
    {
      slug: "in-kind-contributions-and-the-rules",
      title: "3 · In-kind contributions: when your help is a donation",
      section: "The Money Rules",
      body: `Here is the rule that trips up well-meaning helpers most often: **volunteer time is generally NOT a contribution, but using your own money or resources can be.**

The key concept is the **in-kind contribution** — a **non-monetary** contribution. When you provide goods or services to a campaign **free or below the usual charge**, or you **pay for something on the campaign's behalf**, the value of that help is an in-kind contribution (FEC, n.d.-c). And critically, **the value of an in-kind contribution counts against your contribution limit exactly like a gift of money** (FEC, n.d.-c).

Examples of help that **is** an in-kind contribution:
- Paying a printer for the campaign's flyers out of your own pocket.
- Buying yard signs or office supplies and giving them to the campaign.
- Donating a mailing list, or paying a consultant or designer to work for the campaign.

Examples of help that is **not** a contribution:
- Your own **donated time** (volunteer services), as long as nobody pays you for it (FEC, n.d.-a).
- Ordinary **uncompensated internet activity** you do yourself — posting, blogging, sharing (FEC, n.d.-b).

There are specific **volunteer exemptions** for hosting (covered in the events lesson), but the headline is simple: **donating your hours is free; spending your dollars or buying things for the campaign is a contribution** that is valued at its normal cost and counts against your limit. When you're about to spend your own money *for* a campaign, assume it's an in-kind contribution and check the limit first (FEC, n.d.-c; FEC, n.d.-d).

**Check yourself.** You spend four hours knocking doors, then buy $300 of poster board and markers and hand the signs to the campaign. Which of those two is an in-kind contribution, and what does its value count against?

## Sources
- FEC. (n.d.-a). *Volunteer activity*. Federal Election Commission. https://www.fec.gov/help-candidates-and-committees/candidate-taking-receipts/volunteer-activity/
- FEC. (n.d.-b). *Understanding ways to support federal candidates*. https://www.fec.gov/introduction-campaign-finance/understanding-ways-support-federal-candidates/
- FEC. (n.d.-c). *In-kind contributions*. https://www.fec.gov/help-candidates-and-committees/filing-reports/in-kind-contributions/
- FEC. (n.d.-d). *Contribution limits*. https://www.fec.gov/help-candidates-and-committees/candidate-taking-receipts/contribution-limits/`,
    },
    {
      slug: "donation-limits-and-disclosure",
      title: "4 · Donation limits and disclosure (federal vs. state)",
      section: "The Money Rules",
      body: `If you give money — directly or in kind — there are **limits on how much** and **rules about what gets publicly reported**. The catch: the answer depends entirely on **which race** you're helping, because **federal and state rules are different, and state rules vary.**

**Federal races** (U.S. House, Senate, President) are governed by the **FEC**:
- There is a limit on how much an **individual** may give **to a candidate's campaign**, applied **per election** (a primary, general, runoff, and special each count separately).
- That individual-to-candidate limit is **indexed for inflation in odd-numbered years**, so the **dollar amount changes each cycle**. Rather than freeze a number here, check the **FEC's current contribution-limit chart** for the cycle you're giving in (FEC, n.d.-d).
- **In-kind** help counts against the same limit (see the previous lesson).
- **Disclosure:** federal committees publicly **itemize** contributions from a source once they **aggregate over a threshold** during the cycle, reporting the donor's name and details, and the FEC publishes those reports — so larger giving is **public** (FEC, n.d.-c; FEC, n.d.-d).

**State and local races and ballot measures are NOT under the FEC.** Each state sets its **own** contribution limits and disclosure rules:
- **Limits vary widely** — some states cap individual contributions, some allow corporate or union giving that federal law forbids, and **some set no limit at all.** Do **not** assume the federal number, or another state's number, applies to your state (NCSL, n.d.-a). *(This is the authoritative-values rule in action: the limit is state-owned, so we point you to the source rather than asserting a universal figure.)*
- **Disclosure thresholds and filing agencies vary** by state, too — usually a secretary of state, board of elections, or ethics commission.

**The safe move:** before you give to a state or local effort, confirm the **limit and the disclosure threshold** with your **state's election/ethics agency**; NCSL summarizes the state-by-state landscape (NCSL, n.d.-a).

**Check yourself.** Is there one nationwide individual contribution limit that applies to every campaign? Where do you confirm the limit for a *state* race?

## Sources
- FEC. (n.d.-c). *In-kind contributions*. https://www.fec.gov/help-candidates-and-committees/filing-reports/in-kind-contributions/
- FEC. (n.d.-d). *Contribution limits*. https://www.fec.gov/help-candidates-and-committees/candidate-taking-receipts/contribution-limits/
- NCSL. (n.d.-a). *State limits on contributions to candidates*. National Conference of State Legislatures. https://www.ncsl.org/elections-and-campaigns/state-limits-on-contributions-to-candidates`,
    },
    {
      slug: "who-can-and-cant-give",
      title: "5 · Who can — and can't — give",
      section: "The Money Rules",
      body: `Before you give (or help raise money), know that some sources are **prohibited** from contributing at the federal level. Helping route a prohibited contribution — even unintentionally — is a serious problem, so it's worth knowing the list.

For **federal** campaigns, the following may **not** contribute:
- **Corporations, labor organizations, and national banks** — from their **treasury funds** (they may form a separate PAC, which is a different, regulated channel) (FEC, n.d.-e).
- **Federal government contractors** — may not contribute or be solicited (FEC, n.d.-e).
- **Foreign nationals** — federal law prohibits contributions or donations, directly or indirectly, by foreign nationals in connection with **any** federal, **state, or local** election (FEC, n.d.-e).
- **Contributions in the name of another** — you may **not** give in someone else's name, and you may not let someone use your name to disguise the true source. "Straw donor" schemes are illegal (FEC, n.d.-e).

A practical helper's rule: **give your own money, in your own name, from your own funds** — never as a pass-through for someone else, and never with money that isn't yours. If a friend asks you to make a donation "for them" and pay you back, that's a contribution in the name of another — don't do it.

**State and local** races have their own lists of permitted and prohibited sources, which **vary by state** (for example, some states permit limited corporate giving that federal law bars). Confirm your state's rules before helping raise money locally (NCSL, n.d.-a).

**Check yourself.** Can a foreign national contribute to a U.S. local ballot-measure campaign? Is it legal to give a donation in a friend's name and have them pay you back?

## Sources
- FEC. (n.d.-e). *Who can and can't contribute*. Federal Election Commission. https://www.fec.gov/help-candidates-and-committees/candidate-taking-receipts/who-can-and-cant-contribute/
- NCSL. (n.d.-a). *State limits on contributions to candidates*. National Conference of State Legislatures. https://www.ncsl.org/elections-and-campaigns/state-limits-on-contributions-to-candidates`,
    },

    // ── Section 3: Doing the work ────────────────────────────────────────
    {
      slug: "canvassing-and-voter-contact",
      title: "6 · Canvassing and voter-contact basics (do's and don'ts)",
      section: "Doing the Work",
      body: `**Canvassing** — going door to door — and **phone/text banking** are the workhorses of voter contact. The mechanics are the same for any campaign or ballot measure; here are the basics and the etiquette.

**How it works.** Campaigns target outreach using the public **voter file** (the list of registered voters), available through your state or local election office (USA.gov, n.d.-a). You're usually given a list ("turf") and a short script. Your job is to have a brief, respectful conversation, note the response, and move on. Phone and text banks do the same from anywhere.

**Do:**
- **Identify yourself and who you're with** at the start. For text banking, follow the campaign's opt-out instructions and applicable texting rules.
- **Be brief, polite, and honest.** Stick to verifiable facts; if you don't know, say so.
- **Respect "no."** If someone isn't interested or asks you to leave, thank them and go.
- **Log responses accurately** — bad data wastes everyone's effort.
- **Help people find real voting information** — point them to **Vote.gov** or their state election office to register, check registration, and find deadlines (Vote.gov, n.d.; USA.gov, n.d.-a).

**Don't:**
- **Don't enter homes**, don't go onto property marked "no soliciting," and don't argue.
- **Don't misrepresent** who you are, who you're with, or the facts — and never give false voting information (wrong date, wrong place, or telling people they can't vote when they can).
- **Don't canvass where it's restricted** — many places limit electioneering **near polling places**, and rules vary by state; check before working near a polling site (USA.gov, n.d.-a).
- **Don't collect or keep voters' personal data** beyond what the campaign's tool asks for.

**Check yourself.** Name two "do's" and two "don'ts" of door-to-door or phone canvassing, and name an authoritative place to send someone who needs to register or check their registration.

## Sources
- USA.gov. (n.d.-a). *State and local election offices*. https://www.usa.gov/state-election-office
- Vote.gov. (n.d.). *Register to vote in your state*. U.S. Election Assistance Commission. https://vote.gov/`,
    },
    {
      slug: "hosting-events-volunteer-exemptions",
      title: "7 · Hosting events and digital help (the volunteer exemptions)",
      section: "Doing the Work",
      body: `Two popular ways to help — **hosting an event** and **helping online** — come with their own specific volunteer rules at the federal level. Knowing them keeps your generosity from accidentally becoming an over-the-limit contribution.

**Hosting an event in your home or a community room.** Federal rules give individual volunteers a real exemption (FEC, n.d.-a):
- You may **use your own home** (or your building's recreation/common room, or a church or community room regularly open to the community) for a campaign event **without** that use being a contribution.
- For **food, beverages, and invitations** for the event, an individual may spend up to a **set amount per candidate, per election** without it being a contribution — and **two people** in the same household get a combined allowance. **Anything spent above that amount is an in-kind contribution** the campaign must report (FEC, n.d.-a).
- A **co-host who doesn't live there** doesn't get the home exemption — a nonresident co-host's expenses are treated as contributions (FEC, n.d.-a).

*(Per the authoritative-values rule, confirm the current dollar figure on the FEC's volunteer-activity page rather than relying on a number from memory — and note these are **federal** figures; state/local events follow state rules.)*

**Helping digitally.** Your own **uncompensated internet activity** — emailing, blogging, posting, sharing, making graphics, building a site — is broadly **unrestricted** and is **not** a contribution (FEC, n.d.-b). But there's a line: if you **pay for advertising on someone else's website or platform**, that paid ad is treated like other paid public communications and **is** subject to the contribution/expenditure rules (FEC, n.d.-b). Free posting from your own account = fine; **buying ads** for the campaign = a regulated expenditure or in-kind contribution.

**Check yourself.** If you host a campaign meet-and-greet at home and spend more than the federal allowance on food, what is the excess? Is unpaid posting from your own social account a contribution — and what about *buying* ads?

## Sources
- FEC. (n.d.-a). *Volunteer activity*. Federal Election Commission. https://www.fec.gov/help-candidates-and-committees/candidate-taking-receipts/volunteer-activity/
- FEC. (n.d.-b). *Understanding ways to support federal candidates*. https://www.fec.gov/introduction-campaign-finance/understanding-ways-support-federal-candidates/`,
    },

    // ── Section 4: Guardrails & beyond candidates ────────────────────────
    {
      slug: "election-law-guardrails",
      title: "8 · Election-law guardrails: coordination and truth-in-advertising",
      section: "Guardrails",
      body: `If your help goes beyond volunteering and small donations — especially if you **spend money to influence a race on your own** — two guardrails matter most: the **coordination rules** and **truth-in-advertising / disclaimer** rules.

**Independent spending vs. coordination.** An **independent expenditure** is money you spend on a communication that **expressly** supports or opposes a clearly identified candidate **without coordinating** with that candidate, their campaign, or a party (FEC, n.d.-f). Independent expenditures are **not capped** in amount, but they **must be truly independent** and they carry **reporting and disclaimer** duties (FEC, n.d.-f).

The catch is **coordination**: if your spending is made "in cooperation, consultation, or concert with, or at the request or suggestion of" a candidate or party, it is a **coordinated communication** — and it is **no longer independent**. A coordinated communication is treated as an **in-kind contribution**, which means it **counts against contribution limits** (and, if a prohibited source paid for it, becomes an illegal contribution) (FEC, n.d.-g). The FEC uses a **three-prong test** (content, payment, and the conduct/interaction between spender and campaign) to decide (FEC, n.d.-g). Practical takeaway: **if you want to spend independently, keep a real wall between you and the campaign** — no inside information, no "what should I run?" coordination.

**Truth-in-advertising / disclaimers.** Paid political communications must generally carry a **disclaimer** saying who paid for them and whether a candidate authorized them (FEC, n.d.-f). Separately, **knowingly giving false voting information** (wrong date, place, or eligibility) is a serious matter and can be illegal — never do it (USA.gov, n.d.-a). Honesty isn't just etiquette here; it's a legal guardrail.

*(State and local races have **parallel** coordination, independent-expenditure, and disclaimer rules that **vary by state** — confirm locally before spending on your own (NCSL, n.d.-a).)*

**Check yourself.** What turns an "independent" expenditure into a coordinated one — and what does coordination do to it (capped or not)? What must a paid political ad generally carry?

## Sources
- FEC. (n.d.-f). *Understanding independent expenditures*. Federal Election Commission. https://www.fec.gov/help-candidates-and-committees/candidate-taking-receipts/understanding-independent-expenditures/
- FEC. (n.d.-g). *Coordinated communications*. https://www.fec.gov/help-candidates-and-committees/making-disbursements/coordinated-communications/
- USA.gov. (n.d.-a). *State and local election offices*. https://www.usa.gov/state-election-office
- NCSL. (n.d.-a). *State limits on contributions to candidates*. National Conference of State Legislatures. https://www.ncsl.org/elections-and-campaigns/state-limits-on-contributions-to-candidates`,
    },
    {
      slug: "protecting-your-time-safety-data",
      title: "9 · Protecting your own time, safety, and data",
      section: "Guardrails",
      body: `Helping a campaign should be rewarding, not risky. A few habits protect **you** — your time, your safety, and your personal data — while you help.

**Your time.**
- **Set your own limits.** Volunteer time is generous, but it's *yours.* Decide up front how many hours a week you can give and protect that boundary.
- **Don't let "help" become an uncompensated job.** Real, ongoing, full-time work is a paid role; if a campaign needs that, it should be a paid position, not an open-ended volunteer ask.

**Your safety.**
- **Canvass smart.** Tell someone your turf and expected return time, keep your phone charged, and consider going in **pairs** in unfamiliar areas. **Trust your instincts** — skip any door or situation that feels unsafe.
- **You can always disengage.** You are never obligated to argue, enter a home, or stay in a hostile interaction. Politely leave.

**Your money.**
- **Give within your means and within the limits.** Don't let enthusiasm push you past a legal limit (a contribution over the cap can have to be refunded — or worse) or past your own budget (FEC, n.d.-d).
- **Remember disclosure.** Larger donations become **public record** (federally and in many states) — give knowing your name and amount may be searchable (FEC, n.d.-d; NCSL, n.d.-a).

**Your data.**
- **Use the campaign's official tools** for voter contact, and **don't keep voters' personal information** afterward.
- **Guard your own data.** Be wary of look-alike donation links and "urgent" texts; **donate only through the campaign's verified official site**, and treat unsolicited requests for your bank or card details with suspicion.

**Check yourself.** Name one way to stay safe while canvassing and one way to protect your personal data while helping a campaign.

## Sources
- FEC. (n.d.-d). *Contribution limits*. https://www.fec.gov/help-candidates-and-committees/candidate-taking-receipts/contribution-limits/
- NCSL. (n.d.-a). *State limits on contributions to candidates*. National Conference of State Legislatures. https://www.ncsl.org/elections-and-campaigns/state-limits-on-contributions-to-candidates`,
    },
    {
      slug: "ballot-measures-and-local-causes",
      title: "10 · Helping ballot measures and local causes",
      section: "Guardrails",
      body: `Campaigns aren't only about candidates. You can help a **ballot measure** (a yes/no question on the ballot) or a **local cause**, and many of the same skills apply — with a different rulebook.

**What a ballot measure is.** A ballot measure lets voters decide a policy question directly. The main types: a **citizen initiative** (voters propose a new law or constitutional amendment by collecting signatures), a **referendum** (voters approve or repeal a law passed by the legislature), and a **legislative referral** (the legislature puts a question to voters) (Ballotpedia, n.d.; NCSL, n.d.-b). Not every state offers citizen initiatives — roughly half do — and **the process varies a great deal by state** (Ballotpedia, n.d.; NCSL, n.d.-b).

**How to help one:**
- **Gather petition signatures** to qualify a measure for the ballot — the **required number of valid signatures and the rules vary by state** (NCSL, n.d.-b).
- **Canvass, phone/text bank, and host events** for a "yes" or "no" — the same voter-contact mechanics from this course.
- **Donate** — but note: **ballot-measure committees follow state campaign-finance rules**, not the FEC's candidate rules, and those rules (limits, disclosure) **vary by state** (NCSL, n.d.-a). There is **no federal ballot-measure process** — it's entirely state and local law (Ballotpedia, n.d.).

**Local causes** (a bond, a school referendum, a neighborhood issue) work the same way: the rules live in **state and local** law, and your **local election office** is the authority on signatures, deadlines, and finance reporting for the measure (USA.gov, n.d.-a).

The throughline of this whole course: **the skills are universal; the rules are local.** Learn the rule for *your* race from the authoritative source, then help with confidence — for any candidate, measure, or cause you choose.

**Check yourself.** Name the three main types of ballot measures, and say which body's rules govern donations to a ballot-measure committee (federal FEC, or state law)?

## Sources
- Ballotpedia. (n.d.). *Ballot measure*. https://ballotpedia.org/Ballot_measure
- NCSL. (n.d.-a). *State limits on contributions to candidates*. National Conference of State Legislatures. https://www.ncsl.org/elections-and-campaigns/state-limits-on-contributions-to-candidates
- NCSL. (n.d.-b). *Initiative and referendum overview and resources*. https://www.ncsl.org/elections-and-campaigns/initiative-and-referendum-overview-and-resources
- USA.gov. (n.d.-a). *State and local election offices*. https://www.usa.gov/state-election-office`,
    },

    // ── Section 5: Practice ──────────────────────────────────────────────
    {
      slug: "practice-volunteer-and-in-kind",
      title: "11 · Practice: volunteering and in-kind help",
      section: "Practice",
      exercise: {
        instructions:
          "Fill in each blank, then check. Spelling and capitalization are forgiving. Where a rule varies by state, the answer is about the federal rule or the general concept.",
        items: [
          {
            prompt:
              "Donating your own time for free, with no one paying you, is called ___ (it is generally NOT a contribution).",
            answer: "volunteering",
            accept: ["volunteer", "volunteer activity", "volunteer service", "volunteer services"],
            explanation:
              "Under FEC rules, volunteer services are not a contribution as long as the volunteer is not paid by anyone.",
          },
          {
            prompt:
              "A non-monetary donation — like buying signs for a campaign or paying a printer on its behalf — is an ___-kind contribution.",
            answer: "in",
            accept: ["in-kind"],
            explanation:
              "An in-kind contribution is non-monetary help; its value counts against your contribution limit just like a cash gift.",
          },
          {
            prompt:
              "The value of an in-kind contribution counts against your contribution ___, just like a gift of money.",
            answer: "limit",
            accept: ["limits"],
            explanation:
              "In-kind help is valued at its usual cost and counts against the same limit as cash — so check the limit before spending your own money for a campaign.",
          },
          {
            prompt:
              "Posting and sharing for free from your own social media account is uncompensated ___ activity, which is broadly unrestricted.",
            answer: "internet",
            accept: ["online", "digital"],
            explanation:
              "Individual, uncompensated internet activity is broadly unrestricted — but PAYING for ads on someone else's platform is regulated.",
          },
          {
            prompt:
              "If you host a campaign event at home, spending above the federal food/beverage allowance becomes an in-kind ___.",
            answer: "contribution",
            explanation:
              "The home-event exemption covers food, beverages, and invitations up to a set amount per candidate, per election; the excess is a reportable in-kind contribution.",
          },
        ],
      },
    },
    {
      slug: "practice-limits-and-guardrails",
      title: "12 · Practice: limits, disclosure, and guardrails",
      section: "Practice",
      exercise: {
        instructions: "Fill in each blank, then check.",
        items: [
          {
            prompt:
              "Federal contribution limits are set by the ___ (abbreviation); state and local races follow state law instead.",
            answer: "FEC",
            accept: ["federal election commission"],
            explanation:
              "The FEC governs federal races. State and local races (and ballot measures) follow state law, whose limits vary widely.",
          },
          {
            prompt:
              "State contribution limits and disclosure rules ___ by state — so never assume one number is universal.",
            answer: "vary",
            accept: ["varies", "differ", "differs"],
            explanation:
              "Some states cap contributions, some allow corporate/union giving, and some set no limit at all. Confirm with your state agency or NCSL.",
          },
          {
            prompt:
              "Publicly reporting the money a campaign raises and spends, so donors over a threshold are named, is called ___.",
            answer: "disclosure",
            explanation:
              "Disclosure makes larger donations public. The FEC publishes federal reports; states run parallel systems with varying thresholds.",
          },
          {
            prompt:
              "Spending that is made 'in cooperation' with a candidate or party is ___ — and is treated as an in-kind contribution, not independent.",
            answer: "coordinated",
            accept: ["coordination"],
            explanation:
              "Coordinated communications count against contribution limits. To spend independently, keep a real wall between you and the campaign.",
          },
          {
            prompt:
              "A safe rule: always give your own money, from your own funds, in your own ___ — never as a pass-through for someone else.",
            answer: "name",
            explanation:
              "Contributions in the name of another (straw-donor schemes) are illegal. Give in your own name, with your own money.",
          },
        ],
      },
    },

    // ── Section 6: Final quiz ────────────────────────────────────────────
    {
      slug: "help-a-campaign-quiz",
      title: "13 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "Which of these is a way an ordinary person can help a campaign without running for office?",
            options: [
              "Only by becoming a paid campaign manager",
              "Volunteering, donating, canvassing, phone/text banking, hosting, or helping digitally",
              "Only by giving over the legal limit",
              "Nothing — you must be a candidate to help",
            ],
            correctIndex: 1,
            explanation:
              "Campaigns run on ordinary people's help: volunteering, donating, canvassing, phone/text banking, hosting events, and digital outreach are all real ways to plug in.",
            sourceLessonSlug: "ways-to-help",
          },
          {
            prompt: "Under FEC rules, is your own donated volunteer time a contribution?",
            options: [
              "Yes — every hour counts against your limit",
              "No — volunteer services are not a contribution as long as no one pays you for that time",
              "Only if you knock more than 100 doors",
              "Only for federal races, never for state ones",
            ],
            correctIndex: 1,
            explanation:
              "Volunteer services are not a contribution as long as the volunteer isn't paid by anyone — that's why thousands of volunteer hours never appear as donations.",
            sourceLessonSlug: "volunteer-vs-paid-role",
          },
          {
            prompt: "You buy $300 of yard signs and give them to a campaign. What is that, and what does its value count against?",
            options: [
              "Nothing — goods are never a contribution",
              "An in-kind contribution, whose value counts against your contribution limit",
              "Volunteer time, which is unlimited",
              "A coordinated communication only",
            ],
            correctIndex: 1,
            explanation:
              "Paying for goods or services on a campaign's behalf is an in-kind contribution, valued at its usual cost and counted against your contribution limit just like cash.",
            sourceLessonSlug: "in-kind-contributions-and-the-rules",
          },
          {
            prompt: "Is there one nationwide individual contribution limit that applies to every campaign?",
            options: [
              "Yes — the FEC sets one number for all races",
              "No — the FEC sets federal limits (indexed to inflation), while state/local limits vary by state and some states have none",
              "Yes — every state copies the federal number",
              "No — there are no limits anywhere",
            ],
            correctIndex: 1,
            explanation:
              "Federal limits are set by the FEC and indexed for inflation; state and local limits vary widely (some states set no limit). Confirm your state's rule via NCSL or your state agency.",
            sourceLessonSlug: "donation-limits-and-disclosure",
          },
          {
            prompt: "Can a foreign national contribute to a U.S. campaign — including a state or local ballot measure?",
            options: [
              "Yes, for local races only",
              "No — foreign nationals are prohibited from contributing in connection with any federal, state, or local election",
              "Yes, up to the federal limit",
              "Only if a U.S. citizen co-signs",
            ],
            correctIndex: 1,
            explanation:
              "Federal law prohibits contributions by foreign nationals in connection with any federal, state, or local election — directly or indirectly.",
            sourceLessonSlug: "who-can-and-cant-give",
          },
          {
            prompt: "Is it legal to donate in a friend's name and have them pay you back?",
            options: [
              "Yes, if the amount is small",
              "No — contributions in the name of another (straw-donor schemes) are illegal",
              "Yes, for state races only",
              "Only if you tell the campaign",
            ],
            correctIndex: 1,
            explanation:
              "Giving in another person's name is prohibited. Always give your own money, in your own name, from your own funds.",
            sourceLessonSlug: "who-can-and-cant-give",
          },
          {
            prompt: "Which is a canvassing 'don't'?",
            options: [
              "Identifying yourself and who you're with",
              "Giving someone false voting information, like the wrong election date",
              "Respecting a 'no' and moving on",
              "Pointing people to Vote.gov to register",
            ],
            correctIndex: 1,
            explanation:
              "Never misrepresent yourself or give false voting information. Do identify yourself, respect 'no,' and direct people to authoritative voting info like Vote.gov.",
            sourceLessonSlug: "canvassing-and-voter-contact",
          },
          {
            prompt: "If you host a campaign event at home and spend more than the federal allowance on food and drinks, the excess is…",
            options: [
              "Still exempt — home events have no limit",
              "An in-kind contribution the campaign must report",
              "A coordinated communication",
              "Illegal in every case",
            ],
            correctIndex: 1,
            explanation:
              "The home-event exemption covers food, beverages, and invitations up to a set per-candidate, per-election amount; spending above that becomes a reportable in-kind contribution.",
            sourceLessonSlug: "hosting-events-volunteer-exemptions",
          },
          {
            prompt: "What turns an 'independent' expenditure into a coordinated one — and what's the effect?",
            options: [
              "Spending too little; it becomes tax-free",
              "Coordinating with the candidate or party; it's then treated as an in-kind contribution subject to limits",
              "Posting it online; it becomes unlimited",
              "Nothing — independent and coordinated are the same",
            ],
            correctIndex: 1,
            explanation:
              "Spending made in cooperation with a candidate or party is a coordinated communication, treated as an in-kind contribution that counts against contribution limits — no longer independent.",
            sourceLessonSlug: "election-law-guardrails",
          },
          {
            prompt: "Donations to a ballot-measure or local-cause committee are governed by…",
            options: [
              "The FEC, exactly like a federal candidate",
              "State (and local) law — there is no federal ballot-measure process, and the rules vary by state",
              "No rules at all",
              "The U.S. Constitution, with one fixed limit",
            ],
            correctIndex: 1,
            explanation:
              "There is no federal ballot-measure process; ballot measures and local causes follow state and local law, whose limits and disclosure rules vary by state.",
            sourceLessonSlug: "ballot-measures-and-local-causes",
          },
        ],
      },
    },
  ],
};
