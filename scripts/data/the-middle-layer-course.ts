// Authored "The Middle Layer: States, Provinces, and Regions" — course 4 of Path A ("Who Has the
// Power? Governments From the Block to the Globe"), planned in
// plans/46-structures-paths-government-and-business.md.
//
// WHAT THIS COURSE IS
// -------------------
// The course about the level of government BETWEEN the national layer and the local layer: the US
// state, the German Land, the Canadian province, the Spanish autonomous community, the devolved
// nations of the United Kingdom. Its one load-bearing idea is the difference between FEDERALISM and
// DEVOLUTION, which the course teaches as ENTRENCHED versus DELEGATED. A US state is a co-sovereign
// whose existence and equal representation in the Senate are constitutionally entrenched; the
// federal government cannot abolish it. Scotland's powers come from the Scotland Act 1998, an
// ordinary Act of the Westminster Parliament that, under the doctrine of parliamentary sovereignty,
// Parliament could in principle repeal. That single distinction, whether a middle-layer government's
// power is bolted into a constitution or handed over by a statute the centre can rewrite, is the
// whole lesson, and every case in the course is a test of it.
//
// RELATIONSHIP TO OTHER SHIPPED COURSES IN THIS PATH (do not contradict)
// ---------------------------------------------------------------------
//   * Course 1, "Who Has the Power to Do This?", shipped the METHOD (the four questions: who acted,
//     under what authority, where the power comes from, who can overturn it), the vertical stack, the
//     Tenth Amendment / reserved police power, and the fact that in the US "cities are creatures of
//     the state" (Dillon's Rule; Hunter v. City of Pittsburgh, 1907). This course treats course 1 as
//     its prerequisite and builds directly on those anchors. It repeatedly uses the four questions.
//   * Course 5, "The Local Layer", is the layer BELOW this one (cities, towns, counties, special
//     districts, Dillon's Rule vs home rule, Unigov). This course does NOT re-teach the local
//     material. Where course 5 taught "a city is a creature of the state", this course teaches the
//     mirror fact about the layer above: a US STATE is NOT a creature of the federal government. The
//     entrenched/delegated contrast is the through-line that connects the two courses.
//
// SOURCING DISCIPLINE (the load-bearing part of the file)
// ------------------------------------------------------
//   * US constitutional text is cited by article/amendment; US cases by reporter. Foreign
//     constitutions and statutes are cited by their official name, article/section, and year, which
//     is authoritative on its own (like a court reporter), with the official government host given
//     where the URL pattern is stable and confirmed.
//   * WHERE CLASSIFICATION IS CONTESTED, THE DISAGREEMENT IS THE LESSON. Whether Spain is "federal",
//     "quasi-federal", or a decentralised unitary state; whether Canada's centralist 1867 design or
//     its decentralised lived reality is the truer picture; whether the UK's devolution is legally
//     reversible yet politically entrenched; and whether Germany's "eternity clause" makes its
//     federalism MORE entrenched than the US, are all taught as live questions, not settled facts.
//   * NO invented case, statute, date, official, or statistic. Verified figures used: 16 German
//     Länder and 69 Bundesrat votes (3 to 6 per Land); 17 Spanish autonomous communities plus 2
//     autonomous cities; France's 2016 reduction from 22 to 13 metropolitan regions. Where a precise
//     figure could not be verified, the concept is taught without a fabricated citation.
//
// House rule: NO em-dashes or en-dashes in prose. Regular hyphens only. Verbatim cited titles inside
// a `## Sources` block are the only place a dash may survive.

import type { AuthoredCourse } from "./authored-course";

