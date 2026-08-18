// Authored "Tribal Nations and Indigenous Governance", course 6 of Path A ("Who Has the Power?
// Governments From the Block to the Globe"), planned in
// plans/46-structures-paths-government-and-business.md as course 6 of nine.
//
// WHAT THIS COURSE IS
// -------------------
// The course that develops, in full, the one correction course 1 ("Who Has the Power to Do This?")
// made in a single section: tribal nations are NOT a rung on the federal/state/local ladder. They
// are separate sovereigns whose authority is PRE-EXISTING and inherent, not delegated down a stack.
// Everything in this course radiates from that one load-bearing idea. It covers treaties as supreme
// law and the trust relationship; how nations govern today (the Indian Reorganization Act of 1934
// versus traditional and customary governance, with the Haudenosaunee Confederacy as a named case);
// and the hard legal edges (Public Law 280, McGirt v. Oklahoma, and Alaska Native corporations,
// which are corporations rather than reservations, the sharpest Path A to Path B crossover).
//
// THE CARE RULES (carried verbatim from the lacrosse course, which handled this correctly)
// ---------------------------------------------------------------------------------------
//   * Teach THAT traditional governance exists, WHOSE it is, and WHY it matters, then STOP. Reproduce
//     NO ceremonial procedure or restricted internal detail. Where the course stops, it tells the
//     learner the silence is deliberate and why.
//   * Lead with nations' OWN WORDS and with Indigenous scholarship: the Haudenosaunee Confederacy's
//     and Onondaga Nation's own published materials; Vine Deloria Jr. (Standing Rock Sioux) and
//     Clifford Lytle on the IRA; the Navajo Nation's own published Fundamental Laws; William L.
//     Iggiagruk Hensley (Inupiaq) on ANCSA. Outside commentators and the black-letter treatise
//     (Cohen) support, they do not lead.
//   * Treat the 574 federally recognised tribes as 574 DISTINCT governments, never as one monolithic
//     "Native American government." Name specific nations when making specific claims.
//   * Neutral, respectful, PRESENT TENSE where the nation still governs. These are living
//     governments, not history.
//
// SOURCING DISCIPLINE (the load-bearing part of the file)
// ------------------------------------------------------
//   * Court cases are cited by reporter (authoritative on their own). Justia URLs are given only for
//     the older US Reports cases whose volume/page URL pattern is stable and confirmed; the newest
//     cases (McGirt, Castro-Huerta, Herrera) carry the reporter cite alone.
//   * Statutes are cited by name, public-law or Statutes-at-Large number, and U.S.C. section.
//   * Where a classification or a historical influence is genuinely contested (the "influence thesis"
//     about the Haudenosaunee and the US Constitution; the inherent-sovereignty versus plenary-power
//     tension), the disagreement is taught, not smoothed over.
//   * NO fabricated nation, treaty, case, date, statute, quotation, or statistic. No invented map
//     boundary: the map uses real, ordinary place coordinates as stand-ins for areas.
//
// House rule: NO em-dashes or en-dashes in prose. Regular hyphens only. Verbatim cited titles inside
// a `## Sources` block are the only place a dash could survive, and this file avoids them there too.

import type { AuthoredCourse } from "./authored-course";

