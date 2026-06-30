// Authored "US, State & Local Government: Who Does What" — a practical,
// civic-engagement companion in the Civics curriculum on Learn.WitUS. It is a
// sibling of, and deliberately distinct from, three other Civics courses:
//   • US Civics 101            — the intro overview of the whole system.
//   • US Constitution 101      — the document itself (articles, amendments).
//   • State vs Federal Power   — the LEGAL division of power (Supremacy Clause,
//                                McCulloch v. Maryland, Gibbons v. Ogden).
// This course is the *practical* angle: what each LEVEL of government actually
// does day-to-day, and how an ordinary person engages with each. It does not
// re-argue the constitutional doctrine those siblings cover; it points to them
// and stays on "who handles this, and where do I show up?"
//
// Factual and strictly non-partisan (how the system works, not who should win).
// Every content lesson is cited (APA 7 in-line + a `## Sources` bibliography) to
// authoritative sources: USA.gov on the branches and levels of government; the
// U.S. Census Bureau's 2022 Census of Governments for the count and structure of
// local governments; NCSL for state legislatures; the National League of Cities
// and NACo for city and county roles; the EPA for local water service; and
// federal program sources (SSA, Medicare, GAO) where a level's responsibilities
// are owned by a named federal body.
//
// Authoritative-values rule (load-bearing here): LOCAL government STRUCTURE VARIES
// — counties, cities, towns, townships, and special districts are organized
// differently from state to state, and even within a state. Where structure or a
// rule varies, the course SAYS SO and cites the source (Census of Governments;
// each state's own rules) instead of asserting one model as universal. The Census
// figures cited are from the 2022 Census of Governments (released 2023), the most
// recent count.
//
// The course is organized into sections (course modules) and ends with a quiz
// whose every question links back to the lesson that teaches the answer.

import type { AuthoredCourse } from "./authored-course";

