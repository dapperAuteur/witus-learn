import type { AuthoredCourse } from "./authored-course";

// H01 · How a House Stands Up. PRIVATE, free, NO SERIES CODE, by BAM's decision of 2026-09-20.
// Brief: plans/future-courses/construction/2026-09-20-how-a-house-stands-up-brief.md (APPROVED
// 2026-09-20, with question 1 answered PRIVATE). Rights answer for the whole series:
// plans/future-courses/construction/2026-09-20-00-sources-and-what-can-be-taught.md.
// RESEARCH TIER 2, per the brief: a wrong sentence about structure can put a wall on somebody.
// Assumed slug: `how-a-house-stands-up`. Series slug `the-house-you-live-in`, second built, after
// `read-the-plan-and-the-code`. Every `sourceLessonSlug` below is course-internal.
//
// THE SOURCING RULE, which is why this file can exist in a tracked repository:
// BAM owns six commercial construction books, filed in content/construction/ and covered by
// content/construction/00-READ-ME-FIRST-private-study-only.md. Course data files under
// scripts/data/ are TRACKED IN GIT and pushed to GitHub, so `visibility: "private"` protects the
// app and not the text. NOTHING in this file is taken, quoted, paraphrased, summarised or
// sequenced from any of them: not Haun, not Wing, not the Habitat for Humanity book, not the
// Ultimate Guides, not anything NCCER. None of them was opened while this was written. Lesson 3
// names them once, as BAM's own reading, which is a fact about the objects and not their
// expression. Everything taught here comes from federal publications, which carry no copyright at
// all (17 U.S.C. 105), plus one DOE-funded guide that is cited and linked and never reproduced.
//
// THE CREDENTIAL TRAP. This course is not a trade course, not an NCCER course, not an OSHA card,
// not a licence, not a permit, not an inspection, and no substitute for the Construction Training
// course at John Boner Neighborhood Centers. Lesson 1 says that in plain words, at the front,
// because a disclaimer at the end is a disclaimer nobody reads.
//
// THE REFUSAL, which is content and not omission. No span, no header size, no beam size, no
// fastener schedule, no footing dimension, no nail count appears anywhere in this course. Those
// are code tables and engineering for one specific house, and a number remembered from a course is
// the worst possible way to get one. Several sources read for this build print exactly such
// numbers; they were deliberately left out. Every sizing question in the course ends in the same
// two places: the drawings, and the building department. The companion course Reading the Plan and
// the Code (`read-the-plan-and-the-code`) is where a learner goes to find which code governs their
// own house. This course never prints code text and never states a code requirement as if it
// governed a site-built house.
//
// FETCH OR DO NOT CITE. Everything cited below was retrieved and read on 2026-09-20, in this pass,
// from the PDF or the page itself and not from a search summary:
//  - USDA Forest Service, Forest Products Laboratory, Wood Handbook: Wood as an Engineering
//    Material, FPL-GTR-282 (2021). Chapters downloaded as separate PDFs from
//    fpl.fs.usda.gov/documnts/fplgtr/fplgtr282/ and their text extracted: chapter 4 (Glass and
//    Zelinka, Moisture Relations and Physical Properties of Wood, 24 pp.), chapter 5 (Senalik and
//    Farber, Mechanical Properties of Wood, 48 pp.), chapter 13 (Bergman, Drying and Control of
//    Moisture Content and Dimensional Changes, 24 pp.), chapter 14 (Arango, Lebow and Glaeser,
//    Biodeterioration of Wood, 22 pp.). The treesearch record at research.fs.usda.gov/treesearch/
//    62200 was re-fetched in this pass and confirms the handbook's title, its editor Robert J.
//    Ross, the report number FPL-GTR-282, the year 2021, the 543 pages and the publisher.
//  - US Navy, Builder 3 & 2, Volume 1, NAVEDTRA 14043 (March 1993) and Volume 2, NAVEDTRA 14044
//    (March 1994). BOTH PDFs fetched and their text extracted. Volume 2 was the open item in the
//    brief, which had only its topic list from Volume 1's summary page; it is now read. Both carry
//    "DISTRIBUTION STATEMENT A: Approved for public release; distribution is unlimited."
//  - 24 CFR part 3280 (HUD Manufactured Home Construction and Safety Standards), sections 3280.305
//    Structural design requirements, 3280.306 Windstorm protection and 3280.504 Condensation
//    control and installation of vapor retarders, read at law.cornell.edu. THIS IS A MANUFACTURED
//    HOME STANDARD. Every lesson that cites it says so in the same sentence, per section 4 of the
//    sources inventory, because a learner who mistakes it for the code that governs a site-built
//    house will fail an inspection.
//  - DOE Building America Solution Center (basc.pnnl.gov), two guides: "Drainage Plane Behind
//    Exterior Wall Cladding" and "Continuous Load Path Provided with Connections from the Roof
//    through the Wall to the Foundation". Cited and linked, never reproduced. Its code-derived
//    dimensions were deliberately NOT printed, per the refusal above.
//
// NOT USED, and why. The HUD USER publication Structural Design Loads for One- and Two-Family
// Dwellings returned HTTP 202 with an empty body on 2026-09-20, so nothing rests on it. FEMA P-2178
// is named in the brief; its own PDF was not fetched in this pass, so no lesson asserts anything
// from it and it is not cited. The APA (Engineered Wood Association) guides and the Brick Industry
// Association technical notes stay REPORTED for reuse terms, so neither is quoted; brick veneer is
// taught only from what the Navy manual and the DOE guide actually say. No figure from any source
// is reproduced or described in detail; the course describes structure in its own words.
//
// House style, matching drew-blood-bank-course.ts and construction-math-course.ts: `section` on
// every lesson; flush-left single-line `:::reveal q ||| a`; a `## Vocabulary` block of 3 to 6
// lesson-specific terms; APA 7 `## Sources` on every lesson; a quiz per teaching section serving 5
// and pooled to the audit-course density target, plus a FINAL serving 10 placed last;
// `passingScore: 80` and `shuffleOptions: true` throughout; `explanation` + `sourceLessonSlug` on
// every question. Correct options are written SHORT and distractors long and specifically wrong, so
// check-longest-option passes by construction. No em dashes anywhere.
export const HOW_A_HOUSE_STANDS_UP_COURSE: AuthoredCourse = {
  title: "How a House Stands Up: The Load Path, the Parts, and What You Can See",
  description:
    "A house is one long argument about how to get a load to the ground, and almost nobody is ever shown the argument. So the parts stay anonymous: the thing above the window, the thing under the floor, the grey sheet on the outside of the studs. This course names every part from the footing to the ridge and says what each one is carrying. It follows the load down the path it actually takes, from roof covering to rafter or truss, to top plate, to stud, to sole plate, to rim joist and floor joist, to girder and post, to foundation wall, to footing, to soil, and it explains why a footing is wide, why a header exists, why the sheathing matters more than most people think, and why a truss is an engineering drawing made of wood. It teaches why wood moves, in which direction, and what that does to a floor and a door over one winter, using the federal Wood Handbook a learner can download for free and read for themselves. It teaches the four jobs the layers on the outside of a wall are doing: keeping water out, keeping air still, managing vapour, and slowing heat. And it teaches the thing hazard investigators keep finding, which is that houses come apart at their connections rather than in the middle of their members. What it will not do is teach anyone to frame a wall, and it says so in lesson 1 rather than in a disclaimer at the end. It gives no span, no header size, no beam size and no fastener schedule, because those are code tables and engineering for one specific house, and every sizing question in the course ends at the drawings and the building department. This is private study. It is not a trade course, it earns no credential, it approves no permit and it inspects nothing.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1 — What this course can teach, and what it cannot
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "knowledge-not-skill",
      title: "1 · Knowledge, not skill, and the difference it makes",
      section: "Section 1 · What this course can teach, and what it cannot",
      body: `This course will not teach you to frame a wall.

That belongs at the front rather than in small print at the end, because it changes what the course is for. Framing is a craft. It is learned with tools in your hands, on real material, under somebody who is watching and will stop you. Reading cannot supply it, and a course that pretends otherwise is selling a feeling of competence rather than competence.

The best witness for that is a training manual written by people whose job was training. The US Navy's *Builder 3 & 2* says of itself that "this self-study course is only one part of the total Navy training program. Practical experience, schools, selected reading, and your desire to succeed are also necessary to successfully round out a fully meaningful training program" (Naval Education and Training Professional Development and Technology Center [NETPDTC], 1994, p. i). That manual was written for people who would go straight out and build. It still put reading in its place.

**So what is knowledge worth here?** Five things, and every one of them is worth having.

1. **You can name the parts.** Anonymous parts cannot be discussed, priced, inspected or argued about. A conversation with a builder, an inspector or an insurer goes differently when you can say "the rim joist" instead of "that board".
2. **You can read a drawing far enough to find the answer.** Most of what people ask this kind of course is already written on a sheet of paper for their specific house.
3. **You know which question to ask, and who owns the answer.**
4. **You know the sequence**, so you know what is about to be covered up and when looking is still possible.
5. **You know what to look at**, which is most of what an ordinary person can usefully do about their own house.

**What this course refuses to give you.** No span, no header size, no beam size, no fastener schedule, no footing dimension. Not because they are secret, but because they belong to one specific house: its loads, its species and grade of lumber, its spacing, its snow and wind, and the code edition its jurisdiction adopted. A number remembered from a course is the worst possible way to get one, because it arrives with no conditions attached and feels like knowledge. Every sizing question here ends in the same two places: the drawings, and the building department.

**And what it is not.** This is private study. It is not a trade course, it is not an apprenticeship, it earns no credential and no card, it approves no permit, it inspects nothing, and it replaces no instructor. It is not a substitute for the Construction Training course at John Boner Neighborhood Centers.

:::reveal Why does this course say it cannot teach framing in lesson 1 rather than in a closing disclaimer? ||| Because the limit changes what the course is for, and a disclaimer at the end is one nobody reads. Framing is a craft learned with tools under supervision; reading cannot supply it.

:::reveal Where does every sizing question in this course end? ||| At the drawings for that specific house, and at the building department that adopted the code governing it.

## Vocabulary
- **Light-frame construction**: the ordinary way American houses are built, from many small repeated wood members rather than a few heavy ones.
- **Framing**: the structural skeleton of a house, and the trade that assembles it.
- **Building department**: the local government office that reviews plans, issues permits and inspects work in a given jurisdiction.
- **Load path**: the route a weight takes through a building on its way to the ground. It is the spine of this course.

## Sources
Naval Education and Training Professional Development and Technology Center. (1994). *Builder 3 & 2, Volume 2* (NAVEDTRA 14044). U.S. Navy. https://www.constructionknowledge.net/public_domain_documents/Builder_3_and_2_vol_2_NAVEDTRA_14044_1994.pdf`,
    },
    {
      slug: "where-the-numbers-come-from",
      title: "2 · Where the numbers come from, and why they are not here",
      section: "Section 1 · What this course can teach, and what it cannot",
      body: `Every real number in a house has an owner. Learn the owners and you stop needing the numbers memorised.

- **The drawings own the numbers for this house.** Sizes, spacings, directions and details for one building, drawn for that building.
- **The adopted code owns the minimums for this jurisdiction.** Not the code in general: the specific edition your state or city adopted, on a specific date.
- **The manufacturer owns the numbers for this product**, including the rating printed on a panel and the instructions in the box.
- **A qualified designer owns anything unusual**: a long span, a heavy load, a wall somebody wants gone.

Notice how often a manual written for builders hands the question straight back. On headers: "The type and size of header is shown in the blueprints. Header size is determined by the width of the opening and by how much weight is bearing down from the floor above" (NETPDTC, 1994, p. 1-19). On floor joists: "The foundation plan usually specifies the joist size, the spacing between joists, and what direction the joists should travel" (NETPDTC, 1994, p. 1-8). On fastening a sill to a foundation: "Location and building codes will dictate which to use. Always consult the job specifications before proceeding with construction" (NETPDTC, 1994, p. 1-3).

That is not evasion. It is the correct answer, given three times, by a source that had every opportunity to print a table instead.

**Why this course cannot hold the number for you.** A span depends on species and grade, on spacing, on what sits above, on snow and wind where you are, and on which code edition governs. Change one and the answer changes. Worse, a number that is right for a house in one county and wrong in the next is more dangerous than no number at all, because it feels like knowledge.

**Which code governs is a local fact, and it is findable.** States adopt a model code by rule, and the adopting rule is a public document that names the edition. Finding yours is the job of the companion course in this series, *Reading the Plan and the Code*, and it is a better habit than memorising anything.

**One code you can read for free, with a warning attached.** The federal government publishes a complete building standard at 24 CFR part 3280. It is free, it is public domain, and it is readable. It also governs **manufactured homes**, not site-built houses. This course cites it where it states a principle clearly, and says so every single time, because a learner who mistakes one for the other will meet that mistake at an inspection.

:::reveal Who owns the size of the header over your living room window? ||| The drawings for that house own it, and the adopted code and a qualified designer stand behind them. A course cannot own it, because it depends on the opening, the load above, the material and the jurisdiction.

:::reveal What must be said every time this course cites 24 CFR part 3280? ||| That it is HUD's standard for manufactured homes, not the code governing an ordinary site-built house.

## Vocabulary
- **Adopted code**: the specific edition of a model building code that a state or local government has put into law by rule, with any local amendments.
- **Specifications**: the written half of a construction document set, which governs materials and workmanship alongside the drawings.
- **Schedule**: a table on a drawing set listing repeated items, such as every door or window with its sizes.
- **Manufactured home**: a home built in a factory to the federal standard at 24 CFR part 3280, which is a different legal animal from a site-built house.

## Sources
Naval Education and Training Professional Development and Technology Center. (1994). *Builder 3 & 2, Volume 2* (NAVEDTRA 14044). U.S. Navy. https://www.constructionknowledge.net/public_domain_documents/Builder_3_and_2_vol_2_NAVEDTRA_14044_1994.pdf
*Structural design requirements*, 24 C.F.R. § 3280.305. https://www.law.cornell.edu/cfr/text/24/3280.305`,
    },
    {
      slug: "the-parts-list",
      title: "3 · The parts list, bottom to top",
      section: "Section 1 · What this course can teach, and what it cannot",
      body: `Here is the whole vocabulary of an ordinary wood-framed house, in the order the load meets it, reading upward. Every one of these gets a lesson or a paragraph later. For now, read it as a map.

**In the ground and on it.** The **footing** spreads the load onto the soil. The **foundation wall** or **stem wall** carries the house down to the footing. The **sill plate**, the lowest wooden member, sits on the foundation; the Navy manual calls it "often called the mud sill" (NETPDTC, 1994, p. 1-1). **Anchor bolts** tie it down.

**The floor.** **Floor joists** run across the building. A **rim joist** or **header joist** closes their ends. Where joists would be too long, a **girder** or beam catches them, and **posts** carry the girder down. The **subfloor** is the sheet material nailed over the joists.

**The walls.** A **sole plate** at the bottom and a **top plate** at the top, usually doubled. **Studs** stand between them. At an opening, **king studs** run full height, **jack studs** (also called trimmers) carry a **header** across the top, **cripple studs** fill above the header and below a window **sill**, and **corner posts** tie walls together. **Sheathing** covers the outside.

**The roof.** **Rafters** rise to a **ridge board**, with **ceiling joists** or **collar ties** across them, or the whole thing arrives as a **truss** with a **top chord**, a **bottom chord** and **web members**. Over that goes **roof sheathing**, then underlayment, then the covering.

**On the outside.** A **water-resistive barrier**, then the **cladding**: siding, stucco or brick veneer.

**A note on names, which will save you an argument.** The same part has several names. Rim joist, header joist and band joist are the same board. Jack stud and trimmer stud are the same stick. Sole plate, bottom plate and soleplate are the same plate, and this course spells it as two words. Mud sill and sill plate are the same member. When names disagree, the drawing's word wins, because that is the word the inspector and the supplier will use on that job.

**Further reading, named honestly.** BAM owns six commercial building books, filed under content/construction/: the Habitat for Humanity house-building book by Haun and Snyder, Larry Haun's framing book, Charles Wing's visual handbook, and the Creative Homeowner guides to home repair, plumbing and wiring. They are his own reading, and a learner may read them alongside this course. Nothing in this course comes from them, and nothing in it is a summary of them. Everything taught here is built from federal publications that carry no copyright, which is why it can live in a public code repository at all.

:::reveal Name three names for the same board that closes the ends of the floor joists. ||| Rim joist, header joist and band joist.

:::reveal Which member sits lowest in the wooden frame, directly on the foundation? ||| The sill plate, also called the mud sill.

## Vocabulary
- **Sill plate**: the lowest wooden member of the frame, resting on the foundation and anchored to it.
- **Girder**: a beam that catches floor joists partway across a building so they do not have to reach wall to wall.
- **Cripple stud**: a short stud filling the space above a header or below a rough window sill.
- **Cladding**: the outermost finish on a wall, such as siding, stucco or brick veneer.
- **Water-resistive barrier**: the sheet or coating behind the cladding whose job is to stop and drain water that gets past it.

## Sources
Naval Education and Training Professional Development and Technology Center. (1994). *Builder 3 & 2, Volume 2* (NAVEDTRA 14044). U.S. Navy. https://www.constructionknowledge.net/public_domain_documents/Builder_3_and_2_vol_2_NAVEDTRA_14044_1994.pdf`,
    },
    {
      slug: "section-1-quiz",
      title: "Section 1 quiz · Scope, numbers and names",
      section: "Section 1 · What this course can teach, and what it cannot",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What does this course say, in lesson 1, that it will not teach you to do?",
            options: [
              "Frame a wall",
              "Recognise a load-bearing wall from the pattern of the joists above it",
              "Read a wall section drawing and name the layers it shows",
              "Ask a building department which code edition governs your house",
            ],
            correctIndex: 0,
            explanation:
              "Framing is a craft learned with tools under supervision. The other three are exactly what a reading course can do, and the course does all three.",
            sourceLessonSlug: "knowledge-not-skill",
          },
          {
            prompt: "Why is the limit stated in lesson 1 rather than as a closing disclaimer?",
            options: [
              "A closing disclaimer goes unread",
              "Because the publisher requires a warning to appear before any paid content is shown",
              "Because a limit stated late would invalidate the quiz scores recorded earlier in the course",
              "Because the first lesson is the only one an instructor is permitted to edit later",
            ],
            correctIndex: 0,
            explanation:
              "The limit changes what the course is for, so it belongs where it can shape how the rest is read.",
            sourceLessonSlug: "knowledge-not-skill",
          },
          {
            prompt: "What does the Navy's own training manual say about self-study courses like itself?",
            options: [
              "It is only one part",
              "That it replaces supervised instruction for any sailor who scores above the passing mark",
              "That it certifies the reader as qualified to supervise light-frame construction work",
              "That practical experience is useful but no longer necessary once the text is mastered",
            ],
            correctIndex: 0,
            explanation:
              "The manual names practical experience, schools, selected reading and the reader's own desire as also necessary. A manual written for people who would go out and build still put reading in its place.",
            sourceLessonSlug: "knowledge-not-skill",
          },
          {
            prompt: "What does the course say is the first thing knowledge of the parts actually buys a learner?",
            options: [
              "The names",
              "A defensible opinion about whether a contractor's price for the work is fair",
              "The ability to estimate how much lumber a given floor frame will need",
              "Standing to challenge an inspector's finding at a permit hearing",
            ],
            correctIndex: 0,
            explanation:
              "Anonymous parts cannot be discussed, priced, inspected or argued about. Naming them changes every conversation that follows.",
            sourceLessonSlug: "knowledge-not-skill",
          },
          {
            prompt: "Which of these does the course refuse to give anywhere in its lessons?",
            options: [
              "A header size",
              "The name of the member that sits directly on top of the foundation wall",
              "The reason a footing is wider than the wall standing on it",
              "The direction in which wood shrinks most as it dries",
            ],
            correctIndex: 0,
            explanation:
              "No span, header size, beam size, fastener schedule or footing dimension appears anywhere. The other three are exactly the kind of thing the course does teach.",
            sourceLessonSlug: "knowledge-not-skill",
          },
          {
            prompt: "What credential does finishing this course earn?",
            options: [
              "None",
              "A certificate accepted as evidence of pre-apprenticeship training by most trade programs",
              "Credit toward the classroom hours required for a residential contractor's licence",
              "A card recognised on jobsites as proof of basic construction safety training",
            ],
            correctIndex: 0,
            explanation:
              "It is private study. It earns no credential and no card, approves no permit, inspects nothing, and replaces no instructor.",
            sourceLessonSlug: "knowledge-not-skill",
          },
          {
            prompt: "What does the course say about the Construction Training course at John Boner Neighborhood Centers?",
            options: [
              "It substitutes for none of it",
              "That it covers the same modules in the same order and can be taken instead",
              "That completing this course shortens the hours required by that program",
              "That this course was written as the assigned reading for that program",
            ],
            correctIndex: 0,
            explanation:
              "The course replaces no instructor and is not a substitute for that program. Private study sits beside training; it does not stand in for it.",
            sourceLessonSlug: "knowledge-not-skill",
          },
          {
            prompt: "Why does the course treat a remembered number as worse than no number?",
            options: [
              "It loses its conditions",
              "Because learners tend to transpose digits when recalling measurements under pressure",
              "Because building departments refuse to discuss any figure a homeowner quotes from memory",
              "Because the tables that produce such numbers are revised every single year",
            ],
            correctIndex: 0,
            explanation:
              "A number arrives attached to a species, a grade, a spacing, a load and a code edition. Remembered alone, it feels like knowledge while carrying none of that.",
            sourceLessonSlug: "knowledge-not-skill",
          },
          {
            prompt: "Where does every sizing question in this course end?",
            options: [
              "The drawings and the building department",
              "In the appendix of the Wood Handbook, which tabulates the values for each species",
              "With the supplier, whose lumber grade stamp settles what the member can carry",
              "With the manufacturer of the fasteners used to make the connection",
            ],
            correctIndex: 0,
            explanation:
              "The drawings hold the numbers for that house, and the building department holds the code that governs it. That pairing is repeated throughout the course.",
            sourceLessonSlug: "knowledge-not-skill",
          },
          {
            prompt: "What is a load path?",
            options: [
              "A weight's route to the ground",
              "The sequence in which a crew installs framing members on a given day",
              "The maximum weight a single framing member is permitted to carry",
              "The corridor kept clear on a site so material can be moved to where it is needed",
            ],
            correctIndex: 0,
            explanation:
              "It is the route a weight takes through a building on its way to the ground, and it is the spine of this course.",
            sourceLessonSlug: "knowledge-not-skill",
          },
          {
            prompt: "What makes construction light-frame rather than heavy?",
            options: [
              "Many small repeated members",
              "The use of engineered products rather than lumber sawn directly from a log",
              "A total building weight below the threshold at which a permit becomes necessary",
              "Framing assembled on the ground and lifted into place rather than built in position",
            ],
            correctIndex: 0,
            explanation:
              "Light-frame construction is the ordinary American way of building: many small repeated wood members rather than a few heavy ones.",
            sourceLessonSlug: "knowledge-not-skill",
          },
          {
            prompt: "According to lesson 1, what happens to a part that has no name?",
            options: [
              "It cannot be discussed",
              "It is left out of the drawings, since only named members are scheduled",
              "It is treated as non-structural by default until an engineer says otherwise",
              "It cannot be ordered, because suppliers price only members with standard names",
            ],
            correctIndex: 0,
            explanation:
              "Anonymous parts cannot be discussed, priced, inspected or argued about. That is why a parts list comes before the mechanics.",
            sourceLessonSlug: "knowledge-not-skill",
          },
          {
            prompt: "Why does the course say knowing the build sequence is worth something?",
            options: [
              "You know what is about to be hidden",
              "Because the sequence determines which trade is legally responsible for a defect",
              "Because a permit is issued one stage at a time and expires between stages",
              "Because materials must be ordered in the same order the work is performed",
            ],
            correctIndex: 0,
            explanation:
              "Knowing the sequence tells you when looking is still possible, which is most of what an ordinary person can usefully do about a house being built.",
            sourceLessonSlug: "knowledge-not-skill",
          },
          {
            prompt: "What is a building department?",
            options: [
              "The local permit and inspection office",
              "The state agency that writes the model code later adopted by cities",
              "The trade association that certifies residential contractors in a given region",
              "The office within a construction firm that prepares drawings for submission",
            ],
            correctIndex: 0,
            explanation:
              "It is the local government office that reviews plans, issues permits and inspects work in a jurisdiction. It is half of the course's standing answer.",
            sourceLessonSlug: "knowledge-not-skill",
          },
          {
            prompt: "What does this course inspect?",
            options: [
              "Nothing",
              "Any photographs a learner uploads of their own framing, through the instructor tools",
              "The drawings a learner submits, which are reviewed before the final quiz unlocks",
              "Work completed by learners who have passed every section quiz at eighty percent",
            ],
            correctIndex: 0,
            explanation:
              "It approves no permit and inspects nothing. Inspection is an act of authority a course does not have.",
            sourceLessonSlug: "knowledge-not-skill",
          },
          {
            prompt: "What kind of document is the Builder 3 & 2 manual quoted in lesson 1?",
            options: [
              "A Navy training manual",
              "A commercial framing textbook whose publisher granted permission for this course",
              "A federal building code covering residential construction on military installations",
              "A contractor's field guide written by a trade association for its members",
            ],
            correctIndex: 0,
            explanation:
              "It is a US Navy nonresident training course, released for public distribution, which is why this course may build on it at all.",
            sourceLessonSlug: "knowledge-not-skill",
          },
          {
            prompt: "In the Navy preface quoted in lesson 1, what sits alongside practical experience as also necessary?",
            options: [
              "Schools and selected reading",
              "Supervised apprenticeship hours logged with a licensed journeyman over two years",
              "Annual refresher testing administered by the reader's own command",
              "Membership of a trade organisation that maintains the reader's certification",
            ],
            correctIndex: 0,
            explanation:
              "The preface names practical experience, schools, selected reading and the reader's own desire to succeed.",
            sourceLessonSlug: "knowledge-not-skill",
          },
          {
            prompt: "How does lesson 1 describe the honest offer this course makes?",
            options: [
              "Knowledge, not skill",
              "Skill in the parts of framing that can be practised without tools or material",
              "Enough supervised practice to make a first attempt at a small structure safe",
              "A qualification in reading drawings, separate from any framing ability",
            ],
            correctIndex: 0,
            explanation:
              "Knowledge is what reading can deliver, and the course says so plainly rather than selling a feeling of competence.",
            sourceLessonSlug: "knowledge-not-skill",
          },
          {
            prompt: "Who owns the numbers for one specific house?",
            options: [
              "Its drawings",
              "The building department, which keeps the authoritative copy of every dimension",
              "The lumber supplier, whose grade stamps determine what each member may carry",
              "The homeowner, who may change any dimension that is not load bearing",
            ],
            correctIndex: 0,
            explanation:
              "Sizes, spacings, directions and details are drawn for one building. That is why the course keeps sending questions back to them.",
            sourceLessonSlug: "where-the-numbers-come-from",
          },
          {
            prompt: "Who owns the minimums for a jurisdiction?",
            options: [
              "The adopted code",
              "The model code publisher, whose latest edition applies as soon as it is issued",
              "The state licensing board that examines and registers residential contractors",
              "The insurer of the building, whose underwriting rules set the floor",
            ],
            correctIndex: 0,
            explanation:
              "Not the code in general: the specific edition a state or city adopted, on a specific date, with any local amendments.",
            sourceLessonSlug: "where-the-numbers-come-from",
          },
          {
            prompt: "Who owns the numbers that apply to one manufactured product?",
            options: [
              "Its manufacturer",
              "The retailer, who is responsible for confirming the product suits the intended use",
              "The designer of the building, who selects products and therefore warrants them",
              "The testing laboratory that issued the product's original certification",
            ],
            correctIndex: 0,
            explanation:
              "The rating printed on a panel and the instructions in the box belong to the maker, and they travel with that product.",
            sourceLessonSlug: "where-the-numbers-come-from",
          },
          {
            prompt: "Who owns the answer to anything unusual, such as removing a wall?",
            options: [
              "A qualified designer",
              "The contractor performing the work, who accepts liability by doing it",
              "The building department, which will design a solution on request",
              "The original builder of the house, who holds the structural calculations",
            ],
            correctIndex: 0,
            explanation:
              "A long span, a heavy load or a wall somebody wants gone is an engineering question for a specific building, and the course never answers it.",
            sourceLessonSlug: "where-the-numbers-come-from",
          },
          {
            prompt: "According to the Navy manual, what determines header size?",
            options: [
              "The opening and the load above",
              "The thickness of the wall, since a header must match the width of the studs",
              "The species of lumber available on site when the wall is framed",
              "The height of the ceiling, because a taller wall concentrates more weight",
            ],
            correctIndex: 0,
            explanation:
              "The manual says header size is determined by the width of the opening and by how much weight is bearing down from the floor above.",
            sourceLessonSlug: "where-the-numbers-come-from",
          },
          {
            prompt: "Where does the Navy manual say the type and size of header is shown?",
            options: [
              "In the blueprints",
              "In the manufacturer's literature supplied with the window or door unit",
              "In the specifications, which govern the drawings wherever they disagree",
              "On the grade stamp of the lumber selected for the opening",
            ],
            correctIndex: 0,
            explanation:
              "That sentence is the whole reason a course cannot hold a header size for you. The document that owns it is drawn for one house.",
            sourceLessonSlug: "where-the-numbers-come-from",
          },
          {
            prompt: "What three things does the Navy manual say the foundation plan usually specifies about floor joists?",
            options: [
              "Size, spacing and direction",
              "Species, grade and moisture content at the time of installation",
              "Manufacturer, fastener type and the order of installation",
              "Depth, camber and the permitted deflection under a full live load",
            ],
            correctIndex: 0,
            explanation:
              "Size, the spacing between joists, and what direction the joists should travel. All three are drawing questions.",
            sourceLessonSlug: "where-the-numbers-come-from",
          },
          {
            prompt: "What does the Navy manual say dictates the method of fastening a sill plate to a foundation?",
            options: [
              "Location and building codes",
              "The weight of the structure above, calculated by the framing crew before layout",
              "The season, because anchors set in cold weather behave differently",
              "The foundation contractor, who chooses the method when the concrete is poured",
            ],
            correctIndex: 0,
            explanation:
              "The manual adds: always consult the job specifications before proceeding with construction. That is the correct answer, not an evasion.",
            sourceLessonSlug: "where-the-numbers-come-from",
          },
          {
            prompt: "What kind of housing does the federal standard at 24 CFR part 3280 govern?",
            options: [
              "Manufactured homes",
              "Every one- and two-family dwelling built anywhere in the United States",
              "Houses financed with a federally insured mortgage, whoever built them",
              "Site-built houses in states that have adopted no code of their own",
            ],
            correctIndex: 0,
            explanation:
              "It is HUD's standard for manufactured homes. A learner who mistakes it for the code governing a site-built house meets that mistake at an inspection.",
            sourceLessonSlug: "where-the-numbers-come-from",
          },
          {
            prompt: "What is unusual about 24 CFR part 3280 compared with the model building codes?",
            options: [
              "It is free to read",
              "It is revised continuously rather than republished as dated editions",
              "It applies without any state having to adopt it into law first",
              "It is written by a trade association rather than by a government agency",
            ],
            correctIndex: 0,
            explanation:
              "It is a complete, free, public-domain building standard, which is exactly why this course can quote it where the model codes stay closed.",
            sourceLessonSlug: "where-the-numbers-come-from",
          },
          {
            prompt: "Why can a course not hold a span figure for a learner?",
            options: [
              "Too many conditions change it",
              "Because span tables are copyrighted and may not be reproduced in teaching material",
              "Because spans are measured differently in every state, so no figure transfers",
              "Because the figure changes each time a house settles onto its foundation",
            ],
            correctIndex: 0,
            explanation:
              "Species, grade, spacing, what sits above, snow and wind, and the governing code edition all move the answer. Change one and the number is wrong.",
            sourceLessonSlug: "where-the-numbers-come-from",
          },
          {
            prompt: "Which course in this series teaches a learner to find the code edition governing their own house?",
            options: [
              "Reading the Plan and the Code",
              "Construction Math, which teaches the arithmetic needed to apply a code table",
              "Construction Safety, which teaches the federal standards that govern a jobsite",
              "This course, in its final section on reading a wall section drawing",
            ],
            correctIndex: 0,
            explanation:
              "That is the companion course in the same series, and it is where every code question in this course is sent.",
            sourceLessonSlug: "where-the-numbers-come-from",
          },
          {
            prompt: "What is an adopted code?",
            options: [
              "The edition made law locally",
              "A model code that a publisher has updated and released for general use",
              "Any code an architect has chosen to design a particular building against",
              "The set of rules an inspector applies based on their own professional judgment",
            ],
            correctIndex: 0,
            explanation:
              "A specific edition put into law by a state or local rule, with any local amendments. Which one governs you is a local fact you can look up.",
            sourceLessonSlug: "where-the-numbers-come-from",
          },
          {
            prompt: "What are the specifications in a construction document set?",
            options: [
              "The written half",
              "The list of every dimension too small to letter on the drawings themselves",
              "The manufacturer's instructions collected and bound with the drawings",
              "The permit conditions a building department attaches when it approves a plan",
            ],
            correctIndex: 0,
            explanation:
              "Specifications govern materials and workmanship alongside the drawings. The two are read together.",
            sourceLessonSlug: "where-the-numbers-come-from",
          },
          {
            prompt: "What is a schedule on a drawing set?",
            options: [
              "A table of repeated items",
              "The calendar showing which trade works in which week of the project",
              "The order in which inspections must be requested as work proceeds",
              "The list of drawings included in the set, with their revision dates",
            ],
            correctIndex: 0,
            explanation:
              "A door or window schedule lists every such item with its sizes, which is often where a rough opening dimension is actually written.",
            sourceLessonSlug: "where-the-numbers-come-from",
          },
          {
            prompt: "What must this course say every time it cites 24 CFR part 3280?",
            options: [
              "That it covers manufactured homes",
              "That the section quoted has not been amended since the date it was read",
              "That the reader should confirm the quotation against a printed copy",
              "That it was written by the Department of Energy rather than by HUD",
            ],
            correctIndex: 0,
            explanation:
              "The warning travels with the citation every time, because the standard is real and free and governs a different kind of building.",
            sourceLessonSlug: "where-the-numbers-come-from",
          },
          {
            prompt: "How many separate times does lesson 2 show the Navy manual handing a sizing question back to the drawings or the code?",
            options: [
              "Three",
              "Once, in a single footnote about header sizes in load-bearing walls",
              "Seven, one for each structural member the manual describes in that chapter",
              "Never directly, which is why the lesson has to infer it from context",
            ],
            correctIndex: 0,
            explanation:
              "Headers, floor joists and sill fastening. A source that had every opportunity to print a table instead pointed elsewhere three times.",
            sourceLessonSlug: "where-the-numbers-come-from",
          },
          {
            prompt: "What single question does lesson 2 teach a learner to ask of any number met in a house?",
            options: [
              "Who owns this number?",
              "Is this number a minimum, a maximum or a typical value in ordinary practice?",
              "How old is this number, and has the figure been revised since it was written?",
              "Would a different material give a better result at the same price?",
            ],
            correctIndex: 0,
            explanation:
              "Learn the owners, and the numbers stop needing to be memorised. The drawings, the code, the manufacturer and a qualified designer each own their own.",
            sourceLessonSlug: "where-the-numbers-come-from",
          },
          {
            prompt: "What spreads a building's load onto the soil?",
            options: [
              "The footing",
              "The sill plate, which distributes weight evenly along the top of the foundation",
              "The subfloor, which ties the joists together into one stiff platform",
              "The girder, which collects the floor load and carries it to the walls",
            ],
            correctIndex: 0,
            explanation:
              "The footing sits at the base of the foundation and spreads the load over a larger area of ground.",
            sourceLessonSlug: "the-parts-list",
          },
          {
            prompt: "Which is the lowest wooden member of the frame?",
            options: [
              "The sill plate",
              "The rim joist, which closes the ends of the floor joists all the way around",
              "The sole plate, which every stud in the exterior wall stands on",
              "The subfloor, which is laid before any wall is raised",
            ],
            correctIndex: 0,
            explanation:
              "It rests directly on the foundation and is anchored to it, which makes it the point where wood meets masonry.",
            sourceLessonSlug: "the-parts-list",
          },
          {
            prompt: "What else is a sill plate called?",
            options: [
              "The mud sill",
              "The band plate, because it runs as a continuous band around the foundation",
              "The base rail, a term the drawings use where the wall meets concrete",
              "The starter plate, since it is the first member set on the job",
            ],
            correctIndex: 0,
            explanation:
              "The Navy manual records the same member under both names, which is a good early lesson in how many names one part can carry.",
            sourceLessonSlug: "the-parts-list",
          },
          {
            prompt: "Which member closes the ends of the floor joists?",
            options: [
              "The rim joist",
              "The girder, which catches the joists where they would otherwise be too long",
              "The sole plate, which sits on the subfloor once the floor is complete",
              "The bridging, which is fitted between the joists partway along their length",
            ],
            correctIndex: 0,
            explanation:
              "It runs along the outside walls and closes the joist ends, and it does more work than its plain appearance suggests.",
            sourceLessonSlug: "the-parts-list",
          },
          {
            prompt: "Which set of words all name the same board?",
            options: [
              "Rim, header and band joist",
              "Girder, beam and bridging, which are used interchangeably on drawings",
              "Stud, cripple and trimmer, which differ only in where they are installed",
              "Sheathing, subfloor and underlayment, which are the same panel in three places",
            ],
            correctIndex: 0,
            explanation:
              "Three regional names for the joist that closes the ends of the others. When names disagree, the drawing's word wins.",
            sourceLessonSlug: "the-parts-list",
          },
          {
            prompt: "What catches floor joists that would otherwise have to reach wall to wall?",
            options: [
              "A girder",
              "A rim joist, which runs across the middle of the building at right angles",
              "Bridging, which stiffens the joists enough to double what they can span",
              "The subfloor, which spreads the load between joists once it is nailed down",
            ],
            correctIndex: 0,
            explanation:
              "A girder, also called a beam, gives the joists an intermediate support partway across the building.",
            sourceLessonSlug: "the-parts-list",
          },
          {
            prompt: "What carries a girder's load down to the footing?",
            options: [
              "Posts",
              "Studs, which continue below the floor line to reach the foundation",
              "The rim joist, which transfers the girder load out to the foundation walls",
              "Bridging, which distributes the load sideways to the nearest bearing wall",
            ],
            correctIndex: 0,
            explanation:
              "Posts, of wood or steel, stand under the girder. The Navy manual notes that their size depends on the loads carried.",
            sourceLessonSlug: "the-parts-list",
          },
          {
            prompt: "What is the sheet material nailed over the floor joists called?",
            options: [
              "The subfloor",
              "The underlayment, which is fixed directly to the joists before anything else",
              "The decking, a term reserved for the panels laid over a roof frame",
              "The diaphragm, which is the name used for any panel in a floor",
            ],
            correctIndex: 0,
            explanation:
              "Also called rough flooring. It strengthens the whole floor unit and gives the walls something to be raised onto.",
            sourceLessonSlug: "the-parts-list",
          },
          {
            prompt: "What is the plate at the bottom of a framed wall called?",
            options: [
              "The sole plate",
              "The sill plate, the same member that sits on the foundation below",
              "The base chord, matching the bottom chord of a roof truss above",
              "The ledger, which is fastened to the subfloor before the studs are set",
            ],
            correctIndex: 0,
            explanation:
              "Sole plate and bottom plate are the same member. It is not the sill plate, which sits lower and on masonry.",
            sourceLessonSlug: "the-parts-list",
          },
          {
            prompt: "Which wall plate is normally doubled?",
            options: [
              "The top plate",
              "The sole plate, so that the wall has a level base on an uneven subfloor",
              "The sill plate, so the anchor bolts have enough wood to hold against",
              "Both plates equally, since the wall is symmetrical top to bottom",
            ],
            correctIndex: 0,
            explanation:
              "A double top plate strengthens the upper section of the wall, helps carry the joists and rafters above, and ties the walls together at the corners.",
            sourceLessonSlug: "the-parts-list",
          },
          {
            prompt: "Which studs carry the ends of a header?",
            options: [
              "Jack studs",
              "King studs, which run unbroken from the sole plate to the top plate",
              "Cripple studs, which are cut short to fit above the header",
              "Corner posts, which are built up wherever one wall meets another",
            ],
            correctIndex: 0,
            explanation:
              "Jack studs fit between the sole plate and the underside of the header, so the header's load runs down through them.",
            sourceLessonSlug: "the-parts-list",
          },
          {
            prompt: "What is another name for a jack stud?",
            options: [
              "A trimmer",
              "A cripple, used where the stud is shorter than a full-height member",
              "A king stud, which is the same member described from the other side",
              "A post, since it carries a concentrated load rather than a shared one",
            ],
            correctIndex: 0,
            explanation:
              "Jack stud and trimmer stud are the same stick. Both names appear in the sources this course was built from.",
            sourceLessonSlug: "the-parts-list",
          },
          {
            prompt: "Which studs run full height on each side of a rough opening?",
            options: [
              "King studs",
              "Jack studs, which stop at the underside of the header they support",
              "Cripple studs, which run from the header up to the double top plate",
              "Corner posts, which are only built where two walls meet at an angle",
            ],
            correctIndex: 0,
            explanation:
              "King studs run plate to plate beside the opening, and the jacks are nailed to them.",
            sourceLessonSlug: "the-parts-list",
          },
          {
            prompt: "What are the short studs above a header or below a rough window sill called?",
            options: [
              "Cripples",
              "Jacks, because they are jacked into place after the header is set",
              "Blocks, which is the general name for any short piece between studs",
              "Ribbands, which are let into the studs to carry short members",
            ],
            correctIndex: 0,
            explanation:
              "Cripple studs fill those spaces and pass the load from the plate above down onto the header.",
            sourceLessonSlug: "the-parts-list",
          },
          {
            prompt: "What are the three kinds of member that make up a roof truss?",
            options: [
              "Top chord, bottom chord and webs",
              "Rafter, ceiling joist and collar tie, renamed once they are joined by gussets",
              "King post, queen post and strut, which appear in every truss shape",
              "Purlin, ridge and hip, which together form the frame the covering sits on",
            ],
            correctIndex: 0,
            explanation:
              "The top chords serve as rafters, the bottom chord acts as a ceiling joist, and the webs run between them.",
            sourceLessonSlug: "the-parts-list",
          },
          {
            prompt: "What goes on immediately over the rafters or truss top chords?",
            options: [
              "Roof sheathing",
              "The cladding, which is the general name for any outer covering on a house",
              "The water-resistive barrier, which is always the first layer above framing",
              "The ceiling, which is fixed to the underside of the same members",
            ],
            correctIndex: 0,
            explanation:
              "Roof sheathing first, then underlayment, then the roof covering. Each layer has a different job.",
            sourceLessonSlug: "the-parts-list",
          },
          {
            prompt: "What is cladding?",
            options: [
              "The outermost wall finish",
              "The structural panel fixed to the studs to keep the wall from leaning",
              "The sheet or coating whose job is to stop and drain water",
              "The insulation placed between the studs of an exterior wall",
            ],
            correctIndex: 0,
            explanation:
              "Siding, stucco or brick veneer. The Navy manual notes that wall sheathing generally does not include the finished surface, which is placed over it.",
            sourceLessonSlug: "the-parts-list",
          },
          {
            prompt: "When two names for the same part disagree, which one does this course say wins?",
            options: [
              "The drawing's word",
              "The oldest term, since the trade's traditional names are the most precise",
              "The supplier's term, because that is the name the material is ordered under",
              "The regional term used where the house stands, whatever the drawings say",
            ],
            correctIndex: 0,
            explanation:
              "That is the word the inspector and the supplier will use on that job, which makes it the useful one.",
            sourceLessonSlug: "the-parts-list",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2 — The load path
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "what-a-load-is",
      title: "4 · Dead load, live load, and the ones that arrive sideways",
      section: "Section 2 · The load path, roof to soil",
      body: `Before you can follow a load you have to know what is being followed. There are only a few kinds, and they behave differently enough that a house has to answer each one separately.

**Dead load is the house itself.** The Navy's manual puts it plainly: "The total dead load is the total weight of the structure, which gradually increases as the structure rises and remains constant once it is completed" (Naval Education and Training Professional Development and Technology Center [NETPDTC], 1993, p. 2-1). Shingles, sheathing, framing, drywall, tile, the cast iron bath. Once the house is finished, its dead load stops changing, unless somebody adds to it. This is why a new stone counter or a second layer of roofing is a structural event and not just a purchase.

**Live load is everything that moves.** The same page: "The total live load is the total weight of movable objects (such as people, furniture, and bridge traffic) the structure happens to be supporting at a particular instant" (NETPDTC, 1993, p. 2-1). The floor-framing chapter of the companion volume says the same thing in household terms: the dead load is the weight of the floor unit's own material, and "the live load is the weight created by people, furniture, appliances, and so forth" (NETPDTC, 1994, p. 1-6). Note *at a particular instant*. Live load is a guess about a worst afternoon.

**Snow is a live load that arrives by geography.** The manual's own reason for designing differently in different places is that in a temperate zone "the roof of a structure must be sturdy enough not to collapse under the weight of snow and ice" (NETPDTC, 1993, p. 2-1). A roof in Indiana and the same roof in Florida are not the same roof, even drawn identically.

**Wind does not push down.** It pushes sideways, it pulls, and on a roof it lifts. HUD's standard for manufactured homes makes the consequence explicit, and it is worth reading even though it governs a different kind of building: "roof live or snow load and floor live loads shall not be considered as resisting the overturning moment due to wind" (24 C.F.R. § 3280.305). In plain words, you are not allowed to count the furniture as ballast. The house has to be held down by its own structure and its connections.

**Earthquakes also arrive sideways.** A DOE guide describes the job of a continuous load path as transferring both vertical loads, gravity and wind uplift, and horizontal loads to the ground, so the building stays intact in high-wind and seismic events (U.S. Department of Energy [DOE], n.d.-a).

So the honest summary is that a house resists loads in three directions: **down**, **sideways** and **up**. Almost everything a layperson notices, and almost everything this course names, is about the first. Sections 5, 6 and 8 are about the other two, and they are where houses actually fail.

:::reveal What is the difference between dead load and live load? ||| Dead load is the weight of the structure itself, which stops changing once the building is finished. Live load is the weight of movable things, such as people, furniture and appliances, at a particular instant.

:::reveal Why does HUD's manufactured home standard forbid counting floor live load as resistance to wind overturning? ||| Because the furniture might not be there. The house has to be held down by its own structure and connections, not by its contents.

## Vocabulary
- **Dead load**: the permanent weight of the building itself, constant once construction is finished.
- **Live load**: the weight of movable contents and occupants at any given instant.
- **Uplift**: the upward force wind exerts on a roof, which tries to lift it off the walls.
- **Overturning**: the tipping action of a sideways force on a whole building, resisted by weight and by anchorage.
- **Seismic load**: the sideways force an earthquake puts into a building through its foundation.

## Sources
Naval Education and Training Professional Development and Technology Center. (1993). *Builder 3 & 2, Volume 1* (NAVEDTRA 14043). U.S. Navy. https://www.militarynewbie.com/wp-content/uploads/2013/11/US-Navy-course-Builder-3-2-Volume-1-NAVEDTRA-14043.pdf
Naval Education and Training Professional Development and Technology Center. (1994). *Builder 3 & 2, Volume 2* (NAVEDTRA 14044). U.S. Navy. https://www.constructionknowledge.net/public_domain_documents/Builder_3_and_2_vol_2_NAVEDTRA_14044_1994.pdf
*Structural design requirements*, 24 C.F.R. § 3280.305. https://www.law.cornell.edu/cfr/text/24/3280.305
U.S. Department of Energy. (n.d.-a). *Continuous load path provided with connections from the roof through the wall to the foundation*. Building America Solution Center, Pacific Northwest National Laboratory. https://basc.pnnl.gov/resource-guides/continuous-load-path-provided-connections-roof-through-wall-foundation`,
    },
    {
      slug: "roof-to-soil",
      title: "5 · The path from ridge to soil, named part by named part",
      section: "Section 2 · The load path, roof to soil",
      body: `Here is the whole idea of the course in one sentence, written by somebody else first: "The live loads in a structure are transmitted through the various load-bearing structural members to the ultimate support of the earth. Immediate or direct support for the live loads is first provided by horizontal members. The horizontal members are, in turn, supported by vertical members. Finally, the vertical members are supported by foundations or footings, which are supported by the earth" (NETPDTC, 1993, p. 2-1).

Read that again and notice the rhythm: **horizontal, vertical, horizontal, vertical, ground**. That alternation is the whole structure of a house. Something spans, something stands, something spans, something stands. The same page adds the version for a roof: "The weight of the roof material is distributed over the top supporting members and transferred through all joining members to the soil" (NETPDTC, 1993, p. 2-1).

**Now walk it down, naming as you go.** Snow lands on the roof covering. The covering rests on roof sheathing, which spans between **rafters** or the **top chords** of trusses. Those slope down and bear on the **top plate** of the exterior wall. The top plate hands the load to the **studs**, which stand on the **sole plate**. The sole plate sits on the **subfloor**, which spans between **floor joists**. The joists bear at one end on the wall below and at the other on a **girder**, closed at their outer ends by the **rim joist**. The girder is carried by **posts**. Everything eventually reaches the **sill plate** on the **foundation wall**, which stands on the **footing**, which spreads the load into the **soil**.

**Where a truss changes the story.** A trussed roof does not put its load on the middle of the house at all. The Navy manual is exact: "A roof truss is an engineered structural frame resting on two outside walls of a building. The load carried by the truss is transferred to these outside walls" (NETPDTC, 1994, p. 2-39). That one sentence explains why a trussed house often has large open interior spaces and why its interior walls may be carrying almost nothing. Section 6 takes it further, and lesson 6 explains why *may* is doing a lot of work in that sentence.

**Every arrow is a joint.** The path above has about a dozen handovers, and every one of them is a connection someone made. HUD's manufactured home standard, again a different kind of building but a clear statement, requires a home to be "designed and constructed as a completely integrated structure capable of sustaining the design load requirements of this part" and capable of "transmitting these loads to stabilizing devices" (24 C.F.R. § 3280.305). *Integrated* is the operative word. Section 8 is about what happens when one handover fails.

:::reveal What is the repeating rhythm of a load path through a house? ||| Horizontal member, then vertical member, then horizontal member, then vertical member, and finally the footing and the soil. Something spans, then something stands, over and over.

:::reveal Where does a roof truss put its load? ||| On the two outside walls it rests on. The load carried by the truss is transferred to those walls rather than to anything in the middle of the house.

## Vocabulary
- **Span**: what a horizontal member does between its supports, and the distance it covers doing it.
- **Bear**: to rest on and pass load into something. A joist bears on a wall or a girder.
- **Top plate**: the horizontal member capping a stud wall, which collects the load from above and hands it to the studs.
- **Rim joist**: the joist closing the ends of the floor joists along the outside walls.
- **Integrated structure**: a building whose members and connections work as one system rather than as separate parts.

## Sources
Naval Education and Training Professional Development and Technology Center. (1993). *Builder 3 & 2, Volume 1* (NAVEDTRA 14043). U.S. Navy. https://www.militarynewbie.com/wp-content/uploads/2013/11/US-Navy-course-Builder-3-2-Volume-1-NAVEDTRA-14043.pdf
Naval Education and Training Professional Development and Technology Center. (1994). *Builder 3 & 2, Volume 2* (NAVEDTRA 14044). U.S. Navy. https://www.constructionknowledge.net/public_domain_documents/Builder_3_and_2_vol_2_NAVEDTRA_14044_1994.pdf
*Structural design requirements*, 24 C.F.R. § 3280.305. https://www.law.cornell.edu/cfr/text/24/3280.305`,
    },
    {
      slug: "bearing-and-not-bearing",
      title: "6 · Load bearing, and the wall somebody wants gone",
      section: "Section 2 · The load path, roof to soil",
      body: `"Load bearing" is not a property of a wall's appearance. It is a statement about what is resting on it.

The Navy manual classifies both girders and partitions the same way. On girders: "Bearing girders must support a wall framed directly above, as well as the live load and dead load of the floor. Nonbearing girders support just the dead and live loads of the floor system directly above" (NETPDTC, 1994, p. 1-6). On walls: "Partitions are either bearing or nonbearing. Bearing partitions support the ends of the floor joists or ceiling joists. Nonbearing partitions run in the same direction as the joists and therefore carry little weight from the floor or ceiling above" (NETPDTC, 1994, p. 1-17).

**That gives you the one clue an ordinary person can actually read: which way do the joists run?** A wall that sits under the *ends* of the joists above is a candidate for bearing. A wall that runs *parallel* to the joists above it is a candidate for carrying very little. In a basement or an unfinished attic you can often see the direction for yourself.

**Now here is why that clue is not an answer.** Four things routinely break it.

1. **You cannot see what is above the ceiling.** A wall parallel to the joists may still sit under a post, a girder end, or a concentrated load from a floor two storeys up.
2. **The manual itself records the exception.** "Joists should be doubled under partitions running in the same direction as the joists" (NETPDTC, 1994, p. 1-8). A doubled joist under a parallel wall means the builder expected that wall to be there, which is a fact about the design you were not told.
3. **A trussed roof changes everything, and only sometimes.** "Roof trusses also eliminate interior bearing partitions because trusses are self-supporting" (NETPDTC, 1994, p. 2-39). That is true of the roof load. It says nothing about a floor above, and nothing about the walls at the ends of the trusses.
4. **Removing a wall removes more than bearing.** A wall also braces the house against sideways forces, which is section 5's subject. A wall can be carrying almost no weight and still be holding the building square.

**So the honest answer to "can I take this wall out?" is always the same.** Have somebody qualified look at the actual house, and pull a permit. Not because the course is being cautious for its own sake, but because the question is about one building, the evidence is hidden inside it, and the failure mode is a ceiling coming down onto the room you were standing in. The same applies to cutting a hole through a joist, a truss or a beam to run a pipe. Somebody qualified, and a permit.

:::reveal What single clue tells you a wall is a candidate for being load bearing? ||| Whether the joists above it run into it end on. A wall under the ends of the joists is a candidate for bearing; a wall parallel to them may carry little.

:::reveal Why is that clue not enough to act on? ||| Because you cannot see what is above the ceiling, because joists are doubled under some parallel walls, because a trussed roof only removes the roof load, and because a wall may be bracing the house even when it carries almost no weight.

## Vocabulary
- **Bearing partition**: an interior wall that supports the ends of floor or ceiling joists above it.
- **Nonbearing partition**: an interior wall running parallel to the joists above, carrying little weight from them.
- **Point load**: a load concentrated at one spot, such as the end of a girder or the foot of a post, rather than spread along a member.
- **Self-supporting**: of a truss, spanning wall to wall without needing support in between.

## Sources
Naval Education and Training Professional Development and Technology Center. (1994). *Builder 3 & 2, Volume 2* (NAVEDTRA 14044). U.S. Navy. https://www.constructionknowledge.net/public_domain_documents/Builder_3_and_2_vol_2_NAVEDTRA_14044_1994.pdf`,
    },
    {
      slug: "section-2-quiz",
      title: "Section 2 quiz · Loads and the path they take",
      section: "Section 2 · The load path, roof to soil",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is dead load?",
            options: [
              "The weight of the structure itself",
              "The weight a structure carried before it was last altered or extended",
              "The portion of a load that a member carries without any deflection at all",
              "The weight of material stored on site and not yet built into the house",
            ],
            correctIndex: 0,
            explanation:
              "It grows as the structure rises and stays constant once the building is finished, which is why adding weight later is a structural event.",
            sourceLessonSlug: "what-a-load-is",
          },
          {
            prompt: "What is live load?",
            options: [
              "The weight of movable things",
              "The load a house carries only while it is under construction and unfinished",
              "Any load that changes the shape of a member without breaking it",
              "The weight of the building's mechanical equipment while it is running",
            ],
            correctIndex: 0,
            explanation:
              "The Navy manual defines it as the total weight of movable objects the structure happens to be supporting at a particular instant.",
            sourceLessonSlug: "what-a-load-is",
          },
          {
            prompt: "Which three words in the manual's definition of live load matter most?",
            options: [
              "At a particular instant",
              "Over the building's life, because live load is averaged across many years",
              "Under normal conditions, because unusual conditions are excluded entirely",
              "By the occupant only, because contents belonging to others are not counted",
            ],
            correctIndex: 0,
            explanation:
              "Live load is a judgment about a worst afternoon, not a measurement of a typical one.",
            sourceLessonSlug: "what-a-load-is",
          },
          {
            prompt: "In the floor-framing chapter, what is given as the dead load of a floor?",
            options: [
              "The floor's own material",
              "The furniture that is never moved, since it behaves as if it were permanent",
              "The joists alone, with the subfloor counted separately as live load",
              "Half the weight of the walls standing on the floor above it",
            ],
            correctIndex: 0,
            explanation:
              "The manual says the dead load is the weight of the material used for the floor unit itself, and the live load is the weight created by people, furniture and appliances.",
            sourceLessonSlug: "what-a-load-is",
          },
          {
            prompt: "Why is a roof in a snowy region not the same roof as an identical one further south?",
            options: [
              "Snow and ice add load",
              "Because cold weather makes framing lumber more brittle and less able to bend",
              "Because roof coverings are manufactured to different thicknesses by region",
              "Because a steeper pitch is required wherever the winter is longer",
            ],
            correctIndex: 0,
            explanation:
              "The manual gives this as its own reason for designing by geography: a roof in a temperate zone must be sturdy enough not to collapse under the weight of snow and ice.",
            sourceLessonSlug: "what-a-load-is",
          },
          {
            prompt: "In what three directions does a house have to resist load?",
            options: [
              "Down, sideways and up",
              "Down and sideways only, since nothing in a house is ever pulled upward",
              "Along each of the building's two axes, plus rotation about the centre",
              "Inward from all four walls, plus downward from the roof structure",
            ],
            correctIndex: 0,
            explanation:
              "Gravity pulls down, wind and earthquakes push sideways, and wind lifts a roof. Most of what a layperson notices is only the first.",
            sourceLessonSlug: "what-a-load-is",
          },
          {
            prompt: "What does HUD's manufactured home standard say may NOT be counted as resisting wind overturning?",
            options: [
              "Roof snow and floor live loads",
              "The dead weight of the roof covering, because it may be blown off first",
              "Any load carried by a member that is also resisting a horizontal force",
              "The weight of the foundation, which is treated as part of the ground",
            ],
            correctIndex: 0,
            explanation:
              "In plain words, you may not count the furniture as ballast. The house has to be held down by its own structure and connections.",
            sourceLessonSlug: "what-a-load-is",
          },
          {
            prompt: "What is uplift?",
            options: [
              "Wind lifting a roof",
              "The upward spring of a floor joist once a heavy load is removed from it",
              "The rise of a foundation when saturated clay soil swells beneath it",
              "The lifting of a wall into position once it has been framed on the subfloor",
            ],
            correctIndex: 0,
            explanation:
              "Wind does not only push. Over a roof it pulls upward, which is why roof-to-wall connections matter so much.",
            sourceLessonSlug: "what-a-load-is",
          },
          {
            prompt: "What is overturning?",
            options: [
              "A sideways force tipping a building",
              "The rotation of a joist about its own length when it is not braced",
              "The collapse of a wall inward when the roof above it is removed",
              "The reversal of a load path when an upper storey is added later",
            ],
            correctIndex: 0,
            explanation:
              "It is resisted by the building's weight and, crucially, by its anchorage to what it stands on.",
            sourceLessonSlug: "what-a-load-is",
          },
          {
            prompt: "What kind of load does an earthquake put into a building?",
            options: [
              "A horizontal one",
              "A purely vertical one, since the ground drops away beneath the foundation",
              "A load on the roof only, because the upper storeys sway the furthest",
              "A load on the interior partitions, which move independently of the shell",
            ],
            correctIndex: 0,
            explanation:
              "The DOE guide describes a continuous load path as transferring both vertical loads and horizontal loads, so a building stays intact in high-wind and seismic events.",
            sourceLessonSlug: "what-a-load-is",
          },
          {
            prompt: "Why does the course call a new stone counter a structural event?",
            options: [
              "It adds dead load",
              "Because its weight is counted as live load until it is permanently fixed",
              "Because it changes the direction in which the floor joists must run",
              "Because it requires a permit in every jurisdiction in the United States",
            ],
            correctIndex: 0,
            explanation:
              "Dead load stops changing once a house is finished, unless somebody adds to it. A second layer of roofing is the same kind of event.",
            sourceLessonSlug: "what-a-load-is",
          },
          {
            prompt: "Which part of a house does wind load most obviously try to remove?",
            options: [
              "The roof",
              "The foundation, which is pushed sideways off its footing by the pressure",
              "The interior partitions, which have nothing holding them down",
              "The subfloor, which lifts once air pressure builds inside the crawl space",
            ],
            correctIndex: 0,
            explanation:
              "Wind lifts a roof rather than pressing it down, which is why the connection between roof and wall is a recurring subject in this course.",
            sourceLessonSlug: "what-a-load-is",
          },
          {
            prompt: "What kind of building does the standard quoted about wind overturning actually govern?",
            options: [
              "Manufactured homes",
              "Any dwelling built after the standard's effective date in 1976",
              "Houses in coastal counties designated as high-wind zones",
              "Both manufactured and site-built homes, since the physics is identical",
            ],
            correctIndex: 0,
            explanation:
              "24 CFR part 3280 is HUD's manufactured home standard. The course cites it for a clearly stated principle and says what it governs every time.",
            sourceLessonSlug: "what-a-load-is",
          },
          {
            prompt: "According to lesson 4, which loads are the ones houses actually fail under?",
            options: [
              "The sideways and upward ones",
              "Dead loads, because they act continuously for the whole life of the house",
              "Live loads, because occupants routinely exceed what the floor was designed for",
              "Snow loads, because they are the only load that arrives without warning",
            ],
            correctIndex: 0,
            explanation:
              "Almost everything a layperson notices is about downward load. Sections 5, 6 and 8 are about the other two directions, which is where failures happen.",
            sourceLessonSlug: "what-a-load-is",
          },
          {
            prompt: "Which of these is a dead load?",
            options: [
              "The drywall",
              "A bookcase standing against an interior wall in a spare bedroom",
              "Rainwater ponding on a flat roof after a storm drain blocks",
              "A crowd of guests standing together on a deck during a party",
            ],
            correctIndex: 0,
            explanation:
              "Drywall is part of the building. The other three are movable or temporary, which makes them live loads.",
            sourceLessonSlug: "what-a-load-is",
          },
          {
            prompt: "What does the course say a live load figure really represents?",
            options: [
              "A guess about a worst afternoon",
              "A measurement taken in similar houses and averaged across a full year",
              "The heaviest load the floor carried during its first year in service",
              "A figure the occupant agrees to in writing when the house is sold",
            ],
            correctIndex: 0,
            explanation:
              "The manual's phrase is at a particular instant. Design has to allow for the bad instant, not the typical one.",
            sourceLessonSlug: "what-a-load-is",
          },
          {
            prompt: "What does seismic load mean in this course's vocabulary?",
            options: [
              "Earthquake force through the foundation",
              "The vibration a house experiences from heavy traffic on a nearby road",
              "The settling of a building into soft ground over its first decade",
              "The force released when a heavily loaded member finally cracks",
            ],
            correctIndex: 0,
            explanation:
              "An earthquake shakes the ground, and the building's own mass then pushes sideways against its structure.",
            sourceLessonSlug: "what-a-load-is",
          },
          {
            prompt: "Why does the course introduce load types before naming the load path?",
            options: [
              "Different loads act differently",
              "Because the vocabulary section of the course is arranged alphabetically",
              "Because live load has to be calculated before dead load can be estimated",
              "Because the drawings list loads before they show any structural member",
            ],
            correctIndex: 0,
            explanation:
              "A house answers each kind separately. You cannot follow a load usefully without knowing whether it pushes down, sideways or up.",
            sourceLessonSlug: "what-a-load-is",
          },
          {
            prompt: "What is the alternating rhythm of a load path through a house?",
            options: [
              "Horizontal, then vertical, repeating",
              "Heavy members at the top and progressively lighter ones lower down",
              "Wood, then steel, then concrete, in the order each material was invented",
              "Sheathing, then framing, then finish, repeated at every level",
            ],
            correctIndex: 0,
            explanation:
              "The manual's sentence has horizontal members supported by vertical members supported by footings supported by the earth. Something spans, then something stands.",
            sourceLessonSlug: "roof-to-soil",
          },
          {
            prompt: "According to the Navy manual, what is the ultimate support for every load in a structure?",
            options: [
              "The earth",
              "The foundation walls, which are designed never to move under any load",
              "The footings, which are the last engineered element in the path",
              "The sill plate, which is where all the framing loads finally meet",
            ],
            correctIndex: 0,
            explanation:
              "The manual's wording is the ultimate support of the earth. Footings are the last manufactured thing, but the ground carries it.",
            sourceLessonSlug: "roof-to-soil",
          },
          {
            prompt: "In the walked load path, what do rafters bear on at the outside wall?",
            options: [
              "The top plate",
              "The sole plate, which is the wall member closest to the roof structure",
              "The rim joist, which runs continuously around the top of the building",
              "The ceiling joists, which carry the rafters at their lower ends",
            ],
            correctIndex: 0,
            explanation:
              "The rafter bottoms rest on the plate at the top of the wall, which then hands the load down to the studs.",
            sourceLessonSlug: "roof-to-soil",
          },
          {
            prompt: "What does the subfloor span between?",
            options: [
              "Floor joists",
              "The girders, with the joists carrying only the finish floor above them",
              "The sole plates of the walls on either side of a room",
              "The sill plates, which support it directly at the perimeter",
            ],
            correctIndex: 0,
            explanation:
              "The subfloor is nailed over the floor joists, strengthening the whole floor unit and giving the walls a platform to be raised on.",
            sourceLessonSlug: "roof-to-soil",
          },
          {
            prompt: "In the load path, what does a girder do for the floor joists?",
            options: [
              "Catches them partway across",
              "Ties their ends together so they cannot roll or tip under load",
              "Spreads their load sideways into the sheathing of the walls below",
              "Replaces them entirely wherever a room is wider than usual",
            ],
            correctIndex: 0,
            explanation:
              "A girder gives the joists an intermediate support so they do not have to reach wall to wall, and posts carry the girder down.",
            sourceLessonSlug: "roof-to-soil",
          },
          {
            prompt: "Where does a roof truss put the load it carries?",
            options: [
              "On two outside walls",
              "On the ridge board, which then distributes it along the length of the house",
              "On the interior partitions beneath it, in proportion to their length",
              "Evenly across every wall the truss passes over, inside and out",
            ],
            correctIndex: 0,
            explanation:
              "The manual calls a truss an engineered structural frame resting on two outside walls, with the load transferred to those walls.",
            sourceLessonSlug: "roof-to-soil",
          },
          {
            prompt: "What does the word integrated mean in HUD's requirement that a home be a completely integrated structure?",
            options: [
              "Members and connections act as one",
              "Every component is manufactured by a single approved supplier",
              "The structure and the mechanical systems are installed at the same stage",
              "The building is designed by one person rather than by several trades",
            ],
            correctIndex: 0,
            explanation:
              "The standard requires the structure to sustain the design loads and transmit them to stabilizing devices. Integrated is about the system, not the paperwork.",
            sourceLessonSlug: "roof-to-soil",
          },
          {
            prompt: "About how many handovers does the course count in the load path it walks?",
            options: [
              "About a dozen",
              "Exactly four, one at each of the building's structural levels",
              "Two, since the roof and the floor are the only real transfers",
              "Hundreds, one at every nail in the framing",
            ],
            correctIndex: 0,
            explanation:
              "Roughly a dozen, and every one of them is a connection somebody made. That is why section 8 is about connections.",
            sourceLessonSlug: "roof-to-soil",
          },
          {
            prompt: "What does bear mean as a verb in framing?",
            options: [
              "To rest on and pass load into",
              "To resist a sideways force without moving out of plumb",
              "To carry a load along a member's length rather than across it",
              "To hold two members together against a pulling-apart force",
            ],
            correctIndex: 0,
            explanation:
              "A joist bears on a wall or a girder. The word names the handover itself.",
            sourceLessonSlug: "roof-to-soil",
          },
          {
            prompt: "Which member closes the ends of the floor joists along the outside walls?",
            options: [
              "The rim joist",
              "The sill plate, which runs under the joists at the same perimeter",
              "The sole plate of the wall standing directly above the joists",
              "The girder, which runs around the perimeter of the floor frame",
            ],
            correctIndex: 0,
            explanation:
              "The rim joist, also called the header joist or band joist, runs along the outside walls and closes the joist ends.",
            sourceLessonSlug: "roof-to-soil",
          },
          {
            prompt: "Why does a trussed house often have large open interior spaces?",
            options: [
              "The trusses span wall to wall",
              "Because trusses are shallower than rafters and leave more headroom",
              "Because a trussed roof weighs less, so fewer interior walls are needed",
              "Because interior walls in trussed houses are built after the roof is on",
            ],
            correctIndex: 0,
            explanation:
              "A truss rests on the two outside walls and carries its load to them, so the middle of the house is not needed to hold up the roof.",
            sourceLessonSlug: "roof-to-soil",
          },
          {
            prompt: "What does span mean in this course's vocabulary?",
            options: [
              "What a member does between supports",
              "The total width of a building measured across its outside walls only",
              "The distance a load travels through a structure before reaching the soil",
              "The gap left between two panels so they can expand without buckling",
            ],
            correctIndex: 0,
            explanation:
              "It names both the act and the distance. A joist spans between its supports, and its span is how far.",
            sourceLessonSlug: "roof-to-soil",
          },
          {
            prompt: "In the load path, what carries a girder down to the foundation?",
            options: [
              "Posts",
              "Studs, which continue below the floor line inside the foundation wall",
              "The sill plate, which runs beneath the girder for its whole length",
              "Bridging, which transfers the girder load out to the perimeter walls",
            ],
            correctIndex: 0,
            explanation:
              "Wood or steel posts stand under the girder, and the manual notes their sizes depend on the loads carried.",
            sourceLessonSlug: "roof-to-soil",
          },
          {
            prompt: "What sits between the sole plate of a wall and the floor joists below it?",
            options: [
              "The subfloor",
              "The sill plate, which is laid over the joists before the walls are framed",
              "Nothing, because the sole plate is nailed directly to the joist tops",
              "The rim joist, which runs under every wall in the building",
            ],
            correctIndex: 0,
            explanation:
              "Walls are laid out, framed and raised on top of the subfloor, which is why the platform has to be right before any wall goes up.",
            sourceLessonSlug: "roof-to-soil",
          },
          {
            prompt: "What does the manual say happens to the weight of the roof material?",
            options: [
              "It is transferred to the soil",
              "It is carried by the ridge board and resolved at the gable ends",
              "It is balanced by the uplift of wind over the same surface",
              "It is shared equally between the roof structure and the ceiling below",
            ],
            correctIndex: 0,
            explanation:
              "The manual says it is distributed over the top supporting members and transferred through all joining members to the soil.",
            sourceLessonSlug: "roof-to-soil",
          },
          {
            prompt: "Why does lesson 5 say every arrow in the load path deserves attention?",
            options: [
              "Each one is a joint",
              "Because each arrow represents a member that could be undersized",
              "Because the drawings number the arrows for the inspector to check",
              "Because a load doubles each time it passes from one member to another",
            ],
            correctIndex: 0,
            explanation:
              "Every handover is a connection somebody made, and connections are where investigators keep finding failures.",
            sourceLessonSlug: "roof-to-soil",
          },
          {
            prompt: "What does load bearing describe?",
            options: [
              "What rests on a wall",
              "The thickness and material of the wall being examined",
              "Whether a wall was built at the same time as the rest of the house",
              "Whether a wall is drawn with a heavier line on the floor plan",
            ],
            correctIndex: 0,
            explanation:
              "It is a statement about what the wall supports, not about how the wall looks. Two identical-looking walls can differ completely.",
            sourceLessonSlug: "bearing-and-not-bearing",
          },
          {
            prompt: "What does the Navy manual say a bearing partition supports?",
            options: [
              "The ends of joists above",
              "Only the finish ceiling material fixed to its underside",
              "The wall directly above it on the next storey, and nothing else",
              "The roof covering, wherever the partition reaches the underside of the sheathing",
            ],
            correctIndex: 0,
            explanation:
              "Bearing partitions support the ends of the floor joists or ceiling joists. That is the manual's definition, and it is about geometry.",
            sourceLessonSlug: "bearing-and-not-bearing",
          },
          {
            prompt: "What does the manual say about a partition running in the same direction as the joists?",
            options: [
              "It carries little weight from above",
              "It must always be removed before any remodelling can begin",
              "It carries exactly half the load of a bearing partition of the same length",
              "It is never framed with a double top plate, which makes it easy to identify",
            ],
            correctIndex: 0,
            explanation:
              "Nonbearing partitions run in the same direction as the joists and therefore carry little weight from the floor or ceiling above.",
            sourceLessonSlug: "bearing-and-not-bearing",
          },
          {
            prompt: "What is the one clue an ordinary person can often read for themselves?",
            options: [
              "The direction of the joists",
              "The thickness of the wall, since bearing walls are built heavier",
              "The presence of a door, because openings are only cut in nonbearing walls",
              "Whether the wall reaches all the way to the exterior sheathing",
            ],
            correctIndex: 0,
            explanation:
              "In a basement or an unfinished attic the joist direction is often visible, and a wall under joist ends is a candidate for bearing.",
            sourceLessonSlug: "bearing-and-not-bearing",
          },
          {
            prompt: "What does a doubled joist under a wall that runs parallel to the joists tell you?",
            options: [
              "The builder expected that wall",
              "That the joists beneath were damaged and had to be reinforced later",
              "That the wall is definitely nonbearing, since the doubling replaces it",
              "That the floor above carries an unusually heavy finish material",
            ],
            correctIndex: 0,
            explanation:
              "The manual says joists should be doubled under partitions running in the same direction as the joists. That doubling is a fact about the design you were never told.",
            sourceLessonSlug: "bearing-and-not-bearing",
          },
          {
            prompt: "What exactly do roof trusses remove the need for, according to the manual?",
            options: [
              "Interior bearing partitions",
              "Any connection between the roof structure and the walls below it",
              "Ceiling joists, which trusses make unnecessary at every level of a house",
              "Exterior wall bracing, since a trussed roof braces the whole building",
            ],
            correctIndex: 0,
            explanation:
              "The manual says trusses eliminate interior bearing partitions because they are self-supporting. That is about the roof load only.",
            sourceLessonSlug: "bearing-and-not-bearing",
          },
          {
            prompt: "Why does the truss fact not settle whether an interior wall can go?",
            options: [
              "A floor above may still bear on it",
              "Because trusses are only self-supporting for the first ten years of service",
              "Because trussed roofs are rebuilt as rafters whenever a wall is removed",
              "Because a truss transfers half its load to the interior walls it crosses",
            ],
            correctIndex: 0,
            explanation:
              "It says nothing about a floor above and nothing about the walls at the ends of the trusses. The roof is only one of the things resting on a house.",
            sourceLessonSlug: "bearing-and-not-bearing",
          },
          {
            prompt: "Besides carrying weight, what else can a wall be doing that removing it would undo?",
            options: [
              "Bracing the house sideways",
              "Sealing the floor against air movement from the crawl space below",
              "Carrying the electrical grounding path for the whole building",
              "Holding the ceiling drywall flat across the middle of the span",
            ],
            correctIndex: 0,
            explanation:
              "A wall can carry almost no weight and still be holding the building square against sideways forces, which is section 5's subject.",
            sourceLessonSlug: "bearing-and-not-bearing",
          },
          {
            prompt: "What is the course's answer to can I take this wall out?",
            options: [
              "Have someone qualified look, and pull a permit",
              "Check whether the joists above run parallel to it, and proceed if they do",
              "Remove it in stages, watching the ceiling for cracks as you go",
              "Replace it with a beam of the same length before removing anything",
            ],
            correctIndex: 0,
            explanation:
              "The question is about one building, the evidence is hidden inside it, and the failure mode is a ceiling coming down onto the room you were standing in.",
            sourceLessonSlug: "bearing-and-not-bearing",
          },
          {
            prompt: "What is a point load?",
            options: [
              "A load concentrated at one spot",
              "A load applied at the exact centre of a member's span",
              "The largest load a member will carry before it visibly deflects",
              "A load transferred through a single fastener rather than through several",
            ],
            correctIndex: 0,
            explanation:
              "The end of a girder or the foot of a post delivers its load to one place, which is why what sits above a ceiling matters so much.",
            sourceLessonSlug: "bearing-and-not-bearing",
          },
          {
            prompt: "How does the manual classify girders?",
            options: [
              "Bearing or nonbearing",
              "Primary or secondary, according to how much of the floor they carry",
              "Solid or built up, which determines what loads they may support",
              "Interior or exterior, depending on which wall they run between",
            ],
            correctIndex: 0,
            explanation:
              "Bearing girders must support a wall framed directly above as well as the floor's own loads. Nonbearing girders support just the floor above them.",
            sourceLessonSlug: "bearing-and-not-bearing",
          },
          {
            prompt: "What does a bearing girder support that a nonbearing girder does not?",
            options: [
              "A wall framed above it",
              "The live load of the floor, which a nonbearing girder never carries",
              "The dead load of the floor unit, which sits only on bearing members",
              "The foundation wall at each of its two ends",
            ],
            correctIndex: 0,
            explanation:
              "Both carry the floor's dead and live loads. Only the bearing one also carries a wall framed directly above.",
            sourceLessonSlug: "bearing-and-not-bearing",
          },
          {
            prompt: "Why can you not settle the question by looking at a wall's appearance?",
            options: [
              "Bearing is about what rests on it",
              "Because finishes are applied identically whatever the wall is doing",
              "Because bearing walls are deliberately disguised during construction",
              "Because the drawings never distinguish between the two kinds of wall",
            ],
            correctIndex: 0,
            explanation:
              "Two walls framed the same way, finished the same way and painted the same colour can be doing completely different structural jobs.",
            sourceLessonSlug: "bearing-and-not-bearing",
          },
          {
            prompt: "What does the course say about cutting a hole through a joist, truss or beam to run a pipe?",
            options: [
              "Same answer: qualified person and permit",
              "It is acceptable anywhere within the middle third of the member's length",
              "It is acceptable in a joist but never in a beam, whatever the size",
              "It is a finishing decision rather than a structural one",
            ],
            correctIndex: 0,
            explanation:
              "It removes material from a member somebody sized for a load. That is the same class of question as removing a wall, and it gets the same answer.",
            sourceLessonSlug: "bearing-and-not-bearing",
          },
          {
            prompt: "What is a self-supporting member, in the sense the manual uses for trusses?",
            options: [
              "One that spans wall to wall",
              "One that carries its own weight but none of the roof covering above it",
              "One that needs no fasteners because its joints are cut to interlock",
              "One that can be installed by a single worker without assistance",
            ],
            correctIndex: 0,
            explanation:
              "A truss needs no support in between, which is what lets a trussed house open up its interior.",
            sourceLessonSlug: "bearing-and-not-bearing",
          },
          {
            prompt: "Which of these is the strongest reason the clue about joist direction cannot be acted on alone?",
            options: [
              "What is above the ceiling is hidden",
              "Because joists are rarely laid in a consistent direction in any one house",
              "Because joist direction changes as a house settles over its first decade",
              "Because the drawings show joist direction only for the ground floor",
            ],
            correctIndex: 0,
            explanation:
              "A wall parallel to the joists may still sit under a post, a girder end or a concentrated load from a floor two storeys up.",
            sourceLessonSlug: "bearing-and-not-bearing",
          },
          {
            prompt: "Which phrase does the course use for the moment when a load passes from one member to the next?",
            options: [
              "A handover",
              "A transfer coefficient, which is the proportion of load that actually moves",
              "A bearing surface, meaning the area where the two members touch",
              "A load junction, which is the term the drawings use at each level",
            ],
            correctIndex: 0,
            explanation:
              "Each handover is a connection somebody made, and naming them that way is what sets up section 8.",
            sourceLessonSlug: "roof-to-soil",
          },
          {
            prompt: "What does the roof covering itself rest on?",
            options: [
              "Roof sheathing",
              "The rafters directly, with sheathing used only on trussed roofs",
              "The top plate, which continues out over the eaves to support it",
              "The underlayment, which is a structural layer beneath the covering",
            ],
            correctIndex: 0,
            explanation:
              "The covering sits on sheathing, and the sheathing spans between rafters or truss top chords.",
            sourceLessonSlug: "roof-to-soil",
          },
          {
            prompt: "Which two loads does the DOE guide say a continuous load path must carry to the ground?",
            options: [
              "Vertical and horizontal",
              "Dead and live, which together make up the total design load",
              "Snow and wind, the two loads that vary most by region",
              "Static and dynamic, according to whether the load moves during use",
            ],
            correctIndex: 0,
            explanation:
              "Vertical loads include gravity and wind uplift; horizontal loads include wind against the walls and seismic force.",
            sourceLessonSlug: "what-a-load-is",
          },
          {
            prompt: "What makes adding a second layer of roofing a structural question?",
            options: [
              "It permanently increases dead load",
              "It changes the pitch of the roof and therefore how snow slides off it",
              "It shifts the load path from the rafters onto the ridge board",
              "It converts part of the roof's live load into dead load",
            ],
            correctIndex: 0,
            explanation:
              "Dead load is constant once a house is finished, unless somebody adds to it, and everything below has to carry whatever is added.",
            sourceLessonSlug: "what-a-load-is",
          },
          {
            prompt: "Where in a house can an ordinary person most easily see which way the joists run?",
            options: [
              "An unfinished basement or attic",
              "Through the floor registers, which are always cut parallel to the joists",
              "At the front door, where the threshold exposes the framing beneath",
              "In the loft hatch surround, which is framed square to the joists",
            ],
            correctIndex: 0,
            explanation:
              "Where the framing has never been covered, the direction is simply visible, which is the only free evidence most people have.",
            sourceLessonSlug: "bearing-and-not-bearing",
          },
          {
            prompt: "What does the course say is the failure mode behind its caution about removing walls?",
            options: [
              "A ceiling coming down",
              "A slow sag that shows up as cracked paint over several seasons",
              "A permit violation discovered when the house is later sold",
              "An insurance claim refused because the work was undocumented",
            ],
            correctIndex: 0,
            explanation:
              "The question is about one building, the evidence is hidden, and the consequence lands on whoever is in the room.",
            sourceLessonSlug: "bearing-and-not-bearing",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3 — Wood, and why it moves
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "wood-as-an-engineering-material",
      title: "7 · Wood has a direction, and the direction changes everything",
      section: "Section 3 · Wood, and why it moves",
      body: `Steel behaves the same way whichever way you load it. Wood does not, and almost every surprising thing a house does comes from that one fact.

The federal *Wood Handbook* states it at the top of its chapter on mechanical properties: "Wood may be described as an orthotropic material; that is, it has unique and independent mechanical properties in the directions of three mutually perpendicular axes: longitudinal, radial, and tangential. The longitudinal axis L is parallel to the fiber (grain); the radial axis R is normal to the growth rings (perpendicular to the grain in the radial direction); and the tangential axis T is perpendicular to the grain but tangent to the growth rings" (Senalik & Farber, 2021, p. 5-1).

Three axes, three different materials, in effect, inside the same stick.

**The properties engineers actually measure.** The handbook lists the strength properties reported for design as "modulus of rupture in bending, maximum stress in compression parallel to grain, compressive stress perpendicular to grain, and shear strength parallel to grain" (Senalik & Farber, 2021, p. 5-3). Notice how many of those names end in a direction. Two definitions from the same page are worth carrying around:

- **Modulus of rupture** "reflects the maximum load-carrying capacity of a member in bending".
- **Compressive stress perpendicular to grain** is "reported as stress at proportional limit. There is no clearly defined ultimate stress for this property".

That second one is quietly important. Loaded across the grain, wood does not have a clean breaking point in the way it does in bending. It compresses. Reading the house from that, and this reading is the course's own rather than the handbook's: a stud carries its load along the grain, where wood is at its best, while the plate under the stud is loaded across the grain, where it is not. That is one reason the drawings care about what happens at plates and bearing points, and it is why a heavily loaded post is not simply landed on whatever happens to be underneath.

**This is a book you can actually open.** The *Wood Handbook: Wood as an Engineering Material*, FPL-GTR-282, is 543 pages, published by the USDA Forest Service's Forest Products Laboratory, and free. Federal publications carry no copyright (17 U.S.C. § 105), which is why this course can teach from it and why you can download the same chapters it cites. If any claim in this section looks wrong to you, the primary source is one click away, and checking it is the habit worth more than the facts.

:::reveal What does it mean to say wood is orthotropic? ||| It has unique and independent mechanical properties along three perpendicular axes: longitudinal along the grain, radial across the growth rings, and tangential around them.

:::reveal What does the Wood Handbook say about compressive stress perpendicular to grain? ||| That it is reported as the stress at the proportional limit, because there is no clearly defined ultimate stress for that property.

## Vocabulary
- **Orthotropic**: having different and independent properties along three perpendicular axes.
- **Grain**: the direction of the wood fibres, which is the longitudinal axis.
- **Modulus of rupture**: a measure reflecting the maximum load-carrying capacity of a member in bending.
- **Proportional limit**: the point up to which a material's deformation stays proportional to the load on it.
- **Shear**: an internal slipping of one part of a member past another.

## Sources
Senalik, C. A., & Farber, B. (2021). Mechanical properties of wood (Chapter 5). In R. J. Ross (Ed.), *Wood handbook: Wood as an engineering material* (General Technical Report FPL-GTR-282). U.S. Department of Agriculture, Forest Service, Forest Products Laboratory. https://www.fpl.fs.usda.gov/documnts/fplgtr/fplgtr282/chapter_05_fpl_gtr282.pdf
Subject matter of copyright: United States Government works, 17 U.S.C. § 105. https://www.copyright.gov/title17/92chap1.html`,
    },
    {
      slug: "moisture-and-movement",
      title: "8 · Moisture, and which way wood moves",
      section: "Section 3 · Wood, and why it moves",
      body: `Wood is not inert. "Wood, like many natural materials, is hygroscopic; it takes on moisture from the surrounding environment" (Glass & Zelinka, 2021, p. 4-1). It keeps doing that for as long as the house stands.

**Moisture content** is the mass of water in the wood divided by the mass of the wood when ovendry, given as a percentage (Glass & Zelinka, 2021, p. 4-1). Because the denominator is the dry wood, green lumber can be well over 100 percent.

**Two thresholds do most of the explaining.**

The **fiber saturation point** is the moisture content at which the cell walls are completely saturated but no water sits in the cell cavities (Glass & Zelinka, 2021, p. 4-2). The handbook adds the practical version: "The point below which most wood properties start to change averages about 30% moisture content" (p. 4-3). Above it, wood is dimensionally stable. Below it, wood moves.

**Equilibrium moisture content** is "that moisture content at which the wood is neither gaining nor losing moisture" (Glass & Zelinka, 2021, p. 4-3). It depends on the temperature and relative humidity around the wood, so it is a moving target that follows the seasons.

**Now the part that explains cracked tiles and sticking doors.** "With respect to dimensional stability, wood is an anisotropic material. It shrinks (swells) most in the direction of the annual growth rings (tangentially), about half as much across the rings (radially), and only slightly along the grain (longitudinally)" (Glass & Zelinka, 2021, p. 4-7). The same page states the ratio outright: "Tangential shrinkage is about twice as great as radial."

And along the grain, almost nothing happens: average longitudinal shrinkage from green to ovendry is "between 0.1% and 0.2% for most species of wood" (Glass & Zelinka, 2021, p. 4-10).

Put numbers on one familiar species. Coast Douglas-fir, green to ovendry, shrinks 4.8 percent radially, 7.6 percent tangentially, and 12.4 percent by volume (Glass & Zelinka, 2021, p. 4-8, Table 4-3). Those are measured values for small clear specimens, not a promise about the stick in your wall, and the handbook says shrinkage varies with density, size, shape and drying rate.

**What builders do about it.** Install wood near the moisture content it will live at: "Install wood at the moisture content levels that the wood will experience in service" (Bergman, 2021, p. 13-3). The handbook's recommended values for installation are about 8 percent for interior woodwork and flooring in most of the United States, and about 12 percent for exterior siding, trim and sheathing, with tolerances around each (Bergman, 2021, p. 13-5, Table 13-2). And a definition worth knowing when you read a stamp: "Dry lumber, as defined in the American Softwood Lumber Standard, has a maximum moisture content of 19%" (Bergman, 2021, p. 13-5).

:::reveal In which of the three directions does wood move most as it dries, and in which least? ||| Most tangentially, around the growth rings; about half as much radially, across them; and only slightly along the grain.

:::reveal What is the fiber saturation point, and what does the Wood Handbook give as its practical average? ||| The moisture content at which the cell walls are saturated but no water sits in the cell cavities. Most wood properties start to change below about 30 percent moisture content.

## Vocabulary
- **Hygroscopic**: taking on and giving off moisture from the surrounding air.
- **Moisture content**: the mass of water in wood as a percentage of the wood's ovendry mass.
- **Fiber saturation point**: the moisture content at which cell walls are saturated but cell cavities hold no free water, averaging about 30 percent.
- **Equilibrium moisture content**: the moisture content at which wood is neither gaining nor losing moisture in its surroundings.
- **Anisotropic**: behaving differently in different directions, which for shrinkage means tangential, radial and longitudinal all differ.

## Sources
Bergman, R. (2021). Drying and control of moisture content and dimensional changes (Chapter 13). In R. J. Ross (Ed.), *Wood handbook: Wood as an engineering material* (General Technical Report FPL-GTR-282). U.S. Department of Agriculture, Forest Service, Forest Products Laboratory. https://www.fpl.fs.usda.gov/documnts/fplgtr/fplgtr282/chapter_13_fpl_gtr282.pdf
Glass, S. V., & Zelinka, S. L. (2021). Moisture relations and physical properties of wood (Chapter 4). In R. J. Ross (Ed.), *Wood handbook: Wood as an engineering material* (General Technical Report FPL-GTR-282). U.S. Department of Agriculture, Forest Service, Forest Products Laboratory. https://www.fpl.fs.usda.gov/documnts/fplgtr/fplgtr282/chapter_04_fpl_gtr282.pdf`,
    },
    {
      slug: "what-moving-wood-does",
      title: "9 · What moving wood does to a finished house",
      section: "Section 3 · Wood, and why it moves",
      body: `Everything in lesson 8 happens inside a finished house, slowly, every year, while people live in it. Here is what it looks like from the inside.

**Things loosen.** The *Wood Handbook* is blunt about assemblies: "In the case of built-up assemblies, such as roof trusses, it may be necessary to tighten bolts or other fastenings occasionally to maintain full bearing of the connectors as the members shrink" (Bergman, 2021, p. 13-3). Shrinkage does not only change dimensions. It changes how firmly parts press against each other, which is a connection question.

**Things open up.** The handbook lists the ordinary consequences of shrinking and swelling as "warping, checking, and splitting of the wood, which in turn can lead to decreased utility of wood products, such as loosening of tool handles, gaps in flooring, or other performance problems" (Glass & Zelinka, 2021, p. 4-7). A gap that appears between floorboards in January and closes in July is not damage. It is the floor doing exactly what the chapter describes.

**Some boards were never going to stay straight.** Reaction wood and juvenile wood shrink far more along the grain than normal wood does, up to 2 percent green to ovendry, and cross grain increases longitudinal shrinkage too. The result, in the handbook's words, is that these "can cause serious warping, such as bow, crook, or twist" (Glass & Zelinka, 2021, p. 4-10). Those three words are the trade's names for three different ways a stick goes wrong, and you can see all three in a stack of lumber at any supplier.

**Builders plan around it, and you can see them doing it.** Two examples from the Navy manual. First, joists arrive slightly bowed: "Most joists have a crown (a bow shape) on one side. Each joist should be sighted before being nailed in place to make certain the crown is turned up. The joist will later settle from the weight of the floor and straighten out" (NETPDTC, 1994, p. 1-16). A floor is deliberately built very slightly humped so that loading it flattens it. Second, where wood joists meet a steel beam, the manual says allowance must be made for the joists to shrink while the steel stays exactly the same size (NETPDTC, 1994, p. 1-11). Two materials in one floor, one of which moves.

**And panels are never laid tight.** "For the best performance, do not lay up plywood with tight joints, whether interior or exterior. Allow for expansion if moisture should enter the joints" (NETPDTC, 1994, p. 1-17). The small gaps between sheathing panels on a house under construction are not sloppiness. They are the builder leaving the material room to swell.

**What to take from this.** When something in a house moves seasonally and reversibly, wood moisture is the first suspect. When something moves once and does not come back, or keeps going in one direction, that is a different question and it belongs to somebody qualified.

:::reveal Why is a floor joist installed with its crown turned upward? ||| Because the joist will settle under the weight of the floor and straighten out. The floor is built very slightly humped so that loading it flattens it.

:::reveal What does the Wood Handbook say may be needed occasionally in built-up assemblies such as roof trusses, and why? ||| Tightening bolts or other fastenings, to maintain full bearing of the connectors as the members shrink.

## Vocabulary
- **Crown**: the slight bow along the edge of a piece of lumber, turned upward when a joist is set.
- **Bow, crook and twist**: three named ways a board distorts, respectively along its face, along its edge, and around its length.
- **Reaction wood**: wood formed in a leaning or bent tree, which shrinks excessively along the grain.
- **Checking**: shallow splitting along the grain as wood dries unevenly.

## Sources
Bergman, R. (2021). Drying and control of moisture content and dimensional changes (Chapter 13). In R. J. Ross (Ed.), *Wood handbook: Wood as an engineering material* (General Technical Report FPL-GTR-282). U.S. Department of Agriculture, Forest Service, Forest Products Laboratory. https://www.fpl.fs.usda.gov/documnts/fplgtr/fplgtr282/chapter_13_fpl_gtr282.pdf
Glass, S. V., & Zelinka, S. L. (2021). Moisture relations and physical properties of wood (Chapter 4). In R. J. Ross (Ed.), *Wood handbook: Wood as an engineering material* (General Technical Report FPL-GTR-282). U.S. Department of Agriculture, Forest Service, Forest Products Laboratory. https://www.fpl.fs.usda.gov/documnts/fplgtr/fplgtr282/chapter_04_fpl_gtr282.pdf
Naval Education and Training Professional Development and Technology Center. (1994). *Builder 3 & 2, Volume 2* (NAVEDTRA 14044). U.S. Navy. https://www.constructionknowledge.net/public_domain_documents/Builder_3_and_2_vol_2_NAVEDTRA_14044_1994.pdf`,
    },
    {
      slug: "section-3-quiz",
      title: "Section 3 quiz · Wood, moisture and movement",
      section: "Section 3 · Wood, and why it moves",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What does the Wood Handbook mean by calling wood orthotropic?",
            options: [
              "Three axes, three sets of properties",
              "That its strength rises and falls with the season in which the tree was felled",
              "That it behaves as a single uniform material once it has been kiln dried",
              "That its properties differ between heartwood and sapwood in the same log",
            ],
            correctIndex: 0,
            explanation:
              "Unique and independent mechanical properties along the longitudinal, radial and tangential axes. In effect, three materials inside one stick.",
            sourceLessonSlug: "wood-as-an-engineering-material",
          },
          {
            prompt: "Which axis runs parallel to the fibres of a piece of wood?",
            options: [
              "The longitudinal axis",
              "The radial axis, which runs outward from the centre of the log",
              "The tangential axis, which follows the curve of the growth rings",
              "The transverse axis, which runs across the face of a sawn board",
            ],
            correctIndex: 0,
            explanation:
              "The handbook defines the longitudinal axis L as parallel to the fiber, which is the grain.",
            sourceLessonSlug: "wood-as-an-engineering-material",
          },
          {
            prompt: "Which axis is normal to the growth rings?",
            options: [
              "The radial axis",
              "The longitudinal axis, which is perpendicular to every ring it crosses",
              "The tangential axis, which meets each ring at a right angle",
              "The shear axis, which is defined separately for each species",
            ],
            correctIndex: 0,
            explanation:
              "Radial is perpendicular to the grain in the radial direction; tangential is perpendicular to the grain but tangent to the rings.",
            sourceLessonSlug: "wood-as-an-engineering-material",
          },
          {
            prompt: "What does modulus of rupture reflect?",
            options: [
              "Load-carrying capacity in bending",
              "The moisture content at which a member will fail under its own weight",
              "The force needed to pull two fastened members apart along the grain",
              "The amount a member deflects before it returns to its original shape",
            ],
            correctIndex: 0,
            explanation:
              "The handbook defines it as reflecting the maximum load-carrying capacity of a member in bending.",
            sourceLessonSlug: "wood-as-an-engineering-material",
          },
          {
            prompt: "How is compressive stress perpendicular to grain reported, and why?",
            options: [
              "At the proportional limit",
              "As an average of three tests, because single results vary too widely to use",
              "As a percentage of the compressive strength parallel to the grain",
              "Only for softwoods, because hardwoods do not compress measurably",
            ],
            correctIndex: 0,
            explanation:
              "The handbook says there is no clearly defined ultimate stress for this property, so it is reported as the stress at the proportional limit.",
            sourceLessonSlug: "wood-as-an-engineering-material",
          },
          {
            prompt: "Which four strength properties does the handbook name as most commonly reported for design?",
            options: [
              "Bending, two compressions and shear",
              "Hardness, toughness, stiffness and density, measured on clear specimens",
              "Tension, torsion, fatigue and creep, measured over a full service life",
              "Uplift, racking, bearing and deflection, measured in finished assemblies",
            ],
            correctIndex: 0,
            explanation:
              "Modulus of rupture in bending, compression parallel to grain, compression perpendicular to grain, and shear strength parallel to grain.",
            sourceLessonSlug: "wood-as-an-engineering-material",
          },
          {
            prompt: "In which direction is a stud carrying its load?",
            options: [
              "Along the grain",
              "Across the grain, which is why studs are set with the wide face outward",
              "Tangentially, following the curve of the growth rings in the piece",
              "In shear, because the load arrives at an angle from the plate above",
            ],
            correctIndex: 0,
            explanation:
              "A stud is compressed along its length, which is the grain direction, where wood performs best.",
            sourceLessonSlug: "wood-as-an-engineering-material",
          },
          {
            prompt: "In which direction is the plate under a stud being loaded?",
            options: [
              "Across the grain",
              "Along the grain, since the plate runs continuously through the wall",
              "In bending, because the plate spans between the studs above it",
              "In tension, because the studs pull upward on it under wind uplift",
            ],
            correctIndex: 0,
            explanation:
              "The plate lies flat, so the load from the stud presses across its grain, where wood compresses rather than breaking cleanly.",
            sourceLessonSlug: "wood-as-an-engineering-material",
          },
          {
            prompt: "How does the course label its reading of what the plate-and-stud difference means for a house?",
            options: [
              "Its own reading, not the handbook's",
              "A finding the handbook states directly in its chapter on fasteners",
              "A requirement drawn from the federal standard for manufactured homes",
              "A rule of thumb the Navy manual gives for light-frame construction",
            ],
            correctIndex: 0,
            explanation:
              "The handbook supplies the measured properties. The inference about plates and bearing points is the course's own, and the lesson says so.",
            sourceLessonSlug: "wood-as-an-engineering-material",
          },
          {
            prompt: "Why can this course teach from the Wood Handbook at all?",
            options: [
              "Federal works carry no copyright",
              "Because the Forest Products Laboratory licenses it for educational use on request",
              "Because a handbook of measured data is not considered a creative work",
              "Because the course quotes less than the amount permitted by fair use",
            ],
            correctIndex: 0,
            explanation:
              "Under 17 U.S.C. section 105, copyright protection is not available for works of the United States Government.",
            sourceLessonSlug: "wood-as-an-engineering-material",
          },
          {
            prompt: "What does the course say is worth more than the facts in this section?",
            options: [
              "Checking the source yourself",
              "Memorising the shrinkage values for the species common in your region",
              "Learning the three axes in the order the handbook lists them",
              "Being able to name the handbook's editor and report number on demand",
            ],
            correctIndex: 0,
            explanation:
              "The primary source is free and one click away. If a claim here looks wrong, the habit of going and checking is the real lesson.",
            sourceLessonSlug: "wood-as-an-engineering-material",
          },
          {
            prompt: "What is shear, as the handbook uses the term for wood?",
            options: [
              "Internal slipping along the grain",
              "The splitting of a board at its end as it dries in service",
              "The crushing of fibres where a concentrated load lands",
              "The bending of a member beyond the point where it can return",
            ],
            correctIndex: 0,
            explanation:
              "Shear strength parallel to grain is the ability to resist internal slipping of one part upon another along the grain.",
            sourceLessonSlug: "wood-as-an-engineering-material",
          },
          {
            prompt: "What is a proportional limit?",
            options: [
              "Where deformation stops tracking load",
              "The maximum load a member may carry under the adopted building code",
              "The ratio of a member's depth to its width in a structural design",
              "The share of a total load that one member in a group carries",
            ],
            correctIndex: 0,
            explanation:
              "Up to that point, deformation stays proportional to the load. Beyond it, the relationship changes.",
            sourceLessonSlug: "wood-as-an-engineering-material",
          },
          {
            prompt: "How long is the Wood Handbook this course cites?",
            options: [
              "543 pages",
              "About 80 pages, since it covers only the properties needed for framing",
              "Roughly 1,200 pages across three separately published volumes",
              "24 pages, which is the length of the chapter on moisture relations",
            ],
            correctIndex: 0,
            explanation:
              "FPL-GTR-282, published in 2021 by the Forest Products Laboratory, is 543 pages and free to download.",
            sourceLessonSlug: "wood-as-an-engineering-material",
          },
          {
            prompt: "What does grain mean in this course's vocabulary?",
            options: [
              "The direction of the fibres",
              "The visible pattern of colour on the face of a finished board",
              "The size of the wood cells, which varies with growing conditions",
              "The angle at which a log was sawn to produce a given piece",
            ],
            correctIndex: 0,
            explanation:
              "Grain is the longitudinal axis. Every property with a direction in its name refers back to it.",
            sourceLessonSlug: "wood-as-an-engineering-material",
          },
          {
            prompt: "What makes steel different from wood in the way it carries load?",
            options: [
              "Direction does not change its behaviour",
              "Steel carries load only in tension, while wood carries load only in compression",
              "Steel members never need to be connected to the structure around them",
              "Steel is unaffected by temperature, while wood expands when warmed",
            ],
            correctIndex: 0,
            explanation:
              "That is the opening contrast of the lesson. Wood's directional behaviour is the source of most of the surprising things a house does.",
            sourceLessonSlug: "wood-as-an-engineering-material",
          },
          {
            prompt: "Which agency publishes the Wood Handbook?",
            options: [
              "The USDA Forest Service",
              "The Department of Housing and Urban Development, through its research office",
              "The Department of Energy, through a national laboratory",
              "The Department of Commerce, through the standards it maintains for lumber",
            ],
            correctIndex: 0,
            explanation:
              "Specifically its Forest Products Laboratory, which has published the handbook and its predecessors for over a century.",
            sourceLessonSlug: "wood-as-an-engineering-material",
          },
          {
            prompt: "Why is a heavily loaded post not simply landed on whatever is underneath it?",
            options: [
              "The material below is loaded across the grain",
              "Because a post must always be fastened with bolts rather than nails",
              "Because the post would otherwise split along its own length under load",
              "Because posts are not permitted to bear on wood members of any kind",
            ],
            correctIndex: 0,
            explanation:
              "Across the grain wood compresses, with no clearly defined ultimate stress. What a post lands on is therefore a design question.",
            sourceLessonSlug: "wood-as-an-engineering-material",
          },
          {
            prompt: "What does hygroscopic mean?",
            options: [
              "It takes moisture from the air",
              "It resists water absorption unless the surface coating is damaged",
              "It releases moisture only when heated above the boiling point of water",
              "It holds a constant moisture content once the material has been dried",
            ],
            correctIndex: 0,
            explanation:
              "The handbook's opening sentence: wood takes on moisture from the surrounding environment, and it keeps doing so for the life of the house.",
            sourceLessonSlug: "moisture-and-movement",
          },
          {
            prompt: "What is moisture content measured against?",
            options: [
              "The ovendry mass of the wood",
              "The mass of the piece as delivered to the jobsite",
              "The volume of the piece, expressed as water per cubic foot",
              "The mass of an identical piece of the same species at equilibrium",
            ],
            correctIndex: 0,
            explanation:
              "Mass of water divided by ovendry mass, as a percentage. Because the denominator is the dry wood, green lumber can exceed 100 percent.",
            sourceLessonSlug: "moisture-and-movement",
          },
          {
            prompt: "How can green lumber have a moisture content above 100 percent?",
            options: [
              "The denominator is the dry wood",
              "Because bark and sap are included in the measurement of a green piece",
              "Because the figure is a volume ratio rather than a mass ratio",
              "Because the reading is taken before the piece has been weighed at all",
            ],
            correctIndex: 0,
            explanation:
              "A piece can hold more water by mass than the dry wood itself weighs, which makes percentages over 100 ordinary rather than impossible.",
            sourceLessonSlug: "moisture-and-movement",
          },
          {
            prompt: "What is the fiber saturation point?",
            options: [
              "Cell walls saturated, cavities empty",
              "The moisture content at which wood begins to decay regardless of species",
              "The point at which no further water can be added to a piece of wood",
              "The moisture content lumber must reach before it may be graded as dry",
            ],
            correctIndex: 0,
            explanation:
              "Cell walls completely saturated with bound water, but no water in the cell lumina. It is the threshold at which movement starts.",
            sourceLessonSlug: "moisture-and-movement",
          },
          {
            prompt: "What average does the handbook give for the point below which most wood properties start to change?",
            options: [
              "About 30 percent",
              "About 19 percent, matching the definition of dry lumber in the standard",
              "About 12 percent, matching the recommended value for exterior use",
              "About 50 percent, halfway between green and ovendry condition",
            ],
            correctIndex: 0,
            explanation:
              "The handbook gives about 30 percent as the practical average, while noting it varies by species and by piece.",
            sourceLessonSlug: "moisture-and-movement",
          },
          {
            prompt: "What is equilibrium moisture content?",
            options: [
              "Neither gaining nor losing moisture",
              "The average moisture content of a species measured across its whole range",
              "The moisture content lumber is kiln dried to before it leaves the mill",
              "The moisture content at which wood stops shrinking permanently",
            ],
            correctIndex: 0,
            explanation:
              "It depends on the temperature and relative humidity around the wood, which makes it a target that moves with the seasons.",
            sourceLessonSlug: "moisture-and-movement",
          },
          {
            prompt: "In which direction does wood shrink most?",
            options: [
              "Tangentially",
              "Longitudinally, which is why long members shorten noticeably as they dry",
              "Radially, because shrinkage follows the path water takes out of the log",
              "Equally in all three directions, since the cell walls shrink uniformly",
            ],
            correctIndex: 0,
            explanation:
              "Most in the direction of the annual growth rings, about half as much across them, and only slightly along the grain.",
            sourceLessonSlug: "moisture-and-movement",
          },
          {
            prompt: "What ratio does the handbook give between tangential and radial shrinkage?",
            options: [
              "Tangential is about twice radial",
              "They are approximately equal in softwoods and differ only in hardwoods",
              "Radial is about three times tangential in most commercial species",
              "The ratio depends entirely on how quickly the piece was dried",
            ],
            correctIndex: 0,
            explanation:
              "The handbook states it as a plain sentence beside its figure on shrinkage and distortion.",
            sourceLessonSlug: "moisture-and-movement",
          },
          {
            prompt: "What is average longitudinal shrinkage from green to ovendry for most species?",
            options: [
              "Between 0.1 and 0.2 percent",
              "Between 2 and 3 percent, which is why long members must be cut oversize",
              "Between 4 and 5 percent, similar to radial shrinkage in most species",
              "Zero, because wood does not change length along the grain at all",
            ],
            correctIndex: 0,
            explanation:
              "Small enough to ignore in most framing, which is exactly why the movement that matters is across the grain.",
            sourceLessonSlug: "moisture-and-movement",
          },
          {
            prompt: "What tangential shrinkage does the handbook list for coast Douglas-fir, green to ovendry?",
            options: [
              "7.6 percent",
              "12.4 percent, which is the figure given for its volumetric shrinkage",
              "4.8 percent, which is the figure given for its radial shrinkage",
              "19 percent, matching the maximum moisture content for dry lumber",
            ],
            correctIndex: 0,
            explanation:
              "Radial 4.8, tangential 7.6, volumetric 12.4. The tangential figure is roughly double the radial one, as the general rule predicts.",
            sourceLessonSlug: "moisture-and-movement",
          },
          {
            prompt: "What caution does the lesson attach to the published shrinkage values?",
            options: [
              "They come from small clear specimens",
              "They were measured before 1950 and have not been checked since",
              "They apply only to lumber dried in a kiln rather than air dried",
              "They are averages across all species rather than values for one",
            ],
            correctIndex: 0,
            explanation:
              "They are not a promise about the stick in your wall, and the handbook notes shrinkage varies with density, size, shape and drying rate.",
            sourceLessonSlug: "moisture-and-movement",
          },
          {
            prompt: "What does the handbook advise about the moisture content of wood at installation?",
            options: [
              "Install it near its service value",
              "Install it as dry as possible, since drier wood always performs better",
              "Install it green, so that it dries in place and tightens the joints",
              "Install it at the same value everywhere in the United States",
            ],
            correctIndex: 0,
            explanation:
              "Installing at the level the wood will experience in service minimises seasonal variation and the dimensional change that follows.",
            sourceLessonSlug: "moisture-and-movement",
          },
          {
            prompt: "What recommended installation value does the handbook give for interior woodwork and flooring in most of the United States?",
            options: [
              "About 8 percent",
              "About 19 percent, which is the maximum for lumber graded as dry",
              "About 30 percent, just below the fiber saturation point",
              "About 12 percent, the same figure recommended for exterior use",
            ],
            correctIndex: 0,
            explanation:
              "About 8 percent for interior work and about 12 percent for exterior siding, trim and sheathing, with tolerances around each.",
            sourceLessonSlug: "moisture-and-movement",
          },
          {
            prompt: "What maximum moisture content defines dry lumber in the American Softwood Lumber Standard?",
            options: [
              "19 percent",
              "8 percent, matching the recommended value for interior installation",
              "30 percent, the average fiber saturation point for wood",
              "12 percent, matching the recommended value for exterior installation",
            ],
            correctIndex: 0,
            explanation:
              "Worth knowing when reading a grade stamp, and worth noticing that it sits above the recommended installation values.",
            sourceLessonSlug: "moisture-and-movement",
          },
          {
            prompt: "Above the fiber saturation point, what happens to wood's dimensions as moisture changes?",
            options: [
              "They stay stable",
              "They change faster than below it, because more water is moving",
              "They shrink steadily until the wood reaches its ovendry condition",
              "They swell without limit until the cell walls rupture",
            ],
            correctIndex: 0,
            explanation:
              "Wood is dimensionally stable above the fiber saturation point. Below it, the cell wall volume depends on bound water, so the wood moves.",
            sourceLessonSlug: "moisture-and-movement",
          },
          {
            prompt: "Why is equilibrium moisture content described as a moving target?",
            options: [
              "Temperature and humidity change",
              "Because the wood's species characteristics alter as it ages in place",
              "Because the ovendry mass of the wood falls slowly over many years",
              "Because measurement instruments drift and must be recalibrated often",
            ],
            correctIndex: 0,
            explanation:
              "It follows the conditions around the wood, so it changes with the seasons, which is why wooden things move in a predictable annual cycle.",
            sourceLessonSlug: "moisture-and-movement",
          },
          {
            prompt: "What word describes a material that behaves differently in different directions?",
            options: [
              "Anisotropic",
              "Hygroscopic, which specifically describes directional moisture uptake",
              "Orthogonal, meaning its axes meet at right angles to one another",
              "Heterogeneous, meaning it is made of more than one substance",
            ],
            correctIndex: 0,
            explanation:
              "The handbook uses it for shrinkage: tangential, radial and longitudinal movement all differ.",
            sourceLessonSlug: "moisture-and-movement",
          },
          {
            prompt: "What does the Wood Handbook say may be needed as members of a built-up assembly shrink?",
            options: [
              "Tightening the fastenings",
              "Replacing the connectors entirely once the members reach service moisture",
              "Adding a second row of members alongside the originals",
              "Sealing the assembly so that no further moisture change is possible",
            ],
            correctIndex: 0,
            explanation:
              "Tightening bolts or other fastenings occasionally, to maintain full bearing of the connectors. Shrinkage is a connection problem as well as a dimensional one.",
            sourceLessonSlug: "what-moving-wood-does",
          },
          {
            prompt: "Which everyday consequences does the handbook list for shrinking and swelling?",
            options: [
              "Warping, checking and splitting",
              "Decay, insect attack and fungal staining of the exposed surfaces",
              "Loss of strength, loss of stiffness and eventual collapse under load",
              "Corrosion of fasteners and staining of the finish around them",
            ],
            correctIndex: 0,
            explanation:
              "It names those three, and the performance problems that follow, including gaps in flooring.",
            sourceLessonSlug: "what-moving-wood-does",
          },
          {
            prompt: "What does the course say about a gap that opens between floorboards in winter and closes in summer?",
            options: [
              "It is the wood behaving normally",
              "It is a sign the subfloor beneath has begun to fail and needs inspection",
              "It means the floor was installed above its recommended moisture content",
              "It indicates a leak somewhere in the building's water-resistive barrier",
            ],
            correctIndex: 0,
            explanation:
              "Seasonal and reversible movement is wood following the humidity around it. Movement that goes one way and stays is a different question.",
            sourceLessonSlug: "what-moving-wood-does",
          },
          {
            prompt: "What are bow, crook and twist?",
            options: [
              "Three ways a board distorts",
              "Three grades of lumber, ranked by the number of knots permitted",
              "Three cuts made when a rafter is laid out with a framing square",
              "Three kinds of bracing used to keep a framed wall square",
            ],
            correctIndex: 0,
            explanation:
              "Distortion along the face, along the edge, and around the length. The handbook names them when describing reaction wood and cross grain.",
            sourceLessonSlug: "what-moving-wood-does",
          },
          {
            prompt: "What is reaction wood?",
            options: [
              "Wood formed in a leaning tree",
              "Wood that has already been dried once and then rewetted in service",
              "Wood taken from the outermost rings, where growth was fastest",
              "Wood treated with preservative, which reacts with moisture differently",
            ],
            correctIndex: 0,
            explanation:
              "Compression wood in softwoods and tension wood in hardwoods. It shrinks excessively parallel to the grain, up to 2 percent green to ovendry.",
            sourceLessonSlug: "what-moving-wood-does",
          },
          {
            prompt: "Why is a floor joist installed with its crown turned up?",
            options: [
              "The floor's weight will flatten it",
              "Because water will then run off the joist rather than pooling on it",
              "Because the crown marks the face the subfloor must be nailed to",
              "Because a joist is stronger when its bow faces the load",
            ],
            correctIndex: 0,
            explanation:
              "The manual says the joist will later settle from the weight of the floor and straighten out. The floor starts very slightly humped on purpose.",
            sourceLessonSlug: "what-moving-wood-does",
          },
          {
            prompt: "What must be allowed for where wood joists meet a steel beam?",
            options: [
              "The wood shrinks and the steel does not",
              "The steel expands in summer while the wood stays the same size",
              "The wood is stronger than the steel and will crush it over time",
              "The two materials cannot be fastened together at all",
            ],
            correctIndex: 0,
            explanation:
              "The manual says allowance must be made for joist shrinkage while the steel beams remain the same size. Two materials in one floor, one of which moves.",
            sourceLessonSlug: "what-moving-wood-does",
          },
          {
            prompt: "Why are sheathing panels not laid up tight against each other?",
            options: [
              "To leave room for swelling",
              "To let an inspector see the framing behind them before they are covered",
              "To reduce the number of fasteners needed along each panel edge",
              "To let air move behind the panels and dry the framing out",
            ],
            correctIndex: 0,
            explanation:
              "The manual says not to lay up plywood with tight joints, and to allow for expansion if moisture should enter the joints.",
            sourceLessonSlug: "what-moving-wood-does",
          },
          {
            prompt: "What is checking?",
            options: [
              "Shallow splitting along the grain",
              "The routine inspection of framing before it is covered by finishes",
              "The crushing of fibres beneath a concentrated load",
              "The bowing of a panel between its supports under its own weight",
            ],
            correctIndex: 0,
            explanation:
              "It is one of the three distortions the handbook names as a consequence of shrinking and swelling, alongside warping and splitting.",
            sourceLessonSlug: "what-moving-wood-does",
          },
          {
            prompt: "When movement in a house is seasonal and reverses each year, what is the first suspect?",
            options: [
              "Wood moisture",
              "Foundation settlement, which follows the same annual weather cycle",
              "A failed connection, which opens under load and closes when unloaded",
              "Thermal expansion of the framing as temperatures rise and fall",
            ],
            correctIndex: 0,
            explanation:
              "Reversible seasonal movement matches the behaviour lesson 8 describes. Movement that goes one way and stays belongs to somebody qualified.",
            sourceLessonSlug: "what-moving-wood-does",
          },
          {
            prompt: "What kind of movement does the course say is NOT a wood-moisture question?",
            options: [
              "Movement that keeps going one way",
              "Movement visible only in the coldest month of the year",
              "Movement that appears in flooring rather than in framing",
              "Movement small enough to measure only with an instrument",
            ],
            correctIndex: 0,
            explanation:
              "Something that moves once and does not come back, or keeps going in one direction, is a different question, and the lesson hands it on.",
            sourceLessonSlug: "what-moving-wood-does",
          },
          {
            prompt: "What is a crown on a piece of framing lumber?",
            options: [
              "A slight bow along its edge",
              "The stamped mark showing the grade and mill of origin",
              "The rounded corner left by the planer at the mill",
              "The end of the piece cut from nearest the top of the tree",
            ],
            correctIndex: 0,
            explanation:
              "The manual says most joists have one, and that each joist should be sighted before nailing so the crown is turned up.",
            sourceLessonSlug: "what-moving-wood-does",
          },
          {
            prompt: "What does the shrinkage of a built-up assembly do to its connections?",
            options: [
              "It loosens the bearing between parts",
              "It tightens them, because shrinking members grip fasteners harder",
              "It has no effect, because connectors are sized to allow for movement",
              "It transfers load from the fasteners to the wood itself",
            ],
            correctIndex: 0,
            explanation:
              "The handbook's point about tightening fastenings to maintain full bearing is about exactly this. Movement changes how firmly parts press together.",
            sourceLessonSlug: "what-moving-wood-does",
          },
          {
            prompt: "Where can you see bow, crook and twist without visiting a jobsite?",
            options: [
              "In a stack of lumber at a supplier",
              "Only under laboratory conditions, using measuring equipment",
              "In finished framing, once the drywall has been removed",
              "In kiln-dried lumber only, since green lumber stays straight",
            ],
            correctIndex: 0,
            explanation:
              "The three named distortions are visible in any pile of framing material, which makes them one of the easiest things in this course to check for yourself.",
            sourceLessonSlug: "what-moving-wood-does",
          },
          {
            prompt: "What does the lesson say shrinkage changes besides dimensions?",
            options: [
              "How firmly parts press together",
              "The species of the wood, as the cell structure gradually alters",
              "The direction in which the grain runs through a member",
              "The load a member was originally designed to carry",
            ],
            correctIndex: 0,
            explanation:
              "That is why it becomes a connection question, and why the handbook mentions tightening fastenings in built-up assemblies.",
            sourceLessonSlug: "what-moving-wood-does",
          },
          {
            prompt: "How much can reaction wood and juvenile wood shrink along the grain, green to ovendry?",
            options: [
              "Up to 2 percent",
              "Up to 12 percent, matching the volumetric shrinkage of Douglas-fir",
              "Up to 30 percent, the average fiber saturation point",
              "Up to 0.2 percent, the same as normal wood",
            ],
            correctIndex: 0,
            explanation:
              "Ten to twenty times the normal longitudinal figure, which is why such pieces warp seriously rather than settling quietly.",
            sourceLessonSlug: "what-moving-wood-does",
          },
          {
            prompt: "What do the small gaps between sheathing panels on a house under construction indicate?",
            options: [
              "Deliberate allowance for movement",
              "Panels cut short to save material on a tight budget",
              "Framing that is out of square, leaving the panels unable to meet",
              "A stage of work that will be corrected before the cladding goes on",
            ],
            correctIndex: 0,
            explanation:
              "The manual explicitly advises against tight joints so the panels have room if moisture enters them.",
            sourceLessonSlug: "what-moving-wood-does",
          },
          {
            prompt: "Which lesson's material explains why a door can stick in one season and not another?",
            options: [
              "The moisture and movement lesson",
              "The lesson on load paths, because doors sit in bearing walls",
              "The lesson on connections, because hinges loosen under repeated use",
              "The lesson on the parts list, because door names vary by region",
            ],
            correctIndex: 0,
            explanation:
              "Equilibrium moisture content follows the seasons, and wood swells and shrinks across the grain as it does.",
            sourceLessonSlug: "moisture-and-movement",
          },
          {
            prompt: "Which single fact explains most of the surprising things a house does?",
            options: [
              "Wood behaves differently in each direction",
              "Nails hold better in some species of framing lumber than in others",
              "Houses are built by many trades working in sequence",
              "Building codes change between editions and between jurisdictions",
            ],
            correctIndex: 0,
            explanation:
              "That is the opening claim of lesson 7, and the movement figures in lesson 8 are what make it concrete.",
            sourceLessonSlug: "wood-as-an-engineering-material",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 4 — Ground, footing, foundation, floor
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "soil-and-footings",
      title: "10 · Soil bearing, and why a footing is wide",
      section: "Section 4 · Ground, footing, foundation and floor",
      body: `The bottom of the load path is not concrete. It is dirt, and dirt varies.

"The ability of the earth to support a load is called its soil-bearing capacity. This varies considerably with different types of soil" (NETPDTC, 1993, p. 2-3). That is the whole reason a house cannot be designed without knowing where it is going. The same passage then gives the design move that follows: "A soil of a given bearing capacity bears a heavier load on a wide foundation or footing than on a narrow one" (NETPDTC, 1993, p. 2-3).

**That sentence is the answer to why a footing is wider than the wall on it.** The load does not change. The area it is spread over does. Widen the base and the same weight presses less hard on each square foot of ground. This course gives no footing dimension, because the right width depends on the load above and the soil below, both of which belong to one site.

**The vocabulary, from the same manual.** "The portion of a structure that extends above the ground level is called the superstructure. The portion below the ground level is called the substructure. The parts of the substructure that distribute building loads to the ground are called foundations. Footings are installed at the base of foundations to spread the loads over a larger ground area. This prevents the structure from sinking into the ground" (NETPDTC, 1993, p. 7-2).

**Then there is frost.** Water expands when it freezes, and soil holding water lifts as it freezes and drops as it thaws. The manual's design rule is stated twice in two different chapters. In the chapter on structures: "the foundation walls have to extend below the frost line to guard against the effects of freezing and thawing" (NETPDTC, 1993, p. 2-1). In the chapter on concrete: "the footings of any foundation system should always be placed below the frost line" (NETPDTC, 1993, p. 7-2). How deep that is where you live is a local fact, and the building department holds it.

**One more thing you can see.** "In most footings, the bottom of the footing is cast directly against the earth and only the sides are molded in forms" (NETPDTC, 1993, p. 7-2). A footing is not a precast object dropped into a hole. It is concrete poured into the ground, taking the shape of what was dug, which is why the condition of the bottom of that trench is worth someone's attention before the truck arrives.

:::reveal Why is a footing wider than the wall it carries? ||| Because a soil of a given bearing capacity carries a heavier load on a wide footing than on a narrow one. Widening the base spreads the same weight over more ground.

:::reveal Why must footings and foundation walls reach below the frost line? ||| To guard against the effects of freezing and thawing, which lift and drop soil that holds water.

## Vocabulary
- **Soil-bearing capacity**: how much load a given soil can support, which varies considerably between soil types.
- **Superstructure**: the part of a structure above ground level.
- **Substructure**: the part below ground level, including the foundations.
- **Footing**: the widened base at the bottom of a foundation that spreads load onto the soil.
- **Frost line**: the depth to which the ground freezes in a given place, which the local building department can tell you.

## Sources
Naval Education and Training Professional Development and Technology Center. (1993). *Builder 3 & 2, Volume 1* (NAVEDTRA 14043). U.S. Navy. https://www.militarynewbie.com/wp-content/uploads/2013/11/US-Navy-course-Builder-3-2-Volume-1-NAVEDTRA-14043.pdf`,
    },
    {
      slug: "foundations-and-what-sits-on-them",
      title: "11 · Foundation walls, slabs, and the joint where wood meets concrete",
      section: "Section 4 · Ground, footing, foundation and floor",
      body: `Above the footing, American houses do one of three things: a full basement, a crawl space, or a slab poured on the ground. The manual notes the climate logic directly, observing that in the tropics a structure "should have a low-pitch roof and be built on a concrete slab or have shallow foundation walls" (NETPDTC, 1993, p. 2-1), whereas a cold-climate foundation has to reach below the frost line anyway, so the extra depth may as well become usable space.

**Where wood meets concrete is the most interesting joint in the building.** Two materials with nothing in common meet there: one moves with moisture, one does not; one rots, one does not; one is nailed, one is drilled. The Navy manual handles that joint carefully, and every detail it describes is a clue you can look for.

- **The sill plate is the transition piece.** It is "the lowest member of the frame structure resting on the foundation" and it "provides a nailing base for joists or studs resting directly over the foundation" (NETPDTC, 1994, p. 1-1).
- **Anchor bolts tie it down**, and the manual is explicit about who owns their numbers: "The length of the anchor bolt is found in the specifications; the spacing and location of the bolts are shown on the drawings" (NETPDTC, 1994, p. 1-3). Lesson 2, again, from a different page.
- **A sill sealer goes under it.** "The insulation compresses, filling the irregularities in the foundation. It also stops drafts and reduces heat loss" (NETPDTC, 1994, p. 1-2). A concrete wall is never perfectly flat, and that gap is an air leak until something fills it.
- **A termite shield may go under it too**, where specified, made of sheet metal with its outer edges turned slightly down (NETPDTC, 1994, p. 1-2).

**Keeping wood up off the ground is structural, not tidy.** The manual calls for clearance between the bottoms of the floor joists and the ground, and between the bottom of a girder and the ground, in a crawl space (NETPDTC, 1994, p. 1-5). It gives figures; the governing figures where you live come from your adopted code, so this course does not print them. Section 8 explains what that clearance is protecting the wood from, and it is not an aesthetic concern.

**Girder ends get air.** Where a girder end sits in a pocket cast into a concrete wall, the manual calls for an air space around the sides and end of the girder, and for treating the end with a preservative (NETPDTC, 1994, p. 1-7). A beam end buried tight in masonry cannot dry.

**Where the floor is a slab**, the walls are anchored straight to it: "the bottom plates of the walls must be either bolted to the slab or nailed to the slab with a powder-actuated driver. If bolts are used, they must be accurately set into the slab at the time of the concrete pour" (NETPDTC, 1994, p. 1-29). Note the timing. That decision is made while the concrete is wet, hours before anybody frames anything.

:::reveal Who owns the length of an anchor bolt, and who owns its spacing? ||| The specifications give the length; the drawings show the spacing and location.

:::reveal Why does a girder end sitting in a concrete pocket need an air space around it? ||| Because a beam end buried tight in masonry cannot dry, and wood that cannot dry is wood at risk.

## Vocabulary
- **Crawl space**: a shallow unoccupied space between the ground and the floor frame, tall enough to crawl through and no more.
- **Slab on grade**: a concrete floor poured directly on prepared ground, with no framed floor beneath it.
- **Anchor bolt**: the bolt cast into a foundation that ties the sill plate down to it, sometimes called a j-bolt for its shape.
- **Sill sealer**: the compressible strip laid between foundation and sill plate that fills irregularities and stops drafts.
- **Termite shield**: a sheet metal barrier set under the sill where specified, with its outer edges turned down.

## Sources
Naval Education and Training Professional Development and Technology Center. (1993). *Builder 3 & 2, Volume 1* (NAVEDTRA 14043). U.S. Navy. https://www.militarynewbie.com/wp-content/uploads/2013/11/US-Navy-course-Builder-3-2-Volume-1-NAVEDTRA-14043.pdf
Naval Education and Training Professional Development and Technology Center. (1994). *Builder 3 & 2, Volume 2* (NAVEDTRA 14044). U.S. Navy. https://www.constructionknowledge.net/public_domain_documents/Builder_3_and_2_vol_2_NAVEDTRA_14044_1994.pdf`,
    },
    {
      slug: "the-floor-frame",
      title: "12 · The floor frame, and the platform everything else stands on",
      section: "Section 4 · Ground, footing, foundation and floor",
      body: `"Floor framing consists specifically of the posts, girders, joists, and subfloor. When these are assembled, as in figure 1-7, they form a level anchored platform for the rest of the construction" (NETPDTC, 1994, p. 1-4).

That is the job. Everything above is built on this, so a floor that is not level and not square hands its problems upward forever.

**The box sill.** In platform construction the sill plate and the header joist are anchored to the foundation wall, and the floor joists are supported and held in position by that assembly (NETPDTC, 1994, p. 1-1). The rim joist is not decorative trim. The manual says header joists "prevent the common joists from rolling or tipping. They also help support the wall above and fill in the spaces between the common joists" (NETPDTC, 1994, p. 1-8). A tall thin joist standing on edge would happily fall over; the rim stops it.

**Joists reach as far as they reach.** Where the building is wider than a joist should span, the joists are lapped or butted over a girder partway across, or supported by a steel beam, or hung from the side of one in joist hangers (NETPDTC, 1994, pp. 1-8 to 1-11). Each arrangement is visible from underneath in an unfinished basement.

**Bridging is the quiet one.** "Bridging holds the joists in line and helps distribute the load carried by the floor unit" (NETPDTC, 1994, p. 1-12). Those little diagonal braces or solid blocks between joists are doing two jobs: keeping each joist upright, and letting a load landing on one joist be shared with its neighbours.

**Holes in a floor obey the same rule as holes in a wall.** Where a stair or a duct passes through, joists have to be cut, and the manual states the principle this course keeps returning to: "When the joists are cut for such openings, there is a loss of strength in the area of the opening. You need to frame the opening in a way that restores this strength" (NETPDTC, 1994, p. 1-15). The cut joists are carried by **headers**, the headers by doubled **trimmer** joists at the sides, and the short pieces running to the header are **tail joists**.

**The subfloor finishes the platform.** "The subfloor, also known as rough flooring, is nailed to the top of the floor frame. It strengthens the entire floor unit and serves as a base for the finish floor. The walls of the building are laid out, framed, and raised into place on top of the subfloor" (NETPDTC, 1994, p. 1-16). Panels go down with the grain of the outer plies at right angles to the joists and with their end joints staggered, and each panel carries a printed index mark: the manual explains that a mark such as 32/16 tells you the maximum support spacing that panel is suitable for as roof sheathing and as subfloor (NETPDTC, 1994, p. 1-17). That is a label you can read on any jobsite. The drawings still govern what is used.

:::reveal What two jobs does bridging between floor joists do? ||| It holds the joists in line so they cannot roll or tip, and it helps distribute the load carried by the floor unit between them.

:::reveal What does the manual say happens when joists are cut to make a floor opening, and what must be done about it? ||| There is a loss of strength in the area of the opening, and the opening has to be framed in a way that restores that strength.

## Vocabulary
- **Box sill**: the sill plate and header joist assembly anchored to the foundation, which supports and positions the floor joists.
- **Bridging**: diagonal braces or solid blocks between joists that hold them in line and share load between them.
- **Trimmer joist**: the doubled joist at the side of a floor opening that carries the headers.
- **Tail joist**: a shortened joist running from a header to its other support at a floor opening.
- **Panel index mark**: the printed rating on a structural panel giving the maximum support spacing it suits.

## Sources
Naval Education and Training Professional Development and Technology Center. (1994). *Builder 3 & 2, Volume 2* (NAVEDTRA 14044). U.S. Navy. https://www.constructionknowledge.net/public_domain_documents/Builder_3_and_2_vol_2_NAVEDTRA_14044_1994.pdf`,
    },
    {
      slug: "section-4-quiz",
      title: "Section 4 quiz · Ground, footing, foundation and floor",
      section: "Section 4 · Ground, footing, foundation and floor",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Why does this course give no footing dimension for a particular house?",
            options: [
              "The size depends on the load above and the soil below",
              "Footing sizes are trade secrets held by concrete suppliers",
              "Footings are poured to whatever depth the excavator reaches that day",
              "The dimension is fixed nationally, so printing it would add nothing",
            ],
            correctIndex: 0,
            explanation:
              "A footing spreads a load over enough earth to stay put, so its size is a question about two things this course cannot know for your house: what is stacked above it and what the soil beneath it can bear. The number belongs to the drawings and the adopted code, which is where the course sends you.",
            sourceLessonSlug: "soil-and-footings",
          },
          {
            prompt: "What does a foundation wall do that a footing does not?",
            options: [
              "Carry the load down past the surface and hold back the earth beside it",
              "Spread the load across a wider area of soil",
              "Keep the floor frame level while the concrete cures",
              "Transfer the roof load sideways into the ground",
            ],
            correctIndex: 0,
            explanation:
              "The footing spreads the load onto the soil; the wall above it carries that load down to the footing and, where there is earth against it, resists the sideways push of that earth. They are two jobs, which is why they are two parts.",
            sourceLessonSlug: "foundations-and-what-sits-on-them",
          },
          {
            prompt: "What is soil-bearing capacity?",
            options: [
              "How much load the earth can support",
              "The depth of soil that must be removed before a footing can be poured",
              "The weight of soil bearing against the outside of a foundation wall",
              "The proportion of a building's weight carried by the soil rather than by rock",
            ],
            correctIndex: 0,
            explanation:
              "The manual says it varies considerably with different types of soil, which is why a house cannot be designed without knowing where it will stand.",
            sourceLessonSlug: "soil-and-footings",
          },
          {
            prompt: "What does a soil of a given bearing capacity do with a wide footing that it cannot do with a narrow one?",
            options: [
              "Bear a heavier load",
              "Resist the sideways push of wind against the walls above",
              "Keep the foundation dry by holding water further from the concrete",
              "Allow the footing to be poured at a shallower depth",
            ],
            correctIndex: 0,
            explanation:
              "That single sentence is the reason a footing is wider than the wall on it. The load stays the same and the area it presses on grows.",
            sourceLessonSlug: "soil-and-footings",
          },
          {
            prompt: "Why does this course give no footing dimension?",
            options: [
              "It depends on the load and the soil",
              "Because footing sizes are standardised nationally and so need no explanation",
              "Because footings are poured by a separate trade the course does not cover",
              "Because the dimension is set by the width of the excavator's bucket",
            ],
            correctIndex: 0,
            explanation:
              "Both the load above and the soil below belong to one site. A width that suits one house is wrong at the next.",
            sourceLessonSlug: "soil-and-footings",
          },
          {
            prompt: "What is the superstructure of a building?",
            options: [
              "The part above ground level",
              "The framing, as distinct from the finishes applied to it",
              "The part carrying the roof, as distinct from the part carrying the floors",
              "The structure added when a house is extended upward",
            ],
            correctIndex: 0,
            explanation:
              "The manual pairs it with the substructure, which is the portion below ground level.",
            sourceLessonSlug: "soil-and-footings",
          },
          {
            prompt: "What does the manual call the parts of the substructure that distribute building loads to the ground?",
            options: [
              "Foundations",
              "Bearing partitions, since they carry load down to the substructure",
              "Piers, which is the general term for anything below ground level",
              "Grade beams, which run between the points where the loads land",
            ],
            correctIndex: 0,
            explanation:
              "And footings are installed at the base of foundations to spread those loads over a larger ground area.",
            sourceLessonSlug: "soil-and-footings",
          },
          {
            prompt: "What does the manual say footings prevent?",
            options: [
              "The structure sinking into the ground",
              "Water reaching the underside of the floor frame in a crawl space",
              "Frost forming against the outside face of the foundation wall",
              "The foundation wall from cracking as the concrete cures",
            ],
            correctIndex: 0,
            explanation:
              "Spreading the load over a larger ground area is what stops a building from pressing its way into the soil.",
            sourceLessonSlug: "soil-and-footings",
          },
          {
            prompt: "Why must footings be placed below the frost line?",
            options: [
              "Freezing and thawing lift and drop soil",
              "Because concrete cannot cure properly at temperatures near freezing",
              "Because soil below the frost line is always denser and stronger",
              "Because water pipes are routed above the frost line and must be cleared",
            ],
            correctIndex: 0,
            explanation:
              "Water expands as it freezes, so soil holding water lifts and then drops. A footing above that zone moves with it.",
            sourceLessonSlug: "soil-and-footings",
          },
          {
            prompt: "How many times does the Navy manual state the frost line rule in the chapters this course read?",
            options: [
              "Twice, in two different chapters",
              "Once, as a footnote in the chapter on foundation forms",
              "Never, which is why the course infers it from the design of cold-climate houses",
              "In every chapter, since it governs all concrete work",
            ],
            correctIndex: 0,
            explanation:
              "Once in the chapter on structures, about foundation walls, and once in the chapter on concrete, about footings.",
            sourceLessonSlug: "soil-and-footings",
          },
          {
            prompt: "Who holds the answer to how deep the frost line is where you live?",
            options: [
              "The local building department",
              "The Forest Products Laboratory, which publishes frost depths by county",
              "The concrete supplier, who sets the depth by the mix being delivered",
              "The manufacturer of the foundation forms being used on the job",
            ],
            correctIndex: 0,
            explanation:
              "It is a local fact, like the adopted code edition, and it is exactly the kind of question this course sends outward.",
            sourceLessonSlug: "soil-and-footings",
          },
          {
            prompt: "How is the bottom of most footings formed?",
            options: [
              "Cast directly against the earth",
              "Poured onto a bed of compacted gravel laid inside a steel form",
              "Cast in a reusable form and lowered into the trench once cured",
              "Poured over a layer of insulation that protects it from frost",
            ],
            correctIndex: 0,
            explanation:
              "Only the sides are molded in forms. The footing takes the shape of what was dug, which is why the trench bottom matters.",
            sourceLessonSlug: "soil-and-footings",
          },
          {
            prompt: "What does the course say is at the bottom of every load path?",
            options: [
              "Soil",
              "The footing, which is the last element designed by anyone",
              "The foundation wall, which distributes the load along its length",
              "Bedrock, which every foundation eventually reaches",
            ],
            correctIndex: 0,
            explanation:
              "The manual's phrase is the ultimate support of the earth. Concrete is the last manufactured thing, not the last thing.",
            sourceLessonSlug: "soil-and-footings",
          },
          {
            prompt: "Why does the condition of a footing trench bottom deserve attention before concrete arrives?",
            options: [
              "The concrete takes its shape",
              "Because the trench must be dry before any inspection can be requested",
              "Because the forms cannot be removed afterwards if the bottom is uneven",
              "Because the depth cannot be measured once concrete has been poured",
            ],
            correctIndex: 0,
            explanation:
              "A footing is concrete poured into the ground. What is under it and what shape the ground is in becomes part of the finished work.",
            sourceLessonSlug: "soil-and-footings",
          },
          {
            prompt: "Which of these is a fact about one site rather than a general rule?",
            options: [
              "The bearing capacity of the soil",
              "That a footing spreads load over a larger area than the wall above",
              "That water expands when it freezes",
              "That the substructure is the part below ground level",
            ],
            correctIndex: 0,
            explanation:
              "Soil varies considerably from place to place, which is why it is a site question and not a course question.",
            sourceLessonSlug: "soil-and-footings",
          },
          {
            prompt: "What happens to the pressure on the ground when a footing is made wider, with the load unchanged?",
            options: [
              "It falls",
              "It rises, because the footing itself adds more weight than it spreads",
              "It stays the same, since the load has not changed",
              "It becomes uneven, concentrating at the edges of the footing",
            ],
            correctIndex: 0,
            explanation:
              "The same weight is spread over more area, so each unit of ground carries less. That is the whole idea of a footing.",
            sourceLessonSlug: "soil-and-footings",
          },
          {
            prompt: "What is the substructure?",
            options: [
              "The part below ground level",
              "The framing that supports the finish floor from underneath",
              "The temporary works that hold a building up during construction",
              "The lowest storey of a building, whether below ground or not",
            ],
            correctIndex: 0,
            explanation:
              "The manual's pairing is superstructure above ground, substructure below, with foundations as the load-distributing part of the substructure.",
            sourceLessonSlug: "soil-and-footings",
          },
          {
            prompt: "What is a frost line?",
            options: [
              "The depth the ground freezes locally",
              "The line on a drawing showing where insulation must begin",
              "The latitude north of which basements are required by code",
              "The height above which exterior wood must be treated against frost",
            ],
            correctIndex: 0,
            explanation:
              "It varies by place, and the local building department is where a homeowner finds theirs.",
            sourceLessonSlug: "soil-and-footings",
          },
          {
            prompt: "Why can a house not be designed without knowing where it will be built?",
            options: [
              "Soil and frost both vary by place",
              "Because the drawings must name the county for the permit to be valid",
              "Because material costs differ enough to change the structural design",
              "Because the direction of the sun determines the direction of the joists",
            ],
            correctIndex: 0,
            explanation:
              "Bearing capacity varies considerably with soil type, and frost depth varies by climate. Both land at the bottom of the load path.",
            sourceLessonSlug: "soil-and-footings",
          },
          {
            prompt: "In the manual's terms, what is the relationship between a foundation and a footing?",
            options: [
              "The footing is at the base of the foundation",
              "They are two names for the same element in a light-frame house",
              "The foundation sits on the footing only where the soil is weak",
              "The footing is the wall and the foundation is the slab inside it",
            ],
            correctIndex: 0,
            explanation:
              "Foundations distribute building loads to the ground, and footings are installed at their base to spread those loads further.",
            sourceLessonSlug: "soil-and-footings",
          },
          {
            prompt: "What three things do American houses commonly do above the footing?",
            options: [
              "Basement, crawl space or slab",
              "Pier, raft or pile, depending on the depth of stable soil",
              "Block, poured concrete or stone, depending on the region",
              "Insulated, uninsulated or ventilated, depending on the climate",
            ],
            correctIndex: 0,
            explanation:
              "The choice follows climate and cost. In cold climates the foundation has to reach below frost anyway, so the depth may as well become space.",
            sourceLessonSlug: "foundations-and-what-sits-on-them",
          },
          {
            prompt: "Why does the course call the wood-to-concrete joint the most interesting one in the building?",
            options: [
              "Two unlike materials meet there",
              "Because it is the only joint an inspector is required to examine",
              "Because it carries more load than any other joint in the house",
              "Because it is the last joint made before the building is finished",
            ],
            correctIndex: 0,
            explanation:
              "One moves with moisture and one does not, one rots and one does not, one is nailed and one is drilled. Every detail there exists because of that mismatch.",
            sourceLessonSlug: "foundations-and-what-sits-on-them",
          },
          {
            prompt: "What does the manual say the sill plate provides?",
            options: [
              "A nailing base",
              "A waterproof seal between the foundation and the framing above it",
              "The last opportunity to level the building before walls are raised",
              "A thermal break separating cold concrete from warm framing",
            ],
            correctIndex: 0,
            explanation:
              "It is the lowest member of the frame resting on the foundation, and it provides a nailing base for joists or studs resting directly over it.",
            sourceLessonSlug: "foundations-and-what-sits-on-them",
          },
          {
            prompt: "Where does the manual say the length of an anchor bolt is found?",
            options: [
              "In the specifications",
              "On the drawings, alongside the spacing and location of each bolt",
              "On the bolt itself, stamped on the head before it leaves the factory",
              "In the manufacturer's literature for the sill plate material",
            ],
            correctIndex: 0,
            explanation:
              "The length is in the specifications and the spacing and location are shown on the drawings. Two different documents, two different owners.",
            sourceLessonSlug: "foundations-and-what-sits-on-them",
          },
          {
            prompt: "What does a sill sealer do?",
            options: [
              "Fills irregularities and stops drafts",
              "Bonds the sill plate chemically to the top of the foundation wall",
              "Raises the sill plate clear of any water standing on the foundation",
              "Prevents the anchor bolts from corroding where they pass through wood",
            ],
            correctIndex: 0,
            explanation:
              "The manual says the insulation compresses, filling the irregularities in the foundation, and that it also stops drafts and reduces heat loss.",
            sourceLessonSlug: "foundations-and-what-sits-on-them",
          },
          {
            prompt: "Why does a sill plate need something compressible underneath it at all?",
            options: [
              "A concrete wall is never perfectly flat",
              "Because the plate must be free to slide during an earthquake",
              "Because wood swells against concrete and needs room to move",
              "Because the anchor bolts would otherwise be over-tightened",
            ],
            correctIndex: 0,
            explanation:
              "The small gaps left by an imperfect concrete surface are an air leak until something fills them.",
            sourceLessonSlug: "foundations-and-what-sits-on-them",
          },
          {
            prompt: "What is a termite shield, as the manual describes it?",
            options: [
              "Sheet metal under the sill",
              "A chemical barrier sprayed onto the soil before the slab is poured",
              "A gap deliberately left between the sill plate and the foundation",
              "A treated timber laid between the foundation and the framing",
            ],
            correctIndex: 0,
            explanation:
              "The manual describes a sheet metal shield installed where specified, with its outer edges bent slightly down.",
            sourceLessonSlug: "foundations-and-what-sits-on-them",
          },
          {
            prompt: "Why does the manual call for clearance between the floor framing and the ground in a crawl space?",
            options: [
              "To protect the wood",
              "To leave room for ductwork and plumbing to be installed later",
              "To allow the building inspector to move through the space freely",
              "To give the joists somewhere to deflect under a heavy load",
            ],
            correctIndex: 0,
            explanation:
              "Keeping wood up off the ground is a structural precaution rather than a tidy one, and section 8 explains what it protects against.",
            sourceLessonSlug: "foundations-and-what-sits-on-them",
          },
          {
            prompt: "Why does this course not print the crawl space clearance figures the manual gives?",
            options: [
              "The adopted code governs them locally",
              "Because they were measured in metric units and cannot be converted",
              "Because the manual withdrew them in a later errata sheet",
              "Because they apply only to military buildings, not to houses",
            ],
            correctIndex: 0,
            explanation:
              "The same rule as every other number in this course. The manual's figures are real; the governing figures where you live come from your own code.",
            sourceLessonSlug: "foundations-and-what-sits-on-them",
          },
          {
            prompt: "What does the manual call for around a girder end sitting in a concrete pocket?",
            options: [
              "An air space",
              "A steel bearing plate to spread the load into the wall",
              "A continuous bead of sealant to keep water out of the pocket",
              "Insulation, to stop the cold of the wall reaching the beam",
            ],
            correctIndex: 0,
            explanation:
              "An air space around the sides and end, plus preservative treatment of the end. Wood sealed tight into masonry cannot dry.",
            sourceLessonSlug: "foundations-and-what-sits-on-them",
          },
          {
            prompt: "How are wall bottom plates fixed where the ground floor is a concrete slab?",
            options: [
              "Bolted or power driven into the slab",
              "Nailed into the subfloor, which is laid over the slab first",
              "Glued to the slab with construction adhesive and left to cure",
              "Held only by the weight of the wall and the framing above it",
            ],
            correctIndex: 0,
            explanation:
              "The manual names bolting or nailing with a powder-actuated driver, and notes that bolts must be accurately set while the concrete is being poured.",
            sourceLessonSlug: "foundations-and-what-sits-on-them",
          },
          {
            prompt: "What is notable about the timing of anchor bolts in a slab?",
            options: [
              "They are set while the concrete is wet",
              "They are drilled in after the slab has cured for twenty-eight days",
              "They are installed only after the walls have been framed and measured",
              "They are set by the framing crew rather than the concrete crew",
            ],
            correctIndex: 0,
            explanation:
              "A decision made hours before anybody frames anything determines where the walls can be fixed down.",
            sourceLessonSlug: "foundations-and-what-sits-on-them",
          },
          {
            prompt: "What is a crawl space?",
            options: [
              "A shallow space under the floor frame",
              "The gap between the top of a foundation wall and the sill plate",
              "An unfinished basement with a ceiling height below eight feet",
              "The space inside a wall cavity left open for services",
            ],
            correctIndex: 0,
            explanation:
              "Tall enough to crawl through and no more. It is one of the three common things a house does above its footing.",
            sourceLessonSlug: "foundations-and-what-sits-on-them",
          },
          {
            prompt: "What is slab on grade?",
            options: [
              "A concrete floor poured on the ground",
              "A concrete floor poured over a framed floor for added mass",
              "A sloping slab poured to drain water away from the building",
              "A slab whose thickness varies with the grade of concrete used",
            ],
            correctIndex: 0,
            explanation:
              "There is no framed floor beneath it, which changes how the walls are anchored and what the load path looks like at the bottom.",
            sourceLessonSlug: "foundations-and-what-sits-on-them",
          },
          {
            prompt: "What is another common name for an anchor bolt, and why?",
            options: [
              "A j-bolt, for its shape",
              "A stud bolt, because it aligns with the studs above",
              "A rag bolt, because of the wrapping used when it is set",
              "A sill bolt, because it passes through the sill plate",
            ],
            correctIndex: 0,
            explanation:
              "The manual notes the name comes from the bolt's hooked shape, which is what keys it into the concrete.",
            sourceLessonSlug: "foundations-and-what-sits-on-them",
          },
          {
            prompt: "Which of these details at the wood-to-concrete joint is about drying rather than strength?",
            options: [
              "The air space around a girder end",
              "The anchor bolts that tie the sill plate down",
              "The clearance between the sill plate and the outside face of the wall",
              "The bolting of bottom plates to a slab",
            ],
            correctIndex: 0,
            explanation:
              "Strength holds the building together. The air space exists so that a beam end can dry, which is a durability question.",
            sourceLessonSlug: "foundations-and-what-sits-on-them",
          },
          {
            prompt: "Why does a cold-climate house often have a basement?",
            options: [
              "The foundation must go deep anyway",
              "Because a basement is required wherever the ground freezes at all",
              "Because a slab cannot be poured in a climate with hard winters",
              "Because basements are warmer than crawl spaces in every climate",
            ],
            correctIndex: 0,
            explanation:
              "If the foundation has to reach below frost, the extra depth may as well become usable space. Warm climates skip it.",
            sourceLessonSlug: "foundations-and-what-sits-on-them",
          },
          {
            prompt: "Which four elements does the manual say floor framing consists of?",
            options: [
              "Posts, girders, joists and subfloor",
              "Sill plate, rim joist, bridging and finish floor",
              "Footings, foundation walls, joists and sheathing",
              "Trimmers, headers, tail joists and blocking",
            ],
            correctIndex: 0,
            explanation:
              "Assembled, they form a level anchored platform for the rest of the construction, which is the manual's own phrase.",
            sourceLessonSlug: "the-floor-frame",
          },
          {
            prompt: "Why does the course say a floor that is out of level hands its problems upward?",
            options: [
              "Everything above is built on it",
              "Because walls are built oversize and then trimmed to suit the floor",
              "Because an unlevel floor drains water toward the exterior walls",
              "Because the subfloor cannot be nailed down to an uneven frame",
            ],
            correctIndex: 0,
            explanation:
              "The floor is the platform the walls are laid out on and raised onto, so its errors propagate to every storey above.",
            sourceLessonSlug: "the-floor-frame",
          },
          {
            prompt: "What is a box sill?",
            options: [
              "Sill plate plus header joist",
              "A boxed-in girder pocket cast into the top of a foundation wall",
              "A sill plate doubled and boxed with blocking at each corner",
              "The closed box formed by the subfloor and the joists beneath it",
            ],
            correctIndex: 0,
            explanation:
              "The manual describes the sill plate and header joist anchored to the foundation wall, with the floor joists supported and positioned by that assembly.",
            sourceLessonSlug: "the-floor-frame",
          },
          {
            prompt: "What does the manual say header joists prevent the common joists from doing?",
            options: [
              "Rolling or tipping",
              "Shrinking across their depth as they dry in place",
              "Deflecting under the weight of the wall above them",
              "Sliding along the sill plate when the house is loaded by wind",
            ],
            correctIndex: 0,
            explanation:
              "A tall thin joist standing on edge would happily fall over. The header joist also helps support the wall above and fills the spaces between joists.",
            sourceLessonSlug: "the-floor-frame",
          },
          {
            prompt: "Which of these is NOT one of the ways the manual describes joists meeting a girder?",
            options: [
              "Welded to a plate on the girder",
              "Lapped over the girder, with the ends overlapping one another",
              "Butted over the girder and cleated together across the joint",
              "Hung from the side of the girder in joist hangers",
            ],
            correctIndex: 0,
            explanation:
              "Wood joists are lapped, butted or hung. Welding belongs to steel, and the manual describes wood joists meeting both wood and steel supports.",
            sourceLessonSlug: "the-floor-frame",
          },
          {
            prompt: "What does bridging do, according to the manual?",
            options: [
              "Holds joists in line and shares load",
              "Carries the subfloor where panels do not break over a joist",
              "Stiffens the joists enough to increase the distance they may span",
              "Seals the space between joists against air moving through the floor",
            ],
            correctIndex: 0,
            explanation:
              "It holds the joists in line and helps distribute the load carried by the floor unit, so a load landing on one joist is shared with its neighbours.",
            sourceLessonSlug: "the-floor-frame",
          },
          {
            prompt: "What does the manual say happens when joists are cut for a floor opening?",
            options: [
              "Strength is lost at the opening",
              "The floor becomes stiffer, because the opening reduces the span",
              "The remaining joists must be replaced with heavier material",
              "The opening must be positioned over a bearing wall below",
            ],
            correctIndex: 0,
            explanation:
              "And the opening has to be framed in a way that restores that strength. It is the same principle as a header in a wall.",
            sourceLessonSlug: "the-floor-frame",
          },
          {
            prompt: "Which member carries the cut joists at a floor opening?",
            options: [
              "The header",
              "The tail joist, which runs from the opening to the nearest wall",
              "The bridging, which is doubled around any opening in a floor",
              "The rim joist, which is extended inward to reach the opening",
            ],
            correctIndex: 0,
            explanation:
              "Headers carry the cut joists, doubled trimmer joists at the sides carry the headers, and the short cut joists are the tail joists.",
            sourceLessonSlug: "the-floor-frame",
          },
          {
            prompt: "What is a trimmer joist?",
            options: [
              "The doubled joist beside an opening",
              "A joist trimmed to length on site to fit an irregular space",
              "The joist that carries the finish trim around a stairwell",
              "A shortened joist running from a header to its support",
            ],
            correctIndex: 0,
            explanation:
              "It runs the full length at the side of an opening and carries the headers, which is why it is doubled.",
            sourceLessonSlug: "the-floor-frame",
          },
          {
            prompt: "What is a tail joist?",
            options: [
              "A shortened joist running to a header",
              "The last joist at the end of a run, which is always doubled",
              "The joist that cantilevers past the outside wall to form an overhang",
              "The joist at the tail of a stair, carrying its lowest riser",
            ],
            correctIndex: 0,
            explanation:
              "It runs from the header to a supporting wall or girder, following the regular joist layout.",
            sourceLessonSlug: "the-floor-frame",
          },
          {
            prompt: "What does the subfloor do besides carry the finish floor?",
            options: [
              "Strengthens the whole floor unit",
              "Levels the frame by making up for variations between joists",
              "Seals the floor against air movement from below",
              "Carries the ceiling finish of the storey underneath",
            ],
            correctIndex: 0,
            explanation:
              "It strengthens the entire floor unit and serves as a base for the finish floor, and the walls are raised onto it.",
            sourceLessonSlug: "the-floor-frame",
          },
          {
            prompt: "How are subfloor panels oriented relative to the joists?",
            options: [
              "Outer plies at right angles to them",
              "Outer plies parallel to them, so the panel edges land on joist centres",
              "At forty-five degrees, so the panels also brace the floor",
              "In whatever direction leaves the fewest cuts on that floor",
            ],
            correctIndex: 0,
            explanation:
              "With the grain of the outer plies at right angles to the joists, and with end joints staggered so adjacent panels break over different joists.",
            sourceLessonSlug: "the-floor-frame",
          },
          {
            prompt: "What does a panel index mark such as 32/16 tell you?",
            options: [
              "Maximum support spacings",
              "The panel's thickness in thirty-seconds of an inch, front and back",
              "The number of plies and the grade of the outer veneer",
              "The load in pounds per square foot the panel may carry",
            ],
            correctIndex: 0,
            explanation:
              "The manual explains the mark gives the maximum spacing the panel suits as roof sheathing and as subfloor. It is a label anyone can read on a jobsite.",
            sourceLessonSlug: "the-floor-frame",
          },
          {
            prompt: "Even after reading a panel's index mark, what still decides which panel is used?",
            options: [
              "The drawings",
              "The supplier, who stocks whichever rating is available that week",
              "The framing crew, who judge it from the joist spacing on site",
              "The index mark itself, which is the governing authority",
            ],
            correctIndex: 0,
            explanation:
              "The mark tells you what that panel is rated for. The drawings and the adopted code still decide what the house gets.",
            sourceLessonSlug: "the-floor-frame",
          },
          {
            prompt: "Why are the end joints of adjacent subfloor panels staggered?",
            options: [
              "So joints break over different joists",
              "So that the panels can be cut from full sheets without waste",
              "So that water entering one joint cannot reach the next",
              "So that the panels expand in opposite directions as they swell",
            ],
            correctIndex: 0,
            explanation:
              "Staggering avoids a continuous line of joints across the floor, which would concentrate weakness in one place.",
            sourceLessonSlug: "the-floor-frame",
          },
          {
            prompt: "Where can you see for yourself how the joists in a house meet their girder?",
            options: [
              "From an unfinished basement",
              "Only by lifting the finish floor in the room above",
              "On the permit, which records the arrangement used",
              "In the attic, where the same arrangement is repeated",
            ],
            correctIndex: 0,
            explanation:
              "Lapped, butted, or hung in hangers. Each arrangement is visible from underneath wherever the framing is not covered.",
            sourceLessonSlug: "the-floor-frame",
          },
          {
            prompt: "What does the rim joist contribute to the wall above it?",
            options: [
              "It helps support it",
              "Nothing, because the wall bears entirely on the subfloor",
              "It carries the whole wall, since the joists end short of the perimeter",
              "It insulates the wall from the cold of the foundation below",
            ],
            correctIndex: 0,
            explanation:
              "The manual says header joists help support the wall above as well as preventing the joists from rolling or tipping.",
            sourceLessonSlug: "the-floor-frame",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 5 — Walls
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "studs-and-plates",
      title: "13 · Studs, plates, and why the spacing is a module",
      section: "Section 5 · Walls",
      body: `A framed wall is a ladder lying on its side: two long horizontal members with short vertical ones between them.

**The verticals.** "Studs are upright (vertical) framing members running between the top and bottom plates. Studs are usually spaced 16 inches OC, but job specifications sometimes call for 12-inch and 24-inch OC stud spacing" (NETPDTC, 1994, p. 1-18). OC means on center, measured centre to centre rather than edge to edge.

**The horizontals.** "The plate at the bottom of a wall is the soleplate, or bottom plate. The plate at the top of the wall is the top plate. A double top plate is normally used. It strengthens the upper section of the wall and helps carry the weight of the joists and roof rafters. Since top and bottom plates are nailed into all the vertical wall members, they serve to tie the entire wall together" (NETPDTC, 1994, p. 1-18). Three jobs in one member: collect load, spread load, tie the wall together.

**Why the spacing is what it is.** Not tradition, and not strength alone. The manual explains the layout rule: the first stud is set in from the corner by a carefully chosen distance so that "the edges of standard-size panels used for sheathing or wallboard fall on the centers of the studs" (NETPDTC, 1994, p. 1-23). The spacing is a module chosen so that a standard panel lands with its edges on framing at both ends and gets support in between. A house is dimensioned around the sheet goods that will cover it. The governing spacing for any real wall comes from the drawings and the adopted code, which is the point *Construction Math* makes in its lesson on feet-and-inches layout.

**Walls are not all the same.** "Traditionally, 2-by 4-inch structural lumber is used for the framed walls of one-story buildings, although the use of heavier structural lumber is specified at certain locations for particular projects. Multistory buildings, for example, require heavier structural lumber. This requirement is specific to the lower levels in order to support the weight of the floors above" (NETPDTC, 1994, pp. 1-17 to 1-18). The bottom of a stack carries more than the top of it, which is obvious once said and invisible once the drywall is on.

**Corners are assemblies, not intersections.** "Corner posts are constructed wherever a wall ties into another wall" (NETPDTC, 1994, p. 1-18), built up from several studs or studs with blocking, so that both walls have something to be nailed to and the corner has something to hold it square.

**And walls contain fire stops.** "Fire stops slow down fire travel inside walls", and the manual notes most local building codes require them in walls above a certain height (NETPDTC, 1994, p. 1-21). A stud cavity is a chimney until something blocks it.

:::reveal Why is stud spacing a module rather than an arbitrary number? ||| So the edges of standard-size sheathing and wallboard panels land on the centres of studs, with support in between. The house is dimensioned around the sheets that will cover it.

:::reveal What three jobs does the manual credit the top and bottom plates with? ||| Carrying the weight of the joists and rafters above, strengthening the upper section of the wall, and tying the entire wall together because every vertical member is nailed into them.

## Vocabulary
- **On center (OC)**: a spacing measured from the centre of one member to the centre of the next.
- **Soleplate**: the horizontal member at the bottom of a framed wall, also called the bottom plate.
- **Double top plate**: two members capping a wall, strengthening it and tying walls together at corners.
- **Corner post**: the built-up assembly of studs and blocking where one wall ties into another.
- **Fire stop**: blocking inside a wall cavity that slows fire travel, also called a fire block.

## Sources
Naval Education and Training Professional Development and Technology Center. (1994). *Builder 3 & 2, Volume 2* (NAVEDTRA 14044). U.S. Navy. https://www.constructionknowledge.net/public_domain_documents/Builder_3_and_2_vol_2_NAVEDTRA_14044_1994.pdf`,
    },
    {
      slug: "openings-and-headers",
      title: "14 · A hole in a wall, and the parts that route load around it",
      section: "Section 5 · Walls",
      body: `Cut a hole in a wall and you cut studs. The load those studs were carrying does not disappear. It has to go somewhere, and the framing around an opening is the arrangement that sends it around the hole.

**The rough opening.** "A rough opening must be framed into a wall wherever a door or window is planned. The dimensions of the rough opening must allow for the final frame and for the required clearance around the frame" (NETPDTC, 1994, p. 1-18). The hole in the framing is always bigger than the window, because the window arrives in a frame and the frame has to be shimmed straight.

**The header.** "A header is placed at the top of a rough opening. It must be strong enough to carry the weight bearing down on that section of the wall. The header is supported by trimmer studs fitting between the soleplate and the bottom of the header" (NETPDTC, 1994, p. 1-19). That is the whole mechanism in two sentences. The header is a small beam spanning the hole; the trimmer studs, also called jacks, are the short posts under its ends; the king studs beside them run full height and hold the assembly in the plane of the wall.

**The cripples.** "Cripple studs are nailed between the header and the double top plate of a door opening. These help carry the weight from the top plate to the header" (NETPDTC, 1994, p. 1-19). They are the reason a header does not need to be as tall as the space above the opening: the short studs pass the load down from the plate onto it.

**The rough sill.** At a window, "a rough window sill is added to the bottom of a rough window opening. The sill provides support for the finished window and frame to be placed in the wall" (NETPDTC, 1994, p. 1-19), with more cripples running from the sill down to the soleplate.

**Who sizes the header.** Not this course. "The type and size of header is shown in the blueprints. Header size is determined by the width of the opening and by how much weight is bearing down from the floor above" (NETPDTC, 1994, p. 1-19). Two variables, both specific to one wall in one house.

**One thing you can go and look at right now.** "The tops of all door and window openings in all walls are usually in line with each other. Therefore, all headers are usually the same height from the floor" (NETPDTC, 1994, p. 1-19). Stand in a doorway and look along a wall at the tops of the windows. That line is a framing decision made before any of it was covered up.

:::reveal What carries the ends of a header down to the sole plate? ||| Trimmer studs, also called jack studs, which fit between the sole plate and the underside of the header.

:::reveal Why is a rough opening bigger than the window that goes in it? ||| Because the dimensions must allow for the window's own frame and for the clearance needed to shim that frame straight.

## Vocabulary
- **Rough opening**: the hole framed into a wall for a door or window, sized to allow for the unit's frame and its shim clearance.
- **Header**: the member over an opening that carries the load from above across the hole.
- **Trimmer stud**: the short stud under the end of a header, also called a jack stud.
- **King stud**: the full-height stud beside an opening, running from sole plate to top plate.
- **Rough sill**: the horizontal member at the bottom of a window opening that supports the window frame.

## Sources
Naval Education and Training Professional Development and Technology Center. (1994). *Builder 3 & 2, Volume 2* (NAVEDTRA 14044). U.S. Navy. https://www.constructionknowledge.net/public_domain_documents/Builder_3_and_2_vol_2_NAVEDTRA_14044_1994.pdf`,
    },
    {
      slug: "sheathing-and-racking",
      title: "15 · What the sheathing does that the studs cannot",
      section: "Section 5 · Walls",
      body: `This is the single biggest gap in most people's picture of a house, so it gets a lesson of its own.

Imagine a wall as a rectangle of sticks pinned at the corners. Push the top sideways and the rectangle folds into a leaning parallelogram without a single stick breaking. That folding is called **racking**, and studs and plates alone do almost nothing to stop it. A triangle, by contrast, cannot change shape without changing the length of a side.

The Navy manual says so directly: "Diagonal bracing is necessary for the lateral strength of a wall" (NETPDTC, 1994, p. 1-20). It then lists the ways of getting it, in ascending order of effectiveness. A **let-in brace** is a diagonal piece notched into the faces of the studs. **Cut-in bracing** is short diagonal pieces fitted between studs. And "diagonal sheathing is the strongest type of diagonal bracing. Each board acts as a brace for the wall" (NETPDTC, 1994, p. 1-20).

**Then comes the sentence that explains modern houses.** "When plywood or other panel sheathing is used, other methods of bracing may be omitted" (NETPDTC, 1994, p. 1-20). The manual repeats the point in its section on sheathing: panels "add considerable strength to a building and often eliminate the need for diagonal bracing" (NETPDTC, 1994, p. 1-29). A sheet of structural panel nailed across many studs turns a folding rectangle into something that behaves as one stiff plane. That is why sheathing is structure and not just backing.

**The geometry is checkable, and builders check it.** When a wall is framed flat on the subfloor, it is squared before it is raised, and the test is pure triangle geometry: "When diagonal measurements are equal, the wall is square" (NETPDTC, 1994, p. 1-28). The same fact that makes a diagonal a brace makes a diagonal a measurement.

**Two consequences worth carrying.**

1. **Sheathing is not siding.** "Generally, wall sheathing does not include the finished surface of a wall. Siding, shingles, stucco, or brick veneer are placed over the sheathing to finish the wall" (NETPDTC, 1994, p. 1-29). The grey or green sheets you see on a house under construction are the structural layer, and the pretty layer comes later.
2. **A wall can be bracing without bearing.** This is the second half of lesson 6's warning. A wall carrying almost no downward weight may still be part of what keeps the building from folding sideways, and removing it removes that. Which walls those are, in one specific house, is not a question a course can answer.

:::reveal What is racking? ||| The sideways folding of a rectangular frame into a parallelogram, which happens without any member breaking and which studs and plates alone do little to resist.

:::reveal What does the manual say may be omitted when plywood or other panel sheathing is used? ||| Other methods of bracing. Panel sheathing adds considerable strength and often removes the need for let-in or cut-in diagonal bracing.

## Vocabulary
- **Racking**: sideways distortion of a rectangular frame into a parallelogram.
- **Lateral strength**: a wall's resistance to forces acting sideways rather than downward.
- **Let-in brace**: a diagonal member notched into the faces of the studs so it sits flush with them.
- **Structural panel**: a sheet product such as plywood or oriented strand board used where strength, not just covering, is required.
- **Diagonal sheathing**: boards run at an angle across the studs, which the manual calls the strongest type of diagonal bracing.

## Sources
Naval Education and Training Professional Development and Technology Center. (1994). *Builder 3 & 2, Volume 2* (NAVEDTRA 14044). U.S. Navy. https://www.constructionknowledge.net/public_domain_documents/Builder_3_and_2_vol_2_NAVEDTRA_14044_1994.pdf`,
    },
    {
      slug: "section-5-quiz",
      title: "Section 5 quiz · Studs, openings and bracing",
      section: "Section 5 · Walls",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What does the manual say studs run between?",
            options: [
              "The top and bottom plates",
              "The subfloor and the ceiling joists directly above them",
              "The sill plate and the rafters, in a single unbroken length",
              "The corner posts at each end of the wall",
            ],
            correctIndex: 0,
            explanation:
              "Studs are the upright framing members running between the plates, which is what makes a wall a ladder lying on its side.",
            sourceLessonSlug: "studs-and-plates",
          },
          {
            prompt: "What does OC mean in a framing layout?",
            options: [
              "On center",
              "Outside corner, the point layouts are measured from",
              "Overall clearance, the space left between adjacent members",
              "Original centreline, the line a wall was first set out on",
            ],
            correctIndex: 0,
            explanation:
              "Measured centre to centre rather than edge to edge, which is what makes a repeated layout come out even.",
            sourceLessonSlug: "studs-and-plates",
          },
          {
            prompt: "What stud spacings does the manual say job specifications sometimes call for besides the usual one?",
            options: [
              "Twelve and twenty-four inches",
              "Eight and thirty-two inches, matching common panel dimensions",
              "Fourteen and eighteen inches, depending on the species of lumber",
              "Any spacing the framing crew finds convenient on the day",
            ],
            correctIndex: 0,
            explanation:
              "Sixteen inches is usual, and the manual names twelve and twenty-four as alternatives that specifications sometimes require.",
            sourceLessonSlug: "studs-and-plates",
          },
          {
            prompt: "Why is stud spacing described as a module?",
            options: [
              "Panel edges land on stud centres",
              "Because every wall must contain a whole number of studs",
              "Because the spacing repeats at every storey of the building",
              "Because modules are the unit in which lumber is ordered",
            ],
            correctIndex: 0,
            explanation:
              "The layout is set so the edges of standard-size sheathing and wallboard fall on stud centres, with support in between.",
            sourceLessonSlug: "studs-and-plates",
          },
          {
            prompt: "What does the manual say a double top plate does for the upper section of a wall?",
            options: [
              "Strengthens it",
              "Levels it, correcting for variation in the lengths of the studs",
              "Seals it, closing the cavity against air moving into the attic",
              "Insulates it, reducing heat loss at the top of the wall",
            ],
            correctIndex: 0,
            explanation:
              "It strengthens the upper section, helps carry the weight of the joists and rafters, and ties the walls together at the corners.",
            sourceLessonSlug: "studs-and-plates",
          },
          {
            prompt: "Why do the plates tie an entire wall together?",
            options: [
              "Every vertical member is nailed into them",
              "Because they are the only members that run the full length of a wall",
              "Because they are doubled, and a doubled member cannot come apart",
              "Because they are fastened to the foundation at both ends",
            ],
            correctIndex: 0,
            explanation:
              "The manual makes the point directly: top and bottom plates are nailed into all the vertical wall members, so they serve to tie the wall together.",
            sourceLessonSlug: "studs-and-plates",
          },
          {
            prompt: "Where in a multistorey building does the manual say heavier structural lumber is required?",
            options: [
              "At the lower levels",
              "At the upper levels, which are most exposed to wind",
              "At the corners, where two walls meet and loads concentrate",
              "Around every opening, whatever the storey",
            ],
            correctIndex: 0,
            explanation:
              "The lower levels support the weight of the floors above. The bottom of a stack carries more than the top, which is invisible once the drywall is on.",
            sourceLessonSlug: "studs-and-plates",
          },
          {
            prompt: "What is a corner post?",
            options: [
              "A built-up assembly where walls meet",
              "The single heaviest stud in a wall, placed at its end",
              "A steel post set at the corner of a foundation wall",
              "The post that carries the girder nearest a corner of the building",
            ],
            correctIndex: 0,
            explanation:
              "Built from several studs or studs with blocking, so both walls have something to be nailed to and the corner has something to hold it square.",
            sourceLessonSlug: "studs-and-plates",
          },
          {
            prompt: "What do fire stops in a wall do?",
            options: [
              "Slow fire travel inside the wall",
              "Prevent a fire in one room from reaching the room next to it",
              "Hold the insulation in place so the cavity is not left empty",
              "Support the drywall at the midpoint of a tall wall",
            ],
            correctIndex: 0,
            explanation:
              "A stud cavity is a chimney until something blocks it. The manual notes that most local building codes require them above a certain wall height.",
            sourceLessonSlug: "studs-and-plates",
          },
          {
            prompt: "What decides the stud spacing for a real wall in a real house?",
            options: [
              "The drawings and the adopted code",
              "The width of the sheathing panels being delivered that week",
              "The framing crew's judgment about how heavy the wall will be",
              "The species of lumber, since stronger species allow wider spacing",
            ],
            correctIndex: 0,
            explanation:
              "This is the same answer Construction Math gives in its lesson on laying out a wall, and the reason for the module is what this course adds.",
            sourceLessonSlug: "studs-and-plates",
          },
          {
            prompt: "What everyday image does the lesson use for a framed wall?",
            options: [
              "A ladder lying on its side",
              "A bookcase, with shelves between two uprights",
              "A gate, held square by a single diagonal member",
              "A honeycomb, repeating one cell across a plane",
            ],
            correctIndex: 0,
            explanation:
              "Two long horizontals with short verticals between them, which is exactly how the plates and studs are arranged.",
            sourceLessonSlug: "studs-and-plates",
          },
          {
            prompt: "What is a fire block?",
            options: [
              "Another name for a fire stop",
              "A masonry unit used where framing meets a chimney",
              "A treated stud required beside every opening in an exterior wall",
              "A section of wall built without any cavity at all",
            ],
            correctIndex: 0,
            explanation:
              "The manual gives both names for the same blocking, which can be nailed in a straight line or staggered.",
            sourceLessonSlug: "studs-and-plates",
          },
          {
            prompt: "Which member collects the load from above before it reaches the studs?",
            options: [
              "The top plate",
              "The rim joist, which sits over the wall at each floor level",
              "The corner post, which distributes load along the wall",
              "The sheathing, which carries load down its own plane",
            ],
            correctIndex: 0,
            explanation:
              "It collects, spreads, and ties. Three jobs in one member, which is why it is doubled.",
            sourceLessonSlug: "studs-and-plates",
          },
          {
            prompt: "What must be framed into a wall wherever a door or window is planned?",
            options: [
              "A rough opening",
              "A structural panel, which replaces the studs that were removed",
              "A doubled stud on each side, with no member across the top",
              "A lintel cast in concrete above the opening",
            ],
            correctIndex: 0,
            explanation:
              "And its dimensions must allow for the final frame plus the required clearance around that frame.",
            sourceLessonSlug: "openings-and-headers",
          },
          {
            prompt: "What does the manual say a header must be strong enough to do?",
            options: [
              "Carry the weight bearing on that part of the wall",
              "Resist the wind pressure acting on the glass in the opening",
              "Hold the window frame square for the life of the building",
              "Span the whole wall, not just the opening within it",
            ],
            correctIndex: 0,
            explanation:
              "A header is a small beam spanning the hole, carrying what the cut studs would otherwise have carried.",
            sourceLessonSlug: "openings-and-headers",
          },
          {
            prompt: "Where do trimmer studs fit?",
            options: [
              "Between the sole plate and the header",
              "Between the header and the double top plate above it",
              "Between the rough sill and the sole plate beneath a window",
              "Between the king studs and the sheathing on the outside face",
            ],
            correctIndex: 0,
            explanation:
              "They are the short posts under the header's ends, which is how the header's load reaches the plate below.",
            sourceLessonSlug: "openings-and-headers",
          },
          {
            prompt: "What do cripple studs above a door opening do?",
            options: [
              "Carry weight from the top plate to the header",
              "Hold the header in position until the drywall is fixed",
              "Provide fire blocking in the cavity above the opening",
              "Support the ceiling joists that land over the opening",
            ],
            correctIndex: 0,
            explanation:
              "That is why a header does not have to fill the whole space above an opening. The cripples pass the load down onto it.",
            sourceLessonSlug: "openings-and-headers",
          },
          {
            prompt: "What does a rough window sill support?",
            options: [
              "The finished window and its frame",
              "The cripple studs above the header on the same opening",
              "The header, which bears on it at each end",
              "The sheathing where it crosses the opening",
            ],
            correctIndex: 0,
            explanation:
              "It is added at the bottom of the rough opening, with cripples running from it down to the sole plate.",
            sourceLessonSlug: "openings-and-headers",
          },
          {
            prompt: "What two variables determine header size, according to the manual?",
            options: [
              "Opening width and load above",
              "Wall height and the species of lumber used for the studs",
              "Window weight and the number of cripples above the header",
              "Building age and the edition of the code in force",
            ],
            correctIndex: 0,
            explanation:
              "Both are specific to one wall in one house, which is exactly why no course can supply the number.",
            sourceLessonSlug: "openings-and-headers",
          },
          {
            prompt: "Where does the manual say the type and size of header is shown?",
            options: [
              "In the blueprints",
              "In the window manufacturer's installation instructions",
              "On the wall plate, marked during layout by the framing crew",
              "In the adopted code, which tabulates it by opening width",
            ],
            correctIndex: 0,
            explanation:
              "Which is why lesson 2 said what it said. The document that owns the number is drawn for one building.",
            sourceLessonSlug: "openings-and-headers",
          },
          {
            prompt: "What observable pattern does the manual note about the tops of openings in a house?",
            options: [
              "They usually line up",
              "They rise slightly toward the centre of each wall",
              "They are set at different heights for doors and for windows",
              "They vary between floors, being higher on the ground floor",
            ],
            correctIndex: 0,
            explanation:
              "All headers are usually the same height from the floor, so the tops of doors and windows line up. It is a framing decision you can see after the fact.",
            sourceLessonSlug: "openings-and-headers",
          },
          {
            prompt: "Why is a rough opening larger than the window unit that fills it?",
            options: [
              "To allow for the frame and shim clearance",
              "To allow the window to be replaced later without cutting studs",
              "To let air circulate around the unit and dry any water that enters",
              "To leave room for the header to deflect under load",
            ],
            correctIndex: 0,
            explanation:
              "The window arrives in its own frame, and that frame has to be shimmed straight inside the hole.",
            sourceLessonSlug: "openings-and-headers",
          },
          {
            prompt: "Which studs hold the header assembly in the plane of the wall?",
            options: [
              "The king studs",
              "The cripple studs above and below the opening",
              "The trimmer studs directly under the header ends",
              "The corner posts at each end of the wall",
            ],
            correctIndex: 0,
            explanation:
              "King studs run full height beside the opening, and the trimmers are nailed to them.",
            sourceLessonSlug: "openings-and-headers",
          },
          {
            prompt: "What happens to the load the cut studs were carrying when an opening is framed?",
            options: [
              "It routes around the hole",
              "It disappears, since the opening removes the weight above it",
              "It is carried by the sheathing, which bridges the gap",
              "It transfers to the two walls at either end of the one with the hole",
            ],
            correctIndex: 0,
            explanation:
              "Header across the top, trimmers down the sides, and the load reaches the sole plate around the opening rather than through it.",
            sourceLessonSlug: "openings-and-headers",
          },
          {
            prompt: "Where does the manual say rough opening dimensions are sometimes already written down for you?",
            options: [
              "In the door and window schedule",
              "On the header itself, stamped by the supplier",
              "In the specifications, under general workmanship",
              "On the permit issued by the building department",
            ],
            correctIndex: 0,
            explanation:
              "Some blueprint schedules give the rough opening dimensions directly, which simplifies the layout.",
            sourceLessonSlug: "openings-and-headers",
          },
          {
            prompt: "What is another name for a trimmer stud?",
            options: [
              "A jack stud",
              "A king stud, seen from the inside of the opening",
              "A cripple stud, because both are shorter than full height",
              "A sill stud, because it lands on the rough sill",
            ],
            correctIndex: 0,
            explanation:
              "Both names are used for the same member, and the drawings decide which word a given job uses.",
            sourceLessonSlug: "openings-and-headers",
          },
          {
            prompt: "What is racking?",
            options: [
              "A rectangle folding into a parallelogram",
              "The crushing of a plate where a heavily loaded stud lands on it",
              "The lifting of a wall off its plate under wind uplift",
              "The bowing of a stud sideways between the plates",
            ],
            correctIndex: 0,
            explanation:
              "It happens without a single member breaking, which is why a wall of studs and plates alone does almost nothing to stop it.",
            sourceLessonSlug: "sheathing-and-racking",
          },
          {
            prompt: "What geometric shape cannot change without changing the length of a side?",
            options: [
              "A triangle",
              "A rectangle, provided its corners are firmly nailed",
              "A parallelogram, once its diagonals are equal",
              "Any shape with an even number of sides",
            ],
            correctIndex: 0,
            explanation:
              "That is why a diagonal brace works, and why a diagonal measurement is also the test for square.",
            sourceLessonSlug: "sheathing-and-racking",
          },
          {
            prompt: "What does the manual say diagonal bracing is necessary for?",
            options: [
              "The lateral strength of a wall",
              "Keeping the studs evenly spaced while the wall is raised",
              "Carrying the load of the roof down to the foundation",
              "Holding the sheathing panels flat against the framing",
            ],
            correctIndex: 0,
            explanation:
              "Lateral strength is resistance to sideways force, which is a different job from carrying weight downward.",
            sourceLessonSlug: "sheathing-and-racking",
          },
          {
            prompt: "What is a let-in brace?",
            options: [
              "A diagonal notched into the studs",
              "A diagonal nailed to the face of the studs without any notching",
              "Short diagonal pieces fitted between adjacent studs",
              "A steel strap let into the sheathing on the outside face",
            ],
            correctIndex: 0,
            explanation:
              "The studs are notched so the brace sits flush with their faces, letting the sheathing or finish lie flat over it.",
            sourceLessonSlug: "sheathing-and-racking",
          },
          {
            prompt: "Which method does the manual call the strongest type of diagonal bracing?",
            options: [
              "Diagonal sheathing",
              "Let-in bracing, because the notch locks the brace into each stud",
              "Cut-in bracing, because each short piece acts independently",
              "Metal strapping run corner to corner on both faces",
            ],
            correctIndex: 0,
            explanation:
              "Boards run at an angle across the studs, with each board acting as a brace for the wall.",
            sourceLessonSlug: "sheathing-and-racking",
          },
          {
            prompt: "What does the manual say about other bracing methods when panel sheathing is used?",
            options: [
              "They may be omitted",
              "They must be doubled, because panels add weight without strength",
              "They must be installed first and the panels laid over them",
              "They are required only on the two longest walls of the building",
            ],
            correctIndex: 0,
            explanation:
              "Panels add considerable strength to a building and often eliminate the need for diagonal bracing. That sentence explains modern wall construction.",
            sourceLessonSlug: "sheathing-and-racking",
          },
          {
            prompt: "What does a structural panel do to a folding rectangle of studs?",
            options: [
              "Makes it behave as one stiff plane",
              "Adds weight that holds the wall down against uplift",
              "Transfers the sideways load into the studs one at a time",
              "Protects it from weather so the joints do not loosen",
            ],
            correctIndex: 0,
            explanation:
              "A sheet nailed across many studs is why sheathing counts as structure rather than as backing for the siding.",
            sourceLessonSlug: "sheathing-and-racking",
          },
          {
            prompt: "How does a framing crew check that a wall is square before raising it?",
            options: [
              "Measure both diagonals",
              "Measure the height at each end and compare the two",
              "Check each corner separately with a builder's square",
              "Sight along the top plate from one end of the wall",
            ],
            correctIndex: 0,
            explanation:
              "When the diagonal measurements are equal, the wall is square. The same geometry that makes a diagonal a brace makes it a measurement.",
            sourceLessonSlug: "sheathing-and-racking",
          },
          {
            prompt: "What does the manual say wall sheathing generally does NOT include?",
            options: [
              "The finished surface",
              "The structural function, which belongs to the bracing instead",
              "Any panel product, since sheathing means boards",
              "The layer that keeps water out of the wall",
            ],
            correctIndex: 0,
            explanation:
              "Siding, shingles, stucco or brick veneer are placed over the sheathing to finish the wall. The grey sheets are the structural layer.",
            sourceLessonSlug: "sheathing-and-racking",
          },
          {
            prompt: "Why does the course say a wall can matter even when it carries almost no weight?",
            options: [
              "It may be bracing the building",
              "Because it supports the drywall of the ceiling above it",
              "Because every wall is required to be shown on the drawings",
              "Because removing it would leave the floor joists unsupported",
            ],
            correctIndex: 0,
            explanation:
              "This is the second half of lesson 6's warning. Bearing and bracing are different jobs, and a wall can be doing the second without the first.",
            sourceLessonSlug: "sheathing-and-racking",
          },
          {
            prompt: "What is lateral strength?",
            options: [
              "Resistance to sideways force",
              "The strength of a member measured across its width rather than its depth",
              "The strength a wall gains from the walls that meet it at corners",
              "The load a wall can carry before its studs buckle",
            ],
            correctIndex: 0,
            explanation:
              "It is what bracing and sheathing provide, and it is a separate question from how much weight a wall carries downward.",
            sourceLessonSlug: "sheathing-and-racking",
          },
          {
            prompt: "What is cut-in bracing?",
            options: [
              "Short diagonal pieces between studs",
              "A continuous diagonal notched into the face of the studs",
              "A brace cut into the sheathing after the wall is raised",
              "Blocking cut in at the midpoint of every stud cavity",
            ],
            correctIndex: 0,
            explanation:
              "Pieces cut at an angle and toenailed between studs, running diagonally from the top of a corner post down to the sole plate.",
            sourceLessonSlug: "sheathing-and-racking",
          },
          {
            prompt: "Which of these is the structural layer on the outside of a stud wall?",
            options: [
              "The sheathing",
              "The siding, which is fixed directly to the studs",
              "The housewrap, which holds the panels tight to the framing",
              "The brick veneer, which carries part of the wall's load",
            ],
            correctIndex: 0,
            explanation:
              "Sheathing braces the wall. Everything outside it is finish and weather protection, which section 7 covers.",
            sourceLessonSlug: "sheathing-and-racking",
          },
          {
            prompt: "Why does the course call racking the biggest gap in most people's picture of a house?",
            options: [
              "Sideways failure is invisible in the mental model",
              "Because most people have never seen a house under construction",
              "Because racking is a recent addition to building science",
              "Because the word is used differently in every region",
            ],
            correctIndex: 0,
            explanation:
              "Most people picture weight coming down and nothing pushing sideways, which leaves the whole purpose of sheathing unexplained.",
            sourceLessonSlug: "sheathing-and-racking",
          },
          {
            prompt: "In which order does the manual present bracing methods?",
            options: [
              "Ascending effectiveness",
              "Chronological, from the oldest method to the newest",
              "By cost, from the cheapest method to the most expensive",
              "By region, from northern practice to southern practice",
            ],
            correctIndex: 0,
            explanation:
              "Let-in, then cut-in, then diagonal sheathing, which it calls the strongest, and then panels, which can replace the others.",
            sourceLessonSlug: "sheathing-and-racking",
          },
          {
            prompt: "What is diagonal sheathing?",
            options: [
              "Boards run at an angle across the studs",
              "Panels cut into triangles and fitted at each corner of a wall",
              "Sheathing installed on the diagonal walls of a bay window",
              "A single board nailed corner to corner over the finished sheathing",
            ],
            correctIndex: 0,
            explanation:
              "Each board acts as a brace, which is why the manual ranks it as the strongest diagonal bracing method.",
            sourceLessonSlug: "sheathing-and-racking",
          },
          {
            prompt: "What does the manual note about a wall covered with structural sheathing nailed according to the specifications?",
            options: [
              "It does not require bracing",
              "It must still receive a let-in brace at each end",
              "It needs blocking behind every panel edge without exception",
              "It counts as a finished wall and needs no further covering",
            ],
            correctIndex: 0,
            explanation:
              "The manual names it as the exception to the general requirement for bracing at wall ends and at intervals.",
            sourceLessonSlug: "sheathing-and-racking",
          },
          {
            prompt: "Why can a wall rack without any member breaking?",
            options: [
              "The corners can change angle",
              "Because the studs bend elastically and then return to shape",
              "Because the nails stretch before the wood begins to fail",
              "Because the sole plate slides on the subfloor beneath it",
            ],
            correctIndex: 0,
            explanation:
              "A rectangle pinned at its corners can become a parallelogram with every side its original length. Nothing has to break for a wall to lean.",
            sourceLessonSlug: "sheathing-and-racking",
          },
          {
            prompt: "Which two jobs does lesson 15 ask you to keep separate?",
            options: [
              "Bearing and bracing",
              "Framing and finishing, which different trades perform",
              "Dead load and live load, which are calculated differently",
              "Structure and insulation, which occupy the same cavity",
            ],
            correctIndex: 0,
            explanation:
              "A wall can carry weight, brace against sideways force, both, or almost neither. Confusing the two is what makes remodelling dangerous.",
            sourceLessonSlug: "sheathing-and-racking",
          },
          {
            prompt: "Why are the plates said to be doing more than holding studs in place?",
            options: [
              "They carry and distribute load too",
              "Because they are the members that anchor the wall to the foundation",
              "Because they are cut from heavier lumber than the studs",
              "Because they run continuously through door openings",
            ],
            correctIndex: 0,
            explanation:
              "The top plate helps carry the weight of joists and rafters above, and both plates tie the wall together.",
            sourceLessonSlug: "studs-and-plates",
          },
          {
            prompt: "What does this course say about which walls in one specific house are doing the bracing?",
            options: [
              "A course cannot answer that",
              "That the walls running north to south always brace the building",
              "That any wall with sheathing on both faces is a bracing wall",
              "That interior walls never contribute to bracing",
            ],
            correctIndex: 0,
            explanation:
              "It is a question about one building, which puts it in the same category as every other question the course sends to a qualified person.",
            sourceLessonSlug: "sheathing-and-racking",
          },
          {
            prompt: "What is a structural panel?",
            options: [
              "A sheet product used where strength is needed",
              "Any sheet of material fixed to the outside of a framed wall",
              "A prefabricated wall section delivered complete to a jobsite",
              "A panel rated by its resistance to fire rather than to load",
            ],
            correctIndex: 0,
            explanation:
              "Plywood, oriented strand board and similar products, used where the sheet has to do structural work and not just cover.",
            sourceLessonSlug: "sheathing-and-racking",
          },
          {
            prompt: "Which lesson's warning does the sheathing lesson complete?",
            options: [
              "The one about removing a wall",
              "The one about who owns the numbers in a house",
              "The one about how wood moves with moisture",
              "The one about what a footing does",
            ],
            correctIndex: 0,
            explanation:
              "Lesson 6 said a wall may be bracing as well as bearing. Lesson 15 explains what bracing actually is and why it is invisible.",
            sourceLessonSlug: "sheathing-and-racking",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 6 — Roofs
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "rafters-and-thrust",
      title: "16 · Rafters, ridge, and the problem of a roof pushing outward",
      section: "Section 6 · Roofs",
      body: `"The primary object of a roof in any climate is protection from the elements. Roof slope and rigidness are for shedding water and bearing any extra additional weight. Roofs must also be strong enough to withstand high winds" (NETPDTC, 1994, p. 2-1). Three jobs: shed water, carry weight, stay on in a gale.

**The four shapes.** A **gable** roof has a ridge at the centre and slopes two ways. A **hip** roof slopes four ways, and the manual calls it "the strongest type of roof because it is braced by four hip rafters", while noting it is harder to build. An **intersecting** roof is two roofs meeting at a valley. A **shed** roof has one slope (NETPDTC, 1994, pp. 2-1 to 2-2).

**Rafters, defined in the best sentence in the manual.** "The members making up the main body of the framework of all roofs are called rafters. They do for the roof what the joists do for the floor and what the studs do for the wall" (NETPDTC, 1994, p. 2-3). They are the roof's repeated structural member, and the manual adds that "the bottoms of the rafters rest on the plate member, providing a connecting link between the wall and the roof. The rafters are really functional parts of both the walls and the roof" (p. 2-3).

**The vocabulary of a slope.** **Span** is the horizontal distance between the outside top plates. **Total run** is half the span. **Total rise** is the vertical distance from the top plate to the top of the ridge. **Cut**, which is replacing the older word *pitch*, is written as rise over a run of twelve, such as 6/12 (NETPDTC, 1994, pp. 2-2 to 2-3). A **common rafter** runs from plate to ridge; **hip**, **valley** and **jack** rafters handle the corners and intersections.

**Now the thing nobody tells you.** A pair of sloping rafters does not only press down on the walls. It pushes them apart. The manual says so while explaining a design problem: "A building may be designed so that the ceiling joists do not run parallel to the roof rafters. The rafters are therefore pushing out on walls not tied together by ceiling joists" (NETPDTC, 1994, p. 1-35). The fix is to add members running the same way as the rafters, so the outward push is tied off.

**Which is what a ceiling joist is really for.** The manual's own figure caption is "Ceiling frame tying exterior walls together", and the text says that nailing the outside end of each ceiling joist to the heel of the rafter as well as to the wall plates "strengthens the tie between the outside walls of the building" (NETPDTC, 1994, p. 1-35). A ceiling joist holds up a ceiling, yes. It also stops the roof from spreading the house.

**And higher up, collar ties.** "Gable or double-pitch roof rafters are often reinforced by horizontal members called collar ties. In a finished attic, the ties may also function as ceiling joists" (NETPDTC, 1994, p. 2-16).

:::reveal Besides carrying a ceiling, what structural job does a ceiling joist do in a rafter roof? ||| It ties the outside walls together against the outward push of the rafters, which is why the manual captions the ceiling frame as tying the exterior walls together.

:::reveal What does the manual say rafters do for a roof? ||| What joists do for the floor and what studs do for the wall. They are the roof's repeated structural member.

## Vocabulary
- **Ridge**: the horizontal line at the top of a sloping roof, and the board the common rafters meet there.
- **Total run**: half the span of a simple gable roof, measured horizontally.
- **Total rise**: the vertical distance from the top plate to the top of the ridge.
- **Cut**: the slope of a roof expressed as rise over a run of twelve, replacing the older term pitch.
- **Collar tie**: a horizontal member joining opposing rafters partway up, which may also serve as a ceiling joist in a finished attic.

## Sources
Naval Education and Training Professional Development and Technology Center. (1994). *Builder 3 & 2, Volume 2* (NAVEDTRA 14044). U.S. Navy. https://www.constructionknowledge.net/public_domain_documents/Builder_3_and_2_vol_2_NAVEDTRA_14044_1994.pdf`,
    },
    {
      slug: "trusses",
      title: "17 · A truss is an engineering drawing made of wood",
      section: "Section 6 · Roofs",
      body: `Most American roofs built in the last few decades did not arrive as sticks. They arrived as trusses, made in a factory and craned into place, and they behave differently from a rafter roof in a way that matters enormously to anyone who later wants to change something.

**What a truss is made of.** "The basic components of a roof truss are the top and bottom chords and the web members. The top chords serve as roof rafters. The bottom chords act as ceiling joists. The web members run between the top and bottom chords" (NETPDTC, 1994, p. 2-39). The joints are made with gussets of plywood or metal, and metal gusset plates are "flat pieces usually manufactured from 20-gauge zinc-coated or galvanized steel. The holes for the nails are prepunched" (NETPDTC, 1994, p. 2-40). Prepunched. Factory-made. That is the tell that this is a manufactured product.

**What it can do.** "A roof truss is capable of supporting loads over a long span without intermediate supports" (NETPDTC, 1994, p. 2-38), and "a roof truss is an engineered structural frame resting on two outside walls of a building. The load carried by the truss is transferred to these outside walls" (p. 2-39). The overall design "transfers the entire load (roof weight, snow load, wind load, and so forth) down through the outside walls to the foundation" (p. 2-42).

**How it does it, and this is the important part.** "Each part of a truss is in a state of either tension or compression. The parts in a state of tension are subjected to a pulling-apart force. Those under compression are subjected to a pushing-together force. The balance of tension and compression gives the truss its ability to carry heavy loads and cover wide spans" (NETPDTC, 1994, p. 2-41).

The manual then walks the mechanism. The two top chords are pushed together. The bottom chord stops their lower ends from pushing out, so the bottom chord is in tension. "Because the lower ends of the top chords cannot pull apart, the peak of the truss cannot drop down" (p. 2-41). The web members brace the chords at particular points, and the manual notes they "must be fastened at certain points along the top and bottom chords in order to handle the stress and weight placed upon the truss" (p. 2-42).

**So: never cut, notch or drill a truss.** Not the bottom chord, not a web, not a top chord. Every member is carrying either a pull or a push that some other member depends on, and the one holding the peak up is the horizontal one across the bottom that looks exactly like an ordinary ceiling joist. This is the cheapest piece of knowledge in the whole course. Anything you want to change about a truss, including hanging a heavy load from it, is a question for the truss designer and the building department, and for nobody else.

**Design is site-specific, too.** "The design of a truss includes consideration of snow and wind loads and the weight of the roof itself. Design also takes into account the slope of the roof. Generally, the flatter the slope, the greater the stresses" (NETPDTC, 1994, p. 2-39). A truss is drawn for one building in one place.

:::reveal Which truss member stops the peak from dropping, and how? ||| The bottom chord. It is in tension, holding the lower ends of the two top chords from pushing apart, and because they cannot spread the peak cannot drop.

:::reveal What is the rule about cutting, notching or drilling any part of a roof truss? ||| Do not. Every member carries a push or a pull the others depend on, and any change is a question for the truss designer and the building department.

## Vocabulary
- **Top chord**: the sloping upper member of a truss, serving the role a rafter plays.
- **Bottom chord**: the lower member of a truss, in tension, which also acts as a ceiling joist.
- **Web member**: a member running between the chords, fastened at points chosen to handle the stresses.
- **Gusset**: the plate of plywood or metal connecting truss members at a joint.
- **Tension and compression**: pulling-apart and pushing-together forces, whose balance gives a truss its capacity.

## Sources
Naval Education and Training Professional Development and Technology Center. (1994). *Builder 3 & 2, Volume 2* (NAVEDTRA 14044). U.S. Navy. https://www.constructionknowledge.net/public_domain_documents/Builder_3_and_2_vol_2_NAVEDTRA_14044_1994.pdf`,
    },
    {
      slug: "what-the-roof-carries",
      title: "18 · What the roof carries, and what it keeps off everything else",
      section: "Section 6 · Roofs",
      body: `The roof is the only part of a house that is loaded from above by the weather and pulled at from above by the wind, and it is also the umbrella over everything below.

**Geography is written into the rules.** HUD's standard for manufactured homes, which governs factory-built homes and not site-built ones, divides the country into a north, a middle and a south zone and sets a different design roof load for each, heaviest in the north (24 C.F.R. § 3280.305). You do not need the figures to take the point: what a roof is designed to carry is a function of where it is. The same standard divides the country into wind zones and requires more of a home in the higher ones (24 C.F.R. § 3280.306). Your own roof is governed by your adopted code, which is the business of *Reading the Plan and the Code*.

**Slope does work.** The manual's opening sentence on roofs is that slope and rigidity exist for "shedding water and bearing any extra additional weight" (NETPDTC, 1994, p. 2-1), and its truss chapter adds the structural consequence: "Generally, the flatter the slope, the greater the stresses" (p. 2-39). A steeper roof sheds more and carries less; a flatter roof holds water and snow and works harder.

**The eaves are not decoration.** "Rafters usually extend a short distance beyond the wall to form the eaves (overhang) and protect the sides of the building" (NETPDTC, 1994, p. 2-3). An overhang throws water clear of the wall below it. Section 7 is about what happens to the wall when water is not thrown clear.

**The layers on a roof, in order.** Structure, then sheathing, then underlayment, then the covering. The underlayment gets a paragraph of its own in the manual, and it is a small lesson in building science: roofing felt "keeps the roof sheathing dry until the shingles can be applied", then "acts as a secondary barrier against wind-driven rain and snow", and finally protects the shingles from resinous materials released by the sheathing (NETPDTC, 1994, p. 3-12).

**And then the sentence that should make you look twice.** "Underlayment should be a material with low vapor resistance, such as asphalt-saturated felt. Do not use materials, such as coated felts or laminated waterproof papers, which act as a vapor barrier. These allow moisture or frost to accumulate between the underlayment and the roof sheathing" (NETPDTC, 1994, p. 3-12).

Read that again. A *more* waterproof material in that position makes things *worse*, because moisture arriving from inside the house gets trapped under it. That is the whole of section 7 in one paragraph: the layers of a building are not ranked from worse to better at stopping water. Each one has a job, and putting the wrong job in the wrong place causes damage that looks like a leak and is not.

:::reveal Why does the manual warn against using a waterproof paper as roof underlayment? ||| Because a material that acts as a vapour barrier there lets moisture or frost accumulate between the underlayment and the roof sheathing. More waterproof is not automatically better.

:::reveal What does a flatter roof slope do to the stresses in a truss? ||| Increases them. The manual notes that flatter slopes require larger members and stronger connections.

## Vocabulary
- **Underlayment**: the sheet layer over roof sheathing and under the covering, which keeps the deck dry and acts as a secondary barrier.
- **Eaves**: the part of the roof that projects beyond the wall, also called the overhang.
- **Wind zone**: a geographic division used by a code or standard to set the wind loading a building must resist.
- **Vapour barrier**: a material that strongly resists the passage of water vapour, which is helpful in some positions and harmful in others.

## Sources
Naval Education and Training Professional Development and Technology Center. (1994). *Builder 3 & 2, Volume 2* (NAVEDTRA 14044). U.S. Navy. https://www.constructionknowledge.net/public_domain_documents/Builder_3_and_2_vol_2_NAVEDTRA_14044_1994.pdf
*Structural design requirements*, 24 C.F.R. § 3280.305. https://www.law.cornell.edu/cfr/text/24/3280.305
*Windstorm protection*, 24 C.F.R. § 3280.306. https://www.law.cornell.edu/cfr/text/24/3280.306`,
    },
    {
      slug: "section-6-quiz",
      title: "Section 6 quiz · Rafters, trusses and roof loads",
      section: "Section 6 · Roofs",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What three jobs does the manual give a roof?",
            options: [
              "Shed water, carry weight, resist wind",
              "Insulate, ventilate and drain, in that order of importance",
              "Cover the walls, carry the ceiling and support the chimney",
              "Reflect heat, hold snow and channel it to the gutters",
            ],
            correctIndex: 0,
            explanation:
              "Slope and rigidity are for shedding water and bearing extra weight, and roofs must also be strong enough to withstand high winds.",
            sourceLessonSlug: "rafters-and-thrust",
          },
          {
            prompt: "Which roof shape does the manual call the strongest, and why?",
            options: [
              "The hip, braced by four hip rafters",
              "The gable, because a single ridge carries the load of both slopes",
              "The shed, because one slope means fewer joints to fail",
              "The intersecting, because the valleys stiffen the whole frame",
            ],
            correctIndex: 0,
            explanation:
              "The manual notes the hip roof is braced by four hip rafters running at an angle from each corner to the ridge, and that it is harder to construct.",
            sourceLessonSlug: "rafters-and-thrust",
          },
          {
            prompt: "What is a gable roof?",
            options: [
              "A ridge at the centre, sloping two ways",
              "A roof with four sloping sides meeting at hips",
              "A roof with a single slope, held up by walls of different heights",
              "Two roofs meeting at a valley formed where they intersect",
            ],
            correctIndex: 0,
            explanation:
              "The manual calls it simple in design, economical to construct, and usable on any type of structure.",
            sourceLessonSlug: "rafters-and-thrust",
          },
          {
            prompt: "What is a shed roof?",
            options: [
              "A roof with one slope",
              "A roof covering an outbuilding rather than a dwelling",
              "A roof whose covering is designed to be replaced in one piece",
              "A roof supported entirely by trusses rather than rafters",
            ],
            correctIndex: 0,
            explanation:
              "Also called a lean-to. One wall or set of posts is higher than the opposite one, so the roof slopes in a single direction.",
            sourceLessonSlug: "rafters-and-thrust",
          },
          {
            prompt: "How does the manual define rafters by analogy?",
            options: [
              "What joists are to a floor and studs to a wall",
              "What sheathing is to a wall and subfloor is to a floor",
              "What a girder is to a floor and a header is to an opening",
              "What bridging is to joists and blocking is to studs",
            ],
            correctIndex: 0,
            explanation:
              "They are the roof's repeated structural member, which is the same role the joist and the stud play elsewhere.",
            sourceLessonSlug: "rafters-and-thrust",
          },
          {
            prompt: "What does the manual say the rafters really are, structurally?",
            options: [
              "Parts of both wall and roof",
              "Parts of the roof only, connected to the wall by the top plate",
              "A separate system that rests on the walls without being joined to them",
              "An extension of the ceiling frame, turned up at an angle",
            ],
            correctIndex: 0,
            explanation:
              "Their bottoms rest on the plate, providing a connecting link between wall and roof, which makes them functional parts of both.",
            sourceLessonSlug: "rafters-and-thrust",
          },
          {
            prompt: "What is the span of a simple roof?",
            options: [
              "The horizontal distance between the outside top plates",
              "The sloping length of a common rafter from plate to ridge",
              "The vertical distance from the top plate to the ridge",
              "The distance from the eave to the nearest interior wall",
            ],
            correctIndex: 0,
            explanation:
              "Total run is half of it, and total rise is the vertical distance from the top plate to the top of the ridge.",
            sourceLessonSlug: "rafters-and-thrust",
          },
          {
            prompt: "What does the manual say is replacing the term pitch?",
            options: [
              "Cut",
              "Grade, borrowed from the terminology of site levelling",
              "Slope ratio, expressed as a decimal fraction",
              "Rise factor, written as a percentage of the span",
            ],
            correctIndex: 0,
            explanation:
              "Cut is written as the unit of rise over a unit of run of twelve, such as 6/12 or 8/12.",
            sourceLessonSlug: "rafters-and-thrust",
          },
          {
            prompt: "What is a common rafter?",
            options: [
              "One running from plate to ridge",
              "One running diagonally from a corner of the building to the ridge",
              "One running from the plate to a hip rafter without reaching the ridge",
              "One that appears in every roof shape, whatever its angle",
            ],
            correctIndex: 0,
            explanation:
              "Hip rafters run diagonally from corners, valley rafters run where two roofs intersect, and jack rafters never run the full distance.",
            sourceLessonSlug: "rafters-and-thrust",
          },
          {
            prompt: "What do a pair of sloping rafters do to the walls besides press down on them?",
            options: [
              "Push them apart",
              "Pull them inward, because the ridge draws the rafter tops together",
              "Twist them, because the load arrives at an angle to the plate",
              "Nothing, because the load of a sloped roof is entirely vertical",
            ],
            correctIndex: 0,
            explanation:
              "The manual says rafters are pushing out on walls not tied together by ceiling joists, and describes the members added to tie that push off.",
            sourceLessonSlug: "rafters-and-thrust",
          },
          {
            prompt: "What does the manual's own figure caption call the ceiling frame?",
            options: [
              "Tying exterior walls together",
              "Supporting the finish ceiling material",
              "Dividing the attic from the living space",
              "Carrying the load of the roof to the interior partitions",
            ],
            correctIndex: 0,
            explanation:
              "Which is the structural job most people never hear about. A ceiling joist holds a ceiling and also stops the roof spreading the house.",
            sourceLessonSlug: "rafters-and-thrust",
          },
          {
            prompt: "What does nailing a ceiling joist to the heel of the rafter as well as to the plate do?",
            options: [
              "Strengthens the tie between the outside walls",
              "Stops the ceiling from sagging in the middle of the span",
              "Transfers the roof load into the interior partitions below",
              "Holds the rafter plumb while the sheathing is applied",
            ],
            correctIndex: 0,
            explanation:
              "The manual's wording is exactly that. The tie is between the outside walls, which is what resists the rafters pushing outward.",
            sourceLessonSlug: "rafters-and-thrust",
          },
          {
            prompt: "What is a collar tie?",
            options: [
              "A horizontal member joining opposing rafters",
              "The metal strap that ties a rafter down to the top plate",
              "The board that closes the gap between rafters at the ridge",
              "The trim piece that finishes the joint at the top of a wall",
            ],
            correctIndex: 0,
            explanation:
              "The manual says gable or double-pitch rafters are often reinforced by them, and that in a finished attic they may also function as ceiling joists.",
            sourceLessonSlug: "rafters-and-thrust",
          },
          {
            prompt: "What happens in a building where the ceiling joists do not run parallel to the rafters?",
            options: [
              "Extra members are added to tie the walls",
              "The rafters must be increased in size to make up the difference",
              "The roof must be built as a hip rather than as a gable",
              "The ceiling is hung from the rafters instead of spanning the walls",
            ],
            correctIndex: 0,
            explanation:
              "The manual describes adding pieces running in the same direction as the rafters, because otherwise the rafters push on walls nothing ties together.",
            sourceLessonSlug: "rafters-and-thrust",
          },
          {
            prompt: "What is total rise?",
            options: [
              "Top plate to the top of the ridge",
              "The height of the wall from the subfloor to the top plate",
              "The sloping distance from the eave to the ridge",
              "The height of the attic space at its centre line",
            ],
            correctIndex: 0,
            explanation:
              "It is the vertical leg of the triangle whose horizontal leg is the total run, which is half the span.",
            sourceLessonSlug: "rafters-and-thrust",
          },
          {
            prompt: "What is a jack rafter?",
            options: [
              "One that never runs the full plate-to-ridge distance",
              "A rafter doubled beside an opening in the roof",
              "The first rafter set at each end of a roof",
              "A temporary rafter used while the ridge is propped",
            ],
            correctIndex: 0,
            explanation:
              "Hip jacks run from the plate to a hip rafter, valley jacks from a valley rafter to the ridge, and cripple jacks between hip and valley.",
            sourceLessonSlug: "rafters-and-thrust",
          },
          {
            prompt: "What is an intersecting roof?",
            options: [
              "Two roof sections meeting at a valley",
              "A roof crossing over another building at a different level",
              "A roof whose rafters intersect the ceiling joists at an angle",
              "A roof interrupted by a chimney or a dormer",
            ],
            correctIndex: 0,
            explanation:
              "A gable and valley, or a hip and valley, generally meeting at ninety degrees. The manual calls it more complicated and more labour intensive.",
            sourceLessonSlug: "rafters-and-thrust",
          },
          {
            prompt: "Which three members make up a roof truss?",
            options: [
              "Top chord, bottom chord and webs",
              "Rafter, collar tie and ceiling joist, joined by gussets",
              "Ridge, hip and valley members, meeting at the peak",
              "Plate, post and brace, assembled into a triangle",
            ],
            correctIndex: 0,
            explanation:
              "The top chords serve as rafters, the bottom chord acts as a ceiling joist, and the webs run between them.",
            sourceLessonSlug: "trusses",
          },
          {
            prompt: "What connects truss members at their joints?",
            options: [
              "Gussets",
              "Mortise and tenon joints cut into each member",
              "Steel bolts passing through both members at every joint",
              "Nothing beyond nails driven at an angle through the members",
            ],
            correctIndex: 0,
            explanation:
              "Gussets of boards, plywood or metal, fastened by nails, screws, bolts or adhesives. Some trusses use split-ring connectors instead.",
            sourceLessonSlug: "trusses",
          },
          {
            prompt: "What does the manual say about the nail holes in a metal gusset plate?",
            options: [
              "They are prepunched",
              "They are drilled on site to match each particular joint",
              "They are punched by the nail itself as it is driven",
              "They are omitted, because the plate is welded rather than nailed",
            ],
            correctIndex: 0,
            explanation:
              "Prepunched, in flat pieces of zinc-coated or galvanized steel. That is the tell that a truss is a manufactured product, not a site-built one.",
            sourceLessonSlug: "trusses",
          },
          {
            prompt: "What can a truss do that a simple rafter cannot?",
            options: [
              "Span far without intermediate support",
              "Carry a heavier roof covering for the same depth of member",
              "Be adjusted on site to suit an irregular building",
              "Resist wind uplift without any connection to the wall",
            ],
            correctIndex: 0,
            explanation:
              "The manual says a roof truss is capable of supporting loads over a long span without intermediate supports, resting on the two outside walls.",
            sourceLessonSlug: "trusses",
          },
          {
            prompt: "What state is every part of a truss in?",
            options: [
              "Tension or compression",
              "Bending, distributed evenly across all the members",
              "Shear, resolved at the gusset plates",
              "Rest, until a live load is applied to the roof",
            ],
            correctIndex: 0,
            explanation:
              "Tension is a pulling-apart force and compression a pushing-together force, and the manual says the balance of the two gives a truss its capacity.",
            sourceLessonSlug: "trusses",
          },
          {
            prompt: "Which truss member is in tension, holding the top chords from spreading?",
            options: [
              "The bottom chord",
              "The short web members near the peak of the truss",
              "The gusset plate at the apex, which pulls the chords together",
              "The top chord itself, which is stretched along its length",
            ],
            correctIndex: 0,
            explanation:
              "And because the lower ends of the top chords cannot pull apart, the peak of the truss cannot drop down.",
            sourceLessonSlug: "trusses",
          },
          {
            prompt: "What happens if the bottom chord of a truss can no longer hold the top chords from spreading?",
            options: [
              "The peak can drop",
              "The truss pushes outward on the walls and nothing else changes",
              "The webs take over the tension and the truss is unaffected",
              "The roof covering cracks but the frame remains stable",
            ],
            correctIndex: 0,
            explanation:
              "The manual's own reasoning: the peak cannot drop only because the lower ends of the top chords cannot pull apart.",
            sourceLessonSlug: "trusses",
          },
          {
            prompt: "What is the rule about cutting, notching or drilling a truss member?",
            options: [
              "Do not do it",
              "It is acceptable in the web members but never in the chords",
              "It is acceptable anywhere if the hole is smaller than a quarter of the depth",
              "It is acceptable once the roof covering has been removed",
            ],
            correctIndex: 0,
            explanation:
              "Every member carries a push or a pull the others depend on. Any change is a question for the truss designer and the building department.",
            sourceLessonSlug: "trusses",
          },
          {
            prompt: "Which truss member is most likely to be mistaken for an ordinary ceiling joist?",
            options: [
              "The bottom chord",
              "A short web member running vertically at the centre",
              "The top chord where it passes over the wall plate",
              "The gusset plate at the heel of the truss",
            ],
            correctIndex: 0,
            explanation:
              "It looks like a ceiling joist and acts as one, and it is also the tension member holding the whole truss shut.",
            sourceLessonSlug: "trusses",
          },
          {
            prompt: "What does the manual say truss design takes into account?",
            options: [
              "Snow, wind, roof weight and slope",
              "The species of lumber and the humidity of the factory",
              "The preferences of the builder and the budget for the roof",
              "The span alone, since all other factors are covered by safety margins",
            ],
            correctIndex: 0,
            explanation:
              "Which is why a truss is drawn for one building in one place, and why a truss from one job is not simply reusable on another.",
            sourceLessonSlug: "trusses",
          },
          {
            prompt: "What does a flatter roof slope do to the stresses in a truss?",
            options: [
              "Increases them",
              "Decreases them, because less of the load acts along the chords",
              "Leaves them unchanged, since total load does not depend on slope",
              "Shifts them from the chords to the gusset plates",
            ],
            correctIndex: 0,
            explanation:
              "The manual says flatter slopes therefore require larger members and stronger connections.",
            sourceLessonSlug: "trusses",
          },
          {
            prompt: "Where does a truss roof send the entire load it carries?",
            options: [
              "Down through the outside walls to the foundation",
              "Into the ridge, which distributes it along the length of the house",
              "Into the ceiling frame, which spreads it across the interior walls",
              "Into the gusset plates, which are sized to hold the whole load",
            ],
            correctIndex: 0,
            explanation:
              "Roof weight, snow load, wind load and everything else, down through the outside walls to the foundation.",
            sourceLessonSlug: "trusses",
          },
          {
            prompt: "Why does the course call this the cheapest piece of knowledge in it?",
            options: [
              "Knowing not to cut a truss costs nothing",
              "Because trusses are the least expensive way to frame a roof",
              "Because a truss can be replaced more cheaply than a rafter roof",
              "Because the manual's truss chapter is the shortest in the book",
            ],
            correctIndex: 0,
            explanation:
              "It costs nothing to learn and prevents a category of damage that is expensive and dangerous to undo.",
            sourceLessonSlug: "trusses",
          },
          {
            prompt: "Who can answer a question about changing something on a truss?",
            options: [
              "The truss designer and the building department",
              "Any framing contractor with experience of trussed roofs",
              "The manufacturer of the gusset plates used in the truss",
              "The homeowner, provided the change is above the ceiling line",
            ],
            correctIndex: 0,
            explanation:
              "And nobody else, including this course. The truss was engineered for one building, so changes to it are engineering questions.",
            sourceLessonSlug: "trusses",
          },
          {
            prompt: "What are the three truss shapes the manual names as most common in light framing?",
            options: [
              "King post, W-type and scissors",
              "Gable, hip and shed, matching the three roof shapes",
              "Open web, closed web and solid, by the type of infill",
              "Parallel chord, arched and cantilevered",
            ],
            correctIndex: 0,
            explanation:
              "The king post is the simplest, the W-type or fink is the most widely used, and the scissors is used for sloping ceilings.",
            sourceLessonSlug: "trusses",
          },
          {
            prompt: "What do the web members of a truss do?",
            options: [
              "Brace the chords at chosen points",
              "Carry the roof covering between the top chords",
              "Hold the truss upright during erection and are then removed",
              "Join one truss to the next along the length of the roof",
            ],
            correctIndex: 0,
            explanation:
              "The manual says they must be fastened at certain points along the chords in order to handle the stress and weight placed on the truss.",
            sourceLessonSlug: "trusses",
          },
          {
            prompt: "What is compression, in the manual's words?",
            options: [
              "A pushing-together force",
              "A twisting force applied about the length of a member",
              "The force that results when a member is bent past its limit",
              "The weight a member carries when it is loaded from above",
            ],
            correctIndex: 0,
            explanation:
              "And tension is a pulling-apart force. The balance of the two is what gives a truss its ability to carry heavy loads over wide spans.",
            sourceLessonSlug: "trusses",
          },
          {
            prompt: "How does HUD's manufactured home standard treat roof load across the country?",
            options: [
              "By zone, heaviest in the north",
              "As a single national figure applied to every home",
              "By the age of the home rather than by its location",
              "As a matter for the manufacturer to determine case by case",
            ],
            correctIndex: 0,
            explanation:
              "North, middle and south zones with different design roof loads. What a roof must carry is a function of where it is.",
            sourceLessonSlug: "what-the-roof-carries",
          },
          {
            prompt: "Why does this course not print HUD's roof load figures?",
            options: [
              "They govern manufactured homes, not site-built ones",
              "Because the figures were withdrawn in a recent amendment",
              "Because they are expressed in units the course does not teach",
              "Because they vary too often to be worth stating",
            ],
            correctIndex: 0,
            explanation:
              "The point survives without the numbers: design loads follow geography, and your own roof is governed by your adopted code.",
            sourceLessonSlug: "what-the-roof-carries",
          },
          {
            prompt: "What does roof slope do besides shed water?",
            options: [
              "Changes the stresses in the structure",
              "Determines the type of underlayment the code will allow",
              "Sets the direction in which the rafters must run",
              "Fixes the height of the walls beneath it",
            ],
            correctIndex: 0,
            explanation:
              "A steeper roof sheds more and carries less. A flatter one holds water and snow and works harder.",
            sourceLessonSlug: "what-the-roof-carries",
          },
          {
            prompt: "What does an overhang at the eaves do?",
            options: [
              "Throws water clear of the wall",
              "Adds weight at the perimeter to resist wind uplift",
              "Provides the ventilation opening for the attic",
              "Carries the gutter, which is its only structural purpose",
            ],
            correctIndex: 0,
            explanation:
              "The manual says rafters usually extend beyond the wall to form the eaves and protect the sides of the building.",
            sourceLessonSlug: "what-the-roof-carries",
          },
          {
            prompt: "What is the order of the layers on a roof?",
            options: [
              "Structure, sheathing, underlayment, covering",
              "Sheathing, structure, covering, underlayment",
              "Covering, underlayment, sheathing, structure",
              "Structure, covering, sheathing, underlayment",
            ],
            correctIndex: 0,
            explanation:
              "Each layer has a different job, and the order is what makes the assembly work.",
            sourceLessonSlug: "what-the-roof-carries",
          },
          {
            prompt: "What is the first purpose the manual gives for roofing felt?",
            options: [
              "Keeping the sheathing dry before shingling",
              "Providing a cushion so the shingles lie flat on the deck",
              "Reflecting heat away from the roof structure below",
              "Holding the shingles down until they seal themselves",
            ],
            correctIndex: 0,
            explanation:
              "Then it acts as a secondary barrier against wind-driven rain and snow, and finally it protects the shingles from resinous materials from the sheathing.",
            sourceLessonSlug: "what-the-roof-carries",
          },
          {
            prompt: "How many basic purposes does the manual give for roofing felt?",
            options: [
              "Three",
              "One, which is to keep water out of the building",
              "Five, one for each stage of the roofing process",
              "Two, both of them about water",
            ],
            correctIndex: 0,
            explanation:
              "Keeping the deck dry, acting as a secondary barrier afterwards, and protecting the shingles from resin released by the sheathing.",
            sourceLessonSlug: "what-the-roof-carries",
          },
          {
            prompt: "What kind of material does the manual say roof underlayment should be?",
            options: [
              "One with low vapour resistance",
              "The most waterproof material available for the price",
              "A rigid board rather than a flexible sheet",
              "A reflective foil, to reduce heat gain in the attic",
            ],
            correctIndex: 0,
            explanation:
              "Asphalt-saturated felt is its example. Coated felts and laminated waterproof papers act as vapour barriers and are warned against.",
            sourceLessonSlug: "what-the-roof-carries",
          },
          {
            prompt: "What goes wrong when a vapour-barrier material is used as roof underlayment?",
            options: [
              "Moisture or frost accumulates under it",
              "It tears under the weight of the shingles above it",
              "It prevents the shingles from bonding to the deck",
              "It traps heat and shortens the life of the covering",
            ],
            correctIndex: 0,
            explanation:
              "Between the underlayment and the roof sheathing. More waterproof is not automatically better, which is the whole point of section 7.",
            sourceLessonSlug: "what-the-roof-carries",
          },
          {
            prompt: "What general lesson does the underlayment warning teach about a building's layers?",
            options: [
              "Each layer has its own job",
              "Layers should be ranked from least to most waterproof going outward",
              "The outermost layer does all the work and the rest are backup",
              "More layers always give better protection than fewer",
            ],
            correctIndex: 0,
            explanation:
              "Putting the wrong job in the wrong place causes damage that looks like a leak and is not.",
            sourceLessonSlug: "what-the-roof-carries",
          },
          {
            prompt: "What is a wind zone?",
            options: [
              "A geographic division setting wind loading",
              "The area of a roof most exposed to prevailing winds",
              "The clearance kept around a building for wind to pass",
              "A rating given to a roof covering by its manufacturer",
            ],
            correctIndex: 0,
            explanation:
              "HUD's standard divides the country into wind zones and requires more of a manufactured home in the higher ones.",
            sourceLessonSlug: "what-the-roof-carries",
          },
          {
            prompt: "Where does a learner find the loads their own roof must carry?",
            options: [
              "In the code their jurisdiction adopted",
              "In the HUD standard, which applies to every home in the country",
              "On the truss drawings, which are filed with the property deed",
              "In the Wood Handbook, which tabulates loads by species",
            ],
            correctIndex: 0,
            explanation:
              "Which is the business of the companion course, Reading the Plan and the Code. HUD's standard governs manufactured homes.",
            sourceLessonSlug: "what-the-roof-carries",
          },
          {
            prompt: "What is underlayment?",
            options: [
              "The sheet layer between sheathing and covering",
              "The insulation laid over the ceiling of the top storey",
              "The board fixed under the rafters to carry the ceiling",
              "The membrane laid under a concrete slab before it is poured",
            ],
            correctIndex: 0,
            explanation:
              "It keeps the deck dry during construction and acts as a secondary barrier afterwards.",
            sourceLessonSlug: "what-the-roof-carries",
          },
          {
            prompt: "Which part of a house is loaded from above by weather and pulled at from above by wind?",
            options: [
              "The roof",
              "The foundation, which resists both through its anchorage",
              "The exterior walls, which take the full force of both",
              "The floor frame, which carries everything above it",
            ],
            correctIndex: 0,
            explanation:
              "It is the only element in both situations at once, which is why it is designed for downward load and uplift together.",
            sourceLessonSlug: "what-the-roof-carries",
          },
          {
            prompt: "What does a truss have that a rafter roof does not?",
            options: [
              "An engineered design for one building",
              "A covering that is fixed directly to the chords without sheathing",
              "A connection to the interior partitions that share its load",
              "A slope chosen on site to suit the building's proportions",
            ],
            correctIndex: 0,
            explanation:
              "The manual calls it an engineered structural frame, and its design considers snow, wind, roof weight and slope for that building.",
            sourceLessonSlug: "trusses",
          },
          {
            prompt: "Why does a trussed roof not need help from the middle of the house?",
            options: [
              "It rests on the two outside walls",
              "Because its chords are made of heavier material than rafters",
              "Because the gusset plates carry load across the whole span",
              "Because the ceiling below shares the load with it",
            ],
            correctIndex: 0,
            explanation:
              "The load carried by the truss is transferred to those outside walls, which is what makes trusses self-supporting.",
            sourceLessonSlug: "trusses",
          },
          {
            prompt: "What is the ridge of a roof?",
            options: [
              "The horizontal line at the top",
              "The line where two slopes meet at an inside corner",
              "The edge of the roof over the gable end wall",
              "The highest course of roof covering, which laps both slopes",
            ],
            correctIndex: 0,
            explanation:
              "And the ridge board is the member the common rafters meet there, held to its required height as the roof is assembled.",
            sourceLessonSlug: "rafters-and-thrust",
          },
          {
            prompt: "Which statement about a truss's bottom chord is true?",
            options: [
              "It is in tension and acts as a ceiling joist",
              "It is in compression and carries the weight of the roof covering",
              "It is decorative and carries no load once the roof is finished",
              "It may be cut where a duct needs to pass through it",
            ],
            correctIndex: 0,
            explanation:
              "Two jobs in one member, which is why cutting it looks harmless and is not.",
            sourceLessonSlug: "trusses",
          },
          {
            prompt: "What does the course say about the difference between a rafter roof and a trussed roof for someone planning a change?",
            options: [
              "They behave differently and matter enormously",
              "They are structurally identical once the ceiling is finished",
              "A trussed roof is easier to alter because the parts are lighter",
              "A rafter roof cannot be altered at all, while a truss can",
            ],
            correctIndex: 0,
            explanation:
              "A truss is a manufactured, engineered assembly whose members depend on each other. A rafter roof is assembled from parts on site.",
            sourceLessonSlug: "trusses",
          },
          {
            prompt: "What does the manual say roof trusses save?",
            options: [
              "Material and on-site labour",
              "Height, because a truss is shallower than the rafters it replaces",
              "Weight, because the chords are thinner than rafters of the same span",
              "Inspections, because a factory-made assembly needs no site approval",
            ],
            correctIndex: 0,
            explanation:
              "It also notes that building with trusses removes the need for some doubling in the framing below, because trusses are self-supporting.",
            sourceLessonSlug: "trusses",
          },
          {
            prompt: "In a rafter roof, what is doing the job that a truss's bottom chord does?",
            options: [
              "The ceiling joist",
              "The ridge board, which holds the rafter tops in line",
              "The top plate, which resists the outward push by itself",
              "The collar tie alone, whatever the ceiling below is made of",
            ],
            correctIndex: 0,
            explanation:
              "Both are horizontal members tying the feet of the sloping members together so the roof cannot spread and the peak cannot drop.",
            sourceLessonSlug: "rafters-and-thrust",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 7 — The layers on the outside
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "four-jobs-four-layers",
      title: "19 · Four jobs on the outside of a wall",
      section: "Section 7 · The layers on the outside",
      body: `Lesson 18 ended with a warning that a more waterproof material in the wrong place makes things worse. This section explains why, and the explanation is short: **the outside of a building has four separate jobs, and they are not the same job done four times.**

1. **Keep liquid water out.** Rain, wind-driven rain, snow melt, splash off the ground.
2. **Keep air from moving through.** Air carries heat, and it carries water vapour with it.
3. **Manage water vapour.** Vapour moves through materials whether or not there is a hole.
4. **Slow the movement of heat.**

Each job wants different properties, and one material is rarely good at more than two of them. Hence layers.

**The vapour job is the one people get wrong**, so read the Navy manual's own statement of the problem carefully: "Most building materials are permeable to water vapor. This presents problems because considerable water vapor can be generated inside structures. In cold climates during cold weather, this vapor may pass through wall and ceiling materials and condense in the wall or attic space. In severe cases, it may damage the exterior paint and interior finish, or even result in structural member decay. For protection, a material highly resistive to vapor transmission, called a vapor barrier, should be used on the warm side of a wall and below the insulation in an attic space" (NETPDTC, 1994, p. 5-24).

Three things in that paragraph deserve underlining. Water vapour is generated **inside**, by people, cooking and washing. It moves **through** materials, not only through gaps. And the vapour-resistant layer belongs on the **warm side**, because that is the side the vapour is coming from. Put it on the cold side instead and you have built a surface for water to condense on, inside the wall, where nobody can see it.

**The thermal job is about filling space.** "Most materials used in construction have some insulating value. Even air spaces between studs resist the passage of heat. However, when these stud spaces are filled or partially filled with material having a high insulating value, the stud space has many times the insulating ability of the air alone" (NETPDTC, 1994, p. 5-20).

**And a federal standard states the same logic in law**, for manufactured homes rather than for site-built houses: 24 CFR 3280.504 is titled for condensation control and the installation of vapour retarders, and it requires ceilings to have a vapour retarder of limited permeance installed on the living-space side of the roof cavity in the colder zones, with alternative approaches permitted for walls, including designs whose outer layers are deliberately more permeable so that anything getting in can get out again (24 C.F.R. § 3280.504). Note the shape of that rule even without its numbers: tight on the inside, open on the outside.

:::reveal What are the four separate jobs the outside of a wall has to do? ||| Keep liquid water out, stop air moving through, manage water vapour, and slow the movement of heat.

:::reveal On which side of a wall does the manual say a vapour barrier belongs, and why? ||| The warm side, because that is the side the vapour is coming from. Put it on the cold side and it becomes a surface for water to condense on inside the wall.

## Vocabulary
- **Control layer**: a layer of an assembly responsible for one job, such as water, air, vapour or heat.
- **Permeable**: allowing water vapour to pass through the material itself.
- **Vapour retarder**: a material that strongly resists water vapour movement, used on the warm side of an assembly.
- **Condensation**: liquid water forming where moist air meets a surface cold enough to bring it below its dew point.

## Sources
Naval Education and Training Professional Development and Technology Center. (1994). *Builder 3 & 2, Volume 2* (NAVEDTRA 14044). U.S. Navy. https://www.constructionknowledge.net/public_domain_documents/Builder_3_and_2_vol_2_NAVEDTRA_14044_1994.pdf
*Condensation control and installation of vapor retarders*, 24 C.F.R. § 3280.504. https://www.law.cornell.edu/cfr/text/24/3280.504`,
    },
    {
      slug: "water-first",
      title: "20 · Water first: the drainage plane, laps and flashing",
      section: "Section 7 · The layers on the outside",
      body: `Cladding is not waterproof. Siding, stucco and brick veneer all let some water past, and the design of a wall assumes they will.

The US Department of Energy's Building America Solution Center describes the strategy in one sentence: with a drainage plane behind the cladding, "any water that leaks through the cladding will run into a water-resistant surface and safely drain down the wall" (U.S. Department of Energy [DOE], n.d.-b). The same guide defines the layer's job as blocking "the penetration of moisture that gets past the siding" and providing "a path for it to safely drain down and away from the wall" (DOE, n.d.-b).

Two verbs there: **block**, and **drain**. Stopping water is only half of it. A wall that stops water and holds it has not solved anything.

**Which is why laps go one way.** "Install all layers of the drainage plane to overlap, not underlap, to direct bulk water down and out of the wall" (DOE, n.d.-b). Every upper piece goes over the top of the piece below, the way roof shingles do, so water running down the face crosses each joint on the outside. One sheet installed the wrong way round is a funnel pointing into the wall.

**Flashing is the same principle in metal.** The Navy manual defines it: "Flashing is specially constructed pieces of sheet metal or other materials used to protect the building from water seepage. Flashing must be made watertight and be water shedding" (NETPDTC, 1994, p. 3-15). Watertight *and* water shedding, again two jobs. And the DOE guide gives the rule that ties flashings into the rest: "Lap drainage plane materials over all exterior wall flashings so water flowing down the walls is directed away from the building" (DOE, n.d.-b).

**Claddings get a gap behind them.** The DOE guide gives a drainage gap dimension behind lap siding, behind stucco and behind brick veneer, the last attributed to the residential code (DOE, n.d.-b). This course does not print those dimensions, for the same reason it prints no spans: yours come from the code your jurisdiction adopted. But the principle is worth knowing when you look at a brick house. That brick is not holding the house up. The Navy manual is explicit that siding, shingles, stucco and brick veneer are placed over the sheathing to finish the wall (NETPDTC, 1994, p. 1-29). Brick veneer is a coat, and there is a drained space behind it.

**The same logic reappears at the roof edge.** A metal drip edge at the eaves and rake makes water "drip free of underlying cornice construction" (NETPDTC, 1994, p. 3-15), and in snow country, where "melting snow refreezes at the eave line", the manual calls for eave flashing and adds that "cornice ventilation by means of soffit vents and sufficient insulation will minimize the melting" (NETPDTC, 1994, p. 3-14). An ice dam is a heat problem that presents as a water problem, which is the theme of this whole section.

:::reveal What are the two verbs in the DOE guide's description of a drainage plane's job? ||| Block, and drain. It blocks moisture that gets past the siding and provides a path for it to drain down and away from the wall.

:::reveal Why must every layer of a drainage plane overlap the one below rather than underlap it? ||| So bulk water running down the face crosses each joint on the outside and is directed down and out of the wall. A sheet lapped the wrong way is a funnel pointing inward.

## Vocabulary
- **Drainage plane**: the water-resistant surface behind the cladding that catches leaked water and drains it back out.
- **Cladding**: the outermost finish layer, which is not assumed to be waterproof.
- **Flashing**: formed sheet material that keeps water out at a joint or edge, being both watertight and water shedding.
- **Drip edge**: flashing at a roof edge that makes water drip clear of the construction below.
- **Ice dam**: refrozen melt water at an eave, which backs water up under the covering.

## Sources
Naval Education and Training Professional Development and Technology Center. (1994). *Builder 3 & 2, Volume 2* (NAVEDTRA 14044). U.S. Navy. https://www.constructionknowledge.net/public_domain_documents/Builder_3_and_2_vol_2_NAVEDTRA_14044_1994.pdf
U.S. Department of Energy. (n.d.-b). *Drainage plane behind exterior wall cladding*. Building America Solution Center, Pacific Northwest National Laboratory. https://basc.pnnl.gov/resource-guides/drainage-plane-behind-exterior-wall-cladding`,
    },
    {
      slug: "air-vapour-heat",
      title: "21 · Air, vapour and heat, and why they travel together",
      section: "Section 7 · The layers on the outside",
      body: `Water gets a layer of its own because it arrives as liquid. The other three jobs are tangled together, because moving air carries both heat and vapour with it.

**Air first.** You have already met an air-sealing detail in this course without it being called one. The sill sealer under a sill plate "compresses, filling the irregularities in the foundation. It also stops drafts and reduces heat loss" (NETPDTC, 1994, p. 1-2). That is an air barrier detail at the bottom of the wall, installed for exactly the reasons air barriers exist. The manual describes the same instinct at the top end of the scale too, in the technique it calls enveloping: wall-height rolls of plastic film applied over studs, plates and headers "when a positive seal is desired", fitted tightly around outlet boxes and sealed where necessary (NETPDTC, 1994, p. 5-24). It also notes that outlet boxes and utility connections in exposed walls want attention "to minimize condensation on cold surfaces" (p. 5-24). Holes in a wall are where both air and vapour concentrate.

**Vapour second, and the position is the whole trick.** The vapour-resistant layer belongs on the warm side of the wall and below the insulation in an attic (NETPDTC, 1994, p. 5-24). On flexible insulation the barrier is often part of the product: "One covering sheet serves as a vapor barrier to resist movement of water vapor and should always face the warm side of the wall" (NETPDTC, 1994, p. 5-20). That sentence contains an instruction and a failure mode. Install the batt the wrong way round and the barrier is on the cold side, which is where you did not want it.

**Heat third.** The manual groups insulation into flexible blanket and batt, loose fill, reflective, rigid, and miscellaneous types (NETPDTC, 1994, p. 5-20), and notes that loose fill is well suited to first-floor ceiling joists in unheated attics and to the walls of existing houses that were never insulated. It adds a warning that belongs in this section: where no vapour barrier was installed originally, a suitable paint coating should be used as one when insulation is blown into an existing house (NETPDTC, 1994, pp. 5-20 to 5-21). Adding insulation to an old wall changes where the cold surface is, which changes where vapour will condense. That is a building science decision and not a shopping decision.

**And finally, ventilation, which is how an assembly forgives its own mistakes.** HUD's standard for manufactured homes, which again governs factory-built homes and not site-built houses, requires a minimum free ventilation area for an attic or roof cavity, expressed as a fraction of that cavity's floor area, and requires the openings to be distributed, with a share in the upper portions and a share at the eaves or soffits (24 C.F.R. § 3280.504). The shape of the rule is the lesson: openings low and openings high, so air moves through the space and carries moisture out. The same standard allows wall cavities to be built so that ventilation dissipates any condensation occurring in them.

**The summary sentence for the whole section.** Water out, air stopped, vapour controlled from the warm side, heat slowed, and a way for anything that still gets in to dry out again.

:::reveal What does the manual say should always face the warm side of the wall on a faced batt of insulation? ||| The covering sheet that serves as a vapour barrier. Installed the wrong way round, the barrier ends up on the cold side.

:::reveal Why does a vented attic have openings both low and high? ||| So air moves through the space and carries moisture out, rather than sitting still in it.

## Vocabulary
- **Air barrier**: the layer or detail that stops air moving through an assembly, carrying heat and vapour with it.
- **Enveloping**: the manual's name for applying wall-height vapour barrier film over studs, plates and headers for a positive seal.
- **Loose fill**: insulation poured, blown or packed in bulk rather than supplied in batts or boards.
- **Free ventilation area**: the open area of vents serving a cavity, set as a fraction of the cavity's floor area.
- **Drying**: an assembly's ability to release moisture that gets into it, which is as important as keeping moisture out.

## Sources
Naval Education and Training Professional Development and Technology Center. (1994). *Builder 3 & 2, Volume 2* (NAVEDTRA 14044). U.S. Navy. https://www.constructionknowledge.net/public_domain_documents/Builder_3_and_2_vol_2_NAVEDTRA_14044_1994.pdf
*Condensation control and installation of vapor retarders*, 24 C.F.R. § 3280.504. https://www.law.cornell.edu/cfr/text/24/3280.504`,
    },
    {
      slug: "section-7-quiz",
      title: "Section 7 quiz · Water, air, vapour and heat",
      section: "Section 7 · The layers on the outside",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "How many separate jobs does the outside of a wall have, according to section 7?",
            options: [
              "Four",
              "One, which is keeping water out, performed by several materials at once",
              "Two, structure and weather protection, divided between sheathing and cladding",
              "Six, one for each material in a typical wall assembly",
            ],
            correctIndex: 0,
            explanation:
              "Keep liquid water out, stop air moving through, manage vapour, and slow heat. They are not one job done four times.",
            sourceLessonSlug: "four-jobs-four-layers",
          },
          {
            prompt: "Why does a wall need layers rather than one very good material?",
            options: [
              "One material rarely does more than two jobs",
              "Because layers are cheaper than a single high-performance product",
              "Because codes require a minimum number of separate materials",
              "Because each trade installs its own material in sequence",
            ],
            correctIndex: 0,
            explanation:
              "Each of the four jobs wants different properties, and a material good at one is often bad at another.",
            sourceLessonSlug: "four-jobs-four-layers",
          },
          {
            prompt: "Where is the water vapour in a house generated?",
            options: [
              "Inside, by the occupants",
              "Outside, and it is driven in by wind pressure on the walls",
              "In the wall cavity, where warm and cold air meet",
              "In the attic, and it then moves down into the living space",
            ],
            correctIndex: 0,
            explanation:
              "The manual says considerable water vapour can be generated inside structures, by people, cooking and washing.",
            sourceLessonSlug: "four-jobs-four-layers",
          },
          {
            prompt: "How does water vapour move through a wall?",
            options: [
              "Through the materials themselves",
              "Only through gaps and holes left by careless work",
              "Only when liquid water has already entered the assembly",
              "Only downward, following gravity through the cavity",
            ],
            correctIndex: 0,
            explanation:
              "Most building materials are permeable to water vapour, which is why the problem cannot be solved by sealing holes alone.",
            sourceLessonSlug: "four-jobs-four-layers",
          },
          {
            prompt: "What can happen when vapour passes through wall and ceiling materials in cold weather?",
            options: [
              "It condenses inside the cavity",
              "It freezes on the inside face of the drywall where it is visible",
              "It escapes harmlessly through the cladding to the outside air",
              "It raises the indoor humidity until the occupants notice it",
            ],
            correctIndex: 0,
            explanation:
              "The manual says in severe cases it may damage exterior paint and interior finish, or even result in structural member decay.",
            sourceLessonSlug: "four-jobs-four-layers",
          },
          {
            prompt: "On which side of a wall does a vapour barrier belong?",
            options: [
              "The warm side",
              "The cold side, where the vapour is heading",
              "The outside, under the cladding, where it also sheds water",
              "Either side, provided it is continuous",
            ],
            correctIndex: 0,
            explanation:
              "That is the side the vapour is coming from. On the cold side it becomes a surface for water to condense on inside the wall.",
            sourceLessonSlug: "four-jobs-four-layers",
          },
          {
            prompt: "Where does the manual say a vapour barrier belongs in an attic?",
            options: [
              "Below the insulation",
              "Above the insulation, where it can shed any roof leak",
              "At the ridge, where warm air collects",
              "At the eaves, alongside the ventilation openings",
            ],
            correctIndex: 0,
            explanation:
              "Below the insulation means on the warm side, the same rule as in a wall applied to a horizontal assembly.",
            sourceLessonSlug: "four-jobs-four-layers",
          },
          {
            prompt: "What does the manual say about the insulating value of an empty stud space?",
            options: [
              "Air spaces resist heat, but filled spaces do far better",
              "An empty cavity insulates as well as a filled one if it is sealed",
              "An empty cavity has no insulating value whatsoever",
              "An empty cavity performs better, because still air is the best insulator",
            ],
            correctIndex: 0,
            explanation:
              "Filled or partly filled with a high insulating value material, the stud space has many times the insulating ability of the air alone.",
            sourceLessonSlug: "four-jobs-four-layers",
          },
          {
            prompt: "What is a control layer?",
            options: [
              "A layer responsible for one job",
              "The layer an inspector checks before the wall is closed up",
              "The layer that controls the position of all the others",
              "The structural layer, which controls how the wall carries load",
            ],
            correctIndex: 0,
            explanation:
              "Water, air, vapour and thermal are the four, and naming them separately is what stops people ranking materials as simply better or worse.",
            sourceLessonSlug: "four-jobs-four-layers",
          },
          {
            prompt: "What shape does HUD's vapour retarder rule have, even without its numbers?",
            options: [
              "Tight inside, open outside",
              "Tight on both faces, with a sealed cavity between them",
              "Open inside, tight outside, so vapour is stopped at the cladding",
              "Identical in every climate zone in the country",
            ],
            correctIndex: 0,
            explanation:
              "A vapour retarder on the living-space side, with alternatives that make the outer layers more permeable so anything getting in can get out.",
            sourceLessonSlug: "four-jobs-four-layers",
          },
          {
            prompt: "What kind of homes does 24 CFR 3280.504 govern?",
            options: [
              "Manufactured homes",
              "Every home in states that have adopted an energy code",
              "Homes in cold climate zones only",
              "New site-built homes, but not existing ones",
            ],
            correctIndex: 0,
            explanation:
              "The course cites it for the shape of its logic and says what it governs every single time, per its own rule.",
            sourceLessonSlug: "four-jobs-four-layers",
          },
          {
            prompt: "What does permeable mean in this section?",
            options: [
              "Letting vapour pass through the material",
              "Letting liquid water run through a gap in an assembly",
              "Allowing air to move freely through a cavity",
              "Absorbing moisture and holding it in the material",
            ],
            correctIndex: 0,
            explanation:
              "Most building materials are permeable to water vapour, which is the fact the whole section is built on.",
            sourceLessonSlug: "four-jobs-four-layers",
          },
          {
            prompt: "What is condensation, as this section uses the word?",
            options: [
              "Water forming on a cold surface",
              "Vapour leaking through a hole in the air barrier",
              "The absorption of moisture into a porous material",
              "The swelling of wood as it takes up humidity",
            ],
            correctIndex: 0,
            explanation:
              "Moist air meeting a surface cold enough to take it below its dew point. Where that surface is depends on where the layers are.",
            sourceLessonSlug: "four-jobs-four-layers",
          },
          {
            prompt: "What does the course say about cladding and water?",
            options: [
              "It is not waterproof",
              "It is the only waterproof layer, and everything behind it stays dry",
              "It keeps out rain but not wind-driven rain",
              "It is waterproof when new and fails only as it ages",
            ],
            correctIndex: 0,
            explanation:
              "Siding, stucco and brick veneer all let some water past, and the wall behind them is designed on that assumption.",
            sourceLessonSlug: "water-first",
          },
          {
            prompt: "What does the DOE guide say happens to water that leaks through the cladding?",
            options: [
              "It drains down a water-resistant surface",
              "It evaporates in the cavity before it can reach the framing",
              "It is absorbed by the sheathing and released slowly",
              "It is carried into the wall cavity and out through weep holes in the studs",
            ],
            correctIndex: 0,
            explanation:
              "It runs into a water-resistant surface and safely drains down the wall, which is what a drainage plane is for.",
            sourceLessonSlug: "water-first",
          },
          {
            prompt: "What two things does the DOE guide say a wall water barrier does?",
            options: [
              "Blocks moisture and provides a drainage path",
              "Stops water and stops air, in a single continuous layer",
              "Sheds rain and reflects heat away from the structure",
              "Seals the wall and allows the cladding to be fixed through it",
            ],
            correctIndex: 0,
            explanation:
              "Block and drain. A wall that stops water and then holds it has not solved anything.",
            sourceLessonSlug: "water-first",
          },
          {
            prompt: "How must the layers of a drainage plane be installed?",
            options: [
              "Overlapping, not underlapping",
              "Butted edge to edge and sealed with tape at every joint",
              "With the lower layers over the upper ones to resist wind uplift",
              "In a single unbroken sheet with no joints anywhere",
            ],
            correctIndex: 0,
            explanation:
              "Each upper piece over the one below, the way shingles work, so bulk water crosses each joint on the outside and is directed down and out.",
            sourceLessonSlug: "water-first",
          },
          {
            prompt: "What is a sheet of drainage plane material installed the wrong way round?",
            options: [
              "A funnel pointing inward",
              "A vapour barrier on the cold side of the wall",
              "A thermal bridge through the insulation",
              "An air leak at the top of the wall",
            ],
            correctIndex: 0,
            explanation:
              "Water running down the face meets the open edge and is led into the wall rather than out of it.",
            sourceLessonSlug: "water-first",
          },
          {
            prompt: "How does the Navy manual define flashing?",
            options: [
              "Formed pieces protecting against water seepage",
              "A sealant applied at joints where two materials meet",
              "The trim that covers the joint between roof and wall",
              "A drainage channel formed in the sheathing at each opening",
            ],
            correctIndex: 0,
            explanation:
              "Specially constructed pieces of sheet metal or other materials, which must be made watertight and be water shedding.",
            sourceLessonSlug: "water-first",
          },
          {
            prompt: "What two properties does the manual require of flashing?",
            options: [
              "Watertight and water shedding",
              "Corrosion resistant and paintable",
              "Rigid and continuous across the whole wall",
              "Permeable to vapour and impermeable to liquid",
            ],
            correctIndex: 0,
            explanation:
              "Two jobs again, the same pairing as block and drain. Holding water out is not enough if the water has nowhere to go.",
            sourceLessonSlug: "water-first",
          },
          {
            prompt: "How must drainage plane materials meet exterior wall flashings?",
            options: [
              "Lapped over them",
              "Tucked behind them, so the flashing sheds onto the cladding",
              "Butted to them and sealed with a compatible tape",
              "Kept clear of them, so each drains independently",
            ],
            correctIndex: 0,
            explanation:
              "The DOE guide says to lap drainage plane materials over all exterior wall flashings so water flowing down the walls is directed away from the building.",
            sourceLessonSlug: "water-first",
          },
          {
            prompt: "Why does this course not print the DOE guide's drainage gap dimensions?",
            options: [
              "Yours come from your own code",
              "Because the guide has withdrawn them in a later revision",
              "Because gaps differ between manufacturers rather than jurisdictions",
              "Because the guide gives them only for commercial buildings",
            ],
            correctIndex: 0,
            explanation:
              "The same rule as every other number in this course. The gap that governs your wall comes from the code your jurisdiction adopted.",
            sourceLessonSlug: "water-first",
          },
          {
            prompt: "What is brick veneer doing on a house?",
            options: [
              "Finishing the wall, not holding it up",
              "Carrying the floor loads down to the foundation",
              "Bracing the wall against racking in place of sheathing",
              "Serving as the drainage plane for the wall behind it",
            ],
            correctIndex: 0,
            explanation:
              "The manual lists siding, shingles, stucco and brick veneer as things placed over the sheathing to finish the wall. Brick veneer is a coat with a drained space behind it.",
            sourceLessonSlug: "water-first",
          },
          {
            prompt: "What does a metal drip edge at a roof edge do?",
            options: [
              "Makes water drip clear of the construction",
              "Holds the underlayment down until shingles are laid",
              "Stops wind lifting the first course of shingles",
              "Carries meltwater along the eave to the downspout",
            ],
            correctIndex: 0,
            explanation:
              "The manual says it causes water to drip free of the underlying cornice construction, which keeps it off what is below.",
            sourceLessonSlug: "water-first",
          },
          {
            prompt: "What happens at an eave in snow country to create an ice dam?",
            options: [
              "Melting snow refreezes there",
              "Snow accumulates faster at the edge than at the ridge",
              "Gutters freeze first and force water back up the slope",
              "Wind drives snow under the covering and it melts inside",
            ],
            correctIndex: 0,
            explanation:
              "The manual describes melting snow refreezing at the eave line, which backs water up under the shingles.",
            sourceLessonSlug: "water-first",
          },
          {
            prompt: "What does the manual say will minimise the melting that causes ice dams?",
            options: [
              "Soffit ventilation and sufficient insulation",
              "A steeper roof pitch above the affected eave",
              "Heavier roofing felt laid across the whole roof",
              "Removing the gutters so water cannot pool",
            ],
            correctIndex: 0,
            explanation:
              "Cornice ventilation by means of soffit vents plus enough insulation. An ice dam is a heat problem that presents as a water problem.",
            sourceLessonSlug: "water-first",
          },
          {
            prompt: "What is a drainage plane?",
            options: [
              "The water-resistant surface behind the cladding",
              "The slope of the ground away from the foundation",
              "The gap left between sheathing panels for expansion",
              "The path water takes along a roof to its gutters",
            ],
            correctIndex: 0,
            explanation:
              "It catches whatever gets past the cladding and drains it back out, which is why its laps and its flashings matter so much.",
            sourceLessonSlug: "water-first",
          },
          {
            prompt: "What does the course say the two verbs block and drain are meant to correct?",
            options: [
              "The idea that stopping water is enough",
              "The idea that cladding is the only weather layer",
              "The idea that flashing is only needed at the roof",
              "The idea that water always enters from above",
            ],
            correctIndex: 0,
            explanation:
              "A wall that stops water and holds it has not solved anything. The water needs a way back out.",
            sourceLessonSlug: "water-first",
          },
          {
            prompt: "Why do air, vapour and heat get taught together?",
            options: [
              "Moving air carries heat and vapour with it",
              "Because the same product controls all three in modern walls",
              "Because all three are measured in the same units",
              "Because the code treats them as a single requirement",
            ],
            correctIndex: 0,
            explanation:
              "Water arrives as liquid and gets its own layer. The other three are tangled together by the movement of air.",
            sourceLessonSlug: "air-vapour-heat",
          },
          {
            prompt: "Which detail from earlier in the course turns out to be an air-sealing detail?",
            options: [
              "The sill sealer",
              "The termite shield under the sill plate",
              "The air space around a girder end in its pocket",
              "The gap between sheathing panels",
            ],
            correctIndex: 0,
            explanation:
              "The manual says it fills the irregularities in the foundation, stops drafts and reduces heat loss, which is what an air barrier detail does.",
            sourceLessonSlug: "air-vapour-heat",
          },
          {
            prompt: "What does the manual call applying wall-height rolls of plastic film over studs, plates and headers?",
            options: [
              "Enveloping",
              "Wrapping, the term also used for the exterior water barrier",
              "Sealing, which is the general name for any continuous membrane",
              "Lining, because the film lines the inside face of the wall",
            ],
            correctIndex: 0,
            explanation:
              "Used when a positive seal is desired, over insulation having no barrier of its own or to add protection over any type.",
            sourceLessonSlug: "air-vapour-heat",
          },
          {
            prompt: "Why do outlet boxes in exterior walls get special attention?",
            options: [
              "Air and vapour concentrate at holes",
              "Because electrical codes require them to be sealed against fire",
              "Because they interrupt the insulation more than anything else does",
              "Because they are the only penetrations an inspector can see",
            ],
            correctIndex: 0,
            explanation:
              "The manual describes fitting the barrier tightly around outlet boxes and sealing them to minimise vapour loss and condensation on cold surfaces.",
            sourceLessonSlug: "air-vapour-heat",
          },
          {
            prompt: "Which way should a faced batt of insulation be installed?",
            options: [
              "Covering sheet facing the warm side",
              "Covering sheet facing the cold side, toward the sheathing",
              "Either way, since the facing is only there for handling",
              "With the facing removed before the batt is fitted",
            ],
            correctIndex: 0,
            explanation:
              "The covering sheet serves as a vapour barrier and should always face the warm side. Reversed, the barrier ends up exactly where you did not want it.",
            sourceLessonSlug: "air-vapour-heat",
          },
          {
            prompt: "Which five classes of insulation does the manual list?",
            options: [
              "Flexible, loose fill, reflective, rigid and miscellaneous",
              "Batt, board, spray, blown and reflective foil",
              "Mineral, vegetable, plastic, metallic and composite",
              "Wall, floor, ceiling, roof and foundation grades",
            ],
            correctIndex: 0,
            explanation:
              "Flexible covers blanket and batt. Rigid covers both structural and nonstructural boards.",
            sourceLessonSlug: "air-vapour-heat",
          },
          {
            prompt: "Where does the manual say loose fill is well suited?",
            options: [
              "Ceiling joists in unheated attics",
              "Between the studs of a new exterior wall before drywall",
              "Under a concrete slab before it is poured",
              "In the cavity behind brick veneer",
            ],
            correctIndex: 0,
            explanation:
              "And in the sidewalls of existing houses that were never insulated during construction, which is where the vapour warning comes in.",
            sourceLessonSlug: "air-vapour-heat",
          },
          {
            prompt: "What warning does the manual attach to blowing insulation into an existing uninsulated house?",
            options: [
              "Provide a vapour barrier, such as a paint coating",
              "Remove the existing plaster first so the fill can be inspected",
              "Blow it only in summer, when the walls are driest",
              "Use reflective insulation instead, because fill settles",
            ],
            correctIndex: 0,
            explanation:
              "Where no vapour barrier was installed during construction, a suitable paint coating should be used as one. Adding insulation moves the cold surface.",
            sourceLessonSlug: "air-vapour-heat",
          },
          {
            prompt: "Why is adding insulation to an old wall a building science decision?",
            options: [
              "It changes where vapour will condense",
              "Because older framing cannot carry the extra weight",
              "Because the wall must be rewired at the same time",
              "Because insulation reduces the wall's racking resistance",
            ],
            correctIndex: 0,
            explanation:
              "It moves the position of the cold surface inside the assembly, which moves the place where moisture can condense.",
            sourceLessonSlug: "air-vapour-heat",
          },
          {
            prompt: "How does HUD's standard express the minimum ventilation for an attic or roof cavity?",
            options: [
              "As a fraction of the cavity's floor area",
              "As a fixed number of vents per side of the building",
              "As a volume of air changed per hour by a fan",
              "As a percentage of the roof's surface area",
            ],
            correctIndex: 0,
            explanation:
              "And it requires the openings to be distributed, with a share in the upper portions and a share at the eaves or soffits.",
            sourceLessonSlug: "air-vapour-heat",
          },
          {
            prompt: "What does distributing attic vents high and low achieve?",
            options: [
              "Air moves through and carries moisture out",
              "Snow is prevented from entering the upper openings",
              "The attic stays at the same temperature as the living space",
              "Insulation is held in place by the pressure difference",
            ],
            correctIndex: 0,
            explanation:
              "A single set of openings lets air sit still. Openings at two heights give it a reason to move.",
            sourceLessonSlug: "air-vapour-heat",
          },
          {
            prompt: "What is the summary sentence for section 7?",
            options: [
              "Keep water out, stop air, control vapour, slow heat, and let it dry",
              "Use the most waterproof material available in every position",
              "Seal the assembly completely so nothing can enter it at all",
              "Insulate first and let the other three jobs follow from it",
            ],
            correctIndex: 0,
            explanation:
              "Drying is the last clause and the one people forget. An assembly that cannot dry has no margin for the mistakes it will inevitably contain.",
            sourceLessonSlug: "air-vapour-heat",
          },
          {
            prompt: "What is an air barrier?",
            options: [
              "The layer stopping air moving through the assembly",
              "The gap that allows air to circulate behind the cladding",
              "The film installed to stop vapour diffusing through materials",
              "The insulation, which traps air in small pockets",
            ],
            correctIndex: 0,
            explanation:
              "Air carries both heat and water vapour, so an air barrier is doing two of the four jobs at once.",
            sourceLessonSlug: "air-vapour-heat",
          },
          {
            prompt: "What does the course mean by drying, in the context of an assembly?",
            options: [
              "Its ability to release moisture that gets in",
              "The period after construction before the finishes are applied",
              "The seasoning of lumber before it is built into a wall",
              "The evaporation of water from a freshly poured slab",
            ],
            correctIndex: 0,
            explanation:
              "As important as keeping moisture out, because no assembly keeps all moisture out for its whole life.",
            sourceLessonSlug: "air-vapour-heat",
          },
          {
            prompt: "What does HUD's standard allow for wall cavities as an alternative to a vapour barrier?",
            options: [
              "Ventilation that dissipates condensation",
              "A double layer of insulation with no facing at all",
              "A sealed cavity with no openings of any kind",
              "An exterior cladding rated as fully waterproof",
            ],
            correctIndex: 0,
            explanation:
              "Wall cavities may be constructed so that ventilation dissipates any condensation occurring in them, which is a drying strategy rather than a blocking one.",
            sourceLessonSlug: "air-vapour-heat",
          },
          {
            prompt: "Which job does liquid water get in this section, compared with air, vapour and heat?",
            options: [
              "Its own separate layer",
              "The same layer as vapour, since both are water",
              "No layer of its own, because cladding handles it",
              "A layer shared with the thermal control layer",
            ],
            correctIndex: 0,
            explanation:
              "It arrives as liquid and is handled by the drainage plane and flashings. The other three travel together with moving air.",
            sourceLessonSlug: "air-vapour-heat",
          },
          {
            prompt: "What is free ventilation area?",
            options: [
              "The open area of the vents serving a cavity",
              "The volume of a ventilated attic measured in cubic feet",
              "The unobstructed floor area of an attic space",
              "The area of roof left uninsulated to allow drying",
            ],
            correctIndex: 0,
            explanation:
              "It is set as a fraction of the cavity's floor area, which is how a standard turns a principle into a checkable requirement.",
            sourceLessonSlug: "air-vapour-heat",
          },
          {
            prompt: "Which earlier lesson does section 7 say it was already explaining?",
            options: [
              "The roof underlayment warning",
              "The lesson on how wood shrinks across the grain",
              "The lesson on soil-bearing capacity and footings",
              "The lesson on racking and sheathing",
            ],
            correctIndex: 0,
            explanation:
              "The manual's warning that a waterproof underlayment traps moisture is the four-layer idea stated in one paragraph about one material.",
            sourceLessonSlug: "four-jobs-four-layers",
          },
          {
            prompt: "Which of these is a vapour-barrier material the manual names?",
            options: [
              "Aluminium foil",
              "Asphalt-saturated felt, which is used as roof underlayment",
              "Oriented strand board, when installed with sealed joints",
              "Loose fill insulation, when packed tightly enough",
            ],
            correctIndex: 0,
            explanation:
              "It names asphalt laminated papers, aluminium foil and plastic films, plus foil-backed gypsum products.",
            sourceLessonSlug: "air-vapour-heat",
          },
          {
            prompt: "What does the manual say about paint as a vapour barrier?",
            options: [
              "It cannot substitute for membrane types",
              "It is the preferred method in all new construction",
              "It works only on the exterior face of a wall",
              "It has no effect on vapour movement at all",
            ],
            correctIndex: 0,
            explanation:
              "It provides some protection where other types were never installed, which is why it comes up for existing houses rather than new ones.",
            sourceLessonSlug: "air-vapour-heat",
          },
          {
            prompt: "What does the course say an ice dam really is?",
            options: [
              "A heat problem presenting as a water problem",
              "A structural problem caused by snow load at the eave",
              "A flashing problem caused by a missing drip edge",
              "A ventilation problem with no connection to insulation",
            ],
            correctIndex: 0,
            explanation:
              "Heat escaping into the roof melts snow, which refreezes at the cold eave. The manual's answer is ventilation plus sufficient insulation.",
            sourceLessonSlug: "water-first",
          },
          {
            prompt: "Which statement matches the manual's view of building materials and vapour?",
            options: [
              "Most are permeable to it",
              "Most block it completely once painted",
              "Only insulation allows it to pass",
              "It passes only where two materials meet",
            ],
            correctIndex: 0,
            explanation:
              "That single fact is why vapour needs a designated control layer and cannot be handled by careful sealing alone.",
            sourceLessonSlug: "four-jobs-four-layers",
          },
          {
            prompt: "Which agency funds the Building America Solution Center guides this course cites?",
            options: [
              "The Department of Energy",
              "The Department of Housing and Urban Development",
              "The Forest Products Laboratory",
              "The Federal Emergency Management Agency",
            ],
            correctIndex: 0,
            explanation:
              "The guides carry a Department of Energy funding statement and disclaimer, and the course cites and links them rather than reproducing them.",
            sourceLessonSlug: "water-first",
          },
          {
            prompt: "What does the course say about ranking a building's layers from less to more waterproof?",
            options: [
              "The ranking is the wrong idea",
              "It is correct, provided the most waterproof layer is outermost",
              "It applies to roofs but not to walls",
              "It applies only where no insulation is installed",
            ],
            correctIndex: 0,
            explanation:
              "Each layer has a job, and the wrong job in the wrong place causes damage that looks like a leak and is not.",
            sourceLessonSlug: "four-jobs-four-layers",
          },
          {
            prompt: "Which two of the four jobs does an air barrier contribute to at once?",
            options: [
              "Heat and vapour",
              "Water and heat",
              "Water and vapour",
              "Structure and heat",
            ],
            correctIndex: 0,
            explanation:
              "Moving air carries heat out of a building and carries water vapour into its assemblies, so stopping it helps with both.",
            sourceLessonSlug: "air-vapour-heat",
          },
          {
            prompt: "Where would you look for the ventilation and vapour rules that actually govern your own house?",
            options: [
              "Your jurisdiction's adopted code",
              "The HUD standard cited in this section",
              "The Navy manual, which states the national minimum",
              "The insulation manufacturer's packaging",
            ],
            correctIndex: 0,
            explanation:
              "HUD's standard governs manufactured homes. Finding the code that governs your house is the business of the companion course in this series.",
            sourceLessonSlug: "air-vapour-heat",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 8 — Connections, and what weather finds
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "houses-fail-at-connections",
      title: "22 · Houses come apart at their connections",
      section: "Section 8 · Connections, and what weather finds",
      body: `Everything so far has been about members. This lesson is about the gaps between them, which is where the trouble is.

The US Department of Energy's building science guide gives the name for the whole idea: "The term continuous load path describes the structural condition required to resist all loads acting on a building" (U.S. Department of Energy [DOE], n.d.-a). Continuous is the operative word. A load path made of excellent members with one weak joint is not a load path.

**Then the sentence worth memorising.** "The connections between major building component assemblies (i.e., roof, walls, floors, and foundations) tend to be the weakest link within a load path. If a connection fails, an alternative load path will form. If the members and connections in the new load path are not strong enough, progressive failure can occur" (DOE, n.d.-a).

Read the second half slowly. A failure does not stop at the thing that failed. The load still has to get to the ground, so it finds another way, and that way was not designed for it. That is what the word *progressive* is doing.

**The connections that guide names** are roof sheathing to framing, roof to wall, the wall above to the wall below, wall to foundation, and chimney to roof member (DOE, n.d.-a). Notice that this list is the load path from lesson 5, written as a list of joints instead of a list of parts.

**The same requirement in a federal rule.** HUD's standard for manufactured homes, not site-built houses, states it as an obligation: "roof framing must be securely fastened to wall framing, walls to floor structure, and floor structure to chassis to secure and maintain continuity between the floor and chassis, so as to resist wind overturning, uplift, and sliding" (24 C.F.R. § 3280.305). Its windstorm section adds that support, anchoring or foundation systems must "resist overturning and lateral movement (sliding)" (24 C.F.R. § 3280.306). Continuity, uplift, overturning, sliding. Four words, all of them about connections rather than about members.

**Why uplift is the hard case.** Gravity holds most of a house's joints closed. A joist sitting on a plate stays there because it is heavy and the plate is under it. Wind reverses that. Under uplift the joint is being pulled open, and nothing about resting on something resists a pull. That is why metal connectors exist. The Navy manual already mentions them for ordinary cases: framing anchors at cantilevered joists are "strongly recommended and often required by the specifications" (NETPDTC, 1994, p. 1-10), and metal anchors are used to strengthen framed floor openings (p. 1-16).

**And one more reason a connection can weaken with nobody touching it.** Lesson 9 quoted the *Wood Handbook* on built-up assemblies: as members shrink, it may be necessary to tighten bolts or other fastenings to maintain full bearing of the connectors (Bergman, 2021, p. 13-3). A joint can lose its grip through ordinary seasonal movement.

:::reveal What does the DOE guide say tends to be the weakest link in a load path? ||| The connections between major building component assemblies: roof, walls, floors and foundations.

:::reveal What does progressive failure mean? ||| When a connection fails, the load finds an alternative path. If the members and connections in that new path are not strong enough, the failure continues rather than stopping where it began.

## Vocabulary
- **Continuous load path**: the structural condition required to resist all the loads acting on a building, with no weak link between roof and ground.
- **Progressive failure**: failure that spreads because load redirected by one failed connection overwhelms the next.
- **Framing anchor**: a metal connector fastening one framing member to another where nails alone are not relied on.
- **Sliding**: horizontal movement of a building relative to what it stands on, resisted by anchorage.

## Sources
Bergman, R. (2021). Drying and control of moisture content and dimensional changes (Chapter 13). In R. J. Ross (Ed.), *Wood handbook: Wood as an engineering material* (General Technical Report FPL-GTR-282). U.S. Department of Agriculture, Forest Service, Forest Products Laboratory. https://www.fpl.fs.usda.gov/documnts/fplgtr/fplgtr282/chapter_13_fpl_gtr282.pdf
Naval Education and Training Professional Development and Technology Center. (1994). *Builder 3 & 2, Volume 2* (NAVEDTRA 14044). U.S. Navy. https://www.constructionknowledge.net/public_domain_documents/Builder_3_and_2_vol_2_NAVEDTRA_14044_1994.pdf
*Structural design requirements*, 24 C.F.R. § 3280.305. https://www.law.cornell.edu/cfr/text/24/3280.305
*Windstorm protection*, 24 C.F.R. § 3280.306. https://www.law.cornell.edu/cfr/text/24/3280.306
U.S. Department of Energy. (n.d.-a). *Continuous load path provided with connections from the roof through the wall to the foundation*. Building America Solution Center, Pacific Northwest National Laboratory. https://basc.pnnl.gov/resource-guides/continuous-load-path-provided-connections-roof-through-wall-foundation`,
    },
    {
      slug: "decay-is-structural",
      title: "23 · Decay is a structural subject, and dryness is the whole defence",
      section: "Section 8 · Connections, and what weather finds",
      body: `A house does not usually fail because someone got a calculation wrong. It fails because a member or a connection is not what it was, and the most common reason for that is water.

The *Wood Handbook* states the mechanism and the defence in one paragraph, and it is the most useful paragraph in this course: "Serious decay occurs only when the moisture content of the wood is above the fiber saturation point (average 30%). Only when previously dried wood is contacted by water in the form of rain or condensation or is in contact with wet ground will the fiber saturation point be reached. By itself, the water vapor in humid air will not wet wood sufficiently to support significant decay, but it will permit development of some mold fungi. Fully air-dried wood usually will have a moisture content not exceeding 20% and should provide a reasonable margin of safety against fungal damage. Thus, wood will not decay if it is kept air dry, and decay already present from prior infection will not progress" (Arango et al., 2021, p. 14-3).

Take the claims one at a time, because each one changes how you look at a house.

- **There is a threshold.** Below roughly the fiber saturation point, serious decay does not happen.
- **Humid air alone is not enough.** Vapour in the air will not wet wood enough for serious decay, though it will support some mould.
- **Three things do reach the threshold**: rain, condensation, and contact with wet ground.
- **Dry stops it, and dry stops it retroactively.** Decay already present will not progress in wood kept air dry.

**Now look back at this course.** Section 4 kept wood clear of the ground and put an air space around a girder end so it could dry. Section 7 put a drainage plane behind the cladding, flashings at every interruption, an overhang at the eaves, a vapour retarder on the warm side and vents at two heights in the attic. Every one of those details is aimed at the same number. They are not comfort features or finish details. **They are the structural strategy**, because a member that stays under the threshold keeps the properties the designer assumed it had.

**Insects belong to the same chapter.** The *Wood Handbook* treats fungal damage and wood-infesting insects together, and the Navy manual's termite shield and preservative-treated girder end are ordinary parts of a frame rather than extras (NETPDTC, 1994, pp. 1-2, 1-7). Treated wood, shields and clearance all exist because something else wants to eat the load path.

**What this gives an ordinary person to actually do.** Not repairs. Looking. Wood touching soil, water arriving where it should not, a crawl space clearance that somebody filled in with dirt or stored boxes, a stain on framing, a gutter discharging against a wall, an air space packed with insulation. Each one is a place where the threshold may have been crossed. None of them is yours to diagnose from the outside, and all of them are worth naming accurately to somebody who can.

:::reveal According to the Wood Handbook, what three things bring previously dried wood up to the fiber saturation point? ||| Contact with rain, contact with condensation, or contact with wet ground. Water vapour in humid air by itself will not.

:::reveal What does the handbook say happens to decay already present in wood that is kept air dry? ||| It will not progress. Dryness both prevents decay and stops existing decay from continuing.

## Vocabulary
- **Decay fungi**: organisms that consume the structural chemical components of wood, requiring moisture above the fiber saturation point to do serious damage.
- **Air dry**: a moisture content usually not exceeding 20 percent, which the handbook calls a reasonable margin of safety against fungal damage.
- **Preservative treatment**: chemical treatment of wood that resists fungal and insect attack, used where wood cannot be kept reliably dry.
- **Mould**: fungi that can develop at humidity levels below those needed for serious decay.

## Sources
Arango, R., Lebow, S. T., & Glaeser, J. A. (2021). Biodeterioration of wood (Chapter 14). In R. J. Ross (Ed.), *Wood handbook: Wood as an engineering material* (General Technical Report FPL-GTR-282). U.S. Department of Agriculture, Forest Service, Forest Products Laboratory. https://www.fpl.fs.usda.gov/documnts/fplgtr/fplgtr282/chapter_14_fpl_gtr282.pdf
Naval Education and Training Professional Development and Technology Center. (1994). *Builder 3 & 2, Volume 2* (NAVEDTRA 14044). U.S. Navy. https://www.constructionknowledge.net/public_domain_documents/Builder_3_and_2_vol_2_NAVEDTRA_14044_1994.pdf`,
    },
    {
      slug: "section-8-quiz",
      title: "Section 8 quiz · Connections and decay",
      section: "Section 8 · Connections, and what weather finds",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What does the term continuous load path describe?",
            options: [
              "The condition required to resist all loads",
              "The route taken by workers moving material through a site",
              "A load that acts continuously rather than intermittently",
              "The sequence in which structural members are installed",
            ],
            correctIndex: 0,
            explanation:
              "The DOE guide's own definition. Continuous is the operative word: excellent members with one weak joint are not a load path.",
            sourceLessonSlug: "houses-fail-at-connections",
          },
          {
            prompt: "Where does the DOE guide say the weakest link in a load path tends to be?",
            options: [
              "At the connections",
              "In the middle of the longest spanning member",
              "At the foundation, which carries the accumulated load",
              "In the roof, which is the most exposed assembly",
            ],
            correctIndex: 0,
            explanation:
              "Between major building component assemblies: roof, walls, floors and foundations.",
            sourceLessonSlug: "houses-fail-at-connections",
          },
          {
            prompt: "What happens when one connection in a load path fails?",
            options: [
              "An alternative load path forms",
              "The load stops at the failure and goes no further",
              "The remaining connections share the load equally between them",
              "The building settles onto the next member and stabilises",
            ],
            correctIndex: 0,
            explanation:
              "And if the members and connections in that new path are not strong enough, progressive failure can occur.",
            sourceLessonSlug: "houses-fail-at-connections",
          },
          {
            prompt: "What does the word progressive mean in progressive failure?",
            options: [
              "The failure spreads rather than stopping",
              "The failure happens slowly enough to be noticed and repaired",
              "The failure moves upward from the foundation to the roof",
              "The failure is limited to one storey at a time",
            ],
            correctIndex: 0,
            explanation:
              "The load still has to reach the ground, so it finds a route that nobody designed for it.",
            sourceLessonSlug: "houses-fail-at-connections",
          },
          {
            prompt: "Which of these is one of the critical connections the DOE guide names?",
            options: [
              "Roof to wall",
              "Stud to stud within a single framed wall",
              "Joist to bridging at the centre of a span",
              "Cladding to sheathing on an exterior wall",
            ],
            correctIndex: 0,
            explanation:
              "Its list is roof sheathing to framing, roof to wall, wall above to wall below, wall to foundation, and chimney to roof member.",
            sourceLessonSlug: "houses-fail-at-connections",
          },
          {
            prompt: "What is the DOE guide's list of critical connections, compared with lesson 5?",
            options: [
              "The same path written as joints",
              "A different path that applies only in high-wind regions",
              "A subset covering only the roof structure",
              "An ordering of connections by how often they are inspected",
            ],
            correctIndex: 0,
            explanation:
              "Lesson 5 walked the load path as a list of parts. This is the same path expressed as the list of handovers between them.",
            sourceLessonSlug: "houses-fail-at-connections",
          },
          {
            prompt: "What does HUD's standard require roof framing to be fastened to?",
            options: [
              "The wall framing",
              "The ceiling joists, which then transfer the load to the walls",
              "The chassis directly, bypassing the wall framing",
              "The roof sheathing, which carries the connection to the wall",
            ],
            correctIndex: 0,
            explanation:
              "Roof framing to wall framing, walls to floor structure, and floor structure to chassis, to maintain continuity and resist wind overturning, uplift and sliding.",
            sourceLessonSlug: "houses-fail-at-connections",
          },
          {
            prompt: "Which four words does the course pull out of the HUD requirements as being about connections?",
            options: [
              "Continuity, uplift, overturning and sliding",
              "Strength, stiffness, durability and serviceability",
              "Dead, live, snow and wind",
              "Bearing, bracing, anchoring and flashing",
            ],
            correctIndex: 0,
            explanation:
              "Every one of them describes what happens between assemblies rather than within a member.",
            sourceLessonSlug: "houses-fail-at-connections",
          },
          {
            prompt: "What must support, anchoring or foundation systems resist, per HUD's windstorm section?",
            options: [
              "Overturning and lateral movement",
              "Settlement and frost heave in the supporting soil",
              "Decay and insect attack at the ground contact",
              "Expansion and contraction of the chassis",
            ],
            correctIndex: 0,
            explanation:
              "Overturning and sliding, which are the two ways a whole building moves rather than the ways a member breaks.",
            sourceLessonSlug: "houses-fail-at-connections",
          },
          {
            prompt: "Why is uplift the hard case for a connection?",
            options: [
              "Resting on something does not resist a pull",
              "Because uplift acts faster than any other load on a building",
              "Because uplift is not considered in the design of ordinary houses",
              "Because uplift acts only on the roof and nowhere else",
            ],
            correctIndex: 0,
            explanation:
              "Gravity holds most joints closed. Wind reverses that, and the joint is pulled open, which is why metal connectors exist.",
            sourceLessonSlug: "houses-fail-at-connections",
          },
          {
            prompt: "What does the Navy manual say about framing anchors at cantilevered joists?",
            options: [
              "Strongly recommended and often required",
              "Optional in every case, since nailing is sufficient",
              "Prohibited, because they interfere with the joist hangers",
              "Required only where the cantilever exceeds two storeys",
            ],
            correctIndex: 0,
            explanation:
              "Often required by the specifications, which is the manual again pointing at the documents for one specific job.",
            sourceLessonSlug: "houses-fail-at-connections",
          },
          {
            prompt: "Where else does the Navy manual describe metal anchors being used?",
            options: [
              "To strengthen framed floor openings",
              "To fix the sheathing panels to the wall studs",
              "To join the top plates of two intersecting walls",
              "To hold the ridge board in position during erection",
            ],
            correctIndex: 0,
            explanation:
              "Around the headers and trimmers at a floor opening, where a lot of load is being redirected through a few joints.",
            sourceLessonSlug: "houses-fail-at-connections",
          },
          {
            prompt: "How can a connection weaken with nobody touching it?",
            options: [
              "Members shrink and bearing is lost",
              "Fasteners rust through in a matter of months",
              "The load on the building rises steadily as it ages",
              "The wood grows around the fastener and pushes it out",
            ],
            correctIndex: 0,
            explanation:
              "The Wood Handbook says it may be necessary to tighten bolts or other fastenings occasionally to maintain full bearing as members shrink.",
            sourceLessonSlug: "houses-fail-at-connections",
          },
          {
            prompt: "What is a framing anchor?",
            options: [
              "A metal connector between framing members",
              "The bolt that ties the sill plate to the foundation",
              "A brace holding a wall plumb until the sheathing is fixed",
              "The strap that holds insulation in a stud cavity",
            ],
            correctIndex: 0,
            explanation:
              "Used where nails alone are not relied on, which is increasingly often as uplift and seismic forces are taken seriously.",
            sourceLessonSlug: "houses-fail-at-connections",
          },
          {
            prompt: "What is sliding, in the sense HUD's standard uses?",
            options: [
              "Horizontal movement relative to the support",
              "The slipping of a joist along the plate it rests on",
              "The movement of sheathing panels relative to one another",
              "The settlement of a foundation into soft soil",
            ],
            correctIndex: 0,
            explanation:
              "It is a whole-building movement, resisted by anchorage rather than by the strength of any single member.",
            sourceLessonSlug: "houses-fail-at-connections",
          },
          {
            prompt: "What does the course say this lesson is about, compared with everything before it?",
            options: [
              "The gaps between members",
              "The materials members are made from",
              "The order in which members are installed",
              "The cost of members and their fasteners",
            ],
            correctIndex: 0,
            explanation:
              "Everything so far has been about members. Connections are where the trouble is.",
            sourceLessonSlug: "houses-fail-at-connections",
          },
          {
            prompt: "Which assembly connection appears in the DOE list but not in the load path of lesson 5?",
            options: [
              "Chimney to roof member",
              "Wall to foundation, which lesson 5 leaves out",
              "Roof sheathing to framing, which lesson 5 leaves out",
              "Wall above to wall below, which lesson 5 leaves out",
            ],
            correctIndex: 0,
            explanation:
              "The other three are all in the walked path. A chimney is a heavy element attached to the roof, and it gets named separately.",
            sourceLessonSlug: "houses-fail-at-connections",
          },
          {
            prompt: "What kind of building does the HUD language quoted in this lesson govern?",
            options: [
              "Manufactured homes",
              "Any building over two storeys in a designated wind zone",
              "Homes built with metal connectors rather than nails",
              "Site-built houses in states without an adopted code",
            ],
            correctIndex: 0,
            explanation:
              "The course states this every time it cites the standard, because the requirement is real and applies to a different kind of home.",
            sourceLessonSlug: "houses-fail-at-connections",
          },
          {
            prompt: "Why does a joist resting on a plate stay there under ordinary conditions?",
            options: [
              "Gravity holds the joint closed",
              "Because friction between wood surfaces resists any movement",
              "Because the plate is wider than the joist it carries",
              "Because the sheathing nailed across it prevents any lift",
            ],
            correctIndex: 0,
            explanation:
              "Which is exactly why uplift is the interesting case: it removes the thing that was holding the joint together.",
            sourceLessonSlug: "houses-fail-at-connections",
          },
          {
            prompt: "What makes a load path continuous?",
            options: [
              "Every handover is strong enough",
              "Every member is made of the same material",
              "The path runs in a straight line from roof to footing",
              "No member is longer than the one below it",
            ],
            correctIndex: 0,
            explanation:
              "A chain of adequate members is not enough on its own. The joints between them have to carry what passes through them.",
            sourceLessonSlug: "houses-fail-at-connections",
          },
          {
            prompt: "Above what moisture content does the Wood Handbook say serious decay occurs?",
            options: [
              "The fiber saturation point",
              "Twenty percent, which is the definition of air-dry wood",
              "Nineteen percent, the maximum for lumber graded as dry",
              "Any level, provided decay fungi are already present",
            ],
            correctIndex: 0,
            explanation:
              "Averaging about 30 percent. Below that threshold, serious decay does not occur.",
            sourceLessonSlug: "decay-is-structural",
          },
          {
            prompt: "Will water vapour in humid air, by itself, wet wood enough for serious decay?",
            options: [
              "No, though it can support some mould",
              "Yes, over a long enough period in any climate",
              "Yes, but only in wood that has never been dried",
              "No, and it cannot support mould either",
            ],
            correctIndex: 0,
            explanation:
              "The handbook is explicit: humid air alone will not wet wood sufficiently for significant decay, but it will permit development of some mould fungi.",
            sourceLessonSlug: "decay-is-structural",
          },
          {
            prompt: "Which three contacts does the handbook say do bring previously dried wood to the fiber saturation point?",
            options: [
              "Rain, condensation and wet ground",
              "Snow, ice and frost forming on the surface",
              "Plumbing leaks, roof leaks and window leaks",
              "Humidity, temperature swings and poor ventilation",
            ],
            correctIndex: 0,
            explanation:
              "Those three are the whole list, and every protective detail in this course is aimed at one of them.",
            sourceLessonSlug: "decay-is-structural",
          },
          {
            prompt: "What moisture content does the handbook give for fully air-dried wood?",
            options: [
              "Not exceeding 20 percent",
              "Not exceeding 8 percent, the recommended interior value",
              "About 30 percent, the average fiber saturation point",
              "Between 40 and 60 percent, depending on the season",
            ],
            correctIndex: 0,
            explanation:
              "Which it calls a reasonable margin of safety against fungal damage.",
            sourceLessonSlug: "decay-is-structural",
          },
          {
            prompt: "What does the handbook say happens to existing decay in wood that is kept air dry?",
            options: [
              "It will not progress",
              "It continues slowly but at a reduced rate",
              "It spreads faster, because the fungus seeks moisture elsewhere",
              "It becomes impossible to detect without laboratory testing",
            ],
            correctIndex: 0,
            explanation:
              "Dryness both prevents decay and stops decay already present from continuing, which is why drying out an assembly matters so much.",
            sourceLessonSlug: "decay-is-structural",
          },
          {
            prompt: "What does the course say the details of sections 4 and 7 really are?",
            options: [
              "The structural strategy",
              "Finish details that improve comfort and appearance",
              "Optional upgrades that go beyond the code minimum",
              "Requirements that apply only in humid climates",
            ],
            correctIndex: 0,
            explanation:
              "Clearance, air spaces, drainage planes, flashings, overhangs, vapour retarders and vents are all aimed at keeping wood under the decay threshold.",
            sourceLessonSlug: "decay-is-structural",
          },
          {
            prompt: "Why does keeping a member dry preserve its structural performance?",
            options: [
              "It keeps the properties the designer assumed",
              "Because dry wood is permanently stronger than wet wood of any species",
              "Because dryness prevents the member from shrinking at all",
              "Because a dry member needs no connections to the rest of the frame",
            ],
            correctIndex: 0,
            explanation:
              "A decayed member is not the member that was designed. Keeping it below the threshold keeps the assumption true.",
            sourceLessonSlug: "decay-is-structural",
          },
          {
            prompt: "How does the Wood Handbook treat insects relative to fungi?",
            options: [
              "In the same chapter on biodeterioration",
              "In a separate volume dealing with pest control",
              "As a subject outside the scope of an engineering handbook",
              "As a problem only for wood already weakened by decay",
            ],
            correctIndex: 0,
            explanation:
              "Biodeterioration covers both, which is why termite shields and preservative treatment sit beside drainage details in this course.",
            sourceLessonSlug: "decay-is-structural",
          },
          {
            prompt: "Which two ordinary parts of a frame exist because something wants to eat the load path?",
            options: [
              "Termite shields and preservative-treated girder ends",
              "Bridging between joists and blocking between studs",
              "Double top plates and corner posts",
              "Drip edges and roofing felt",
            ],
            correctIndex: 0,
            explanation:
              "The manual describes both as ordinary parts of a frame rather than as extras.",
            sourceLessonSlug: "decay-is-structural",
          },
          {
            prompt: "What does this course say an ordinary person can usefully do about decay?",
            options: [
              "Look, and name what they see accurately",
              "Repair the affected members before the damage spreads",
              "Treat the wood with preservative to stop the fungus",
              "Increase the ventilation until the moisture content falls",
            ],
            correctIndex: 0,
            explanation:
              "None of it is yours to diagnose from the outside, and all of it is worth naming accurately to somebody who can.",
            sourceLessonSlug: "decay-is-structural",
          },
          {
            prompt: "Which of these is one of the things the lesson suggests looking for?",
            options: [
              "Wood touching soil",
              "Nail heads showing through the drywall of an interior wall",
              "Doors that stick in one season and not another",
              "Panel gaps between sheets of exterior sheathing",
            ],
            correctIndex: 0,
            explanation:
              "Contact with wet ground is one of the three routes to the fiber saturation point. The other two options are ordinary wood movement.",
            sourceLessonSlug: "decay-is-structural",
          },
          {
            prompt: "Why does a crawl space clearance filled with soil or stored boxes matter?",
            options: [
              "It brings wood toward ground contact and stops drying",
              "It makes the space harder for an inspector to enter",
              "It adds dead load the floor frame was not designed for",
              "It blocks the path of plumbing and duct runs",
            ],
            correctIndex: 0,
            explanation:
              "The clearance exists to keep wood away from the ground and let it dry, which is a structural precaution rather than a tidy one.",
            sourceLessonSlug: "decay-is-structural",
          },
          {
            prompt: "Why is an air space around a girder end packed with insulation a problem?",
            options: [
              "The end can no longer dry",
              "The insulation will be crushed by the girder under load",
              "The girder will expand and crack the surrounding masonry",
              "The insulation blocks the required ventilation to the attic",
            ],
            correctIndex: 0,
            explanation:
              "The manual calls for an air space around the sides and end precisely so the wood can dry. Filling it removes the reason it was left.",
            sourceLessonSlug: "decay-is-structural",
          },
          {
            prompt: "What is mould, in the distinction this lesson draws?",
            options: [
              "Fungi that grow below the decay threshold",
              "The early stage of the same fungus that later causes decay",
              "A staining organism that never affects wood at all",
              "A form of decay that only affects treated wood",
            ],
            correctIndex: 0,
            explanation:
              "Humid air can permit some mould without supporting serious decay, which is why the two are worth telling apart.",
            sourceLessonSlug: "decay-is-structural",
          },
          {
            prompt: "What do decay fungi consume?",
            options: [
              "The structural chemical components of wood",
              "The preservative treatment applied to the surface",
              "The moisture in the wood, drying it as they grow",
              "The fasteners and connectors at a joint",
            ],
            correctIndex: 0,
            explanation:
              "Some live largely on cellulose and others use lignin and cellulose. Either way, what they eat is what the member was relying on.",
            sourceLessonSlug: "decay-is-structural",
          },
          {
            prompt: "What is preservative treatment for?",
            options: [
              "Wood that cannot be kept reliably dry",
              "Wood that will be exposed to sunlight for long periods",
              "Wood used in structural members carrying heavy loads",
              "Wood installed above its recommended moisture content",
            ],
            correctIndex: 0,
            explanation:
              "Where the dryness defence cannot be guaranteed, such as a girder end in a masonry pocket, the wood gets chemical help instead.",
            sourceLessonSlug: "decay-is-structural",
          },
          {
            prompt: "What does the course say is the usual reason a house fails?",
            options: [
              "A member or connection is no longer what it was",
              "The original calculations were done incorrectly",
              "The occupants overloaded the structure",
              "The code in force when it was built was inadequate",
            ],
            correctIndex: 0,
            explanation:
              "And the most common reason for that change is water, which is why decay belongs in a course about how a house stands up.",
            sourceLessonSlug: "decay-is-structural",
          },
          {
            prompt: "Why does the course call the handbook's decay paragraph its most useful one?",
            options: [
              "It gives both the mechanism and the defence",
              "Because it is the shortest paragraph in the handbook",
              "Because it applies to every species without exception",
              "Because it replaces the need to read anything else",
            ],
            correctIndex: 0,
            explanation:
              "It states the threshold, the three routes to it, the limit of humid air alone, and the fact that dryness stops decay already present.",
            sourceLessonSlug: "decay-is-structural",
          },
          {
            prompt: "A gutter discharging against a wall belongs to which of the three routes to the threshold?",
            options: [
              "Rain reaching the wood",
              "Condensation forming inside the assembly",
              "Contact with wet ground beneath the foundation",
              "None, because a gutter is outside the assembly",
            ],
            correctIndex: 0,
            explanation:
              "It is liquid water arriving where it was not meant to, which is the first of the three contacts the handbook names.",
            sourceLessonSlug: "decay-is-structural",
          },
          {
            prompt: "What connects section 8's two lessons to each other?",
            options: [
              "A decayed member changes what a connection can carry",
              "Both are about loads that act sideways rather than downward",
              "Both concern materials rather than assemblies",
              "Both are about work performed after a house is finished",
            ],
            correctIndex: 0,
            explanation:
              "Connections are the weakest link, and water is what quietly turns a sound connection into a weak one.",
            sourceLessonSlug: "decay-is-structural",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 9 — Reading a wall section, and the order of the build
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "the-order-of-the-build",
      title: "24 · The order of the build, and what is hidden at each step",
      section: "Section 9 · Reading a wall section, and the order of the build",
      body: `A house is built in an order, and each step covers up the one before it. Knowing the order tells you when looking is still possible, which is the single most useful thing an ordinary person can do about a building they care about.

**The sequence, in the manual's own words.** "Framing of the structure begins after completion of the foundation" and "in the normal sequence of construction events, the floor and wall activities follow the completed foundation work" (NETPDTC, 1994, p. 1-1). Then: "Wall construction begins after the subfloor has been nailed in place" (p. 1-17), and "the walls of the building are laid out, framed, and raised into place on top of the subfloor" (p. 1-16). Then roof framing, then "apply the underlayment as soon as the roof sheathing has been completed" (p. 3-12), then exterior finish, then interior finish. The chapters of the manual are themselves in that order.

**Now the list of what each step buries.**

- **The pour buries the trench.** The bottom of a footing is cast directly against the earth (NETPDTC, 1993, p. 7-2), so whatever the trench bottom was is now permanent. And anchor bolts in a slab "must be accurately set into the slab at the time of the concrete pour" (NETPDTC, 1994, p. 1-29). Both are decisions made while the concrete is wet.
- **The sill buries the top of the foundation**, along with the sill sealer and any termite shield.
- **The subfloor buries the joists, the bridging and the girder connections** from above. From below they stay visible until a ceiling goes in, which is why a basement is the best window into a house.
- **The drywall buries the whole wall cavity**: the bracing, the fire stops, the header over every opening, and everything the electrician and the plumber did.
- **The cladding buries the sheathing, the drainage plane and every flashing.** This one matters most, because those are the layers doing the water job, and once siding is on, the only evidence of how they were lapped is the damage they fail to prevent.
- **The roof covering buries the deck and the underlayment.**

**One detail shows how long the frame stays temporary.** After walls are plumbed and aligned they are held by temporary braces, and those braces "are not removed until the framing and sheathing for the entire building have been completed" (NETPDTC, 1994, p. 1-29). The building is not self-supporting against sideways force until its sheathing is on, which is lesson 15's point stated as a schedule.

**What to do with this.** If you are having work done, the useful moments are before each covering step. Not to inspect in any official sense, and not to supervise a trade you are not part of. To look, to photograph, and to ask somebody who knows what a thing is, while the thing is still visible. A photograph of an open wall is worth a great deal ten years later.

:::reveal Which covering step hides the layers that do the water job, and why does that matter? ||| The cladding, which covers the sheathing, the drainage plane and every flashing. After that the only evidence of how they were lapped is the damage they fail to prevent.

:::reveal When are a framed wall's temporary braces removed? ||| Not until the framing and sheathing for the entire building are complete, because the building is not self-supporting against sideways force until then.

## Vocabulary
- **Rough-in**: the stage at which framing, wiring and piping are in place but nothing is covered.
- **Close in**: the point at which an assembly is covered and its interior becomes inaccessible.
- **Temporary bracing**: bracing that holds framing plumb and aligned until the permanent sheathing is complete.

## Sources
Naval Education and Training Professional Development and Technology Center. (1993). *Builder 3 & 2, Volume 1* (NAVEDTRA 14043). U.S. Navy. https://www.militarynewbie.com/wp-content/uploads/2013/11/US-Navy-course-Builder-3-2-Volume-1-NAVEDTRA-14043.pdf
Naval Education and Training Professional Development and Technology Center. (1994). *Builder 3 & 2, Volume 2* (NAVEDTRA 14044). U.S. Navy. https://www.constructionknowledge.net/public_domain_documents/Builder_3_and_2_vol_2_NAVEDTRA_14044_1994.pdf`,
    },
    {
      slug: "reading-a-wall-section",
      title: "25 · How to read a wall section drawing",
      section: "Section 9 · Reading a wall section, and the order of the build",
      body: `A wall section is a drawing of a vertical cut through the building, from the ground to the roof, showing everything the cut passes through. It is the single most information-dense sheet in a residential drawing set, and once you can read one, most of this course becomes visible on paper.

**Why it exists.** The manual explains the division of labour between drawings: "In horizontal plate layout, the location of the wall is determined from the dimensions found in the floor plan of the blueprints. For vertical layout, the dimension can be found in the sectional views of the building's blueprints" (NETPDTC, 1994, p. 1-21). A floor plan answers *where*; a section answers *how high* and *what is on top of what*. It adds that "some blueprints contain section views giving the exact rough heights of walls" (p. 1-24).

**How to read one, in four passes.**

**Pass one: find the ground.** Locate the ground line and the footing below it. Everything above is superstructure, everything below is substructure (NETPDTC, 1993, p. 7-2). Follow the foundation up to the sill plate, and note how it is anchored.

**Pass two: walk the load path.** From the footing, name every structural member going up: foundation wall, sill plate, rim joist and floor joists, sole plate, studs, top plate, rafters or truss chords. If you can trace an unbroken path from the roof to the soil, you have read the structure.

**Pass three: name the control layers.** Now go back and ask of every non-structural layer: which of the four jobs is this doing? Water, air, vapour, or heat. Where is the drainage plane, and which side of the sheathing is it on? Where is the insulation? Which side is the vapour retarder on, and is that the warm side? Is there a vented space, and does it have openings at two heights?

**Pass four: list what the drawing does not say.** This is the pass people skip and the one that pays. A section is not the whole answer. Sizes may be in a schedule, materials in the specifications, and minimums in the adopted code. If the drawing does not show a flashing at a particular junction, that may mean it is detailed on another sheet, or it may mean nobody has thought about it. Either way, it is a question, and a well-formed question is the end product of this course.

**Where the question goes.** The drawings and the specifications first. Then the designer or builder, if there is one. Then the building department, which holds the code that actually governs the building, and which is the subject of the companion course, *Reading the Plan and the Code*.

:::reveal What does a floor plan tell you that a wall section does not, and what does the section add? ||| A floor plan gives horizontal location. A section gives vertical dimensions and the order of the layers, which is what is on top of what.

:::reveal What is the fourth pass over a wall section, and why does it matter most? ||| Listing what the drawing does not say. Sizes may live in a schedule, materials in the specifications, and minimums in the adopted code, and a gap may be a detail elsewhere or a question nobody has asked.

## Vocabulary
- **Section**: a drawing of a vertical cut through a building, showing what the cut passes through.
- **Floor plan**: a drawing of a horizontal cut, showing where things are in plan.
- **Detail**: an enlarged drawing of one junction, usually where several layers meet.
- **Sheet**: one page of a drawing set, referenced by number from the other sheets.

## Sources
Naval Education and Training Professional Development and Technology Center. (1993). *Builder 3 & 2, Volume 1* (NAVEDTRA 14043). U.S. Navy. https://www.militarynewbie.com/wp-content/uploads/2013/11/US-Navy-course-Builder-3-2-Volume-1-NAVEDTRA-14043.pdf
Naval Education and Training Professional Development and Technology Center. (1994). *Builder 3 & 2, Volume 2* (NAVEDTRA 14044). U.S. Navy. https://www.constructionknowledge.net/public_domain_documents/Builder_3_and_2_vol_2_NAVEDTRA_14044_1994.pdf`,
    },
    {
      slug: "label-one-wall-section",
      title: "26 · Exercise: name the stack, then write the question",
      section: "Section 9 · Reading a wall section, and the order of the build",
      body: `This exercise has two halves. The first is graded; the second is the point.

**Half one.** Work up an ordinary light-frame exterior wall from the soil to the ridge and name each part as you meet it. Answer in the words this course has used, and remember that several parts have more than one correct name.

**Half two, which nothing here can mark.** Find a wall section for a real building. A set of drawings for your own house if you have one, a permit set from a project you can see, or the section view in any drawing set you can lawfully look at. Read it in the four passes from lesson 25. Then write down, in one sentence, **the single question you would ask a building department about that wall**, and write down who else you would ask first.

A good question names a specific junction and asks something answerable, for example: which edition of the residential code governs this house, and does it require a drainage gap behind this cladding? A poor question asks whether the wall is fine. Nobody can answer that from a drawing, and asking it is how people end up with a confident answer to the wrong question.

Keep your question. When the companion course, *Reading the Plan and the Code*, teaches you to find your own jurisdiction's adopted code, that question is what you will use it on.

## Sources
Naval Education and Training Professional Development and Technology Center. (1994). *Builder 3 & 2, Volume 2* (NAVEDTRA 14044). U.S. Navy. https://www.constructionknowledge.net/public_domain_documents/Builder_3_and_2_vol_2_NAVEDTRA_14044_1994.pdf
U.S. Department of Energy. (n.d.-b). *Drainage plane behind exterior wall cladding*. Building America Solution Center, Pacific Northwest National Laboratory. https://basc.pnnl.gov/resource-guides/drainage-plane-behind-exterior-wall-cladding`,
      exercise: {
        instructions:
          "Name each part of an ordinary light-frame wall as you work from the soil to the ridge. Answers are single words or short phrases, and several parts have more than one accepted name.",
        items: [
          {
            prompt: "The widened concrete element at the base of the foundation that spreads the load onto the soil.",
            answer: "footing",
            accept: ["the footing", "footings"],
            explanation: "It spreads the load over a larger ground area so the structure does not sink into it.",
          },
          {
            prompt: "The part of the structure below ground level, taken as a whole.",
            answer: "substructure",
            accept: ["the substructure"],
            explanation: "The portion above ground is the superstructure. Foundations are the part of the substructure that distributes load to the ground.",
          },
          {
            prompt: "The lowest wooden member of the frame, resting directly on the foundation.",
            answer: "sill plate",
            accept: ["sill", "mud sill", "the sill plate", "mudsill"],
            explanation: "It provides a nailing base for the joists or studs resting over the foundation, and anchor bolts tie it down.",
          },
          {
            prompt: "The joist that closes the ends of the floor joists along an outside wall.",
            answer: "rim joist",
            accept: ["rim", "header joist", "band joist", "the rim joist"],
            explanation: "It stops the common joists rolling or tipping, helps support the wall above, and fills the spaces between the joists.",
          },
          {
            prompt: "The beam that catches floor joists partway across a building so they do not span wall to wall.",
            answer: "girder",
            accept: ["beam", "the girder"],
            explanation: "Posts carry the girder down to the footing. A bearing girder also supports a wall framed directly above it.",
          },
          {
            prompt: "The sheet material nailed over the floor joists, which the walls are then raised onto.",
            answer: "subfloor",
            accept: ["the subfloor", "rough flooring"],
            explanation: "It strengthens the whole floor unit and serves as a base for the finish floor.",
          },
          {
            prompt: "The horizontal member at the bottom of a framed wall.",
            answer: "sole plate",
            accept: ["soleplate", "bottom plate", "the sole plate"],
            explanation: "Not the sill plate, which sits lower and on masonry.",
          },
          {
            prompt: "The vertical framing members running between the plates of a wall.",
            answer: "studs",
            accept: ["stud", "the studs"],
            explanation: "Usually spaced so that standard panel edges land on their centres, with the governing spacing coming from the drawings and the adopted code.",
          },
          {
            prompt: "The member spanning the top of a window or door opening to carry the load across it.",
            answer: "header",
            accept: ["the header"],
            explanation: "Its size is determined by the width of the opening and the weight bearing down from above, and it is shown in the drawings.",
          },
          {
            prompt: "The short stud that fits between the sole plate and the underside of a header.",
            answer: "jack stud",
            accept: ["trimmer", "trimmer stud", "jack", "the jack stud"],
            explanation: "The king stud beside it runs full height from plate to plate.",
          },
          {
            prompt: "The doubled horizontal member capping a framed wall.",
            answer: "top plate",
            accept: ["double top plate", "the top plate"],
            explanation: "It carries the weight of the joists and rafters above, strengthens the wall, and ties the walls together at the corners.",
          },
          {
            prompt: "The structural sheet fixed across the outside of the studs, which resists the wall folding sideways.",
            answer: "sheathing",
            accept: ["wall sheathing", "structural sheathing", "the sheathing"],
            explanation: "The manual notes that when panel sheathing is used, other methods of diagonal bracing may be omitted.",
          },
          {
            prompt: "The sideways folding of a rectangular frame into a parallelogram.",
            answer: "racking",
            accept: ["rack"],
            explanation: "It happens without any member breaking, which is why bracing and sheathing exist.",
          },
          {
            prompt: "The water-resistant surface behind the cladding that catches leaked water and drains it back out.",
            answer: "drainage plane",
            accept: ["water resistive barrier", "water-resistive barrier", "weather resistant barrier", "wrb", "the drainage plane"],
            explanation: "Its layers overlap rather than underlap, and they lap over every exterior wall flashing.",
          },
          {
            prompt: "The outermost finish layer of a wall, such as siding, stucco or brick veneer.",
            answer: "cladding",
            accept: ["siding", "the cladding"],
            explanation: "It is placed over the sheathing to finish the wall, and it is not assumed to be waterproof.",
          },
          {
            prompt: "The control layer that belongs on the warm side of a wall assembly.",
            answer: "vapour barrier",
            accept: ["vapor barrier", "vapour retarder", "vapor retarder", "the vapor barrier"],
            explanation: "On the cold side it becomes a surface for water to condense on inside the wall.",
          },
          {
            prompt: "The sloping roof member that runs from the wall plate up to the ridge.",
            answer: "rafter",
            accept: ["common rafter", "the rafter", "rafters"],
            explanation: "The manual says rafters do for the roof what joists do for the floor and studs do for the wall.",
          },
          {
            prompt: "The member of a truss that acts as a ceiling joist and is in tension, holding the peak from dropping.",
            answer: "bottom chord",
            accept: ["the bottom chord", "lower chord"],
            explanation: "Which is why cutting it looks harmless and is not.",
          },
          {
            prompt: "The horizontal member that ties opposing rafters together partway up a gable roof.",
            answer: "collar tie",
            accept: ["collar", "the collar tie"],
            explanation: "In a finished attic it may also function as a ceiling joist.",
          },
          {
            prompt: "The name for the whole route a load takes from the roof down to the soil.",
            answer: "load path",
            accept: ["the load path", "continuous load path"],
            explanation: "Continuous is the operative word, because the connections between assemblies tend to be its weakest link.",
          },
        ],
      },
    },
    {
      slug: "section-9-quiz",
      title: "Section 9 quiz · Sequence, drawings and the question",
      section: "Section 9 · Reading a wall section, and the order of the build",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What does knowing the order of a build tell an ordinary person?",
            options: [
              "When looking is still possible",
              "Which trade is responsible if something later goes wrong",
              "How long each stage of the work should take",
              "Which stages require a permit and which do not",
            ],
            correctIndex: 0,
            explanation:
              "Each step covers the one before it, so the order is really a schedule of last chances to see things.",
            sourceLessonSlug: "the-order-of-the-build",
          },
          {
            prompt: "What does the manual say framing begins after?",
            options: [
              "Completion of the foundation",
              "Delivery of the roof trusses to the site",
              "Approval of the drawings by the building department",
              "Installation of the underground plumbing",
            ],
            correctIndex: 0,
            explanation:
              "In the normal sequence of construction events, floor and wall activities follow the completed foundation work.",
            sourceLessonSlug: "the-order-of-the-build",
          },
          {
            prompt: "What does the manual say wall construction begins after?",
            options: [
              "The subfloor is nailed in place",
              "The floor joists are set but before the subfloor goes down",
              "The roof framing is complete and the building is closed in",
              "The girders and posts are permanently anchored",
            ],
            correctIndex: 0,
            explanation:
              "The walls are laid out, framed and raised into place on top of the subfloor, which is why the platform has to be right first.",
            sourceLessonSlug: "the-order-of-the-build",
          },
          {
            prompt: "When does the manual say roof underlayment should be applied?",
            options: [
              "As soon as the sheathing is complete",
              "After the shingles have been laid, as a secondary layer",
              "Only once the exterior walls have been clad",
              "At the same time as the interior finish work begins",
            ],
            correctIndex: 0,
            explanation:
              "One of its jobs is keeping the roof sheathing dry until the shingles can be applied, so waiting defeats the purpose.",
            sourceLessonSlug: "the-order-of-the-build",
          },
          {
            prompt: "What does the pour bury?",
            options: [
              "The trench bottom",
              "The anchor bolts, which are drilled in afterwards",
              "The sill sealer, which is placed before the concrete",
              "The footing forms, which are left in place permanently",
            ],
            correctIndex: 0,
            explanation:
              "The bottom of a footing is cast directly against the earth, so whatever the trench bottom was becomes permanent.",
            sourceLessonSlug: "the-order-of-the-build",
          },
          {
            prompt: "Which decision about a slab is made while the concrete is still wet?",
            options: [
              "Where the anchor bolts go",
              "Where the interior partitions will be framed",
              "How thick the finished floor covering will be",
              "Which direction the ceiling joists above will run",
            ],
            correctIndex: 0,
            explanation:
              "Bolts must be accurately set into the slab at the time of the pour, which fixes where the walls can later be fastened down.",
            sourceLessonSlug: "the-order-of-the-build",
          },
          {
            prompt: "Why does the course call a basement the best window into a house?",
            options: [
              "The floor framing stays visible from below",
              "Because foundations crack there first and show problems early",
              "Because every service in the house passes through it",
              "Because the drawings are usually stored there",
            ],
            correctIndex: 0,
            explanation:
              "The subfloor buries the joists, bridging and girder connections from above, but from below they remain visible until a ceiling goes in.",
            sourceLessonSlug: "the-order-of-the-build",
          },
          {
            prompt: "What does the drywall bury?",
            options: [
              "The whole wall cavity",
              "Only the insulation, since the framing stays partly visible",
              "The sheathing and the drainage plane on the outside face",
              "The headers, but not the bracing or the fire stops",
            ],
            correctIndex: 0,
            explanation:
              "Bracing, fire stops, every header, and all the electrical and plumbing work go behind it at once.",
            sourceLessonSlug: "the-order-of-the-build",
          },
          {
            prompt: "Which covering step does the course single out as mattering most?",
            options: [
              "The cladding",
              "The roof covering, because a roof leak does the most damage",
              "The subfloor, because it hides the whole floor frame",
              "The interior finish, because it is the last one",
            ],
            correctIndex: 0,
            explanation:
              "It buries the sheathing, the drainage plane and every flashing, which are the layers doing the water job.",
            sourceLessonSlug: "the-order-of-the-build",
          },
          {
            prompt: "Once the siding is on, what is the only evidence of how the water layers were lapped?",
            options: [
              "The damage they fail to prevent",
              "The permit record filed with the building department",
              "The manufacturer's warranty on the cladding product",
              "The thickness of the wall measured at a window opening",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the moment before cladding is the moment to look, photograph and ask.",
            sourceLessonSlug: "the-order-of-the-build",
          },
          {
            prompt: "When are temporary braces removed from a framed wall?",
            options: [
              "After the whole building's framing and sheathing are complete",
              "As soon as the wall has been plumbed and aligned",
              "Once the roof structure has been set on the walls",
              "When the interior partitions are framed against it",
            ],
            correctIndex: 0,
            explanation:
              "The building is not self-supporting against sideways force until its sheathing is on, which is lesson 15's point as a schedule.",
            sourceLessonSlug: "the-order-of-the-build",
          },
          {
            prompt: "What does the course say an ordinary person should do at the useful moments in a build?",
            options: [
              "Look, photograph and ask",
              "Inspect the work and record any defects formally",
              "Supervise the trade performing that stage",
              "Withhold payment until the stage has been verified",
            ],
            correctIndex: 0,
            explanation:
              "Not inspecting in any official sense and not supervising a trade. A photograph of an open wall is worth a great deal ten years later.",
            sourceLessonSlug: "the-order-of-the-build",
          },
          {
            prompt: "What is rough-in?",
            options: [
              "Framing, wiring and piping in place, nothing covered",
              "The first rough shaping of a foundation trench",
              "A wall framed to approximate size and trimmed later",
              "The stage at which the building is weather tight",
            ],
            correctIndex: 0,
            explanation:
              "It is the last moment at which the inside of a wall is visible, which is what makes it worth knowing the word.",
            sourceLessonSlug: "the-order-of-the-build",
          },
          {
            prompt: "What does close in mean?",
            options: [
              "An assembly is covered and its inside is inaccessible",
              "The building is fully enclosed against weather",
              "The final inspection has been requested",
              "The framing has been drawn tight and squared",
            ],
            correctIndex: 0,
            explanation:
              "Every close-in step ends a period during which something could have been seen.",
            sourceLessonSlug: "the-order-of-the-build",
          },
          {
            prompt: "What is a wall section?",
            options: [
              "A drawing of a vertical cut through the building",
              "One portion of a wall between two corners",
              "The part of the specifications dealing with walls",
              "A sample panel built to show the finished construction",
            ],
            correctIndex: 0,
            explanation:
              "It shows everything the cut passes through, which makes it the most information-dense sheet in a residential set.",
            sourceLessonSlug: "reading-a-wall-section",
          },
          {
            prompt: "Which drawing does the manual say gives the location of a wall?",
            options: [
              "The floor plan",
              "The wall section, which shows both position and height",
              "The foundation plan, which locates everything above it",
              "The elevation, which shows each wall face",
            ],
            correctIndex: 0,
            explanation:
              "Horizontal plate layout comes from the floor plan. Vertical layout comes from the sectional views.",
            sourceLessonSlug: "reading-a-wall-section",
          },
          {
            prompt: "What question does a section answer that a plan does not?",
            options: [
              "How high, and what is on top of what",
              "Which materials the specifications require",
              "Where each wall sits relative to the property line",
              "How many of each component the job needs",
            ],
            correctIndex: 0,
            explanation:
              "A plan answers where. A section answers vertical dimension and the order of the layers.",
            sourceLessonSlug: "reading-a-wall-section",
          },
          {
            prompt: "What is the first pass in the course's method for reading a wall section?",
            options: [
              "Find the ground line and the footing",
              "Identify the insulation and its thickness",
              "Count the number of layers shown in the wall",
              "Locate the notes and read them before the drawing",
            ],
            correctIndex: 0,
            explanation:
              "Everything above the ground line is superstructure and everything below is substructure, so the ground line orients the whole reading.",
            sourceLessonSlug: "reading-a-wall-section",
          },
          {
            prompt: "What is the second pass?",
            options: [
              "Walk the load path and name every member",
              "Check the drawing against the adopted code",
              "Measure each dimension and confirm it adds up",
              "Identify which trade installs each component",
            ],
            correctIndex: 0,
            explanation:
              "If you can trace an unbroken path from the roof to the soil, you have read the structure of the wall.",
            sourceLessonSlug: "reading-a-wall-section",
          },
          {
            prompt: "What question does the third pass ask of every non-structural layer?",
            options: [
              "Which of the four jobs is it doing?",
              "How much does this layer cost per square foot?",
              "Which manufacturer supplies this product?",
              "How long will this layer last before replacement?",
            ],
            correctIndex: 0,
            explanation:
              "Water, air, vapour or heat. Naming the job is what tells you whether the layer is in the right place.",
            sourceLessonSlug: "reading-a-wall-section",
          },
          {
            prompt: "What is the fourth pass, which the course says people skip?",
            options: [
              "Listing what the drawing does not say",
              "Comparing the section with the elevations",
              "Reading the drawing upside down to check symmetry",
              "Confirming that every dimension is legible",
            ],
            correctIndex: 0,
            explanation:
              "Sizes may live in a schedule, materials in the specifications, and minimums in the adopted code. What is missing is a question.",
            sourceLessonSlug: "reading-a-wall-section",
          },
          {
            prompt: "If a section shows no flashing at a junction, what are the two possible meanings?",
            options: [
              "It is detailed elsewhere, or nobody thought about it",
              "It is not required, or it is optional in that climate",
              "The drawing is out of date, or the scale is too small",
              "The contractor will decide, or the supplier will",
            ],
            correctIndex: 0,
            explanation:
              "Either way it is a question, and a well-formed question is the end product of this course.",
            sourceLessonSlug: "reading-a-wall-section",
          },
          {
            prompt: "In what order does the course say a question should be taken?",
            options: [
              "Drawings, then designer or builder, then building department",
              "Building department first, then the designer, then the drawings",
              "Supplier first, then the contractor, then the code",
              "Whoever answers fastest, since the answer is the same",
            ],
            correctIndex: 0,
            explanation:
              "The drawings and specifications hold the answers for that building. The department holds the code that governs it.",
            sourceLessonSlug: "reading-a-wall-section",
          },
          {
            prompt: "What is a detail, in a drawing set?",
            options: [
              "An enlarged drawing of one junction",
              "A note describing a material requirement",
              "A dimension given to a finer tolerance than the rest",
              "The part of a section showing finishes only",
            ],
            correctIndex: 0,
            explanation:
              "Usually drawn where several layers meet, which is exactly where the questions from pass four tend to land.",
            sourceLessonSlug: "reading-a-wall-section",
          },
          {
            prompt: "What makes a wall section worth learning to read?",
            options: [
              "Most of this course becomes visible on paper",
              "It is the only drawing a building department will accept",
              "It replaces the need for the specifications",
              "It shows the exact cost of the wall assembly",
            ],
            correctIndex: 0,
            explanation:
              "Load path, control layers and the order of the build are all on one sheet, which is why the exercise ends here.",
            sourceLessonSlug: "reading-a-wall-section",
          },
          {
            prompt: "What are the two halves of the section 9 exercise?",
            options: [
              "Naming the stack, and writing a question",
              "Drawing a section, and dimensioning it",
              "Measuring a wall, and calculating its materials",
              "Identifying defects, and proposing repairs",
            ],
            correctIndex: 0,
            explanation:
              "The first half is graded. The second half, writing a specific answerable question, is the point.",
            sourceLessonSlug: "label-one-wall-section",
          },
          {
            prompt: "What does the exercise say makes a good question to a building department?",
            options: [
              "It names a junction and is answerable",
              "It is short enough to ask over the telephone",
              "It asks whether the wall as built is acceptable",
              "It quotes the section number the questioner believes applies",
            ],
            correctIndex: 0,
            explanation:
              "A poor question asks whether the wall is fine, which nobody can answer from a drawing.",
            sourceLessonSlug: "label-one-wall-section",
          },
          {
            prompt: "What does the exercise say goes wrong when the question is badly formed?",
            options: [
              "You get a confident answer to the wrong question",
              "The department refuses to answer at all",
              "The answer arrives too late to be useful",
              "The answer costs more than the work itself",
            ],
            correctIndex: 0,
            explanation:
              "Which is worse than no answer, because it ends the inquiry while leaving the real issue untouched.",
            sourceLessonSlug: "label-one-wall-section",
          },
          {
            prompt: "What does the exercise ask a learner to do with their question afterwards?",
            options: [
              "Keep it for the companion course",
              "Send it to the building department immediately",
              "Post it publicly so others can answer it",
              "Answer it themselves using the sources in this course",
            ],
            correctIndex: 0,
            explanation:
              "Reading the Plan and the Code teaches how to find the adopted code for a jurisdiction, and that question is what to use it on.",
            sourceLessonSlug: "label-one-wall-section",
          },
          {
            prompt: "In the exercise, which part spreads the load onto the soil?",
            options: [
              "The footing",
              "The sill plate, which distributes it along the foundation wall",
              "The subfloor, which spreads it between the joists",
              "The drainage plane, which keeps the soil dry",
            ],
            correctIndex: 0,
            explanation:
              "The first item in the stack, and the bottom of the load path before the soil itself.",
            sourceLessonSlug: "label-one-wall-section",
          },
          {
            prompt: "Which of these is an accepted alternative name for a rim joist in the exercise?",
            options: [
              "Band joist",
              "Tail joist, which runs to a header at an opening",
              "Trimmer joist, which is doubled at the side of an opening",
              "Stub joist, which is shortened where framing changes direction",
            ],
            correctIndex: 0,
            explanation:
              "Rim, header and band joist all name the member closing the ends of the floor joists.",
            sourceLessonSlug: "label-one-wall-section",
          },
          {
            prompt: "Which truss member does the exercise ask you to name as being in tension?",
            options: [
              "The bottom chord",
              "The top chord, which is stretched along the slope",
              "A web member near the centre of the truss",
              "The gusset plate at the peak",
            ],
            correctIndex: 0,
            explanation:
              "It acts as a ceiling joist and holds the peak from dropping, which is why cutting it looks harmless and is not.",
            sourceLessonSlug: "label-one-wall-section",
          },
          {
            prompt: "Why does the exercise accept several answers for some items?",
            options: [
              "Several parts genuinely have more than one name",
              "Because learners are not expected to recall exact terms",
              "Because names differ between drawings and specifications",
              "Because the grading cannot distinguish similar spellings",
            ],
            correctIndex: 0,
            explanation:
              "Jack and trimmer, sole plate and bottom plate, rim and band joist. The drawing's word wins on any real job.",
            sourceLessonSlug: "label-one-wall-section",
          },
          {
            prompt: "What kind of drawing does the exercise ask a learner to find for half two?",
            options: [
              "A wall section for a real building",
              "A floor plan of any house, drawn to any scale",
              "A photograph of a wall under construction",
              "An elevation showing the finished exterior",
            ],
            correctIndex: 0,
            explanation:
              "Their own house, a permit set from a project they can see, or any drawing set they can lawfully look at.",
            sourceLessonSlug: "label-one-wall-section",
          },
          {
            prompt: "What is the superstructure, in the exercise's terms?",
            options: [
              "The part above ground level",
              "The part of the frame above the first floor",
              "The roof structure and everything it carries",
              "The structural layers, as opposed to the control layers",
            ],
            correctIndex: 0,
            explanation:
              "And the substructure is the portion below ground level, including the foundations and footings.",
            sourceLessonSlug: "label-one-wall-section",
          },
          {
            prompt: "Which layer does the exercise describe as catching leaked water and draining it back out?",
            options: [
              "The drainage plane",
              "The sheathing, which is treated to shed water",
              "The cladding, which is the primary water barrier",
              "The vapour barrier, which stops water on the warm side",
            ],
            correctIndex: 0,
            explanation:
              "Its layers overlap rather than underlap, and they lap over every exterior wall flashing.",
            sourceLessonSlug: "label-one-wall-section",
          },
          {
            prompt: "Which pass over a section would catch a vapour retarder drawn on the wrong side?",
            options: [
              "The third, naming the control layers",
              "The first, finding the ground line",
              "The second, walking the load path",
              "The fourth, listing what is missing",
            ],
            correctIndex: 0,
            explanation:
              "That pass asks which job each layer is doing and whether it is positioned to do it, including whether the retarder is on the warm side.",
            sourceLessonSlug: "reading-a-wall-section",
          },
          {
            prompt: "Which of these is buried by the sill plate?",
            options: [
              "The top of the foundation and the sill sealer",
              "The anchor bolts, which are installed afterwards",
              "The footing, which is poured at the same stage",
              "The rim joist, which is fixed before the sill",
            ],
            correctIndex: 0,
            explanation:
              "Along with any termite shield. The wood-to-concrete joint is assembled once and then hidden.",
            sourceLessonSlug: "the-order-of-the-build",
          },
          {
            prompt: "What does the roof covering bury?",
            options: [
              "The deck and the underlayment",
              "The rafters, which remain visible from the attic",
              "The flashing, which is installed over the covering",
              "The ceiling insulation below it",
            ],
            correctIndex: 0,
            explanation:
              "Which is why the manual insists underlayment go on as soon as the sheathing is complete and warns against the wrong material there.",
            sourceLessonSlug: "the-order-of-the-build",
          },
          {
            prompt: "What is a sheet, in a drawing set?",
            options: [
              "One page, referenced by number from the others",
              "A single structural panel shown on a drawing",
              "The schedule listing every door and window",
              "The cover page carrying the permit stamp",
            ],
            correctIndex: 0,
            explanation:
              "Details and sections cross-reference each other by sheet number, which is how a missing detail is usually found.",
            sourceLessonSlug: "reading-a-wall-section",
          },
          {
            prompt: "Which chapter order does the course point out is itself a sequence?",
            options: [
              "The Navy manual's own chapters",
              "The order of the sections in this course",
              "The order of the sheets in a drawing set",
              "The order of the inspections in a permit",
            ],
            correctIndex: 0,
            explanation:
              "Floor and wall framing, roof framing, roof construction and trim, exterior finish, then interior finish.",
            sourceLessonSlug: "the-order-of-the-build",
          },
          {
            prompt: "What does the course say a photograph of an open wall is worth?",
            options: [
              "A great deal ten years later",
              "Nothing, unless an inspector took it",
              "The same as a written inspection report",
              "Only what the person who took it can remember about it",
            ],
            correctIndex: 0,
            explanation:
              "It is the one durable record an ordinary person can make of something that is about to be invisible.",
            sourceLessonSlug: "the-order-of-the-build",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // FINAL — placed last, pooling 44 and serving 10
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "how-a-house-stands-up-final",
      title: "Final assessment · How a House Stands Up",
      section: "Final assessment",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 10,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Which statement best captures what this course offers?",
            options: [
              "Knowledge about houses, not the skill to build one",
              "Enough supervised practice to frame a small structure safely",
              "A qualification in residential construction recognised by employers",
              "A substitute for a trade program, delivered as reading",
            ],
            correctIndex: 0,
            explanation:
              "Lesson 1 says it at the front rather than as a closing disclaimer, because the limit changes what the course is for.",
            sourceLessonSlug: "knowledge-not-skill",
          },
          {
            prompt: "Where does every sizing question in this course end?",
            options: [
              "The drawings and the building department",
              "The Wood Handbook, which tabulates values by species",
              "The supplier's grade stamp on the lumber",
              "The framing crew's judgment on site",
            ],
            correctIndex: 0,
            explanation:
              "The drawings hold the numbers for one house, and the department holds the code that governs it.",
            sourceLessonSlug: "knowledge-not-skill",
          },
          {
            prompt: "Who owns the minimum requirements that apply in a given place?",
            options: [
              "The adopted code",
              "The drawings for the building in question",
              "The manufacturer of the products used",
              "The contractor performing the work",
            ],
            correctIndex: 0,
            explanation:
              "Not the code in general: the specific edition a state or city put into law, with any local amendments.",
            sourceLessonSlug: "where-the-numbers-come-from",
          },
          {
            prompt: "What must this course say every time it cites 24 CFR part 3280?",
            options: [
              "That it governs manufactured homes",
              "That the text may have been amended since it was read",
              "That it applies only in states without their own code",
              "That it was written by the Department of Energy",
            ],
            correctIndex: 0,
            explanation:
              "It is a real, free, public-domain building standard for a different kind of home, and confusing the two produces inspection failures.",
            sourceLessonSlug: "where-the-numbers-come-from",
          },
          {
            prompt: "Which three names all describe the same board?",
            options: [
              "Rim, header and band joist",
              "Sill, sole and top plate",
              "King, jack and cripple stud",
              "Chord, web and gusset",
            ],
            correctIndex: 0,
            explanation:
              "The member closing the ends of the floor joists. When names disagree, the drawing's word wins.",
            sourceLessonSlug: "the-parts-list",
          },
          {
            prompt: "What is the lowest wooden member of a house frame?",
            options: [
              "The sill plate",
              "The sole plate of the ground floor wall",
              "The rim joist at the perimeter",
              "The subfloor, which is laid first",
            ],
            correctIndex: 0,
            explanation:
              "Also called the mud sill, it rests on the foundation and is anchored to it.",
            sourceLessonSlug: "the-parts-list",
          },
          {
            prompt: "What distinguishes dead load from live load?",
            options: [
              "Dead load is the building itself",
              "Dead load acts downward and live load acts sideways",
              "Dead load is calculated and live load is measured",
              "Dead load applies only after construction stops",
            ],
            correctIndex: 0,
            explanation:
              "Dead load stops changing once the building is finished. Live load is movable weight at a particular instant.",
            sourceLessonSlug: "what-a-load-is",
          },
          {
            prompt: "Why may floor live load not be counted as resisting wind overturning?",
            options: [
              "The furniture may not be there",
              "Because live load acts in the same direction as the wind",
              "Because overturning is resisted only by the foundation",
              "Because live load is already counted in the roof calculation",
            ],
            correctIndex: 0,
            explanation:
              "The house must be held down by its own structure and connections, not by its contents.",
            sourceLessonSlug: "what-a-load-is",
          },
          {
            prompt: "What is the repeating rhythm of a load path?",
            options: [
              "Horizontal member, then vertical member",
              "Heavy member, then light member",
              "Structure, then control layer, then finish",
              "Wood, then steel, then concrete",
            ],
            correctIndex: 0,
            explanation:
              "Something spans, then something stands, over and over, until footings meet the earth.",
            sourceLessonSlug: "roof-to-soil",
          },
          {
            prompt: "Where does a roof truss deliver the load it carries?",
            options: [
              "To the two outside walls",
              "To the ridge, and then along the building",
              "To the interior partitions it crosses",
              "To the ceiling frame below it",
            ],
            correctIndex: 0,
            explanation:
              "It is an engineered structural frame resting on two outside walls, which is why a trussed house can open up its interior.",
            sourceLessonSlug: "roof-to-soil",
          },
          {
            prompt: "What single clue suggests a wall may be load bearing?",
            options: [
              "Joists above run into it end on",
              "It is thicker than the walls around it",
              "It has no openings cut through it",
              "It runs the full length of the house",
            ],
            correctIndex: 0,
            explanation:
              "Bearing partitions support the ends of joists. A wall parallel to the joists carries little from them.",
            sourceLessonSlug: "bearing-and-not-bearing",
          },
          {
            prompt: "What is the course's answer to whether a particular wall can be removed?",
            options: [
              "Have somebody qualified look, and pull a permit",
              "Check the joist direction and proceed if it runs parallel",
              "Remove it gradually and watch for cracking",
              "Replace it with a beam of equal length first",
            ],
            correctIndex: 0,
            explanation:
              "The evidence is hidden inside one specific building, and a wall can be bracing as well as bearing.",
            sourceLessonSlug: "bearing-and-not-bearing",
          },
          {
            prompt: "What does orthotropic mean, applied to wood?",
            options: [
              "Different properties on three axes",
              "Equal strength in every direction once dried",
              "Stronger in tension than in compression",
              "Properties that change with temperature",
            ],
            correctIndex: 0,
            explanation:
              "Longitudinal, radial and tangential, which is effectively three materials inside one stick.",
            sourceLessonSlug: "wood-as-an-engineering-material",
          },
          {
            prompt: "Why is compressive stress perpendicular to grain reported at the proportional limit?",
            options: [
              "There is no clearly defined ultimate stress",
              "Because testing beyond that point is impractical",
              "Because the value is only used for design, not for research",
              "Because the wood fails suddenly beyond that point",
            ],
            correctIndex: 0,
            explanation:
              "Across the grain wood compresses rather than breaking cleanly, which is why bearing points get design attention.",
            sourceLessonSlug: "wood-as-an-engineering-material",
          },
          {
            prompt: "In which direction does wood shrink most?",
            options: [
              "Tangentially",
              "Longitudinally, along the grain",
              "Radially, across the growth rings",
              "Equally in all directions",
            ],
            correctIndex: 0,
            explanation:
              "Tangential shrinkage is about twice radial, and longitudinal shrinkage is between 0.1 and 0.2 percent for most species.",
            sourceLessonSlug: "moisture-and-movement",
          },
          {
            prompt: "What does the Wood Handbook give as the practical average fiber saturation point?",
            options: [
              "About 30 percent",
              "About 19 percent",
              "About 12 percent",
              "About 8 percent",
            ],
            correctIndex: 0,
            explanation:
              "Below that point most wood properties start to change, and above it wood is dimensionally stable.",
            sourceLessonSlug: "moisture-and-movement",
          },
          {
            prompt: "Why is a floor joist set with its crown turned up?",
            options: [
              "The floor's weight flattens it",
              "So water drains off the joist during construction",
              "So the crown marks the nailing face for the subfloor",
              "Because a bowed member is stronger that way round",
            ],
            correctIndex: 0,
            explanation:
              "The manual says the joist will settle from the weight of the floor and straighten out.",
            sourceLessonSlug: "what-moving-wood-does",
          },
          {
            prompt: "What does seasonal, reversible movement in a house usually indicate?",
            options: [
              "Wood responding to moisture",
              "A connection loosening under repeated load",
              "Foundation settlement following the weather",
              "Thermal expansion of the framing",
            ],
            correctIndex: 0,
            explanation:
              "Movement that goes one way and stays is a different question, and the course hands that one on.",
            sourceLessonSlug: "what-moving-wood-does",
          },
          {
            prompt: "Why is a footing wider than the wall it carries?",
            options: [
              "To spread the load over more soil",
              "To give the wall forms something to sit on",
              "To keep water away from the base of the wall",
              "To allow for future additions to the building",
            ],
            correctIndex: 0,
            explanation:
              "A soil of a given bearing capacity carries a heavier load on a wide footing than on a narrow one.",
            sourceLessonSlug: "soil-and-footings",
          },
          {
            prompt: "Why must footings reach below the frost line?",
            options: [
              "Freezing and thawing move the soil",
              "Because concrete cures poorly in cold ground",
              "Because soil below that depth is always rock",
              "Because pipes run above that depth",
            ],
            correctIndex: 0,
            explanation:
              "Soil holding water lifts as it freezes and drops as it thaws. How deep that is where you live is a local fact.",
            sourceLessonSlug: "soil-and-footings",
          },
          {
            prompt: "Where does the manual say the length of an anchor bolt is found?",
            options: [
              "In the specifications",
              "On the drawings, with the spacing and location",
              "On the bolt head, stamped at the factory",
              "In the adopted code for that jurisdiction",
            ],
            correctIndex: 0,
            explanation:
              "The drawings show the spacing and location. Two documents, two owners, which is lesson 2 in miniature.",
            sourceLessonSlug: "foundations-and-what-sits-on-them",
          },
          {
            prompt: "Why does a girder end in a masonry pocket need an air space?",
            options: [
              "So the wood can dry",
              "So the girder can expand and contract freely",
              "So the wall can move independently of the floor",
              "So an inspector can see the bearing surface",
            ],
            correctIndex: 0,
            explanation:
              "Wood sealed tight into masonry cannot dry, and section 8 explains why that matters structurally.",
            sourceLessonSlug: "foundations-and-what-sits-on-them",
          },
          {
            prompt: "What does bridging between floor joists do?",
            options: [
              "Holds them in line and shares load",
              "Increases the distance the joists may span",
              "Seals the floor against air from below",
              "Carries the subfloor between the joists",
            ],
            correctIndex: 0,
            explanation:
              "Two jobs: keeping each joist upright and letting a load on one be shared with its neighbours.",
            sourceLessonSlug: "the-floor-frame",
          },
          {
            prompt: "What must be done when joists are cut to form a floor opening?",
            options: [
              "Frame it to restore the lost strength",
              "Replace the remaining joists with heavier material",
              "Position the opening over a bearing wall",
              "Nothing, because the opening reduces the load",
            ],
            correctIndex: 0,
            explanation:
              "Headers carry the cut joists, doubled trimmers carry the headers, and tail joists run back to their supports.",
            sourceLessonSlug: "the-floor-frame",
          },
          {
            prompt: "Why is stud spacing a module?",
            options: [
              "So panel edges land on stud centres",
              "So each wall contains a whole number of studs",
              "So the studs share the load equally",
              "So the spacing matches the joists below",
            ],
            correctIndex: 0,
            explanation:
              "A house is dimensioned around the sheet goods that will cover it, and the drawings and code still govern the spacing used.",
            sourceLessonSlug: "studs-and-plates",
          },
          {
            prompt: "What three things does the manual credit the wall plates with?",
            options: [
              "Carrying load, strengthening the wall, tying it together",
              "Levelling, squaring and plumbing the wall",
              "Holding insulation, blocking fire and carrying wiring",
              "Locating studs, marking openings and fixing sheathing",
            ],
            correctIndex: 0,
            explanation:
              "The top plate carries the joists and rafters above, and both plates tie the wall together because every stud is nailed into them.",
            sourceLessonSlug: "studs-and-plates",
          },
          {
            prompt: "What determines header size, according to the manual?",
            options: [
              "The opening width and the load above",
              "The height of the wall and its stud spacing",
              "The weight of the window unit installed in it",
              "The species and grade of the framing lumber",
            ],
            correctIndex: 0,
            explanation:
              "Both specific to one wall in one house, and the type and size are shown in the blueprints.",
            sourceLessonSlug: "openings-and-headers",
          },
          {
            prompt: "What carries a header's load down to the sole plate?",
            options: [
              "The jack studs",
              "The king studs beside the opening",
              "The cripple studs above the header",
              "The sheathing across the opening",
            ],
            correctIndex: 0,
            explanation:
              "Jacks, also called trimmers, fit between the sole plate and the underside of the header.",
            sourceLessonSlug: "openings-and-headers",
          },
          {
            prompt: "What is racking?",
            options: [
              "A rectangle folding into a parallelogram",
              "A member crushing where a load concentrates",
              "A wall lifting off its plate under uplift",
              "A stud bowing sideways between the plates",
            ],
            correctIndex: 0,
            explanation:
              "It happens without a member breaking, which is why sheathing and bracing exist and why the studs alone cannot help.",
            sourceLessonSlug: "sheathing-and-racking",
          },
          {
            prompt: "What does the manual say about other bracing when panel sheathing is used?",
            options: [
              "It may be omitted",
              "It must be doubled to match the panel strength",
              "It must be installed before the panels go on",
              "It is required only at the building corners",
            ],
            correctIndex: 0,
            explanation:
              "Panels add considerable strength and often eliminate the need for diagonal bracing, which is why sheathing is structure.",
            sourceLessonSlug: "sheathing-and-racking",
          },
          {
            prompt: "Besides holding up a ceiling, what does a ceiling joist do in a rafter roof?",
            options: [
              "Ties the outside walls together",
              "Carries the weight of the roof covering",
              "Braces the walls against racking",
              "Supports the collar ties above it",
            ],
            correctIndex: 0,
            explanation:
              "The manual's figure caption is ceiling frame tying exterior walls together, because rafters push outward.",
            sourceLessonSlug: "rafters-and-thrust",
          },
          {
            prompt: "What holds the peak of a truss from dropping?",
            options: [
              "The bottom chord in tension",
              "The gusset plate at the apex",
              "The top chords in compression",
              "The webs nearest the peak",
            ],
            correctIndex: 0,
            explanation:
              "Because the lower ends of the top chords cannot pull apart, the peak cannot drop down. Cutting that member undoes it.",
            sourceLessonSlug: "trusses",
          },
          {
            prompt: "Who can answer a question about altering a roof truss?",
            options: [
              "The truss designer and the building department",
              "Any experienced framing contractor",
              "The gusset plate manufacturer",
              "The homeowner, above the ceiling line",
            ],
            correctIndex: 0,
            explanation:
              "A truss is engineered for one building, so altering it is an engineering question rather than a carpentry one.",
            sourceLessonSlug: "trusses",
          },
          {
            prompt: "Why does the manual warn against a waterproof paper as roof underlayment?",
            options: [
              "Moisture accumulates under it",
              "It tears under the weight of the shingles",
              "It stops the shingles bonding to the deck",
              "It voids the covering manufacturer's warranty",
            ],
            correctIndex: 0,
            explanation:
              "Acting as a vapour barrier in that position lets moisture or frost accumulate between the underlayment and the sheathing.",
            sourceLessonSlug: "what-the-roof-carries",
          },
          {
            prompt: "What are the four jobs the outside of a wall has to do?",
            options: [
              "Water, air, vapour and heat",
              "Structure, insulation, finish and drainage",
              "Bearing, bracing, anchoring and flashing",
              "Rain, wind, snow and sun",
            ],
            correctIndex: 0,
            explanation:
              "Four separate jobs wanting different properties, which is why a wall has layers rather than one very good material.",
            sourceLessonSlug: "four-jobs-four-layers",
          },
          {
            prompt: "On which side of a wall does a vapour barrier belong?",
            options: [
              "The warm side",
              "The cold side, toward the sheathing",
              "Directly behind the cladding",
              "Either side, if it is continuous",
            ],
            correctIndex: 0,
            explanation:
              "That is the side the vapour comes from. On the cold side it becomes a condensing surface inside the wall.",
            sourceLessonSlug: "four-jobs-four-layers",
          },
          {
            prompt: "What two things does a drainage plane do?",
            options: [
              "Blocks water and drains it away",
              "Blocks water and stops air movement",
              "Sheds rain and insulates the wall",
              "Seals the sheathing and carries the cladding",
            ],
            correctIndex: 0,
            explanation:
              "A wall that stops water and holds it has not solved anything, which is why the laps and flashings matter.",
            sourceLessonSlug: "water-first",
          },
          {
            prompt: "How must the layers of a drainage plane be lapped?",
            options: [
              "Each upper layer over the one below",
              "Each upper layer tucked behind the one below",
              "Butt jointed and taped at every seam",
              "In a single sheet with no laps at all",
            ],
            correctIndex: 0,
            explanation:
              "Overlap, not underlap, so bulk water is directed down and out of the wall rather than into it.",
            sourceLessonSlug: "water-first",
          },
          {
            prompt: "Which way should a faced batt of insulation be installed?",
            options: [
              "Facing toward the warm side",
              "Facing toward the sheathing",
              "Facing whichever way suits the fixing tabs",
              "With the facing stripped off first",
            ],
            correctIndex: 0,
            explanation:
              "The covering sheet is a vapour barrier, so reversing the batt puts the barrier exactly where it should not be.",
            sourceLessonSlug: "air-vapour-heat",
          },
          {
            prompt: "What does the DOE guide say tends to be the weakest link in a load path?",
            options: [
              "The connections between assemblies",
              "The longest spanning member",
              "The foundation under the heaviest wall",
              "The roof, as the most exposed element",
            ],
            correctIndex: 0,
            explanation:
              "And if a connection fails, an alternative load path forms, which can lead to progressive failure.",
            sourceLessonSlug: "houses-fail-at-connections",
          },
          {
            prompt: "Why is wind uplift hard on a connection?",
            options: [
              "Resting on something does not resist a pull",
              "Because uplift acts faster than gravity",
              "Because uplift is not considered in design",
              "Because uplift only affects the roof covering",
            ],
            correctIndex: 0,
            explanation:
              "Gravity holds most joints closed. Uplift pulls them open, which is what metal connectors exist for.",
            sourceLessonSlug: "houses-fail-at-connections",
          },
          {
            prompt: "According to the Wood Handbook, what stops decay already present in wood?",
            options: [
              "Keeping the wood air dry",
              "Removing the affected member entirely",
              "Raising the temperature of the assembly",
              "Sealing the wood surface with paint",
            ],
            correctIndex: 0,
            explanation:
              "Wood will not decay if it is kept air dry, and decay already present from prior infection will not progress.",
            sourceLessonSlug: "decay-is-structural",
          },
          {
            prompt: "What does this course say the drainage and clearance details really are?",
            options: [
              "The structural strategy",
              "Comfort and finish improvements",
              "Optional upgrades beyond code",
              "Requirements limited to humid climates",
            ],
            correctIndex: 0,
            explanation:
              "They keep wood below the moisture threshold at which serious decay occurs, which keeps members what the designer assumed they were.",
            sourceLessonSlug: "decay-is-structural",
          },
          {
            prompt: "Which covering step hides the layers that do the water job?",
            options: [
              "The cladding",
              "The drywall",
              "The subfloor",
              "The roof covering",
            ],
            correctIndex: 0,
            explanation:
              "Sheathing, drainage plane and every flashing go behind it, after which only failure reveals how they were lapped.",
            sourceLessonSlug: "the-order-of-the-build",
          },
          {
            prompt: "What is the fourth pass in reading a wall section?",
            options: [
              "Listing what the drawing does not say",
              "Checking every dimension for arithmetic errors",
              "Identifying the trades responsible for each layer",
              "Comparing the section against the elevations",
            ],
            correctIndex: 0,
            explanation:
              "Sizes may be in a schedule, materials in the specifications, and minimums in the code, and a gap is a question worth asking.",
            sourceLessonSlug: "reading-a-wall-section",
          },
          {
            prompt: "What does the course call the end product of the whole exercise?",
            options: [
              "A well-formed question",
              "A completed wall section drawing",
              "A list of defects found in a building",
              "A decision about whether a wall can be removed",
            ],
            correctIndex: 0,
            explanation:
              "A good question names a specific junction and is answerable. A poor one asks whether the wall is fine.",
            sourceLessonSlug: "label-one-wall-section",
          },
        ],
      },
    },
  ],
};

// ══════════════════════════════════════════════════════════════════════════════════════════════
// PROPOSED RESEARCH CHECKS for src/lib/research-checks.ts (I do not own that file; these are for
// whoever registers the course). Each is written in the ResearchCheck shape. `course` is the slug
// to be registered, `how-a-house-stands-up`.
//
//  A. key "house-plate-bearing-inference" · severity medium · lesson "wood-as-an-engineering-material"
//     title: Is "a stud bears along the grain, its plate across the grain" stated anywhere federal?
//     quote: "Reading the house from that, and this reading is the course's own rather than the
//            handbook's"
//     claim: The Wood Handbook (chap. 5, p. 5-3) reports compressive stress perpendicular to grain
//            at the proportional limit and notes there is no clearly defined ultimate stress. The
//            lesson's step from that to "which is why plates and bearing points get design
//            attention" is the course's own inference and is LABELLED as such in the text.
//     stakes: If a public-domain source states the bearing-at-plates point directly, the hedge
//            comes out and the lesson gets a citation. If a source contradicts it, the paragraph goes.
//     needs: a federal or other free source that states compression perpendicular to grain at wall
//            plates as a design consideration in light-frame construction.
//     where: Wood Handbook chapters 8 (structural analysis) and 11 (fastenings) were NOT read in
//            this pass and are the obvious next place; also the Navy Builder manuals' advanced
//            volume (NAVEDTRA 14045), which was not retrieved.
//
//  B. key "house-navedtra-official-host" · severity low · lesson "where-the-numbers-come-from"
//     claim: Both Navy manuals are cited from third-party hosts, constructionknowledge.net (Vol 2)
//            and militarynewbie.com (Vol 1), because the inventory records that media.defense.gov
//            returned 403 for NAVEDTRA 14043A. The DISTRIBUTION STATEMENT A line was read in both
//            PDFs, so the public-release status is verified; the HOST is not a government one.
//     needs: a working .mil or .gov URL for NAVEDTRA 14043 and 14044, so every citation in this
//            course points at a government copy.
//     where: NETPDTC / MyNavyHR publication indexes; the Defense Technical Information Center.
//
//  C. key "house-navedtra-third-party-figures" · severity medium · lesson "the-parts-list"
//     claim: The sources inventory flags a search summary mentioning "approved copyrighted
//            material" inside the NAVEDTRA manuals. THIS COURSE REPRODUCES NO FIGURE and describes
//            structure in its own words, so nothing here depends on the answer. The next course in
//            this series might.
//     needs: the manuals' own front matter or NETPDTC's statement on third-party material in them.
//     stakes: A later course that redraws or describes a figure in detail needs this settled first.
//
//  D. key "house-indiana-under-floor-and-ventilation-minimums" · severity low · lesson
//     "foundations-and-what-sits-on-them"
//     quote: "It gives figures; the governing figures where you live come from your adopted code,
//            so this course does not print them."
//     claim: The course deliberately prints no crawl-space clearance, no attic free-ventilation
//            fraction and no roof design load, because the free federal statements of those
//            (NAVEDTRA, 24 CFR 3280) govern military construction and manufactured homes
//            respectively rather than site-built houses.
//     needs: whether Indiana's adopted residential code states these, and whether that text is
//            free to read, so `read-the-plan-and-the-code` can hand a learner a real lookup path
//            rather than a general instruction. This check probably belongs to THAT course.
//
//  E. key "house-fema-p-2178" · severity low · lesson "houses-fail-at-connections"
//     claim: The brief names FEMA P-2178 (Performance of One- and Two-Family Dwellings, MAT summary
//            report) as section 8's source. ITS PDF WAS NOT FETCHED in this pass, so no lesson
//            asserts anything from it and it is NOT cited. Section 8 rests on the DOE Building
//            America guide and 24 CFR 3280 instead.
//     needs: the P-2178 PDF retrieved and read, then a decision on whether a lesson should rest on
//            its findings about connection performance in real events.
//
//  F. key "house-apa-and-bia-reuse-terms" · severity low · lesson "sheathing-and-racking"
//     claim: The brief lists APA (The Engineered Wood Association) guides and Brick Industry
//            Association Technical Notes as titles VERIFIED but reuse terms UNVERIFIED. Neither is
//            cited, quoted or linked anywhere in this course, and the panel and brick-veneer
//            material is taught only from the Navy manual and the DOE guide.
//     needs: a terms-of-use statement fetched from apawood.org and gobrick.com.
//     stakes: If reuse is permitted for citation and linking, a later revision could point a
//            learner at free industry documents on shear walls and brick veneer.
//
// SETTLED IN THIS PASS, so NO check is needed (open items the brief left):
//  - NAVEDTRA 14044 (Volume 2) was the brief's largest open item: its topic list was known only
//    from Volume 1's summary page. The PDF was fetched and read in this pass (March 1994 edition,
//    DISTRIBUTION STATEMENT A, ten chapters), and it is the backbone of sections 4, 5, 6, 7 and 9.
//  - 24 CFR 3280 section TEXT, which the brief had not read: 3280.305, 3280.306 and 3280.504 were
//    read at law.cornell.edu in this pass and are quoted with the manufactured-home caveat every
//    time.
//  - Wood Handbook bibliographic facts: the treesearch record was re-fetched in this pass and
//    confirms "Wood handbook, wood as an engineering material", editor Robert J. Ross, FPL-GTR-282,
//    2021, 543 pages, USDA Forest Service Forest Products Laboratory, Madison, WI.
//  - A failed fetch, reported and not relied on: huduser.gov's Structural Design Loads for One- and
//    Two-Family Dwellings returned HTTP 202 with an empty body on 2026-09-20. Nothing here rests
//    on it.
//
// ══════════════════════════════════════════════════════════════════════════════════════════════
// SOURCE TIERS for build gate D5a (rubric v1.3, 2026-09-20). Every `## Sources` entry in this file
// resolves to one of five documents, classified here so whoever uploads knows what may be hosted.
//
//  TIER A, free to host (US federal works, 17 U.S.C. 105):
//   1. Wood Handbook FPL-GTR-282 chapters 4, 5, 13 and 14 (USDA Forest Service, Forest Products
//      Laboratory). Original URLs are the per-chapter PDFs under
//      fpl.fs.usda.gov/documnts/fplgtr/fplgtr282/. Upload the chapters, not the 543-page whole.
//   2. 24 CFR part 3280, sections 3280.305, 3280.306 and 3280.504. The REGULATION is a federal
//      work; the page it was read on is Cornell's LII presentation of it, which is Tier B. Link
//      LII, and prefer an official eCFR or govinfo copy for any upload. NOTE: the inventory records
//      that ecfr.gov redirected to an unblock page on 2026-09-20, so an official copy still has to
//      be retrieved.
//   3. 17 U.S.C. 105, read at copyright.gov.
//
//  TIER A with one condition, NAVEDTRA 14043 and 14044 (US Navy nonresident training courses).
//   Both carry "DISTRIBUTION STATEMENT A: Approved for public release; distribution is unlimited",
//   which was read in both PDFs, and both are works of US government employees. The TEXT is
//   therefore free to host. HOLD THE UPLOAD until research check C is settled, because the sources
//   inventory flags an unverified report of "approved copyrighted material" (that is, third-party
//   figures) inside these manuals, and uploading a PDF republishes its figures as well as its text.
//   The copies read in this pass are on third-party hosts (research check B), so an official host
//   is wanted first in any case.
//
//  TIER B, publicly readable, LINK ONLY, never rehosted:
//   4. DOE Building America Solution Center guides (basc.pnnl.gov). The pages carry a Department of
//      Energy funding statement and disclaimer, but they are published by a contractor-operated
//      national laboratory, so whether they are "works of the United States Government" within
//      17 U.S.C. 105 was NOT established in this pass. Treat as Tier B: cite and link, do not
//      upload, do not reproduce. The course already quotes only short definitional sentences.
//
//  TIER C, cite-only, no link to a copy: NONE. Nothing in this course is paywalled, and nothing in
//  it comes from BAM's own books, which are the only owned copies in scope. The APA and Brick
//  Industry Association documents that would have been Tier B or C are not cited at all (check F).
//
// ══════════════════════════════════════════════════════════════════════════════════════════════
// PROPOSED REGISTRATION BLOCK for scripts/seed-courses.ts (I do not own that file). Price,
// priceType, visibility and publishHoldReason are INSERT-ONLY, so they have to be right the first
// time. No seriesCode and no seriesPosition, per BAM's decision that private courses carry no code.
//
//   await seedAuthoredCourse(db, {
//     tenantId: learnWitus,
//     instructorId,
//     slug: "how-a-house-stands-up",
//     course: HOW_A_HOUSE_STANDS_UP_COURSE,
//     category: "Science & Math",
//     additionalCategories: ["Money & Property", "Careers & Media"],
//     navigationMode: "linear",
//     price: 0,
//     priceType: "free",
//     visibility: "private",
//     publishHoldReason:
//       "Private study, by BAM's decision of 2026-09-20. Structure is a subject where a wrong sentence can put a wall on somebody, so this course is held while a reader with building experience checks it. It teaches knowledge and not skill, gives no span, header size, beam size or fastener schedule, implies no credential, approves no permit, inspects nothing, and substitutes for no trade program. Built entirely from public-domain federal sources; nothing derives from the commercial building books in content/construction/.",
//     seriesSlug: "the-house-you-live-in",
//     seriesTitle: "The House You Live In",
//     seriesOrder: 2,
//   });
//
// FOR THE REGISTERING AGENT (all outside this file):
//  - CITATIONS: add `how-a-house-stands-up` to STAGED_COURSES in src/lib/citations.ts and run
//    `pnpm gen:citations` once it is seeded. Every one of the 26 teaching lessons carries an APA 7
//    `## Sources` block, so `pnpm check:citations` should find citations rather than zero.
//  - STANDARDS: this is NOT one of the genuinely-vocational courses that belong in BACKLOG forever.
//    It teaches load paths, material properties, moisture behaviour and reading a technical
//    drawing, which is science-and-engineering-practice territory, so the right move is to MAP it
//    in src/lib/standards/ rather than excuse it. Until that mapping exists it needs a BACKLOG line
//    in scripts/check-standards-coverage.ts, and the honest one-liner is that the mapping is
//    pending rather than that the subject has no standard. After mapping, run
//    `pnpm standards:for how-a-house-stands-up` and confirm every code shown is something these
//    lessons genuinely teach today.
//  - SERIES: `the-house-you-live-in`, built second, after `read-the-plan-and-the-code`. Confirm
//    check-series-codes accepts a series entry carrying a slug and title but no code or position.
//  - ASSESSMENT SPEC: `pnpm audit:course how-a-house-stands-up --spec` cannot see an unregistered
//    slug, so the targets below were computed by hand with the same formula the script uses
//    (`round(words / 35)`, clamped 40 to 100, with a pool inside 90 percent of target passing):
//      S1 1902 words, target 54, pool 54 | S2 2084/60, pool 56 | S3 2087/60, pool 54
//      S4 2016/58, pool 52 | S5 1901/54, pool 49 | S6 2097/60, pool 55 | S7 2114/60, pool 54
//      S8 1474/42, pool 40 | S9 1557/44, pool 42 | Final pools 46, serves 10.
//    Every section quiz serves 5 and passes at 80; the final serves 10 and passes at 80; every
//    question carries `explanation` and a course-internal `sourceLessonSlug`; every teaching lesson
//    is assessed inside its own section.
//  - DOCS: the roadmap in src/lib/roadmap.ts and any catalog listing should record a second course
//    in `the-house-you-live-in`, private.