export const TRIBAL_NATIONS_GOVERNANCE_COURSE: AuthoredCourse = {
  title: "Tribal Nations and Indigenous Governance",
  description:
    "The course that develops the one correction most civics teaching gets wrong: a tribal nation is not a rung on the federal, state, and local ladder at all. It is a separate sovereign, and its authority is pre-existing and inherent, older than the United States, not delegated down a stack the way a city's power is delegated from a state. Course 1 of this path, Who Has the Power to Do This?, introduced that idea in a single section; this course earns it in full, and with the care such content requires. You will learn where tribal sovereignty comes from and why the Marshall Court called the nations domestic dependent nations; why treaties rank as supreme law under the Supremacy Clause and how courts read them; how nations govern today, the Indian Reorganization Act of 1934 and its model constitutions set against traditional and customary governance, with the Haudenosaunee Confederacy as a named living case; and the hard legal edges, Public Law 280, McGirt v. Oklahoma, and Alaska Native corporations, which are corporations rather than reservations and are the sharpest crossover between this path and the business-forms path. This course leads with nations' own words and Indigenous scholarship, treats the 574 federally recognized tribes as 574 distinct governments, and stops deliberately short of any nation's ceremonies or restricted internal detail, because that is not the course's to give. It teaches how to read authority. It is not legal advice.",
  lessons: [
    // ===================================================================================
    // SECTION 1 - A separate sovereign, not a rung on the ladder
    // ===================================================================================
    {
      slug: "tribal-what-this-is",
      title: "1 - What this course teaches, and where it stops",
      section: "Section 1 - A separate sovereign, not a rung on the ladder",
      body: `This course develops one idea until you can use it anywhere: **a tribal nation is a separate sovereign, and its authority is pre-existing, not delegated.** Course 1 of this path, "Who Has the Power to Do This?", taught the vertical stack (nation, state, local, special district) and then paused to say that tribal nations are not on that ladder at all. This course is that pause, opened all the way up.

## First, the boundary. This is not legal advice.

**This is a course about how to READ authority. It is not legal advice, and it cannot tell you whether any particular action was lawful.** Federal Indian law is one of the most intricate fields in American law, and nothing here substitutes for a lawyer or for a nation's own counsel. What the course teaches is where to look and what the words mean, so you can open a treaty, a tribal constitution, or a court opinion and get oriented.

## Two boundaries that are specific to this subject

**One. There is no single "Native American government."** There are, by the Department of the Interior's own count, **574 federally recognized tribal nations** in the United States, each a distinct government with its own history, territory, laws, and relationship to the United States (U.S. Department of the Interior, Bureau of Indian Affairs, 2024). Some also hold recognition from a state and not the federal government; some are not recognized at all. **When this course makes a specific claim, it names a specific nation**, because "the tribes" governed as one is a fiction, and a harmful one. Five hundred and seventy-four governments are not a demographic. They are five hundred and seventy-four governments.

**Two. This course stops before ceremony and restricted knowledge, on purpose.** Many nations govern in part through traditional, spiritual, and ceremonial practice. This course will teach **that** such governance exists, **whose** it is, and **why** it matters, and then it will stop. **You will not find ceremonial procedure, restricted internal protocol, or "how a nation runs its own council" here.** Where a nation publishes something about its own government, this course quotes the nation. Where it does not, this course does not go hunting for an outsider's description to print instead. **The silence is deliberate, and it is a form of respect, not an omission**, and the right way to learn more is to listen to the nations themselves, not to read more outside commentary about them.

## What "separate sovereign" corrects

Most adults carry a picture of American government as one ladder, the nation on top, states beneath, cities beneath states. Course 1 showed two things wrong with that picture: cities are creatures of the state, and tribal nations are not on the ladder at all. **This course is entirely about the second correction.** A tribal nation does not sit between the state and the county. It is a government the United States encountered as a nation and dealt with by treaty, and its authority comes from its own sovereignty rather than from any grant in the federal stack.

## Where the course goes

Five moves, in order. **(1)** Where tribal sovereignty comes from, and the trust relationship. **(2)** Treaties as supreme law, and how to read one. **(3)** How nations govern today: the Indian Reorganization Act of 1934 and its model constitutions, set against traditional and customary governance, with the Haudenosaunee Confederacy as a named case. **(4)** The hard legal edges: Public Law 280, McGirt v. Oklahoma, and Alaska Native corporations. **(5)** A map that draws the tribal layer as its own separate thing, and a capstone you do from the record.

## Sources
- U.S. Department of the Interior, Bureau of Indian Affairs. (2024). Federally recognized Indian tribes list.
- U.S. Const. art. VI. https://constitution.congress.gov/constitution/article-6/
- Worcester v. Georgia, 31 U.S. (6 Pet.) 515 (1832). https://supreme.justia.com/cases/federal/us/31/515/`,
    },
    {
      slug: "tribal-inherent-sovereignty",
      title: "2 - Sovereignty that predates the United States",
      section: "Section 1 - A separate sovereign, not a rung on the ladder",
      body: `Here is the single most important sentence in the course, and the rest of it is consequences of this sentence. **A tribal nation's authority is inherent and pre-existing. It was not delegated downward by the United States, because the nations governed themselves before the United States existed.** A city gets its power from a state that made it. A tribal nation kept the power it never gave up.

## The retained-powers principle

The classic statement of the black-letter rule comes from Felix Cohen's "Handbook of Federal Indian Law," long the field's foundational treatise: the powers of an Indian tribe are, in general, **not delegated powers granted by acts of Congress, but inherent powers of a limited sovereignty which has never been extinguished** (Cohen, 1942). Read that carefully, because it inverts the stack. In the stack, power flows down by grant, and a body has only what it was handed. **A tribal nation is the opposite: it began with full sovereignty and retains everything that has not been taken away.** The question is never "what were you granted?" It is "what, if anything, was withdrawn?"

The Supreme Court has said the same. In United States v. Wheeler, the Court held that a tribe's power to punish its own members is not a grant from Congress but **an inherent part of the tribe's retained sovereignty**, sovereignty of "a unique and limited character" that existed before the Constitution and survives except where Congress has limited it (United States v. Wheeler, 1978).

## The Marshall trilogy, in one paragraph

The idea was fixed early. In Cherokee Nation v. Georgia, Chief Justice Marshall called the tribes **"domestic dependent nations"**, a phrase built to hold a tension: nations (sovereign in their own right), but domestic and dependent (inside the United States and under its protection) (Cherokee Nation v. Georgia, 1831). A year later, Worcester v. Georgia held the Cherokee Nation to be **"a distinct community, occupying its own territory ... in which the laws of Georgia can have no force,"** and held that dealings with the tribes were the business of the **federal government, not the states** (Worcester v. Georgia, 1832). Those two cases, with Johnson v. M'Intosh (1823) before them, are called the Marshall trilogy, and they still anchor the field.

## Why this is not a rung on the ladder

| The vertical stack (course 1) | A tribal nation |
|---|---|
| Power flows DOWN by grant | Power is inherent and pre-existing |
| A city is created by the state | A nation predates the United States |
| Authority is delegated | Authority is retained, unless withdrawn |
| The relationship is hierarchical | The relationship is nation to nation |

**So a tribal nation is not "below" a state the way a city is.** It deals with the federal government directly. A state generally has no more authority over a tribal nation's internal affairs than it would over a foreign government's, which is exactly what Worcester established when it kept Georgia's law off Cherokee land. **Drawing the tribal nation as one more rung would not be a simplification. It would be a factual error about where the authority comes from.**

## Sources
- Cohen, F. S. (1942). Handbook of Federal Indian Law. U.S. Government Printing Office.
- United States v. Wheeler, 435 U.S. 313 (1978). https://supreme.justia.com/cases/federal/us/435/313/
- Cherokee Nation v. Georgia, 30 U.S. (5 Pet.) 1 (1831). https://supreme.justia.com/cases/federal/us/30/1/
- Worcester v. Georgia, 31 U.S. (6 Pet.) 515 (1832). https://supreme.justia.com/cases/federal/us/31/515/`,
      recallContent: [
        {
          prompt: "How many federally recognised tribal nations are there, and why does the course insist on the number?",
          answer: "574 (U.S. Department of the Interior). The course names it to refuse the fiction of one 'Native American government': there are 574 distinct governments, each with its own history, territory, and laws, so specific claims name specific nations.",
        },
        {
          prompt: "What does this course teach about traditional governance, and where does it deliberately stop?",
          answer: "It teaches THAT traditional and ceremonial governance exists, WHOSE it is, and WHY it matters, then stops. It reproduces no ceremonial procedure or restricted internal detail, quotes a nation's own published words where they exist, and treats the silence as respect, not omission.",
        },
        {
          prompt: "Which of course 1's two corrections to the 'one ladder' picture does this course develop?",
          answer: "The second: that tribal nations are not a rung on the federal, state, local ladder at all, but separate sovereigns. (The first was that cities are creatures of the state.)",
        },
      ],
    },
    {
      slug: "tribal-trust-relationship",
      title: "3 - The trust relationship, and a tension to hold",
      section: "Section 1 - A separate sovereign, not a rung on the ladder",
      body: `The last lesson placed tribal nations off the ladder as separate sovereigns. This one describes how the relationship with the United States actually runs, and it names a genuine tension in the doctrine that you should hold rather than resolve.

## Government to government, and the trust responsibility

The United States deals with tribal nations **nation to nation**, and it also carries what the law calls a **trust responsibility** toward them: a duty of protection and good faith that traces back to the "domestic dependent nations" framing of Cherokee Nation v. Georgia (1831), where Marshall likened the relationship to that of a ward to a guardian. The Supreme Court has described this duty in strong terms, holding that the government's dealings with tribes are "governed by the most exacting fiduciary standards" and involve **"moral obligations of the highest responsibility and trust"** (Seminole Nation v. United States, 1942).

**Two things are true together, and the relationship is neither of the two familiar kinds.** A tribal nation is a sovereign with its own government, and the United States owes it enforceable duties of protection. It is not the relationship of a superior to a subordinate agency, and it is not the relationship of two unrelated foreign states. **It is its own category**, and reading any action in this field means holding both halves at once.

## The tension you should hold, not resolve

Here the honest teaching move is to name a disagreement rather than smooth it over. **Federal Indian law asserts, at the same time, that tribal sovereignty is inherent and pre-existing, and that Congress holds broad ("plenary") power over Indian affairs.** Those two ideas pull hard against each other. If sovereignty is inherent, how can one outside legislature hold plenary power over it? The doctrine has never fully answered that, and tribal governments, scholars, and courts have contested the balance for two centuries.

**This course does not resolve the tension, because it is genuinely unresolved.** What it asks of you is precision: when you read an action touching a tribal nation, notice **which principle is being invoked**, inherent sovereignty or federal plenary power, because most disputes in the field turn on that choice. You will watch the tension do real work later in the course: Public Law 280 and the termination policy are plenary power pushing in; McGirt is the retained-sovereignty and treaty principles pushing back.

## Why the trust duty is not charity

**The trust responsibility is a duty the United States owes, not a favor it grants.** It arises from the treaties and from the taking of Native land, and courts have at times enforced it against the government for money damages when it mismanaged tribal resources. Reading it as generosity gets the direction of obligation backwards. **It is the price of the promises the United States made**, which is the doorway into Section 2, because those promises are treaties, and treaties are supreme law.

## Sources
- Cherokee Nation v. Georgia, 30 U.S. (5 Pet.) 1 (1831). https://supreme.justia.com/cases/federal/us/30/1/
- Seminole Nation v. United States, 316 U.S. 286 (1942). https://supreme.justia.com/cases/federal/us/316/286/
- Cohen, F. S. (1942). Handbook of Federal Indian Law. U.S. Government Printing Office.`,
      recallContent: [
        {
          prompt: "Where does a tribal nation's authority come from, and how is that different from a city's?",
          answer: "From the nation's own inherent, pre-existing sovereignty, which predates the United States. A city's power is delegated down from the state; a tribal nation's is retained, not granted, and survives except where Congress has withdrawn it (Cohen, 1942; United States v. Wheeler, 1978).",
        },
        {
          prompt: "What did Cherokee Nation v. Georgia and Worcester v. Georgia each establish?",
          answer: "Cherokee Nation v. Georgia (1831) called the tribes 'domestic dependent nations.' Worcester v. Georgia (1832) held the Cherokee Nation a distinct community on its own territory where Georgia's laws had no force, and that dealings with tribes were federal, not state, business.",
        },
        {
          prompt: "Why is drawing a tribal nation as one more rung on the stack a factual error, not just a simplification?",
          answer: "Because the stack is delegated power flowing downward; a tribal nation's authority is retained and pre-existing, and the relationship is nation to nation, not hierarchical. The source of the power is different in kind, not just in degree.",
        },
      ],
    },
    {
      slug: "tribal-quiz-sovereign",
      title: "4 - Quiz: a separate sovereign",
      section: "Section 1 - A separate sovereign, not a rung on the ladder",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "The single load-bearing idea of this course is that a tribal nation's authority is:",
            options: [
              "Granted by a federal statute",
              "Delegated down from the state",
              "Inherent and pre-existing",
              "Created by a county charter",
            ],
            correctIndex: 2,
            explanation: "A tribal nation kept the power it never gave up. Its sovereignty predates the United States and is retained, not delegated downward like a city's power.",
            sourceLessonSlug: "tribal-inherent-sovereignty",
          },
          {
            prompt: "By the Department of the Interior's count, the number of federally recognised tribal nations is:",
            options: [
              "574 distinct governments",
              "One national government",
              "Fifty, one per state",
              "About a dozen nations",
            ],
            correctIndex: 0,
            explanation: "There are 574 federally recognized tribal nations, each a distinct government. 'The tribes' governed as one is a fiction; specific claims name specific nations.",
            sourceLessonSlug: "tribal-what-this-is",
          },
          {
            prompt: "Cohen's Handbook states the retained-powers principle: tribal powers are:",
            options: [
              "A gift renewed by Congress yearly",
              "Borrowed from the host state",
              "New powers invented after 1934",
              "Inherent powers never extinguished",
            ],
            correctIndex: 3,
            explanation: "The powers are 'inherent powers of a limited sovereignty which has never been extinguished,' not delegated grants. The question is what was withdrawn, not what was granted.",
            sourceLessonSlug: "tribal-inherent-sovereignty",
          },
          {
            prompt: "In Cherokee Nation v. Georgia (1831), Marshall called the tribes:",
            options: [
              "Ordinary foreign nations",
              "Domestic dependent nations",
              "Counties of the states",
              "Private membership clubs",
            ],
            correctIndex: 1,
            explanation: "The phrase holds a tension: nations (sovereign in their own right), yet domestic and dependent (inside the United States and under its protection).",
            sourceLessonSlug: "tribal-inherent-sovereignty",
          },
          {
            prompt: "Worcester v. Georgia (1832) held that dealings with the tribes were the business of:",
            options: [
              "The state of Georgia alone",
              "The county courts nearby",
              "The federal government, not states",
              "The United Nations later",
            ],
            correctIndex: 2,
            explanation: "The Court held the Cherokee Nation a distinct community on its own territory where Georgia's laws had no force, and that tribal relations were federal, not state, business.",
            sourceLessonSlug: "tribal-inherent-sovereignty",
          },
          {
            prompt: "United States v. Wheeler (1978) described a tribe's power to punish its own members as:",
            options: [
              "A power delegated by Congress",
              "A power on loan from the state",
              "A privilege the BIA can revoke",
              "Part of its retained sovereignty",
            ],
            correctIndex: 3,
            explanation: "The Court held it an inherent part of the tribe's retained sovereignty, of a unique and limited character that predates the Constitution, not a congressional grant.",
            sourceLessonSlug: "tribal-inherent-sovereignty",
          },
          {
            prompt: "The federal 'trust responsibility' toward tribal nations is best understood as:",
            options: [
              "A duty owed, not a favor given",
              "A charity the government offers",
              "A tax break for the states",
              "A rule invented in the 1950s",
            ],
            correctIndex: 0,
            explanation: "It is the price of the promises the United States made, arising from treaties and land taken. Reading it as generosity gets the direction of obligation backwards.",
            sourceLessonSlug: "tribal-trust-relationship",
          },
          {
            prompt: "Seminole Nation v. United States (1942) described the trust duty in terms of:",
            options: [
              "The lowest possible standard",
              "A purely political promise",
              "The most exacting fiduciary standards",
              "An option the government may skip",
            ],
            correctIndex: 2,
            explanation: "The Court spoke of 'moral obligations of the highest responsibility and trust' and the most exacting fiduciary standards, at times enforced against the government for damages.",
            sourceLessonSlug: "tribal-trust-relationship",
          },
          {
            prompt: "The genuine tension the course tells you to HOLD rather than resolve is between inherent sovereignty and:",
            options: [
              "State control of reservations",
              "County zoning authority",
              "The rules of private clubs",
              "Broad federal plenary power",
            ],
            correctIndex: 3,
            explanation: "Federal Indian law asserts both inherent, pre-existing tribal sovereignty and broad congressional power over Indian affairs. The course names the unresolved tension rather than smoothing it.",
            sourceLessonSlug: "tribal-trust-relationship",
          },
          {
            prompt: "A state's authority over a tribal nation's internal affairs is generally:",
            options: [
              "The same as over its own cities",
              "About as limited as over a foreign one",
              "Greater than the federal government's",
              "Unlimited inside the state border",
            ],
            correctIndex: 1,
            explanation: "Worcester kept Georgia's law off Cherokee land. A state generally has no more say over a tribal nation's internal affairs than over a foreign government's.",
            sourceLessonSlug: "tribal-inherent-sovereignty",
          },
          {
            prompt: "This course stops deliberately short of describing:",
            options: [
              "Where tribal authority comes from",
              "The holding of Worcester v. Georgia",
              "Any nation's ceremony or restricted detail",
              "The nation-to-nation relationship",
            ],
            correctIndex: 2,
            explanation: "The care rule: teach that traditional governance exists, whose it is, and why it matters, then stop. It reproduces no ceremonial or restricted internal detail, and the silence is deliberate respect.",
            sourceLessonSlug: "tribal-what-this-is",
          },
          {
            prompt: "The 'Marshall trilogy' refers to a set of early cases that:",
            options: [
              "Ended all tribal governments",
              "Still anchor federal Indian law",
              "Were later fully overruled",
              "Dealt only with state taxes",
            ],
            correctIndex: 1,
            explanation: "Johnson v. M'Intosh (1823), Cherokee Nation v. Georgia (1831), and Worcester v. Georgia (1832) fixed the foundational framework that still anchors the field.",
            sourceLessonSlug: "tribal-inherent-sovereignty",
          },
          {
            prompt: "Compared with the vertical stack, a tribal nation's relationship to the United States is:",
            options: [
              "Hierarchical, like city to state",
              "A branch of the state government",
              "Nation to nation, government to government",
              "A special district with one purpose",
            ],
            correctIndex: 2,
            explanation: "The stack is a ladder of delegation; the tribal relationship runs nation to nation, directly with the federal government, not up and down a hierarchy.",
            sourceLessonSlug: "tribal-trust-relationship",
          },
          {
            prompt: "When you read an action touching a tribal nation, precision means noticing:",
            options: [
              "The population of the county",
              "How old the reservation is",
              "Whether the state approves it",
              "Which principle is being invoked",
            ],
            correctIndex: 3,
            explanation: "Most disputes turn on the choice between inherent sovereignty and federal plenary power. Naming which principle an action rests on is the analytic move.",
            sourceLessonSlug: "tribal-trust-relationship",
          },
          {
            prompt: "The course refuses the fiction of one 'Native American government' because:",
            options: [
              "The nations all govern alike",
              "574 nations are distinct governments",
              "Only the largest nations matter",
              "The count changes every week",
            ],
            correctIndex: 1,
            explanation: "574 federally recognized nations each have their own history, territory, and laws. Treating them as one monolith is a fiction, and a harmful one, so claims name specific nations.",
            sourceLessonSlug: "tribal-what-this-is",
          },
        ],
      },
    },
    // ===================================================================================
    // SECTION 2 - Treaties as supreme law
    // ===================================================================================
    {
      slug: "tribal-treaties-supreme-law",
      title: "5 - Treaties: nation to nation, ranked as supreme law",
      section: "Section 2 - Treaties as supreme law",
      body: `If tribal sovereignty is the foundation, treaties are the walls built on it. **The United States made treaties with tribal nations exactly as it made them with foreign powers, and under the Constitution those treaties are supreme law.** This is the fact that places tribal authority so high in the chain course 1 taught: not below a state statute, but up near the top with federal law.

## The Constitution names the tribes twice

**The Indian Commerce Clause** gives Congress power "to regulate Commerce ... with the Indian Tribes" (U.S. Const. art. I, sec. 8, cl. 3). The framers put tribal relations in federal hands from the start, which is why a state cannot conduct its own Indian policy. **The Supremacy Clause** then makes the Constitution "and all Treaties made, or which shall be made, under the Authority of the United States ... the supreme Law of the Land ... any Thing in the Constitution or Laws of any State to the Contrary notwithstanding" (U.S. Const. art. VI). **Read those two clauses together and the placement is settled**: a treaty with a tribal nation ranks with federal statutes as supreme law, and binds the states.

## Treaties, by the hundreds, over nearly a century

This was not a handful of documents. **Between the Treaty with the Delawares at Fort Pitt in 1778, the first, and 1871, the United States ratified hundreds of treaties with tribal nations** (Prucha, 1994). Each is a negotiated agreement between two governments, exchanging land, defining borders, and, crucially, **reserving rights**: a nation ceding territory would reserve to itself hunting, fishing, water, or governing rights on the land it kept or even on the land it ceded. Those reserved rights are not gifts from the United States. **They are what the nation held back and never surrendered**, which is why the next lesson calls a treaty "a grant from the tribe, not to it."

## 1871: Congress ends treaty-making, but not the treaties

In 1871 Congress attached a rider to an appropriations act declaring that no tribal nation would thereafter be recognized as an independent power "with whom the United States may contract by treaty" (Act of March 3, 1871, 16 Stat. 566, codified at 25 U.S.C. sec. 71). **Read the limit precisely, because people overstate it.** The 1871 Act ended the making of new treaties. **It did not, and could not, cancel the treaties already ratified.** Those remain in force as supreme law today, and courts still enforce them. After 1871 the United States dealt with nations largely through statutes and agreements instead, but the standing treaties kept their rank.

## Why this matters for the method

When course 1 built its chain of authority, it put treaties near the top and said "tribal treaties live here." **This is the payoff.** If you are reading an action that touches a tribal nation, a ratified treaty is not background color. It is operative supreme law that can beat a conflicting state statute outright, and it is often the specific document the whole dispute is about. **Find the treaty, then read what the nation reserved**, and you are most of the way to the answer.

## Sources
- U.S. Const. art. I, sec. 8, cl. 3. https://constitution.congress.gov/constitution/article-1/section-8/
- U.S. Const. art. VI. https://constitution.congress.gov/constitution/article-6/
- Act of March 3, 1871, 16 Stat. 566 (codified at 25 U.S.C. sec. 71).
- Prucha, F. P. (1994). American Indian Treaties: The History of a Political Anomaly. University of California Press.`,
      recallContent: [
        {
          prompt: "What is the federal 'trust responsibility,' and is it charity?",
          answer: "A duty of protection and good faith the United States owes tribal nations, described in Seminole Nation v. United States (1942) as 'the most exacting fiduciary standards.' It is not charity; it is the price of the promises made in treaties and the taking of land, a duty owed rather than a favor given.",
        },
        {
          prompt: "Name the two-part tension in federal Indian law the course tells you to hold.",
          answer: "That tribal sovereignty is inherent and pre-existing, AND that Congress holds broad ('plenary') power over Indian affairs. The two pull against each other; the course does not resolve it and asks you to notice which principle an action invokes.",
        },
        {
          prompt: "What kind of relationship does the United States have with a tribal nation, if not superior-to-agency or foreign-to-foreign?",
          answer: "Its own category: government to government (nation to nation), in which the nation is a sovereign with its own government AND the United States owes it enforceable trust duties. Both halves are true at once.",
        },
      ],
    },
    {
      slug: "tribal-reading-treaties",
      title: "6 - Reading a treaty: the canons, and treaties as living law",
      section: "Section 2 - Treaties as supreme law",
      body: `A treaty is supreme law, but supreme law you have to read correctly. Courts read tribal treaties under special rules called the **Indian canons of construction**, and those rules exist for a blunt reason: the treaties were written in English, by the United States, with the party that did not draft them at a disadvantage. This lesson gives you the canons and shows treaties still deciding cases now.

## The three canons

Over many decades the Supreme Court settled on three rules for reading treaties (and statutes) touching tribal nations:

| Canon | What it means |
|---|---|
| **Read as the tribe understood it** | Interpret terms as the nation would have understood them at signing, not by fine legal English |
| **Ambiguities favor the tribe** | Doubtful language is resolved in the nation's favor |
| **A grant FROM the tribe, not TO it** | A treaty reserves to the nation everything it did not clearly give away |

**That third canon is the reserved-rights idea, and it is the one that surprises people.** A treaty is not the United States handing rights down to a nation. It is the nation ceding some things and **keeping everything else.** The Court put it plainly in the water context: when a nation set aside a reservation, it implicitly reserved enough water to make the land usable, whether or not the treaty said so, because the reservation would be pointless without it (Winters v. United States, 1908). Rights the treaty never mentions can still exist, because they were never surrendered.

## Treaties are living law, decided now

These are not museum pieces. In **Herrera v. Wyoming (2019)**, a member of the Crow Tribe was prosecuted for hunting in the Bighorn National Forest, and the Supreme Court held that the Crow Tribe's **1868 treaty right to hunt on unoccupied lands survived** Wyoming's admission as a state and the creation of the forest, because Congress had not clearly abrogated it (Herrera v. Wyoming, 2019). A promise made in 1868 decided a criminal case in 2019. **That is the treaty-as-supreme-law principle doing work in the present**, and it is the same logic McGirt will use in Section 4: a treaty right persists until Congress clearly ends it.

## The clear-statement rule, which ties it together

Behind both the canons and these cases sits one rule you should carry out of this section. **Congress can limit or abrogate a treaty right, because of its plenary power, but courts will not find that it did so unless Congress said so clearly.** Silence, ambiguity, or a later general statute that does not mention the right will not do it. **This is the retained-sovereignty principle expressed as a reading rule**: because the nation's rights are its own and pre-existing, they are presumed to continue, and the burden is on whoever claims they ended to point to a clear act of Congress. Hold that rule; it is the hinge of the McGirt lesson.

## Sources
- Winters v. United States, 207 U.S. 564 (1908). https://supreme.justia.com/cases/federal/us/207/564/
- Herrera v. Wyoming, 139 S. Ct. 1686 (2019).
- Worcester v. Georgia, 31 U.S. (6 Pet.) 515 (1832). https://supreme.justia.com/cases/federal/us/31/515/`,
      recallContent: [
        {
          prompt: "Under Article VI, what rank do treaties made with tribal nations hold, and why does it matter?",
          answer: "They are part of the supreme law of the land, ranked with federal statutes and binding on the states (Supremacy Clause). A ratified tribal treaty can beat a conflicting state statute outright, and is often the very document a dispute is about.",
        },
        {
          prompt: "What did the Act of 1871 do, and what did it NOT do?",
          answer: "It ended the making of NEW treaties with tribal nations (25 U.S.C. sec. 71). It did not, and could not, cancel treaties already ratified; those remain in force as supreme law and courts still enforce them.",
        },
        {
          prompt: "What is a 'reserved right' in a tribal treaty?",
          answer: "A right the nation held back and never surrendered when ceding land, such as hunting, fishing, water, or governing rights. It is not a gift from the United States; a treaty is a grant from the tribe, not to it.",
        },
      ],
    },
    {
      slug: "tribal-quiz-treaties",
      title: "7 - Quiz: treaties as supreme law",
      section: "Section 2 - Treaties as supreme law",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "Under the Supremacy Clause, a ratified treaty with a tribal nation ranks as:",
            options: [
              "Below every state statute",
              "Part of the supreme law of the land",
              "An advisory suggestion only",
              "A local reservation ordinance",
            ],
            correctIndex: 1,
            explanation: "Article VI makes treaties made under the authority of the United States supreme law, binding on the states. Tribal treaties rank with federal statutes.",
            sourceLessonSlug: "tribal-treaties-supreme-law",
          },
          {
            prompt: "The Indian Commerce Clause puts the power to regulate commerce with the tribes in the hands of:",
            options: [
              "The states individually",
              "The county governments",
              "The tribal courts alone",
              "Congress",
            ],
            correctIndex: 3,
            explanation: "Article I, section 8, clause 3 gives Congress that power, which is why tribal relations are federal business and a state cannot run its own Indian policy.",
            sourceLessonSlug: "tribal-treaties-supreme-law",
          },
          {
            prompt: "The first ratified treaty, at Fort Pitt in 1778, was made with the:",
            options: [
              "Delaware (Lenape) nation",
              "Muscogee (Creek) nation",
              "Navajo (Dine) nation",
              "Oglala Lakota nation",
            ],
            correctIndex: 0,
            explanation: "The Treaty with the Delawares at Fort Pitt (1778) was the first of hundreds of treaties the United States ratified with tribal nations through 1871.",
            sourceLessonSlug: "tribal-treaties-supreme-law",
          },
          {
            prompt: "The Act of 1871 is best summarised as:",
            options: [
              "It canceled all prior treaties",
              "It made tribes into US counties",
              "It ended new treaty-making only",
              "It handed Indian policy to states",
            ],
            correctIndex: 2,
            explanation: "It ended the making of new treaties but did not cancel treaties already ratified, which remain in force as supreme law and are still enforced.",
            sourceLessonSlug: "tribal-treaties-supreme-law",
          },
          {
            prompt: "A 'reserved right' in a treaty is best described as something the nation:",
            options: [
              "Received as a gift from Congress",
              "Bought from a neighboring state",
              "Was granted after 1871 by statute",
              "Held back and never surrendered",
            ],
            correctIndex: 3,
            explanation: "A treaty is a grant FROM the tribe, not TO it. The nation ceded some things and kept everything else, including rights the treaty may not even name.",
            sourceLessonSlug: "tribal-reading-treaties",
          },
          {
            prompt: "The three Indian canons of construction include the rule that ambiguous language is read:",
            options: [
              "Against the tribe's position",
              "By strict modern legal English",
              "In the tribe's favor",
              "However the state prefers",
            ],
            correctIndex: 2,
            explanation: "Ambiguities favor the tribe; terms are read as the nation would have understood them at signing; and a treaty is a grant from, not to, the tribe.",
            sourceLessonSlug: "tribal-reading-treaties",
          },
          {
            prompt: "Winters v. United States (1908) established that setting aside a reservation implicitly reserved:",
            options: [
              "A seat in the state senate",
              "Enough water to use the land",
              "A share of federal income tax",
              "Two members of Congress",
            ],
            correctIndex: 1,
            explanation: "The Court held that a reservation implicitly reserves enough water to make the land usable, even if the treaty is silent, because otherwise the reservation would be pointless.",
            sourceLessonSlug: "tribal-reading-treaties",
          },
          {
            prompt: "In Herrera v. Wyoming (2019), the Court held the Crow Tribe's 1868 treaty hunting right:",
            options: [
              "Ended when Wyoming became a state",
              "Was void from the very start",
              "Belonged only to the state now",
              "Survived, since Congress was not clear",
            ],
            correctIndex: 3,
            explanation: "The 1868 right to hunt on unoccupied lands survived statehood and the national forest, because Congress had not clearly abrogated it. A promise from 1868 decided a 2019 case.",
            sourceLessonSlug: "tribal-reading-treaties",
          },
          {
            prompt: "The clear-statement rule the section leaves you with says a treaty right ends only when:",
            options: [
              "A state passes a new statute",
              "Any general federal law is passed",
              "Congress abrogates it clearly",
              "A county objects in writing",
            ],
            correctIndex: 2,
            explanation: "Congress can limit a treaty right under its plenary power, but courts will not find abrogation from silence or a vague later statute. The burden is on whoever claims the right ended.",
            sourceLessonSlug: "tribal-reading-treaties",
          },
          {
            prompt: "The clear-statement rule is really the retained-sovereignty principle expressed as:",
            options: [
              "A reading rule for the courts",
              "A tax on state governments",
              "A rule about club membership",
              "A ban on all new statutes",
            ],
            correctIndex: 0,
            explanation: "Because the nation's rights are its own and pre-existing, they are presumed to continue; the reading rule presumes rights persist until Congress clearly ends them.",
            sourceLessonSlug: "tribal-reading-treaties",
          },
          {
            prompt: "Roughly how many treaties did the United States ratify with tribal nations before 1871?",
            options: [
              "Exactly three, near the start",
              "Around fifty, one per state",
              "Hundreds, over nearly a century",
              "None were ever ratified",
            ],
            correctIndex: 2,
            explanation: "From the Treaty with the Delawares in 1778 to 1871, the United States ratified hundreds of treaties, each a negotiated agreement between two governments.",
            sourceLessonSlug: "tribal-treaties-supreme-law",
          },
          {
            prompt: "Why does the course say a state cannot run its own Indian policy?",
            options: [
              "States have no legislatures",
              "The Commerce Clause makes it federal",
              "Tribes are foreign countries",
              "A treaty banned all state laws",
            ],
            correctIndex: 1,
            explanation: "The Indian Commerce Clause put tribal relations in federal hands from the start, and the Supremacy Clause makes treaties binding on the states.",
            sourceLessonSlug: "tribal-treaties-supreme-law",
          },
          {
            prompt: "The first canon of construction says a treaty's terms are read as:",
            options: [
              "The drafting lawyers meant them",
              "A modern dictionary defines them",
              "The state attorney prefers them",
              "The nation understood them then",
            ],
            correctIndex: 3,
            explanation: "Terms are interpreted as the nation would have understood them at signing, because the United States drafted the English text and the other party was at a disadvantage.",
            sourceLessonSlug: "tribal-reading-treaties",
          },
          {
            prompt: "The course calls Herrera v. Wyoming an example of a treaty being:",
            options: [
              "A museum piece with no force",
              "Living law, deciding cases now",
              "Cancelled by the 1871 Act",
              "Enforced only by the tribe itself",
            ],
            correctIndex: 1,
            explanation: "The 2019 decision applied an 1868 treaty right, showing treaties are operative supreme law in the present, the same logic McGirt uses in Section 4.",
            sourceLessonSlug: "tribal-reading-treaties",
          },
          {
            prompt: "Reserved water rights under Winters can exist even when:",
            options: [
              "The treaty never mentions water",
              "The tribe sells the reservation",
              "A state has more residents",
              "Congress passes a budget",
            ],
            correctIndex: 0,
            explanation: "Rights a treaty never names can still exist because they were never surrendered; the water right is implied by the purpose of the reservation itself.",
            sourceLessonSlug: "tribal-reading-treaties",
          },
        ],
      },
    },
    // ===================================================================================
    // SECTION 3 - How nations govern today
    // ===================================================================================
    {
      slug: "tribal-allotment-and-ira",
      title: "8 - Allotment, and the Indian Reorganization Act of 1934",
      section: "Section 3 - How nations govern today",
      body: `To understand how tribal nations govern today, you have to understand the policy the United States tried before, because the modern shape of many tribal governments is a reaction to it. This lesson covers the allotment disaster and the 1934 law that reversed course, the **Indian Reorganization Act**, which is where a great many current tribal constitutions come from.

## Allotment: policy as dismantling

The General Allotment Act of 1887, the **Dawes Act**, set out to break up communally held reservation land into individual parcels and open the "surplus" to non-Native settlement (General Allotment Act of 1887, 24 Stat. 388). The stated aim was to turn communal nations into individual farmers; the effect was catastrophic. **Between 1887 and 1934, tribal landholdings fell from about 138 million acres to about 48 million** (Deloria and Lytle, 1984). Allotment was not a governance reform. It was a policy of dissolving the land base that tribal government stood on, and by the 1930s even the federal government treated it as a failure.

## The Indian Reorganization Act of 1934

The reversal was the **Indian Reorganization Act of 1934**, also called the Wheeler-Howard Act (Indian Reorganization Act of 1934, 48 Stat. 984, codified at 25 U.S.C. sec. 5101 and following). Driven by Commissioner of Indian Affairs John Collier, it **ended allotment**, allowed nations to **adopt written constitutions**, and let them **organize as federally chartered corporations** to hold property and do business. Each nation voted whether to come under the Act at all. It was, on its face, a restoration of self-government after fifty years of dismantling.

## The catch, named by Indigenous scholars

But the restoration came in a particular shape, and here the course leads with Indigenous scholarship rather than the government's own account. Vine Deloria Jr. (Standing Rock Sioux) and Clifford Lytle, in "The Nations Within," argue that the IRA offered self-government on a **template**: a model constitution drafted in Washington, built on an Anglo-American form (a written charter, an elected council, majority vote), and, critically, that many IRA constitutions made tribal actions subject to the **approval of the Secretary of the Interior** (Deloria and Lytle, 1984). So the same law that restored self-government also **routed it through federal forms and federal oversight**, and often displaced older ways of choosing leaders. Two things are true at once: the IRA was a genuine and needed reversal of allotment, and it embedded a federal model that not every nation wanted. **You will need both halves for the next lesson.**

## Not every nation said yes

Because the Act was optional, the map of tribal government today is uneven. Many nations adopted IRA constitutions and still use them. Others voted the Act down. Most notably, the **Navajo Nation rejected the IRA in a 1935 referendum** and built its government outside that framework (Deloria and Lytle, 1984). **That single fact is the doorway to the next lesson**: the choice between an IRA constitution and a governance rooted in a nation's own traditions was, and remains, a real and contested choice, not a formality.

## Sources
- General Allotment Act of 1887 (Dawes Act), 24 Stat. 388.
- Indian Reorganization Act of 1934 (Wheeler-Howard Act), 48 Stat. 984 (codified at 25 U.S.C. sec. 5101 et seq.).
- Deloria, V., Jr., and Lytle, C. M. (1984). The Nations Within: The Past and Future of American Indian Sovereignty. Pantheon Books.`,
      recallContent: [
        {
          prompt: "State the three Indian canons of construction.",
          answer: "(1) Read a treaty as the nation would have understood it at signing; (2) resolve ambiguities in the nation's favor; (3) treat it as a grant FROM the tribe, not TO it, so the nation reserves everything it did not clearly give away.",
        },
        {
          prompt: "What is the clear-statement rule, and why does it follow from retained sovereignty?",
          answer: "Congress can abrogate a treaty right under its plenary power, but courts will not find it did so unless Congress said so clearly; silence or a vague later statute will not do. Because the nation's rights are its own and pre-existing, they are presumed to continue until clearly ended.",
        },
        {
          prompt: "How did Herrera v. Wyoming (2019) show treaties are living law?",
          answer: "The Court held the Crow Tribe's 1868 treaty right to hunt on unoccupied lands survived Wyoming statehood and the national forest, because Congress had not clearly abrogated it. A promise from 1868 decided a criminal case in 2019.",
        },
      ],
    },
    {
      slug: "tribal-ira-vs-traditional",
      title: "9 - IRA constitutions versus traditional governance",
      section: "Section 3 - How nations govern today",
      body: `The last lesson set up a choice: an Indian Reorganization Act constitution, or a government rooted in a nation's own traditions. This lesson is about how nations actually govern today across that range, and it is where the care rules of this course start to bind hardest, so read the boundary first.

## The boundary, stated before the content

**This course teaches THAT traditional and customary governance exists, WHOSE it is, and WHY it matters, and then it stops.** Where a nation publishes an account of its own government, this course uses the nation's words. It will not reproduce ceremonial procedure, spiritual protocol, or restricted internal detail, because that is not the course's to give and printing it would be the opposite of respect. **When you see this course decline to go further, the silence is deliberate.** The way to learn more is to go to the nation.

## A spectrum, not two boxes

Tribal governments today sit along a range, and it helps to see the ends and the middle:

| Form | What it looks like |
|---|---|
| **IRA constitution** | Written charter, elected council, often past Secretary-of-Interior approval |
| **Non-IRA written constitution** | A nation's own written charter, adopted outside the 1934 template |
| **Traditional or customary** | Leadership chosen and law made by the nation's own long-standing practice |

**Most real governments mix these.** A nation may run an elected council for federal contracting and courts while also recognizing traditional authority and customary law. The point is not to sort a nation into a box. It is to know that **the form is a choice a nation made about its own government**, and that the choice carries history.

## The Navajo Nation: traditional law inside a modern government

The Navajo Nation (Dine) rejected the IRA and built one of the largest tribal governments in the country, today with three branches and an elected Navajo Nation Council. And it has done something worth studying: in 2002 the Navajo Nation Council **enacted the Dine Fundamental Laws**, formally recognizing the traditional, customary, natural, and common law of the Dine as the foundation of Navajo law (Navajo Nation Council, 2002, Title 1, Navajo Nation Code). **This is a nation publishing its own law**, weaving traditional Dine principles into a modern legal code on its own terms, which is why it is safe and right to cite: the Navajo Nation chose to make it public.

## Self-determination is the present tense

None of this is history. Since the **Indian Self-Determination and Education Assistance Act of 1975**, the federal posture has been self-determination: tribal nations contract to run their own schools, health systems, courts, police, and social services, programs the federal government once ran over them (Indian Self-Determination and Education Assistance Act of 1975, Pub. L. 93-638). **Tribal governments today legislate, tax, run courts, license, police, and deliver services to citizens and non-citizens on their lands.** Write and read about them in the present tense, because they are present-tense governments. The next lesson takes one nation, the Haudenosaunee Confederacy, as a named case, and holds the care rules the whole way.

## Sources
- Navajo Nation Council. (2002). Dine Fundamental Laws, Title 1, Navajo Nation Code.
- Indian Self-Determination and Education Assistance Act of 1975, Pub. L. 93-638 (codified at 25 U.S.C. sec. 5301 et seq.).
- Deloria, V., Jr., and Lytle, C. M. (1984). The Nations Within: The Past and Future of American Indian Sovereignty. Pantheon Books.`,
      recallContent: [
        {
          prompt: "What was the Dawes Act (1887), and what did it do to the tribal land base?",
          answer: "The General Allotment Act of 1887 broke communal reservation land into individual parcels and opened the 'surplus' to non-Native settlement. Tribal landholdings fell from about 138 million acres to about 48 million between 1887 and 1934 (Deloria and Lytle, 1984).",
        },
        {
          prompt: "What did the Indian Reorganization Act of 1934 do, and what is the catch Indigenous scholars name?",
          answer: "It ended allotment and let nations adopt written constitutions and organize as federally chartered corporations. Deloria and Lytle note it offered self-government on a Washington-drafted, Anglo-American template, often with actions subject to Secretary of the Interior approval, embedding federal forms and oversight.",
        },
        {
          prompt: "Which large nation rejected the IRA, and in what year?",
          answer: "The Navajo Nation rejected the IRA in a 1935 referendum and built its government outside that framework. Because the Act was optional, tribal government today is uneven, some nations adopted IRA constitutions, others did not.",
        },
      ],
    },
    {
      slug: "tribal-haudenosaunee",
      title: "10 - The Haudenosaunee Confederacy: a named case, held with care",
      section: "Section 3 - How nations govern today",
      body: `This lesson takes one nation as a worked case of governance rooted in a nation's own tradition rather than an imposed template: the **Haudenosaunee Confederacy**. It is also the lesson where the care rules matter most, so it leads with the Confederacy's own words and stops well short of what is not the course's to tell.

## Whose it is, in their own words

The people the French called the Iroquois call themselves the **Haudenosaunee**, "the people who build a house," or **people of the longhouse**. The Confederacy describes itself as **"the oldest, participatory democracy on Earth"** (Haudenosaunee Confederacy, n.d.). It unites **six nations**: the **Mohawk, Oneida, Onondaga, Cayuga, and Seneca**, joined around 1722 by the **Tuscarora** (Haudenosaunee Confederacy, n.d.). Each nation is its own government; together they are a confederacy, which is itself a lesson: **a union of sovereigns predating the United States, on this continent.**

## Why it matters, at the level the Confederacy makes public

The Confederacy is bound together by the **Great Law of Peace**, its founding constitution, and it governs through a **Grand Council** of chiefs (the Confederacy states the number as 50) who meet at Onondaga, the central council fire (Haudenosaunee Confederacy, n.d.). Two features the Confederacy itself publishes are worth naming, because they invert assumptions a stack-trained learner brings:

- **The clan mothers hold real constitutional power.** In the Haudenosaunee system the women of a clan choose the chief, and can remove him if he fails the people (Haudenosaunee Confederacy, n.d.). Leadership is not simply elected by majority and it is not held for life at the holder's discretion.
- **The Grand Council works toward consensus**, not a bare majority vote, across the nations (Haudenosaunee Confederacy, n.d.).

**That is the level this course teaches: that the Great Law exists, whose it is, and why it matters.** These facts are here because the Confederacy publishes them itself.

## Where this course stops, and why

**Here is the line, and it is deliberate.** The Great Law is carried in oral tradition and wampum, and its full recitation, the Condolence Ceremony that installs chiefs, the roles and protocols internal to the council, and the spiritual dimension of all of it are **ceremony and restricted knowledge, not content for a survey course.** This course does not reproduce them. **It teaches that they exist and whose they are, and then it is silent, on purpose.** Where the Confederacy has chosen to publish something, the course quotes it; where it has not, the course does not substitute an outsider's account. If you want to understand more, the move is not to read more commentary about the Haudenosaunee. It is to go to the Haudenosaunee: start at the Confederacy's own site and the Onondaga Nation's.

## A contested claim, taught as contested

You will often hear that the Haudenosaunee Great Law shaped the United States Constitution. **That claim is genuinely disputed, so hold it as disputed.** In 1988 the United States Congress passed a concurrent resolution formally acknowledging "the contribution of the Iroquois Confederacy of Nations to the development of the United States Constitution" (H. Con. Res. 331, 100th Cong., 1988). Some scholars, including Donald Grinde (Yamasee) and Bruce Johansen, argue the influence was substantial; other historians read the evidence as thin. **This course does not settle it.** It records the documented fact (the 1988 resolution exists) and names the debate, which is the honest position when careful people disagree.

## A living government, present tense

Finally, the point the whole course keeps making: this is not history. The Haudenosaunee **assert a sovereignty they say they never surrendered, and they act on it today.** They issue their own **Haudenosaunee passports**, and their national teams have traveled internationally on them, a working, present-tense claim of nationhood that a state or a city could never make (Haudenosaunee Confederacy, n.d.). The traditional Grand Council also coexists, at times in tension, with elected councils that United States and Canadian law recognize on Haudenosaunee territory, which is itself a live illustration of this section's theme: the imposed form and the traditional form, side by side, in one living nation.

## Sources
- Haudenosaunee Confederacy. (n.d.). Who we are; The Great Law of Peace; Values. https://www.haudenosauneeconfederacy.com
- Onondaga Nation. (n.d.). About the Onondaga Nation. https://www.onondaganation.org
- H. Con. Res. 331, 100th Cong. (1988).`,
      recallContent: [
        {
          prompt: "Name the spectrum of tribal government forms today.",
          answer: "IRA constitution (written charter, elected council, often past Secretary of Interior approval); non-IRA written constitution (a nation's own charter outside the 1934 template); and traditional or customary governance (leadership and law by the nation's own long-standing practice). Most real governments mix these.",
        },
        {
          prompt: "How did the Navajo Nation weave traditional law into a modern government?",
          answer: "In 2002 the Navajo Nation Council enacted the Dine Fundamental Laws (Title 1, Navajo Nation Code), formally recognizing the traditional, customary, natural, and common law of the Dine as the foundation of Navajo law. It is the Nation publishing its own law, so it is right to cite.",
        },
        {
          prompt: "What does the Indian Self-Determination Act of 1975 mean for how nations govern now?",
          answer: "Tribal nations contract to run their own schools, health systems, courts, police, and social services that the federal government once ran over them. Tribal governments legislate, tax, run courts, license, police, and deliver services today, in the present tense.",
        },
      ],
    },
    {
      slug: "tribal-quiz-governance",
      title: "11 - Quiz: how nations govern today",
      section: "Section 3 - How nations govern today",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "The Dawes Act of 1887 (allotment) had what effect on the tribal land base?",
            options: [
              "It doubled reservation acreage",
              "It left the land base unchanged",
              "It cut it from about 138M to 48M acres",
              "It returned land to the nations",
            ],
            correctIndex: 2,
            explanation: "Allotment broke communal land into parcels and opened the 'surplus' to settlers; holdings fell from about 138 million acres to about 48 million by 1934 (Deloria and Lytle, 1984).",
            sourceLessonSlug: "tribal-allotment-and-ira",
          },
          {
            prompt: "The Indian Reorganization Act of 1934 is also known as the:",
            options: [
              "Wheeler-Howard Act",
              "Dawes Allotment Act",
              "Public Law 280 Act",
              "Settlement Claims Act",
            ],
            correctIndex: 0,
            explanation: "The IRA (Wheeler-Howard Act, 48 Stat. 984) ended allotment and let nations adopt written constitutions and organize as federally chartered corporations.",
            sourceLessonSlug: "tribal-allotment-and-ira",
          },
          {
            prompt: "The catch in the IRA that Deloria and Lytle name is that its self-government came:",
            options: [
              "With no strings whatsoever",
              "Only to the very largest nations",
              "As a purely spoken agreement",
              "On a template, often past Interior",
            ],
            correctIndex: 3,
            explanation: "It offered a Washington-drafted, Anglo-American model constitution, often with tribal actions subject to Secretary of the Interior approval, embedding federal forms and oversight.",
            sourceLessonSlug: "tribal-allotment-and-ira",
          },
          {
            prompt: "Which nation rejected the IRA in a 1935 referendum?",
            options: [
              "The Onondaga Nation",
              "The Navajo Nation",
              "The Seminole Nation",
              "The Muscogee Nation",
            ],
            correctIndex: 1,
            explanation: "The Navajo Nation voted the Act down in 1935 and built its government outside that framework, a doorway to the choice between IRA and traditional forms.",
            sourceLessonSlug: "tribal-allotment-and-ira",
          },
          {
            prompt: "In 2002 the Navajo Nation Council enacted the Dine Fundamental Laws, which:",
            options: [
              "Abolished the tribal council",
              "Ended the Navajo court system",
              "Recognised traditional Dine law",
              "Adopted the 1934 IRA template",
            ],
            correctIndex: 2,
            explanation: "Title 1 of the Navajo Nation Code recognises traditional, customary, natural, and common Dine law as the foundation of Navajo law. It is the Nation publishing its own law.",
            sourceLessonSlug: "tribal-ira-vs-traditional",
          },
          {
            prompt: "Since the 1975 Self-Determination Act, the federal posture toward tribal governments has been:",
            options: [
              "To run their programs for them",
              "To abolish tribal courts entirely",
              "To transfer them to the states",
              "To let them contract and run their own",
            ],
            correctIndex: 3,
            explanation: "Nations contract to run their own schools, health systems, courts, police, and services that the federal government once ran over them. These are present-tense governments.",
            sourceLessonSlug: "tribal-ira-vs-traditional",
          },
          {
            prompt: "The Haudenosaunee Confederacy describes itself in its own words as:",
            options: [
              "A former nation, now dissolved",
              "The oldest participatory democracy",
              "A branch of New York State",
              "A private cultural association",
            ],
            correctIndex: 1,
            explanation: "The Confederacy calls itself 'the oldest, participatory democracy on Earth,' a union of six nations bound by the Great Law of Peace. The course leads with the nation's own words.",
            sourceLessonSlug: "tribal-haudenosaunee",
          },
          {
            prompt: "The six nations of the Haudenosaunee Confederacy are the Mohawk, Oneida, Onondaga, Cayuga, Seneca, and:",
            options: [
              "Tuscarora, joined around 1722",
              "Cherokee, joined around 1838",
              "Lakota, joined around 1851",
              "Shawnee, joined around 1795",
            ],
            correctIndex: 0,
            explanation: "The Tuscarora joined the original five nations around 1722. Each nation is its own government; together they form a confederacy predating the United States.",
            sourceLessonSlug: "tribal-haudenosaunee",
          },
          {
            prompt: "In the Haudenosaunee system, who chooses a chief and can remove him?",
            options: [
              "A statewide popular vote",
              "The federal Interior Secretary",
              "The clan mothers of the clan",
              "A neighboring nation's council",
            ],
            correctIndex: 2,
            explanation: "The Confederacy publishes that the women of a clan choose the chief and can remove him if he fails the people. Leadership is not simple majority election, nor life tenure at will.",
            sourceLessonSlug: "tribal-haudenosaunee",
          },
          {
            prompt: "On the claim that the Great Law shaped the US Constitution, this course:",
            options: [
              "Treats it as settled proven fact",
              "Denies any influence occurred",
              "Skips the disputed question",
              "Notes the 1988 resolution, debate",
            ],
            correctIndex: 3,
            explanation: "It records the documented fact that Congress passed H. Con. Res. 331 (1988) acknowledging the contribution, and names that scholars dispute the extent. It does not settle a genuine disagreement.",
            sourceLessonSlug: "tribal-haudenosaunee",
          },
          {
            prompt: "Where this lesson declines to describe the Great Law's ceremonies, the silence is:",
            options: [
              "An accidental gap to fill later",
              "Deliberate, and a form of respect",
              "Because the records were lost",
              "A sign the practice has ended",
            ],
            correctIndex: 1,
            explanation: "The care rule: teach that ceremony and restricted knowledge exist and whose they are, then stop. The course quotes what the Confederacy publishes and substitutes no outsider's account.",
            sourceLessonSlug: "tribal-haudenosaunee",
          },
          {
            prompt: "A present-tense assertion of Haudenosaunee sovereignty the course names is that they:",
            options: [
              "Issue and travel on their own passports",
              "Pay no attention to any state border",
              "Elect two US senators of their own",
              "Collect the federal income tax owed",
            ],
            correctIndex: 0,
            explanation: "The Haudenosaunee issue their own passports and national teams have traveled on them, a working claim of nationhood a state or city could never make. These are living governments.",
            sourceLessonSlug: "tribal-haudenosaunee",
          },
          {
            prompt: "Most real tribal governments today are best described as:",
            options: [
              "Always pure IRA constitutions",
              "Only ever fully traditional ones",
              "A mix of forms, chosen by the nation",
              "Identical to a US county board",
            ],
            correctIndex: 2,
            explanation: "Governments sit along a range and often mix an elected council with recognized traditional authority and customary law. The form is a choice the nation made, carrying history.",
            sourceLessonSlug: "tribal-ira-vs-traditional",
          },
          {
            prompt: "The Grand Council of the Haudenosaunee works primarily toward:",
            options: [
              "A bare one-vote majority",
              "Consensus across the nations",
              "A ruling by one head of state",
              "Approval by the US Congress",
            ],
            correctIndex: 1,
            explanation: "The Confederacy publishes that the Grand Council, meeting at Onondaga, works toward consensus across the nations rather than a bare majority vote.",
            sourceLessonSlug: "tribal-haudenosaunee",
          },
          {
            prompt: "Why is it right to cite the Dine Fundamental Laws but not to reproduce Haudenosaunee ceremony?",
            options: [
              "The Navajo law is secret as well",
              "Both are equally off limits to cite",
              "Neither may ever be cited at all",
              "One nation published it, one did not",
            ],
            correctIndex: 3,
            explanation: "The Navajo Nation chose to publish its Fundamental Laws as public code; the Great Law's ceremony is restricted knowledge the Confederacy has not published for a survey course. The course follows what each nation makes public.",
            sourceLessonSlug: "tribal-ira-vs-traditional",
          },
        ],
      },
    },
    // ===================================================================================
    // SECTION 4 - The hard legal edges
    // ===================================================================================
    {
      slug: "tribal-public-law-280",
      title: "12 - Public Law 280: state jurisdiction without consent",
      section: "Section 4 - The hard legal edges",
      body: `Now the hard edges, where the clean rule ("a separate sovereign, off the ladder") meets messy federal statutes. The first is **Public Law 280**, and it is the plenary-power side of the tension from Section 1 pushing hard against the separate-sovereign principle.

## The termination era, in one sentence

In the 1950s federal policy swung again, this time toward **termination**: ending the federal relationship with tribal nations and dissolving reservations, on the theory that they should be absorbed into the states. **Public Law 280 was the jurisdictional arm of that policy** (Act of August 15, 1953, Pub. L. 83-280, 67 Stat. 588). It did not terminate nations directly, but it moved a core piece of sovereignty off the nation and onto the state.

## What Public Law 280 actually did

Ordinarily, criminal jurisdiction in Indian country is a federal and tribal matter, and states are largely shut out (that is the Worcester principle). **Public Law 280 transferred most criminal jurisdiction, and some civil jurisdiction, over Indian country from the federal government to certain states** (codified at 18 U.S.C. sec. 1162, 28 U.S.C. sec. 1360, and 25 U.S.C. sec. 1321 and following). Six states were named as **mandatory** Public Law 280 states:

| Mandatory state | Notable exception |
|---|---|
| **California** | (none stated in the Act) |
| **Minnesota** | Red Lake Reservation excepted |
| **Nebraska** | (none stated in the Act) |
| **Oregon** | Warm Springs Reservation excepted |
| **Wisconsin** | Menominee Reservation excepted |
| **Alaska** | added on statehood in 1958 |

Other states were allowed to **opt in**. The crucial defect, from a sovereignty standpoint, is the one to remember: **the Act imposed state jurisdiction WITHOUT the consent of the affected nations.** A separate sovereign had a chunk of its jurisdiction reassigned to a state government it had never been under, by an act of Congress, over its objection.

## The partial repair, and why it is only partial

Congress later recognized the consent problem. The **Indian Civil Rights Act of 1968** provided that any FUTURE state assumption of jurisdiction under Public Law 280 would require the **consent of the affected tribe**, and it allowed states to give jurisdiction back through **retrocession** (Indian Civil Rights Act of 1968, Pub. L. 90-284). **Read the fix precisely.** It required consent going forward and opened a path to return jurisdiction, but it did not automatically undo the jurisdiction already transferred in 1953. The result is a patchwork: some nations are under state jurisdiction they never agreed to, some have had it retroceded, and the map is nation-by-nation.

## Reading Public Law 280 with the tension

Public Law 280 is the cleanest illustration in the course of the Section 1 tension. **Inherent sovereignty says a state has no business in Indian country; plenary power says Congress may put it there anyway.** Public Law 280 is Congress exercising the second against the first. When you read a jurisdictional question in Indian country, the first thing to establish is whether you are in a Public Law 280 state and whether that nation's jurisdiction was ever retroceded, because the answer changes who has the power to act. **You read that from the statute and the specific nation's status, not from memory.**

## Sources
- Public Law 83-280, Act of August 15, 1953, 67 Stat. 588 (codified at 18 U.S.C. sec. 1162; 28 U.S.C. sec. 1360; 25 U.S.C. sec. 1321 et seq.).
- Indian Civil Rights Act of 1968, Pub. L. 90-284, 82 Stat. 77.
- Worcester v. Georgia, 31 U.S. (6 Pet.) 515 (1832). https://supreme.justia.com/cases/federal/us/31/515/`,
      recallContent: [
        {
          prompt: "How does the Haudenosaunee Confederacy describe itself, and what binds its six nations?",
          answer: "As 'the oldest, participatory democracy on Earth,' a union of six nations (Mohawk, Oneida, Onondaga, Cayuga, Seneca, and the Tuscarora who joined around 1722). They are bound by the Great Law of Peace and govern through a Grand Council at Onondaga.",
        },
        {
          prompt: "Name two features of Haudenosaunee governance the Confederacy publishes about itself.",
          answer: "The clan mothers choose the chiefs and can remove them; and the Grand Council works toward consensus across the nations rather than a bare majority. The course teaches these because the Confederacy makes them public, and stops before ceremony and restricted knowledge.",
        },
        {
          prompt: "How does the course handle the claim that the Great Law shaped the US Constitution?",
          answer: "As genuinely contested: it records the documented fact that Congress passed H. Con. Res. 331 (1988) acknowledging the Iroquois contribution, notes that scholars dispute the extent, and does not settle it.",
        },
      ],
    },
    {
      slug: "tribal-mcgirt",
      title: "13 - McGirt v. Oklahoma: a promise kept, then narrowed",
      section: "Section 4 - The hard legal edges",
      body: `If Public Law 280 is plenary power pushing in, **McGirt v. Oklahoma is the treaty and clear-statement principles pushing back**, and it is the most consequential Indian-law decision of recent years. This lesson reads it with the tools Section 2 built, and then, for accuracy, shows how the Court narrowed it two years later.

## The question, and the holding

Jimcy McGirt, a member of the Seminole Nation, argued that Oklahoma had no jurisdiction to try him, because the crime occurred within the **Muscogee (Creek) Reservation**, making it Indian country where, under the **Major Crimes Act**, certain crimes by Native people are a federal matter, not a state one (18 U.S.C. sec. 1153). Oklahoma answered that the reservation no longer existed. **The Supreme Court held that the Muscogee (Creek) Reservation was never disestablished by Congress, and so, for purposes of the Major Crimes Act, it endures** (McGirt v. Oklahoma, 591 U.S. 894, 2020). The opinion opens, "On the far end of the Trail of Tears was a promise," and rests on the exact rule from Section 2: only Congress can disestablish a reservation, and it must do so clearly. Because it never did, in Justice Gorsuch's words, "we hold the government to its word."

## Why McGirt is Section 2 in action

Notice you already have every tool this case uses. **The clear-statement rule**: a reservation, like a treaty right, persists until Congress clearly ends it, and neither Oklahoma's long assumption of control nor a scatter of old statutes counted as the clear act required. **Treaties as living law**: nineteenth-century promises to the Muscogee Nation governed a twenty-first-century prosecution. **Reserved rights and retained sovereignty**: the reservation was the Nation's until clearly taken, and it was never clearly taken. McGirt is not an exotic result. **It is the ordinary application of principles this course taught two sections ago**, which is exactly why it matters as a capstone case.

## The scope, stated carefully

McGirt is huge in area: the reservations it confirmed cover much of eastern Oklahoma, **including most of the city of Tulsa.** But be precise about what it decided. It held that this land is "Indian country" for the Major Crimes Act; it did not evict anyone, transfer private land, or dissolve the State of Oklahoma. **Two sovereigns share that ground**: the Muscogee (Creek) Nation and the State of Oklahoma, with jurisdiction sorted by the status of the people and the crime involved. This is the "second ladder on the same floor" course 1 described, now a matter of live law over a metropolitan area.

## And then the narrowing: Castro-Huerta (2022)

Accuracy requires the next chapter, because McGirt did not settle everything. In **Oklahoma v. Castro-Huerta**, the Court held that a **state DOES have concurrent jurisdiction to prosecute a NON-Indian who commits a crime against an Indian in Indian country** (Oklahoma v. Castro-Huerta, 597 U.S. 629, 2022). That is a real narrowing of the practical reach of McGirt, and it drew a sharp dissent. **Hold both cases together, and you have the honest picture**: the reservation endures (McGirt), and yet state authority inside it is broader than McGirt's supporters hoped (Castro-Huerta). The separate-sovereign principle is not a fixed line; it is a contested boundary the courts are still drawing, which is the truest thing this section can teach you.

## Sources
- McGirt v. Oklahoma, 591 U.S. 894 (2020).
- Oklahoma v. Castro-Huerta, 597 U.S. 629 (2022).
- Major Crimes Act, 18 U.S.C. sec. 1153.`,
      recallContent: [
        {
          prompt: "What did Public Law 280 (1953) do, and what was its central defect?",
          answer: "It transferred most criminal and some civil jurisdiction over Indian country from the federal government to certain states (six mandatory states: CA, MN, NE, OR, WI, and AK in 1958). Its defect: it imposed state jurisdiction WITHOUT the consent of the affected nations.",
        },
        {
          prompt: "How did the Indian Civil Rights Act of 1968 fix Public Law 280, and how completely?",
          answer: "It required tribal consent for any FUTURE state assumption of jurisdiction and allowed states to return jurisdiction through retrocession. But it did not automatically undo jurisdiction already transferred in 1953, so the result is a nation-by-nation patchwork.",
        },
        {
          prompt: "How is Public Law 280 an illustration of the Section 1 tension?",
          answer: "Inherent sovereignty says a state has no business in Indian country; plenary power says Congress may put it there anyway. Public Law 280 is Congress exercising plenary power against the separate-sovereign principle.",
        },
      ],
    },
    {
      slug: "tribal-alaska-native-corporations",
      title: "14 - Alaska Native corporations: sovereignty routed through a corporation",
      section: "Section 4 - The hard legal edges",
      body: `The last hard edge is the sharpest crossover in either path of this series: in Alaska, the work that reservations and treaties do elsewhere was routed, in 1971, through **corporations**. This is where Path A ("Who Has the Power?") shakes hands with Path B ("How a Business Is Formed"), because to read Alaska you need an entity type, not just a treaty.

## What ANCSA did, and why it is different

The **Alaska Native Claims Settlement Act of 1971** settled the aboriginal land claims of Alaska Natives (Alaska Native Claims Settlement Act of 1971, Pub. L. 92-203, 43 U.S.C. sec. 1601 and following). Instead of creating reservations, ANCSA **extinguished aboriginal land claims** in exchange for roughly **44 million acres of land and about 962.5 million dollars**, and, decisively, it **conveyed the land and money not to tribes as governments but to newly created corporations** (Pub. L. 92-203). It established **twelve regional corporations** inside Alaska (a thirteenth was later added for Natives living outside the state) and about **200 village corporations**. **Alaska Natives alive in 1971 became SHAREHOLDERS**, receiving 100 shares of stock, not enrolled members of a reservation.

## Lead with an Alaska Native voice

Because this is Native land and Native money, the course leads with an Alaska Native architect of the settlement, not an outside commentator. **William L. Iggiagruk Hensley (Inupiaq)** was one of the principal Native leaders who shaped ANCSA and has written about it directly (Hensley, 2009). The Alaska Federation of Natives, the statewide Native organization, drove the negotiations. ANCSA is defended and criticized from within Alaska Native communities to this day: defended as a settlement that kept a large land base and built lasting Native institutions, criticized because a corporation with shareholders is a different thing from a sovereign with citizens, and because shares and land could be exposed to loss in ways a reservation is not. **Both readings come from Alaska Native people**, and the course presents it as their debate, not an outsider's verdict.

## The corporation is not a reservation, and a case proves it

Here is the precise, load-bearing legal point, and it is why this belongs in a governance course. **A for-profit corporation is a Path B entity: it has shareholders, a board, and articles of incorporation, and it holds land as private property.** A reservation is a Path A thing: a territory over which a sovereign governs. **They are not the same, and the difference has a case name.** In **Alaska v. Native Village of Venetie Tribal Government**, the Supreme Court held that land ANCSA conveyed to Native corporations is **NOT "Indian country,"** so the Native Village of Venetie could not exercise the territorial governmental power (there, taxation) that Indian country status would carry (Alaska v. Native Village of Venetie, 522 U.S. 520, 1998). **Corporate title did not come with territorial sovereignty.** That is the whole crossover in one holding: routing the settlement through a corporation gave Alaska Natives a land base and an economic engine, but not the governing-over-territory power a reservation confers.

## Two more precisions, so you do not overstate

**One. Alaska still has tribes.** ANCSA created corporations, but it did not abolish tribal governments: there are well over 200 federally recognized tribes in Alaska, which exist alongside the corporations. Sovereignty and the corporation are two different structures over the same communities. **Two. Alaska has almost no reservations.** The near-total absence of reservations is the point of ANCSA, and the lone major exception, the **Metlakatla / Annette Islands Reserve**, predates and sits outside the ANCSA settlement. **So the Alaska picture is: many tribal governments, many Native corporations, and, almost uniquely, almost no reservation land.** To read power in Alaska you must ask which structure you are looking at, a tribe, a corporation, or the one reserve, because they answer "who has the power?" in three different ways.

## Sources
- Alaska Native Claims Settlement Act of 1971, Pub. L. 92-203, 85 Stat. 688 (codified at 43 U.S.C. sec. 1601 et seq.).
- Alaska v. Native Village of Venetie Tribal Government, 522 U.S. 520 (1998). https://supreme.justia.com/cases/federal/us/522/520/
- Hensley, W. L. I. (2009). Fifty Miles from Tomorrow: A Memoir of Alaska and the Real People. Farrar, Straus and Giroux.`,
      recallContent: [
        {
          prompt: "What did McGirt v. Oklahoma (2020) hold, and on what rule did it rest?",
          answer: "That the Muscogee (Creek) Reservation was never disestablished by Congress, so it endures for purposes of the Major Crimes Act, making much of eastern Oklahoma (including most of Tulsa) Indian country. It rested on the clear-statement rule: only Congress can disestablish a reservation, and must do so clearly.",
        },
        {
          prompt: "How did Oklahoma v. Castro-Huerta (2022) narrow McGirt?",
          answer: "It held that a state DOES have concurrent jurisdiction to prosecute a non-Indian who commits a crime against an Indian in Indian country, broadening state authority inside the reservation. The separate-sovereign boundary is contested, not fixed.",
        },
        {
          prompt: "Why is McGirt described as 'Section 2 in action'?",
          answer: "It applies the clear-statement rule (a reservation persists until Congress clearly ends it), treaties as living law (old promises governing a modern prosecution), and retained sovereignty (the land was the Nation's until clearly taken, and never clearly was).",
        },
      ],
    },
    {
      slug: "tribal-quiz-hard-edges",
      title: "15 - Quiz: the hard legal edges",
      section: "Section 4 - The hard legal edges",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "Public Law 280 (1953) transferred to certain states most of the:",
            options: [
              "Power to make treaties with the US",
              "Criminal jurisdiction in Indian country",
              "Federal income tax revenue collected",
              "Reserved water rights of the land",
            ],
            correctIndex: 1,
            explanation: "It moved most criminal (and some civil) jurisdiction over Indian country from the federal government to named states, the jurisdictional arm of the termination policy.",
            sourceLessonSlug: "tribal-public-law-280",
          },
          {
            prompt: "The central defect of Public Law 280, from a sovereignty standpoint, was that it acted:",
            options: [
              "Only after a full tribal vote",
              "With approval of every nation",
              "Without the affected nations' consent",
              "Under a ratified new US treaty",
            ],
            correctIndex: 2,
            explanation: "It imposed state jurisdiction on separate sovereigns without their consent, reassigning a core piece of their authority to states they had never been under.",
            sourceLessonSlug: "tribal-public-law-280",
          },
          {
            prompt: "The Indian Civil Rights Act of 1968 changed Public Law 280 by requiring, going forward:",
            options: [
              "Tribal consent, and allowing retrocession",
              "A vote of the United States Senate",
              "Approval by the neighboring state",
              "A brand new treaty with each nation",
            ],
            correctIndex: 0,
            explanation: "It required tribal consent for future state assumptions of jurisdiction and allowed retrocession, but did not automatically undo jurisdiction already transferred in 1953.",
            sourceLessonSlug: "tribal-public-law-280",
          },
          {
            prompt: "Public Law 280 illustrates the Section 1 tension because it is Congress using:",
            options: [
              "Inherent tribal sovereignty",
              "The Cooley home-rule doctrine",
              "A county zoning power",
              "Plenary power against sovereignty",
            ],
            correctIndex: 3,
            explanation: "Inherent sovereignty says a state has no business in Indian country; plenary power says Congress may put it there anyway. Public Law 280 is the second used against the first.",
            sourceLessonSlug: "tribal-public-law-280",
          },
          {
            prompt: "McGirt v. Oklahoma (2020) held that the Muscogee (Creek) Reservation:",
            options: [
              "Was dissolved in the 1900s",
              "Was never disestablished by Congress",
              "Belonged to the state of Oklahoma",
              "Was created new in the year 2020",
            ],
            correctIndex: 1,
            explanation: "Because Congress never clearly disestablished it, the reservation endures for the Major Crimes Act. 'We hold the government to its word.'",
            sourceLessonSlug: "tribal-mcgirt",
          },
          {
            prompt: "McGirt rests on the same rule Section 2 taught, namely that a reservation persists until:",
            options: [
              "A state assumes control of it",
              "A century of time has passed",
              "Congress clearly disestablishes it",
              "A county files a formal claim",
            ],
            correctIndex: 2,
            explanation: "The clear-statement rule: only Congress can disestablish a reservation, and it must do so clearly. Long state control and scattered old statutes did not count.",
            sourceLessonSlug: "tribal-mcgirt",
          },
          {
            prompt: "The land McGirt confirmed as Indian country in eastern Oklahoma includes:",
            options: [
              "Most of the city of Tulsa",
              "The entire state of Kansas",
              "All of Washington, D.C.",
              "The whole Navajo Nation",
            ],
            correctIndex: 0,
            explanation: "The confirmed reservations cover much of eastern Oklahoma, including most of Tulsa. The ruling did not evict anyone or transfer private land; two sovereigns share the ground.",
            sourceLessonSlug: "tribal-mcgirt",
          },
          {
            prompt: "Oklahoma v. Castro-Huerta (2022) narrowed McGirt by holding that a state has jurisdiction over a:",
            options: [
              "Tribe's internal election dispute",
              "Non-Indian who harms an Indian there",
              "Treaty signed before statehood",
              "Federal officer on tribal land",
            ],
            correctIndex: 1,
            explanation: "The Court held states have concurrent jurisdiction to prosecute a non-Indian who commits a crime against an Indian in Indian country, broadening state authority inside the reservation.",
            sourceLessonSlug: "tribal-mcgirt",
          },
          {
            prompt: "The Alaska Native Claims Settlement Act of 1971 conveyed land and money to:",
            options: [
              "Newly created Native corporations",
              "A single statewide reservation",
              "The state of Alaska directly",
              "The federal Interior Department",
            ],
            correctIndex: 0,
            explanation: "ANCSA extinguished aboriginal claims and conveyed about 44 million acres and 962.5 million dollars to regional and village corporations, not to tribes as governments.",
            sourceLessonSlug: "tribal-alaska-native-corporations",
          },
          {
            prompt: "Under ANCSA, Alaska Natives alive in 1971 became:",
            options: [
              "Citizens of a new reservation",
              "Members of one national council",
              "Shareholders holding 100 shares",
              "Wards of the state of Alaska",
            ],
            correctIndex: 2,
            explanation: "They received 100 shares of corporate stock, becoming shareholders of regional and village corporations rather than enrolled members of a reservation.",
            sourceLessonSlug: "tribal-alaska-native-corporations",
          },
          {
            prompt: "Alaska v. Native Village of Venetie (1998) held that ANCSA corporate land is:",
            options: [
              "A treaty reservation after all",
              "Not 'Indian country'",
              "Owned by the United Nations",
              "Exempt from every state law",
            ],
            correctIndex: 1,
            explanation: "Because the land is corporate property, not Indian country, the village could not exercise the territorial governing power (taxation) that Indian country status carries. Corporate title came without territorial sovereignty.",
            sourceLessonSlug: "tribal-alaska-native-corporations",
          },
          {
            prompt: "The Alaska crossover matters because a corporation and a reservation differ in that a corporation has:",
            options: [
              "Citizens it governs under treaty",
              "Reserved hunting rights by canon",
              "Sovereign power over a territory",
              "Shareholders, a board, and property",
            ],
            correctIndex: 3,
            explanation: "A corporation is a Path B entity with shareholders, a board, and articles, holding land as private property; a reservation is territory a sovereign governs. Venetie proved they are not the same.",
            sourceLessonSlug: "tribal-alaska-native-corporations",
          },
          {
            prompt: "The course leads its ANCSA lesson with William L. Iggiagruk Hensley because he is:",
            options: [
              "A federal judge who ruled on it",
              "A state governor of old Alaska",
              "An outside academic who critiqued it",
              "An Alaska Native architect of ANCSA",
            ],
            correctIndex: 3,
            explanation: "Hensley (Inupiaq) was a principal Native leader shaping the settlement and has written about it directly. The care rule leads with Alaska Native voices on Native land and money.",
            sourceLessonSlug: "tribal-alaska-native-corporations",
          },
          {
            prompt: "Besides corporations, what governing structures still exist in Alaska?",
            options: [
              "Over 200 federally recognized tribes",
              "Fifty small reservations statewide",
              "One consolidated super-tribe",
              "No tribal governments at all",
            ],
            correctIndex: 0,
            explanation: "ANCSA created corporations but did not abolish tribes; there are well over 200 federally recognized tribes in Alaska alongside the corporations, and almost no reservation land.",
            sourceLessonSlug: "tribal-alaska-native-corporations",
          },
          {
            prompt: "The lone major reservation in Alaska, outside the ANCSA settlement, is:",
            options: [
              "The Red Lake Reservation, Minnesota",
              "The Warm Springs Reservation, Oregon",
              "Metlakatla / Annette Islands Reserve",
              "The Pine Ridge Reservation, S.D.",
            ],
            correctIndex: 2,
            explanation: "The Metlakatla / Annette Islands Reserve predates and sits outside ANCSA. Alaska is otherwise nearly reservation-free, which is the point of the settlement.",
            sourceLessonSlug: "tribal-alaska-native-corporations",
          },
        ],
      },
    },
    // ===================================================================================
    // SECTION 5 - See it, then map your own
    // ===================================================================================
    {
      slug: "tribal-map-separate-sovereigns",
      title: "16 - Map: separate sovereigns as their own layer",
      section: "Section 5 - See it, then map your own",
      body: `**Read this before the map, because the map's limits ARE the lesson.** This platform draws markers as fixed-size dots on a world projection. The coordinates below are **approximate points placed to show a pattern, not addresses**, and, more important here, **a point is a stand-in for an AREA.** A tribal nation governs territory, and territory is a shape, not a dot. Until this platform gains a polygon (boundary) map layer, which the plan for this path notes these courses are the first content to genuinely need, hold the shape in your head while you read the dots.

## What the map shows, and why it is one color

Every marker on this map is drawn in the **same single color**, and that is the whole point. **These are not shades of the state, county, and city ladder.** They are a **separate layer**: separate sovereigns whose authority is inherent and pre-existing, not delegated down the federal stack. Course 1's map put the vertical stack in blue and drew the tribal nation in a different color to make exactly this point in one case. This map is that different-colored layer, standing on its own. **Rendering any of these as one more rung of the state ladder would not be a simplification; it would be a factual error about where the authority comes from**, which is the claim the entire course has been making in words.

## The five points, and what each one teaches

- **The Navajo Nation** (near Window Rock, Arizona), the largest reservation by area, whose government rejected the 1934 IRA template and later enacted its own Dine Fundamental Laws.
- **The Muscogee (Creek) Nation** (near Okmulgee, Oklahoma), the McGirt nation, whose reservation the Supreme Court confirmed endures across much of eastern Oklahoma, over the same ground as the State of Oklahoma.
- **The Onondaga Nation** (near Syracuse, New York), the central fire of the Haudenosaunee Confederacy, a union of sovereigns older than the United States.
- **The Oglala Lakota / Pine Ridge** (southwestern South Dakota), one large reservation among the several hundred distinct nations, a reminder that this layer is not one government but many.
- **An Alaska Native corporation region** (near Utqiagvik, Alaska), where the settlement ran through a CORPORATION rather than a reservation, the Path A to Path B crossover drawn as a point that is deliberately the same color, because it is the same layer of "not the state ladder," reached by a different legal road.

## What the map cannot show

**It cannot show overlap as area.** McGirt's whole point is that the Muscogee reservation and the State of Oklahoma occupy the same ground; a dot cannot draw two shapes on one floor. **It cannot show that these five stand in for 574.** Five points are a sample, not a census, and the true layer is hundreds of distinct governments. And **it cannot show the Alaska difference honestly as a point**, because a corporation's "territory" is private corporate property, not governed territory, which is the exact distinction Venetie drew. Read the dots, then put them back into areas in your mind, and the limits of the map become the last lesson of the course.

## Sources
- McGirt v. Oklahoma, 591 U.S. 894 (2020).
- Alaska v. Native Village of Venetie Tribal Government, 522 U.S. 520 (1998). https://supreme.justia.com/cases/federal/us/522/520/
- U.S. Department of the Interior, Bureau of Indian Affairs. (2024). Federally recognized Indian tribes list.`,
      mapContent: {
        markers: [
          {
            id: "tribal-map-navajo",
            lat: 35.6803,
            lng: -109.0559,
            title: "Navajo Nation (near Window Rock, Arizona)",
            color: "#7c3aed",
            description:
              "The largest reservation by area, seat of the Navajo Nation government near Window Rock. The Navajo Nation rejected the 1934 Indian Reorganization Act template in a 1935 referendum and later, in 2002, enacted its own Dine Fundamental Laws, weaving traditional Dine law into a modern legal code on its own terms. Drawn in the tribal-layer color because its authority is inherent and pre-existing, not a rung on the state ladder. This point is a stand-in for a large governed AREA, not an address; coordinates are approximate.",
          },
          {
            id: "tribal-map-muscogee",
            lat: 35.6231,
            lng: -95.9605,
            title: "Muscogee (Creek) Nation (near Okmulgee, Oklahoma)",
            color: "#7c3aed",
            description:
              "The nation at the center of McGirt v. Oklahoma (2020), which held the Muscogee (Creek) Reservation was never disestablished by Congress and so endures across much of eastern Oklahoma, including most of Tulsa, for purposes of the Major Crimes Act. The reservation and the State of Oklahoma share the same ground: two sovereigns on one floor, which a single dot cannot draw and a polygon layer could. Coordinates are approximate points standing in for an area.",
          },
          {
            id: "tribal-map-onondaga",
            lat: 42.9950,
            lng: -76.1550,
            title: "Onondaga Nation (near Syracuse, New York)",
            color: "#7c3aed",
            description:
              "The central council fire of the Haudenosaunee Confederacy, the union of six nations (Mohawk, Oneida, Onondaga, Cayuga, Seneca, and Tuscarora) bound by the Great Law of Peace and, in the Confederacy's own words, the oldest participatory democracy on Earth, older than the United States. This course teaches that the Confederacy's traditional governance exists and whose it is, and stops before its ceremonies and restricted knowledge. Coordinates are approximate; a point stands in for governed territory.",
          },
          {
            id: "tribal-map-pineridge",
            lat: 43.0247,
            lng: -102.5560,
            title: "Oglala Lakota / Pine Ridge (South Dakota)",
            color: "#7c3aed",
            description:
              "One large reservation among the 574 federally recognized nations, included precisely to make the point that this layer is not one government but many distinct governments. Same color as the others because it is the same kind of authority, a separate sovereign, not a shade of the county or state ladder. Coordinates are approximate points placed to show the pattern, standing in for an area rather than marking a building.",
          },
          {
            id: "tribal-map-ancsa",
            lat: 71.2906,
            lng: -156.7886,
            title: "An Alaska Native corporation region (near Utqiagvik, Alaska)",
            color: "#7c3aed",
            description:
              "Alaska's far north, in the region of an Alaska Native regional corporation created under the Alaska Native Claims Settlement Act of 1971. Here the settlement ran through a CORPORATION with shareholders and a board, not a reservation: Alaska v. Native Village of Venetie (1998) held that ANCSA corporate land is not Indian country. Drawn the same color as the others because it is still the separate-sovereign layer, reached by a different legal road, and a point cannot honestly show that corporate 'territory' is private property, not governed land. Coordinates are approximate.",
          },
        ],
      },
    },
    {
      slug: "tribal-capstone",
      title: "17 - Capstone: find the nations whose ground you are on",
      section: "Section 5 - See it, then map your own",
      lessonType: "assignment",
      body: `You have the whole course: sovereignty that is inherent and pre-existing, treaties as supreme law, the range of how nations govern today, and the hard edges of Public Law 280, McGirt, and the Alaska corporations. Now use it on the ground you actually stand on. **Identify the tribal nation or nations whose territory includes or is nearest the place you live, and read one primary instrument of their sovereignty from the record.**

**One boundary before you start, and it is the heart of this course. This is a research exercise in reading authority, not legal advice, and it is not an invitation to describe any nation's ceremonies or internal spiritual life.** Your task is to identify governments and read public documents, and to stop exactly where this course stopped: at ceremony, at restricted knowledge, at anything a nation has not itself published. **Naming the nation correctly, and reading its own public words, is the whole assignment.**

## The assignment

Produce a **one-page sovereignty note** for your place: name the nation or nations, state the basis of their authority, and read one primary instrument (a treaty, a tribal constitution, or a court decision) enough to say what power it establishes and who it binds.

## Step 1. Identify the nation or nations, from the record

Whose land are you on? **Do not guess, and do not rely on memory.** Use primary and nation-published sources: the Bureau of Indian Affairs and Department of the Interior recognition lists, a nation's own official website, and treaty-mapping resources. Record, for each nation you find:

| Record | What to write |
|---|---|
| **The nation's name** | As the nation itself writes it, if published |
| **Recognition status** | Federally recognized, state recognized, or neither |
| **Nearest governed land** | The reservation, trust land, or, in Alaska, the corporation region and any tribe |

**If you are in Alaska, name all three structures where they apply**: the tribe, the Native corporation region, and (rarely) a reserve, because they answer "who has the power?" differently. That distinction is the course's sharpest lesson; show that you can make it.

## Step 2. Find one primary instrument, and read it

Pick ONE document that establishes some of the nation's authority, and read enough of it to describe it:

- **A treaty** the nation signed (note what it CEDED and what it RESERVED, using Section 2's "grant from the tribe" canon).
- **A tribal constitution** (note whether it is an IRA-era charter, a non-IRA charter, or rooted in traditional law, using Section 3).
- **A court decision** that turned on the nation's status (McGirt for the Muscogee, Venetie for Alaska corporate land, or one specific to your nation).

Write two or three sentences on **what power the instrument establishes and who it binds**, in your own words, sourced to the document.

## Step 3. Place it against the course

In one short paragraph, connect what you found to the course's spine:

1. **Inherent or delegated?** Confirm the authority is pre-existing and retained, not handed down the state ladder.
2. **Which governing form?** IRA, non-IRA, traditional, or (Alaska) a corporation and a tribe.
3. **Any hard edge?** Is this a Public Law 280 state? Did a McGirt-style question ever arise here?

## Rules you do not get to break

1. **From the record, not from memory.** Every claim ties to a document or a nation-published page you can name.
2. **Name the nation as the nation names itself**, where it has published that name. Its self-description is its own, not yours to revise.
3. **Stop where the course stopped.** Identify governments and read public instruments; reproduce no ceremony, spiritual practice, or restricted internal detail. If a nation has not published it, it is not yours to write.
4. **Distinguish "did not find" from "does not exist."** A blank you label honestly is worth more than a confident guess, especially with contested or overlapping territory.
5. **This is not legal advice**, and your note should say so at the top, because someone else may read it.

## What good looks like

A one-page note in which the nation is named as it names itself, its authority is correctly identified as inherent and pre-existing, one primary instrument is read closely enough to say what it establishes and whom it binds, and the Alaska distinction (or its absence) is handled correctly. **If you started this course thinking of "Native American government" as one thing off to the side of the real map, and you end it able to name the specific sovereign whose ground you stand on and read its own words about its own power, then you have done exactly what this course set out to teach.**

## Sources
- U.S. Department of the Interior, Bureau of Indian Affairs. (2024). Federally recognized Indian tribes list.
- McGirt v. Oklahoma, 591 U.S. 894 (2020).
- Alaska v. Native Village of Venetie Tribal Government, 522 U.S. 520 (1998). https://supreme.justia.com/cases/federal/us/522/520/`,
    },
  ],
};