export const US_STATE_LOCAL_GOV_COURSE: AuthoredCourse = {
  title: "US, State & Local Government: Who Does What",
  description:
    "A practical, non-partisan guide to which level of government actually does what in your daily life — and how to engage with each one. Federal (defense, currency, Social Security and Medicare, interstate matters, federal courts), state (education standards, professional and driver licensing, state roads and police, running elections), and local (schools, zoning, police and fire, water and trash, property tax). You'll see how money and mandates flow between the levels, learn where to show up and be heard at each — town halls, school boards, public comment, contacting your representatives — and meet the special districts and boards people forget exist. Cited to USA.gov, the U.S. Census Bureau's Census of Governments, NCSL, the National League of Cities, and NACo. Local structures VARY by state, and the course says so and points you to your own state's rules rather than pretending one model fits all.",
  lessons: [
    // ── Section 1: The three levels ──────────────────────────────────────
    {
      slug: "three-levels-overview",
      title: "1 · Three levels, one country: federal, state, local",
      section: "The Three Levels",
      body: `You don't live under one government — you live under at least **three at once**, layered on top of each other. Each is a real, working government with its own elected officials, its own budget, and its own job. This is the **practical** side of federalism: not the legal theory of who *may* act (that's the *State vs Federal Power* course), but **who actually does what** in your week.

The three levels:

- **Federal (national)** — one government for the whole country. It runs the military, prints the money, delivers Social Security and Medicare, and handles matters that cross state lines. You interact with it a few times a year (taxes, a passport, a benefit).
- **State** — 50 of them, each its own full government with a governor, a legislature, and courts. Your state sets education standards, licenses your profession, runs the DMV, polices state highways, and **administers elections**. You interact with it more often than you'd guess (your license, your registration, your kid's graduation requirements).
- **Local** — the level closest to you: counties, cities, towns, and special districts. Local government runs your schools, picks up your trash, staffs the fire station, decides what can be built next door, and sends your property-tax bill. You interact with it almost every single day, usually without noticing (USA.gov, n.d.-a).

A useful rule of thumb: **the closer the government is to you, the more often it touches your daily life — and the easier it is for one person to be heard there.** A city-council seat might be decided by a few hundred votes; the presidency is decided by tens of millions.

One more practical fact this course keeps returning to: **local government is not one fixed shape.** How counties, cities, and special districts are organized **varies from state to state** — the U.S. Census Bureau counts more than 90,000 local governments precisely because the country builds them so many different ways (U.S. Census Bureau, 2023). We'll keep flagging where things vary so you check *your* place, not a textbook average.

**Check yourself.** Name the three levels of government you live under, and say which one you interact with most often in daily life.

## Sources
- USA.gov. (n.d.-a). *Branches of the U.S. government*. https://www.usa.gov/branches-of-government
- U.S. Census Bureau. (2023, August 24). *Census Bureau releases 2022 Census of Governments: Organization data* [Press release]. https://www.census.gov/newsroom/press-releases/2023/census-of-governments.html`,
    },
    {
      slug: "layered-government-idea",
      title: "2 · Why layered government — and how to tell which level to call",
      section: "The Three Levels",
      body: `Why have three governments instead of one? Because the jobs are genuinely different in **scale**. Defending the country or running a national retirement program only makes sense at the national scale. Setting graduation requirements or licensing a plumber works better at the state scale. Deciding where the new stop sign goes works best at the neighborhood scale. Layered government matches each job to the level that can do it best — and keeps the decisions that affect your block close to your block.

This has a very practical payoff: **when something is wrong, knowing the level saves you hours.** A pothole, a broken streetlight, a noisy permit next door — that's **local**, almost always your city or county. A problem with your professional license or your kid's school standards — that's usually **state**. A Social Security or passport problem — that's **federal**. Call the wrong level and you get bounced; call the right one and you get a case number.

A quick "which level?" sorter for everyday problems:

| If your issue is about… | Start with this level | Typical office to contact |
| --- | --- | --- |
| Trash, potholes, zoning, local police/fire, water bill | **Local** | City hall, county offices, or the special district |
| Your school's curriculum or a specific school | **Local** (school board) | Your school district / school board |
| Driver's license, professional license, state roads | **State** | DMV / state licensing board / DOT |
| Voting, registration, where to vote | **State + Local** | Your state or county election office |
| Social Security, Medicare, passport, federal taxes | **Federal** | SSA, Medicare, State Dept., IRS |

The lines aren't always clean — many programs are **shared** between levels (the next sections explain how money and mandates flow). But starting at the right level is the single most useful civic skill, and it's why this whole course is organized as "who does what."

**Check yourself.** A streetlight on your corner is out, and separately you have a question about your Social Security benefit. Which level of government do you contact for each?

## Sources
- USA.gov. (n.d.-b). *State, county, and municipal government*. https://www.usa.gov/state-government
- USA.gov. (n.d.-c). *How to contact your elected officials*. https://www.usa.gov/elected-officials`,
    },

    // ── Section 2: What each level handles ───────────────────────────────
    {
      slug: "what-federal-handles",
      title: "3 · What the FEDERAL government handles",
      section: "What Each Level Handles",
      body: `The **federal government** does the jobs that only make sense for the whole nation at once. You interact with it less often than with your state or town, but the things it handles are big.

What's federal, with the body that runs it:

- **National defense and foreign affairs** — the armed forces, treaties, and embassies. The military and diplomacy are run nationally; there is no "state army" doing foreign policy (USA.gov, n.d.-a).
- **Currency** — the dollar is issued and managed federally. States cannot print their own money.
- **Interstate and foreign commerce** — trade and travel that cross state (or national) lines: the interstate highway system, aviation, shipping, and national product and safety standards.
- **Social Security and Medicare** — the two largest federal benefit programs. **Social Security** retirement and disability benefits are run by the **Social Security Administration** (SSA, n.d.). **Medicare**, the federal health-insurance program mainly for people 65+, is run by the federal Centers for Medicare & Medicaid Services (Medicare.gov, n.d.).
- **Federal courts and federal crimes** — the U.S. district courts, courts of appeals, and the Supreme Court hear cases under federal law and the Constitution (USA.gov, n.d.-d).
- **Immigration, citizenship, and passports** — who may enter, naturalize, and travel internationally.

A practical tell: **if the program is the same in every state, it's probably federal.** Your Social Security benefit is calculated the same way whether you live in Indiana or Arizona, because it's one national program. Compare that to your driver's license, which is run 50 different ways — because it's a *state* job (next lesson).

(This course stays on *what the federal government does*. For *why* it may do these things — the enumerated powers, the Commerce Clause — see the **State vs Federal Power** course.)

**Check yourself.** Name three things the federal government handles, and give the "tell" that usually signals a program is federal rather than state.

## Sources
- USA.gov. (n.d.-a). *Branches of the U.S. government*. https://www.usa.gov/branches-of-government
- USA.gov. (n.d.-d). *Federal courts and the judicial branch*. https://www.usa.gov/branches-of-government
- Social Security Administration. (n.d.). *Benefits | SSA*. https://www.ssa.gov/benefits
- Medicare.gov. (n.d.). *What's Medicare?* https://www.medicare.gov/basics/get-started-with-medicare`,
    },
    {
      slug: "what-states-handle",
      title: "4 · What STATES handle",
      section: "What Each Level Handles",
      body: `Your **state** is a full government — a governor, a legislature, and a court system — and it quietly runs an enormous share of your daily life. States get this authority because powers not handed to the federal government are reserved to them (the legal basis is the 10th Amendment, covered in the sibling courses; here we focus on *what they do with it*).

Big state jobs:

- **Education standards.** States set K–12 academic standards, graduation requirements, and teacher licensing, and run their public colleges and universities. (Day-to-day *operation* of K–12 schools is usually **local** — the next lesson — but the *standards* are a state job.)
- **Professional and occupational licensing.** Doctors, nurses, lawyers, contractors, cosmetologists, and many others are licensed by **state** boards. This is why a license earned in one state may not automatically transfer to another — the rules **vary by state** (NCSL, n.d.-b).
- **Driver's licenses and vehicle registration.** The DMV (or its equivalent) is a state agency; rules and even the office's name differ by state.
- **State roads and the state police/highway patrol.** States build and maintain state highways and run a statewide police force (often called the State Police or Highway Patrol).
- **Most criminal and family law.** The bulk of everyday law — most crimes, contracts, marriage, divorce — is **state** law, enforced in state courts.
- **Administering elections.** This is one of the most consequential state jobs: **states run elections**, including registration rules, deadlines, voter-ID requirements, mail-ballot rules, and the actual machinery of voting (often delegated to counties). Because of this, **election rules differ from state to state**, and the authoritative source for yours is your own state's election office (NCSL, n.d.-a; USA.gov, n.d.-e).

The state legislature is where much of this is decided. The National Conference of State Legislatures (NCSL) tracks how the 50 legislatures are structured and how their rules differ — a reminder that "the state does it" still means **50 different versions** of how (NCSL, n.d.-a).

**Check yourself.** Name three things your state handles, and explain why a professional license or an election rule can differ when you cross a state line.

## Sources
- National Conference of State Legislatures. (n.d.-a). *About state legislatures*. https://www.ncsl.org/about-state-legislatures
- National Conference of State Legislatures. (n.d.-b). *Occupational licensing*. https://www.ncsl.org/labor-and-employment/occupational-licensing
- USA.gov. (n.d.-e). *Voting and elections*. https://www.usa.gov/voting-and-elections`,
    },
    {
      slug: "what-local-handles",
      title: "5 · What LOCAL government handles (and why it VARIES)",
      section: "What Each Level Handles",
      body: `**Local government** is the level closest to you, and it touches your day the most. It's also the level whose **shape varies the most** — so this lesson teaches both *what* local government does and *why you can't assume a single structure*.

Common local jobs:

- **Public schools (day-to-day).** Your local **school district** — governed by an elected **school board** — hires the superintendent, sets the budget, and runs the buildings (within the state's standards). See the special-districts lesson for how school districts are organized.
- **Zoning and land use.** What can be built where — houses, shops, a factory next door — is decided locally, usually by a city or county **planning/zoning** body. This is one of the most powerful and least-watched local functions.
- **Police and fire.** Most policing and firefighting is local — your **city** or **county** force, plus fire departments and emergency medical services.
- **Water, sewer, and trash.** Drinking water, sewage treatment, and garbage collection are usually local services, run by a city department or a special district. Public drinking-water systems are overseen under federal standards but **operated locally** (EPA, n.d.).
- **Local roads, parks, libraries, and public health.** The streets in your neighborhood, the county park, the public library, and much of frontline public health are local.
- **Property tax.** The tax that funds much of this — especially schools — is the **property tax**, assessed and collected locally on the value of your home or land.

Now the part the authoritative sources insist on: **local structure VARIES, and there is no single "American local government."** The U.S. Census Bureau's 2022 Census of Governments counted **90,837 local governments** of several different kinds (U.S. Census Bureau, 2023):

| Type | Count (2022) | What it is |
| --- | --- | --- |
| County governments | 3,031 | The county/parish/borough layer (names vary by state) |
| Municipal governments | 19,491 | Incorporated cities, towns, villages |
| Town or township governments | 16,214 | A general-purpose layer common in the Northeast and Midwest |
| Special districts | 39,555 | Single-purpose units (water, fire, transit, etc.) |
| School districts | 12,546 | Independent districts that run public schools |

Why the variety matters in practice: in one place your services come from a **county**; in another from a **city**; in another from a **township**; and in many places from **special districts** layered on top (next section). Some states have strong counties and weak townships; some have the reverse; some cities are "independent" of any county at all. **Don't assume — check who actually provides your service**, because the Census count exists precisely because the answer differs from place to place (National League of Cities, n.d.; NACo, n.d.; U.S. Census Bureau, 2023).

**Check yourself.** Name three services your local government provides, and explain why you can't assume a "county" or a "city" provides them everywhere in the U.S.

## Sources
- U.S. Census Bureau. (2023, August 24). *Census Bureau releases 2022 Census of Governments: Organization data* [Press release]. https://www.census.gov/newsroom/press-releases/2023/census-of-governments.html
- National League of Cities. (n.d.). *Cities 101 — Types of local governments*. https://www.nlc.org/resource/cities-101-types-of-local-us-governments/
- National Association of Counties. (n.d.). *About counties*. https://www.naco.org/about-counties
- U.S. Environmental Protection Agency. (n.d.). *Understanding the Safe Drinking Water Act*. https://www.epa.gov/sdwa`,
    },

    // ── Section 3: How the levels connect ────────────────────────────────
    {
      slug: "money-and-mandates-between-levels",
      title: "6 · How decisions and money flow between levels: grants & mandates",
      section: "How the Levels Connect",
      body: `The three levels aren't sealed off from each other — money and rules flow **between** them constantly. Understanding two words, **grants** and **mandates**, explains most of how a federal or state decision ends up shaping your town.

**Grants — money flows down.** Higher levels send money to lower ones, usually with strings attached.

- A **federal grant** sends federal money to states or localities for a purpose — highways, public transit, schools, disaster recovery. Often the money comes with **conditions**: to get the funds, the state or city must follow federal rules (safety standards, reporting, matching some of the cost).
- States likewise send money to local governments and school districts. A large share of many city and school budgets is **transfers from the level above**, not money raised locally.

**Mandates — rules flow down.** A **mandate** is a requirement one level imposes on another.

- A **funded mandate** comes with money to carry it out. An **unfunded mandate** is a requirement *without* the money to pay for it — which can strain a state or local budget. Concern about unfunded federal mandates led Congress to pass the **Unfunded Mandates Reform Act of 1995**, which requires Congress to weigh the cost a new mandate would push onto state, local, and tribal governments (U.S. GAO, n.d.).

**Why this matters to you:** when your city raises a fee "because of a state requirement," or your school changes a policy "to keep federal funding," you're seeing grants-and-mandates in action. The decision was made at one level, but it lands on you through another. This is also why "just call Washington" rarely fixes a local problem and "just call city hall" rarely fixes a federal one — responsibility is **shared and conditional**, so the useful question is *which level holds the lever for this specific thing.*

**This is the cooperative, money-and-rules plumbing of federalism.** (The *legal* limits on what one level may force on another — and who wins in a true conflict — are the **State vs Federal Power** course; here we're tracing how the money and rules actually move.)

**Check yourself.** Explain the difference between a grant and a mandate, and what makes a mandate "unfunded."

## Sources
- U.S. Government Accountability Office. (n.d.). *Unfunded Mandates Reform Act of 1995 (UMRA)*. https://www.gao.gov/unfunded-mandates-reform-act
- USA.gov. (n.d.-b). *State, county, and municipal government*. https://www.usa.gov/state-government`,
    },

    // ── Section 4: Special districts ─────────────────────────────────────
    {
      slug: "special-districts-and-boards",
      title: "7 · The governments you forget: special districts & boards",
      section: "The Levels You Forget",
      body: `Most people can name the President, the governor, and maybe the mayor. Almost nobody can name the people who run their **water district**, **fire district**, or **transit authority** — even though those officials tax you and run services you use every day. These are **special districts**, and they're the largest and most overlooked category of government in the country.

A **special district** is a local government created to do **one job** (or a small set of jobs), separate from the city or county. The 2022 Census of Governments counted **39,555 special districts**, plus **12,546 independent school districts** — together far more numerous than all the counties, cities, and townships combined (U.S. Census Bureau, 2023). Many have the legal power to **levy their own taxes or fees** to pay for the service they provide (U.S. Census Bureau, 2023).

Common kinds people forget exist:

- **School districts.** The single most consequential board most voters ignore — an elected **school board** sets policy, the budget, and curriculum choices for your public schools.
- **Water, sewer, and irrigation districts.** They supply drinking water, treat sewage, or (in the West) run irrigation canals such as *acequias* (U.S. Census Bureau, 2023).
- **Fire protection districts** and **emergency medical districts** in areas not covered by a city department.
- **Transit authorities** — the bus or rail agency.
- **Hospital, library, park, mosquito-control, and soil-and-water conservation districts** — yes, these are often their own governments with their own elected or appointed boards.

Why this is the most useful lesson in the course: **these low-profile boards have the highest "vote weight" in the country.** A school-board or water-district election can be decided by a handful of votes, the meetings are open to the public, and the decisions — your water rate, your school's calendar, where the bus runs — hit your life directly. The governments people **forget** are exactly the ones where **one engaged person has the most leverage.**

**Check yourself.** What is a special district, name two examples, and explain why these "forgotten" governments are where a single vote or public comment can matter most.

## Sources
- U.S. Census Bureau. (2023, August). *Special district governments manage natural resources in many U.S. communities* [America Counts story]. https://www.census.gov/library/stories/2023/08/2022-census-of-governments.html
- U.S. Census Bureau. (2023, August 24). *Census Bureau releases 2022 Census of Governments: Organization data* [Press release]. https://www.census.gov/newsroom/press-releases/2023/census-of-governments.html`,
    },

    // ── Section 5: Showing up ────────────────────────────────────────────
    {
      slug: "where-to-show-up",
      title: "8 · Where to show up and be heard — at every level",
      section: "Showing Up & Being Heard",
      body: `Knowing who does what is only half the skill; the other half is **showing up at the right door**. Each level has its own ways to be heard, and they get *easier and more direct* the closer you get to home.

**At the LOCAL level (highest leverage, easiest access):**

- **City council / county board meetings.** These are public and usually have a **public-comment** period where any resident can speak. Agendas are posted in advance — read them.
- **School-board meetings.** The same: public meetings, public comment, posted agendas. This is where curriculum, budgets, and school calendars are decided.
- **Special-district boards** (water, fire, transit). Smaller crowds, open meetings — your comment carries weight.
- **Town halls** held by local officials. Show up, ask a specific question, follow up in writing.

**At the STATE level:**

- **Contact your state legislator** (you have a state representative and a state senator in addition to your members of Congress). Find them through your state legislature's website (NCSL, n.d.-a).
- **Testify at committee hearings** on bills you care about, or submit written comment — most legislatures allow it.
- **Comment on state agency rules** during public-comment periods.

**At the FEDERAL level:**

- **Contact your members of Congress** — your one U.S. House representative and two U.S. senators. USA.gov maintains the lookup tools and explains how to reach them effectively (USA.gov, n.d.-c).
- **Submit comments on proposed federal regulations** during their public-comment windows.

Two practical habits that work at every level:

1. **Be specific and local.** "I live at this address; this bill/permit/budget line affects me because…" beats a generic complaint every time.
2. **Put it in writing and keep a record.** A short, dated email with a clear ask creates a paper trail and is easy for staff to act on.

The through-line of this whole course: **the level closest to you is the one where one person is most likely to be heard** — and it's also the level handling your schools, streets, water, and safety. That's the practical case for showing up locally, not just voting nationally.

**Check yourself.** Name one place you can be heard at each level — local, state, and federal — and give one habit that makes your comment more effective everywhere.

## Sources
- USA.gov. (n.d.-c). *How to contact your elected officials*. https://www.usa.gov/elected-officials
- USA.gov. (n.d.-b). *State, county, and municipal government*. https://www.usa.gov/state-government
- National Conference of State Legislatures. (n.d.-a). *About state legislatures*. https://www.ncsl.org/about-state-legislatures`,
    },

    // ── Section 6: Practice ──────────────────────────────────────────────
    {
      slug: "practice-who-does-what",
      title: "9 · Practice: which level does what?",
      section: "Practice",
      exercise: {
        instructions:
          "For each service, fill in the level of government that primarily handles it: federal, state, or local. Spelling and capitalization are forgiving.",
        items: [
          {
            prompt: "National defense and the armed forces are handled at the ___ level.",
            answer: "federal",
            accept: ["national"],
            explanation:
              "Defense and foreign affairs are federal — only the national government runs the military and conducts foreign policy.",
          },
          {
            prompt: "Issuing your driver's license (the DMV) is a ___ government job.",
            answer: "state",
            explanation:
              "The DMV is a state agency. Rules — and even the office's name — vary from state to state.",
          },
          {
            prompt: "Picking up the trash and running the water system is usually a ___ government job.",
            answer: "local",
            explanation:
              "Water, sewer, and trash are local services, run by a city department or a special district (operated under federal drinking-water standards).",
          },
          {
            prompt: "Social Security retirement checks are paid by the ___ government.",
            answer: "federal",
            accept: ["national"],
            explanation:
              "Social Security is run by the federal Social Security Administration — the same program nationwide, which is the tell that it's federal.",
          },
          {
            prompt: "Setting K–12 graduation standards and licensing teachers is a ___ government job.",
            answer: "state",
            explanation:
              "States set education standards and license teachers; the day-to-day operation of schools is usually a local school district's job.",
          },
          {
            prompt: "Zoning — deciding what can be built next door — is decided at the ___ level.",
            answer: "local",
            explanation:
              "Zoning and land use are local powers, usually exercised by a city or county planning/zoning body.",
          },
        ],
      },
    },
    {
      slug: "practice-structures-and-engagement",
      title: "10 · Practice: structures and showing up",
      section: "Practice",
      exercise: {
        instructions: "Fill in each blank, then check.",
        items: [
          {
            prompt:
              "A local government created to do ONE job (like water or fire), separate from the city or county, is called a special ___.",
            answer: "district",
            explanation:
              "Special districts (39,555 in the 2022 Census of Governments) are single-purpose local governments — water, fire, transit, and more.",
          },
          {
            prompt: "The elected body that runs your public schools day-to-day is the school ___.",
            answer: "board",
            explanation:
              "An elected school board governs the local school district — one of the highest-leverage, lowest-watched elections you can vote in.",
          },
          {
            prompt:
              "Money sent from a higher level of government to a lower one, usually with conditions attached, is called a ___.",
            answer: "grant",
            accept: ["grants"],
            explanation:
              "Grants (e.g., federal highway or education grants) move money down between levels, typically with strings attached.",
          },
          {
            prompt:
              "A requirement imposed by one level on another WITHOUT money to pay for it is an ___ mandate.",
            answer: "unfunded",
            explanation:
              "An unfunded mandate is a requirement with no funding to carry it out; the Unfunded Mandates Reform Act of 1995 made Congress weigh such costs.",
          },
          {
            prompt:
              "The open part of a city-council or school-board meeting where any resident may speak is called public ___.",
            answer: "comment",
            explanation:
              "Public comment is your direct, in-person way to be heard at the local level — the level where one person's voice carries the most weight.",
          },
          {
            prompt:
              "TRUE or FALSE: every U.S. community is organized the same way, so you can assume a 'county' provides your services everywhere.",
            answer: "false",
            explanation:
              "False. Local structure VARIES by state — counties, cities, townships, and special districts are combined differently, which is why the Census counts 90,837 local governments. Check who actually serves your area.",
          },
        ],
      },
    },

    // ── Section 7: Final quiz ────────────────────────────────────────────
    {
      slug: "us-state-local-gov-quiz",
      title: "11 · Check your understanding",
      section: "Final Quiz",
      quiz: {
        passingScore: 70,
        questions: [
          {
            prompt: "How many levels of government does a typical person in the U.S. live under at once?",
            options: ["One", "Two", "At least three (federal, state, local)", "Five"],
            correctIndex: 2,
            explanation:
              "You live under federal, state, and local government simultaneously — and usually under several local governments at once (county, city, school district, special districts).",
            sourceLessonSlug: "three-levels-overview",
          },
          {
            prompt: "A streetlight on your corner is out. Which level of government do you contact first?",
            options: ["Federal", "State", "Local", "The Supreme Court"],
            correctIndex: 2,
            explanation:
              "Streetlights, potholes, and trash are local services. Starting at the right level — here, your city or county — is the single most useful civic skill.",
            sourceLessonSlug: "layered-government-idea",
          },
          {
            prompt: "Which of these is primarily a FEDERAL responsibility?",
            options: [
              "Issuing your driver's license",
              "Running Social Security and Medicare",
              "Zoning your neighborhood",
              "Setting K–12 graduation requirements",
            ],
            correctIndex: 1,
            explanation:
              "Social Security and Medicare are federal programs. A useful tell: if a program works the same in every state, it's probably federal.",
            sourceLessonSlug: "what-federal-handles",
          },
          {
            prompt: "Which level of government primarily ADMINISTERS elections (registration rules, deadlines, voting machinery)?",
            options: ["The federal government", "The states (often via counties)", "The Supreme Court", "Special districts only"],
            correctIndex: 1,
            explanation:
              "States administer elections, which is why registration rules, deadlines, and ID requirements differ from state to state. Your state's election office is the authoritative source.",
            sourceLessonSlug: "what-states-handle",
          },
          {
            prompt: "Why can't you assume a 'county' or a 'city' provides your local services everywhere in the U.S.?",
            options: [
              "Because local government structure varies by state",
              "Because all local services are actually federal",
              "Because counties were abolished",
              "Because only cities provide services",
            ],
            correctIndex: 0,
            explanation:
              "Local structure varies: counties, cities, townships, and special districts are combined differently across (and within) states — which is why the 2022 Census of Governments counted 90,837 local governments.",
            sourceLessonSlug: "what-local-handles",
          },
          {
            prompt: "What is an 'unfunded mandate'?",
            options: [
              "Money one level of government grants to another",
              "A requirement one level imposes on another without providing the money to carry it out",
              "A tax collected by special districts",
              "A federal program run identically in every state",
            ],
            correctIndex: 1,
            explanation:
              "An unfunded mandate is a requirement with no funding attached; concern about them led to the Unfunded Mandates Reform Act of 1995. A grant, by contrast, sends money down (often with conditions).",
            sourceLessonSlug: "money-and-mandates-between-levels",
          },
          {
            prompt: "What is a 'special district'?",
            options: [
              "A branch of the federal government",
              "A local government created to do one job (like water, fire, or transit), separate from the city or county",
              "Another name for a state legislature",
              "A type of federal court",
            ],
            correctIndex: 1,
            explanation:
              "Special districts are single-purpose local governments — the largest category of government in the U.S. (39,555 in 2022), often with power to levy their own taxes or fees.",
            sourceLessonSlug: "special-districts-and-boards",
          },
          {
            prompt: "Which body runs your public schools day-to-day and is one of the highest-leverage elections you can vote in?",
            options: ["Congress", "The state DMV", "The elected school board", "The federal Department of Education"],
            correctIndex: 2,
            explanation:
              "An elected school board governs the local school district. These low-turnout races and open meetings are where one engaged person has the most leverage.",
            sourceLessonSlug: "special-districts-and-boards",
          },
          {
            prompt: "At a city-council or school-board meeting, what is the part where any resident may speak called?",
            options: ["Judicial review", "Public comment", "A filibuster", "An executive session"],
            correctIndex: 1,
            explanation:
              "Public comment is your direct way to be heard locally — the level that handles your schools, streets, and water, and where your voice carries the most weight.",
            sourceLessonSlug: "where-to-show-up",
          },
          {
            prompt: "At the federal level, how many members of Congress represent you directly?",
            options: [
              "One U.S. House representative and two U.S. senators",
              "Only the President",
              "Your governor and mayor",
              "The entire Supreme Court",
            ],
            correctIndex: 0,
            explanation:
              "You have one U.S. House representative (for your district) and two U.S. senators (for your state). USA.gov's tools help you find and contact all of them.",
            sourceLessonSlug: "where-to-show-up",
          },
        ],
      },
    },
  ],
};
