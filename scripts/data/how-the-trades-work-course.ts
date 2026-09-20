import type { AuthoredCourse } from "./authored-course";

// "How the Trades Work: Journeyman, Apprentice, and Who Actually Decides".
// Slug to be registered: `how-the-trades-work`. PRIVATE, price 0, priceType "free", NO series code.
// Research tier: TIER 2 (the rubric sends credential-adjacent, money and safety subjects to Tier 2
// whatever they score, and this is all three at once).
// Brief: plans/future-courses/construction/2026-09-20-journeyman-curriculum-research.md, Option B,
// chosen by BAM on 2026-09-20. Rubric line from that file, section 11:
//   "gates pass; B 3/2/3/3/3/2 = 32; form C6, course".
//
// THE SPINE, and it must not be flattened into a careers pamphlet:
// The freely available information about entering a trade is WRONG, including about BAM's own city.
// Indianapolis does not license journeymen at all: Revised Code ch. 875 art. II creates a "master"
// licence and a "residential" licence and nothing else, and the ONLY occurrence of "journeyman" in
// the whole Indianapolis-Marion County code is a certified-payroll clause in public-works bidding
// (Sec. 261-408). Indiana has no state electrical licence at all; the Board of Electrical Examiners'
// own application form says so in its first sentence. Meanwhile commercial licensing sites assert a
// Marion County journeyman electrician examination, with two hour figures that contradict each
// other, for a licence that does not exist. And in the same state, on the same jobsite, Indiana DOES
// license a journeyman plumber through an approved apprenticeship, with a statute behind it.
// That contrast is the course's worked example, and the skill it teaches is: check the authority,
// not the blog.
//
// WHAT THIS COURSE MAY NEVER CLAIM, stated in lesson 1 in its own words and again in the last
// lesson: no hours, no credit, no credential, no licence, no equivalence. Only a registered sponsor
// can award hours, and only the licensing authority can license anyone. Learners are sent to the
// named authorities and sponsors by name in section 8.
//
// FETCH-OR-DO-NOT-CITE. Every figure, fee, hour count, code edition and quotation below comes from a
// source fetched and read on 2026-09-20 and recorded in section 13 of the research file:
//   * 29 C.F.R. 29.2, 29.4, 29.5 and 30.1, via Cornell LII (eCFR redirected and was unusable).
//   * apprenticeship.gov: career-seekers, explore-pre-apprenticeship, about-us/state-office.
//   * in.gov/dwd/apprenticeship-indiana/about.
//   * Indianapolis Board of Electrical Examiners application PDF (media.graphassets.com).
//   * Indianapolis-Marion County Revised Code ch. 875 art. II, via the Municode content API
//     (client 2720, product 12016, job 498100, "Supplement 47 Update 2", codified through
//     Ordinance No. 42, 2026), plus the code-wide search for "journeyman" and "apprentice".
//   * in.gov/pla plumbing licensing information.
//   * in.gov/dhs Fire Prevention and Building Safety Commission rules table.
//   * Prov candidate information bulletins: Indiana (2026.06.24) and Indiana Marion County
//     (2022.03.01).
//   * ibew481.org/apprenticeship, eti-indy.org/electrician-program, the ETI Plan of Study Fall 2025
//     PDF, ua.org/apprenticeship, abc.org/Workforce/Craft-Training-Apprenticeship,
//     nccer.org/craft-catalog/electrical, hbi.org, indianaplan.org, and Ivy Tech's Indianapolis
//     partnerships page.
//
// DROPPED FOR LACK OF EVIDENCE, and therefore absent from every lesson:
//   * National union hour figures (electrical training ALLIANCE 8,000 OJT / 1,000 classroom):
//     UNVERIFIED, the pages 404'd or carried no figures. The Indianapolis sponsor's own published
//     figures are used instead, and are labelled as one sponsor's, not as a national standard.
//   * UA per-year hour structure (1,700 to 2,000 OJT, 216 or 246 classroom): REPORTED from local
//     pages only; ua.org itself states none. Not printed.
//   * UBC Carpenters programme structure: UNVERIFIED. Not printed.
//   * The John Boner / Indiana Construction Roundtable Foundation pre-apprenticeship specifics
//     (80 hours, five weeks, NCCER Core plus OSHA 10): REPORTED, the event page 404'd. Not printed,
//     even though BAM is in the programme. He is the primary source and can settle it.
//   * PSI as an Indiana examination vendor: REPORTED from secondary guides only. Not printed.
//   * A pending Indiana adoption of a newer NEC edition: REPORTED by a commercial site and NOT on
//     the Commission's current-in-effect table. Lesson 14 uses it only as an attributed example of
//     a claim the authority's own table does not support, never as a fact.
//   * The two contradictory "Marion County journeyman electrician" hour figures: REPORTED and
//     contradicted by the ordinance. Lesson 2 attributes them to "commercial licensing guides
//     searched on 20 September 2026" and uses them as the worked wrong answer. They are never
//     asserted.
//
// DOCUMENTS THAT ARE AUTHORITATIVE AND ALSO STALE, taught as such rather than smoothed over:
//   * The Board of Electrical Examiners application PDF carries a board-meeting calendar that ends
//     in 2024, so the form may be behind the ordinance. Lesson 2 says so.
//   * The Prov Marion County candidate bulletin is dated 1 March 2022. Lesson 14 prints that date
//     beside every figure taken from it.
//
// WHAT IT DOES NOT RE-TEACH. `history-of-unions` already teaches labour history and
// `construction-math` already teaches the arithmetic, and both sit on a real Indianapolis
// apprenticeship's own plan of study. Lesson 12 points at them by name and moves on.
// `read-the-plan-and-the-code` owns code reading; lesson 14 confines itself to the examination
// consequence, which is which edition is on the test.
//
// House style, matching drew-blood-bank-course.ts: `section` on every lesson; flush-left
// single-line `:::reveal q ||| a`; a `## Vocabulary` block of 3 to 6 lesson-specific terms; APA 7
// `## Sources`; one quiz per teaching section, pooled to the density target (43 to 52) and serving
// 5, plus a final pooling 42 and serving 10 placed LAST; passingScore 80; shuffleOptions true; `explanation` and
// `sourceLessonSlug` on every question. Correct options are written SHORT and distractors long and
// specifically wrong, so check-longest-option passes by construction. No em dashes anywhere a
// learner reads.
export const HOW_THE_TRADES_WORK_COURSE: AuthoredCourse = {
  title: "How the Trades Work: Journeyman, Apprentice, and Who Actually Decides",
  description:
    "Before anyone gives five years to a trade, they usually type the question into a search box, and in a great many places the answer that comes back is wrong. This course answers it from the documents instead. It reads the federal apprenticeship regulation in its own words, so you know what a registered apprenticeship must contain, who a sponsor is, what a journeyworker is under federal law, and why that federal word licenses nobody. Then it works one city in detail, because the detail is the lesson. Indiana has no state electrical licence at all, and the city of Indianapolis licenses masters and residential electricians and no journeymen whatsoever, while commercial licensing sites confidently describe a Marion County journeyman examination that the ordinance does not create. In the same state, a journeyman plumber licence is real, issued by a state commission, reached through an approved apprenticeship, with a statute behind it. Same jobsite, two completely different regimes, and the only way to know which one you are in is to read the rule that creates the licence. From there the course covers the pipelines a person actually enters through, union and non-union, community college and pre-apprenticeship, and the fact that not one of them charges tuition for the trade training; what a real five-term plan of study contains, term by term, from the sponsor's own published document; the wages, the fees, the bond and the insurance; and the examination at the end, which is open book, has strict rules about which book, and in Indiana is written against a code edition older than the one a study guide will tell you to buy. It closes on the equal opportunity regulation and the history it was written against, and on where to send yourself for a real answer. This course grants no hours, no credit, no credential, no licence and no equivalence to any of them. Every number in it carries the date it was checked.",
  lessons: [
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 1 — What this is, and why every number has a date on it
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "what-this-course-is",
      title: "1 · What this is, and what it is not",
      section: "Section 1 · What this is, and why every number has a date on it",
      body: `This course is about a system, not a skill. It explains what the word journeyman means, who decides whether a journeyman licence exists where you live, how a registered apprenticeship is built, who runs the training near you, what it costs, what it pays, and what the examination at the end is actually like. It will not teach you to bend conduit or to sweat a joint. It is the thing to read before committing five years, and it is written for the person who has not decided yet.

**The one sentence, and it is a limit rather than modesty.**

This course grants no hours, no credit, no credential, no licence and no equivalence to any of them. Nothing here counts toward an apprenticeship's on-the-job or related-instruction hours, satisfies any state or local licensing requirement, or makes anyone eligible to sit an examination. Only a registered sponsor can award hours, and only the licensing authority can license you.

**The longer refusal list, item by item.**

- **Not OSHA 10 and not OSHA 30.** Those are classes with authorised trainers behind them. Nothing read on a screen here produces a card.
- **Not an NCCER credential.** Those credentials are issued through accredited providers. A website does not become an accredited provider by wanting to be one.
- **Not related technical instruction.** The federal regulation does allow related instruction to be delivered by "electronic media", but only as instruction "approved by the Registration Agency", inside a registered programme (29 C.F.R. § 29.5(b)(4)). That approval belongs to an agency and a sponsor. This course has neither.
- **Not advanced standing.** The same regulation lets a programme grant "advanced standing or credit for demonstrated competency, acquired experience, training, or skills", and requires it be granted "for all applicants equally, with commensurate wages for any progression step so granted" (29 C.F.R. § 29.5(b)(12)). The sponsor grants that. An outsider cannot hand it over.
- **Not examination preparation endorsed by anyone.** No board, commission or testing vendor has seen this course.
- **Not legal advice, and not permanent.** Licensing rules, fees and adopted code editions all change.
- **Not a substitute** for a pre-apprenticeship, an apprenticeship committee, a contractors' association chapter or a college programme. Those are named later so you go to them, not so you skip them.

**Why the refusal is so specific.** Read 29 C.F.R. § 29.5(b)(4) and § 29.5(b)(12) together and you get both the honest opening for an online course and its ceiling. Instruction may arrive by electronic media, and credit may be granted for experience already held. Both clauses are doors. Neither is a door a third party can walk through on its own, because the regulation hands the key to the Registration Agency and the sponsor. Anything that tells you otherwise is selling something.

**Two levels, kept apart on purpose.** Sections 2, 4, 5 and 8 carry the general rule, which travels. Section 3 works one state and one city in detail, because a rule you cannot see operating is a rule you cannot use. If you do not live in Indiana, the Indiana material is a demonstration of a method rather than your answer. The method is the transferable part.

**What you should be able to do by the end.** Say what a journeyman is in two different senses and tell them apart. Find out whether your trade in your city has a journeyman licence at all, and name the document that settles it. Read a set of apprenticeship standards and know what it must contain. Name the pipelines near you, what each requires and what each awards. Know which office to call when this course goes out of date, which it will.

:::reveal What does this course grant: hours, credit, a credential, a licence, or an equivalence to any of them? ||| None of them. Only a registered sponsor can award hours, and only the licensing authority can license anyone.

:::reveal Federal regulation lets related instruction be delivered by electronic media. Why does that not help a website? ||| Because 29 C.F.R. 29.5(b)(4) allows it only as instruction approved by the Registration Agency inside a registered programme. The approval belongs to the agency and the sponsor.

:::reveal Who may grant advanced standing for experience a person already has? ||| The sponsor, under 29 C.F.R. 29.5(b)(12), and it must be granted for all applicants equally with commensurate wages for the step granted.

## Vocabulary
- **Sponsor**: the person, association, committee or organisation that operates an apprenticeship programme and in whose name it is registered.
- **Registration Agency**: the federal Office of Apprenticeship, or a recognised State Apprenticeship Agency, depending on the state.
- **Related instruction**: the organised classroom or equivalent teaching that accompanies the paid work in an apprenticeship.
- **Advanced standing**: credit a sponsor grants toward a programme for competency, experience, training or skills a person already holds.
- **Worked example**: a specific case used to demonstrate a general method, here Indiana, which is not the same thing as a general rule.

## Sources
Labor Standards for the Registration of Apprenticeship Programs, 29 C.F.R. § 29.5 (2026). https://www.law.cornell.edu/cfr/text/29/29.5`,
    },
    {
      slug: "the-date-on-the-number",
      title: "2 · Why every number here has a date on it",
      section: "Section 1 · What this is, and why every number has a date on it",
      body: `Here is the finding that made this course worth building, and it is a finding about search results rather than about wiring.

**The wrong answer, and how confident it sounds.** Commercial licensing guides searched on 20 September 2026 describe a Marion County journeyman electrician examination. One of them puts the requirement at four years and 8,000 hours. Another puts it at a four-year apprenticeship of 7,000 hours. Set aside for a moment that the two figures cannot both be right. The deeper problem is the thing they agree on.

**The ordinance.** Indianapolis and Marion County share one Revised Code. Chapter 875 is Construction Skilled Trades, and article II governs the licensing and regulation of electrical contractors. Its section 875-202, headed Types of licenses, says there shall be two types approved by the board: a "master" licence, authorising electrical work without limitation, and a "residential" licence, authorising work in one- or two-family residential structures as defined in the Indiana Residential Code. Two types. Master and residential. There is no journeyman electrician licence in Indianapolis at all.

Search the entire Indianapolis-Marion County Code of Ordinances for the word "journeyman" and you get exactly one hit, and it is not a licensing provision. It is section 261-408, on responsible bidding practices, which requires a certified payroll stating the work classification, rate of pay and craft of each employee on a project, giving "journeyman electrician or apprentice electrician" as its example. In that one appearance the word is a payroll classification on a public works job, which is a very different thing from a licence.

**So two sources disagreed, and the disagreement was not close.** The commercial guides described an examination for a licence the ordinance does not create, and could not agree with each other on the hours for it. When that happens, the question is not which source sounds more authoritative. The question is which source has the power to make the thing true. An ordinance creates licences. A guide describes them. When the description and the creating document disagree, the creating document wins, every time, and the description is simply wrong.

**The three questions, which work anywhere.** For any claim about a trade licence, ask: who issues this licence, under what written rule, and when did I read that rule. The first question finds the authority. The second finds the document. The third is the one everybody skips, and it is the reason this course prints a date beside every number.

**Authoritative and out of date are not opposites.** Two examples from this course's own sources. The Indianapolis Board of Electrical Examiners publishes an application form that sets out the whole process, and that form is the right document to read. It also contains a board meeting calendar that ends in 2024, which means the form itself may be behind the ordinance it implements. Separately, the testing vendor's candidate information bulletin for Marion County examinations, which is the best single description of what those examinations are like, is dated 1 March 2022. Both documents are authoritative. Both may be stale. The fix is not to ignore them. The fix is to read them, note the date, and then call the office that issued them before acting on a fee or a deadline.

**What this means for reading this course.** Every fee, hour count, code edition and examination figure below was read on 20 September 2026 and prints that date. Treat each one as a starting point for a phone call, not as the answer. The parts that will not go stale are the shape of the system and the method for checking it, which is why those get the most room.

:::reveal How many types of electrical licence does Indianapolis Revised Code section 875-202 create, and what are they? ||| Two: a master licence, for electrical work without limitation, and a residential licence, for one- or two-family residential structures.

:::reveal The word journeyman appears once in the whole Indianapolis-Marion County code. Where, and doing what? ||| In section 261-408 on responsible bidding practices, as an example of a work classification on a certified payroll for a public works project. It is not a licensing provision.

:::reveal When a commercial licensing guide and the ordinance disagree about whether a licence exists, which one settles it, and why? ||| The ordinance, because it is the document that creates licences. A guide only describes them, so a description that conflicts with the creating document is simply wrong.

:::reveal What are the three questions to ask about any trade licensing claim? ||| Who issues this licence, under what written rule, and when did I read that rule.

## Vocabulary
- **Ordinance**: a law passed by a city or county, which in Indianapolis is collected in the Revised Code of the Consolidated City and County.
- **Certified payroll**: a sworn record of who worked on a public project, their classification, craft and rate of pay.
- **Master licence**: in Indianapolis, the licence authorising electrical work without limitation.
- **Residential licence**: in Indianapolis, the licence authorising electrical work in one- or two-family residential structures.
- **Stale source**: a document from the right authority that has not been updated, which is a reason to telephone rather than a reason to dismiss.

## Sources
Indianapolis Board of Electrical Examiners. (n.d.). *Board of Electrical Examiners application* [PDF]. City of Indianapolis. Retrieved September 20, 2026, from https://media.graphassets.com/BM4sUhq0QMFY1xQCdx6i
Prov, Inc. (2022, March 1). *Indiana Marion County candidate information bulletin* [PDF]. https://provexam.com/wp-content/uploads/2022/05/IN-Marion-County-Candidate-Information-Bulletin-2022.03.01.pdf
Revised Code of the Consolidated City and County, § 261-408 (Indianapolis-Marion Cnty., Ind. 2026). https://library.municode.com/in/indianapolis_-_marion_county/codes/code_of_ordinances
Revised Code of the Consolidated City and County, ch. 875, art. II (Indianapolis-Marion Cnty., Ind. 2026). https://library.municode.com/in/indianapolis_-_marion_county/codes/code_of_ordinances`,
    },
    {
      slug: "section-1-quiz",
      title: "Section 1 quiz · What this is, and the date on the number",
      section: "Section 1 · What this is, and why every number has a date on it",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What does a learner who finishes this course receive?",
            options: [
              "Nothing at all",
              "A certificate of related technical instruction that a sponsor is required to count toward the first year",
              "Documented hours that a Registration Agency will accept in place of on-the-job learning",
              "An eligibility letter that lets the holder register for a licensing examination early",
            ],
            correctIndex: 0,
            explanation:
              "No hours, no credit, no credential, no licence and no equivalence to any of them. Lesson 1 states that as a limit rather than as modesty.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "Who can award the hours that count toward an apprenticeship?",
            options: [
              "A registered sponsor",
              "Any provider whose related instruction is delivered by electronic media, under 29 C.F.R. 29.5(b)(4)",
              "The employer of record on the jobsite, independently of whichever programme the worker is indentured to",
              "The testing vendor, once the candidate has passed the trade's written examination",
            ],
            correctIndex: 0,
            explanation:
              "Only a registered sponsor awards hours. Electronic media is a permitted delivery method inside a registered programme, not an independent source of credit.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "Who can license a person to practise a licensed trade?",
            options: [
              "The licensing authority",
              "The sponsor of the apprenticeship, on issuing the completion certificate at the end of the term",
              "The union local or contractors' association that placed the worker with a signatory employer",
              "The federal Office of Apprenticeship, which issues the national journeyman licence",
            ],
            correctIndex: 0,
            explanation:
              "Only the licensing authority licenses anyone. A completion certificate is evidence of training, and there is no national journeyman licence.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "29 C.F.R. 29.5(b)(4) allows related instruction by electronic media on what condition?",
            options: [
              "Approval by the Registration Agency",
              "That the provider publishes the hours it delivers and keeps attendance records for at least five years",
              "That the instruction is offered at no cost to the apprentice for the whole term of the programme",
              "That a licensed contractor in the same trade reviews the material before it is delivered",
            ],
            correctIndex: 0,
            explanation:
              "The regulation permits classroom, occupational or industry courses, electronic media, or other instruction approved by the Registration Agency. The approval is the whole condition.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "Under 29 C.F.R. 29.5(b)(12), who grants advanced standing for experience a person already holds?",
            options: [
              "The sponsor",
              "The Registration Agency, after reviewing the applicant's prior training records and issuing a determination",
              "The state licensing board, as part of deciding whether the applicant may sit the examination",
              "Any accredited curriculum provider that has assessed the applicant's competency",
            ],
            correctIndex: 0,
            explanation:
              "Advanced standing belongs to the sponsor, and the regulation requires it be granted for all applicants equally with commensurate wages for the step granted.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "How must advanced standing be granted, under 29 C.F.R. 29.5(b)(12)?",
            options: [
              "Equally to all applicants",
              "In writing to the Registration Agency within thirty days of the apprentice being indentured",
              "Only to applicants who already hold a current licence in the same trade from another state",
              "At the sponsor's discretion, case by case, with no requirement of consistency between applicants",
            ],
            correctIndex: 0,
            explanation:
              "The clause says advanced standing is granted for all applicants equally, with commensurate wages for any progression step so granted.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "Does finishing this course produce an OSHA 10 or OSHA 30 card?",
            options: [
              "No",
              "Yes, because its safety content is drawn from the same federal construction regulation those classes cover",
              "Yes for OSHA 10 only, since the ten-hour version has no classroom attendance requirement",
              "Only if the learner also completes the jobsite observation exercises in the final section",
            ],
            correctIndex: 0,
            explanation:
              "Those classes come from authorised trainers. Nothing read on a screen here produces a card, and this course does not teach the safety regulation at all.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "Where do NCCER credentials come from?",
            options: [
              "Accredited providers",
              "The national office directly, on receipt of a completed module test taken under any proctor",
              "Any employer that has purchased the curriculum books and assigned them to a trainee",
              "The Registration Agency, as part of registering an employer's apprenticeship programme",
            ],
            correctIndex: 0,
            explanation:
              "NCCER accredits providers, and its credentials are issued through them. Owning books or running a programme does not confer accreditation.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "In apprenticeship regulation, what is a sponsor?",
            options: [
              "The programme's operator",
              "The employer that pays the apprentice's wages during the on-the-job portion of the term",
              "The government office that registers programmes and issues completion certificates",
              "The trade association that writes the curriculum the programme delivers in the classroom",
            ],
            correctIndex: 0,
            explanation:
              "A sponsor is the person, association, committee or organisation operating the programme and in whose name it is registered or approved.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "What is a Registration Agency?",
            options: [
              "A government registering office",
              "A private accrediting body that approves curricula for use inside registered apprenticeships",
              "The joint labour and management committee that runs an industry's training centre",
              "The testing vendor contracted to administer a state's trade licensing examinations",
            ],
            correctIndex: 0,
            explanation:
              "It is the federal Office of Apprenticeship or a recognised State Apprenticeship Agency, depending on the state. Indiana's is the federal office.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "What is related instruction in an apprenticeship?",
            options: [
              "The classroom half",
              "The supervised work experience an apprentice performs for a signatory employer on a jobsite",
              "The orientation a new apprentice attends before being indentured to a programme",
              "The refresher training a journeyworker takes to keep a licence current after completion",
            ],
            correctIndex: 0,
            explanation:
              "Related instruction is the organised teaching of the theoretical and technical subjects related to the occupation, which accompanies the paid work.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "In this course, which material is the worked example rather than the general rule?",
            options: [
              "The Indiana material",
              "The federal apprenticeship regulation, which is quoted only to illustrate how a state writes its own rules",
              "The pipelines, which are described as one region's arrangement rather than as a national pattern",
              "The equal opportunity regulation, which applies only to programmes in states with their own agency",
            ],
            correctIndex: 0,
            explanation:
              "Sections 2, 4, 5 and 8 carry the general rule. Section 3 works Indiana in detail, because a rule you cannot see operating is a rule you cannot use.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "If a learner does not live in Indiana, what is the Indiana material for?",
            options: [
              "The method, not the answer",
              "Comparison only, since Indiana's arrangement is the one most states copied when they wrote theirs",
              "Nothing useful, which is why a learner outside Indiana should skip section 3 entirely",
              "Reciprocity, since a licence earned in Indiana transfers automatically to most other states",
            ],
            correctIndex: 0,
            explanation:
              "The transferable part is the method: find the authority, read the rule that creates the licence, and write down the date you read it.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "What will this course not teach?",
            options: [
              "Hand skills",
              "The contents of a set of apprenticeship standards, which are a sponsor's private document",
              "What a licence permits its holder to do, which varies too much between states to describe",
              "What the training pays, since wage information is commercially confidential",
            ],
            correctIndex: 0,
            explanation:
              "It is about a system rather than a skill. Nobody learns to bend conduit or sweat a joint from it, and it says so in its first paragraph.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "Why does lesson 1 read 29 C.F.R. 29.5(b)(4) and 29.5(b)(12) together?",
            options: [
              "They are the opening and the ceiling",
              "They are the two clauses a Registration Agency reviews before registering any new programme",
              "They are the only two clauses in the regulation that mention the word journeyworker",
              "They set the minimum wage an apprentice must be paid during the classroom portion",
            ],
            correctIndex: 0,
            explanation:
              "Electronic media and advanced standing are both doors. Both are held by the Registration Agency and the sponsor, so neither is a door a third party opens alone.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "The course says it is not permanent. What does that mean in practice?",
            options: [
              "Rules and fees change",
              "The lessons are rewritten each term to match the sponsor's current plan of study",
              "Access expires after a fixed period, after which the learner must enrol again",
              "The federal regulation it quotes is scheduled to be replaced on a known date",
            ],
            correctIndex: 0,
            explanation:
              "Licensing rules, fees and adopted code editions all change, which is why every figure in the course prints the date it was read.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "Why does the course name specific programmes and chapters later on?",
            options: [
              "So you go to them",
              "So a learner can compare their published completion rates before choosing one to apply to",
              "So the course can show which of them have agreed to accept it as related instruction",
              "So a learner can avoid the ones that charge tuition and apply only to the free ones",
            ],
            correctIndex: 0,
            explanation:
              "They are named so a learner goes to them, not so a learner skips them. The course is a substitute for none of them.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "How does lesson 1 describe the course's subject?",
            options: [
              "A system, not a skill",
              "A trade, taught from the sponsor's own published plan of study term by term",
              "A licence, taught from the examination outline the testing vendor publishes",
              "A craft, taught from the regulation rather than from a textbook",
            ],
            correctIndex: 0,
            explanation:
              "It explains what a journeyman is, who decides, how apprenticeship is built, what it costs and pays, and what the examination is like. No craft is taught.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "Which boards, commissions or testing vendors have reviewed this course?",
            options: [
              "None",
              "The testing vendor that administers Indiana's plumbing examinations reviewed it for accuracy",
              "The city board that licenses electrical contractors approved its description of the ordinance",
              "The federal Office of Apprenticeship reviewed its account of the apprenticeship regulation",
            ],
            correctIndex: 0,
            explanation:
              "No board, commission or vendor has seen it, which is exactly why it cannot be called examination preparation endorsed by anyone.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "What kind of advice does the course explicitly say it is not giving?",
            options: [
              "Legal advice",
              "Career advice, since it declines to recommend one trade over another to any learner",
              "Financial advice, since the wage figures it prints come from a sponsor's own page",
              "Safety advice, since the federal construction regulation is outside its scope",
            ],
            correctIndex: 0,
            explanation:
              "The refusal list says it is not legal advice and not permanent, because licensing rules, fees and adopted code editions change.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "What must accompany a progression step granted as advanced standing?",
            options: [
              "Commensurate wages",
              "A written amendment to the apprenticeship standards, filed with the Registration Agency",
              "A reduction in the probationary period equal to the standing granted",
              "An examination demonstrating the competency the standing was granted for",
            ],
            correctIndex: 0,
            explanation:
              "The clause requires advanced standing be granted for all applicants equally, with commensurate wages for any progression step so granted.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "By the end, what should a learner be able to say about their own city and trade?",
            options: [
              "Which document settles it",
              "Which examination vendor holds the contract, and what the passing score has been each year",
              "How many licences of each class the authority has issued in the past decade",
              "Which local employers are hiring apprentices in the current season",
            ],
            correctIndex: 0,
            explanation:
              "The skill is finding out whether the trade in that city has a journeyman licence at all, and naming the document that settles the question.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "How many types of electrical licence does Indianapolis Revised Code section 875-202 create?",
            options: [
              "Two",
              "Three, adding a journeyman class between the residential and master classes",
              "Four, counting the apprentice registration the board maintains alongside the licences",
              "One, a single unrestricted electrical contractor licence with no residential variant",
            ],
            correctIndex: 0,
            explanation:
              "The section says there shall be two types of licenses approved by the board, and then names them.",
            sourceLessonSlug: "the-date-on-the-number",
          },
          {
            prompt: "What are the two Indianapolis electrical licence types called?",
            options: [
              "Master and residential",
              "Journeyman and master, matching the classifications used on certified payrolls for public work",
              "Contractor and maintenance, separating permitted work from work done on an owner's own premises",
              "Commercial and residential, split by the type of structure the holder may work in",
            ],
            correctIndex: 0,
            explanation:
              "Section 875-202 creates a master licence and a residential licence. There is no journeyman electrician licence in Indianapolis at all.",
            sourceLessonSlug: "the-date-on-the-number",
          },
          {
            prompt: "What does the Indianapolis master electrical licence authorise its holder to do?",
            options: [
              "Electrical work without limitation",
              "Electrical work in any structure, provided a residential licence holder is present on the site",
              "Supervision of apprentices only, with the physical work reserved to residential licence holders",
              "Work anywhere in the state of Indiana, because the city licence is recognised statewide",
            ],
            correctIndex: 0,
            explanation:
              "The ordinance says the master licence authorises the holder to perform electrical work without limitation.",
            sourceLessonSlug: "the-date-on-the-number",
          },
          {
            prompt: "What does the Indianapolis residential electrical licence cover?",
            options: [
              "One- or two-family structures",
              "Any occupied building under three storeys, including small apartment blocks and duplex conversions",
              "Repair and maintenance work only, in structures of any size and any occupancy",
              "Work on existing wiring in homes, but never new circuits or new service equipment",
            ],
            correctIndex: 0,
            explanation:
              "The ordinance limits it to one- or two-family residential structures as defined in the Indiana Residential Code.",
            sourceLessonSlug: "the-date-on-the-number",
          },
          {
            prompt: "How many times does the word journeyman appear in the whole Indianapolis-Marion County Code of Ordinances?",
            options: [
              "Once",
              "Twice, in the electrical licensing article and again in the plumbing registration article",
              "Never, which is why the code uses the word journeyworker in its place throughout",
              "Eleven times, once in each of the skilled trades articles the code contains",
            ],
            correctIndex: 0,
            explanation:
              "Exactly one hit, and it is not a licensing provision. The word apprentice returns two hits, neither of them licensing either.",
            sourceLessonSlug: "the-date-on-the-number",
          },
          {
            prompt: "Which section of the Indianapolis-Marion County code contains the single use of the word journeyman?",
            options: [
              "Section 261-408",
              "Section 875-202, the provision creating the types of electrical licence the board approves",
              "Section 875-210, the provision setting the six years of experience an applicant must show",
              "Section 875-201, the provision allowing unlicensed work under a licensed contractor's direction",
            ],
            correctIndex: 0,
            explanation:
              "Section 261-408 covers responsible bidding practices, and is about certified payrolls rather than about who may hold a licence.",
            sourceLessonSlug: "the-date-on-the-number",
          },
          {
            prompt: "What is the word journeyman doing in section 261-408?",
            options: [
              "Naming a payroll classification",
              "Setting the ratio of journeymen to apprentices a bidder must maintain on a public project",
              "Defining the experience a bidder's supervisors must hold before bidding on city work",
              "Requiring bidders to employ journeymen who hold a current city electrical licence",
            ],
            correctIndex: 0,
            explanation:
              "The section requires a certified payroll stating work classification, rate of pay and craft, and gives journeyman electrician or apprentice electrician as its example.",
            sourceLessonSlug: "the-date-on-the-number",
          },
          {
            prompt: "Commercial licensing guides searched on 20 September 2026 gave which two hour figures for a Marion County journeyman electrician requirement?",
            options: [
              "8,000 and 7,000",
              "8,000 and 6,000, the second being the figure for candidates holding a related college degree",
              "10,000 and 8,000, the higher figure applying to candidates without a registered apprenticeship",
              "4,000 and 2,000, matching the two-year and four-year tracks those guides describe",
            ],
            correctIndex: 0,
            explanation:
              "One guide said four years and 8,000 hours, another a four-year apprenticeship of 7,000 hours. They contradict each other, and the ordinance contradicts both.",
            sourceLessonSlug: "the-date-on-the-number",
          },
          {
            prompt: "What is wrong with those guides even before the two hour figures are compared?",
            options: [
              "The licence does not exist",
              "The figures describe the master licence, which the guides mislabel as a journeyman licence",
              "The hours are counted from indenture rather than from the date the application is approved",
              "The guides quote a state requirement, when licensing in Indiana is set by each municipality",
            ],
            correctIndex: 0,
            explanation:
              "They describe an examination for a Marion County journeyman electrician licence that the ordinance does not create. The hours are the smaller problem.",
            sourceLessonSlug: "the-date-on-the-number",
          },
          {
            prompt: "When a commercial guide and the ordinance disagree about whether a licence exists, which settles it?",
            options: [
              "The ordinance",
              "Whichever was published most recently, since licensing provisions are amended every year",
              "The testing vendor's candidate bulletin, because it lists the examinations actually offered",
              "The licensing board's application form, because it states the process an applicant follows",
            ],
            correctIndex: 0,
            explanation:
              "An ordinance creates licences and a guide only describes them, so a description that conflicts with the creating document is simply wrong.",
            sourceLessonSlug: "the-date-on-the-number",
          },
          {
            prompt: "What makes the ordinance the deciding document rather than the more confident one?",
            options: [
              "It creates licences",
              "It is written by lawyers, and legal drafting is checked more carefully than commercial writing",
              "It is updated continuously, while commercial guides are written once and left alone",
              "It is free to read, and a document behind a paywall cannot be cited in an application",
            ],
            correctIndex: 0,
            explanation:
              "The question is never which source sounds more authoritative. It is which source has the power to make the thing true.",
            sourceLessonSlug: "the-date-on-the-number",
          },
          {
            prompt: "What are the three questions to ask about any trade licensing claim?",
            options: [
              "Issuer, rule, date",
              "Cost, duration, and whether the credential is portable to a neighbouring state",
              "Which vendor writes the examination, what it costs, and how many attempts are allowed",
              "Which union holds the agreement, which contractors are signatory, and what the wage step is",
            ],
            correctIndex: 0,
            explanation:
              "Who issues this licence, under what written rule, and when did I read that rule. The first finds the authority, the second the document, the third the currency.",
            sourceLessonSlug: "the-date-on-the-number",
          },
          {
            prompt: "Which of the three checking questions does lesson 2 say everybody skips?",
            options: [
              "The date",
              "The issuer, because most people assume the state licenses every trade uniformly",
              "The written rule, because ordinances are harder to find than the agency's own summary",
              "The cost, because fee schedules are published separately from the licensing provisions",
            ],
            correctIndex: 0,
            explanation:
              "Asking when you read the rule is the step people skip, and it is the reason this course prints a date beside every number.",
            sourceLessonSlug: "the-date-on-the-number",
          },
          {
            prompt: "What in the Indianapolis Board of Electrical Examiners application form ends in 2024?",
            options: [
              "The meeting calendar",
              "The fee schedule, which the ordinance replaced with a new one in the following supplement",
              "The reciprocity arrangement with other jurisdictions, which the board has not renewed",
              "The experience credit for related college courses, which the board withdrew that year",
            ],
            correctIndex: 0,
            explanation:
              "The form's board meeting calendar runs through 2024, which is a reason to telephone the office before acting on anything dated inside it.",
            sourceLessonSlug: "the-date-on-the-number",
          },
          {
            prompt: "What does a calendar ending in 2024 suggest about that application form?",
            options: [
              "It may be behind the ordinance",
              "It has been withdrawn, so an applicant should not use it to apply at all",
              "It applies only to applications filed before the end of that year",
              "It was replaced by an online application that the board no longer publishes as a document",
            ],
            correctIndex: 0,
            explanation:
              "The ordinance is current and the form may be behind it. Authoritative and out of date are not opposites.",
            sourceLessonSlug: "the-date-on-the-number",
          },
          {
            prompt: "What date does the testing vendor's Marion County candidate information bulletin carry?",
            options: [
              "1 March 2022",
              "24 June 2026, the same date as the vendor's bulletin for the state plumbing examinations",
              "26 August 2009, the date the state's current electrical code rule took effect",
              "1 December 2014, matching the effective date of the state building code then adopted",
            ],
            correctIndex: 0,
            explanation:
              "It is dated 1 March 2022, and this course prints that date beside every figure taken from it.",
            sourceLessonSlug: "the-date-on-the-number",
          },
          {
            prompt: "Is a document from the right authority useless once it is out of date?",
            options: [
              "No, call the issuer",
              "Yes, because a superseded document is more misleading than having no document at all",
              "Yes, unless the authority has published a dated erratum listing what changed",
              "No, because licensing documents remain binding until the authority formally repeals them",
            ],
            correctIndex: 0,
            explanation:
              "Read it, note the date, then telephone the office that issued it before acting on a fee or a deadline.",
            sourceLessonSlug: "the-date-on-the-number",
          },
          {
            prompt: "How should a learner treat every dated figure printed in this course?",
            options: [
              "As a starting point for a call",
              "As correct until the course is revised, since every figure was read from a primary source",
              "As an estimate, because the underlying documents give ranges rather than exact amounts",
              "As a floor, since fees and hour requirements only ever increase over time",
            ],
            correctIndex: 0,
            explanation:
              "Each figure was read on 20 September 2026 and prints that date. It is a starting point for a phone call rather than the answer.",
            sourceLessonSlug: "the-date-on-the-number",
          },
          {
            prompt: "Which parts of this course does lesson 2 say will not go stale?",
            options: [
              "The shape and the method",
              "The federal regulation, since regulations are amended far less often than local ordinances",
              "The wage figures, because collective agreements fix them for the length of the apprenticeship",
              "The examination content outlines, which the vendors keep stable across bulletin revisions",
            ],
            correctIndex: 0,
            explanation:
              "The shape of the system and the method for checking it are the durable parts, which is why they get the most room.",
            sourceLessonSlug: "the-date-on-the-number",
          },
          {
            prompt: "What is a certified payroll?",
            options: [
              "A sworn record of who worked",
              "A wage schedule the awarding authority publishes before bids are opened on a public project",
              "A tally of apprentice hours the sponsor files with the Registration Agency each quarter",
              "A licence roster showing which classifications the contractor is permitted to employ",
            ],
            correctIndex: 0,
            explanation:
              "It records the work classification, rate of pay and craft of each employee on the project, which is why journeyman appears in it as a classification.",
            sourceLessonSlug: "the-date-on-the-number",
          },
          {
            prompt: "What is an ordinance?",
            options: [
              "A city or county law",
              "A rule an administrative board adopts to implement a statute the legislature has passed",
              "A model code that a jurisdiction may adopt by reference in whole or in part",
              "A condition attached to an individual licence when the board approves an application",
            ],
            correctIndex: 0,
            explanation:
              "In Indianapolis the ordinances are collected in the Revised Code of the Consolidated City and County, which is where chapter 875 lives.",
            sourceLessonSlug: "the-date-on-the-number",
          },
          {
            prompt: "What is chapter 875 of the Indianapolis Revised Code called?",
            options: [
              "Construction Skilled Trades",
              "Licensing and Regulation of Electrical Contractors, which is the whole subject of the chapter",
              "Building and Construction Standards, covering permits, inspections and trade licences together",
              "Responsible Bidding Practices, which governs contractors working on city projects",
            ],
            correctIndex: 0,
            explanation:
              "Chapter 875 is Construction Skilled Trades. Licensing and Regulation of Electrical Contractors is article II inside it.",
            sourceLessonSlug: "the-date-on-the-number",
          },
          {
            prompt: "Whom does article II of chapter 875 license and regulate?",
            options: [
              "Electrical contractors",
              "Plumbing contractors, whose licensing the city took over from the state commission",
              "Every skilled trade the chapter covers, under one combined licensing provision",
              "Heating and cooling contractors, together with the wrecking contractors in the same article",
            ],
            correctIndex: 0,
            explanation:
              "Article II covers the licensing and regulation of electrical contractors. Other trades sit in their own articles of the same chapter.",
            sourceLessonSlug: "the-date-on-the-number",
          },
          {
            prompt: "What finding does lesson 2 say made this course worth building?",
            options: [
              "The search result was wrong",
              "That Indiana enforces an older edition of the electrical code than the one study guides recommend",
              "That the training pipelines charge the learner no tuition for the trade portion",
              "That the federal regulation recommends a minimum number of classroom hours each year",
            ],
            correctIndex: 0,
            explanation:
              "The finding is about search results rather than about wiring: the freely available answer described a licence the ordinance does not create.",
            sourceLessonSlug: "the-date-on-the-number",
          },
          {
            prompt: "Which two sections of the federal apprenticeship regulation does the refusal list quote directly?",
            options: [
              "29.5(b)(4) and 29.5(b)(12)",
              "29.4 and 30.1, covering apprenticeable occupations and the ban on discrimination in programmes",
              "29.2 and 29.5(b)(15), covering the definitions and the completion certificate",
              "29.5(b)(5) and 29.5(b)(7), covering the wage progression and the supervision ratio",
            ],
            correctIndex: 0,
            explanation:
              "Electronic media approved by the Registration Agency, and advanced standing granted by the sponsor equally to all applicants. Both are doors a third party cannot open.",
            sourceLessonSlug: "what-this-course-is",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 2 — The word journeyman, and its two separate lives
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "journeyworker-in-the-regulation",
      title: "3 · What federal regulation means by journeyworker",
      section: "Section 2 · The word journeyman, and its two separate lives",
      body: `The word has two lives, and almost every argument about it comes from mixing them. This lesson takes the federal one. The next takes the other.

**The definition, in full.** Federal apprenticeship regulation defines a journeyworker as "A worker who has attained a level of skill, abilities and competencies recognized within an industry as having mastered the skills and competencies required for the occupation" (29 C.F.R. § 29.2). The same definition notes the term's former usage, which is where journeyman comes from.

Read that sentence slowly, because three things are missing from it and their absence is the lesson. There is no government in it. There is no examination in it. And there is no permission in it. The recognition is "within an industry", not by a board. Nothing in the definition says a journeyworker may do anything a non-journeyworker may not.

**What the definition is actually for.** It does work in three places in the regulation, and all three are about running a programme rather than about permitting work.

- **Supervision and ratio.** A registered programme's standards must state "A numeric ratio of apprentices to journeyworkers consistent with proper supervision, training, safety, and continuity of employment" (29 C.F.R. § 29.5(b)(7)). The word exists so the ratio can be counted.
- **The end of the term.** An apprenticeship is the process of becoming one. The regulation ends the term with "Recognition for successful completion of apprenticeship evidenced by an appropriate certificate issued by the Registration Agency" (29 C.F.R. § 29.5(b)(15)). A certificate of completion is evidence of training.
- **The definitions around it.** The same section defines an apprentice as "A worker at least 16 years of age... who is employed to learn an apprenticeable occupation", a sponsor as "Any person, association, committee, or organization operating an apprenticeship program and in whose name the program is (or is to be) registered or approved", a Registration Agency as "The Office of Apprenticeship or a recognized State Apprenticeship Agency", and related instruction as "An organized and systematic form of instruction designed to provide the apprentice with the knowledge of the theoretical and technical subjects related to the apprentice's occupation".

**So the federal word licenses nobody.** There is no national journeyman licence and no federal definition of a journeyman as a holder of one. A person can be a journeyworker in the regulation's sense, with a completion certificate from a Registration Agency in their hand, and still be legally unable to pull a permit in their own name. That is not a contradiction. The two words are answering different questions.

**Why the confusion is so persistent.** On a jobsite the word does real work every day. It sets who supervises whom, it appears on the certified payroll, and it sets the wage step. All of that is true and none of it is a licence. A person who hears journeyman used correctly a hundred times a week can still be completely wrong about what it permits, because the correct usages are all about training and pay.

**The habit worth forming.** Whenever you meet the word, ask which life it is living in that sentence. Is this about training, supervision and pay, or about legal permission to perform and contract for work? If the sentence comes from a regulation about apprenticeship, it is the first. If it comes from a licensing statute or ordinance, it is the second. If it comes from a jobsite conversation, it is usually the first and is often being heard as the second.

:::reveal How does 29 C.F.R. 29.2 define a journeyworker? ||| As a worker who has attained a level of skill, abilities and competencies recognized within an industry as having mastered the skills and competencies required for the occupation.

:::reveal Three things are missing from the federal definition of journeyworker. What are they? ||| A government, an examination, and a permission. The recognition is within an industry, and the definition grants no authority to do anything.

:::reveal Why does the regulation need the word journeyworker at all? ||| So a programme's standards can state a numeric ratio of apprentices to journeyworkers consistent with proper supervision, training, safety and continuity of employment.

:::reveal What does a Registration Agency issue at the successful end of an apprenticeship? ||| A certificate recognising completion, which is evidence of training rather than a licence to perform or contract for work.

## Vocabulary
- **Journeyworker**: in federal apprenticeship regulation, a worker recognised within an industry as having mastered the occupation's skills and competencies.
- **Ratio**: the numeric relationship of apprentices to journeyworkers a registered programme must state, sized for proper supervision and safety.
- **Apprentice**: a worker at least 16 years of age who is employed to learn an apprenticeable occupation.
- **Completion certificate**: the recognition a Registration Agency issues at the end of a registered apprenticeship.
- **Indenture**: the agreement under which an apprentice is registered to a programme and begins accumulating hours.

## Sources
Labor Standards for the Registration of Apprenticeship Programs, 29 C.F.R. § 29.2 (2026). https://www.law.cornell.edu/cfr/text/29/29.2
Labor Standards for the Registration of Apprenticeship Programs, 29 C.F.R. § 29.5 (2026). https://www.law.cornell.edu/cfr/text/29/29.5`,
    },
    {
      slug: "a-licence-class-is-a-local-question",
      title: "4 · The other life of the word: a licence class",
      section: "Section 2 · The word journeyman, and its two separate lives",
      body: `The second life of the word is legal, and it is local. Whether a journeyman licence exists at all in your trade, who issues it, and what it permits are decided trade by trade and jurisdiction by jurisdiction. There are three possible answers, and all three are common.

**One: a state board licenses it.** A state agency or commission issues the licence, under a statute, with rules published in the state administrative code. Indiana does this for plumbing, and section 3 works that example in full.

**Two: only a city or county licenses it.** No state licence exists, and each municipality decides for itself. Indiana does this for electrical work, and the result is that the answer changes when you cross a county line.

**Three: nobody licenses it.** Some trades are not licensed at all at any level, and the word journeyman in them is purely a training and pay term.

**What a journeyman licence permits, where one exists.** Stated generally, and check your own rule before relying on it: the holder may perform the trade's work, often without direct supervision of the work itself, but may not contract, bid, or pull a permit in their own name. That is the master or contractor licence, and it normally adds a surety bond and liability insurance on top of the examination.

**What the word means where no licence exists.** It becomes a training and pay classification. It is what the completion certificate calls you, what the collective agreement calls you, and what the certified payroll records. It is a real and useful status. It is not a permission.

**Two questions, asked separately.** "Am I a journeyman?" and "Am I licensed?" are different questions with different answers, and in some cities the second one has no version that applies to a worker at all. Ask both, in that order, and never let an answer to one stand in for an answer to the other.

**Portability, which is the expensive surprise.** A card is not portable by default. Reciprocity is a specific written arrangement between two named jurisdictions, and where it exists it comes with paperwork. Indianapolis, for example, accepts a reciprocal applicant only with a letter from the other jurisdiction verifying the examination taken, the score, the passing grade, current licence status and reciprocity, sent directly from that jurisdiction to the board rather than carried by the applicant (Indianapolis Board of Electrical Examiners, n.d.; read 20 September 2026). Before moving, ask the receiving authority what it will accept, in writing, and ask before you need it.

**A practical consequence for anyone choosing a trade.** Two trades on the same jobsite can have completely different answers to all of this, which means "how do I become a journeyman" has no single answer even within one city. That is not a failure of the system to be tidy. It is the system, and knowing it is what keeps a person from studying for an examination that does not exist.

:::reveal What are the three possible answers to whether a journeyman licence exists in a given trade and place? ||| A state board licenses it, only a city or county licenses it, or nobody licenses it at all.

:::reveal Where a journeyman licence exists, what does it usually not permit? ||| Contracting, bidding or pulling a permit in the holder's own name. That normally requires the master or contractor licence, with a bond and insurance.

:::reveal Where no journeyman licence exists, what is the word doing? ||| Working as a training and pay classification: what the completion certificate, the collective agreement and the certified payroll call the worker.

:::reveal What does Indianapolis require from a reciprocal applicant, and who must send it? ||| A letter verifying the examination taken, the score, the passing grade, current licence status and reciprocity, sent directly to the board by the other jurisdiction rather than carried by the applicant.

## Vocabulary
- **Licence class**: a named category of licence created by a statute or ordinance, such as master, residential, journeyman or contractor.
- **Reciprocity**: a written arrangement under which one jurisdiction accepts a licence or examination from another, usually on stated conditions.
- **Surety bond**: money guaranteed to be available if a licence holder fails to meet an obligation, commonly required of contractors rather than of workers.
- **Pull a permit**: to apply to the building authority for permission to carry out work, which licensing schemes usually reserve to a contractor or master.
- **Collective agreement**: the contract between an employer or association and a union, which is one of the documents that uses journeyman as a pay classification.

## Sources
Indianapolis Board of Electrical Examiners. (n.d.). *Board of Electrical Examiners application* [PDF]. City of Indianapolis. Retrieved September 20, 2026, from https://media.graphassets.com/BM4sUhq0QMFY1xQCdx6i
Revised Code of the Consolidated City and County, ch. 875, art. II (Indianapolis-Marion Cnty., Ind. 2026). https://library.municode.com/in/indianapolis_-_marion_county/codes/code_of_ordinances`,
    },
    {
      slug: "section-2-quiz",
      title: "Section 2 quiz · The word and its two lives",
      section: "Section 2 · The word journeyman, and its two separate lives",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "How does 29 C.F.R. 29.2 define a journeyworker?",
            options: [
              "By skill recognised within an industry",
              "By an examination administered under contract to the state licensing board or commission",
              "By the number of on-the-job hours logged and certified by a signatory employer",
              "By a certificate the Registration Agency issues after a competency assessment it conducts",
            ],
            correctIndex: 0,
            explanation:
              "The definition is a worker who has attained a level of skill, abilities and competencies recognized within an industry as having mastered the occupation.",
            sourceLessonSlug: "journeyworker-in-the-regulation",
          },
          {
            prompt: "Which three things does lesson 3 point out are missing from the federal definition of journeyworker?",
            options: [
              "Government, examination, permission",
              "Wages, hours and supervision, all of which the regulation leaves to the collective agreement",
              "Age, citizenship and residency, which are set by each state rather than federally",
              "Safety training, first aid and a code examination, which the sponsor supplies separately",
            ],
            correctIndex: 0,
            explanation:
              "The recognition is within an industry rather than by a board, no test is named, and nothing in the definition grants authority to do anything.",
            sourceLessonSlug: "journeyworker-in-the-regulation",
          },
          {
            prompt: "Whose recognition does the federal definition of journeyworker rest on?",
            options: [
              "An industry's",
              "A state licensing board's, acting on the recommendation of the programme sponsor",
              "The federal Office of Apprenticeship's, which maintains a national register of journeyworkers",
              "The employer of record's, at the moment the final on-the-job hour is signed off",
            ],
            correctIndex: 0,
            explanation:
              "The words are recognized within an industry. That is deliberately not a government recognition, which is why the term licenses nobody.",
            sourceLessonSlug: "journeyworker-in-the-regulation",
          },
          {
            prompt: "What must a registered programme's standards state about apprentices and journeyworkers?",
            options: [
              "A numeric ratio",
              "A maximum number of apprentices per employer, fixed nationally at one for every four journeyworkers",
              "The journeyworkers' names and certificate numbers, filed annually with the Registration Agency",
              "A schedule showing which journeyworker supervises which apprentice on each work process",
            ],
            correctIndex: 0,
            explanation:
              "The standards must state a numeric ratio of apprentices to journeyworkers consistent with proper supervision, training, safety and continuity of employment.",
            sourceLessonSlug: "journeyworker-in-the-regulation",
          },
          {
            prompt: "What does 29 C.F.R. 29.5(b)(15) require at the successful end of an apprenticeship?",
            options: [
              "A completion certificate",
              "A licensing examination administered by the state agency that registered the programme",
              "A final wage step equal to the prevailing journeyworker rate for the trade and area",
              "A written recommendation from the employer of record, filed with the sponsor",
            ],
            correctIndex: 0,
            explanation:
              "Recognition for successful completion, evidenced by an appropriate certificate issued by the Registration Agency. It is evidence of training, not a licence.",
            sourceLessonSlug: "journeyworker-in-the-regulation",
          },
          {
            prompt: "How does 29 C.F.R. 29.2 define an apprentice?",
            options: [
              "A worker at least 16 learning the occupation",
              "A worker under 25 enrolled in a registered programme and attending related instruction",
              "A student enrolled in an accredited craft curriculum and placed with a participating employer",
              "A trainee who has completed a pre-apprenticeship and been accepted by a sponsor",
            ],
            correctIndex: 0,
            explanation:
              "A worker at least 16 years of age who is employed to learn an apprenticeable occupation. Employment is part of the definition.",
            sourceLessonSlug: "journeyworker-in-the-regulation",
          },
          {
            prompt: "How does 29 C.F.R. 29.2 define related instruction?",
            options: [
              "Organised teaching of the occupation's theory",
              "Any training an employer provides beyond the work the apprentice performs on the jobsite",
              "The safety and orientation training an apprentice completes before being indentured",
              "The portion of a programme delivered by a community college for academic credit",
            ],
            correctIndex: 0,
            explanation:
              "An organised and systematic form of instruction designed to provide the apprentice with knowledge of the theoretical and technical subjects related to the occupation.",
            sourceLessonSlug: "journeyworker-in-the-regulation",
          },
          {
            prompt: "Can a person hold a federal completion certificate and still be unable to pull a permit in their own name?",
            options: [
              "Yes",
              "No, because a completion certificate is recognised as a licence in every state that has no licence of its own",
              "No, because the Registration Agency notifies the local authority when a programme completes",
              "Only in states that have their own State Apprenticeship Agency rather than a federal office",
            ],
            correctIndex: 0,
            explanation:
              "The two words answer different questions. A completion certificate is evidence of training, and permits are a licensing matter decided locally.",
            sourceLessonSlug: "journeyworker-in-the-regulation",
          },
          {
            prompt: "Why does lesson 3 say the confusion about the word is so persistent?",
            options: [
              "Every daily use is correct",
              "Because the regulation uses journeyman and journeyworker interchangeably without defining either",
              "Because licensing boards publish the federal definition on their own application forms",
              "Because collective agreements are written to match the statutory licence classes exactly",
            ],
            correctIndex: 0,
            explanation:
              "It sets supervision, appears on the certified payroll and sets the wage step. All of those uses are true, and none of them is a licence.",
            sourceLessonSlug: "journeyworker-in-the-regulation",
          },
          {
            prompt: "When you meet the word journeyman in a sentence, what should you ask first?",
            options: [
              "Which of its two lives applies",
              "Whether the speaker holds the credential themselves, since usage varies by trade",
              "Which state the speaker learned the trade in, since the word travels with the worker",
              "Whether the sentence is about a union or a non-union employer, since only one uses the term",
            ],
            correctIndex: 0,
            explanation:
              "Training, supervision and pay, or legal permission to perform and contract for work. A regulation about apprenticeship means the first sense.",
            sourceLessonSlug: "journeyworker-in-the-regulation",
          },
          {
            prompt: "Is there a national journeyman licence in the United States?",
            options: [
              "No",
              "Yes, issued by the Office of Apprenticeship on completion of a registered programme",
              "Yes, but only for the trades whose occupations are listed as apprenticeable",
              "Only for trades on federal projects, where the federal classification replaces the local one",
            ],
            correctIndex: 0,
            explanation:
              "There is no national journeyman licence and no federal definition of a journeyman as a licence holder. The federal word is a training term.",
            sourceLessonSlug: "journeyworker-in-the-regulation",
          },
          {
            prompt: "How does 29 C.F.R. 29.2 define a sponsor?",
            options: [
              "Whoever operates the programme in whose name it is registered",
              "The employer that signs the apprenticeship agreement and pays the apprentice's wages",
              "The government office that approves a programme and issues its completion certificates",
              "The association that writes the curriculum and supplies the classroom instructors",
            ],
            correctIndex: 0,
            explanation:
              "Any person, association, committee or organisation operating an apprenticeship programme and in whose name the programme is or is to be registered or approved.",
            sourceLessonSlug: "journeyworker-in-the-regulation",
          },
          {
            prompt: "What is a Registration Agency, in the regulation's own words?",
            options: [
              "The Office of Apprenticeship, or a recognised state agency",
              "Any state department of labour, whether or not it has been recognised for apprenticeship",
              "The joint committee that registers apprentices and keeps their hour records for the trade",
              "The accrediting body that approves the curriculum a registered programme delivers",
            ],
            correctIndex: 0,
            explanation:
              "The definition names the Office of Apprenticeship or a recognized State Apprenticeship Agency, and which one applies depends on the state.",
            sourceLessonSlug: "journeyworker-in-the-regulation",
          },
          {
            prompt: "What are the three possible answers to whether a journeyman licence exists in a given trade and place?",
            options: [
              "State, local, or none",
              "State board, federal office, or joint labour and management committee",
              "Licensed, registered, or certified, depending on how the statute is drafted",
              "Mandatory, voluntary, or reciprocal, depending on the trade's risk classification",
            ],
            correctIndex: 0,
            explanation:
              "A state board licenses it, only a city or county licenses it, or nobody licenses it at all. All three are common.",
            sourceLessonSlug: "a-licence-class-is-a-local-question",
          },
          {
            prompt: "Where a journeyman licence exists, what does it typically permit?",
            options: [
              "Performing the trade's work",
              "Contracting for work and pulling permits, provided the holder carries liability insurance",
              "Supervising apprentices, but not performing the trade's work without a master present",
              "Working anywhere in the state that issued it, without further registration",
            ],
            correctIndex: 0,
            explanation:
              "It generally permits performing the work, often without direct supervision of the work itself, and stops short of contracting, bidding or pulling a permit.",
            sourceLessonSlug: "a-licence-class-is-a-local-question",
          },
          {
            prompt: "Which licence normally carries the bond and the liability insurance?",
            options: [
              "The contractor or master licence",
              "The journeyman licence, because the journeyman performs the work that creates the risk",
              "Neither, because bonding is a condition of the building permit rather than of the licence",
              "Whichever licence the worker holds, since both classes carry the same conditions",
            ],
            correctIndex: 0,
            explanation:
              "Contracting licences normally add a surety bond and liability insurance on top of the examination, because contracting is what creates the obligation.",
            sourceLessonSlug: "a-licence-class-is-a-local-question",
          },
          {
            prompt: "Where no journeyman licence exists, what is the word journeyman doing?",
            options: [
              "Classifying training and pay",
              "Describing a licence issued by the neighbouring county and honoured locally by custom",
              "Naming an interim status held between completing the hours and passing the examination",
              "Marking a worker who may work unsupervised but may not train apprentices",
            ],
            correctIndex: 0,
            explanation:
              "It is what the completion certificate, the collective agreement and the certified payroll call the worker. A real status, and not a permission.",
            sourceLessonSlug: "a-licence-class-is-a-local-question",
          },
          {
            prompt: "Which two questions does lesson 4 say must be asked separately?",
            options: [
              "Am I a journeyman, and am I licensed",
              "Which trade pays best, and which trade has the shortest apprenticeship",
              "Who is hiring, and which sponsor has the next intake open",
              "What does the examination cost, and how many attempts am I allowed",
            ],
            correctIndex: 0,
            explanation:
              "They are different questions with different answers, and in some cities the second has no version that applies to a worker at all.",
            sourceLessonSlug: "a-licence-class-is-a-local-question",
          },
          {
            prompt: "Is a trade licence portable between jurisdictions by default?",
            options: [
              "No",
              "Yes, under the federal rule requiring states to honour one another's trade licences",
              "Yes within a single state, because a city licence is issued under state authority",
              "Yes for any licence earned through a registered apprenticeship, since the certificate is national",
            ],
            correctIndex: 0,
            explanation:
              "Reciprocity is a specific written arrangement between two named jurisdictions, and where it exists it comes with paperwork and conditions.",
            sourceLessonSlug: "a-licence-class-is-a-local-question",
          },
          {
            prompt: "What must a reciprocal applicant to the Indianapolis board supply, as read on 20 September 2026?",
            options: [
              "A letter from the other jurisdiction",
              "A notarised affidavit from a current licence holder in the applicant's former jurisdiction",
              "A transcript from the apprenticeship sponsor showing the hours completed in each work process",
              "A copy of the other jurisdiction's ordinance, certified by its clerk within the past year",
            ],
            correctIndex: 0,
            explanation:
              "The letter verifies the examination taken, the score, the passing grade, current licence status and reciprocity, and is sent directly to the board.",
            sourceLessonSlug: "a-licence-class-is-a-local-question",
          },
          {
            prompt: "Who sends the Indianapolis board the reciprocity verification letter?",
            options: [
              "The other jurisdiction",
              "The applicant, who must enclose it sealed with the rest of the application package",
              "The testing vendor that administered the original examination, on the applicant's request",
              "The applicant's current employer, on letterhead, confirming continuous employment in the trade",
            ],
            correctIndex: 0,
            explanation:
              "It is sent directly from the other jurisdiction to the board, rather than carried by the applicant, which is a common design in reciprocity paperwork.",
            sourceLessonSlug: "a-licence-class-is-a-local-question",
          },
          {
            prompt: "What does lesson 4 advise doing before moving to another state to work in a licensed trade?",
            options: [
              "Ask the receiving authority in writing",
              "Apply for the destination licence first and let the current one lapse to avoid duplicate fees",
              "Join the trade's union local in the destination state, which handles the transfer",
              "Wait until arriving, since most authorities only accept applications from residents",
            ],
            correctIndex: 0,
            explanation:
              "Ask what the receiving authority will accept, in writing, and ask before you need it. Reciprocity is a specific arrangement rather than a default.",
            sourceLessonSlug: "a-licence-class-is-a-local-question",
          },
          {
            prompt: "Why does the question how do I become a journeyman have no single answer even inside one city?",
            options: [
              "Trades are regulated separately",
              "Because each union local sets its own definition of journey status for its members",
              "Because the answer depends on whether the worker started before or after the current ordinance",
              "Because the federal and state definitions of the word conflict with one another",
            ],
            correctIndex: 0,
            explanation:
              "Two trades on the same jobsite can be under completely different regimes, one state licensed and one not licensed at all.",
            sourceLessonSlug: "a-licence-class-is-a-local-question",
          },
          {
            prompt: "What does lesson 4 say knowing the local answer protects a person from?",
            options: [
              "Studying for an examination that does not exist",
              "Paying a licensing fee twice in the same year to two different authorities",
              "Being placed with an employer that is not signatory to the trade's agreement",
              "Accepting a wage step below the one their completed hours entitle them to",
            ],
            correctIndex: 0,
            explanation:
              "That is the practical cost of the wrong answer, and it is exactly what the commercial guides in lesson 2 would have led a reader into.",
            sourceLessonSlug: "a-licence-class-is-a-local-question",
          },
          {
            prompt: "In which of the three regimes does Indiana place plumbing?",
            options: [
              "A state board licenses it",
              "Only cities and counties license it, with Indianapolis issuing the journeyman plumber card",
              "Nobody licenses it, so the word is purely a pay classification in that trade",
              "The state registers plumbers but leaves the examination to each municipality",
            ],
            correctIndex: 0,
            explanation:
              "Indiana licenses plumbing through a state commission. Section 3 works that example in full and sets it against the electrical regime.",
            sourceLessonSlug: "a-licence-class-is-a-local-question",
          },
          {
            prompt: "In which of the three regimes does Indiana place electrical work?",
            options: [
              "Only cities and counties license it",
              "A state board licenses it, with municipalities administering the examination locally",
              "Nobody licenses it at any level, so no permit is required for electrical work",
              "The state licenses contractors and the cities license workers, splitting the two classes",
            ],
            correctIndex: 0,
            explanation:
              "There is no state electrical licence in Indiana, so each municipality decides, and the answer can change when you cross a county line.",
            sourceLessonSlug: "a-licence-class-is-a-local-question",
          },
          {
            prompt: "What is a surety bond, in trade licensing?",
            options: [
              "Money guaranteed against a failure to perform",
              "A deposit refunded to the licence holder once the licence has been held for a full term",
              "An insurance policy covering injury to the licence holder's own employees on a jobsite",
              "A fee paid to the board to cover the cost of investigating complaints against licence holders",
            ],
            correctIndex: 0,
            explanation:
              "It guarantees money is available if a licence holder fails to meet an obligation, which is why it attaches to contracting rather than to working.",
            sourceLessonSlug: "a-licence-class-is-a-local-question",
          },
          {
            prompt: "What does it mean to pull a permit?",
            options: [
              "To apply to the building authority",
              "To remove a stop-work notice after the cited hazard has been corrected",
              "To withdraw a licence application before the board has considered it",
              "To claim a wage classification on a certified payroll for a public project",
            ],
            correctIndex: 0,
            explanation:
              "It is applying to the building authority for permission to carry out work, and licensing schemes usually reserve it to a contractor or master.",
            sourceLessonSlug: "a-licence-class-is-a-local-question",
          },
          {
            prompt: "Which document uses journeyman as a pay classification rather than as a licence?",
            options: [
              "A collective agreement",
              "A state administrative rule setting the examination content for the trade",
              "A municipal ordinance creating the classes of licence a board may approve",
              "A candidate information bulletin published by the testing vendor",
            ],
            correctIndex: 0,
            explanation:
              "The collective agreement and the certified payroll both use it that way, which is one of the reasons the two senses get mixed.",
            sourceLessonSlug: "a-licence-class-is-a-local-question",
          },
          {
            prompt: "Which sense of journeyman is in play when a jobsite conversation uses the word?",
            options: [
              "Usually training and pay",
              "Always the licensing sense, because workers use the word the way the ordinance does",
              "Neither, because the word on site refers only to seniority within the crew",
              "Both equally, since the two senses are defined to match in most jurisdictions",
            ],
            correctIndex: 0,
            explanation:
              "Lesson 3 says it is usually the training sense and is often heard as the licensing one, which is where the mistake starts.",
            sourceLessonSlug: "journeyworker-in-the-regulation",
          },
          {
            prompt: "What does an apprenticeship do, in relation to the word journeyworker?",
            options: [
              "It is the process of becoming one",
              "It registers the worker as one from the day of indenture, with the pay step following later",
              "It substitutes for the state examination in jurisdictions that license the trade",
              "It confers the status only if the worker also completes related instruction at a college",
            ],
            correctIndex: 0,
            explanation:
              "The term ends with recognition for successful completion, evidenced by a certificate issued by the Registration Agency.",
            sourceLessonSlug: "journeyworker-in-the-regulation",
          },
          {
            prompt: "Which of these is evidence of training rather than a legal permission?",
            options: [
              "A completion certificate",
              "A master licence issued by a municipal board of electrical examiners",
              "A journeyman plumber licence issued by a state plumbing commission",
              "A building permit issued for a specific address and scope of work",
            ],
            correctIndex: 0,
            explanation:
              "The certificate records that a registered apprenticeship was completed. The other three are permissions granted by an authority.",
            sourceLessonSlug: "journeyworker-in-the-regulation",
          },
          {
            prompt: "Where would you look to find whether your own trade has a journeyman licence in your city?",
            options: [
              "The rule that creates licences",
              "The union local's website, which lists the classifications recognised in the area",
              "The testing vendor's catalogue of examinations offered in that state",
              "The employer's certified payroll classifications for public projects in that county",
            ],
            correctIndex: 0,
            explanation:
              "The statute, ordinance or administrative rule that creates licence classes is the only document that settles whether a class exists.",
            sourceLessonSlug: "a-licence-class-is-a-local-question",
          },
          {
            prompt: "What does the regulation's numeric ratio requirement exist to protect?",
            options: [
              "Supervision and safety",
              "The wage scale, by limiting how many low-paid apprentices an employer may hire",
              "The union's membership numbers, by capping intake to the work available",
              "The Registration Agency's records, by fixing how many files a programme may open",
            ],
            correctIndex: 0,
            explanation:
              "The clause requires a ratio consistent with proper supervision, training, safety and continuity of employment.",
            sourceLessonSlug: "journeyworker-in-the-regulation",
          },
          {
            prompt: "In which kind of document does the licensing sense of journeyman appear?",
            options: [
              "A licensing statute or ordinance",
              "The federal apprenticeship regulation, which defines the licence classes each state may create",
              "A programme's written apprenticeship standards, which set the licence the graduate receives",
              "A certified payroll, which records each worker's licence number and class",
            ],
            correctIndex: 0,
            explanation:
              "Only a statute, ordinance or administrative rule creates a licence class. The apprenticeship regulation and the payroll both use the training sense.",
            sourceLessonSlug: "a-licence-class-is-a-local-question",
          },
          {
            prompt: "What is the minimum age in the federal definition of an apprentice?",
            options: [
              "16",
              "18, matching the minimum age most state licensing commissions set for their own licences",
              "17, with an exception for programmes operated jointly with a secondary school",
              "21, because the definition requires the apprentice be employable on a commercial jobsite",
            ],
            correctIndex: 0,
            explanation:
              "The definition is a worker at least 16 years of age who is employed to learn an apprenticeable occupation.",
            sourceLessonSlug: "journeyworker-in-the-regulation",
          },
          {
            prompt: "What does the federal definition of journeyworker note about the term's history?",
            options: [
              "Its former usage",
              "That it was replaced in every state code by the gender-neutral form in the same year",
              "That it originally described a worker paid by the day rather than by the piece",
              "That it entered the regulation only when apprenticeship registration began",
            ],
            correctIndex: 0,
            explanation:
              "The definition notes the term's former usage, which is where the older word journeyman comes from.",
            sourceLessonSlug: "journeyworker-in-the-regulation",
          },
          {
            prompt: "If a sentence about journeymen comes from a regulation about apprenticeship, which sense is it using?",
            options: [
              "The training sense",
              "The licensing sense, because apprenticeship regulation sets the qualification for the licence",
              "Both at once, because the regulation defines the word for licensing purposes too",
              "Neither, because the regulation uses journeyworker exclusively and never journeyman",
            ],
            correctIndex: 0,
            explanation:
              "Apprenticeship regulation is about training, supervision and pay. Legal permission to work and contract comes from a licensing statute or ordinance.",
            sourceLessonSlug: "journeyworker-in-the-regulation",
          },
          {
            prompt: "What happens to the answer about electrical licensing when you cross a county line in Indiana?",
            options: [
              "It can change",
              "Nothing, because a municipal licence is valid throughout the state that authorised the city to issue it",
              "Nothing, because the state code sets a uniform standard every municipality must apply",
              "It lapses for ninety days, after which the holder must register with the new authority",
            ],
            correctIndex: 0,
            explanation:
              "With no state electrical licence, each municipality decides for itself, so the requirement genuinely differs from place to place.",
            sourceLessonSlug: "a-licence-class-is-a-local-question",
          },
          {
            prompt: "Which status does a certified payroll record for a worker on a public project?",
            options: [
              "A work classification",
              "A licence number, verified against the issuing authority's register before payment",
              "A completion certificate number issued by the federal Office of Apprenticeship",
              "A union membership number, together with the local that issued it",
            ],
            correctIndex: 0,
            explanation:
              "Work classification, rate of pay and craft, which is exactly the one place the Indianapolis code uses the word journeyman.",
            sourceLessonSlug: "a-licence-class-is-a-local-question",
          },
          {
            prompt: "What does lesson 4 say about a trade that nobody licenses?",
            options: [
              "It is a common outcome",
              "It does not exist in the United States, because every construction trade is licensed somewhere",
              "It means the trade is unregulated in every respect, including safety and building permits",
              "It means the federal completion certificate becomes the operative permission",
            ],
            correctIndex: 0,
            explanation:
              "Some trades are not licensed at any level, and in those trades the word journeyman is purely a training and pay term.",
            sourceLessonSlug: "a-licence-class-is-a-local-question",
          },
          {
            prompt: "Who decides what a journeyman licence permits, where one exists?",
            options: [
              "The jurisdiction that created it",
              "The sponsor of the apprenticeship, in the written standards it files on registering",
              "The federal Office of Apprenticeship, which sets a floor every state licence must meet",
              "The testing vendor, through the content outline it publishes for the examination",
            ],
            correctIndex: 0,
            explanation:
              "The statute, ordinance or rule that creates the class also sets its scope, which is why the general description in lesson 4 has to be checked locally.",
            sourceLessonSlug: "a-licence-class-is-a-local-question",
          },
          {
            prompt: "What is an indenture, as the course uses the word?",
            options: [
              "Registering an apprentice to a programme",
              "The written standards a sponsor files with the Registration Agency before enrolling anyone",
              "The contract between a licensed contractor and the owner for a specific job",
              "The bond a contractor posts before a municipal board will issue a licence",
            ],
            correctIndex: 0,
            explanation:
              "It is the agreement under which an apprentice is registered to a programme and begins accumulating hours toward the term.",
            sourceLessonSlug: "journeyworker-in-the-regulation",
          },
          {
            prompt: "Why does lesson 3 say a person can hear the word used correctly and still be wrong about it?",
            options: [
              "The correct uses are all about training",
              "Because the word is pronounced the same in both senses and only the spelling differs",
              "Because licensing boards use the word loosely in their published application materials",
              "Because the federal and local definitions were harmonised and then diverged again",
            ],
            correctIndex: 0,
            explanation:
              "Supervision, payroll and the wage step are all genuine daily uses, and none of them is a permission, so nothing in daily use corrects the mistake.",
            sourceLessonSlug: "journeyworker-in-the-regulation",
          },
          {
            prompt: "What is the order lesson 4 recommends for the two questions?",
            options: [
              "Journeyman first, licence second",
              "Licence first, because without it the training status has no practical effect",
              "Either order, because the answers are always consistent with one another",
              "Neither, because the sponsor answers both at the end of the programme",
            ],
            correctIndex: 0,
            explanation:
              "Ask both, in that order, and never let an answer to one stand in for an answer to the other.",
            sourceLessonSlug: "a-licence-class-is-a-local-question",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 3 — Who decides, worked on one state and one city
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "no-state-electrical-licence",
      title: "5 · Indiana electrical: no state licence, and no journeyman card",
      section: "Section 3 · Who decides, worked on one state and one city",
      body: `The Indianapolis Board of Electrical Examiners publishes an application form, and it opens with a sentence worth memorising: "Licensing is at the discretion of the local municipality in the state of Indiana. There is not a state electrical license." That is the licensing authority telling you, in its own document, that there is no statewide answer to the question you came with (Indianapolis Board of Electrical Examiners, n.d.; read 20 September 2026).

**What the city does license.** Chapter 875 of the Revised Code is Construction Skilled Trades, and article II covers the licensing and regulation of electrical contractors. Section 875-202 creates two classes and no others: master, for electrical work without limitation, and residential, for one- or two-family residential structures as defined in the Indiana Residential Code. No journeyman class exists.

**Who the board is.** Section 875-203 puts eight members on it. Seven are appointed by the mayor for two-year terms, five of those being licence holders and two being members of the public, and there is also a non-voting licence administrator. That composition is worth knowing before you appear in front of it, because the people deciding your application are mostly working licence holders.

**The provision that changes what the licence means.** Section 875-201 says a person not licensed under the article who is employed by a licensed electrical contractor "may, however, accomplish electrical work while working under the direction and control of a person who is a licensed electrical contractor."

Read that twice. In Indianapolis an unlicensed worker may lawfully do electrical work all day, so long as they are employed by a licensed contractor and working under that contractor's direction and control. The licence is about who may contract and pull the permit. It is not about who may hold the conduit bender. That is a genuinely different regime from a journeyman-card state, where the worker's own card is the permission, and it is the reason the ordinance has no worker class to create.

**The rest of the chapter, and what it tells you.** Indianapolis licenses or registers, article by article: contractors generally, electrical contractors, heating and cooling contractors, wrecking contractors, and the registration of plumbing contractors, with fees and penalties in their own article. Every one of those is a contractor licence or registration. Not one of them is a worker's card. Plumbing appears as registration only, because plumbing licensure in Indiana belongs to the state, which is the subject of the next lesson.

**What this means for a person planning a career here.** The path to working is employment with a licensed contractor. The path to a licence is the contractor licence, which is a different and much later decision involving experience, an examination, a bond and insurance. Section 7 covers those. What matters now is that the two paths are separate, and that a person can spend an entire working life in the first one without ever needing the second.

:::reveal What does the first sentence of the Indianapolis Board of Electrical Examiners application say about state licensing? ||| That licensing is at the discretion of the local municipality in the state of Indiana, and that there is not a state electrical license.

:::reveal Who sits on the Indianapolis Board of Electrical Examiners under section 875-203? ||| Eight members: seven appointed by the mayor for two-year terms, five of them licence holders and two members of the public, plus a non-voting licence administrator.

:::reveal Under section 875-201, may an unlicensed person do electrical work in Indianapolis? ||| Yes, if employed by a licensed electrical contractor and working under that contractor's direction and control.

:::reveal Every licence in chapter 875 is a licence for whom? ||| Contractors. The chapter licenses or registers contractors article by article, and creates no worker's card in any trade.

## Vocabulary
- **Board of examiners**: the body a municipality appoints to approve licence applications, set the examination and discipline licence holders.
- **Direction and control**: the ordinance's condition under which an unlicensed employee of a licensed electrical contractor may lawfully perform electrical work.
- **Article**: a numbered division inside a chapter of a code, each covering one trade or subject.
- **Registration**: a lighter requirement than a licence, used in Indianapolis for plumbing contractors because the licence itself is the state's.

## Sources
Indianapolis Board of Electrical Examiners. (n.d.). *Board of Electrical Examiners application* [PDF]. City of Indianapolis. Retrieved September 20, 2026, from https://media.graphassets.com/BM4sUhq0QMFY1xQCdx6i
Revised Code of the Consolidated City and County, ch. 875, art. II (Indianapolis-Marion Cnty., Ind. 2026). https://library.municode.com/in/indianapolis_-_marion_county/codes/code_of_ordinances`,
    },
    {
      slug: "indiana-plumbing-is-a-state-licence",
      title: "6 · Indiana plumbing: a real journeyman licence, and how to check your own",
      section: "Section 3 · Who decides, worked on one state and one city",
      body: `Now the same state, the same city, the same jobsite, and the opposite answer.

**The Indiana Plumbing Commission, inside the Professional Licensing Agency, issues plumbing licences for the whole state.** The licence types are Plumbing Apprentice, Journeyman Plumber, Plumbing Contractor, Temporary Plumbing Contractor, Plumbing Corporation and Plumbing Apprenticeship School. The journeyman is second on that list, and it is a state licence with a statute behind it: Indiana Code 25-28.5, and the rules at 860 IAC 1-1 and 860 IAC 2-1 (Indiana Professional Licensing Agency, n.d.; read 20 September 2026).

**What a Journeyman Plumber applicant must show.** Be at least 18. Then either complete four years in an approved Indiana apprenticeship programme, evidenced by a Plumbing Apprenticeship Certificate of Completion, or hold a current out-of-state plumbing licence showing four years of experience in the plumbing trade. The Commission must review and approve the application before the candidate may register for the examination at all. The examination is administered by Prov. Application and renewal fees were each $30.00, with late renewal at $45.00 after 31 December and $130.00 after 1 March, as published on 20 September 2026.

**Notice what the approved apprenticeship is doing there.** It is not a suggestion. For an Indiana applicant without an out-of-state licence, the apprenticeship is the route, and the certificate of completion is the evidence. This is where section 4's regulation stops being abstract: the written standards a sponsor files are the thing that eventually produces the document a state commission will accept.

**The contrast, stated plainly.** On one jobsite in Indianapolis, the plumber's journeyman card is a state licence reached through an approved apprenticeship, and the electrician's journeyman card does not exist. Neither trade is unusual. Both arrangements are ordinary. The only way to know which one you are standing in is to read the rule that creates the licence.

**The drill, and it is the point of this whole section.** Do this for your own trade and your own place, and write down what you find.

1. **Name the trade and the place.** Trade, city, county, state. All four, because the answer can hang on any of them.
2. **Find the state authority first.** Search for your state's professional licensing agency and your trade. If a state board licenses the trade, its page will list the licence types. Read the list. If your trade's journeyman class is not on it, that is a finding, not a dead end.
3. **Then find the local one.** Search for your city or county code of ordinances and the words licensing and your trade. Look for the section headed types of licenses or similar. That section, not a summary of it, is what settles the question.
4. **Write down four things.** The name of the authority. The citation of the rule, chapter and section. What the rule actually says the licence classes are. And the date you read it.
5. **Then telephone.** Ask the authority one question: is this current. A document from the right office can still be behind, and the call costs nothing.

If steps 2 and 3 both come back empty, that is a real answer too: your trade may not be licensed where you live, and the word journeyman there is a training and pay term. Write that down with the date as well, because it is exactly the finding a commercial guide will contradict.

:::reveal Which Indiana body issues plumbing licences, and under what statute? ||| The Indiana Plumbing Commission, inside the Professional Licensing Agency, under Indiana Code 25-28.5 with rules at 860 IAC 1-1 and 860 IAC 2-1.

:::reveal What are the two routes to an Indiana Journeyman Plumber licence for an applicant aged at least 18? ||| Four years in an approved Indiana apprenticeship, evidenced by a Plumbing Apprenticeship Certificate of Completion, or a current out-of-state plumbing licence showing four years of experience in the trade.

:::reveal Who must approve an Indiana plumbing application before the candidate can register for the examination? ||| The Commission. Approval comes first, and only then may the candidate register with the testing vendor.

:::reveal In the drill, what four things do you write down after finding the rule? ||| The name of the authority, the citation of the rule by chapter and section, what the rule says the licence classes are, and the date you read it.

## Vocabulary
- **Professional Licensing Agency**: the Indiana state body that houses the boards and commissions licensing regulated occupations, including plumbing.
- **Indiana Administrative Code**: the published rules of state agencies, cited in the form 860 IAC 1-1, which carry the detail a statute leaves to the agency.
- **Certificate of Completion**: the document an approved Indiana plumbing apprenticeship issues, and the evidence the Commission accepts for the four years.
- **Approved apprenticeship**: an apprenticeship the licensing authority itself recognises, which is a narrower thing than any training a person happens to have done.

## Sources
Indiana Professional Licensing Agency. (n.d.). *Plumbing licensing information*. Retrieved September 20, 2026, from https://www.in.gov/pla/professions/plumbing-home/plumbing-licensing-information
Revised Code of the Consolidated City and County, ch. 875, art. II (Indianapolis-Marion Cnty., Ind. 2026). https://library.municode.com/in/indianapolis_-_marion_county/codes/code_of_ordinances`,
    },
    {
      slug: "section-3-quiz",
      title: "Section 3 quiz · Who decides",
      section: "Section 3 · Who decides, worked on one state and one city",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What does the Indianapolis Board of Electrical Examiners application say in its opening sentence about state licensing?",
            options: [
              "There is no state electrical licence",
              "That the state licence is issued by the Professional Licensing Agency and renewed every two years",
              "That a state licence is required before a municipality will consider a local application",
              "That the state licence covers residential work and the city licence covers commercial work",
            ],
            correctIndex: 0,
            explanation:
              "Licensing is at the discretion of the local municipality in the state of Indiana, and there is not a state electrical license. The authority says it in its own document.",
            sourceLessonSlug: "no-state-electrical-licence",
          },
          {
            prompt: "How many members sit on the Indianapolis Board of Electrical Examiners under section 875-203?",
            options: [
              "Eight",
              "Five, all of them holders of a master licence issued by the same board",
              "Twelve, appointed in equal numbers by the mayor and the city-county council",
              "Three, serving four-year terms staggered so that one seat turns over each year",
            ],
            correctIndex: 0,
            explanation:
              "Seven are appointed by the mayor for two-year terms, five of them licence holders and two members of the public, plus a non-voting licence administrator.",
            sourceLessonSlug: "no-state-electrical-licence",
          },
          {
            prompt: "How long are the mayoral appointments to that board?",
            options: [
              "Two years",
              "Four years, renewable once, with a limit of eight consecutive years on the board",
              "One year, with reappointment considered at the board's first meeting of each calendar year",
              "Indefinite, until the appointee resigns or ceases to hold a licence",
            ],
            correctIndex: 0,
            explanation:
              "Section 875-203 puts seven mayoral appointees on two-year terms, and adds a non-voting licence administrator.",
            sourceLessonSlug: "no-state-electrical-licence",
          },
          {
            prompt: "How many of the board's appointed members are licence holders, and how many are members of the public?",
            options: [
              "Five and two",
              "Four and three, a split designed to keep licence holders from holding a majority",
              "Six and one, with the single public member serving as the board's chair",
              "Seven and none, since only licence holders may judge an applicant's competence",
            ],
            correctIndex: 0,
            explanation:
              "Five licence holders and two members of the public, which means the people deciding an application are mostly working licence holders.",
            sourceLessonSlug: "no-state-electrical-licence",
          },
          {
            prompt: "Under section 875-201, on what condition may an unlicensed person perform electrical work in Indianapolis?",
            options: [
              "Under a licensed contractor's direction and control",
              "After registering with the board and paying the annual apprentice registration fee",
              "On one- or two-family residential structures only, and never on commercial premises",
              "For up to six years, being the experience the master licence application requires",
            ],
            correctIndex: 0,
            explanation:
              "The person must be employed by a licensed electrical contractor and working under that contractor's direction and control.",
            sourceLessonSlug: "no-state-electrical-licence",
          },
          {
            prompt: "What does section 875-201 show the Indianapolis electrical licence is really about?",
            options: [
              "Contracting and permits",
              "Competence, since only an examined person may touch energised equipment in the city",
              "Insurance, since the licence is the city's proof that a worker is covered on a jobsite",
              "Wages, since the licence class sets the rate a worker must be paid on city projects",
            ],
            correctIndex: 0,
            explanation:
              "An unlicensed worker may lawfully do the work under direction and control, so the licence governs who may contract and pull the permit.",
            sourceLessonSlug: "no-state-electrical-licence",
          },
          {
            prompt: "Which trades does chapter 875 license or register, article by article?",
            options: [
              "Contractors in several trades",
              "Workers in several trades, with a separate card for each classification the chapter recognises",
              "Only electrical contractors, the rest of the chapter covering permits and inspections",
              "Only the trades the state does not license, which is why plumbing is absent entirely",
            ],
            correctIndex: 0,
            explanation:
              "Contractors generally, electrical, heating and cooling, wrecking, and the registration of plumbing contractors, with fees and penalties in their own article.",
            sourceLessonSlug: "no-state-electrical-licence",
          },
          {
            prompt: "Why does plumbing appear in the Indianapolis chapter as registration rather than licensing?",
            options: [
              "The licence is the state's",
              "Because plumbing contractors are licensed by the county rather than by the consolidated city",
              "Because the chapter licenses only trades that require a written examination",
              "Because plumbing work in the city is performed under the building permit rather than a trade licence",
            ],
            correctIndex: 0,
            explanation:
              "Plumbing licensure in Indiana belongs to the state Plumbing Commission, so the city registers plumbing contractors rather than licensing them.",
            sourceLessonSlug: "no-state-electrical-licence",
          },
          {
            prompt: "For someone planning an electrical career in Indianapolis, what is the path to working?",
            options: [
              "Employment with a licensed contractor",
              "A city journeyman card, obtained by examination after four years of documented experience",
              "A state licence, followed by registration with the municipality where the work is performed",
              "A federal completion certificate, which the city accepts in place of its own licence",
            ],
            correctIndex: 0,
            explanation:
              "The worker path and the licence path are separate, and a person can work an entire career on the first without ever needing the second.",
            sourceLessonSlug: "no-state-electrical-licence",
          },
          {
            prompt: "Which classes of electrical licence does section 875-202 create?",
            options: [
              "Master and residential",
              "Master, journeyman and apprentice, matching the classifications on a certified payroll",
              "Contractor and worker, the second being available after four years of documented experience",
              "Unlimited, limited and maintenance, graded by the value of the work permitted",
            ],
            correctIndex: 0,
            explanation:
              "Two classes and no others. Master authorises work without limitation, residential covers one- or two-family residential structures.",
            sourceLessonSlug: "no-state-electrical-licence",
          },
          {
            prompt: "Which Indiana body issues plumbing licences?",
            options: [
              "The Indiana Plumbing Commission",
              "The Fire Prevention and Building Safety Commission, which also adopts the plumbing code",
              "The Department of Business and Neighborhood Services, for work inside Marion County",
              "The Department of Workforce Development, through its apprenticeship office",
            ],
            correctIndex: 0,
            explanation:
              "The Commission sits inside the Professional Licensing Agency and issues plumbing licences for the whole state.",
            sourceLessonSlug: "indiana-plumbing-is-a-state-licence",
          },
          {
            prompt: "Which plumbing licence types does the Indiana Professional Licensing Agency list?",
            options: [
              "Six, including Journeyman Plumber",
              "Two, a contractor licence and a worker registration, mirroring the city's electrical scheme",
              "Three, covering apprentice, master and corporation, with no journeyman class",
              "One, a single plumbing licence graded by the value of work the holder may perform",
            ],
            correctIndex: 0,
            explanation:
              "Plumbing Apprentice, Journeyman Plumber, Plumbing Contractor, Temporary Plumbing Contractor, Plumbing Corporation and Plumbing Apprenticeship School.",
            sourceLessonSlug: "indiana-plumbing-is-a-state-licence",
          },
          {
            prompt: "Which statute sits behind Indiana's plumbing licences?",
            options: [
              "Indiana Code 25-28.5",
              "Indiana Code 22-2, the labour title that also governs apprenticeship and wage payment",
              "675 IAC 16, the rule that adopts the plumbing code the examination is written against",
              "29 C.F.R. part 29, the federal regulation governing registered apprenticeship programmes",
            ],
            correctIndex: 0,
            explanation:
              "The statute is IC 25-28.5, with the rules at 860 IAC 1-1 and 860 IAC 2-1. The code adoption rule is a different document.",
            sourceLessonSlug: "indiana-plumbing-is-a-state-licence",
          },
          {
            prompt: "Which administrative rules carry the detail of Indiana's plumbing licensing?",
            options: [
              "860 IAC 1-1 and 860 IAC 2-1",
              "675 IAC 16-1.4 and 675 IAC 17-1.8, the state's plumbing and electrical code adoptions",
              "29 C.F.R. 29.5 and 29 C.F.R. 30.1, applied to the trade through the state's plan",
              "Chapter 875 articles II and V of the Indianapolis Revised Code",
            ],
            correctIndex: 0,
            explanation:
              "860 IAC 1-1 and 860 IAC 2-1 are the plumbing rules. The 675 IAC citations are code adoptions and belong to a different commission.",
            sourceLessonSlug: "indiana-plumbing-is-a-state-licence",
          },
          {
            prompt: "What is the minimum age for an Indiana Journeyman Plumber applicant?",
            options: [
              "18",
              "16, matching the minimum age in the federal definition of an apprentice",
              "21, because the licence permits unsupervised work on occupied premises",
              "There is none, provided the applicant holds the certificate of completion",
            ],
            correctIndex: 0,
            explanation:
              "At least 18, plus either the four-year approved apprenticeship or a qualifying out-of-state licence.",
            sourceLessonSlug: "indiana-plumbing-is-a-state-licence",
          },
          {
            prompt: "What are the two routes to an Indiana Journeyman Plumber licence?",
            options: [
              "Approved apprenticeship, or an out-of-state licence",
              "A written examination alone, or four years of documented employment with a licensed plumber",
              "A college programme in plumbing technology, or a military trade qualification",
              "Registration as a Plumbing Apprentice, or sponsorship by a Plumbing Corporation",
            ],
            correctIndex: 0,
            explanation:
              "Four years in an approved Indiana apprenticeship with a Plumbing Apprenticeship Certificate of Completion, or a current out-of-state licence showing four years in the trade.",
            sourceLessonSlug: "indiana-plumbing-is-a-state-licence",
          },
          {
            prompt: "What evidences the four years for the Indiana apprenticeship route?",
            options: [
              "A Certificate of Completion",
              "A notarised letter from the employer documenting each year of experience in the trade",
              "A transcript of related instruction hours issued by the school the programme used",
              "An affidavit from a licensed plumbing contractor who supervised the applicant",
            ],
            correctIndex: 0,
            explanation:
              "The Plumbing Apprenticeship Certificate of Completion is the evidence the Commission accepts for the approved apprenticeship route.",
            sourceLessonSlug: "indiana-plumbing-is-a-state-licence",
          },
          {
            prompt: "What must happen before an Indiana plumbing candidate can register for the examination?",
            options: [
              "The Commission must approve the application",
              "The candidate must pay the examination fee and the first year's licence fee together",
              "The candidate must complete an orientation session run by the testing vendor",
              "The candidate's sponsor must file the apprenticeship standards with the Commission",
            ],
            correctIndex: 0,
            explanation:
              "The application is reviewed and approved by the Commission first, and only then may the candidate register with the vendor.",
            sourceLessonSlug: "indiana-plumbing-is-a-state-licence",
          },
          {
            prompt: "Who administers Indiana's plumbing licensing examinations?",
            options: [
              "Prov",
              "The International Code Council, which also writes the Indianapolis electrical examination",
              "Prometric, which handles both the state examinations and the reciprocity verifications",
              "The Plumbing Commission itself, at its regular meetings in Indianapolis",
            ],
            correctIndex: 0,
            explanation:
              "Prov administers the state plumbing examinations under contract to the Commission, and separately administers a set of Marion County examinations.",
            sourceLessonSlug: "indiana-plumbing-is-a-state-licence",
          },
          {
            prompt: "What were the Indiana plumbing application and renewal fees, as published on 20 September 2026?",
            options: [
              "$30.00 each",
              "$75.00 each, the same as the fee the testing vendor charges for the journeyman examination",
              "$100.00 each, with a reduced rate for apprentices registered with an approved school",
              "$130.00 each, rising to $180.00 for applications filed after the renewal deadline",
            ],
            correctIndex: 0,
            explanation:
              "Application and renewal were each $30.00, with late renewal at $45.00 after 31 December and $130.00 after 1 March, on the date read.",
            sourceLessonSlug: "indiana-plumbing-is-a-state-licence",
          },
          {
            prompt: "What was the Indiana plumbing late renewal fee after 1 March, as published on 20 September 2026?",
            options: [
              "$130.00",
              "$45.00, which is the figure that applies at any point after the renewal deadline passes",
              "$80.00, matching the fee the vendor charges for a Marion County examination",
              "$30.00, because the state charges the ordinary renewal fee regardless of lateness",
            ],
            correctIndex: 0,
            explanation:
              "Late renewal was $45.00 after 31 December and $130.00 after 1 March. The two late figures are different and both were published.",
            sourceLessonSlug: "indiana-plumbing-is-a-state-licence",
          },
          {
            prompt: "What does the Indiana plumbing route show about the apprenticeship regulation taught in section 4?",
            options: [
              "It produces the document a state accepts",
              "It replaces the state requirement entirely for anyone who completes a registered programme",
              "It applies only to trades that no state licenses, which is why plumbing is the exception",
              "It sets the examination content the state commission must use",
            ],
            correctIndex: 0,
            explanation:
              "The written standards a sponsor files eventually produce the certificate of completion that the Commission will accept as the four years.",
            sourceLessonSlug: "indiana-plumbing-is-a-state-licence",
          },
          {
            prompt: "What is the contrast this section is built on?",
            options: [
              "One trade licensed, one not",
              "One trade examined by a national vendor and one examined by the city board itself",
              "One trade requiring an apprenticeship and one requiring only documented employment",
              "One trade regulated by ordinance and one regulated by collective agreement",
            ],
            correctIndex: 0,
            explanation:
              "On one Indianapolis jobsite the plumber's journeyman card is a state licence and the electrician's journeyman card does not exist.",
            sourceLessonSlug: "indiana-plumbing-is-a-state-licence",
          },
          {
            prompt: "In the drill, what four things must you name before searching?",
            options: [
              "Trade, city, county, state",
              "Trade, employer, union local and the date you intend to apply",
              "Trade, licence class, examination vendor and fee",
              "Trade, sponsor, programme length and wage step",
            ],
            correctIndex: 0,
            explanation:
              "All four, because the answer can hang on any of them. A county line can change the requirement in a state with no state licence.",
            sourceLessonSlug: "indiana-plumbing-is-a-state-licence",
          },
          {
            prompt: "In the drill, which authority do you check first?",
            options: [
              "The state one",
              "The city one, because a municipal ordinance always governs over a state rule for trades",
              "The testing vendor, because its catalogue lists every examination offered in the state",
              "The union local, because it knows which licences employers in the area actually require",
            ],
            correctIndex: 0,
            explanation:
              "Find the state professional licensing agency and your trade first. If the trade's journeyman class is not on its list, that is a finding rather than a dead end.",
            sourceLessonSlug: "indiana-plumbing-is-a-state-licence",
          },
          {
            prompt: "In the drill, which part of a local code do you look for?",
            options: [
              "The section creating licence types",
              "The penalty provisions, which list every class of licence the code recognises",
              "The permit fee schedule, which names each trade the city regulates",
              "The definitions section, which is where a code states who may perform the work",
            ],
            correctIndex: 0,
            explanation:
              "Look for the section headed types of licenses or similar. That section, and not a summary of it, settles whether a class exists.",
            sourceLessonSlug: "indiana-plumbing-is-a-state-licence",
          },
          {
            prompt: "What is the final step of the drill, after writing down what the rule says?",
            options: [
              "Telephone the authority",
              "Submit the application, since a rule read directly needs no further confirmation",
              "Compare the finding against two commercial licensing guides for agreement",
              "File the finding with the sponsor so it can be added to the apprenticeship standards",
            ],
            correctIndex: 0,
            explanation:
              "Ask one question: is this current. A document from the right office can still be behind, and the call costs nothing.",
            sourceLessonSlug: "indiana-plumbing-is-a-state-licence",
          },
          {
            prompt: "If both the state and the local search come back empty, what does that mean?",
            options: [
              "The trade may not be licensed there",
              "The search was performed incorrectly, since every construction trade is licensed somewhere",
              "The licence is issued at county level and will be found in the county's own code",
              "The federal completion certificate becomes the operative permission for that trade",
            ],
            correctIndex: 0,
            explanation:
              "That is a real answer. Write it down with the date, because it is exactly the finding a commercial guide will contradict.",
            sourceLessonSlug: "indiana-plumbing-is-a-state-licence",
          },
          {
            prompt: "What is an approved apprenticeship, in the licensing sense used by Indiana plumbing?",
            options: [
              "One the licensing authority itself recognises",
              "Any apprenticeship registered with the federal Office of Apprenticeship in any state",
              "Any training programme accredited by a national craft curriculum body",
              "Any period of employment under a licensed plumber that the employer will attest to",
            ],
            correctIndex: 0,
            explanation:
              "It is a narrower thing than any training a person happens to have done, and the certificate of completion is what proves it.",
            sourceLessonSlug: "indiana-plumbing-is-a-state-licence",
          },
          {
            prompt: "What is the Indiana Administrative Code, as cited in the form 860 IAC 1-1?",
            options: [
              "The published rules of state agencies",
              "The collected ordinances of Indiana's consolidated cities and counties",
              "The state's adopted building, plumbing and electrical codes in one volume",
              "The federal regulations as applied in Indiana by agreement with the Department of Labor",
            ],
            correctIndex: 0,
            explanation:
              "Agency rules carry the detail a statute leaves to the agency, which is why a licence question usually needs both the statute and the rule.",
            sourceLessonSlug: "indiana-plumbing-is-a-state-licence",
          },
          {
            prompt: "What is registration, as chapter 875 uses it for plumbing contractors?",
            options: [
              "A lighter requirement than a licence",
              "A temporary permission issued while a licence application is pending before the board",
              "The act of recording an apprentice with the Registration Agency at the start of a term",
              "The annual filing of a certified payroll by a contractor on public work",
            ],
            correctIndex: 0,
            explanation:
              "The city registers plumbing contractors because the licence itself belongs to the state Plumbing Commission.",
            sourceLessonSlug: "no-state-electrical-licence",
          },
          {
            prompt: "What is a board of examiners?",
            options: [
              "The body that approves applications and sets the exam",
              "A panel of state inspectors that reviews completed work before a permit is closed",
              "The committee inside a sponsor that decides which apprentices advance each term",
              "The vendor's proctoring staff, who verify identity and enforce reference rules",
            ],
            correctIndex: 0,
            explanation:
              "A municipality appoints it to approve licence applications, set the examination and discipline licence holders.",
            sourceLessonSlug: "no-state-electrical-licence",
          },
          {
            prompt: "Why does lesson 5 say the board's composition is worth knowing before you appear before it?",
            options: [
              "Most deciders are working licence holders",
              "Because public members outnumber licence holders and judge by different standards",
              "Because the board may waive the examination for applicants it interviews favourably",
              "Because the administrator votes and can break a tie on an application",
            ],
            correctIndex: 0,
            explanation:
              "Five of the seven appointed members are licence holders, so the people deciding an application are mostly people who hold the licence.",
            sourceLessonSlug: "no-state-electrical-licence",
          },
          {
            prompt: "What kind of document is the Indianapolis application form, in evidence terms?",
            options: [
              "The authority's own statement",
              "A secondary summary, which is why the course attributes rather than asserts what it says",
              "A commercial guide published by the vendor that administers the examination",
              "A model form published nationally and adopted locally without amendment",
            ],
            correctIndex: 0,
            explanation:
              "It is published by the licensing board itself, which is why its first sentence about state licensing can be quoted directly.",
            sourceLessonSlug: "no-state-electrical-licence",
          },
          {
            prompt: "What does the drill tell you to record alongside the rule and the authority?",
            options: [
              "The date you read it",
              "The name of the official who confirmed it and the time of the call",
              "The fee schedule in force at the time, so the cost can be budgeted",
              "The examination vendor's current bulletin number",
            ],
            correctIndex: 0,
            explanation:
              "The date is the step people skip, and it is what turns a finding into something you can check again later.",
            sourceLessonSlug: "indiana-plumbing-is-a-state-licence",
          },
          {
            prompt: "Which Indiana trade shows that an approved apprenticeship can be a licensing requirement rather than only a training route?",
            options: [
              "Plumbing",
              "Electrical, where the Indianapolis board requires a registered apprenticeship before examination",
              "Wrecking, where the city ordinance sets an apprenticeship as a condition of the licence",
              "Heating and cooling, where the state commission accepts only apprenticeship-trained applicants",
            ],
            correctIndex: 0,
            explanation:
              "For an Indiana applicant without an out-of-state licence, the four-year approved apprenticeship is the route to the journeyman plumber licence.",
            sourceLessonSlug: "indiana-plumbing-is-a-state-licence",
          },
          {
            prompt: "What does lesson 6 say is the only way to know which licensing regime you are standing in?",
            options: [
              "Read the rule that creates the licence",
              "Ask a licensed contractor in the trade who has worked in the area for several years",
              "Check which examinations the testing vendor offers in that state",
              "Look at how the classification appears on a certified payroll for local public work",
            ],
            correctIndex: 0,
            explanation:
              "Both arrangements are ordinary and neither trade is unusual, so only the creating document settles which one applies.",
            sourceLessonSlug: "indiana-plumbing-is-a-state-licence",
          },
          {
            prompt: "Where does chapter 875 put its fees and penalties?",
            options: [
              "In their own article",
              "In each trade's article, so every licence class states its own fee",
              "In the state administrative code, because municipal fees are set by the state",
              "In the board's published application form rather than in the ordinance",
            ],
            correctIndex: 0,
            explanation:
              "Fees and penalties sit in a separate article of the chapter, alongside the articles for each trade.",
            sourceLessonSlug: "no-state-electrical-licence",
          },
          {
            prompt: "What does the residential class in Indianapolis refer to, for its definition of structure?",
            options: [
              "The Indiana Residential Code",
              "The city's own zoning ordinance, which defines residential districts and permitted uses",
              "The federal apprenticeship regulation's definition of dwelling work processes",
              "The plumbing commission's rules, which define one- and two-family premises for both trades",
            ],
            correctIndex: 0,
            explanation:
              "The ordinance limits the residential licence to one- or two-family residential structures as defined in the Indiana Residential Code.",
            sourceLessonSlug: "no-state-electrical-licence",
          },
          {
            prompt: "Why is Indiana a good teaching case for who decides?",
            options: [
              "It shows two regimes at once",
              "Because it is the only state that licenses plumbing but not electrical work",
              "Because its municipalities have agreed a uniform licensing scheme across the state",
              "Because its licensing rules have not changed since the state code was first written",
            ],
            correctIndex: 0,
            explanation:
              "A state licence for one trade and purely municipal licensing for another, in the same city, on the same jobsite.",
            sourceLessonSlug: "indiana-plumbing-is-a-state-licence",
          },
          {
            prompt: "What kind of licence is a Temporary Plumbing Contractor licence, in the Indiana list?",
            options: [
              "One of six listed plumbing licence types",
              "A permit issued for a single job, expiring when the building permit is closed",
              "The status held by an applicant whose Commission review is still pending",
              "A licence for out-of-state contractors working under a reciprocity arrangement",
            ],
            correctIndex: 0,
            explanation:
              "The agency lists Plumbing Apprentice, Journeyman Plumber, Plumbing Contractor, Temporary Plumbing Contractor, Plumbing Corporation and Plumbing Apprenticeship School.",
            sourceLessonSlug: "indiana-plumbing-is-a-state-licence",
          },
          {
            prompt: "What is a Plumbing Apprenticeship School, in the Indiana licence list?",
            options: [
              "A licensed entity in its own right",
              "A private trade school that prepares candidates for the journeyman examination",
              "The classroom portion of any registered apprenticeship operating in the state",
              "A community college programme accredited to award the certificate of completion",
            ],
            correctIndex: 0,
            explanation:
              "It appears as one of the six licence types the Commission issues, which means the school itself is licensed rather than merely approved.",
            sourceLessonSlug: "indiana-plumbing-is-a-state-licence",
          },
          {
            prompt: "In Indianapolis, which comes first for an electrician: working or being licensed?",
            options: [
              "Working",
              "Being licensed, because no electrical work may be performed by an unlicensed person",
              "They happen together, because the board issues the licence on the first day of employment",
              "Neither, because the state issues the licence before a worker may be hired",
            ],
            correctIndex: 0,
            explanation:
              "A person may work under a licensed contractor's direction and control, and the contractor licence is a separate and much later decision.",
            sourceLessonSlug: "no-state-electrical-licence",
          },
          {
            prompt: "What does the Indiana plumbing route accept in place of the four-year apprenticeship?",
            options: [
              "A current out-of-state plumbing licence",
              "A federal completion certificate from a registered apprenticeship in any trade",
              "Four years of employment attested to by any licensed plumbing contractor",
              "A degree in plumbing technology from an accredited college",
            ],
            correctIndex: 0,
            explanation:
              "The out-of-state licence must be current and must show four years of experience in the plumbing trade.",
            sourceLessonSlug: "indiana-plumbing-is-a-state-licence",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 4 — Registered apprenticeship, in the regulation's own words
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "what-makes-an-occupation-apprenticeable",
      title: "7 · What makes an occupation apprenticeable",
      section: "Section 4 · Registered apprenticeship, in the regulation's own words",
      body: `Not every job can be an apprenticeship. Federal regulation sets four tests, and an occupation has to meet all of them (29 C.F.R. § 29.4). The occupation must:

- involve skills "customarily learned in a practical way through a structured, systematic program of on-the-job supervised learning";
- be "clearly identified and commonly recognized throughout an industry";
- involve "the progressive attainment of manual, mechanical or technical skills and knowledge" which require "at least 2,000 hours of on-the-job learning to attain"; and
- "Require related instruction to supplement the on-the-job learning."

**Each test is doing something.** The first rules out work that is learned from a book alone. The second rules out an employer inventing a job title nobody else would recognise, which matters because a credential is only worth what the industry will accept. The third sets the floor: 2,000 hours, which is roughly a working year, is the minimum amount of supervised learning the occupation has to demand before it can be apprenticed at all. The fourth makes classroom teaching compulsory rather than optional. A programme of pure on-the-job time is not an apprenticeship under this regulation.

**What registered means, and who does the registering.** A Registration Agency is the federal Office of Apprenticeship, or a recognised State Apprenticeship Agency, depending on the state (29 C.F.R. § 29.2). A sponsor takes its written plan to that agency, and the agency registers the programme. Registration is what turns a good training scheme into a Registered Apprenticeship with a federal certificate at the end.

**Indiana is a federal-agency state, which is a useful thing to know before making a phone call.** Indiana appears on the national list of apprenticeship offices as an Apprenticeship Office rather than as a State Apprenticeship Agency, and Indiana's own Apprenticeship Indiana pages describe partners filing paperwork with the United States Department of Labor (U.S. Department of Labor, n.d.-c; Indiana Department of Workforce Development, n.d.; both read 20 September 2026). Indiana's state office promotes and supports programmes and connects partners. It does not register them. If your question is about registration, the federal office is the one to ask.

**How the government describes the thing it is selling.** The national apprenticeship site describes Registered Apprenticeship as "an industry-driven, high-quality career pathway where employers can develop and prepare their future workforce, and individuals can obtain paid work experience with a mentor, receive progressive wage increases, classroom instruction, and a portable, nationally-recognized credential". It tells a seeker to "Earn as you learn with a guaranteed wage increase as you develop new skills" and to "Receive an industry-recognized and nationally-portable credential", and it runs an Apprenticeship Job Finder for searching and applying (U.S. Department of Labor, n.d.-a; read 20 September 2026).

**Read that paragraph as a promise with a limit.** Paid work with a mentor, rising wages and classroom instruction are all real and all in the regulation. Nationally portable refers to the credential, which is recognised across the country. It does not mean a licence travels, because the credential and the licence are different things, as section 2 set out. A person can hold a nationally portable completion certificate and still have to satisfy a local board on arrival.

:::reveal What are the four tests an occupation must meet to be apprenticeable? ||| Skills customarily learned in a practical way through structured on-the-job supervised learning, clear identification and common recognition throughout an industry, progressive attainment of skills needing at least 2,000 hours of on-the-job learning, and required related instruction.

:::reveal What is the minimum on-the-job learning an apprenticeable occupation must require? ||| At least 2,000 hours, which is roughly a working year.

:::reveal Is Indiana's apprenticeship office a Registration Agency? ||| No. Indiana appears as an Apprenticeship Office rather than a State Apprenticeship Agency, and the paperwork is filed with the United States Department of Labor.

:::reveal What does nationally portable refer to in the government's description of Registered Apprenticeship? ||| The credential, which is recognised across the country. It does not mean a state or local licence travels with the holder.

## Vocabulary
- **Apprenticeable occupation**: an occupation meeting all four tests in 29 C.F.R. 29.4, which is a precondition for registering a programme in it.
- **On-the-job learning**: supervised work experience with an employer, measured in hours, which no website or classroom can supply.
- **Registered Apprenticeship**: a programme a Registration Agency has registered, ending in a federally recognised completion certificate.
- **Apprenticeship Job Finder**: the federal search tool for finding and applying to apprenticeship openings.
- **Office of Apprenticeship**: the federal body that registers programmes in states without a recognised state agency, Indiana among them.

## Sources
Indiana Department of Workforce Development. (n.d.). *About Apprenticeship Indiana*. Retrieved September 20, 2026, from https://www.in.gov/dwd/apprenticeship-indiana/about
Labor Standards for the Registration of Apprenticeship Programs, 29 C.F.R. § 29.2 (2026). https://www.law.cornell.edu/cfr/text/29/29.2
Labor Standards for the Registration of Apprenticeship Programs, 29 C.F.R. § 29.4 (2026). https://www.law.cornell.edu/cfr/text/29/29.4
U.S. Department of Labor. (n.d.-a). *Career seekers*. Apprenticeship.gov. Retrieved September 20, 2026, from https://www.apprenticeship.gov/career-seekers
U.S. Department of Labor. (n.d.-c). *State office*. Apprenticeship.gov. Retrieved September 20, 2026, from https://www.apprenticeship.gov/about-us/state-office`,
    },
    {
      slug: "the-standards-a-sponsor-must-write",
      title: "8 · The written plan, and what it has to contain",
      section: "Section 4 · Registered apprenticeship, in the regulation's own words",
      body: `An apprenticeship is not a handshake. The regulation requires that a programme "must have an organized, written plan (program standards)... subscribed to by a sponsor who has undertaken to carry out the apprentice training program" (29 C.F.R. § 29.5(a)). That document exists for every registered programme, and a prospective apprentice can ask to see it.

**What the standards must address.** The regulation lists sixteen items. These are the ones that change what your five years will be like, quoted or summarised from 29 C.F.R. § 29.5(b).

| Clause | What it requires |
|---|---|
| (b)(2) | The term, measured by "completion of the industry standard for on-the-job learning (at least 2,000 hours) (time-based approach), the attainment of competency (competency-based approach), or a blend of the time-based and competency-based approaches (hybrid approach)" |
| (b)(3) | "An outline of the work processes in which the apprentice will receive supervised work experience and training on the job, and the allocation of the approximate amount of time to be spent in each major process" |
| (b)(4) | "Provision for organized, related instruction in technical subjects related to the occupation. A minimum of 144 hours for each year of apprenticeship is recommended." Delivery may be classroom, occupational or industry courses, electronic media, or other instruction approved by the Registration Agency |
| (b)(5) | "A progressively increasing schedule of wages... The entry wage must not be less than the minimum wage prescribed by the Fair Labor Standards Act" |
| (b)(7) | "A numeric ratio of apprentices to journeyworkers consistent with proper supervision, training, safety, and continuity of employment" |
| (b)(8) | A probationary period that "cannot exceed 25 percent of the length of the program, or 1 year, whichever is shorter" |
| (b)(10) | Minimum entry qualifications, "with an eligible starting age not less than 16 years" |
| (b)(12) | "The granting of advanced standing or credit for demonstrated competency, acquired experience, training, or skills for all applicants equally, with commensurate wages for any progression step so granted" |
| (b)(15) | "Recognition for successful completion of apprenticeship evidenced by an appropriate certificate issued by the Registration Agency" |

**Three of these deserve a second look.**

The **144 hours** in (b)(4) is a recommendation, not a requirement. The word in the regulation is recommended. Programmes commonly do more, and a sponsor's own published figures are the place to find out what yours does.

The **three approaches** in (b)(2) mean an apprenticeship need not be a fixed number of years at all. Time-based counts hours. Competency-based counts demonstrated skill. Hybrid does both. Ask which one you are entering, because it changes what finishing means.

The **probationary period** in (b)(8) is capped at the shorter of a quarter of the programme or one year. On a five-year programme, one year is shorter than fifteen months, so a year is the ceiling.

**What to do with all of this.** When you talk to a sponsor, ask for the standards and read them. Then ask four questions of the document: what are the work processes and their hours, how many hours of related instruction per year, what is the wage schedule step by step, and what is the ratio. Those four answers describe your next several years more accurately than any brochure will.

:::reveal What does 29 C.F.R. 29.5(a) require every registered programme to have? ||| An organized, written plan, the program standards, subscribed to by a sponsor who has undertaken to carry out the training.

:::reveal How many hours of related instruction per year does the regulation recommend? ||| A minimum of 144 hours for each year of apprenticeship, and the word in the regulation is recommended rather than required.

:::reveal What are the three approaches to measuring the term of an apprenticeship? ||| Time-based, counting at least 2,000 hours of on-the-job learning; competency-based, counting attainment of competency; and hybrid, blending the two.

:::reveal What is the ceiling on a probationary period in a registered apprenticeship? ||| The shorter of 25 percent of the programme's length or one year.

:::reveal What four questions should a prospective apprentice ask of a sponsor's written standards? ||| The work processes and their hours, the hours of related instruction each year, the wage schedule step by step, and the ratio of apprentices to journeyworkers.

## Vocabulary
- **Program standards**: the written plan a sponsor subscribes to, which the Registration Agency registers and which the apprentice can ask to read.
- **Work processes**: the named parts of the trade an apprentice is trained in, each with an approximate allocation of time.
- **Time-based, competency-based, hybrid**: the three permitted ways of measuring when an apprenticeship is finished.
- **Probationary period**: the early part of a programme during which an apprentice may be released more easily, capped by the regulation.
- **Wage progression**: the scheduled rises through a programme, starting no lower than the federal minimum wage.

## Sources
Labor Standards for the Registration of Apprenticeship Programs, 29 C.F.R. § 29.5 (2026). https://www.law.cornell.edu/cfr/text/29/29.5`,
    },
    {
      slug: "section-4-quiz",
      title: "Section 4 quiz · The regulation in its own words",
      section: "Section 4 · Registered apprenticeship, in the regulation's own words",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "How many hours of on-the-job learning must an apprenticeable occupation require, at minimum?",
            options: [
              "2,000",
              "8,000, matching the term published by the Indianapolis electrical training sponsor",
              "144, which the regulation names as the yearly figure for the occupation",
              "4,000, being two working years of supervised experience with an employer",
            ],
            correctIndex: 0,
            explanation:
              "29 C.F.R. 29.4 requires skills that take at least 2,000 hours of on-the-job learning to attain, which is roughly a working year.",
            sourceLessonSlug: "what-makes-an-occupation-apprenticeable",
          },
          {
            prompt: "How must the skills of an apprenticeable occupation customarily be learned?",
            options: [
              "In a practical way, on the job, supervised",
              "Through an accredited curriculum delivered by a provider the Registration Agency approves",
              "Through a mixture of college coursework and employer-paid classroom instruction",
              "By examination, with the on-the-job portion following once the candidate has passed",
            ],
            correctIndex: 0,
            explanation:
              "The words are customarily learned in a practical way through a structured, systematic program of on-the-job supervised learning.",
            sourceLessonSlug: "what-makes-an-occupation-apprenticeable",
          },
          {
            prompt: "What does the requirement that an occupation be commonly recognised throughout an industry rule out?",
            options: [
              "An invented job title",
              "A trade practised in only one state, since recognition must be national to count",
              "An occupation whose skills are taught differently by different employers",
              "Any occupation that a licensing board has not created a licence class for",
            ],
            correctIndex: 0,
            explanation:
              "A credential is worth what the industry will accept, so an employer cannot register a title nobody else would recognise.",
            sourceLessonSlug: "what-makes-an-occupation-apprenticeable",
          },
          {
            prompt: "Is classroom teaching optional in a registered apprenticeship?",
            options: [
              "No",
              "Yes, provided the on-the-job hours are increased to compensate for the shortfall",
              "Yes for competency-based programmes, where demonstrated skill replaces instruction",
              "Only for apprentices who already hold a related credential from an accredited provider",
            ],
            correctIndex: 0,
            explanation:
              "An apprenticeable occupation must require related instruction to supplement the on-the-job learning. A programme of pure on-the-job time is not an apprenticeship under this regulation.",
            sourceLessonSlug: "what-makes-an-occupation-apprenticeable",
          },
          {
            prompt: "Who registers an apprenticeship programme in Indiana?",
            options: [
              "The federal Office of Apprenticeship",
              "The Indiana Department of Workforce Development, through Apprenticeship Indiana",
              "The Indiana Professional Licensing Agency, which also licenses the trades",
              "The sponsor itself, by publishing its standards and notifying the state",
            ],
            correctIndex: 0,
            explanation:
              "Indiana appears as an Apprenticeship Office rather than a State Apprenticeship Agency, and the paperwork is filed with the United States Department of Labor.",
            sourceLessonSlug: "what-makes-an-occupation-apprenticeable",
          },
          {
            prompt: "What does Indiana's own apprenticeship office do, if it does not register programmes?",
            options: [
              "Promotes, supports and connects",
              "Audits registered programmes and inspects their records on the Department's behalf",
              "Issues the completion certificates once the federal office approves the programme",
              "Sets the minimum wage progression for apprentices working in the state",
            ],
            correctIndex: 0,
            explanation:
              "It promotes and supports programmes and connects partners, and its own pages describe those partners filing paperwork with the federal department.",
            sourceLessonSlug: "what-makes-an-occupation-apprenticeable",
          },
          {
            prompt: "What does the national apprenticeship site say a seeker receives at the end of a Registered Apprenticeship?",
            options: [
              "A nationally portable credential",
              "A state licence recognised in every jurisdiction that has adopted the federal standard",
              "A guaranteed offer of employment with the sponsor for a fixed period after completion",
              "A tuition refund covering the related instruction the apprentice attended",
            ],
            correctIndex: 0,
            explanation:
              "The site promises an industry-recognized and nationally-portable credential, alongside paid work with a mentor and progressive wage increases.",
            sourceLessonSlug: "what-makes-an-occupation-apprenticeable",
          },
          {
            prompt: "What does nationally portable NOT mean?",
            options: [
              "That a licence travels",
              "That the credential is recognised by employers outside the state it was earned in",
              "That the certificate is issued by a federal agency rather than a state one",
              "That the credential remains valid if the holder changes employers",
            ],
            correctIndex: 0,
            explanation:
              "The credential is portable. A local board still decides licensing on arrival, because the credential and the licence are different things.",
            sourceLessonSlug: "what-makes-an-occupation-apprenticeable",
          },
          {
            prompt: "What tool does the federal site provide for finding and applying to apprenticeships?",
            options: [
              "The Apprenticeship Job Finder",
              "The Registered Apprenticeship Partners Information Management Data System",
              "The State Apprenticeship Agency directory, which lists every sponsor by trade",
              "The Occupational Outlook Handbook, which lists openings by trade and region",
            ],
            correctIndex: 0,
            explanation:
              "The Apprenticeship Job Finder is the federal search and application tool named on the career seekers page.",
            sourceLessonSlug: "what-makes-an-occupation-apprenticeable",
          },
          {
            prompt: "What is on-the-job learning, as the regulation uses the term?",
            options: [
              "Supervised work experience with an employer",
              "The practical portion of the related instruction, delivered in the sponsor's training centre",
              "Self-directed study of the trade's technical subjects between shifts",
              "Observation of licensed workers, counted at half the rate of performed work",
            ],
            correctIndex: 0,
            explanation:
              "It is measured in hours and it happens with an employer, which is precisely why no website can supply it.",
            sourceLessonSlug: "what-makes-an-occupation-apprenticeable",
          },
          {
            prompt: "What does 29 C.F.R. 29.5(a) require every registered programme to have?",
            options: [
              "An organised, written plan",
              "A signed agreement with a college accredited to deliver the related instruction",
              "A collective agreement with the union representing the trade in that area",
              "An annual audit of its wage records filed with the Registration Agency",
            ],
            correctIndex: 0,
            explanation:
              "The program standards, subscribed to by a sponsor who has undertaken to carry out the apprentice training programme.",
            sourceLessonSlug: "the-standards-a-sponsor-must-write",
          },
          {
            prompt: "How many hours of related instruction per year does the regulation recommend?",
            options: [
              "144",
              "720, the classroom figure the Indianapolis electrical sponsor publishes for its whole programme",
              "216, the figure most commonly used by plumbing and pipefitting programmes",
              "2,000, matching the minimum on-the-job hours in the definition of an apprenticeable occupation",
            ],
            correctIndex: 0,
            explanation:
              "A minimum of 144 hours for each year of apprenticeship is recommended. The regulation's word is recommended, not required.",
            sourceLessonSlug: "the-standards-a-sponsor-must-write",
          },
          {
            prompt: "Is the 144-hour figure a requirement?",
            options: [
              "No, it is recommended",
              "Yes, and a programme falling below it may be deregistered by the Registration Agency",
              "Yes for time-based programmes, and recommended for competency-based ones",
              "Yes, but only in states served by a recognised State Apprenticeship Agency",
            ],
            correctIndex: 0,
            explanation:
              "The regulation recommends it. Programmes commonly do more, and a sponsor's published figures are where to find out what yours does.",
            sourceLessonSlug: "the-standards-a-sponsor-must-write",
          },
          {
            prompt: "What are the three permitted approaches to measuring the term of an apprenticeship?",
            options: [
              "Time-based, competency-based, hybrid",
              "Classroom, on-the-job, and self-directed, in whatever proportion the sponsor sets",
              "Probationary, intermediate and journey, marking the three stages of a term",
              "Registered, approved and recognised, depending on which agency reviews the programme",
            ],
            correctIndex: 0,
            explanation:
              "Time-based counts hours, competency-based counts demonstrated skill, and hybrid blends the two. Which one you are entering changes what finishing means.",
            sourceLessonSlug: "the-standards-a-sponsor-must-write",
          },
          {
            prompt: "What must a programme's standards outline about the work?",
            options: [
              "The work processes and the time in each",
              "The equipment the apprentice will be issued and the cost of replacing it",
              "The jobsites the apprentice will be assigned to during each year of the term",
              "The examination content the apprentice will be tested against at the end",
            ],
            correctIndex: 0,
            explanation:
              "An outline of the work processes, and the allocation of the approximate amount of time to be spent in each major process.",
            sourceLessonSlug: "the-standards-a-sponsor-must-write",
          },
          {
            prompt: "What floor does the regulation set for an apprentice's entry wage?",
            options: [
              "The federal minimum wage",
              "Half the journeyworker rate in the trade and area, rising each year of the term",
              "The prevailing wage for the classification on public work in that county",
              "Whatever the collective agreement sets for the first period of the term",
            ],
            correctIndex: 0,
            explanation:
              "The standards must provide a progressively increasing schedule of wages, and the entry wage must not be less than the minimum wage prescribed by the Fair Labor Standards Act.",
            sourceLessonSlug: "the-standards-a-sponsor-must-write",
          },
          {
            prompt: "What kind of wage schedule must a programme's standards provide?",
            options: [
              "A progressively increasing one",
              "A fixed one, so an apprentice knows the rate will not change during the term",
              "One tied to the consumer price index and adjusted annually by the sponsor",
              "One matching the journeyworker rate from the second year of the term onward",
            ],
            correctIndex: 0,
            explanation:
              "A progressively increasing schedule of wages is required, which is the mechanism behind the earn-as-you-learn description.",
            sourceLessonSlug: "the-standards-a-sponsor-must-write",
          },
          {
            prompt: "What is the cap on a probationary period in a registered apprenticeship?",
            options: [
              "The shorter of a quarter of the term or one year",
              "Ninety days, after which the apprentice may only be released for cause",
              "Two years, being the period before which advanced standing may not be granted",
              "There is none, because the sponsor sets the probationary terms in its standards",
            ],
            correctIndex: 0,
            explanation:
              "It cannot exceed 25 percent of the length of the programme, or 1 year, whichever is shorter. On a five-year programme, one year is the ceiling.",
            sourceLessonSlug: "the-standards-a-sponsor-must-write",
          },
          {
            prompt: "On a five-year programme, what is the probationary ceiling?",
            options: [
              "One year",
              "Fifteen months, being a quarter of the five-year term",
              "Six months, the figure the regulation sets for programmes longer than four years",
              "Two years, matching the point at which the first wage step is reviewed",
            ],
            correctIndex: 0,
            explanation:
              "A quarter of five years is fifteen months, and the rule takes whichever is shorter, so the year binds.",
            sourceLessonSlug: "the-standards-a-sponsor-must-write",
          },
          {
            prompt: "What eligible starting age does the regulation set for minimum entry qualifications?",
            options: [
              "Not less than 16",
              "Not less than 18, matching the age the state plumbing licence requires",
              "Not less than 21 for programmes involving work on energised equipment",
              "There is no age floor, since entry qualifications are left entirely to the sponsor",
            ],
            correctIndex: 0,
            explanation:
              "The standards must set minimum qualifications with an eligible starting age not less than 16 years.",
            sourceLessonSlug: "the-standards-a-sponsor-must-write",
          },
          {
            prompt: "What must accompany advanced standing granted under the standards?",
            options: [
              "Commensurate wages",
              "A shortened probationary period proportionate to the credit granted",
              "Written notice to the Registration Agency within thirty days of the grant",
              "A competency examination administered by the sponsor before the credit takes effect",
            ],
            correctIndex: 0,
            explanation:
              "The clause requires it be granted for all applicants equally, with commensurate wages for any progression step so granted.",
            sourceLessonSlug: "the-standards-a-sponsor-must-write",
          },
          {
            prompt: "What evidences successful completion of an apprenticeship under clause (b)(15)?",
            options: [
              "A certificate from the Registration Agency",
              "A licence issued by the state board that regulates the trade in question",
              "A letter from the sponsor confirming the apprentice has met the standards",
              "The final entry on the certified payroll showing the journeyworker classification",
            ],
            correctIndex: 0,
            explanation:
              "Recognition for successful completion, evidenced by an appropriate certificate issued by the Registration Agency.",
            sourceLessonSlug: "the-standards-a-sponsor-must-write",
          },
          {
            prompt: "Which four questions does lesson 8 say to ask of a sponsor's written standards?",
            options: [
              "Work processes, instruction hours, wages, ratio",
              "Cost, length, pass rate and the proportion of apprentices who complete",
              "Which union, which employers, which jobsites and which shifts",
              "Which examination, which vendor, which fee and which code edition",
            ],
            correctIndex: 0,
            explanation:
              "Those four answers describe the next several years more accurately than any brochure will, and the standards are a document you can ask to read.",
            sourceLessonSlug: "the-standards-a-sponsor-must-write",
          },
          {
            prompt: "Can a prospective apprentice ask to see a programme's standards?",
            options: [
              "Yes",
              "No, because the standards are filed confidentially with the Registration Agency",
              "Only after being accepted and indentured to the programme",
              "Only through a written request to the Office of Apprenticeship",
            ],
            correctIndex: 0,
            explanation:
              "The document exists for every registered programme, and lesson 8's advice is to ask for it and read it before committing.",
            sourceLessonSlug: "the-standards-a-sponsor-must-write",
          },
          {
            prompt: "What does a competency-based approach count?",
            options: [
              "Attainment of competency",
              "Hours of related instruction rather than hours of on-the-job learning",
              "Passing scores on the sponsor's end-of-term examination",
              "Years of continuous employment with a signatory contractor",
            ],
            correctIndex: 0,
            explanation:
              "Time-based counts hours and competency-based counts demonstrated skill. A hybrid approach blends both.",
            sourceLessonSlug: "the-standards-a-sponsor-must-write",
          },
          {
            prompt: "What is a work process, in a set of apprenticeship standards?",
            options: [
              "A named part of the trade with time allocated",
              "A safety procedure the apprentice must follow when performing a given task",
              "A stage of the programme after which the apprentice receives a wage increase",
              "A form the employer files recording the hours the apprentice worked that month",
            ],
            correctIndex: 0,
            explanation:
              "The standards outline the work processes and the approximate amount of time to be spent in each major one.",
            sourceLessonSlug: "the-standards-a-sponsor-must-write",
          },
          {
            prompt: "Which delivery methods does clause (b)(4) permit for related instruction?",
            options: [
              "Classroom, industry courses, electronic media, or other approved instruction",
              "Classroom instruction only, delivered at a facility the sponsor operates or leases",
              "Any method the employer chooses, since the clause sets only the number of hours",
              "College coursework only, so that the hours carry academic credit",
            ],
            correctIndex: 0,
            explanation:
              "The clause names classroom, occupational or industry courses, electronic media, or other instruction approved by the Registration Agency.",
            sourceLessonSlug: "the-standards-a-sponsor-must-write",
          },
          {
            prompt: "What is the ratio clause meant to keep consistent?",
            options: [
              "Supervision, training, safety and continuity of employment",
              "The number of apprentices each employer may hire relative to the contracts it holds",
              "The proportion of classroom hours to on-the-job hours across the term",
              "The balance of apprentices between the sponsor's participating employers",
            ],
            correctIndex: 0,
            explanation:
              "The standards must state a numeric ratio of apprentices to journeyworkers consistent with proper supervision, training, safety and continuity of employment.",
            sourceLessonSlug: "the-standards-a-sponsor-must-write",
          },
          {
            prompt: "Why does lesson 8 say to ask which approach a programme uses?",
            options: [
              "It changes what finishing means",
              "Because only time-based programmes qualify for a federally recognised certificate",
              "Because competency-based programmes are not permitted in the construction trades",
              "Because the wage schedule is set by the approach rather than by the standards",
            ],
            correctIndex: 0,
            explanation:
              "An apprenticeship need not be a fixed number of years. Hours, demonstrated skill or a blend of the two can be the measure.",
            sourceLessonSlug: "the-standards-a-sponsor-must-write",
          },
          {
            prompt: "What is a sponsor's undertaking, in the words of clause (a)?",
            options: [
              "To carry out the apprentice training programme",
              "To employ every apprentice it registers for the full length of the term",
              "To pay for the related instruction the programme requires each year",
              "To place completers with a signatory contractor once the term ends",
            ],
            correctIndex: 0,
            explanation:
              "The written plan is subscribed to by a sponsor who has undertaken to carry out the apprentice training programme.",
            sourceLessonSlug: "the-standards-a-sponsor-must-write",
          },
          {
            prompt: "What does the regulation call a programme's written plan?",
            options: [
              "Program standards",
              "An apprenticeship agreement, signed by the apprentice and the sponsor together",
              "A registration application, filed with the agency before enrolment begins",
              "A plan of study, published each term with the courses and their hours",
            ],
            correctIndex: 0,
            explanation:
              "The term in 29 C.F.R. 29.5(a) is program standards, and it is the document a Registration Agency registers.",
            sourceLessonSlug: "the-standards-a-sponsor-must-write",
          },
          {
            prompt: "Which test does an occupation fail if its skills are learned from a book alone?",
            options: [
              "The practical, supervised learning test",
              "The recognition test, because book learning is not commonly recognised in industry",
              "The related instruction test, because classroom teaching would then be redundant",
              "The 2,000-hour test, because reading cannot be measured in on-the-job hours",
            ],
            correctIndex: 0,
            explanation:
              "The first test requires skills customarily learned in a practical way through a structured, systematic programme of on-the-job supervised learning.",
            sourceLessonSlug: "what-makes-an-occupation-apprenticeable",
          },
          {
            prompt: "What turns a good training scheme into a Registered Apprenticeship?",
            options: [
              "Registration by a Registration Agency",
              "Accreditation of its curriculum by a recognised national craft body",
              "Approval by the state licensing board for the trade concerned",
              "A collective agreement naming it as the trade's training route in that area",
            ],
            correctIndex: 0,
            explanation:
              "A sponsor takes its written plan to the agency, and registration is what produces a federally recognised certificate at the end.",
            sourceLessonSlug: "what-makes-an-occupation-apprenticeable",
          },
          {
            prompt: "Roughly how long is 2,000 hours of on-the-job learning?",
            options: [
              "About a working year",
              "About six months at the shift patterns common in commercial construction",
              "About two years, allowing for weather delays and periods between jobs",
              "About three months, since apprentices commonly work extended hours",
            ],
            correctIndex: 0,
            explanation:
              "The course describes 2,000 hours as roughly a working year, which is the floor an apprenticeable occupation has to clear.",
            sourceLessonSlug: "what-makes-an-occupation-apprenticeable",
          },
          {
            prompt: "Who is offered the earn-as-you-learn description on the federal career seekers page?",
            options: [
              "A person seeking an apprenticeship",
              "An employer considering registering a programme with the Office of Apprenticeship",
              "A state agency deciding whether to seek recognition as a Registration Agency",
              "A training provider applying to deliver related instruction",
            ],
            correctIndex: 0,
            explanation:
              "The career seekers page tells a seeker to earn as you learn with a guaranteed wage increase as you develop new skills.",
            sourceLessonSlug: "what-makes-an-occupation-apprenticeable",
          },
          {
            prompt: "How does the federal description characterise Registered Apprenticeship overall?",
            options: [
              "An industry-driven career pathway",
              "A government training scheme funded by grants to participating employers",
              "A licensing route recognised by every state board in the construction trades",
              "A college alternative that awards an associate degree on completion",
            ],
            correctIndex: 0,
            explanation:
              "The page calls it an industry-driven, high-quality career pathway with paid work experience, a mentor, rising wages, classroom instruction and a portable credential.",
            sourceLessonSlug: "what-makes-an-occupation-apprenticeable",
          },
          {
            prompt: "If your question is about programme registration in Indiana, whom should you ask?",
            options: [
              "The federal office",
              "Apprenticeship Indiana, which maintains the register for the state",
              "The Professional Licensing Agency, which registers programmes for licensed trades",
              "The sponsor, since registration is a private arrangement between sponsor and employer",
            ],
            correctIndex: 0,
            explanation:
              "Indiana is served by an Apprenticeship Office rather than a State Apprenticeship Agency, so registration paperwork goes to the federal department.",
            sourceLessonSlug: "what-makes-an-occupation-apprenticeable",
          },
          {
            prompt: "What does the course mean by an apprenticeable occupation?",
            options: [
              "One meeting all four tests in 29 C.F.R. 29.4",
              "One for which at least one registered programme already exists in the state",
              "One that a licensing board has created a licence class for",
              "One listed in the national directory of recognised construction crafts",
            ],
            correctIndex: 0,
            explanation:
              "Meeting all four is a precondition for registering a programme in the occupation at all.",
            sourceLessonSlug: "what-makes-an-occupation-apprenticeable",
          },
          {
            prompt: "Which of these can no website supply to an apprentice?",
            options: [
              "On-the-job learning hours",
              "Technical subject knowledge related to the occupation",
              "A reading list matching the trade's related instruction",
              "Practice questions written against a published content outline",
            ],
            correctIndex: 0,
            explanation:
              "On-the-job learning is supervised work experience with an employer, measured in hours, which is why no website supervises anything.",
            sourceLessonSlug: "what-makes-an-occupation-apprenticeable",
          },
          {
            prompt: "What kind of attainment does the third test in 29 C.F.R. 29.4 describe?",
            options: [
              "Progressive attainment of skills and knowledge",
              "Immediate attainment of a defined competency set before the term begins",
              "Attainment measured only by examination at the close of the programme",
              "Attainment certified by a licensed contractor at each wage step",
            ],
            correctIndex: 0,
            explanation:
              "The words are the progressive attainment of manual, mechanical or technical skills and knowledge requiring at least 2,000 hours to attain.",
            sourceLessonSlug: "what-makes-an-occupation-apprenticeable",
          },
          {
            prompt: "What does the course advise doing with a sponsor's standards before committing?",
            options: [
              "Ask for them and read them",
              "Compare them against the federal regulation clause by clause with a lawyer",
              "File a copy with the Registration Agency to confirm they are current",
              "Have the employer confirm in writing that it will follow them",
            ],
            correctIndex: 0,
            explanation:
              "The standards are a real document for every registered programme, and the four questions in lesson 8 are what to take to it.",
            sourceLessonSlug: "the-standards-a-sponsor-must-write",
          },
          {
            prompt: "How many items does the regulation list for a programme's standards to address?",
            options: [
              "Sixteen",
              "Four, matching the tests for an apprenticeable occupation",
              "Nine, being the clauses this course reproduces in its table",
              "Twenty-nine, one for each section of the part",
            ],
            correctIndex: 0,
            explanation:
              "The regulation lists sixteen items, and lesson 8 reproduces the nine that most change what the term will be like.",
            sourceLessonSlug: "the-standards-a-sponsor-must-write",
          },
          {
            prompt: "Which clause number covers the wage progression?",
            options: [
              "(b)(5)",
              "(b)(7), which also sets the ratio of apprentices to journeyworkers",
              "(b)(12), which covers advanced standing and its commensurate wages",
              "(b)(2), which sets the term and the three approaches to measuring it",
            ],
            correctIndex: 0,
            explanation:
              "Clause (b)(5) requires a progressively increasing schedule of wages with an entry wage no lower than the federal minimum.",
            sourceLessonSlug: "the-standards-a-sponsor-must-write",
          },
          {
            prompt: "Which clause number covers the completion certificate?",
            options: [
              "(b)(15)",
              "(b)(10), which sets the minimum entry qualifications including the starting age",
              "(b)(3), which outlines the work processes and the time in each",
              "(b)(8), which caps the probationary period",
            ],
            correctIndex: 0,
            explanation:
              "Clause (b)(15) requires recognition for successful completion, evidenced by a certificate issued by the Registration Agency.",
            sourceLessonSlug: "the-standards-a-sponsor-must-write",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 5 — The pipelines, and what none of them charges
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "union-and-non-union-pipelines",
      title: "9 · The two sides of the trade, and what each awards",
      section: "Section 5 · The pipelines, and what none of them charges",
      body: `There are two broad routes into a construction trade in the United States, and both of them lead to registered apprenticeships. All the figures below were read on 20 September 2026 and come from each organisation's own pages.

**The union side, run through joint committees.** In the electrical trade in Indianapolis, IBEW Local 481 trains through the Electrical Training Institute. Its published offer is a five-year Electrician programme and a three-year Telecommunications programme, and it describes the arrangement plainly: apprentices "will attend school for at least 16 hours per month while also earning a weekly paycheck working on a job site for a signatory contractor" (IBEW Local 481, n.d.).

What that programme awards is worth reading twice. Journey status, and also "an Applied Science Associate's Degree from Ivy Tech Community College... at NO COST TO YOU other than semester book fees" (IBEW Local 481, n.d.). A degree comes out of the same five years as the trade training.

**The plumbing and pipefitting side.** The United Association says its apprenticeships "typically last five years" and cover Plumbing, Sprinkler Fitting, Pipefitting, HVACR, Steamfitting and Welding. The programmes are paid, its page says there is "no student debt", and completers "become a journeyman" (United Association, n.d.).

**The non-union side.** Associated Builders and Contractors runs "formal apprenticeship training programs that are registered with the U.S. Department of Labor Office of Apprenticeship". Its own description of scale is that "Tens of thousands of apprentices and craft students are educated in more than 20 construction crafts through a national ABC network of 67 Chapters". Completers "are recognized at the journey level in their trade and are awarded their apprenticeship certificate", and it describes the outcome as industry-recognised national credentials (Associated Builders and Contractors, n.d.).

**Where the curriculum comes from on that side.** ABC says it works closely with its educational affiliate, the National Center for Construction Education and Research, on the development, revision and publication of the NCCER curriculum (Associated Builders and Contractors, n.d.). Keep one distinction straight, because it catches people out: NCCER accredits providers, and its credentials are issued through them. Owning the books, holding a licence or running a programme does not by itself confer accreditation.

**The vocabulary that will come up in the first phone call.** A **signatory contractor** is an employer that has signed the agreement with the union local, and on the union side that is who employs the apprentice. A **joint committee** is the body, made up of labour and management representatives, that sponsors and runs the programme. A **chapter** is the local unit of a national contractors' association. None of those words tells you whether a programme is registered. That question has one answer, and section 4 says where to ask it.

**How to compare two programmes honestly.** Ask each the same four questions from lesson 8, then two more: who employs me while I am in this, and what do I hold in my hand at the end. The answers differ more between programmes than the marketing does.

:::reveal How often does the Indianapolis electrical training sponsor say its apprentices attend school? ||| At least 16 hours per month, while earning a weekly paycheck working on a jobsite for a signatory contractor.

:::reveal What does that sponsor say its apprentices receive besides journey status? ||| An Applied Science Associate's Degree from Ivy Tech Community College, at no cost beyond semester book fees.

:::reveal How long does the United Association say its apprenticeships typically last, and which trades do they cover? ||| Typically five years, covering Plumbing, Sprinkler Fitting, Pipefitting, HVACR, Steamfitting and Welding.

:::reveal Who issues NCCER credentials? ||| Its accredited providers. Owning the books, holding a licence or running a programme does not confer accreditation.

## Vocabulary
- **Signatory contractor**: an employer that has signed the agreement with a union local, and on the union side the employer of the apprentice.
- **Joint committee**: the labour and management body that sponsors and operates an apprenticeship programme in a trade and area.
- **Chapter**: the local unit of a national contractors' association, which on the non-union side is often the programme sponsor.
- **Journey level**: the status a completer is recognised at, which is a training status rather than a licence.
- **Accredited provider**: an organisation authorised by a curriculum body to deliver its training and issue its credentials.

## Sources
Associated Builders and Contractors. (n.d.). *Craft training and apprenticeship*. Retrieved September 20, 2026, from https://www.abc.org/Workforce/Craft-Training-Apprenticeship
International Brotherhood of Electrical Workers Local 481. (n.d.). *Apprenticeship*. Retrieved September 20, 2026, from https://ibew481.org/apprenticeship/
United Association. (n.d.). *Apprenticeship*. Retrieved September 20, 2026, from https://ua.org/apprenticeship/`,
    },
    {
      slug: "college-pre-apprenticeship-and-readiness",
      title: "10 · College, pre-apprenticeship, readiness, and the tuition question",
      section: "Section 5 · The pipelines, and what none of them charges",
      body: `Not everybody walks straight into a five-year programme. Three other kinds of thing sit in front of it, and they do different jobs.

**Community college, as a fast entry rather than an apprenticeship.** Ivy Tech's Construction Skills Training Program in Indianapolis runs one semester and its page describes it as free, made possible by the Lennar Foundation. It covers jobsite safety and OSHA standards, construction math and measurement, and carpentry fundamentals and tools, and it awards NCCER Core, NCCER Carpentry Level 1 and OSHA 30. The page describes it as a faster, more direct path into the construction workforce, and it does not describe it as an apprenticeship route (Ivy Tech Community College, n.d.; read 20 September 2026). That distinction is the useful part. It gets you employable. It is not the five years.

**Pre-apprenticeship, which has a federal definition.** The national apprenticeship site defines it as "a program or set of strategies that is designed to prepare individuals to enter and succeed in a Registered Apprenticeship Program". Its quality elements include "Training that is based on industry standards and approved by a RAP partner" and "Agreements with RAP sponsors that allow program participants to enter directly into a RAP" (U.S. Department of Labor, n.d.-b; read 20 September 2026).

Read those two elements as the questions to ask any programme calling itself a pre-apprenticeship. Is your training approved by a registered programme partner, and do you have an agreement that lets your graduates enter a registered programme directly. A programme with both is doing the thing the definition describes. A programme with neither is a course.

**Apprenticeship readiness, on the union side.** The Indiana Plan describes itself as a recruitment and training programme that works to expand construction apprenticeships, covering electricians, plumbers, pipefitters, roofers, operating engineers, sheet metal workers, glaziers, bricklayers, painters, labourers and millwrights. It says apprenticeships are offered at little to no cost, with no debt to repay when the apprenticeship is over (The Indiana Plan, n.d.; read 20 September 2026).

**A national nonprofit route.** The Home Builders Institute describes itself as a national nonprofit organisation providing skilled trades training and education, with programmes through Job Corps for ages 16 to 24, community and corrections programmes, military services, Future Builders of America and BuildStrong Academies. Its page says "All programs and trainings are at NO COST to our students" (Home Builders Institute, n.d.; read 20 September 2026).

**Now look at the shape of the whole list, because it is the most practically useful finding in this course.** Every pipeline named in this section is either free or paid. Not one of them charges the learner tuition for the trade training. The union programmes pay a wage from the start. The contractors' association programmes are employer-based. The college programme named here was free. The nonprofit says no cost. The readiness programme says little to no cost and no debt.

**What to do with that.** If someone asks you for tuition to train for a trade, that is not automatically wrong, but it is a signal to go and check the free routes first, by name, in your own area. Ask what the paid programme gives you that the free one does not. Ask whether it has an agreement with a registered sponsor. And ask who employs you while you are in it, because on the routes above, somebody does.

:::reveal How long is the Ivy Tech Indianapolis Construction Skills Training Program, and what does its page say it costs? ||| One semester, and the page describes it as free, made possible by the Lennar Foundation.

:::reveal What three credentials does that programme award? ||| NCCER Core, NCCER Carpentry Level 1 and OSHA 30.

:::reveal What is the federal definition of a pre-apprenticeship? ||| A program or set of strategies designed to prepare individuals to enter and succeed in a Registered Apprenticeship Program.

:::reveal Which two quality elements should you ask a pre-apprenticeship about? ||| Whether its training is based on industry standards and approved by a registered programme partner, and whether it has agreements letting participants enter a registered programme directly.

:::reveal What does every pipeline named in section 5 have in common on cost? ||| None of them charges the learner tuition for the trade training. They are free, or paid, or employer-based.

## Vocabulary
- **Pre-apprenticeship**: a programme designed to prepare people to enter and succeed in a Registered Apprenticeship Program.
- **Apprenticeship readiness**: recruitment and preparation work aimed at expanding entry into apprenticeships, often run with unions and employers.
- **Direct entry agreement**: an arrangement letting a pre-apprenticeship's graduates enter a registered programme without starting from the general applicant pool.
- **Job Corps**: a federal programme for young people aged 16 to 24, through which some trades training is delivered.
- **Tuition**: money the learner pays for training, which is the thing none of the pipelines in this section charges for the trade portion.

## Sources
Home Builders Institute. (n.d.). *Home*. Retrieved September 20, 2026, from https://hbi.org/
Ivy Tech Community College. (n.d.). *Indianapolis partnerships and special programs* [Construction Skills Training Program]. Retrieved September 20, 2026, from https://www.ivytech.edu
The Indiana Plan. (n.d.). *Home*. Retrieved September 20, 2026, from https://indianaplan.org
U.S. Department of Labor. (n.d.-b). *Explore pre-apprenticeship*. Apprenticeship.gov. Retrieved September 20, 2026, from https://www.apprenticeship.gov/employers/explore-pre-apprenticeship`,
    },
    {
      slug: "section-5-quiz",
      title: "Section 5 quiz · The pipelines",
      section: "Section 5 · The pipelines, and what none of them charges",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "How long is the Electrician programme published by the Indianapolis electrical training sponsor?",
            options: [
              "Five years",
              "Three years, the same length as its Telecommunications programme",
              "Four years, followed by a one-year probationary period at journey wages",
              "Two years of classroom study followed by placement with a signatory contractor",
            ],
            correctIndex: 0,
            explanation:
              "The sponsor publishes a five-year Electrician programme and a three-year Telecommunications programme.",
            sourceLessonSlug: "union-and-non-union-pipelines",
          },
          {
            prompt: "How long is that sponsor's Telecommunications programme?",
            options: [
              "Three years",
              "Five years, matching the Electrician programme so the two can share a plan of study",
              "One year, as an add-on qualification for completers of the Electrician programme",
              "Four years, with the fifth year available as an optional specialisation",
            ],
            correctIndex: 0,
            explanation:
              "The published offer is a five-year Electrician programme and a three-year Telecommunications programme.",
            sourceLessonSlug: "union-and-non-union-pipelines",
          },
          {
            prompt: "How much school does that sponsor say its apprentices attend?",
            options: [
              "At least 16 hours per month",
              "Two full days each week, with the remaining three days spent on a jobsite",
              "144 hours each year, matching the figure the federal regulation recommends",
              "One evening a week for the first two years, and none thereafter",
            ],
            correctIndex: 0,
            explanation:
              "The page says apprentices will attend school for at least 16 hours per month while also earning a weekly paycheck on a jobsite.",
            sourceLessonSlug: "union-and-non-union-pipelines",
          },
          {
            prompt: "Who employs the apprentice in that arrangement?",
            options: [
              "A signatory contractor",
              "The training institute itself, which places apprentices on jobsites as its employees",
              "The union local, which assigns apprentices to contractors as work becomes available",
              "The community college, under the terms of the degree partnership",
            ],
            correctIndex: 0,
            explanation:
              "The apprentice earns a weekly paycheck working on a jobsite for a signatory contractor, which is an employer that has signed the agreement.",
            sourceLessonSlug: "union-and-non-union-pipelines",
          },
          {
            prompt: "What does that sponsor say its apprentices receive alongside journey status?",
            options: [
              "An Applied Science Associate's Degree",
              "A state electrical licence issued on completion of the fifth term",
              "A bachelor's degree in construction management from a partner university",
              "A guaranteed contract of employment with the signatory contractor",
            ],
            correctIndex: 0,
            explanation:
              "An Applied Science Associate's Degree from Ivy Tech Community College, at no cost beyond semester book fees.",
            sourceLessonSlug: "union-and-non-union-pipelines",
          },
          {
            prompt: "What does the apprentice pay for that degree, according to the sponsor's page?",
            options: [
              "Semester book fees",
              "Half the tuition, with the training fund covering the remainder",
              "Nothing at all, including books, which the training fund supplies",
              "The full tuition, reimbursed on completion of the apprenticeship",
            ],
            correctIndex: 0,
            explanation:
              "The page says the degree comes at no cost to you other than semester book fees.",
            sourceLessonSlug: "union-and-non-union-pipelines",
          },
          {
            prompt: "How long does the United Association say its apprenticeships typically last?",
            options: [
              "Five years",
              "Four years, with a fifth available for welding and sprinkler fitting specialisations",
              "Three years for plumbing and five for pipefitting, reflecting the different scopes",
              "Between two and six years, depending on the local's agreement",
            ],
            correctIndex: 0,
            explanation:
              "The association's page says its apprenticeships typically last five years.",
            sourceLessonSlug: "union-and-non-union-pipelines",
          },
          {
            prompt: "Which trades does the United Association name in its apprenticeship offer?",
            options: [
              "Plumbing, sprinkler fitting, pipefitting, HVACR, steamfitting, welding",
              "Plumbing and pipefitting only, with the other trades covered by separate associations",
              "Electrical, plumbing, sheet metal and roofing, covering the mechanical trades together",
              "Plumbing, bricklaying, glazing and millwrighting, being the trades it represents",
            ],
            correctIndex: 0,
            explanation:
              "Those six are the trades named on its apprenticeship page, and completers become a journeyman.",
            sourceLessonSlug: "union-and-non-union-pipelines",
          },
          {
            prompt: "What does the United Association's page say about student debt?",
            options: [
              "There is none",
              "That it is capped at the cost of the books and tools an apprentice must buy",
              "That it is repaid by the employer once the apprentice completes the term",
              "That it is lower than at a community college but not eliminated",
            ],
            correctIndex: 0,
            explanation:
              "The programmes are paid, and the page says there is no student debt.",
            sourceLessonSlug: "union-and-non-union-pipelines",
          },
          {
            prompt: "With which federal body does Associated Builders and Contractors say its apprenticeship programmes are registered?",
            options: [
              "The Office of Apprenticeship",
              "The Occupational Safety and Health Administration, which also approves their safety training",
              "The Employment and Training Administration's state apprenticeship agencies",
              "The Department of Education, through its career and technical education office",
            ],
            correctIndex: 0,
            explanation:
              "Its page describes formal apprenticeship training programs registered with the U.S. Department of Labor Office of Apprenticeship.",
            sourceLessonSlug: "union-and-non-union-pipelines",
          },
          {
            prompt: "How does that association describe the scale of its craft training network?",
            options: [
              "More than 20 crafts across 67 chapters",
              "More than 60 crafts across 20 chapters, one in each of the states where it operates",
              "A single national curriculum delivered through 200 accredited training centres",
              "Ten crafts, taught through partnerships with community colleges in every state",
            ],
            correctIndex: 0,
            explanation:
              "Tens of thousands of apprentices and craft students in more than 20 construction crafts through a national network of 67 chapters.",
            sourceLessonSlug: "union-and-non-union-pipelines",
          },
          {
            prompt: "What does that association say its completers are recognised at, and awarded?",
            options: [
              "Journey level, with an apprenticeship certificate",
              "Master level, with a licence recognised in the states where its chapters operate",
              "Apprentice level, with a transcript of the hours completed in each craft",
              "Journey level, with a state licence issued through the chapter",
            ],
            correctIndex: 0,
            explanation:
              "Completers are recognised at the journey level in their trade and are awarded their apprenticeship certificate.",
            sourceLessonSlug: "union-and-non-union-pipelines",
          },
          {
            prompt: "Which body does that association name as its educational affiliate for curriculum?",
            options: [
              "NCCER",
              "The Office of Apprenticeship, which publishes the model standards its chapters adopt",
              "Ivy Tech Community College, which grants degree credit for its craft training",
              "The International Code Council, which writes the examinations its completers sit",
            ],
            correctIndex: 0,
            explanation:
              "It says it works closely with its educational affiliate on the development, revision and publication of the NCCER curriculum.",
            sourceLessonSlug: "union-and-non-union-pipelines",
          },
          {
            prompt: "What confers the ability to issue NCCER credentials?",
            options: [
              "Accreditation",
              "Purchasing the curriculum books and assigning them to trainees under a qualified instructor",
              "Registering an apprenticeship programme with the federal Office of Apprenticeship",
              "Holding a contractor licence in the trade the curriculum covers",
            ],
            correctIndex: 0,
            explanation:
              "NCCER accredits providers and its credentials are issued through them. Owning books, holding a licence or running a programme does not confer it.",
            sourceLessonSlug: "union-and-non-union-pipelines",
          },
          {
            prompt: "What is a signatory contractor?",
            options: [
              "An employer that has signed the union agreement",
              "A contractor licensed by the municipality to pull permits in its own name",
              "A contractor that has signed the apprenticeship standards as a participating employer",
              "A contractor bonded and insured to the level the ordinance requires",
            ],
            correctIndex: 0,
            explanation:
              "On the union side that is the employer of the apprentice, which is why the phrase appears in the sponsor's description of the paycheck.",
            sourceLessonSlug: "union-and-non-union-pipelines",
          },
          {
            prompt: "What is a joint committee, in apprenticeship?",
            options: [
              "A labour and management body that runs the programme",
              "A panel of licence holders and public members appointed to examine applicants",
              "A federal and state body that jointly registers programmes in a given trade",
              "A committee of employers that negotiates the apprentice wage scale each year",
            ],
            correctIndex: 0,
            explanation:
              "It sponsors and operates the programme in a trade and area, which makes it the sponsor in the regulation's sense.",
            sourceLessonSlug: "union-and-non-union-pipelines",
          },
          {
            prompt: "Does the word chapter, local or joint committee tell you whether a programme is registered?",
            options: [
              "No",
              "Yes, because only registered programmes may use the term joint committee",
              "Yes, because a chapter is by definition a registered sponsor",
              "Yes for joint committees and no for chapters, which are employer associations",
            ],
            correctIndex: 0,
            explanation:
              "None of those words answers the registration question. That question has one answer, and section 4 says where to ask it.",
            sourceLessonSlug: "union-and-non-union-pipelines",
          },
          {
            prompt: "Which two extra questions does lesson 9 add for comparing programmes?",
            options: [
              "Who employs me, and what do I hold at the end",
              "What is the pass rate, and how many completers are still in the trade after five years",
              "Which examination is used, and how many attempts are allowed",
              "What is the tuition, and does the programme offer financial aid",
            ],
            correctIndex: 0,
            explanation:
              "Those two, added to the four questions from lesson 8, describe the arrangement more accurately than the marketing does.",
            sourceLessonSlug: "union-and-non-union-pipelines",
          },
          {
            prompt: "How long is the Ivy Tech Indianapolis Construction Skills Training Program?",
            options: [
              "One semester",
              "Two years, ending in an Applied Science associate degree in construction technology",
              "Five weeks, delivered in the evenings alongside employment",
              "Four years, aligned to the length of a registered apprenticeship",
            ],
            correctIndex: 0,
            explanation:
              "Its page describes a one-semester programme, free, made possible by the Lennar Foundation.",
            sourceLessonSlug: "college-pre-apprenticeship-and-readiness",
          },
          {
            prompt: "What does that college programme's page say about its cost?",
            options: [
              "It is free",
              "It is charged at the college's standard per-credit rate with aid available",
              "It is free for county residents and charged to everyone else",
              "It is repaid by the employer that hires the graduate",
            ],
            correctIndex: 0,
            explanation:
              "The page describes it as free, made possible by the Lennar Foundation.",
            sourceLessonSlug: "college-pre-apprenticeship-and-readiness",
          },
          {
            prompt: "Which three credentials does that college programme award?",
            options: [
              "NCCER Core, NCCER Carpentry Level 1, OSHA 30",
              "NCCER Core, OSHA 10 and a state apprenticeship certificate",
              "NCCER Electrical Level 1, OSHA 30 and a first aid certificate",
              "An Applied Science associate degree, OSHA 30 and journey level recognition",
            ],
            correctIndex: 0,
            explanation:
              "Those are the three the page lists, alongside coverage of jobsite safety, construction math and measurement, and carpentry fundamentals.",
            sourceLessonSlug: "college-pre-apprenticeship-and-readiness",
          },
          {
            prompt: "How does that college programme describe itself, and how does it not?",
            options: [
              "A fast path into the workforce, not an apprenticeship route",
              "An apprenticeship route, with direct entry agreements to two registered sponsors",
              "A pre-apprenticeship, approved by a registered programme partner",
              "A licensing route, preparing candidates for the city's electrical examination",
            ],
            correctIndex: 0,
            explanation:
              "It describes itself as a faster, more direct path into the construction workforce, and does not describe itself as an apprenticeship route.",
            sourceLessonSlug: "college-pre-apprenticeship-and-readiness",
          },
          {
            prompt: "What is the federal definition of a pre-apprenticeship?",
            options: [
              "Preparation to enter and succeed in a Registered Apprenticeship",
              "A registered programme of less than 2,000 hours, aimed at entrants under 25",
              "The probationary period at the start of a registered apprenticeship",
              "A training course accredited by a national craft curriculum body",
            ],
            correctIndex: 0,
            explanation:
              "A program or set of strategies designed to prepare individuals to enter and succeed in a Registered Apprenticeship Program.",
            sourceLessonSlug: "college-pre-apprenticeship-and-readiness",
          },
          {
            prompt: "Which quality element concerns a pre-apprenticeship's training content?",
            options: [
              "Based on industry standards and approved by a partner",
              "Delivered by instructors who hold a current licence in the trade taught",
              "Limited to subjects on the sponsor's published plan of study",
              "Assessed by an examination written by the registered programme's testing vendor",
            ],
            correctIndex: 0,
            explanation:
              "Training that is based on industry standards and approved by a Registered Apprenticeship Program partner is one of the named quality elements.",
            sourceLessonSlug: "college-pre-apprenticeship-and-readiness",
          },
          {
            prompt: "Which quality element concerns what happens to a pre-apprenticeship's graduates?",
            options: [
              "Agreements allowing direct entry to a registered programme",
              "A guaranteed interview with at least three participating employers in the area",
              "Credit toward the on-the-job hours of the registered programme they enter",
              "Wage protection at the first-period rate for their first year of employment",
            ],
            correctIndex: 0,
            explanation:
              "Agreements with Registered Apprenticeship Program sponsors that allow programme participants to enter directly into one.",
            sourceLessonSlug: "college-pre-apprenticeship-and-readiness",
          },
          {
            prompt: "What does lesson 10 say about a self-described pre-apprenticeship with neither quality element?",
            options: [
              "It is a course",
              "It is unlawful, because the term is protected by the federal regulation",
              "It is a registered programme operating under a different name",
              "It is an apprenticeship readiness programme by another name",
            ],
            correctIndex: 0,
            explanation:
              "A programme with both is doing what the definition describes. A programme with neither is a course, whatever it is called.",
            sourceLessonSlug: "college-pre-apprenticeship-and-readiness",
          },
          {
            prompt: "How does The Indiana Plan describe itself?",
            options: [
              "A recruitment and training programme expanding apprenticeships",
              "A state agency registering apprenticeship programmes on behalf of the federal office",
              "An employer association running registered programmes in eleven crafts",
              "A community college partnership awarding degree credit for craft training",
            ],
            correctIndex: 0,
            explanation:
              "It describes itself as a recruitment and training programme that works to expand construction apprenticeships.",
            sourceLessonSlug: "college-pre-apprenticeship-and-readiness",
          },
          {
            prompt: "What does The Indiana Plan's page say about the cost of the apprenticeships it leads to?",
            options: [
              "Little to no cost, and no debt to repay",
              "Free for the first year, with fees from the second year onward",
              "Covered by the employer, who may recover the cost from the apprentice's wages",
              "Set by each participating local, and varying widely between trades",
            ],
            correctIndex: 0,
            explanation:
              "The page says apprenticeships are offered at little to no cost, with no debt to repay when the apprenticeship is over.",
            sourceLessonSlug: "college-pre-apprenticeship-and-readiness",
          },
          {
            prompt: "Which trades does The Indiana Plan name?",
            options: [
              "Eleven, from electricians to millwrights",
              "Three, covering only the electrical, plumbing and pipefitting trades",
              "Every construction trade with a registered programme in the state",
              "Only the trades for which Indiana issues a state licence",
            ],
            correctIndex: 0,
            explanation:
              "Electricians, plumbers, pipefitters, roofers, operating engineers, sheet metal workers, glaziers, bricklayers, painters, labourers and millwrights.",
            sourceLessonSlug: "college-pre-apprenticeship-and-readiness",
          },
          {
            prompt: "How does the Home Builders Institute describe itself?",
            options: [
              "A national nonprofit providing skilled trades training",
              "A trade association representing residential builders and their subcontractors",
              "A federal programme delivering trades training through Job Corps centres",
              "An accrediting body for residential construction curricula",
            ],
            correctIndex: 0,
            explanation:
              "It describes itself as a national nonprofit organisation that provides skilled trades training and education.",
            sourceLessonSlug: "college-pre-apprenticeship-and-readiness",
          },
          {
            prompt: "What does the Home Builders Institute's page say about cost to students?",
            options: [
              "All programmes are at no cost",
              "Costs vary by programme, with scholarships available through its academies",
              "Tuition is charged and repaid from wages once the student is placed",
              "Only its Job Corps programmes are free, the others being fee-charging",
            ],
            correctIndex: 0,
            explanation:
              "The page says all programs and trainings are at no cost to its students.",
            sourceLessonSlug: "college-pre-apprenticeship-and-readiness",
          },
          {
            prompt: "Through which of these does the Home Builders Institute say it delivers programmes?",
            options: [
              "Job Corps, corrections, military, and its academies",
              "Registered apprenticeships it sponsors directly in eleven construction crafts",
              "Community colleges in every state, under a single national curriculum",
              "Union training centres, under agreements with the trades' national bodies",
            ],
            correctIndex: 0,
            explanation:
              "Job Corps for ages 16 to 24, community and corrections, military services, Future Builders of America and BuildStrong Academies.",
            sourceLessonSlug: "college-pre-apprenticeship-and-readiness",
          },
          {
            prompt: "What age range does Job Corps serve, in the Home Builders Institute's description?",
            options: [
              "16 to 24",
              "18 to 30, matching the entry age of most registered construction programmes",
              "16 to 21, after which participants transfer to its academies",
              "Any age, with priority given to applicants under 25",
            ],
            correctIndex: 0,
            explanation:
              "The page names Job Corps for ages 16 to 24 among the routes through which it delivers training.",
            sourceLessonSlug: "college-pre-apprenticeship-and-readiness",
          },
          {
            prompt: "What do all the pipelines named in section 5 have in common?",
            options: [
              "None charges tuition for the trade training",
              "All of them are registered with the federal Office of Apprenticeship",
              "All of them operate only in Indiana, which is why the section is a worked example",
              "All of them award an NCCER credential on completion",
            ],
            correctIndex: 0,
            explanation:
              "They are free, or paid, or employer-based. The union programmes pay a wage from the start, and the others say free or no cost.",
            sourceLessonSlug: "college-pre-apprenticeship-and-readiness",
          },
          {
            prompt: "What does lesson 10 say to do when someone asks you for tuition to train for a trade?",
            options: [
              "Check the free routes first",
              "Refuse, because charging tuition for trade training is prohibited by federal regulation",
              "Pay it, provided the programme is registered with a Registration Agency",
              "Ask the state licensing board whether the programme is approved",
            ],
            correctIndex: 0,
            explanation:
              "It is not automatically wrong, but it is a signal. Ask what the paid programme adds, whether it has a sponsor agreement, and who employs you meanwhile.",
            sourceLessonSlug: "college-pre-apprenticeship-and-readiness",
          },
          {
            prompt: "What is a direct entry agreement?",
            options: [
              "One letting graduates enter a registered programme without the general pool",
              "A contract binding an employer to hire a pre-apprenticeship's graduates",
              "An arrangement crediting a pre-apprenticeship's hours toward the apprenticeship term",
              "A licence issued to a school to operate as a registered sponsor",
            ],
            correctIndex: 0,
            explanation:
              "It is one of the two quality elements to ask any pre-apprenticeship about, and it is what makes the programme a pipeline rather than a class.",
            sourceLessonSlug: "college-pre-apprenticeship-and-readiness",
          },
          {
            prompt: "What does the course mean by apprenticeship readiness?",
            options: [
              "Recruitment and preparation to expand entry",
              "The probationary period a registered programme may impose at the start of a term",
              "The competency assessment a sponsor uses before granting advanced standing",
              "The orientation a licensing board requires before issuing a licence",
            ],
            correctIndex: 0,
            explanation:
              "It is work aimed at expanding entry into apprenticeships, often run with unions and employers, and The Indiana Plan is the example given.",
            sourceLessonSlug: "college-pre-apprenticeship-and-readiness",
          },
          {
            prompt: "What is journey level, as the contractors' association uses the phrase?",
            options: [
              "A training status",
              "A licence class recognised in the states where its chapters operate",
              "The wage step immediately below the master rate on a certified payroll",
              "The federal classification used in the ratio of apprentices to journeyworkers",
            ],
            correctIndex: 0,
            explanation:
              "Completers are recognised at the journey level and awarded an apprenticeship certificate. Recognition and a certificate are training, not licensing.",
            sourceLessonSlug: "union-and-non-union-pipelines",
          },
          {
            prompt: "Which of these is an accredited provider?",
            options: [
              "An organisation authorised to deliver a curriculum and issue its credentials",
              "Any employer that has purchased the curriculum for use with its own trainees",
              "A registered apprenticeship sponsor, by virtue of its registration",
              "A community college offering courses in the same subjects",
            ],
            correctIndex: 0,
            explanation:
              "Accreditation is the authorisation, and it is what separates issuing a credential from teaching the same material.",
            sourceLessonSlug: "union-and-non-union-pipelines",
          },
          {
            prompt: "Which pipeline in section 5 pays the learner from the start?",
            options: [
              "The registered apprenticeships",
              "The community college programme, through a stipend from its funding foundation",
              "The nonprofit's academies, which pay a training allowance",
              "The readiness programme, which pays participants while they prepare",
            ],
            correctIndex: 0,
            explanation:
              "The union programmes described pay a weekly wage from the start, which is the earn-as-you-learn arrangement the federal site describes.",
            sourceLessonSlug: "college-pre-apprenticeship-and-readiness",
          },
          {
            prompt: "What is a chapter, on the non-union side?",
            options: [
              "The local unit of a national association",
              "The regional office of the federal Office of Apprenticeship",
              "A training centre accredited to deliver a national craft curriculum",
              "The employer group that signs the agreement with a union local",
            ],
            correctIndex: 0,
            explanation:
              "The association describes a national network of 67 chapters, and on that side the chapter is often the programme sponsor.",
            sourceLessonSlug: "union-and-non-union-pipelines",
          },
          {
            prompt: "Why does lesson 10 call the college programme's self-description the useful part?",
            options: [
              "It says what it is not",
              "Because it lists the credentials by name rather than by category",
              "Because it names the foundation that funds it, which can be checked",
              "Because it states the semester length, which most programmes leave vague",
            ],
            correctIndex: 0,
            explanation:
              "It calls itself a faster, more direct path into the workforce and does not call itself an apprenticeship route. That distinction is what a reader needs.",
            sourceLessonSlug: "college-pre-apprenticeship-and-readiness",
          },
          {
            prompt: "On which date were all the pipeline figures in section 5 read?",
            options: [
              "20 September 2026",
              "1 March 2022, the date carried by the county candidate information bulletin",
              "24 June 2026, the date carried by the state candidate information bulletin",
              "Various dates through 2025, as each organisation last updated its pages",
            ],
            correctIndex: 0,
            explanation:
              "Every figure in the section was read on that date from each organisation's own pages, and the course prints the date for that reason.",
            sourceLessonSlug: "union-and-non-union-pipelines",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 6 — What the school is actually like
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "five-terms-in-the-sponsors-words",
      title: "11 · Five terms, from a sponsor's own plan of study",
      section: "Section 6 · What the school is actually like",
      body: `Most descriptions of apprenticeship school are vague because the writer has never seen a syllabus. One Indianapolis sponsor publishes its plan of study, so here it is. Everything below is from the Electrical Training Institute's Plan of Study for Fall 2025 and its programme page, read 20 September 2026, and it describes that one programme rather than the trade nationally.

**The overall size.** The sponsor publishes a minimum of 720 hours of classroom instruction and 8,000 hours of on-the-job training, over five terms, which it says equates to approximately five years (Electrical Training Institute, n.d.).

**The terms, with the on-the-job hour threshold printed beside each.**

| Term | Courses on the plan | Hours threshold |
|---|---|---|
| One | OSHA 10, CPR and First Aid, Mobile Elevated Work Platform training, registration, work ready orientation, Math Refresher, Conduit Bending, Construction Drawings and Codeology | 2,000 indentured hours |
| Two | Circuitry for Electricians, DC Theory, AC Theory, Blueprints, NEC and BIM, Personal Finance | 3,500 |
| Three | Grounding, Transformers and Motors, Human Relations, Technical Writing, Motor Controls 101, Fire Alarm | 5,000 |
| Four | Advanced National Electrical Code, Telecommunications for Electricians, Instrumentation and Temperature Controls, NFPA 70E and Confined Space, History of Organized Labor | 6,500 |
| Five | Motor Controls 201, Programmable Logic Controllers, OSHA 30, Final Exam Preparation | 8,000 |

**Read the shape rather than the course titles.** Term one is safety, arithmetic, drawings and how to bend a pipe. Nothing in it is advanced, and that is deliberate: it is the set of things a first-year apprentice needs in order to be useful and not hurt on a jobsite next week. Electrical theory, direct current and then alternating current, sits in term two, after the hands have already been working for a year. Term four is code depth, instrumentation, arc flash and specialisation. Term five is controls, programmable logic and preparation for the examination at the end.

**The hour thresholds are the other half of the picture.** Each term sits against a number of on-the-job hours: 2,000, then 3,500, 5,000, 6,500 and 8,000. The classroom is paced against the work, not the other way round. This is the time-based approach from section 4 in operation, and it is why the programme takes about five years rather than however long the classes take.

**Two cautions before you use any of this.** First, it is one sponsor's plan for one trade in one city, published for one intake. It is not a national standard, and another local's plan will differ. Second, a plan of study changes. The one described here was published for autumn 2025 and read on 20 September 2026. Ask your own sponsor for its current plan, which is a document it will have.

**What it is honestly useful for.** Comparing two programmes, because a plan of study is specific in a way a brochure is not. And seeing what a first year actually asks of a person, which is far less intimidating than the word apprenticeship makes it sound.

:::reveal What does the Indianapolis electrical sponsor publish as its classroom and on-the-job totals? ||| A minimum of 720 hours of classroom instruction and 8,000 hours of on-the-job training, over five terms, approximately five years.

:::reveal What kinds of subject make up term one on that plan of study? ||| Safety, arithmetic, drawings and conduit bending, along with registration and orientation. Nothing advanced.

:::reveal Where does electrical theory sit on that plan, and why is that notable? ||| In term two, after the apprentice has already been working for about a year, with direct current before alternating current.

:::reveal What are the five on-the-job hour thresholds printed beside the terms? ||| 2,000, 3,500, 5,000, 6,500 and 8,000.

:::reveal Why does the programme take about five years rather than however long the classes take? ||| Because the classroom is paced against the on-the-job hours, which is the time-based approach in operation.

## Vocabulary
- **Plan of study**: a sponsor's published list of the courses in each term of its programme, and the document to ask for when comparing programmes.
- **Indentured hours**: on-the-job hours counted from registration to the programme, used here as the threshold for advancing a term.
- **Term**: one stage of a multi-year programme, here roughly a year, with its own courses and its own hour threshold.
- **Arc flash**: the hazard addressed by the safety standard that appears in term four of this plan, and a specialist subject rather than a first-year one.

## Sources
Electrical Training Institute. (2025). *Plan of study, fall 2025* [PDF]. https://eti-indy.org/wp-content/uploads/2025/05/Plan-of-Study-Fall-2025.pdf
Electrical Training Institute. (n.d.). *Electrician program*. Retrieved September 20, 2026, from https://eti-indy.org/electrician-program/`,
    },
    {
      slug: "four-levels-and-the-other-half",
      title: "12 · Four levels beside five terms, and the half that is not the trade",
      section: "Section 6 · What the school is actually like",
      body: `The non-union side organises the same subject differently, and putting the two side by side tells you something neither tells you alone.

**Four levels, with published hours.** NCCER's public craft catalogue lists electrical as four levels: Level 1 at 227.5 hours, Level 2 at 150, Level 3 at 147.5 and Level 4 at 157.5. The topics, named only as a list, run roughly like this. Level 1 covers an occupational overview, safety, test equipment, theory and circuits, basic construction documents, an introduction to the code, boxes, raceways, conduit bending, conductors and cables, and dwelling wiring. Level 2 covers conductor installations, alternating current, control concepts, lighting, cable tray, motors, terminations and splices, grounding and bonding, and breakers and fuses. Level 3 covers conductor selection and calculations, dwelling load calculations, transformers, distribution equipment, commercial services, motor and process controls, voice, data and video, hazardous locations, and alternative energy and storage. Level 4 covers heating and cooling systems and controls, non-dwelling load calculations, standby and emergency systems, health care facilities, fire alarm, heat tracing, medium-voltage splices, and two modules called Journeyman Essentials (NCCER, n.d.; read 20 September 2026).

**The convergence, which is the useful finding.** Two curricula written by organisations that disagree about nearly everything put the material in almost the same order. Safety and basic documents first. Theory second. Calculations third. Specialisation and the things a journeyman needs beyond the wire fourth. If you are choosing between programmes, that order is not the thing to compare, because they agree on it. Compare the hours, the employment, the wage schedule and what you hold at the end.

**Now the part people do not expect.** Five of the courses on the Indianapolis plan of study are not electrical at all: a Math Refresher, Personal Finance, Human Relations, Technical Writing, and History of Organized Labor. They sit right there in the terms alongside conduit bending and motor controls, in a real registered programme, and they are there because the trade thinks a journeyman needs them.

**Two of those five already exist in this catalog, so this course does not repeat them.** The arithmetic is taught in **construction-math**, which covers the same ground a first-term refresher does. The labour history is taught in **history-of-unions**, and section 8 of this course returns to one lesson of it for a specific reason. Go to those. Nothing is gained by teaching the same material twice under a different title.

**What to take from the fact that they are on the syllabus at all.** The trade is not only a set of hand skills. A journeyman reads, writes, measures, gets along with people, manages money that arrives in uneven amounts, and knows how the trade got its conditions. Anyone deciding whether they are suited to this work should weigh that list rather than only the tools.

:::reveal How many levels does NCCER's public electrical catalogue list, and what are their hours? ||| Four: 227.5, 150, 147.5 and 157.5 hours.

:::reveal In what order do both the union and non-union electrical curricula put the material? ||| Safety and basic documents first, theory second, calculations third, and specialisation fourth.

:::reveal If two programmes agree on the order of the material, what should you compare instead? ||| The hours, the employment, the wage schedule, and what you hold in your hand at the end.

:::reveal Which five courses on the Indianapolis plan of study are not electrical subjects? ||| A math refresher, personal finance, human relations, technical writing, and the history of organized labor.

:::reveal Which two of those five does this catalog already teach, and where? ||| The arithmetic in construction-math, and the labour history in history-of-unions.

## Vocabulary
- **Craft catalogue**: a curriculum publisher's public list of the levels, modules and hours in a trade's training.
- **Load calculation**: the arithmetic of working out electrical demand, which both curricula place in their third stage rather than their first.
- **Journeyman Essentials**: the name given to two modules at the top level of the non-union electrical curriculum, covering what a journeyman needs beyond the wire.
- **General education**: the non-trade courses inside a trade programme, such as writing, finance, human relations and history.

## Sources
Electrical Training Institute. (2025). *Plan of study, fall 2025* [PDF]. https://eti-indy.org/wp-content/uploads/2025/05/Plan-of-Study-Fall-2025.pdf
National Center for Construction Education and Research. (n.d.). *Electrical*. Craft catalog. Retrieved September 20, 2026, from https://www.nccer.org/craft-catalog/electrical/`,
    },
    {
      slug: "section-6-quiz",
      title: "Section 6 quiz · What the school is like",
      section: "Section 6 · What the school is actually like",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "How many hours of classroom instruction does the Indianapolis electrical sponsor publish as its minimum?",
            options: [
              "720",
              "144, matching the yearly figure the federal regulation recommends",
              "8,000, which is the same figure it publishes for on-the-job training",
              "227.5, matching the first level of the non-union electrical curriculum",
            ],
            correctIndex: 0,
            explanation:
              "A minimum of 720 hours of classroom instruction and 8,000 hours of on-the-job training, across five terms.",
            sourceLessonSlug: "five-terms-in-the-sponsors-words",
          },
          {
            prompt: "How many hours of on-the-job training does that sponsor publish?",
            options: [
              "8,000",
              "6,500, being the threshold printed beside the fourth term of the plan",
              "2,000, the federal minimum for an apprenticeable occupation",
              "720, the same figure it gives for classroom instruction",
            ],
            correctIndex: 0,
            explanation:
              "The published figures are 720 classroom hours and 8,000 on-the-job hours, over five terms of approximately five years.",
            sourceLessonSlug: "five-terms-in-the-sponsors-words",
          },
          {
            prompt: "How many terms does that programme take?",
            options: [
              "Five",
              "Four, matching the four levels of the non-union electrical curriculum",
              "Ten, two for each year of the approximately five-year programme",
              "Three, with the remaining two years spent entirely on the job",
            ],
            correctIndex: 0,
            explanation:
              "Five terms, which the sponsor says equates to approximately five years.",
            sourceLessonSlug: "five-terms-in-the-sponsors-words",
          },
          {
            prompt: "Which subjects make up term one of that plan of study?",
            options: [
              "Safety, arithmetic, drawings, conduit bending",
              "Direct current theory, alternating current theory and circuitry for electricians",
              "Grounding, transformers, motors and motor controls",
              "Advanced code, instrumentation and arc flash safety",
            ],
            correctIndex: 0,
            explanation:
              "Plus registration and orientation. Nothing in term one is advanced, because it is what a first-year apprentice needs to be useful and safe next week.",
            sourceLessonSlug: "five-terms-in-the-sponsors-words",
          },
          {
            prompt: "In which term does electrical theory sit on that plan?",
            options: [
              "Term two",
              "Term one, because theory is the foundation everything else is built on",
              "Term three, after grounding and transformers have been covered",
              "Term five, immediately before the final examination preparation",
            ],
            correctIndex: 0,
            explanation:
              "Direct current and then alternating current sit in term two, after the hands have already been working for about a year.",
            sourceLessonSlug: "five-terms-in-the-sponsors-words",
          },
          {
            prompt: "What is the on-the-job hour threshold printed beside term one?",
            options: [
              "2,000",
              "3,500, which is the threshold printed beside the second term",
              "720, the classroom total for the whole programme",
              "1,000, being half the federal minimum for an apprenticeable occupation",
            ],
            correctIndex: 0,
            explanation:
              "The thresholds run 2,000, 3,500, 5,000, 6,500 and 8,000 across the five terms.",
            sourceLessonSlug: "five-terms-in-the-sponsors-words",
          },
          {
            prompt: "What is the on-the-job hour threshold printed beside term four?",
            options: [
              "6,500",
              "5,000, which is the threshold printed beside the third term",
              "8,000, which is the threshold printed beside the final term",
              "7,000, a figure that appears in commercial licensing guides for the area",
            ],
            correctIndex: 0,
            explanation:
              "The five thresholds are 2,000, 3,500, 5,000, 6,500 and 8,000, in term order.",
            sourceLessonSlug: "five-terms-in-the-sponsors-words",
          },
          {
            prompt: "What does the pairing of terms with hour thresholds show?",
            options: [
              "The classroom is paced against the work",
              "That an apprentice may skip a term by working additional hours in the preceding year",
              "That classroom hours and on-the-job hours are counted together toward the total",
              "That the programme is competency-based rather than time-based",
            ],
            correctIndex: 0,
            explanation:
              "This is the time-based approach in operation, and it is why the programme takes about five years rather than however long the classes take.",
            sourceLessonSlug: "five-terms-in-the-sponsors-words",
          },
          {
            prompt: "What subjects does term four of that plan cover?",
            options: [
              "Code depth, instrumentation, arc flash, specialisation",
              "Safety orientation, first aid and elevated work platform training",
              "Direct current, alternating current and basic circuitry",
              "Programmable logic controllers and final examination preparation",
            ],
            correctIndex: 0,
            explanation:
              "Advanced code, telecommunications, instrumentation and temperature controls, the arc flash and confined space standard, and labour history.",
            sourceLessonSlug: "five-terms-in-the-sponsors-words",
          },
          {
            prompt: "What does term five of that plan cover?",
            options: [
              "Controls, logic, and exam preparation",
              "Conduit bending, construction drawings and an introduction to the code",
              "Grounding, transformers and fire alarm systems",
              "Personal finance, human relations and technical writing",
            ],
            correctIndex: 0,
            explanation:
              "Motor controls, programmable logic controllers, the thirty-hour safety course, and final examination preparation.",
            sourceLessonSlug: "five-terms-in-the-sponsors-words",
          },
          {
            prompt: "What are the two cautions lesson 11 attaches to that plan of study?",
            options: [
              "One sponsor, and plans change",
              "That the figures are unverified, and that the sponsor is a commercial provider",
              "That the plan is union-specific, and that the hours are recommendations rather than requirements",
              "That the programme is not registered, and that its credential is not portable",
            ],
            correctIndex: 0,
            explanation:
              "It is one sponsor's plan for one trade in one city for one intake, and it was published for autumn 2025 and read on 20 September 2026.",
            sourceLessonSlug: "five-terms-in-the-sponsors-words",
          },
          {
            prompt: "What is a plan of study, and why does lesson 11 say to ask for one?",
            options: [
              "A term-by-term course list, specific where a brochure is vague",
              "The written standards a sponsor files with the Registration Agency on registering",
              "The content outline a testing vendor publishes for a licensing examination",
              "The record of hours an apprentice has completed in each work process",
            ],
            correctIndex: 0,
            explanation:
              "It is a sponsor's published list of the courses in each term, and it is the document that makes two programmes genuinely comparable.",
            sourceLessonSlug: "five-terms-in-the-sponsors-words",
          },
          {
            prompt: "What does lesson 11 say the plan of study is honestly useful for?",
            options: [
              "Comparing programmes, and seeing what year one asks",
              "Predicting the content of the licensing examination at the end of the programme",
              "Establishing how many hours a sponsor will credit as advanced standing",
              "Working out which trade pays best over the length of a career",
            ],
            correctIndex: 0,
            explanation:
              "A plan of study is specific in a way a brochure is not, and a first year turns out to ask far less than the word apprenticeship suggests.",
            sourceLessonSlug: "five-terms-in-the-sponsors-words",
          },
          {
            prompt: "How many levels does the non-union electrical craft catalogue list?",
            options: [
              "Four",
              "Five, matching the five terms of the union plan of study",
              "Three, with a separate specialisation track above them",
              "Two, a core level and an advanced level",
            ],
            correctIndex: 0,
            explanation:
              "Four levels, published at 227.5, 150, 147.5 and 157.5 hours.",
            sourceLessonSlug: "four-levels-and-the-other-half",
          },
          {
            prompt: "How many hours does that catalogue publish for Level 1?",
            options: [
              "227.5",
              "150, which is the published figure for the second level",
              "720, the classroom total published by the Indianapolis union sponsor",
              "157.5, which is the published figure for the fourth level",
            ],
            correctIndex: 0,
            explanation:
              "Level 1 is the largest of the four at 227.5 hours, followed by 150, 147.5 and 157.5.",
            sourceLessonSlug: "four-levels-and-the-other-half",
          },
          {
            prompt: "Which level is the largest in that four-level structure?",
            options: [
              "Level 1",
              "Level 4, because it carries the specialisation and the journeyman modules",
              "Level 3, because load calculations take the most instruction time",
              "They are equal, at roughly 170 hours each",
            ],
            correctIndex: 0,
            explanation:
              "Level 1 is published at 227.5 hours, well above the 150, 147.5 and 157.5 of the levels above it.",
            sourceLessonSlug: "four-levels-and-the-other-half",
          },
          {
            prompt: "Which topics does Level 1 of that catalogue cover?",
            options: [
              "Overview, safety, basic documents, conduit, dwelling wiring",
              "Load calculations, transformers, commercial services and hazardous locations",
              "Health care facilities, fire alarm, heat tracing and medium-voltage splices",
              "Motors, cable tray, terminations and grounding and bonding",
            ],
            correctIndex: 0,
            explanation:
              "An occupational overview, safety, test equipment, theory and circuits, basic construction documents, an introduction to the code, boxes and raceways, conduit bending, conductors and dwelling wiring.",
            sourceLessonSlug: "four-levels-and-the-other-half",
          },
          {
            prompt: "Which topics sit at Level 3 of that catalogue?",
            options: [
              "Calculations, transformers, commercial services, hazardous locations",
              "An occupational overview, safety and basic construction documents",
              "Programmable logic controllers and final examination preparation",
              "Health care facilities, standby systems and medium-voltage splices",
            ],
            correctIndex: 0,
            explanation:
              "Conductor selection and calculations, dwelling load calculations, transformers, distribution equipment, commercial services, controls, voice data and video, hazardous locations, and alternative energy and storage.",
            sourceLessonSlug: "four-levels-and-the-other-half",
          },
          {
            prompt: "What are the two modules at the top of that four-level structure called?",
            options: [
              "Journeyman Essentials",
              "Final Exam Preparation, matching the last course on the union plan of study",
              "Master Certification, covering the contracting knowledge a licence requires",
              "Advanced Code, covering the model code in full",
            ],
            correctIndex: 0,
            explanation:
              "Level 4 ends with two modules called Journeyman Essentials, covering what a journeyman needs beyond the wire.",
            sourceLessonSlug: "four-levels-and-the-other-half",
          },
          {
            prompt: "What order do both electrical curricula put the material in?",
            options: [
              "Safety, theory, calculations, specialisation",
              "Theory, safety, specialisation, calculations",
              "Calculations, safety, theory, specialisation",
              "Specialisation first, so an apprentice can be placed on suitable work early",
            ],
            correctIndex: 0,
            explanation:
              "Safety and basic documents first, theory second, calculations third, and specialisation and the journeyman subjects fourth.",
            sourceLessonSlug: "four-levels-and-the-other-half",
          },
          {
            prompt: "What does lesson 12 say the convergence means for someone choosing between programmes?",
            options: [
              "The order is not worth comparing",
              "That the two curricula are interchangeable and either will satisfy a sponsor",
              "That the shorter curriculum is the more efficient of the two",
              "That the union programme covers more material in the same time",
            ],
            correctIndex: 0,
            explanation:
              "They agree on the order, so compare the hours, the employment, the wage schedule and what you hold at the end instead.",
            sourceLessonSlug: "four-levels-and-the-other-half",
          },
          {
            prompt: "How many courses on the Indianapolis plan of study are not electrical subjects?",
            options: [
              "Five",
              "Two, a math refresher and a labour history course",
              "None, because the plan is entirely technical",
              "Nine, being every course with a general education prefix",
            ],
            correctIndex: 0,
            explanation:
              "A math refresher, personal finance, human relations, technical writing, and the history of organized labor.",
            sourceLessonSlug: "four-levels-and-the-other-half",
          },
          {
            prompt: "Which non-electrical subject sits in term two of that plan?",
            options: [
              "Personal finance",
              "The history of organized labor, which sits alongside the advanced code course",
              "Technical writing, which sits alongside grounding and transformers",
              "The math refresher, which sits alongside conduit bending",
            ],
            correctIndex: 0,
            explanation:
              "Personal finance sits in term two, with the math refresher in term one and labour history in term four.",
            sourceLessonSlug: "four-levels-and-the-other-half",
          },
          {
            prompt: "Which non-electrical subject sits in term four of that plan?",
            options: [
              "The history of organized labor",
              "Personal finance, so an apprentice can plan around the journey wage",
              "The math refresher, revisited before the load calculation work",
              "Work ready orientation, repeated before the final term",
            ],
            correctIndex: 0,
            explanation:
              "Labour history sits in term four, alongside advanced code, telecommunications, instrumentation and the arc flash standard.",
            sourceLessonSlug: "four-levels-and-the-other-half",
          },
          {
            prompt: "Which two of those five subjects does this catalog already teach?",
            options: [
              "The arithmetic and the labour history",
              "Personal finance and technical writing, in the money and writing courses",
              "Human relations and technical writing, in the workplace courses",
              "None of them, which is why this course covers all five",
            ],
            correctIndex: 0,
            explanation:
              "The arithmetic is in construction-math and the labour history is in history-of-unions. This course points at them rather than repeating them.",
            sourceLessonSlug: "four-levels-and-the-other-half",
          },
          {
            prompt: "Why does this course not teach the arithmetic itself?",
            options: [
              "It is already taught elsewhere in the catalog",
              "Because arithmetic cannot be taught without the sponsor's own workbook",
              "Because the math refresher is optional on the plan of study",
              "Because the licensing examination does not test arithmetic",
            ],
            correctIndex: 0,
            explanation:
              "Nothing is gained by teaching the same material twice under a different title, so the course points at construction-math and moves on.",
            sourceLessonSlug: "four-levels-and-the-other-half",
          },
          {
            prompt: "What does the presence of those five subjects on a real syllabus tell a prospective apprentice?",
            options: [
              "The trade is not only hand skills",
              "That the programme is longer than it needs to be for the technical content",
              "That the sponsor is required by regulation to include general education",
              "That the apprentice must hold a college qualification before entering",
            ],
            correctIndex: 0,
            explanation:
              "A journeyman reads, writes, measures, gets along with people, manages uneven money, and knows how the trade got its conditions.",
            sourceLessonSlug: "four-levels-and-the-other-half",
          },
          {
            prompt: "What is a craft catalogue?",
            options: [
              "A publisher's public list of levels, modules and hours",
              "A sponsor's register of the apprentices enrolled in each craft",
              "A licensing authority's list of the trades it issues licences in",
              "An employer's schedule of the crafts it employs on a given project",
            ],
            correctIndex: 0,
            explanation:
              "It is how the non-union curriculum's structure is published, which is what made the four levels and their hours citable here.",
            sourceLessonSlug: "four-levels-and-the-other-half",
          },
          {
            prompt: "What is a load calculation, and where do both curricula place it?",
            options: [
              "Working out electrical demand, at the third stage",
              "Working out conductor weight for handling, at the first stage",
              "Working out the cost of a job for bidding, at the fourth stage",
              "Working out safe working loads for lifting, at the second stage",
            ],
            correctIndex: 0,
            explanation:
              "Calculations sit third in both, after theory and before specialisation, which is part of the convergence lesson 12 describes.",
            sourceLessonSlug: "four-levels-and-the-other-half",
          },
          {
            prompt: "What are indentured hours, as the plan of study uses the term?",
            options: [
              "On-the-job hours counted from registration",
              "Classroom hours completed in the sponsor's training centre",
              "Hours worked for a signatory contractor before applying to the programme",
              "Hours of related instruction credited as advanced standing",
            ],
            correctIndex: 0,
            explanation:
              "They are the on-the-job hours counted from registration to the programme, and they are used as the threshold for advancing a term.",
            sourceLessonSlug: "five-terms-in-the-sponsors-words",
          },
          {
            prompt: "Where does arc flash safety appear on the Indianapolis plan of study?",
            options: [
              "Term four",
              "Term one, with the rest of the safety training",
              "Term five, immediately before the final examination preparation",
              "Term two, alongside the electrical theory it depends on",
            ],
            correctIndex: 0,
            explanation:
              "It appears in term four with confined space, as a specialist subject rather than a first-year one.",
            sourceLessonSlug: "five-terms-in-the-sponsors-words",
          },
          {
            prompt: "Which safety course appears in term one of that plan, and which in term five?",
            options: [
              "The ten-hour course, then the thirty-hour course",
              "The thirty-hour course, then the ten-hour course",
              "Both the ten-hour and thirty-hour courses appear in term one",
              "Neither, because safety training is delivered by the employer",
            ],
            correctIndex: 0,
            explanation:
              "The plan puts the ten-hour course in term one and the thirty-hour course in term five, alongside the final examination preparation.",
            sourceLessonSlug: "five-terms-in-the-sponsors-words",
          },
          {
            prompt: "Why does lesson 11 say most descriptions of apprenticeship school are vague?",
            options: [
              "The writer has not seen a syllabus",
              "Because sponsors keep their plans of study confidential between intakes",
              "Because the regulation leaves the curriculum entirely to the employer",
              "Because programmes vary too much between trades to describe usefully",
            ],
            correctIndex: 0,
            explanation:
              "One Indianapolis sponsor publishes its plan of study, which is why this section can be specific instead.",
            sourceLessonSlug: "five-terms-in-the-sponsors-words",
          },
          {
            prompt: "What does lesson 12 mean by general education inside a trade programme?",
            options: [
              "The non-trade courses on the syllabus",
              "The introductory technical courses taken before specialisation begins",
              "The academic credit a partner college grants for the trade training",
              "The orientation and registration sessions at the start of the term",
            ],
            correctIndex: 0,
            explanation:
              "Writing, finance, human relations and history, which sit on the plan alongside conduit bending and motor controls.",
            sourceLessonSlug: "four-levels-and-the-other-half",
          },
          {
            prompt: "Which of these does lesson 12 say a journeyman does besides use tools?",
            options: [
              "Reads, writes, measures and manages money",
              "Supervises the jobsite and signs off the certified payroll each week",
              "Issues permits and inspects completed work for the building authority",
              "Negotiates the collective agreement on behalf of the local",
            ],
            correctIndex: 0,
            explanation:
              "The list is drawn from the five non-technical courses on the real syllabus, including getting along with people and knowing the trade's history.",
            sourceLessonSlug: "four-levels-and-the-other-half",
          },
          {
            prompt: "Which organisations' curricula does lesson 12 set side by side?",
            options: [
              "A union training institute and a national craft publisher",
              "Two state licensing boards in neighbouring jurisdictions",
              "A community college and a federal apprenticeship office",
              "Two testing vendors that write trade licensing examinations",
            ],
            correctIndex: 0,
            explanation:
              "The comparison is between the Indianapolis sponsor's five-term plan and the four-level published craft catalogue.",
            sourceLessonSlug: "four-levels-and-the-other-half",
          },
          {
            prompt: "Which topics sit at Level 2 of the four-level structure?",
            options: [
              "Conductor installations, alternating current, motors, grounding",
              "An occupational overview, safety and conduit bending",
              "Standby systems, health care facilities and heat tracing",
              "Dwelling load calculations, commercial services and hazardous locations",
            ],
            correctIndex: 0,
            explanation:
              "Level 2 covers conductor installations, alternating current, control concepts, lighting, cable tray, motors, terminations and splices, grounding and bonding, and breakers and fuses.",
            sourceLessonSlug: "four-levels-and-the-other-half",
          },
          {
            prompt: "Which topics sit at Level 4 of the four-level structure?",
            options: [
              "Standby systems, health care facilities, heat tracing, journeyman modules",
              "Theory and circuits, test equipment and basic construction documents",
              "Conductor installations, lighting and cable tray",
              "Transformers, distribution equipment and commercial services",
            ],
            correctIndex: 0,
            explanation:
              "Heating and cooling systems and controls, non-dwelling load calculations, standby and emergency systems, health care facilities, fire alarm, heat tracing, medium-voltage splices and two Journeyman Essentials modules.",
            sourceLessonSlug: "four-levels-and-the-other-half",
          },
          {
            prompt: "What did the course use the non-union catalogue for, and what did it not take from it?",
            options: [
              "The topic list, not the books' contents",
              "The hours, not the topic names, which are the publisher's expression",
              "The examination questions, not the curriculum structure",
              "Nothing at all, since the catalogue is not publicly available",
            ],
            correctIndex: 0,
            explanation:
              "A published list of levels, module titles and hours is what was read. Nothing from inside any trade textbook appears anywhere in this course.",
            sourceLessonSlug: "four-levels-and-the-other-half",
          },
          {
            prompt: "What does lesson 12 advise about the material in construction-math and history-of-unions?",
            options: [
              "Go to those courses",
              "Wait until they are rewritten to match the sponsor's plan of study",
              "Treat them as equivalent to the corresponding courses on the plan",
              "Skip them, since the sponsor will teach the same material",
            ],
            correctIndex: 0,
            explanation:
              "They already teach the arithmetic and the labour history, and section 8 returns to one lesson of the labour history course for a specific reason.",
            sourceLessonSlug: "four-levels-and-the-other-half",
          },
          {
            prompt: "What did the sponsor's plan of study describe, in scope?",
            options: [
              "One programme, one trade, one city, one intake",
              "The national standard every electrical apprenticeship follows",
              "The minimum content the Registration Agency requires of a registered programme",
              "The syllabus the licensing examination is written against",
            ],
            correctIndex: 0,
            explanation:
              "It was published for autumn 2025 and read on 20 September 2026, and another local's plan will differ.",
            sourceLessonSlug: "five-terms-in-the-sponsors-words",
          },
          {
            prompt: "What should you ask your own sponsor for, after reading this section?",
            options: [
              "Its current plan of study",
              "A copy of the craft catalogue its curriculum is drawn from",
              "The examination content outline for the licence in your jurisdiction",
              "A statement of the advanced standing it will grant for prior training",
            ],
            correctIndex: 0,
            explanation:
              "A plan of study changes, and a sponsor will have a current one. That is the document to compare against the one described here.",
            sourceLessonSlug: "five-terms-in-the-sponsors-words",
          },
          {
            prompt: "What makes the convergence between the two curricula worth noticing?",
            options: [
              "Two organisations that disagree ordered it the same",
              "That both were written by the same curriculum publisher under different names",
              "That both are approved by the same Registration Agency",
              "That both lead to the same licence in the same jurisdiction",
            ],
            correctIndex: 0,
            explanation:
              "Organisations that disagree about nearly everything put the material in almost the same order, which is a signal that the order reflects the work.",
            sourceLessonSlug: "four-levels-and-the-other-half",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 7 — Money, fees, and the examination at the end
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "what-it-pays-and-what-it-costs",
      title: "13 · What it pays, and what it costs",
      section: "Section 7 · Money, fees, and the examination at the end",
      body: `Every figure in this lesson was read on 20 September 2026 and will move. Use them for shape, then check your own.

**What one programme pays.** The Indianapolis electrical training sponsor publishes an apprentice starting rate of $22.90 per hour, with annual raises, and says that after completing the apprenticeship an electrician will earn a minimum of $48.90 per hour (Electrical Training Institute, n.d.). Those are one sponsor's published figures for one trade in one city on one date. They are not a national wage and they are not a promise. What they do show is the shape of the deal: a wage from day one, rising on a schedule, roughly doubling across the term.

**What entering costs.** On the routes in section 5, close to nothing. The programmes are paid or free, and the degree attached to that Indianapolis programme came at no cost beyond semester book fees. The real costs of the first year are the ones nobody advertises: tools, boots, transport, and the hours.

**What a licence costs, where one exists.** Indiana's plumbing licence fees were $30.00 to apply and $30.00 to renew, with late renewal at $45.00 after 31 December and $130.00 after 1 March. The Journeyman Plumber examination fee paid to the testing vendor was $75.00, and the Plumbing Contractor examination fee was $100.00. Marion County examinations administered by the same vendor were $80.00 each, from a bulletin dated 1 March 2022 (Indiana Professional Licensing Agency, n.d.; Prov, 2026; Prov, 2022).

**What contracting costs, which is a different order of thing.** To hold an Indianapolis electrical contractor licence, section 875-210 requires at least six years of experience, of which two may be educational and four must be practical work experience, all pertaining to electrical power distribution systems. Section 875-216 requires a $10,000 surety bond. Section 875-217 requires $500,000 of combined bodily injury and property damage liability cover, plus workers' compensation. The board's application adds a notarised employer letter documenting the six years, three customer references, and an appearance before the board.

**One useful softening in that requirement.** The board's application says it may assign up to two years of experience for successful completion of related college courses, or a related apprenticeship (Indianapolis Board of Electrical Examiners, n.d.). That is the two educational years in section 875-210 being filled by schooling. An apprenticeship is not only training here. It is also credit against a licence requirement years later.

**And one exemption worth knowing.** Section 875-222 lets an owner-occupier of a one- or two-family house do the work themselves without a licence, with a permit and written board approval that they have sufficient knowledge and skill. That is an exemption for a homeowner, not a route into the trade.

**The summary a person can plan around.** Entering the trade costs very little money and a great deal of time. Becoming a contractor costs years of documented experience, a bond, insurance and a hearing. Those are two different decisions, separated by most of a decade, and the second one is not required for the first.

:::reveal What starting and completion hourly rates does the Indianapolis electrical sponsor publish? ||| A starting rate of $22.90 per hour with annual raises, and a minimum of $48.90 per hour after completing the apprenticeship, as read on 20 September 2026.

:::reveal What experience does Indianapolis section 875-210 require for an electrical contractor licence? ||| At least six years total, of which two may be educational and four must be practical work experience, all pertaining to electrical power distribution systems.

:::reveal What bond and insurance do sections 875-216 and 875-217 require? ||| A $10,000 surety bond, and $500,000 of combined bodily injury and property damage liability cover, plus workers' compensation.

:::reveal How may up to two years of the six be satisfied without working them? ||| The board may assign up to two years of experience for successful completion of related college courses, or a related apprenticeship.

## Vocabulary
- **Wage progression**: the scheduled rises through an apprenticeship, which is what turns a starting rate into a completion rate.
- **Liability cover**: insurance against injury to others and damage to property, required of contractors rather than of workers.
- **Owner-occupier exemption**: a provision letting a homeowner do work on their own one- or two-family house without a trade licence, under stated conditions.
- **Practical work experience**: experience gained by doing the work, which the Indianapolis ordinance distinguishes from educational experience.

## Sources
Electrical Training Institute. (n.d.). *Electrician program*. Retrieved September 20, 2026, from https://eti-indy.org/electrician-program/
Indiana Professional Licensing Agency. (n.d.). *Plumbing licensing information*. Retrieved September 20, 2026, from https://www.in.gov/pla/professions/plumbing-home/plumbing-licensing-information
Indianapolis Board of Electrical Examiners. (n.d.). *Board of Electrical Examiners application* [PDF]. City of Indianapolis. Retrieved September 20, 2026, from https://media.graphassets.com/BM4sUhq0QMFY1xQCdx6i
International Brotherhood of Electrical Workers Local 481. (n.d.). *Apprenticeship*. Retrieved September 20, 2026, from https://ibew481.org/apprenticeship/
Prov, Inc. (2022, March 1). *Indiana Marion County candidate information bulletin* [PDF]. https://provexam.com/wp-content/uploads/2022/05/IN-Marion-County-Candidate-Information-Bulletin-2022.03.01.pdf
Prov, Inc. (2026, June 24). *Indiana candidate information bulletin* [PDF]. https://provexam.com/wp-content/uploads/2026/06/Indiana_CIB-2026.06.24.pdf
Revised Code of the Consolidated City and County, ch. 875, art. II (Indianapolis-Marion Cnty., Ind. 2026). https://library.municode.com/in/indianapolis_-_marion_county/codes/code_of_ordinances`,
    },
    {
      slug: "open-book-and-the-wrong-edition",
      title: "14 · Open book, strict rules, and the wrong edition",
      section: "Section 7 · Money, fees, and the examination at the end",
      body: `Trade licensing examinations are not what most people picture, and the difference is worth knowing long before you sit one.

**What one examination actually is.** The Indiana Journeyman Plumber examination, as published in the vendor's candidate bulletin of 24 June 2026, is 90 questions in 3 hours, with a $75.00 fee. Its content outline, in questions, was: Vents 17, Sanitary Drainage 15, Water Supply and Distribution 14, Fixtures 10, Developed Length and Isometric Analysis 8, General Requirements 7, Water Heaters 7, Storm Water Systems 6, and Indiana Business 6. A candidate gets up to seven attempts within two years, with the first attempt due within a year of approval (Prov, 2026).

**The comparison that tells you what a contractor licence is for.** The Plumbing Contractor examination is also 90 questions in 3 hours, at $100.00, but Indiana Business jumps from 6 questions to 14 and the technical sections shrink to make room. The difference between the two examinations is almost exactly business and law. That is the clearest statement anywhere in this course of what the contractor licence is actually about.

**Open book, which is the part that surprises people.** The vendor's Marion County bulletin states it flatly: all exams are open book and are timed. Its reference rules, from that bulletin dated 1 March 2022, are strict and worth learning as a skill in themselves. The book title must be exact. Older and newer editions are always permitted. Photocopies are allowed only where the bulletin says so. Permanent tabs are allowed, and sticky notes and repositionable tabs are not. Highlighting and underlining done in pen beforehand are allowed, but no marking in the books during the test, and no taking notes (Prov, 2022).

Read that list again as what it is: an examination of whether you can find things. Open book with a timer is not easier than closed book. It rewards a candidate who has lived in the book and tabbed it, and it punishes one who expects to read it during the test.

**The Marion County list itself.** That vendor administered Air Conditioning A, B and D, High Pressure Steam, Refrigeration Unlimited, and Wrecking A and C, computer-based at $80.00 each, running 50 to 100 questions and 2 to 4 hours. There is no electrical examination on that list, which is consistent with the ordinance sending electrical candidates elsewhere: the Indianapolis board determines whether an applicant may take the International Code Council examination, the applicant then works with that body and sits it, and must score 75% or higher (Indianapolis Board of Electrical Examiners, n.d.).

**Now the trap.** An open book examination is written against a specific edition, and a state's adopted edition is often not the current one. The Indiana Fire Prevention and Building Safety Commission's own rules table, read 20 September 2026, lists as currently in effect: the Indiana Electrical Code 2009 Edition at 675 IAC 17-1.8, adopting the National Electrical Code 2008 Edition, First Printing, effective 26 August 2009; the Indiana Plumbing Code at 675 IAC 16, adopting the International Plumbing Code 2006 Edition, Second Printing; the Indiana Building Code at 675 IAC 13-2.6, adopting the 2012 International Building Code; the Indiana Residential Code at 675 IAC 14-4.4, adopting the 2018 International Residential Code; and the Indiana Mechanical Code, adopting the 2012 International Mechanical Code (Indiana Department of Homeland Security, n.d.).

**Indiana is enforcing a 2008 electrical code in 2026.** A person who buys the current edition to study for an Indiana examination has bought the wrong book, and much of the free exam preparation on the internet, which quotes the newest edition, will tell them to. The plumbing examination confirms the pattern from the other direction: its references were the 2006 plumbing code in its Indiana printing, with the plain 2006 edition or its commentary volume permitted as substitutes, plus the state amendments at 675 IAC 16-1.4, which candidates may print themselves (Prov, 2026).

**What to do instead, and it takes ten minutes.** Find your own state's adoption rule, which is a public document, and read which edition it names. That rule is free even when the code it adopts is not. Note the date you read it. Then buy the edition the rule names, not the newest one. One commercial site seen on 20 September 2026 described a pending Indiana adoption of a newer electrical edition; it was not on the Commission's own currently-in-effect table, so this course does not treat it as a fact, and neither should you until the table says so. How to read a code once you have the right one is the subject of *Read the Plan and the Code*, and this course stops at the examination question: which edition.

:::reveal How many questions and how long is the Indiana Journeyman Plumber examination, as published on 24 June 2026? ||| 90 questions in 3 hours, with a $75.00 fee.

:::reveal What is almost the entire difference between the Indiana journeyman and contractor plumbing examinations? ||| Business and law. Indiana Business rises from 6 questions to 14 and the technical sections shrink to make room.

:::reveal Which reference aids are allowed in the open book examinations described, and which are not? ||| Permanent tabs and pre-existing highlighting or underlining in pen are allowed. Sticky and repositionable tabs are not, no marking may be done during the test, and no notes may be taken.

:::reveal Which edition of the national electrical code does Indiana's rule at 675 IAC 17-1.8 adopt? ||| The 2008 Edition, First Printing, effective 26 August 2009.

:::reveal What should you buy to study for a licensing examination, and how do you know? ||| The edition your state's adoption rule names. Read the rule, which is public and free, and note the date you read it.

## Vocabulary
- **Candidate information bulletin**: the testing vendor's published description of an examination, including fees, timing, content outline and reference rules.
- **Content outline**: the breakdown of an examination by subject and number of questions, which shows where the marks actually are.
- **Adoption rule**: the state rule that makes a model code enforceable by naming the edition adopted, and which is public even when the code is not.
- **Open book**: an examination in which named references may be brought in, under rules about editions, tabs and marking.
- **Model code**: a code written by a private body, which has legal force only where a jurisdiction adopts it by rule.

## Sources
Indiana Department of Homeland Security. (n.d.). *Fire Prevention and Building Safety Commission rules*. Retrieved September 20, 2026, from https://www.in.gov/dhs/boards-and-commissions/fpbsc-rules/
Indianapolis Board of Electrical Examiners. (n.d.). *Board of Electrical Examiners application* [PDF]. City of Indianapolis. Retrieved September 20, 2026, from https://media.graphassets.com/BM4sUhq0QMFY1xQCdx6i
Prov, Inc. (2022, March 1). *Indiana Marion County candidate information bulletin* [PDF]. https://provexam.com/wp-content/uploads/2022/05/IN-Marion-County-Candidate-Information-Bulletin-2022.03.01.pdf
Prov, Inc. (2026, June 24). *Indiana candidate information bulletin* [PDF]. https://provexam.com/wp-content/uploads/2026/06/Indiana_CIB-2026.06.24.pdf`,
    },
    {
      slug: "section-7-quiz",
      title: "Section 7 quiz · Money and the examination",
      section: "Section 7 · Money, fees, and the examination at the end",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What apprentice starting rate does the Indianapolis electrical sponsor publish?",
            options: [
              "$22.90 per hour",
              "$48.90 per hour, rising by annual increments through the five terms",
              "The federal minimum wage, which is the floor the apprenticeship regulation sets",
              "The prevailing wage for the classification on public work in Marion County",
            ],
            correctIndex: 0,
            explanation:
              "The sponsor publishes $22.90 per hour to start, with annual raises. It is one sponsor's figure for one trade in one city on one date.",
            sourceLessonSlug: "what-it-pays-and-what-it-costs",
          },
          {
            prompt: "What minimum rate does that sponsor say a completer will earn?",
            options: [
              "$48.90 per hour",
              "$22.90 per hour, being the rate the apprentice started on five years earlier",
              "$75.00 per hour, reflecting the difference between journey and master work",
              "Whatever the collective agreement sets that year, which the page does not state",
            ],
            correctIndex: 0,
            explanation:
              "The published figure is a minimum of $48.90 per hour after completing the apprenticeship, roughly double the starting rate.",
            sourceLessonSlug: "what-it-pays-and-what-it-costs",
          },
          {
            prompt: "How should a reader treat those two wage figures?",
            options: [
              "As one sponsor's published figures on one date",
              "As the national average for the trade, published by the industry body",
              "As a guaranteed minimum for anyone completing a registered programme",
              "As the prevailing wage rate for federally funded projects in the area",
            ],
            correctIndex: 0,
            explanation:
              "They are not a national wage and not a promise. What they show is the shape of the deal: a wage from day one, rising on a schedule.",
            sourceLessonSlug: "what-it-pays-and-what-it-costs",
          },
          {
            prompt: "What does lesson 13 name as the real first-year costs on these routes?",
            options: [
              "Tools, boots, transport and the hours",
              "Tuition, books and examination fees, which the sponsor recovers from wages",
              "Union dues, licence fees and insurance premiums",
              "Bond, liability cover and workers' compensation",
            ],
            correctIndex: 0,
            explanation:
              "The programmes are paid or free, so the costs nobody advertises are the practical ones and the time.",
            sourceLessonSlug: "what-it-pays-and-what-it-costs",
          },
          {
            prompt: "What were the Indiana Journeyman Plumber and Plumbing Contractor examination fees?",
            options: [
              "$75.00 and $100.00",
              "$30.00 and $45.00, matching the application and late renewal fees",
              "$80.00 each, the same as the Marion County examinations",
              "$100.00 and $130.00, the second reflecting the larger business section",
            ],
            correctIndex: 0,
            explanation:
              "Those were the fees paid to the testing vendor, as published in its candidate bulletin of 24 June 2026.",
            sourceLessonSlug: "what-it-pays-and-what-it-costs",
          },
          {
            prompt: "What did each Marion County examination cost, from the bulletin dated 1 March 2022?",
            options: [
              "$80.00",
              "$75.00, matching the state journeyman plumber examination fee",
              "$30.00, matching the state licence application fee",
              "$100.00, matching the state contractor examination fee",
            ],
            correctIndex: 0,
            explanation:
              "Computer-based at $80.00 each, running 50 to 100 questions and 2 to 4 hours, from a bulletin whose own date is 1 March 2022.",
            sourceLessonSlug: "what-it-pays-and-what-it-costs",
          },
          {
            prompt: "How much experience does Indianapolis section 875-210 require for an electrical contractor licence?",
            options: [
              "Six years",
              "Four years, all of it practical work experience on electrical power distribution systems",
              "Eight thousand hours, matching the union programme's published on-the-job total",
              "Two years, with a further two available as credit for college courses",
            ],
            correctIndex: 0,
            explanation:
              "At least six years total, of which two may be educational and four must be practical work experience pertaining to electrical power distribution systems.",
            sourceLessonSlug: "what-it-pays-and-what-it-costs",
          },
          {
            prompt: "How is that six years divided?",
            options: [
              "Up to two educational, at least four practical",
              "Up to four educational, at least two practical, to encourage college entry",
              "Three and three, split evenly between schooling and work",
              "Six practical, with education counted separately as a prerequisite",
            ],
            correctIndex: 0,
            explanation:
              "Two of the six may be educational and four must be practical work experience, all pertaining to electrical power distribution systems.",
            sourceLessonSlug: "what-it-pays-and-what-it-costs",
          },
          {
            prompt: "What surety bond does section 875-216 require?",
            options: [
              "$10,000",
              "$500,000, the same figure the ordinance sets for liability cover",
              "$100,000, reduced to $50,000 for holders of the residential licence",
              "None, because bonding is a condition of each individual permit",
            ],
            correctIndex: 0,
            explanation:
              "A $10,000 surety bond. The $500,000 figure is the liability cover required by the following section.",
            sourceLessonSlug: "what-it-pays-and-what-it-costs",
          },
          {
            prompt: "What liability cover does section 875-217 require?",
            options: [
              "$500,000 combined bodily injury and property damage",
              "$10,000 combined, matching the surety bond the previous section requires",
              "$1,000,000 per occurrence, with workers' compensation carried separately",
              "Whatever the board sets annually, which the ordinance leaves open",
            ],
            correctIndex: 0,
            explanation:
              "$500,000 of combined bodily injury and property damage liability cover, plus workers' compensation.",
            sourceLessonSlug: "what-it-pays-and-what-it-costs",
          },
          {
            prompt: "What else does the board's application require of a contractor licence applicant?",
            options: [
              "An employer letter, references and an appearance",
              "A signed statement from the union local confirming journey status",
              "A certificate of completion from a registered apprenticeship programme",
              "Proof of continuous residence in the county for the preceding five years",
            ],
            correctIndex: 0,
            explanation:
              "A notarised employer letter documenting the six years, three customer references, and an appearance before the board.",
            sourceLessonSlug: "what-it-pays-and-what-it-costs",
          },
          {
            prompt: "How may up to two of the six years be satisfied without working them?",
            options: [
              "Related college courses, or a related apprenticeship",
              "Military service in a trade related to electrical power distribution",
              "A licence held in another jurisdiction with a reciprocity arrangement",
              "Ownership of a licensed electrical contracting business",
            ],
            correctIndex: 0,
            explanation:
              "The board's application says it may assign up to two years of experience for successful completion of related college courses, or a related apprenticeship.",
            sourceLessonSlug: "what-it-pays-and-what-it-costs",
          },
          {
            prompt: "What does that credit provision show about an apprenticeship?",
            options: [
              "It also counts against a licence requirement later",
              "That it can be substituted entirely for the practical experience requirement",
              "That the board prefers college courses to apprenticeship training",
              "That a registered apprenticeship exempts a holder from the examination",
            ],
            correctIndex: 0,
            explanation:
              "An apprenticeship is not only training. It is also credit against a licence requirement years later, filling the two educational years.",
            sourceLessonSlug: "what-it-pays-and-what-it-costs",
          },
          {
            prompt: "What does Indianapolis section 875-222 permit?",
            options: [
              "An owner-occupier to work on their own house",
              "An apprentice to perform electrical work without direct supervision after four years",
              "A licence holder from another jurisdiction to work for up to ninety days",
              "A property owner to employ unlicensed workers on any building they own",
            ],
            correctIndex: 0,
            explanation:
              "An owner-occupier of a one- or two-family house may do the work without a licence, with a permit and written board approval of sufficient knowledge and skill.",
            sourceLessonSlug: "what-it-pays-and-what-it-costs",
          },
          {
            prompt: "Is the owner-occupier exemption a route into the trade?",
            options: [
              "No",
              "Yes, because the work performed under it counts toward the practical experience requirement",
              "Yes, because the board's written approval is a form of qualification",
              "Only for one- or two-family structures, where it substitutes for the residential licence",
            ],
            correctIndex: 0,
            explanation:
              "It is an exemption for a homeowner working on their own house, and lesson 13 says so directly.",
            sourceLessonSlug: "what-it-pays-and-what-it-costs",
          },
          {
            prompt: "How does lesson 13 summarise the two decisions a person faces?",
            options: [
              "Entering costs time, contracting costs years and money",
              "Entering costs money and contracting costs time, which is the reverse of most careers",
              "Both cost about the same, which is why they are usually taken together",
              "Neither costs anything, because the pipelines are free and the licence fee is small",
            ],
            correctIndex: 0,
            explanation:
              "They are separated by most of a decade, and the second is not required for the first.",
            sourceLessonSlug: "what-it-pays-and-what-it-costs",
          },
          {
            prompt: "How many questions is the Indiana Journeyman Plumber examination, and how long?",
            options: [
              "90 questions in 3 hours",
              "100 questions in 4 hours, matching the longest of the county examinations",
              "50 questions in 2 hours, the shortest format the vendor offers",
              "90 questions in 4 hours, the extra hour reflecting the open book format",
            ],
            correctIndex: 0,
            explanation:
              "90 questions in 3 hours with a $75.00 fee, as published in the vendor's bulletin of 24 June 2026.",
            sourceLessonSlug: "open-book-and-the-wrong-edition",
          },
          {
            prompt: "Which subject carries the most questions on that examination's content outline?",
            options: [
              "Vents",
              "Water Supply and Distribution, at 17 questions of the 90",
              "Indiana Business, which is the largest single section on both plumbing examinations",
              "Fixtures, at 15 questions, ahead of sanitary drainage",
            ],
            correctIndex: 0,
            explanation:
              "Vents at 17, then Sanitary Drainage 15, Water Supply and Distribution 14, Fixtures 10, and the rest below that.",
            sourceLessonSlug: "open-book-and-the-wrong-edition",
          },
          {
            prompt: "How many attempts does a candidate get at the Indiana plumbing examination, and in what period?",
            options: [
              "Seven within two years",
              "Three within one year, after which the application must be renewed",
              "Unlimited, provided the fee is paid for each attempt",
              "Two within six months of Commission approval",
            ],
            correctIndex: 0,
            explanation:
              "Up to seven attempts within two years, with the first attempt due within a year of approval.",
            sourceLessonSlug: "open-book-and-the-wrong-edition",
          },
          {
            prompt: "By when must a candidate make a first attempt after approval?",
            options: [
              "Within a year",
              "Within ninety days, or the approval lapses and must be sought again",
              "Within two years, being the whole of the attempt window",
              "There is no deadline, provided all seven attempts fall inside two years",
            ],
            correctIndex: 0,
            explanation:
              "The first attempt is due within a year of approval, inside a two-year window that allows up to seven attempts.",
            sourceLessonSlug: "open-book-and-the-wrong-edition",
          },
          {
            prompt: "What changes between the journeyman and contractor plumbing examinations?",
            options: [
              "Indiana Business rises from 6 questions to 14",
              "The length doubles, from 90 questions in 3 hours to 180 questions in 6",
              "The contractor examination drops the open book format and its reference list",
              "The passing score rises from 70 percent to 75 percent",
            ],
            correctIndex: 0,
            explanation:
              "Both are 90 questions in 3 hours. The business section grows and the technical sections shrink, so the difference is almost exactly business and law.",
            sourceLessonSlug: "open-book-and-the-wrong-edition",
          },
          {
            prompt: "What does that difference tell you about a contractor licence?",
            options: [
              "It is about business and law",
              "That it requires deeper technical knowledge than the journeyman licence",
              "That it is graded more strictly, which is why the fee is higher",
              "That it covers a wider range of trades than the journeyman licence",
            ],
            correctIndex: 0,
            explanation:
              "Lesson 14 calls it the clearest statement anywhere in the course of what the contractor licence is actually about.",
            sourceLessonSlug: "open-book-and-the-wrong-edition",
          },
          {
            prompt: "What does the vendor's Marion County bulletin say about the format of its examinations?",
            options: [
              "Open book and timed",
              "Closed book, with a code extract supplied at the test centre",
              "Open book and untimed, so candidates may search the references fully",
              "Closed book for the technical sections and open book for business and law",
            ],
            correctIndex: 0,
            explanation:
              "The bulletin states it flatly: all exams are open book and are timed.",
            sourceLessonSlug: "open-book-and-the-wrong-edition",
          },
          {
            prompt: "Which editions of a named reference are permitted under those rules?",
            options: [
              "Older and newer ones",
              "Only the exact edition named, with no substitutions of any kind",
              "Only the named edition and the one immediately preceding it",
              "Any edition, provided the candidate declares it before the test begins",
            ],
            correctIndex: 0,
            explanation:
              "The title must be exact, and older and newer editions are always permitted. That is a rule about the title rather than about the year.",
            sourceLessonSlug: "open-book-and-the-wrong-edition",
          },
          {
            prompt: "Which kind of tab is allowed in those examinations, and which is not?",
            options: [
              "Permanent tabs yes, repositionable tabs no",
              "Repositionable tabs yes, permanent tabs no, because permanent tabs damage the book",
              "Both are allowed, provided they carry no writing",
              "Neither is allowed, because tabs are a form of note",
            ],
            correctIndex: 0,
            explanation:
              "Permanent tabs are allowed, and sticky notes and repositionable tabs are not.",
            sourceLessonSlug: "open-book-and-the-wrong-edition",
          },
          {
            prompt: "What do those rules say about marking the books?",
            options: [
              "Pre-existing pen marks yes, marking during the test no",
              "No marks of any kind, including highlighting done before the examination",
              "Any marking is allowed, since the book is the candidate's own property",
              "Pencil marks only, and only in the margins",
            ],
            correctIndex: 0,
            explanation:
              "Highlighting and underlining done in pen beforehand are allowed, but no marking in the books during the test, and no taking notes.",
            sourceLessonSlug: "open-book-and-the-wrong-edition",
          },
          {
            prompt: "Why does lesson 14 say an open book examination is not easier than a closed book one?",
            options: [
              "It tests whether you can find things",
              "Because the questions are drawn from a larger body of material than a closed book test",
              "Because the passing score is set higher to compensate for the references",
              "Because candidates may not bring the edition they studied from",
            ],
            correctIndex: 0,
            explanation:
              "Open book with a timer rewards a candidate who has lived in the book and tabbed it, and punishes one who expects to read it during the test.",
            sourceLessonSlug: "open-book-and-the-wrong-edition",
          },
          {
            prompt: "Which examinations did the vendor administer for Marion County?",
            options: [
              "Air conditioning, steam, refrigeration and wrecking",
              "Electrical, plumbing, air conditioning and wrecking, covering the city's licensed trades",
              "Only electrical, with the other trades examined by the state commission",
              "Building, residential and mechanical, matching the adopted code editions",
            ],
            correctIndex: 0,
            explanation:
              "Air Conditioning A, B and D, High Pressure Steam, Refrigeration Unlimited, and Wrecking A and C. There is no electrical examination on that list.",
            sourceLessonSlug: "open-book-and-the-wrong-edition",
          },
          {
            prompt: "Why is the absence of an electrical examination from that county list consistent with the ordinance?",
            options: [
              "Electrical candidates are sent to a different body",
              "Because the city stopped licensing electrical contractors when the state took over",
              "Because electrical examinations are administered by the board itself at its meetings",
              "Because the residential licence does not require an examination at all",
            ],
            correctIndex: 0,
            explanation:
              "The board determines eligibility, the applicant then works with the International Code Council and sits its examination, scoring 75% or higher.",
            sourceLessonSlug: "open-book-and-the-wrong-edition",
          },
          {
            prompt: "What score must an Indianapolis electrical candidate achieve?",
            options: [
              "75% or higher",
              "80% or higher, matching the passing score used in this course's own quizzes",
              "70% or higher, the figure used across the county examinations",
              "A scaled score of 500, as reported by the testing body",
            ],
            correctIndex: 0,
            explanation:
              "The board's application states a 75% minimum on the International Code Council examination it determines eligibility for.",
            sourceLessonSlug: "open-book-and-the-wrong-edition",
          },
          {
            prompt: "Which edition of the national electrical code does Indiana's rule at 675 IAC 17-1.8 adopt?",
            options: [
              "The 2008 Edition, First Printing",
              "The 2009 Edition, which is what the Indiana Electrical Code is named after",
              "The current edition, updated automatically as new editions are published",
              "The 2012 Edition, matching the building and mechanical code adoptions",
            ],
            correctIndex: 0,
            explanation:
              "The Indiana Electrical Code 2009 Edition adopts the 2008 Edition, First Printing, effective 26 August 2009. The rule's name and the adopted edition are different years.",
            sourceLessonSlug: "open-book-and-the-wrong-edition",
          },
          {
            prompt: "Which edition of the international plumbing code does Indiana adopt at 675 IAC 16?",
            options: [
              "The 2006 Edition, Second Printing",
              "The 2012 Edition, which is what the Indiana Plumbing Code is named after",
              "The 2018 Edition, matching the residential code adoption",
              "The current edition, with state amendments published separately each year",
            ],
            correctIndex: 0,
            explanation:
              "The 2012 Indiana Plumbing Code adopts the International Plumbing Code 2006 Edition, Second Printing.",
            sourceLessonSlug: "open-book-and-the-wrong-edition",
          },
          {
            prompt: "Which edition does the Indiana Residential Code at 675 IAC 14-4.4 adopt?",
            options: [
              "The 2018 International Residential Code",
              "The 2012 International Building Code, which covers residential structures too",
              "The 2020 edition, matching the name of the Indiana rule",
              "The 2006 edition, matching the plumbing code adoption",
            ],
            correctIndex: 0,
            explanation:
              "The 2020 Indiana Residential Code adopts the 2018 International Residential Code, effective 26 December 2019.",
            sourceLessonSlug: "open-book-and-the-wrong-edition",
          },
          {
            prompt: "What mistake does the edition trap lead a learner into?",
            options: [
              "Buying the wrong book",
              "Sitting the wrong examination for the licence class they want",
              "Applying to the wrong authority for the trade they work in",
              "Counting classroom hours toward the on-the-job requirement",
            ],
            correctIndex: 0,
            explanation:
              "A person who buys the current edition to study for an Indiana examination has bought the wrong book, and free exam preparation quoting the newest edition will tell them to.",
            sourceLessonSlug: "open-book-and-the-wrong-edition",
          },
          {
            prompt: "How does a person find out which edition their own state enforces?",
            options: [
              "Read the state's adoption rule",
              "Ask the publisher of the model code which edition is current in that state",
              "Check which edition the testing vendor's practice questions are written against",
              "Look at the edition the local building inspector carries on site",
            ],
            correctIndex: 0,
            explanation:
              "The adoption rule is public and free even when the code it adopts is not, and it names the edition. Note the date you read it.",
            sourceLessonSlug: "open-book-and-the-wrong-edition",
          },
          {
            prompt: "How does the course treat a commercial site's report of a pending Indiana code adoption?",
            options: [
              "Not as a fact",
              "As a fact, since the site specialises in licensing information for the trades",
              "As a fact once the effective date it names has passed",
              "As a correction to the Commission's own table, which had not been updated",
            ],
            correctIndex: 0,
            explanation:
              "It was not on the Commission's currently-in-effect table, so the course does not treat it as a fact, and says a reader should not either until the table says so.",
            sourceLessonSlug: "open-book-and-the-wrong-edition",
          },
          {
            prompt: "What references did the Indiana plumbing examination name?",
            options: [
              "The 2006 plumbing code plus the state amendments",
              "The current plumbing code plus a nationally published business and law guide",
              "The Indiana Administrative Code in full, printed by the candidate",
              "No references, because the plumbing examinations are closed book",
            ],
            correctIndex: 0,
            explanation:
              "The 2006 code in its Indiana printing, with the plain 2006 edition or its commentary volume permitted as substitutes, plus the amendments at 675 IAC 16-1.4.",
            sourceLessonSlug: "open-book-and-the-wrong-edition",
          },
          {
            prompt: "What may a candidate print themselves among those references?",
            options: [
              "The state amendments",
              "The model code itself, since the state has adopted it into law",
              "The candidate information bulletin, which must be brought to the test centre",
              "Nothing, because all references must be published bound volumes",
            ],
            correctIndex: 0,
            explanation:
              "The state amendments at 675 IAC 16-1.4 are ones candidates may print themselves, which is a practical consequence of a rule being public.",
            sourceLessonSlug: "open-book-and-the-wrong-edition",
          },
          {
            prompt: "What is a model code?",
            options: [
              "A privately written code with force only where adopted",
              "A code published by a state agency and enforced automatically statewide",
              "A draft code circulated for comment before a jurisdiction enacts it",
              "A federal minimum standard that every state must adopt or exceed",
            ],
            correctIndex: 0,
            explanation:
              "A private body writes it, and it has legal force only where a jurisdiction adopts it by rule, which is why the adoption rule matters so much.",
            sourceLessonSlug: "open-book-and-the-wrong-edition",
          },
          {
            prompt: "What is a content outline, and why does it matter?",
            options: [
              "The question count by subject, showing where the marks are",
              "The list of references a candidate may bring into the examination",
              "The syllabus a sponsor teaches during the final term of a programme",
              "The order in which questions appear on the examination paper",
            ],
            correctIndex: 0,
            explanation:
              "The Indiana journeyman plumber outline runs from Vents at 17 questions down to Storm Water Systems and Indiana Business at 6 each.",
            sourceLessonSlug: "open-book-and-the-wrong-edition",
          },
          {
            prompt: "Where does this course stop on the subject of reading a code?",
            options: [
              "At which edition the examination uses",
              "At how to tab a book, which is the only reference skill the bulletins describe",
              "At the model code's own table of contents, which it reproduces in full",
              "At the state amendments, which it prints alongside the adoption rule",
            ],
            correctIndex: 0,
            explanation:
              "How to read a code once you have the right one belongs to another course, and this one confines itself to the examination consequence.",
            sourceLessonSlug: "open-book-and-the-wrong-edition",
          },
          {
            prompt: "What is a candidate information bulletin?",
            options: [
              "The vendor's published description of an examination",
              "The licensing board's notice that an application has been approved",
              "The sponsor's summary of what the final term covers",
              "The state's published list of examinations offered in each trade",
            ],
            correctIndex: 0,
            explanation:
              "It carries the fees, timing, content outline and reference rules, and its own date is the first thing to check on it.",
            sourceLessonSlug: "open-book-and-the-wrong-edition",
          },
          {
            prompt: "Which code edition year does the Indiana Building Code at 675 IAC 13-2.6 adopt?",
            options: [
              "2012",
              "2014, matching the name of the Indiana rule",
              "2018, matching the residential code adoption",
              "2008, matching the electrical code adoption",
            ],
            correctIndex: 0,
            explanation:
              "The 2014 Indiana Building Code adopts the 2012 International Building Code, effective 1 December 2014. The rule's name and the adopted edition differ again.",
            sourceLessonSlug: "open-book-and-the-wrong-edition",
          },
          {
            prompt: "When did Indiana's currently effective electrical code rule take effect?",
            options: [
              "26 August 2009",
              "1 December 2014, the same date as the building code adoption then in force",
              "26 December 2019, the same date as the residential code adoption",
              "24 June 2026, the date on the vendor's current candidate bulletin",
            ],
            correctIndex: 0,
            explanation:
              "The Indiana Electrical Code 2009 Edition at 675 IAC 17-1.8 took effect on 26 August 2009 and was still listed as currently in effect on 20 September 2026.",
            sourceLessonSlug: "open-book-and-the-wrong-edition",
          },
          {
            prompt: "Which edition of the international mechanical code does Indiana adopt?",
            options: [
              "2012",
              "2014, matching the name of the Indiana mechanical rule",
              "2006, matching the plumbing code adoption",
              "2018, matching the residential code adoption",
            ],
            correctIndex: 0,
            explanation:
              "The Indiana Mechanical Code adopts the 2012 International Mechanical Code, listed as currently in effect on the Commission's own rules table.",
            sourceLessonSlug: "open-book-and-the-wrong-edition",
          },
          {
            prompt: "Which section is second largest on the Indiana journeyman plumber content outline?",
            options: [
              "Sanitary Drainage",
              "Indiana Business, which carries 14 questions on that examination",
              "Fixtures, which carries 17 questions ahead of vents",
              "Water Heaters, which carries 15 questions",
            ],
            correctIndex: 0,
            explanation:
              "Vents 17, Sanitary Drainage 15, then Water Supply and Distribution 14. Indiana Business carries 6 on the journeyman examination.",
            sourceLessonSlug: "open-book-and-the-wrong-edition",
          },
          {
            prompt: "How many questions does Indiana Business carry on the journeyman plumber examination?",
            options: [
              "6",
              "14, which is the figure that appears on the contractor examination instead",
              "17, the largest single section on the outline",
              "None, because business and law are tested only at contractor level",
            ],
            correctIndex: 0,
            explanation:
              "Six on the journeyman examination and fourteen on the contractor one, which is the difference the lesson draws attention to.",
            sourceLessonSlug: "open-book-and-the-wrong-edition",
          },
          {
            prompt: "What ranges did the Marion County examinations run to, in questions and time?",
            options: [
              "50 to 100 questions, 2 to 4 hours",
              "90 questions and 3 hours each, matching the state plumbing examinations",
              "25 to 50 questions, 1 to 2 hours, because they are open book",
              "100 questions and 4 hours each, with no variation between trades",
            ],
            correctIndex: 0,
            explanation:
              "Computer-based at $80.00 each, running 50 to 100 questions and 2 to 4 hours depending on the examination.",
            sourceLessonSlug: "open-book-and-the-wrong-edition",
          },
          {
            prompt: "What do the reference rules say about photocopies?",
            options: [
              "Allowed only where the bulletin says so",
              "Never allowed, because a photocopy cannot be checked against an exact title",
              "Always allowed, provided the candidate also brings the bound original",
              "Allowed in place of any reference the candidate cannot obtain in time",
            ],
            correctIndex: 0,
            explanation:
              "The bulletin permits photocopies only where it states so, alongside its rules on titles, editions, tabs and marking.",
            sourceLessonSlug: "open-book-and-the-wrong-edition",
          },
          {
            prompt: "What else does section 875-217 require besides liability cover?",
            options: [
              "Workers' compensation",
              "A performance bond on every permitted project above a stated value",
              "Proof that the contractor employs at least one licence holder full time",
              "An annual certificate of good standing from the board",
            ],
            correctIndex: 0,
            explanation:
              "The section requires $500,000 combined bodily injury and property damage liability cover plus workers' compensation.",
            sourceLessonSlug: "what-it-pays-and-what-it-costs",
          },
          {
            prompt: "What does lesson 13 mean by the shape of the deal?",
            options: [
              "A wage from day one, rising on a schedule",
              "A fee paid up front and recovered from wages once the apprentice completes",
              "A fixed rate for the whole term, with a large increase on completion",
              "A grant covering tuition, repaid if the apprentice leaves early",
            ],
            correctIndex: 0,
            explanation:
              "The published rates show a wage from the start, annual raises, and roughly a doubling across the term.",
            sourceLessonSlug: "what-it-pays-and-what-it-costs",
          },
          {
            prompt: "What is practical work experience, as the Indianapolis ordinance uses the phrase?",
            options: [
              "Experience gained by doing the work",
              "Experience gained in a classroom with hands-on laboratory exercises",
              "Any employment in the construction industry, whatever the trade",
              "Experience credited by the board for a related apprenticeship",
            ],
            correctIndex: 0,
            explanation:
              "The ordinance distinguishes it from educational experience, and requires at least four of the six years to be practical.",
            sourceLessonSlug: "what-it-pays-and-what-it-costs",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // SECTION 8 — The door that had to be forced open, and where to go now
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "part-30-and-the-history-it-answers",
      title: "15 · Part 30, and the door it was written against",
      section: "Section 8 · The door that had to be forced open, and where to go now",
      body: `Everything so far has described a ladder: apply, be accepted, work, learn, complete, be recognised. This lesson is about who has historically been kept off it, and the regulation written in response.

**What Part 30 does.** A second federal regulation, 29 C.F.R. Part 30, sits beside the one this course has been quoting. Its stated purpose is to promote equal opportunity for apprentices and applicants for apprenticeship in registered apprenticeship programmes by prohibiting discrimination. The characteristics it protects are race, colour, religion, national origin, sex, sexual orientation, age of 40 or older, genetic information and disability. It requires sponsors to undertake affirmative action. And it provides for the deregistration of programmes that do not comply (29 C.F.R. § 30.1).

**Why a regulation was needed at all.** Read the ladder backwards and the mechanism becomes visible. If a person cannot become an apprentice, they cannot become a journeyman. If they cannot become a journeyman, they cannot meet the experience requirement for a contractor licence. Nobody in that chain has to state a reason, and nobody has to say a word about race. Exclusion at the first rung is sufficient to close the whole trade, permanently, and it leaves no paperwork behind.

That is not a hypothetical. This catalog teaches it as history in *A History of Unions in the United States*, lesson 16, which covers unions' own history of exclusion and makes exactly this point about the apprentice-to-journeyman ladder. Go and read that lesson. Part 30 is the regulatory answer to it, and the two belong together.

**What deregistration is, and what it is not.** It is a sanction against a programme, not a remedy for a person. A deregistered programme loses its registration and the federal recognition that goes with it. That is a serious consequence for a sponsor and it changes behaviour, but it does not by itself put an excluded applicant into an apprenticeship or compensate them. Knowing the difference matters when deciding where to take a complaint.

**Where a complaint goes.** To the Registration Agency, which for Indiana is the federal Office of Apprenticeship rather than a state agency, as section 4 established. That is the body that registered the programme and the body that can deregister it.

**Two honest observations to hold together.** The regulation exists, it names the sponsor's obligations, and it has teeth. It also arrived after generations in which the ladder worked exactly as described, and the effects of that do not end when a rule is published. A person entering a trade today is entering a system that has both of those facts in it, and being told only the first one is not preparation.

:::reveal What does 29 C.F.R. Part 30 prohibit, and in what context? ||| Discrimination against apprentices and applicants for apprenticeship in registered apprenticeship programmes, in order to promote equal opportunity.

:::reveal Which characteristics does Part 30 protect? ||| Race, colour, religion, national origin, sex, sexual orientation, age of 40 or older, genetic information, and disability.

:::reveal How does exclusion at the apprentice stage close a whole trade? ||| Without an apprenticeship there is no journeyman status, and without that there is no route to the experience a contractor licence requires. No reason ever has to be stated.

:::reveal What is deregistration, and what does it not do? ||| It removes a programme's registration and federal recognition. It is a sanction against the programme, and it does not by itself place or compensate an excluded applicant.

## Vocabulary
- **Affirmative action**: the positive steps Part 30 requires a sponsor to take, beyond simply not discriminating.
- **Deregistration**: withdrawal of a programme's registration by the Registration Agency, and the sanction Part 30 provides for.
- **Protected characteristic**: a ground on which discrimination is prohibited, listed in the regulation rather than left to interpretation.
- **Applicant for apprenticeship**: a person seeking entry, who is covered by Part 30 before ever being accepted into a programme.

## Sources
Equal Employment Opportunity in Apprenticeship, 29 C.F.R. § 30.1 (2026). https://www.law.cornell.edu/cfr/text/29/30.1
Labor Standards for the Registration of Apprenticeship Programs, 29 C.F.R. § 29.2 (2026). https://www.law.cornell.edu/cfr/text/29/29.2`,
    },
    {
      slug: "what-to-ask-and-where-to-go",
      title: "16 · What to ask, and where to send yourself",
      section: "Section 8 · The door that had to be forced open, and where to go now",
      body: `This course ends where it should: with other people's phone numbers.

**Which question goes to whom.**

| Your question | Who answers it |
|---|---|
| Am I licensed to do this work? | The licensing authority for your trade and your city or county. For electrical work in Indianapolis, the city board of electrical examiners at the department that houses it. For plumbing anywhere in Indiana, the Indiana Plumbing Commission at the Professional Licensing Agency. |
| What does my apprenticeship require of me? | The sponsor. The standards are a written plan, and the sponsor holds it. |
| How do I get into an apprenticeship? | The local programme: the electrical training institute and the electrical workers' local for electrical, the plumbers and pipefitters local for plumbing and pipefitting, a contractors' association chapter on the non-union side, or an apprenticeship readiness programme. Plus the federal Apprenticeship Job Finder and your state's apprenticeship office. |
| Which edition of the code do I study? | Your state's adoption rule, read directly. In Indiana that is the Fire Prevention and Building Safety Commission's rules and the relevant part of 675 IAC. |
| What is on the examination? | The testing vendor's own candidate information bulletin, current version. |
| My programme discriminated against me. | 29 C.F.R. Part 30, and the Registration Agency, which for Indiana is the federal Office of Apprenticeship. |

**What to ask an employer.** Who employs me, and on what terms. Am I registered to a programme, and which one. Who supervises me, and what is the ratio. What is my wage now and what is the next step. Is this work on a public project, and if so how am I classified on the payroll.

**What to ask a sponsor.** May I read your standards. What are the work processes and their hours. How many hours of related instruction a year, and when. What is the full wage schedule. What is the probationary period. What do I hold in my hand at the end, and who issues it.

**What to ask a board or commission.** Does a licence exist for what I want to do. What are the classes, and what does each permit. What experience counts, and what evidence do you accept. Which examination, which vendor, which references, which edition. What does it cost and when do you meet. Is what I read on your website current.

**And the one this course opened with, restated because it is the load-bearing part.** This course grants no hours, no credit, no credential, no licence and no equivalence to any of them. Nothing in it counts toward an apprenticeship's on-the-job or related-instruction hours, satisfies any state or local licensing requirement, or makes anyone eligible to sit an examination. Only a registered sponsor can award hours, and only the licensing authority can license you. Every number printed in these sixteen lessons carries the date it was read, which is 20 September 2026, and every one of them should be checked against the office that issued it before you act on it.

**What you now have.** Not a qualification. A way of finding out, which is the thing the search box did not give you, and a short list of people who are obliged to answer.

:::reveal Who answers the question of whether a licence exists for your trade in your city? ||| The licensing authority for that trade and that jurisdiction, which may be a state commission, a city or county board, or nobody at all.

:::reveal Who holds the document that says what your apprenticeship requires of you? ||| The sponsor. The standards are a written plan under the federal regulation, and the sponsor holds it.

:::reveal Which six questions does the course suggest putting to a board or commission? ||| Whether a licence exists, what the classes permit, what experience counts and what evidence is accepted, which examination and references and edition, what it costs and when the board meets, and whether the website is current.

:::reveal What does this course grant on completion? ||| Nothing: no hours, no credit, no credential, no licence and no equivalence. Only a registered sponsor awards hours and only the licensing authority licenses anyone.

## Vocabulary
- **Licensing authority**: the state, city or county body that creates and issues licences in a trade, and the only body that can license anyone.
- **Job Finder**: the federal search tool for apprenticeship openings, run alongside the national apprenticeship information site.
- **Current version**: the qualifier that matters on a candidate bulletin, a fee schedule or a code adoption, all of which change.
- **Classification**: how a worker is recorded on a certified payroll for public work, which is where the training sense of journeyman appears in law.

## Sources
Equal Employment Opportunity in Apprenticeship, 29 C.F.R. § 30.1 (2026). https://www.law.cornell.edu/cfr/text/29/30.1
Indiana Department of Homeland Security. (n.d.). *Fire Prevention and Building Safety Commission rules*. Retrieved September 20, 2026, from https://www.in.gov/dhs/boards-and-commissions/fpbsc-rules/
Indiana Professional Licensing Agency. (n.d.). *Plumbing licensing information*. Retrieved September 20, 2026, from https://www.in.gov/pla/professions/plumbing-home/plumbing-licensing-information
U.S. Department of Labor. (n.d.-a). *Career seekers*. Apprenticeship.gov. Retrieved September 20, 2026, from https://www.apprenticeship.gov/career-seekers`,
    },
    {
      slug: "section-8-quiz",
      title: "Section 8 quiz · Part 30, and where to go",
      section: "Section 8 · The door that had to be forced open, and where to go now",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 5,
        shuffleOptions: true,
        questions: [
          {
            prompt: "What is the stated purpose of 29 C.F.R. Part 30?",
            options: [
              "Equal opportunity in registered apprenticeship",
              "Setting the minimum wage progression an apprentice must be paid during the term",
              "Registering programmes and issuing completion certificates to their graduates",
              "Licensing journeyworkers in trades that no state licenses directly",
            ],
            correctIndex: 0,
            explanation:
              "It promotes equal opportunity for apprentices and applicants for apprenticeship in registered apprenticeship programmes by prohibiting discrimination.",
            sourceLessonSlug: "part-30-and-the-history-it-answers",
          },
          {
            prompt: "Whom does Part 30 protect, besides apprentices?",
            options: [
              "Applicants for apprenticeship",
              "Journeyworkers employed by signatory contractors on public projects",
              "Instructors delivering related instruction inside a registered programme",
              "Licence holders appearing before a municipal board of examiners",
            ],
            correctIndex: 0,
            explanation:
              "Applicants are covered before ever being accepted, which matters because exclusion usually happens at entry.",
            sourceLessonSlug: "part-30-and-the-history-it-answers",
          },
          {
            prompt: "Which of these is a characteristic Part 30 protects?",
            options: [
              "Genetic information",
              "Union membership, which the regulation adds to the federal list for apprenticeship",
              "Prior criminal record, which sponsors may not consider in selection",
              "Residence in the county where the programme operates",
            ],
            correctIndex: 0,
            explanation:
              "The list is race, colour, religion, national origin, sex, sexual orientation, age of 40 or older, genetic information and disability.",
            sourceLessonSlug: "part-30-and-the-history-it-answers",
          },
          {
            prompt: "At what age does Part 30's age protection begin?",
            options: [
              "40",
              "16, matching the minimum entry age in the apprenticeship standards",
              "18, matching the age the state plumbing licence requires",
              "There is no age threshold, since age is protected at any age",
            ],
            correctIndex: 0,
            explanation:
              "The protected characteristic is age of 40 or older, which is narrower than a general age protection.",
            sourceLessonSlug: "part-30-and-the-history-it-answers",
          },
          {
            prompt: "What does Part 30 require sponsors to undertake?",
            options: [
              "Affirmative action",
              "An annual audit of selection decisions by an independent reviewer",
              "A published quota for each protected characteristic in every intake",
              "A written justification to the Registration Agency for each rejected applicant",
            ],
            correctIndex: 0,
            explanation:
              "It requires affirmative action, which is a set of positive steps beyond simply not discriminating.",
            sourceLessonSlug: "part-30-and-the-history-it-answers",
          },
          {
            prompt: "What sanction does Part 30 provide for a non-compliant programme?",
            options: [
              "Deregistration",
              "A civil penalty calculated per excluded applicant and paid to them",
              "Suspension of the sponsor's licence to operate in the trade",
              "Mandatory placement of the complainant in the next available intake",
            ],
            correctIndex: 0,
            explanation:
              "Deregistration removes the programme's registration and the federal recognition that goes with it.",
            sourceLessonSlug: "part-30-and-the-history-it-answers",
          },
          {
            prompt: "What does deregistration NOT do?",
            options: [
              "Place or compensate the excluded applicant",
              "Affect the sponsor, since registration is voluntary in any event",
              "Remove federal recognition from the programme's completion certificates",
              "Change the sponsor's behaviour, since the sanction is symbolic",
            ],
            correctIndex: 0,
            explanation:
              "It is a sanction against the programme rather than a remedy for a person, and knowing the difference matters when deciding where to take a complaint.",
            sourceLessonSlug: "part-30-and-the-history-it-answers",
          },
          {
            prompt: "How does exclusion at the apprentice stage close an entire trade?",
            options: [
              "No apprenticeship means no journeyman and no licence route",
              "Because the sponsor controls who may sit the licensing examination in that trade",
              "Because a certified payroll may only list workers registered to a programme",
              "Because an employer may not hire an unregistered worker for trade work",
            ],
            correctIndex: 0,
            explanation:
              "Without the apprenticeship there is no journeyman status, and without that no route to the experience a contractor licence requires. No reason ever has to be stated.",
            sourceLessonSlug: "part-30-and-the-history-it-answers",
          },
          {
            prompt: "Which course in this catalog teaches the history that Part 30 answers?",
            options: [
              "A History of Unions in the United States",
              "Basic Construction Safety, in its lesson on the Act and Indiana",
              "Read the Plan and the Code, in its lessons on adoption rules",
              "Construction math, in its lesson on what the course is and is not",
            ],
            correctIndex: 0,
            explanation:
              "Lesson 16 of that course covers unions' own history of exclusion and makes the same point about the apprentice-to-journeyman ladder.",
            sourceLessonSlug: "part-30-and-the-history-it-answers",
          },
          {
            prompt: "Where does a Part 30 complaint about an Indiana programme go?",
            options: [
              "The federal Office of Apprenticeship",
              "The Indiana Professional Licensing Agency, which oversees the trades",
              "The state apprenticeship agency, which registered the programme",
              "The sponsor's joint committee, which handles complaints internally first",
            ],
            correctIndex: 0,
            explanation:
              "Indiana is served by a federal apprenticeship office rather than a state agency, and the body that registered a programme is the body that can deregister it.",
            sourceLessonSlug: "part-30-and-the-history-it-answers",
          },
          {
            prompt: "What two facts does lesson 15 say a person entering a trade should hold together?",
            options: [
              "The rule has teeth, and it arrived late",
              "The rule is advisory, and enforcement is left to the states",
              "The rule is recent, and it has never been enforced against a programme",
              "The rule applies only to registered programmes, and most are not registered",
            ],
            correctIndex: 0,
            explanation:
              "The regulation names obligations and provides a sanction, and it arrived after generations in which the ladder worked as described.",
            sourceLessonSlug: "part-30-and-the-history-it-answers",
          },
          {
            prompt: "What is affirmative action, as Part 30 uses it?",
            options: [
              "Positive steps beyond not discriminating",
              "A requirement to fill a fixed proportion of places from each protected group",
              "A defence available to a sponsor accused of discrimination in selection",
              "The reinstatement of an applicant who was wrongly rejected",
            ],
            correctIndex: 0,
            explanation:
              "The regulation requires sponsors to undertake it, alongside the prohibition on discrimination itself.",
            sourceLessonSlug: "part-30-and-the-history-it-answers",
          },
          {
            prompt: "Who answers the question of whether you are licensed to do the work?",
            options: [
              "The licensing authority for your trade and place",
              "The sponsor of your apprenticeship, which holds the standards",
              "The Registration Agency that issued your completion certificate",
              "The testing vendor that administered the examination you passed",
            ],
            correctIndex: 0,
            explanation:
              "That may be a state commission, a city or county board, or nobody at all, and which one it is depends on the trade and the place.",
            sourceLessonSlug: "what-to-ask-and-where-to-go",
          },
          {
            prompt: "For plumbing anywhere in Indiana, which body answers the licensing question?",
            options: [
              "The Indiana Plumbing Commission",
              "The city board of electrical examiners, which also handles plumbing registrations",
              "The Fire Prevention and Building Safety Commission, which adopts the plumbing code",
              "The county department that registers plumbing contractors",
            ],
            correctIndex: 0,
            explanation:
              "The Commission sits inside the Professional Licensing Agency and licenses plumbing for the whole state.",
            sourceLessonSlug: "what-to-ask-and-where-to-go",
          },
          {
            prompt: "Who answers the question of what your apprenticeship requires of you?",
            options: [
              "The sponsor",
              "The Registration Agency, which holds the registered copy of the standards",
              "The employer of record, which sets the work processes day to day",
              "The union local, which negotiates the terms of the agreement",
            ],
            correctIndex: 0,
            explanation:
              "The standards are a written plan under the federal regulation, and the sponsor holds it.",
            sourceLessonSlug: "what-to-ask-and-where-to-go",
          },
          {
            prompt: "Who answers the question of which edition of the code to study?",
            options: [
              "Your state's adoption rule",
              "The publisher of the model code, which lists adoptions by state",
              "The testing vendor, whose practice materials track the current edition",
              "The licensing board, which issues its own edition to approved candidates",
            ],
            correctIndex: 0,
            explanation:
              "In Indiana that is the Fire Prevention and Building Safety Commission's rules and the relevant part of 675 IAC, read directly.",
            sourceLessonSlug: "what-to-ask-and-where-to-go",
          },
          {
            prompt: "Who answers the question of what is on the examination?",
            options: [
              "The vendor's current candidate bulletin",
              "The licensing board's application form, which sets the passing score",
              "The sponsor's final term course on examination preparation",
              "The state adoption rule, which names the references the examination uses",
            ],
            correctIndex: 0,
            explanation:
              "The bulletin carries the fees, timing, content outline and reference rules, and the qualifier that matters is current version.",
            sourceLessonSlug: "what-to-ask-and-where-to-go",
          },
          {
            prompt: "Which of these belongs on the list of questions for an employer?",
            options: [
              "Who supervises me, and what is the ratio",
              "May I read your written standards, and what are the work processes",
              "Does a licence exist for what I want to do, and what does it permit",
              "Which edition of the code is the examination written against",
            ],
            correctIndex: 0,
            explanation:
              "The employer list covers employment, registration, supervision, the wage step now and next, and the payroll classification on public work.",
            sourceLessonSlug: "what-to-ask-and-where-to-go",
          },
          {
            prompt: "Which of these belongs on the list of questions for a sponsor?",
            options: [
              "May I read your standards",
              "Is what is on your website current, and when does your board meet",
              "Am I classified as a journeyman or an apprentice on the certified payroll",
              "What score do I need, and how many attempts am I allowed",
            ],
            correctIndex: 0,
            explanation:
              "The sponsor list covers the standards, work processes and hours, related instruction, the wage schedule, probation, and what you hold at the end.",
            sourceLessonSlug: "what-to-ask-and-where-to-go",
          },
          {
            prompt: "Which of these belongs on the list of questions for a board or commission?",
            options: [
              "Does a licence exist for what I want to do",
              "What is my wage now, and what is the next step",
              "How many hours of related instruction a year, and when",
              "Am I registered to a programme, and which one",
            ],
            correctIndex: 0,
            explanation:
              "The board list covers whether a licence exists, the classes and their scope, the experience and evidence accepted, the examination, the cost and meeting dates, and currency.",
            sourceLessonSlug: "what-to-ask-and-where-to-go",
          },
          {
            prompt: "What does lesson 16 say you should ask a board about its own website?",
            options: [
              "Whether it is current",
              "Whether it is the only official source, or whether a printed version governs",
              "Whether its fee schedule includes the testing vendor's charges",
              "Whether it publishes the names of licence holders",
            ],
            correctIndex: 0,
            explanation:
              "It is the same habit as printing the date on a number, applied to a document you did not write.",
            sourceLessonSlug: "what-to-ask-and-where-to-go",
          },
          {
            prompt: "What does the course say a learner has at the end of it?",
            options: [
              "A way of finding out",
              "A credential recognised by sponsors that have agreed to accept it",
              "Documented related instruction hours toward a registered programme",
              "Eligibility to apply for a journeyman licence in their own jurisdiction",
            ],
            correctIndex: 0,
            explanation:
              "Not a qualification. A way of finding out, and a short list of people who are obliged to answer.",
            sourceLessonSlug: "what-to-ask-and-where-to-go",
          },
          {
            prompt: "What date do all the numbers in this course carry?",
            options: [
              "20 September 2026",
              "The date each source was last updated by its publisher",
              "No date, since the figures are drawn from statutes that do not change",
              "A range of dates through 2025 and 2026, printed beside each figure separately",
            ],
            correctIndex: 0,
            explanation:
              "Every number was read on that date, and every one should be checked against the office that issued it before being acted on.",
            sourceLessonSlug: "what-to-ask-and-where-to-go",
          },
          {
            prompt: "What federal tool does lesson 16 name for finding apprenticeship openings?",
            options: [
              "The Apprenticeship Job Finder",
              "The Registration Agency's directory of sponsors by trade and state",
              "The state licensing agency's register of approved apprenticeship schools",
              "The contractors' association chapter directory",
            ],
            correctIndex: 0,
            explanation:
              "It runs alongside the national apprenticeship information site, and lesson 16 pairs it with the state apprenticeship office.",
            sourceLessonSlug: "what-to-ask-and-where-to-go",
          },
          {
            prompt: "What is a classification, as lesson 16 uses the word?",
            options: [
              "How a worker is recorded on a certified payroll",
              "The licence class a worker holds in the jurisdiction where they work",
              "The level a worker has reached in a craft curriculum",
              "The category of work a permit authorises on a given project",
            ],
            correctIndex: 0,
            explanation:
              "It is where the training sense of journeyman appears in law, on public work, which is the one place the Indianapolis code uses the word.",
            sourceLessonSlug: "what-to-ask-and-where-to-go",
          },
          {
            prompt: "Which route does lesson 16 name for someone wanting into an electrical apprenticeship?",
            options: [
              "The training institute and the electrical workers' local",
              "The state professional licensing agency, which maintains an applicant register",
              "The Fire Prevention and Building Safety Commission",
              "The testing vendor, which schedules candidates once they are approved",
            ],
            correctIndex: 0,
            explanation:
              "Along with a contractors' association chapter on the non-union side, an apprenticeship readiness programme, the federal Job Finder and the state apprenticeship office.",
            sourceLessonSlug: "what-to-ask-and-where-to-go",
          },
          {
            prompt: "What is the licensing authority, as the course defines it?",
            options: [
              "The body that creates and issues licences",
              "The body that registers apprenticeship programmes in a state",
              "The body that writes and administers the licensing examination",
              "The body that adopts the code the examination is written against",
            ],
            correctIndex: 0,
            explanation:
              "It is the only body that can license anyone, and which body it is varies by trade and by place.",
            sourceLessonSlug: "what-to-ask-and-where-to-go",
          },
          {
            prompt: "Why does the course restate its refusal in the final lesson?",
            options: [
              "It is the load-bearing part",
              "Because the earlier statement applies only to the sections before it",
              "Because a learner who reached the end has earned a partial exemption",
              "Because the refusal changes once a learner has completed the assessments",
            ],
            correctIndex: 0,
            explanation:
              "No hours, no credit, no credential, no licence and no equivalence. Only a sponsor awards hours and only the licensing authority licenses anyone.",
            sourceLessonSlug: "what-to-ask-and-where-to-go",
          },
          {
            prompt: "What does the course say should happen to every number in it before a learner acts on it?",
            options: [
              "Check it with the issuing office",
              "Compare it against at least two commercial licensing guides",
              "Confirm it against the sponsor's current plan of study",
              "Treat it as a minimum, since fees and requirements only rise",
            ],
            correctIndex: 0,
            explanation:
              "Every figure prints the date it was read precisely so it can be treated as a starting point for a call rather than as the answer.",
            sourceLessonSlug: "what-to-ask-and-where-to-go",
          },
          {
            prompt: "Which question does lesson 16 send to the Registration Agency rather than to a sponsor?",
            options: [
              "A complaint that a programme discriminated",
              "What the work processes are and how the hours are allocated",
              "What the probationary period is and how it is applied",
              "What wage step follows the one the apprentice is on",
            ],
            correctIndex: 0,
            explanation:
              "That question goes to Part 30 and to the agency that registered the programme, which for Indiana is the federal office.",
            sourceLessonSlug: "what-to-ask-and-where-to-go",
          },
          {
            prompt: "What does lesson 15 mean by saying exclusion leaves no paperwork behind?",
            options: [
              "No reason has to be stated for a rejection",
              "That programmes are not required to keep records of applications",
              "That deregistration files are sealed once the sanction is imposed",
              "That the certified payroll does not record why a worker was classified as it shows",
            ],
            correctIndex: 0,
            explanation:
              "Exclusion at the first rung closes the trade permanently, and nobody in the chain has to say a word about why.",
            sourceLessonSlug: "part-30-and-the-history-it-answers",
          },
          {
            prompt: "Which regulation number carries the equal opportunity requirements?",
            options: [
              "29 C.F.R. Part 30",
              "29 C.F.R. Part 29, which also carries the standards a sponsor must write",
              "29 C.F.R. Part 1926, the construction safety regulation",
              "860 IAC 1-1, which carries Indiana's plumbing licensing rules",
            ],
            correctIndex: 0,
            explanation:
              "Part 30 sits beside Part 29, which is the registration regulation this course quotes elsewhere.",
            sourceLessonSlug: "part-30-and-the-history-it-answers",
          },
          {
            prompt: "What kind of body is the Registration Agency, in the complaint context?",
            options: [
              "The body that registered the programme",
              "The body that licenses the trade in that jurisdiction",
              "The body that accredits the curriculum the programme delivers",
              "The body that administers the licensing examination",
            ],
            correctIndex: 0,
            explanation:
              "The body that registered a programme is the body that can deregister it, which is why the complaint goes there.",
            sourceLessonSlug: "part-30-and-the-history-it-answers",
          },
          {
            prompt: "What does lesson 15 say about being told only that the regulation exists?",
            options: [
              "It is not preparation",
              "It is sufficient, since the regulation covers every form of exclusion",
              "It is misleading, because the regulation has never been enforced",
              "It is the only honest thing a course can say about the subject",
            ],
            correctIndex: 0,
            explanation:
              "A person entering a trade today is entering a system that contains both the rule and the generations before it.",
            sourceLessonSlug: "part-30-and-the-history-it-answers",
          },
          {
            prompt: "Which of these is a protected characteristic under Part 30?",
            options: [
              "Disability",
              "Veteran status, which the regulation adds for construction trades",
              "Marital status, which is protected in apprenticeship but not in employment",
              "Residency, since programmes may not restrict intake by county",
            ],
            correctIndex: 0,
            explanation:
              "Disability is on the list alongside race, colour, religion, national origin, sex, sexual orientation, age of 40 or older, and genetic information.",
            sourceLessonSlug: "part-30-and-the-history-it-answers",
          },
          {
            prompt: "What does the course say the search box did not give a reader?",
            options: [
              "A way of finding out",
              "A list of programmes accepting applications in their area",
              "The current fee schedule for their trade and jurisdiction",
              "The name of the vendor that writes their examination",
            ],
            correctIndex: 0,
            explanation:
              "That is what the course offers at the end, alongside a short list of people who are obliged to answer.",
            sourceLessonSlug: "what-to-ask-and-where-to-go",
          },
          {
            prompt: "Which question does lesson 16 put to an employer about public projects?",
            options: [
              "How am I classified on the payroll",
              "Which licence class the contractor holds for that jurisdiction",
              "Which edition of the code the inspector will apply",
              "Whether the project is registered with the apprenticeship agency",
            ],
            correctIndex: 0,
            explanation:
              "The certified payroll records work classification, rate of pay and craft, which is the one legal appearance of journeyman in the Indianapolis code.",
            sourceLessonSlug: "what-to-ask-and-where-to-go",
          },
          {
            prompt: "What does lesson 16 say to ask a sponsor about the end of the programme?",
            options: [
              "What do I hold, and who issues it",
              "Whether the sponsor will employ me once the term is complete",
              "Whether the certificate satisfies the state licensing requirement",
              "How long the completion certificate remains valid before renewal",
            ],
            correctIndex: 0,
            explanation:
              "It is the same distinction the whole course rests on: what the document is, and which body has the authority behind it.",
            sourceLessonSlug: "what-to-ask-and-where-to-go",
          },
          {
            prompt: "What is an applicant for apprenticeship, in Part 30 terms?",
            options: [
              "A person seeking entry, covered before acceptance",
              "A sponsor applying to register a programme with the agency",
              "An employer applying to join an existing registered programme",
              "A completer applying for recognition of their hours in another state",
            ],
            correctIndex: 0,
            explanation:
              "Coverage before acceptance is the point, because exclusion usually happens at the door rather than after it.",
            sourceLessonSlug: "part-30-and-the-history-it-answers",
          },
          {
            prompt: "What is the current version qualifier attached to, in lesson 16?",
            options: [
              "Bulletins, fee schedules and code adoptions",
              "The apprenticeship standards, which a sponsor revises each intake",
              "The federal regulation, which is amended annually",
              "The collective agreement, which is renegotiated every three years",
            ],
            correctIndex: 0,
            explanation:
              "All three change, which is why the course prints a date on every number and tells a reader to ask whether a page is current.",
            sourceLessonSlug: "what-to-ask-and-where-to-go",
          },
          {
            prompt: "Why does the course end with other people's phone numbers?",
            options: [
              "The authorities are the ones obliged to answer",
              "Because the course cannot cite its sources without naming contacts",
              "Because the regulation requires a referral to the Registration Agency",
              "Because the sponsors named have agreed to take enquiries from readers",
            ],
            correctIndex: 0,
            explanation:
              "The whole design is to send a learner to the bodies with authority rather than to keep them reading, which is what the refusal in lesson 1 implies.",
            sourceLessonSlug: "what-to-ask-and-where-to-go",
          },
          {
            prompt: "Which question goes to a city or county board rather than to a state agency, in Indiana?",
            options: [
              "Whether you are licensed for electrical work",
              "Whether you are licensed for plumbing work",
              "Which edition of the electrical code is enforced",
              "Whether your apprenticeship programme is registered",
            ],
            correctIndex: 0,
            explanation:
              "Electrical licensing is municipal in Indiana. Plumbing is a state commission, the code adoption is a state commission, and registration is federal.",
            sourceLessonSlug: "what-to-ask-and-where-to-go",
          },
          {
            prompt: "What does lesson 15 call the ladder described in the earlier sections?",
            options: [
              "Apply, be accepted, work, learn, complete, be recognised",
              "Apply, be examined, be licensed, be bonded, be insured",
              "Register, attend, pass, apply, be licensed",
              "Enter, qualify, contract, employ, retire",
            ],
            correctIndex: 0,
            explanation:
              "Lesson 15 reads that ladder backwards to show how blocking the first rung closes everything above it.",
            sourceLessonSlug: "part-30-and-the-history-it-answers",
          },
        ],
      },
    },
    // ══════════════════════════════════════════════════════════════════════
    // FINAL — placed last, pooling 42 and serving 10
    // ══════════════════════════════════════════════════════════════════════
    {
      slug: "how-the-trades-work-final",
      title: "Final assessment · How the Trades Work",
      section: "Final assessment",
      quiz: {
        passingScore: 80,
        questionsPerAttempt: 10,
        shuffleOptions: true,
        questions: [
          {
            prompt: "Which two bodies hold the powers this course says it does not have?",
            options: [
              "The sponsor and the licensing authority",
              "The Registration Agency and the testing vendor that writes the examination",
              "The employer of record and the union local that placed the worker",
              "The accrediting body and the community college that awards the degree",
            ],
            correctIndex: 0,
            explanation:
              "Only a registered sponsor can award hours, and only the licensing authority can license anyone. Everything else in the course follows from that split.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "What kind of subject does the course say it teaches?",
            options: [
              "A system",
              "A craft, taught from the sponsor's published plan of study",
              "A licence, taught from the examination content outline",
              "A regulation, taught clause by clause for compliance purposes",
            ],
            correctIndex: 0,
            explanation:
              "A system rather than a skill. Nobody learns to bend conduit from it, and lesson 1 says so in its first paragraph.",
            sourceLessonSlug: "what-this-course-is",
          },
          {
            prompt: "What did the commercial licensing guides get wrong about Marion County?",
            options: [
              "They described a licence that does not exist",
              "They quoted the correct hours but attributed them to the wrong licensing body",
              "They used a superseded edition of the ordinance from before the last supplement",
              "They confused the residential licence with the master licence",
            ],
            correctIndex: 0,
            explanation:
              "They described an examination for a journeyman electrician licence the ordinance does not create, and gave contradictory hour figures for it.",
            sourceLessonSlug: "the-date-on-the-number",
          },
          {
            prompt: "What single test settles a conflict between a guide and an ordinance?",
            options: [
              "Which document creates licences",
              "Which document was published more recently",
              "Which document is written by lawyers rather than marketers",
              "Which document the licensing board links to from its own website",
            ],
            correctIndex: 0,
            explanation:
              "The question is never which source sounds more authoritative, but which source has the power to make the thing true.",
            sourceLessonSlug: "the-date-on-the-number",
          },
          {
            prompt: "Where does the word journeyman appear in the Indianapolis-Marion County code?",
            options: [
              "In a certified payroll provision",
              "In the section creating the types of electrical licence the board may approve",
              "In the definitions section of the construction skilled trades chapter",
              "In the article registering plumbing contractors with the city",
            ],
            correctIndex: 0,
            explanation:
              "Once, in section 261-408 on responsible bidding practices, as an example of a work classification. It is not a licensing provision.",
            sourceLessonSlug: "the-date-on-the-number",
          },
          {
            prompt: "What does the federal definition of journeyworker rest on?",
            options: [
              "Recognition within an industry",
              "A passing score on an examination approved by a state licensing board",
              "A count of on-the-job hours certified by the employer of record",
              "A determination by the Registration Agency on the sponsor's application",
            ],
            correctIndex: 0,
            explanation:
              "A worker who has attained a level of skill, abilities and competencies recognized within an industry as having mastered the occupation. No government, no examination, no permission.",
            sourceLessonSlug: "journeyworker-in-the-regulation",
          },
          {
            prompt: "Why does federal apprenticeship regulation need the word journeyworker?",
            options: [
              "To count the supervision ratio",
              "To identify which workers may hold a licence in a regulated trade",
              "To determine which workers a certified payroll must list separately",
              "To set the wage floor for the final period of an apprenticeship",
            ],
            correctIndex: 0,
            explanation:
              "A programme's standards must state a numeric ratio of apprentices to journeyworkers consistent with proper supervision, training, safety and continuity of employment.",
            sourceLessonSlug: "journeyworker-in-the-regulation",
          },
          {
            prompt: "Which two questions must never stand in for each other?",
            options: [
              "Am I a journeyman, and am I licensed",
              "Am I registered, and am I employed",
              "What does it pay, and what does it cost",
              "Which vendor, and which edition",
            ],
            correctIndex: 0,
            explanation:
              "They are different questions with different answers, and in some cities the second has no version that applies to a worker at all.",
            sourceLessonSlug: "a-licence-class-is-a-local-question",
          },
          {
            prompt: "What does a journeyman licence typically stop short of permitting?",
            options: [
              "Contracting and pulling permits",
              "Performing the trade's work without a master present on the site",
              "Training and supervising apprentices on a jobsite",
              "Working in any structure other than a one- or two-family dwelling",
            ],
            correctIndex: 0,
            explanation:
              "Contracting, bidding and pulling a permit in the holder's own name normally require the master or contractor licence, with a bond and insurance attached.",
            sourceLessonSlug: "a-licence-class-is-a-local-question",
          },
          {
            prompt: "How does a licence move between jurisdictions?",
            options: [
              "Only by a specific written reciprocity arrangement",
              "Automatically, under the federal rule requiring states to honour each other's licences",
              "By presenting the completion certificate to the receiving authority",
              "By registering with the receiving authority within ninety days of arrival",
            ],
            correctIndex: 0,
            explanation:
              "Reciprocity is a named arrangement between two jurisdictions and comes with paperwork, as the Indianapolis verification letter requirement shows.",
            sourceLessonSlug: "a-licence-class-is-a-local-question",
          },
          {
            prompt: "What does the Indianapolis board's application say about a state electrical licence?",
            options: [
              "There is not one",
              "That it must be obtained before a municipal application will be considered",
              "That it covers residential work only, with commercial work licensed locally",
              "That it is issued by the Professional Licensing Agency on the board's recommendation",
            ],
            correctIndex: 0,
            explanation:
              "Licensing is at the discretion of the local municipality in the state of Indiana, and there is not a state electrical license.",
            sourceLessonSlug: "no-state-electrical-licence",
          },
          {
            prompt: "What does the Indianapolis electrical licence actually govern?",
            options: [
              "Who may contract and pull the permit",
              "Who may perform electrical work on any premises in the city",
              "Who may supervise apprentices registered to a programme",
              "Who may be classified as a journeyman on a certified payroll",
            ],
            correctIndex: 0,
            explanation:
              "An unlicensed worker may lawfully do the work under a licensed contractor's direction and control, so the licence is about contracting rather than about the tools.",
            sourceLessonSlug: "no-state-electrical-licence",
          },
          {
            prompt: "What is every licence in Indianapolis chapter 875?",
            options: [
              "A contractor licence or registration",
              "A worker's card, issued to individuals in each skilled trade",
              "A permit tied to a specific project and address",
              "A state licence administered locally on the state's behalf",
            ],
            correctIndex: 0,
            explanation:
              "Contractors generally, electrical, heating and cooling, wrecking, and registration of plumbing contractors. Not one of them is a worker's card.",
            sourceLessonSlug: "no-state-electrical-licence",
          },
          {
            prompt: "What is the Indiana route to a journeyman plumber licence for an in-state applicant?",
            options: [
              "Four years in an approved apprenticeship",
              "Four years of documented employment attested to by a licensed plumbing contractor",
              "A college programme in plumbing technology plus a written examination",
              "Registration as a plumbing apprentice followed by a competency assessment",
            ],
            correctIndex: 0,
            explanation:
              "Evidenced by a Plumbing Apprenticeship Certificate of Completion. The alternative route is a current out-of-state licence showing four years in the trade.",
            sourceLessonSlug: "indiana-plumbing-is-a-state-licence",
          },
          {
            prompt: "What must happen before an Indiana plumbing candidate may register for the examination?",
            options: [
              "Commission approval of the application",
              "Completion of the state's approved apprenticeship school programme",
              "Payment of the first year's licence fee alongside the examination fee",
              "Registration with the federal Office of Apprenticeship",
            ],
            correctIndex: 0,
            explanation:
              "The Commission reviews and approves first, and only then may the candidate register with the testing vendor.",
            sourceLessonSlug: "indiana-plumbing-is-a-state-licence",
          },
          {
            prompt: "What is the five-step drill in section 3 for?",
            options: [
              "Finding your own jurisdiction's rule",
              "Choosing between a union and a non-union programme in your area",
              "Working out how many hours of advanced standing to request",
              "Preparing an application to a board of examiners",
            ],
            correctIndex: 0,
            explanation:
              "Name the trade and place, check the state authority, then the local one, write down four things including the date, then telephone.",
            sourceLessonSlug: "indiana-plumbing-is-a-state-licence",
          },
          {
            prompt: "Which of these is one of the four tests for an apprenticeable occupation?",
            options: [
              "Related instruction is required",
              "A state licence exists for the occupation in at least one jurisdiction",
              "The occupation appears on the federal list of recognised construction crafts",
              "At least one registered programme already operates in the state",
            ],
            correctIndex: 0,
            explanation:
              "The occupation must require related instruction to supplement the on-the-job learning, alongside practical supervised learning, industry recognition and the 2,000-hour floor.",
            sourceLessonSlug: "what-makes-an-occupation-apprenticeable",
          },
          {
            prompt: "Which agency registers Indiana apprenticeship programmes?",
            options: [
              "The federal one",
              "The state one, through its department of workforce development",
              "The professional licensing agency, for licensed trades only",
              "The joint committee that sponsors the programme",
            ],
            correctIndex: 0,
            explanation:
              "Indiana appears as an Apprenticeship Office rather than a State Apprenticeship Agency, and the paperwork is filed with the United States Department of Labor.",
            sourceLessonSlug: "what-makes-an-occupation-apprenticeable",
          },
          {
            prompt: "Which part of the federal promise does the word portable attach to?",
            options: [
              "The credential",
              "The licence, which travels with the holder between states",
              "The hours, which a receiving sponsor must accept in full",
              "The wage step, which is protected on moving employers",
            ],
            correctIndex: 0,
            explanation:
              "A nationally portable credential. A local board still decides licensing on arrival, because the credential and the licence are different things.",
            sourceLessonSlug: "what-makes-an-occupation-apprenticeable",
          },
          {
            prompt: "What is the recommended annual figure for related instruction?",
            options: [
              "144 hours",
              "720 hours, which is the total one Indianapolis sponsor publishes for five terms",
              "2,000 hours, the on-the-job floor for an apprenticeable occupation",
              "227.5 hours, the published length of the first level of one craft curriculum",
            ],
            correctIndex: 0,
            explanation:
              "A minimum of 144 hours for each year is recommended, and the regulation's word is recommended rather than required.",
            sourceLessonSlug: "the-standards-a-sponsor-must-write",
          },
          {
            prompt: "What does clause (b)(8) cap?",
            options: [
              "The probationary period",
              "The number of apprentices per journeyworker on a jobsite",
              "The proportion of a term that may be credited as advanced standing",
              "The hours of related instruction a sponsor may require in one year",
            ],
            correctIndex: 0,
            explanation:
              "It cannot exceed 25 percent of the length of the programme, or one year, whichever is shorter.",
            sourceLessonSlug: "the-standards-a-sponsor-must-write",
          },
          {
            prompt: "Which four things does lesson 8 say to take from a sponsor's standards?",
            options: [
              "Work processes, instruction hours, wages, ratio",
              "Cost, length, completion rate and employment rate",
              "Trade, city, county and state",
              "Vendor, fee, references and edition",
            ],
            correctIndex: 0,
            explanation:
              "Those four answers describe the next several years more accurately than a brochure will, and the standards are a document you can ask to read.",
            sourceLessonSlug: "the-standards-a-sponsor-must-write",
          },
          {
            prompt: "What does one Indianapolis electrical apprenticeship award besides journey status?",
            options: [
              "An associate degree",
              "A city master electrician licence on completion of the fifth term",
              "A state electrical licence issued through the training institute",
              "An accredited craft credential in four levels",
            ],
            correctIndex: 0,
            explanation:
              "An Applied Science Associate's Degree from a community college, at no cost beyond semester book fees, out of the same five years.",
            sourceLessonSlug: "union-and-non-union-pipelines",
          },
          {
            prompt: "What does the contractors' association say its completers are awarded?",
            options: [
              "An apprenticeship certificate",
              "A state licence recognised in every state where its chapters operate",
              "A transcript of hours completed in each craft, accepted by state boards",
              "A master credential in the craft, after a further examination",
            ],
            correctIndex: 0,
            explanation:
              "Completers are recognised at the journey level and awarded their apprenticeship certificate, which the association describes as an industry-recognised national credential.",
            sourceLessonSlug: "union-and-non-union-pipelines",
          },
          {
            prompt: "What does accreditation, rather than ownership of books, determine?",
            options: [
              "Who may issue the credentials",
              "Who may register an apprenticeship programme with the federal office",
              "Who may employ apprentices under a registered programme",
              "Who may sit the licensing examination in a regulated trade",
            ],
            correctIndex: 0,
            explanation:
              "The curriculum body accredits providers and its credentials are issued through them. Owning books, holding a licence or running a programme does not confer accreditation.",
            sourceLessonSlug: "union-and-non-union-pipelines",
          },
          {
            prompt: "What do the two federal quality elements for a pre-apprenticeship concern?",
            options: [
              "Approved training, and direct entry agreements",
              "Minimum hours, and a maximum age for participants",
              "Registration with an agency, and a published completion rate",
              "Employer sponsorship, and a wage during the preparation period",
            ],
            correctIndex: 0,
            explanation:
              "Training based on industry standards and approved by a registered programme partner, and agreements letting participants enter a registered programme directly.",
            sourceLessonSlug: "college-pre-apprenticeship-and-readiness",
          },
          {
            prompt: "What did every pipeline the course examined have in common?",
            options: [
              "No tuition for the trade training",
              "Registration with the federal Office of Apprenticeship",
              "An NCCER credential awarded on completion",
              "Operation within the state of Indiana",
            ],
            correctIndex: 0,
            explanation:
              "They are free, or paid, or employer-based. That is why a request for tuition is a signal to check the free routes first.",
            sourceLessonSlug: "college-pre-apprenticeship-and-readiness",
          },
          {
            prompt: "How does the community college programme in section 5 describe itself?",
            options: [
              "A fast path into the workforce",
              "A pre-apprenticeship with direct entry agreements to registered sponsors",
              "An apprenticeship route leading to journey level recognition",
              "A licensing preparation course for the county examinations",
            ],
            correctIndex: 0,
            explanation:
              "It calls itself a faster, more direct path into the construction workforce, and does not call itself an apprenticeship route. That distinction is the useful part.",
            sourceLessonSlug: "college-pre-apprenticeship-and-readiness",
          },
          {
            prompt: "What do the five hour thresholds on the Indianapolis plan of study measure?",
            options: [
              "On-the-job hours before each term",
              "Classroom hours required in each of the five terms",
              "Total hours of related instruction recommended per year",
              "The hours credited as advanced standing at each stage",
            ],
            correctIndex: 0,
            explanation:
              "2,000, 3,500, 5,000, 6,500 and 8,000 indentured hours, which shows the classroom being paced against the work.",
            sourceLessonSlug: "five-terms-in-the-sponsors-words",
          },
          {
            prompt: "What does term one of that plan of study consist of?",
            options: [
              "Safety, arithmetic, drawings and conduit",
              "Direct current and alternating current theory with circuitry",
              "Code depth, instrumentation and arc flash",
              "Motor controls, programmable logic and examination preparation",
            ],
            correctIndex: 0,
            explanation:
              "Nothing in it is advanced, because it is what a first-year apprentice needs in order to be useful and not hurt on a jobsite next week.",
            sourceLessonSlug: "five-terms-in-the-sponsors-words",
          },
          {
            prompt: "What order do both electrical curricula the course compares put the material in?",
            options: [
              "Safety, theory, calculations, specialisation",
              "Theory, calculations, safety, specialisation",
              "Specialisation, safety, theory, calculations",
              "Calculations, theory, specialisation, safety",
            ],
            correctIndex: 0,
            explanation:
              "Two organisations that disagree about nearly everything ordered the material the same way, which is a signal that the order reflects the work.",
            sourceLessonSlug: "four-levels-and-the-other-half",
          },
          {
            prompt: "Which subjects on a real apprenticeship plan of study are not trade subjects?",
            options: [
              "Maths, finance, human relations, writing, labour history",
              "Safety, first aid, elevated platforms and orientation",
              "Blueprints, code, building information modelling and drawings",
              "Grounding, transformers, fire alarm and telecommunications",
            ],
            correctIndex: 0,
            explanation:
              "Five of them, sitting in the terms alongside conduit bending and motor controls, because the trade thinks a journeyman needs them.",
            sourceLessonSlug: "four-levels-and-the-other-half",
          },
          {
            prompt: "Which two of those five does this catalog already teach?",
            options: [
              "The arithmetic and the labour history",
              "Personal finance and technical writing",
              "Human relations and personal finance",
              "Technical writing and labour history",
            ],
            correctIndex: 0,
            explanation:
              "Construction-math and history-of-unions. This course points at them rather than teaching the same material twice under a different title.",
            sourceLessonSlug: "four-levels-and-the-other-half",
          },
          {
            prompt: "Which two costs separate entering the trade from becoming a contractor?",
            options: [
              "Years of documented experience, and a bond with insurance",
              "Tuition for the training, and a fee for the completion certificate",
              "Union dues, and the cost of the related instruction books",
              "The examination fee, and the annual licence renewal",
            ],
            correctIndex: 0,
            explanation:
              "Entering costs very little money and a great deal of time. Contracting costs six documented years, a $10,000 bond, $500,000 of cover and a hearing.",
            sourceLessonSlug: "what-it-pays-and-what-it-costs",
          },
          {
            prompt: "How may an apprenticeship count toward a contractor licence in Indianapolis?",
            options: [
              "As up to two years of the six",
              "As the whole of the practical work experience requirement",
              "As a waiver of the examination for applicants who completed a registered programme",
              "As a reduction in the surety bond the ordinance requires",
            ],
            correctIndex: 0,
            explanation:
              "The board's application says it may assign up to two years of experience for successful completion of related college courses, or a related apprenticeship.",
            sourceLessonSlug: "what-it-pays-and-what-it-costs",
          },
          {
            prompt: "What distinguishes the contractor examination from the journeyman one in Indiana plumbing?",
            options: [
              "Business and law",
              "Length, since the contractor examination runs twice as long",
              "Format, since only the contractor examination is open book",
              "Passing score, which is higher for the contractor licence",
            ],
            correctIndex: 0,
            explanation:
              "Both are 90 questions in 3 hours. The business section grows from 6 questions to 14 and the technical sections shrink to make room.",
            sourceLessonSlug: "open-book-and-the-wrong-edition",
          },
          {
            prompt: "What kind of skill does an open book timed examination actually test?",
            options: [
              "Finding things quickly",
              "Memorising the code, since the references may not be consulted during the test",
              "Estimating, since exact figures may be looked up",
              "Writing, since candidates must justify their answers in the references",
            ],
            correctIndex: 0,
            explanation:
              "It rewards a candidate who has lived in the book and tabbed it, and punishes one who expects to read it during the test.",
            sourceLessonSlug: "open-book-and-the-wrong-edition",
          },
          {
            prompt: "What is the edition trap?",
            options: [
              "Buying the current code when the state enforces an older one",
              "Bringing an older edition to an examination that requires the current one",
              "Studying a state amendment that has since been repealed",
              "Using a commentary volume where the plain code is required",
            ],
            correctIndex: 0,
            explanation:
              "Indiana's rule adopts the 2008 electrical edition, and free exam preparation quoting the newest edition will send a candidate to the wrong book.",
            sourceLessonSlug: "open-book-and-the-wrong-edition",
          },
          {
            prompt: "Which document tells you which edition your state enforces?",
            options: [
              "The state's adoption rule",
              "The model code publisher's list of state adoptions",
              "The testing vendor's practice materials for that state",
              "The licensing board's application form",
            ],
            correctIndex: 0,
            explanation:
              "The adoption rule is public and free even when the code it adopts is not, and reading it takes about ten minutes.",
            sourceLessonSlug: "open-book-and-the-wrong-edition",
          },
          {
            prompt: "What does Part 30 add to the apprenticeship regulation?",
            options: [
              "A prohibition on discrimination, and a sanction",
              "A minimum wage progression for apprentices in registered programmes",
              "A national register of journeyworkers and their completion certificates",
              "A requirement that every state establish its own apprenticeship agency",
            ],
            correctIndex: 0,
            explanation:
              "It prohibits discrimination against apprentices and applicants, requires affirmative action, and provides for deregistration of non-compliant programmes.",
            sourceLessonSlug: "part-30-and-the-history-it-answers",
          },
          {
            prompt: "Why is exclusion at the apprentice stage so effective at closing a trade?",
            options: [
              "Everything above depends on it and no reason is stated",
              "Because apprenticeship places are capped by the ratio in the standards",
              "Because a rejected applicant may not reapply to the same programme",
              "Because the certified payroll records rejections as well as hires",
            ],
            correctIndex: 0,
            explanation:
              "No apprenticeship means no journeyman status, which means no route to the experience a contractor licence requires, and it leaves no paperwork behind.",
            sourceLessonSlug: "part-30-and-the-history-it-answers",
          },
          {
            prompt: "What does the course say a learner leaves with?",
            options: [
              "A way of finding out",
              "Documented hours toward a registered apprenticeship",
              "Eligibility to sit a licensing examination in their own state",
              "A credential recognised by the sponsors the course names",
            ],
            correctIndex: 0,
            explanation:
              "Not a qualification. A way of finding out, plus a short list of bodies that are obliged to answer.",
            sourceLessonSlug: "what-to-ask-and-where-to-go",
          },
        ],
      },
    },
  ],
};