export const THE_MIDDLE_LAYER_COURSE: AuthoredCourse = {
  title: "The Middle Layer: States, Provinces, and Regions",
  description:
    "The course about the level of government between the nation and the locality: the US state, the German Land, the Canadian province, the Spanish autonomous community, and the devolved nations of the United Kingdom. It is course 4 of the path whose method course, Who Has the Power to Do This?, already taught the four questions and the vertical stack, and it sits directly above course 5, The Local Layer. Its one load-bearing idea is the difference between federalism and devolution, taught as entrenched versus delegated. A United States state is a co-sovereign: its existence and its equal representation in the Senate are bolted into the Constitution, and the federal government cannot abolish it. Scotland's powers, by contrast, come from the Scotland Act 1998, an ordinary Act of the Westminster Parliament that, under the doctrine of parliamentary sovereignty, Parliament could in principle repeal. That distinction, whether a middle-layer government holds its power by constitutional entitlement or by a statute the centre can rewrite, is the whole lesson. You will learn the US reserved powers and the anti-commandeering doctrine, why a state cannot be abolished, and interstate compacts; then Germany's Laender and the Bundesrat, Canada's provinces under the Constitution Acts of 1867 and 1982, and Spain's contested estado autonomico; then the United Kingdom's asymmetric devolution and the sovereignty question at its heart. It closes with a map of federal, devolved, and unitary systems and a capstone: classify a real subnational government as entrenched-federal or devolved, and defend it from the primary documents. This course teaches how to read authority. It is not legal advice.",
  lessons: [
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 1 · The middle layer, and the whole lesson
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "middle-what-this-is",
      title: "1 · The layer between the nation and the block",
      section: "Section 1 · The middle layer, and the whole lesson",
      body: `Between the national government at the top of the stack and the city at the bottom sits a layer that goes by many names: **state, province, Land, region, autonomous community, devolved nation.** This course is about that middle layer, and about one question you can ask of any government that sits there: **does it hold its power by right, or on loan?**

## First, the boundary. This is not legal advice.

**This course teaches how to READ the authority of middle-layer governments. It is not legal advice, and it cannot tell you whether any particular government action was lawful.** It does not create a lawyer-client relationship. It teaches the questions a lawyer, a journalist, or an organiser asks first, so you can open a constitution or a statute and get oriented. That distinction runs the whole way through, and it matters more here than usual, because this course compares five countries whose law you would each read differently in practice.

## What you already have, if you took course 1

This is course 4 of the path "Who Has the Power? Governments From the Block to the Globe." **Course 1, "Who Has the Power to Do This?", gave you the method**, four questions to ask of any government action: who acted (the body), under what authority, where the power comes from (the document), and who can overturn it. It taught the **vertical stack** (nation, state, local, special district) and the fact that in the United States **a city is a creature of the state.** Course 5, "The Local Layer", develops the bottom of that stack. **This course develops the middle**, and it needs the four questions on every page.

## The one contrast this whole course is built on

Course 5 taught you that a US city is a creature of the state: the state made it, the state can remake or abolish it, and its power is delegated. **The single most important thing to understand about the middle layer is that a US STATE is not that.** A state is not a creature of the federal government. Washington did not create the states, cannot abolish them, and cannot simply strip them of their powers. A state is a **co-sovereign.**

Now hold that against a second case. **Scotland has a parliament with real power over health, education, justice, and more. But that parliament was created by the Scotland Act 1998, an ordinary Act of the United Kingdom Parliament** (Scotland Act 1998, c. 46). Under the British doctrine of parliamentary sovereignty, that same Parliament could, in principle, amend or repeal the Act. **Two middle-layer governments, both powerful, holding their power on completely different terms.** One is entrenched. One is delegated. Telling those two apart is the skill this course teaches.

## Entrenched versus delegated, in one table

| | A US STATE (entrenched) | SCOTLAND (delegated) |
|---|---|---|
| **Where its power comes from** | The Constitution itself | An Act of the UK Parliament |
| **Can the centre abolish it?** | No | In principle, yes, by statute |
| **Default rule** | Holds all power not given away | Holds the power the statute grants |
| **Who can take the power back** | Only a constitutional amendment | The same Parliament that gave it |

**Read the two columns as the poles of the course.** Everything between them, Germany's Laender, Canada's provinces, Spain's autonomous communities, is a case to be placed on that line. And the placement is not always obvious, because some systems are genuinely contested, which is a feature of the subject and something this course teaches rather than hides.

## Where this course goes

Four moves, in order: **(1)** the core distinction, federalism versus devolution, and the spectrum from federal to unitary. **(2)** The United States: the reserved powers, why a state cannot be abolished, and interstate compacts. **(3)** Three systems abroad: Germany, Canada, and Spain, each a different answer. **(4)** The United Kingdom's devolution and the sovereignty question at its heart. Then you see the whole thing on a map and classify a real one yourself.

## Sources
- U.S. Const. amend. X. https://constitution.congress.gov/constitution/amendment-10/
- Scotland Act 1998, c. 46. https://www.legislation.gov.uk/ukpga/1998/46
- Hunter v. City of Pittsburgh, 207 U.S. 161 (1907). https://supreme.justia.com/cases/federal/us/207/161/`,
    },
    {
      slug: "middle-entrenched-vs-delegated",
      title: "2 · Entrenched versus delegated: the whole lesson",
      section: "Section 1 · The middle layer, and the whole lesson",
      body: `Last lesson set the two poles. This lesson makes the distinction precise, because it is the tool you will use on every country in the course. **Federalism and devolution can look identical from the street, a regional parliament passing real laws, and be opposite underneath.** The difference is where the power is anchored.

## Federalism: power divided by the constitution

In a **federal** system, the constitution itself divides authority between the national government and the middle-layer governments, and **neither level holds its power at the other's pleasure.** The middle-layer unit is a co-sovereign: it exists in its own right, its core powers are guaranteed by the constitution, and the national government cannot unilaterally take those powers away or abolish the unit. To change the division usually requires **amending the constitution**, which the national legislature cannot do alone.

The United States is the classic case. The states predate the federal government, and the Tenth Amendment states the default: "The powers not delegated to the United States by the Constitution, nor prohibited by it to the States, are reserved to the States respectively, or to the people" (U.S. Const. amend. X). **A state does not receive its power from Washington; it keeps the power it never gave up.**

## Devolution: power granted by a statute

In a **devolved** system, a **unitary** state (one where sovereignty legally rests in the centre) hands some of its power to a regional body **by ordinary legislation.** The regional parliament is real and can be powerful, but its authority is a grant, and the sovereign centre that made the grant can, as a matter of law, amend or revoke it by passing another statute. **The power is delegated, not surrendered.**

The United Kingdom is the classic case. The Scottish Parliament, the Senedd in Wales, and the Northern Ireland Assembly were each created by an Act of the Westminster Parliament in 1998 (Scotland Act 1998, c. 46; Government of Wales Act 1998; Northern Ireland Act 1998). And the Scotland Act says so in its own text: section 28(7) provides that the Act "does not affect the power of the Parliament of the United Kingdom to make laws for Scotland" (Scotland Act 1998, c. 46, s. 28(7)). **The statute that creates the devolved parliament also preserves the sovereign's power over it.**

## The test that tells them apart

You cannot tell federalism from devolution by how much power the region has, or how proud its people are, or whether it has a flag. **You tell them apart by asking course 1's fourth question, who can overturn it, about the region's very existence:**

| Ask this | Federal answer | Devolved answer |
|---|---|---|
| Where is the region's power anchored? | In the constitution | In a statute |
| Can the centre abolish the region alone? | No | In principle, yes |
| What does it take to change the division? | A constitutional amendment | An Act of the central legislature |
| Is the centre still legally sovereign over it? | No, sovereignty is divided | Yes, sovereignty stays central |

**A powerful devolved parliament is still delegated. A weak-looking state is still entrenched.** That is the whole trick, and it is why "how much can this region do?" is the wrong first question. The right first question is "on what terms does it hold whatever it does?"

## Why the distinction is not merely technical

It decides what happens in a crisis. If a central government and a middle-layer government collide, **the entrenched unit can force the fight into the constitution and the courts; the delegated unit can, in the last resort, be legislated out of the way.** That is a real difference in power, even when the day-to-day looks the same. The rest of this course is that difference, tested against five countries that answer it in five ways.

## Sources
- U.S. Const. amend. X. https://constitution.congress.gov/constitution/amendment-10/
- U.S. Const. art. V. https://constitution.congress.gov/constitution/article-5/
- Scotland Act 1998, c. 46, s. 28(7). https://www.legislation.gov.uk/ukpga/1998/46/section/28`,
      recallContent: [
        {
          prompt: "State the one contrast this whole course is built on.",
          answer: "A US state is a co-sovereign whose power is entrenched in the Constitution (the federal government cannot abolish it), while a devolved parliament like Scotland's holds power granted by an ordinary statute the sovereign centre could in principle repeal. Entrenched versus delegated.",
        },
        {
          prompt: "How is a US STATE different from a US CITY, in terms of course 5's lesson?",
          answer: "A city is a creature of the state: made by the state, and the state can remake or abolish it. A state is NOT a creature of the federal government: Washington did not create it, cannot abolish it, and cannot simply strip its powers. The state is a co-sovereign.",
        },
        {
          prompt: "Why is this course, comparing five countries' law, especially careful to say it is not legal advice?",
          answer: "Because you would read each country's law differently in practice; the course teaches the questions to ask and how to read the authority, not whether any particular action was lawful, and it creates no lawyer-client relationship.",
        },
      ],
    },
    {
      slug: "middle-federal-unitary-spectrum",
      title: "3 · Federal, unitary, and the spectrum between",
      section: "Section 1 · The middle layer, and the whole lesson",
      body: `Federal and devolved are two points, not a whole map. This lesson sets out the fuller spectrum, from a purely unitary state at one end to a federal one at the other, so that when you meet a real country you can place it rather than force it into a box. **The comparative-government literature treats this as a spectrum for a reason: many real states sit in the middle, and some are argued over.**

## The three broad types

| Type | Where sovereignty sits | The middle layer's power |
|---|---|---|
| **Unitary** | In the centre | Whatever the centre grants; administrative, and revocable |
| **Devolved (unitary with devolution)** | In the centre | Real and legislative, but granted by statute and legally revocable |
| **Federal** | Divided by the constitution | Guaranteed by the constitution; the unit is a co-sovereign |

**A purely unitary state** may still have regions, provinces, or departments, but they exist to administer the centre's decisions, and the centre can create, merge, or abolish them by ordinary law. France is often cited here: it has regions, but in **2016 the French state reduced its metropolitan regions from 22 to 13 by ordinary legislation** (Loi n. 2015-29 of 16 January 2015), redrawing the middle layer without any region's consent. That is the unitary signature: the middle layer is the centre's to rearrange, the regional echo of the "cities are creatures of the state" rule you met in course 5.

**A devolved state** is a unitary state that has handed legislative power to regional parliaments. The power is real, but the map you drew last lesson still applies: it is delegated.

**A federal state** divides sovereignty in the constitution itself. Scholars who compare these systems, such as Ronald Watts and Daniel Elazar, stress that federalism is not one design but a family, and that the shared feature is a constitutionally guaranteed, non-subordinate role for the middle layer (Watts, 2008; Elazar, 1987).

## The spectrum is real, and so is the argument about it

The reason this is a spectrum and not four labelled boxes is that **real countries blur the lines, and honest scholars disagree about where some of them fall.** You will meet three hard cases in this course:

- **Canada** was designed in 1867 to be centralist, yet became one of the most decentralised federations in the world through decades of judicial interpretation. Which fact is the "real" Canada is a genuine debate (Lesson 10).
- **Spain** calls itself neither federal nor unitary; its 1978 Constitution built an "estado autonomico" (state of autonomies) that many scholars call quasi-federal and others call a decentralised unitary state. The label is contested on purpose (Lesson 11).
- **The United Kingdom** is legally a unitary state with devolution, yet its devolution has become so politically settled that some argue it is federal in all but name, while the law says otherwise (Lessons 13 and 14).

**When you cannot cleanly classify a country, that is often not your failure; it is a real feature of the country.** The method for those cases is the one course 1 taught for every contested question: say what the documents establish, name what is disputed, and keep the two apart. This course will do exactly that, out loud, three times.

## What to carry into Section 2

The tool is set. **Federalism entrenches the middle layer in the constitution; devolution delegates power to it by statute; a unitary state keeps the middle layer as its own administrative creation.** Section 2 takes the clearest federal case, the United States, and shows precisely how the entrenchment is built, because you cannot recognise entrenchment abroad until you have seen it assembled at home.

## Sources
- Watts, R. L. (2008). Comparing federal systems (3rd ed.). McGill-Queen's University Press.
- Elazar, D. J. (1987). Exploring federalism. University of Alabama Press.
- U.S. Const. amend. X. https://constitution.congress.gov/constitution/amendment-10/`,
      recallContent: [
        {
          prompt: "What is federalism, and how does it differ from devolution at the root?",
          answer: "In federalism the constitution itself divides authority, so the middle-layer unit is a co-sovereign whose core powers are guaranteed and cannot be unilaterally removed; changing the division needs a constitutional amendment. Devolution grants power to a region by ordinary statute, which the sovereign centre can in principle amend or revoke.",
        },
        {
          prompt: "What is the test that tells federalism and devolution apart, regardless of how much power the region has?",
          answer: "Ask course 1's fourth question about the region's very existence: where is its power anchored (constitution vs statute), can the centre abolish it alone (no vs in principle yes), what changes the division (an amendment vs a central statute), and is the centre still legally sovereign over it.",
        },
        {
          prompt: "Why does the entrenched/delegated distinction matter in a crisis, not just on paper?",
          answer: "If the centre and a middle-layer government collide, an entrenched unit can force the fight into the constitution and the courts, while a delegated unit can in the last resort be legislated out of the way. That is a real difference in power even when the day-to-day looks the same.",
        },
      ],
    },
    {
      slug: "middle-quiz-distinction",
      title: "4 · Quiz: the core distinction",
      section: "Section 1 · The middle layer, and the whole lesson",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "The one distinction this whole course is built on is:",
            options: [
              "Rich regions versus poor regions",
              "Big countries versus small ones",
              "Entrenched power versus delegated",
              "Elected bodies versus appointed",
            ],
            correctIndex: 2,
            explanation: "Federalism entrenches the middle layer in the constitution; devolution delegates power to it by statute. That is the whole lesson, and every case tests it.",
            sourceLessonSlug: "middle-entrenched-vs-delegated",
          },
          {
            prompt: "In a federal system, the middle-layer unit's core powers come from:",
            options: [
              "An ordinary act of the centre",
              "The constitution itself",
              "A grant from the president",
              "A vote of the other regions",
            ],
            correctIndex: 1,
            explanation: "The constitution divides authority, so the unit is a co-sovereign holding power in its own right, not at the centre's pleasure.",
            sourceLessonSlug: "middle-entrenched-vs-delegated",
          },
          {
            prompt: "In a devolved system, the regional parliament's authority is best described as:",
            options: [
              "Surrendered by the centre forever",
              "Older than the central state",
              "Granted by a statute, revocable",
              "Fixed by an ancient treaty",
            ],
            correctIndex: 2,
            explanation: "Devolution hands power to a region by ordinary legislation; the sovereign centre can in principle amend or revoke it by another statute. The power is delegated, not surrendered.",
            sourceLessonSlug: "middle-entrenched-vs-delegated",
          },
          {
            prompt: "How does a US STATE differ from a US CITY (course 5's lesson)?",
            options: [
              "A state is larger and richer",
              "A state has more employees",
              "A city elects more officials",
              "A state is not the centre's creature",
            ],
            correctIndex: 3,
            explanation: "A city is a creature of the state, which can remake or abolish it. A state is a co-sovereign: Washington did not create it and cannot abolish it or simply strip its powers.",
            sourceLessonSlug: "middle-what-this-is",
          },
          {
            prompt: "Scotland's Parliament was created by:",
            options: [
              "The Scotland Act 1998, a statute",
              "A written Scottish constitution",
              "A treaty with the United States",
              "A ruling of the Supreme Court",
            ],
            correctIndex: 0,
            explanation: "It was created by an ordinary Act of the UK Parliament, which under parliamentary sovereignty could in principle amend or repeal it. That makes it delegated, not entrenched.",
            sourceLessonSlug: "middle-what-this-is",
          },
          {
            prompt: "Section 28(7) of the Scotland Act 1998 provides that the Act does not affect:",
            options: [
              "The Queen's power to dissolve it",
              "Westminster's power to make Scottish law",
              "The European Union's authority",
              "The Scottish courts' jurisdiction",
            ],
            correctIndex: 1,
            explanation: "The statute that creates the devolved parliament also preserves the UK Parliament's power to make laws for Scotland, the signature of a delegated grant.",
            sourceLessonSlug: "middle-entrenched-vs-delegated",
          },
          {
            prompt: "To tell federalism from devolution, the RIGHT first question is:",
            options: [
              "How much can this region do?",
              "How old is this region's flag?",
              "On what terms does it hold power?",
              "How many people live there?",
            ],
            correctIndex: 2,
            explanation: "A powerful devolved parliament is still delegated; a weak-looking state is still entrenched. The terms on which power is held, not its amount, is the test.",
            sourceLessonSlug: "middle-entrenched-vs-delegated",
          },
          {
            prompt: "The Tenth Amendment sets the US default that a state holds:",
            options: [
              "Only powers Congress hands it",
              "No power a court has reviewed",
              "Every power not given away or barred",
              "Only powers listed in Article I",
            ],
            correctIndex: 2,
            explanation: "Powers not delegated to the United States nor prohibited to the states are reserved to the states or the people. A state keeps the power it never gave up.",
            sourceLessonSlug: "middle-entrenched-vs-delegated",
          },
          {
            prompt: "In a purely UNITARY state, the middle layer (regions, provinces) is:",
            options: [
              "A co-sovereign like a US state",
              "The centre's to redraw by ordinary law",
              "Protected by the constitution",
              "Older than the central government",
            ],
            correctIndex: 1,
            explanation: "A unitary state can create, merge, or abolish its regions by ordinary law: the regional echo of 'cities are creatures of the state.'",
            sourceLessonSlug: "middle-federal-unitary-spectrum",
          },
          {
            prompt: "France in 2016 reduced its metropolitan regions from 22 to 13 by:",
            options: [
              "A national referendum vote",
              "A ruling of the courts",
              "Each region's own consent",
              "Ordinary central legislation",
            ],
            correctIndex: 3,
            explanation: "France redrew its middle layer by ordinary law without any region's consent, the unitary signature: the middle layer is the centre's to rearrange.",
            sourceLessonSlug: "middle-federal-unitary-spectrum",
          },
          {
            prompt: "Why does the course treat federal-versus-unitary as a spectrum, not four boxes?",
            options: [
              "Because labels do not matter",
              "Because all states are identical",
              "Because real cases blur, and are argued over",
              "Because only the US is federal",
            ],
            correctIndex: 2,
            explanation: "Real countries blur the lines and honest scholars disagree where some fall (Canada, Spain, the UK). Contested classification is a real feature, not the reader's failure.",
            sourceLessonSlug: "middle-federal-unitary-spectrum",
          },
          {
            prompt: "The scholars Watts and Elazar stress that federalism is:",
            options: [
              "A single fixed design",
              "A family of designs, not one",
              "Only found in the Americas",
              "The same as devolution",
            ],
            correctIndex: 1,
            explanation: "Federalism is a family of systems whose shared feature is a constitutionally guaranteed, non-subordinate role for the middle layer (Watts, 2008; Elazar, 1987).",
            sourceLessonSlug: "middle-federal-unitary-spectrum",
          },
          {
            prompt: "The difference between federalism and devolution matters most:",
            options: [
              "When a region designs its flag",
              "When tourists visit the region",
              "When the centre and region collide",
              "When the region holds a festival",
            ],
            correctIndex: 2,
            explanation: "In a collision, an entrenched unit can force the fight into the constitution; a delegated unit can in the last resort be legislated out of the way.",
            sourceLessonSlug: "middle-entrenched-vs-delegated",
          },
          {
            prompt: "This course states plainly that it is:",
            options: [
              "A guarantee an action was lawful",
              "A full substitute for a lawyer",
              "Reliable legal advice for you",
              "A method to read authority, not advice",
            ],
            correctIndex: 3,
            explanation: "It teaches how to read the authority of middle-layer governments and the questions to ask first. It is not legal advice and creates no lawyer-client relationship.",
            sourceLessonSlug: "middle-what-this-is",
          },
          {
            prompt: "A 'weak-looking state' and a 'powerful devolved parliament' show that:",
            options: [
              "Amount of power sets the category",
              "Terms of power set the category",
              "The larger one is always federal",
              "Neither one holds real power",
            ],
            correctIndex: 1,
            explanation: "A powerful devolved parliament is still delegated and a weak-looking state is still entrenched. The terms on which power is held, not its amount, is the test.",
            sourceLessonSlug: "middle-entrenched-vs-delegated",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 2 · The United States: co-sovereign states
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "middle-co-sovereigns",
      title: "5 · States as co-sovereigns: the reserved powers",
      section: "Section 2 · The United States: co-sovereign states",
      body: `Now take the clearest federal case apart to see how entrenchment is actually built. Course 1 taught the Tenth Amendment as the state's default rule inside the vertical stack. This lesson uses it for a different job: to show that a US state is a **co-sovereign**, a government the federal government must work alongside rather than command. **The proof is not in the words "reserved to the States"; it is in what the federal government is forbidden to do to a state.**

## Reserved powers, restated for this course

The Tenth Amendment is the anchor: "The powers not delegated to the United States by the Constitution, nor prohibited by it to the States, are reserved to the States respectively, or to the people" (U.S. Const. amend. X). Course 1 read this as the source of the state's broad **police power.** Read it now for a second meaning: **the states are the residual holders of power in the American system.** The federal government has an enumerated list; whatever is left over sits with the states. In a federation, residual power is a mark of co-sovereignty, and where that residue sits is a question you will ask of every country in Section 3.

## The anti-commandeering doctrine: the entrenchment made visible

The sharpest modern proof that a state is not the federal government's subordinate is the **anti-commandeering doctrine.** It holds that Congress **may not compel a state to enact or administer a federal regulatory program.** The federal government can regulate people directly, and it can offer states money with conditions, but it cannot simply order a state legislature or state officials to do its work.

The Supreme Court built the doctrine in three cases worth knowing by name:

| Case | What Congress could not do |
|---|---|
| **New York v. United States (1992)** | Force a state legislature to "take title" to radioactive waste or regulate it as Congress directed |
| **Printz v. United States (1997)** | Command state and local officers to run federal background checks on handgun buyers |
| **Murphy v. NCAA (2018)** | Forbid states from repealing their own laws against sports betting |

(New York v. United States, 1992; Printz v. United States, 1997; Murphy v. National Collegiate Athletic Assn., 2018.) **Read the pattern: in each case the federal government wanted to use the state as an instrument, and the Court said it could not.** A city can be commanded by its state, because a city is a creature of the state. A state cannot be commanded the same way by the federal government, because a state is a co-sovereign. **That contrast is the entrenched/delegated line drawn by the Supreme Court itself.**

## What co-sovereignty does NOT mean

Precision matters, because "co-sovereign" is easy to overstate. It does **not** mean a state can ignore valid federal law. Course 1's Supremacy Clause still governs: where the federal government acts within its enumerated powers, its law binds the states (U.S. Const. art. VI). **Co-sovereignty and supremacy coexist.** The federal government is supreme within its lane, and the states are sovereign in the residue, and the anti-commandeering doctrine polices the boundary by stopping the federal government from conscripting the states into doing its work. **A state must obey valid federal law; it need not become the federal government's staff.** Hold that distinction, because it is exactly the kind of line the foreign cases will test.

## Reading a federal-versus-state clash with the method

- **Who acted?** Name both: the federal body and the state body. Two co-sovereigns, not a superior and a subordinate.
- **Under what authority?** The federal body cites an enumerated power; the state cites its reserved police power.
- **Where is the power from?** The Constitution for the federal side; the reserved residue (Tenth Amendment) plus the state constitution for the state side.
- **Who can overturn it?** A court, deciding whether the federal government stayed in its lane or tried to commandeer, and whether the state yielded where supremacy required.

This is analysis of the structure of authority, not legal advice about any particular federal-state dispute.

## Sources
- U.S. Const. amend. X. https://constitution.congress.gov/constitution/amendment-10/
- U.S. Const. art. VI. https://constitution.congress.gov/constitution/article-6/
- New York v. United States, 505 U.S. 144 (1992). https://supreme.justia.com/cases/federal/us/505/144/
- Printz v. United States, 521 U.S. 898 (1997). https://supreme.justia.com/cases/federal/us/521/898/
- Murphy v. National Collegiate Athletic Assn., 138 S. Ct. 1461 (2018).`,
      recallContent: [
        {
          prompt: "Name the three broad types on the spectrum, and where sovereignty sits in each.",
          answer: "Unitary (sovereignty in the centre; the middle layer is administrative and revocable), devolved (sovereignty in the centre, but regions hold real legislative power granted by statute and legally revocable), and federal (sovereignty divided by the constitution; the unit is a co-sovereign).",
        },
        {
          prompt: "Why is France's 2016 reduction of its regions the 'unitary signature'?",
          answer: "France cut its metropolitan regions from 22 to 13 by ordinary legislation without any region's consent. A unitary state can create, merge, or abolish its middle layer by ordinary law, the regional echo of 'cities are creatures of the state.'",
        },
        {
          prompt: "Name the three hard cases the course will not cleanly classify, and the honest method for them.",
          answer: "Canada (centralist design vs decentralised reality), Spain (federal vs quasi-federal vs decentralised unitary), and the UK (legally unitary yet politically settled devolution). The method: state what the documents establish, name what is disputed, and keep the two apart.",
        },
      ],
    },
    {
      slug: "middle-entrenchment",
      title: "6 · Why a state cannot be abolished",
      section: "Section 2 · The United States: co-sovereign states",
      body: `The last lesson showed that the federal government cannot conscript a state. This lesson shows something stronger and stranger: **the federal government cannot get rid of a state at all, and cannot even shrink one without its consent.** This is entrenchment in its purest form, and it is written into the Constitution in several places at once. When you go looking abroad for whether a middle layer is truly entrenched, this is the checklist you carry.

## The one clause that cannot be amended away

Article V lets the Constitution be amended, but it carves out an exception that appears nowhere else: "no State, without its Consent, shall be deprived of its equal Suffrage in the Senate" (U.S. Const. art. V). **Every state gets two senators, and that guarantee is the single hardest-to-change rule in the entire Constitution.** An ordinary amendment needs supermajorities in Congress and three-quarters of the states; stripping a state of its equal Senate vote would additionally require **that state's own consent.** No other provision is protected this way. **The framers bolted the states into the structure so tightly that the equal Senate is, for practical purposes, unamendable.** That is entrenchment you can point to.

## The boundary protection

A state's territory is protected too. Article IV provides that Congress can admit new states, but "no new State shall be formed or erected within the Jurisdiction of any other State; nor any State be formed by the Junction of two or more States, or Parts of States, without the Consent of the Legislatures of the States concerned as well as of the Congress" (U.S. Const. art. IV, s. 3). **A state cannot be carved up, merged, or shrunk without the consent of its own legislature.** Compare course 5's Unigov, where the Indiana legislature redrew a city with no vote of the city's residents: that is exactly what the federal government may NOT do to a state. **The power a state holds over its cities is the power the federal government does not hold over the state.**

## Equal footing: new states arrive as full co-sovereigns

When a territory becomes a state, it does not enter as a junior member on probation. Under the **equal footing doctrine**, a new state enters "on an equal footing with the original States in all respects whatever." The Supreme Court applied this in Coyle v. Smith, striking down a condition Congress had tried to impose on Oklahoma (that it not move its capital), because once admitted a state has the same sovereignty over its internal affairs as any other (Coyle v. Smith, 1911). **There is no such thing as a second-class US state.** This will matter in Section 3, because some federations abroad are deliberately **asymmetric**, granting different powers to different units, which the US system on this point refuses.

## The Guarantee Clause

Finally, the Constitution promises each state a floor of self-government: "The United States shall guarantee to every State in this Union a Republican Form of Government" (U.S. Const. art. IV, s. 4). The clause is rarely enforced by courts, but its direction is telling: **the federal obligation runs toward protecting the states as functioning self-governing units, not toward holding a power to dissolve them.**

## Put the checklist together

**A US state is entrenched by four separate mechanisms**: an equal Senate vote that cannot be amended away without its consent (Art. V), a territory that cannot be altered without its legislature's consent (Art. IV, s. 3), admission as a full equal (equal footing, Coyle v. Smith), and a guaranteed republican government (Art. IV, s. 4). **When you test a foreign middle layer for entrenchment, ask the same four things: is its existence protected, its territory protected, its status equal, and its self-government guaranteed?** Few systems answer yes to all four, and that is what makes the US the clearest federal case. This is structural description, not legal advice.

## Sources
- U.S. Const. art. V. https://constitution.congress.gov/constitution/article-5/
- U.S. Const. art. IV, s. 3. https://constitution.congress.gov/constitution/article-4/section-3/
- U.S. Const. art. IV, s. 4. https://constitution.congress.gov/constitution/article-4/section-4/
- Coyle v. Smith, 221 U.S. 559 (1911). https://supreme.justia.com/cases/federal/us/221/559/`,
      recallContent: [
        {
          prompt: "What does the anti-commandeering doctrine hold, and which three cases built it?",
          answer: "Congress may not compel a state to enact or administer a federal regulatory program. New York v. United States (1992), Printz v. United States (1997), and Murphy v. NCAA (2018). It can regulate people directly or offer conditional money, but cannot order a state to do its work.",
        },
        {
          prompt: "How do co-sovereignty and the Supremacy Clause coexist?",
          answer: "The federal government is supreme within its enumerated lane, so a state must obey valid federal law; but the states are sovereign in the residual powers, and anti-commandeering stops the federal government from conscripting them. A state must obey valid federal law, but need not become the federal government's staff.",
        },
        {
          prompt: "Why is 'residual power sits with the states' a mark of co-sovereignty?",
          answer: "The federal government has an enumerated list and whatever is left over sits with the states (Tenth Amendment). In a federation, holding the residual power is a mark of co-sovereignty, and where the residue sits is a question to ask of every country in the course.",
        },
      ],
    },
    {
      slug: "middle-horizontal",
      title: "7 · Sideways: interstate compacts and horizontal federalism",
      section: "Section 2 · The United States: co-sovereign states",
      body: `So far the US layer has been vertical: state against nation. But co-sovereigns also deal **sideways**, with each other, and the Constitution has rules for that too. **Horizontal federalism** is how fifty co-sovereigns coexist on one continent, and its central instrument, the **interstate compact**, is a tool with no equivalent below the state layer. A city cannot make a treaty with another city. Two states can make something very much like one, and that difference is another measure of what a state is.

## The Compact Clause

States are barred from acting like independent nations in most respects, but the Constitution leaves one door open: "No State shall, without the Consent of Congress, ... enter into any Agreement or Compact with another State, or with a foreign Power" (U.S. Const. art. I, s. 10, cl. 3). **An interstate compact is a binding agreement between states**, a contract and a law at once, used to run shared rivers, ports, transit systems, environmental programs, and the movement of prisoners and children across state lines.

Once Congress consents to a compact, something important happens to it. In Cuyler v. Adams the Supreme Court held that a **congressionally approved interstate compact becomes federal law**, so that interpreting it is a federal question rather than a matter of one state's law (Cuyler v. Adams, 1981). **A compact is therefore stronger than an ordinary contract: neither state can simply walk away by changing its own statute.** The Port Authority of New York and New Jersey, which runs bridges, tunnels, airports, and the region's ports, is a standing example: it was created in 1921 by a compact between the two states with the consent of Congress, and neither state can dissolve it alone.

## The other horizontal rules

Compacts are the active tool; three constitutional clauses form the passive frame that lets co-sovereigns share a country:

| Clause | What it requires between states |
|---|---|
| **Full Faith and Credit** (Art. IV, s. 1) | Each state must respect the public acts, records, and court judgments of the others |
| **Privileges and Immunities** (Art. IV, s. 2, cl. 1) | A state generally may not discriminate against citizens of other states in basic rights |
| **Extradition** (Art. IV, s. 2, cl. 2) | A person charged in one state and found in another is to be returned on demand |

**Read these as the plumbing of co-sovereignty.** Fifty sovereigns would grind to a halt if a marriage, a judgment, or a driver's licence stopped at the state line, so the Constitution requires a baseline of mutual recognition. **The states are separate enough to need these rules and joined enough to be bound by them.** That is what a federation is: not one government and not fifty countries, but co-sovereigns under a shared constitution.

## Why this belongs in the middle-layer course

Horizontal federalism is the feature you will look for, or miss, abroad. **Germany's Laender, Canada's provinces, and Spain's autonomous communities each deal sideways in their own way, and the rules differ.** Some federations centralise these functions; others leave them to the units; devolved systems often route everything back through the sovereign centre. When you meet a middle layer, ask not only "how does it deal with the centre?" but "how does it deal with its neighbours, and who wrote those rules?" **A layer that can bind its neighbours by compact, subject only to the centre's consent, is holding a genuinely sovereign kind of power.** This is description of structure, not legal advice.

## Sources
- U.S. Const. art. I, s. 10. https://constitution.congress.gov/constitution/article-1/section-10/
- U.S. Const. art. IV, s. 1. https://constitution.congress.gov/constitution/article-4/section-1/
- U.S. Const. art. IV, s. 2. https://constitution.congress.gov/constitution/article-4/section-2/
- Cuyler v. Adams, 449 U.S. 433 (1981). https://supreme.justia.com/cases/federal/us/449/433/`,
      recallContent: [
        {
          prompt: "By which four mechanisms is a US state entrenched, and what one question does each answer?",
          answer: "Equal Senate suffrage unamendable without the state's consent (is its existence protected, Art. V); no boundary change without its legislature's consent (is its territory protected, Art. IV s. 3); admission on equal footing (is its status equal, Coyle v. Smith); and a guaranteed republican government (is its self-government guaranteed, Art. IV s. 4).",
        },
        {
          prompt: "How does the equal footing doctrine bear on 'asymmetry' abroad?",
          answer: "A new US state enters on an equal footing with all others (Coyle v. Smith, 1911); there is no second-class state. Some federations abroad are deliberately asymmetric, granting different powers to different units, which the US on this point refuses.",
        },
        {
          prompt: "How is Article IV, section 3's boundary protection the mirror of Unigov?",
          answer: "The federal government cannot carve up, merge, or shrink a state without its own legislature's consent. That is exactly what Indiana DID do to a city in Unigov (redrawing it with no residents' vote). The power a state holds over its cities is the power the federal government does not hold over the state.",
        },
      ],
    },
    {
      slug: "middle-quiz-us",
      title: "8 · Quiz: the United States",
      section: "Section 2 · The United States: co-sovereign states",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "The anti-commandeering doctrine holds that Congress may not:",
            options: [
              "Regulate any private person",
              "Offer states money with conditions",
              "Compel a state to run its program",
              "Pass any law about the states",
            ],
            correctIndex: 2,
            explanation: "Congress can regulate people directly and offer conditional money, but cannot order a state legislature or officials to enact or administer a federal program.",
            sourceLessonSlug: "middle-co-sovereigns",
          },
          {
            prompt: "Printz v. United States (1997) held that Congress could not command:",
            options: [
              "States to raise their own taxes",
              "State officers to run federal checks",
              "Cities to hold local elections",
              "Courts to hear certain cases",
            ],
            correctIndex: 1,
            explanation: "Congress could not command state and local officers to run federal background checks on handgun buyers, part of the anti-commandeering line of cases.",
            sourceLessonSlug: "middle-co-sovereigns",
          },
          {
            prompt: "Co-sovereignty does NOT mean a state may:",
            options: [
              "Ignore valid federal law",
              "Hold its reserved powers",
              "Run its own court system",
              "Set its own criminal code",
            ],
            correctIndex: 0,
            explanation: "The Supremacy Clause still governs: within the federal government's enumerated lane, its law binds the states. Co-sovereignty and supremacy coexist.",
            sourceLessonSlug: "middle-co-sovereigns",
          },
          {
            prompt: "The single hardest-to-change rule in the whole US Constitution is:",
            options: [
              "The state police power grant",
              "The general right to amend it",
              "A state's equal Senate suffrage",
              "The federal income tax power",
            ],
            correctIndex: 2,
            explanation: "Article V says no state may be deprived of its equal suffrage in the Senate without its own consent, a protection no other clause has.",
            sourceLessonSlug: "middle-entrenchment",
          },
          {
            prompt: "Under Article IV, a state's territory cannot be merged or shrunk without:",
            options: [
              "A national popular vote",
              "The President's signature only",
              "A ruling by the Supreme Court",
              "That state legislature's consent",
            ],
            correctIndex: 3,
            explanation: "No state may be carved up, merged, or shrunk without the consent of its own legislature as well as Congress. This is the mirror of Unigov, which the federal government may not do to a state.",
            sourceLessonSlug: "middle-entrenchment",
          },
          {
            prompt: "Coyle v. Smith (1911) applied the equal footing doctrine to hold that:",
            options: [
              "Congress may fix a state capital",
              "New states enter fully equal",
              "Territories can never be states",
              "States may leave the Union freely",
            ],
            correctIndex: 1,
            explanation: "A new state enters on an equal footing with the original states, so Congress could not bind Oklahoma not to move its capital. There is no second-class US state.",
            sourceLessonSlug: "middle-entrenchment",
          },
          {
            prompt: "The four US entrenchment mechanisms protect a state's:",
            options: [
              "Budget, staff, flag, and motto",
              "Existence, territory, status, self-rule",
              "Rivers, roads, ports, and rails",
              "Schools, police, courts, and jails",
            ],
            correctIndex: 1,
            explanation: "Equal Senate suffrage (existence), boundary consent (territory), equal footing (status), and the Guarantee Clause (self-government). That is the checklist to carry abroad.",
            sourceLessonSlug: "middle-entrenchment",
          },
          {
            prompt: "An interstate compact requires, to bind fully, the consent of:",
            options: [
              "The United Nations body",
              "Every other US state",
              "The Congress of the United States",
              "The federal courts first",
            ],
            correctIndex: 2,
            explanation: "The Compact Clause bars a state from a compact with another state without the consent of Congress. Once consented, it binds the states together.",
            sourceLessonSlug: "middle-horizontal",
          },
          {
            prompt: "Cuyler v. Adams (1981) held that a congressionally approved compact becomes:",
            options: [
              "A private business contract",
              "A treaty with a foreign power",
              "A rule of one state only",
              "Federal law, read as such",
            ],
            correctIndex: 3,
            explanation: "Interpreting it becomes a federal question; neither state can walk away by simply changing its own statute. That makes a compact stronger than an ordinary contract.",
            sourceLessonSlug: "middle-horizontal",
          },
          {
            prompt: "The Port Authority of New York and New Jersey is an example of:",
            options: [
              "A federal executive agency",
              "A body made by interstate compact",
              "A single state's department",
              "A private transit company",
            ],
            correctIndex: 1,
            explanation: "It was created in 1921 by a compact between the two states with the consent of Congress, and neither state can dissolve it alone.",
            sourceLessonSlug: "middle-horizontal",
          },
          {
            prompt: "The Full Faith and Credit Clause requires each state to respect the others':",
            options: [
              "Public acts, records, judgments",
              "Choice of state governor",
              "Budgets and spending plans",
              "Highway speed limit rules",
            ],
            correctIndex: 0,
            explanation: "It is part of the plumbing of co-sovereignty: a marriage or a court judgment cannot simply stop at the state line, or fifty sovereigns would grind to a halt.",
            sourceLessonSlug: "middle-horizontal",
          },
          {
            prompt: "Read for this course, the Tenth Amendment shows the states are:",
            options: [
              "Branches of the federal government",
              "The residual holders of power",
              "Limited to enumerated powers",
              "Below the counties in rank",
            ],
            correctIndex: 1,
            explanation: "The federal government has an enumerated list; whatever is left over sits with the states. Holding the residual power is a mark of co-sovereignty.",
            sourceLessonSlug: "middle-co-sovereigns",
          },
          {
            prompt: "Why can a state, but not a city, make something like a treaty?",
            options: [
              "A city has no lawyers to draft",
              "Cities are richer than states",
              "A state is a co-sovereign, a city is not",
              "Federal law bans city contracts",
            ],
            correctIndex: 2,
            explanation: "A city is a creature of the state and cannot compact with another city; two states can make a binding compact, subject to congressional consent. That is a genuinely sovereign kind of power.",
            sourceLessonSlug: "middle-horizontal",
          },
          {
            prompt: "Murphy v. NCAA (2018) struck a federal law that forbade states from:",
            options: [
              "Taxing any sports tickets",
              "Building new sports arenas",
              "Repealing their own betting bans",
              "Licensing professional teams",
            ],
            correctIndex: 2,
            explanation: "Congress could not command states to keep their own laws against sports betting; that would commandeer the states, which anti-commandeering forbids.",
            sourceLessonSlug: "middle-co-sovereigns",
          },
          {
            prompt: "The Guarantee Clause promises every state a:",
            options: [
              "Federal cash payment yearly",
              "Republican form of government",
              "Seat on the Supreme Court",
              "Veto over federal statutes",
            ],
            correctIndex: 1,
            explanation: "Article IV, section 4 guarantees each state a republican form of government. The federal obligation runs toward protecting the states as self-governing units, not dissolving them.",
            sourceLessonSlug: "middle-entrenchment",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 3 · Federal systems abroad
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "middle-germany",
      title: "9 · Germany: the Laender and the Bundesrat",
      section: "Section 3 · Federal systems abroad",
      body: `The United States is not the only way to build a federation, and Germany shows a strikingly different design that reaches the same entrenchment by another road. **Germany is a federal republic of 16 states, called Laender, and its middle layer is woven into national lawmaking in a way the US Senate is not.** If the US entrenches its states mostly by protecting them, Germany entrenches its Laender partly by giving them a formal seat at the national table.

## The Basic Law and the federal principle

Germany's constitution is the **Grundgesetz** (Basic Law) of 1949. It declares in Article 20 that "the Federal Republic of Germany is a democratic and social federal state," and it distributes legislative power so that, under Articles 30 and 70, **the Laender hold the power to legislate wherever the Basic Law does not assign it to the Federation** (Grundgesetz, arts. 20, 30, 70). **That is the same residual-power move as the US Tenth Amendment**: the states keep what is not federal. Each Land has its own constitution, its own parliament (Landtag), and its own government.

## The Bundesrat: the middle layer inside the centre

Here is where Germany diverges sharply from the US, and the difference is worth reading slowly. The US Senate represents the states but is **elected by the people** of each state. Germany's **Bundesrat is different: it is composed of members of the Land GOVERNMENTS, not elected separately at all** (Grundgesetz, art. 51; Bundesrat, n.d.). The people who sit in the Bundesrat are ministers of the state cabinets, and each Land instructs its delegation how to vote.

The numbers encode the design:

| Feature | The Bundesrat |
|---|---|
| **Who sits there** | Members of the 16 Land governments |
| **Votes per Land** | Between 3 and 6, rising with population |
| **Total votes** | 69 |
| **How a Land votes** | As a single block, on its government's instruction |

A Land has a minimum of 3 votes, and more (up to 6) as its population rises, so smaller Laender are over-represented relative to population but no Land is powerless (Bundesrat, n.d.). **Crucially, the Bundesrat must consent to any federal law that affects the Laender's own affairs**, and can object to others. **So the German middle layer does not just hold reserved powers; it holds a lever inside national legislation itself.** A US state lobbies Congress from outside; a German Land, through the Bundesrat, votes inside.

## The eternity clause: entrenchment stronger than the US

Germany also entrenches its federalism in text, and arguably more firmly than the United States does. Article 79(3) of the Basic Law, the **"eternity clause" (Ewigkeitsklausel)**, places some things beyond the reach of any amendment at all, including "the division of the Federation into Laender" and "their participation on principle in the legislative process" (Grundgesetz, art. 79(3)). **Read that against Article V of the US Constitution.** The US protects a state's equal Senate vote from amendment without consent; Germany protects the very existence of the federal structure from amendment by anyone, forever. **This is a genuine point of comparison to teach, not to flatten: on the text, Germany's federal principle is more deeply entrenched than the US's**, because it cannot be amended away at all, while the US structure could in theory be changed with enough consent.

## A design difference, not a ranking

One honest caution. German federalism is often described as **administrative or executive federalism**: much law is made at the federal level and then **carried out by the Laender**, whereas US "dual federalism" more often has each level running its own programs. **Neither is more federal than the other; they are different divisions of labour.** The Laender's power shows up less in passing their own separate laws and more in administering federal ones and in the Bundesrat veto. When you classify a system, resist ranking by a single yardstick: measure entrenchment (is the unit protected?) and participation (does it sit inside the centre?) separately, because Germany scores high on both by a route the US does not use. This is comparative description, not legal advice.

## Sources
- Grundgesetz [GG] [Basic Law], arts. 20, 30, 51, 70, 79(3). Basic Law for the Federal Republic of Germany. https://www.gesetze-im-internet.de/englisch_gg/
- Bundesrat. (n.d.). The Bundesrat at a glance. https://www.bundesrat.de/EN/homepage/homepage-node.html`,
      recallContent: [
        {
          prompt: "What is an interstate compact, and what happens once Congress consents to one?",
          answer: "A binding agreement between states, a contract and a law at once (Compact Clause, Art. I s. 10). Once Congress consents, the compact becomes federal law (Cuyler v. Adams, 1981), so interpreting it is a federal question and neither state can walk away by changing its own statute.",
        },
        {
          prompt: "Name the three horizontal-federalism clauses and what each requires between states.",
          answer: "Full Faith and Credit (each state respects the others' public acts, records, and judgments), Privileges and Immunities (no discrimination against other states' citizens in basic rights), and Extradition (a person charged in one state and found in another is returned). They are the plumbing of co-sovereignty.",
        },
        {
          prompt: "What sideways question should you ask of any foreign middle layer?",
          answer: "Not only how it deals with the centre, but how it deals with its neighbours and who wrote those rules. A layer that can bind its neighbours by compact, subject only to the centre's consent, holds a genuinely sovereign kind of power.",
        },
      ],
    },
    {
      slug: "middle-canada",
      title: "10 · Canada: provinces, and a design that changed in practice",
      section: "Section 3 · Federal systems abroad",
      body: `Canada is a federation like the US and Germany, but it teaches a different lesson: **a constitution's words and a federation's lived balance of power can drift apart over time.** Canada was built to be centralist and became one of the most decentralised federations on earth. Which of those is the "real" Canada is a genuine disagreement, and this lesson teaches the disagreement rather than resolving it.

## The division of powers, 1867

Canada's founding constitution is the **Constitution Act, 1867** (originally the British North America Act, 1867). It divides legislative authority between the federal Parliament and the provinces by two lists: **Section 91 enumerates federal powers** (among them trade and commerce, criminal law, banking, and defence), and **Section 92 enumerates provincial powers** (among them property and civil rights, and municipal institutions), with education under Section 93 (Constitution Act, 1867, ss. 91-93). **Like a US state or a German Land, a Canadian province holds real, constitutionally assigned powers that the federal Parliament cannot simply take.**

## The residual power runs the OTHER way

Here is the design choice that makes Canada worth teaching next to the US. In the United States, the residual power (whatever is not enumerated) sits with the **states.** In Canada, the opening words of Section 91 give the federal Parliament power to make laws for the **"Peace, Order, and good Government of Canada"** in relation to all matters not assigned to the provinces (Constitution Act, 1867, s. 91). **The residue is FEDERAL.** Canada's framers, watching the United States tear itself apart in a civil war in the 1860s, deliberately built a stronger centre: they put the leftover power at the top, not the bottom. **On paper, Canada in 1867 was the more centralist federation.**

## But interpretation pushed power to the provinces

The paper design is not where Canada ended up. For decades, Canada's final court of appeal was the **Judicial Committee of the Privy Council** in London, and its rulings read the provincial "property and civil rights" power broadly and the federal "Peace, Order, and good Government" power narrowly, strengthening the provinces well beyond what the centralist text suggested. The result is one of comparative government's standard puzzles: **a constitution written to centralise, running for over a century as a strongly decentralised federation.** So when someone asks "is Canada centralist or decentralised?", the honest answer is: **centralist by 1867 design, decentralised in practice, and the gap between the two IS the lesson.** State what the text says, state how it has been read, and keep them apart.

## 1982: bringing the constitution home

Until 1982, Canada could not fully amend its own constitution; changes needed an Act of the UK Parliament, a leftover of the country's origins. The **Constitution Act, 1982 "patriated" the constitution**, bringing it under Canadian control, adding the Canadian Charter of Rights and Freedoms and, for the first time, a domestic **amending formula** (Constitution Act, 1982). That formula entrenches the federal balance: the general rule requires the agreement of the federal Parliament and **two-thirds of the provinces representing at least half the population** (the "7/50" rule), so **neither Ottawa nor any one province can rewrite the division of powers alone.** That is entrenchment in the US sense: the middle layer's powers are protected by a hard-to-change constitution, not held at the centre's pleasure.

## Quebec, and the limits of consensus

The patriation of 1982 carries a permanent asterisk. **Quebec's government did not consent to it**, and Quebec has never signed the 1982 Act, though it is legally bound by it. Later attempts to bring Quebec in on agreed terms, the Meech Lake Accord (1987) and the Charlottetown Accord (1992), both **failed.** Quebec's distinct status, its language, its civil-law tradition, its self-understanding as a nation within Canada, remains a live constitutional question, and it is the reason Canada is also a standard case for **asymmetry**: the felt need to treat one unit differently, in tension with the federal instinct to treat all units alike. This is comparative description, not legal advice.

## Sources
- Constitution Act, 1867 (UK), 30 & 31 Vict., c. 3, ss. 91-93. https://laws-lois.justice.gc.ca/eng/const/
- Constitution Act, 1982, being Schedule B to the Canada Act 1982 (UK), c. 11. https://laws-lois.justice.gc.ca/eng/const/
- Watts, R. L. (2008). Comparing federal systems (3rd ed.). McGill-Queen's University Press.`,
      recallContent: [
        {
          prompt: "How does Germany's Bundesrat differ from the US Senate, and why does that matter?",
          answer: "The US Senate is elected by the people; Germany's Bundesrat is composed of members of the Land governments, who vote as an instructed block (3 to 6 votes per Land, 69 total). It must consent to federal laws affecting the Laender, so the German middle layer holds a lever inside national lawmaking, not just reserved powers.",
        },
        {
          prompt: "How is Germany's 'eternity clause' a stronger entrenchment than the US Article V?",
          answer: "Article 79(3) of the Basic Law places the division of the Federation into Laender and their participation in legislation beyond ANY amendment, forever. Article V protects only a state's equal Senate vote from amendment without its consent; the US structure could in theory be changed with enough consent, the German federal principle cannot be amended away at all.",
        },
        {
          prompt: "What is 'administrative federalism', and why should you not rank it against US 'dual federalism'?",
          answer: "In Germany much law is made federally and carried out by the Laender, whereas US dual federalism more often has each level running its own programs. Neither is more federal; they are different divisions of labour. Measure entrenchment and participation separately rather than by one yardstick.",
        },
      ],
    },
    {
      slug: "middle-spain",
      title: "11 · Spain: the contested estado autonomico",
      section: "Section 3 · Federal systems abroad",
      body: `Spain is the course's hardest classification, and that is exactly why it is here. **Spain's Constitution refuses to call the country either federal or unitary**, and scholars have argued for decades about which it really is. This lesson does not settle the argument. It shows you the design, names the dispute precisely, and teaches you to hold a contested classification the way course 1 taught you to hold the tribal-sovereignty tension: state the documents, name the disagreement, keep them apart.

## The 1978 Constitution and the "State of Autonomies"

After the Franco dictatorship, the **Spanish Constitution of 1978** built a new middle layer without using the word "federal." Article 2 sets the frame in one careful sentence: the Constitution is grounded in "the indissoluble unity of the Spanish Nation" while it "recognises and guarantees the right to self-government of the nationalities and regions" that make it up (Constitucion Espanola, 1978, art. 2). **Both halves are load-bearing: unity that cannot be dissolved, AND a guaranteed right of self-government.** From that seed grew the **estado autonomico** (state of autonomies): **17 autonomous communities plus 2 autonomous cities, Ceuta and Melilla.**

Each autonomous community has its own **Statute of Autonomy (Estatuto de Autonomia)**, which sets out its institutions and powers and is enacted as an organic law of the Spanish parliament. **So a community's specific powers are grounded in the Constitution but delivered through a statute**, a hybrid that sits, deliberately, between the federal model (powers in the constitution) and the devolved model (powers in a statute). That hybrid is the whole reason Spain is hard to classify.

## Why the classification is genuinely contested

Here is the disagreement, laid out plainly, because it is the point of the lesson:

| The reading | The case for it |
|---|---|
| **Federal in all but name** | Communities have entrenched self-government, their own parliaments, broad powers, and a constitutional court that umpires the division; functionally it looks federal |
| **Quasi-federal / sui generis** | It has federal features but was not designed as a federation and lacks some (no true federal second chamber of the German kind); it is its own category |
| **Decentralised unitary** | Sovereignty rests in the single Spanish Nation (Article 2); the communities exercise autonomy, not sovereignty, so it is a unitary state that devolved a great deal |

**All three readings have serious scholarly support, and the course does not pick one.** What it insists on is the discipline: notice which claim a given argument rests on. A dispute about Spain almost always turns on whether you weight the entrenched self-government (which looks federal) or the indissoluble unity and single sovereignty (which looks unitary). Naming that is the skill.

## Asymmetry: the units are not all the same

Unlike the US equal-footing rule, **Spain's autonomy is deliberately asymmetric.** Some communities, the "historic nationalities" such as Catalonia, the Basque Country, and Galicia, reached autonomy by a faster constitutional route than others (Spanish Const., 1978, arts. 143, 151). And the **Basque Country and Navarre have a distinct fiscal arrangement** (the foral system, or concierto and convenio economico) under which they collect most of their own taxes and remit a negotiated share to the centre, an arrangement no other community has. **Spain, unlike the US, decided on purpose that its units should not be identical.** Asymmetry is a legitimate federal design choice, and Spain is its sharpest European example.

## The Catalan question, taught with care

Spain's design has been tested hardest by **Catalonia.** The essentials, stated as documented facts: Spain's Constitutional Court (Tribunal Constitucional) in a **2010 judgment struck down parts of Catalonia's 2006 Statute of Autonomy**; in **2017 the Catalan government held an independence referendum that the Constitutional Court had ruled unlawful**; and the Spanish government then invoked **Article 155 of the Constitution to suspend Catalonia's autonomy** temporarily and impose direct rule (Spanish Const., 1978, art. 155; Tribunal Constitucional, Judgment 31/2010). **Whether Catalonia has a right to decide its future, and whether the Spanish state's response was proportionate, are exactly the kinds of political and legal questions this course does not answer.** What the method asks is precision: the referendum was ruled unlawful under the current constitutional order, the Article 155 intervention happened, and the deeper dispute about legitimacy remains genuinely contested. Report the documented facts flatly; flag the disputed judgments as disputed. This is comparative description, not legal advice.

## Sources
- Constitucion Espanola [Spanish Constitution] arts. 2, 143, 151, 155 (1978). Boletin Oficial del Estado. https://www.boe.es
- Tribunal Constitucional [Constitutional Court] (Spain), Judgment 31/2010 (on the Statute of Autonomy of Catalonia).
- Watts, R. L. (2008). Comparing federal systems (3rd ed.). McGill-Queen's University Press.`,
      recallContent: [
        {
          prompt: "How did Canada's 1867 design differ from the US on residual power, and why?",
          answer: "In the US the residual power sits with the states; in Canada the opening of Section 91 gives the federal Parliament the 'Peace, Order, and good Government' residue. Canada's framers, watching the US Civil War, deliberately built a stronger centre by putting the leftover power at the top.",
        },
        {
          prompt: "Why is 'is Canada centralist or decentralised?' a teach-the-disagreement question?",
          answer: "Canada was centralist by its 1867 text but became strongly decentralised in practice, largely through Judicial Committee of the Privy Council rulings that read provincial powers broadly. The honest answer states both, keeps them apart, and treats the gap as the lesson.",
        },
        {
          prompt: "What did the Constitution Act, 1982 do, and what asterisk does it carry?",
          answer: "It patriated the constitution (bringing amendment under Canadian control), added the Charter, and created a domestic amending formula (the 7/50 rule) that entrenches the federal balance. The asterisk: Quebec never consented to it, and the Meech Lake (1987) and Charlottetown (1992) accords to bring Quebec in both failed.",
        },
      ],
    },
    {
      slug: "middle-quiz-abroad",
      title: "12 · Quiz: federal systems abroad",
      section: "Section 3 · Federal systems abroad",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "Germany's constitution, the source of its federal principle, is the:",
            options: [
              "Weimar Charter of 1919",
              "Treaty of Rome of 1957",
              "Basic Law of 1949",
              "Reunification Act of 1990",
            ],
            correctIndex: 2,
            explanation: "The Grundgesetz (Basic Law) of 1949 declares Germany a federal state and distributes power between the Federation and the 16 Laender.",
            sourceLessonSlug: "middle-germany",
          },
          {
            prompt: "The German Bundesrat is composed of:",
            options: [
              "Members of the Land governments",
              "Directly elected senators",
              "Judges of the top court",
              "Appointees of the president",
            ],
            correctIndex: 0,
            explanation: "Unlike the US Senate, the Bundesrat is made of ministers of the state cabinets, who vote as an instructed block. The middle layer sits inside national lawmaking.",
            sourceLessonSlug: "middle-germany",
          },
          {
            prompt: "Germany's Article 79(3) 'eternity clause' places beyond ANY amendment the:",
            options: [
              "Level of the national sales tax",
              "Name of the country's capital",
              "Salaries of federal ministers",
              "Division into Laender and their role",
            ],
            correctIndex: 3,
            explanation: "The federal structure (the division into Laender and their participation in legislation) cannot be amended away at all, arguably a stronger entrenchment than the US Article V.",
            sourceLessonSlug: "middle-germany",
          },
          {
            prompt: "'Administrative federalism' in Germany means much law is:",
            options: [
              "Made by the courts alone",
              "Made federally, run by the Laender",
              "Made by each Land in isolation",
              "Never enforced at all",
            ],
            correctIndex: 1,
            explanation: "Law is often made at the federal level and carried out by the Laender, a different division of labour from US dual federalism, not a lesser kind of federalism.",
            sourceLessonSlug: "middle-germany",
          },
          {
            prompt: "Canada's founding division of powers is set out in the:",
            options: [
              "Constitution Act of 1867",
              "Quebec Act of 1774",
              "Charlottetown Accord",
              "Royal Proclamation",
            ],
            correctIndex: 0,
            explanation: "Sections 91 and 92 of the Constitution Act, 1867 enumerate federal and provincial powers respectively, giving provinces real constitutionally assigned authority.",
            sourceLessonSlug: "middle-canada",
          },
          {
            prompt: "Unlike the US, Canada's 1867 design put the RESIDUAL power with the:",
            options: [
              "Provincial legislatures",
              "Municipal councils",
              "Federal Parliament",
              "British monarch alone",
            ],
            correctIndex: 2,
            explanation: "The 'Peace, Order, and good Government' clause gives Ottawa the leftover power. Canada's framers, watching the US Civil War, built a stronger centre on paper.",
            sourceLessonSlug: "middle-canada",
          },
          {
            prompt: "Canada shows that a constitution's text and a federation's practice can:",
            options: [
              "Always match perfectly",
              "Drift apart over time",
              "Never be interpreted",
              "Be identical everywhere",
            ],
            correctIndex: 1,
            explanation: "Canada was centralist by its 1867 text but ran as a strongly decentralised federation, largely via Privy Council interpretation. The gap is the lesson; state both and keep them apart.",
            sourceLessonSlug: "middle-canada",
          },
          {
            prompt: "The Constitution Act, 1982 'patriated' the constitution, which means it:",
            options: [
              "Abolished all the provinces",
              "Merged Canada with Britain",
              "Brought amendment under Canada",
              "Ended the federal Parliament",
            ],
            correctIndex: 2,
            explanation: "It brought the constitution under Canadian control, added the Charter, and created a domestic amending formula (the 7/50 rule) that entrenches the federal balance.",
            sourceLessonSlug: "middle-canada",
          },
          {
            prompt: "The permanent asterisk on Canada's 1982 patriation is that:",
            options: [
              "Quebec never consented to it",
              "It was struck down by a court",
              "Britain refused to pass it",
              "It expired after ten years",
            ],
            correctIndex: 0,
            explanation: "Quebec's government did not consent and has never signed it, though it is bound; later accords to bring Quebec in (Meech Lake, Charlottetown) both failed.",
            sourceLessonSlug: "middle-canada",
          },
          {
            prompt: "Spain's 1978 Constitution built a middle layer it calls the:",
            options: [
              "Federal Republic of regions",
              "Union of sovereign states",
              "Confederation of provinces",
              "State of Autonomies",
            ],
            correctIndex: 3,
            explanation: "The estado autonomico: 17 autonomous communities plus 2 autonomous cities, each with a Statute of Autonomy, without the word 'federal.'",
            sourceLessonSlug: "middle-spain",
          },
          {
            prompt: "Spain is the course's hardest case because its classification is:",
            options: [
              "Settled as fully federal",
              "Settled as fully unitary",
              "Genuinely contested",
              "Never studied by scholars",
            ],
            correctIndex: 2,
            explanation: "Serious scholars read it as federal in all but name, quasi-federal, or a decentralised unitary state. The course names the dispute rather than picking one.",
            sourceLessonSlug: "middle-spain",
          },
          {
            prompt: "A Spanish community's specific powers are delivered through its:",
            options: [
              "Statute of Autonomy",
              "Own written constitution",
              "Treaty with the monarch",
              "Membership of the EU",
            ],
            correctIndex: 0,
            explanation: "Powers are grounded in the Constitution but set out in a Statute of Autonomy enacted as an organic law, a hybrid between the federal and devolved models.",
            sourceLessonSlug: "middle-spain",
          },
          {
            prompt: "Unlike the US equal-footing rule, Spain's autonomy is deliberately:",
            options: [
              "Identical for every unit",
              "Asymmetric across units",
              "Banned for large regions",
              "Granted only to cities",
            ],
            correctIndex: 1,
            explanation: "Historic nationalities took a faster route to autonomy, and the Basque Country and Navarre collect most of their own taxes under a distinct fiscal system no other community has.",
            sourceLessonSlug: "middle-spain",
          },
          {
            prompt: "On the Catalan independence question, the course teaches you to:",
            options: [
              "Declare Catalonia independent",
              "Ignore the whole dispute",
              "Report facts, flag disputes as disputed",
              "Assume Madrid was always right",
            ],
            correctIndex: 2,
            explanation: "State the documented facts flatly (the 2017 referendum was ruled unlawful under the current order; Article 155 was invoked), and flag the deeper legitimacy dispute as genuinely contested.",
            sourceLessonSlug: "middle-spain",
          },
          {
            prompt: "Article 2 of Spain's Constitution holds together two ideas:",
            options: [
              "Monarchy and republic",
              "War powers and peace powers",
              "Free trade and protection",
              "Indissoluble unity and self-government",
            ],
            correctIndex: 3,
            explanation: "It grounds the state in the indissoluble unity of the Spanish Nation AND guarantees the right to self-government of the nationalities and regions. Both halves are load-bearing.",
            sourceLessonSlug: "middle-spain",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 4 · Devolution: powers on loan
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "middle-devolution",
      title: "13 · The United Kingdom: powers granted by statute",
      section: "Section 4 · Devolution: powers on loan",
      body: `Now the other pole. Everything in Sections 2 and 3 was a federation, where the middle layer's power is anchored in a constitution. The United Kingdom is the course's clearest case of the opposite: **devolution, where a sovereign centre lends power to regional parliaments by ordinary statute.** Scotland, Wales, and Northern Ireland each got a real parliament in 1998, and each holds its power on the delegated terms Lesson 2 described.

## Three settlements, one year, no symmetry

Devolution in the UK arrived in a rush after referendums in 1997 and 1998, through three separate Acts of the Westminster Parliament:

| Nation | Founding statute | Body created |
|---|---|---|
| **Scotland** | Scotland Act 1998 | The Scottish Parliament |
| **Wales** | Government of Wales Act 1998 (later 2006, 2017) | The Senedd (Welsh Parliament) |
| **Northern Ireland** | Northern Ireland Act 1998 | The Northern Ireland Assembly |

(Scotland Act 1998, c. 46; Government of Wales Act 2006, c. 32; Northern Ireland Act 1998, c. 47.) **The first thing to notice is that there is no single UK devolution settlement.** Each nation got a different deal, with different powers, on a different timetable, and **England got no devolved parliament of its own at all.** This is asymmetry more extreme than Spain's: the units are not merely unequal, they were built by separate statutes for separate reasons. Northern Ireland's Assembly, in particular, is inseparable from the **1998 Belfast (Good Friday) Agreement** and its peace settlement, which the Northern Ireland Act implements.

## Real power, delegated terms

Do not mistake "delegated" for "weak." The Scottish Parliament legislates on health, education, most justice, policing, the environment, and much else; it is one of the most powerful sub-state legislatures in Europe. **But its power is a grant, and the grant is written as a grant.** Section 28(7) of the Scotland Act, which you met in Lesson 2, states that the Act "does not affect the power of the Parliament of the United Kingdom to make laws for Scotland" (Scotland Act 1998, c. 46, s. 28(7)). **A US state constitution does not contain a clause preserving Congress's power to legislate for the state, because no such power exists. The Scotland Act contains exactly that clause, because that power does exist.** The single sentence is the whole difference between entrenched and delegated, printed in the founding document itself.

## Reading a devolved action with the method

- **Who acted?** The devolved parliament, or the UK Parliament, or a devolved minister. Name which.
- **Under what authority?** The devolution statute, which lists what is devolved and what is reserved to Westminster.
- **Where is the power from?** An Act of the Westminster Parliament, traceable to Parliament's own sovereignty, not to a constitution above Parliament.
- **Who can overturn it?** The devolved body's own repeal, the courts (if it exceeds the statutory grant), and, in the last legal resort, the UK Parliament, which retains the power to legislate and, in principle, to amend the settlement.

**That last line is where devolution and federalism part company for good, and it is the subject of the next lesson**, because the "in principle" hides the most interesting constitutional puzzle in the course. This is analysis of authority, not legal advice.

## Sources
- Scotland Act 1998, c. 46, s. 28(7). https://www.legislation.gov.uk/ukpga/1998/46
- Government of Wales Act 2006, c. 32. https://www.legislation.gov.uk/ukpga/2006/32
- Northern Ireland Act 1998, c. 47. https://www.legislation.gov.uk/ukpga/1998/47`,
      recallContent: [
        {
          prompt: "State the disagreement about how to classify Spain, and the discipline the course insists on.",
          answer: "Spain is read three ways: federal in all but name, quasi-federal/sui generis, or a decentralised unitary state, all with scholarly support. The discipline is to notice which claim an argument rests on, whether it weights entrenched self-government (looks federal) or indissoluble unity and single sovereignty (looks unitary).",
        },
        {
          prompt: "How is Spain's autonomy asymmetric, and how does that contrast with the US?",
          answer: "Historic nationalities (Catalonia, the Basque Country, Galicia) reached autonomy faster, and the Basque Country and Navarre collect most of their own taxes under a foral fiscal system no other community has. The US equal-footing rule refuses such asymmetry; Spain adopted it on purpose.",
        },
        {
          prompt: "On the Catalan question, which facts are documented and which are contested?",
          answer: "Documented: the Constitutional Court struck parts of the 2006 Catalan Statute in 2010; the 2017 referendum was held after being ruled unlawful; and Spain invoked Article 155 to suspend Catalan autonomy. Contested: whether Catalonia has a right to decide its future and whether the state's response was proportionate.",
        },
      ],
    },
    {
      slug: "middle-sovereignty-question",
      title: "14 · The sovereignty question, and a puzzle that recurses",
      section: "Section 4 · Devolution: powers on loan",
      body: `The last lesson ended on "in principle." This lesson is about that phrase, because it contains the deepest idea in the course and a genuinely unresolved constitutional puzzle. **Under the traditional British doctrine, Parliament is sovereign, which is precisely what makes devolution delegated rather than federal.** But the UK has tried to make devolution feel permanent anyway, and watching that attempt run into the sovereignty rule is the most instructive thing in Section 4.

## Parliamentary sovereignty, the doctrine at the root

The classic statement belongs to the nineteenth-century jurist A. V. Dicey: **Parliament can "make or unmake any law whatever," and no person or body can override or set aside its legislation** (Dicey, 1885). Two consequences follow that matter here. First, **Parliament cannot bind its successors**: a later Parliament can always undo what an earlier one did. Second, **there is no higher law above Parliament** to which an ordinary statute must answer, no entrenched constitution a court can use to strike down an Act. **This is the exact opposite of the US, where the Constitution sits above Congress and a court can void a federal law.** It is why the UK's middle layer is delegated: the body that granted devolution remains legally supreme over it.

## The Sewel Convention: real, but not enforceable

In practice, Westminster does not legislate on devolved matters at will. The **Sewel Convention** holds that the UK Parliament "will not normally legislate with regard to devolved matters without the consent" of the devolved legislature. It was even written into statute (Scotland Act 1998, s. 28(8), added in 2016). **But when the point was tested, the UK Supreme Court held that the Sewel Convention is a political convention, not a legal rule the courts will enforce** (R (Miller) v Secretary of State for Exiting the European Union, 2017). **So the restraint on Westminster is real as politics and absent as law.** That gap, powerful convention over a foundation of unbroken legal sovereignty, is the texture of devolution, and it is what a federation replaces with hard constitutional protection.

## The puzzle that recurses: trying to entrench by statute

Here is the most elegant thing in the course. Parliament, wanting to reassure Scotland that devolution was not a temporary loan, inserted a "permanence" clause: **the Scottish Parliament and Scottish Government "are a permanent part of the United Kingdom's constitutional arrangements" and "are not to be abolished except on the basis of a decision of the people of Scotland voting in a referendum"** (Scotland Act 1998, s. 63A, added by the Scotland Act 2016). It looks like entrenchment. **But read it through Dicey.** Section 63A is itself in an ordinary Act of Parliament, and Parliament cannot bind its successors, so a later Parliament could, as a matter of strict law, repeal section 63A along with the rest. **The attempt to entrench devolution by statute recurses: to make the guarantee unbreakable you would need a power to bind future Parliaments, which is the very power the doctrine of sovereignty denies.** The permanence clause is a powerful political promise sitting on a legal foundation that cannot, by its own logic, be made permanent. **That recursion is the difference between entrenched and delegated, shown from the inside.**

## Where the courts have drawn the line

The limits are not merely theoretical; courts enforce them. When the Scottish government asked whether the Scottish Parliament could legislate for an independence referendum on its own, the UK Supreme Court held that it **could not**, because such a Bill would relate to matters **reserved** to Westminster, namely the Union of the Kingdoms and the UK Parliament (Reference by the Lord Advocate, 2022). The 2014 independence referendum had only been possible because Westminster **temporarily granted the power** to hold it. **A US state needs no one's permission to exercise its reserved powers; a devolved parliament's biggest questions run back to the centre.** That is the delegated condition, enforced.

## The honest contested edge

One caution, to teach rather than hide. **A minority of judges and scholars have questioned whether parliamentary sovereignty is still truly absolute**, pointing to the UK's membership obligations over the years, the force of some constitutional statutes, and the practical impossibility of abolishing devolution against a nation's will. The orthodox view remains that Parliament is sovereign and devolution is therefore delegated. **But whether that orthodoxy fully holds is itself now debated**, and the honest teaching move is to say so: the law is clear that devolution is delegated; the deeper question of whether sovereignty is as absolute as Dicey said is genuinely open. This is analysis of authority, not legal advice.

## Sources
- Dicey, A. V. (1885). Introduction to the study of the law of the constitution. Macmillan.
- Scotland Act 1998, c. 46, ss. 28(8), 63A. https://www.legislation.gov.uk/ukpga/1998/46
- R (Miller) v Secretary of State for Exiting the European Union [2017] UKSC 5. https://www.supremecourt.uk/cases/uksc-2016-0196.html
- Reference by the Lord Advocate of devolution issues under paragraph 34 of Schedule 6 to the Scotland Act 1998 [2022] UKSC 31. https://www.supremecourt.uk/cases/uksc-2022-0098.html`,
      recallContent: [
        {
          prompt: "How does the Scotland Act's section 28(7) capture the whole entrenched-versus-delegated difference?",
          answer: "It states the Act does not affect the UK Parliament's power to make laws for Scotland. A US state constitution contains no clause preserving Congress's power to legislate for the state, because no such power exists; the Scotland Act contains exactly that clause because that power does exist. The one sentence is the difference, printed in the founding document.",
        },
        {
          prompt: "Why is UK devolution asymmetric, and how does it compare with Spain?",
          answer: "Scotland, Wales, and Northern Ireland were each created by separate statutes with different powers on different timetables, and England has no devolved parliament at all. It is asymmetry more extreme than Spain's: the units were built by separate Acts for separate reasons, not merely made unequal.",
        },
        {
          prompt: "In a devolved action, who can overturn it, and which line separates devolution from federalism?",
          answer: "The devolved body's own repeal, the courts (if it exceeds the statutory grant), and in the last legal resort the UK Parliament, which retains the power to legislate and in principle to amend the settlement. That last line, the sovereign centre's retained power, is where devolution and federalism part company.",
        },
      ],
    },
    {
      slug: "middle-reserved-vs-conferred",
      title: "15 · Reserved versus conferred: two ways to draw the line",
      section: "Section 4 · Devolution: powers on loan",
      body: `Whether a middle-layer government is entrenched or delegated is one axis. This lesson adds a second, cutting axis that applies to federations and devolved systems alike: **when you list the powers, do you list what the middle layer CAN do, or what it CANNOT?** That drafting choice, reserved-powers versus conferred-powers, quietly decides who wins every argument the drafters did not foresee, and the UK is the ideal place to see it because it has used both.

## The two models

| Model | What the statute or constitution lists | Who gets the unforeseen power |
|---|---|---|
| **Reserved powers** | The matters kept for the CENTRE; everything else is the region's | The region (the residue falls to it) |
| **Conferred powers** | The matters GIVEN to the region; everything else stays central | The centre (the residue stays with it) |

**This is the residual-power question from Section 2, wearing work clothes.** Under a **reserved-powers** model, the drafters name what the centre keeps, and anything not named is the region's by default: a broad, generous grant. Under a **conferred-powers** model, the drafters name what the region gets, and anything not named stays with the centre: a narrower, list-bound grant. **The difference never shows up on the powers the drafters thought of. It decides everything they missed.**

## The UK ran the natural experiment

The UK is unusually useful here because its own settlements have used different models and one nation switched.

- **Scotland** started with a **reserved-powers** model: the Scotland Act 1998 lists the matters reserved to Westminster (in Schedule 5), and everything not reserved is devolved (Scotland Act 1998, c. 46, sch. 5). A generous default.
- **Wales** started with a **conferred-powers** model: the early settlement listed the subjects on which the Welsh body could legislate, and anything not listed stayed at Westminster. A narrower default.
- Then **Wales switched.** The Wales Act 2017 moved Wales to a **reserved-powers** model, aligning it more closely with Scotland (Wales Act 2017, c. 4). **The switch itself is the lesson: the drafters recognised that reserved-powers is the more generous design, and moved Wales onto it.**

This distinction is not unique to the UK. It is the same choice as the US-versus-Canada residual question from Section 2: **the US reserved the residue to the states (a reserved-powers instinct at the federal level), while Canada's 1867 text gave the residue to Ottawa (a conferred-powers instinct toward the provinces).** One axis, appearing in both federal and devolved systems.

## Why you must read both axes together

Put the two axes side by side, because a real government sits on both at once:

- **Axis 1, entrenched or delegated:** is the power anchored in a constitution or granted by a statute the centre can rewrite?
- **Axis 2, reserved or conferred:** does the region get the unforeseen powers, or does the centre?

A government can be **delegated but reserved-powers** (Scotland: its power is a revocable grant, yet within that grant the default runs generously to Scotland). A government can be **entrenched but with a centralising residue** (Canada's provinces: constitutionally protected, yet the leftover power sits federally). **Neither axis alone tells you how strong the middle layer really is; you need both.** When you classify the government in your capstone, you will place it on axis 1 (the course's headline) and note where it sits on axis 2, because a reader who knows only one has half the picture. This is comparative description, not legal advice.

## Sources
- Scotland Act 1998, c. 46, sch. 5. https://www.legislation.gov.uk/ukpga/1998/46/schedule/5
- Wales Act 2017, c. 4. https://www.legislation.gov.uk/ukpga/2017/4
- Government of Wales Act 2006, c. 32. https://www.legislation.gov.uk/ukpga/2006/32`,
      recallContent: [
        {
          prompt: "State the doctrine of parliamentary sovereignty and its two consequences for devolution.",
          answer: "Dicey's rule: Parliament can make or unmake any law, and no body can override it. Consequences: Parliament cannot bind its successors (a later one can undo devolution), and there is no higher law above Parliament for a court to strike an Act against. That is why UK devolution is delegated.",
        },
        {
          prompt: "How does the Scotland Act's 'permanence' clause (s. 63A) show the recursion at the heart of devolution?",
          answer: "Section 63A says the Scottish Parliament is a permanent part of the constitution, abolishable only by a referendum, but it is itself in an ordinary Act, and since Parliament cannot bind its successors, a later Parliament could in strict law repeal it. To make the guarantee unbreakable you would need the power to bind future Parliaments, the very power sovereignty denies.",
        },
        {
          prompt: "What did the 2022 Lord Advocate reference decide, and what does it show about devolution's condition?",
          answer: "The UK Supreme Court held the Scottish Parliament could not legislate for an independence referendum on its own, because it would relate to reserved matters (the Union and the UK Parliament). The 2014 vote was possible only because Westminster temporarily granted the power. A devolved parliament's biggest questions run back to the centre.",
        },
      ],
    },
    {
      slug: "middle-quiz-devolution",
      title: "16 · Quiz: devolution and the sovereignty question",
      section: "Section 4 · Devolution: powers on loan",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "UK devolution to Scotland, Wales, and NI was created in 1998 by:",
            options: [
              "A written UK constitution",
              "Acts of the Westminster Parliament",
              "A treaty among the four nations",
              "A ruling of the European Court",
            ],
            correctIndex: 1,
            explanation: "Each nation's parliament was created by a separate Act of the UK Parliament, making the power a delegated grant, not a constitutional entitlement.",
            sourceLessonSlug: "middle-devolution",
          },
          {
            prompt: "UK devolution is described as asymmetric mainly because:",
            options: [
              "Each nation got a different deal",
              "All four nations are identical",
              "Only England has a parliament",
              "The powers are exactly equal",
            ],
            correctIndex: 0,
            explanation: "Scotland, Wales, and NI got different powers on different timetables via separate statutes, and England got no devolved parliament at all.",
            sourceLessonSlug: "middle-devolution",
          },
          {
            prompt: "Section 28(7) of the Scotland Act captures the whole difference because it:",
            options: [
              "Bans Westminster from Scotland",
              "Gives Scotland a constitution",
              "Preserves Westminster's power to legislate",
              "Makes Scotland fully independent",
            ],
            correctIndex: 2,
            explanation: "A US state constitution has no clause preserving Congress's power over the state, because none exists; the Scotland Act has exactly that clause, because that power does exist.",
            sourceLessonSlug: "middle-devolution",
          },
          {
            prompt: "Dicey's doctrine of parliamentary sovereignty holds that Parliament can:",
            options: [
              "Act only with court approval",
              "Make or unmake any law",
              "Bind all future Parliaments",
              "Never touch devolved matters",
            ],
            correctIndex: 1,
            explanation: "Parliament can make or unmake any law and no body overrides it; it cannot bind its successors, and no higher law sits above it. That is why devolution is delegated.",
            sourceLessonSlug: "middle-sovereignty-question",
          },
          {
            prompt: "The UK Supreme Court held that the Sewel Convention is:",
            options: [
              "A rule courts will enforce",
              "Part of a written constitution",
              "Binding on the United States",
              "A convention, not enforceable",
            ],
            correctIndex: 3,
            explanation: "In Miller (2017) the Court held Sewel is a political convention, not a legal rule the courts enforce. The restraint on Westminster is real as politics, absent as law.",
            sourceLessonSlug: "middle-sovereignty-question",
          },
          {
            prompt: "The Scotland Act's 'permanence' clause (s. 63A) cannot truly entrench devolution because:",
            options: [
              "It was never actually passed",
              "It is in an ordinary Act of Parliament",
              "Scotland rejected it in a vote",
              "The courts have struck it down",
            ],
            correctIndex: 1,
            explanation: "Since Parliament cannot bind its successors, a later Parliament could in strict law repeal s. 63A. To make it unbreakable needs the very power sovereignty denies.",
            sourceLessonSlug: "middle-sovereignty-question",
          },
          {
            prompt: "The 2022 Lord Advocate reference held the Scottish Parliament could NOT:",
            options: [
              "Pass any law about schools",
              "Set its own income tax rate",
              "Legislate for an independence vote",
              "Elect its own presiding officer",
            ],
            correctIndex: 2,
            explanation: "Such a Bill would relate to reserved matters (the Union and the UK Parliament). The 2014 referendum was possible only because Westminster temporarily granted the power.",
            sourceLessonSlug: "middle-sovereignty-question",
          },
          {
            prompt: "On whether parliamentary sovereignty is still absolute, the course teaches that:",
            options: [
              "It is beyond all question",
              "The orthodoxy is now debated",
              "It was formally abolished",
              "No one has ever discussed it",
            ],
            correctIndex: 1,
            explanation: "The law is clear devolution is delegated, but a minority of judges and scholars question whether sovereignty is as absolute as Dicey said. The honest move is to say the deeper question is open.",
            sourceLessonSlug: "middle-sovereignty-question",
          },
          {
            prompt: "Under a RESERVED-powers model, the statute lists what the centre keeps, so:",
            options: [
              "The region gets the leftover power",
              "The centre gets the leftover power",
              "No power is ever left over",
              "A court assigns each new power",
            ],
            correctIndex: 0,
            explanation: "Anything not reserved is the region's by default, a generous grant. The difference shows up on the powers the drafters did not foresee.",
            sourceLessonSlug: "middle-reserved-vs-conferred",
          },
          {
            prompt: "Under a CONFERRED-powers model, the unforeseen power goes to:",
            options: [
              "The region by default",
              "The regional courts",
              "The centre by default",
              "The local councils",
            ],
            correctIndex: 2,
            explanation: "A conferred model lists what the region gets, so anything not listed stays central, a narrower, list-bound grant.",
            sourceLessonSlug: "middle-reserved-vs-conferred",
          },
          {
            prompt: "Wales switched models in 2017 by moving to a:",
            options: [
              "Conferred-powers model",
              "Fully federal system",
              "Reserved-powers model",
              "Unitary no-devolution model",
            ],
            correctIndex: 2,
            explanation: "The Wales Act 2017 moved Wales from a conferred to a reserved-powers model, aligning it with Scotland. The switch shows reserved-powers is the more generous design.",
            sourceLessonSlug: "middle-reserved-vs-conferred",
          },
          {
            prompt: "The reserved-versus-conferred choice is the same question as Section 2's:",
            options: [
              "Supremacy Clause dispute",
              "Full faith and credit rule",
              "Anti-commandeering doctrine",
              "US-versus-Canada residual power",
            ],
            correctIndex: 3,
            explanation: "The US reserved the residue to the states; Canada's 1867 text gave it to Ottawa. Reserved-versus-conferred is one axis appearing in both federal and devolved systems.",
            sourceLessonSlug: "middle-reserved-vs-conferred",
          },
          {
            prompt: "The course says you must read BOTH axes because a government can be:",
            options: [
              "Delegated but reserved-powers",
              "Only ever fully federal",
              "Neither one nor the other",
              "Identical on both axes",
            ],
            correctIndex: 0,
            explanation: "Scotland is delegated (a revocable grant) yet reserved-powers (a generous default within it); Canada's provinces are entrenched yet sit under a centralising residue. Each axis alone tells only half.",
            sourceLessonSlug: "middle-reserved-vs-conferred",
          },
          {
            prompt: "Do not mistake 'delegated' for 'weak', because the Scottish Parliament:",
            options: [
              "Has no real powers at all",
              "Legislates on health and justice",
              "Only advises Westminster",
              "Cannot pass any statute",
            ],
            correctIndex: 1,
            explanation: "It is one of the most powerful sub-state legislatures in Europe. Its power is real; it is simply held on delegated terms rather than entrenched ones.",
            sourceLessonSlug: "middle-devolution",
          },
          {
            prompt: "Northern Ireland's Assembly is inseparable from the:",
            options: [
              "1801 Act of Union",
              "1998 Belfast (Good Friday) Agreement",
              "1707 Treaty of Union",
              "1922 boundary commission",
            ],
            correctIndex: 1,
            explanation: "The Northern Ireland Act 1998 implements the Belfast (Good Friday) Agreement and its peace settlement, which is why NI's devolution differs so sharply from Scotland's and Wales's.",
            sourceLessonSlug: "middle-devolution",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 5 · See it, then classify one
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "middle-map",
      title: "17 · Map: federal, devolved, and unitary systems",
      section: "Section 5 · See it, then classify one",
      body: `**Read this before the map, because the map's limits are part of the lesson.** This platform draws markers as fixed-size dots on a world projection, so the coordinates below are **approximate points placed to show a pattern, not addresses.** Do not use them to find a building. And this is the course where a dot is least adequate, because a state, a Land, a province, or an autonomous community is an **area**, not a point. The plan for this path notes that these comparative courses are the first content that genuinely needs a polygon (choropleth) map layer rather than pins; until that ships, read the colours, not the positions.

## What the colours mean

The markers are grouped by **how the middle layer holds its power**, which is the whole course expressed as a legend:

**Blue markers: entrenched federal (co-sovereign).** A US state, a German Land, and a Canadian province. Each holds power guaranteed by a constitution the centre cannot rewrite alone. These are the Section 2 and early Section 3 cases.

**Amber markers: devolved (delegated by statute).** Scotland, Wales, and Northern Ireland. Each holds real, sometimes sweeping power, granted by an Act of the Westminster Parliament that in principle Parliament could amend. Same map position as a powerful state, opposite terms underneath.

**Purple marker: contested classification.** Catalonia, in Spain's estado autonomico, drawn in its own colour on purpose, exactly as course 1 drew the tribal layer differently, because honest scholars disagree whether Spain is federal, quasi-federal, or a decentralised unitary state. The colour is the course refusing to pretend a contested case is settled.

**Green marker: unitary (the middle layer is the centre's to redraw).** A French region. France has regions, but in 2016 it reduced them from 22 to 13 by ordinary law, the unitary signature: the middle layer exists at the centre's convenience, the regional echo of "cities are creatures of the state."

## What the map cannot show, and what that proves

**It cannot show the terms of power, which is the whole point.** A blue US-state dot and an amber Scotland dot can look equally important on the map, and represent opposite kinds of authority: one entrenched, one delegated. **Colour is doing the work the position cannot.** Read the legend, not the geography.

**It cannot show the second axis.** Nothing in a dot's colour tells you whether the unit is reserved-powers or conferred-powers (Lesson 15). Scotland (amber) is reserved-powers; Canada's province (blue) sits under a centralising residue. That distinction you carry in your head. **The map is a prompt for the classification you are about to do, not a substitute for it.** Now classify one yourself.

## Sources
- Watts, R. L. (2008). Comparing federal systems (3rd ed.). McGill-Queen's University Press.
- Scotland Act 1998, c. 46. https://www.legislation.gov.uk/ukpga/1998/46
- Grundgesetz [Basic Law], art. 79(3). https://www.gesetze-im-internet.de/englisch_gg/
- Loi n. 2015-29 du 16 janvier 2015 relative a la delimitation des regions. https://www.legifrance.gouv.fr`,
      mapContent: {
        markers: [
          {
            id: "middle-map-us-state",
            lat: 30.2747,
            lng: -97.7404,
            title: "Entrenched federal: a US state (Texas State Capitol, Austin)",
            color: "#1d4ed8",
            description:
              "A US state is a co-sovereign. Its powers are reserved to it by the Constitution (Tenth Amendment), its equal Senate vote cannot be amended away without its consent (Article V), and its territory cannot be altered without its own legislature's consent (Article IV, section 3). The federal government cannot abolish it or conscript it (anti-commandeering). This is the clearest entrenched case in the course. Coordinates are approximate points placed to show the pattern, not an address.",
          },
          {
            id: "middle-map-german-land",
            lat: 48.1371,
            lng: 11.5754,
            title: "Entrenched federal: a German Land (Bavaria, Munich)",
            color: "#1d4ed8",
            description:
              "A German Land holds residual legislative power (Basic Law, arts. 30 and 70) and sits inside national lawmaking through the Bundesrat, whose members are its own government ministers. The federal principle, the division into Laender and their participation in legislation, is placed beyond any amendment at all by the eternity clause (art. 79(3)), arguably a stronger entrenchment than the US. Entrenched by a different route. Coordinates are approximate.",
          },
          {
            id: "middle-map-canadian-province",
            lat: 46.8139,
            lng: -71.208,
            title: "Entrenched federal: a Canadian province (Quebec, Quebec City)",
            color: "#1d4ed8",
            description:
              "A Canadian province holds powers enumerated in section 92 of the Constitution Act, 1867, protected by the 1982 amending formula so neither Ottawa nor any one province can rewrite the division alone. Note the two teaching wrinkles: Canada's residual power runs to the FEDERAL side (Peace, Order, and good Government), the opposite of the US, and Quebec never consented to the 1982 patriation. Entrenched, but with a centralising residue. Coordinates are approximate.",
          },
          {
            id: "middle-map-scotland",
            lat: 55.9522,
            lng: -3.1749,
            title: "Devolved: Scotland (Scottish Parliament, Edinburgh)",
            color: "#b45309",
            description:
              "The Scottish Parliament legislates on health, education, most justice, and much else, one of the most powerful sub-state legislatures in Europe. But its power was granted by the Scotland Act 1998, an Act of the Westminster Parliament, and section 28(7) preserves Westminster's own power to legislate for Scotland. Real power, delegated terms. It uses a reserved-powers model (generous default). Coordinates are approximate.",
          },
          {
            id: "middle-map-wales",
            lat: 51.4633,
            lng: -3.1635,
            title: "Devolved: Wales (the Senedd, Cardiff)",
            color: "#b45309",
            description:
              "The Senedd (Welsh Parliament) was created by the Government of Wales Act 1998 and reshaped in 2006 and 2017. Wales began with a narrower conferred-powers model and switched to a reserved-powers model in the Wales Act 2017, aligning with Scotland. A different deal from Scotland's, on a different timetable: UK devolution is asymmetric by design. Coordinates are approximate points placed to show the pattern.",
          },
          {
            id: "middle-map-northern-ireland",
            lat: 54.6057,
            lng: -5.834,
            title: "Devolved: Northern Ireland (Parliament Buildings, Stormont, Belfast)",
            color: "#b45309",
            description:
              "The Northern Ireland Assembly was created by the Northern Ireland Act 1998, which implements the 1998 Belfast (Good Friday) Agreement and its peace settlement. Its power is devolved by statute like Scotland's and Wales's, but its design is inseparable from the peace process, which is why the three UK settlements differ so sharply from one another. Coordinates are approximate.",
          },
          {
            id: "middle-map-catalonia",
            lat: 41.3874,
            lng: 2.1686,
            title: "Contested classification: Catalonia (Spain, Barcelona)",
            color: "#7c3aed",
            description:
              "Drawn in its own colour because Spain's estado autonomico genuinely resists classification: scholars read it as federal in all but name, quasi-federal, or a decentralised unitary state. Catalonia has a Statute of Autonomy and broad self-government, yet Article 2 grounds the state in the indissoluble unity of the Spanish Nation. The 2010 Constitutional Court ruling, the 2017 referendum ruled unlawful, and the Article 155 intervention are the documented flashpoints. The colour is the course refusing to pretend a contested case is settled. Coordinates are approximate.",
          },
          {
            id: "middle-map-france-region",
            lat: 48.8566,
            lng: 2.3522,
            title: "Unitary: a French region (metropolitan France, Paris)",
            color: "#047857",
            description:
              "France has regions, but sovereignty rests in the centre: in 2016 France reduced its metropolitan regions from 22 to 13 by ordinary legislation, without any region's consent. That is the unitary signature, the middle layer exists at the centre's convenience and can be redrawn by ordinary law, the regional echo of 'cities are creatures of the state' from course 5. Coordinates are approximate.",
          },
        ],
      },
    },
    {
      slug: "middle-capstone",
      title: "18 · Capstone: classify a real middle-layer government",
      section: "Section 5 · See it, then classify one",
      lessonType: "assignment",
      body: `You have the whole middle layer now: entrenched versus delegated, the US mechanisms of entrenchment, three federations abroad, the UK's devolution and its sovereignty puzzle, and the second axis of reserved versus conferred. Use it on one real government. **Pick a subnational unit, a state, a province, a Land, an autonomous community, a devolved nation, or a region, and classify it from the primary documents, then defend the classification.**

**One boundary before you start, restated because a capstone is where people forget it: this is a research exercise in reading authority, not legal advice.** You are building an argument about how a government holds its power and where that power is anchored. You are not determining anyone's legal rights, and you are not opining on any independence or sovereignty dispute; where the classification is politically charged, your job is to report what the documents establish and to flag what is contested, exactly as the course did for Spain, Canada, and the UK.

## The assignment

Produce a **one-page classification** of a middle-layer government of your choice. Name it, place it on the course's two axes, cite the founding documents, and defend the placement against the strongest counter-reading. **The finding is the argument and the sources, not the prose.** Aim for a placement you could defend to someone who picked the opposite.

## Step 1. Name the unit and find its founding document

Name the specific government (not "Germany" but "the Land of Bavaria"; not "the UK" but "the Senedd") and find the document that creates or empowers it: a national constitution, a statute, a statute of autonomy, a constitution act. **Quote the clause that grants the power.** That clause is where classification begins.

## Step 2. Place it on Axis 1 (the course's headline): entrenched or delegated?

Ask the Lesson 2 questions of the unit's very existence:

| Question | What you are looking for |
|---|---|
| **Where is its power anchored?** | A constitution the centre cannot rewrite alone, or a statute it can? |
| **Can the centre abolish it alone?** | If yes in principle, it is delegated; if no, it is entrenched |
| **What changes the division of powers?** | A constitutional amendment, or an ordinary central statute? |
| **Is the centre still legally sovereign over it?** | If sovereignty is divided, federal; if it stays central, devolved or unitary |

**Then run the US entrenchment checklist from Lesson 6 as a stress test:** is the unit's existence protected, its territory protected, its status equal to its peers, its self-government guaranteed? Few units answer yes to all four; note which it fails.

## Step 3. Place it on Axis 2: reserved or conferred?

Does the founding document list what the centre keeps (reserved: the residue falls to the unit) or what the unit gets (conferred: the residue stays central)? **Cite the schedule or article that draws the line.** Note that a unit can be delegated on Axis 1 but reserved-powers on Axis 2 (Scotland), or entrenched on Axis 1 but sit under a centralising residue on Axis 2 (a Canadian province). Both axes, or you have half the picture.

## Step 4. Defend it against the strongest counter-reading

**Every interesting case has a real counter-argument; name it and answer it.** If you classify your unit as federal, state the best case that it is merely devolved, and say why the documents defeat it. If the classification is genuinely contested (Spain is the model here), **do not fake a clean answer.** Say what the documents establish, name precisely what is disputed and on which clause the dispute turns, and keep the two apart. **A defensible "this is contested, and here is exactly why" beats a confident wrong classification.**

## Rules you do not get to break

1. **From the documents, not from memory.** Every claim ties to a clause you can quote: a constitution, a statute, a court judgment, a statute of autonomy.
2. **No invented clause, case, date, or figure.** If you cannot source it, it does not go in the argument, or it goes in flagged "unverified."
3. **Report facts flatly; flag disputes as disputes.** Whether a system is "federal" can be contested; a referendum's legal status or a court's ruling is usually not. Do not blur the two.
4. **Do not opine on the political dispute.** For any independence or secession question, describe the legal position and the contested edge; the capstone is classification, not advocacy.
5. **This is not legal advice**, and your page should say so at the top, because someone else may read it.

## What good looks like

A one-page classification in which the unit is named, its founding clause is quoted, it is placed on both axes with citations, and the placement is defended against the strongest opposite reading, with contested points labelled as contested rather than smoothed over. **If you took a government you thought was obviously "a state like any other" and showed, from its own founding document, exactly whether it holds its power by constitutional right or by a statute the centre could rewrite, you have done what this course set out to teach: you learned to tell entrenched from delegated, which is the whole difference between a co-sovereign and a tenant.**

## Sources
- U.S. Const. amend. X; art. V. https://constitution.congress.gov/constitution/amendment-10/
- Scotland Act 1998, c. 46. https://www.legislation.gov.uk/ukpga/1998/46
- Constitution Act, 1867 (UK), 30 & 31 Vict., c. 3. https://laws-lois.justice.gc.ca/eng/const/
- Watts, R. L. (2008). Comparing federal systems (3rd ed.). McGill-Queen's University Press.`,
    },
  ],
};
