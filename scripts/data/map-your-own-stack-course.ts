// Authored "Capstone: Map Your Own Stack" - course 9 (the CAPSTONE, and the LAST course) of Path A
// ("Who Has the Power? Governments From the Block to the Globe"), planned in
// plans/46-structures-paths-government-and-business.md as the ninth of nine.
//
// WHAT THIS COURSE IS
// -------------------
// The graded synthesis project that closes the path. The learner documents EVERY government with
// authority over the block they live on, from the PRIMARY RECORD, and is surprised by half of them.
// It is the same move as the route series and course 1: go find the document. This capstone pulls
// together the whole path:
//   * the METHOD (course 1: find the body, its enabling authority, the document, and who can
//     overturn it);
//   * the MIDDLE LAYER (course 4: a US state is entrenched, a devolved region is not, which changes
//     how a non-US learner reads the same rung);
//   * the LOCAL LAYER (course 5: municipalities, forms of government, and the special districts that
//     outnumber cities and hide on the tax bill);
//   * TRIBAL NATIONS as a separate sovereign (course 6), carried with that course's restraint rule;
//   * GOVERNMENTS WITHOUT STATES and community self-governance (course 7: supranational bodies, HOAs,
//     co-ops), which is where the everyday "community" authority lives.
// It teaches HOW to do the research (where each layer's primary record lives and how to find it),
// then sets the graded capstone with a rubric. It is US-centred in its worked example but written so
// a learner anywhere can run it, and it says plainly, more than once, that it teaches how to READ
// authority and is NOT legal advice.
//
// SOURCING DISCIPLINE (the load-bearing part of the file)
// ------------------------------------------------------
//   * Every record type and finding aid named here is REAL: the U.S. Code (uscode.house.gov), a
//     state legislature's constitution-and-statutes site, a county recorder / assessor, a municipal
//     code library, the property-tax bill, the Census of Governments count of ~90,000 local
//     governments, USA.gov, and the Bureau of Indian Affairs list of federally recognised tribes.
//   * NO invented statute, ordinance, case, character, or citation, and NO real individual's address
//     or private parcel data. The worked example uses San Francisco, a well-known public place, and a
//     clearly-generic "ordinary block", tracing only the KINDS of government and the record types,
//     never a private parcel's data.
//   * WHERE A SPECIFIC EXTERNAL VALUE IS OWNED BY ANOTHER SYSTEM (a code section, an enabling act's
//     exact number), the course points to the primary record and tells the learner to verify it
//     there rather than asserting a guessed value, which is the authoritative-values rule the path
//     runs on.
//
// House rule: NO em-dashes or en-dashes in prose. Regular hyphens only.

import type { AuthoredCourse } from "./authored-course";