// ══════════════════════════════════════════════════════════════════════════════════════════════
// PROPOSED RESEARCH CHECKS for src/lib/research-checks.ts (I do not own that file; these are for
// whoever registers the course). `course` is the slug to be registered, `how-the-trades-work`.
// Every one of these exists because a number in a lesson carries a read-date and will move.
//
//  A. key "trades-eti-wage-and-hours" · severity medium · lessons "what-it-pays-and-what-it-costs"
//     and "five-terms-in-the-sponsors-words"
//     claim: An Indianapolis electrical apprenticeship sponsor publishes an apprentice start of
//            $22.90/hr, a completion minimum of $48.90/hr, 720 classroom hours and 8,000 OJT hours
//            over five terms, and an associate degree at no cost beyond semester book fees.
//     quote: "Those are one sponsor's published figures for one trade in one city on one date."
//     stakes: These are a sponsor's own pages, accurate on 2026-09-20 and certain to move. A stale
//            wage figure in a careers course is the kind of number a learner plans around.
//     needs: the current published figures, re-read, with the date.
//     where: eti-indy.org/electrician-program/ and ibew481.org/apprenticeship/.
//
//  B. key "trades-indy-electrical-application-currency" · severity medium · lessons
//     "no-state-electrical-licence" and "what-it-pays-and-what-it-costs"
//     claim: The board's application states no state electrical licence exists, requires a notarised
//            employer letter for six years, three customer references and an appearance before the
//            board, sends candidates to an ICC examination at a 75% minimum, and handles reciprocity
//            by a letter verifying a Prometric examination sent directly by the other jurisdiction.
//     quote: "It also contains a board meeting calendar that ends in 2024."
//     stakes: The ordinance is current; the FORM may be behind it. Lesson 2 teaches the gap openly,
//            but a fee, a deadline or a vendor could have changed since.
//     needs: the current application form, its date, and confirmation of the examination vendor.
//     where: the Indianapolis Board of Electrical Examiners via the Department of Business and
//            Neighborhood Services; media.graphassets.com/BM4sUhq0QMFY1xQCdx6i was the copy read.
//
//  C. key "trades-marion-county-exam-bulletin" · severity medium · lesson
//     "open-book-and-the-wrong-edition"
//     claim: Marion County examinations administered by Prov cost $80.00, run 50 to 100 questions
//            and 2 to 4 hours, cover air conditioning, high pressure steam, refrigeration and
//            wrecking with no electrical examination, and are open book under stated reference rules.
//     quote: "from that bulletin dated 1 March 2022"
//     stakes: Four years old at the time of writing. The open-book reference rules are the most
//            operationally useful content in section 7 and are the most likely to have been revised.
//     needs: the current candidate information bulletin and its date.
//     where: provexam.com, Indiana Marion County candidate information bulletin.
//
//  D. key "trades-indiana-nec-edition" · severity high · lesson "open-book-and-the-wrong-edition"
//     claim: The lesson teaches that 675 IAC 17-1.8 adopts NFPA 70, 2008 Edition, First Printing,
//            effective 26 August 2009, and was listed as currently in effect on 2026-09-20.
//     quote: "One commercial site seen on 20 September 2026 described a pending Indiana adoption of
//            a newer electrical edition; it was not on the Commission's own currently-in-effect
//            table, so this course does not treat it as a fact"
//     stakes: If a newer edition is adopted, the single most load-bearing fact in section 7 flips,
//            and a learner following the lesson would buy the wrong book. Highest-severity check in
//            this course.
//     needs: the Commission's currently-in-effect rules table, re-read, with the date.
//     where: in.gov/dhs/boards-and-commissions/fpbsc-rules/.
//
//  E. key "trades-ivy-tech-construction-skills-url" · severity low · lesson
//     "college-pre-apprenticeship-and-readiness"
//     claim: A one-semester Construction Skills Training Program in Indianapolis, described as free
//            via the Lennar Foundation, awarding NCCER Core, NCCER Carpentry Level 1 and OSHA 30.
//     stakes: The research recorded the CONTENT but not the canonical deep URL, so the citation
//            points at the site root. An APA entry that cannot be followed to the page is weak, and
//            the citation-verification queue will surface it.
//     needs: the canonical page URL, plus the current programme description and funding statement.
//     where: ivytech.edu Indianapolis partnerships and special programs.
//
//  F. key "trades-local-pre-apprenticeship-details" · severity low · lesson
//     "college-pre-apprenticeship-and-readiness"
//     claim: NOTHING is printed about the Indianapolis pre-apprenticeship BAM is in. Its hours,
//            length, schedule, credentials and pre-apprenticeship designation were REPORTED only
//            (search summaries; the event page 404'd), so the lesson teaches the federal definition
//            and the two quality-element questions instead.
//     stakes: If verified, section 5 gains a named local example of exactly the thing it defines,
//            which is the strongest possible illustration for a learner in this city.
//     needs: the programme's own enrolment materials, or the delivering organisation in writing.
//     where: the Indiana Construction Roundtable Foundation and the delivering neighbourhood centre.
//            BAM is inside the programme and can settle it in one conversation.
//
//  G. key "trades-national-union-programme-structures" · severity low · lesson
//     "union-and-non-union-pipelines"
//     claim: The lesson prints per-year hour structures for NO national union programme, because
//            the electrical training ALLIANCE pages 404'd or carried no figures, ua.org states no
//            per-year hours, and carpenters.org returned an article with no specifications.
//     stakes: The course currently leans on one city's sponsor for every hour figure and labels it
//            as such. National figures would let section 5 generalise honestly.
//     needs: per-year OJT and classroom hours published by a national body, not a local page.
//     where: electricaltrainingalliance.org, ua.org, carpenters.org.
//
//  H. key "trades-indiana-exam-vendors" · severity low · lesson "open-book-and-the-wrong-edition"
//     claim: The course names only ICC (Indianapolis electrical, via the board's application) and
//            Prov (Indiana plumbing and Marion County). PSI is named in secondary licensing guides
//            as an Indiana vendor and is NOT printed anywhere in this course.
//     needs: the vendor of record for each Indiana trade examination, from the licensing authority.
//     where: the Indiana Professional Licensing Agency and the Indianapolis board.
//
// RESOLVED IN THIS PASS, so NO check is needed:
//   - Whether Indianapolis licenses journeymen: it does not. Revised Code 875-202 creates master and
//     residential only, and the code-wide search for "journeyman" returns one certified-payroll hit
//     at 261-408. The contradictory commercial hour figures are attributed and used as the worked
//     wrong answer, never asserted.
//   - Whether Indiana has a state electrical licence: it does not, per the board's own application.
//   - Whether Indiana licenses a journeyman plumber: it does, through the Plumbing Commission under
//     IC 25-28.5 with rules at 860 IAC 1-1 and 860 IAC 2-1.
//   - Which agency registers Indiana apprenticeships: the federal Office of Apprenticeship.
//
// ══════════════════════════════════════════════════════════════════════════════════════════════
// FOR THE REGISTERING AGENT (outside this file; I did not edit any shared registry).
//
// PROPOSED REGISTRATION BLOCK for scripts/seed-courses.ts:
//
//   await seedAuthoredCourse(db, {
//     tenantId: learnWitus,
//     instructorId,
//     slug: "how-the-trades-work",
//     course: HOW_THE_TRADES_WORK_COURSE,
//     category: "Careers & Media",
//     additionalCategories: ["Money & Property"],
//     navigationMode: "linear",
//     price: 0,
//     priceType: "free",
//     visibility: "private",
//     publishHoldReason:
//       "Private study for BAM, built from the Option B plan in plans/future-courses/construction/2026-09-20-journeyman-curriculum-research.md, chosen 2026-09-20. Every fee, hour, wage, code edition and examination figure was read on 2026-09-20 and prints that date, and several sit on sponsor and vendor pages that will move. Held private until those research checks are answered, the refusal list in lesson 1 has been read by BAM personally, and the Indiana worked example has been re-checked against the ordinance and the state agencies.",
//   });
//
//   NO seriesSlug, NO seriesCode, NO seriesPosition: BAM's 2026-09-19 decision that private courses
//   carry no CREDIT codes applies here too.
//
// WHY "Careers & Media" AS THE PRIMARY CATEGORY: the course's one job is how a person enters an
// occupation. It is a career-entry course throughout: what the job title means, who decides whether
// you may hold it, which programmes take you, what they require and award, and whom to ask. Money &
// Property goes in additionalCategories because section 7 is entirely wages, fees, bonds, insurance
// and what the training costs, which is the money half of the same decision. "Trade Skills" was
// considered and NOT proposed, because the course teaches no trade skill and a learner browsing that
// category for hands-on training would be misdirected; if BAM wants it for findability it belongs in
// additionalCategories, not as the primary, and that is his call.
//
//  - CITATIONS: add `how-the-trades-work` to STAGED_COURSES in src/lib/citations.ts and run
//    `pnpm gen:citations` once seeded. Every lesson carries an APA 7 `## Sources` block, and the
//    sources are a federal regulation, a municipal ordinance, two state agencies, a city licensing
//    board, a testing vendor's two candidate bulletins, and six training organisations' own pages.
//  - STANDARDS: this is a career and technical education subject (career pathways, credentials,
//    reading a regulation and a local ordinance, employability). If a CTE or civics claim in
//    src/lib/standards/ fits, MAP it; until then it needs a one-line BACKLOG entry in
//    scripts/check-standards-coverage.ts. Do not widen an existing claim to fit it.
//  - SPEC: after registration run `npx tsx scripts/audit-course.ts how-the-trades-work --spec`.
//    Computed by hand before registration, every section pools at or above 90% of round(words/35):
//    S1 1792w target 51 pool 47 · S2 1660/47/45 · S3 1601/46/44 · S4 1677/48/44 · S5 1640/47/43 ·
//    S6 1502/43/43 · S7 1980/57/52 · S8 1539/44/43 · final pools 42 serving 10.
//  - NO MIGRATION. `pnpm seed:courses` (and `pnpm seed:courses:prod` on deploy) is all this needs.
//  - DOCS: it is a new private course, so the README course list and src/lib/roadmap.ts want a line.