export const MAP_YOUR_OWN_STACK_COURSE: AuthoredCourse = {
  title: "Capstone: Map Your Own Stack",
  description:
    "The capstone of the path, and its last course. You have learned the method (find the body, its enabling authority, the document that grants it, and who can overturn it), the middle layer of states and provinces, the local layer of cities and the special districts that outnumber them, tribal nations as a separate sovereign, and the governments that exist without a state at all. Now you put the whole toolkit to work on the one place you know best: the block you live on. This course teaches you where each layer's PRIMARY RECORD actually lives, the state constitution and its statutes, the county or city charter, the special district's enabling act and the assessor and elections offices, tribal jurisdiction, and an HOA's recorded covenants, and how to find the document for each. Then it sets the graded capstone: document every government with authority over your block, cite the primary record for each, and note which ones surprised you. Most people find six to twelve, and are surprised by half. It closes with a rubric you grade yourself against. This course teaches how to READ authority. It is not legal advice, and it never asks you to publish anyone's private address or parcel data, including your own.",
  lessons: [
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 1 · Your stack, and why you cannot name half of it
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "stack-what-this-is",
      title: "1 · What this capstone is, and the stack you live in",
      section: "Section 1 · Your stack, and why you cannot name half of it",
      body: `This is the last course of the path, and it is a project. Everything the path taught was building toward one exercise: **take the whole toolkit and point it at the block you live on.** By the end you will have documented every government with authority over that block, from the primary record, and, if you are like most people who do this, you will be surprised by about half of them.

## First, the boundary. This is not legal advice.

**This course teaches how to READ authority, and how to do research. It is not legal advice, and it cannot tell you whether any government action over your block was lawful in your situation.** It does not create a lawyer-client relationship. It teaches the questions a lawyer, a journalist, or an organiser asks first about a place, so you can open a public record and get oriented. That boundary runs the whole way through, and it is sharpest in the capstone itself.

## And a second boundary, specific to this course: no private data

The capstone maps YOUR block, but **the finding is the list of governments and their documents, not a parcel record.** You are never asked to publish your address, your neighbors' addresses, or anyone's private property data, and neither is the worked example in Section 3. **The stack is public; the parcel is private, and this course keeps them apart on purpose.**

## What the path already gave you

You are not starting from scratch. The path built five tools, and the capstone uses all five:

| From | The tool |
|---|---|
| **The method (course 1)** | Four questions for any government act: who acted, under what authority, where the power comes from, who can overturn it |
| **The middle layer (course 4)** | Whether a rung is entrenched (a US state) or granted and revocable (a devolved region) |
| **The local layer (course 5)** | Cities, their forms, and the special districts that outnumber them and hide on the tax bill |
| **Tribal nations (course 6)** | A separate sovereign, off the ladder, carried with restraint |
| **Governments without states (course 7)** | Supranational bodies, and the community self-governance of HOAs and co-ops |

## The one move, one more time

The route series had a single move, and so did course 1: **go find the document.** A power a government claims either traces to an instrument you can read or it does not. The capstone is that move done across every layer over one block at once. **This course teaches you where each layer keeps its primary record and how to reach it, and then it hands you the assignment.**

## Sources
- USA.gov. (n.d.). Branches of the U.S. government and how to contact them. https://www.usa.gov/
- U.S. Census Bureau. (2017). 2017 Census of Governments, Organization component. https://www.census.gov/programs-surveys/cog.html`,
    },
    {
      slug: "stack-the-method",
      title: "2 · The method, recalled: the four questions",
      section: "Section 1 · Your stack, and why you cannot name half of it",
      body: `Before you map anything, hold the method steady, because you will run it on every government you find. Course 1 taught it in full; this lesson is the tight version you will apply dozens of times in the capstone.

## The four questions, in order

| # | The question | What you are looking for |
|---|---|---|
| 1 | **Who acted?** | The specific body, named. Not "the government", but which one |
| 2 | **Under what authority?** | The power the body claims to hold |
| 3 | **Where does the power come from?** | The document: a constitution, charter, statute, ordinance, enabling act, treaty, or recorded covenant |
| 4 | **Who can overturn it?** | The court, higher body, or voters who could undo the act |

**Run them in order.** You cannot find a body's authority until you have named the body, and you cannot find the document until you know which authority is claimed. The order is not decoration; it is what keeps you from stopping at "the city" when the city is a dozen separate bodies.

## Why "find the document" is the whole discipline

Question 3 is the load-bearing one, and it is the route-series move in one line: **find the instrument, then find its source.** A government cannot hold power out of thin air. It holds it under a document, and that document sits under another, up to something that grants power on its own authority. **In the capstone, the deliverable is exactly this: for every government over your block, the name of the document that gives it power.** A government you can name but cannot source is only half found.

## The answer to Question 4 tells you how strong the power is

Two governments can both sit "over" your block and hold their power on completely different terms. A US state is entrenched in the federal constitution; a city is a creature of the state and can be reorganised by it; a special district exists only until the state amends the act that created it. **When you fill Question 4, you are recording not just who can overturn an act but how firmly the whole government is held.** That distinction, carried from courses 4 and 5, is one of the things your finished map should show.

## Sources
- U.S. Const. art. VI. https://constitution.congress.gov/constitution/article-6/
- U.S. Const. amend. X. https://constitution.congress.gov/constitution/amendment-10/
- Hunter v. City of Pittsburgh, 207 U.S. 161 (1907). https://supreme.justia.com/cases/federal/us/207/161/`,
      recallContent: [
        {
          prompt: "In one sentence, what is this capstone, and what is it not?",
          answer: "It is a graded research project that documents every government with authority over the block you live on, from the primary record. It is not legal advice, and it never asks you to publish anyone's private address or parcel data.",
        },
        {
          prompt: "Name the five tools the path built that the capstone uses.",
          answer: "The method (course 1's four questions), the middle-layer distinction between entrenched and devolved power (course 4), the local layer and its special districts (course 5), tribal nations as a separate sovereign (course 6), and governments without states plus community self-governance (course 7).",
        },
        {
          prompt: "What single move do the route series, course 1, and this capstone all share?",
          answer: "Go find the document. A power a government claims either traces to an instrument you can read or it does not, so the deliverable is always the primary record behind the act.",
        },
      ],
    },
    {
      slug: "stack-six-authorities",
      title: "3 · The six kinds of authority over one block",
      section: "Section 1 · Your stack, and why you cannot name half of it",
      body: `Ask someone how many governments have power over their home and they will say three: city, state, nation. **The real answer is usually six to twelve**, and the gap is not because the extra ones are hidden by accident. It is because they belong to kinds of authority that no civics class named. Here are the six kinds you will look for in the capstone.

## The six kinds

| # | Kind of authority | From the path |
|---|---|---|
| 1 | **The national layer** | Enumerated powers, granted by the national constitution (course 1) |
| 2 | **The middle layer** | A state, province, or region: entrenched or devolved (course 4) |
| 3 | **The general-purpose local layer** | County and municipality, delegated by the state (course 5) |
| 4 | **Special districts** | Single-purpose bodies that outnumber the cities (course 5) |
| 5 | **A separate sovereign** | A tribal nation, off the ladder, not a rung (course 6) |
| 6 | **Governments without states** | Supranational bodies and community self-governance (course 7) |

**Read kinds 1 through 4 as one ladder** of delegated power, top to bottom: the nation is enumerated, the state is reserved, the local layer is delegated, the special district is single-purpose. Then read kinds 5 and 6 as things that are NOT rungs on that ladder, which is exactly why people miss them.

## Why the last three kinds are the surprises

**Kind 4, special districts, is where most people find governments they never knew taxed them.** The 2017 Census of Governments counted about 90,000 local governments in the United States, and special districts were the single largest category, more numerous than municipalities (U.S. Census Bureau, 2017). Their elections are low-turnout and off-cycle, and their boundaries do not match the city's, so they hide in plain sight on the property-tax bill.

**Kind 5, a tribal nation, is not "a smaller government below the county."** It is a separate sovereign whose authority predates the United States, dealing with the federal government nation to nation (Worcester v. Georgia, 1832). You ask whether one is present, name it if so, and record its separate status, and you do not try to describe its internal governance.

**Kind 6 is the one people forget entirely.** A homeowners association governs by recorded covenants; a housing co-op governs by its bylaws; and for a learner outside the United States, a supranational body like the European Union holds real authority that is neither national nor local. **These are governments in the working sense: they make binding rules for the people inside them.** The capstone counts them.

## The point of the count

The number is not a trivia score. **A government you cannot name is a government you cannot hold accountable**, and the capstone exists to make the invisible ones legible over the one block that is yours. When you find that six to twelve bodies govern your block and you had named three, the four you missed are usually a special district, a separate sovereign, or a community body, which is precisely the part of the stack the path was written to reveal.

## Sources
- U.S. Census Bureau. (2017). 2017 Census of Governments, Organization component. https://www.census.gov/programs-surveys/cog.html
- Worcester v. Georgia, 31 U.S. (6 Pet.) 515 (1832). https://supreme.justia.com/cases/federal/us/31/515/
- USA.gov. (n.d.). State, local, and tribal governments. https://www.usa.gov/`,
      recallContent: [
        {
          prompt: "Name the four questions of the method, in order.",
          answer: "1) Who acted (the specific body)? 2) Under what authority? 3) Where does the power come from (the document)? 4) Who can overturn it?",
        },
        {
          prompt: "Why is Question 3 the load-bearing one, and what is its route-series form?",
          answer: "Because a government holds power only under a document, and Question 3 finds it. Its route-series form is 'find the instrument, then find its source.' The capstone deliverable is the named document behind each government's power.",
        },
        {
          prompt: "How does the answer to Question 4 tell you more than just who can undo an act?",
          answer: "It records how firmly the whole government is held: a US state is entrenched in the federal constitution, a city is a creature of the state, and a special district exists only until the state amends its enabling act. Same rung on the map, very different terms.",
        },
      ],
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 2 · Where each layer's primary record lives
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "stack-primary-record",
      title: "4 · Primary record, not summary",
      section: "Section 2 · Where each layer's primary record lives",
      body: `The capstone has one rule that outranks all the others: **every entry ties to a primary record you can name.** Not a summary of the record, not a helpful blog post about the record, the record itself. This lesson is about what a primary record is for each layer, and why a secondary summary is not good enough for the finished map.

## Primary versus secondary, in one line each

A **primary record** is the instrument itself: the constitution, the charter, the statute, the enabling act, the recorded covenant, the tax bill. A **secondary source** is anyone describing that instrument: an encyclopedia entry, a news article, a state-by-state summary table. **Secondary sources are how you find the primary one. They are not what you cite.**

The reason is the same reason the whole path distrusts flat labels. A summary that says "your state is a home-rule state" can be out of date, oversimplified, or wrong for your specific city, and you will not know until you read the actual constitution and charter. **The summary points; the primary record decides.**

## The record for each kind of authority

Here is the map of where each layer keeps the document you are hunting. The next four lessons open each row.

| Kind of authority | The primary record | A finding aid |
|---|---|---|
| **National** | The national constitution and its statutes | USA.gov; the U.S. Code at uscode.house.gov |
| **State / region** | The state constitution and the state statutes | The state legislature's official site |
| **County / municipality** | The charter and the local code | The clerk's office or a municipal code library |
| **Special district** | The enabling act, plus the district's own filings | The property-tax bill; the county assessor or GIS |
| **Separate sovereign** | Treaties and the nation's own governing documents | The Bureau of Indian Affairs record |
| **Community body** | Recorded covenants (CC&Rs) or co-op bylaws | The county recorder's office |

## A finding aid is not a citation

USA.gov, an encyclopedia, and a code library are **finding aids**: they get you to the door. **What goes on your map is what is behind the door.** If your only source for a special district is "it was on a list I found," you have a lead, not an entry. Go to the tax bill and the enabling act, then write it down. This is the difference between a map that would survive a challenge and a map that would not, and it is exactly the discipline the route series taught: read the record down to its own citations, then follow them.

## Sources
- USA.gov. (n.d.). How to find government information. https://www.usa.gov/
- Office of the Law Revision Counsel. (n.d.). United States Code. https://uscode.house.gov/
- U.S. Census Bureau. (2017). 2017 Census of Governments, Organization component. https://www.census.gov/programs-surveys/cog.html`,
      recallContent: [
        {
          prompt: "Ask how many governments have power over one home; people say three. What is the usual real number, and where is the gap?",
          answer: "Usually six to twelve. The gap over city, state, and nation is mostly special districts, plus a possible separate sovereign (a tribal nation) and community bodies (an HOA or co-op) that no civics class names.",
        },
        {
          prompt: "Name the six kinds of authority the capstone looks for.",
          answer: "The national layer, the middle layer (state or region), the general-purpose local layer (county and municipality), special districts, a separate sovereign (a tribal nation), and governments without states (supranational bodies and community self-governance).",
        },
        {
          prompt: "Why is the count of governments over your block not just trivia?",
          answer: "Because a government you cannot name is a government you cannot hold accountable. The missing four are usually a special district, a separate sovereign, or a community body, which is exactly the part of the stack the path exists to reveal.",
        },
      ],
    },
    {
      slug: "stack-federal-state-records",
      title: "5 · The federal and state records",
      section: "Section 2 · Where each layer's primary record lives",
      body: `Start at the top of the ladder, because it is the easiest to source and it warms up the method. The national and state layers over your block are the same for everyone in the country and the state, so you can find them once and reuse them.

## The national record

The national layer is the same for every block in the United States. Its authority is enumerated: Congress acts only where the Constitution grants power, and valid federal law binds the states through the Supremacy Clause (U.S. Const. art. VI). **The primary records are the Constitution and the U.S. Code**, the official codification of federal statutes published by the Office of the Law Revision Counsel at uscode.house.gov. For your map, the national entry is short: the body is the United States, the document is the Constitution, and who can overturn it is a court, a later Congress, or an amendment.

## The state record, and why it is the workhorse

Most of the government that touches daily life is state law: property, family, most licensing, criminal law, and the police power behind zoning and public health (U.S. Const. amend. X). **The primary records are your state constitution and your state statutes, and both are published on your state legislature's official site.** Search the legislature's name plus "constitution" or "statutes" or "revised code" and you will reach the official text, not a summary.

**Read the state constitution, not only the federal one.** As course 4 stressed, a state constitution is usually longer, more specific, and more restrictive than the federal one, and it is where the binding limit on a state action frequently lives. It is also where you learn whether your state grants cities home rule and on what terms, which you will need for the next lesson.

## The middle-layer caveat for learners outside the United States

If your block is not in the United States, this rung behaves differently, and course 4 is the reason. **A US state's powers are entrenched in the federal constitution; a devolved region's powers come from an ordinary act the central parliament could in principle repeal.** So a learner in Scotland, in a Spanish autonomous community, or in a Canadian province reads the same rung on a different footing: find the devolution statute or the federal constitution that sets the region's powers, and note whether the center could reclaim them. The method is identical; the answer to Question 4 is not.

## Sources
- U.S. Const. art. VI. https://constitution.congress.gov/constitution/article-6/
- U.S. Const. amend. X. https://constitution.congress.gov/constitution/amendment-10/
- Office of the Law Revision Counsel. (n.d.). United States Code. https://uscode.house.gov/`,
      recallContent: [
        {
          prompt: "What is the difference between a primary record and a secondary source, and which one goes on your map?",
          answer: "A primary record is the instrument itself (constitution, charter, statute, enabling act, recorded covenant, tax bill). A secondary source is anyone describing it. The primary record goes on your map; the secondary source is only how you found it.",
        },
        {
          prompt: "Why is a summary that says 'your state is a home-rule state' not enough for the finished map?",
          answer: "Because it can be out of date, oversimplified, or wrong for your specific city. The summary points you toward the document; only the actual constitution and charter decide, so you read and cite those.",
        },
        {
          prompt: "What is the difference between a finding aid and a citation?",
          answer: "A finding aid (USA.gov, an encyclopedia, a code library) gets you to the door; the citation is what is behind it. If your only source for a district is 'a list I found,' you have a lead, not an entry.",
        },
      ],
    },
    {
      slug: "stack-county-municipal-records",
      title: "6 · The county and municipal records",
      section: "Section 2 · Where each layer's primary record lives",
      body: `Now down to the general-purpose local layer, the county and the city or town. This is where the map starts to be about your block specifically rather than your whole state, and where course 5's warning bites: a city holds only the power the state handed it, so its record always points upward.

## The county record

Nearly every block in the United States sits in a county (Louisiana calls them parishes, Alaska calls them boroughs). A county is a creature of the state, like a city, and it often administers state functions locally: courts, records, elections, some roads. **The primary records are the county charter, where one exists, and the county code.** Many counties operate under general state law rather than a charter, which is itself a finding worth writing down. The county assessor and the county elections office are also where you will confirm which districts your block falls in, so note them now; you will need them next lesson.

## The municipal record, and the "unincorporated" finding

Ask first: **is your block inside an incorporated municipality at all?** Some blocks are unincorporated, meaning there is no city layer and the county does more. **That is a real finding, not a blank**, and it changes the whole shape of your map. If there is a municipality, its **primary records are its charter and its municipal code**, commonly hosted on the city clerk's site or in an online municipal code library. The charter is the document that answers course 1's Question 3 for every city ordinance.

## Read the form of government off the charter

Course 5 taught that the name over the door tells you almost nothing; the **form** tells you how power flows. The charter names it. Is this a mayor-council city, and is the mayor strong or weak? A council-manager city run day to day by a hired professional who is on no ballot? A commission? A New England town meeting where the residents are the legislature? **Record the form, because it is the difference between "elect a new mayor" and "lobby the council that hires the manager" when you want something to change.** Two cities with identical charters-on-paper can run completely differently, and the form is why.

## Sources
- Hunter v. City of Pittsburgh, 207 U.S. 161 (1907). https://supreme.justia.com/cases/federal/us/207/161/
- National League of Cities. (n.d.). Cities 101: Forms of municipal government. https://www.nlc.org/resource/cities-101-forms-of-municipal-government/
- USA.gov. (n.d.). State, local, and tribal governments. https://www.usa.gov/`,
      recallContent: [
        {
          prompt: "What are the primary records for the national and state layers, and where do you find each?",
          answer: "National: the U.S. Constitution and the U.S. Code (uscode.house.gov). State: the state constitution and the state statutes, both on the state legislature's official site. The national layer is the same for every block in the country.",
        },
        {
          prompt: "Why does the course tell you to read the state constitution, not just the federal one?",
          answer: "Because a state constitution is usually longer, more specific, and more restrictive than the federal one, and it is where the binding limit on a state action, and whether your state grants cities home rule, frequently lives.",
        },
        {
          prompt: "How does this rung read differently for a learner outside the United States?",
          answer: "A US state's powers are entrenched in the federal constitution; a devolved region's come from an ordinary act the center could in principle repeal. So you find the devolution statute or constitution and note whether the center could reclaim the powers. Same method, different answer to Question 4.",
        },
      ],
    },
    {
      slug: "stack-special-districts",
      title: "7 · The special districts: the tax bill and the assessor",
      section: "Section 2 · Where each layer's primary record lives",
      body: `This is the lesson that will change your map, because this is where the surprises live. Course 5 taught that special districts outnumber municipalities and that almost nobody can name the ones taxing them. This lesson is how you find yours.

## The single best primary source: your property-tax bill

**Read your property-tax bill line by line.** Every district that taxes your parcel usually appears on it as a separate line item: the school district, sometimes a community-college district, water, sewer, drainage or flood control, fire protection, a library district, and often a transit, park, hospital, cemetery, mosquito-abatement, or soil-conservation district. **Most people have never read this document as a list of governments, and that is exactly what it is.** If you rent, you can still find the districts through the county; the bill goes to the owner, but the districts are public.

## The second source: the county assessor or GIS

The county assessor's office and the county GIS (geographic information system) portal often let you look up a parcel and see the districts it falls in. **This is the finding aid; the enabling act is the record.** Each special district was created under a state statute, a general enabling law for that kind of district, and the district then has its own formation documents and filings. For your map, the district's entry is: the body is the district's board, the authority is its single statutory purpose, the document is the enabling act, and who can overturn it is chiefly the state that authorised it.

## Record how each board is chosen, because that is its accountability

For every district you find, note **how its governing board is filled**: elected on the regular cycle, elected off-cycle on its own odd date, or appointed by other officials. This is not a detail. Off-cycle and appointed boards are how real taxing power ends up chosen by almost no one, which is course 5's turnout problem made personal to your block. **A district that taxes you and whose board you cannot vote for is the sharpest thing the capstone will surface.**

## The scale, so you know what to expect

The 2017 Census of Governments counted about 90,000 local governments in the United States, and special districts were the largest single category, more numerous than municipalities, on top of tens of thousands of independent school districts (U.S. Census Bureau, 2017). **So expect to find more than one, and expect at least one you had never heard of.** That is the normal result, not a sign you did the research wrong.

## Sources
- U.S. Census Bureau. (2017). 2017 Census of Governments, Organization component. https://www.census.gov/programs-surveys/cog.html
- U.S. Const. amend. X. https://constitution.congress.gov/constitution/amendment-10/
- USA.gov. (n.d.). State, local, and tribal governments. https://www.usa.gov/`,
      recallContent: [
        {
          prompt: "Is your block inside an incorporated municipality? Why does the answer matter, including when it is no?",
          answer: "If yes, the city's charter and municipal code are your primary records for its ordinances. If no, the block is unincorporated: there is no city layer and the county does more. 'Unincorporated' is a real finding, not a blank.",
        },
        {
          prompt: "What are the primary records for the county layer, and what does 'operates under general state law' tell you?",
          answer: "The county charter (where one exists) and the county code. If the county has no charter and operates under general state law, that itself is a finding worth recording, and the assessor and elections offices confirm which districts your block falls in.",
        },
        {
          prompt: "Why does the course say to read the FORM of government off the charter?",
          answer: "Because the form (mayor-council with a strong or weak mayor, council-manager, commission, or town meeting), not the name over the door, tells you how power flows and where you go to change something. The charter names it.",
        },
      ],
    },
    {
      slug: "stack-sovereign-and-community",
      title: "8 · The separate sovereign, and the community layer",
      section: "Section 2 · Where each layer's primary record lives",
      body: `Two kinds of authority remain, and both are off the ladder of delegated power. The first is a separate sovereign; the second is the community self-governance that most people never think of as government at all. This lesson is how you research each, and where the care is required.

## The separate sovereign: ask, name, and stop

**Ask whether your block is within, or adjacent to, the territory of a tribal nation.** This is a separate question with a separate answer, not a rung on your stack. The authoritative finding aid is the **Bureau of Indian Affairs**, which maintains the record of federally recognized tribes, and the treaty record, which ranks as supreme law (Worcester v. Georgia, 1832; U.S. Const. art. VI). If a nation is present, **name it, record that its authority is inherent and government-to-government rather than delegated from your state, and stop there.**

Carry course 6's restraint rule exactly. **Do not describe any nation's internal governance, ceremonies, or restricted knowledge.** For the capstone, naming the sovereign and its separate status is the whole task. Lead with the nation's own account and with Indigenous scholarship, and treat recognition status as a checkable question you resolve against the record, not an assumption you make.

## The community layer: real rules, recorded documents

The last kind is the one hiding closest to home. If you live under a **homeowners association**, it governs your block by **recorded covenants, conditions, and restrictions (CC&Rs)**, a real-property instrument recorded with the county recorder and enforceable against every owner who takes title (Cornell Legal Information Institute, n.d.). If you live in a **housing co-op or a condominium**, its bylaws and its declaration play the same role. **These are governments in the working sense: they make binding rules, levy assessments, and hold elections**, and course 7 put them in the path for exactly this reason.

**The primary record is the recorded instrument, not the association's newsletter.** CC&Rs are recorded, so the county recorder's office is where the authoritative copy lives. For a learner outside the United States, the equivalent community and supranational bodies belong here too: a European Union member's block sits under EU authority that is neither national nor local, and its primary records are the EU treaties.

## One more time, because a records lesson is where it slips

**This is how to read authority and find records. It is not legal advice.** Whether a specific covenant, district levy, or jurisdictional line binds a specific parcel is a question you answer from the documents, and if it is a live dispute, from a lawyer. The method tells you which records to pull; the records, not this course, give the answer.

## Sources
- Worcester v. Georgia, 31 U.S. (6 Pet.) 515 (1832). https://supreme.justia.com/cases/federal/us/31/515/
- U.S. Bureau of Indian Affairs. (n.d.). Frequently asked questions and federally recognized tribes. https://www.bia.gov/
- Cornell Legal Information Institute. (n.d.). Covenant. Wex. https://www.law.cornell.edu/wex/covenant`,
      recallContent: [
        {
          prompt: "Your property-tax bill is the single best primary source for which kind of authority, and why?",
          answer: "Special districts. Every district that taxes your parcel usually appears on the bill as a separate line item (school, water, fire, library, transit, and more), so the tax bill is literally a list of the governments taxing you, which most people have never read as one.",
        },
        {
          prompt: "For each special district, what four things go on the map, and why record how the board is chosen?",
          answer: "The body (its board), the authority (its single statutory purpose), the document (its enabling act), and who can overturn it (chiefly the state). How the board is chosen (elected on-cycle, off-cycle, or appointed) is its accountability, and off-cycle or appointed boards are how real taxing power gets chosen by almost no one.",
        },
        {
          prompt: "Roughly how many local governments did the 2017 Census count, and what should you expect to find?",
          answer: "About 90,000, with special districts the largest single category, more numerous than municipalities. Expect to find more than one district, and at least one you had never heard of. That is the normal result.",
        },
      ],
    },
    {
      slug: "stack-quiz-records",
      title: "9 · Quiz: the records and how to find them",
      section: "Section 2 · Where each layer's primary record lives",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "The rule that outranks all others in the capstone is that every entry ties to:",
            options: [
              "a friendly summary of the record",
              "the most-shared article online",
              "a primary record you can name",
              "the official who replies fastest",
            ],
            correctIndex: 2,
            explanation: "A primary record is the instrument itself: constitution, charter, statute, enabling act, recorded covenant, or tax bill. A secondary summary is only how you find it, not what you cite.",
            sourceLessonSlug: "stack-primary-record",
          },
          {
            prompt: "USA.gov, an encyclopedia, and a code library are best described as:",
            options: [
              "citations for the finished map",
              "finding aids that reach the door",
              "the primary records themselves",
              "governments with real authority",
            ],
            correctIndex: 1,
            explanation: "They get you to the door; what goes on the map is what is behind it. A lead from a list is not an entry until you reach the actual document.",
            sourceLessonSlug: "stack-primary-record",
          },
          {
            prompt: "Asked how many governments have power over one home, most people say three; the usual real count is:",
            options: [
              "six to twelve governments",
              "exactly the three they name",
              "only the one federal body",
              "two, the county and state",
            ],
            correctIndex: 0,
            explanation: "The gap over city, state, and nation is mostly special districts, plus a possible separate sovereign and community bodies that no civics class names.",
            sourceLessonSlug: "stack-six-authorities",
          },
          {
            prompt: "In the vertical ladder of delegated power, the single largest category by unit count is:",
            options: [
              "the county governments",
              "the state legislatures",
              "the special districts",
              "the federal agencies",
            ],
            correctIndex: 2,
            explanation: "The 2017 Census counted about 90,000 local governments, and special districts were the largest single category, more numerous than municipalities.",
            sourceLessonSlug: "stack-special-districts",
          },
          {
            prompt: "The primary record for the national layer, the same for every block, is the Constitution and the:",
            options: [
              "United States Code of statutes",
              "county recorder's parcel file",
              "state legislature's own website",
              "district's annual budget filing",
            ],
            correctIndex: 0,
            explanation: "The U.S. Code is the official codification of federal statutes, published by the Office of the Law Revision Counsel at uscode.house.gov.",
            sourceLessonSlug: "stack-federal-state-records",
          },
          {
            prompt: "Where do you find the authoritative text of your state constitution and statutes?",
            options: [
              "on the federal USA.gov home page",
              "on the state legislature's own site",
              "in the county assessor's tax file",
              "in a national encyclopedia entry",
            ],
            correctIndex: 1,
            explanation: "The official text lives on the state legislature's site. A secondary summary can be out of date or wrong for your specific city, so you read and cite the primary text.",
            sourceLessonSlug: "stack-federal-state-records",
          },
          {
            prompt: "For a learner outside the United States, a devolved region differs from a US state because its powers:",
            options: [
              "are enumerated in a treaty",
              "can never be changed at all",
              "outrank the national government",
              "come from a repealable act",
            ],
            correctIndex: 3,
            explanation: "A US state's powers are entrenched in the federal constitution; a devolved region's come from an ordinary act the center could in principle repeal. Same method, different answer to Question 4.",
            sourceLessonSlug: "stack-federal-state-records",
          },
          {
            prompt: "If your block is not inside any incorporated municipality, the correct move is to:",
            options: [
              "record it as unincorporated",
              "leave the local layer blank",
              "list the nearest city anyway",
              "assume the state governs it",
            ],
            correctIndex: 0,
            explanation: "Unincorporated is a real finding, not a blank: there is no city layer and the county does more. It changes the whole shape of your map.",
            sourceLessonSlug: "stack-county-municipal-records",
          },
          {
            prompt: "The course says to read a city's FORM of government off the charter because the form tells you:",
            options: [
              "the size of the city budget",
              "the age of the city itself",
              "the population of the county",
              "how the power actually flows",
            ],
            correctIndex: 3,
            explanation: "Mayor-council, council-manager, commission, or town meeting: the form, not the name over the door, decides who runs the city and where you go to change something.",
            sourceLessonSlug: "stack-county-municipal-records",
          },
          {
            prompt: "The single best primary source for finding the special districts over your block is your:",
            options: [
              "city council meeting minutes",
              "property-tax bill's line items",
              "state governor's press releases",
              "national voter registration card",
            ],
            correctIndex: 1,
            explanation: "Every district that taxes your parcel usually appears as a separate line item. The tax bill is literally a list of the governments taxing you.",
            sourceLessonSlug: "stack-special-districts",
          },
          {
            prompt: "For each special district, recording how its board is chosen matters because it is the district's:",
            options: [
              "total yearly tax revenue",
              "accountability to the voter",
              "distance from city hall",
              "founding date on record",
            ],
            correctIndex: 1,
            explanation: "Elected on-cycle, elected off-cycle, or appointed: off-cycle and appointed boards are how real taxing power ends up chosen by almost no one.",
            sourceLessonSlug: "stack-special-districts",
          },
          {
            prompt: "The authoritative finding aid for whether a tribal nation is present at your block is the:",
            options: [
              "county's local zoning board",
              "state secretary of state",
              "Bureau of Indian Affairs",
              "United States Census map",
            ],
            correctIndex: 2,
            explanation: "The Bureau of Indian Affairs maintains the record of federally recognized tribes, and the treaty record ranks as supreme law. You name the nation, note its separate status, and stop.",
            sourceLessonSlug: "stack-sovereign-and-community",
          },
          {
            prompt: "Carrying course 6's restraint rule into the capstone means you:",
            options: [
              "map the nation's internal rules",
              "skip the tribal question entirely",
              "treat the nation as a county",
              "name the sovereign and stop there",
            ],
            correctIndex: 3,
            explanation: "Naming the sovereign and recording its separate, pre-existing status is the whole task. You do not describe any nation's internal governance, ceremonies, or restricted knowledge.",
            sourceLessonSlug: "stack-sovereign-and-community",
          },
          {
            prompt: "A homeowners association governs a block through its recorded:",
            options: [
              "covenants, conditions, terms",
              "monthly community newsletter",
              "list of preferred contractors",
              "annual holiday event calendar",
            ],
            correctIndex: 0,
            explanation: "CC&Rs are a real-property instrument recorded with the county recorder and enforceable against every owner who takes title. The recorded document, not the newsletter, is the primary record.",
            sourceLessonSlug: "stack-sovereign-and-community",
          },
          {
            prompt: "A tribal nation belongs on your map as a:",
            options: [
              "rung below the county board",
              "special district of the state",
              "separate sovereign, not a rung",
              "branch of the federal agencies",
            ],
            correctIndex: 2,
            explanation: "Its authority is inherent and government-to-government, predating the United States, so it sits off the ladder of delegated power, not as one more rung on it.",
            sourceLessonSlug: "stack-six-authorities",
          },
        ],
      },
    },
    // ═══════════════════════════════════════════════════════════════════════════════════════
    // SECTION 3 · Do the research: a worked example, then your own
    // ═══════════════════════════════════════════════════════════════════════════════════════
    {
      slug: "stack-worked-example",
      title: "10 · A worked example: an ordinary block in San Francisco",
      section: "Section 3 · Do the research: a worked example, then your own",
      body: `Before you map your own block, watch the method run once, end to end, on a real place. **San Francisco is a well-known public place, and this example uses no one's address and no private parcel data.** It traces only the KINDS of government over an ordinary residential block somewhere in the city, and the record types you would pull for each. When you do the capstone, you will use your own records.

## Why San Francisco is a good teaching case

Because it collapses two rungs into one. **San Francisco is a consolidated city and county**: the City and County of San Francisco is a single government, so the "county" and "city" rows of the map merge. That is itself a finding, and it is the kind of local structure you can only learn by reading the charter, not by assuming every place has a separate county and city.

## Run the stack

**National.** The body is the United States; the documents are the Constitution and the U.S. Code (uscode.house.gov); overturned by a court, a later Congress, or an amendment. Same for every block in the country.

**State.** The body is the State of California; the primary records are the California Constitution and the California codes, published on the state's official California Legislative Information site (leginfo.legislature.ca.gov); the police power is reserved to the state, limited by the federal Constitution and valid federal law.

**City and county (merged).** The body is the City and County of San Francisco; the primary record is its Charter, hosted in the city's municipal code library; it holds its power under California law, so a state statute or preemption can overturn a local ordinance, consistent with course 5.

**Special districts.** This is where the surprises would be. A block in San Francisco sits under the **San Francisco Unified School District**, a single-purpose school government, and under a regional transit special district, the **San Francisco Bay Area Rapid Transit District (BART)**, whose elected board governs a service that crosses several counties. Each has its own governing documents; each traces to a California enabling statute. **You would confirm the exact statutory citation against the California codes rather than assume it**, which is the authoritative-values discipline: the record, not a guess, gives the section number.

**The separate-sovereign question.** You still must ask it. The San Francisco Peninsula is widely documented as the ancestral homeland of the **Ramaytush Ohlone**, and the honest research step is to check the Bureau of Indian Affairs record of federally recognized tribes and the treaty record for any current territorial jurisdiction over the block, and to lead with the people's own account for the ancestral-homeland fact. For this urban block the research points to no reservation currently exercising territorial jurisdiction, and you would record THAT, sourced, rather than either inventing a jurisdiction or skipping the question.

**The community layer.** If the block is under a homeowners association or in a condominium, its recorded CC&Rs or declaration, on file with the city and county recorder, are the primary record for that authority.

## What the example bought you

Notice what you did not do. You did not guess a code section, you did not invent a district, and you did not assert a jurisdiction you could not source. **You located each government, named the record type, and flagged the one value (a statute number) that must be verified against the primary source.** That is the finished-map standard, and the next lesson is how to write it down honestly.

## Sources
- California Legislative Information. (n.d.). California Constitution and California Codes. https://leginfo.legislature.ca.gov/
- U.S. Bureau of Indian Affairs. (n.d.). Frequently asked questions and federally recognized tribes. https://www.bia.gov/
- U.S. Census Bureau. (2017). 2017 Census of Governments, Organization component. https://www.census.gov/programs-surveys/cog.html`,
      recallContent: [
        {
          prompt: "For the tribal question, name the finding aid, the restraint rule, and what you record.",
          answer: "The Bureau of Indian Affairs (plus the treaty record) is the finding aid. The restraint rule (course 6): name the nation, note its separate government-to-government status, and stop, describing no internal or ceremonial detail. You record the sourced finding, leading with the nation's own account.",
        },
        {
          prompt: "How does a homeowners association govern a block, and where is its primary record?",
          answer: "Through recorded covenants, conditions, and restrictions (CC&Rs), a real-property instrument enforceable against every owner who takes title. The authoritative copy is recorded with the county recorder's office, not in the association's newsletter.",
        },
        {
          prompt: "Why is a records lesson exactly where the 'not legal advice' boundary slips, and what is the boundary?",
          answer: "Because reading records feels like reaching conclusions. The boundary: this teaches how to find and read authority, not legal advice. Whether a specific covenant or levy binds a specific parcel comes from the documents, and if it is a live dispute, from a lawyer.",
        },
      ],
    },
    {
      slug: "stack-reading-what-you-find",
      title: "11 · Reading what you find: four columns and honest blanks",
      section: "Section 3 · Do the research: a worked example, then your own",
      body: `You have the records. Now write them down in a way that would survive a challenge, which means being as careful about what you do not know as about what you do. This lesson is the format of the finished map and the honesty rules that make it worth something.

## The columns

Give every government you find the same five columns, straight from the method:

| Column | What goes in it |
|---|---|
| **Body** | The named government (Question 1) |
| **Kind / form** | National, state, county, municipality and its form, special district and its purpose, separate sovereign, or community body |
| **Document** | The primary record: constitution, charter, statute, enabling act, treaty, or recorded covenant (Question 3) |
| **Chosen how** | Elected on-cycle, elected off-cycle, appointed, or self-perpetuating |
| **Who can overturn it** | A court, a higher body, the body itself, or the voters (Question 4) |

**Completeness beats polish.** The finding is the count and the sources, not the prose. A plain table that names every government and its document is a better capstone than an elegant essay that names four and hand-waves the rest.

## The honesty rules, which are the point

**Leave a cell blank rather than guess.** A blank you can fill later by reading one more document is honest; a confident wrong answer corrupts the whole map. If you could not find a district's enabling act, write "not yet found" and name the record that would settle it.

**Distinguish "did not find" from "does not exist."** These are different findings and you must not blur them. "I found no tribal jurisdiction after checking the BIA record" is a sourced finding; "there is none" asserted from memory is not.

**Never assert a value another system owns.** A code section, an enabling act's number, a district's exact boundary: read it from the primary record, or flag it as unverified. Presenting a guessed section number as fact is the exact error the authoritative-values rule exists to stop.

**Name the disagreements you meet.** If a summary flatly labels your state a "Dillon's Rule state" or "home-rule state," record it as a claim to check against the actual constitution and charter, not a settled fact, exactly as courses 1 and 5 warned.

## Why this format is the whole path in one page

Each column is one of the method's four questions, and the rows are the six kinds of authority. **A finished map is course 1's method applied across courses 4 through 7's layers, over one block.** When you can hand someone a table that names every government over your block, cites the document behind each, and labels its blanks instead of filling them with guesses, you have done the thing the entire path was built to teach.

## Sources
- Hunter v. City of Pittsburgh, 207 U.S. 161 (1907). https://supreme.justia.com/cases/federal/us/207/161/
- U.S. Census Bureau. (2017). 2017 Census of Governments, Organization component. https://www.census.gov/programs-surveys/cog.html
- USA.gov. (n.d.). State, local, and tribal governments. https://www.usa.gov/`,
      recallContent: [
        {
          prompt: "Why is San Francisco a good teaching case for the worked example?",
          answer: "Because it is a consolidated city and county: the City and County of San Francisco is a single government, so the county and city rows merge. That is a finding you can only learn by reading the charter, not by assuming every place has a separate county and city.",
        },
        {
          prompt: "In the worked example, how were the special districts and the tribal question handled without asserting guessed values?",
          answer: "The special districts (SFUSD, BART) were named with their record types, and the exact statute number was flagged to verify against the California codes rather than guessed. The tribal question was researched via the BIA and treaty record, the ancestral homeland (Ramaytush Ohlone) noted from the people's own account, and 'no current reservation jurisdiction' recorded as a sourced finding.",
        },
        {
          prompt: "What did the worked example deliberately NOT do?",
          answer: "It did not guess a code section, invent a district, or assert a jurisdiction it could not source. It located each government, named the record type, and flagged the one value (a statute number) that must be verified against the primary source.",
        },
      ],
    },
    {
      slug: "stack-quiz-research",
      title: "12 · Quiz: doing the research",
      section: "Section 3 · Do the research: a worked example, then your own",
      quiz: {
        passingScore: 70,
        questionsPerAttempt: 8,
        questions: [
          {
            prompt: "San Francisco is a useful teaching case mainly because it is a:",
            options: [
              "state with no legislature",
              "consolidated city and county",
              "reservation held in trust",
              "country of its very own",
            ],
            correctIndex: 1,
            explanation: "The City and County of San Francisco is a single government, so the county and city rows of the map merge, a structure you learn only by reading the charter.",
            sourceLessonSlug: "stack-worked-example",
          },
          {
            prompt: "For the state layer of the San Francisco block, the primary records are the California Constitution and the:",
            options: [
              "county assessor's tax roll",
              "federal United States Code",
              "official California statutes",
              "city charter of the county",
            ],
            correctIndex: 2,
            explanation: "The California Constitution and codes live on the state's official California Legislative Information site (leginfo.legislature.ca.gov), the primary record for the state rung.",
            sourceLessonSlug: "stack-worked-example",
          },
          {
            prompt: "In the worked example, BART and the school district are examples of which kind of authority?",
            options: [
              "special-purpose districts",
              "branches of the state",
              "federal executive agencies",
              "separate tribal sovereigns",
            ],
            correctIndex: 0,
            explanation: "Each is a single-purpose special district (transit; schools) with its own governing board and documents, tracing to a California enabling statute.",
            sourceLessonSlug: "stack-worked-example",
          },
          {
            prompt: "For the exact enabling-statute section of a district, the course says you must:",
            options: [
              "recall the number from memory",
              "estimate a plausible section",
              "read it from the primary record",
              "copy it from a news article",
            ],
            correctIndex: 2,
            explanation: "A value another system owns, like a code section, is read from the primary record or flagged as unverified. A guessed number presented as fact is the authoritative-values error.",
            sourceLessonSlug: "stack-worked-example",
          },
          {
            prompt: "For the San Francisco block, the separate-sovereign question was resolved by:",
            options: [
              "assuming there was none present",
              "inventing a nearby jurisdiction",
              "skipping the question as urban",
              "checking the record and sourcing it",
            ],
            correctIndex: 3,
            explanation: "The BIA and treaty record were checked, the ancestral homeland of the Ramaytush Ohlone noted from the people's own account, and 'no current reservation jurisdiction' recorded as a sourced finding, not an assumption.",
            sourceLessonSlug: "stack-worked-example",
          },
          {
            prompt: "The five columns of the finished map correspond, one each, to the method's:",
            options: [
              "four questions plus the form",
              "budget lines of the city",
              "amendments to the charter",
              "members of the state senate",
            ],
            correctIndex: 0,
            explanation: "Body, kind or form, document, chosen how, and who can overturn it map to the four questions plus how the governing body is filled. The rows are the six kinds of authority.",
            sourceLessonSlug: "stack-reading-what-you-find",
          },
          {
            prompt: "When you cannot find a district's enabling act, the honest entry is to:",
            options: [
              "write a best-guess statute in",
              "write 'not yet found' and cite next step",
              "delete the district from the map",
              "copy another district's act over",
            ],
            correctIndex: 1,
            explanation: "A labeled blank you can fill later is honest; a confident wrong answer corrupts the whole map. Name the record that would settle it.",
            sourceLessonSlug: "stack-reading-what-you-find",
          },
          {
            prompt: "The course insists you distinguish 'did not find' from:",
            options: [
              "'does not exist' as a claim",
              "'found it' on the tax bill",
              "'filed it' with the clerk",
              "'voted for it' last cycle",
            ],
            correctIndex: 0,
            explanation: "'I found none after checking the record' is a sourced finding; 'there is none' asserted from memory is not. Blurring them is the error.",
            sourceLessonSlug: "stack-reading-what-you-find",
          },
          {
            prompt: "A summary that flatly labels your state a 'Dillon's Rule state' should be recorded as:",
            options: [
              "a settled fact to rely on",
              "a claim you still must check",
              "proof no city has power",
              "a ruling of a federal court",
            ],
            correctIndex: 1,
            explanation: "States apply home rule and Dillon's Rule differently across powers and cities, so any flat label is a hypothesis to check against the actual constitution and charter.",
            sourceLessonSlug: "stack-reading-what-you-find",
          },
          {
            prompt: "For the capstone map, the course says completeness beats:",
            options: [
              "polish in the writing",
              "citing any real records",
              "naming the city council",
              "reading the tax bill closely",
            ],
            correctIndex: 0,
            explanation: "The finding is the count and the sources, not the prose. A plain table that names every government beats an elegant essay that names four and hand-waves the rest.",
            sourceLessonSlug: "stack-reading-what-you-find",
          },
          {
            prompt: "In the worked example, the national layer entry is described as:",
            options: [
              "unique to San Francisco alone",
              "the same for every US block",
              "governed by the state charter",
              "chosen by the district voters",
            ],
            correctIndex: 1,
            explanation: "The United States, under the Constitution and the U.S. Code, is the same national entry for every block in the country, overturned by a court, a later Congress, or an amendment.",
            sourceLessonSlug: "stack-worked-example",
          },
          {
            prompt: "The recorded CC&Rs of a homeowners association are filed with the:",
            options: [
              "state legislature's clerk",
              "federal district court",
              "county recorder's office",
              "national archives building",
            ],
            correctIndex: 2,
            explanation: "CC&Rs are a recorded real-property instrument, so the county recorder's office holds the authoritative copy, not the association's newsletter.",
            sourceLessonSlug: "stack-worked-example",
          },
          {
            prompt: "Reading the finished map as 'the whole path in one page' means each column is a method question and each row is a:",
            options: [
              "line item on the tax bill",
              "kind of authority over the block",
              "meeting of the city council",
              "year in the district's history",
            ],
            correctIndex: 1,
            explanation: "The columns are the four questions plus how the body is chosen; the rows are the six kinds of authority from courses 1 and 4 through 7, over one block.",
            sourceLessonSlug: "stack-reading-what-you-find",
          },
          {
            prompt: "The worked example deliberately did NOT:",
            options: [
              "name any real record type",
              "read the city charter at all",
              "use a well-known public place",
              "invent a district or jurisdiction",
            ],
            correctIndex: 3,
            explanation: "It located each government and named the record type, but invented no district and asserted no jurisdiction it could not source, flagging the one statute number to verify.",
            sourceLessonSlug: "stack-worked-example",
          },
          {
            prompt: "Which value must NEVER be asserted from memory on the map?",
            options: [
              "the name of your own state",
              "that the nation is the top layer",
              "that the tax bill lists districts",
              "a statute section a system owns",
            ],
            correctIndex: 3,
            explanation: "A code section, an enabling act's number, or a district boundary is owned by another system; you read it from the primary record or flag it unverified.",
            sourceLessonSlug: "stack-reading-what-you-find",
          },
        ],
      },
    },
    {
      slug: "stack-capstone",
      title: "13 · Capstone: map every government over your block",
      section: "Section 3 · Do the research: a worked example, then your own",
      lessonType: "assignment",
      body: `This is the assignment the whole path was built for. **Document every government with authority over the block you live on, from the primary record.** Most people find six to twelve, and are surprised by half. It is the same move as the route series and course 1: go find the document.

**Two boundaries before you start, because a capstone is where people forget them.** First, **this is a research exercise in reading authority, not legal advice.** You are building an inventory of who has power over your block and where that power comes from; you are not determining anyone's legal rights, including your own. Second, **the deliverable is the list of governments and their documents, never a private parcel record.** Do not publish your address, your neighbors' addresses, or anyone's parcel data. The stack is public; the parcel is private.

## The assignment

Produce a **stack map of your own block**: a labeled table (or a sketch) of every government with authority over it, with the five columns from Lesson 11 filled for each. **Completeness over polish.** The finding is the count and the sources, not the prose.

## Step 1. The upper stack

Fill the national and state rows first; they are the same for everyone in your country and state. Body, document (the constitution and the code or statutes, from the official site), and who can overturn it. If you are outside the United States, note whether your region is entrenched or devolved (course 4).

## Step 2. The general-purpose local layer

Name your county (or parish or borough) and your municipality, or record that the block is **unincorporated**, which is a real finding. Pull the charter and the local code from the clerk or a code library, and **read the form of government off the charter.**

## Step 3. Hunt the special districts (where the surprises are)

**Read your property-tax bill line by line**, then check the county assessor or GIS. Write down every district: school, water, sewer, fire, library, transit, and any others, and for each, note **how its board is chosen** (elected on-cycle, elected off-cycle, or appointed).

## Step 4. Ask the separate-sovereign question

Check the Bureau of Indian Affairs record and the treaty record for whether a tribal nation holds jurisdiction at or near your block. If one does, **name it and record its separate, government-to-government status, and stop there.** Reproduce no internal or ceremonial detail. Record either the named sovereign or a sourced "no current jurisdiction found," never a guess.

## Step 5. The community layer

If you live under an HOA, a co-op, or a condominium, add it: the body, and its primary record (the recorded CC&Rs or the bylaws, from the county recorder). Outside the United States, add any supranational authority (for example, EU treaties).

## The rubric (grade yourself against it)

| Criterion | Not yet | Solid | Excellent |
|---|---|---|---|
| **Coverage** | Only the naive three (city, state, nation) | Adds the special districts and asks the sovereign and community questions | Every applicable kind of authority is present, including the ones you were surprised by |
| **Primary records** | Entries cite summaries or nothing | Most entries name a primary record | Every entry names the primary record and its finding aid |
| **The four questions** | Only the body is named | Body, authority, and document filled | All five columns filled or honestly blank, with who-can-overturn showing entrenched versus revocable |
| **Honesty of blanks** | Guesses fill the gaps | Some blanks labeled "not yet found" | "Did not find" and "does not exist" kept distinct; no value another system owns is asserted from memory |
| **Care and boundaries** | Missing, or reproduces restricted detail | States "not legal advice" | Names the sovereign with restraint, publishes no parcel data, and flags disagreements as claims to check |
| **The surprise** | None noted | Notes one government you did not expect | Names which surprised you and why, tying it back to the layer the path predicted you would miss |

**A capstone that hits "Excellent" across the row is a complete, sourced inventory** in which every government over your block has a name, a kind, a document, a way its body is chosen, and an overturn answer, in which the blanks are labeled rather than guessed, and in which you can point to the one you never knew governed you and name the document that created it.

## What you have when you finish

You started the path unable to name half the governments over your own home. If you can now hand someone a sourced table of all of them, you have done the thing the route series did one case at a time, across every layer at once, over the one block that is yours. **You found the instruments, and you found their sources.** That is the whole path, and it is the toolkit you carry into Path B, where the same move (read the formation document as a primary source) builds a business instead of reading a government.

## Sources
- U.S. Census Bureau. (2017). 2017 Census of Governments, Organization component. https://www.census.gov/programs-surveys/cog.html
- U.S. Bureau of Indian Affairs. (n.d.). Frequently asked questions and federally recognized tribes. https://www.bia.gov/
- USA.gov. (n.d.). State, local, and tribal governments. https://www.usa.gov/`,
    },
  ],
};
